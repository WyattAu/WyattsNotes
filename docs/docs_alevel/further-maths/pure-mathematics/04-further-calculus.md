---
title: Further Calculus
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: further-calculus
sidebar_position: 4
---

## Further Calculus

This topic extends the calculus of A Level Mathematics to more powerful integration techniques,
inverse trigonometric functions, volumes of revolution, arc length, and surface area. These tools
are essential for university-level mathematics, physics, and engineering.

### Board Coverage

| Board      | Paper    | Notes                                                             |
| ---------- | -------- | ----------------------------------------------------------------- |
| AQA        | Paper 1  | Integration by parts, inverse trig integrals, volumes, arc length |
| Edexcel    | FP1, FP2 | Parts in FP1; inverse trig, volumes, arc length in FP2            |
| OCR (A)    | Paper 1  | Parts, inverse trig integrals, volumes                            |
| CIE (9231) | P1, P2   | Parts and volumes in P1; arc length and surface area in P2        |

:::info All boards provide standard integrals in the formula booklet. You must know how to apply
integration by parts repeatedly, derive and use reduction formulae, and set up volumes of revolution
integrals correctly. CIE places particular emphasis on parametric volumes of revolution. :::

<hr />

## 1. Integration by Parts (Advanced)

### 1.1 The formula — proof from the product rule

**Theorem.** For differentiable functions $u(x)$ and $v(x)$:

$$\boxed{\int u\,\frac{dv}{dx}\,dx = uv - \int v\,\frac{du}{dx}\,dx}$$

### Proof of the integration by parts formula

From the product rule:

$$\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$$

Integrating both sides with respect to $x$:

$$uv = \int u\frac{dv}{dx}\,dx + \int v\frac{du}{dx}\,dx$$

Rearranging:

$$\int u\frac{dv}{dx}\,dx = uv - \int v\frac{du}{dx}\,dx \quad \blacksquare$$

### 1.2 Repeated integration by parts

When the integral does not simplify in one step, apply integration by parts repeatedly until it
does.

**Example.** Find $\displaystyle\int x^2 e^x\,dx$.

First application: $u = x^2$, $dv = e^x\,dx$. $du = 2x\,dx$, $v = e^x$.

$$\int x^2 e^x\,dx = x^2 e^x - 2\int x e^x\,dx$$

Second application on $\int x e^x\,dx$: $u = x$, $dv = e^x\,dx$. $du = dx$, $v = e^x$.

$$\int x e^x\,dx = xe^x - \int e^x\,dx = xe^x - e^x + C$$

Therefore:

$$\int x^2 e^x\,dx = x^2 e^x - 2(xe^x - e^x) + C = e^x(x^2 - 2x + 2) + C$$

**Example.** Find $\displaystyle\int e^{ax}\cos bx\,dx$.

Let $I = \int e^{ax}\cos bx\,dx$. First application: $u = e^{ax}$, $dv = \cos bx\,dx$.

$$du = ae^{ax}\,dx, \quad v = \frac{1}{b}\sin bx$$

$$I = \frac{e^{ax}\sin bx}{b} - \frac{a}{b}\int e^{ax}\sin bx\,dx$$

Second application on $\int e^{ax}\sin bx\,dx$: $u = e^{ax}$, $dv = \sin bx\,dx$.

$$du = ae^{ax}\,dx, \quad v = -\frac{1}{b}\cos bx$$

$$\int e^{ax}\sin bx\,dx = -\frac{e^{ax}\cos bx}{b} + \frac{a}{b}\int e^{ax}\cos bx\,dx = -\frac{e^{ax}\cos bx}{b} + \frac{a}{b}I$$

Substituting back:

$$I = \frac{e^{ax}\sin bx}{b} - \frac{a}{b}\left(-\frac{e^{ax}\cos bx}{b} + \frac{a}{b}I\right)$$

$$I = \frac{e^{ax}\sin bx}{b} + \frac{ae^{ax}\cos bx}{b^2} - \frac{a^2}{b^2}I$$

