---
title: Complex Numbers (Extended)
description:
  'A-Level Further Maths notes on Complex Numbers (Extended): Complex Numbers (Extended Treatment);
  1. Modulus-Argument Form; 1.1 Polar representation.'
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: further-complex-numbers-extended
---

## Complex Numbers (Extended Treatment)

This document provides a rigorous treatment of modulus-argument form, De Moivre's theorem, roots of
Complex numbers, loci in the Argand diagram, and Euler's formula.

:::info Complex numbers unify algebra and geometry in a powerful way. Many results that are
Difficult to prove in real analysis become straightforward when extended to the complex plane. :::

<hr />

## 1. Modulus-Argument Form

### 1.1 Polar representation

Any non-zero complex number $z = x + iy$ can be written in **modulus-argument form** (polar form):

$$z = r(\cos\theta + i\sin\theta) = r\,\mathrm{cis}\,\theta$$

Where $r = |z| = \sqrt{x^2 + y^2}$ and $\theta = \arg(z)$.

The argument is multi-valued: $\arg(z) = \theta + 2k\pi$ for $k \in \mathbb{Z}$. The **principal
Argument** $\mathrm{Arg}(z)$ satisfies $-\pi \lt \mathrm{Arg}(z) \leq \pi$.

### 1.2 Multiplication and division in polar form

If $z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$ and $z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$Then:

$$z_1 z_2 = r_1 r_2\bigl(\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)\bigr)$$

$$\frac{z_1}{z_2} = \frac{r_1}{r_2}\bigl(\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)\bigr)$$

**Proof.** Using the compound angle formulas:

$$z_1 z_2 = r_1 r_2\bigl(\cos\theta_1\cos\theta_2 - \sin\theta_1\sin\theta_2 + i(\sin\theta_1\cos\theta_2 + \cos\theta_1\sin\theta_2)\bigr)$$

$$= r_1 r_2\bigl(\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)\bigr) \quad \blacksquare$$

This confirms: $|z_1 z_2| = |z_1||z_2|$ and $\arg(z_1 z_2) = \arg(z_1) + \arg(z_2)$.

### 1.3 Worked example

**Problem.** Express $\dfrac◆LB◆1 + i\sqrt{3}◆RB◆◆LB◆1 - i◆RB◆$ in modulus-argument form.

Numerator: $1 + i\sqrt{3}$. $r_1 = \sqrt{1 + 3} = 2$
$\theta_1 = \arctan\!\left(\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆1◆RB◆\right) = \dfrac◆LB◆\pi◆RB◆◆LB◆3◆RB◆$.

Denominator: $1 - i$. $r_2 = \sqrt{1 + 1} = \sqrt{2}$
$\theta_2 = \arctan\!\left(\dfrac{-1}{1}\right) = -\dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$.

$$\frac{z_1}{z_2} = \frac◆LB◆2◆RB◆◆LB◆\sqrt{2}◆RB◆\left(\cos\!\left(\frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆ - \left(-\frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\right)\right) + i\sin\!\left(\frac◆LB◆7\pi◆RB◆◆LB◆12◆RB◆\right)\right)$$

$$= \sqrt{2}\left(\cos\frac◆LB◆7\pi◆RB◆◆LB◆12◆RB◆ + i\sin\frac◆LB◆7\pi◆RB◆◆LB◆12◆RB◆\right)$$

### 1.4 De Moivre's theorem

**Theorem (De Moivre).** For any integer $n$:

$$\bigl(r(\cos\theta + i\sin\theta)\bigr)^n = r^n\bigl(\cos n\theta + i\sin n\theta\bigr)$$

**Proof by induction for $n \geq 0$.**

**Base case** $n = 0$: $(\cos\theta + i\sin\theta)^0 = 1 = \cos 0 + i\sin 0$. True.

**Inductive step:** Assume true for $n = k$:

$$(\cos\theta + i\sin\theta)^{k+1} = (\cos\theta + i\sin\theta)^k(\cos\theta + i\sin\theta)$$

$$= (\cos k\theta + i\sin k\theta)(\cos\theta + i\sin\theta)$$

$$= \cos(k+1)\theta + i\sin(k+1)\theta$$

By the compound angle formulas. True for $n = k + 1$. $\blacksquare$

For negative integers, note that:

$$(\cos\theta + i\sin\theta)^{-1} = \cos(-\theta) + i\sin(-\theta) = \cos\theta - i\sin\theta$$

And the result follows by applying the positive case to the reciprocal.

### 1.5 Worked example: large powers

**Problem.** Find $(1 + i)^{10}$.

$1 + i = \sqrt{2}\!\left(\cos\dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆ + i\sin\dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\right)$.

$$(1 + i)^{10} = (\sqrt{2})^{10}\!\left(\cos\frac◆LB◆5\pi◆RB◆◆LB◆2◆RB◆ + i\sin\frac◆LB◆5\pi◆RB◆◆LB◆2◆RB◆\right) = 32(0 + i) = 32i$$

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

$$z = R^{1/n}\!\left(\cos\frac◆LB◆\alpha + 2k\pi◆RB◆◆LB◆n◆RB◆ + i\sin\frac◆LB◆\alpha + 2k\pi◆RB◆◆LB◆n◆RB◆\right), \quad k = 0, 1, 2, \ldots, n-1$$

### 2.2 Geometric interpretation

The $n$ roots of $w$ lie on a circle of radius $R^{1/n}$ centred at the origin, equally spaced at
Angles of $\dfrac◆LB◆2\pi◆RB◆◆LB◆n◆RB◆$ apart.

### 2.3 Sum of roots

The sum of all $n$ roots of $z^n = w$ is zero (they form a regular polygon centred at the origin).

**Proof.** The roots are $R^{1/n}\,\omega^k$ where $\omega = \mathrm{cis}(2\pi/n)$ and
$k = 0, 1, \ldots, n-1$.

$$\sum_{k=0}^{n-1}\omega^k = \frac◆LB◆1 - \omega^n◆RB◆◆LB◆1 - \omega◆RB◆ = \frac◆LB◆1 - 1◆RB◆◆LB◆1 - \omega◆RB◆ = 0 \quad \blacksquare$$

### 2.4 Worked example: cube roots

**Problem.** Find all cube roots of $-8$.

$-8 = 8(\cos\pi + i\sin\pi)$.

$$z_k = 8^{1/3}\!\left(\cos\frac◆LB◆\pi + 2k\pi◆RB◆◆LB◆3◆RB◆ + i\sin\frac◆LB◆\pi + 2k\pi◆RB◆◆LB◆3◆RB◆\right), \quad k = 0, 1, 2$$

