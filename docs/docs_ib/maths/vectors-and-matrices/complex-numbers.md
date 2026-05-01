---
title: Complex Numbers
description: IB Mathematics — Cartesian and polar form, De Moivre's theorem, roots of unity, Euler's formula, and applications to trigonometry and integration.
slug: complex-numbers-advanced
---

## Cartesian Form

### Definition

A complex number $z$ is written:

$$z = a + bi, \quad a, b \in \mathbb{R}$$

where $a = \mathrm{Re}(z)$ is the real part and $b = \mathrm{Im}(z)$ is the imaginary part. The set
of all complex numbers is $\mathbb{C}$.

### Complex Arithmetic

**Addition.** $(a + bi) + (c + di) = (a + c) + (b + d)i$

**Multiplication.** $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$

**Division.** Multiply by the conjugate of the denominator:

$$\frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{c^2 + d^2} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$$

### Complex Conjugate

The conjugate of $z = a + bi$ is $\bar{z} = a - bi$.

**Properties:**

- $z\bar{z} = a^2 + b^2 = |z|^2$
- $\overline{z_1 + z_2} = \bar{z}_1 + \bar{z}_2$
- $\overline{z_1 z_2} = \bar{z}_1 \bar{z}_2$
- $z + \bar{z} = 2\mathrm{Re}(z)$, $z - \bar{z} = 2i\,\mathrm{Im}(z)$

### Modulus and Argument

The **modulus** (absolute value) of $z = a + bi$:

$$|z| = \sqrt{a^2 + b^2}$$

The **argument** $\arg(z) = \theta$ is the angle from the positive real axis, measured
anticlockwise, where:

$$\tan\theta = \frac{b}{a}$$

The **principal argument** $\mathrm{Arg}(z)$ satisfies $-\pi \lt \theta \le \pi$. Use the quadrant of
$(a, b)$ to determine the correct angle.

---

## Polar Form

### Exponential Representation

Any non-zero complex number can be written in polar form:

$$z = r(\cos\theta + i\sin\theta) = re^{i\theta}$$

where $r = |z|$ and $\theta = \arg(z)$.

### Conversion

- **Cartesian to polar:** $r = \sqrt{a^2 + b^2}$, $\theta = \arctan\!\left(\dfrac{b}{a}\right)$ (adjusting for quadrant).
- **Polar to Cartesian:** $a = r\cos\theta$, $b = r\sin\theta$.

**Example.** Express $z = 1 + i\sqrt{3}$ in polar form.

$$r = \sqrt{1 + 3} = 2, \qquad \theta = \arctan\!\left(\frac{\sqrt{3}}{1}\right) = \frac{\pi}{3}$$

$$z = 2\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = 2e^{i\pi/3}$$

### Multiplication and Division in Polar Form

If $z_1 = r_1 e^{i\theta_1}$ and $z_2 = r_2 e^{i\theta_2}$:

$$z_1 z_2 = r_1 r_2\, e^{i(\theta_1 + \theta_2)}$$

$$\frac{z_1}{z_2} = \frac{r_1}{r_2}\, e^{i(\theta_1 - \theta_2)}$$

Multiplication: moduli multiply, arguments add. Division: moduli divide, arguments subtract.

**Example.** Compute $\dfrac{1 + i}{\sqrt{3} - i}$.

$1 + i = \sqrt{2}\,e^{i\pi/4}$, $\sqrt{3} - i = 2\,e^{-i\pi/6}$.

$$\frac{1 + i}{\sqrt{3} - i} = \frac{\sqrt{2}}{2}\, e^{i(\pi/4 + \pi/6)} = \frac{\sqrt{2}}{2}\, e^{i5\pi/12}$$

---

## De Moivre's Theorem

### Statement

For any integer $n$:

$$(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$$

In exponential notation: $\bigl(e^{i\theta}\bigr)^n = e^{in\theta}$.

### Applications to Trigonometry

De Moivre's theorem allows us to express $\cos n\theta$ and $\sin n\theta$ as polynomials in
$\cos\theta$ and $\sin\theta$.

**Example.** Express $\cos 3\theta$ and $\sin 3\theta$ in terms of $\cos\theta$ and $\sin\theta$.

$$(\cos\theta + i\sin\theta)^3 = \cos 3\theta + i\sin 3\theta$$

Expanding the left side using the binomial theorem:

$$\cos^3\theta + 3i\cos^2\theta \sin\theta - 3\cos\theta \sin^2\theta - i\sin^3\theta$$

Equating real and imaginary parts:

$$\cos 3\theta = \cos^3\theta - 3\cos\theta \sin^2\theta = 4\cos^3\theta - 3\cos\theta$$

$$\sin 3\theta = 3\cos^2\theta \sin\theta - \sin^3\theta = 3\sin\theta - 4\sin^3\theta$$

### Multiple Angle Formulas

Using $\cos^2\theta + \sin^2\theta = 1$ to eliminate $\sin\theta$:

$$\cos 2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta$$

$$\cos 3\theta = 4\cos^3\theta - 3\cos\theta$$

$$\cos 4\theta = 8\cos^4\theta - 8\cos^2\theta + 1$$

---

## Roots of Complex Numbers

### $n$-th Roots

The $n$ solutions to $z^n = w$ where $w = re^{i\theta}$ are:

$$z_k = r^{1/n}\, \exp\!\left(\frac{i(\theta + 2k\pi)}{n}\right), \qquad k = 0, 1, 2, \ldots, n - 1$$

These $n$ roots lie on a circle of radius $r^{1/n}$ in the complex plane, equally spaced at angles
of $\dfrac{2\pi}{n}$.

**Example.** Find the cube roots of $-8$.

$-8 = 8e^{i\pi}$.

$$z_k = 2\, \exp\!\left(\frac{i(\pi + 2k\pi)}{3}\right), \qquad k = 0, 1, 2$$

- $z_0 = 2e^{i\pi/3} = 1 + i\sqrt{3}$
- $z_1 = 2e^{i\pi} = -2$
- $z_2 = 2e^{i5\pi/3} = 1 - i\sqrt{3}$

### Roots of Unity

The $n$-th **roots of unity** are the solutions to $z^n = 1$:

$$z_k = \exp\!\left(\frac{2k\pi i}{n}\right), \qquad k = 0, 1, \ldots, n - 1$$

These lie on the unit circle, forming a regular $n$-gon.

**Properties:**

- The sum of all $n$-th roots of unity is zero: $\displaystyle\sum_{k=0}^{n-1} z_k = 0$.
- The product of all $n$-th roots of unity is $(-1)^{n+1}$.
- Primitive roots generate all other roots by repeated multiplication.

**Example.** The 4th roots of unity: $1, i, -1, -i$.

**Example.** The 5th roots of unity form a regular pentagon on the unit circle at angles
$0, \dfrac{2\pi}{5}, \dfrac{4\pi}{5}, \dfrac{6\pi}{5}, \dfrac{8\pi}{5}$.

---

## Euler's Formula

### Statement

$$e^{i\theta} = \cos\theta + i\sin\theta$$

This fundamental identity connects the exponential function with trigonometry.

### Proof (via Maclaurin Series)

$$e^{i\theta} = \sum_{n=0}^{\infty} \frac{(i\theta)^n}{n!} = 1 + i\theta + \frac{(i\theta)^2}{2!} + \frac{(i\theta)^3}{3!} + \cdots$$

$$= 1 + i\theta - \frac{\theta^2}{2!} - \frac{i\theta^3}{3!} + \frac{\theta^4}{4!} + \cdots$$

$$= \left(1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots\right) + i\left(\theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \cdots\right)$$

$$= \cos\theta + i\sin\theta$$

### Euler's Identity

Setting $\theta = \pi$:

$$e^{i\pi} + 1 = 0$$

This elegantly relates five fundamental constants: $e$, $i$, $\pi$, $1$, and $0$.

### Connections Between Exponential and Trigonometric Functions

From Euler's formula:

$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}$$

$$\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$

These are the starting point for many applications.

---

## Applications to Trigonometry

### Linearising Products

Products of sines and cosines can be expressed as sums using Euler's formulas.

$$\cos A \cos B = \frac{1}{2}\bigl[\cos(A + B) + \cos(A - B)\bigr]$$

$$\sin A \sin B = \frac{1}{2}\bigl[\cos(A - B) - \cos(A + B)\bigr]$$

$$\sin A \cos B = \frac{1}{2}\bigl[\sin(A + B) + \sin(A - B)\bigr]$$

### Sums of Sines and Cosines

