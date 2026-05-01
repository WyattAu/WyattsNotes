---
title: Quadratics
description: "DSE Mathematics quadratic equations notes covering factorisation, completing the square, quadratic formula, discriminant, and graphs of quadratic functions."
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Maths
categories:
  - DSE
  - Maths
slug: dse-maths-compulsory-quadratics
---

## Quadratic Equations

A quadratic equation in $x$ has the general form:

$$ax^2 + bx + c = 0, \quad a \neq 0$$

where $a$, $b$, and $c$ are real constants.

### The Quadratic Formula

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

This formula gives the roots (solutions) of any quadratic equation. It follows from completing the
square on the general form.

**Derivation.** Starting from $ax^2 + bx + c = 0$:

$$x^2 + \frac{b}{a}x = -\frac{c}{a}$$

$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{c}{a} = \frac{b^2 - 4ac}{4a^2}$$

$$x + \frac{b}{2a} = \frac{\pm\sqrt{b^2 - 4ac}}{2a}$$

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \qed$$

---

## The Discriminant

The **discriminant** $\Delta$ determines the nature of the roots:

$$\Delta = b^2 - 4ac$$

| Condition      | Roots                                       |
| -------------- | ------------------------------------------- |
| $\Delta \gt 0$ | Two distinct real roots                     |
| $\Delta = 0$   | One repeated real root (double root)        |
| $\Delta \lt 0$ | No real roots (two complex conjugate roots) |

### Worked Example 1

Determine the nature of the roots of $2x^2 - 6x + 3 = 0$.

$$\Delta = (-6)^2 - 4(2)(3) = 36 - 24 = 12 \gt 0$$

Two distinct real roots:
$x = \dfrac{6 \pm \sqrt{12}}{4} = \dfrac{6 \pm 2\sqrt{3}}{4} = \dfrac{3 \pm \sqrt{3}}{2}$

### Worked Example 2

Find the value of $k$ for which $x^2 + 2kx + k + 6 = 0$ has equal roots.

$$\Delta = (2k)^2 - 4(1)(k + 6) = 4k^2 - 4k - 24 = 0$$

$$k^2 - k - 6 = 0 \implies (k - 3)(k + 2) = 0 \implies k = 3 \mathrm{ or } k = -2$$

---

## Completing the Square

To complete the square for $ax^2 + bx + c$:

1. Factor out $a$: $a\!\left(x^2 + \dfrac{b}{a}x\right) + c$
2. Add and subtract $\left(\dfrac{b}{2a}\right)^2$:
   $a\!\left[\left(x + \dfrac{b}{2a}\right)^2 - \left(\dfrac{b}{2a}\right)^2\right] + c$

The result is the **vertex form**:

$$ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a}$$

### Worked Example 3

Express $f(x) = 3x^2 - 12x + 7$ in completed square form.

$$f(x) = 3(x^2 - 4x) + 7 = 3\!\left[(x - 2)^2 - 4\right] + 7 = 3(x - 2)^2 - 12 + 7 = 3(x - 2)^2 - 5$$

The vertex is at $(2, -5)$. Since $a = 3 \gt 0$, this is a minimum.

---

## Graphs of Quadratic Functions

The graph of $f(x) = ax^2 + bx + c$ is a parabola.

<!-- TODO: replace with a verified Desmos graph URL showing a quadratic with sliders for a, b, c -->

<DesmosGraph title="Quadratic Function Explorer" expressions={["ax^2+bx+c", "-b/(2a)"]} width={800}
height={500} />

Adjust the sliders to see how $a$, $b$, and $c$ affect the shape, vertex, and roots of the parabola.

### Key Features

- **Vertex:** $\left(-\dfrac{b}{2a},\; \dfrac{4ac - b^2}{4a}\right)$
- **Axis of symmetry:** $x = -\dfrac{b}{2a}$
- **$y$-intercept:** $(0, c)$
- **$x$-intercepts:** roots of $f(x) = 0$ (if real)

### Shape

| Condition | Shape          | Extremum          |
| --------- | -------------- | ----------------- |
| $a \gt 0$ | Opens upward   | Minimum at vertex |
| $a \lt 0$ | Opens downward | Maximum at vertex |

### Worked Example 4

Find the vertex, axis of symmetry, and $x$-intercepts of $f(x) = -2x^2 + 8x - 6$.

