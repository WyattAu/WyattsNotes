---
title: Functions (Advanced)
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Maths
categories:
  - DSE
  - Maths
slug: dse-maths-compulsory-functions-advanced
---

This note extends the treatment of functions covered in [functions.md](./functions.md), focusing on
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
| $y = f(x) + c$ | Vertical shift up by $c$ ($c \gt 0$) or down ($c \lt 0$)      |
| $y = f(x - h)$ | Horizontal shift right by $h$ ($h \gt 0$) or left ($h \lt 0$) |
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

$$f(x) = \begin{cases} -(x - 3) + -(x + 1) = -2x + 2 & \text{if } x \lt -1 \\ -(x - 3) + (x + 1) = 4 & \text{if } -1 \leqslant x \leqslant 3 \\ (x - 3) + (x + 1) = 2x - 2 & \text{if } x \gt 3 \end{cases}$$

For $x \lt -1$: $f(x) = -2x + 2$, which is decreasing (as $x$ increases towards $-1$). As
$x \to -1^-$: $f(x) \to 4$.

For $-1 \leqslant x \leqslant 3$: $f(x) = 4$ (constant).

For $x \gt 3$: $f(x) = 2x - 2$, which is increasing.

Minimum value: $4$, attained for all $x \in [-1, 3]$.

</details>
