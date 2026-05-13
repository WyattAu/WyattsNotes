#!/usr/bin/env python3
"""
Fix missing or too-short frontmatter descriptions in docs/docs_university/.
Uses exact pre-defined descriptions matching CONTENT_STANDARD.md tone.
Skips files that already have a description >= 120 chars (valid quality gate).
"""

import os
import sys
import re

MIN_DESC_LEN = 120
UNIVERSITY_DIR = "docs/docs_university"

DESCRIPTIONS = {
    "computing/admissions-test-prep.md": "Rigorous preparation notes for undergraduate STEM admissions tests covering mathematical reasoning, problem-solving strategies, and exam technique.",
    "computing/algorithms-advanced.md": "Advanced algorithms notes covering graph algorithms, dynamic programming, NP-completeness, approximation algorithms, and complexity theory with formal proofs.",
    "computing/computer-networks-advanced.md": "Advanced computer networks notes covering protocol design, congestion control, routing algorithms, software-defined networking, and network security principles.",
    "computing/databases-advanced.md": "Advanced database systems notes covering query optimization, transaction processing, concurrency control, distributed databases, and NoSQL architectures.",
    "computing/databases.md": "Database systems notes covering relational model, SQL, normalization, indexing, transaction management, and database design with practical examples.",
    "computing/discrete-mathematics.md": "Discrete mathematics notes covering set theory, combinatorics, graph theory, number theory, and formal logic with rigorous proofs for computer science.",
    "computing/machine-learning.md": "Machine learning notes covering supervised and unsupervised learning, neural networks, kernel methods, probabilistic models, and optimization theory.",
    "computing/operating-systems.md": "Operating systems notes covering process management, memory management, file systems, I/O subsystems, and concurrency with implementation details.",
    "computing/programming-paradigms.md": "Programming paradigms notes covering functional, logic, concurrent, and declarative paradigms with formal semantics and type theory foundations.",
    "computing/theory-of-computation.md": "Theory of computation notes covering automata theory, formal languages, computability, Turing machines, and computational complexity with rigorous proofs.",
    "mathematics/abstract-algebra.md": "Abstract algebra notes covering group theory, ring theory, field theory, and Galois theory with rigorous theorem-proof exposition for undergraduate study.",
    "mathematics/complex-analysis.md": "Complex analysis notes covering analytic functions, contour integration, residue calculus, conformal mapping, and series expansions with complete proofs.",
    "mathematics/differential-equations.md": "Differential equations notes covering ODEs, PDEs, dynamical systems, stability analysis, and numerical methods with rigorous derivations from first principles.",
    "mathematics/linear-algebra.md": "Linear algebra notes covering vector spaces, linear transformations, eigenvalues, inner product spaces, and matrix decompositions with complete theorem proofs.",
    "mathematics/multivariable-calculus.md": "Multivariable calculus notes covering partial derivatives, multiple integrals, vector calculus, differential forms, and Stokes' theorem with rigorous proofs.",
    "mathematics/number-theory.md": "Number theory notes covering prime numbers, congruences, quadratic reciprocity, Diophantine equations, and cryptographic applications with formal proofs.",
    "mathematics/probability-and-statistics.md": "Probability and statistics notes covering probability theory, statistical inference, hypothesis testing, regression analysis, and Bayesian methods with derivations.",
    "mathematics/probability.md": "Probability theory notes covering measure-theoretic foundations, random variables, limit theorems, stochastic processes, and martingales with formal proofs.",
    "mathematics/real-analysis.md": "Real analysis notes covering metric spaces, sequences, continuity, differentiation, Riemann integration, and measure theory with rigorous proof exposition.",
    "physics/classical-mechanics.md": "Classical mechanics notes covering Newtonian mechanics, Lagrangian and Hamiltonian formulations, rigid body dynamics, and variational principles with derivations.",
    "physics/electromagnetism.md": "Electromagnetism notes covering Maxwell's equations, electrostatics, magnetostatics, electromagnetic waves, and special relativity with rigorous derivations.",
    "physics/optics-and-wave-physics.md": "Optics and wave physics notes covering geometric optics, wave optics, interference, diffraction, polarization, and Fourier optics with mathematical derivations.",
    "physics/particle-physics-and-cosmology.md": "Particle physics and cosmology notes covering the Standard Model, quantum field theory basics, Big Bang cosmology, and dark matter with theoretical foundations.",
    "physics/quantum-mechanics.md": "Quantum mechanics notes covering wave functions, operators, measurement, angular momentum, perturbation theory, and entanglement with rigorous mathematical treatment.",
    "physics/solid-state-physics.md": "Solid state physics notes covering crystal structures, band theory, lattice dynamics, semiconductors, and magnetism with theoretical derivations.",
    "physics/thermal-physics.md": "Thermal physics notes covering kinetic theory, statistical mechanics, ensembles, partition functions, and quantum statistics with rigorous derivations.",
    "physics/thermodynamics-and-statistical-mechanics.md": "Thermodynamics and statistical mechanics notes covering laws of thermodynamics, entropy, free energy, phase transitions, and ensemble theory with formal proofs.",
    "intro.md": "Comprehensive university-level STEM notes covering mathematics, physics, and computing with rigorous definitions, theorem proofs, worked examples, and common pitfalls.",
}

