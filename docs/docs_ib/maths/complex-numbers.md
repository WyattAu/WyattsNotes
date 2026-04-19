---
title: Complex Numbers
description:
  IB Mathematics — complex arithmetic, polar form, De Moivre's theorem, and roots of unity.
slug: complex-numbers
---

## The Imaginary Unit

### Definition

The **imaginary unit** $i$ is defined as the number satisfying $i^2 = -1$. Equivalently,
$i = \sqrt{-1}$. From this definition:

$$i^0 = 1, \quad i^1 = i, \quad i^2 = -1, \quad i^3 = -i, \quad i^4 = 1$$

The powers of $i$ are cyclic with period $4$: $i^n = i^{n \bmod 4}$.

### Motivation

The equation $x^2 + 1 = 0$ has no real solutions. Extending $\mathbb{R}$ to include $i$ yields the
field of complex numbers, in which every polynomial has a root (the Fundamental Theorem of Algebra).

---

## Complex Numbers

### Definition

A **complex number** $z$ is an ordered pair of real numbers written in Cartesian (standard) form:

$$z = a + bi, \quad a, b \in \mathbb{R}$$

Here $a = \mathrm{Re}(z)$ is the **real part** and $b = \mathrm{Im}(z)$ is the **imaginary part**.
The set of all complex numbers is denoted $\mathbb{C}$.

A complex number is **purely real** if $b = 0$ and **purely imaginary** if $a = 0$. Two complex
numbers are equal if and only if their real and imaginary parts are equal.

### Complex Arithmetic

**Addition.** $(a + bi) + (c + di) = (a + c) + (b + d)i$

**Multiplication.** Expand and use $i^2 = -1$:

$$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$

**Division.** Multiply numerator and denominator by the complex conjugate of the denominator:

$$\frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{(c + di)(c - di)} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$$

### Complex Conjugate

The **complex conjugate** of $z = a + bi$ is $\bar{z} = a - bi$.

**Properties:**

- $z\bar{z} = a^2 + b^2 = |z|^2$
- $\overline{z_1 + z_2} = \bar{z}_1 + \bar{z}_2$
- $\overline{z_1 z_2} = \bar{z}_1 \cdot \bar{z}_2$
- $\bar{\bar{z}} = z$
- $z \in \mathbb{R} \iff z = \bar{z}$

---

## The Argand Diagram

### Representation

A complex number $z = a + bi$ is represented as the point $(a, b)$ in the complex plane (Argand
diagram). The horizontal axis is the real axis, and the vertical axis is the imaginary axis.

### Modulus

The **modulus** (absolute value) of $z = a + bi$ is the distance from the origin to $(a, b)$:

$$|z| = \sqrt{a^2 + b^2}$$

**Properties:**

- $|z| \ge 0$, with equality iff $z = 0$
- $|z_1 z_2| = |z_1|\,|z_2|$
- $\left|\dfrac{z_1}{z_2}\right| = \dfrac{|z_1|}{|z_2|}$, $z_2 \ne 0$
- $|z_1 + z_2| \le |z_1| + |z_2|$ (triangle inequality)

### Argument

The **argument** of $z = a + bi$ is the angle $\theta$ measured from the positive real axis to the
line segment joining the origin to $z$, measured anticlockwise:

$$\theta = \arg(z) = \arctan\!\left(\frac{b}{a}\right)$$

The **principal argument**, denoted $\mathrm{Arg}(z)$, is restricted to $(-\pi, \pi]$.

**Quadrant-aware calculation:**

| Condition          | $\arg(z)$            |
| :----------------- | :------------------- |
| $a \gt 0$          | $\arctan(b/a)$       |
| $a \lt 0, b \ge 0$ | $\arctan(b/a) + \pi$ |
| $a \lt 0, b \lt 0$ | $\arctan(b/a) - \pi$ |
| $a = 0, b \gt 0$   | $\pi/2$              |
| $a = 0, b \lt 0$   | $-\pi/2$             |

---

## Modulus-Argument (Polar) Form

### Definition

Every nonzero complex number can be written as:

$$z = r(\cos\theta + i\sin\theta) = r\,\mathrm{cis}\;\theta$$

where $r = |z|$ and $\theta = \arg(z)$. The notation $\mathrm{cis}\;\theta$ abbreviates
$\cos\theta + i\sin\theta$.

### Conversion

**Polar to Cartesian:**

$$a = r\cos\theta, \quad b = r\sin\theta$$

**Cartesian to Polar:**

$$r = \sqrt{a^2 + b^2}, \quad \theta = \arg(z) \text{ (using quadrant table)}$$

### Multiplication and Division in Polar Form

These operations are dramatically simpler in polar form:

$$z_1 z_2 = r_1 r_2\,\mathrm{cis}(\theta_1 + \theta_2)$$

$$\frac{z_1}{z_2} = \frac{r_1}{r_2}\,\mathrm{cis}(\theta_1 - \theta_2), \quad z_2 \ne 0$$

Multiplication: multiply moduli, add arguments. Division: divide moduli, subtract arguments.

