---
id: functions
title: Functions and Equations
description:
  IB Mathematics — functions, composite functions, inverse functions, transformations, and
  equations.
slug: functions
---

## Function Notation

A **function** $f$ maps each element of a set (the **domain**) to exactly one element of another set
(the **codomain**).

$$
f: X \to Y
$$

We write $f(x) = y$ where $x$ is the input (independent variable) and $y$ is the output (dependent
variable).

### Key Terminology

| Term     | Definition                                 |
| -------- | ------------------------------------------ |
| Domain   | Set of all valid inputs                    |
| Codomain | Set of possible outputs                    |
| Range    | Set of actual outputs (subset of codomain) |
| Argument | The input value, e.g., $x$ in $f(x)$       |
| Image    | The output for a given input               |

### Vertical Line Test

A relation is a function if and only if every vertical line intersects the graph at most once.

---

## Domain and Range

### Finding the Domain

The domain of a real-valued function is restricted by:

1. **Denominators** must be non-zero: $g(x) \neq 0$
2. **Square roots** must have non-negative arguments: $g(x) \ge 0$
3. **Logarithms** must have positive arguments: $g(x) \gt 0$

:::info[Example]

Find the domain of $\displaystyle f(x) = \frac{1}{\sqrt{x-2}}$.

We need $x - 2 \gt 0$ (strictly positive since it is in the denominator).

Domain: $x \gt 2$, or $(2, \infty)$.

:::

:::info[Example]

Find the domain of $\displaystyle f(x) = \ln(x+3) + \sqrt{5-x}$.

From $\ln(x+3)$: $x + 3 \gt 0 \implies x \gt -3$.

From $\sqrt{5-x}$: $5 - x \ge 0 \implies x \le 5$.

Domain: $(-3, 5]$.

:::

### Finding the Range

To find the range, consider the domain and the behaviour of the function:

- Solve $y = f(x)$ for $x$ and find restrictions on $y$.
- Consider the graph: what $y$-values are achieved?
- Check for horizontal asymptotes and extrema.

:::info[Example]

Find the range of $f(x) = x^2 - 4x + 3$.

Completing the square: $f(x) = (x-2)^2 - 1$.

Since $(x-2)^2 \ge 0$, the minimum value is $-1$.

Range: $[-1, \infty)$.

:::

---

## Composite Functions

### Definition

The **composite function** $f \circ g$ (read "f of g") is defined by:

$$
(f \circ g)(x) = f(g(x))
$$

This means: first apply $g$ to $x$, then apply $f$ to the result.

### Order Matters

In general, $f \circ g \neq g \circ f$.

:::info[Example]

Given $f(x) = 2x + 1$ and $g(x) = x^2$:

$$
(f \circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 1
$$

$$
(g \circ f)(x) = g(f(x)) = g(2x+1) = (2x+1)^2 = 4x^2 + 4x + 1
$$

Clearly $f \circ g \neq g \circ f$.

:::

### Domain of Composite Functions

The domain of $f \circ g$ consists of all $x$ in the domain of $g$ such that $g(x)$ is in the domain
of $f$.

:::info[Example]

Given $f(x) = \sqrt{x}$ and $g(x) = x - 5$, find the domain of $f \circ g$.

$$
(f \circ g)(x) = f(x - 5) = \sqrt{x - 5}
$$

We need $x - 5 \ge 0$, so $x \ge 5$.

Domain of $f \circ g$: $[5, \infty)$.

:::

---

## Inverse Functions

### Definition

The **inverse function** $f^{-1}$ of $f$ satisfies:

$$
f^{-1}(f(x)) = x \quad \text{and} \quad f(f^{-1}(x)) = x
$$

### Existence of Inverses

A function has an inverse if and only if it is **one-to-one** (injective), meaning each output comes
from exactly one input. This is verified by the **horizontal line test**: no horizontal line
intersects the graph more than once.

### Finding the Inverse

1. Write $y = f(x)$.
2. Swap $x$ and $y$.
3. Solve for $y$.
4. Replace $y$ with $f^{-1}(x)$.

:::info[Example]

Find the inverse of $f(x) = \dfrac{2x + 3}{x - 1}$.

$$
y = \frac{2x + 3}{x - 1}
$$

Swap $x$ and $y$:

$$
x = \frac{2y + 3}{y - 1}
$$

$$
x(y - 1) = 2y + 3
$$

$$
xy - x = 2y + 3
$$

$$
xy - 2y = x + 3
$$

$$
y(x - 2) = x + 3
$$

$$
f^{-1}(x) = \frac{x + 3}{x - 2}
$$

:::

### Domain and Range of Inverses

The domain of $f^{-1}$ equals the range of $f$, and the range of $f^{-1}$ equals the domain of $f$.

### Graph of Inverse Functions

The graph of $y = f^{-1}(x)$ is the reflection of $y = f(x)$ in the line $y = x$.

### Restricting Domains

Functions that are not one-to-one on their natural domain can have inverses if their domain is
restricted.

:::info[Example]

$f(x) = x^2$ is not one-to-one on $\mathbb{R}$, but $f: [0, \infty) \to [0, \infty)$ defined by
$f(x) = x^2$ has inverse $f^{-1}(x) = \sqrt{x}$.

:::

---

## Function Transformations

### Summary of Transformations

Given $y = f(x)$:

| Transformation                      | Effect on Graph               | Equation                           |
| ----------------------------------- | ----------------------------- | ---------------------------------- |
| Vertical translation up by $k$      | Moves up $k$ units            | $y = f(x) + k$                     |
| Vertical translation down by $k$    | Moves down $k$ units          | $y = f(x) - k$                     |
| Horizontal translation right by $h$ | Moves right $h$ units         | $y = f(x - h)$                     |
| Horizontal translation left by $h$  | Moves left $h$ units          | $y = f(x + h)$                     |
| Vertical stretch by factor $a$      | Stretches vertically by $a$   | $y = af(x)$                        |
| Vertical compression by factor $a$  | Compresses by $\dfrac{1}{a}$  | $y = af(x)$ where $0 \lt a \lt 1$  |
| Horizontal stretch by factor $b$    | Stretches horizontally by $b$ | $y = f\!\left(\dfrac{x}{b}\right)$ |
| Reflection in $x$-axis              | Flips vertically              | $y = -f(x)$                        |
| Reflection in $y$-axis              | Flips horizontally            | $y = f(-x)$                        |
| Reflection in $y = x$               | Swaps $x$ and $y$             | $y = f^{-1}(x)$                    |

:::warning[Exam Tip]

Horizontal transformations are often counterintuitive. $f(x - 2)$ shifts the graph to the **right**
by 2 (not left). $f(2x)$ compresses horizontally by a factor of $\dfrac{1}{2}$ (not stretches).

:::

### Order of Transformations

When combining transformations, apply in this order:

1. Horizontal translations (shifts left/right)
2. Horizontal stretches/compressions
3. Reflections
4. Vertical stretches/compressions
5. Vertical translations (shifts up/down)

:::info[Example]

Describe the sequence of transformations that maps $f(x) = x^2$ to $g(x) = 2(x-3)^2 + 1$.

Starting from $f(x) = x^2$:

1. Translate right by 3: $(x-3)^2$
2. Vertical stretch by factor 2: $2(x-3)^2$
3. Translate up by 1: $2(x-3)^2 + 1$

The vertex moves from $(0, 0)$ to $(3, 1)$, and the parabola is narrower.

:::

### Effect on Key Points

| Point on $y = f(x)$ | Point on $y = f(x-h)+k$ |
| ------------------- | ----------------------- |
| $(x, y)$            | $(x+h, y+k)$            |

---

## Graphing Functions

### Key Features to Identify

1. **Domain and range**
2. **Intercepts**: $x$-intercepts (zeros) and $y$-intercept
3. **Symmetry**: even ($f(-x) = f(x)$), odd ($f(-x) = -f(x)$), periodic
4. **Asymptotes**: vertical, horizontal, oblique
5. **Stationary points**: local maxima and minima
6. **End behaviour**: as $x \to \pm\infty$

### Asymptotes

**Vertical asymptotes** occur at values of $x$ where the function is undefined and the function
approaches $\pm\infty$.

**Horizontal asymptotes** describe the behaviour as $x \to \pm\infty$.

For rational functions $\dfrac{P(x)}{Q(x)}$:

- If $\deg P \lt \deg Q$: horizontal asymptote at $y = 0$.
- If $\deg P = \deg Q$: horizontal asymptote at
  $y = \dfrac{\text{leading coefficient of } P}{\text{leading coefficient of } Q}$.
- If $\deg P = \deg Q + 1$: oblique asymptote (found by polynomial division).

:::info[Example]

Find the asymptotes of $\displaystyle f(x) = \frac{2x + 1}{x - 3}$.

**Vertical asymptote**: $x - 3 = 0 \implies x = 3$.

**Horizontal asymptote**: Same degree, so $y = \dfrac{2}{1} = 2$.

:::

---

## Polynomial Equations

### The Factor Theorem

$(x - a)$ is a factor of $P(x)$ if and only if $P(a) = 0$.

### The Remainder Theorem

When $P(x)$ is divided by $(x - a)$, the remainder is $P(a)$.

:::info[Example]

Find the remainder when $P(x) = 2x^3 - 3x^2 + 5x - 7$ is divided by $(x + 2)$.

$$
P(-2) = 2(-8) - 3(4) + 5(-2) - 7 = -16 - 12 - 10 - 7 = -45
$$

The remainder is $-45$.

:::

### The Rational Root Theorem

If $P(x) = a_n x^n + \cdots + a_0$ has integer coefficients, then any rational root $\dfrac{p}{q}$
(in lowest terms) satisfies:

- $p$ divides $a_0$
- $q$ divides $a_n$

:::info[Example]

Find all roots of $P(x) = 2x^3 - x^2 - 13x - 6$.

Possible rational roots: $\pm 1, \pm 2, \pm 3, \pm 6, \pm \dfrac{1}{2}, \pm \dfrac{3}{2}$.

$P(3) = 54 - 9 - 39 - 6 = 0$, so $x = 3$ is a root.

Divide by $(x - 3)$:

$$
2x^3 - x^2 - 13x - 6 = (x - 3)(2x^2 + 5x + 2)
$$

$$
2x^2 + 5x + 2 = (2x + 1)(x + 2)
$$

Roots: $x = 3$, $x = -\dfrac{1}{2}$, $x = -2$.

:::

### Polynomial Division

**Long division** and **synthetic division** are two methods for dividing polynomials.

:::info[Example]

Divide $x^3 + 2x^2 - 5x - 6$ by $(x + 1)$ using synthetic division.

```
-1 | 1   2   -5   -6
   |     -1   -1    6
   |----------------
     1   1   -6    0
```

Result: $x^2 + x - 6 = (x+3)(x-2)$.

So $x^3 + 2x^2 - 5x - 6 = (x+1)(x+3)(x-2)$.

:::

### Sum and Product of Roots

For $ax^n + bx^{n-1} + \cdots = 0$ with roots $\alpha, \beta, \gamma, \ldots$:

**Quadratic** ($ax^2 + bx + c = 0$):

$$
\alpha + \beta = -\frac{b}{a}, \quad \alpha\beta = \frac{c}{a}
$$

**Cubic** ($ax^3 + bx^2 + cx + d = 0$):

$$
\alpha + \beta + \gamma = -\frac{b}{a}, \quad \alpha\beta + \beta\gamma + \gamma\alpha = \frac{c}{a}, \quad \alpha\beta\gamma = -\frac{d}{a}
$$

---

## Inequalities

### Linear Inequalities

$$
ax + b \gt 0 \implies x \gt -\frac{b}{a} \quad (\text{if } a \gt 0)
$$

:::warning[Exam Tip]

When multiplying or dividing an inequality by a negative number, **reverse** the inequality sign.

:::

### Quadratic Inequalities

Factorise the quadratic and use a sign diagram (or test points in each interval).

:::info[Example]

Solve $x^2 - 5x + 6 \le 0$.

$$
(x - 2)(x - 3) \le 0
$$

The product is non-positive when $2 \le x \le 3$.

Solution: $[2, 3]$.

:::

### Absolute Value Inequalities

$$
|ax + b| \le c \iff -c \le ax + b \le c
$$

$$
|ax + b| \ge c \iff ax + b \le -c \quad \text{or} \quad ax + b \ge c
$$

:::info[Example]

Solve $|2x - 3| \lt 5$.

$$
-5 \lt 2x - 3 \lt 5
$$

$$
-2 \lt 2x \lt 8
$$

$$
-1 \lt x \lt 4
$$

Solution: $(-1, 4)$.

:::

### Polynomial Inequalities

1. Move all terms to one side.
2. Factorise completely.
3. Find the zeros.
4. Use a sign diagram to determine where the expression is positive/negative.

---

## Simultaneous Equations

### Linear Systems

**Substitution method**: Solve one equation for one variable and substitute into the other.

**Elimination method**: Multiply equations by constants so that adding them eliminates one variable.

### Non-linear Systems

A line and a parabola can intersect at 0, 1, or 2 points.

:::info[Example]

Solve simultaneously: $y = x^2 - 4x + 3$ and $y = 2x - 3$.

Substitute: $2x - 3 = x^2 - 4x + 3$.

$$
x^2 - 6x + 6 = 0
$$

$$
x = \frac{6 \pm \sqrt{36 - 24}}{2} = \frac{6 \pm 2\sqrt{3}}{2} = 3 \pm \sqrt{3}
$$

When $x = 3 + \sqrt{3}$: $y = 2(3 + \sqrt{3}) - 3 = 3 + 2\sqrt{3}$.

When $x = 3 - \sqrt{3}$: $y = 2(3 - \sqrt{3}) - 3 = 3 - 2\sqrt{3}$.

:::

---

## Modulus Functions

### Definition

$$
|x| = \begin{cases} x & x \ge 0 \\ -x & x \lt 0 \end{cases}
$$

### Graph

The graph of $y = |x|$ is V-shaped, with the vertex at the origin.

### Solving Modulus Equations

Square both sides or use the definition casewise.

:::info[Example]

Solve $|x - 2| = 3x - 1$.

Since $|x - 2| \ge 0$, we need $3x - 1 \ge 0 \implies x \ge \dfrac{1}{3}$.

Case 1 ($x \ge 2$): $x - 2 = 3x - 1 \implies -2x = 1 \implies x = -\dfrac{1}{2}$. Rejected
($x \ge 2$).

Case 2 ($x \lt 2$):
$-(x - 2) = 3x - 1 \implies -x + 2 = 3x - 1 \implies 4x = 3 \implies x = \dfrac{3}{4}$.

Check: $|3/4 - 2| = 5/4$ and $3(3/4) - 1 = 5/4$. Valid.

Solution: $x = \dfrac{3}{4}$.

:::

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

Given $f(x) = \dfrac{x}{x + 2}$ and $g(x) = 2x - 1$:

**(a)** Find $(f \circ g)(x)$ and state its domain.

$$
(f \circ g)(x) = f(2x - 1) = \frac{2x - 1}{2x - 1 + 2} = \frac{2x - 1}{2x + 1}
$$

Domain: $2x + 1 \neq 0 \implies x \neq -\dfrac{1}{2}$.

**(b)** Find $f^{-1}(x)$.

$$
y = \frac{x}{x+2} \implies y(x+2) = x \implies xy + 2y = x \implies x(1-y) = 2y
$$

$$
f^{-1}(x) = \frac{2x}{1 - x}, \quad x \neq 1
$$

**(c)** Verify that $f^{-1} \circ f$ is the identity function.

$$
(f^{-1} \circ f)(x) = f^{-1}\!\left(\frac{x}{x+2}\right) = \frac{2 \cdot \frac{x}{x+2}}{1 - \frac{x}{x+2}} = \frac{\frac{2x}{x+2}}{\frac{2}{x+2}} = x
$$

### Question 2 (Paper 2 style)

The function $f$ is defined by $f(x) = 2x^2 - 12x + 13$ for $x \ge 3$.

**(a)** Express $f(x)$ in the form $a(x - h)^2 + k$.

$$
f(x) = 2(x^2 - 6x) + 13 = 2(x - 3)^2 - 18 + 13 = 2(x - 3)^2 - 5
$$

**(b)** Find the range of $f$.

Since $x \ge 3$ and $(x-3)^2 \ge 0$: $f(x) \ge -5$.

Range: $[-5, \infty)$.

**(c)** Find $f^{-1}(x)$ and state its domain.

$$
y = 2(x-3)^2 - 5 \implies y + 5 = 2(x-3)^2 \implies (x-3)^2 = \frac{y+5}{2}
$$

Since $x \ge 3$, $x - 3 \ge 0$:

$$
x = 3 + \sqrt{\frac{y+5}{2}}
$$

$$
f^{-1}(x) = 3 + \sqrt{\frac{x+5}{2}}
$$

Domain of $f^{-1}$ = range of $f$: $[-5, \infty)$.

### Question 3 (Paper 1 style)

Solve the inequality $x^2 - 2x - 8 \gt 0$.

$$
(x - 4)(x + 2) \gt 0
$$

The product is positive when both factors are positive or both are negative:

- $x \gt 4$ or $x \lt -2$

Solution: $x \in (-\infty, -2) \cup (4, \infty)$.

### Question 4 (Paper 2 style)

The function $f$ is defined as $f(x) = \dfrac{x^2 - 9}{x - 3}$ for $x \neq 3$.

**(a)** Simplify $f(x)$.

$$
f(x) = \frac{(x-3)(x+3)}{x-3} = x + 3 \quad \text{for } x \neq 3
$$

**(b)** Find the equations of any asymptotes of $f$.

There is a **hole** at $x = 3$ (removable discontinuity), not a vertical asymptote.

No horizontal asymptote (it behaves like $y = x + 3$ for large $x$).

**(c)** Sketch the graph of $f$.

The graph is the line $y = x + 3$ with a hole at $(3, 6)$.

### Question 5 (Paper 1 style)

The cubic $P(x) = x^3 + ax^2 + bx - 12$ has a factor of $(x + 3)$ and leaves a remainder of $-20$
when divided by $(x - 1)$. Find $a$ and $b$.

Since $(x + 3)$ is a factor: $P(-3) = 0$.

$$
-27 + 9a - 3b - 12 = 0 \implies 9a - 3b = 39 \implies 3a - b = 13 \quad \text{(1)}
$$

Since $P(1) = -20$:

$$
1 + a + b - 12 = -20 \implies a + b = -9 \quad \text{(2)}
$$

Adding (1) and (2): $4a = 4 \implies a = 1$.

From (2): $b = -10$.

---

## Summary

| Concept            | Key Point                                         |
| ------------------ | ------------------------------------------------- |
| Composite function | $(f \circ g)(x) = f(g(x))$; order matters         |
| Inverse function   | Reflect in $y = x$; swap domain/range             |
| Vertical shift     | $y = f(x) + k$ moves up by $k$                    |
| Horizontal shift   | $y = f(x - h)$ moves right by $h$                 |
| Factor theorem     | $(x-a)$ factor $\iff P(a) = 0$                    |
| Remainder theorem  | Remainder of $P(x) \div (x-a)$ is $P(a)$          |
| Even function      | $f(-x) = f(x)$, symmetric about $y$-axis          |
| Odd function       | $f(-x) = -f(x)$, rotational symmetry about origin |

:::tip[Exam Strategy]

For function questions, always check the domain. When finding inverses, state the domain of the
inverse explicitly. For transformation questions, identify each transformation step by step from the
inside out.

:::

---

## Reciprocal Functions

### Definition

The reciprocal function of $f$ is $\dfrac{1}{f(x)}$.

### Graphing Reciprocal Functions

Key features of the graph of $y = \dfrac{1}{f(x)}$:

- Where $f(x) = 1$, the reciprocal also equals $1$.
- Where $f(x) = -1$, the reciprocal also equals $-1$.
- Where $f(x) \gt 0$, the reciprocal is positive.
- Where $f(x) \lt 0$, the reciprocal is negative.
- Where $f(x) = 0$, the reciprocal has a vertical asymptote.
- Horizontal asymptotes of $f$ become horizontal asymptotes of $\dfrac{1}{f}$.
- Local maxima of $f$ become local minima of $\dfrac{1}{f}$ and vice versa.

### Reciprocal of $f(x) = ax + b$

$$
y = \frac{1}{ax + b}
$$

This is a rectangular hyperbola with vertical asymptote at $x = -\dfrac{b}{a}$ and horizontal
asymptote at $y = 0$.

### Reciprocal of Quadratic Functions

:::info[Example]

Sketch the graph of $y = \dfrac{1}{x^2 - 4}$.

Vertical asymptotes at $x = 2$ and $x = -2$ (zeros of denominator).

Horizontal asymptote at $y = 0$.

For $x \lt -2$: denominator positive, so $y \gt 0$.

For $-2 \lt x \lt 2$: denominator negative, so $y \lt 0$.

For $x \gt 2$: denominator positive, so $y \gt 0$.

Local minimum at $x = 0$: $y = -\dfrac{1}{4}$.

:::

---

## Rational Functions

### Definition

A rational function is a ratio of two polynomials:

$$
f(x) = \frac{P(x)}{Q(x)}
$$

### Features to Identify

1. **Domain**: values of $x$ where $Q(x) \neq 0$.
2. **Intercepts**: $y$-intercept (set $x = 0$), $x$-intercepts (set $P(x) = 0$).
3. **Asymptotes**: vertical (zeros of $Q$), horizontal (compare degrees), oblique.
4. **Behaviour near asymptotes**: test values on each side.

### Oblique Asymptotes

When $\deg P = \deg Q + 1$, divide $P$ by $Q$ using polynomial division. The quotient (without
remainder) gives the oblique asymptote.

:::info[Example]

Find the asymptotes of $\displaystyle f(x) = \frac{x^2 + 1}{x - 1}$.

Vertical asymptote: $x = 1$.

Since $\deg P = 2$ and $\deg Q = 1$, there is an oblique asymptote.

$$
\frac{x^2 + 1}{x - 1} = x + 1 + \frac{2}{x - 1}
$$

Oblique asymptote: $y = x + 1$.

:::

---

## Piecewise Functions

### Definition

A piecewise function is defined by different expressions over different intervals of its domain.

### Continuity of Piecewise Functions

Check that the function value equals the left-hand and right-hand limits at the boundary points.

:::info[Example]

Is the following function continuous at $x = 2$?

$$
f(x) = \begin{cases} x^2 & x \le 2 \\ 3x - 2 & x \gt 2 \end{cases}
$$

$f(2) = 4$.

$\lim_{x \to 2^-} f(x) = 4$.

$\lim_{x \to 2^+} f(x) = 3(2) - 2 = 4$.

Since the left-hand limit, right-hand limit, and function value all equal 4, the function is
continuous at $x = 2$.

:::

---

## Additional Exam-Style Questions

### Question 6 (Paper 2 style)

The function $f$ is defined as $f(x) = \dfrac{2x + 3}{x - 1}$ for $x \in \mathbb{R}$, $x \neq 1$.

**(a)** Find the inverse function $f^{-1}$.

$$
y = \frac{2x + 3}{x - 1} \implies y(x-1) = 2x + 3 \implies yx - y = 2x + 3
$$

$$
x(y - 2) = y + 3 \implies x = \frac{y + 3}{y - 2}
$$

$$
f^{-1}(x) = \frac{x + 3}{x - 2}, \quad x \neq 2
$$

**(b)** State the domain and range of $f^{-1}$.

Domain of $f^{-1}$: $x \neq 2$.

Range of $f^{-1}$: $y \neq 1$ (which equals the domain of $f$).

**(c)** Find the value of $x$ such that $f(x) = f^{-1}(x)$.

$$
\frac{2x+3}{x-1} = \frac{x+3}{x-2}
$$

$$
(2x+3)(x-2) = (x+3)(x-1)
$$

$$
2x^2 - x - 6 = x^2 + 2x - 3
$$

$$
x^2 - 3x - 3 = 0
$$

$$
x = \frac{3 \pm \sqrt{9+12}}{2} = \frac{3 \pm \sqrt{21}}{2}
$$

### Question 7 (Paper 2 style)

Given $f(x) = x^2 - 4x + 3$ and $g(x) = 2x - 1$:

**(a)** Find $(g \circ f)(x)$ and its range.

$$
(g \circ f)(x) = g(x^2 - 4x + 3) = 2(x^2 - 4x + 3) - 1 = 2x^2 - 8x + 5
$$

Completing the square: $2(x - 2)^2 - 3$.

Range: $[-3, \infty)$.

**(b)** Find the set of values of $x$ for which $(f \circ g)(x) \lt 0$.

$$
(f \circ g)(x) = (2x-1)^2 - 4(2x-1) + 3 = 4x^2 - 4x + 1 - 8x + 4 + 3 = 4x^2 - 12x + 8
$$

$$
4x^2 - 12x + 8 \lt 0 \implies x^2 - 3x + 2 \lt 0 \implies (x-1)(x-2) \lt 0
$$

Solution: $1 \lt x \lt 2$.

### Question 8 (Paper 1 style)

The function $h$ is defined by $h(x) = |2x - 5| + |x + 1|$ for all real $x$.

**Find the minimum value of $h(x)$.**

Critical points at $x = 2.5$ and $x = -1$.

Case 1 ($x \lt -1$): $h(x) = -(2x-5) + -(x+1) = -3x + 4$. Minimum at $x = -1$: $h(-1) = 7$.

Case 2 ($-1 \le x \le 2.5$): $h(x) = -(2x-5) + (x+1) = -x + 6$. Minimum at $x = 2.5$:
$h(2.5) = 3.5$.

Case 3 ($x \gt 2.5$): $h(x) = (2x-5) + (x+1) = 3x - 4$. Minimum at $x = 2.5$: $h(2.5) = 3.5$.

Minimum value is $3.5$ at $x = 2.5$.