AUTO_DESC_PATTERNS = [
    re.compile(r"^University-level notes on "),
    re.compile(r"^Rigorous .+ notes covering .+ Precise definitions"),
]


def parse_frontmatter(content):
    if not content.startswith("---\n"):
        return None, content
    end = content.find("\n---\n", 3)
    if end == -1:
        return None, content
    fm_block = content[4:end]
    body = content[end + 5:]
    return fm_block, body


def extract_description(fm_block):
    lines = fm_block.split("\n")
    for i, line in enumerate(lines):
        if line.startswith("description:"):
            value = line[len("description:"):].strip().strip("\"'")
            if value:
                return i, i, value
            if i + 1 < len(lines):
                next_val = lines[i + 1].strip().strip("\"'")
                if next_val:
                    return i, i + 1, next_val
            return i, i, ""
    return None, None, ""


def find_insert_index(lines):
    for i, line in enumerate(lines):
        if line.startswith("title:"):
            best = i + 1
            for j in range(i + 1, min(i + 4, len(lines))):
                if lines[j].startswith("sidebar_position:") or lines[j].startswith("date:"):
                    best = j + 1
                elif lines[j].startswith("description:"):
                    return j
                elif not lines[j].startswith(" ") and ":" in lines[j]:
                    break
            return best
    return 1


def set_description(fm_block, new_desc):
    lines = fm_block.split("\n")
    key_idx, val_idx, existing = extract_description(fm_block)

    indented = '  "' + new_desc + '"'

    if key_idx is not None:
        if val_idx is not None and val_idx != key_idx:
            lines[val_idx] = indented
        else:
            lines[key_idx] = "description:"
            lines.insert(key_idx + 1, indented)
    else:
        idx = find_insert_index(lines)
        lines.insert(idx, "description:")
        lines.insert(idx + 1, indented)

    return "\n".join(lines)


def is_auto_generated(desc):
    return any(p.match(desc) for p in AUTO_DESC_PATTERNS)


def main():
    if not os.path.isdir(UNIVERSITY_DIR):
        print(f"Error: {UNIVERSITY_DIR}/ not found")
        return 1

    files_processed = 0
    files_updated = 0
    skipped = []
    not_in_map = []

    for root, _dirs, filenames in os.walk(UNIVERSITY_DIR):
        for fname in sorted(filenames):
            if not fname.endswith(".md"):
                continue

            filepath = os.path.join(root, fname)
            rel = os.path.relpath(filepath, UNIVERSITY_DIR)

            with open(filepath, "r", encoding="utf-8", errors="replace") as f:
                content = f.read()

            fm_block, body = parse_frontmatter(content)
            if fm_block is None:
                skipped.append((rel, "no frontmatter"))
                continue

            _, _, existing_desc = extract_description(fm_block)
            files_processed += 1

            if rel not in DESCRIPTIONS:
                not_in_map.append(rel)
                if len(existing_desc) >= MIN_DESC_LEN and not is_auto_generated(existing_desc):
                    skipped.append((rel, f"description OK ({len(existing_desc)} chars)"))
                else:
                    skipped.append((rel, f"not in description map (has {len(existing_desc)} char auto-desc)"))
                continue

            new_desc = DESCRIPTIONS[rel]

            if len(existing_desc) >= MIN_DESC_LEN and existing_desc == new_desc:
                skipped.append((rel, f"already has exact target description ({len(existing_desc)} chars)"))
                continue

            if len(existing_desc) >= MIN_DESC_LEN and not is_auto_generated(existing_desc):
                skipped.append((rel, f"has valid non-auto description ({len(existing_desc)} chars)"))
                continue

            new_fm = set_description(fm_block, new_desc)
            new_content = "---\n" + new_fm + "\n---" + body

            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            files_updated += 1
            old_len = len(existing_desc)
            print(f"  UPDATED: {rel} ({old_len} -> {len(new_desc)} chars)")

    print()
    print("=== Fix University Descriptions Report ===")
    print(f"Files processed: {files_processed}")
    print(f"Descriptions added/updated: {files_updated}")
    print(f"Skipped: {len(skipped)}")
    for path, reason in skipped:
        print(f"  SKIP: {path} -- {reason}")
    if not_in_map:
        print(f"\nFiles not in description map ({len(not_in_map)}):")
        for path in not_in_map:
            print(f"  {path}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
