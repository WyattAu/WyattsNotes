---
title: "Complex Numbers -- Diagnostic Tests"
description: Hardest IB Mathematics diagnostic tests for complex numbers covering De Moivre branch cuts, roots of unity, polar conversion, and Euler's formula.
slug: diag-complex-numbers
hide_table_of_contents: true
---

# Complex Numbers — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for complex numbers.

### UT-1: De Moivre's Theorem and Argument Branch Cuts

**Question:**

**(a)** Find all values of $z$ such that $z^4 = -16$.

**(b)** Express each solution in the form $a + bi$, in polar form $re^{i\theta}$, and state the principal argument of each.

**(c)** A student computes one root as $2e^{i\pi/4}$ and claims the other roots are obtained by adding $\frac{\pi}{2}$ to the argument each time. Verify whether this is correct, and if not, explain the error.

[Difficulty: hard. Tests roots of a negative real number and argument normalisation to $(-\pi, \pi]$.]

**Solution:**

**(a)** Write $-16 = 16e^{i\pi}$. The fourth roots are:

$$z_k = 16^{1/4} \cdot e^{i(\pi + 2k\pi)/4} = 2e^{i(2k+1)\pi/4}, \quad k = 0, 1, 2, 3$$

**(b)**

- $k = 0$: $z_0 = 2e^{i\pi/4} = 2\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) = \sqrt{2} + i\sqrt{2}$, $\arg = \frac{\pi}{4}$
- $k = 1$: $z_1 = 2e^{i3\pi/4} = 2\left(\cos\frac{3\pi}{4} + i\sin\frac{3\pi}{4}\right) = -\sqrt{2} + i\sqrt{2}$, $\arg = \frac{3\pi}{4}$
- $k = 2$: $z_2 = 2e^{i5\pi/4} = 2\left(\cos\frac{5\pi}{4} + i\sin\frac{5\pi}{4}\right) = -\sqrt{2} - i\sqrt{2}$, $\arg = -\frac{3\pi}{4}$
- $k = 3$: $z_3 = 2e^{i7\pi/4} = 2\left(\cos\frac{7\pi}{4} + i\sin\frac{7\pi}{4}\right) = \sqrt{2} - i\sqrt{2}$, $\arg = -\frac{\pi}{4}$

Note: $\frac{5\pi}{4}$ is normalised to $-\frac{3\pi}{4}$, and $\frac{7\pi}{4}$ is normalised to $-\frac{\pi}{4}$, to satisfy the principal argument range $(-\pi, \pi]$.

**(c)** The student is correct that the arguments differ by $\frac{\pi}{2}$. Starting from $\frac{\pi}{4}$: $\frac{3\pi}{4}$, $\frac{5\pi}{4}$, $\frac{7\pi}{4}$. These are the correct arguments before normalisation. The student's method works, but they must remember to normalise arguments outside $(-\pi, \pi]$ to the principal range.

---

### UT-2: Polar Form Conversion — Wrong Quadrant

**Question:**

Find the modulus and principal argument of $z = -1 - i\sqrt{3}$.

Express $z$ in all three standard forms (Cartesian, polar, Euler).

A student computes $\arg(z) = \arctan\!\left(\dfrac{-\sqrt{3}}{-1}\right) = \arctan(\sqrt{3}) = \frac{\pi}{3}$ and concludes that $\arg(z) = \frac{\pi}{3}$.

**(a)** Identify the error.

**(b)** Give the correct argument.

[Difficulty: hard. Tests the most common complex number error: wrong quadrant for the argument.]

**Solution:**

**(a)** The point $(-1, -\sqrt{3})$ lies in the **third quadrant** (both coordinates negative). The student used $\arctan\!\left(\frac{b}{a}\right) = \arctan\!\left(\frac{-\sqrt{3}}{-1}\right)$, which gives $\frac{\pi}{3}$ — a first-quadrant angle. The $\arctan$ function always returns values in $(-\frac{\pi}{2}, \frac{\pi}{2})$, so it cannot distinguish between first and third quadrants.

**(b)** In the third quadrant:

$$\arg(z) = \pi + \arctan\!\left(\frac{\sqrt{3}}{1}\right) = \pi + \frac{\pi}{3} = -\frac{2\pi}{3}$$

