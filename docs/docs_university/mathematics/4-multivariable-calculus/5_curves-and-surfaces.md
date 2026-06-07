---
title: Curves and Surfaces
tags:
  - Mathematics
  - University
---

### 5.1 Parametric Curves

A **parametric curve** in $\mathbb{R}^3$ is a $C^1$ function $\mathbf{r} : [a, b] \to \mathbb{R}^3$
Written $\mathbf{r}(t) = (x(t),\, y(t),\, z(t))$.

**Definition.** The **arc length** of $\mathbf{r}$ over $[a, b]$ is

$$L = \int_a^b \lVert \mathbf{r}'(t) \rVert\, dt = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2 + \left(\frac{dz}{dt}\right)^2}\, dt$$

**Proposition 5.1.** The arc length function
$s(t) = \int_a^t \lVert \mathbf{r}'(\tau) \rVert\, d\tau$ Satisfies
$\frac{ds}{dt} = \lVert \mathbf{r}'(t) \rVert$And reparametrising by arc length gives a Unit-speed
curve: $\lVert \frac{d\mathbf{r}}{ds} \rVert = 1$.

_Proof._ By the Fundamental Theorem of Calculus, $\frac{ds}{dt} = \lVert \mathbf{r}'(t) \rVert$. If
we reparametrise by $s$I.e., write $\mathbf{r}(s) = \mathbf{r}(t(s))$Then by the chain rule
$\frac{d\mathbf{r}}{ds} = \mathbf{r}'(t) \cdot \frac{dt}{ds}$So
$\lVert \frac{d\mathbf{r}}{ds} \rVert = \lVert \mathbf{r}'(t) \rVert \cdot \left\lvert \frac{dt}{ds} \right\rvert = 1$.
$\blacksquare$

**Problem.** Find the arc length of the curve $\mathbf{r}(t) = (e^t \cos t,\, e^t \sin t,\, e^t)$
for $0 \leq t \leq \ln 2$.

<details>
<summary>Solution</summary>

$\mathbf{r}'(t) = (e^t \cos t - e^t \sin t,\, e^t \sin t + e^t \cos t,\, e^t)$

$\lVert \mathbf{r}'(t) \rVert^2 = e^{2t}(\cos t - \sin t)^2 + e^{2t}(\sin t + \cos t)^2 + e^{2t}$

$= e^{2t}[(\cos^2 t - 2\sin t \cos t + \sin^2 t) + (\sin^2 t + 2\sin t \cos t + \cos^2 t) + 1]$

$= e^{2t}[1 + 1 + 1] = 3e^{2t}$

$$\lVert \mathbf{r}'(t) \rVert = \sqrt{3}\, e^t$$

$$L = \int_0^{\ln 2} \sqrt{3}\, e^t\, dt = \sqrt{3}\, [e^t]_0^{\ln 2} = \sqrt{3}(2 - 1) = \sqrt{3}$$

$\blacksquare$

</details>

**Problem.** Find the arc length of the helix $\mathbf{r}(t) = (\cos t,\, \sin t,\, t)$ for
$0 \leq t \leq 4\pi$.

<details>
<summary>Solution</summary>

$\mathbf{r}'(t) = (-\sin t,\, \cos t,\, 1)$So
$\lVert \mathbf{r}'(t) \rVert = \sqrt{\sin^2 t + \cos^2 t + 1} = \sqrt{2}$.

$$L = \int_0^{4\pi} \sqrt{2}\, dt = 4\sqrt{2}\,\pi$$

$\blacksquare$

</details>

### 5.2 Curvature and Torsion

