---
title: Complex Numbers (Extended)
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: further-complex-numbers-extended
---

## Complex Numbers (Extended Treatment)

This document provides a rigorous treatment of modulus-argument form, De Moivre's theorem, roots of
complex numbers, loci in the Argand diagram, and Euler's formula.

:::info
Complex numbers unify algebra and geometry in a powerful way. Many results that are difficult to
prove in real analysis become straightforward when extended to the complex plane.
:::

<hr />

## 1. Modulus-Argument Form

### 1.1 Polar representation

Any non-zero complex number $z = x + iy$ can be written in **modulus-argument form** (polar form):

$$z = r(\cos\theta + i\sin\theta) = r\,\mathrm{cis}\,\theta$$

where $r = |z| = \sqrt{x^2 + y^2}$ and $\theta = \arg(z)$.

The argument is multi-valued: $\arg(z) = \theta + 2k\pi$ for $k \in \mathbb{Z}$. The **principal
argument** $\mathrm{Arg}(z)$ satisfies $-\pi \lt \mathrm{Arg}(z) \leq \pi$.

### 1.2 Multiplication and division in polar form

If $z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$ and $z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$, then:

$$z_1 z_2 = r_1 r_2\bigl(\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)\bigr)$$

$$\frac{z_1}{z_2} = \frac{r_1}{r_2}\bigl(\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)\bigr)$$

**Proof.** Using the compound angle formulas:

$$z_1 z_2 = r_1 r_2\bigl(\cos\theta_1\cos\theta_2 - \sin\theta_1\sin\theta_2 + i(\sin\theta_1\cos\theta_2 + \cos\theta_1\sin\theta_2)\bigr)$$

$$= r_1 r_2\bigl(\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)\bigr) \quad \blacksquare$$

This confirms: $|z_1 z_2| = |z_1||z_2|$ and $\arg(z_1 z_2) = \arg(z_1) + \arg(z_2)$.

### 1.3 Worked example

**Problem.** Express $\dfrac{1 + i\sqrt{3}}{1 - i}$ in modulus-argument form.

Numerator: $1 + i\sqrt{3}$. $r_1 = \sqrt{1 + 3} = 2$, $\theta_1 = \arctan\!\left(\dfrac{\sqrt{3}}{1}\right) = \dfrac{\pi}{3}$.

Denominator: $1 - i$. $r_2 = \sqrt{1 + 1} = \sqrt{2}$, $\theta_2 = \arctan\!\left(\dfrac{-1}{1}\right) = -\dfrac{\pi}{4}$.

$$\frac{z_1}{z_2} = \frac{2}{\sqrt{2}}\left(\cos\!\left(\frac{\pi}{3} - \left(-\frac{\pi}{4}\right)\right) + i\sin\!\left(\frac{7\pi}{12}\right)\right)$$

$$= \sqrt{2}\left(\cos\frac{7\pi}{12} + i\sin\frac{7\pi}{12}\right)$$

### 1.4 De Moivre's theorem

**Theorem (De Moivre).** For any integer $n$:

$$\bigl(r(\cos\theta + i\sin\theta)\bigr)^n = r^n\bigl(\cos n\theta + i\sin n\theta\bigr)$$

**Proof by induction for $n \geq 0$.**

**Base case** $n = 0$: $(\cos\theta + i\sin\theta)^0 = 1 = \cos 0 + i\sin 0$. True.

**Inductive step:** Assume true for $n = k$:

$$(\cos\theta + i\sin\theta)^{k+1} = (\cos\theta + i\sin\theta)^k(\cos\theta + i\sin\theta)$$

$$= (\cos k\theta + i\sin k\theta)(\cos\theta + i\sin\theta)$$

$$= \cos(k+1)\theta + i\sin(k+1)\theta$$

by the compound angle formulas. True for $n = k + 1$. $\blacksquare$

For negative integers, note that:

$$(\cos\theta + i\sin\theta)^{-1} = \cos(-\theta) + i\sin(-\theta) = \cos\theta - i\sin\theta$$

and the result follows by applying the positive case to the reciprocal.

### 1.5 Worked example: large powers

**Problem.** Find $(1 + i)^{10}$.

