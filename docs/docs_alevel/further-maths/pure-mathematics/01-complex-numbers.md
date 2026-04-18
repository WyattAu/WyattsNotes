---
title: Complex Numbers
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
engineering, and physics, providing powerful tools for analysing rotations, oscillations, and
polynomial equations.

### Board Coverage

| Board   | Paper   | Notes                                                       |
| ------- | ------- | ----------------------------------------------------------- |
| AQA     | Paper 1 | Full coverage including transformations $w = f(z)$          |
| Edexcel | FP1/FP2 | De Moivre, roots of unity, loci in FP2                      |
| OCR (A) | Paper 1 | De Moivre, exponential form, roots of unity                 |
| CIE     | P1      | Loci required; exponential form and roots of unity in depth |

---

## 1. Review of A Level Complex Numbers

**Definition.** A _complex number_ is a number of the form $z = a + bi$ where $a, b \in \mathbb{R}$
and $i$ is defined by the property $i^2 = -1$. The set of all complex numbers is denoted
$\mathbb{C}$.

We call $a$ the _real part_ (written $\operatorname{Re}(z)$) and $b$ the _imaginary part_ (written
$\operatorname{Im}(z)$). Two complex numbers are equal if and only if both their real and imaginary
parts are equal.

### 1.1 The Argand Diagram

**Definition.** The _Argand diagram_ is a representation of $\mathbb{C}$ as a plane, where the
horizontal axis represents $\operatorname{Re}(z)$ and the vertical axis represents
$\operatorname{Im}(z)$. The complex number $z = a + bi$ is plotted as the point $(a, b)$.

### 1.2 Modulus and Argument

**Definition.** For $z = a + bi \neq 0$:

- The _modulus_ $|z|$ is defined as $|z| = \sqrt{a^2 + b^2}$.
- The _argument_ $\arg(z)$ is the angle $\theta$ (measured anticlockwise from the positive real
  axis) such that $\tan\theta = \dfrac{b}{a}$, with $-\pi < \theta \leq \pi$ (the _principal
  argument_).

$$\boxed{z = a + bi = |z|(\cos\theta + i\sin\theta) = r(\cos\theta + i\sin\theta)}$$

where $r = |z|$ and $\theta = \arg(z)$.

### 1.3 Arithmetic with Complex Numbers

For $z_1 = a + bi$ and $z_2 = c + di$:

$$
\begin{aligned}
z_1 + z_2 &= (a + c) + (b + d)i \\
z_1 z_2 &= (ac - bd) + (ad + bc)i \\
\frac{z_1}{z_2} &= \frac{z_1 \overline{z_2}}{|z_2|^2} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}
\end{aligned}
$$

where $\overline{z_2} = c - di$ is the _complex conjugate_ of $z_2$.

:::warning
When computing $\arg(z)$, always check the quadrant of $(a, b)$. The formula
$\theta = \arctan(b/a)$ only gives the correct principal argument when $a > 0$.
:::

<details>
<summary>Worked Example: Modulus, argument, and polar form</summary>

Find the modulus, argument, and polar form of $z = 1 - \sqrt{3}\,i$.

$$|z| = \sqrt{1^2 + (-\sqrt{3})^2} = \sqrt{1 + 3} = 2$$

Since $(a, b) = (1, -\sqrt{3})$ lies in the fourth quadrant:

$$\arg(z) = \arctan\!\left(\frac{-\sqrt{3}}{1}\right) = -\frac{\pi}{3}$$

Polar form:
$z = 2\!\left(\cos\!\left(-\dfrac{\pi}{3}\right) + i\sin\!\left(-\dfrac{\pi}{3}\right)\right)$.
</details>

---

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

using the compound angle identities. ✓

For negative integers, note that
$\dfrac{1}{\cos\theta + i\sin\theta} = \cos\theta - i\sin\theta = \cos(-\theta) + i\sin(-\theta)$,
so the result follows. $\square$

**Intuition.** De Moivre's theorem says that raising a complex number on the unit circle to the
$n$-th power simply multiplies its angle by $n$. This is because multiplication of complex numbers
adds their arguments:
$r_1 e^{i\theta_1} \cdot r_2 e^{i\theta_2} = r_1 r_2 e^{i(\theta_1 + \theta_2)}$.

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

First write in polar form: $1 + i = \sqrt{2}\!\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right)$.

