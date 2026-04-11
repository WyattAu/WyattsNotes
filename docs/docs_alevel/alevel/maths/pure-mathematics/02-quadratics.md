---
title: Quadratics
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: quadratics
---

## Board Coverage

| Board      | Paper   | Notes                                             |
| ---------- | ------- | ------------------------------------------------- |
| AQA        | Paper 1 | Completing the square, discriminant, inequalities |
| Edexcel    | P1      | Same core content                                 |
| OCR (A)    | Paper 1 | Includes set notation for solution sets           |
| CIE (9709) | P1      | Quadratic equations, discriminant, inequalities   |

---

## 1. The Quadratic Function

**Definition.** A _quadratic function_ is a function of the form:

$$f(x) = ax^2 + bx + c$$

where $a, b, c \in \mathbb{R}$ and $a \neq 0$.

The graph of $y = ax^2 + bx + c$ is a _parabola_ — a symmetrical U-shaped curve (opening upwards if $a > 0$, downwards if $a < 0$). The axis of symmetry is the vertical line $x = -\frac{b}{2a}$.

---

## 2. Completing the Square

The technique of completing the square rewrites a quadratic in the form $a(x - p)^2 + q$, from which the vertex, axis of symmetry, and extremum are immediately readable.

**Theorem.** Every quadratic $ax^2 + bx + c$ with $a \neq 0$ can be written in the form $a(x - p)^2 + q$ for some $p, q \in \mathbb{R}$.

_Proof._ Factor out $a$ from the first two terms:

$$
\begin{aligned}
ax^2 + bx + c &= a\left(x^2 + \frac{b}{a}x\right) + c
\end{aligned}
$$

We seek to express $x^2 + \frac{b}{a}x$ as a perfect square plus a constant. Recall that:

$$(x + d)^2 = x^2 + 2dx + d^2$$

We need $2d = \frac{b}{a}$, so $d = \frac{b}{2a}$. Then:

$$
\begin{aligned}
x^2 + \frac{b}{a}x &= \left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}
\end{aligned}
$$

Substituting back:

$$
\begin{aligned}
ax^2 + bx + c &= a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}\right] + c \\
&= a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a} + c \\
&= a\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a}
\end{aligned}
$$

Setting $p = -\frac{b}{2a}$ and $q = \frac{4ac - b^2}{4a}$, we have $ax^2 + bx + c = a(x - p)^2 + q$. $\blacksquare$

_Intuition (Geometric)._ Consider the expression $x^2 + bx$. This represents the area of a square of side $x$ plus a rectangle of dimensions $x \times b$. We split the rectangle into two strips of $x \times \frac{b}{2}$, and rearrange to form an L-shape. The "missing corner" to complete the larger square is a small square of side $\frac{b}{2}$, with area $\left(\frac{b}{2}\right)^2 = \frac{b^2}{4}$. We add and subtract this to preserve equality:

$$x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \frac{b^2}{4}$$

<details>
<summary>Example</summary>
Write $2x^2 - 12x + 22$ in completed square form.

$$
\begin{aligned}
2x^2 - 12x + 22 &= 2(x^2 - 6x) + 22 \\
&= 2\left[(x - 3)^2 - 9\right] + 22 \\
&= 2(x - 3)^2 - 18 + 22 \\
&= 2(x - 3)^2 + 4
\end{aligned}
$$

The vertex is $(3, 4)$, and since the coefficient of $(x-3)^2$ is positive, the minimum value is $4$.
</details>

---

## 3. The Quadratic Formula

**Theorem (Quadratic Formula).** The solutions of $ax^2 + bx + c = 0$ (with $a \neq 0$) are:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

_Proof._ We derive this by completing the square on $ax^2 + bx + c = 0$.

$$
\begin{aligned}
ax^2 + bx + c &= 0 \\
x^2 + \frac{b}{a}x &= -\frac{c}{a} \\
\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2} &= -\frac{c}{a} \\
\left(x + \frac{b}{2a}\right)^2 &= \frac{b^2}{4a^2} - \frac{c}{a} \\
\left(x + \frac{b}{2a}\right)^2 &= \frac{b^2 - 4ac}{4a^2} \\
x + \frac{b}{2a} &= \pm\frac{\sqrt{b^2 - 4ac}}{2a} \\
x &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \quad \blacksquare
\end{aligned}
$$

_Intuition._ The quadratic formula is nothing more than completing the square in fully symbolic form. Every step is reversible, so the formula is necessary and sufficient: it gives _all_ solutions and no extraneous ones.

