---
title: Equations and Inequalities
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: equations-and-inequalities
---

## Board Coverage

| Board      | Paper   | Notes                                       |
| ---------- | ------- | ------------------------------------------- |
| AQA        | Paper 1 | Simultaneous equations, inequalities        |
| Edexcel    | P1      | Linear and quadratic simultaneous equations |
| OCR (A)    | Paper 1 | Set notation for solutions                  |
| CIE (9709) | P1      | Simultaneous equations, inequalities        |

---

## 1. Linear Simultaneous Equations

We consider systems of two equations in two unknowns. The standard methods are substitution and elimination.

**Theorem.** The system

$$
\begin{aligned}
a_1 x + b_1 y &= c_1 \\
a_2 x + b_2 y &= c_2
\end{aligned}
$$

has:

- A **unique solution** if $a_1 b_2 - a_2 b_1 \neq 0$ (the lines are not parallel);
- **No solution** if $a_1 b_2 - a_2 b_1 = 0$ and the equations are inconsistent (parallel distinct lines);
- **Infinitely many solutions** if $a_1 b_2 - a_2 b_1 = 0$ and the equations are consistent (coincident lines).

_Proof._ By elimination. Multiply the first equation by $b_2$ and the second by $b_1$:

$$
\begin{aligned}
a_1 b_2 x + b_1 b_2 y &= c_1 b_2 \\
a_2 b_1 x + b_1 b_2 y &= c_2 b_1
\end{aligned}
$$

Subtracting: $(a_1 b_2 - a_2 b_1)x = c_1 b_2 - c_2 b_1$.

If $a_1 b_2 - a_2 b_1 \neq 0$, we obtain a unique $x$. Similarly for $y$.

If $a_1 b_2 - a_2 b_1 = 0$, then either $c_1 b_2 - c_2 b_1 = 0$ (infinitely many solutions) or $c_1 b_2 - c_2 b_1 \neq 0$ (no solution). $\blacksquare$

_Intuition._ The quantity $a_1 b_2 - a_2 b_1$ is the _determinant_ of the coefficient matrix. Geometrically, two lines in the plane either intersect (unique solution), are parallel but distinct (no solution), or coincide (infinitely many solutions).

<details>
<summary>Example</summary>
<p>

Solve:

$$
\begin{aligned}
3x + 2y &= 12 \quad \text{--- (1)} \\
5x - 3y &= 1 \quad \text{--- (2)}
\end{aligned}
$$

Multiply (1) by 3 and (2) by 2:

$$
\begin{aligned}
9x + 6y &= 36 \\
10x - 6y &= 2
\end{aligned}
$$

Add: $19x = 38$, so $x = 2$.

Substitute into (1): $6 + 2y = 12$, so $y = 3$.

Solution: $x = 2$, $y = 3$.

</p>
</details>

---

## 2. Linear-Quadratic Simultaneous Equations

When one equation is linear and the other is quadratic (or of higher degree), we use **substitution**.

**Method.**

1. From the linear equation, express one variable in terms of the other.
2. Substitute into the quadratic equation.
3. Solve the resulting quadratic.
4. Back-substitute to find both variables.

The discriminant of the resulting quadratic determines the number of intersection points.

<details>
<summary>Example</summary>
<p>

Solve:

$$
\begin{aligned}
y &= 2x - 1 \\
x^2 + y^2 &= 25
\end{aligned}
$$

Substitute $y = 2x - 1$ into $x^2 + y^2 = 25$:

$$
\begin{aligned}
x^2 + (2x - 1)^2 &= 25 \\
x^2 + 4x^2 - 4x + 1 &= 25 \\
5x^2 - 4x - 24 &= 0
\end{aligned}
$$

$$x = \frac{4 \pm \sqrt{16 + 480}}{10} = \frac{4 \pm \sqrt{496}}{10} = \frac{4 \pm 4\sqrt{31}}{10} = \frac{2 \pm 2\sqrt{31}}{5}$$

$\Delta = 496 > 0$, so the line intersects the circle at two points.

</p>
</details>

:::tip
Always substitute the _linear_ equation into the _quadratic_ one. The reverse would create a quadratic in both variables, which is harder to solve.
:::