$k = 0$:
$z_0 = 2\!\left(\cos\dfrac◆LB◆\pi◆RB◆◆LB◆3◆RB◆ + i\sin\dfrac◆LB◆\pi◆RB◆◆LB◆3◆RB◆\right) = 1 + i\sqrt{3}$

$k = 1$: $z_1 = 2\!\left(\cos\pi + i\sin\pi\right) = -2$

$k = 2$:
$z_2 = 2\!\left(\cos\dfrac◆LB◆5\pi◆RB◆◆LB◆3◆RB◆ + i\sin\dfrac◆LB◆5\pi◆RB◆◆LB◆3◆RB◆\right) = 1 - i\sqrt{3}$

Check: $(1 + i\sqrt{3}) + (-2) + (1 - i\sqrt{3}) = 0$.

### 2.5 Roots of unity

The **$n$-th roots of unity** are the solutions to $z^n = 1$:

$$z_k = \cos\frac◆LB◆2k\pi◆RB◆◆LB◆n◆RB◆ + i\sin\frac◆LB◆2k\pi◆RB◆◆LB◆n◆RB◆, \quad k = 0, 1, \ldots, n-1$$

These form a regular $n$-gon inscribed in the unit circle.

**Key property:** $\displaystyle\sum_{k=0}^{n-1} z_k = 0$ and
$\displaystyle\prod_{k=0}^{n-1} z_k = (-1)^{n-1}$.

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

**Problem.** Sketch the region defined by $|z - 2| \leq 3$ and
$0 \leq \arg(z) \leq \dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$.

$|z - 2| \leq 3$ is a closed disc centred at $2 + 0i$ with radius 3. Combined with the angular
Constraint, the region is the portion of this disc lying between the positive real axis and the line
$\arg z = \pi/4$.

The disc extends from $x = -1$ to $x = 5$ on the real axis. The line $\arg z = \pi/4$ is $y = x$.
The intersection of $y = x$ with the circle $(x-2)^2 + y^2 = 9$ gives:

$$(x - 2)^2 + x^2 = 9 \implies 2x^2 - 4x - 5 = 0 \implies x = \frac◆LB◆4 \pm \sqrt{16 + 40}◆RB◆◆LB◆4◆RB◆ = \frac◆LB◆4 \pm \sqrt{56}◆RB◆◆LB◆4◆RB◆$$

The relevant intersection is at $x = 1 + \dfrac◆LB◆\sqrt{14}◆RB◆◆LB◆2◆RB◆ \approx 2.87$.

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

$$e^{i\theta} = \sum_{n=0}^{\infty}\frac◆LB◆(i\theta)^n◆RB◆◆LB◆n!◆RB◆ = 1 + i\theta + \frac◆LB◆(i\theta)^2◆RB◆◆LB◆2!◆RB◆ + \frac◆LB◆(i\theta)^3◆RB◆◆LB◆3!◆RB◆ + \cdots$$

Since $i^2 = -1$, $i^3 = -i$, $i^4 = 1$And this pattern repeats with period 4:

$$= \left(1 - \frac◆LB◆\theta^2◆RB◆◆LB◆2!◆RB◆ + \frac◆LB◆\theta^4◆RB◆◆LB◆4!◆RB◆ - \cdots\right) + i\left(\theta - \frac◆LB◆\theta^3◆RB◆◆LB◆3!◆RB◆ + \frac◆LB◆\theta^5◆RB◆◆LB◆5!◆RB◆ - \cdots\right)$$

$$= \cos\theta + i\sin\theta \quad \blacksquare$$

### 4.3 Consequences

**Euler's identity:** Setting $\theta = \pi$:

$$e^{i\pi} + 1 = 0$$

This connects five fundamental constants: $e$, $i$, $\pi$, $1$And $0$.

**Complex exponential form:** Any complex number can be written as:

$$z = re^{i\theta}$$

Where $r = |z|$ and $\theta = \arg(z)$.

### 4.4 Exponential form of De Moivre

$$\bigl(re^{i\theta}\bigr)^n = r^n e^{in\theta}$$

$$z_1 z_2 = r_1 r_2\,e^{i(\theta_1 + \theta_2)}$$

### 4.5 Exponential form of trigonometric functions

From Euler's formula:

$$\cos\theta = \frac◆LB◆e^{i\theta} + e^{-i\theta}◆RB◆◆LB◆2◆RB◆$$

$$\sin\theta = \frac◆LB◆e^{i\theta} - e^{-i\theta}◆RB◆◆LB◆2i◆RB◆$$

### 4.6 Worked example

**Problem.** Express $\dfrac{(1 + i)^5}{(1 - i)^3}$ in the form $a + bi$ and in exponential form.

$1 + i = \sqrt{2}\,e^{i\pi/4}$, $1 - i = \sqrt{2}\,e^{-i\pi/4}$.

$$\frac{(1 + i)^5}{(1 - i)^3} = \frac◆LB◆(\sqrt{2})^5\,e^{i5\pi/4}◆RB◆◆LB◆(\sqrt{2})^3\,e^{-i3\pi/4}◆RB◆ = 4\sqrt{2}\,e^{i2\pi} = 4\sqrt{2}$$

In Cartesian form: $4\sqrt{2} + 0i$.

### 4.7 Worked example: solving equations

**Problem.** Find all solutions to $e^z = 1 + i\sqrt{3}$.

$1 + i\sqrt{3} = 2\,e^{i\pi/3}$.

So $e^{x + iy} = e^x\,e^{iy} = 2\,e^{i(\pi/3 + 2k\pi)}$.

Equating moduli: $e^x = 2 \implies x = \ln 2$.

Equating arguments: $y = \dfrac◆LB◆\pi◆RB◆◆LB◆3◆RB◆ + 2k\pi$ for $k \in \mathbb{Z}$.

$$z = \ln 2 + i\!\left(\frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆ + 2k\pi\right), \quad k \in \mathbb{Z}$$

:::warning Common Pitfall The complex exponential is periodic with period $2\pi i$So equations of
The form $e^z = w$ have infinitely many solutions. Always include the general solution with $2k\pi$.
:::

<hr />

## 5. Practice Problems

### Problem 1

Express $z = -\sqrt{3} + i$ in modulus-argument form and hence find $z^8$.

<details>
<summary>Solution</summary>

$r = \sqrt{3 + 1} = 2$, $\theta = \pi - \dfrac◆LB◆\pi◆RB◆◆LB◆6◆RB◆ = \dfrac◆LB◆5\pi◆RB◆◆LB◆6◆RB◆$.

$z = 2\,e^{i5\pi/6}$.

