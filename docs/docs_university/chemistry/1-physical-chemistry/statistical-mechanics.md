---
title: Statistical Mechanics
description:
  "University-level notes on Statistical Mechanics: 1. Microstates and Macrostates; 1.1
  Microcanonical Ensemble; 1.2 Boltzmann Distribution."
date: 2026-05-31T00:00:00.000Z
tags:
  - Chemistry
  - University
categories:
  - Chemistry
slug: university-chemistry/statistical-mechanics
---

## 1. Microstates and Macrostates

### 1.1 Basic Concepts

**Definition 1 (Microstate):** A complete specification of the state of a system, including the
positions and momenta of all particles (or, in quantum mechanics, the quantum numbers of each particle).

**Definition 2 (Macrostate):** A specification of the system by macroscopic variables (e.g., $N$, $V$,
$E$, $T$, $P$).

A single macrostate corresponds to a vast number of microstates. The number of microstates $W$ for a
given macrostate is related to entropy:

$$S = k_B \ln W$$

### 1.2 Microcanonical Ensemble

**Definition 3 (Microcanonical Ensemble):** A collection of isolated systems, all with the same $N$, $V$,
and $E$. Every accessible microstate is equally probable.

For $N$ distinguishable particles distributed among energy levels $\varepsilon_i$ with occupation numbers
$n_i$:

$$W = \frac{N!}{n_1!\,n_2!\,\cdots}$$

subject to $\sum_i n_i = N$ and $\sum_i n_i \varepsilon_i = E$.

## 2. The Boltzmann Distribution

### 2.1 Derivation

**Theorem 1 (Boltzmann Distribution):** In a system at temperature $T$, the probability of finding a
particle in state $i$ with energy $\varepsilon_i$ is:

$$p_i = \frac{e^{-\varepsilon_i/k_BT}}{q}$$

where $q$ is the **molecular partition function**:

$$q = \sum_i e^{-\varepsilon_i/k_BT}$$

### 2.2 Most Probable Distribution

The most probable distribution maximizes $\ln W$ subject to the constraints $\sum n_i = N$ and
$\sum n_i \varepsilon_i = E$. Using Lagrange multipliers:

$$n_i^* = N\frac{e^{-\varepsilon_i/k_BT}}{\sum_j e^{-\varepsilon_j/k_BT}}$$

### 2.3 Physical Interpretation

- States with lower energy are more populated.
- The ratio of populations of two states:

$$\frac{n_j}{n_i} = e^{-(\varepsilon_j - \varepsilon_i)/k_BT}$$

**Example 1:** At 300 K, the population ratio of the first excited state ($\varepsilon_1$) to the ground
state ($\varepsilon_0 = 0$) for an electronic transition of $\varepsilon_1 = 5 \times 10^{-19}$ J:

$$\frac{n_1}{n_0} = e^{-\varepsilon_1/k_BT} = e^{-5 \times 10^{-19}/(1.381 \times 10^{-23} \times 300)} = e^{-120.7} \approx 0$$

Essentially no population in the excited electronic state at room temperature.

$\blacksquare$

## 3. The Canonical Ensemble

### 3.1 Definition

**Definition 4 (Canonical Ensemble):** A collection of closed systems in thermal contact with a heat
bath at temperature $T$. All systems have the same $N$, $V$, $T$ but varying $E$.

### 3.2 Canonical Partition Function

**Theorem 2 (Canonical Partition Function):** For $N$ distinguishable particles:

$$Q = \sum_j e^{-E_j/k_BT}$$

where $E_j$ is the energy of the $j$-th system microstate. For $N$ indistinguishable particles:

$$Q = \frac{q^N}{N!}$$

where $q$ is the molecular partition function. The $N!$ accounts for indistinguishability
(Boltzmann statistics, valid when $n_i \ll g_i$ for all states).

## 4. Partition Functions

### 4.1 The Molecular Partition Function

The total molecular partition function factors into contributions:

$$q = q_{\text{trans}} \cdot q_{\text{rot}} \cdot q_{\text{vib}} \cdot q_{\text{elec}}$$

### 4.2 Translational Partition Function

**Theorem 3 (Translational Partition Function):** For a particle of mass $m$ in volume $V$:

$$q_{\text{trans}} = \left(\frac{2\pi m k_B T}{h^2}\right)^{3/2}V$$

