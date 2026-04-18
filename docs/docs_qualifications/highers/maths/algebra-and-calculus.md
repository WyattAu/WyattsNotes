---
title: Algebra and Calculus
date: 2026-04-14
tags:
  - Mathematics
  - Highers
categories:
  - Mathematics
slug: algebra-and-calculus
---

# Algebra and Calculus

## Higher Algebra

### Functions and Notation

A function maps each element of a set (the domain) to exactly one element of another set (the
codomain). If $f(x) = 3x + 2$, then $f$ takes an input $x$ and returns $3x + 2$. The notation
$f \colon A \to B$ means $f$ maps from set $A$ to set $B$.

**Domain and Range:**

The **domain** of $f$ is the set of all valid inputs. The **range** is the set of all outputs.

The **domain** of $f(x) = \dfrac{1}{x - 3}$ is $x \in \mathbb{R}$, $x \neq 3$.

The **range** of $f(x) = x^2$ is $f(x) \geq 0$ (assuming the domain is all real numbers).

**Composite Functions:**

If $f(x) = 2x + 1$ and $g(x) = x^2$, then:

$$f(g(x)) = f(x^2) = 2x^2 + 1$$

$$g(f(x)) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$$

Note that in general $f(g(x)) \neq g(f(x))$. Composition is not commutative.

**Domain of a composite function:** $\operatorname{dom}(f \circ g)$ is the set of all $x$ in
$\operatorname{dom}(g)$ such that $g(x) \in \operatorname{dom}(f)$.

**Inverse Functions:**

The inverse function $f^{-1}$ reverses the effect of $f$. To find $f^{-1}$:

1. Write $y = f(x)$
2. Rearrange to make $x$ the subject
3. Replace $x$ with $f^{-1}(y)$

**Example:** Find $f^{-1}$ where $f(x) = \dfrac{2x + 3}{x - 1}$.

Let $y = \dfrac{2x + 3}{x - 1}$.

$$y(x - 1) = 2x + 3$$

$$yx - y = 2x + 3$$

$$yx - 2x = y + 3$$

$$x(y - 2) = y + 3$$

$$x = \frac{y + 3}{y - 2}$$

Therefore $f^{-1}(x) = \dfrac{x + 3}{x - 2}$.

**Verification:**
$f(f^{-1}(x)) = \dfrac{2 \cdot \frac{x+3}{x-2} + 3}{\frac{x+3}{x-2} - 1} = \dfrac{\frac{2x+6+3x-6}{x-2}}{\frac{x+3-x+2}{x-2}} = \dfrac{5x}{5} = x$.
Confirmed.

:::info

The domain of $f^{-1}$ equals the range of $f$, and vice versa. A function has an inverse if and
only if it is a **bijection** (both one-to-one and onto). For functions $\mathbb{R} \to \mathbb{R}$,
this means the function must be strictly monotone.

:::

### Quadratic Functions

A quadratic function has the general form $f(x) = ax^2 + bx + c$ where $a \neq 0$.

**Completed Square Form:**

$$f(x) = a(x - p)^2 + q$$

where the vertex is at $(p, q)$. The axis of symmetry is the vertical line $x = p$.

**Derivation.** Starting from $ax^2 + bx + c$:

$$
ax^2 + bx + c = a\!\left(x^2 + \frac{b}{a}x\right) + c = a\!\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a} + c
$$

So $p = -\frac{b}{2a}$ and $q = c - \frac{b^2}{4a}$.

**Example:** Express $f(x) = 2x^2 - 12x + 7$ in completed square form.

$$f(x) = 2(x^2 - 6x) + 7$$

$$f(x) = 2\left((x - 3)^2 - 9\right) + 7$$

$$f(x) = 2(x - 3)^2 - 18 + 7$$

$$f(x) = 2(x - 3)^2 - 11$$

The vertex is at $(3, -11)$ and since $a = 2 > 0$, the parabola opens upward with a minimum value of
$-11$.