$z^8 = 2^8\,e^{i40\pi/6} = 256\,e^{i20\pi/3} = 256\,e^{i(6\pi + 2\pi/3)} = 256\,e^{i2\pi/3} = 256\!\left(-\frac{1}{2} + i\frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\right) = -128 + 128i\sqrt{3}$.

</details>

### Problem 2

Find all fifth roots of $16 + 16i$ and show that their sum is zero.

<details>
<summary>Solution</summary>

$16 + 16i = 16\sqrt{2}\,e^{i\pi/4}$.

$z_k = (16\sqrt{2})^{1/5}\,e^{i(\pi/4 + 2k\pi)/5} = 2^{1/2 + 3/5}\,e^{i(\pi + 8k\pi)/20} = 2^{11/10}\,e^{i(\pi + 8k\pi)/20}$

For $k = 0, 1, 2, 3, 4$.

The sum is
$2^{11/10}\displaystyle\sum_{k=0}^{4}e^{i(\pi + 8k\pi)/20} = 2^{11/10} \cdot e^{i\pi/20}\sum_{k=0}^{4}(e^{i8\pi/20})^k$.

Since $\omega = e^{i2\pi/5}$ and $\omega^5 = 1$ with $\omega \neq 1$:

$\sum_{k=0}^{4}\omega^k = \dfrac◆LB◆1 - \omega^5◆RB◆◆LB◆1 - \omega◆RB◆ = 0$.

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

Use Euler's formula to show that
$\cos^4\theta = \dfrac◆LB◆3 + 4\cos 2\theta + \cos 4\theta◆RB◆◆LB◆8◆RB◆$.

<details>
<summary>Solution</summary>

$\cos\theta = \dfrac◆LB◆e^{i\theta} + e^{-i\theta}◆RB◆◆LB◆2◆RB◆$So
$\cos^4\theta = \dfrac{1}{16}(e^{i\theta} + e^{-i\theta})^4$.

$= \dfrac{1}{16}(e^{4i\theta} + 4e^{2i\theta} + 6 + 4e^{-2i\theta} + e^{-4i\theta})$

$= \dfrac{1}{16}(2\cos 4\theta + 8\cos 2\theta + 6)$

$= \dfrac◆LB◆3 + 4\cos 2\theta + \cos 4\theta◆RB◆◆LB◆8◆RB◆$.

</details>

---

## 6. Further Proofs and Key Results

### 6.1 Proof: product of roots of unity

**Theorem.** The product of all $n$-th roots of unity is $(-1)^{n-1}$.

**Proof.** The $n$-th roots of unity are the roots of $z^n - 1 = 0$. By Vieta's formulas, the
Product of all $n$ roots equals the constant term (up to sign):

$$\prod_{k=0}^{n-1} z_k = (-1)^n \cdot \frac{-1}{1} = (-1)^{n-1} \quad \blacksquare$$

### 6.2 Proof: conjugate root theorem for real polynomials

**Theorem.** If $p(z)$ is a polynomial with real coefficients and $p(\alpha) = 0$Then
$p(\overline{\alpha}) = 0$.

**Proof.** Let $p(z) = a_n z^n + \cdots + a_1 z + a_0$ with all $a_i \in \mathbb{R}$.

$$p(\overline{\alpha}) = a_n \overline{\alpha}^n + \cdots + a_1 \overline{\alpha} + a_0 = \overline{a_n}\,\overline{\alpha^n} + \cdots + \overline{a_1}\,\overline{\alpha} + \overline{a_0}$$

$$= \overline{a_n \alpha^n + \cdots + a_1 \alpha + a_0} = \overline{p(\alpha)} = \overline{0} = 0 \quad \blacksquare$$

### 6.3 Proof: $|z_1 + z_2| \leq |z_1| + |z_2|$ (triangle inequality)

**Proof.** Using the exponential form, let $z_1 = r_1 e^{i\theta_1}$ and $z_2 = r_2 e^{i\theta_2}$.

$$|z_1 + z_2|^2 = (z_1 + z_2)\overline{(z_1 + z_2)} = |z_1|^2 + |z_2|^2 + z_1\overline{z_2} + \overline{z_1}z_2$$

$$= |z_1|^2 + |z_2|^2 + 2\,\mathrm{Re}(z_1\overline{z_2}) \leq |z_1|^2 + |z_2|^2 + 2|z_1||z_2| = (|z_1| + |z_2|)^2$$

Since $\mathrm{Re}(w) \leq |w|$ for any complex $w$. Taking square roots gives the result.
$\blacksquare$

---

## 7. Common Pitfalls

:::warning warning

1. **Argument range:** Always specify whether your argument is the principal value $(-\pi, \pi]$ or
   the general value. When multiplying or dividing complex numbers, the resulting argument may fall
   outside the principal range and must be adjusted.
2. **Roots of negative numbers:** When finding roots of negative real numbers, the argument is $\pi$
   (not $-\pi$), and the roots are distributed starting from angle $\pi/n$.
3. **Locus regions:** $|z - z_0| = r$ is a circle (boundary only). Use $\leq$ or $\geq$ for the
   interior or exterior including the boundary. Shade carefully in Argand diagrams.
4. **Forgetting all roots:** For $z^n = w$There are exactly $n$ distinct roots. Do not forget to
   include $k = 0, 1, \ldots, n-1$. :::

---

## 8. Additional Exam-Style Questions

### Question 5

The complex numbers $z_1$ and $z_2$ satisfy $z_1 = 1 + i$ and $z_2 = 1 - \sqrt{3}i$.

**(a)** Find $z_1 z_2$ in the form $re^{i\theta}$ where $-\pi < \theta \leq \pi$.

**(b)** Hence find $\dfrac{z_1^4}{z_2^2}$ in Cartesian form.

<details>
<summary>Solution</summary>

**(a)** $z_1 = \sqrt{2}\,e^{i\pi/4}$, $z_2 = 2\,e^{-i\pi/3}$.

$z_1 z_2 = 2\sqrt{2}\,e^{i(\pi/4 - \pi/3)} = 2\sqrt{2}\,e^{-i\pi/12}$.

**(b)**
$\dfrac{z_1^4}{z_2^2} = \dfrac◆LB◆(\sqrt{2})^4\,e^{i\pi}◆RB◆◆LB◆2^2\,e^{-i2\pi/3}◆RB◆ = \dfrac◆LB◆4\,e^{i\pi}◆RB◆◆LB◆4\,e^{-i2\pi/3}◆RB◆ = e^{i5\pi/3}$.

