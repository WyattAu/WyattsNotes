#!/usr/bin/env python3
"""
Check that every relative .md link within each Docusaurus docs plugin
actually points to a file that exists on disk.

Cross-plugin links (links that resolve outside the current plugin root)
are intentionally skipped — they are known to be incompatible with
onBrokenLinks: 'throw'.
"""

import os
import re
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DOCS_DIR = PROJECT_ROOT / "docs"

# Pattern to match markdown links: [text](target)
# Captures: full match, link text, link target
MD_LINK_RE = re.compile(r'\[([^\]]*)\]\(([^)]+)\)')


def is_relative_md_link(target: str) -> bool:
    """Check if a link target is a relative .md link (not absolute URL)."""
    target = target.strip()
    # Skip empty targets
    if not target:
        return False
    # Skip absolute URLs
    if target.startswith(('http://', 'https://', 'mailto:', 'tel:', 'ftp://')):
        return False
    # Skip links that look like Docusaurus absolute paths (start with /)
    if target.startswith('/'):
        return False
    # Must end with .md (possibly with anchor)
    # Strip anchor for check
    base = target.split('#')[0]
    if base.endswith('.md'):
        return True
    # Also check .mdx
    if base.endswith('.mdx'):
        return True
    return False


def resolve_link(source_file: Path, target: str, plugin_root: Path) -> tuple[Path | None, str | None]:
    """
    Resolve a relative link target against the source file's directory.
    
    Returns (resolved_path, None) if it's a within-plugin link,
    or (None, reason) if it should be skipped.
    """
    # Strip anchor from target
    base_target = target.split('#')[0]
    
    # Resolve relative to the directory of the source file
    source_dir = source_file.parent
    resolved = (source_dir / base_target).resolve()
    
    # Check if the resolved path is within the plugin root
    try:
        resolved.relative_to(plugin_root.resolve())
        return resolved, None
    except ValueError:
        # Link resolves outside the plugin root — skip (cross-plugin or absolute)
        return None, "cross-plugin"


def find_md_files(directory: Path) -> list[Path]:
    """Recursively find all .md and .mdx files in a directory."""
    files = []
    for ext in ('*.md', '*.mdx'):
        for f in directory.rglob(ext):
            # Skip files in node_modules, .docusaurus, etc.
            parts = f.parts
            if any(p in ('node_modules', '.docusaurus', '.git', 'build') for p in parts):
                continue
            files.append(f)
    return sorted(files)


def extract_links_from_file(filepath: Path) -> list[tuple[int, str, str]]:
    """
    Extract relative .md links from a markdown file.
    Returns list of (line_number, link_text, link_target).
    """
    links = []
    try:
        content = filepath.read_text(encoding='utf-8')
    except (UnicodeDecodeError, OSError) as e:
        print(f"  WARNING: Could not read {filepath}: {e}", file=sys.stderr)
        return links
    
    for line_num, line in enumerate(content.splitlines(), start=1):
        for match in MD_LINK_RE.finditer(line):
            link_text = match.group(1)
            link_target = match.group(2).strip()
            if is_relative_md_link(link_target):
                links.append((line_num, link_text, link_target))
    
    return links


def check_plugin(plugin_dir: Path) -> tuple[int, int, list[dict]]:
    """
    Check all relative .md links within a single docs plugin directory.
    
    Returns (total_links_checked, broken_count, broken_links_list).
    Each broken link entry is a dict with keys:
      source, line, link_text, link_target, resolved_path
    """
    plugin_root = plugin_dir
    md_files = find_md_files(plugin_root)
    
    total_checked = 0
    broken_links = []
    
    for md_file in md_files:
        links = extract_links_from_file(md_file)
        for line_num, link_text, link_target in links:
            resolved_path, skip_reason = resolve_link(md_file, link_target, plugin_root)
            
            if skip_reason:
                # Cross-plugin or other skip — don't count as checked or broken
                continue
            
            total_checked += 1
            
            # Check if the target file exists (try with .md and .mdx extensions)
            target_base = link_target.split('#')[0]
            source_dir = md_file.parent
            
            if not resolved_path.exists():
                # Also try .mdx extension if original was .md
                alt_target = target_base.replace('.md', '.mdx')
                alt_resolved = (source_dir / alt_target).resolve()
                
                if not alt_resolved.exists():
                    # Also try without any extension (some Docusaurus links omit .md)
                    no_ext_target = target_base[:-3]  # remove .md
                    no_ext_resolved = (source_dir / no_ext_target).resolve()
                    
                    if not no_ext_resolved.exists():
                        broken_links.append({
                            'source': str(md_file.relative_to(PROJECT_ROOT)),
                            'line': line_num,
                            'link_text': link_text,
                            'link_target': link_target,
                            'resolved_path': str(resolved_path.relative_to(PROJECT_ROOT)),
                        })
    
    return total_checked, len(broken_links), broken_links


def main():
    # Find all docs plugin directories
    plugin_dirs = sorted(DOCS_DIR.glob("docs_*-notes"))
    
    if not plugin_dirs:
        print(f"No docs plugin directories found in {DOCS_DIR}", file=sys.stderr)
        sys.exit(1)
    
    print(f"Found {len(plugin_dirs)} docs plugin directories")
    print(f"Project root: {PROJECT_ROOT}")
    print(f"Docs directory: {DOCS_DIR}")
    print("=" * 80)
    
    grand_total_checked = 0
    grand_total_broken = 0
    all_broken_links = []
    
    for plugin_dir in plugin_dirs:
        plugin_name = plugin_dir.name
        checked, broken, broken_list = check_plugin(plugin_dir)
        grand_total_checked += checked
        grand_total_broken += broken
        all_broken_links.extend(broken_list)
        
        status = "OK" if broken == 0 else f"BROKEN ({broken})"
        print(f"  {plugin_name}: {checked} links checked — {status}")
    
    print("=" * 80)
    print(f"\nSUMMARY")
    print(f"  Total links checked:    {grand_total_checked}")
    print(f"  Total broken links:     {grand_total_broken}")
    
    if all_broken_links:
        print(f"\n{'=' * 80}")
        print("BROKEN LINKS DETAIL")
        print("=" * 80)
        for bl in all_broken_links:
            print(f"\n  Source:     {bl['source']}:{bl['line']}")
            print(f"  Link text:  [{bl['link_text']}]")
            print(f"  Target:     {bl['link_target']}")
            print(f"  Resolves:   {bl['resolved_path']}")
            print(f"  (file not found)")
        
        print(f"\n{'=' * 80}")
        print(f"Total: {grand_total_broken} broken link(s) out of {grand_total_checked} checked")
        sys.exit(1)
    else:
        print("\nAll relative .md links within each plugin resolve successfully!")
        sys.exit(0)


if __name__ == '__main__':
    main()
