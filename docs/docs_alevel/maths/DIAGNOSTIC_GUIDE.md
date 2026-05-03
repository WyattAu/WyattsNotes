# A-Level Mathematics: Diagnostic Test Guide

## 1. Purpose

This document defines the diagnostic testing framework for A-Level Mathematics. The
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
single-source-of-truth view of your strengths and weaknesses across all 24 A-Level
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

### 4.3 Example matrix: Pure Mathematics

| Topic | Unit Test | Integration Test | Notes | Date |
|-------|-----------|-----------------|-------|------|
| Algebraic Expressions | PASS | PASS | | |
| Quadratics | PASS | PARTIAL | Missed the case where discriminant = 0 | |
| Equations and Inequalities | PARTIAL | FAIL | Struggled with quadratic inequalities | |
| Coordinates and Geometry | PASS | PASS | | |
| Functions | FAIL | FAIL | Domain/range confusion; need full review | |
| Sequences and Series | PASS | PARTIAL | Sigma notation error on Q3 | |
| Binomial Expansion | PARTIAL | FAIL | Could not generalise to (a+bx)^n form | |
| Trigonometry | PASS | PASS | | |
| Exponentials and Logarithms | PASS | PARTIAL | Lost a sign on the ln transformation | |
| Differentiation | PASS | PASS | | |
| Integration | PARTIAL | FAIL | Integration by parts selection wrong | |
| Vectors | FAIL | FAIL | | |
| Proof | PASS | PARTIAL | Contradiction proof structure weak | |
| Numerical Methods | PASS | PASS | | |

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
- The difficulty level corresponds to the top band of exam mark schemes (A/A*).

### Example

> **Topic:** Differentiation -- Chain Rule
>
> **Question:** Find dy/dx when y = sin^2(x).
>
> **Diagnostic intent:** Tests whether the student recognises that the chain rule
> must be applied to the outer function (square) and the inner function (sine),
> rather than applying the chain rule once or not at all. A common error is to
> write dy/dx = 2sin(x), omitting the cos(x) factor from the inner derivative.

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
- The difficulty level corresponds to the hardest questions on actual papers.

### Example

> **Topics:** Integration, Vectors, Kinematics
>
> **Question:** A particle moves with velocity v = t^2 i + 2t j. Find the
> distance travelled between t = 0 and t = 3.
>
> **Diagnostic intent:** The student must recognise that distance travelled
> requires integration of the magnitude of the velocity vector (not the velocity
> components separately). This tests: integration of polynomials, vector
> magnitude calculation, and kinematic understanding of displacement vs distance.

### What integration tests reveal

- Whether the student can identify relevant techniques from an unconstrained
  problem statement.
- Whether the student understands the relationships between topics deeply
  enough to combine them.
- Whether the student can manage the complexity of a multi-step solution without
  external scaffolding.

---

## 7. Coverage Map

### 7.1 Pure Mathematics (14 topics)

| # | Topic | Diagnostic File | Reference File | Key Syllabus Points |
|---|-------|----------------|----------------|---------------------|
| 1 | Algebraic Expressions | `diagnostics/diag-algebraic-expressions.md` | `pure-mathematics/01-algebraic-expressions.md` | Surds, indices, algebraic manipulation, factorisation |
| 2 | Quadratics | `diagnostics/diag-quadratics.md` | `pure-mathematics/02-quadratics.md` | Roots, discriminant, completing the square, graphs |
| 3 | Equations and Inequalities | `diagnostics/diag-equations-and-inequalities.md` | `pure-mathematics/03-equations-and-inequalities.md` | Simultaneous equations, quadratic inequalities |
| 4 | Coordinates and Geometry | `diagnostics/diag-coordinates-and-geometry.md` | `pure-mathematics/04-coordinates-and-geometry.md` | Straight lines, circles, equation of a circle |
| 5 | Functions | `diagnostics/diag-functions.md` | `pure-mathematics/05-functions.md` | Domain, range, composite functions, inverse functions |
| 6 | Sequences and Series | `diagnostics/diag-sequences-and-series.md` | `pure-mathematics/06-sequences-and-series.md` | Arithmetic, geometric, sigma notation, recurrence |
| 7 | Binomial Expansion | `diagnostics/diag-binomial-expansion.md` | `pure-mathematics/07-binomial-expansion.md` | (1+x)^n, (a+bx)^n, general term, validity |
| 8 | Trigonometry | `diagnostics/diag-trigonometry.md` | `pure-mathematics/08-trigonometry.md` | Identities, equations, R-form, double angle |
| 9 | Exponentials and Logarithms | `diagnostics/diag-exponentials-and-logarithms.md` | `pure-mathematics/09-exponentials-and-logarithms.md` | e^x, ln(x), laws of logs, modelling |
| 10 | Differentiation | `diagnostics/diag-differentiation.md` | `pure-mathematics/10-differentiation.md` | First principles, chain/product/quotient rules, stationary points |
| 11 | Integration | `diagnostics/diag-integration.md` | `pure-mathematics/11-integration.md` | Indefinite, definite, by parts, by substitution, area |
| 12 | Vectors | `diagnostics/diag-vectors.md` | `pure-mathematics/12-vectors.md` | 2D and 3D vectors, scalar product, position vectors |
| 13 | Proof | `diagnostics/diag-proof.md` | `pure-mathematics/13-proof.md` | Direct proof, contradiction, disproof by counterexample |
| 14 | Numerical Methods | `diagnostics/diag-numerical-methods.md` | `pure-mathematics/14-numerical-methods.md` | Location of roots, iteration, Newton-Raphson, trapezium rule |