**The Discriminant:**

For $ax^2 + bx + c = 0$, the discriminant is $\Delta = b^2 - 4ac$.

| Condition    | Number of Roots         |
| ------------ | ----------------------- |
| $\Delta > 0$ | Two distinct real roots |
| $\Delta = 0$ | One repeated real root  |
| $\Delta < 0$ | No real roots           |

**Proof.** The quadratic formula gives $x = \frac{-b \pm \sqrt{\Delta}}{2a}$. If $\Delta > 0$, the
square root is real and positive, yielding two distinct values. If $\Delta = 0$, both values are
$-\frac{b}{2a}$. If $\Delta < 0$, the square root is not real.

**Example:** Determine the nature of the roots of $3x^2 - 5x + 2 = 0$.

$$\Delta = (-5)^2 - 4(3)(2) = 25 - 24 = 1$$

Since $\Delta > 0$, there are two distinct real roots.

**Example:** Find the value of $k$ for which $x^2 + kx + 9 = 0$ has equal roots.

$$\Delta = k^2 - 36 = 0 \implies k = \pm 6$$

### Logarithms and Exponentials

**Laws of Logarithms:**

$$\log_a(xy) = \log_a x + \log_a y$$

$$\log_a\left(\frac{x}{y}\right) = \log_a x - \log_a y$$

$$\log_a(x^n) = n \log_a x$$

$$\log_a a = 1, \quad \log_a 1 = 0$$

**Change of Base:**

$$
\log_a b = \frac{\log_c b}{\log_c a}
$$

**Proof of change of base.** Let $y = \log_a b$, so $a^y = b$. Taking $\log_c$ of both sides:
$y \log_c a = \log_c b$, hence $y = \frac{\log_c b}{\log_c a}$.

**Example:** Solve $3^{2x - 1} = 7$.

$$2x - 1 = \log_3 7 = \frac{\ln 7}{\ln 3}$$

$$2x = 1 + \frac{\ln 7}{\ln 3}$$

$$
x = \frac{1}{2}\left(1 + \frac{\ln 7}{\ln 3}\right) \approx 1.389
$$

**Example:** Solve $\log_2(x + 3) + \log_2(x - 1) = 4$.

$$\log_2((x + 3)(x - 1)) = 4$$

$$(x + 3)(x - 1) = 16$$

$$x^2 + 2x - 3 = 16$$

$$x^2 + 2x - 19 = 0$$

$$x = \frac{-2 \pm \sqrt{4 + 76}}{2} = \frac{-2 \pm \sqrt{80}}{2} = -1 \pm 2\sqrt{5}$$

Since $x + 3 > 0$ and $x - 1 > 0$, we need $x > 1$. So $x = -1 + 2\sqrt{5} \approx 3.472$.

**Exponential Growth and Decay:**

$$N(t) = N_0 e^{kt}$$

where $N_0$ is the initial quantity and $k$ is the growth ($k > 0$) or decay ($k < 0$) constant.

**Half-life:** For decay with half-life $t_{1/2}$:

$$
t_{1/2} = \frac{\ln 2}{|k|}
$$

**Proof of the half-life formula.** Set $N(t_{1/2}) = \frac{N_0}{2}$:

$$
\frac{N_0}{2} = N_0 e^{kt_{1/2}} \implies \frac{1}{2} = e^{kt_{1/2}} \implies \ln\!\left(\frac{1}{2}\right) = kt_{1/2}
$$

$$
-\ln 2 = kt_{1/2} \implies t_{1/2} = \frac{-\ln 2}{k} = \frac{\ln 2}{|k|}
$$

$\blacksquare$

**Example:** A radioactive substance has a half-life of 8 days. If a sample initially contains 200
g, how much remains after 25 days?

$$
k = \frac{\ln 2}{8} \approx 0.0866
$$

