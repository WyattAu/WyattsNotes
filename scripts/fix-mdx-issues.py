#!/usr/bin/env python3
"""
Bulk fix MDX issues found by validate-mdx.py:
1. Fix admonition formatting (content on same line as :::)
2. Remove raw HTML <p> tags (inside <details> blocks)
3. Remove emoji characters
"""

import re
import os
import sys


def fix_admonitions(content):
    """Fix admonition blocks that have content on the same line as :::."""
    lines = content.split("\n")
    fixed_lines = []
    i = 0
    changes = 0

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Pattern 1: Opening admonition with content on same line
        # :::warning Some text here
        # More text here
        # :::
        match = re.match(r"^(\s*):::(info|warning|tip|danger|note)\s+(.+)$", stripped)
        if match:
            indent = match.group(1)
            adm_type = match.group(2)
            rest = match.group(3)

            # Check if this is a self-closing admonition (content + ::: on same line)
            # e.g., :::warning Some text :::
            self_close = re.match(r"^(.+?)\s+:::\s*$", rest)
            if self_close:
                # Self-closing: convert to proper block
                inner = self_close.group(1).strip()
                fixed_lines.append(f"{indent}:::{adm_type}")
                fixed_lines.append(f"{indent}{inner}")
                fixed_lines.append(f"{indent}:::")
                changes += 1
                i += 1
                continue
            else:
                # Multi-line admonition with content on opening line
                fixed_lines.append(f"{indent}:::{adm_type}")
                fixed_lines.append(f"{indent}{rest}")
                changes += 1

                # Check if the closing ::: is on the NEXT line
                if i + 1 < len(lines):
                    next_stripped = lines[i + 1].strip()
                    # Check for closing on next line: "text :::"
                    close_match = re.match(r"^(\s*)(.+?)\s+:::\s*$", lines[i + 1])
                    if close_match:
                        next_indent = close_match.group(1)
                        next_rest = close_match.group(2)
                        if next_rest.strip():
                            fixed_lines.append(f"{next_indent}{next_rest}")
                        fixed_lines.append(f"{next_indent}:::")
                        changes += 1
                        i += 2
                        continue

                i += 1
                continue

        # Pattern 2: Closing ::: has text before it on same line
        # Some text :::
        close_match = re.match(r"^(\s*)(.+?)\s+:::\s*$", stripped)
        if close_match:
            indent = close_match.group(1)
            rest = close_match.group(2)
            if rest.strip() and not stripped.startswith(":::"):
                fixed_lines.append(f"{indent}{rest}")
                fixed_lines.append(f"{indent}:::")
                changes += 1
                i += 1
                continue

        fixed_lines.append(line)
        i += 1

    return "\n".join(fixed_lines), changes


def fix_raw_html_p(content):
    """Remove raw HTML <p> and </p> tags."""
    # Only remove <p> and </p> tags, preserve content
    # These typically appear inside <details> blocks
    content = re.sub(r"<p>\s*\n?", "", content)
    content = re.sub(r"\s*\n?</p>", "", content)
    changes = len(re.findall(r"</?p>", content))
    # Additional pass for any remaining
    content = re.sub(r"<p\s*>", "", content)
    content = re.sub(r"</p\s*>", "", content)
    return content, changes


def fix_emojis(content, filepath):
    """Remove emoji characters from prose."""
    # Only target the known emoji in the specific file
    # Replace with text description
    emoji_map = {
        "\U0001f468": "[person]",  # man emoji
    }
    changes = 0
    for emoji, replacement in emoji_map.items():
        if emoji in content:
            content = content.replace(emoji, replacement)
            changes += 1
    return content, changes


def process_file(filepath):
    """Process a single file with all fixes."""
    with open(filepath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()

    original = content

    # Apply fixes in order
    content, adm_changes = fix_admonitions(content)
    content, p_changes = fix_raw_html_p(content)
    content, emoji_changes = fix_emojis(content, filepath)

    total_changes = adm_changes + p_changes + emoji_changes

    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        return total_changes
    return 0


if __name__ == "__main__":
    total_files_changed = 0
    total_changes = 0

    for root, dirs, files in os.walk("docs"):
        for f in files:
            if f.endswith(".md"):
                fp = os.path.join(root, f)
                changes = process_file(fp)
                if changes > 0:
                    total_files_changed += 1
                    total_changes += changes
                    print(f"  Fixed {changes} issues in {fp}")

    print(f"\nTotal: {total_changes} changes in {total_files_changed} files")
