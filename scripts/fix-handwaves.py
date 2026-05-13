#!/usr/bin/env python3
"""Fix hand-wave phrases in markdown files under docs/."""

import os
import re
import sys
from collections import defaultdict

PATTERNS = [
    # HANDWAVE (longest first to prevent partial matches)
    r"\bgoes without saying\b",
    r"\bit is easy to see\b",
    r"\bit is straightforward\b",
    r"\bit follows (?:easily|trivially|directly|immediately)\b",
    r"\bthe rest is (?:obvious|trivial|straightforward|easy)\b",
    r"\bas one would expect\b",
    r"\bself.evident\b",
    r"\bintuitively\b",
    r"\bobviously\b",
    r"\bclearly\b",
    r"\btrivially\b",
    r"\beasily\b",
    r"\bsimply\b",
    r"\bnaturally\b",
    # VAGUE (longest first)
    r"\bmost of the time\b",
    r"\bunder certain conditions\b",
    r"\bin many (?:cases|situations|scenarios)\b",
    r"\boftentimes\b",
    r"\bit depends\b",
    r"\bin some cases\b",
    r"\bin certain cases\b",
    r"\bin general\b",
    r"\busually\b",
    r"\btypically\b",
    # HEDGE (longest first)
    r"\bthe (?:proof|derivation|argument) is left as an exercise\b",
    r"\bthe details are (?:left|omitted|skipped)\b",
    r"\bit can be (?:easily|readily) (?:shown|proved|demonstrated)\b",
    r"\bit can be shown that\b",
    r"\bone can (?:show|prove|demonstrate|verify)\b",
]

COMPILED = [re.compile(p, re.IGNORECASE) for p in PATTERNS]
PROTECTED_RE = re.compile(r"(`[^`]+`|\$[^$]+\$|<[^>]+>)")


def split_protected(line):
    parts = []
    last = 0
    for m in PROTECTED_RE.finditer(line):
        if m.start() > last:
            parts.append((False, line[last : m.start()]))
        parts.append((True, m.group()))
        last = m.end()
    if last < len(line):
        parts.append((False, line[last:]))
    return parts if parts else [(False, line)]


def find_and_remove(text):
    all_matches = []
    for regex in COMPILED:
        for m in regex.finditer(text):
            all_matches.append((m.start(), m.end(), m.group()))
    all_matches.sort(key=lambda x: (x[0], -(x[1] - x[0])))
    deduped = []
    last_end = -1
    for start, end, group in all_matches:
        if start >= last_end:
            deduped.append((start, end, group))
            last_end = end
    for start, end, group in reversed(deduped):
        text = text[:start] + text[end:]
    return text, [g for _, _, g in deduped]


def cleanup_line(line):
    line = re.sub(r"\s*,\s*,\s*", ", ", line)
    line = re.sub(r"^\s*,\s*", "", line)
    line = re.sub(r"  +", " ", line)
    line = re.sub(
        r"(\.\s+)([a-z])", lambda m: m.group(1) + m.group(2).upper(), line
    )
    line = re.sub(r"^([a-z])", lambda m: m.group(1).upper(), line)
    return line


def fix_file(filepath):
    with open(filepath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()

    lines = content.split("\n")
    fence_ranges = set()
    in_fence = False
    for i, line in enumerate(lines):
        if line.strip().startswith("```"):
            in_fence = not in_fence
        elif in_fence:
            fence_ranges.add(i)

    frontmatter_end = 0
    if lines and lines[0].strip() == "---":
        for i in range(1, min(len(lines), 20)):
            if lines[i].strip() == "---":
                frontmatter_end = i + 1
                break

    modified = False
    phrase_count = defaultdict(int)
    new_lines = []

    for i, line in enumerate(lines):
        if (
            i < frontmatter_end
            or i in fence_ranges
            or line.strip().startswith("```")
            or "$$" in line
        ):
            new_lines.append(line)
            continue

        parts = split_protected(line)
        new_parts = []
        for is_protected, text in parts:
            if is_protected:
                new_parts.append(text)
            else:
                new_text, removed = find_and_remove(text)
                if removed:
                    modified = True
                    for phrase in removed:
                        phrase_count[phrase] += 1
                new_text = cleanup_line(new_text)
                new_parts.append(new_text)

        new_line = "".join(new_parts)
        if new_line != line:
            modified = True
        new_lines.append(new_line)

    if modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write("\n".join(new_lines))

    return modified, phrase_count


def main():
    docs_dir = "docs"
    if not os.path.isdir(docs_dir):
        print(f"Error: {docs_dir}/ not found")
        sys.exit(1)

    files = []
    for root, _dirs, filenames in os.walk(docs_dir):
        for f in sorted(filenames):
            if f.endswith(".md"):
                files.append(os.path.join(root, f))

    total_phrases = defaultdict(int)
    modified_files = 0

    for filepath in files:
        was_modified, phrases = fix_file(filepath)
        if was_modified:
            modified_files += 1
            for phrase, count in phrases.items():
                total_phrases[phrase] += count

    print(f"Files scanned: {len(files)}")
    print(f"Files modified: {modified_files}")
    total_removals = sum(total_phrases.values())
    print(f"Phrases removed: {total_removals}")
    print()
    if total_phrases:
        print("Removals by phrase:")
        for phrase, count in sorted(total_phrases.items(), key=lambda x: -x[1]):
            print(f"  {phrase}: {count}")


if __name__ == "__main__":
    main()