$$
N(25) = 200e^{-0.0866 \times 25} = 200e^{-2.165} \approx 200 \times 0.1147 \approx 22.9 \mathrm{ g}
$$

### Polynomials

A polynomial of degree $n$ has the form:

$$
p(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0
$$

**Factor Theorem:**

$(x - a)$ is a factor of $p(x)$ if and only if $p(a) = 0$.

**Remainder Theorem:**

When $p(x)$ is divided by $(x - a)$, the remainder is $p(a)$.

**Proof.** By polynomial long division, $p(x) = (x-a)q(x) + r$ for some quotient $q(x)$ and constant
remainder $r$. Setting $x = a$: $p(a) = 0 + r$, so $r = p(a)$.

**Example:** Factorise $p(x) = x^3 - 3x^2 - 4x + 12$.

Try $p(1) = 1 - 3 - 4 + 12 = 6 \neq 0$.

Try $p(2) = 8 - 12 - 8 + 12 = 0$. So $(x - 2)$ is a factor.

$$
p(x) = (x - 2)(x^2 - x - 6) = (x - 2)(x - 3)(x + 2)
$$

**Example:** Find the remainder when $p(x) = 2x^3 + x^2 - 5x + 3$ is divided by $(x + 1)$.

By the Remainder Theorem, the remainder is $p(-1)$:

$$
p(-1) = 2(-1)^3 + (-1)^2 - 5(-1) + 3 = -2 + 1 + 5 + 3 = 7
$$

**Example:** Given $p(x) = x^3 + 2x^2 - 5x - 6$, show that $(x + 1)$ is a factor and hence fully
factorise $p(x)$.

$p(-1) = -1 + 2 + 5 - 6 = 0$. So $(x + 1)$ is a factor.

By polynomial long division:

$$
p(x) = (x + 1)(x^2 + x - 6) = (x + 1)(x + 3)(x - 2)
$$

### Simultaneous Equations

**Linear-Quadratic Systems:**

Substitute the linear equation into the quadratic. The resulting equation is always a quadratic,
giving at most two solutions.

**Example:** Solve the system $y = x^2 - 4x + 3$ and $2x + y = 6$.

Substitute: $2x + x^2 - 4x + 3 = 6$

$$x^2 - 2x - 3 = 0$$

$$(x - 3)(x + 1) = 0$$

$$x = 3 \mathrm{ or } x = -1$$

When $x = 3$: $y = 9 - 12 + 3 = 0$. When $x = -1$: $y = 1 + 4 + 3 = 8$.

Solutions: $(3, 0)$ and $(-1, 8)$.

### Transformations of Graphs (Higher)

Given $y = f(x)$:

| Transformation | Effect                                     |
| -------------- | ------------------------------------------ |
| $y = f(x) + c$ | Vertical translation by $c$ units up       |
| $y = f(x - c)$ | Horizontal translation by $c$ units right  |
| $y = af(x)$    | Vertical stretch by factor $a$             |
| $y = f(bx)$    | Horizontal stretch by factor $\frac{1}{b}$ |
| $y = -f(x)$    | Reflection in the $x$-axis                 |
| $y = f(-x)$    | Reflection in the $y$-axis                 |

---

## Higher Calculus

### Differentiation

The **derivative** of $f(x)$ measures the instantaneous rate of change of $f$ with respect to $x$.
Geometrically, it gives the gradient of the tangent to the curve $y = f(x)$.

$$
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

**Standard Derivatives:**

| $f(x)$   | $f'(x)$        |
| -------- | -------------- |
| $x^n$    | $nx^{n-1}$     |
| $e^{kx}$ | $ke^{kx}$      |
| $\ln x$  | $\dfrac{1}{x}$ |
| $\sin x$ | $\cos x$       |
| $\cos x$ | $-\sin x$      |

**Differentiation Rules:**

Sum/Difference: $(f \pm g)' = f' \pm g'$

Product Rule: $(fg)' = f'g + fg'$

Quotient Rule: $\left(\dfrac{f}{g}\right)' = \dfrac{f'g - fg'}{g^2}$

Chain Rule: If $y = f(g(x))$, then $\dfrac{dy}{dx} = f'(g(x)) \cdot g'(x)$

**Proof of the product rule.** Define $u(x) = f(x)g(x)$. Then:

$$
u'(x) = \lim_{h \to 0} \frac{f(x+h)g(x+h) - f(x)g(x)}{h}
$$

Add and subtract $f(x)g(x+h)$ in the numerator:

$$
= \lim_{h \to 0} \frac{f(x+h)g(x+h) - f(x)g(x+h) + f(x)g(x+h) - f(x)g(x)}{h}
$$

$$
= \lim_{h \to 0} \left[g(x+h) \cdot \frac{f(x+h) - f(x)}{h} + f(x) \cdot \frac{g(x+h) - g(x)}{h}\right]
$$

$$
= g(x)f'(x) + f(x)g'(x)
$$

**Example:** Differentiate $f(x) = (3x^2 + 1)\sin(2x)$ using the product rule.

Let $u = 3x^2 + 1$, $v = \sin(2x)$.

$u' = 6x$, $v' = 2\cos(2x)$.

$$
f'(x) = 6x \sin(2x) + (3x^2 + 1) \cdot 2\cos(2x)
$$

$$
f'(x) = 6x \sin(2x) + 2(3x^2 + 1)\cos(2x)
$$

**Example:** Differentiate $f(x) = \dfrac{e^{2x}}{x + 1}$.

Let $u = e^{2x}$, $v = x + 1$.

$u' = 2e^{2x}$, $v' = 1$.

$$
f'(x) = \frac{2e^{2x}(x + 1) - e^{2x}}{(x + 1)^2} = \frac{e^{2x}(2x + 2 - 1)}{(x + 1)^2} = \frac{e^{2x}(2x + 1)}{(x + 1)^2}
$$

**Example:** Differentiate $f(x) = \dfrac{x^2 + 1}{e^{3x}}$.

Let $u = x^2 + 1$, $v = e^{3x}$.

$u' = 2x$, $v' = 3e^{3x}$.

$$
f'(x) = \frac{2x \cdot e^{3x} - (x^2 + 1) \cdot 3e^{3x}}{e^{6x}} = \frac{e^{3x}(2x - 3x^2 - 3)}{e^{6x}} = \frac{2x - 3x^2 - 3}{e^{3x}}
$$

Setting $f'(x) = 0$: $2x - 3x^2 - 3 = 0$, i.e., $3x^2 - 2x + 3 = 0$. Since
$\Delta = 4 - 36 = -32 \lt 0$, there are no real stationary points.

### Applications of Differentiation

**Stationary Points:**

At a stationary point, $f'(x) = 0$.

- $f'(x)$ changes from positive to negative: **local maximum**
- $f'(x)$ changes from negative to positive: **local minimum**
- $f'(x)$ does not change sign: **point of inflection**

**Second Derivative Test:**

If $f'(a) = 0$:

- $f''(a) > 0$: local minimum at $x = a$
- $f''(a) < 0$: local maximum at $x = a$
- $f''(a) = 0$: test is inconclusive -- use the first derivative test instead

**Example:** Find the stationary points of $f(x) = x^3 - 6x^2 + 9x + 1$ and determine their nature.

$$
f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)
$$