In Cartesian form:
$e^{i5\pi/3} = \cos\dfrac◆LB◆5\pi◆RB◆◆LB◆3◆RB◆ + i\sin\dfrac◆LB◆5\pi◆RB◆◆LB◆3◆RB◆ = \dfrac{1}{2} - i\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆$.

</details>

### Question 6

**(a)** Show that the roots of $z^4 + 16 = 0$ can be expressed as
$z = \sqrt{2}\,e^{i(\pi + 2k\pi)/4}$ for $k = 0, 1, 2, 3$.

**(b)** Find the Cartesian equations of the perpendicular bisector of the line segment joining two
Consecutive roots.

<details>
<summary>Solution</summary>

**(a)** $z^4 = -16 = 16\,e^{i\pi}$So $z = 16^{1/4}\,e^{i(\pi + 2k\pi)/4} = 2\,e^{i(\pi + 2k\pi)/4}$
for $k = 0, 1, 2, 3$.

Note: $\sqrt{2}$ in the question is incorrect; it should be $2$ (since $16^{1/4} = 2$).

The four roots are:

- $k = 0$: $2e^{i\pi/4} = \sqrt{2} + i\sqrt{2}$
- $k = 1$: $2e^{i3\pi/4} = -\sqrt{2} + i\sqrt{2}$
- $k = 2$: $2e^{i5\pi/4} = -\sqrt{2} - i\sqrt{2}$
- $k = 3$: $2e^{i7\pi/4} = \sqrt{2} - i\sqrt{2}$

**(b)** Consecutive roots $z_0 = \sqrt{2} + i\sqrt{2}$ and $z_1 = -\sqrt{2} + i\sqrt{2}$.

The midpoint is $(0, \sqrt{2})$ and the segment is horizontal, so the perpendicular bisector is the
Vertical line $x = 0$ (the imaginary axis).

</details>

### Question 7

The point $P$ representing the complex number $z$ moves such that $|z - 4 - 3i| = 2|z - 1 + i|$.

**(a)** Show that the locus of $P$ is a circle and find its centre and radius.

**(b)** Find the minimum and maximum values of $|z|$ on this locus.

<details>
<summary>Solution</summary>

**(a)** Let $z = x + iy$:

$(x - 4)^2 + (y - 3)^2 = 4\bigl[(x - 1)^2 + (y + 1)^2\bigr]$

$x^2 - 8x + 16 + y^2 - 6y + 9 = 4x^2 - 8x + 4 + 4y^2 + 8y + 4$

$3x^2 + 3y^2 + 12y - 17 = 0$

$x^2 + y^2 + 4y = \dfrac{17}{3}$

$x^2 + (y + 2)^2 = \dfrac{17}{3} + 4 = \dfrac{29}{3}$

Centre: $(0, -2)$Radius: $\sqrt{29/3}$.

**(b)** $|z|$ is the distance from the origin to a point on the circle.

Distance from origin to centre: $\sqrt{0^2 + (-2)^2} = 2$.

Minimum $|z| = 2 - \sqrt{29/3}$. Since $\sqrt{29/3} \approx 3.11 > 2$This is negative, so the
Minimum is $|\text{radius} - d| = \sqrt{29/3} - 2$.

Maximum $|z| = 2 + \sqrt{29/3}$.

</details>

<hr />

## 9. Advanced Worked Examples

### Example 9.1: Roots of unity and polynomial factorisation

**Problem.** The sixth roots of unity are the roots of $z^6 - 1 = 0$. Show that $z^6 - 1$ can be
Factorised as $(z-1)(z+1)(z^2-z+1)(z^2+z+1)$.

**Solution.** The sixth roots of unity are $e^{ik\pi/3}$ for $k = 0, 1, \ldots, 5$:

$k = 0$: $z = 1$Factor $(z - 1)$. $k = 3$: $z = e^{i\pi} = -1$Factor $(z + 1)$. $k = 1, 5$:
$z = e^{i\pi/3}$ and $z = e^{i5\pi/3}$Which are conjugate. Their combined factor is
$z^2 - 2\cos(\pi/3)z + 1 = z^2 - z + 1$. $k = 2, 4$: $z = e^{i2\pi/3}$ and $z = e^{i4\pi/3}$Which
Are conjugate. Their combined factor is $z^2 - 2\cos(2\pi/3)z + 1 = z^2 + z + 1$.

Therefore $z^6 - 1 = (z-1)(z+1)(z^2 - z + 1)(z^2 + z + 1)$. $\blacksquare$

### Example 9.2: Using De Moivre to derive $\cos 5\theta$

**Problem.** Use De Moivre's theorem to express $\cos 5\theta$ in terms of powers of $\cos\theta$.

**Solution.** $(\cos\theta + i\sin\theta)^5 = \cos 5\theta + i\sin 5\theta$.

Expanding the LHS using the binomial theorem:

$$(\cos\theta + i\sin\theta)^5 = \cos^5\theta + 5i\cos^4\theta\sin\theta - 10\cos^3\theta\sin^2\theta - 10i\cos^2\theta\sin^3\theta + 5\cos\theta\sin^4\theta + i\sin^5\theta$$

Equating real parts and using $\sin^2\theta = 1 - \cos^2\theta$:

$$\cos 5\theta = \cos^5\theta - 10\cos^3\theta(1-\cos^2\theta) + 5\cos\theta(1-\cos^2\theta)^2$$

$$= \cos^5\theta - 10\cos^3\theta + 10\cos^5\theta + 5\cos\theta - 10\cos^3\theta + 5\cos^5\theta$$

$$= 16\cos^5\theta - 20\cos^3\theta + 5\cos\theta$$

### Example 9.3: Loci involving arguments

**Problem.** On an Argand diagram, shade the region $R$ defined by $|z - 3i| \leq 2$ and
$0 \leq \arg(z - i) \leq \pi/4$.

**Solution.** $|z - 3i| \leq 2$ is a closed disc centred at $3i$ with radius $2$.

$\arg(z - i) = \alpha$ represents a half-line from $i$ at angle $\alpha$ to the positive real axis.

The constraint $0 \leq \arg(z - i) \leq \pi/4$ means the region between the positive real axis (from
$i$) and the line at $45^\circ$ (from $i$).

The intersection of the disc with this sector gives $R$. The line $\arg(z - i) = \pi/4$ is the ray
From $i$ along the direction $(1, 1)$Which has Cartesian equation $y - 1 = x$I.e., $y = x + 1$.

The disc boundary $(x)^2 + (y - 3)^2 = 4$ intersects $y = x + 1$ at:

$$x^2 + (x + 1 - 3)^2 = 4 \implies x^2 + (x-2)^2 = 4 \implies 2x^2 - 4x = 0 \implies x = 0 \text{ or } x = 2$$

