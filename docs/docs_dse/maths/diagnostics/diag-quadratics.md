---
title: 'Quadratics -- Diagnostic Tests'
description: 'DSE Maths Quadratics -- Diagnostic Tests notes covering key definitions, core concepts, worked examples, and practice questions for thorough preparation.'
slug: diag-quadratics
hide_table_of_contents: true
---

# Quadratics — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for quadratics.

### UT-1: Discriminant with Parameters

**Question:**

Find the range of values of $k$ for which the equation $(k - 1)x^2 - 2kx + k + 3 = 0$ has two
distinct real roots.

**Solution:**

For two distinct real roots, we need $\Delta > 0$ AND $a \neq 0$.

$a = k - 1$$b = -2k$$c = k + 3$.

$$\Delta = (-2k)^2 - 4(k-1)(k+3) = 4k^2 - 4(k^2 + 2k - 3) = 4k^2 - 4k^2 - 8k + 12 = -8k + 12$$

$\Delta > 0 \implies -8k + 12 > 0 \implies k < \dfrac{3}{2}$.

$a \neq 0 \implies k \neq 1$.

Therefore $k \in (-\infty,\; 1) \cup (1,\; \tfrac{3}{2})$.

A common mistake is forgetting the $a \neq 0$ condition (i.e. $k \neq 1$), which would reduce the
problem to a linear equation.

---

### UT-2: Hidden Quadratic in Exponent

**Question:**

Solve $4^{x+1} - 5 \cdot 2^x + 1 = 0$.

**Solution:**

Let $u = 2^x$ (so $u > 0$). Then $4^{x+1} = 4 \cdot 4^x = 4u^2$.

$$4u^2 - 5u + 1 = 0$$

$$(4u - 1)(u - 1) = 0$$

$$u = \frac{1}{4} \quad \text{or} \quad u = 1$$

Since $u > 0$Both are valid.

$2^x = \dfrac{1}{4} = 2^{-2} \implies x = -2$.

$2^x = 1 = 2^0 \implies x = 0$.

Therefore $x = -2$ or $x = 0$.

---

### UT-3: Vieta's Formulas Application

**Question:**

If $\alpha$ and $\beta$ are the roots of $2x^2 - 6x + 1 = 0$Find the value of $\alpha^2 + \beta^2$
without solving the equation.

**Solution:**

By Vieta's formulas: $\alpha + \beta = \dfrac{6}{2} = 3$ and $\alpha\beta = \dfrac{1}{2}$.

$$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = 9 - 2\left(\frac{1}{2}\right) = 9 - 1 = 8$$

---

### UT-4: Completing the Square to Find Range

**Question:**

Find the range of $f(x) = -3x^2 + 12x - 7$.

**Solution:**

$$f(x) = -3(x^2 - 4x) - 7 = -3(x - 2)^2 + 12 - 7 = -3(x - 2)^2 + 5$$

Since $-3(x - 2)^2 \leq 0$ for all $x$The maximum value is $5$ at $x = 2$.

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

Factorise: $\dfrac{(x-1)(x-3)}{(x-1)(x+1)} = \dfrac{x - 3}{x + 1}$Provided $x \neq 1$.

$\dfrac{x - 3}{x + 1} \lt 0$.

Critical values: $x = -1$ and $x = 3$. Note $x = 1$ is excluded (makes denominator zero in
original).

Sign chart:

| Interval     | Test     | Sign |
| ------------ | -------- | ---- |
| $x < -1$     | $x = -2$ | $+$  |
| $-1 < x < 1$ | $x = 0$  | $-$  |
| $1 < x < 3$  | $x = 2$  | $-$  |
| $x > 3$      | $x = 4$  | $+$  |

The expression is negative for $-1 < x < 1$ or $1 < x < 3$.

Combined: $x \in (-1,\; 1) \cup (1,\; 3)$.

---

### IT-2: Quadratics and Functions (with Functions)

**Question:**

Let $f(x) = x^2 - 4x + k$. If the equation $f(x) = 0$ has no real roots and $f(2) > 0$Find the range
of $k$.