Stationary points at $x = 1$ and $x = 3$.

$$
f''(x) = 6x - 12
$$

At $x = 1$: $f''(1) = -6 < 0$, so local maximum. $f(1) = 1 - 6 + 9 + 1 = 5$.

At $x = 3$: $f''(3) = 6 > 0$, so local minimum. $f(3) = 27 - 54 + 27 + 1 = 1$.

Local maximum at $(1, 5)$, local minimum at $(3, 1)$.

### Equation of a Tangent and Normal

The tangent to $y = f(x)$ at $(a, f(a))$ has equation:

$$
y - f(a) = f'(a)(x - a)
$$

The normal is perpendicular to the tangent and has gradient $-\dfrac{1}{f'(a)}$ (provided
$f'(a) \ne 0$).

**Example:** Find the equation of the tangent to $y = x^3 - 3x + 1$ at $x = 2$.

$f(2) = 8 - 6 + 1 = 3$.

$f'(x) = 3x^2 - 3$, so $f'(2) = 12 - 3 = 9$.

$$
y - 3 = 9(x - 2) \implies y = 9x - 15
$$

### Optimisation

Optimisation problems require you to express the quantity to be optimised as a function of a single
variable, then find the stationary points.

**Example:** A rectangular box with a square base has a volume of $128 \mathrm{ cm}^3$. The material
for the base costs 5 pence per $\mathrm{cm}^2$ and the material for the sides costs 3 pence per
$\mathrm{cm}^2$. Find the dimensions that minimise the cost.

Let the base have side length $x$ cm and height $h$ cm.

Volume: $x^2 h = 128$, so $h = \dfrac{128}{x^2}$.

Cost: $C = 5x^2 + 4 \times 3xh = 5x^2 + 12x \cdot \dfrac{128}{x^2} = 5x^2 + \dfrac{1536}{x}$.

$$
\frac{dC}{dx} = 10x - \frac{1536}{x^2}
$$

Setting $\dfrac{dC}{dx} = 0$:

$$
10x = \frac{1536}{x^2}
$$

$$
10x^3 = 1536
$$

$$
x^3 = 153.6
$$

$$
x = \sqrt[3]{153.6} \approx 5.35 \mathrm{ cm}
$$

$$
h = \frac{128}{5.35^2} \approx 4.47 \mathrm{ cm}
$$

**Verification:** $\frac{d^2C}{dx^2} = 10 + \frac{3072}{x^3} > 0$ for all $x > 0$, confirming a
minimum.

**Example:** A closed cylindrical can must hold $500 \mathrm{ cm}^3$ of liquid. Find the dimensions
that minimise the surface area.

Let the radius be $r$ and the height be $h$.

Volume: $\pi r^2 h = 500$, so $h = \dfrac{500}{\pi r^2}$.

Surface area: $S = 2\pi r^2 + 2\pi rh = 2\pi r^2 + \frac{1000}{r}$.

$$
\frac{dS}{dr} = 4\pi r - \frac{1000}{r^2} = 0
$$

$$
4\pi r^3 = 1000 \implies r^3 = \frac{250}{\pi} \implies r = \sqrt[3]{\frac{250}{\pi}} \approx 4.30 \mathrm{ cm}
$$

$$
h = \frac{500}{\pi \times 4.30^2} \approx 8.60 \mathrm{ cm}
$$

Note that $h = 2r$, so the optimal can has height equal to diameter.
$\frac{d^2S}{dr^2} = 4\pi + \frac{2000}{r^3} > 0$, confirming a minimum.

### Integration

Integration is the reverse of differentiation.

$$
\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)
$$