$$I\left(1 + \frac{a^2}{b^2}\right) = e^{ax}\left(\frac{\sin bx}{b} + \frac{a\cos bx}{b^2}\right)$$

$$\boxed{I = \frac{e^{ax}(a\cos bx + b\sin bx)}{a^2 + b^2} + C}$$

:::tip When integrating $e^{ax}\cos bx$ or $e^{ax}\sin bx$, apply integration by parts twice. The
original integral reappears — solve for it algebraically. Always keep $u = e^{ax}$ on both
applications. :::

### 1.3 Reduction formulae

A **reduction formula** expresses an integral $I_n$ (depending on a parameter $n$) in terms of
$I_{n-1}$ or $I_{n-2}$.

### Proof of the reduction formula for $I_n = \int_0^{\pi/2} \sin^n x\,dx$

Write $I_n = \int_0^{\pi/2}\sin^{n-1}x \cdot \sin x\,dx$.

Let $u = \sin^{n-1}x$, $dv = \sin x\,dx$. Then:

$$du = (n-1)\sin^{n-2}x\cos x\,dx, \quad v = -\cos x$$

$$I_n = \bigl[-\sin^{n-1}x\cos x\bigr]_0^{\pi/2} + (n-1)\int_0^{\pi/2}\sin^{n-2}x\cos^2 x\,dx$$

The boundary term vanishes: at $x = 0$, $\sin 0 = 0$; at $x = \pi/2$, $\cos(\pi/2) = 0$.

Using $\cos^2 x = 1 - \sin^2 x$:

$$I_n = (n-1)\int_0^{\pi/2}\sin^{n-2}x\,dx - (n-1)\int_0^{\pi/2}\sin^n x\,dx$$

$$I_n = (n-1)I_{n-2} - (n-1)I_n$$

$$nI_n = (n-1)I_{n-2}$$

$$\boxed{I_n = \frac{n-1}{n}\,I_{n-2}, \quad n \geq 2}$$

The base cases are $I_0 = \displaystyle\int_0^{\pi/2}1\,dx = \dfrac{\pi}{2}$ and
$I_1 = \displaystyle\int_0^{\pi/2}\sin x\,dx = 1$.

**Example.** Using the reduction formula,
$I_4 = \dfrac{3}{4}I_2 = \dfrac{3}{4}\cdot\dfrac{1}{2}I_0 = \dfrac{3}{4}\cdot\dfrac{1}{2}\cdot\dfrac{\pi}{2} = \dfrac{3\pi}{16}$.

:::warning The boundary term $[-\sin^{n-1}x\cos x]_0^{\pi/2}$ vanishes only because the limits are
$0$ and $\pi/2$. For general limits, the boundary term must be evaluated. :::

**Example.** Find a reduction formula for $I_n = \displaystyle\int x^n e^x\,dx$.

Let $u = x^n$, $dv = e^x\,dx$. Then $du = nx^{n-1}\,dx$, $v = e^x$.

$$\boxed{I_n = x^n e^x - nI_{n-1}}$$

With $I_0 = e^x + C$.

<hr />

## 2. Integration Using Partial Fractions

### 2.1 Linear factors

When the denominator factorises into distinct linear factors, decompose and integrate each term.

**Example.** $\displaystyle\int \frac{2x+3}{(x+1)(x+2)}\,dx$.

$$\frac{2x+3}{(x+1)(x+2)} = \frac{A}{x+1} + \frac{B}{x+2}$$

$2x + 3 = A(x+2) + B(x+1)$. Setting $x = -1$: $1 = A$. Setting $x = -2$: $-1 = -B \implies B = 1$.

$$\int \frac{1}{x+1} + \frac{1}{x+2}\,dx = \ln|x+1| + \ln|x+2| + C = \ln|(x+1)(x+2)| + C$$

### 2.2 Irreducible quadratic factors

When the denominator contains an irreducible quadratic $ax^2 + bx + c$ (discriminant
$b^2 - 4ac < 0$), the partial fraction has a linear numerator over the quadratic, leading to $\ln$
and $\arctan$ terms.

**Example.** $\displaystyle\int \frac{3x + 1}{x^2 + 2x + 5}\,dx$.

