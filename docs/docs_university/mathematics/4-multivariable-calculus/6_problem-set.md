---
title: Problem Set
tags:
  - Mathematics
  - University
---

### Problem 1

Compute $\nabla f$ for $f(x,y,z) = \ln(x^2 + y^2) + e^{xz}$ and evaluate at $(1, 0, 0)$.

<details>
<summary>Solution</summary>

$f_x = \frac{2x}{x^2+y^2} + ze^{xz}$, $f_y = \frac{2y}{x^2+y^2}$, $f_z = xe^{xz}$.

At $(1,0,0)$: $f_x = 2 + 0 = 2$, $f_y = 0$, $f_z = 1$.

$\nabla f(1,0,0) = (2, 0, 1)$.

If you get this wrong, revise: Section 1.4 The Gradient.

</details>

### Problem 2

Let $f(x,y) = x^3 - 3xy^2 + y^3$. Find all critical points and classify them using the second
Derivative test.

<details>
<summary>Solution</summary>

$f_x = 3x^2 - 3y^2 = 0$ and $f_y = -6xy + 3y^2 = 3y(-2x + y) = 0$.

From $f_x = 0$: $x^2 = y^2$So $y = \pm x$.

If $y = x$: $f_y = 3x(-2x + x) = -3x^2 = 0$So $x = 0$. Point: $(0,0)$.

If $y = -x$: $f_y = 3(-x)(2x + x) = -9x^2 = 0$So $x = 0$. Point: $(0,0)$.

The only critical point is $(0, 0)$. Now $f_{xx} = 6x$, $f_{yy} = -6x + 6y$, $f_{xy} = -6y$.

At $(0,0)$: $D = 0 \cdot 0 - 0 = 0$. The second derivative test is inconclusive.

To classify, note $f(x, y) = x^3 - 3xy^2 + y^3$. Along $y = 0$: $f(x, 0) = x^3$Which changes sign At
$0$. Along $x = y$: $f(x, x) = -x^3$Which also changes sign but with opposite sign. Since the
behaviour differs by direction, $(0, 0)$ is a saddle point.

If you get this wrong, revise: Section 4.2 Second Derivative Test.

</details>

### Problem 3

Find the directional derivative of $f(x,y) = e^x \cos y$ at $(0, \pi/2)$ in the direction
$\mathbf{v} = (1, 1)$.

<details>
<summary>Solution</summary>

Normalise: $\lVert \mathbf{v} \rVert = \sqrt{2}$So $\mathbf{u} = (1/\sqrt{2},\, 1/\sqrt{2})$.

$f_x = e^x \cos y$, $f_y = -e^x \sin y$.

$\nabla f(0, \pi/2) = (e^0 \cos(\pi/2),\, -e^0 \sin(\pi/2)) = (0, -1)$.

$$D_{\mathbf{u}} f = (0, -1) \cdot (1/\sqrt{2},\, 1/\sqrt{2}) = -\frac{1}{\sqrt{2}}$$

If you get this wrong, revise: Section 1.5 Directional Derivatives.

</details>

### Problem 4

If $x^2 z + y^2 z^2 = 5$Find $\frac{\partial z}{\partial x}$ at $(1, 1, 1)$.

<details>
<summary>Solution</summary>

Let $F(x,y,z) = x^2 z + y^2 z^2 - 5$. Then $F_x = 2xz$, $F_y = 2yz^2$, $F_z = x^2 + 2y^2 z$.

At $(1,1,1)$: $F_x = 2$, $F_z = 1 + 2 = 3$.

$$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z} = -\frac{2}{3}$$

If you get this wrong, revise: Section 1.9 Implicit Differentiation.

</details>

### Problem 5

Write the second-order Taylor expansion of $f(x,y) = \sin(x + y)$ at $(0, 0)$.

<details>
<summary>Solution</summary>

$f(0,0) = 0$, $f_x = \cos(x+y)$, $f_y = \cos(x+y)$So $f_x(0,0) = f_y(0,0) = 1$.

$f_{xx} = -\sin(x+y)$, $f_{xy} = -\sin(x+y)$, $f_{yy} = -\sin(x+y)$So
$f_{xx}(0,0) = f_{xy}(0,0) = f_{yy}(0,0) = 0$.

$$f(x,y) = 0 + x + y + \frac{1}{2}(0 \cdot x^2 + 2 \cdot 0 \cdot xy + 0 \cdot y^2) + R_2 = x + y + R_2$$

Where $R_2 = O(\lvert x \rvert^3 + \lvert y \rvert^3)$.

