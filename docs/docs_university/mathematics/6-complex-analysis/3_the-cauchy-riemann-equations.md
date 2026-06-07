---
title: The Cauchy-Riemann Equations
tags:
  - Mathematics
  - University
---

### 3.1 Statement

**Theorem 3.1 (Cauchy-Riemann Equations).** If $f(z) = u(x, y) + iv(x, y)$ is differentiable at
$z = x + iy$Then

$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$

_Proof._ Compute the limit along the real axis ($h \in \mathbb{R}$, $h \to 0$):

$$f'(z) = \lim_{h \to 0} \frac{u(x+h, y) - u(x, y)}{h} + i\lim_{h \to 0} \frac{v(x+h, y) - v(x, y)}{h} = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x}$$

Compute along the imaginary axis ($h = ik$, $k \in \mathbb{R}$, $k \to 0$):

$$f'(z) = \lim_{k \to 0} \frac{u(x, y+k) - u(x, y)}{ik} + i\lim_{k \to 0} \frac{v(x, y+k) - v(x, y)}{ik} = -i\frac{\partial u}{\partial y} + \frac{\partial v}{\partial y}$$

Equating real and imaginary parts: $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
And $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$. $\blacksquare$

### 3.2 Sufficiency Condition

**Theorem 3.2.** If $u$ and $v$ have continuous first partial derivatives on an open set $U$ and
Satisfy the Cauchy-Riemann equations on $U$Then $f = u + iv$ is analytic on $U$.

_Proof._ Since $u_x, u_y, v_x, v_y$ are continuous on $U$, $u$ and $v$ are (real) differentiable.
Let $\Delta z = \Delta x + i\Delta y$. By real differentiability:

$u(x + \Delta x, y + \Delta y) - u(x, y) = u_x\,\Delta x + u_y\,\Delta y + \varepsilon_1$
$v(x + \Delta x, y + \Delta y) - v(x, y) = v_x\,\Delta x + v_y\,\Delta y + \varepsilon_2$

Where $\varepsilon_1, \varepsilon_2 = o(|\Delta z|)$. Therefore

$\frac{f(z + \Delta z) - f(z)}{\Delta z} = \frac{(u_x + iv_x)\Delta x + (u_y + iv_y)\Delta y + \varepsilon_1 + i\varepsilon_2}{\Delta x + i\Delta y}$

By CR: $u_y + iv_y = -v_x + iu_x = i(u_x + iv_x)$. Substituting:

$= (u_x + iv_x)\frac{\Delta x + i\Delta y}{\Delta x + i\Delta y} + \frac{o(|\Delta z|)}{\Delta z} \to u_x + iv_x$

As $\Delta z \to 0$. $\blacksquare$

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

**Proposition 3.4.** If $U$ is a connected domain and $u$ is harmonic on $U$Then $u$ has A harmonic
conjugate on $U$Unique up to an additive constant.

_Proof._ Define $v(x, y) = \int_{(x_0, y_0)}^{(x, y)} (-u_y\, dx + u_x\, dy)$. The integrand is
closed (since $(-u_y)_y = -u_{yy} = u_{xx} = (u_x)_x$) and since $U$ is Connected, $v$ is
well-defined (path-independent) by Green's theorem. Then $v_x = -u_y$ and $v_y = u_x$Which are the
CR equations. $\blacksquare$

<details>
<summary>Solution</summary>

**Problem.** Find the harmonic conjugate of $u(x, y) = x^3 - 3xy^2$.

Verify $u$ is harmonic: $u_{xx} = 6x$, $u_{yy} = -6x$So $u_{xx} + u_{yy} = 0$. $\checkmark$

By CR: $v_y = u_x = 3x^2 - 3y^2$So $v = 3x^2 y - y^3 + g(x)$. Also $v_x = -u_y = 6xy$So
$6xy = 6xy + g'(x)$Giving $g'(x) = 0$So $g(x) = C$.

Harmonic conjugate: $v(x, y) = 3x^2 y - y^3 + C$.

_Note:_ $f(z) = u + iv = x^3 - 3xy^2 + i(3x^2 y - y^3) = (x + iy)^3 = z^3$.

**Problem.** Show that $u(x, y) = \ln(x^2 + y^2)$ is harmonic on $\mathbb{R}^2 \setminus \{0\}$ but
Has no harmonic conjugate on $\mathbb{R}^2 \setminus \{0\}$.

$u_x = \frac{2x}{x^2 + y^2}$, $u_{xx} = \frac{2(y^2 - x^2)}{(x^2 + y^2)^2}$.
$u_y = \frac{2y}{x^2 + y^2}$, $u_{yy} = \frac{2(x^2 - y^2)}{(x^2 + y^2)^2}$. $\Delta u = 0$.
$\checkmark$

However,
$\oint_{|z|=1} (-u_y\, dx + u_x\, dy) = \oint_{|z|=1} \frac{-y\, dx + x\, dy}{x^2 + y^2}
= \int_0^{2\pi} 1\, d\theta = 2\pi \neq 0$.

Since $\mathbb{R}^2 \setminus \{0\}$ is not connected and this integral is non-zero, no Harmonic
conjugate exists on this domain.

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

$u_x = \cos x \cosh y$, $u_y = \sin x \sinh y$. $v_x = -\sin x \sinh y$, $v_y = \cos x \cosh y$.

CR: $u_x = \cos x \cosh y = v_y$ $\checkmark$ and $u_y = \sin x \sinh y = -v_x$ $\checkmark$.

$f'(z) = u_x + iv_x = \cos x \cosh y - i\sin x \sinh y = \cos z$. $\blacksquare$

**Problem.** Show $f(z) = \frac{1}{z}$ satisfies CR on $\mathbb{C} \setminus \{0\}$.

$\frac{1}{z} = \frac{\bar{z}}{|z|^2} = \frac{x - iy}{x^2 + y^2}$.

$u = \frac{x}{x^2 + y^2}$, $v = \frac{-y}{x^2 + y^2}$.

$u_x = \frac{y^2 - x^2}{(x^2 + y^2)^2}$, $v_y = \frac{y^2 - x^2}{(x^2 + y^2)^2}$. So $u_x = v_y$.
$\checkmark$

$u_y = \frac{-2xy}{(x^2 + y^2)^2}$, $v_x = \frac{2xy}{(x^2 + y^2)^2}$. So $u_y = -v_x$. $\checkmark$

$f'(z) = u_x + iv_x = \frac{-(x^2 - y^2 + 2ixy)}{(x^2 + y^2)^2} = \frac{-1}{z^2}$. $\blacksquare$

</details>

