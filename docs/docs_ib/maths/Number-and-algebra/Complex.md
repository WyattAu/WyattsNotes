---
title: Complex Numbers
tags:
- maths
slug: complex-numbers
description: Comprehensive guide to complex numbers for the International Baccalaureate.
---


## Cartesian Form

Cartesian form complex numbers ($z$) are separated to real ($a$) and imaginary parts ($bi$):

$$
\begin{aligned}
    z = a + bi, \quad a,b \in \mathbb{R}
\end{aligned}
$$

## Polar Form

Complex numbers ($z$) in polar form are defined with argument ($\theta$) away from $0$ in a unit
circle, scaled by the magnitude ($r$):

$$
\begin{aligned}
    z = r(\cos \theta + i \sin \theta)
\end{aligned}
$$

## Euler's Form

Complex numbers ($z$) in Euler's form are defined by extending polar form, using Euler's number:

$$
\begin{aligned}
   z = re^{i\theta}
\end{aligned}
$$

## Conversions

### Cartesian to Polar Form

As complex numbers is form by two coordinates (real and imaginary), the magnitude can by obtained by
the Pythagorean identity:

$$
\begin{aligned}
    r = |z| = \sqrt{a^2+b^2}
\end{aligned}
$$

Similarly, the argument ($\theta$) can be determined by the two coordinates by the definition of
$\tan(\theta) = \frac{b}{a}$:

$$
\begin{aligned}
    \theta = \arg(z) = \arctan \frac{b}{a}
\end{aligned}
$$

Since $\tan \theta$ is undefined at $a = 0$, case piecewise definition can define $\theta$ at
$a = 0$:

$$
\begin{aligned}
    \theta = \arg(z) =
    \begin{cases}
        \arctan \frac{b}{a} & a \neq 0\\
        \frac{\pi}{2} & a = 0, b \gt{} 0\\
        -\frac{\pi}{2} & a = 0, b \lt{} 0\\
    \end{cases}
\end{aligned}
$$

### Polar to Cartesian

Since polar coordinates is already defined by the argument, conversion to cartesian is simply
evaluating the definition of cartesian coordinate ($\mathrm{cis }\theta$):

$$
\begin{aligned}
    z = r(\cos \theta + i \sin \theta)
\end{aligned}
$$

### Euler to Polar

The equivalence of Euler and polar form can be shown by their Taylor series expansion:

$$
\begin{aligned}
    re^{i\theta} = r\left(1 + i\theta + \frac{(i\theta)^2}{2!} + \frac{(i\theta)^3}{3!} + \cdots \right)
$$

Separating real and imaginary parts:

$$
\begin{aligned}
    re^{i\theta} &= r\left(1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots \right) + ir\left(\theta - \frac{\theta^3}{3!} + \frac{\theta^5}{5!} - \cdots \right)\\
    &= r\cos\theta + ir\sin\theta
\end{aligned}
$$

This gives **Euler's formula**:

$$
e^{i\theta} = \cos\theta + i\sin\theta
$$

A special case at $\theta = \pi$:

$$
e^{i\pi} + 1 = 0
$$

This identity links five fundamental constants: $e$, $i$, $\pi$, $1$, and $0$.

## Operations on Complex Numbers

### Addition and Subtraction

Add/subtract the real and imaginary parts separately:

$$
\begin{aligned}
    (a + bi) + (c + di) &= (a + c) + (b + d)i\\
    (a + bi) - (c + di) &= (a - c) + (b - d)i
\end{aligned}
$$

### Multiplication

Use the distributive property and $i^2 = -1$:

$$
\begin{aligned}
    (a + bi)(c + di) &= ac + adi + bci + bdi^2\\
    &= (ac - bd) + (ad + bc)i
\end{aligned}
$$

In polar form, multiplication is simpler — multiply the magnitudes and add the arguments:

$$
\begin{aligned}
    r_1 e^{i\theta_1} \cdot r_2 e^{i\theta_2} &= r_1 r_2 \cdot e^{i(\theta_1 + \theta_2)}
\end{aligned}
$$

### Division

Multiply numerator and denominator by the conjugate of the denominator:

$$
\begin{aligned}
    \frac{a + bi}{c + di} &= \frac{a + bi}{c + di} \cdot \frac{c - di}{c - di}\\
    &= \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}
\end{aligned}
$$

In polar form, divide the magnitudes and subtract the arguments:

$$
\frac{r_1 e^{i\theta_1}}{r_2 e^{i\theta_2}} = \frac{r_1}{r_2} \cdot e^{i(\theta_1 - \theta_2)}
$$

### Complex Conjugate

The complex conjugate of $z = a + bi$ is $\bar{z} = a - bi$.

Key properties:

$$
\begin{aligned}
    z \cdot \bar{z} &= a^2 + b^2 = |z|^2\\
    z + \bar{z} &= 2a \quad (\mathrm{real})\\
    z - \bar{z} &= 2bi \quad (\mathrm{imaginary})
\end{aligned}
$$

## The Argand Diagram

An Argand diagram represents complex numbers in a 2D plane:

- The **horizontal axis** represents the real part ($\mathrm{Re}(z)$)
- The **vertical axis** represents the imaginary part ($\mathrm{Im}(z)$)

A complex number $z = a + bi$ is plotted at the point $(a, b)$.

### Modulus

The modulus (magnitude) is the distance from the origin to the point:

$$
|z| = \sqrt{a^2 + b^2}
$$

### Argument

The argument is the angle measured anticlockwise from the positive real axis:

$$
\arg(z) = \arctan\left(\frac{b}{a}\right)
$$

**Principal argument:** $\arg(z) \in (-\pi, \pi]$

:::tip When finding $\arg(z)$, always draw a quick Argand diagram to check which quadrant the point
is in. A common mistake is to use the calculator value directly without adjusting for the correct
quadrant. :::

### Geometric Interpretation of Operations

- **Addition:** vector addition (parallelogram rule)
- **Conjugation ($\bar{z}$):** reflection in the real axis
- **Negation ($-z$):** reflection in the origin
- **Multiplication by $i$:** rotation $90^\circ$ anticlockwise

<DesmosGraph title="Complex Plane (Argand Diagram)" expressions={["\left(a,b\right)"]} width={800} height={500} />

Drag points to see how addition, conjugation, and multiplication affect the position on the Argand
diagram.

## De Moivre's Theorem

De Moivre's theorem states that for any integer $n$:

$$
\begin{aligned}
    \left(r(\cos\theta + i\sin\theta)\right)^n = r^n\left(\cos(n\theta) + i\sin(n\theta)\right)
\end{aligned}
$$

Or in Euler's form:

$$
\left(re^{i\theta}\right)^n = r^n e^{in\theta}
$$

### Applications of De Moivre's Theorem

**Raising to a power:**

$$
(1 + i)^6 = \left(\sqrt{2}\, e^{i\pi/4}\right)^6 = (\sqrt{2})^6 \cdot e^{i \cdot 6\pi/4} = 8 \cdot e^{i \cdot 3\pi/2} = 8\left(\cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2}\right) = -8i
$$

**Trigonometric identities:** Expanding $(\cos\theta + i\sin\theta)^n$ using the binomial theorem
and equating real and imaginary parts gives expressions for $\cos(n\theta)$ and $\sin(n\theta)$.

## Roots of Complex Numbers

### $n$th Roots

Every non-zero complex number has exactly $n$ distinct $n$th roots. To find the $n$th roots of
$z = re^{i\theta}$:

$$
\begin{aligned}
    z^{1/n} &= r^{1/n} \cdot e^{i(\theta + 2k\pi)/n}, \quad k = 0, 1, 2, \ldots, n-1
\end{aligned}
$$

### Roots of Unity

The $n$th roots of unity ($z^n = 1$) lie on the unit circle at equal angular intervals of
$\frac{2\pi}{n}$:

$$
e^{2k\pi i / n}, \quad k = 0, 1, 2, \ldots, n-1
$$

### Worked Example: Cube Roots of Unity

Find all solutions to $z^3 = 1$.

$$
z^3 = e^{2k\pi i}, \quad z = e^{2k\pi i / 3}, \quad k = 0, 1, 2
$$

- $k = 0$: $z_0 = e^0 = 1$
- $k = 1$: $z_1 = e^{2\pi i/3} = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$
- $k = 2$: $z_2 = e^{4\pi i/3} = -\frac{1}{2} - i\frac{\sqrt{3}}{2}$

Note that $z_0 + z_1 + z_2 = 0$ (the sum of all $n$th roots of unity is always $0$ for $n \gt 1$).

### Worked Example: Fourth Roots of $-16$

Find all solutions to $z^4 = -16$.

Write $-16 = 16e^{i\pi}$:

$$
z = 16^{1/4} \cdot e^{i(\pi + 2k\pi)/4} = 2 \cdot e^{i(2k+1)\pi/4}, \quad k = 0, 1, 2, 3
$$

- $k = 0$:
  $z_0 = 2e^{i\pi/4} = 2\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = \sqrt{2} + i\sqrt{2}$
- $k = 1$: $z_1 = 2e^{i3\pi/4} = -\sqrt{2} + i\sqrt{2}$
- $k = 2$: $z_2 = 2e^{i5\pi/4} = -\sqrt{2} - i\sqrt{2}$
- $k = 3$: $z_3 = 2e^{i7\pi/4} = \sqrt{2} - i\sqrt{2}$

