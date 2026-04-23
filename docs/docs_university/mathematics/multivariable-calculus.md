---
title: Multivariable Calculus
date: 2026-04-23T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: multivariable-calculus
---

## 1. Partial Derivatives

### 1.1 Definition

Let $f : D \subseteq \mathbb{R}^n \to \mathbb{R}$. The **partial derivative** of $f$ with respect to
$x_i$ at $\mathbf{a} = (a_1, \ldots, a_n)$ is

$$\frac{\partial f}{\partial x_i}(\mathbf{a}) = \lim_{h \to 0} \frac{f(a_1, \ldots, a_i + h, \ldots, a_n) - f(a_1, \ldots, a_n)}{h}$$

provided the limit exists. This is the rate of change of $f$ in the direction of the $x_i$-axis,
holding all other variables fixed.

### 1.2 Clairaut's Theorem

**Theorem 1.1 (Clairaut's Theorem / Schwarz's Theorem).** If $f_{xy}$ and $f_{yx}$ are continuous on an
open set containing $(a, b)$, then

$$\frac{\partial^2 f}{\partial x \partial y}(a,b) = \frac{\partial^2 f}{\partial y \partial x}(a,b)$$

### 1.3 Differentiability

**Definition.** $f : D \subseteq \mathbb{R}^n \to \mathbb{R}$ is **differentiable** at $\mathbf{a}$ if
there exists a linear map $L : \mathbb{R}^n \to \mathbb{R}$ such that

$$\lim_{\mathbf{h} \to \mathbf{0}} \frac{f(\mathbf{a} + \mathbf{h}) - f(\mathbf{a}) - L(\mathbf{h})}{\lVert \mathbf{h} \rVert} = 0$$

When $f$ is differentiable at $\mathbf{a}$, the linear map $L$ is given by the gradient.

### 1.4 The Gradient

The **gradient** of $f$ at $\mathbf{a}$ is

$$\nabla f(\mathbf{a}) = \left(\frac{\partial f}{\partial x_1}(\mathbf{a}), \ldots, \frac{\partial f}{\partial x_n}(\mathbf{a})\right)$$

The linear approximation of $f$ near $\mathbf{a}$ is

$$f(\mathbf{a} + \mathbf{h}) \approx f(\mathbf{a}) + \nabla f(\mathbf{a}) \cdot \mathbf{h}$$

**Theorem 1.2.** If all partial derivatives of $f$ exist and are continuous in a neighbourhood of
$\mathbf{a}$, then $f$ is differentiable at $\mathbf{a}$.

### 1.5 Directional Derivatives

The **directional derivative** of $f$ at $\mathbf{a}$ in the direction of a unit vector $\mathbf{u}$ is

$$D_{\mathbf{u}} f(\mathbf{a}) = \lim_{h \to 0} \frac{f(\mathbf{a} + h\mathbf{u}) - f(\mathbf{a})}{h}$$

**Theorem 1.3.** If $f$ is differentiable at $\mathbf{a}$, then

$$D_{\mathbf{u}} f(\mathbf{a}) = \nabla f(\mathbf{a}) \cdot \mathbf{u}$$

**Corollary 1.4.** The gradient points in the direction of steepest ascent, and $\lVert \nabla f \rVert$
is the rate of steepest ascent.

### 1.6 Chain Rule

**Theorem 1.5 (Multivariable Chain Rule).** If $\mathbf{g} : \mathbb{R}^m \to \mathbb{R}^n$ is
differentiable at $\mathbf{a}$ and $f : \mathbb{R}^n \to \mathbb{R}$ is differentiable at
$\mathbf{g}(\mathbf{a})$, then

$$\nabla (f \circ \mathbf{g})(\mathbf{a}) = J\mathbf{g}(\mathbf{a})^T \nabla f(\mathbf{g}(\mathbf{a}))$$

where $J\mathbf{g}$ is the Jacobian matrix of $\mathbf{g}$.