If you get this wrong, revise: Section 1.10 Taylor's Theorem.

</details>

### Problem 6

Evaluate $\iint_D (x + y)\, dA$ where $D$ is bounded by $y = x$ and $y = x^2$.

<details>
<summary>Solution</summary>

The curves intersect when $x = x^2$I.e., $x(x-1) = 0$So $x = 0$ and $x = 1$. For $x \in (0,1)$
$x^2 \lt x$So $D = \\{(x,y) : 0 \leq x \leq 1,\, x^2 \leq y \leq x\\}$.

$$\iint_D (x + y)\, dA = \int_0^1 \int_{x^2}^x (x + y)\, dy\, dx = \int_0^1 \left[xy + \frac{y^2}{2}\right]_{x^2}^x\, dx$$

$$= \int_0^1 \left(x^2 + \frac{x^2}{2} - x^3 - \frac{x^4}{2}\right)\, dx = \int_0^1 \left(\frac{3x^2}{2} - x^3 - \frac{x^4}{2}\right)\, dx$$

$$= \left[\frac{x^3}{2} - \frac{x^4}{4} - \frac{x^5}{10}\right]_0^1 = \frac{1}{2} - \frac{1}{4} - \frac{1}{10} = \frac{10 - 5 - 2}{20} = \frac{3}{20}$$

If you get this wrong, revise: Section 2.2 General Regions.

</details>

### Problem 7

Evaluate $\iiint_E x\, dV$ where $E$ is the region bounded by the coordinate planes and
$x + y + z = 1$.

<details>
<summary>Solution</summary>

$E = \\{(x,y,z) : 0 \leq x \leq 1,\, 0 \leq y \leq 1-x,\, 0 \leq z \leq 1-x-y\\}$.

$$\iiint_E x\, dV = \int_0^1 \int_0^{1-x} \int_0^{1-x-y} x\, dz\, dy\, dx = \int_0^1 \int_0^{1-x} x(1-x-y)\, dy\, dx$$

$$= \int_0^1 x\left[(1-x)y - \frac{y^2}{2}\right]_0^{1-x}\, dx = \int_0^1 x \cdot \frac{(1-x)^2}{2}\, dx$$

$$= \frac{1}{2}\int_0^1 x(1 - 2x + x^2)\, dx = \frac{1}{2}\int_0^1 (x - 2x^2 + x^3)\, dx$$

$$= \frac{1}{2}\left[\frac{x^2}{2} - \frac{2x^3}{3} + \frac{x^4}{4}\right]_0^1 = \frac{1}{2}\left[\frac{1}{2} - \frac{2}{3} + \frac{1}{4}\right] = \frac{1}{2} \cdot \frac{6 - 8 + 3}{12} = \frac{1}{24}$$

If you get this wrong, revise: Section 2.3 Triple Integrals.

</details>

### Problem 8

Evaluate $\iint_D e^{x^2+y^2}\, dA$ where $D = \\{(x,y) : 1 \leq x^2 + y^2 \leq 4\\}$.

<details>
<summary>Solution</summary>

Use polar coordinates: $1 \leq r \leq 2$, $0 \leq \theta \leq 2\pi$.

$$\iint_D e^{x^2+y^2}\, dA = \int_0^{2\pi} \int_1^2 e^{r^2}\, r\, dr\, d\theta = 2\pi \int_1^2 r e^{r^2}\, dr$$

Let $u = r^2$, $du = 2r\, dr$:

$$= 2\pi \cdot \frac{1}{2}\int_1^4 e^u\, du = \pi(e^4 - e)$$

If you get this wrong, revise: Section 2.4 Change of Variables.

</details>

### Problem 9

Evaluate $\iiint_E z\, dV$ where $E$ is the solid cone $z \leq \sqrt{x^2 + y^2}$, $0 \leq z \leq 1$.

<details>
<summary>Solution</summary>

Use cylindrical coordinates. The cone $z = r$ intersects $z = 1$ at $r = 1$.
$E' = \\{(r, \theta, z) : 0 \leq r \leq 1,\, 0 \leq \theta \leq 2\pi,\, r \leq z \leq 1\\}$.

$$\iiint_E z\, dV = \int_0^{2\pi} \int_0^1 \int_r^1 z\, r\, dz\, dr\, d\theta = 2\pi \int_0^1 r\left[\frac{z^2}{2}\right]_r^1\, dr$$

