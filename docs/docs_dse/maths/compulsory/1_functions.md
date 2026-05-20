---
title: Functions
description:
  'DSE Mathematics functions notes covering domain and range, function notation, linear functions,
  quadratic functions, and graph sketching techniques.'
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
[polynomials](polynomials)), [logarithms](logarithms), [sequences](sequences-series)), and
[inequalities](inequalities)).

## Functions and Relations

### Definition of a Function

A function $f$ from a set $A$ to a set $B$Written $f \colon A \to B$Is a rule that assigns to Every
element $x \in A$ **exactly one** element $y \in B$. The element $y$ is called the **image** Of $x$
under $f$Written $y = f(x)$.

- The set $A$ is called the **domain** of $f$.
- The set $B$ is called the **codomain** of $f$.
- The set of all images $\{f(x) : x \in A\}$ is called the **range** of $f$. The range is always a
  subset of the codomain: $\mathrm{range}(f) \subseteq B$.

A **relation** is any subset of $A \times B$. A function is a special type of relation where each
Element of $A$ appears as the first component of exactly one ordered pair.

### Mapping Diagrams

A mapping diagram represents a function by drawing arrows from each element of the domain to the
Corresponding element(s) in the codomain. For a valid function, every element in the domain must
Have exactly one arrow leaving it.

### Vertical Line Test

For a graph in the $xy$-plane, the **vertical line test** states that a curve represents a function
Of $x$ if and only if no vertical line intersects the curve more than once.

### Types of Functions

A function $f \colon A \to B$ is:

- **Injective (one-to-one)** if $f(x_1) = f(x_2) \implies x_1 = x_2$. Equivalently, distinct inputs
  produce distinct outputs. This can be checked using the **horizontal line test**: no horizontal
  line intersects the graph more than once.
- **Surjective (onto)** if for every $y \in B$There exists $x \in A$ such that $f(x) = y$. In other
  words, the range equals the codomain.
- **Bijective (one-to-one correspondence)** if $f$ is both injective and surjective.

<summary>Examples</summary>
- $f(x) = 2x + 1$ with domain $\mathbb{R}$ is injective (linear, non-constant) and surjective onto $\mathbb{R}$Hence bijective.
- $f(x) = x^2$ with domain $\mathbb{R}$ is neither injective ($f(2) = f(-2) = 4$) nor surjective onto $\mathbb{R}$ (range is $[0, \infty)$).
- $f(x) = x^2$ with domain $[0, \infty)$ and codomain $[0, \infty)$ is bijective.
- $f(x) = \dfrac{1}{x}$ with domain $\mathbb{R} \setminus \{0\}$ is injective but not surjective onto $\mathbb{R}$ (range is $\mathbb{R} \setminus \{0\}$).

---

## Composite Functions

### Definition

Given two functions $f$ and $g$The **composite function** $f \circ g$ (read "$f$ of $g$") is Defined
by:

$$
(f \circ g)(x) = f(g(x))
$$

For $(f \circ g)(x)$ to be defined at a particular value of $x$Two conditions must hold:

1. $x$ must be in the domain of $g$.
2. $g(x)$ must be in the domain of $f$.

The domain of $f \circ g$ is therefore:

$$
\mathrm{dom}(f \circ g) = \{x \in \mathrm{dom}(g) : g(x) \in \mathrm{dom}(f)\}
$$

### Order of Composition

$f \circ g \neq g \circ f$. The order of composition matters because the inner function Is evaluated
first.

### Inverse Functions

If $f$ is a bijection, then the **inverse function** $f^{-1}$ exists and satisfies:

$$
F^{-1}(f(x)) = x \quad \mathrm{for all } x \in \mathrm{dom}(f)
$$

$$
F(f^{-1}(y)) = y \quad \mathrm{for all } y \in \mathrm{dom}(f^{-1}) = \mathrm{range}(f)
$$

The graphs of $y = f(x)$ and $y = f^{-1}(x)$ are reflections of each other in the line $y = x$.

To find $f^{-1}(x)$Set $y = f(x)$Solve for $x$ in terms of $y$Then interchange $x$ and $y$.

A necessary condition for a function to have an inverse is that it is one-to-one (injective). If the
Original function is not injective on its given domain, one may restrict the domain to make it
Injective.

<summary>Examples</summary>
- Let $f(x) = 2x + 3$ and $g(x) = x^2$. Then:
 - $(f \circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 3$
 - $(g \circ f)(x) = g(f(x)) = g(2x + 3) = (2x + 3)^2 = 4x^2 + 12x + 9$
 - Note that $(f \circ g)(1) = 5$ but $(g \circ f)(1) = 25$Confirming $f \circ g \neq g \circ f$.

- Find the inverse of $f(x) = \dfrac{2x + 1}{x - 3}$ ($x \neq 3$):
- Set $y = \dfrac{2x + 1}{x - 3}$
- $y(x - 3) = 2x + 1 \implies yx - 3y = 2x + 1$
- $x(y - 2) = 3y + 1 \implies x = \dfrac{3y + 1}{y - 2}$
- Therefore $f^{-1}(x) = \dfrac{3x + 1}{x - 2}$With domain $\mathbb{R} \setminus \{2\}$.

- Let $f(x) = \sqrt{x - 1}$ and $g(x) = x^2 + 1$. Find the domain of $f \circ g$:
- $\mathrm{dom}(g) = \mathbb{R}$
- $\mathrm{dom}(f) = \{x : x \geq 1\}$So we require $g(x) \geq 1$I.e.
  $x^2 + 1 \geq 1 \implies x^2 \geq 0$Which holds for all real $x$.
- Therefore $\mathrm{dom}(f \circ g) = \mathbb{R}$.

---

## Quadratic Functions

A **quadratic function** has the general form:

$$
F(x) = ax^2 + bx + c, \quad a \neq 0
$$

Where $a$$b$And $c$ are real constants.

### Vertex Form

By completing the square, the quadratic can be rewritten in **vertex form**:

$$
F(x) = a\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a}
$$

