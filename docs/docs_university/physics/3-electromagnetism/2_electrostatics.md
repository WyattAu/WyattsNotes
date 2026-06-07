---
title: Electrostatics
tags:
  - Physics
  - University
---

### 2.1 Coulomb's Law and the Electric Field

**Coulomb's Law:** The force between two point charges $q_1$ and $q_2$ separated by distance $r$:

$$\mathbf{F} = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2} \hat{\mathbf{r}}$$

The **electric field** due to a point charge $q$ at position $\mathbf{r}$:

$$\mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \frac{q}{|\mathbf{r}|^2} \hat{\mathbf{r}}$$

**Superposition Principle:** The field due to a collection of charges is the vector sum of
individual Fields.

<DesmosGraph title="Electric Field: 1/r^2 Dependence" expressions={["\\frac{k}{(x-d)^2}",
"\\frac{-k}{(x+d)^2}", "\\frac{k}{(x-d)^2}+\\frac{-k}{(x+d)^2}"]} width={800} height={500} />

### 2.2 Gauss's Law Applications

**Example: Infinite plane of charge** with surface charge density $\sigma$.

Choose a Gaussian "pillbox" of area $A$ straddling the plane. By symmetry, $\mathbf{E}$ is
Perpendicular to the plane. Gauss's law:

$$2EA = \frac{\sigma A}{\varepsilon_0} \implies E = \frac{\sigma}{2\varepsilon_0}$$

The field is uniform and perpendicular to the plane, pointing away from positive charge.

**Example: Uniformly charged sphere** of radius $R$ with total charge $Q$.

For $r \gt R$: $\mathbf{E} = \frac{Q}{4\pi\varepsilon_0 r^2} \hat{\mathbf{r}}$ (identical to a point
charge).

For $r \lt R$: $E = \frac{Qr}{4\pi\varepsilon_0 R^3}$ (linear in $r$).

### 2.3 Electric Potential

The **electric potential** is defined by $\mathbf{E} = -\nabla V$ (for electrostatics, where
$\nabla \times \mathbf{E} = \mathbf{0}$).

For a point charge: $V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \frac{q}{r}$ (choosing
$V(\infty) = 0$).

**Theorem 2.1.** $\nabla \times \mathbf{E} = \mathbf{0}$ in electrostatics implies $\mathbf{E}$ is
Conservative, so the line integral $\int_A^B \mathbf{E} \cdot d\mathbf{l} = V(A) - V(B)$ is
Path-independent.

### 2.4 Poisson's and Laplace’s Equations

Substituting $\mathbf{E} = -\nabla V$ into Gauss's law:

$$\nabla \cdot (-\nabla V) = -\nabla^2 V = \frac{\rho}{\varepsilon_0}$$

This is **Poisson's equation**:

$$\nabla^2 V = -\frac{\rho}{\varepsilon_0}$$

In regions with $\rho = 0$This reduces to **Laplace's equation**:

$$\nabla^2 V = 0$$

**Theorem 2.2 (Uniqueness --- statement).** The solution to Laplace's (or Poisson's) equation in a
Region is unique given either Dirichlet boundary conditions ($V$ specified on the boundary) or
Neumann boundary conditions ($\partial V / \partial n$ specified on the boundary).

### 2.5 Worked Example

**Problem.** Two infinite conducting plates at $x = 0$ and $x = d$ are held at potentials $V = 0$
and $V = V_0$ respectively. Find the potential and field between them.

_Solution._ Between the plates, $\rho = 0$So $\nabla^2 V = 0$. By symmetry, $V$ depends only on $x$:

$$\frac{d^2V}{dx^2} = 0 \implies V(x) = Ax + B$$

Boundary conditions: $V(0) = 0 \implies B = 0$. $V(d) = V_0 \implies A = V_0/d$.

$$V(x) = \frac{V_0}{d} x, \quad \mathbf{E} = -\frac{dV}{dx}\hat{\mathbf{x}} = -\frac{V_0}{d}\hat{\mathbf{x}}$$

