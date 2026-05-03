---
title: Polynomials — Diagnostic Tests
description: "Diagnostic tests for DSE Polynomials: factor theorem, remainder theorem, polynomial division, and Vieta's formulas for higher degrees."
slug: diag-polynomials
hide_table_of_contents: true
---

# Polynomials — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for polynomials.

### UT-1: Factor Theorem Sign Confusion

**Question:**

Determine whether $x + 2$ is a factor of $P(x) = x^3 + 3x^2 - 4x - 8$.

**Solution:**

By the factor theorem, $x + 2$ is a factor if and only if $P(-2) = 0$.

$$P(-2) = (-2)^3 + 3(-2)^2 - 4(-2) - 8 = -8 + 12 + 8 - 8 = 4$$

Since $P(-2) = 4 \neq 0$, $x + 2$ is **not** a factor.

A common mistake is testing $P(2)$ instead of $P(-2)$. The factor theorem states that $(x - a)$ is a factor if $P(a) = 0$. Here the factor is $x + 2 = x - (-2)$, so we test $a = -2$.

---

### UT-2: Remainder Theorem Application

**Question:**

When $P(x) = 2x^3 + ax^2 - 5x + 3$ is divided by $x - 2$, the remainder is $11$. When $P(x)$ is divided by $x + 1$, the remainder is $-4$. Find $a$ and $b$ (if $P(x)$ also has a constant term correction $b$ replacing $3$), or simply find $a$.

**Solution:**

By the remainder theorem:

$P(2) = 2(8) + 4a - 10 + 3 = 16 + 4a - 7 = 4a + 9 = 11 \implies 4a = 2 \implies a = \dfrac{1}{2}$.

Verify: $P(-1) = 2(-1) + \dfrac{1}{2}(1) - 5(-1) + 3 = -2 + \dfrac{1}{2} + 5 + 3 = 6.5 = -4$?

Wait: $P(-1) = 2(-1)^3 + \dfrac{1}{2}(-1)^2 - 5(-1) + 3 = -2 + \dfrac{1}{2} + 5 + 3 = \dfrac{13}{2}$.

But we need $P(-1) = -4$. There is no single value of $a$ satisfying both conditions simultaneously with the constant term fixed at $3$. The problem as stated is inconsistent. This highlights the importance of verifying all conditions.

If instead the constant term is also a variable $b$:

$P(2) = 4a + b + 9 = 11 \implies 4a + b = 2$.

$P(-1) = -2 + a + 5 + b = a + b + 3 = -4 \implies a + b = -7$.

Subtracting: $3a = 9 \implies a = 3$, $b = -10$.

---

### UT-3: Polynomial Division with Errors

**Question:**

Divide $2x^3 - 5x^2 + x - 6$ by $x^2 - 2x + 3$.

**Solution:**

$$\begin{array}{r|l}
x^2 - 2x + 3 & 2x^3 - 5x^2 + \phantom{0}x - 6 \\
\hline
& 2x \\
& 2x^3 - 4x^2 + 6x \\
\hline
& \phantom{2x^3} - x^2 - 5x - 6 \\
& \phantom{2x^3} - x^2 + 2x - 3 \\
\hline
& \phantom{2x^3} \phantom{- x^2} - 7x - 3 \\
\end{array}$$

Quotient: $2x - 1$, Remainder: $-7x - 3$.

Verify: $(2x - 1)(x^2 - 2x + 3) + (-7x - 3)$

$= 2x^3 - 4x^2 + 6x - x^2 + 2x - 3 - 7x - 3$

$= 2x^3 - 5x^2 + x - 6$. Correct.

---

### UT-4: Vieta's Formulas for Cubic

**Question:**

If $\alpha$, $\beta$, $\gamma$ are the roots of $x^3 - 5x^2 + 2x + 8 = 0$, find:

(a) $\alpha + \beta + \gamma$
(b) $\alpha\beta + \beta\gamma + \gamma\alpha$
(c) $\alpha\beta\gamma$

**Solution:**

By Vieta's formulas for $x^3 + px^2 + qx + r = 0$:

$$\alpha + \beta + \gamma = -p = 5$$
$$\alpha\beta + \beta\gamma + \gamma\alpha = q = 2$$
$$\alpha\beta\gamma = -r = -8$$

---

### UT-5: Finding Unknown Coefficients Given Factors

**Question:**

