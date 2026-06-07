---
title: Topological Insulators and Semimetals
tags:
  - Physics
  - University
---

### 13.1 Berry Phase

When an electron adiabatically traverses a closed loop in $\mathbf{k}$-space, its Bloch state
acquires a geometric phase:

$$\gamma_n(\mathcal{C}) = i\oint_{\mathcal{C}} \langle u_{n\mathbf{k}}|\nabla_{\mathbf{k}} u_{n\mathbf{k}}\rangle \cdot d\mathbf{k}$$

The **Berry curvature** is the $\mathbf{k}$-space analog of a magnetic field:

$$\boldsymbol{\Omega}_n(\mathbf{k}) = \nabla_{\mathbf{k}} \times \langle u_{n\mathbf{k}}|i\nabla_{\mathbf{k}} u_{n\mathbf{k}}\rangle$$

The Berry phase for a loop $\mathcal{C}$ enclosing area $\mathcal{A}$ is:

$$\gamma = \int_{\mathcal{A}} \boldsymbol{\Omega} \cdot d\mathcal{A}$$

For graphene near a Dirac point, the Berry phase is $\gamma = \pi$ (a half-flux quantum), which
leads to the **absence of backscattering** and contributes to the high mobility of graphene.

### 13.2 Topological Insulators

A **topological insulator** (TI) is an insulator in the bulk but has conducting states on its
surface. These surface states are topologically protected: they cannot be removed by surface
impurities or disorder (as long as time-reversal symmetry is preserved).

**Key properties:**

- Bulk has a band gap, but the surface has gapless Dirac-like states
- Surface states have a single Dirac cone (spin-momentum locking)
- The $Z_2$ topological invariant $\nu = 1$ distinguishes TIs ($\nu = 1$) from trivial insulators
  ($\nu = 0$)

**2D topological insulator** (quantum spin Hall insulator): Time-reversal-symmetric 2D system with
helical edge states. The conductance is quantised: $G = 2e^2/h$ (one channel per edge, with opposite
spins moving in opposite directions).

**Examples:** Bi$_2$Se$_3$Bi$_2$Te$_3$Sb$_2$Te$_3$ (3D TIs); HgTe/CdTe quantum wells (2D TIs).

### 13.3 Weyl and Dirac Semimetals

**Weyl semimetals** have band touchings at discrete points (Weyl nodes) in the Brillouin zone where
the dispersion is linear in all three directions:

$$\varepsilon(\mathbf{k}) = \pm\hbar v_F |\mathbf{k} - \mathbf{k}_W|$$

Weyl nodes come in pairs of opposite chirality and are topologically protected. Key signatures:

- **Fermi arcs**: Surface states connecting projections of Weyl nodes of opposite chirality
- **Chiral anomaly**: In parallel $\mathbf{E}$ and $\mathbf{B}$ fields, charge is pumped between
  Weyl nodes, giving negative magnetoresistance
- **Anomalous Hall effect**: Even without magnetic order

**Dirac semimetals** have fourfold-degenerate Dirac points (two overlapping Weyl points of opposite
chirality). Examples: Na$_3$Bi, Cd$_3$As$_2$.

<details>
<summary>Worked Example 13.1: Chern Number and Quantum Hall Effect</summary>

The **Chern number** for a 2D band is the integral of the Berry curvature over the Brillouin zone:

$$C = \frac{1}{2\pi}\int_{\text{BZ} \Omega_z(\mathbf{k})\, d^2k}$$

The Chern number is an integer (topological invariant). The Hall conductivity is quantised:

$$\sigma_{xy} = C\frac{e^2}{h}$$

For the integer quantum Hall effect with filling factor $\nu$, $C = \nu$.

The TKNN formula (Thouless, Kohmoto, Nightingale, den Nijs, 1982) established that the quantum Hall
conductance is a topological invariant, explaining its remarkable precision and robustness against
disorder.

</details>