- The **vertex** is at $\left(-\dfrac{b}{2a},\; \dfrac{4ac - b^2}{4a}\right)$.
- The **axis of symmetry** is the vertical line $x = -\dfrac{b}{2a}$.
- If $a > 0$The parabola opens upward (minimum at the vertex).
- If $a < 0$The parabola opens downward (maximum at the vertex).

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
X = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

See also [polynomials](polynomials)) for connections between quadratic functions and polynomial
Equations.

### Completing the Square

To complete the square for $ax^2 + bx + c$:

1. Factor out $a$ from the first two terms: $a\left(x^2 + \dfrac{b}{a}x\right) + c$.
2. Add and subtract $\left(\dfrac{b}{2a}\right)^2$ inside the brackets:
   $a\left[\left(x + \dfrac{b}{2a}\right)^2 - \left(\dfrac{b}{2a}\right)^2\right] + c$.
3. Simplify to obtain the vertex form.

This technique is also essential in solving [inequalities](inequalities)) involving quadratic
Expressions.

<summary>Examples</summary>
- Express $f(x) = 2x^2 - 12x + 22$ in vertex form:
 - $f(x) = 2(x^2 - 6x) + 22 = 2\left[(x - 3)^2 - 9\right] + 22 = 2(x - 3)^2 + 4$
 - Vertex: $(3, 4)$Axis of symmetry: $x = 3$Minimum value: $4$.

- Determine the nature of roots of $3x^2 - 5x + 2 = 0$:
- $\Delta = (-5)^2 - 4(3)(2) = 25 - 24 = 1 > 0$
- Two distinct real roots: $x = \dfrac{5 \pm 1}{6}$I.e. $x = 1$ or $x = \dfrac{2}{3}$.

- Find the range of $f(x) = -x^2 + 4x - 7$:
- $f(x) = -(x^2 - 4x) - 7 = -\left[(x - 2)^2 - 4\right] - 7 = -(x - 2)^2 - 3$
- Since $-(x - 2)^2 \leq 0$ for all $x$The maximum value is $-3$.
- Range: $(-\infty, -3]$.

---

## Exponential Functions

An **exponential function** has the form:

$$
F(x) = a^x, \quad a > 0,\; a \neq 1
$$

Where $a$ is called the **base**.

### Properties

For $a, b > 0$ and $m, n \in \mathbb{R}$:

$$
\begin{aligned}
A^m \times a^n &= a^{m + n} \\
\frac{a^m}{a^n} &= a^{m - n} \\
(a^m)^n &= a^{mn} \\
A^0 &= 1 \\
A^{-n} &= \frac{1}{a^n}
\end{aligned}
$$

### Graphs

- For $a > 1$: $f(x) = a^x$ is strictly increasing. The graph passes through $(0, 1)$Approaches the
  $x$-axis as $x \to -\infty$ (horizontal asymptote at $y = 0$), and rises steeply as
  $x \to \infty$.
- For $0 < a < 1$: $f(x) = a^x$ is strictly decreasing. The graph is a reflection of
  $y = \left(\frac{1}{a}\right)^x$ in the $y$-axis.

### Exponential Equations

Equations of the form $a^{f(x)} = a^{g(x)}$ can be solved by equating exponents: $f(x) = g(x)$
(provided $a > 0$$a \neq 1$).

For equations of the form $a^{f(x)} = b$Take logarithms of both sides. See [logarithms](logarithms)
for the full treatment of logarithmic techniques.

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
- $A(24) = 100 \times \left(\frac{1}{2}\right)^3 = 12.5 \mathrm{ g}$

---

## Logarithmic Functions

The **logarithmic function** is the inverse of the exponential function. If $a^y = x$ (where
$a > 0$$a \neq 1$$x > 0$), then:

$$
Y = \log_a x
$$

This means $\log_a x$ is the exponent to which $a$ must be raised to obtain $x$.

The function $f(x) = \log_a x$ has domain $(0, \infty)$ and range $\mathbb{R}$. See
[logarithms](logarithms) for further details.

### Laws of Logarithms

For $a, M, N > 0$ ($a \neq 1$) and $p \in \mathbb{R}$:

$$
\begin{aligned}
\log_a (MN) &= \log_a M + \log_a N &\mathrm{(Product Law)} \\
\log_a \left(\frac{M}{N}\right) &= \log_a M - \log_a N &\mathrm{(Quotient Law)} \\
\log_a M^p &= p \log_a M &\mathrm{(Power Law)} \\
\log_a 1 &= 0 \\
\log_a a &= 1
\end{aligned}
$$

### Change of Base Formula

To evaluate a logarithm with any base:

$$
\log_a b = \frac{\log_c b}{\log_c a} = \frac{\ln b}{\ln a}
$$

For any positive base $c \neq 1$.

### Solving Logarithmic Equations

When solving logarithmic equations, the following steps are typical:

1. Use the laws of logarithms to combine or expand logarithmic terms.
2. Convert the logarithmic equation to its equivalent exponential form, or equate arguments when the
   logarithms have the same base.
3. Always verify that solutions satisfy the domain condition (arguments of all logarithms must be
   positive).

<summary>Examples</summary>
- Solve $\log_2 (x + 3) + \log_2 (x - 1) = 4$:
 - Product law: $\log_2 [(x + 3)(x - 1)] = 4$
 - Convert: $(x + 3)(x - 1) = 2^4 = 16$
 - $x^2 + 2x - 3 = 16 \implies x^2 + 2x - 19 = 0$
 - $x = \dfrac{-2 \pm \sqrt{4 + 76}}{2} = -1 \pm 2\sqrt{5}$
 - Domain requires $x + 3 > 0$ and $x - 1 > 0$I.e. $x > 1$.
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