**Solution:**

No real roots means $\Delta < 0$:

$$\Delta = 16 - 4k < 0 \implies k > 4$$

Also $f(2) = 4 - 8 + k = k - 4 > 0 \implies k > 4$.

Both conditions give $k > 4$.

Therefore $k \in (4,\; \infty)$.

---

### IT-3: Quadratics and Coordinate Geometry (with Coordinate Geometry)

**Question:**

The line $y = 2x + 1$ intersects the parabola $y = x^2 - 3x + 7$ at points $A$ and $B$. Find the
coordinates of $A$ and $B$And the length of $AB$.

**Solution:**

Setting equal: $x^2 - 3x + 7 = 2x + 1$

$$x^2 - 5x + 6 = 0$$

$$(x - 2)(x - 3) = 0$$

$$x = 2 \quad \text{or} \quad x = 3$$

When $x = 2$: $y = 2(2) + 1 = 5$. So $A = (2, 5)$.

When $x = 3$: $y = 2(3) + 1 = 7$. So $B = (3, 7)$.

$$AB = \sqrt{(3-2)^2 + (7-5)^2} = \sqrt{1 + 4} = \sqrt{5}$$

---

## Worked Examples

### WE-1: Sum and Product of Roots Application

**Question:**

If $\alpha$ and $\beta$ are the roots of $3x^2 - 5x + 2 = 0$Find a quadratic equation whose roots
are $\alpha^2$ and $\beta^2$.

**Solution:**

By Vieta's formulas: $\alpha + \beta = \dfrac{5}{3}$ and $\alpha\beta = \dfrac{2}{3}$.

$$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = \frac{25}{9} - \frac{4}{3} = \frac{25 - 12}{9} = \frac{13}{9}$$

$$\alpha^2 \beta^2 = (\alpha\beta)^2 = \frac{4}{9}$$

The required equation has sum $= \dfrac{13}{9}$ and product $= \dfrac{4}{9}$:

$$x^2 - \frac{13}{9}x + \frac{4}{9} = 0$$

$$9x^2 - 13x + 4 = 0$$

---

### WE-2: Quadratic Inequality with Parameter

**Question:**

Find the range of values of $m$ for which the equation $x^2 + 2mx + m^2 - 1 = 0$ has real roots, and
find the range of values of $x$ satisfying the inequality $x^2 + 2mx + m^2 - 1 \leq 0$ when $m = 2$.

**Solution:**

Discriminant: $\Delta = (2m)^2 - 4(m^2 - 1) = 4m^2 - 4m^2 + 4 = 4$.

Since $\Delta = 4 > 0$ for all $m$The equation always has two distinct real roots.

When $m = 2$: $x^2 + 4x + 3 \leq 0$I.e. $(x + 1)(x + 3) \leq 0$.

Solution: $-3 \leq x \leq -1$I.e. $x \in [-3,\; -1]$.

---

### WE-3: Hidden Quadratic with Substitution

**Question:**

Solve $x^4 - 5x^2 + 4 = 0$.

**Solution:**

Let $u = x^2$ ($u \geq 0$).

$$u^2 - 5u + 4 = 0$$

$$(u - 1)(u - 4) = 0$$

$$u = 1 \quad \text{or} \quad u = 4$$

$x^2 = 1 \implies x = 1$ or $x = -1$.

$x^2 = 4 \implies x = 2$ or $x = -2$.

Solution: $x = -2,\; -1,\; 1,\; 2$.

**DSE Exam Technique:** When solving hidden quadratics, always check the substitution condition
($u \geq 0$) and state all four roots explicitly.

---

### WE-4: Maximum Value Application

**Question:**

A farmer has 100 m of fencing to enclose a rectangular field beside a river. No fencing is needed
along the river. Find the dimensions that give the maximum area.

**Solution:**

Let the side parallel to the river have length $x$ and the other two sides have length $y$ each.

$2y + x = 100 \implies y = \dfrac{100 - x}{2} = 50 - \dfrac{x}{2}$.

