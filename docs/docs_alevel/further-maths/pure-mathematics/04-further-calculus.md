---
title: Further Calculus
description:
  'A-Level Further Maths Further Calculus notes covering key definitions, core concepts, worked
  examples, and practice questions for thorough preparation.'
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
Inverse trigonometric functions, volumes of revolution, arc length, and surface area. These tools
Are essential for university-level mathematics, physics, and engineering.

### Board Coverage

| Board      | Paper    | Notes                                                             |
| ---------- | -------- | ----------------------------------------------------------------- |
| AQA        | Paper 1  | Integration by parts, inverse trig integrals, volumes, arc length |
| Edexcel    | FP1, FP2 | Parts in FP1; inverse trig, volumes, arc length in FP2            |
| OCR (A)    | Paper 1  | Parts, inverse trig integrals, volumes                            |
| CIE (9231) | P1, P2   | Parts and volumes in P1; arc length and surface area in P2        |

:::info All boards provide standard integrals in the formula booklet. You must know how to apply
Integration by parts repeatedly, derive and use reduction formulae, and set up volumes of revolution
Integrals correctly. CIE places particular emphasis on parametric volumes of revolution.
:::

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
Does.

**Example.** Find $\displaystyle\int x^2 e^x\,dx$.

First application: $u = x^2$$dv = e^x\,dx$. $du = 2x\,dx$$v = e^x$.

$$\int x^2 e^x\,dx = x^2 e^x - 2\int x e^x\,dx$$

Second application on $\int x e^x\,dx$: $u = x$$dv = e^x\,dx$. $du = dx$$v = e^x$.

$$\int x e^x\,dx = xe^x - \int e^x\,dx = xe^x - e^x + C$$

Therefore:

$$\int x^2 e^x\,dx = x^2 e^x - 2(xe^x - e^x) + C = e^x(x^2 - 2x + 2) + C$$

**Example.** Find $\displaystyle\int e^{ax}\cos bx\,dx$.

Let $I = \int e^{ax}\cos bx\,dx$. First application: $u = e^{ax}$, $dv = \cos bx\,dx$.

$$du = ae^{ax}\,dx, \quad v = \frac{1}{b}\sin bx$$

$$I = \frac◆LB◆e^{ax}\sin bx◆RB◆◆LB◆b◆RB◆ - \frac{a}{b}\int e^{ax}\sin bx\,dx$$

Second application on $\int e^{ax}\sin bx\,dx$: $u = e^{ax}$, $dv = \sin bx\,dx$.

$$du = ae^{ax}\,dx, \quad v = -\frac{1}{b}\cos bx$$

$$\int e^{ax}\sin bx\,dx = -\frac◆LB◆e^{ax}\cos bx◆RB◆◆LB◆b◆RB◆ + \frac{a}{b}\int e^{ax}\cos bx\,dx = -\frac◆LB◆e^{ax}\cos bx◆RB◆◆LB◆b◆RB◆ + \frac{a}{b}I$$

Substituting back:

$$I = \frac◆LB◆e^{ax}\sin bx◆RB◆◆LB◆b◆RB◆ - \frac{a}{b}\left(-\frac◆LB◆e^{ax}\cos bx◆RB◆◆LB◆b◆RB◆ + \frac{a}{b}I\right)$$

$$I = \frac◆LB◆e^{ax}\sin bx◆RB◆◆LB◆b◆RB◆ + \frac◆LB◆ae^{ax}\cos bx◆RB◆◆LB◆b^2◆RB◆ - \frac{a^2}{b^2}I$$

$$I\left(1 + \frac{a^2}{b^2}\right) = e^{ax}\left(\frac◆LB◆\sin bx◆RB◆◆LB◆b◆RB◆ + \frac◆LB◆a\cos bx◆RB◆◆LB◆b^2◆RB◆\right)$$

$$\boxed{I = \frac◆LB◆e^{ax}(a\cos bx + b\sin bx)◆RB◆◆LB◆a^2 + b^2◆RB◆ + C}$$

:::tip tip original integral reappears — solve for it algebraically. Always keep $u = e^{ax}$ on
Both applications.
:::

### 1.3 Reduction formulae

A **reduction formula** expresses an integral $I_n$ (depending on a parameter $n$) in terms of
$I_{n-1}$ or $I_{n-2}$.

### Proof of the reduction formula for $I_n = \int_0^{\pi/2} \sin^n x\,dx$

Write $I_n = \int_0^{\pi/2}\sin^{n-1}x \cdot \sin x\,dx$.

Let $u = \sin^{n-1}x$, $dv = \sin x\,dx$. Then:

$$du = (n-1)\sin^{n-2}x\cos x\,dx, \quad v = -\cos x$$

$$I_n = \bigl[-\sin^{n-1}x\cos x\bigr]_0^{\pi/2} + (n-1)\int_0^{\pi/2}\sin^{n-2}x\cos^2 x\,dx$$

The boundary term vanishes: at $x = 0$$\sin 0 = 0$; at $x = \pi/2$$\cos(\pi/2) = 0$.

Using $\cos^2 x = 1 - \sin^2 x$:

$$I_n = (n-1)\int_0^{\pi/2}\sin^{n-2}x\,dx - (n-1)\int_0^{\pi/2}\sin^n x\,dx$$

$$I_n = (n-1)I_{n-2} - (n-1)I_n$$

$$nI_n = (n-1)I_{n-2}$$

$$\boxed{I_n = \frac{n-1}{n}\,I_{n-2}, \quad n \geq 2}$$

The base cases are $I_0 = \displaystyle\int_0^{\pi/2}1\,dx = \dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$ and
$I_1 = \displaystyle\int_0^{\pi/2}\sin x\,dx = 1$.

**Example.** Using the reduction formula,
$I_4 = \dfrac{3}{4}I_2 = \dfrac{3}{4}\cdot\dfrac{1}{2}I_0 = \dfrac{3}{4}\cdot\dfrac{1}{2}\cdot\dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ = \dfrac◆LB◆3\pi◆RB◆◆LB◆16◆RB◆$.

