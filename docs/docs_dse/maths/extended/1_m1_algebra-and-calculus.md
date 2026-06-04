---
title: M1: Algebra and Calculus
description:
  'DSE Maths Extended Part M1 notes covering inequalities, absolute values, functions, sequences and
  series, limits, differentiation, and integration with LaTeX math.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Maths
  - DSE
categories:
  - Maths
slug: m1-algebra-and-calculus
---

## Inequalities

### Linear Inequalities

Solving linear inequalities follows the same principles as solving linear equations, with one
critical difference: multiplying or dividing both sides by a negative number **reverses** the
inequality sign.

$$3x - 7 < 2x + 5$$ $$x < 12$$

### Quadratic Inequalities

To solve $ax^2 + bx + c > 0$ (or $< 0$, $\geq 0$, $\leq 0$):

1. Find the roots of the equation $ax^2 + bx + c = 0$
2. Determine the sign of the quadratic in each region defined by the roots
3. Select the regions satisfying the inequality

**Example**: Solve $x^2 - 5x + 6 \leq 0$.

Factorising: $(x-2)(x-3) \leq 0$. The parabola opens upward (positive $x^2$ coefficient). The
expression is non-positive between the roots:

$$2 \leq x \leq 3$$

### Rational Inequalities

For inequalities involving rational expressions, bring all terms to one side and combine into a
single fraction. Find the critical values (zeros and undefined points), then test each region.

**Example**: Solve $\frac{x-1}{x+2} > 0$.

Critical values: $x = 1$ and $x = -2$.

Testing intervals:

- $x < -2$: Both numerator and denominator negative -- ratio is positive
- $-2 < x < 1$: Numerator negative, denominator positive -- ratio is negative
- $x > 1$: Both positive -- ratio is positive

Solution: $x < -2$ or $x > 1$, i.e., $x \in (-\infty, -2) \cup (1, \infty)$.

## Absolute Value

### Definition

$$|x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$$

### Properties

$$|ab| = |a| \cdot |b|$$ $$|a + b| \leq |a| + |b| \quad \text{(triangle inequality)}$$
$$|a - b| \geq ||a| - |b||$$

### Solving Absolute Value Equations

$$|x - 3| = 5 \implies x - 3 = 5 \text{ or } x - 3 = -5 \implies x = 8 \text{ or } x = -2$$

### Solving Absolute Value Inequalities

$$|x - a| < b \implies a - b < x < a + b \quad (b > 0)$$
$$|x - a| > b \implies x < a - b \text{ or } x > a + b \quad (b > 0)$$

### Absolute Value in the Coordinate Plane

$|x - a| + |y - b| = c$ defines a diamond (rotated square) centred at $(a, b)$.

$|x| + |y| = 4$ defines a diamond with vertices at $(\pm 4, 0)$ and $(0, \pm 4)$.

## Functions: Advanced Topics

### Domain and Range

The **domain** of a function is the set of all valid inputs; the **range** is the set of all
outputs.

**Example**: Find the domain and range of $f(x) = \sqrt{4 - x^2}$.

Domain: $4 - x^2 \geq 0 \implies x^2 \leq 4 \implies -2 \leq x \leq 2$.

Range: Since $x^2 \geq 0$, we have $\sqrt{4 - x^2} \leq \sqrt{4} = 2$ and $0 \leq f(x)$.

Therefore, range is $0 \leq f(x) \leq 2$, i.e., $[0, 2]$.

### Composite Functions

Given $f(x)$ and $g(x)$, the composite function $fg(x) = f(g(x))$.

**Example**: If $f(x) = 2x + 1$ and $g(x) = x^2$, then:

$$fg(x) = f(g(x)) = f(x^2) = 2x^2 + 1$$ $$gf(x) = g(f(x)) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$$

Note that $fg(x) \neq gf(x)$ in general.

### Inverse Functions

A function $f$ has an inverse $f^{-1}$ if and only if $f$ is one-to-one (bijective).

$$f(f^{-1}(x)) = x \quad \text{and} \quad f^{-1}(f(x)) = x$$

**Example**: If $f(x) = \frac{2x + 3}{x - 1}$, find $f^{-1}(x)$.