This follows from treating translational motion as a particle in a 3D box and summing over energy
levels (or integrating in the classical limit).

**Example 2:** Calculate $q_{\text{trans}}$ for $\text{N}_2$ ($m = 4.65 \times 10^{-26}$ kg) at 298 K in
$V = 0.0248$ m$^3$ (1 mol at 1 atm).

$$\Lambda = \frac{h}{\sqrt{2\pi m k_B T}} = \frac{6.626 \times 10^{-34}}{\sqrt{2\pi \times 4.65 \times 10^{-26} \times 1.381 \times 10^{-23} \times 298}} = 1.76 \times 10^{-11} \text{ m}$$

$$q_{\text{trans}} = \frac{V}{\Lambda^3} = \frac{0.0248}{(1.76 \times 10^{-11})^3} = 4.55 \times 10^{28}$$

$\blacksquare$

### 4.3 Rotational Partition Function

**Theorem 4 (Rotational Partition Function):** For a linear molecule with moment of inertia $I$:

$$q_{\text{rot}} = \frac{T}{\sigma\Theta_{\text{rot}}}$$

where $\Theta_{\text{rot}} = \frac{\hbar^2}{2Ik_B}$ is the rotational temperature and $\sigma$ is the
symmetry number ($\sigma = 1$ for heteronuclear, $\sigma = 2$ for homonuclear diatomics).

For a nonlinear molecule:

$$q_{\text{rot}} = \frac{\sqrt{\pi}}{\sigma}\left(\frac{T^3}{\Theta_A\,\Theta_B\,\Theta_C}\right)^{1/2}$$

where $\Theta_A$, $\Theta_B$, $\Theta_C$ are the rotational temperatures about the three principal axes.

### 4.4 Vibrational Partition Function

**Theorem 5 (Vibrational Partition Function):** For a harmonic oscillator with frequency $\nu$:

$$q_{\text{vib}} = \frac{e^{-h\nu/(2k_BT)}}{1 - e^{-h\nu/(k_BT)}}$$

where $\Theta_{\text{vib}} = h\nu/k_B$ is the vibrational temperature. For the zero of energy at the
bottom of the potential well (excluding zero-point energy):

$$q_{\text{vib}} = \frac{1}{1 - e^{-\Theta_{\text{vib}}/T}}$$

For a molecule with $3N - 6$ (nonlinear) or $3N - 5$ (linear) vibrational modes:

$$q_{\text{vib}} = \prod_i q_{\text{vib},i}$$

### 4.5 Electronic Partition Function

**Theorem 6 (Electronic Partition Function):**

$$q_{\text{elec}} = g_0\,e^{-\varepsilon_0/k_BT} + g_1\,e^{-\varepsilon_1/k_BT} + \cdots$$

where $g_i$ is the degeneracy of level $i$. For most molecules at ordinary temperatures, only the
ground state contributes ($q_{\text{elec}} \approx g_0$).

For atoms with accessible excited states (e.g., halogens), $q_{\text{elec}} > g_0$.

## 5. Thermodynamic Functions from Partition Functions

### 5.1 Internal Energy

**Theorem 7 (Internal Energy):** For a system of $N$ molecules:

$$U - U_0 = Nk_BT^2\left(\frac{\partial \ln q}{\partial T}\right)_V$$

For each contribution:

$$U_{\text{trans}} = \frac{3}{2}Nk_BT, \quad U_{\text{rot,linear}} = Nk_BT, \quad U_{\text{rot,nonlinear}} = \frac{3}{2}Nk_BT$$

$$U_{\text{vib}} = \sum_i \frac{N h\nu_i}{e^{h\nu_i/k_BT} - 1}$$

### 5.2 Entropy

**Theorem 8 (Entropy from Partition Function):**

$$S = \frac{U - U_0}{T} + Nk_B\ln q + Nk_B \quad (\text{distinguishable})$$

$$S = \frac{U - U_0}{T} + Nk_B\ln\frac{q}{N} + Nk_B \quad (\text{indistinguishable})$$

### 5.3 Helmholtz Free Energy

$$A - A_0 = -Nk_BT\ln q \quad (\text{distinguishable})$$

$$A - A_0 = -Nk_BT\ln\frac{q^N}{N!} \quad (\text{indistinguishable})$$

### 5.4 Gibbs Free Energy

