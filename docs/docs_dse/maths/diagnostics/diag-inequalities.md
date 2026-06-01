---
title: 'Inequalities -- Diagnostic Tests'
description: 'DSE Maths Inequalities -- Diagnostic Tests notes covering key definitions, core concepts, worked examples, and practice questions for comprehensive revision.'
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

Do NOT cross-multiply, because the sign of $(2 - x)$ is unknown.

Sign chart:

| Interval               | $3x - 1$ | $2 - x$ | Quotient |
| ---------------------- | -------- | ------- | -------- |
| $x < \dfrac{1}{3}$     | $-$      | $+$     | $-$      |
| $\dfrac{1}{3} < x < 2$ | $+$      | $+$     | $+$      |
| $x > 2$                | $+$      | $-$     | $-$      |

At $x = \dfrac{1}{3}$: quotient is $0$ (included since $\geq 0$).

At $x = 2$: undefined (excluded).

Solution: $x \in \left[\dfrac{1}{3},\; 2\right)$.

A common mistake is cross-multiplying by $(2 - x)$ without considering the sign, which would give
the wrong inequality direction for $x > 2$.

---

### UT-2: Absolute Value Inequality

**Question:**

Solve $|2x - 5| \lt 3x + 1$.

**Solution:**

Since the RHS involves $x$We cannot split into two cases without considering the sign of the RHS.

**Case 1:** $3x + 1 \leq 0$I.e. $x \leq -\dfrac{1}{3}$.

$|2x - 5| \geq 0$ and $3x + 1 \leq 0$So $|2x - 5| \geq 0 > 3x + 1$ is possible only if
$|2x - 5| < 3x + 1$. But $3x + 1 \leq 0$ while $|2x - 5| \geq 0$So $|2x - 5| < 3x + 1$ is impossible
when $3x + 1 \leq 0$ (since LHS $\geq 0$ and RHS $\leq 0$Equality requires both zero, but
$|2x-5|=0 \implies x=5/2 \not\leq -1/3$).

No solution in this case.

**Case 2:** $3x + 1 > 0$I.e. $x > -\dfrac{1}{3}$.

$$-(3x + 1) < 2x - 5 < 3x + 1$$

Left inequality: $-3x - 1 < 2x - 5 \implies -5x < -4 \implies x > \dfrac{4}{5}$.

Right inequality: $2x - 5 < 3x + 1 \implies -x < 6 \implies x > -6$ (always true when
$x > -\dfrac{1}{3}$).

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

Solution: $-1 < x < \dfrac{5}{2}$I.e. $x \in (-1,\; \tfrac{5}{2})$.

A common mistake is forgetting to reverse the inequality when factoring out the negative sign.

---

### UT-4: System of Linear Inequalities — Feasible Region

**Question:**

Find the region satisfying all of the following:

$$x + y \leq 6, \quad 2x - y \geq 1, \quad x \geq 0, \quad y \geq 0$$

Find the maximum value of $P = 3x + 2y$ in this region.

**Solution:**

Corner points of the feasible region:

1. Intersection of $x + y = 6$ and $2x - y = 1$: adding gives $3x = 7$So
   $x = \dfrac{7}{3}$, $y = 6 - \dfrac{7}{3} = \dfrac{11}{3}$. Point:
   $\left(\dfrac{7}{3},\; \dfrac{11}{3}\right)$.

2. Intersection of $2x - y = 1$ with $y = 0$: $2x = 1$, $x = \dfrac{1}{2}$. Point:
   $\left(\dfrac{1}{2},\; 0\right)$.

3. Intersection of $x + y = 6$ with $x = 0$: $y = 6$. Point: $(0,\; 6)$.

4. Origin: $(0,\; 0)$.

Evaluate $P = 3x + 2y$:

- $\left(\dfrac{7}{3},\; \dfrac{11}{3}\right)$:
  $P = 7 + \dfrac{22}{3} = \dfrac{43}{3} \approx 14.33$
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

