---
title: Vector Calculus
tags:
  - Mathematics
  - University
---

### 3.1 Vector Fields

A **vector field** on $\mathbb{R}^n$ is a function
$\mathbf{F} : D \subseteq \mathbb{R}^n \to \mathbb{R}^n$.

A vector field $\mathbf{F} = (P, Q, R)$ on $\mathbb{R}^3$ is **conservative** if there exists a
scalar Potential $\phi$ such that $\mathbf{F} = \nabla \phi$.

**Theorem 3.1.** $\mathbf{F}$ is conservative (on a connected domain) if and only if
$\nabla \times \mathbf{F} = \mathbf{0}$.

_Proof._ ($\Rightarrow$) If $\mathbf{F} = \nabla \phi$ with $\phi \in C^2$Then by Clairaut's theorem
$f_{xy} = f_{yx}$Etc., which directly gives $\nabla \times (\nabla \phi) = \mathbf{0}$.

($\Leftarrow$) If $\nabla \times \mathbf{F} = \mathbf{0}$ on a connected domain $D$Then for any
Closed curve $C$ in $D$Stokes' theorem gives
$\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = 0$.
This means line integrals are path-independent, so we can define
$\phi(\mathbf{x}) = \int_{\mathbf{x}_0}^{\mathbf{x}} \mathbf{F} \cdot d\mathbf{r}$ (independent of
path), And one verifies that $\nabla \phi = \mathbf{F}$. $\blacksquare$

### 3.2 Line Integrals

**Definition.** The **line integral** of a vector field $\mathbf{F}$ along a curve $C$ parameterised
by $\mathbf{r}(t)$ for $a \leq t \leq b$ is

$$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)\, dt$$

**Theorem 3.2 (Fundamental Theorem for Line Integrals).** If $\mathbf{F} = \nabla \phi$ and $C$ is a
Piecewise smooth curve from $A$ to $B$Then

$$\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(B) - \phi(A)$$

_Proof._ Parameterise $C$ by $\mathbf{r}(t)$ for $t \in [a,b]$ with $\mathbf{r}(a) = A$
$\mathbf{r}(b) = B$.

$$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \nabla \phi(\mathbf{r}(t)) \cdot \mathbf{r}'(t)\, dt = \int_a^b \frac{d}{dt}\left[\phi(\mathbf{r}(t))\right]\, dt = \phi(\mathbf{r}(b)) - \phi(\mathbf{r}(a)) = \phi(B) - \phi(A)$$

By the chain rule. $\blacksquare$

**Corollary 3.3.** The line integral of a conservative field around any closed curve is zero.

**Problem.** Evaluate $\int_C \mathbf{F} \cdot d\mathbf{r}$ where
$\mathbf{F} = (y,\, x + e^y,\, z + 1)$ and $C$ is the Curve $\mathbf{r}(t) = (t,\, t^2,\, t^3)$ for
$0 \leq t \leq 1$.

<details>
<summary>Solution</summary>

First check if $\mathbf{F}$ is conservative. Compute the curl:

$$(\nabla \times \mathbf{F})_x = \frac{\partial (z+1)}{\partial y} - \frac{\partial (x + e^y)}{\partial z} = 0 - 0 = 0$$

$$(\nabla \times \mathbf{F})_y = \frac{\partial y}{\partial z} - \frac{\partial (z+1)}{\partial x} = 0 - 0 = 0$$

$$(\nabla \times \mathbf{F})_z = \frac{\partial (x + e^y)}{\partial x} - \frac{\partial y}{\partial y} = 1 - 1 = 0$$

Since $\nabla \times \mathbf{F} = \mathbf{0}$, $\mathbf{F}$ is conservative. Find $\phi$:

$$\frac{\partial \phi}{\partial x} = y \implies \phi = xy + g(y,z)$$

$$\frac{\partial \phi}{\partial y} = x + g_y = x + e^y \implies g_y = e^y \implies g = e^y + h(z)$$

