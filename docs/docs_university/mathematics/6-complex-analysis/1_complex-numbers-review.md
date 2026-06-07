---
title: Complex Numbers Review
tags:
  - Mathematics
  - University
---

### 1.1 Definition and Arithmetic

A **complex number** is $z = a + bi$ where $a, b \in \mathbb{R}$ and $i^2 = -1$. We call
$a = \mathrm{Re}(z)$ the real part and $b = \mathrm{Im}(z)$ the imaginary part.

**Arithmetic:** $(a + bi) + (c + di) = (a + c) + (b + d)i$ and
$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$.

**Proposition 1.1 (Properties of Complex Arithmetic).** For all $z, w \in \mathbb{C}$:

1. $z + w = w + z$ and $zw = wz$ (commutativity)
2. $(z + w) + u = z + (w + u)$ and $(zw)u = z(wu)$ (associativity)
3. $z(w + u) = zw + zu$ (distributivity)
4. There exist additive identity $0$ and multiplicative identity $1$.
5. Every $z \neq 0$ has a multiplicative inverse $\frac{1}{z} = \frac{\bar{z}}{|z|^2}$.

_Remark._ The complex field $\mathbb{C}$ cannot be ordered: there is no total ordering on
$\mathbb{C}$ Compatible with the field operations. In particular, $i^2 = -1$ precludes any such
ordering.

### 1.2 The Complex Conjugate and Modulus

**Definition.** The **complex conjugate** of $z = a + bi$ is $\bar{z} = a - bi$.

**Proposition 1.2.** For all $z, w \in \mathbb{C}$:

1. $\overline{z + w} = \bar{z} + \bar{w}$ and $\overline{zw} = \bar{z}\bar{w}$
2. $z\bar{z} = |z|^2$
3. $z + \bar{z} = 2\,\mathrm{Re}(z)$ and $z - \bar{z} = 2i\,\mathrm{Im}(z)$
4. $\bar{\bar{z}} = z$

**Definition.** The **modulus** (or absolute value) of $z = a + bi$ is $|z| = \sqrt{a^2 + b^2}$.

**Proposition 1.3 (Modulus Properties).** For all $z, w \in \mathbb{C}$:

1. $|z| \geq 0$ with equality iff $z = 0$
2. $|zw| = |z||w|$
3. $|z + w| \leq |z| + |w|$ (triangle inequality)
4. $\bigl||z| - |w|\bigr| \leq |z - w|$ (reverse triangle inequality)

_Proof of (3)._
$|z + w|^2 = (z + w)(\bar{z} + \bar{w}) = |z|^2 + z\bar{w} + \bar{z}w + |w|^2
= |z|^2 + 2\,\mathrm{Re}(z\bar{w}) + |w|^2 \leq |z|^2 + 2|z||w| + |w|^2 = (|z| + |w|)^2$.
The inequality follows from $\mathrm{Re}(z\bar{w}) \leq |z\bar{w}| = |z||w|$. $\blacksquare$

### 1.3 Polar Form

Every non-zero complex number can be written in **polar form**:

$$z = r(\cos\theta + i\sin\theta) = re^{i\theta}$$

Where $r = |z| = \sqrt{a^2 + b^2}$ is the **modulus** and $\theta = \arg(z)$ is the **argument**.

**Definition.** The **principal argument** $\mathrm{Arg}(z)$ is the unique $\theta \in (-\pi, \pi]$
Such that $z = |z|e^{i\theta}$. The **argument** $\arg(z)$ is multi-valued:
$\arg(z) = \mathrm{Arg}(z) + 2\pi k$ for $k \in \mathbb{Z}$.

**Proposition 1.4.** If $z_1 = r_1 e^{i\theta_1}$ and $z_2 = r_2 e^{i\theta_2}$Then
$z_1 z_2 = r_1 r_2 e^{i(\theta_1 + \theta_2)}$ and
$z_1/z_2 = (r_1/r_2)\, e^{i(\theta_1 - \theta_2)}$.

#### Worked Examples: Polar Form Conversions

<details>
<summary>Solution</summary>

**Problem.** Convert $z = -1 + \sqrt{3}\,i$ to polar form and find all arguments.

