---
title: Complex Analysis
description:
  'University-level notes on Complex Analysis: 1. Complex Numbers Review; 1.1 Definition and
  Arithmetic; 1.2 The Complex Conjugate and Modulus; 1.3 Polar Form.'
date: 2026-04-24T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: complex-analysis
---

## 1. Complex Numbers Review

### 1.1 Definition and Arithmetic

A **complex number** is $z = a + bi$ where $a, b \in \mathbb◆LB◆R◆RB◆$ and $i^2 = -1$. We call
$a = \mathrm◆LB◆Re(z)$ the real part and $b = \mathrm◆LB◆Im(z)$ the imaginary part.

**Arithmetic:** $(a + bi) + (c + di) = (a + c) + (b + d)i$ and
$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$.

**Proposition 1.1 (Properties of Complex Arithmetic).** For all $z, w \in \mathbb◆LB◆C◆RB◆$:

1. $z + w = w + z$ and $zw = wz$ (commutativity)
2. $(z + w) + u = z + (w + u)$ and $(zw)u = z(wu)$ (associativity)
3. $z(w + u) = zw + zu$ (distributivity)
4. There exist additive identity $0$ and multiplicative identity $1$.
5. Every $z \neq 0$ has a multiplicative inverse $\frac◆LB◆1◆RB◆◆LB◆z◆RB◆ = \frac◆LB◆\bar◆LB◆z◆RB◆◆RB◆◆LB◆|z|^2◆RB◆$.

_Remark._ The complex field $\mathbb◆LB◆C◆RB◆$ cannot be ordered: there is no total ordering on
$\mathbb◆LB◆C◆RB◆$ Compatible with the field operations. In particular, $i^2 = -1$ precludes any such
ordering.

### 1.2 The Complex Conjugate and Modulus

**Definition.** The **complex conjugate** of $z = a + bi$ is $\bar◆LB◆z◆RB◆ = a - bi$.

**Proposition 1.2.** For all $z, w \in \mathbb◆LB◆C◆RB◆$:

1. $\overline◆LB◆z + w◆RB◆ = \bar◆LB◆z◆RB◆ + \bar◆LB◆w◆RB◆$ and $\overline◆LB◆zw◆RB◆ = \bar◆LB◆z◆RB◆\bar◆LB◆w◆RB◆$
2. $z\bar◆LB◆z◆RB◆ = |z|^2$
3. $z + \bar◆LB◆z◆RB◆ = 2\,\mathrm◆LB◆Re(z)$ and $z - \bar◆LB◆z◆RB◆ = 2i\,\mathrm◆LB◆Im(z)$
4. $\bar◆LB◆\bar◆LB◆z◆RB◆◆RB◆ = z$

**Definition.** The **modulus** (or absolute value) of $z = a + bi$ is $|z| = \sqrt◆LB◆a^2 + b^2◆RB◆$.

**Proposition 1.3 (Modulus Properties).** For all $z, w \in \mathbb◆LB◆C◆RB◆$:

1. $|z| \geq 0$ with equality iff $z = 0$
2. $|zw| = |z||w|$
3. $|z + w| \leq |z| + |w|$ (triangle inequality)
4. $\bigl||z| - |w|\bigr| \leq |z - w|$ (reverse triangle inequality)

_Proof of (3)._
$|z + w|^2 = (z + w)(\bar◆LB◆z◆RB◆ + \bar◆LB◆w◆RB◆) = |z|^2 + z\bar◆LB◆w◆RB◆ + \bar◆LB◆z◆RB◆w + |w|^2
= |z|^2 + 2\,\mathrm◆LB◆Re(z\bar◆LB◆w◆RB◆) + |w|^2 \leq |z|^2 + 2|z||w| + |w|^2 = (|z| + |w|)^2$.
The inequality follows from $\mathrm◆LB◆Re(z\bar◆LB◆w◆RB◆) \leq |z\bar◆LB◆w◆RB◆| = |z||w|$. $\blacksquare$

### 1.3 Polar Form

Every non-zero complex number can be written in **polar form**:

$$z = r(\cos\theta + i\sin\theta) = re^◆LB◆i\theta◆RB◆$$

Where $r = |z| = \sqrt◆LB◆a^2 + b^2◆RB◆$ is the **modulus** and $\theta = \arg(z)$ is the **argument**.

**Definition.** The **principal argument** $\mathrm◆LB◆Arg(z)$ is the unique $\theta \in (-\pi, \pi]$
Such that $z = |z|e^◆LB◆i\theta◆RB◆$. The **argument** $\arg(z)$ is multi-valued:
$\arg(z) = \mathrm◆LB◆Arg(z) + 2\pi k$ for $k \in \mathbb◆LB◆Z◆RB◆$.

**Proposition 1.4.** If $z_1 = r_1 e^◆LB◆i\theta_1◆RB◆$ and $z_2 = r_2 e^◆LB◆i\theta_2◆RB◆$Then
$z_1 z_2 = r_1 r_2 e^◆LB◆i(\theta_1 + \theta_2)◆RB◆$ and
$z_1/z_2 = (r_1/r_2)\, e^◆LB◆i(\theta_1 - \theta_2)◆RB◆$.

#### Worked Examples: Polar Form Conversions

<details>
<summary>Solution</summary>

**Problem.** Convert $z = -1 + \sqrt◆LB◆3◆RB◆\,i$ to polar form and find all arguments.

$|z| = \sqrt◆LB◆(-1)^2 + (\sqrt◆LB◆3◆RB◆)^2◆RB◆ = \sqrt◆LB◆1 + 3◆RB◆ = 2$.

$\mathrm◆LB◆Re(z) = -1 \lt 0$ and $\mathrm◆LB◆Im(z) = \sqrt◆LB◆3◆RB◆ \gt 0$So $z$ is in the second quadrant.

$\theta = \arctan\!\left(\frac◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆◆LB◆-1◆RB◆\right) = \frac◆LB◆2\pi◆RB◆◆LB◆3◆RB◆$ (adjusting to second
quadrant).

Polar form: $z = 2\,e^◆LB◆2\pi i/3◆RB◆$.

All arguments: $\arg(z) = \frac◆LB◆2\pi◆RB◆◆LB◆3◆RB◆ + 2\pi k$ for $k \in \mathbb◆LB◆Z◆RB◆$.

**Problem.** Convert $z = 3e^◆LB◆-i\pi/4◆RB◆$ to rectangular form.

$z = 3\left(\cos\!\left(-\frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\right) + i\sin\!\left(-\frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆\right)\right)
= 3\left(\frac◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆2◆RB◆ - i\,\frac◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆2◆RB◆\right) = \frac◆LB◆3\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆3\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆2◆RB◆\,i$.

**Problem.** Express $z = -3 - 4i$ in polar form.

$|z| = \sqrt◆LB◆9 + 16◆RB◆ = 5$.

Both real and imaginary parts are negative, so $z$ is in the third quadrant.

$\theta = \arctan(4/3) + \pi = \pi + \arctan(4/3)$.

$z = 5\,e^◆LB◆i(\pi + \arctan(4/3))◆RB◆$.

</details>

### 1.4 Euler's Formula and De Moivre's Theorem

**Euler's formula:** $e^◆LB◆i\theta◆RB◆ = \cos\theta + i\sin\theta$.

**De Moivre's theorem:** $(e^◆LB◆i\theta◆RB◆)^n = e^◆LB◆in\theta◆RB◆$So

$$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$$

**Proposition 1.5.** De Moivre's theorem holds for all integers $n$Including negative values.

_Proof._ For $n \geq 0$It follows by induction from the multiplication law
$e^◆LB◆i\alpha◆RB◆e^◆LB◆i\beta◆RB◆ = e^◆LB◆i(\alpha + \beta)◆RB◆$. For $n \lt 0$Write $n = -m$ with $m \gt 0$:
$(\cos\theta + i\sin\theta)^n = \frac◆LB◆1◆RB◆◆LB◆(\cos\theta + i\sin\theta)^m◆RB◆
= \frac◆LB◆1◆RB◆◆LB◆\cos(m\theta) + i\sin(m\theta)◆RB◆ = \cos(-m\theta) + i\sin(-m\theta) = \cos(n\theta) + i\sin(n\theta)$.
$\blacksquare$

#### Applications of De Moivre's Theorem

**Example.** Compute $(1 + i)^◆LB◆20◆RB◆$.

$1 + i = \sqrt◆LB◆2◆RB◆\,e^◆LB◆i\pi/4◆RB◆$So
$(1 + i)^◆LB◆20◆RB◆ = (\sqrt◆LB◆2◆RB◆)^◆LB◆20◆RB◆\, e^◆LB◆20\pi i/4◆RB◆ = 2^◆LB◆10◆RB◆\, e^◆LB◆5\pi i◆RB◆ = 1024\,e^◆LB◆\pi i◆RB◆ = -1024$.

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
$\sum_◆LB◆k=0◆RB◆^◆LB◆n-1◆RB◆ \cos(k\theta) = \frac◆LB◆\sin(n\theta/2)◆RB◆◆LB◆\sin(\theta/2)◆RB◆\cos\!\left(\frac◆LB◆(n-1)\theta◆RB◆◆LB◆2◆RB◆\right)$
For $\theta \notin 2\pi\mathbb◆LB◆Z◆RB◆$.

Consider $S = \sum_◆LB◆k=0◆RB◆^◆LB◆n-1◆RB◆ e^◆LB◆ik\theta◆RB◆ = \frac◆LB◆1 - e^◆LB◆in\theta◆RB◆◆RB◆◆LB◆1 - e^◆LB◆i\theta◆RB◆◆RB◆$ (geometric
series with $r = e^◆LB◆i\theta◆RB◆ \neq 1$).

$S = \frac◆LB◆e^◆LB◆in\theta/2◆RB◆(e^◆LB◆-in\theta/2◆RB◆ - e^◆LB◆in\theta/2◆RB◆)◆RB◆◆LB◆e^◆LB◆i\theta/2◆RB◆(e^◆LB◆-i\theta/2◆RB◆ - e^◆LB◆i\theta/2◆RB◆)◆RB◆
= e^◆LB◆i(n-1)\theta/2◆RB◆ \cdot \frac◆LB◆\sin(n\theta/2)◆RB◆◆LB◆\sin(\theta/2)◆RB◆$.

Taking real parts gives the result.

</details>

### 1.5 Roots of Complex Numbers

**Definition.** An $n$-th root of $w \in \mathbb◆LB◆C◆RB◆$ is a complex number $z$ such that $z^n = w$.

**Proposition 1.6.** Every non-zero $w \in \mathbb◆LB◆C◆RB◆$ has exactly $n$ distinct $n$-th roots. If
$w = \rho\, e^◆LB◆i\phi◆RB◆$Then

$$z_k = \rho^◆LB◆1/n◆RB◆\, e^◆LB◆i(\phi + 2\pi k)/n◆RB◆, \quad k = 0, 1, \ldots, n - 1$$

Where $\rho^◆LB◆1/n◆RB◆ \gt 0$ is the positive real $n$-th root of $\rho$.

_Proof._ If $z^n = w$Write $z = r\,e^◆LB◆i\theta◆RB◆$. Then $r^n e^◆LB◆in\theta◆RB◆ = \rho\, e^◆LB◆i\phi◆RB◆$ So
$r = \rho^◆LB◆1/n◆RB◆$ and $n\theta = \phi + 2\pi k$. For $k = 0, 1, \ldots, n-1$ these give distinct
Values of $\theta$; for $k \geq n$ they repeat. $\blacksquare$

_Remark._ The $n$-th roots of $w$ lie equally spaced on a circle of radius $\rho^◆LB◆1/n◆RB◆$Forming a
Regular $n$-gon.

### 1.6 Roots of Unity

The $n$-th roots of unity are the solutions of $z^n = 1$:

$$z_k = e^◆LB◆2\pi i k / n◆RB◆, \quad k = 0, 1, \ldots, n - 1$$

They form a regular $n$-gon on the unit circle in the complex plane.

**Proposition 1.7.** If $\omega = e^◆LB◆2\pi i/n◆RB◆$ is a primitive $n$-th root of unity, then
$\sum_◆LB◆k=0◆RB◆^◆LB◆n-1◆RB◆ \omega^k = 0$ and $\sum_◆LB◆k=0◆RB◆^◆LB◆n-1◆RB◆ \omega^◆LB◆jk◆RB◆ = 0$ for any $j$ not divisible by
$n$.

_Proof._ The sum
$\sum_◆LB◆k=0◆RB◆^◆LB◆n-1◆RB◆ \omega^k = \frac◆LB◆1 - \omega^n◆RB◆◆LB◆1 - \omega◆RB◆ = \frac◆LB◆1 - 1◆RB◆◆LB◆1 - \omega◆RB◆ = 0$
Provided $\omega \neq 1$. For $j$ not divisible by $n$, $\omega^j$ is a non-trivial root of unity, So
the same argument applies. $\blacksquare$

<details>
<summary>Solution</summary>

**Problem.** Find all cube roots of $-8$.

$-8 = 8\,e^◆LB◆i\pi◆RB◆$. The cube roots are:
$z_k = 8^◆LB◆1/3◆RB◆\, e^◆LB◆i(\pi + 2\pi k)/3◆RB◆ = 2\, e^◆LB◆i(\pi + 2\pi k)/3◆RB◆$ for $k = 0, 1, 2$.

$z_0 = 2\,e^◆LB◆i\pi/3◆RB◆ = 2\left(\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ + i\,\frac◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆◆LB◆2◆RB◆\right) = 1 + i\sqrt◆LB◆3◆RB◆$.
$z_1 = 2\,e^◆LB◆i\pi◆RB◆ = -2$.
$z_2 = 2\,e^◆LB◆i5\pi/3◆RB◆ = 2\left(\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ - i\,\frac◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆◆LB◆2◆RB◆\right) = 1 - i\sqrt◆LB◆3◆RB◆$.

**Problem.** Find all fourth roots of $z = 16i$.

$16i = 16\,e^◆LB◆i\pi/2◆RB◆$. The fourth roots are:
$z_k = 16^◆LB◆1/4◆RB◆\, e^◆LB◆i(\pi/2 + 2\pi k)/4◆RB◆ = 2\, e^◆LB◆i(\pi/8 + \pi k/2)◆RB◆$ for $k = 0, 1, 2, 3$.

$z_0 = 2\,e^◆LB◆i\pi/8◆RB◆$$z_1 = 2\,e^◆LB◆i5\pi/8◆RB◆$$z_2 = 2\,e^◆LB◆i9\pi/8◆RB◆$$z_3 = 2\,e^◆LB◆i13\pi/8◆RB◆$.

**Problem.** Show that the $n$-th roots of any non-zero $w$ are in geometric progression.

The roots are
$z_k = \rho^◆LB◆1/n◆RB◆\, e^◆LB◆i(\phi + 2\pi k)/n◆RB◆ = z_0 \cdot \left(e^◆LB◆2\pi i/n◆RB◆\right)^k = z_0 \cdot \omega^k$
Where $\omega = e^◆LB◆2\pi i/n◆RB◆$ is a primitive $n$-th root of unity. This is a geometric sequence With
ratio $\omega$.

</details>

## 2. Complex Functions and Analyticity

### 2.1 Complex Functions

A **complex function** is a function $f : D \subseteq \mathbb◆LB◆C◆RB◆ \to \mathbb◆LB◆C◆RB◆$. We can write
$f(z) = u(x, y) + iv(x, y)$ where $z = x + iy$ and $u, v$ are real-valued functions.

**Example.** $f(z) = z^2 = (x + iy)^2 = (x^2 - y^2) + i(2xy)$. Here $u = x^2 - y^2$ and $v = 2xy$.

**Example.** $f(z) = \bar◆LB◆z◆RB◆ = x - iy$. Here $u = x$ and $v = -y$.

**Example.** $f(z) = |z|^2 = x^2 + y^2$. Here $u = x^2 + y^2$ and $v = 0$.

### 2.2 Limits and Continuity

The limit $\lim_◆LB◆z \to z_0◆RB◆ f(z) = L$ means: for every $\varepsilon \gt 0$There exists
$\delta \gt 0$ Such that $0 \lt |z - z_0| \lt \delta$ implies $|f(z) - L| \lt \varepsilon$.

Unlike the real case, $z$ can approach $z_0$ from any direction in $\mathbb◆LB◆C◆RB◆$. This makes limits
More restrictive.

**Proposition 2.1.** $\lim_◆LB◆z \to z_0◆RB◆ f(z) = L$ if and only if
$\lim_◆LB◆(x,y) \to (x_0, y_0)◆RB◆ u(x, y) = a$ And $\lim_◆LB◆(x,y) \to (x_0, y_0)◆RB◆ v(x, y) = b$ where
$L = a + bi$.

**Definition.** $f$ is **continuous** at $z_0$ if $\lim_◆LB◆z \to z_0◆RB◆ f(z) = f(z_0)$.