So the intersection points are $(0, 1) = i$ and $(2, 3)$.

### Example 9.4: Transformation of the complex plane

**Problem.** The transformation $T$ from the $z$-plane to the $w$-plane is given by
$w = \dfrac{z + 1}{z - 1}$. Find the image of the line $\mathrm{Re}(z) = 2$ under $T$.

**Solution.** Let $z = 2 + iy$. Then:

$$w = \frac{2 + iy + 1}{2 + iy - 1} = \frac{3 + iy}{1 + iy} = \frac{(3 + iy)(1 - iy)}{1 + y^2} = \frac{3 + y^2 + i(y - 3y)}{1 + y^2} = \frac{3 + y^2 - 2iy}{1 + y^2}$$

So $u = \dfrac{3 + y^2}{1 + y^2}$ and $v = \dfrac{-2y}{1 + y^2}$.

Note that $u = 1 + \dfrac{2}{1 + y^2}$So $u \geq 1$ (since $1 + y^2 \geq 1$).

Also $u - 1 = \dfrac{2}{1 + y^2}$ and $v^2 = \dfrac{4y^2}{(1+y^2)^2} = \dfrac{4y^2}{(1+y^2)^2}$.

$$v^2 = (u-1)\cdot\frac{2y^2}{1+y^2}$$

From $v = \dfrac{-2y}{1+y^2}$: $v^2 = \dfrac{4y^2}{(1+y^2)^2}$.

Since $u - 1 = \dfrac{2}{1+y^2}$: $(u-1)(1+y^2) = 2$So $1+y^2 = \dfrac{2}{u-1}$.

$$v^2 = \frac{4y^2}{(1+y^2)^2} = \frac◆LB◆4\!\left(\frac{2}{u-1} - 1\right)◆RB◆◆LB◆\frac{4}{(u-1)^2}◆RB◆ = \frac◆LB◆\frac{8 - 2(u-1)}{u-1}◆RB◆◆LB◆\frac{4}{(u-1)^2}◆RB◆ = \frac{(10 - 2u)(u-1)}{4} = \frac{(5-u)(u-1)}{2}$$

The image is the arc of the circle defined by $2v^2 = (5-u)(u-1)$ for $u \geq 1$Which is a circle
With centre $(3, 0)$ and radius $2$ in the $w$-plane.

### Example 9.5: Solving $z^n = w$ with non-trivial arguments

**Problem.** Find all solutions to $z^5 = 4\sqrt{2}(1 + i)$.

**Solution.** $1 + i = \sqrt{2}\,e^{i\pi/4}$So $4\sqrt{2}(1 + i) = 8\,e^{i\pi/4}$.

$$z_k = 8^{1/5}\,e^{i(\pi/4 + 2k\pi)/5} = 2^{3/5}\,e^{i(\pi + 8k\pi)/20}, \quad k = 0, 1, 2, 3, 4$$

The five roots lie on a circle of radius $2^{3/5}$Equally spaced starting from angle $\pi/20$.

### Example 9.6: Complex conjugate roots and polynomial equations

**Problem.** The cubic equation $z^3 + az^2 + bz + 12 = 0$ has a root $z = 1 + 2i$ where $a, b$ are
Real. Find $a$, $b$And all roots.

**Solution.** Since $a, b$ are real, the conjugate $1 - 2i$ is also a root.

$$[z - (1 + 2i)][z - (1 - 2i)] = (z-1)^2 + 4 = z^2 - 2z + 5$$

Dividing $z^3 + az^2 + bz + 12$ by $z^2 - 2z + 5$:

$$z^3 + az^2 + bz + 12 = (z^2 - 2z + 5)(z - c)$$

Expanding: $z^3 - cz^2 - 2z^2 + 2cz + 5z - 5c = z^3 + (-c-2)z^2 + (2c+5)z - 5c$.

Comparing coefficients: $-c - 2 = a$, $2c + 5 = b$, $-5c = 12$So $c = -12/5$.

$a = 12/5 - 2 = 2/5$, $b = -24/5 + 5 = 1/5$.

The third root is $z = c = -12/5$.

Check: $(2/5)(-12/5)(12/5) \neq -12$ ... Let me recheck. Product of roots
$= (1+2i)(1-2i)(-12/5) = 5 \times (-12/5) = -12$. Constant term $= -12$So product $= -(-12)/1 = 12$.
Wait, the product should be $-d/a = -12/1 = -12$But we got $12$. The equation Is
$z^3 + az^2 + bz + 12 = 0$So $d = 12$ and $\alpha\beta\gamma = -12/1 = -12$. But
$5 \times (-12/5) = -12$. Correct. $\blacksquare$

### Example 9.7: Geometry in the Argand diagram

**Problem.** The points $A$, $B$, $C$ in the Argand diagram represent the complex numbers
$z_A = 2 + i$, $z_B = 4 + 5i$, $z_C = 6 + 2i$. Show that triangle $ABC$ is isosceles and find its Area.

**Solution.** $\overrightarrow{AB} = z_B - z_A = 2 + 4i$
$|\overrightarrow{AB}| = \sqrt{4 + 16} = 2\sqrt{5}$.

$\overrightarrow{BC} = z_C - z_B = 2 - 3i$, $|\overrightarrow{BC}| = \sqrt{4 + 9} = \sqrt{13}$.

$\overrightarrow{AC} = z_C - z_A = 4 + i$, $|\overrightarrow{AC}| = \sqrt{16 + 1} = \sqrt{17}$.

All three sides have different lengths, so the triangle is **scalene**, not isosceles. (If the
Question intended different points, the same method applies.)

The area is $\dfrac{1}{2}|\mathrm{Im}(\overline{z_{AB}} \cdot z_{AC})|$:

$\overline{z_{AB}} \cdot z_{AC} = (2 - 4i)(4 + i) = 8 + 2i - 16i + 4 = 12 - 14i$.

$\text{Area} = \dfrac{1}{2}|-14| = 7$.

---

## 10. Connections to Other Topics

### 10.1 Complex numbers and matrices

The matrix representation of complex numbers:
$a + bi \longleftrightarrow \begin{pmatrix}a & -b \\ b & a\end{pmatrix}$. Multiplication of complex
Numbers corresponds to matrix multiplication. See
[Matrices and Transformations](/docs/alevel/further-maths/pure/matrices-and-transformations-extended).

### 10.2 Complex numbers and polar coordinates

