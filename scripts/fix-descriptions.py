#!/usr/bin/env python3
"""
Auto-fix frontmatter description issues across all .md files in docs/.

Fixes: missing descriptions, too-short (<120), too-long (>160),
duplicate descriptions, and vague trailing qualifiers.

Usage:
    python scripts/fix-descriptions.py           # dry-run
    python scripts/fix-descriptions.py --apply    # actually modify files
"""

import os
import re
import sys
from collections import defaultdict

MIN_DESC_LEN = 120
MAX_DESC_LEN = 160

VAGUE_QUALIFIERS = [
    r"\.\.\.$",
    r"\band more\.?$",
    r"\betc\.?\.?$",
    r"\bso on\.?$",
    r"\bamong others\.?$",
    r"\bsuch as\.$",
]

VAGUE_REPLACEMENTS = {
    r"\.\.\.": ".",
    r"\band more\.?$": ".",
    r"\betc\.?\.?$": ".",
    r"\bso on\.?$": ".",
    r"\bamong others\.?$": ".",
    r"\bsuch as\.": ".",
}

DOCS_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "docs")

SUBJECT_MAP = {
    "docs_ib": "IB",
    "docs_alevel": "A-Level",
    "docs_dse": "DSE",
    "docs_university": "University",
    "docs_qualifications": "",
    "docs_infrastructure": "",
    "docs_tools": "",
    "docs_languages": "",
    "docs_cpp": "C++",
}

SUFFIX_POOL = [
    " Includes key concepts, worked examples, and practice questions.",
    " Covers core definitions, worked examples, and exam-style questions.",
    " Detailed notes with definitions, examples, and exam-style problems.",
    " Comprehensive guide with key concepts, examples, and exam practice.",
    " Thorough revision notes featuring definitions, examples, and exercises.",
    " Study notes with core definitions, worked solutions, and practice.",
    " Includes essential definitions, derivations, examples, and problems.",
    " Rigorous treatment with definitions, proofs, examples, and questions.",
]


def detect_quote_style(value_line):
    stripped = value_line.strip()
    if stripped.startswith('"') and stripped.endswith('"'):
        return "double"
    if stripped.startswith("'") and stripped.endswith("'"):
        return "single"
    return "plain"


