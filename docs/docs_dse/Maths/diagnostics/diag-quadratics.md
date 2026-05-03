---
title: Quadratics — Diagnostic Tests
description: "Diagnostic tests for DSE Quadratics: discriminant analysis, quadratic formula, factorisation, completing the square, and hidden quadratics."
slug: diag-quadratics
hide_table_of_contents: true
---

# Quadratics — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for quadratics.

### UT-1: Discriminant with Parameters

**Question:**

Find the range of values of $k$ for which the equation $(k - 1)x^2 - 2kx + k + 3 = 0$ has two distinct real roots.

**Solution:**

For two distinct real roots, we need $\Delta > 0$ AND $a \neq 0$.

$a = k - 1$, $b = -2k$, $c = k + 3$.

$$\Delta = (-2k)^2 - 4(k-1)(k+3) = 4k^2 - 4(k^2 + 2k - 3) = 4k^2 - 4k^2 - 8k + 12 = -8k + 12$$

$\Delta > 0 \implies -8k + 12 > 0 \implies k < \dfrac{3}{2}$.

$a \neq 0 \implies k \neq 1$.

Therefore $k \in (-\infty,\; 1) \cup (1,\; \tfrac{3}{2})$.

A common mistake is forgetting the $a \neq 0$ condition (i.e. $k \neq 1$), which would reduce the problem to a linear equation.

---

### UT-2: Hidden Quadratic in Exponent

**Question:**

Solve $4^{x+1} - 5 \cdot 2^x + 1 = 0$.

**Solution:**

Let $u = 2^x$ (so $u > 0$). Then $4^{x+1} = 4 \cdot 4^x = 4u^2$.

$$4u^2 - 5u + 1 = 0$$

$$(4u - 1)(u - 1) = 0$$

$$u = \frac{1}{4} \quad \text{or} \quad u = 1$$

Since $u > 0$, both are valid.

$2^x = \dfrac{1}{4} = 2^{-2} \implies x = -2$.

$2^x = 1 = 2^0 \implies x = 0$.

Therefore $x = -2$ or $x = 0$.

---

### UT-3: Vieta's Formulas Application

**Question:**

If $\alpha$ and $\beta$ are the roots of $2x^2 - 6x + 1 = 0$, find the value of $\alpha^2 + \beta^2$ without solving the equation.

**Solution:**

By Vieta's formulas: $\alpha + \beta = \dfrac{6}{2} = 3$ and $\alpha\beta = \dfrac{1}{2}$.

$$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = 9 - 2\left(\frac{1}{2}\right) = 9 - 1 = 8$$

---

### UT-4: Completing the Square to Find Range

**Question:**

Find the range of $f(x) = -3x^2 + 12x - 7$.

**Solution:**

$$f(x) = -3(x^2 - 4x) - 7 = -3(x - 2)^2 + 12 - 7 = -3(x - 2)^2 + 5$$

Since $-3(x - 2)^2 \leq 0$ for all $x$, the maximum value is $5$ at $x = 2$.

$$\mathrm{ran}(f) = (-\infty,\; 5]$$

---

### UT-5: Factorisation with Non-Integer Coefficients

**Question:**

Factorise $6x^2 - 7x - 20$ completely.

**Solution:**

We need $ac = 6 \times (-20) = -120$ and $b = -7$.

Two numbers multiplying to $-120$ and adding to $-7$: $-15$ and $8$.

$$6x^2 - 15x + 8x - 20 = 3x(2x - 5) + 4(2x - 5) = (3x + 4)(2x - 5)$$

---

## Integration Tests

> Tests synthesis of quadratics with other topics.

### IT-1: Quadratics and Inequalities (with Inequalities)

**Question:**

Find the range of values of $x$ for which $\dfrac{x^2 - 4x + 3}{x^2 - 1} \lt 0$.

**Solution:**

Factorise: $\dfrac{(x-1)(x-3)}{(x-1)(x+1)} = \dfrac{x - 3}{x + 1}$, provided $x \neq 1$.

$\dfrac{x - 3}{x + 1} \lt 0$.

Critical values: $x = -1$ and $x = 3$. Note $x = 1$ is excluded (makes denominator zero in original).

Sign chart:

| Interval | Test | Sign |
|---|---|---|
| $x < -1$ | $x = -2$ | $+$ |
| $-1 < x < 1$ | $x = 0$ | $-$ |
| $1 < x < 3$ | $x = 2$ | $-$ |
| $x > 3$ | $x = 4$ | $+$ |

The expression is negative for $-1 < x < 1$ or $1 < x < 3$.

Combined: $x \in (-1,\; 1) \cup (1,\; 3)$.

---

### IT-2: Quadratics and Functions (with Functions)

**Question:**

Let $f(x) = x^2 - 4x + k$. If the equation $f(x) = 0$ has no real roots and $f(2) > 0$, find the range of $k$.

**Solution:**

No real roots means $\Delta < 0$:

$$\Delta = 16 - 4k < 0 \implies k > 4$$

Also $f(2) = 4 - 8 + k = k - 4 > 0 \implies k > 4$.

Both conditions give $k > 4$.

Therefore $k \in (4,\; \infty)$.

---

### IT-3: Quadratics and Coordinate Geometry (with Coordinate Geometry)

**Question:**

The line $y = 2x + 1$ intersects the parabola $y = x^2 - 3x + 7$ at points $A$ and $B$. Find the coordinates of $A$ and $B$, and the length of $AB$.

**Solution:**

Setting equal: $x^2 - 3x + 7 = 2x + 1$

$$x^2 - 5x + 6 = 0$$

$$(x - 2)(x - 3) = 0$$

$$x = 2 \quad \text{or} \quad x = 3$$

When $x = 2$: $y = 2(2) + 1 = 5$. So $A = (2, 5)$.

When $x = 3$: $y = 2(3) + 1 = 7$. So $B = (3, 7)$.

$$AB = \sqrt{(3-2)^2 + (7-5)^2} = \sqrt{1 + 4} = \sqrt{5}$$