**Definition.** Let $\mathbf{r}(s)$ be a unit-speed curve ($\lVert \mathbf{r}'(s) \rVert = 1$).
Define:

- **Unit tangent vector:** $\mathbf{T}(s) = \mathbf{r}'(s)$
- **Curvature:** $\kappa(s) = \lVert \mathbf{T}'(s) \rVert = \lVert \mathbf{r}''(s) \rVert$
- **Principal normal:** $\mathbf{N}(s) = \frac{\mathbf{T}'(s)}{\lVert \mathbf{T}'(s) \rVert}$ (when
  $\kappa \neq 0$)
- **Binormal:** $\mathbf{B}(s) = \mathbf{T}(s) \times \mathbf{N}(s)$
- **Torsion:** $\tau(s) = -\mathbf{B}'(s) \cdot \mathbf{N}(s)$

The vectors $\mathbf{T}$, $\mathbf{N}$, $\mathbf{B}$ form the **Frenet--Serret frame**, an
orthonormal Basis that moves with the curve.

**Theorem 5.2 (Frenet--Serret Formulas).**

$$\mathbf{T}' = \kappa\, \mathbf{N}, \quad \mathbf{N}' = -\kappa\, \mathbf{T} + \tau\, \mathbf{B}, \quad \mathbf{B}' = -\tau\, \mathbf{N}$$

_Proof._ Since $\mathbf{T}$ is a unit vector, $\mathbf{T} \cdot \mathbf{T} = 1$So
$\mathbf{T}' \cdot \mathbf{T} = 0$. Therefore $\mathbf{T}'$ is orthogonal to $\mathbf{T}$So
$\mathbf{T}'$ is parallel to $\mathbf{N}$ (when $\kappa \neq 0$). This gives
$\mathbf{T}' = \kappa\,\mathbf{N}$.

Similarly, $\mathbf{B} = \mathbf{T} \times \mathbf{N}$ is a unit vector, so
$\mathbf{B}' \cdot \mathbf{B} = 0$. Also $\mathbf{B} \cdot \mathbf{T} = 0$So
$\mathbf{B}' \cdot \mathbf{T} + \mathbf{B} \cdot \mathbf{T}' = 0$ Giving
$\mathbf{B}' \cdot \mathbf{T} = -\mathbf{B} \cdot \kappa\,\mathbf{N} = 0$. So $\mathbf{B}'$ is
Parallel to $\mathbf{N}$Giving $\mathbf{B}' = -\tau\,\mathbf{N}$.

For $\mathbf{N}'$: since $\{\mathbf{T}, \mathbf{N}, \mathbf{B}\}$ is an orthonormal basis,
$\mathbf{N}' = (\mathbf{N}' \cdot \mathbf{T})\,\mathbf{T} + (\mathbf{N}' \cdot \mathbf{N})\,\mathbf{N} + (\mathbf{N}' \cdot \mathbf{B})\,\mathbf{B}$.
From $\mathbf{N} \cdot \mathbf{T} = 0$:
$\mathbf{N}' \cdot \mathbf{T} = -\mathbf{N} \cdot \mathbf{T}' = -\kappa$. From
$\mathbf{N} \cdot \mathbf{N} = 1$: $\mathbf{N}' \cdot \mathbf{N} = 0$. From
$\mathbf{N} \cdot \mathbf{B} = 0$:
$\mathbf{N}' \cdot \mathbf{B} = -\mathbf{N} \cdot \mathbf{B}' = \tau$. This gives
$\mathbf{N}' = -\kappa\,\mathbf{T} + \tau\,\mathbf{B}$. $\blacksquare$

_Intuition._ The curvature $\kappa$ measures how sharply the curve bends (deviation from a straight
line). The torsion $\tau$ measures how sharply the curve twists out of the osculating plane
(deviation from a Plane curve). A curve lies in a plane if and only if $\tau = 0$ everywhere.

For a curve parameterised by an arbitrary parameter $t$ (not necessarily unit-speed):

$$\kappa = \frac{\lVert \mathbf{r}'(t) \times \mathbf{r}''(t) \rVert}{\lVert \mathbf{r}'(t) \rVert^3}$$

