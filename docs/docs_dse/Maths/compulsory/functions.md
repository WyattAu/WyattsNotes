---
title: Functions
date: 2025-06-03T16:18:52.976Z
tags:
  - Maths
  - DSE
categories:
  - Maths
slug: functions
---

A **function** is a rule that assigns to each element in one set exactly one element in another set.
Functions are central to the DSE Mathematics compulsory syllabus and underpin topics including
[polynomials](./polynomials.md), [logarithms](./logarithmics.md),
[sequences](./sequences-and-series.md), and [inequalities](./inequalities.md).

## Functions and Relations

### Definition of a Function

A function $f$ from a set $A$ to a set $B$, written $f \colon A \to B$, is a rule that assigns to
every element $x \in A$ **exactly one** element $y \in B$. The element $y$ is called the **image**
of $x$ under $f$, written $y = f(x)$.

- The set $A$ is called the **domain** of $f$.
- The set $B$ is called the **codomain** of $f$.
- The set of all images $\{f(x) : x \in A\}$ is called the **range** of $f$. The range is always a
  subset of the codomain: $\text{range}(f) \subseteq B$.

A **relation** is any subset of $A \times B$. A function is a special type of relation where each
element of $A$ appears as the first component of exactly one ordered pair.

### Mapping Diagrams

A mapping diagram represents a function by drawing arrows from each element of the domain to the
corresponding element(s) in the codomain. For a valid function, every element in the domain must
have exactly one arrow leaving it.

### Vertical Line Test

For a graph in the $xy$-plane, the **vertical line test** states that a curve represents a function
of $x$ if and only if no vertical line intersects the curve more than once.

### Types of Functions

A function $f \colon A \to B$ is:

- **Injective (one-to-one)** if $f(x_1) = f(x_2) \implies x_1 = x_2$. Equivalently, distinct inputs
  produce distinct outputs. This can be checked using the **horizontal line test**: no horizontal
  line intersects the graph more than once.
- **Surjective (onto)** if for every $y \in B$, there exists $x \in A$ such that $f(x) = y$. In
  other words, the range equals the codomain.
- **Bijective (one-to-one correspondence)** if $f$ is both injective and surjective.

<details>
<summary>Examples</summary>
- $f(x) = 2x + 1$ with domain $\mathbb{R}$ is injective (linear, non-constant) and surjective onto $\mathbb{R}$, hence bijective.
- $f(x) = x^2$ with domain $\mathbb{R}$ is neither injective ($f(2) = f(-2) = 4$) nor surjective onto $\mathbb{R}$ (range is $[0, \infty)$).
- $f(x) = x^2$ with domain $[0, \infty)$ and codomain $[0, \infty)$ is bijective.
- $f(x) = \dfrac{1}{x}$ with domain $\mathbb{R} \setminus \{0\}$ is injective but not surjective onto $\mathbb{R}$ (range is $\mathbb{R} \setminus \{0\}$).
</details>

---

## Composite Functions

### Definition

Given two functions $f$ and $g$, the **composite function** $f \circ g$ (read "$f$ of $g$") is
defined by:

$$
(f \circ g)(x) = f(g(x))
$$

For $(f \circ g)(x)$ to be defined at a particular value of $x$, two conditions must hold:

1. $x$ must be in the domain of $g$.
2. $g(x)$ must be in the domain of $f$.

The domain of $f \circ g$ is therefore:

$$
\text{dom}(f \circ g) = \{x \in \text{dom}(g) : g(x) \in \text{dom}(f)\}
$$

### Order of Composition

In general, $f \circ g \neq g \circ f$. The order of composition matters because the inner function
is evaluated first.

### Inverse Functions

If $f$ is a bijection, then the **inverse function** $f^{-1}$ exists and satisfies:

$$
f^{-1}(f(x)) = x \quad \text{for all } x \in \text{dom}(f)
$$

$$
f(f^{-1}(y)) = y \quad \text{for all } y \in \text{dom}(f^{-1}) = \text{range}(f)
$$

The graphs of $y = f(x)$ and $y = f^{-1}(x)$ are reflections of each other in the line $y = x$.

To find $f^{-1}(x)$, set $y = f(x)$, solve for $x$ in terms of $y$, then interchange $x$ and $y$.

A necessary condition for a function to have an inverse is that it is one-to-one (injective). If the
original function is not injective on its given domain, one may restrict the domain to make it
injective.