:::info
Edexcel provides the quadratic formula in the formula booklet. AQA and OCR (A) do not — you must memorise it.
:::

:::tip
Before applying the formula, check whether the equation can be solved more easily by factorisation. Always check the discriminant first.
:::

---

## 4. The Discriminant

**Definition.** The _discriminant_ of $ax^2 + bx + c = 0$ is:

$$\Delta = b^2 - 4ac$$

**Theorem.** The nature of the roots of $ax^2 + bx + c = 0$ is determined by the discriminant:

| Condition    | Number of Roots | Nature of Roots                             |
| ------------ | --------------- | ------------------------------------------- |
| $\Delta > 0$ | 2               | Two distinct real roots                     |
| $\Delta = 0$ | 1               | One repeated real root                      |
| $\Delta < 0$ | 0               | No real roots (two complex conjugate roots) |

_Proof._ From the quadratic formula, the roots are $x = \frac{-b \pm \sqrt{\Delta}}{2a}$.

- If $\Delta > 0$: $\sqrt{\Delta}$ is a positive real number, giving two distinct real values.
- If $\Delta = 0$: both roots equal $\frac{-b}{2a}$, a single repeated root.
- If $\Delta < 0$: $\sqrt{\Delta}$ is not a real number, so no real roots exist. (Complex roots exist but are beyond this course.) $\blacksquare$

<details>
<summary>Example</summary>
Find the set of values of $k$ for which $x^2 + 4x + k = 0$ has two distinct real roots.

$$
\begin{aligned}
\Delta &= 16 - 4k > 0 \\
16 - 4k &> 0 \\
k &< 4
\end{aligned}
$$
</details>

---

## 5. Solving Quadratic Equations

### 5.1 By Factorisation

If $ax^2 + bx + c = 0$ can be written as $(px + q)(rx + s) = 0$, then by the zero product property, $x = -q/p$ or $x = -s/r$.

### 5.2 By Completing the Square

Useful when the quadratic doesn't factorise easily and you want to understand the geometry.

### 5.3 By the Formula

Always works (when $\Delta \geq 0$), but can be computationally heavier.

---

## 6. Quadratic Inequalities

Solving $ax^2 + bx + c > 0$ (or $< 0$, $\geq 0$, $\leq 0$) requires understanding the sign of the quadratic across the real line.

**Method.**

1. Find the roots of $ax^2 + bx + c = 0$.
2. Sketch the parabola (knowing whether $a > 0$ or $a < 0$).
3. Read off the regions where the quadratic is positive or negative.

:::warning
A critical error in inequalities: when multiplying or dividing both sides by a negative number, you must **reverse** the inequality sign. This is because multiplication by $-1$ is order-reversing: if $a < b$, then $-a > -b$.
:::

**Theorem.** If $m < 0$ and $a < b$, then $ma > mb$.

_Proof._ From $a < b$, we have $b - a > 0$. Since $m < 0$ and $b - a > 0$, their product $m(b - a) < 0$. So $mb - ma < 0$, giving $ma > mb$. $\blacksquare$

<details>
<summary>Example</summary>
Solve $x^2 - 5x + 6 < 0$.

Factorise: $(x - 2)(x - 3) < 0$.

The parabola opens upwards (coefficient of $x^2$ is positive). It is negative _between_ the roots:

$$2 < x < 3$$
</details>

<details>
<summary>Example</summary>
Solve $\frac{x + 1}{x - 2} \leq 3$.

$$
\begin{aligned}
\frac{x + 1}{x - 2} - 3 &\leq 0 \\
\frac{x + 1 - 3(x - 2)}{x - 2} &\leq 0 \\
\frac{x + 1 - 3x + 6}{x - 2} &\leq 0 \\
\frac{-2x + 7}{x - 2} &\leq 0 \\
\frac{2x - 7}{x - 2} &\geq 0
\end{aligned}
$$

Critical values: $x = \frac{7}{2}$ (numerator zero) and $x = 2$ (denominator zero, undefined).

Sign analysis:

| Interval      | $2x - 7$ | $x - 2$ | Quotient |
| ------------- | -------- | ------- | -------- |
| $x < 2$       | $-$      | $-$     | $+$      |
| $2 < x < 7/2$ | $-$      | $+$     | $-$      |
| $x > 7/2$     | $+$      | $+$     | $+$      |

The quotient is $\geq 0$ when $x \leq \frac{7}{2}$ (including equality) but $x \neq 2$.

Solution: $x \leq \frac{7}{2}$, $x \neq 2$, i.e., $x \in (-\infty, 2) \cup \left[\frac{7}{2}, \infty\right)$.
</details>

