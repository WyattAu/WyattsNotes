---
title: Complex Functions and Analyticity
tags:
  - Mathematics
  - University
---

### 2.1 Complex Functions

A **complex function** is a function $f : D \subseteq \mathbb{C} \to \mathbb{C}$. We can write
$f(z) = u(x, y) + iv(x, y)$ where $z = x + iy$ and $u, v$ are real-valued functions.

**Example.** $f(z) = z^2 = (x + iy)^2 = (x^2 - y^2) + i(2xy)$. Here $u = x^2 - y^2$ and $v = 2xy$.

**Example.** $f(z) = \bar{z} = x - iy$. Here $u = x$ and $v = -y$.

**Example.** $f(z) = |z|^2 = x^2 + y^2$. Here $u = x^2 + y^2$ and $v = 0$.

### 2.2 Limits and Continuity

The limit $\lim_{z \to z_0} f(z) = L$ means: for every $\varepsilon \gt 0$There exists
$\delta \gt 0$ Such that $0 \lt |z - z_0| \lt \delta$ implies $|f(z) - L| \lt \varepsilon$.

Unlike the real case, $z$ can approach $z_0$ from any direction in $\mathbb{C}$. This makes limits
More restrictive.

**Proposition 2.1.** $\lim_{z \to z_0} f(z) = L$ if and only if
$\lim_{(x,y) \to (x_0, y_0)} u(x, y) = a$ And $\lim_{(x,y) \to (x_0, y_0)} v(x, y) = b$ where
$L = a + bi$.

**Definition.** $f$ is **continuous** at $z_0$ if $\lim_{z \to z_0} f(z) = f(z_0)$.

<details>
<summary>Solution</summary>

**Problem.** Show that $\lim_{z \to 0} \frac{\bar{z}}{z}$ does not exist.

Let $z = re^{i\theta}$. Then $\frac{\bar{z}}{z} = e^{-2i\theta}$. As $z \to 0$ along different Rays
($\theta = 0, \pi/2, \pi/4$Etc.), the ratio takes different values ($1, -1, -i$Etc.). Since the
limit depends on the direction of approach, it does not exist.

**Problem.** Determine whether $f(z) = \frac{z^2 - 1}{z - 1}$ is continuous at $z = 1$.

For $z \neq 1$: $f(z) = z + 1$. The limit as $z \to 1$ is $2$But $f(1)$ is undefined (division by
zero). If we define $f(1) = 2$Then $f$ becomes continuous at $z = 1$.

</details>

### 2.3 The Derivative

**Definition.** $f$ is **differentiable** at $z_0$ if

$$f'(z_0) = \lim_{h \to 0} \frac{f(z_0 + h) - f(z_0)}{h}$$

Exists (and is independent of how $h \to 0$ in $\mathbb{C}$).

_Remark._ The requirement that the limit be the same for all directions of approach of $h$ is what
Makes complex differentiability far more restrictive than real differentiability.

### 2.4 Analytic Functions

**Definition.** A function $f$ is **analytic** (or **holomorphic**) on an open set
$U \subseteq \mathbb{C}$ if $f$ is differentiable at every point of $U$. A function that is analytic
On all of $\mathbb{C}$ is called **entire**.

**Examples of entire functions:** $z^n$, $e^z$, $\sin z$, $\cos z$Polynomials.

**Example of a non-analytic function:** $f(z) = \bar{z}$ is nowhere differentiable (except at
$z = 0$ if we define it, but still not analytic there).

<details>
<summary>Solution</summary>

**Problem.** Show that $f(z) = |z|^2$ is differentiable only at $z = 0$.

$f(z) = x^2 + y^2$So $u = x^2 + y^2$ and $v = 0$. $u_x = 2x$, $u_y = 2y$, $v_x = 0$, $v_y = 0$. The
Cauchy-Riemann equations require $2x = 0$ and $2y = 0$So $x = y = 0$. Thus $f$ satisfies CR only at
$z = 0$.