:::warning warning $0$ and $\pi/2$. For general limits, the boundary term must be evaluated. :::

**Example.** Find a reduction formula for $I_n = \displaystyle\int x^n e^x\,dx$.

Let $u = x^n$$dv = e^x\,dx$. Then $du = nx^{n-1}\,dx$$v = e^x$.

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
And $\arctan$ terms.

**Example.** $\displaystyle\int \frac{3x + 1}{x^2 + 2x + 5}\,dx$.

Complete the square: $x^2 + 2x + 5 = (x+1)^2 + 4$.

Split the numerator to match the derivative of the denominator:

$$\frac{3x+1}{x^2+2x+5} = \frac◆LB◆\frac{3}{2}(2x+2) + 1 - 3◆RB◆◆LB◆x^2+2x+5◆RB◆ = \frac{3}{2}\cdot\frac{2x+2}{x^2+2x+5} - \frac{2}{(x+1)^2+4}$$

$$\int \frac{3x+1}{x^2+2x+5}\,dx = \frac{3}{2}\ln(x^2+2x+5) - 2\cdot\frac{1}{2}\arctan\!\left(\frac{x+1}{2}\right) + C$$

$$= \frac{3}{2}\ln(x^2+2x+5) - \arctan\!\left(\frac{x+1}{2}\right) + C$$

:::tip tip into a multiple of $(2x + b)$ plus a constant, (3) the $(2x+b)$ part gives $\ln$The
Constant gives $\arctan$.
:::

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

$$\boxed{\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{a^2-x^2}◆RB◆\,dx = \arcsin\frac{x}{a} + C}$$

$$\boxed{\int \frac{1}{a^2-x^2}\,dx = \frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right| + C}$$

### Proof of $\int \frac{1}{a^2+x^2}\,dx = \frac{1}{a}\arctan\frac{x}{a} + C$

Let $x = a\tan\theta$So $dx = a\sec^2\theta\,d\theta$.

$$\int \frac◆LB◆1◆RB◆◆LB◆a^2 + a^2\tan^2\theta◆RB◆\cdot a\sec^2\theta\,d\theta = \int \frac◆LB◆a\sec^2\theta◆RB◆◆LB◆a^2\sec^2\theta◆RB◆\,d\theta = \frac{1}{a}\int 1\,d\theta = \frac◆LB◆\theta◆RB◆◆LB◆a◆RB◆ + C$$

Since $\theta = \arctan(x/a)$:

$$\int \frac{1}{a^2+x^2}\,dx = \frac{1}{a}\arctan\frac{x}{a} + C \quad \blacksquare$$

### Proof of $\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{a^2-x^2}◆RB◆\,dx = \arcsin\frac{x}{a} + C$

Let $x = a\sin\theta$So $dx = a\cos\theta\,d\theta$ and $\sqrt{a^2 - x^2} = a\cos\theta$ (for
$|\theta| \leq \pi/2$).

$$\int \frac◆LB◆a\cos\theta◆RB◆◆LB◆a\cos\theta◆RB◆\,d\theta = \int 1\,d\theta = \theta + C = \arcsin\frac{x}{a} + C \quad \blacksquare$$

### Proof of $\int \frac{1}{a^2-x^2}\,dx = \frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right| + C$

By partial fractions:

$$\frac{1}{a^2-x^2} = \frac{1}{(a-x)(a+x)} = \frac{1}{2a}\left(\frac{1}{a-x} + \frac{1}{a+x}\right)$$

$$\int \frac{1}{a^2-x^2}\,dx = \frac{1}{2a}\bigl[-\ln|a-x| + \ln|a+x|\bigr] + C = \frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right| + C \quad \blacksquare$$

### 3.2 More general forms

$$\int \frac{1}{a^2 + (x+b)^2}\,dx = \frac{1}{a}\arctan\frac{x+b}{a} + C$$

$$\int \frac◆LB◆1◆RB◆◆LB◆\sqrt{a^2 - (x+b)^2}◆RB◆\,dx = \arcsin\frac{x+b}{a} + C$$

These follow directly from the standard forms via the substitution $u = x + b$.

:::warning warning $\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{a^2-x^2}◆RB◆$ (gives $\arcsin$), and
$\dfrac{1}{a^2-x^2}$ (gives a logarithmic form). The square root makes the difference.
:::

<hr />

## 4. Differentiation of Inverse Trigonometric Functions

### 4.1 Derivatives

$$\boxed{\frac{d}{dx}\arcsin x = \frac◆LB◆1◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆, \quad |x| < 1}$$

$$\boxed{\frac{d}{dx}\arccos x = -\frac◆LB◆1◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆, \quad |x| < 1}$$

$$\boxed{\frac{d}{dx}\arctan x = \frac{1}{1+x^2}}$$

### Proof of $\frac{d}{dx}\arctan x = \frac{1}{1+x^2}$

Let $y = \arctan x$. Then $x = \tan y$.

Differentiating implicitly with respect to $x$:

$$1 = \sec^2 y \cdot \frac{dy}{dx}$$

$$\frac{dy}{dx} = \frac◆LB◆1◆RB◆◆LB◆\sec^2 y◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆1 + \tan^2 y◆RB◆ = \frac{1}{1+x^2} \quad \blacksquare$$

### Proof of $\frac{d}{dx}\arcsin x = \frac◆LB◆1◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆$

Let $y = \arcsin x$. Then $x = \sin y$.

Differentiating implicitly:

$$1 = \cos y \cdot \frac{dy}{dx}$$

Since $\arcsin x$ has range $[-\pi/2, \pi/2]$We have $\cos y \geq 0$So
$\cos y = \sqrt◆LB◆1-\sin^2 y◆RB◆ = \sqrt{1-x^2}$.

$$\frac{dy}{dx} = \frac◆LB◆1◆RB◆◆LB◆\cos y◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆ \quad \blacksquare$$

### 4.2 Chain rule with inverse trig functions

