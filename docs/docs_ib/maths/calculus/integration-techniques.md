---
title: Integration Techniques
description: IB Mathematics — integration techniques, definite integrals, area and
  volume, and applications.
slug: integration-techniques
---


## Antidifferentiation Review

Integration (antidifferentiation) is the reverse process of differentiation. If $F'(x) = f(x)$,
then:

$$
\int f(x)\,dx = F(x) + C
$$

where $C$ is the constant of integration.

### Basic Integration Rules

| Rule              | Formula                                                                   |
| ----------------- | ------------------------------------------------------------------------- |
| Power rule        | $\displaystyle\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$   |
| Reciprocal        | $\displaystyle\int \frac{1}{x}\,dx = \ln\|x\| + C$                        |
| Constant multiple | $\displaystyle\int kf(x)\,dx = k\int f(x)\,dx$                            |
| Sum/difference    | $\displaystyle\int [f(x) \pm g(x)]\,dx = \int f(x)\,dx \pm \int g(x)\,dx$ |

### Standard Integrals

| $f(x)$                    | $\int f(x)\,dx$          |
| ------------------------- | ------------------------ |
| $e^x$                     | $e^x + C$                |
| $a^x$                     | $\dfrac{a^x}{\ln a} + C$ |
| $\sin x$                  | $-\cos x + C$            |
| $\cos x$                  | $\sin x + C$             |
| $\sec^2 x$                | $\tan x + C$             |
| $\csc^2 x$                | $-\cot x + C$            |
| $\sec x \tan x$           | $\sec x + C$             |
| $\dfrac{1}{\sqrt{1-x^2}}$ | $\arcsin x + C$          |
| $\dfrac{1}{1+x^2}$        | $\arctan x + C$          |

---

## The Fundamental Theorem of Calculus

### First Fundamental Theorem

If $f$ is continuous on $[a, b]$ and $F'(x) = f(x)$, then:

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

### Second Fundamental Theorem

If $f$ is continuous on an interval containing $a$, then:

$$
\frac&lbrace;d&rbrace;&lbrace;dx&rbrace;\left[\int_a^x f(t)\,dt\right] = f(x)
$$

---

## Definite Integrals

### Properties

For continuous functions $f$ and $g$ on $[a, b]$:

1. $\displaystyle\int_a^b kf(x)\,dx = k\int_a^b f(x)\,dx$
2. $\displaystyle\int_a^b [f(x) \pm g(x)]\,dx = \int_a^b f(x)\,dx \pm \int_a^b g(x)\,dx$
3. $\displaystyle\int_a^a f(x)\,dx = 0$
4. $\displaystyle\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$
5. $\displaystyle\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$ for any $c$

### Even and Odd Functions

If $f$ is even ($f(-x) = f(x)$):

$$
\int_&lbrace;-a&rbrace;^&lbrace;a&rbrace; f(x)\,dx = 2\int_0^a f(x)\,dx
$$

If $f$ is odd ($f(-x) = -f(x)$):

$$
\int_&lbrace;-a&rbrace;^&lbrace;a&rbrace; f(x)\,dx = 0
$$

:::warning[Exam Tip]

Always check if a function is odd or even before integrating over a symmetric interval. This can
save significant computation time.

:::

:::info[Example]

Evaluate $\displaystyle\int_{-2}^{2} x^3\cos(x^2)\,dx$.

Since $x^3\cos(x^2)$ is odd (odd $\times$ even $=$ odd):

$$
\int_&lbrace;-2&rbrace;^&lbrace;2&rbrace; x^3\cos(x^2)\,dx = 0
$$

:::

---

## Integration by Substitution

### Method

When the integrand contains a function and its derivative (or a composite function), substitute
$u = g(x)$ where $g(x)$ is the "inner" function:

$$
\int f(g(x))g'(x)\,dx = \int f(u)\,du
$$

### Steps

1. Choose $u = g(x)$ (the inner function).
2. Compute $\dfrac{du}{dx} = g'(x)$, so $du = g'(x)\,dx$.
3. Rewrite the integral in terms of $u$.
4. Integrate with respect to $u$.
5. Substitute back $u = g(x)$.

:::info[Example]

Evaluate $\displaystyle\int 2x\sqrt{x^2+1}\,dx$.

Let $u = x^2 + 1$, so $\dfrac{du}{dx} = 2x$, giving $du = 2x\,dx$.

$$
\int \sqrt&lbrace;u&rbrace;\,du = \int u^&lbrace;1/2&rbrace;\,du = \frac&lbrace;2&rbrace;&lbrace;3&rbrace;u^&lbrace;3/2&rbrace; + C = \frac&lbrace;2&rbrace;&lbrace;3&rbrace;(x^2+1)^&lbrace;3/2&rbrace; + C
$$

:::

:::info[Example]

Evaluate $\displaystyle\int_0^1 xe^{x^2}\,dx$.

Let $u = x^2$, so $du = 2x\,dx$.

When $x = 0$: $u = 0$. When $x = 1$: $u = 1$.

$$
\int_0^1 xe^&lbrace;x^2&rbrace;\,dx = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\int_0^1 e^u\,du = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\big[e^u\big]_0^1 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(e - 1)
$$