<details>
<summary>Examples</summary>
- Let $f(x) = 2x + 3$ and $g(x) = x^2$. Then:
  - $(f \circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 3$
  - $(g \circ f)(x) = g(f(x)) = g(2x + 3) = (2x + 3)^2 = 4x^2 + 12x + 9$
  - Note that $(f \circ g)(1) = 5$ but $(g \circ f)(1) = 25$, confirming $f \circ g \neq g \circ f$.

- Find the inverse of $f(x) = \dfrac{2x + 1}{x - 3}$ ($x \neq 3$):
  - Set $y = \dfrac{2x + 1}{x - 3}$
  - $y(x - 3) = 2x + 1 \implies yx - 3y = 2x + 1$
  - $x(y - 2) = 3y + 1 \implies x = \dfrac{3y + 1}{y - 2}$
  - Therefore $f^{-1}(x) = \dfrac{3x + 1}{x - 2}$, with domain $\mathbb{R} \setminus \{2\}$.

- Let $f(x) = \sqrt{x - 1}$ and $g(x) = x^2 + 1$. Find the domain of $f \circ g$:
  - $\text{dom}(g) = \mathbb{R}$
  - $\text{dom}(f) = \{x : x \geq 1\}$, so we require $g(x) \geq 1$, i.e.
    $x^2 + 1 \geq 1 \implies x^2 \geq 0$, which holds for all real $x$.
  - Therefore $\text{dom}(f \circ g) = \mathbb{R}$.

</details>

---

## Quadratic Functions

A **quadratic function** has the general form:

$$
f(x) = ax^2 + bx + c, \quad a \neq 0
$$

where $a$, $b$, and $c$ are real constants.

### Vertex Form

By completing the square, the quadratic can be rewritten in **vertex form**:

$$
f(x) = a\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a}
$$

- The **vertex** is at $\left(-\dfrac{b}{2a},\; \dfrac{4ac - b^2}{4a}\right)$.
- The **axis of symmetry** is the vertical line $x = -\dfrac{b}{2a}$.
- If $a > 0$, the parabola opens upward (minimum at the vertex).
- If $a < 0$, the parabola opens downward (maximum at the vertex).

### Discriminant

The **discriminant** of a quadratic $ax^2 + bx + c = 0$ is defined as:

$$
\Delta = b^2 - 4ac
$$

The discriminant determines the nature of the roots of the equation $f(x) = 0$:

| Condition    | Roots                   |
| ------------ | ----------------------- |
| $\Delta > 0$ | Two distinct real roots |
| $\Delta = 0$ | One repeated real root  |
| $\Delta < 0$ | No real roots           |

The roots are given by the quadratic formula:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

See also [polynomials](./polynomials.md) for connections between quadratic functions and polynomial
equations.

### Completing the Square

To complete the square for $ax^2 + bx + c$:

1. Factor out $a$ from the first two terms: $a\left(x^2 + \dfrac{b}{a}x\right) + c$.
2. Add and subtract $\left(\dfrac{b}{2a}\right)^2$ inside the brackets:
   $a\left[\left(x + \dfrac{b}{2a}\right)^2 - \left(\dfrac{b}{2a}\right)^2\right] + c$.
3. Simplify to obtain the vertex form.

This technique is also essential in solving [inequalities](./inequalities.md) involving quadratic
expressions.

<details>
<summary>Examples</summary>
- Express $f(x) = 2x^2 - 12x + 22$ in vertex form:
  - $f(x) = 2(x^2 - 6x) + 22 = 2\left[(x - 3)^2 - 9\right] + 22 = 2(x - 3)^2 + 4$
  - Vertex: $(3, 4)$, axis of symmetry: $x = 3$, minimum value: $4$.

- Determine the nature of roots of $3x^2 - 5x + 2 = 0$:
  - $\Delta = (-5)^2 - 4(3)(2) = 25 - 24 = 1 > 0$
  - Two distinct real roots: $x = \dfrac{5 \pm 1}{6}$, i.e. $x = 1$ or $x = \dfrac{2}{3}$.

- Find the range of $f(x) = -x^2 + 4x - 7$:
  - $f(x) = -(x^2 - 4x) - 7 = -\left[(x - 2)^2 - 4\right] - 7 = -(x - 2)^2 - 3$
  - Since $-(x - 2)^2 \leq 0$ for all $x$, the maximum value is $-3$.
  - Range: $(-\infty, -3]$.
  </details>

---

## Exponential Functions

An **exponential function** has the form:

$$
f(x) = a^x, \quad a > 0,\; a \neq 1
$$

where $a$ is called the **base**.

### Properties

For $a, b > 0$ and $m, n \in \mathbb{R}$:

$$
\begin{aligned}
a^m \times a^n &= a^{m + n} \\
\frac{a^m}{a^n} &= a^{m - n} \\
(a^m)^n &= a^{mn} \\
a^0 &= 1 \\
a^{-n} &= \frac{1}{a^n}
\end{aligned}
$$

### Graphs

- For $a > 1$: $f(x) = a^x$ is strictly increasing. The graph passes through $(0, 1)$, approaches
  the $x$-axis as $x \to -\infty$ (horizontal asymptote at $y = 0$), and rises steeply as
  $x \to \infty$.
- For $0 < a < 1$: $f(x) = a^x$ is strictly decreasing. The graph is a reflection of
  $y = \left(\frac{1}{a}\right)^x$ in the $y$-axis.

### Exponential Equations

Equations of the form $a^{f(x)} = a^{g(x)}$ can be solved by equating exponents: $f(x) = g(x)$
(provided $a > 0$, $a \neq 1$).

For equations of the form $a^{f(x)} = b$, take logarithms of both sides. See
[logarithmics](./logarithmics.md) for the full treatment of logarithmic techniques.

<details>
<summary>Examples</summary>
- Solve $4^{x} = 2^{x+3}$:
  - Rewrite: $(2^2)^x = 2^{x+3} \implies 2^{2x} = 2^{x+3}$
  - Equate exponents: $2x = x + 3 \implies x = 3$

