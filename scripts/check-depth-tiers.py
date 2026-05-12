#!/usr/bin/env python3
"""
Content depth tier checker for Docusaurus documentation.

Validates that content files meet minimum line count and section requirements
as defined in CONTENT_STANDARD.md.

Tier 1: Landing/index pages -- min 30 body lines
Tier 2: Standard topic pages -- min 80 body lines
Tier 3: Depth/expansion pages -- min 120 body lines
Tier 4: University/reference pages -- min 150 body lines
"""

import os
import re
import sys
from collections import defaultdict


# Tier classification by docs directory
TIER_MAP = {
    "docs_university": 4,
    "docs_tools/probabilisticml": 4,
}

MIN_LINES = {
    1: 30,
    2: 80,
    3: 120,
    4: 150,
}

LANDING_NAMES = {"intro.md", "index.md", "_index.md"}

REQUIRED_SECTIONS_T2 = {"common pitfalls", "worked examples", "summary"}
REQUIRED_SECTIONS_T3 = {"common pitfalls", "worked examples"}
REQUIRED_SECTIONS_T4 = {"common pitfalls", "worked examples"}


def parse_frontmatter(content):
    """Extract frontmatter as dict. Returns (fm_dict, body_start_line)."""
    if not content.startswith("---"):
        return {}, 0
    end = content.find("---", 3)
    if end == -1:
        return {}, 0
    fm_text = content[3:end]
    fm = {}
    for line in fm_text.strip().split("\n"):
        if ":" in line:
            key, _, val = line.partition(":")
            fm[key.strip()] = val.strip().strip("\"'")
    # body starts after second ---
    body_start = content.index("---", 3) + 3
    # skip blank lines after frontmatter
    while body_start < len(content) and content[body_start].strip() == "":
        body_start += 1
    return fm, body_start


def classify_tier(filepath, rel_dir, filename, fm):
    """Determine content depth tier."""
    # Landing pages are always tier 1
    if filename.lower() in LANDING_NAMES:
        return 1

    # Explicit tier from TIER_MAP (longest prefix match)
    for prefix, tier in sorted(TIER_MAP.items(), key=lambda x: -len(x[0])):
        if rel_dir.startswith(prefix):
            return tier

    # Files with hide_table_of_contents are likely diagnostic/auxiliary
    if fm.get("hide_table_of_contents") == "true":
        return 1

    # Default: tier 2
    return 2


def extract_headings(content, body_start):
    """Extract all H2 headings from body."""
    headings = set()
    for line in content[body_start:].split("\n"):
        m = re.match(r"^##\s+(.+)$", line.strip())
        if m:
            heading = m.group(1).strip().lower()
            # Strip KaTeX
            heading = re.sub(r"\$[^$]+\$", "", heading)
            heading = re.sub(r"\\[a-zA-Z]+\{[^}]*\}", "", heading)
            heading = re.sub(r"[{}]", "", heading)
            heading = heading.strip().lower()
            headings.add(heading)
    return headings


def check_file(filepath, rel_dir, filename):
    """Check a single file. Returns list of issues."""
    with open(filepath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()

    fm, body_start = parse_frontmatter(content)
    tier = classify_tier(filepath, rel_dir, filename, fm)

    body = content[body_start:]
    body_lines = body.strip().split("\n")
    # Filter out empty lines for count
    non_empty_lines = [l for l in body_lines if l.strip()]
    line_count = len(non_empty_lines)

    issues = []

    min_lines = MIN_LINES[tier]
    if line_count < min_lines:
        issues.append(
            f"{rel_dir}/{filename}: TIER {tier} requires {min_lines} lines, has {line_count}"
        )

    # Check required sections for tier 2+
    if tier >= 2:
        headings = extract_headings(content, body_start)
        required = REQUIRED_SECTIONS_T2 if tier == 2 else (
            REQUIRED_SECTIONS_T3 if tier == 3 else REQUIRED_SECTIONS_T4
        )

        for section in required:
            if not any(section in h for h in headings):
                issues.append(
                    f"{rel_dir}/{filename}: TIER {tier} missing required section '{section}'"
                )

    return tier, line_count, issues


def main():
    docs_dir = "docs"
    if not os.path.isdir(docs_dir):
        print(f"Error: {docs_dir}/ not found")
        sys.exit(1)

    results = defaultdict(list)
    all_issues = []
    tier_counts = defaultdict(int)

    for root, dirs, files in os.walk(docs_dir):
        for f in sorted(files):
            if not f.endswith(".md"):
                continue
            filepath = os.path.join(root, f)
            rel_dir = os.path.relpath(root, docs_dir)
            tier, line_count, issues = check_file(filepath, rel_dir, f)
            tier_counts[tier] += 1
            results[tier].append((rel_dir + "/" + f, line_count))
            all_issues.extend(issues)

    print("=== Content Depth Tier Report ===")
    print()
    for tier in sorted(tier_counts.keys()):
        files = results[tier]
        min_lines = MIN_LINES[tier]
        below = sum(1 for _, lc in files if lc < min_lines)
        print(f"Tier {tier} ({min_lines} lines min): {len(files)} files, {below} below threshold")

    if all_issues:
        print(f"\n--- ISSUES ({len(all_issues)}) ---")
        for issue in sorted(all_issues):
            print(f"  {issue}")
        print()

        # Summary by directory
        dir_issues = defaultdict(int)
        for issue in all_issues:
            parts = issue.split("/")
            dir_issues[parts[0]] += 1
        print("--- BY DIRECTORY ---")
        for d, c in sorted(dir_issues.items(), key=lambda x: -x[1]):
            print(f"  {d}: {c} issues")
        print()
        sys.exit(1)
    else:
        print("\nAll files meet depth tier requirements.")
        sys.exit(0)


if __name__ == "__main__":
    main()