$$
\begin{aligned}
(1 + i)^{10} &= \left(\sqrt{2}\right)^{10}\!\left(\cos\frac{10\pi}{4} + i\sin\frac{10\pi}{4}\right) \\
&= 32\!\left(\cos\frac{5\pi}{2} + i\sin\frac{5\pi}{2}\right) \\
&= 32\!\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right) \\
&= 32(0 + i) = 32i
\end{aligned}
$$
</details>

---

## 3. Roots of Unity

**Definition.** The _$n$-th roots of unity_ are the solutions to the equation $z^n = 1$ for
$n \in \mathbb{Z}^+$.

By De Moivre's theorem, writing $1 = \cos 0 + i\sin 0 = \cos(2k\pi) + i\sin(2k\pi)$ for any integer
$k$, the $n$ distinct solutions are:

$$\boxed{z_k = \cos\!\left(\frac{2k\pi}{n}\right) + i\sin\!\left(\frac{2k\pi}{n}\right), \quad k = 0, 1, 2, \ldots, n-1}$$

### 3.1 Geometric Interpretation

The $n$-th roots of unity lie on the unit circle $|z| = 1$ in the Argand diagram, equally spaced at
angles of $\dfrac{2\pi}{n}$ radians apart. They form the vertices of a regular $n$-gon inscribed in
the unit circle, with one vertex at $z = 1$.

### 3.2 Sum and Product of Roots

Since the roots satisfy $z^n - 1 = 0$, the sum of all $n$-th roots of unity is zero:

$$\sum_{k=0}^{n-1} z_k = 0$$

This follows from the coefficient of $z^{n-1}$ in $z^n - 1 = 0$ being zero (by Vieta's formulas).
Equivalently, the roots form a geometric series with ratio $\omega = e^{2\pi i/n}$ and first term 1,
giving:

$$\sum_{k=0}^{n-1} \omega^k = \frac{1 - \omega^n}{1 - \omega} = \frac{1 - 1}{1 - \omega} = 0$$

The product of all $n$-th roots of unity is:

$$\prod_{k=0}^{n-1} z_k = (-1)^{n-1}$$

<details>
<summary>Worked Example: Cube roots of unity</summary>

Find all cube roots of unity and verify that their sum is zero.

$z^3 = 1 \implies z_k = \cos\!\left(\dfrac{2k\pi}{3}\right) + i\sin\!\left(\dfrac{2k\pi}{3}\right)$
for $k = 0, 1, 2$.

$$
\begin{aligned}
z_0 &= \cos 0 + i\sin 0 = 1 \\
z_1 &= \cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3} = -\frac{1}{2} + \frac{\sqrt{3}}{2}\,i \\
z_2 &= \cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3} = -\frac{1}{2} - \frac{\sqrt{3}}{2}\,i
\end{aligned}
$$

Sum: $1 - \dfrac{1}{2} + \dfrac{\sqrt{3}}{2}\,i - \dfrac{1}{2} - \dfrac{\sqrt{3}}{2}\,i = 0$. ✓

Product:
$1 \cdot \left(-\dfrac{1}{2} + \dfrac{\sqrt{3}}{2}\,i\right)\left(-\dfrac{1}{2} - \dfrac{\sqrt{3}}{2}\,i\right) = 1 \cdot \left(\dfrac{1}{4} + \dfrac{3}{4}\right) = 1 = (-1)^{3-1}$.
✓
</details>

---

## 4. Exponential Form

**Definition.** The _exponential form_ of a complex number $z = r(\cos\theta + i\sin\theta)$ is:

$$\boxed{z = re^{i\theta}}$$

where $e^{i\theta} \equiv \cos\theta + i\sin\theta$ by Euler's formula.

### Proof of Euler's Formula (from Maclaurin series)

The Maclaurin series for $e^x$, $\cos x$, and $\sin x$ are:

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots$$

$$\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$$

$$\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$$

Substituting $x = i\theta$ into the series for $e^x$:

$$
\begin{aligned}
e^{i\theta} &= 1 + i\theta + \frac{(i\theta)^2}{2!} + \frac{(i\theta)^3}{3!} + \frac{(i\theta)^4}{4!} + \frac{(i\theta)^5}{5!} + \cdots \\
&= 1 + i\theta + \frac{i^2\theta^2}{2!} + \frac{i^3\theta^3}{3!} + \frac{i^4\theta^4}{4!} + \frac{i^5\theta^5}{5!} + \cdots \\
&= 1 + i\theta - \frac{\theta^2}{2!} - \frac{i\theta^3}{3!} + \frac{\theta^4}{4!} + \frac{i\theta^5}{5!} - \cdots
\end{aligned}
$$

