---
title: DSE Mathematics Diagnostic Guide
description: "Comprehensive guide for DSE Mathematics diagnostic testing: purpose, grading rubric, prerequisite chains, coverage map, and self-assessment framework."
slug: diagnostic-guide
hide_table_of_contents: true
---

# DSE Mathematics Diagnostic Guide

## Purpose

Diagnostic tests identify specific gaps in your mathematical understanding before they compound into larger problems. Unlike practice papers that measure overall performance, diagnostics isolate individual concepts and test them at their boundaries -- exactly where misconceptions live.

Each diagnostic file targets one DSE Mathematics topic with carefully designed questions that expose:

- **Conceptual errors** -- misunderstanding definitions or properties
- **Procedural errors** -- applying correct methods with wrong steps
- **Notational errors** -- confusing similar-looking expressions
- **Boundary errors** -- failing to check domain restrictions or edge cases

## How to Use

### Step 1: Establish Your Baseline

Before studying a topic, attempt its Unit Tests (UT-1 through UT-5) under timed conditions. Do not look at solutions until you have written a complete answer for every question.

### Step 2: Grade Each Response

Use the rubric below to classify each answer as PASS, PARTIAL, or FAIL.

### Step 3: Analyse Failures

For every PARTIAL or FAIL, read the worked solution and identify which of these caused the error:

- Did not know the underlying concept
- Knew the concept but applied it incorrectly
- Made an arithmetic or algebraic slip
- Missed a domain restriction or edge case
- Ran out of time

### Step 4: Build a Remediation Plan

Map each failure back to the corresponding notes file in the compulsory section. Re-study that section, then re-attempt the diagnostic question from scratch (without looking at your previous attempt).

### Step 5: Attempt Integration Tests

Once all Unit Tests for a topic score PASS, attempt the Integration Tests (IT-1 through IT-3). These combine multiple topics and test whether you can synthesise knowledge under exam conditions.

### Step 6: Cross-Topic Review

If you fail an Integration Test, identify which prerequisite topic caused the failure and revisit that topic's diagnostic before retrying.

## Grading Rubric

| Grade | Criteria |
|---|---|
| **PASS** | Correct answer with valid reasoning. Minor arithmetic slips that do not affect the method are acceptable. |
| **PARTIAL** | Correct method but wrong final answer (arithmetic error, incomplete solution, or missed a case). |
| **FAIL** | Wrong method, fundamental misconception, blank response, or answer derived from guessing. |

A topic is considered **mastered** when all 5 Unit Tests and at least 2 of 3 Integration Tests score PASS.

## Unit Tests and Integration Tests

### Unit Tests (UT)

Unit tests probe a single concept in isolation. Each question targets a specific misconception listed in the topic's prerequisite notes. The goal is fast, precise diagnosis: which exact concept is weak?

- 5 questions per topic
- Each question targets one misconception
- Solutions include the common wrong answer and why it is wrong

### Integration Tests (IT)

Integration tests combine two or more topics. They simulate the multi-step reasoning required in DSE Paper 2 (long questions). Failing an integration test often reveals a weakness in a prerequisite topic, not the topic being tested.

- 3 questions per topic
- Each question combines the topic with one other DSE topic
- The paired topic is named in the question title

## Coverage Map

All 12 DSE Mathematics (Compulsory Part) topics:

| Topic | File | Prerequisites |
|---|---|---|
| Functions | `diag-functions.md` | -- |
| Quadratics | `diag-quadratics.md` | Functions |
| Polynomials | `diag-polynomials.md` | Quadratics |
| Inequalities | `diag-inequalities.md` | Quadratics |
| Sequences and Series | `diag-sequences-series.md` | -- |
| Logarithms | `diag-logarithms.md` | Functions, Functions Advanced |
| Coordinate Geometry | `diag-coordinate-geometry.md` | -- |
| Trigonometry | `diag-trigonometry.md` | Coordinate Geometry |
| Geometries | `diag-geometries.md` | Trigonometry, Coordinate Geometry |
| Probability | `diag-probability.md` | -- |
| Dispersion | `diag-dispersion.md` | Probability |
| Combinatorics | `diag-combinatorics.md` | Sequences and Series |

## Timing Recommendations

| Test Type | Time per Question | Total Time (5 questions) |
|---|---|---|
| Unit Test | 5--8 minutes | 25--40 minutes |
| Integration Test | 10--15 minutes | 30--45 minutes |

