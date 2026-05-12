#!/usr/bin/env python3

import os
import re
import sys
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path

STANDARD_NOTATION = set(
    list("xyznijkabcdefgh")
    + [
        "sin", "cos", "tan", "log", "exp", "lim", "sum", "prod",
        "int", "max", "min", "sup", "inf", "det", "tr", "rank",
        "dim", "ker", "im", "re", "arg", "deg", "abs", "sgn",
        "var", "cov", "E", "P", "X", "Y", "Z", "N", "R", "Q",
        "C", "S", "T", "U", "V", "W",
        "mu", "sigma", "tau", "delta", "epsilon", "theta",
        "lambda", "pi", "omega", "alpha", "beta", "gamma",
        "rho", "phi", "psi", "chi", "eta", "zeta",
    ]
)

DEFINITION_PATTERNS = [
    re.compile(r'\*\*(.+?)\*\*[:\s]'),
    re.compile(r'\*\*Definition:\*\*'),
    re.compile(r'\*\*Theorem:\*\*'),
    re.compile(r'\*\*Lemma:\*\*'),
    re.compile(r'\*\*Proposition:\*\*'),
    re.compile(r'\*\*Corollary:\*\*'),
    re.compile(r'\*\*Definition\b'),
]

CODE_FENCE_RE = re.compile(r'^```.*?^```', re.MULTILINE | re.DOTALL)
DISPLAY_MATH_RE = re.compile(r'\$\$.*?\$\$', re.DOTALL)
INLINE_MATH_RE = re.compile(r'\$(.+?)\$')
BOLD_RE = re.compile(r'\*\*(.+?)\*\*')

DOC_ROOT = Path(__file__).resolve().parent.parent / "docs"


def strip_blocks(text):
    text = CODE_FENCE_RE.sub('', text)
    text = DISPLAY_MATH_RE.sub('', text)
    return text


def extract_definitions(text):
    defs = []
    for line_num, line in enumerate(text.split('\n'), 1):
        for pat in DEFINITION_PATTERNS:
            m = pat.search(line)
            if m:
                defs.append((line_num, m.group(1).strip().rstrip(':')))
    return defs


def extract_math_terms(text):
    terms = []
    for line_num, line in enumerate(text.split('\n'), 1):
        for m in INLINE_MATH_RE.finditer(line):
            raw = m.group(1)
            for tok in re.split(r'[\s{}(),;+=<>~!|&\^*_\[\]\\]', raw):
                tok = tok.strip().strip("'\"").strip('.')
                if tok and tok not in STANDARD_NOTATION and not tok.isdigit():
                    terms.append((line_num, tok))
    return terms


def extract_bold_terms(text):
    terms = []
    for line_num, line in enumerate(text.split('\n'), 1):
        for m in BOLD_RE.finditer(line):
            tok = m.group(1).strip().rstrip(':')
            if tok and tok not in STANDARD_NOTATION and len(tok) > 1:
                terms.append((line_num, tok))
    return terms


def check_file(filepath):
    try:
        text = Path(filepath).read_text(encoding='utf-8')
    except Exception:
        return filepath, []

    cleaned = strip_blocks(text)
    defs = extract_definitions(cleaned)
    if not defs:
        return filepath, []

    def_map = {}
    for line_num, term in defs:
        t = term.lower()
        if t not in def_map or line_num < def_map[t]:
            def_map[t] = line_num

    all_terms = extract_math_terms(cleaned) + extract_bold_terms(cleaned)

    findings = []
    seen = set()
    for use_line, term in all_terms:
        t = term.lower()
        def_line = def_map.get(t)
        if def_line is not None and use_line < def_line:
            key = (t, use_line, def_line)
            if key not in seen:
                seen.add(key)
                findings.append((use_line, def_line, term))
    findings.sort()
    return filepath, findings


def main():
    md_files = sorted(DOC_ROOT.rglob('*.md'))
    if not md_files:
        print(f"No .md files found under {DOC_ROOT}")
        sys.exit(0)

    file_count = len(md_files)
    total_findings = 0
    file_results = []

    with ProcessPoolExecutor() as pool:
        results = pool.map(check_file, (str(f) for f in md_files))

    for filepath, findings in results:
        if findings:
            total_findings += len(findings)
            file_results.append((filepath, findings))

    print(f"Files scanned: {file_count}")
    print(f"Total forward-reference findings: {total_findings}")
    print()

    for filepath, findings in file_results:
        rel = os.path.relpath(filepath, DOC_ROOT)
        print(f"{rel}: {len(findings)} finding(s)")
        for use_line, def_line, term in findings:
            print(f"  L{use_line:>4d} -> L{def_line:<4d}  \"{term}\"")
        print()

    sys.exit(0)


if __name__ == '__main__':
    main()
