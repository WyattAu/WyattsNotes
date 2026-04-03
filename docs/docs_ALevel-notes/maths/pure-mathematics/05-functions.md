---
title: Functions
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: functions
---

## Board Coverage

| Board      | Paper      | Notes                                            |
| ---------- | ---------- | ------------------------------------------------ |
| AQA        | Paper 1, 2 | Functions, composition, inverse, transformations |
| Edexcel    | P1, P2     | Similar; modulus in P1                           |
| OCR (A)    | Paper 1, 2 | Includes composite functions                     |
| CIE (9709) | P1         | Functions, domain, range, inverse                |

---

## 1. Definitions

**Definition.** A _function_ $f$ from a set $A$ (the _domain_) to a set $B$ (the _codomain_) is a rule that assigns to each element $a \in A$ exactly one element $f(a) \in B$. We write $f: A \to B$.

**Definition.** The _range_ (or _image_) of $f$ is the set $\{f(a) : a \in A\} \subseteq B$ — the set of all values actually attained.

**Definition.** The _natural domain_ of a real-valued function defined by an algebraic expression is the largest subset of $\mathbb{R}$ for which the expression is defined. Common restrictions:

- Denominators cannot be zero: $x \neq 0$ in $\frac{1}{x}$.
- Square roots require non-negative arguments: $x \geq 0$ in $\sqrt{x}$.
- Logarithms require positive arguments: $x > 0$ in $\ln x$.

<details>
<summary>Example</summary>
<p>

Find the natural domain of $f(x) = \sqrt{x + 2} + \frac{1}{x - 1}$.

We need: $x + 2 \geq 0$ (for the square root) AND $x - 1 \neq 0$ (for the denominator).

So $x \geq -2$ and $x \neq 1$.

Domain: $[-2, 1) \cup (1, \infty)$.

</p>
</details>

---

## 2. Composition of Functions

**Definition.** Given functions $f: A \to B$ and $g: B \to C$, the _composition_ $g \circ f: A \to C$ is defined by:

$$(g \circ f)(x) = g(f(x))$$

**Theorem.** Function composition is associative: $(h \circ g) \circ f = h \circ (g \circ f)$.

**Theorem.** Function composition is **not** commutative in general: $f \circ g \neq g \circ f$.

<details>
<summary>Example</summary>
<p>

Given $f(x) = 2x + 1$ and $g(x) = x^2$, find $f \circ g$ and $g \circ f$.