Complete the square: $x^2 + 2x + 5 = (x+1)^2 + 4$.

Split the numerator to match the derivative of the denominator:

$$\frac{3x+1}{x^2+2x+5} = \frac{\frac{3}{2}(2x+2) + 1 - 3}{x^2+2x+5} = \frac{3}{2}\cdot\frac{2x+2}{x^2+2x+5} - \frac{2}{(x+1)^2+4}$$

$$\int \frac{3x+1}{x^2+2x+5}\,dx = \frac{3}{2}\ln(x^2+2x+5) - 2\cdot\frac{1}{2}\arctan\!\left(\frac{x+1}{2}\right) + C$$

$$= \frac{3}{2}\ln(x^2+2x+5) - \arctan\!\left(\frac{x+1}{2}\right) + C$$

:::tip The standard strategy is: (1) complete the square in the denominator, (2) split the numerator
into a multiple of $(2x + b)$ plus a constant, (3) the $(2x+b)$ part gives $\ln$, the constant gives
$\arctan$. :::

### 2.3 Repeated factors

**Example.** $\displaystyle\int \frac{1}{x(x-1)^2}\,dx$.

$$\frac{1}{x(x-1)^2} = \frac{A}{x} + \frac{B}{x-1} + \frac{C}{(x-1)^2}$$

$1 = A(x-1)^2 + Bx(x-1) + Cx$.

$x = 0$: $1 = A$. $x = 1$: $1 = C$. $x = 2$: $1 = A + 2B + 2C = 1 + 2B + 2 \implies B = -1$.

$$\int\left(\frac{1}{x} - \frac{1}{x-1} + \frac{1}{(x-1)^2}\right)dx = \ln|x| - \ln|x-1| - \frac{1}{x-1} + C$$

<hr />

## 3. Inverse Trigonometric Integration

### 3.1 Derivation of the standard integrals

**Theorem.** The following integrals hold for $a > 0$:

$$\boxed{\int \frac{1}{a^2+x^2}\,dx = \frac{1}{a}\arctan\frac{x}{a} + C}$$

$$\boxed{\int \frac{1}{\sqrt{a^2-x^2}}\,dx = \arcsin\frac{x}{a} + C}$$

$$\boxed{\int \frac{1}{a^2-x^2}\,dx = \frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right| + C}$$

### Proof of $\int \frac{1}{a^2+x^2}\,dx = \frac{1}{a}\arctan\frac{x}{a} + C$

Let $x = a\tan\theta$, so $dx = a\sec^2\theta\,d\theta$.

$$\int \frac{1}{a^2 + a^2\tan^2\theta}\cdot a\sec^2\theta\,d\theta = \int \frac{a\sec^2\theta}{a^2\sec^2\theta}\,d\theta = \frac{1}{a}\int 1\,d\theta = \frac{\theta}{a} + C$$

Since $\theta = \arctan(x/a)$:

$$\int \frac{1}{a^2+x^2}\,dx = \frac{1}{a}\arctan\frac{x}{a} + C \quad \blacksquare$$

### Proof of $\int \frac{1}{\sqrt{a^2-x^2}}\,dx = \arcsin\frac{x}{a} + C$

Let $x = a\sin\theta$, so $dx = a\cos\theta\,d\theta$ and $\sqrt{a^2 - x^2} = a\cos\theta$ (for
$|\theta| \leq \pi/2$).

$$\int \frac{a\cos\theta}{a\cos\theta}\,d\theta = \int 1\,d\theta = \theta + C = \arcsin\frac{x}{a} + C \quad \blacksquare$$

### Proof of $\int \frac{1}{a^2-x^2}\,dx = \frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right| + C$

By partial fractions:

$$\frac{1}{a^2-x^2} = \frac{1}{(a-x)(a+x)} = \frac{1}{2a}\left(\frac{1}{a-x} + \frac{1}{a+x}\right)$$

$$\int \frac{1}{a^2-x^2}\,dx = \frac{1}{2a}\bigl[-\ln|a-x| + \ln|a+x|\bigr] + C = \frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right| + C \quad \blacksquare$$