---

## Graph Transformations

Given the graph of $y = f(x)$The graph of $y = af(x + b) + c$ is obtained by applying a sequence Of
transformations. The general form can be broken down as:

$$
Y = a \cdot f\left(x - (-b)\right) + c
$$

<DesmosGraph title="Graph Transformations" expressions={["a\cdot f(x+b)+c", "f(x)=x^2"]} width={800}
height={500} />

Use the sliders to explore how the parameters $a$$b$And $c$ transform the parent function, and
Observe the order in which each transformation is applied.

### Individual Transformations

| Transformation | Effect                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $y = f(x) + c$ | Vertical translation upward by $c$ units ($c \gt 0$) or downward by $c$ units ($c \lt 0$)                                                                           |
| $y = f(x - h)$ | Horizontal translation to the right by $h$ units ($h \gt 0$) or to the left by $h$ units ($h \lt 0$)                                                                |
| $y = af(x)$    | Vertical stretch by factor $a$ ($a \gt 1$) or vertical compression by factor $a$ ($0 \lt a \lt 1$); reflection in the $x$-axis if $a \lt 0$                         |
| $y = f(kx)$    | Horizontal stretch by factor $\frac{1}{k}$ ($0 \lt k \lt 1$) or horizontal compression by factor $\frac{1}{k}$ ($k \gt 1$); reflection in the $y$-axis if $k \lt 0$ |

### Order of Transformations

For $y = af(x + b) + c$The recommended order of application (from the graph of $y = f(x)$) is:

1. **Horizontal translation** by $-b$ units (shift left if $b > 0$Right if $b < 0$): replace $x$
   with $x + b$.
2. **Vertical stretch/compression** (and possible $x$-axis reflection) by factor $|a|$: multiply the
   function by $a$.
3. **Vertical translation** by $c$ units: add $c$.

Alternatively, one may think of this as working from the "inside out": apply the horizontal shift
First, then the vertical scaling, then the vertical shift.

:::info Horizontal transformations operate on $x$ **before** the function is evaluated; vertical
Transformations operate on $f(x)$ **after** the function is evaluated. This is why the horizontal
Shift has the "opposite sign" effect: $f(x + b)$ shifts left by $b$ (not right). :::

<summary>Examples</summary>
- Describe the transformation from $y = x^2$ to $y = 2(x - 3)^2 + 1$:
 - Starting from $y = x^2$:
 - Shift right by 3 units: $y = (x - 3)^2$
 - Vertical stretch by factor 2: $y = 2(x - 3)^2$
 - Shift up by 1 unit: $y = 2(x - 3)^2 + 1$
 - The vertex moves from $(0, 0)$ to $(3, 1)$.

- The graph of $y = f(x)$ passes through $(2, 5)$. Find the corresponding point on $y = -f(2x) + 3$:
- Start with $(2, 5)$ on $y = f(x)$Meaning $f(2) = 5$.
- For $y = -f(2x) + 3$Set $2x = 2 \implies x = 1$.
- Then $y = -f(2) + 3 = -5 + 3 = -2$.
- The point is $(1, -2)$.

- Given $f(x) = \sqrt{x}$Sketch $y = \sqrt{-x + 4} - 2$:
- Rewrite as $y = f(-(x - 4)) - 2 = f(-x + 4) - 2$.
- From $y = \sqrt{x}$: reflect in the $y$-axis to get $y = \sqrt{-x}$Then shift right by 4 to get
  $y = \sqrt{-(x - 4)} = \sqrt{-x + 4}$Then shift down by 2.
- Domain: $-x + 4 \geq 0 \implies x \leq 4$. Range: $[-2, \infty)$.

---

---

## Modulus Function

### Definition

The **modulus** (or absolute value) function is defined piecewise:

$$
F(x) = |x| = \begin{cases} x & \mathrm{if } x \geq 0 \\ -x & \mathrm{if } x \lt 0 \end{cases}
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
$-(|a| + |b|) \leq a + b \leq |a| + |b|$Which means $|a + b| \leq |a| + |b|$. $\qed$

### Solving Modulus Equations

The equation $|f(x)| = a$ (where $a \geq 0$) is equivalent to $f(x) = a$ or $f(x) = -a$. If
$a \lt 0$There is no solution.

### Solving Modulus Inequalities

| Inequality        | Equivalent Form                 | Condition  |
| ----------------- | ------------------------------- | ---------- |
| $\|f(x)\| \lt a$  | $-a \lt f(x) \lt a$             | $a \gt 0$  |
| $\|f(x)\| \gt a$  | $f(x) \lt -a$ or $f(x) \gt a$   | $a \geq 0$ |
| $\|f(x)\| \leq a$ | $-a \leq f(x) \leq a$           | $a \geq 0$ |
| $\|f(x)\| \geq a$ | $f(x) \leq -a$ or $f(x) \geq a$ | $a \geq 0$ |

**Proof of $\|f(x)\| \lt a \iff -a \lt f(x) \lt a$** (for $a \gt 0$):

$(\Rightarrow)$ If $|f(x)| \lt a$Then by definition of modulus, $-a \lt f(x) \lt a$.

$(\Leftarrow)$ If $-a \lt f(x) \lt a$Then $f(x) \lt a$ and $-f(x) \lt a$So $|f(x)| \lt a$. $\qed$

### Graphs Involving Modulus

- **$y = |f(x)|$**: Reflect any part of the graph of $y = f(x)$ that lies below the $x$-axis above
  it. The portion above the axis remains unchanged.
