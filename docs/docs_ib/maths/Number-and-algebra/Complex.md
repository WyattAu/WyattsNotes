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
\begin&lbrace;aligned&rbrace;
    z = a + bi, \quad a,b \in \mathbb&lbrace;R&rbrace;
\end&lbrace;aligned&rbrace;
$$

## Polar Form

Complex numbers ($z$) in polar form are defined with argument ($\theta$) away from $0$ in a unit
circle, scaled by the magnitude ($r$):

$$
\begin&lbrace;aligned&rbrace;
    z = r(\cos \theta + i \sin \theta)
\end&lbrace;aligned&rbrace;
$$

## Euler's Form

Complex numbers ($z$) in Euler's form are defined by extending polar form, using Euler's number:

$$
\begin&lbrace;aligned&rbrace;
   z = re^&lbrace;i\theta&rbrace;
\end&lbrace;aligned&rbrace;
$$

## Conversions

### Cartesian to Polar Form

As complex numbers is form by two coordinates (real and imaginary), the magnitude can by obtained by
the Pythagorean identity:

$$
\begin&lbrace;aligned&rbrace;
    r = |z| = \sqrt&lbrace;a^2+b^2&rbrace;
\end&lbrace;aligned&rbrace;
$$

Similarly, the argument ($\theta$) can be determined by the two coordinates by the definition of
$\tan(\theta) = \frac{b}{a}$:

$$
\begin&lbrace;aligned&rbrace;
    \theta = \arg(z) = \arctan \frac&lbrace;b&rbrace;&lbrace;a&rbrace;
\end&lbrace;aligned&rbrace;
$$

Since $\tan \theta$ is undefined at $a = 0$, case piecewise definition can define $\theta$ at
$a = 0$:

$$
\begin&lbrace;aligned&rbrace;
    \theta = \arg(z) =
    \begin&lbrace;cases&rbrace;
        \arctan \frac&lbrace;b&rbrace;&lbrace;a&rbrace; & a \neq 0\\
        \frac&lbrace;\pi&rbrace;&lbrace;2&rbrace; & a = 0, b \gt&lbrace;&rbrace; 0\\
        -\frac&lbrace;\pi&rbrace;&lbrace;2&rbrace; & a = 0, b \lt&lbrace;&rbrace; 0\\
    \end&lbrace;cases&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Polar to Cartesian

Since polar coordinates is already defined by the argument, conversion to cartesian is simply
evaluating the definition of cartesian coordinate ($\mathrm{cis }\theta$):

$$
\begin&lbrace;aligned&rbrace;
    z = r(\cos \theta + i \sin \theta)
\end&lbrace;aligned&rbrace;
$$

### Euler to Polar

The equivalence of Euler and polar form can be shown by their Taylor series expansion:

$$
\begin&lbrace;aligned&rbrace;
    re^&lbrace;i\theta&rbrace; = r\left(1 + i\theta + \frac&lbrace;(i\theta)^2&rbrace;&lbrace;2!&rbrace; + \frac&lbrace;(i\theta)^3&rbrace;&lbrace;3!&rbrace; + \cdots \right)
$$

Separating real and imaginary parts:

$$
\begin&lbrace;aligned&rbrace;
    re^&lbrace;i\theta&rbrace; &= r\left(1 - \frac&lbrace;\theta^2&rbrace;&lbrace;2!&rbrace; + \frac&lbrace;\theta^4&rbrace;&lbrace;4!&rbrace; - \cdots \right) + ir\left(\theta - \frac&lbrace;\theta^3&rbrace;&lbrace;3!&rbrace; + \frac&lbrace;\theta^5&rbrace;&lbrace;5!&rbrace; - \cdots \right)\\
    &= r\cos\theta + ir\sin\theta
\end&lbrace;aligned&rbrace;
$$

This gives **Euler's formula**:

$$
e^&lbrace;i\theta&rbrace; = \cos\theta + i\sin\theta
$$

A special case at $\theta = \pi$:

$$
e^&lbrace;i\pi&rbrace; + 1 = 0
$$

This identity links five fundamental constants: $e$, $i$, $\pi$, $1$, and $0$.

## Operations on Complex Numbers

### Addition and Subtraction

Add/subtract the real and imaginary parts separately:

$$
\begin&lbrace;aligned&rbrace;
    (a + bi) + (c + di) &= (a + c) + (b + d)i\\
    (a + bi) - (c + di) &= (a - c) + (b - d)i
\end&lbrace;aligned&rbrace;
$$

### Multiplication

Use the distributive property and $i^2 = -1$:

$$
\begin&lbrace;aligned&rbrace;
    (a + bi)(c + di) &= ac + adi + bci + bdi^2\\
    &= (ac - bd) + (ad + bc)i
