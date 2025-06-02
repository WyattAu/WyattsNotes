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
Complex numbers ($z$) in polar form are defined with argument ($\theta$) away from $0$ in a unit circle, scaled by the magnitude ($r$):
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
As complex numbers is form by two coordinates (real and imaginary), the magnitude can by obtained by the Pythagorean identity:
$$
\begin{aligned}
    r = |z| = \sqrt{a^2+b^2}
\end{aligned}
$$

Similarly, the argument ($\theta$) can be determined by the two coordinates by the definition of $\tan(\theta) = \frac{b}{a}$:
$$
\begin{aligned}
    \theta = \arg(z) = \arctan \frac{b}{a}
\end{aligned}
$$
Since $\tan \theta$ is undefined at $a = 0$, case piecewise definition can define $\theta$ at $a = 0$:
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
Since polar coordinates is already defined by the argument, conversion to cartesian is simply evaluating the definition of cartesian coordinate ($\text{cis }\theta$):
$$
\begin{aligned}
    z = r(\cos \theta + i \sin \theta)
\end{aligned}
$$

### Euler to Polar
The equivalence of Euler and polar form can be shown by their Taylor series expansion:
$$
\begin{aligned}
    re^{i\theta} = 
\end{aligned}
$$