$$
\int e^{kx} \, dx = \frac{e^{kx}}{k} + C
$$

**Definite Integration:**

$$
\int_a^b f(x) \, dx = \left[F(x)\right]_a^b = F(b) - F(a)
$$

**The Fundamental Theorem of Calculus.** If $F'(x) = f(x)$ on $[a, b]$, then
$\int_a^b f(x)\,dx = F(b) - F(a)$. This theorem connects the two branches of calculus:
differentiation and integration are inverse operations.

**Area Under a Curve:**

The area between $y = f(x)$, the $x$-axis, $x = a$, and $x = b$ is:

$$
A = \int_a^b |f(x)| \, dx
$$

:::warning
If the curve crosses the $x$-axis between $a$ and $b$, you must split the integral at
each crossing point and take the absolute value. The integral itself gives the signed area, which
can cancel out.
:::

**Example:** Find the area enclosed by $y = x^2 - 4x + 3$ and the $x$-axis.

Find where the curve crosses the $x$-axis: $x^2 - 4x + 3 = (x-1)(x-3) = 0$, so $x = 1$ and $x = 3$.

Since the parabola opens upward with roots at 1 and 3, the curve is below the $x$-axis between these
points.

$$
A = \int_1^3 |x^2 - 4x + 3| \, dx = \int_1^3 (4x - x^2 - 3) \, dx
$$