### 3.2 More general forms

$$\int \frac{1}{a^2 + (x+b)^2}\,dx = \frac{1}{a}\arctan\frac{x+b}{a} + C$$

$$\int \frac{1}{\sqrt{a^2 - (x+b)^2}}\,dx = \arcsin\frac{x+b}{a} + C$$

These follow directly from the standard forms via the substitution $u = x + b$.

:::warning Distinguish carefully between $\dfrac{1}{a^2+x^2}$ (gives $\arctan$),
$\dfrac{1}{\sqrt{a^2-x^2}}$ (gives $\arcsin$), and $\dfrac{1}{a^2-x^2}$ (gives a logarithmic form).
The square root makes the difference. :::

<hr />

## 4. Differentiation of Inverse Trigonometric Functions

### 4.1 Derivatives

$$\boxed{\frac{d}{dx}\arcsin x = \frac{1}{\sqrt{1-x^2}}, \quad |x| < 1}$$

$$\boxed{\frac{d}{dx}\arccos x = -\frac{1}{\sqrt{1-x^2}}, \quad |x| < 1}$$

$$\boxed{\frac{d}{dx}\arctan x = \frac{1}{1+x^2}}$$

### Proof of $\frac{d}{dx}\arctan x = \frac{1}{1+x^2}$

Let $y = \arctan x$. Then $x = \tan y$.

Differentiating implicitly with respect to $x$:

$$1 = \sec^2 y \cdot \frac{dy}{dx}$$

$$\frac{dy}{dx} = \frac{1}{\sec^2 y} = \frac{1}{1 + \tan^2 y} = \frac{1}{1+x^2} \quad \blacksquare$$

### Proof of $\frac{d}{dx}\arcsin x = \frac{1}{\sqrt{1-x^2}}$

Let $y = \arcsin x$. Then $x = \sin y$.

Differentiating implicitly:

$$1 = \cos y \cdot \frac{dy}{dx}$$

Since $\arcsin x$ has range $[-\pi/2, \pi/2]$, we have $\cos y \geq 0$, so
$\cos y = \sqrt{1-\sin^2 y} = \sqrt{1-x^2}$.

$$\frac{dy}{dx} = \frac{1}{\cos y} = \frac{1}{\sqrt{1-x^2}} \quad \blacksquare$$

### 4.2 Chain rule with inverse trig functions

**Example.** $\dfrac{d}{dx}\arcsin(3x) = \dfrac{3}{\sqrt{1-9x^2}}$.

**Example.**
$\dfrac{d}{dx}\arctan\!\left(\dfrac{x}{2}\right) = \dfrac{1/2}{1 + x^2/4} = \dfrac{2}{4+x^2}$.

<hr />

## 5. Volumes of Revolution

### 5.1 Rotation about the $x$-axis

**Definition.** The volume generated by rotating the region bounded by $y = f(x)$, the $x$-axis,
$x = a$, and $x = b$ about the $x$-axis is:

$$\boxed{V = \pi\int_a^b y^2\,dx = \pi\int_a^b [f(x)]^2\,dx}$$

### 5.2 Rotation about the $y$-axis

**Definition.** The volume generated by rotating the region bounded by $x = g(y)$, the $y$-axis,
$y = c$, and $y = d$ about the $y$-axis is:

$$\boxed{V = \pi\int_c^d x^2\,dy = \pi\int_c^d [g(y)]^2\,dy}$$

### 5.3 Parametric curves

When a curve is given parametrically by $x = x(t)$, $y = y(t)$:

- Rotation about the $x$-axis: $V = \pi\displaystyle\int_{t_1}^{t_2} y^2\,\frac{dx}{dt}\,dt$
- Rotation about the $y$-axis: $V = \pi\displaystyle\int_{t_1}^{t_2} x^2\,\frac{dy}{dt}\,dt$

:::warning The parametric volume formula uses $\dfrac{dx}{dt}$ or $\dfrac{dy}{dt}$ as appropriate.
Do not forget this factor — it is a very common error. :::