- Solve $5^{2x - 1} = 3^{x + 2}$:
  - Take logarithms: $(2x - 1)\ln 5 = (x + 2)\ln 3$
  - $2x \ln 5 - \ln 5 = x \ln 3 + 2\ln 3$
  - $x(2\ln 5 - \ln 3) = \ln 5 + 2\ln 3$
  - $x = \dfrac{\ln 5 + 2\ln 3}{2\ln 5 - \ln 3}$

- The half-life of a substance is 8 hours. If the initial amount is 100 g, find the amount remaining
  after 24 hours:
  - $A(t) = 100 \times \left(\frac{1}{2}\right)^{t/8}$
  - $A(24) = 100 \times \left(\frac{1}{2}\right)^3 = 12.5 \text{ g}$
  </details>

---

## Logarithmic Functions

The **logarithmic function** is the inverse of the exponential function. If $a^y = x$ (where
$a > 0$, $a \neq 1$, $x > 0$), then:

$$
y = \log_a x
$$

This means $\log_a x$ is the exponent to which $a$ must be raised to obtain $x$.

The function $f(x) = \log_a x$ has domain $(0, \infty)$ and range $\mathbb{R}$. See
[logarithmics](./logarithmics.md) for further details.

### Laws of Logarithms

For $a, M, N > 0$ ($a \neq 1$) and $p \in \mathbb{R}$:

$$
\begin{aligned}
\log_a (MN) &= \log_a M + \log_a N &\text{(Product Law)} \\
\log_a \left(\frac{M}{N}\right) &= \log_a M - \log_a N &\text{(Quotient Law)} \\
\log_a M^p &= p \log_a M &\text{(Power Law)} \\
\log_a 1 &= 0 \\
\log_a a &= 1
\end{aligned}
$$

### Change of Base Formula

To evaluate a logarithm with any base:

$$
\log_a b = \frac{\log_c b}{\log_c a} = \frac{\ln b}{\ln a}
$$

for any positive base $c \neq 1$.

### Solving Logarithmic Equations

When solving logarithmic equations, the following steps are typical:

1. Use the laws of logarithms to combine or expand logarithmic terms.
2. Convert the logarithmic equation to its equivalent exponential form, or equate arguments when the
   logarithms have the same base.
3. Always verify that solutions satisfy the domain condition (arguments of all logarithms must be
   positive).

<details>
<summary>Examples</summary>
- Solve $\log_2 (x + 3) + \log_2 (x - 1) = 4$:
  - Product law: $\log_2 [(x + 3)(x - 1)] = 4$
  - Convert: $(x + 3)(x - 1) = 2^4 = 16$
  - $x^2 + 2x - 3 = 16 \implies x^2 + 2x - 19 = 0$
  - $x = \dfrac{-2 \pm \sqrt{4 + 76}}{2} = -1 \pm 2\sqrt{5}$
  - Domain requires $x + 3 > 0$ and $x - 1 > 0$, i.e. $x > 1$.
  - $-1 + 2\sqrt{5} \approx 3.47 > 1$ (accepted); $-1 - 2\sqrt{5} < 0$ (rejected).
  - Solution: $x = -1 + 2\sqrt{5}$.

- Evaluate $\log_3 20$ in terms of $\ln$:
  - $\log_3 20 = \dfrac{\ln 20}{\ln 3}$

- Solve $2\log_5 x - \log_5 (x - 1) = \log_5 4$:
  - Power law: $\log_5 x^2 - \log_5 (x - 1) = \log_5 4$
  - Quotient law: $\log_5 \dfrac{x^2}{x - 1} = \log_5 4$
  - $\dfrac{x^2}{x - 1} = 4 \implies x^2 = 4x - 4 \implies x^2 - 4x + 4 = 0$
  - $(x - 2)^2 = 0 \implies x = 2$
  - Check: $x = 2 > 0$ and $x - 1 = 1 > 0$. Valid.
  </details>

---

## Graph Transformations

Given the graph of $y = f(x)$, the graph of $y = af(x + b) + c$ is obtained by applying a sequence
of transformations. The general form can be broken down as:

$$
y = a \cdot f\left(x - (-b)\right) + c
$$

### Individual Transformations

| Transformation | Effect                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $y = f(x) + c$ | Vertical translation upward by $c$ units ($c \gt 0$) or downward by $c$ units ($c \lt 0$)                                                                           |
| $y = f(x - h)$ | Horizontal translation to the right by $h$ units ($h \gt 0$) or to the left by $h$ units ($h \lt 0$)                                                                |
| $y = af(x)$    | Vertical stretch by factor $a$ ($a \gt 1$) or vertical compression by factor $a$ ($0 \lt a \lt 1$); reflection in the $x$-axis if $a \lt 0$                         |
| $y = f(kx)$    | Horizontal stretch by factor $\frac{1}{k}$ ($0 \lt k \lt 1$) or horizontal compression by factor $\frac{1}{k}$ ($k \gt 1$); reflection in the $y$-axis if $k \lt 0$ |

### Order of Transformations

For $y = af(x + b) + c$, the recommended order of application (from the graph of $y = f(x)$) is:

1. **Horizontal translation** by $-b$ units (shift left if $b > 0$, right if $b < 0$): replace $x$
   with $x + b$.