$$G - G_0 = -Nk_BT\ln\frac{q}{N} + Nk_BT(V/N)\left(\frac{\partial \ln q}{\partial V}\right)_T$$

For an ideal gas:

$$G - G_0 = -nRT\ln\frac{q}{N_A} + nRT$$

### 5.5 Chemical Potential

**Theorem 9 (Chemical Potential):** For an ideal gas:

$$\mu = -k_BT\ln\frac{q}{N} = -k_BT\ln\frac{q}{N_A P/k_BT} + k_BT\ln P^\circ = \mu^\circ + k_BT\ln\frac{P}{P^\circ}$$

## 6. The Sackur-Tetrode Equation

### 6.1 Derivation

**Theorem 10 (Sackur-Tetrode Equation):** The translational entropy of $N$ indistinguishable ideal gas
particles:

$$S_{\text{trans}} = Nk_B\left[\frac{5}{2} + \ln\left(\frac{V}{N}\left(\frac{2\pi m k_B T}{h^2}\right)^{3/2}\right)\right]$$

For $n$ moles:

$$S_{\text{trans}} = nR\left[\frac{5}{2} + \ln\left(\frac{(2\pi m k_B T)^{3/2} k_B T}{P\,h^3}\right)\right]$$

### 6.2 Standard Molar Entropy

At $T = 298.15$ K, $P = 1$ bar:

$$S^\circ_m = R\left[\frac{5}{2} + \ln\left(\frac{(2\pi m k_B T)^{3/2} k_B T}{P^\circ\,h^3}\right)\right] + S_{\text{rot}} + S_{\text{vib}} + S_{\text{elec}}$$

## 7. Chemical Equilibrium

### 7.1 Equilibrium Constant from Partition Functions

**Theorem 11 (Statistical Equilibrium Constant):** For the reaction $0 = \sum_i \nu_i A_i$:

$$K = \prod_i \left(\frac{q_i}{N_A}\right)^{\nu_i}\,e^{-\Delta E_0/RT}$$

where $\Delta E_0$ is the energy difference between products and reactants at $T = 0$.

### 7.2 Activation and Thermodynamics

The equilibrium constant relates to thermodynamic quantities:

$$\Delta_r G^\circ = -RT\ln K = \Delta_r H^\circ - T\Delta_r S^\circ$$

From statistical mechanics:

$$\Delta_r H^\circ = \Delta E_0 + \Delta\left(\sum_i \nu_i k_B T^2 \frac{\partial \ln q_i}{\partial T}\right)$$

$$\Delta_r S^\circ = R\left[\sum_i \nu_i \ln\frac{q_i e}{N_A} + \sum_i \nu_i T\frac{\partial \ln q_i}{\partial T}\right]$$

### 7.3 Isotope Effects

The equilibrium isotope effect arises from differences in vibrational partition functions (mass
dependence of $\Theta_{\text{vib}}$):

$$\frac{K_H}{K_D} \approx e^{-(\Theta_{\text{vib},H} - \Theta_{\text{vib},D})/T}$$

## 8. Quantum Statistics

### 8.1 Identical Particles and Indistinguishability

**Theorem 12:** Quantum mechanically, identical particles are indistinguishable. The wavefunction
must be:
- **Symmetric** under exchange for **bosons** (integer spin): $\Psi(1,2) = +\Psi(2,1)$
- **Antisymmetric** under exchange for **fermions** (half-integer spin): $\Psi(1,2) = -\Psi(2,1)$

### 8.2 Bose-Einstein Statistics

**Definition 5 (Bose-Einstein Distribution):** For bosons:

$$\langle n_i \rangle = \frac{1}{e^{(\varepsilon_i - \mu)/k_BT} - 1}$$

where $\langle n_i \rangle$ is the mean occupation number of state $i$ and $\mu \leq \varepsilon_0$.

Applications:
- **Bose-Einstein condensation:** Below a critical temperature, a macroscopic number of particles
  occupies the ground state.
- **Blackbody radiation:** Planck distribution (photons are bosons).

**Theorem 13 (Planck Distribution):** Energy density of blackbody radiation:

$$u(\nu)\,d\nu = \frac{8\pi h\nu^3}{c^3}\frac{1}{e^{h\nu/k_BT} - 1}\,d\nu$$

### 8.3 Fermi-Dirac Statistics

**Definition 6 (Fermi-Dirac Distribution):** For fermions:

$$\langle n_i \rangle = \frac{1}{e^{(\varepsilon_i - \mu)/k_BT} + 1}$$

At $T = 0$: $\langle n_i \rangle = 1$ for $\varepsilon_i < \mu = \varepsilon_F$ (Fermi energy) and
$\langle n_i \rangle = 0$ for $\varepsilon_i > \varepsilon_F$.

The Fermi energy:

$$\varepsilon_F = \frac{\hbar^2}{2m}\left(\frac{6\pi^2 N}{V}\right)^{2/3}$$

### 8.4 Classical Limit

When $e^{(\varepsilon - \mu)/k_BT} \gg 1$ (dilute, high-temperature limit), both Bose-Einstein and
Fermi-Dirac distributions reduce to the Boltzmann distribution:

$$\langle n_i \rangle \approx e^{-(\varepsilon_i - \mu)/k_BT}$$

This is the condition $n_i \ll g_i$ (many more states than particles), which holds for most gases
at ordinary conditions.

### 8.5 Electron Gas Model

**Definition 7 (Electron Gas):** In metals, conduction electrons are treated as a Fermi gas.

The Fermi-Dirac distribution gives:
- At $T = 0$: All states below $\varepsilon_F$ are filled.
- At finite $T$: Electrons near $\varepsilon_F$ are thermally excited; the distribution smears over
  $\sim k_BT$.

The electronic heat capacity:

$$C_{V,\text{elec}} = \frac{\pi^2}{2}Nk_B\frac{T}{T_F}$$

where $T_F = \varepsilon_F/k_B \sim 10^4$ K for metals. This explains why electronic contributions to
heat capacity are much smaller than the classical prediction $C_V = \frac{3}{2}Nk_B$.

## 9. The Equipartition Theorem

### 9.1 Statement

**Theorem 14 (Equipartition Theorem):** Each quadratic degree of freedom contributes $\frac{1}{2}k_BT$
to the average energy per particle.

| Degree of Freedom           | Contribution to $U$ per mole |
| --------------------------- | ----------------------------- |
| Translation ($x, y, z$)    | $\frac{3}{2}RT$               |
| Rotation (linear molecule) | $RT$                          |
| Rotation (nonlinear)        | $\frac{3}{2}RT$               |
| Vibration (each mode)       | $RT$ (kinetic + potential)    |

### 9.2 Limitations

The equipartition theorem is classical and fails when $k_BT \ll h\nu$ (quantized energy levels are
not approximately continuous). This explains the temperature dependence of heat capacities and
the "freezing out" of vibrational modes at low $T$.

## 10. Heat Capacities

### 10.1 Translational Heat Capacity

$$C_{V,\text{trans}} = \frac{3}{2}Nk_B = \frac{3}{2}nR$$

Constant and equal to the equipartition value at all temperatures where the gas behaves ideally.

### 10.2 Rotational Heat Capacity

For a linear molecule:

$$C_{V,\text{rot}} = \begin{cases} 0 & T \ll \Theta_{\text{rot}} \\ \frac{3}{2}nR & T \gg \Theta_{\text{rot}} \end{cases}$$

Most diatomics have $\Theta_{\text{rot}} \sim 2$–$10$ K, so rotational heat capacity is fully excited at
room temperature. Exception: $\text{H}_2$ has $\Theta_{\text{rot}} = 85$ K.

### 10.3 Vibrational Heat Capacity

For a single harmonic mode:

$$C_{V,\text{vib}} = nR\left(\frac{\Theta_{\text{vib}}}{T}\right)^2 \frac{e^{\Theta_{\text{vib}}/T}}{(e^{\Theta_{\text{vib}}/T} - 1)^2}$$

This is the Einstein model. At $T \gg \Theta_{\text{vib}}$: $C_{V,\text{vib}} \to nR$. At
$T \ll \Theta_{\text{vib}}$: $C_{V,\text{vib}} \to 0$.

## 11. The Grand Canonical Ensemble

### 11.1 Definition

**Definition 8 (Grand Canonical Ensemble):** Systems in contact with both a heat bath and a particle
reservoir. Each system has the same $V$, $T$, $\mu$ but varying $N$ and $E$.

### 11.2 Grand Partition Function

**Theorem 15 (Grand Partition Function):**