\end&lbrace;aligned&rbrace;
$$

In polar form, multiplication is simpler — multiply the magnitudes and add the arguments:

$$
\begin&lbrace;aligned&rbrace;
    r_1 e^&lbrace;i\theta_1&rbrace; \cdot r_2 e^&lbrace;i\theta_2&rbrace; &= r_1 r_2 \cdot e^&lbrace;i(\theta_1 + \theta_2)&rbrace;
\end&lbrace;aligned&rbrace;
$$

### Division

Multiply numerator and denominator by the conjugate of the denominator:

$$
\begin&lbrace;aligned&rbrace;
    \frac&lbrace;a + bi&rbrace;&lbrace;c + di&rbrace; &= \frac&lbrace;a + bi&rbrace;&lbrace;c + di&rbrace; \cdot \frac&lbrace;c - di&rbrace;&lbrace;c - di&rbrace;\\
    &= \frac&lbrace;(ac + bd) + (bc - ad)i&rbrace;&lbrace;c^2 + d^2&rbrace;
\end&lbrace;aligned&rbrace;
$$

In polar form, divide the magnitudes and subtract the arguments:

$$
\frac&lbrace;r_1 e^&lbrace;i\theta_1&rbrace;&rbrace;&lbrace;r_2 e^&lbrace;i\theta_2&rbrace;&rbrace; = \frac&lbrace;r_1&rbrace;&lbrace;r_2&rbrace; \cdot e^&lbrace;i(\theta_1 - \theta_2)&rbrace;
$$

### Complex Conjugate

The complex conjugate of $z = a + bi$ is $\bar{z} = a - bi$.

Key properties:

$$
\begin&lbrace;aligned&rbrace;
    z \cdot \bar&lbrace;z&rbrace; &= a^2 + b^2 = |z|^2\\
    z + \bar&lbrace;z&rbrace; &= 2a \quad (\mathrm&lbrace;real&rbrace;)\\
    z - \bar&lbrace;z&rbrace; &= 2bi \quad (\mathrm&lbrace;imaginary&rbrace;)
\end&lbrace;aligned&rbrace;
$$

## The Argand Diagram

An Argand diagram represents complex numbers in a 2D plane:

- The **horizontal axis** represents the real part ($\mathrm{Re}(z)$)
- The **vertical axis** represents the imaginary part ($\mathrm{Im}(z)$)

A complex number $z = a + bi$ is plotted at the point $(a, b)$.

### Modulus

The modulus (magnitude) is the distance from the origin to the point:

$$
|z| = \sqrt&lbrace;a^2 + b^2&rbrace;
$$

### Argument

The argument is the angle measured anticlockwise from the positive real axis:

$$
\arg(z) = \arctan\left(\frac&lbrace;b&rbrace;&lbrace;a&rbrace;\right)
$$

**Principal argument:** $\arg(z) \in (-\pi, \pi]$

:::tip When finding $\arg(z)$, always draw a quick Argand diagram to check which quadrant the point
is in. A common mistake is to use the calculator value directly without adjusting for the correct
quadrant.
:::

### Geometric Interpretation of Operations

- **Addition:** vector addition (parallelogram rule)
- **Conjugation ($\bar{z}$):** reflection in the real axis
- **Negation ($-z$):** reflection in the origin
- **Multiplication by $i$:** rotation $90^\circ$ anticlockwise

<DesmosGraph title="Complex Plane (Argand Diagram)" expressions=&lbrace;["\left(a,b\right)"]&rbrace; width=&lbrace;800&rbrace; height=&lbrace;500&rbrace; />

Drag points to see how addition, conjugation, and multiplication affect the position on the Argand
diagram.

## De Moivre's Theorem

De Moivre's theorem states that for any integer $n$:

$$
\begin&lbrace;aligned&rbrace;
    \left(r(\cos\theta + i\sin\theta)\right)^n = r^n\left(\cos(n\theta) + i\sin(n\theta)\right)
\end&lbrace;aligned&rbrace;
$$

Or in Euler's form:

$$
\left(re^&lbrace;i\theta&rbrace;\right)^n = r^n e^&lbrace;in\theta&rbrace;
$$

### Applications of De Moivre's Theorem

**Raising to a power:**

$$
(1 + i)^6 = \left(\sqrt&lbrace;2&rbrace;\, e^&lbrace;i\pi/4&rbrace;\right)^6 = (\sqrt&lbrace;2&rbrace;)^6 \cdot e^&lbrace;i \cdot 6\pi/4&rbrace; = 8 \cdot e^&lbrace;i \cdot 3\pi/2&rbrace; = 8\left(\cos\frac&lbrace;3\pi&rbrace;&lbrace;2&rbrace; + i\sin\frac&lbrace;3\pi&rbrace;&lbrace;2&rbrace;\right) = -8i
$$

