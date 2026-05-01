---
title: Functions (Advanced)
description: "DSE Mathematics advanced functions notes covering composite functions, inverse functions, exponential functions, logarithmic functions, and function transformations."
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Maths
categories:
  - DSE
  - Maths
slug: dse-maths-compulsory-functions-advanced
---

This note extends the treatment of functions covered in [functions.md](./functions)), focusing on
domain restrictions, composite and inverse functions with non-trivial domains, and graphical
transformations.

## Domain and Range

### Natural Domain

The **natural domain** of a function is the largest subset of $\mathbb{R}$ for which the function
expression is defined. Restrictions arise from:

| Restriction      | Condition              | Example                                                                   |
| ---------------- | ---------------------- | ------------------------------------------------------------------------- |
| Division by zero | Denominator $\neq 0$   | $f(x) = \dfrac{1}{x - 2}$: $\mathrm{dom}(f) = \mathbb{R} \setminus \{2\}$ |
| Even root        | Radicand $\geqslant 0$ | $f(x) = \sqrt{x - 3}$: $\mathrm{dom}(f) = [3, \infty)$                    |
| Logarithm        | Argument $\gt 0$       | $f(x) = \ln(x + 1)$: $\mathrm{dom}(f) = (-1, \infty)$                     |

### Finding the Range

To find the range of $f(x)$:

1. Complete the square (for quadratics).
2. Consider the behaviour of the function at critical points and at the boundaries of the domain.
3. For rational functions, find horizontal asymptotes and analyse sign changes.

### Worked Example 1

Find the domain and range of $f(x) = \sqrt{4 - x^2}$.

Domain: $4 - x^2 \geqslant 0 \implies x^2 \leqslant 4 \implies -2 \leqslant x \leqslant 2$.

Range: Since $4 - x^2$ ranges from $0$ (at $x = \pm 2$) to $4$ (at $x = 0$), and $\sqrt{\cdot}$ is
non-negative: $\mathrm{range}(f) = [0, 2]$.

---

## Composite Functions

### Definition

Given $f$ and $g$, the composite $f \circ g$ is:

$$(f \circ g)(x) = f(g(x))$$

### Domain of a Composite

$$\mathrm{dom}(f \circ g) = \{x \in \mathrm{dom}(g) : g(x) \in \mathrm{dom}(f)\}$$

### Worked Example 2

Let $f(x) = \sqrt{x + 1}$ and $g(x) = x^2 - 4$. Find $\mathrm{dom}(f \circ g)$.

$\mathrm{dom}(g) = \mathbb{R}$.

$\mathrm{dom}(f) = [ -1, \infty)$, so we need $g(x) \geqslant -1$, i.e.,
$x^2 - 4 \geqslant -1 \implies x^2 \geqslant 3$.

$$\mathrm{dom}(f \circ g) = (-\infty, -\sqrt{3}] \cup [\sqrt{3}, \infty)$$

### Worked Example 3

Let $f(x) = \dfrac{1}{x}$ and $g(x) = x + 1$. Find $f \circ g$, $g \circ f$, and their domains.

$(f \circ g)(x) = f(g(x)) = f(x + 1) = \dfrac{1}{x + 1}$,
$\mathrm{dom} = \mathbb{R} \setminus \{-1\}$.

$(g \circ f)(x) = g(f(x)) = g\!\left(\dfrac{1}{x}\right) = \dfrac{1}{x} + 1$,
$\mathrm{dom} = \mathbb{R} \setminus \{0\}$.

---

## Inverse Functions

### Existence Condition

A function $f$ has an inverse $f^{-1}$ if and only if $f$ is bijective (one-to-one and onto). If the
natural domain of $f$ does not yield injectivity, restrict the domain.

### Procedure to Find $f^{-1}$

1. Set $y = f(x)$.
2. Solve for $x$ in terms of $y$.
3. Interchange $x$ and $y$ to obtain $f^{-1}(x)$.

The domain of $f^{-1}$ equals the range of $f$, and vice versa.

### Graphical Relationship

The graph of $y = f^{-1}(x)$ is the reflection of $y = f(x)$ in the line $y = x$.

### Worked Example 4

Find the inverse of $f(x) = \dfrac{2x - 3}{x + 1}$ for $x \neq -1$.