using $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, $i^5 = i$, and so on. Grouping real and imaginary parts:

$$e^{i\theta} = \underbrace{\left(1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots\right)}_{=\,\cos\theta} + i\underbrace{\left(\theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \cdots\right)}_{=\,\sin\theta}$$

Therefore $e^{i\theta} = \cos\theta + i\sin\theta$. $\square$

### 4.1 Euler's Identity

Setting $\theta = \pi$:

$$\boxed{e^{i\pi} + 1 = 0}$$

This celebrated identity connects five fundamental constants: $e$, $i$, $\pi$, $1$, and $0$.

**Intuition.** Euler's identity says that starting at the point $1$ on the real axis and rotating by
$\pi$ radians (half a turn) on the unit circle lands you at $-1$. The exponential $e^{i\theta}$
describes a point moving around the unit circle at a rate determined by $\theta$.

### 4.2 Exponential Rules for Complex Numbers

The standard laws of indices extend naturally:

$$
\begin{aligned}
z_1 z_2 &= r_1 r_2 \, e^{i(\theta_1 + \theta_2)} & &\mathrm{(arguments add)} \\
\frac{z_1}{z_2} &= \frac{r_1}{r_2} \, e^{i(\theta_1 - \theta_2)} & &\mathrm{(arguments subtract)} \\
z^n &= r^n e^{in\theta} & &\mathrm{(argument multiplies)}
\end{aligned}
$$

:::info
CIE and Edexcel FP2 require the exponential form. AQA accepts it but also works extensively
with the $\cos\theta + i\sin\theta$ form. All boards require De Moivre's theorem.
:::

---

## 5. Loci in the Argand Diagram

### 5.1 Circles: $|z - a| = r$

**Definition.** The locus $|z - a| = r$, where $a \in \mathbb{C}$ and $r \in \mathbb{R}^+$, is a
circle with centre $a$ and radius $r$ in the Argand diagram.

$$|z - a| = r \iff \sqrt{(x - \alpha)^2 + (y - \beta)^2} = r \iff (x - \alpha)^2 + (y - \beta)^2 = r^2$$

where $a = \alpha + \beta i$ and $z = x + yi$.

The region $|z - a| < r$ is the _interior_ of the circle, and $|z - a| > r$ is the _exterior_.

### 5.2 Perpendicular Bisectors: $|z - a| = |z - b|$

This locus represents all points equidistant from $a$ and $b$, which is the perpendicular bisector
of the line segment joining $a$ and $b$.

### 5.3 Half-Lines: $\arg(z - a) = \alpha$

**Definition.** The locus $\arg(z - a) = \alpha$ is a _half-line_ (ray) starting from the point $a$
(not including $a$ itself) making an angle $\alpha$ with the positive real direction.

The region $\alpha_1 < \arg(z - a) < \alpha_2$ is an angular sector (wedge) with vertex at $a$.

### 5.4 Combined Loci and Regions

Exam questions often require describing a _region_ defined by combining loci, such as:

- $|z - 3| \leq 2$ and $\arg(z) \geq \dfrac{\pi}{4}$: the part of a disc in a sector.

:::warning
A half-line $\arg(z - a) = \alpha$ does _not_ include the point $a$. When shading
regions, be careful about whether boundaries are included (solid line) or excluded (dashed line).
:::

:::tip
Always sketch loci problems. The algebraic description follows from the geometric picture.
Common exam technique: identify the boundary (circle, line, half-line), then determine which side of
the boundary is included by testing a point.
:::

<details>
<summary>Worked Example: Describing a locus algebraically</summary>

A complex number $z$ satisfies $|z - 2i| \leq 3$ and $0 \leq \arg(z) \leq \dfrac{\pi}{2}$. Find the
greatest possible value of $|z|$ and the least possible value of $|z|$.

The first condition: $|z - 2i| \leq 3$ is the closed disc of radius 3 centred at $2i$, i.e. at
$(0, 2)$.

The second condition: $0 \leq \arg(z) \leq \dfrac{\pi}{2}$ restricts $z$ to the first quadrant
(including axes).