| Interval     | Test     | Sign |
| ------------ | -------- | ---- |
| $x < -1$     | $x = -2$ | $-$  |
| $-1 < x < 1$ | $x = 0$  | $+$  |
| $1 < x < 3$  | $x = 2$  | $-$  |
| $x > 3$      | $x = 4$  | $+$  |

Including zeros ($x = 3$), excluding poles ($x = -1, 1$):

Solution: $(-1,\; 1) \cup [3,\; \infty)$.

---

## Integration Tests

> Tests synthesis of inequalities with other topics.

### IT-1: Inequalities and Quadratics (with Quadratics)

**Question:**

Find the range of values of $k$ such that the quadratic expression $x^2 + 2kx + k^2 - 2k + 5$ is
always positive for all real $x$.

**Solution:**

The expression is always positive if the discriminant is negative (since the leading coefficient
$1 > 0$).

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

Solution: $x \leq 0$ or $x \geq 2$I.e. $x \in (-\infty,\; 0] \cup [2,\; \infty)$.

---

### IT-3: Inequalities and Logarithms (with Logarithms)

**Question:**

Solve $\log_2(x + 3) \lt \log_2(5 - x)$.

**Solution:**

Since the logarithm function is strictly increasing, we can compare arguments directly:

$$x + 3 < 5 - x$$

$$2x < 2 \implies x < 1$$

But we also need the domain: $x + 3 > 0$ and $5 - x > 0$Giving $-3 < x < 5$.

Combining: $-3 < x < 1$.

Solution: $x \in (-3,\; 1)$.

A common mistake is forgetting the domain restriction. If the base were between 0 and 1, the
inequality would reverse.

---

## Worked Examples

### WE-1: Solving a System of Inequalities

**Question:**

Solve the simultaneous inequalities:

$$2x + 3 > x + 7 \quad \text{and} \quad 3x - 1 \leq 2x + 5$$

**Solution:**

First inequality: $2x + 3 > x + 7 \implies x > 4$.

Second inequality: $3x - 1 \leq 2x + 5 \implies x \leq 6$.

Both must hold: $4 < x \leq 6$I.e. $x \in (4,\; 6]$.

---

### WE-2: Quadratic Inequality with Equal Roots

**Question:**

Find the range of values of $k$ for which $x^2 - 6x + k > 0$ for all real $x$.

**Solution:**

For the quadratic to be always positive (since the leading coefficient $1 > 0$), we need
$\Delta < 0$.

$$\Delta = 36 - 4k < 0 \implies k > 9$$

When $k = 9$: $\Delta = 0$And $x^2 - 6x + 9 = (x-3)^2 \geq 0$. The inequality is strict ($>$), so
$x = 3$ gives $0 \not> 0$.

Therefore $k > 9$ (strictly).

---

### WE-3: Absolute Value Inequality

**Question:**

Solve $|3x - 4| \leq 8$.

**Solution:**

$$-8 \leq 3x - 4 \leq 8$$

$$-4 \leq 3x \leq 12$$

$$-\frac{4}{3} \leq x \leq 4$$

Solution: $x \in \left[-\dfrac{4}{3},\; 4\right]$.

---

### WE-4: Inequality with Rational Expression

**Question:**

Solve $\dfrac{x^2 - 1}{x^2 + 1} > 0$.

**Solution:**

The denominator $x^2 + 1 > 0$ for all real $x$ (always positive).

Therefore the sign of the expression is determined by the numerator alone:

$x^2 - 1 > 0 \implies (x-1)(x+1) > 0 \implies x < -1$ or $x > 1$.

Solution: $x \in (-\infty,\; -1) \cup (1,\; \infty)$.

---

### WE-5: Non-Linear Inequality

**Question:**

Solve $x^3 - x^2 - x + 1 \leq 0$.

**Solution:**

$$x^3 - x^2 - x + 1 = x^2(x - 1) - (x - 1) = (x - 1)(x^2 - 1) = (x - 1)^2(x + 1)$$