- **$y = f(|x|)$**: The graph for $x \geq 0$ is the same as $y = f(x)$. The graph for $x \lt 0$ is
  the reflection of the $x \geq 0$ portion in the $y$-axis (i.e., $f(|x|)$ is always an even
  function).

<summary>Examples</summary>

- Solve $|2x - 3| = 7$:
- $2x - 3 = 7 \implies x = 5$Or $2x - 3 = -7 \implies x = -2$.
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
- The quadratic $x^2 - 4x - 5$ has roots at $x = -1$ and $x = 5$With vertex at $x = 2$ giving
  $f(2) = 4 - 8 - 5 = -9$.
- Below the $x$-axis on $(-1, 5)$; above on $(-\infty, -1] \cup [5, \infty)$.
- Reflect the portion on $(-1, 5)$ upward. The minimum on $(-1, 5)$ becomes a maximum at $(2, 9)$.

---

## Inequalities with Functions

### Quadratic Inequalities

To solve $ax^2 + bx + c \gt 0$ (or $\lt$$\geq$$\leq$), use the discriminant and the shape of the
Parabola:

1. Find the roots of $ax^2 + bx + c = 0$ (if they exist).
2. Sketch the parabola (opens upward if $a \gt 0$Downward if $a \lt 0$).
3. Read off the intervals where the inequality is satisfied.

| Discriminant   | Roots        | $a \gt 0$: $f(x) \gt 0$    | $a \gt 0$: $f(x) \lt 0$ |
| -------------- | ------------ | -------------------------- | ----------------------- |
| $\Delta \gt 0$ | Two distinct | $x \lt x_1$ or $x \gt x_2$ | $x_1 \lt x \lt x_2$     |
| $\Delta = 0$   | One repeated | All $x \neq x_1$           | No solution             |
| $\Delta \lt 0$ | None         | All $x \in \mathbb{R}$     | No solution             |

See [inequalities.md](inequalities)) for the general theory.

### Rational Inequalities

To solve $\frac{f(x)}{g(x)} \gt 0$ (or $\lt$$\geq$$\leq$):

1. Express both sides with a common denominator so one side is zero.
2. Factor numerator and denominator completely.
3. Draw a **sign chart**: identify all critical points (zeros of numerator and denominator) and test
   the sign of the expression in each interval.
4. Exclude values where the denominator is zero (even for $\geq$ or $\leq$).

:::warning **Critical pitfall:** When multiplying both sides of an inequality by an expression
Involving $x$The direction of the inequality flips if that expression is negative. Instead of
Multiplying through, use a sign chart. :::

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
- Critical points: $x = -2$$x = 2$$x = 3$ (excluded).
- Sign chart: negative on $(-2, 2) \cup (2, 3)$Positive elsewhere.
- Include zeros of numerator: $x = -2$ and $x = 2$.
- Solution: $-2 \leq x \leq 2$ or $2 \lt x \lt 3$I.e., $[-2, 2] \cup (2, 3)$.

---

## Rational Functions

### Definition

A **rational function** is any function of the form:

$$
F(x) = \frac{P(x)}{Q(x)}
$$

Where $P(x)$ and $Q(x)$ are polynomials and $Q(x) \neq 0$. The domain is
$\mathbb{R} \setminus \{x : Q(x) = 0\}$.

### Asymptotes

**Vertical asymptotes** occur at values of $x$ where $Q(x) = 0$ but $P(x) \neq 0$. Near a vertical
Asymptote at $x = a$The magnitude of $f(x)$ grows without bound.

**Horizontal asymptotes** describe the end behaviour of $f(x)$ as $x \to \pm\infty$. Compare the
Degrees of $P$ and $Q$:

| Condition               | Horizontal Asymptote                                                                |
| ----------------------- | ----------------------------------------------------------------------------------- |
| $\deg P \lt \deg Q$     | $y = 0$ (the $x$-axis)                                                              |
| $\deg P = \deg Q$       | $y = \frac{\mathrm{leading coefficient of } P}{\mathrm{leading coefficient of } Q}$ |
| $\deg P = \deg Q + 1$   | Oblique asymptote (polynomial long division)                                        |
| $\deg P \gt \deg Q + 1$ | No horizontal or oblique asymptote                                                  |

**Proof (horizontal asymptote when $\deg P = \deg Q$):** Let $P(x) = a_n x^n + \cdots$ and
$Q(x) = b_n x^n + \cdots$. Then:

$$
\lim_{x \to \pm\infty} \frac{P(x)}{Q(x)} = \lim_{x \to \pm\infty} \frac{a_n x^n \left(1 + \frac{c_1}{x} + \cdots\right)}{b_n x^n \left(1 + \frac{d_1}{x} + \cdots\right)} = \frac{a_n}{b_n} \qed
$$

### Behaviour Near Vertical Asymptotes

For a vertical asymptote at $x = a$The sign of $f(x)$ on each side depends on the signs of the
Remaining factors. Analyse using a sign chart or by evaluating test points on each side.

### Sketching Rational Functions

1. Factor numerator and denominator; cancel common factors (these produce "holes," not asymptotes).
2. Determine the domain.
3. Find vertical asymptotes (zeros of denominator after cancellation).
4. Find horizontal/oblique asymptotes.
5. Find $x$- and $y$-intercepts.
6. Use sign analysis to determine behaviour near asymptotes.
7. Sketch.

<summary>Examples</summary>

- Sketch $f(x) = \frac{2x + 1}{x - 3}$:
- Domain: $x \neq 3$. Vertical asymptote: $x = 3$.
- Degrees equal (both 1), so horizontal asymptote at $y = \frac{2}{1} = 2$.
- $y$-intercept: $f(0) = \frac{1}{-3} = -\frac{1}{3}$.
- $x$-intercept: $2x + 1 = 0 \implies x = -\frac{1}{2}$.
- Sign analysis: $f(x) \gt 0$ for $x \lt -\frac{1}{2}$ or $x \gt 3$; $f(x) \lt 0$ for
  $-\frac{1}{2} \lt x \lt 3$.
