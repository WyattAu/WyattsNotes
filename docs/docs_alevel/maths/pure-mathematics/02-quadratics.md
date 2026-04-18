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

<hr />

## 1. The Quadratic Function

**Definition.** A _quadratic function_ is a function of the form:

$$f(x) = ax^2 + bx + c$$

where $a, b, c \in \mathbb{R}$ and $a \neq 0$.

The graph of $y = ax^2 + bx + c$ is a _parabola_ — a symmetrical U-shaped curve (opening upwards if
$a > 0$, downwards if $a < 0$). The axis of symmetry is the vertical line $x = -\frac{b}{2a}$.

<hr />

## 2. Completing the Square

The technique of completing the square rewrites a quadratic in the form $a(x - p)^2 + q$, from which
the vertex, axis of symmetry, and extremum are immediately readable.

**Theorem.** Every quadratic $ax^2 + bx + c$ with $a \neq 0$ can be written in the form
$a(x - p)^2 + q$ for some $p, q \in \mathbb{R}$.

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

Setting $p = -\frac{b}{2a}$ and $q = \frac{4ac - b^2}{4a}$, we have
$ax^2 + bx + c = a(x - p)^2 + q$. $\blacksquare$

_Intuition (Geometric)._ Consider the expression $x^2 + bx$. This represents the area of a square of
side $x$ plus a rectangle of dimensions $x \times b$. We split the rectangle into two strips of
$x \times \frac{b}{2}$, and rearrange to form an L-shape. The "missing corner" to complete the
larger square is a small square of side $\frac{b}{2}$, with area
$\left(\frac{b}{2}\right)^2 = \frac{b^2}{4}$. We add and subtract this to preserve equality:

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

The vertex is $(3, 4)$, and since the coefficient of $(x-3)^2$ is positive, the minimum value is
$4$.

</details>

<hr />

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

_Intuition._ The quadratic formula is nothing more than completing the square in fully symbolic
form. Every step is reversible, so the formula is necessary and sufficient: it gives _all_ solutions
and no extraneous ones.

:::info
Edexcel provides the quadratic formula in the formula booklet. AQA and OCR (A) do not — you
must memorise it.
:::

:::tip
Before applying the formula, check whether the equation can be solved more easily by
factorisation. Always check the discriminant first.
:::

<hr />

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
- If $\Delta < 0$: $\sqrt{\Delta}$ is not a real number, so no real roots exist. (Complex roots
  exist but are beyond this course.) $\blacksquare$

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

### 4.1 Discriminant and Graph Shape

The discriminant directly determines the position of the parabola relative to the $x$-axis.

**Theorem (Discriminant and Graph Position).** Let $f(x) = ax^2 + bx + c$ with $a \neq 0$. In
completed-square form, the extremum value is $f\left(-\frac{b}{2a}\right) = -\frac{\Delta}{4a}$.
Therefore:

- $\Delta > 0$: the extremum lies on the opposite side of the $x$-axis from the direction the
  parabola opens, so the graph crosses the $x$-axis at two distinct points.
- $\Delta = 0$: the vertex lies on the $x$-axis; the graph touches the axis at exactly one point.
- $\Delta < 0$: the vertex lies on the same side of the $x$-axis as the direction the parabola
  opens, so the graph never meets the axis.

Furthermore, when $\Delta < 0$:

| Condition                | Conclusion                                                      |
| ------------------------ | --------------------------------------------------------------- |
| $a > 0$ and $\Delta < 0$ | $f(x) > 0$ for all $x \in \mathbb{R}$ (parabola entirely above) |
| $a < 0$ and $\Delta < 0$ | $f(x) < 0$ for all $x \in \mathbb{R}$ (parabola entirely below) |

_Proof._ From the completed-square form
$f(x) = a\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a}$, the minimum value (when $a > 0$) or
maximum value (when $a < 0$) equals $-\frac{\Delta}{4a}$, attained at $x = -\frac{b}{2a}$.