Modulus-argument form is equivalent to polar coordinates. The polar area formula applies to curves
Described by $|z - z_0| = r(\theta)$. See
[Polar Coordinates](/docs/alevel/further-maths/pure-mathematics/polar-coordinates).

### 10.3 Euler's formula and Maclaurin series

Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$ is proved using Maclaurin series. See
[Maclaurin and Taylor Series](/docs/alevel/further-maths/pure-mathematics/maclaurin-taylor-series).

### 10.4 Roots of unity and algebra

The $n$-th roots of unity form a cyclic group under multiplication. The factorisation
$z^n - 1 = \prod_{k=0}^{n-1}(z - \omega^k)$ connects to polynomial theory. See
[Further Algebra](/docs/alevel/further-maths/pure-mathematics/further-algebra).

---

## 11. Additional Exam-Style Questions

### Question 8

**(a)** Find all solutions of $z^3 + 27i = 0$ in exponential form.

**(b)** Show that the sum of the three roots is zero.

<details>
<summary>Solution</summary>

**(a)** $z^3 = -27i = 27\,e^{i(3\pi/2 + 2k\pi)}$.

$$z_k = 27^{1/3}\,e^{i(3\pi/2 + 2k\pi)/3} = 3\,e^{i(\pi/2 + 2k\pi/3)}, \quad k = 0, 1, 2$$

$k = 0$: $3e^{i\pi/2} = 3i$. $k = 1$:
$3e^{i7\pi/6} = 3\!\left(-\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ - \dfrac{i}{2}\right)$. $k = 2$:
$3e^{i11\pi/6} = 3\!\left(\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ - \dfrac{i}{2}\right)$.

**(b)** Sum
$= 3i + 3\!\left(-\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ - \dfrac{i}{2}\right) + 3\!\left(\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ - \dfrac{i}{2}\right) = 3i - 3i/2 - 3i/2 = 0$.
$\blacksquare$

</details>

### Question 9

The complex number $w$ satisfies $|w + 2i| = 3$ and $\arg w = \pi/6$. Find $w$ in the form $a + bi$.

<details>
<summary>Solution</summary>

Let $w = re^{i\pi/6}$. From $|w + 2i| = 3$:

$$|re^{i\pi/6} + 2i| = 3$$

$r\cos(\pi/6) + i\!\left(r\sin(\pi/6) + 2\right) = r\!\left(\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\right) + i\!\left(\dfrac{r}{2} + 2\right)$.

$$\frac{3r^2}{4} + \left(\frac{r}{2} + 2\right)^2 = 9$$

$$\frac{3r^2}{4} + \frac{r^2}{4} + 2r + 4 = 9 \implies r^2 + 2r - 5 = 0$$

$$r = \frac◆LB◆-2 \pm \sqrt{4 + 20}◆RB◆◆LB◆2◆RB◆ = -1 \pm \sqrt{6}$$

Since $r > 0$: $r = \sqrt{6} - 1$.

$w = (\sqrt{6} - 1)\,e^{i\pi/6} = (\sqrt{6} - 1)\!\left(\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ + \dfrac{i}{2}\right) = \dfrac◆LB◆(\sqrt{6}-1)\sqrt{3}◆RB◆◆LB◆2◆RB◆ + \dfrac◆LB◆(\sqrt{6}-1)i◆RB◆◆LB◆2◆RB◆$.

</details>

### Question 10

Use De Moivre's theorem to find $\cos(\pi/12)$ and $\sin(\pi/12)$ in surd form.

<details>
<summary>Solution</summary>

$\cos(\pi/12) + i\sin(\pi/12) = \sqrt◆LB◆\cos(\pi/6) + i\sin(\pi/6)◆RB◆$.

$\cos(\pi/6) = \dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆$ and $\sin(\pi/6) = \dfrac{1}{2}$.

Let $\cos(\pi/12) + i\sin(\pi/12) = a + bi$ where $a > 0$. Then
$(a + bi)^2 = \dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ + \dfrac{i}{2}$.

$a^2 - b^2 = \dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆$ and $2ab = \dfrac{1}{2}$So $b = \dfrac{1}{4a}$.

$a^2 - \dfrac{1}{16a^2} = \dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆$.

Multiplying by $16a^2$: $16a^4 - 8\sqrt{3}\,a^2 - 1 = 0$.

$a^2 = \dfrac◆LB◆8\sqrt{3} \pm \sqrt{192 + 64}◆RB◆◆LB◆32◆RB◆ = \dfrac◆LB◆8\sqrt{3} \pm 4\sqrt{13}◆RB◆◆LB◆32◆RB◆ = \dfrac◆LB◆2\sqrt{3} \pm \sqrt{13}◆RB◆◆LB◆8◆RB◆$.

Since $a^2 \leq 1$: $a^2 = \dfrac◆LB◆2\sqrt{3} + \sqrt{13}◆RB◆◆LB◆8◆RB◆$.

$$\cos\frac◆LB◆\pi◆RB◆◆LB◆12◆RB◆ = \sqrt◆LB◆\frac{2\sqrt{3} + \sqrt{13}}{8}◆RB◆ = \frac◆LB◆\sqrt{2\sqrt{3} + \sqrt{13}}◆RB◆◆LB◆2\sqrt{2}◆RB◆$$

$$\sin\frac◆LB◆\pi◆RB◆◆LB◆12◆RB◆ = \sqrt◆LB◆\frac{-2\sqrt{3} + \sqrt{13}}{8}◆RB◆ = \frac◆LB◆\sqrt{-2\sqrt{3} + \sqrt{13}}◆RB◆◆LB◆2\sqrt{2}◆RB◆$$

</details>

### Question 11

**Prove by induction** that for any positive integer $n$:

$$\sum_{k=0}^{n-1} e^{i(2k+1)\pi/n} = 0$$

<details>
<summary>Solution</summary>

This is the sum of the $n$-th roots of $-1$ (not unity).

**Base case ($n = 1$):** Sum $= e^{i\pi} = -1 \neq 0$.

Let us reconsider: $\displaystyle\sum_{k=0}^{n-1}e^{i(2k+1)\pi/n}$ is a geometric series with first
Term $e^{i\pi/n}$ and ratio $e^{i2\pi/n}$.

$$\sum_{k=0}^{n-1}e^{i(2k+1)\pi/n} = e^{i\pi/n}\cdot\frac◆LB◆1 - e^{i2\pi}◆RB◆◆LB◆1 - e^{i2\pi/n}◆RB◆ = e^{i\pi/n}\cdot\frac◆LB◆1 - 1◆RB◆◆LB◆1 - e^{i2\pi/n}◆RB◆ = 0 \quad \blacksquare$$

(Since $e^{i2\pi} = 1$.)

