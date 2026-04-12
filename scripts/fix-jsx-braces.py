#!/usr/bin/env python3
"""
Fix {identifier} patterns in MDX files that MDX interprets as JSX expressions.

MDX interprets {identifier} (where identifier = [a-zA-Z_$][a-zA-Z0-9_$]*)
as JavaScript expressions. If the identifier is not defined, this causes:
  ReferenceError: identifier is not defined

This script finds such patterns OUTSIDE of:
  1. Code fences (``` ... ```) of any backtick length
  2. Inline code (` ... `)
  3. Display math ($$ ... $$) including multi-line
  4. Inline math ($ ... $) - single line only
  5. Frontmatter (--- ... ---)
  6. Already escaped (\\{ ... \\})

And escapes them: {identifier} -> \\{identifier\\}

This produces a literal {identifier} in the rendered output.
"""

import re
import os
import sys
import glob

_FENCE_OPEN_RE = re.compile(r"^( {0,3})((`{3,}) ~(?![`~])[\s\S]*?~|(`{3,})([^`]*))$")


def find_code_fence_regions(content):
    """
    Find code fence regions using proper line-by-line parsing.
    Handles fences of any backtick length (3, 4, 5, ...).
    Returns list of (start, end) character offset tuples.
    """
    regions = []
    lines = content.split("\n")
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.lstrip()[:20]  # Check first 20 chars for performance

        # Detect opening fence: line starts with 3+ backticks (possibly indented)
        # Standard: up to 3 spaces of indentation allowed
        indent = len(line) - len(line.lstrip())
        if indent <= 3 and stripped.startswith("```"):
            # Count backticks
            rest = stripped
            bt_count = 0
            while bt_count < len(rest) and rest[bt_count] == "`":
                bt_count += 1
            if bt_count >= 3:
                # This is an opening fence
                start_line = i
                # Find closing fence with same or more backticks
                i += 1
                while i < len(lines):
                    close_line = lines[i]
                    close_stripped = close_line.lstrip()
                    close_indent = len(close_line) - len(close_stripped)
                    if close_indent <= 3:
                        close_bt = 0
                        while (
                            close_bt < len(close_stripped)
                            and close_stripped[close_bt] == "`"
                        ):
                            close_bt += 1
                        if close_bt >= bt_count:
                            # Found closing fence
                            # Compute character offsets
                            start_pos = sum(
                                len(lines[j]) + 1 for j in range(start_line)
                            )
                            end_pos = sum(len(lines[j]) + 1 for j in range(i + 1))
                            regions.append((start_pos, end_pos))
                            break
                    i += 1
        i += 1

    return regions


def find_protected_regions(content):
    """
    Find all regions that should NOT be modified (code, math, frontmatter).
    Returns a sorted, merged list of (start, end) tuples (character offsets).
    """
    regions = []

    # 1. Frontmatter: first --- to second ---
    fm_count = 0
    fm_start = 0
    for m in re.finditer(r"^---\s*$", content, re.MULTILINE):
        if fm_count == 0:
            fm_start = m.start()
            fm_count = 1
        elif fm_count == 1:
            regions.append((fm_start, m.end()))
            break
        else:
            break

    # 2. Code fences (proper parser, handles any backtick length)
    regions.extend(find_code_fence_regions(content))

    # 3. Display math ($$ ... $$) - can span lines
    #    Use line-by-line matching to avoid matching $$ inside inline math ($^2$$)
    #    Handles both single-line ($$ ... $$) and multi-line ($$ block $$) forms.
    all_lines = content.split("\n")
    # Precompute character offsets for each line start (O(n) total)
    line_starts = []
    pos = 0
    for ln in all_lines:
        line_starts.append(pos)
        pos += len(ln) + 1  # +1 for newline

    dm_close_re = re.compile(r"^\s*\$\$\s*$")
    dm_single_re = re.compile(r"^\s*\$\$.*\$\$\s*$")

    i = 0
    while i < len(all_lines):
        line = all_lines[i]
        stripped = line.lstrip()
        # Display math opening: $$ at start of line (with optional indentation)
        # Exclude $$$ and above (likely LaTeX dollar signs, not display math delimiters)
        if stripped.startswith("$$") and not stripped.startswith("$$$"):
            if dm_single_re.match(line):
                # Single-line display math: $$ ... $$ on same line
                start_pos = line_starts[i]
                end_pos = start_pos + len(line) + 1
                regions.append((start_pos, end_pos))
            else:
                # Multi-line display math block: search for closing $$ on subsequent lines
                j = i + 1
                while j < len(all_lines):
                    if dm_close_re.match(all_lines[j]):
                        start_pos = line_starts[i]
                        end_pos = line_starts[j] + len(all_lines[j]) + 1
                        regions.append((start_pos, end_pos))
                        break
                    j += 1
        i += 1

    # 4. Single-line protected regions (inline code, inline math)
    #    Process line by line to avoid cross-line inline math matches
    #    Inline code: use proper backtick-count matching (handles `` ` `` inside `` `` ``)
    inline_math_re = re.compile(r"(?<!\$)\$(?!\$)(.+?)(?<!\\)\$")

    for line_match in re.finditer(r"[^\n]+", content):
        line = line_match.group(0)
        line_start = line_match.start()

        # Inline code: find matching backtick pairs
        i = 0
        while i < len(line):
            if line[i] == "`":
                bt_count = 0
                while i + bt_count < len(line) and line[i + bt_count] == "`":
                    bt_count += 1
                # 1-2 backticks = inline code (3+ handled by code fence parser)
                if bt_count <= 2:
                    search_start = i + bt_count
                    close_pos = line.find("`" * bt_count, search_start)
                    if close_pos >= 0:
                        regions.append(
                            (line_start + i, line_start + close_pos + bt_count)
                        )
                        i = close_pos + bt_count
                        continue
            i += 1

        # Inline math
        for m in inline_math_re.finditer(line):
            regions.append((line_start + m.start(), line_start + m.end()))

        # Single-line display math: $$ ... $$ on the same line
        # Handles cases like "- $$ x^2 $$" or "**text:** $$ ... $$"
        # where $$ is not at column 0 (not caught by block display math handler).
        # Uses (?<!\$) lookbehind to avoid matching $$$ (LaTeX dollar signs).
        for m in re.finditer(r"(?<!\$)\$\$.*?(?<!\$)\$\$", line):
            regions.append((line_start + m.start(), line_start + m.end()))

    # Sort by start position and merge overlapping regions
    regions.sort(key=lambda r: r[0])
    merged = []
    for start, end in regions:
        if merged and start <= merged[-1][1]:
            merged[-1] = (merged[-1][0], max(merged[-1][1], end))
        else:
            merged.append((start, end))

    return merged