**Example.** $\dfrac{d}{dx}\arcsin(3x) = \dfrac◆LB◆3◆RB◆◆LB◆\sqrt{1-9x^2}◆RB◆$.

**Example.**
$\dfrac{d}{dx}\arctan\!\left(\dfrac{x}{2}\right) = \dfrac{1/2}{1 + x^2/4} = \dfrac{2}{4+x^2}$.

<hr />

## 5. Volumes of Revolution

### 5.1 Rotation about the $x$-axis

**Definition.** The volume generated by rotating the region bounded by $y = f(x)$The $x$-axis,
$x = a$And $x = b$ about the $x$-axis is:

$$\boxed{V = \pi\int_a^b y^2\,dx = \pi\int_a^b [f(x)]^2\,dx}$$

### 5.2 Rotation about the $y$-axis

**Definition.** The volume generated by rotating the region bounded by $x = g(y)$The $y$-axis,
$y = c$And $y = d$ about the $y$-axis is:

$$\boxed{V = \pi\int_c^d x^2\,dy = \pi\int_c^d [g(y)]^2\,dy}$$

### 5.3 Parametric curves

When a curve is given parametrically by $x = x(t)$, $y = y(t)$:

- Rotation about the $x$-axis: $V = \pi\displaystyle\int_{t_1}^{t_2} y^2\,\frac{dx}{dt}\,dt$
- Rotation about the $y$-axis: $V = \pi\displaystyle\int_{t_1}^{t_2} x^2\,\frac{dy}{dt}\,dt$

:::warning The parametric volume formula uses $\dfrac{dx}{dt}$ or $\dfrac{dy}{dt}$ as appropriate.
Do not forget this factor — it is a very common error.
:::

**Example.** Find the volume generated by rotating the curve $y = \sqrt{x}$ from $x = 0$ to $x = 4$
About the $x$-axis.

$$V = \pi\int_0^4 (\sqrt{x})^2\,dx = \pi\int_0^4 x\,dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi$$

**Example.** The curve $x = 2\cos t$, $y = 2\sin t$ for $0 \leq t \leq \pi$ is rotated about the
$x$-axis. Find the volume.

$$V = \pi\int_0^{\pi} (2\sin t)^2 \cdot \frac{dx}{dt}\,dt = \pi\int_0^{\pi} 4\sin^2 t \cdot (-2\sin t)\,dt$$

$$= -8\pi\int_0^{\pi}\sin^3 t\,dt = 8\pi\int_0^{\pi}\sin^3 t\,dt$$

Using $\sin^3 t = \sin t(1-\cos^2 t)$ and the substitution $u = \cos t$:

$$= 8\pi\int_{-1}^{1}(1-u^2)\,du = 8\pi\left[u - \frac{u^3}{3}\right]_{-1}^1 = 8\pi\left(\frac{2}{3} - \left(-\frac{2}{3}\right)\right) = \frac◆LB◆32\pi◆RB◆◆LB◆3◆RB◆$$

<hr />

## 6. Arc Length and Surface Area of Revolution

### 6.1 Arc length

**Theorem.** For a curve $y = f(x)$ from $x = a$ to $x = b$:

$$\boxed{s = \int_a^b \sqrt◆LB◆1 + \left(\frac{dy}{dx}\right)^2◆RB◆\,dx}$$

For a curve given parametrically by $x = x(t)$, $y = y(t)$ from $t = t_1$ to $t = t_2$:

$$\boxed{s = \int_{t_1}^{t_2} \sqrt◆LB◆\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2◆RB◆\,dt}$$

**Derivation (Cartesian).** The arc length element $ds$ satisfies $ds^2 = dx^2 + dy^2$ by the
Pythagorean theorem applied to an infinitesimal segment. Therefore:

$$ds = \sqrt◆LB◆1 + \left(\frac{dy}{dx}\right)^2◆RB◆\,dx$$

Integrating from $a$ to $b$ gives the total arc length.

**Example.** Find the arc length of $y = \ln(\cos x)$ from $x = 0$ to $x = \pi/3$.

$$\frac{dy}{dx} = \frac◆LB◆-\sin x◆RB◆◆LB◆\cos x◆RB◆ = -\tan x$$

$$s = \int_0^{\pi/3}\sqrt◆LB◆1+\tan^2 x◆RB◆\,dx = \int_0^{\pi/3}\sec x\,dx = \Bigl[\ln|\sec x + \tan x|\Bigr]_0^{\pi/3}$$

$$= \ln(2 + \sqrt{3}) - \ln(1) = \ln(2+\sqrt{3})$$

### 6.2 Surface area of revolution

**Theorem.** The surface area generated by rotating $y = f(x)$ from $x = a$ to $x = b$ about the
$x$-axis:

$$\boxed{S = 2\pi\int_a^b y\,\sqrt◆LB◆1 + \left(\frac{dy}{dx}\right)^2◆RB◆\,dx}$$

For a parametric curve rotated about the $x$-axis:

$$\boxed{S = 2\pi\int_{t_1}^{t_2} y\,\sqrt◆LB◆\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2◆RB◆\,dt}$$

**Example.** Find the surface area generated by rotating $y = x^2$ from $x = 0$ to $x = 1$ about the
$x$-axis.

$$S = 2\pi\int_0^1 x^2\sqrt{1+4x^2}\,dx$$

Let $x = \frac{1}{2}\tan\theta$, $dx = \frac{1}{2}\sec^2\theta\,d\theta$. When $x = 0$ $\theta = 0$;
when $x = 1$, $\theta = \arctan 2$.

$$
S = 2\pi\int_0^{\arctan 2}\frac◆LB◆\tan^2\theta◆RB◆◆LB◆4◆RB◆\cdot\sec\theta\cdot\frac{1}{2}\sec^2\theta\,d\theta
= \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\int_0^{\arctan 2}\tan^2\theta\sec^3\theta\,d\theta
$$

Using $\tan^2\theta = \sec^2\theta - 1$ and integrating by parts with $u = \sec\theta$
$dv = \sec^2\theta\,d\theta$:

This integral evaluates to
$\dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\left[\dfrac{1}{4}\sec\theta\tan\theta + \dfrac{1}{4}\ln|\sec\theta+\tan\theta| - \dfrac{1}{4}\sec\theta\tan\theta + \dfrac{1}{8}\ln|\sec\theta+\tan\theta|\right]_0^{\arctan 2}$.

Simplifying with $\sec(\arctan 2) = \sqrt{5}$ and $\tan(\arctan 2) = 2$:

$$S = \frac◆LB◆9\pi\sqrt{5}◆RB◆◆LB◆16◆RB◆ - \frac◆LB◆\pi◆RB◆◆LB◆32◆RB◆\ln(2+\sqrt{5})$$

:::info CIE (9231) P2 requires arc length and surface area of revolution. Edexcel FP2 covers arc
Length but surface area appears less frequently. AQA covers both in Paper 1. OCR (A) covers arc
Length in Paper 1.
:::

<hr />

## 7. Summary of Key Results

| Integral                                                    | Result                                                             |
| ----------------------------------------------------------- | ------------------------------------------------------------------ |
| $\displaystyle\int\frac{1}{a^2+x^2}\,dx$                    | $\dfrac{1}{a}\arctan\dfrac{x}{a}+C$                                |
| $\displaystyle\int\frac◆LB◆1◆RB◆◆LB◆\sqrt{a^2-x^2}◆RB◆\,dx$ | $\arcsin\dfrac{x}{a}+C$                                            |
| $\displaystyle\int\frac{1}{a^2-x^2}\,dx$                    | $\dfrac{1}{2a}\ln\left\|\dfrac{a+x}{a-x}\right\|+C$                |
| $\dfrac{d}{dx}\arcsin x$                                    | $\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆$                              |
| $\dfrac{d}{dx}\arctan x$                                    | $\dfrac{1}{1+x^2}$                                                 |
| Vol. About $x$-axis                                         | $\pi\displaystyle\int_a^b y^2\,dx$                                 |
| Arc length                                                  | $\displaystyle\int\sqrt◆LB◆1+\left(\frac{dy}{dx}\right)^2◆RB◆\,dx$ |

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
First: $u = x^3$$dv = e^{-x}\,dx$. $du = 3x^2\,dx$$v = -e^{-x}$.

$\displaystyle\int x^3 e^{-x}\,dx = -x^3 e^{-x} + 3\int x^2 e^{-x}\,dx$

Second: $u = x^2$$dv = e^{-x}\,dx$. $\int x^2 e^{-x}\,dx = -x^2 e^{-x} + 2\int x e^{-x}\,dx$.

Third: $u = x$$dv = e^{-x}\,dx$.
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
Write $\cos^n x = \cos^{n-1}x \cdot \cos x$ and apply integration by parts with $u = \cos^{n-1}x$$dv = \cos x\,dx$. Use $\sin^2 x = 1 - \cos^2 x$.
</details>

<details>
<summary>Answer 2</summary>
$I_n = \int\cos^{n-1}x\cos x\,dx$. Let $u = \cos^{n-1}x$$dv = \cos x\,dx$.

$du = -(n-1)\cos^{n-2}x\sin x\,dx$$v = \sin x$.

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
Find the volume generated by rotating the region bounded by $y = x^2$$y = 0$$x = 0$$x = 2$ about
The $y$-axis.
</details>

<details>
<summary>Hint 5</summary>
Express $x$ in terms of $y$ ($x = \sqrt{y}$) and integrate with respect to $y$ from $0$ to $4$Or use the
Shell method: $V = 2\pi\int_0^2 x\cdot x^2\,dx$.
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
$\dfrac{d}{dx}\bigl[x\arcsin x + \sqrt{1-x^2}\bigr] = \arcsin x + \dfrac◆LB◆x◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆ + \dfrac◆LB◆-x◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆ = \arcsin x$.

Therefore $\displaystyle\int \arcsin x\,dx = x\arcsin x + \sqrt{1-x^2} + C$.

$\displaystyle\int_0^{1/2}\arcsin x\,dx = \left[x\arcsin x + \sqrt{1-x^2}\right]_0^{1/2} = \frac{1}{2}\cdot\frac◆LB◆\pi◆RB◆◆LB◆6◆RB◆ + \frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ - 1 = \frac◆LB◆\pi◆RB◆◆LB◆12◆RB◆ + \frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ - 1$.

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
$\displaystyle\int_0^{\infty}\frac{1}{4+x^2}\,dx = \left[\frac{1}{2}\arctan\frac{x}{2}\right]_0^{\infty} = \frac{1}{2}\cdot\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ - 0 = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$.
</details>

<details>
<summary>Problem 9</summary>
The curve $x = t^2$$y = t^3$ for $0 \leq t \leq 2$ is rotated about the $x$-axis. Find the volume of
Revolution.
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
Let $I = \displaystyle\int e^x\sin 2x\,dx$. First: $u = e^x$$dv = \sin 2x\,dx$. $du = e^x\,dx$$v = -\frac{1}{2}\cos 2x$.

$I = -\frac{1}{2}e^x\cos 2x + \frac{1}{2}\int e^x\cos 2x\,dx$.

Second on $\int e^x\cos 2x\,dx$: $u = e^x$$dv = \cos 2x\,dx$. $du = e^x\,dx$
$v = \frac{1}{2}\sin 2x$.

$\int e^x\cos 2x\,dx = \frac{1}{2}e^x\sin 2x - \frac{1}{2}\int e^x\sin 2x\,dx = \frac{1}{2}e^x\sin 2x - \frac{1}{2}I$.

$I = -\frac{1}{2}e^x\cos 2x + \frac{1}{4}e^x\sin 2x - \frac{1}{4}I$.

$\frac{5}{4}I = e^x\left(\frac◆LB◆\sin 2x◆RB◆◆LB◆4◆RB◆ - \frac◆LB◆\cos 2x◆RB◆◆LB◆2◆RB◆\right)$.

