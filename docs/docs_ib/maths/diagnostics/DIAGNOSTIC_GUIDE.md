---
title: Diagnostic Test Guide
description: Guide for using the IB Mathematics diagnostic test system to identify weaknesses and track progress.
slug: diagnostic-guide
hide_table_of_contents: true
---

# IB Mathematics: Diagnostic Test Guide

## 1. Purpose

This document defines the diagnostic testing framework for IB Mathematics. The
diagnostic tests are the hardest questions within the specification, designed to
determine whether a student has genuine understanding of a topic rather than
surface-level familiarity. They are not practice quizzes for beginners.

The diagnostic system is partitioned into two categories:

- **Unit tests:** Targeted questions that probe edge cases, boundary conditions,
  and subtle misconceptions within a single topic. Each unit test isolates one
  concept and applies maximum pressure to it.
- **Integration tests:** Multi-topic synthesis problems that require combining
  concepts from multiple units without explicit guidance on which techniques to
  apply. These mirror the hardest questions found on actual examination papers.

These tests are static. They are not interactive. Each question is presented in
full, followed by a complete worked solution below. The student is responsible
for self-marking against the grading rubric defined in Section 3.

---

## 2. How to Use This Guide

Follow these steps in order. Do not skip steps.

1. **Attempt each question under exam conditions.** No notes, no textbook, no
   calculator unless the question explicitly permits one. Time yourself.
2. **Check your answer against the worked solution.** Do not rationalise
   partial credit that the rubric does not award. Be strict.
3. **Mark yourself using the grading rubric.** Apply the definitions in
   Section 3 without exception. Record the result.
4. **Record results in your test matrix.** Use the template in Section 4.
   Update it after every diagnostic session.
5. **Use the test matrix to identify weak areas for revision.** The
   interpretation guide in Section 9 explains how to prioritise.

---

## 3. Grading Rubric

All diagnostic questions are graded on a three-tier system. There is no
numerical score. The tiers are mutually exclusive and collectively exhaustive.

| Grade | Definition |
|-------|-----------|
| **PASS** | Correct method, correct answer, no errors in working. The solution demonstrates full procedural fluency and conceptual understanding. |
| **PARTIAL** | Correct method initiated but an error in execution (arithmetic, algebraic, or notational); OR correct final answer arrived at through insufficient, incomplete, or non-rigorous working. |
| **FAIL** | Incorrect method, no meaningful attempt, or fundamentally wrong approach. This includes cases where the student could not identify which technique to apply. |

### Grading discipline

- A single arithmetic error in an otherwise correct solution is PARTIAL, not PASS.
- A correct answer obtained by trial-and-error without demonstrating the intended method is PARTIAL.
- Writing "I don't know" or leaving the question blank is FAIL.
- Arriving at the correct answer but omitting critical intermediate steps (e.g., skipping the chain rule step in a differentiation) is PARTIAL.

---

## 4. Building Your Test Matrix

### 4.1 What is the test matrix?

The test matrix is a structured record of your diagnostic results. It provides a
single-source-of-truth view of your strengths and weaknesses across all 14 IB
Mathematics topics.

### 4.2 Matrix schema

Each row represents one topic. Each row contains:

| Column | Description |
|--------|-------------|
| Topic | The name of the topic |
| Unit Test Score | PASS, PARTIAL, or FAIL |
| Integration Test Score | PASS, PARTIAL, or FAIL |
| Notes | Free-text observations (e.g., "forgot +C on definite integral", "confused scalar with vector") |
| Date | Date the diagnostic was last attempted |

### 4.3 Example matrix

| Topic | Unit Test | Integration Test | Notes | Date |
|-------|-----------|-----------------|-------|------|
| Number and Algebra | PASS | PASS | | |
| Complex Numbers | PASS | PARTIAL | Polar form quadrant error on Q2 | |
| Proof and Logic | PARTIAL | FAIL | Contradiction proof structure weak | |
| Functions and Equations | FAIL | FAIL | Domain/range confusion; need full review | |
| Sequences and Series | PASS | PARTIAL | Sigma notation error on Q1 | |
| Trigonometry | PASS | PASS | | |
| Vectors | FAIL | FAIL | | |
| Matrices | PARTIAL | FAIL | Eigenvalue computation with complex roots | |
| Statistics | PASS | PARTIAL | PMCC coded data error | |
| Probability | PASS | PASS | | |
| Probability Distributions | PARTIAL | PARTIAL | Poisson approximation conditions | |
| Differentiation | PASS | PASS | | |
| Integration | PARTIAL | FAIL | Integration by parts selection wrong | |
| Differential Equations | FAIL | FAIL | | |