Area: $A = xy = x\left(50 - \dfrac{x}{2}\right) = 50x - \dfrac{x^2}{2}$.

$$A = -\frac{1}{2}(x^2 - 100x) = -\frac{1}{2}(x - 50)^2 + 1250$$

Maximum area is $1250$ m$^2$ when $x = 50$ m, $y = 25$ m.

---

### WE-5: Discriminant Analysis for Tangency

**Question:**

Find the value of $c$ for which the line $y = 2x + c$ is tangent to the curve $y = x^2 + 3x - 1$.

**Solution:**

Set equal: $x^2 + 3x - 1 = 2x + c$.

$$x^2 + x - (1 + c) = 0$$

For tangency, $\Delta = 0$:

$$\Delta = 1 - 4(1)(-(1+c)) = 1 + 4(1+c) = 5 + 4c = 0$$

$$c = -\frac{5}{4}$$

---

### WE-6: Quadratic with Integer Roots

**Question:**

Find the integer values of $k$ for which $x^2 + kx + k + 3 = 0$ has integer roots.

**Solution:**

Let the roots be $\alpha$ and $\beta$ (integers). By Vieta: $\alpha + \beta = -k$ and
$\alpha\beta = k + 3$.

Substituting: $\alpha\beta = -(\alpha + \beta) + 3$.

$$\alpha\beta + \alpha + \beta = 3$$

$$(\alpha + 1)(\beta + 1) = 4$$

Factor pairs of 4: $(1,4), (2,2), (4,1), (-1,-4), (-2,-2), (-4,-1)$.

| $\alpha + 1$ | $\beta + 1$ | $\alpha$ | $\beta$ | $k = -(\alpha+\beta)$ |
| ------------ | ----------- | -------- | ------- | --------------------- |
| 1            | 4           | 0        | 3       | $-3$                  |
| 2            | 2           | 1        | 1       | $-2$                  |
| 4            | 1           | 3        | 0       | $-3$                  |
| $-1$         | $-4$        | $-2$     | $-5$    | $7$                   |
| $-2$         | $-2$        | $-3$     | $-3$    | $6$                   |
| $-4$         | $-1$        | $-5$     | $-2$    | $7$                   |

Distinct values of $k$: $-3$, $-2$, $6$, $7$.

---

### WE-7: Using Roots to Form New Equations

**Question:**

The roots of $x^2 - 7x + 10 = 0$ are $\alpha$ and $\beta$. Find the equation whose roots are
$\dfrac{1}{\alpha}$ and $\dfrac{1}{\beta}$.

**Solution:**

$\alpha + \beta = 7$, $\alpha\beta = 10$.

$$\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{7}{10}$$

$$\frac{1}{\alpha} \cdot \frac{1}{\beta} = \frac{1}{\alpha\beta} = \frac{1}{10}$$

Required equation: $x^2 - \dfrac{7}{10}x + \dfrac{1}{10} = 0$I.e. $10x^2 - 7x + 1 = 0$.

---

### WE-8: Range of Quadratic Expression

**Question:**

Find the minimum value of $\dfrac{x^2 + 2x + 5}{x^2 + 2x + 2}$ for real $x$.

**Solution:**

Let $t = x^2 + 2x + 2 = (x + 1)^2 + 1 \geq 1$.

The expression becomes $\dfrac{t + 3}{t} = 1 + \dfrac{3}{t}$.

Since $t \geq 1$ and $\dfrac{3}{t}$ is decreasing for $t > 0$:

The minimum occurs when $t$ is maximum? No -- $t$ can be arbitrarily large, making $\dfrac{3}{t}$
approach $0$. We need the minimum value, which occurs when $t$ is largest? No. When $t$ increases,
$\dfrac{3}{t}$ decreases, so the expression approaches 1 from above.

Actually, since $t \geq 1$ and $\dfrac{3}{t}$ decreases as $t$ increases, the maximum of
$\dfrac{3}{t}$ is at $t = 1$:

Minimum of the expression is when $t$ is as large as possible, giving $\dfrac{3}{t} \to 0$.