## Solving Polynomial Equations

Complex numbers allow us to solve polynomial equations that have no real solutions.

### Complex Roots of Quadratics

For $az^2 + bz + c = 0$ with discriminant $\Delta = b^2 - 4ac \lt 0$:

$$
z = \frac{-b \pm \sqrt{-\Delta}\, i}{2a}
$$

### Conjugate Root Theorem

If a polynomial has **real coefficients**, then any non-real complex roots occur in **conjugate
pairs**. That is, if $a + bi$ is a root, then $a - bi$ is also a root.

### Worked Example: Finding a Polynomial from Roots

**Problem:** A cubic polynomial has real coefficients and roots $2$, $1 + i$, and $1 - i$. Find the
polynomial.

**Solution:**

$$
\begin{aligned}
    P(z) &= (z - 2)(z - (1+i))(z - (1-i))\\
    &= (z - 2)\left((z - 1)^2 + 1\right)\\
    &= (z - 2)(z^2 - 2z + 2)\\
    &= z^3 - 2z^2 + 2z - 2z^2 + 4z - 4\\
    &= z^3 - 4z^2 + 6z - 4
\end{aligned}
$$

## Summary of Forms

| Form      | Expression                        | Best For                  |
| --------- | --------------------------------- | ------------------------- |
| Cartesian | $z = a + bi$                      | Addition, subtraction     |
| Polar     | $z = r(\cos\theta + i\sin\theta)$ | Multiplication, division  |
| Euler     | $z = re^{i\theta}$                | Powers, roots (De Moivre) |

:::tip Converting between forms is essential. A good strategy: always convert to polar/Euler form
before raising to a power or finding roots, and convert back to Cartesian for the final answer. :::

## Modulus-Argument Form Operations

When complex numbers are expressed in modulus-argument form, operations on moduli and arguments
follow simple, elegant rules.

### Multiplication

Let $z_1 = r_1 e^{i\theta_1}$ and $z_2 = r_2 e^{i\theta_2}$. Then:

$$
z_1 z_2 = r_1 r_2 \cdot e^{i(\theta_1 + \theta_2)}
$$

**Proof:**

$$
\begin{aligned}
    z_1 z_2 &= r_1 e^{i\theta_1} \cdot r_2 e^{i\theta_2}\\
    &= r_1 r_2 \cdot e^{i\theta_1 + i\theta_2}\\
    &= r_1 r_2 \cdot e^{i(\theta_1 + \theta_2)}
\end{aligned}
$$

Therefore:

$$
|z_1 z_2| = |z_1||z_2|, \qquad \arg(z_1 z_2) = \arg(z_1) + \arg(z_2)
$$

Note that the argument sum may exceed $\pi$ or fall below $-\pi$, so normalise to the principal
argument by adding or subtracting $2\pi$ as needed.

### Division

$$
\frac{z_1}{z_2} = \frac{r_1}{r_2} \cdot e^{i(\theta_1 - \theta_2)}, \qquad z_2 \neq 0
$$

**Proof:**

$$
\begin{aligned}
    \frac{z_1}{z_2} &= \frac{r_1 e^{i\theta_1}}{r_2 e^{i\theta_2}}\\
    &= \frac{r_1}{r_2} \cdot e^{i\theta_1} \cdot e^{-i\theta_2}\\
    &= \frac{r_1}{r_2} \cdot e^{i(\theta_1 - \theta_2)}
\end{aligned}
$$

Therefore:

$$
\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|}, \qquad \arg\!\left(\frac{z_1}{z_2}\right) = \arg(z_1) - \arg(z_2)
$$

### Powers

Applying multiplication repeatedly:

$$
z^n = r^n e^{in\theta}, \qquad n \in \mathbb{Z}
$$

Therefore:

$$
|z^n| = |z|^n, \qquad \arg(z^n) = n\arg(z)
$$

### Worked Example: Product and Quotient

**Problem:** Given $z_1 = 2e^{i\pi/3}$ and $z_2 = 3e^{-i\pi/6}$, find $z_1 z_2$ and $z_1/z_2$ in
Cartesian form.

**Solution:**

$$
\begin{aligned}
    z_1 z_2 &= (2)(3) \cdot e^{i(\pi/3 - \pi/6)} = 6e^{i\pi/6}\\
    &= 6\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)\\
    &= 6\left(\frac{\sqrt{3}}{2} + i \cdot \frac{1}{2}\right) = 3\sqrt{3} + 3i
\end{aligned}
$$

$$
\begin{aligned}
    \frac{z_1}{z_2} &= \frac{2}{3} \cdot e^{i(\pi/3 - (-\pi/6))} = \frac{2}{3} e^{i\pi/2}\\
    &= \frac{2}{3}\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right) = \frac{2}{3}i