Vertex: $x = -\dfrac{8}{2(-2)} = 2$

$$f(2) = -2(4) + 16 - 6 = -8 + 10 = 2$$

Vertex: $(2, 2)$. This is a maximum. Axis of symmetry: $x = 2$.

$x$-intercepts: $-2x^2 + 8x - 6 = 0 \implies x^2 - 4x + 3 = 0 \implies (x - 1)(x - 3) = 0$

$x$-intercepts: $(1, 0)$ and $(3, 0)$.

---

## Quadratic Inequalities

To solve $ax^2 + bx + c \gt 0$ (or $\lt$, $\geqslant$, $\leqslant$):

1. Find the roots of $ax^2 + bx + c = 0$.
2. Sketch the parabola using the sign of $a$.
3. Read off the intervals satisfying the inequality.

### For $a \gt 0$ (opens upward):

| Discriminant                             | $f(x) \gt 0$                    | $f(x) \lt 0$             |
| ---------------------------------------- | ------------------------------- | ------------------------ |
| $\Delta \gt 0$, roots $\alpha \lt \beta$ | $x \lt \alpha$ or $x \gt \beta$ | $\alpha \lt x \lt \beta$ |
| $\Delta = 0$, root $\alpha$              | All $x \neq \alpha$             | No solution              |
| $\Delta \lt 0$                           | All real $x$                    | No solution              |

### Worked Example 5

Solve $-x^2 + 5x - 6 \geqslant 0$.

Multiply by $-1$ (reverse inequality): $x^2 - 5x + 6 \leqslant 0$

Factor: $(x - 2)(x - 3) \leqslant 0$. Parabola opens upward. Expression is non-positive between the
roots: $2 \leqslant x \leqslant 3$.

### Worked Example 6

Find the range of $k$ for which $x^2 + kx + 9 = 0$ has no real roots.

No real roots: $\Delta \lt 0$

$$k^2 - 36 \lt 0 \implies (k - 6)(k + 6) \lt 0 \implies -6 \lt k \lt 6$$

---

## Relationship Between Roots and Coefficients

For $ax^2 + bx + c = 0$ with roots $\alpha$ and $\beta$:

**Sum of roots:**

$$\alpha + \beta = -\frac{b}{a}$$

**Product of roots:**

$$\alpha\beta = \frac{c}{a}$$

**Proof.** By factorisation:
$ax^2 + bx + c = a(x - \alpha)(x - \beta) = a(x^2 - (\alpha + \beta)x + \alpha\beta)$. Comparing
coefficients gives the result. $\qed$

### Worked Example 7

If $\alpha$ and $\beta$ are roots of $2x^2 - 5x + 1 = 0$, find $\alpha^2 + \beta^2$ and
$1/\alpha + 1/\beta$.

$$\alpha + \beta = \frac{5}{2}, \quad \alpha\beta = \frac{1}{2}$$

$$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = \frac{25}{4} - 1 = \frac{21}{4}$$

$$\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{5/2}{1/2} = 5$$

---

## Common Pitfalls

- Forgetting that $a \neq 0$ in $ax^2 + bx + c = 0$. If $a = 0$, the equation is linear, not
  quadratic.
- Multiplying an inequality by a negative number without reversing the sign. Always sketch the
  parabola or use a sign chart.
- When completing the square, forgetting to multiply the constant term by $a$ after adding and
  subtracting inside the brackets.
- Confusing the discriminant sign: $\Delta \gt 0$ gives real roots, $\Delta \lt 0$ gives no real
  roots. The opposite is a common error.
- Using $\alpha + \beta = b/a$ instead of $\alpha + \beta = -b/a$. Note the negative sign.

---

## Summary Table

| Topic             | Key Result                                             |
| ----------------- | ------------------------------------------------------ |
| Quadratic formula | $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$              |
| Discriminant      | $\Delta = b^2 - 4ac$                                   |
| Vertex            | $\left(-\dfrac{b}{2a},\; \dfrac{4ac - b^2}{4a}\right)$ |
| Sum of roots      | $\alpha + \beta = -b/a$                                |
| Product of roots  | $\alpha\beta = c/a$                                    |

---

<details>
<summary>Wrap-up Questions</summary>

1. **Question:** Solve $3x^2 - 7x + 2 = 0$ by factoring.

