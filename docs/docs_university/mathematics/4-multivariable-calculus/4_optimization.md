---
title: Optimization
tags:
  - Mathematics
  - University
---

### 4.1 Local Extrema

**Theorem 4.1 (First Derivative Test).** If $f$ has a local extremum at an interior point
$\mathbf{a}$ And $\nabla f(\mathbf{a})$ exists, then $\nabla f(\mathbf{a}) = \mathbf{0}$.

Points where $\nabla f = \mathbf{0}$ are called **critical points** (or stationary points).

_Remark._ Not all critical points are extrema. A critical point can be a local minimum, local
maximum, Or saddle point. The second derivative test (Section 4.2) distinguishes these cases.

### 4.2 Second Derivative Test

**Theorem 4.2 (Second Derivative Test).** Let $f$ have continuous second partial derivatives near a
Critical point $(a,b)$ with $f_x(a,b) = f_y(a,b) = 0$. Let

$$D = f_{xx}(a,b) f_{yy}(a,b) - [f_{xy}(a,b)]^2$$

Be the **Hessian determinant**. Then:

- If $D \gt 0$ and $f_{xx}(a,b) \gt 0$: local minimum.
- If $D \gt 0$ and $f_{xx}(a,b) \lt 0$: local maximum.
- If $D \lt 0$: saddle point.
- If $D = 0$: the test is inconclusive.

_Proof._ By Taylor's theorem to second order, for small $h, k$:

$$f(a+h, b+k) - f(a,b) = \frac{1}{2}\left[f_{xx} h^2 + 2f_{xy} hk + f_{yy} k^2\right] + R_2$$

Where the remainder $R_2 = o(h^2 + k^2)$ and all partials are evaluated at $(a,b)$. The sign of the
Right-hand side is determined by the quadratic form

$$Q(h,k) = f_{xx} h^2 + 2f_{xy} hk + f_{yy} k^2 = \begin{pmatrix} h & k \end{pmatrix} H \begin{pmatrix} h \\ k \end{pmatrix}$$

Where $H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{pmatrix}$ is the Hessian matrix.

By Sylvester's criterion for $2 \times 2$ symmetric matrices:

- If $\det(H) = D \gt 0$ and $f_{xx} \gt 0$Then $H$ is positive definite, so $Q \gt 0$ for all
  $(h,k) \neq (0,0)$Giving a local minimum.
- If $\det(H) = D \gt 0$ and $f_{xx} \lt 0$Then $H$ is negative definite, so $Q \lt 0$ for all
  $(h,k) \neq (0,0)$Giving a local maximum.
- If $\det(H) = D \lt 0$Then $H$ is indefinite, so $Q$ takes both positive and negative values,
  giving a saddle point.

When $D = 0$The quadratic form is degenerate and the sign is determined by higher-order terms.
$\blacksquare$

### 4.3 Lagrange Multipliers

**Theorem 4.3 (Method of Lagrange Multipliers).** To find the extrema of $f(x,y,z)$ subject to the
Constraint $g(x,y,z) = 0$Solve the system:

$$\nabla f = \lambda \nabla g, \quad g = 0$$

More generally, for $k$ constraints $g_1 = 0, \ldots, g_k = 0$:

$$\nabla f = \lambda_1 \nabla g_1 + \cdots + \lambda_k \nabla g_k$$

_Proof (single constraint, geometric justification)._ Let $M = \\{(x,y,z) : g(x,y,z) = 0\\}$ be the
constraint surface. If $f$ has a local extremum on $M$ at $\mathbf{p}$Then the directional
derivative $D_{\mathbf{v}} f(\mathbf{p}) = 0$ for every tangent Vector $\mathbf{v}$ to $M$ at
$\mathbf{p}$. Since $\nabla f(\mathbf{p}) \cdot \mathbf{v} = 0$ for all Such $\mathbf{v}$The
gradient $\nabla f(\mathbf{p})$ must be orthogonal to the tangent space of $M$ At $\mathbf{p}$. But
the tangent space of $M$ is orthogonal to $\nabla g(\mathbf{p})$ (by the implicit Function theorem).
Therefore $\nabla f(\mathbf{p})$ must be parallel to $\nabla g(\mathbf{p})$I.e.,
$\nabla f(\mathbf{p}) = \lambda\, \nabla g(\mathbf{p})$ for some scalar $\lambda$. $\blacksquare$