$$\tau = \frac{[\mathbf{r}'(t) \times \mathbf{r}''(t)] \cdot \mathbf{r}^{\prime\prime\prime}(t)}{\lVert \mathbf{r}'(t) \times \mathbf{r}''(t) \rVert^2}$$

**Problem.** Find the curvature and torsion of the helix
$\mathbf{r}(t) = (a\cos t,\, a\sin t,\, bt)$ where $a, b \gt 0$.

<details>
<summary>Solution</summary>

$\mathbf{r}'(t) = (-a\sin t,\, a\cos t,\, b)$

$\mathbf{r}''(t) = (-a\cos t,\, -a\sin t,\, 0)$

$\mathbf{r}^{\prime\prime\prime}(t) = (a\sin t,\, -a\cos t,\, 0)$

$\lVert \mathbf{r}' \rVert = \sqrt{a^2 + b^2}$

$$\mathbf{r}' \times \mathbf{r}'' = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -a\sin t & a\cos t & b \\ -a\cos t & -a\sin t & 0 \end{vmatrix} = (ab\sin t,\, -ab\cos t,\, a^2)$$

$$\lVert \mathbf{r}' \times \mathbf{r}'' \rVert = \sqrt{a^2 b^2 + a^4} = a\sqrt{a^2 + b^2}$$

$$\kappa = \frac{a\sqrt{a^2 + b^2}}{(a^2 + b^2)^{3/2}} = \frac{a}{a^2 + b^2}$$

For the torsion:

$$(\mathbf{r}' \times \mathbf{r}'') \cdot \mathbf{r}^{\prime\prime\prime} = ab\sin t \cdot a\sin t + (-ab\cos t)(-a\cos t) + a^2 \cdot 0 = a^2 b$$

$$\tau = \frac{a^2 b}{a^2(a^2 + b^2)} = \frac{b}{a^2 + b^2}$$

$\blacksquare$

_Remark._ The helix has constant curvature and constant torsion, reflecting its uniform geometry.

</details>

### 5.3 Parametric Surfaces

A **parametric surface** is a $C^1$ map $\mathbf{r} : D \subseteq \mathbb{R}^2 \to \mathbb{R}^3$
$\mathbf{r}(u, v) = (x(u,v),\, y(u,v),\, z(u,v))$.

The **tangent plane** at $\mathbf{r}(u_0, v_0)$ is spanned by the tangent vectors

$$\mathbf{r}_u = \frac{\partial \mathbf{r}}{\partial u}, \quad \mathbf{r}_v = \frac{\partial \mathbf{r}}{\partial v}$$

The **unit normal** to the surface is

$$\mathbf{n} = \frac{\mathbf{r}_u \times \mathbf{r}_v}{\lVert \mathbf{r}_u \times \mathbf{r}_v \rVert}$$

**Examples of parametric surfaces:**

- **Sphere** (spherical coordinates):
  $\mathbf{r}(\theta, \phi) = (\rho\sin\phi\cos\theta,\, \rho\sin\phi\sin\theta,\, \rho\cos\phi)$
- **Cylinder:** $\mathbf{r}(\theta, z) = (r\cos\theta,\, r\sin\theta,\, z)$
- **Graph of $z = f(x,y)$:** $\mathbf{r}(x, y) = (x,\, y,\, f(x,y))$

For the graph $z = f(x,y)$The normal is
$\mathbf{n} = \frac{(-f_x,\, -f_y,\, 1)}{\sqrt{1 + f_x^2 + f_y^2}}$.

### 5.4 Surface Area

**Definition.** The area of a parametric surface $\mathbf{r} : D \to \mathbb{R}^3$ is

$$A(S) = \iint_D \lVert \mathbf{r}_u \times \mathbf{r}_v \rVert\, du\, dv$$

_Derivation._ Partition $D$ into small rectangles $D_{ij}$ of area $\Delta u\, \Delta v$. The image
$\mathbf{r}(D_{ij})$ is approximately a parallelogram spanned by $\mathbf{r}_u\, \Delta u$ and
$\mathbf{r}_v\, \Delta v$With area
$\lVert \mathbf{r}_u \times \mathbf{r}_v \rVert\, \Delta u\, \Delta v$. Summing and taking the limit
gives the formula. $\blacksquare$

**Problem.** Find the surface area of the part of the paraboloid $z = x^2 + y^2$ that lies below The
plane $z = 4$.

<details>
<summary>Solution</summary>

Parametrise by $\mathbf{r}(x, y) = (x,\, y,\, x^2 + y^2)$ where $x^2 + y^2 \leq 4$.

$\mathbf{r}_x = (1,\, 0,\, 2x)$, $\mathbf{r}_y = (0,\, 1,\, 2y)$.

$$\mathbf{r}_x \times \mathbf{r}_y = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 0 & 2x \\ 0 & 1 & 2y \end{vmatrix} = (-2x,\, -2y,\, 1)$$

$$\lVert \mathbf{r}_x \times \mathbf{r}_y \rVert = \sqrt{4x^2 + 4y^2 + 1}$$

$$A = \iint_{x^2+y^2 \leq 4} \sqrt{4x^2 + 4y^2 + 1}\, dx\, dy$$

Use polar coordinates: $x = r\cos\theta$, $y = r\sin\theta$, $0 \leq r \leq 2$,
$0 \leq \theta \leq 2\pi$.

$$A = \int_0^{2\pi} \int_0^2 \sqrt{4r^2 + 1}\, r\, dr\, d\theta$$

Let $u = 4r^2 + 1$, $du = 8r\, dr$:

$$= 2\pi \cdot \frac{1}{8} \int_1^{17} \sqrt{u}\, du = \frac{\pi}{4}\left[\frac{2u^{3/2}}{3}\right]_1^{17} = \frac{\pi}{6}(17^{3/2} - 1)$$

$\blacksquare$

</details>

### 5.5 Surface Integrals

**Definition (Scalar surface integral).** The integral of a scalar function $f$ over a parametric
Surface $S$ is

$$\iint_S f\, dS = \iint_D f(\mathbf{r}(u,v))\, \lVert \mathbf{r}_u \times \mathbf{r}_v \rVert\, du\, dv$$

**Definition (Vector surface integral / flux).** The flux of a vector field $\mathbf{F}$ through an
Oriented surface $S$ is

$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \mathbf{F}(\mathbf{r}(u,v)) \cdot (\mathbf{r}_u \times \mathbf{r}_v)\, du\, dv$$

Where the orientation is determined by the choice of normal $\mathbf{r}_u \times \mathbf{r}_v$ vs.
$\mathbf{r}_v \times \mathbf{r}_u$.

**Problem.** Evaluate $\iint_S \mathbf{F} \cdot d\mathbf{S}$ where $\mathbf{F} = (x,\, y,\, z^2)$
and $S$ is the hemisphere $x^2 + y^2 + z^2 = 4$, $z \geq 0$With Upward orientation.

<details>
<summary>Solution</summary>

Use the divergence theorem on the closed hemisphere plus the disk at $z = 0$. Let $E$ be the solid
hemisphere. Then:

$$\iint_{\mathrm{closed\ S} \mathbf{F} \cdot d\mathbf{S} = \iiint_E \nabla \cdot \mathbf{F}\, dV = \iiint_E (1 + 1 + 2z)\, dV}$$

$$= 2V + 2\iiint_E z\, dV$$

Where $V = \frac{1}{2} \cdot \frac{4}{3}\pi(2^3) = \frac{16\pi}{3}$.

By symmetry, the centroid of a hemisphere of radius $R = 2$ is at $z = 3R/8 = 3/4$So

$$\iiint_E z\, dV = \bar{z} \cdot V = \frac{3}{4} \cdot \frac{16\pi}{3} = 4\pi$$

$$= 2 \cdot \frac{16\pi}{3} + 2 \cdot 4\pi = \frac{32\pi}{3} + 8\pi = \frac{56\pi}{3}$$

The flux through the disk $z = 0$, $x^2 + y^2 \leq 4$ (with downward normal $-\mathbf{k}$):
$\iint_{\mathrm{disk} \mathbf{F} \cdot (-\mathbf{k})\, dS = \iint_{\mathrm{disk} 0\, dS = 0}}$.

So the flux through the hemisphere alone is $\frac{56\pi}{3}$. $\blacksquare$

</details>

**Problem.** Evaluate $\iint_S z\, dS$ where $S$ is the part of the plane $2x + 2y + z = 4$ in the
First octant.

<details>
<summary>Solution</summary>

Parametrise the surface. Solve for $z = 4 - 2x - 2y$ where $x \geq 0$, $y \geq 0$, $z \geq 0$ I.e.,
$2x + 2y \leq 4$ or $x + y \leq 2$.

$\mathbf{r}(x,y) = (x,\, y,\, 4 - 2x - 2y)$,
$D = \\{(x,y) : x \geq 0,\, y \geq 0,\, x + y \leq 2\\}$.

$\mathbf{r}_x = (1,\, 0,\, -2)$, $\mathbf{r}_y = (0,\, 1,\, -2)$.

$$\mathbf{r}_x \times \mathbf{r}_y = (2,\, 2,\, 1)$$

$$\lVert \mathbf{r}_x \times \mathbf{r}_y \rVert = \sqrt{4 + 4 + 1} = 3$$

$$\iint_S z\, dS = \iint_D (4 - 2x - 2y) \cdot 3\, dx\, dy = 3 \int_0^2 \int_0^{2-x} (4 - 2x - 2y)\, dy\, dx$$

$$= 3 \int_0^2 \left[(4-2x)y - y^2\right]_0^{2-x}\, dx = 3 \int_0^2 (2-x)(2-x)\, dx$$

$$= 3 \int_0^2 (2-x)^2\, dx = 3\left[-\frac{(2-x)^3}{3}\right]_0^2 = 3 \cdot \frac{8}{3} = 8$$

$\blacksquare$

</details>

### 5.6 Common Pitfalls

:::caution Common Pitfalls

- **Parameterisation domain.** Always verify that the parameterisation covers the entire surface and
  that the map is one-to-one (except possibly on the boundary).
- **Normal orientation.** The cross product $\mathbf{r}_u \times \mathbf{r}_v$ determines the
  orientation. Swapping the order changes the sign of the flux integral.
- **Surface area vs. Flux.** Surface area uses $\lVert \mathbf{r}_u \times \mathbf{r}_v \rVert$
  (scalar), while flux uses $\mathbf{r}_u \times \mathbf{r}_v$ (vector, oriented).
:::