$\blacksquare$

### 2.6 Gauss's Law: Cylindrical Symmetry

**Example: Infinite line charge** with linear charge density $\lambda$.

By cylindrical symmetry, $\mathbf{E}$ points radially outward and depends only on $r$. Choose a
Gaussian cylinder of radius $r$ and length $L$:

$$\oint \mathbf{E} \cdot d\mathbf{A} = E \cdot 2\pi r L = \frac{\lambda L}{\varepsilon_0}$$

$$\mathbf{E} = \frac{\lambda}{2\pi\varepsilon_0 r}\,\hat{\mathbf{r}}$$

**Example: Coaxial cable.** An inner conductor of radius $a$ carries linear charge density
$+\lambda$And an outer conducting shell of radius $b$ carries $-\lambda$.

For $r \lt a$: $\mathbf{E} = \mathbf{0}$ (conductor interior).

For $a \lt r \lt b$: $\mathbf{E} = \frac{\lambda}{2\pi\varepsilon_0 r}\,\hat{\mathbf{r}}$.

For $r \gt b$: $\mathbf{E} = \mathbf{0}$ (total enclosed charge is zero).

The potential difference between the conductors:

$$V(a) - V(b) = -\int_a^b \mathbf{E} \cdot d\mathbf{l} = \frac{\lambda}{2\pi\varepsilon_0}\ln\!\left(\frac{b}{a}\right)$$

### 2.7 The Uniqueness Theorem

**Theorem 2.3 (Uniqueness for Dirichlet conditions).** The solution to Poisson's equation
$\nabla^2 V = -\rho/\varepsilon_0$ in a volume $\mathcal{V}$ is unique if $V$ is specified on the
Boundary $\mathcal{S}$.

_Proof._ Suppose $V_1$ and $V_2$ both satisfy Poisson's equation with the same boundary Conditions.
Define $U = V_1 - V_2$. Then $\nabla^2 U = 0$ in $\mathcal{V}$ and $U = 0$ on $\mathcal{S}$.

Apply **Green's first identity** with $\phi = \psi = U$:

$$\int_{\mathcal{V}} \left(U\,\nabla^2 U + \lvert\nabla U\rvert^2\right) dV = \oint_{\mathcal{S}} U\,\frac{\partial U}{\partial n}\, dA$$

Since $\nabla^2 U = 0$ and $U = 0$ on $\mathcal{S}$:

$$\int_{\mathcal{V}} \lvert\nabla U\rvert^2\, dV = 0$$

Since the integrand is non-negative, $\nabla U = \mathbf{0}$ everywhere in $\mathcal{V}$So $U$ is
Constant. With $U = 0$ on the boundary, $U = 0$ throughout $\mathcal{V}$. Hence $V_1 = V_2$.
$\blacksquare$

**Theorem 2.4 (Uniqueness for Neumann conditions).** The solution is unique up to an additive
Constant when $\partial V/\partial n$ is specified on $\mathcal{S}$.

_Proof._ The same argument applies, but now $\partial U/\partial n = 0$ on $\mathcal{S}$ and the
Right-hand side of Green's identity vanishes for a different reason. We again conclude
$\nabla U = \mathbf{0}$So $U$ is constant. $\blacksquare$

### 2.8 Method of Images

The method of images replaces a problem with conductors by an equivalent problem with charges only,
Exploiting the uniqueness theorem.

**Point charge above a grounded plane.** A charge $q$ is placed at distance $d$ above an Infinite
grounded conducting plane ($V = 0$ at $z = 0$).

Replace the plane by an image charge $q' = -q$ at $z = -d$. The potential for $z \gt 0$ is:

$$V(x,y,z) = \frac{1}{4\pi\varepsilon_0}\left[\frac{q}{\sqrt{x^2 + y^2 + (z-d)^2}} - \frac{q}{\sqrt{x^2 + y^2 + (z+d)^2}}\right]$$

