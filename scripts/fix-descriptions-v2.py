#!/usr/bin/env python3
"""
Simpler replacement for fix-descriptions.py.
Scans all .md files in docs/, fixes missing/short/long descriptions.

Usage:
    python scripts/fix-descriptions-v2.py           # dry-run
    python scripts/fix-descriptions-v2.py --apply    # actually modify files
"""

import hashlib
import os
import re
import sys

MIN_LEN = 120
MAX_LEN = 160

DOCS_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "docs")

SKIP_DIRS = {"docs_infrastructure", "docs_tools"}

LANGUAGE_MAP = {
    "dart": "Dart",
    "go": "Go",
    "java": "Java",
    "kotlin": "Kotlin",
    "python": "Python",
    "rust": "Rust",
    "typescript": "TypeScript",
}


def get_subject(rel_path):
    parts = rel_path.replace("\\", "/").split("/")
    top = parts[0] if parts else ""
    if top in SKIP_DIRS:
        return None
    if top == "docs_ib":
        return "IB"
    if top == "docs_alevel":
        return "A-Level"
    if top == "docs_dse":
        return "DSE"
    if top == "docs_university":
        return "University"
    if top == "docs_cpp":
        return "C++"
    if top == "docs_languages":
        if len(parts) > 1:
            lang = parts[1].lower()
            return LANGUAGE_MAP.get(lang, lang.title())
        return None
    if top == "docs_qualifications":
        if len(parts) > 1:
            return parts[1].title()
        return None
    return None


def get_subject_area(rel_path):
    parts = rel_path.replace("\\", "/").split("/")
    top = parts[0] if parts else ""
    area_parts = []
    skip_names = {"diagnostics", "diagnostic", "index"}
    if top == "docs_languages":
        relevant = parts[2:] if len(parts) > 2 else []
    elif top == "docs_qualifications":
        relevant = parts[2:] if len(parts) > 2 else []
    else:
        relevant = parts[1:]
    for p in relevant:
        clean = re.sub(r"^[\d\-_.]+", "", p).replace("-", " ").strip().title()
        if clean and clean.lower() not in skip_names:
            area_parts.append(clean)
    return " ".join(area_parts[:1]) if area_parts else ""


def extract_title_from_filename(rel_path):
    stem = os.path.splitext(os.path.basename(rel_path))[0]
    clean = re.sub(r"^[\d\-_.]+", "", stem).replace("-", " ").strip().title()
    return clean if clean else stem.replace("-", " ").title()


def clean_title(title):
    t = re.sub(r"\s*[-\u2013\u2014]\s*.*$", "", title).strip()
    t = re.sub(r"\s*`[^`]*`\s*", " ", t).strip()
    t = re.sub(r"[#*`\[\]$]", "", t).strip()
    t = re.sub(r"\s+", " ", t).strip()
    return t


def extract_h2_headings(content, body_start):
    body = content[body_start:] if body_start >= 0 else content
    headings = re.findall(r"^##[ \t]+(.+)$", body, re.MULTILINE)
    cleaned = []
    for h in headings:
        h = re.sub(r"[#*`\[\]$]", "", h).strip()
        h = re.sub(r"\s+", " ", h).strip()
        h = re.sub(r"^\d+[\.\):]\s*", "", h).strip()
        if h and len(h) > 2:
            cleaned.append(h)
    return cleaned


def path_hash(rel_path):
    return int(hashlib.md5(rel_path.encode()).hexdigest(), 16)


def generate_description(title, subject, subject_area, h2_headings, rel_path):
    topic = clean_title(title) if title else extract_title_from_filename(rel_path)
    if not topic:
        topic = extract_title_from_filename(rel_path)

    if h2_headings:
        subtopics = h2_headings[:5]
        subtopics_str = ", ".join(subtopics)
    else:
        subtopics_str = "core concepts, definitions, worked examples, and common pitfalls"

    prefix = f"{subject} {topic}"
    if subject_area:
        prefix = f"{subject} {subject_area} {topic}"

    desc = f"{prefix} notes covering {subtopics_str}. Includes key concepts, definitions, and exam-style practice questions."

    if len(desc) < MIN_LEN:
        desc = desc.rstrip(".") + " for exam preparation and revision."

    if len(desc) > MAX_LEN:
        while len(desc) > MAX_LEN:
            cut = desc[:MAX_LEN - 3].rstrip()
            desc = cut + "..."

    if len(desc) < MIN_LEN:
        h = path_hash(rel_path)
        qualifiers = [
            " and advanced applications",
            " and problem-solving techniques",
            " and revision strategies",
            " and mathematical methods",
            " and practical skills",
            " and analytical techniques",
            " and critical analysis",
            " and synthesis methods",
            " and evaluation skills",
            " and computational methods",
        ]
        idx = h % len(qualifiers)
        desc = desc.rstrip(".") + qualifiers[idx] + "."
        if len(desc) > MAX_LEN:
            desc = desc[:MAX_LEN - 3].rstrip() + "..."

    return desc