### Powers in Polar Form

$$z^n = r^n\,\mathrm{cis}(n\theta)$$

---

## De Moivre's Theorem

### Statement

For any integer $n$ and any complex number $z = r\,\mathrm{cis}\;\theta$:

$$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$$

### Proof by Induction (Positive Integers)

**Base case** ($n = 1$): Trivially true.

**Inductive step:** Assume $(\cos\theta + i\sin\theta)^k = \cos(k\theta) + i\sin(k\theta)$. Then:

$$(\cos\theta + i\sin\theta)^{k+1} = (\cos\theta + i\sin\theta)(\cos k\theta + i\sin k\theta)$$

$$= \cos\theta\cos k\theta - \sin\theta\sin k\theta + i(\cos\theta\sin k\theta + \sin\theta\cos k\theta)$$

$$= \cos((k+1)\theta) + i\sin((k+1)\theta)$$

by the angle addition formulas.

### Applications

**Expanding $\cos(n\theta)$ and $\sin(n\theta)$ in terms of $\cos\theta$ and $\sin\theta$:**

Using the binomial theorem on $(\cos\theta + i\sin\theta)^n$ and equating real and imaginary parts:

$$\cos(n\theta) + i\sin(n\theta) = \sum_{k=0}^{n} \binom{n}{k} \cos^{n-k}\theta \cdot (i\sin\theta)^k$$

**Example.** For $n = 3$:

$$\cos 3\theta = 4\cos^3\theta - 3\cos\theta$$ $$\sin 3\theta = 3\sin\theta - 4\sin^3\theta$$

**Multiple-angle identities** of any order can be derived this way.

---

## Roots of Complex Numbers

### $n$-th Roots

The $n$-th roots of a complex number $z = r\,\mathrm{cis}\;\theta$ are:

$$w_k = r^{1/n}\,\mathrm{cis}\!\left(\frac{\theta + 2k\pi}{n}\right), \quad k = 0, 1, 2, \ldots, n - 1$$

These $n$ roots are equally spaced on a circle of radius $r^{1/n}$, centred at the origin, with
angular separation $\dfrac{2\pi}{n}$.

### Roots of Unity

The $n$-th **roots of unity** are the solutions to $z^n = 1$:

$$\omega_k = \mathrm{cis}\!\left(\frac{2k\pi}{n}\right), \quad k = 0, 1, \ldots, n - 1$$

**Properties:**

- $\omega_0 = 1$ is always a root.
- The roots are symmetric about the real axis (complex conjugate pairs for non-real roots).
- The sum of all $n$-th roots of unity is $0$.
- The product of all $n$-th roots of unity is $(-1)^{n+1}$.

**Example.** The cube roots of unity ($n = 3$):

$$\omega_0 = 1, \quad \omega_1 = \mathrm{cis}\!\left(\frac{2\pi}{3}\right) = -\frac{1}{2} + \frac{\sqrt{3}}{2}i, \quad \omega_2 = \mathrm{cis}\!\left(\frac{4\pi}{3}\right) = -\frac{1}{2} - \frac{\sqrt{3}}{2}i$$

Note: $1 + \omega_1 + \omega_2 = 0$.

### Sum of Roots of a Quadratic

If $\alpha$ and $\beta$ are the roots of $az^2 + bz + c = 0$ with $a \ne 0$:

$$\alpha + \beta = -\frac{b}{a}, \quad \alpha\beta = \frac{c}{a}$$

These follow directly from expanding $a(z - \alpha)(z - \beta) = 0$.

---

## Euler's Formula

### Statement

$$e^{i\theta} = \cos\theta + i\sin\theta$$

This unifies exponential, trigonometric, and complex number theory. Substituting $\theta = \pi$
yields **Euler's identity**:

$$e^{i\pi} + 1 = 0$$

### Consequences

**Complex exponential form:**

$$z = re^{i\theta}$$

**Exponential laws apply directly:**

$$z_1 z_2 = r_1 r_2\,e^{i(\theta_1 + \theta_2)}, \qquad z^n = r^n\,e^{in\theta}$$

**Derivation of trig identities.** From $e^{i\theta} = \cos\theta + i\sin\theta$ and
$e^{-i\theta} = \cos\theta - i\sin\theta$:

$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$

---

## Common Pitfalls

1. **Argument quadrant errors.** $\arctan(b/a)$ alone does not determine the correct quadrant.
   Always check the signs of $a$ and $b$ and adjust by $\pi$ when the point lies in the second or
   third quadrant.

2. **Conjugate distribution.** $\overline{z_1 + z_2} = \bar{z}_1 + \bar{z}_2$ but
   $\overline{z_1 z_2} \ne \bar{z}_1 \cdot \bar{z}_2$ is wrong -- it IS $\bar{z}_1 \cdot \bar{z}_2$.
   The error is thinking conjugation distributes over _all_ operations differently; it distributes
   correctly over addition and multiplication.

3. **Missing roots.** An $n$-th degree equation has exactly $n$ roots (counting multiplicity) in
   $\mathbb{C}$. When finding $n$-th roots, always generate all $n$ values by varying $k$.