(The principal value is $-\frac{2\pi}{3}$, which lies in $(-\pi, \pi]$.)

Modulus: $|z| = \sqrt{(-1)^2 + (-\sqrt{3})^2} = \sqrt{1 + 3} = 2$.

**Three forms:**

- Cartesian: $z = -1 - i\sqrt{3}$
- Polar: $z = 2\left(\cos\!\left(-\frac{2\pi}{3}\right) + i\sin\!\left(-\frac{2\pi}{3}\right)\right)$
- Euler: $z = 2e^{-2\pi i/3}$

---

### UT-3: Complex Division and Conjugate Properties

**Question:**

**(a)** Simplify $\dfrac{(2 + 3i)^2}{1 - i}$, giving your answer in the form $a + bi$.

**(b)** Prove that for any non-zero complex number $z$, $\left|z + \dfrac{1}{\bar{z}}\right| \geq 2$.

[Difficulty: hard. Tests rationalisation with complex conjugate and modulus inequality proof.]

**Solution:**

**(a)** First, expand the numerator:

$$(2 + 3i)^2 = 4 + 12i + 9i^2 = 4 + 12i - 9 = -5 + 12i$$

Now divide by $1 - i$ by multiplying by the conjugate $1 + i$:

$$\frac{-5 + 12i}{1 - i} \cdot \frac{1 + i}{1 + i} = \frac{(-5 + 12i)(1 + i)}{1 + 1} = \frac{-5 - 5i + 12i + 12i^2}{2}$$

$$= \frac{-5 + 7i - 12}{2} = \frac{-17 + 7i}{2} = -\frac{17}{2} + \frac{7}{2}i$$

**(b)** Let $z = a + bi$ where $a, b \in \mathbb{R}$ and $(a, b) \neq (0, 0)$.

$$\frac{1}{\bar{z}} = \frac{1}{a - bi} \cdot \frac{a + bi}{a + bi} = \frac{a + bi}{a^2 + b^2} = \frac{a}{a^2 + b^2} + \frac{b}{a^2 + b^2}i$$

$$z + \frac{1}{\bar{z}} = \left(a + \frac{a}{a^2 + b^2}\right) + \left(b + \frac{b}{a^2 + b^2}\right)i = a\left(1 + \frac{1}{a^2 + b^2}\right) + b\left(1 + \frac{1}{a^2 + b^2}\right)i$$

$$= \left(1 + \frac{1}{a^2 + b^2}\right)(a + bi) = \frac{a^2 + b^2 + 1}{a^2 + b^2} \cdot z$$

$$\left|z + \frac{1}{\bar{z}}\right| = \frac{a^2 + b^2 + 1}{a^2 + b^2} \cdot |z| = \frac{a^2 + b^2 + 1}{a^2 + b^2} \cdot \sqrt{a^2 + b^2} = \frac{a^2 + b^2 + 1}{\sqrt{a^2 + b^2}}$$

Since $a^2 + b^2 \geq 0$ and $a^2 + b^2 \gt 0$ (as $z \neq 0$):

$$\frac{a^2 + b^2 + 1}{\sqrt{a^2 + b^2}} = \sqrt{a^2 + b^2} + \frac{1}{\sqrt{a^2 + b^2}} \geq 2$$

by the AM-GM inequality (with equality when $\sqrt{a^2 + b^2} = 1$).

---

## Integration Tests

> Tests synthesis of complex numbers with other topics.

### IT-1: Deriving Trig Identities via Euler's Formula (with Trigonometry)

**Question:**

**(a)** Using Euler's formula, show that $\cos^3\theta = \dfrac{1}{4}\cos 3\theta + \dfrac{3}{4}\cos\theta$.

**(b)** Hence find the exact value of $\cos^3\!\left(\dfrac{\pi}{9}\right) + \cos^3\!\left(\dfrac{5\pi}{9}\right) + \cos^3\!\left(\dfrac{7\pi}{9}\right)$.

[Difficulty: hard. Uses De Moivre/binomial expansion to derive trig identities and applies them to a non-trivial evaluation.]

**Solution:**

**(a)** From Euler's formula: $\cos\theta + i\sin\theta = e^{i\theta}$.

By the binomial theorem:

$$(\cos\theta + i\sin\theta)^3 = \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta$$