### 1.7 Worked Example

**Problem.** Let $f(x, y) = x^2 y + \sin(xy)$. Compute $\nabla f$ and find the directional derivative
at $(1, \pi)$ in the direction $\mathbf{u} = (1/\sqrt{2}, 1/\sqrt{2})$.

*Solution.*

$\frac{\partial f}{\partial x} = 2xy + y\cos(xy)$

$\frac{\partial f}{\partial y} = x^2 + x\cos(xy)$

$\nabla f(1, \pi) = (2\pi + \pi\cos(\pi), 1 + \cos(\pi)) = (2\pi - \pi, 1 - 1) = (\pi, 0)$

$D_{\mathbf{u}} f(1, \pi) = \nabla f(1, \pi) \cdot \mathbf{u} = \pi \cdot \frac{1}{\sqrt{2}} + 0 = \frac{\pi}{\sqrt{2}}$ $\blacksquare$

## 2. Multiple Integrals

### 2.1 Double Integrals

The **double integral** of $f$ over a rectangle $R = [a,b] \times [c,d]$ is defined as the limit of
Riemann sums:

$$\iint_R f(x,y)\, dA = \lim_{\lVert P \rVert \to 0} \sum_{i,j} f(x_{ij}^*, y_{ij}^*) \Delta A_{ij}$$

