---
title: Polar Coordinates
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: polar-coordinates
sidebar_position: 5
---

## Polar Coordinates

Polar coordinates $(r, \theta)$ provide an alternative to Cartesian coordinates $(x, y)$ for
describing points in the plane. Many curves that are complicated in Cartesian form have simple and
elegant polar equations, making polar coordinates essential for advanced geometry and calculus.

<DesmosGraph title="Polar Coordinate Curves" expressions={["r=a\cos(\theta)", "r=a\sin(\theta)", "r=a(1+\cos(\theta))"]} width={800} height={500} />

Adjust the parameters in the graph above to explore the relationships between variables.

### Board Coverage

| Board      | Paper   | Notes                                                |
| ---------- | ------- | ---------------------------------------------------- |
| AQA        | Paper 1 | Polar curves, area enclosed, tangents                |
| Edexcel    | FP2     | Full coverage: conversion, sketching, area, tangents |
| OCR (A)    | —       | Not in OCR (A) specification                         |
| CIE (9231) | P2      | Full coverage: curves, area, tangents                |

:::info Polar coordinates appear in Edexcel FP2 and CIE P2. OCR (A) does not cover this topic. AQA
covers the essentials in Paper 1. The formula booklet provides the area formula.
:::

<hr />

## 1. Converting Between Cartesian and Polar

### 1.1 Definitions

**Definition.** The **polar coordinates** $(r, \theta)$ of a point $P$ in the plane are defined by:

- $r$ = the distance from the origin $O$ to $P$ (the **radial coordinate**)
- $\theta$ = the angle measured anticlockwise from the positive $x$-axis to $OP$ (the **angular
  coordinate**)

The relationship between Cartesian and polar coordinates is:

$$\boxed{x = r\cos\theta, \qquad y = r\sin\theta}$$

$$\boxed{r^2 = x^2 + y^2, \qquad \tan\theta = \frac{y}{x}}$$

### 1.2 Converting from polar to Cartesian

Given $(r, \theta)$, the Cartesian coordinates are $(r\cos\theta, r\sin\theta)$.

**Example.** Convert $(4, \pi/3)$ to Cartesian.

$x = 4\cos(\pi/3) = 4 \cdot \frac{1}{2} = 2$,
$y = 4\sin(\pi/3) = 4 \cdot \frac{\sqrt{3}}{2} = 2\sqrt{3}$.

The Cartesian coordinates are $(2, 2\sqrt{3})$.

### 1.3 Converting from Cartesian to polar

Given $(x, y)$, compute $r = \sqrt{x^2+y^2}$ and $\theta = \arctan(y/x)$ (choosing the correct
quadrant).

**Example.** Convert $(-3, 3)$ to polar.

$r = \sqrt{9+9} = 3\sqrt{2}$. The point is in the second quadrant, so
$\theta = \pi - \arctan(1) = 3\pi/4$.

The polar coordinates are $(3\sqrt{2}, 3\pi/4)$.

:::warning When converting from Cartesian to polar, always check the quadrant of the point. The
calculator value of $\arctan(y/x)$ alone is insufficient for points in quadrants II and III.
:::

<hr />

## 2. Polar Equations of Curves

### 2.1 Lines and circles

**Vertical line $x = a$:** $r\cos\theta = a$, i.e., $r = a\sec\theta$.

**Horizontal line $y = b$:** $r\sin\theta = b$, i.e., $r = b\cosec\theta$.

**Circle centre $(a, 0)$ radius $a$:** $r = 2a\cos\theta$.

**Circle centre $(0, a)$ radius $a$:** $r = 2a\sin\theta$.

**Circle centre origin radius $a$:** $r = a$.

### Proof of the polar equation $r = 2a\cos\theta$

A circle with centre $(a, 0)$ and radius $a$ has Cartesian equation $(x-a)^2 + y^2 = a^2$.

Expanding: $x^2 - 2ax + a^2 + y^2 = a^2$, so $x^2 + y^2 = 2ax$.

Substituting $x = r\cos\theta$ and $r^2 = x^2 + y^2$:

$$r^2 = 2ar\cos\theta$$