At $z = 0$: $f'(0) = \lim_{h \to 0} \frac{|h|^2}{h} = \lim_{h \to 0} \bar{h} = 0$So $f$ is
Differentiable at $0$ but not analytic anywhere (no neighbourhood of $0$ is analytic).

**Problem.** Show that $f(z) = z\bar{z} + z$ is differentiable only at $z = 0$.

$f(z) = |z|^2 + z = (x^2 + y^2 + x) + iy$. $u_x = 2x + 1$, $u_y = 2y$, $v_x = 0$, $v_y = 1$. CR
equations: $2x + 1 = 1 \Rightarrow x = 0$And $2y = 0 \Rightarrow y = 0$. At $(0, 0)$:
$f'(0) = \lim_{h \to 0} \frac{h\bar{h} + h}{h} = \lim_{h \to 0} (\bar{h} + 1) = 1$. So $f$ is
differentiable at $z = 0$ only, hence nowhere analytic.

</details>

### 2.5 Branch Cuts and Multi-Valued Functions

Many important functions in complex analysis are inherently multi-valued. To work with them as
Single-valued functions, we must restrict the domain.

**Definition.** A **branch** of a multi-valued function $f$ is a single-valued analytic function $g$
Defined on a domain $D$ such that $g(z) \in f(z)$ for all $z \in D$.

**The Complex Logarithm.** We define $\log z = \ln|z| + i\arg(z)$Which is multi-valued because
$\arg(z) = \mathrm{Arg}(z) + 2\pi k$ for $k \in \mathbb{Z}$. The **principal branch** is

$$\mathrm{Log}\, z = \ln|z| + i\,\mathrm{Arg}(z)$$

Defined on $\mathbb{C} \setminus (-\infty, 0]$. The negative real axis is called the **branch cut**.

**Proposition 2.2.** The principal branch $\mathrm{Log}\, z$ is analytic on
$\mathbb{C} \setminus (-\infty, 0]$ and $\frac{d}{dz}\,\mathrm{Log}\, z = \frac{1}{z}$.

**Complex Powers.** For $z, \alpha \in \mathbb{C}$ with $z \neq 0$:

$$z^\alpha = e^{\alpha \log z}$$

This is multi-valued . When $\alpha$ is rational with reduced form $p/q$There are exactly $q$
distinct values.

<details>
<summary>Solution</summary>

**Problem.** Find all values of $(-1)^i$.

$(-1)^i = e^{i \log(-1)} = e^{i(i\pi + 2\pi i k)} = e^{-\pi - 2\pi k}$ for $k \in \mathbb{Z}$.

These are all positive real numbers: $\ldots, e^{3\pi}, e^{\pi}, e^{-\pi}, e^{-3\pi}, \ldots$. The
principal value (using the principal branch) is $e^{-\pi}$.

**Problem.** Find all values of $i^{1/2}$.

$i^{1/2} = e^{(1/2)\log i} = e^{(1/2)(i\pi/2 + 2\pi i k)} = e^{i\pi/4 + i\pi k}$.

For $k = 0$: $e^{i\pi/4} = \frac{\sqrt{2}}{2}(1 + i)$. For $k = 1$:
$e^{i5\pi/4} = -\frac{\sqrt{2}}{2}(1 + i)$. These are the two square roots of $i$.

**Problem.** Find the domain of analyticity of $f(z) = \mathrm{Log}(z^2 + 1)$.

$\mathrm{Log}\, w$ is analytic on $\mathbb{C} \setminus (-\infty, 0]$So we need
$z^2 + 1 \notin (-\infty, 0]$.

$z^2 + 1 \leq 0$ when $z^2 \leq -1$I.e., $z \in [-i, 0] \cup [0, i]$ (the imaginary axis Segment
from $-i$ to $i$). Also $z^2 + 1 = 0$ at $z = \pm i$.

Domain: $\mathbb{C} \setminus \{z : z = iy,\, y \in [-1, 1]\}$.

</details>