$\boxed{I = \frac◆LB◆e^x(\sin 2x - 2\cos 2x)◆RB◆◆LB◆5◆RB◆ + C}$

</details>

:::

---

## 8. Advanced Worked Examples

### Example 8.1: Leibniz's rule for higher derivatives of a product

**Problem.** If $y = x^2 e^{3x}$Find $\dfrac{d^4 y}{dx^4}$.

**Solution.** We use Leibniz's rule:
$(uv)^{(n)} = \displaystyle\sum_{k=0}^{n} \binom{n}{k} u^{(k)} v^{(n-k)}$.

Let $u = x^2$ and $v = e^{3x}$.

- $u' = 2x$$u'' = 2$$u''' = 0$$u^{(4)} = 0$.
- $v^{(k)} = 3^k e^{3x}$ for all $k$.

$$\frac{d^4 y}{dx^4} = \binom{4}{0} x^2 \cdot 3^4 e^{3x} + \binom{4}{1} 2x \cdot 3^3 e^{3x} + \binom{4}{2} 2 \cdot 3^2 e^{3x} + 0 + 0$$

$$= 81x^2 e^{3x} + 4 \cdot 54x e^{3x} + 6 \cdot 18 e^{3x}$$

$$\boxed{= (81x^2 + 216x + 108)e^{3x}}$$

### Example 8.2: Reduction formula for $\int x^n e^x\,dx$

**Problem.** Establish and use a reduction formula for $I_n = \int x^n e^x\,dx$.

**Solution.** Using integration by parts with $u = x^n$$dv = e^x\,dx$:

$$I_n = x^n e^x - \int nx^{n-1} e^x\,dx = x^n e^x - nI_{n-1}$$

Therefore $\boxed{I_n = x^n e^x - nI_{n-1}}$ with $I_0 = e^x + C$.

To find $I_3$:

$I_1 = x e^x - e^x$$I_2 = x^2 e^x - 2x e^x + 2e^x$$I_3 = x^3 e^x - 3x^2 e^x + 6x e^x - 6e^x$.

$$\boxed{I_3 = (x^3 - 3x^2 + 6x - 6)e^x + C}$$

### Example 8.3: Improper integral convergence test

**Problem.** Determine whether $\displaystyle\int_0^1 \frac◆LB◆1◆RB◆◆LB◆\sqrt{x}◆RB◆\,dx$ converges,
And evaluate if it does.

**Solution.** The integrand is undefined at $x = 0$. Write:

$$\int_0^1 x^{-1/2}\,dx = \lim_{a \to 0^+} \int_a^1 x^{-1/2}\,dx = \lim_{a \to 0^+} \left[2x^{1/2}\right]_a^1 = \lim_{a \to 0^+} (2 - 2\sqrt{a}) = 2$$

Since the limit exists and is finite, the integral converges.
$\boxed{\displaystyle\int_0^1 \frac◆LB◆1◆RB◆◆LB◆\sqrt{x}◆RB◆\,dx = 2}$

### Example 8.4: Integration using the $t = \tan(x/2)$ substitution

**Problem.** Evaluate $\displaystyle\int_0^{\pi/2} \frac◆LB◆1◆RB◆◆LB◆1 + \sin x◆RB◆\,dx$ using the
Weierstrass substitution.

**Solution.** Let $t = \tan(x/2)$So $\sin x = \dfrac{2t}{1+t^2}$ and $dx = \dfrac{2\,dt}{1+t^2}$.

When $x = 0$: $t = 0$. When $x = \pi/2$: $t = 1$.

$$\int_0^1 \frac◆LB◆1◆RB◆◆LB◆1 + \frac{2t}{1+t^2}◆RB◆ \cdot \frac{2\,dt}{1+t^2} = \int_0^1 \frac{2\,dt}{(1+t^2) + 2t} = \int_0^1 \frac{2\,dt}{t^2 + 2t + 1} = \int_0^1 \frac{2\,dt}{(t+1)^2}$$

$$= \left[-\frac{2}{t+1}\right]_0^1 = -1 + 2 = \boxed{1}$$

### Example 8.5: Differentiation of parametric arc length

**Problem.** A curve is given by $x = t - \sin t$, $y = 1 - \cos t$ for $0 \leq t \leq 2\pi$. Find
The total arc length.

**Solution.** $\dfrac{dx}{dt} = 1 - \cos t$, $\dfrac{dy}{dt} = \sin t$.

$$s = \int_0^{2\pi} \sqrt◆LB◆(1-\cos t)^2 + \sin^2 t◆RB◆\,dt = \int_0^{2\pi} \sqrt◆LB◆1 - 2\cos t + \cos^2 t + \sin^2 t◆RB◆\,dt$$

$$= \int_0^{2\pi} \sqrt◆LB◆2 - 2\cos t◆RB◆\,dt = \int_0^{2\pi} \sqrt◆LB◆4\sin^2(t/2)◆RB◆\,dt = \int_0^{2\pi} 2|\sin(t/2)|\,dt$$

For $0 \leq t \leq 2\pi$, $\sin(t/2) \geq 0$So:

$$s = 2\int_0^{2\pi} \sin(t/2)\,dt = 2\left[-2\cos(t/2)\right]_0^{2\pi} = 2(2 + 2) = \boxed{8}$$

### Example 8.6: Taylor series approach to a difficult limit

**Problem.** Evaluate $\displaystyle\lim_{x \to 0} \frac◆LB◆x - \sin x◆RB◆◆LB◆x^3◆RB◆$.

**Solution.** Expand $\sin x$ as a Maclaurin series:

$$\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots$$

$$\frac◆LB◆x - \sin x◆RB◆◆LB◆x^3◆RB◆ = \frac◆LB◆x - \left(x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots\right)◆RB◆◆LB◆x^3◆RB◆ = \frac◆LB◆\frac{x^3}{6} - \frac{x^5}{120} + \cdots◆RB◆◆LB◆x^3◆RB◆ = \frac{1}{6} - \frac{x^2}{120} + \cdots$$