**Example.** Find the volume generated by rotating the curve $y = \sqrt{x}$ from $x = 0$ to $x = 4$
about the $x$-axis.

$$V = \pi\int_0^4 (\sqrt{x})^2\,dx = \pi\int_0^4 x\,dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi$$

**Example.** The curve $x = 2\cos t$, $y = 2\sin t$ for $0 \leq t \leq \pi$ is rotated about the
$x$-axis. Find the volume.

$$V = \pi\int_0^{\pi} (2\sin t)^2 \cdot \frac{dx}{dt}\,dt = \pi\int_0^{\pi} 4\sin^2 t \cdot (-2\sin t)\,dt$$

$$= -8\pi\int_0^{\pi}\sin^3 t\,dt = 8\pi\int_0^{\pi}\sin^3 t\,dt$$

Using $\sin^3 t = \sin t(1-\cos^2 t)$ and the substitution $u = \cos t$:

$$= 8\pi\int_{-1}^{1}(1-u^2)\,du = 8\pi\left[u - \frac{u^3}{3}\right]_{-1}^1 = 8\pi\left(\frac{2}{3} - \left(-\frac{2}{3}\right)\right) = \frac{32\pi}{3}$$

<hr />

## 6. Arc Length and Surface Area of Revolution

### 6.1 Arc length

**Theorem.** For a curve $y = f(x)$ from $x = a$ to $x = b$:

$$\boxed{s = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx}$$

For a curve given parametrically by $x = x(t)$, $y = y(t)$ from $t = t_1$ to $t = t_2$:

$$\boxed{s = \int_{t_1}^{t_2} \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt}$$

**Derivation (Cartesian).** The arc length element $ds$ satisfies $ds^2 = dx^2 + dy^2$ by the
Pythagorean theorem applied to an infinitesimal segment. Therefore:

$$ds = \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$$

Integrating from $a$ to $b$ gives the total arc length.

**Example.** Find the arc length of $y = \ln(\cos x)$ from $x = 0$ to $x = \pi/3$.

$$\frac{dy}{dx} = \frac{-\sin x}{\cos x} = -\tan x$$

$$s = \int_0^{\pi/3}\sqrt{1+\tan^2 x}\,dx = \int_0^{\pi/3}\sec x\,dx = \Bigl[\ln|\sec x + \tan x|\Bigr]_0^{\pi/3}$$

$$= \ln(2 + \sqrt{3}) - \ln(1) = \ln(2+\sqrt{3})$$

### 6.2 Surface area of revolution

**Theorem.** The surface area generated by rotating $y = f(x)$ from $x = a$ to $x = b$ about the
$x$-axis:

$$\boxed{S = 2\pi\int_a^b y\,\sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx}$$

For a parametric curve rotated about the $x$-axis:

$$\boxed{S = 2\pi\int_{t_1}^{t_2} y\,\sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt}$$

**Example.** Find the surface area generated by rotating $y = x^2$ from $x = 0$ to $x = 1$ about the
$x$-axis.

$$S = 2\pi\int_0^1 x^2\sqrt{1+4x^2}\,dx$$

Let $x = \frac{1}{2}\tan\theta$, $dx = \frac{1}{2}\sec^2\theta\,d\theta$. When $x = 0$,
$\theta = 0$; when $x = 1$, $\theta = \arctan 2$.

$$
S = 2\pi\int_0^{\arctan 2}\frac{\tan^2\theta}{4}\cdot\sec\theta\cdot\frac{1}{2}\sec^2\theta\,d\theta
= \frac{\pi}{4}\int_0^{\arctan 2}\tan^2\theta\sec^3\theta\,d\theta
$$

Using $\tan^2\theta = \sec^2\theta - 1$ and integrating by parts with $u = \sec\theta$,
$dv = \sec^2\theta\,d\theta$:

This integral evaluates to
$\dfrac{\pi}{4}\left[\dfrac{1}{4}\sec\theta\tan\theta + \dfrac{1}{4}\ln|\sec\theta+\tan\theta| - \dfrac{1}{4}\sec\theta\tan\theta + \dfrac{1}{8}\ln|\sec\theta+\tan\theta|\right]_0^{\arctan 2}$.