### 4.4 Worked Example

**Problem.** Find the maximum of $f(x,y) = xy$ subject to $x^2 + y^2 = 1$.

_Solution._ Set $g(x,y) = x^2 + y^2 - 1$. The Lagrange multiplier equations:

$\nabla f = \lambda \nabla g \implies (y, x) = \lambda(2x, 2y)$

This gives $y = 2\lambda x$ and $x = 2\lambda y$. Multiplying: $xy = 4\lambda^2 xy$.

Case 1: $xy \neq 0$. Then $4\lambda^2 = 1$So $\lambda = \pm 1/2$.

- $\lambda = 1/2$: $y = x$And $x^2 + x^2 = 1$So $x = \pm 1/\sqrt{2}$. Points:
  $(1/\sqrt{2}, 1/\sqrt{2})$ and $(-1/\sqrt{2}, -1/\sqrt{2})$ with $f = 1/2$.
- $\lambda = -1/2$: $y = -x$And $x^2 + x^2 = 1$So $x = \pm 1/\sqrt{2}$. Points:
  $(1/\sqrt{2}, -1/\sqrt{2})$ and $(-1/\sqrt{2}, 1/\sqrt{2})$ with $f = -1/2$.

Case 2: $xy = 0$. Then either $x = 0$ or $y = 0$. From the constraint: $(0, \pm 1)$ or $(\pm 1, 0)$
with $f = 0$.

Maximum: $f = 1/2$ at $(\pm 1/\sqrt{2}, \pm 1/\sqrt{2})$. Minimum: $f = -1/2$ at
$(\pm 1/\sqrt{2}, \mp 1/\sqrt{2})$. $\blacksquare$

### 4.5 Additional Worked Examples

**Problem.** Find and classify all critical points of $f(x,y) = x^4 + y^4 - 4xy$.

<details>
<summary>Solution</summary>

Compute the gradient:

$$\nabla f = (4x^3 - 4y,\, 4y^3 - 4x)$$

Set $\nabla f = (0,0)$:

$$x^3 = y, \quad y^3 = x$$

Substituting $y = x^3$ into $y^3 = x$: $(x^3)^3 = x$I.e., $x^9 = x$Giving $x(x^8 - 1) = 0$. So
$x = 0$ or $x = \pm 1$.

- $x = 0$: $y = 0$. Critical point: $(0, 0)$.
- $x = 1$: $y = 1$. Critical point: $(1, 1)$.
- $x = -1$: $y = -1$. Critical point: $(-1, -1)$.

Second derivatives: $f_{xx} = 12x^2$, $f_{yy} = 12y^2$, $f_{xy} = -4$.

At $(0,0)$: $D = 0 \cdot 0 - 16 = -16 \lt 0$. **Saddle point.**

At $(1,1)$: $D = 12 \cdot 12 - 16 = 144 - 16 = 128 \gt 0$ and $f_{xx} = 12 \gt 0$. **Local minimum**
with $f(1,1) = 1 + 1 - 4 = -2$.

At $(-1,-1)$: $D = 12 \cdot 12 - 16 = 128 \gt 0$ and $f_{xx} = 12 \gt 0$. **Local minimum** with
$f(-1,-1) = 1 + 1 - 4 = -2$. $\blacksquare$

</details>

**Problem.** Find and classify all critical points of $f(x,y) = x^3 + y^3 - 3xy$.

<details>
<summary>Solution</summary>

Compute the gradient:

$$\nabla f = (3x^2 - 3y,\, 3y^2 - 3x)$$

Set $\nabla f = (0,0)$:

$$3x^2 - 3y = 0 \implies y = x^2, \quad 3y^2 - 3x = 0 \implies y^2 = x$$

Substituting: $(x^2)^2 = x$So $x^4 - x = 0$Giving $x(x^3 - 1) = 0$So $x = 0$ or $x = 1$.

- $x = 0$: $y = 0$. Critical point: $(0, 0)$.
- $x = 1$: $y = 1$. Critical point: $(1, 1)$.

Second derivatives: $f_{xx} = 6x$, $f_{yy} = 6y$, $f_{xy} = -3$.

At $(0,0)$: $D = f_{xx} f_{yy} - f_{xy}^2 = 0 \cdot 0 - 9 = -9 \lt 0$. **Saddle point.**