### 7.2 Statistics (5 topics)

| # | Topic | Diagnostic File | Reference File | Key Syllabus Points |
|---|-------|----------------|----------------|---------------------|
| 1 | Data Representation | `diagnostics/diag-data-representation.md` | `statistics/01-data-representation.md` | Measures of central tendency, spread, histograms |
| 2 | Correlation and Regression | `diagnostics/diag-correlation-and-regression.md` | `statistics/02-correlation-and-regression.md` | PMCC, regression line, interpolation, outliers |
| 3 | Probability | `diagnostics/diag-probability.md` | `statistics/03-probability.md` | Venn diagrams, conditional probability, independence |
| 4 | Statistical Distributions | `diagnostics/diag-statistical-distributions.md` | `statistics/04-statistical-distributions.md` | Binomial, normal, standard normal, approximation |
| 5 | Hypothesis Testing | `diagnostics/diag-hypothesis-testing.md` | `statistics/05-hypothesis-testing.md` | Null/alternative hypotheses, critical regions, p-values |

### 7.3 Mechanics (5 topics)

| # | Topic | Diagnostic File | Reference File | Key Syllabus Points |
|---|-------|----------------|----------------|---------------------|
| 1 | Kinematics | `diagnostics/diag-kinematics.md` | `mechanics/01-kinematics.md` | suvat, velocity-time graphs, projectiles |
| 2 | Forces and Newton's Laws | `diagnostics/diag-forces-and-newtons-laws.md` | `mechanics/02-forces-and-newtons-laws.md` | F=ma, connected particles, friction, inclined planes |
| 3 | Moments | `diagnostics/diag-moments.md` | `mechanics/03-moments.md` | Equilibrium, centre of mass, tilting |
| 4 | Energy and Work | `diagnostics/diag-energy-and-work.md` | `mechanics/04-energy-and-work.md` | KE, PE, work-energy principle, power |
| 5 | Momentum | `diagnostics/diag-momentum.md` | `mechanics/05-momentum.md` | Conservation of momentum, impulse, collisions |

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
| Full subject area (e.g., all 14 Pure topics) | 7 -- 10.5 hours (split across multiple sessions) |
| Complete diagnostic (all 24 topics) | 12 -- 18 hours (split across multiple sessions) |

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
Algebraic Expressions -> Quadratics -> Equations and Inequalities -> Functions
Differentiation -> Integration
Integration -> Numerical Methods (Newton-Raphson)
Trigonometry -> Differentiation (trig derivatives) -> Integration (trig integrals)
Sequences and Series -> Binomial Expansion
Coordinates and Geometry -> Vectors
Kinematics -> Forces and Newton's Laws -> Moments
Kinematics -> Energy and Work -> Momentum
Data Representation -> Correlation and Regression
Probability -> Statistical Distributions -> Hypothesis Testing
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
docs/docs_alevel/maths/
  DIAGNOSTIC_GUIDE.md                          This document
  diagnostics/
    diag-algebraic-expressions.md              Per-topic diagnostic files
    diag-quadratics.md
    diag-equations-and-inequalities.md
    diag-coordinates-and-geometry.md
    diag-functions.md
    diag-sequences-and-series.md
    diag-binomial-expansion.md
    diag-trigonometry.md
    diag-exponentials-and-logarithms.md
    diag-differentiation.md
    diag-integration.md
    diag-vectors.md
    diag-proof.md
    diag-numerical-methods.md
    diag-data-representation.md
    diag-correlation-and-regression.md
    diag-probability.md
    diag-statistical-distributions.md
    diag-hypothesis-testing.md
    diag-kinematics.md
    diag-forces-and-newtons-laws.md
    diag-moments.md
    diag-energy-and-work.md
    diag-momentum.md
    papers/                                     Combined exam papers
      paper-1-pure.md
      paper-2-pure.md
      paper-3-statistics-mechanics.md
```

### 10.2 Diagnostic file format

Each `diag-<topic-slug>.md` file follows this structure:

```
# Topic Name: Diagnostic Test

## Unit Tests

### Question 1
[Question text]

### Solution 1
[Full worked solution]

### Question 2
[Question text]

### Solution 2
[Full worked solution]

## Integration Tests

### Question 1
[Question text -- multi-topic, no technique hints]

### Solution 1
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
Notes, Date. All 24 topics are listed in the Coverage Map (Section 7).