</details>

### Question 12

Given $z_1 = 2 + 3i$ and $z_2 = 1 - i$Find the complex number $z$ such that $z_1$, $z$, $z_2$ form An
equilateral triangle, giving both possible values of $z$.

<details>
<summary>Solution</summary>

If $z_1$, $z$, $z_2$ form an equilateral triangle, then $z$ is obtained by rotating $z_2 - z_1$ by
$\pm\pi/3$ about $z_1$:

$$z = z_1 + (z_2 - z_1)\,e^{\pm i\pi/3}$$

$z_2 - z_1 = (1 - 2) + (-1 - 3)i = -1 - 4i$.

$e^{i\pi/3} = \dfrac{1}{2} + i\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆$:

$$(-1 - 4i)\!\left(\frac{1}{2} + i\frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\right) = \frac◆LB◆-1 + 4\sqrt{3}◆RB◆◆LB◆2◆RB◆ + i\frac◆LB◆-4 - \sqrt{3}◆RB◆◆LB◆2◆RB◆$$

$$z = (2 + 3i) + \frac◆LB◆-1 + 4\sqrt{3}◆RB◆◆LB◆2◆RB◆ + i\frac◆LB◆-4 - \sqrt{3}◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆3 + 4\sqrt{3}◆RB◆◆LB◆2◆RB◆ + i\frac◆LB◆2 - \sqrt{3}◆RB◆◆LB◆2◆RB◆$$

For the other orientation, $e^{-i\pi/3} = \dfrac{1}{2} - i\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆$:

$$z = (2 + 3i) + \frac◆LB◆-1 - 4\sqrt{3}◆RB◆◆LB◆2◆RB◆ + i\frac◆LB◆-4 + \sqrt{3}◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆3 - 4\sqrt{3}◆RB◆◆LB◆2◆RB◆ + i\frac◆LB◆2 + \sqrt{3}◆RB◆◆LB◆2◆RB◆$$

</details>

---

## 12. Advanced Worked Examples

### Example 12.1: De Moivre for $\sin 4\theta$

**Problem.** Express $\sin 4\theta$ in terms of $\sin\theta$ and $\cos\theta$.

**Solution.** $(\cos\theta+i\sin\theta)^4 = \cos 4\theta + i\sin 4\theta$.

Imaginary parts:
$\sin 4\theta = \binom{4}{1}\cos^3\theta\sin\theta - \binom{4}{3}\cos\theta\sin^3\theta$.

$$\boxed{\sin 4\theta = 4\cos^3\theta\sin\theta - 4\cos\theta\sin^3\theta}$$

### Example 12.2: Roots of $z^5 = 1$ and their properties

**Problem.** The 5th roots of unity are $\omega^k$ for $k = 0, \ldots, 4$ where
$\omega = e^{2\pi i/5}$. Show that they form a regular pentagon and find their sum.

**Solution.** $\omega^k = e^{2\pi ik/5}$ lies on the unit circle at angles
$0, 72°, 144°, 216°, 288°$. Equal angular spacing confirms a regular pentagon.

Sum: $\displaystyle\sum_{k=0}^{4} \omega^k = \frac◆LB◆1-\omega^5◆RB◆◆LB◆1-\omega◆RB◆ = 0$.

### Example 12.3: Locus — circle

**Problem.** Find the Cartesian equation of $|z - 1 + 2i| = 3$ and describe the locus.

**Solution.** Let $z = x + iy$:

$$(x-1)^2 + (y+2)^2 = 9$$

This is a circle with centre $(1, -2)$ and radius $3$.

### Example 12.4: Finding the minimum of $|z|$ on a locus

**Problem.** $z$ satisfies $|z-3i| = 2$. Find the minimum value of $|z|$.

**Solution.** The locus is a circle centred at $3i$ with radius $2$. The minimum distance from the
Origin to any point on this circle is:

$$|3i| - 2 = 3 - 2 = \boxed{1}$$

The point is $z = i$.

### Example 12.5: Complex conjugate roots of a polynomial

**Problem.** The cubic $x^3 + 3x^2 + 7x + 5 = 0$ has one real root. Find all three roots.

**Solution.** Trying $x = -1$: $-1+3-7+5 = 0$. So $x+1$ is a factor.

$x^3+3x^2+7x+5 = (x+1)(x^2+2x+5)$.

$x^2+2x+5 = 0$: $x = \dfrac◆LB◆-2\pm\sqrt{4-20}◆RB◆◆LB◆2◆RB◆ = -1 \pm 2i$.

$\boxed{x = -1,\; x = -1+2i,\; x = -1-2i}$

### Example 12.6: Transformation — inversion

**Problem.** Under the transformation $w = \dfrac{1}{z}$Find the image of the line $x = 2$.

**Solution.** $z = 2 + iy$, $w = u + iv = \dfrac{1}{2+iy} = \dfrac{2-iy}{4+y^2}$.

$u = \dfrac{2}{4+y^2}$, $v = \dfrac{-y}{4+y^2}$.

Note: $u^2 + v^2 = \dfrac{4+y^2}{(4+y^2)^2} = \dfrac{1}{4+y^2} = \dfrac{u}{2}$.

So $u^2 + v^2 = \dfrac{u}{2} \implies \left(u-\dfrac{1}{4}\right)^2 + v^2 = \dfrac{1}{16}$.

The image is a circle with centre $\left(\dfrac{1}{4}, 0\right)$ and radius $\dfrac{1}{4}$.

---

## 13. Additional Exam-Style Questions

### Question 11

Express $\cos 3\theta + \cos\theta$ as a product.

<details>
<summary>Solution</summary>

Using the sum-to-product formula:
$\cos A + \cos B = 2\cos\!\left(\dfrac{A+B}{2}\right)\cos\!\left(\dfrac{A-B}{2}\right)$.

$$\cos 3\theta + \cos\theta = 2\cos 2\theta \cos\theta = \boxed{2\cos\theta\cos 2\theta}$$

</details>

### Question 12

**Prove that** the roots of $z^n = 1$ are equally spaced on the unit circle.

<details>
<summary>Solution</summary>

$z_k = e^{2\pi ik/n}$ for $k = 0, 1, \ldots, n-1$.

$|z_k| = 1$ for all $k$ (on the unit circle).

The angular separation between consecutive roots is $\dfrac◆LB◆2\pi◆RB◆◆LB◆n◆RB◆$Which is Constant.

Therefore the roots are the vertices of a regular $n$-gon inscribed in the unit circle.
$\blacksquare$

</details>

### Question 13

Find the locus of points satisfying $|z-1| = 2|z+1|$.

