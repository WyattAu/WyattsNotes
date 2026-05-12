#!/usr/bin/env python3
"""
Fix missing or too-short frontmatter descriptions in docs/docs_university/.
Generates rigorous 120-160 char descriptions matching CONTENT_STANDARD.md tone.
Only modifies files where description is missing or < 120 chars.
"""

import os
import sys
import re

MIN_DESC_LEN = 120
UNIVERSITY_DIR = "docs/docs_university"

# Precise topic descriptions for known files.
# Keyed by the path relative to docs/docs_university/.
TOPIC_DETAILS = {
    # Computing
    "admissions-test-prep.md": (
        "admissions test preparation",
        "test formats (TMUA, STEP, MAT), question types, time management, "
        "and solution strategies"
    ),
    "algorithms-advanced.md": (
        "advanced algorithms",
        "network flow, linear programming, approximation algorithms, randomized algorithms, "
        "and amortized analysis"
    ),
    "algorithms-and-data-structures.md": (
        "algorithms and data structures",
        "asymptotic notation, sorting, search trees, hash tables, graph algorithms, "
        "and dynamic programming"
    ),
    "computer-networks-advanced.md": (
        "advanced computer networks",
        "congestion control, quality of service, software-defined networking, "
        "multicast routing, and network security protocols"
    ),
    "computer-networks.md": (
        "computer networks",
        "the OSI and TCP/IP models, physical layer encoding, data link protocols, "
        "routing algorithms, and transport layer reliability"
    ),
    "data-structures-advanced.md": (
        "advanced data structures",
        "Fibonacci heaps, van Emde Boas trees, disjoint-set union, segment trees, "
        "and persistent data structures"
    ),
    "databases-advanced.md": (
        "advanced database systems",
        "query optimization, transaction concurrency control, distributed databases, "
        "recovery protocols, and NoSQL architectures"
    ),
    "databases.md": (
        "database systems",
        "relational algebra, SQL, normalisation, indexing, transaction management, "
        "and ACID properties"
    ),
    "discrete-mathematics.md": (
        "discrete mathematics",
        "logic, set theory, combinatorics, graph theory, number theory, "
        "and generating functions"
    ),
    "machine-learning.md": (
        "machine learning",
        "supervised and unsupervised learning, bias-variance tradeoff, neural networks, "
        "SVMs, and ensemble methods"
    ),
    "operating-systems-advanced.md": (
        "advanced operating systems",
        "virtualisation, distributed file systems, kernel synchronisation, "
        "real-time scheduling, and microkernel design"
    ),
    "operating-systems.md": (
        "operating systems",
        "process scheduling, memory management, file systems, I/O subsystems, "
        "concurrency, and deadlock handling"
    ),
    "programming-paradigms.md": (
        "programming paradigms",
        "functional, logic, imperative, and object-oriented paradigms with type theory "
        "and formal semantics"
    ),
    "theory-of-computation.md": (
        "theory of computation",
        "finite automata, regular languages, context-free grammars, Turing machines, "
        "decidability, and complexity classes"
    ),

    # Mathematics
    "abstract-algebra.md": (
        "abstract algebra",
        "groups, rings, fields, homomorphisms, quotient structures, "
        "and the Sylow theorems"
    ),
    "complex-analysis.md": (
        "complex analysis",
        "analytic functions, Cauchy's theorem, contour integration, residues, "
        "conformal mappings, and series expansions"
    ),
    "differential-equations.md": (
        "differential equations",
        "first-order ODEs, linear systems, phase plane analysis, stability theory, "
        "Laplace transforms, and boundary value problems"
    ),
    "linear-algebra.md": (
        "linear algebra",
        "vector spaces, linear transformations, eigenvalues, inner product spaces, "
        "canonical forms, and the spectral theorem"
    ),
    "multivariable-calculus.md": (
        "multivariable calculus",
        "partial derivatives, multiple integrals, vector calculus, "
        "Green's and Stokes' theorems, and differential forms"
    ),
    "number-theory.md": (
        "number theory",
        "divisibility, congruences, quadratic reciprocity, arithmetic functions, "
        "Diophantine equations, and primality testing"
    ),
    "probability-and-statistics.md": (
        "probability and statistics",
        "axioms of probability, random variables, distributions, estimation, "
        "hypothesis testing, and Bayesian inference"
    ),
    "probability.md": (
        "probability theory",
        "measure-theoretic foundations, random variables, limit theorems, "
        "martingales, and stochastic processes"
    ),
    "real-analysis.md": (
        "real analysis",
        "sequences, continuity, differentiation, Riemann integration, "
        "series of functions, and metric space topology"
    ),
    "topology.md": (
        "topology",
        "topological spaces, continuity, compactness, connectedness, "
        "separation axioms, and the fundamental group"
    ),

    # Physics
    "classical-mechanics.md": (
        "classical mechanics",
        "Newtonian mechanics, Lagrangian and Hamiltonian formulations, "
        "central forces, rigid body dynamics, and coupled oscillations"
    ),
    "electromagnetism.md": (
        "electromagnetism",
        "electrostatics, magnetostatics, Maxwell's equations, electromagnetic waves, "
        "potentials, and radiation"
    ),
    "optics-and-wave-physics.md": (
        "optics and wave physics",
        "geometric optics, interference, diffraction, polarisation, "
        "Fourier optics, and coherence theory"
    ),
    "particle-physics-and-cosmology.md": (
        "particle physics and cosmology",
        "the Standard Model, Feynman diagrams, symmetry breaking, "
        "dark matter, cosmic inflation, and nucleosynthesis"
    ),
    "quantum-mechanics.md": (
        "quantum mechanics",
        "wave functions, the Schroedinger equation, operators, angular momentum, "
        "perturbation theory, and entanglement"
    ),
    "solid-state-physics.md": (
        "solid state physics",
        "crystal structure, reciprocal lattice, band theory, semiconductors, "
        "phonons, and superconductivity"
    ),
    "thermal-physics.md": (
        "thermal physics",
        "kinetic theory, heat capacity, phase transitions, "
        "Boltzmann distribution, and transport phenomena"
    ),
    "thermodynamics-and-statistical-mechanics.md": (
        "thermodynamics and statistical mechanics",
        "laws of thermodynamics, thermodynamic potentials, ensembles, "
        "partition functions, quantum statistics, and phase equilibrium"
    ),

    # Admissions
    "bmo-preparation.md": (
        "BMO preparation",
        "number theory, combinatorics, geometry, inequalities, "
        "proof techniques, and past-paper strategies for BMO Round 1 and 2"
    ),
    "imo-preparation.md": (
        "IMO preparation",
        "advanced olympiad topics in algebra, combinatorics, geometry, and number theory "
        "with full solution walkthroughs"
    ),
    "mat-preparation.md": (
        "MAT preparation",
        "Oxford MAT syllabus: algebra, calculus, geometry, graph sketching, "
        "and multiple-choice strategy with past-paper drills"
    ),
    "step-preparation.md": (
        "STEP preparation",
        "STEP II and III pure mathematics, mechanics, and probability "
        "with structured proof-writing and worked solutions"
    ),
    "tmua-preparation.md": (
        "TMUA preparation",
        "mathematical thinking, logical reasoning, and proof appraisal "
        "with timed practice for Papers 1 and 2"
    ),

    # Intro
    "intro.md": (
        "STEM",
        "core topics across mathematics, physics, and computing"
    ),
}


