---
title: Functions
description:
  "A-Level Mathematics notes on Functions: Board Coverage; 1. Definitions; 4. The Modulus Function; 4.1 Solving Modulus Equations."
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

<hr />

## 1. Definitions

**Definition.** A _function_ $f$ from a set $A$ (the _domain_) to a set $B$ (the _codomain_) is a
rule that assigns to each element $a \in A$ exactly one element $f(a) \in B$. We write $f: A \to B$.

**Definition.** The _range_ (or _image_) of $f$ is the set $\{f(a) : a \in A\} \subseteq B$ — the
set of all values actually attained.

**Definition.** The _natural domain_ of a real-valued function defined by an algebraic expression is
the largest subset of $\mathbb{R}$ for which the expression is defined. Common restrictions:

- Denominators cannot be zero: $x \neq 0$ in $\frac{1}{x}$.
- Square roots require non-negative arguments: $x \geq 0$ in $\sqrt{x}$.
- Logarithms require positive arguments: $x > 0$ in $\ln x$.

<details>
<summary>Example</summary>
Find the natural domain of $f(x) = \sqrt{x + 2} + \frac{1}{x - 1}$.

We need: $x + 2 \geq 0$ (for the square root) AND $x - 1 \neq 0$ (for the denominator).

So $x \geq -2$ and $x \neq 1$.

Domain: $[-2, 1) \cup (1, \infty)$.

</details>

<hr />

## 2. Composition of Functions

**Definition.** Given functions $f: A \to B$ and $g: B \to C$, the _composition_
$g \circ f: A \to C$ is defined by:

$$(g \circ f)(x) = g(f(x))$$

**Theorem.** Function composition is associative: $(h \circ g) \circ f = h \circ (g \circ f)$.

**Theorem.** Function composition is **not** commutative in general: $f \circ g \neq g \circ f$.

<details>
<summary>Example</summary>
Given $f(x) = 2x + 1$ and $g(x) = x^2$, find $f \circ g$ and $g \circ f$.