**Trigonometric identities:** Expanding $(\cos\theta + i\sin\theta)^n$ using the binomial theorem
and equating real and imaginary parts gives expressions for $\cos(n\theta)$ and $\sin(n\theta)$.

## Roots of Complex Numbers

### $n$th Roots

Every non-zero complex number has exactly $n$ distinct $n$th roots. To find the $n$th roots of
$z = re^{i\theta}$:

$$
\begin&lbrace;aligned&rbrace;
    z^&lbrace;1/n&rbrace; &= r^&lbrace;1/n&rbrace; \cdot e^&lbrace;i(\theta + 2k\pi)/n&rbrace;, \quad k = 0, 1, 2, \ldots, n-1
\end&lbrace;aligned&rbrace;
$$

### Roots of Unity

The $n$th roots of unity ($z^n = 1$) lie on the unit circle at equal angular intervals of
$\frac{2\pi}{n}$:

$$
e^&lbrace;2k\pi i / n&rbrace;, \quad k = 0, 1, 2, \ldots, n-1
$$

### Worked Example: Cube Roots of Unity

Find all solutions to $z^3 = 1$.

$$
z^3 = e^&lbrace;2k\pi i&rbrace;, \quad z = e^&lbrace;2k\pi i / 3&rbrace;, \quad k = 0, 1, 2
$$

- $k = 0$: $z_0 = e^0 = 1$
- $k = 1$: $z_1 = e^{2\pi i/3} = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$
- $k = 2$: $z_2 = e^{4\pi i/3} = -\frac{1}{2} - i\frac{\sqrt{3}}{2}$

Note that $z_0 + z_1 + z_2 = 0$ (the sum of all $n$th roots of unity is always $0$ for $n \gt 1$).

### Worked Example: Fourth Roots of $-16$

Find all solutions to $z^4 = -16$.

Write $-16 = 16e^{i\pi}$:

$$
z = 16^&lbrace;1/4&rbrace; \cdot e^&lbrace;i(\pi + 2k\pi)/4&rbrace; = 2 \cdot e^&lbrace;i(2k+1)\pi/4&rbrace;, \quad k = 0, 1, 2, 3
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
z = \frac&lbrace;-b \pm \sqrt&lbrace;-\Delta&rbrace;\, i&rbrace;&lbrace;2a&rbrace;
$$

### Conjugate Root Theorem

If a polynomial has **real coefficients**, then any non-real complex roots occur in **conjugate
pairs**. That is, if $a + bi$ is a root, then $a - bi$ is also a root.

### Worked Example: Finding a Polynomial from Roots

**Problem:** A cubic polynomial has real coefficients and roots $2$, $1 + i$, and $1 - i$. Find the
polynomial.

**Solution:**

$$
\begin&lbrace;aligned&rbrace;
    P(z) &= (z - 2)(z - (1+i))(z - (1-i))\\
    &= (z - 2)\left((z - 1)^2 + 1\right)\\
    &= (z - 2)(z^2 - 2z + 2)\\
    &= z^3 - 2z^2 + 2z - 2z^2 + 4z - 4\\
    &= z^3 - 4z^2 + 6z - 4
\end&lbrace;aligned&rbrace;
$$

## Summary of Forms

| Form      | Expression                        | Best For                  |
| --------- | --------------------------------- | ------------------------- |
| Cartesian | $z = a + bi$                      | Addition, subtraction     |
| Polar     | $z = r(\cos\theta + i\sin\theta)$ | Multiplication, division  |
| Euler     | $z = re^{i\theta}$                | Powers, roots (De Moivre) |

:::tip Converting between forms is essential. A good strategy: always convert to polar/Euler form
before raising to a power or finding roots, and convert back to Cartesian for the final answer.
:::

## Modulus-Argument Form Operations

When complex numbers are expressed in modulus-argument form, operations on moduli and arguments
follow simple, elegant rules.

### Multiplication

Let $z_1 = r_1 e^{i\theta_1}$ and $z_2 = r_2 e^{i\theta_2}$. Then:

$$
z_1 z_2 = r_1 r_2 \cdot e^&lbrace;i(\theta_1 + \theta_2)&rbrace;
$$

**Proof:**

$$
\begin&lbrace;aligned&rbrace;
    z_1 z_2 &= r_1 e^&lbrace;i\theta_1&rbrace; \cdot r_2 e^&lbrace;i\theta_2&rbrace;\\
    &= r_1 r_2 \cdot e^&lbrace;i\theta_1 + i\theta_2&rbrace;\\
    &= r_1 r_2 \cdot e^&lbrace;i(\theta_1 + \theta_2)&rbrace;