Simplifying with $\sec(\arctan 2) = \sqrt{5}$ and $\tan(\arctan 2) = 2$:

$$S = \frac{9\pi\sqrt{5}}{16} - \frac{\pi}{32}\ln(2+\sqrt{5})$$

:::info CIE (9231) P2 requires arc length and surface area of revolution. Edexcel FP2 covers arc
length but surface area appears less frequently. AQA covers both in Paper 1. OCR (A) covers arc
length in Paper 1. :::

<hr />

## 7. Summary of Key Results

| Integral                                        | Result                                                       |
| ----------------------------------------------- | ------------------------------------------------------------ |
| $\displaystyle\int\frac{1}{a^2+x^2}\,dx$        | $\dfrac{1}{a}\arctan\dfrac{x}{a}+C$                          |
| $\displaystyle\int\frac{1}{\sqrt{a^2-x^2}}\,dx$ | $\arcsin\dfrac{x}{a}+C$                                      |
| $\displaystyle\int\frac{1}{a^2-x^2}\,dx$        | $\dfrac{1}{2a}\ln\left\|\dfrac{a+x}{a-x}\right\|+C$          |
| $\dfrac{d}{dx}\arcsin x$                        | $\dfrac{1}{\sqrt{1-x^2}}$                                    |
| $\dfrac{d}{dx}\arctan x$                        | $\dfrac{1}{1+x^2}$                                           |
| Vol. about $x$-axis                             | $\pi\displaystyle\int_a^b y^2\,dx$                           |
| Arc length                                      | $\displaystyle\int\sqrt{1+\left(\frac{dy}{dx}\right)^2}\,dx$ |

<hr />

## Problems

<details>
<summary>Problem 1</summary>
Find $\displaystyle\int x^3 e^{-x}\,dx$.
</details>

<details>
<summary>Hint 1</summary>
Apply integration by parts three times, reducing the power of $x$ each time.
</details>

<details>
<summary>Answer 1</summary>
First: $u = x^3$, $dv = e^{-x}\,dx$. $du = 3x^2\,dx$, $v = -e^{-x}$.

$\displaystyle\int x^3 e^{-x}\,dx = -x^3 e^{-x} + 3\int x^2 e^{-x}\,dx$

Second: $u = x^2$, $dv = e^{-x}\,dx$. $\int x^2 e^{-x}\,dx = -x^2 e^{-x} + 2\int x e^{-x}\,dx$.

Third: $u = x$, $dv = e^{-x}\,dx$.
$\int x e^{-x}\,dx = -xe^{-x} + \int e^{-x}\,dx = -xe^{-x} - e^{-x}$.

Combining:
$\int x^3 e^{-x}\,dx = -x^3 e^{-x} - 3x^2 e^{-x} - 6x e^{-x} - 6e^{-x} + C = -e^{-x}(x^3 + 3x^2 + 6x + 6) + C$.

</details>

<details>
<summary>Problem 2</summary>
Find a reduction formula for $I_n = \displaystyle\int \cos^n x\,dx$ for $n \geq 2$.
</details>

<details>
<summary>Hint 2</summary>
Write $\cos^n x = \cos^{n-1}x \cdot \cos x$ and apply integration by parts with $u = \cos^{n-1}x$, $dv = \cos x\,dx$. Use $\sin^2 x = 1 - \cos^2 x$.
</details>

<details>
<summary>Answer 2</summary>
$I_n = \int\cos^{n-1}x\cos x\,dx$. Let $u = \cos^{n-1}x$, $dv = \cos x\,dx$.

$du = -(n-1)\cos^{n-2}x\sin x\,dx$, $v = \sin x$.

$I_n = \cos^{n-1}x\sin x + (n-1)\int\cos^{n-2}x\sin^2 x\,dx$

$= \cos^{n-1}x\sin x + (n-1)\int\cos^{n-2}x(1-\cos^2 x)\,dx$

$= \cos^{n-1}x\sin x + (n-1)I_{n-2} - (n-1)I_n$