The disc centre $(0, 2)$ with radius 3 extends from $y = -1$ to $y = 5$ and from $x = -3$ to
$x = 3$.

**Greatest $|z|$:** The point in the region farthest from the origin is where the boundary of the
disc intersects the first quadrant boundary furthest from the origin. The disc intersects the
positive $y$-axis at $(0, 5)$, giving $|z| = 5$.

**Least $|z|$:** We need the closest point in the region to the origin. The disc boundary is
$(x^2 + (y-2)^2) = 9$. The closest point on this circle to the origin lies along the line from the
origin through the centre $(0,2)$, which is the $y$-axis. The point $(0, -1)$ is outside the first
quadrant. Within the first quadrant, the closest point is where the circle meets the $x$-axis:
setting $y = 0$, $x^2 + 4 = 9 \implies x = \sqrt{5}$. So $|z| = \sqrt{5}$.
</details>

---

## 6. Complex Transformations

### 6.1 The Mapping $w = f(z)$

A complex transformation is a function $w = f(z)$ that maps points in the $z$-plane (Argand diagram
for $z$) to points in the $w$-plane (Argand diagram for $w$).

### 6.2 Linear Transformations: $w = az + b$

For $w = az + b$ where $a, b \in \mathbb{C}$ and $a \neq 0$:

Writing $a = \lambda e^{i\alpha}$ and $b = \mu e^{i\beta}$:

1. $|a| = \lambda$ produces an _enlargement_ (scale factor $\lambda$) about the origin.
2. $\arg(a) = \alpha$ produces a _rotation_ through angle $\alpha$ about the origin.
3. $b$ produces a _translation_ by the vector representing $b$.

The composition is: enlarge by $|a|$, rotate by $\arg(a)$, then translate by $b$.

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

Let $z = x + yi$ with $x = 1$, so $z = 1 + yi$ and $y \in \mathbb{R}$.

$$w = \frac{1}{1 + yi} = \frac{1 - yi}{1 + y^2} = \frac{1}{1 + y^2} - \frac{y}{1 + y^2}\,i$$

Let $w = u + vi$. Then $u = \dfrac{1}{1 + y^2}$ and $v = \dfrac{-y}{1 + y^2}$.

Note that $v = -uy$, so $y = -\dfrac{v}{u}$ (when $u \neq 0$).

Substituting: $u = \dfrac{1}{1 + v^2/u^2} = \dfrac{u^2}{u^2 + v^2}$, giving $u^2 + v^2 = u$, i.e.:

$$u^2 - u + v^2 = 0 \implies \left(u - \frac{1}{2}\right)^2 + v^2 = \frac{1}{4}$$

This is a circle with centre $\left(\dfrac{1}{2}, 0\right)$ and radius $\dfrac{1}{2}$ in the
$w$-plane.
</details>

:::info
AQA places significant emphasis on complex transformations including $w = f(z)$ mappings.
Edexcel and OCR cover this topic with less depth. CIE focuses more on loci than on transformations.
:::

---

## 7. Summary of Key Results

$$\boxed{(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)}$$

$$\boxed{e^{i\theta} = \cos\theta + i\sin\theta}$$

$$\boxed{e^{i\pi} + 1 = 0}$$

$$\boxed{z_k = e^{2k\pi i/n} = \cos\!\left(\frac{2k\pi}{n}\right) + i\sin\!\left(\frac{2k\pi}{n}\right), \quad k = 0, 1, \ldots, n-1}$$

$$\boxed{\sum_{k=0}^{n-1} z_k = 0}$$

$$\boxed{|z - a| = r \iff \mathrm{circle centre } a \mathrm{ radius } r}$$

$$\boxed{\arg(z - a) = \alpha \iff \mathrm{half-line from } a \mathrm{ at angle } \alpha}$$

---

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
$\arg(z) = \pi - \arctan\!\left(\dfrac{1}{\sqrt{3}}\right) = \pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}$.

$$z^5 = 2^5\!\left(\cos\frac{25\pi}{6} + i\sin\frac{25\pi}{6}\right) = 32\!\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right) = 32\!\left(\frac{\sqrt{3}}{2} + \frac{1}{2}\,i\right) = 16\sqrt{3} + 16i$$
</details>

---

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

---

**Problem 3.** Find all solutions to $z^4 = 16i$, expressing each in the form $a + bi$.