Since $r = 0$ satisfies this trivially, for $r \neq 0$:

$$\boxed{r = 2a\cos\theta} \quad \blacksquare$$

### 2.2 Cardioids

A **cardioid** has equation $r = a(1 + \cos\theta)$ or $r = a(1 + \sin\theta)$.

**Properties of $r = a(1 + \cos\theta)$:**

- Symmetry: symmetric about the initial line ($\theta = 0$), since replacing $\theta$ with $-\theta$
  gives the same $r$.
- Maximum $r$: at $\theta = 0$, $r = 2a$.
- Minimum $r$: at $\theta = \pi$, $r = 0$ (the cusp).
- Passes through the origin when $\cos\theta = -1$, i.e., $\theta = \pi$.

### 2.3 Rose curves

A **rose curve** (or rhodonea curve) has equation $r = a\sin n\theta$ or $r = a\cos n\theta$.

**Properties:**

- If $n$ is **odd**: the curve has $n$ petals, traced as $\theta$ runs from $0$ to $\pi$.
- If $n$ is **even**: the curve has $2n$ petals, traced as $\theta$ runs from $0$ to $2\pi$.

**Example.** $r = a\sin 3\theta$ has 3 petals. $r = a\cos 4\theta$ has 8 petals.

### 2.4 Spirals

An **Archimedean spiral** has equation $r = a\theta$.

A **logarithmic spiral** has equation $r = ae^{b\theta}$.

The logarithmic spiral appears frequently in nature (shells, hurricanes) because the angle between
the radius and the tangent is constant.

<hr />

## 3. Sketching Polar Curves

### 3.1 Systematic method

1. **Identify symmetry:**
   - Symmetric about the initial line ($\theta = 0$) if replacing $\theta$ with $-\theta$ gives the
     same equation.
   - Symmetric about $\theta = \pi/2$ if replacing $\theta$ with $\pi - \theta$ gives the same
     equation.
   - Symmetric about the pole if replacing $r$ with $-r$ gives the same equation.

2. **Find key values:** Evaluate $r$ at $\theta = 0, \pi/6, \pi/4, \pi/3, \pi/2, \pi, 3\pi/2, 2\pi$.

3. **Find where $r = 0$:** These are points where the curve passes through the pole.

4. **Find maximum $|r|$:** Differentiate $r$ with respect to $\theta$ and set $dr/d\theta = 0$.

5. **Trace the curve:** As $\theta$ increases, plot the corresponding $(r, \theta)$ points and join
   them smoothly.

**Example.** Sketch $r = 2 + \cos\theta$ for $0 \leq \theta \leq 2\pi$.

- Symmetric about $\theta = 0$ (since $\cos(-\theta) = \cos\theta$).
- $r(0) = 3$, $r(\pi/2) = 2$, $r(\pi) = 1$, $r(3\pi/2) = 2$.
- $r > 0$ for all $\theta$ (since $2 + \cos\theta \geq 1$).
- The curve is a **limacon with no inner loop**.

:::tip A limacon $r = a + b\cos\theta$ has an inner loop if $b > a$, a dimple if $a < b \leq 2a$
(actually $a < 2b$...), and is convex if $a \geq 2b$. Specifically:

- Inner loop: $b > a$
- Dimpled: $a < 2b$ (with $b < a$)
- Convex: $a \geq 2b$
:::
- Cardioid: $a = b$ (boundary between inner loop and dimpled)

<hr />

## 4. Area Enclosed by a Polar Curve

### 4.1 The area formula

**Theorem.** The area enclosed by the polar curve $r = f(\theta)$ between $\theta = \alpha$ and
$\theta = \beta$ is:

$$\boxed{A = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta}$$

### Proof of the polar area formula

Divide the angular range $[\alpha, \beta]$ into $n$ equal sectors of angle
$\Delta\theta = \dfrac{\beta-\alpha}{n}$.

Each sector is approximately a circular sector of radius $r(\theta_i)$ and angle $\Delta\theta$,
with area:

$$\Delta A_i \approx \frac{1}{2}r^2(\theta_i)\,\Delta\theta$$

Summing all sectors:

$$A \approx \sum_{i=1}^{n}\frac{1}{2}r^2(\theta_i)\,\Delta\theta$$

Taking the limit as $n \to \infty$:

$$A = \lim_{n\to\infty}\sum_{i=1}^{n}\frac{1}{2}r^2(\theta_i)\,\Delta\theta = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta \quad \blacksquare$$

**Example.** Find the area enclosed by one petal of $r = \cos 3\theta$.

One petal is traced from $\theta = -\pi/6$ to $\theta = \pi/6$ (where $r = 0$).

$$A = \frac{1}{2}\int_{-\pi/6}^{\pi/6}\cos^2 3\theta\,d\theta = \frac{1}{2}\int_{-\pi/6}^{\pi/6}\frac{1+\cos 6\theta}{2}\,d\theta$$

$$= \frac{1}{4}\left[\theta + \frac{\sin 6\theta}{6}\right]_{-\pi/6}^{\pi/6} = \frac{1}{4}\left(\frac{\pi}{6} - \left(-\frac{\pi}{6}\right)\right) = \frac{\pi}{12}$$

**Example.** Find the area enclosed by the cardioid $r = a(1 + \cos\theta)$.

By symmetry, compute from $0$ to $\pi$ and double:

$$A = 2\cdot\frac{1}{2}\int_0^\pi a^2(1+\cos\theta)^2\,d\theta = a^2\int_0^\pi(1+2\cos\theta+\cos^2\theta)\,d\theta$$

$$= a^2\int_0^\pi\left(1+2\cos\theta+\frac{1+\cos 2\theta}{2}\right)d\theta = a^2\int_0^\pi\left(\frac{3}{2}+2\cos\theta+\frac{\cos 2\theta}{2}\right)d\theta$$

$$= a^2\left[\frac{3\theta}{2} + 2\sin\theta + \frac{\sin 2\theta}{4}\right]_0^\pi = a^2\cdot\frac{3\pi}{2} = \boxed{\frac{3\pi a^2}{2}}$$

### 4.2 Area between two polar curves

The area between curves $r_1(\theta)$ (outer) and $r_2(\theta)$ (inner) from $\alpha$ to $\beta$:

$$A = \frac{1}{2}\int_\alpha^\beta \bigl[r_1^2(\theta) - r_2^2(\theta)\bigr]\,d\theta$$

:::warning The area formula uses $r^2$, not $r$. When computing the area between two curves,
subtract $r_2^2$ from $r_1^2$, not $r_2$ from $r_1$.
:::

<hr />

## 5. Tangents to Polar Curves

### 5.1 Gradient in polar form

Since $x = r\cos\theta$ and $y = r\sin\theta$, we can treat these as parametric equations with
parameter $\theta$:

$$\frac{dx}{d\theta} = \frac{dr}{d\theta}\cos\theta - r\sin\theta$$

$$\frac{dy}{d\theta} = \frac{dr}{d\theta}\sin\theta + r\cos\theta$$

Therefore:

$$\boxed{\frac{dy}{dx} = \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}}$$

### Proof of the tangent line formula

This follows directly from the parametric differentiation rule
$\dfrac{dy}{dx} = \dfrac{dy/d\theta}{dx/d\theta}$ applied to $x(\theta) = r(\theta)\cos\theta$ and
$y(\theta) = r(\theta)\sin\theta$, using the product rule for each derivative. $\blacksquare$

### 5.2 Tangents at the pole

The curve passes through the pole when $r = 0$. The tangent at the pole is the line
$\theta = \theta_0$ where $r(\theta_0) = 0$.

**Example.** Find the tangents at the pole for $r = \sin 3\theta$.

$r = 0$ when $\sin 3\theta = 0$, i.e., $3\theta = 0, \pi, 2\pi, 3\pi$, so
$\theta = 0, \pi/3, 2\pi/3, \pi, 4\pi/3, 5\pi/3$.

These give 6 tangent lines at the pole (consistent with the fact that $r = \sin 3\theta$ has 3
petals, each passing through the pole twice).

**Example.** Find the equation of the tangent to $r = 1 + \cos\theta$ at $\theta = \pi/3$.