By De Moivre's theorem: $(\cos\theta + i\sin\theta)^3 = \cos 3\theta + i\sin 3\theta$.

Equating real parts:

$$\cos 3\theta = \cos^3\theta - 3\cos\theta\sin^2\theta = \cos^3\theta - 3\cos\theta(1 - \cos^2\theta)$$

$$\cos 3\theta = 4\cos^3\theta - 3\cos\theta$$

$$\cos^3\theta = \frac{1}{4}\cos 3\theta + \frac{3}{4}\cos\theta$$

**(b)** Note that $\frac{\pi}{9}$, $\frac{5\pi}{9}$, and $\frac{7\pi}{9}$ are the three distinct solutions to $\cos 3\theta = \cos\frac{\pi}{3} = \frac{1}{2}$, since $3 \cdot \frac{\pi}{9} = \frac{\pi}{3}$, $3 \cdot \frac{5\pi}{9} = \frac{5\pi}{3}$, and $3 \cdot \frac{7\pi}{9} = \frac{7\pi}{3} = \frac{\pi}{3} - 2\pi$.

So $\cos 3\theta = \frac{1}{2}$ for all three angles. Using the identity:

$$\cos^3\theta = \frac{1}{4}\cos 3\theta + \frac{3}{4}\cos\theta = \frac{1}{8} + \frac{3}{4}\cos\theta$$

Summing over the three values:

$$\sum \cos^3\theta = \sum \frac{1}{8} + \frac{3}{4}\sum \cos\theta = \frac{3}{8} + \frac{3}{4}\sum \cos\theta$$

The values $\cos\frac{\pi}{9}$, $\cos\frac{5\pi}{9}$, $\cos\frac{7\pi}{9}$ are the three roots of $4\cos^3\theta - 3\cos\theta - \frac{1}{2} = 0$, i.e., $8x^3 - 6x - 1 = 0$. By Vieta's formula, the sum of the roots is zero (coefficient of $x^2$ is $0$).

Therefore:

$$\sum \cos^3\theta = \frac{3}{8} + \frac{3}{4} \times 0 = \frac{3}{8}$$

---

### IT-2: Rotation Matrices from Roots of Unity (with Matrices)

**Question:**

Let $\omega = e^{2\pi i/3}$ be a primitive cube root of unity.

**(a)** Show that the matrix $R = \begin{pmatrix} \cos\frac{2\pi}{3} & -\sin\frac{2\pi}{3} \\ \sin\frac{2\pi}{3} & \cos\frac{2\pi}{3} \end{pmatrix}$ represents a rotation by $120^\circ$ anticlockwise.

**(b)** Find $R^2$ and $R^3$, and explain the connection to the cube roots of unity.

[Difficulty: hard. Connects complex roots of unity to $2 \times 2$ rotation matrices.]

**Solution:**

**(a)** The matrix $R$ is the standard $2 \times 2$ rotation matrix for angle $\frac{2\pi}{3}$. Applying $R$ to the vector $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$:

$$R\begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} \cos\frac{2\pi}{3} \\ \sin\frac{2\pi}{3} \end{pmatrix} = \begin{pmatrix} -\frac{1}{2} \\ \frac{\sqrt{3}}{2} \end{pmatrix}$$

This is the point on the unit circle at angle $\frac{2\pi}{3}$, confirming a $120^\circ$ rotation.

**(b)** $R^2$ represents a rotation by $\frac{4\pi}{3}$:

$$R^2 = \begin{pmatrix} \cos\frac{4\pi}{3} & -\sin\frac{4\pi}{3} \\ \sin\frac{4\pi}{3} & \cos\frac{4\pi}{3} \end{pmatrix} = \begin{pmatrix} -\frac{1}{2} & \frac{\sqrt{3}}{2} \\ -\frac{\sqrt{3}}{2} & -\frac{1}{2} \end{pmatrix}$$

$R^3 = I$ (the identity matrix), since rotating by $2\pi$ returns to the original position.

The connection: $\omega = e^{2\pi i/3}$ corresponds to $R$, $\omega^2 = e^{4\pi i/3}$ corresponds to $R^2$, and $\omega^3 = 1$ corresponds to $R^3 = I$. The cube roots of unity $\{1, \omega, \omega^2\}$ correspond to the matrices $\{I, R, R^2\}$.
