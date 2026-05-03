---
title: A-Level Further Maths -- Diagnostic Guide
description: "Comprehensive guide to A-Level Further Maths diagnostic tests with coverage map, grading rubric, prerequisite chains, and timing recommendations."
slug: diag-guide-further-maths
hide_table_of_contents: true
---

# A-Level Further Maths — Diagnostic Guide

## Coverage Map

### Pure Mathematics

| Diagnostic File | Topics Covered | Source File |
|---|---|---|
| `diag-complex-numbers.md` | Argand diagrams, modulus-argument form, De Moivre's theorem, roots of unity, complex transformations | `pure-mathematics/01-complex-numbers.md` |
| `diag-matrices.md` | Operations, 3x3 inverses, eigenvalues/eigenvectors, geometric transformations, systems | `pure-mathematics/02-matrices.md` |
| `diag-further-algebra.md` | Roots of polynomials, partial fractions, series summation, mathematical induction | `pure-mathematics/03-further-algebra.md` |
| `diag-further-calculus.md` | Improper integrals, volumes of revolution, parametric differentiation, arc length | `pure-mathematics/04-further-calculus.md` |
| `diag-polar-coordinates.md` | Conversion, sketching, area enclosed, tangent at a point, conics in polar form | `pure-mathematics/05-polar-coordinates.md` |
| `diag-hyperbolic-functions.md` | Definitions, identities, calculus, inverse hyperbolic functions, Osborn's rule | `pure-mathematics/06-hyperbolic-functions.md` |
| `diag-differential-equations.md` | First order separable, second order linear, particular integrals, forming DEs | `pure-mathematics/07-differential-equations.md` |
| `diag-maclaurin-taylor-series.md` | Standard expansions, radius of convergence, differentiation/integration of series | `pure-mathematics/08-maclaurin-and-taylor-series.md` |
| `diag-vectors-3d.md` | Scalar product, vector product, equations of lines/planes, volumes | `pure-mathematics/09-vectors-in-3d.md` |

### Further Mechanics

| Diagnostic File | Topics Covered | Source File |
|---|---|---|
| `diag-projectile-motion.md` | (Covered through integration tests) | `further-mechanics/01-projectile-motion.md` |
| `diag-circular-motion.md` | (Covered through integration tests) | `further-mechanics/02-circular-motion.md` |
| `diag-collisions.md` | (Covered through integration tests) | `further-mechanics/03-centres-of-mass-and-elastic-collisions.md` |

### Further Statistics

| Diagnostic File | Topics Covered | Source File |
|---|---|---|
| `diag-poisson-geometric.md` | (Covered through integration tests) | `further-statistics/01-poisson-and-geometric-distributions.md` |
| `diag-exponential-continuous.md` | (Covered through integration tests) | `further-statistics/02-exponential-and-continuous-random-variables.md` |
| `diag-chi-squared.md` | (Covered through integration tests) | `further-statistics/03-chi-squared-tests.md` |

## Grading Rubric

### PASS Criteria
- Correctly solve at least 2 out of 3 Unit Tests with full working
- Correctly solve at least 2 out of 3 Integration Tests
- Correct use of mathematical notation and LaTeX
- Clear logical flow in proofs and derivations

### PARTIAL Criteria
- Correctly solve 1--2 Unit Tests and 1 Integration Test
- Shows understanding of concepts but with calculation errors
- Partially correct proofs with gaps in reasoning
- Struggles with multi-step problems

### FAIL Indicators
- Cannot compute eigenvalues or matrix inverses
- Confuses trigonometric and hyperbolic identities
- Cannot separate variables in first-order DEs
- Cannot identify convergence of series
- Cannot convert between Cartesian and polar forms

## Prerequisite Chains

```
Further Algebra (polynomials, series)
  ├── Complex Numbers (roots of unity, polynomial factorisation)
  └── Matrices (characteristic polynomials for eigenvalues)

Complex Numbers
  ├── Polar Coordinates (Argand diagrams, transformations)
  └── Hyperbolic Functions (Euler's formula connections)

Further Calculus
  ├── Differential Equations (integration techniques)
  └── Maclaurin Series (series for integration)

Polar Coordinates
  └── Vectors in 3D (position vectors, direction)

Differential Equations
  └── Further Mechanics (modelling physical systems)

Maclaurin Series
  └── Hyperbolic Functions (series definitions)
```

**Recommended order of diagnostic completion:**
1. `diag-further-algebra` -- foundational algebraic techniques
2. `diag-complex-numbers` -- essential for matrices and DEs
3. `diag-matrices` -- requires algebra skills
4. `diag-further-calculus` -- requires integration skills
5. `diag-differential-equations` -- builds on calculus
6. `diag-maclaurin-taylor-series` -- requires calculus
7. `diag-polar-coordinates` -- requires trigonometry
8. `diag-hyperbolic-functions` -- parallels trigonometry
9. `diag-vectors-3d` -- requires algebra and geometry

## Timing Recommendations

| Diagnostic | Recommended Time | Notes |
|---|---|---|
| `diag-further-algebra` | 40 minutes | Induction proof takes time |
| `diag-complex-numbers` | 45 minutes | De Moivre and roots of unity |
| `diag-matrices` | 45 minutes | 3x3 inverses and eigenvalues |
| `diag-further-calculus` | 40 minutes | Volumes and arc length |
| `diag-differential-equations` | 40 minutes | Particular integrals can be complex |
| `diag-maclaurin-taylor-series` | 35 minutes | Series manipulation |
| `diag-polar-coordinates` | 35 minutes | Area calculations |
| `diag-hyperbolic-functions` | 30 minutes | Parallels trigonometry |
| `diag-vectors-3d` | 35 minutes | Equations of planes |

**Total recommended time:** approximately 6 hours (spread across 3--4 sessions).

## How to Use These Diagnostics

1. Complete each diagnostic without notes, showing full algebraic working.
2. Check solutions immediately, comparing both method and final answer.
3. If you score FAIL, review the corresponding source file before retrying.
4. Integration Tests combine skills across pure maths topics -- these mirror A-Level exam style.
5. Practise writing proofs with clear logical steps.
6. Pay special attention to convergence conditions for series and Maclaurin expansions.