$r = 1 + \cos(\pi/3) = 3/2$. The point is
$(x, y) = (r\cos\theta, r\sin\theta) = (3/4, 3\sqrt{3}/4)$.

$\dfrac{dr}{d\theta} = -\sin\theta$, so at $\theta = \pi/3$: $\dfrac{dr}{d\theta} = -\sqrt{3}/2$.

$$\frac{dy}{dx} = \frac{(-\sqrt{3}/2)(\sqrt{3}/2) + (3/2)(1/2)}{(-\sqrt{3}/2)(1/2) - (3/2)(\sqrt{3}/2)} = \frac{-3/4 + 3/4}{-\sqrt{3}/4 - 3\sqrt{3}/4} = \frac{0}{-\sqrt{3}} = 0$$

The tangent is horizontal: $y = 3\sqrt{3}/4$.

### 5.3 Horizontal and vertical tangents

**Horizontal tangents** occur when $\dfrac{dy}{d\theta} = 0$ (provided
$\dfrac{dx}{d\theta} \neq 0$):

$$\frac{dr}{d\theta}\sin\theta + r\cos\theta = 0$$

**Vertical tangents** occur when $\dfrac{dx}{d\theta} = 0$ (provided $\dfrac{dy}{d\theta} \neq 0$):

$$\frac{dr}{d\theta}\cos\theta - r\sin\theta = 0$$

<hr />

## 6. Summary of Key Results

| Result                    | Formula                                                                           |
| ------------------------- | --------------------------------------------------------------------------------- |
| Conversion                | $x = r\cos\theta$, $y = r\sin\theta$, $r^2 = x^2+y^2$                             |
| Circle $r = 2a\cos\theta$ | Centre $(a,0)$, radius $a$                                                        |
| Area                      | $A = \dfrac{1}{2}\displaystyle\int_\alpha^\beta r^2\,d\theta$                     |
| Gradient                  | $\dfrac{dy}{dx} = \dfrac{r'\sin\theta + r\cos\theta}{r'\cos\theta - r\sin\theta}$ |

<hr />

## Problems

<details>
<summary>Problem 1</summary>
Convert the Cartesian equation $x^2 + y^2 - 4x = 0$ to polar form and identify the curve.
</details>

<details>
<summary>Hint 1</summary>
Substitute $x = r\cos\theta$ and $r^2 = x^2+y^2$.
</details>

<details>
<summary>Answer 1</summary>
$r^2 - 4r\cos\theta = 0 \implies r(r - 4\cos\theta) = 0$. For $r \neq 0$: $r = 4\cos\theta$.

This is a circle with centre $(2, 0)$ and radius $2$.

</details>

<details>
<summary>Problem 2</summary>
Find the area enclosed by one petal of $r = \sin 2\theta$.
</details>

<details>
<summary>Hint 2</summary>
One petal of $\sin 2\theta$ is traced from $\theta = 0$ to $\theta = \pi/2$.
</details>

<details>
<summary>Answer 2</summary>
$A = \dfrac{1}{2}\displaystyle\int_0^{\pi/2}\sin^2 2\theta\,d\theta = \dfrac{1}{2}\int_0^{\pi/2}\dfrac{1-\cos 4\theta}{2}\,d\theta = \dfrac{1}{4}\left[\theta - \dfrac{\sin 4\theta}{4}\right]_0^{\pi/2} = \dfrac{1}{4}\cdot\dfrac{\pi}{2} = \dfrac{\pi}{8}$.
</details>

<details>
<summary>Problem 3</summary>
Find the area enclosed by the cardioid $r = 2(1 - \cos\theta)$.
</details>

<details>
<summary>Hint 3</summary>
Use symmetry about $\theta = \pi$ (or integrate from $0$ to $2\pi$). Expand $(1-\cos\theta)^2$.
</details>

<details>
<summary>Answer 3</summary>
$A = \dfrac{1}{2}\displaystyle\int_0^{2\pi}4(1-\cos\theta)^2\,d\theta = 2\int_0^{2\pi}(1 - 2\cos\theta + \cos^2\theta)\,d\theta$

