---
title: Inequalities — Diagnostic Tests
description: "Diagnostic tests for DSE Inequalities: linear, quadratic, absolute value inequalities, systems of inequalities, and common sign-flip errors."
slug: diag-inequalities
hide_table_of_contents: true
---

# Inequalities — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for inequalities.

### UT-1: Sign Flip When Dividing by Negative

**Question:**

Solve the inequality $\dfrac{3x - 1}{2 - x} \geq 0$.

**Solution:**

Critical values: $x = \dfrac{1}{3}$ (numerator zero) and $x = 2$ (denominator zero).

Do NOT simply cross-multiply, because the sign of $(2 - x)$ is unknown.

Sign chart:

| Interval | $3x - 1$ | $2 - x$ | Quotient |
|---|---|---|---|
| $x < \dfrac{1}{3}$ | $-$ | $+$ | $-$ |
| $\dfrac{1}{3} < x < 2$ | $+$ | $+$ | $+$ |
| $x > 2$ | $+$ | $-$ | $-$ |

At $x = \dfrac{1}{3}$: quotient is $0$ (included since $\geq 0$).

At $x = 2$: undefined (excluded).

Solution: $x \in \left[\dfrac{1}{3},\; 2\right)$.

A common mistake is cross-multiplying by $(2 - x)$ without considering the sign, which would give the wrong inequality direction for $x > 2$.

---

### UT-2: Absolute Value Inequality

**Question:**

Solve $|2x - 5| \lt 3x + 1$.

**Solution:**

Since the RHS involves $x$, we cannot simply split into two cases without considering the sign of the RHS.

**Case 1:** $3x + 1 \leq 0$, i.e. $x \leq -\dfrac{1}{3}$.

$|2x - 5| \geq 0$ and $3x + 1 \leq 0$, so $|2x - 5| \geq 0 > 3x + 1$ is possible only if $|2x - 5| < 3x + 1$. But $3x + 1 \leq 0$ while $|2x - 5| \geq 0$, so $|2x - 5| < 3x + 1$ is impossible when $3x + 1 \leq 0$ (since LHS $\geq 0$ and RHS $\leq 0$, equality requires both zero, but $|2x-5|=0 \implies x=5/2 \not\leq -1/3$).

No solution in this case.

**Case 2:** $3x + 1 > 0$, i.e. $x > -\dfrac{1}{3}$.

$$-(3x + 1) < 2x - 5 < 3x + 1$$

Left inequality: $-3x - 1 < 2x - 5 \implies -5x < -4 \implies x > \dfrac{4}{5}$.

Right inequality: $2x - 5 < 3x + 1 \implies -x < 6 \implies x > -6$ (always true when $x > -\dfrac{1}{3}$).

Combining with $x > -\dfrac{1}{3}$: $x > \dfrac{4}{5}$.

Solution: $x \in \left(\dfrac{4}{5},\; \infty\right)$.

---

### UT-3: Quadratic Inequality with Non-Standard Leading Coefficient

**Question:**

Solve $-2x^2 + 3x + 5 > 0$.

**Solution:**

Factorise: $-2x^2 + 3x + 5 = -(2x^2 - 3x - 5) = -(2x - 5)(x + 1)$.

So $(2x - 5)(x + 1) < 0$.

Critical values: $x = -1$ and $x = \dfrac{5}{2}$.

Since the parabola $2x^2 - 3x - 5$ opens upward, it is negative between the roots.

Solution: $-1 < x < \dfrac{5}{2}$, i.e. $x \in (-1,\; \tfrac{5}{2})$.

A common mistake is forgetting to reverse the inequality when factoring out the negative sign.

---

### UT-4: System of Linear Inequalities — Feasible Region

**Question:**

Find the region satisfying all of the following:

$$x + y \leq 6, \quad 2x - y \geq 1, \quad x \geq 0, \quad y \geq 0$$

Find the maximum value of $P = 3x + 2y$ in this region.

**Solution:**

Corner points of the feasible region:

1. Intersection of $x + y = 6$ and $2x - y = 1$: adding gives $3x = 7$, so $x = \dfrac{7}{3}$, $y = 6 - \dfrac{7}{3} = \dfrac{11}{3}$. Point: $\left(\dfrac{7}{3},\; \dfrac{11}{3}\right)$.