Critical values: $x = 1$ (double root) and $x = -1$.

Sign chart:

| Interval     | Test     | $(x-1)^2$ | $(x+1)$ | Product |
| ------------ | -------- | --------- | ------- | ------- |
| $x < -1$     | $x = -2$ | $+$       | $-$     | $-$     |
| $-1 < x < 1$ | $x = 0$  | $+$       | $+$     | $+$     |
| $x > 1$      | $x = 2$  | $+$       | $+$     | $+$     |

The expression is non-positive when $x \leq -1$ or $x = 1$.

Solution: $x \in (-\infty,\; -1] \cup \{1\}$.

---

### WE-6: Quadratic Inequality with No Real Roots

**Question:**

Show that $x^2 + 4x + 5 > 0$ for all real $x$.

**Solution:**

$$\Delta = 16 - 20 = -4 < 0$$

Since the discriminant is negative and the leading coefficient is positive, the quadratic is always
positive.

Alternatively, completing the square:

$$x^2 + 4x + 5 = (x + 2)^2 + 1 \geq 1 > 0$$

---

### WE-7: Inequality Involving Square Roots

**Question:**

Solve $\sqrt{2x + 1} \leq x + 1$.

**Solution:**

Domain: $2x + 1 \geq 0 \implies x \geq -\dfrac{1}{2}$. Also RHS $= x + 1$.

Since $\sqrt{2x+1} \geq 0$We need $x + 1 \geq 0$I.e. $x \geq -1$.

Combined domain: $x \geq -\dfrac{1}{2}$.

Squaring both sides: $2x + 1 \leq x^2 + 2x + 1 \implies 0 \leq x^2$Which is true for all real $x$.

So the solution is the domain: $x \in \left[-\dfrac{1}{2},\; \infty\right)$.

**DSE Exam Technique:** When squaring both sides of an inequality, always check the domain and the
sign of both sides. Squaring is only valid when both sides are non-negative.

---

### WE-8: Product of Two Linear Inequalities

**Question:**

Solve $(2x - 3)(x + 4) > 0$.

**Solution:**

Critical values: $x = \dfrac{3}{2}$ and $x = -4$.

Since the quadratic opens upward (leading coefficient $= 2 > 0$):

The product is positive outside the roots.

Solution: $x < -4$ or $x > \dfrac{3}{2}$I.e.
$x \in (-\infty,\; -4) \cup \left(\dfrac{3}{2},\; \infty\right)$.

---

## Common Pitfalls

1. **Forgetting to flip the inequality when multiplying or dividing by a negative number.** If you
   multiply or divide both sides of an inequality by a negative quantity, you MUST reverse the
   inequality sign. This is the single most common error in inequality problems.

2. **Cross-multiplying without considering the sign of the denominator.** When solving
   $\dfrac{A}{B} > 0$You cannot write $A > 0$ because the sign depends on $B$. Use a sign chart or
   consider cases.

3. **Including values that make the denominator zero.** When solving rational inequalities, the
   values that make the denominator zero must be EXCLUDED from the solution set, even if the
   numerator is also zero at those points.

4. **Incorrectly handling double roots.** A double root does not change the sign of the expression
   (it "bounces off" the axis). So at a double root, the expression equals zero, and the inequality
   direction determines whether to include or exclude it.

5. **Not checking the domain before squaring.** When solving $\sqrt{f(x)} > g(x)$You must first
   establish that $f(x) \geq 0$ and $g(x) \geq 0$ before squaring both sides. Squaring an inequality
   where one side is negative gives incorrect results.

---

## DSE Exam-Style Questions

### DSE-1

Find the range of values of $x$ for which:

(a) $x^2 - 5x + 6 < 0$ (2 marks) (b) $2x^2 + 3x - 2 \geq 0$ (3 marks) (c) Both inequalities in (a)
and (b) are satisfied simultaneously. (2 marks)

**Solution:**