Set $y = \dfrac{2x - 3}{x + 1}$.

$y(x + 1) = 2x - 3 \implies yx + y = 2x - 3 \implies yx - 2x = -3 - y \implies x(y - 2) = -(y + 3)$

$$x = \frac{-(y + 3)}{y - 2} = \frac{y + 3}{2 - y}$$

Therefore $f^{-1}(x) = \dfrac{x + 3}{2 - x}$, with domain $\mathbb{R} \setminus \{2\}$.

---

## Function Transformations

### Individual Transformations

Given $y = f(x)$:

| Transformation | Effect on Graph                                               |
| -------------- | ------------------------------------------------------------- | --- | ----------------------------------- |
| $y = f(x) + c$ | Vertical shift up by $c$ ($c \gt 0$) or down ($c \lt 0$)      | | |
| $y = f(x - h)$ | Horizontal shift right by $h$ ($h \gt 0$) or left ($h \lt 0$) | | |
| $y = af(x)$    | Vertical stretch by factor $                                  | a   | $; reflect in $x$-axis if $a \lt 0$ |
| $y = f(kx)$    | Horizontal stretch by factor $1/                              | k   | $; reflect in $y$-axis if $k \lt 0$ |

### Combined Transformation: $y = af(x + b) + c$

Apply in order from inside out:

1. Horizontal shift by $-b$
2. Vertical stretch/reflection by factor $a$
3. Vertical shift by $c$

### Worked Example 5

The graph of $y = f(x)$ passes through $(2, 5)$ and $(4, -1)$. Find the corresponding points on
$y = -2f(x - 3) + 1$.

For $(2, 5)$: set $x - 3 = 2 \implies x = 5$. Then $y = -2(5) + 1 = -9$. Point: $(5, -9)$.

For $(4, -1)$: set $x - 3 = 4 \implies x = 7$. Then $y = -2(-1) + 1 = 3$. Point: $(7, 3)$.

### Worked Example 6

Describe the transformation from $y = \sqrt{x}$ to $y = \sqrt{3 - x} + 2$.

$y = \sqrt{-(x - 3)} + 2 = f(-(x - 3)) + 2$ where $f(x) = \sqrt{x}$.

1. Reflect in $y$-axis: $y = \sqrt{-x}$
2. Shift right by 3: $y = \sqrt{-(x - 3)} = \sqrt{3 - x}$
3. Shift up by 2: $y = \sqrt{3 - x} + 2$

Domain: $3 - x \geqslant 0 \implies x \leqslant 3$. Range: $[2, \infty)$.

---

## Piecewise Functions

A piecewise function is defined by different expressions on different intervals of its domain.

### Worked Example 7

$$f(x) = \begin{cases} x^2 & \mathrm{if } x \lt 0 \\ 2x + 1 & \mathrm{if } 0 \leqslant x \leqslant 3 \\ 10 - x & \mathrm{if } x \gt 3 \end{cases}$$

Find $f(-2)$, $f(0)$, $f(3)$, and $f(5)$.

$f(-2) = (-2)^2 = 4$, $f(0) = 2(0) + 1 = 1$, $f(3) = 2(3) + 1 = 7$, $f(5) = 10 - 5 = 5$.

---

## Common Pitfalls

- When finding the domain of $f \circ g$, applying the domain restrictions of $f$ to $x$ instead of
  to $g(x)$. The argument of $f$ must be valid, so it is $g(x)$ that must fall in $\mathrm{dom}(f)$.
- Forgetting that $f \circ g \neq g \circ f$ in general. Always check the order.
- When finding an inverse, forgetting to verify that the function is one-to-one on the given domain.
- Confusing $y = f(-x)$ (reflection in $y$-axis) with $y = -f(x)$ (reflection in $x$-axis).
- For piecewise functions, using the wrong expression for a given $x$-value.

---

## Summary Table

| Topic                 | Key Result                                             |
| --------------------- | ------------------------------------------------------ |
| Domain of $f \circ g$ | $\{x \in \mathrm{dom}(g) : g(x) \in \mathrm{dom}(f)\}$ |
| Inverse existence     | $f$ must be bijective                                  |
| $f^{-1}(f(x)) = x$    | For all $x \in \mathrm{dom}(f)$                        |
| $f(f^{-1}(x)) = x$    | For all $x \in \mathrm{dom}(f^{-1})$                   |
| Graph of inverse      | Reflection in $y = x$                                  |
| $y = f(x - h)$        | Shift right by $h$                                     |