- As $x \to 3^+$$f(x) \to +\infty$; as $x \to 3^-$$f(x) \to -\infty$.

- Sketch $f(x) = \frac{x^2 - 1}{x^2 - 4}$:
- Factor: $f(x) = \frac{(x - 1)(x + 1)}{(x - 2)(x + 2)}$.
- Domain: $x \neq \pm 2$. Vertical asymptotes: $x = 2$ and $x = -2$.
- Degrees equal (both 2), horizontal asymptote at $y = \frac{1}{1} = 1$.
- $x$-intercepts: $x = \pm 1$. $y$-intercept: $f(0) = \frac{-1}{-4} = \frac{1}{4}$.
- As $x \to 2^+$Numerator $\to 3 \gt 0$Denominator $\to 0^+$So $f(x) \to +\infty$.
- As $x \to -2^+$Numerator $\to -3 \lt 0$Denominator $\to 0^-$So $f(x) \to +\infty$.

---

## Graphical Methods for Solving Equations

### Using Graph Intersection

The solutions to $f(x) = g(x)$ correspond to the $x$-coordinates of the intersection points of the
Curves $y = f(x)$ and $y = g(x)$.

This is particularly useful when:

- An exact algebraic solution is difficult or impossible (e.g., $e^x = x + 2$).
- You need to determine the **number** of solutions rather than their exact values.

### Number of Solutions from Graph Features

For the equation $f(x) = k$ (where $k$ is a constant), the number of solutions equals the number of
Times the horizontal line $y = k$ intersects the graph of $y = f(x)$.

Key observations:

- At a **local maximum or minimum** of $f$A small change in $k$ can change the number of solutions.
- If $k$ equals the maximum or minimum value, the corresponding intersection point is a **tangency**
  (double root).

<summary>Examples</summary>

- Find the number of solutions to $x^3 - 3x + 1 = 0$:
- Let $f(x) = x^3 - 3x + 1$. Then $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$.
- Critical points: $x = -1$ (local maximum, $f(-1) = 3$) and $x = 1$ (local minimum, $f(1) = -1$).
- Since $f(-1) = 3 \gt 0$ and $f(1) = -1 \lt 0$The graph crosses the $x$-axis three times.
- Three distinct real solutions.

- The equation $2^x = x + 3$ has exactly two solutions:
- $f(x) = 2^x$ is strictly increasing and concave up; $g(x) = x + 3$ is a straight line.
- At $x = 0$: $2^0 = 1 \lt 3 = g(0)$.
- At $x = 2$: $2^2 = 4 \lt 5 = g(2)$.
- At $x = 3$: $2^3 = 8 \gt 6 = g(3)$.
- By the intermediate value theorem, there is a root in $(2, 3)$.
- For large negative $x$: $2^x \to 0$ and $x + 3 \to -\infty$So $2^x \gt x + 3$.
- Since $2^x$ grows faster than any linear function, there is exactly one more crossing for some
  $x \lt 0$.
- Total: exactly 2 solutions.

---

## Common Pitfalls

<summary>Modulus function errors</summary>

- **Forgetting both cases.** When solving $|f(x)| = a$You must consider $f(x) = a$ AND $f(x) = -a$.
  Dropping one case loses solutions.
- **Wrong inequality direction.** $\|f(x)\| \lt a$ means $f(x)$ is _between_ $-a$ and $a$ (a single
  interval). $\|f(x)\| \gt a$ means $f(x)$ is _outside_ this range (two disjoint intervals).
  Confusing these produces wrong solution sets.
- **Squaring both sides carelessly.** Squaring $|f(x)| = |g(x)|$ to get $f(x)^2 = g(x)^2$ is valid,
  But squaring $f(x) = g(x)$ can introduce extraneous solutions (e.g., $x = \sqrt{x}$ squares to
  $x^2 = x$Giving $x = 0$ or $x = 1$But $x = 1$ is extraneous).

<summary>Rational function errors</summary>

- **Cancelling factors blindly.** $\frac{x^2 - 4}{x - 2} = x + 2$ only for $x \neq 2$. The point
  $x = 2$ is a hole, not a point on the graph.
- **Confusing holes and asymptotes.** If a factor cancels from both numerator and denominator, the
  result is a hole (removable discontinuity), not a vertical asymptote.
- **Wrong horizontal asymptote.** The horizontal asymptote depends on the _leading terms only_. Do
  Not set the entire numerator equal to the entire denominator.

<summary>Inequality errors</summary>

- **Multiplying by a variable.** Multiplying $\frac{f(x)}{g(x)} \gt 0$ by $g(x)$ flips the
  inequality when $g(x) \lt 0$. Always use a sign chart instead.
- **Including excluded values.** For $\frac{f(x)}{g(x)} \geq 0$Values where $g(x) = 0$ are still
  excluded from the domain, even though the inequality is non-strict.
- **Wrong discriminant analysis.** A negative discriminant with $a \gt 0$ means the quadratic is
  Always positive, not always negative.

---

## Wrap-up Questions

<summary>Wrap-up Questions</summary>
1. **Question:** Let $f(x) = \dfrac{2x - 6}{x + 1}$ and $g(x) = x^2 - 4$. Find $(f \circ g)(x)$ and state its domain.
### Details
<summary>Answer</summary>
- $(f \circ g)(x) = f(g(x)) = f(x^2 - 4) = \dfrac{2(x^2 - 4) - 6}{(x^2 - 4) + 1} = \dfrac{2x^2 - 14}{x^2 - 3}$
- $\mathrm{dom}(g) = \mathbb{R}$.
- $\mathrm{dom}(f) = \{x \in \mathbb{R} : x \neq -1\}$So we require $g(x) \neq -1$I.e. $x^2 - 4 \neq -1 \implies x^2 \neq 3 \implies x \neq \pm\sqrt{3}$.
- $\mathrm{dom}(f \circ g) = \mathbb{R} \setminus \{\sqrt{3},\; -\sqrt{3}\}$.