$$= 2\pi \int_0^1 \frac{r}{2}(1 - r^2)\, dr = \pi \int_0^1 (r - r^3)\, dr = \pi\left[\frac{r^2}{2} - \frac{r^4}{4}\right]_0^1 = \pi \cdot \frac{1}{4} = \frac{\pi}{4}$$

If you get this wrong, revise: Section 2.5 Coordinate System Worked Examples.

</details>

### Problem 10

Use Green's theorem to evaluate $\oint_C (3y - e^{\sin x})\, dx + (7x + \sqrt{y^4 + 1})\, dy$ Where
$C$ is the circle $x^2 + y^2 = 9$ traversed counterclockwise.

<details>
<summary>Solution</summary>

$P = 3y - e^{\sin x}$, $Q = 7x + \sqrt{y^4 + 1}$.

$$\frac{\partial Q}{\partial x} = 7, \quad \frac{\partial P}{\partial y} = 3$$

By Green's theorem:

$$\oint_C P\, dx + Q\, dy = \iint_D (7 - 3)\, dA = 4 \cdot \pi \cdot 9 = 36\pi$$

If you get this wrong, revise: Section 3.3 Green's Theorem.

</details>

### Problem 11

Compute the curl and divergence of $\mathbf{F} = (yz,\, xz,\, xy)$.

<details>
<summary>Solution</summary>

**Curl:**

$$\nabla \times \mathbf{F} = \left(\frac{\partial (xy)}{\partial y} - \frac{\partial (xz)}{\partial z},\, \frac{\partial (yz)}{\partial z} - \frac{\partial (xy)}{\partial x},\, \frac{\partial (xz)}{\partial x} - \frac{\partial (yz)}{\partial y}\right)$$

$$= (x - x,\, y - y,\, z - z) = \mathbf{0}$$

**Divergence:**

$$\nabla \cdot \mathbf{F} = \frac{\partial (yz)}{\partial x} + \frac{\partial (xz)}{\partial y} + \frac{\partial (xy)}{\partial z} = 0 + 0 + 0 = 0$$

Since the curl is zero and the domain is connected, $\mathbf{F}$ is conservative. Indeed,
$\mathbf{F} = \nabla(xyz)$.

If you get this wrong, revise: Section 3.4 Curl and Divergence.

</details>

### Problem 12

Use Stokes' theorem to evaluate $\oint_C \mathbf{F} \cdot d\mathbf{r}$ where
$\mathbf{F} = (2y,\, -z,\, x)$ and $C$ is the circle $x^2 + y^2 = 1$, $z = 1$ Traversed
counterclockwise when viewed from above.

<details>
<summary>Solution</summary>

Take $S$ to be the disk $x^2 + y^2 \leq 1$, $z = 1$ with upward normal $\mathbf{n} = (0, 0, 1)$.

$$\nabla \times \mathbf{F} = \left(\frac{\partial x}{\partial y} - \frac{\partial (-z)}{\partial z},\, \frac{\partial (2y)}{\partial z} - \frac{\partial x}{\partial x},\, \frac{\partial (-z)}{\partial x} - \frac{\partial (2y)}{\partial y}\right)$$

$$= (0 - (-1),\, 0 - 1,\, 0 - 2) = (1, -1, -2)$$

$$(\nabla \times \mathbf{F}) \cdot \mathbf{n} = (1, -1, -2) \cdot (0, 0, 1) = -2$$

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (-2)\, dS = -2 \cdot \pi \cdot 1^2 = -2\pi$$

If you get this wrong, revise: Section 3.5 Stokes' Theorem.

</details>

### Problem 13

Use the divergence theorem to compute the flux of $\mathbf{F} = (x,\, y,\, z)$ through the Surface
of the cube $[0, 1]^3$.

<details>
<summary>Solution</summary>

$$\nabla \cdot \mathbf{F} = \frac{\partial x}{\partial x} + \frac{\partial y}{\partial y} + \frac{\partial z}{\partial z} = 3$$

$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E 3\, dV = 3 \cdot 1^3 = 3$$

If you get this wrong, revise: Section 3.6 Divergence Theorem.

</details>

### Problem 14

Find a potential function for $\mathbf{F} = (2x + y,\, x + 2z,\, 2y)$.

<details>
<summary>Solution</summary>

First check: $\nabla \times \mathbf{F} = (2 - 2,\, 0 - 0,\, 1 - 1) = \mathbf{0}$. Conservative.

$$\frac{\partial \phi}{\partial x} = 2x + y \implies \phi = x^2 + xy + g(y,z)$$