$1 + i = \sqrt{2}\!\left(\cos\dfrac{\pi}{4} + i\sin\dfrac{\pi}{4}\right)$.

$$(1 + i)^{10} = (\sqrt{2})^{10}\!\left(\cos\frac{5\pi}{2} + i\sin\frac{5\pi}{2}\right) = 32(0 + i) = 32i$$

### 1.6 Trigonometric identities from De Moivre

De Moivre's theorem provides a systematic way to derive multiple-angle formulas.

**Example:** Expanding $(\cos\theta + i\sin\theta)^3$:

$$\cos 3\theta + i\sin 3\theta = \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta$$

Equating real parts:

$$\cos 3\theta = \cos^3\theta - 3\cos\theta\sin^2\theta = 4\cos^3\theta - 3\cos\theta$$

Equating imaginary parts:

$$\sin 3\theta = 3\cos^2\theta\sin\theta - \sin^3\theta = 3\sin\theta - 4\sin^3\theta$$

<hr />

## 2. Roots of Complex Numbers

### 2.1 $n$-th roots

To solve $z^n = w$ where $w = R(\cos\alpha + i\sin\alpha)$:

$$z = R^{1/n}\!\left(\cos\frac{\alpha + 2k\pi}{n} + i\sin\frac{\alpha + 2k\pi}{n}\right), \quad k = 0, 1, 2, \ldots, n-1$$

### 2.2 Geometric interpretation

The $n$ roots of $w$ lie on a circle of radius $R^{1/n}$ centred at the origin, equally spaced at
angles of $\dfrac{2\pi}{n}$ apart.

### 2.3 Sum of roots

The sum of all $n$ roots of $z^n = w$ is zero (they form a regular polygon centred at the origin).

**Proof.** The roots are $R^{1/n}\,\omega^k$ where $\omega = \mathrm{cis}(2\pi/n)$ and $k = 0, 1, \ldots, n-1$.

$$\sum_{k=0}^{n-1}\omega^k = \frac{1 - \omega^n}{1 - \omega} = \frac{1 - 1}{1 - \omega} = 0 \quad \blacksquare$$

### 2.4 Worked example: cube roots

**Problem.** Find all cube roots of $-8$.

$-8 = 8(\cos\pi + i\sin\pi)$.

$$z_k = 8^{1/3}\!\left(\cos\frac{\pi + 2k\pi}{3} + i\sin\frac{\pi + 2k\pi}{3}\right), \quad k = 0, 1, 2$$

$k = 0$: $z_0 = 2\!\left(\cos\dfrac{\pi}{3} + i\sin\dfrac{\pi}{3}\right) = 1 + i\sqrt{3}$

$k = 1$: $z_1 = 2\!\left(\cos\pi + i\sin\pi\right) = -2$

$k = 2$: $z_2 = 2\!\left(\cos\dfrac{5\pi}{3} + i\sin\dfrac{5\pi}{3}\right) = 1 - i\sqrt{3}$

Check: $(1 + i\sqrt{3}) + (-2) + (1 - i\sqrt{3}) = 0$.

### 2.5 Roots of unity

The **$n$-th roots of unity** are the solutions to $z^n = 1$:

$$z_k = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n}, \quad k = 0, 1, \ldots, n-1$$

These form a regular $n$-gon inscribed in the unit circle.

**Key property:** $\displaystyle\sum_{k=0}^{n-1} z_k = 0$ and $\displaystyle\prod_{k=0}^{n-1} z_k = (-1)^{n-1}$.

<hr />

## 3. Loci in the Argand Diagram

### 3.1 Circles

$|z - z_0| = r$ represents a circle with centre $z_0$ and radius $r$.

**Proof.** If $z = x + iy$ and $z_0 = a + ib$:

$$|z - z_0| = \sqrt{(x - a)^2 + (y - b)^2} = r \implies (x - a)^2 + (y - b)^2 = r^2 \quad \blacksquare$$

### 3.2 Perpendicular bisectors

$|z - z_1| = |z - z_2|$ represents the perpendicular bisector of the segment joining $z_1$ and
$z_2$.

### 3.3 Half-planes and inequalities

$|z - z_0| \lt r$: interior of the circle (open disc).

$|z - z_0| \gt r$: exterior of the circle.