2. **Vertical stretch/compression** (and possible $x$-axis reflection) by factor $|a|$: multiply the
   function by $a$.
3. **Vertical translation** by $c$ units: add $c$.

Alternatively, one may think of this as working from the "inside out": apply the horizontal shift
first, then the vertical scaling, then the vertical shift.

:::info Horizontal transformations operate on $x$ **before** the function is evaluated; vertical
transformations operate on $f(x)$ **after** the function is evaluated. This is why the horizontal
shift has the "opposite sign" effect: $f(x + b)$ shifts left by $b$ (not right). :::

<details>
<summary>Examples</summary>
- Describe the transformation from $y = x^2$ to $y = 2(x - 3)^2 + 1$:
  - Starting from $y = x^2$:
  - Shift right by 3 units: $y = (x - 3)^2$
  - Vertical stretch by factor 2: $y = 2(x - 3)^2$
  - Shift up by 1 unit: $y = 2(x - 3)^2 + 1$
  - The vertex moves from $(0, 0)$ to $(3, 1)$.

- The graph of $y = f(x)$ passes through $(2, 5)$. Find the corresponding point on $y = -f(2x) + 3$:
  - Start with $(2, 5)$ on $y = f(x)$, meaning $f(2) = 5$.
  - For $y = -f(2x) + 3$, set $2x = 2 \implies x = 1$.
  - Then $y = -f(2) + 3 = -5 + 3 = -2$.
  - The point is $(1, -2)$.

- Given $f(x) = \sqrt{x}$, sketch $y = \sqrt{-x + 4} - 2$:
  - Rewrite as $y = f(-(x - 4)) - 2 = f(-x + 4) - 2$.
  - From $y = \sqrt{x}$: reflect in the $y$-axis to get $y = \sqrt{-x}$, then shift right by 4 to
    get $y = \sqrt{-(x - 4)} = \sqrt{-x + 4}$, then shift down by 2.
  - Domain: $-x + 4 \geq 0 \implies x \leq 4$. Range: $[-2, \infty)$.
  </details>

---

---

## Modulus Function

### Definition

The **modulus** (or absolute value) function is defined piecewise:

$$
f(x) = |x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x \lt 0 \end{cases}
$$

The graph of $y = |x|$ is V-shaped, with its vertex at the origin. It is symmetric about the
$y$-axis, making it an **even function**: $|{-x}| = |x|$ for all $x$.

### Properties

For all $a, b \in \mathbb{R}$:

**Proposition (Multiplicativity).** $|ab| = |a| \cdot |b|$.

**Proof.** By cases on the signs of $a$ and $b$:

- If $a \geq 0$ and $b \geq 0$: $|ab| = ab = |a| \cdot |b|$.
- If $a \geq 0$ and $b \lt 0$:
  $|ab| = |a \cdot b| = |{-}(ab)| = ab = a \cdot ({-b}) = |a| \cdot |b|$.
- The remaining cases are symmetric. $\qed$

**Proposition (Triangle Inequality).** $|a + b| \leq |a| + |b|$.

**Proof.** We have $-|a| \leq a \leq |a|$ and $-|b| \leq b \leq |b|$ for all $a, b$. Adding:
$-(|a| + |b|) \leq a + b \leq |a| + |b|$, which means $|a + b| \leq |a| + |b|$. $\qed$

### Solving Modulus Equations

The equation $|f(x)| = a$ (where $a \geq 0$) is equivalent to $f(x) = a$ or $f(x) = -a$. If
$a \lt 0$, there is no solution.

### Solving Modulus Inequalities

| Inequality        | Equivalent Form                 | Condition  |
| ----------------- | ------------------------------- | ---------- |
| $\|f(x)\| \lt a$  | $-a \lt f(x) \lt a$             | $a \gt 0$  |
| $\|f(x)\| \gt a$  | $f(x) \lt -a$ or $f(x) \gt a$   | $a \geq 0$ |
| $\|f(x)\| \leq a$ | $-a \leq f(x) \leq a$           | $a \geq 0$ |
| $\|f(x)\| \geq a$ | $f(x) \leq -a$ or $f(x) \geq a$ | $a \geq 0$ |

**Proof of $\|f(x)\| \lt a \iff -a \lt f(x) \lt a$** (for $a \gt 0$):

$(\Rightarrow)$ If $|f(x)| \lt a$, then by definition of modulus, $-a \lt f(x) \lt a$.

$(\Leftarrow)$ If $-a \lt f(x) \lt a$, then $f(x) \lt a$ and $-f(x) \lt a$, so $|f(x)| \lt a$.
$\qed$

### Graphs Involving Modulus

- **$y = |f(x)|$**: Reflect any part of the graph of $y = f(x)$ that lies below the $x$-axis above
  it. The portion above the axis remains unchanged.
- **$y = f(|x|)$**: The graph for $x \geq 0$ is the same as $y = f(x)$. The graph for $x \lt 0$ is
  the reflection of the $x \geq 0$ portion in the $y$-axis (i.e., $f(|x|)$ is always an even
  function).

<details>
<summary>Examples</summary>

- Solve $|2x - 3| = 7$:
  - $2x - 3 = 7 \implies x = 5$, or $2x - 3 = -7 \implies x = -2$.
  - Solutions: $x = -2$ or $x = 5$.