This satisfies $\nabla^2 V = 0$ for $z \gt 0$ (away from the charge), $V = 0$ at $z = 0$And
$V \to 0$ as $r \to \infty$. By the uniqueness theorem, this is the correct solution.

The force on $q$ is the force due to the image charge:

$$\mathbf{F} = -\frac{q^2}{4\pi\varepsilon_0 (2d)^2}\,\hat{\mathbf{z}}$$

The induced surface charge density on the plane:

$$\sigma(x,y) = -\varepsilon_0 \left.\frac{\partial V}{\partial z}\right|_{z=0} = -\frac{qd}{2\pi(x^2+y^2+d^2)^{3/2}}$$

**Example: Point charge inside a grounded sphere.** A charge $q$ is at distance $a$ from the centre
Of a grounded conducting sphere of radius $R$ ($a \lt R$).

The image charge is $q' = -qR/a$ located at distance $b = R^2/a$ from the centre, along the same
Radial line.

<details>
<summary>Solution: Verifying the image charge</summary>

We must verify that $V = 0$ on the sphere. Place $q$ at distance $a$ from the origin along the
$z$-axis and $q'$ at distance $b$ along the $z$-axis. At any point on the sphere at distance $R$
From the origin, the distances to $q$ and $q'$ are $d_1$ and $d_2$ where:

$$d_1^2 = R^2 + a^2 - 2Ra\cos\theta, \quad d_2^2 = R^2 + b^2 - 2Rb\cos\theta$$

For $V = 0$ on the sphere, we need $q/d_1 = -q'/d_2$ for all $\theta$. This requires the ratio
$d_2/d_1$ to be constant. Setting $b = R^2/a$:

$$\frac{d_2^2}{d_1^2} = \frac{R^2 + R^4/a^2 - 2R^3\cos\theta/a}{R^2 + a^2 - 2Ra\cos\theta} = \frac{R^2}{a^2}$$

The ratio is indeed constant. Choosing $q' = -qR/a$ gives $q/d_1 + q'/d_2 = 0$ on the sphere.
$\blacksquare$

</details>

### 2.9 Multipole Expansion

For a localized charge distribution $\rho(\mathbf{r}')$The potential at large distance
$r = \lvert\mathbf{r}\rvert \gg r' = \lvert\mathbf{r}'\rvert$ is expanded using
$\frac{1}{\lvert\mathbf{r}-\mathbf{r}'\rvert} = \sum_{n=0}^{\infty} \frac{r'^n}{r^{n+1}} P_n(\cos\alpha)$
Where $\alpha$ is the angle between $\mathbf{r}$ and $\mathbf{r}'$:

$$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\sum_{n=0}^{\infty}\frac{1}{r^{n+1}}\int r'^n P_n(\cos\alpha)\,\rho(\mathbf{r}')\,d^3\mathbf{r}'$$

**Monopole term** ($n = 0$):

$$V_0 = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r}, \quad Q = \int \rho(\mathbf{r}')\,d^3\mathbf{r}'$$

This is the potential of a point charge at the origin.

**Dipole term** ($n = 1$):

$$V_1 = \frac{1}{4\pi\varepsilon_0}\frac{\mathbf{p} \cdot \hat{\mathbf{r}}}{r^2}, \quad \mathbf{p} = \int \mathbf{r}'\,\rho(\mathbf{r}')\,d^3\mathbf{r}'$$

Where $\mathbf{p}$ is the **electric dipole moment**.

**Quadrupole term** ($n = 2$): Depends on the quadrupole moment tensor:

$$Q_{ij} = \int (3r_i' r_j' - r'^2 \delta_{ij})\,\rho(\mathbf{r}')\,d^3\mathbf{r}'$$

$$V_2 = \frac{1}{4\pi\varepsilon_0}\frac{1}{2r^3}\sum_{i,j} Q_{ij}\,\hat{r}_i\,\hat{r}_j$$

For a neutral charge distribution ($Q = 0$), the dipole term dominates. If additionally
$\mathbf{p} = \mathbf{0}$The quadrupole term dominates.