$(f \circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 1$.

$(g \circ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$.

Clearly $f \circ g \neq g \circ f$.

</p>
</details>

:::warning
When computing $f \circ g$, always apply $g$ first, then $f$. Think of it as reading right to left: $(f \circ g)(x) = f(g(x))$.
:::

---

## 3. Inverse Functions

**Definition.** A function $f: A \to B$ is _injective_ (one-to-one) if $f(a_1) = f(a_2) \implies a_1 = a_2$ for all $a_1, a_2 \in A$. Equivalently, distinct inputs give distinct outputs.

**Definition.** A function $f: A \to B$ is _surjective_ (onto) if for every $b \in B$, there exists $a \in A$ such that $f(a) = b$.

**Definition.** A function that is both injective and surjective is _bijective_.

**Theorem.** A function $f: A \to B$ has an inverse function $f^{-1}: B \to A$ if and only if $f$ is bijective.

_Proof._

($\Rightarrow$) If $f^{-1}$ exists, then $f$ must be injective (otherwise $f^{-1}$ would be multiply-defined) and surjective (otherwise $f^{-1}$ would be undefined for elements not in the range).

($\Leftarrow$) If $f$ is bijective, then for each $b \in B$ there exists exactly one $a \in A$ with $f(a) = b$. Define $f^{-1}(b) = a$. This is well-defined and satisfies $f^{-1}(f(a)) = a$ and $f(f^{-1}(b)) = b$. $\blacksquare$

_Intuition._ An inverse function "undoes" the original function. For this to work, the original function must pair each input with a unique output (injectivity) and must cover every element of the codomain (surjectivity).

### 3.1 Finding Inverse Functions

**Method.**

1. Write $y = f(x)$.
2. Solve for $x$ in terms of $y$.
3. Replace $y$ with $x$ (and $x$ with $y$) to get $f^{-1}(x)$.
4. State the domain of $f^{-1}$ (which equals the range of $f$).

<details>
<summary>Example</summary>
<p>

Find the inverse of $f(x) = \frac{2x + 3}{x - 1}$, $x \neq 1$.

$$y = \frac{2x + 3}{x - 1}$$

$$y(x - 1) = 2x + 3$$

$$yx - y = 2x + 3$$

$$yx - 2x = y + 3$$

$$x(y - 2) = y + 3$$

$$x = \frac{y + 3}{y - 2}$$

So $f^{-1}(x) = \frac{x + 3}{x - 2}$, with domain $x \neq 2$.

The range of $f$ is all real numbers except $f(x) = 2$: $\frac{2x + 3}{x - 1} = 2 \implies 2x + 3 = 2x - 2 \implies 3 = -2$, impossible. So the range is $\mathbb{R} \setminus \{2\}$, which equals the domain of $f^{-1}$. ✓

</p>
</details>

**Theorem.** The graph of $y = f^{-1}(x)$ is the reflection of $y = f(x)$ in the line $y = x$.

_Proof._ If $(a, b)$ lies on $y = f(x)$, then $b = f(a)$, so $a = f^{-1}(b)$, meaning $(b, a)$ lies on $y = f^{-1}(x)$. Swapping coordinates is reflection in $y = x$. $\blacksquare$

---

## 4. The Modulus Function

**Definition.** The _modulus_ (absolute value) function is defined by:

$$|x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$$

**Properties:**

$$
\begin{aligned}
|ab| &= |a| \cdot |b| \\
|a + b| &\leq |a| + |b| \quad \text{(Triangle inequality)} \\
|a|^2 &= a^2 \\
|x| &= \sqrt{x^2}
\end{aligned}
$$

**Theorem (Triangle Inequality).** $|a + b| \leq |a| + |b|$ for all $a, b \in \mathbb{R}$.

_Proof._ We consider cases based on the signs of $a$ and $b$.

Case 1: $a, b \geq 0$. Then $|a + b| = a + b = |a| + |b|$. Equality holds.

Case 2: $a, b \leq 0$. Then $a + b \leq 0$, so $|a + b| = -(a + b) = -a - b = |a| + |b|$. Equality holds.

Case 3: $a \geq 0$, $b \leq 0$. If $a + b \geq 0$: $|a + b| = a + b \leq a + (-b) = |a| + |b|$. If $a + b \leq 0$: $|a + b| = -(a + b) = -a - b \leq a - b = |a| + |b|$ (since $a \geq 0$ implies $a \geq -a$, i.e., $2a \geq 0$). $\blacksquare$

### 4.1 Solving Modulus Equations

To solve $|f(x)| = g(x)$:

1. Case 1: $f(x) \geq 0$, so $f(x) = g(x)$.
2. Case 2: $f(x) < 0$, so $-f(x) = g(x)$.
3. Check solutions against the case conditions.

<details>
<summary>Example</summary>
<p>

Solve $|2x - 3| = x + 2$.

Case 1: $2x - 3 \geq 0$, i.e., $x \geq \frac{3}{2}$.

$2x - 3 = x + 2 \implies x = 5$. Check: $5 \geq \frac{3}{2}$ ✓

Case 2: $2x - 3 < 0$, i.e., $x < \frac{3}{2}$.

$-(2x - 3) = x + 2 \implies -2x + 3 = x + 2 \implies -3x = -1 \implies x = \frac{1}{3}$. Check: $\frac{1}{3} < \frac{3}{2}$ ✓

Solutions: $x = \frac{1}{3}$ and $x = 5$.

</p>
</details>

---

## 5. Transformations of Graphs

### 5.1 Translations

**Theorem.** The graph of $y = f(x - a)$ is the graph of $y = f(x)$ translated by $a$ units in the positive $x$-direction.

_Proof._ Let $g(x) = f(x - a)$. The point $(x_0, y_0)$ lies on $y = g(x)$ if and only if $y_0 = g(x_0) = f(x_0 - a)$. This means $(x_0 - a, y_0)$ lies on $y = f(x)$. So the point $(x_0, y_0)$ on $g$ corresponds to the point $(x_0 - a, y_0)$ on $f$ — a shift right by $a$. $\blacksquare$

_Intuition._ Replacing $x$ with $x - a$ means "to get the same output, I need to input $a$ more." The graph shifts right to compensate.

Similarly, $y = f(x) + b$ translates up by $b$.

### 5.2 Reflections

| Transformation | Effect                     |
| -------------- | -------------------------- |
| $y = f(-x)$    | Reflection in the $y$-axis |
| $y = -f(x)$    | Reflection in the $x$-axis |

**Proof for $y = f(-x)$ as reflection in the $y$-axis.** If $(x_0, y_0)$ is on $y = f(x)$, then $y_0 = f(x_0)$. The point $(-x_0, y_0)$ satisfies $y_0 = f(-(-x_0)) = f(x_0)$, so it lies on $y = f(-x)$. Reflecting $(x_0, y_0)$ in the $y$-axis gives $(-x_0, y_0)$. $\blacksquare$

### 5.3 Stretches

| Transformation | Effect                                         |
| -------------- | ---------------------------------------------- |
| $y = f(ax)$    | Horizontal stretch, scale factor $\frac{1}{a}$ |
| $y = af(x)$    | Vertical stretch, scale factor $a$             |

**Proof for $y = f(ax)$ as horizontal stretch.** If $(x_0, y_0)$ is on $y = f(x)$, then on $y = f(ax)$, the same $y$-value occurs when $ax = x_0$, i.e., $x = \frac{x_0}{a}$. So $(\frac{x_0}{a}, y_0)$ is on the new graph — a horizontal stretch by factor $\frac{1}{a}$. $\blacksquare$

:::warning
Horizontal transformations are "backwards": $f(x - a)$ shifts **right** (not left), and $f(ax)$ stretches by $\frac{1}{a}$ (not $a$). This is the single most common error in this topic.
:::

### 5.4 Combined Transformations

When multiple transformations are applied, the order matters. The convention is:

$$y = af(x - p) + q$$

represents: horizontal translation by $p$ (right), vertical stretch by factor $a$, vertical translation by $q$ (up).

:::tip
Apply horizontal transformations first (inside the function), then vertical transformations (outside). The order inside-out matters.
:::

---

## 6. Problem Set

**Problem 1.** Given $f(x) = \frac{1}{x - 3} + 2$, find the domain, range, and inverse function.

<details>
<summary>Solution</summary>
<p>

Domain: $x \neq 3$, i.e., $\mathbb{R} \setminus \{3\}$.

Range: As $x \to 3^+$, $f(x) \to +\infty$; as $x \to 3^-$, $f(x) \to -\infty$. As $x \to \pm\infty$, $f(x) \to 2$. So $f(x) \neq 2$.

Range: $\mathbb{R} \setminus \{2\}$.

Inverse: $y = \frac{1}{x - 3} + 2 \implies y - 2 = \frac{1}{x - 3} \implies x - 3 = \frac{1}{y - 2} \implies x = \frac{1}{y - 2} + 3$.

$f^{-1}(x) = \frac{1}{x - 2} + 3$, domain $x \neq 2$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Inverse functions](#3-inverse-functions)

---

**Problem 2.** Given $f(x) = x^2 - 4x + 9$ for $x \geq 2$, find $f^{-1}(x)$.

<details>
<summary>Solution</summary>
<p>

Completing the square: $f(x) = (x - 2)^2 + 5$.

For $x \geq 2$, $f$ is injective (strictly increasing).

$$y = (x - 2)^2 + 5 \implies (x - 2)^2 = y - 5 \implies x - 2 = \sqrt{y - 5}$$

(taking the positive root since $x \geq 2$).

$$x = \sqrt{y - 5} + 2$$

$f^{-1}(x) = \sqrt{x - 5} + 2$, domain $x \geq 5$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Inverse functions](#3-inverse-functions)

---

**Problem 3.** Solve $|3x + 1| = 2x + 5$.

<details>
<summary>Solution</summary>
<p>

Case 1: $3x + 1 \geq 0$, i.e., $x \geq -\frac{1}{3}$.

$3x + 1 = 2x + 5 \implies x = 4$. Check: $4 \geq -\frac{1}{3}$ ✓

Case 2: $3x + 1 < 0$, i.e., $x < -\frac{1}{3}$.

$-(3x + 1) = 2x + 5 \implies -3x - 1 = 2x + 5 \implies -5x = 6 \implies x = -\frac{6}{5}$.

Check: $-\frac{6}{5} < -\frac{1}{3}$ ✓

Solutions: $x = -\frac{6}{5}$ and $x = 4$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Modulus equations](#41-solving-modulus-equations)

---

**Problem 4.** Given $f(x) = 2x - 1$ and $g(x) = x^2 + 3$, find $(g \circ f)(x)$ and solve $(g \circ f)(x) = 12$.

<details>
<summary>Solution</summary>
<p>

$(g \circ f)(x) = g(f(x)) = g(2x - 1) = (2x - 1)^2 + 3 = 4x^2 - 4x + 4$.

$4x^2 - 4x + 4 = 12 \implies 4x^2 - 4x - 8 = 0 \implies x^2 - x - 2 = 0 \implies (x - 2)(x + 1) = 0$.

$x = 2$ or $x = -1$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Composition](#2-composition-of-functions)

---

**Problem 5.** The graph of $y = f(x)$ passes through $(0, 1)$ and $(3, -2)$. State the coordinates of the corresponding points on:
(a) $y = f(x + 2)$
(b) $y = -f(x)$
(c) $y = f(2x)$
(d) $y = 3f(x) - 1$

<details>
<summary>Solution</summary>
<p>

(a) $y = f(x + 2)$: shift left by 2. Points: $(-2, 1)$ and $(1, -2)$.

(b) $y = -f(x)$: reflect in $x$-axis. Points: $(0, -1)$ and $(3, 2)$.

(c) $y = f(2x)$: horizontal stretch factor $\frac{1}{2}$. Points: $(0, 1)$ and $\left(\frac{3}{2}, -2\right)$.

(d) $y = 3f(x) - 1$: vertical stretch factor 3, then shift down 1. Points: $(0, 2)$ and $(3, -7)$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Transformations](#5-transformations-of-graphs)

---

**Problem 6.** The function $f$ is defined by $f(x) = x^3 - 3x + 1$. Show that $f$ is not injective on $\mathbb{R}$, and find the largest interval containing $x = 0$ on which $f$ is injective.

<details>
<summary>Solution</summary>
<p>

$f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$.

$f'(x) = 0$ at $x = \pm 1$. $f'(x) < 0$ for $-1 < x < 1$ (decreasing), and $f'(x) > 0$ for $x < -1$ or $x > 1$ (increasing).

Since $f$ is decreasing on $(-1, 1)$ and increasing on $(-\infty, -1)$ and $(1, \infty)$, it is not injective on all of $\mathbb{R}$. For example, $f(-2) = -8 + 6 + 1 = -1$ and $f(0) = 1$ and $f(1) = -1$. So $f(-2) = f(1) = -1$ with $-2 \neq 1$.

The largest interval containing $0$ on which $f$ is strictly monotonic (hence injective) is $[-1, 1]$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Injectivity](#3-inverse-functions) and [Differentiation](./10-differentiation.md)

---

**Problem 7.** Solve the inequality $|x - 3| > |2x + 1|$.

<details>
<summary>Solution</summary>
<p>

Square both sides (both sides are non-negative):

$$
\begin{aligned}
(x - 3)^2 &> (2x + 1)^2 \\
x^2 - 6x + 9 &> 4x^2 + 4x + 1 \\
-3x^2 - 10x + 8 &> 0 \\
3x^2 + 10x - 8 &< 0
\end{aligned}
$$

$$(3x - 2)(x + 4) < 0$$

$$-4 < x < \frac{2}{3}$$

</p>
</details>
<b>If you get this wrong, revise:</b> [Modulus function](#4-the-modulus-function)

---

**Problem 8.** Given $f(x) = e^{2x}$ and $g(x) = \ln(x + 1)$, find $f^{-1}$, $g^{-1}$, and the domain of $f \circ g$.

<details>
<summary>Solution</summary>
<p>

$f^{-1}(x)$: $y = e^{2x} \implies \ln y = 2x \implies x = \frac{\ln y}{2}$.

$f^{-1}(x) = \frac{1}{2}\ln x$, domain $x > 0$.

$g^{-1}(x)$: $y = \ln(x + 1) \implies x + 1 = e^y \implies x = e^y - 1$.

$g^{-1}(x) = e^x - 1$, domain all $\mathbb{R}$.

$(f \circ g)(x) = f(g(x)) = f(\ln(x + 1)) = e^{2\ln(x+1)} = (x + 1)^2$.

Domain of $f \circ g$: we need $x + 1 > 0$ (for $g$), so $x > -1$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Composition](#2-composition-of-functions) and [Inverse functions](#3-inverse-functions)

---

**Problem 9.** Sketch the graph of $y = |x^2 - 4|$, showing the coordinates of all points where the graph meets the axes.

<details>
<summary>Solution</summary>
<p>

$y = |x^2 - 4| = |(x - 2)(x + 2)|$.

When $x^2 - 4 \geq 0$ (i.e., $x \leq -2$ or $x \geq 2$): $y = x^2 - 4$ (parabola opening up).

When $x^2 - 4 < 0$ (i.e., $-2 < x < 2$): $y = -(x^2 - 4) = 4 - x^2$ (parabola opening down).

$y$-intercept: $x = 0 \implies y = 4$. Point: $(0, 4)$.

$x$-intercepts: $x^2 - 4 = 0 \implies x = \pm 2$. Points: $(-2, 0)$ and $(2, 0)$.

The graph is the standard parabola $y = x^2 - 4$ with the part between $x = -2$ and $x = 2$ reflected above the $x$-axis.

</p>
</details>
<b>If you get this wrong, revise:</b> [Modulus function](#4-the-modulus-function) and [Transformations](#5-transformations-of-graphs)

---

**Problem 10.** Prove that $f: [0, \infty) \to [0, \infty)$ defined by $f(x) = x^2 + 4x$ is bijective, and find $f^{-1}$.

<details>
<summary>Solution</summary>
<p>

**Injective:** $f(x) = x^2 + 4x = (x+2)^2 - 4$. For $x \geq 0$, $x + 2 > 0$, so $(x+2)^2$ is strictly increasing, hence $f$ is strictly increasing, hence injective.

**Surjective:** For any $y \geq 0$: $x^2 + 4x - y = 0$. By the quadratic formula: $x = \frac{-4 + \sqrt{16 + 4y}}{2} = -2 + \sqrt{4 + y}$. Since $y \geq 0$: $\sqrt{4 + y} \geq 2$, so $x \geq 0$. Thus every $y \geq 0$ has a preimage.

**Inverse:** $y = x^2 + 4x \implies x^2 + 4x - y = 0 \implies x = \frac{-4 + \sqrt{16 + 4y}}{2}$ (taking the positive root since $x \geq 0$).

$f^{-1}(x) = -2 + \sqrt{4 + x} = \sqrt{x + 4} - 2$, domain $x \geq 0$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Inverse functions](#3-inverse-functions)