$P(x) = x^3 + ax^2 + bx - 12$ has factors $(x - 1)$ and $(x + 4)$. Find $a$, $b$, and the remaining factor.

**Solution:**

Since $(x - 1)$ is a factor: $P(1) = 1 + a + b - 12 = 0 \implies a + b = 11$. ... (1)

Since $(x + 4)$ is a factor: $P(-4) = -64 + 16a - 4b - 12 = 0 \implies 16a - 4b = 76 \implies 4a - b = 19$. ... (2)

From (1) + (2): $5a = 30 \implies a = 6$. Then $b = 5$.

So $P(x) = x^3 + 6x^2 + 5x - 12$.

Dividing by $(x - 1)(x + 4) = x^2 + 3x - 4$:

$x^3 + 6x^2 + 5x - 12 = (x^2 + 3x - 4)(x + c)$

Expanding RHS: $x^3 + cx^2 + 3x^2 + 3cx - 4x - 4c = x^3 + (c+3)x^2 + (3c-4)x - 4c$.

Matching: $c + 3 = 6 \implies c = 3$.

The remaining factor is $(x + 3)$.

---

## Integration Tests

> Tests synthesis of polynomials with other topics.

### IT-1: Polynomials and Inequalities (with Inequalities)

**Question:**

Let $P(x) = (x - 1)(x^2 - 4x + 3)$. Find the set of values of $x$ for which $P(x) \leq 0$.

**Solution:**

$$P(x) = (x - 1)(x - 1)(x - 3) = (x - 1)^2(x - 3)$$

Critical values: $x = 1$ (double root) and $x = 3$.

| Interval | Test | $(x-1)^2$ | $(x-3)$ | Product |
|---|---|---|---|---|
| $x < 1$ | $x = 0$ | $+$ | $-$ | $-$ |
| $1 < x < 3$ | $x = 2$ | $+$ | $-$ | $-$ |
| $x > 3$ | $x = 4$ | $+$ | $+$ | $+$ |

$P(x) \leq 0$ when $x \leq 3$ (including $x = 1$ and $x = 3$).

Therefore $x \in (-\infty,\; 3]$.

---

### IT-2: Polynomials and Functions (with Functions)

**Question:**

Let $f(x) = x^3 - 3x^2 - 4x + 12$. Given that $(x - 2)$ is a factor, find all $x$ for which $f(x) = 0$, and hence state the domain on which $f$ is one-to-one.

**Solution:**

$P(2) = 8 - 12 - 8 + 12 = 0$. Confirmed.

Divide $x^3 - 3x^2 - 4x + 12$ by $(x - 2)$:

$$\begin{array}{r|l}
x - 2 & x^3 - 3x^2 - 4x + 12 \\
\hline
& x^2 - x - 6 \\
& x^3 - 2x^2 \\
\hline
& \phantom{x^3} - x^2 - 4x \\
& \phantom{x^3} - x^2 + 2x \\
\hline
& \phantom{x^3 x^2} - 6x + 12 \\
& \phantom{x^3 x^2} - 6x + 12 \\
\hline
& \phantom{x^3 x^2} 0 \\
\end{array}$$

$$x^2 - x - 6 = (x - 3)(x + 2)$$

Roots: $x = -2$, $x = 2$, $x = 3$.

$P(x) = (x - 2)(x - 3)(x + 2)$ is a cubic with positive leading coefficient, so it is strictly increasing when restricted to avoid the local maximum and minimum.

To make $f$ one-to-one, restrict to $[2,\; \infty)$ (after the local minimum at one of the turning points) or $(-\infty,\; -2]$.

---

### IT-3: Polynomials and Coordinate Geometry (with Coordinate Geometry)

**Question:**

The cubic curve $y = x^3 - 6x^2 + 11x - 6$ intersects the $x$-axis at points $A$, $B$, and $C$. Find the coordinates of $A$, $B$, $C$ and the area of triangle $ABC$.

**Solution:**

$x^3 - 6x^2 + 11x - 6 = 0$

By inspection $x = 1$: $1 - 6 + 11 - 6 = 0$. So $(x - 1)$ is a factor.

Dividing: $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6) = (x - 1)(x - 2)(x - 3)$.

Roots: $x = 1, 2, 3$.

$A = (1, 0)$, $B = (2, 0)$, $C = (3, 0)$.

Since all three points lie on the $x$-axis, they are collinear, and the area of triangle $ABC$ is $0$.