$|z| = \sqrt{(-1)^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = 2$.

$\mathrm{Re}(z) = -1 \lt 0$ and $\mathrm{Im}(z) = \sqrt{3} \gt 0$So $z$ is in the second quadrant.

$\theta = \arctan\!\left(\frac{\sqrt{3}}{-1}\right) = \frac{2\pi}{3}$ (adjusting to second
quadrant).

Polar form: $z = 2\,e^{2\pi i/3}$.

All arguments: $\arg(z) = \frac{2\pi}{3} + 2\pi k$ for $k \in \mathbb{Z}$.

**Problem.** Convert $z = 3e^{-i\pi/4}$ to rectangular form.

$z = 3\left(\cos\!\left(-\frac{\pi}{4}\right) + i\sin\!\left(-\frac{\pi}{4}\right)\right)
= 3\left(\frac{\sqrt{2}}{2} - i\,\frac{\sqrt{2}}{2}\right) = \frac{3\sqrt{2}}{2} - \frac{3\sqrt{2}}{2}\,i$.

**Problem.** Express $z = -3 - 4i$ in polar form.

$|z| = \sqrt{9 + 16} = 5$.

Both real and imaginary parts are negative, so $z$ is in the third quadrant.

$\theta = \arctan(4/3) + \pi = \pi + \arctan(4/3)$.

$z = 5\,e^{i(\pi + \arctan(4/3))}$.

</details>

### 1.4 Euler's Formula and De Moivre’s Theorem

**Euler's formula:** $e^{i\theta} = \cos\theta + i\sin\theta$.

**De Moivre's theorem:** $(e^{i\theta})^n = e^{in\theta}$So

$$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$$

**Proposition 1.5.** De Moivre's theorem holds for all integers $n$Including negative values.

_Proof._ For $n \geq 0$It follows by induction from the multiplication law
$e^{i\alpha}e^{i\beta} = e^{i(\alpha + \beta)}$. For $n \lt 0$Write $n = -m$ with $m \gt 0$:
$(\cos\theta + i\sin\theta)^n = \frac{1}{(\cos\theta + i\sin\theta)^m}
= \frac{1}{\cos(m\theta) + i\sin(m\theta)} = \cos(-m\theta) + i\sin(-m\theta) = \cos(n\theta) + i\sin(n\theta)$.
$\blacksquare$

#### Applications of De Moivre's Theorem

**Example.** Compute $(1 + i)^{20}$.

$1 + i = \sqrt{2}\,e^{i\pi/4}$So
$(1 + i)^{20} = (\sqrt{2})^{20}\, e^{20\pi i/4} = 2^{10}\, e^{5\pi i} = 1024\,e^{\pi i} = -1024$.

<details>
<summary>Solution</summary>

**Problem.** Express $\cos(5\theta)$ in terms of $\cos\theta$ using de Moivre.

By de Moivre: $\cos(5\theta) + i\sin(5\theta) = (\cos\theta + i\sin\theta)^5$.

Expanding the right side by the binomial theorem and equating real parts:

$\cos(5\theta) = \cos^5\theta - 10\cos^3\theta\sin^2\theta + 5\cos\theta\sin^4\theta$.

Using $\sin^2\theta = 1 - \cos^2\theta$:

$\cos(5\theta) = \cos^5\theta - 10\cos^3\theta(1 - \cos^2\theta) + 5\cos\theta(1 - \cos^2\theta)^2$
$= \cos^5\theta - 10\cos^3\theta + 10\cos^5\theta + 5\cos\theta - 10\cos^3\theta + 5\cos^5\theta$
$= 16\cos^5\theta - 20\cos^3\theta + 5\cos\theta$.

**Problem.** Show that
$\sum_{k=0}^{n-1} \cos(k\theta) = \frac{\sin(n\theta/2)}{\sin(\theta/2)}\cos\!\left(\frac{(n-1)\theta}{2}\right)$
For $\theta \notin 2\pi\mathbb{Z}$.

Consider $S = \sum_{k=0}^{n-1} e^{ik\theta} = \frac{1 - e^{in\theta}}{1 - e^{i\theta}}$ (geometric
series with $r = e^{i\theta} \neq 1$).

$S = \frac{e^{in\theta/2}(e^{-in\theta/2} - e^{in\theta/2})}{e^{i\theta/2}(e^{-i\theta/2} - e^{i\theta/2})}
= e^{i(n-1)\theta/2} \cdot \frac{\sin(n\theta/2)}{\sin(\theta/2)}$.

Taking real parts gives the result.

</details>

### 1.5 Roots of Complex Numbers

**Definition.** An $n$-th root of $w \in \mathbb{C}$ is a complex number $z$ such that $z^n = w$.

**Proposition 1.6.** Every non-zero $w \in \mathbb{C}$ has exactly $n$ distinct $n$-th roots. If
$w = \rho\, e^{i\phi}$Then

$$z_k = \rho^{1/n}\, e^{i(\phi + 2\pi k)/n}, \quad k = 0, 1, \ldots, n - 1$$

Where $\rho^{1/n} \gt 0$ is the positive real $n$-th root of $\rho$.

_Proof._ If $z^n = w$Write $z = r\,e^{i\theta}$. Then $r^n e^{in\theta} = \rho\, e^{i\phi}$ So
$r = \rho^{1/n}$ and $n\theta = \phi + 2\pi k$. For $k = 0, 1, \ldots, n-1$ these give distinct
Values of $\theta$; for $k \geq n$ they repeat. $\blacksquare$

_Remark._ The $n$-th roots of $w$ lie equally spaced on a circle of radius $\rho^{1/n}$Forming a
Regular $n$-gon.

### 1.6 Roots of Unity

The $n$-th roots of unity are the solutions of $z^n = 1$:

$$z_k = e^{2\pi i k / n}, \quad k = 0, 1, \ldots, n - 1$$

They form a regular $n$-gon on the unit circle in the complex plane.

**Proposition 1.7.** If $\omega = e^{2\pi i/n}$ is a primitive $n$-th root of unity, then
$\sum_{k=0}^{n-1} \omega^k = 0$ and $\sum_{k=0}^{n-1} \omega^{jk} = 0$ for any $j$ not divisible by
$n$.

_Proof._ The sum
$\sum_{k=0}^{n-1} \omega^k = \frac{1 - \omega^n}{1 - \omega} = \frac{1 - 1}{1 - \omega} = 0$
Provided $\omega \neq 1$. For $j$ not divisible by $n$, $\omega^j$ is a non-trivial root of unity,
So the same argument applies. $\blacksquare$

<details>
<summary>Solution</summary>

**Problem.** Find all cube roots of $-8$.

$-8 = 8\,e^{i\pi}$. The cube roots are:
$z_k = 8^{1/3}\, e^{i(\pi + 2\pi k)/3} = 2\, e^{i(\pi + 2\pi k)/3}$ for $k = 0, 1, 2$.

$z_0 = 2\,e^{i\pi/3} = 2\left(\frac{1}{2} + i\,\frac{\sqrt{3}}{2}\right) = 1 + i\sqrt{3}$.
$z_1 = 2\,e^{i\pi} = -2$.
$z_2 = 2\,e^{i5\pi/3} = 2\left(\frac{1}{2} - i\,\frac{\sqrt{3}}{2}\right) = 1 - i\sqrt{3}$.

**Problem.** Find all fourth roots of $z = 16i$.

$16i = 16\,e^{i\pi/2}$. The fourth roots are:
$z_k = 16^{1/4}\, e^{i(\pi/2 + 2\pi k)/4} = 2\, e^{i(\pi/8 + \pi k/2)}$ for $k = 0, 1, 2, 3$.

$z_0 = 2\,e^{i\pi/8}$, $z_1 = 2\,e^{i5\pi/8}$, $z_2 = 2\,e^{i9\pi/8}$, $z_3 = 2\,e^{i13\pi/8}$.

**Problem.** Show that the $n$-th roots of any non-zero $w$ are in geometric progression.

The roots are
$z_k = \rho^{1/n}\, e^{i(\phi + 2\pi k)/n} = z_0 \cdot \left(e^{2\pi i/n}\right)^k = z_0 \cdot \omega^k$
Where $\omega = e^{2\pi i/n}$ is a primitive $n$-th root of unity. This is a geometric sequence With
ratio $\omega$.

</details>