<details>
<summary>Hint</summary>

Write $16i = 16e^{i\pi/2}$ and use the roots formula.
</details>

<details>
<summary>Answer</summary>

$16i = 16\!\left(\cos\dfrac{\pi}{2} + i\sin\dfrac{\pi}{2}\right)$.

$$z_k = 2\!\left(\cos\!\left(\frac{\pi/2 + 2k\pi}{4}\right) + i\sin\!\left(\frac{\pi/2 + 2k\pi}{4}\right)\right), \quad k = 0, 1, 2, 3$$

$$
\begin{aligned}
k = 0:\quad z_0 &= 2\!\left(\cos\frac{\pi}{8} + i\sin\frac{\pi}{8}\right) = 2\!\left(\frac{\sqrt{2+\sqrt{2}}}{2} + i\,\frac{\sqrt{2-\sqrt{2}}}{2}\right) = \sqrt{2+\sqrt{2}} + i\sqrt{2-\sqrt{2}} \\
k = 1:\quad z_1 &= 2\!\left(\cos\frac{5\pi}{8} + i\sin\frac{5\pi}{8}\right) = -\sqrt{2-\sqrt{2}} + i\sqrt{2+\sqrt{2}} \\
k = 2:\quad z_2 &= 2\!\left(\cos\frac{9\pi}{8} + i\sin\frac{9\pi}{8}\right) = -\sqrt{2+\sqrt{2}} - i\sqrt{2-\sqrt{2}} \\
k = 3:\quad z_3 &= 2\!\left(\cos\frac{13\pi}{8} + i\sin\frac{13\pi}{8}\right) = \sqrt{2-\sqrt{2}} - i\sqrt{2+\sqrt{2}}
\end{aligned}
$$
</details>

---

**Problem 4.** The fifth roots of unity are $\omega^0, \omega^1, \omega^2, \omega^3, \omega^4$ where
$\omega = e^{2\pi i/5}$. Show that $1 + \omega + \omega^2 + \omega^3 + \omega^4 = 0$ and deduce that
$\cos\dfrac{2\pi}{5} + \cos\dfrac{4\pi}{5} = -\dfrac{1}{2}$.

<details>
<summary>Hint</summary>

Sum the geometric series. Then separate real and imaginary parts.
</details>

<details>
<summary>Answer</summary>

The roots satisfy $z^5 - 1 = 0$. The coefficient of $z^4$ is 0, so by Vieta's formulas,
$\sum_{k=0}^{4} \omega^k = 0$.

Alternatively:
$\displaystyle\sum_{k=0}^{4}\omega^k = \frac{1 - \omega^5}{1 - \omega} = \frac{1 - 1}{1 - \omega} = 0$.

Expanding using $\omega^k = \cos\frac{2k\pi}{5} + i\sin\frac{2k\pi}{5}$:

$$\sum_{k=0}^{4}\omega^k = \underbrace{\sum_{k=0}^{4}\cos\frac{2k\pi}{5}}_{\mathrm{real}} + i\underbrace{\sum_{k=0}^{4}\sin\frac{2k\pi}{5}}_{\mathrm{imaginary}} = 0$$

The imaginary part is zero by symmetry ($\sin\theta = -\sin(2\pi - \theta)$). The real part gives:

$$1 + \cos\frac{2\pi}{5} + \cos\frac{4\pi}{5} + \cos\frac{6\pi}{5} + \cos\frac{8\pi}{5} = 0$$

Since $\cos\frac{6\pi}{5} = \cos\frac{4\pi}{5}$ and $\cos\frac{8\pi}{5} = \cos\frac{2\pi}{5}$:

$$1 + 2\cos\frac{2\pi}{5} + 2\cos\frac{4\pi}{5} = 0 \implies \cos\frac{2\pi}{5} + \cos\frac{4\pi}{5} = -\frac{1}{2} \quad \square$$
</details>

---

**Problem 5.** Sketch on separate Argand diagrams the loci given by (a) $|z - 1 - i| = |z - 3 + i|$,
and (b) $\arg(z - 2) = \dfrac{\pi}{3}$. Find the complex number(s) satisfying both conditions
simultaneously.

<details>
<summary>Hint</summary>

Part (a) is a perpendicular bisector. Part (b) is a half-line. Find their intersection.
</details>

<details>
<summary>Answer</summary>