---

## 3. Algebraic Inequalities

### 3.1 Linear Inequalities

The rules for manipulating inequalities are the same as for equations, with one crucial exception.

**Theorem (Order-Reversing Property).** If $a < b$ and $c < 0$, then $ac > bc$.

_Proof._ From $a < b$, we have $b - a > 0$. Since $c < 0$ and $b - a > 0$: $c(b - a) < 0$ (product of positive and negative). So $cb - ca < 0$, giving $ca > cb$. $\blacksquare$

**Corollary.** Multiplying or dividing both sides of an inequality by a negative number reverses the inequality.

:::warning
The most common error in inequalities is forgetting to reverse the sign when multiplying/dividing by a negative number. Always check the sign of the multiplier before proceeding.
:::

### 3.2 Quadratic Inequalities

See [Quadratics](./02-quadratics.md), Section 6.

### 3.3 Inequalities Involving Fractions

When an inequality involves fractions, multiply through by the square of the denominator (which is always non-negative, so the inequality direction is preserved) or use a sign chart.

<details>
<summary>Example</summary>
<p>

Solve $\frac{2x - 1}{x + 3} \geq 1$.

$$
\begin{aligned}
\frac{2x - 1}{x + 3} - 1 &\geq 0 \\
\frac{2x - 1 - (x + 3)}{x + 3} &\geq 0 \\
\frac{x - 4}{x + 3} &\geq 0
\end{aligned}
$$

Critical values: $x = 4$ (zero of numerator) and $x = -3$ (zero of denominator, undefined).

Sign chart:

| Interval     | $x - 4$ | $x + 3$ | Quotient |
| ------------ | ------- | ------- | -------- |
| $x < -3$     | $-$     | $-$     | $+$      |
| $-3 < x < 4$ | $-$     | $+$     | $-$      |
| $x > 4$      | $+$     | $+$     | $+$      |

The quotient is $\geq 0$ when $x < -3$ or $x \geq 4$.

Solution: $x \in (-\infty, -3) \cup [4, \infty)$.

</p>
</details>

---

## 4. Graphical Inequalities

### 4.1 Regions Defined by Inequalities

To represent $ax + by + c \geq 0$ graphically:

1. Draw the line $ax + by + c = 0$.
2. Test a point not on the line (usually the origin).
3. If the point satisfies the inequality, shade the region containing it.
4. If the point does not satisfy the inequality, shade the other region.
5. Use a **solid line** for $\geq$ or $\leq$, and a **dashed line** for $>$ or $<$.

### 4.2 Systems of Inequalities

When multiple inequalities define a region, the solution is the intersection of all individual regions.

<details>
<summary>Example</summary>
<p>

Shade the region defined by:

$$
\begin{aligned}
x + y &\leq 6 \\
x &\geq 0 \\
y &\geq 0 \\
y &\geq 2x
\end{aligned}
$$

This defines a polygon bounded by the lines $x + y = 6$, $x = 0$, $y = 0$, and $y = 2x$. The vertices are $(0, 0)$, $(0, 6)$, and the intersection of $x + y = 6$ with $y = 2x$: $3x = 6$, $x = 2$, $y = 4$. So the third vertex is $(2, 4)$.

</p>
</details>

---

## 5. Rigorous Treatment of Inequality Manipulation

### 5.1 Transitive Property

If $a < b$ and $b < c$, then $a < c$.

_Proof._ $b - a > 0$ and $c - b > 0$. Adding: $(c - b) + (b - a) = c - a > 0$. So $a < c$. $\blacksquare$

### 5.2 Addition Preserves Order

If $a < b$ and $c < d$, then $a + c < b + d$.

_Proof._ $b - a > 0$ and $d - c > 0$. Adding: $(b - a) + (d - c) = (b + d) - (a + c) > 0$. So $a + c < b + d$. $\blacksquare$

### 5.3 Multiplication by Positive Preserves Order

If $a < b$ and $c > 0$, then $ac < bc$.

_Proof._ $b - a > 0$ and $c > 0$. Product: $c(b - a) > 0$, so $cb - ca > 0$, giving $ac < bc$. $\blacksquare$

