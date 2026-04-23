---
title: Electromagnetism
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

$$\oint_S \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\mathrm{enc}}}{\varepsilon_0} \quad \mathrm{(Gauss's Law)}$$

$$\oint_S \mathbf{B} \cdot d\mathbf{A} = 0 \quad \mathrm{(Gauss's Law for Magnetism)}$$

$$\oint_C \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt} \quad \mathrm{(Faraday's Law)}$$

$$\oint_C \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\mathrm{enc}} + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} \quad \mathrm{(Ampere-Maxwell Law)}$$

**Differential Form:**

$$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} \quad \mathrm{(Gauss's Law)}$$

$$\nabla \cdot \mathbf{B} = 0 \quad \mathrm{(Gauss's Law for Magnetism)}$$

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \quad \mathrm{(Faraday's Law)}$$

$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \quad \mathrm{(Ampere-Maxwell Law)}$$

where $\rho$ is the charge density, $\mathbf{J}$ is the current density, $\varepsilon_0$ is the permittivity
of free space, and $\mu_0$ is the permeability of free space.

### 1.2 Derivation from Integral to Differential Form

**Gauss's Law.** Apply the divergence theorem to the integral form:

$$\oint_S \mathbf{E} \cdot d\mathbf{A} = \int_V (\nabla \cdot \mathbf{E})\, dV = \frac{1}{\varepsilon_0}\int_V \rho\, dV$$

Since this holds for any volume $V$: $\nabla \cdot \mathbf{E} = \rho / \varepsilon_0$.

**Faraday's Law.** Apply Stokes' theorem:

$$\oint_C \mathbf{E} \cdot d\mathbf{l} = \int_S (\nabla \times \mathbf{E}) \cdot d\mathbf{A} = -\int_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{A}$$

Since this holds for any surface $S$: $\nabla \times \mathbf{E} = -\partial \mathbf{B}/\partial t$.

### 1.3 Continuity Equation

Taking the divergence of the Ampere-Maxwell law:

$$\nabla \cdot (\nabla \times \mathbf{B}) = 0 = \mu_0 \nabla \cdot \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial}{\partial t}(\nabla \cdot \mathbf{E})$$

Using Gauss's law: $\nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0$.

This is the **continuity equation**, expressing conservation of charge.

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

For $r > R$: $\mathbf{E} = \frac{Q}{4\pi\varepsilon_0 r^2} \hat{\mathbf{r}}$ (identical to a point charge).

For $r < R$: $E = \frac{Qr}{4\pi\varepsilon_0 R^3}$ (linear in $r$).

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

**Theorem 2.2 (Uniqueness).** The solution to Laplace's (or Poisson's) equation in a region is unique
given either Dirichlet boundary conditions ($V$ specified on the boundary) or Neumann boundary
conditions ($\partial V / \partial n$ specified on the boundary).

### 2.5 Worked Example

**Problem.** Two infinite conducting plates at $x = 0$ and $x = d$ are held at potentials $V = 0$ and
$V = V_0$ respectively. Find the potential and field between them.

*Solution.* Between the plates, $\rho = 0$, so $\nabla^2 V = 0$. By symmetry, $V$ depends only on $x$:

$$\frac{d^2V}{dx^2} = 0 \implies V(x) = Ax + B$$

Boundary conditions: $V(0) = 0 \implies B = 0$. $V(d) = V_0 \implies A = V_0/d$.

$$V(x) = \frac{V_0}{d} x, \quad \mathbf{E} = -\frac{dV}{dx}\hat{\mathbf{x}} = -\frac{V_0}{d}\hat{\mathbf{x}}$$

$\blacksquare$

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

## 4. Electrodynamics

### 4.1 Faraday's Law of Induction

A changing magnetic field induces an electric field:

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$

**Lenz's Law:** The induced EMF opposes the change in flux that produced it.

**Example.** A circular loop of radius $R$ in a uniform magnetic field $\mathbf{B}(t) = B_0 \cos(\omega t)\,\hat{\mathbf{z}}$.

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

By symmetry, use an Amperian loop of radius $r < R$:

$$\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 \varepsilon_0 \frac{\partial}{\partial t}\int \mathbf{E} \cdot d\mathbf{A}$$

$$B \cdot 2\pi r = \mu_0 \varepsilon_0 \cdot \frac{I}{\pi R^2 \varepsilon_0} \cdot \pi r^2 = \frac{\mu_0 I r^2}{R^2}$$

$$B = \frac{\mu_0 I r}{2\pi R^2}$$

$\blacksquare$

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