$$\sum_{k=1}^{n} \cos k\theta = \frac{\sin(n\theta/2)\cos\bigl((n+1)\theta/2\bigr)}{\sin(\theta/2)}$$

$$\sum_{k=1}^{n} \sin k\theta = \frac{\sin(n\theta/2)\sin\bigl((n+1)\theta/2\bigr)}{\sin(\theta/2)}$$

**Derivation.** Using $\cos k\theta = \mathrm{Re}(e^{ik\theta})$ and summing the geometric series:

$$\sum_{k=1}^{n} e^{ik\theta} = e^{i\theta}\cdot\frac{1 - e^{in\theta}}{1 - e^{i\theta}}$$

Multiply numerator and denominator by $e^{-i\theta/2}$:

$$= e^{i\theta/2}\cdot\frac{e^{in\theta/2}(e^{-in\theta/2} - e^{in\theta/2})}{e^{-i\theta/2} - e^{i\theta/2}} = e^{i\theta/2}\cdot\frac{e^{in\theta/2}(-2i\sin n\theta/2)}{-2i\sin\theta/2}$$

$$= \frac{e^{i(n+1)\theta/2} \sin(n\theta/2)}{\sin(\theta/2)}$$

Taking real and imaginary parts gives the formulas above.

---

## Applications to Integration

### Integrals of Powers of Sine and Cosine

Using $\cos\theta = \dfrac{e^{i\theta} + e^{-i\theta}}{2}$ and $\sin\theta = \dfrac{e^{i\theta} - e^{-i\theta}}{2i}$,
powers of trig functions can be expanded and integrated term by term.

**Example.** Evaluate $\displaystyle\int \cos^4\theta\,d\theta$.

$$\cos^4\theta = \left(\frac{e^{i\theta} + e^{-i\theta}}{2}\right)^{\!4} = \frac{1}{16}\bigl(e^{4i\theta} + 4e^{2i\theta} + 6 + 4e^{-2i\theta} + e^{-4i\theta}\bigr)$$

$$= \frac{1}{16}(2\cos 4\theta + 8\cos 2\theta + 6) = \frac{1}{8}\cos 4\theta + \frac{1}{2}\cos 2\theta + \frac{3}{8}$$

$$\int \cos^4\theta\,d\theta = \frac{1}{32}\sin 4\theta + \frac{1}{4}\sin 2\theta + \frac{3}{8}\theta + C$$

**Example.** Evaluate $\displaystyle\int \sin^3\theta\,d\theta$.

$$\sin^3\theta = \left(\frac{e^{i\theta} - e^{-i\theta}}{2i}\right)^{\!3} = \frac{-1}{8i}\bigl(e^{3i\theta} - 3e^{i\theta} + 3e^{-i\theta} - e^{-3i\theta}\bigr)$$

$$= \frac{1}{4}\bigl(3\sin\theta - \sin 3\theta\bigr)$$

$$\int \sin^3\theta\,d\theta = -\frac{3}{4}\cos\theta + \frac{1}{12}\cos 3\theta + C$$

### Integrals Involving Products

$$\int \cos m\theta \cos n\theta\,d\theta = \frac{1}{2}\int \bigl[\cos(m+n)\theta + \cos(m-n)\theta\bigr]\,d\theta$$

provided $m \ne \pm n$. When $m = n$:

$$\int \cos^2 n\theta\,d\theta = \int \frac{1 + \cos 2n\theta}{2}\,d\theta = \frac{\theta}{2} + \frac{\sin 2n\theta}{4n} + C$$

**Orthogonality.** For integers $m \ne n$:

$$\int_0^{2\pi} \cos m\theta \cos n\theta\,d\theta = 0, \qquad \int_0^{2\pi} \sin m\theta \sin n\theta\,d\theta = 0$$

$$\int_0^{2\pi} \cos m\theta \sin n\theta\,d\theta = 0$$

These orthogonality relations are fundamental to Fourier analysis.

---

## The Complex Plane (Argand Diagram)

### Geometric Interpretation

The complex number $z = a + bi$ is represented by the point $(a, b)$ in the plane. The modulus $|z|$
is the distance from the origin, and $\arg(z)$ is the angle from the positive real axis.

### Regions in the Complex Plane

