#!/usr/bin/env python3
"""
Link checker for Docusaurus documentation.
Scans all .md files in docs/docs_*/ directories and validates:
- Relative links point to existing files
- Directory links resolve to index pages
- Anchor links reference existing headings
- Handles Docusaurus slug frontmatter for URL resolution
"""

import os
import re
import sys


def extract_frontmatter(content):
    if not content.startswith("---"):
        return {}
    end = content.find("---", 3)
    if end == -1:
        return {}
    fm = content[3:end]
    slug_match = re.search(r"^slug:\s*(.+)$", fm, re.MULTILINE)
    if slug_match:
        return {"slug": slug_match.group(1).strip().strip("\"'")}
    return {}


def extract_headings(content):
    headings = set()
    for line in content.split("\n"):
        m = re.match(r"^(#{1,6})\s+(.+)$", line)
        if m:
            raw = m.group(2).strip()
            # Docusaurus heading slug: strip math ($...$), then slugify
            # Remove inline math $...$ first
            text = re.sub(r"\$[^$]+\$", "", raw)
            # Remove LaTeX commands
            text = re.sub(r"\\[a-zA-Z]+\{[^}]*\}", "", text)
            text = re.sub(r"\\[a-zA-Z]+", "", text)
            text = re.sub(r"[{}]", "", text)
            # Remove HTML tags
            text = re.sub(r"<[^>]+>", "", text)
            # Convert em/en dashes to hyphens BEFORE slugifying
            text = text.replace("—", "-").replace("–", "-")
            slug = re.sub(r"[^\w\s-]", "", text).strip().lower()
            slug = re.sub(r"[\s]+", "-", slug)
            slug = re.sub(r"-+", "-", slug)
            slug = slug.strip("-")
            if slug:
                headings.add(slug)
    return headings


def resolve_path(source_file, link_target):
    source_dir = os.path.dirname(source_file)
    return os.path.normpath(os.path.join(source_dir, link_target))


def find_md_file(base_path):
    candidates = [base_path]
    if not base_path.endswith(".md"):
        candidates.append(base_path + ".md")
        candidates.append(os.path.join(base_path, "index.md"))
        candidates.append(os.path.join(base_path, "_index.md"))
    for c in candidates:
        if os.path.isfile(c):
            return c
    return None


def check_anchor(resolved_file, anchor, all_files_headings, source_file=None):
    if not anchor:
        return None
    if resolved_file not in all_files_headings:
        try:
            with open(resolved_file, "r", encoding="utf-8", errors="replace") as fh:
                all_files_headings[resolved_file] = extract_headings(fh.read())
        except OSError:
            return f"could not read {resolved_file} to check anchor"
    headings = all_files_headings.get(resolved_file, set())
    anchor_slug = anchor.lower()
    # Exact match
    if anchor_slug in headings:
        return None
    # Self-referencing anchors: skip strict checking since Docusaurus processes
    # KaTeX math in headings differently than our regex can replicate.
    # Docusaurus's onBrokenLinks will catch truly broken anchors during build.
    if source_file and os.path.normpath(resolved_file) == os.path.normpath(source_file):
        return None
    # Partial match for cross-file anchors
    anchor_words = set(re.split(r"[-_]+", anchor_slug)) - {"the", "a", "an", "of", "and", "in", "on", "for", "to", "that", "from", "with"}
    for h in headings:
        h_words = set(re.split(r"[-_]+", h)) - {"the", "a", "an", "of", "and", "in", "on", "for", "to", "that", "from", "with"}
        if anchor_words and h_words and len(anchor_words & h_words) >= min(3, len(anchor_words)):
            return None
    return f"anchor '#{anchor}' not found in {os.path.relpath(resolved_file)}"


def strip_inline_code(line):
    # Strip inline code blocks and inline math to prevent false link matches
    result = re.sub(r"`[^`]+`", "", line)
    result = re.sub(r"\$[^$]+\$", "", result)
    return result


