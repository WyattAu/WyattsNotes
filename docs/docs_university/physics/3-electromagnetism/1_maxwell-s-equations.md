---
title: Maxwell's Equations
tags:
  - Physics
  - University
---

### 1.1 The Four Equations

Maxwell's equations are the foundation of classical electromagnetism. In SI units:

**Integral Form:**

$$\oint_S \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\mathrm{enc}}{\varepsilon_0} \quad \mathrm{(Gauss's\ Law)}}$$

$$\oint_S \mathbf{B} \cdot d\mathbf{A} = 0 \quad \mathrm{(Gauss's\ Law\ for\ Magnetism)}$$

$$\oint_C \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt} \quad \mathrm{(Faraday's\ Law)}$$

$$\oint_C \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\mathrm{enc} + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} \quad \mathrm{(Ampere{-}Maxwell\ Law)}}$$

**Differential Form:**

$$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} \quad \mathrm{(Gauss's\ Law)}$$

$$\nabla \cdot \mathbf{B} = 0 \quad \mathrm{(Gauss's\ Law\ for\ Magnetism)}$$

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \quad \mathrm{(Faraday's\ Law)}$$

$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \quad \mathrm{(Ampere{-}Maxwell\ Law)}$$

Where $\rho$ is the charge density, $\mathbf{J}$ is the current density, $\varepsilon_0$ is the
permittivity Of free space, and $\mu_0$ is the permeability of free space.

### 1.2 Derivation from Integral to Differential Form

**Gauss's Law.** Apply the divergence theorem to the integral form:

$$\oint_S \mathbf{E} \cdot d\mathbf{A} = \int_V (\nabla \cdot \mathbf{E})\, dV = \frac{1}{\varepsilon_0}\int_V \rho\, dV$$

Since this holds for any volume $V$: $\nabla \cdot \mathbf{E} = \rho / \varepsilon_0$.

**Faraday's Law.** Apply Stokes' theorem:

$$\oint_C \mathbf{E} \cdot d\mathbf{l} = \int_S (\nabla \times \mathbf{E}) \cdot d\mathbf{A} = -\int_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{A}$$

Since this holds for any surface $S$: $\nabla \times \mathbf{E} = -\partial \mathbf{B}/\partial t$.

**Gauss's Law for Magnetism.** By the divergence theorem:

$$\oint_S \mathbf{B} \cdot d\mathbf{A} = \int_V (\nabla \cdot \mathbf{B})\, dV = 0$$

Since $V$ is arbitrary: $\nabla \cdot \mathbf{B} = 0$. This expresses the absence of magnetic
monopoles.

**Ampere-Maxwell Law.** Apply Stokes' theorem:

$$\oint_C \mathbf{B} \cdot d\mathbf{l} = \int_S (\nabla \times \mathbf{B}) \cdot d\mathbf{A} = \mu_0 \int_S \mathbf{J} \cdot d\mathbf{A} + \mu_0 \varepsilon_0 \frac{d}{dt}\int_S \mathbf{E} \cdot d\mathbf{A}$$

Since $S$ is arbitrary:
$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0\, \partial \mathbf{E}/\partial t$.

### 1.3 Continuity Equation

Taking the divergence of the Ampere-Maxwell law:

$$\nabla \cdot (\nabla \times \mathbf{B}) = 0 = \mu_0 \nabla \cdot \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial}{\partial t}(\nabla \cdot \mathbf{E})$$

Using Gauss's law: $\nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0$.

This is the **continuity equation**, expressing conservation of charge.

### 1.4 Boundary Conditions at Interfaces

At an interface between two linear media (labelled 1 and 2) with surface normal $\hat{\mathbf{n}}$
Pointing from 2 into 1, Maxwell's equations impose four boundary conditions.

**Normal component of $\mathbf{D}$.** Apply Gauss's law for $\mathbf{D}$ to a thin pillbox
Straddling the interface:

$$\oint \mathbf{D} \cdot d\mathbf{A} = \sigma_f A \implies D_{1n} - D_{2n} = \sigma_f$$

**Tangential component of $\mathbf{E}$.** Apply Faraday's law to a rectangular loop Perpendicular to
the interface. As the loop height $\Delta h \to 0$The flux through the Loop vanishes:

$$\oint \mathbf{E} \cdot d\mathbf{l} = 0 \implies E_{1t} = E_{2t}$$

In vector form: $\hat{\mathbf{n}} \times (\mathbf{E}_1 - \mathbf{E}_2) = \mathbf{0}$.

**Normal component of $\mathbf{B}$.** Apply Gauss's law for $\mathbf{B}$ to a pillbox:

$$B_{1n} = B_{2n}$$

**Tangential component of $\mathbf{H}$.** Apply Ampere's law for $\mathbf{H}$ to a loop
Perpendicular to the interface:

$$\hat{\mathbf{n}} \times (\mathbf{H}_1 - \mathbf{H}_2) = \mathbf{K}_f$$

Where $\mathbf{K}_f$ is the free surface current density.

**Summary** (no free charges or currents, $\sigma_f = 0$, $\mathbf{K}_f = \mathbf{0}$):

| Field        | Normal component                              | Tangential component                          |
| ------------ | --------------------------------------------- | --------------------------------------------- |
| $\mathbf{E}$ | $\varepsilon_1 E_{1n} = \varepsilon_2 E_{2n}$ | $E_{1t} = E_{2t}$                             |
| $\mathbf{D}$ | $D_{1n} = D_{2n}$                             | $D_{1t}/\varepsilon_1 = D_{2t}/\varepsilon_2$ |
| $\mathbf{B}$ | $\mu_1 B_{1n} = \mu_2 B_{2n}$                 | $B_{1t}/\mu_1 = B_{2t}/\mu_2$                 |
| $\mathbf{H}$ | $\mu_2 H_{1n} = \mu_1 H_{2n}$                 | $H_{1t} = H_{2t}$                             |

### 1.5 Worked Example: Deriving the Electromagnetic Wave Equation

**Problem.** Starting from Maxwell's equations in free space ($\rho = 0$,
$\mathbf{J} = \mathbf{0}$), Derive the wave equations for $\mathbf{E}$ and $\mathbf{B}$And show that
the wave speed is $c = 1/\sqrt{\mu_0 \varepsilon_0}$.

<details>
<summary>Solution</summary>

In free space, Maxwell's equations reduce to:

$$\nabla \cdot \mathbf{E} = 0, \quad \nabla \cdot \mathbf{B} = 0$$

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad \nabla \times \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$

Take the curl of Faraday's law:

$$\nabla \times (\nabla \times \mathbf{E}) = -\frac{\partial}{\partial t}(\nabla \times \mathbf{B}) = -\mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

Apply the vector identity
$\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$.
Since $\nabla \cdot \mathbf{E} = 0$:

$$-\nabla^2 \mathbf{E} = -\mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

$$\boxed{\nabla^2 \mathbf{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}}$$

An identical calculation, taking the curl of the Ampere-Maxwell law, yields:

$$\boxed{\nabla^2 \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2}}$$

Comparing with the standard wave equation
$\nabla^2 \mathbf{F} = \frac{1}{v^2}\frac{\partial^2 \mathbf{F}}{\partial t^2}$ The wave speed is:

$$c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} \approx 2.998 \times 10^8\ \mathrm{m}/s$$

$\blacksquare$

</details>