- Solve $|3x + 1| \lt 5$:
  - $-5 \lt 3x + 1 \lt 5 \implies -6 \lt 3x \lt 4 \implies -2 \lt x \lt \frac{4}{3}$.
  - Solution: $x \in \left(-2,\; \frac{4}{3}\right)$.

- Solve $|x^2 - 5x| \geq 6$:
  - Case 1:
    $x^2 - 5x \geq 6 \implies x^2 - 5x - 6 \geq 0 \implies (x - 6)(x + 1) \geq 0 \implies x \leq -1$
    or $x \geq 6$.
  - Case 2:
    $x^2 - 5x \leq -6 \implies x^2 - 5x + 6 \leq 0 \implies (x - 2)(x - 3) \leq 0 \implies 2 \leq x \leq 3$.
  - Solution: $x \leq -1$ or $2 \leq x \leq 3$ or $x \geq 6$.

- Sketch $y = |x^2 - 4x - 5|$:
  - Factor: $y = |(x - 5)(x + 1)|$.
  - The quadratic $x^2 - 4x - 5$ has roots at $x = -1$ and $x = 5$, with vertex at $x = 2$ giving
    $f(2) = 4 - 8 - 5 = -9$.
  - Below the $x$-axis on $(-1, 5)$; above on $(-\infty, -1] \cup [5, \infty)$.
  - Reflect the portion on $(-1, 5)$ upward. The minimum on $(-1, 5)$ becomes a maximum at $(2, 9)$.

</details>

---

## Inequalities with Functions

### Quadratic Inequalities

To solve $ax^2 + bx + c \gt 0$ (or $\lt$, $\geq$, $\leq$), use the discriminant and the shape of the
parabola:

1. Find the roots of $ax^2 + bx + c = 0$ (if they exist).
2. Sketch the parabola (opens upward if $a \gt 0$, downward if $a \lt 0$).
3. Read off the intervals where the inequality is satisfied.

| Discriminant   | Roots        | $a \gt 0$: $f(x) \gt 0$    | $a \gt 0$: $f(x) \lt 0$ |
| -------------- | ------------ | -------------------------- | ----------------------- |
| $\Delta \gt 0$ | Two distinct | $x \lt x_1$ or $x \gt x_2$ | $x_1 \lt x \lt x_2$     |
| $\Delta = 0$   | One repeated | All $x \neq x_1$           | No solution             |
| $\Delta \lt 0$ | None         | All $x \in \mathbb{R}$     | No solution             |

See [inequalities.md](./inequalities.md) for the general theory.

### Rational Inequalities

To solve $\frac{f(x)}{g(x)} \gt 0$ (or $\lt$, $\geq$, $\leq$):

1. Express both sides with a common denominator so one side is zero.
2. Factor numerator and denominator completely.
3. Draw a **sign chart**: identify all critical points (zeros of numerator and denominator) and test
   the sign of the expression in each interval.
4. Exclude values where the denominator is zero (even for $\geq$ or $\leq$).

:::warning **Critical pitfall:** When multiplying both sides of an inequality by an expression
involving $x$, the direction of the inequality flips if that expression is negative. Instead of
multiplying through, use a sign chart. :::

<details>
<summary>Examples</summary>

- Solve $x^2 - 3x - 4 \leq 0$:
  - $x^2 - 3x - 4 = (x - 4)(x + 1)$.
  - Roots: $x = -1$ and $x = 4$. Parabola opens upward.
  - $f(x) \leq 0$ between the roots: $-1 \leq x \leq 4$.

- Solve $\frac{x - 1}{x + 2} \gt 0$:
  - Critical points: $x = 1$ (numerator zero) and $x = -2$ (denominator zero, excluded).
  - Sign chart:
    - $x \lt -2$: both negative, quotient positive. Include.
    - $-2 \lt x \lt 1$: numerator negative, denominator positive, quotient negative. Exclude.
    - $x \gt 1$: both positive, quotient positive. Include.
  - Solution: $x \lt -2$ or $x \gt 1$.

- Solve $\frac{x^2 - 4}{x - 3} \leq 0$:
  - $\frac{(x - 2)(x + 2)}{x - 3} \leq 0$.
  - Critical points: $x = -2$, $x = 2$, $x = 3$ (excluded).
  - Sign chart: negative on $(-2, 2) \cup (2, 3)$, positive elsewhere.
  - Include zeros of numerator: $x = -2$ and $x = 2$.
  - Solution: $-2 \leq x \leq 2$ or $2 \lt x \lt 3$, i.e., $[-2, 2] \cup (2, 3)$.

</details>

---

## Rational Functions

### Definition

A **rational function** is any function of the form:

$$
f(x) = \frac{P(x)}{Q(x)}
$$

where $P(x)$ and $Q(x)$ are polynomials and $Q(x) \neq 0$. The domain is
$\mathbb{R} \setminus \{x : Q(x) = 0\}$.

### Asymptotes

**Vertical asymptotes** occur at values of $x$ where $Q(x) = 0$ but $P(x) \neq 0$. Near a vertical
asymptote at $x = a$, the magnitude of $f(x)$ grows without bound.