At $(1,1)$: $D = 6 \cdot 6 - 9 = 27 \gt 0$ and $f_{xx} = 6 \gt 0$. **Local minimum** with
$f(1,1) = -1$. $\blacksquare$

</details>

**Problem.** Find the point on the plane $x + 2y + 3z = 6$ closest to the origin.

<details>
<summary>Solution</summary>

Minimise $f(x,y,z) = x^2 + y^2 + z^2$ subject to $g(x,y,z) = x + 2y + 3z - 6 = 0$.

$\nabla f = \lambda \nabla g$:

$$(2x, 2y, 2z) = \lambda(1, 2, 3)$$

This gives $x = \lambda/2$, $y = \lambda$, $z = 3\lambda/2$. Substituting into the constraint:

$$\frac{\lambda}{2} + 2\lambda + \frac{9\lambda}{2} = 6 \implies \frac{\lambda + 4\lambda + 9\lambda}{2} = 6 \implies 7\lambda = 6 \implies \lambda = \frac{6}{7}$$

Therefore $x = 3/7$, $y = 6/7$, $z = 9/7$. The closest point is $(3/7,\, 6/7,\, 9/7)$ with Distance
$\sqrt{9/49 + 36/49 + 81/49} = \sqrt{126/49} = \frac{3\sqrt{14}}{7}$. $\blacksquare$

</details>

### 4.6 Multiple Constraints

**Problem.** Maximise $f(x,y,z) = xyz$ subject to $x + y + z = 1$ and $x^2 + y^2 + z^2 = 1/3$.

<details>
<summary>Solution</summary>

Set $g_1 = x + y + z - 1$ and $g_2 = x^2 + y^2 + z^2 - 1/3$. The Lagrange multiplier system is:

$$\nabla f = \lambda_1 \nabla g_1 + \lambda_2 \nabla g_2$$

$$(yz, xz, xy) = \lambda_1(1, 1, 1) + \lambda_2(2x, 2y, 2z)$$

This gives three equations:

$$yz = \lambda_1 + 2\lambda_2 x, \quad xz = \lambda_1 + 2\lambda_2 y, \quad xy = \lambda_1 + 2\lambda_2 z$$

Subtracting the first two: $z(y - x) = 2\lambda_2(x - y)$Giving $(y - x)(z + 2\lambda_2) = 0$.

Similarly, $(z - y)(x + 2\lambda_2) = 0$ and $(x - z)(y + 2\lambda_2) = 0$.

If $x = y = z$: From $g_1$: $3x = 1$So $x = 1/3$. From $g_2$: $3(1/9) = 1/3$. This satisfies both
constraints.

At $(1/3, 1/3, 1/3)$: $f = 1/27$.

If $x \neq y$: Then $z + 2\lambda_2 = 0$. If also $y \neq z$: $x + 2\lambda_2 = 0$So $x = z$.

With $x = z$: from $x + y + z = 1$: $2x + y = 1$. From $2x^2 + y^2 = 1/3$: Substituting
$y = 1 - 2x$: $6x^2 - 4x + 2/3 = 0$I.e., $(3x - 1)^2 = 0$So $x = 1/3$ $y = 1/3$. This reduces to the
symmetric case.

Therefore the only critical point is $(1/3, 1/3, 1/3)$Which gives $f = 1/27$.

Since the constraint set is compact (intersection of a plane and a sphere in $\mathbb{R}^3$), the
Extreme value theorem guarantees both a maximum and minimum exist. The maximum of $xyz$ is $1/27$ at
$(1/3, 1/3, 1/3)$. $\blacksquare$

</details>

### 4.7 Common Pitfalls

:::caution Common Pitfalls

- **Lagrange multipliers find candidates only.** The method produces candidates for constrained
  extrema but does not guarantee they are extrema. Always evaluate $f$ at all candidates and use
  additional reasoning (e.g., compactness of the constraint set via the extreme value theorem) to
  determine which gives the max/min.
- **Boundary vs. Interior.** For unconstrained problems on a closed, bounded domain, check both
  interior critical points and boundary points separately.
- **Degenerate Hessian.** When the Hessian determinant $D = 0$The second derivative test is
  inconclusive. Use higher-order Taylor expansions or direct analysis of the function near the
  critical point.
- **Non-normalised constraint gradients.** Ensure the constraint functions are written in the form
  $g = 0$; multiplying $g$ by a constant changes $\lambda$ but not the critical points.
:::