$$\frac{\partial \phi}{\partial y} = x + g_y = x + 2z \implies g_y = 2z \implies g = 2yz + h(z)$$

$$\frac{\partial \phi}{\partial z} = 2y + h'(z) = 2y \implies h'(z) = 0 \implies h(z) = C$$

$$\phi(x,y,z) = x^2 + xy + 2yz + C$$

If you get this wrong, revise: Section 3.7 Conservative Fields and Potential Functions.

</details>

### Problem 20

Evaluate the surface integral $\iint_S (x^2 + y^2)\, dS$ where $S$ is the cylinder $x^2 + y^2 = 4$,
$0 \leq z \leq 3$.

<details>
<summary>Solution</summary>

Parametrise the cylinder: $\mathbf{r}(\theta, z) = (2\cos\theta,\, 2\sin\theta,\, z)$ for
$0 \leq \theta \leq 2\pi$, $0 \leq z \leq 3$.

$\mathbf{r}_\theta = (-2\sin\theta,\, 2\cos\theta,\, 0)$, $\mathbf{r}_z = (0,\, 0,\, 1)$.

$$\mathbf{r}_\theta \times \mathbf{r}_z = (2\cos\theta,\, 2\sin\theta,\, 0)$$

$$\lVert \mathbf{r}_\theta \times \mathbf{r}_z \rVert = \sqrt{4\cos^2\theta + 4\sin^2\theta} = 2$$

On $S$: $x^2 + y^2 = 4$.

$$\iint_S (x^2 + y^2)\, dS = \int_0^{2\pi} \int_0^3 4 \cdot 2\, dz\, d\theta = 8 \cdot 3 \cdot 2\pi = 48\pi$$

If you get this wrong, revise: Section 5.5 Surface Integrals.

</details>

### Problem 21

Use Green's theorem to find the area enclosed by the ellipse
$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.

<details>
<summary>Solution</summary>

By Green's theorem with $P = -y/2$ and $Q = x/2$:

$$\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = \frac{1}{2} - \left(-\frac{1}{2}\right) = 1$$

So the area is:

$$A = \iint_D 1\, dA = \oint_C -\frac{y}{2}\, dx + \frac{x}{2}\, dy = \frac{1}{2}\oint_C x\, dy - y\, dx$$

Parametrise the ellipse: $x = a\cos t$, $y = b\sin t$, $0 \leq t \leq 2\pi$.

$$A = \frac{1}{2}\int_0^{2\pi} \left[a\cos t \cdot b\cos t - b\sin t \cdot (-a\sin t)\right]\, dt$$

$$= \frac{1}{2}\int_0^{2\pi} (ab\cos^2 t + ab\sin^2 t)\, dt = \frac{ab}{2}\int_0^{2\pi} 1\, dt = \pi ab$$

If you get this wrong, revise: Section 3.3 Green's Theorem.

</details>

### Problem 15

Find the minimum value of $f(x,y,z) = x^2 + y^2 + z^2$ subject to $x + y - z = 1$.

<details>
<summary>Solution</summary>

$\nabla f = (2x, 2y, 2z)$, $\nabla g = (1, 1, -1)$ where $g = x + y - z - 1$.

$2x = \lambda$, $2y = \lambda$, $2z = -\lambda$So $x = y = -z$.

From $x + y - z = 1$: $2x - (-x) = 3x = 1$So $x = 1/3$, $y = 1/3$, $z = -1/3$.

$$f(1/3, 1/3, -1/3) = \frac{1}{9} + \frac{1}{9} + \frac{1}{9} = \frac{1}{3}$$

This is the minimum (the Hessian of $f$ is positive definite, and the constraint set is unbounded
But $f \geq 0$).

If you get this wrong, revise: Section 4.3 Lagrange Multipliers.

</details>

### Problem 16

Find the arc length of the curve $\mathbf{r}(t) = (t^2,\, 2t,\, \ln t)$ for $1 \leq t \leq e$.

<details>
<summary>Solution</summary>

$\mathbf{r}'(t) = (2t,\, 2,\, 1/t)$So $\lVert \mathbf{r}'(t) \rVert = \sqrt{4t^2 + 4 + 1/t^2}$.

Note: $4t^2 + 4 + t^{-2} = (2t + 1/t)^2$. So $\lVert \mathbf{r}' \rVert = 2t + 1/t$.

$$L = \int_1^e \left(2t + \frac{1}{t}\right)\, dt = \left[t^2 + \ln t\right]_1^e = e^2 + 1 - 1 - 0 = e^2$$