<details>
<summary>Solution</summary>

**Problem.** Show that $\lim_◆LB◆z \to 0◆RB◆ \frac◆LB◆\bar◆LB◆z◆RB◆◆RB◆◆LB◆z◆RB◆$ does not exist.

Let $z = re^◆LB◆i\theta◆RB◆$. Then $\frac◆LB◆\bar◆LB◆z◆RB◆◆RB◆◆LB◆z◆RB◆ = e^◆LB◆-2i\theta◆RB◆$. As $z \to 0$ along different Rays
($\theta = 0, \pi/2, \pi/4$Etc.), the ratio takes different values ($1, -1, -i$Etc.). Since the
limit depends on the direction of approach, it does not exist.

**Problem.** Determine whether $f(z) = \frac◆LB◆z^2 - 1◆RB◆◆LB◆z - 1◆RB◆$ is continuous at $z = 1$.

For $z \neq 1$: $f(z) = z + 1$. The limit as $z \to 1$ is $2$But $f(1)$ is undefined (division by
zero). If we define $f(1) = 2$Then $f$ becomes continuous at $z = 1$.

</details>

### 2.3 The Derivative

**Definition.** $f$ is **differentiable** at $z_0$ if

$$f'(z_0) = \lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆f(z_0 + h) - f(z_0)◆RB◆◆LB◆h◆RB◆$$

Exists (and is independent of how $h \to 0$ in $\mathbb◆LB◆C◆RB◆$).

_Remark._ The requirement that the limit be the same for all directions of approach of $h$ is what
Makes complex differentiability far more restrictive than real differentiability.

### 2.4 Analytic Functions

**Definition.** A function $f$ is **analytic** (or **holomorphic**) on an open set
$U \subseteq \mathbb◆LB◆C◆RB◆$ if $f$ is differentiable at every point of $U$. A function that is analytic
On all of $\mathbb◆LB◆C◆RB◆$ is called **entire**.

**Examples of entire functions:** $z^n$$e^z$$\sin z$$\cos z$Polynomials.

**Example of a non-analytic function:** $f(z) = \bar◆LB◆z◆RB◆$ is nowhere differentiable (except at
$z = 0$ if we define it, but still not analytic there).

<details>
<summary>Solution</summary>

**Problem.** Show that $f(z) = |z|^2$ is differentiable only at $z = 0$.

$f(z) = x^2 + y^2$So $u = x^2 + y^2$ and $v = 0$. $u_x = 2x$$u_y = 2y$$v_x = 0$$v_y = 0$. The
Cauchy-Riemann equations require $2x = 0$ and $2y = 0$So $x = y = 0$. Thus $f$ satisfies CR only at
$z = 0$.

At $z = 0$: $f'(0) = \lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆|h|^2◆RB◆◆LB◆h◆RB◆ = \lim_◆LB◆h \to 0◆RB◆ \bar◆LB◆h◆RB◆ = 0$So $f$ is
Differentiable at $0$ but not analytic anywhere (no neighbourhood of $0$ is analytic).

**Problem.** Show that $f(z) = z\bar◆LB◆z◆RB◆ + z$ is differentiable only at $z = 0$.

$f(z) = |z|^2 + z = (x^2 + y^2 + x) + iy$. $u_x = 2x + 1$$u_y = 2y$$v_x = 0$$v_y = 1$. CR equations:
$2x + 1 = 1 \Rightarrow x = 0$And $2y = 0 \Rightarrow y = 0$. At $(0, 0)$:
$f'(0) = \lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆h\bar◆LB◆h◆RB◆ + h◆RB◆◆LB◆h◆RB◆ = \lim_◆LB◆h \to 0◆RB◆ (\bar◆LB◆h◆RB◆ + 1) = 1$. So $f$ is
differentiable at $z = 0$ only, hence nowhere analytic.

</details>

### 2.5 Branch Cuts and Multi-Valued Functions

Many important functions in complex analysis are inherently multi-valued. To work with them as
Single-valued functions, we must restrict the domain.

**Definition.** A **branch** of a multi-valued function $f$ is a single-valued analytic function $g$
Defined on a domain $D$ such that $g(z) \in f(z)$ for all $z \in D$.

**The Complex Logarithm.** We define $\log z = \ln|z| + i\arg(z)$Which is multi-valued because
$\arg(z) = \mathrm◆LB◆Arg(z) + 2\pi k$ for $k \in \mathbb◆LB◆Z◆RB◆$. The **principal branch** is

$$\mathrm◆LB◆Log\, z = \ln|z| + i\,\mathrm◆LB◆Arg(z)$$

Defined on $\mathbb◆LB◆C◆RB◆ \setminus (-\infty, 0]$. The negative real axis is called the **branch cut**.

**Proposition 2.2.** The principal branch $\mathrm◆LB◆Log\, z$ is analytic on
$\mathbb◆LB◆C◆RB◆ \setminus (-\infty, 0]$ and $\frac◆LB◆d◆RB◆◆LB◆dz◆RB◆\,\mathrm◆LB◆Log\, z = \frac◆LB◆1◆RB◆◆LB◆z◆RB◆$.

**Complex Powers.** For $z, \alpha \in \mathbb◆LB◆C◆RB◆$ with $z \neq 0$:

$$z^\alpha = e^◆LB◆\alpha \log z◆RB◆$$

This is multi-valued . When $\alpha$ is rational with reduced form $p/q$There are exactly $q$
distinct values.

<details>
<summary>Solution</summary>

**Problem.** Find all values of $(-1)^i$.

$(-1)^i = e^◆LB◆i \log(-1)◆RB◆ = e^◆LB◆i(i\pi + 2\pi i k)◆RB◆ = e^◆LB◆-\pi - 2\pi k◆RB◆$ for $k \in \mathbb◆LB◆Z◆RB◆$.

These are all positive real numbers: $\ldots, e^◆LB◆3\pi◆RB◆, e^◆LB◆\pi◆RB◆, e^◆LB◆-\pi◆RB◆, e^◆LB◆-3\pi◆RB◆, \ldots$. The
principal value (using the principal branch) is $e^◆LB◆-\pi◆RB◆$.

**Problem.** Find all values of $i^◆LB◆1/2◆RB◆$.

$i^◆LB◆1/2◆RB◆ = e^◆LB◆(1/2)\log i◆RB◆ = e^◆LB◆(1/2)(i\pi/2 + 2\pi i k)◆RB◆ = e^◆LB◆i\pi/4 + i\pi k◆RB◆$.

For $k = 0$: $e^◆LB◆i\pi/4◆RB◆ = \frac◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆2◆RB◆(1 + i)$. For $k = 1$:
$e^◆LB◆i5\pi/4◆RB◆ = -\frac◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆2◆RB◆(1 + i)$. These are the two square roots of $i$.

**Problem.** Find the domain of analyticity of $f(z) = \mathrm◆LB◆Log(z^2 + 1)$.

$\mathrm◆LB◆Log\, w$ is analytic on $\mathbb◆LB◆C◆RB◆ \setminus (-\infty, 0]$So we need
$z^2 + 1 \notin (-\infty, 0]$.

$z^2 + 1 \leq 0$ when $z^2 \leq -1$I.e., $z \in [-i, 0] \cup [0, i]$ (the imaginary axis Segment
from $-i$ to $i$). Also $z^2 + 1 = 0$ at $z = \pm i$.

Domain: $\mathbb◆LB◆C◆RB◆ \setminus \{z : z = iy,\, y \in [-1, 1]\}$.

</details>

## 3. The Cauchy-Riemann Equations

### 3.1 Statement

**Theorem 3.1 (Cauchy-Riemann Equations).** If $f(z) = u(x, y) + iv(x, y)$ is differentiable at
$z = x + iy$Then

$$\frac◆LB◆\partial u◆RB◆◆LB◆\partial x◆RB◆ = \frac◆LB◆\partial v◆RB◆◆LB◆\partial y◆RB◆, \quad \frac◆LB◆\partial u◆RB◆◆LB◆\partial y◆RB◆ = -\frac◆LB◆\partial v◆RB◆◆LB◆\partial x◆RB◆$$

_Proof._ Compute the limit along the real axis ($h \in \mathbb◆LB◆R◆RB◆$, $h \to 0$):

$$f'(z) = \lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆u(x+h, y) - u(x, y)◆RB◆◆LB◆h◆RB◆ + i\lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆v(x+h, y) - v(x, y)◆RB◆◆LB◆h◆RB◆ = \frac◆LB◆\partial u◆RB◆◆LB◆\partial x◆RB◆ + i\frac◆LB◆\partial v◆RB◆◆LB◆\partial x◆RB◆$$

Compute along the imaginary axis ($h = ik$$k \in \mathbb◆LB◆R◆RB◆$$k \to 0$):

$$f'(z) = \lim_◆LB◆k \to 0◆RB◆ \frac◆LB◆u(x, y+k) - u(x, y)◆RB◆◆LB◆ik◆RB◆ + i\lim_◆LB◆k \to 0◆RB◆ \frac◆LB◆v(x, y+k) - v(x, y)◆RB◆◆LB◆ik◆RB◆ = -i\frac◆LB◆\partial u◆RB◆◆LB◆\partial y◆RB◆ + \frac◆LB◆\partial v◆RB◆◆LB◆\partial y◆RB◆$$

Equating real and imaginary parts: $\frac◆LB◆\partial u◆RB◆◆LB◆\partial x◆RB◆ = \frac◆LB◆\partial v◆RB◆◆LB◆\partial y◆RB◆$
And $\frac◆LB◆\partial v◆RB◆◆LB◆\partial x◆RB◆ = -\frac◆LB◆\partial u◆RB◆◆LB◆\partial y◆RB◆$. $\blacksquare$

### 3.2 Sufficiency Condition

**Theorem 3.2.** If $u$ and $v$ have continuous first partial derivatives on an open set $U$ and
Satisfy the Cauchy-Riemann equations on $U$Then $f = u + iv$ is analytic on $U$.

_Proof._ Since $u_x, u_y, v_x, v_y$ are continuous on $U$, $u$ and $v$ are (real) differentiable. Let
$\Delta z = \Delta x + i\Delta y$. By real differentiability:

$u(x + \Delta x, y + \Delta y) - u(x, y) = u_x\,\Delta x + u_y\,\Delta y + \varepsilon_1$
$v(x + \Delta x, y + \Delta y) - v(x, y) = v_x\,\Delta x + v_y\,\Delta y + \varepsilon_2$

Where $\varepsilon_1, \varepsilon_2 = o(|\Delta z|)$. Therefore

$\frac◆LB◆f(z + \Delta z) - f(z)◆RB◆◆LB◆\Delta z◆RB◆ = \frac◆LB◆(u_x + iv_x)\Delta x + (u_y + iv_y)\Delta y + \varepsilon_1 + i\varepsilon_2◆RB◆◆LB◆\Delta x + i\Delta y◆RB◆$

By CR: $u_y + iv_y = -v_x + iu_x = i(u_x + iv_x)$. Substituting:

$= (u_x + iv_x)\frac◆LB◆\Delta x + i\Delta y◆RB◆◆LB◆\Delta x + i\Delta y◆RB◆ + \frac◆LB◆o(|\Delta z|)◆RB◆◆LB◆\Delta z◆RB◆ \to u_x + iv_x$

As $\Delta z \to 0$. $\blacksquare$

### 3.3 The Derivative in Terms of Partial Derivatives

When the Cauchy-Riemann equations hold:

$$f'(z) = \frac◆LB◆\partial u◆RB◆◆LB◆\partial x◆RB◆ + i\frac◆LB◆\partial v◆RB◆◆LB◆\partial x◆RB◆ = \frac◆LB◆\partial v◆RB◆◆LB◆\partial y◆RB◆ - i\frac◆LB◆\partial u◆RB◆◆LB◆\partial y◆RB◆$$

### 3.4 Harmonic Functions

