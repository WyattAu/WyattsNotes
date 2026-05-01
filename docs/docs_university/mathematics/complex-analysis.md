---
title: Complex Analysis
description:
  University-level notes on Complex Analysis: 1. Complex Numbers Review; 1.1
  Definition and Arithmetic; 1.2 The Complex Conjugate and Modulus; 1.3 Polar
  Form.
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

_Remark._ The complex field $\mathbb{C}$ cannot be ordered: there is no total ordering on $\mathbb{C}$
compatible with the field operations. In particular, $i^2 = -1$ precludes any such ordering.

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

_Proof of (3)._ $|z + w|^2 = (z + w)(\bar{z} + \bar{w}) = |z|^2 + z\bar{w} + \bar{z}w + |w|^2
= |z|^2 + 2\,\mathrm{Re}(z\bar{w}) + |w|^2 \leq |z|^2 + 2|z||w| + |w|^2 = (|z| + |w|)^2$.
The inequality follows from $\mathrm{Re}(z\bar{w}) \leq |z\bar{w}| = |z||w|$.
$\blacksquare$

### 1.3 Polar Form

Every non-zero complex number can be written in **polar form**:

$$z = r(\cos\theta + i\sin\theta) = re^{i\theta}$$

where $r = |z| = \sqrt{a^2 + b^2}$ is the **modulus** and $\theta = \arg(z)$ is the **argument**.

**Definition.** The **principal argument** $\mathrm{Arg}(z)$ is the unique $\theta \in (-\pi, \pi]$
such that $z = |z|e^{i\theta}$. The **argument** $\arg(z)$ is multi-valued:
$\arg(z) = \mathrm{Arg}(z) + 2\pi k$ for $k \in \mathbb{Z}$.

**Proposition 1.4.** If $z_1 = r_1 e^{i\theta_1}$ and $z_2 = r_2 e^{i\theta_2}$, then
$z_1 z_2 = r_1 r_2 e^{i(\theta_1 + \theta_2)}$ and $z_1/z_2 = (r_1/r_2)\, e^{i(\theta_1 - \theta_2)}$.

#### Worked Examples: Polar Form Conversions

<details>
<summary>Solution</summary>

**Problem.** Convert $z = -1 + \sqrt{3}\,i$ to polar form and find all arguments.