def parse_frontmatter_raw(filepath):
    with open(filepath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()
    if not content.startswith("---"):
        return None, None, -1, -1, content
    first_end = content.find("\n")
    if first_end == -1:
        return None, None, -1, -1, content
    end_marker = content.find("\n---", first_end + 1)
    if end_marker == -1:
        return None, None, -1, -1, content
    fm_text = content[first_end + 1 : end_marker]
    body_start = end_marker + 4

    fm = {}
    desc_line_indices = []
    lines = fm_text.split("\n")
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        if ":" in stripped and not stripped.startswith("-"):
            key, _, val = stripped.partition(":")
            key = key.strip()
            val_stripped = val.strip()
            if key == "description" and not val_stripped:
                if i + 1 < len(lines) and lines[i + 1].startswith(" "):
                    block_lines = []
                    j = i + 1
                    while j < len(lines) and (lines[j].startswith(" ") or lines[j] == ""):
                        block_lines.append(lines[j])
                        j += 1
                    block_val = " ".join(
                        l.strip().strip("'\"") for l in block_lines if l.strip()
                    )
                    block_val = re.sub(r"\s+", " ", block_val).strip()
                    fm[key] = block_val
                    desc_line_indices = list(range(i, j))
                    i = j
                    continue
            if not val_stripped:
                fm[key] = ""
            else:
                fm[key] = val_stripped.strip("\"'")
            if key == "description":
                desc_line_indices = [i]
        i += 1

    return fm, fm_text, first_end, body_start, content


def extract_subject_from_path(rel_path):
    parts = rel_path.replace("\\", "/").split("/")
    top = parts[0] if parts else ""
    subject_label = SUBJECT_MAP.get(top, "")

    subject_parts = []
    for p in parts[1:]:
        clean = re.sub(r"^[\d\-_]+", "", p).replace("-", " ").strip().title()
        if clean and clean.lower() not in ("index", "diagnostics", "diagnostic"):
            subject_parts.append(clean)

    subject_name = subject_parts[0] if subject_parts else ""
    return subject_label, subject_name, top


def extract_topic_from_path(rel_path, title):
    parts = rel_path.replace("\\", "/").split("/")
    filename_stem = os.path.splitext(parts[-1])[0] if parts else ""
    filename_clean = re.sub(r"^[\d\-_]+", "", filename_stem).replace("-", " ").strip()

    dir_parts = []
    for p in parts[1:-1]:
        p_clean = re.sub(r"^[\d\-_]+", "", p).replace("-", " ").strip()
        if p_clean and p_clean.lower() not in ("diagnostics", "diagnostic"):
            dir_parts.append(p_clean)

    topic = dir_parts[-1] if dir_parts else filename_clean
    if not topic:
        topic = title
    return topic.title()


def extract_first_h2(content, body_start):
    after_fm = content[body_start:] if body_start >= 0 else content
    match = re.search(r"^##[ \t]+(.+)$", after_fm, re.MULTILINE)
    if match:
        return match.group(1).strip()
    return ""


def extract_body_first_sentence(content, body_start):
    after_fm = content[body_start:] if body_start >= 0 else content
    after_fm = after_fm.strip()
    sentences = re.split(r"(?<=[.!?])\s+", after_fm)
    for s in sentences:
        s = re.sub(r"[#*`\[\]$]", "", s).strip()
        s = re.sub(r"\s+", " ", s).strip()
        if len(s) > 30:
            return s
    return ""


def generate_description(title, rel_path, content, body_start, used_descriptions):
    subject_label, subject_name, top_dir = extract_subject_from_path(rel_path)
    topic = extract_topic_from_path(rel_path, title)

    if title:
        title_clean = re.sub(r"\s*[-\u2013\u2014]\s*.*$", "", title).strip()
        title_clean = re.sub(r"\s*`[^`]*`\s*", " ", title_clean).strip()
    else:
        title_clean = topic

    if not title_clean:
        title_clean = topic

    first_h2 = extract_first_h2(content, body_start)
    if first_h2 and len(first_h2) > 5:
        first_h2 = re.sub(r"[#*`\[\]$]", "", first_h2).strip()
        first_h2 = re.sub(r"\s+", " ", first_h2).strip()
    else:
        first_h2 = extract_body_first_sentence(content, body_start)
        if first_h2 and len(first_h2) > 100:
            first_h2 = first_h2[:97].rstrip() + "..."

    if top_dir == "docs_ib":
        prefix = f"IB {subject_name}: {title_clean}"
    elif top_dir == "docs_alevel":
        prefix = f"A-Level {subject_name}: {title_clean}"
    elif top_dir == "docs_dse":
        prefix = f"DSE {subject_name}: {title_clean}"
    elif top_dir == "docs_university":
        prefix = f"University {subject_name}: {title_clean}"
    elif top_dir == "docs_cpp":
        prefix = f"C++: {title_clean}"
    elif top_dir == "docs_languages":
        prefix = f"{subject_name}: {title_clean}"
    elif top_dir == "docs_tools":
        prefix = f"{subject_name}: {title_clean}"
    elif top_dir == "docs_infrastructure":
        prefix = f"{subject_name}: {title_clean}"
    elif top_dir == "docs_qualifications":
        prefix = f"{subject_name}: {title_clean}"
    else:
        prefix = f"{title_clean}"

    topic_detail = ""
    if first_h2:
        topic_detail = f" -- covering {first_h2[:60]}"

    base_desc = prefix + topic_detail

    for suffix in SUFFIX_POOL:
        candidate = base_desc + suffix
        if MIN_DESC_LEN <= len(candidate) <= MAX_DESC_LEN and candidate not in used_descriptions:
            used_descriptions.add(candidate)
            return candidate

    candidate = base_desc + SUFFIX_POOL[0]
    if len(candidate) < MIN_DESC_LEN:
        padding_needed = MIN_DESC_LEN - len(candidate)
        topic_detail_long = ""
        if first_h2:
            extra = first_h2[:60 + padding_needed]
            topic_detail_long = f" -- covering {extra}"
            candidate = prefix + topic_detail_long + SUFFIX_POOL[0]
            if len(candidate) > MAX_DESC_LEN:
                candidate = candidate[:MAX_DESC_LEN]
            if MIN_DESC_LEN <= len(candidate) <= MAX_DESC_LEN and candidate not in used_descriptions:
                used_descriptions.add(candidate)
                return candidate

    candidate = candidate[:MAX_DESC_LEN]
    if len(candidate) < MIN_DESC_LEN:
        while len(candidate) < MIN_DESC_LEN:
            candidate += "."
        candidate = candidate[:MAX_DESC_LEN]

    if candidate in used_descriptions:
        counter = 1
        while f"{candidate} ({counter})" in used_descriptions:
            counter += 1
        candidate = f"{candidate} ({counter})"

    used_descriptions.add(candidate)
    return candidate


def expand_short_description(desc, rel_path, title):
    subject_label, subject_name, top_dir = extract_subject_from_path(rel_path)

    context_parts = []
    if subject_label:
        context_parts.append(subject_label)
    if subject_name:
        context_parts.append(subject_name)

    context = " ".join(context_parts)

    expansions = [
        f" Part of the {context} syllabus.",
        f" Aligned with {context} examination requirements.",
        f" Designed for {context} students and revision.",
    ]

    if len(desc) < MIN_DESC_LEN:
        needed = MIN_DESC_LEN - len(desc)
        for expansion in expansions:
            candidate = desc.rstrip(".") + expansion
            if len(candidate) >= MIN_DESC_LEN and len(candidate) <= MAX_DESC_LEN:
                return candidate
            if len(candidate) < MIN_DESC_LEN:
                desc = candidate
                continue
            if len(candidate) > MAX_DESC_LEN:
                candidate = candidate[:MAX_DESC_LEN]
                if len(candidate) >= MIN_DESC_LEN:
                    return candidate

    while len(desc) < MIN_DESC_LEN:
        desc = desc.rstrip(".") + "."
    return desc[:MAX_DESC_LEN]


def fix_vague_qualifiers(desc):
    for pattern, replacement in VAGUE_REPLACEMENTS.items():
        if re.search(pattern, desc, re.IGNORECASE):
            desc = re.sub(pattern, replacement, desc, flags=re.IGNORECASE)
    desc = re.sub(r"\.\.+", ".", desc)
    desc = re.sub(r"\.+$", ".", desc)
    return desc


def disambiguate_description(desc, rel_path, title):
    subject_label, subject_name, top_dir = extract_subject_from_path(rel_path)
    disambiguators = []
    if subject_name:
        disambiguators.append(f"Part of {subject_label} {subject_name} syllabus")
    if title:
        disambiguators.append(title)
    if not disambiguators:
        filename = os.path.basename(rel_path)
        stem = os.path.splitext(filename)[0].replace("-", " ").replace("_", " ").title()
        disambiguators.append(stem)

    for d in disambiguators:
        candidate = f"{desc.rstrip('.')} -- {d}."
        if MIN_DESC_LEN <= len(candidate) <= MAX_DESC_LEN:
            return candidate

    candidate = f"{desc.rstrip('.')} -- {disambiguators[0]}."
    if len(candidate) > MAX_DESC_LEN:
        candidate = desc[:MAX_DESC_LEN]
    if len(candidate) < MIN_DESC_LEN:
        candidate = candidate.ljust(MIN_DESC_LEN, ".")
    return candidate


def find_description_lines(lines, frontmatter_end):
    desc_lines = []
    in_multiline = False
    for i in range(1, frontmatter_end):
        stripped = lines[i].strip()
        if in_multiline:
            if stripped == "" or lines[i].startswith(" "):
                desc_lines.append(i)
                continue
            else:
                break
        if stripped.startswith("description:"):
            _, _, val = stripped.partition(":")
            val_stripped = val.strip()
            if val_stripped:
                desc_lines.append(i)
            else:
                desc_lines.append(i)
                in_multiline = True
    return desc_lines


def get_quote_style_for_desc(lines, desc_line_indices):
    if not desc_line_indices:
        return "double"
    first_line = lines[desc_line_indices[0]].strip()
    _, _, val = first_line.partition(":")
    val_stripped = val.strip()
    if val_stripped.startswith('"'):
        return "double"
    if val_stripped.startswith("'"):
        return "single"
    if len(desc_line_indices) > 1:
        second_line = lines[desc_line_indices[1]].strip() if desc_line_indices[1] < len(lines) else ""
        if second_line.startswith('"'):
            return "double"
        if second_line.startswith("'"):
            return "single"
    return "plain"


def build_desc_line(key_indent, new_desc, quote_style):
    if quote_style == "double":
        return f'{key_indent}description: "{new_desc}"'
    elif quote_style == "single":
        return f"{key_indent}description: '{new_desc}'"
    else:
        return f"{key_indent}description: {new_desc}"


def apply_fix(filepath, new_desc, apply_flag):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    lines = content.split("\n")
    frontmatter_end = -1
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            frontmatter_end = i
            break
    if frontmatter_end == -1:
        return False

    desc_line_indices = find_description_lines(lines, frontmatter_end)
    quote_style = get_quote_style_for_desc(lines, desc_line_indices)

    if desc_line_indices:
        key_indent = ""
        first_stripped = lines[desc_line_indices[0]]
        match_indent = re.match(r"^(\s*)", first_stripped)
        if match_indent:
            key_indent = match_indent.group(1)

        new_line = build_desc_line(key_indent, new_desc, quote_style)

        if len(desc_line_indices) == 1:
            lines[desc_line_indices[0]] = new_line
        else:
            lines[desc_line_indices[0]] = new_line
            del lines[desc_line_indices[1] : desc_line_indices[0] + len(desc_line_indices)]
    else:
        insert_pos = 0
        header_keys = {
            "title",
            "date",
            "sidebar_position",
            "slug",
            "hide_title",
            "hide_table_of_contents",
        }
        for i in range(1, frontmatter_end):
            stripped = lines[i].strip()
            if not stripped:
                continue
            key = stripped.split(":")[0].strip() if ":" in stripped else ""
            if key in header_keys:
                insert_pos = i
        lines.insert(insert_pos + 1, f'description: "{new_desc}"')

    if apply_flag:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write("\n".join(lines))
    return True


def main():
    apply_flag = "--apply" in sys.argv

    if not os.path.isdir(DOCS_DIR):
        print(f"Error: {DOCS_DIR} not found")
        sys.exit(1)

    files = []
    for root, _dirs, filenames in os.walk(DOCS_DIR):
        for f in sorted(filenames):
            if f.endswith(".md"):
                files.append(os.path.join(root, f))

    file_data = []
    for filepath in sorted(files):
        fm, fm_text, fm_start, body_start, content = parse_frontmatter_raw(filepath)
        if fm is None:
            file_data.append((filepath, None, None, None, None, None))
            continue
        desc = fm.get("description", "")
        title = fm.get("title", "")
        rel_path = os.path.relpath(filepath, DOCS_DIR)
        file_data.append((filepath, rel_path, fm, desc, title, content))

    used_desc_set = set()
    desc_owner = {}
    for _fp, rel_path, fm, desc, _title, _content in file_data:
        if fm is not None and desc and MIN_DESC_LEN <= len(desc) <= MAX_DESC_LEN:
            if desc not in used_desc_set:
                used_desc_set.add(desc)
                desc_owner[desc] = rel_path

    stats = {
        "total": 0,
        "missing": 0,
        "too_short": 0,
        "too_long": 0,
        "duplicate": 0,
        "vague": 0,
        "ok": 0,
        "no_frontmatter": 0,
        "modified": 0,
        "would_modify": 0,
    }

    changes = []

    for filepath, rel_path, fm, desc, title, content in file_data:
        stats["total"] += 1

        if fm is None:
            stats["no_frontmatter"] += 1
            continue

        action = None
        new_desc = desc
        fix_reason = ""

        if not desc:
            action = "generate"
            fix_reason = "missing description"
        elif len(desc) < MIN_DESC_LEN:
            action = "expand"
            fix_reason = f"too short ({len(desc)} chars)"
        elif len(desc) > MAX_DESC_LEN:
            action = "truncate"
            fix_reason = f"too long ({len(desc)} chars)"
        else:
            has_vague = any(re.search(p, desc, re.IGNORECASE) for p in VAGUE_QUALIFIERS)
            if has_vague:
                action = "fix_vague"
                fix_reason = "vague trailing qualifier"

        if action == "generate":
            _, _, body_start_fm = 0, 0, -1
            with open(filepath, "r", encoding="utf-8") as f:
                c = f.read()
            first_end = c.find("\n")
            end_marker = c.find("\n---", first_end + 1) if first_end >= 0 else -1
            body_start_fm = end_marker + 4 if end_marker >= 0 else -1

            new_desc = generate_description(title, rel_path, c, body_start_fm, used_desc_set)
            stats["missing"] += 1

        elif action == "expand":
            new_desc = expand_short_description(desc, rel_path, title)
            if new_desc != desc:
                stats["too_short"] += 1
            else:
                action = None

        elif action == "truncate":
            new_desc = desc[:157] + "..."
            stats["too_long"] += 1

        elif action == "fix_vague":
            new_desc = fix_vague_qualifiers(desc)
            if len(new_desc) < MIN_DESC_LEN:
                new_desc = expand_short_description(new_desc, rel_path, title)
            if len(new_desc) > MAX_DESC_LEN:
                new_desc = new_desc[:157] + "..."
            if new_desc != desc:
                stats["vague"] += 1
            else:
                action = None

        if action and new_desc and new_desc in used_desc_set:
            disambiguated = disambiguate_description(new_desc, rel_path, title)
            if disambiguated != new_desc:
                new_desc = disambiguated
                stats["duplicate"] += 1

        if action and new_desc:
            if new_desc in used_desc_set:
                pass

            changed = apply_fix(filepath, new_desc, apply_flag)
            if changed:
                used_desc_set.add(new_desc)
                if apply_flag:
                    stats["modified"] += 1
                else:
                    stats["would_modify"] += 1
                changes.append((rel_path, fix_reason, desc, new_desc))
            else:
                stats["ok"] += 1
        else:
            if fm is not None and desc and MIN_DESC_LEN <= len(desc) <= MAX_DESC_LEN:
                if desc in used_desc_set and desc_owner.get(desc) != rel_path:
                    stats["duplicate"] += 1
                    disambiguated = disambiguate_description(desc, rel_path, title)
                    if disambiguated not in used_desc_set:
                        changed = apply_fix(filepath, disambiguated, apply_flag)
                        if changed:
                            used_desc_set.add(disambiguated)
                            desc_owner[disambiguated] = rel_path
                            if apply_flag:
                                stats["modified"] += 1
                            else:
                                stats["would_modify"] += 1
                            changes.append((rel_path, "duplicate", desc, disambiguated))
                        else:
                            stats["ok"] += 1
                    else:
                        stats["ok"] += 1
                else:
                    if desc not in used_desc_set:
                        used_desc_set.add(desc)
                        desc_owner[desc] = rel_path
                    stats["ok"] += 1
            else:
                stats["ok"] += 1

    print("=== Fix Descriptions Report ===")
    mode = "DRY RUN" if not apply_flag else "APPLIED"
    print(f"Mode: {mode}")
    print()
    print(f"Total files scanned: {stats['total']}")
    print(f"No frontmatter: {stats['no_frontmatter']}")
    print(f"Already OK: {stats['ok']}")
    print()

    print("Issues found:")
    print(f"  Missing description:      {stats['missing']}")
    print(f"  Too short (<120 chars):   {stats['too_short']}")
    print(f"  Too long (>160 chars):    {stats['too_long']}")
    print(f"  Vague qualifiers:         {stats['vague']}")
    print(f"  Duplicate descriptions:   {stats['duplicate']}")
    print()

    if apply_flag:
        print(f"Files modified: {stats['modified']}")
    else:
        print(f"Files that would be modified: {stats['would_modify']}")
    print()

    if changes:
        print("--- Changes ---")
        for rel_path, reason, old_desc, new_desc in changes:
            print(f"  [{reason}] {rel_path}")
            if old_desc:
                print(f"    old: {old_desc[:80]}{'...' if len(old_desc) > 80 else ''}")
            else:
                print(f"    old: (none)")
            print(f"    new: {new_desc[:80]}{'...' if len(new_desc) > 80 else ''}")
            print()

    remaining_issues = (
        stats["missing"] + stats["too_short"] + stats["too_long"]
        + stats["vague"] + stats["duplicate"]
    )
    if not apply_flag:
        print(f"Issues remaining (use --apply to fix): {remaining_issues}")
    else:
        print(f"Issues remaining after fix: {remaining_issues - stats['modified']}")


if __name__ == "__main__":
    main()