Let $y = \frac{2x + 3}{x - 1}$. Solving for $x$:

$$y(x - 1) = 2x + 3$$ $$xy - y = 2x + 3$$ $$x(y - 2) = y + 3$$ $$x = \frac{y + 3}{y - 2}$$

Therefore, $f^{-1}(x) = \frac{x + 3}{x - 2}$, domain $x \neq 2$.

### Quadratic Functions and Completing the Square

Writing $f(x) = ax^2 + bx + c$ in vertex form by completing the square:

$$f(x) = a\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a}$$

The vertex is at $\left(-\frac{b}{2a}, \frac{4ac - b^2}{4a}\right)$.

## Sequences and Series: Advanced

### Arithmetic Sequences

$$a_n = a_1 + (n-1)d$$ $$S_n = \frac{n}{2}(a_1 + a_n) = \frac{n}{2}(2a_1 + (n-1)d)$$

### Geometric Sequences

$$a_n = a_1 r^{n-1}$$ $$S_n = \frac{a_1(1 - r^n)}{1 - r} \quad (r \neq 1)$$

### Sum to Infinity

For a convergent geometric series (i.e., $|r| < 1$):

$$S_\infty = \frac{a_1}{1 - r}$$

### Sigma Notation

$$\sum_{r=1}^{n} ar^{r-1} = \frac{a(1 - r^n)}{1 - r}$$

**Example**: Evaluate $\sum_{r=1}^{\infty} 3\left(\frac{1}{4}\right)^{r-1}$.

$$S_\infty = \frac{3}{1 - \frac{1}{4}} = \frac{3}{\frac{3}{4}} = 4$$

### Method of Differences

For certain sequences, the sum can be found using the method of differences.

**Example**: Find $\sum_{r=1}^{n} r(r+1)$.

Note that $r(r+1) = r^2 + r$, so:

$$\sum_{r=1}^{n} r(r+1) = \sum_{r=1}^{n} r^2 + \sum_{r=1}^{n} r = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2}$$

$$= \frac{n(n+1)}{6}(2n + 1 + 3) = \frac{n(n+1)(n+2)}{3}$$

Alternatively, using the method of differences:

$$\frac{1}{r(r+1)} = \frac{1}{r} - \frac{1}{r+1}$$

$$\sum_{r=1}^{n} \frac{1}{r(r+1)} = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{n+1} = \frac{n}{n+1}$$

## Limits

### Intuitive Notion

$$\lim_{x \to a} f(x) = L$$

means that $f(x)$ gets arbitrarily close to $L$ as $x$ gets arbitrarily close to $a$.

### Limit Laws

$$\lim_{x \to a} [f(x) \pm g(x)] = \lim_{x \to a} f(x) \pm \lim_{x \to a} g(x)$$
$$\lim_{x \to a} [f(x) \cdot g(x)] = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x)$$
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)} \quad \text{(provided } \lim g(x) \neq 0\text{)}$$

### Key Limits

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$ $$\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$
$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$$

### Limits at Infinity

$$\lim_{x \to \infty} \frac{1}{x^k} = 0 \quad (k > 0)$$

For rational functions, divide numerator and denominator by the highest power of $x$:

$$\lim_{x \to \infty} \frac{3x^2 + 2x - 1}{5x^2 - x + 3} = \lim_{x \to \infty} \frac{3 + \frac{2}{x} - \frac{1}{x^2}}{5 - \frac{1}{x} + \frac{3}{x^2}} = \frac{3}{5}$$

## Differentiation: Advanced

### Rules of Differentiation

- **Power rule**: $\frac{d}{dx}(x^n) = nx^{n-1}$
- **Chain rule**: $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$
- **Product rule**: $\frac{d}{dx}[f(x) \cdot g(x)] = f'(x)g(x) + f(x)g'(x)$
- **Quotient rule**:
  $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$

### Implicit Differentiation

When $y$ is defined implicitly as a function of $x$, differentiate both sides with respect to $x$
and solve for $\frac{dy}{dx}$.

**Example**: Find $\frac{dy}{dx}$ given $x^2 + y^2 = 25$.

$$2x + 2y\frac{dy}{dx} = 0$$ $$\frac{dy}{dx} = -\frac{x}{y}$$