<details>
<summary>Example: Dipole potential of two charges</summary>

A charge $+q$ at $z = +d/2$ and $-q$ at $z = -d/2$.

The dipole moment:
$\mathbf{p} = q(d/2)\,\hat{\mathbf{z}} + (-q)(-d/2)\,\hat{\mathbf{z}} = qd\,\hat{\mathbf{z}}$.

On the $z$-axis ($\theta = 0$): $V_1 = \frac{qd}{4\pi\varepsilon_0 r^2}$.

In the equatorial plane ($\theta = \pi/2$): $V_1 = 0$.

The exact potential on the $z$-axis is:

$$V = \frac{q}{4\pi\varepsilon_0}\left(\frac{1}{r-d/2} - \frac{1}{r+d/2}\right) = \frac{q}{4\pi\varepsilon_0}\frac{d}{r^2 - d^2/4}$$

For $r \gg d$: this reduces to $V_1 = \frac{qd}{4\pi\varepsilon_0 r^2}$Confirming the Dipole
approximation. $\blacksquare$

</details>

### 2.10 Dielectrics

**Polarization.** When an external field $\mathbf{E}$ is applied to a dielectric, the material
Develops a **polarization** $\mathbf{P}$The dipole moment per unit volume. This produces **bound
charges**:

$$\rho_b = -\nabla \cdot \mathbf{P}, \quad \sigma_b = \mathbf{P} \cdot \hat{\mathbf{n}}$$

**The displacement field** $\mathbf{D}$ is defined as:

$$\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P}$$

Gauss's law in terms of $\mathbf{D}$:

$$\nabla \cdot \mathbf{D} = \rho_f$$

Where $\rho_f$ is the free charge density. This form is useful because $\mathbf{D}$ depends Only on
free charges, not bound charges.

**Linear dielectrics.** For an isotropic linear dielectric:

$$\mathbf{P} = \varepsilon_0 \chi_e \mathbf{E}, \quad \mathbf{D} = \varepsilon \mathbf{E}$$

Where $\chi_e$ is the electric susceptibility and $\varepsilon = \varepsilon_0(1 + \chi_e)$ is the
Permittivity. The **relative permittivity** (dielectric constant) is
$\varepsilon_r = \varepsilon/\varepsilon_0 = 1 + \chi_e$.

**Boundary conditions at dielectric interfaces** (no free charges):

$$D_{1n} = D_{2n} \implies \varepsilon_1 E_{1n} = \varepsilon_2 E_{2n}$$

$$E_{1t} = E_{2t}$$

The tangential component of $\mathbf{E}$ is continuous, but the normal component changes. The angles
of the field with respect to the normal satisfy
$\varepsilon_1 \tan\theta_2 = \varepsilon_2 \tan\theta_1$.

<details>
<summary>Example: Dielectric slab in a uniform field</summary>

A dielectric slab of permittivity $\varepsilon$ and thickness $d$ is placed in a uniform External
field $\mathbf{E}_0$ perpendicular to its faces.

Outside the slab: $\mathbf{E} = \mathbf{E}_0$.

Inside the slab: by continuity of $D_n$:

$$D_{\mathrm{in} = D_{\mathrm{out} = \varepsilon_0 E_0}}$$

$$E_{\mathrm{in} = \frac{D_{\mathrm{in}}{\varepsilon} = \frac{\varepsilon_0}{\varepsilon} E_0 = \frac{E_0}{\varepsilon_r}}}$$

The polarization:
$P = \varepsilon_0 \chi_e E_{\mathrm{in} = \varepsilon_0 (\varepsilon_r - 1) \frac{E_0}{\varepsilon_r}}$.

The bound surface charge density on each face:

$$\sigma_b = \pm P = \pm \varepsilon_0 \left(1 - \frac{1}{\varepsilon_r}\right) E_0$$

The bound charges produce a field opposing $\mathbf{E}_0$Reducing the net field inside the
Dielectric. $\blacksquare$

</details>