$\arg(z - z_0) = \alpha$: a half-line from $z_0$ at angle $\alpha$ to the positive real axis.

$\alpha \lt \arg(z - z_0) \lt \beta$: the region between two half-lines (an angular sector).

### 3.4 Worked example: combined locus

**Problem.** Sketch the region defined by $|z - 2| \leq 3$ and $0 \leq \arg(z) \leq \dfrac{\pi}{4}$.

$|z - 2| \leq 3$ is a closed disc centred at $2 + 0i$ with radius 3. Combined with the angular
constraint, the region is the portion of this disc lying between the positive real axis and the
line $\arg z = \pi/4$.

The disc extends from $x = -1$ to $x = 5$ on the real axis. The line $\arg z = \pi/4$ is $y = x$.
The intersection of $y = x$ with the circle $(x-2)^2 + y^2 = 9$ gives:

$$(x - 2)^2 + x^2 = 9 \implies 2x^2 - 4x - 5 = 0 \implies x = \frac{4 \pm \sqrt{16 + 40}}{4} = \frac{4 \pm \sqrt{56}}{4}$$

The relevant intersection is at $x = 1 + \dfrac{\sqrt{14}}{2} \approx 2.87$.

### 3.5 Worked example: Cartesian equation from locus

**Problem.** Find the Cartesian equation of the locus $|z - 3 + 2i| = 2|z + 1 - i|$.

Let $z = x + iy$:

$$\sqrt{(x - 3)^2 + (y + 2)^2} = 2\sqrt{(x + 1)^2 + (y - 1)^2}$$

$$(x - 3)^2 + (y + 2)^2 = 4(x + 1)^2 + 4(y - 1)^2$$

$$x^2 - 6x + 9 + y^2 + 4y + 4 = 4x^2 + 8x + 4 + 4y^2 - 8y + 4$$

$$3x^2 + 14x + 3y^2 - 12y - 5 = 0$$

Completing the square:

$$3\!\left(x + \frac{7}{3}\right)^{\!2} + 3\!\left(y - 2\right)^{\!2} = 5 + \frac{49}{3} + 12 = \frac{100}{3}$$

$$\left(x + \frac{7}{3}\right)^{\!2} + (y - 2)^2 = \frac{100}{9}$$

This is a circle with centre $\left(-\dfrac{7}{3}, 2\right)$ and radius $\dfrac{10}{3}$.

<hr />

## 4. Euler's Formula

### 4.1 Statement

**Euler's formula:**

$$\boxed{e^{i\theta} = \cos\theta + i\sin\theta}$$

This connects the exponential function with trigonometric functions via the imaginary unit.

### 4.2 Proof (via power series)

$$e^{i\theta} = \sum_{n=0}^{\infty}\frac{(i\theta)^n}{n!} = 1 + i\theta + \frac{(i\theta)^2}{2!} + \frac{(i\theta)^3}{3!} + \cdots$$

Since $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, and this pattern repeats with period 4:

$$= \left(1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots\right) + i\left(\theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \cdots\right)$$

$$= \cos\theta + i\sin\theta \quad \blacksquare$$

### 4.3 Consequences

**Euler's identity:** Setting $\theta = \pi$:

$$e^{i\pi} + 1 = 0$$

This connects five fundamental constants: $e$, $i$, $\pi$, $1$, and $0$.

**Complex exponential form:** Any complex number can be written as:

$$z = re^{i\theta}$$

where $r = |z|$ and $\theta = \arg(z)$.

### 4.4 Exponential form of De Moivre

$$\bigl(re^{i\theta}\bigr)^n = r^n e^{in\theta}$$

$$z_1 z_2 = r_1 r_2\,e^{i(\theta_1 + \theta_2)}$$

### 4.5 Exponential form of trigonometric functions

From Euler's formula:

$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}$$

$$\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$

### 4.6 Worked example

**Problem.** Express $\dfrac{(1 + i)^5}{(1 - i)^3}$ in the form $a + bi$ and in exponential form.

$1 + i = \sqrt{2}\,e^{i\pi/4}$, $1 - i = \sqrt{2}\,e^{-i\pi/4}$.