### Connected Rates of Change (Related Rates)

**Example**: A spherical balloon is being inflated. Find the rate of change of the radius when the
radius is 5 cm, given that air is being pumped in at $100\pi$ cm$^3$/s.

Volume: $V = \frac{4}{3}\pi r^3$.

$$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$$ $$100\pi = 4\pi(25)\frac{dr}{dt}$$
$$\frac{dr}{dt} = \frac{100\pi}{100\pi} = 1 \text{ cm/s}$$

### Second Derivative

The second derivative $\frac{d^2y}{dx^2}$ represents the rate of change of the gradient. It is used
to determine concavity:

- $\frac{d^2y}{dx^2} > 0$: Concave upward (minimum)
- $\frac{d^2y}{dx^2} < 0$: Concave downward (maximum)

### Stationary Points

To find and classify stationary points:

1. Find $\frac{dy}{dx}$ and set it to zero
2. Solve for $x$ to find the $x$-coordinates of stationary points
3. Find $\frac{d^2y}{dx^2}$ and substitute the $x$-values
4. If $\frac{d^2y}{dx^2} > 0$: minimum; if $< 0$: maximum; if $= 0$: test fails (use first
   derivative test or higher derivatives)

## Integration: Advanced

### Techniques

- **Integration by substitution**: For integrals of the form $\int f(g(x)) \cdot g'(x) \, dx$, let
  $u = g(x)$

**Example**: $\int 2x\sqrt{x^2 + 1} \, dx$. Let $u = x^2 + 1$, $du = 2x \, dx$.

$$\int \sqrt{u} \, du = \frac{2}{3}u^{3/2} + C = \frac{2}{3}(x^2 + 1)^{3/2} + C$$

- **Integration by parts**: $\int u \, dv = uv - \int v \, du$

**Example**: $\int x e^x \, dx$. Let $u = x$, $dv = e^x \, dx$. Then $du = dx$, $v = e^x$.

$$\int x e^x \, dx = x e^x - \int e^x \, dx = x e^x - e^x + C = (x - 1)e^x + C$$

### Definite Integration

$$\int_a^b f(x) \, dx = \left[F(x)\right]_a^b = F(b) - F(a)$$

### Area Under Curves

- Area between a curve and the x-axis: $A = \int_a^b |f(x)| \, dx$
- Area between two curves: $A = \int_a^b |f(x) - g(x)| \, dx$

### Volumes of Revolution

- Rotation about the x-axis: $V = \pi \int_a^b [f(x)]^2 \, dx$
- Rotation about the y-axis: $V = \pi \int_c^d [f(y)]^2 \, dy$

**Example**: Find the volume when the region bounded by $y = \sqrt{x}$, $x = 4$, and $y = 0$ is
rotated about the x-axis.

$$V = \pi \int_0^4 (\sqrt{x})^2 \, dx = \pi \int_0^4 x \, dx = \pi \left[\frac{x^2}{2}\right]_0^4 = 8\pi$$

### Differential Equations

A first-order separable differential equation has the form:

$$\frac{dy}{dx} = f(x)g(y)$$

Separating variables: $\frac{dy}{g(y)} = f(x) \, dx$.

Integrate both sides and solve for $y$.

**Example**: Solve $\frac{dy}{dx} = \frac{x}{y}$, given $y = 2$ when $x = 1$.

$$y \, dy = x \, dx$$ $$\int y \, dy = \int x \, dx$$ $$\frac{y^2}{2} = \frac{x^2}{2} + C$$

Using $y = 2$ when $x = 1$: $2 = \frac{1}{2} + C$, so $C = \frac{3}{2}$.

$$y^2 = x^2 + 3$$

## Common Pitfalls

- Forgetting to reverse the inequality sign when multiplying or dividing by a negative number
- Incorrectly finding the domain of composite functions
- Confusing $fg(x)$ notation
- Forgetting to add $+C$ for indefinite integrals
- Not checking whether $\frac{d^2y}{dx^2} = 0$ requires a first derivative test
- Errors in substitution for integration by substitution (forgetting to change the limits for
  definite integrals or to convert $dx$ to $du$)