$|z| = \sqrt{(-1)^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = 2$.

$\mathrm{Re}(z) = -1 \lt{} 0$ and $\mathrm{Im}(z) = \sqrt{3} \gt{} 0$, so $z$ is in the second quadrant.

$\theta = \arctan\!\left(\frac{\sqrt{3}}{-1}\right) = \frac{2\pi}{3}$ (adjusting to second quadrant).

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

### 1.4 Euler's Formula and De Moivre's Theorem

**Euler's formula:** $e^{i\theta} = \cos\theta + i\sin\theta$.

**De Moivre's theorem:** $(e^{i\theta})^n = e^{in\theta}$, so

$$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$$

**Proposition 1.5.** De Moivre's theorem holds for all integers $n$, including negative values.

_Proof._ For $n \geq 0$, it follows by induction from the multiplication law
$e^{i\alpha}e^{i\beta} = e^{i(\alpha + \beta)}$. For $n \lt{} 0$, write $n = -m$ with $m \gt{} 0$:
$(\cos\theta + i\sin\theta)^n = \frac{1}{(\cos\theta + i\sin\theta)^m}
= \frac{1}{\cos(m\theta) + i\sin(m\theta)} = \cos(-m\theta) + i\sin(-m\theta) = \cos(n\theta) + i\sin(n\theta)$.
$\blacksquare$

#### Applications of De Moivre's Theorem

**Example.** Compute $(1 + i)^{20}$.

$1 + i = \sqrt{2}\,e^{i\pi/4}$, so $(1 + i)^{20} = (\sqrt{2})^{20}\, e^{20\pi i/4} = 2^{10}\, e^{5\pi i} = 1024\,e^{\pi i} = -1024$.

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

**Problem.** Show that $\sum_{k=0}^{n-1} \cos(k\theta) = \frac{\sin(n\theta/2)}{\sin(\theta/2)}\cos\!\left(\frac{(n-1)\theta}{2}\right)$
for $\theta \notin 2\pi\mathbb{Z}$.

Consider $S = \sum_{k=0}^{n-1} e^{ik\theta} = \frac{1 - e^{in\theta}}{1 - e^{i\theta}}$
(geometric series with $r = e^{i\theta} \neq 1$).

$S = \frac{e^{in\theta/2}(e^{-in\theta/2} - e^{in\theta/2})}{e^{i\theta/2}(e^{-i\theta/2} - e^{i\theta/2})}
= e^{i(n-1)\theta/2} \cdot \frac{\sin(n\theta/2)}{\sin(\theta/2)}$.

Taking real parts gives the result.

</details>

### 1.5 Roots of Complex Numbers

**Definition.** An $n$-th root of $w \in \mathbb{C}$ is a complex number $z$ such that $z^n = w$.

**Proposition 1.6.** Every non-zero $w \in \mathbb{C}$ has exactly $n$ distinct $n$-th roots.
If $w = \rho\, e^{i\phi}$, then

$$z_k = \rho^{1/n}\, e^{i(\phi + 2\pi k)/n}, \quad k = 0, 1, \ldots, n - 1$$

where $\rho^{1/n} \gt{} 0$ is the positive real $n$-th root of $\rho$.

_Proof._ If $z^n = w$, write $z = r\,e^{i\theta}$. Then $r^n e^{in\theta} = \rho\, e^{i\phi}$,
so $r = \rho^{1/n}$ and $n\theta = \phi + 2\pi k$. For $k = 0, 1, \ldots, n-1$ these give distinct
values of $\theta$; for $k \geq n$ they repeat. $\blacksquare$

_Remark._ The $n$-th roots of $w$ lie equally spaced on a circle of radius $\rho^{1/n}$, forming a
regular $n$-gon.

### 1.6 Roots of Unity

The $n$-th roots of unity are the solutions of $z^n = 1$:

$$z_k = e^{2\pi i k / n}, \quad k = 0, 1, \ldots, n - 1$$

They form a regular $n$-gon on the unit circle in the complex plane.

**Proposition 1.7.** If $\omega = e^{2\pi i/n}$ is a primitive $n$-th root of unity, then
$\sum_{k=0}^{n-1} \omega^k = 0$ and $\sum_{k=0}^{n-1} \omega^{jk} = 0$ for any $j$ not divisible by $n$.

_Proof._ The sum $\sum_{k=0}^{n-1} \omega^k = \frac{1 - \omega^n}{1 - \omega} = \frac{1 - 1}{1 - \omega} = 0$
provided $\omega \neq 1$. For $j$ not divisible by $n$, $\omega^j$ is a non-trivial root of unity,
so the same argument applies. $\blacksquare$

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

The roots are $z_k = \rho^{1/n}\, e^{i(\phi + 2\pi k)/n} = z_0 \cdot \left(e^{2\pi i/n}\right)^k = z_0 \cdot \omega^k$
where $\omega = e^{2\pi i/n}$ is a primitive $n$-th root of unity. This is a geometric sequence
with ratio $\omega$.

</details>

## 2. Complex Functions and Analyticity

### 2.1 Complex Functions

A **complex function** is a function $f : D \subseteq \mathbb{C} \to \mathbb{C}$. We can write
$f(z) = u(x, y) + iv(x, y)$ where $z = x + iy$ and $u, v$ are real-valued functions.

**Example.** $f(z) = z^2 = (x + iy)^2 = (x^2 - y^2) + i(2xy)$. Here $u = x^2 - y^2$ and $v = 2xy$.

**Example.** $f(z) = \bar{z} = x - iy$. Here $u = x$ and $v = -y$.

**Example.** $f(z) = |z|^2 = x^2 + y^2$. Here $u = x^2 + y^2$ and $v = 0$.

### 2.2 Limits and Continuity

The limit $\lim_{z \to z_0} f(z) = L$ means: for every $\varepsilon \gt{} 0$, there exists $\delta \gt{} 0$
such that $0 \lt{} |z - z_0| \lt{} \delta$ implies $|f(z) - L| \lt{} \varepsilon$.

Unlike the real case, $z$ can approach $z_0$ from any direction in $\mathbb{C}$. This makes limits
more restrictive.

**Proposition 2.1.** $\lim_{z \to z_0} f(z) = L$ if and only if $\lim_{(x,y) \to (x_0, y_0)} u(x, y) = a$
and $\lim_{(x,y) \to (x_0, y_0)} v(x, y) = b$ where $L = a + bi$.

**Definition.** $f$ is **continuous** at $z_0$ if $\lim_{z \to z_0} f(z) = f(z_0)$.

<details>
<summary>Solution</summary>

**Problem.** Show that $\lim_{z \to 0} \frac{\bar{z}}{z}$ does not exist.

Let $z = re^{i\theta}$. Then $\frac{\bar{z}}{z} = e^{-2i\theta}$. As $z \to 0$ along different
rays ($\theta = 0, \pi/2, \pi/4$, etc.), the ratio takes different values ($1, -1, -i$, etc.).
Since the limit depends on the direction of approach, it does not exist.

**Problem.** Determine whether $f(z) = \frac{z^2 - 1}{z - 1}$ is continuous at $z = 1$.

For $z \neq 1$: $f(z) = z + 1$. The limit as $z \to 1$ is $2$, but $f(1)$ is undefined
(division by zero). If we define $f(1) = 2$, then $f$ becomes continuous at $z = 1$.

</details>

### 2.3 The Derivative

**Definition.** $f$ is **differentiable** at $z_0$ if

$$f'(z_0) = \lim_{h \to 0} \frac{f(z_0 + h) - f(z_0)}{h}$$

exists (and is independent of how $h \to 0$ in $\mathbb{C}$).

_Remark._ The requirement that the limit be the same for all directions of approach of $h$ is what
makes complex differentiability far more restrictive than real differentiability.

### 2.4 Analytic Functions

**Definition.** A function $f$ is **analytic** (or **holomorphic**) on an open set
$U \subseteq \mathbb{C}$ if $f$ is differentiable at every point of $U$. A function that is analytic
on all of $\mathbb{C}$ is called **entire**.

**Examples of entire functions:** $z^n$, $e^z$, $\sin z$, $\cos z$, polynomials.

**Example of a non-analytic function:** $f(z) = \bar{z}$ is nowhere differentiable (except at
$z = 0$ if we define it, but still not analytic there).

<details>
<summary>Solution</summary>

**Problem.** Show that $f(z) = |z|^2$ is differentiable only at $z = 0$.

$f(z) = x^2 + y^2$, so $u = x^2 + y^2$ and $v = 0$.
$u_x = 2x$, $u_y = 2y$, $v_x = 0$, $v_y = 0$.
The Cauchy-Riemann equations require $2x = 0$ and $2y = 0$, so $x = y = 0$.
Thus $f$ satisfies CR only at $z = 0$.

At $z = 0$: $f'(0) = \lim_{h \to 0} \frac{|h|^2}{h} = \lim_{h \to 0} \bar{h} = 0$, so $f$ is
differentiable at $0$ but not analytic anywhere (no neighbourhood of $0$ is analytic).

**Problem.** Show that $f(z) = z\bar{z} + z$ is differentiable only at $z = 0$.

$f(z) = |z|^2 + z = (x^2 + y^2 + x) + iy$.
$u_x = 2x + 1$, $u_y = 2y$, $v_x = 0$, $v_y = 1$.
CR equations: $2x + 1 = 1 \Rightarrow x = 0$, and $2y = 0 \Rightarrow y = 0$.
At $(0, 0)$: $f'(0) = \lim_{h \to 0} \frac{h\bar{h} + h}{h} = \lim_{h \to 0} (\bar{h} + 1) = 1$.
So $f$ is differentiable at $z = 0$ only, hence nowhere analytic.

</details>

### 2.5 Branch Cuts and Multi-Valued Functions

Many important functions in complex analysis are inherently multi-valued. To work with them as
single-valued functions, we must restrict the domain.

**Definition.** A **branch** of a multi-valued function $f$ is a single-valued analytic function $g$
defined on a domain $D$ such that $g(z) \in f(z)$ for all $z \in D$.

**The Complex Logarithm.** We define $\log z = \ln|z| + i\arg(z)$, which is multi-valued because
$\arg(z) = \mathrm{Arg}(z) + 2\pi k$ for $k \in \mathbb{Z}$. The **principal branch** is

$$\mathrm{Log}\, z = \ln|z| + i\,\mathrm{Arg}(z)$$

defined on $\mathbb{C} \setminus (-\infty, 0]$. The negative real axis is called the **branch cut**.

**Proposition 2.2.** The principal branch $\mathrm{Log}\, z$ is analytic on
$\mathbb{C} \setminus (-\infty, 0]$ and $\frac{d}{dz}\,\mathrm{Log}\, z = \frac{1}{z}$.

**Complex Powers.** For $z, \alpha \in \mathbb{C}$ with $z \neq 0$:

$$z^\alpha = e^{\alpha \log z}$$

This is multi-valued in general. When $\alpha$ is rational with reduced form $p/q$, there are exactly
$q$ distinct values.

<details>
<summary>Solution</summary>

**Problem.** Find all values of $(-1)^i$.

$(-1)^i = e^{i \log(-1)} = e^{i(i\pi + 2\pi i k)} = e^{-\pi - 2\pi k}$ for $k \in \mathbb{Z}$.

These are all positive real numbers: $\ldots, e^{3\pi}, e^{\pi}, e^{-\pi}, e^{-3\pi}, \ldots$.
The principal value (using the principal branch) is $e^{-\pi}$.

**Problem.** Find all values of $i^{1/2}$.

$i^{1/2} = e^{(1/2)\log i} = e^{(1/2)(i\pi/2 + 2\pi i k)} = e^{i\pi/4 + i\pi k}$.

For $k = 0$: $e^{i\pi/4} = \frac{\sqrt{2}}{2}(1 + i)$.
For $k = 1$: $e^{i5\pi/4} = -\frac{\sqrt{2}}{2}(1 + i)$.
These are the two square roots of $i$.

**Problem.** Find the domain of analyticity of $f(z) = \mathrm{Log}(z^2 + 1)$.

$\mathrm{Log}\, w$ is analytic on $\mathbb{C} \setminus (-\infty, 0]$, so we need
$z^2 + 1 \notin (-\infty, 0]$.

$z^2 + 1 \leq 0$ when $z^2 \leq -1$, i.e., $z \in [-i, 0] \cup [0, i]$ (the imaginary axis
segment from $-i$ to $i$). Also $z^2 + 1 = 0$ at $z = \pm i$.

Domain: $\mathbb{C} \setminus \{z : z = iy,\, y \in [-1, 1]\}$.

</details>

## 3. The Cauchy-Riemann Equations

### 3.1 Statement

**Theorem 3.1 (Cauchy-Riemann Equations).** If $f(z) = u(x, y) + iv(x, y)$ is differentiable at
$z = x + iy$, then

$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$

_Proof._ Compute the limit along the real axis ($h \in \mathbb{R}$, $h \to 0$):

$$f'(z) = \lim_{h \to 0} \frac{u(x+h, y) - u(x, y)}{h} + i\lim_{h \to 0} \frac{v(x+h, y) - v(x, y)}{h} = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x}$$

Compute along the imaginary axis ($h = ik$, $k \in \mathbb{R}$, $k \to 0$):

$$f'(z) = \lim_{k \to 0} \frac{u(x, y+k) - u(x, y)}{ik} + i\lim_{k \to 0} \frac{v(x, y+k) - v(x, y)}{ik} = -i\frac{\partial u}{\partial y} + \frac{\partial v}{\partial y}$$

Equating real and imaginary parts: $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
and $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$. $\blacksquare$

### 3.2 Sufficiency Condition

**Theorem 3.2.** If $u$ and $v$ have continuous first partial derivatives on an open set $U$ and
satisfy the Cauchy-Riemann equations on $U$, then $f = u + iv$ is analytic on $U$.

_Proof._ Since $u_x, u_y, v_x, v_y$ are continuous on $U$, $u$ and $v$ are (real) differentiable.
Let $\Delta z = \Delta x + i\Delta y$. By real differentiability:

$u(x + \Delta x, y + \Delta y) - u(x, y) = u_x\,\Delta x + u_y\,\Delta y + \varepsilon_1$
$v(x + \Delta x, y + \Delta y) - v(x, y) = v_x\,\Delta x + v_y\,\Delta y + \varepsilon_2$

where $\varepsilon_1, \varepsilon_2 = o(|\Delta z|)$. Therefore

$\frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{(u_x + iv_x)\Delta x + (u_y + iv_y)\Delta y + \varepsilon_1 + i\varepsilon_2}{\Delta x + i\Delta y}$

By CR: $u_y + iv_y = -v_x + iu_x = i(u_x + iv_x)$. Substituting:

$= (u_x + iv_x)\frac{\Delta x + i\Delta y}{\Delta x + i\Delta y} + \frac{o(|\Delta z|)}{\Delta z} \to u_x + iv_x$

as $\Delta z \to 0$. $\blacksquare$

### 3.3 The Derivative in Terms of Partial Derivatives

When the Cauchy-Riemann equations hold:

$$f'(z) = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i\frac{\partial u}{\partial y}$$

### 3.4 Harmonic Functions

**Definition.** A real-valued function $\phi(x, y)$ is **harmonic** if $\phi_{xx} + \phi_{yy} = 0$
(Laplace's equation).

**Proposition 3.3.** If $f = u + iv$ is analytic, then $u$ and $v$ are harmonic.

_Proof._ From the Cauchy-Riemann equations: $u_x = v_y$ and $u_y = -v_x$. Differentiating:
$u_{xx} = v_{yx}$ and $u_{yy} = -v_{xy}$. By equality of mixed partials,
$u_{xx} + u_{yy} = v_{yx} - v_{xy} = 0$. Similarly for $v$. $\blacksquare$

**Definition.** If $u$ and $v$ are harmonic on $U$ and satisfy the Cauchy-Riemann equations, then
$v$ is the **harmonic conjugate** of $u$.

**Proposition 3.4.** If $U$ is a simply connected domain and $u$ is harmonic on $U$, then $u$ has
a harmonic conjugate on $U$, unique up to an additive constant.

_Proof._ Define $v(x, y) = \int_{(x_0, y_0)}^{(x, y)} (-u_y\, dx + u_x\, dy)$.
The integrand is closed (since $(-u_y)_y = -u_{yy} = u_{xx} = (u_x)_x$) and since $U$ is simply
connected, $v$ is well-defined (path-independent) by Green's theorem. Then
$v_x = -u_y$ and $v_y = u_x$, which are the CR equations. $\blacksquare$

<details>
<summary>Solution</summary>

**Problem.** Find the harmonic conjugate of $u(x, y) = x^3 - 3xy^2$.

Verify $u$ is harmonic: $u_{xx} = 6x$, $u_{yy} = -6x$, so $u_{xx} + u_{yy} = 0$. $\checkmark$

By CR: $v_y = u_x = 3x^2 - 3y^2$, so $v = 3x^2 y - y^3 + g(x)$.
Also $v_x = -u_y = 6xy$, so $6xy = 6xy + g'(x)$, giving $g'(x) = 0$, so $g(x) = C$.

Harmonic conjugate: $v(x, y) = 3x^2 y - y^3 + C$.

_Note:_ $f(z) = u + iv = x^3 - 3xy^2 + i(3x^2 y - y^3) = (x + iy)^3 = z^3$.

**Problem.** Show that $u(x, y) = \ln(x^2 + y^2)$ is harmonic on $\mathbb{R}^2 \setminus \{0\}$ but
has no harmonic conjugate on $\mathbb{R}^2 \setminus \{0\}$.

$u_x = \frac{2x}{x^2 + y^2}$, $u_{xx} = \frac{2(y^2 - x^2)}{(x^2 + y^2)^2}$.
$u_y = \frac{2y}{x^2 + y^2}$, $u_{yy} = \frac{2(x^2 - y^2)}{(x^2 + y^2)^2}$.
$\Delta u = 0$. $\checkmark$

However, $\oint_{|z|=1} (-u_y\, dx + u_x\, dy) = \oint_{|z|=1} \frac{-y\, dx + x\, dy}{x^2 + y^2}
= \int_0^{2\pi} 1\, d\theta = 2\pi \neq 0$.

Since $\mathbb{R}^2 \setminus \{0\}$ is not simply connected and this integral is non-zero, no
harmonic conjugate exists on this domain.

</details>

### 3.5 Worked Examples: Verifying CR Equations

<details>
<summary>Solution</summary>

**Problem.** Verify that $f(z) = e^z$ satisfies the Cauchy-Riemann equations and find $f'(z)$.

_Solution._ $e^z = e^{x+iy} = e^x(\cos y + i\sin y)$. So $u = e^x \cos y$ and $v = e^x \sin y$.

$u_x = e^x \cos y$, $u_y = -e^x \sin y$, $v_x = e^x \sin y$, $v_y = e^x \cos y$.

Cauchy-Riemann: $u_x = e^x \cos y = v_y$ and $u_y = -e^x \sin y = -v_x$. Both satisfied.

$f'(z) = u_x + iv_x = e^x \cos y + ie^x \sin y = e^z$. $\blacksquare$

**Problem.** Verify CR for $f(z) = \sin z$ and find $f'(z)$.

$\sin z = \sin(x + iy) = \sin x \cosh y + i\cos x \sinh y$.

$u = \sin x \cosh y$, $v = \cos x \sinh y$.

$u_x = \cos x \cosh y$, $u_y = \sin x \sinh y$.
$v_x = -\sin x \sinh y$, $v_y = \cos x \cosh y$.

CR: $u_x = \cos x \cosh y = v_y$ $\checkmark$ and $u_y = \sin x \sinh y = -v_x$ $\checkmark$.

$f'(z) = u_x + iv_x = \cos x \cosh y - i\sin x \sinh y = \cos z$. $\blacksquare$

**Problem.** Show $f(z) = \frac{1}{z}$ satisfies CR on $\mathbb{C} \setminus \{0\}$.

$\frac{1}{z} = \frac{\bar{z}}{|z|^2} = \frac{x - iy}{x^2 + y^2}$.

$u = \frac{x}{x^2 + y^2}$, $v = \frac{-y}{x^2 + y^2}$.

$u_x = \frac{y^2 - x^2}{(x^2 + y^2)^2}$, $v_y = \frac{y^2 - x^2}{(x^2 + y^2)^2}$. So $u_x = v_y$. $\checkmark$

$u_y = \frac{-2xy}{(x^2 + y^2)^2}$, $v_x = \frac{2xy}{(x^2 + y^2)^2}$. So $u_y = -v_x$. $\checkmark$

$f'(z) = u_x + iv_x = \frac{-(x^2 - y^2 + 2ixy)}{(x^2 + y^2)^2} = \frac{-1}{z^2}$. $\blacksquare$

</details>

## 4. Complex Integration

### 4.1 Contours

A **contour** (or piecewise smooth path) in $\mathbb{C}$ is a continuous function
$\gamma : [a, b] \to \mathbb{C}$ that is differentiable except at finitely many points, with a
continuous derivative everywhere it exists.

A **simple closed contour** is a contour with $\gamma(a) = \gamma(b)$ and no other
self-intersections.

### 4.2 The Complex Integral

**Definition.** For a contour $\gamma$ and a continuous function $f$ on $\gamma$:

$$\int_{\gamma} f(z)\, dz = \int_a^b f(\gamma(t))\gamma'(t)\, dt$$

### 4.3 Basic Properties

**Proposition 4.1.** The complex integral is linear:

$$\int_\gamma (af + bg)\, dz = a\int_\gamma f\, dz + b\int_\gamma g\, dz$$

**Proposition 4.2.** Reversing orientation changes the sign:

$$\int_{-\gamma} f\, dz = -\int_\gamma f\, dz$$

**Proposition 4.3.** Additivity over contours:

$$\int_{\gamma_1 + \gamma_2} f\, dz = \int_{\gamma_1} f\, dz + \int_{\gamma_2} f\, dz$$

### 4.4 ML Inequality

**Proposition 4.4 (ML Inequality).** If $|f(z)| \leq M$ for all $z$ on a contour $\gamma$ of length
$L$, then

$$\left|\int_\gamma f(z)\, dz\right| \leq ML$$

_Proof._ $\left|\int_a^b f(\gamma(t))\gamma'(t)\, dt\right| \leq \int_a^b |f(\gamma(t))||\gamma'(t)|\, dt
\leq M \int_a^b |\gamma'(t)|\, dt = ML$. $\blacksquare$

### 4.5 Worked Examples: Contour Integrals

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma z^2\, dz$ where $\gamma$ is the line segment from $0$ to $1 + i$.

_Solution._ Parameterize $\gamma(t) = t(1 + i)$ for $0 \leq t \leq 1$. Then $\gamma'(t) = 1 + i$.

$\int_\gamma z^2\, dz = \int_0^1 (t(1+i))^2 (1+i)\, dt = (1+i)^3 \int_0^1 t^2\, dt = (1+i)^3 \cdot \frac{1}{3}$

$(1+i)^3 = (1+i)(1+i)^2 = (1+i)(2i) = 2i + 2i^2 = 2i - 2 = -2 + 2i$.

$\int_\gamma z^2\, dz = \frac{-2 + 2i}{3}$. $\blacksquare$

**Problem.** Evaluate $\int_\gamma \bar{z}\, dz$ where $\gamma$ is the unit circle traversed once
counterclockwise.

$\gamma(t) = e^{it}$, $0 \leq t \leq 2\pi$, $\gamma'(t) = ie^{it}$.
$\bar{z} = e^{-it}$ on $\gamma$.

$\int_\gamma \bar{z}\, dz = \int_0^{2\pi} e^{-it} \cdot ie^{it}\, dt = \int_0^{2\pi} i\, dt = 2\pi i$.

_Note:_ Since $\bar{z}$ is not analytic, this result is non-zero, as expected.

**Problem.** Evaluate $\int_\gamma \frac{dz}{z}$ where $\gamma$ is the upper semicircle
$z = e^{i\theta}$, $0 \leq \theta \leq \pi$.

$\int_0^\pi \frac{ie^{i\theta}}{e^{i\theta}}\, d\theta = \int_0^\pi i\, d\theta = i\pi$.

**Problem.** Evaluate $\int_\gamma z\, dz$ where $\gamma$ consists of the line segment from $0$ to
$1$ followed by the line segment from $1$ to $1 + i$.

$\gamma_1(t) = t$, $0 \leq t \leq 1$: $\int_0^1 t \cdot 1\, dt = \frac{1}{2}$.

$\gamma_2(t) = 1 + it$, $0 \leq t \leq 1$: $\int_0^1 (1 + it) \cdot i\, dt = \int_0^1 (i - t)\, dt = i - \frac{1}{2}$.

Total: $\frac{1}{2} + i - \frac{1}{2} = i$.

Check: Since $z$ is entire, the integral from $0$ to $1 + i$ is $\frac{1}{2}(1+i)^2 = i$.
Consistent. $\blacksquare$

</details>

### 4.6 ML Inequality Applications

<details>
<summary>Solution</summary>

**Problem.** Use the ML inequality to show that $\lim_{R \to \infty} \int_{C_R} \frac{e^{iz}}{z}\, dz = 0$
where $C_R$ is the upper semicircle $|z| = R$, $\mathrm{Im}(z) \geq 0$.

On $C_R$: $z = Re^{i\theta}$, $0 \leq \theta \leq \pi$.
$|e^{iz}| = |e^{iR(\cos\theta + i\sin\theta)}| = e^{-R\sin\theta}$.

$\left|\int_{C_R} \frac{e^{iz}}{z}\, dz\right| \leq \int_0^\pi \frac{e^{-R\sin\theta}}{R} \cdot R\, d\theta
= \int_0^\pi e^{-R\sin\theta}\, d\theta$.

By Jordan's inequality $\sin\theta \geq \frac{2\theta}{\pi}$ for $\theta \in [0, \pi/2]$:

$\leq 2\int_0^{\pi/2} e^{-2R\theta/\pi}\, d\theta = \frac{\pi}{R}(1 - e^{-R}) \to 0$ as $R \to \infty$. $\blacksquare$

**Problem.** Bound $\left|\int_\gamma \frac{dz}{z^2 + 4}\right|$ where $\gamma$ is $|z| = 3$.

On $\gamma$: $|z^2 + 4| \geq |z|^2 - 4 = 9 - 4 = 5$ (reverse triangle inequality).
So $\left|\frac{1}{z^2 + 4}\right| \leq \frac{1}{5}$.

Length of $\gamma$: $L = 2\pi \cdot 3 = 6\pi$.

$\left|\int_\gamma \frac{dz}{z^2 + 4}\right| \leq \frac{1}{5} \cdot 6\pi = \frac{6\pi}{5}$.

</details>

### 4.7 Antiderivative Method

When $f$ is analytic on a simply connected domain and has a known antiderivative $F$ with $F' = f$:

$$\int_\gamma f(z)\, dz = F(\gamma(b)) - F(\gamma(a))$$

This follows from the fundamental theorem of calculus applied to $F(\gamma(t))$.

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma \cos z\, dz$ where $\gamma$ is any path from $0$ to $\pi + i$.

Since $\cos z$ is entire with antiderivative $\sin z$:

$\int_\gamma \cos z\, dz = \sin(\pi + i) - \sin(0) = \sin(\pi + i)$.

$\sin(\pi + i) = \sin\pi\cosh 1 + i\cos\pi\sinh 1 = -i\sinh 1$.

So the integral equals $-i\sinh 1$.

**Problem.** Evaluate $\int_\gamma e^{2z}\, dz$ where $\gamma$ is any path from $1$ to $i$.

Antiderivative: $\frac{1}{2}e^{2z}$.

$\int_\gamma e^{2z}\, dz = \frac{1}{2}(e^{2i} - e^{2})$.

</details>

## 5. Cauchy's Theorem

### 5.1 Statement

**Theorem 5.1 (Cauchy's Theorem).** If $f$ is analytic on a simply connected domain $D$ and $\gamma$
is a simple closed contour in $D$, then

$$\int_\gamma f(z)\, dz = 0$$

_Proof (for $f'$ continuous)._ By Green's theorem in the plane, writing $f = u + iv$:

$$\int_\gamma f\, dz = \int_\gamma (u\, dx - v\, dy) + i\int_\gamma (v\, dx + u\, dy)$$

Applying Green's theorem to each integral:

$= \iint_D (-v_x - u_y)\, dA + i\iint_D (u_x - v_y)\, dA = 0$

by the Cauchy-Riemann equations. $\blacksquare$

### 5.2 Simply Connected Domains

A domain $D \subseteq \mathbb{C}$ is **simply connected** if every simple closed contour in $D$ can
be continuously shrunk to a point within $D$.

**Cauchy's theorem may fail on multiply connected domains.** For example,
$\int_\gamma \frac{1}{z}\, dz = 2\pi i$ where $\gamma$ is the unit circle (traversing a region that
excludes the singularity at $z = 0$).

### 5.3 Path Independence

**Corollary 5.2.** If $f$ is analytic on a simply connected domain $D$, then the integral
$\int_{z_0}^{z_1} f(z)\, dz$ is independent of the path from $z_0$ to $z_1$ in $D$.

### 5.4 Antiderivatives

**Theorem 5.3.** If $f$ is analytic on a simply connected domain $D$, then $f$ has an antiderivative
$F$ in $D$ (i.e., $F'(z) = f(z)$), and

$$\int_\gamma f(z)\, dz = F(z_1) - F(z_0)$$

where $z_0$ and $z_1$ are the endpoints of $\gamma$.

### 5.5 Cauchy's Theorem for Multiply Connected Domains

**Theorem 5.4.** If $f$ is analytic on a domain
$D$ containing simple closed contours $\gamma, \gamma_1, \ldots, \gamma_n$ where $\gamma_1, \ldots, \gamma_n$
lie in the interior of $\gamma$ and the region between $\gamma$ and the $\gamma_k$ is contained in $D$,
and all contours are positively oriented, then

$$\int_\gamma f(z)\, dz = \sum_{k=1}^n \int_{\gamma_k} f(z)\, dz$$

### 5.6 Deformation of Contours

**Theorem 5.5 (Deformation of Contours).** If $f$ is analytic on a domain containing two simple
closed contours $\gamma_1$ and $\gamma_2$ where one can be continuously deformed into the other
within the domain of analyticity of $f$, then

$$\int_{\gamma_1} f(z)\, dz = \int_{\gamma_2} f(z)\, dz$$

_Proof._ This follows directly from Theorem 5.4 applied to the region between $\gamma_1$ and
$\gamma_2$. $\blacksquare$

_Remark._ This theorem is enormously useful: we can replace a complicated contour with a simpler one
(a small circle around each singularity) without changing the value of the integral.

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma \frac{dz}{z - 2}$ where $\gamma$ is the ellipse
$\frac{x^2}{4} + \frac{y^2}{9} = 1$.

Since $z = 2$ is inside the ellipse and $\frac{1}{z - 2}$ is analytic everywhere else,
by deformation of contours we can replace $\gamma$ with a small circle around $z = 2$:

$\int_\gamma \frac{dz}{z - 2} = 2\pi i$.

**Problem.** Evaluate $\int_\gamma \frac{e^z}{z}\, dz$ where $\gamma$ is the square with vertices
$\pm 2 \pm 2i$.

$\frac{e^z}{z}$ is analytic on and inside $\gamma$ except at $z = 0$.
By deformation: $\int_\gamma \frac{e^z}{z}\, dz = \int_{|z|=r} \frac{e^z}{z}\, dz = 2\pi i \cdot e^0 = 2\pi i$.

**Problem.** Evaluate $\int_\gamma \frac{dz}{z^2 - 1}$ where $\gamma$ is $|z| = 2$.

$\frac{1}{z^2 - 1} = \frac{1}{2}\left(\frac{1}{z-1} - \frac{1}{z+1}\right)$.

Both $z = \pm 1$ are inside $|z| = 2$.

$\int_\gamma \frac{dz}{z^2 - 1} = \frac{1}{2}(2\pi i - 2\pi i) = 0$.

</details>

## 6. Cauchy's Integral Formula

### 6.1 Statement

**Theorem 6.1 (Cauchy's Integral Formula).** If $f$ is analytic on a simply connected domain
containing a simple closed positively oriented contour $\gamma$, and $z_0$ is inside $\gamma$, then

$$f(z_0) = \frac{1}{2\pi i}\int_\gamma \frac{f(z)}{z - z_0}\, dz$$

_Proof._ Let $\gamma_\varepsilon$ be a small circle of radius $\varepsilon$ around $z_0$. Since
$\frac{f(z)}{z - z_0}$ is analytic on the region between $\gamma$ and $\gamma_\varepsilon$,

$\int_\gamma \frac{f(z)}{z - z_0}\, dz = \int_{\gamma_\varepsilon} \frac{f(z)}{z - z_0}\, dz$

On $\gamma_\varepsilon$: $f(z) = f(z_0) + (z - z_0)f'(\zeta)$ for some $\zeta$ between $z$ and
$z_0$.

$= \int_{\gamma_\varepsilon} \frac{f(z_0)}{z - z_0}\, dz + \int_{\gamma_\varepsilon} f'(\zeta)\, dz = f(z_0) \cdot 2\pi i + 0$

since $\int_{\gamma_\varepsilon} \frac{dz}{z - z_0} = 2\pi i$ (parameterize
$z = z_0 + \varepsilon e^{i\theta}$) and $\int_{\gamma_\varepsilon} f'(\zeta)\, dz \to 0$ as
$\varepsilon \to 0$ by the ML inequality. $\blacksquare$

### 6.2 Derivatives

**Theorem 6.2 (Cauchy's Integral Formula for Derivatives).** Under the same conditions,

$$f^{(n)}(z_0) = \frac{n!}{2\pi i}\int_\gamma \frac{f(z)}{(z - z_0)^{n+1}}\, dz$$

_Proof._ We proceed by induction. The base case $n = 0$ is Theorem 6.1. For the inductive step,
assume the formula holds for $n$. Using the difference quotient:

$f^{(n+1)}(z_0) = \lim_{h \to 0} \frac{f^{(n)}(z_0 + h) - f^{(n)}(z_0)}{h}
= \lim_{h \to 0} \frac{n!}{2\pi i}\int_\gamma \frac{1}{h}\left[\frac{f(z)}{(z - z_0 - h)^{n+1}} - \frac{f(z)}{(z - z_0)^{n+1}}\right] dz$

$= \frac{(n+1)!}{2\pi i}\int_\gamma \frac{f(z)}{(z - z_0)^{n+2}}\, dz$

where we justified passing the limit inside the integral by uniform convergence of the integrand
on compact subsets. $\blacksquare$

### 6.3 Consequences of Cauchy's Integral Formula

**Corollary 6.3.** If $f$ is analytic, then $f$ is infinitely differentiable.

This is remarkable: a single complex derivative implies the existence of all derivatives.

**Corollary 6.4 (Cauchy's Estimates).** If $f$ is analytic on and inside a circle $|z - z_0| = R$
and $|f(z)| \leq M$ on the circle, then

$$|f^{(n)}(z_0)| \leq \frac{n!M}{R^n}$$

_Proof._ From the integral formula:
$|f^{(n)}(z_0)| = \frac{n!}{2\pi}\left|\int_{|z-z_0|=R} \frac{f(z)}{(z-z_0)^{n+1}}\, dz\right|
\leq \frac{n!}{2\pi} \cdot \frac{M}{R^{n+1}} \cdot 2\pi R = \frac{n!M}{R^n}$.
$\blacksquare$

### 6.4 Liouville's Theorem

**Theorem 6.5 (Liouville's Theorem).** Every bounded entire function is constant.

_Proof._ If $|f(z)| \leq M$ for all $z$, then by Cauchy's estimates with $R$ arbitrarily large:
$|f'(z_0)| \leq \frac{M}{R} \to 0$ as $R \to \infty$. So $f'(z) = 0$ for all $z$, meaning $f$ is
constant. $\blacksquare$

**Corollary 6.6.** If $f$ is entire and $|f(z)| \geq M$ for all $z$ (bounded away from zero), then
$f$ is constant.

_Proof._ $1/f$ is entire and bounded by $1/M$, so constant by Liouville. $\blacksquare$

### 6.5 Fundamental Theorem of Algebra

**Theorem 6.7 (Fundamental Theorem of Algebra).** Every non-constant polynomial
$p(z) \in \mathbb{C}[z]$ has a root in $\mathbb{C}$.

_Proof._ Suppose $p(z)$ has no root. Then $f(z) = 1/p(z)$ is entire. Since $|p(z)| \to \infty$ as
$|z| \to \infty$, $f(z) \to 0$, so $f$ is bounded. By Liouville's theorem, $f$ is constant, so $p$
is constant, a contradiction. $\blacksquare$

**Corollary 6.8.** Every polynomial of degree $n \geq 1$ has exactly $n$ roots in $\mathbb{C}$,
counting multiplicities.

### 6.6 Worked Examples: Cauchy's Integral Formula

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma \frac{e^z}{z - 1}\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ The function $\frac{e^z}{z - 1}$ has a singularity at $z = 1$, which lies inside
$\gamma$. By Cauchy's integral formula with $f(z) = e^z$ and $z_0 = 1$:

$\int_\gamma \frac{e^z}{z - 1}\, dz = 2\pi i \cdot f(1) = 2\pi i \cdot e^1 = 2\pi i e$.
$\blacksquare$

**Problem.** Evaluate $\int_\gamma \frac{z^2 + 1}{(z - i)^3}\, dz$ where $\gamma$ is $|z| = 2$.

By Cauchy's formula for derivatives with $f(z) = z^2 + 1$ and $z_0 = i$:

$\int_\gamma \frac{f(z)}{(z - i)^3}\, dz = \frac{2\pi i}{2!}\,f''(i)$.

$f'(z) = 2z$, $f''(z) = 2$. So $f''(i) = 2$.

$\int_\gamma \frac{z^2 + 1}{(z - i)^3}\, dz = \frac{2\pi i}{2} \cdot 2 = 2\pi i$. $\blacksquare$

**Problem.** Evaluate $\int_\gamma \frac{\sin z}{z(z - \pi)}\, dz$ where $\gamma$ is $|z| = 4$.

Singularities inside $\gamma$: $z = 0$ and $z = \pi$.

$\frac{\sin z}{z(z - \pi)} = \frac{1}{\pi}\left(\frac{\sin z}{z - \pi} - \frac{\sin z}{z}\right)$.

At $z = 0$: by CIF, $\int_\gamma \frac{\sin z}{z}\, dz = 2\pi i \cdot \sin(0) = 0$.
At $z = \pi$: by CIF, $\int_\gamma \frac{\sin z}{z - \pi}\, dz = 2\pi i \cdot \sin(\pi) = 0$.

$\int_\gamma \frac{\sin z}{z(z - \pi)}\, dz = \frac{1}{\pi}(0 - 0) = 0$.

**Problem.** Evaluate $\int_\gamma \frac{e^{2z}}{(z - 1)^2(z + 1)}\, dz$ where $\gamma$ is $|z| = 3$.

By partial fractions: $\frac{1}{(z-1)^2(z+1)} = \frac{1/4}{z+1} - \frac{1/4}{z-1} + \frac{1/2}{(z-1)^2}$.

$\int_\gamma \frac{e^{2z}}{(z-1)^2(z+1)}\, dz = \frac{1}{4} \cdot 2\pi i \cdot e^{-2} - \frac{1}{4} \cdot 2\pi i \cdot e^2 + \frac{1}{2} \cdot \frac{2\pi i}{1!} \cdot 2e^2$

$= \frac{\pi i e^{-2}}{2} - \frac{\pi i e^2}{2} + 2\pi i e^2 = \frac{\pi i e^{-2}}{2} + \frac{3\pi i e^2}{2}$.

</details>

## 7. Taylor and Laurent Series

### 7.1 Taylor Series

**Theorem 7.1.** If $f$ is analytic on $|z - z_0| \lt{} R$, then

$$f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(z_0)}{n!}(z - z_0)^n$$

and the series converges uniformly on compact subsets of $|z - z_0| \lt{} R$.

_Proof._ For $|z - z_0| \lt{} r \lt{} R$, apply Cauchy's integral formula on $|\zeta - z_0| = r$:

$f(z) = \frac{1}{2\pi i}\int_{|\zeta - z_0| = r} \frac{f(\zeta)}{\zeta - z}\, d\zeta$

Write
$\frac{1}{\zeta - z} = \frac{1}{(\zeta - z_0) - (z - z_0)} = \frac{1}{\zeta - z_0} \cdot \frac{1}{1 - (z - z_0)/(\zeta - z_0)}$
$= \sum_{n=0}^{\infty} \frac{(z - z_0)^n}{(\zeta - z_0)^{n+1}}$ (geometric series, convergent since
$|z - z_0|/|\zeta - z_0| \lt{} 1$).

Substituting and integrating term by term gives the Taylor series. $\blacksquare$

_Remark._ The radius of convergence $R$ is the distance from $z_0$ to the nearest singularity of $f$.

### 7.2 Common Taylor Series

$$e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!} = 1 + z + \frac{z^2}{2!} + \cdots$$

$$\sin z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n+1}}{(2n+1)!}$$

$$\cos z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n}}{(2n)!}$$

$$\frac{1}{1 - z} = \sum_{n=0}^{\infty} z^n, \quad |z| \lt{} 1$$

$$\ln(1 + z) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} z^n}{n}, \quad |z| \lt{} 1$$

### 7.3 Worked Examples: Taylor Series

<details>
<summary>Solution</summary>

**Problem.** Find the Taylor series of $f(z) = \frac{1}{z}$ centered at $z_0 = 1$.

$\frac{1}{z} = \frac{1}{1 + (z - 1)} = \sum_{n=0}^{\infty} (-1)^n (z - 1)^n$ for $|z - 1| \lt{} 1$.

Radius of convergence: distance from $z_0 = 1$ to the singularity at $z = 0$, which is $1$.

**Problem.** Find the Taylor series of $f(z) = \frac{1}{(1 - z)^2}$ centered at $z_0 = 0$.

$\frac{1}{(1-z)^2} = \frac{d}{dz}\left[\frac{1}{1 - z}\right] = \frac{d}{dz}\sum_{n=0}^{\infty} z^n
= \sum_{n=1}^{\infty} nz^{n-1} = \sum_{n=0}^{\infty} (n+1)z^n$ for $|z| \lt{} 1$.

**Problem.** Find the Taylor series of $f(z) = e^z \sin z$ up to the $z^4$ term.

$e^z = 1 + z + z^2/2 + z^3/6 + z^4/24 + \cdots$
$\sin z = z - z^3/6 + z^5/120 - \cdots$

$e^z \sin z = (1 + z + z^2/2 + z^3/6 + z^4/24 + \cdots)(z - z^3/6 + \cdots)$

$= z + z^2 + z^3/2 + z^4/6 + \cdots - z^3/6 - z^4/6 + \cdots$
$= z + z^2 + z^3/3 - z^4/30 + \cdots$

</details>

### 7.4 Laurent Series

**Theorem 7.2 (Laurent Series).** If $f$ is analytic on the annulus $r \lt{} |z - z_0| \lt{} R$,
then

$$f(z) = \sum_{n=-\infty}^{\infty} a_n(z - z_0)^n = \cdots + \frac{a_{-2}}{(z - z_0)^2} + \frac{a_{-1}}{z - z_0} + a_0 + a_1(z - z_0) + \cdots$$

where

$$a_n = \frac{1}{2\pi i}\int_\gamma \frac{f(z)}{(z - z_0)^{n+1}}\, dz$$

for any simple closed contour $\gamma$ in the annulus encircling $z_0$.

The **principal part** is $\sum_{n=-\infty}^{-1} a_n(z - z_0)^n$ (negative powers). The **analytic
part** is $\sum_{n=0}^{\infty} a_n(z - z_0)^n$ (non-negative powers).

### 7.5 Classification of Laurent Series

The Laurent series expansion depends on the annulus of convergence. A function may have different
Laurent expansions in different annuli.

**Proposition 7.3.** The Laurent series expansion of $f$ in an annulus is unique.

### 7.6 Worked Examples: Laurent Series

<details>
<summary>Solution</summary>

**Problem.** Find the Laurent series of $f(z) = \frac{1}{z(z-1)}$ in $0 \lt{} |z| \lt{} 1$.

_Solution._ Using partial fractions: $\frac{1}{z(z-1)} = \frac{1}{z-1} - \frac{1}{z}$.

In $|z| \lt{} 1$: $\frac{1}{z - 1} = -\frac{1}{1 - z} = -\sum_{n=0}^{\infty} z^n$.

So $f(z) = -\sum_{n=0}^{\infty} z^n - \frac{1}{z} = \cdots - z^2 - z - 1 - \frac{1}{z}$.

The principal part is $-1/z$, so $z = 0$ is a simple pole. $\blacksquare$

**Problem.** Find the Laurent series of $f(z) = \frac{1}{z(z-1)}$ in $1 \lt{} |z| \lt{} \infty$.

In $|z| \gt{} 1$: $\frac{1}{z - 1} = \frac{1}{z} \cdot \frac{1}{1 - 1/z} = \sum_{n=2}^{\infty} z^{-n}$.

$f(z) = \sum_{n=2}^{\infty} z^{-n} - \frac{1}{z} = \frac{1}{z^2} + \frac{1}{z^3} + \cdots$

**Problem.** Find the Laurent series of $f(z) = \frac{e^z}{z^2}$ in $0 \lt{} |z| \lt{} \infty$.

$e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!}$, so $f(z) = \sum_{n=0}^{\infty} \frac{z^{n-2}}{n!}
= \frac{1}{z^2} + \frac{1}{z} + \frac{1}{2} + \frac{z}{6} + \cdots$