| Condition | Region |
| :--- | :--- |
| $|z| = r$ | Circle of radius $r$ centred at the origin |
| $|z| \lt r$ | Interior of the circle |
| $|z - z_0| = r$ | Circle of radius $r$ centred at $z_0$ |
| $\arg(z) = \alpha$ | Half-line from origin at angle $\alpha$ |
| $\alpha \lt \arg(z) \lt \beta$ | Sector between angles $\alpha$ and $\beta$ |

### Loci

$|z - a| = |z - b|$ represents the perpendicular bisector of the segment joining $a$ and $b$ in the
complex plane.

$|z - a| = k|z - b|$ (with $k \ne 1$) represents a circle (Apollonius circle).

---

## Complex Differentiation and Integration

### Differentiating Complex Functions

If $f(z) = u(x, y) + iv(x, y)$ is differentiable at $z_0$, it satisfies the **Cauchy-Riemann
equations**:

$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \qquad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$

A function satisfying these equations at every point of an open set is called **analytic** (or
**holomorphic**) on that set.

**Example.** $f(z) = z^2 = (x + iy)^2 = (x^2 - y^2) + i(2xy)$.

$u = x^2 - y^2$, $v = 2xy$.

$\dfrac{\partial u}{\partial x} = 2x = \dfrac{\partial v}{\partial y}$ and
$\dfrac{\partial u}{\partial y} = -2y = -\dfrac{\partial v}{\partial x}$. The Cauchy-Riemann
equations are satisfied, so $z^2$ is analytic.

### Integration in the Complex Plane

The integral of $f(z)$ along a contour $\gamma$ from $z_1$ to $z_2$ is:

$$\int_\gamma f(z)\,dz$$