$(f \circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 1$.

$(g \circ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$.

Clearly $f \circ g \neq g \circ f$.

</details>

:::warning When computing $f \circ g$, always apply $g$ first, then $f$. Think of it as reading
right to left: $(f \circ g)(x) = f(g(x))$.
:::

<hr />

## 3. Inverse Functions

**Definition.** A function $f: A \to B$ is _injective_ (one-to-one) if
$f(a_1) = f(a_2) \implies a_1 = a_2$ for all $a_1, a_2 \in A$. Equivalently, distinct inputs give
distinct outputs.

**Definition.** A function $f: A \to B$ is _surjective_ (onto) if for every $b \in B$, there exists
$a \in A$ such that $f(a) = b$.

**Definition.** A function that is both injective and surjective is _bijective_.

**Theorem.** A function $f: A \to B$ has an inverse function $f^{-1}: B \to A$ if and only if $f$ is
bijective.

_Proof._

($\Rightarrow$) If $f^{-1}$ exists, then $f$ must be injective (otherwise $f^{-1}$ would be
multiply-defined) and surjective (otherwise $f^{-1}$ would be undefined for elements not in the
range).

($\Leftarrow$) If $f$ is bijective, then for each $b \in B$ there exists exactly one $a \in A$ with
$f(a) = b$. Define $f^{-1}(b) = a$. This is well-defined and satisfies $f^{-1}(f(a)) = a$ and
$f(f^{-1}(b)) = b$. $\blacksquare$

_Intuition._ An inverse function "undoes" the original function. For this to work, the original
function must pair each input with a unique output (injectivity) and must cover every element of the
codomain (surjectivity).

### 3.1 Finding Inverse Functions

**Method.**

1. Write $y = f(x)$.
2. Solve for $x$ in terms of $y$.
3. Replace $y$ with $x$ (and $x$ with $y$) to get $f^{-1}(x)$.
4. State the domain of $f^{-1}$ (which equals the range of $f$).

<details>
<summary>Example</summary>
Find the inverse of $f(x) = \frac{2x + 3}{x - 1}$, $x \neq 1$.

$$y = \frac{2x + 3}{x - 1}$$

$$y(x - 1) = 2x + 3$$

$$yx - y = 2x + 3$$

$$yx - 2x = y + 3$$

$$x(y - 2) = y + 3$$

$$x = \frac{y + 3}{y - 2}$$

So $f^{-1}(x) = \frac{x + 3}{x - 2}$, with domain $x \neq 2$.

The range of $f$ is all real numbers except $f(x) = 2$:
$\frac{2x + 3}{x - 1} = 2 \implies 2x + 3 = 2x - 2 \implies 3 = -2$, impossible. So the range is
$\mathbb{R} \setminus \{2\}$, which equals the domain of $f^{-1}$. ✓

</details>

**Theorem.** The graph of $y = f^{-1}(x)$ is the reflection of $y = f(x)$ in the line $y = x$.

_Proof._ If $(a, b)$ lies on $y = f(x)$, then $b = f(a)$, so $a = f^{-1}(b)$, meaning $(b, a)$ lies
on $y = f^{-1}(x)$. Swapping coordinates is reflection in $y = x$. $\blacksquare$

<hr />

## 4. The Modulus Function

**Definition.** The _modulus_ (absolute value) function is defined by:

$$|x| = \begin{cases} x & \mathrm{if } x \geq 0 \\ -x & \mathrm{if } x < 0 \end{cases}$$

**Properties:**

$$
\begin{aligned}
|ab| &= |a| \cdot |b| \\
|a + b| &\leq |a| + |b| \quad \mathrm{(Triangle inequality)} \\
|a|^2 &= a^2 \\
|x| &= \sqrt{x^2}
\end{aligned}
$$

**Theorem (Triangle Inequality).** $|a + b| \leq |a| + |b|$ for all $a, b \in \mathbb{R}$.

_Proof._ We consider cases based on the signs of $a$ and $b$.

Case 1: $a, b \geq 0$. Then $|a + b| = a + b = |a| + |b|$. Equality holds.

Case 2: $a, b \leq 0$. Then $a + b \leq 0$, so $|a + b| = -(a + b) = -a - b = |a| + |b|$. Equality
holds.

Case 3: $a \geq 0$, $b \leq 0$. If $a + b \geq 0$: $|a + b| = a + b \leq a + (-b) = |a| + |b|$. If
$a + b \leq 0$: $|a + b| = -(a + b) = -a - b \leq a - b = |a| + |b|$ (since $a \geq 0$ implies
$a \geq -a$, i.e., $2a \geq 0$). $\blacksquare$

### 4.1 Solving Modulus Equations

To solve $|f(x)| = g(x)$:

1. Case 1: $f(x) \geq 0$, so $f(x) = g(x)$.
2. Case 2: $f(x) < 0$, so $-f(x) = g(x)$.
3. Check solutions against the case conditions.

<details>
<summary>Example</summary>
Solve $|2x - 3| = x + 2$.

Case 1: $2x - 3 \geq 0$, i.e., $x \geq \frac{3}{2}$.

$2x - 3 = x + 2 \implies x = 5$. Check: $5 \geq \frac{3}{2}$ ✓

Case 2: $2x - 3 < 0$, i.e., $x < \frac{3}{2}$.

$-(2x - 3) = x + 2 \implies -2x + 3 = x + 2 \implies -3x = -1 \implies x = \frac{1}{3}$. Check:
$\frac{1}{3} < \frac{3}{2}$ ✓

Solutions: $x = \frac{1}{3}$ and $x = 5$.

</details>

<hr />

## 5. Transformations of Graphs

### 5.1 Translations

**Theorem.** The graph of $y = f(x - a)$ is the graph of $y = f(x)$ translated by $a$ units in the
positive $x$-direction.

_Proof._ Let $g(x) = f(x - a)$. The point $(x_0, y_0)$ lies on $y = g(x)$ if and only if
$y_0 = g(x_0) = f(x_0 - a)$. This means $(x_0 - a, y_0)$ lies on $y = f(x)$. So the point
$(x_0, y_0)$ on $g$ corresponds to the point $(x_0 - a, y_0)$ on $f$ — a shift right by $a$.
$\blacksquare$

_Intuition._ Replacing $x$ with $x - a$ means "to get the same output, I need to input $a$ more."
The graph shifts right to compensate.

Similarly, $y = f(x) + b$ translates up by $b$.

### 5.2 Reflections

| Transformation | Effect                     |
| -------------- | -------------------------- |
| $y = f(-x)$    | Reflection in the $y$-axis |
| $y = -f(x)$    | Reflection in the $x$-axis |

**Proof for $y = f(-x)$ as reflection in the $y$-axis.** If $(x_0, y_0)$ is on $y = f(x)$, then
$y_0 = f(x_0)$. The point $(-x_0, y_0)$ satisfies $y_0 = f(-(-x_0)) = f(x_0)$, so it lies on
$y = f(-x)$. Reflecting $(x_0, y_0)$ in the $y$-axis gives $(-x_0, y_0)$. $\blacksquare$

### 5.3 Stretches

| Transformation | Effect                                         |
| -------------- | ---------------------------------------------- |
| $y = f(ax)$    | Horizontal stretch, scale factor $\frac{1}{a}$ |
| $y = af(x)$    | Vertical stretch, scale factor $a$             |

**Proof for $y = f(ax)$ as horizontal stretch.** If $(x_0, y_0)$ is on $y = f(x)$, then on
$y = f(ax)$, the same $y$-value occurs when $ax = x_0$, i.e., $x = \frac{x_0}{a}$. So
$(\frac{x_0}{a}, y_0)$ is on the new graph — a horizontal stretch by factor $\frac{1}{a}$.
$\blacksquare$

:::warning Horizontal transformations are "backwards": $f(x - a)$ shifts **right** (not left), and
$f(ax)$ stretches by $\frac{1}{a}$ (not $a$). This is the single most common error in this topic.
:::

### 5.4 Combined Transformations

When multiple transformations are applied, the order matters. The convention is:

$$y = af(x - p) + q$$

represents: horizontal translation by $p$ (right), vertical stretch by factor $a$, vertical
translation by $q$ (up).

:::tip Apply horizontal transformations first (inside the function), then vertical transformations
(outside). The order inside-out matters.
:::

<hr />

## 6. Even and Odd Functions

**Definition.** A function $f$ is **even** if $f(-x) = f(x)$ for all $x$ in its domain. A function
$f$ is **odd** if $f(-x) = -f(x)$ for all $x$ in its domain.

**Theorem.** The graph of an even function is symmetric about the $y$-axis. The graph of an odd
function has rotational symmetry of order 2 about the origin.

_Proof._ For even $f$: the point $(-x, f(-x)) = (-x, f(x))$ is on the graph whenever $(x, f(x))$ is.
These two points are reflections of each other across the $y$-axis. $\blacksquare$

For odd $f$: the point $(-x, f(-x)) = (-x, -f(x))$ is on the graph whenever $(x, f(x))$ is. Rotating
$(x, f(x))$ by $180^\circ$ about the origin gives $(-x, -f(x))$. $\blacksquare$

**Algebraic Properties.**

| Operation | Even $\times$ Even | Odd $\times$ Odd | Even $\times$ Odd |
| --------- | :----------------: | :--------------: | :---------------: |
| Result    |        Even        |       Even       |        Odd        |

_Proof (for $f$ odd, $g$ odd $\implies fg$ even)._
$(fg)(-x) = f(-x)g(-x) = (-f(x))(-g(x)) = f(x)g(x) = (fg)(x)$. $\blacksquare$

_Proof (for $f$ even, $g$ odd $\implies fg$ odd)._
$(fg)(-x) = f(-x)g(-x) = f(x)(-g(x)) = -f(x)g(x) = -(fg)(x)$. $\blacksquare$

**Theorem.** The only function that is both even and odd is $f(x) = 0$ (the zero function on a
symmetric domain).

_Proof._ $f$ even: $f(-x) = f(x)$. $f$ odd: $f(-x) = -f(x)$. Therefore $f(x) = -f(x)$, so
$2f(x) = 0$, hence $f(x) = 0$ for all $x$. $\blacksquare$

<details>
<summary>Example</summary>
Classify $f(x) = x^3 - x$ and $g(x) = \cos(x^2)$.

$f(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3 - x) = -f(x)$. So $f$ is odd.

$g(-x) = \cos((-x)^2) = \cos(x^2) = g(x)$. So $g$ is even.

</details>

<hr />

## 7. Composite Function Domain and Range

**Theorem.** The domain of $g \circ f$ is $\{x \in \mathrm{dom}(f) : f(x) \in \mathrm{dom}(g)\}$.

_Proof._ For $(g \circ f)(x) = g(f(x))$ to be defined, we need $x \in \mathrm{dom}(f)$ (so $f(x)$
exists) AND $f(x) \in \mathrm{dom}(g)$ (so $g$ can accept $f(x)$ as input). $\blacksquare$

The range of $g \circ f$ is the image under $g$ of the set
$\{f(x) : x \in \mathrm{dom}(g \circ f)\}$, which is a subset of the range of $g$.

<details>
<summary>Example</summary>
Given $f(x) = x^2$ with domain $\mathbb{R}$ and $g(x) = \sqrt{x}$ with domain $[0, \infty)$, find the domain and range of $g \circ f$.

**Domain:** We need $x \in \mathbb{R}$ (always true) and $f(x) = x^2 \in [0, \infty)$ (always true).
So $\mathrm{dom}(g \circ f) = \mathbb{R}$.

**Range:** $g(f(x)) = \sqrt{x^2} = |x|$. The range of $|x|$ over $\mathbb{R}$ is $[0, \infty)$.

</details>

<details>
<summary>Example</summary>
Given $f(x) = \frac{1}{x - 1}$ with domain $\mathbb{R} \setminus \{1\}$ and $g(x) = \ln x$ with domain $(0, \infty)$, find the domain of $g \circ f$.

We need $\frac{1}{x-1} > 0$, so $x - 1 > 0$, giving $x > 1$.

$\mathrm{dom}(g \circ f) = (1, \infty)$.

</details>

<hr />

## 8. Self-Inverse Functions

**Definition.** A function $f$ is **self-inverse** if $f^{-1} = f$, i.e., $f(f(x)) = x$ for all $x$
in the domain of $f$.

**Theorem.** If $f$ is self-inverse, then $f$ is bijective and $f = f^{-1}$.

_Proof._ If $f(f(x)) = x$ for all $x$, then $f$ has an inverse (namely $f$ itself), so $f$ is
bijective. And by definition of inverse, $f^{-1} = f$. $\blacksquare$

**Common self-inverse functions:**

- $f(x) = \frac{a}{x}$ (reciprocal, $x \neq 0$): $f(f(x)) = a/(a/x) = x$. ✓
- $f(x) = a - x$ (reflection): $f(f(x)) = a - (a - x) = x$. ✓
- $f(x) = \frac{ax + b}{cx - a}$ (general fractional linear, $c \neq 0$): verify $f(f(x)) = x$.

_Proof for $f(x) = (ax+b)/(cx-a)$._ Let $f(x) = \frac{ax+b}{cx-a}$. Then:

$$f(f(x)) = \frac{a \cdot \frac{ax+b}{cx-a} + b}{c \cdot \frac{ax+b}{cx-a} - a} = \frac{\frac{a(ax+b) + b(cx-a)}{cx-a}}{\frac{c(ax+b) - a(cx-a)}{cx-a}} = \frac{a^2 x + ab + bcx - ab}{acx + bc - acx + a^2} = \frac{(a^2 + bc)x}{a^2 + bc} = x$$

$\blacksquare$ (provided $a^2 + bc \neq 0$).

<hr />

## 9. Modulus Inequalities with Functions

To solve inequalities involving the modulus function:

**Type 1:** $|f(x)| \lt g(x)$ where $g(x) > 0$.

This is equivalent to the compound inequality $-g(x) \lt f(x) \lt g(x)$.

_Proof._ $|f(x)| \lt g(x) \iff -g(x) \lt f(x) \lt g(x)$ follows directly from the definition of
modulus. $\blacksquare$

**Type 2:** $|f(x)| \gt g(x)$.

This is equivalent to: $f(x) > g(x)$ OR $f(x) < -g(x)$.

<details>
<summary>Example</summary>
Solve $|x^2 - 3x| \lt 4$.

This gives $-4 \lt x^2 - 3x \lt 4$, i.e., two separate inequalities:

$x^2 - 3x - 4 \lt 0 \implies (x-4)(x+1) \lt 0 \implies -1 \lt x \lt 4$.

$x^2 - 3x + 4 \gt 0$: discriminant $\Delta = 9 - 16 = -7 \lt 0$, and the coefficient of $x^2$ is
positive, so this is always true.

Solution: $-1 \lt x \lt 4$.

</details>

<details>
<summary>Example</summary>
Solve $|2x - 1| \geq x + 2$.

Case 1: $2x - 1 \geq 0$ (i.e., $x \geq 1/2$): $2x - 1 \geq x + 2 \implies x \geq 3$. Combined with
$x \geq 1/2$: $x \geq 3$.

Case 2: $2x - 1 < 0$ (i.e., $x < 1/2$):
$-(2x-1) \geq x + 2 \implies -2x + 1 \geq x + 2 \implies -1 \geq 3x \implies x \leq -1/3$. Combined
with $x < 1/2$: $x \leq -1/3$.

Solution: $x \leq -1/3$ or $x \geq 3$, i.e., $x \in (-\infty, -1/3] \cup [3, \infty)$.

</details>

<hr />

## 10. Transformation Order — Why It Matters

When multiple transformations are applied to $y = f(x)$, the order matters because horizontal and
vertical transformations interact differently.

**Rule.** For $y = af(bx + c) + d$:

1. Apply horizontal transformations **first**: the argument is $bx + c$, which is a horizontal
   stretch by factor $1/b$ then a horizontal shift of $-c/b$.
2. Apply vertical transformations **second**: vertical stretch by $|a|$, reflection if $a < 0$, then
   vertical shift $d$.

:::warning Common Pitfall The horizontal shift in $f(bx + c)$ is $-c/b$, NOT $-c$. The stretch
"absorbs" part of the shift. This is the single most common error in transformation problems.
:::

<details>
<summary>Example</summary>
Describe the transformations mapping $y = x^2$ to $y = 3(2x - 4)^2 + 5$.

Reading from inside out:

1. $x^2 \to (2x)^2$: horizontal stretch, factor $1/2$.
2. $(2x)^2 \to (2x - 4)^2 = [2(x - 2)]^2 = 4(x-2)^2$: horizontal shift right by 2.
3. $4(x-2)^2 \to 3 \cdot 4(x-2)^2 = 12(x-2)^2$: vertical stretch, factor 3.
4. $12(x-2)^2 \to 12(x-2)^2 + 5$: vertical shift up by 5.

Note: the horizontal shift is 2 (not 4), because $2x - 4 = 2(x - 2)$.

</details>

<hr />

## 11. Problem Set

**Problem 1.** Given $f(x) = \frac{1}{x - 3} + 2$, find the domain, range, and inverse function.

<details>
<summary>Solution</summary>
Domain: $x \neq 3$, i.e., $\mathbb{R} \setminus \{3\}$.

Range: As $x \to 3^+$, $f(x) \to +\infty$; as $x \to 3^-$, $f(x) \to -\infty$. As $x \to \pm\infty$,
$f(x) \to 2$. So $f(x) \neq 2$.

Range: $\mathbb{R} \setminus \{2\}$.

Inverse:
$y = \frac{1}{x - 3} + 2 \implies y - 2 = \frac{1}{x - 3} \implies x - 3 = \frac{1}{y - 2} \implies x = \frac{1}{y - 2} + 3$.

$f^{-1}(x) = \frac{1}{x - 2} + 3$, domain $x \neq 2$.

</details>
<b>If you get this wrong, revise:</b> [Inverse functions](#3-inverse-functions)

<hr />

**Problem 2.** Given $f(x) = x^2 - 4x + 9$ for $x \geq 2$, find $f^{-1}(x)$.

<details>
<summary>Solution</summary>
Completing the square: $f(x) = (x - 2)^2 + 5$.

For $x \geq 2$, $f$ is injective (strictly increasing).

$$y = (x - 2)^2 + 5 \implies (x - 2)^2 = y - 5 \implies x - 2 = \sqrt{y - 5}$$

(taking the positive root since $x \geq 2$).

$$x = \sqrt{y - 5} + 2$$

$f^{-1}(x) = \sqrt{x - 5} + 2$, domain $x \geq 5$.

</details>
<b>If you get this wrong, revise:</b> [Inverse functions](#3-inverse-functions)

<hr />

**Problem 3.** Solve $|3x + 1| = 2x + 5$.

<details>
<summary>Solution</summary>
Case 1: $3x + 1 \geq 0$, i.e., $x \geq -\frac{1}{3}$.

$3x + 1 = 2x + 5 \implies x = 4$. Check: $4 \geq -\frac{1}{3}$ ✓

Case 2: $3x + 1 < 0$, i.e., $x < -\frac{1}{3}$.

$-(3x + 1) = 2x + 5 \implies -3x - 1 = 2x + 5 \implies -5x = 6 \implies x = -\frac{6}{5}$.

Check: $-\frac{6}{5} < -\frac{1}{3}$ ✓

Solutions: $x = -\frac{6}{5}$ and $x = 4$.

</details>
<b>If you get this wrong, revise:</b> [Modulus equations](#41-solving-modulus-equations)

<hr />

**Problem 4.** Given $f(x) = 2x - 1$ and $g(x) = x^2 + 3$, find $(g \circ f)(x)$ and solve
$(g \circ f)(x) = 12$.

<details>
<summary>Solution</summary>
$(g \circ f)(x) = g(f(x)) = g(2x - 1) = (2x - 1)^2 + 3 = 4x^2 - 4x + 4$.

$4x^2 - 4x + 4 = 12 \implies 4x^2 - 4x - 8 = 0 \implies x^2 - x - 2 = 0 \implies (x - 2)(x + 1) = 0$.

$x = 2$ or $x = -1$.

</details>
<b>If you get this wrong, revise:</b> [Composition](#2-composition-of-functions)

<hr />

**Problem 5.** The graph of $y = f(x)$ passes through $(0, 1)$ and $(3, -2)$. State the coordinates
of the corresponding points on: (a) $y = f(x + 2)$ (b) $y = -f(x)$ (c) $y = f(2x)$ (d)
$y = 3f(x) - 1$

<details>
<summary>Solution</summary>
(a) $y = f(x + 2)$: shift left by 2. Points: $(-2, 1)$ and $(1, -2)$.

(b) $y = -f(x)$: reflect in $x$-axis. Points: $(0, -1)$ and $(3, 2)$.

(c) $y = f(2x)$: horizontal stretch factor $\frac{1}{2}$. Points: $(0, 1)$ and
$\left(\frac{3}{2}, -2\right)$.

(d) $y = 3f(x) - 1$: vertical stretch factor 3, then shift down 1. Points: $(0, 2)$ and $(3, -7)$.

</details>
<b>If you get this wrong, revise:</b> [Transformations](#5-transformations-of-graphs)

<hr />

**Problem 6.** The function $f$ is defined by $f(x) = x^3 - 3x + 1$. Show that $f$ is not injective
on $\mathbb{R}$, and find the largest interval containing $x = 0$ on which $f$ is injective.

<details>
<summary>Solution</summary>
$f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$.

$f'(x) = 0$ at $x = \pm 1$. $f'(x) < 0$ for $-1 < x < 1$ (decreasing), and $f'(x) > 0$ for $x < -1$
or $x > 1$ (increasing).

Since $f$ is decreasing on $(-1, 1)$ and increasing on $(-\infty, -1)$ and $(1, \infty)$, it is not
injective on all of $\mathbb{R}$. For example, $f(-2) = -8 + 6 + 1 = -1$ and $f(0) = 1$ and
$f(1) = -1$. So $f(-2) = f(1) = -1$ with $-2 \neq 1$.

The largest interval containing $0$ on which $f$ is strictly monotonic (hence injective) is
$[-1, 1]$.

</details>
<b>If you get this wrong, revise:</b> [Injectivity](#3-inverse-functions) and [Differentiation](./10-differentiation.md)

<hr />

**Problem 7.** Solve the inequality $|x - 3| > |2x + 1|$.

<details>
<summary>Solution</summary>
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

</details>
<b>If you get this wrong, revise:</b> [Modulus function](#4-the-modulus-function)

<hr />

**Problem 8.** Given $f(x) = e^{2x}$ and $g(x) = \ln(x + 1)$, find $f^{-1}$, $g^{-1}$, and the
domain of $f \circ g$.

<details>
<summary>Solution</summary>
$f^{-1}(x)$: $y = e^{2x} \implies \ln y = 2x \implies x = \frac{\ln y}{2}$.

$f^{-1}(x) = \frac{1}{2}\ln x$, domain $x > 0$.

$g^{-1}(x)$: $y = \ln(x + 1) \implies x + 1 = e^y \implies x = e^y - 1$.

$g^{-1}(x) = e^x - 1$, domain all $\mathbb{R}$.

$(f \circ g)(x) = f(g(x)) = f(\ln(x + 1)) = e^{2\ln(x+1)} = (x + 1)^2$.

Domain of $f \circ g$: we need $x + 1 > 0$ (for $g$), so $x > -1$.

</details>
<b>If you get this wrong, revise:</b> [Composition](#2-composition-of-functions) and [Inverse functions](#3-inverse-functions)

<hr />

**Problem 9.** Sketch the graph of $y = |x^2 - 4|$, showing the coordinates of all points where the
graph meets the axes.

<details>
<summary>Solution</summary>
$y = |x^2 - 4| = |(x - 2)(x + 2)|$.

When $x^2 - 4 \geq 0$ (i.e., $x \leq -2$ or $x \geq 2$): $y = x^2 - 4$ (parabola opening up).

When $x^2 - 4 < 0$ (i.e., $-2 < x < 2$): $y = -(x^2 - 4) = 4 - x^2$ (parabola opening down).

$y$-intercept: $x = 0 \implies y = 4$. Point: $(0, 4)$.

$x$-intercepts: $x^2 - 4 = 0 \implies x = \pm 2$. Points: $(-2, 0)$ and $(2, 0)$.

The graph is the standard parabola $y = x^2 - 4$ with the part between $x = -2$ and $x = 2$
reflected above the $x$-axis.

</details>
<b>If you get this wrong, revise:</b> [Modulus function](#4-the-modulus-function) and [Transformations](#5-transformations-of-graphs)

<hr />

**Problem 10.** Prove that $f: [0, \infty) \to [0, \infty)$ defined by $f(x) = x^2 + 4x$ is
bijective, and find $f^{-1}$.

<details>
<summary>Solution</summary>
**Injective:** $f(x) = x^2 + 4x = (x+2)^2 - 4$. For $x \geq 0$, $x + 2 > 0$, so $(x+2)^2$ is strictly increasing, hence $f$ is strictly increasing, hence injective.

**Surjective:** For any $y \geq 0$: $x^2 + 4x - y = 0$. By the quadratic formula:
$x = \frac{-4 + \sqrt{16 + 4y}}{2} = -2 + \sqrt{4 + y}$. Since $y \geq 0$: $\sqrt{4 + y} \geq 2$, so
$x \geq 0$. Thus every $y \geq 0$ has a preimage.

**Inverse:** $y = x^2 + 4x \implies x^2 + 4x - y = 0 \implies x = \frac{-4 + \sqrt{16 + 4y}}{2}$
(taking the positive root since $x \geq 0$).

$f^{-1}(x) = -2 + \sqrt{4 + x} = \sqrt{x + 4} - 2$, domain $x \geq 0$.

</details>
<b>If you get this wrong, revise:</b> [Inverse functions](#3-inverse-functions)

<hr />

**Problem 11.** Classify each function as even, odd, or neither: (a) $f(x) = x^4 - x^2$ (b)
$g(x) = x^3 + x$ (c) $h(x) = x + 1$ (d) $k(x) = |x|$

<details>
<summary>Solution</summary>
(a) $f(-x) = (-x)^4 - (-x)^2 = x^4 - x^2 = f(x)$. **Even.**

(b) $g(-x) = (-x)^3 + (-x) = -x^3 - x = -(x^3 + x) = -g(x)$. **Odd.**

(c) $h(-x) = -x + 1 \neq h(x)$ and $h(-x) \neq -h(x)$. **Neither.**

(d) $k(-x) = |-x| = |x| = k(x)$. **Even.**

</details>
<b>If you get this wrong, revise:</b> [Even and odd functions](#6-even-and-odd-functions)

<hr />

**Problem 12.** Given $f(x) = 2x + 3$ with domain $\mathbb{R}$ and $g(x) = \sqrt{x - 1}$ with domain
$[1, \infty)$, find the domain of $f \circ g$ and $g \circ f$.

<details>
<summary>Solution</summary>
$f \circ g$: domain is $\{x \geq 1 : g(x) \in \mathbb{R}\} = [1, \infty)$ (since $f$ accepts all reals).

$g \circ f$: domain is
$\{x \in \mathbb{R} : f(x) \geq 1\} = \{x : 2x + 3 \geq 1\} = \{x : x \geq -1\} = [-1, \infty)$.

</details>
<b>If you get this wrong, revise:</b> [Composite function domain](#7-composite-function-domain-and-range)

<hr />

**Problem 13.** Verify that $f(x) = \frac{3x + 2}{x - 3}$ is self-inverse.

<details>
<summary>Solution</summary>
$$f(f(x)) = \frac{3 \cdot \frac{3x+2}{x-3} + 2}{\frac{3x+2}{x-3} - 3} = \frac{\frac{3(3x+2) + 2(x-3)}{x-3}}{\frac{3x+2 - 3(x-3)}{x-3}} = \frac{9x + 6 + 2x - 6}{3x + 2 - 3x + 9} = \frac{11x}{11} = x$$

Since $f(f(x)) = x$, $f$ is self-inverse. ✓

</details>
<b>If you get this wrong, revise:</b> [Self-inverse functions](#8-self-inverse-functions)

<hr />

**Problem 14.** Solve the inequality $|x^2 - 5x + 6| \geq |x - 2|$.

<details>
<summary>Solution</summary>
Factor: $x^2 - 5x + 6 = (x-2)(x-3)$. So $|(x-2)(x-3)| \geq |x-2|$.

If $x = 2$: both sides are $0$, so equality holds. $x = 2$ is a solution.

If $x \neq 2$: divide both sides by $|x-2| > 0$:

$|x - 3| \geq 1$

This gives $x - 3 \geq 1$ or $x - 3 \leq -1$, i.e., $x \geq 4$ or $x \leq 2$.

Combined with $x \neq 2$: $x \leq 2$ or $x \geq 4$.

Solution: $x \in (-\infty, 2] \cup [4, \infty)$.

</details>
<b>If you get this wrong, revise:</b> [Modulus inequalities](#9-modulus-inequalities-with-functions)

<hr />

**Problem 15.** The graph of $y = f(x)$ passes through $(1, 3)$ and $(-2, 5)$. State the coordinates
of the corresponding points on the graph of $y = 2f(3x - 1) + 4$.

<details>
<summary>Solution</summary>
A point $(x_0, y_0)$ on $y = f(x)$ corresponds to a point on the new graph where $f(3x - 1) = y_0$, i.e., $3x - 1 = x_0$, so $x = (x_0 + 1)/3$. The new $y$-value is $2y_0 + 4$.

For $(1, 3)$: new point is
$\left(\frac{1+1}{3}, 2 \times 3 + 4\right) = \left(\frac{2}{3}, 10\right)$.

For $(-2, 5)$: new point is
$\left(\frac{-2+1}{3}, 2 \times 5 + 4\right) = \left(-\frac{1}{3}, 14\right)$.

</details>
<b>If you get this wrong, revise:</b> [Transformation order](#10-transformation-order--why-it-matters)

---

:::tip Diagnostic Test
Ready to test your understanding of **Functions**? The [diagnostic test](/maths/diagnostics/diag-functions) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Functions with other pure mathematics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/maths/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::
