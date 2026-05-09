---
title: Polar Coordinates
description:
  "A-Level Further Maths notes on Polar Coordinates: Board Coverage; 1. Converting Between Cartesian and Polar; 1.1 Definitions; 1.2 Converting from polar to Ca."
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

:::info
Polar coordinates appear in Edexcel FP2 and CIE P2. OCR (A) does not cover this topic. AQA
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

:::warning
When converting from Cartesian to polar, always check the quadrant of the point. The
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

:::tip
A limacon $r = a + b\cos\theta$ has an inner loop if $b > a$, a dimple if $a < b \leq 2a$
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

:::warning
The area formula uses $r^2$, not $r$. When computing the area between two curves,
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
Find the intersection angles by solving $3\cos\theta = 1+\cos\theta$. Then integrate $r_{\mathrm{outer{}}^2 - r_{\mathrm{inner{}}^2$.
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

---

## 7. Advanced Worked Examples

### Example 7.1: Area between two curves with careful intersection analysis

**Problem.** Find the area of the region that lies inside both $r = 1 + \cos\theta$ and $r = 3\cos\theta$.

**Solution.** Setting $1 + \cos\theta = 3\cos\theta$:

$$1 = 2\cos\theta \implies \theta = \pm\frac{\pi}{3}$$

Both curves are symmetric about the initial line, so we compute from $0$ to $\pi/3$ and double.

For $0 \leq \theta \leq \pi/3$: $3\cos\theta \geq 1 + \cos\theta$ (since $2\cos\theta \geq 1$), so $r_{\text{outer{}} = 3\cos\theta$ and $r_{\text{inner{}} = 1 + \cos\theta$.

$$A = 2\cdot\frac{1}{2}\int_0^{\pi/3}\bigl[9\cos^2\theta - (1+\cos\theta)^2\bigr]\,d\theta = \int_0^{\pi/3}\bigl[9\cos^2\theta - 1 - 2\cos\theta - \cos^2\theta\bigr]\,d\theta$$

$$= \int_0^{\pi/3}\bigl[8\cos^2\theta - 2\cos\theta - 1\bigr]\,d\theta = \int_0^{\pi/3}\bigl[4(1+\cos 2\theta) - 2\cos\theta - 1\bigr]\,d\theta$$

$$= \int_0^{\pi/3}(3 + 4\cos 2\theta - 2\cos\theta)\,d\theta = \left[3\theta + 2\sin 2\theta - 2\sin\theta\right]_0^{\pi/3}$$

$$= \pi + 2\cdot\frac{\sqrt{3}}{2} - 2\cdot\frac{\sqrt{3}}{2} = \pi$$

### Example 7.2: Converting Cartesian to polar and sketching

**Problem.** Convert $x^2 + y^2 = 2y$ to polar form and sketch the curve.

**Solution.** Substituting $x = r\cos\theta$, $y = r\sin\theta$, $r^2 = x^2 + y^2$:

$$r^2 = 2r\sin\theta \implies r = 2\sin\theta \quad (r \neq 0)$$

This is a circle with centre $(0, 1)$ and radius $1$ (since $r = 2a\sin\theta$ with $a = 1$).

The curve passes through the pole at $\theta = 0$ and $\theta = \pi$, and has maximum $r = 2$ at $\theta = \pi/2$.

### Example 7.3: Finding where tangents are vertical or horizontal

**Problem.** For the cardioid $r = 2(1 - \cos\theta)$, find all points where the tangent is horizontal.

**Solution.** $r = 2(1 - \cos\theta)$, $\dfrac{dr}{d\theta} = 2\sin\theta$.

Horizontal tangents occur when $\dfrac{dy}{d\theta} = 0$:

$$\frac{dr}{d\theta}\sin\theta + r\cos\theta = 0 \implies 2\sin^2\theta + 2(1 - \cos\theta)\cos\theta = 0$$

$$2\sin^2\theta + 2\cos\theta - 2\cos^2\theta = 0 \implies 2(1 - \cos^2\theta) + 2\cos\theta - 2\cos^2\theta = 0$$

$$2 - 2\cos^2\theta + 2\cos\theta - 2\cos^2\theta = 0 \implies 2 - 4\cos^2\theta + 2\cos\theta = 0$$

$$2\cos^2\theta - \cos\theta - 1 = 0 \implies (2\cos\theta + 1)(\cos\theta - 1) = 0$$

$\cos\theta = -1/2 \implies \theta = 2\pi/3$ or $\theta = 4\pi/3$.
$\cos\theta = 1 \implies \theta = 0$.

At $\theta = 2\pi/3$: $r = 2(1 + 1/2) = 3$. Point: $(-3/2, 3\sqrt{3}/2)$.
At $\theta = 4\pi/3$: $r = 2(1 + 1/2) = 3$. Point: $(-3/2, -3\sqrt{3}/2)$.
At $\theta = 0$: $r = 0$ (the cusp -- not a smooth horizontal tangent).

### Example 7.4: Volume of revolution in polar coordinates

**Problem.** The region enclosed by $r = 1 + \cos\theta$ is rotated about the initial line. Find the volume of revolution.

**Solution.** Using the parametric volume formula with $y = r\sin\theta = (1+\cos\theta)\sin\theta$ and $dx = \dfrac{dx}{d\theta}\,d\theta$:

$x = r\cos\theta = (1+\cos\theta)\cos\theta$, $\dfrac{dx}{d\theta} = -\sin\theta - 2\cos\theta\sin\theta = -\sin\theta(1 + 2\cos\theta)$.

By symmetry, integrate from $0$ to $\pi$ and double:

$$V = 2\pi\int_0^{\pi} y^2\,\frac{dx}{d\theta}\,d\theta = 2\pi\int_0^{\pi}(1+\cos\theta)^2\sin^2\theta\cdot[-\sin\theta(1+2\cos\theta)]\,d\theta$$

Let $u = \cos\theta$, $du = -\sin\theta\,d\theta$. When $\theta = 0$: $u = 1$. When $\theta = \pi$: $u = -1$.

$$V = 2\pi\int_{-1}^{1}(1+u)^2(1-u^2)(1+2u)\,du$$

Expanding $(1+u)^2(1-u^2)(1+2u) = (1+2u+u^2)(1-u^2)(1+2u)$.

Note: $(1+u)^2(1-u^2) = (1+u)^2(1-u)(1+u) = (1+u)^3(1-u)$.

So the integrand is $(1+u)^4(1-u)$.

Let $v = 1+u$:

$$V = 2\pi\int_0^2 v^4(2-v)\,dv = 2\pi\int_0^2(2v^4 - v^5)\,dv = 2\pi\left[\frac{2v^5}{5} - \frac{v^6}{6}\right]_0^2$$

$$= 2\pi\left(\frac{64}{5} - \frac{64}{6}\right) = 2\pi\cdot\frac{64(6-5)}{30} = \frac{128\pi}{15}$$

---

## 8. Connections to Other Topics

### 8.1 Polar coordinates and complex numbers

The polar form of a complex number $z = re^{i\theta}$ is the same as polar coordinates $(r, \theta)$. Multiplication of complex numbers corresponds to combining polar coordinates: $r_1 e^{i\theta_1} \cdot r_2 e^{i\theta_2} = r_1 r_2 e^{i(\theta_1+\theta_2)}$. See [Complex Numbers](/docs/docs_alevel/further-maths/pure-mathematics/01-complex-numbers).

### 8.2 Polar area and further calculus

The polar area formula $\frac{1}{2}\int r^2\,d\theta$ is a direct application of integration techniques. Setting up these integrals requires care with limits. See [Further Calculus](/docs/docs_alevel/further-maths/pure-mathematics/04-further-calculus).

### 8.3 Polar curves and parametric differentiation

The gradient formula for polar curves is derived from parametric differentiation. The expressions for $dx/d\theta$ and $dy/d\theta$ use the product rule. See [Further Calculus](/docs/docs_alevel/further-maths/pure-mathematics/04-further-calculus).

---

## 9. Additional Exam-Style Questions

### Question 11

A curve has polar equation $r = a(1 + \cos\theta)$ where $a > 0$.

**(a)** Find the area enclosed by the curve.

**(b)** Find the equation of the tangent at $\theta = \pi/2$ in Cartesian form.

<details>
<summary>Solution</summary>

**(a)** By symmetry:

$$A = 2\cdot\frac{1}{2}\int_0^{\pi}a^2(1+\cos\theta)^2\,d\theta = a^2\int_0^{\pi}\left(\frac{3}{2}+2\cos\theta+\frac{\cos 2\theta}{2}\right)d\theta = \frac{3\pi a^2}{2}$$

**(b)** At $\theta = \pi/2$: $r = a$, point $(0, a)$.

$dr/d\theta = -a\sin\theta$, so $dr/d\theta|_{\pi/2} = -a$.

$$\frac{dy}{dx} = \frac{(-a)(1) + a(0)}{(-a)(0) - a(1)} = \frac{-a}{-a} = 1$$

Tangent: $y - a = 1(x - 0)$, i.e., $y = x + a$.

</details>

### Question 12

Find the area of the finite region bounded by the curve $r = 2 + \cos\theta$ and the lines $\theta = 0$ and $\theta = \pi$.

<details>
<summary>Solution</summary>

$$A = \frac{1}{2}\int_0^{\pi}(2+\cos\theta)^2\,d\theta = \frac{1}{2}\int_0^{\pi}(4 + 4\cos\theta + \cos^2\theta)\,d\theta$$

$$= \frac{1}{2}\int_0^{\pi}\left(\frac{9}{2} + 4\cos\theta + \frac{\cos 2\theta}{2}\right)d\theta = \frac{1}{2}\left[\frac{9\theta}{2} + 4\sin\theta + \frac{\sin 2\theta}{4}\right]_0^{\pi} = \frac{9\pi}{4}$$

</details>

### Question 13

**Prove that** the polar curve $r = \dfrac{a}{\cos\theta}$ is a vertical line, and state its Cartesian equation.

<details>
<summary>Solution</summary>

$r = \dfrac{a}{\cos\theta} \implies r\cos\theta = a \implies x = a$.

This is the vertical line $x = a$. $\blacksquare$

</details>

### Question 14

The curve $C$ has polar equation $r = 4\sin 2\theta$ for $0 \leq \theta \leq \pi/2$.

**(a)** Find the area of one petal.

**(b)** Find the angle at which the tangent to $C$ is parallel to the initial line.

<details>
<summary>Solution</summary>

**(a)** One petal of $r = 4\sin 2\theta$ is traced from $\theta = 0$ to $\theta = \pi/2$:

$$A = \frac{1}{2}\int_0^{\pi/2}16\sin^2 2\theta\,d\theta = 8\int_0^{\pi/2}\frac{1-\cos 4\theta}{2}\,d\theta = 4\left[\theta - \frac{\sin 4\theta}{4}\right]_0^{\pi/2} = 2\pi$$

**(b)** Tangent parallel to the initial line means $dy/d\theta = 0$:

$r = 4\sin 2\theta$, $dr/d\theta = 8\cos 2\theta$.

$\dfrac{dy}{d\theta} = 8\cos 2\theta\sin\theta + 4\sin 2\theta\cos\theta = 8\cos 2\theta\sin\theta + 8\sin\theta\cos^2\theta$

$= 8\sin\theta(\cos 2\theta + \cos^2\theta) = 8\sin\theta(2\cos^2\theta - 1 + \cos^2\theta) = 8\sin\theta(3\cos^2\theta - 1)$

$= 0$ when $\sin\theta = 0$ (i.e., $\theta = 0$, where $r = 0$) or $\cos^2\theta = 1/3$, i.e., $\cos\theta = \pm 1/\sqrt{3}$.

For $0 \leq \theta \leq \pi/2$: $\theta = \arccos(1/\sqrt{3})$.

</details>

### Question 15

Find the maximum distance from the origin to any point on the curve $r = 2 + 3\sin\theta$.

<details>
<summary>Solution</summary>

The distance from the origin is $|r|$. Since $2 + 3\sin\theta \geq 2 - 3 = -1$, the maximum of $|r|$ could occur at the maximum of $r$ or the minimum of $r$ (if negative).

$dr/d\theta = 3\cos\theta = 0 \implies \theta = \pi/2$ or $\theta = 3\pi/2$.

At $\theta = \pi/2$: $r = 5$ (maximum).
At $\theta = 3\pi/2$: $r = -1$.

$|r| = 5$ at $\theta = \pi/2$ and $|r| = 1$ at $\theta = 3\pi/2$.

The maximum distance is $\boxed{5}$.

</details>

---

## 8. Advanced Worked Examples

### Example 8.1: Area enclosed by a limacon

**Problem.** Find the area enclosed by the limacon $r = 2 + \cos\theta$.

**Solution.** Since $r = 2 + \cos\theta > 0$ for all $\theta$, the curve is a single loop.

$$A = \frac{1}{2}\int_0^{2\pi} (2+\cos\theta)^2\,d\theta = \frac{1}{2}\int_0^{2\pi} (4 + 4\cos\theta + \cos^2\theta)\,d\theta$$

$$= \frac{1}{2}\int_0^{2\pi} \!\left(4 + 4\cos\theta + \frac{1+\cos 2\theta}{2}\right)d\theta = \frac{1}{2}\int_0^{2\pi} \!\left(\frac{9}{2} + 4\cos\theta + \frac{\cos 2\theta}{2}\right)d\theta$$

$$= \frac{1}{2}\left[\frac{9\theta}{2} + 4\sin\theta + \frac{\sin 2\theta}{4}\right]_0^{2\pi} = \frac{1}{2} \cdot 9\pi = \boxed{\frac{9\pi}{2}}$$

### Example 8.2: Tangents to a polar curve

**Problem.** Find the angle $\psi$ between the tangent and the radius vector for $r = a(1+\cos\theta)$ at $\theta = \pi/2$.

**Solution.** $\tan\psi = \dfrac{r}{dr/d\theta}$.

$dr/d\theta = -a\sin\theta$. At $\theta = \pi/2$: $r = a$, $dr/d\theta = -a$.

$\tan\psi = \dfrac{a}{-a} = -1 \implies \psi = \dfrac{3\pi}{4}$ (or $135°$).

The tangent makes an angle of $135°$ with the outward radius vector.

### Example 8.3: Cartesian equation of a spiral

**Problem.** Convert the spiral $r = e^{2\theta}$ to Cartesian form.

**Solution.** $r = e^{2\theta} \implies \ln r = 2\theta \implies \theta = \dfrac{1}{2}\ln r$.

Since $\theta = \arctan(y/x)$ and $r = \sqrt{x^2+y^2}$:

$$\arctan\!\left(\frac{y}{x}\right) = \frac{1}{2}\ln(x^2+y^2)$$

$$\frac{y}{x} = \exp\!\left(\frac{1}{2}\ln(x^2+y^2)\right) = \sqrt{x^2+y^2}$$

$$\frac{y^2}{x^2} = x^2 + y^2 \implies y^2 = x^2(x^2+y^2)$$

### Example 8.4: Area between two polar curves

**Problem.** Find the area inside $r = 3\cos\theta$ and outside $r = 1 + \cos\theta$.

**Solution.** First find intersection points: $3\cos\theta = 1 + \cos\theta \implies 2\cos\theta = 1 \implies \theta = \pm\pi/3$.

$$A = \frac{1}{2}\int_{-\pi/3}^{\pi/3} \!\left[(3\cos\theta)^2 - (1+\cos\theta)^2\right]\,d\theta$$

$$= \frac{1}{2}\int_{-\pi/3}^{\pi/3} (9\cos^2\theta - 1 - 2\cos\theta - \cos^2\theta)\,d\theta = \frac{1}{2}\int_{-\pi/3}^{\pi/3} (8\cos^2\theta - 2\cos\theta - 1)\,d\theta$$

$$= \frac{1}{2}\int_{-\pi/3}^{\pi/3} \!\left(4 + 4\cos 2\theta - 2\cos\theta - 1\right)d\theta = \frac{1}{2}\int_{-\pi/3}^{\pi/3} (3 + 4\cos 2\theta - 2\cos\theta)\,d\theta$$

$$= \frac{1}{2}\left[3\theta + 2\sin 2\theta - 2\sin\theta\right]_{-\pi/3}^{\pi/3}$$

$$= \frac{1}{2}\left[\pi + 2\sin\frac{2\pi}{3} - 2\sin\frac{\pi}{3} - \left(-\pi - 2\sin\frac{2\pi}{3} + 2\sin\frac{\pi}{3}\right)\right]$$

$$= \frac{1}{2}\left[2\pi + 2\sqrt{3} - \sqrt{3} + 2\sqrt{3} - \sqrt{3}\right] = \frac{1}{2}(2\pi + 2\sqrt{3}) = \boxed{\pi + \sqrt{3}}$$

### Example 8.5: Converting a parametric curve to polar

**Problem.** The curve $x = \dfrac{2t}{1+t^2}$, $y = \dfrac{1-t^2}{1+t^2}$ is given in parametric form. Show it is a circle in polar form.

**Solution.** $x^2 + y^2 = \dfrac{4t^2 + (1-t^2)^2}{(1+t^2)^2} = \dfrac{4t^2 + 1 - 2t^2 + t^4}{(1+t^2)^2} = \dfrac{(1+t^2)^2}{(1+t^2)^2} = 1$.

So $r = 1$ for all $t$. This is the unit circle.

$\cos\theta = \dfrac{x}{r} = \dfrac{2t}{1+t^2}$, $\sin\theta = \dfrac{1-t^2}{1+t^2}$. Using $t = \tan(\theta/2)$:

$\cos\theta = \cos\theta$ and $\sin\theta = \sin\theta$. Consistent.

### Example 8.6: Arc length of a cardioid

**Problem.** Find the total arc length of the cardioid $r = a(1 + \cos\theta)$.

**Solution.** $s = \displaystyle\int_0^{2\pi} \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2}\,d\theta$.

$r = a(1+\cos\theta)$, $dr/d\theta = -a\sin\theta$.

$r^2 + (dr/d\theta)^2 = a^2(1+\cos\theta)^2 + a^2\sin^2\theta = a^2(1+2\cos\theta+\cos^2\theta+\sin^2\theta) = 2a^2(1+\cos\theta) = 4a^2\cos^2(\theta/2)$.

$$s = \int_0^{2\pi} 2a|\cos(\theta/2)|\,d\theta$$

For $0 \leq \theta \leq 2\pi$: $\cos(\theta/2) \geq 0$ when $0 \leq \theta \leq \pi$ and $\leq 0$ when $\pi \leq \theta \leq 2\pi$.

$$s = 2a\!\left[\int_0^{\pi} \cos(\theta/2)\,d\theta + \int_{\pi}^{2\pi} (-\cos(\theta/2))\,d\theta\right] = 2a[2+2] = \boxed{8a}$$

---

## 9. Common Pitfalls

| Pitfall | Correct Approach |
|---|---|
| Forgetting the $\frac{1}{2}$ in the polar area formula | $A = \dfrac{1}{2}\displaystyle\int r^2\,d\theta$, not $\int r^2\,d\theta$ |
| Not checking if $r$ changes sign when finding enclosed areas | If $r < 0$, the curve is on the opposite side; split the integral at sign changes |
| Confusing the angle $\psi$ (tangent-radius angle) with $\theta$ | $\tan\psi = r / (dr/d\theta)$; the tangent to the curve makes angle $\theta + \psi$ with the initial line |
| Using the wrong limits for symmetric curves | Exploit symmetry: if the curve is symmetric about $\theta = 0$, integrate from $0$ to $\pi$ and double |

---

## 10. Additional Exam-Style Questions

### Question 8

Find the area of the region enclosed by one loop of the curve $r^2 = 4\cos 2\theta$.

<details>
<summary>Solution</summary>

This is a lemniscate. One loop is traced for $-\pi/4 \leq \theta \leq \pi/4$.

$$A = \frac{1}{2}\int_{-\pi/4}^{\pi/4} 4\cos 2\theta\,d\theta = 2\!\left[\frac{\sin 2\theta}{2}\right]_{-\pi/4}^{\pi/4} = 2(1-(-1)) = 4 \text{... wait{}$$

$A = \int_{-\pi/4}^{\pi/4} 2\cos 2\theta\,d\theta = [\sin 2\theta]_{-\pi/4}^{\pi/4} = 1 - (-1) = 2$. Wait, using the formula:

$A = \dfrac{1}{2}\displaystyle\int r^2\,d\theta = \dfrac{1}{2}\int_{-\pi/4}^{\pi/4} 4\cos 2\theta\,d\theta = 2[\sin 2\theta]_{-\pi/4}^{\pi/4} = 2 \times 2 = \boxed{4}$.

</details>

### Question 9

**Prove that** the tangent to $r = a\sec\theta$ is perpendicular to the radius vector at every point.

<details>
<summary>Solution</summary>

$r = a\sec\theta \implies dr/d\theta = a\sec\theta\tan\theta$.

$\tan\psi = \dfrac{r}{dr/d\theta} = \dfrac{a\sec\theta}{a\sec\theta\tan\theta} = \cot\theta$.

So $\psi = \pi/2 - \theta$. The tangent makes angle $\theta + \psi = \pi/2$ with the initial line, i.e., perpendicular to the radius vector. $\blacksquare$

</details>

### Question 10

Find the Cartesian equation of the curve $r = 2a\cos\theta + 2b\sin\theta$ and identify it.

<details>
<summary>Solution</summary>

$r = 2a\cos\theta + 2b\sin\theta \implies r^2 = 2ar\cos\theta + 2br\sin\theta$.

$$x^2 + y^2 = 2ax + 2by \implies (x-a)^2 + (y-b)^2 = a^2 + b^2$$

This is a circle with centre $(a, b)$ and radius $\sqrt{a^2+b^2}$.

</details>

---

## 11. Connections to Other Topics

### 11.1 Polar coordinates and complex numbers

The polar form $z = r(\cos\theta+i\sin\theta)$ is identical to polar coordinates $(r,\theta)$. See [Complex Numbers](/docs/docs_alevel/further-maths/pure-mathematics/01-complex-numbers).

### 11.2 Polar curves and calculus

Finding tangents, areas, and arc lengths in polar coordinates requires differentiation and integration. See [Further Calculus](/docs/docs_alevel/further-maths/pure-mathematics/04-further-calculus).

### 11.3 Polar coordinates and parametric equations

Polar curves are a special case of parametric equations with $x = r(\theta)\cos\theta$ and $y = r(\theta)\sin\theta$.

---

## 12. Key Results Summary

| Quantity | Formula |
|---|---|
| Cartesian from polar | $x = r\cos\theta$, $y = r\sin\theta$ |
| Polar from Cartesian | $r = \sqrt{x^2+y^2}$, $\theta = \arctan(y/x)$ |
| Polar area | $A = \dfrac{1}{2}\displaystyle\int_\alpha^\beta r^2\,d\theta$ |
| Polar arc length | $s = \displaystyle\int_\alpha^\beta \sqrt{r^2+\left(\dfrac{dr}{d\theta}\right)^2}\,d\theta$ |
| Tangent-radius angle | $\tan\psi = \dfrac{r}{dr/d\theta}$ |
| Tangent to $x$-axis | $\dfrac{dy}{dx} = \dfrac{r'\sin\theta + r\cos\theta}{r'\cos\theta - r\sin\theta}$ |

---

## 13. Further Exam-Style Questions

### Question 11

A curve has polar equation $r = a(1+\cos\theta)$ (cardioid). Find the area enclosed by the curve.

<details>
<summary>Solution</summary>

Since $r > 0$ for all $\theta$, integrate from $0$ to $2\pi$:

$A = \dfrac{1}{2}\displaystyle\int_0^{2\pi} a^2(1+\cos\theta)^2\,d\theta = \dfrac{a^2}{2}\displaystyle\int_0^{2\pi} \!\left(\dfrac{3}{2}+2\cos\theta+\dfrac{\cos 2\theta}{2}\right)d\theta$

$= \dfrac{a^2}{2}\!\left[\dfrac{3\theta}{2}+2\sin\theta+\dfrac{\sin 2\theta}{4}\right]_0^{2\pi} = \dfrac{a^2}{2}\cdot 3\pi = \boxed{\dfrac{3\pi a^2}{2}}$

</details>

### Question 12

**Prove that** the curve $r = 2a\cos\theta$ is a circle of radius $a$ centred at $(a, 0)$.

<details>
<summary>Solution</summary>

$r = 2a\cos\theta \implies r^2 = 2ar\cos\theta \implies x^2+y^2 = 2ax \implies (x-a)^2+y^2 = a^2$.

This is a circle with centre $(a,0)$ and radius $a$. $\blacksquare$

</details>

---

## 14. Advanced Topics

### 14.1 The pedal equation

The pedal equation of a curve gives the distance $p$ from the origin to the tangent as a function of $r$:

$$p = r\sin\psi = \frac{r^2}{\sqrt{r^2+(dr/d\theta)^2}}$$

### 14.2 The $p-r$ equation

For a conic with focus at the origin and directrix at distance $d$: $r = \dfrac{ed}{1+e\cos\theta}$ where $e$ is the eccentricity.

- $e < 1$: ellipse
- $e = 1$: parabola
- $e > 1$: hyperbola

### 14.3 Rose curves

Curves of the form $r = a\cos(n\theta)$ or $r = a\sin(n\theta)$ produce rose curves.

- If $n$ is odd: $n$ petals
- If $n$ is even: $2n$ petals

### 14.4 Limacons

$r = a + b\cos\theta$:
- $a > b$: dimpled limacon (no inner loop)
- $a = b$: cardioid
- $a < b$: limacon with inner loop

---

## 15. Further Exam-Style Questions

### Question 13

Sketch the curve $r = 1 + 2\cos\theta$ and find the area of the inner loop.

<details>
<summary>Solution</summary>

Since $1 + 2\cos\theta = 0$ when $\cos\theta = -1/2$, i.e., $\theta = 2\pi/3$ and $\theta = 4\pi/3$, the inner loop exists between these angles.

Area of inner loop: $A = \dfrac{1}{2}\displaystyle\int_{2\pi/3}^{4\pi/3} (1+2\cos\theta)^2\,d\theta$.

$= \dfrac{1}{2}\displaystyle\int_{2\pi/3}^{4\pi/3} (1+4\cos\theta+4\cos^2\theta)\,d\theta = \dfrac{1}{2}\displaystyle\int_{2\pi/3}^{4\pi/3} (3+4\cos\theta+2\cos 2\theta)\,d\theta$

$= \dfrac{1}{2}\!\left[3\theta+4\sin\theta+\sin 2\theta\right]_{2\pi/3}^{4\pi/3}$

$= \dfrac{1}{2}\!\left[(4\pi-2\pi)+4\!\left(-\dfrac{\sqrt{3}}{2}-\dfrac{\sqrt{3}}{2}\right)+\!\left(\dfrac{\sqrt{3}}{2}-\dfrac{\sqrt{3}}{2}\right)\right] = \dfrac{1}{2}(2\pi-4\sqrt{3}) = \boxed{\pi-2\sqrt{3}}$

</details>

### Question 14

**Prove that** the area enclosed by one petal of $r = a\cos(3\theta)$ is $\dfrac{\pi a^2}{12}$.

<details>
<summary>Solution</summary>

One petal is traced for $-\pi/6 \leq \theta \leq \pi/6$.

$A = \dfrac{1}{2}\displaystyle\int_{-\pi/6}^{\pi/6} a^2\cos^2(3\theta)\,d\theta = \dfrac{a^2}{2}\displaystyle\int_{-\pi/6}^{\pi/6} \frac{1+\cos 6\theta}{2}\,d\theta$

$= \dfrac{a^2}{4}\!\left[\theta+\dfrac{\sin 6\theta}{6}\right]_{-\pi/6}^{\pi/6} = \dfrac{a^2}{4}\!\left(\dfrac{\pi}{3}+0\right) = \boxed{\dfrac{\pi a^2}{12}}$. $\blacksquare$

</details>

---

## 16. Further Advanced Topics

### 16.1 Polar form of conics

Using the focus-directrix definition, all conics with a focus at the origin have polar equation:

$$r = \frac{ed}{1+e\cos\theta}$$

where $e$ is the eccentricity and $d$ is the distance from the focus to the directrix.

- $e = 0$: circle ($r = d$)
- $0 < e < 1$: ellipse
- $e = 1$: parabola
- $e > 1$: hyperbola

### 16.2 Spirals

- **Archimedean spiral:** $r = a\theta$ — equally spaced turns
- **Logarithmic spiral:** $r = ae^{b\theta}$ — self-similar
- **Hyperbolic spiral:** $r = a/\theta$

The logarithmic spiral appears in nature (nautilus shells, hurricanes, galaxies).

### 16.3 Tangents at the pole

If $r = 0$ at $\theta = \theta_0$, the tangent at the pole is the line $\theta = \theta_0 + \dfrac{\pi}{2}$ (perpendicular to the initial line).

### 16.4 Converting parametric curves to polar

Many parametric curves can be simplified in polar form. The cardioid, limacon, and rose curves are most naturally expressed in polar coordinates.

---

## 17. Further Exam-Style Questions

### Question 15

Find the area inside $r = 1 + \sin\theta$ and outside $r = 1$.

<details>
<summary>Solution</summary>

$1 + \sin\theta = 1$ when $\sin\theta = 0$, i.e., $\theta = 0, \pi$.

The curve $r = 1 + \sin\theta$ is a cardioid. The circle $r = 1$ is entirely inside the cardioid.

The required area is:

$A = \dfrac{1}{2}\displaystyle\int_0^{2\pi} [(1+\sin\theta)^2 - 1]\,d\theta = \dfrac{1}{2}\displaystyle\int_0^{2\pi} (2\sin\theta + \sin^2\theta)\,d\theta$

$= \dfrac{1}{2}\displaystyle\int_0^{2\pi} \!\left(2\sin\theta + \frac{1-\cos 2\theta}{2}\right)d\theta = \dfrac{1}{2}\!\left[-2\cos\theta + \frac{\theta}{2} - \frac{\sin 2\theta}{4}\right]_0^{2\pi} = \dfrac{1}{2}\cdot\dfrac{\pi}{2} = \boxed{\dfrac{\pi}{4}}$.

</details>

### Question 16

**Prove that** the spiral $r = e^{a\theta}$ intersects each radial line $\theta = \theta_0$ at exactly one point.

<details>
<summary>Solution</summary>

At $\theta = \theta_0$: $r = e^{a\theta_0}$, which is unique (single-valued function).

For a given $\theta_0$, there is exactly one value of $r$, so the spiral intersects each radial line exactly once. $\blacksquare$

</details>
