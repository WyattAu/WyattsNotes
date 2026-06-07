---
title: Multiple Integrals
tags:
  - Mathematics
  - University
---

### 2.1 Double Integrals

The **double integral** of $f$ over a rectangle $R = [a,b] \times [c,d]$ is defined as the limit of
Riemann sums:

$$\iint_R f(x,y)\, dA = \lim_{\lVert P \rVert \to 0} \sum_{i,j} f(x_{ij}^*, y_{ij}^*) \Delta A_{ij}$$

**Theorem 2.1 (Fubini's Theorem).** If $f$ is continuous on $R = [a,b] \times [c,d]$Then

$$\iint_R f(x,y)\, dA = \int_a^b \left(\int_c^d f(x,y)\, dy\right) dx = \int_c^d \left(\int_a^b f(x,y)\, dx\right) dy$$

_Proof (sketch)._ For a continuous function $f$ on the compact rectangle $R$Define

$$F(x) = \int_c^d f(x,y)\, dy$$

Since $f$ is continuous, $F$ is continuous on $[a,b]$. For each partition
$P = \\{(x_0, \ldots, x_m)\\}$ of $[a,b]$Define Riemann sums for the outer integral:

$$S(P) = \sum_{i=1}^m F(x_i^*)\, \Delta x_i = \sum_{i=1}^m \int_c^d f(x_i^*, y)\, dy\, \Delta x_i$$

By Fubini's theorem for Riemann integrals (proven via uniform continuity of $f$ on the compact set
$R$), As $\lVert P \rVert \to 0$ these sums converge to both $\iint_R f\, dA$ and
$\int_a^b F(x)\, dx$. The Reversal of integration order follows by symmetry. $\blacksquare$

### 2.2 General Regions

For a general region $D$ in $\mathbb{R}^2$:

- **Type I region**: $D = \\{(x,y) : a \leq x \leq b,\, g_1(x) \leq y \leq g_2(x)\\}$

$$\iint_D f\, dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f(x,y)\, dy\, dx$$

- **Type II region**: $D = \\{(x,y) : c \leq y \leq d,\, h_1(y) \leq x \leq h_2(y)\\}$

$$\iint_D f\, dA = \int_c^d \int_{h_1(y)}^{h_2(y)} f(x,y)\, dx\, dy$$

**Problem.** Evaluate $\iint_D xy\, dA$ where $D$ is the region bounded by $y = x^2$ and
$y = x + 2$.

<details>
<summary>Solution</summary>

The curves intersect when $x^2 = x + 2$I.e., $x^2 - x - 2 = 0$So $(x-2)(x+1) = 0$Giving $x = -1$ and
$x = 2$. As a Type I region, $D = \\{(x,y) : -1 \leq x \leq 2,\, x^2 \leq y \leq x+2\\}$.

$$\iint_D xy\, dA = \int_{-1}^{2} \int_{x^2}^{x+2} xy\, dy\, dx = \int_{-1}^{2} x \left[\frac{y^2}{2}\right]_{x^2}^{x+2}\, dx$$

$$= \int_{-1}^{2} \frac{x}{2}\left[(x+2)^2 - x^4\right]\, dx = \frac{1}{2} \int_{-1}^{2} \left[x(x+2)^2 - x^5\right]\, dx$$

$$= \frac{1}{2} \int_{-1}^{2} \left[x^3 + 4x^2 + 4x - x^5\right]\, dx$$

$$= \frac{1}{2}\left[\frac{x^4}{4} + \frac{4x^3}{3} + 2x^2 - \frac{x^6}{6}\right]_{-1}^{2}$$

$$= \frac{1}{2}\left[\left(4 + \frac{32}{3} + 8 - \frac{64}{6}\right) - \left(\frac{1}{4} - \frac{4}{3} + 2 - \frac{1}{6}\right)\right]$$

$$= \frac{1}{2}\left[\frac{36}{3} - \frac{9}{12}\right] = \frac{1}{2}\left[12 - \frac{3}{4}\right] = \frac{45}{8}$$

$\blacksquare$

</details>

**Problem.** Evaluate $\iint_D x\, dA$ where $D$ is the region bounded by $y = x$, $y = 2x$And
$x + y = 2$.

<details>
<summary>Solution</summary>

First, find the intersections. The lines $y = x$ and $y = 2x$ intersect at $(0, 0)$. The line
$x + y = 2$ intersects $y = x$ at $(1, 1)$ and $y = 2x$ at $(2/3, 4/3)$.