$$\frac{\partial \phi}{\partial z} = h'(z) = z + 1 \implies h(z) = \frac{z^2}{2} + z + C$$

$$\phi(x,y,z) = xy + e^y + \frac{z^2}{2} + z$$

Now apply the fundamental theorem:

$$\int_C \mathbf{F} \cdot d\mathbf{r} = \phi(1, 1, 1) - \phi(0, 0, 0) = \left(1 + e + \frac{1}{2} + 1\right) - (1 + 1) = e + \frac{1}{2}$$

$\blacksquare$

</details>

### 3.3 Green's Theorem

**Theorem 3.4 (Green's Theorem).** Let $C$ be a positively oriented, piecewise smooth, simple closed
Curve bounding a region $D$. If $P$ and $Q$ have continuous partial derivatives on an open set
Containing $D$Then

$$\oint_C P\, dx + Q\, dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA$$

_Proof (for a Type I region)._ Assume $D$ is a Type I region:
$D = \\{(x,y) : a \leq x \leq b,\, g_1(x) \leq y \leq g_2(x)\\}$. The boundary $C$ consists of Four
pieces: bottom $C_1$Right $C_2$Top $C_3$And left $C_4$.

We first prove $\oint_C P\, dx = -\iint_D \frac{\partial P}{\partial y}\, dA$.

On $C_1$: $y = g_1(x)$, $x$ goes from $a$ to $b$So $\int_{C_1} P\, dx = \int_a^b P(x, g_1(x))\, dx$.

On $C_3$: $y = g_2(x)$, $x$ goes from $b$ to $a$So
$\int_{C_3} P\, dx = \int_b^a P(x, g_2(x))\, dx = -\int_a^b P(x, g_2(x))\, dx$.

On $C_2$ and $C_4$: $x$ is constant, so $dx = 0$Hence $\int_{C_2} P\, dx = \int_{C_4} P\, dx = 0$.

Therefore:

$$\oint_C P\, dx = \int_a^b P(x, g_1(x))\, dx - \int_a^b P(x, g_2(x))\, dx$$

Meanwhile:

$$-\iint_D \frac{\partial P}{\partial y}\, dA = -\int_a^b \int_{g_1(x)}^{g_2(x)} \frac{\partial P}{\partial y}\, dy\, dx = -\int_a^b \left[P(x, g_2(x)) - P(x, g_1(x))\right]\, dx$$

$$= \int_a^b P(x, g_1(x))\, dx - \int_a^b P(x, g_2(x))\, dx = \oint_C P\, dx$$

An identical argument (using Type II regions) proves
$\oint_C Q\, dy = \iint_D \frac{\partial Q}{\partial x}\, dA$. Adding the two equalities gives the
result. For general regions, decompose $D$ into finitely many Type I and Type II regions and note
that the line integrals along shared boundaries cancel. $\blacksquare$

**Worked Example.** Evaluate $\oint_C (x^2 - y)\, dx + (y^2 + x)\, dy$ where $C$ is the unit circle
Traversed counterclockwise.

_Solution._ By Green's theorem with $P = x^2 - y$ and $Q = y^2 + x$:

$$\frac{\partial Q}{\partial x} = 1, \quad \frac{\partial P}{\partial y} = -1$$

$$\oint_C P\, dx + Q\, dy = \iint_D (1 - (-1))\, dA = 2 \iint_D dA = 2 \cdot \pi \cdot 1^2 = 2\pi$$

$\blacksquare$

### 3.4 Curl and Divergence

**Definition.** Let $\mathbf{F} = (P, Q, R)$ be a $C^1$ vector field on $\mathbb{R}^3$.

The **curl** of $\mathbf{F}$ is

$$\nabla \times \mathbf{F} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z},\, \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x},\, \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)$$

The **divergence** of $\mathbf{F}$ is

$$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$

_Physical interpretation._ If $\mathbf{F}$ represents the velocity field of a fluid:

- **Curl** $\nabla \times \mathbf{F}$ measures the local rotational tendency (vorticity) of the
  fluid. At a point $\mathbf{p}$The component $(\nabla \times \mathbf{F}) \cdot \mathbf{n}$ gives
  twice the angular velocity of a small paddle wheel placed at $\mathbf{p}$ with axis along
  $\mathbf{n}$.

- **Divergence** $\nabla \cdot \mathbf{F}$ measures the net rate of outward flux per unit volume at
  a point. If $\nabla \cdot \mathbf{F} \gt 0$ at $\mathbf{p}$There is a net source at $\mathbf{p}$;
  if $\nabla \cdot \mathbf{F} \lt 0$There is a net sink.

**Proposition 3.5.** For any $C^2$ vector field $\mathbf{F}$:

$$\nabla \cdot (\nabla \times \mathbf{F}) = 0 \quad \mathrm{(div\ of\ curl\ is\ zero)}$$

$$\nabla \times (\nabla \phi) = \mathbf{0} \quad \mathrm{(curl\ of\ gradient\ is\ zero)}$$

_Proof._ Both follow from Clairaut's theorem on equality of mixed partials. For the first:

$$\nabla \cdot (\nabla \times \mathbf{F}) = \frac{\partial}{\partial x}\left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right) + \frac{\partial}{\partial y}\left(\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}\right) + \frac{\partial}{\partial z}\left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)$$

Each pair cancels by Clairaut:
$\frac{\partial^2 R}{\partial x\,\partial y} = \frac{\partial^2 R}{\partial y\,\partial x}$Etc.
$\blacksquare$

### 3.5 Stokes' Theorem