**Theorem 2.1 (Fubini's Theorem).** If $f$ is continuous on $R = [a,b] \times [c,d]$, then

$$\iint_R f(x,y)\, dA = \int_a^b \left(\int_c^d f(x,y)\, dy\right) dx = \int_c^d \left(\int_a^b f(x,y)\, dx\right) dy$$

### 2.2 General Regions

For a general region $D$ in $\mathbb{R}^2$:

- **Type I region**: $D = \{(x,y) : a \leq x \leq b,\, g_1(x) \leq y \leq g_2(x)\}$

$$\iint_D f\, dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f(x,y)\, dy\, dx$$

- **Type II region**: $D = \{(x,y) : c \leq y \leq d,\, h_1(y) \leq x \leq h_2(y)\}$

$$\iint_D f\, dA = \int_c^d \int_{h_1(y)}^{h_2(y)} f(x,y)\, dx\, dy$$

### 2.3 Triple Integrals

Triple integrals extend naturally to $\mathbb{R}^3$:

$$\iiint_E f(x,y,z)\, dV = \iint_D \left(\int_{g_1(x,y)}^{g_2(x,y)} f(x,y,z)\, dz\right) dA$$

### 2.4 Change of Variables

**Theorem 2.2 (Change of Variables).** Let $T : D \subseteq \mathbb{R}^n \to \mathbb{R}^n$ be a
$C^1$ diffeomorphism with Jacobian determinant $J_T$. Then

$$\int_{T(D)} f(\mathbf{u})\, d\mathbf{u} = \int_D f(T(\mathbf{x})) |J_T(\mathbf{x})|\, d\mathbf{x}$$

**Polar coordinates:** $x = r\cos\theta$, $y = r\sin\theta$, $|J| = r$.

$$\iint_D f(x,y)\, dA = \iint_{D'} f(r\cos\theta, r\sin\theta)\, r\, dr\, d\theta$$

**Cylindrical coordinates:** $x = r\cos\theta$, $y = r\sin\theta$, $z = z$, $|J| = r$.

**Spherical coordinates:** $x = \rho\sin\phi\cos\theta$, $y = \rho\sin\phi\sin\theta$, $z = \rho\cos\phi$,
$|J| = \rho^2 \sin\phi$.

### 2.5 Worked Example

**Problem.** Compute $\iint_D (x^2 + y^2)\, dA$ where $D$ is the region bounded by $x^2 + y^2 = 4$.

*Solution.* Use polar coordinates. The region $D'$ is $0 \leq r \leq 2$, $0 \leq \theta \leq 2\pi$.

$$\iint_D (x^2 + y^2)\, dA = \int_0^{2\pi} \int_0^2 r^2 \cdot r\, dr\, d\theta = \int_0^{2\pi} \int_0^2 r^3\, dr\, d\theta$$

$$= \int_0^{2\pi} \left[\frac{r^4}{4}\right]_0^2 d\theta = \int_0^{2\pi} 4\, d\theta = 8\pi$$

$\blacksquare$

## 3. Vector Calculus

### 3.1 Vector Fields

A **vector field** on $\mathbb{R}^n$ is a function $\mathbf{F} : D \subseteq \mathbb{R}^n \to \mathbb{R}^n$.

A vector field $\mathbf{F} = (P, Q, R)$ on $\mathbb{R}^3$ is **conservative** if there exists a scalar
potential $\phi$ such that $\mathbf{F} = \nabla \phi$.

**Theorem 3.1.** $\mathbf{F}$ is conservative (on a simply connected domain) if and only if
$\nabla \times \mathbf{F} = \mathbf{0}$.

### 3.2 Line Integrals

**Definition.** The **line integral** of a vector field $\mathbf{F}$ along a curve $C$ parameterised by
$\mathbf{r}(t)$ for $a \leq t \leq b$ is

$$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)\, dt$$

**Theorem 3.2 (Fundamental Theorem for Line Integrals).** If $\mathbf{F} = \nabla \phi$ and $C$ is a
piecewise smooth curve from $A$ to $B$, then

$$\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$$

**Corollary 3.3.** The line integral of a conservative field around any closed curve is zero.

### 3.3 Green's Theorem

**Theorem 3.4 (Green's Theorem).** Let $C$ be a positively oriented, piecewise smooth, simple closed
curve bounding a region $D$. If $P$ and $Q$ have continuous partial derivatives on an open set
containing $D$, then

$$\oint_C P\, dx + Q\, dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA$$

**Worked Example.** Evaluate $\oint_C (x^2 - y)\, dx + (y^2 + x)\, dy$ where $C$ is the unit circle
traversed counterclockwise.

*Solution.* By Green's theorem with $P = x^2 - y$ and $Q = y^2 + x$:

$$\frac{\partial Q}{\partial x} = 1, \quad \frac{\partial P}{\partial y} = -1$$

$$\oint_C P\, dx + Q\, dy = \iint_D (1 - (-1))\, dA = 2 \iint_D dA = 2 \cdot \pi \cdot 1^2 = 2\pi$$

$\blacksquare$

### 3.4 Stokes' Theorem

**Theorem 3.5 (Stokes' Theorem).** Let $S$ be an oriented surface with piecewise smooth boundary curve
$C$ (positively oriented). If $\mathbf{F}$ has continuous partial derivatives on an open set containing
$S$, then

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$$

where $d\mathbf{S} = \mathbf{n}\, dS$ is the vector surface element with unit normal $\mathbf{n}$.

### 3.5 Divergence Theorem

**Theorem 3.6 (Divergence Theorem / Gauss's Theorem).** Let $E$ be a solid region bounded by a closed
surface $S$ with outward normal $\mathbf{n}$. If $\mathbf{F}$ has continuous partial derivatives on an
open set containing $E$, then

$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E \nabla \cdot \mathbf{F}\, dV$$

where $\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$
is the divergence of $\mathbf{F}$.

**Worked Example.** Compute the flux of $\mathbf{F} = (x^3, y^3, z^3)$ through the unit sphere $S$.

*Solution.* By the divergence theorem:

$$\nabla \cdot \mathbf{F} = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2) = 3\rho^2$$

Using spherical coordinates:

$$\iiint_E 3\rho^2 \cdot \rho^2 \sin\phi\, d\rho\, d\phi\, d\theta = 3 \int_0^{2\pi} \int_0^{\pi} \int_0^1 \rho^4 \sin\phi\, d\rho\, d\phi\, d\theta$$

$$= 3 \cdot 2\pi \cdot 2 \cdot \frac{1}{5} = \frac{12\pi}{5}$$

$\blacksquare$

:::caution Common Pitfall
When applying Green's, Stokes', or the Divergence theorem, verify that the field has continuous partial
derivatives on the region (including interior). If there are singularities inside the region, the
theorems do not apply directly; the singularity must be handled separately.
:::

## 4. Optimization

### 4.1 Local Extrema

**Theorem 4.1 (First Derivative Test).** If $f$ has a local extremum at an interior point $\mathbf{a}$
and $\nabla f(\mathbf{a})$ exists, then $\nabla f(\mathbf{a}) = \mathbf{0}$.

Points where $\nabla f = \mathbf{0}$ are called **critical points** (or stationary points).

### 4.2 Second Derivative Test

**Theorem 4.2 (Second Derivative Test).** Let $f$ have continuous second partial derivatives near a
critical point $(a,b)$ with $f_x(a,b) = f_y(a,b) = 0$. Let

$$D = f_{xx}(a,b) f_{yy}(a,b) - [f_{xy}(a,b)]^2$$

be the **Hessian determinant**. Then:

- If $D > 0$ and $f_{xx}(a,b) > 0$: local minimum.
- If $D > 0$ and $f_{xx}(a,b) < 0$: local maximum.
- If $D < 0$: saddle point.
- If $D = 0$: the test is inconclusive.

### 4.3 Lagrange Multipliers

**Theorem 4.3 (Method of Lagrange Multipliers).** To find the extrema of $f(x,y,z)$ subject to the
constraint $g(x,y,z) = 0$, solve the system:

$$\nabla f = \lambda \nabla g, \quad g = 0$$

More generally, for $k$ constraints $g_1 = 0, \ldots, g_k = 0$:

$$\nabla f = \lambda_1 \nabla g_1 + \cdots + \lambda_k \nabla g_k$$

### 4.4 Worked Example

**Problem.** Find the maximum of $f(x,y) = xy$ subject to $x^2 + y^2 = 1$.

*Solution.* Set $g(x,y) = x^2 + y^2 - 1$. The Lagrange multiplier equations:

$\nabla f = \lambda \nabla g \implies (y, x) = \lambda(2x, 2y)$

This gives $y = 2\lambda x$ and $x = 2\lambda y$. Multiplying: $xy = 4\lambda^2 xy$.

Case 1: $xy \neq 0$. Then $4\lambda^2 = 1$, so $\lambda = \pm 1/2$.

- $\lambda = 1/2$: $y = x$, and $x^2 + x^2 = 1$, so $x = \pm 1/\sqrt{2}$. Points: $(1/\sqrt{2}, 1/\sqrt{2})$ and $(-1/\sqrt{2}, -1/\sqrt{2})$ with $f = 1/2$.
- $\lambda = -1/2$: $y = -x$, and $x^2 + x^2 = 1$, so $x = \pm 1/\sqrt{2}$. Points: $(1/\sqrt{2}, -1/\sqrt{2})$ and $(-1/\sqrt{2}, 1/\sqrt{2})$ with $f = -1/2$.

Case 2: $xy = 0$. Then either $x = 0$ or $y = 0$. From the constraint: $(0, \pm 1)$ or $(\pm 1, 0)$ with $f = 0$.

Maximum: $f = 1/2$ at $(\pm 1/\sqrt{2}, \pm 1/\sqrt{2})$. Minimum: $f = -1/2$ at $(\pm 1/\sqrt{2}, \mp 1/\sqrt{2})$. $\blacksquare$

:::caution Common Pitfall
The Lagrange multiplier method finds candidates for constrained extrema but does not guarantee they
are extrema. Always check which candidate gives the maximum/minimum, or use additional reasoning (e.g.,
compactness of the constraint set).
:::
