---
title: Complex Numbers
description:
  "A-Level Further Maths notes on Complex Numbers: Board Coverage; 1.1 The Argand Diagram; 1.2
  Modulus and Argument; 2. De Moivre's Theorem."
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: further-complex-numbers
sidebar_position: 1
---

## Complex Numbers

Complex numbers extend the real number system by introducing a solution to the equation
$x^2 + 1 = 0$. This seemingly abstract idea turns out to be indispensable in pure mathematics,
Engineering, and physics, providing powerful tools for analysing rotations, oscillations, and
Polynomial equations.

### Board Coverage

| Board   | Paper   | Notes                                                       |
| ------- | ------- | ----------------------------------------------------------- |
| AQA     | Paper 1 | Full coverage including transformations $w = f(z)$          |
| Edexcel | FP1/FP2 | De Moivre, roots of unity, loci in FP2                      |
| OCR (A) | Paper 1 | De Moivre, exponential form, roots of unity                 |
| CIE     | P1      | Loci required; exponential form and roots of unity in depth |

<hr />

## 1. Review of A Level Complex Numbers

**Definition.** A _complex number_ is a number of the form $z = a + bi$ where $a, b \in \mathbb{R}$
And $i$ is defined by the property $i^2 = -1$. The set of all complex numbers is denoted
$\mathbb{C}$.

We call $a$ the _real part_ (written $\operatorname{Re}(z)$) and $b$ the _imaginary part_ (written
$\operatorname{Im}(z)$). Two complex numbers are equal if and only if both their real and imaginary
Parts are equal.

### 1.1 The Argand Diagram

**Definition.** The _Argand diagram_ is a representation of $\mathbb{C}$ as a plane, where the
Horizontal axis represents $\operatorname{Re}(z)$ and the vertical axis represents
$\operatorname{Im}(z)$. The complex number $z = a + bi$ is plotted as the point $(a, b)$.

### 1.2 Modulus and Argument

**Definition.** For $z = a + bi \neq 0$:

- The _modulus_ $|z|$ is defined as $|z| = \sqrt{a^2 + b^2}$.
- The _argument_ $\arg(z)$ is the angle $\theta$ (measured anticlockwise from the positive real
  axis) such that $\tan\theta = \dfrac{b}{a}$With $-\pi < \theta \leq \pi$ (the _principal
  argument_).

$$\boxed{z = a + bi = |z|(\cos\theta + i\sin\theta) = r(\cos\theta + i\sin\theta)}$$

Where $r = |z|$ and $\theta = \arg(z)$.

### 1.3 Arithmetic with Complex Numbers

For $z_1 = a + bi$ and $z_2 = c + di$:

$$
\begin{aligned}
Z_1 + z_2 &= (a + c) + (b + d)i \\
Z_1 z_2 &= (ac - bd) + (ad + bc)i \\
\frac{z_1}{z_2} &= \frac◆LB◆z_1 \overline{z_2}◆RB◆◆LB◆|z_2|^2◆RB◆ = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}
\end{aligned}
$$

Where $\overline{z_2} = c - di$ is the _complex conjugate_ of $z_2$.

:::warning warning $\theta = \arctan(b/a)$ only gives the correct principal argument when $a > 0$.
:::

<details>
<summary>Worked Example: Modulus, argument, and polar form</summary>

Find the modulus, argument, and polar form of $z = 1 - \sqrt{3}\,i$.

$$|z| = \sqrt◆LB◆1^2 + (-\sqrt{3})^2◆RB◆ = \sqrt{1 + 3} = 2$$

Since $(a, b) = (1, -\sqrt{3})$ lies in the fourth quadrant:

$$\arg(z) = \arctan\!\left(\frac◆LB◆-\sqrt{3}◆RB◆◆LB◆1◆RB◆\right) = -\frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆$$

Polar form:
$z = 2\!\left(\cos\!\left(-\dfrac◆LB◆\pi◆RB◆◆LB◆3◆RB◆\right) + i\sin\!\left(-\dfrac◆LB◆\pi◆RB◆◆LB◆3◆RB◆\right)\right)$.

</details>

<hr />

## 2. De Moivre's Theorem

**Theorem (De Moivre).** For any integer $n$ and any angle $\theta$:

$$\boxed{\left(\cos\theta + i\sin\theta\right)^n = \cos(n\theta) + i\sin(n\theta)}$$

### Proof of De Moivre's Theorem (by induction for $n \geq 0$)

_Base case ($n = 0$):_ $(\cos\theta + i\sin\theta)^0 = 1 = \cos 0 + i\sin 0$. ✓

_Inductive step._ Assume $(\cos\theta + i\sin\theta)^k = \cos(k\theta) + i\sin(k\theta)$ for some
$k \geq 0$. Then:

$$
\begin{aligned}
(\cos\theta + i\sin\theta)^{k+1} &= (\cos\theta + i\sin\theta)^k \cdot (\cos\theta + i\sin\theta) \\
&= [\cos(k\theta) + i\sin(k\theta)] \cdot [\cos\theta + i\sin\theta] \\
&= \cos(k\theta)\cos\theta - \sin(k\theta)\sin\theta + i\,[\cos(k\theta)\sin\theta + \sin(k\theta)\cos\theta] \\
&= \cos((k+1)\theta) + i\sin((k+1)\theta)
\end{aligned}
$$

Using the compound angle identities. ✓

For negative integers, note that
$\dfrac◆LB◆1◆RB◆◆LB◆\cos\theta + i\sin\theta◆RB◆ = \cos\theta - i\sin\theta = \cos(-\theta) + i\sin(-\theta)$
So the result follows. $\square$

**Intuition.** De Moivre's theorem says that raising a complex number on the unit circle to the
$n$-th power multiplies its angle by $n$. This is because multiplication of complex numbers Adds
their arguments: $r_1 e^{i\theta_1} \cdot r_2 e^{i\theta_2} = r_1 r_2 e^{i(\theta_1 + \theta_2)}$.

### 2.1 Applications: Trigonometric Identities

De Moivre's theorem provides a systematic way to derive multiple-angle identities.

**Example.** Express $\cos 3\theta$ and $\sin 3\theta$ in terms of $\cos\theta$ and $\sin\theta$.

By De Moivre: $\cos 3\theta + i\sin 3\theta = (\cos\theta + i\sin\theta)^3$.

Expanding the RHS using the binomial theorem:

$$
\begin{aligned}
(\cos\theta + i\sin\theta)^3 &= \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta
\end{aligned}
$$

Equating real and imaginary parts:

$$\boxed{\cos 3\theta = 4\cos^3\theta - 3\cos\theta}$$

$$\boxed{\sin 3\theta = 3\sin\theta - 4\sin^3\theta}$$

### 2.2 Powers of Complex Numbers

To compute $z^n$ where $z = r(\cos\theta + i\sin\theta)$:

$$z^n = r^n\left(\cos(n\theta) + i\sin(n\theta)\right)$$

<details>
<summary>Worked Example: Computing a high power</summary>

Find $(1 + i)^{10}$.

First write in polar form:
$1 + i = \sqrt{2}\!\left(\cos\frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆ + i\sin\frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\right)$.

$$
\begin{aligned}
(1 + i)^{10} &= \left(\sqrt{2}\right)^{10}\!\left(\cos\frac◆LB◆10\pi◆RB◆◆LB◆4◆RB◆ + i\sin\frac◆LB◆10\pi◆RB◆◆LB◆4◆RB◆\right) \\
&= 32\!\left(\cos\frac◆LB◆5\pi◆RB◆◆LB◆2◆RB◆ + i\sin\frac◆LB◆5\pi◆RB◆◆LB◆2◆RB◆\right) \\
&= 32\!\left(\cos\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ + i\sin\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right) \\
&= 32(0 + i) = 32i
\end{aligned}
$$

</details>

<hr />

## 3. Roots of Unity

**Definition.** The _$n$-th roots of unity_ are the solutions to the equation $z^n = 1$ for
$n \in \mathbb{Z}^+$.

By De Moivre's theorem, writing $1 = \cos 0 + i\sin 0 = \cos(2k\pi) + i\sin(2k\pi)$ for any integer
$k$The $n$ distinct solutions are:

$$\boxed{z_k = \cos\!\left(\frac◆LB◆2k\pi◆RB◆◆LB◆n◆RB◆\right) + i\sin\!\left(\frac◆LB◆2k\pi◆RB◆◆LB◆n◆RB◆\right), \quad k = 0, 1, 2, \ldots, n-1}$$

### 3.1 Geometric Interpretation

The $n$-th roots of unity lie on the unit circle $|z| = 1$ in the Argand diagram, equally spaced at
Angles of $\dfrac◆LB◆2\pi◆RB◆◆LB◆n◆RB◆$ radians apart. They form the vertices of a regular $n$-gon
Inscribed in the unit circle, with one vertex at $z = 1$.

### 3.2 Sum and Product of Roots

Since the roots satisfy $z^n - 1 = 0$The sum of all $n$-th roots of unity is zero:

$$\sum_{k=0}^{n-1} z_k = 0$$

This follows from the coefficient of $z^{n-1}$ in $z^n - 1 = 0$ being zero (by Vieta's formulas).
Equivalently, the roots form a geometric series with ratio $\omega = e^{2\pi i/n}$ and first term 1,
Giving:

$$\sum_{k=0}^{n-1} \omega^k = \frac◆LB◆1 - \omega^n◆RB◆◆LB◆1 - \omega◆RB◆ = \frac◆LB◆1 - 1◆RB◆◆LB◆1 - \omega◆RB◆ = 0$$

The product of all $n$-th roots of unity is:

$$\prod_{k=0}^{n-1} z_k = (-1)^{n-1}$$

<details>
<summary>Worked Example: Cube roots of unity</summary>

Find all cube roots of unity and verify that their sum is zero.

$z^3 = 1 \implies z_k = \cos\!\left(\dfrac◆LB◆2k\pi◆RB◆◆LB◆3◆RB◆\right) + i\sin\!\left(\dfrac◆LB◆2k\pi◆RB◆◆LB◆3◆RB◆\right)$
For $k = 0, 1, 2$.

$$
\begin{aligned}
Z_0 &= \cos 0 + i\sin 0 = 1 \\
Z_1 &= \cos\frac◆LB◆2\pi◆RB◆◆LB◆3◆RB◆ + i\sin\frac◆LB◆2\pi◆RB◆◆LB◆3◆RB◆ = -\frac{1}{2} + \frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\,i \\
Z_2 &= \cos\frac◆LB◆4\pi◆RB◆◆LB◆3◆RB◆ + i\sin\frac◆LB◆4\pi◆RB◆◆LB◆3◆RB◆ = -\frac{1}{2} - \frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\,i
\end{aligned}
$$

Sum:
$1 - \dfrac{1}{2} + \dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\,i - \dfrac{1}{2} - \dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\,i = 0$.
✓

Product:
$1 \cdot \left(-\dfrac{1}{2} + \dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\,i\right)\left(-\dfrac{1}{2} - \dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\,i\right) = 1 \cdot \left(\dfrac{1}{4} + \dfrac{3}{4}\right) = 1 = (-1)^{3-1}$.
✓

</details>

<hr />

## 4. Exponential Form

**Definition.** The _exponential form_ of a complex number $z = r(\cos\theta + i\sin\theta)$ is:

$$\boxed{z = re^{i\theta}}$$

Where $e^{i\theta} \equiv \cos\theta + i\sin\theta$ by Euler's formula.

### Proof of Euler's Formula (from Maclaurin series)

The Maclaurin series for $e^x$, $\cos x$And $\sin x$ are:

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots$$

$$\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$$

$$\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$$

Substituting $x = i\theta$ into the series for $e^x$:

$$
\begin{aligned}
E^{i\theta} &= 1 + i\theta + \frac◆LB◆(i\theta)^2◆RB◆◆LB◆2!◆RB◆ + \frac◆LB◆(i\theta)^3◆RB◆◆LB◆3!◆RB◆ + \frac◆LB◆(i\theta)^4◆RB◆◆LB◆4!◆RB◆ + \frac◆LB◆(i\theta)^5◆RB◆◆LB◆5!◆RB◆ + \cdots \\
&= 1 + i\theta + \frac◆LB◆i^2\theta^2◆RB◆◆LB◆2!◆RB◆ + \frac◆LB◆i^3\theta^3◆RB◆◆LB◆3!◆RB◆ + \frac◆LB◆i^4\theta^4◆RB◆◆LB◆4!◆RB◆ + \frac◆LB◆i^5\theta^5◆RB◆◆LB◆5!◆RB◆ + \cdots \\
&= 1 + i\theta - \frac◆LB◆\theta^2◆RB◆◆LB◆2!◆RB◆ - \frac◆LB◆i\theta^3◆RB◆◆LB◆3!◆RB◆ + \frac◆LB◆\theta^4◆RB◆◆LB◆4!◆RB◆ + \frac◆LB◆i\theta^5◆RB◆◆LB◆5!◆RB◆ - \cdots
\end{aligned}
$$

Using $i^2 = -1$$i^3 = -i$$i^4 = 1$$i^5 = i$And so on. Grouping real and imaginary parts:

$$e^{i\theta} = \underbrace◆LB◆\left(1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots\right)◆RB◆_{=\,\cos\theta} + i\underbrace◆LB◆\left(\theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \cdots\right)◆RB◆_{=\,\sin\theta}$$

Therefore $e^{i\theta} = \cos\theta + i\sin\theta$. $\square$

### 4.1 Euler's Identity

Setting $\theta = \pi$:

$$\boxed{e^{i\pi} + 1 = 0}$$

This celebrated identity connects five fundamental constants: $e$$i$$\pi$$1$And $0$.

**Intuition.** Euler's identity says that starting at the point $1$ on the real axis and rotating by
$\pi$ radians (half a turn) on the unit circle lands you at $-1$. The exponential $e^{i\theta}$
Describes a point moving around the unit circle at a rate determined by $\theta$.

### 4.2 Exponential Rules for Complex Numbers

The standard laws of indices extend :

$, $
\begin{aligned}
Z_1 z_2 &= r_1 r_2 \, e^{i(\theta_1 + \theta_2)} & &\mathrm{(arguments add)} \\
\frac{z_1}{z_2} &= \frac{r_1}{r_2} \, e^{i(\theta_1 - \theta_2)} & &\mathrm{(arguments subtract)} \\
Z^n &= r^n e^{in\theta} & &\mathrm{(argument multiplies)}
\end{aligned}
$, $

:::info info with the $\cos\theta + i\sin\theta$ form. All boards require De Moivre's theorem. :::

<hr />

## 5. Loci in the Argand Diagram

### 5.1 Circles: $|z - a| = r$

**Definition.** The locus $|z - a| = r$Where $a \in \mathbb{C}$ and $r \in \mathbb{R}^+$Is a Circle
with centre $a$ and radius $r$ in the Argand diagram.

$$|z - a| = r \iff \sqrt◆LB◆(x - \alpha)^2 + (y - \beta)^2◆RB◆ = r \iff (x - \alpha)^2 + (y - \beta)^2 = r^2$$

Where $a = \alpha + \beta i$ and $z = x + yi$.

The region $|z - a| < r$ is the _interior_ of the circle, and $|z - a| > r$ is the _exterior_.

### 5.2 Perpendicular Bisectors: $|z - a| = |z - b|$

This locus represents all points equidistant from $a$ and $b$Which is the perpendicular bisector Of
the line segment joining $a$ and $b$.

### 5.3 Half-Lines: $\arg(z - a) = \alpha$

**Definition.** The locus $\arg(z - a) = \alpha$ is a _half-line_ (ray) starting from the point $a$
(not including $a$ itself) making an angle $\alpha$ with the positive real direction.

The region $\alpha_1 < \arg(z - a) < \alpha_2$ is an angular sector (wedge) with vertex at $a$.

### 5.4 Combined Loci and Regions

Exam questions often require describing a _region_ defined by combining loci, such as:

- $|z - 3| \leq 2$ and $\arg(z) \geq \dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$: the part of a disc in a sector.

:::warning A half-line $\arg(z - a) = \alpha$ does _not_ include the point $a$. When shading
Regions, be careful about whether boundaries are included (solid line) or excluded (dashed line).
:::

:::tip Always sketch loci problems. The algebraic description follows from the geometric picture.
Common exam technique: identify the boundary (circle, line, half-line), then determine which side of
The boundary is included by testing a point. :::

<details>
<summary>Worked Example: Describing a locus algebraically</summary>

A complex number $z$ satisfies $|z - 2i| \leq 3$ and
$0 \leq \arg(z) \leq \dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$. Find the greatest possible value of $|z|$ and the
Least possible value of $|z|$.

The first condition: $|z - 2i| \leq 3$ is the closed disc of radius 3 centred at $2i$I.e. At
$(0, 2)$.

The second condition: $0 \leq \arg(z) \leq \dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$ restricts $z$ to the first
Quadrant (including axes).

The disc centre $(0, 2)$ with radius 3 extends from $y = -1$ to $y = 5$ and from $x = -3$ to
$x = 3$.

**Greatest $|z|$:** The point in the region farthest from the origin is where the boundary of the
Disc intersects the first quadrant boundary furthest from the origin. The disc intersects the
Positive $y$-axis at $(0, 5)$Giving $|z| = 5$.

**Least $|z|$:** We need the closest point in the region to the origin. The disc boundary is
$(x^2 + (y-2)^2) = 9$. The closest point on this circle to the origin lies along the line from the
Origin through the centre $(0,2)$Which is the $y$-axis. The point $(0, -1)$ is outside the first
Quadrant. Within the first quadrant, the closest point is where the circle meets the $x$-axis:
Setting $y = 0$, $x^2 + 4 = 9 \implies x = \sqrt{5}$. So $|z| = \sqrt{5}$.

</details>

<hr />

## 6. Complex Transformations

### 6.1 The Mapping $w = f(z)$

A complex transformation is a function $w = f(z)$ that maps points in the $z$-plane (Argand diagram
For $z$) to points in the $w$-plane (Argand diagram for $w$).

### 6.2 Linear Transformations: $w = az + b$

For $w = az + b$ where $a, b \in \mathbb{C}$ and $a \neq 0$:

Writing $a = \lambda e^{i\alpha}$ and $b = \mu e^{i\beta}$:

1. $|a| = \lambda$ produces an _enlargement_ (scale factor $\lambda$) about the origin.
2. $\arg(a) = \alpha$ produces a _rotation_ through angle $\alpha$ about the origin.
3. $b$ produces a _translation_ by the vector representing $b$.

The composition is: enlarge by $|a|$Rotate by $\arg(a)$Then translate by $b$.

### 6.3 Inversion: $w = \dfrac{1}{z}$

The transformation $w = \dfrac{1}{z}$ maps:

- Circles not through the origin to circles.
- Circles through the origin to straight lines not through the origin.
- Straight lines through the origin to straight lines through the origin.
- Straight lines not through the origin to circles through the origin.

### 6.4 Reciprocal: $w = z + \dfrac{1}{z}$ and $w = \dfrac{z - 1}{z + 1}$

These are common in exam questions. The general approach is:

1. Express $z$ in terms of $w$: $z = f^{-1}(w)$.
2. Apply the given condition on $z$ (e.g. $|z| = 2$) to find the locus of $w$.

**Critical points.** A critical point of a transformation $w = f(z)$ is a point $z_0$ where
$f'(z_0) = 0$. At a critical point, the mapping is not conformal (angles are not preserved).

<details>
<summary>Worked Example: Image of a line under inversion</summary>

Find the image of the line $\operatorname{Re}(z) = 1$ under the transformation $w = \dfrac{1}{z}$.

Let $z = x + yi$ with $x = 1$So $z = 1 + yi$ and $y \in \mathbb{R}$.

$$w = \frac{1}{1 + yi} = \frac{1 - yi}{1 + y^2} = \frac{1}{1 + y^2} - \frac{y}{1 + y^2}\,i$$

Let $w = u + vi$. Then $u = \dfrac{1}{1 + y^2}$ and $v = \dfrac{-y}{1 + y^2}$.

Note that $v = -uy$So $y = -\dfrac{v}{u}$ (when $u \neq 0$).

Substituting: $u = \dfrac{1}{1 + v^2/u^2} = \dfrac{u^2}{u^2 + v^2}$Giving $u^2 + v^2 = u$I.e.:

$$u^2 - u + v^2 = 0 \implies \left(u - \frac{1}{2}\right)^2 + v^2 = \frac{1}{4}$$

This is a circle with centre $\left(\dfrac{1}{2}, 0\right)$ and radius $\dfrac{1}{2}$ in the
$w$-plane.

</details>

:::info AQA places significant emphasis on complex transformations including $w = f(z)$ mappings.
Edexcel and OCR cover this topic with less depth. CIE focuses more on loci than on transformations.
:::

<hr />

## 7. Summary of Key Results

$$\boxed{(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)}$$

$$\boxed{e^{i\theta} = \cos\theta + i\sin\theta}$$

$$\boxed{e^{i\pi} + 1 = 0}$$

$$\boxed{z_k = e^{2k\pi i/n} = \cos\!\left(\frac◆LB◆2k\pi◆RB◆◆LB◆n◆RB◆\right) + i\sin\!\left(\frac◆LB◆2k\pi◆RB◆◆LB◆n◆RB◆\right), \quad k = 0, 1, \ldots, n-1}$$

$$\boxed{\sum_{k=0}^{n-1} z_k = 0}$$

$$\boxed{|z - a| = r \iff \mathrm{circle centre } a \mathrm{ radius } r}$$

$$\boxed{\arg(z - a) = \alpha \iff \mathrm{half-line from } a \mathrm{ at angle } \alpha}$$

<hr />

## Problems

**Problem 1.** Express $z = -\sqrt{3} + i$ in modulus-argument form and hence find $z^5$ in the form
$a + bi$.

<details>
<summary>Hint</summary>

Find $|z|$ and $\arg(z)$ first. Then apply De Moivre's theorem.

</details>

<details>
<summary>Answer</summary>

$|z| = \sqrt{3 + 1} = 2$.

The point $(-\sqrt{3}, 1)$ is in the second quadrant.
$\arg(z) = \pi - \arctan\!\left(\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{3}◆RB◆\right) = \pi - \dfrac◆LB◆\pi◆RB◆◆LB◆6◆RB◆ = \dfrac◆LB◆5\pi◆RB◆◆LB◆6◆RB◆$.

$$z^5 = 2^5\!\left(\cos\frac◆LB◆25\pi◆RB◆◆LB◆6◆RB◆ + i\sin\frac◆LB◆25\pi◆RB◆◆LB◆6◆RB◆\right) = 32\!\left(\cos\frac◆LB◆\pi◆RB◆◆LB◆6◆RB◆ + i\sin\frac◆LB◆\pi◆RB◆◆LB◆6◆RB◆\right) = 32\!\left(\frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ + \frac{1}{2}\,i\right) = 16\sqrt{3} + 16i$$

</details>

<hr />

**Problem 2.** Use De Moivre's theorem to prove that
$\cos 4\theta = 8\cos^4\theta - 8\cos^2\theta + 1$.

<details>
<summary>Hint</summary>

Expand $(\cos\theta + i\sin\theta)^4$ using the binomial theorem and equate real parts.

</details>

<details>
<summary>Answer</summary>

$\cos 4\theta + i\sin 4\theta = (\cos\theta + i\sin\theta)^4$.

Expanding:
$\cos^4\theta + 4i\cos^3\theta\sin\theta - 6\cos^2\theta\sin^2\theta - 4i\cos\theta\sin^3\theta + \sin^4\theta$.

Real part: $\cos 4\theta = \cos^4\theta - 6\cos^2\theta\sin^2\theta + \sin^4\theta$.

Using $\sin^2\theta = 1 - \cos^2\theta$:

$$
\begin{aligned}
\cos 4\theta &= \cos^4\theta - 6\cos^2\theta(1 - \cos^2\theta) + (1 - \cos^2\theta)^2 \\
&= \cos^4\theta - 6\cos^2\theta + 6\cos^4\theta + 1 - 2\cos^2\theta + \cos^4\theta \\
&= 8\cos^4\theta - 8\cos^2\theta + 1 \quad \square
\end{aligned}
$$

</details>

<hr />

**Problem 3.** Find all solutions to $z^4 = 16i$Expressing each in the form $a + bi$.

<details>
<summary>Hint</summary>

Write $16i = 16e^{i\pi/2}$ and use the roots formula.

</details>

<details>
<summary>Answer</summary>

$16i = 16\!\left(\cos\dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ + i\sin\dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\right)$.

$$z_k = 2\!\left(\cos\!\left(\frac◆LB◆\pi/2 + 2k\pi◆RB◆◆LB◆4◆RB◆\right) + i\sin\!\left(\frac◆LB◆\pi/2 + 2k\pi◆RB◆◆LB◆4◆RB◆\right)\right), \quad k = 0, 1, 2, 3$$

$$
\begin{aligned}
K = 0:\quad z_0 &= 2\!\left(\cos\frac◆LB◆\pi◆RB◆◆LB◆8◆RB◆ + i\sin\frac◆LB◆\pi◆RB◆◆LB◆8◆RB◆\right) = 2\!\left(\frac◆LB◆\sqrt{2+\sqrt{2}}◆RB◆◆LB◆2◆RB◆ + i\,\frac◆LB◆\sqrt{2-\sqrt{2}}◆RB◆◆LB◆2◆RB◆\right) = \sqrt◆LB◆2+\sqrt{2}◆RB◆ + i\sqrt◆LB◆2-\sqrt{2}◆RB◆ \\
K = 1:\quad z_1 &= 2\!\left(\cos\frac◆LB◆5\pi◆RB◆◆LB◆8◆RB◆ + i\sin\frac◆LB◆5\pi◆RB◆◆LB◆8◆RB◆\right) = -\sqrt◆LB◆2-\sqrt{2}◆RB◆ + i\sqrt◆LB◆2+\sqrt{2}◆RB◆ \\
K = 2:\quad z_2 &= 2\!\left(\cos\frac◆LB◆9\pi◆RB◆◆LB◆8◆RB◆ + i\sin\frac◆LB◆9\pi◆RB◆◆LB◆8◆RB◆\right) = -\sqrt◆LB◆2+\sqrt{2}◆RB◆ - i\sqrt◆LB◆2-\sqrt{2}◆RB◆ \\
K = 3:\quad z_3 &= 2\!\left(\cos\frac◆LB◆13\pi◆RB◆◆LB◆8◆RB◆ + i\sin\frac◆LB◆13\pi◆RB◆◆LB◆8◆RB◆\right) = \sqrt◆LB◆2-\sqrt{2}◆RB◆ - i\sqrt◆LB◆2+\sqrt{2}◆RB◆
\end{aligned}
$$

</details>

<hr />

**Problem 4.** The fifth roots of unity are $\omega^0, \omega^1, \omega^2, \omega^3, \omega^4$ where
$\omega = e^{2\pi i/5}$. Show that $1 + \omega + \omega^2 + \omega^3 + \omega^4 = 0$ and deduce that
$\cos\dfrac◆LB◆2\pi◆RB◆◆LB◆5◆RB◆ + \cos\dfrac◆LB◆4\pi◆RB◆◆LB◆5◆RB◆ = -\dfrac{1}{2}$.

<details>
<summary>Hint</summary>

Sum the geometric series. Then separate real and imaginary parts.

</details>

<details>
<summary>Answer</summary>

The roots satisfy $z^5 - 1 = 0$. The coefficient of $z^4$ is 0, so by Vieta's formulas,
$\sum_{k=0}^{4} \omega^k = 0$.

Alternatively:
$\displaystyle\sum_{k=0}^{4}\omega^k = \frac◆LB◆1 - \omega^5◆RB◆◆LB◆1 - \omega◆RB◆ = \frac◆LB◆1 - 1◆RB◆◆LB◆1 - \omega◆RB◆ = 0$.

Expanding using $\omega^k = \cos\frac◆LB◆2k\pi◆RB◆◆LB◆5◆RB◆ + i\sin\frac◆LB◆2k\pi◆RB◆◆LB◆5◆RB◆$:

$$\sum_{k=0}^{4}\omega^k = \underbrace◆LB◆\sum_{k=0}^{4}\cos\frac{2k\pi}{5}◆RB◆_{\mathrm{real}} + i\underbrace◆LB◆\sum_{k=0}^{4}\sin\frac{2k\pi}{5}◆RB◆_{\mathrm{imaginary}} = 0$$

The imaginary part is zero by symmetry ($\sin\theta = -\sin(2\pi - \theta)$). The real part gives:

$$1 + \cos\frac◆LB◆2\pi◆RB◆◆LB◆5◆RB◆ + \cos\frac◆LB◆4\pi◆RB◆◆LB◆5◆RB◆ + \cos\frac◆LB◆6\pi◆RB◆◆LB◆5◆RB◆ + \cos\frac◆LB◆8\pi◆RB◆◆LB◆5◆RB◆ = 0$$

Since $\cos\frac◆LB◆6\pi◆RB◆◆LB◆5◆RB◆ = \cos\frac◆LB◆4\pi◆RB◆◆LB◆5◆RB◆$ and
$\cos\frac◆LB◆8\pi◆RB◆◆LB◆5◆RB◆ = \cos\frac◆LB◆2\pi◆RB◆◆LB◆5◆RB◆$:

$$1 + 2\cos\frac◆LB◆2\pi◆RB◆◆LB◆5◆RB◆ + 2\cos\frac◆LB◆4\pi◆RB◆◆LB◆5◆RB◆ = 0 \implies \cos\frac◆LB◆2\pi◆RB◆◆LB◆5◆RB◆ + \cos\frac◆LB◆4\pi◆RB◆◆LB◆5◆RB◆ = -\frac{1}{2} \quad \square$$

</details>

<hr />

**Problem 5.** Sketch on separate Argand diagrams the loci given by (a) $|z - 1 - i| = |z - 3 + i|$
And (b) $\arg(z - 2) = \dfrac◆LB◆\pi◆RB◆◆LB◆3◆RB◆$. Find the complex number(s) satisfying both
Conditions simultaneously.

<details>
<summary>Hint</summary>

Part (a) is a perpendicular bisector. Part (b) is a half-line. Find their intersection.

</details>

<details>
<summary>Answer</summary>

**(a)** $|z - (1 + i)| = |z - (3 - i)|$ is the perpendicular bisector of the segment joining
$(1, 1)$ and $(3, -1)$. The midpoint is $(2, 0)$ and the slope of the segment is
$\dfrac{-1 - 1}{3 - 1} = -1$So the perpendicular bisector has slope $1$ and equation $y = x - 2$.

**(b)** $\arg(z - 2) = \dfrac◆LB◆\pi◆RB◆◆LB◆3◆RB◆$ is a half-line from $(2, 0)$ at angle
$\dfrac◆LB◆\pi◆RB◆◆LB◆3◆RB◆$ to the positive real axis. Its equation is $y = \sqrt{3}(x - 2)$ for
$x > 2$.

**Intersection:** Setting $x - 2 = \sqrt{3}(x - 2)$:

$(x - 2)(1 - \sqrt{3}) = 0$So $x = 2$ (gives $y = 0$But the half-line requires $x > 2$) or
$1 = \sqrt{3}$Which is false.

There is no intersection. The half-line from $(2, 0)$ at angle $\pi/3$ has slope $\sqrt{3}$While The
perpendicular bisector has slope 1, and they only meet at the point $(2, 0)$ which is excluded From
the half-line.

**Answer:** No complex number satisfies both conditions simultaneously.

</details>

<hr />

**Problem 6.** Find the image of the circle $|z| = 2$ under the transformation
$w = \dfrac{z + 1}{z - 1}$.

<details>
<summary>Hint</summary>

Express $z$ in terms of $w$ and substitute $|z| = 2$.

</details>

<details>
<summary>Answer</summary>

$w = \dfrac{z + 1}{z - 1} \implies wz - w = z + 1 \implies z(w - 1) = w + 1 \implies z = \dfrac{w + 1}{w - 1}$.

Since $|z| = 2$:

$$\left|\frac{w + 1}{w - 1}\right| = 2 \implies |w + 1| = 2|w - 1|$$

Let $w = u + vi$:

$$\sqrt{(u+1)^2 + v^2} = 2\sqrt{(u-1)^2 + v^2}$$

Squaring: $(u+1)^2 + v^2 = 4[(u-1)^2 + v^2]$

$$u^2 + 2u + 1 + v^2 = 4u^2 - 8u + 4 + 4v^2$$

$$0 = 3u^2 - 10u + 3 + 3v^2$$

$$3u^2 - 10u + 3v^2 + 3 = 0$$

$$3\!\left(u^2 - \frac{10}{3}u\right) + 3v^2 = -3$$

$$3\!\left(u - \frac{5}{3}\right)^2 - \frac{25}{3} + 3v^2 = -3$$

$$3\!\left(u - \frac{5}{3}\right)^2 + 3v^2 = \frac{16}{3}$$

$$\left(u - \frac{5}{3}\right)^2 + v^2 = \frac{16}{9}$$

This is a circle with centre $\left(\dfrac{5}{3}, 0\right)$ and radius $\dfrac{4}{3}$ in the
$w$-plane.

</details>

<hr />

**Problem 7.** Express $\dfrac◆LB◆(1+i)^6◆RB◆◆LB◆(1-i\sqrt{3})^4◆RB◆$ in the form $a + bi$.

<details>
<summary>Hint</summary>

Write each term in exponential form and use the laws of indices.

</details>

<details>
<summary>Answer</summary>

$1 + i = \sqrt{2}\,e^{i\pi/4}$ and $1 - i\sqrt{3} = 2\,e^{-i\pi/3}$.

$$\frac◆LB◆(1+i)^6◆RB◆◆LB◆(1-i\sqrt{3})^4◆RB◆ = \frac◆LB◆(\sqrt{2}\,e^{i\pi/4})^6◆RB◆◆LB◆(2\,e^{-i\pi/3})^4◆RB◆ = \frac◆LB◆8e^{3\pi i/2}◆RB◆◆LB◆16\,e^{-4\pi i/3}◆RB◆ = \frac{1}{2}\,e^{i(3\pi/2 + 4\pi/3)}$$

$$3\pi/2 + 4\pi/3 = \frac◆LB◆9\pi + 8\pi◆RB◆◆LB◆6◆RB◆ = \frac◆LB◆17\pi◆RB◆◆LB◆6◆RB◆ = 2\pi + \frac◆LB◆5\pi◆RB◆◆LB◆6◆RB◆$$

So:
$\dfrac{1}{2}\,e^{5\pi i/6} = \dfrac{1}{2}\!\left(\cos\dfrac◆LB◆5\pi◆RB◆◆LB◆6◆RB◆ + i\sin\dfrac◆LB◆5\pi◆RB◆◆LB◆6◆RB◆\right) = \dfrac{1}{2}\!\left(-\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ + \dfrac{1}{2}\,i\right) = -\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆4◆RB◆ + \dfrac{1}{4}\,i$

</details>

<hr />

**Problem 8.** The transformation $T$ from the $z$-plane to the $w$-plane is given by $w = z^2$. The
Region $R$ in the $z$-plane is defined by $1 \leq |z| \leq 2$ and
$0 \leq \arg(z) \leq \dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$. Find and describe the image of $R$ under $T$.

<details>
<summary>Hint</summary>

Under $w = z^2$The modulus squares and the argument doubles.

</details>

<details>
<summary>Answer</summary>

If $z = re^{i\theta}$Then $w = r^2 e^{2i\theta}$.

- Modulus: $1 \leq r \leq 2 \implies 1 \leq r^2 \leq 4$So $1 \leq |w| \leq 4$.
- Argument:
  $0 \leq \theta \leq \dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆ \implies 0 \leq 2\theta \leq \dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$
  so $0 \leq \arg(w) \leq \dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$.

The image is the region in the first quadrant of the $w$-plane between the circles $|w| = 1$ and
$|w| = 4$Bounded by the rays $\arg(w) = 0$ and $\arg(w) = \dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$.

</details>

<hr />

**Problem 9.** Solve the equation $z^3 + z^2 + z + 1 = 0$ by recognising it as a geometric series,
And hence show that
$\cos\dfrac◆LB◆2\pi◆RB◆◆LB◆4◆RB◆ + \cos\dfrac◆LB◆4\pi◆RB◆◆LB◆4◆RB◆ + \cos\dfrac◆LB◆6\pi◆RB◆◆LB◆4◆RB◆ = -1$.

<details>
<summary>Hint</summary>

Factor $z^3 + z^2 + z + 1 = (z+1)(z^2+1)$. The roots are the 4th roots of unity excluding $z = 1$.

</details>

<details>
<summary>Answer</summary>

$z^3 + z^2 + z + 1 = \dfrac{z^4 - 1}{z - 1} = 0 \implies z^4 = 1$ with $z \neq 1$.

The 4th roots of unity are $1, i, -1, -i$So the solutions are $z = i, -1, -i$.

Equivalently, the roots are $e^{k\pi i/2}$ for $k = 1, 2, 3$.

The sum of roots (by Vieta, coefficient of $z^2$ divided by leading coefficient) is $-1$:

$$i + (-1) + (-i) = -1 \quad \checkmark$$

Now: $e^{i\pi/2} + e^{i\pi} + e^{3i\pi/2} = i + (-1) + (-i) = -1$.

Separating real and imaginary parts:
$\cos\dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ + \cos\pi + \cos\dfrac◆LB◆3\pi◆RB◆◆LB◆2◆RB◆ = -1$I.e.
$0 - 1 + 0 = -1$. ✓

Alternatively, the claim as stated uses
$\cos\dfrac◆LB◆2\pi◆RB◆◆LB◆4◆RB◆ + \cos\dfrac◆LB◆4\pi◆RB◆◆LB◆4◆RB◆ + \cos\dfrac◆LB◆6\pi◆RB◆◆LB◆4◆RB◆ = \cos\dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ + \cos\pi + \cos\dfrac◆LB◆3\pi◆RB◆◆LB◆2◆RB◆ = 0 + (-1) + 0 = -1$.
✓ $\square$

</details>

<hr />

**Problem 10.** (a) Show that
$\dfrac◆LB◆1◆RB◆◆LB◆e^{i\theta} - 1◆RB◆ = -\dfrac{1}{2} - \dfrac{i}{2}\cot\dfrac◆LB◆\theta◆RB◆◆LB◆2◆RB◆$
For $\theta \notin 2\pi\mathbb{Z}$.

(b) Hence, or otherwise, find $\displaystyle\sum_{k=1}^{n-1}\frac◆LB◆1◆RB◆◆LB◆1 - \omega^k◆RB◆$
Where $\omega = e^{2\pi i/n}$.

<details>
<summary>Hint</summary>

For (a), multiply numerator and denominator by the conjugate $e^{-i\theta} - 1$ and use half-angle
Identities. For (b), use the result from (a) with $\theta = 2k\pi/n$.

</details>

<details>
<summary>Answer</summary>

**(a)**
$\dfrac◆LB◆1◆RB◆◆LB◆e^{i\theta} - 1◆RB◆ = \dfrac◆LB◆e^{-i\theta} - 1◆RB◆◆LB◆(e^{i\theta} - 1)(e^{-i\theta} - 1)◆RB◆ = \dfrac◆LB◆e^{-i\theta} - 1◆RB◆◆LB◆2 - (e^{i\theta} + e^{-i\theta})◆RB◆ = \dfrac◆LB◆e^{-i\theta} - 1◆RB◆◆LB◆2 - 2\cos\theta◆RB◆$.

Numerator:
$e^{-i\theta} - 1 = \cos\theta - 1 - i\sin\theta = -2\sin^2\dfrac◆LB◆\theta◆RB◆◆LB◆2◆RB◆ - 2i\sin\dfrac◆LB◆\theta◆RB◆◆LB◆2◆RB◆\cos\dfrac◆LB◆\theta◆RB◆◆LB◆2◆RB◆ = -2\sin\dfrac◆LB◆\theta◆RB◆◆LB◆2◆RB◆\!\left(\sin\dfrac◆LB◆\theta◆RB◆◆LB◆2◆RB◆ + i\cos\dfrac◆LB◆\theta◆RB◆◆LB◆2◆RB◆\right)$.

Denominator: $2 - 2\cos\theta = 4\sin^2\dfrac◆LB◆\theta◆RB◆◆LB◆2◆RB◆$.

$$\frac◆LB◆1◆RB◆◆LB◆e^{i\theta} - 1◆RB◆ = \frac◆LB◆-2\sin\frac{\theta}{2}\!\left(\sin\frac{\theta}{2} + i\cos\frac{\theta}{2}\right)◆RB◆◆LB◆4\sin^2\frac{\theta}{2}◆RB◆ = \frac◆LB◆-\sin\frac{\theta}{2} - i\cos\frac{\theta}{2}◆RB◆◆LB◆2\sin\frac{\theta}{2}◆RB◆ = -\frac{1}{2} - \frac{i}{2}\cot\frac◆LB◆\theta◆RB◆◆LB◆2◆RB◆ \quad \square$$

**(b)** Using (a):
$\dfrac◆LB◆1◆RB◆◆LB◆1 - \omega^k◆RB◆ = -\dfrac◆LB◆1◆RB◆◆LB◆e^{2k\pi i/n} - 1◆RB◆ = \dfrac{1}{2} + \dfrac{i}{2}\cot\dfrac◆LB◆k\pi◆RB◆◆LB◆n◆RB◆$.

$$\sum_{k=1}^{n-1}\frac◆LB◆1◆RB◆◆LB◆1 - \omega^k◆RB◆ = \sum_{k=1}^{n-1}\!\left(\frac{1}{2} + \frac{i}{2}\cot\frac◆LB◆k\pi◆RB◆◆LB◆n◆RB◆\right) = \frac{n-1}{2} + \frac{i}{2}\sum_{k=1}^{n-1}\cot\frac◆LB◆k\pi◆RB◆◆LB◆n◆RB◆$$

The cotangent sum is zero by symmetry:
$\cot\dfrac◆LB◆k\pi◆RB◆◆LB◆n◆RB◆ = -\cot\dfrac◆LB◆(n-k)\pi◆RB◆◆LB◆n◆RB◆$So terms cancel in pairs.

Therefore: $\displaystyle\sum_{k=1}^{n-1}\frac◆LB◆1◆RB◆◆LB◆1 - \omega^k◆RB◆ = \frac{n - 1}{2}$.

</details>

:::

---

## 8. Advanced Worked Examples

### Example 8.1: De Moivre's theorem for $\cos 5\theta$

**Problem.** Express $\cos 5\theta$ in terms of $\cos\theta$.

**Solution.** By de Moivre: $(\cos\theta + i\sin\theta)^5 = \cos 5\theta + i\sin 5\theta$.

Expanding by the binomial theorem:

$$(\cos\theta + i\sin\theta)^5 = \cos^5\theta + 5i\cos^4\theta\sin\theta - 10\cos^3\theta\sin^2\theta - 10i\cos^2\theta\sin^3\theta + 5\cos\theta\sin^4\theta + i\sin^5\theta$$

Equating real parts:

$$\boxed{\cos 5\theta = 16\cos^5\theta - 20\cos^3\theta + 5\cos\theta}$$

### Example 8.2: Solving $z^6 = -64$

**Problem.** Solve $z^6 = -64$Giving answers in exponential form.

**Solution.** $-64 = 64e^{i\pi}$. The 6th roots are:

$$z_k = 64^{1/6} \exp\!\left(\frac◆LB◆i(\pi + 2k\pi)◆RB◆◆LB◆6◆RB◆\right) = 2\exp\!\left(\frac◆LB◆i(2k+1)\pi◆RB◆◆LB◆6◆RB◆\right)$$

For $k = 0, 1, 2, 3, 4, 5$.

$z_0 = 2e^{i\pi/6}$$z_1 = 2e^{i\pi/2}$$z_2 = 2e^{5i\pi/6}$$z_3 = 2e^{7i\pi/6}$
$z_4 = 2e^{3i\pi/2}$$z_5 = 2e^{11i\pi/6}$.

These lie on a circle of radius 2, at angles $30°, 90°, 150°, 210°, 270°, 330°$.

### Example 8.3: Loci — perpendicular bisector

**Problem.** Find the Cartesian equation of the locus $|z - 3 - 4i| = |z + 1 - 2i|$.

**Solution.** Let $z = x + iy$.

$$|z - (3+4i)| = |z - (-1+2i)|$$

$$\sqrt{(x-3)^2 + (y-4)^2} = \sqrt{(x+1)^2 + (y-2)^2}$$

Squaring: $(x-3)^2 + (y-4)^2 = (x+1)^2 + (y-2)^2$.

$$x^2 - 6x + 9 + y^2 - 8y + 16 = x^2 + 2x + 1 + y^2 - 4y + 4$$

$$-8x - 4y + 20 = 0 \implies \boxed{2x + y = 5}$$

This is the perpendicular bisector of the segment joining $3+4i$ and $-1+2i$.

### Example 8.4: Region defined by an inequality

**Problem.** Shade on an Argand diagram the region defined by $|z - 2i| \leq 3$ and
$0 \leq \arg(z) \leq \dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$.

**Solution.** $|z - 2i| \leq 3$ is the closed disc of radius 3 centred at $2i$ (i.e., $(0, 2)$).

$0 \leq \arg(z) \leq \dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$ is the sector between the positive real axis and
The line $y = x$ (for $x \geq 0$).

The required region is the intersection: a segment of the disc in the first quadrant between angles
$0$ and $\pi/4$.

### Example 8.5: Complex transformation — rotation and enlargement

**Problem.** The transformation $T$ maps the complex plane by $w = (1+i)z + 2i$. Describe $T$ fully
And find the image of the line $\mathrm{Re}(z) = 1$.

**Solution.** $w = (1+i)z + 2i = \sqrt{2}\,e^{i\pi/4}\,z + 2i$.

$T$ is an enlargement by scale factor $\sqrt{2}$Rotation by $45°$ anticlockwise about the origin,
Followed by a translation by $2i$.

For $\mathrm{Re}(z) = 1$: $z = 1 + it$.
$w = (1+i)(1+it) + 2i = 1 + it + i - t + 2i = (1-t) + i(3+t)$.

$\mathrm{Re}(w) = 1-t$, $\mathrm{Im}(w) = 3+t$. Eliminating $t$:
$\mathrm{Im}(w) = 3 + (1 - \mathrm{Re}(w)) = 4 - \mathrm{Re}(w)$.

The image is the line $\boxed{u + v = 4}$ (where $w = u + iv$).

### Example 8.6: Sum of roots of unity

**Problem.** Show that $\displaystyle\sum_{k=0}^{n-1} \omega^k = 0$ where $\omega = e^{2\pi i/n}$.

**Solution.** This is a geometric series with ratio $\omega \neq 1$:

$$\sum_{k=0}^{n-1} \omega^k = \frac◆LB◆1 - \omega^n◆RB◆◆LB◆1 - \omega◆RB◆ = \frac◆LB◆1 - 1◆RB◆◆LB◆1 - \omega◆RB◆ = 0$$

$\blacksquare$

### Example 8.7: Product of roots of unity

**Problem.** Show that the product of all $n$-th roots of unity is $(-1)^{n+1}$.

**Solution.** The $n$-th roots of unity are the roots of $z^n - 1 = 0$. By Vieta's formulae, the
Product of all roots is $(-1)^n \times (-1) = (-1)^{n+1}$.

Alternatively: the roots are $1, \omega, \omega^2, \ldots, \omega^{n-1}$So the product is
$\omega^{0+1+2+\cdots+(n-1)} = \omega^{n(n-1)/2} = e^{\pi i(n-1)} = (-1)^{n-1} = (-1)^{n+1}$.
$\blacksquare$

---

## 9. Common Pitfalls

| Pitfall                                                           | Correct Approach                                                                                             |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------- | --- | --- | --- | --- | --- | --- | ---------------------------------------- | --- | ---- | --- | --- | --- | --- |
| Forgetting that $\arg(z)$ is measured from the positive real axis | $\arg(z)$ is the angle anticlockwise from the positive $x$-axis, range $(-\pi, \pi]$ or $[0, 2\pi)$          |
| Confusing $                                                       | z-w                                                                                                          | $ with $ | z   | -   | w   | $   | $   | z-w | $ is the distance between $z$ and $w$; $ | z-w | \neq | z   | -   | w   | $   |
| Missing roots when solving $z^n = w$                              | There are always exactly $n$ distinct roots; check your $k$ values cover $0$ to $n-1$                        |
| Incorrectly applying de Moivre to non-integer powers              | De Moivre's theorem $(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$ holds for integer $n$ only |

---

## 10. Additional Exam-Style Questions

### Question 8

Solve $z^4 = 8(1 + i\sqrt{3})$Giving roots in the form $r(\cos\theta + i\sin\theta)$.

<details>
<summary>Solution</summary>

$8(1+i\sqrt{3}) = 16e^{i\pi/3}$.

$z_k = 2\exp\!\left(\dfrac◆LB◆i(\pi/3 + 2k\pi)◆RB◆◆LB◆4◆RB◆\right)$ for $k = 0, 1, 2, 3$.

$z_0 = 2(\cos 15° + i\sin 15°)$, $z_1 = 2(\cos 105° + i\sin 105°)$
$z_2 = 2(\cos 195° + i\sin 195°)$, $z_3 = 2(\cos 285° + i\sin 285°)$.

</details>

### Question 9

**Prove that** $\cos^4\theta = \dfrac{3}{8} + \dfrac{1}{2}\cos 2\theta + \dfrac{1}{8}\cos 4\theta$.

<details>
<summary>Solution</summary>

$\cos^2\theta = \dfrac◆LB◆1+\cos 2\theta◆RB◆◆LB◆2◆RB◆$.

$\cos^4\theta = \left(\dfrac◆LB◆1+\cos 2\theta◆RB◆◆LB◆2◆RB◆\right)^{\!2} = \dfrac◆LB◆1 + 2\cos 2\theta + \cos^2 2\theta◆RB◆◆LB◆4◆RB◆$.

$\cos^2 2\theta = \dfrac◆LB◆1+\cos 4\theta◆RB◆◆LB◆2◆RB◆$.

$\cos^4\theta = \dfrac{1}{4} + \dfrac◆LB◆\cos 2\theta◆RB◆◆LB◆2◆RB◆ + \dfrac◆LB◆1+\cos 4\theta◆RB◆◆LB◆8◆RB◆ = \dfrac{3}{8} + \dfrac◆LB◆\cos 2\theta◆RB◆◆LB◆2◆RB◆ + \dfrac◆LB◆\cos 4\theta◆RB◆◆LB◆8◆RB◆$.
$\blacksquare$

</details>

### Question 10

The complex number $z$ satisfies $|z-1| = |z+1|$ and $|z-3i| = 3$. Find $z$.

<details>
<summary>Solution</summary>

$|z-1| = |z+1|$: perpendicular bisector of $1$ and $-1$Giving $\mathrm{Re}(z) = 0$. So $z = iy$.

$|z-3i| = 3 \implies |iy - 3i| = 3 \implies |y-3| = 3 \implies y - 3 = \pm 3$.

$y = 6$ or $y = 0$. So $z = 6i$ or $z = 0$.

</details>

---

## 11. Connections to Other Topics

### 11.1 Complex numbers and matrices

Complex eigenvalues of 2×2 matrices correspond to rotation-scaling transformations. See
[Matrices](/docs/alevel/further-maths/pure-mathematics/further-matrices).

### 11.2 Complex numbers and hyperbolic functions

$e^{ix} = \cos x + i\sin x$ connects exponential, trigonometric, and hyperbolic functions. See
[Hyperbolic Functions](/docs/alevel/further-maths/pure-mathematics/hyperbolic-functions).

### 11.3 Complex numbers and polar coordinates

Argand diagrams and polar form $(r, \theta)$ connect to polar coordinates. See
[Polar Coordinates](/docs/alevel/further-maths/pure-mathematics/polar-coordinates).

---

## 12. Key Results Summary

| Result                        | Formula                                                   |
| ----------------------------- | --------------------------------------------------------- | --- | -------------------------------- | --- | --- |
| Modulus                       | $                                                         | z   | = \sqrt{a^2+b^2}$ for $z = a+bi$ |
| Argument                      | $\arg(z) = \arctan(b/a)$ (adjusting for quadrant)         |
| Euler's formula               | $e^{i\theta} = \cos\theta+i\sin\theta$                    |
| De Moivre                     | $(\cos\theta+i\sin\theta)^n = \cos n\theta+i\sin n\theta$ |
| $n$-th roots of unity         | $z_k = e^{2\pi ik/n}$, $k = 0, \ldots, n-1$                 |
| Locus: circle                 | $                                                         | z-a | =r$                              |
| Locus: perpendicular bisector | $                                                         | z-a | =                                | z-b | $   |
| Locus: half-line              | $\arg(z-a) = \theta$                                      |

---

## 13. Further Exam-Style Questions

### Question 11

Solve $z^3 = -8i$Giving roots in Cartesian form.

<details>
<summary>Solution</summary>

$-8i = 8e^{-i\pi/2}$. Roots: $z_k = 2\exp\!\left(\dfrac◆LB◆-i\pi/2 + 2k\pi i◆RB◆◆LB◆3◆RB◆\right)$
For $k=0,1,2$.

$z_0 = 2e^{-i\pi/6} = 2\!\left(\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ - \dfrac{i}{2}\right) = \sqrt{3}-i$.

$z_1 = 2e^{i\pi/2} = 2i$.

$z_2 = 2e^{7i\pi/6} = 2\!\left(-\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ - \dfrac{i}{2}\right) = -\sqrt{3}-i$.

$\boxed{z = \sqrt{3}-i,\; 2i,\; -\sqrt{3}-i}$

</details>

### Question 12

**Prove that** $|z_1 z_2| = |z_1||z_2|$ for any complex numbers $z_1, z_2$.

<details>
<summary>Solution</summary>

Let $z_1 = r_1 e^{i\theta_1}$ and $z_2 = r_2 e^{i\theta_2}$.

$z_1 z_2 = r_1 r_2 e^{i(\theta_1+\theta_2)}$.

$|z_1 z_2| = r_1 r_2 = |z_1||z_2|$. $\blacksquare$

</details>

---

## 14. Advanced Topics

### 14.1 The exponential form of complex numbers

Any non-zero complex number can be written as $z = re^{i\theta}$ where $r = |z|$ and
$\theta = \arg(z)$.

This form makes multiplication and division particularly simple:

- $z_1 z_2 = r_1 r_2 e^{i(\theta_1+\theta_2)}$
- $z_1/z_2 = (r_1/r_2) e^{i(\theta_1-\theta_2)}$

### 14.2 Euler's identity

Setting $\theta = \pi$ in Euler's formula: $e^{i\pi} + 1 = 0$.

This connects five fundamental constants: $e$$i$$\pi$$1$And $0$.

### 14.3 Complex conjugate and roots of polynomials

If $P(z)$ is a polynomial with real coefficients and $z = a + bi$ is a root, then $\bar{z} = a - bi$
Is also a root. This is because $\overline{P(z)} = P(\bar{z})$ for real-coefficient polynomials.

### 14.4 Regions in the Argand diagram

| Inequality                   | Region                             |
| ---------------------------- | ---------------------------------- |
| $\|z-a\| < r$                | Interior of circle (open disc)     |
| $\|z-a\| \leq r$             | Closed disc                        |
| $\alpha < \arg(z-a) < \beta$ | Sector (angular region)            |
| $\mathrm{Re}(z) > k$         | Half-plane to the right of $x = k$ |
| $\mathrm{Im}(z) > k$         | Half-plane above $y = k$           |

### 14.5 The exponential form of $\sin$ and $\cos$

From $e^{i\theta} = \cos\theta + i\sin\theta$ and $e^{-i\theta} = \cos\theta - i\sin\theta$:

$$\cos\theta = \frac◆LB◆e^{i\theta}+e^{-i\theta}◆RB◆◆LB◆2◆RB◆, \qquad \sin\theta = \frac◆LB◆e^{i\theta}-e^{-i\theta}◆RB◆◆LB◆2i◆RB◆$$

These are essential for deriving trigonometric identities and solving certain integrals.

---

## 15. Further Exam-Style Questions

### Question 13

Express $\dfrac◆LB◆1+e^{i\theta}◆RB◆◆LB◆1-e^{i\theta}◆RB◆$ in the form $a+bi$.

<details>
<summary>Solution</summary>

$\dfrac◆LB◆1+e^{i\theta}◆RB◆◆LB◆1-e^{i\theta}◆RB◆ = \dfrac◆LB◆e^{i\theta/2}(e^{-i\theta/2}+e^{i\theta/2})◆RB◆◆LB◆e^{i\theta/2}(e^{-i\theta/2}-e^{i\theta/2})◆RB◆ = \dfrac◆LB◆2\cos(\theta/2)◆RB◆◆LB◆-2i\sin(\theta/2)◆RB◆ = \dfrac◆LB◆i\cos(\theta/2)◆RB◆◆LB◆\sin(\theta/2)◆RB◆ = \boxed{i\cot(\theta/2)}$

</details>

### Question 14

**Prove that** the sum of the $n$-th roots of unity is zero.

<details>
<summary>Solution</summary>

The $n$-th roots of unity are $1, \omega, \omega^2, \ldots, \omega^{n-1}$ where
$\omega = e^{2\pi i/n}$.

This is a geometric series:
$\displaystyle\sum_{k=0}^{n-1} \omega^k = \frac◆LB◆1-\omega^n◆RB◆◆LB◆1-\omega◆RB◆ = \frac◆LB◆1-1◆RB◆◆LB◆1-\omega◆RB◆ = 0$.
$\blacksquare$

</details>

### Question 15

Find all complex numbers $z$ such that $z\bar{z} + z + \bar{z} = 3$.

<details>
<summary>Solution</summary>

Let $z = x+iy$. Then $\bar{z} = x-iy$ and $z\bar{z} = x^2+y^2$.

$x^2+y^2 + 2x = 3 \implies (x+1)^2 + y^2 = 4$.

This is a circle with centre $(-1, 0)$ and radius $2$. All complex numbers on this circle satisfy
The equation.

</details>

---

## 16. Further Advanced Topics

### 16.1 The fundamental theorem of algebra

Every polynomial of degree $n \geq 1$ with complex coefficients has exactly $n$ roots (counting
Multiplicity) in the complex numbers.

This means: every polynomial can be factored as $P(z) = a(z - z_1)(z - z_2)\cdots(z - z_n)$.

### 16.2 Complex numbers as rotations and dilations

Multiplication by $re^{i\theta}$ represents:

- Dilation by scale factor $r$
- Rotation by angle $\theta$ anticlockwise

This provides a geometric interpretation of all complex arithmetic.

### 16.3 $n$-th roots of any complex number

To solve $z^n = w = re^{i\phi}$:

$$z_k = r^{1/n} \exp\!\left(\frac◆LB◆i(\phi + 2k\pi)◆RB◆◆LB◆n◆RB◆\right) \quad \text{for } k = 0, 1, \ldots, n-1$$

The roots lie on a circle of radius $r^{1/n}$Equally spaced.

### 16.4 The complex exponential function

$e^z = e^{x+iy} = e^x(\cos y + i\sin y)$ for $z = x + iy$.

Key properties:

- $|e^z| = e^x$
- $\arg(e^z) = y$ (mod $2\pi$)
- $e^{z_1+z_2} = e^{z_1}e^{z_2}$
- $e^z \neq 0$ for all $z$
- $e^z = 1 \iff z = 2k\pi i$ for some integer $k$

---

## 17. Further Exam-Style Questions

### Question 16

Find all complex numbers $z$ such that $z^4 = -16$.

<details>
<summary>Solution</summary>

$-16 = 16e^{i\pi}$. Roots: $z_k = 2\exp\!\left(\dfrac◆LB◆i(\pi+2k\pi)◆RB◆◆LB◆4◆RB◆\right)$ for
$k=0,1,2,3$.

$z_0 = 2e^{i\pi/4} = \sqrt{2}+i\sqrt{2}$$z_1 = 2e^{i3\pi/4} = -\sqrt{2}+i\sqrt{2}$

$z_2 = 2e^{i5\pi/4} = -\sqrt{2}-i\sqrt{2}$$z_3 = 2e^{i7\pi/4} = \sqrt{2}-i\sqrt{2}$.

</details>

### Question 17

**Prove that** for any complex number $z$: $\overline{z_1 z_2} = \bar{z}_1 \cdot \bar{z}_2$.

<details>
<summary>Solution</summary>

Let $z_1 = a+bi$ and $z_2 = c+di$.

$z_1 z_2 = (ac-bd) + (ad+bc)i$.

$\overline{z_1 z_2} = (ac-bd) - (ad+bc)i$.

$\bar{z}_1 \cdot \bar{z}_2 = (a-bi)(c-di) = ac - adi - bci + bdi^2 = (ac-bd) - (ad+bc)i$.

Equal. $\blacksquare$

</details>

### Question 18

The complex numbers $z$ and $w$ satisfy $|z| = 3$$|w| = 4$And $|z+w| = 5$. Find $|z-w|$.

<details>
<summary>Solution</summary>

$|z+w|^2 = |z|^2 + |w|^2 + 2\mathrm{Re}(z\bar{w}) = 9+16+2\mathrm{Re}(z\bar{w}) = 25$.

$\mathrm{Re}(z\bar{w}) = 0$.

$|z-w|^2 = |z|^2 + |w|^2 - 2\mathrm{Re}(z\bar{w}) = 9+16-0 = 25$.

$\boxed{|z-w| = 5}$

</details>

---

## 18. Further Advanced Topics

### 18.1 Riemann surfaces and multi-valued functions

The complex logarithm, $n$-th root, and inverse trigonometric functions are all multi-valued. Branch
Cuts are used to define single-valued branches (principal values).

### 18.2 The complex plane and stereographic projection

The extended complex plane $\hat{\mathbb{C}} = \mathbb{C} \cup \{\infty\}$ is topologically a sphere
(the Riemann sphere). Stereographic projection maps each point on the sphere (except the north pole)
To a unique point in the complex plane.

### 18.3 Complex analysis connections

While complex analysis (Cauchy's theorem, residue calculus) is beyond A-Level, the fundamental
Concepts appear:

- Cauchy's integral formula:
  $f(a) = \dfrac◆LB◆1◆RB◆◆LB◆2\pi i◆RB◆\displaystyle\oint_C \frac{f(z)}{z-a}\,dz$
- Residue theorem: $\displaystyle\oint_C f(z)\,dz = 2\pi i \sum \text{Res}(f, a_k)$

These are mentioned for context and further study.

### 18.4 De Moivre's theorem — number theory applications

De Moivre's theorem connects complex numbers to number theory:

- Fermat's theorem on sums of two squares: $p \equiv 1 \pmod 4 \implies p = a^2 + b^2$
- Wilson's theorem: $(p-1)! \equiv -1 \pmod p$ for prime $p$

---

## 19. Further Exam-Style Questions

### Question 19

Express $\cos 5\theta + i\sin 5\theta$ in terms of $\cos\theta$ and $\sin\theta$ using the binomial
Theorem.

<details>
<summary>Solution</summary>

$(\cos\theta + i\sin\theta)^5 = \cos^5\theta + 5i\cos^4\theta\sin\theta - 10\cos^3\theta\sin^2\theta - 10i\cos^2\theta\sin^3\theta + 5\cos\theta\sin^4\theta + i\sin^5\theta$.

Real part: $\cos 5\theta = \cos^5\theta - 10\cos^3\theta\sin^2\theta + 5\cos\theta\sin^4\theta$.

Using $\sin^2\theta = 1-\cos^2\theta$:

$= \cos^5\theta - 10\cos^3\theta(1-\cos^2\theta) + 5\cos\theta(1-\cos^2\theta)^2$

$= \cos^5\theta - 10\cos^3\theta + 10\cos^5\theta + 5\cos\theta - 10\cos^3\theta + 5\cos^5\theta$

$= \boxed{16\cos^5\theta - 20\cos^3\theta + 5\cos\theta}$.

</details>

### Question 20

**Prove that** $|z+w|^2 + |z-w|^2 = 2(|z|^2+|w|^2)$ for all complex numbers $z, w$ (the
Parallelogram law).

<details>
<summary>Solution</summary>

$|z+w|^2 + |z-w|^2 = (z+w)(\bar{z}+\bar{w}) + (z-w)(\bar{z}-\bar{w})$

$= |z|^2+z\bar{w}+w\bar{z}+|w|^2 + |z|^2-z\bar{w}-w\bar{z}+|w|^2 = 2|z|^2 + 2|w|^2$.

This is the parallelogram law: the sum of squares of the diagonals equals the sum of squares of all
Four sides. $\blacksquare$

</details>