2. **Question:** Let $f(x) = 3x - 5$. Find $f^{-1}(x)$ and verify that $f^{-1}(f(x)) = x$.

<summary>Answer</summary>

- Set $y = 3x - 5$. Solving for $x$: $x = \dfrac{y + 5}{3}$.
- Interchanging $x$ and $y$: $f^{-1}(x) = \dfrac{x + 5}{3}$.
- Verification: $f^{-1}(f(x)) = \dfrac{(3x - 5) + 5}{3} = \dfrac{3x}{3} = x$. Confirmed.

3. **Question:** A quadratic function $f(x)$ has a maximum value of $7$ at $x = 2$And $f(0) = -5$.
   Find $f(x)$.

<summary>Answer</summary>

- Since the maximum is at $(2, 7)$ and the parabola opens downward, write in vertex form:
  $f(x) = a(x - 2)^2 + 7$ with $a < 0$.
- Using $f(0) = -5$: $a(0 - 2)^2 + 7 = -5 \implies 4a + 7 = -5 \implies a = -3$.
- Therefore $f(x) = -3(x - 2)^2 + 7 = -3x^2 + 12x - 5$.

4. **Question:** Find the range of values of $k$ for which the equation
   $x^2 + 2(k - 1)x + k + 5 = 0$ has two distinct real roots.

<summary>Answer</summary>

- For two distinct real roots, $\Delta > 0$.
- $\Delta = [2(k - 1)]^2 - 4(1)(k + 5) = 4(k - 1)^2 - 4k - 20 = 4(k^2 - 2k + 1) - 4k - 20 = 4k^2 - 8k + 4 - 4k - 20 = 4k^2 - 12k - 16$.
- $4k^2 - 12k - 16 > 0 \implies k^2 - 3k - 4 > 0 \implies (k - 4)(k + 1) > 0$.
- Therefore $k < -1$ or $k > 4$.

5. **Question:** Solve the equation $3^{2x} - 10 \cdot 3^x + 9 = 0$.

<summary>Answer</summary>

- Let $u = 3^x$ (note $u > 0$). The equation becomes $u^2 - 10u + 9 = 0$.
- $(u - 1)(u - 9) = 0 \implies u = 1$ or $u = 9$.
- Case 1: $3^x = 1 \implies x = 0$.
- Case 2: $3^x = 9 = 3^2 \implies x = 2$.
- Solutions: $x = 0$ or $x = 2$.

6. **Question:** Solve $\log_3(x - 2) + \log_3(x + 6) = 2$.

<summary>Answer</summary>

- Product law: $\log_3[(x - 2)(x + 6)] = 2$.
- Convert: $(x - 2)(x + 6) = 3^2 = 9$.
- $x^2 + 4x - 12 = 9 \implies x^2 + 4x - 21 = 0$.
- $(x + 7)(x - 3) = 0 \implies x = -7$ or $x = 3$.
- Domain: $x - 2 > 0 \implies x > 2$. Therefore $x = -7$ is rejected.
- Solution: $x = 3$.

7. **Question:** The graph of $y = f(x)$ passes through the points $(1, 4)$ and $(3, 10)$. State the
   Coordinates of the corresponding points on the graph of $y = 2f(x - 1) + 3$.

<summary>Answer</summary>

- For a point $(a, b)$ on $y = f(x)$ (so $f(a) = b$), the corresponding point on $y = 2f(x - 1) + 3$
  is found by setting $x - 1 = a$I.e. $x = a + 1$And $y = 2b + 3$.
- $(1, 4) \mapsto (1 + 1,\; 2 \times 4 + 3) = (2, 11)$.
- $(3, 10) \mapsto (3 + 1,\; 2 \times 10 + 3) = (4, 23)$.

8. **Question:** Given $f(x) = \log_2(x + 3)$ and $g(x) = 2^x - 1$Show that $f$ and $g$ are Inverse
   functions of each other, and state the domain and range of $f^{-1}$.

<summary>Answer</summary>

- $(f \circ g)(x) = f(g(x)) = f(2^x - 1) = \log_2((2^x - 1) + 3) = \log_2(2^x + 2)$.
- Wait -- let us verify properly. $g(x) = 2^x - 1$So
  $f(g(x)) = \log_2(2^x - 1 + 3) = \log_2(2^x + 2)$. This does not simplify to $x$ directly.
- Let us re-examine. For $f$ and $g$ to be inverses, we need $f(g(x)) = x$.
- $f(g(x)) = \log_2(2^x + 2) \neq x$ . Let us check: at $x = 0$
  $f(g(0)) = \log_2(1 + 2) = \log_2 3 \neq 0$.
- These are **not** inverse functions. (This is a trick question designed to test careful
  verification.)
- To find the true inverse of $f(x) = \log_2(x + 3)$:
- Set $y = \log_2(x + 3) \implies 2^y = x + 3 \implies x = 2^y - 3$.
- $f^{-1}(x) = 2^x - 3$.
- $\mathrm{dom}(f^{-1}) = \mathrm{range}(f) = \mathbb{R}$ (since $\log_2(x + 3)$ takes all real
  values for $x > -3$).
- $\mathrm{range}(f^{-1}) = \mathrm{dom}(f) = (-3, \infty)$.