Taking $x \to 0$:
$\boxed{\displaystyle\lim_{x \to 0} \frac◆LB◆x - \sin x◆RB◆◆LB◆x^3◆RB◆ = \frac{1}{6}}$

### Example 8.7: Integration involving inverse trigonometric functions

**Problem.** Evaluate $\displaystyle\int \arcsin x\,dx$.

**Solution.** Use integration by parts with $u = \arcsin x$, $dv = dx$:

$$du = \frac◆LB◆1◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆\,dx, \quad v = x$$

$$\int \arcsin x\,dx = x\arcsin x - \int \frac◆LB◆x◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆\,dx$$

For the second integral, let $w = 1 - x^2$, $dw = -2x\,dx$:

$$\int \frac◆LB◆x◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆\,dx = -\sqrt{1-x^2}$$

$$\boxed{\int \arcsin x\,dx = x\arcsin x + \sqrt{1-x^2} + C}$$

---

## 9. Common Pitfalls

| Pitfall                                                                         | Correct Approach                                                                             |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------- |
| Forgetting the chain rule when differentiating composite inverse trig functions | Always write $\dfrac{d}{dx}\!\left[\arcsin(u)\right] = \dfrac◆LB◆u'◆RB◆◆LB◆\sqrt{1-u^2}◆RB◆$ |
| Using $\ln                                                                      | x                                                                                            | $ before checking if the integral is improper | Check for discontinuities in the interval first |
| Forgetting $+C$ on every antiderivative                                         | Every indefinite integral needs an arbitrary constant                                        |
| Applying reduction formulae without checking the base case                      | Always state $I_0$ or $I_1$ explicitly                                                       |
| Confusing $\dfrac{d^n y}{dx^n}$ notation with $\left(\dfrac{dy}{dx}\right)^n$   | $\dfrac{d^n y}{dx^n}$ is the $n$-th derivative, not the $n$-th power                         |

---

## 10. Additional Exam-Style Questions

### Question 8

Using the substitution $u = e^x$Find $\displaystyle\int \frac{e^x}{e^{2x} + 1}\,dx$.

<details>
<summary>Solution</summary>

$u = e^x$, $du = e^x\,dx$.

$$\int \frac{du}{u^2 + 1} = \arctan u + C = \boxed{\arctan(e^x) + C}$$

</details>

### Question 9

The reduction formula $I_n = \displaystyle\int_0^{\pi/4} \tan^n x\,dx$ satisfies
$I_n = \dfrac{1}{n-1} - I_{n-2}$ for $n \geq 2$. Given $I_0 = \dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$ and
$I_1 = \dfrac{1}{2}\ln 2$Find $I_3$.

<details>
<summary>Solution</summary>

$I_3 = \dfrac{1}{2} - I_1 = \dfrac{1}{2} - \dfrac{1}{2}\ln 2 = \dfrac{1}{2}(1 - \ln 2)$.

To verify: $I_2 = \dfrac{1}{1} - I_0 = 1 - \dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$. Then
$I_3 = \dfrac{1}{2} - I_1 = \dfrac{1}{2} - \dfrac{1}{2}\ln 2$. Consistent.
$\boxed{I_3 = \dfrac{1}{2}(1 - \ln 2)}$

</details>

### Question 10

Find the area enclosed by the curve $x = t^2$, $y = t^3 - t$ for $-1 \leq t \leq 1$.

<details>
<summary>Solution</summary>

Using the parametric area formula $A = \displaystyle\int y\,\frac{dx}{dt}\,dt$:

$$A = \int_{-1}^{1} (t^3 - t)(2t)\,dt = 2\int_{-1}^{1} (t^4 - t^2)\,dt = 2\left[\frac{t^5}{5} - \frac{t^3}{3}\right]_{-1}^{1}$$

Since $t^5 - \frac{5}{3}t^3$ is odd (each term is odd), the integral from $-1$ to $1$ is zero.

$\boxed{A = 0}$ (the curve traces back over itself symmetrically).

</details>

### Question 11

**Prove that** $\dfrac{d}{dx}\!\left[\arctan x\right] = \dfrac{1}{1+x^2}$ from first principles
Using implicit differentiation.

<details>
<summary>Solution</summary>

Let $y = \arctan x$So $x = \tan y$. Differentiating implicitly with respect to $x$:

$$1 = \sec^2 y \cdot \frac{dy}{dx}$$

$$\frac{dy}{dx} = \cos^2 y = \frac◆LB◆1◆RB◆◆LB◆\sec^2 y◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆1 + \tan^2 y◆RB◆ = \frac{1}{1 + x^2}$$

$\blacksquare$

</details>

### Question 12

Evaluate $\displaystyle\int_0^1 \frac◆LB◆\ln x◆RB◆◆LB◆1+x◆RB◆\,dx$Expressing your answer in terms Of
$\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2}$.

<details>
<summary>Solution</summary>

Expand $\dfrac{1}{1+x} = \displaystyle\sum_{n=0}^{\infty} (-1)^n x^n$ for $|x| < 1$:

$$\int_0^1 \ln x \sum_{n=0}^{\infty} (-1)^n x^n\,dx = \sum_{n=0}^{\infty} (-1)^n \int_0^1 x^n \ln x\,dx$$

Using integration by parts or the standard result
$\displaystyle\int_0^1 x^n \ln x\,dx = -\frac{1}{(n+1)^2}$:

$$= -\sum_{n=0}^{\infty} \frac{(-1)^n}{(n+1)^2} = -\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^2} = \sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$$

This equals $-\dfrac◆LB◆\pi^2◆RB◆◆LB◆12◆RB◆$.

</details>

---

## 11. Connections to Other Topics

### 11.1 Further calculus and differential equations

Integration techniques (substitution, parts, partial fractions) are essential tools for solving
Differential equations. See
[Differential Equations](/docs/alevel/further-maths/pure-mathematics/differential-equations).