### 5.4 Reciprocals Reverse Order (for Positive Numbers)

If $0 < a < b$, then $\frac{1}{a} > \frac{1}{b}$.

_Proof._ Since $a, b > 0$ and $a < b$: $\frac{1}{a} - \frac{1}{b} = \frac{b - a}{ab}$. Since $b - a > 0$ and $ab > 0$, the result is positive. So $\frac{1}{a} > \frac{1}{b}$. $\blacksquare$

_Intuition._ Consider $a = 2$, $b = 4$. Then $\frac{1}{2} > \frac{1}{4}$. The smaller the positive number, the larger its reciprocal — like how slicing a cake into more pieces makes each piece smaller.

---

## 6. Problem Set

**Problem 1.** Solve the simultaneous equations $3x + y = 13$ and $x^2 + y^2 = 25$.

<details>
<summary>Solution</summary>
<p>

From (1): $y = 13 - 3x$. Substitute into (2):

$$
\begin{aligned}
x^2 + (13 - 3x)^2 &= 25 \\
x^2 + 169 - 78x + 9x^2 &= 25 \\
10x^2 - 78x + 144 &= 0 \\
5x^2 - 39x + 72 &= 0
\end{aligned}
$$

$$x = \frac{39 \pm \sqrt{1521 - 1440}}{10} = \frac{39 \pm \sqrt{81}}{10} = \frac{39 \pm 9}{10}$$

$x = \frac{48}{10} = \frac{24}{5}$: $y = 13 - \frac{72}{5} = \frac{65 - 72}{5} = -\frac{7}{5}$.

$x = \frac{30}{10} = 3$: $y = 13 - 9 = 4$.