If $a > 0$ and $\Delta > 0$: the minimum is $-\frac{\Delta}{4a} < 0$, so the vertex is below the
$x$-axis. Since the parabola opens upward, it must cross the axis twice.

If $a > 0$ and $\Delta = 0$: the minimum is $0$, so the vertex sits on the $x$-axis.

If $a > 0$ and $\Delta < 0$: the minimum is $-\frac{\Delta}{4a} > 0$, so the vertex is above the
$x$-axis, and $f(x) \geq -\frac{\Delta}{4a} > 0$ for all $x$.

The $a < 0$ cases follow by symmetry (or by applying the above to $-f(x)$). $\blacksquare$

### 4.2 Repeated Roots: Geometric Interpretation

**Definition.** When $\Delta = 0$, the equation $ax^2 + bx + c = 0$ has a single repeated root
$\alpha = -\frac{b}{2a}$. We say $\alpha$ is a _double root_ (or root of _multiplicity 2_), and the
quadratic factors as $a(x - \alpha)^2 = 0$.

**Theorem (Tangent at the Vertex).** If $f(x) = ax^2 + bx + c$ has a repeated root at $\alpha$, then
the tangent to $y = f(x)$ at $x = \alpha$ is the line $y = 0$ (the $x$-axis itself).

_Proof._ Since $\alpha$ is a repeated root, $f(\alpha) = 0$. The derivative is $f'(x) = 2ax + b$,
and at the repeated root:

$$f'(\alpha) = 2a\left(-\frac{b}{2a}\right) + b = -b + b = 0$$

The tangent at $x = \alpha$ is $y - f(\alpha) = f'(\alpha)(x - \alpha)$, which gives $y = 0$.
$\blacksquare$

This means that when $\Delta = 0$, the $x$-axis is tangent to the parabola at the vertex. The
parabola "kisses" the axis at one point and bounces back, rather than crossing it.

<details>
<summary>Example</summary>
Show that $4x^2 - 12x + 9 = 0$ has a repeated root, and verify that the $x$-axis is tangent at that point.

$\Delta = (-12)^2 - 4(4)(9) = 144 - 144 = 0$, confirming a repeated root.

The repeated root is $x = \frac{12}{8} = \frac{3}{2}$.

Verification:
$f\left(\frac{3}{2}\right) = 4\left(\frac{9}{4}\right) - 12\left(\frac{3}{2}\right) + 9 = 9 - 18 + 9 = 0$.

$f'(x) = 8x - 12$, so $f'\left(\frac{3}{2}\right) = 12 - 12 = 0$. The tangent at $x = \frac{3}{2}$
is $y = 0$, confirming the $x$-axis is tangent to the curve.

</details>

<hr />

## 5. Solving Quadratic Equations

### 5.1 By Factorisation

If $ax^2 + bx + c = 0$ can be written as $(px + q)(rx + s) = 0$, then by the zero product property,
$x = -q/p$ or $x = -s/r$.

### 5.2 By Completing the Square

Useful when the quadratic doesn't factorise easily and you want to understand the geometry.

### 5.3 By the Formula

Always works (when $\Delta \geq 0$), but can be computationally heavier.

<hr />

## 6. Quadratic Inequalities

Solving $ax^2 + bx + c > 0$ (or $< 0$, $\geq 0$, $\leq 0$) requires understanding the sign of the
quadratic across the real line.

**Method.**

1. Find the roots of $ax^2 + bx + c = 0$.
2. Sketch the parabola (knowing whether $a > 0$ or $a < 0$).
3. Read off the regions where the quadratic is positive or negative.

:::warning
A critical error in inequalities: when multiplying or dividing both sides by a negative
number, you must **reverse** the inequality sign. This is because multiplication by $-1$ is
order-reversing: if $a < b$, then $-a > -b$.
:::

**Theorem.** If $m < 0$ and $a < b$, then $ma > mb$.

_Proof._ From $a < b$, we have $b - a > 0$. Since $m < 0$ and $b - a > 0$, their product
$m(b - a) < 0$. So $mb - ma < 0$, giving $ma > mb$. $\blacksquare$

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