$nI_n = \cos^{n-1}x\sin x + (n-1)I_{n-2}$

$\boxed{I_n = \frac{1}{n}\cos^{n-1}x\sin x + \frac{n-1}{n}I_{n-2} + C}$

</details>

<details>
<summary>Problem 3</summary>
Evaluate $\displaystyle\int \frac{2x-1}{x^2+4x+13}\,dx$.
</details>

<details>
<summary>Hint 3</summary>
Complete the square: $x^2+4x+13 = (x+2)^2+9$. Split the numerator into a multiple of $(2x+4)$ plus a constant.
</details>

<details>
<summary>Answer 3</summary>
$x^2+4x+13 = (x+2)^2+9$. Write $2x-1 = (2x+4) - 5$.

$\displaystyle\int\frac{2x+4}{(x+2)^2+9}\,dx - 5\int\frac{1}{(x+2)^2+9}\,dx$

$= \ln(x^2+4x+13) - \frac{5}{3}\arctan\!\left(\frac{x+2}{3}\right) + C$

</details>

<details>
<summary>Problem 4</summary>
Evaluate $\displaystyle\int_0^{\pi/2} \sin^5 x\,dx$ using the reduction formula.
</details>

<details>
<summary>Hint 4</summary>
Use $I_n = \dfrac{n-1}{n}I_{n-2}$ with $I_1 = 1$.
</details>

<details>
<summary>Answer 4</summary>
$I_5 = \dfrac{4}{5}I_3 = \dfrac{4}{5}\cdot\dfrac{2}{3}I_1 = \dfrac{4}{5}\cdot\dfrac{2}{3}\cdot 1 = \dfrac{8}{15}$.
</details>

<details>
<summary>Problem 5</summary>
Find the volume generated by rotating the region bounded by $y = x^2$, $y = 0$, $x = 0$, $x = 2$ about
the $y$-axis.
</details>

<details>
<summary>Hint 5</summary>
Express $x$ in terms of $y$ ($x = \sqrt{y}$) and integrate with respect to $y$ from $0$ to $4$, or use the
shell method: $V = 2\pi\int_0^2 x\cdot x^2\,dx$.
</details>

<details>
<summary>Answer 5</summary>
Using the disc method about the $y$-axis: $V = \pi\int_0^4 x^2\,dy = \pi\int_0^4 y\,dy = \pi\left[\frac{y^2}{2}\right]_0^4 = 8\pi$.
</details>

<details>
<summary>Problem 6</summary>
Find $\dfrac{d}{dx}\left[x\arcsin x + \sqrt{1-x^2}\right]$ and hence evaluate
$\displaystyle\int_0^{1/2} \arcsin x\,dx$.
</details>

<details>
<summary>Hint 6</summary>
Differentiate using the product rule and the chain rule with $\dfrac{d}{dx}\arcsin x$.
</details>

<details>
<summary>Answer 6</summary>
$\dfrac{d}{dx}\bigl[x\arcsin x + \sqrt{1-x^2}\bigr] = \arcsin x + \dfrac{x}{\sqrt{1-x^2}} + \dfrac{-x}{\sqrt{1-x^2}} = \arcsin x$.

Therefore $\displaystyle\int \arcsin x\,dx = x\arcsin x + \sqrt{1-x^2} + C$.

$\displaystyle\int_0^{1/2}\arcsin x\,dx = \left[x\arcsin x + \sqrt{1-x^2}\right]_0^{1/2} = \frac{1}{2}\cdot\frac{\pi}{6} + \frac{\sqrt{3}}{2} - 1 = \frac{\pi}{12} + \frac{\sqrt{3}}{2} - 1$.

</details>

<details>
<summary>Problem 7</summary>
Find the arc length of the curve $y = \dfrac{x^3}{6} + \dfrac{1}{2x}$ from $x = 1$ to $x = 3$.
</details>

<details>
<summary>Hint 7</summary>
Compute $\dfrac{dy}{dx} = \dfrac{x^2}{2} - \dfrac{1}{2x^2}$. Show that $1+\left(\dfrac{dy}{dx}\right)^2$ is a perfect square.
</details>

