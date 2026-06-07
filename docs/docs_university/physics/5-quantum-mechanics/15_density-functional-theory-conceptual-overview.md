---
title: Density Functional Theory: Conceptual Overview
tags:
  - Physics
  - University
---

### 14.1 The Hohenberg--Kohn Theorems

**Theorem 1:** The ground-state electron density $n(\mathbf{r})$ uniquely determines the external
potential $V_{\text{ext}(\mathbf{r})}$ (up to an additive constant), and hence the full many-body
Hamiltonian and all ground-state properties.

**Theorem 2:** The ground-state energy is a functional of the density:
$E[n] = F_{\text{HK}[n] + \int V_{\text{ext}(\mathbf{r})n(\mathbf{r})\,d^3r}}$And the variational
principle applies: $E_0 \leq E[n]$ for any trial density $n(\mathbf{r})$.

### 14.2 Kohn--Sham Equations

The interacting system is mapped to a fictitious system of non-interacting electrons in an effective
potential:

$$\left[-\frac{\hbar^2}{2m}\nabla^2 + V_{\text{eff}[n](\mathbf{r})\right]\psi_i(\mathbf{r}) = \varepsilon_i\psi_i(\mathbf{r})}$$

$$n(\mathbf{r}) = \sum_{i=1}^{N}|\psi_i(\mathbf{r})|^2 \quad \text{(summing over occupied states)}$$

$$V_{\text{eff} = V_{\text{ext} + V_H[n] + V_{\text{xc}[n]}}}$$

$$V_H[n](\mathbf{r}) = e^2\int\frac{n(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\,d^3r' \quad \text{(Hartree potential)}$$

The exchange-correlation functional $V_{\text{xc}[n]}$ contains all many-body effects beyond the
classical Hartree approximation.

### 14.3 Self-Interaction Error

The Hartree potential includes the interaction of each electron with itself. This **self-interaction
error** is not cancelled by the local density approximation (LDA) for $V_{\text{xc}}$. Consequences:

- Wrong asymptotic behaviour: $V_{\text{eff}(r \to \infty) \to -e^2/r}$ (correct) vs.
  $V_{\text{eff} \to 0}$ (LDA, wrong)
- Underestimation of band gaps by 30--50\%
- Incorrect description of charge transfer excitations

Hybrid functionals (e.g., B3LYP, HSE06) and range-separated functionals partially correct this.

<details>
<summary>Worked Example 14.1: Thomas--Fermi Theory</summary>

The simplest density functional theory: the Thomas--Fermi model treats the kinetic energy as a local
functional of the density:

$$T_{\text{TF}[n] = \frac{3\hbar^2}{10m}(3\pi^2)^{2/3}\int n^{5/3}(\mathbf{r})\,d^3r = C_{\text{TF}\int n^{5/3}\,d^3r}}$$

For an atom with nuclear charge $Ze$Minimising
$E[n] = T_{\text{TF}[n] - Ze^2\int n(\mathbf{r})/r\,d^3r + \frac{1}{2}e^2\iint n(\mathbf{r})n(\mathbf{r}')/|\mathbf{r}-\mathbf{r}'|\,d^3rd^3r'}$:

The variational equation gives:

$$C_{\text{TF}\,n^{2/3} = \frac{Ze^2}{r} - e^2\int\frac{n(\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|}\,d^3r'}$$

This integral equation can be solved by scaling: $n(r) = (Z/a_0^3)\,g(r/a_0 Z^{-1/3})$ where $g$ is
a universal function.

The Thomas--Fermi energy:
$E_{\text{TF} = -\frac{3}{7}(9\pi/2)^{2/3}\frac{Z^{7/3}e^2}{2a_0} = -20.8\,Z^{7/3}}$ eV.

This gives reasonable total energies for heavy atoms but fails qualitatively for light atoms (no
shell structure, no chemical bonding).

</details>

## Worked Examples

### Example 1: Infinite square well

**Problem.** Find the energy levels and normalised wave functions for a particle in a 1D infinite
square well of width $a$.

**Solution.** $\psi_n(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{n\pi x}{a}\right)$,
$E_n = \frac{n^2\pi^2\hbar^2}{2ma^2}$, $n = 1, 2, 3, \ldots$

$\blacksquare$

### Example 2: Uncertainty principle

**Problem.** An electron is confined to a region of width $0.1 \mathrm{ nm}$. Estimate the minimum
uncertainty in its momentum.

**Solution.** $\Delta x = 0.1 \times 10^{-9} \mathrm{ m}$.
${\Delta p \geq \frac{\hbar}{2\Delta x} = \frac{1.055 \times 10^{-34}}{2 \times 10^{-10}} = 5.28 \times 10^{-25} \mathrm{ kg\cdot} m/s}$.

$\blacksquare$

## Common Pitfalls

- **Confusing the wave function and probability density.** $|\psi(x)|^2$ is the probability density;
  $\psi$ itself is complex and not directly observable. **Fix:** $P(x)\, dx = |\psi(x)|^2\, dx$ is
  the probability of finding the particle in $[x, x + dx]$.
- **Wrong commutator interpretation.** If $[\hat{A}, \hat{B}] = 0$, the observables share
  eigenstates and can be simultaneously measured. If not, they obey the uncertainty principle.
  **Fix:** $[\hat{x}, \hat{p}] = i\hbar$ implies $\Delta x \cdot \Delta p \geq \hbar/2$.
- **Confusing time-dependent and time-independent Schrödinger equations.** Time-dependent:
  $i\hbar\frac{\partial\psi}{\partial t} = \hat{H}\psi$. Time-independent: $\hat{H}\phi = E\phi$.
  **Fix:** Time-independent gives stationary states (energy eigenvalues); time-dependent describes
  evolution.

## Summary

- Postulates: state vector $|\psi\rangle$, observables as Hermitian operators, measurement gives
  eigenvalues.
- Schrödinger equation: $i\hbar\partial\psi/\partial t = \hat{H}\psi$; stationary states:
  $\hat{H}\phi_n = E_n\phi_n$.
- Commutators and uncertainty:
  $[\hat{A}, \hat{B}] \neq 0 \Rightarrow \Delta A \cdot \Delta B \geq \frac{1}{2}|\langle[\hat{A}, \hat{B}]\rangle|$.
- Key systems: infinite square well, harmonic oscillator, hydrogen atom.

## Cross-References

| Topic             | Site       | Link                                                                                                       |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| [Quantum Physics] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/nuclear-physics/03-quantum-physics)    |
| [Quantum Physics] | IB         | [View](https://ib.wyattau.com/docs/ib/physics/5-nuclear-and-quantum-physics/1_quantum-and-nuclear-physics) |
| [Quantum Physics] | University | [View](https://university.wyattau.com/docs/physics/5-quantum-mechanics/1_quantum-mechanics)                |