Solution: $x \leq \frac{7}{2}$, $x \neq 2$, i.e.,
$x \in (-\infty, 2) \cup \left[\frac{7}{2}, \infty\right)$.

</details>

### 6.1 Rigorous Sign Chart Method

**Theorem (Sign of a Factored Quadratic).** Let $f(x) = a(x - \alpha)(x - \beta)$ with real roots
$\alpha < \beta$ and $a \neq 0$. Then the sign of $f$ on each interval is determined by:

| Interval             | Sign of $f$ when $a > 0$ | Sign of $f$ when $a < 0$ |
| -------------------- | ------------------------ | ------------------------ |
| $x < \alpha$         | $+$                      | $-$                      |
| $\alpha < x < \beta$ | $-$                      | $+$                      |
| $x > \beta$          | $+$                      | $-$                      |

_Proof._ Consider $a > 0$. For $x > \beta$: both $(x - \alpha) > 0$ and $(x - \beta) > 0$, so
$f(x) > 0$. For $\alpha < x < \beta$: we have $(x - \alpha) > 0$ but $(x - \beta) < 0$, so their
product is negative and $f(x) < 0$. For $x < \alpha$: both factors are negative, so their product is
positive and $f(x) > 0$. The $a < 0$ case reverses all signs. $\blacksquare$

**Corollary.** For $\Delta = 0$ (repeated root $\alpha$): $f(x) = a(x - \alpha)^2$ is always
non-negative when $a > 0$ and always non-positive when $a < 0$, with equality only at $x = \alpha$.

**Method (Systematic Sign Chart).**

1. Rearrange the inequality to the form $f(x) \gtreqqless 0$.
2. Factorise $f(x)$ into linear factors if possible.
3. Identify all critical values: roots of the numerator, zeros of the denominator (if rational), and
   any points where $f$ is undefined.
4. Draw a sign chart: test one point from each interval between consecutive critical values.
5. Select the intervals that satisfy the original inequality, respecting strict ($>$, $<$) vs
   non-strict ($\geq$, $\leq$) conditions.

:::tip
When the inequality is non-strict ($\geq$ or $\leq$), include the roots of the numerator but
**never** include points where the denominator is zero.
:::

<details>
<summary>Example</summary>
Solve $-2x^2 + 3x + 5 \geq 0$ using a sign chart.

Factorise: $-2x^2 + 3x + 5 = -(2x^2 - 3x - 5) = -(2x - 5)(x + 1)$.

Critical values: $x = \frac{5}{2}$ and $x = -1$.

Sign chart for $g(x) = (2x - 5)(x + 1)$ (then apply the leading minus sign):

| Interval       | $2x - 5$ | $x + 1$ | $g(x)$ | $-g(x)$ |
| -------------- | -------- | ------- | ------ | ------- |
| $x < -1$       | $-$      | $-$     | $+$    | $-$     |
| $-1 < x < 5/2$ | $-$      | $+$     | $-$    | $+$     |
| $x > 5/2$      | $+$      | $+$     | $+$    | $-$     |

We need $-g(x) \geq 0$, which occurs for $-1 \leq x \leq \frac{5}{2}$.

Solution: $x \in \left[-1, \frac{5}{2}\right]$.

</details>

<hr />

## 7. Simultaneous Equations (Linear-Quadratic)

When solving a system of one linear and one quadratic equation, we substitute the linear equation
into the quadratic.

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

The discriminant is positive, confirming two intersection points — which corresponds geometrically
to the line cutting the parabola twice.

:::tip
The discriminant of the resulting quadratic tells you the number of intersection points
between a line and a parabola: $\Delta > 0$ means 2 intersections, $\Delta = 0$ means tangent,
$\Delta < 0$ means no intersection.
:::

<hr />

## 8. Quadratics in Disguise

**Definition.** A _quadratic in disguise_ (or _quadratic form equation_) is an equation that is not
quadratic in its stated variable, but can be reduced to a quadratic equation by an appropriate
substitution.

