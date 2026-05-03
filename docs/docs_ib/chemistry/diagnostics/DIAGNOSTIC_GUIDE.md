---
title: "IB Chemistry -- Diagnostic Guide"
description: "Comprehensive guide to IB Chemistry diagnostic tests with coverage map, grading rubric, prerequisite chains, and timing recommendations."
slug: diag-guide-chemistry
hide_table_of_contents: true
---

# IB Chemistry — Diagnostic Guide

## Coverage Map

| Diagnostic File | Topics Covered | Source Files |
|---|---|---|
| `diag-atomic-structure.md` | Electron configuration, quantum numbers, isotopes, ionisation energy | `atomic-structure-and-periodicity.md`, `atomic-theory.md` |
| `diag-periodicity.md` | Periodic trends, electronegativity, atomic/ionic radii, ionisation energy anomalies | `periodicity.md`, `atomic-structure-and-periodicity.md` |
| `diag-chemical-bonding.md` | VSEPR, hybridisation, intermolecular forces, bond polarity, solubility | `chemical-bonding-advanced.md`, `states-of-matter.md` |
| `diag-states-of-matter.md` | Gas laws, ideal gas deviations, Maxwell-Boltzmann, phase diagrams | `states-of-matter.md` |
| `diag-acids-bases.md` | pH calculations, buffers, Ka/Kb, polyprotic acids, titration curves | `acids-bases-advanced.md` |
| `diag-redox.md` | Oxidation numbers, balancing equations, electrochemical cells, Nernst equation | `redox-advanced.md` |
| `diag-organic-chemistry.md` | SN1/SN2, E1/E2, functional groups, mechanisms, stereochemistry | `organic-chemistry-advanced.md` |
| `diag-measurement.md` | Uncertainty propagation, significant figures, graphical analysis, statistics | `measurement-and-data-processing.md` |

## Grading Rubric

### PASS Criteria
- Correctly solve at least 2 out of 3 Unit Tests with complete working
- Correctly solve at least 2 out of 3 Integration Tests with complete working
- Demonstrate proper use of significant figures throughout
- Show clear, logical reasoning (not just the final answer)

### PARTIAL Criteria
- Correctly solve 1--2 Unit Tests and 1 Integration Test
- Shows understanding of the method but makes arithmetic or algebraic errors
- Partially correct reasoning with some gaps in conceptual understanding
- Inconsistent use of significant figures

### FAIL Indicators
- Unable to solve any Unit Test completely
- Fundamental misconceptions evident (e.g., wrong hybridisation, incorrect oxidation states)
- Unable to start Integration Tests (cannot connect concepts across topics)
- Systematic errors in unit conversions or algebra

## Prerequisite Chains

```
Atomic Theory
  └── Atomic Structure and Periodicity
        ├── Periodicity
        ├── Chemical Bonding
        │     ├── States of Matter
        │     └── Organic Chemistry
        └── Redox Reactions
              └── Organic Chemistry

Stoichiometry (foundational -- not a separate diagnostic)
  ├── States of Matter
  ├── Acids and Bases
  ├── Redox Reactions
  └── Measurement and Data Processing
```

**Recommended order of diagnostic completion:**
1. `diag-atomic-structure` -- foundational concepts
2. `diag-periodicity` -- builds on atomic structure
3. `diag-chemical-bonding` -- requires periodicity understanding
4. `diag-states-of-matter` -- requires bonding understanding
5. `diag-acids-bases` -- requires stoichiometry and equilibrium
6. `diag-redox` -- requires oxidation number knowledge
7. `diag-organic-chemistry` -- requires bonding, mechanisms, and redox
8. `diag-measurement` -- applicable throughout; recommended last to assess lab skills

## Timing Recommendations

| Diagnostic | Recommended Time | Notes |
|---|---|---|
| `diag-atomic-structure` | 30 minutes | Focus on electron configuration and quantum numbers |
| `diag-periodicity` | 25 minutes | Trend explanations require careful reasoning |
| `diag-chemical-bonding` | 35 minutes | VSEPR and force hierarchies take time |
| `diag-states-of-matter` | 30 minutes | Unit conversions are a common time sink |
| `diag-acids-bases` | 40 minutes | Buffer calculations are multi-step |
| `diag-redox` | 35 minutes | Balancing equations is time-consuming |
| `diag-organic-chemistry` | 40 minutes | Mechanism drawing requires practice |
| `diag-measurement` | 35 minutes | Uncertainty propagation has many steps |

**Total recommended time:** approximately 4.5 hours (spread across multiple sessions).

**Full battery timing:** Complete all 8 diagnostics over 3--4 sessions of 60--90 minutes each.

## How to Use These Diagnostics

1. Complete each diagnostic without referring to notes.
2. Check solutions immediately after each question to identify gaps.
3. If you score FAIL on a diagnostic, review the corresponding source file before retrying.
4. If you score PARTIAL, focus on the specific misconceptions identified by the questions you missed.
5. Integration Tests are the best indicator of exam readiness -- they test whether you can connect concepts.