$$\Xi = \sum_{N=0}^{\infty} e^{N\mu/k_BT}Q(N,V,T) = \prod_i \sum_{n_i=0}^{\infty} e^{n_i(\mu - \varepsilon_i)/k_BT}$$

For fermions: $\Xi = \prod_i(1 + e^{(\mu - \varepsilon_i)/k_BT})$

For bosons: $\Xi = \prod_i(1 - e^{(\mu - \varepsilon_i)/k_BT})^{-1}$

## 12. Fluctuations

### 12.1 Energy Fluctuations

In the canonical ensemble:

$$\langle(\Delta E)^2\rangle = \langle E^2\rangle - \langle E\rangle^2 = k_BT^2 C_V$$

The relative fluctuation $\langle(\Delta E)^2\rangle/\langle E\rangle^2 \sim 1/N \to 0$ for
macroscopic systems.

### 12.2 Number Fluctuations

In the grand canonical ensemble:

$$\langle(\Delta N)^2\rangle = k_BT\left(\frac{\partial N}{\partial \mu}\right)_{T,V} = \kappa_T\,N\,k_BT$$

where $\kappa_T$ is the isothermal compressibility. Near the critical point, fluctuations diverge,
leading to critical opalescence.

## Common Pitfalls

1. **Confusing the canonical and microcanonical ensembles.** The microcanonical ensemble fixes $E$;
   the canonical fixes $T$. **Fix:** Use microcanonical for isolated systems and canonical for systems
   in contact with a heat bath.
2. **Forgetting the $N!$ for indistinguishable particles.** $Q = q^N/N!$ (not $Q = q^N$) for
   indistinguishable particles. **Fix:** Always include $N!$ for gases; omit for solids (localized
   particles).
3. **Using classical equipartition for vibrational modes at low $T$.** Vibrational heat capacity is
   not constant; it freezes out below $\Theta_{\text{vib}}$. **Fix:** Use the Einstein model or
   full quantum partition function.
4. **Wrong symmetry number for rotation.** $\sigma = 2$ for $\text{H}_2$ but $\sigma = 1$ for HD.
   **Fix:** Count the number of indistinguishable orientations of the molecule.
5. **Confusing $\varepsilon_0$ and $\Delta E_0$.** $\varepsilon_0$ is the ground state energy;
   $\Delta E_0$ is the energy difference between products and reactants at $T = 0$. **Fix:** In the
   equilibrium constant expression, $\Delta E_0$ appears, not individual $\varepsilon_0$ values.
6. **Applying Boltzmann statistics when quantum effects matter.** The classical limit requires
   $n_i \ll g_i$. **Fix:** Use Bose-Einstein or Fermi-Dirac statistics at low $T$ or high density
   (e.g., electrons in metals, liquid helium).
7. **Mixing up energy zero-points.** The vibrational partition function depends on where the zero of
   energy is defined. **Fix:** Be consistent; if $U_0$ is the zero-point energy, account for it in
   all thermodynamic functions.

## Summary

- **Microstate vs macrostate:** One macrostate corresponds to $W$ microstates; $S = k_B \ln W$.
- **Boltzmann distribution:** $p_i = e^{-\varepsilon_i/k_BT}/q$; connects molecular properties to $T$.
- **Partition function:** $q = \sum e^{-\varepsilon_i/k_BT}$; factors into translational, rotational,
  vibrational, and electronic contributions.
- **Thermodynamic functions from $q$:** $U$, $S$, $A$, $G$, $\mu$, and $K$ can all be expressed.
- **Sackur-Tetrode:** Translational entropy of ideal gases from quantum mechanics.
- **Quantum statistics:** Bose-Einstein (bosons) and Fermi-Dirac (fermions); reduce to Boltzmann at
  high $T$ and low density.
- **Equipartition:** Each quadratic degree of freedom contributes $\frac{1}{2}k_BT$; fails for
  quantum regime.

## Cross-References

| Topic                    | Site        | Link                                                                  |
| ------------------------ | ----------- | --------------------------------------------------------------------- |
| Thermodynamics           | WyattsNotes | [View](/docs/university/chemistry/thermodynamics)                     |
| Quantum Chemistry        | WyattsNotes | [View](/docs/university/chemistry/quantum-chemistry)                  |
| Solid-State Chemistry    | WyattsNotes | [View](/docs/university/chemistry/solid-state-chemistry)              |
| Statistical Mechanics — MIT 8.044 | MIT OCW | [View](https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/) |