$(3x - 1)(x - 2) = 0 \implies x = 1/3$ or $x = 2$.

2. **Question:** Find the values of $k$ for which $kx^2 + 2x + k = 0$ has two distinct real roots.

$\Delta = 4 - 4k^2 \gt 0 \implies k^2 \lt 1 \implies -1 \lt k \lt 1$ (and $k \neq 0$ since it must
be quadratic).

3. **Question:** Express $f(x) = -x^2 + 6x - 5$ in completed square form and state its maximum
   value.

$f(x) = -(x^2 - 6x) - 5 = -[(x - 3)^2 - 9] - 5 = -(x - 3)^2 + 4$. Maximum value: $4$ at $x = 3$.

4. **Question:** Solve the inequality $2x^2 + 3x - 5 \lt 0$.

$2x^2 + 3x - 5 = (2x + 5)(x - 1)$. Roots: $x = -5/2$ and $x = 1$. Parabola opens upward. Solution:
$-5/2 \lt x \lt 1$.

5. **Question:** If $\alpha$ and $\beta$ are roots of $x^2 - 3x + 5 = 0$, form a quadratic equation
   with roots $\alpha + 2$ and $\beta + 2$.

New sum: $(\alpha + 2) + (\beta + 2) = (\alpha + \beta) + 4 = 3 + 4 = 7$.

New product: $(\alpha + 2)(\beta + 2) = \alpha\beta + 2(\alpha + \beta) + 4 = 5 + 6 + 4 = 15$.

Equation: $x^2 - 7x + 15 = 0$.

6. **Question:** A ball is thrown upward. Its height $h$ metres at time $t$ seconds is
   $h = -5t^2 + 20t + 1$. Find the maximum height and the time at which it occurs.

$h = -5(t^2 - 4t) + 1 = -5[(t - 2)^2 - 4] + 1 = -5(t - 2)^2 + 21$. Maximum height: $21 \mathrm{ m}$
at $t = 2 \mathrm{ s}$.

7. **Question:** Find the range of the function $f(x) = 2x^2 - 8x + 11$.

$f(x) = 2(x^2 - 4x) + 11 = 2[(x - 2)^2 - 4] + 11 = 2(x - 2)^2 + 3$. Since $2(x - 2)^2 \geqslant 0$,
the minimum is $3$. Range: $[3, \infty)$.

8. **Question:** The equation $x^2 + 2px + p + 8 = 0$ has real roots. Find the range of $p$.

$\Delta = 4p^2 - 4(p + 8) = 4p^2 - 4p - 32 \geqslant 0 \implies p^2 - p - 8 \geqslant 0$.

Roots: $p = \dfrac{1 \pm \sqrt{1 + 32}}{2} = \dfrac{1 \pm \sqrt{33}}{2}$.

Since $a = 1 \gt 0$: $p \leqslant \dfrac{1 - \sqrt{33}}{2}$ or
$p \geqslant \dfrac{1 + \sqrt{33}}{2}$.

9. **Question:** Prove that the quadratic equation $(a^2 + b^2)x^2 + 2(ac + bd)x + (c^2 + d^2) = 0$
   has no real roots unless $ad = bc$.

$\Delta = 4(ac + bd)^2 - 4(a^2 + b^2)(c^2 + d^2) = 4[a^2c^2 + 2abcd + b^2d^2 - a^2c^2 - a^2d^2 - b^2c^2 - b^2d^2]$
$= 4[2abcd - a^2d^2 - b^2c^2] = -4(ad - bc)^2$.

Since $-(ad - bc)^2 \leqslant 0$, we have $\Delta \leqslant 0$. Real roots exist only when
$\Delta = 0$, i.e., $ad = bc$.

10. **Question:** For what integer values of $k$ does the equation $x^2 - kx + k + 3 = 0$ have
    integer roots?

By Vieta: $\alpha + \beta = k$ and $\alpha\beta = k + 3$. So $\alpha\beta = \alpha + \beta + 3$,
giving $\alpha\beta - \alpha - \beta = 3$, or $(\alpha - 1)(\beta - 1) = 4$.

Factor pairs of 4: $(1,4)$, $(2,2)$, $(4,1)$, $(-1,-4)$, $(-2,-2)$, $(-4,-1)$.