### 4.4 Matrix interpretation

| Unit Test | Integration Test | Diagnosis | Action |
|-----------|-----------------|-----------|--------|
| PASS | PASS | Full mastery | No action required. Revisit periodically. |
| PASS | FAIL | Conceptual isolation | Topic understood in isolation but student cannot combine it with other material. Practice synthesis problems. |
| FAIL | PASS | Intuition-based solving | Unlikely but possible. The student has strong pattern-matching intuition but lacks procedural rigour. Review fundamentals to close the gap. |
| PARTIAL | PARTIAL | Partial understanding | Review notes, re-attempt, then re-test. |
| FAIL | FAIL | Fundamental gap | Return to reference notes. Re-learn the topic from first principles. Do not attempt integration tests until unit test achieves at least PARTIAL. |

---

## 5. Unit Tests

### Definition

A unit test probes a single topic in isolation. It targets the hardest questions
within that topic's specification boundary.

### Design principles

- Each question tests exactly one topic. No cross-topic dependencies.
- Questions focus on edge cases, boundary conditions, and common misconceptions.
- The difficulty level corresponds to the top band of exam mark schemes (7/7 on IB Paper 2 questions).

### What unit tests reveal

- Whether the student has automated the correct procedure for the topic.
- Whether the student recognises when a standard technique applies in a
  non-obvious form.
- Whether the student has internalised common pitfalls and avoids them.

---

## 6. Integration Tests

### Definition

An integration test combines concepts from multiple topics into a single problem.
The student is not told which techniques to use. Identifying the correct approach
is part of the test.

### Design principles

- Each question draws on two or more topics from the specification.
- The question does not label which techniques are required.
- The difficulty level corresponds to the hardest questions on actual IB papers.

### What integration tests reveal

- Whether the student can identify relevant techniques from an unconstrained
  problem statement.
- Whether the student understands the relationships between topics deeply
  enough to combine them.
- Whether the student can manage the complexity of a multi-step solution without
  external scaffolding.

---

## 7. Coverage Map

| # | Topic | Diagnostic File | Key Syllabus Points |
|---|-------|----------------|---------------------|
| 1 | Number and Algebra | `diag-number-algebra.md` | Sigma notation, binomial theorem, proof by induction, permutations and combinations |
| 2 | Complex Numbers | `diag-complex-numbers.md` | De Moivre's theorem, polar form, roots of polynomials, Euler's formula |
| 3 | Proof and Logic | `diag-proof-logic.md` | Direct proof, contradiction, contrapositive, quantifiers, necessary and sufficient conditions |
| 4 | Functions and Equations | `diag-functions-equations.md` | Domain and range, composite functions, inverse functions, transformations |
| 5 | Sequences and Series | `diag-sequences-series.md` | Arithmetic and geometric sequences, sigma notation, convergence, binomial series |
| 6 | Trigonometry | `diag-trigonometry.md` | Identities, equations, harmonic form, double angle formulae |
| 7 | Vectors | `diag-vectors.md` | 3D vectors, scalar and vector products, lines and planes, skew lines |
| 8 | Matrices | `diag-matrices.md` | Matrix operations, inverse, eigenvalues and eigenvectors, diagonalisation |
| 9 | Statistics | `diag-statistics.md` | Grouped data, box plots, PMCC, regression, outlier detection |
| 10 | Probability | `diag-probability.md` | Conditional probability, independence, Bayes' theorem, combinatorics |
| 11 | Probability Distributions | `diag-probability-distributions.md` | Binomial, normal, Poisson distributions, approximations |
| 12 | Differentiation | `diag-differentiation.md` | Chain/product/quotient rules, implicit differentiation, L'Hopital, optimisation |
| 13 | Integration | `diag-integration.md` | By parts, by substitution, partial fractions, improper integrals, area and volume |
| 14 | Differential Equations | `diag-differential-equations.md` | Separable, integrating factor, second order, Euler's method, applications |

