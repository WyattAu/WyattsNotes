#!/usr/bin/env python3
"""Analyze Algolia search configuration vs content directories for coverage gaps."""

import os
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

SEARCH_PAGE = REPO_ROOT / "src" / "pages" / "search.tsx"
WORKFLOW_FILE = REPO_ROOT / ".github" / "workflows" / "algolia-index.yml"
DOCS_DIR = REPO_ROOT / "docs"

MARKDOWN_EXTENSIONS = {".md", ".mdx"}

INDEX_NAME_RE = re.compile(r"indexName:\s*'([^']+)'")
WORKFLOW_SITE_RE = re.compile(r"site:\s*\[([^\]]+)\]")


def extract_search_indices(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8")
    indices: dict[str, str] = {}
    for m in INDEX_NAME_RE.finditer(text):
        indices[m.group(1)] = m.group(0).strip()
    return indices


def extract_workflow_sites(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8")
    m = WORKFLOW_SITE_RE.search(text)
    if not m:
        return []
    raw = m.group(1)
    return [s.strip().strip("'\"") for s in raw.split(",")]


def find_docusaurus_configs() -> list[Path]:
    configs = sorted(REPO_ROOT.glob("docusaurus*.config.ts"))
    return configs


def find_docs_directories() -> dict[str, Path]:
    dirs = {}
    for entry in sorted(DOCS_DIR.iterdir()):
        if entry.is_dir() and entry.name.startswith("docs_"):
            dirs[entry.name] = entry
    return dirs


def count_content_files(path: Path) -> int:
    count = 0
    for root, _dirs, files in os.walk(path):
        for f in files:
            if Path(f).suffix in MARKDOWN_EXTENSIONS:
                count += 1
    return count


def build_index_to_docs_mapping(configs: list[Path]) -> dict[str, list[str]]:
    mapping: dict[str, list[str]] = {}
    for cfg in configs:
        text = cfg.read_text(encoding="utf-8")
        doc_dirs = re.findall(r"path:\s*'docs/docs_([^']+)'", text)
        algolia_indices = re.findall(r"algolia:\s*\{[^}]*indexName:\s*'([^']+)'", text, re.DOTALL)
        if not algolia_indices:
            algolia_indices = re.findall(r"createAlgoliaConfig\('([^']+)'\)", text)
        for d in doc_dirs:
            top_dir = d.split("/")[0]
            key = f"docs_{top_dir}"
            for idx in algolia_indices:
                if key not in mapping.get(idx, []):
                    mapping.setdefault(idx, []).append(key)
            if not algolia_indices:
                fk = f"wyattsnotes_{top_dir}"
                if key not in mapping.get(fk, []):
                    mapping.setdefault(fk, []).append(key)
    return mapping


def main() -> int:
    print("=" * 60)
    print("  Algolia Search Index Coverage Report")
    print("=" * 60)

    search_indices = extract_search_indices(SEARCH_PAGE)
    workflow_sites = extract_workflow_sites(WORKFLOW_FILE)
    docusaurus_configs = find_docusaurus_configs()
    docs_dirs = find_docs_directories()

    print(f"\nSearch page indices ({len(search_indices)}):")
    for idx in search_indices:
        print(f"  - {idx}")

    print(f"\nWorkflow dispatch sites: {workflow_sites}")

    print(f"\nDocusaurus configs ({len(docusaurus_configs)}):")
    for cfg in docusaurus_configs:
        text = cfg.read_text(encoding="utf-8")
        doc_dirs = re.findall(r"path:\s*'docs/docs_([^']+)'", text)
        algolia_indices = re.findall(r"algolia:\s*\{[^}]*indexName:\s*'([^']+)'", text, re.DOTALL)
        if not algolia_indices:
            algolia_indices = re.findall(r"createAlgoliaConfig\('([^']+)'\)", text)
        print(f"  - {cfg.name}: docs={doc_dirs}, algolia={algolia_indices}")

    print(f"\nContent directories ({len(docs_dirs)}):")
    dir_counts: dict[str, int] = {}
    for name, path in docs_dirs.items():
        c = count_content_files(path)
        dir_counts[name] = c
        print(f"  - {name}: {c} content files")

    index_to_docs = build_index_to_docs_mapping(docusaurus_configs)

    all_algolia_indices = set(search_indices.keys())

    docs_dir_names = set(docs_dirs.keys())
    index_dir_names = {d for dirs in index_to_docs.values() for d in dirs}

    gaps: list[str] = []
    warnings: list[str] = []

    print("\n" + "-" * 60)
    print("  Cross-Reference Analysis")
    print("-" * 60)

    unindexed_dirs = docs_dir_names - index_dir_names
    if unindexed_dirs:
        print(f"\n[MISSING] Content directories with no Algolia index:")
        for d in sorted(unindexed_dirs):
            gaps.append(f"docs directory '{d}' ({dir_counts[d]} files) has no corresponding Algolia index")
            print(f"  ! {d} ({dir_counts[d]} files)")
    else:
        print("\n[OK] All content directories have a corresponding Algolia index.")

    index_missing_dirs = index_dir_names - docs_dir_names
    if index_missing_dirs:
        print(f"\n[MISSING] Algolia indices referencing non-existent docs directories:")
        for d in sorted(index_missing_dirs):
            gaps.append(f"Algolia index references docs directory '{d}' which does not exist")
            print(f"  ! {d}")
    else:
        print("[OK] All Algolia index docs references exist on disk.")

    search_index_names = set(search_indices.keys())
    search_missing_on_disk = search_index_names - set(index_to_docs.keys())
    if search_missing_on_disk:
        print(f"\n[WARN] Search page indices not in any docusaurus config:")
        for idx in sorted(search_missing_on_disk):
            warnings.append(f"Search index '{idx}' not found in any docusaurus config mapping")
            print(f"  ~ {idx}")
    else:
        print("[OK] All search page indices are mapped in docusaurus configs.")

    config_indices_not_in_search = set(index_to_docs.keys()) - search_index_names
    if config_indices_not_in_search:
        print(f"\n[WARN] Indices in docusaurus configs but not on search page:")
        for idx in sorted(config_indices_not_in_search):
            warnings.append(f"Config index '{idx}' ({', '.join(index_to_docs[idx])}) not in search page INDICES")
            print(f"  ~ {idx} -> {index_to_docs[idx]}")

    print("\n" + "-" * 60)
    print("  Coverage Summary")
    print("-" * 60)

    total_files = sum(dir_counts.values())
    indexed_files = sum(dir_counts[d] for d in docs_dir_names & index_dir_names)
    coverage_pct = (indexed_files / total_files * 100) if total_files else 0

    print(f"\n  Total content directories: {len(docs_dirs)}")
    print(f"  Total content files:      {total_files}")
    print(f"  Indexed directories:      {len(docs_dir_names & index_dir_names)}")
    print(f"  Indexed files:            {indexed_files}")
    print(f"  Coverage:                 {coverage_pct:.1f}%")
    print(f"  Search page indices:      {len(search_indices)}")
    print(f"  Workflow dispatch sites:  {len(workflow_sites)}")

    if gaps:
        print(f"\n  GAPS FOUND: {len(gaps)}")
        for g in gaps:
            print(f"    - {g}")
    else:
        print("\n  No coverage gaps detected.")

    if warnings:
        print(f"\n  WARNINGS: {len(warnings)}")
        for w in warnings:
            print(f"    - {w}")

    print()
    return 1 if gaps else 0


if __name__ == "__main__":
    sys.exit(main())