9. **Question:** Given $f(x) = x^2 + 2x - 3$Find the range of $f$ when (a) the domain is
   $\mathbb{R}$And (b) the domain is $[0, 4]$.

<summary>Answer</summary>

- Completing the square: $f(x) = (x^2 + 2x + 1) - 1 - 3 = (x + 1)^2 - 4$.
- The vertex is at $(-1, -4)$.
- (a) Domain $\mathbb{R}$: Since the parabola opens upward with minimum $-4$Range is $[-4, \infty)$.
- (b) Domain $[0, 4]$:
- $f(0) = -3$$f(4) = 16 + 8 - 3 = 21$.
- On $[0, 4]$The function is increasing (vertex at $x = -1$ is to the left of the interval).
- Range: $[-3, 21]$.

10. **Question:** Let $f(x) = \dfrac{x}{x - 2}$ for $x \neq 2$. Find $f^{-1}$And evaluate
    $f^{-1}(3) + f(3)$.

<summary>Answer</summary>

- Set $y = \dfrac{x}{x - 2}$.
- $y(x - 2) = x \implies yx - 2y = x \implies yx - x = 2y \implies x(y - 1) = 2y \implies x = \dfrac{2y}{y - 1}$.
- $f^{-1}(x) = \dfrac{2x}{x - 1}$With domain $\mathbb{R} \setminus \{1\}$.
- $f^{-1}(3) = \dfrac{2(3)}{3 - 1} = 3$.
- $f(3) = \dfrac{3}{3 - 2} = 3$.
- $f^{-1}(3) + f(3) = 3 + 3 = 6$.