---

<details>
<summary>Wrap-up Questions</summary>

1. **Question:** Let $f(x) = \dfrac{x + 2}{x - 1}$ and $g(x) = 2x - 3$. Find $(f \circ g)(x)$ and
   its domain.

$(f \circ g)(x) = f(2x - 3) = \dfrac{2x - 3 + 2}{2x - 3 - 1} = \dfrac{2x - 1}{2x - 4}$.

$\mathrm{dom}(g) = \mathbb{R}$. $\mathrm{dom}(f) = \mathbb{R} \setminus \{1\}$, so $g(x) \neq 1$:
$2x - 3 \neq 1 \implies x \neq 2$. Also $2x - 4 \neq 0 \implies x \neq 2$.
$\mathrm{dom}(f \circ g) = \mathbb{R} \setminus \{2\}$.

2. **Question:** Find $f^{-1}$ for $f(x) = \dfrac{3x + 1}{x - 2}$ ($x \neq 2$).

Set $y = \dfrac{3x + 1}{x - 2}$. Then
$y(x - 2) = 3x + 1 \implies yx - 2y = 3x + 1 \implies x(y - 3) = 2y + 1$.

$f^{-1}(x) = \dfrac{2x + 1}{x - 3}$, $\mathrm{dom}(f^{-1}) = \mathbb{R} \setminus \{3\}$.

3. **Question:** Let $f(x) = x^2 - 4x + 3$ with domain $[1, \infty)$. Find $f^{-1}(0)$.

First find $f^{-1}$. Set $y = (x - 2)^2 - 1$. Since domain is $[1, \infty)$, range is
$[-1, \infty)$.

$(x - 2)^2 = y + 1 \implies x - 2 = \sqrt{y + 1}$ (positive root since $x \geqslant 1$).

$f^{-1}(x) = 2 + \sqrt{x + 1}$, $\mathrm{dom}(f^{-1}) = [-1, \infty)$.

$f^{-1}(0) = 2 + \sqrt{0 + 1} = 2 + 1 = 3$.

Verification: $f(3) = 9 - 12 + 3 = 0$. Confirmed.

4. **Question:** The graph of $y = f(x)$ has a minimum at $(1, -2)$ and passes through $(0, 3)$.
   Find the corresponding points on $y = 3f(2x) + 1$.

$(1, -2) \to$ set $2x = 1 \implies x = 0.5$, $y = 3(-2) + 1 = -5$. Point: $(0.5, -5)$.

$(0, 3) \to$ set $2x = 0 \implies x = 0$, $y = 3(3) + 1 = 10$. Point: $(0, 10)$.

5. **Question:** A function $f$ is defined by $f(x) = 2 - x^2$ for $x \leqslant 0$. State the range
   of $f$ and find $f^{-1}$.

Since $x \leqslant 0$: $x^2 \geqslant 0$, so $f(x) = 2 - x^2 \leqslant 2$. As $x \to -\infty$,
$f(x) \to -\infty$. Range: $(-\infty, 2]$.

Set $y = 2 - x^2 \implies x^2 = 2 - y \implies x = -\sqrt{2 - y}$ (negative root since
$x \leqslant 0$).

$f^{-1}(x) = -\sqrt{2 - x}$, $\mathrm{dom}(f^{-1}) = (-\infty, 2]$.

6. **Question:** Given $f(x) = \sqrt{x - 1}$ and $g(x) = x^2 + x + 1$, find
   $\mathrm{dom}(g \circ f)$.

$\mathrm{dom}(f) = [1, \infty)$, $\mathrm{dom}(g) = \mathbb{R}$.

$(g \circ f)(x) = g(\sqrt{x - 1}) = (\sqrt{x - 1})^2 + \sqrt{x - 1} + 1 = x - 1 + \sqrt{x - 1} + 1 = x + \sqrt{x - 1}$.