**(a)** $|z - (1 + i)| = |z - (3 - i)|$ is the perpendicular bisector of the segment joining
$(1, 1)$ and $(3, -1)$. The midpoint is $(2, 0)$ and the slope of the segment is
$\dfrac{-1 - 1}{3 - 1} = -1$, so the perpendicular bisector has slope $1$ and equation $y = x - 2$.

**(b)** $\arg(z - 2) = \dfrac{\pi}{3}$ is a half-line from $(2, 0)$ at angle $\dfrac{\pi}{3}$ to the
positive real axis. Its equation is $y = \sqrt{3}(x - 2)$ for $x > 2$.

**Intersection:** Setting $x - 2 = \sqrt{3}(x - 2)$:

$(x - 2)(1 - \sqrt{3}) = 0$, so $x = 2$ (gives $y = 0$, but the half-line requires $x > 2$) or
$1 = \sqrt{3}$, which is false.

There is no intersection. The half-line from $(2, 0)$ at angle $\pi/3$ has slope $\sqrt{3}$, while
the perpendicular bisector has slope 1, and they only meet at the point $(2, 0)$ which is excluded
from the half-line.

**Answer:** No complex number satisfies both conditions simultaneously.
</details>

---

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

---

**Problem 7.** Express $\dfrac{(1+i)^6}{(1-i\sqrt{3})^4}$ in the form $a + bi$.

<details>
<summary>Hint</summary>

Write each term in exponential form and use the laws of indices.
</details>

<details>
<summary>Answer</summary>

$1 + i = \sqrt{2}\,e^{i\pi/4}$ and $1 - i\sqrt{3} = 2\,e^{-i\pi/3}$.

$$\frac{(1+i)^6}{(1-i\sqrt{3})^4} = \frac{(\sqrt{2}\,e^{i\pi/4})^6}{(2\,e^{-i\pi/3})^4} = \frac{8e^{3\pi i/2}}{16\,e^{-4\pi i/3}} = \frac{1}{2}\,e^{i(3\pi/2 + 4\pi/3)}$$

$$3\pi/2 + 4\pi/3 = \frac{9\pi + 8\pi}{6} = \frac{17\pi}{6} = 2\pi + \frac{5\pi}{6}$$

So:
$\dfrac{1}{2}\,e^{5\pi i/6} = \dfrac{1}{2}\!\left(\cos\dfrac{5\pi}{6} + i\sin\dfrac{5\pi}{6}\right) = \dfrac{1}{2}\!\left(-\dfrac{\sqrt{3}}{2} + \dfrac{1}{2}\,i\right) = -\dfrac{\sqrt{3}}{4} + \dfrac{1}{4}\,i$
</details>

---

**Problem 8.** The transformation $T$ from the $z$-plane to the $w$-plane is given by $w = z^2$. The
region $R$ in the $z$-plane is defined by $1 \leq |z| \leq 2$ and
$0 \leq \arg(z) \leq \dfrac{\pi}{4}$. Find and describe the image of $R$ under $T$.

<details>
<summary>Hint</summary>

Under $w = z^2$, the modulus squares and the argument doubles.
</details>

<details>
<summary>Answer</summary>

If $z = re^{i\theta}$, then $w = r^2 e^{2i\theta}$.

- Modulus: $1 \leq r \leq 2 \implies 1 \leq r^2 \leq 4$, so $1 \leq |w| \leq 4$.
- Argument: $0 \leq \theta \leq \dfrac{\pi}{4} \implies 0 \leq 2\theta \leq \dfrac{\pi}{2}$, so
  $0 \leq \arg(w) \leq \dfrac{\pi}{2}$.

The image is the region in the first quadrant of the $w$-plane between the circles $|w| = 1$ and
$|w| = 4$, bounded by the rays $\arg(w) = 0$ and $\arg(w) = \dfrac{\pi}{2}$.
</details>

---

**Problem 9.** Solve the equation $z^3 + z^2 + z + 1 = 0$ by recognising it as a geometric series,
and hence show that $\cos\dfrac{2\pi}{4} + \cos\dfrac{4\pi}{4} + \cos\dfrac{6\pi}{4} = -1$.

<details>
<summary>Hint</summary>

Factor $z^3 + z^2 + z + 1 = (z+1)(z^2+1)$. The roots are the 4th roots of unity excluding $z = 1$.
</details>

<details>
<summary>Answer</summary>