### 11.2 Calculus and Maclaurin series

Taylor and Maclaurin expansions provide powerful tools for evaluating integrals that cannot be found
In closed form. See
[Maclaurin and Taylor Series](/docs/alevel/further-maths/pure-mathematics/maclaurin-taylor-series).

### 11.3 Calculus and mechanics

Arc length and area calculations are used extensively in mechanics for work-energy problems. See
[Circular Motion](/docs/alevel/further-maths/further-mechanics/further-circular-motion).

### 11.4 Calculus and hyperbolic functions

The inverse hyperbolic functions arise from integration:
$\displaystyle\int \frac◆LB◆dx◆RB◆◆LB◆\sqrt{x^2+a^2}◆RB◆ = \operatorname{arsinh}(x/a) + C$. See
[Hyperbolic Functions](/docs/alevel/further-maths/pure-mathematics/hyperbolic-functions).

---

## 12. Advanced Integration Techniques

### 12.1 Integration by parts — LIATE rule

When choosing $u$ and $dv$ for integration by parts, use the LIATE priority:

- **L**ogarithmic functions
- **I**nverse trigonometric functions
- **A**lgebraic functions (polynomials)
- **T**rigonometric functions
- **E**xponential functions

The function higher on the list should be chosen as $u$.

### 12.2 The Weierstrass substitution

For integrals involving rational functions of $\sin x$ and $\cos x$The substitution $t = \tan(x/2)$
converts them to rational functions of $t$:

$\sin x = \dfrac{2t}{1+t^2}$$\cos x = \dfrac{1-t^2}{1+t^2}$$dx = \dfrac{2\,dt}{1+t^2}$.

### 12.3 Recognising standard integral forms