:::

### Trigonometric Substitutions

Certain integrals can be simplified using trigonometric substitutions:

| Expression         | Substitution      | Identity                          |
| ------------------ | ----------------- | --------------------------------- |
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ | $1 - \sin^2\theta = \cos^2\theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ | $1 + \tan^2\theta = \sec^2\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ | $\sec^2\theta - 1 = \tan^2\theta$ |

:::info[Example]

Evaluate $\displaystyle\int \frac{1}{\sqrt{4-x^2}}\,dx$.

This is a standard integral: $\arcsin\!\left(\dfrac{x}{2}\right) + C$.

Alternatively, let $x = 2\sin\theta$, so $dx = 2\cos\theta\,d\theta$:

$$
\int \frac&lbrace;2\cos\theta&rbrace;&lbrace;2\cos\theta&rbrace;\,d\theta = \int 1\,d\theta = \theta + C = \arcsin\!\left(\frac&lbrace;x&rbrace;&lbrace;2&rbrace;\right) + C
$$

:::

---

## Integration by Parts

For the product of two functions:

$$
\int u\,dv = uv - \int v\,du
$$

### Choosing $u$ and $dv$

Use the **LIATE** rule (prioritise choosing $u$ from):

- **L**ogarithmic functions
- **I**nverse trig functions
- **A**lgebraic functions (polynomials)
- **T**rigonometric functions
- **E**xponential functions

:::info[Example]

Evaluate $\displaystyle\int x e^x\,dx$.

Let $u = x$ (algebraic) and $dv = e^x\,dx$.

Then $du = dx$ and $v = e^x$.

$$
\int x e^x\,dx = xe^x - \int e^x\,dx = xe^x - e^x + C = e^x(x - 1) + C
$$

:::

:::info[Example]

Evaluate $\displaystyle\int x\sin x\,dx$.

Let $u = x$ and $dv = \sin x\,dx$.

Then $du = dx$ and $v = -\cos x$.

$$
\int x\sin x\,dx = -x\cos x - \int (-\cos x)\,dx = -x\cos x + \sin x + C
$$

:::

### Repeated Integration by Parts

For integrals like $\displaystyle\int x^2 e^x\,dx$ or $\displaystyle\int x^2 \sin x\,dx$, apply
integration by parts repeatedly.

:::info[Example]

Evaluate $\displaystyle\int x^2 e^x\,dx$.

First application: $u = x^2$, $dv = e^x\,dx$:

$$
\int x^2 e^x\,dx = x^2 e^x - \int 2x e^x\,dx
$$

Second application on $\int 2x e^x\,dx$: $u = 2x$, $dv = e^x\,dx$:

$$
\int 2x e^x\,dx = 2xe^x - \int 2e^x\,dx = 2xe^x - 2e^x
$$

Combining:

$$
\int x^2 e^x\,dx = x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C
$$

:::

### Cyclic Integration by Parts

Integrals like $\displaystyle\int e^x \sin x\,dx$ require applying integration by parts twice and
solving algebraically.

:::info[Example]

Evaluate $\displaystyle\int e^x \sin x\,dx$.

Let $u = e^x$, $dv = \sin x\,dx$. Then $du = e^x\,dx$, $v = -\cos x$.

$$
I = -e^x\cos x + \int e^x\cos x\,dx
$$

Now let $u = e^x$, $dv = \cos x\,dx$. Then $du = e^x\,dx$, $v = \sin x$.

$$
\int e^x\cos x\,dx = e^x\sin x - \int e^x\sin x\,dx = e^x\sin x - I
$$

Substituting back:

$$
I = -e^x\cos x + e^x\sin x - I
$$

$$
2I = e^x(\sin x - \cos x)
$$

$$
I = \frac&lbrace;e^x(\sin x - \cos x)&rbrace;&lbrace;2&rbrace; + C
$$

:::

---

## Partial Fractions

When the integrand is a rational function with a denominator that can be factorised, decompose into
partial fractions.

### Types of Decomposition

| Denominator     | Partial Fractions                       |
| --------------- | --------------------------------------- |
| $(ax+b)(cx+d)$  | $\dfrac{A}{ax+b} + \dfrac{B}{cx+d}$     |
| $(ax+b)^2$      | $\dfrac{A}{ax+b} + \dfrac{B}{(ax+b)^2}$ |
| $(ax+b)(x^2+c)$ | $\dfrac{A}{ax+b} + \dfrac{Bx+C}{x^2+c}$ |

:::info[Example]

Evaluate $\displaystyle\int \frac{5x+1}{(x+1)(x-2)}\,dx$.

$$
\frac&lbrace;5x+1&rbrace;&lbrace;(x+1)(x-2)&rbrace; = \frac&lbrace;A&rbrace;&lbrace;x+1&rbrace; + \frac&lbrace;B&rbrace;&lbrace;x-2&rbrace;
$$

$$
5x + 1 = A(x-2) + B(x+1)
$$

$x = -1$: $-5 + 1 = A(-3) \implies A = \dfrac{4}{3}$.

$x = 2$: $10 + 1 = B(3) \implies B = \dfrac{11}{3}$.