$$
= \left[2x^2 - \frac{x^3}{3} - 3x\right]_1^3
$$

$$
= \left(18 - 9 - 9\right) - \left(2 - \frac{1}{3} - 3\right)
$$

$$
= 0 - \left(-\frac{4}{3}\right) = \frac{4}{3}
$$

### Area Between Curves

If $f(x) \ge g(x)$ on $[a, b]$, the area between the curves is:

$$
A = \int_a^b [f(x) - g(x)] \, dx
$$

**Example:** Find the area between $y = x^2$ and $y = 2x$.

Find intersections: $x^2 = 2x$, so $x^2 - 2x = 0$, giving $x = 0$ and $x = 2$.

Between $x = 0$ and $x = 2$, $2x > x^2$.

$$
A = \int_0^2 (2x - x^2) \, dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}
$$

**Example:** Find the area enclosed by the curves $y = x^3$ and $y = x$.

Find intersections: $x^3 = x$, so $x^3 - x = x(x-1)(x+1) = 0$, giving $x = -1, 0, 1$.

Between $x = -1$ and $x = 0$: $x \ge x^3$ (since $x \in [-1, 0]$ means $x \ge x^3$). Between $x = 0$
and $x = 1$: $x^3 \ge x$.

By symmetry of the two regions:

$$
A = 2\int_0^1 (x^3 - x)\, dx = 2\left[\frac{x^4}{4} - \frac{x^2}{2}\right]_0^1 = 2\!\left(\frac{1}{4} - \frac{1}{2}\right) = 2\!\left(-\frac{1}{4}\right) = \frac{1}{2}
$$

### Integration by Substitution (Advanced Higher)

$$
\int f(g(x))g'(x) \, dx = \int f(u) \, du \quad \mathrm{where } u = g(x)
$$

**Example:** Evaluate $\int 2x\sqrt{x^2 + 1} \, dx$.

Let $u = x^2 + 1$, so $du = 2x\,dx$.

$$
\int \sqrt{u}\, du = \frac{2}{3}u^{3/2} + C = \frac{2}{3}(x^2 + 1)^{3/2} + C
$$

**Example:** Evaluate $\int_0^2 \frac{x}{x^2 + 1}\,dx$.

Let $u = x^2 + 1$, $du = 2x\,dx$. When $x = 0$, $u = 1$. When $x = 2$, $u = 5$.

$$
\int_0^2 \frac{x}{x^2 + 1}\,dx = \frac{1}{2}\int_1^5 \frac{1}{u}\,du = \frac{1}{2}\left[\ln u\right]_1^5 = \frac{1}{2}\ln 5
$$

### Integration by Parts (Advanced Higher)

$$
\int u\, dv = uv - \int v\, du
$$

Use **LIATE** (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) to choose $u$.

**Example:** Evaluate $\int x e^x \, dx$.

Let $u = x$, $dv = e^x\,dx$. Then $du = dx$, $v = e^x$.

$$
\int x e^x \, dx = xe^x - \int e^x \, dx = xe^x - e^x + C = e^x(x - 1) + C
$$

### Differential Equations (Introduction)

A first-order differential equation relates a function to its first derivative.

**Separable equations.** If $\dfrac{dy}{dx} = f(x)g(y)$, separate the variables:

$$
\frac{1}{g(y)}\,dy = f(x)\,dx
$$

Integrate both sides.

