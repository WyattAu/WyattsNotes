#!/usr/bin/env python3
"""
Hand-wave phrase detector for technical documentation.

Scans markdown files for phrases that violate CONTENT_STANDARD.md Section 6:
- No hand-waving ("intuitively", "obviously", "clearly" without justification)
- No vague qualifiers ("it depends", "in some cases" without specifying which cases)
- No hedging language ("it can be shown that" -- show it)

Only scans prose outside code fences, math blocks, and inline code.
"""

import os
import re
import sys
from collections import defaultdict
from concurrent.futures import ProcessPoolExecutor, as_completed


# Phrases that require justification context
HANDWAVE_PHRASES = [
    (r"\bintuitively\b", "intuitively"),
    (r"\bobviously\b", "obviously"),
    (r"\bclearly\b", "clearly"),
    (r"\btrivially\b", "trivially"),
    (r"\beasily\b", "easily (in argument context)"),
    (r"\bsimply\b", "simply (in argument context)"),
    (r"\bself.evident\b", "self-evident"),
    (r"\bgoes without saying\b", "goes without saying"),
    (r"\bit is easy to see\b", "it is easy to see"),
    (r"\bit is straightforward\b", "it is straightforward"),
    (r"\bit follows (?:easily|trivially|directly|immediately)\b", "it follows ...ly"),
    (r"\bthe rest is (?:obvious|trivial|straightforward|easy)\b", "the rest is obvious/trivial"),
    (r"\bas one would expect\b", "as one would expect"),
    (r"\bnaturally\b", "naturally (in argument context)"),
]

# Vague qualifiers requiring specification
VAGUE_PHRASES = [
    (r"\bit depends\b", "it depends (specify on what)"),
    (r"\bin some cases\b", "in some cases (specify which)"),
    (r"\bin certain cases\b", "in certain cases (specify which)"),
    (r"\bin general\b", "in general (specify exceptions)"),
    (r"\busually\b", "usually (specify exceptions)"),
    (r"\btypically\b", "typically (specify exceptions)"),
    (r"\bmost of the time\b", "most of the time (specify exceptions)"),
    (r"\boftentimes\b", "oftentimes (specify when)"),
    (r"\bunder certain conditions\b", "under certain conditions (specify which)"),
    (r"\bin many (?:cases|situations|scenarios)\b", "in many cases (specify)"),
]

# Hedging language that should present the argument instead
HEDGE_PHRASES = [
    (r"\bit can be shown (?:that\b)", "it can be shown that (show it)"),
    (r"\bit can be (?:easily|readily) (?:shown|proved|demonstrated)\b", "it can be shown (show it)"),
    (r"\bone can (?:show|prove|demonstrate|verify)\b", "one can show (show it)"),
    (r"\bthe (?:proof|derivation|argument) is left as an exercise\b", "proof left as exercise (provide it)"),
    (r"\bthe details are (?:left|omitted|skipped)\b", "details left out (provide them)"),
]

# All patterns combined with labels, precompiled
ALL_PATTERNS: list[tuple[list[tuple[str, str]], str]] = [
    (HANDWAVE_PHRASES, "HANDWAVE"),
    (VAGUE_PHRASES, "VAGUE"),
    (HEDGE_PHRASES, "HEDGE"),
]

# Precompile all regexes at module load
_COMPILED_PATTERNS: list[tuple[list[tuple[re.Pattern, str]], str]] = []
for patterns, category in ALL_PATTERNS:
    compiled = [(re.compile(pattern, re.IGNORECASE), label) for pattern, label in patterns]
    _COMPILED_PATTERNS.append((compiled, category))


def get_code_fence_ranges(lines):
    """Return set of line indices that are inside code fences."""
    ranges = set()
    in_fence = False
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith("```"):
            in_fence = not in_fence
        elif in_fence:
            ranges.add(i)
    return ranges


def has_inline_code(line, match_start):
    """Check if match position is inside inline code."""
    before = line[:match_start]
    return before.count("`") % 2 != 0


def scan_file(filepath):
    """Scan a file for hand-wave phrases. Returns list of issues."""
    with open(filepath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()

    lines = content.split("\n")
    issues = []
    fence_ranges = get_code_fence_ranges(lines)

    for compiled_patterns, category in _COMPILED_PATTERNS:
        for regex, label in compiled_patterns:
            for lineno, line in enumerate(lines):
                if lineno in fence_ranges:
                    continue
                stripped = line.strip()
                if stripped.startswith("```"):
                    continue

                for m in regex.finditer(line):
                    if has_inline_code(line, m.start()):
                        continue
                    # Skip if inside display math ($$)
                    if "$$" in line:
                        continue
                    # Skip if inside inline math
                    before = line[:m.start()]
                    dollar_count = before.count("$")
                    if dollar_count % 2 != 0:
                        continue

                    rel_path = os.path.relpath(filepath, "docs")
                    issues.append(f"{rel_path}:{lineno + 1}: [{category}] '{m.group()}' -- {label}")

    return issues


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

    all_issues = []
    file_count = 0
    category_counts = defaultdict(int)

    with ProcessPoolExecutor(max_workers=os.cpu_count() or 4) as executor:
        futures = {executor.submit(scan_file, fp): fp for fp in files}
        for future in as_completed(futures):
            issues = future.result()
            all_issues.extend(issues)
            if issues:
                file_count += 1
                for issue in issues:
                    for cat in ["HANDWAVE", "VAGUE", "HEDGE"]:
                        if f"[{cat}]" in issue:
                            category_counts[cat] += 1

    print("=== Hand-Wave Detection Report ===")
    print(f"Files scanned: {len(files)}")
    print(f"Files with findings: {file_count}")
    print(f"Total findings: {len(all_issues)}")
    print()
    print("Category breakdown:")
    for cat, count in sorted(category_counts.items()):
        print(f"  {cat}: {count}")
    print()

    if all_issues:
        print("--- FINDINGS ---")
        for issue in sorted(all_issues):
            print(f"  {issue}")
        print()

        # Summary by file
        file_counts = defaultdict(int)
        for issue in all_issues:
            parts = issue.split(":")
            file_counts[parts[0]] += 1
        print("--- BY FILE ---")
        for f, c in sorted(file_counts.items(), key=lambda x: -x[1]):
            print(f"  {f}: {c} findings")
        print()

    print(f"Total: {len(all_issues)} findings across {file_count} files.")
    # Exit 0 always -- this is informational, not a blocker
    sys.exit(0)


if __name__ == "__main__":
    main()