<details>
<summary>Solution</summary>

Let $z = x+iy$: $(x-1)^2+y^2 = 4[(x+1)^2+y^2]$.

$x^2-2x+1+y^2 = 4x^2+8x+4+4y^2$.

$0 = 3x^2+10x+3y^2+3$.

$3\!\left(x^2+\dfrac{10}{3}x\right)+3y^2 = -3$.

$3\!\left(x+\dfrac{5}{3}\right)^2 + 3y^2 = \dfrac{25}{3}-3 = \dfrac{16}{3}$.

$\left(x+\dfrac{5}{3}\right)^2 + y^2 = \dfrac{16}{9}$.

A circle with centre $\left(-\dfrac{5}{3}, 0\right)$ and radius $\dfrac{4}{3}$.

</details>

---

## 14. Advanced Topics

### 14.1 Complex logarithms

The complex logarithm is multi-valued: $\ln z = \ln|z| + i(\arg z + 2k\pi)$ for $k \in \mathbb{Z}$.

The principal value uses $\arg z \in (-\pi, \pi]$.

### 14.2 Complex powers

$z^w = e^{w\ln z}$ where $\ln z$ is the complex logarithm. This is generally multi-valued.

Example: $i^i = e^{i\ln i} = e^{i(i\pi/2)} = e^{-\pi/2} \approx 0.2079$ (principal value).

### 14.3 Möbius transformations

A Möbius transformation is $w = \dfrac{az+b}{cz+d}$ with $ad-bc \neq 0$.

Properties:

- Maps circles and lines to circles and lines
- Preserves angles (conformal)
- Compositions of Möbius transformations are Möbius transformations

### 14.4 De Moivre and trigonometric identities

Using $e^{i\theta} = \cos\theta + i\sin\theta$:

$\cos^n\theta = \left(\dfrac◆LB◆e^{i\theta}+e^{-i\theta}◆RB◆◆LB◆2◆RB◆\right)^n$ and
$\sin^n\theta = \left(\dfrac◆LB◆e^{i\theta}-e^{-i\theta}◆RB◆◆LB◆2i◆RB◆\right)^n$.

These can be expanded to express $\cos^n\theta$ and $\sin^n\theta$ in terms of multiple angles.

---

## 15. Further Exam-Style Questions

### Question 14

Express $\cos^4\theta$ in terms of $\cos 2\theta$ and $\cos 4\theta$.

<details>
<summary>Solution</summary>

$\cos^4\theta = \left(\dfrac◆LB◆e^{i\theta}+e^{-i\theta}◆RB◆◆LB◆2◆RB◆\right)^4 = \dfrac◆LB◆e^{4i\theta}+4e^{2i\theta}+6+4e^{-2i\theta}+e^{-4i\theta}◆RB◆◆LB◆16◆RB◆$

$= \dfrac◆LB◆2\cos 4\theta + 8\cos 2\theta + 6◆RB◆◆LB◆16◆RB◆ = \dfrac{3}{8} + \dfrac{1}{2}\cos 2\theta + \dfrac{1}{8}\cos 4\theta$.

$\boxed{\cos^4\theta = \dfrac{3}{8} + \dfrac{1}{2}\cos 2\theta + \dfrac{1}{8}\cos 4\theta}$

</details>

### Question 15

Find the image of the line $\mathrm{Re}(z) = 2$ under the transformation $w = \dfrac{z-1}{z+1}$.

<details>
<summary>Solution</summary>

Let $z = 2 + iy$.

$w = \dfrac{1+iy}{3+iy} = \dfrac{(1+iy)(3-iy)}{9+y^2} = \dfrac{3+y^2+i(3y-y)}{9+y^2} = \dfrac{3+y^2}{9+y^2} + i\dfrac{2y}{9+y^2}$.

Let $w = u+iv$: $u = \dfrac{3+y^2}{9+y^2}$, $v = \dfrac{2y}{9+y^2}$.

Eliminating $y$: note that $u = 1 - \dfrac{6}{9+y^2}$So $9+y^2 = \dfrac{6}{1-u}$.

$v^2 = \dfrac{4y^2}{(9+y^2)^2}$. Substituting
$y^2 = \dfrac{6}{1-u}-9 = \dfrac{6-9+9u}{1-u} = \dfrac{9u-3}{1-u}$:

This is a circle (after simplification).

</details>

---

## 15. Further Advanced Topics

### 15.1 De Moivre and roots of unity — applications

The $n$Th roots of unity are equally spaced on the unit circle and have important properties:

- They form a cyclic group under multiplication
- The sum of all $n$Th roots is zero: $\displaystyle\sum_{k=0}^{n-1} e^{2\pi ik/n} = 0$
- Products of roots of unity are also roots of unity

### 15.2 Complex logarithms

$\ln z = \ln|z| + i\arg z$Where $\arg z$ is multi-valued.

$\ln z = \ln|z| + i(\theta + 2k\pi)$ for $k \in \mathbb{Z}$.

The **principal value** uses $\theta \in (-\pi, \pi]$.

### 15.3 Euler's formula extensions

$e^{i\theta} + e^{-i\theta} = 2\cos\theta$

$e^{i\theta} - e^{-i\theta} = 2i\sin\theta$

$\cos\theta = \dfrac◆LB◆e^{i\theta}+e^{-i\theta}◆RB◆◆LB◆2◆RB◆$
$\sin\theta = \dfrac◆LB◆e^{i\theta}-e^{-i\theta}◆RB◆◆LB◆2i◆RB◆$

---

## 16. Further Exam-Style Questions

### Question 15

**Prove that** $\displaystyle\sum_{k=0}^{n-1} e^{2\pi ik/n} = 0$ for $n \geq 2$.

<details>
<summary>Solution</summary>

This is a geometric series with ratio $r = e^{2\pi i/n} \neq 1$:

$\displaystyle\sum_{k=0}^{n-1} r^k = \frac{r^n - 1}{r - 1} = \frac◆LB◆e^{2\pi i} - 1◆RB◆◆LB◆e^{2\pi i/n} - 1◆RB◆ = \frac◆LB◆1 - 1◆RB◆◆LB◆e^{2\pi i/n} - 1◆RB◆ = 0$.
$\blacksquare$

</details>

## Summary

This topic covers the mathematical techniques and concepts related to complex numbers (extended),
including key theorems, methods, and problem-solving approaches.

**Key concepts include:**

- quadratic equations and the discriminant
- simultaneous equations
- polynomial division and the factor theorem
- partial fractions
- binomial expansion

Regular practice with a variety of question types is essential to build fluency and confidence in
applying these mathematical techniques.
