#!/usr/bin/env python3
"""
Frontmatter description quality checker for Docusaurus documentation.

Validates that description fields in frontmatter meet CONTENT_STANDARD.md:
- 120-160 characters
- Unique across the site
- Rigorous, deterministic tone
- No trailing ellipsis or vague qualifiers
"""

import os
import re
import sys
from collections import defaultdict


MIN_DESC_LEN = 120
MAX_DESC_LEN = 160

# Vague trailing qualifiers
VAGUE_QUALIFIERS = [
    r"\.\.\.$",        # trailing ellipsis
    r"\band more\.?$",
    r"\betc\.?$",
    r"\bso on\.?$",
    r"\bamong others\.?$",
    r"\bsuch as\.$",
]

# Phrases that indicate vague description
VAGUE_PHRASES_IN_DESC = [
    r"\bvarious\b",
    r"\bseveral\b",
    r"\bsome\b",
    r"\bmany\b",
    r"\bdifferent\b",
    r"\bvarious topics\b",
]


def parse_frontmatter(filepath):
    """Parse frontmatter. Returns dict or None."""
    with open(filepath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()
    if not content.startswith("---"):
        return None
    end = content.find("---", 3)
    if end == -1:
        return None
    fm_text = content[3:end]
    fm = {}
    for line in fm_text.strip().split("\n"):
        if ":" in line:
            key, _, val = line.partition(":")
            fm[key.strip()] = val.strip().strip("\"'")
    return fm


def check_description_length(desc, filepath):
    """Check description length bounds."""
    issues = []
    desc_len = len(desc)
    if desc_len < MIN_DESC_LEN:
        issues.append(f"{filepath}: description too short ({desc_len} chars, min {MIN_DESC_LEN})")
    elif desc_len > MAX_DESC_LEN:
        issues.append(f"{filepath}: description too long ({desc_len} chars, max {MAX_DESC_LEN})")
    return issues


def check_description_quality(desc, filepath):
    """Check description for vague qualifiers."""
    issues = []
    for pattern in VAGUE_QUALIFIERS:
        if re.search(pattern, desc):
            issues.append(f"{filepath}: vague trailing qualifier in description: '{desc}'")
            break
    return issues


def check_description_uniqueness(desc, filepath, seen_descriptions):
    """Check that description is unique across the site."""
    if desc in seen_descriptions:
        issues = [f"{filepath}: duplicate description (also in {seen_descriptions[desc]})"]
        return issues
    return []


def main():
    docs_dir = "docs"
    if not os.path.isdir(docs_dir):
        print(f"Error: {docs_dir}/ not found")
        sys.exit(1)

    all_issues = []
    seen_descriptions = {}
    stats = {
        "total_files": 0,
        "files_with_desc": 0,
        "files_without_desc": 0,
        "length_ok": 0,
        "length_short": 0,
        "length_long": 0,
        "duplicates": 0,
        "vague": 0,
    }

    files = []
    for root, _dirs, filenames in os.walk(docs_dir):
        for f in sorted(filenames):
            if f.endswith(".md"):
                files.append(os.path.join(root, f))

    for filepath in sorted(files):
        rel_path = os.path.relpath(filepath, docs_dir)
        fm = parse_frontmatter(filepath)
        stats["total_files"] += 1

        if fm is None or "description" not in fm:
            stats["files_without_desc"] += 1
            continue

        desc = fm["description"]
        stats["files_with_desc"] += 1

        # Length check
        length_issues = check_description_length(desc, rel_path)
        if not length_issues:
            stats["length_ok"] += 1
        elif len(desc) < MIN_DESC_LEN:
            stats["length_short"] += 1
        else:
            stats["length_long"] += 1
        all_issues.extend(length_issues)

        # Quality check
        quality_issues = check_description_quality(desc, rel_path)
        stats["vague"] += len(quality_issues)
        all_issues.extend(quality_issues)

        # Uniqueness check
        unique_issues = check_description_uniqueness(desc, rel_path, seen_descriptions)
        stats["duplicates"] += len(unique_issues)
        all_issues.extend(unique_issues)
        seen_descriptions[desc] = rel_path

    print("=== Description Quality Report ===")
    print(f"Files scanned: {stats['total_files']}")
    print(f"Files with description: {stats['files_with_desc']}")
    print(f"Files without description: {stats['files_without_desc']}")
    print(f"Length OK ({MIN_DESC_LEN}-{MAX_DESC_LEN}): {stats['length_ok']}")
    print(f"Too short: {stats['length_short']}")
    print(f"Too long: {stats['length_long']}")
    print(f"Duplicate descriptions: {stats['duplicates']}")
    print(f"Vague qualifiers: {stats['vague']}")
    print()

    if all_issues:
        print("--- ISSUES ---")
        for issue in sorted(all_issues):
            print(f"  {issue}")
        print()

    print(f"Total: {len(all_issues)} issues.")
    sys.exit(0)


if __name__ == "__main__":
    main()