Residue at $z = 0$: $a_{-1} = 1$.

**Problem.** Find the Laurent series of $f(z) = \frac{1}{z^2(z - 3)}$ in $0 \lt{} |z| \lt{} 3$.

$\frac{1}{z - 3} = -\frac{1}{3}\sum_{n=0}^{\infty} \frac{z^n}{3^n}$.

$f(z) = -\sum_{n=0}^{\infty} \frac{z^{n-2}}{3^{n+1}}
= -\frac{1}{3z^2} - \frac{1}{9z} - \frac{1}{27} - \frac{z}{81} - \cdots$

Residue at $z = 0$: $a_{-1} = -\frac{1}{9}$.

</details>

### 7.7 Residue at Infinity

**Definition.** The **residue at infinity** of $f$ is defined as

$$\mathrm{Res}(f, \infty) = -\frac{1}{2\pi i}\int_{|z|=R} f(z)\, dz$$

for sufficiently large $R$ (enclosing all finite singularities).

**Proposition 7.4.** For a function $f$ with finitely many singularities in $\mathbb{C}$:

$$\sum_{\mathrm{all\ finite\ } z_k} \mathrm{Res}(f, z_k) + \mathrm{Res}(f, \infty) = 0$$

_Proof._ By the residue theorem applied to $|z| = R$ enclosing all finite singularities:

$\int_{|z|=R} f\, dz = 2\pi i \sum_{\mathrm{finite}} \mathrm{Res}(f, z_k)$.

But $\mathrm{Res}(f, \infty) = -\frac{1}{2\pi i}\int_{|z|=R} f\, dz$, so the sum is zero. $\blacksquare$

## 8. Singularities and Residue Theory

### 8.1 Isolated Singularities

Let $z_0$ be an isolated singularity of $f$ (i.e., $f$ is analytic in a punctured neighbourhood of
$z_0$).

**Classification by Laurent series:**

1. **Removable singularity**: $a_n = 0$ for all $n \lt{} 0$. Can be removed by redefining
   $f(z_0) = a_0$.
2. **Pole of order $m$**: $a_{-m} \neq 0$ and $a_n = 0$ for $n \lt{} -m$. The principal part is
   finite.
3. **Essential singularity**: infinitely many non-zero $a_n$ with $n \lt{} 0$.

**Proposition 8.1 (Riemann's Removable Singularity Theorem).** If $f$ is bounded near $z_0$, then
$z_0$ is a removable singularity.

**Proposition 8.2.** $z_0$ is a pole of order $m$ if and only if $\lim_{z \to z_0} (z - z_0)^m f(z)$
exists and is non-zero.

**Theorem 8.3 (Casorati-Weierstrass).** If $z_0$ is an essential singularity of $f$, then $f$ takes
values arbitrarily close to any complex number in every neighbourhood of $z_0$.

### 8.2 Classification with Worked Examples

<details>
<summary>Solution</summary>

**Problem.** Classify the singularities of $f(z) = \frac{\sin z}{z}$.

$z = 0$: $\sin z = z - z^3/6 + \cdots$, so $f(z) = 1 - z^2/6 + \cdots$.
No negative powers, so $z = 0$ is a removable singularity. $f(0) = 1$ by continuity.

**Problem.** Classify the singularities of $f(z) = \frac{e^z - 1}{z^2}$.

$z = 0$: $e^z - 1 = z + z^2/2 + \cdots$, so $f(z) = \frac{1}{z} + \frac{1}{2} + \cdots$.
Principal part is $1/z$, so $z = 0$ is a simple pole with residue $1$.

**Problem.** Classify the singularity of $f(z) = e^{1/z}$ at $z = 0$.

$e^{1/z} = \sum_{n=0}^{\infty} \frac{1}{n!\, z^n} = 1 + \frac{1}{z} + \frac{1}{2z^2} + \cdots$

Infinitely many negative powers $\Rightarrow$ $z = 0$ is an essential singularity.

**Problem.** Classify the singularities of $f(z) = \frac{z + 1}{z^3(z^2 + 1)}$.

$z = 0$: pole of order $3$.
$z = i$: simple pole.
$z = -i$: simple pole.

**Problem.** Determine the type of singularity of $f(z) = \frac{z}{\sin z}$ at $z = 0$.

$\sin z = z - z^3/6 + \cdots$, so $f(z) = \frac{1}{1 - z^2/6 + \cdots}
= 1 + \frac{z^2}{6} + \cdots$.

No negative powers, so $z = 0$ is a removable singularity with $f(0) = 1$.

</details>

### 8.3 Definition of the Residue

**Definition.** The **residue** of $f$ at an isolated singularity $z_0$ is the coefficient $a_{-1}$
in the Laurent expansion:

$$\mathrm{Res}(f, z_0) = a_{-1} = \frac{1}{2\pi i}\int_\gamma f(z)\, dz$$

where $\gamma$ is a small positively oriented circle around $z_0$.

### 8.4 Computing Residues

**For a simple pole at $z_0$:**

$$\mathrm{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0)f(z)$$

If $f = g/h$ where $g(z_0) \neq 0$, $h(z_0) = 0$, $h'(z_0) \neq 0$:

$$\mathrm{Res}(f, z_0) = \frac{g(z_0)}{h'(z_0)}$$

**For a pole of order $m$ at $z_0$:**

$$\mathrm{Res}(f, z_0) = \frac{1}{(m-1)!}\lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}}\left[(z - z_0)^m f(z)\right]$$