---

## 7. Simultaneous Equations (Linear-Quadratic)

When solving a system of one linear and one quadratic equation, we substitute the linear equation into the quadratic.

**Example.** Solve simultaneously:

$$
\begin{aligned}
y &= 2x + 1 \\
y &= x^2 + x - 3
\end{aligned}
$$

Setting them equal:

$$
\begin{aligned}
2x + 1 &= x^2 + x - 3 \\
x^2 - x - 4 &= 0
\end{aligned}
$$

$$x = \frac{1 \pm \sqrt{1 + 16}}{2} = \frac{1 \pm \sqrt{17}}{2}$$

The discriminant is positive, confirming two intersection points — which corresponds geometrically to the line cutting the parabola twice.

:::tip
The discriminant of the resulting quadratic tells you the number of intersection points between a line and a parabola: $\Delta > 0$ means 2 intersections, $\Delta = 0$ means tangent, $\Delta < 0$ means no intersection.
:::

---

## 8. Problem Set

**Problem 1.** Write $3x^2 - 12x + 7$ in the form $a(x - p)^2 + q$, and hence state the minimum value and the value of $x$ at which it occurs.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
3x^2 - 12x + 7 &= 3(x^2 - 4x) + 7 \\
&= 3\left[(x - 2)^2 - 4\right] + 7 \\
&= 3(x - 2)^2 - 12 + 7 \\
&= 3(x - 2)^2 - 5
\end{aligned}
$$