Since $g$ has no domain restriction, $\mathrm{dom}(g \circ f) = \mathrm{dom}(f) = [1, \infty)$.

7. **Question:** Find the domain and range of $f(x) = \dfrac{1}{x^2 + 1}$.

Domain: $x^2 + 1 \neq 0$ for all real $x$ (since $x^2 \geqslant 0$). $\mathrm{dom}(f) = \mathbb{R}$.

Range: $x^2 + 1 \geqslant 1$, so $0 \lt \dfrac{1}{x^2 + 1} \leqslant 1$.
$\mathrm{range}(f) = (0, 1]$.

8. **Question:** Let $f(x) = |x - 3| + |x + 1|$. Express $f$ as a piecewise function and find its
   minimum value.

Critical points at $x = 3$ and $x = -1$:

$$f(x) = \begin{cases} -(x - 3) + -(x + 1) = -2x + 2 & \mathrm{if } x \lt -1 \\ -(x - 3) + (x + 1) = 4 & \mathrm{if } -1 \leqslant x \leqslant 3 \\ (x - 3) + (x + 1) = 2x - 2 & \mathrm{if } x \gt 3 \end{cases}$$

For $x \lt -1$: $f(x) = -2x + 2$, which is decreasing (as $x$ increases towards $-1$). As
$x \to -1^-$: $f(x) \to 4$.

For $-1 \leqslant x \leqslant 3$: $f(x) = 4$ (constant).

For $x \gt 3$: $f(x) = 2x - 2$, which is increasing.

Minimum value: $4$, attained for all $x \in [-1, 3]$.

</details>

---

## Additional Worked Examples

**Worked Example 8: Domain of a composite with square root and rational function**

Let $f(x) = \dfrac{x + 1}{x - 2}$ and $g(x) = \sqrt{x - 3}$. Find $\mathrm{dom}(f \circ g)$ and $\mathrm{dom}(g \circ f)$.

<details>
<summary>Solution</summary>

$\mathrm{dom}(g) = [3, \infty)$. $\mathrm{dom}(f) = \mathbb{R} \setminus \{2\}$.

**For $f \circ g$:** We need $g(x) \in \mathrm{dom}(f)$, i.e., $\sqrt{x-3} \neq 2$.

$\sqrt{x-3} = 2 \implies x = 7$. So exclude $x = 7$.

$\mathrm{dom}(f \circ g) = [3, \infty) \setminus \{7\}$.

**For $g \circ f$:** We need $x \in \mathrm{dom}(f)$ and $f(x) \geq 3$.

$$\frac{x+1}{x-2} \geq 3 \implies \frac{x+1-3(x-2)}{x-2} \geq 0 \implies \frac{-2x+7}{x-2} \geq 0$$

Critical points: $x = \dfrac{7}{2}$ and $x = 2$.

| Interval | Sign of $\dfrac{-2x+7}{x-2}$ |
|---|---|
| $x \lt 2$ | negative / negative $=$ positive |
| $2 \lt x \lt \dfrac{7}{2}$ | positive / positive $=$ positive |
| $x \gt \dfrac{7}{2}$ | negative / positive $=$ negative |

At $x = \dfrac{7}{2}$: expression equals $0$, which satisfies $\geq 0$.

$\mathrm{dom}(g \circ f) = \left(2,\; \dfrac{7}{2}\right]$.

</details>

**Worked Example 9: Inverse of a restricted quadratic**

Let $f(x) = 2x^2 - 8x + 5$ with domain $[2, \infty)$. Find $f^{-1}$ and state its domain and range.

<details>
<summary>Solution</summary>

Complete the square: $f(x) = 2(x^2 - 4x) + 5 = 2\!\left[(x-2)^2 - 4\right] + 5 = 2(x-2)^2 - 3$.

Since the domain is $[2, \infty)$ and the vertex is at $x = 2$, the function is strictly increasing and hence one-to-one.

Range: $[-3, \infty)$.

Set $y = 2(x-2)^2 - 3$:

$$(x-2)^2 = \frac{y+3}{2}$$

$$x = 2 + \sqrt{\frac{y+3}{2}}$$

(positive root since $x \geq 2$)

$$f^{-1}(x) = 2 + \sqrt{\frac{x+3}{2}}$$