$$
\int \frac&lbrace;5x+1&rbrace;&lbrace;(x+1)(x-2)&rbrace;\,dx = \frac&lbrace;4&rbrace;&lbrace;3&rbrace;\ln\|x+1\| + \frac&lbrace;11&rbrace;&lbrace;3&rbrace;\ln\|x-2\| + C
$$

:::

---

## Area Under Curves

### Area Between a Curve and the $x$-axis

The signed area between $y = f(x)$ and the $x$-axis from $x = a$ to $x = b$ is:

$$
\mathrm&lbrace;Area&rbrace; = \int_a^b f(x)\,dx
$$

If the curve crosses the $x$-axis, split the integral at the zeros and take the absolute value of
each part.

### Area Between Two Curves

The area between $y = f(x)$ and $y = g(x)$ from $x = a$ to $x = b$ (where $f(x) \ge g(x)$):

$$
\mathrm&lbrace;Area&rbrace; = \int_a^b [f(x) - g(x)]\,dx
$$

:::info[Example]

Find the area enclosed by $y = x^2$ and $y = 2x$.

Intersection points: $x^2 = 2x \implies x(x-2) = 0 \implies x = 0$ or $x = 2$.

For $0 \le x \le 2$: $2x \ge x^2$.

$$
\mathrm&lbrace;Area&rbrace; = \int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac&lbrace;x^3&rbrace;&lbrace;3&rbrace;\right]_0^2 = 4 - \frac&lbrace;8&rbrace;&lbrace;3&rbrace; = \frac&lbrace;4&rbrace;&lbrace;3&rbrace;
$$

:::

:::info[Example]

Find the area enclosed by $y = x^2 - 4$ and the $x$-axis.

Zeros: $x^2 - 4 = 0 \implies x = \pm 2$.

$$
\mathrm&lbrace;Area&rbrace; = \int_&lbrace;-2&rbrace;^&lbrace;2&rbrace; |x^2 - 4|\,dx = 2\int_0^2 (4 - x^2)\,dx = 2\left[4x - \frac&lbrace;x^3&rbrace;&lbrace;3&rbrace;\right]_0^2 = 2\left(8 - \frac&lbrace;8&rbrace;&lbrace;3&rbrace;\right) = \frac&lbrace;32&rbrace;&lbrace;3&rbrace;
$$

:::

---

## Volume of Revolution

### Rotation about the $x$-axis

The volume generated by rotating $y = f(x)$ from $x = a$ to $x = b$ about the $x$-axis:

$$
V = \pi \int_a^b [f(x)]^2\,dx
$$

### Rotation about the $y$-axis

The volume generated by rotating $x = g(y)$ from $y = c$ to $y = d$ about the $y$-axis:

$$
V = \pi \int_c^d [g(y)]^2\,dy
$$

Alternatively, using the shell method about the $y$-axis:

$$
V = 2\pi \int_a^b x |f(x)|\,dx
$$

:::info[Example]

Find the volume generated by rotating the region bounded by $y = \sqrt{x}$, $x = 4$, and the
$x$-axis about the $x$-axis.

$$
V = \pi\int_0^4 (\sqrt&lbrace;x&rbrace;)^2\,dx = \pi\int_0^4 x\,dx = \pi\left[\frac&lbrace;x^2&rbrace;&lbrace;2&rbrace;\right]_0^4 = 8\pi
$$

:::

:::info[Example]

Find the volume generated by rotating the region bounded by $y = x^2$, $y = 0$, and $x = 1$ about
the $y$-axis.

Using the disc method (in terms of $y$):

$x = \sqrt{y}$, from $y = 0$ to $y = 1$.

$$
V = \pi\int_0^1 (\sqrt&lbrace;y&rbrace;)^2\,dy = \pi\int_0^1 y\,dy = \pi\left[\frac&lbrace;y^2&rbrace;&lbrace;2&rbrace;\right]_0^1 = \frac&lbrace;\pi&rbrace;&lbrace;2&rbrace;
$$

:::

### Volume between two curves

When rotating the region between $y = f(x)$ and $y = g(x)$ about the $x$-axis:

$$
V = \pi\int_a^b \left([f(x)]^2 - [g(x)]^2\right)\,dx
$$

:::info[Example]

Find the volume generated by rotating the region between $y = x$ and $y = x^2$ about the $x$-axis.

Intersection: $x = x^2 \implies x = 0$ or $x = 1$.

$$
V = \pi\int_0^1 \left(x^2 - x^4\right)\,dx = \pi\left[\frac&lbrace;x^3&rbrace;&lbrace;3&rbrace; - \frac&lbrace;x^5&rbrace;&lbrace;5&rbrace;\right]_0^1 = \pi\left(\frac&lbrace;1&rbrace;&lbrace;3&rbrace; - \frac&lbrace;1&rbrace;&lbrace;5&rbrace;\right) = \frac&lbrace;2\pi&rbrace;&lbrace;15&rbrace;
$$

:::

---

## Kinematics Applications

### Displacement, Velocity, and Acceleration

- Velocity is the derivative of displacement: $v = \dfrac{ds}{dt}$
- Acceleration is the derivative of velocity: $a = \dfrac{dv}{dt} = \dfrac{d^2s}{dt^2}$
- Displacement from velocity: $s = \displaystyle\int v\,dt$
- Velocity from acceleration: $v = \displaystyle\int a\,dt$