Wait -- we need the minimum. $1 + \dfrac{3}{t}$ with $t \geq 1$: since $\dfrac{3}{t} \leq 3$ and
decreases, the minimum is the infimum $1$ (not attained).

But let us reconsider. The expression $1 + \dfrac{3}{t}$ with $t \geq 1$: since $\dfrac{3}{t}$
ranges from $3$ (at $t = 1$) down to $0$ (as $t \to \infty$), the range is $(1,\; 4]$.

The minimum value approaches $1$ but is never attained.

---

## Common Pitfalls

1. **Forgetting the $a \neq 0$ condition in discriminant problems.** When asked about the roots of
   $ax^2 + bx + c = 0$If $a$ contains a parameter, always check that $a \neq 0$ separately. If
   $a = 0$The equation is linear and has exactly one root.

2. **Losing solutions when dividing by an expression containing $x$.** When solving
   $x \cdot f(x) = 0$You must consider both $x = 0$ and $f(x) = 0$. Dividing by $x$ loses the
   solution $x = 0$.

3. **Incorrect sign when completing the square.** A common error is writing
   $x^2 - 6x = (x - 3)^2 - 9$ but mistakenly writing $-9$ as $+9$. Always verify by expanding back:
   $(x - 3)^2 = x^2 - 6x + 9$So $x^2 - 6x = (x - 3)^2 - 9$.

4. **Assuming all quadratics can be factorised with integer coefficients.** If the discriminant is
   not a perfect square, the roots are irrational. In such cases, use the quadratic formula and
   leave answers in surd form (exact values preferred in DSE).

5. **Confusing the axis of symmetry with the vertex.** For $y = a(x - h)^2 + k$The axis of symmetry
   is $x = h$ and the vertex is $(h, k)$. The vertex is a point; the axis of symmetry is a line.

---

## DSE Exam-Style Questions

### DSE-1

(a) Find the range of values of $k$ for which $kx^2 - (k + 3)x + 3 = 0$ has two distinct real roots.
(4 marks) (b) For the value of $k$ at the boundary of this range, solve the equation. (2 marks)

**Solution:**

(a) For two distinct real roots: $\Delta > 0$ and $a \neq 0$.

$a = k$$b = -(k + 3)$$c = 3$.

$$\Delta = (k + 3)^2 - 4(k)(3) = k^2 + 6k + 9 - 12k = k^2 - 6k + 9 = (k - 3)^2$$

$\Delta > 0 \implies (k - 3)^2 > 0 \implies k \neq 3$.

Also $a \neq 0 \implies k \neq 0$.

Therefore $k \in (-\infty,\; 0) \cup (0,\; 3) \cup (3,\; \infty)$.

(b) At the boundary $k = 3$: $\Delta = 0$One repeated root.

$3x^2 - 6x + 3 = 0 \implies x^2 - 2x + 1 = 0 \implies (x - 1)^2 = 0 \implies x = 1$ (repeated root).

---

### DSE-2

The quadratic equation $x^2 + px + q = 0$ has roots $\alpha$ and $\beta$. It is given that
$\alpha^2 + \beta^2 = 10$ and $\alpha^3 + \beta^3 = 28$.

(a) Find the values of $p$ and $q$. (4 marks) (b) Hence solve the equation $x^2 + px + q = 0$. (2
marks)

**Solution:**

(a) $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = p^2 - 2q = 10$. ... (1)

$\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = -p^3 + 3pq = 28$. ... (2)

From (1): $p^2 - 2q = 10 \implies q = \dfrac{p^2 - 10}{2}$.

Substituting into (2): $-p^3 + 3p \cdot \dfrac{p^2 - 10}{2} = 28$.

$$-p^3 + \frac{3p^3 - 30p}{2} = 28$$

$$\frac{-2p^3 + 3p^3 - 30p}{2} = 28$$

$$p^3 - 30p = 56$$

$$p^3 - 30p - 56 = 0$$

By trial: $p = -2$: $-8 + 60 - 56 = -4 \neq 0$.