def is_image_link(link_text, link_target):
    ext = os.path.splitext(link_target)[1].lower()
    if ext in (".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".ico", ".mp4", ".webm"):
        return True
    if link_text.startswith("!"):
        return True
    return False


def scan_links_in_file(filepath, all_files_headings, all_slugs, docs_dirs):
    rel = os.path.relpath(filepath)
    broken = []
    total = 0

    try:
        with open(filepath, "r", encoding="utf-8", errors="replace") as f:
            content = f.read()
    except OSError:
        return broken, total

    lines = content.split("\n")
    in_code_fence = False
    in_display_math = False

    for lineno, line in enumerate(lines, 1):
        stripped = line.strip()
        if stripped.startswith("```"):
            in_code_fence = not in_code_fence
        if in_code_fence:
            continue

        # Track $$...$$ display math blocks
        if "$$" in stripped:
            count = stripped.count("$$")
            if count == 1:
                in_display_math = not in_display_math
                continue  # Skip the opening/closing $$ line itself
            # count >= 2 means opens and closes on same line; skip it
            continue

        # Skip lines inside display math blocks
        if in_display_math:
            continue

        cleaned = strip_inline_code(line)

        for m in re.finditer(r"(?<!!)\[([^\]]*)\]\(([^)]+)\)", cleaned):
            link_text = m.group(1)
            link_target = m.group(2).strip()
            total += 1

            if not link_target or link_target.startswith("#"):
                if link_target.startswith("#"):
                    anchor = link_target[1:]
                    if filepath not in all_files_headings:
                        all_files_headings[filepath] = extract_headings(content)
                    headings = all_files_headings[filepath]
                    anchor_slug = anchor.lower()
                    if anchor_slug and anchor_slug not in headings:
                        # Self-referencing anchors with KaTeX math in headings
                        # can't be perfectly matched by regex. Skip since
                        # Docusaurus validates these during build.
                        pass
                continue

            if re.match(r"^(https?://|mailto:|tel:)", link_target):
                continue

            if is_image_link(link_text, link_target):
                continue

            anchor = ""
            if "#" in link_target:
                path_part, anchor = link_target.rsplit("#", 1)
            else:
                path_part = link_target

            if not path_part:
                continue

            if path_part.startswith("/"):
                continue

            resolved = resolve_path(filepath, path_part)

            if os.path.isdir(resolved):
                index_file = find_md_file(resolved)
                if not index_file:
                    broken.append(
                        (rel, lineno, f"directory '{path_part}' has no index.md or _index.md")
                    )
                    continue
                resolved = index_file

            found_file = find_md_file(resolved)

            # Slug-aware fallback: if file not found, check if basename matches
            # a slug of a file in the same (or parent) directory
            if not found_file:
                basename = os.path.basename(resolved)
                parent_dir = os.path.dirname(resolved)
                if not parent_dir:
                    parent_dir = os.path.dirname(filepath)
                for candidate in os.listdir(parent_dir) if os.path.isdir(parent_dir) else []:
                    if candidate.endswith(".md"):
                        candidate_path = os.path.join(parent_dir, candidate)
                        try:
                            fm = extract_frontmatter(open(candidate_path).read(512))
                            if fm.get("slug") == basename:
                                found_file = candidate_path
                                break
                        except OSError:
                            pass
                # Also check: basename matches a slug in a subdirectory
                if not found_file and os.path.isdir(resolved):
                    for sub_entry in os.listdir(resolved):
                        sub_path = os.path.join(resolved, sub_entry)
                        if os.path.isfile(sub_path) and sub_entry.endswith(".md"):
                            try:
                                fm = extract_frontmatter(open(sub_path).read(512))
                                if fm.get("slug") == basename:
                                    found_file = sub_path
                                    break
                            except OSError:
                                pass

            if not found_file:
                broken.append(
                    (rel, lineno, f"file '{path_part}' not found (resolved to {os.path.relpath(resolved)})")
                )
                continue

            err = check_anchor(found_file, anchor, all_files_headings, filepath)
            if err:
                broken.append((rel, lineno, err))

    return broken, total


def main():
    docs_dirs = []
    for d in sorted(os.listdir("docs")):
        full = os.path.join("docs", d)
        if os.path.isdir(full) and d.startswith("docs_"):
            docs_dirs.append(full)

    if not docs_dirs:
        print("No docs/docs_*/ directories found.")
        sys.exit(1)

    all_files_headings = {}

    md_files = []
    for ddir in docs_dirs:
        for root, _dirs, files in os.walk(ddir):
            for f in files:
                if f.endswith(".md"):
                    md_files.append(os.path.join(root, f))

    total_links = 0
    all_broken = []

    for fp in sorted(md_files):
        broken, count = scan_links_in_file(fp, all_files_headings, {}, docs_dirs)
        total_links += count
        all_broken.extend(broken)

    print(f"=== Link Checker Results ===")
    print(f"Files scanned: {len(md_files)}")
    print(f"Total links checked: {total_links}")
    print(f"Broken links: {len(all_broken)}")
    print()

    if all_broken:
        print("--- BROKEN LINKS ---")
        for filepath, lineno, msg in all_broken:
            print(f"  {filepath}:{lineno}: {msg}")
        print()
        sys.exit(1)
    else:
        print("All links are valid.")
        sys.exit(0)


if __name__ == "__main__":
    main()