$$\frac{(1 + i)^5}{(1 - i)^3} = \frac{(\sqrt{2})^5\,e^{i5\pi/4}}{(\sqrt{2})^3\,e^{-i3\pi/4}} = 4\sqrt{2}\,e^{i2\pi} = 4\sqrt{2}$$

In Cartesian form: $4\sqrt{2} + 0i$.

### 4.7 Worked example: solving equations

**Problem.** Find all solutions to $e^z = 1 + i\sqrt{3}$.

$1 + i\sqrt{3} = 2\,e^{i\pi/3}$.

So $e^{x + iy} = e^x\,e^{iy} = 2\,e^{i(\pi/3 + 2k\pi)}$.

Equating moduli: $e^x = 2 \implies x = \ln 2$.

Equating arguments: $y = \dfrac{\pi}{3} + 2k\pi$ for $k \in \mathbb{Z}$.

$$z = \ln 2 + i\!\left(\frac{\pi}{3} + 2k\pi\right), \quad k \in \mathbb{Z}$$

:::warning Common Pitfall
The complex exponential is periodic with period $2\pi i$, so equations of the form $e^z = w$ have
infinitely many solutions. Always include the general solution with $2k\pi$.
:::

<hr />

## 5. Practice Problems

### Problem 1

Express $z = -\sqrt{3} + i$ in modulus-argument form and hence find $z^8$.

<details>
<summary>Solution</summary>

$r = \sqrt{3 + 1} = 2$, $\theta = \pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}$.

$z = 2\,e^{i5\pi/6}$.

$z^8 = 2^8\,e^{i40\pi/6} = 256\,e^{i20\pi/3} = 256\,e^{i(6\pi + 2\pi/3)} = 256\,e^{i2\pi/3} = 256\!\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -128 + 128i\sqrt{3}$.

</details>

### Problem 2

Find all fifth roots of $16 + 16i$ and show that their sum is zero.

<details>
<summary>Solution</summary>

$16 + 16i = 16\sqrt{2}\,e^{i\pi/4}$.

$z_k = (16\sqrt{2})^{1/5}\,e^{i(\pi/4 + 2k\pi)/5} = 2^{1/2 + 3/5}\,e^{i(\pi + 8k\pi)/20} = 2^{11/10}\,e^{i(\pi + 8k\pi)/20}$

for $k = 0, 1, 2, 3, 4$.

The sum is $2^{11/10}\displaystyle\sum_{k=0}^{4}e^{i(\pi + 8k\pi)/20} = 2^{11/10} \cdot e^{i\pi/20}\sum_{k=0}^{4}(e^{i8\pi/20})^k$.

Since $\omega = e^{i2\pi/5}$ and $\omega^5 = 1$ with $\omega \neq 1$:

$\sum_{k=0}^{4}\omega^k = \dfrac{1 - \omega^5}{1 - \omega} = 0$.

</details>

### Problem 3

Find the Cartesian equation of the locus $|z - 1 + 2i| = |z - 3 - 4i|$.

<details>
<summary>Solution</summary>

Let $z = x + iy$:

$(x - 1)^2 + (y + 2)^2 = (x - 3)^2 + (y - 4)^2$

$x^2 - 2x + 1 + y^2 + 4y + 4 = x^2 - 6x + 9 + y^2 - 8y + 16$

$-2x + 4y + 5 = -6x - 8y + 25$

$4x + 12y = 20 \implies x + 3y = 5$

This is a straight line (the perpendicular bisector of the segment joining $1 - 2i$ and $3 + 4i$).

</details>

### Problem 4

Use Euler's formula to show that $\cos^4\theta = \dfrac{3 + 4\cos 2\theta + \cos 4\theta}{8}$.

<details>
<summary>Solution</summary>

$\cos\theta = \dfrac{e^{i\theta} + e^{-i\theta}}{2}$, so $\cos^4\theta = \dfrac{1}{16}(e^{i\theta} + e^{-i\theta})^4$.

$= \dfrac{1}{16}(e^{4i\theta} + 4e^{2i\theta} + 6 + 4e^{-2i\theta} + e^{-4i\theta})$

$= \dfrac{1}{16}(2\cos 4\theta + 8\cos 2\theta + 6)$

$= \dfrac{3 + 4\cos 2\theta + \cos 4\theta}{8}$.

</details>