$= 2\int_0^{2\pi}\left(\dfrac{3}{2} - 2\cos\theta + \dfrac{\cos 2\theta}{2}\right)d\theta = 2\left[\dfrac{3\theta}{2} - 2\sin\theta + \dfrac{\sin 2\theta}{4}\right]_0^{2\pi} = 2 \cdot 3\pi = 6\pi$.

</details>

<details>
<summary>Problem 4</summary>
Find $\dfrac{dy}{dx}$ for the curve $r = a(1+\sin\theta)$ at $\theta = \pi/6$.
</details>

<details>
<summary>Hint 4</summary>
$r = a(1+\sin\theta)$, $\dfrac{dr}{d\theta} = a\cos\theta$. Substitute into the gradient formula.
</details>

<details>
<summary>Answer 4</summary>
At $\theta = \pi/6$: $r = a(1+1/2) = 3a/2$, $dr/d\theta = a\sqrt{3}/2$.

$\dfrac{dy}{dx} = \dfrac{(a\sqrt{3}/2)(1/2) + (3a/2)(\sqrt{3}/2)}{(a\sqrt{3}/2)(\sqrt{3}/2) - (3a/2)(1/2)} = \dfrac{a\sqrt{3}/4 + 3a\sqrt{3}/4}{3a/4 - 3a/4} = \dfrac{a\sqrt{3}}{0}$

The gradient is undefined — the tangent is **vertical** at this point.

</details>

<details>
<summary>Problem 5</summary>
Find the points on $r = 4\cos\theta$ where the tangent is parallel to the initial line.
</details>

<details>
<summary>Hint 5</summary>
A tangent parallel to the initial line is horizontal: $dy/d\theta = 0$.
</details>

<details>
<summary>Answer 5</summary>
$r = 4\cos\theta$, $dr/d\theta = -4\sin\theta$.

$\dfrac{dy}{d\theta} = -4\sin\theta\sin\theta + 4\cos\theta\cos\theta = 4(\cos^2\theta - \sin^2\theta) = 4\cos 2\theta$.

$\cos 2\theta = 0 \implies 2\theta = \pi/2, 3\pi/2 \implies \theta = \pi/4, 3\pi/4$.

At $\theta = \pi/4$: $r = 2\sqrt{2}$, point $(2, 2)$. At $\theta = 3\pi/4$: $r = -2\sqrt{2}$,
equivalent to $r = 2\sqrt{2}$, $\theta = 7\pi/4$, point $(2, -2)$.

</details>

<details>
<summary>Problem 6</summary>
Find the area of the region inside $r = 3\cos\theta$ and outside $r = 1+\cos\theta$.
</details>

<details>
<summary>Hint 6</summary>
Find the intersection angles by solving $3\cos\theta = 1+\cos\theta$. Then integrate $r_{\mathrm{outer}}^2 - r_{\mathrm{inner}}^2$.
</details>

<details>
<summary>Answer 6</summary>
Intersection: $3\cos\theta = 1+\cos\theta \implies 2\cos\theta = 1 \implies \theta = \pm\pi/3$.

By symmetry, compute from $0$ to $\pi/3$ and double:

$A = 2\cdot\dfrac{1}{2}\displaystyle\int_0^{\pi/3}\bigl[9\cos^2\theta - (1+\cos\theta)^2\bigr]\,d\theta$

$= \displaystyle\int_0^{\pi/3}\bigl[9\cos^2\theta - 1 - 2\cos\theta - \cos^2\theta\bigr]\,d\theta = \int_0^{\pi/3}\bigl[8\cos^2\theta - 1 - 2\cos\theta\bigr]\,d\theta$

$= \displaystyle\int_0^{\pi/3}\left[4(1+\cos 2\theta) - 1 - 2\cos\theta\right]d\theta = \int_0^{\pi/3}\left(3 + 4\cos 2\theta - 2\cos\theta\right)d\theta$

$= \left[3\theta + 2\sin 2\theta - 2\sin\theta\right]_0^{\pi/3} = \pi + 2\cdot\dfrac{\sqrt{3}}{2} - 2\cdot\dfrac{\sqrt{3}}{2} = \pi$.

</details>