$\mathrm{dom}(f^{-1}) = [-3, \infty)$, $\mathrm{range}(f^{-1}) = [2, \infty)$.

Verification: $f^{-1}(f(3)) = f^{-1}(-1) = 2 + \sqrt{1} = 3$. Correct.

</details>

**Worked Example 10: Transformation of multiple points**

The graph of $y = f(x)$ passes through $(1, 4)$ and has a local minimum at $(2, -1)$. Find the corresponding points on $y = 2f(3x - 6) + 5$.

<details>
<summary>Solution</summary>

Rewrite: $y = 2f(3(x-2)) + 5$.

**For $(1, 4)$ on $y = f(x)$:** Set $3(x-2) = 1$, so $x - 2 = \dfrac{1}{3}$, giving $x = \dfrac{7}{3}$.

$$y = 2(4) + 5 = 13$$

Corresponding point: $\left(\dfrac{7}{3},\; 13\right)$.

**For the minimum at $(2, -1)$:** Set $3(x-2) = 2$, so $x - 2 = \dfrac{2}{3}$, giving $x = \dfrac{8}{3}$.

$$y = 2(-1) + 5 = 3$$

Corresponding point: $\left(\dfrac{8}{3},\; 3\right)$. This is the minimum of the transformed graph.

</details>

**Worked Example 11: Composite with logarithm**

Let $f(x) = \ln(x - 1)$ and $g(x) = x^2 + 1$. Find $(f \circ g)(x)$, $(g \circ f)(x)$, and their domains.

<details>
<summary>Solution</summary>

$\mathrm{dom}(g) = \mathbb{R}$, $\mathrm{dom}(f) = (1, \infty)$.

**$(f \circ g)(x) = f(g(x)) = \ln(x^2 + 1 - 1) = \ln(x^2)$.**

Domain: need $g(x) \in \mathrm{dom}(f)$, i.e., $x^2 + 1 \gt 1 \implies x^2 \gt 0 \implies x \neq 0$.

$\mathrm{dom}(f \circ g) = \mathbb{R} \setminus \{0\}$.

**$(g \circ f)(x) = g(f(x)) = [\ln(x-1)]^2 + 1$.**

Domain: $\mathrm{dom}(g \circ f) = \mathrm{dom}(f) = (1, \infty)$.

</details>

**Worked Example 12: Self-inverse function**

Show that $f(x) = \dfrac{3x - 2}{x - 3}$ ($x \neq 3$) is self-inverse.

<details>
<summary>Solution</summary>

Set $y = \dfrac{3x - 2}{x - 3}$:

$$y(x - 3) = 3x - 2 \implies xy - 3y = 3x - 2 \implies xy - 3x = 3y - 2$$

$$x(y - 3) = 3y - 2 \implies x = \frac{3y - 2}{y - 3}$$

Interchanging $x$ and $y$:

$$f^{-1}(x) = \frac{3x - 2}{x - 3} = f(x)$$

Since $f^{-1} = f$, the function is self-inverse.

</details>

---

## Additional Common Pitfalls

1. **Applying domain restrictions to $x$ instead of $g(x)$.** When finding $\mathrm{dom}(f \circ g)$, the condition $g(x) \in \mathrm{dom}(f)$ must be applied to the expression $g(x)$, not to $x$ directly. Always substitute first, then impose domain conditions.

2. **Assuming injectivity on the natural domain.** A quadratic $ax^2 + bx + c$ is only one-to-one on a half-domain $(-\infty,\; -b/(2a)]$ or $[-b/(2a),\; \infty)$. Before finding an inverse, verify or restrict the domain.

3. **Choosing the wrong branch of the inverse.** When $f(x) = x^2$ is restricted to $(-\infty, 0]$, the inverse is $f^{-1}(x) = -\sqrt{x}$, not $+\sqrt{x}$. Always match the sign to the restricted domain.

4. **Composition order confusion.** $(f \circ g)(x) = f(g(x))$ means $g$ is applied first, then $f$. The notation reads right-to-left: $(f \circ g)(x)$ is "$f$ of $g$ of $x$".

5. **Transformation order errors.** For $y = af(kx + b) + c$, apply from inside out: horizontal shift by $-b$, horizontal stretch by $1/k$, vertical stretch by $a$, vertical shift by $c$. Mixing up this order is a very common mistake.