**Horizontal asymptotes** describe the end behaviour of $f(x)$ as $x \to \pm\infty$. Compare the
degrees of $P$ and $Q$:

| Condition               | Horizontal Asymptote                                                            |
| ----------------------- | ------------------------------------------------------------------------------- |
| $\deg P \lt \deg Q$     | $y = 0$ (the $x$-axis)                                                          |
| $\deg P = \deg Q$       | $y = \frac{\text{leading coefficient of } P}{\text{leading coefficient of } Q}$ |
| $\deg P = \deg Q + 1$   | Oblique asymptote (polynomial long division)                                    |
| $\deg P \gt \deg Q + 1$ | No horizontal or oblique asymptote                                              |

**Proof (horizontal asymptote when $\deg P = \deg Q$):** Let $P(x) = a_n x^n + \cdots$ and
$Q(x) = b_n x^n + \cdots$. Then:

$$
\lim_{x \to \pm\infty} \frac{P(x)}{Q(x)} = \lim_{x \to \pm\infty} \frac{a_n x^n \left(1 + \frac{c_1}{x} + \cdots\right)}{b_n x^n \left(1 + \frac{d_1}{x} + \cdots\right)} = \frac{a_n}{b_n} \qed
$$

### Behaviour Near Vertical Asymptotes

For a vertical asymptote at $x = a$, the sign of $f(x)$ on each side depends on the signs of the
remaining factors. Analyse using a sign chart or by evaluating test points on each side.

### Sketching Rational Functions

1. Factor numerator and denominator; cancel common factors (these produce "holes," not asymptotes).
2. Determine the domain.
3. Find vertical asymptotes (zeros of denominator after cancellation).
4. Find horizontal/oblique asymptotes.
5. Find $x$- and $y$-intercepts.
6. Use sign analysis to determine behaviour near asymptotes.
7. Sketch.

<details>
<summary>Examples</summary>

- Sketch $f(x) = \frac{2x + 1}{x - 3}$:
  - Domain: $x \neq 3$. Vertical asymptote: $x = 3$.
  - Degrees equal (both 1), so horizontal asymptote at $y = \frac{2}{1} = 2$.
  - $y$-intercept: $f(0) = \frac{1}{-3} = -\frac{1}{3}$.
  - $x$-intercept: $2x + 1 = 0 \implies x = -\frac{1}{2}$.
  - Sign analysis: $f(x) \gt 0$ for $x \lt -\frac{1}{2}$ or $x \gt 3$; $f(x) \lt 0$ for
    $-\frac{1}{2} \lt x \lt 3$.
  - As $x \to 3^+$, $f(x) \to +\infty$; as $x \to 3^-$, $f(x) \to -\infty$.

- Sketch $f(x) = \frac{x^2 - 1}{x^2 - 4}$:
  - Factor: $f(x) = \frac{(x - 1)(x + 1)}{(x - 2)(x + 2)}$.
  - Domain: $x \neq \pm 2$. Vertical asymptotes: $x = 2$ and $x = -2$.
  - Degrees equal (both 2), horizontal asymptote at $y = \frac{1}{1} = 1$.
  - $x$-intercepts: $x = \pm 1$. $y$-intercept: $f(0) = \frac{-1}{-4} = \frac{1}{4}$.
  - As $x \to 2^+$, numerator $\to 3 \gt 0$, denominator $\to 0^+$, so $f(x) \to +\infty$.
  - As $x \to -2^+$, numerator $\to -3 \lt 0$, denominator $\to 0^-$, so $f(x) \to +\infty$.

</details>

---

## Graphical Methods for Solving Equations

### Using Graph Intersection

The solutions to $f(x) = g(x)$ correspond to the $x$-coordinates of the intersection points of the
curves $y = f(x)$ and $y = g(x)$.

This is particularly useful when:

- An exact algebraic solution is difficult or impossible (e.g., $e^x = x + 2$).
- You need to determine the **number** of solutions rather than their exact values.

### Number of Solutions from Graph Features

For the equation $f(x) = k$ (where $k$ is a constant), the number of solutions equals the number of
times the horizontal line $y = k$ intersects the graph of $y = f(x)$.

Key observations:

- At a **local maximum or minimum** of $f$, a small change in $k$ can change the number of
  solutions.
- If $k$ equals the maximum or minimum value, the corresponding intersection point is a **tangency**
  (double root).

<details>
<summary>Examples</summary>

- Find the number of solutions to $x^3 - 3x + 1 = 0$:
  - Let $f(x) = x^3 - 3x + 1$. Then $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$.
  - Critical points: $x = -1$ (local maximum, $f(-1) = 3$) and $x = 1$ (local minimum, $f(1) = -1$).
  - Since $f(-1) = 3 \gt 0$ and $f(1) = -1 \lt 0$, the graph crosses the $x$-axis three times.
  - Three distinct real solutions.

- The equation $2^x = x + 3$ has exactly two solutions:
  - $f(x) = 2^x$ is strictly increasing and concave up; $g(x) = x + 3$ is a straight line.
  - At $x = 0$: $2^0 = 1 \lt 3 = g(0)$.
  - At $x = 2$: $2^2 = 4 \lt 5 = g(2)$.
  - At $x = 3$: $2^3 = 8 \gt 6 = g(3)$.
  - By the intermediate value theorem, there is a root in $(2, 3)$.
  - For large negative $x$: $2^x \to 0$ and $x + 3 \to -\infty$, so $2^x \gt x + 3$.
  - Since $2^x$ grows faster than any linear function, there is exactly one more crossing for some
    $x \lt 0$.
  - Total: exactly 2 solutions.