If you get this wrong, revise: Section 5.1 Parametric Curves.

</details>

### Problem 17

Find the curvature of $\mathbf{r}(t) = (t,\, t^2,\, t^3)$ at $t = 1$.

<details>
<summary>Solution</summary>

$\mathbf{r}'(t) = (1,\, 2t,\, 3t^2)$, $\mathbf{r}''(t) = (0,\, 2,\, 6t)$.

At $t = 1$: $\mathbf{r}' = (1, 2, 3)$, $\mathbf{r}'' = (0, 2, 6)$.

$\lVert \mathbf{r}' \rVert = \sqrt{1 + 4 + 9} = \sqrt{14}$.

$$\mathbf{r}' \times \mathbf{r}'' = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 2 & 3 \\ 0 & 2 & 6 \end{vmatrix} = (12 - 6,\, -(6 - 0),\, 2 - 0) = (6, -6, 2)$$

$$\lVert \mathbf{r}' \times \mathbf{r}'' \rVert = \sqrt{36 + 36 + 4} = \sqrt{76} = 2\sqrt{19}$$

$$\kappa = \frac{2\sqrt{19}}{(\sqrt{14})^3} = \frac{2\sqrt{19}}{14\sqrt{14}} = \frac{\sqrt{266}}{98}$$

If you get this wrong, revise: Section 5.2 Curvature and Torsion.

</details>

### Problem 18

Find the surface area of the part of the sphere $x^2 + y^2 + z^2 = 4$ that lies above the Plane
$z = 1$.

<details>
<summary>Solution</summary>

Use spherical coordinates. The sphere has $\rho = 2$. The plane $z = 1$ intersects when
$2\cos\phi = 1$So $\cos\phi = 1/2$Giving $\phi = \pi/3$.

The region: $0 \leq \rho \leq 2$, $0 \leq \phi \leq \pi/3$, $0 \leq \theta \leq 2\pi$.

$$A = \int_0^{2\pi} \int_0^{\pi/3} \rho^2 \sin\phi\, d\phi\, d\theta = 4 \cdot 2\pi \int_0^{\pi/3} \sin\phi\, d\phi$$

$$= 8\pi \left[-\cos\phi\right]_0^{\pi/3} = 8\pi \left(-\frac{1}{2} + 1\right) = 8\pi \cdot \frac{1}{2} = 4\pi$$

If you get this wrong, revise: Section 5.4 Surface Area.

</details>

### Problem 19

Show that $\mathbf{F} = (ye^{xy} + 2x,\, xe^{xy} + 2y)$ is conservative and evaluate
$\int_C \mathbf{F} \cdot d\mathbf{r}$ where $C$ is any path from $(0, 0)$ to $(1, 1)$.

<details>
<summary>Solution</summary>

Check: $\frac{\partial P}{\partial y} = e^{xy} + xye^{xy}$,
$\frac{\partial Q}{\partial x} = e^{xy} + xye^{xy}$. These are equal, so $\mathbf{F}$ is
conservative (on $\mathbb{R}^2$Which is connected).

Find $\phi$:

$$\frac{\partial \phi}{\partial x} = ye^{xy} + 2x \implies \phi = e^{xy} + x^2 + g(y)$$

$$\frac{\partial \phi}{\partial y} = xe^{xy} + g'(y) = xe^{xy} + 2y \implies g'(y) = 2y \implies g(y) = y^2 + C$$

$$\phi(x,y) = e^{xy} + x^2 + y^2$$

$$\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(1,1) - \phi(0,0) = (e + 1 + 1) - (1 + 0 + 0) = e + 1$$

If you get this wrong, revise: Section 3.2 Line Integrals and Section 3.7 Conservative Fields.

</details>

### Problem 22

Compute the torsion of the curve $\mathbf{r}(t) = (\cosh t,\, \sinh t,\, t)$ at $t = 0$.

<details>
<summary>Solution</summary>

$\mathbf{r}'(t) = (\sinh t,\, \cosh t,\, 1)$, $\mathbf{r}''(t) = (\cosh t,\, \sinh t,\, 0)$
$\mathbf{r}^{\prime\prime\prime}(t) = (\sinh t,\, \cosh t,\, 0)$.

At $t = 0$: $\mathbf{r}' = (0, 1, 1)$, $\mathbf{r}'' = (1, 0, 0)$
$\mathbf{r}^{\prime\prime\prime} = (0, 1, 0)$.