6. **Ignoring the range when checking invertibility.** Even if $f$ is one-to-one on its domain, the codomain must equal the range for $f$ to be bijective. In DSE problems, the codomain is usually assumed to be the range unless stated otherwise.

7. **Forgetting that $f \circ g$ and $g \circ f$ differ.** In general, $f \circ g \neq g \circ f$. Always compute each separately and check domains independently.

8. **Piecewise function boundary values.** At the boundary between two pieces, always check which expression applies. If the definition uses $\leq$ for one piece and $\lt$ for the next, the boundary point belongs to the $\leq$ piece.

---

## Exam-Style Problems

**Problem 1.** Let $f(x) = \dfrac{2x + 3}{x - 1}$ ($x \neq 1$) and $g(x) = \sqrt{x + 2}$. Find $(f \circ g)(x)$ and its domain.

<details>
<summary>Solution</summary>

$$(f \circ g)(x) = f(\sqrt{x+2}) = \frac{2\sqrt{x+2} + 3}{\sqrt{x+2} - 1}$$

$\mathrm{dom}(g) = [-2, \infty)$. $\mathrm{dom}(f) = \mathbb{R} \setminus \{1\}$.

Need $\sqrt{x+2} \neq 1 \implies x + 2 \neq 1 \implies x \neq -1$.

$\mathrm{dom}(f \circ g) = [-2, -1) \cup (-1, \infty)$.

</details>

**Problem 2.** Find the inverse of $f(x) = \dfrac{2x - 1}{x + 3}$ ($x \neq -3$). Hence determine whether $f(x) = f^{-1}(x)$ has any real solutions.

<details>
<summary>Solution</summary>

Set $y = \dfrac{2x-1}{x+3}$: $y(x+3) = 2x-1 \implies xy + 3y = 2x - 1 \implies x(y-2) = -1 - 3y$.

$$f^{-1}(x) = \frac{-1-3x}{x-2} = \frac{3x+1}{2-x}$$

For $f(x) = f^{-1}(x)$:

$$\frac{2x-1}{x+3} = \frac{3x+1}{2-x}$$

$$(2x-1)(2-x) = (3x+1)(x+3)$$

$$4x - 2x^2 - 2 + x = 3x^2 + 9x + x + 3$$

$$-2x^2 + 5x - 2 = 3x^2 + 10x + 3$$

$$-5x^2 - 5x - 5 = 0 \implies x^2 + x + 1 = 0$$

$\Delta = 1 - 4 = -3 \lt 0$. No real solutions.

</details>

**Problem 3.** The function $f$ is defined by $f(x) = x^2 + 4x$ for $x \geq -2$. Find $f^{-1}(5)$.

<details>
<summary>Solution</summary>

$f(x) = (x+2)^2 - 4$. Since $x \geq -2$ and the vertex is at $x = -2$, $f$ is strictly increasing.

Range: $[-4, \infty)$. Since $5 \geq -4$, $f^{-1}(5)$ exists.

Set $(x+2)^2 - 4 = 5 \implies (x+2)^2 = 9 \implies x + 2 = 3$ (positive root).

$$x = 1$$

$f^{-1}(5) = 1$. Verification: $f(1) = 1 + 4 = 5$. Correct.

</details>

**Problem 4.** Describe fully the sequence of transformations mapping $y = x^2$ to $y = 2(3-x)^2 + 1$.

<details>
<summary>Solution</summary>

$y = 2(3-x)^2 + 1 = 2[-(x-3)]^2 + 1 = 2(x-3)^2 + 1$.

1. **Translate** right by $3$ units: $y = (x-3)^2$.
2. **Vertical stretch** by factor $2$: $y = 2(x-3)^2$.
3. **Translate** up by $1$ unit: $y = 2(x-3)^2 + 1$.

The vertex moves from $(0, 0)$ to $(3, 1)$. The parabola opens upward in both cases.

</details>

**Problem 5.** Let $f(x) = \dfrac{1}{x+1}$ ($x \neq -1$) and $g(x) = x^2$. Find $(f \circ g \circ f)(x)$ and its domain.

<details>
<summary>Solution</summary>