As a Type I region, we must split: for $0 \leq x \leq 2/3$, $x \leq y \leq 2x$; for
$2/3 \leq x \leq 1$, $x \leq y \leq 2 - x$.

$$\iint_D x\, dA = \int_0^{2/3} \int_x^{2x} x\, dy\, dx + \int_{2/3}^1 \int_x^{2-x} x\, dy\, dx$$

$$= \int_0^{2/3} x(x - x)\, dx...$$

Wait, this is getting messy. Let me use Type II instead. For each $y$, $x$ ranges from $y/2$ to $y$
(for $0 \leq y \leq 4/3$) and from $y/2$ to $2 - y$ (for $4/3 \leq y \leq 1$). Actually, the
simplest approach is to split $D$ at $y = 4/3$.

For $0 \leq y \leq 1$: $y/2 \leq x \leq y$ (between $y = x$ and $y = 2x$But only up to $x + y = 2$).
Actually $y = 2x$ gives $x = y/2$And $y = x$ gives $x = y$. But $x + y = 2$ gives $x = 2 - y$. For
$y \leq 1$: both $y \leq 2 - y$ (since $y \leq 1$) and $y/2 \leq y$So the right boundary is $y$. But
we also need $x + y \leq 2$I.e., $x \leq 2 - y$. For $y \leq 1$: $y \leq 2 - y$So the constraint
$x \leq y$ is tighter.

For $0 \leq y \leq 1$: $y/2 \leq x \leq y$.

$$\iint_D x\, dA = \int_0^1 \int_{y/2}^y x\, dx\, dy = \int_0^1 \left[\frac{x^2}{2}\right]_{y/2}^y\, dy = \int_0^1 \frac{y^2}{2} - \frac{y^2}{8}\, dy = \int_0^1 \frac{3y^2}{8}\, dy = \frac{3}{8} \cdot \frac{1}{3} = \frac{1}{8}$$

$\blacksquare$

</details>

### 2.3 Triple Integrals

Triple integrals extend to $\mathbb{R}^3$:

$$\iiint_E f(x,y,z)\, dV = \iint_D \left(\int_{g_1(x,y)}^{g_2(x,y)} f(x,y,z)\, dz\right) dA$$

**Problem.** Evaluate $\iiint_E z\, dV$ where $E$ is the tetrahedron in the first octant bounded by
The coordinate planes and $x + y + z = 1$.

<details>
<summary>Solution</summary>

The region $E$ can be described as
$\\{(x,y,z) : 0 \leq x \leq 1,\, 0 \leq y \leq 1-x,\, 0 \leq z \leq 1-x-y\\}$.

$$\iiint_E z\, dV = \int_0^1 \int_0^{1-x} \int_0^{1-x-y} z\, dz\, dy\, dx$$

$$= \int_0^1 \int_0^{1-x} \left[\frac{z^2}{2}\right]_0^{1-x-y}\, dy\, dx = \int_0^1 \int_0^{1-x} \frac{(1-x-y)^2}{2}\, dy\, dx$$

Substituting $u = 1 - x - y$, $du = -dy$:

$$= \int_0^1 \frac{(1-x)^3}{6}\, dx = \frac{1}{6}\left[-\frac{(1-x)^4}{4}\right]_0^1 = \frac{1}{6} \cdot \frac{1}{4} = \frac{1}{24}$$

$\blacksquare$

</details>

### 2.4 Change of Variables

**Theorem 2.2 (Change of Variables).** Let $T : D \subseteq \mathbb{R}^n \to \mathbb{R}^n$ be a
$C^1$ diffeomorphism with Jacobian determinant $J_T$. Then

$$\int_{T(D)} f(\mathbf{u})\, d\mathbf{u} = \int_D f(T(\mathbf{x}))\, \lvert J_T(\mathbf{x})\rvert\, d\mathbf{x}$$

_Derivation of the Jacobian factor (for $n = 2$)._ Let $T(x, y) = (u(x,y),\, v(x,y))$ be a $C^1$
Diffeomorphism. Partition $D$ into small rectangles $R_{ij}$ of area $\Delta x\, \Delta y$. The
image $T(R_{ij})$ is approximately a parallelogram spanned by the vectors

$$\mathbf{a} = T(x + \Delta x, y) - T(x, y) \approx \left(\frac{\partial u}{\partial x}\Delta x,\, \frac{\partial v}{\partial x}\Delta x\right)$$

$$\mathbf{b} = T(x, y + \Delta y) - T(x, y) \approx \left(\frac{\partial u}{\partial y}\Delta y,\, \frac{\partial v}{\partial y}\Delta y\right)$$