These give $(\alpha, \beta) = (2,5)$, $(3,3)$, $(5,2)$, $(0,-3)$, $(-1,-1)$, $(-3,0)$.

Corresponding $k$ values: $7, 6, 7, -3, -2, -3$. Integer values of $k$: $\{-3, -2, 6, 7\}$.

</details>

---

## Additional Worked Examples

**Worked Example 8: Parameter condition for real roots (non-standard quadratic)**

Find the range of $k$ for which $(k-1)x^2 + 2kx + k + 3 = 0$ has real roots.

<details>
<summary>Solution</summary>

**Case 1: $k = 1$.** The equation becomes $2x + 4 = 0 \implies x = -2$. One real root, so $k = 1$ is included.

**Case 2: $k \neq 1$.** This is a genuine quadratic. Require $\Delta \geq 0$:

$$\Delta = (2k)^2 - 4(k-1)(k+3) = 4k^2 - 4(k^2 + 2k - 3) = 4k^2 - 4k^2 - 8k + 12 = -8k + 12$$

$$-8k + 12 \geq 0 \implies k \leq \frac{3}{2}$$

Combined with Case 1: the answer is $k \leq \dfrac{3}{2}$.

</details>

**Worked Example 9: Forming a quadratic with transformed roots**

If $\alpha$ and $\beta$ are roots of $2x^2 - 7x + 3 = 0$, form a quadratic equation with roots $\alpha^2$ and $\beta^2$.

<details>
<summary>Solution</summary>

$$\alpha + \beta = \frac{7}{2}, \quad \alpha\beta = \frac{3}{2}$$

New sum: $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = \dfrac{49}{4} - 3 = \dfrac{37}{4}$.

New product: $\alpha^2 \beta^2 = (\alpha\beta)^2 = \dfrac{9}{4}$.

Equation: $x^2 - \dfrac{37}{4}x + \dfrac{9}{4} = 0$, i.e. $4x^2 - 37x + 9 = 0$.

</details>

**Worked Example 10: Quadratic with absolute value**

Solve $x^2 + 2|x| - 8 = 0$.

<details>
<summary>Solution</summary>

Let $t = |x| \geq 0$. The equation becomes $t^2 + 2t - 8 = 0$.

$$(t + 4)(t - 2) = 0 \implies t = 2$$

(Reject $t = -4$ since $t \geq 0$.)

$$|x| = 2 \implies x = 2 \;\mathrm{or}\; x = -2$$

</details>

**Worked Example 11: Positive definite quadratic**

Find the range of $k$ such that $kx^2 - 2kx + 3 \gt 0$ for all real $x$.

<details>
<summary>Solution</summary>

For $ax^2 + bx + c \gt 0$ for all real $x$, we need $a \gt 0$ and $\Delta \lt 0$.

**Condition 1:** $k \gt 0$.

**Condition 2:**

$$\Delta = (-2k)^2 - 4(k)(3) = 4k^2 - 12k = 4k(k - 3) \lt 0$$

This gives $0 \lt k \lt 3$.

Combined with Condition 1: $0 \lt k \lt 3$.

</details>

**Worked Example 12: Minimum value using AM-GM**

Find the minimum value of $f(x) = x + \dfrac{9}{x}$ for $x \gt 0$.

<details>
<summary>Solution</summary>

By the AM-GM inequality (for $x \gt 0$):

$$x + \frac{9}{x} \geq 2\sqrt{x \cdot \frac{9}{x}} = 2\sqrt{9} = 6$$

Equality holds when $x = \dfrac{9}{x} \implies x^2 = 9 \implies x = 3$ (positive since $x \gt 0$).

Minimum value: $6$, attained at $x = 3$.

</details>

---

## Additional Common Pitfalls

1. **Forgetting the $a \neq 0$ condition.** When a parameter makes $a = 0$, the equation becomes linear, not quadratic. Always check the degenerate case separately, as in Worked Example 8.

2. **Wrong sign in Vieta's formulas.** The sum of roots is $\alpha + \beta = -b/a$, not $b/a$. The negative sign is the single most common error in root-coefficient problems.

3. **Reversing inequality when multiplying by a negative.** When solving $ax^2 + bx + c \lt 0$ with $a \lt 0$, multiplying through by $-1$ reverses the sign. A safer approach is to sketch the parabola and read off the solution intervals.