\end&lbrace;aligned&rbrace;
$$

Therefore:

$$
|z_1 z_2| = |z_1||z_2|, \qquad \arg(z_1 z_2) = \arg(z_1) + \arg(z_2)
$$

Note that the argument sum may exceed $\pi$ or fall below $-\pi$, so normalise to the principal
argument by adding or subtracting $2\pi$ as needed.

### Division

$$
\frac&lbrace;z_1&rbrace;&lbrace;z_2&rbrace; = \frac&lbrace;r_1&rbrace;&lbrace;r_2&rbrace; \cdot e^&lbrace;i(\theta_1 - \theta_2)&rbrace;, \qquad z_2 \neq 0
$$

**Proof:**

$$
\begin&lbrace;aligned&rbrace;
    \frac&lbrace;z_1&rbrace;&lbrace;z_2&rbrace; &= \frac&lbrace;r_1 e^&lbrace;i\theta_1&rbrace;&rbrace;&lbrace;r_2 e^&lbrace;i\theta_2&rbrace;&rbrace;\\
    &= \frac&lbrace;r_1&rbrace;&lbrace;r_2&rbrace; \cdot e^&lbrace;i\theta_1&rbrace; \cdot e^&lbrace;-i\theta_2&rbrace;\\
    &= \frac&lbrace;r_1&rbrace;&lbrace;r_2&rbrace; \cdot e^&lbrace;i(\theta_1 - \theta_2)&rbrace;
\end&lbrace;aligned&rbrace;
$$

Therefore:

$$
\left|\frac&lbrace;z_1&rbrace;&lbrace;z_2&rbrace;\right| = \frac&lbrace;|z_1|&rbrace;&lbrace;|z_2|&rbrace;, \qquad \arg\!\left(\frac&lbrace;z_1&rbrace;&lbrace;z_2&rbrace;\right) = \arg(z_1) - \arg(z_2)
$$

### Powers

Applying multiplication repeatedly:

$$
z^n = r^n e^&lbrace;in\theta&rbrace;, \qquad n \in \mathbb&lbrace;Z&rbrace;
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
\begin&lbrace;aligned&rbrace;
    z_1 z_2 &= (2)(3) \cdot e^&lbrace;i(\pi/3 - \pi/6)&rbrace; = 6e^&lbrace;i\pi/6&rbrace;\\
    &= 6\left(\cos\frac&lbrace;\pi&rbrace;&lbrace;6&rbrace; + i\sin\frac&lbrace;\pi&rbrace;&lbrace;6&rbrace;\right)\\
    &= 6\left(\frac&lbrace;\sqrt&lbrace;3&rbrace;&rbrace;&lbrace;2&rbrace; + i \cdot \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\right) = 3\sqrt&lbrace;3&rbrace; + 3i
\end&lbrace;aligned&rbrace;
$$

$$
\begin&lbrace;aligned&rbrace;
    \frac&lbrace;z_1&rbrace;&lbrace;z_2&rbrace; &= \frac&lbrace;2&rbrace;&lbrace;3&rbrace; \cdot e^&lbrace;i(\pi/3 - (-\pi/6))&rbrace; = \frac&lbrace;2&rbrace;&lbrace;3&rbrace; e^&lbrace;i\pi/2&rbrace;\\
    &= \frac&lbrace;2&rbrace;&lbrace;3&rbrace;\left(\cos\frac&lbrace;\pi&rbrace;&lbrace;2&rbrace; + i\sin\frac&lbrace;\pi&rbrace;&lbrace;2&rbrace;\right) = \frac&lbrace;2&rbrace;&lbrace;3&rbrace;i
\end&lbrace;aligned&rbrace;
$$

### Worked Example: Argument of a Product

**Problem:** Given $z_1 = 1 - i$ and $z_2 = -\sqrt{3} - i$, find $\arg(z_1 z_2)$.

**Solution:**

Convert each to modulus-argument form:

- $z_1 = \sqrt{2}\, e^{-i\pi/4}$, so $\arg(z_1) = -\pi/4$
- $z_2 = 2e^{-i5\pi/6}$, so $\arg(z_2) = -5\pi/6$

Then:

$$
\arg(z_1 z_2) = -\frac&lbrace;\pi&rbrace;&lbrace;4&rbrace; + \left(-\frac&lbrace;5\pi&rbrace;&lbrace;6&rbrace;\right) = -\frac&lbrace;3\pi + 10\pi&rbrace;&lbrace;12&rbrace; = -\frac&lbrace;13\pi&rbrace;&lbrace;12&rbrace;
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
|z_1 - z_2| = \sqrt&lbrace;(a-c)^2 + (b-d)^2&rbrace;
$$