$z^3 + z^2 + z + 1 = \dfrac{z^4 - 1}{z - 1} = 0 \implies z^4 = 1$ with $z \neq 1$.

The 4th roots of unity are $1, i, -1, -i$, so the solutions are $z = i, -1, -i$.

Equivalently, the roots are $e^{k\pi i/2}$ for $k = 1, 2, 3$.

The sum of roots (by Vieta, coefficient of $z^2$ divided by leading coefficient) is $-1$:

$$i + (-1) + (-i) = -1 \quad \checkmark$$

Now: $e^{i\pi/2} + e^{i\pi} + e^{3i\pi/2} = i + (-1) + (-i) = -1$.

Separating real and imaginary parts: $\cos\dfrac{\pi}{2} + \cos\pi + \cos\dfrac{3\pi}{2} = -1$, i.e.
$0 - 1 + 0 = -1$. ✓

Alternatively, the claim as stated uses
$\cos\dfrac{2\pi}{4} + \cos\dfrac{4\pi}{4} + \cos\dfrac{6\pi}{4} = \cos\dfrac{\pi}{2} + \cos\pi + \cos\dfrac{3\pi}{2} = 0 + (-1) + 0 = -1$.
✓ $\square$
</details>

---

**Problem 10.** (a) Show that
$\dfrac{1}{e^{i\theta} - 1} = -\dfrac{1}{2} - \dfrac{i}{2}\cot\dfrac{\theta}{2}$ for
$\theta \notin 2\pi\mathbb{Z}$.

(b) Hence, or otherwise, find $\displaystyle\sum_{k=1}^{n-1}\frac{1}{1 - \omega^k}$ where
$\omega = e^{2\pi i/n}$.

<details>
<summary>Hint</summary>

For (a), multiply numerator and denominator by the conjugate $e^{-i\theta} - 1$ and use half-angle
identities. For (b), use the result from (a) with $\theta = 2k\pi/n$.
</details>

<details>
<summary>Answer</summary>

**(a)**
$\dfrac{1}{e^{i\theta} - 1} = \dfrac{e^{-i\theta} - 1}{(e^{i\theta} - 1)(e^{-i\theta} - 1)} = \dfrac{e^{-i\theta} - 1}{2 - (e^{i\theta} + e^{-i\theta})} = \dfrac{e^{-i\theta} - 1}{2 - 2\cos\theta}$.

Numerator:
$e^{-i\theta} - 1 = \cos\theta - 1 - i\sin\theta = -2\sin^2\dfrac{\theta}{2} - 2i\sin\dfrac{\theta}{2}\cos\dfrac{\theta}{2} = -2\sin\dfrac{\theta}{2}\!\left(\sin\dfrac{\theta}{2} + i\cos\dfrac{\theta}{2}\right)$.

Denominator: $2 - 2\cos\theta = 4\sin^2\dfrac{\theta}{2}$.

$$\frac{1}{e^{i\theta} - 1} = \frac{-2\sin\frac{\theta}{2}\!\left(\sin\frac{\theta}{2} + i\cos\frac{\theta}{2}\right)}{4\sin^2\frac{\theta}{2}} = \frac{-\sin\frac{\theta}{2} - i\cos\frac{\theta}{2}}{2\sin\frac{\theta}{2}} = -\frac{1}{2} - \frac{i}{2}\cot\frac{\theta}{2} \quad \square$$

**(b)** Using (a):
$\dfrac{1}{1 - \omega^k} = -\dfrac{1}{e^{2k\pi i/n} - 1} = \dfrac{1}{2} + \dfrac{i}{2}\cot\dfrac{k\pi}{n}$.

$$\sum_{k=1}^{n-1}\frac{1}{1 - \omega^k} = \sum_{k=1}^{n-1}\!\left(\frac{1}{2} + \frac{i}{2}\cot\frac{k\pi}{n}\right) = \frac{n-1}{2} + \frac{i}{2}\sum_{k=1}^{n-1}\cot\frac{k\pi}{n}$$

The cotangent sum is zero by symmetry: $\cot\dfrac{k\pi}{n} = -\cot\dfrac{(n-k)\pi}{n}$, so terms
cancel in pairs.

Therefore: $\displaystyle\sum_{k=1}^{n-1}\frac{1}{1 - \omega^k} = \frac{n - 1}{2}$.
</details>

:::

:::

:::
