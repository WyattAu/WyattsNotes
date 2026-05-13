#!/usr/bin/env python3
"""
Truncate frontmatter descriptions that exceed 160 characters.
Walks all .md files under docs/, parses YAML frontmatter, and truncates
descriptions longer than MAX_DESC_LEN characters at word boundaries.
"""

import os
import re
import sys

MAX_DESC_LEN = 160
DOCS_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "docs")


def parse_frontmatter_raw(filepath):
    with open(filepath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()
    if not content.startswith("---"):
        return None, None, content
    end = content.find("---", 3)
    if end == -1:
        return None, None, content
    fm_text = content[3:end]
    fm = {}
    for line in fm_text.strip().split("\n"):
        if ":" in line:
            key, _, val = line.partition(":")
            fm[key.strip()] = val.strip().strip("\"'")
    return fm, fm_text, content


def truncate_description(desc):
    if len(desc) <= MAX_DESC_LEN:
        return desc
    truncated = desc[:MAX_DESC_LEN]
    last_space = truncated.rfind(' ')
    if last_space > 100:
        truncated = truncated[:last_space].rstrip()
    return truncated


def fix_file(filepath):
    fm, fm_text, content = parse_frontmatter_raw(filepath)
    if fm is None or "description" not in fm:
        return None

    desc = fm["description"]
    if len(desc) <= MAX_DESC_LEN:
        return None

    new_desc = truncate_description(desc)

    lines = content.split("\n")
    frontmatter_end = -1
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            frontmatter_end = i
            break

    if frontmatter_end == -1:
        return None

    for i in range(1, frontmatter_end):
        if lines[i].strip().startswith("description:"):
            old_len = len(desc)
            lines[i] = f'description: "{new_desc}"'
            with open(filepath, "w", encoding="utf-8") as f:
                f.write("\n".join(lines))
            return (old_len, len(new_desc))
            break

    return None


def main():
    if not os.path.isdir(DOCS_DIR):
        print(f"Error: {DOCS_DIR} not found")
        sys.exit(1)

    files = []
    for root, _dirs, filenames in os.walk(DOCS_DIR):
        for f in sorted(filenames):
            if f.endswith(".md"):
                files.append(os.path.join(root, f))

    modified = 0
    total_truncated_chars = 0
    for filepath in sorted(files):
        result = fix_file(filepath)
        if result:
            old_len, new_len = result
            rel = os.path.relpath(filepath, DOCS_DIR)
            print(f"  {rel}: {old_len} -> {new_len} chars")
            modified += 1
            total_truncated_chars += (old_len - new_len)

    print(f"\nFiles modified: {modified}")
    print(f"Total characters removed: {total_truncated_chars}")


if __name__ == "__main__":
    main()