def parse_frontmatter_text(filepath):
    """Read file and return (pre_frontmatter, fm_lines, post_frontmatter)."""
    with open(filepath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()

    if not content.startswith("---\n"):
        return (None, content)

    end = content.find("\n---\n", 3)
    if end == -1:
        return (None, content)

    fm_block = content[4:end]  # skip leading "---\n"
    body = content[end + 5:]   # skip "\n---\n"
    return (fm_block, body)


def parse_description_line(fm_block):
    """
    Parse the description entry from frontmatter block.
    Returns (description_key_index_info, existing_description_value) or None.
    """
    lines = fm_block.split("\n")
    for i, line in enumerate(lines):
        if line.startswith("description:"):
            value = line[len("description:"):].strip().strip("\"'")
            if value:
                # Single-line description
                return (i, None, value)
            else:
                # Multi-line description (value on next indented line)
                if i + 1 < len(lines) and lines[i + 1].strip().startswith('"'):
                    val = lines[i + 1].strip().strip("\"'")
                    return (i, i + 1, val)
    return None


# Fixed part of description after the first sentence.
SUFFIX = ". Precise definitions, theorem proofs, worked examples, and common pitfalls"


def generate_description(filepath, title):
    """Generate a rigorous 120-160 char description."""
    filename = os.path.basename(filepath)
    rel = os.path.relpath(filepath, UNIVERSITY_DIR)

    if filename in TOPIC_DETAILS:
        subject, topics = TOPIC_DETAILS[filename]
        desc = f"Rigorous {subject} notes covering {topics}{SUFFIX}."
    elif "admissions/" in rel:
        desc = (
            f"Rigorous {title.lower()} notes covering syllabus content, question types, "
            f"exam technique, and worked solutions. Includes structured practice "
            f"with past papers{SUFFIX} for undergraduate admissions preparation."
        )
    else:
        desc = (
            f"Rigorous {title.lower()} notes covering fundamental concepts, key theorems, "
            f"and standard techniques{SUFFIX} for undergraduate-level study."
        )

    # Trim to 160 chars if needed, breaking at last space before limit
    if len(desc) > 160:
        s = SUFFIX.rstrip(".")
        truncated = desc[:160 - len(s) - 1]  # account for space + suffix + period
        last_space = truncated.rfind(" ")
        if last_space > 0:
            truncated = truncated[:last_space]
        desc = truncated + s + "."

    return desc


def find_title(fm_block):
    """Extract title from frontmatter block."""
    for line in fm_block.split("\n"):
        if line.startswith("title:"):
            return line[len("title:"):].strip().strip("\"'")
    return None


def add_or_replace_description(fm_block, new_desc):
    """
    Insert or replace the description field in frontmatter.
    Returns modified frontmatter block text.
    """
    lines = fm_block.split("\n")

    # Find description line (if any)
    desc_key_idx = None
    desc_val_idx = None
    for i, line in enumerate(lines):
        if line.startswith("description:"):
            desc_key_idx = i
            value = line[len("description:"):].strip().strip("\"'")
            if value:
                # Single-line, replace value
                desc_val_idx = None
            elif i + 1 < len(lines) and lines[i + 1].strip().startswith('"'):
                desc_val_idx = i + 1
            break

    indented_desc = '  ' + '"' + new_desc + '"'

    if desc_key_idx is not None:
        if desc_val_idx is not None:
            # Replace multi-line value
            lines[desc_val_idx] = indented_desc
        else:
            # Single-line: make it multi-line for consistency
            lines[desc_key_idx] = "description:"
            lines.insert(desc_key_idx + 1, indented_desc)
    else:
        # Insert description after title
        title_idx = None
        for i, line in enumerate(lines):
            if line.startswith("title:"):
                title_idx = i
                break
        if title_idx is not None:
            lines.insert(title_idx + 1, "description:")
            lines.insert(title_idx + 2, indented_desc)
        else:
            # Fallback: insert at top after the frontmatter opening
            lines.insert(0, "description:")
            lines.insert(1, indented_desc)

    return "\n".join(lines)


def main():
    if not os.path.isdir(UNIVERSITY_DIR):
        print(f"Error: {UNIVERSITY_DIR}/ not found")
        return 1

    files_processed = 0
    files_updated = 0
    skipped = []

    for root, _dirs, filenames in os.walk(UNIVERSITY_DIR):
        for fname in sorted(filenames):
            if not fname.endswith(".md"):
                continue

            filepath = os.path.join(root, fname)
            rel = os.path.relpath(filepath, "docs")

            with open(filepath, "r", encoding="utf-8", errors="replace") as f:
                content = f.read()

            if not content.startswith("---\n"):
                skipped.append((rel, "no frontmatter"))
                continue

            end = content.find("\n---\n", 3)
            if end == -1:
                skipped.append((rel, "malformed frontmatter"))
                continue

            fm_block = content[4:end]
            body = content[end + 5:]

            desc_info = parse_description_line(fm_block)
            title = find_title(fm_block)

            if title is None:
                skipped.append((rel, "no title in frontmatter"))
                continue

            files_processed += 1

            if desc_info is not None:
                _, _, desc = desc_info
                if len(desc) >= MIN_DESC_LEN:
                    skipped.append((rel, f"description OK ({len(desc)} chars)"))
                    continue

            # Generate new description
            new_desc = generate_description(filepath, title)

            # Update frontmatter
            new_fm_block = add_or_replace_description(fm_block, new_desc)
            new_content = "---\n" + new_fm_block + "\n---" + body

            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                files_updated += 1
                print(f"  UPDATED: {rel} ({len(new_desc)} chars)")
            else:
                skipped.append((rel, "no change needed"))

    print()
    print("=== Fix University Descriptions Report ===")
    print(f"Files processed: {files_processed}")
    print(f"Descriptions added/updated: {files_updated}")
    if skipped:
        print(f"Skipped: {len(skipped)}")
        for path, reason in skipped:
            print(f"  SKIP: {path} — {reason}")
    else:
        print("Skipped: 0")

    return 0


if __name__ == "__main__":
    sys.exit(main())
