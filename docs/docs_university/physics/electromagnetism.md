---
title: Electromagnetism
description:
  University-level notes on Electromagnetism: 1. Maxwell's Equations; 1.1 The
  Four Equations; 1.2 Derivation from Integral to Differential Form.
date: 2026-04-23T00:00:00.000Z
tags:
  - Physics
  - University
categories:
  - Physics
slug: electromagnetism
---

## 1. Maxwell's Equations

### 1.1 The Four Equations

Maxwell's equations are the foundation of classical electromagnetism. In SI units:

**Integral Form:**

$$\oint_S \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\mathrm{enc}}}{\varepsilon_0} \quad \mathrm{(Gauss's\ Law)}$$

$$\oint_S \mathbf{B} \cdot d\mathbf{A} = 0 \quad \mathrm{(Gauss's\ Law\ for\ Magnetism)}$$

$$\oint_C \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt} \quad \mathrm{(Faraday's\ Law)}$$

$$\oint_C \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\mathrm{enc}} + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} \quad \mathrm{(Ampere{-}Maxwell\ Law)}$$

**Differential Form:**

$$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} \quad \mathrm{(Gauss's\ Law)}$$

$$\nabla \cdot \mathbf{B} = 0 \quad \mathrm{(Gauss's\ Law\ for\ Magnetism)}$$

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \quad \mathrm{(Faraday's\ Law)}$$

$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \quad \mathrm{(Ampere{-}Maxwell\ Law)}$$

where $\rho$ is the charge density, $\mathbf{J}$ is the current density, $\varepsilon_0$ is the permittivity
of free space, and $\mu_0$ is the permeability of free space.

### 1.2 Derivation from Integral to Differential Form

**Gauss's Law.** Apply the divergence theorem to the integral form:

$$\oint_S \mathbf{E} \cdot d\mathbf{A} = \int_V (\nabla \cdot \mathbf{E})\, dV = \frac{1}{\varepsilon_0}\int_V \rho\, dV$$

Since this holds for any volume $V$: $\nabla \cdot \mathbf{E} = \rho / \varepsilon_0$.

**Faraday's Law.** Apply Stokes' theorem:

$$\oint_C \mathbf{E} \cdot d\mathbf{l} = \int_S (\nabla \times \mathbf{E}) \cdot d\mathbf{A} = -\int_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{A}$$

Since this holds for any surface $S$: $\nabla \times \mathbf{E} = -\partial \mathbf{B}/\partial t$.

**Gauss's Law for Magnetism.** By the divergence theorem:

$$\oint_S \mathbf{B} \cdot d\mathbf{A} = \int_V (\nabla \cdot \mathbf{B})\, dV = 0$$

Since $V$ is arbitrary: $\nabla \cdot \mathbf{B} = 0$. This expresses the absence of magnetic monopoles.

**Ampere-Maxwell Law.** Apply Stokes' theorem:

$$\oint_C \mathbf{B} \cdot d\mathbf{l} = \int_S (\nabla \times \mathbf{B}) \cdot d\mathbf{A} = \mu_0 \int_S \mathbf{J} \cdot d\mathbf{A} + \mu_0 \varepsilon_0 \frac{d}{dt}\int_S \mathbf{E} \cdot d\mathbf{A}$$

Since $S$ is arbitrary: $\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0\, \partial \mathbf{E}/\partial t$.

### 1.3 Continuity Equation

Taking the divergence of the Ampere-Maxwell law:

$$\nabla \cdot (\nabla \times \mathbf{B}) = 0 = \mu_0 \nabla \cdot \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial}{\partial t}(\nabla \cdot \mathbf{E})$$

Using Gauss's law: $\nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0$.

This is the **continuity equation**, expressing conservation of charge.

### 1.4 Boundary Conditions at Interfaces

At an interface between two linear media (labelled 1 and 2) with surface normal $\hat{\mathbf{n}}$
pointing from 2 into 1, Maxwell's equations impose four boundary conditions.

**Normal component of $\mathbf{D}$.** Apply Gauss's law for $\mathbf{D}$ to a thin pillbox
straddling the interface:

$$\oint \mathbf{D} \cdot d\mathbf{A} = \sigma_f A \implies D_{1n} - D_{2n} = \sigma_f$$

**Tangential component of $\mathbf{E}$.** Apply Faraday's law to a rectangular loop
perpendicular to the interface. As the loop height $\Delta h \to 0$, the flux through the
loop vanishes:

$$\oint \mathbf{E} \cdot d\mathbf{l} = 0 \implies E_{1t} = E_{2t}$$

In vector form: $\hat{\mathbf{n}} \times (\mathbf{E}_1 - \mathbf{E}_2) = \mathbf{0}$.

**Normal component of $\mathbf{B}$.** Apply Gauss's law for $\mathbf{B}$ to a pillbox:

$$B_{1n} = B_{2n}$$

**Tangential component of $\mathbf{H}$.** Apply Ampere's law for $\mathbf{H}$ to a loop
perpendicular to the interface:

$$\hat{\mathbf{n}} \times (\mathbf{H}_1 - \mathbf{H}_2) = \mathbf{K}_f$$

where $\mathbf{K}_f$ is the free surface current density.

**Summary** (no free charges or currents, $\sigma_f = 0$, $\mathbf{K}_f = \mathbf{0}$):

| Field | Normal component | Tangential component |
|-------|-----------------|---------------------|
| $\mathbf{E}$ | $\varepsilon_1 E_{1n} = \varepsilon_2 E_{2n}$ | $E_{1t} = E_{2t}$ |
| $\mathbf{D}$ | $D_{1n} = D_{2n}$ | $D_{1t}/\varepsilon_1 = D_{2t}/\varepsilon_2$ |
| $\mathbf{B}$ | $\mu_1 B_{1n} = \mu_2 B_{2n}$ | $B_{1t}/\mu_1 = B_{2t}/\mu_2$ |
| $\mathbf{H}$ | $\mu_2 H_{1n} = \mu_1 H_{2n}$ | $H_{1t} = H_{2t}$ |

### 1.5 Worked Example: Deriving the Electromagnetic Wave Equation

**Problem.** Starting from Maxwell's equations in free space ($\rho = 0$, $\mathbf{J} = \mathbf{0}$),
derive the wave equations for $\mathbf{E}$ and $\mathbf{B}$, and show that the wave speed is
$c = 1/\sqrt{\mu_0 \varepsilon_0}$.

<details>
<summary>Solution</summary>

In free space, Maxwell's equations reduce to:

$$\nabla \cdot \mathbf{E} = 0, \quad \nabla \cdot \mathbf{B} = 0$$

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad \nabla \times \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$

Take the curl of Faraday's law:

$$\nabla \times (\nabla \times \mathbf{E}) = -\frac{\partial}{\partial t}(\nabla \times \mathbf{B}) = -\mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

Apply the vector identity $\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$.
Since $\nabla \cdot \mathbf{E} = 0$:

$$-\nabla^2 \mathbf{E} = -\mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

$$\boxed{\nabla^2 \mathbf{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}}$$

An identical calculation, taking the curl of the Ampere-Maxwell law, yields:

$$\boxed{\nabla^2 \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2}}$$

Comparing with the standard wave equation $\nabla^2 \mathbf{F} = \frac{1}{v^2}\frac{\partial^2 \mathbf{F}}{\partial t^2}$,
the wave speed is:

$$c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} \approx 2.998 \times 10^8\ \mathrm{m/s}$$

$\blacksquare$

</details>

## 2. Electrostatics

### 2.1 Coulomb's Law and the Electric Field

**Coulomb's Law:** The force between two point charges $q_1$ and $q_2$ separated by distance $r$:

$$\mathbf{F} = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2} \hat{\mathbf{r}}$$

The **electric field** due to a point charge $q$ at position $\mathbf{r}$:

$$\mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \frac{q}{|\mathbf{r}|^2} \hat{\mathbf{r}}$$

**Superposition Principle:** The field due to a collection of charges is the vector sum of individual
fields.

### 2.2 Gauss's Law Applications

**Example: Infinite plane of charge** with surface charge density $\sigma$.

Choose a Gaussian "pillbox" of area $A$ straddling the plane. By symmetry, $\mathbf{E}$ is
perpendicular to the plane. Gauss's law:

$$2EA = \frac{\sigma A}{\varepsilon_0} \implies E = \frac{\sigma}{2\varepsilon_0}$$

The field is uniform and perpendicular to the plane, pointing away from positive charge.

**Example: Uniformly charged sphere** of radius $R$ with total charge $Q$.

For $r \gt{} R$: $\mathbf{E} = \frac{Q}{4\pi\varepsilon_0 r^2} \hat{\mathbf{r}}$ (identical to a point charge).

For $r \lt{} R$: $E = \frac{Qr}{4\pi\varepsilon_0 R^3}$ (linear in $r$).

### 2.3 Electric Potential

The **electric potential** is defined by $\mathbf{E} = -\nabla V$ (for electrostatics, where
$\nabla \times \mathbf{E} = \mathbf{0}$).

For a point charge: $V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \frac{q}{r}$ (choosing $V(\infty) = 0$).

**Theorem 2.1.** $\nabla \times \mathbf{E} = \mathbf{0}$ in electrostatics implies $\mathbf{E}$ is
conservative, so the line integral $\int_A^B \mathbf{E} \cdot d\mathbf{l} = V(A) - V(B)$ is
path-independent.

### 2.4 Poisson's and Laplace's Equations

Substituting $\mathbf{E} = -\nabla V$ into Gauss's law:

$$\nabla \cdot (-\nabla V) = -\nabla^2 V = \frac{\rho}{\varepsilon_0}$$

This is **Poisson's equation**:

$$\nabla^2 V = -\frac{\rho}{\varepsilon_0}$$

In regions with $\rho = 0$, this reduces to **Laplace's equation**:

$$\nabla^2 V = 0$$

**Theorem 2.2 (Uniqueness --- statement).** The solution to Laplace's (or Poisson's) equation in a
region is unique given either Dirichlet boundary conditions ($V$ specified on the boundary) or
Neumann boundary conditions ($\partial V / \partial n$ specified on the boundary).

### 2.5 Worked Example

**Problem.** Two infinite conducting plates at $x = 0$ and $x = d$ are held at potentials $V = 0$ and
$V = V_0$ respectively. Find the potential and field between them.

*Solution.* Between the plates, $\rho = 0$, so $\nabla^2 V = 0$. By symmetry, $V$ depends only on $x$:

$$\frac{d^2V}{dx^2} = 0 \implies V(x) = Ax + B$$

Boundary conditions: $V(0) = 0 \implies B = 0$. $V(d) = V_0 \implies A = V_0/d$.

$$V(x) = \frac{V_0}{d} x, \quad \mathbf{E} = -\frac{dV}{dx}\hat{\mathbf{x}} = -\frac{V_0}{d}\hat{\mathbf{x}}$$

$\blacksquare$

### 2.6 Gauss's Law: Cylindrical Symmetry

**Example: Infinite line charge** with linear charge density $\lambda$.

By cylindrical symmetry, $\mathbf{E}$ points radially outward and depends only on $r$.
Choose a Gaussian cylinder of radius $r$ and length $L$:

$$\oint \mathbf{E} \cdot d\mathbf{A} = E \cdot 2\pi r L = \frac{\lambda L}{\varepsilon_0}$$

$$\mathbf{E} = \frac{\lambda}{2\pi\varepsilon_0 r}\,\hat{\mathbf{r}}$$

**Example: Coaxial cable.** An inner conductor of radius $a$ carries linear charge density
$+\lambda$, and an outer conducting shell of radius $b$ carries $-\lambda$.

For $r \lt{} a$: $\mathbf{E} = \mathbf{0}$ (conductor interior).

For $a \lt{} r \lt{} b$: $\mathbf{E} = \frac{\lambda}{2\pi\varepsilon_0 r}\,\hat{\mathbf{r}}$.

For $r \gt{} b$: $\mathbf{E} = \mathbf{0}$ (total enclosed charge is zero).

The potential difference between the conductors:

$$V(a) - V(b) = -\int_a^b \mathbf{E} \cdot d\mathbf{l} = \frac{\lambda}{2\pi\varepsilon_0}\ln\!\left(\frac{b}{a}\right)$$

### 2.7 The Uniqueness Theorem

**Theorem 2.3 (Uniqueness for Dirichlet conditions).** The solution to Poisson's equation
$\nabla^2 V = -\rho/\varepsilon_0$ in a volume $\mathcal{V}$ is unique if $V$ is specified on the
boundary $\mathcal{S}$.

*Proof.* Suppose $V_1$ and $V_2$ both satisfy Poisson's equation with the same boundary
conditions. Define $U = V_1 - V_2$. Then $\nabla^2 U = 0$ in $\mathcal{V}$ and $U = 0$ on
$\mathcal{S}$.

Apply **Green's first identity** with $\phi = \psi = U$:

$$\int_{\mathcal{V}} \left(U\,\nabla^2 U + \lvert\nabla U\rvert^2\right) dV = \oint_{\mathcal{S}} U\,\frac{\partial U}{\partial n}\, dA$$

Since $\nabla^2 U = 0$ and $U = 0$ on $\mathcal{S}$:

$$\int_{\mathcal{V}} \lvert\nabla U\rvert^2\, dV = 0$$

Since the integrand is non-negative, $\nabla U = \mathbf{0}$ everywhere in $\mathcal{V}$, so $U$ is
constant. With $U = 0$ on the boundary, $U = 0$ throughout $\mathcal{V}$. Hence $V_1 = V_2$.
$\blacksquare$

**Theorem 2.4 (Uniqueness for Neumann conditions).** The solution is unique up to an additive
constant when $\partial V/\partial n$ is specified on $\mathcal{S}$.

*Proof.* The same argument applies, but now $\partial U/\partial n = 0$ on $\mathcal{S}$ and the
right-hand side of Green's identity vanishes for a different reason. We again conclude
$\nabla U = \mathbf{0}$, so $U$ is constant. $\blacksquare$

### 2.8 Method of Images

The method of images replaces a problem with conductors by an equivalent problem with charges only,
exploiting the uniqueness theorem.

**Point charge above a grounded plane.** A charge $q$ is placed at distance $d$ above an
infinite grounded conducting plane ($V = 0$ at $z = 0$).

Replace the plane by an image charge $q' = -q$ at $z = -d$. The potential for $z \gt{} 0$ is:

$$V(x,y,z) = \frac{1}{4\pi\varepsilon_0}\left[\frac{q}{\sqrt{x^2 + y^2 + (z-d)^2}} - \frac{q}{\sqrt{x^2 + y^2 + (z+d)^2}}\right]$$

This satisfies $\nabla^2 V = 0$ for $z \gt{} 0$ (away from the charge), $V = 0$ at $z = 0$, and
$V \to 0$ as $r \to \infty$. By the uniqueness theorem, this is the correct solution.

The force on $q$ is the force due to the image charge:

$$\mathbf{F} = -\frac{q^2}{4\pi\varepsilon_0 (2d)^2}\,\hat{\mathbf{z}}$$

The induced surface charge density on the plane:

$$\sigma(x,y) = -\varepsilon_0 \left.\frac{\partial V}{\partial z}\right|_{z=0} = -\frac{qd}{2\pi(x^2+y^2+d^2)^{3/2}}$$

**Example: Point charge inside a grounded sphere.** A charge $q$ is at distance $a$ from the centre
of a grounded conducting sphere of radius $R$ ($a \lt{} R$).

The image charge is $q' = -qR/a$ located at distance $b = R^2/a$ from the centre, along the same
radial line.

<details>
<summary>Solution: Verifying the image charge</summary>

We must verify that $V = 0$ on the sphere. Place $q$ at distance $a$ from the origin along the
$z$-axis and $q'$ at distance $b$ along the $z$-axis. At any point on the sphere at distance $R$
from the origin, the distances to $q$ and $q'$ are $d_1$ and $d_2$ where:

$$d_1^2 = R^2 + a^2 - 2Ra\cos\theta, \quad d_2^2 = R^2 + b^2 - 2Rb\cos\theta$$

For $V = 0$ on the sphere, we need $q/d_1 = -q'/d_2$ for all $\theta$. This requires the ratio
$d_2/d_1$ to be constant. Setting $b = R^2/a$:

$$\frac{d_2^2}{d_1^2} = \frac{R^2 + R^4/a^2 - 2R^3\cos\theta/a}{R^2 + a^2 - 2Ra\cos\theta} = \frac{R^2}{a^2}$$

The ratio is indeed constant. Choosing $q' = -qR/a$ gives $q/d_1 + q'/d_2 = 0$ on the sphere.
$\blacksquare$

</details>

### 2.9 Multipole Expansion

For a localized charge distribution $\rho(\mathbf{r}')$, the potential at large distance
$r = \lvert\mathbf{r}\rvert \gg r' = \lvert\mathbf{r}'\rvert$ is expanded using
$\frac{1}{\lvert\mathbf{r}-\mathbf{r}'\rvert} = \sum_{n=0}^{\infty} \frac{r'^n}{r^{n+1}} P_n(\cos\alpha)$,
where $\alpha$ is the angle between $\mathbf{r}$ and $\mathbf{r}'$:

$$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\sum_{n=0}^{\infty}\frac{1}{r^{n+1}}\int r'^n P_n(\cos\alpha)\,\rho(\mathbf{r}')\,d^3\mathbf{r}'$$

**Monopole term** ($n = 0$):

$$V_0 = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r}, \quad Q = \int \rho(\mathbf{r}')\,d^3\mathbf{r}'$$

This is the potential of a point charge at the origin.

**Dipole term** ($n = 1$):

$$V_1 = \frac{1}{4\pi\varepsilon_0}\frac{\mathbf{p} \cdot \hat{\mathbf{r}}}{r^2}, \quad \mathbf{p} = \int \mathbf{r}'\,\rho(\mathbf{r}')\,d^3\mathbf{r}'$$

where $\mathbf{p}$ is the **electric dipole moment**.

**Quadrupole term** ($n = 2$): Depends on the quadrupole moment tensor:

$$Q_{ij} = \int (3r_i' r_j' - r'^2 \delta_{ij})\,\rho(\mathbf{r}')\,d^3\mathbf{r}'$$

$$V_2 = \frac{1}{4\pi\varepsilon_0}\frac{1}{2r^3}\sum_{i,j} Q_{ij}\,\hat{r}_i\,\hat{r}_j$$

For a neutral charge distribution ($Q = 0$), the dipole term dominates. If additionally
$\mathbf{p} = \mathbf{0}$, the quadrupole term dominates.

<details>
<summary>Example: Dipole potential of two charges</summary>

A charge $+q$ at $z = +d/2$ and $-q$ at $z = -d/2$.

The dipole moment: $\mathbf{p} = q(d/2)\,\hat{\mathbf{z}} + (-q)(-d/2)\,\hat{\mathbf{z}} = qd\,\hat{\mathbf{z}}$.

On the $z$-axis ($\theta = 0$): $V_1 = \frac{qd}{4\pi\varepsilon_0 r^2}$.

In the equatorial plane ($\theta = \pi/2$): $V_1 = 0$.

The exact potential on the $z$-axis is:

$$V = \frac{q}{4\pi\varepsilon_0}\left(\frac{1}{r-d/2} - \frac{1}{r+d/2}\right) = \frac{q}{4\pi\varepsilon_0}\frac{d}{r^2 - d^2/4}$$

For $r \gg d$: this reduces to $V_1 = \frac{qd}{4\pi\varepsilon_0 r^2}$, confirming the
dipole approximation. $\blacksquare$

</details>

### 2.10 Dielectrics

**Polarization.** When an external field $\mathbf{E}$ is applied to a dielectric, the material
develops a **polarization** $\mathbf{P}$, the dipole moment per unit volume. This produces
**bound charges**:

$$\rho_b = -\nabla \cdot \mathbf{P}, \quad \sigma_b = \mathbf{P} \cdot \hat{\mathbf{n}}$$

**The displacement field** $\mathbf{D}$ is defined as:

$$\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P}$$

Gauss's law in terms of $\mathbf{D}$:

$$\nabla \cdot \mathbf{D} = \rho_f$$

where $\rho_f$ is the free charge density. This form is useful because $\mathbf{D}$ depends
only on free charges, not bound charges.

**Linear dielectrics.** For an isotropic linear dielectric:

$$\mathbf{P} = \varepsilon_0 \chi_e \mathbf{E}, \quad \mathbf{D} = \varepsilon \mathbf{E}$$

where $\chi_e$ is the electric susceptibility and $\varepsilon = \varepsilon_0(1 + \chi_e)$ is the
permittivity. The **relative permittivity** (dielectric constant) is $\varepsilon_r = \varepsilon/\varepsilon_0 = 1 + \chi_e$.

**Boundary conditions at dielectric interfaces** (no free charges):

$$D_{1n} = D_{2n} \implies \varepsilon_1 E_{1n} = \varepsilon_2 E_{2n}$$

$$E_{1t} = E_{2t}$$

The tangential component of $\mathbf{E}$ is continuous, but the normal component changes.
The angles of the field with respect to the normal satisfy $\varepsilon_1 \tan\theta_2 = \varepsilon_2 \tan\theta_1$.

<details>
<summary>Example: Dielectric slab in a uniform field</summary>

A dielectric slab of permittivity $\varepsilon$ and thickness $d$ is placed in a uniform
external field $\mathbf{E}_0$ perpendicular to its faces.

Outside the slab: $\mathbf{E} = \mathbf{E}_0$.

Inside the slab: by continuity of $D_n$:

$$D_{\mathrm{in}} = D_{\mathrm{out}} = \varepsilon_0 E_0$$

$$E_{\mathrm{in}} = \frac{D_{\mathrm{in}}}{\varepsilon} = \frac{\varepsilon_0}{\varepsilon} E_0 = \frac{E_0}{\varepsilon_r}$$

The polarization: $P = \varepsilon_0 \chi_e E_{\mathrm{in}} = \varepsilon_0 (\varepsilon_r - 1) \frac{E_0}{\varepsilon_r}$.

The bound surface charge density on each face:

$$\sigma_b = \pm P = \pm \varepsilon_0 \left(1 - \frac{1}{\varepsilon_r}\right) E_0$$

The bound charges produce a field opposing $\mathbf{E}_0$, reducing the net field inside the
dielectric. $\blacksquare$

</details>

## 3. Magnetostatics

### 3.1 The Biot-Savart Law

The magnetic field due to a steady current $I$ in a wire element $d\mathbf{l}$:

$$d\mathbf{B} = \frac{\mu_0 I}{4\pi} \frac{d\mathbf{l} \times \hat{\mathbf{r}}}{r^2}$$

For a complete circuit:

$$\mathbf{B}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \oint \frac{d\mathbf{l} \times \hat{\mathbf{r}}'}{|\mathbf{r} - \mathbf{r}'|^2}$$

### 3.2 Ampere's Law

For steady currents ($\partial \mathbf{E} / \partial t = 0$):

$$\oint_C \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\mathrm{enc}}$$