<details>
<summary>Solution</summary>

**Problem.** Find the residue of $f(z) = \frac{z}{z^2 + 4z + 3}$ at each pole.

$z^2 + 4z + 3 = (z + 1)(z + 3)$, so simple poles at $z = -1$ and $z = -3$.

At $z = -1$: $\mathrm{Res} = \lim_{z \to -1} \frac{z}{z + 3} = \frac{-1}{2}$.
At $z = -3$: $\mathrm{Res} = \lim_{z \to -3} \frac{z}{z + 1} = \frac{-3}{-2} = \frac{3}{2}$.

**Problem.** Find the residue of $f(z) = \frac{e^z}{(z - 1)^2(z - 2)}$ at each pole.

At $z = 1$ (pole of order $2$):
$\mathrm{Res} = \frac{d}{dz}\left[\frac{e^z}{z - 2}\right]_{z=1}
= \frac{e^z(z - 2) - e^z}{(z-2)^2}\Big|_{z=1} = \frac{-e - e}{1} = -2e$.

At $z = 2$ (simple pole):
$\mathrm{Res} = \frac{e^2}{(2-1)^2} = e^2$.

</details>

### 8.5 The Residue Theorem

**Theorem 8.4 (Residue Theorem).** If $f$ is analytic inside and on a simple closed positively
oriented contour $\gamma$ except for isolated singularities $z_1, z_2, \ldots, z_n$ inside $\gamma$,
then

$$\int_\gamma f(z)\, dz = 2\pi i \sum_{k=1}^{n} \mathrm{Res}(f, z_k)$$

_Proof._ For each singularity $z_k$, draw a small circle $\gamma_k$ around it. By Cauchy's theorem
applied to the multiply connected region between $\gamma$ and the $\gamma_k$:

$\int_\gamma f\, dz = \sum_{k=1}^n \int_{\gamma_k} f\, dz = \sum_{k=1}^n 2\pi i \cdot \mathrm{Res}(f, z_k)$.
$\blacksquare$

### 8.6 Worked Examples: Residue Theorem

<details>
<summary>Solution</summary>

**Problem 1.** Evaluate $\int_\gamma \frac{e^z}{z(z-1)^2}\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ Singularities inside $\gamma$: $z = 0$ (simple pole) and $z = 1$ (pole of order $2$).

At $z = 0$: $\mathrm{Res} = \lim_{z \to 0} \frac{e^z}{(z-1)^2} = \frac{1}{(-1)^2} = 1$.

At $z = 1$:
$\mathrm{Res}(f, 1) = \frac{d}{dz}\left[(z-1)^2 \cdot \frac{e^z}{z(z-1)^2}\right]_{z=1} = \frac{d}{dz}\left[\frac{e^z}{z}\right]_{z=1} = \frac{e^z \cdot z - e^z}{z^2}\Big|_{z=1} = \frac{e - e}{1} = 0$.

$\int_\gamma f\, dz = 2\pi i(1 + 0) = 2\pi i$. $\blacksquare$

**Problem 2.** Evaluate $\int_\gamma \frac{1}{z^4 + 1}\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ The poles are the fourth roots of $-1$:
$z_k = e^{i\pi/4 + ik\pi/2}$ for $k = 0, 1, 2, 3$. All four lie inside $|z| = 2$.

Each is a simple pole with $\mathrm{Res}(f, z_k) = \frac{1}{4z_k^3}$.
Since $z_k^4 = -1$: $z_k^{-3} = -z_k$, so the sum equals $-\frac{1}{4}\sum z_k = 0$.

$\int_\gamma \frac{dz}{z^4 + 1} = 2\pi i \cdot 0 = 0$. $\blacksquare$

</details>

## 9. Applications of Contour Integration

### 9.1 Evaluation of Real Integrals

Contour integration is a powerful tool for evaluating definite integrals.

### 9.2 Integrals of Rational Functions over the Real Line

**Theorem 9.1.** If $f(x) = P(x)/Q(x)$ where $\deg(Q) \geq \deg(P) + 2$ and $Q$ has no real roots,
then

$$\int_{-\infty}^{\infty} f(x)\, dx = 2\pi i \sum_{\mathrm{Im}(z_k) > 0} \mathrm{Res}(f, z_k)$$

where the sum is over poles in the upper half-plane.

_Proof._ Integrate $f(z)$ over the semicircular contour $\gamma_R$ consisting of $[-R, R]$ on the
real axis and the semicircle $|z| = R$ in the upper half-plane. As $R \to \infty$, the integral over
the semicircle vanishes (since $|f(z)| \leq M/R^2$ and the length is $\pi R$). $\blacksquare$

### 9.3 Worked Example

**Problem.** Evaluate $\int_{-\infty}^{\infty} \frac{dx}{x^2 + 1}$.

_Solution._ $f(z) = \frac{1}{z^2 + 1}$ has simple poles at $z = \pm i$.

Only $z = i$ is in the upper half-plane.

$\mathrm{Res}\left(\frac{1}{z^2 + 1}, i\right) = \frac{1}{2z}\Big|_{z = i} = \frac{1}{2i}$.

$\int_{-\infty}^{\infty} \frac{dx}{x^2 + 1} = 2\pi i \cdot \frac{1}{2i} = \pi$. $\blacksquare$

### 9.4 Integrals Involving Trigonometric Functions

For integrals of the form $\int_0^{2\pi} R(\cos\theta, \sin\theta)\, d\theta$, substitute
$z = e^{i\theta}$, so $dz = iz\, d\theta$, $\cos\theta = \frac{z + z^{-1}}{2}$,
$\sin\theta = \frac{z - z^{-1}}{2i}$.

The integral becomes $\int_{|z|=1} f(z)\, dz$ where $f(z)$ is a rational function.

### 9.5 Worked Example

**Problem.** Evaluate $\int_0^{2\pi} \frac{d\theta}{2 + \cos\theta}$.

_Solution._ Substitute $z = e^{i\theta}$: $d\theta = \frac{dz}{iz}$,
$\cos\theta = \frac{z + 1/z}{2}$.

$\int_{|z|=1} \frac{dz}{iz\left(2 + \frac{z + 1/z}{2}\right)} = \int_{|z|=1} \frac{2\, dz}{i(z^2 + 4z + 1)}$

Poles: $z^2 + 4z + 1 = 0 \Rightarrow z = -2 \pm \sqrt{3}$.

$|z_1| = |-2 + \sqrt{3}| = 2 - \sqrt{3} \lt{} 1$ (inside).
$|z_2| = |-2 - \sqrt{3}| = 2 + \sqrt{3} \gt{} 1$ (outside).

$\mathrm{Res}\left(\frac{1}{z^2 + 4z + 1}, z_1\right) = \frac{1}{2\sqrt{3}}$.

$\int_0^{2\pi} \frac{d\theta}{2 + \cos\theta} = \frac{2}{i} \cdot 2\pi i \cdot \frac{1}{2\sqrt{3}} = \frac{2\pi}{\sqrt{3}}$.
$\blacksquare$

### 9.6 Jordan's Lemma

