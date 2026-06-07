---
title: Variational Methods
tags:
  - Physics
  - University
---

### 10.1 The Variational Principle

For any trial wavefunction $\psi_{\text{trial}}$ (normalised), the expectation value of the
Hamiltonian is an upper bound on the true ground state energy:

$$E_{\text{trial} = \langle\psi_{\text{trial}|\hat{H}|\psi_{\text{trial}\rangle \geq E_0}}}$$

The equality holds if and only if $\psi_{\text{trial} = \psi_0}$.

### 10.2 The Hydrogen Molecule Ion $H_2^+$

The simplest molecule: one electron in the field of two protons separated by distance $R$. The
Hamiltonian:

$$\hat{H} = -\frac{\hbar^2}{2m_e}\nabla^2 - \frac{e^2}{4\pi\varepsilon_0 r_A} - \frac{e^2}{4\pi\varepsilon_0 r_B} + \frac{e^2}{4\pi\varepsilon_0 R}$$

**LCAO trial function:** $\psi_\pm = N_\pm[\psi_{1s}(\mathbf{r}_A) \pm \psi_{1s}(\mathbf{r}_B)]$

The energies:

$$E_\pm(R) = E_{1s} + \frac{e^2}{4\pi\varepsilon_0 R} + \frac{J \pm K}{1 \pm S}$$

Where $S = \langle\psi_A|\psi_B\rangle$ is the overlap integral, $J$ is the Coulomb integral, and
$K$ is the exchange integral.

- $E_-$ (bonding): has a minimum at $R \approx 2.5\,a_0$Giving a binding energy of $\sim 1.8$ eV
  (experiment: 2.8 eV).
- $E_+$ (antibonding): monotonically decreases, no bound state.

### 10.3 The Hydrogen Molecule $H_2$

With two electrons, the full Hamiltonian includes the electron-electron repulsion. Using the
variational method with properly (anti)symmetrised spatial-spin wavefunctions:

**Bonding (singlet):** $E_{\text{singlet} = 2E_{1s} + \frac{e^2}{R} + \frac{2J + 2K}{1 + S^2}}$

**Antibonding (triplet):** $E_{\text{triplet} = 2E_{1s} + \frac{e^2}{R} + \frac{2J - 2K}{1 - S^2}}$

The equilibrium bond length is $R_e \approx 1.4\,a_0$ with binding energy $\sim 3.5$ eV (experiment:
4.75 eV).

<details>
<summary>Worked Example 10.1: Variational Estimate for Helium Ground State</summary>

Use the trial function
$\psi_{\text{trial} = (Z_{\text{eff}^3/\pi a_0^3)\exp(-Z_{\text{eff}r_1/a_0)\exp(-Z_{\text{eff}r_2/a_0)}}}}$
where $Z_{\text{eff}}$ is a variational parameter.

The energy expectation value (treating the electron-electron repulsion as a perturbation):

$$E(Z_{\text{eff}) = 2\times\frac{Z_{\text{eff}^2}{2}\text{Ry} - 2\times\frac{Z_{\text{eff} Z}{1}\text{Ry} + \frac{5}{8}Z_{\text{eff}\text{Ry}}}}}$$

$$= \left(Z_{\text{eff}^2 - 4Z_{\text{eff} + \frac{5}{4}Z_{\text{eff}\right)\text{Ry} = \left(Z_{\text{eff}^2 - \frac{11}{4}Z_{\text{eff}\right)\text{Ry}}}}}}$$

Minimising:
$\partial E/\partial Z_{\text{eff} = (2Z_{\text{eff} - 11/4) = 0 \implies Z_{\text{eff} = 11/8 = 1.375}}}$.

$$E = \left(\frac{121}{64} - \frac{121}{32}\right)\text{Ry} = -\frac{121}{64}\text{Ry} = -2.848\text{Ry} = -77.5\ \text{eV}$$

The exact (non-relativistic) ground state energy is $-79.0$ eV, so the variational result is within
2%.

The effective charge $Z_{\text{eff} = 1.375 < 2}$ reflects the screening of the nuclear charge by
the other electron: each electron partially shields the nucleus from the other, reducing the
effective charge from $Z = 2$ to $Z_{\text{eff} \approx 1.375}$.

</details>