Minimum value is $-5$, occurring at $x = 2$.
</details>
<b>If you get this wrong, revise:</b> [Completing the square](#2-completing-the-square)

---

**Problem 2.** Solve $2x^2 + 5x - 4 = 0$, giving your answer in the form $a \pm b\sqrt{c}$.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
x &= \frac{-5 \pm \sqrt{25 + 32}}{4} = \frac{-5 \pm \sqrt{57}}{4}
\end{aligned}
$$
</details>
<b>If you get this wrong, revise:</b> [Quadratic formula](#3-the-quadratic-formula)

---

**Problem 3.** Find the range of values of $k$ for which $kx^2 - 6x + 4 = 0$ has real roots.

<details>
<summary>Solution</summary>
We need $\Delta \geq 0$:

$$
\begin{aligned}
36 - 16k &\geq 0 \\
k &\leq \frac{36}{16} = \frac{9}{4}
\end{aligned}
$$

Note: $k \neq 0$ (otherwise it's not quadratic). If $k = 0$, the equation $-6x + 4 = 0$ still has a real root, so the condition is $k \leq \frac{9}{4}$ with $k$ real (including $k = 0$, which gives a linear equation).
</details>
<b>If you get this wrong, revise:</b> [Discriminant](#4-the-discriminant)

---

**Problem 4.** Solve the inequality $x^2 - 3x - 10 > 0$.

<details>
<summary>Solution</summary>
Factorise: $(x - 5)(x + 2) > 0$.

The parabola opens upwards. It is positive outside the roots:

$$x < -2 \quad \text{or} \quad x > 5$$

In set notation: $x \in (-\infty, -2) \cup (5, \infty)$.
</details>
<b>If you get this wrong, revise:</b> [Quadratic inequalities](#6-quadratic-inequalities)

---

**Problem 5.** Solve the simultaneous equations $y = x - 1$ and $x^2 + y^2 = 13$.

<details>
<summary>Solution</summary>
Substitute $y = x - 1$ into $x^2 + (x-1)^2 = 13$:

$$
\begin{aligned}
x^2 + x^2 - 2x + 1 &= 13 \\
2x^2 - 2x - 12 &= 0 \\
x^2 - x - 6 &= 0 \\
(x - 3)(x + 2) &= 0
\end{aligned}
$$

$x = 3$: $y = 2$. Point: $(3, 2)$.

$x = -2$: $y = -3$. Point: $(-2, -3)$.
</details>
<b>If you get this wrong, revise:</b> [Simultaneous equations](#7-simultaneous-equations-linear-quadratic)

---

**Problem 6.** The function $f(x) = px^2 + qx + r$ has a minimum value of $-5$ at $x = 2$, and passes through the point $(0, 7)$. Find $p$, $q$, and $r$.

<details>
<summary>Solution</summary>
In completed square form: $f(x) = p(x - 2)^2 - 5$.

Since $f(0) = 7$:

$$
\begin{aligned}
p(0 - 2)^2 - 5 &= 7 \\
4p &= 12 \\
p &= 3
\end{aligned}
$$

So $f(x) = 3(x - 2)^2 - 5 = 3(x^2 - 4x + 4) - 5 = 3x^2 - 12x + 7$.

Therefore $p = 3$, $q = -12$, $r = 7$.
</details>
<b>If you get this wrong, revise:</b> [Completing the square](#2-completing-the-square)

---

**Problem 7.** Show that $x^2 + 4x + 9 > 0$ for all real $x$.

<details>
<summary>Solution</summary>
Completing the square:

$$x^2 + 4x + 9 = (x + 2)^2 + 5$$

Since $(x+2)^2 \geq 0$ for all $x$, we have $(x+2)^2 + 5 \geq 5 > 0$ for all $x$. $\blacksquare$

Alternatively: $\Delta = 16 - 36 = -20 < 0$, and since the coefficient of $x^2$ is positive, the parabola is always above the $x$-axis.
</details>
<b>If you get this wrong, revise:</b> [Discriminant](#4-the-discriminant)

---

**Problem 8.** Express $\frac{2x^2 - 8x + 5}{x - 3}$ in the form $Ax + B + \frac{C}{x - 3}$.

<details>
<summary>Solution</summary>
By polynomial division:

$2x^2 \div x = 2x$. Multiply: $2x(x-3) = 2x^2 - 6x$. Subtract: $-2x + 5$.

$-2x \div x = -2$. Multiply: $-2(x-3) = -2x + 6$. Subtract: $-1$.

So $\frac{2x^2 - 8x + 5}{x - 3} = 2x - 2 - \frac{1}{x - 3}$.

Therefore $A = 2$, $B = -2$, $C = -1$.
</details>
<b>If you get this wrong, revise:</b> [Polynomial division](./01-algebraic-expressions.md)

---

**Problem 9.** Find the equation of the tangent to the curve $y = x^2 - 4x + 3$ at the point where $x = 1$.

<details>
<summary>Solution</summary>
At $x = 1$: $y = 1 - 4 + 3 = 0$. The point is $(1, 0)$.

The gradient is $\frac{dy}{dx} = 2x - 4$. At $x = 1$: $\frac{dy}{dx} = -2$.

Using $y - y_1 = m(x - x_1)$:

$$y - 0 = -2(x - 1) \implies y = -2x + 2$$
</details>
<b>If you get this wrong, revise:</b> [Differentiation](./10-differentiation.md)

---

**Problem 10.** Prove that the equation $x^2 + 2kx + k^2 + 1 = 0$ has no real roots for any real value of $k$.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
\Delta &= (2k)^2 - 4(1)(k^2 + 1) \\
&= 4k^2 - 4k^2 - 4 \\
&= -4 < 0
\end{aligned}
$$

Since $\Delta = -4 < 0$ for all $k \in \mathbb{R}$, there are no real roots. $\blacksquare$
</details>
<b>If you get this wrong, revise:</b> [Discriminant](#4-the-discriminant)

---

**Problem 11.** A rectangle has length $(x + 5)$ cm and width $(x + 2)$ cm. The area is $30\text{ cm}^2$. Find $x$.

<details>
<summary>Solution</summary>
$$(x + 5)(x + 2) = 30$$
$$x^2 + 7x + 10 = 30$$
$$x^2 + 7x - 20 = 0$$

$$x = \frac{-7 \pm \sqrt{49 + 80}}{2} = \frac{-7 \pm \sqrt{129}}{2}$$

Since length and width must be positive, $x > -2$, so:

$$x = \frac{-7 + \sqrt{129}}{2} \approx 2.18$$
</details>
<b>If you get this wrong, revise:</b> [Quadratic formula](#3-the-quadratic-formula)

---

**Problem 12.** Given $f(x) = x^2 - 6x + 14$, find the range of $f$ and solve $f(x) \leq 10$.

<details>
<summary>Solution</summary>
$$f(x) = (x - 3)^2 + 5$$

Since $(x - 3)^2 \geq 0$, we have $f(x) \geq 5$. Range: $f(x) \in [5, \infty)$.

For $f(x) \leq 10$:

$$(x - 3)^2 + 5 \leq 10 \implies (x - 3)^2 \leq 5 \implies -\sqrt{5} \leq x - 3 \leq \sqrt{5}$$

$$3 - \sqrt{5} \leq x \leq 3 + \sqrt{5}$$
</details>
<b>If you get this wrong, revise:</b> [Completing the square](#2-completing-the-square) and [Quadratic inequalities](#6-quadratic-inequalities)
