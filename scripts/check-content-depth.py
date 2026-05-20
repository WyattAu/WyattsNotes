#!/usr/bin/env python3
"""
Content depth checker for Docusaurus documentation.

Validates files against CONTENT_STANDARD.md tier requirements:
- Minimum body line counts per tier
- Mandatory sections (Common Pitfalls, Worked Examples, Summary, Cross-References)
"""

import argparse
import os
import re
import sys


LANDING_NAMES = {"index.md", "intro.md", "_index_.md"}

TIER2_DIRS = {"docs_alevel", "docs_ib", "docs_dse", "docs_qualifications"}
INFRA_DIRS = {"docs_infrastructure", "docs_tools"}
UNI_DIRS = {"docs_university"}

MIN_LINES = {
    1: 30,
    2: 80,
    3: 120,
    4: 150,
    "infra": 50,
}

MANDATORY_SECTIONS = {
    "common pitfalls",
    "worked examples",
    "summary",
    "cross-references",
}


def parse_args():
    parser = argparse.ArgumentParser(
        description="Check content depth against CONTENT_STANDARD.md tier requirements"
    )
    parser.add_argument(
        "directory",
        nargs="?",
        default="docs/",
        help="Directory to scan (default: docs/)",
    )
    return parser.parse_args()


def strip_frontmatter(content):
    """Return content with frontmatter removed."""
    if not content.startswith("---"):
        return content
    end = content.find("---", 3)
    if end == -1:
        return content
    return content[end + 3:]


def count_body_lines(body):
    """Count non-blank lines in body text."""
    return sum(1 for line in body.split("\n") if line.strip())


def classify_tier(filepath, filename):
    """Determine tier for a file based on path and name."""
    if filename.lower() in LANDING_NAMES:
        return 1

    name_lower = filename.lower()
    if "advanced" in name_lower or "depth" in name_lower:
        return 3

    parts = filepath.replace("\\", "/").split("/")

    if any(d in parts for d in UNI_DIRS):
        return 4

    if any(d in parts for d in INFRA_DIRS):
        return "infra"

    if any(d in parts for d in TIER2_DIRS):
        return 2

    return 2


def find_sections(body):
    """Extract lowercase H2 headings from body, return matching mandatory sections."""
    found = set()
    for line in body.split("\n"):
        m = re.match(r"^##\s+(.+)$", line.strip())
        if m:
            heading = m.group(1).strip().lower()
            heading = re.sub(r"\$[^$]+\$", "", heading)
            heading = re.sub(r"\\[a-zA-Z]+\{[^}]*\}", "", heading)
            heading = re.sub(r"[{}]", "", heading)
            heading = heading.strip()
            for section in MANDATORY_SECTIONS:
                if section in heading:
                    found.add(section)
    return found


def check_mandatory_sections(tier, sections):
    """Return list of missing mandatory section names."""
    missing = []

    if tier == "infra" or tier == 1:
        return missing

    cp = "common pitfalls"
    we = "worked examples"
    su = "summary"
    cr = "cross-references"

    if tier == 2:
        if not any(s in sections for s in (cp, we, su)):
            missing = [cp, we, su]
    elif tier == 3:
        for s in (cp, we, su):
            if s not in sections:
                missing.append(s)
    elif tier == 4:
        for s in (cp, we, su):
            if s not in sections:
                missing.append(s)
        if cr not in sections:
            missing.append(cr)

    return missing


def format_tier(tier):
    if tier == "infra":
        return "Infrastructure"
    return f"Tier {tier}"


def scan_file(filepath):
    """Scan a single file. Returns (status, message) or None if skipped."""
    filename = os.path.basename(filepath)
    if filename == "_category_.json":
        return None

    parts = filepath.replace("\\", "/").split("/")
    if "diagnostics" in parts:
        return None

    if not filename.endswith(".md"):
        return None

    try:
        with open(filepath, "r", encoding="utf-8", errors="replace") as f:
            content = f.read()
    except OSError:
        return ("ERROR", f"[ERROR] {filepath}: could not read file")

    body = strip_frontmatter(content)
    body_lines = count_body_lines(body)
    tier = classify_tier(filepath, filename)
    min_lines = MIN_LINES[tier]
    sections = find_sections(body)
    missing = check_mandatory_sections(tier, sections)

    rel = os.path.relpath(filepath)
    tier_label = format_tier(tier)

    status = "OK"
    messages = []

    if body_lines < min_lines:
        status = "WARN"
        messages.append(f"[WARN] {rel}: {tier_label}, {body_lines} body lines (min {min_lines})")

    if missing:
        if status != "WARN":
            status = "ERROR"
        missing_str = ", ".join(s.title() for s in missing)
        messages.append(f"[ERROR] {rel}: {tier_label}, missing {missing_str}")

    if not messages:
        messages.append(f"[OK] {rel}: {tier_label}, {body_lines} body lines")

    return (status, messages)


def main():
    args = parse_args()
    target = args.directory.rstrip("/")

    if not os.path.isdir(target):
        print(f"Error: {target}/ not found")
        sys.exit(1)

    md_files = []
    for root, _dirs, files in os.walk(target):
        for f in sorted(files):
            md_files.append(os.path.join(root, f))

    total = 0
    passing = 0
    warnings = 0
    errors = 0

    results = []

    for fp in sorted(md_files):
        result = scan_file(fp)
        if result is None:
            continue
        total += 1
        status, messages = result
        if status == "OK":
            passing += 1
        elif status == "WARN":
            warnings += 1
        elif status == "ERROR":
            errors += 1
        results.extend(messages)

    for msg in results:
        print(msg)

    print()
    print(f"=== Content Depth Summary ===")
    print(f"Total files checked: {total}")
    print(f"Files passing: {passing}")
    print(f"Files with warnings: {warnings}")
    print(f"Files with errors: {errors}")

    if errors > 0:
        sys.exit(1)
    sys.exit(0)


if __name__ == "__main__":
    main()