\end{aligned}
$$

### Worked Example: Argument of a Product

**Problem:** Given $z_1 = 1 - i$ and $z_2 = -\sqrt{3} - i$, find $\arg(z_1 z_2)$.

**Solution:**

Convert each to modulus-argument form:

- $z_1 = \sqrt{2}\, e^{-i\pi/4}$, so $\arg(z_1) = -\pi/4$
- $z_2 = 2e^{-i5\pi/6}$, so $\arg(z_2) = -5\pi/6$

Then:

$$
\arg(z_1 z_2) = -\frac{\pi}{4} + \left(-\frac{5\pi}{6}\right) = -\frac{3\pi + 10\pi}{12} = -\frac{13\pi}{12}
$$

Normalise to the principal value: $-\frac{13\pi}{12} + 2\pi = \frac{11\pi}{12}$.

## Complex Plane Geometry

The Argand diagram allows geometric problems to be expressed algebraically using complex numbers.

### Distance Between Two Points

The distance between points representing $z_1$ and $z_2$ is:

$$
d = |z_1 - z_2|
$$

**Proof:** If $z_1 = a + bi$ and $z_2 = c + di$, then $z_1 - z_2 = (a - c) + (b - d)i$, and:

$$
|z_1 - z_2| = \sqrt{(a-c)^2 + (b-d)^2}
$$

This is exactly the distance formula in $\mathbb{R}^2$.

### Midpoint of a Line Segment

The midpoint of the segment joining $z_1$ and $z_2$ is:

$$
m = \frac{z_1 + z_2}{2}
$$

### Perpendicular Bisector (Locus)

The perpendicular bisector of the segment joining $z_1$ and $z_2$ is the set of all points $z$
satisfying:

$$
|z - z_1| = |z - z_2|
$$

Expanding in Cartesian form: if $z_1 = a + bi$ and $z_2 = c + di$, then

$$
|z - z_1|^2 = |z - z_2|^2 \implies (x - a)^2 + (y - b)^2 = (x - c)^2 + (y - d)^2
$$

which simplifies to a linear equation in $x$ and $y$.

### Circle as a Locus

The set of all points at a fixed distance $r$ from $z_0$ is the circle with centre $z_0$ and radius
$r$:

$$
|z - z_0| = r
$$

In Cartesian form, with $z_0 = x_0 + iy_0$:

$$
(x - x_0)^2 + (y - y_0)^2 = r^2
$$

### Half-Planes and Lines

The condition $|z - z_1| \lt |z - z_2|$ describes the half-plane of points closer to $z_1$ than to
$z_2$. The boundary $|z - z_1| = |z - z_2|$ is the perpendicular bisector.

### Equation of a Line in the Complex Plane

A line through $z_1$ and $z_2$ can be parameterised as:

$$
z = z_1 + t(z_2 - z_1), \quad t \in \mathbb{R}
$$

Equivalently, a line with equation $\mathrm{Re}(\bar{a}\, z) = c$ for some complex constant
$a \neq 0$ and real constant $c$.

### Perpendicular from the Origin to a Line

The shortest distance from the origin to the line $\mathrm{Re}(\bar{a}\, z) = c$ is:

$$
d = \frac{|c|}{|a|}
$$

### Worked Example: Locus as a Circle

**Problem:** Describe and sketch the locus $|z - 3 - 4i| = 5$.

**Solution:** This is a circle with centre $z_0 = 3 + 4i$ and radius $r = 5$. The centre is at
$(3, 4)$ on the Argand diagram, and every point $z$ satisfying the equation is exactly 5 units from
this centre.

### Worked Example: Perpendicular Bisector

**Problem:** Find the Cartesian equation of the perpendicular bisector of the segment joining
$z_1 = 1 + 2i$ and $z_2 = 5 - 2i$.

**Solution:**

$$
|z - z_1| = |z - z_2| \implies |z - 1 - 2i|^2 = |z - 5 + 2i|^2
$$

Let $z = x + iy$:

$$
\begin{aligned}
    (x - 1)^2 + (y - 2)^2 &= (x - 5)^2 + (y + 2)^2\\
    x^2 - 2x + 1 + y^2 - 4y + 4 &= x^2 - 10x + 25 + y^2 + 4y + 4\\
    -2x - 4y + 5 &= -10x + 4y + 29\\
    8x - 8y &= 24\\
    x - y &= 3
\end{aligned}
$$

The perpendicular bisector is the line $x - y = 3$.

### Worked Example: Intersection of Loci

**Problem:** Find the points of intersection of $|z| = 5$ and $|z - 3| = 4$.

**Solution:** Let $z = x + iy$:

$$
\begin{aligned}
    x^2 + y^2 &= 25 \tag{1}\\
    (x - 3)^2 + y^2 &= 16 \tag{2}
\end{aligned}
$$

Subtracting $(2)$ from $(1)$:

$$
x^2 - (x - 3)^2 = 9 \implies x^2 - x^2 + 6x - 9 = 9 \implies x = 3
$$

Substituting into $(1)$: $9 + y^2 = 25 \implies y^2 = 16 \implies y = \pm 4$.

The points of intersection are $z = 3 + 4i$ and $z = 3 - 4i$.

## Proof of De Moivre's Theorem

**Theorem:** For all integers $n$,

$$
\left(re^{i\theta}\right)^n = r^n e^{in\theta}
$$

### Proof by Mathematical Induction

**Base case ($n = 1$):** Trivially, $\left(re^{i\theta}\right)^1 = r^1 e^{i \cdot 1 \cdot \theta}$.
Verified.

**Inductive hypothesis:** Assume the result holds for $n = k$, i.e.

$$
\left(re^{i\theta}\right)^k = r^k e^{ik\theta}
$$

**Inductive step ($n = k + 1$):**

$$
\begin{aligned}
    \left(re^{i\theta}\right)^{k+1} &= \left(re^{i\theta}\right)^k \cdot re^{i\theta}\\
    &= r^k e^{ik\theta} \cdot r e^{i\theta} \quad \mathrm{(by hypothesis)}\\
    &= r^{k+1} \cdot e^{i(k\theta + \theta)}\\
    &= r^{k+1} e^{i(k+1)\theta}
\end{aligned}
$$

So the result holds for $n = k + 1$. By induction, the theorem is true for all $n \in \mathbb{N}$.

**Negative integers:** For $n = -m$ where $m \in \mathbb{N}$:

$$
\left(re^{i\theta}\right)^{-m} = \frac{1}{\left(re^{i\theta}\right)^m} = \frac{1}{r^m e^{im\theta}} = r^{-m} e^{-im\theta} = r^n e^{in\theta}
$$

### Connection to the Binomial Theorem

Expanding $(\cos\theta + i\sin\theta)^n$ using the binomial theorem and equating with De Moivre's
result gives trigonometric identities. For $n = 3$:

$$
\begin{aligned}
    \cos 3\theta + i\sin 3\theta &= (\cos\theta + i\sin\theta)^3\\
    &= \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta
\end{aligned}
$$

Equating real parts:

$$
\cos 3\theta = \cos^3\theta - 3\cos\theta\sin^2\theta = 4\cos^3\theta - 3\cos\theta
$$

Equating imaginary parts:

$$
\sin 3\theta = 3\cos^2\theta\sin\theta - \sin^3\theta = 3\sin\theta - 4\sin^3\theta
$$

## Additional Worked Examples

### Worked Example: Solving Higher-Degree Equations

**Problem:** Solve $z^5 + z^3 + z = 0$.

**Solution:** Factor:

$$
z(z^4 + z^2 + 1) = 0
$$

So $z = 0$ is one root. For $z^4 + z^2 + 1 = 0$, substitute $w = z^2$:

$$
w^2 + w + 1 = 0 \implies w = \frac{-1 \pm \sqrt{1 - 4}}{2} = \frac{-1 \pm i\sqrt{3}}{2}
$$

So $z^2 = e^{\pm 2\pi i/3}$. Taking square roots:

$$
\begin{aligned}
    z^2 &= e^{2\pi i/3} \implies z = \pm\, e^{\pi i/3} = \pm\left(\frac{1}{2} + i\frac{\sqrt{3}}{2}\right)\\
    z^2 &= e^{-2\pi i/3} \implies z = \pm\, e^{-\pi i/3} = \pm\left(\frac{1}{2} - i\frac{\sqrt{3}}{2}\right)
\end{aligned}
$$

The five roots are $0,\; \pm\frac{1}{2} \pm i\frac{\sqrt{3}}{2}$.

### Worked Example: Geometric Problem on the Argand Diagram

**Problem:** The points $A$, $B$, $C$ on the Argand diagram represent $z_A = 1 + i$, $z_B = 5 + 3i$,
and $z_C = 3 + 7i$. Show that triangle $ABC$ is isosceles and find its area.

**Solution:**

$$
\begin{aligned}
    AB &= |z_B - z_A| = |4 + 2i| = \sqrt{16 + 4} = 2\sqrt{5}\\
    BC &= |z_C - z_B| = |-2 + 4i| = \sqrt{4 + 16} = 2\sqrt{5}\\
    CA &= |z_A - z_C| = |-2 - 6i| = \sqrt{4 + 36} = 2\sqrt{10}
\end{aligned}
$$

