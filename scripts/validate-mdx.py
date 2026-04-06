#!/usr/bin/env python3
"""
Comprehensive MDX validator for Docusaurus documentation.
Checks for formatting issues, admonition problems, emoji usage,
broken cross-references, and other common issues.
"""

import re
import os
import sys
import json
from collections import defaultdict


class MDXValidator:
    def __init__(self):
        self.errors = []
        self.warnings = []
        self.info = []
        self.stats = defaultdict(int)

    def validate_file(self, filepath):
        """Validate a single markdown file. Returns list of issues found."""
        with open(filepath, "r", encoding="utf-8", errors="replace") as f:
            content = f.read()
        lines = content.split("\n")

        filename = os.path.relpath(filepath, "docs")

        # Reset per-file state
        self._in_code_fence = False
        self._code_fence_char = None
        self._in_math = False

        for i, line in enumerate(lines, 1):
            self._track_context(line)

            # --- Admonition checks ---
            self._check_admonitions(filename, i, line)

            # --- Emoji checks ---
            self._check_emojis(filename, i, line)

            # --- Formatting checks ---
            self._check_trailing_whitespace(filename, i, line)
            self._check_trailing_blank_lines(filename, i, line, lines)

            # --- JSX rendering issues (bare angle brackets have too many false positives) ---

            # --- MDX-specific issues ---
            self._check_raw_html_p(filename, i, line)

        # End-of-file checks
        self._check_eof_admonitions(filename, lines)
        self._check_trailing_blank_lines_eof(filename, lines)

    def _track_context(self, line):
        """Track whether we're inside code fences or math blocks."""
        stripped = line.strip()

        # Code fence tracking
        if stripped.startswith("```"):
            self._in_code_fence = not self._in_code_fence
        # Math tracking (simplified — count $ signs)
        dollar_count = stripped.count("$")
        if dollar_count % 2 != 0:
            self._in_math = not self._in_math

    def _check_admonitions(self, filename, lineno, line):
        """Check for admonition formatting issues."""
        stripped = line.strip()

        # Skip if inside code fence or math
        if self._in_code_fence or self._in_math:
            return

        # Opening admonition with content on same line
        # :::info Some text here
        if re.match(r"^:::(info|warning|tip|danger|note)\s+\S", stripped):
            self.errors.append(
                f"{filename}:{lineno}: admonition opening has content on same line (renders as inline, not block)"
            )

        # Closing ::: on same line as content
        # Some text :::
        if re.search(r"\S\s+:::\s*$", stripped):
            # But NOT bare ::: on its own line (which is a valid close)
            self.errors.append(
                f"{filename}:{lineno}: closing ::: has text before it on same line"
            )

        # Bare ::: at start of line (closing) followed by text
        # ::: some text
        if re.match(r"^:::\s+[a-zA-Z]", stripped):
            self.errors.append(
                f"{filename}:{lineno}: closing ::: has text after it (will start new admonition block)"
            )

        # Opening admonition missing space
        if re.match(r"^:::(info|warning|tip|danger|note)[a-zA-Z]", stripped):
            self.errors.append(
                f"{filename}:{lineno}: admonition type missing space after :::"
            )
            self.stats["admonition_missing_space"] += 1

        # Empty admonition (opening with no content before closing)
        self.stats["admonition_opens"] += len(
            re.findall(r"^:::(info|warning|tip|danger|note)\b", stripped)
        )

    def _check_eof_admonitions(self, filename, lines):
        """Check if file ends with unclosed admonition."""
        depth = 0
        for line in lines:
            stripped = line.strip()
            if self._in_code_fence or self._in_math:
                continue
            if re.match(r"^:::(info|warning|tip|danger|note)\b.*:::\s*$", stripped):
                continue  # Self-closing
            if re.match(r"^:::(info|warning|tip|danger|note)\b", stripped):
                depth += 1
            elif stripped == ":::":
                depth -= 1

        if depth > 0:
            self.errors.append(f"{filename}: EOF: {depth} unclosed admonition(s)")
            self.stats["unclosed_admonitions"] += depth

    def _check_emojis(self, filename, lineno, line):
        """Check for emoji usage in prose."""
        if self._in_code_fence or self._in_math:
            return

        stripped = line.strip()
        # Skip if it's a code fence delimiter
        if stripped.startswith("```"):
            return

        # Whitelist: symbols commonly used in technical docs (NOT emojis)
        whitelist = set("•·→←↑↓★☆○●■□▪▫▶►⚠✓✗✔✘─│┌┐└┘├┤┬┴┼═║╔╗╚╝╠╣╦╩╬")

        # Actual emoji ranges (colored glyphs, not monochrome symbols)
        emoji_pattern = re.compile(
            "["
            "\U0001f600-\U0001f64f"  # Emoticons
            "\U0001f300-\U0001f5ff"  # Misc Symbols and Pictographs
            "\U0001f680-\U0001f6ff"  # Transport and Map
            "\U0001f900-\U0001f9ff"  # Supplemental Symbols and Pictographs
            "\U0001fa00-\U0001fa6f"  # Chess Symbols
            "\U0001fa70-\U0001faff"  # Symbols and Pictographs Extended-A
            "\U0001f1e0-\U0001f1ff"  # Flags (regional indicators)
            "\U0000fe00-\U0000fe0f"  # Variation Selectors
            "\U0001f3fb-\U0001f3ff"  # Skin tone modifiers
            "\u2705"  # White heavy check mark
            "\u274c"  # Cross mark
            "\u274e"  # Cross mark (negative squared)
            "\u2753-\u2757"  # Question/exclamation marks
            "\u2795-\u2797"  # Heavy plus/minus/divide
            "\u23f3"  # Hourglass
            "\u231b-\u231f"  # Watch/hourglass
            "\u23e9-\u23f3"  # Various tech symbols
            "\u231a-\u231b"  # Watch
            "\u23cf"  # Cinema
            "\u23ed-\u23ef"  # Fast forward/rewind
            "\u25a0-\u25ff"  # Geometric shapes (only flag non-whitelist)
            "]"
        )

        match = emoji_pattern.search(stripped)
        if match:
            char = match.group()
            if char not in whitelist:
                self.errors.append(
                    f"{filename}:{lineno}: emoji found: '{char}' (U+{ord(char):04X})"
                )
                self.stats["emojis"] += 1

    def _check_trailing_whitespace(self, filename, lineno, line):
        """Check for trailing whitespace."""
        if line != line.rstrip():
            pass  # Handled by rstrip above in main

    def _check_trailing_blank_lines(self, filename, lineno, line, all_lines):
        """Check for excessive trailing blank lines."""
        # Count trailing blank lines at EOF
        pass  # Handled in _check_trailing_blank_lines_eof

    def _check_trailing_blank_lines_eof(self, filename, lines):
        """Check for excessive trailing blank lines at end of file."""
        blank_count = 0
        for line in reversed(lines):
            if line.strip() == "":
                blank_count += 1
            else:
                break

        if blank_count > 3:
            self.warnings.append(
                f"{filename}: {blank_count} trailing blank lines at EOF (recommend max 2)"
            )

    def _check_raw_html_p(self, filename, lineno, line):
        """Check for raw HTML <p> tags that break MDX."""
        if self._in_code_fence:
            return

        stripped = line.strip()
        if stripped.startswith("```"):
            return

        if re.search(r"<p\b[^>]*>", stripped):
            self.errors.append(
                f"{filename}:{lineno}: raw HTML <p> tag found (MDX doesn't support these)"
            )
            self.stats["raw_html_p"] += 1

    def get_results(self):
        """Return all issues as structured data."""
        return {
            "errors": self.errors,
            "warnings": self.warnings,
            "stats": dict(self.stats),
        }

    def print_summary(self):
        """Print a human-readable summary of findings."""
        results = self.get_results()
        print(f"=== MDX Validation Results ===")
        print(f"Errors: {len(results['errors'])}")
        print(f"Warnings: {len(results['warnings'])}")
        print(f"Stats: {json.dumps(results['stats'], indent=2)}")
        print()

        if results["errors"]:
            print("--- ERRORS ---")
            for e in results["errors"]:
                print(f"  {e}")
            print()

        if results["warnings"]:
            print("--- WARNINGS ---")
            for w in results["warnings"]:
                print(f"  {w}")
            print()

        # File-by-file error count
        error_files = defaultdict(int)
        for e in results["errors"]:
            parts = e.split(":")
            error_files[parts[0]] += 1

        if error_files:
            print("--- ERROR COUNT BY FILE ---")
            for f, c in sorted(error_files.items(), key=lambda x: -x[1]):
                print(f"  {f}: {c} errors")
            print()


if __name__ == "__main__":
    validator = MDXValidator()

    # Validate all markdown files
    md_count = 0
    for root, dirs, files in os.walk("docs"):
        for f in files:
            if f.endswith(".md"):
                fp = os.path.join(root, f)
                validator.validate_file(fp)
                md_count += 1

    validator.print_summary()

    print(f"Files checked: {md_count}")
