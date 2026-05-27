---
title: Electromagnetism
description:
  "Comprehensive university-level notes on electromagnetism covering Maxwell's equations in integral
  and differential form, electrostatics, magnetostatics, electrodynamics, electromagnetic wave
  propagation, gauge transformations, special relativity and its connection to electromagnetism,
  radiation from accelerating charges, waveguides, and plasma physics."
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

$$\oint_S \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆ = \frac◆LB◆Q_◆LB◆\mathrm◆LB◆enc◆RB◆◆RB◆◆LB◆\varepsilon_0◆RB◆ \quad \mathrm◆LB◆(Gauss's\ Law)$$

$$\oint_S \mathbf◆LB◆B◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆ = 0 \quad \mathrm◆LB◆(Gauss's\ Law\ for\ Magnetism)$$

$$\oint_C \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = -\frac◆LB◆d\Phi_B◆RB◆◆LB◆dt◆RB◆ \quad \mathrm◆LB◆(Faraday's\ Law)$$

$$\oint_C \mathbf◆LB◆B◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = \mu_0 I_◆LB◆\mathrm◆LB◆enc◆RB◆ + \mu_0 \varepsilon_0 \frac◆LB◆d\Phi_E◆RB◆◆LB◆dt◆RB◆ \quad \mathrm◆LB◆(Ampere◆LB◆-◆RB◆Maxwell\ Law)◆RB◆$$

**Differential Form:**

$$\nabla \cdot \mathbf◆LB◆E◆RB◆ = \frac◆LB◆\rho◆RB◆◆LB◆\varepsilon_0◆RB◆ \quad \mathrm◆LB◆(Gauss's\ Law)$$

$$\nabla \cdot \mathbf◆LB◆B◆RB◆ = 0 \quad \mathrm◆LB◆(Gauss's\ Law\ for\ Magnetism)$$

$$\nabla \times \mathbf◆LB◆E◆RB◆ = -\frac◆LB◆\partial \mathbf◆LB◆B◆RB◆◆RB◆◆LB◆\partial t◆RB◆ \quad \mathrm◆LB◆(Faraday's\ Law)$$

$$\nabla \times \mathbf◆LB◆B◆RB◆ = \mu_0 \mathbf◆LB◆J◆RB◆ + \mu_0 \varepsilon_0 \frac◆LB◆\partial \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t◆RB◆ \quad \mathrm◆LB◆(Ampere◆LB◆-◆RB◆Maxwell\ Law)◆RB◆$$

Where $\rho$ is the charge density, $\mathbf◆LB◆J◆RB◆$ is the current density, $\varepsilon_0$ is the
permittivity Of free space, and $\mu_0$ is the permeability of free space.

### 1.2 Derivation from Integral to Differential Form

**Gauss's Law.** Apply the divergence theorem to the integral form:

$$\oint_S \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆ = \int_V (\nabla \cdot \mathbf◆LB◆E◆RB◆)\, dV = \frac◆LB◆1◆RB◆◆LB◆\varepsilon_0◆RB◆\int_V \rho\, dV$$

Since this holds for any volume $V$: $\nabla \cdot \mathbf◆LB◆E◆RB◆ = \rho / \varepsilon_0$.

**Faraday's Law.** Apply Stokes' theorem:

$$\oint_C \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = \int_S (\nabla \times \mathbf◆LB◆E◆RB◆) \cdot d\mathbf◆LB◆A◆RB◆ = -\int_S \frac◆LB◆\partial \mathbf◆LB◆B◆RB◆◆RB◆◆LB◆\partial t◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆$$

Since this holds for any surface $S$: $\nabla \times \mathbf◆LB◆E◆RB◆ = -\partial \mathbf◆LB◆B◆RB◆/\partial t$.

**Gauss's Law for Magnetism.** By the divergence theorem:

$$\oint_S \mathbf◆LB◆B◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆ = \int_V (\nabla \cdot \mathbf◆LB◆B◆RB◆)\, dV = 0$$

Since $V$ is arbitrary: $\nabla \cdot \mathbf◆LB◆B◆RB◆ = 0$. This expresses the absence of magnetic
monopoles.

**Ampere-Maxwell Law.** Apply Stokes' theorem:

$$\oint_C \mathbf◆LB◆B◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = \int_S (\nabla \times \mathbf◆LB◆B◆RB◆) \cdot d\mathbf◆LB◆A◆RB◆ = \mu_0 \int_S \mathbf◆LB◆J◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆ + \mu_0 \varepsilon_0 \frac◆LB◆d◆RB◆◆LB◆dt◆RB◆\int_S \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆$$

Since $S$ is arbitrary:
$\nabla \times \mathbf◆LB◆B◆RB◆ = \mu_0 \mathbf◆LB◆J◆RB◆ + \mu_0 \varepsilon_0\, \partial \mathbf◆LB◆E◆RB◆/\partial t$.

### 1.3 Continuity Equation

Taking the divergence of the Ampere-Maxwell law:

$$\nabla \cdot (\nabla \times \mathbf◆LB◆B◆RB◆) = 0 = \mu_0 \nabla \cdot \mathbf◆LB◆J◆RB◆ + \mu_0 \varepsilon_0 \frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆(\nabla \cdot \mathbf◆LB◆E◆RB◆)$$

Using Gauss's law: $\nabla \cdot \mathbf◆LB◆J◆RB◆ + \frac◆LB◆\partial \rho◆RB◆◆LB◆\partial t◆RB◆ = 0$.

This is the **continuity equation**, expressing conservation of charge.

### 1.4 Boundary Conditions at Interfaces

At an interface between two linear media (labelled 1 and 2) with surface normal $\hat◆LB◆\mathbf◆LB◆n◆RB◆◆RB◆$
Pointing from 2 into 1, Maxwell's equations impose four boundary conditions.

**Normal component of $\mathbf◆LB◆D◆RB◆$.** Apply Gauss's law for $\mathbf◆LB◆D◆RB◆$ to a thin pillbox
Straddling the interface:

$$\oint \mathbf◆LB◆D◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆ = \sigma_f A \implies D_◆LB◆1n◆RB◆ - D_◆LB◆2n◆RB◆ = \sigma_f$$

**Tangential component of $\mathbf◆LB◆E◆RB◆$.** Apply Faraday's law to a rectangular loop Perpendicular to
the interface. As the loop height $\Delta h \to 0$The flux through the Loop vanishes:

$$\oint \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = 0 \implies E_◆LB◆1t◆RB◆ = E_◆LB◆2t◆RB◆$$

In vector form: $\hat◆LB◆\mathbf◆LB◆n◆RB◆◆RB◆ \times (\mathbf◆LB◆E◆RB◆_1 - \mathbf◆LB◆E◆RB◆_2) = \mathbf◆LB◆0◆RB◆$.

**Normal component of $\mathbf◆LB◆B◆RB◆$.** Apply Gauss's law for $\mathbf◆LB◆B◆RB◆$ to a pillbox:

$$B_◆LB◆1n◆RB◆ = B_◆LB◆2n◆RB◆$$

**Tangential component of $\mathbf◆LB◆H◆RB◆$.** Apply Ampere's law for $\mathbf◆LB◆H◆RB◆$ to a loop
Perpendicular to the interface:

$$\hat◆LB◆\mathbf◆LB◆n◆RB◆◆RB◆ \times (\mathbf◆LB◆H◆RB◆_1 - \mathbf◆LB◆H◆RB◆_2) = \mathbf◆LB◆K◆RB◆_f$$

Where $\mathbf◆LB◆K◆RB◆_f$ is the free surface current density.

**Summary** (no free charges or currents, $\sigma_f = 0$, $\mathbf◆LB◆K◆RB◆_f = \mathbf◆LB◆0◆RB◆$):

| Field        | Normal component                              | Tangential component                          |
| ------------ | --------------------------------------------- | --------------------------------------------- |
| $\mathbf◆LB◆E◆RB◆$ | $\varepsilon_1 E_◆LB◆1n◆RB◆ = \varepsilon_2 E_◆LB◆2n◆RB◆$ | $E_◆LB◆1t◆RB◆ = E_◆LB◆2t◆RB◆$                             |
| $\mathbf◆LB◆D◆RB◆$ | $D_◆LB◆1n◆RB◆ = D_◆LB◆2n◆RB◆$                             | $D_◆LB◆1t◆RB◆/\varepsilon_1 = D_◆LB◆2t◆RB◆/\varepsilon_2$ |
| $\mathbf◆LB◆B◆RB◆$ | $\mu_1 B_◆LB◆1n◆RB◆ = \mu_2 B_◆LB◆2n◆RB◆$                 | $B_◆LB◆1t◆RB◆/\mu_1 = B_◆LB◆2t◆RB◆/\mu_2$                 |
| $\mathbf◆LB◆H◆RB◆$ | $\mu_2 H_◆LB◆1n◆RB◆ = \mu_1 H_◆LB◆2n◆RB◆$                 | $H_◆LB◆1t◆RB◆ = H_◆LB◆2t◆RB◆$                             |

### 1.5 Worked Example: Deriving the Electromagnetic Wave Equation

**Problem.** Starting from Maxwell's equations in free space ($\rho = 0$, $\mathbf◆LB◆J◆RB◆ = \mathbf◆LB◆0◆RB◆$),
Derive the wave equations for $\mathbf◆LB◆E◆RB◆$ and $\mathbf◆LB◆B◆RB◆$And show that the wave speed is
$c = 1/\sqrt◆LB◆\mu_0 \varepsilon_0◆RB◆$.

<details>
<summary>Solution</summary>

In free space, Maxwell's equations reduce to:

$$\nabla \cdot \mathbf◆LB◆E◆RB◆ = 0, \quad \nabla \cdot \mathbf◆LB◆B◆RB◆ = 0$$

$$\nabla \times \mathbf◆LB◆E◆RB◆ = -\frac◆LB◆\partial \mathbf◆LB◆B◆RB◆◆RB◆◆LB◆\partial t◆RB◆, \quad \nabla \times \mathbf◆LB◆B◆RB◆ = \mu_0 \varepsilon_0 \frac◆LB◆\partial \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t◆RB◆$$

Take the curl of Faraday's law:

$$\nabla \times (\nabla \times \mathbf◆LB◆E◆RB◆) = -\frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆(\nabla \times \mathbf◆LB◆B◆RB◆) = -\mu_0 \varepsilon_0 \frac◆LB◆\partial^2 \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆$$

Apply the vector identity
$\nabla \times (\nabla \times \mathbf◆LB◆E◆RB◆) = \nabla(\nabla \cdot \mathbf◆LB◆E◆RB◆) - \nabla^2 \mathbf◆LB◆E◆RB◆$.
Since $\nabla \cdot \mathbf◆LB◆E◆RB◆ = 0$:

$$-\nabla^2 \mathbf◆LB◆E◆RB◆ = -\mu_0 \varepsilon_0 \frac◆LB◆\partial^2 \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆$$

$$\boxed◆LB◆\nabla^2 \mathbf◆LB◆E◆RB◆ = \mu_0 \varepsilon_0 \frac◆LB◆\partial^2 \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆◆RB◆$$

An identical calculation, taking the curl of the Ampere-Maxwell law, yields:

$$\boxed◆LB◆\nabla^2 \mathbf◆LB◆B◆RB◆ = \mu_0 \varepsilon_0 \frac◆LB◆\partial^2 \mathbf◆LB◆B◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆◆RB◆$$

Comparing with the standard wave equation
$\nabla^2 \mathbf◆LB◆F◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆v^2◆RB◆\frac◆LB◆\partial^2 \mathbf◆LB◆F◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆$ The wave speed is:

$$c = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆\mu_0 \varepsilon_0◆RB◆◆RB◆ \approx 2.998 \times 10^8\ \mathrm◆LB◆m/s$$

$\blacksquare$

</details>

## 2. Electrostatics

### 2.1 Coulomb's Law and the Electric Field

**Coulomb's Law:** The force between two point charges $q_1$ and $q_2$ separated by distance $r$:

$$\mathbf◆LB◆F◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆ \frac◆LB◆q_1 q_2◆RB◆◆LB◆r^2◆RB◆ \hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$$

The **electric field** due to a point charge $q$ at position $\mathbf◆LB◆r◆RB◆$:

$$\mathbf◆LB◆E◆RB◆(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆ \frac◆LB◆q◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆|^2◆RB◆ \hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$$

**Superposition Principle:** The field due to a collection of charges is the vector sum of
individual Fields.

### 2.2 Gauss's Law Applications

**Example: Infinite plane of charge** with surface charge density $\sigma$.

Choose a Gaussian "pillbox" of area $A$ straddling the plane. By symmetry, $\mathbf◆LB◆E◆RB◆$ is
Perpendicular to the plane. Gauss's law:

$$2EA = \frac◆LB◆\sigma A◆RB◆◆LB◆\varepsilon_0◆RB◆ \implies E = \frac◆LB◆\sigma◆RB◆◆LB◆2\varepsilon_0◆RB◆$$

The field is uniform and perpendicular to the plane, pointing away from positive charge.

**Example: Uniformly charged sphere** of radius $R$ with total charge $Q$.

For $r \gt R$: $\mathbf◆LB◆E◆RB◆ = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0 r^2◆RB◆ \hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$ (identical to a point
charge).

For $r \lt R$: $E = \frac◆LB◆Qr◆RB◆◆LB◆4\pi\varepsilon_0 R^3◆RB◆$ (linear in $r$).

### 2.3 Electric Potential

The **electric potential** is defined by $\mathbf◆LB◆E◆RB◆ = -\nabla V$ (for electrostatics, where
$\nabla \times \mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆0◆RB◆$).

For a point charge: $V(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆ \frac◆LB◆q◆RB◆◆LB◆r◆RB◆$ (choosing
$V(\infty) = 0$).

**Theorem 2.1.** $\nabla \times \mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆0◆RB◆$ in electrostatics implies $\mathbf◆LB◆E◆RB◆$ is
Conservative, so the line integral $\int_A^B \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = V(A) - V(B)$ is
Path-independent.

### 2.4 Poisson's and Laplace's Equations

Substituting $\mathbf◆LB◆E◆RB◆ = -\nabla V$ into Gauss's law:

$$\nabla \cdot (-\nabla V) = -\nabla^2 V = \frac◆LB◆\rho◆RB◆◆LB◆\varepsilon_0◆RB◆$$

This is **Poisson's equation**:

$$\nabla^2 V = -\frac◆LB◆\rho◆RB◆◆LB◆\varepsilon_0◆RB◆$$

In regions with $\rho = 0$This reduces to **Laplace's equation**:

$$\nabla^2 V = 0$$

**Theorem 2.2 (Uniqueness --- statement).** The solution to Laplace's (or Poisson's) equation in a
Region is unique given either Dirichlet boundary conditions ($V$ specified on the boundary) or
Neumann boundary conditions ($\partial V / \partial n$ specified on the boundary).

### 2.5 Worked Example

**Problem.** Two infinite conducting plates at $x = 0$ and $x = d$ are held at potentials $V = 0$
and $V = V_0$ respectively. Find the potential and field between them.

_Solution._ Between the plates, $\rho = 0$So $\nabla^2 V = 0$. By symmetry, $V$ depends only on $x$:

$$\frac◆LB◆d^2V◆RB◆◆LB◆dx^2◆RB◆ = 0 \implies V(x) = Ax + B$$

Boundary conditions: $V(0) = 0 \implies B = 0$. $V(d) = V_0 \implies A = V_0/d$.

$$V(x) = \frac◆LB◆V_0◆RB◆◆LB◆d◆RB◆ x, \quad \mathbf◆LB◆E◆RB◆ = -\frac◆LB◆dV◆RB◆◆LB◆dx◆RB◆\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆ = -\frac◆LB◆V_0◆RB◆◆LB◆d◆RB◆\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆$$

$\blacksquare$

### 2.6 Gauss's Law: Cylindrical Symmetry

**Example: Infinite line charge** with linear charge density $\lambda$.

By cylindrical symmetry, $\mathbf◆LB◆E◆RB◆$ points radially outward and depends only on $r$. Choose a
Gaussian cylinder of radius $r$ and length $L$:

$$\oint \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆ = E \cdot 2\pi r L = \frac◆LB◆\lambda L◆RB◆◆LB◆\varepsilon_0◆RB◆$$

$$\mathbf◆LB◆E◆RB◆ = \frac◆LB◆\lambda◆RB◆◆LB◆2\pi\varepsilon_0 r◆RB◆\,\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$$

**Example: Coaxial cable.** An inner conductor of radius $a$ carries linear charge density
$+\lambda$And an outer conducting shell of radius $b$ carries $-\lambda$.

For $r \lt a$: $\mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆0◆RB◆$ (conductor interior).

For $a \lt r \lt b$: $\mathbf◆LB◆E◆RB◆ = \frac◆LB◆\lambda◆RB◆◆LB◆2\pi\varepsilon_0 r◆RB◆\,\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$.

For $r \gt b$: $\mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆0◆RB◆$ (total enclosed charge is zero).

The potential difference between the conductors:

$$V(a) - V(b) = -\int_a^b \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = \frac◆LB◆\lambda◆RB◆◆LB◆2\pi\varepsilon_0◆RB◆\ln\!\left(\frac◆LB◆b◆RB◆◆LB◆a◆RB◆\right)$$

### 2.7 The Uniqueness Theorem

**Theorem 2.3 (Uniqueness for Dirichlet conditions).** The solution to Poisson's equation
$\nabla^2 V = -\rho/\varepsilon_0$ in a volume $\mathcal◆LB◆V◆RB◆$ is unique if $V$ is specified on the
Boundary $\mathcal◆LB◆S◆RB◆$.

_Proof._ Suppose $V_1$ and $V_2$ both satisfy Poisson's equation with the same boundary Conditions.
Define $U = V_1 - V_2$. Then $\nabla^2 U = 0$ in $\mathcal◆LB◆V◆RB◆$ and $U = 0$ on $\mathcal◆LB◆S◆RB◆$.

Apply **Green's first identity** with $\phi = \psi = U$:

$$\int_◆LB◆\mathcal◆LB◆V◆RB◆◆RB◆ \left(U\,\nabla^2 U + \lvert\nabla U\rvert^2\right) dV = \oint_◆LB◆\mathcal◆LB◆S◆RB◆◆RB◆ U\,\frac◆LB◆\partial U◆RB◆◆LB◆\partial n◆RB◆\, dA$$

Since $\nabla^2 U = 0$ and $U = 0$ on $\mathcal◆LB◆S◆RB◆$:

$$\int_◆LB◆\mathcal◆LB◆V◆RB◆◆RB◆ \lvert\nabla U\rvert^2\, dV = 0$$

Since the integrand is non-negative, $\nabla U = \mathbf◆LB◆0◆RB◆$ everywhere in $\mathcal◆LB◆V◆RB◆$So $U$ is
Constant. With $U = 0$ on the boundary, $U = 0$ throughout $\mathcal◆LB◆V◆RB◆$. Hence $V_1 = V_2$.
$\blacksquare$

**Theorem 2.4 (Uniqueness for Neumann conditions).** The solution is unique up to an additive
Constant when $\partial V/\partial n$ is specified on $\mathcal◆LB◆S◆RB◆$.

_Proof._ The same argument applies, but now $\partial U/\partial n = 0$ on $\mathcal◆LB◆S◆RB◆$ and the
Right-hand side of Green's identity vanishes for a different reason. We again conclude
$\nabla U = \mathbf◆LB◆0◆RB◆$So $U$ is constant. $\blacksquare$

### 2.8 Method of Images

The method of images replaces a problem with conductors by an equivalent problem with charges only,
Exploiting the uniqueness theorem.

**Point charge above a grounded plane.** A charge $q$ is placed at distance $d$ above an Infinite
grounded conducting plane ($V = 0$ at $z = 0$).

Replace the plane by an image charge $q' = -q$ at $z = -d$. The potential for $z \gt 0$ is:

$$V(x,y,z) = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\left[\frac◆LB◆q◆RB◆◆LB◆\sqrt◆LB◆x^2 + y^2 + (z-d)^2◆RB◆◆RB◆ - \frac◆LB◆q◆RB◆◆LB◆\sqrt◆LB◆x^2 + y^2 + (z+d)^2◆RB◆◆RB◆\right]$$

This satisfies $\nabla^2 V = 0$ for $z \gt 0$ (away from the charge), $V = 0$ at $z = 0$And
$V \to 0$ as $r \to \infty$. By the uniqueness theorem, this is the correct solution.

The force on $q$ is the force due to the image charge:

$$\mathbf◆LB◆F◆RB◆ = -\frac◆LB◆q^2◆RB◆◆LB◆4\pi\varepsilon_0 (2d)^2◆RB◆\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$$

The induced surface charge density on the plane:

$$\sigma(x,y) = -\varepsilon_0 \left.\frac◆LB◆\partial V◆RB◆◆LB◆\partial z◆RB◆\right|_◆LB◆z=0◆RB◆ = -\frac◆LB◆qd◆RB◆◆LB◆2\pi(x^2+y^2+d^2)^◆LB◆3/2◆RB◆◆RB◆$$

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

$$\frac◆LB◆d_2^2◆RB◆◆LB◆d_1^2◆RB◆ = \frac◆LB◆R^2 + R^4/a^2 - 2R^3\cos\theta/a◆RB◆◆LB◆R^2 + a^2 - 2Ra\cos\theta◆RB◆ = \frac◆LB◆R^2◆RB◆◆LB◆a^2◆RB◆$$

The ratio is indeed constant. Choosing $q' = -qR/a$ gives $q/d_1 + q'/d_2 = 0$ on the sphere.
$\blacksquare$

</details>

### 2.9 Multipole Expansion

For a localized charge distribution $\rho(\mathbf◆LB◆r◆RB◆')$The potential at large distance
$r = \lvert\mathbf◆LB◆r◆RB◆\rvert \gg r' = \lvert\mathbf◆LB◆r◆RB◆'\rvert$ is expanded using
$\frac◆LB◆1◆RB◆◆LB◆\lvert\mathbf◆LB◆r◆RB◆-\mathbf◆LB◆r◆RB◆'\rvert◆RB◆ = \sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆ \frac◆LB◆r'^n◆RB◆◆LB◆r^◆LB◆n+1◆RB◆◆RB◆ P_n(\cos\alpha)$
Where $\alpha$ is the angle between $\mathbf◆LB◆r◆RB◆$ and $\mathbf◆LB◆r◆RB◆'$:

$$V(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\sum_◆LB◆n=0◆RB◆^◆LB◆\infty◆RB◆\frac◆LB◆1◆RB◆◆LB◆r^◆LB◆n+1◆RB◆◆RB◆\int r'^n P_n(\cos\alpha)\,\rho(\mathbf◆LB◆r◆RB◆')\,d^3\mathbf◆LB◆r◆RB◆'$$

**Monopole term** ($n = 0$):

$$V_0 = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\frac◆LB◆Q◆RB◆◆LB◆r◆RB◆, \quad Q = \int \rho(\mathbf◆LB◆r◆RB◆')\,d^3\mathbf◆LB◆r◆RB◆'$$

This is the potential of a point charge at the origin.

**Dipole term** ($n = 1$):

$$V_1 = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\frac◆LB◆\mathbf◆LB◆p◆RB◆ \cdot \hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆◆RB◆◆LB◆r^2◆RB◆, \quad \mathbf◆LB◆p◆RB◆ = \int \mathbf◆LB◆r◆RB◆'\,\rho(\mathbf◆LB◆r◆RB◆')\,d^3\mathbf◆LB◆r◆RB◆'$$

Where $\mathbf◆LB◆p◆RB◆$ is the **electric dipole moment**.

**Quadrupole term** ($n = 2$): Depends on the quadrupole moment tensor:

$$Q_◆LB◆ij◆RB◆ = \int (3r_i' r_j' - r'^2 \delta_◆LB◆ij◆RB◆)\,\rho(\mathbf◆LB◆r◆RB◆')\,d^3\mathbf◆LB◆r◆RB◆'$$

$$V_2 = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\frac◆LB◆1◆RB◆◆LB◆2r^3◆RB◆\sum_◆LB◆i,j◆RB◆ Q_◆LB◆ij◆RB◆\,\hat◆LB◆r◆RB◆_i\,\hat◆LB◆r◆RB◆_j$$

For a neutral charge distribution ($Q = 0$), the dipole term dominates. If additionally
$\mathbf◆LB◆p◆RB◆ = \mathbf◆LB◆0◆RB◆$The quadrupole term dominates.

<details>
<summary>Example: Dipole potential of two charges</summary>

A charge $+q$ at $z = +d/2$ and $-q$ at $z = -d/2$.

The dipole moment:
$\mathbf◆LB◆p◆RB◆ = q(d/2)\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆ + (-q)(-d/2)\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆ = qd\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$.

On the $z$-axis ($\theta = 0$): $V_1 = \frac◆LB◆qd◆RB◆◆LB◆4\pi\varepsilon_0 r^2◆RB◆$.

In the equatorial plane ($\theta = \pi/2$): $V_1 = 0$.

The exact potential on the $z$-axis is:

$$V = \frac◆LB◆q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆r-d/2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆r+d/2◆RB◆\right) = \frac◆LB◆q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\frac◆LB◆d◆RB◆◆LB◆r^2 - d^2/4◆RB◆$$

For $r \gg d$: this reduces to $V_1 = \frac◆LB◆qd◆RB◆◆LB◆4\pi\varepsilon_0 r^2◆RB◆$Confirming the Dipole
approximation. $\blacksquare$

</details>

### 2.10 Dielectrics

**Polarization.** When an external field $\mathbf◆LB◆E◆RB◆$ is applied to a dielectric, the material
Develops a **polarization** $\mathbf◆LB◆P◆RB◆$The dipole moment per unit volume. This produces **bound
charges**:

$$\rho_b = -\nabla \cdot \mathbf◆LB◆P◆RB◆, \quad \sigma_b = \mathbf◆LB◆P◆RB◆ \cdot \hat◆LB◆\mathbf◆LB◆n◆RB◆◆RB◆$$

**The displacement field** $\mathbf◆LB◆D◆RB◆$ is defined as:

$$\mathbf◆LB◆D◆RB◆ = \varepsilon_0 \mathbf◆LB◆E◆RB◆ + \mathbf◆LB◆P◆RB◆$$

Gauss's law in terms of $\mathbf◆LB◆D◆RB◆$:

$$\nabla \cdot \mathbf◆LB◆D◆RB◆ = \rho_f$$

Where $\rho_f$ is the free charge density. This form is useful because $\mathbf◆LB◆D◆RB◆$ depends Only on
free charges, not bound charges.

**Linear dielectrics.** For an isotropic linear dielectric:

$$\mathbf◆LB◆P◆RB◆ = \varepsilon_0 \chi_e \mathbf◆LB◆E◆RB◆, \quad \mathbf◆LB◆D◆RB◆ = \varepsilon \mathbf◆LB◆E◆RB◆$$

Where $\chi_e$ is the electric susceptibility and $\varepsilon = \varepsilon_0(1 + \chi_e)$ is the
Permittivity. The **relative permittivity** (dielectric constant) is
$\varepsilon_r = \varepsilon/\varepsilon_0 = 1 + \chi_e$.

**Boundary conditions at dielectric interfaces** (no free charges):

$$D_◆LB◆1n◆RB◆ = D_◆LB◆2n◆RB◆ \implies \varepsilon_1 E_◆LB◆1n◆RB◆ = \varepsilon_2 E_◆LB◆2n◆RB◆$$

$$E_◆LB◆1t◆RB◆ = E_◆LB◆2t◆RB◆$$

The tangential component of $\mathbf◆LB◆E◆RB◆$ is continuous, but the normal component changes. The angles
of the field with respect to the normal satisfy
$\varepsilon_1 \tan\theta_2 = \varepsilon_2 \tan\theta_1$.

<details>
<summary>Example: Dielectric slab in a uniform field</summary>

A dielectric slab of permittivity $\varepsilon$ and thickness $d$ is placed in a uniform External
field $\mathbf◆LB◆E◆RB◆_0$ perpendicular to its faces.

Outside the slab: $\mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆E◆RB◆_0$.

Inside the slab: by continuity of $D_n$:

$$D_◆LB◆\mathrm◆LB◆in◆RB◆ = D_◆LB◆\mathrm◆LB◆out◆RB◆ = \varepsilon_0 E_0$$

$$E_◆LB◆\mathrm◆LB◆in◆RB◆ = \frac◆LB◆D_◆LB◆\mathrm◆LB◆in◆RB◆◆RB◆◆LB◆\varepsilon◆RB◆ = \frac◆LB◆\varepsilon_0◆RB◆◆LB◆\varepsilon◆RB◆ E_0 = \frac◆LB◆E_0◆RB◆◆LB◆\varepsilon_r◆RB◆$$

The polarization:
$P = \varepsilon_0 \chi_e E_◆LB◆\mathrm◆LB◆in◆RB◆ = \varepsilon_0 (\varepsilon_r - 1) \frac◆LB◆E_0◆RB◆◆LB◆\varepsilon_r◆RB◆$.

The bound surface charge density on each face:

$$\sigma_b = \pm P = \pm \varepsilon_0 \left(1 - \frac◆LB◆1◆RB◆◆LB◆\varepsilon_r◆RB◆\right) E_0$$

The bound charges produce a field opposing $\mathbf◆LB◆E◆RB◆_0$Reducing the net field inside the
Dielectric. $\blacksquare$

</details>

## 3. Magnetostatics

### 3.1 The Biot-Savart Law

The magnetic field due to a steady current $I$ in a wire element $d\mathbf◆LB◆l◆RB◆$:

$$d\mathbf◆LB◆B◆RB◆ = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi◆RB◆ \frac◆LB◆d\mathbf◆LB◆l◆RB◆ \times \hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆◆RB◆◆LB◆r^2◆RB◆$$

For a complete circuit:

$$\mathbf◆LB◆B◆RB◆(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi◆RB◆ \oint \frac◆LB◆d\mathbf◆LB◆l◆RB◆ \times \hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆'◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆ - \mathbf◆LB◆r◆RB◆'|^2◆RB◆$$

### 3.2 Ampere's Law

For steady currents ($\partial \mathbf◆LB◆E◆RB◆ / \partial t = 0$):

$$\oint_C \mathbf◆LB◆B◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = \mu_0 I_◆LB◆\mathrm◆LB◆enc◆RB◆$$

**Example: Infinite straight wire** carrying current $I$.

By cylindrical symmetry, $B$ is constant on circles centred on the wire. Choose an Amperian loop of
Radius $r$:

$$\oint \mathbf◆LB◆B◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = B \cdot 2\pi r = \mu_0 I \implies B = \frac◆LB◆\mu_0 I◆RB◆◆LB◆2\pi r◆RB◆$$

**Example: Solenoid.** For a long solenoid with $n$ turns per unit length carrying current $I$:

$$B = \mu_0 n I \quad \mathrm◆LB◆(inside), \quad B = 0 \quad \mathrm◆LB◆(outside)$$

### 3.3 Magnetic Vector Potential

Since $\nabla \cdot \mathbf◆LB◆B◆RB◆ = 0$We can write $\mathbf◆LB◆B◆RB◆ = \nabla \times \mathbf◆LB◆A◆RB◆$Where
$\mathbf◆LB◆A◆RB◆$ is the **magnetic vector potential**.

In the Coulomb gauge ($\nabla \cdot \mathbf◆LB◆A◆RB◆ = 0$), the vector potential satisfies

$$\nabla^2 \mathbf◆LB◆A◆RB◆ = -\mu_0 \mathbf◆LB◆J◆RB◆$$

This is Poisson's equation for each component of $\mathbf◆LB◆A◆RB◆$.

For a current loop, the solution is:

$$\mathbf◆LB◆A◆RB◆(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆\mu_0◆RB◆◆LB◆4\pi◆RB◆ \int \frac◆LB◆\mathbf◆LB◆J◆RB◆(\mathbf◆LB◆r◆RB◆')◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆ - \mathbf◆LB◆r◆RB◆'|◆RB◆\, d^3\mathbf◆LB◆r◆RB◆'$$

### 3.4 Additional Ampere's Law Examples

**Example: Toroid.** A toroid with $N$ turns carrying current $I$ has inner radius $a$ and outer
Radius $b$.

By symmetry, $\mathbf◆LB◆B◆RB◆$ is tangential and constant on circular Amperian loops inside the Toroid.
For a loop of radius $r$ ($a \lt r \lt b$):

$$B \cdot 2\pi r = \mu_0 N I \implies B = \frac◆LB◆\mu_0 N I◆RB◆◆LB◆2\pi r◆RB◆$$

For $r \lt a$ or $r \gt b$: $B = 0$ (no enclosed current).

Unlike a solenoid, the field inside a toroid is _not_ uniform --- it varies as $1/r$.

**Example: Infinite current sheet.** A sheet in the $xy$-plane carries surface current density
$\mathbf◆LB◆K◆RB◆ = K\,\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆$.

By symmetry, $\mathbf◆LB◆B◆RB◆$ is parallel to $\pm\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆$ and depends only on $z$. Choose a
rectangular Amperian loop straddling the sheet with sides parallel to $\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆$:

$$B \cdot 2L = \mu_0 K L \implies B = \frac◆LB◆\mu_0 K◆RB◆◆LB◆2◆RB◆$$

The field is uniform on each side, pointing in opposite directions:

$$\mathbf◆LB◆B◆RB◆ = \begin◆LB◆cases◆RB◆ +\frac◆LB◆\mu_0 K◆RB◆◆LB◆2◆RB◆\,\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆ & z \gt 0 \\[4pt] -\frac◆LB◆\mu_0 K◆RB◆◆LB◆2◆RB◆\,\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆ & z \lt 0 \end◆LB◆cases◆RB◆$$

### 3.5 Magnetic Dipole Moment

A current loop carrying current $I$ enclosing area $\mathbf◆LB◆a◆RB◆$ has **magnetic dipole moment**:

$$\mathbf◆LB◆m◆RB◆ = I\mathbf◆LB◆a◆RB◆$$

For a planar loop of $N$ turns: $\mathbf◆LB◆m◆RB◆ = NIA\,\hat◆LB◆\mathbf◆LB◆n◆RB◆◆RB◆$Where $A$ is the area And
$\hat◆LB◆\mathbf◆LB◆n◆RB◆◆RB◆$ is the unit normal given by the right-hand rule.

**Field of a magnetic dipole** (at position $\mathbf◆LB◆r◆RB◆$ from the dipole):

$$\mathbf◆LB◆B◆RB◆_◆LB◆\mathrm◆LB◆dip◆RB◆(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆\mu_0◆RB◆◆LB◆4\pi◆RB◆\left[\frac◆LB◆3(\mathbf◆LB◆m◆RB◆ \cdot \hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆)\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆ - \mathbf◆LB◆m◆RB◆◆RB◆◆LB◆r^3◆RB◆\right]$$

This has the same angular structure as the electric dipole field.

**Torque on a dipole** in a uniform field:

$$\boldsymbol◆LB◆\tau◆RB◆ = \mathbf◆LB◆m◆RB◆ \times \mathbf◆LB◆B◆RB◆$$

**Energy of a dipole** in a field:

$$U = -\mathbf◆LB◆m◆RB◆ \cdot \mathbf◆LB◆B◆RB◆$$

**Force on a dipole** in a non-uniform field:

$$\mathbf◆LB◆F◆RB◆ = \nabla(\mathbf◆LB◆m◆RB◆ \cdot \mathbf◆LB◆B◆RB◆)$$

<details>
<summary>Example: Field on the axis of a circular loop</summary>

A circular loop of radius $R$ carries current $I$. On the axis at distance $z$ from the centre,
Every element $d\mathbf◆LB◆l◆RB◆$ is perpendicular to $\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$So:

$$d\mathbf◆LB◆B◆RB◆ = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆dl◆RB◆◆LB◆R^2 + z^2◆RB◆$$

The component perpendicular to the axis cancels by symmetry. The axial component is:

$$B_z = \oint dB\,\sin\alpha = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi(R^2+z^2)◆RB◆\frac◆LB◆R◆RB◆◆LB◆\sqrt◆LB◆R^2+z^2◆RB◆◆RB◆\oint dl = \frac◆LB◆\mu_0 I R^2◆RB◆◆LB◆2(R^2+z^2)^◆LB◆3/2◆RB◆◆RB◆$$

For $z \gg R$: $B_z \approx \frac◆LB◆\mu_0 I R^2◆RB◆◆LB◆2z^3◆RB◆ = \frac◆LB◆\mu_0◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆2\mathbf◆LB◆m◆RB◆◆RB◆◆LB◆z^3◆RB◆$
Which matches the dipole formula with $\mathbf◆LB◆m◆RB◆ = I\pi R^2\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$. $\blacksquare$

</details>

### 3.6 Vector Potential: Detailed Derivation

Starting from the Biot-Savart law and the identity
$\frac◆LB◆\mathbf◆LB◆r◆RB◆ - \mathbf◆LB◆r◆RB◆'◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆-\mathbf◆LB◆r◆RB◆'|^3◆RB◆ = -\nabla\frac◆LB◆1◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆-\mathbf◆LB◆r◆RB◆'|◆RB◆$:

$$\mathbf◆LB◆B◆RB◆(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆\mu_0◆RB◆◆LB◆4\pi◆RB◆\int \mathbf◆LB◆J◆RB◆(\mathbf◆LB◆r◆RB◆') \times \frac◆LB◆(\mathbf◆LB◆r◆RB◆-\mathbf◆LB◆r◆RB◆')◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆-\mathbf◆LB◆r◆RB◆'|^3◆RB◆\,d^3\mathbf◆LB◆r◆RB◆' = -\frac◆LB◆\mu_0◆RB◆◆LB◆4\pi◆RB◆\int \mathbf◆LB◆J◆RB◆(\mathbf◆LB◆r◆RB◆') \times \nabla\frac◆LB◆1◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆-\mathbf◆LB◆r◆RB◆'|◆RB◆\,d^3\mathbf◆LB◆r◆RB◆'$$

Using the product rule
$\mathbf◆LB◆J◆RB◆ \times (\nabla f) = \nabla \times (f\mathbf◆LB◆J◆RB◆) - f(\nabla \times \mathbf◆LB◆J◆RB◆)$ And
noting that $\nabla \times \mathbf◆LB◆J◆RB◆(\mathbf◆LB◆r◆RB◆') = 0$ (since $\mathbf◆LB◆J◆RB◆$ depends on
$\mathbf◆LB◆r◆RB◆'$Not $\mathbf◆LB◆r◆RB◆$):

$$\mathbf◆LB◆B◆RB◆(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆\mu_0◆RB◆◆LB◆4\pi◆RB◆\nabla \times \int \frac◆LB◆\mathbf◆LB◆J◆RB◆(\mathbf◆LB◆r◆RB◆')◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆-\mathbf◆LB◆r◆RB◆'|◆RB◆\,d^3\mathbf◆LB◆r◆RB◆'$$

Comparing with $\mathbf◆LB◆B◆RB◆ = \nabla \times \mathbf◆LB◆A◆RB◆$:

$$\mathbf◆LB◆A◆RB◆(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆\mu_0◆RB◆◆LB◆4\pi◆RB◆\int \frac◆LB◆\mathbf◆LB◆J◆RB◆(\mathbf◆LB◆r◆RB◆')◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆-\mathbf◆LB◆r◆RB◆'|◆RB◆\,d^3\mathbf◆LB◆r◆RB◆'$$

This is the general solution for the vector potential in the Coulomb gauge. For a line current:

$$\mathbf◆LB◆A◆RB◆(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi◆RB◆\oint \frac◆LB◆d\mathbf◆LB◆l◆RB◆'◆RB◆◆LB◆|\mathbf◆LB◆r◆RB◆-\mathbf◆LB◆r◆RB◆'|◆RB◆$$

<details>
<summary>Example: Vector potential of an infinite wire</summary>

An infinite straight wire along the $z$-axis carries current $I$. In cylindrical coordinates
$(s, \phi, z)$The vector potential can only depend on $s$ by symmetry, and must point along
$\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$.

$\mathbf◆LB◆A◆RB◆(s) = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi◆RB◆\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆\frac◆LB◆dz'◆RB◆◆LB◆\sqrt◆LB◆s^2 + z'^2◆RB◆◆RB◆\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$

This integral diverges logarithmically. Introduce a cutoff at $z' = \pm L$:

$\mathbf◆LB◆A◆RB◆(s) \approx \frac◆LB◆\mu_0 I◆RB◆◆LB◆2\pi◆RB◆\ln\!\left(\frac◆LB◆2L◆RB◆◆LB◆s◆RB◆\right)\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆ + \mathrm◆LB◆const$

Since $\mathbf◆LB◆A◆RB◆$ is defined only up to a gauge transformation, we write:

$$\mathbf◆LB◆A◆RB◆(s) = -\frac◆LB◆\mu_0 I◆RB◆◆LB◆2\pi◆RB◆\ln\!\left(\frac◆LB◆s◆RB◆◆LB◆s_0◆RB◆\right)\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$$

Verify:
$\mathbf◆LB◆B◆RB◆ = \nabla \times \mathbf◆LB◆A◆RB◆ = -\frac◆LB◆\partial A_z◆RB◆◆LB◆\partial s◆RB◆\,\hat◆LB◆\boldsymbol◆LB◆\phi◆RB◆◆RB◆ = \frac◆LB◆\mu_0 I◆RB◆◆LB◆2\pi s◆RB◆\,\hat◆LB◆\boldsymbol◆LB◆\phi◆RB◆◆RB◆$.
This matches the Ampere's law result. $\blacksquare$

</details>

### 3.7 Magnetization and the H Field

**Magnetization.** The **magnetization** $\mathbf◆LB◆M◆RB◆$ is the magnetic dipole moment per unit volume.
It produces **bound currents**:

$$\mathbf◆LB◆J◆RB◆_b = \nabla \times \mathbf◆LB◆M◆RB◆, \quad \mathbf◆LB◆K◆RB◆_b = \mathbf◆LB◆M◆RB◆ \times \hat◆LB◆\mathbf◆LB◆n◆RB◆◆RB◆$$

**The H field** (magnetic field intensity) is defined as:

$$\mathbf◆LB◆H◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\mu_0◆RB◆\mathbf◆LB◆B◆RB◆ - \mathbf◆LB◆M◆RB◆$$

Ampere's law for $\mathbf◆LB◆H◆RB◆$:

$$\nabla \times \mathbf◆LB◆H◆RB◆ = \mathbf◆LB◆J◆RB◆_f$$

$$\oint \mathbf◆LB◆H◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = I_◆LB◆f,\mathrm◆LB◆enc◆RB◆$$

This is simpler than Ampere's law for $\mathbf◆LB◆B◆RB◆$ because only _free_ currents appear.

**Linear magnetic materials.** For isotropic linear materials:

$$\mathbf◆LB◆M◆RB◆ = \chi_m \mathbf◆LB◆H◆RB◆, \quad \mathbf◆LB◆B◆RB◆ = \mu \mathbf◆LB◆H◆RB◆$$

Where $\chi_m$ is the magnetic susceptibility and $\mu = \mu_0(1 + \chi_m)$ is the permeability. The
**relative permeability** is $\mu_r = 1 + \chi_m$.

### 3.8 Magnetic Materials

**Diamagnetic materials** ($\chi_m \lt 0$, $\lvert\chi_m\rvert \ll 1$): Weakly repelled by Magnetic
fields. The induced magnetization opposes the applied field (Lenz's law at the Atomic level).
Examples: bismuth, copper, water.

**Paramagnetic materials** ($\chi_m \gt 0$, $\chi_m \ll 1$): Weakly attracted by magnetic fields.
Atomic dipoles align partially with the applied field. Examples: aluminium, platinum, oxygen.

**Ferromagnetic materials** ($\chi_m \gg 1$): Strongly attracted by magnetic fields. Exhibit
**hysteresis**: the magnetization depends on the history of the applied field.

The **hysteresis loop** traces $\mathbf◆LB◆B◆RB◆$ vs $\mathbf◆LB◆H◆RB◆$ as the external field cycles. Key
Features:

- **Remanence** $B_r$: the residual field when $H = 0$.
- **Coercivity** $H_c$: the field required to demagnetize the material.
- **Saturation**: the maximum magnetization achievable.

For soft ferromagnets (iron, nickel), $H_c$ is small and the hysteresis loop is narrow. For hard
ferromagnets (permanent magnets), $H_c$ is large.

:::caution Common Pitfall The magnetic field $\mathbf◆LB◆B◆RB◆$ is the fundamental quantity; $\mathbf◆LB◆H◆RB◆$
is an auxiliary field Convenient for problems with free currents. The names "magnetic field" and
"magnetic field Intensity" vary across textbooks --- always check which symbol a given text
associates with Which name. In this document, $\mathbf◆LB◆B◆RB◆$ is the magnetic field and $\mathbf◆LB◆H◆RB◆$ is
the Auxiliary H field. :::

## 4. Electrodynamics

### 4.1 Faraday's Law of Induction

A changing magnetic field induces an electric field:

$$\nabla \times \mathbf◆LB◆E◆RB◆ = -\frac◆LB◆\partial \mathbf◆LB◆B◆RB◆◆RB◆◆LB◆\partial t◆RB◆$$

**Lenz's Law:** The induced EMF opposes the change in flux that produced it.

**Example.** A circular loop of radius $R$ in a uniform magnetic field
$\mathbf◆LB◆B◆RB◆(t) = B_0 \cos(\omega t)\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$.

The flux: $\Phi_B = \pi R^2 B_0 \cos(\omega t)$.

The induced EMF: $\mathcal◆LB◆E◆RB◆ = -\frac◆LB◆d\Phi_B◆RB◆◆LB◆dt◆RB◆ = \pi R^2 B_0 \omega \sin(\omega t)$.

### 4.2 Displacement Current

Maxwell's key insight: Ampere's law $\nabla \times \mathbf◆LB◆B◆RB◆ = \mu_0 \mathbf◆LB◆J◆RB◆$ is inconsistent
with The continuity equation. Adding the **displacement current** term
$\mu_0 \varepsilon_0 \partial \mathbf◆LB◆E◆RB◆/\partial t$ Resolves this:

$$\nabla \times \mathbf◆LB◆B◆RB◆ = \mu_0 \mathbf◆LB◆J◆RB◆ + \mu_0 \varepsilon_0 \frac◆LB◆\partial \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t◆RB◆$$

### 4.3 Worked Example

**Problem.** A parallel-plate capacitor with circular plates of radius $R$ is being charged by a
Current $I$. Find the magnetic field between the plates at distance $r$ from the axis.

_Solution._ Between the plates, $\mathbf◆LB◆J◆RB◆ = 0$But there is a changing electric field. The
Displacement current density is $J_d = \varepsilon_0 \frac◆LB◆\partial E◆RB◆◆LB◆\partial t◆RB◆$.

$E = \frac◆LB◆\sigma◆RB◆◆LB◆\varepsilon_0◆RB◆ = \frac◆LB◆Q◆RB◆◆LB◆\pi R^2 \varepsilon_0◆RB◆$So
$\frac◆LB◆\partial E◆RB◆◆LB◆\partial t◆RB◆ = \frac◆LB◆I◆RB◆◆LB◆\pi R^2 \varepsilon_0◆RB◆$.

By symmetry, use an Amperian loop of radius $r \lt R$:

$$\oint \mathbf◆LB◆B◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = \mu_0 \varepsilon_0 \frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆\int \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆$$

$$B \cdot 2\pi r = \mu_0 \varepsilon_0 \cdot \frac◆LB◆I◆RB◆◆LB◆\pi R^2 \varepsilon_0◆RB◆ \cdot \pi r^2 = \frac◆LB◆\mu_0 I r^2◆RB◆◆LB◆R^2◆RB◆$$

$$B = \frac◆LB◆\mu_0 I r◆RB◆◆LB◆2\pi R^2◆RB◆$$

$\blacksquare$

### 4.4 Motional EMF

When a conductor moves through a magnetic field, the Lorentz force on the charges produces an EMF:

$$\mathcal◆LB◆E◆RB◆ = \oint (\mathbf◆LB◆v◆RB◆ \times \mathbf◆LB◆B◆RB◆) \cdot d\mathbf◆LB◆l◆RB◆$$

This is consistent with the flux rule $\mathcal◆LB◆E◆RB◆ = -d\Phi_B/dt$ since changing the Circuit's
geometry or position changes the flux.

<details>
<summary>Example: Rod sliding on rails</summary>

A conducting rod of length $L$ slides with velocity $v$ along two parallel rails connected by A
resistor $R$In a uniform magnetic field $\mathbf◆LB◆B◆RB◆ = B\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$ perpendicular to The rail
plane.

The motional EMF:

$$\mathcal◆LB◆E◆RB◆ = \int_0^L (\mathbf◆LB◆v◆RB◆ \times \mathbf◆LB◆B◆RB◆) \cdot d\mathbf◆LB◆l◆RB◆ = vBL$$

The induced current: $I = \mathcal◆LB◆E◆RB◆/R = vBL/R$.

The magnetic force on the rod: $F = BIL = B^2L^2v/R$ (opposing the motion, by Lenz's law).

The power dissipated: $P = I^2R = v^2B^2L^2/R$Which equals the mechanical power $Fv$ Supplied to the
rod. $\blacksquare$

</details>

### 4.5 Derivation of Maxwell's Correction

**Problem with Ampere's original law.** The original Ampere's law was
$\nabla \times \mathbf◆LB◆B◆RB◆ = \mu_0 \mathbf◆LB◆J◆RB◆$. Taking the divergence:

$$\nabla \cdot (\nabla \times \mathbf◆LB◆B◆RB◆) = 0 = \mu_0 \nabla \cdot \mathbf◆LB◆J◆RB◆$$

This requires $\nabla \cdot \mathbf◆LB◆J◆RB◆ = 0$ at all times, which contradicts the continuity Equation
$\nabla \cdot \mathbf◆LB◆J◆RB◆ = -\partial\rho/\partial t$ whenever charge density changes.

**Resolution.** Use Gauss's law to rewrite the continuity equation:

$$\nabla \cdot \mathbf◆LB◆J◆RB◆ = -\frac◆LB◆\partial\rho◆RB◆◆LB◆\partial t◆RB◆ = -\frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆(\varepsilon_0 \nabla \cdot \mathbf◆LB◆E◆RB◆) = -\nabla \cdot \left(\varepsilon_0\frac◆LB◆\partial \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t◆RB◆\right)$$

$$\nabla \cdot \left(\mathbf◆LB◆J◆RB◆ + \varepsilon_0\frac◆LB◆\partial \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t◆RB◆\right) = 0$$

This suggests modifying Ampere's law to:

$$\nabla \times \mathbf◆LB◆B◆RB◆ = \mu_0 \mathbf◆LB◆J◆RB◆ + \mu_0 \varepsilon_0 \frac◆LB◆\partial \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t◆RB◆$$

Now taking the divergence gives zero identically, consistent with charge conservation. The Term
$\mu_0 \varepsilon_0\,\partial\mathbf◆LB◆E◆RB◆/\partial t$ is the **displacement current**.

**Physical interpretation.** The displacement current represents the time-varying electric field
That produces a magnetic field just as a real current does. It is essential inside capacitors, Where
$\mathbf◆LB◆J◆RB◆ = 0$ but $\partial\mathbf◆LB◆E◆RB◆/\partial t \neq 0$.

### 4.6 Electromagnetic Induction: Worked Examples

<details>
<summary>Example: Loop falling through a magnetic field</summary>

A rectangular loop of width $w$Height $\ell$And resistance $R$ falls vertically under Gravity
through a region of uniform magnetic field $\mathbf◆LB◆B◆RB◆ = B\,\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆$ confined To a
horizontal strip of height $h$.

As the loop enters the field (top edge in, bottom edge out), the flux is $\Phi_B = Bwx$ where $x$ is
the distance the top edge has penetrated.

The induced EMF: $\mathcal◆LB◆E◆RB◆ = -Bw\,dx/dt = -Bwv$.

The induced current: $I = Bwv/R$Flowing to oppose the change in flux (Lenz's law).

The braking force: $F = BwI = B^2w^2v/R$ (upward).

Terminal velocity: $mg = B^2w^2v_◆LB◆\mathrm◆LB◆term◆RB◆/R \implies v_◆LB◆\mathrm◆LB◆term◆RB◆ = mgR/(B^2w^2)$.

While entirely inside the field, $\Phi_B$ is constant, so $\mathcal◆LB◆E◆RB◆ = 0$ and the loop Falls
freely. As it exits, the braking force reappears. $\blacksquare$

</details>

**Mutual inductance.** When circuit 1 produces flux $\Phi_◆LB◆21◆RB◆$ through circuit 2:

$$M = \frac◆LB◆\Phi_◆LB◆21◆RB◆◆RB◆◆LB◆I_1◆RB◆$$

The EMF induced in circuit 2 by a changing current in circuit 1:

$$\mathcal◆LB◆E◆RB◆_2 = -M\frac◆LB◆dI_1◆RB◆◆LB◆dt◆RB◆$$

**Self-inductance.** A circuit carrying current $I$ produces flux $\Phi$ through itself:

$$L = \frac◆LB◆N\Phi◆RB◆◆LB◆I◆RB◆$$

The back-EMF:

$$\mathcal◆LB◆E◆RB◆ = -L\frac◆LB◆dI◆RB◆◆LB◆dt◆RB◆$$

**Energy stored** in an inductor:

$$U = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆LI^2$$

**Example: Solenoid.** A long solenoid of length $\ell$ with $N$ turns, cross-sectional area $A$:

$$L = \frac◆LB◆\mu_0 N^2 A◆RB◆◆LB◆\ell◆RB◆$$

## 5. Electromagnetic Waves

### 5.1 The Wave Equation

In free space ($\rho = 0$, $\mathbf◆LB◆J◆RB◆ = \mathbf◆LB◆0◆RB◆$), take the curl of Faraday's law:

$$\nabla \times (\nabla \times \mathbf◆LB◆E◆RB◆) = -\frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆(\nabla \times \mathbf◆LB◆B◆RB◆) = -\mu_0 \varepsilon_0 \frac◆LB◆\partial^2 \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆$$

Using the identity
$\nabla \times (\nabla \times \mathbf◆LB◆E◆RB◆) = \nabla(\nabla \cdot \mathbf◆LB◆E◆RB◆) - \nabla^2 \mathbf◆LB◆E◆RB◆$
And $\nabla \cdot \mathbf◆LB◆E◆RB◆ = 0$:

$$\nabla^2 \mathbf◆LB◆E◆RB◆ = \mu_0 \varepsilon_0 \frac◆LB◆\partial^2 \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆$$

Similarly: $\nabla^2 \mathbf◆LB◆B◆RB◆ = \mu_0 \varepsilon_0 \frac◆LB◆\partial^2 \mathbf◆LB◆B◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆$.

These are **wave equations** with wave speed
$c = 1/\sqrt◆LB◆\mu_0 \varepsilon_0◆RB◆ \approx 3 \times 10^8$ m/s.

### 5.2 Properties of EM Waves

**Theorem 5.1.** Electromagnetic waves in free space are:

1. **Transverse**: $\mathbf◆LB◆E◆RB◆$ and $\mathbf◆LB◆B◆RB◆$ are perpendicular to the direction of propagation.
2. **Mutually perpendicular**: $\mathbf◆LB◆E◆RB◆ \perp \mathbf◆LB◆B◆RB◆$.
3. **In phase**: $E = cB$ at every point.
4. **Linearly polarised** (; other polarisations are superpositions).

**Energy.** The energy density of an EM wave is $u = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(\varepsilon_0 E^2 + B^2/\mu_0)$.

The **Poynting vector** $\mathbf◆LB◆S◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\mu_0◆RB◆\mathbf◆LB◆E◆RB◆ \times \mathbf◆LB◆B◆RB◆$ represents the
energy Flux (power per unit area).

### 5.3 Worked Example

**Problem.** Show that $\mathbf◆LB◆E◆RB◆ = E_0 \cos(kz - \omega t)\,\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆$ satisfies the wave
Equation and find the associated $\mathbf◆LB◆B◆RB◆$ field.

_Solution._
$\nabla^2 \mathbf◆LB◆E◆RB◆ = \frac◆LB◆\partial^2 E_x◆RB◆◆LB◆\partial z^2◆RB◆\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆ = -k^2 E_0 \cos(kz - \omega t)\,\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆$.

$\frac◆LB◆\partial^2 \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆ = -\omega^2 E_0 \cos(kz - \omega t)\,\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆$.

The wave equation requires $k^2 = \mu_0 \varepsilon_0 \omega^2$I.e., $\omega/k = c$.

From Faraday's law: $\nabla \times \mathbf◆LB◆E◆RB◆ = -\frac◆LB◆\partial \mathbf◆LB◆B◆RB◆◆RB◆◆LB◆\partial t◆RB◆$.

$(\nabla \times \mathbf◆LB◆E◆RB◆)_y = -\frac◆LB◆\partial E_x◆RB◆◆LB◆\partial z◆RB◆ = k E_0 \sin(kz - \omega t)$

$\frac◆LB◆\partial B_y◆RB◆◆LB◆\partial t◆RB◆ = -k E_0 \sin(kz - \omega t) \implies B_y = \frac◆LB◆k◆RB◆◆LB◆\omega◆RB◆ E_0 \cos(kz - \omega t) = \frac◆LB◆E_0◆RB◆◆LB◆c◆RB◆\cos(kz - \omega t)$

So $\mathbf◆LB◆B◆RB◆ = \frac◆LB◆E_0◆RB◆◆LB◆c◆RB◆\cos(kz - \omega t)\,\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆$. $\blacksquare$

### 5.4 Poynting's Theorem and Energy Conservation

Poynting's theorem is the statement of energy conservation for electromagnetic fields.

**Derivation.** Start with the two Maxwell equations containing time derivatives:

$$\nabla \times \mathbf◆LB◆E◆RB◆ = -\frac◆LB◆\partial \mathbf◆LB◆B◆RB◆◆RB◆◆LB◆\partial t◆RB◆, \quad \nabla \times \mathbf◆LB◆B◆RB◆ = \mu_0 \mathbf◆LB◆J◆RB◆ + \mu_0 \varepsilon_0 \frac◆LB◆\partial \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t◆RB◆$$

Compute $\mathbf◆LB◆B◆RB◆ \cdot (\nabla \times \mathbf◆LB◆E◆RB◆) - \mathbf◆LB◆E◆RB◆ \cdot (\nabla \times \mathbf◆LB◆B◆RB◆)$:

$$\mathbf◆LB◆B◆RB◆ \cdot (\nabla \times \mathbf◆LB◆E◆RB◆) = -\mathbf◆LB◆B◆RB◆ \cdot \frac◆LB◆\partial \mathbf◆LB◆B◆RB◆◆RB◆◆LB◆\partial t◆RB◆ = -\frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆\left(\frac◆LB◆B^2◆RB◆◆LB◆2◆RB◆\right)$$

$$-\mathbf◆LB◆E◆RB◆ \cdot (\nabla \times \mathbf◆LB◆B◆RB◆) = -\mu_0 \mathbf◆LB◆E◆RB◆ \cdot \mathbf◆LB◆J◆RB◆ - \mu_0 \varepsilon_0 \mathbf◆LB◆E◆RB◆ \cdot \frac◆LB◆\partial \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t◆RB◆ = -\mu_0 \mathbf◆LB◆E◆RB◆ \cdot \mathbf◆LB◆J◆RB◆ - \frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆\left(\frac◆LB◆\varepsilon_0 E^2◆RB◆◆LB◆2◆RB◆\right)$$

Using the vector identity
$\nabla \cdot (\mathbf◆LB◆E◆RB◆ \times \mathbf◆LB◆B◆RB◆) = \mathbf◆LB◆B◆RB◆ \cdot (\nabla \times \mathbf◆LB◆E◆RB◆) - \mathbf◆LB◆E◆RB◆ \cdot (\nabla \times \mathbf◆LB◆B◆RB◆)$:

$$\nabla \cdot (\mathbf◆LB◆E◆RB◆ \times \mathbf◆LB◆B◆RB◆) = -\mu_0 \mathbf◆LB◆J◆RB◆ \cdot \mathbf◆LB◆E◆RB◆ - \mu_0 \varepsilon_0 \frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆\left(\frac◆LB◆E^2◆RB◆◆LB◆2◆RB◆\right) - \frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆\left(\frac◆LB◆B^2◆RB◆◆LB◆2◆RB◆\right)$$

Dividing by $\mu_0$ and rearranging:

$$\boxed◆LB◆-\nabla \cdot \mathbf◆LB◆S◆RB◆ = \mathbf◆LB◆J◆RB◆ \cdot \mathbf◆LB◆E◆RB◆ + \frac◆LB◆\partial u◆RB◆◆LB◆\partial t◆RB◆◆RB◆$$

Where $\mathbf◆LB◆S◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\mu_0◆RB◆\mathbf◆LB◆E◆RB◆ \times \mathbf◆LB◆B◆RB◆$ is the Poynting vector and
$u = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left(\varepsilon_0 E^2 + \frac◆LB◆B^2◆RB◆◆LB◆\mu_0◆RB◆\right)$ is the energy density.

**Interpretation:** The rate of energy leaving a volume equals the work done on charges plus The
rate of increase of field energy. In integral form:

$$-\oint_S \mathbf◆LB◆S◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆ = \frac◆LB◆d◆RB◆◆LB◆dt◆RB◆\int_V u\,dV + \int_V \mathbf◆LB◆J◆RB◆ \cdot \mathbf◆LB◆E◆RB◆\,dV$$

### 5.5 EM Wave Propagation: Worked Examples

**Intensity.** For a plane wave, the time-averaged Poynting vector is:

$$\langle\mathbf◆LB◆S◆RB◆\rangle = \frac◆LB◆E_0^2◆RB◆◆LB◆2\mu_0 c◆RB◆\,\hat◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\varepsilon_0 c E_0^2\,\hat◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆$$

<details>
<summary>Example: Radiation pressure</summary>

A plane wave normally incident on a perfectly absorbing surface exerts a radiation pressure. The
momentum flux of the wave is $\langle S \rangle/c$ per unit area, so:

$$P_◆LB◆\mathrm◆LB◆abs◆RB◆ = \frac◆LB◆\langle S \rangle◆RB◆◆LB◆c◆RB◆ = \frac◆LB◆\varepsilon_0 E_0^2◆RB◆◆LB◆2◆RB◆$$

For a perfectly reflecting surface, the momentum transfer is doubled:

$$P_◆LB◆\mathrm◆LB◆ref◆RB◆ = \frac◆LB◆2\langle S \rangle◆RB◆◆LB◆c◆RB◆ = \varepsilon_0 E_0^2$$

A 1 kW/m$^2$ beam (like sunlight near Earth) exerts a pressure of about $3.3\ \mu$Pa on a Perfect
absorber. $\blacksquare$

</details>

<details>
<summary>Example: Polarization of EM waves</summary>

**Linear polarization.** $\mathbf◆LB◆E◆RB◆ = E_0\cos(kz - \omega t)\,\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆$. The field
Oscillates in a fixed direction.

**Circular polarization.** Two orthogonal linear polarizations with a phase difference of $\pi/2$:

$$\mathbf◆LB◆E◆RB◆ = E_0\cos(kz - \omega t)\,\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆ \pm E_0\sin(kz - \omega t)\,\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆$$

The tip of $\mathbf◆LB◆E◆RB◆$ traces a circle. The $+$ sign gives left-circular polarization (LCP) and the
$-$ sign gives right-circular polarization (RCP).

**Elliptical polarization.** The general case with arbitrary amplitudes and phase:

$$\mathbf◆LB◆E◆RB◆ = E_◆LB◆0x◆RB◆\cos(kz - \omega t)\,\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆ + E_◆LB◆0y◆RB◆\cos(kz - \omega t + \delta)\,\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆$$

$\blacksquare$

</details>

### 5.6 EM Waves in Conductors

In a conductor with conductivity $\sigma$Ohm's law gives $\mathbf◆LB◆J◆RB◆ = \sigma\mathbf◆LB◆E◆RB◆$.
Substituting into the Ampere-Maxwell law:

$$\nabla \times \mathbf◆LB◆B◆RB◆ = \mu_0\sigma\mathbf◆LB◆E◆RB◆ + \mu_0\varepsilon_0\frac◆LB◆\partial \mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t◆RB◆$$

For a monochromatic wave $\mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆E◆RB◆_0\,e^◆LB◆-i\omega t◆RB◆$This leads to a complex Wave
number:

$$\tilde◆LB◆k◆RB◆^2 = \mu_0\varepsilon_0\omega^2 + i\mu_0\sigma\omega$$

Writing $\tilde◆LB◆k◆RB◆ = k + i\kappa$ where $k$ is the real part (wave number) and $\kappa$ is the
Imaginary part (attenuation constant):

$$\mathbf◆LB◆E◆RB◆(z,t) = \mathbf◆LB◆E◆RB◆_0\,e^◆LB◆-\kappa z◆RB◆\cos(kz - \omega t)$$

The field decays exponentially. The **skin depth** is the distance over which the amplitude Falls by
a factor of $1/e$:

$$\delta = \frac◆LB◆1◆RB◆◆LB◆\kappa◆RB◆$$

For a good conductor ($\sigma \gg \varepsilon_0\omega$):

$$\delta = \sqrt◆LB◆\frac◆LB◆2◆RB◆◆LB◆\mu_0\sigma\omega◆RB◆◆RB◆$$

<details>
<summary>Example: Skin depth in copper at 60 Hz and 1 MHz</summary>

Copper: $\sigma = 5.96 \times 10^7$ S/m, $\mu_r \approx 1$.

At $f = 60$ Hz ($\omega = 2\pi \times 60$ rad/s):

$$\delta = \sqrt◆LB◆\frac◆LB◆2◆RB◆◆LB◆4\pi \times 10^◆LB◆-7◆RB◆ \times 5.96 \times 10^7 \times 2\pi \times 60◆RB◆◆RB◆ \approx 8.5\ \mathrm◆LB◆mm$$

At $f = 1$ MHz ($\omega = 2\pi \times 10^6$ rad/s):

$$\delta = \sqrt◆LB◆\frac◆LB◆2◆RB◆◆LB◆4\pi \times 10^◆LB◆-7◆RB◆ \times 5.96 \times 10^7 \times 2\pi \times 10^6◆RB◆◆RB◆ \approx 65\ \mu\mathrm◆LB◆m$$

The skin depth decreases as $1/\sqrt◆LB◆f◆RB◆$So higher-frequency signals are confined to thinner Surface
layers. $\blacksquare$

</details>

### 5.7 Waveguides

Electromagnetic waves can be guided by hollow conducting pipes (waveguides). Consider a Rectangular
waveguide with dimensions $a$ (width) and $b$ (height).

**TE modes** (transverse electric, $E_z = 0$, $B_z \neq 0$). The lowest-order mode is
$\mathrm◆LB◆TE_◆LB◆10◆RB◆$With fields:

$$E_y = E_0 \sin\!\left(\frac◆LB◆\pi x◆RB◆◆LB◆a◆RB◆\right)\cos(k_g z - \omega t)$$

$$B_x = -\frac◆LB◆k_g◆RB◆◆LB◆\omega◆RB◆E_0 \sin\!\left(\frac◆LB◆\pi x◆RB◆◆LB◆a◆RB◆\right)\cos(k_g z - \omega t)$$

$$B_z = \frac◆LB◆\pi◆RB◆◆LB◆\omega a◆RB◆E_0 \cos\!\left(\frac◆LB◆\pi x◆RB◆◆LB◆a◆RB◆\right)\sin(k_g z - \omega t)$$

Where the **guide wave number** is $k_g = \sqrt◆LB◆(\omega/c)^2 - (\pi/a)^2◆RB◆$.

**Cutoff frequency.** Waves propagate only when $\omega \gt \omega_c$ where:

$$\omega_◆LB◆c,mn◆RB◆ = c\pi\sqrt◆LB◆\left(\frac◆LB◆m◆RB◆◆LB◆a◆RB◆\right)^2 + \left(\frac◆LB◆n◆RB◆◆LB◆b◆RB◆\right)^2◆RB◆$$

For the $\mathrm◆LB◆TE_◆LB◆10◆RB◆$ mode: $f_c = \frac◆LB◆c◆RB◆◆LB◆2a◆RB◆$.

**Phase and group velocities.** In a waveguide, the phase velocity exceeds $c$:

$$v_p = \frac◆LB◆\omega◆RB◆◆LB◆k_g◆RB◆ = \frac◆LB◆c◆RB◆◆LB◆\sqrt◆LB◆1 - (\omega_c/\omega)^2◆RB◆◆RB◆ \gt c$$

The group velocity (signal velocity) is less than $c$:

$$v_g = \frac◆LB◆d\omega◆RB◆◆LB◆dk_g◆RB◆ = c\sqrt◆LB◆1 - (\omega_c/\omega)^2◆RB◆ \lt c$$

They satisfy $v_p\,v_g = c^2$.

:::caution Common Pitfall The phase velocity in a waveguide exceeds $c$But this does not violate
special relativity. No information or energy travels faster than $c$; the signal velocity is the
group velocity $v_g \lt c$. The phase velocity is the speed of the wave crests, which is a purely
Kinematic quantity. :::

### 5.8 Electric Dipole Radiation

An oscillating electric dipole is the simplest source of electromagnetic radiation.

Consider a dipole $\mathbf◆LB◆p◆RB◆(t) = p_0\cos(\omega t)\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$. In the **radiation zone**
($r \gg \lambda$), the fields are:

$$\mathbf◆LB◆E◆RB◆ = -\frac◆LB◆\mu_0 p_0 \omega^2◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆\sin\theta◆RB◆◆LB◆r◆RB◆\cos[\omega(t - r/c)]\,\hat◆LB◆\boldsymbol◆LB◆\theta◆RB◆◆RB◆$$

$$\mathbf◆LB◆B◆RB◆ = -\frac◆LB◆\mu_0 p_0 \omega^2◆RB◆◆LB◆4\pi c◆RB◆\frac◆LB◆\sin\theta◆RB◆◆LB◆r◆RB◆\cos[\omega(t - r/c)]\,\hat◆LB◆\boldsymbol◆LB◆\phi◆RB◆◆RB◆$$

The fields fall off as $1/r$ (not $1/r^2$ as for static fields), which is characteristic of
Radiation.

**Radiation pattern.** The intensity varies as $\sin^2\theta$With maximum radiation in the
Equatorial plane ($\theta = \pi/2$) and zero along the dipole axis ($\theta = 0, \pi$).

**Total radiated power.** Integrating the Poynting vector over a sphere:

$$P = \frac◆LB◆\mu_0 p_0^2 \omega^4◆RB◆◆LB◆12\pi c◆RB◆$$

**Larmor formula.** For a point charge $q$ undergoing acceleration $a$:

$$P = \frac◆LB◆q^2 a^2◆RB◆◆LB◆6\pi\varepsilon_0 c^3◆RB◆$$

This is the non-relativistic limit and is valid whenever $v \ll c$.

<details>
<summary>Derivation: Power radiated by an oscillating dipole</summary>

The time-averaged Poynting vector magnitude in the radiation zone:

$$\langle S \rangle = \frac◆LB◆1◆RB◆◆LB◆2\mu_0◆RB◆\lvert E_\theta\rvert\,\lvert B_\phi\rvert = \frac◆LB◆\mu_0 p_0^2\omega^4◆RB◆◆LB◆32\pi^2 c◆RB◆\frac◆LB◆\sin^2\theta◆RB◆◆LB◆r^2◆RB◆$$

The total power through a sphere of radius $r$:

$$P = \int_0^◆LB◆2\pi◆RB◆\!\!\int_0^\pi \langle S \rangle\, r^2\sin\theta\,d\theta\,d\phi = \frac◆LB◆\mu_0 p_0^2\omega^4◆RB◆◆LB◆32\pi^2 c◆RB◆ \cdot 2\pi \int_0^\pi \sin^3\theta\,d\theta$$

Using $\int_0^\pi \sin^3\theta\,d\theta = 4/3$:

$$P = \frac◆LB◆\mu_0 p_0^2\omega^4◆RB◆◆LB◆32\pi^2 c◆RB◆ \cdot 2\pi \cdot \frac◆LB◆4◆RB◆◆LB◆3◆RB◆ = \frac◆LB◆\mu_0 p_0^2\omega^4◆RB◆◆LB◆12\pi c◆RB◆$$

$\blacksquare$

</details>

## 6. Potentials and Gauge Transformations

### 6.1 Scalar and Vector Potentials

We can express the fields in terms of potentials:

$$\mathbf◆LB◆E◆RB◆ = -\nabla V - \frac◆LB◆\partial \mathbf◆LB◆A◆RB◆◆RB◆◆LB◆\partial t◆RB◆, \quad \mathbf◆LB◆B◆RB◆ = \nabla \times \mathbf◆LB◆A◆RB◆$$

In electrostatics, $\mathbf◆LB◆A◆RB◆ = \mathbf◆LB◆0◆RB◆$ and $\mathbf◆LB◆E◆RB◆ = -\nabla V$.

### 6.2 Gauge Transformations

The potentials are not unique. The transformation

$$V' = V - \frac◆LB◆\partial \chi◆RB◆◆LB◆\partial t◆RB◆, \quad \mathbf◆LB◆A◆RB◆' = \mathbf◆LB◆A◆RB◆ + \nabla \chi$$

For any scalar function $\chi(\mathbf◆LB◆r◆RB◆, t)$ leaves $\mathbf◆LB◆E◆RB◆$ and $\mathbf◆LB◆B◆RB◆$ unchanged. This
is a **gauge transformation**.

**Common gauges:**

- **Coulomb gauge:** $\nabla \cdot \mathbf◆LB◆A◆RB◆ = 0$. Useful in magnetostatics.
- **Lorenz gauge:**
  $\nabla \cdot \mathbf◆LB◆A◆RB◆ + \mu_0 \varepsilon_0 \frac◆LB◆\partial V◆RB◆◆LB◆\partial t◆RB◆ = 0$. Simplifies the
  wave equations for $V$ and $\mathbf◆LB◆A◆RB◆$:

$$\nabla^2 V - \mu_0 \varepsilon_0 \frac◆LB◆\partial^2 V◆RB◆◆LB◆\partial t^2◆RB◆ = -\frac◆LB◆\rho◆RB◆◆LB◆\varepsilon_0◆RB◆$$

$$\nabla^2 \mathbf◆LB◆A◆RB◆ - \mu_0 \varepsilon_0 \frac◆LB◆\partial^2 \mathbf◆LB◆A◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆ = -\mu_0 \mathbf◆LB◆J◆RB◆$$

:::caution Common Pitfall The Lorenz gauge (with one "r") is named after Ludvig Lorenz, not Hendrik
Lorentz. It is frequently Misspelled "Lorentz gauge." The two are different people, and the correct
spelling is "Lorenz gauge." :::

### 6.3 Derivation of the Lorenz Gauge Condition

Starting from the definitions $\mathbf◆LB◆E◆RB◆ = -\nabla V - \partial\mathbf◆LB◆A◆RB◆/\partial t$ and
$\mathbf◆LB◆B◆RB◆ = \nabla \times \mathbf◆LB◆A◆RB◆$Substitute into Gauss's law:

$$\nabla \cdot \mathbf◆LB◆E◆RB◆ = -\nabla^2 V - \frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆(\nabla \cdot \mathbf◆LB◆A◆RB◆) = \frac◆LB◆\rho◆RB◆◆LB◆\varepsilon_0◆RB◆$$

$$\nabla^2 V + \frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆(\nabla \cdot \mathbf◆LB◆A◆RB◆) = -\frac◆LB◆\rho◆RB◆◆LB◆\varepsilon_0◆RB◆ \tag◆LB◆6.1◆RB◆$$

Substitute into the Ampere-Maxwell law:

$$\nabla \times \mathbf◆LB◆B◆RB◆ = \nabla(\nabla \cdot \mathbf◆LB◆A◆RB◆) - \nabla^2 \mathbf◆LB◆A◆RB◆ = \mu_0\mathbf◆LB◆J◆RB◆ + \mu_0\varepsilon_0\frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆(-\nabla V - \frac◆LB◆\partial\mathbf◆LB◆A◆RB◆◆RB◆◆LB◆\partial t◆RB◆)$$

$$\nabla^2 \mathbf◆LB◆A◆RB◆ - \mu_0\varepsilon_0\frac◆LB◆\partial^2 \mathbf◆LB◆A◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆ = -\mu_0\mathbf◆LB◆J◆RB◆ + \nabla\!\left(\nabla \cdot \mathbf◆LB◆A◆RB◆ + \mu_0\varepsilon_0\frac◆LB◆\partial V◆RB◆◆LB◆\partial t◆RB◆\right) \tag◆LB◆6.2◆RB◆$$

Equations (6.1) and (6.2) are coupled through the term
$\nabla \cdot \mathbf◆LB◆A◆RB◆ + \mu_0\varepsilon_0\,\partial V/\partial t$.

**The Lorenz gauge** sets this term to zero:

$$\nabla \cdot \mathbf◆LB◆A◆RB◆ + \mu_0\varepsilon_0\frac◆LB◆\partial V◆RB◆◆LB◆\partial t◆RB◆ = 0$$

This is always achievable. If the current potentials do not satisfy this condition, perform a Gauge
transformation with $\chi$ satisfying:

$$\nabla^2\chi - \mu_0\varepsilon_0\frac◆LB◆\partial^2\chi◆RB◆◆LB◆\partial t^2◆RB◆ = -\left(\nabla \cdot \mathbf◆LB◆A◆RB◆ + \mu_0\varepsilon_0\frac◆LB◆\partial V◆RB◆◆LB◆\partial t◆RB◆\right)$$

In the Lorenz gauge, (6.1) and (6.2) decouple into inhomogeneous wave equations:

$$\nabla^2 V - \mu_0\varepsilon_0\frac◆LB◆\partial^2 V◆RB◆◆LB◆\partial t^2◆RB◆ = -\frac◆LB◆\rho◆RB◆◆LB◆\varepsilon_0◆RB◆$$

$$\nabla^2 \mathbf◆LB◆A◆RB◆ - \mu_0\varepsilon_0\frac◆LB◆\partial^2 \mathbf◆LB◆A◆RB◆◆RB◆◆LB◆\partial t^2◆RB◆ = -\mu_0\mathbf◆LB◆J◆RB◆$$

Both $V$ and $\mathbf◆LB◆A◆RB◆$ satisfy wave equations with sources $\rho/\varepsilon_0$ and
$\mu_0\mathbf◆LB◆J◆RB◆$ And both propagate at speed $c$. The Lorenz gauge makes manifest the relativistic
covariance Of the theory (Section 7).

### 6.4 Retarded Potentials

The inhomogeneous wave equations in the Lorenz gauge have causal solutions --- the potentials At
$(\mathbf◆LB◆r◆RB◆, t)$ depend on the sources at the **retarded time** $t_r = t - R/c$ where
$R = \lvert\mathbf◆LB◆r◆RB◆ - \mathbf◆LB◆r◆RB◆'\rvert$:

$$V(\mathbf◆LB◆r◆RB◆, t) = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\int \frac◆LB◆\rho(\mathbf◆LB◆r◆RB◆', t_r)◆RB◆◆LB◆R◆RB◆\,d^3\mathbf◆LB◆r◆RB◆'$$

$$\mathbf◆LB◆A◆RB◆(\mathbf◆LB◆r◆RB◆, t) = \frac◆LB◆\mu_0◆RB◆◆LB◆4\pi◆RB◆\int \frac◆LB◆\mathbf◆LB◆J◆RB◆(\mathbf◆LB◆r◆RB◆', t_r)◆RB◆◆LB◆R◆RB◆\,d^3\mathbf◆LB◆r◆RB◆'$$

**Physical interpretation.** Information about changes in the source travels outward at speed $c$.
The field at point $\mathbf◆LB◆r◆RB◆$ and time $t$ is determined by the source configuration at the
Earlier time $t_r$ when a light signal would have left $\mathbf◆LB◆r◆RB◆'$ to arrive at $\mathbf◆LB◆r◆RB◆$ at
Time $t$.

<details>
<summary>Verification that retarded potentials satisfy the wave equation</summary>

We verify for $V$; the argument for $\mathbf◆LB◆A◆RB◆$ is identical. Define

$$V(\mathbf◆LB◆r◆RB◆, t) = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\int \frac◆LB◆[\rho]◆RB◆◆LB◆R◆RB◆\,d^3\mathbf◆LB◆r◆RB◆'$$

Where $[\rho] = \rho(\mathbf◆LB◆r◆RB◆', t - R/c)$. Applying the d'Alembertian operator
$\square^2 = \nabla^2 - \frac◆LB◆1◆RB◆◆LB◆c^2◆RB◆\frac◆LB◆\partial^2◆RB◆◆LB◆\partial t^2◆RB◆$ and carefully Differentiating
under the integral (the derivatives act on both the explicit $1/R$ and the Implicit $R$ in $[\rho]$
through $t_r$):

$$\square^2 V = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\int \left[\frac◆LB◆\square^2[\rho]◆RB◆◆LB◆R◆RB◆\right] d^3\mathbf◆LB◆r◆RB◆'$$

The key identity is $\square^2(f(t_r)/R) = -4\pi f(t)\,\delta^3(\mathbf◆LB◆r◆RB◆ - \mathbf◆LB◆r◆RB◆')$Which
Follows from the fact that $\nabla^2(1/R) = -4\pi\delta^3(\mathbf◆LB◆r◆RB◆ - \mathbf◆LB◆r◆RB◆')$ and that the
Time derivatives cancel the $1/R$ propagation effects. Therefore:

$$\square^2 V = -\frac◆LB◆1◆RB◆◆LB◆\varepsilon_0◆RB◆\int \rho(\mathbf◆LB◆r◆RB◆', t)\,\delta^3(\mathbf◆LB◆r◆RB◆ - \mathbf◆LB◆r◆RB◆')\,d^3\mathbf◆LB◆r◆RB◆' = -\frac◆LB◆\rho(\mathbf◆LB◆r◆RB◆, t)◆RB◆◆LB◆\varepsilon_0◆RB◆$$

This confirms that $V$ satisfies the wave equation. $\blacksquare$

</details>

### 6.5 Lienard-Wiechert Potentials

For a **moving point charge** $q$ following trajectory $\mathbf◆LB◆r◆RB◆_s(t)$The retarded potentials
Cannot be evaluated naively because the retarded time $t_r$ satisfies a non-trivial equation:

$$c(t - t_r) = \lvert\mathbf◆LB◆r◆RB◆ - \mathbf◆LB◆r◆RB◆_s(t_r)\rvert$$

The **Lienard-Wiechert potentials** are the exact solutions:

$$V(\mathbf◆LB◆r◆RB◆, t) = \frac◆LB◆q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\frac◆LB◆1◆RB◆◆LB◆(\kappa R)◆RB◆\bigg|_◆LB◆t_r◆RB◆, \quad \mathbf◆LB◆A◆RB◆(\mathbf◆LB◆r◆RB◆, t) = \frac◆LB◆q\mathbf◆LB◆v◆RB◆◆RB◆◆LB◆4\pi\varepsilon_0 c^2◆RB◆\frac◆LB◆1◆RB◆◆LB◆(\kappa R)◆RB◆\bigg|_◆LB◆t_r◆RB◆$$

Where $\mathbf◆LB◆R◆RB◆ = \mathbf◆LB◆r◆RB◆ - \mathbf◆LB◆r◆RB◆_s(t_r)$, $R = \lvert\mathbf◆LB◆R◆RB◆\rvert$
$\mathbf◆LB◆v◆RB◆ = \dot◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆_s(t_r)$And $\kappa = 1 - \hat◆LB◆\mathbf◆LB◆R◆RB◆◆RB◆ \cdot \mathbf◆LB◆v◆RB◆/c$.

The factor $\kappa$ corrects for the **Doppler effect**: when the charge moves toward the
Observation point, the radiation is compressed (higher density of field lines).

**Fields of a moving charge.** The electric field splits into two parts:

$$\mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆E◆RB◆_◆LB◆\mathrm◆LB◆vel◆RB◆ + \mathbf◆LB◆E◆RB◆_◆LB◆\mathrm◆LB◆acc◆RB◆$$

The **velocity field** (Coulomb-like, falls off as $1/R^2$):

$$\mathbf◆LB◆E◆RB◆_◆LB◆\mathrm◆LB◆vel◆RB◆ = \frac◆LB◆q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\frac◆LB◆(1-\beta^2)(\hat◆LB◆\mathbf◆LB◆R◆RB◆◆RB◆ - \boldsymbol◆LB◆\beta◆RB◆)◆RB◆◆LB◆\kappa^3 R^2◆RB◆\bigg|_◆LB◆t_r◆RB◆$$

Where $\boldsymbol◆LB◆\beta◆RB◆ = \mathbf◆LB◆v◆RB◆/c$.

The **acceleration field** (radiation, falls off as $1/R$):

$$\mathbf◆LB◆E◆RB◆_◆LB◆\mathrm◆LB◆acc◆RB◆ = \frac◆LB◆q◆RB◆◆LB◆4\pi\varepsilon_0 c◆RB◆\frac◆LB◆\hat◆LB◆\mathbf◆LB◆R◆RB◆◆RB◆ \times [(\hat◆LB◆\mathbf◆LB◆R◆RB◆◆RB◆ - \boldsymbol◆LB◆\beta◆RB◆) \times \dot◆LB◆\boldsymbol◆LB◆\beta◆RB◆◆RB◆]◆RB◆◆LB◆\kappa^3 R◆RB◆\bigg|_◆LB◆t_r◆RB◆$$

Only the acceleration field contributes to radiation at large distances. The magnetic field Is
always:

$$\mathbf◆LB◆B◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆c◆RB◆\hat◆LB◆\mathbf◆LB◆R◆RB◆◆RB◆ \times \mathbf◆LB◆E◆RB◆$$

## 7. Special Relativity and Electromagnetism

### 7.1 Covariant Formulation

The laws of electromagnetism are inherently relativistic. In fact, it was the inconsistency of
Maxwell's equations with Galilean relativity that motivated Einstein's 1905 theory.

**Minkowski spacetime.** Events are labelled by coordinates $(ct, x, y, z)$ in a four-dimensional
Spacetime. The **spacetime interval** between two events is:

$$ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2$$

This interval is invariant under Lorentz transformations --- all inertial observers agree on its
Value. We use the metric signature $\eta_◆LB◆\mu\nu◆RB◆ = \mathrm◆LB◆diag(-1, +1, +1, +1)$.

**Lorentz transformations.** For a boost with velocity $v$ along the $x$-axis, define $\beta = v/c$
and $\gamma = 1/\sqrt◆LB◆1-\beta^2◆RB◆$:

$$\Lambda^\mu_◆LB◆\ \nu◆RB◆ = \begin◆LB◆pmatrix◆RB◆ \gamma & -\gamma\beta & 0 & 0 \\ -\gamma\beta & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end◆LB◆pmatrix◆RB◆$$

Coordinates transform as $x'^\mu = \Lambda^\mu_◆LB◆\ \nu◆RB◆\,x^\nu$ (Einstein summation convention
Implied).

### 7.2 Four-Vectors

A **four-vector** $A^\mu = (A^0, A^1, A^2, A^3)$ transforms as $A'^\mu = \Lambda^\mu_◆LB◆\ \nu◆RB◆\,A^\nu$
Under Lorentz transformations. The inner product $A_\mu B^\mu = \eta_◆LB◆\mu\nu◆RB◆A^\mu B^\nu$ is a
Lorentz scalar (invariant).

Key four-vectors in electromagnetism:

**Position:** $x^\mu = (ct, x, y, z)$

**Four-velocity:** $U^\mu = \frac◆LB◆dx^\mu◆RB◆◆LB◆d\tau◆RB◆ = \gamma(c, v_x, v_y, v_z)$ where $\tau$ is proper
time.

**Four-momentum:** $p^\mu = mU^\mu = (E/c, p_x, p_y, p_z)$With $E = \gamma mc^2$.

**Four-current density:**

$$J^\mu = (c\rho, J_x, J_y, J_z)$$

The continuity equation $\nabla \cdot \mathbf◆LB◆J◆RB◆ + \partial\rho/\partial t = 0$ becomes the
Manifestly covariant:

$$\partial_\mu J^\mu = 0$$

**Four-potential:**

$$A^\mu = (V/c, A_x, A_y, A_z)$$

The Lorenz gauge condition
$\nabla \cdot \mathbf◆LB◆A◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆c^2◆RB◆\frac◆LB◆\partial V◆RB◆◆LB◆\partial t◆RB◆ = 0$ Becomes:

$$\partial_\mu A^\mu = 0$$

### 7.3 The Electromagnetic Field Tensor

The six components of $\mathbf◆LB◆E◆RB◆$ and $\mathbf◆LB◆B◆RB◆$ are unified in the **antisymmetric field
Tensor** $F^◆LB◆\mu\nu◆RB◆$Defined by:

$$F^◆LB◆\mu\nu◆RB◆ = \partial^\mu A^\nu - \partial^\nu A^\mu$$

In matrix form:

$$F^◆LB◆\mu\nu◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 0 & -E_x/c & -E_y/c & -E_z/c \\ E_x/c & 0 & -B_z & B_y \\ E_y/c & B_z & 0 & -B_x \\ E_z/c & -B_y & B_x & 0 \end◆LB◆pmatrix◆RB◆$$

The **dual field tensor** is:

$$\tilde◆LB◆F◆RB◆^◆LB◆\mu\nu◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\varepsilon^◆LB◆\mu\nu\rho\sigma◆RB◆F_◆LB◆\rho\sigma◆RB◆$$

Where $\varepsilon^◆LB◆\mu\nu\rho\sigma◆RB◆$ is the totally antisymmetric Levi-Civita symbol with
$\varepsilon^◆LB◆0123◆RB◆ = +1$. In matrix form:

$$\tilde◆LB◆F◆RB◆^◆LB◆\mu\nu◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 0 & -B_x & -B_y & -B_z \\ B_x & 0 & E_z/c & -E_y/c \\ B_y & -E_z/c & 0 & E_x/c \\ B_z & E_y/c & -E_x/c & 0 \end◆LB◆pmatrix◆RB◆$$

The dual tensor is obtained from $F^◆LB◆\mu\nu◆RB◆$ by the replacement
$\mathbf◆LB◆E◆RB◆/c \to -\mathbf◆LB◆B◆RB◆$, $\mathbf◆LB◆B◆RB◆ \to \mathbf◆LB◆E◆RB◆/c$.

**Lorentz force.** The four-force on a charge $q$ is:

$$K^\mu = \frac◆LB◆dp^\mu◆RB◆◆LB◆d\tau◆RB◆ = qF^◆LB◆\mu\nu◆RB◆U_\nu$$

The spatial components reduce to $\mathbf◆LB◆F◆RB◆ = q(\mathbf◆LB◆E◆RB◆ + \mathbf◆LB◆v◆RB◆ \times \mathbf◆LB◆B◆RB◆)$ And the
time component gives the power equation $dE/dt = q\mathbf◆LB◆E◆RB◆ \cdot \mathbf◆LB◆v◆RB◆$.

### 7.4 Invariance of Maxwell's Equations

All four Maxwell equations are contained in two covariant equations:

**Inhomogeneous equations** (Gauss's law + Ampere-Maxwell law):

$$\boxed◆LB◆\partial_\mu F^◆LB◆\mu\nu◆RB◆ = \mu_0 J^\nu◆RB◆$$

**Homogeneous equations** (Gauss's law for magnetism + Faraday's law):

$$\boxed◆LB◆\partial_\mu \tilde◆LB◆F◆RB◆^◆LB◆\mu\nu◆RB◆ = 0◆RB◆$$

<details>
<summary>Verification: $\nu = 0$ gives Gauss's law</summary>

For $\nu = 0$:

$$\partial_\mu F^◆LB◆\mu 0◆RB◆ = \mu_0 J^0 = \mu_0 c\rho$$

Since $F^◆LB◆\mu 0◆RB◆ = (0, -E_x/c, -E_y/c, -E_z/c)$:

$$\partial_0 F^◆LB◆00◆RB◆ + \partial_1 F^◆LB◆10◆RB◆ + \partial_2 F^◆LB◆20◆RB◆ + \partial_3 F^◆LB◆30◆RB◆ = 0 + \frac◆LB◆\partial◆RB◆◆LB◆\partial x◆RB◆\!\left(-\frac◆LB◆E_x◆RB◆◆LB◆c◆RB◆\right) + \frac◆LB◆\partial◆RB◆◆LB◆\partial y◆RB◆\!\left(-\frac◆LB◆E_y◆RB◆◆LB◆c◆RB◆\right) + \frac◆LB◆\partial◆RB◆◆LB◆\partial z◆RB◆\!\left(-\frac◆LB◆E_z◆RB◆◆LB◆c◆RB◆\right)$$

$$-\frac◆LB◆1◆RB◆◆LB◆c◆RB◆\nabla \cdot \mathbf◆LB◆E◆RB◆ = \mu_0 c\rho$$

$$\nabla \cdot \mathbf◆LB◆E◆RB◆ = -\mu_0 c^2 \rho = \frac◆LB◆\rho◆RB◆◆LB◆\varepsilon_0◆RB◆$$

This is Gauss's law, using $c^2 = 1/(\mu_0\varepsilon_0)$. $\blacksquare$

</details>

**Field transformations.** Under a Lorentz boost with velocity $\mathbf◆LB◆v◆RB◆ = v\,\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆$
The fields transform as:

$$E'_x = E_x, \quad E'_y = \gamma(E_y - vB_z), \quad E'_z = \gamma(E_z + vB_y)$$

$$B'_x = B_x, \quad B'_y = \gamma\!\left(B_y + \frac◆LB◆v◆RB◆◆LB◆c^2◆RB◆E_z\right), \quad B'_z = \gamma\!\left(B_z - \frac◆LB◆v◆RB◆◆LB◆c^2◆RB◆E_y\right)$$

Components parallel to the boost are unchanged; perpendicular components mix $\mathbf◆LB◆E◆RB◆$ and
$\mathbf◆LB◆B◆RB◆$.

**Lorentz invariants.** The following quantities are the same in all frames:

$$F_◆LB◆\mu\nu◆RB◆F^◆LB◆\mu\nu◆RB◆ = 2\!\left(B^2 - \frac◆LB◆E^2◆RB◆◆LB◆c^2◆RB◆\right), \quad F_◆LB◆\mu\nu◆RB◆\tilde◆LB◆F◆RB◆^◆LB◆\mu\nu◆RB◆ = -\frac◆LB◆4◆RB◆◆LB◆c◆RB◆\,\mathbf◆LB◆E◆RB◆ \cdot \mathbf◆LB◆B◆RB◆$$

These invariants classify electromagnetic fields:

- If $E^2 \gt c^2 B^2$ in some frame, there exists a frame where $\mathbf◆LB◆B◆RB◆ = \mathbf◆LB◆0◆RB◆$ (purely
  electric).
- If $c^2 B^2 \gt E^2$There exists a frame where $\mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆0◆RB◆$ (purely magnetic).
- If $\mathbf◆LB◆E◆RB◆ \cdot \mathbf◆LB◆B◆RB◆ = 0$ and $E = cB$The field is a null field (electromagnetic wave).

## 8. Problem Set

**Problem 1.** Starting from Maxwell's equations in differential form, derive the continuity
Equation $\nabla \cdot \mathbf◆LB◆J◆RB◆ + \partial\rho/\partial t = 0$. Explain why this result Requires
the displacement current term.

<details>
<summary>Solution</summary>

Take the divergence of the Ampere-Maxwell law:

$$\nabla \cdot (\nabla \times \mathbf◆LB◆B◆RB◆) = \mu_0\nabla \cdot \mathbf◆LB◆J◆RB◆ + \mu_0\varepsilon_0\frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆(\nabla \cdot \mathbf◆LB◆E◆RB◆)$$

Since $\nabla \cdot (\nabla \times \mathbf◆LB◆B◆RB◆) = 0$ and
$\nabla \cdot \mathbf◆LB◆E◆RB◆ = \rho/\varepsilon_0$:

$$0 = \mu_0\nabla \cdot \mathbf◆LB◆J◆RB◆ + \mu_0\varepsilon_0\frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆\!\left(\frac◆LB◆\rho◆RB◆◆LB◆\varepsilon_0◆RB◆\right) = \mu_0\!\left(\nabla \cdot \mathbf◆LB◆J◆RB◆ + \frac◆LB◆\partial\rho◆RB◆◆LB◆\partial t◆RB◆\right)$$

$$\nabla \cdot \mathbf◆LB◆J◆RB◆ + \frac◆LB◆\partial\rho◆RB◆◆LB◆\partial t◆RB◆ = 0$$

Without the displacement current term, we would obtain $\nabla \cdot \mathbf◆LB◆J◆RB◆ = 0$Which Violates
charge conservation whenever $\partial\rho/\partial t \neq 0$ (e.g., inside a Charging capacitor).

_Cross-reference:_ Section 1.3, Section 4.5.

</details>

**Problem 2.** A point charge $q$ is placed at the centre of a dielectric sphere of radius $R$ And
permittivity $\varepsilon$. Find $\mathbf◆LB◆D◆RB◆$, $\mathbf◆LB◆E◆RB◆$And $\mathbf◆LB◆P◆RB◆$ everywhere. Determine the
bound surface charge density.

<details>
<summary>Solution</summary>

By spherical symmetry, $\mathbf◆LB◆D◆RB◆$ is radial. Use Gauss's law for $\mathbf◆LB◆D◆RB◆$ with a Spherical
Gaussian surface of radius $r$:

For $r \lt R$: $D \cdot 4\pi r^2 = q \implies \mathbf◆LB◆D◆RB◆ = \frac◆LB◆q◆RB◆◆LB◆4\pi r^2◆RB◆\,\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$.

$\mathbf◆LB◆E◆RB◆_◆LB◆\mathrm◆LB◆in◆RB◆ = \frac◆LB◆\mathbf◆LB◆D◆RB◆◆RB◆◆LB◆\varepsilon◆RB◆ = \frac◆LB◆q◆RB◆◆LB◆4\pi\varepsilon r^2◆RB◆\,\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$.

$\mathbf◆LB◆P◆RB◆ = \varepsilon_0\chi_e\mathbf◆LB◆E◆RB◆_◆LB◆\mathrm◆LB◆in◆RB◆ = \left(\varepsilon - \varepsilon_0\right)\frac◆LB◆q◆RB◆◆LB◆4\pi\varepsilon r^2◆RB◆\,\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$.

For $r \gt R$: $D \cdot 4\pi r^2 = q \implies \mathbf◆LB◆D◆RB◆ = \frac◆LB◆q◆RB◆◆LB◆4\pi r^2◆RB◆\,\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$.

$\mathbf◆LB◆E◆RB◆_◆LB◆\mathrm◆LB◆out◆RB◆ = \frac◆LB◆\mathbf◆LB◆D◆RB◆◆RB◆◆LB◆\varepsilon_0◆RB◆ = \frac◆LB◆q◆RB◆◆LB◆4\pi\varepsilon_0 r^2◆RB◆\,\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$.

$\mathbf◆LB◆P◆RB◆_◆LB◆\mathrm◆LB◆out◆RB◆ = \mathbf◆LB◆0◆RB◆$ (vacuum).

Bound surface charge:
$\sigma_b = \mathbf◆LB◆P◆RB◆\cdot\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆\big|_◆LB◆r=R◆RB◆ = \left(\varepsilon - \varepsilon_0\right)\frac◆LB◆q◆RB◆◆LB◆4\pi\varepsilon R^2◆RB◆$.

Bound volume charge:
$\rho_b = -\nabla \cdot \mathbf◆LB◆P◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆r^2◆RB◆\frac◆LB◆\partial◆RB◆◆LB◆\partial r◆RB◆(r^2 P_r) = 0$ for
$r \lt R$.

_Cross-reference:_ Section 2.10.

</details>

**Problem 3.** An infinitely long cylindrical shell of radius $R$ carries a uniform surface Charge
density $\sigma$. Find the electric field everywhere.

<details>
<summary>Solution</summary>

By cylindrical symmetry, $\mathbf◆LB◆E◆RB◆$ is radial and depends only on $r$. Use a Gaussian Cylinder of
radius $r$ and length $L$.

For $r \lt R$: no charge enclosed, so $\mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆0◆RB◆$.

For $r \gt R$: the enclosed charge is $Q_◆LB◆\mathrm◆LB◆enc◆RB◆ = \sigma \cdot 2\pi R L$.

$$E \cdot 2\pi r L = \frac◆LB◆\sigma \cdot 2\pi R L◆RB◆◆LB◆\varepsilon_0◆RB◆$$

$$\mathbf◆LB◆E◆RB◆ = \frac◆LB◆\sigma R◆RB◆◆LB◆\varepsilon_0 r◆RB◆\,\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$$

At the surface ($r = R^+$): $E = \sigma/\varepsilon_0$Which is the discontinuity expected From the
surface charge.

_Cross-reference:_ Section 2.2, Section 2.6.

</details>

**Problem 4.** A conducting sphere of radius $a$ carries charge $Q$ and is surrounded by a
Concentric conducting spherical shell of inner radius $b$ and outer radius $c$ carrying charge $-Q$.
Find $V(r)$ everywhere.

<details>
<summary>Solution</summary>

By spherical symmetry, $\mathbf◆LB◆E◆RB◆$ is radial. Use Gauss's law with spherical Gaussian Surfaces.

$r \lt a$: $\mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆0◆RB◆$ (conductor interior), so $V = V_a$ (constant).

$a \lt r \lt b$:
$E \cdot 4\pi r^2 = Q/\varepsilon_0 \implies \mathbf◆LB◆E◆RB◆ = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0 r^2◆RB◆\,\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$.

$$V(r) = -\int_a^r E\,dr' + V_a = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\!\left(\frac◆LB◆1◆RB◆◆LB◆r◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆a◆RB◆\right) + V_a$$

$b \lt r \lt c$: $\mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆0◆RB◆$ (conductor), so $V = V_b$ (constant).

$V_b = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\!\left(\frac◆LB◆1◆RB◆◆LB◆b◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆a◆RB◆\right) + V_a$.

$r \gt c$: $E \cdot 4\pi r^2 = (Q - Q)/\varepsilon_0 = 0 \implies \mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆0◆RB◆$So $V = 0$
(choosing $V(\infty) = 0$).

Since $V_c = 0$ and $V_c = V_b$ (same conductor), $V_b = 0$:

$$V_a = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\!\left(\frac◆LB◆1◆RB◆◆LB◆a◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆b◆RB◆\right)$$

This is the capacitance of the spherical capacitor: $C = Q/V_a = 4\pi\varepsilon_0 ab/(b-a)$.

_Cross-reference:_ Section 2.3, Section 2.4.

</details>

**Problem 5.** The potential on the surface of a sphere of radius $R$ is
$V(\theta) = V_0\cos\theta$. Find the potential inside and outside the sphere.

<details>
<summary>Solution</summary>

Inside ($r \lt R$), solve Laplace's equation by separation of variables in spherical Coordinates.
The general azimuthally symmetric solution is:

$$V(r,\theta) = \sum_◆LB◆l=0◆RB◆^◆LB◆\infty◆RB◆\left(A_l r^l + \frac◆LB◆B_l◆RB◆◆LB◆r^◆LB◆l+1◆RB◆◆RB◆\right)P_l(\cos\theta)$$

For $r \lt R$: finiteness at $r = 0$ requires $B_l = 0$.

$$V_◆LB◆\mathrm◆LB◆in◆RB◆ = \sum_◆LB◆l=0◆RB◆^◆LB◆\infty◆RB◆ A_l\,r^l\,P_l(\cos\theta)$$

Boundary condition at $r = R$: $V_◆LB◆\mathrm◆LB◆in◆RB◆(R,\theta) = V_0\cos\theta = V_0 P_1(\cos\theta)$.

By orthogonality of Legendre polynomials, only $l = 1$ contributes: $A_1 = V_0/R$.

$$V_◆LB◆\mathrm◆LB◆in◆RB◆ = \frac◆LB◆V_0◆RB◆◆LB◆R◆RB◆\,r\cos\theta = \frac◆LB◆V_0◆RB◆◆LB◆R◆RB◆\,z$$

For $r \gt R$: $V \to 0$ as $r \to \infty$ requires $A_l = 0$.

$$V_◆LB◆\mathrm◆LB◆out◆RB◆ = \sum_◆LB◆l=0◆RB◆^◆LB◆\infty◆RB◆\frac◆LB◆B_l◆RB◆◆LB◆r^◆LB◆l+1◆RB◆◆RB◆P_l(\cos\theta)$$

Matching at $r = R$: $B_1/R^2 = V_0 \implies B_1 = V_0 R^2$.

$$V_◆LB◆\mathrm◆LB◆out◆RB◆ = \frac◆LB◆V_0 R^2◆RB◆◆LB◆r^2◆RB◆\cos\theta$$

The interior field is uniform:
$\mathbf◆LB◆E◆RB◆_◆LB◆\mathrm◆LB◆in◆RB◆ = -\nabla V_◆LB◆\mathrm◆LB◆in◆RB◆ = -(V_0/R)\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$.

_Cross-reference:_ Section 2.4, Section 2.7.

</details>

**Problem 6.** Prove the uniqueness theorem for Neumann boundary conditions: the solution to
$\nabla^2 V = -\rho/\varepsilon_0$ in a volume $\mathcal◆LB◆V◆RB◆$ is unique up to an additive Constant
when $\partial V/\partial n$ is specified on $\mathcal◆LB◆S◆RB◆$.

<details>
<summary>Solution</summary>

Suppose $V_1$ and $V_2$ both satisfy Poisson's equation with the same Neumann boundary Condition
$\partial V_1/\partial n = \partial V_2/\partial n$ on $\mathcal◆LB◆S◆RB◆$. Define $U = V_1 - V_2$. Then
$\nabla^2 U = 0$ in $\mathcal◆LB◆V◆RB◆$ and $\partial U/\partial n = 0$ on $\mathcal◆LB◆S◆RB◆$.

Apply Green's first identity with $\phi = \psi = U$:

$$\int_◆LB◆\mathcal◆LB◆V◆RB◆◆RB◆\lvert\nabla U\rvert^2\,dV = \oint_◆LB◆\mathcal◆LB◆S◆RB◆◆RB◆ U\,\frac◆LB◆\partial U◆RB◆◆LB◆\partial n◆RB◆\,dA = 0$$

Since the integrand $\lvert\nabla U\rvert^2 \geq 0$We conclude $\nabla U = \mathbf◆LB◆0◆RB◆$ In
$\mathcal◆LB◆V◆RB◆$So $U$ is constant throughout $\mathcal◆LB◆V◆RB◆$.

$V_1 = V_2 + C$ for some constant $C$. The solution is unique up to an additive constant. (The
constant is physically irrelevant since only potential differences matter.) $\blacksquare$

_Cross-reference:_ Section 2.7.

</details>

**Problem 7.** A point charge $q$ is placed at distance $a$ from the centre of a grounded Conducting
sphere of radius $R$ ($a \gt R$). Find the image charge location and magnitude, And determine the
force on $q$.

<details>
<summary>Solution</summary>

Place $q$ at distance $a$ along the $z$-axis. The image charge $q'$ is at distance $b$ Along the
$z$-axis (inside the sphere).

For $V = 0$ on the sphere ($r = R$), we need:

$$\frac◆LB◆q◆RB◆◆LB◆d_1◆RB◆ + \frac◆LB◆q'◆RB◆◆LB◆d_2◆RB◆ = 0 \quad \mathrm◆LB◆for\ all\ \theta$$

Where $d_1^2 = R^2 + a^2 - 2Ra\cos\theta$ and $d_2^2 = R^2 + b^2 - 2Rb\cos\theta$.

The ratio $d_2/d_1$ must be constant. Setting $b = R^2/a$:

$$\frac◆LB◆d_2^2◆RB◆◆LB◆d_1^2◆RB◆ = \frac◆LB◆R^2 + R^4/a^2 - 2R^3\cos\theta/a◆RB◆◆LB◆R^2 + a^2 - 2Ra\cos\theta◆RB◆ = \frac◆LB◆R^2◆RB◆◆LB◆a^2◆RB◆$$

This is constant (independent of $\theta$). With $q'/q = -R/a$:

$$q' = -\frac◆LB◆qR◆RB◆◆LB◆a◆RB◆, \quad b = \frac◆LB◆R^2◆RB◆◆LB◆a◆RB◆$$

The force on $q$ is the Coulomb force due to $q'$:

$$\mathbf◆LB◆F◆RB◆ = \frac◆LB◆qq'◆RB◆◆LB◆4\pi\varepsilon_0(a-b)^2◆RB◆\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆ = \frac◆LB◆q(-qR/a)◆RB◆◆LB◆4\pi\varepsilon_0(a-R^2/a)^2◆RB◆\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆ = -\frac◆LB◆q^2R◆RB◆◆LB◆4\pi\varepsilon_0 a(a^2-R^2)◆RB◆\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$$

The negative sign indicates attraction toward the sphere. $\blacksquare$

_Cross-reference:_ Section 2.8.

</details>

**Problem 8.** A charge $+q$ is at $z = +d/2$ and $-q$ is at $z = -d/2$. Compute the Electric dipole
moment and find the potential to dipole order at a point in the $xy$-plane At distance $r$ from the
origin.

<details>
<summary>Solution</summary>

The dipole moment:

$$\mathbf◆LB◆p◆RB◆ = \sum_i q_i\mathbf◆LB◆r◆RB◆_i = q\!\left(\frac◆LB◆d◆RB◆◆LB◆2◆RB◆\right)\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆ + (-q)\!\left(-\frac◆LB◆d◆RB◆◆LB◆2◆RB◆\right)\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆ = qd\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$$

The dipole potential:

$$V_1(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\frac◆LB◆\mathbf◆LB◆p◆RB◆\cdot\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆◆RB◆◆LB◆r^2◆RB◆$$

In the $xy$-plane, $\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆ = \cos\phi\,\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆ + \sin\phi\,\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆$ So
$\mathbf◆LB◆p◆RB◆\cdot\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆ = qd\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆\cdot\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆ = 0$.

Therefore $V_1 = 0$ in the $xy$-plane. The first non-zero contribution comes from the Quadrupole
term ($\sim 1/r^3$). $\blacksquare$

_Cross-reference:_ Section 2.9.

</details>

**Problem 9.** A dielectric slab of permittivity $\varepsilon$ and thickness $d$ is inserted Between
the plates of a parallel-plate capacitor with plate separation $D \gt d$ and plate Area $A$Carrying
free charge $\pm Q$. Find the capacitance.

<details>
<summary>Solution</summary>

Let the plates be at $x = 0$ and $x = D$With the slab occupying $0 \lt x \lt d$. Since $Q$ is fixed,
$D_n = \sigma_f = Q/A$ is the same in both regions.

In the dielectric ($0 \lt x \lt d$): $E_1 = D/\varepsilon = Q/(\varepsilon A)$.

In vacuum ($d \lt x \lt D$): $E_2 = D/\varepsilon_0 = Q/(\varepsilon_0 A)$.

The potential difference:

$$V = E_1 d + E_2(D - d) = \frac◆LB◆Q◆RB◆◆LB◆A◆RB◆\!\left(\frac◆LB◆d◆RB◆◆LB◆\varepsilon◆RB◆ + \frac◆LB◆D-d◆RB◆◆LB◆\varepsilon_0◆RB◆\right)$$

The capacitance:

$$C = \frac◆LB◆Q◆RB◆◆LB◆V◆RB◆ = \frac◆LB◆\varepsilon_0 A◆RB◆◆LB◆D - d + d/\varepsilon_r◆RB◆$$

Where $\varepsilon_r = \varepsilon/\varepsilon_0$. For $d = D$ (fully filled):
$C = \varepsilon_r\varepsilon_0 A/D$Which is $\varepsilon_r$ times the vacuum capacitance.

_Cross-reference:_ Section 2.10.

</details>

**Problem 10.** Find the magnetic field at the centre of a square loop of side $a$ carrying Current
$I$ using the Biot-Savart law.

<details>
<summary>Solution</summary>

By symmetry, each side contributes equally. Consider one side from $(a/2, -a/2, 0)$ to
$(a/2, a/2, 0)$. For this side, $d\mathbf◆LB◆l◆RB◆ = dy\,\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆$ and
$\mathbf◆LB◆r◆RB◆ = (a/2)\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆ - y\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆$So $r = \sqrt◆LB◆(a/2)^2 + y^2◆RB◆$.

$$d\mathbf◆LB◆B◆RB◆ = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆d\mathbf◆LB◆l◆RB◆ \times \mathbf◆LB◆r◆RB◆◆RB◆◆LB◆r^3◆RB◆ = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆dy\,\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆ \times [(a/2)\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆ - y\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆]◆RB◆◆LB◆r^3◆RB◆$$

$$= \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆(-a/2)\,dy◆RB◆◆LB◆[(a/2)^2+y^2]^◆LB◆3/2◆RB◆◆RB◆\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$$

$$B_◆LB◆\mathrm◆LB◆one\ side◆RB◆ = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi◆RB◆\!\left(-\frac◆LB◆a◆RB◆◆LB◆2◆RB◆\right)\!\int_◆LB◆-a/2◆RB◆^◆LB◆a/2◆RB◆\frac◆LB◆dy◆RB◆◆LB◆[(a/2)^2+y^2]^◆LB◆3/2◆RB◆◆RB◆$$

Using $\int dy/(s^2+y^2)^◆LB◆3/2◆RB◆ = y/[s^2\sqrt◆LB◆s^2+y^2◆RB◆]$ with $s = a/2$:

$$B_◆LB◆\mathrm◆LB◆one\ side◆RB◆ = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi◆RB◆\!\left(-\frac◆LB◆a◆RB◆◆LB◆2◆RB◆\right)\frac◆LB◆2◆RB◆◆LB◆(a/2)\sqrt◆LB◆(a/2)^2+(a/2)^2◆RB◆◆RB◆ \cdot 2 = -\frac◆LB◆\mu_0 I◆RB◆◆LB◆\pi a◆RB◆\cdot\frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆◆RB◆ \cdot 2 = -\frac◆LB◆\mu_0 I◆RB◆◆LB◆\pi a◆RB◆\sqrt◆LB◆2◆RB◆$$

The magnitude from all four sides:
$B = 4 \times \frac◆LB◆\sqrt◆LB◆2◆RB◆\,\mu_0 I◆RB◆◆LB◆\pi a◆RB◆ = \frac◆LB◆2\sqrt◆LB◆2◆RB◆\,\mu_0 I◆RB◆◆LB◆\pi a◆RB◆$.

$$\mathbf◆LB◆B◆RB◆ = -\frac◆LB◆2\sqrt◆LB◆2◆RB◆\,\mu_0 I◆RB◆◆LB◆\pi a◆RB◆\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$$

(by the right-hand rule, into the page for counterclockwise current). $\blacksquare$

_Cross-reference:_ Section 3.1.

</details>

**Problem 11.** A toroid with $N$ turns, inner radius $a$And outer radius $b$ carries current $I$.
Find the magnetic field everywhere.

<details>
<summary>Solution</summary>

By symmetry, $\mathbf◆LB◆B◆RB◆$ is tangential and depends only on $r$ (distance from the axis of
Symmetry). Apply Ampere's law to a circular loop of radius $r$.

For $r \lt a$: no current is enclosed, so $\mathbf◆LB◆B◆RB◆ = \mathbf◆LB◆0◆RB◆$.

For $a \lt r \lt b$: the Amperian loop encloses all $N$ turns.

$$B \cdot 2\pi r = \mu_0 N I \implies \mathbf◆LB◆B◆RB◆ = \frac◆LB◆\mu_0 N I◆RB◆◆LB◆2\pi r◆RB◆\,\hat◆LB◆\boldsymbol◆LB◆\phi◆RB◆◆RB◆$$

For $r \gt b$: the net enclosed current is $NI - NI = 0$So $\mathbf◆LB◆B◆RB◆ = \mathbf◆LB◆0◆RB◆$.

The field is confined entirely within the toroid, unlike a solenoid where the field extends Beyond
the ends. $\blacksquare$

_Cross-reference:_ Section 3.2, Section 3.4.

</details>

**Problem 12.** A circular loop of radius $R$ carries current $I$. Find the magnetic dipole Moment
and the field on the axis at distance $z$ from the centre. Show that the result Reduces to the
dipole field for $z \gg R$.

<details>
<summary>Solution</summary>

The magnetic dipole moment: $\mathbf◆LB◆m◆RB◆ = I\pi R^2\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$.

From the Biot-Savart law, every element $d\mathbf◆LB◆l◆RB◆$ is perpendicular to $\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆$ So
$d\mathbf◆LB◆B◆RB◆ = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆dl◆RB◆◆LB◆R^2+z^2◆RB◆$. By symmetry, only the axial component
Survives:

$$B_z = \frac◆LB◆\mu_0 I◆RB◆◆LB◆4\pi(R^2+z^2)◆RB◆\frac◆LB◆R◆RB◆◆LB◆\sqrt◆LB◆R^2+z^2◆RB◆◆RB◆ \cdot 2\pi R = \frac◆LB◆\mu_0 I R^2◆RB◆◆LB◆2(R^2+z^2)^◆LB◆3/2◆RB◆◆RB◆$$

For $z \gg R$: $(R^2+z^2)^◆LB◆3/2◆RB◆ \approx z^3(1 + 3R^2/2z^2) \approx z^3$.

$$B_z \approx \frac◆LB◆\mu_0 I R^2◆RB◆◆LB◆2z^3◆RB◆ = \frac◆LB◆\mu_0◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆2m◆RB◆◆LB◆z^3◆RB◆$$

The dipole field formula gives, on the axis ($\theta = 0$):

$$\mathbf◆LB◆B◆RB◆_◆LB◆\mathrm◆LB◆dip◆RB◆ = \frac◆LB◆\mu_0◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆2\mathbf◆LB◆m◆RB◆◆RB◆◆LB◆z^3◆RB◆$$

This matches. $\blacksquare$

_Cross-reference:_ Section 3.5.

</details>

**Problem 13.** A long straight wire along the $z$-axis carries current $I$. Find the vector
Potential $\mathbf◆LB◆A◆RB◆$ and verify that $\nabla \times \mathbf◆LB◆A◆RB◆$ gives the correct $\mathbf◆LB◆B◆RB◆$.

<details>
<summary>Solution</summary>

By cylindrical symmetry, $\mathbf◆LB◆A◆RB◆$ can only depend on $s$ (the radial distance) and must Point
along $\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$ (parallel to the current).

$$\mathbf◆LB◆A◆RB◆(s) = -\frac◆LB◆\mu_0 I◆RB◆◆LB◆2\pi◆RB◆\ln\!\left(\frac◆LB◆s◆RB◆◆LB◆s_0◆RB◆\right)\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$$

Where $s_0$ is an arbitrary reference distance (gauge-dependent).

Verify: $\mathbf◆LB◆B◆RB◆ = \nabla \times \mathbf◆LB◆A◆RB◆$.

In cylindrical coordinates,
$\nabla \times (A_z\,\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆) = -\frac◆LB◆\partial A_z◆RB◆◆LB◆\partial s◆RB◆\,\hat◆LB◆\boldsymbol◆LB◆\phi◆RB◆◆RB◆$.

$$B_\phi = -\frac◆LB◆\partial◆RB◆◆LB◆\partial s◆RB◆\!\left(-\frac◆LB◆\mu_0 I◆RB◆◆LB◆2\pi◆RB◆\ln\frac◆LB◆s◆RB◆◆LB◆s_0◆RB◆\right) = \frac◆LB◆\mu_0 I◆RB◆◆LB◆2\pi s◆RB◆$$

$$\mathbf◆LB◆B◆RB◆ = \frac◆LB◆\mu_0 I◆RB◆◆LB◆2\pi s◆RB◆\,\hat◆LB◆\boldsymbol◆LB◆\phi◆RB◆◆RB◆$$

This matches the Ampere's law result. $\blacksquare$

_Cross-reference:_ Section 3.3, Section 3.6.

</details>

**Problem 14.** An iron ring of mean radius $R = 10$ cm, cross-sectional area $A = 4\ \mathrm◆LB◆cm^2$
And relative permeability $\mu_r = 500$ has $N = 200$ turns carrying current $I = 2$ A. Find
$B$, $H$, $M$And the total flux through the ring.

<details>
<summary>Solution</summary>

Apply Ampere's law for $\mathbf◆LB◆H◆RB◆$ around the ring:

$$\oint \mathbf◆LB◆H◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = NI \implies H \cdot 2\pi R = NI$$

$$H = \frac◆LB◆NI◆RB◆◆LB◆2\pi R◆RB◆ = \frac◆LB◆200 \times 2◆RB◆◆LB◆2\pi \times 0.10◆RB◆ = \frac◆LB◆400◆RB◆◆LB◆0.628◆RB◆ \approx 637\ \mathrm◆LB◆A/m$$

$$B = \mu_0 \mu_r H = 4\pi \times 10^◆LB◆-7◆RB◆ \times 500 \times 637 \approx 0.40\ \mathrm◆LB◆T$$

$$M = \chi_m H = (\mu_r - 1)H = 499 \times 637 \approx 3.18 \times 10^5\ \mathrm◆LB◆A/m$$

Total flux: $\Phi = BA = 0.40 \times 4 \times 10^◆LB◆-4◆RB◆ = 1.6 \times 10^◆LB◆-4◆RB◆\ \mathrm◆LB◆Wb$.

_Cross-reference:_ Section 3.7, Section 3.8.

</details>

**Problem 15.** A rectangular conducting loop of width $w = 0.1$ m and length $\ell = 0.2$ m Has
resistance $R = 5\ \Omega$. One end enters a region of uniform magnetic field $B = 0.5$ T
(perpendicular to the loop) at velocity $v = 2$ m/s. Find the induced EMF and Current.

<details>
<summary>Solution</summary>

As the loop enters the field with its leading edge at position $x$ inside the field:

$$\Phi_B = B \cdot w \cdot x$$

$$\mathcal◆LB◆E◆RB◆ = -\frac◆LB◆d\Phi_B◆RB◆◆LB◆dt◆RB◆ = -Bw\frac◆LB◆dx◆RB◆◆LB◆dt◆RB◆ = -Bwv = -0.5 \times 0.1 \times 2 = -0.1\ \mathrm◆LB◆V$$

The magnitude is $0.1$ V. The current is:

$$I = \frac◆LB◆\lvert\mathcal◆LB◆E◆RB◆\rvert◆RB◆◆LB◆R◆RB◆ = \frac◆LB◆0.1◆RB◆◆LB◆5◆RB◆ = 0.02\ \mathrm◆LB◆A$$

By Lenz's law, the current flows to oppose the increasing flux (counterclockwise when viewed From
the direction of $\mathbf◆LB◆B◆RB◆$).

The magnetic braking force on the leading edge: $F = BIw = 0.5 \times 0.02 \times 0.1 = 0.001$ N
(opposing the motion). $\blacksquare$

_Cross-reference:_ Section 4.1, Section 4.4.

</details>

**Problem 16.** A plane electromagnetic wave in vacuum has
$\mathbf◆LB◆E◆RB◆ = 100\cos(kz - \omega t)\,\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆$ V/m. Find $B_0$The time-averaged intensity,
and the radiation pressure on a perfectly absorbing Surface.

<details>
<summary>Solution</summary>

$B_0 = E_0/c = 100/(3 \times 10^8) = 3.33 \times 10^◆LB◆-7◆RB◆$ T.

$\mathbf◆LB◆B◆RB◆ = 3.33 \times 10^◆LB◆-7◆RB◆\cos(kz - \omega t)\,\hat◆LB◆\mathbf◆LB◆y◆RB◆◆RB◆$ T.

Time-averaged Poynting vector magnitude:

$$\langle S \rangle = \frac◆LB◆E_0^2◆RB◆◆LB◆2\mu_0 c◆RB◆ = \frac◆LB◆100^2◆RB◆◆LB◆2 \times 4\pi \times 10^◆LB◆-7◆RB◆ \times 3 \times 10^8◆RB◆ = \frac◆LB◆10^4◆RB◆◆LB◆754◆RB◆ \approx 13.3\ \mathrm◆LB◆W/m^2$$

Radiation pressure on a perfect absorber:

$$P_◆LB◆\mathrm◆LB◆rad◆RB◆ = \frac◆LB◆\langle S \rangle◆RB◆◆LB◆c◆RB◆ = \frac◆LB◆13.3◆RB◆◆LB◆3 \times 10^8◆RB◆ \approx 4.4 \times 10^◆LB◆-8◆RB◆\ \mathrm◆LB◆Pa$$

_Cross-reference:_ Section 5.2, Section 5.4, Section 5.5.

</details>

**Problem 17.** Find the skin depth for a 1 MHz electromagnetic wave in copper
($\sigma = 5.96 \times 10^7$ S/m, $\mu_r \approx 1$). At what frequency does the skin depth Equal 1
$\mu$M?

<details>
<summary>Solution</summary>

At $f = 1$ MHz:

$$\delta = \sqrt◆LB◆\frac◆LB◆2◆RB◆◆LB◆\mu_0\sigma\omega◆RB◆◆RB◆ = \sqrt◆LB◆\frac◆LB◆2◆RB◆◆LB◆4\pi \times 10^◆LB◆-7◆RB◆ \times 5.96 \times 10^7 \times 2\pi \times 10^6◆RB◆◆RB◆$$

$$= \sqrt◆LB◆\frac◆LB◆2◆RB◆◆LB◆4\pi \times 5.96 \times 2\pi^2 \times 10^6◆RB◆◆RB◆ = \sqrt◆LB◆\frac◆LB◆2◆RB◆◆LB◆4.70 \times 10^8◆RB◆◆RB◆ \approx 65.2\ \mu\mathrm◆LB◆m$$

For $\delta = 1\ \mu$M:

$$1 \times 10^◆LB◆-6◆RB◆ = \sqrt◆LB◆\frac◆LB◆2◆RB◆◆LB◆4\pi \times 10^◆LB◆-7◆RB◆ \times 5.96 \times 10^7 \times 2\pi f◆RB◆◆RB◆$$

$$10^◆LB◆-12◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆4\pi \times 5.96 \times 2\pi \times f◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆470.4\,f◆RB◆$$

$$f = \frac◆LB◆2◆RB◆◆LB◆470.4 \times 10^◆LB◆-12◆RB◆◆RB◆ \approx 4.25 \times 10^9\ \mathrm◆LB◆Hz = 4.25\ \mathrm◆LB◆GHz$$

_Cross-reference:_ Section 5.6.

</details>

**Problem 18.** Verify that Maxwell's equations in covariant form
$\partial_\mu F^◆LB◆\mu\nu◆RB◆ = \mu_0 J^\nu$ reproduce the Ampere-Maxwell law for $\nu = 1$.

<details>
<summary>Solution</summary>

For $\nu = 1$:

$$\partial_\mu F^◆LB◆\mu 1◆RB◆ = \mu_0 J^1 = \mu_0 J_x$$

From the field tensor:

$$F^◆LB◆\mu 1◆RB◆ = (E_x/c,\ 0,\ -B_z,\ B_y) \quad \mathrm◆LB◆for\ \mu = 0, 1, 2, 3$$

So:

$$\partial_0 F^◆LB◆01◆RB◆ + \partial_2 F^◆LB◆21◆RB◆ + \partial_3 F^◆LB◆31◆RB◆ = \mu_0 J_x$$

$$\frac◆LB◆1◆RB◆◆LB◆c◆RB◆\frac◆LB◆\partial◆RB◆◆LB◆\partial t◆RB◆\!\left(\frac◆LB◆E_x◆RB◆◆LB◆c◆RB◆\right) + \frac◆LB◆\partial◆RB◆◆LB◆\partial y◆RB◆(-B_z) + \frac◆LB◆\partial◆RB◆◆LB◆\partial z◆RB◆(B_y) = \mu_0 J_x$$

$$\frac◆LB◆1◆RB◆◆LB◆c^2◆RB◆\frac◆LB◆\partial E_x◆RB◆◆LB◆\partial t◆RB◆ - \frac◆LB◆\partial B_z◆RB◆◆LB◆\partial y◆RB◆ + \frac◆LB◆\partial B_y◆RB◆◆LB◆\partial z◆RB◆ = \mu_0 J_x$$

Using $c^2 = 1/(\mu_0\varepsilon_0)$ and noting that
$-(\partial B_z/\partial y) + (\partial B_y/\partial z) = -(\nabla \times \mathbf◆LB◆B◆RB◆)_x$:

$$\mu_0\varepsilon_0\frac◆LB◆\partial E_x◆RB◆◆LB◆\partial t◆RB◆ - (\nabla \times \mathbf◆LB◆B◆RB◆)_x = \mu_0 J_x$$

$$(\nabla \times \mathbf◆LB◆B◆RB◆)_x = \mu_0\varepsilon_0\frac◆LB◆\partial E_x◆RB◆◆LB◆\partial t◆RB◆ - \mu_0 J_x$$

$$\nabla \times \mathbf◆LB◆B◆RB◆ = \mu_0\mathbf◆LB◆J◆RB◆ + \mu_0\varepsilon_0\frac◆LB◆\partial\mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\partial t◆RB◆$$

This is the Ampere-Maxwell law. $\blacksquare$

_Cross-reference:_ Section 7.4, Section 1.1.

</details>

## 9. Waveguides and Cavities

### 9.1 Rectangular Waveguides

A rectangular waveguide with dimensions $a$ (width) and $b$ (height) supports electromagnetic waves
propagating in the $z$-direction. Two families of modes exist: **TE** (transverse electric,
$E_z = 0$) and **TM** (transverse magnetic, $B_z = 0$).

**TE$_◆LB◆mn◆RB◆$ modes.** The longitudinal field is
$B_z = B_0\cos(m\pi x/a)\cos(n\pi y/b)\,e^◆LB◆i(kz-\omega t)◆RB◆$.

The transverse fields are determined from $B_z$ via:

$$E_x = \frac◆LB◆i\omega◆RB◆◆LB◆k_c^2◆RB◆\frac◆LB◆\partial B_z◆RB◆◆LB◆\partial y◆RB◆, \quad E_y = -\frac◆LB◆i\omega◆RB◆◆LB◆k_c^2◆RB◆\frac◆LB◆\partial B_z◆RB◆◆LB◆\partial x◆RB◆$$

$$B_x = \frac◆LB◆-ik◆RB◆◆LB◆k_c^2◆RB◆\frac◆LB◆\partial B_z◆RB◆◆LB◆\partial x◆RB◆, \quad B_y = \frac◆LB◆-ik◆RB◆◆LB◆k_c^2◆RB◆\frac◆LB◆\partial B_z◆RB◆◆LB◆\partial y◆RB◆$$

Where $k_c^2 = (m\pi/a)^2 + (n\pi/b)^2$ is the cutoff wavenumber.

**Cutoff frequency:** Waves propagate only when $\omega > \omega_◆LB◆c,mn◆RB◆$ where:

$$f_◆LB◆c,mn◆RB◆ = \frac◆LB◆c◆RB◆◆LB◆2◆RB◆\sqrt◆LB◆\left(\frac◆LB◆m◆RB◆◆LB◆a◆RB◆\right)^2 + \left(\frac◆LB◆n◆RB◆◆LB◆b◆RB◆\right)^2◆RB◆$$

The dominant (lowest frequency) mode is TE$_◆LB◆10◆RB◆$ with $f_◆LB◆c,10◆RB◆ = c/(2a)$ (for $a > b$).

**Dispersion relation:**

$$k = \sqrt◆LB◆\frac◆LB◆\omega^2◆RB◆◆LB◆c^2◆RB◆ - k_c^2◆RB◆, \quad v_◆LB◆\text◆LB◆phase◆RB◆ = \frac◆LB◆\omega◆RB◆◆LB◆k◆RB◆ = \frac◆LB◆c◆RB◆◆LB◆\sqrt◆LB◆1 - (\omega_c/\omega)^2◆RB◆◆RB◆ > c$$

$$v_◆LB◆\text◆LB◆group◆RB◆ = \frac◆LB◆d\omega◆RB◆◆LB◆dk◆RB◆ = c\sqrt◆LB◆1 - \left(\frac◆LB◆\omega_c◆RB◆◆LB◆\omega◆RB◆\right)^2◆RB◆ < c$$

The product $v_p \cdot v_g = c^2$.

### 9.2 Waveguide Impedance and Power Flow

The wave impedance for TE modes:

$$Z_◆LB◆\text◆LB◆TE◆RB◆ = \frac◆LB◆E_x◆RB◆◆LB◆H_y◆RB◆ = \frac◆LB◆\omega\mu_0◆RB◆◆LB◆k◆RB◆ = \frac◆LB◆Z_0◆RB◆◆LB◆\sqrt◆LB◆1 - (f_c/f)^2◆RB◆◆RB◆$$

Where $Z_0 = \sqrt◆LB◆\mu_0/\varepsilon_0◆RB◆ \approx 377\,\Omega$ is the impedance of free space.

The time-averaged power carried by TE$_◆LB◆10◆RB◆$ mode:

$$\langle P \rangle = \frac◆LB◆ab◆RB◆◆LB◆4◆RB◆E_0^2\frac◆LB◆\beta◆RB◆◆LB◆\omega\mu_0◆RB◆ = \frac◆LB◆ab◆RB◆◆LB◆4Z_◆LB◆\text◆LB◆TE◆RB◆◆RB◆E_0^2$$

Where $\beta = k$ is the propagation constant and $E_0$ is the peak electric field.

### 9.3 Resonant Cavities

A rectangular cavity of dimensions $a \times b \times d$ supports standing waves at resonant
frequencies:

$$f_◆LB◆mnp◆RB◆ = \frac◆LB◆c◆RB◆◆LB◆2◆RB◆\sqrt◆LB◆\left(\frac◆LB◆m◆RB◆◆LB◆a◆RB◆\right)^2 + \left(\frac◆LB◆n◆RB◆◆LB◆b◆RB◆\right)^2 + \left(\frac◆LB◆p◆RB◆◆LB◆d◆RB◆\right)^2◆RB◆$$

Where $m, n, p$ are non-negative integers (not all zero). For TM modes, $p \geq 1$; for TE modes,
$m$ and $n$ cannot both be zero.

**Quality factor:**

$$Q = \frac◆LB◆\omega \times \text◆LB◆energy stored◆RB◆◆LB◆\text◆LB◆power dissipated◆RB◆ = \frac◆LB◆2\pi \times \text◆LB◆energy stored◆RB◆◆LB◆\text◆LB◆energy lost per cycle◆RB◆$$

For a cavity with conducting walls of conductivity $\sigma$:

$$Q \approx \frac◆LB◆V◆RB◆◆LB◆S\,\delta◆RB◆ \cdot \frac◆LB◆3◆RB◆◆LB◆2◆RB◆$$

Where $V$ is the cavity volume, $S$ is the surface area, and $\delta$ is the skin depth.

<details>
<summary>Worked Example 9.1: X-Band Waveguide</summary>

Standard X-band waveguide (WR-90) has $a = 22.86$ mm, $b = 10.16$ mm.

(a) Cutoff frequency of TE$_◆LB◆10◆RB◆$ mode:

$$f_◆LB◆c,10◆RB◆ = \frac◆LB◆c◆RB◆◆LB◆2a◆RB◆ = \frac◆LB◆3 \times 10^8◆RB◆◆LB◆2 \times 22.86 \times 10^◆LB◆-3◆RB◆◆RB◆ = \frac◆LB◆3 \times 10^8◆RB◆◆LB◆4.572 \times 10^◆LB◆-2◆RB◆◆RB◆ = 6.56\ \text◆LB◆GHz$$

(b) At $f = 10$ GHz (within X-band), is TE$_◆LB◆10◆RB◆$ the only propagating mode?

Cutoff of TE$_◆LB◆01◆RB◆$: $f_◆LB◆c,01◆RB◆ = c/(2b) = 3 \times 10^8/(2 \times 10.16 \times 10^◆LB◆-3◆RB◆) = 14.76$
GHz.

Cutoff of TE$_◆LB◆20◆RB◆$: $f_◆LB◆c,20◆RB◆ = c/a = 13.12$ GHz.

Since $6.56 < 10 < 13.12$ GHz, only TE$_◆LB◆10◆RB◆$ propagates. This single-mode operation is essential
for low-loss, distortion-free signal transmission.

(c) Guide wavelength at 10 GHz:

$$\lambda_g = \frac◆LB◆\lambda◆RB◆◆LB◆\sqrt◆LB◆1 - (f_c/f)^2◆RB◆◆RB◆ = \frac◆LB◆30\ \text◆LB◆mm◆RB◆◆LB◆\sqrt◆LB◆1 - (6.56/10)^2◆RB◆◆RB◆ = \frac◆LB◆30◆RB◆◆LB◆\sqrt◆LB◆1 - 0.430◆RB◆◆RB◆ = \frac◆LB◆30◆RB◆◆LB◆0.755◆RB◆ = 39.7\ \text◆LB◆mm$$

(d) Phase and group velocities:

$$v_p = \frac◆LB◆c◆RB◆◆LB◆\sqrt◆LB◆1 - (f_c/f)^2◆RB◆◆RB◆ = \frac◆LB◆3 \times 10^8◆RB◆◆LB◆0.755◆RB◆ = 3.97 \times 10^8\ \text◆LB◆m/s = 1.32\,c$$

$$v_g = c\sqrt◆LB◆1 - (f_c/f)^2◆RB◆ = 3 \times 10^8 \times 0.755 = 2.27 \times 10^8\ \text◆LB◆m/s = 0.756\,c$$

Check: $v_p \times v_g = 1.32c \times 0.756c = c^2$. $\checkmark$

</details>

## 10. Radiation from Accelerating Charges

### 10.1 Larmor Formula

A non-relativistic charge $q$ undergoing acceleration $\mathbf◆LB◆a◆RB◆$ radiates power:

$$P = \frac◆LB◆q^2 a^2◆RB◆◆LB◆6\pi\varepsilon_0 c^3◆RB◆$$

For an oscillating dipole $\mathbf◆LB◆p◆RB◆ = q\mathbf◆LB◆d◆RB◆\cos\omega t$ with acceleration $a = \omega^2 d$:

$$P = \frac◆LB◆q^2 \omega^4 d^2◆RB◆◆LB◆12\pi\varepsilon_0 c^3◆RB◆ = \frac◆LB◆\omega^4 p_0^2◆RB◆◆LB◆12\pi\varepsilon_0 c^3◆RB◆$$

Where $p_0 = qd$ is the dipole moment amplitude.

**Radiation resistance:** Equating $P = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆I_0^2 R_◆LB◆\text◆LB◆rad◆RB◆$ for an antenna of length
$\ell$ carrying current $I_0$ at frequency $\omega$:

$$R_◆LB◆\text◆LB◆rad◆RB◆ = \frac◆LB◆\mu_0 c◆RB◆◆LB◆6\pi◆RB◆\left(\frac◆LB◆\omega \ell◆RB◆◆LB◆c◆RB◆\right)^2 = \frac◆LB◆\pi◆RB◆◆LB◆6◆RB◆Z_0\left(\frac◆LB◆\ell◆RB◆◆LB◆\lambda◆RB◆\right)^2 \approx 197\left(\frac◆LB◆\ell◆RB◆◆LB◆\lambda◆RB◆\right)^2\ \Omega$$

### 10.2 Electric Dipole Radiation

The radiation fields from an oscillating electric dipole at distance $r \gg \lambda$:

$$\mathbf◆LB◆E◆RB◆ = -\frac◆LB◆\mu_0 \omega^2 p_0◆RB◆◆LB◆4\pi r◆RB◆\sin\theta\, e^◆LB◆i(kr - \omega t)◆RB◆\,\hat◆LB◆\boldsymbol◆LB◆\theta◆RB◆◆RB◆$$

$$\mathbf◆LB◆B◆RB◆ = -\frac◆LB◆\mu_0 \omega^2 p_0◆RB◆◆LB◆4\pi c\, r◆RB◆\sin\theta\, e^◆LB◆i(kr - \omega t)◆RB◆\,\hat◆LB◆\boldsymbol◆LB◆\phi◆RB◆◆RB◆$$

The angular distribution of radiated power:

$$\frac◆LB◆dP◆RB◆◆LB◆d\Omega◆RB◆ = \frac◆LB◆\mu_0 p_0^2 \omega^4◆RB◆◆LB◆32\pi^2 c◆RB◆\sin^2\theta$$

The total power (integrating over solid angle):

$$P = \frac◆LB◆\mu_0 p_0^2 \omega^4◆RB◆◆LB◆12\pi c◆RB◆$$

The radiation pattern is toroidal (doughnut-shaped), with zero radiation along the dipole axis
($\theta = 0, \pi$) and maximum in the equatorial plane ($\theta = \pi/2$).

### 10.3 Relativistic Radiation: Liénard--Wiechert Potentials

For a relativistic charge with velocity $\boldsymbol◆LB◆\beta◆RB◆ = \mathbf◆LB◆v◆RB◆/c$ and acceleration
$\dot◆LB◆\boldsymbol◆LB◆\beta◆RB◆◆RB◆$:

$$P = \frac◆LB◆q^2◆RB◆◆LB◆6\pi\varepsilon_0 c◆RB◆\gamma^6\left[(\dot◆LB◆\boldsymbol◆LB◆\beta◆RB◆◆RB◆)^2 - (\boldsymbol◆LB◆\beta◆RB◆ \times \dot◆LB◆\boldsymbol◆LB◆\beta◆RB◆◆RB◆)^2\right]$$

For linear acceleration ($\boldsymbol◆LB◆\beta◆RB◆ \parallel \dot◆LB◆\boldsymbol◆LB◆\beta◆RB◆◆RB◆$):

$$P = \frac◆LB◆q^2◆RB◆◆LB◆6\pi\varepsilon_0 c◆RB◆\gamma^6\dot◆LB◆\beta◆RB◆^2$$

For circular acceleration ($\boldsymbol◆LB◆\beta◆RB◆ \perp \dot◆LB◆\boldsymbol◆LB◆\beta◆RB◆◆RB◆$E.g., synchrotron):

$$P = \frac◆LB◆q^2◆RB◆◆LB◆6\pi\varepsilon_0 c◆RB◆\gamma^4\dot◆LB◆\beta◆RB◆^2 = \frac◆LB◆q^2 c◆RB◆◆LB◆6\pi\varepsilon_0◆RB◆\frac◆LB◆\gamma^4◆RB◆◆LB◆R^2◆RB◆$$

Where $R$ is the radius of curvature. The $\gamma^4$ factor (vs. $\gamma^6$ for linear) explains why
synchrotron radiation is significant for relativistic electrons but negligible for protons at the
same energy ($\gamma$ is $m_p/m_e \approx 1836$ times smaller).

**Synchrotron radiation spectrum:** The critical frequency is
$\omega_c = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆\gamma^3\frac◆LB◆c◆RB◆◆LB◆R◆RB◆$. The spectrum peaks near $\omega_c$ and extends to high
harmonics, making synchrotron radiation a powerful broadband source from infrared to X-rays.

<details>
<summary>Worked Example 10.1: Synchrotron Radiation from a Storage Ring</summary>

The Diamond Light Source operates at $E = 3$ GeV electron energy with a ring circumference of 561.6
m.

(a) Lorentz factor: $\gamma = E/(m_e c^2) = 3 \times 10^9/(0.511 \times 10^6) = 5871$.

(b) For a bending magnet with radius $R = 7.1$ m:

$$P = \frac◆LB◆e^2 c◆RB◆◆LB◆6\pi\varepsilon_0◆RB◆\frac◆LB◆\gamma^4◆RB◆◆LB◆R^2◆RB◆ = \frac◆LB◆(1.6 \times 10^◆LB◆-19◆RB◆)^2 \times 3 \times 10^8◆RB◆◆LB◆6\pi \times 8.85 \times 10^◆LB◆-12◆RB◆◆RB◆\frac◆LB◆(5871)^4◆RB◆◆LB◆(7.1)^2◆RB◆$$

$$= \frac◆LB◆2.56 \times 10^◆LB◆-38◆RB◆ \times 3 \times 10^8◆RB◆◆LB◆1.669 \times 10^◆LB◆-10◆RB◆◆RB◆\frac◆LB◆1.187 \times 10^◆LB◆15◆RB◆◆RB◆◆LB◆50.4◆RB◆$$

$$= 4.60 \times 10^◆LB◆-20◆RB◆ \times 2.355 \times 10^◆LB◆13◆RB◆ = 1.08 \times 10^◆LB◆-6◆RB◆\ \text◆LB◆W per electron$$

With a beam current of 300 mA ($I = 0.3$ A, $N = I/e = 1.875 \times 10^◆LB◆18◆RB◆$ electrons/s):

Total power
$= 1.08 \times 10^◆LB◆-6◆RB◆ \times 1.875 \times 10^◆LB◆18◆RB◆ \times \frac◆LB◆561.6◆RB◆◆LB◆(2\pi \times 7.1)◆RB◆$

Wait: the power per electron is already the total radiated power. The total synchrotron radiation
power from the ring is:

$$P_◆LB◆\text◆LB◆total◆RB◆ = N_◆LB◆\text◆LB◆stored◆RB◆ \times P_◆LB◆\text◆LB◆per electron◆RB◆ \times \frac◆LB◆\text◆LB◆bending length◆RB◆◆LB◆\text◆LB◆circumference◆RB◆$$

For a rough estimate:
$P_◆LB◆\text◆LB◆total◆RB◆ \approx 0.3 \times 3 \times 10^9 \times \frac◆LB◆1.08 \times 10^◆LB◆-6◆RB◆◆RB◆◆LB◆1.6 \times 10^◆LB◆-19◆RB◆◆RB◆ \times \frac◆LB◆2\pi \times 7.1◆RB◆◆LB◆561.6◆RB◆ \approx 500$
kW.

The actual Diamond power is about 400 kW, consistent with this estimate.

(c) Critical frequency:

$$\omega_c = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆\gamma^3\frac◆LB◆c◆RB◆◆LB◆R◆RB◆ = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆(5871)^3\frac◆LB◆3 \times 10^8◆RB◆◆LB◆7.1◆RB◆ = 1.5 \times 2.02 \times 10^◆LB◆11◆RB◆ \times 4.23 \times 10^7 = 1.28 \times 10^◆LB◆19◆RB◆\ \text◆LB◆rad/s$$

$$\hbar\omega_c = 1.055 \times 10^◆LB◆-34◆RB◆ \times 1.28 \times 10^◆LB◆19◆RB◆ = 1.35 \times 10^◆LB◆-15◆RB◆\ \text◆LB◆J = 8.4\ \text◆LB◆keV$$

This is in the hard X-ray range, suitable for protein crystallography and materials science.

</details>

## 11. Advanced Electrodynamics

### 11.1 Multipole Expansion

The scalar potential of a localised charge distribution at large distances ($r \gg d$Where $d$ is
the size of the distribution):

$$\phi(\mathbf◆LB◆r◆RB◆) = \frac◆LB◆1◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\left[\frac◆LB◆Q◆RB◆◆LB◆r◆RB◆ + \frac◆LB◆\mathbf◆LB◆p◆RB◆\cdot\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆◆RB◆◆LB◆r^2◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\sum_◆LB◆ij◆RB◆Q_◆LB◆ij◆RB◆\frac◆LB◆\hat◆LB◆r◆RB◆_i\hat◆LB◆r◆RB◆_j◆RB◆◆LB◆r^3◆RB◆ + \cdots\right]$$

**Monopole term:** $Q = \int \rho\, dV$ (total charge).

**Dipole term:** $\mathbf◆LB◆p◆RB◆ = \int \mathbf◆LB◆r◆RB◆'\,\rho(\mathbf◆LB◆r◆RB◆')\,dV'$ (electric dipole moment).

**Quadrupole term:** $Q_◆LB◆ij◆RB◆ = \int (3r'_ir'_j - r'^2\delta_◆LB◆ij◆RB◆)\,\rho(\mathbf◆LB◆r◆RB◆')\,dV'$
(traceless quadrupole tensor).

The quadrupole term is important for nuclei with spin $I \geq 1$ and for non-spherical charge
distributions. The quadrupole moment $Q = Q_◆LB◆zz◆RB◆$ (in the principal axis frame) characterises the
deviation from spherical symmetry.

### 11.2 Gauge Transformations and Potentials

The scalar and vector potentials are not unique. The **gauge transformation**:

$$\mathbf◆LB◆A◆RB◆' = \mathbf◆LB◆A◆RB◆ + \nabla\chi, \quad \phi' = \phi - \frac◆LB◆\partial\chi◆RB◆◆LB◆\partial t◆RB◆$$

Leaves $\mathbf◆LB◆E◆RB◆$ and $\mathbf◆LB◆B◆RB◆$ unchanged for any scalar function $\chi(\mathbf◆LB◆r◆RB◆, t)$.

**Common gauges:**

| Gauge    | Condition                                                                    | Use                                |
| -------- | ---------------------------------------------------------------------------- | ---------------------------------- |
| Coulomb  | $\nabla \cdot \mathbf◆LB◆A◆RB◆ = 0$                                                | Static problems, quantum mechanics |
| Lorenz   | $\nabla \cdot \mathbf◆LB◆A◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆c^2◆RB◆\frac◆LB◆\partial\phi◆RB◆◆LB◆\partial t◆RB◆ = 0$ | Relativistic problems, radiation   |
| Temporal | $\phi = 0$                                                                   | Some scattering problems           |

In the Lorenz gauge, both $\mathbf◆LB◆A◆RB◆$ and $\phi$ satisfy wave equations with sources:

$$\Box^2\mathbf◆LB◆A◆RB◆ = -\mu_0\mathbf◆LB◆J◆RB◆, \quad \Box^2\phi = -\frac◆LB◆\rho◆RB◆◆LB◆\varepsilon_0◆RB◆$$

Where $\Box^2 = \nabla^2 - \frac◆LB◆1◆RB◆◆LB◆c^2◆RB◆\frac◆LB◆\partial^2◆RB◆◆LB◆\partial t^2◆RB◆$ is the d'Alembertian.

### 11.3 Electromagnetic Stress-Energy Tensor

The electromagnetic stress-energy tensor $T^◆LB◆\mu\nu◆RB◆$ encodes the energy density, momentum density,
and stress:

$$T^◆LB◆00◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left(\varepsilon_0 E^2 + \frac◆LB◆B^2◆RB◆◆LB◆\mu_0◆RB◆\right) \quad \text◆LB◆(energy density)$$

$$T^◆LB◆0i◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆c◆RB◆(\mathbf◆LB◆E◆RB◆ \times \mathbf◆LB◆B◆RB◆)_i = \frac◆LB◆S_i◆RB◆◆LB◆c◆RB◆ \quad \text◆LB◆(momentum density)$$

$$T^◆LB◆ij◆RB◆ = -\varepsilon_0 E_i E_j - \frac◆LB◆1◆RB◆◆LB◆\mu_0◆RB◆B_i B_j + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\delta_◆LB◆ij◆RB◆\left(\varepsilon_0 E^2 + \frac◆LB◆B^2◆RB◆◆LB◆\mu_0◆RB◆\right) \quad \text◆LB◆(Maxwell stress tensor)$$

**Conservation law:** $\partial_\mu T^◆LB◆\mu\nu◆RB◆ = -f^\nu$ where $f^\nu$ is the Lorentz force density
on charges.

**Radiation pressure:** For a normally incident plane wave with intensity $I$:

$$P_◆LB◆\text◆LB◆rad◆RB◆ = \frac◆LB◆I◆RB◆◆LB◆c◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\varepsilon_0 E_0^2$$

For a perfect reflector, the radiation pressure is $2I/c$ (momentum transfer is doubled).

<details>
<summary>Worked Example 11.1: Radiation Pressure from Sunlight</summary>

Solar constant at Earth: $I = 1361$ W/m$^2$.

Radiation pressure on a perfectly absorbing surface:

$$P = \frac◆LB◆I◆RB◆◆LB◆c◆RB◆ = \frac◆LB◆1361◆RB◆◆LB◆3 \times 10^8◆RB◆ = 4.54 \times 10^◆LB◆-6◆RB◆\ \text◆LB◆N/m^2 = 4.54\ \mu\text◆LB◆Pa$$

For a perfect reflector: $P = 9.07\,\mu\text◆LB◆Pa$.

This is tiny compared to atmospheric pressure ($10^5$ Pa), but is significant for:

- Solar sails: A 100 m $\times$ 100 m sail with 90% reflectivity experiences $F \approx 0.12$ N,
  producing acceleration $a \approx 0.6$ mm/s$^2$ for a 100 kg sail.
- Asteroid deflection: Sustained radiation pressure can perturb asteroid orbits over years.
- Atom optics: Laser cooling uses radiation pressure to slow atoms to microkelvin temperatures.

</details>

## Common Pitfalls (Additional)

1. **$v_p > c$ does not violate relativity:** The phase velocity in a waveguide exceeds $c$But no
   information or energy travels faster than $c$. The group velocity (signal velocity) is always
   $v_g < c$. Similarly, the refracted phase front in a prism can appear to move faster than $c$But
   the actual signal does not.

2. **Gauge choice matters for potentials, not fields:** Different gauges give different $\mathbf◆LB◆A◆RB◆$
   and $\phi$ for the same $\mathbf◆LB◆E◆RB◆$ and $\mathbf◆LB◆B◆RB◆$. In quantum mechanics, the Hamiltonian
   depends on the gauge, but all physical observables are gauge-invariant. The Aharonov--Bohm effect
   shows that even in regions where $\mathbf◆LB◆E◆RB◆ = \mathbf◆LB◆B◆RB◆ = 0$The vector potential $\mathbf◆LB◆A◆RB◆$
   has measurable physical effects.

3. **Multipole expansion convergence:** The multipole expansion converges only outside a sphere that
   encloses all charges. Inside the charge distribution, the expansion diverges and must not be
   used. The expansion parameter is $d/r$ where $d$ is the source size and $r$ is the observation
   distance.

4. **Radiation fields vs. Near fields:** At distances $r \ll \lambda$ (near field), the fields are
   dominated by $1/r^2$ (induction) and $1/r^3$ (electrostatic/magnetostatic) terms. The radiation
   fields ($\propto 1/r$) dominate only in the far field ($r \gg \lambda$). Do not apply the Larmor
   formula or radiation resistance in the near field.

5. **Poynting vector is not unique:** The Poynting vector
   $\mathbf◆LB◆S◆RB◆ = \mathbf◆LB◆E◆RB◆ \times \mathbf◆LB◆H◆RB◆$ is gauge-dependent and can be nonzero even in static
   situations (e.g., a charged capacitor in a constant magnetic field). Only the surface integral
   $\oint \mathbf◆LB◆S◆RB◆ \cdot d\mathbf◆LB◆a◆RB◆$ (total power flow) is physically meaningful.

## Problems (Additional)

<details>
<summary>Problem 19: TE$_◆LB◆10◆RB◆$ Mode Field Patterns</summary>

For a rectangular waveguide ($a \times b$) operating in TE$_◆LB◆10◆RB◆$ mode at frequency $f$:

(a) Write the complete expressions for all six field components ($E_x, E_y, E_z, B_x, B_y, B_z$).

(b) Sketch the field pattern: show the direction and relative magnitude of $\mathbf◆LB◆E◆RB◆$ and
$\mathbf◆LB◆B◆RB◆$ in the $xy$-plane at $z = 0$.

(c) Find the positions of maximum surface current density on the walls and explain why the waveguide
loss is minimised by making the broad wall dimension $a$ as large as possible (for a given $f$).

**Solution:**

(a) For TE$_◆LB◆10◆RB◆$: $B_z = B_0\cos(\pi x/a)\,e^◆LB◆i(\beta z - \omega t)◆RB◆$.

$$E_x = 0, \quad E_y = \frac◆LB◆i\omega\mu_0 a◆RB◆◆LB◆\pi◆RB◆B_0\sin\!\left(\frac◆LB◆\pi x◆RB◆◆LB◆a◆RB◆\right)e^◆LB◆i(\beta z - \omega t)◆RB◆$$

$$E_z = 0$$

$$B_x = -\frac◆LB◆i\beta a◆RB◆◆LB◆\pi◆RB◆B_0\sin\!\left(\frac◆LB◆\pi x◆RB◆◆LB◆a◆RB◆\right)e^◆LB◆i(\beta z - \omega t)◆RB◆, \quad B_y = 0$$

$$B_z = B_0\cos\!\left(\frac◆LB◆\pi x◆RB◆◆LB◆a◆RB◆\right)e^◆LB◆i(\beta z - \omega t)◆RB◆$$

(b) The electric field $E_y$ is purely vertical, with a $\sin(\pi x/a)$ profile: zero at the side
walls ($x = 0, a$) and maximum at the centre ($x = a/2$). The magnetic field forms closed loops in
the $xz$-plane.

(c) Surface current $\mathbf◆LB◆K◆RB◆ = \hat◆LB◆\mathbf◆LB◆n◆RB◆◆RB◆ \times \mathbf◆LB◆H◆RB◆$. On the broad walls
($y = 0, b$): $\mathbf◆LB◆K◆RB◆$ has components from $B_x$ and $B_z$With maximum at $x = a/2$ (where
$\sin(\pi x/a) = 1$). The power loss per unit length is:

$$P_◆LB◆\text◆LB◆loss◆RB◆ = \frac◆LB◆R_s◆RB◆◆LB◆2◆RB◆\oint |\mathbf◆LB◆K◆RB◆|^2\, dl$$

Where $R_s = \sqrt◆LB◆\omega\mu_0/(2\sigma)◆RB◆$ is the surface resistance. For fixed $f$Increasing $a$
reduces the current density on the broad walls and increases the power-handling capacity.

</details>

<details>
<summary>Problem 20: Antenna Radiation Pattern</summary>

A half-wave dipole antenna of length $\ell = \lambda/2$ carries a sinusoidal current distribution:

$$I(z) = I_0\cos(kz), \quad -\lambda/4 \leq z \leq \lambda/4$$

(a) Calculate the radiation fields $\mathbf◆LB◆E◆RB◆$ and $\mathbf◆LB◆B◆RB◆$ in the far field.

(b) Find the angular distribution of radiated power $dP/d\Omega$.

(c) Calculate the total radiated power and the radiation resistance. Compare with the short-dipole
result $R_◆LB◆\text◆LB◆rad◆RB◆ = 197(\ell/\lambda)^2\,\Omega$.

**Solution:**

(a) The vector potential in the far field:

$$A_z = \frac◆LB◆\mu_0◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆e^◆LB◆ikr◆RB◆◆RB◆◆LB◆r◆RB◆\int_◆LB◆-\lambda/4◆RB◆^◆LB◆\lambda/4◆RB◆I_0\cos(kz')\,e^◆LB◆-ikz'\cos\theta◆RB◆\,dz'$$

The integral evaluates to:

$$A_z = \frac◆LB◆\mu_0 I_0◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆e^◆LB◆ikr◆RB◆◆RB◆◆LB◆r◆RB◆\frac◆LB◆2\cos\!\left(\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\cos\theta\right)◆RB◆◆LB◆k\sin^2\theta◆RB◆$$

The radiation fields:

$$E_\theta = ikA_z\sin\theta = \frac◆LB◆i\mu_0 c I_0◆RB◆◆LB◆4\pi◆RB◆\frac◆LB◆e^◆LB◆ikr◆RB◆◆RB◆◆LB◆r◆RB◆\frac◆LB◆\cos\!\left(\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\cos\theta\right)◆RB◆◆LB◆\sin\theta◆RB◆$$

$$B_\phi = E_\theta/c$$

(b) The angular distribution:

$$\frac◆LB◆dP◆RB◆◆LB◆d\Omega◆RB◆ = \frac◆LB◆r^2◆RB◆◆LB◆2Z_0◆RB◆|E_\theta|^2 = \frac◆LB◆Z_0 I_0^2◆RB◆◆LB◆32\pi^2◆RB◆\frac◆LB◆\cos^2\!\left(\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\cos\theta\right)◆RB◆◆LB◆\sin^2\theta◆RB◆$$

(c) Total power:

$$P = \frac◆LB◆Z_0 I_0^2◆RB◆◆LB◆32\pi^2◆RB◆\int_0^◆LB◆2\pi◆RB◆\!\!\int_0^\pi \frac◆LB◆\cos^2\!\left(\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\cos\theta\right)◆RB◆◆LB◆\sin^2\theta◆RB◆\sin\theta\,d\theta\,d\phi$$

$$= \frac◆LB◆Z_0 I_0^2◆RB◆◆LB◆16\pi◆RB◆\int_0^\pi \frac◆LB◆\cos^2\!\left(\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆\cos\theta\right)◆RB◆◆LB◆\sin\theta◆RB◆\,d\theta$$

With the substitution $u = \cos\theta$: $\int_◆LB◆-1◆RB◆^◆LB◆1◆RB◆\frac◆LB◆\cos^2(\pi u/2)◆RB◆◆LB◆1-u^2◆RB◆\,du = 1.2188$
(the Siegel integral).

$$P = \frac◆LB◆377 \times 1.2188◆RB◆◆LB◆16\pi◆RB◆I_0^2 = 9.16\,I_0^2$$

Radiation resistance: $R_◆LB◆\text◆LB◆rad◆RB◆ = 2P/I_0^2 = 18.3\,\Omega$.

For comparison, a short dipole ($\ell \ll \lambda$) of length $\lambda/2$ would give
$R_◆LB◆\text◆LB◆rad◆RB◆ = 197 \times 0.25 = 49.3\,\Omega$. The half-wave dipole has lower radiation
resistance because the current distribution (cosine) has less total effective acceleration than a
uniform current.

The directivity of the half-wave dipole is $D = 1.64$ (2.15 dBi), slightly higher than the short
dipole ($D = 1.5$).

</details>

## 12. Special Relativity and Electromagnetism

### 12.1 Covariant Formulation

Maxwell's equations in covariant form using the field tensor $F^◆LB◆\mu\nu◆RB◆$:

$$\partial_\mu F^◆LB◆\mu\nu◆RB◆ = \mu_0 J^\nu \quad \text◆LB◆(inhomogeneous)$$

$$\partial_\lambda F_◆LB◆\mu\nu◆RB◆ + \partial_\mu F_◆LB◆\nu\lambda◆RB◆ + \partial_\nu F_◆LB◆\lambda\mu◆RB◆ = 0 \quad \text◆LB◆(homogeneous / Bianchi identity)$$

The electromagnetic field tensor:

$$F^◆LB◆\mu\nu◆RB◆ = \begin◆LB◆pmatrix◆RB◆ 0 & -E_x/c & -E_y/c & -E_z/c \\ E_x/c & 0 & -B_z & B_y \\ E_y/c & B_z & 0 & -B_x \\ E_z/c & -B_y & B_x & 0 \end◆LB◆pmatrix◆RB◆$$

The dual tensor: $\tilde◆LB◆F◆RB◆^◆LB◆\mu\nu◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\epsilon^◆LB◆\mu\nu\rho\sigma◆RB◆F_◆LB◆\rho\sigma◆RB◆$.

The Lorentz force: $f^\mu = qF^◆LB◆\mu\nu◆RB◆u_\nu$ where $u^\nu = \gamma(c, \mathbf◆LB◆v◆RB◆)$ is the
four-velocity.

### 12.2 Lorentz Transformation of Fields

Under a boost with velocity $v$ along the $x$-axis:

$$E'_x = E_x, \quad B'_x = B_x$$

$$E'_y = \gamma(E_y - vB_z), \quad B'_y = \gamma\!\left(B_y + \frac◆LB◆v◆RB◆◆LB◆c^2◆RB◆E_z\right)$$

$$E'_z = \gamma(E_z + vB_y), \quad B'_z = \gamma\!\left(B_z - \frac◆LB◆v◆RB◆◆LB◆c^2◆RB◆E_y\right)$$

**Key insight:** $\mathbf◆LB◆E◆RB◆$ and $\mathbf◆LB◆B◆RB◆$ mix under Lorentz transformations. What appears as a
pure electric field in one frame becomes a mixture of electric and magnetic fields in another. There
is no frame-independent distinction between $\mathbf◆LB◆E◆RB◆$ and $\mathbf◆LB◆B◆RB◆$.

**Invariants:** $E^2 - c^2B^2$ and $\mathbf◆LB◆E◆RB◆\cdot\mathbf◆LB◆B◆RB◆$ are Lorentz invariants. A pure
radiation field ($E = cB$, $\mathbf◆LB◆E◆RB◆\perp\mathbf◆LB◆B◆RB◆$) satisfies both invariants being zero.

### 12.3 Electromagnetic Field Momentum and Angular Momentum

**Field momentum density:**

$$\mathbf◆LB◆g◆RB◆ = \frac◆LB◆\mathbf◆LB◆S◆RB◆◆RB◆◆LB◆c^2◆RB◆ = \varepsilon_0\mathbf◆LB◆E◆RB◆ \times \mathbf◆LB◆B◆RB◆$$

**Field angular momentum:** $\mathbf◆LB◆L◆RB◆ = \int \mathbf◆LB◆r◆RB◆ \times \mathbf◆LB◆g◆RB◆\, d^3r$.

**Conservation:** $\frac◆LB◆d◆RB◆◆LB◆dt◆RB◆\left(\mathbf◆LB◆p◆RB◆_◆LB◆\text◆LB◆mech◆RB◆ + \mathbf◆LB◆p◆RB◆_◆LB◆\text◆LB◆field◆RB◆\right) = 0$.

For a charge and a magnetic monopole (if they exist), the field angular momentum
$\mathbf◆LB◆L◆RB◆ = -qg\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆/(4\pi)$ is quantised in units of $\hbar/2$Leading to the Dirac
charge quantisation condition $eg = n\hbar/2$.

<details>
<summary>Worked Example 12.1: Fields of a Moving Point Charge</summary>

A point charge $q$ at rest at the origin has
$\mathbf◆LB◆E◆RB◆ = q\hat◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆/(4\pi\varepsilon_0 r^2)$, $\mathbf◆LB◆B◆RB◆ = 0$.

In a frame moving with velocity $v$ along the $x$-axis, the fields at the boosted position are:

$$E'_y = \gamma\frac◆LB◆qy'◆RB◆◆LB◆4\pi\varepsilon_0(r'^2 + \gamma^2 v^2 t'^2)^◆LB◆3/2◆RB◆◆RB◆, \quad B'_z = -\frac◆LB◆v◆RB◆◆LB◆c^2◆RB◆E'_y$$

At $t' = 0$: $\mathbf◆LB◆E◆RB◆'$ is still radial (from the instantaneous position) but with an enhanced
transverse component by factor $\gamma$. The magnetic field is
$\mathbf◆LB◆B◆RB◆' = -\mathbf◆LB◆v◆RB◆ \times \mathbf◆LB◆E◆RB◆'/c^2$Circulating around the direction of motion.

The Poynting vector $\mathbf◆LB◆S◆RB◆' = \mathbf◆LB◆E◆RB◆' \times \mathbf◆LB◆B◆RB◆'/\mu_0$ is nonzero even for a
uniformly moving charge (it points outward and forward, indicating energy flow in the direction of
motion).

For ultrarelativistic motion ($\gamma \gg 1$): the fields are concentrated in a thin disk of angular
width $\sim 1/\gamma$ around the plane perpendicular to the motion. This is the basis of
**synchrotron radiation** patterns.

</details>

## 13. Plasma Physics: Brief Overview

### 13.1 Debye Shielding in Plasmas

A plasma screens electric fields over the **Debye length**:

$$\lambda_D = \sqrt◆LB◆\frac◆LB◆\varepsilon_0 k_B T◆RB◆◆LB◆n_e e^2◆RB◆◆RB◆$$

For $n_e = 10^◆LB◆18◆RB◆$ m$^◆LB◆-3◆RB◆$, $T = 10^4$ K: $\lambda_D = 7.4 \times 10^◆LB◆-5◆RB◆$ m $= 74\,\mu$M.

The plasma frequency:

$$\omega_p = \sqrt◆LB◆\frac◆LB◆n_e e^2◆RB◆◆LB◆m_e \varepsilon_0◆RB◆◆RB◆$$

For $n_e = 10^◆LB◆18◆RB◆$ m$^◆LB◆-3◆RB◆$: $\omega_p = 5.64 \times 10^◆LB◆10◆RB◆$ rad/s, $f_p = 8.98$ GHz. EM waves
with $\omega < \omega_p$ cannot propagate (evanescent).

### 13.2 Plasma Oscillations

Small displacements of the electron cloud create restoring forces, leading to **Langmuir waves**:

$$\omega_◆LB◆\text◆LB◆Langmuir◆RB◆ = \omega_p\left(1 + \frac◆LB◆3k_BT◆RB◆◆LB◆2m_e◆RB◆\frac◆LB◆k^2◆RB◆◆LB◆\omega_p^2◆RB◆\right)^◆LB◆-1/2◆RB◆$$

At long wavelengths ($k \to 0$): $\omega \to \omega_p$ (undamped). With ion motion: the ion-acoustic
wave has $\omega^2 = k^2 c_s^2/(1 + k^2\lambda_D^2)$ where $c_s = \sqrt◆LB◆k_BT/m_i◆RB◆$.

## Worked Examples

**Example 1: Conservation of energy**

A $0.50\,\text◆LB◆kg◆RB◆$ ball is dropped from a height of $20\,\text◆LB◆m◆RB◆$. Calculate its speed just before
it hits the ground (ignore air resistance).

**Solution:**

Using conservation of energy: $mgh = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆mv^2$

$$v = \sqrt◆LB◆2gh◆RB◆ = \sqrt◆LB◆2 \times 9.81 \times 20◆RB◆ = \sqrt◆LB◆392.4◆RB◆ \approx 19.8\,\text◆LB◆m\,s◆RB◆^◆LB◆-1◆RB◆$$

## Summary

- Electrostatics: Coulomb's law, Gauss's law
  ($\oint \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆A◆RB◆ = Q/\varepsilon_0$), electric potential
  $V = -\int \mathbf◆LB◆E◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆$.
- Magnetostatics: Biot-Savart law, Ampère's law ($\oint \mathbf◆LB◆B◆RB◆ \cdot d\mathbf◆LB◆l◆RB◆ = \mu_0 I$),
  magnetic vector potential.
- Maxwell's equations unify electricity and magnetism:
  $\nabla \times \mathbf◆LB◆E◆RB◆ = -\partial \mathbf◆LB◆B◆RB◆/\partial t$,
  $\nabla \times \mathbf◆LB◆B◆RB◆ = \mu_0 \mathbf◆LB◆J◆RB◆ + \mu_0 \varepsilon_0 \partial \mathbf◆LB◆E◆RB◆/\partial t$.
- Electromagnetic waves: $c = 1/\sqrt◆LB◆\mu_0 \varepsilon_0◆RB◆$; plane wave solutions; energy density
  $u = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆(\varepsilon_0 E^2 + B^2/\mu_0)$.
- Electrodynamics: retarded potentials, radiation from accelerating charges, and the full Lorentz
  force $\mathbf◆LB◆F◆RB◆ = q(\mathbf◆LB◆E◆RB◆ + \mathbf◆LB◆v◆RB◆ \times \mathbf◆LB◆B◆RB◆)$.

## Cross-References

| Topic                       | Site        | Link                                                                                       |
| --------------------------- | ----------- | ------------------------------------------------------------------------------------------ |
| Classical Mechanics         | WyattsNotes | [View](/docs/university/physics/classical-mechanics)                                       |
| Quantum Mechanics           | WyattsNotes | [View](/docs/university/physics/quantum-mechanics)                                         |
| Optics and Wave Physics     | WyattsNotes | [View](/docs/university/physics/optics-and-wave-physics)                                   |
| Electromagnetism — MIT 8.02 | MIT OCW     | [View](https://ocw.mit.edu/courses/8-02sc-physics-ii-electricity-and-magnetism-fall-2010/) |