**Example:** Solve $\dfrac{dy}{dx} = \dfrac{x}{y}$ given $y = 2$ when $x = 1$.

Separate: $y\,dy = x\,dx$.

Integrate: $\dfrac{y^2}{2} = \dfrac{x^2}{2} + C$.

Using $y = 2, x = 1$: $2 = \frac{1}{2} + C$, so $C = \frac{3}{2}$.

$y^2 = x^2 + 3$, giving $y = \sqrt{x^2 + 3}$ (taking the positive root since $y = 2 > 0$).

---

## Common Pitfalls

1. **Forgetting the chain rule:** When differentiating $\sin(3x)$, the answer is $3\cos(3x)$, not
   $\cos(3x)$. Every composite function requires the chain rule.

2. **Missing the $+C$:** Always include the constant of integration for indefinite integrals.
   Omitting it is equivalent to asserting that you know the particular solution without initial
   conditions.

3. **Sign errors in the product rule:** It is $f'g + fg'$, not $f'g - fg'$. The minus sign belongs
   in the quotient rule.

4. **Incorrect domain for logarithms:** $\ln(x)$ is only defined for $x > 0$. Always check your
   solutions satisfy the domain restrictions. When solving $\log_2(x+3)$, you need $x > -3$.

5. **Confusing $f^{-1}(x)$ with $\dfrac{1}{f(x)}$:** The notation $f^{-1}$ denotes the inverse
   function, not the reciprocal. This is a notation collision that causes persistent confusion.

6. **Forgetting absolute values in integrals of $1/x$:** $\int \frac{dx}{x} = \ln|x| + C$, not
   $\ln x + C$.

7. **Not checking that optimisation solutions are minima:** Always verify with the second derivative
   test or a sign chart.

8. **Forgetting to change the limits** when using substitution for definite integrals.

9. **Sign error in the quotient rule:** It is $\dfrac{f'g - fg'}{g^2}$, not
   $\dfrac{fg' - f'g}{g^2}$. "Low d-High minus High d-Low."

---

## Practice Questions

1. Given $f(x) = 2x^2 - 8x + 5$, express $f(x)$ in completed square form and state the coordinates
   of the vertex.

2. Solve $4^{x+1} = 3^{2x-1}$, giving your answer in terms of natural logarithms.

3. Given $p(x) = x^3 + 2x^2 - 5x - 6$, show that $(x + 1)$ is a factor and hence fully factorise
   $p(x)$.

4. Differentiate $f(x) = \dfrac{x^2 + 1}{e^{3x}}$ and find the coordinates of any stationary points.

5. Find the area enclosed by the curves $y = x^3$ and $y = x$.

6. A closed cylindrical can must hold $500 \mathrm{ cm}^3$ of liquid. Find the dimensions that
   minimise the surface area.

7. Solve $\log_3(x) + \log_3(x - 2) = 1$.

8. Find the equation of the tangent to $y = x^3 - 3x + 1$ at the point where $x = 2$.

9. Given $f(x) = \frac{1}{3}x^3 - x^2 - 3x + 2$, find the intervals on which $f$ is increasing and
   decreasing.

10. Evaluate $\int_0^2 \frac{x}{x^2 + 1}\,dx$ using substitution.

11. The curve $y = x^2 + px + q$ passes through $(1, 5)$ and has a turning point at $x = 2$. Find
    $p$ and $q$.

12. Find the area between the curves $y = x^2 + 1$ and $y = 3x + 1$.

13. Solve the differential equation $\dfrac{dy}{dx} = 2xy$ given $y = 5$ when $x = 0$.

14. Find the equation of the normal to $y = x^2 - 4x + 3$ at the point where $x = 4$.

15. A population of bacteria grows according to $P(t) = P_0 e^{0.02t}$. If the initial population is
    1000, how long does it take for the population to reach 5000?

16. Find the range of values of $k$ for which $x^2 + 2kx + k^2 + 3 = 0$ has no real roots.
