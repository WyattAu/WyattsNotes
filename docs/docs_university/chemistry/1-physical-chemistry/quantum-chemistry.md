---
title: Quantum Chemistry
description:
  "University-level notes on Quantum Chemistry: 1. The Schrodinger Equation; 1.1 Postulates of
  Quantum Mechanics; 1.2 The Time-Independent Schrodinger Equation."
date: 2026-05-31T00:00:00.000Z
tags:
  - Chemistry
  - University
categories:
  - Chemistry
slug: university-chemistry/quantum-chemistry
---

## 1. Postulates of Quantum Mechanics

### 1.1 The Postulates

1. **State Function:** The state of a quantum system is described by a wavefunction $\Psi(\mathbf{r}, t)$
   containing all information about the system.

2. **Observable → Operator:** Every measurable observable corresponds to a linear Hermitian operator.

3. **Measurement:** Measuring an observable $\hat{A}$ yields an eigenvalue $a_n$ of $\hat{A}$:

   $$\hat{A}\psi_n = a_n\psi_n$$

   The probability of measuring $a_n$ is $|c_n|^2$ where $\Psi = \sum_n c_n\psi_n$.

4. **Expectation Value:** For a state $\Psi$:

   $$\langle A \rangle = \frac{\int \Psi^*\hat{A}\Psi\,d\tau}{\int \Psi^*\Psi\,d\tau}$$

5. **Time Evolution:** $\Psi$ evolves according to the time-dependent Schrödinger equation:

   $$i\hbar\frac{\partial \Psi}{\partial t} = \hat{H}\Psi$$

### 1.2 The Time-Independent Schrödinger Equation

For a system with time-independent Hamiltonian:

$$\hat{H}\psi = E\psi$$

$$\left[-\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r})\right]\psi = E\psi$$

## 2. Particle in a Box

### 2.1 One-Dimensional Box

A particle of mass $m$ confined to $0 \leq x \leq L$ with $V = 0$ inside and $V = \infty$ outside:

$$\hat{H}\psi = -\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} = E\psi$$

**Theorem 1 (Particle in a 1D Box):**

$$\psi_n(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right), \quad E_n = \frac{n^2h^2}{8mL^2}$$

where $n = 1, 2, 3, \ldots$

Key features:
- Quantized energy levels; $E_n \propto n^2$.
- Zero-point energy: $E_1 = h^2/(8mL^2) \neq 0$.
- Number of nodes $= n - 1$.

### 2.2 Three-Dimensional Box

$$\psi_{n_x,n_y,n_z}(x,y,z) = \left(\frac{2}{L}\right)^{3/2}\sin\frac{n_x\pi x}{L}\sin\frac{n_y\pi y}{L}\sin\frac{n_z\pi z}{L}$$

$$E_{n_x,n_y,n_z} = \frac{h^2}{8mL^2}(n_x^2 + n_y^2 + n_z^2)$$

**Definition 1 (Degeneracy):** Different sets of quantum numbers that give the same energy are
degenerate. For a cubic box, $(1,2,2)$, $(2,1,2)$, and $(2,2,1)$ are triply degenerate.

### 2.3 Probability Density and Nodes

The probability of finding the particle between $x = a$ and $x = b$:

$$P(a \leq x \leq b) = \int_a^b |\psi_n(x)|^2\,dx = \frac{2}{L}\int_a^b \sin^2\frac{n\pi x}{L}\,dx$$

**Example 1:** For a particle in a 1D box of length $L = 1$ nm, find the probability of finding it
in the middle third for $n = 1$.

$$P\left(\frac{L}{3} \leq x \leq \frac{2L}{3}\right) = \int_{L/3}^{2L/3} \frac{2}{L}\sin^2\frac{\pi x}{L}\,dx$$

$$= \frac{1}{3} - \frac{\sin(4\pi/3) - \sin(2\pi/3)}{2\pi} = \frac{1}{3} - \frac{-\sqrt{3}/2 - \sqrt{3}/2}{2\pi} = \frac{1}{3} + \frac{\sqrt{3}}{2\pi} \approx 0.61$$

$\blacksquare$