**Theorem 9.2 (Jordan's Lemma).** If $f(z) \to 0$ uniformly as $|z| \to \infty$ in the upper
half-plane and $a \gt{} 0$, then

$$\lim_{R \to \infty} \int_{C_R} e^{iaz}f(z)\, dz = 0$$

where $C_R$ is the upper semicircle $|z| = R$, $\mathrm{Im}(z) \geq 0$.

This allows evaluation of integrals of the form $\int_{-\infty}^{\infty} f(x)\cos(ax)\, dx$ and
$\int_{-\infty}^{\infty} f(x)\sin(ax)\, dx$.

### 9.7 Fourier-Type Integrals

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_{-\infty}^{\infty} \frac{\cos x}{x^2 + 1}\, dx$.

Consider $\int_{-\infty}^{\infty} \frac{e^{ix}}{x^2 + 1}\, dx = 2\pi i \cdot \mathrm{Res}\!\left(\frac{e^{iz}}{z^2+1}, i\right)$.

$\mathrm{Res}\!\left(\frac{e^{iz}}{z^2+1}, i\right) = \frac{e^{i \cdot i}}{2i} = \frac{e^{-1}}{2i}$.

$\int_{-\infty}^{\infty} \frac{e^{ix}}{x^2 + 1}\, dx = 2\pi i \cdot \frac{e^{-1}}{2i} = \frac{\pi}{e}$.

Taking real parts: $\int_{-\infty}^{\infty} \frac{\cos x}{x^2 + 1}\, dx = \frac{\pi}{e}$.

**Problem.** Evaluate $\int_{-\infty}^{\infty} \frac{x \sin x}{x^2 + a^2}\, dx$ for $a \gt{} 0$.

Consider $\int_{-\infty}^{\infty} \frac{z\, e^{iz}}{z^2 + a^2}\, dz$.
Only $z = ia$ is in the upper half-plane.

$\mathrm{Res}\!\left(\frac{ze^{iz}}{z^2 + a^2}, ia\right) = \frac{ia \cdot e^{i \cdot ia}}{2ia} = \frac{e^{-a}}{2}$.

$\int_{-\infty}^{\infty} \frac{x\, e^{ix}}{x^2 + a^2}\, dx = 2\pi i \cdot \frac{e^{-a}}{2} = \pi i\, e^{-a}$.

Taking imaginary parts: $\int_{-\infty}^{\infty} \frac{x \sin x}{x^2 + a^2}\, dx = \pi\, e^{-a}$.

**Problem.** Evaluate $\int_0^{2\pi} \frac{\cos 2\theta}{5 + 4\cos\theta}\, d\theta$.

Substitute $z = e^{i\theta}$: $\cos\theta = (z + z^{-1})/2$, $\cos 2\theta = (z^2 + z^{-2})/2$.

$I = \frac{1}{2i}\int_{|z|=1} \frac{z^4 + 1}{z^2(2z + 1)(z + 2)}\, dz$.

Poles inside $|z| = 1$: $z = 0$ (order $2$) and $z = -1/2$ (simple).

At $z = 0$: $\mathrm{Res} = \frac{d}{dz}\left[\frac{z^4 + 1}{(2z+1)(z+2)}\right]_{z=0}
= -\frac{5}{4}$.

At $z = -1/2$: $\mathrm{Res} = \frac{17/16}{3/4} = \frac{17}{12}$.

$I = \frac{1}{2i} \cdot 2\pi i \left(-\frac{5}{4} + \frac{17}{12}\right) = \frac{\pi}{6}$.

</details>

### 9.8 Improper Integrals and Principal Value

For integrals where the integrand has poles on the real axis, we use the **Cauchy principal value**:

$$\mathrm{PV}\!\int_{-\infty}^{\infty} f(x)\, dx = \lim_{\varepsilon \to 0^+} \left(\int_{-\infty}^{a-\varepsilon} f(x)\, dx + \int_{a+\varepsilon}^{\infty} f(x)\, dx\right)$$

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\mathrm{PV}\!\int_{-\infty}^{\infty} \frac{\sin x}{x}\, dx$.

Consider $\oint_\gamma \frac{e^{iz}}{z}\, dz$ where $\gamma$ consists of $[-R, -\varepsilon]$,
$[\varepsilon, R]$ on the real axis, small upper semicircle $C_\varepsilon$ around $0$, and large
upper semicircle $C_R$.

No poles inside the contour, so the integral is $0$.

On $C_R$: vanishes as $R \to \infty$ by Jordan's lemma.
On $C_\varepsilon$ (indenting above): $\int_{C_\varepsilon} \frac{e^{iz}}{z}\, dz \to -i\pi$ as
$\varepsilon \to 0$ (half residue contribution).

$0 = \mathrm{PV}\!\int_{-\infty}^{\infty} \frac{e^{ix}}{x}\, dx + (-i\pi)$.

$\mathrm{PV}\!\int_{-\infty}^{\infty} \frac{e^{ix}}{x}\, dx = i\pi$.

Taking imaginary parts: $\mathrm{PV}\!\int_{-\infty}^{\infty} \frac{\sin x}{x}\, dx = \pi$.

</details>

## 10. Conformal Mappings

### 10.1 Definition

**Definition.** An analytic function $f$ is **conformal** at $z_0$ if $f'(z_0) \neq 0$. A conformal
mapping preserves angles (both magnitude and orientation) between curves.

### 10.2 Geometric Interpretation

If $f'(z_0) = re^{i\theta}$, then near $z_0$ the mapping $f$ acts as a rotation by $\theta$ followed
by a scaling by $r$. The Jacobian determinant is $|f'(z_0)|^2 \gt{} 0$, so orientation is preserved.

### 10.3 Common Conformal Mappings

| Mapping                          | Effect                               |
| -------------------------------- | ------------------------------------ |
| $w = az + b$ ($a \neq 0$)        | Translation, rotation, scaling       |
| $w = 1/z$                        | Inversion in the unit circle         |
| $w = z^2$                        | Squaring (doubles angles)            |
| $w = e^z$                        | Exponential (maps strips to sectors) |
| $w = \frac{z - a}{1 - \bar{a}z}$ | Möbius (maps disk to disk)           |

### 10.4 Möbius Transformations

A **Möbius transformation** (or linear fractional transformation) is

$$T(z) = \frac{az + b}{cz + d}, \quad ad - bc \neq 0$$

**Proposition 10.1.** Möbius transformations are conformal (where defined) and map circles and lines
to circles and lines.

**Proposition 10.2.** Three points determine a unique Möbius transformation: $T(z_1) = w_1$,
$T(z_2) = w_2$, $T(z_3) = w_3$.

### 10.5 Cross-Ratio

**Definition.** The **cross-ratio** of four distinct points $z_1, z_2, z_3, z_4$ is

$$(z_1, z_2, z_3, z_4) = \frac{(z_1 - z_3)(z_2 - z_4)}{(z_1 - z_4)(z_2 - z_3)}$$

**Proposition 10.3.** The cross-ratio is invariant under Möbius transformations:
$(Tz_1, Tz_2, Tz_3, Tz_4) = (z_1, z_2, z_3, z_4)$.

**Proposition 10.4.** The unique Möbius transformation sending $z_1 \mapsto 0$, $z_2 \mapsto 1$,
$z_3 \mapsto \infty$ is

$$T(z) = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$$

### 10.6 Classification of Möbius Transformations

A Möbius transformation $T(z) = \frac{az + b}{cz + d}$ is classified by its fixed points
(solutions of $T(z) = z$).

1. **Parabolic:** Exactly one fixed point. Conjugate to $w = z + k$.
2. **Elliptic:** Two fixed points, $|T'(z_0)| = 1$. Conjugate to a rotation $w = e^{i\theta} z$.
3. **Hyperbolic:** Two fixed points, $T'(z_0) \in \mathbb{R}^+$, $T'(z_0) \neq 1$. Conjugate to $w = kz$.
4. **Loxodromic:** Two fixed points, $T'(z_0) \notin \mathbb{R} \cup \{z : |z| = 1\}$. Conjugate to $w = ke^{i\theta}z$.

<details>
<summary>Solution</summary>

**Problem.** Find the Möbius transformation mapping $0 \mapsto i$, $1 \mapsto 0$, $\infty \mapsto -i$.

$T(z) = \frac{az + b}{cz + d}$ with $T(0) = i \Rightarrow b/d = i \Rightarrow b = id$.
$T(1) = 0 \Rightarrow a = -b = -id$.
$T(\infty) = -i \Rightarrow a/c = -i \Rightarrow c = d$.

$T(z) = \frac{-idz + id}{dz + d} = \frac{i(1 - z)}{z + 1}$.

**Problem.** Show that $T(z) = \frac{z - 1}{z + 1}$ maps the right half-plane to the unit disk.

If $\mathrm{Re}(z) \gt{} 0$, then $|z - 1| \lt{} |z + 1|$, so $|T(z)| \lt{} 1$.

Check boundary: $T(i) = \frac{i - 1}{i + 1} = \frac{(i-1)(-i+1)}{(i+1)(-i+1)} = \frac{2}{2} = 1$. $|T(i)| = 1$. $\checkmark$

**Problem.** Classify $T(z) = \frac{2z + 1}{z + 2}$.

Fixed points: $z = \frac{2z + 1}{z + 2} \Rightarrow z^2 = 1 \Rightarrow z = \pm 1$.

$T'(z) = \frac{3}{(z + 2)^2}$. $T'(1) = 1/3$, $T'(-1) = 3$.

Both multipliers are real and positive (not equal to $1$), so $T$ is hyperbolic.

</details>

### 10.7 The Riemann Mapping Theorem

**Theorem 10.5 (Riemann Mapping Theorem).** Let $U$ be a simply connected open proper subset of
$\mathbb{C}$. Then there exists a bijective conformal map from $U$ onto the unit disk
$\mathbb{D} = \{z : |z| \lt{} 1\}$.

This is one of the most profound results in complex analysis, establishing that all simply connected
domains (other than $\mathbb{C}$ itself) are conformally equivalent.

_Remark._ The Riemann mapping theorem is an existence theorem; it does not provide an explicit
formula for the conformal map in general.

## 11. Liouville's Theorem and the Maximum Modulus Principle

### 11.1 Liouville's Theorem

**Theorem 11.1 (Liouville's Theorem).** Every bounded entire function is constant.

_Proof._ If $|f(z)| \leq M$ for all $z$, then by Cauchy's estimates with $R$ arbitrarily large:
$|f'(z_0)| \leq \frac{M}{R} \to 0$ as $R \to \infty$. So $f'(z) = 0$ for all $z$, meaning $f$ is
constant. $\blacksquare$

### 11.2 The Fundamental Theorem of Algebra

**Theorem 11.2 (Fundamental Theorem of Algebra).** Every non-constant polynomial
$p(z) \in \mathbb{C}[z]$ has a root in $\mathbb{C}$.

_Proof._ Suppose $p(z)$ has no root. Then $f(z) = 1/p(z)$ is entire. Since $|p(z)| \to \infty$ as
$|z| \to \infty$, $f(z) \to 0$, so $f$ is bounded. By Liouville's theorem, $f$ is constant, so $p$
is constant, a contradiction. $\blacksquare$

### 11.3 The Maximum Modulus Principle

**Theorem 11.3 (Maximum Modulus Principle).** If $f$ is analytic and non-constant on a domain $D$,
then $|f|$ has no local maximum in $D$.

**Corollary 11.4.** If $f$ is analytic on a bounded domain $D$ and continuous on
$\bar{D} = D \cup \partial D$, then $|f|$ attains its maximum on $\partial D$.

### 11.4 Minimum Modulus Principle

**Theorem 11.5 (Minimum Modulus Principle).** If $f$ is analytic and non-zero on a bounded domain $D$
and continuous on $\bar{D}$, then $|f|$ attains its minimum on $\partial D$.

_Remark._ If $f$ has zeros in $D$, then $|f|$ clearly attains its minimum of $0$ at those zeros.
The minimum modulus principle requires the non-vanishing hypothesis.

### 11.5 Schwarz Lemma

**Theorem 11.6 (Schwarz Lemma).** If $f : \mathbb{D} \to \mathbb{D}$ is analytic with $f(0) = 0$,
then

$$|f(z)| \leq |z| \quad \mathrm{for\ all\ } z \in \mathbb{D}$$

and $|f'(0)| \leq 1$. Equality in either case implies $f(z) = e^{i\theta} z$ for some real $\theta$.

_Proof._ Define $g(z) = f(z)/z$ for $z \neq 0$ and $g(0) = f'(0)$. Then $g$ is analytic on
$\mathbb{D}$. For $|z| = r \lt{} 1$: $|g(z)| = |f(z)|/|z| \leq 1/r$. By the maximum modulus
principle, $|g(z)| \leq 1/r$ for $|z| \leq r$. Letting $r \to 1$: $|g(z)| \leq 1$, so
$|f(z)| \leq |z|$. Also $|f'(0)| = |g(0)| \leq 1$. If $|f'(0)| = 1$, then $|g|$ attains its maximum
at an interior point, so $g$ is constant: $g(z) = e^{i\theta}$. $\blacksquare$

## 12. Argument Principle and Rouché's Theorem

### 12.1 The Argument Principle

**Theorem 12.1 (Argument Principle).** If $f$ is meromorphic inside and on a simple closed contour
$\gamma$ with no zeros or poles on $\gamma$, then

$$\frac{1}{2\pi i}\int_\gamma \frac{f'(z)}{f(z)}\, dz = N - P$$

where $N$ is the number of zeros and $P$ is the number of poles of $f$ inside $\gamma$ (counting
multiplicities).

### 12.2 Rouché's Theorem

**Theorem 12.2 (Rouché's Theorem).** If $f$ and $g$ are analytic inside and on a simple closed
contour $\gamma$, and $|f(z)| \gt{} |g(z)|$ on $\gamma$, then $f$ and $f + g$ have the same number of
zeros inside $\gamma$.

_Proof._ On $\gamma$: $|g(z)/f(z)| \lt{} 1$. The function $h(z) = 1 + g(z)/f(z)$ satisfies
$|h(z) - 1| \lt{} 1$ on $\gamma$, so $h(\gamma)$ does not wind around $0$. By the argument principle
applied to $h$: $0 = N_h - P_h$, meaning $h$ has the same number of zeros and poles inside $\gamma$.
But $h = (f + g)/f$, so zeros of $h$ are zeros of $f + g$ and poles of $h$ are zeros of $f$.
Therefore $f$ and $f + g$ have the same number of zeros. $\blacksquare$

### 12.3 Worked Example

**Problem.** Show that $z^4 + 6z + 3$ has exactly one root in $|z| \lt{} 1$.

_Solution._ On $|z| = 1$: $|6z| = 6 \gt{} |z^4 + 3| \leq |z|^4 + 3 = 4$. By Rouché's theorem with
$f(z) = 6z$ and $g(z) = z^4 + 3$: $f + g = z^4 + 6z + 3$ has the same number of zeros in
$|z| \lt{} 1$ as $f(z) = 6z$, which has exactly one zero (at $z = 0$). $\blacksquare$

<details>
<summary>Solution</summary>

**Problem.** Show that all roots of $z^4 + z + 1 = 0$ satisfy $|z| \lt{} 2$.

On $|z| = 2$: $|z^4| = 16 \gt{} |z + 1| \leq 3$. By Rouché with $f(z) = z^4$ and $g(z) = z + 1$:
$z^4 + z + 1$ has $4$ zeros in $|z| \lt{} 2$ (same as $z^4$).

**Problem.** Show that $z^5 + 3z^2 + 1$ has exactly two roots in $|z| \lt{} 1$.

On $|z| = 1$: $|3z^2 + 1| \geq |3z^2| - |1| = 2 \gt{} |z^5| = 1$.
By Rouché with $f(z) = 3z^2 + 1$ and $g(z) = z^5$:
$z^5 + 3z^2 + 1$ has the same number of zeros as $3z^2 + 1$ in $|z| \lt{} 1$.
$3z^2 + 1 = 0 \Rightarrow z = \pm i/\sqrt{3}$, both in $|z| \lt{} 1$. So $2$ zeros.

</details>

## 13. Analytic Continuation

### 13.1 Definition

**Definition.** If $f_1$ is analytic on $D_1$ and $f_2$ is analytic on $D_2$ with
$D_1 \cap D_2 \neq \emptyset$ and $f_1 = f_2$ on $D_1 \cap D_2$, then $f_2$ is an **analytic
continuation** of $f_1$.

### 13.2 Identity Theorem

**Theorem 13.1 (Identity Theorem).** If $f$ and $g$ are analytic on a domain $D$ and agree on a set
with a limit point in $D$, then $f = g$ on all of $D$.

_Proof._ Let $E = \{z \in D : f^{(n)}(z) = g^{(n)}(z) \mathrm{\ for\ all\ } n \geq 0\}$. $E$ is
non-empty (it contains the limit point by continuity of derivatives). $E$ is closed (by continuity).
If $z_0 \in E$, the Taylor series of $f$ and $g$ at $z_0$ coincide, so $f = g$ in a neighbourhood of
$z_0$, giving $E$ open. Since $D$ is connected, $E = D$. $\blacksquare$

## 14. Common Pitfalls

:::caution Common Pitfall The Cauchy-Riemann equations are necessary but not sufficient for
differentiability. The partial derivatives must also be continuous. For example,
$f(z) = \exp(-1/z^4)$ extended by $f(0) = 0$ satisfies the Cauchy-Riemann equations at the origin
but is not differentiable there. :::

:::caution Common Pitfall Cauchy's theorem requires a simply connected domain. On a multiply
connected domain, the integral of an analytic function around a closed contour may be non-zero. The
classic example is $\oint_{|z|=1} dz/z = 2\pi i$. :::

:::caution Common Pitfall When computing residues at poles of order $m \geq 2$, the formula involves
differentiation. A common error is forgetting the $(m-1)!$ in the denominator or differentiating
$(z - z_0)^m f(z)$ the wrong number of times. :::

:::caution Common Pitfall The residue at infinity is
$\mathrm{Res}(f, \infty) = -\mathrm{Res}(1/z^2 \cdot f(1/z), 0)$. It is NOT simply $f(\infty)$. For
a function that is analytic everywhere in the finite plane except for finitely many singularities,
the sum of all residues (including the residue at infinity) is zero. :::

:::caution Common Pitfall A conformal mapping preserves angles but not necessarily distances. The
mapping $w = z^2$ is conformal at every $z \neq 0$, but it doubles the angle between curves at each
point. At $z = 0$, it is not conformal because $f'(0) = 0$. :::

:::caution Common Pitfall The maximum modulus principle says that $|f|$ has no local maximum in the
interior, but the minimum can occur in the interior (e.g., $f(z) = z$ on the unit disk has minimum
$|f| = 0$ at $z = 0$). For the minimum principle, one needs the additional hypothesis that $f$ has
no zeros in the domain. :::

:::caution Common Pitfall The complex logarithm is multi-valued. When a problem asks for
"logarithm" without specifying a branch, you must either compute all values or explicitly state which
branch you are using. The principal branch $\mathrm{Log}\, z$ has a branch cut along $(-\infty, 0]$
and is undefined on this cut. :::

:::caution Common Pitfall When applying the ML inequality, make sure $M$ is a valid upper bound for
$|f(z)|$ on the entire contour. A common error is bounding $|f|$ on only part of the contour.
Also, $L$ must be the arc length of the contour, not a diameter or radius. :::

## 15. Problem Set

### Problem 1

Express $z = -\sqrt{3} + i$ in polar form and find all values of $z^{1/3}$.

<details>
<summary>Solution</summary>

$|z| = \sqrt{3 + 1} = 2$. Since $\mathrm{Re}(z) \lt{} 0$ and $\mathrm{Im}(z) \gt{} 0$:
$\arg(z) = \pi - \pi/6 = 5\pi/6$.

$z = 2\,e^{5\pi i/6}$.

$z^{1/3} = 2^{1/3}\, e^{(5\pi/6 + 2\pi k)/3}$ for $k = 0, 1, 2$.

$z_0 = 2^{1/3}\, e^{5\pi i/18}$, $z_1 = 2^{1/3}\, e^{17\pi i/18}$, $z_2 = 2^{1/3}\, e^{29\pi i/18}$.

_If you get this wrong, revise:_ Section 1.5 (Roots of Complex Numbers).

</details>

### Problem 2

Let $f(z) = z^2 + \bar{z}^2$. Find where $f$ is differentiable and where it is analytic.

<details>
<summary>Solution</summary>

$f(z) = (x + iy)^2 + (x - iy)^2 = 2(x^2 - y^2)$. So $u = 2(x^2 - y^2)$, $v = 0$.

$u_x = 4x$, $u_y = -4y$, $v_x = 0$, $v_y = 0$.

CR: $4x = 0 \Rightarrow x = 0$, $-4y = 0 \Rightarrow y = 0$.

$f$ is differentiable only at $z = 0$ and analytic nowhere.

$f'(0) = 0$ (verified by direct computation).

_If you get this wrong, revise:_ Sections 2.4 and 3.1 (Analyticity and Cauchy-Riemann).

</details>

### Problem 3

Verify that $f(z) = \frac{1}{z^2 + 1}$ satisfies the Cauchy-Riemann equations on its domain and
find $f'(z)$.

<details>
<summary>Solution</summary>

$f(z) = 1/(z^2 + 1)$ is a rational function with denominator non-zero away from $\pm i$, so $f$
is analytic on $\mathbb{C} \setminus \{i, -i\}$.

By the quotient rule: $f'(z) = \frac{-2z}{(z^2 + 1)^2}$.

Verify via CR at $z = 1$: $u = \frac{x^2 - y^2 + 1}{(x^2 - y^2 + 1)^2 + 4x^2y^2}$,
$v = \frac{-2xy}{(x^2 - y^2 + 1)^2 + 4x^2y^2}$.

$u_x(1, 0) = -1/2 = f'(1)$. $\checkmark$

_If you get this wrong, revise:_ Sections 3.1 and 3.3 (CR Equations).

</details>

### Problem 4

Show that $u(x, y) = x^3 - 3xy^2 + 3x^2 - 3y^2$ is harmonic and find its harmonic conjugate.

<details>
<summary>Solution</summary>

$u_{xx} = 6x + 6$, $u_{yy} = -6x - 6$. $\Delta u = 0$. $\checkmark$

By CR: $v_y = u_x = 3x^2 - 3y^2 + 6x$.
$v = 3x^2 y - y^3 + 6xy + g(x)$.

$v_x = -u_y = 6xy + 6y$.
$6xy + 6y = 6xy + 6y + g'(x) \Rightarrow g'(x) = 0 \Rightarrow g(x) = C$.

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

$\int_\gamma (z^2 + 2z)\, dz = F(-1) - F(1) = \frac{2}{3} - \frac{4}{3} = -\frac{2}{3}$.

_If you get this wrong, revise:_ Sections 4.5 and 4.7 (Contour Integrals).

</details>

### Problem 6

Use the ML inequality to bound $\left|\int_\gamma \frac{e^z}{z - 2}\, dz\right|$ where $\gamma$
is the circle $|z| = 1$.

<details>
<summary>Solution</summary>

On $\gamma$: $|z| = 1$, so $|e^z| \leq e$ and $|z - 2| \geq 1$.

$\left|\frac{e^z}{z - 2}\right| \leq e$. $L = 2\pi$.

$\left|\int_\gamma \frac{e^z}{z - 2}\, dz\right| \leq 2\pi e$.

_If you get this wrong, revise:_ Section 4.6 (ML Inequality).

</details>

### Problem 7

Evaluate $\oint_\gamma \frac{z + 1}{z^2 - z}\, dz$ where $\gamma$ is $|z| = 2$.

<details>
<summary>Solution</summary>

$\frac{z + 1}{z^2 - z} = \frac{z + 1}{z(z - 1)}$. Simple poles at $z = 0$ and $z = 1$, both inside $|z| = 2$.

At $z = 0$: $\mathrm{Res} = \lim_{z \to 0} \frac{z + 1}{z - 1} = -1$.
At $z = 1$: $\mathrm{Res} = \lim_{z \to 1} \frac{z + 1}{z} = 2$.

$\oint_\gamma \frac{z + 1}{z^2 - z}\, dz = 2\pi i(-1 + 2) = 2\pi i$.

_If you get this wrong, revise:_ Sections 8.4 and 8.5 (Residues).

</details>

### Problem 8

Classify all singularities of $f(z) = \frac{e^{1/z}}{z^2 + 1}$ and find all residues.

<details>
<summary>Solution</summary>

$z = 0$: $e^{1/z}$ has an essential singularity at $0$, so $z = 0$ is an essential singularity of $f$.
$z = i$: simple pole.
$z = -i$: simple pole.

At $z = i$: $\mathrm{Res} = \frac{e^{1/i}}{2i} = \frac{e^{-i}}{2i}$.
At $z = -i$: $\mathrm{Res} = \frac{e^{1/(-i)}}{-2i} = \frac{e^{i}}{-2i}$.

At $z = 0$: find the coefficient of $1/z$ in $\frac{e^{1/z}}{z^2 + 1}$.
$\frac{1}{z^2 + 1} = 1 - z^2 + z^4 - \cdots$ near $z = 0$.
$e^{1/z} = 1 + 1/z + 1/(2z^2) + \cdots$.
The $1/z$ coefficient in the product: from $1 \cdot 1/z = 1/z$, giving residue $1$.

_If you get this wrong, revise:_ Sections 8.1 and 8.4 (Singularities and Residues).

</details>

### Problem 9

Evaluate $\int_0^{2\pi} \frac{\cos\theta}{5 + 4\cos\theta}\, d\theta$.

<details>
<summary>Solution</summary>

Substitute $z = e^{i\theta}$:

$I = \int_{|z|=1} \frac{(z + z^{-1})/2}{5 + 4(z + z^{-1})/2} \cdot \frac{dz}{iz}
= \frac{1}{2i}\int_{|z|=1} \frac{z^2 + 1}{z(2z^2 + 5z + 2)}\, dz
= \frac{1}{2i}\int_{|z|=1} \frac{z^2 + 1}{z(2z + 1)(z + 2)}\, dz$.

Poles inside $|z| = 1$: $z = 0$ (simple) and $z = -1/2$ (simple).

At $z = 0$: $\mathrm{Res} = \frac{1}{(2 \cdot 0 + 1)(0 + 2)} = \frac{1}{2}$.
At $z = -1/2$: $\mathrm{Res} = \frac{1/4 + 1}{(-1/2)(-1 + 2)} = \frac{5/4}{-1/2} = -\frac{5}{2}$.

$I = \frac{1}{2i} \cdot 2\pi i\left(\frac{1}{2} - \frac{5}{2}\right) = \pi(-2) = -\frac{\pi}{3}$.

_If you get this wrong, revise:_ Section 9.4 (Trigonometric Integrals).

</details>

### Problem 10

Evaluate $\int_{-\infty}^{\infty} \frac{dx}{(x^2 + 1)(x^2 + 4)}$.

<details>
<summary>Solution</summary>

$f(z) = \frac{1}{(z^2 + 1)(z^2 + 4)}$. Poles in upper half-plane: $z = i$ (simple) and
$z = 2i$ (simple).

At $z = i$: $\mathrm{Res} = \frac{1}{(2i)(i^2 + 4)} = \frac{1}{2i \cdot 3} = \frac{1}{6i}$.
At $z = 2i$: $\mathrm{Res} = \frac{1}{(4i - 1)(4i)} = \frac{1}{4i(-3)} = -\frac{1}{12i}$.

$\int_{-\infty}^{\infty} f(x)\, dx = 2\pi i\left(\frac{1}{6i} - \frac{1}{12i}\right) = 2\pi i \cdot \frac{1}{12i} = \frac{\pi}{6}$.

_If you get this wrong, revise:_ Section 9.2 (Rational Function Integrals).

</details>

### Problem 11

Find the Taylor series of $f(z) = \frac{z}{z^2 + 4}$ centered at $z_0 = 0$ and state the radius
of convergence.

<details>
<summary>Solution</summary>

$\frac{z}{z^2 + 4} = \frac{z}{4} \cdot \frac{1}{1 + z^2/4} = \frac{z}{4}\sum_{n=0}^{\infty} (-1)^n \frac{z^{2n}}{4^n}
= \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n+1}}{4^{n+1}}$

for $|z| \lt{} 2$. Radius of convergence: distance from $0$ to nearest singularity ($\pm 2i$), which is $2$.

_If you get this wrong, revise:_ Section 7.1 (Taylor Series).

</details>

### Problem 12

Find the Laurent series of $f(z) = \frac{1}{(z - 1)(z - 2)}$ in the annulus $1 \lt{} |z| \lt{} 2$.

<details>
<summary>Solution</summary>

$\frac{1}{(z-1)(z-2)} = \frac{1}{z - 2} - \frac{1}{z - 1}$.

For $|z| \gt{} 1$: $\frac{1}{z - 1} = \frac{1}{z} \cdot \frac{1}{1 - 1/z} = \sum_{n=0}^{\infty} z^{-n-1}$.

For $|z| \lt{} 2$: $\frac{1}{z - 2} = -\frac{1}{2} \cdot \frac{1}{1 - z/2} = -\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}}$.