<details>
<summary>Answer 7</summary>
$\dfrac{dy}{dx} = \dfrac{x^2}{2} - \dfrac{1}{2x^2}$.

$1+\left(\dfrac{dy}{dx}\right)^2 = 1 + \dfrac{x^4}{4} - \dfrac{1}{2} + \dfrac{1}{4x^4} = \dfrac{x^4}{4} + \dfrac{1}{2} + \dfrac{1}{4x^4} = \left(\dfrac{x^2}{2} + \dfrac{1}{2x^2}\right)^2$

$s = \displaystyle\int_1^3\left(\dfrac{x^2}{2} + \dfrac{1}{2x^2}\right)dx = \left[\dfrac{x^3}{6} - \dfrac{1}{2x}\right]_1^3 = \left(\dfrac{9}{2}-\dfrac{1}{6}\right)-\left(\dfrac{1}{6}-\dfrac{1}{2}\right) = \dfrac{14}{3}$.

</details>

<details>
<summary>Problem 8</summary>
Evaluate $\displaystyle\int_0^{\infty}\frac{1}{4+x^2}\,dx$.
</details>

<details>
<summary>Hint 8</summary>
Use $\displaystyle\int\frac{1}{a^2+x^2}\,dx = \frac{1}{a}\arctan\frac{x}{a}$. Here $a = 2$.
</details>

<details>
<summary>Answer 8</summary>
$\displaystyle\int_0^{\infty}\frac{1}{4+x^2}\,dx = \left[\frac{1}{2}\arctan\frac{x}{2}\right]_0^{\infty} = \frac{1}{2}\cdot\frac{\pi}{2} - 0 = \frac{\pi}{4}$.
</details>

<details>
<summary>Problem 9</summary>
The curve $x = t^2$, $y = t^3$ for $0 \leq t \leq 2$ is rotated about the $x$-axis. Find the volume of
revolution.
</details>

<details>
<summary>Hint 9</summary>
Use $V = \pi\displaystyle\int_{t_1}^{t_2}y^2\,\frac{dx}{dt}\,dt$. Here $\dfrac{dx}{dt} = 2t$.
</details>

<details>
<summary>Answer 9</summary>
$V = \pi\displaystyle\int_0^2 t^6 \cdot 2t\,dt = 2\pi\int_0^2 t^7\,dt = 2\pi\left[\frac{t^8}{8}\right]_0^2 = 2\pi\cdot\frac{256}{8} = 64\pi$.
</details>

<details>
<summary>Problem 10</summary>
Find $\displaystyle\int e^x\sin 2x\,dx$.
</details>

<details>
<summary>Hint 10</summary>
Apply integration by parts twice. Keep $u = e^x$ on both applications. The original integral will reappear.
</details>

<details>
<summary>Answer 10</summary>
Let $I = \displaystyle\int e^x\sin 2x\,dx$. First: $u = e^x$, $dv = \sin 2x\,dx$. $du = e^x\,dx$, $v = -\frac{1}{2}\cos 2x$.

$I = -\frac{1}{2}e^x\cos 2x + \frac{1}{2}\int e^x\cos 2x\,dx$.

Second on $\int e^x\cos 2x\,dx$: $u = e^x$, $dv = \cos 2x\,dx$. $du = e^x\,dx$,
$v = \frac{1}{2}\sin 2x$.

$\int e^x\cos 2x\,dx = \frac{1}{2}e^x\sin 2x - \frac{1}{2}\int e^x\sin 2x\,dx = \frac{1}{2}e^x\sin 2x - \frac{1}{2}I$.

$I = -\frac{1}{2}e^x\cos 2x + \frac{1}{4}e^x\sin 2x - \frac{1}{4}I$.

$\frac{5}{4}I = e^x\left(\frac{\sin 2x}{4} - \frac{\cos 2x}{2}\right)$.

$\boxed{I = \frac{e^x(\sin 2x - 2\cos 2x)}{5} + C}$

</details>

:::

:::

:::

:::

:::

:::

:::