### Total Distance vs Displacement

$$
\mathrm&lbrace;Displacement&rbrace; = \int_&lbrace;t_1&rbrace;^&lbrace;t_2&rbrace; v(t)\,dt
$$

$$
\mathrm&lbrace;Total distance&rbrace; = \int_&lbrace;t_1&rbrace;^&lbrace;t_2&rbrace; |v(t)|\,dt
$$

:::info[Example]

A particle moves with velocity $v(t) = t^2 - 4t + 3\mathrm{ m/s}$ for $0 \le t \le 5$.

**(a)** Find the displacement.

$$
s = \int_0^5 (t^2 - 4t + 3)\,dt = \left[\frac&lbrace;t^3&rbrace;&lbrace;3&rbrace; - 2t^2 + 3t\right]_0^5 = \frac&lbrace;125&rbrace;&lbrace;3&rbrace; - 50 + 15 = \frac&lbrace;40&rbrace;&lbrace;3&rbrace;\mathrm&lbrace; m&rbrace;
$$

**(b)** Find the total distance travelled.

Find when $v = 0$: $t^2 - 4t + 3 = 0 \implies (t-1)(t-3) = 0 \implies t = 1, 3$.

| Interval        | Sign of $v$ | Motion   |
| --------------- | ----------- | -------- |
| $0 \lt t \lt 1$ | $+$         | Forward  |
| $1 \lt t \lt 3$ | $-$         | Backward |
| $3 \lt t \lt 5$ | $+$         | Forward  |

$$
\mathrm&lbrace;Distance&rbrace; = \int_0^1 v\,dt + \left|\int_1^3 v\,dt\right| + \int_3^5 v\,dt
$$

$$
= \frac&lbrace;4&rbrace;&lbrace;3&rbrace; + \left|-\frac&lbrace;4&rbrace;&lbrace;3&rbrace;\right| + \frac&lbrace;20&rbrace;&lbrace;3&rbrace; = \frac&lbrace;4&rbrace;&lbrace;3&rbrace; + \frac&lbrace;4&rbrace;&lbrace;3&rbrace; + \frac&lbrace;20&rbrace;&lbrace;3&rbrace; = \frac&lbrace;28&rbrace;&lbrace;3&rbrace;\mathrm&lbrace; m&rbrace;
$$

:::

---

## Improper Integrals

### Type 1: Infinite Limits

$$
\int_a^&lbrace;\infty&rbrace; f(x)\,dx = \lim_&lbrace;b \to \infty&rbrace; \int_a^b f(x)\,dx
$$

### Type 2: Discontinuous Integrand

$$
\int_a^b f(x)\,dx = \lim_&lbrace;t \to a^+&rbrace; \int_t^b f(x)\,dx
$$

An improper integral **converges** if the limit exists (is finite) and **diverges** otherwise.

:::info[Example]

Determine whether $\displaystyle\int_1^{\infty} \frac{1}{x^2}\,dx$ converges.

$$
\int_1^&lbrace;\infty&rbrace; \frac&lbrace;1&rbrace;&lbrace;x^2&rbrace;\,dx = \lim_&lbrace;b \to \infty&rbrace;\int_1^b x^&lbrace;-2&rbrace;\,dx = \lim_&lbrace;b \to \infty&rbrace;\left[-\frac&lbrace;1&rbrace;&lbrace;x&rbrace;\right]_1^b = \lim_&lbrace;b \to \infty&rbrace;\left(-\frac&lbrace;1&rbrace;&lbrace;b&rbrace; + 1\right) = 1
$$

The integral converges to $1$.

:::

:::info[Example]

Determine whether $\displaystyle\int_1^{\infty} \frac{1}{x}\,dx$ converges.

$$
\int_1^&lbrace;\infty&rbrace; \frac&lbrace;1&rbrace;&lbrace;x&rbrace;\,dx = \lim_&lbrace;b \to \infty&rbrace;[\ln x]_1^b = \lim_&lbrace;b \to \infty&rbrace;\ln b = \infty
$$

The integral diverges.

:::

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

Evaluate $\displaystyle\int_0^{\pi/2} \sin^2 x\,dx$.

Using the identity $\sin^2 x = \dfrac{1 - \cos 2x}{2}$:

$$
\int_0^&lbrace;\pi/2&rbrace; \frac&lbrace;1 - \cos 2x&rbrace;&lbrace;2&rbrace;\,dx = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left[x - \frac&lbrace;\sin 2x&rbrace;&lbrace;2&rbrace;\right]_0^&lbrace;\pi/2&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left(\frac&lbrace;\pi&rbrace;&lbrace;2&rbrace; - 0\right) = \frac&lbrace;\pi&rbrace;&lbrace;4&rbrace;
$$

### Question 2 (Paper 2 style)

Let $R$ be the region bounded by the curve $y = x(x-2)$ and the $x$-axis.

**(a)** Find the area of $R$.

Zeros: $x = 0$ and $x = 2$. The curve is below the axis (opens upward).