**Theorem.** If an equation can be rewritten as $a\left[g(x)\right]^2 + b\left[g(x)\right] + c = 0$
for some expression $g(x)$ and constants $a \neq 0, b, c$, then the substitution $z = g(x)$ reduces
it to the quadratic $az^2 + bz + c = 0$.

**Common Patterns.**

| Original Form                                                             | Substitution          | Reduced Equation    |
| ------------------------------------------------------------------------- | --------------------- | ------------------- |
| $ax^4 + bx^2 + c = 0$                                                     | $z = x^2$             | $az^2 + bz + c = 0$ |
| $a \cdot p^{2x} + b \cdot p^x + c = 0$                                    | $z = p^x$             | $az^2 + bz + c = 0$ |
| $a\cos^2\theta + b\cos\theta + c = 0$                                     | $z = \cos\theta$      | $az^2 + bz + c = 0$ |
| $a\sin^2\theta + b\sin\theta + c = 0$                                     | $z = \sin\theta$      | $az^2 + bz + c = 0$ |
| $a\left(x + \frac{1}{x}\right)^2 + b\left(x + \frac{1}{x}\right) + c = 0$ | $z = x + \frac{1}{x}$ | $az^2 + bz + c = 0$ |

:::warning
After solving the reduced quadratic for $z$, you must substitute back to find $x$.
Discard any values of $z$ that are incompatible with the substitution (e.g., $z = x^2$ requires
$z \geq 0$, $z = p^x$ requires $z > 0$). Always verify solutions in the original equation.
:::

<details>
<summary>Example</summary>
Solve $x^4 - 13x^2 + 36 = 0$.

Let $z = x^2$ (note $z \geq 0$). Then $z^2 - 13z + 36 = 0$.

Factorising: $(z - 4)(z - 9) = 0$, so $z = 4$ or $z = 9$.

Substituting back: $x^2 = 4 \implies x = \pm 2$, and $x^2 = 9 \implies x = \pm 3$.

Solution: $x \in \{-3, -2, 2, 3\}$.

</details>

<details>
<summary>Example</summary>
Solve $x + 2 - \frac{3}{x} = 0$.

Multiply through by $x$ (noting $x \neq 0$):

$$x^2 + 2x - 3 = 0$$

$$(x + 3)(x - 1) = 0 \implies x = -3 \mathrm{ or } x = 1$$

Now consider the related equation $x^2 + \frac{4}{x^2} + 2\left(x + \frac{1}{x}\right) = 0$.

Let $z = x + \frac{1}{x}$. Then $z^2 = x^2 + 2 + \frac{1}{x^2}$, so $x^2 + \frac{1}{x^2} = z^2 - 2$.

The equation becomes: $z^2 - 2 + 2z = 0$, i.e., $z^2 + 2z - 2 = 0$.

$$z = \frac{-2 \pm \sqrt{4 + 8}}{2} = \frac{-2 \pm 2\sqrt{3}}{2} = -1 \pm \sqrt{3}$$

For each value of $z$, solve $x + \frac{1}{x} = z$, i.e., $x^2 - zx + 1 = 0$ by the quadratic
formula. This yields four solutions in total (two for each value of $z$), provided each resulting
discriminant is non-negative.

</details>

<hr />

## 9. Vieta's Formulas