The area of this parallelogram is $\lvert \mathbf{a} \times \mathbf{b} \rvert$Which equals

$$\left\lvert \frac{\partial u}{\partial x}\frac{\partial v}{\partial y} - \frac{\partial u}{\partial y}\frac{\partial v}{\partial x} \right\rvert \Delta x\, \Delta y = \lvert J_T \rvert\, \Delta x\, \Delta y$$

Summing over all subrectangles and taking the limit gives the change of variables formula.
$\blacksquare$

**Polar coordinates:** $x = r\cos\theta$, $y = r\sin\theta$, $\lvert J \rvert = r$.

$$\iint_D f(x,y)\, dA = \iint_{D'} f(r\cos\theta, r\sin\theta)\, r\, dr\, d\theta$$

**Cylindrical coordinates:** $x = r\cos\theta$, $y = r\sin\theta$, $z = z$, $\lvert J \rvert = r$.

$$\iiint_E f(x,y,z)\, dV = \iiint_{E'} f(r\cos\theta, r\sin\theta, z)\, r\, dr\, d\theta\, dz$$

**Spherical coordinates:** $x = \rho\sin\phi\cos\theta$, $y = \rho\sin\phi\sin\theta$,
$z = \rho\cos\phi$ $\lvert J \rvert = \rho^2 \sin\phi$.

$$\iiint_E f(x,y,z)\, dV = \iiint_{E'} f(\rho\sin\phi\cos\theta, \rho\sin\phi\sin\theta, \rho\cos\phi)\, \rho^2 \sin\phi\, d\rho\, d\phi\, d\theta$$

### 2.5 Coordinate System Worked Examples

**Problem.** Evaluate $\iint_D e^{-(x^2+y^2)}\, dA$ where $D$ is the entire $\mathbb{R}^2$ plane.

<details>
<summary>Solution</summary>

Use polar coordinates. The region $D'$ is $0 \leq r \lt \infty$, $0 \leq \theta \leq 2\pi$.

$$\iint_D e^{-(x^2+y^2)}\, dA = \int_0^{2\pi} \int_0^{\infty} e^{-r^2}\, r\, dr\, d\theta$$

The inner integral:
$\int_0^{\infty} r e^{-r^2}\, dr = \left[-\frac{1}{2}e^{-r^2}\right]_0^{\infty} = \frac{1}{2}$.

$$= \int_0^{2\pi} \frac{1}{2}\, d\theta = \pi$$

$\blacksquare$

_Remark._ This is the classic Gaussian integral computation, yielding
$\int_{-\infty}^{\infty} e^{-x^2}\, dx = \sqrt{\pi}$.

</details>

**Problem.** Evaluate $\iiint_E z\, dV$ where $E$ is the solid bounded above by the sphere
$x^2 + y^2 + z^2 = 2$ and below by the paraboloid $z = x^2 + y^2$.

<details>
<summary>Solution</summary>

The surfaces intersect when $x^2 + y^2 + (x^2 + y^2)^2 = 2$. Let $r^2 = x^2 + y^2$. Then
$r^2 + r^4 = 2$I.e., $(r^2 + 2)(r^2 - 1) = 0$So $r = 1$ (positive root). Use Cylindrical
coordinates. The region $E'$ is

$$0 \leq r \leq 1, \quad 0 \leq \theta \leq 2\pi, \quad r^2 \leq z \leq \sqrt{2 - r^2}$$

$$\iiint_E z\, dV = \int_0^{2\pi} \int_0^1 \int_{r^2}^{\sqrt{2-r^2}} z\, r\, dz\, dr\, d\theta$$

$$= \int_0^{2\pi} \int_0^1 \frac{r}{2}\left[(2 - r^2) - r^4\right]\, dr\, d\theta = \int_0^{2\pi} \int_0^1 \frac{r}{2}(2 - r^2 - r^4)\, dr\, d\theta$$

$$= \int_0^{2\pi} \frac{1}{2}\left[r^2 - \frac{r^4}{4} - \frac{r^6}{6}\right]_0^1\, d\theta = \int_0^{2\pi} \frac{1}{2} \cdot \frac{7}{12}\, d\theta = \frac{7\pi}{12}$$

$\blacksquare$

</details>

**Problem.** Evaluate $\iiint_E (x^2 + y^2 + z^2)\, dV$ where $E$ is the solid ball
$x^2 + y^2 + z^2 \leq a^2$.

<details>
<summary>Solution</summary>

Use spherical coordinates. In spherical: $x^2 + y^2 + z^2 = \rho^2$And $E'$ is $0 \leq \rho \leq a$,
$0 \leq \phi \leq \pi$, $0 \leq \theta \leq 2\pi$.

$$\iiint_E (x^2 + y^2 + z^2)\, dV = \int_0^{2\pi} \int_0^{\pi} \int_0^a \rho^2 \cdot \rho^2 \sin\phi\, d\rho\, d\phi\, d\theta$$

$$= \left(\int_0^a \rho^4\, d\rho\right)\left(\int_0^{\pi} \sin\phi\, d\phi\right)\left(\int_0^{2\pi} d\theta\right)$$

$$= \frac{a^5}{5} \cdot 2 \cdot 2\pi = \frac{4\pi a^5}{5}$$

$\blacksquare$

</details>

### 2.6 Worked Example

**Problem.** Compute $\iint_D (x^2 + y^2)\, dA$ where $D$ is the region bounded by $x^2 + y^2 = 4$.

_Solution._ Use polar coordinates. The region $D'$ is $0 \leq r \leq 2$, $0 \leq \theta \leq 2\pi$.

$$\iint_D (x^2 + y^2)\, dA = \int_0^{2\pi} \int_0^2 r^2 \cdot r\, dr\, d\theta = \int_0^{2\pi} \int_0^2 r^3\, dr\, d\theta$$

$$= \int_0^{2\pi} \left[\frac{r^4}{4}\right]_0^2 d\theta = \int_0^{2\pi} 4\, d\theta = 8\pi$$

$\blacksquare$

**Problem.** Evaluate $\iint_D \frac{y}{x}\, dA$ where $D$ is bounded by $y = x$, $y = 2x$And
$x = 1$.

<details>
<summary>Solution</summary>

The region $D = \\{(x,y) : 0 \leq x \leq 1,\, x \leq y \leq 2x\\}$.

$$\iint_D \frac{y}{x}\, dA = \int_0^1 \int_x^{2x} \frac{y}{x}\, dy\, dx = \int_0^1 \frac{1}{x}\left[\frac{y^2}{2}\right]_x^{2x}\, dx$$

$$= \int_0^1 \frac{1}{x}\left[\frac{4x^2}{2} - \frac{x^2}{2}\right]\, dx = \int_0^1 \frac{1}{x} \cdot \frac{3x^2}{2}\, dx = \frac{3}{2}\int_0^1 x\, dx = \frac{3}{4}$$

$\blacksquare$

</details>

**Problem.** Swap the order of integration and evaluate:
$\int_0^1 \int_{x^2}^1 x e^{y^2}\, dy\, dx$.

<details>
<summary>Solution</summary>

The region is $0 \leq x \leq 1$, $x^2 \leq y \leq 1$Which is the same as $0 \leq y \leq 1$
$0 \leq x \leq \sqrt{y}$.

$$\int_0^1 \int_{x^2}^1 x e^{y^2}\, dy\, dx = \int_0^1 \int_0^{\sqrt{y}} x e^{y^2}\, dx\, dy = \int_0^1 e^{y^2}\left[\frac{x^2}{2}\right]_0^{\sqrt{y}}\, dy$$

$$= \int_0^1 \frac{y}{2} e^{y^2}\, dy$$

Let $u = y^2$, $du = 2y\, dy$:

$$= \frac{1}{4}\int_0^1 e^u\, du = \frac{1}{4}(e - 1)$$

$\blacksquare$

_Remark._ This integral cannot be evaluated in the original order because $e^{y^2}$ has no
elementary Antiderivative with respect to $y$. Swapping the order was essential.

</details>

### 2.7 Common Pitfalls

:::caution Common Pitfalls

- **Order of integration limits.** When setting up
  $\int_a^b \int_{g_1(x)}^{g_2(x)} f\, dy\, dx$Verify that $g_1(x) \leq g_2(x)$ for all
  $x \in [a, b]$. If the region is described as "between two curves," determine which curve is above
  the other.
- **Forgetting the Jacobian.** In a change of variables, the Jacobian determinant $\lvert J \rvert$
  must be included. For polar coordinates, this factor is $r$; omitting it is one of the most common
  errors.
- **Spherical coordinate conventions.** Different texts use different conventions for $\phi$ and
  $\theta$. Here, $\phi \in [0, \pi]$ is the polar angle (from the positive $z$-axis) and
  $\theta \in [0, 2\pi]$ is the azimuthal angle.
- **Region description.** When swapping integration order, carefully redraw the region and re-derive
  the bounds. The new bounds may require splitting the integral into multiple pieces.