$f(z) = -\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}} - \sum_{n=0}^{\infty} z^{-n-1}$.

_If you get this wrong, revise:_ Section 7.4 (Laurent Series).

</details>

### Problem 13

Using Rouché's theorem, determine the number of roots of $z^5 - 5z + 1 = 0$ in $|z| \lt{} 1$.

<details>
<summary>Solution</summary>

On $|z| = 1$: $|-5z| = 5 \gt{} |z^5 + 1| \leq 2$.

By Rouché with $f(z) = -5z$ and $g(z) = z^5 + 1$: $z^5 - 5z + 1$ has the same number of zeros
in $|z| \lt{} 1$ as $-5z$, which has exactly one zero (at $z = 0$).

So exactly one root in $|z| \lt{} 1$.

_If you get this wrong, revise:_ Section 12.2 (Rouché's Theorem).

</details>

### Problem 14

Find the Möbius transformation that maps $1 \mapsto 0$, $i \mapsto 1$, $-1 \mapsto \infty$.

<details>
<summary>Solution</summary>

$T(z) = \frac{(z - 1)(i - (-1))}{(z - (-1))(i - 1)} = \frac{(z - 1)(i + 1)}{(z + 1)(i - 1)}$.

Simplify: $\frac{i + 1}{i - 1} = \frac{(i+1)(-i-1)}{(i-1)(-i-1)} = \frac{-i^2 - 2i - 1}{-i^2 + 1} = \frac{-2i}{2} = -i$.

$T(z) = -i \cdot \frac{z - 1}{z + 1}$.

Verify: $T(1) = 0$ $\checkmark$, $T(i) = -i \cdot \frac{i-1}{i+1} = -i \cdot (-i) = -1$.

That gives $-1$, not $1$. Let me recompute.

$T(z) = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$ with $z_1 = 1$, $z_2 = i$, $z_3 = -1$.

$T(z) = \frac{(z - 1)(i + 1)}{(z + 1)(i - 1)}$.

$T(i) = \frac{(i - 1)(i + 1)}{(i + 1)(i - 1)} = 1$. $\checkmark$

$T(1) = 0$. $\checkmark$. $T(-1) = \infty$. $\checkmark$.

So $T(z) = \frac{(z - 1)(i + 1)}{(z + 1)(i - 1)}$.

_If you get this wrong, revise:_ Section 10.5 (Cross-Ratio).

</details>

### Problem 15

Evaluate $\int_\gamma \frac{z^3}{z^2 + 1}\, dz$ where $\gamma$ is $|z| = 2$.

<details>
<summary>Solution</summary>

$\frac{z^3}{z^2 + 1}$ has simple poles at $z = \pm i$, both inside $|z| = 2$.

At $z = i$: $\mathrm{Res} = \frac{i^3}{2i} = \frac{-i}{2i} = -\frac{1}{2}$.
At $z = -i$: $\mathrm{Res} = \frac{(-i)^3}{-2i} = \frac{i}{-2i} = -\frac{1}{2}$.

$\int_\gamma \frac{z^3}{z^2 + 1}\, dz = 2\pi i\left(-\frac{1}{2} - \frac{1}{2}\right) = -2\pi i$.

Alternatively: $\frac{z^3}{z^2 + 1} = z - \frac{z}{z^2 + 1}$.
$\int_\gamma z\, dz = 0$ (entire), and $\int_\gamma \frac{z}{z^2 + 1}\, dz = 2\pi i(1/2 + 1/2) = 2\pi i$.
So the integral equals $0 - 2\pi i = -2\pi i$. $\checkmark$

_If you get this wrong, revise:_ Sections 8.4 and 8.5 (Residues).

</details>

### Problem 16

Show that $\int_{-\infty}^{\infty} \frac{\cos 2x}{x^2 + 1}\, dx = \frac{\pi}{e^2}$.

<details>
<summary>Solution</summary>

Consider $\int_{-\infty}^{\infty} \frac{e^{2ix}}{x^2 + 1}\, dx$.

$f(z) = \frac{e^{2iz}}{z^2 + 1}$ has a simple pole at $z = i$ in the upper half-plane.

$\mathrm{Res}\!\left(\frac{e^{2iz}}{z^2 + 1}, i\right) = \frac{e^{2i \cdot i}}{2i} = \frac{e^{-2}}{2i}$.

$\int_{-\infty}^{\infty} \frac{e^{2ix}}{x^2 + 1}\, dx = 2\pi i \cdot \frac{e^{-2}}{2i} = \frac{\pi}{e^2}$.

Taking real parts: $\int_{-\infty}^{\infty} \frac{\cos 2x}{x^2 + 1}\, dx = \frac{\pi}{e^2}$.

_If you get this wrong, revise:_ Section 9.7 (Fourier-Type Integrals).

</details>

### Problem 17

Find the residue of $f(z) = \frac{\sin z}{z^4}$ at $z = 0$.

<details>
<summary>Solution</summary>

$\sin z = z - z^3/6 + z^5/120 - \cdots$

$f(z) = \frac{z - z^3/6 + z^5/120 - \cdots}{z^4} = \frac{1}{z^3} - \frac{1}{6z} + \frac{z}{120} - \cdots$

The coefficient of $1/z$ is $-1/6$, so $\mathrm{Res}(f, 0) = -\frac{1}{6}$.

_If you get this wrong, revise:_ Section 8.4 (Computing Residues).

</details>

### Problem 18

Evaluate $\int_\gamma \frac{dz}{(z - 1)^2(z - 2)}$ where $\gamma$ is $|z - 1| = 1/2$.

<details>
<summary>Solution</summary>

Only $z = 1$ is inside $\gamma$ (a pole of order $2$). $z = 2$ is outside.

$\mathrm{Res}(f, 1) = \frac{d}{dz}\left[\frac{1}{z - 2}\right]_{z=1} = -\frac{1}{(z-2)^2}\Big|_{z=1} = -1$.

$\int_\gamma f\, dz = 2\pi i \cdot (-1) = -2\pi i$.

_If you get this wrong, revise:_ Section 6.2 (CIF for Derivatives) and 8.4 (Residues).

</details>

### Problem 19

Use the Cauchy-Riemann equations to show that $f(z) = |z|^2 + 2\bar{z}$ is differentiable at
exactly one point and find $f'(z)$ there.

<details>
<summary>Solution</summary>

$f(z) = x^2 + y^2 + 2x - 2iy$. So $u = x^2 + y^2 + 2x$, $v = -2y$.

$u_x = 2x + 2$, $u_y = 2y$, $v_x = 0$, $v_y = -2$.

CR: $2x + 2 = -2 \Rightarrow x = -2$, and $2y = 0 \Rightarrow y = 0$.

$f$ is differentiable only at $z = -2$.

$f'(-2) = u_x(-2, 0) + iv_x(-2, 0) = (2(-2) + 2) + 0 = -2$.

_If you get this wrong, revise:_ Section 3.1 (Cauchy-Riemann Equations).

</details>

### Problem 20

Evaluate $\int_\gamma \frac{e^z \sin z}{(z - \pi)^3}\, dz$ where $\gamma$ is $|z| = 4$.

<details>
<summary>Solution</summary>

Only $z = \pi$ is inside $\gamma$ (a pole of order $3$).

By CIF for derivatives: $\int_\gamma \frac{f(z)}{(z - \pi)^3}\, dz = \frac{2\pi i}{2!}\,f''(\pi)$
where $f(z) = e^z \sin z$.

$f'(z) = e^z \sin z + e^z \cos z = e^z(\sin z + \cos z)$.
$f''(z) = e^z(\sin z + \cos z) + e^z(\cos z - \sin z) = 2e^z \cos z$.

$f''(\pi) = 2e^\pi \cos\pi = -2e^\pi$.

$\int_\gamma \frac{e^z \sin z}{(z - \pi)^3}\, dz = \pi i \cdot (-2e^\pi) = -2\pi i\, e^\pi$.

_If you get this wrong, revise:_ Section 6.2 (Cauchy's Integral Formula for Derivatives).

</details>