4. **Completing the square incorrectly.** After factoring out $a$ from $ax^2 + bx + c$, the term to add and subtract inside the brackets is $\left(\dfrac{b}{2a}\right)^2$, not $\left(\dfrac{b}{2}\right)^2$. Forgetting to divide by $a$ inside is a frequent mistake.

5. **Assuming discriminant alone determines root rationality.** For $\Delta \gt 0$, the roots are rational if and only if $\Delta$ is a perfect square (and $2a$ divides $-b \pm \sqrt{\Delta}$). A positive, non-square discriminant gives irrational roots.

6. **Confusing vertex $x$-coordinate sign.** The vertex $x$-coordinate is $-b/(2a)$, not $b/(2a)$. The negative sign is essential.

7. **Dropping the leading coefficient in root-coefficient problems.** For $ax^2 + bx + c = 0$, the sum is $-b/a$ and the product is $c/a$. Omitting the denominator $a$ (e.g., writing $\alpha + \beta = -b$) is only valid when $a = 1$.

8. **Incorrect transformation of roots.** When forming a new equation with roots $2\alpha$ and $2\beta$, the new sum is $2(\alpha + \beta)$ and the new product is $4\alpha\beta$. A common mistake is to only double the sum but forget to square the factor for the product.

---

## Exam-Style Problems

**Problem 1.** Solve $3x^2 + 2x - 5 \leq 0$.

<details>
<summary>Solution</summary>

Factor: $3x^2 + 2x - 5 = (3x + 5)(x - 1)$.

Roots: $x = -\dfrac{5}{3}$ and $x = 1$. The parabola opens upward ($a = 3 \gt 0$).

The expression is non-positive between the roots:

$$-\frac{5}{3} \leq x \leq 1$$

</details>

**Problem 2.** If $\alpha$ and $\beta$ are roots of $x^2 - 5x + 2 = 0$, find $\alpha^3 + \beta^3$.

<details>
<summary>Solution</summary>

$$\alpha + \beta = 5, \quad \alpha\beta = 2$$

$$\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = 125 - 3(2)(5) = 125 - 30 = 95$$

</details>

**Problem 3.** Find the range of $p$ for which $px^2 + 2px + 1 \gt 0$ for all real $x$.

<details>
<summary>Solution</summary>

Require $p \gt 0$ and $\Delta \lt 0$:

$$\Delta = 4p^2 - 4p = 4p(p - 1) \lt 0 \implies 0 \lt p \lt 1$$

</details>

**Problem 4.** The expression $x^2 + px + q$ is a perfect square. Given $p + q = 9$, find $p$ and $q$.

<details>
<summary>Solution</summary>

A perfect square means $\Delta = 0$: $p^2 - 4q = 0 \implies q = \dfrac{p^2}{4}$.

Substituting into $p + q = 9$: $p + \dfrac{p^2}{4} = 9 \implies p^2 + 4p - 36 = 0$.

$$p = \frac{-4 \pm \sqrt{16 + 144}}{2} = -2 \pm 2\sqrt{10}$$

$$q = 9 - p = 9 + 2 \mp 2\sqrt{10} = 11 \mp 2\sqrt{10}$$

Answer: $\left(p,\; q\right) = \left(-2 + 2\sqrt{10},\; 11 - 2\sqrt{10}\right)$ or $\left(-2 - 2\sqrt{10},\; 11 + 2\sqrt{10}\right)$.

</details>

**Problem 5.** A rectangular field has perimeter $120\mathrm{ m}$ and area $A\mathrm{ m}^2$. Show that $A \leq 900$ and find the dimensions when $A = 900$.

<details>
<summary>Solution</summary>

Let the dimensions be $x$ and $y$ metres. Then $2(x+y) = 120 \implies x + y = 60$, so $y = 60 - x$.

$$A = xy = x(60 - x) = -x^2 + 60x = -(x - 30)^2 + 900$$

Since $-(x-30)^2 \leq 0$ for all real $x$, we have $A \leq 900$.

Maximum $A = 900\mathrm{ m}^2$ when $x = 30$, giving $y = 30$.

The field is a $30\mathrm{ m} \times 30\mathrm{ m}$ square.

</details>