**Definition.** A real-valued function $\phi(x, y)$ is **harmonic** if $\phi_◆LB◆xx◆RB◆ + \phi_◆LB◆yy◆RB◆ = 0$
(Laplace's equation).

**Proposition 3.3.** If $f = u + iv$ is analytic, then $u$ and $v$ are harmonic.

_Proof._ From the Cauchy-Riemann equations: $u_x = v_y$ and $u_y = -v_x$. Differentiating:
$u_◆LB◆xx◆RB◆ = v_◆LB◆yx◆RB◆$ and $u_◆LB◆yy◆RB◆ = -v_◆LB◆xy◆RB◆$. By equality of mixed partials,
$u_◆LB◆xx◆RB◆ + u_◆LB◆yy◆RB◆ = v_◆LB◆yx◆RB◆ - v_◆LB◆xy◆RB◆ = 0$. Similarly for $v$. $\blacksquare$

**Definition.** If $u$ and $v$ are harmonic on $U$ and satisfy the Cauchy-Riemann equations, then
$v$ is the **harmonic conjugate** of $u$.

**Proposition 3.4.** If $U$ is a connected domain and $u$ is harmonic on $U$Then $u$ has A harmonic
conjugate on $U$Unique up to an additive constant.

_Proof._ Define $v(x, y) = \int_◆LB◆(x_0, y_0)◆RB◆^◆LB◆(x, y)◆RB◆ (-u_y\, dx + u_x\, dy)$. The integrand is
closed (since $(-u_y)_y = -u_◆LB◆yy◆RB◆ = u_◆LB◆xx◆RB◆ = (u_x)_x$) and since $U$ is Connected, $v$ is
well-defined (path-independent) by Green's theorem. Then $v_x = -u_y$ and $v_y = u_x$Which are the
CR equations. $\blacksquare$

<details>
<summary>Solution</summary>

**Problem.** Find the harmonic conjugate of $u(x, y) = x^3 - 3xy^2$.

Verify $u$ is harmonic: $u_◆LB◆xx◆RB◆ = 6x$, $u_◆LB◆yy◆RB◆ = -6x$So $u_◆LB◆xx◆RB◆ + u_◆LB◆yy◆RB◆ = 0$. $\checkmark$

By CR: $v_y = u_x = 3x^2 - 3y^2$So $v = 3x^2 y - y^3 + g(x)$. Also $v_x = -u_y = 6xy$So
$6xy = 6xy + g'(x)$Giving $g'(x) = 0$So $g(x) = C$.

Harmonic conjugate: $v(x, y) = 3x^2 y - y^3 + C$.

_Note:_ $f(z) = u + iv = x^3 - 3xy^2 + i(3x^2 y - y^3) = (x + iy)^3 = z^3$.

**Problem.** Show that $u(x, y) = \ln(x^2 + y^2)$ is harmonic on $\mathbb◆LB◆R◆RB◆^2 \setminus \{0\}$ but
Has no harmonic conjugate on $\mathbb◆LB◆R◆RB◆^2 \setminus \{0\}$.

$u_x = \frac◆LB◆2x◆RB◆◆LB◆x^2 + y^2◆RB◆$, $u_◆LB◆xx◆RB◆ = \frac◆LB◆2(y^2 - x^2)◆RB◆◆LB◆(x^2 + y^2)^2◆RB◆$.
$u_y = \frac◆LB◆2y◆RB◆◆LB◆x^2 + y^2◆RB◆$, $u_◆LB◆yy◆RB◆ = \frac◆LB◆2(x^2 - y^2)◆RB◆◆LB◆(x^2 + y^2)^2◆RB◆$. $\Delta u = 0$.
$\checkmark$

However,
$\oint_◆LB◆|z|=1◆RB◆ (-u_y\, dx + u_x\, dy) = \oint_◆LB◆|z|=1◆RB◆ \frac◆LB◆-y\, dx + x\, dy◆RB◆◆LB◆x^2 + y^2◆RB◆
= \int_0^◆LB◆2\pi◆RB◆ 1\, d\theta = 2\pi \neq 0$.

Since $\mathbb◆LB◆R◆RB◆^2 \setminus \{0\}$ is not connected and this integral is non-zero, no Harmonic
conjugate exists on this domain.

</details>

### 3.5 Worked Examples: Verifying CR Equations

<details>
<summary>Solution</summary>

**Problem.** Verify that $f(z) = e^z$ satisfies the Cauchy-Riemann equations and find $f'(z)$.

_Solution._ $e^z = e^◆LB◆x+iy◆RB◆ = e^x(\cos y + i\sin y)$. So $u = e^x \cos y$ and $v = e^x \sin y$.

$u_x = e^x \cos y$$u_y = -e^x \sin y$$v_x = e^x \sin y$$v_y = e^x \cos y$.

Cauchy-Riemann: $u_x = e^x \cos y = v_y$ and $u_y = -e^x \sin y = -v_x$. Both satisfied.

$f'(z) = u_x + iv_x = e^x \cos y + ie^x \sin y = e^z$. $\blacksquare$

**Problem.** Verify CR for $f(z) = \sin z$ and find $f'(z)$.

$\sin z = \sin(x + iy) = \sin x \cosh y + i\cos x \sinh y$.

$u = \sin x \cosh y$$v = \cos x \sinh y$.

$u_x = \cos x \cosh y$$u_y = \sin x \sinh y$. $v_x = -\sin x \sinh y$$v_y = \cos x \cosh y$.

CR: $u_x = \cos x \cosh y = v_y$ $\checkmark$ and $u_y = \sin x \sinh y = -v_x$ $\checkmark$.

$f'(z) = u_x + iv_x = \cos x \cosh y - i\sin x \sinh y = \cos z$. $\blacksquare$

**Problem.** Show $f(z) = \frac◆LB◆1◆RB◆◆LB◆z◆RB◆$ satisfies CR on $\mathbb◆LB◆C◆RB◆ \setminus \{0\}$.

$\frac◆LB◆1◆RB◆◆LB◆z◆RB◆ = \frac◆LB◆\bar◆LB◆z◆RB◆◆RB◆◆LB◆|z|^2◆RB◆ = \frac◆LB◆x - iy◆RB◆◆LB◆x^2 + y^2◆RB◆$.

$u = \frac◆LB◆x◆RB◆◆LB◆x^2 + y^2◆RB◆$$v = \frac◆LB◆-y◆RB◆◆LB◆x^2 + y^2◆RB◆$.

$u_x = \frac◆LB◆y^2 - x^2◆RB◆◆LB◆(x^2 + y^2)^2◆RB◆$$v_y = \frac◆LB◆y^2 - x^2◆RB◆◆LB◆(x^2 + y^2)^2◆RB◆$. So $u_x = v_y$.
$\checkmark$

$u_y = \frac◆LB◆-2xy◆RB◆◆LB◆(x^2 + y^2)^2◆RB◆$$v_x = \frac◆LB◆2xy◆RB◆◆LB◆(x^2 + y^2)^2◆RB◆$. So $u_y = -v_x$. $\checkmark$

$f'(z) = u_x + iv_x = \frac◆LB◆-(x^2 - y^2 + 2ixy)◆RB◆◆LB◆(x^2 + y^2)^2◆RB◆ = \frac◆LB◆-1◆RB◆◆LB◆z^2◆RB◆$. $\blacksquare$

</details>

## 4. Complex Integration

### 4.1 Contours

A **contour** (or piecewise smooth path) in $\mathbb◆LB◆C◆RB◆$ is a continuous function
$\gamma : [a, b] \to \mathbb◆LB◆C◆RB◆$ that is differentiable except at finitely many points, with a
Continuous derivative everywhere it exists.

A **simple closed contour** is a contour with $\gamma(a) = \gamma(b)$ and no other
Self-intersections.

### 4.2 The Complex Integral

**Definition.** For a contour $\gamma$ and a continuous function $f$ on $\gamma$:

$$\int_◆LB◆\gamma◆RB◆ f(z)\, dz = \int_a^b f(\gamma(t))\gamma'(t)\, dt$$

### 4.3 Basic Properties

**Proposition 4.1.** The complex integral is linear:

$$\int_\gamma (af + bg)\, dz = a\int_\gamma f\, dz + b\int_\gamma g\, dz$$

**Proposition 4.2.** Reversing orientation changes the sign:

$$\int_◆LB◆-\gamma◆RB◆ f\, dz = -\int_\gamma f\, dz$$

**Proposition 4.3.** Additivity over contours:

$$\int_◆LB◆\gamma_1 + \gamma_2◆RB◆ f\, dz = \int_◆LB◆\gamma_1◆RB◆ f\, dz + \int_◆LB◆\gamma_2◆RB◆ f\, dz$$

### 4.4 ML Inequality

**Proposition 4.4 (ML Inequality).** If $|f(z)| \leq M$ for all $z$ on a contour $\gamma$ of length
$L$Then

$$\left|\int_\gamma f(z)\, dz\right| \leq ML$$

_Proof._
$\left|\int_a^b f(\gamma(t))\gamma'(t)\, dt\right| \leq \int_a^b |f(\gamma(t))||\gamma'(t)|\, dt
\leq M \int_a^b |\gamma'(t)|\, dt = ML$.
$\blacksquare$

### 4.5 Worked Examples: Contour Integrals

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma z^2\, dz$ where $\gamma$ is the line segment from $0$ to $1 + i$.

_Solution._ Parameterize $\gamma(t) = t(1 + i)$ for $0 \leq t \leq 1$. Then $\gamma'(t) = 1 + i$.

$\int_\gamma z^2\, dz = \int_0^1 (t(1+i))^2 (1+i)\, dt = (1+i)^3 \int_0^1 t^2\, dt = (1+i)^3 \cdot \frac◆LB◆1◆RB◆◆LB◆3◆RB◆$

$(1+i)^3 = (1+i)(1+i)^2 = (1+i)(2i) = 2i + 2i^2 = 2i - 2 = -2 + 2i$.

$\int_\gamma z^2\, dz = \frac◆LB◆-2 + 2i◆RB◆◆LB◆3◆RB◆$. $\blacksquare$

**Problem.** Evaluate $\int_\gamma \bar◆LB◆z◆RB◆\, dz$ where $\gamma$ is the unit circle traversed once
Counterclockwise.

$\gamma(t) = e^◆LB◆it◆RB◆$$0 \leq t \leq 2\pi$$\gamma'(t) = ie^◆LB◆it◆RB◆$. $\bar◆LB◆z◆RB◆ = e^◆LB◆-it◆RB◆$ on $\gamma$.

$\int_\gamma \bar◆LB◆z◆RB◆\, dz = \int_0^◆LB◆2\pi◆RB◆ e^◆LB◆-it◆RB◆ \cdot ie^◆LB◆it◆RB◆\, dt = \int_0^◆LB◆2\pi◆RB◆ i\, dt = 2\pi i$.

_Note:_ Since $\bar◆LB◆z◆RB◆$ is not analytic, this result is non-zero, as expected.

**Problem.** Evaluate $\int_\gamma \frac◆LB◆dz◆RB◆◆LB◆z◆RB◆$ where $\gamma$ is the upper semicircle
$z = e^◆LB◆i\theta◆RB◆$$0 \leq \theta \leq \pi$.

$\int_0^\pi \frac◆LB◆ie^◆LB◆i\theta◆RB◆◆RB◆◆LB◆e^◆LB◆i\theta◆RB◆◆RB◆\, d\theta = \int_0^\pi i\, d\theta = i\pi$.

**Problem.** Evaluate $\int_\gamma z\, dz$ where $\gamma$ consists of the line segment from $0$ to
$1$ followed by the line segment from $1$ to $1 + i$.

$\gamma_1(t) = t$$0 \leq t \leq 1$: $\int_0^1 t \cdot 1\, dt = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆$.

$\gamma_2(t) = 1 + it$$0 \leq t \leq 1$:
$\int_0^1 (1 + it) \cdot i\, dt = \int_0^1 (i - t)\, dt = i - \frac◆LB◆1◆RB◆◆LB◆2◆RB◆$.

Total: $\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ + i - \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ = i$.

Check: Since $z$ is entire, the integral from $0$ to $1 + i$ is $\frac◆LB◆1◆RB◆◆LB◆2◆RB◆(1+i)^2 = i$.
Consistent. $\blacksquare$

</details>

### 4.6 ML Inequality Applications

<details>
<summary>Solution</summary>

**Problem.** Use the ML inequality to show that
$\lim_◆LB◆R \to \infty◆RB◆ \int_◆LB◆C_R◆RB◆ \frac◆LB◆e^◆LB◆iz◆RB◆◆RB◆◆LB◆z◆RB◆\, dz = 0$ Where $C_R$ is the upper semicircle
$|z| = R$$\mathrm◆LB◆Im(z) \geq 0$.

On $C_R$: $z = Re^◆LB◆i\theta◆RB◆$$0 \leq \theta \leq \pi$.
$|e^◆LB◆iz◆RB◆| = |e^◆LB◆iR(\cos\theta + i\sin\theta)◆RB◆| = e^◆LB◆-R\sin\theta◆RB◆$.

$\left|\int_◆LB◆C_R◆RB◆ \frac◆LB◆e^◆LB◆iz◆RB◆◆RB◆◆LB◆z◆RB◆\, dz\right| \leq \int_0^\pi \frac◆LB◆e^◆LB◆-R\sin\theta◆RB◆◆RB◆◆LB◆R◆RB◆ \cdot R\, d\theta
= \int_0^\pi e^◆LB◆-R\sin\theta◆RB◆\, d\theta$.

By Jordan's inequality $\sin\theta \geq \frac◆LB◆2\theta◆RB◆◆LB◆\pi◆RB◆$ for $\theta \in [0, \pi/2]$:

$\leq 2\int_0^◆LB◆\pi/2◆RB◆ e^◆LB◆-2R\theta/\pi◆RB◆\, d\theta = \frac◆LB◆\pi◆RB◆◆LB◆R◆RB◆(1 - e^◆LB◆-R◆RB◆) \to 0$ as
$R \to \infty$. $\blacksquare$

**Problem.** Bound $\left|\int_\gamma \frac◆LB◆dz◆RB◆◆LB◆z^2 + 4◆RB◆\right|$ where $\gamma$ is $|z| = 3$.

On $\gamma$: $|z^2 + 4| \geq |z|^2 - 4 = 9 - 4 = 5$ (reverse triangle inequality). So
$\left|\frac◆LB◆1◆RB◆◆LB◆z^2 + 4◆RB◆\right| \leq \frac◆LB◆1◆RB◆◆LB◆5◆RB◆$.

Length of $\gamma$: $L = 2\pi \cdot 3 = 6\pi$.

$\left|\int_\gamma \frac◆LB◆dz◆RB◆◆LB◆z^2 + 4◆RB◆\right| \leq \frac◆LB◆1◆RB◆◆LB◆5◆RB◆ \cdot 6\pi = \frac◆LB◆6\pi◆RB◆◆LB◆5◆RB◆$.

</details>

### 4.7 Antiderivative Method

When $f$ is analytic on a connected domain and has a known antiderivative $F$ with $F' = f$:

$$\int_\gamma f(z)\, dz = F(\gamma(b)) - F(\gamma(a))$$

This follows from the fundamental theorem of calculus applied to $F(\gamma(t))$.

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma \cos z\, dz$ where $\gamma$ is any path from $0$ to $\pi + i$.

Since $\cos z$ is entire with antiderivative $\sin z$:

$\int_\gamma \cos z\, dz = \sin(\pi + i) - \sin(0) = \sin(\pi + i)$.

$\sin(\pi + i) = \sin\pi\cosh 1 + i\cos\pi\sinh 1 = -i\sinh 1$.

So the integral equals $-i\sinh 1$.

**Problem.** Evaluate $\int_\gamma e^◆LB◆2z◆RB◆\, dz$ where $\gamma$ is any path from $1$ to $i$.

Antiderivative: $\frac◆LB◆1◆RB◆◆LB◆2◆RB◆e^◆LB◆2z◆RB◆$.

$\int_\gamma e^◆LB◆2z◆RB◆\, dz = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(e^◆LB◆2i◆RB◆ - e^◆LB◆2◆RB◆)$.

</details>

## 5. Cauchy's Theorem

### 5.1 Statement

**Theorem 5.1 (Cauchy's Theorem).** If $f$ is analytic on a connected domain $D$ and $\gamma$ Is a
simple closed contour in $D$Then

$$\int_\gamma f(z)\, dz = 0$$

_Proof (for $f'$ continuous)._ By Green's theorem in the plane, writing $f = u + iv$:

$$\int_\gamma f\, dz = \int_\gamma (u\, dx - v\, dy) + i\int_\gamma (v\, dx + u\, dy)$$

Applying Green's theorem to each integral:

$= \iint_D (-v_x - u_y)\, dA + i\iint_D (u_x - v_y)\, dA = 0$

By the Cauchy-Riemann equations. $\blacksquare$

### 5.2 Connected Domains

A domain $D \subseteq \mathbb◆LB◆C◆RB◆$ is ** connected** if every simple closed contour in $D$ can Be
continuously shrunk to a point within $D$.

**Cauchy's theorem may fail on multiply connected domains.** For example,
$\int_\gamma \frac◆LB◆1◆RB◆◆LB◆z◆RB◆\, dz = 2\pi i$ where $\gamma$ is the unit circle (traversing a region that
Excludes the singularity at $z = 0$).

### 5.3 Path Independence

**Corollary 5.2.** If $f$ is analytic on a connected domain $D$Then the integral
$\int_◆LB◆z_0◆RB◆^◆LB◆z_1◆RB◆ f(z)\, dz$ is independent of the path from $z_0$ to $z_1$ in $D$.

### 5.4 Antiderivatives

**Theorem 5.3.** If $f$ is analytic on a connected domain $D$Then $f$ has an antiderivative $F$ in
$D$ (i.e., $F'(z) = f(z)$), and

$$\int_\gamma f(z)\, dz = F(z_1) - F(z_0)$$

Where $z_0$ and $z_1$ are the endpoints of $\gamma$.

### 5.5 Cauchy's Theorem for Multiply Connected Domains

**Theorem 5.4.** If $f$ is analytic on a domain $D$ containing simple closed contours
$\gamma, \gamma_1, \ldots, \gamma_n$ where $\gamma_1, \ldots, \gamma_n$ Lie in the interior of
$\gamma$ and the region between $\gamma$ and the $\gamma_k$ is contained in $D$ And all contours are
positively oriented, then

$$\int_\gamma f(z)\, dz = \sum_◆LB◆k=1◆RB◆^n \int_◆LB◆\gamma_k◆RB◆ f(z)\, dz$$

### 5.6 Deformation of Contours

**Theorem 5.5 (Deformation of Contours).** If $f$ is analytic on a domain containing two simple
Closed contours $\gamma_1$ and $\gamma_2$ where one can be continuously deformed into the other
Within the domain of analyticity of $f$Then

$$\int_◆LB◆\gamma_1◆RB◆ f(z)\, dz = \int_◆LB◆\gamma_2◆RB◆ f(z)\, dz$$

_Proof._ This follows directly from Theorem 5.4 applied to the region between $\gamma_1$ and
$\gamma_2$. $\blacksquare$

_Remark._ This theorem is enormously useful: we can replace a complicated contour with a simpler one
(a small circle around each singularity) without changing the value of the integral.

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma \frac◆LB◆dz◆RB◆◆LB◆z - 2◆RB◆$ where $\gamma$ is the ellipse
$\frac◆LB◆x^2◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆y^2◆RB◆◆LB◆9◆RB◆ = 1$.

Since $z = 2$ is inside the ellipse and $\frac◆LB◆1◆RB◆◆LB◆z - 2◆RB◆$ is analytic everywhere else, By
deformation of contours we can replace $\gamma$ with a small circle around $z = 2$:

$\int_\gamma \frac◆LB◆dz◆RB◆◆LB◆z - 2◆RB◆ = 2\pi i$.

**Problem.** Evaluate $\int_\gamma \frac◆LB◆e^z◆RB◆◆LB◆z◆RB◆\, dz$ where $\gamma$ is the square with vertices
$\pm 2 \pm 2i$.

$\frac◆LB◆e^z◆RB◆◆LB◆z◆RB◆$ is analytic on and inside $\gamma$ except at $z = 0$. By deformation:
$\int_\gamma \frac◆LB◆e^z◆RB◆◆LB◆z◆RB◆\, dz = \int_◆LB◆|z|=r◆RB◆ \frac◆LB◆e^z◆RB◆◆LB◆z◆RB◆\, dz = 2\pi i \cdot e^0 = 2\pi i$.

**Problem.** Evaluate $\int_\gamma \frac◆LB◆dz◆RB◆◆LB◆z^2 - 1◆RB◆$ where $\gamma$ is $|z| = 2$.

$\frac◆LB◆1◆RB◆◆LB◆z^2 - 1◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆z-1◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆z+1◆RB◆\right)$.

Both $z = \pm 1$ are inside $|z| = 2$.

$\int_\gamma \frac◆LB◆dz◆RB◆◆LB◆z^2 - 1◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(2\pi i - 2\pi i) = 0$.

</details>

## 6. Cauchy's Integral Formula

### 6.1 Statement

**Theorem 6.1 (Cauchy's Integral Formula).** If $f$ is analytic on a connected domain Containing a
simple closed positively oriented contour $\gamma$And $z_0$ is inside $\gamma$Then

$$f(z_0) = \frac◆LB◆1◆RB◆◆LB◆2\pi i◆RB◆\int_\gamma \frac◆LB◆f(z)◆RB◆◆LB◆z - z_0◆RB◆\, dz$$

_Proof._ Let $\gamma_\varepsilon$ be a small circle of radius $\varepsilon$ around $z_0$. Since
$\frac◆LB◆f(z)◆RB◆◆LB◆z - z_0◆RB◆$ is analytic on the region between $\gamma$ and $\gamma_\varepsilon$

$\int_\gamma \frac◆LB◆f(z)◆RB◆◆LB◆z - z_0◆RB◆\, dz = \int_◆LB◆\gamma_\varepsilon◆RB◆ \frac◆LB◆f(z)◆RB◆◆LB◆z - z_0◆RB◆\, dz$

On $\gamma_\varepsilon$: $f(z) = f(z_0) + (z - z_0)f'(\zeta)$ for some $\zeta$ between $z$ and
$z_0$.

$= \int_◆LB◆\gamma_\varepsilon◆RB◆ \frac◆LB◆f(z_0)◆RB◆◆LB◆z - z_0◆RB◆\, dz + \int_◆LB◆\gamma_\varepsilon◆RB◆ f'(\zeta)\, dz = f(z_0) \cdot 2\pi i + 0$

Since $\int_◆LB◆\gamma_\varepsilon◆RB◆ \frac◆LB◆dz◆RB◆◆LB◆z - z_0◆RB◆ = 2\pi i$ (parameterize
$z = z_0 + \varepsilon e^◆LB◆i\theta◆RB◆$) and $\int_◆LB◆\gamma_\varepsilon◆RB◆ f'(\zeta)\, dz \to 0$ as
$\varepsilon \to 0$ by the ML inequality. $\blacksquare$

### 6.2 Derivatives

**Theorem 6.2 (Cauchy's Integral Formula for Derivatives).** Under the same conditions,

$$f^◆LB◆(n)◆RB◆(z_0) = \frac◆LB◆n!◆RB◆◆LB◆2\pi i◆RB◆\int_\gamma \frac◆LB◆f(z)◆RB◆◆LB◆(z - z_0)^◆LB◆n+1◆RB◆◆RB◆\, dz$$

_Proof._ We proceed by induction. The base case $n = 0$ is Theorem 6.1. For the inductive step,
Assume the formula holds for $n$. Using the difference quotient:

$f^◆LB◆(n+1)◆RB◆(z_0) = \lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆f^◆LB◆(n)◆RB◆(z_0 + h) - f^◆LB◆(n)◆RB◆(z_0)◆RB◆◆LB◆h◆RB◆
= \lim_◆LB◆h \to 0◆RB◆ \frac◆LB◆n!◆RB◆◆LB◆2\pi i◆RB◆\int_\gamma \frac◆LB◆1◆RB◆◆LB◆h◆RB◆\left[\frac◆LB◆f(z)◆RB◆◆LB◆(z - z_0 - h)^◆LB◆n+1◆RB◆◆RB◆ - \frac◆LB◆f(z)◆RB◆◆LB◆(z - z_0)^◆LB◆n+1◆RB◆◆RB◆\right] dz$

$= \frac◆LB◆(n+1)!◆RB◆◆LB◆2\pi i◆RB◆\int_\gamma \frac◆LB◆f(z)◆RB◆◆LB◆(z - z_0)^◆LB◆n+2◆RB◆◆RB◆\, dz$

Where we justified passing the limit inside the integral by uniform convergence of the integrand On
compact subsets. $\blacksquare$

### 6.3 Consequences of Cauchy's Integral Formula

**Corollary 6.3.** If $f$ is analytic, then $f$ is infinitely differentiable.

This is remarkable: a single complex derivative implies the existence of all derivatives.

**Corollary 6.4 (Cauchy's Estimates).** If $f$ is analytic on and inside a circle $|z - z_0| = R$
And $|f(z)| \leq M$ on the circle, then

$$|f^◆LB◆(n)◆RB◆(z_0)| \leq \frac◆LB◆n!M◆RB◆◆LB◆R^n◆RB◆$$

_Proof._ From the integral formula:
$|f^◆LB◆(n)◆RB◆(z_0)| = \frac◆LB◆n!◆RB◆◆LB◆2\pi◆RB◆\left|\int_◆LB◆|z-z_0|=R◆RB◆ \frac◆LB◆f(z)◆RB◆◆LB◆(z-z_0)^◆LB◆n+1◆RB◆◆RB◆\, dz\right|
\leq \frac◆LB◆n!◆RB◆◆LB◆2\pi◆RB◆ \cdot \frac◆LB◆M◆RB◆◆LB◆R^◆LB◆n+1◆RB◆◆RB◆ \cdot 2\pi R = \frac◆LB◆n!M◆RB◆◆LB◆R^n◆RB◆$.
$\blacksquare$

### 6.4 Liouville's Theorem

**Theorem 6.5 (Liouville's Theorem).** Every bounded entire function is constant.

_Proof._ If $|f(z)| \leq M$ for all $z$Then by Cauchy's estimates with $R$ arbitrarily large:
$|f'(z_0)| \leq \frac◆LB◆M◆RB◆◆LB◆R◆RB◆ \to 0$ as $R \to \infty$. So $f'(z) = 0$ for all $z$Meaning $f$ is
Constant. $\blacksquare$

**Corollary 6.6.** If $f$ is entire and $|f(z)| \geq M$ for all $z$ (bounded away from zero), then
$f$ is constant.

_Proof._ $1/f$ is entire and bounded by $1/M$So constant by Liouville. $\blacksquare$

### 6.5 Fundamental Theorem of Algebra

**Theorem 6.7 (Fundamental Theorem of Algebra).** Every non-constant polynomial
$p(z) \in \mathbb◆LB◆C◆RB◆[z]$ has a root in $\mathbb◆LB◆C◆RB◆$.

_Proof._ Suppose $p(z)$ has no root. Then $f(z) = 1/p(z)$ is entire. Since $|p(z)| \to \infty$ as
$|z| \to \infty$, $f(z) \to 0$So $f$ is bounded. By Liouville's theorem, $f$ is constant, so $p$ Is
constant, a contradiction. $\blacksquare$

**Corollary 6.8.** Every polynomial of degree $n \geq 1$ has exactly $n$ roots in $\mathbb◆LB◆C◆RB◆$
Counting multiplicities.

### 6.6 Worked Examples: Cauchy's Integral Formula

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma \frac◆LB◆e^z◆RB◆◆LB◆z - 1◆RB◆\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ The function $\frac◆LB◆e^z◆RB◆◆LB◆z - 1◆RB◆$ has a singularity at $z = 1$Which lies inside $\gamma$.
By Cauchy's integral formula with $f(z) = e^z$ and $z_0 = 1$:

$\int_\gamma \frac◆LB◆e^z◆RB◆◆LB◆z - 1◆RB◆\, dz = 2\pi i \cdot f(1) = 2\pi i \cdot e^1 = 2\pi i e$.
$\blacksquare$

**Problem.** Evaluate $\int_\gamma \frac◆LB◆z^2 + 1◆RB◆◆LB◆(z - i)^3◆RB◆\, dz$ where $\gamma$ is $|z| = 2$.

By Cauchy's formula for derivatives with $f(z) = z^2 + 1$ and $z_0 = i$:

$\int_\gamma \frac◆LB◆f(z)◆RB◆◆LB◆(z - i)^3◆RB◆\, dz = \frac◆LB◆2\pi i◆RB◆◆LB◆2!◆RB◆\,f''(i)$.

$f'(z) = 2z$, $f''(z) = 2$. So $f''(i) = 2$.

$\int_\gamma \frac◆LB◆z^2 + 1◆RB◆◆LB◆(z - i)^3◆RB◆\, dz = \frac◆LB◆2\pi i◆RB◆◆LB◆2◆RB◆ \cdot 2 = 2\pi i$. $\blacksquare$

**Problem.** Evaluate $\int_\gamma \frac◆LB◆\sin z◆RB◆◆LB◆z(z - \pi)◆RB◆\, dz$ where $\gamma$ is $|z| = 4$.

Singularities inside $\gamma$: $z = 0$ and $z = \pi$.

$\frac◆LB◆\sin z◆RB◆◆LB◆z(z - \pi)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆\left(\frac◆LB◆\sin z◆RB◆◆LB◆z - \pi◆RB◆ - \frac◆LB◆\sin z◆RB◆◆LB◆z◆RB◆\right)$.

At $z = 0$: by CIF, $\int_\gamma \frac◆LB◆\sin z◆RB◆◆LB◆z◆RB◆\, dz = 2\pi i \cdot \sin(0) = 0$. At $z = \pi$: by
CIF, $\int_\gamma \frac◆LB◆\sin z◆RB◆◆LB◆z - \pi◆RB◆\, dz = 2\pi i \cdot \sin(\pi) = 0$.

$\int_\gamma \frac◆LB◆\sin z◆RB◆◆LB◆z(z - \pi)◆RB◆\, dz = \frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆(0 - 0) = 0$.

**Problem.** Evaluate $\int_\gamma \frac◆LB◆e^◆LB◆2z◆RB◆◆RB◆◆LB◆(z - 1)^2(z + 1)◆RB◆\, dz$ where $\gamma$ is
$|z| = 3$.

By partial fractions:
$\frac◆LB◆1◆RB◆◆LB◆(z-1)^2(z+1)◆RB◆ = \frac◆LB◆1/4◆RB◆◆LB◆z+1◆RB◆ - \frac◆LB◆1/4◆RB◆◆LB◆z-1◆RB◆ + \frac◆LB◆1/2◆RB◆◆LB◆(z-1)^2◆RB◆$.

$\int_\gamma \frac◆LB◆e^◆LB◆2z◆RB◆◆RB◆◆LB◆(z-1)^2(z+1)◆RB◆\, dz = \frac◆LB◆1◆RB◆◆LB◆4◆RB◆ \cdot 2\pi i \cdot e^◆LB◆-2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆4◆RB◆ \cdot 2\pi i \cdot e^2 + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆2\pi i◆RB◆◆LB◆1!◆RB◆ \cdot 2e^2$

$= \frac◆LB◆\pi i e^◆LB◆-2◆RB◆◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆\pi i e^2◆RB◆◆LB◆2◆RB◆ + 2\pi i e^2 = \frac◆LB◆\pi i e^◆LB◆-2◆RB◆◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆3\pi i e^2◆RB◆◆LB◆2◆RB◆$.

</details>

## 7. Taylor and Laurent Series

### 7.1 Taylor Series

**Theorem 7.1.** If $f$ is analytic on $|z - z_0| \lt R$Then

$$f(z) = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆f^◆LB◆(n)◆RB◆(z_0)◆RB◆◆LB◆n!◆RB◆(z - z_0)^n$$

And the series converges uniformly on compact subsets of $|z - z_0| \lt R$.

_Proof._ For $|z - z_0| \lt r \lt R$Apply Cauchy's integral formula on $|\zeta - z_0| = r$:

$f(z) = \frac◆LB◆1◆RB◆◆LB◆2\pi i◆RB◆\int_◆LB◆|\zeta - z_0| = r◆RB◆ \frac◆LB◆f(\zeta)◆RB◆◆LB◆\zeta - z◆RB◆\, d\zeta$

Write
$\frac◆LB◆1◆RB◆◆LB◆\zeta - z◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆(\zeta - z_0) - (z - z_0)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\zeta - z_0◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆1 - (z - z_0)/(\zeta - z_0)◆RB◆$
$= \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(z - z_0)^n◆RB◆◆LB◆(\zeta - z_0)^◆LB◆n+1◆RB◆◆RB◆$ (geometric series, convergent since
$|z - z_0|/|\zeta - z_0| \lt 1$).

Substituting and integrating term by term gives the Taylor series. $\blacksquare$

_Remark._ The radius of convergence $R$ is the distance from $z_0$ to the nearest singularity of
$f$.

### 7.2 Common Taylor Series

$$e^z = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆z^n◆RB◆◆LB◆n!◆RB◆ = 1 + z + \frac◆LB◆z^2◆RB◆◆LB◆2!◆RB◆ + \cdots$$

$$\sin z = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^n z^◆LB◆2n+1◆RB◆◆RB◆◆LB◆(2n+1)!◆RB◆$$

$$\cos z = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^n z^◆LB◆2n◆RB◆◆RB◆◆LB◆(2n)!◆RB◆$$

$$\frac◆LB◆1◆RB◆◆LB◆1 - z◆RB◆ = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ z^n, \quad |z| \lt 1$$

$$\ln(1 + z) = \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^◆LB◆n+1◆RB◆ z^n◆RB◆◆LB◆n◆RB◆, \quad |z| \lt 1$$

### 7.3 Worked Examples: Taylor Series

<details>
<summary>Solution</summary>

**Problem.** Find the Taylor series of $f(z) = \frac◆LB◆1◆RB◆◆LB◆z◆RB◆$ centered at $z_0 = 1$.

$\frac◆LB◆1◆RB◆◆LB◆z◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆1 + (z - 1)◆RB◆ = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ (-1)^n (z - 1)^n$ for $|z - 1| \lt 1$.

Radius of convergence: distance from $z_0 = 1$ to the singularity at $z = 0$Which is $1$.

**Problem.** Find the Taylor series of $f(z) = \frac◆LB◆1◆RB◆◆LB◆(1 - z)^2◆RB◆$ centered at $z_0 = 0$.

$\frac◆LB◆1◆RB◆◆LB◆(1-z)^2◆RB◆ = \frac◆LB◆d◆RB◆◆LB◆dz◆RB◆\left[\frac◆LB◆1◆RB◆◆LB◆1 - z◆RB◆\right] = \frac◆LB◆d◆RB◆◆LB◆dz◆RB◆\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ z^n
= \sum_◆LB◆n=1◆RB◆^◆LB◆\infty◆RB◆ nz^◆LB◆n-1◆RB◆ = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ (n+1)z^n$
for $|z| \lt 1$.

**Problem.** Find the Taylor series of $f(z) = e^z \sin z$ up to the $z^4$ term.

$e^z = 1 + z + z^2/2 + z^3/6 + z^4/24 + \cdots$ $\sin z = z - z^3/6 + z^5/120 - \cdots$

$e^z \sin z = (1 + z + z^2/2 + z^3/6 + z^4/24 + \cdots)(z - z^3/6 + \cdots)$

$= z + z^2 + z^3/2 + z^4/6 + \cdots - z^3/6 - z^4/6 + \cdots$ $= z + z^2 + z^3/3 - z^4/30 + \cdots$

</details>

### 7.4 Laurent Series

**Theorem 7.2 (Laurent Series).** If $f$ is analytic on the annulus $r \lt |z - z_0| \lt R$ Then

$$f(z) = \sum_◆LB◆n=-\infty◆RB◆^◆LB◆\infty◆RB◆ a_n(z - z_0)^n = \cdots + \frac◆LB◆a_◆LB◆-2◆RB◆◆RB◆◆LB◆(z - z_0)^2◆RB◆ + \frac◆LB◆a_◆LB◆-1◆RB◆◆RB◆◆LB◆z - z_0◆RB◆ + a_0 + a_1(z - z_0) + \cdots$$

Where

$$a_n = \frac◆LB◆1◆RB◆◆LB◆2\pi i◆RB◆\int_\gamma \frac◆LB◆f(z)◆RB◆◆LB◆(z - z_0)^◆LB◆n+1◆RB◆◆RB◆\, dz$$

For any simple closed contour $\gamma$ in the annulus encircling $z_0$.

The **principal part** is $\sum_◆LB◆n=-\infty◆RB◆^◆LB◆-1◆RB◆ a_n(z - z_0)^n$ (negative powers). The **analytic
Part** is $\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ a_n(z - z_0)^n$ (non-negative powers).

### 7.5 Classification of Laurent Series

The Laurent series expansion depends on the annulus of convergence. A function may have different
Laurent expansions in different annuli.

**Proposition 7.3.** The Laurent series expansion of $f$ in an annulus is unique.

### 7.6 Worked Examples: Laurent Series

<details>
<summary>Solution</summary>

**Problem.** Find the Laurent series of $f(z) = \frac◆LB◆1◆RB◆◆LB◆z(z-1)◆RB◆$ in $0 \lt |z| \lt 1$.

_Solution._ Using partial fractions: $\frac◆LB◆1◆RB◆◆LB◆z(z-1)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆z-1◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆z◆RB◆$.

In $|z| \lt 1$: $\frac◆LB◆1◆RB◆◆LB◆z - 1◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆1 - z◆RB◆ = -\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ z^n$.

So $f(z) = -\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ z^n - \frac◆LB◆1◆RB◆◆LB◆z◆RB◆ = \cdots - z^2 - z - 1 - \frac◆LB◆1◆RB◆◆LB◆z◆RB◆$.

The principal part is $-1/z$So $z = 0$ is a simple pole. $\blacksquare$

**Problem.** Find the Laurent series of $f(z) = \frac◆LB◆1◆RB◆◆LB◆z(z-1)◆RB◆$ in $1 \lt |z| \lt \infty$.

In $|z| \gt 1$:
$\frac◆LB◆1◆RB◆◆LB◆z - 1◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆z◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆1 - 1/z◆RB◆ = \sum_◆LB◆n=2◆RB◆^◆LB◆\infty◆RB◆ z^◆LB◆-n◆RB◆$.

$f(z) = \sum_◆LB◆n=2◆RB◆^◆LB◆\infty◆RB◆ z^◆LB◆-n◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆z◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆z^2◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆z^3◆RB◆ + \cdots$

**Problem.** Find the Laurent series of $f(z) = \frac◆LB◆e^z◆RB◆◆LB◆z^2◆RB◆$ in $0 \lt |z| \lt \infty$.

$e^z = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆z^n◆RB◆◆LB◆n!◆RB◆$So
$f(z) = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆z^◆LB◆n-2◆RB◆◆RB◆◆LB◆n!◆RB◆
= \frac◆LB◆1◆RB◆◆LB◆z^2◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆z◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ + \frac◆LB◆z◆RB◆◆LB◆6◆RB◆ + \cdots$

Residue at $z = 0$: $a_◆LB◆-1◆RB◆ = 1$.

**Problem.** Find the Laurent series of $f(z) = \frac◆LB◆1◆RB◆◆LB◆z^2(z - 3)◆RB◆$ in $0 \lt |z| \lt 3$.

$\frac◆LB◆1◆RB◆◆LB◆z - 3◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆3◆RB◆\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆z^n◆RB◆◆LB◆3^n◆RB◆$.

$f(z) = -\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆z^◆LB◆n-2◆RB◆◆RB◆◆LB◆3^◆LB◆n+1◆RB◆◆RB◆
= -\frac◆LB◆1◆RB◆◆LB◆3z^2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆9z◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆27◆RB◆ - \frac◆LB◆z◆RB◆◆LB◆81◆RB◆ - \cdots$

Residue at $z = 0$: $a_◆LB◆-1◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆9◆RB◆$.

</details>

### 7.7 Residue at Infinity

**Definition.** The **residue at infinity** of $f$ is defined as

$$\mathrm◆LB◆Res(f, \infty) = -\frac◆LB◆1◆RB◆◆LB◆2\pi i◆RB◆\int_◆LB◆|z|=R◆RB◆ f(z)\, dz$$

For sufficiently large $R$ (enclosing all finite singularities).

**Proposition 7.4.** For a function $f$ with finitely many singularities in $\mathbb◆LB◆C◆RB◆$:

$$\sum_◆LB◆\mathrm◆LB◆all\ finite\  z_k◆RB◆ \mathrm◆LB◆Res(f, z_k) + \mathrm◆LB◆Res(f, \infty) = 0$$

_Proof._ By the residue theorem applied to $|z| = R$ enclosing all finite singularities:

$\int_◆LB◆|z|=R◆RB◆ f\, dz = 2\pi i \sum_◆LB◆\mathrm◆LB◆finite◆RB◆ \mathrm◆LB◆Res(f, z_k)$.

But $\mathrm◆LB◆Res(f, \infty) = -\frac◆LB◆1◆RB◆◆LB◆2\pi i◆RB◆\int_◆LB◆|z|=R◆RB◆ f\, dz$So the sum is zero.
$\blacksquare$

## 8. Singularities and Residue Theory

### 8.1 Isolated Singularities

Let $z_0$ be an isolated singularity of $f$ (i.e., $f$ is analytic in a punctured neighbourhood of
$z_0$).

**Classification by Laurent series:**

1. **Removable singularity**: $a_n = 0$ for all $n \lt 0$. Can be removed by redefining
   $f(z_0) = a_0$.
2. **Pole of order $m$**: $a_◆LB◆-m◆RB◆ \neq 0$ and $a_n = 0$ for $n \lt -m$. The principal part is
   finite.
3. **Essential singularity**: infinitely many non-zero $a_n$ with $n \lt 0$.

**Proposition 8.1 (Riemann's Removable Singularity Theorem).** If $f$ is bounded near $z_0$Then
$z_0$ is a removable singularity.

**Proposition 8.2.** $z_0$ is a pole of order $m$ if and only if $\lim_◆LB◆z \to z_0◆RB◆ (z - z_0)^m f(z)$
Exists and is non-zero.

**Theorem 8.3 (Casorati-Weierstrass).** If $z_0$ is an essential singularity of $f$Then $f$ takes
Values arbitrarily close to any complex number in every neighbourhood of $z_0$.

### 8.2 Classification with Worked Examples

<details>
<summary>Solution</summary>

**Problem.** Classify the singularities of $f(z) = \frac◆LB◆\sin z◆RB◆◆LB◆z◆RB◆$.

$z = 0$: $\sin z = z - z^3/6 + \cdots$So $f(z) = 1 - z^2/6 + \cdots$. No negative powers, so $z = 0$
is a removable singularity. $f(0) = 1$ by continuity.

**Problem.** Classify the singularities of $f(z) = \frac◆LB◆e^z - 1◆RB◆◆LB◆z^2◆RB◆$.

$z = 0$: $e^z - 1 = z + z^2/2 + \cdots$So $f(z) = \frac◆LB◆1◆RB◆◆LB◆z◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ + \cdots$. Principal
part is $1/z$So $z = 0$ is a simple pole with residue $1$.

**Problem.** Classify the singularity of $f(z) = e^◆LB◆1/z◆RB◆$ at $z = 0$.

$e^◆LB◆1/z◆RB◆ = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n!\, z^n◆RB◆ = 1 + \frac◆LB◆1◆RB◆◆LB◆z◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆2z^2◆RB◆ + \cdots$

Infinitely many negative powers $\Rightarrow$ $z = 0$ is an essential singularity.

**Problem.** Classify the singularities of $f(z) = \frac◆LB◆z + 1◆RB◆◆LB◆z^3(z^2 + 1)◆RB◆$.

$z = 0$: pole of order $3$. $z = i$: simple pole. $z = -i$: simple pole.

**Problem.** Determine the type of singularity of $f(z) = \frac◆LB◆z◆RB◆◆LB◆\sin z◆RB◆$ at $z = 0$.

$\sin z = z - z^3/6 + \cdots$So $f(z) = \frac◆LB◆1◆RB◆◆LB◆1 - z^2/6 + \cdots◆RB◆
= 1 + \frac◆LB◆z^2◆RB◆◆LB◆6◆RB◆ + \cdots$.

No negative powers, so $z = 0$ is a removable singularity with $f(0) = 1$.

</details>

### 8.3 Definition of the Residue

**Definition.** The **residue** of $f$ at an isolated singularity $z_0$ is the coefficient $a_◆LB◆-1◆RB◆$
In the Laurent expansion:

$$\mathrm◆LB◆Res(f, z_0) = a_◆LB◆-1◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2\pi i◆RB◆\int_\gamma f(z)\, dz$$

Where $\gamma$ is a small positively oriented circle around $z_0$.

### 8.4 Computing Residues

**For a simple pole at $z_0$:**

$$\mathrm◆LB◆Res(f, z_0) = \lim_◆LB◆z \to z_0◆RB◆ (z - z_0)f(z)$$

If $f = g/h$ where $g(z_0) \neq 0$$h(z_0) = 0$$h'(z_0) \neq 0$:

$$\mathrm◆LB◆Res(f, z_0) = \frac◆LB◆g(z_0)◆RB◆◆LB◆h'(z_0)◆RB◆$$

**For a pole of order $m$ at $z_0$:**

$$\mathrm◆LB◆Res(f, z_0) = \frac◆LB◆1◆RB◆◆LB◆(m-1)!◆RB◆\lim_◆LB◆z \to z_0◆RB◆ \frac◆LB◆d^◆LB◆m-1◆RB◆◆RB◆◆LB◆dz^◆LB◆m-1◆RB◆◆RB◆\left[(z - z_0)^m f(z)\right]$$

<details>
<summary>Solution</summary>

**Problem.** Find the residue of $f(z) = \frac◆LB◆z◆RB◆◆LB◆z^2 + 4z + 3◆RB◆$ at each pole.

$z^2 + 4z + 3 = (z + 1)(z + 3)$So simple poles at $z = -1$ and $z = -3$.

At $z = -1$: $\mathrm◆LB◆Res = \lim_◆LB◆z \to -1◆RB◆ \frac◆LB◆z◆RB◆◆LB◆z + 3◆RB◆ = \frac◆LB◆-1◆RB◆◆LB◆2◆RB◆$. At $z = -3$:
$\mathrm◆LB◆Res = \lim_◆LB◆z \to -3◆RB◆ \frac◆LB◆z◆RB◆◆LB◆z + 1◆RB◆ = \frac◆LB◆-3◆RB◆◆LB◆-2◆RB◆ = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆$.

**Problem.** Find the residue of $f(z) = \frac◆LB◆e^z◆RB◆◆LB◆(z - 1)^2(z - 2)◆RB◆$ at each pole.

At $z = 1$ (pole of order $2$):
$\mathrm◆LB◆Res = \frac◆LB◆d◆RB◆◆LB◆dz◆RB◆\left[\frac◆LB◆e^z◆RB◆◆LB◆z - 2◆RB◆\right]_◆LB◆z=1◆RB◆
= \frac◆LB◆e^z(z - 2) - e^z◆RB◆◆LB◆(z-2)^2◆RB◆\Big|_◆LB◆z=1◆RB◆ = \frac◆LB◆-e - e◆RB◆◆LB◆1◆RB◆ = -2e$.

At $z = 2$ (simple pole): $\mathrm◆LB◆Res = \frac◆LB◆e^2◆RB◆◆LB◆(2-1)^2◆RB◆ = e^2$.

</details>

### 8.5 The Residue Theorem

**Theorem 8.4 (Residue Theorem).** If $f$ is analytic inside and on a simple closed positively
Oriented contour $\gamma$ except for isolated singularities $z_1, z_2, \ldots, z_n$ inside $\gamma$
Then

$$\int_\gamma f(z)\, dz = 2\pi i \sum_◆LB◆k=1◆RB◆^◆LB◆n◆RB◆ \mathrm◆LB◆Res(f, z_k)$$

_Proof._ For each singularity $z_k$Draw a small circle $\gamma_k$ around it. By Cauchy's theorem
Applied to the multiply connected region between $\gamma$ and the $\gamma_k$:

$\int_\gamma f\, dz = \sum_◆LB◆k=1◆RB◆^n \int_◆LB◆\gamma_k◆RB◆ f\, dz = \sum_◆LB◆k=1◆RB◆^n 2\pi i \cdot \mathrm◆LB◆Res(f, z_k)$.
$\blacksquare$

### 8.6 Worked Examples: Residue Theorem

<details>
<summary>Solution</summary>

**Problem 1.** Evaluate $\int_\gamma \frac◆LB◆e^z◆RB◆◆LB◆z(z-1)^2◆RB◆\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ Singularities inside $\gamma$: $z = 0$ (simple pole) and $z = 1$ (pole of order $2$).

At $z = 0$: $\mathrm◆LB◆Res = \lim_◆LB◆z \to 0◆RB◆ \frac◆LB◆e^z◆RB◆◆LB◆(z-1)^2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆(-1)^2◆RB◆ = 1$.

At $z = 1$:
$\mathrm◆LB◆Res(f, 1) = \frac◆LB◆d◆RB◆◆LB◆dz◆RB◆\left[(z-1)^2 \cdot \frac◆LB◆e^z◆RB◆◆LB◆z(z-1)^2◆RB◆\right]_◆LB◆z=1◆RB◆ = \frac◆LB◆d◆RB◆◆LB◆dz◆RB◆\left[\frac◆LB◆e^z◆RB◆◆LB◆z◆RB◆\right]_◆LB◆z=1◆RB◆ = \frac◆LB◆e^z \cdot z - e^z◆RB◆◆LB◆z^2◆RB◆\Big|_◆LB◆z=1◆RB◆ = \frac◆LB◆e - e◆RB◆◆LB◆1◆RB◆ = 0$.

$\int_\gamma f\, dz = 2\pi i(1 + 0) = 2\pi i$. $\blacksquare$

**Problem 2.** Evaluate $\int_\gamma \frac◆LB◆1◆RB◆◆LB◆z^4 + 1◆RB◆\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ The poles are the fourth roots of $-1$: $z_k = e^◆LB◆i\pi/4 + ik\pi/2◆RB◆$ for
$k = 0, 1, 2, 3$. All four lie inside $|z| = 2$.

Each is a simple pole with $\mathrm◆LB◆Res(f, z_k) = \frac◆LB◆1◆RB◆◆LB◆4z_k^3◆RB◆$. Since $z_k^4 = -1$:
$z_k^◆LB◆-3◆RB◆ = -z_k$So the sum equals $-\frac◆LB◆1◆RB◆◆LB◆4◆RB◆\sum z_k = 0$.

$\int_\gamma \frac◆LB◆dz◆RB◆◆LB◆z^4 + 1◆RB◆ = 2\pi i \cdot 0 = 0$. $\blacksquare$

</details>

## 9. Applications of Contour Integration

### 9.1 Evaluation of Real Integrals

Contour integration is a powerful tool for evaluating definite integrals.

### 9.2 Integrals of Rational Functions over the Real Line

**Theorem 9.1.** If $f(x) = P(x)/Q(x)$ where $\deg(Q) \geq \deg(P) + 2$ and $Q$ has no real roots,
Then

$$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ f(x)\, dx = 2\pi i \sum_◆LB◆\mathrm◆LB◆Im(z_k) > 0◆RB◆ \mathrm◆LB◆Res(f, z_k)$$

Where the sum is over poles in the upper half-plane.

_Proof._ Integrate $f(z)$ over the semicircular contour $\gamma_R$ consisting of $[-R, R]$ on the
Real axis and the semicircle $|z| = R$ in the upper half-plane. As $R \to \infty$The integral over
The semicircle vanishes (since $|f(z)| \leq M/R^2$ and the length is $\pi R$). $\blacksquare$

### 9.3 Worked Example

**Problem.** Evaluate $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆dx◆RB◆◆LB◆x^2 + 1◆RB◆$.

_Solution._ $f(z) = \frac◆LB◆1◆RB◆◆LB◆z^2 + 1◆RB◆$ has simple poles at $z = \pm i$.

Only $z = i$ is in the upper half-plane.

$\mathrm◆LB◆Res\left(\frac◆LB◆1◆RB◆◆LB◆z^2 + 1◆RB◆, i\right) = \frac◆LB◆1◆RB◆◆LB◆2z◆RB◆\Big|_◆LB◆z = i◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2i◆RB◆$.

$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆dx◆RB◆◆LB◆x^2 + 1◆RB◆ = 2\pi i \cdot \frac◆LB◆1◆RB◆◆LB◆2i◆RB◆ = \pi$. $\blacksquare$

### 9.4 Integrals Involving Trigonometric Functions

For integrals of the form $\int_0^◆LB◆2\pi◆RB◆ R(\cos\theta, \sin\theta)\, d\theta$Substitute
$z = e^◆LB◆i\theta◆RB◆$So $dz = iz\, d\theta$, $\cos\theta = \frac◆LB◆z + z^◆LB◆-1◆RB◆◆RB◆◆LB◆2◆RB◆$
$\sin\theta = \frac◆LB◆z - z^◆LB◆-1◆RB◆◆RB◆◆LB◆2i◆RB◆$.

The integral becomes $\int_◆LB◆|z|=1◆RB◆ f(z)\, dz$ where $f(z)$ is a rational function.

### 9.5 Worked Example

**Problem.** Evaluate $\int_0^◆LB◆2\pi◆RB◆ \frac◆LB◆d\theta◆RB◆◆LB◆2 + \cos\theta◆RB◆$.

_Solution._ Substitute $z = e^◆LB◆i\theta◆RB◆$: $d\theta = \frac◆LB◆dz◆RB◆◆LB◆iz◆RB◆$
$\cos\theta = \frac◆LB◆z + 1/z◆RB◆◆LB◆2◆RB◆$.

$\int_◆LB◆|z|=1◆RB◆ \frac◆LB◆dz◆RB◆◆LB◆iz\left(2 + \frac◆LB◆z + 1/z◆RB◆◆LB◆2◆RB◆\right)◆RB◆ = \int_◆LB◆|z|=1◆RB◆ \frac◆LB◆2\, dz◆RB◆◆LB◆i(z^2 + 4z + 1)◆RB◆$

Poles: $z^2 + 4z + 1 = 0 \Rightarrow z = -2 \pm \sqrt◆LB◆3◆RB◆$.

$|z_1| = |-2 + \sqrt◆LB◆3◆RB◆| = 2 - \sqrt◆LB◆3◆RB◆ \lt 1$ (inside).
$|z_2| = |-2 - \sqrt◆LB◆3◆RB◆| = 2 + \sqrt◆LB◆3◆RB◆ \gt 1$ (outside).

$\mathrm◆LB◆Res\left(\frac◆LB◆1◆RB◆◆LB◆z^2 + 4z + 1◆RB◆, z_1\right) = \frac◆LB◆1◆RB◆◆LB◆2\sqrt◆LB◆3◆RB◆◆RB◆$.

$\int_0^◆LB◆2\pi◆RB◆ \frac◆LB◆d\theta◆RB◆◆LB◆2 + \cos\theta◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆i◆RB◆ \cdot 2\pi i \cdot \frac◆LB◆1◆RB◆◆LB◆2\sqrt◆LB◆3◆RB◆◆RB◆ = \frac◆LB◆2\pi◆RB◆◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆$.
$\blacksquare$

### 9.6 Jordan's Lemma

**Theorem 9.2 (Jordan's Lemma).** If $f(z) \to 0$ uniformly as $|z| \to \infty$ in the upper
Half-plane and $a \gt 0$Then

$$\lim_◆LB◆R \to \infty◆RB◆ \int_◆LB◆C_R◆RB◆ e^◆LB◆iaz◆RB◆f(z)\, dz = 0$$

Where $C_R$ is the upper semicircle $|z| = R$, $\mathrm◆LB◆Im(z) \geq 0$.

This allows evaluation of integrals of the form $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ f(x)\cos(ax)\, dx$ and
$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ f(x)\sin(ax)\, dx$.

### 9.7 Fourier-Type Integrals

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆\cos x◆RB◆◆LB◆x^2 + 1◆RB◆\, dx$.

Consider
$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆e^◆LB◆ix◆RB◆◆RB◆◆LB◆x^2 + 1◆RB◆\, dx = 2\pi i \cdot \mathrm◆LB◆Res\!\left(\frac◆LB◆e^◆LB◆iz◆RB◆◆RB◆◆LB◆z^2+1◆RB◆, i\right)$.

$\mathrm◆LB◆Res\!\left(\frac◆LB◆e^◆LB◆iz◆RB◆◆RB◆◆LB◆z^2+1◆RB◆, i\right) = \frac◆LB◆e^◆LB◆i \cdot i◆RB◆◆RB◆◆LB◆2i◆RB◆ = \frac◆LB◆e^◆LB◆-1◆RB◆◆RB◆◆LB◆2i◆RB◆$.

$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆e^◆LB◆ix◆RB◆◆RB◆◆LB◆x^2 + 1◆RB◆\, dx = 2\pi i \cdot \frac◆LB◆e^◆LB◆-1◆RB◆◆RB◆◆LB◆2i◆RB◆ = \frac◆LB◆\pi◆RB◆◆LB◆e◆RB◆$.

Taking real parts: $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆\cos x◆RB◆◆LB◆x^2 + 1◆RB◆\, dx = \frac◆LB◆\pi◆RB◆◆LB◆e◆RB◆$.

**Problem.** Evaluate $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆x \sin x◆RB◆◆LB◆x^2 + a^2◆RB◆\, dx$ for $a \gt 0$.

Consider $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆z\, e^◆LB◆iz◆RB◆◆RB◆◆LB◆z^2 + a^2◆RB◆\, dz$. Only $z = ia$ is in the upper
half-plane.

$\mathrm◆LB◆Res\!\left(\frac◆LB◆ze^◆LB◆iz◆RB◆◆RB◆◆LB◆z^2 + a^2◆RB◆, ia\right) = \frac◆LB◆ia \cdot e^◆LB◆i \cdot ia◆RB◆◆RB◆◆LB◆2ia◆RB◆ = \frac◆LB◆e^◆LB◆-a◆RB◆◆RB◆◆LB◆2◆RB◆$.

$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆x\, e^◆LB◆ix◆RB◆◆RB◆◆LB◆x^2 + a^2◆RB◆\, dx = 2\pi i \cdot \frac◆LB◆e^◆LB◆-a◆RB◆◆RB◆◆LB◆2◆RB◆ = \pi i\, e^◆LB◆-a◆RB◆$.

Taking imaginary parts: $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆x \sin x◆RB◆◆LB◆x^2 + a^2◆RB◆\, dx = \pi\, e^◆LB◆-a◆RB◆$.

**Problem.** Evaluate $\int_0^◆LB◆2\pi◆RB◆ \frac◆LB◆\cos 2\theta◆RB◆◆LB◆5 + 4\cos\theta◆RB◆\, d\theta$.

Substitute $z = e^◆LB◆i\theta◆RB◆$: $\cos\theta = (z + z^◆LB◆-1◆RB◆)/2$, $\cos 2\theta = (z^2 + z^◆LB◆-2◆RB◆)/2$.

$I = \frac◆LB◆1◆RB◆◆LB◆2i◆RB◆\int_◆LB◆|z|=1◆RB◆ \frac◆LB◆z^4 + 1◆RB◆◆LB◆z^2(2z + 1)(z + 2)◆RB◆\, dz$.

Poles inside $|z| = 1$: $z = 0$ (order $2$) and $z = -1/2$ (simple).

At $z = 0$:
$\mathrm◆LB◆Res = \frac◆LB◆d◆RB◆◆LB◆dz◆RB◆\left[\frac◆LB◆z^4 + 1◆RB◆◆LB◆(2z+1)(z+2)◆RB◆\right]_◆LB◆z=0◆RB◆
= -\frac◆LB◆5◆RB◆◆LB◆4◆RB◆$.

At $z = -1/2$: $\mathrm◆LB◆Res = \frac◆LB◆17/16◆RB◆◆LB◆3/4◆RB◆ = \frac◆LB◆17◆RB◆◆LB◆12◆RB◆$.

$I = \frac◆LB◆1◆RB◆◆LB◆2i◆RB◆ \cdot 2\pi i \left(-\frac◆LB◆5◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆17◆RB◆◆LB◆12◆RB◆\right) = \frac◆LB◆\pi◆RB◆◆LB◆6◆RB◆$.

</details>

### 9.8 Improper Integrals and Principal Value

For integrals where the integrand has poles on the real axis, we use the **Cauchy principal value**:

$$\mathrm◆LB◆PV\!\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ f(x)\, dx = \lim_◆LB◆\varepsilon \to 0^+◆RB◆ \left(\int_◆LB◆-\infty◆RB◆^◆LB◆a-\varepsilon◆RB◆ f(x)\, dx + \int_◆LB◆a+\varepsilon◆RB◆^◆LB◆\infty◆RB◆ f(x)\, dx\right)$$

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\mathrm◆LB◆PV\!\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆\sin x◆RB◆◆LB◆x◆RB◆\, dx$.

Consider $\oint_\gamma \frac◆LB◆e^◆LB◆iz◆RB◆◆RB◆◆LB◆z◆RB◆\, dz$ where $\gamma$ consists of $[-R, -\varepsilon]$
$[\varepsilon, R]$ on the real axis, small upper semicircle $C_\varepsilon$ around $0$And large
Upper semicircle $C_R$.

No poles inside the contour, so the integral is $0$.

On $C_R$: vanishes as $R \to \infty$ by Jordan's lemma. On $C_\varepsilon$ (indenting above):
$\int_◆LB◆C_\varepsilon◆RB◆ \frac◆LB◆e^◆LB◆iz◆RB◆◆RB◆◆LB◆z◆RB◆\, dz \to -i\pi$ as $\varepsilon \to 0$ (half residue
contribution).

$0 = \mathrm◆LB◆PV\!\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆e^◆LB◆ix◆RB◆◆RB◆◆LB◆x◆RB◆\, dx + (-i\pi)$.

$\mathrm◆LB◆PV\!\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆e^◆LB◆ix◆RB◆◆RB◆◆LB◆x◆RB◆\, dx = i\pi$.

Taking imaginary parts: $\mathrm◆LB◆PV\!\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆\sin x◆RB◆◆LB◆x◆RB◆\, dx = \pi$.

</details>

## 10. Conformal Mappings

### 10.1 Definition

**Definition.** An analytic function $f$ is **conformal** at $z_0$ if $f'(z_0) \neq 0$. A conformal
Mapping preserves angles (both magnitude and orientation) between curves.

### 10.2 Geometric Interpretation

If $f'(z_0) = re^◆LB◆i\theta◆RB◆$Then near $z_0$ the mapping $f$ acts as a rotation by $\theta$ followed
By a scaling by $r$. The Jacobian determinant is $|f'(z_0)|^2 \gt 0$So orientation is preserved.

### 10.3 Common Conformal Mappings

| Mapping                          | Effect                               |
| -------------------------------- | ------------------------------------ |
| $w = az + b$ ($a \neq 0$)        | Translation, rotation, scaling       |
| $w = 1/z$                        | Inversion in the unit circle         |
| $w = z^2$                        | Squaring (doubles angles)            |
| $w = e^z$                        | Exponential (maps strips to sectors) |
| $w = \frac◆LB◆z - a◆RB◆◆LB◆1 - \bar◆LB◆a◆RB◆z◆RB◆$ | Möbius (maps disk to disk)           |

### 10.4 Möbius Transformations

A **Möbius transformation** (or linear fractional transformation) is

$$T(z) = \frac◆LB◆az + b◆RB◆◆LB◆cz + d◆RB◆, \quad ad - bc \neq 0$$

**Proposition 10.1.** Möbius transformations are conformal (where defined) and map circles and lines
To circles and lines.

**Proposition 10.2.** Three points determine a unique Möbius transformation: $T(z_1) = w_1$
$T(z_2) = w_2$, $T(z_3) = w_3$.

### 10.5 Cross-Ratio

**Definition.** The **cross-ratio** of four distinct points $z_1, z_2, z_3, z_4$ is

$$(z_1, z_2, z_3, z_4) = \frac◆LB◆(z_1 - z_3)(z_2 - z_4)◆RB◆◆LB◆(z_1 - z_4)(z_2 - z_3)◆RB◆$$

**Proposition 10.3.** The cross-ratio is invariant under Möbius transformations:
$(Tz_1, Tz_2, Tz_3, Tz_4) = (z_1, z_2, z_3, z_4)$.

**Proposition 10.4.** The unique Möbius transformation sending $z_1 \mapsto 0$, $z_2 \mapsto 1$
$z_3 \mapsto \infty$ is

$$T(z) = \frac◆LB◆(z - z_1)(z_2 - z_3)◆RB◆◆LB◆(z - z_3)(z_2 - z_1)◆RB◆$$

### 10.6 Classification of Möbius Transformations

A Möbius transformation $T(z) = \frac◆LB◆az + b◆RB◆◆LB◆cz + d◆RB◆$ is classified by its fixed points (solutions
of $T(z) = z$).

1. **Parabolic:** Exactly one fixed point. Conjugate to $w = z + k$.
2. **Elliptic:** Two fixed points, $|T'(z_0)| = 1$. Conjugate to a rotation $w = e^◆LB◆i\theta◆RB◆ z$.
3. **Hyperbolic:** Two fixed points, $T'(z_0) \in \mathbb◆LB◆R◆RB◆^+$, $T'(z_0) \neq 1$. Conjugate to
   $w = kz$.
4. **Loxodromic:** Two fixed points, $T'(z_0) \notin \mathbb◆LB◆R◆RB◆ \cup \{z : |z| = 1\}$. Conjugate to
   $w = ke^◆LB◆i\theta◆RB◆z$.

<details>
<summary>Solution</summary>

**Problem.** Find the Möbius transformation mapping $0 \mapsto i$$1 \mapsto 0$$\infty \mapsto -i$.

$T(z) = \frac◆LB◆az + b◆RB◆◆LB◆cz + d◆RB◆$ with $T(0) = i \Rightarrow b/d = i \Rightarrow b = id$.
$T(1) = 0 \Rightarrow a = -b = -id$. $T(\infty) = -i \Rightarrow a/c = -i \Rightarrow c = d$.

$T(z) = \frac◆LB◆-idz + id◆RB◆◆LB◆dz + d◆RB◆ = \frac◆LB◆i(1 - z)◆RB◆◆LB◆z + 1◆RB◆$.

**Problem.** Show that $T(z) = \frac◆LB◆z - 1◆RB◆◆LB◆z + 1◆RB◆$ maps the right half-plane to the unit disk.

If $\mathrm◆LB◆Re(z) \gt 0$Then $|z - 1| \lt |z + 1|$So $|T(z)| \lt 1$.

Check boundary: $T(i) = \frac◆LB◆i - 1◆RB◆◆LB◆i + 1◆RB◆ = \frac◆LB◆(i-1)(-i+1)◆RB◆◆LB◆(i+1)(-i+1)◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆2◆RB◆ = 1$.
$|T(i)| = 1$. $\checkmark$

**Problem.** Classify $T(z) = \frac◆LB◆2z + 1◆RB◆◆LB◆z + 2◆RB◆$.

Fixed points: $z = \frac◆LB◆2z + 1◆RB◆◆LB◆z + 2◆RB◆ \Rightarrow z^2 = 1 \Rightarrow z = \pm 1$.

$T'(z) = \frac◆LB◆3◆RB◆◆LB◆(z + 2)^2◆RB◆$. $T'(1) = 1/3$$T'(-1) = 3$.

Both multipliers are real and positive (not equal to $1$), so $T$ is hyperbolic.

</details>

### 10.7 The Riemann Mapping Theorem

**Theorem 10.5 (Riemann Mapping Theorem).** Let $U$ be a connected open proper subset of
$\mathbb◆LB◆C◆RB◆$. Then there exists a bijective conformal map from $U$ onto the unit disk
$\mathbb◆LB◆D◆RB◆ = \{z : |z| \lt 1\}$.

This is one of the most profound results in complex analysis, establishing that all connected
Domains (other than $\mathbb◆LB◆C◆RB◆$ itself) are conformally equivalent.

_Remark._ The Riemann mapping theorem is an existence theorem; it does not provide an explicit
Formula for the conformal map .

## 11. Liouville's Theorem and the Maximum Modulus Principle

### 11.1 Liouville's Theorem

**Theorem 11.1 (Liouville's Theorem).** Every bounded entire function is constant.

_Proof._ If $|f(z)| \leq M$ for all $z$Then by Cauchy's estimates with $R$ arbitrarily large:
$|f'(z_0)| \leq \frac◆LB◆M◆RB◆◆LB◆R◆RB◆ \to 0$ as $R \to \infty$. So $f'(z) = 0$ for all $z$Meaning $f$ is
Constant. $\blacksquare$

### 11.2 The Fundamental Theorem of Algebra

**Theorem 11.2 (Fundamental Theorem of Algebra).** Every non-constant polynomial
$p(z) \in \mathbb◆LB◆C◆RB◆[z]$ has a root in $\mathbb◆LB◆C◆RB◆$.

_Proof._ Suppose $p(z)$ has no root. Then $f(z) = 1/p(z)$ is entire. Since $|p(z)| \to \infty$ as
$|z| \to \infty$$f(z) \to 0$So $f$ is bounded. By Liouville's theorem, $f$ is constant, so $p$ Is
constant, a contradiction. $\blacksquare$

### 11.3 The Maximum Modulus Principle

**Theorem 11.3 (Maximum Modulus Principle).** If $f$ is analytic and non-constant on a domain $D$
Then $|f|$ has no local maximum in $D$.

**Corollary 11.4.** If $f$ is analytic on a bounded domain $D$ and continuous on
$\bar◆LB◆D◆RB◆ = D \cup \partial D$Then $|f|$ attains its maximum on $\partial D$.

### 11.4 Minimum Modulus Principle

**Theorem 11.5 (Minimum Modulus Principle).** If $f$ is analytic and non-zero on a bounded domain
$D$ And continuous on $\bar◆LB◆D◆RB◆$Then $|f|$ attains its minimum on $\partial D$.

_Remark._ If $f$ has zeros in $D$Then $|f|$ attains its minimum of $0$ at those zeros. The minimum
modulus principle requires the non-vanishing hypothesis.

### 11.5 Schwarz Lemma

**Theorem 11.6 (Schwarz Lemma).** If $f : \mathbb◆LB◆D◆RB◆ \to \mathbb◆LB◆D◆RB◆$ is analytic with $f(0) = 0$
Then

$$|f(z)| \leq |z| \quad \mathrm◆LB◆for\ all\  z \in \mathbb◆LB◆D◆RB◆$$

And $|f'(0)| \leq 1$. Equality in either case implies $f(z) = e^◆LB◆i\theta◆RB◆ z$ for some real $\theta$.

_Proof._ Define $g(z) = f(z)/z$ for $z \neq 0$ and $g(0) = f'(0)$. Then $g$ is analytic on
$\mathbb◆LB◆D◆RB◆$. For $|z| = r \lt 1$: $|g(z)| = |f(z)|/|z| \leq 1/r$. By the maximum modulus Principle,
$|g(z)| \leq 1/r$ for $|z| \leq r$. Letting $r \to 1$: $|g(z)| \leq 1$So $|f(z)| \leq |z|$. Also
$|f'(0)| = |g(0)| \leq 1$. If $|f'(0)| = 1$Then $|g|$ attains its maximum At an interior point, so
$g$ is constant: $g(z) = e^◆LB◆i\theta◆RB◆$. $\blacksquare$

## 12. Argument Principle and Rouché's Theorem

### 12.1 The Argument Principle

**Theorem 12.1 (Argument Principle).** If $f$ is meromorphic inside and on a simple closed contour
$\gamma$ with no zeros or poles on $\gamma$Then

$$\frac◆LB◆1◆RB◆◆LB◆2\pi i◆RB◆\int_\gamma \frac◆LB◆f'(z)◆RB◆◆LB◆f(z)◆RB◆\, dz = N - P$$

Where $N$ is the number of zeros and $P$ is the number of poles of $f$ inside $\gamma$ (counting
Multiplicities).

### 12.2 Rouché's Theorem

**Theorem 12.2 (Rouché's Theorem).** If $f$ and $g$ are analytic inside and on a simple closed
Contour $\gamma$And $|f(z)| \gt |g(z)|$ on $\gamma$Then $f$ and $f + g$ have the same number of
Zeros inside $\gamma$.

_Proof._ On $\gamma$: $|g(z)/f(z)| \lt 1$. The function $h(z) = 1 + g(z)/f(z)$ satisfies
$|h(z) - 1| \lt 1$ on $\gamma$So $h(\gamma)$ does not wind around $0$. By the argument principle
Applied to $h$: $0 = N_h - P_h$Meaning $h$ has the same number of zeros and poles inside $\gamma$.
But $h = (f + g)/f$So zeros of $h$ are zeros of $f + g$ and poles of $h$ are zeros of $f$. Therefore
$f$ and $f + g$ have the same number of zeros. $\blacksquare$

### 12.3 Worked Example

**Problem.** Show that $z^4 + 6z + 3$ has exactly one root in $|z| \lt 1$.

_Solution._ On $|z| = 1$: $|6z| = 6 \gt |z^4 + 3| \leq |z|^4 + 3 = 4$. By Rouché's theorem with
$f(z) = 6z$ and $g(z) = z^4 + 3$: $f + g = z^4 + 6z + 3$ has the same number of zeros in $|z| \lt 1$
as $f(z) = 6z$Which has exactly one zero (at $z = 0$). $\blacksquare$

<details>
<summary>Solution</summary>

**Problem.** Show that all roots of $z^4 + z + 1 = 0$ satisfy $|z| \lt 2$.

On $|z| = 2$: $|z^4| = 16 \gt |z + 1| \leq 3$. By Rouché with $f(z) = z^4$ and $g(z) = z + 1$:
$z^4 + z + 1$ has $4$ zeros in $|z| \lt 2$ (same as $z^4$).

**Problem.** Show that $z^5 + 3z^2 + 1$ has exactly two roots in $|z| \lt 1$.

On $|z| = 1$: $|3z^2 + 1| \geq |3z^2| - |1| = 2 \gt |z^5| = 1$. By Rouché with $f(z) = 3z^2 + 1$ and
$g(z) = z^5$: $z^5 + 3z^2 + 1$ has the same number of zeros as $3z^2 + 1$ in $|z| \lt 1$.
$3z^2 + 1 = 0 \Rightarrow z = \pm i/\sqrt◆LB◆3◆RB◆$Both in $|z| \lt 1$. So $2$ zeros.

</details>

## 13. Analytic Continuation

### 13.1 Definition

**Definition.** If $f_1$ is analytic on $D_1$ and $f_2$ is analytic on $D_2$ with
$D_1 \cap D_2 \neq \emptyset$ and $f_1 = f_2$ on $D_1 \cap D_2$Then $f_2$ is an **analytic
Continuation** of $f_1$.

### 13.2 Identity Theorem

**Theorem 13.1 (Identity Theorem).** If $f$ and $g$ are analytic on a domain $D$ and agree on a set
With a limit point in $D$Then $f = g$ on all of $D$.

_Proof._ Let $E = \{z \in D : f^◆LB◆(n)◆RB◆(z) = g^◆LB◆(n)◆RB◆(z) \mathrm◆LB◆\ for\ all\  n \geq 0\}$. $E$ is
Non-empty (it contains the limit point by continuity of derivatives). $E$ is closed (by continuity).
If $z_0 \in E$The Taylor series of $f$ and $g$ at $z_0$ coincide, so $f = g$ in a neighbourhood of
$z_0$Giving $E$ open. Since $D$ is connected, $E = D$. $\blacksquare$

## 14. Common Pitfalls

:::caution Common Pitfall The Cauchy-Riemann equations are necessary but not sufficient for
Differentiability. The partial derivatives must also be continuous. For example,
$f(z) = \exp(-1/z^4)$ extended by $f(0) = 0$ satisfies the Cauchy-Riemann equations at the origin
But is not differentiable there. :::

:::caution Common Pitfall Cauchy's theorem requires a connected domain. On a multiply Connected
domain, the integral of an analytic function around a closed contour may be non-zero. The Classic
example is $\oint_◆LB◆|z|=1◆RB◆ dz/z = 2\pi i$. :::

:::caution Common Pitfall When computing residues at poles of order $m \geq 2$The formula involves
Differentiation. A common error is forgetting the $(m-1)!$ in the denominator or differentiating
$(z - z_0)^m f(z)$ the wrong number of times. :::

:::caution Common Pitfall The residue at infinity is
$\mathrm◆LB◆Res(f, \infty) = -\mathrm◆LB◆Res(1/z^2 \cdot f(1/z), 0)$. It is NOT $f(\infty)$. For A
function that is analytic everywhere in the finite plane except for finitely many singularities, The
sum of all residues (including the residue at infinity) is zero. :::

:::caution Common Pitfall A conformal mapping preserves angles but not necessarily distances. The
Mapping $w = z^2$ is conformal at every $z \neq 0$But it doubles the angle between curves at each
Point. At $z = 0$It is not conformal because $f'(0) = 0$. :::

:::caution Common Pitfall The maximum modulus principle says that $|f|$ has no local maximum in the
Interior, but the minimum can occur in the interior (e.g., $f(z) = z$ on the unit disk has minimum
$|f| = 0$ at $z = 0$). For the minimum principle, one needs the additional hypothesis that $f$ has
No zeros in the domain. :::

:::caution Common Pitfall The complex logarithm is multi-valued. When a problem asks for "logarithm"
without specifying a branch, you must either compute all values or explicitly state which Branch you
are using. The principal branch $\mathrm◆LB◆Log\, z$ has a branch cut along $(-\infty, 0]$ And is
undefined on this cut. :::

:::caution Common Pitfall When applying the ML inequality, make sure $M$ is a valid upper bound for
$|f(z)|$ on the entire contour. A common error is bounding $|f|$ on only part of the contour. Also,
$L$ must be the arc length of the contour, not a diameter or radius. :::

## 15. Problem Set

### Problem 1

Express $z = -\sqrt◆LB◆3◆RB◆ + i$ in polar form and find all values of $z^◆LB◆1/3◆RB◆$.

<details>
<summary>Solution</summary>

$|z| = \sqrt◆LB◆3 + 1◆RB◆ = 2$. Since $\mathrm◆LB◆Re(z) \lt 0$ and $\mathrm◆LB◆Im(z) \gt 0$:
$\arg(z) = \pi - \pi/6 = 5\pi/6$.

$z = 2\,e^◆LB◆5\pi i/6◆RB◆$.

$z^◆LB◆1/3◆RB◆ = 2^◆LB◆1/3◆RB◆\, e^◆LB◆(5\pi/6 + 2\pi k)/3◆RB◆$ for $k = 0, 1, 2$.

$z_0 = 2^◆LB◆1/3◆RB◆\, e^◆LB◆5\pi i/18◆RB◆$$z_1 = 2^◆LB◆1/3◆RB◆\, e^◆LB◆17\pi i/18◆RB◆$$z_2 = 2^◆LB◆1/3◆RB◆\, e^◆LB◆29\pi i/18◆RB◆$.

_If you get this wrong, revise:_ Section 1.5 (Roots of Complex Numbers).

</details>

### Problem 2

Let $f(z) = z^2 + \bar◆LB◆z◆RB◆^2$. Find where $f$ is differentiable and where it is analytic.

<details>
<summary>Solution</summary>

$f(z) = (x + iy)^2 + (x - iy)^2 = 2(x^2 - y^2)$. So $u = 2(x^2 - y^2)$$v = 0$.

$u_x = 4x$$u_y = -4y$$v_x = 0$$v_y = 0$.

CR: $4x = 0 \Rightarrow x = 0$$-4y = 0 \Rightarrow y = 0$.

$f$ is differentiable only at $z = 0$ and analytic nowhere.

$f'(0) = 0$ (verified by direct computation).

_If you get this wrong, revise:_ Sections 2.4 and 3.1 (Analyticity and Cauchy-Riemann).

</details>

### Problem 3

Verify that $f(z) = \frac◆LB◆1◆RB◆◆LB◆z^2 + 1◆RB◆$ satisfies the Cauchy-Riemann equations on its domain and Find
$f'(z)$.

<details>
<summary>Solution</summary>

$f(z) = 1/(z^2 + 1)$ is a rational function with denominator non-zero away from $\pm i$So $f$ Is
analytic on $\mathbb◆LB◆C◆RB◆ \setminus \{i, -i\}$.

By the quotient rule: $f'(z) = \frac◆LB◆-2z◆RB◆◆LB◆(z^2 + 1)^2◆RB◆$.

Verify via CR at $z = 1$: $u = \frac◆LB◆x^2 - y^2 + 1◆RB◆◆LB◆(x^2 - y^2 + 1)^2 + 4x^2y^2◆RB◆$
$v = \frac◆LB◆-2xy◆RB◆◆LB◆(x^2 - y^2 + 1)^2 + 4x^2y^2◆RB◆$.

$u_x(1, 0) = -1/2 = f'(1)$. $\checkmark$

_If you get this wrong, revise:_ Sections 3.1 and 3.3 (CR Equations).

</details>

### Problem 4

Show that $u(x, y) = x^3 - 3xy^2 + 3x^2 - 3y^2$ is harmonic and find its harmonic conjugate.

<details>
<summary>Solution</summary>

$u_◆LB◆xx◆RB◆ = 6x + 6$$u_◆LB◆yy◆RB◆ = -6x - 6$. $\Delta u = 0$. $\checkmark$

By CR: $v_y = u_x = 3x^2 - 3y^2 + 6x$. $v = 3x^2 y - y^3 + 6xy + g(x)$.

$v_x = -u_y = 6xy + 6y$. $6xy + 6y = 6xy + 6y + g'(x) \Rightarrow g'(x) = 0 \Rightarrow g(x) = C$.

Harmonic conjugate: $v(x, y) = 3x^2 y - y^3 + 6xy + C$.

$f(z) = u + iv = z^3 + 3z^2$.

_If you get this wrong, revise:_ Section 3.4 (Harmonic Functions).

</details>

### Problem 5

Evaluate $\int_\gamma (z^2 + 2z)\, dz$ where $\gamma$ is the upper half of the unit circle from
$z = 1$ to $z = -1$.

<details>
<summary>Solution</summary>

Since $z^2 + 2z$ is entire, the integral is path-independent. Let $F(z) = z^3/3 + z^2$.

$\int_\gamma (z^2 + 2z)\, dz = F(-1) - F(1) = \frac◆LB◆2◆RB◆◆LB◆3◆RB◆ - \frac◆LB◆4◆RB◆◆LB◆3◆RB◆ = -\frac◆LB◆2◆RB◆◆LB◆3◆RB◆$.

_If you get this wrong, revise:_ Sections 4.5 and 4.7 (Contour Integrals).

</details>

### Problem 6

Use the ML inequality to bound $\left|\int_\gamma \frac◆LB◆e^z◆RB◆◆LB◆z - 2◆RB◆\, dz\right|$ where $\gamma$ Is
the circle $|z| = 1$.

<details>
<summary>Solution</summary>

On $\gamma$: $|z| = 1$So $|e^z| \leq e$ and $|z - 2| \geq 1$.

$\left|\frac◆LB◆e^z◆RB◆◆LB◆z - 2◆RB◆\right| \leq e$. $L = 2\pi$.

$\left|\int_\gamma \frac◆LB◆e^z◆RB◆◆LB◆z - 2◆RB◆\, dz\right| \leq 2\pi e$.

_If you get this wrong, revise:_ Section 4.6 (ML Inequality).

</details>

### Problem 7

Evaluate $\oint_\gamma \frac◆LB◆z + 1◆RB◆◆LB◆z^2 - z◆RB◆\, dz$ where $\gamma$ is $|z| = 2$.

<details>
<summary>Solution</summary>

$\frac◆LB◆z + 1◆RB◆◆LB◆z^2 - z◆RB◆ = \frac◆LB◆z + 1◆RB◆◆LB◆z(z - 1)◆RB◆$. Simple poles at $z = 0$ and $z = 1$Both inside
$|z| = 2$.

At $z = 0$: $\mathrm◆LB◆Res = \lim_◆LB◆z \to 0◆RB◆ \frac◆LB◆z + 1◆RB◆◆LB◆z - 1◆RB◆ = -1$. At $z = 1$:
$\mathrm◆LB◆Res = \lim_◆LB◆z \to 1◆RB◆ \frac◆LB◆z + 1◆RB◆◆LB◆z◆RB◆ = 2$.

$\oint_\gamma \frac◆LB◆z + 1◆RB◆◆LB◆z^2 - z◆RB◆\, dz = 2\pi i(-1 + 2) = 2\pi i$.

_If you get this wrong, revise:_ Sections 8.4 and 8.5 (Residues).

</details>

### Problem 8

Classify all singularities of $f(z) = \frac◆LB◆e^◆LB◆1/z◆RB◆◆RB◆◆LB◆z^2 + 1◆RB◆$ and find all residues.

<details>
<summary>Solution</summary>

$z = 0$: $e^◆LB◆1/z◆RB◆$ has an essential singularity at $0$So $z = 0$ is an essential singularity of $f$.
$z = i$: simple pole. $z = -i$: simple pole.

At $z = i$: $\mathrm◆LB◆Res = \frac◆LB◆e^◆LB◆1/i◆RB◆◆RB◆◆LB◆2i◆RB◆ = \frac◆LB◆e^◆LB◆-i◆RB◆◆RB◆◆LB◆2i◆RB◆$. At $z = -i$:
$\mathrm◆LB◆Res = \frac◆LB◆e^◆LB◆1/(-i)◆RB◆◆RB◆◆LB◆-2i◆RB◆ = \frac◆LB◆e^◆LB◆i◆RB◆◆RB◆◆LB◆-2i◆RB◆$.

At $z = 0$: find the coefficient of $1/z$ in $\frac◆LB◆e^◆LB◆1/z◆RB◆◆RB◆◆LB◆z^2 + 1◆RB◆$.
$\frac◆LB◆1◆RB◆◆LB◆z^2 + 1◆RB◆ = 1 - z^2 + z^4 - \cdots$ near $z = 0$. $e^◆LB◆1/z◆RB◆ = 1 + 1/z + 1/(2z^2) + \cdots$.
The $1/z$ coefficient in the product: from $1 \cdot 1/z = 1/z$Giving residue $1$.

_If you get this wrong, revise:_ Sections 8.1 and 8.4 (Singularities and Residues).

</details>

### Problem 9

Evaluate $\int_0^◆LB◆2\pi◆RB◆ \frac◆LB◆\cos\theta◆RB◆◆LB◆5 + 4\cos\theta◆RB◆\, d\theta$.

<details>
<summary>Solution</summary>

Substitute $z = e^◆LB◆i\theta◆RB◆$:

$I = \int_◆LB◆|z|=1◆RB◆ \frac◆LB◆(z + z^◆LB◆-1◆RB◆)/2◆RB◆◆LB◆5 + 4(z + z^◆LB◆-1◆RB◆)/2◆RB◆ \cdot \frac◆LB◆dz◆RB◆◆LB◆iz◆RB◆
= \frac◆LB◆1◆RB◆◆LB◆2i◆RB◆\int_◆LB◆|z|=1◆RB◆ \frac◆LB◆z^2 + 1◆RB◆◆LB◆z(2z^2 + 5z + 2)◆RB◆\, dz
= \frac◆LB◆1◆RB◆◆LB◆2i◆RB◆\int_◆LB◆|z|=1◆RB◆ \frac◆LB◆z^2 + 1◆RB◆◆LB◆z(2z + 1)(z + 2)◆RB◆\, dz$.

Poles inside $|z| = 1$: $z = 0$ (simple) and $z = -1/2$ (simple).

At $z = 0$: $\mathrm◆LB◆Res = \frac◆LB◆1◆RB◆◆LB◆(2 \cdot 0 + 1)(0 + 2)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆$. At $z = -1/2$:
$\mathrm◆LB◆Res = \frac◆LB◆1/4 + 1◆RB◆◆LB◆(-1/2)(-1 + 2)◆RB◆ = \frac◆LB◆5/4◆RB◆◆LB◆-1/2◆RB◆ = -\frac◆LB◆5◆RB◆◆LB◆2◆RB◆$.

$I = \frac◆LB◆1◆RB◆◆LB◆2i◆RB◆ \cdot 2\pi i\left(\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆5◆RB◆◆LB◆2◆RB◆\right) = \pi(-2) = -\frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆$.

_If you get this wrong, revise:_ Section 9.4 (Trigonometric Integrals).

</details>

### Problem 10

Evaluate $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆dx◆RB◆◆LB◆(x^2 + 1)(x^2 + 4)◆RB◆$.

<details>
<summary>Solution</summary>

$f(z) = \frac◆LB◆1◆RB◆◆LB◆(z^2 + 1)(z^2 + 4)◆RB◆$. Poles in upper half-plane: $z = i$ (simple) and $z = 2i$
(simple).

At $z = i$: $\mathrm◆LB◆Res = \frac◆LB◆1◆RB◆◆LB◆(2i)(i^2 + 4)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2i \cdot 3◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆6i◆RB◆$. At
$z = 2i$: $\mathrm◆LB◆Res = \frac◆LB◆1◆RB◆◆LB◆(4i - 1)(4i)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆4i(-3)◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆12i◆RB◆$.

$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ f(x)\, dx = 2\pi i\left(\frac◆LB◆1◆RB◆◆LB◆6i◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆12i◆RB◆\right) = 2\pi i \cdot \frac◆LB◆1◆RB◆◆LB◆12i◆RB◆ = \frac◆LB◆\pi◆RB◆◆LB◆6◆RB◆$.

_If you get this wrong, revise:_ Section 9.2 (Rational Function Integrals).

</details>

### Problem 11

Find the Taylor series of $f(z) = \frac◆LB◆z◆RB◆◆LB◆z^2 + 4◆RB◆$ centered at $z_0 = 0$ and state the radius Of
convergence.

<details>
<summary>Solution</summary>

$\frac◆LB◆z◆RB◆◆LB◆z^2 + 4◆RB◆ = \frac◆LB◆z◆RB◆◆LB◆4◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆1 + z^2/4◆RB◆ = \frac◆LB◆z◆RB◆◆LB◆4◆RB◆\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ (-1)^n \frac◆LB◆z^◆LB◆2n◆RB◆◆RB◆◆LB◆4^n◆RB◆
= \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆(-1)^n z^◆LB◆2n+1◆RB◆◆RB◆◆LB◆4^◆LB◆n+1◆RB◆◆RB◆$

For $|z| \lt 2$. Radius of convergence: distance from $0$ to nearest singularity ($\pm 2i$), which
is $2$.

_If you get this wrong, revise:_ Section 7.1 (Taylor Series).

</details>

### Problem 12

Find the Laurent series of $f(z) = \frac◆LB◆1◆RB◆◆LB◆(z - 1)(z - 2)◆RB◆$ in the annulus $1 \lt |z| \lt 2$.

<details>
<summary>Solution</summary>

$\frac◆LB◆1◆RB◆◆LB◆(z-1)(z-2)◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆z - 2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆z - 1◆RB◆$.

For $|z| \gt 1$:
$\frac◆LB◆1◆RB◆◆LB◆z - 1◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆z◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆1 - 1/z◆RB◆ = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ z^◆LB◆-n-1◆RB◆$.

For $|z| \lt 2$:
$\frac◆LB◆1◆RB◆◆LB◆z - 2◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \cdot \frac◆LB◆1◆RB◆◆LB◆1 - z/2◆RB◆ = -\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆z^n◆RB◆◆LB◆2^◆LB◆n+1◆RB◆◆RB◆$.

$f(z) = -\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆z^n◆RB◆◆LB◆2^◆LB◆n+1◆RB◆◆RB◆ - \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ z^◆LB◆-n-1◆RB◆$.

_If you get this wrong, revise:_ Section 7.4 (Laurent Series).

</details>

### Problem 13

Using Rouché's theorem, determine the number of roots of $z^5 - 5z + 1 = 0$ in $|z| \lt 1$.

<details>
<summary>Solution</summary>

On $|z| = 1$: $|-5z| = 5 \gt |z^5 + 1| \leq 2$.

By Rouché with $f(z) = -5z$ and $g(z) = z^5 + 1$: $z^5 - 5z + 1$ has the same number of zeros In
$|z| \lt 1$ as $-5z$Which has exactly one zero (at $z = 0$).

So exactly one root in $|z| \lt 1$.

_If you get this wrong, revise:_ Section 12.2 (Rouché's Theorem).

</details>

### Problem 14

Find the Möbius transformation that maps $1 \mapsto 0$$i \mapsto 1$$-1 \mapsto \infty$.

<details>
<summary>Solution</summary>

$T(z) = \frac◆LB◆(z - 1)(i - (-1))◆RB◆◆LB◆(z - (-1))(i - 1)◆RB◆ = \frac◆LB◆(z - 1)(i + 1)◆RB◆◆LB◆(z + 1)(i - 1)◆RB◆$.

Simplify:
$\frac◆LB◆i + 1◆RB◆◆LB◆i - 1◆RB◆ = \frac◆LB◆(i+1)(-i-1)◆RB◆◆LB◆(i-1)(-i-1)◆RB◆ = \frac◆LB◆-i^2 - 2i - 1◆RB◆◆LB◆-i^2 + 1◆RB◆ = \frac◆LB◆-2i◆RB◆◆LB◆2◆RB◆ = -i$.

$T(z) = -i \cdot \frac◆LB◆z - 1◆RB◆◆LB◆z + 1◆RB◆$.

Verify: $T(1) = 0$ $\checkmark$$T(i) = -i \cdot \frac◆LB◆i-1◆RB◆◆LB◆i+1◆RB◆ = -i \cdot (-i) = -1$.

That gives $-1$Not $1$. Let me recompute.

$T(z) = \frac◆LB◆(z - z_1)(z_2 - z_3)◆RB◆◆LB◆(z - z_3)(z_2 - z_1)◆RB◆$ with $z_1 = 1$$z_2 = i$$z_3 = -1$.

$T(z) = \frac◆LB◆(z - 1)(i + 1)◆RB◆◆LB◆(z + 1)(i - 1)◆RB◆$.

$T(i) = \frac◆LB◆(i - 1)(i + 1)◆RB◆◆LB◆(i + 1)(i - 1)◆RB◆ = 1$. $\checkmark$

$T(1) = 0$. $\checkmark$. $T(-1) = \infty$. $\checkmark$.

So $T(z) = \frac◆LB◆(z - 1)(i + 1)◆RB◆◆LB◆(z + 1)(i - 1)◆RB◆$.

_If you get this wrong, revise:_ Section 10.5 (Cross-Ratio).

</details>

### Problem 15

Evaluate $\int_\gamma \frac◆LB◆z^3◆RB◆◆LB◆z^2 + 1◆RB◆\, dz$ where $\gamma$ is $|z| = 2$.

<details>
<summary>Solution</summary>

$\frac◆LB◆z^3◆RB◆◆LB◆z^2 + 1◆RB◆$ has simple poles at $z = \pm i$Both inside $|z| = 2$.

At $z = i$: $\mathrm◆LB◆Res = \frac◆LB◆i^3◆RB◆◆LB◆2i◆RB◆ = \frac◆LB◆-i◆RB◆◆LB◆2i◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆2◆RB◆$. At $z = -i$:
$\mathrm◆LB◆Res = \frac◆LB◆(-i)^3◆RB◆◆LB◆-2i◆RB◆ = \frac◆LB◆i◆RB◆◆LB◆-2i◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆2◆RB◆$.

$\int_\gamma \frac◆LB◆z^3◆RB◆◆LB◆z^2 + 1◆RB◆\, dz = 2\pi i\left(-\frac◆LB◆1◆RB◆◆LB◆2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right) = -2\pi i$.

Alternatively: $\frac◆LB◆z^3◆RB◆◆LB◆z^2 + 1◆RB◆ = z - \frac◆LB◆z◆RB◆◆LB◆z^2 + 1◆RB◆$. $\int_\gamma z\, dz = 0$ (entire), and
$\int_\gamma \frac◆LB◆z◆RB◆◆LB◆z^2 + 1◆RB◆\, dz = 2\pi i(1/2 + 1/2) = 2\pi i$. So the integral equals
$0 - 2\pi i = -2\pi i$. $\checkmark$

_If you get this wrong, revise:_ Sections 8.4 and 8.5 (Residues).

</details>

### Problem 16

Show that $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆\cos 2x◆RB◆◆LB◆x^2 + 1◆RB◆\, dx = \frac◆LB◆\pi◆RB◆◆LB◆e^2◆RB◆$.

<details>
<summary>Solution</summary>

Consider $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆e^◆LB◆2ix◆RB◆◆RB◆◆LB◆x^2 + 1◆RB◆\, dx$.

$f(z) = \frac◆LB◆e^◆LB◆2iz◆RB◆◆RB◆◆LB◆z^2 + 1◆RB◆$ has a simple pole at $z = i$ in the upper half-plane.

$\mathrm◆LB◆Res\!\left(\frac◆LB◆e^◆LB◆2iz◆RB◆◆RB◆◆LB◆z^2 + 1◆RB◆, i\right) = \frac◆LB◆e^◆LB◆2i \cdot i◆RB◆◆RB◆◆LB◆2i◆RB◆ = \frac◆LB◆e^◆LB◆-2◆RB◆◆RB◆◆LB◆2i◆RB◆$.

$\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆e^◆LB◆2ix◆RB◆◆RB◆◆LB◆x^2 + 1◆RB◆\, dx = 2\pi i \cdot \frac◆LB◆e^◆LB◆-2◆RB◆◆RB◆◆LB◆2i◆RB◆ = \frac◆LB◆\pi◆RB◆◆LB◆e^2◆RB◆$.

Taking real parts: $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆\cos 2x◆RB◆◆LB◆x^2 + 1◆RB◆\, dx = \frac◆LB◆\pi◆RB◆◆LB◆e^2◆RB◆$.

_If you get this wrong, revise:_ Section 9.7 (Fourier-Type Integrals).

</details>

### Problem 17

Find the residue of $f(z) = \frac◆LB◆\sin z◆RB◆◆LB◆z^4◆RB◆$ at $z = 0$.

<details>
<summary>Solution</summary>

$\sin z = z - z^3/6 + z^5/120 - \cdots$

$f(z) = \frac◆LB◆z - z^3/6 + z^5/120 - \cdots◆RB◆◆LB◆z^4◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆z^3◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆6z◆RB◆ + \frac◆LB◆z◆RB◆◆LB◆120◆RB◆ - \cdots$

The coefficient of $1/z$ is $-1/6$So $\mathrm◆LB◆Res(f, 0) = -\frac◆LB◆1◆RB◆◆LB◆6◆RB◆$.

_If you get this wrong, revise:_ Section 8.4 (Computing Residues).

</details>

### Problem 18

Evaluate $\int_\gamma \frac◆LB◆dz◆RB◆◆LB◆(z - 1)^2(z - 2)◆RB◆$ where $\gamma$ is $|z - 1| = 1/2$.

<details>
<summary>Solution</summary>

Only $z = 1$ is inside $\gamma$ (a pole of order $2$). $z = 2$ is outside.

$\mathrm◆LB◆Res(f, 1) = \frac◆LB◆d◆RB◆◆LB◆dz◆RB◆\left[\frac◆LB◆1◆RB◆◆LB◆z - 2◆RB◆\right]_◆LB◆z=1◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆(z-2)^2◆RB◆\Big|_◆LB◆z=1◆RB◆ = -1$.

$\int_\gamma f\, dz = 2\pi i \cdot (-1) = -2\pi i$.

_If you get this wrong, revise:_ Section 6.2 (CIF for Derivatives) and 8.4 (Residues).

</details>

### Problem 19

Use the Cauchy-Riemann equations to show that $f(z) = |z|^2 + 2\bar◆LB◆z◆RB◆$ is differentiable at Exactly
one point and find $f'(z)$ there.

<details>
<summary>Solution</summary>

$f(z) = x^2 + y^2 + 2x - 2iy$. So $u = x^2 + y^2 + 2x$$v = -2y$.

$u_x = 2x + 2$$u_y = 2y$$v_x = 0$$v_y = -2$.

CR: $2x + 2 = -2 \Rightarrow x = -2$And $2y = 0 \Rightarrow y = 0$.

$f$ is differentiable only at $z = -2$.

$f'(-2) = u_x(-2, 0) + iv_x(-2, 0) = (2(-2) + 2) + 0 = -2$.

_If you get this wrong, revise:_ Section 3.1 (Cauchy-Riemann Equations).

</details>

### Problem 20

Evaluate $\int_\gamma \frac◆LB◆e^z \sin z◆RB◆◆LB◆(z - \pi)^3◆RB◆\, dz$ where $\gamma$ is $|z| = 4$.

<details>
<summary>Solution</summary>

Only $z = \pi$ is inside $\gamma$ (a pole of order $3$).

By CIF for derivatives: $\int_\gamma \frac◆LB◆f(z)◆RB◆◆LB◆(z - \pi)^3◆RB◆\, dz = \frac◆LB◆2\pi i◆RB◆◆LB◆2!◆RB◆\,f''(\pi)$
Where $f(z) = e^z \sin z$.

$f'(z) = e^z \sin z + e^z \cos z = e^z(\sin z + \cos z)$.
$f''(z) = e^z(\sin z + \cos z) + e^z(\cos z - \sin z) = 2e^z \cos z$.

$f''(\pi) = 2e^\pi \cos\pi = -2e^\pi$.

$\int_\gamma \frac◆LB◆e^z \sin z◆RB◆◆LB◆(z - \pi)^3◆RB◆\, dz = \pi i \cdot (-2e^\pi) = -2\pi i\, e^\pi$.

_If you get this wrong, revise:_ Section 6.2 (Cauchy's Integral Formula for Derivatives).

</details>

## Worked Examples

### Example 1: Complex integration

**Problem.** Evaluate $\oint_◆LB◆|z|=2◆RB◆ \frac◆LB◆e^z◆RB◆◆LB◆z - 1◆RB◆ \, dz$.

**Solution.** The integrand has a simple pole at $z = 1$ with residue $e^1 = e$. By Cauchy's residue
theorem: $$\oint_◆LB◆|z|=2◆RB◆ \frac◆LB◆e^z◆RB◆◆LB◆z - 1◆RB◆ \, dz = 2\pi i \cdot e = 2\pi e i.$$

$\blacksquare$

### Example 2: Taylor series

**Problem.** Find the Taylor series of $f(z) = \frac◆LB◆1◆RB◆◆LB◆z◆RB◆$ about $z_0 = 1$.

**Solution.** $f(z) = \frac◆LB◆1◆RB◆◆LB◆1 + (z-1)◆RB◆ = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ (-1)^n(z-1)^n$ for $|z - 1| < 1$.

$\blacksquare$

## Common Pitfalls

- **Confusing complex conjugate and complex inverse.** $\bar◆LB◆z◆RB◆ = a - bi$;
  $z^◆LB◆-1◆RB◆ = \bar◆LB◆z◆RB◆/|z|^2 = (a - bi)/(a^2 + b^2)$. **Fix:** The conjugate is NOT the inverse; the
  inverse involves division by $|z|^2$.
- **Wrong branch of the logarithm.** $\log z = \ln|z| + i(\arg z + 2k\pi)$ is multi-valued; the
  principal branch restricts $\arg z \in (-\pi, \pi]$. **Fix:** Always specify the branch when
  working with complex logarithms and powers.
- **Cauchy's theorem conditions.** The function must be analytic on and inside the contour. **Fix:**
  If the function has singularities inside the contour, use the residue theorem instead.

## Summary

- Cauchy-Riemann equations: $u_x = v_y$, $u_y = -v_x$; necessary condition for analyticity.
- Cauchy's integral theorem: $\oint_\gamma f(z)\, dz = 0$ for $f$ analytic on and inside $\gamma$.
- Residue theorem: $\oint_\gamma f(z)\, dz = 2\pi i \sum \text◆LB◆Res◆RB◆(f, z_k)$.
- Taylor and Laurent series: power series representations; Laurent series include negative powers
  for singularities.

## Cross-References

| Topic             | Site       | Link                                                                                                           |
| ----------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| [Complex Numbers] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/further-maths/pure-mathematics/01-complex-numbers) |
| [Complex Numbers] | IB         | [View](https://ib.wyattau.com/docs/ib/maths/1-number-and-algebra/2_complex-numbers)                            |
| [Complex Numbers] | University | [View](https://university.wyattau.com/docs/mathematics/7-complex-analysis/1_complex-analysis)                  |