## 3. Quantum Mechanical Operators

### 3.1 Common Operators

| Observable       | Operator                                |
| --------------- | --------------------------------------- |
| Position         | $\hat{x} = x$                           |
| Momentum         | $\hat{p}_x = -i\hbar\frac{\partial}{\partial x}$ |
| Kinetic energy   | $\hat{T} = -\frac{\hbar^2}{2m}\nabla^2$ |
| Angular momentum | $\hat{L}_z = -i\hbar\frac{\partial}{\partial \phi}$ |
| Hamiltonian      | $\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V$ |

### 3.2 Commutators

**Definition 2 (Commutator):** $[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$.

If $[\hat{A}, \hat{B}] = 0$, the observables can be simultaneously measured with arbitrary precision.

**Theorem 2 (Heisenberg Uncertainty Principle):**

$$\Delta A \cdot \Delta B \geq \frac{1}{2}|\langle[\hat{A}, \hat{B}]\rangle|$$

$$\Delta x \cdot \Delta p_x \geq \frac{\hbar}{2}$$

## 4. The Hydrogen Atom

### 4.1 The Schrödinger Equation in Spherical Coordinates

For the hydrogen atom (reduced mass $\mu = m_e m_p/(m_e + m_p) \approx m_e$):

$$\left[-\frac{\hbar^2}{2\mu}\nabla^2 - \frac{e^2}{4\pi\varepsilon_0 r}\right]\psi = E\psi$$

In spherical coordinates $(r, \theta, \phi)$:

$$\psi_{n,\ell,m_\ell}(r,\theta,\phi) = R_{n,\ell}(r)\,Y_\ell^{m_\ell}(\theta,\phi)$$

### 4.2 Quantum Numbers

| Quantum Number | Symbol     | Allowed Values                         |
| -------------- | ---------- | -------------------------------------- |
| Principal       | $n$        | $1, 2, 3, \ldots$                       |
| Azimuthal       | $\ell$     | $0, 1, 2, \ldots, n-1$                  |
| Magnetic        | $m_\ell$   | $-\ell, -\ell+1, \ldots, \ell-1, \ell$  |
| Spin            | $m_s$      | $+\frac{1}{2}, -\frac{1}{2}$             |

### 4.3 Energy Levels

**Theorem 3 (Hydrogen Atom Energy):**

$$E_n = -\frac{\mu e^4}{32\pi^2\varepsilon_0^2\hbar^2}\frac{1}{n^2} = -\frac{13.6 \text{ eV}}{n^2} = -\frac{R_H}{n^2}$$

The Rydberg constant $R_H = 2.179 \times 10^{-18}$ J $= 13.6$ eV.

Energy depends only on $n$; all states with the same $n$ are degenerate (for hydrogen).

### 4.4 Radial Wavefunctions

The first few radial wavefunctions:

$$R_{1,0}(r) = 2\left(\frac{1}{a_0}\right)^{3/2}e^{-r/a_0}$$

$$R_{2,0}(r) = \frac{1}{2\sqrt{2}}\left(\frac{1}{a_0}\right)^{3/2}\left(2 - \frac{r}{a_0}\right)e^{-r/(2a_0)}$$

$$R_{2,1}(r) = \frac{1}{2\sqrt{6}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r}{a_0}e^{-r/(2a_0)}$$

where $a_0 = 5.292 \times 10^{-11}$ m is the Bohr radius.

### 4.5 Angular Wavefunctions (Spherical Harmonics)

**Theorem 4 (Spherical Harmonics):** The angular part $Y_\ell^{m_\ell}(\theta, \phi)$ are solutions
to:

$$\hat{L}^2\,Y_\ell^{m_\ell} = \ell(\ell+1)\hbar^2\,Y_\ell^{m_\ell}$$

$$\hat{L}_z\,Y_\ell^{m_\ell} = m_\ell\hbar\,Y_\ell^{m_\ell}$$

### 4.6 Orbital Shapes

| Orbital Type | $\ell$ | Shape                         | Nodes (radial) |
| ------------ | ------ | ----------------------------- | -------------- |
| $s$          | 0      | Spherical, no angular nodes   | $n - 1$        |
| $p$          | 1      | Dumbbell, 1 angular node      | $n - 2$        |
| $d$          | 2      | Cloverleaf, 2 angular nodes   | $n - 3$        |
| $f$          | 3      | Complex, 3 angular nodes      | $n - 4$        |

Total nodes $= n - 1$ = radial nodes + angular nodes.

## 5. Angular Momentum and Spin

### 5.1 Orbital Angular Momentum

**Theorem 5 (Angular Momentum Magnitude):**

$$|\mathbf{L}| = \sqrt{\ell(\ell+1)}\,\hbar$$

$$L_z = m_\ell\hbar, \quad m_\ell = -\ell, -\ell+1, \ldots, \ell$$

The angular momentum vector can never be fully aligned with the $z$-axis (space quantization).

### 5.2 Electron Spin

Electrons have intrinsic angular momentum (spin) with $s = 1/2$:

$$|S| = \sqrt{s(s+1)}\,\hbar = \frac{\sqrt{3}}{2}\hbar$$

$$S_z = m_s\hbar, \quad m_s = \pm\frac{1}{2}$$

### 5.3 Spin-Orbit Coupling

**Theorem 6 (Spin-Orbit Coupling):** The total angular momentum $\mathbf{J} = \mathbf{L} + \mathbf{S}$:

$$|\mathbf{J}| = \sqrt{j(j+1)}\,\hbar, \quad j = |\ell - s|, \ldots, \ell + s$$

For an electron with $\ell = 1$, $s = 1/2$: $j = 1/2$ or $3/2$.

Term symbols: ${}^{2S+1}L_J$, e.g., ${}^2P_{3/2}$ for $\ell = 1$, $s = 1/2$, $j = 3/2$.

## 6. Pauli Exclusion Principle and Aufbau

### 6.1 Pauli Exclusion Principle

**Theorem 7 (Pauli Exclusion Principle):** No two electrons in an atom can have the same set of four
quantum numbers $(n, \ell, m_\ell, m_s)$.

Consequence: Each orbital can hold at most 2 electrons (one with $m_s = +1/2$, one with $m_s = -1/2$).

### 6.2 Aufbau Principle

**Definition 3 (Aufbau Principle):** Electrons fill orbitals in order of increasing energy:
$1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, \ldots$

**Definition 4 (Hund's Rules):** For degenerate orbitals:
1. Maximize total spin $S$ (parallel spins first).
2. For a given $S$, maximize $L$.
3. For atoms less than half-filled: minimize $J$; more than half-filled: maximize $J$.

### 6.3 Electronic Configurations and Term Symbols

**Example 2:** Carbon ($1s^2\,2s^2\,2p^2$).

The $2p^2$ configuration: possible microstates lead to terms ${}^3P$, ${}^1D$, ${}^1S$.

By Hund's rules, the ground state is ${}^3P_0$.

$\blacksquare$

## 7. Many-Electron Atoms

### 7.1 Electron-Electron Repulsion

For helium-like atoms, the Hamiltonian includes electron-electron repulsion:

$$\hat{H} = -\frac{\hbar^2}{2m_e}\nabla_1^2 - \frac{\hbar^2}{2m_e}\nabla_2^2 - \frac{Ze^2}{4\pi\varepsilon_0 r_1} - \frac{Ze^2}{4\pi\varepsilon_0 r_2} + \frac{e^2}{4\pi\varepsilon_0 r_{12}}$$

The $1/r_{12}$ term makes exact solutions impossible for $N > 1$.

### 7.2 Slater Determinants

**Definition 5 (Slater Determinant):** The antisymmetric wavefunction for $N$ electrons:

$$\Psi(1,2,\ldots,N) = \frac{1}{\sqrt{N!}}\begin{vmatrix} \chi_1(1) & \chi_2(1) & \cdots & \chi_N(1) \\ \chi_1(2) & \chi_2(2) & \cdots & \chi_N(2) \\ \vdots & \vdots & \ddots & \vdots \\ \chi_1(N) & \chi_2(N) & \cdots & \chi_N(N) \end{vmatrix}$$

where $\chi_i$ is a spin-orbital. The determinant ensures antisymmetry under particle exchange,
automatically satisfying the Pauli principle.

### 7.3 Hartree-Fock Method

**Theorem 8 (Hartree-Fock Equations):** The Hartree-Fock method approximates each electron as moving
in the average field of the others:

$$\hat{F}\,\phi_i = \varepsilon_i\,\phi_i$$

where $\hat{F}$ is the Fock operator and $\varepsilon_i$ are orbital energies. Koopmans' theorem
relates orbital energies to ionization potentials:

$$\text{IP} \approx -\varepsilon_i$$

## 8. The Born-Oppenheimer Approximation

### 8.1 Separation of Nuclear and Electronic Motion

**Theorem 9 (Born-Oppenheimer Approximation):** Since nuclei are much heavier than electrons
($m_p/m_e \approx 1836$), the electronic and nuclear motions can be separated:

$$\Psi_{\text{total}} = \psi_{\text{elec}}(\mathbf{r}; \mathbf{R})\,\psi_{\text{nuc}}(\mathbf{R})$$

The electronic Schrödinger equation is solved for fixed nuclear positions, giving the **potential
energy surface (PES)**.

### 8.2 Potential Energy Surface

The PES defines:
- **Equilibrium geometry:** Minimum on the PES.
- **Transition state:** Saddle point (first-order saddle point, one imaginary frequency).
- **Vibrational frequencies:** Second derivatives of the PES at the minimum.

## 9. Molecular Orbital Theory

### 9.1 Linear Combination of Atomic Orbitals (LCAO)

**Definition 6 (LCAO-MO):** Molecular orbitals are formed as linear combinations of atomic orbitals:

$$\psi_i = \sum_\mu c_{\mu i}\,\phi_\mu$$

### 9.2 The HOMO-LUMO Gap

**Definition 7 (HOMO and LUMO):** The **highest occupied molecular orbital (HOMO)** and **lowest
unoccupied molecular orbital (LUMO)** are frontier orbitals.

The HOMO-LUMO gap $\Delta E = \varepsilon_{\text{LUMO}} - \varepsilon_{\text{HOMO}}$ correlates with:
- Chemical reactivity (smaller gap = more reactive).
- Electronic absorption spectra.
- Electrical conductivity in extended systems.

### 9.3 Diatomic Molecules: MO Diagrams

**Homo-nuclear diatomics (second period):**

For $\text{O}_2$, $\text{F}_2$ (heavier): $\sigma_{2s} < \sigma_{2s}^* < \sigma_{2p_z} < \pi_{2p_x} = \pi_{2p_y} < \pi_{2p_x}^* = \pi_{2p_y}^* < \sigma_{2p_z}^*$

For $\text{Li}_2$ through $\text{N}_2$ (lighter): $\sigma_{2s} < \sigma_{2s}^* < \pi_{2p_x} = \pi_{2p_y} < \sigma_{2p_z} < \pi_{2p_x}^* = \pi_{2p_y}^* < \sigma_{2p_z}^*$

**Bond order:**

$$\text{BO} = \frac{1}{2}(n_b - n_a)$$

where $n_b$ is the number of bonding electrons and $n_a$ is the number of antibonding electrons.

**Example 3:** $\text{O}_2$ has the configuration $(\sigma_{2s})^2(\sigma_{2s}^*)^2(\sigma_{2p_z})^2(\pi_{2p_x})^2(\pi_{2p_y})^2(\pi_{2p_x}^*)^1(\pi_{2p_y}^*)^1$.

Bond order $= \frac{1}{2}(10 - 6) = 2$.

$\text{O}_2$ is paramagnetic (two unpaired electrons in $\pi^*$ orbitals).

$\blacksquare$

### 9.4 Heteronuclear Diatomic Molecules

For heteronuclear diatomics like CO or HF, the MOs are weighted combinations where the more
electronegative atom contributes more to bonding orbitals. Electronegativity differences shift the
energy levels.

### 9.5 Polyatomic Molecular Orbitals

**Definition 8 (Symmetry Adapted Linear Combinations):** For polyatomic molecules, symmetry-adapted
linear combinations (SALCs) of atomic orbitals are constructed using group theory.

## 10. Huckel Molecular Orbital Theory

### 10.1 Approximations

Huckel theory makes three approximations for $\pi$-electron systems:
1. Only $\pi$ electrons are considered explicitly.
2. $\langle \phi_\mu | \hat{H} | \phi_\mu \rangle = \alpha$ (Coulomb integral, same for all $p$ orbitals).
3. $\langle \phi_\mu | \hat{H} | \phi_\nu \rangle = \beta$ (resonance integral, nonzero only for bonded neighbors).
4. Overlap integrals: $\langle \phi_\mu | \phi_\nu \rangle = \delta_{\mu\nu}$.

### 10.2 The Huckel Secular Determinant

For ethylene (2 $\pi$ centers):

$$\begin{vmatrix} \alpha - E & \beta \\ \beta & \alpha - E \end{vmatrix} = 0$$

Setting $x = (\alpha - E)/\beta$:

$$x^2 - 1 = 0 \implies x = \pm 1 \implies E = \alpha \pm \beta$$

The bonding orbital has $E = \alpha + \beta$ and the antibonding orbital has $E = \alpha - \beta$.

### 10.3 Benzene

For benzene, the secular determinant gives $x^6 - 6x^4 + 9x^2 - 4 = 0$ with roots $x = \pm 2, \pm 1, \pm 1$.

Energy levels: $E = \alpha + 2\beta$, $\alpha + \beta$ (doubly degenerate), $\alpha - \beta$ (doubly degenerate), $\alpha - 2\beta$.

**Definition 9 (Huckel Rule):** A planar monocyclic system with $(4n + 2)$ $\pi$ electrons is aromatic.

Benzene ($n = 1$, 6 $\pi$ electrons) satisfies this rule.

### 10.4 Delocalization Energy

**Definition 10 (Delocalization Energy):** The energy lowering due to electron delocalization:

$$E_{\text{deloc}} = E_\pi(\text{delocalized}) - E_\pi(\text{localized})$$

For benzene: $E_\pi = 2(\alpha + 2\beta) + 4(\alpha + \beta) = 6\alpha + 8\beta$.
Three isolated double bonds: $3 \times 2(\alpha + \beta) = 6\alpha + 6\beta$.
Delocalization energy: $2\beta$.

## 11. Computational Chemistry Methods

### 11.1 Basis Sets

- **Minimal basis:** STO-3G — each orbital represented by 3 Gaussian functions.
- **Split-valence:** 3-21G, 6-31G — valence orbitals split into multiple functions.
- **Polarization:** 6-31G*, 6-31G** — add $d$ functions on heavy atoms, $p$ on H.
- **Diffuse:** 6-31+G* — add diffuse functions for anions and excited states.

### 11.2 Post-Hartree-Fock Methods

- **Moller-Plesset perturbation theory (MP2, MP4):** Includes electron correlation.
- **Configuration Interaction (CI):** Expands the wavefunction in excited configurations.
- **Coupled Cluster (CCSD(T)):** Gold standard for single-reference systems.
- **Density Functional Theory (DFT):** Uses electron density instead of wavefunction; B3LYP is a
  popular functional.

### 11.3 Basis Set Superposition Error (BSSE)

**Definition 11 (BSSE):** In calculating interaction energies, each monomer artificially borrows
basis functions from the other. Corrected using the counterpoise method.

## 12. Perturbation Theory

### 12.1 Time-Independent Perturbation Theory

**Theorem 10 (First-Order Correction):** For $\hat{H} = \hat{H}_0 + \hat{H}'$:

$$E_n^{(1)} = \langle \psi_n^{(0)} | \hat{H}' | \psi_n^{(0)} \rangle$$

$$\psi_n^{(1)} = \sum_{m \neq n} \frac{\langle \psi_m^{(0)} | \hat{H}' | \psi_n^{(0)} \rangle}{E_n^{(0)} - E_m^{(0)}}\,\psi_m^{(0)}$$

**Theorem 11 (Second-Order Energy Correction):**

$$E_n^{(2)} = \sum_{m \neq n} \frac{|\langle \psi_m^{(0)} | \hat{H}' | \psi_n^{(0)} \rangle|^2}{E_n^{(0)} - E_m^{(0)}}$$

### 12.2 The Variational Principle

**Theorem 12 (Variational Principle):** For any trial wavefunction $\tilde{\Psi}$:

$$\langle \tilde{\Psi} | \hat{H} | \tilde{\Psi} \rangle \geq E_0$$

where $E_0$ is the true ground state energy. This underpins the Hartree-Fock and DFT methods.

## Common Pitfalls

1. **Confusing the time-dependent and time-independent Schrödinger equations.** The TDSE governs
   time evolution; the TISE gives stationary states and energy eigenvalues. **Fix:** Use the TISE for
   bound-state problems and the TDSE for time-dependent phenomena.
2. **Using the wrong angular momentum formula.** The magnitude is $|L| = \sqrt{\ell(\ell+1)}\hbar$, not
   $\ell\hbar$. **Fix:** This is a quantum correction; $L$ can never equal $n\hbar$ exactly.
3. **Applying the simple hydrogen energy formula to multi-electron atoms.** $E_n = -13.6/n^2$ only works
   for hydrogen-like atoms. **Fix:** For multi-electron atoms, use effective nuclear charge or
   empirical data.
4. **Ignoring the Pauli principle when writing configurations.** Each orbital holds at most 2 electrons.
   **Fix:** Always check that no more than 2 electrons occupy any orbital and that spin assignments are
   antisymmetric.
5. **Confusing Huckel $\alpha$ and $\beta$ signs.** $\beta < 0$ (bonding), so $E = \alpha + \beta$ is
   lower than $\alpha$. **Fix:** Remember that $\alpha$ is the reference and bonding lowers energy.
6. **Wrong orbital ordering for light vs heavy diatomics.** $\text{N}_2$ and earlier have $\pi_{2p} < \sigma_{2p}$;
   $\text{O}_2$ and later have $\sigma_{2p} < \pi_{2p}$. **Fix:** Check the $s$-$p$ mixing for
   $\text{Li}_2$ through $\text{N}_2$.
7. **Misinterpreting Koopmans' theorem.** $-\varepsilon_i$ equals the ionization energy only at the
   Hartree-Fock level with frozen orbitals. **Fix:** For DFT, the HOMO energy approximates IP but not
   exactly (Janak's theorem).

## Summary

- **Schrödinger equation:** $\hat{H}\psi = E\psi$; foundation of quantum chemistry.
- **Particle in a box:** $E_n = n^2h^2/(8mL^2)$; introduces quantization and zero-point energy.
- **Hydrogen atom:** $E_n = -13.6/n^2$ eV; quantum numbers $n, \ell, m_\ell, m_s$.
- **Angular momentum:** $|L| = \sqrt{\ell(\ell+1)}\hbar$; $L_z = m_\ell\hbar$; spin $s = 1/2$.
- **Pauli exclusion:** No two electrons share all four quantum numbers.
- **MO theory (LCAO):** $\psi_i = \sum c_{\mu i}\phi_\mu$; bonding vs antibonding; bond order.
- **Huckel theory:** $\pi$-electron approximation; aromaticity ($4n + 2$ rule).
- **Born-Oppenheimer:** Separates electronic and nuclear motion; defines the PES.
- **Variational principle:** Any trial energy $\geq E_0$; basis for computational methods.

## Cross-References

| Topic                    | Site        | Link                                                                  |
| ------------------------ | ----------- | --------------------------------------------------------------------- |
| Thermodynamics           | WyattsNotes | [View](/docs/university/chemistry/thermodynamics)                     |
| Statistical Mechanics    | WyattsNotes | [View](/docs/university/chemistry/statistical-mechanics)             |
| Spectroscopy (Organic)   | WyattsNotes | [View](/docs/university/chemistry/spectroscopy)                       |
| Quantum Mechanics        | WyattsNotes | [View](/docs/university/physics/quantum-mechanics)                    |
| Quantum Chemistry — MIT 5.61 | MIT OCW | [View](https://ocw.mit.edu/courses/5-61-physical-chemistry-fall-2013/) |