---

## 8. Timing Recommendations

The following time allocations are guidelines. Adjust based on personal pace,
but do not reduce them. If a question takes significantly longer than the upper
bound, that is itself diagnostic information.

| Task | Time Allocation |
|------|----------------|
| Single unit test question | 5 -- 10 minutes |
| Single integration test question | 15 -- 25 minutes |
| Full topic set (unit + integration) | 30 -- 45 minutes |
| Full diagnostic (all 14 topics) | 7 -- 10.5 hours (split across multiple sessions) |

### Session planning

- Do not attempt more than 4 topics per session. Cognitive fatigue will
  degrade the validity of self-marking.
- Schedule a break of at least 10 minutes between topics.
- Record the date and time of each session in the test matrix for longitudinal
  tracking.

---

## 9. Self-Assessment Framework

### 9.1 Identifying weak areas

After completing a diagnostic session, scan the test matrix for any row that
contains a FAIL or PARTIAL. These are your priority targets.

### 9.2 Prioritisation by prerequisite chain

Not all topics are independent. Fixing upstream dependencies before downstream
topics is more efficient than patching symptoms. The following dependency chains
apply:

```
Number and Algebra -> Complex Numbers
Number and Algebra -> Sequences and Series
Proof and Logic -> Number and Algebra (induction)
Functions and Equations -> Complex Numbers
Functions and Equations -> Sequences and Series
Trigonometry -> Complex Numbers
Trigonometry -> Differentiation (trig derivatives)
Differentiation -> Integration
Integration -> Differential Equations
Sequences and Series -> Probability Distributions
Probability -> Probability Distributions -> Statistics
Vectors -> Matrices
```

**Rule:** If a prerequisite topic has a FAIL score, do not attempt the dependent
topic's integration test until the prerequisite achieves at least PARTIAL.

### 9.3 Revision cycle

1. Identify FAIL/PARTIAL topics from the test matrix.
2. Sort by prerequisite chain. Address upstream failures first.
3. For each weak topic: review the reference notes, re-attempt the diagnostic
   question under exam conditions.
4. Re-mark. Update the test matrix with the new score and date.
5. If the score improves from FAIL to PARTIAL or from PARTIAL to PASS, proceed
   to the next topic.
6. If the score does not improve, review the worked solution step-by-step and
   identify the specific point of failure. Re-learn that sub-topic.

### 9.4 Longitudinal tracking

The Date column in the test matrix enables progress tracking over time. Re-run
diagnostics at regular intervals (recommended: every 2 weeks for topics with
FAIL scores, every 4 weeks for topics with PASS scores). A PASS that degrades
to PARTIAL indicates that the material has not been consolidated into long-term
memory and requires spaced repetition.

---

## 10. File Organisation

### 10.1 Directory structure

```
docs/docs_ib/maths/
  diagnostics/
    DIAGNOSTIC_GUIDE.md                        This document
    diag-number-algebra.md                     Per-topic diagnostic files
    diag-complex-numbers.md
    diag-proof-logic.md
    diag-functions-equations.md
    diag-sequences-series.md
    diag-trigonometry.md
    diag-vectors.md
    diag-matrices.md
    diag-statistics.md
    diag-probability.md
    diag-probability-distributions.md
    diag-differentiation.md
    diag-integration.md
    diag-differential-equations.md
    papers/                                    Combined exam papers
```

### 10.2 Diagnostic file format

Each `diag-<topic-slug>.md` file follows this structure:

```
# Topic Name — Diagnostic Tests

## Unit Tests

### UT-1: [Descriptive title]
[Question text]

[Difficulty annotation]

**Solution:**
[Full worked solution]

## Integration Tests

### IT-1: [Descriptive title]
[Question text -- multi-topic, no technique hints]

**Solution:**
[Full worked solution]
```

### 10.3 Combined papers

The `papers/` directory contains assembled exam papers that draw questions from
multiple topics, simulating actual examination conditions. These are optional
and should only be attempted after achieving PASS on the majority of individual
unit tests.

---

## Appendix: Test Matrix Template

Copy this template into a personal notes file. Populate it as you complete each
diagnostic. Use one row per topic with columns: Unit Test, Integration Test,
Notes, Date. All 14 topics are listed in the Coverage Map (Section 7).