def parse_frontmatter(filepath):
    with open(filepath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()
    lines = content.split("\n")

    if not lines:
        return None, {}, -1, -1, content, "empty_file"

    if lines[0].strip() == "---":
        fm_end = -1
        for i in range(1, len(lines)):
            if lines[i].strip() == "---":
                fm_end = i
                break
        if fm_end == -1:
            return None, {}, -1, -1, content, "no_closing_marker"
        return _parse_fm_lines(lines, 1, fm_end, fm_end + 1, content, "dashed")

    has_fm_keys = bool(re.match(r"^(title|id|sidebar_label|description|slug)\s*:", lines[0].strip()))
    if has_fm_keys:
        return _parse_collapsed_frontmatter(lines, content)

    return None, {}, -1, -1, content, "no_frontmatter"


def _parse_fm_lines(lines, start, end, body_start, content, fmt):
    fm = {}
    for i in range(start, end):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            continue
        if ":" in stripped and not stripped.startswith("-"):
            key, _, val = stripped.partition(":")
            key = key.strip()
            val_stripped = val.strip()
            if val_stripped:
                if len(val_stripped) >= 2 and ((val_stripped[0] == "'" and val_stripped[-1] == "'") or
                                                 (val_stripped[0] == '"' and val_stripped[-1] == '"')):
                    fm[key] = val_stripped[1:-1]
                else:
                    fm[key] = val_stripped
            else:
                if key == "description":
                    block_lines = []
                    j = i + 1
                    while j < end:
                        cl = lines[j]
                        if cl.startswith(" ") or cl.startswith("\t"):
                            block_lines.append(cl)
                        elif cl.strip() == "":
                            block_lines.append(cl)
                        else:
                            break
                        j += 1
                    if block_lines:
                        combined = " ".join(
                            l.strip().strip("'\"") for l in block_lines if l.strip()
                        )
                        combined = re.sub(r"\s+", " ", combined).strip()
                        fm[key] = combined
                        fm["_desc_block_end"] = j - 1
                    else:
                        fm[key] = ""
                else:
                    fm[key] = ""

    return fm, lines, body_start, end, content, fmt


def _parse_collapsed_frontmatter(lines, content):
    title = ""
    desc = ""
    fm_found_keys = set()
    fm_end_candidates = {"title", "id", "sidebar_label", "description", "slug",
                        "date", "tags", "categories", "sidebar_position",
                        "hide_title", "hide_table_of_contents", "draft"}

    all_text = content
    title_m = re.match(r"title:\s*(.+?)(?=\s+description:|\s+slug:|\s+date:|\s+tags:|\s+categories:|\s*$)", all_text, re.DOTALL)
    if title_m:
        title = title_m.group(1).strip().strip("'\"")
        fm_found_keys.add("title")

    desc_m = re.search(r"description:\s*['\"](.+?)['\"]", all_text, re.DOTALL)
    if desc_m:
        desc = re.sub(r"\s+", " ", desc_m.group(1).strip())
        fm_found_keys.add("description")

    if not desc:
        desc_m2 = re.search(r"description:\s*(.+?)(?=\s+slug:|\s+date:|\s+tags:|\s+categories:|\s*$)", all_text, re.DOTALL)
        if desc_m2:
            desc = re.sub(r"\s+", " ", desc_m2.group(1).strip().strip("'\""))
            fm_found_keys.add("description")

    body_start = 0
    blank_line_after_fm = -1
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith("date:"):
            fm_found_keys.add("date")
        if stripped.startswith("tags:"):
            fm_found_keys.add("tags")
        if stripped.startswith("categories:"):
            fm_found_keys.add("categories")
        if stripped == "" and fm_found_keys:
            blank_line_after_fm = i
            break

    if blank_line_after_fm >= 0:
        body_start = blank_line_after_fm + 1
        while body_start < len(lines) and lines[body_start].strip() == "":
            body_start += 1
    elif fm_found_keys:
        for i, line in enumerate(lines):
            stripped = line.strip()
            if stripped and not any(stripped.startswith(k + ":") or stripped.startswith("-") for k in fm_end_candidates):
                if stripped.startswith("##") or (not stripped.endswith(":") and not stripped.startswith("-")):
                    body_start = i
                    break
    else:
        body_start = 0

    fm = {}
    if title:
        fm["title"] = title
    if desc:
        fm["description"] = desc
    for k in fm_found_keys:
        if k not in fm:
            fm[k] = ""

    return fm, lines, body_start, body_start, content, "collapsed"


def get_desc_info(lines, fm_end, fmt):
    desc_line_start = -1
    desc_line_end = -1
    quote_style = "inline"
    indent = ""

    if fmt != "dashed":
        return desc_line_start, desc_line_end, quote_style, indent, -1

    for i in range(1, fm_end):
        stripped = lines[i].strip()
        if stripped.startswith("description:"):
            indent_match = re.match(r"^(\s*)", lines[i])
            indent = indent_match.group(1) if indent_match else ""
            val_after = stripped[len("description:"):].strip()
            if val_after:
                if val_after.startswith("'") or val_after.startswith('"'):
                    quote_style = "quoted"
                else:
                    quote_style = "inline"
                desc_line_start = i
                desc_line_end = i
            else:
                j = i + 1
                while j < fm_end:
                    cl = lines[j]
                    if cl.strip().startswith("'") or cl.strip().startswith('"'):
                        quote_style = "quoted"
                    if cl.startswith(" ") or cl.startswith("\t") or cl.strip() == "":
                        j += 1
                    else:
                        break
                desc_line_start = i
                desc_line_end = j - 1

    title_line = -1
    for i in range(1, fm_end):
        stripped = lines[i].strip()
        if stripped.startswith("title:"):
            title_line = i
            break

    return desc_line_start, desc_line_end, quote_style, indent, title_line


def apply_fix_dashed(filepath, new_desc, apply_flag):
    fm, lines, body_start, fm_end, content, fmt = parse_frontmatter(filepath)
    if fm is None or fmt != "dashed":
        return False, fmt

    desc_start, desc_end, quote_style, indent, title_line = get_desc_info(lines, fm_end, fmt)

    if quote_style == "quoted":
        stripped_val = lines[desc_start].strip()[len("description:"):].strip()
        qchar = stripped_val[0] if stripped_val and stripped_val[0] in ("'", '"') else "'"
        new_line = f'{indent}description: {qchar}{new_desc}{qchar}'
    else:
        new_line = f'{indent}description: {new_desc}'

    if desc_start >= 0:
        num_to_remove = desc_end - desc_start + 1
        lines[desc_start:desc_start + num_to_remove] = [new_line]
    else:
        insert_pos = title_line if title_line >= 0 else 1
        lines.insert(insert_pos + 1, f'description: "{new_desc}"')

    if apply_flag:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write("\n".join(lines))
    return True, fmt


def apply_fix_collapsed(filepath, new_desc, apply_flag):
    with open(filepath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()

    desc_m = re.search(r"description:\s*['\"](.+?)['\"]", content, re.DOTALL)
    if desc_m:
        old_desc_text = desc_m.group(0)
        new_desc_text = f"description: '{new_desc}'"
        content = content.replace(old_desc_text, new_desc_text, 1)
    else:
        desc_m2 = re.search(r"description:\s*(.+?)(?=\s+slug:|\s+date:|\s+tags:|\s+categories:|\s*$)", content, re.DOTALL)
        if desc_m2:
            old_desc_text = desc_m2.group(0)
            new_desc_text = f"description: '{new_desc}'"
            content = content.replace(old_desc_text, new_desc_text, 1)
        else:
            title_m = re.search(r"(title:\s*.+?)(?=\s+description:|\s+slug:|\s+date:|\s+tags:|\s+categories:|\s*$)", content, re.DOTALL)
            if title_m:
                insert_after = title_m.end()
                content = content[:insert_after] + f"\ndescription: '{new_desc}'" + content[insert_after:]
            else:
                return False, "collapsed"

    if apply_flag:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
    return True, "collapsed"


def apply_fix(filepath, new_desc, apply_flag):
    fm, lines, body_start, fm_end, content, fmt = parse_frontmatter(filepath)
    if fmt == "dashed":
        return apply_fix_dashed(filepath, new_desc, apply_flag)
    elif fmt == "collapsed":
        return apply_fix_collapsed(filepath, new_desc, apply_flag)
    return False, fmt


def main():
    apply_flag = "--apply" in sys.argv

    if not os.path.isdir(DOCS_DIR):
        print(f"Error: {DOCS_DIR} not found")
        sys.exit(1)

    all_files = []
    for root, _dirs, filenames in os.walk(DOCS_DIR):
        for f in sorted(filenames):
            if f.endswith(".md") and not f.endswith(".mdx"):
                all_files.append(os.path.join(root, f))

    stats = {"total": 0, "missing": 0, "short": 0, "long": 0, "ok": 0, "skipped": 0,
             "no_fm": 0, "modified": 0, "collapsed_fixed": 0}
    changes = []

    for filepath in sorted(all_files):
        stats["total"] += 1
        rel_path = os.path.relpath(filepath, DOCS_DIR)

        subject = get_subject(rel_path)
        if subject is None:
            stats["skipped"] += 1
            continue

        fm, lines, body_start, fm_end, content, fmt = parse_frontmatter(filepath)
        if fm is None:
            stats["no_fm"] += 1
            continue

        title = fm.get("title", "")
        desc = fm.get("description", "")
        subject_area = get_subject_area(rel_path)
        h2_headings = extract_h2_headings(content, body_start)

        if not desc or len(desc) < MIN_LEN or len(desc) > MAX_LEN:
            pass
        else:
            stats["ok"] += 1
            continue

        if not desc:
            reason = "missing"
            stats["missing"] += 1
        elif len(desc) < MIN_LEN:
            reason = f"too short ({len(desc)} chars)"
            stats["short"] += 1
        else:
            new_desc = desc[:157] + "..."
            ok, _ = apply_fix(filepath, new_desc, apply_flag)
            if ok:
                stats["modified"] += 1
                changes.append((rel_path, f"too long ({len(desc)} chars)", desc, new_desc))
            else:
                stats["ok"] += 1
            continue

        new_desc = generate_description(title, subject, subject_area, h2_headings, rel_path)
        ok, actual_fmt = apply_fix(filepath, new_desc, apply_flag)
        if ok:
            stats["modified"] += 1
            if actual_fmt == "collapsed":
                stats["collapsed_fixed"] += 1
            changes.append((rel_path, reason, desc, new_desc))
        else:
            stats["ok"] += 1

    print("=== fix-descriptions-v2 Report ===")
    mode = "APPLIED" if apply_flag else "DRY RUN"
    print(f"Mode: {mode}\n")
    print(f"Total files scanned:   {stats['total']}")
    print(f"Skipped (infra/tools):  {stats['skipped']}")
    print(f"No frontmatter:        {stats['no_fm']}")
    print(f"Already OK (120-160):  {stats['ok']}")
    print()
    print(f"Missing description:   {stats['missing']}")
    print(f"Too short (<120):      {stats['short']}")
    print(f"Too long (>160):       {stats['long']}")
    print(f"  (incl. collapsed fm): {stats['collapsed_fixed']}")
    print()
    print(f"Files {'modified' if apply_flag else 'that would be modified'}: {stats['modified']}\n")

    if changes:
        print("--- Sample Changes (first 30) ---")
        for rel_path, reason, old_desc, new_desc in changes[:30]:
            print(f"  [{reason}] {rel_path}")
            old_display = old_desc[:70] + "..." if old_desc and len(old_desc) > 70 else (old_desc or "(none)")
            print(f"    old: {old_display}")
            new_display = new_desc[:70] + "..." if len(new_desc) > 70 else new_desc
            print(f"    new: {new_display}")
            print()

    if not apply_flag and stats["modified"]:
        print(f"Run with --apply to fix {stats['modified']} files.")


if __name__ == "__main__":
    main()