This is exactly the distance formula in $\mathbb{R}^2$.

### Midpoint of a Line Segment

The midpoint of the segment joining $z_1$ and $z_2$ is:

$$
m = \frac&lbrace;z_1 + z_2&rbrace;&lbrace;2&rbrace;
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
z = z_1 + t(z_2 - z_1), \quad t \in \mathbb&lbrace;R&rbrace;
$$

Equivalently, a line with equation $\mathrm{Re}(\bar{a}\, z) = c$ for some complex constant
$a \neq 0$ and real constant $c$.

### Perpendicular from the Origin to a Line

The shortest distance from the origin to the line $\mathrm{Re}(\bar{a}\, z) = c$ is:

$$
d = \frac&lbrace;|c|&rbrace;&lbrace;|a|&rbrace;
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
\begin&lbrace;aligned&rbrace;
    (x - 1)^2 + (y - 2)^2 &= (x - 5)^2 + (y + 2)^2\\
    x^2 - 2x + 1 + y^2 - 4y + 4 &= x^2 - 10x + 25 + y^2 + 4y + 4\\
    -2x - 4y + 5 &= -10x + 4y + 29\\
    8x - 8y &= 24\\
    x - y &= 3
\end&lbrace;aligned&rbrace;
$$

The perpendicular bisector is the line $x - y = 3$.

### Worked Example: Intersection of Loci

**Problem:** Find the points of intersection of $|z| = 5$ and $|z - 3| = 4$.

**Solution:** Let $z = x + iy$:

$$
\begin&lbrace;aligned&rbrace;
    x^2 + y^2 &= 25 \tag&lbrace;1&rbrace;\\
    (x - 3)^2 + y^2 &= 16 \tag&lbrace;2&rbrace;
\end&lbrace;aligned&rbrace;
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
\left(re^&lbrace;i\theta&rbrace;\right)^n = r^n e^&lbrace;in\theta&rbrace;
$$

### Proof by Mathematical Induction

**Base case ($n = 1$):** Trivially, $\left(re^{i\theta}\right)^1 = r^1 e^{i \cdot 1 \cdot \theta}$.
Verified.

**Inductive hypothesis:** Assume the result holds for $n = k$, i.e.

$$
\left(re^&lbrace;i\theta&rbrace;\right)^k = r^k e^&lbrace;ik\theta&rbrace;
$$

**Inductive step ($n = k + 1$):**

$$
\begin&lbrace;aligned&rbrace;
    \left(re^&lbrace;i\theta&rbrace;\right)^&lbrace;k+1&rbrace; &= \left(re^&lbrace;i\theta&rbrace;\right)^k \cdot re^&lbrace;i\theta&rbrace;\\
    &= r^k e^&lbrace;ik\theta&rbrace; \cdot r e^&lbrace;i\theta&rbrace; \quad \mathrm&lbrace;(by hypothesis)&rbrace;\\
    &= r^&lbrace;k+1&rbrace; \cdot e^&lbrace;i(k\theta + \theta)&rbrace;\\
    &= r^&lbrace;k+1&rbrace; e^&lbrace;i(k+1)\theta&rbrace;
\end&lbrace;aligned&rbrace;
$$

So the result holds for $n = k + 1$. By induction, the theorem is true for all $n \in \mathbb{N}$.

**Negative integers:** For $n = -m$ where $m \in \mathbb{N}$:

$$
\left(re^&lbrace;i\theta&rbrace;\right)^&lbrace;-m&rbrace; = \frac&lbrace;1&rbrace;&lbrace;\left(re^&lbrace;i\theta&rbrace;\right)^m&rbrace; = \frac&lbrace;1&rbrace;&lbrace;r^m e^&lbrace;im\theta&rbrace;&rbrace; = r^&lbrace;-m&rbrace; e^&lbrace;-im\theta&rbrace; = r^n e^&lbrace;in\theta&rbrace;
$$

### Connection to the Binomial Theorem

Expanding $(\cos\theta + i\sin\theta)^n$ using the binomial theorem and equating with De Moivre's
result gives trigonometric identities. For $n = 3$:

$$
\begin&lbrace;aligned&rbrace;
    \cos 3\theta + i\sin 3\theta &= (\cos\theta + i\sin\theta)^3\\
    &= \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta
\end&lbrace;aligned&rbrace;
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
w^2 + w + 1 = 0 \implies w = \frac&lbrace;-1 \pm \sqrt&lbrace;1 - 4&rbrace;&rbrace;&lbrace;2&rbrace; = \frac&lbrace;-1 \pm i\sqrt&lbrace;3&rbrace;&rbrace;&lbrace;2&rbrace;
$$

So $z^2 = e^{\pm 2\pi i/3}$. Taking square roots:

$$
\begin&lbrace;aligned&rbrace;
    z^2 &= e^&lbrace;2\pi i/3&rbrace; \implies z = \pm\, e^&lbrace;\pi i/3&rbrace; = \pm\left(\frac&lbrace;1&rbrace;&lbrace;2&rbrace; + i\frac&lbrace;\sqrt&lbrace;3&rbrace;&rbrace;&lbrace;2&rbrace;\right)\\
    z^2 &= e^&lbrace;-2\pi i/3&rbrace; \implies z = \pm\, e^&lbrace;-\pi i/3&rbrace; = \pm\left(\frac&lbrace;1&rbrace;&lbrace;2&rbrace; - i\frac&lbrace;\sqrt&lbrace;3&rbrace;&rbrace;&lbrace;2&rbrace;\right)
\end&lbrace;aligned&rbrace;
$$

The five roots are $0,\; \pm\frac{1}{2} \pm i\frac{\sqrt{3}}{2}$.

### Worked Example: Geometric Problem on the Argand Diagram

**Problem:** The points $A$, $B$, $C$ on the Argand diagram represent $z_A = 1 + i$, $z_B = 5 + 3i$,
and $z_C = 3 + 7i$. Show that triangle $ABC$ is isosceles and find its area.

**Solution:**

$$
\begin&lbrace;aligned&rbrace;
    AB &= |z_B - z_A| = |4 + 2i| = \sqrt&lbrace;16 + 4&rbrace; = 2\sqrt&lbrace;5&rbrace;\\
    BC &= |z_C - z_B| = |-2 + 4i| = \sqrt&lbrace;4 + 16&rbrace; = 2\sqrt&lbrace;5&rbrace;\\
    CA &= |z_A - z_C| = |-2 - 6i| = \sqrt&lbrace;4 + 36&rbrace; = 2\sqrt&lbrace;10&rbrace;
\end&lbrace;aligned&rbrace;
$$

Since $AB = BC = 2\sqrt{5}$, the triangle is isosceles with $AB = BC$.

Using the formula for the area of a triangle with vertices at complex numbers:

$$
\begin&lbrace;aligned&rbrace;
    \mathrm&lbrace;Area&rbrace; &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left|\mathrm&lbrace;Im&rbrace;\!\left(\bar&lbrace;z&rbrace;_&lbrace;AB&rbrace; \cdot z_&lbrace;AC&rbrace;\right)\right|\\
    &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left|\mathrm&lbrace;Im&rbrace;\!\left((4 - 2i)(2 + 6i)\right)\right|\\
    &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left|\mathrm&lbrace;Im&rbrace;(8 + 24i - 4i + 12)\right|\\
    &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left|\mathrm&lbrace;Im&rbrace;(20 + 20i)\right|\\
    &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace; \cdot 20 = 10
\end&lbrace;aligned&rbrace;
$$

### Worked Example: Trigonometric Expansion via De Moivre

**Problem:** Express $\cos^5\theta$ in terms of $\cos(n\theta)$ for $n = 1, 3, 5$.

**Solution:** Using the binomial expansion of
$\cos^5\theta = \left(\frac{e^{i\theta} + e^{-i\theta}}{2}\right)^5$:

$$
\begin&lbrace;aligned&rbrace;
    2^5 \cos^5\theta &= (e^&lbrace;i\theta&rbrace; + e^&lbrace;-i\theta&rbrace;)^5\\
    &= e^&lbrace;5i\theta&rbrace; + 5e^&lbrace;3i\theta&rbrace; + 10e^&lbrace;i\theta&rbrace; + 10e^&lbrace;-i\theta&rbrace; + 5e^&lbrace;-3i\theta&rbrace; + e^&lbrace;-5i\theta&rbrace;\\
    &= 2\cos 5\theta + 10\cos 3\theta + 20\cos\theta
\end&lbrace;aligned&rbrace;
$$

Therefore:

$$
\cos^5\theta = \frac&lbrace;1&rbrace;&lbrace;16&rbrace;\cos 5\theta + \frac&lbrace;5&rbrace;&lbrace;16&rbrace;\cos 3\theta + \frac&lbrace;5&rbrace;&lbrace;8&rbrace;\cos\theta
$$

### Worked Example: Converting Between All Three Forms

**Problem:** Express $z = -1 + i\sqrt{3}$ in all three standard forms and verify the conversions.

**Solution:**

**Cartesian:** $z = -1 + i\sqrt{3}$.

**Polar:**

$$
r = |z| = \sqrt&lbrace;(-1)^2 + (\sqrt&lbrace;3&rbrace;)^2&rbrace; = 2
$$

The point $(-1, \sqrt{3})$ lies in the second quadrant, so:

$$
\theta = \pi - \arctan\frac&lbrace;\sqrt&lbrace;3&rbrace;&rbrace;&lbrace;1&rbrace; = \pi - \frac&lbrace;\pi&rbrace;&lbrace;3&rbrace; = \frac&lbrace;2\pi&rbrace;&lbrace;3&rbrace;
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
\begin&lbrace;aligned&rbrace;
    \mathrm&lbrace;Quadrant II:&rbrace;\quad &\theta = \pi - \arctan\!\left|\frac&lbrace;b&rbrace;&lbrace;a&rbrace;\right|\\
    \mathrm&lbrace;Quadrant III:&rbrace;\quad &\theta = -\pi + \arctan\frac&lbrace;b&rbrace;&lbrace;a&rbrace;
\end&lbrace;aligned&rbrace;
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
|z_1 + z_2| \neq |z_1| + |z_2| \quad \mathrm&lbrace;in general&rbrace;
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
\arg\!\left(\frac&lbrace;z_1&rbrace;&lbrace;z_2&rbrace;\right) = \arg(z_1) - \arg(z_2) = \frac&lbrace;\pi&rbrace;&lbrace;4&rbrace; - \left(-\frac&lbrace;\pi&rbrace;&lbrace;3&rbrace;\right) = \frac&lbrace;7\pi&rbrace;&lbrace;12&rbrace;
$$

</details>

<details>
<summary>Problem 2: Locus Description</summary>

Describe the locus defined by $|z - 1 - i| = |z + 1 + i|$ and give its Cartesian equation.

**Solution:** This represents the perpendicular bisector of the segment joining $z_1 = 1 + i$ and
$z_2 = -1 - i$.

Let $z = x + iy$:

$$
\begin&lbrace;aligned&rbrace;
    (x - 1)^2 + (y - 1)^2 &= (x + 1)^2 + (y + 1)^2\\
    x^2 - 2x + 1 + y^2 - 2y + 1 &= x^2 + 2x + 1 + y^2 + 2y + 1\\
    -4x - 4y &= 0\\
    y &= -x
\end&lbrace;aligned&rbrace;
$$

The locus is the line $y = -x$.

</details>

<details>
<summary>Problem 3: Roots of a Complex Number</summary>

Find all cube roots of $z = 8i$ and express them in Cartesian form.

**Solution:** Write $8i = 8e^{i\pi/2}$. The cube roots are:

$$
z_k = 8^&lbrace;1/3&rbrace; \cdot e^&lbrace;i(\pi/2 + 2k\pi)/3&rbrace; = 2 \cdot e^&lbrace;i(\pi + 4k\pi)/6&rbrace;, \quad k = 0, 1, 2
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
\begin&lbrace;aligned&rbrace;
    \cos 4\theta + i\sin 4\theta &= (\cos\theta + i\sin\theta)^4\\
    &= \cos^4\theta + 4i\cos^3\theta\sin\theta - 6\cos^2\theta\sin^2\theta - 4i\cos\theta\sin^3\theta + \sin^4\theta
\end&lbrace;aligned&rbrace;
$$

Equating real parts and using $\sin^2\theta = 1 - \cos^2\theta$:

$$
\begin&lbrace;aligned&rbrace;
    \cos 4\theta &= \cos^4\theta - 6\cos^2\theta(1 - \cos^2\theta) + (1 - \cos^2\theta)^2\\
    &= \cos^4\theta - 6\cos^2\theta + 6\cos^4\theta + 1 - 2\cos^2\theta + \cos^4\theta\\
    &= 8\cos^4\theta - 8\cos^2\theta + 1
\end&lbrace;aligned&rbrace;
$$

</details>

<details>
<summary>Problem 5: Geometric Locus Intersection</summary>

Find all complex numbers $z$ satisfying both $|z - 2| = 2$ and $\arg(z) = \pi/4$.

**Solution:** The condition $\arg(z) = \pi/4$ means $z$ lies on the ray from the origin at
$45^\circ$, so $z = t(1 + i)$ for $t \gt{} 0$.

Substituting into $|z - 2| = 2$:

$$
\begin&lbrace;aligned&rbrace;
    |t(1 + i) - 2| &= 2\\
    |(t - 2) + ti| &= 2\\
    (t - 2)^2 + t^2 &= 4\\
    t^2 - 4t + 4 + t^2 &= 4\\
    2t^2 - 4t &= 0\\
    2t(t - 2) &= 0
\end&lbrace;aligned&rbrace;
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
z = \frac&lbrace;2 \pm \sqrt&lbrace;4 - 20&rbrace;&rbrace;&lbrace;2&rbrace; = \frac&lbrace;2 \pm 4i&rbrace;&lbrace;2&rbrace; = 1 \pm 2i
$$