Since $AB = BC = 2\sqrt{5}$, the triangle is isosceles with $AB = BC$.

Using the formula for the area of a triangle with vertices at complex numbers:

$$
\begin{aligned}
    \mathrm{Area} &= \frac{1}{2}\left|\mathrm{Im}\!\left(\bar{z}_{AB} \cdot z_{AC}\right)\right|\\
    &= \frac{1}{2}\left|\mathrm{Im}\!\left((4 - 2i)(2 + 6i)\right)\right|\\
    &= \frac{1}{2}\left|\mathrm{Im}(8 + 24i - 4i + 12)\right|\\
    &= \frac{1}{2}\left|\mathrm{Im}(20 + 20i)\right|\\
    &= \frac{1}{2} \cdot 20 = 10
\end{aligned}
$$

### Worked Example: Trigonometric Expansion via De Moivre

**Problem:** Express $\cos^5\theta$ in terms of $\cos(n\theta)$ for $n = 1, 3, 5$.

**Solution:** Using the binomial expansion of
$\cos^5\theta = \left(\frac{e^{i\theta} + e^{-i\theta}}{2}\right)^5$:

$$
\begin{aligned}
    2^5 \cos^5\theta &= (e^{i\theta} + e^{-i\theta})^5\\
    &= e^{5i\theta} + 5e^{3i\theta} + 10e^{i\theta} + 10e^{-i\theta} + 5e^{-3i\theta} + e^{-5i\theta}\\
    &= 2\cos 5\theta + 10\cos 3\theta + 20\cos\theta
\end{aligned}
$$

Therefore:

$$
\cos^5\theta = \frac{1}{16}\cos 5\theta + \frac{5}{16}\cos 3\theta + \frac{5}{8}\cos\theta
$$

### Worked Example: Converting Between All Three Forms

**Problem:** Express $z = -1 + i\sqrt{3}$ in all three standard forms and verify the conversions.

**Solution:**

**Cartesian:** $z = -1 + i\sqrt{3}$.

**Polar:**

$$
r = |z| = \sqrt{(-1)^2 + (\sqrt{3})^2} = 2
$$

The point $(-1, \sqrt{3})$ lies in the second quadrant, so:

$$
\theta = \pi - \arctan\frac{\sqrt{3}}{1} = \pi - \frac{\pi}{3} = \frac{2\pi}{3}
$$

Therefore $z = 2\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right)$.

**Euler:** $z = 2e^{2\pi i/3}$.

**Verification:**
$2e^{2\pi i/3} = 2\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -1 + i\sqrt{3}$. Confirmed.

## Common Pitfalls

### Wrong Quadrant for the Argument

The function $\arctan(b/a)$ always returns a value in $(-\pi/2, \pi/2)$. If the complex number lies
in the second or third quadrant, you must adjust:

$$
\begin{aligned}
    \mathrm{Quadrant II:}\quad &\theta = \pi - \arctan\!\left|\frac{b}{a}\right|\\
    \mathrm{Quadrant III:}\quad &\theta = -\pi + \arctan\frac{b}{a}
\end{aligned}
$$

Always sketch the Argand diagram before computing the argument.

### Forgetting to Add $2k\pi$ When Finding Roots

When solving $z^n = w$, you must write $w = re^{i(\theta + 2k\pi)}$ with the $2k\pi$ term before
dividing the argument by $n$. Omitting this term yields only one root instead of all $n$ distinct
roots.

### Confusing $|z|$ with $z$

$|z|$ is a real, non-negative scalar (the modulus), whereas $z$ is a complex number. They behave
differently under operations. For example:

$$
|z_1 + z_2| \neq |z_1| + |z_2| \quad \mathrm{in general}
$$

The triangle inequality gives $|z_1 + z_2| \leq |z_1| + |z_2|$, with equality only when $z_1$ and
$z_2$ have the same argument.

### Calculator Mode Errors

Ensure your calculator is in **radian mode** when working with arguments and complex exponentials.
Using degree mode by mistake is a very common source of error, since $\pi/3$ radians is $60^\circ$
but entering $60$ in radian mode gives a completely different value.

### Argument Normalisation

After multiplying or dividing complex numbers, the resulting argument may lie outside $(-\pi, \pi]$.
Always check whether you need to add or subtract $2\pi$ to express the answer in principal argument
form.

## Problem Set

<details>
<summary>Problem 1: Modulus-Argument Operations</summary>

Given $z_1 = 4e^{i\pi/4}$ and $z_2 = 2e^{-i\pi/3}$, find $|z_1 z_2|$ and $\arg(z_1/z_2)$ in exact
form.

**Solution:**

$$
|z_1 z_2| = |z_1| \cdot |z_2| = 4 \cdot 2 = 8
$$