<details>
<summary>Problem 7</summary>
Convert $(-2\sqrt{2}, 2\sqrt{2})$ to polar coordinates.
</details>

<details>
<summary>Hint 7</summary>
$r = \sqrt{x^2+y^2}$ and find $\theta$ using the quadrant.
</details>

<details>
<summary>Answer 7</summary>
$r = \sqrt{8+8} = 4$. The point is in the second quadrant.

$\tan\theta = \dfrac{2\sqrt{2}}{-2\sqrt{2}} = -1$. In the second quadrant: $\theta = 3\pi/4$.

Polar coordinates: $(4, 3\pi/4)$.

</details>

<details>
<summary>Problem 8</summary>
Sketch the curve $r = \theta$ for $0 \leq \theta \leq 4\pi$. What type of curve is this?
</details>

<details>
<summary>Hint 8</summary>
This is an Archimedean spiral. As $\theta$ increases, $r$ increases linearly.
</details>

<details>
<summary>Answer 8</summary>
This is an **Archimedean spiral**. Key points:
- At $\theta = 0$: $r = 0$ (pole).
- At $\theta = \pi/2$: $r = \pi/2$ (on the line $\theta = \pi/2$).
- At $\theta = \pi$: $r = \pi$ (on the negative $x$-axis).
- At $\theta = 2\pi$: $r = 2\pi$ (one full revolution, back on the positive $x$-axis).
- At $\theta = 4\pi$: $r = 4\pi$ (two full revolutions).

The spiral winds outward with equal spacing between successive turns.

</details>

<details>
<summary>Problem 9</summary>
Find the equation of the tangent to $r = 2 + \sin\theta$ at the point where $\theta = \pi/2$.
</details>

<details>
<summary>Hint 9</summary>
Find the Cartesian coordinates of the point, then compute $dy/dx$ using the polar gradient formula.
</details>

<details>
<summary>Answer 9</summary>
At $\theta = \pi/2$: $r = 3$. Point: $(x, y) = (3\cos(\pi/2), 3\sin(\pi/2)) = (0, 3)$.

$dr/d\theta = \cos\theta$, so at $\theta = \pi/2$: $dr/d\theta = 0$.

$\dfrac{dy}{dx} = \dfrac{0\cdot 1 + 3\cdot 0}{0\cdot 0 - 3\cdot 1} = \dfrac{0}{-3} = 0$.

The tangent is horizontal: $y = 3$.

</details>

<details>
<summary>Problem 10</summary>
Find the area enclosed by the limacon $r = 1 + 2\cos\theta$ that lies inside the inner loop.
</details>

<details>
<summary>Hint 10</summary>
The inner loop occurs where $r < 0$, i.e., $1 + 2\cos\theta < 0$. Find the range of $\theta$ and integrate $\frac{1}{2}r^2\,d\theta$.
</details>

<details>
<summary>Answer 10</summary>
$r = 0$ when $1 + 2\cos\theta = 0 \implies \cos\theta = -1/2 \implies \theta = 2\pi/3, 4\pi/3$.

The inner loop is traced from $\theta = 2\pi/3$ to $\theta = 4\pi/3$.

$A = \dfrac{1}{2}\displaystyle\int_{2\pi/3}^{4\pi/3}(1+2\cos\theta)^2\,d\theta$

$= \dfrac{1}{2}\displaystyle\int_{2\pi/3}^{4\pi/3}(1+4\cos\theta+4\cos^2\theta)\,d\theta = \dfrac{1}{2}\int_{2\pi/3}^{4\pi/3}\left(3+4\cos\theta+2\cos 2\theta\right)d\theta$

$= \dfrac{1}{2}\left[3\theta + 4\sin\theta + \sin 2\theta\right]_{2\pi/3}^{4\pi/3}$

$= \dfrac{1}{2}\left[\left(4\pi - 2\sqrt{3} + \sqrt{3}/2\right) - \left(2\pi + 2\sqrt{3} - \sqrt{3}/2\right)\right]$

$= \dfrac{1}{2}\left[2\pi - 3\sqrt{3}\right] = \pi - \dfrac{3\sqrt{3}}{2}$.

</details>

:::

:::

:::

:::