**Problem 6.** Given that $x^2 + 2ax + 4 = 0$ has two real roots $\alpha$ and $\beta$ ($\alpha \lt \beta$), find the range of $a$ for which $\beta - \alpha \gt 3$.

<details>
<summary>Solution</summary>

For real roots: $\Delta = 4a^2 - 16 \geq 0 \implies a^2 \geq 4 \implies a \leq -2$ or $a \geq 2$.

$$\alpha + \beta = -2a, \quad \alpha\beta = 4$$

$$(\beta - \alpha)^2 = (\alpha + \beta)^2 - 4\alpha\beta = 4a^2 - 16$$

$$\beta - \alpha = 2\sqrt{a^2 - 4}$$

(positive since $\beta \gt \alpha$)

$$2\sqrt{a^2 - 4} \gt 3 \implies a^2 - 4 \gt \frac{9}{4} \implies a^2 \gt \frac{25}{4} \implies |a| \gt \frac{5}{2}$$

Combined with $|a| \geq 2$: $a \lt -\dfrac{5}{2}$ or $a \gt \dfrac{5}{2}$.

</details>

**Problem 7.** Find the range of the function $f(x) = \dfrac{x^2 - x + 1}{x^2 + x + 1}$.

<details>
<summary>Solution</summary>

Let $y = \dfrac{x^2 - x + 1}{x^2 + x + 1}$. Since $x^2 + x + 1 = \left(x + \dfrac{1}{2}\right)^2 + \dfrac{3}{4} \gt 0$ for all real $x$, the denominator never vanishes.

$$y(x^2 + x + 1) = x^2 - x + 1 \implies yx^2 + yx + y = x^2 - x + 1$$

$$(y - 1)x^2 + (y + 1)x + (y - 1) = 0$$

For real $x$, $\Delta \geq 0$:

$$(y+1)^2 - 4(y-1)^2 \geq 0$$

$$(y + 1 - 2y + 2)(y + 1 + 2y - 2) \geq 0$$

$$(-y + 3)(3y - 1) \geq 0 \implies (y - 3)(3y - 1) \leq 0$$

$$\frac{1}{3} \leq y \leq 3$$

Range: $\left[\dfrac{1}{3},\; 3\right]$.

</details>

**Problem 8.** The roots of $x^2 + px + q = 0$ are $\alpha$ and $\beta$. If $\alpha^2 + \beta^2 = 10$ and $\alpha^4 + \beta^4 = 82$, find $p$ and $q$.

<details>
<summary>Solution</summary>

Note that $\alpha^4 + \beta^4 = (\alpha^2 + \beta^2)^2 - 2(\alpha\beta)^2 = 100 - 2(\alpha\beta)^2$.

$$100 - 2(\alpha\beta)^2 = 82 \implies 2(\alpha\beta)^2 = 18 \implies (\alpha\beta)^2 = 9 \implies \alpha\beta = 3 \;\mathrm{or}\; \alpha\beta = -3$$

**Case $\alpha\beta = 3$:** $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = 10 \implies (\alpha + \beta)^2 - 6 = 10 \implies (\alpha + \beta)^2 = 16 \implies \alpha + \beta = \pm 4$.

So $p = -(\alpha + \beta) = \pm 4$, $q = \alpha\beta = 3$. Two quadratics: $x^2 + 4x + 3 = 0$ and $x^2 - 4x + 3 = 0$.

**Case $\alpha\beta = -3$:** $(\alpha + \beta)^2 - 2(-3) = 10 \implies (\alpha + \beta)^2 = 4 \implies \alpha + \beta = \pm 2$.

So $p = \mp 2$, $q = -3$. Two quadratics: $x^2 + 2x - 3 = 0$ and $x^2 - 2x - 3 = 0$.

All four pairs are valid solutions.

</details>

---

## Cross-References

- **Functions:** Quadratic functions are a special case of polynomial functions. See [functions.md](./functions) and [functions-advanced.md](./functions-advanced).
- **Coordinate Geometry:** Parabolas as conic sections. See [coordinate-geometry.md](./coordinate-geometry).
- **Inequalities:** Quadratic inequalities are solved using discriminant and graph analysis. See the inequalities notes.
- **Permutations and Combinations:** Factorials appear in the quadratic formula derivation via completing the square. See [permutations-and-combinations.md](./permutations-and-combinations).