$$
\mathrm&lbrace;Area&rbrace; = \int_0^2 |x(x-2)|\,dx = \int_0^2 (2x - x^2)\,dx = \left[x^2 - \frac&lbrace;x^3&rbrace;&lbrace;3&rbrace;\right]_0^2 = 4 - \frac&lbrace;8&rbrace;&lbrace;3&rbrace; = \frac&lbrace;4&rbrace;&lbrace;3&rbrace;
$$

**(b)** Find the volume when $R$ is rotated $360\degree$ about the $x$-axis.

$$
V = \pi\int_0^2 [x(x-2)]^2\,dx = \pi\int_0^2 x^2(x-2)^2\,dx
$$

$$
= \pi\int_0^2 (x^4 - 4x^3 + 4x^2)\,dx = \pi\left[\frac&lbrace;x^5&rbrace;&lbrace;5&rbrace; - x^4 + \frac&lbrace;4x^3&rbrace;&lbrace;3&rbrace;\right]_0^2
$$

$$
= \pi\left(\frac&lbrace;32&rbrace;&lbrace;5&rbrace; - 16 + \frac&lbrace;32&rbrace;&lbrace;3&rbrace;\right) = \pi \cdot \frac&lbrace;16&rbrace;&lbrace;15&rbrace; = \frac&lbrace;16\pi&rbrace;&lbrace;15&rbrace;
$$

### Question 3 (Paper 2 style)

Evaluate $\displaystyle\int \frac{2x + 3}{x^2 + 3x + 2}\,dx$.

Factorise the denominator: $x^2 + 3x + 2 = (x+1)(x+2)$.

$$
\frac&lbrace;2x+3&rbrace;&lbrace;(x+1)(x+2)&rbrace; = \frac&lbrace;A&rbrace;&lbrace;x+1&rbrace; + \frac&lbrace;B&rbrace;&lbrace;x+2&rbrace;
$$

$$
2x + 3 = A(x+2) + B(x+1)
$$

$x = -1$: $1 = A \implies A = 1$.

$x = -2$: $-1 = -B \implies B = 1$.

$$
\int \frac&lbrace;2x+3&rbrace;&lbrace;x^2+3x+2&rbrace;\,dx = \ln\|x+1\| + \ln\|x+2\| + C = \ln\|(x+1)(x+2)\| + C
$$

### Question 4 (Paper 1 style)

Use integration by parts to evaluate $\displaystyle\int_0^1 xe^{2x}\,dx$.

Let $u = x$, $dv = e^{2x}\,dx$. Then $du = dx$, $v = \dfrac{1}{2}e^{2x}$.

$$
\int_0^1 xe^&lbrace;2x&rbrace;\,dx = \left[\frac&lbrace;1&rbrace;&lbrace;2&rbrace;xe^&lbrace;2x&rbrace;\right]_0^1 - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\int_0^1 e^&lbrace;2x&rbrace;\,dx = \frac&lbrace;e^2&rbrace;&lbrace;2&rbrace; - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left[\frac&lbrace;e^&lbrace;2x&rbrace;&rbrace;&lbrace;2&rbrace;\right]_0^1
$$

$$
= \frac&lbrace;e^2&rbrace;&lbrace;2&rbrace; - \frac&lbrace;e^2&rbrace;&lbrace;4&rbrace; + \frac&lbrace;1&rbrace;&lbrace;4&rbrace; = \frac&lbrace;e^2&rbrace;&lbrace;4&rbrace; + \frac&lbrace;1&rbrace;&lbrace;4&rbrace; = \frac&lbrace;e^2 + 1&rbrace;&lbrace;4&rbrace;
$$

### Question 5 (Paper 2 style)

A particle moves in a straight line with acceleration $a(t) = 6t - 2\mathrm{ m/s}^2$. At $t = 0$,
the velocity is $4\mathrm{ m/s}$ and the displacement is $0\mathrm{ m}$.

**(a)** Find the velocity function.

$$
v(t) = \int (6t-2)\,dt = 3t^2 - 2t + C
$$

$v(0) = 4 \implies C = 4$.

$$
v(t) = 3t^2 - 2t + 4
$$

**(b)** Find the displacement function.

$$
s(t) = \int (3t^2 - 2t + 4)\,dt = t^3 - t^2 + 4t + D
$$

$s(0) = 0 \implies D = 0$.

$$
s(t) = t^3 - t^2 + 4t
$$

**(c)** Find the total distance travelled in the first 3 seconds.

Check if $v = 0$: $3t^2 - 2t + 4 = 0$. Discriminant $= 4 - 48 \lt 0$, so $v \gt 0$ always.

$$
\mathrm&lbrace;Distance&rbrace; = \int_0^3 v\,dt = \int_0^3 (3t^2 - 2t + 4)\,dt = \left[t^3 - t^2 + 4t\right]_0^3 = 27 - 9 + 12 = 30\mathrm&lbrace; m&rbrace;
$$

### Question 6 (Paper 2 style)

The region bounded by $y = e^x$, $y = 1$, $x = 0$, and $x = 2$ is rotated about the $x$-axis. Find
the volume.

$$
V = \pi\int_0^2 [(e^x)^2 - 1^2]\,dx = \pi\int_0^2 (e^&lbrace;2x&rbrace; - 1)\,dx = \pi\left[\frac&lbrace;e^&lbrace;2x&rbrace;&rbrace;&lbrace;2&rbrace; - x\right]_0^2
$$