For the A-Level treatment of this topic, see
[Functions](https://alevel.wyattau.com/docs/maths/pure-mathematics/functions).

---

:::tip Diagnostic Test Ready to test your understanding of **Functions**? The
[diagnostic test](/docs/dse/maths/diagnostics/diag-functions) contains the hardest questions within
the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Functions
with other DSE mathematics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/dse/maths/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix. :::

---

## DSE Exam Technique

### Showing Working

For function problems in DSE Paper 1:

1. When determining the domain, explicitly state each restriction (division by zero, square root,
   logarithm).
2. When sketching graphs, label all intercepts, asymptotes, and key points.
3. When checking injectivity/surjectivity, provide a specific counterexample.
4. When finding the range, show the maximum/minimum value and justify why it is attainable.

### Significant Figures

Exact values are preferred. Decimal answers to 3 significant figures.

### Common DSE Question Types

1. **Domain and range** determination for various function types.
2. **Injectivity/surjectivity** ./1-number-and-algebra/3_proof-and-logics and counterexamples.
3. **Graph sketching** with transformations.
4. **Composite function** evaluation and domain finding.
5. **Piecewise function** evaluation and graphing.

---

## Additional Worked Examples

**Worked Example 9: Determining injectivity**

Is the function $f(x) = x^3 - 3x$ injective on $\mathbb{R}$?

<summary>Solution</summary>

$f(0) = 0$$f(\sqrt{3}) = 3\sqrt{3} - 3\sqrt{3} = 0$$f(-\sqrt{3}) = 0$.

Since $f(0) = f(\sqrt{3}) = f(-\sqrt{3})$ and the inputs are distinct, $f$ is not injective on
$\mathbb{R}$.

Note: $f$ is injective on $[1, \infty)$ since $f'(x) = 3x^2 - 3 = 3(x-1)(x+1) > 0$ for $x > 1$.

**Worked Example 10: Surjectivity**

Is $f(x) = x^2 + 1$ surjective if the codomain is $\mathbb{R}$?

<summary>Solution</summary>

No. Since $x^2 \geq 0$ for all real $x$We have $f(x) = x^2 + 1 \geq 1$. The value $0 \in \mathbb{R}$
is not attained. Therefore $f$ is not surjective onto $\mathbb{R}$.

If the codomain is restricted to $[1, \infty)$Then $f$ is surjective.

**Worked Example 11: Graph of a piecewise function**

Sketch the graph of
$f(x) = \begin{cases} |x| & \text{if } x \leq 2 \\ x^2 - 2x & \text{if } x > 2 \end{cases}$

<summary>Solution</summary>

For $x \leq 2$: $f(x) = |x|$Which is a V-shape with vertex at $(0, 0)$.

At $x = 2$: $f(2) = 2$.

For $x > 2$: $f(x) = x^2 - 2x = (x-1)^2 - 1$.

At $x = 2^+$: $f(2) = 4 - 4 = 0$.

There is a jump discontinuity at $x = 2$: $f(2) = 2$ but $\lim_{x \to 2^+} f(x) = 0$.

For $x > 2$The function is a parabola with vertex at $(1, -1)$But since $x > 2$We only see the right
branch, which is strictly increasing.

**Worked Example 12: Even and odd function properties**

If $f$ is an odd function and $g$ is an even function, determine whether $f \circ g$ is even, odd,
or neither.

<summary>Solution</summary>

$$(f \circ g)(-x) = f(g(-x)) = f(g(x)) = (f \circ g)(x)$$

Since $g$ is even: $g(-x) = g(x)$.

So $(f \circ g)(-x) = (f \circ g)(x)$Which means $f \circ g$ is even.

---

## DSE Exam-Style Questions

**DSE Practice 1.** Let $f(x) = \dfrac{2x + 3}{x - 1}$. Find the domain, range, and determine
whether $f$ is injective.

<summary>Solution</summary>

Domain: $x \neq 1$So $\mathrm{dom}(f) = \mathbb{R} \setminus \{1\}$.

$f(x) = 2 + \dfrac{5}{x - 1}$.

For $x > 1$: as $x \to 1^+$$f(x) \to +\infty$; as $x \to +\infty$$f(x) \to 2^+$. Range:
$(2, +\infty)$.

For $x < 1$: as $x \to 1^-$$f(x) \to -\infty$; as $x \to -\infty$$f(x) \to 2^-$. Range:
$(-\infty, 2)$.

Combined range: $\mathbb{R} \setminus \{2\}$.

$f$ is injective: for $x > 1$$f$ is strictly decreasing (derivative $-5/(x-1)^2 < 0$); for
$x < 1$$f$ is also strictly decreasing. And no value from $(2, +\infty)$ overlaps with
$(-\infty, 2)$.

**DSE Practice 2.** Let $f(x) = x^2 - 2x + 3$ for $x \geq 1$. Find the range and determine whether
$f$ has an inverse.

<summary>Solution</summary>

$f(x) = (x - 1)^2 + 2$. Since $x \geq 1$ and the vertex is at $(1, 2)$$f$ is strictly increasing on
$[1, \infty)$.

Range: $[2, \infty)$.

Since $f$ is strictly increasing (hence injective) on $[1, \infty)$It has an inverse.

**DSE Practice 3.** A function is defined by $f(x) = \lfloor x \rfloor$ (the greatest integer less
than or equal to $x$). Find $f(3.7)$$f(-2.1)$And $f(0)$.

<summary>Solution</summary>

$f(3.7) = 3$$f(-2.1) = -3$$f(0) = 0$.

**DSE Practice 4.** Determine whether $f(x) = x^3 + x$ is odd, even, or neither.

<summary>Solution</summary>

$$f(-x) = (-x)^3 + (-x) = -x^3 - x = -(x^3 + x) = -f(x)$$

Since $f(-x) = -f(x)$$f$ is odd.

**DSE Practice 5.** The function $f$ is defined on $\mathbb{R}$ by $f(x) = ax^2 + bx + c$. Given
that $f(0) = 5$$f(1) = 4$And $f(-1) = 10$Find $a$$b$And $c$.

<summary>Solution</summary>

$f(0) = c = 5$.

$f(1) = a + b + 5 = 4 \implies a + b = -1 \quad \text{(i)}$.

$f(-1) = a - b + 5 = 10 \implies a - b = 5 \quad \text{(ii)}$.

(i) + (ii): $2a = 4 \implies a = 2$. From (i): $b = -3$.

$f(x) = 2x^2 - 3x + 5$.

## Summary

<<<<<<< Updated upstream:docs/docs_dse/maths/compulsory/1_functions.md

- A function assigns exactly one output to each input; check injectivity (one-to-one), surjectivity
  (onto), and bijectivity.
- The domain of $f \circ g$ requires both $x \in \mathrm{dom}(g)$ and $g(x) \in \mathrm{dom}(f)$.
- The inverse $f^{-1}$ exists iff $f$ is bijective; find it by swapping $x$ and $y$ and solving.
- Graph transformations follow a specific order: horizontal shift $\to$ horizontal stretch $\to$
  reflection $\to$ vertical stretch $\to$ vertical shift.
- Even functions satisfy $f(-x) = f(x)$; odd functions satisfy $f(-x) = -f(x)$.

## Worked Examples

### Example 1: Composite function domain

**Problem.** Given $f(x) = \sqrt{x - 1}$ and $g(x) = \dfrac{2}{x - 3}$, find
$\mathrm{dom}(f \circ g)$.

**Solution.** We require both $x \in \mathrm{dom}(g)$ and $g(x) \in \mathrm{dom}(f)$.

1. $\mathrm{dom}(g) = \mathbb{R} \setminus \{3\}$, so $x \neq 3$.
2. $\mathrm{dom}(f) = [1, \infty)$, so $g(x) \geq 1$, i.e. $\dfrac{2}{x - 3} \geq 1$.

Case 1: $x > 3$. Then $2 \geq x - 3$, giving $x \leq 5$. Combined with $x > 3$: $3 < x \leq 5$.

Case 2: $x < 3$. Then $2 \leq x - 3$, giving $x \geq 5$, which contradicts $x < 3$. No solution.

Therefore $\mathrm{dom}(f \circ g) = (3,\, 5]$.

$\blacksquare$

### Example 2: Finding an inverse function

**Problem.** $f(x) = \dfrac{3x + 2}{x - 1}$ for $x \neq 1$. Find $f^{-1}$ and state its domain and
range.

**Solution.** Set $y = \dfrac{3x + 2}{x - 1}$.

$y(x - 1) = 3x + 2 \implies yx - y = 3x + 2 \implies yx - 3x = y + 2 \implies x(y - 3) = y + 2$

$$f^{-1}(x) = \frac{x + 2}{x - 3}, \quad \mathrm{dom}(f^{-1}) = \mathbb{R} \setminus \{3\}$$

$\mathrm{range}(f^{-1}) = \mathrm{dom}(f) = \mathbb{R} \setminus \{1\}$.

$\blacksquare$

## Cross-References

| Topic       | Site    | Link                                                                                             |
| ----------- | ------- | ------------------------------------------------------------------------------------------------ |
| [Functions] | A-Level | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/maths/pure-mathematics/05-functions) |
| [Functions] | IB      | [View](https://ib.wyattau.com/docs/ib/maths/2-functions/1_functions)                             |
| [Functions] | DSE     | [View](https://dse.wyattau.com/docs/dse/maths/compulsory/1_functions)                            |

======= This topic covers the mathematical techniques and concepts related to functions, including
key theorems, methods, and problem-solving approaches.

**Key concepts include:**

- fundamental definitions and theorems
- algebraic and graphical methods
- proof and logical reasoning
- problem-solving strategies
- applications and modelling

Regular practice with a variety of question types is essential to build fluency and confidence in
applying these mathematical techniques.

> > > > > > > Stashed changes:docs/docs_dse/Maths/compulsory/functions.md
