#!/usr/bin/env python3
"""Fix missing required sections flagged by check-depth-tiers.py."""

import re
import subprocess
import sys
from collections import defaultdict


def parse_frontmatter_end(content):
    if not content.startswith("---"):
        return 0
    end = content.find("---", 3)
    if end == -1:
        return 0
    return end + 3


def extract_headings(content, body_start):
    headings = set()
    for line in content[body_start:].split("\n"):
        m = re.match(r"^##\s+(.+)$", line.strip())
        if m:
            heading = m.group(1).strip().lower()
            heading = re.sub(r"\$[^$]+\$", "", heading)
            heading = re.sub(r"\\[a-zA-Z]+\{[^}]*\}", "", heading)
            heading = re.sub(r"[{}]", "", heading)
            heading = heading.strip().lower()
            headings.add(heading)
    return headings


SECTION_TEMPLATES = {
    "common pitfalls": "## Common Pitfalls\n\n<!-- TODO: Add common pitfalls for this topic -->",
    "worked examples": "## Worked Examples\n\n<!-- TODO: Add worked examples for this topic -->",
    "summary": "## Summary\n\n<!-- TODO: Add a summary for this topic -->",
}


def main():
    result = subprocess.run(
        [sys.executable, "scripts/check-depth-tiers.py"],
        capture_output=True, text=True, cwd=".",
    )

    missing_pattern = re.compile(
        r"^(.+?): TIER (\d) missing required section '(.+?)'$", re.MULTILINE
    )
    matches = missing_pattern.findall(result.stdout)

    if not matches:
        print("No missing required section issues found.")
        return

    file_sections = defaultdict(set)
    file_tiers = {}
    for filepath, tier_str, section in matches:
        filepath = filepath.strip()
        section = section.strip().lower()
        file_sections[filepath].add(section)
        file_tiers[filepath] = int(tier_str)

    files_modified = 0
    sections_added = 0

    for filepath in sorted(file_sections):
        missing = file_sections[filepath]
        full_path = "docs/" + filepath

        with open(full_path, "r", encoding="utf-8") as f:
            content = f.read()

        fm_end = parse_frontmatter_end(content)
        headings = extract_headings(content, fm_end)

        stubs = []
        for section in sorted(missing):
            if not any(section in h for h in headings):
                stub = SECTION_TEMPLATES.get(section)
                if stub:
                    stubs.append(stub)
                    sections_added += 1

        if not stubs:
            continue

        insert_text = "\n\n" + "\n\n".join(stubs)
        content = content.rstrip("\n") + insert_text + "\n"

        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)

        files_modified += 1

    print(f"Files modified: {files_modified}")
    print(f"Sections added: {sections_added}")


if __name__ == "__main__":
    main()