$$
= \pi\left(\frac&lbrace;e^4&rbrace;&lbrace;2&rbrace; - 2 - \frac&lbrace;1&rbrace;&lbrace;2&rbrace; + 0\right) = \pi\left(\frac&lbrace;e^4&rbrace;&lbrace;2&rbrace; - \frac&lbrace;5&rbrace;&lbrace;2&rbrace;\right) = \frac&lbrace;\pi(e^4 - 5)&rbrace;&lbrace;2&rbrace;
$$

---

## Summary Table of Techniques

| Technique         | When to Use                                  | Key Idea                           |
| ----------------- | -------------------------------------------- | ---------------------------------- |
| Direct            | Simple power functions, standard forms       | Apply basic rules directly         |
| Substitution      | Composite functions, $f(g(x))g'(x)$          | Let $u = g(x)$                     |
| By parts          | Product of different function types          | $\int u\,dv = uv - \int v\,du$     |
| Partial fractions | Rational functions, factorisable denominator | Decompose then integrate each term |
| Trig substitution | $\sqrt{a^2 \pm x^2}$ or $\sqrt{x^2 - a^2}$   | Replace with trig function         |

:::tip[Exam Strategy]

When facing an integral, first check if it is a standard form. If not, consider substitution
(especially if you see a function and its derivative). If it is a product of different function
types, use integration by parts. If it is a rational function, consider partial fractions.

:::

---

## Additional Integration Techniques

### Integrals Involving Trigonometric Identities

Many trigonometric integrals require using identities to simplify before integrating.

#### Powers of Sine and Cosine

**Odd power of sine**: Factor out one $\sin x$, convert the rest to cosines using
$\sin^2 x = 1 - \cos^2 x$, then substitute $u = \cos x$.

:::info[Example]

Evaluate $\displaystyle\int \sin^3 x\,dx$.

$$
\int \sin^2 x \sin x\,dx = \int (1 - \cos^2 x)\sin x\,dx
$$

Let $u = \cos x$, $du = -\sin x\,dx$:

$$
= -\int (1 - u^2)\,du = -u + \frac&lbrace;u^3&rbrace;&lbrace;3&rbrace; + C = -\cos x + \frac&lbrace;\cos^3 x&rbrace;&lbrace;3&rbrace; + C
$$

:::

**Even powers of sine or cosine**: Use the half-angle formulas.

$$
\sin^2 x = \frac&lbrace;1 - \cos 2x&rbrace;&lbrace;2&rbrace;, \quad \cos^2 x = \frac&lbrace;1 + \cos 2x&rbrace;&lbrace;2&rbrace;
$$

:::info[Example]

Evaluate $\displaystyle\int \cos^4 x\,dx$.

$$
\cos^4 x = (\cos^2 x)^2 = \left(\frac&lbrace;1 + \cos 2x&rbrace;&lbrace;2&rbrace;\right)^2 = \frac&lbrace;1 + 2\cos 2x + \cos^2 2x&rbrace;&lbrace;4&rbrace;
$$

$$
= \frac&lbrace;1 + 2\cos 2x + \frac&lbrace;1 + \cos 4x&rbrace;&lbrace;2&rbrace;&rbrace;&lbrace;4&rbrace; = \frac&lbrace;3 + 4\cos 2x + \cos 4x&rbrace;&lbrace;8&rbrace;
$$

$$
\int \cos^4 x\,dx = \frac&lbrace;3x&rbrace;&lbrace;8&rbrace; + \frac&lbrace;\sin 2x&rbrace;&lbrace;4&rbrace; + \frac&lbrace;\sin 4x&rbrace;&lbrace;32&rbrace; + C
$$

:::

#### Products of Sine and Cosine

For $\displaystyle\int \sin mx \cos nx\,dx$, use the product-to-sum identities:

$$
\sin A \cos B = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;[\sin(A+B) + \sin(A-B)]
$$

$$
\sin A \sin B = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;[\cos(A-B) - \cos(A+B)]
$$

$$
\cos A \cos B = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;[\cos(A-B) + \cos(A+B)]
$$

:::info[Example]

Evaluate $\displaystyle\int \sin 3x \cos 5x\,dx$.

$$
\sin 3x \cos 5x = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;[\sin 8x + \sin(-2x)] = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(\sin 8x - \sin 2x)
$$

$$
\int \sin 3x \cos 5x\,dx = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left(-\frac&lbrace;\cos 8x&rbrace;&lbrace;8&rbrace; + \frac&lbrace;\cos 2x&rbrace;&lbrace;2&rbrace;\right) + C
$$

:::

### Integrals of the Form $\displaystyle\int \frac{1}{a^2 + x^2}\,dx$ and Related

$$
\int \frac&lbrace;1&rbrace;&lbrace;a^2 + x^2&rbrace;\,dx = \frac&lbrace;1&rbrace;&lbrace;a&rbrace;\arctan\frac&lbrace;x&rbrace;&lbrace;a&rbrace; + C
$$

