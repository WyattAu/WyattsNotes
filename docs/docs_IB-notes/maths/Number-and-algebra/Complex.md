---
title: Complex Numbers
date: 2025-05-15T18:59:48.120Z
tags:
  - maths
categories:
  - maths
slug: complex-numbers
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
        \frac{\pi}{2} & a = 0, b > 0\\
        \frac{\pi}{2} & a = 0, b < 0\\
    \end{cases}
\end{aligned}
$$

### Polar to Cartesian

Since polar coordinates is already defined by the argument, conversion to cartesian is simply
evaluating the definition of cartesian coordinate ($\text{cis }\theta$):

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
    z + \bar{z} &= 2a \quad (\text{real})\\
    z - \bar{z} &= 2bi \quad (\text{imaginary})
\end{aligned}
$$

## The Argand Diagram

An Argand diagram represents complex numbers in a 2D plane:

- The **horizontal axis** represents the real part ($\text{Re}(z)$)
- The **vertical axis** represents the imaginary part ($\text{Im}(z)$)

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

:::tip
Exam Tip When finding $\arg(z)$, always draw a quick Argand diagram to check which quadrant
the point is in. A common mistake is to use the calculator value directly without adjusting for the
correct quadrant.
:::

### Geometric Interpretation of Operations

- **Addition:** vector addition (parallelogram rule)
- **Conjugation ($\bar{z}$):** reflection in the real axis
- **Negation ($-z$):** reflection in the origin
- **Multiplication by $i$:** rotation $90°$ anticlockwise

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

:::tip
Exam Tip Converting between forms is essential. A good strategy: always convert to
polar/Euler form before raising to a power or finding roots, and convert back to Cartesian for the
final answer.
:::

:::

:::