**Theorem (Vieta's Formulas).** If $\alpha$ and $\beta$ are the roots of $ax^2 + bx + c = 0$ with
$a \neq 0$, then:

$$\alpha + \beta = -\frac{b}{a} \quad \mathrm{(Sum of Roots)}$$

$$\alpha\beta = \frac{c}{a} \quad \mathrm{(Product of Roots)}$$

_Proof._ By the factor theorem, since $\alpha$ and $\beta$ are roots of $ax^2 + bx + c = 0$, we can
write:

$$ax^2 + bx + c = a(x - \alpha)(x - \beta)$$

Expanding the right-hand side:

$$a(x - \alpha)(x - \beta) = a\left[x^2 - (\alpha + \beta)x + \alpha\beta\right] = ax^2 - a(\alpha + \beta)x + a\alpha\beta$$

Equating coefficients with $ax^2 + bx + c$:

- Coefficient of $x$: $b = -a(\alpha + \beta)$, hence $\alpha + \beta = -\frac{b}{a}$.
- Constant term: $c = a\alpha\beta$, hence $\alpha\beta = \frac{c}{a}$.

$\blacksquare$

**Corollary (Monic Case).** For a monic quadratic $x^2 + bx + c = 0$:

$$\alpha + \beta = -b \quad \mathrm{and} \quad \alpha\beta = c$$

### 9.1 Relationship Between Roots and Coefficients

Vieta's formulas allow us to deduce properties of the roots directly from the coefficients, without
solving the equation.

**Theorem (Sign of Roots).** Let $\alpha$ and $\beta$ be real roots of $ax^2 + bx + c = 0$ with
$a > 0$ and $\Delta \geq 0$. Then:

| Condition on Roots     | Condition on Coefficients | Via Vieta                                  |
| ---------------------- | ------------------------- | ------------------------------------------ |
| Both roots positive    | $b < 0$ and $c > 0$       | $\alpha + \beta > 0$ and $\alpha\beta > 0$ |
| Both roots negative    | $b > 0$ and $c > 0$       | $\alpha + \beta < 0$ and $\alpha\beta > 0$ |
| Roots of opposite sign | $c < 0$                   | $\alpha\beta < 0$                          |
| One root is zero       | $c = 0$                   | $\alpha\beta = 0$                          |

_Proof._ We prove the first case; the others follow similarly.

Both roots positive means $\alpha + \beta > 0$ and $\alpha\beta > 0$. By Vieta:
$\alpha + \beta = -\frac{b}{a}$, so $-\frac{b}{a} > 0 \implies b < 0$ (since $a > 0$). Also
$\alpha\beta = \frac{c}{a}$, so $\frac{c}{a} > 0 \implies c > 0$.

Conversely, if $b < 0$ and $c > 0$, then $\alpha + \beta = -\frac{b}{a} > 0$ and
$\alpha\beta = \frac{c}{a} > 0$. Since both the sum and product are positive, both roots must be
positive (if one were negative and the other positive, their product would be negative; if both were
negative, their sum would be negative). $\blacksquare$

### 9.2 Constructing Equations from Roots

Given two numbers $\alpha$ and $\beta$, the monic quadratic with those roots is:

$$x^2 - (\alpha + \beta)x + \alpha\beta = 0$$

More generally, the quadratic with leading coefficient $a$ is:

$$ax^2 - a(\alpha + \beta)x + a\alpha\beta = 0$$

<details>
<summary>Example</summary>
Find the quadratic equation with roots $\alpha = 3$ and $\beta = -5$.

Sum: $\alpha + \beta = -2$. Product: $\alpha\beta = -15$.

Monic equation: $x^2 - (-2)x + (-15) = 0$, i.e., $x^2 + 2x - 15 = 0$.

Verification: $(x - 3)(x + 5) = x^2 + 2x - 15$. Correct.

</details>

### 9.3 Symmetric Functions of Roots

A _symmetric function_ of $\alpha$ and $\beta$ is one that is unchanged when $\alpha$ and $\beta$
are swapped. Vieta's formulas allow us to evaluate many symmetric functions without finding the
roots individually.

**Common Identities.**

$$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$$

$$\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)$$

$$\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta}$$

$$\alpha^2\beta + \alpha\beta^2 = \alpha\beta(\alpha + \beta)$$