def is_in_protected_region(pos, regions):
    """Check if a character position falls within any protected region."""
    lo, hi = 0, len(regions) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        start, end = regions[mid]
        if pos < start:
            hi = mid - 1
        elif pos >= end:
            lo = mid + 1
        else:
            return True
    return False


def fix_jsx_braces(content):
    """
    Find {identifier} patterns outside protected regions and escape them.
    Returns (new_content, change_count).
    """
    regions = find_protected_regions(content)
    jsx_pattern = re.compile(r"\{([a-zA-Z_$][a-zA-Z0-9_]*)\}")

    changes = 0
    matches = list(jsx_pattern.finditer(content))

    for m in reversed(matches):
        pos = m.start()
        if is_in_protected_region(pos, regions):
            continue
        if pos > 0 and content[pos - 1] == "\\":
            continue
        identifier = m.group(1)
        new = "\\{" + identifier + "\\}"
        content = content[:pos] + new + content[m.end() :]
        changes += 1

    return content, changes


def process_file(filepath, dry_run=False):
    """Process a single file, escaping JSX brace patterns outside code/math."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    original = content
    new_content, changes = fix_jsx_braces(content)

    if new_content != original:
        if dry_run:
            orig_lines = original.split("\n")
            new_lines = new_content.split("\n")
            for j, (o, n) in enumerate(zip(orig_lines, new_lines), 1):
                if o != n:
                    print(f"  Line {j}: {o.strip()[:100]}")
                    print(f"       ->: {n.strip()[:100]}")
            print(f"  [{changes} brace(s) would be escaped]")
        else:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"  Fixed: {changes} brace(s) escaped")
        return changes
    else:
        return 0


def main():
    dry_run = "--dry-run" in sys.argv

    if dry_run:
        print("DRY RUN - no files will be modified\n")

    patterns = [
        "docs/docs_ib/**/*.md",
        "docs/docs_ib/**/*.mdx",
        "docs/docs_alevel/**/*.md",
        "docs/docs_alevel/**/*.mdx",
        "docs/docs_dse/**/*.md",
        "docs/docs_dse/**/*.mdx",
        "docs/docs_cpp/**/*.md",
        "docs/docs_cpp/**/*.mdx",
        "docs/docs_languages/**/*.md",
        "docs/docs_languages/**/*.mdx",
        "docs/docs_infrastructure/**/*.md",
        "docs/docs_infrastructure/**/*.mdx",
        "docs/docs_tools/**/*.md",
        "docs/docs_tools/**/*.mdx",
    ]

    files = set()
    for pat in patterns:
        files.update(glob.glob(pat, recursive=True))

    if not files:
        print("No files found!")
        sys.exit(1)

    print(f"Scanning {len(files)} files...\n")

    total_changes = 0
    files_changed = 0

    for filepath in sorted(files):
        rel_path = os.path.relpath(filepath, ".")
        changes = process_file(filepath, dry_run=dry_run)
        if changes > 0:
            total_changes += changes
            files_changed += 1
            if not dry_run:
                print(f"  {rel_path}: {changes} brace(s) escaped")

    print(f"\n{'=' * 60}")
    if dry_run:
        print(f"DRY RUN: Would fix {total_changes} JSX braces in {files_changed} files")
    else:
        print(f"Fixed {total_changes} JSX braces in {files_changed} files")
    print(f"{'=' * 60}")


if __name__ == "__main__":
    main()