For analytic functions, the integral is **path-independent** (by Cauchy's theorem): the integral over
any closed contour of an analytic function is zero.

### Applications to Real Integration

Certain difficult real integrals can be evaluated using complex analysis. A standard technique
involves integrating $f(z)$ around a semicircular contour in the upper half-plane and applying the
**residue theorem**.

**Example.** Evaluate $\displaystyle\int_{-\infty}^{\infty} \frac{1}{x^2 + 1}\,dx$.

The integrand has a simple pole at $z = i$ in the upper half-plane with residue:

$$\mathrm{Res}\!\left(\frac{1}{z^2 + 1},\, i\right) = \lim_{z \to i} (z - i)\cdot\frac{1}{(z-i)(z+i)} = \frac{1}{2i}$$

By the residue theorem, integrating over the semicircular contour and taking the radius to infinity:

$$\int_{-\infty}^{\infty} \frac{1}{x^2 + 1}\,dx = 2\pi i \cdot \frac{1}{2i} = \pi$$

This matches the known result: $[\arctan x]_{-\infty}^{\infty} = \dfrac{\pi}{2} - \left(-\dfrac{\pi}{2}\right) = \pi$.

---

## Polynomial Equations and the Fundamental Theorem

### The Fundamental Theorem of Algebra

Every polynomial $p(z) = a_n z^n + a_{n-1}z^{n-1} + \cdots + a_0$ of degree $n \ge 1$ with complex
coefficients has at least one root in $\mathbb{C}$. Equivalently, it factorises completely:

$$p(z) = a_n(z - z_1)(z - z_2)\cdots(z - z_n)$$

where $z_1, z_2, \ldots, z_n$ are the roots (not necessarily distinct).

### Complex Roots of Real Polynomials

If a real polynomial has a complex root $z = a + bi$ (with $b \ne 0$), then its complex conjugate
$\bar{z} = a - bi$ is also a root. Roots come in **conjugate pairs**.

### Relationships Between Roots and Coefficients

For $p(z) = z^n + a_{n-1}z^{n-1} + \cdots + a_1 z + a_0$ with roots $z_1, \ldots, z_n$:

- $\displaystyle\sum_{i=1}^{n} z_i = -a_{n-1}$
- $\displaystyle\sum_{i \lt j} z_i z_j = a_{n-2}$
- $\displaystyle\prod_{i=1}^{n} z_i = (-1)^n a_0$

### Solving Cubic Equations Using Complex Numbers

**Example.** Solve $z^3 - 1 = 0$.

$z^3 = 1 = e^{2k\pi i}$ for $k = 0, 1, 2$.

$$z_k = e^{2k\pi i/3}, \qquad k = 0, 1, 2$$

$z_0 = 1$, $z_1 = e^{2\pi i/3} = -\dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i$, $z_2 = e^{4\pi i/3} = -\dfrac{1}{2} - \dfrac{\sqrt{3}}{2}i$.

These are the **cube roots of unity**, forming an equilateral triangle on the unit circle.

---

## Complex Exponentials and Differential Equations

### Solving ODEs with Complex Characteristic Roots

When the characteristic equation of a second order ODE has complex roots $\alpha \pm i\beta$, the
general solution is:

$$y = e^{\alpha x}(A\cos\beta x + B\sin\beta x)$$

This is derived from the complex exponential solution $y = Ce^{(\alpha + i\beta)x}$:

$$Ce^{\alpha x}e^{i\beta x} = Ce^{\alpha x}(\cos\beta x + i\sin\beta x)$$

Taking real and imaginary parts gives the independent solutions $e^{\alpha x}\cos\beta x$ and
$e^{\alpha x}\sin\beta x$.

**Example.** Solve $y'' + 4y' + 13y = 0$.

Characteristic equation: $\lambda^2 + 4\lambda + 13 = 0$.

$$\lambda = \frac{-4 \pm \sqrt{16 - 52}}{2} = -2 \pm 3i$$

$$y = e^{-2x}(A\cos 3x + B\sin 3x)$$

---

## Worked Problems

### Problem: Loci in the Complex Plane

Sketch the region defined by $|z - 2 - 3i| \le 3$ and $\arg(z - 2 - 3i) \le \dfrac{\pi}{4}$.

$|z - (2 + 3i)| \le 3$ is the closed disk of radius $3$ centred at $2 + 3i$. Combined with the
argument condition, this is the sector of the disk bounded by the positive real axis direction from
$2 + 3i$ and the line at $\pi/4$ from that point.

### Problem: De Moivre with Large Exponents

Find $\dfrac{(1 + i)^{10}}{(1 - i)^8}$.

$1 + i = \sqrt{2}\,e^{i\pi/4}$ and $1 - i = \sqrt{2}\,e^{-i\pi/4}$.

$$(1 + i)^{10} = (\sqrt{2})^{10}\, e^{10\pi i/4} = 32\, e^{5\pi i/2} = 32\, e^{i\pi/2} = 32i$$

$$(1 - i)^8 = (\sqrt{2})^8\, e^{-8\pi i/4} = 16\, e^{-2\pi i} = 16$$

$$\frac{(1 + i)^{10}}{(1 - i)^8} = \frac{32i}{16} = 2i$$

:::warning Common Pitfall

When computing arguments, always verify the quadrant. $\arctan(b/a)$ alone gives the correct angle
only when $a \gt 0$. For other quadrants, add or subtract $\pi$ as needed. Using $\mathrm{atan2}(b, a)$
(if available) handles this automatically.

:::

---

## Additional Worked Examples

**Worked Example: Solving a Quartic Using Roots of Unity**

Solve $z^4 + 4z^2 + 16 = 0$.

<details>
<summary>Solution</summary>

Let $w = z^2$. Then $w^2 + 4w + 16 = 0$.

$$w = \frac{-4 \pm \sqrt{16 - 64}}{2} = \frac{-4 \pm \sqrt{-48}}{2} = -2 \pm 2i\sqrt{3}$$

So $z^2 = -2 + 2i\sqrt{3}$ or $z^2 = -2 - 2i\sqrt{3}$.

For $z^2 = -2 + 2i\sqrt{3}$: Write in polar form.

$$|w| = \sqrt{4 + 12} = 4, \qquad \arg(w) = \arctan\!\left(\frac{2\sqrt{3}}{-2}\right) = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$$

$$z = \pm 2\, e^{i\pi/3} = \pm\left(1 + i\sqrt{3}\right)$$

For $z^2 = -2 - 2i\sqrt{3}$:

$$|w| = 4, \qquad \arg(w) = -\frac{2\pi}{3}$$

$$z = \pm 2\, e^{-i\pi/3} = \pm\left(1 - i\sqrt{3}\right)$$

The four roots are $1 + i\sqrt{3}$, $-1 - i\sqrt{3}$, $1 - i\sqrt{3}$, $-1 + i\sqrt{3}$.

</details>

**Worked Example: De Moivre for Cosine Multiple Angle Formula**

Express $\cos 5\theta$ as a polynomial in $\cos\theta$.

<details>
<summary>Solution</summary>

By De Moivre: $(\cos\theta + i\sin\theta)^5 = \cos 5\theta + i\sin 5\theta$.

Expanding the left side by the binomial theorem:

$$(\cos\theta + i\sin\theta)^5 = \cos^5\theta + 5i\cos^4\theta\sin\theta - 10\cos^3\theta\sin^2\theta - 10i\cos^2\theta\sin^3\theta + 5\cos\theta\sin^4\theta + i\sin^5\theta$$

Equating real parts:

$$\cos 5\theta = \cos^5\theta - 10\cos^3\theta\sin^2\theta + 5\cos\theta\sin^4\theta$$

Using $\sin^2\theta = 1 - \cos^2\theta$:

$$\cos 5\theta = \cos^5\theta - 10\cos^3\theta(1 - \cos^2\theta) + 5\cos\theta(1 - \cos^2\theta)^2$$

$$= \cos^5\theta - 10\cos^3\theta + 10\cos^5\theta + 5\cos\theta - 10\cos^3\theta + 5\cos^5\theta$$

$$= 16\cos^5\theta - 20\cos^3\theta + 5\cos\theta$$

</details>

**Worked Example: Fifth Roots of a Complex Number**

Find all solutions to $z^5 = 16\sqrt{2}(1 + i)$.

<details>
<summary>Solution</summary>

First express the right side in polar form:

$$1 + i = \sqrt{2}\, e^{i\pi/4}$$

$$16\sqrt{2}(1 + i) = 16\sqrt{2} \cdot \sqrt{2}\, e^{i\pi/4} = 32\, e^{i\pi/4}$$

The five roots are:

$$z_k = 32^{1/5} \exp\!\left(\frac{i(\pi/4 + 2k\pi)}{5}\right) = 2 \exp\!\left(\frac{i(\pi + 8k\pi)}{20}\right), \quad k = 0, 1, 2, 3, 4$$

- $z_0 = 2\, e^{i\pi/20}$
- $z_1 = 2\, e^{i9\pi/20}$
- $z_2 = 2\, e^{i17\pi/20}$
- $z_3 = 2\, e^{i25\pi/20} = 2\, e^{i5\pi/4}$
- $z_4 = 2\, e^{i33\pi/20}$

These lie on a circle of radius $2$ centred at the origin, equally spaced at angles of $\dfrac{2\pi}{5}$.

</details>

**Worked Example: Integration Using Complex Exponentials**

Evaluate $\displaystyle\int_0^{2\pi} \cos^6\theta\,d\theta$.

<details>
<summary>Solution</summary>

Using $\cos\theta = \dfrac{e^{i\theta} + e^{-i\theta}}{2}$:

$$\cos^6\theta = \frac{1}{64}(e^{i\theta} + e^{-i\theta})^6$$

By the binomial theorem:

$$(e^{i\theta} + e^{-i\theta})^6 = e^{6i\theta} + 6e^{4i\theta} + 15e^{2i\theta} + 20 + 15e^{-2i\theta} + 6e^{-4i\theta} + e^{-6i\theta}$$

$$= 2\cos 6\theta + 12\cos 4\theta + 30\cos 2\theta + 20$$

Therefore:

$$\cos^6\theta = \frac{1}{32}\cos 6\theta + \frac{3}{16}\cos 4\theta + \frac{15}{32}\cos 2\theta + \frac{5}{16}$$

Integrating over $[0, 2\pi]$, the cosine terms vanish:

$$\int_0^{2\pi} \cos^6\theta\,d\theta = \int_0^{2\pi} \frac{5}{16}\,d\theta = \frac{5}{16} \cdot 2\pi = \frac{5\pi}{8}$$

</details>

**Worked Example: Loci and Regions**

Sketch and describe the region in the complex plane defined by $|z - 1 - i| \le 2$ and
$|z + 1| \ge 1$.

<details>
<summary>Solution</summary>

$|z - (1 + i)| \le 2$ is the closed disk of radius $2$ centred at $(1, 1)$.

$|z - (-1)| \ge 1$ is the exterior of the open disk of radius $1$ centred at $(-1, 0)$ (including
the boundary).

The region satisfying both conditions is the part of the disk $|z - 1 - i| \le 2$ that lies
outside the disk $|z + 1| \lt 1$.

The distance between the two centres is $|(1 + i) - (-1)| = |2 + i| = \sqrt{5} \approx 2.24$. Since
the radii are $2$ and $1$, and $\sqrt{5} \lt 2 + 1 = 3$, the disks overlap. The distance between
centres $2.24$ is greater than the difference of radii $|2 - 1| = 1$, so neither disk is contained
within the other. The region is a disk with a smaller circular cut-out near $(-1, 0)$.

</details>

---

## Common Pitfalls

1. **Wrong quadrant for the argument.** When $\mathrm{Re}(z) \lt 0$ and $\mathrm{Im}(z) \gt 0$, the
   point lies in the second quadrant and the argument is $\pi - \arctan\!\left(\dfrac{|\mathrm{Im}(z)|}{|\mathrm{Re}(z)|}\right)$,
   not $\arctan\!\left(\dfrac{\mathrm{Im}(z)}{\mathrm{Re}(z)}\right)$.

2. **Forgetting all $n$ roots.** An equation $z^n = w$ has exactly $n$ complex roots (counting
   multiplicity). Always list all $n$ roots by using $k = 0, 1, \ldots, n-1$.

3. **De Moivre with negative $n$.** $(\cos\theta + i\sin\theta)^{-1} = \cos(-\theta) + i\sin(-\theta)
   = \cos\theta - i\sin\theta$. This is equivalent to the conjugate, and the formula holds for all
   integers $n$.

4. **Assuming $|z_1 + z_2| = |z_1| + |z_2|$.** The triangle inequality states
   $|z_1 + z_2| \le |z_1| + |z_2|$, with equality only when $z_1$ and $z_2$ have the same argument
   (point in the same direction).

5. **Conjugate confusion in division.** To simplify $\dfrac{z_1}{z_2}$, multiply numerator and
   denominator by $\bar{z}_2$, not by $z_2$. Multiplying by $z_2$ does not make the denominator real.

6. **Roots of unity sum misconception.** The sum of **all** $n$-th roots of unity is zero, but the
   sum of a **subset** is generally not zero. For example, the sum of the primitive 4th roots of
   unity ($i$ and $-i$) is $0$, but the sum of the primitive 6th roots of unity is $-1$.

7. **Incorrect use of Euler's formula for integration.** When using $e^{i\theta}$ to integrate
   $\cos^n\theta$ or $\sin^n\theta$, the intermediate expressions involve complex exponentials. Always
   collect terms carefully and verify that the final integrand is real before integrating.

8. **Confusing $z^n = 1$ with $z^n = -1$.** The roots of $z^n = -1$ are obtained by writing
   $-1 = e^{i\pi}$ (not $e^{i0}$), giving $z_k = e^{i(\pi + 2k\pi)/n}$.

---

## Exam-Style Problems

1. Express $z = -\sqrt{3} + i$ in polar form and hence compute $z^{12}$.

2. Find the cube roots of $-27i$ and show that they form an equilateral triangle in the Argand
   diagram.

3. Use De Moivre's theorem to express $\sin 4\theta$ in terms of $\sin\theta$ and $\cos\theta$.

4. Solve $z^4 - 2z^3 + 5z^2 - 8z + 4 = 0$ given that $z = 1 + i$ is a root.

5. The complex number $z$ satisfies $|z - 2| = |z + 2i|$. Describe the locus of $z$ and find the
   complex number on this locus with the smallest modulus.

6. Evaluate $\displaystyle\int_0^{\pi} \sin^4\theta\,d\theta$ using complex exponentials.

7. Prove that $\cos^4\theta + \sin^4\theta = \dfrac{3}{4} + \dfrac{1}{4}\cos 4\theta$.

8. The 5th roots of unity are $1, \omega, \omega^2, \omega^3, \omega^4$. Show that
   $(1 - \omega)(1 - \omega^2)(1 - \omega^3)(1 - \omega^4) = 5$.

---

## Cross-References

- **Trigonometric identities** derived via De Moivre: see [Trigonometry](../trigonometry)
- **Differential equations** with complex characteristic roots: see [Differential Equations](../differential-equations)
- **Sequences and series** including power series for Euler's formula proof: see [Sequences and Series](../sequences-and-series)
- **Integration techniques** for trigonometric powers: see [Integration](../integration-techniques)