The roots are $1 + 2i$ and $1 - 2i$, each with multiplicity 2.

</details>

<details>
<summary>Problem 7: Proof Using Modulus Properties</summary>

Prove that $|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2|z_1|^2 + 2|z_2|^2$ for all $z_1, z_2 \in \mathbb{C}$.

**Solution:** Let $z_1 = a + bi$ and $z_2 = c + di$.

$$
\begin&lbrace;aligned&rbrace;
    |z_1 + z_2|^2 &= (a + c)^2 + (b + d)^2 = a^2 + 2ac + c^2 + b^2 + 2bd + d^2\\
    |z_1 - z_2|^2 &= (a - c)^2 + (b - d)^2 = a^2 - 2ac + c^2 + b^2 - 2bd + d^2
\end&lbrace;aligned&rbrace;
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
z_k = e^&lbrace;2k\pi i/5&rbrace;, \quad k = 0, 1, 2, 3, 4
$$

In Cartesian form:

$$
\begin&lbrace;aligned&rbrace;
    z_0 &= 1\\
    z_1 &= \cos\frac&lbrace;2\pi&rbrace;&lbrace;5&rbrace; + i\sin\frac&lbrace;2\pi&rbrace;&lbrace;5&rbrace;\\
    z_2 &= \cos\frac&lbrace;4\pi&rbrace;&lbrace;5&rbrace; + i\sin\frac&lbrace;4\pi&rbrace;&lbrace;5&rbrace;\\
    z_3 &= \cos\frac&lbrace;6\pi&rbrace;&lbrace;5&rbrace; + i\sin\frac&lbrace;6\pi&rbrace;&lbrace;5&rbrace;\\
    z_4 &= \cos\frac&lbrace;8\pi&rbrace;&lbrace;5&rbrace; + i\sin\frac&lbrace;8\pi&rbrace;&lbrace;5&rbrace;
\end&lbrace;aligned&rbrace;
$$

These are the roots of $z^5 - 1 = 0$. By Vieta's formulas, the sum of the roots equals the negative
coefficient of $z^4$, which is $0$.

Alternatively, using the geometric series:

$$
\sum_&lbrace;k=0&rbrace;^&lbrace;4&rbrace; z_k = \sum_&lbrace;k=0&rbrace;^&lbrace;4&rbrace; \left(e^&lbrace;2\pi i/5&rbrace;\right)^k = \frac&lbrace;1 - \left(e^&lbrace;2\pi i/5&rbrace;\right)^5&rbrace;&lbrace;1 - e^&lbrace;2\pi i/5&rbrace;&rbrace; = \frac&lbrace;1 - 1&rbrace;&lbrace;1 - e^&lbrace;2\pi i/5&rbrace;&rbrace; = 0
$$

</details>

<details>
<summary>Problem 9: Area of a Triangle on the Argand Diagram</summary>

The vertices of a triangle on the Argand diagram are $z_1 = 0$, $z_2 = 4 + 2i$, and $z_3 = 1 + 5i$.
Find the area of the triangle.

**Solution:** Using the determinant formula for the area of a triangle with vertices at complex
numbers:

$$
\begin&lbrace;aligned&rbrace;
    \mathrm&lbrace;Area&rbrace; &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left|\mathrm&lbrace;Im&rbrace;\!\left(\bar&lbrace;z&rbrace;_2 \cdot z_3\right)\right|\\
    &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left|\mathrm&lbrace;Im&rbrace;\!\left((4 - 2i)(1 + 5i)\right)\right|\\
    &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left|\mathrm&lbrace;Im&rbrace;(4 + 20i - 2i + 10)\right|\\
    &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left|\mathrm&lbrace;Im&rbrace;(14 + 18i)\right|\\
    &= \frac&lbrace;1&rbrace;&lbrace;2&rbrace; \cdot 18 = 9
\end&lbrace;aligned&rbrace;
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
\frac&lbrace;z + i&rbrace;&lbrace;z - 1&rbrace; = \frac&lbrace;x + i(y + 1)&rbrace;&lbrace;(x - 1) + iy&rbrace;
$$

Multiplying numerator and denominator by the conjugate of the denominator:

$$
\frac&lbrace;(x + i(y+1))((x-1) - iy)&rbrace;&lbrace;(x-1)^2 + y^2&rbrace;
$$

The imaginary part of the numerator:

$$
x(-y) + (y + 1)(x - 1) = -xy + xy + x - y - 1 = x - y - 1
$$

Setting this to zero: $x - y - 1 = 0$, i.e. $y = x - 1$.

The solution set is $\{z = x + i(x - 1) : x \in \mathbb{R},\; z \neq 1,\; z \neq -i\}$.

</details>