| Form                                                          | Result                    |
| ------------------------------------------------------------- | ------------------------- | ---- | ---- |
| $\displaystyle\int \frac{f'(x)}{f(x)}\,dx$                    | $\ln                      | f(x) | + C$ |
| $\displaystyle\int \frac◆LB◆f'(x)◆RB◆◆LB◆\sqrt{f(x)}◆RB◆\,dx$ | $2\sqrt{f(x)} + C$        |
| $\displaystyle\int f(x) \cdot f'(x)\,dx$                      | $\dfrac{[f(x)]^2}{2} + C$ |

---

## 13. Summary of Key Results

| Result                       | Formula                                                                     |
| ---------------------------- | --------------------------------------------------------------------------- |
| Integration by parts         | $\displaystyle\int u\,dv = uv - \int v\,du$                                 |
| Reduction formula (by parts) | Express $I_n$ in terms of $I_{n-1}$ or $I_{n-2}$                            |
| Arc length (Cartesian)       | $s = \displaystyle\int_a^b \sqrt◆LB◆1+\left(\frac{dy}{dx}\right)^2◆RB◆\,dx$ |
| Arc length (parametric)      | $s = \displaystyle\int_\alpha^\beta \sqrt◆LB◆\dot{x}^2+\dot{y}^2◆RB◆\,dt$   |
| Area under parametric curve  | $A = \displaystyle\int y\frac{dx}{dt}\,dt$                                  |
| Surface of revolution        | $S = 2\pi\displaystyle\int_a^b y\sqrt{1+(y')^2}\,dx$                        |
| Derivative of $\arcsin x$    | $\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{1-x^2}◆RB◆$                                       |
| Derivative of $\arctan x$    | $\dfrac{1}{1+x^2}$                                                          |
| Improper integral test       | $\displaystyle\int_a^\infty f(x)\,dx = \lim_{b\to\infty}\int_a^b f(x)\,dx$  |

---

## 14. Further Exam-Style Questions

### Question 13

Using integration by parts, evaluate $\displaystyle\int x^3 e^{-x}\,dx$.

<details>
<summary>Solution</summary>

Let $u = x^3$$dv = e^{-x}\,dx$. $du = 3x^2\,dx$$v = -e^{-x}$.

$\int x^3 e^{-x}\,dx = -x^3 e^{-x} + 3\int x^2 e^{-x}\,dx$.

Repeating:
$\int x^2 e^{-x}\,dx = -x^2 e^{-x} + 2\int xe^{-x}\,dx = -x^2 e^{-x} - 2xe^{-x} + 2\int e^{-x}\,dx$.

$= -x^2 e^{-x} - 2xe^{-x} - 2e^{-x}$.

Therefore: $\int x^3 e^{-x}\,dx = -x^3 e^{-x} - 3x^2 e^{-x} - 6xe^{-x} - 6e^{-x} + C$.

$\boxed{= -e^{-x}(x^3 + 3x^2 + 6x + 6) + C}$

</details>

### Question 14

Find the arc length of the curve $y = \ln(\cos x)$ from $x = 0$ to $x = \pi/4$.

<details>
<summary>Solution</summary>

$y' = -\tan x$. $1 + (y')^2 = 1 + \tan^2 x = \sec^2 x$.

$s = \displaystyle\int_0^{\pi/4} \sec x\,dx = [\ln|\sec x + \tan x|]_0^{\pi/4} = \ln(\sqrt{2}+1) - \ln(1) = \boxed{\ln(\sqrt{2}+1)}$.

</details>

### Question 15

**Prove that**
$\displaystyle\int_0^{\pi/2} \sin^n x\,dx = \dfrac{n-1}{n} \cdot \dfrac{n-3}{n-2} \cdots \times \begin{cases} 1 & n \text{ odd} \\ \dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ & n \text{ even}\end{cases}$
(Wallis' formula).

<details>
<summary>Solution</summary>

Let $I_n = \displaystyle\int_0^{\pi/2} \sin^n x\,dx$.

Integration by parts with $u = \sin^{n-1}x$$dv = \sin x\,dx$:

$I_n = [-\cos x \sin^{n-1}x]_0^{\pi/2} + (n-1)\displaystyle\int_0^{\pi/2} \cos^2 x \sin^{n-2}x\,dx$

$= 0 + (n-1)\displaystyle\int_0^{\pi/2} (1-\sin^2 x)\sin^{n-2}x\,dx = (n-1)(I_{n-2} - I_n)$.

$nI_n = (n-1)I_{n-2}$So $\boxed{I_n = \dfrac{n-1}{n}I_{n-2}}$.

Base cases: $I_0 = \pi/2$$I_1 = 1$.

For even $n$:
$I_n = \dfrac{n-1}{n} \cdot \dfrac{n-3}{n-2} \cdots \dfrac{1}{2} \cdot \dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$.

For odd $n$: $I_n = \dfrac{n-1}{n} \cdot \dfrac{n-3}{n-2} \cdots \dfrac{2}{3} \cdot 1$.
$\blacksquare$

</details>

---

## 15. Advanced Topics

### 15.1 The gamma function and factorial

The gamma function extends the factorial: $\Gamma(n) = (n-1)!$ for positive integers, and
$\Gamma(x) = \displaystyle\int_0^{\infty} t^{x-1}e^{-t}\,dt$ for $x > 0$.

Wallis' formula leads to the important result: $\Gamma(1/2) = \sqrt◆LB◆\pi◆RB◆$.

### 15.2 Frullani's integral

For suitable functions $f$:
$\displaystyle\int_0^{\infty} \frac{f(ax)-f(bx)}{x}\,dx = (f(0)-f(\infty))\ln\frac{b}{a}$.

Example: $\displaystyle\int_0^{\infty} \frac{e^{-ax}-e^{-bx}}{x}\,dx = \ln\frac{b}{a}$.

### 15.3 Differentiation under the integral sign

Leibniz's rule:
$\dfrac◆LB◆d◆RB◆◆LB◆d\alpha◆RB◆\displaystyle\int_a^b f(x,\alpha)\,dx = \int_a^b \frac◆LB◆\partial f◆RB◆◆LB◆\partial\alpha◆RB◆\,dx$.

This is a powerful technique for evaluating integrals that depend on a parameter.

### 15.4 Improper integrals — comparison test

If $0 \leq f(x) \leq g(x)$ for $x \geq a$ and $\displaystyle\int_a^{\infty} g(x)\,dx$ converges,
Then $\displaystyle\int_a^{\infty} f(x)\,dx$ also converges.

---

## 16. Further Exam-Style Questions

### Question 16

Evaluate $\displaystyle\int_0^{\infty} xe^{-x}\,dx$ and relate it to the mean of the exponential
Distribution.

<details>
<summary>Solution</summary>

Integration by parts with $u = x$$dv = e^{-x}\,dx$:

$= [-xe^{-x}]_0^{\infty} + \displaystyle\int_0^{\infty} e^{-x}\,dx = 0 + 1 = \boxed{1}$.

This equals $E(X)$ for $X \sim \mathrm{Exp}(1)$Confirming the result $E(X) = 1/\lambda$ with
$\lambda = 1$.

</details>

### Question 17

**Prove that** $\displaystyle\int_0^{\pi/2} \sin^2 x\cos^2 x\,dx = \frac◆LB◆\pi◆RB◆◆LB◆16◆RB◆$.

<details>
<summary>Solution</summary>

$\sin^2 x\cos^2 x = \dfrac◆LB◆\sin^2 2x◆RB◆◆LB◆4◆RB◆ = \dfrac◆LB◆1-\cos 4x◆RB◆◆LB◆8◆RB◆$.

$\displaystyle\int_0^{\pi/2} \frac◆LB◆1-\cos 4x◆RB◆◆LB◆8◆RB◆\,dx = \frac{1}{8}\!\left[x-\frac◆LB◆\sin 4x◆RB◆◆LB◆4◆RB◆\right]_0^{\pi/2} = \frac{1}{8}\cdot\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ = \boxed{\dfrac◆LB◆\pi◆RB◆◆LB◆16◆RB◆}$.
$\blacksquare$

</details>

### Question 18

Use integration by parts twice to evaluate $\displaystyle\int e^x\cos x\,dx$.

<details>
<summary>Solution</summary>

$I = \displaystyle\int e^x\cos x\,dx = e^x\sin x - \int e^x\sin x\,dx = e^x\sin x - (-e^x\cos x + \int e^x\cos x\,dx)$.

$I = e^x\sin x + e^x\cos x - I$.

$2I = e^x(\sin x+\cos x)$.

$\boxed{I = \dfrac◆LB◆e^x(\sin x+\cos x)◆RB◆◆LB◆2◆RB◆ + C}$

</details>

---

## 17. Further Exam-Style Questions

### Question 19

Evaluate $\displaystyle\int_0^1 \frac{x^3}{1+x^2}\,dx$.

<details>
<summary>Solution</summary>

Let $u = 1+x^2$$du = 2x\,dx$. Note $x^2 = u-1$So
$x^3\,dx = x^2 \cdot x\,dx = (u-1)\cdot\dfrac{du}{2}$.

$\displaystyle\int_0^1 \frac{x^3}{1+x^2}\,dx = \frac{1}{2}\int_1^2 \frac{u-1}{u}\,du = \frac{1}{2}\int_1^2 \!\left(1-\frac{1}{u}\right)du$

$= \frac{1}{2}\Big[u-\ln u\Big]_1^2 = \frac{1}{2}(2-\ln 2 - 1) = \boxed{\frac{1}{2}(1-\ln 2)}$.

</details>

### Question 20

**Prove that** the function $F(x) = \displaystyle\int_0^x \frac{dt}{1+t^4}$ is increasing and
Bounded above.

<details>
<summary>Solution</summary>

$F'(x) = \dfrac{1}{1+x^4} > 0$ for all $x \geq 0$So $F$ is strictly increasing. ✓

$F(x) < F(\infty) = \displaystyle\int_0^{\infty} \frac{dt}{1+t^4} < \int_0^{\infty} \frac{dt}{1+t^2} = \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$.
✓

Therefore $F$ is increasing and bounded above by $\pi/2$. $\blacksquare$

</details>