$$
\arg\!\left(\frac{z_1}{z_2}\right) = \arg(z_1) - \arg(z_2) = \frac{\pi}{4} - \left(-\frac{\pi}{3}\right) = \frac{7\pi}{12}
$$

</details>

<details>
<summary>Problem 2: Locus Description</summary>

Describe the locus defined by $|z - 1 - i| = |z + 1 + i|$ and give its Cartesian equation.

**Solution:** This represents the perpendicular bisector of the segment joining $z_1 = 1 + i$ and
$z_2 = -1 - i$.

Let $z = x + iy$:

$$
\begin{aligned}
    (x - 1)^2 + (y - 1)^2 &= (x + 1)^2 + (y + 1)^2\\
    x^2 - 2x + 1 + y^2 - 2y + 1 &= x^2 + 2x + 1 + y^2 + 2y + 1\\
    -4x - 4y &= 0\\
    y &= -x
\end{aligned}
$$

The locus is the line $y = -x$.

</details>

<details>
<summary>Problem 3: Roots of a Complex Number</summary>

Find all cube roots of $z = 8i$ and express them in Cartesian form.

**Solution:** Write $8i = 8e^{i\pi/2}$. The cube roots are:

$$
z_k = 8^{1/3} \cdot e^{i(\pi/2 + 2k\pi)/3} = 2 \cdot e^{i(\pi + 4k\pi)/6}, \quad k = 0, 1, 2
$$

- $k = 0$: $z_0 = 2e^{i\pi/6} = 2\left(\frac{\sqrt{3}}{2} + i\frac{1}{2}\right) = \sqrt{3} + i$
- $k = 1$: $z_1 = 2e^{i5\pi/6} = 2\left(-\frac{\sqrt{3}}{2} + i\frac{1}{2}\right) = -\sqrt{3} + i$
- $k = 2$: $z_2 = 2e^{i3\pi/2} = 2(0 - i) = -2i$

</details>

<details>
<summary>Problem 4: De Moivre Application</summary>

Use De Moivre's theorem to find $\cos 4\theta$ in terms of powers of $\cos\theta$.

**Solution:**

$$
\begin{aligned}
    \cos 4\theta + i\sin 4\theta &= (\cos\theta + i\sin\theta)^4\\
    &= \cos^4\theta + 4i\cos^3\theta\sin\theta - 6\cos^2\theta\sin^2\theta - 4i\cos\theta\sin^3\theta + \sin^4\theta
\end{aligned}
$$

Equating real parts and using $\sin^2\theta = 1 - \cos^2\theta$:

$$
\begin{aligned}
    \cos 4\theta &= \cos^4\theta - 6\cos^2\theta(1 - \cos^2\theta) + (1 - \cos^2\theta)^2\\
    &= \cos^4\theta - 6\cos^2\theta + 6\cos^4\theta + 1 - 2\cos^2\theta + \cos^4\theta\\
    &= 8\cos^4\theta - 8\cos^2\theta + 1
\end{aligned}
$$

</details>

<details>
<summary>Problem 5: Geometric Locus Intersection</summary>

Find all complex numbers $z$ satisfying both $|z - 2| = 2$ and $\arg(z) = \pi/4$.

**Solution:** The condition $\arg(z) = \pi/4$ means $z$ lies on the ray from the origin at
$45^\circ$, so $z = t(1 + i)$ for $t \gt{} 0$.

Substituting into $|z - 2| = 2$:

$$
\begin{aligned}
    |t(1 + i) - 2| &= 2\\
    |(t - 2) + ti| &= 2\\
    (t - 2)^2 + t^2 &= 4\\
    t^2 - 4t + 4 + t^2 &= 4\\
    2t^2 - 4t &= 0\\
    2t(t - 2) &= 0
\end{aligned}
$$

Since $t \gt{} 0$, we get $t = 2$. Therefore $z = 2(1 + i) = 2 + 2i$.

</details>

<details>
<summary>Problem 6: Polynomial with Complex Roots</summary>

The quartic $P(z) = z^4 - 4z^3 + 14z^2 - 20z + 25$ has a root at $z = 1 + 2i$. Find all roots.

**Solution:** By the conjugate root theorem, $z = 1 - 2i$ is also a root. The quadratic factor is:

$$
(z - (1 + 2i))(z - (1 - 2i)) = (z - 1)^2 + 4 = z^2 - 2z + 5
$$

Divide $P(z)$ by $z^2 - 2z + 5$:

$$
P(z) = (z^2 - 2z + 5)(z^2 - 2z + 5) = (z^2 - 2z + 5)^2
$$

Solving $z^2 - 2z + 5 = 0$:

$$
z = \frac{2 \pm \sqrt{4 - 20}}{2} = \frac{2 \pm 4i}{2} = 1 \pm 2i
$$