**Example: Infinite straight wire** carrying current $I$.

By cylindrical symmetry, $B$ is constant on circles centred on the wire. Choose an Amperian loop of
radius $r$:

$$\oint \mathbf{B} \cdot d\mathbf{l} = B \cdot 2\pi r = \mu_0 I \implies B = \frac{\mu_0 I}{2\pi r}$$

**Example: Solenoid.** For a long solenoid with $n$ turns per unit length carrying current $I$:

$$B = \mu_0 n I \quad \mathrm{(inside)}, \quad B = 0 \quad \mathrm{(outside)}$$

### 3.3 Magnetic Vector Potential

Since $\nabla \cdot \mathbf{B} = 0$, we can write $\mathbf{B} = \nabla \times \mathbf{A}$, where
$\mathbf{A}$ is the **magnetic vector potential**.

In the Coulomb gauge ($\nabla \cdot \mathbf{A} = 0$), the vector potential satisfies

$$\nabla^2 \mathbf{A} = -\mu_0 \mathbf{J}$$

This is Poisson's equation for each component of $\mathbf{A}$.

For a current loop, the solution is:

$$\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, d^3\mathbf{r}'$$

### 3.4 Additional Ampere's Law Examples

**Example: Toroid.** A toroid with $N$ turns carrying current $I$ has inner radius $a$ and outer
radius $b$.