$$
\int \frac&lbrace;1&rbrace;&lbrace;\sqrt&lbrace;a^2 - x^2&rbrace;&rbrace;\,dx = \arcsin\frac&lbrace;x&rbrace;&lbrace;a&rbrace; + C
$$

$$
\int \frac&lbrace;1&rbrace;&lbrace;x^2 - a^2&rbrace;\,dx = \frac&lbrace;1&rbrace;&lbrace;2a&rbrace;\ln\left|\frac&lbrace;x-a&rbrace;&lbrace;x+a&rbrace;\right| + C
$$

:::info[Example]

Evaluate $\displaystyle\int \frac{1}{4 + 9x^2}\,dx$.

Rewrite as: $\displaystyle\int \frac{1}{4 + (3x)^2}\,dx$.

Let $u = 3x$, $du = 3\,dx$:

$$
= \frac&lbrace;1&rbrace;&lbrace;3&rbrace;\int \frac&lbrace;1&rbrace;&lbrace;4 + u^2&rbrace;\,du = \frac&lbrace;1&rbrace;&lbrace;3&rbrace; \cdot \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\arctan\frac&lbrace;u&rbrace;&lbrace;2&rbrace; + C = \frac&lbrace;1&rbrace;&lbrace;6&rbrace;\arctan\frac&lbrace;3x&rbrace;&lbrace;2&rbrace; + C
$$

:::

### Integrals Involving $e^x$ and $\ln x$

#### Integrals with $e^x$ and Polynomials

Use integration by parts when $e^x$ is multiplied by a polynomial.

#### Integrals with $\ln x$

Use integration by parts with $u = \ln x$ and $dv = dx$:

$$
\int \ln x\,dx = x\ln x - x + C
$$

:::info[Example]

Evaluate $\displaystyle\int x^2 \ln x\,dx$.

Let $u = \ln x$, $dv = x^2\,dx$. Then $du = \dfrac{1}{x}\,dx$, $v = \dfrac{x^3}{3}$.

$$
\int x^2 \ln x\,dx = \frac&lbrace;x^3&rbrace;&lbrace;3&rbrace;\ln x - \int \frac&lbrace;x^3&rbrace;&lbrace;3&rbrace; \cdot \frac&lbrace;1&rbrace;&lbrace;x&rbrace;\,dx = \frac&lbrace;x^3&rbrace;&lbrace;3&rbrace;\ln x - \frac&lbrace;1&rbrace;&lbrace;3&rbrace;\int x^2\,dx
$$

$$
= \frac&lbrace;x^3&rbrace;&lbrace;3&rbrace;\ln x - \frac&lbrace;x^3&rbrace;&lbrace;9&rbrace; + C
$$

:::

---

## Arc Length

The arc length of a curve $y = f(x)$ from $x = a$ to $x = b$:

$$
L = \int_a^b \sqrt&lbrace;1 + \left(\frac&lbrace;dy&rbrace;&lbrace;dx&rbrace;\right)^2&rbrace;\,dx
$$

For a parametric curve $(x(t), y(t))$ from $t = t_1$ to $t = t_2$:

$$
L = \int_&lbrace;t_1&rbrace;^&lbrace;t_2&rbrace; \sqrt&lbrace;\left(\frac&lbrace;dx&rbrace;&lbrace;dt&rbrace;\right)^2 + \left(\frac&lbrace;dy&rbrace;&lbrace;dt&rbrace;\right)^2&rbrace;\,dt
$$

:::info[Example]

Find the arc length of $y = \dfrac{x^3}{6} + \dfrac{1}{2x}$ from $x = 1$ to $x = 3$.

$$
\frac&lbrace;dy&rbrace;&lbrace;dx&rbrace; = \frac&lbrace;x^2&rbrace;&lbrace;2&rbrace; - \frac&lbrace;1&rbrace;&lbrace;2x^2&rbrace;
$$

$$
\left(\frac&lbrace;dy&rbrace;&lbrace;dx&rbrace;\right)^2 = \frac&lbrace;x^4&rbrace;&lbrace;4&rbrace; - \frac&lbrace;1&rbrace;&lbrace;2&rbrace; + \frac&lbrace;1&rbrace;&lbrace;4x^4&rbrace;
$$

$$
1 + \left(\frac&lbrace;dy&rbrace;&lbrace;dx&rbrace;\right)^2 = \frac&lbrace;x^4&rbrace;&lbrace;4&rbrace; + \frac&lbrace;1&rbrace;&lbrace;2&rbrace; + \frac&lbrace;1&rbrace;&lbrace;4x^4&rbrace; = \left(\frac&lbrace;x^2&rbrace;&lbrace;2&rbrace; + \frac&lbrace;1&rbrace;&lbrace;2x^2&rbrace;\right)^2
$$

$$
L = \int_1^3 \left(\frac&lbrace;x^2&rbrace;&lbrace;2&rbrace; + \frac&lbrace;1&rbrace;&lbrace;2x^2&rbrace;\right)\,dx = \left[\frac&lbrace;x^3&rbrace;&lbrace;6&rbrace; - \frac&lbrace;1&rbrace;&lbrace;2x&rbrace;\right]_1^3
$$