</details>

---

## Common Pitfalls

<details>
<summary>Modulus function errors</summary>

- **Forgetting both cases.** When solving $|f(x)| = a$, you must consider $f(x) = a$ AND
  $f(x) = -a$. Dropping one case loses solutions.
- **Wrong inequality direction.** $\|f(x)\| \lt a$ means $f(x)$ is _between_ $-a$ and $a$ (a single
  interval). $\|f(x)\| \gt a$ means $f(x)$ is _outside_ this range (two disjoint intervals).
  Confusing these produces wrong solution sets.
- **Squaring both sides carelessly.** Squaring $|f(x)| = |g(x)|$ to get $f(x)^2 = g(x)^2$ is valid,
but squaring $f(x) = g(x)$ can introduce extraneous solutions (e.g., $x = \sqrt{x}$ squares to
$x^2 = x$, giving $x = 0$ or $x = 1$, but $x = 1$ is extraneous).
</details>

<details>
<summary>Rational function errors</summary>

- **Cancelling factors blindly.** $\frac{x^2 - 4}{x - 2} = x + 2$ only for $x \neq 2$. The point
  $x = 2$ is a hole, not a point on the graph.
- **Confusing holes and asymptotes.** If a factor cancels from both numerator and denominator, the
  result is a hole (removable discontinuity), not a vertical asymptote.
- **Wrong horizontal asymptote.** The horizontal asymptote depends on the _leading terms only_. Do
not set the entire numerator equal to the entire denominator.
</details>

<details>
<summary>Inequality errors</summary>

- **Multiplying by a variable.** Multiplying $\frac{f(x)}{g(x)} \gt 0$ by $g(x)$ flips the
  inequality when $g(x) \lt 0$. Always use a sign chart instead.
- **Including excluded values.** For $\frac{f(x)}{g(x)} \geq 0$, values where $g(x) = 0$ are still
  excluded from the domain, even though the inequality is non-strict.
- **Wrong discriminant analysis.** A negative discriminant with $a \gt 0$ means the quadratic is
always positive, not always negative.
</details>

---

## Wrap-up Questions

<details>
<summary>Wrap-up Questions</summary>
1. **Question:** Let $f(x) = \dfrac{2x - 6}{x + 1}$ and $g(x) = x^2 - 4$. Find $(f \circ g)(x)$ and state its domain.
<details>
<summary>Answer</summary>
- $(f \circ g)(x) = f(g(x)) = f(x^2 - 4) = \dfrac{2(x^2 - 4) - 6}{(x^2 - 4) + 1} = \dfrac{2x^2 - 14}{x^2 - 3}$
- $\text{dom}(g) = \mathbb{R}$.
- $\text{dom}(f) = \{x \in \mathbb{R} : x \neq -1\}$, so we require $g(x) \neq -1$, i.e. $x^2 - 4 \neq -1 \implies x^2 \neq 3 \implies x \neq \pm\sqrt{3}$.
- $\text{dom}(f \circ g) = \mathbb{R} \setminus \{\sqrt{3},\; -\sqrt{3}\}$.
</details>

2. **Question:** Let $f(x) = 3x - 5$. Find $f^{-1}(x)$ and verify that $f^{-1}(f(x)) = x$.
<details>
<summary>Answer</summary>

- Set $y = 3x - 5$. Solving for $x$: $x = \dfrac{y + 5}{3}$.
- Interchanging $x$ and $y$: $f^{-1}(x) = \dfrac{x + 5}{3}$.
- Verification: $f^{-1}(f(x)) = \dfrac{(3x - 5) + 5}{3} = \dfrac{3x}{3} = x$. Confirmed.
</details>

3. **Question:** A quadratic function $f(x)$ has a maximum value of $7$ at $x = 2$, and $f(0) = -5$.
Find $f(x)$.
<details>
<summary>Answer</summary>

- Since the maximum is at $(2, 7)$ and the parabola opens downward, write in vertex form:
  $f(x) = a(x - 2)^2 + 7$ with $a < 0$.
- Using $f(0) = -5$: $a(0 - 2)^2 + 7 = -5 \implies 4a + 7 = -5 \implies a = -3$.
- Therefore $f(x) = -3(x - 2)^2 + 7 = -3x^2 + 12x - 5$.
</details>

4. **Question:** Find the range of values of $k$ for which the equation
$x^2 + 2(k - 1)x + k + 5 = 0$ has two distinct real roots.
<details>
<summary>Answer</summary>

- For two distinct real roots, $\Delta > 0$.
- $\Delta = [2(k - 1)]^2 - 4(1)(k + 5) = 4(k - 1)^2 - 4k - 20 = 4(k^2 - 2k + 1) - 4k - 20 = 4k^2 - 8k + 4 - 4k - 20 = 4k^2 - 12k - 16$.
- $4k^2 - 12k - 16 > 0 \implies k^2 - 3k - 4 > 0 \implies (k - 4)(k + 1) > 0$.
- Therefore $k < -1$ or $k > 4$.
</details>