2. Intersection of $2x - y = 1$ with $y = 0$: $2x = 1$, $x = \dfrac{1}{2}$. Point: $\left(\dfrac{1}{2},\; 0\right)$.

3. Intersection of $x + y = 6$ with $x = 0$: $y = 6$. Point: $(0,\; 6)$.

4. Origin: $(0,\; 0)$.

Evaluate $P = 3x + 2y$:

- $\left(\dfrac{7}{3},\; \dfrac{11}{3}\right)$: $P = 7 + \dfrac{22}{3} = \dfrac{43}{3} \approx 14.33$
- $\left(\dfrac{1}{2},\; 0\right)$: $P = \dfrac{3}{2} = 1.5$
- $(0,\; 6)$: $P = 12$
- $(0,\; 0)$: $P = 0$

Maximum value: $\dfrac{43}{3}$ at $\left(\dfrac{7}{3},\; \dfrac{11}{3}\right)$.

---

### UT-5: Inequality Involving Reciprocals

**Question:**

Solve $\dfrac{1}{x - 1} \leq \dfrac{2}{x + 1}$.

**Solution:**

Bring to one side:

$$\frac{1}{x - 1} - \frac{2}{x + 1} \leq 0$$

$$\frac{(x + 1) - 2(x - 1)}{(x-1)(x+1)} \leq 0$$

$$\frac{x + 1 - 2x + 2}{(x-1)(x+1)} \leq 0$$

$$\frac{3 - x}{(x-1)(x+1)} \leq 0$$

$$\frac{x - 3}{(x-1)(x+1)} \geq 0$$

Critical values: $x = -1$, $x = 1$, $x = 3$.

Sign chart:

| Interval | Test | Sign |
|---|---|---|
| $x < -1$ | $x = -2$ | $-$ |
| $-1 < x < 1$ | $x = 0$ | $+$ |
| $1 < x < 3$ | $x = 2$ | $-$ |
| $x > 3$ | $x = 4$ | $+$ |

Including zeros ($x = 3$), excluding poles ($x = -1, 1$):

Solution: $(-1,\; 1) \cup [3,\; \infty)$.

---

## Integration Tests

> Tests synthesis of inequalities with other topics.

### IT-1: Inequalities and Quadratics (with Quadratics)

**Question:**

Find the range of values of $k$ such that the quadratic expression $x^2 + 2kx + k^2 - 2k + 5$ is always positive for all real $x$.

**Solution:**

The expression is always positive if the discriminant is negative (since the leading coefficient $1 > 0$).

$$\Delta = (2k)^2 - 4(k^2 - 2k + 5) = 4k^2 - 4k^2 + 8k - 20 = 8k - 20$$

$\Delta < 0 \implies 8k - 20 < 0 \implies k < \dfrac{5}{2}$.

Solution: $k \in (-\infty,\; \tfrac{5}{2})$.

---

### IT-2: Inequalities and Functions (with Functions)

**Question:**

Let $f(x) = x^2 - 6x + 5$. Find the set of values of $x$ for which $f(x) \leq f(2x)$.

**Solution:**

$f(x) = x^2 - 6x + 5$ and $f(2x) = 4x^2 - 12x + 5$.

$$x^2 - 6x + 5 \leq 4x^2 - 12x + 5$$

$$0 \leq 3x^2 - 6x$$

$$3x^2 - 6x \geq 0$$

$$3x(x - 2) \geq 0$$

Critical values: $x = 0$, $x = 2$.

Solution: $x \leq 0$ or $x \geq 2$, i.e. $x \in (-\infty,\; 0] \cup [2,\; \infty)$.

---

### IT-3: Inequalities and Logarithms (with Logarithms)

**Question:**

Solve $\log_2(x + 3) \lt \log_2(5 - x)$.

**Solution:**

Since the logarithm function is strictly increasing, we can compare arguments directly:

$$x + 3 < 5 - x$$

$$2x < 2 \implies x < 1$$

But we also need the domain: $x + 3 > 0$ and $5 - x > 0$, giving $-3 < x < 5$.

Combining: $-3 < x < 1$.

Solution: $x \in (-3,\; 1)$.

A common mistake is forgetting the domain restriction. If the base were between 0 and 1, the inequality would reverse.