$$\mathbf{r}' \times \mathbf{r}'' = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 0 & 1 & 1 \\ 1 & 0 & 0 \end{vmatrix} = (0,\, 1,\, -1)$$

$$\lVert \mathbf{r}' \times \mathbf{r}'' \rVert = \sqrt{2}$$

$$(\mathbf{r}' \times \mathbf{r}'') \cdot \mathbf{r}^{\prime\prime\prime} = 1$$

$$\tau = \frac{1}{(\sqrt{2})^2} = \frac{1}{2}$$

If you get this wrong, revise: Section 5.2 Curvature and Torsion.

</details>

### Problem 23

Evaluate $\iiint_E \frac{1}{\sqrt{x^2 + y^2 + z^2}}\, dV$ where $E$ is the solid unit ball
$x^2 + y^2 + z^2 \leq 1$.

<details>
<summary>Solution</summary>

Use spherical coordinates. The integrand is $\frac{1}{\rho}$.

$$\iiint_E \frac{1}{\rho}\, dV = \int_0^{2\pi} \int_0^{\pi} \int_0^1 \frac{1}{\rho} \cdot \rho^2 \sin\phi\, d\rho\, d\phi\, d\theta$$

$$= \left(\int_0^1 \rho\, d\rho\right)\left(\int_0^{\pi} \sin\phi\, d\phi\right)\left(\int_0^{2\pi} d\theta\right)$$

$$= \frac{1}{2} \cdot 2 \cdot 2\pi = 2\pi$$

If you get this wrong, revise: Section 2.5 Coordinate System Worked Examples.

</details>

## Common Pitfalls

- **Confusing partial and total derivatives.** Partial derivatives hold other variables constant;
  total derivatives account for all variable changes. **Fix:** $\frac{\partial f}{\partial x}$ vs
  $\frac{df}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$.
- **Wrong gradient direction.** The gradient $\nabla f$ points in the direction of steepest ascent,
  not descent. **Fix:** $\nabla f$ gives the direction of maximum rate of increase; $-\nabla f$
  gives steepest descent.
- **Confusing the Jacobian and Hessian.** Jacobian: matrix of first partial derivatives (for
  transformations). Hessian: matrix of second partial derivatives (for convexity). **Fix:** Jacobian
  $J_{ij} = \frac{\partial f_i}{\partial x_j}$; Hessian
  $H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$.

## Worked Examples

### Example 1: Chain rule

**Problem.** Let $f(x, y) = x^2 y$ where $x = \cos t$, $y = \sin t$. Find $\frac{df}{dt}$ at
$t = \pi/4$.

**Solution.**
$\frac{df}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} = 2xy(-\sin t) + x^2 \cos t$.

At $t = \pi/4$: $x = y = \frac{\sqrt{2}}{2}$.
$\frac{df}{dt} = 2 \cdot \frac{1}{2} \cdot (-\frac{\sqrt{2}}{2}) + \frac{1}{2} \cdot \frac{\sqrt{2}}{2} = -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{4} = -\frac{\sqrt{2}}{4}$.

$\blacksquare$

### Example 2: Double integral

**Problem.** Evaluate $\iint_R x y \, dA$ where $R = [0, 1] \times [0, 2]$.

**Solution.**
$\int_0^1 \int_0^2 xy \, dy\, dx = \int_0^1 x \left[\frac{y^2}{2}\right]_0^2 dx = \int_0^1 2x \, dx = [x^2]_0^1 = 1$.

$\blacksquare$

## Summary

- Partial derivatives: treat other variables as constants; chain rule for multivariable functions.
- Gradient $\nabla f = (f_x, f_y)$: direction of steepest ascent; level curves are perpendicular to
  $\nabla f$.
- Multiple integrals: Fubini's theorem allows iterated integration; change order with care on
  bounds.
- Jacobian determinant: accounts for area/volume scaling under coordinate transformations.

## Cross-References

| Topic                              | Site        | Link                                                                          |
| ---------------------------------- | ----------- | ----------------------------------------------------------------------------- |
| Multivariable Calculus (Overview)  | WyattsNotes | [View](/docs/university/mathematics/multivariable-calculus)                   |
| Real Analysis                      | WyattsNotes | [View](/docs/university/mathematics/real-analysis)                            |
| Linear Algebra                     | WyattsNotes | [View](/docs/university/mathematics/linear-algebra)                           |
| Differential Equations             | WyattsNotes | [View](/docs/university/mathematics/differential-equations)                   |
| Multivariable Calculus — MIT 18.02 | MIT OCW     | [View](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/) |