Solutions: $(3, 4)$ and $\left(\frac{24}{5}, -\frac{7}{5}\right)$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Linear-quadratic simultaneous equations](#2-linear-quadratic-simultaneous-equations)

---

**Problem 2.** Solve $\frac{3}{x - 1} > \frac{2}{x + 1}$.

<details>
<summary>Solution</summary>
<p>

$$\frac{3}{x - 1} - \frac{2}{x + 1} > 0$$

$$\frac{3(x + 1) - 2(x - 1)}{(x - 1)(x + 1)} > 0$$

$$\frac{3x + 3 - 2x + 2}{(x - 1)(x + 1)} > 0$$

$$\frac{x + 5}{(x - 1)(x + 1)} > 0$$

Critical values: $x = -5, -1, 1$.

Sign chart:

| Interval      | $x + 5$ | $x - 1$ | $x + 1$ | Quotient |
| ------------- | ------- | ------- | ------- | -------- |
| $x < -5$      | $-$     | $-$     | $-$     | $-$      |
| $-5 < x < -1$ | $+$     | $-$     | $-$     | $+$      |
| $-1 < x < 1$  | $+$     | $-$     | $+$     | $-$      |
| $x > 1$       | $+$     | $+$     | $+$     | $+$      |

Solution: $-5 < x < -1$ or $x > 1$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Inequalities involving fractions](#33-inequalities-involving-fractions)

---

**Problem 3.** Show that the simultaneous equations $x + 2y = 1$ and $2x + 4y = 3$ have no solution.

<details>
<summary>Solution</summary>
<p>

From (1): $x = 1 - 2y$. Substitute into (2):

$$2(1 - 2y) + 4y = 3 \implies 2 - 4y + 4y = 3 \implies 2 = 3$$

This is a contradiction, so there is no solution.

Alternatively: $a_1 b_2 - a_2 b_1 = 1 \times 4 - 2 \times 2 = 0$, so the lines are parallel. Since $c_1 \cdot 2 \neq c_2 \cdot 1$ ($2 \neq 3$), they are distinct parallel lines.

</p>
</details>
<b>If you get this wrong, revise:</b> [Linear simultaneous equations](#1-linear-simultaneous-equations)

---

**Problem 4.** Solve the inequality $x^2 - 2x - 15 \leq 0$.

<details>
<summary>Solution</summary>
<p>

$(x - 5)(x + 3) \leq 0$.

The parabola opens upwards. It is $\leq 0$ between and including the roots:

$$-3 \leq x \leq 5$$

</p>
</details>
<b>If you get this wrong, revise:</b> [Quadratic inequalities](./02-quadratics.md)

---

**Problem 5.** Solve the inequality $\frac{1}{x} \leq \frac{1}{x - 2}$.

<details>
<summary>Solution</summary>
<p>

$$\frac{1}{x} - \frac{1}{x - 2} \leq 0$$

$$\frac{(x - 2) - x}{x(x - 2)} \leq 0$$

$$\frac{-2}{x(x - 2)} \leq 0$$

$$\frac{2}{x(x - 2)} \geq 0$$

Critical values: $x = 0$, $x = 2$.

Sign chart for $x(x - 2)$:

| Interval    | $x$ | $x - 2$ | Product |
| ----------- | --- | ------- | ------- |
| $x < 0$     | $-$ | $-$     | $+$     |
| $0 < x < 2$ | $+$ | $-$     | $-$     |
| $x > 2$     | $+$ | $+$     | $+$     |

So $\frac{2}{x(x-2)} \geq 0$ when $x < 0$ or $x > 2$.

Solution: $x \in (-\infty, 0) \cup (2, \infty)$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Reciprocals reverse order](#54-reciprocals-reverse-order-for-positive-numbers)

---

**Problem 6.** Find the vertices of the region defined by $x \geq 0$, $y \geq 0$, $2x + y \leq 8$, and $x + 2y \leq 8$.

<details>
<summary>Solution</summary>
<p>

Intersection of $2x + y = 8$ and $x + 2y = 8$:

Multiply first by 2: $4x + 2y = 16$. Subtract: $3x = 8$, $x = \frac{8}{3}$.

$y = 8 - 2 \cdot \frac{8}{3} = \frac{24 - 16}{3} = \frac{8}{3}$.

Vertices: $(0, 0)$, $(4, 0)$, $(0, 4)$, and $\left(\frac{8}{3}, \frac{8}{3}\right)$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Graphical inequalities](#4-graphical-inequalities)

---

**Problem 7.** Prove that if $a > b > 0$, then $a^2 > b^2$.

<details>
<summary>Solution</summary>
<p>

Since $a > b > 0$, we have $a - b > 0$ and $a + b > 0$.

$a^2 - b^2 = (a - b)(a + b)$.

Both factors are positive, so their product is positive: $a^2 - b^2 > 0$, hence $a^2 > b^2$. $\blacksquare$

</p>
</details>
<b>If you get this wrong, revise:</b> [Rigorous treatment](#5-rigorous-treatment-of-inequality-manipulation)

---

**Problem 8.** Solve the inequality $|2x - 3| \leq 5$.

<details>
<summary>Solution</summary>
<p>

$|2x - 3| \leq 5$ means $-5 \leq 2x - 3 \leq 5$.

Adding 3: $-2 \leq 2x \leq 8$.

Dividing by 2: $-1 \leq x \leq 4$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Modulus function](./05-functions.md)

---

**Problem 9.** Given that $x^2 + px + q = 0$ has roots $\alpha$ and $\beta$, and $\alpha + \beta = 6$ and $\alpha\beta = 8$, find $p$ and $q$.

<details>
<summary>Solution</summary>
<p>

By Viète's formulas (sum and product of roots): $-p = 6$ and $q = 8$.

So $p = -6$, $q = 8$.

Verification: $x^2 - 6x + 8 = (x - 2)(x - 4) = 0$, giving roots $2$ and $4$ with sum $6$ and product $8$. ✓

</p>
</details>
<b>If you get this wrong, revise:</b> [Quadratics](./02-quadratics.md)

---

**Problem 10.** Solve $x^4 - 5x^2 + 4 = 0$ by treating it as a quadratic in $x^2$.

<details>
<summary>Solution</summary>
<p>

Let $u = x^2$. Then $u^2 - 5u + 4 = 0$.

$(u - 1)(u - 4) = 0$

$u = 1$ or $u = 4$.

$x^2 = 1 \implies x = \pm 1$.

$x^2 = 4 \implies x = \pm 2$.

Solutions: $x = -2, -1, 1, 2$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Quadratic formula](./02-quadratics.md)
