---
title: Defects in Crystals
tags:
  - Physics
  - University
---

### 9.1 Point Defects

- **Vacancy:** Missing atom at a lattice site.
- **Interstitial:** Extra atom between lattice sites.
- **Substitutional:** Foreign atom replacing a host atom.
- **Frenkel defect:** Vacancy-interstitial pair (atom moves to interstitial site).
- **Schottky defect:** Vacancy pair (in ionic crystals, cation and anion vacancies).

**Equilibrium concentration of vacancies:**

$$n_v = N\,e^{-E_v/(k_B T)}$$

Where $N$ is the number of lattice sites and $E_v$ is the vacancy formation energy ($\sim 1$ eV).

**Derivation.** Minimising the free energy $F = n_v E_v - T S_{\mathrm{config}}$ where
$S_{\mathrm{config} = k_B \ln\binom{N}{n_v}}$:

$$\frac{\partial F}{\partial n_v} = E_v + k_B T \ln\left(\frac{n_v}{N - n_v}\right) = 0$$

For $n_v \ll N$: $n_v = N e^{-E_v/(k_B T)}$. $\blacksquare$

### 9.2 Dislocations

- **Edge dislocation:** Extra half-plane inserted into the lattice. Burgers vector $\mathbf{b}$ is
  perpendicular to the dislocation line.
- **Screw dislocation:** The lattice is sheared. $\mathbf{b}$ is parallel to the dislocation line.

Dislocations enable **plastic deformation** at stresses far below the theoretical shear strength.
The Peach-Koehler force on a dislocation:

$$\mathbf{F} = (\boldsymbol{\sigma}\cdot\mathbf{b}) \times \hat{\mathbf{t}}$$

Where $\boldsymbol{\sigma}$ is the stress tensor and $\hat{\mathbf{t}}$ is the unit tangent to the
Dislocation line.

### 9.3 Impact on Properties

Defects strongly affect electrical, mechanical, and thermal properties:

- **Electrical:** Donor and acceptor levels in semiconductors are substitutional defects. Vacancies
  act as scattering centres, reducing conductivity.
- **Mechanical:** Dislocations determine yield strength (Hall--Petch relation). Work hardening
  increases dislocation density.
- **Thermal:** Point defects scatter phonons, reducing thermal conductivity.