By symmetry, $\mathbf{B}$ is tangential and constant on circular Amperian loops inside the
toroid. For a loop of radius $r$ ($a \lt{} r \lt{} b$):

$$B \cdot 2\pi r = \mu_0 N I \implies B = \frac{\mu_0 N I}{2\pi r}$$

For $r \lt{} a$ or $r \gt{} b$: $B = 0$ (no enclosed current).

Unlike a solenoid, the field inside a toroid is *not* uniform --- it varies as $1/r$.

**Example: Infinite current sheet.** A sheet in the $xy$-plane carries surface current density
$\mathbf{K} = K\,\hat{\mathbf{x}}$.

By symmetry, $\mathbf{B}$ is parallel to $\pm\hat{\mathbf{y}}$ and depends only on $z$.
Choose a rectangular Amperian loop straddling the sheet with sides parallel to $\hat{\mathbf{y}}$:

$$B \cdot 2L = \mu_0 K L \implies B = \frac{\mu_0 K}{2}$$

The field is uniform on each side, pointing in opposite directions:

$$\mathbf{B} = \begin{cases} +\frac{\mu_0 K}{2}\,\hat{\mathbf{y}} & z \gt{} 0 \\[4pt] -\frac{\mu_0 K}{2}\,\hat{\mathbf{y}} & z \lt{} 0 \end{cases}$$

### 3.5 Magnetic Dipole Moment

A current loop carrying current $I$ enclosing area $\mathbf{a}$ has **magnetic dipole moment**:

$$\mathbf{m} = I\mathbf{a}$$

For a planar loop of $N$ turns: $\mathbf{m} = NIA\,\hat{\mathbf{n}}$, where $A$ is the area
and $\hat{\mathbf{n}}$ is the unit normal given by the right-hand rule.

**Field of a magnetic dipole** (at position $\mathbf{r}$ from the dipole):

$$\mathbf{B}_{\mathrm{dip}}(\mathbf{r}) = \frac{\mu_0}{4\pi}\left[\frac{3(\mathbf{m} \cdot \hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}}{r^3}\right]$$

This has the same angular structure as the electric dipole field.

**Torque on a dipole** in a uniform field:

$$\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}$$

**Energy of a dipole** in a field:

$$U = -\mathbf{m} \cdot \mathbf{B}$$

**Force on a dipole** in a non-uniform field:

$$\mathbf{F} = \nabla(\mathbf{m} \cdot \mathbf{B})$$

<details>
<summary>Example: Field on the axis of a circular loop</summary>

A circular loop of radius $R$ carries current $I$. On the axis at distance $z$ from the centre,
every element $d\mathbf{l}$ is perpendicular to $\hat{\mathbf{r}}$, so:

$$d\mathbf{B} = \frac{\mu_0 I}{4\pi}\frac{dl}{R^2 + z^2}$$

The component perpendicular to the axis cancels by symmetry. The axial component is:

$$B_z = \oint dB\,\sin\alpha = \frac{\mu_0 I}{4\pi(R^2+z^2)}\frac{R}{\sqrt{R^2+z^2}}\oint dl = \frac{\mu_0 I R^2}{2(R^2+z^2)^{3/2}}$$

For $z \gg R$: $B_z \approx \frac{\mu_0 I R^2}{2z^3} = \frac{\mu_0}{4\pi}\frac{2\mathbf{m}}{z^3}$,
which matches the dipole formula with $\mathbf{m} = I\pi R^2\,\hat{\mathbf{z}}$. $\blacksquare$

</details>

### 3.6 Vector Potential: Detailed Derivation

Starting from the Biot-Savart law and the identity
$\frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r}-\mathbf{r}'|^3} = -\nabla\frac{1}{|\mathbf{r}-\mathbf{r}'|}$:

$$\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi}\int \mathbf{J}(\mathbf{r}') \times \frac{(\mathbf{r}-\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|^3}\,d^3\mathbf{r}' = -\frac{\mu_0}{4\pi}\int \mathbf{J}(\mathbf{r}') \times \nabla\frac{1}{|\mathbf{r}-\mathbf{r}'|}\,d^3\mathbf{r}'$$

Using the product rule $\mathbf{J} \times (\nabla f) = \nabla \times (f\mathbf{J}) - f(\nabla \times \mathbf{J})$
and noting that $\nabla \times \mathbf{J}(\mathbf{r}') = 0$ (since $\mathbf{J}$ depends on $\mathbf{r}'$, not
$\mathbf{r}$):

$$\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi}\nabla \times \int \frac{\mathbf{J}(\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|}\,d^3\mathbf{r}'$$

Comparing with $\mathbf{B} = \nabla \times \mathbf{A}$:

$$\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi}\int \frac{\mathbf{J}(\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|}\,d^3\mathbf{r}'$$

This is the general solution for the vector potential in the Coulomb gauge. For a line current:

$$\mathbf{A}(\mathbf{r}) = \frac{\mu_0 I}{4\pi}\oint \frac{d\mathbf{l}'}{|\mathbf{r}-\mathbf{r}'|}$$

<details>
<summary>Example: Vector potential of an infinite wire</summary>

An infinite straight wire along the $z$-axis carries current $I$. In cylindrical coordinates
$(s, \phi, z)$, the vector potential can only depend on $s$ by symmetry, and must point along
$\hat{\mathbf{z}}$.

$\mathbf{A}(s) = \frac{\mu_0 I}{4\pi}\int_{-\infty}^{\infty}\frac{dz'}{\sqrt{s^2 + z'^2}}\,\hat{\mathbf{z}}$

This integral diverges logarithmically. Introduce a cutoff at $z' = \pm L$:

$\mathbf{A}(s) \approx \frac{\mu_0 I}{2\pi}\ln\!\left(\frac{2L}{s}\right)\hat{\mathbf{z}} + \mathrm{const}$

Since $\mathbf{A}$ is defined only up to a gauge transformation, we write:

$$\mathbf{A}(s) = -\frac{\mu_0 I}{2\pi}\ln\!\left(\frac{s}{s_0}\right)\hat{\mathbf{z}}$$

Verify: $\mathbf{B} = \nabla \times \mathbf{A} = -\frac{\partial A_z}{\partial s}\,\hat{\boldsymbol{\phi}} = \frac{\mu_0 I}{2\pi s}\,\hat{\boldsymbol{\phi}}$.
This matches the Ampere's law result. $\blacksquare$

</details>

### 3.7 Magnetization and the H Field

**Magnetization.** The **magnetization** $\mathbf{M}$ is the magnetic dipole moment per unit volume.
It produces **bound currents**:

$$\mathbf{J}_b = \nabla \times \mathbf{M}, \quad \mathbf{K}_b = \mathbf{M} \times \hat{\mathbf{n}}$$

**The H field** (magnetic field intensity) is defined as:

$$\mathbf{H} = \frac{1}{\mu_0}\mathbf{B} - \mathbf{M}$$

Ampere's law for $\mathbf{H}$:

$$\nabla \times \mathbf{H} = \mathbf{J}_f$$

$$\oint \mathbf{H} \cdot d\mathbf{l} = I_{f,\mathrm{enc}}$$

This is simpler than Ampere's law for $\mathbf{B}$ because only *free* currents appear.

**Linear magnetic materials.** For isotropic linear materials:

$$\mathbf{M} = \chi_m \mathbf{H}, \quad \mathbf{B} = \mu \mathbf{H}$$

where $\chi_m$ is the magnetic susceptibility and $\mu = \mu_0(1 + \chi_m)$ is the permeability.
The **relative permeability** is $\mu_r = 1 + \chi_m$.

### 3.8 Magnetic Materials

**Diamagnetic materials** ($\chi_m \lt{} 0$, $\lvert\chi_m\rvert \ll 1$): Weakly repelled by
magnetic fields. The induced magnetization opposes the applied field (Lenz's law at the
atomic level). Examples: bismuth, copper, water.

**Paramagnetic materials** ($\chi_m \gt{} 0$, $\chi_m \ll 1$): Weakly attracted by magnetic fields.
Atomic dipoles align partially with the applied field. Examples: aluminium, platinum, oxygen.

**Ferromagnetic materials** ($\chi_m \gg 1$): Strongly attracted by magnetic fields. Exhibit
**hysteresis**: the magnetization depends on the history of the applied field.

The **hysteresis loop** traces $\mathbf{B}$ vs $\mathbf{H}$ as the external field cycles. Key
features:

- **Remanence** $B_r$: the residual field when $H = 0$.
- **Coercivity** $H_c$: the field required to demagnetize the material.
- **Saturation**: the maximum magnetization achievable.

For soft ferromagnets (iron, nickel), $H_c$ is small and the hysteresis loop is narrow.
For hard ferromagnets (permanent magnets), $H_c$ is large.

:::caution Common Pitfall
The magnetic field $\mathbf{B}$ is the fundamental quantity; $\mathbf{H}$ is an auxiliary field
convenient for problems with free currents. The names "magnetic field" and "magnetic field
intensity" vary across textbooks --- always check which symbol a given text associates with
which name. In this document, $\mathbf{B}$ is the magnetic field and $\mathbf{H}$ is the
auxiliary H field.
:::

## 4. Electrodynamics

### 4.1 Faraday's Law of Induction

A changing magnetic field induces an electric field:

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$

**Lenz's Law:** The induced EMF opposes the change in flux that produced it.

**Example.** A circular loop of radius $R$ in a uniform magnetic field
$\mathbf{B}(t) = B_0 \cos(\omega t)\,\hat{\mathbf{z}}$.

The flux: $\Phi_B = \pi R^2 B_0 \cos(\omega t)$.

The induced EMF: $\mathcal{E} = -\frac{d\Phi_B}{dt} = \pi R^2 B_0 \omega \sin(\omega t)$.

### 4.2 Displacement Current

Maxwell's key insight: Ampere's law $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$ is inconsistent with
the continuity equation. Adding the **displacement current** term $\mu_0 \varepsilon_0 \partial \mathbf{E}/\partial t$
resolves this:

$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$

### 4.3 Worked Example

**Problem.** A parallel-plate capacitor with circular plates of radius $R$ is being charged by a
current $I$. Find the magnetic field between the plates at distance $r$ from the axis.

*Solution.* Between the plates, $\mathbf{J} = 0$, but there is a changing electric field. The
displacement current density is $J_d = \varepsilon_0 \frac{\partial E}{\partial t}$.

$E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\pi R^2 \varepsilon_0}$, so $\frac{\partial E}{\partial t} = \frac{I}{\pi R^2 \varepsilon_0}$.

By symmetry, use an Amperian loop of radius $r \lt{} R$:

$$\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 \varepsilon_0 \frac{\partial}{\partial t}\int \mathbf{E} \cdot d\mathbf{A}$$

$$B \cdot 2\pi r = \mu_0 \varepsilon_0 \cdot \frac{I}{\pi R^2 \varepsilon_0} \cdot \pi r^2 = \frac{\mu_0 I r^2}{R^2}$$

$$B = \frac{\mu_0 I r}{2\pi R^2}$$

$\blacksquare$

### 4.4 Motional EMF

When a conductor moves through a magnetic field, the Lorentz force on the charges produces an
EMF:

$$\mathcal{E} = \oint (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l}$$

This is consistent with the flux rule $\mathcal{E} = -d\Phi_B/dt$ since changing the
circuit's geometry or position changes the flux.

<details>
<summary>Example: Rod sliding on rails</summary>

A conducting rod of length $L$ slides with velocity $v$ along two parallel rails connected by
a resistor $R$, in a uniform magnetic field $\mathbf{B} = B\,\hat{\mathbf{z}}$ perpendicular to
the rail plane.

The motional EMF:

$$\mathcal{E} = \int_0^L (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l} = vBL$$