4. **Modulus of a product.** $|z_1 z_2| = |z_1|\,|z_2|$, but $|z_1 + z_2| \ne |z_1| + |z_2|$ in
   general (equality holds only when $z_1$ and $z_2$ have the same argument).

5. **Polar form of zero.** $z = 0$ has no well-defined argument and cannot be expressed in polar
   form $r\,\mathrm{cis}\;\theta$ since $r = 0$.

6. **De Moivre's theorem scope.** De Moivre's theorem as stated holds for integer exponents. For
   non-integer exponents, use $r^n e^{in\theta}$, but note that the result is multi-valued.

---

## Practice Problems

<details>
<summary>Problem 1</summary>

Express $z = 1 - \sqrt{3}\,i$ in polar form and compute $z^5$.

</details>

<details>
<summary>Problem 2</summary>

Find all complex solutions to $z^3 = -8i$.

</details>

<details>
<summary>Problem 3</summary>

Prove that $\cos 4\theta = 8\cos^4\theta - 8\cos^2\theta + 1$ using De Moivre's theorem.

</details>

<details>
<summary>Problem 4</summary>

If $z = 2 + 3i$, express $\dfrac{1}{z}$ in the form $a + bi$.

</details>

<details>
<summary>Problem 5</summary>

Find the fourth roots of $16$ and show that their sum is $0$.

</details>

<details>
<summary>Problem 6</summary>

Solve $z^2 + (2 + 4i)z + (-1 + 6i) = 0$.

</details>

<details>
<summary>Problem 7</summary>

Prove that for any complex number $z$, $z + \bar{z} = 2\mathrm{Re}(z)$ and
$z - \bar{z} = 2i\,\mathrm{Im}(z)$.

</details>

<details>
<summary>Problem 8</summary>

The complex numbers $z_1$ and $z_2$ satisfy $|z_1| = 3$, $|z_2| = 5$, and $|z_1 - z_2| = 7$. Find
$|z_1 + z_2|$.

</details>

<details>
<summary>Answers to Selected Problems</summary>

**Problem 1:** $|z| = \sqrt{1 + 3} = 2$. Since $a = 1 \gt 0$ and $b = -\sqrt{3} \lt 0$,
$\arg(z) = -\pi/3$. So $z = 2\,\mathrm{cis}(-\pi/3)$.
$z^5 = 2^5\,\mathrm{cis}(-5\pi/3) = 32\,\mathrm{cis}(\pi/3) = 32\!\left(\dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i\right) = 16 + 16\sqrt{3}\,i$.

**Problem 2:** $-8i = 8\,\mathrm{cis}(-\pi/2) = 8\,\mathrm{cis}(3\pi/2)$.
$z_k = 8^{1/3}\,\mathrm{cis}\!\left(\dfrac{3\pi/2 + 2k\pi}{3}\right) = 2\,\mathrm{cis}\!\left(\dfrac{\pi}{2} + \dfrac{2k\pi}{3}\right)$
for $k = 0, 1, 2$. $z_0 = 2\,\mathrm{cis}(\pi/2) = 2i$,
$z_1 = 2\,\mathrm{cis}(7\pi/6) = -\sqrt{3} - i$, $z_2 = 2\,\mathrm{cis}(11\pi/6) = \sqrt{3} - i$.

**Problem 3:** By De Moivre: $\cos 4\theta + i\sin 4\theta = (\cos\theta + i\sin\theta)^4$.
Expanding by binomial theorem:
$\cos^4\theta + 4i\cos^3\theta\sin\theta - 6\cos^2\theta\sin^2\theta - 4i\cos\theta\sin^3\theta + \sin^4\theta$.
Equating real parts: $\cos 4\theta = \cos^4\theta - 6\cos^2\theta\sin^2\theta + \sin^4\theta$. Using
$\sin^2\theta = 1 - \cos^2\theta$:
$\cos 4\theta = \cos^4\theta - 6\cos^2\theta(1-\cos^2\theta) + (1-\cos^2\theta)^2 = 8\cos^4\theta - 8\cos^2\theta + 1$.

**Problem 4:**
$\dfrac{1}{z} = \dfrac{\bar{z}}{z\bar{z}} = \dfrac{2 - 3i}{4 + 9} = \dfrac{2 - 3i}{13} = \dfrac{2}{13} - \dfrac{3}{13}i$.

**Problem 5:** $16 = 16\,\mathrm{cis}(0)$. Fourth roots: $w_k = 2\,\mathrm{cis}(k\pi/2)$ for
$k = 0, 1, 2, 3$. Roots: $2, \; 2i, \; -2, \; -2i$. Sum: $2 + 2i - 2 - 2i = 0$.

**Problem 8:** $|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2(|z_1|^2 + |z_2|^2)$ (parallelogram law).
$|z_1 + z_2|^2 = 2(9 + 25) - 49 = 68 - 49 = 19$. So $|z_1 + z_2| = \sqrt{19}$.

</details>