$$
= \left(\frac&lbrace;27&rbrace;&lbrace;6&rbrace; - \frac&lbrace;1&rbrace;&lbrace;6&rbrace;\right) - \left(\frac&lbrace;1&rbrace;&lbrace;6&rbrace; - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\right) = \frac&lbrace;26&rbrace;&lbrace;6&rbrace; + \frac&lbrace;1&rbrace;&lbrace;3&rbrace; = \frac&lbrace;14&rbrace;&lbrace;3&rbrace;
$$

:::

---

## Mean Value of a Function

The mean value of a function $f(x)$ over $[a, b]$:

$$
\bar&lbrace;f&rbrace; = \frac&lbrace;1&rbrace;&lbrace;b - a&rbrace;\int_a^b f(x)\,dx
$$

:::info[Example]

Find the mean value of $f(x) = x^2$ over $[0, 3]$.

$$
\bar&lbrace;f&rbrace; = \frac&lbrace;1&rbrace;&lbrace;3&rbrace;\int_0^3 x^2\,dx = \frac&lbrace;1&rbrace;&lbrace;3&rbrace;\left[\frac&lbrace;x^3&rbrace;&lbrace;3&rbrace;\right]_0^3 = \frac&lbrace;1&rbrace;&lbrace;3&rbrace; \times 9 = 3
$$

:::

---

## Additional Exam-Style Questions

### Question 7 (Paper 2 style)

Evaluate $\displaystyle\int_0^{\pi/4} x\cos 2x\,dx$.

Let $u = x$, $dv = \cos 2x\,dx$. Then $du = dx$, $v = \dfrac{\sin 2x}{2}$.

$$
\int_0^&lbrace;\pi/4&rbrace; x\cos 2x\,dx = \left[\frac&lbrace;x\sin 2x&rbrace;&lbrace;2&rbrace;\right]_0^&lbrace;\pi/4&rbrace; - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\int_0^&lbrace;\pi/4&rbrace;\sin 2x\,dx
$$

$$
= \left(\frac&lbrace;\pi/4 \times 1&rbrace;&lbrace;2&rbrace; - 0\right) - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left[-\frac&lbrace;\cos 2x&rbrace;&lbrace;2&rbrace;\right]_0^&lbrace;\pi/4&rbrace;
$$

$$
= \frac&lbrace;\pi&rbrace;&lbrace;8&rbrace; - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left(-\frac&lbrace;0&rbrace;&lbrace;2&rbrace; + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\right) = \frac&lbrace;\pi&rbrace;&lbrace;8&rbrace; - \frac&lbrace;1&rbrace;&lbrace;4&rbrace;
$$

### Question 8 (Paper 2 style)

Find the area enclosed by the curves $y = x^3$ and $y = \sqrt{x}$.

Intersection: $x^3 = \sqrt{x} \implies x^6 = x \implies x(x^5 - 1) = 0 \implies x = 0$ or $x = 1$.

For $0 \le x \le 1$: $\sqrt{x} \ge x^3$.

$$
\mathrm&lbrace;Area&rbrace; = \int_0^1 (\sqrt&lbrace;x&rbrace; - x^3)\,dx = \left[\frac&lbrace;2x^&lbrace;3/2&rbrace;&rbrace;&lbrace;3&rbrace; - \frac&lbrace;x^4&rbrace;&lbrace;4&rbrace;\right]_0^1 = \frac&lbrace;2&rbrace;&lbrace;3&rbrace; - \frac&lbrace;1&rbrace;&lbrace;4&rbrace; = \frac&lbrace;5&rbrace;&lbrace;12&rbrace;
$$

### Question 9 (Paper 1 style)

Evaluate $\displaystyle\int \frac{x}{x^2 + 2x + 5}\,dx$.

Complete the square: $x^2 + 2x + 5 = (x+1)^2 + 4$.

Let $u = x^2 + 2x + 5$, $du = (2x + 2)\,dx$.

We need to split:
$\dfrac{x}{x^2+2x+5} = \dfrac{(2x+2)/2 - 1}{x^2+2x+5} = \dfrac{1}{2} \cdot \dfrac{2x+2}{x^2+2x+5} - \dfrac{1}{x^2+2x+5}$.

$$
\int \frac&lbrace;x&rbrace;&lbrace;x^2+2x+5&rbrace;\,dx = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\ln(x^2+2x+5) - \int \frac&lbrace;1&rbrace;&lbrace;(x+1)^2 + 4&rbrace;\,dx
$$

$$
= \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\ln(x^2+2x+5) - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\arctan\!\left(\frac&lbrace;x+1&rbrace;&lbrace;2&rbrace;\right) + C
$$

### Question 10 (Paper 2 style)

The region bounded by $y = \ln x$, $y = 0$, and $x = e$ is rotated $360\degree$ about the $x$-axis.
Find the volume.

$$
V = \pi\int_1^e (\ln x)^2\,dx
$$

Using integration by parts with $u = (\ln x)^2$, $dv = dx$:

$$
= \pi\left[x(\ln x)^2\right]_1^e - 2\pi\int_1^e \ln x\,dx
$$

$$
= \pi(e - 0) - 2\pi[x\ln x - x]_1^e = \pi e - 2\pi(e - e + 1) = \pi e - 2\pi = \pi(e - 2)
$$