$p = 7$: $343 - 210 - 56 = 77 \neq 0$.

$p = -4$: $-64 + 120 - 56 = 0$. Yes.

So $p = -4$, $q = \dfrac{16 - 10}{2} = 3$.

(b) $x^2 - 4x + 3 = 0 \implies (x - 1)(x - 3) = 0 \implies x = 1$ or $x = 3$.

---

### DSE-3

Let $f(x) = x^2 - 2kx + k^2 + k - 3$.

(a) Find the range of values of $k$ for which $f(x) > 0$ for all real $x$. (3 marks) (b) If the
minimum value of $f(x)$ is $-1$Find $k$. (3 marks)

**Solution:**

(a) $f(x) > 0$ for all $x$ requires $\Delta < 0$ (since leading coefficient $= 1 > 0$).

$$\Delta = (-2k)^2 - 4(k^2 + k - 3) = 4k^2 - 4k^2 - 4k + 12 = -4k + 12$$

$\Delta < 0 \implies -4k + 12 < 0 \implies k > 3$.

(b) Completing the square: $f(x) = (x - k)^2 + k^2 + k - 3 - k^2 = (x - k)^2 + k - 3$.

Minimum value $= k - 3 = -1 \implies k = 2$.

---

### DSE-4

Solve the inequality $\dfrac{x^2 - 5x + 6}{x^2 - 4} \geq 0$.

**Solution:**

Factorise: $\dfrac{(x-2)(x-3)}{(x-2)(x+2)} = \dfrac{x - 3}{x + 2}$Provided $x \neq 2$.

Critical values: $x = -2$ (excluded, denominator zero) and $x = 3$ (included, numerator zero). Also
$x = 2$ is excluded (denominator zero in original).

Sign chart for $\dfrac{x - 3}{x + 2}$:

| Interval     | Test      | Sign |
| ------------ | --------- | ---- |
| $x < -2$     | $x = -3$  | $+$  |
| $-2 < x < 2$ | $x = 0$   | $-$  |
| $2 < x < 3$  | $x = 2.5$ | $-$  |
| $x > 3$      | $x = 4$   | $+$  |

The expression is non-negative for $x < -2$ or $x \geq 3$Excluding $x = 2$.

Solution: $x \in (-\infty,\; -2) \cup [3,\; \infty)$.

---

### DSE-5

Given that the equation $2x^2 + 4x + k = 0$ has roots $\alpha$ and $\beta$:

(a) Express $\dfrac{1}{\alpha} + \dfrac{1}{\beta}$ in terms of $k$. (2 marks) (b) Find the value of
$k$ such that $\dfrac{1}{\alpha^2} + \dfrac{1}{\beta^2} = 1$. (4 marks)

**Solution:**

(a) $\alpha + \beta = -2$, $\alpha\beta = \dfrac{k}{2}$.

$$\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{-2}{k/2} = -\frac{4}{k}$$

(b)
$\dfrac{1}{\alpha^2} + \dfrac{1}{\beta^2} = \left(\dfrac{1}{\alpha} + \dfrac{1}{\beta}\right)^2 - \dfrac{2}{\alpha\beta} = \dfrac{16}{k^2} - \dfrac{4}{k}$.

Setting equal to 1:

$$\frac{16}{k^2} - \frac{4}{k} = 1$$

$$16 - 4k = k^2$$

$$k^2 + 4k - 16 = 0$$

$$k = \frac{-4 \pm \sqrt{16 + 64}}{2} = \frac{-4 \pm \sqrt{80}}{2} = -2 \pm 2\sqrt{5}$$

Both are valid provided the original equation has real roots: $\Delta = 16 - 8k > 0 \implies k < 2$.
Since $-2 + 2\sqrt{5} \approx 2.47 > 2$Only $k = -2 - 2\sqrt{5}$ gives real roots. Check:
$\Delta = 16 - 8(-2 - 2\sqrt{5}) = 16 + 16 + 16\sqrt{5} = 32 + 16\sqrt{5} > 0$. Both values give
$\Delta > 0$So both are valid.