The induced current: $I = \mathcal{E}/R = vBL/R$.

The magnetic force on the rod: $F = BIL = B^2L^2v/R$ (opposing the motion, by Lenz's law).

The power dissipated: $P = I^2R = v^2B^2L^2/R$, which equals the mechanical power $Fv$
supplied to the rod. $\blacksquare$

</details>

### 4.5 Derivation of Maxwell's Correction

**Problem with Ampere's original law.** The original Ampere's law was $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$.
Taking the divergence:

$$\nabla \cdot (\nabla \times \mathbf{B}) = 0 = \mu_0 \nabla \cdot \mathbf{J}$$

This requires $\nabla \cdot \mathbf{J} = 0$ at all times, which contradicts the continuity
equation $\nabla \cdot \mathbf{J} = -\partial\rho/\partial t$ whenever charge density changes.

**Resolution.** Use Gauss's law to rewrite the continuity equation:

$$\nabla \cdot \mathbf{J} = -\frac{\partial\rho}{\partial t} = -\frac{\partial}{\partial t}(\varepsilon_0 \nabla \cdot \mathbf{E}) = -\nabla \cdot \left(\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}\right)$$

$$\nabla \cdot \left(\mathbf{J} + \varepsilon_0\frac{\partial \mathbf{E}}{\partial t}\right) = 0$$

This suggests modifying Ampere's law to:

$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$

Now taking the divergence gives zero identically, consistent with charge conservation. The
term $\mu_0 \varepsilon_0\,\partial\mathbf{E}/\partial t$ is the **displacement current**.

**Physical interpretation.** The displacement current represents the time-varying electric field
that produces a magnetic field just as a real current does. It is essential inside capacitors,
where $\mathbf{J} = 0$ but $\partial\mathbf{E}/\partial t \neq 0$.

### 4.6 Electromagnetic Induction: Worked Examples

<details>
<summary>Example: Loop falling through a magnetic field</summary>

A rectangular loop of width $w$, height $\ell$, and resistance $R$ falls vertically under
gravity through a region of uniform magnetic field $\mathbf{B} = B\,\hat{\mathbf{x}}$ confined
to a horizontal strip of height $h$.

As the loop enters the field (top edge in, bottom edge out), the flux is
$\Phi_B = Bwx$ where $x$ is the distance the top edge has penetrated.

The induced EMF: $\mathcal{E} = -Bw\,dx/dt = -Bwv$.

The induced current: $I = Bwv/R$, flowing to oppose the change in flux (Lenz's law).

The braking force: $F = BwI = B^2w^2v/R$ (upward).

Terminal velocity: $mg = B^2w^2v_{\mathrm{term}}/R \implies v_{\mathrm{term}} = mgR/(B^2w^2)$.

While entirely inside the field, $\Phi_B$ is constant, so $\mathcal{E} = 0$ and the loop
falls freely. As it exits, the braking force reappears. $\blacksquare$

</details>

**Mutual inductance.** When circuit 1 produces flux $\Phi_{21}$ through circuit 2:

$$M = \frac{\Phi_{21}}{I_1}$$

The EMF induced in circuit 2 by a changing current in circuit 1:

$$\mathcal{E}_2 = -M\frac{dI_1}{dt}$$

**Self-inductance.** A circuit carrying current $I$ produces flux $\Phi$ through itself:

$$L = \frac{N\Phi}{I}$$

The back-EMF:

$$\mathcal{E} = -L\frac{dI}{dt}$$

**Energy stored** in an inductor:

$$U = \frac{1}{2}LI^2$$

**Example: Solenoid.** A long solenoid of length $\ell$ with $N$ turns, cross-sectional area $A$:

$$L = \frac{\mu_0 N^2 A}{\ell}$$

## 5. Electromagnetic Waves

### 5.1 The Wave Equation

In free space ($\rho = 0$, $\mathbf{J} = \mathbf{0}$), take the curl of Faraday's law:

$$\nabla \times (\nabla \times \mathbf{E}) = -\frac{\partial}{\partial t}(\nabla \times \mathbf{B}) = -\mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

Using the identity $\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$
and $\nabla \cdot \mathbf{E} = 0$:

$$\nabla^2 \mathbf{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

Similarly: $\nabla^2 \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2}$.

These are **wave equations** with wave speed $c = 1/\sqrt{\mu_0 \varepsilon_0} \approx 3 \times 10^8$ m/s.

### 5.2 Properties of EM Waves

**Theorem 5.1.** Electromagnetic waves in free space are:

1. **Transverse**: $\mathbf{E}$ and $\mathbf{B}$ are perpendicular to the direction of propagation.
2. **Mutually perpendicular**: $\mathbf{E} \perp \mathbf{B}$.
3. **In phase**: $E = cB$ at every point.
4. **Linearly polarised** (in general; other polarisations are superpositions).

**Energy.** The energy density of an EM wave is $u = \frac{1}{2}(\varepsilon_0 E^2 + B^2/\mu_0)$.

The **Poynting vector** $\mathbf{S} = \frac{1}{\mu_0}\mathbf{E} \times \mathbf{B}$ represents the energy
flux (power per unit area).

### 5.3 Worked Example

**Problem.** Show that $\mathbf{E} = E_0 \cos(kz - \omega t)\,\hat{\mathbf{x}}$ satisfies the wave
equation and find the associated $\mathbf{B}$ field.

*Solution.* $\nabla^2 \mathbf{E} = \frac{\partial^2 E_x}{\partial z^2}\hat{\mathbf{x}} = -k^2 E_0 \cos(kz - \omega t)\,\hat{\mathbf{x}}$.

$\frac{\partial^2 \mathbf{E}}{\partial t^2} = -\omega^2 E_0 \cos(kz - \omega t)\,\hat{\mathbf{x}}$.

The wave equation requires $k^2 = \mu_0 \varepsilon_0 \omega^2$, i.e., $\omega/k = c$.

From Faraday's law: $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$.

$(\nabla \times \mathbf{E})_y = -\frac{\partial E_x}{\partial z} = k E_0 \sin(kz - \omega t)$

$\frac{\partial B_y}{\partial t} = -k E_0 \sin(kz - \omega t) \implies B_y = \frac{k}{\omega} E_0 \cos(kz - \omega t) = \frac{E_0}{c}\cos(kz - \omega t)$

So $\mathbf{B} = \frac{E_0}{c}\cos(kz - \omega t)\,\hat{\mathbf{y}}$. $\blacksquare$

### 5.4 Poynting's Theorem and Energy Conservation

Poynting's theorem is the statement of energy conservation for electromagnetic fields.

**Derivation.** Start with the two Maxwell equations containing time derivatives:

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$

Compute $\mathbf{B} \cdot (\nabla \times \mathbf{E}) - \mathbf{E} \cdot (\nabla \times \mathbf{B})$:

$$\mathbf{B} \cdot (\nabla \times \mathbf{E}) = -\mathbf{B} \cdot \frac{\partial \mathbf{B}}{\partial t} = -\frac{\partial}{\partial t}\left(\frac{B^2}{2}\right)$$

$$-\mathbf{E} \cdot (\nabla \times \mathbf{B}) = -\mu_0 \mathbf{E} \cdot \mathbf{J} - \mu_0 \varepsilon_0 \mathbf{E} \cdot \frac{\partial \mathbf{E}}{\partial t} = -\mu_0 \mathbf{E} \cdot \mathbf{J} - \frac{\partial}{\partial t}\left(\frac{\varepsilon_0 E^2}{2}\right)$$

Using the vector identity $\nabla \cdot (\mathbf{E} \times \mathbf{B}) = \mathbf{B} \cdot (\nabla \times \mathbf{E}) - \mathbf{E} \cdot (\nabla \times \mathbf{B})$:

$$\nabla \cdot (\mathbf{E} \times \mathbf{B}) = -\mu_0 \mathbf{J} \cdot \mathbf{E} - \mu_0 \varepsilon_0 \frac{\partial}{\partial t}\left(\frac{E^2}{2}\right) - \frac{\partial}{\partial t}\left(\frac{B^2}{2}\right)$$

Dividing by $\mu_0$ and rearranging:

$$\boxed{-\nabla \cdot \mathbf{S} = \mathbf{J} \cdot \mathbf{E} + \frac{\partial u}{\partial t}}$$

where $\mathbf{S} = \frac{1}{\mu_0}\mathbf{E} \times \mathbf{B}$ is the Poynting vector and
$u = \frac{1}{2}\left(\varepsilon_0 E^2 + \frac{B^2}{\mu_0}\right)$ is the energy density.

**Interpretation:** The rate of energy leaving a volume equals the work done on charges plus
the rate of increase of field energy. In integral form:

$$-\oint_S \mathbf{S} \cdot d\mathbf{A} = \frac{d}{dt}\int_V u\,dV + \int_V \mathbf{J} \cdot \mathbf{E}\,dV$$

### 5.5 EM Wave Propagation: Worked Examples

**Intensity.** For a plane wave, the time-averaged Poynting vector is:

$$\langle\mathbf{S}\rangle = \frac{E_0^2}{2\mu_0 c}\,\hat{\mathbf{k}} = \frac{1}{2}\varepsilon_0 c E_0^2\,\hat{\mathbf{k}}$$

<details>
<summary>Example: Radiation pressure</summary>

A plane wave normally incident on a perfectly absorbing surface exerts a radiation pressure.
The momentum flux of the wave is $\langle S \rangle/c$ per unit area, so:

$$P_{\mathrm{abs}} = \frac{\langle S \rangle}{c} = \frac{\varepsilon_0 E_0^2}{2}$$

For a perfectly reflecting surface, the momentum transfer is doubled:

$$P_{\mathrm{ref}} = \frac{2\langle S \rangle}{c} = \varepsilon_0 E_0^2$$

A 1 kW/m$^2$ beam (like sunlight near Earth) exerts a pressure of about $3.3\ \mu$Pa on a
perfect absorber. $\blacksquare$

</details>

<details>
<summary>Example: Polarization of EM waves</summary>

**Linear polarization.** $\mathbf{E} = E_0\cos(kz - \omega t)\,\hat{\mathbf{x}}$. The field
oscillates in a fixed direction.

**Circular polarization.** Two orthogonal linear polarizations with a phase difference of
$\pi/2$:

$$\mathbf{E} = E_0\cos(kz - \omega t)\,\hat{\mathbf{x}} \pm E_0\sin(kz - \omega t)\,\hat{\mathbf{y}}$$

The tip of $\mathbf{E}$ traces a circle. The $+$ sign gives left-circular polarization
(LCP) and the $-$ sign gives right-circular polarization (RCP).

**Elliptical polarization.** The general case with arbitrary amplitudes and phase:

$$\mathbf{E} = E_{0x}\cos(kz - \omega t)\,\hat{\mathbf{x}} + E_{0y}\cos(kz - \omega t + \delta)\,\hat{\mathbf{y}}$$

$\blacksquare$

</details>

### 5.6 EM Waves in Conductors

In a conductor with conductivity $\sigma$, Ohm's law gives $\mathbf{J} = \sigma\mathbf{E}$.
Substituting into the Ampere-Maxwell law:

$$\nabla \times \mathbf{B} = \mu_0\sigma\mathbf{E} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}$$

For a monochromatic wave $\mathbf{E} = \mathbf{E}_0\,e^{-i\omega t}$, this leads to a complex
wave number:

$$\tilde{k}^2 = \mu_0\varepsilon_0\omega^2 + i\mu_0\sigma\omega$$

Writing $\tilde{k} = k + i\kappa$ where $k$ is the real part (wave number) and $\kappa$ is the
imaginary part (attenuation constant):

$$\mathbf{E}(z,t) = \mathbf{E}_0\,e^{-\kappa z}\cos(kz - \omega t)$$

The field decays exponentially. The **skin depth** is the distance over which the amplitude
falls by a factor of $1/e$:

$$\delta = \frac{1}{\kappa}$$

For a good conductor ($\sigma \gg \varepsilon_0\omega$):

$$\delta = \sqrt{\frac{2}{\mu_0\sigma\omega}}$$