The roots are $1 + 2i$ and $1 - 2i$, each with multiplicity 2.

</details>

<details>
<summary>Problem 7: Proof Using Modulus Properties</summary>

Prove that $|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2|z_1|^2 + 2|z_2|^2$ for all $z_1, z_2 \in \mathbb{C}$.

**Solution:** Let $z_1 = a + bi$ and $z_2 = c + di$.

$$
\begin{aligned}
    |z_1 + z_2|^2 &= (a + c)^2 + (b + d)^2 = a^2 + 2ac + c^2 + b^2 + 2bd + d^2\\
    |z_1 - z_2|^2 &= (a - c)^2 + (b - d)^2 = a^2 - 2ac + c^2 + b^2 - 2bd + d^2
\end{aligned}
$$

Adding:

$$
|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2a^2 + 2c^2 + 2b^2 + 2d^2 = 2(a^2 + b^2) + 2(c^2 + d^2) = 2|z_1|^2 + 2|z_2|^2
$$

This is the **parallelogram law**: the sum of the squares of the diagonals of a parallelogram equals
the sum of the squares of all four sides.

</details>

<details>
<summary>Problem 8: Fifth Roots of Unity</summary>

Find all fifth roots of unity and verify that their sum is zero.

**Solution:** The fifth roots of unity are:

$$
z_k = e^{2k\pi i/5}, \quad k = 0, 1, 2, 3, 4
$$

In Cartesian form:

$$
\begin{aligned}
    z_0 &= 1\\
    z_1 &= \cos\frac{2\pi}{5} + i\sin\frac{2\pi}{5}\\
    z_2 &= \cos\frac{4\pi}{5} + i\sin\frac{4\pi}{5}\\
    z_3 &= \cos\frac{6\pi}{5} + i\sin\frac{6\pi}{5}\\
    z_4 &= \cos\frac{8\pi}{5} + i\sin\frac{8\pi}{5}
\end{aligned}
$$

These are the roots of $z^5 - 1 = 0$. By Vieta's formulas, the sum of the roots equals the negative
coefficient of $z^4$, which is $0$.

Alternatively, using the geometric series:

$$
\sum_{k=0}^{4} z_k = \sum_{k=0}^{4} \left(e^{2\pi i/5}\right)^k = \frac{1 - \left(e^{2\pi i/5}\right)^5}{1 - e^{2\pi i/5}} = \frac{1 - 1}{1 - e^{2\pi i/5}} = 0
$$

</details>

<details>
<summary>Problem 9: Area of a Triangle on the Argand Diagram</summary>

The vertices of a triangle on the Argand diagram are $z_1 = 0$, $z_2 = 4 + 2i$, and $z_3 = 1 + 5i$.
Find the area of the triangle.

**Solution:** Using the determinant formula for the area of a triangle with vertices at complex
numbers:

$$
\begin{aligned}
    \mathrm{Area} &= \frac{1}{2}\left|\mathrm{Im}\!\left(\bar{z}_2 \cdot z_3\right)\right|\\
    &= \frac{1}{2}\left|\mathrm{Im}\!\left((4 - 2i)(1 + 5i)\right)\right|\\
    &= \frac{1}{2}\left|\mathrm{Im}(4 + 20i - 2i + 10)\right|\\
    &= \frac{1}{2}\left|\mathrm{Im}(14 + 18i)\right|\\
    &= \frac{1}{2} \cdot 18 = 9
\end{aligned}
$$

</details>

<details>
<summary>Problem 10: Argument Equations</summary>

Solve the equation $\arg(z - 1) = \arg(z + i)$ for $z \in \mathbb{C}$, where $z \neq 1$ and
$z \neq -i$.

**Solution:** The condition $\arg(z - 1) = \arg(z + i)$ means the vectors from $1$ and from $-i$ to
$z$ have the same direction. This occurs when $z$ lies on the line through $1$ and $-i$, excluding
those two points.

Algebraically, set $\mathrm{Im}\!\left(\frac{z + i}{z - 1}\right) = 0$. Let $z = x + iy$:

$$
\frac{z + i}{z - 1} = \frac{x + i(y + 1)}{(x - 1) + iy}
$$

Multiplying numerator and denominator by the conjugate of the denominator:

$$
\frac{(x + i(y+1))((x-1) - iy)}{(x-1)^2 + y^2}
$$

The imaginary part of the numerator:

$$
x(-y) + (y + 1)(x - 1) = -xy + xy + x - y - 1 = x - y - 1
$$

Setting this to zero: $x - y - 1 = 0$, i.e. $y = x - 1$.

The solution set is $\{z = x + i(x - 1) : x \in \mathbb{R},\; z \neq 1,\; z \neq -i\}$.

</details>