Integration Tests take longer because they require multi-step reasoning across topics. If a Unit Test question takes more than 10 minutes, stop and review the relevant notes -- this indicates a gap rather than a difficulty problem.

## Self-Assessment Framework

### DSE Prerequisite Chains

The 12 DSE topics form dependency chains. Master topics in order within each chain before attempting integration tests that cross chains.

**Chain 1: Algebra -- Functions**

```
Functions -> Functions Advanced -> Logarithms
```

Functions form the foundation for inverse functions, domain/range reasoning, and logarithmic transformations. Master Functions (UT) before moving to Logarithms.

**Chain 2: Algebra -- Equations**

```
Quadratics -> Polynomials -> Inequalities
```

Quadratic techniques (factorisation, discriminant, completing the square) are prerequisites for polynomial operations and inequality solving. Polynomials extend quadratic methods to higher degrees.

**Chain 3: Discrete Mathematics**

```
Sequences and Series -> Combinatorics (binomial theorem)
```

Sigma notation and series convergence from Sequences are needed for the binomial theorem expansion and coefficient extraction in Combinatorics.

**Chain 4: Spatial Mathematics**

```
Coordinate Geometry -> Trigonometry -> Geometries
```

Coordinate geometry provides the algebraic framework for trigonometric proofs and vector geometry. Trigonometry extends to 3D problems in Geometries.

**Chain 5: Statistics**

```
Probability -> Dispersion
```

Probability concepts (independence, conditional probability) underpin the probability distributions studied in Dispersion.

### Recommended Diagnostic Order

1. **Week 1:** Functions (UT), Quadratics (UT)
2. **Week 2:** Polynomials (UT), Inequalities (UT), Logarithms (UT)
3. **Week 3:** Sequences and Series (UT), Combinatorics (UT)
4. **Week 4:** Coordinate Geometry (UT), Trigonometry (UT), Geometries (UT)
5. **Week 5:** Probability (UT), Dispersion (UT)
6. **Week 6--8:** All Integration Tests, cross-topic review

## Building Your Test Matrix

Track your progress using a matrix. For each question, record PASS / PARTIAL / FAIL and the date attempted.

```
Topic          | UT-1 | UT-2 | UT-3 | UT-4 | UT-5 | IT-1 | IT-2 | IT-3 | Status
---------------|------|------|------|------|------|------|------|------|--------
Functions      |      |      |      |      |      |      |      |      |
Quadratics     |      |      |      |      |      |      |      |      |
Polynomials    |      |      |      |      |      |      |      |      |
Inequalities   |      |      |      |      |      |      |      |      |
Sequences      |      |      |      |      |      |      |      |      |
Logarithms     |      |      |      |      |      |      |      |      |
Coord. Geom.   |      |      |      |      |      |      |      |      |
Trigonometry   |      |      |      |      |      |      |      |      |
Geometries     |      |      |      |      |      |      |      |      |
Probability    |      |      |      |      |      |      |      |      |
Dispersion     |      |      |      |      |      |      |      |      |
Combinatorics  |      |      |      |      |      |      |      |      |
```

A topic is **ready for DSE practice papers** when its row shows PASS in at least 4/5 Unit Tests and 2/3 Integration Tests.

## File Organization

All diagnostic files live under:

```
docs/docs_dse/Maths/diagnostics/
  DIAGNOSTIC_GUIDE.md          (this file)
  diag-functions.md
  diag-quadratics.md
  diag-polynomials.md
  diag-inequalities.md
  diag-sequences-series.md
  diag-logarithms.md
  diag-coordinate-geometry.md
  diag-trigonometry.md
  diag-geometries.md
  diag-probability.md
  diag-dispersion.md
  diag-combinatorics.md
```

Each file follows the same structure:

1. **Frontmatter** -- title, description, slug
2. **Unit Tests** (UT-1 to UT-5) -- single-concept questions targeting misconceptions
3. **Integration Tests** (IT-1 to IT-3) -- multi-topic synthesis questions

The corresponding theory notes are in:

```
docs/docs_dse/Maths/compulsory/
  functions.md
  functions-advanced.md
  quadratics.md
  polynomials.md
  inequalities.md
  sequences-and-series.md
  logarithmics.md
  coordinate-geometry.md
  trigonometry.md
  geometries.md
  probability.md
  dispersion.md
  permutations-and-combinations.md
  combinatorics.md
```