$$(\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta$$

<details>
<summary>Example</summary>
The roots of $2x^2 - 8x + 3 = 0$ are $\alpha$ and $\beta$. Without solving the equation, find $\alpha^2 + \beta^2$ and $\frac{1}{\alpha} + \frac{1}{\beta}$.

From Vieta: $\alpha + \beta = \frac{8}{2} = 4$ and $\alpha\beta = \frac{3}{2}$.

$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = 16 - 3 = 13$.

$\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{4}{3/2} = \frac{8}{3}$.

</details>

<details>
<summary>Example</summary>
The roots of $x^2 - 5x + 2 = 0$ are $\alpha$ and $\beta$. Find a quadratic equation whose roots are $\alpha^2$ and $\beta^2$.

We need the sum $S = \alpha^2 + \beta^2$ and product $P = \alpha^2 \beta^2$.

$S = (\alpha + \beta)^2 - 2\alpha\beta = 25 - 4 = 21$.

$P = (\alpha\beta)^2 = 4$.

The required equation is $x^2 - Sx + P = 0$, i.e., $x^2 - 21x + 4 = 0$.

</details>

<hr />

## 10. Applying Quadratic Theory to Other Equations

Many equations that are not obviously quadratic can be solved by recognising quadratic structure or
by algebraic manipulation that produces a quadratic.

### 10.1 Exponential Equations

**Method.** For equations of the form $a \cdot p^{2x} + b \cdot p^x + c = 0$ where $p > 0$,
substitute $u = p^x$ (so $u > 0$) to obtain a quadratic in $u$. After solving, take logarithms to
recover $x$.

<details>
<summary>Example</summary>
Solve $3^{2x} - 4 \cdot 3^x - 5 = 0$.

Let $u = 3^x$ ($u > 0$). The equation becomes:

$$u^2 - 4u - 5 = 0$$

$$(u - 5)(u + 1) = 0$$

$u = 5$ or $u = -1$. Since $u > 0$, reject $u = -1$.

$3^x = 5 \implies x = \log_3 5 = \frac{\ln 5}{\ln 3}$.

</details>

### 10.2 Trigonometric Equations

**Method.** Equations such as $a\cos^2\theta + b\cos\theta + c = 0$ are quadratic in $\cos\theta$.
Solve for the trigonometric ratio, then find $\theta$ within the specified interval. Always check
that the values fall within the valid range $[-1, 1]$.

<details>
<summary>Example</summary>
Solve $2\cos^2\theta - \cos\theta - 1 = 0$ for $0 \leq \theta \leq 2\pi$.

Let $u = \cos\theta$ with $-1 \leq u \leq 1$:

$$2u^2 - u - 1 = 0 \implies (2u + 1)(u - 1) = 0$$

$u = -\frac{1}{2}$ or $u = 1$. Both lie in $[-1, 1]$.

$\cos\theta = -\frac{1}{2} \implies \theta = \frac{2\pi}{3}, \frac{4\pi}{3}$.

$\cos\theta = 1 \implies \theta = 0, 2\pi$.

Solution: $\theta \in \left\{0, \frac{2\pi}{3}, \frac{4\pi}{3}, 2\pi\right\}$.

</details>

### 10.3 Equations with Square Roots

Equations involving $\sqrt{f(x)}$ can sometimes be reduced to quadratics by isolating the radical
and squaring both sides.

:::warning
Squaring both sides of an equation is **not reversible** — it can introduce extraneous
solutions. You must always substitute every candidate solution back into the **original** equation
to verify it.
:::

<details>
<summary>Example</summary>
Solve $\sqrt{2x + 1} = x - 1$.

First, note the domain restrictions: $2x + 1 \geq 0$ (so $x \geq -1/2$) and $x - 1 \geq 0$ (so
$x \geq 1$) since a square root is non-negative.

Squaring both sides: $2x + 1 = (x - 1)^2 = x^2 - 2x + 1$.

$$x^2 - 4x = 0 \implies x(x - 4) = 0 \implies x = 0 \mathrm{ or } x = 4$$

Check $x = 0$: $\sqrt{1} = -1$? No, $1 \neq -1$. Reject (also fails $x \geq 1$).

Check $x = 4$: $\sqrt{9} = 3$? Yes, $3 = 3$. Accept.

Solution: $x = 4$.

</details>

<hr />

## 11. Problem Set

**Problem 1.** Write $3x^2 - 12x + 7$ in the form $a(x - p)^2 + q$, and hence state the minimum
value and the value of $x$ at which it occurs.

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

<hr />

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

<hr />

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

Note: $k \neq 0$ (otherwise it's not quadratic). If $k = 0$, the equation $-6x + 4 = 0$ still has a
real root, so the condition is $k \leq \frac{9}{4}$ with $k$ real (including $k = 0$, which gives a
linear equation).

</details>
<b>If you get this wrong, revise:</b> [Discriminant](#4-the-discriminant)

<hr />

**Problem 4.** Solve the inequality $x^2 - 3x - 10 > 0$.

<details>
<summary>Solution</summary>
Factorise: $(x - 5)(x + 2) > 0$.

The parabola opens upwards. It is positive outside the roots:

$$x < -2 \quad \mathrm{or} \quad x > 5$$

In set notation: $x \in (-\infty, -2) \cup (5, \infty)$.

</details>
<b>If you get this wrong, revise:</b> [Quadratic inequalities](#6-quadratic-inequalities)

<hr />

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

<hr />

**Problem 6.** The function $f(x) = px^2 + qx + r$ has a minimum value of $-5$ at $x = 2$, and
passes through the point $(0, 7)$. Find $p$, $q$, and $r$.

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

<hr />

**Problem 7.** Show that $x^2 + 4x + 9 > 0$ for all real $x$.

<details>
<summary>Solution</summary>
Completing the square:

$$x^2 + 4x + 9 = (x + 2)^2 + 5$$

Since $(x+2)^2 \geq 0$ for all $x$, we have $(x+2)^2 + 5 \geq 5 > 0$ for all $x$. $\blacksquare$

Alternatively: $\Delta = 16 - 36 = -20 < 0$, and since the coefficient of $x^2$ is positive, the
parabola is always above the $x$-axis.

</details>
<b>If you get this wrong, revise:</b> [Discriminant](#4-the-discriminant)

<hr />

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

<hr />

**Problem 9.** Find the equation of the tangent to the curve $y = x^2 - 4x + 3$ at the point where
$x = 1$.

<details>
<summary>Solution</summary>
At $x = 1$: $y = 1 - 4 + 3 = 0$. The point is $(1, 0)$.

The gradient is $\frac{dy}{dx} = 2x - 4$. At $x = 1$: $\frac{dy}{dx} = -2$.

Using $y - y_1 = m(x - x_1)$:

$$y - 0 = -2(x - 1) \implies y = -2x + 2$$

</details>
<b>If you get this wrong, revise:</b> [Differentiation](./10-differentiation.md)

<hr />

**Problem 10.** Prove that the equation $x^2 + 2kx + k^2 + 1 = 0$ has no real roots for any real
value of $k$.

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

<hr />

**Problem 11.** A rectangle has length $(x + 5)$ cm and width $(x + 2)$ cm. The area is
$30\mathrm{ cm}^2$. Find $x$.

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

<hr />

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

<hr />

**Problem 13.** Solve $x^4 - 13x^2 + 36 = 0$.

<details>
<summary>Solution</summary>
Let $z = x^2$ (so $z \geq 0$). Then $z^2 - 13z + 36 = 0$.

$$(z - 4)(z - 9) = 0$$

$z = 4$ or $z = 9$.

$x^2 = 4 \implies x = \pm 2$, and $x^2 = 9 \implies x = \pm 3$.

Solution: $x \in \{-3, -2, 2, 3\}$.

</details>
<b>If you get this wrong, revise:</b> [Quadratics in disguise](#8-quadratics-in-disguise)

<hr />

**Problem 14.** The roots of $3x^2 - 5x + 1 = 0$ are $\alpha$ and $\beta$. Without solving the
equation, find $\alpha^2 + \beta^2$ and $\alpha^3 + \beta^3$.

<details>
<summary>Solution</summary>
From Vieta's formulas: $\alpha + \beta = \frac{5}{3}$ and $\alpha\beta = \frac{1}{3}$.

$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = \frac{25}{9} - \frac{2}{3} = \frac{25}{9} - \frac{6}{9} = \frac{19}{9}$.

$\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = \frac{125}{27} - 3 \cdot \frac{1}{3} \cdot \frac{5}{3} = \frac{125}{27} - \frac{5}{3} = \frac{125}{27} - \frac{45}{27} = \frac{80}{27}$.

</details>
<b>If you get this wrong, revise:</b> [Vieta's formulas](#9-vietas-formulas)

<hr />

**Problem 15.** Solve $4^{2x} - 5 \cdot 4^x + 4 = 0$.

<details>
<summary>Solution</summary>
Let $u = 4^x$ ($u > 0$). Then $u^2 - 5u + 4 = 0$.

$$(u - 1)(u - 4) = 0$$

$u = 1$ or $u = 4$.

$4^x = 1 \implies x = 0$, and $4^x = 4 \implies x = 1$.

Solution: $x = 0$ or $x = 1$.

</details>
<b>If you get this wrong, revise:</b> [Applying quadratic theory](#10-applying-quadratic-theory-to-other-equations)

<hr />

**Problem 16.** The curve $y = (k - 2)x^2 + 3x + k - 4$ is tangent to the $x$-axis. Find the
possible values of $k$.

<details>
<summary>Solution</summary>
For the curve to be tangent to the $x$-axis, we need $\Delta = 0$:

$$\Delta = 9 - 4(k - 2)(k - 4) = 0$$

$$9 - 4(k^2 - 6k + 8) = 0$$

$$9 - 4k^2 + 24k - 32 = 0$$

$$4k^2 - 24k + 23 = 0$$

$$k = \frac{24 \pm \sqrt{576 - 368}}{8} = \frac{24 \pm \sqrt{208}}{8} = \frac{24 \pm 4\sqrt{13}}{8} = \frac{6 \pm \sqrt{13}}{2}$$

We also require $k \neq 2$ (otherwise the equation is linear, not quadratic). Since
$\frac{6 \pm \sqrt{13}}{2} \neq 2$ (because $6 \pm \sqrt{13} \neq 4$), both values are valid.

</details>
<b>If you get this wrong, revise:</b> [Discriminant and graph shape](#41-discriminant-and-graph-shape)

<hr />

**Problem 17.** Solve the inequality $x^2 + 2x - 8 \leq 0$ using a sign chart, giving your answer in
set notation.

<details>
<summary>Solution</summary>
Factorise: $(x + 4)(x - 2) \leq 0$.

Critical values: $x = -4$ and $x = 2$.

Sign chart:

| Interval     | $x + 4$ | $x - 2$ | Product |
| ------------ | ------- | ------- | ------- |
| $x < -4$     | $-$     | $-$     | $+$     |
| $-4 < x < 2$ | $+$     | $-$     | $-$     |
| $x > 2$      | $+$     | $+$     | $+$     |

The product is $\leq 0$ for $-4 \leq x \leq 2$.

Solution: $x \in [-4, 2]$.

</details>
<b>If you get this wrong, revise:</b> [Quadratic inequalities](#6-quadratic-inequalities)

<hr />

**Problem 18.** Solve $2\sin^2\theta + 3\sin\theta - 2 = 0$ for $0 \leq \theta < 2\pi$.

<details>
<summary>Solution</summary>
Let $u = \sin\theta$ with $-1 \leq u \leq 1$:

$$2u^2 + 3u - 2 = 0 \implies (2u - 1)(u + 2) = 0$$

$u = \frac{1}{2}$ or $u = -2$.

Since $-1 \leq \sin\theta \leq 1$, we reject $u = -2$.

$\sin\theta = \frac{1}{2} \implies \theta = \frac{\pi}{6}$ or $\theta = \frac{5\pi}{6}$.

Solution: $\theta \in \left\{\frac{\pi}{6}, \frac{5\pi}{6}\right\}$.

</details>
<b>If you get this wrong, revise:</b> [Applying quadratic theory](#10-applying-quadratic-theory-to-other-equations)