**Theorem 3.6 (Stokes' Theorem).** Let $S$ be an oriented surface with piecewise smooth boundary
curve $C$ (positively oriented). If $\mathbf{F}$ has continuous partial derivatives on an open set
containing $S$Then

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$$

Where $d\mathbf{S} = \mathbf{n}\, dS$ is the vector surface element with unit normal $\mathbf{n}$.

_Proof (sketch)._ Parametrise $S$ by $\mathbf{r}(u,v)$ over a region $D$ in the $uv$-plane. The
boundary $C$ of $S$ corresponds to the boundary $\partial D$ of $D$. The left-hand side becomes:

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \oint_{\partial D} \mathbf{F}(\mathbf{r}(u,v)) \cdot \left(\frac{\partial \mathbf{r}}{\partial u}\, du + \frac{\partial \mathbf{r}}{\partial v}\, dv\right)$$

Define $\tilde{P}(u,v) = \mathbf{F}(\mathbf{r}(u,v)) \cdot \mathbf{r}_u$ and
$\tilde{Q}(u,v) = \mathbf{F}(\mathbf{r}(u,v)) \cdot \mathbf{r}_v$. Applying Green's theorem in the
$uv$-plane:

$$\oint_{\partial D} \tilde{P}\, du + \tilde{Q}\, dv = \iint_D \left(\frac{\partial \tilde{Q}}{\partial u} - \frac{\partial \tilde{P}}{\partial v}\right) du\, dv$$

Expanding the partial derivatives and using the identity
$\mathbf{r}_u \times \mathbf{r}_v = \mathbf{n}\, \lVert \mathbf{r}_u \times \mathbf{r}_v \rVert$One
Verifies that the integrand equals
$(\nabla \times \mathbf{F}) \cdot \mathbf{n}\, \lVert \mathbf{r}_u \times \mathbf{r}_v \rVert$ Which
gives $\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$. $\blacksquare$

_Remark._ Green's theorem is the special case of Stokes' theorem where $S$ is a planar region in
$\mathbb{R}^2$.

**Problem.** Use Stokes' theorem to evaluate $\oint_C \mathbf{F} \cdot d\mathbf{r}$ where
$\mathbf{F} = (y^2,\, xz,\, x^2)$ and $C$ is the triangle with vertices $(1,0,0)$, $(0,1,0)$
$(0,0,1)$ traversed counterclockwise when viewed from above.

<details>
<summary>Solution</summary>

The triangle lies in the plane $x + y + z = 1$. Compute $\nabla \times \mathbf{F}$:

$$(\nabla \times \mathbf{F})_x = \frac{\partial (x^2)}{\partial y} - \frac{\partial (xz)}{\partial z} = 0 - x = -x$$

$$(\nabla \times \mathbf{F})_y = \frac{\partial (y^2)}{\partial z} - \frac{\partial (x^2)}{\partial x} = 0 - 2x = -2x$$

$$(\nabla \times \mathbf{F})_z = \frac{\partial (xz)}{\partial x} - \frac{\partial (y^2)}{\partial y} = z - 2y$$

So $\nabla \times \mathbf{F} = (-x,\, -2x,\, z - 2y)$.

Parametrise the triangle in the $xy$-plane: $0 \leq x \leq 1$, $0 \leq y \leq 1 - x$. On the plane
$z = 1 - x - y$The surface element $dS = \sqrt{3}\, dx\, dy$.

$$\iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = \frac{1}{\sqrt{3}} \iint_S (-x - 2x + z - 2y)\, dS$$

On the plane: $-3x - 2y + z = -3x - 2y + 1 - x - y = -4x - 3y + 1$.

$$= \frac{1}{\sqrt{3}} \int_0^1 \int_0^{1-x} (-4x - 3y + 1)\, \sqrt{3}\, dy\, dx = \int_0^1 \int_0^{1-x} (-4x - 3y + 1)\, dy\, dx$$

$$= \int_0^1 \left[(-4x + 1)y - \frac{3y^2}{2}\right]_0^{1-x}\, dx = \int_0^1 (-4x + 1)(1 - x) - \frac{3(1-x)^2}{2}\, dx$$

$$= \int_0^1 \left[4x^2 - 5x + 1 - \frac{3}{2} + 3x - \frac{3x^2}{2}\right]\, dx = \int_0^1 \left[\frac{5x^2}{2} - 2x - \frac{1}{2}\right]\, dx$$

$$= \left[\frac{5x^3}{6} - x^2 - \frac{x}{2}\right]_0^1 = \frac{5}{6} - 1 - \frac{1}{2} = -\frac{2}{3}$$

$\blacksquare$

</details>

### 3.6 Divergence Theorem

**Theorem 3.7 (Divergence Theorem / Gauss's Theorem).** Let $E$ be a solid region bounded by a
closed Surface $S$ with outward normal $\mathbf{n}$. If $\mathbf{F}$ has continuous partial
derivatives on an Open set containing $E$Then

$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E \nabla \cdot \mathbf{F}\, dV$$

Where
$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$
Is the divergence of $\mathbf{F}$.

_Proof (sketch for a Type I region)._ Assume $E$ is a Type I region:
$E = \\{(x,y,z) : (x,y) \in D,\, g_1(x,y) \leq z \leq g_2(x,y)\\}$. The boundary consists of Bottom
surface $S_1$ (normal pointing downward), top surface $S_2$ (normal pointing upward), And the
lateral surface $S_3$ (where the normal is horizontal).

We prove the result for the $R$-component, i.e.,
$\iint_S R\, \mathbf{k} \cdot d\mathbf{S} = \iiint_E \frac{\partial R}{\partial z}\, dV$.

The right-hand side:

$$\iiint_E \frac{\partial R}{\partial z}\, dV = \iint_D \int_{g_1(x,y)}^{g_2(x,y)} \frac{\partial R}{\partial z}\, dz\, dA = \iint_D \left[R(x,y,g_2) - R(x,y,g_1)\right]\, dA$$

On $S_2$ (top): $d\mathbf{S} = (-g_{2x}, -g_{2y}, 1)\, dA$ (upward), so
$R\, \mathbf{k} \cdot d\mathbf{S} = R(x,y,g_2)\, dA$.

On $S_1$ (bottom): $d\mathbf{S} = (g_{1x}, g_{1y}, -1)\, dA$ (downward), so
$R\, \mathbf{k} \cdot d\mathbf{S} = -R(x,y,g_1)\, dA$.

On $S_3$: $\mathbf{k} \cdot \mathbf{n} = 0$ (the normal is horizontal), so
$R\, \mathbf{k} \cdot d\mathbf{S} = 0$.

Therefore
$\iint_S R\, \mathbf{k} \cdot d\mathbf{S} = \iint_D [R(x,y,g_2) - R(x,y,g_1)]\, dA$Matching the
Volume integral. The $P$ and $Q$ components follow by an identical argument for Type II and Type III
Regions. For general regions, decompose into finitely many regions of each type. $\blacksquare$

**Worked Example.** Compute the flux of $\mathbf{F} = (x^3, y^3, z^3)$ through the unit sphere $S$.

_Solution._ By the divergence theorem:

$$\nabla \cdot \mathbf{F} = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2) = 3\rho^2$$

Using spherical coordinates:

$$\iiint_E 3\rho^2 \cdot \rho^2 \sin\phi\, d\rho\, d\phi\, d\theta = 3 \int_0^{2\pi} \int_0^{\pi} \int_0^1 \rho^4 \sin\phi\, d\rho\, d\phi\, d\theta$$

$$= 3 \cdot 2\pi \cdot 2 \cdot \frac{1}{5} = \frac{12\pi}{5}$$

$\blacksquare$

**Problem.** Compute the flux of $\mathbf{F} = (x^2,\, y^2,\, z^2)$ outward through the surface of
the Cylinder $x^2 + y^2 \leq 1$, $0 \leq z \leq 2$.

<details>
<summary>Solution</summary>

By the divergence theorem:

$$\nabla \cdot \mathbf{F} = 2x + 2y + 2z$$

Use cylindrical coordinates. The region $E'$ is $0 \leq r \leq 1$, $0 \leq \theta \leq 2\pi$
$0 \leq z \leq 2$.

$$\iiint_E (2x + 2y + 2z)\, dV = \iiint_E 2z\, dV$$

Since $\iint_E x\, dV = \iint_E y\, dV = 0$ by symmetry (odd functions over a symmetric domain).

$$= 2 \int_0^{2\pi} \int_0^1 \int_0^2 z \cdot r\, dz\, dr\, d\theta = 2 \int_0^{2\pi} \int_0^1 r\left[\frac{z^2}{2}\right]_0^2\, dr\, d\theta$$

$$= 2 \int_0^{2\pi} \int_0^1 2r\, dr\, d\theta = 2 \int_0^{2\pi} 1\, d\theta = 2 \cdot 2\pi = 4\pi$$

$\blacksquare$

</details>

### 3.7 Conservative Fields and Potential Functions

**Definition.** A vector field $\mathbf{F}$ on a domain $D \subseteq \mathbb{R}^n$ is
**conservative** if There exists a scalar function $\phi : D \to \mathbb{R}$ (called a **potential
function**) such that $\mathbf{F} = \nabla \phi$.

**Proposition 3.8 (Equivalent conditions for conservative fields).** Let $\mathbf{F} = (P, Q)$ be a
$C^1$ vector field on a connected domain $D \subseteq \mathbb{R}^2$. The following are equivalent:

1. $\mathbf{F}$ is conservative: $\mathbf{F} = \nabla \phi$ for some $\phi$.
2. $\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$ for every closed curve $C$ in $D$.
3. $\int_C \mathbf{F} \cdot d\mathbf{r}$ is path-independent in $D$.
4. $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ everywhere in $D$.

**Procedure for finding a potential function.** Given $\mathbf{F} = (P, Q, R)$ with
$\nabla \times \mathbf{F} = \mathbf{0}$:

1. Integrate $P$ with respect to $x$: $\phi = \int P\, dx + g(y, z)$.
2. Differentiate with respect to $y$ and set equal to $Q$ to determine $g_y$.
3. Integrate $g_y$ with respect to $y$: $g = \int g_y\, dy + h(z)$.
4. Differentiate with respect to $z$ and set equal to $R$ to determine $h'(z)$.
5. Integrate to find $h(z)$ and assemble $\phi$.

**Problem.** Determine whether $\mathbf{F} = (2xy + z^2,\, x^2 + 2yz,\, 2xz + y^2)$ is conservative,
And if so, find a potential function.

<details>
<summary>Solution</summary>

Check the curl:

$$(\nabla \times \mathbf{F})_x = \frac{\partial}{\partial y}(2xz + y^2) - \frac{\partial}{\partial z}(x^2 + 2yz) = 2y - 2y = 0$$

$$(\nabla \times \mathbf{F})_y = \frac{\partial}{\partial z}(2xy + z^2) - \frac{\partial}{\partial x}(2xz + y^2) = 2z - 2z = 0$$

$$(\nabla \times \mathbf{F})_z = \frac{\partial}{\partial x}(x^2 + 2yz) - \frac{\partial}{\partial y}(2xy + z^2) = 2x - 2x = 0$$

Since $\nabla \times \mathbf{F} = \mathbf{0}$, $\mathbf{F}$ is conservative. Find $\phi$:

$$\frac{\partial \phi}{\partial x} = 2xy + z^2 \implies \phi = x^2 y + xz^2 + g(y,z)$$

$$\frac{\partial \phi}{\partial y} = x^2 + g_y(y,z) = x^2 + 2yz \implies g_y(y,z) = 2yz \implies g(y,z) = y^2 z + h(z)$$

$$\frac{\partial \phi}{\partial z} = 2xz + y^2 + h'(z)$$

This must equal $2xz + y^2$So $h'(z) = 0$Giving $h(z) = C$.

Therefore $\phi(x,y,z) = x^2 y + xz^2 + y^2 z + C$. $\blacksquare$

</details>

### 3.8 Common Pitfalls

:::caution Common Pitfalls

- **Singularities.** When applying Green's, Stokes', or the Divergence theorem, verify that the
  field has continuous partial derivatives on the region (including interior). If there are
  singularities inside the region, the theorems do not apply directly; the singularity must be
  handled separately.
- ** connected domains.** The condition $\nabla \times \mathbf{F} = \mathbf{0}$ guarantees that
  $\mathbf{F}$ is conservative only on a connected domain. For example,
  $\mathbf{F} = \frac{(-y, x)}{x^2 + y^2}$ has zero curl on $\mathbb{R}^2 \setminus \\{(0,0)\\}$ but
  is not conservative there (the domain is not connected).
- **Orientation.** Green's and Stokes' theorems require positive orientation (counterclockwise for
  planar curves, right-hand rule for surfaces). The divergence theorem requires the outward normal.
  Reversing orientation changes the sign of the result.
:::

### 3.9 Relationships Among the Fundamental Theorems

The three major integral theorems of vector calculus are deeply connected:

_Remark._ Green's theorem is the planar special case of Stokes' theorem. Stokes' theorem relates the
Circulation around a curve to the curl through the surface it bounds. The divergence theorem relates
The flux through a closed surface to the divergence inside the volume it encloses. Together, these
Form the higher-dimensional analogues of the Fundamental Theorem of Calculus:

$$\int_a^b f'(x)\, dx = f(b) - f(a) \quad \mathrm{(FTC)}$$

$$\int_C \nabla \phi \cdot d\mathbf{r} = \phi(B) - \phi(A) \quad \mathrm{(FTLI)}$$

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} \quad \mathrm{(Stokes)}$$

$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{F})\, dV \quad \mathrm{(Divergence)}$$

In each case, the integral of a "derivative" over a region equals the integral of the original
function Over the boundary of that region. This is the **generalised Stokes' theorem**:

$$\int_{\partial \Omega} \omega = \int_{\Omega} d\omega$$

Where $\Omega$ is a $k$-dimensional manifold with boundary $\partial \Omega$, $\omega$ is a
$(k-1)$-form, And $d\omega$ is its exterior derivative.