(a) $(x - 2)(x - 3) < 0 \implies 2 < x < 3$I.e. $x \in (2,\; 3)$.

(b) $(2x - 1)(x + 2) \geq 0$.

Critical values: $x = \dfrac{1}{2}$ and $x = -2$.

Opens upward: $x \leq -2$ or $x \geq \dfrac{1}{2}$I.e.
$x \in (-\infty,\; -2] \cup \left[\dfrac{1}{2},\; \infty\right)$.

(c) Intersection of $(2,\; 3)$ and $(-\infty,\; -2] \cup \left[\dfrac{1}{2},\; \infty\right)$:

$(2,\; 3) \cap \left[\dfrac{1}{2},\; \infty\right) = (2,\; 3)$.

Solution: $x \in (2,\; 3)$.

---

### DSE-2

Find the range of values of $k$ for which the equation $x^2 + 2kx + k^2 + 3 = 0$ has:

(a) Two distinct real roots. (2 marks) (b) No real roots. (1 mark) (c) Real roots that are both
positive. (4 marks)

**Solution:**

(a) $\Delta = (2k)^2 - 4(k^2 + 3) = 4k^2 - 4k^2 - 12 = -12 < 0$ for all $k$.

There are NEVER two distinct real roots. The answer is: no such value of $k$ exists.

(b) $\Delta < 0$ for all $k$So there are no real roots for all values of $k$.

(c) Since the equation never has real roots, there is no value of $k$ for which both roots are
positive.

---

### DSE-3

Solve the inequality $\dfrac{x^2 - 4x + 3}{x^2 - 9} \leq 0$. (5 marks)

**Solution:**

$$\frac{(x-1)(x-3)}{(x-3)(x+3)} = \frac{x - 1}{x + 3}$$

Provided $x \neq 3$ (makes denominator zero in original) and $x \neq -3$.

$\dfrac{x - 1}{x + 3} \leq 0$.

Critical values: $x = -3$ (excluded) and $x = 1$ (included).

Sign chart:

| Interval     | Test     | Sign |
| ------------ | -------- | ---- |
| $x < -3$     | $x = -4$ | $+$  |
| $-3 < x < 1$ | $x = 0$  | $-$  |
| $x > 1$      | $x = 2$  | $+$  |

Including $x = 1$Excluding $x = -3$ and $x = 3$.

Solution: $x \in (-3,\; 1] \cup (3,\; \infty)$? No -- checking: for
$x > 3$, $\dfrac{x-1}{x+3} > 0$Which does not satisfy $\leq 0$.

Correct solution: $x \in (-3,\; 1]$.

---

### DSE-4

Solve $|x - 3| > |2x + 1|$. (4 marks)

**Solution:**

Square both sides (both sides are non-negative after taking absolute value):

$$(x - 3)^2 > (2x + 1)^2$$

$$x^2 - 6x + 9 > 4x^2 + 4x + 1$$

$$0 > 3x^2 + 10x - 8$$

$$3x^2 + 10x - 8 < 0$$

$$(3x - 2)(x + 4) < 0$$

$$-4 < x < \frac{2}{3}$$

Solution: $x \in \left(-4,\; \dfrac{2}{3}\right)$.

---

### DSE-5

Find the range of values of $x$ for which both $\dfrac{x}{x - 2} > 0$ and $x^2 - 4x + 3 < 0$ are
satisfied. (5 marks)

**Solution:**

First inequality: $\dfrac{x}{x - 2} > 0$.

Critical values: $x = 0$ and $x = 2$.

Sign chart: positive for $x < 0$ and $x > 2$.

Solution: $x \in (-\infty,\; 0) \cup (2,\; \infty)$.

Second inequality: $(x - 1)(x - 3) < 0 \implies 1 < x < 3$.

Solution: $x \in (1,\; 3)$.

Intersection: $((-\infty,\; 0) \cup (2,\; \infty)) \cap (1,\; 3) = (2,\; 3)$.

Solution: $x \in (2,\; 3)$.