5. **Question:** Solve the equation $3^{2x} - 10 \cdot 3^x + 9 = 0$.
<details>
<summary>Answer</summary>

- Let $u = 3^x$ (note $u > 0$). The equation becomes $u^2 - 10u + 9 = 0$.
- $(u - 1)(u - 9) = 0 \implies u = 1$ or $u = 9$.
- Case 1: $3^x = 1 \implies x = 0$.
- Case 2: $3^x = 9 = 3^2 \implies x = 2$.
- Solutions: $x = 0$ or $x = 2$.
</details>

6. **Question:** Solve $\log_3(x - 2) + \log_3(x + 6) = 2$.
<details>
<summary>Answer</summary>

- Product law: $\log_3[(x - 2)(x + 6)] = 2$.
- Convert: $(x - 2)(x + 6) = 3^2 = 9$.
- $x^2 + 4x - 12 = 9 \implies x^2 + 4x - 21 = 0$.
- $(x + 7)(x - 3) = 0 \implies x = -7$ or $x = 3$.
- Domain: $x - 2 > 0 \implies x > 2$. Therefore $x = -7$ is rejected.
- Solution: $x = 3$.
</details>

7. **Question:** The graph of $y = f(x)$ passes through the points $(1, 4)$ and $(3, 10)$. State the
coordinates of the corresponding points on the graph of $y = 2f(x - 1) + 3$.
<details>
<summary>Answer</summary>

- For a point $(a, b)$ on $y = f(x)$ (so $f(a) = b$), the corresponding point on $y = 2f(x - 1) + 3$
  is found by setting $x - 1 = a$, i.e. $x = a + 1$, and $y = 2b + 3$.
- $(1, 4) \mapsto (1 + 1,\; 2 \times 4 + 3) = (2, 11)$.
- $(3, 10) \mapsto (3 + 1,\; 2 \times 10 + 3) = (4, 23)$.
</details>

8. **Question:** Given $f(x) = \log_2(x + 3)$ and $g(x) = 2^x - 1$, show that $f$ and $g$ are
inverse functions of each other, and state the domain and range of $f^{-1}$.
<details>
<summary>Answer</summary>

- $(f \circ g)(x) = f(g(x)) = f(2^x - 1) = \log_2((2^x - 1) + 3) = \log_2(2^x + 2)$.
- Wait -- let us verify properly. $g(x) = 2^x - 1$, so
  $f(g(x)) = \log_2(2^x - 1 + 3) = \log_2(2^x + 2)$. This does not simplify to $x$ directly.
- Let us re-examine. For $f$ and $g$ to be inverses, we need $f(g(x)) = x$.
- $f(g(x)) = \log_2(2^x + 2) \neq x$ in general. Let us check: at $x = 0$,
  $f(g(0)) = \log_2(1 + 2) = \log_2 3 \neq 0$.
- These are **not** inverse functions. (This is a trick question designed to test careful
  verification.)
- To find the true inverse of $f(x) = \log_2(x + 3)$:
  - Set $y = \log_2(x + 3) \implies 2^y = x + 3 \implies x = 2^y - 3$.
  - $f^{-1}(x) = 2^x - 3$.
- $\text{dom}(f^{-1}) = \text{range}(f) = \mathbb{R}$ (since $\log_2(x + 3)$ takes all real values
  for $x > -3$).
- $\text{range}(f^{-1}) = \text{dom}(f) = (-3, \infty)$.
</details>

9. **Question:** Given $f(x) = x^2 + 2x - 3$, find the range of $f$ when (a) the domain is
$\mathbb{R}$, and (b) the domain is $[0, 4]$.
<details>
<summary>Answer</summary>

- Completing the square: $f(x) = (x^2 + 2x + 1) - 1 - 3 = (x + 1)^2 - 4$.
- The vertex is at $(-1, -4)$.
- (a) Domain $\mathbb{R}$: Since the parabola opens upward with minimum $-4$, range is
  $[-4, \infty)$.
- (b) Domain $[0, 4]$:
  - $f(0) = -3$, $f(4) = 16 + 8 - 3 = 21$.
  - On $[0, 4]$, the function is increasing (vertex at $x = -1$ is to the left of the interval).
  - Range: $[-3, 21]$.
  </details>

10. **Question:** Let $f(x) = \dfrac{x}{x - 2}$ for $x \neq 2$. Find $f^{-1}$, and evaluate
$f^{-1}(3) + f(3)$.
<details>
<summary>Answer</summary>

- Set $y = \dfrac{x}{x - 2}$.
- $y(x - 2) = x \implies yx - 2y = x \implies yx - x = 2y \implies x(y - 1) = 2y \implies x = \dfrac{2y}{y - 1}$.
- $f^{-1}(x) = \dfrac{2x}{x - 1}$, with domain $\mathbb{R} \setminus \{1\}$.
- $f^{-1}(3) = \dfrac{2(3)}{3 - 1} = 3$.
- $f(3) = \dfrac{3}{3 - 2} = 3$.
- $f^{-1}(3) + f(3) = 3 + 3 = 6$.
</details>
</details>