First, $(g \circ f)(x) = g(f(x)) = \left(\dfrac{1}{x+1}\right)^2 = \dfrac{1}{(x+1)^2}$.

Then:

$$(f \circ g \circ f)(x) = f\!\left(\frac{1}{(x+1)^2}\right) = \frac{1}{\dfrac{1}{(x+1)^2} + 1} = \frac{(x+1)^2}{(x+1)^2 + 1} = \frac{(x+1)^2}{x^2 + 2x + 2}$$

Domain: need $x + 1 \neq 0 \implies x \neq -1$, and $\dfrac{1}{(x+1)^2} + 1 \neq 0$.

Since $\dfrac{1}{(x+1)^2} \geq 0$ for all $x \neq -1$, the second expression is always at least $1 > 0$.

$\mathrm{dom}(f \circ g \circ f) = \mathbb{R} \setminus \{-1\}$.

</details>

**Problem 6.** Given $f(x) = |2x - 1| + |x + 3|$, find the minimum value of $f$.

<details>
<summary>Solution</summary>

Critical points: $2x - 1 = 0 \implies x = \dfrac{1}{2}$, and $x + 3 = 0 \implies x = -3$.

For $x \lt -3$: $f(x) = -(2x-1) + -(x+3) = -3x - 2$ (decreasing as $x$ increases).

For $-3 \leq x \lt \dfrac{1}{2}$: $f(x) = -(2x-1) + (x+3) = -x + 4$ (decreasing).

For $x \geq \dfrac{1}{2}$: $f(x) = (2x-1) + (x+3) = 3x + 2$ (increasing).

The minimum occurs at the transition from decreasing to increasing, i.e., at $x = \dfrac{1}{2}$:

$$f\!\left(\frac{1}{2}\right) = 3\!\left(\frac{1}{2}\right) + 2 = \frac{7}{2}$$

Minimum value: $\dfrac{7}{2}$, attained at $x = \dfrac{1}{2}$.

</details>

**Problem 7.** If $f(x) = \dfrac{x}{x^2 + 1}$, find the range of $f$.

<details>
<summary>Solution</summary>

Let $y = \dfrac{x}{x^2 + 1}$. Then $yx^2 + y = x \implies yx^2 - x + y = 0$.

For real $x$, this quadratic in $x$ must have $\Delta \geq 0$:

$$\Delta = 1 - 4y^2 \geq 0 \implies y^2 \leq \frac{1}{4} \implies -\frac{1}{2} \leq y \leq \frac{1}{2}$$

When $y = \dfrac{1}{2}$: $\dfrac{1}{2}x^2 - x + \dfrac{1}{2} = 0 \implies (x-1)^2 = 0 \implies x = 1$. Attainable.

When $y = -\dfrac{1}{2}$: $\dfrac{1}{2}x^2 + x + \dfrac{1}{2} = 0 \implies (x+1)^2 = 0 \implies x = -1$. Attainable.

Range: $\left[-\dfrac{1}{2},\; \dfrac{1}{2}\right]$.

</details>

**Problem 8.** If $f(x) = 2x - 1$ and $g(x) = x + 3$, find the linear function $h(x)$ such that $(f \circ h)(x) = (g \circ f)(x)$ for all $x$.

<details>
<summary>Solution</summary>

$(g \circ f)(x) = g(2x - 1) = 2x - 1 + 3 = 2x + 2$.

$(f \circ h)(x) = f(h(x)) = 2h(x) - 1$.

Setting equal: $2h(x) - 1 = 2x + 2 \implies h(x) = x + \dfrac{3}{2}$.

Verification: $(f \circ h)(x) = 2\!\left(x + \dfrac{3}{2}\right) - 1 = 2x + 2$. Correct.

</details>

---

## Cross-References

- **Basic Functions:** Foundational definitions and notation are in [functions.md](./functions)).
- **Quadratics:** Quadratic functions feature heavily in inverse function problems. See [quadratics.md](./dse-maths-compulsory-quadratics)).
- **Inequalities:** Domain restrictions often involve solving inequalities. See the inequalities notes.
- **Coordinate Geometry:** Graphical interpretations of functions and transformations. See [coordinate-geometry.md](./dse-maths-compulsory-coordinate-geometry)).