<details>
<summary>Example: Skin depth in copper at 60 Hz and 1 MHz</summary>

Copper: $\sigma = 5.96 \times 10^7$ S/m, $\mu_r \approx 1$.

At $f = 60$ Hz ($\omega = 2\pi \times 60$ rad/s):

$$\delta = \sqrt{\frac{2}{4\pi \times 10^{-7} \times 5.96 \times 10^7 \times 2\pi \times 60}} \approx 8.5\ \mathrm{mm}$$

At $f = 1$ MHz ($\omega = 2\pi \times 10^6$ rad/s):

$$\delta = \sqrt{\frac{2}{4\pi \times 10^{-7} \times 5.96 \times 10^7 \times 2\pi \times 10^6}} \approx 65\ \mu\mathrm{m}$$

The skin depth decreases as $1/\sqrt{f}$, so higher-frequency signals are confined to thinner
surface layers. $\blacksquare$

</details>

### 5.7 Waveguides

Electromagnetic waves can be guided by hollow conducting pipes (waveguides). Consider a
rectangular waveguide with dimensions $a$ (width) and $b$ (height).

**TE modes** (transverse electric, $E_z = 0$, $B_z \neq 0$). The lowest-order mode is
$\mathrm{TE}_{10}$, with fields:

$$E_y = E_0 \sin\!\left(\frac{\pi x}{a}\right)\cos(k_g z - \omega t)$$

$$B_x = -\frac{k_g}{\omega}E_0 \sin\!\left(\frac{\pi x}{a}\right)\cos(k_g z - \omega t)$$

$$B_z = \frac{\pi}{\omega a}E_0 \cos\!\left(\frac{\pi x}{a}\right)\sin(k_g z - \omega t)$$

where the **guide wave number** is $k_g = \sqrt{(\omega/c)^2 - (\pi/a)^2}$.

**Cutoff frequency.** Waves propagate only when $\omega \gt{} \omega_c$ where:

$$\omega_{c,mn} = c\pi\sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$$

For the $\mathrm{TE}_{10}$ mode: $f_c = \frac{c}{2a}$.

**Phase and group velocities.** In a waveguide, the phase velocity exceeds $c$:

$$v_p = \frac{\omega}{k_g} = \frac{c}{\sqrt{1 - (\omega_c/\omega)^2}} \gt{} c$$

The group velocity (signal velocity) is less than $c$:

$$v_g = \frac{d\omega}{dk_g} = c\sqrt{1 - (\omega_c/\omega)^2} \lt{} c$$

They satisfy $v_p\,v_g = c^2$.

:::caution Common Pitfall
The phase velocity in a waveguide exceeds $c$, but this does not violate special relativity.
No information or energy travels faster than $c$; the signal velocity is the group velocity
$v_g \lt{} c$. The phase velocity is the speed of the wave crests, which is a purely
kinematic quantity.
:::

### 5.8 Electric Dipole Radiation

An oscillating electric dipole is the simplest source of electromagnetic radiation.

Consider a dipole $\mathbf{p}(t) = p_0\cos(\omega t)\,\hat{\mathbf{z}}$. In the **radiation zone**
($r \gg \lambda$), the fields are:

$$\mathbf{E} = -\frac{\mu_0 p_0 \omega^2}{4\pi}\frac{\sin\theta}{r}\cos[\omega(t - r/c)]\,\hat{\boldsymbol{\theta}}$$

$$\mathbf{B} = -\frac{\mu_0 p_0 \omega^2}{4\pi c}\frac{\sin\theta}{r}\cos[\omega(t - r/c)]\,\hat{\boldsymbol{\phi}}$$

The fields fall off as $1/r$ (not $1/r^2$ as for static fields), which is characteristic of
radiation.

**Radiation pattern.** The intensity varies as $\sin^2\theta$, with maximum radiation in the
equatorial plane ($\theta = \pi/2$) and zero along the dipole axis ($\theta = 0, \pi$).

**Total radiated power.** Integrating the Poynting vector over a sphere:

$$P = \frac{\mu_0 p_0^2 \omega^4}{12\pi c}$$

**Larmor formula.** For a point charge $q$ undergoing acceleration $a$:

$$P = \frac{q^2 a^2}{6\pi\varepsilon_0 c^3}$$

This is the non-relativistic limit and is valid whenever $v \ll c$.

<details>
<summary>Derivation: Power radiated by an oscillating dipole</summary>

The time-averaged Poynting vector magnitude in the radiation zone:

$$\langle S \rangle = \frac{1}{2\mu_0}\lvert E_\theta\rvert\,\lvert B_\phi\rvert = \frac{\mu_0 p_0^2\omega^4}{32\pi^2 c}\frac{\sin^2\theta}{r^2}$$

The total power through a sphere of radius $r$:

$$P = \int_0^{2\pi}\!\!\int_0^\pi \langle S \rangle\, r^2\sin\theta\,d\theta\,d\phi = \frac{\mu_0 p_0^2\omega^4}{32\pi^2 c} \cdot 2\pi \int_0^\pi \sin^3\theta\,d\theta$$

Using $\int_0^\pi \sin^3\theta\,d\theta = 4/3$:

$$P = \frac{\mu_0 p_0^2\omega^4}{32\pi^2 c} \cdot 2\pi \cdot \frac{4}{3} = \frac{\mu_0 p_0^2\omega^4}{12\pi c}$$

$\blacksquare$

</details>

## 6. Potentials and Gauge Transformations

### 6.1 Scalar and Vector Potentials

We can express the fields in terms of potentials:

$$\mathbf{E} = -\nabla V - \frac{\partial \mathbf{A}}{\partial t}, \quad \mathbf{B} = \nabla \times \mathbf{A}$$

In electrostatics, $\mathbf{A} = \mathbf{0}$ and $\mathbf{E} = -\nabla V$.

### 6.2 Gauge Transformations

The potentials are not unique. The transformation

$$V' = V - \frac{\partial \chi}{\partial t}, \quad \mathbf{A}' = \mathbf{A} + \nabla \chi$$

for any scalar function $\chi(\mathbf{r}, t)$ leaves $\mathbf{E}$ and $\mathbf{B}$ unchanged. This is a
**gauge transformation**.

**Common gauges:**

- **Coulomb gauge:** $\nabla \cdot \mathbf{A} = 0$. Useful in magnetostatics.
- **Lorenz gauge:** $\nabla \cdot \mathbf{A} + \mu_0 \varepsilon_0 \frac{\partial V}{\partial t} = 0$.
  Simplifies the wave equations for $V$ and $\mathbf{A}$:

$$\nabla^2 V - \mu_0 \varepsilon_0 \frac{\partial^2 V}{\partial t^2} = -\frac{\rho}{\varepsilon_0}$$

$$\nabla^2 \mathbf{A} - \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0 \mathbf{J}$$

:::caution Common Pitfall
The Lorenz gauge (with one "r") is named after Ludvig Lorenz, not Hendrik Lorentz. It is frequently
misspelled "Lorentz gauge." The two are different people, and the correct spelling is "Lorenz gauge."
:::

### 6.3 Derivation of the Lorenz Gauge Condition

Starting from the definitions $\mathbf{E} = -\nabla V - \partial\mathbf{A}/\partial t$ and
$\mathbf{B} = \nabla \times \mathbf{A}$, substitute into Gauss's law:

$$\nabla \cdot \mathbf{E} = -\nabla^2 V - \frac{\partial}{\partial t}(\nabla \cdot \mathbf{A}) = \frac{\rho}{\varepsilon_0}$$

$$\nabla^2 V + \frac{\partial}{\partial t}(\nabla \cdot \mathbf{A}) = -\frac{\rho}{\varepsilon_0} \tag{6.1}$$

Substitute into the Ampere-Maxwell law:

$$\nabla \times \mathbf{B} = \nabla(\nabla \cdot \mathbf{A}) - \nabla^2 \mathbf{A} = \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial}{\partial t}(-\nabla V - \frac{\partial\mathbf{A}}{\partial t})$$

$$\nabla^2 \mathbf{A} - \mu_0\varepsilon_0\frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0\mathbf{J} + \nabla\!\left(\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\frac{\partial V}{\partial t}\right) \tag{6.2}$$

Equations (6.1) and (6.2) are coupled through the term
$\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\,\partial V/\partial t$.

**The Lorenz gauge** sets this term to zero:

$$\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\frac{\partial V}{\partial t} = 0$$

This is always achievable. If the current potentials do not satisfy this condition, perform a
gauge transformation with $\chi$ satisfying:

$$\nabla^2\chi - \mu_0\varepsilon_0\frac{\partial^2\chi}{\partial t^2} = -\left(\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\frac{\partial V}{\partial t}\right)$$

In the Lorenz gauge, (6.1) and (6.2) decouple into inhomogeneous wave equations:

$$\nabla^2 V - \mu_0\varepsilon_0\frac{\partial^2 V}{\partial t^2} = -\frac{\rho}{\varepsilon_0}$$

$$\nabla^2 \mathbf{A} - \mu_0\varepsilon_0\frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0\mathbf{J}$$

Both $V$ and $\mathbf{A}$ satisfy wave equations with sources $\rho/\varepsilon_0$ and $\mu_0\mathbf{J}$,
and both propagate at speed $c$. The Lorenz gauge makes manifest the relativistic covariance
of the theory (Section 7).

### 6.4 Retarded Potentials

The inhomogeneous wave equations in the Lorenz gauge have causal solutions --- the potentials
at $(\mathbf{r}, t)$ depend on the sources at the **retarded time** $t_r = t - R/c$ where
$R = \lvert\mathbf{r} - \mathbf{r}'\rvert$:

$$V(\mathbf{r}, t) = \frac{1}{4\pi\varepsilon_0}\int \frac{\rho(\mathbf{r}', t_r)}{R}\,d^3\mathbf{r}'$$

$$\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi}\int \frac{\mathbf{J}(\mathbf{r}', t_r)}{R}\,d^3\mathbf{r}'$$

**Physical interpretation.** Information about changes in the source travels outward at speed $c$.
The field at point $\mathbf{r}$ and time $t$ is determined by the source configuration at the
earlier time $t_r$ when a light signal would have left $\mathbf{r}'$ to arrive at $\mathbf{r}$ at
time $t$.

<details>
<summary>Verification that retarded potentials satisfy the wave equation</summary>

We verify for $V$; the argument for $\mathbf{A}$ is identical. Define

$$V(\mathbf{r}, t) = \frac{1}{4\pi\varepsilon_0}\int \frac{[\rho]}{R}\,d^3\mathbf{r}'$$

where $[\rho] = \rho(\mathbf{r}', t - R/c)$. Applying the d'Alembertian operator
$\square^2 = \nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}$ and carefully
differentiating under the integral (the derivatives act on both the explicit $1/R$ and the
implicit $R$ in $[\rho]$ through $t_r$):

$$\square^2 V = \frac{1}{4\pi\varepsilon_0}\int \left[\frac{\square^2[\rho]}{R}\right] d^3\mathbf{r}'$$

The key identity is $\square^2(f(t_r)/R) = -4\pi f(t)\,\delta^3(\mathbf{r} - \mathbf{r}')$, which
follows from the fact that $\nabla^2(1/R) = -4\pi\delta^3(\mathbf{r} - \mathbf{r}')$ and that the
time derivatives cancel the $1/R$ propagation effects. Therefore:

$$\square^2 V = -\frac{1}{\varepsilon_0}\int \rho(\mathbf{r}', t)\,\delta^3(\mathbf{r} - \mathbf{r}')\,d^3\mathbf{r}' = -\frac{\rho(\mathbf{r}, t)}{\varepsilon_0}$$

This confirms that $V$ satisfies the wave equation. $\blacksquare$

</details>

### 6.5 Lienard-Wiechert Potentials

For a **moving point charge** $q$ following trajectory $\mathbf{r}_s(t)$, the retarded potentials
cannot be evaluated naively because the retarded time $t_r$ satisfies a non-trivial equation:

$$c(t - t_r) = \lvert\mathbf{r} - \mathbf{r}_s(t_r)\rvert$$

The **Lienard-Wiechert potentials** are the exact solutions:

$$V(\mathbf{r}, t) = \frac{q}{4\pi\varepsilon_0}\frac{1}{(\kappa R)}\bigg|_{t_r}, \quad \mathbf{A}(\mathbf{r}, t) = \frac{q\mathbf{v}}{4\pi\varepsilon_0 c^2}\frac{1}{(\kappa R)}\bigg|_{t_r}$$

where $\mathbf{R} = \mathbf{r} - \mathbf{r}_s(t_r)$, $R = \lvert\mathbf{R}\rvert$,
$\mathbf{v} = \dot{\mathbf{r}}_s(t_r)$, and $\kappa = 1 - \hat{\mathbf{R}} \cdot \mathbf{v}/c$.

The factor $\kappa$ corrects for the **Doppler effect**: when the charge moves toward the
observation point, the radiation is compressed (higher density of field lines).

**Fields of a moving charge.** The electric field splits into two parts:

$$\mathbf{E} = \mathbf{E}_{\mathrm{vel}} + \mathbf{E}_{\mathrm{acc}}$$

The **velocity field** (Coulomb-like, falls off as $1/R^2$):

$$\mathbf{E}_{\mathrm{vel}} = \frac{q}{4\pi\varepsilon_0}\frac{(1-\beta^2)(\hat{\mathbf{R}} - \boldsymbol{\beta})}{\kappa^3 R^2}\bigg|_{t_r}$$

where $\boldsymbol{\beta} = \mathbf{v}/c$.

The **acceleration field** (radiation, falls off as $1/R$):

$$\mathbf{E}_{\mathrm{acc}} = \frac{q}{4\pi\varepsilon_0 c}\frac{\hat{\mathbf{R}} \times [(\hat{\mathbf{R}} - \boldsymbol{\beta}) \times \dot{\boldsymbol{\beta}}]}{\kappa^3 R}\bigg|_{t_r}$$

Only the acceleration field contributes to radiation at large distances. The magnetic field
is always:

$$\mathbf{B} = \frac{1}{c}\hat{\mathbf{R}} \times \mathbf{E}$$

## 7. Special Relativity and Electromagnetism

### 7.1 Covariant Formulation

The laws of electromagnetism are inherently relativistic. In fact, it was the inconsistency of
Maxwell's equations with Galilean relativity that motivated Einstein's 1905 theory.

**Minkowski spacetime.** Events are labelled by coordinates $(ct, x, y, z)$ in a four-dimensional
spacetime. The **spacetime interval** between two events is:

$$ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2$$

This interval is invariant under Lorentz transformations --- all inertial observers agree on its
value. We use the metric signature $\eta_{\mu\nu} = \mathrm{diag}(-1, +1, +1, +1)$.

**Lorentz transformations.** For a boost with velocity $v$ along the $x$-axis, define
$\beta = v/c$ and $\gamma = 1/\sqrt{1-\beta^2}$:

$$\Lambda^\mu_{\ \nu} = \begin{pmatrix} \gamma & -\gamma\beta & 0 & 0 \\ -\gamma\beta & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

Coordinates transform as $x'^\mu = \Lambda^\mu_{\ \nu}\,x^\nu$ (Einstein summation convention
implied).

### 7.2 Four-Vectors

A **four-vector** $A^\mu = (A^0, A^1, A^2, A^3)$ transforms as $A'^\mu = \Lambda^\mu_{\ \nu}\,A^\nu$
under Lorentz transformations. The inner product $A_\mu B^\mu = \eta_{\mu\nu}A^\mu B^\nu$ is a
Lorentz scalar (invariant).

Key four-vectors in electromagnetism:

**Position:** $x^\mu = (ct, x, y, z)$

**Four-velocity:** $U^\mu = \frac{dx^\mu}{d\tau} = \gamma(c, v_x, v_y, v_z)$ where
$\tau$ is proper time.

**Four-momentum:** $p^\mu = mU^\mu = (E/c, p_x, p_y, p_z)$, with $E = \gamma mc^2$.

**Four-current density:**

$$J^\mu = (c\rho, J_x, J_y, J_z)$$

The continuity equation $\nabla \cdot \mathbf{J} + \partial\rho/\partial t = 0$ becomes the
manifestly covariant:

$$\partial_\mu J^\mu = 0$$

**Four-potential:**

$$A^\mu = (V/c, A_x, A_y, A_z)$$

The Lorenz gauge condition $\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial V}{\partial t} = 0$
becomes:

$$\partial_\mu A^\mu = 0$$

### 7.3 The Electromagnetic Field Tensor

The six components of $\mathbf{E}$ and $\mathbf{B}$ are unified in the **antisymmetric field
tensor** $F^{\mu\nu}$, defined by:

$$F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu$$

In matrix form:

$$F^{\mu\nu} = \begin{pmatrix} 0 & -E_x/c & -E_y/c & -E_z/c \\ E_x/c & 0 & -B_z & B_y \\ E_y/c & B_z & 0 & -B_x \\ E_z/c & -B_y & B_x & 0 \end{pmatrix}$$

The **dual field tensor** is:

$$\tilde{F}^{\mu\nu} = \frac{1}{2}\varepsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}$$

where $\varepsilon^{\mu\nu\rho\sigma}$ is the totally antisymmetric Levi-Civita symbol with
$\varepsilon^{0123} = +1$. In matrix form:

$$\tilde{F}^{\mu\nu} = \begin{pmatrix} 0 & -B_x & -B_y & -B_z \\ B_x & 0 & E_z/c & -E_y/c \\ B_y & -E_z/c & 0 & E_x/c \\ B_z & E_y/c & -E_x/c & 0 \end{pmatrix}$$

The dual tensor is obtained from $F^{\mu\nu}$ by the replacement
$\mathbf{E}/c \to -\mathbf{B}$, $\mathbf{B} \to \mathbf{E}/c$.

**Lorentz force.** The four-force on a charge $q$ is:

$$K^\mu = \frac{dp^\mu}{d\tau} = qF^{\mu\nu}U_\nu$$

The spatial components reduce to $\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})$,
and the time component gives the power equation $dE/dt = q\mathbf{E} \cdot \mathbf{v}$.

### 7.4 Invariance of Maxwell's Equations

All four Maxwell equations are contained in two covariant equations:

**Inhomogeneous equations** (Gauss's law + Ampere-Maxwell law):

$$\boxed{\partial_\mu F^{\mu\nu} = \mu_0 J^\nu}$$

**Homogeneous equations** (Gauss's law for magnetism + Faraday's law):

$$\boxed{\partial_\mu \tilde{F}^{\mu\nu} = 0}$$

<details>
<summary>Verification: $\nu = 0$ gives Gauss's law</summary>

For $\nu = 0$:

$$\partial_\mu F^{\mu 0} = \mu_0 J^0 = \mu_0 c\rho$$

Since $F^{\mu 0} = (0, -E_x/c, -E_y/c, -E_z/c)$:

$$\partial_0 F^{00} + \partial_1 F^{10} + \partial_2 F^{20} + \partial_3 F^{30} = 0 + \frac{\partial}{\partial x}\!\left(-\frac{E_x}{c}\right) + \frac{\partial}{\partial y}\!\left(-\frac{E_y}{c}\right) + \frac{\partial}{\partial z}\!\left(-\frac{E_z}{c}\right)$$

$$-\frac{1}{c}\nabla \cdot \mathbf{E} = \mu_0 c\rho$$

$$\nabla \cdot \mathbf{E} = -\mu_0 c^2 \rho = \frac{\rho}{\varepsilon_0}$$

This is Gauss's law, using $c^2 = 1/(\mu_0\varepsilon_0)$. $\blacksquare$

</details>

**Field transformations.** Under a Lorentz boost with velocity $\mathbf{v} = v\,\hat{\mathbf{x}}$,
the fields transform as:

$$E'_x = E_x, \quad E'_y = \gamma(E_y - vB_z), \quad E'_z = \gamma(E_z + vB_y)$$

$$B'_x = B_x, \quad B'_y = \gamma\!\left(B_y + \frac{v}{c^2}E_z\right), \quad B'_z = \gamma\!\left(B_z - \frac{v}{c^2}E_y\right)$$

Components parallel to the boost are unchanged; perpendicular components mix $\mathbf{E}$ and
$\mathbf{B}$.

**Lorentz invariants.** The following quantities are the same in all frames:

$$F_{\mu\nu}F^{\mu\nu} = 2\!\left(B^2 - \frac{E^2}{c^2}\right), \quad F_{\mu\nu}\tilde{F}^{\mu\nu} = -\frac{4}{c}\,\mathbf{E} \cdot \mathbf{B}$$

These invariants classify electromagnetic fields:
- If $E^2 \gt{} c^2 B^2$ in some frame, there exists a frame where $\mathbf{B} = \mathbf{0}$ (purely electric).
- If $c^2 B^2 \gt{} E^2$, there exists a frame where $\mathbf{E} = \mathbf{0}$ (purely magnetic).
- If $\mathbf{E} \cdot \mathbf{B} = 0$ and $E = cB$, the field is a null field (electromagnetic wave).

## 8. Problem Set

**Problem 1.** Starting from Maxwell's equations in differential form, derive the continuity
equation $\nabla \cdot \mathbf{J} + \partial\rho/\partial t = 0$. Explain why this result
requires the displacement current term.

<details>
<summary>Solution</summary>

Take the divergence of the Ampere-Maxwell law:

$$\nabla \cdot (\nabla \times \mathbf{B}) = \mu_0\nabla \cdot \mathbf{J} + \mu_0\varepsilon_0\frac{\partial}{\partial t}(\nabla \cdot \mathbf{E})$$

Since $\nabla \cdot (\nabla \times \mathbf{B}) = 0$ and $\nabla \cdot \mathbf{E} = \rho/\varepsilon_0$:

$$0 = \mu_0\nabla \cdot \mathbf{J} + \mu_0\varepsilon_0\frac{\partial}{\partial t}\!\left(\frac{\rho}{\varepsilon_0}\right) = \mu_0\!\left(\nabla \cdot \mathbf{J} + \frac{\partial\rho}{\partial t}\right)$$

$$\nabla \cdot \mathbf{J} + \frac{\partial\rho}{\partial t} = 0$$

Without the displacement current term, we would obtain $\nabla \cdot \mathbf{J} = 0$, which
violates charge conservation whenever $\partial\rho/\partial t \neq 0$ (e.g., inside a
charging capacitor).

*Cross-reference:* Section 1.3, Section 4.5.

</details>

**Problem 2.** A point charge $q$ is placed at the centre of a dielectric sphere of radius $R$
and permittivity $\varepsilon$. Find $\mathbf{D}$, $\mathbf{E}$, and $\mathbf{P}$ everywhere.
Determine the bound surface charge density.

<details>
<summary>Solution</summary>

By spherical symmetry, $\mathbf{D}$ is radial. Use Gauss's law for $\mathbf{D}$ with a
spherical Gaussian surface of radius $r$:

For $r \lt{} R$: $D \cdot 4\pi r^2 = q \implies \mathbf{D} = \frac{q}{4\pi r^2}\,\hat{\mathbf{r}}$.

$\mathbf{E}_{\mathrm{in}} = \frac{\mathbf{D}}{\varepsilon} = \frac{q}{4\pi\varepsilon r^2}\,\hat{\mathbf{r}}$.

$\mathbf{P} = \varepsilon_0\chi_e\mathbf{E}_{\mathrm{in}} = \left(\varepsilon - \varepsilon_0\right)\frac{q}{4\pi\varepsilon r^2}\,\hat{\mathbf{r}}$.

For $r \gt{} R$: $D \cdot 4\pi r^2 = q \implies \mathbf{D} = \frac{q}{4\pi r^2}\,\hat{\mathbf{r}}$.

$\mathbf{E}_{\mathrm{out}} = \frac{\mathbf{D}}{\varepsilon_0} = \frac{q}{4\pi\varepsilon_0 r^2}\,\hat{\mathbf{r}}$.

$\mathbf{P}_{\mathrm{out}} = \mathbf{0}$ (vacuum).

Bound surface charge: $\sigma_b = \mathbf{P}\cdot\hat{\mathbf{r}}\big|_{r=R} = \left(\varepsilon - \varepsilon_0\right)\frac{q}{4\pi\varepsilon R^2}$.

Bound volume charge: $\rho_b = -\nabla \cdot \mathbf{P} = -\frac{1}{r^2}\frac{\partial}{\partial r}(r^2 P_r) = 0$ for $r \lt{} R$.

*Cross-reference:* Section 2.10.

</details>

**Problem 3.** An infinitely long cylindrical shell of radius $R$ carries a uniform surface
charge density $\sigma$. Find the electric field everywhere.

<details>
<summary>Solution</summary>

By cylindrical symmetry, $\mathbf{E}$ is radial and depends only on $r$. Use a Gaussian
cylinder of radius $r$ and length $L$.

For $r \lt{} R$: no charge enclosed, so $\mathbf{E} = \mathbf{0}$.

For $r \gt{} R$: the enclosed charge is $Q_{\mathrm{enc}} = \sigma \cdot 2\pi R L$.

$$E \cdot 2\pi r L = \frac{\sigma \cdot 2\pi R L}{\varepsilon_0}$$

$$\mathbf{E} = \frac{\sigma R}{\varepsilon_0 r}\,\hat{\mathbf{r}}$$

At the surface ($r = R^+$): $E = \sigma/\varepsilon_0$, which is the discontinuity expected
from the surface charge.

*Cross-reference:* Section 2.2, Section 2.6.

</details>

**Problem 4.** A conducting sphere of radius $a$ carries charge $Q$ and is surrounded by a
concentric conducting spherical shell of inner radius $b$ and outer radius $c$ carrying charge
$-Q$. Find $V(r)$ everywhere.

<details>
<summary>Solution</summary>

By spherical symmetry, $\mathbf{E}$ is radial. Use Gauss's law with spherical Gaussian
surfaces.

$r \lt{} a$: $\mathbf{E} = \mathbf{0}$ (conductor interior), so $V = V_a$ (constant).

$a \lt{} r \lt{} b$: $E \cdot 4\pi r^2 = Q/\varepsilon_0 \implies \mathbf{E} = \frac{Q}{4\pi\varepsilon_0 r^2}\,\hat{\mathbf{r}}$.

$$V(r) = -\int_a^r E\,dr' + V_a = \frac{Q}{4\pi\varepsilon_0}\!\left(\frac{1}{r} - \frac{1}{a}\right) + V_a$$

$b \lt{} r \lt{} c$: $\mathbf{E} = \mathbf{0}$ (conductor), so $V = V_b$ (constant).

$V_b = \frac{Q}{4\pi\varepsilon_0}\!\left(\frac{1}{b} - \frac{1}{a}\right) + V_a$.

$r \gt{} c$: $E \cdot 4\pi r^2 = (Q - Q)/\varepsilon_0 = 0 \implies \mathbf{E} = \mathbf{0}$, so $V = 0$ (choosing $V(\infty) = 0$).

Since $V_c = 0$ and $V_c = V_b$ (same conductor), $V_b = 0$:

$$V_a = \frac{Q}{4\pi\varepsilon_0}\!\left(\frac{1}{a} - \frac{1}{b}\right)$$

This is the capacitance of the spherical capacitor:
$C = Q/V_a = 4\pi\varepsilon_0 ab/(b-a)$.

*Cross-reference:* Section 2.3, Section 2.4.

</details>

**Problem 5.** The potential on the surface of a sphere of radius $R$ is
$V(\theta) = V_0\cos\theta$. Find the potential inside and outside the sphere.

<details>
<summary>Solution</summary>

Inside ($r \lt{} R$), solve Laplace's equation by separation of variables in spherical
coordinates. The general azimuthally symmetric solution is:

$$V(r,\theta) = \sum_{l=0}^{\infty}\left(A_l r^l + \frac{B_l}{r^{l+1}}\right)P_l(\cos\theta)$$

For $r \lt{} R$: finiteness at $r = 0$ requires $B_l = 0$.

$$V_{\mathrm{in}} = \sum_{l=0}^{\infty} A_l\,r^l\,P_l(\cos\theta)$$

Boundary condition at $r = R$: $V_{\mathrm{in}}(R,\theta) = V_0\cos\theta = V_0 P_1(\cos\theta)$.

By orthogonality of Legendre polynomials, only $l = 1$ contributes: $A_1 = V_0/R$.

$$V_{\mathrm{in}} = \frac{V_0}{R}\,r\cos\theta = \frac{V_0}{R}\,z$$

For $r \gt{} R$: $V \to 0$ as $r \to \infty$ requires $A_l = 0$.

$$V_{\mathrm{out}} = \sum_{l=0}^{\infty}\frac{B_l}{r^{l+1}}P_l(\cos\theta)$$

Matching at $r = R$: $B_1/R^2 = V_0 \implies B_1 = V_0 R^2$.

$$V_{\mathrm{out}} = \frac{V_0 R^2}{r^2}\cos\theta$$

The interior field is uniform: $\mathbf{E}_{\mathrm{in}} = -\nabla V_{\mathrm{in}} = -(V_0/R)\,\hat{\mathbf{z}}$.

*Cross-reference:* Section 2.4, Section 2.7.

</details>

**Problem 6.** Prove the uniqueness theorem for Neumann boundary conditions: the solution to
$\nabla^2 V = -\rho/\varepsilon_0$ in a volume $\mathcal{V}$ is unique up to an additive
constant when $\partial V/\partial n$ is specified on $\mathcal{S}$.

<details>
<summary>Solution</summary>

Suppose $V_1$ and $V_2$ both satisfy Poisson's equation with the same Neumann boundary
condition $\partial V_1/\partial n = \partial V_2/\partial n$ on $\mathcal{S}$. Define
$U = V_1 - V_2$. Then $\nabla^2 U = 0$ in $\mathcal{V}$ and $\partial U/\partial n = 0$ on
$\mathcal{S}$.

Apply Green's first identity with $\phi = \psi = U$:

$$\int_{\mathcal{V}}\lvert\nabla U\rvert^2\,dV = \oint_{\mathcal{S}} U\,\frac{\partial U}{\partial n}\,dA = 0$$

Since the integrand $\lvert\nabla U\rvert^2 \geq 0$, we conclude $\nabla U = \mathbf{0}$
in $\mathcal{V}$, so $U$ is constant throughout $\mathcal{V}$.

$V_1 = V_2 + C$ for some constant $C$. The solution is unique up to an additive constant.
(The constant is physically irrelevant since only potential differences matter.)
$\blacksquare$

*Cross-reference:* Section 2.7.

</details>

**Problem 7.** A point charge $q$ is placed at distance $a$ from the centre of a grounded
conducting sphere of radius $R$ ($a \gt{} R$). Find the image charge location and magnitude,
and determine the force on $q$.

<details>
<summary>Solution</summary>

Place $q$ at distance $a$ along the $z$-axis. The image charge $q'$ is at distance $b$
along the $z$-axis (inside the sphere).

For $V = 0$ on the sphere ($r = R$), we need:

$$\frac{q}{d_1} + \frac{q'}{d_2} = 0 \quad \mathrm{for\ all\ }\theta$$

where $d_1^2 = R^2 + a^2 - 2Ra\cos\theta$ and $d_2^2 = R^2 + b^2 - 2Rb\cos\theta$.

The ratio $d_2/d_1$ must be constant. Setting $b = R^2/a$:

$$\frac{d_2^2}{d_1^2} = \frac{R^2 + R^4/a^2 - 2R^3\cos\theta/a}{R^2 + a^2 - 2Ra\cos\theta} = \frac{R^2}{a^2}$$

This is constant (independent of $\theta$). With $q'/q = -R/a$:

$$q' = -\frac{qR}{a}, \quad b = \frac{R^2}{a}$$

The force on $q$ is the Coulomb force due to $q'$:

$$\mathbf{F} = \frac{qq'}{4\pi\varepsilon_0(a-b)^2}\,\hat{\mathbf{z}} = \frac{q(-qR/a)}{4\pi\varepsilon_0(a-R^2/a)^2}\,\hat{\mathbf{z}} = -\frac{q^2R}{4\pi\varepsilon_0 a(a^2-R^2)}\,\hat{\mathbf{z}}$$

The negative sign indicates attraction toward the sphere. $\blacksquare$

*Cross-reference:* Section 2.8.

</details>

**Problem 8.** A charge $+q$ is at $z = +d/2$ and $-q$ is at $z = -d/2$. Compute the
electric dipole moment and find the potential to dipole order at a point in the $xy$-plane
at distance $r$ from the origin.

<details>
<summary>Solution</summary>

The dipole moment:

$$\mathbf{p} = \sum_i q_i\mathbf{r}_i = q\!\left(\frac{d}{2}\right)\hat{\mathbf{z}} + (-q)\!\left(-\frac{d}{2}\right)\hat{\mathbf{z}} = qd\,\hat{\mathbf{z}}$$

The dipole potential:

$$V_1(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\frac{\mathbf{p}\cdot\hat{\mathbf{r}}}{r^2}$$

In the $xy$-plane, $\hat{\mathbf{r}} = \cos\phi\,\hat{\mathbf{x}} + \sin\phi\,\hat{\mathbf{y}}$,
so $\mathbf{p}\cdot\hat{\mathbf{r}} = qd\,\hat{\mathbf{z}}\cdot\hat{\mathbf{r}} = 0$.

Therefore $V_1 = 0$ in the $xy$-plane. The first non-zero contribution comes from the
quadrupole term ($\sim 1/r^3$). $\blacksquare$

*Cross-reference:* Section 2.9.

</details>

**Problem 9.** A dielectric slab of permittivity $\varepsilon$ and thickness $d$ is inserted
between the plates of a parallel-plate capacitor with plate separation $D \gt{} d$ and plate
area $A$, carrying free charge $\pm Q$. Find the capacitance.

<details>
<summary>Solution</summary>

Let the plates be at $x = 0$ and $x = D$, with the slab occupying $0 \lt{} x \lt{} d$.
Since $Q$ is fixed, $D_n = \sigma_f = Q/A$ is the same in both regions.

In the dielectric ($0 \lt{} x \lt{} d$): $E_1 = D/\varepsilon = Q/(\varepsilon A)$.

In vacuum ($d \lt{} x \lt{} D$): $E_2 = D/\varepsilon_0 = Q/(\varepsilon_0 A)$.

The potential difference:

$$V = E_1 d + E_2(D - d) = \frac{Q}{A}\!\left(\frac{d}{\varepsilon} + \frac{D-d}{\varepsilon_0}\right)$$

The capacitance:

$$C = \frac{Q}{V} = \frac{\varepsilon_0 A}{D - d + d/\varepsilon_r}$$

where $\varepsilon_r = \varepsilon/\varepsilon_0$. For $d = D$ (fully filled):
$C = \varepsilon_r\varepsilon_0 A/D$, which is $\varepsilon_r$ times the vacuum capacitance.

*Cross-reference:* Section 2.10.

</details>

**Problem 10.** Find the magnetic field at the centre of a square loop of side $a$ carrying
current $I$ using the Biot-Savart law.

<details>
<summary>Solution</summary>

By symmetry, each side contributes equally. Consider one side from $(a/2, -a/2, 0)$ to
$(a/2, a/2, 0)$. For this side, $d\mathbf{l} = dy\,\hat{\mathbf{y}}$ and
$\mathbf{r} = (a/2)\hat{\mathbf{x}} - y\hat{\mathbf{y}}$, so $r = \sqrt{(a/2)^2 + y^2}$.

$$d\mathbf{B} = \frac{\mu_0 I}{4\pi}\frac{d\mathbf{l} \times \mathbf{r}}{r^3} = \frac{\mu_0 I}{4\pi}\frac{dy\,\hat{\mathbf{y}} \times [(a/2)\hat{\mathbf{x}} - y\hat{\mathbf{y}}]}{r^3}$$

$$= \frac{\mu_0 I}{4\pi}\frac{(-a/2)\,dy}{[(a/2)^2+y^2]^{3/2}}\,\hat{\mathbf{z}}$$

$$B_{\mathrm{one\ side}} = \frac{\mu_0 I}{4\pi}\!\left(-\frac{a}{2}\right)\!\int_{-a/2}^{a/2}\frac{dy}{[(a/2)^2+y^2]^{3/2}}$$

Using $\int dy/(s^2+y^2)^{3/2} = y/[s^2\sqrt{s^2+y^2}]$ with $s = a/2$:

$$B_{\mathrm{one\ side}} = \frac{\mu_0 I}{4\pi}\!\left(-\frac{a}{2}\right)\frac{2}{(a/2)\sqrt{(a/2)^2+(a/2)^2}} \cdot 2 = -\frac{\mu_0 I}{\pi a}\cdot\frac{1}{\sqrt{2}} \cdot 2 = -\frac{\mu_0 I}{\pi a}\sqrt{2}$$

The magnitude from all four sides: $B = 4 \times \frac{\sqrt{2}\,\mu_0 I}{\pi a} = \frac{2\sqrt{2}\,\mu_0 I}{\pi a}$.

$$\mathbf{B} = -\frac{2\sqrt{2}\,\mu_0 I}{\pi a}\,\hat{\mathbf{z}}$$

(by the right-hand rule, into the page for counterclockwise current). $\blacksquare$

*Cross-reference:* Section 3.1.

</details>

**Problem 11.** A toroid with $N$ turns, inner radius $a$, and outer radius $b$ carries current
$I$. Find the magnetic field everywhere.

<details>
<summary>Solution</summary>

By symmetry, $\mathbf{B}$ is tangential and depends only on $r$ (distance from the axis of
symmetry). Apply Ampere's law to a circular loop of radius $r$.

For $r \lt{} a$: no current is enclosed, so $\mathbf{B} = \mathbf{0}$.

For $a \lt{} r \lt{} b$: the Amperian loop encloses all $N$ turns.

$$B \cdot 2\pi r = \mu_0 N I \implies \mathbf{B} = \frac{\mu_0 N I}{2\pi r}\,\hat{\boldsymbol{\phi}}$$

For $r \gt{} b$: the net enclosed current is $NI - NI = 0$, so $\mathbf{B} = \mathbf{0}$.

The field is confined entirely within the toroid, unlike a solenoid where the field extends
beyond the ends. $\blacksquare$

*Cross-reference:* Section 3.2, Section 3.4.

</details>

**Problem 12.** A circular loop of radius $R$ carries current $I$. Find the magnetic dipole
moment and the field on the axis at distance $z$ from the centre. Show that the result
reduces to the dipole field for $z \gg R$.

<details>
<summary>Solution</summary>

The magnetic dipole moment: $\mathbf{m} = I\pi R^2\,\hat{\mathbf{z}}$.

From the Biot-Savart law, every element $d\mathbf{l}$ is perpendicular to $\hat{\mathbf{r}}$,
so $d\mathbf{B} = \frac{\mu_0 I}{4\pi}\frac{dl}{R^2+z^2}$. By symmetry, only the axial component
survives:

$$B_z = \frac{\mu_0 I}{4\pi(R^2+z^2)}\frac{R}{\sqrt{R^2+z^2}} \cdot 2\pi R = \frac{\mu_0 I R^2}{2(R^2+z^2)^{3/2}}$$

For $z \gg R$: $(R^2+z^2)^{3/2} \approx z^3(1 + 3R^2/2z^2) \approx z^3$.

$$B_z \approx \frac{\mu_0 I R^2}{2z^3} = \frac{\mu_0}{4\pi}\frac{2m}{z^3}$$

The dipole field formula gives, on the axis ($\theta = 0$):

$$\mathbf{B}_{\mathrm{dip}} = \frac{\mu_0}{4\pi}\frac{2\mathbf{m}}{z^3}$$

This matches. $\blacksquare$

*Cross-reference:* Section 3.5.

</details>

**Problem 13.** A long straight wire along the $z$-axis carries current $I$. Find the vector
potential $\mathbf{A}$ and verify that $\nabla \times \mathbf{A}$ gives the correct $\mathbf{B}$.

<details>
<summary>Solution</summary>

By cylindrical symmetry, $\mathbf{A}$ can only depend on $s$ (the radial distance) and must
point along $\hat{\mathbf{z}}$ (parallel to the current).

$$\mathbf{A}(s) = -\frac{\mu_0 I}{2\pi}\ln\!\left(\frac{s}{s_0}\right)\hat{\mathbf{z}}$$

where $s_0$ is an arbitrary reference distance (gauge-dependent).

Verify: $\mathbf{B} = \nabla \times \mathbf{A}$.

In cylindrical coordinates, $\nabla \times (A_z\,\hat{\mathbf{z}}) = -\frac{\partial A_z}{\partial s}\,\hat{\boldsymbol{\phi}}$.

$$B_\phi = -\frac{\partial}{\partial s}\!\left(-\frac{\mu_0 I}{2\pi}\ln\frac{s}{s_0}\right) = \frac{\mu_0 I}{2\pi s}$$

$$\mathbf{B} = \frac{\mu_0 I}{2\pi s}\,\hat{\boldsymbol{\phi}}$$

This matches the Ampere's law result. $\blacksquare$

*Cross-reference:* Section 3.3, Section 3.6.

</details>

**Problem 14.** An iron ring of mean radius $R = 10$ cm, cross-sectional area $A = 4\ \mathrm{cm}^2$,
and relative permeability $\mu_r = 500$ has $N = 200$ turns carrying current $I = 2$ A.
Find $B$, $H$, $M$, and the total flux through the ring.

<details>
<summary>Solution</summary>

Apply Ampere's law for $\mathbf{H}$ around the ring:

$$\oint \mathbf{H} \cdot d\mathbf{l} = NI \implies H \cdot 2\pi R = NI$$

$$H = \frac{NI}{2\pi R} = \frac{200 \times 2}{2\pi \times 0.10} = \frac{400}{0.628} \approx 637\ \mathrm{A/m}$$

$$B = \mu_0 \mu_r H = 4\pi \times 10^{-7} \times 500 \times 637 \approx 0.40\ \mathrm{T}$$

$$M = \chi_m H = (\mu_r - 1)H = 499 \times 637 \approx 3.18 \times 10^5\ \mathrm{A/m}$$

Total flux: $\Phi = BA = 0.40 \times 4 \times 10^{-4} = 1.6 \times 10^{-4}\ \mathrm{Wb}$.

*Cross-reference:* Section 3.7, Section 3.8.

</details>

**Problem 15.** A rectangular conducting loop of width $w = 0.1$ m and length $\ell = 0.2$ m
has resistance $R = 5\ \Omega$. One end enters a region of uniform magnetic field
$B = 0.5$ T (perpendicular to the loop) at velocity $v = 2$ m/s. Find the induced EMF and
current.

<details>
<summary>Solution</summary>

As the loop enters the field with its leading edge at position $x$ inside the field:

$$\Phi_B = B \cdot w \cdot x$$

$$\mathcal{E} = -\frac{d\Phi_B}{dt} = -Bw\frac{dx}{dt} = -Bwv = -0.5 \times 0.1 \times 2 = -0.1\ \mathrm{V}$$

The magnitude is $0.1$ V. The current is:

$$I = \frac{\lvert\mathcal{E}\rvert}{R} = \frac{0.1}{5} = 0.02\ \mathrm{A}$$

By Lenz's law, the current flows to oppose the increasing flux (counterclockwise when viewed
from the direction of $\mathbf{B}$).

The magnetic braking force on the leading edge: $F = BIw = 0.5 \times 0.02 \times 0.1 = 0.001$ N
(opposing the motion). $\blacksquare$

*Cross-reference:* Section 4.1, Section 4.4.

</details>

**Problem 16.** A plane electromagnetic wave in vacuum has $\mathbf{E} = 100\cos(kz - \omega t)\,\hat{\mathbf{x}}$ V/m.
Find $B_0$, the time-averaged intensity, and the radiation pressure on a perfectly absorbing
surface.

<details>
<summary>Solution</summary>

$B_0 = E_0/c = 100/(3 \times 10^8) = 3.33 \times 10^{-7}$ T.

$\mathbf{B} = 3.33 \times 10^{-7}\cos(kz - \omega t)\,\hat{\mathbf{y}}$ T.

Time-averaged Poynting vector magnitude:

$$\langle S \rangle = \frac{E_0^2}{2\mu_0 c} = \frac{100^2}{2 \times 4\pi \times 10^{-7} \times 3 \times 10^8} = \frac{10^4}{754} \approx 13.3\ \mathrm{W/m}^2$$

Radiation pressure on a perfect absorber:

$$P_{\mathrm{rad}} = \frac{\langle S \rangle}{c} = \frac{13.3}{3 \times 10^8} \approx 4.4 \times 10^{-8}\ \mathrm{Pa}$$

*Cross-reference:* Section 5.2, Section 5.4, Section 5.5.

</details>

**Problem 17.** Find the skin depth for a 1 MHz electromagnetic wave in copper
($\sigma = 5.96 \times 10^7$ S/m, $\mu_r \approx 1$). At what frequency does the skin depth
equal 1 $\mu$m?

<details>
<summary>Solution</summary>

At $f = 1$ MHz:

$$\delta = \sqrt{\frac{2}{\mu_0\sigma\omega}} = \sqrt{\frac{2}{4\pi \times 10^{-7} \times 5.96 \times 10^7 \times 2\pi \times 10^6}}$$

$$= \sqrt{\frac{2}{4\pi \times 5.96 \times 2\pi^2 \times 10^6}} = \sqrt{\frac{2}{4.70 \times 10^8}} \approx 65.2\ \mu\mathrm{m}$$

For $\delta = 1\ \mu$m:

$$1 \times 10^{-6} = \sqrt{\frac{2}{4\pi \times 10^{-7} \times 5.96 \times 10^7 \times 2\pi f}}$$

$$10^{-12} = \frac{2}{4\pi \times 5.96 \times 2\pi \times f} = \frac{2}{470.4\,f}$$

$$f = \frac{2}{470.4 \times 10^{-12}} \approx 4.25 \times 10^9\ \mathrm{Hz} = 4.25\ \mathrm{GHz}$$

*Cross-reference:* Section 5.6.

</details>

**Problem 18.** Verify that Maxwell's equations in covariant form
$\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$ reproduce the Ampere-Maxwell law for $\nu = 1$.

<details>
<summary>Solution</summary>

For $\nu = 1$:

$$\partial_\mu F^{\mu 1} = \mu_0 J^1 = \mu_0 J_x$$

From the field tensor:

$$F^{\mu 1} = (E_x/c,\ 0,\ -B_z,\ B_y) \quad \mathrm{for\ }\mu = 0, 1, 2, 3$$

So:

$$\partial_0 F^{01} + \partial_2 F^{21} + \partial_3 F^{31} = \mu_0 J_x$$

$$\frac{1}{c}\frac{\partial}{\partial t}\!\left(\frac{E_x}{c}\right) + \frac{\partial}{\partial y}(-B_z) + \frac{\partial}{\partial z}(B_y) = \mu_0 J_x$$

$$\frac{1}{c^2}\frac{\partial E_x}{\partial t} - \frac{\partial B_z}{\partial y} + \frac{\partial B_y}{\partial z} = \mu_0 J_x$$

Using $c^2 = 1/(\mu_0\varepsilon_0)$ and noting that
$-(\partial B_z/\partial y) + (\partial B_y/\partial z) = -(\nabla \times \mathbf{B})_x$:

$$\mu_0\varepsilon_0\frac{\partial E_x}{\partial t} - (\nabla \times \mathbf{B})_x = \mu_0 J_x$$

$$(\nabla \times \mathbf{B})_x = \mu_0\varepsilon_0\frac{\partial E_x}{\partial t} - \mu_0 J_x$$

$$\nabla \times \mathbf{B} = \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial\mathbf{E}}{\partial t}$$

This is the Ampere-Maxwell law. $\blacksquare$

*Cross-reference:* Section 7.4, Section 1.1.

</details>
