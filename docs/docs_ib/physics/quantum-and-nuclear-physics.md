---
title: Quantum and Nuclear Physics
tags:
- IB
- Physics
slug: quantum-and-nuclear-physics
description: "Comprehensive guide to quantum and nuclear physics for the International Baccalaureate."
---


# Quantum and Nuclear Physics


## Part A: Quantum Physics (Topic 12, HL)


### 1. The Photoelectric Effect

#### 1.1 Phenomenon and Observations

The **photoelectric effect** is the emission of electrons from a metal surface when electromagnetic radiation of sufficiently high frequency strikes it. Key observations from experiment:

- No electrons are emitted if the frequency of the incident light is below a certain **threshold frequency** $f_0$, regardless of intensity.
- The maximum kinetic energy of emitted photoelectrons increases linearly with frequency above $f_0$.
- The number of photoelectrons emitted per second is proportional to the intensity of the light.
- Emission is instantaneous; there is no detectable time delay even at very low intensities.

These observations cannot be explained by classical wave theory, which predicts that energy depends on intensity (amplitude), not frequency.

#### 1.2 Einstein's Explanation

Einstein proposed that light consists of discrete packets of energy called **photons**. Each photon carries energy:

$$E = hf$$

where $h = 6.63 \times 10^{-34} \;\mathrm{J \cdot s}$ is Planck's constant and $f$ is the frequency of the radiation.

A single photon can transfer all its energy to a single electron. The electron must overcome the **work function** $\phi$ of the metal to escape. The **maximum kinetic energy** of emitted photoelectrons is:

$$E_{k,\mathrm{max}} = hf - \phi$$

The threshold frequency corresponds to the minimum photon energy needed to liberate an electron:

$$\phi = hf_0$$

so the equation can also be written:

$$E_{k,\mathrm{max}} = h(f - f_0)$$

The **stopping potential** $V_s$ is the minimum potential difference required to stop the most energetic photoelectrons:

$$eV_s = E_{k,\mathrm{max}} = hf - \phi$$

where $e$ is the elementary charge.

#### 1.3 Work Function Values

| Metal | Work Function $\phi$ (eV) |
|-------|--------------------------|
| Cesium | 2.1 |
| Sodium | 2.3 |
| Potassium | 2.3 |
| Zinc | 4.3 |
| Copper | 4.7 |
| Platinum | 5.6 |

<details>
<summary>
<b>Solution</b>
</summary>

A metal surface with work function $\phi = 4.3 \;\mathrm{eV}$ is illuminated with light of wavelength $\lambda = 200 \;\mathrm{nm}$.

Find: (a) the threshold frequency, (b) the maximum kinetic energy of photoelectrons in eV, and (c) the stopping potential.

**(a) Threshold frequency:**

$$f_0 = \frac{\phi}{h} = \frac{4.3 \times 1.60 \times 10^{-19}}{6.63 \times 10^{-34}} = 1.04 \times 10^{15} \;\mathrm{Hz}$$

**(b) Photon energy:**

$$E = \frac{hc}{\lambda} = \frac{6.63 \times 10^{-34} \times 3.00 \times 10^{8}}{200 \times 10^{-9}} = 9.95 \times 10^{-19} \;\mathrm{J}$$

Convert to eV: $E = 6.21 \;\mathrm{eV}$.

Maximum kinetic energy:

$$E_{k,\mathrm{max}} = 6.21 - 4.3 = 1.91 \;\mathrm{eV}$$

**(c) Stopping potential:**

$$V_s = \frac{E_{k,\mathrm{max}}}{e} = 1.91 \;\mathrm{V}$$

</details>


### 2. Wave-Particle Duality

#### 2.1 De Broglie Wavelength

Louis de Broglie proposed that all matter has wave-like properties. A particle with momentum $p$ has an associated wavelength:

$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

This duality is fundamental to quantum mechanics: light behaves as both a wave and a particle, and matter particles also exhibit wave behaviour.

For non-relativistic particles, $p = mv$, so:

$$\lambda = \frac{h}{mv}$$

For an electron accelerated through a potential difference $V$:

$$eV = \frac{1}{2}mv^2 \implies v = \sqrt{\frac{2eV}{m_e}}$$

$$\lambda = \frac{h}{\sqrt{2m_e eV}}$$

#### 2.2 Evidence for Matter Waves

- **Electron diffraction**: Electrons directed at a thin crystal produce a diffraction pattern, confirming wave behaviour. The diffraction maxima occur at angles predicted by the de Broglie wavelength.
- **Davisson-Germer experiment**: Demonstrated electron diffraction from a nickel crystal, confirming de Broglie's hypothesis.

<details>
<summary>
<b>Solution</b>
</summary>

An electron is accelerated from rest through a potential difference of $150 \;\mathrm{V}$.

Find its de Broglie wavelength.

Using the formula:

$$\lambda = \frac{h}{\sqrt{2m_e eV}}$$

$$\lambda = \frac{6.63 \times 10^{-34}}{\sqrt{2 \times 9.11 \times 10^{-31} \times 1.60 \times 10^{-19} \times 150}}$$

$$\lambda = \frac{6.63 \times 10^{-34}}{\sqrt{4.37 \times 10^{-47}}} = \frac{6.63 \times 10^{-34}}{6.61 \times 10^{-24}}$$

$$\lambda = 1.00 \times 10^{-10} \;\mathrm{m} = 0.100 \;\mathrm{nm}$$

This wavelength is comparable to atomic spacing in crystals, explaining why electron diffraction is observable.

</details>


### 3. Energy Levels and Spectral Lines

#### 3.1 Bohr Model of the Atom

Bohr proposed that electrons orbit the nucleus only in certain **allowed energy levels**. The key postulates:

1. Electrons exist in stationary orbits without radiating energy.
2. An electron can transition between levels by absorbing or emitting a photon with energy equal to the difference between the two levels.

The energy of the $n$-th level in hydrogen is:

$$E_n = \frac{-13.6}{n^2} \;\mathrm{eV}$$

where $n = 1, 2, 3, \ldots$ is the principal quantum number.

#### 3.2 Emission and Absorption Spectra

- **Emission spectrum**: When an excited electron drops from a higher level $n_i$ to a lower level $n_f$, it emits a photon of energy:

$$hf = E_{n_i} - E_{n_f}$$

$$\frac{1}{\lambda} = R \left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

where $R = 1.097 \times 10^{7} \;\mathrm{m^{-1}}$ is the Rydberg constant.

- **Absorption spectrum**: When a photon of exactly the right energy is absorbed, an electron jumps from a lower to a higher energy level. This produces dark lines in a continuous spectrum.

#### 3.3 Spectral Series in Hydrogen

| Series | Transition | Region |
|--------|-----------|--------|
| Lyman | $n \to 1$ | Ultraviolet |
| Balmer | $n \to 2$ | Visible |
| Paschen | $n \to 3$ | Infrared |

#### 3.4 Line Width and Broadening

Spectral lines are not infinitely sharp. They are broadened by:

- **Natural broadening**: Due to the finite lifetime of excited states (Heisenberg uncertainty principle).
- **Doppler broadening**: Due to the thermal motion of atoms.
- **Pressure broadening**: Due to collisions between atoms.

<details>
<summary>
<b>Solution</b>
</summary>

A hydrogen atom in the excited state $n = 4$ transitions to the ground state $n = 1$.

Find: (a) the energy of the emitted photon, and (b) its wavelength.

**(a) Energy of the emitted photon:**

$$E_4 = \frac{-13.6}{4^2} = -0.85 \;\mathrm{eV}$$

$$E_1 = -13.6 \;\mathrm{eV}$$

$$\Delta E = E_4 - E_1 = -0.85 - (-13.6) = 12.75 \;\mathrm{eV}$$

**(b) Wavelength:**

$$\lambda = \frac{hc}{\Delta E} = \frac{6.63 \times 10^{-34} \times 3.00 \times 10^{8}}{12.75 \times 1.60 \times 10^{-19}}$$

$$\lambda = \frac{1.99 \times 10^{-25}}{2.04 \times 10^{-18}} = 9.75 \times 10^{-8} \;\mathrm{m} = 97.5 \;\mathrm{nm}$$

This is in the ultraviolet region (Lyman series).

</details>


### 4. Heisenberg Uncertainty Principle

#### 4.1 Statement

The Heisenberg uncertainty principle states that it is fundamentally impossible to simultaneously know both the position and momentum of a particle with arbitrary precision:

$$\Delta x \, \Delta p \geq \frac{\hbar}{2}$$

where $\hbar = \frac{h}{2\pi}$ is the reduced Planck constant, $\Delta x$ is the uncertainty in position, and $\Delta p$ is the uncertainty in momentum.

An equivalent form relates energy and time:

$$\Delta E \, \Delta t \geq \frac{\hbar}{2}$$

#### 4.2 Implications

- This is not a limitation of measurement instruments but a fundamental property of nature.
- It explains why electrons cannot spiral into the nucleus in the Bohr model: confining an electron to a small volume gives it a large momentum uncertainty, preventing it from having zero kinetic energy.
- It explains the natural broadening of spectral lines: a short-lived state has a large energy uncertainty.

<details>
<summary>
<b>Solution</b>
</summary>

An electron is confined within a region of width $\Delta x = 1.0 \times 10^{-10} \;\mathrm{m}$ (approximately the diameter of a hydrogen atom).

Estimate the minimum uncertainty in its momentum and velocity.

Using the Heisenberg uncertainty principle:

$$\Delta p \geq \frac{\hbar}{2 \, \Delta x} = \frac{1.055 \times 10^{-34}}{2 \times 1.0 \times 10^{-10}} = 5.28 \times 10^{-25} \;\mathrm{kg \cdot m/s}$$

$$\Delta v = \frac{\Delta p}{m_e} = \frac{5.28 \times 10^{-25}}{9.11 \times 10^{-31}} = 5.79 \times 10^{5} \;\mathrm{m/s}$$

This is a significant fraction of the speed of light, showing that confining an electron to an atom-sized region results in a very uncertain velocity.

</details>


### 5. Compton Scattering

#### 5.1 The Compton Effect

When X-ray photons collide with loosely bound electrons (effectively free electrons), the scattered photon has a longer wavelength than the incident photon. This is **Compton scattering**, and it provides direct evidence for the particle nature of light.

The change in wavelength depends only on the scattering angle $\theta$:

$$\Delta\lambda = \lambda' - \lambda = \frac{h}{m_e c}(1 - \cos\theta)$$

The quantity $\frac{h}{m_e c} = 2.43 \times 10^{-12} \;\mathrm{m}$ is called the **Compton wavelength** of the electron.

#### 5.2 Interpretation

The photon transfers some of its energy and momentum to the electron. Since $E = hf = hc/\lambda$, an increase in wavelength means a decrease in photon energy. The energy lost by the photon equals the kinetic energy gained by the electron.

At $\theta = 0$ (no scattering), $\Delta\lambda = 0$.
At $\theta = 180°$ (back-scattering), $\Delta\lambda = \frac{2h}{m_e c}$, the maximum shift.

#### 5.3 Derivation Outline

Using conservation of energy and momentum:

$$hf + m_e c^2 = hf' + E_e$$

$$\frac{hf}{c} = \frac{hf'}{c}\cos\theta + p_e \cos\phi$$

$$0 = \frac{hf'}{c}\sin\theta - p_e \sin\phi$$

Eliminating $\phi$ and using $E_e^2 = (p_e c)^2 + (m_e c^2)^2$ leads to the Compton formula.

<details>
<summary>
<b>Solution</b>
</summary>

X-rays of wavelength $\lambda = 0.0500 \;\mathrm{nm}$ are Compton-scattered through an angle of $\theta = 90°$.

Find: (a) the change in wavelength, (b) the wavelength of the scattered photon, and (c) the energy transferred to the electron.

**(a) Change in wavelength:**

$$\Delta\lambda = \frac{h}{m_e c}(1 - \cos 90°) = \frac{h}{m_e c}(1 - 0) = 2.43 \times 10^{-12} \;\mathrm{m}$$

**(b) Scattered wavelength:**

$$\lambda' = \lambda + \Delta\lambda = 5.00 \times 10^{-11} + 2.43 \times 10^{-12} = 5.24 \times 10^{-11} \;\mathrm{m}$$

**(c) Energy transferred:**

Incident photon energy:

$$E = \frac{hc}{\lambda} = \frac{6.63 \times 10^{-34} \times 3.00 \times 10^{8}}{5.00 \times 10^{-11}} = 3.98 \times 10^{-15} \;\mathrm{J}$$

Scattered photon energy:

$$E' = \frac{hc}{\lambda'} = \frac{1.99 \times 10^{-25}}{5.24 \times 10^{-11}} = 3.80 \times 10^{-15} \;\mathrm{J}$$

Energy transferred to electron:

$$\Delta E = E - E' = 3.98 \times 10^{-15} - 3.80 \times 10^{-15} = 1.8 \times 10^{-16} \;\mathrm{J}$$

Converting: $\Delta E = 1125 \;\mathrm{eV}$.

</details>


### 6. Pair Production and Annihilation

#### 6.1 Pair Production

A photon can spontaneously convert into a particle-antiparticle pair (such as an electron and positron) when it passes near a nucleus. This process is called **pair production**.

**Conditions:**
- The photon energy must be at least equal to the combined rest energy of the particle and antiparticle:

$$E_{\mathrm{photon}} \geq 2m_0 c^2$$

- For electron-positron pair production: $E_{\mathrm{min}} = 2m_e c^2 = 2 \times 0.511 = 1.022 \;\mathrm{MeV}$.
- Momentum must also be conserved, which is why pair production cannot occur in empty space -- a nearby nucleus (or electron) is required to absorb some momentum.

#### 6.2 Pair Annihilation

When a particle meets its antiparticle, they can annihilate, converting their combined rest mass energy into photon energy. For electron-positron annihilation:

$$e^- + e^+ \to 2\gamma$$

Two photons are produced (not one) to conserve both energy and momentum. Each photon has energy equal to the rest energy of the electron (or positron):

$$E_\gamma = m_e c^2 = 0.511 \;\mathrm{MeV}$$

If the particles have kinetic energy before annihilation, the photons share this additional energy.

#### 6.3 Conservation Laws in Pair Processes

- **Energy** is always conserved (including rest mass energy via $E = mc^2$).
- **Momentum** is always conserved (hence the need for a nucleus in pair production, and two photons in annihilation).
- **Charge** is always conserved (the total charge before and after the process is the same).


### 7. The Schrodinger Equation (Qualitative)

#### 7.1 Wave Function

In quantum mechanics, the state of a particle is described by a **wave function** $\psi(x, t)$, which contains all information about the particle. The wave function itself is not directly observable, but its square modulus gives the **probability density**:

$$P(x) = \lvert\psi(x)\rvert^2$$

This means the probability of finding the particle in a small interval $dx$ around position $x$ is:

$$dP = \lvert\psi(x)\rvert^2 \, dx$$

#### 7.2 The Time-Independent Schrodinger Equation

For a particle in a time-independent potential $V(x)$:

$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + V(x)\psi = E\psi$$

where $E$ is the total energy of the particle.

This is a second-order differential equation. The allowed energy levels arise from the requirement that physically acceptable wave functions must be:
- **Normalizable**: $\int_{-\infty}^{\infty}\lvert\psi\rvert^2 \, dx = 1$ (the particle must be somewhere).
- **Continuous**: The wave function and its first derivative must be continuous everywhere.

#### 7.3 Solutions for Common Potentials

**Particle in a box** (infinite square well of width $L$):

$$E_n = \frac{n^2 h^2}{8mL^2}, \quad n = 1, 2, 3, \ldots$$

$$\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$$

This quantization of energy arises naturally from the boundary conditions.

#### 7.4 Interpretation

- The wave function can be positive, negative, or complex. Only $\lvert\psi\rvert^2$ has physical meaning.
- Nodes in the wave function correspond to positions where the probability of finding the particle is zero.
- The ground state ($n = 1$) has the lowest possible energy, which is nonzero -- this is a purely quantum effect (zero-point energy).


### 8. Quantum Tunnelling and Barrier Penetration

#### 8.1 The Tunnelling Phenomenon

In classical mechanics, a particle with energy $E$ less than a potential barrier of height $V_0$ cannot pass through it. In quantum mechanics, there is a non-zero probability that the particle will be found on the other side. This is **quantum tunnelling**.

#### 8.2 Qualitative Description

Inside the barrier ($E \lt V_0$), the wave function does not suddenly drop to zero. Instead, it decays exponentially:

$$\psi(x) \propto e^{-\kappa x}$$

where $\kappa = \sqrt{2m(V_0 - E)}/\hbar$.

The probability of tunnelling depends on:
- The **barrier height** $(V_0 - E)$: Higher barriers decrease the probability.
- The **barrier width** $L$: Wider barriers dramatically decrease the probability.
- The **particle mass** $m$: Heavier particles have lower tunnelling probability.

The **transmission coefficient** (probability of tunnelling) is approximately:

$$T \approx e^{-2\kappa L} = \exp\left(-\frac{2L}{\hbar}\sqrt{2m(V_0 - E)}\right)$$

#### 8.3 Applications of Quantum Tunnelling

- **Alpha decay**: An alpha particle inside a nucleus encounters a potential barrier due to the strong nuclear force. It tunnels through this barrier to escape.
- **Scanning tunnelling microscope (STM)**: Uses tunnelling current between a sharp tip and a surface to create atomic-resolution images.
- **Nuclear fusion in stars**: Protons tunnel through the Coulomb barrier to undergo fusion at temperatures lower than classically required.
- **Flash memory**: Uses tunnelling of electrons through a thin insulating layer to store charge.


---

## Part B: Nuclear Physics (Topic 7)


### 9. Nuclear Structure

#### 9.1 Nucleons

The nucleus is composed of **nucleons**: protons and neutrons.

| Property | Proton | Neutron |
|----------|--------|---------|
| Charge | $+e$ | $0$ |
| Mass | $1.673 \times 10^{-27} \;\mathrm{kg}$ | $1.675 \times 10^{-27} \;\mathrm{kg}$ |
| Spin | $1/2$ | $1/2$ |

The **atomic number** $Z$ equals the number of protons and determines the element.
The **mass number** (nucleon number) $A$ equals the total number of nucleons.
The **neutron number** $N = A - Z$.

#### 9.2 Nuclide Notation

A nuclide is represented as:

$$^{A}_{Z}\mathrm{X}$$

where X is the chemical symbol. For example, carbon-12 is $^{12}_{6}\mathrm{C}$.

#### 9.3 Isotopes

**Isotopes** are atoms of the same element (same $Z$) with different numbers of neutrons (different $A$). For example:

- $^{1}_{1}\mathrm{H}$ (protium), $^{2}_{1}\mathrm{H}$ (deuterium), $^{3}_{1}\mathrm{H}$ (tritium)
- $^{235}_{92}\mathrm{U}$ and $^{238}_{92}\mathrm{U}$

Isotopes have the same chemical properties but different nuclear properties (stability, decay modes).

#### 9.4 Nuclear Forces

The **strong nuclear force** binds nucleons together. Its properties:
- Short range: effective only over distances of about $1$--$3 \;\mathrm{fm}$ ($10^{-15} \;\mathrm{m}$).
- Attractive at distances above about $1 \;\mathrm{fm}$.
- Very strong: about 100 times stronger than the electromagnetic force at short range.
- Independent of charge: acts equally between proton-proton, neutron-neutron, and proton-neutron pairs.

The **electromagnetic force** between protons (repulsive) competes with the strong force at short distances. For large nuclei, the Coulomb repulsion becomes significant, limiting the size of stable nuclei.


### 10. Radioactive Decay

#### 10.1 Alpha Decay

An alpha particle ($^{4}_{2}\mathrm{\alpha}$, i.e., a helium-4 nucleus) is emitted:

$$^{A}_{Z}\mathrm{X} \to {}^{A-4}_{Z-2}\mathrm{Y} + {}^{4}_{2}\mathrm{\alpha}$$

Characteristics:
- Alpha particles are heavy, doubly charged, and have a short range in matter (a few cm in air).
- They cause intense ionisation along their path.
- Typical energies: $4$--$9 \;\mathrm{MeV}$.
- Occurs mainly in very heavy nuclei ($Z \gt 82$).

#### 10.2 Beta Decay

**Beta-minus decay** ($\beta^-$): A neutron converts to a proton, emitting an electron and an antineutrino:

$$n \to p + e^- + \bar{\nu}_e$$

$$^{A}_{Z}\mathrm{X} \to {}^{A}_{Z+1}\mathrm{Y} + e^- + \bar{\nu}_e$$

This occurs when the neutron-to-proton ratio is too high.

**Beta-plus decay** ($\beta^+$): A proton converts to a neutron, emitting a positron and a neutrino:

$$p \to n + e^+ + \nu_e$$

$$^{A}_{Z}\mathrm{X} \to {}^{A}_{Z-1}\mathrm{Y} + e^+ + \nu_e$$

This occurs when the neutron-to-proton ratio is too low. Requires $2m_e c^2$ of energy.

Characteristics of beta particles:
- Much lighter than alpha particles.
- Longer range in matter (up to a few metres in air, a few mm in aluminium).
- Less ionising per unit path length than alpha particles.

#### 10.3 Gamma Decay

Gamma rays are high-energy photons emitted when a nucleus transitions from an excited state to a lower energy state:

$$^{A}_{Z}\mathrm{X}^* \to {}^{A}_{Z}\mathrm{X} + \gamma$$

Characteristics:
- No change in $Z$ or $A$.
- Highly penetrating (require thick lead or concrete to stop).
- Weakly ionising compared to alpha and beta particles.
- Often emitted following alpha or beta decay when the daughter nucleus is left in an excited state.

#### 10.4 Penetration and Ionisation Summary

| Radiation | Charge | Mass (u) | Penetrating Power | Ionising Power |
|-----------|--------|----------|-------------------|----------------|
| Alpha ($\alpha$) | $+2e$ | 4 | Low (paper) | High |
| Beta ($\beta$) | $\pm e$ | $\approx 0.0005$ | Medium (aluminium) | Medium |
| Gamma ($\gamma$) | 0 | 0 | High (lead) | Low |

<details>
<summary>
<b>Solution</b>
</summary>

Radium-226 undergoes alpha decay.

Write the nuclear equation and identify the daughter nuclide.

Radium has $Z = 88$, $A = 226$.

$$^{226}_{88}\mathrm{Ra} \to {}^{A-4}_{Z-2}\mathrm{X} + {}^{4}_{2}\mathrm{\alpha}$$

$$^{226}_{88}\mathrm{Ra} \to {}^{222}_{86}\mathrm{Rn} + {}^{4}_{2}\mathrm{\alpha}$$

The daughter nuclide is radon-222 ($^{222}_{86}\mathrm{Rn}$).

Check: $222 + 4 = 226$ and $86 + 2 = 88$. Both mass number and atomic number are conserved.

</details>


### 11. Half-Life and Decay Constant

#### 11.1 The Decay Law

Radioactive decay is a random process. For a large sample, the number of undecayed nuclei decreases exponentially:

$$N = N_0 e^{-\lambda t}$$

where:
- $N$ is the number of undecayed nuclei at time $t$
- $N_0$ is the initial number of nuclei
- $\lambda$ is the **decay constant** (probability of decay per unit time)
- $t$ is the elapsed time

The **activity** $A$ (number of decays per unit time) is:

$$A = \lambda N = \lambda N_0 e^{-\lambda t} = A_0 e^{-\lambda t}$$

The SI unit of activity is the **becquerel** (Bq): $1 \;\mathrm{Bq} = 1 \;\mathrm{decay/s}$.

#### 11.2 Half-Life

The **half-life** $t_{1/2}$ is the time for half of the radioactive nuclei to decay:

$$t_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}$$

After $n$ half-lives, the fraction remaining is:

$$\frac{N}{N_0} = \left(\frac{1}{2}\right)^n$$

#### 11.3 Relationship Summary

$$\lambda = \frac{\ln 2}{t_{1/2}} \quad , \quad t_{1/2} = \frac{\ln 2}{\lambda}$$

$$N(t) = N_0 \cdot 2^{-t/t_{1/2}}$$

<details>
<summary>
<b>Solution</b>
</summary>

A sample of iodine-131 has a half-life of 8.04 days and an initial activity of $640 \;\mathrm{Bq}$.

Find: (a) the decay constant, (b) the activity after 24 days, and (c) the time for the activity to drop to $40 \;\mathrm{Bq}$.

**(a) Decay constant:**

$$\lambda = \frac{\ln 2}{t_{1/2}} = \frac{0.693}{8.04 \times 24 \times 3600} = \frac{0.693}{6.95 \times 10^{5}} = 9.97 \times 10^{-7} \;\mathrm{s^{-1}}$$

**(b) Activity after 24 days:**

Number of half-lives: $n = 24 / 8.04 = 2.99 \approx 3$.

$$A = 640 \times \left(\frac{1}{2}\right)^{3} = 640 \times 0.125 = 80 \;\mathrm{Bq}$$

Or using the exponential formula:

$$A = 640 \times e^{-9.97 \times 10^{-7} \times 24 \times 86400} = 640 \times e^{-2.07} = 640 \times 0.126 = 80.6 \;\mathrm{Bq}$$

**(c) Time to reach 40 Bq:**

$$40 = 640 \times e^{-\lambda t}$$

$$e^{-\lambda t} = \frac{40}{640} = \frac{1}{16} = \left(\frac{1}{2}\right)^4$$

So $n = 4$ half-lives:

$$t = 4 \times 8.04 = 32.2 \;\mathrm{days}$$

</details>


### 12. Nuclear Equations and Conservation Laws

#### 12.1 Conservation Laws

In all nuclear reactions, the following quantities are conserved:

1. **Mass number** (total number of nucleons): $A$
2. **Atomic number** (total charge): $Z$
3. **Total energy** (including rest mass energy): $E = mc^2$
4. **Momentum**: $\sum \vec{p}_{\mathrm{before}} = \sum \vec{p}_{\mathrm{after}}$
5. **Lepton number** (in beta decay)
6. **Strangeness** (in some particle reactions)

#### 12.2 Writing Nuclear Equations

When writing nuclear equations, always verify conservation of $A$ and $Z$:

**Example -- Beta-minus decay of carbon-14:**

$$^{14}_{6}\mathrm{C} \to {}^{14}_{7}\mathrm{N} + {}^{0}_{-1}e + \bar{\nu}_e$$

Check: $14 = 14 + 0$ and $6 = 7 + (-1)$. Both conserved.

**Example -- Beta-plus decay of potassium-40:**

$$^{40}_{19}\mathrm{K} \to {}^{40}_{18}\mathrm{Ar} + {}^{0}_{+1}e + \nu_e$$

Check: $40 = 40 + 0$ and $19 = 18 + 1$. Both conserved.


### 13. Binding Energy and Mass Defect

#### 13.1 Mass Defect

The **mass defect** $\Delta m$ is the difference between the mass of a nucleus and the sum of the masses of its individual nucleons:

$$\Delta m = Zm_p + Nm_n - m_{\mathrm{nucleus}}$$

In practice, atomic masses (including electrons) are used:

$$\Delta m = Zm(\mathrm{^{1}_{1}H}) + Nm_n - m(\mathrm{atom})$$

The mass defect is always positive for stable nuclei: the nucleus is less massive than its constituent nucleons.

#### 13.2 Binding Energy

The **binding energy** is the energy equivalent of the mass defect:

$$E_b = \Delta m \, c^2$$

This is the minimum energy required to completely separate a nucleus into its individual protons and neutrons. A larger binding energy per nucleon means a more tightly bound (more stable) nucleus.

The **binding energy per nucleon** is:

$$\frac{E_b}{A}$$

#### 13.3 Binding Energy Curve

The binding energy per nucleon curve has the following key features:

- **Iron-56** ($^{56}_{26}\mathrm{Fe}$) has the highest binding energy per nucleon (approximately $8.8 \;\mathrm{MeV/nucleon}$), making it the most stable nucleus.
- Light nuclei (up to $A \approx 20$): Binding energy per nucleon increases sharply. **Fusion** of light nuclei releases energy.
- Heavy nuclei ($A \gt 56$): Binding energy per nucleon gradually decreases. **Fission** of heavy nuclei releases energy.
- The peak around $A = 4$ (helium-4) is due to its particularly stable closed-shell configuration.

<details>
<summary>
<b>Solution</b>
</summary>

Calculate the binding energy per nucleon of helium-4 ($^{4}_{2}\mathrm{He}$).

Given data:
- Mass of $^{4}_{2}\mathrm{He}$ atom: $4.002603 \;\mathrm{u}$
- Mass of $^{1}_{1}\mathrm{H}$ atom: $1.007825 \;\mathrm{u}$
- Mass of neutron: $1.008665 \;\mathrm{u}$
- $1 \;\mathrm{u} = 931.5 \;\mathrm{MeV/c^2}$

**Mass defect:**

$$\Delta m = 2(1.007825) + 2(1.008665) - 4.002603$$

$$\Delta m = 2.015650 + 2.017330 - 4.002603 = 0.030377 \;\mathrm{u}$$

**Binding energy:**

$$E_b = 0.030377 \times 931.5 = 28.30 \;\mathrm{MeV}$$

**Binding energy per nucleon:**

$$\frac{E_b}{A} = \frac{28.30}{4} = 7.07 \;\mathrm{MeV/nucleon}$$

</details>


### 14. Nuclear Fission and Fusion

#### 14.1 Nuclear Fission

**Fission** is the splitting of a heavy nucleus into two (or more) lighter nuclei, releasing energy. The most common example is the fission of uranium-235 by a thermal neutron:

$$^{1}_{0}n + {}^{235}_{92}\mathrm{U} \to {}^{236}_{92}\mathrm{U}^* \to {}^{141}_{56}\mathrm{Ba} + {}^{92}_{36}\mathrm{Kr} + 3{}^{1}_{0}n + \mathrm{energy}$$

Key features:
- The process releases approximately $200 \;\mathrm{MeV}$ per fission event.
- On average, 2--3 neutrons are produced, enabling a **chain reaction**.
- The daughter nuclei are not always the same; many different fission product pairs are possible.
- The total mass of the products is less than the total mass of the reactants (mass converted to energy).

#### 14.2 Chain Reactions

A **chain reaction** occurs when neutrons from one fission event cause further fission events.

- **Subcritical**: Average number of fissions per generation is less than 1. Reaction dies out.
- **Critical**: Average number of fissions per generation equals 1. Steady reaction (nuclear reactor).
- **Supercritical**: Average number of fissions per generation exceeds 1. Reaction grows (nuclear weapon or reactor startup).

#### 14.3 Nuclear Fusion

**Fusion** is the combining of light nuclei to form a heavier nucleus, releasing energy. Examples:

$$^{2}_{1}\mathrm{H} + {}^{2}_{1}\mathrm{H} \to {}^{3}_{2}\mathrm{He} + {}^{1}_{0}n + 3.27 \;\mathrm{MeV}$$

$$^{2}_{1}\mathrm{H} + {}^{3}_{1}\mathrm{H} \to {}^{4}_{2}\mathrm{He} + {}^{1}_{0}n + 17.6 \;\mathrm{MeV}$$

Conditions for fusion:
- Extremely high temperatures ($\sim 10^{8} \;\mathrm{K}$) to overcome electrostatic repulsion.
- High particle density to increase collision rate.
- Sufficient confinement time (Lawson criterion).

#### 14.4 Fission vs Fusion Comparison

| Property | Fission | Fusion |
|----------|---------|--------|
| Fuel | Uranium-235, Plutonium-239 | Deuterium, Tritium |
| Products | Heavy radioactive isotopes | Helium (non-radioactive) |
| Energy per event | ~200 MeV | ~17 MeV (per D-T reaction) |
| Energy per nucleon | ~0.9 MeV | ~3.5 MeV |
| By-products | Long-lived radioactive waste | Minimal radioactive waste |
| Trigger | Neutron absorption | High temperature and pressure |


### 15. Background Radiation and Detection

#### 15.1 Sources of Background Radiation

Background radiation is always present and comes from several sources:

1. **Radon gas**: The largest natural source, seeping from the ground (especially granite areas).
2. **Cosmic rays**: High-energy particles from space. Intensity increases with altitude.
3. **Terrestrial radiation**: From radioactive isotopes in rocks and soil (uranium, thorium, potassium-40).
4. **Internal radiation**: Radioactive isotopes within the body (carbon-14, potassium-40).
5. **Artificial sources**: Medical procedures (X-rays), nuclear power, fallout from weapons testing.

#### 15.2 Radiation Detection Methods

**Geiger-Muller (GM) tube:**
- Detects alpha, beta, and gamma radiation.
- Each ionising event produces a pulse of current.
- Cannot distinguish between radiation types or measure energy.
- Has a "dead time" after each detection.

**Scintillation counter:**
- A scintillating material emits light when radiation passes through it.
- A photomultiplier tube converts the light into an electrical signal.
- Can measure the energy of the radiation.

**Photographic film:**
- Darkens when exposed to radiation.
- Used in radiation badges for monitoring cumulative exposure.

**Solid-state detector:**
- Semiconductor device; radiation creates electron-hole pairs.
- High resolution and good energy discrimination.


### 16. Nuclear Power

#### 16.1 Components of a Nuclear Reactor

- **Fuel rods**: Contain fissionable material (enriched uranium-235).
- **Moderator**: Slows down fast neutrons to thermal energies, increasing the probability of fission of U-235. Common moderators: water (light or heavy), graphite.
- **Control rods**: Absorb neutrons (made of materials like boron or cadmium) to control the rate of the chain reaction.
- **Coolant**: Transfers heat from the reactor core to the heat exchanger. Common coolants: water, liquid sodium, carbon dioxide.
- **Containment**: A robust structure surrounding the reactor to prevent the release of radioactive material.

#### 16.2 How a Reactor Works

1. Fission reactions in the fuel rods produce heat.
2. The coolant transfers this heat to a heat exchanger.
3. The heat exchanger produces steam, which drives a turbine connected to a generator.
4. Control rods are inserted or withdrawn to maintain a critical state.

#### 16.3 Safety Considerations

- **Multiple barriers**: Fuel cladding, primary cooling circuit, containment building.
- **Emergency shutdown** (SCRAM): Control rods drop fully into the reactor.
- **Decay heat**: Even after shutdown, fission products continue to produce heat, requiring continued cooling.
- **Nuclear waste management**: Spent fuel is highly radioactive and must be stored safely for thousands of years.

<details>
<summary>
<b>Solution</b>
</summary>

In a fission reaction, a uranium-235 nucleus absorbs a neutron and splits into barium-144 and krypton-89, releasing 3 neutrons.

Calculate the energy released. Given masses:
- $^{235}_{92}\mathrm{U}$: $235.043930 \;\mathrm{u}$
- $^{1}_{0}n$: $1.008665 \;\mathrm{u}$
- $^{144}_{56}\mathrm{Ba}$: $143.922953 \;\mathrm{u}$
- $^{89}_{36}\mathrm{Kr}$: $88.917631 \;\mathrm{u}$

**Reactant mass:**

$$m_{\mathrm{reactants}} = 235.043930 + 1.008665 = 236.052595 \;\mathrm{u}$$

**Product mass:**

$$m_{\mathrm{products}} = 143.922953 + 88.917631 + 3 \times 1.008665$$

$$m_{\mathrm{products}} = 143.922953 + 88.917631 + 3.025995 = 235.866579 \;\mathrm{u}$$

**Mass defect:**

$$\Delta m = 236.052595 - 235.866579 = 0.186016 \;\mathrm{u}$$

**Energy released:**

$$E = 0.186016 \times 931.5 = 173.3 \;\mathrm{MeV}$$

</details>


---

## Problem Set

### Problem 1

Light of wavelength $400 \;\mathrm{nm}$ is incident on a sodium surface with work function $2.3 \;\mathrm{eV}$. Determine whether photoelectrons are emitted and, if so, find the maximum kinetic energy in eV.

<details>
<summary>
<b>Solution</b>
</summary>

Photon energy:

$$E = \frac{hc}{\lambda} = \frac{6.63 \times 10^{-34} \times 3.00 \times 10^{8}}{400 \times 10^{-9}} = 4.97 \times 10^{-19} \;\mathrm{J} = 3.11 \;\mathrm{eV}$$

Since $E = 3.11 \;\mathrm{eV} \gt \phi = 2.3 \;\mathrm{eV}$, photoelectrons are emitted.

$$E_{k,\mathrm{max}} = 3.11 - 2.3 = 0.81 \;\mathrm{eV}$$

If you get this wrong, revise: Section 1.2 (Einstein's equation).

</details>

### Problem 2

Find the de Broglie wavelength of a neutron moving at $2.00 \times 10^{4} \;\mathrm{m/s}$. (Neutron mass: $1.675 \times 10^{-27} \;\mathrm{kg}$.)

<details>
<summary>
<b>Solution</b>
</summary>

$$\lambda = \frac{h}{mv} = \frac{6.63 \times 10^{-34}}{1.675 \times 10^{-27} \times 2.00 \times 10^{4}}$$

$$\lambda = \frac{6.63 \times 10^{-34}}{3.35 \times 10^{-23}} = 1.98 \times 10^{-11} \;\mathrm{m} = 0.0198 \;\mathrm{nm}$$

If you get this wrong, revise: Section 2.1 (de Broglie wavelength).

</details>

### Problem 3

A hydrogen atom makes a transition from $n = 3$ to $n = 2$. Calculate the wavelength of the emitted photon and identify the spectral series.

<details>
<summary>
<b>Solution</b>
</summary>

$$E_3 = \frac{-13.6}{9} = -1.51 \;\mathrm{eV}$$

$$E_2 = \frac{-13.6}{4} = -3.40 \;\mathrm{eV}$$

$$\Delta E = -1.51 - (-3.40) = 1.89 \;\mathrm{eV}$$

$$\lambda = \frac{hc}{\Delta E} = \frac{6.63 \times 10^{-34} \times 3.00 \times 10^{8}}{1.89 \times 1.60 \times 10^{-19}}$$

$$\lambda = \frac{1.99 \times 10^{-25}}{3.02 \times 10^{-19}} = 6.58 \times 10^{-7} \;\mathrm{m} = 658 \;\mathrm{nm}$$

This is in the visible region (red light), part of the **Balmer series** ($n \to 2$).

If you get this wrong, revise: Section 3.2 (emission spectra).

</details>

### Problem 4

A proton is confined to a nucleus of diameter $1.6 \times 10^{-14} \;\mathrm{m}$. Estimate the minimum uncertainty in its momentum. (Proton mass: $1.67 \times 10^{-27} \;\mathrm{kg}$.)

<details>
<summary>
<b>Solution</b>
</summary>

$$\Delta p \geq \frac{\hbar}{2\,\Delta x} = \frac{1.055 \times 10^{-34}}{2 \times 1.6 \times 10^{-14}} = 3.30 \times 10^{-21} \;\mathrm{kg \cdot m/s}$$

The minimum uncertainty in velocity:

$$\Delta v = \frac{\Delta p}{m_p} = \frac{3.30 \times 10^{-21}}{1.67 \times 10^{-27}} = 1.98 \times 10^{6} \;\mathrm{m/s}$$

If you get this wrong, revise: Section 4.1 (Heisenberg uncertainty principle).

</details>

### Problem 5

A photon with wavelength $0.100 \;\mathrm{nm}$ undergoes Compton scattering through $180°$. Find the wavelength of the scattered photon.

<details>
<summary>
<b>Solution</b>
</summary>

$$\Delta\lambda = \frac{h}{m_e c}(1 - \cos 180°) = 2.43 \times 10^{-12}(1 - (-1)) = 4.86 \times 10^{-12} \;\mathrm{m}$$

$$\lambda' = 0.100 \times 10^{-9} + 4.86 \times 10^{-12} = 1.049 \times 10^{-10} \;\mathrm{m} = 0.1049 \;\mathrm{nm}$$

If you get this wrong, revise: Section 5.1 (Compton formula).

</details>

### Problem 6

What is the minimum photon energy required for electron-positron pair production? Express your answer in MeV and calculate the corresponding maximum wavelength.

<details>
<summary>
<b>Solution</b>
</summary>

$$E_{\mathrm{min}} = 2m_e c^2 = 2 \times 0.511 = 1.022 \;\mathrm{MeV}$$

Maximum wavelength:

$$\lambda_{\mathrm{max}} = \frac{hc}{E_{\mathrm{min}}} = \frac{6.63 \times 10^{-34} \times 3.00 \times 10^{8}}{1.022 \times 10^{6} \times 1.60 \times 10^{-19}}$$

$$\lambda_{\mathrm{max}} = \frac{1.99 \times 10^{-25}}{1.635 \times 10^{-13}} = 1.22 \times 10^{-12} \;\mathrm{m} = 1.22 \;\mathrm{pm}$$

This is in the gamma-ray region of the electromagnetic spectrum.

If you get this wrong, revise: Section 6.1 (pair production).

</details>

### Problem 7

Strontium-90 undergoes beta-minus decay with a half-life of 28.8 years. A sample initially contains $5.0 \times 10^{20}$ atoms. How many atoms remain after 100 years?

<details>
<summary>
<b>Solution</b>
</summary>

Number of half-lives:

$$n = \frac{100}{28.8} = 3.47$$

Fraction remaining:

$$\frac{N}{N_0} = \left(\frac{1}{2}\right)^{3.47} = 2^{-3.47} = 0.0888$$

$$N = 5.0 \times 10^{20} \times 0.0888 = 4.4 \times 10^{19} \;\mathrm{atoms}$$

Alternatively, using the exponential form:

$$\lambda = \frac{\ln 2}{28.8 \times 365.25 \times 24 \times 3600} = 7.64 \times 10^{-10} \;\mathrm{s^{-1}}$$

$$t = 100 \times 365.25 \times 24 \times 3600 = 3.156 \times 10^{9} \;\mathrm{s}$$

$$N = N_0 e^{-\lambda t} = 5.0 \times 10^{20} \times e^{-2.41} = 5.0 \times 10^{20} \times 0.0898 = 4.5 \times 10^{19}$$

If you get this wrong, revise: Section 11.2 (half-life).

</details>

### Problem 8

Write balanced nuclear equations for the following:
(a) Alpha decay of polonium-210.
(b) Beta-minus decay of cobalt-60.
(c) Gamma emission from an excited nucleus of cobalt-60.

<details>
<summary>
<b>Solution</b>
</summary>

**(a)** Polonium has $Z = 84$:

$$^{210}_{84}\mathrm{Po} \to {}^{206}_{82}\mathrm{Pb} + {}^{4}_{2}\mathrm{\alpha}$$

Check: $210 = 206 + 4$ and $84 = 82 + 2$.

**(b)** Cobalt has $Z = 27$:

$$^{60}_{27}\mathrm{Co} \to {}^{60}_{28}\mathrm{Ni} + {}^{0}_{-1}e + \bar{\nu}_e$$

Check: $60 = 60 + 0$ and $27 = 28 + (-1)$.

**(c)** Gamma emission does not change $Z$ or $A$:

$$^{60}_{27}\mathrm{Co}^* \to {}^{60}_{27}\mathrm{Co} + \gamma$$

If you get this wrong, revise: Section 12.1 (conservation laws).

</details>

### Problem 9

Calculate the binding energy per nucleon of uranium-235. Given:
- Mass of $^{235}_{92}\mathrm{U}$: $235.043930 \;\mathrm{u}$
- Mass of $^{1}_{1}\mathrm{H}$: $1.007825 \;\mathrm{u}$
- Mass of neutron: $1.008665 \;\mathrm{u}$
- $1 \;\mathrm{u} = 931.5 \;\mathrm{MeV/c^2}$

<details>
<summary>
<b>Solution</b>
</summary>

Number of protons: $Z = 92$, Number of neutrons: $N = 235 - 92 = 143$.

**Mass defect:**

$$\Delta m = 92(1.007825) + 143(1.008665) - 235.043930$$

$$\Delta m = 92.719900 + 144.239095 - 235.043930 = 1.915065 \;\mathrm{u}$$

**Binding energy:**

$$E_b = 1.915065 \times 931.5 = 1784 \;\mathrm{MeV}$$

**Binding energy per nucleon:**

$$\frac{E_b}{A} = \frac{1784}{235} = 7.59 \;\mathrm{MeV/nucleon}$$

This is less than the binding energy per nucleon of iron-56 (8.8 MeV/nucleon), confirming that uranium-235 can release energy through fission.

If you get this wrong, revise: Section 13.2 (binding energy).

</details>

### Problem 10

In a nuclear reactor, each fission of U-235 releases approximately $200 \;\mathrm{MeV}$ of energy. How many fissions per second are needed to produce a power output of $500 \;\mathrm{MW}$?

<details>
<summary>
<b>Solution</b>
</summary>

Energy per fission: $E_f = 200 \;\mathrm{MeV} = 200 \times 10^{6} \times 1.60 \times 10^{-19} = 3.20 \times 10^{-11} \;\mathrm{J}$.

Power output: $P = 500 \;\mathrm{MW} = 5.00 \times 10^{8} \;\mathrm{W}$.

Number of fissions per second:

$$N = \frac{P}{E_f} = \frac{5.00 \times 10^{8}}{3.20 \times 10^{-11}} = 1.56 \times 10^{19} \;\mathrm{fissions/s}$$

Mass of U-235 consumed per second:

$$m = N \times m_{\mathrm{U-235}} = 1.56 \times 10^{19} \times 235 \times 1.66 \times 10^{-27} = 6.09 \times 10^{-6} \;\mathrm{kg/s}$$

$$\approx 6.1 \;\mathrm{mg/s} \approx 0.52 \;\mathrm{kg/day}$$

If you get this wrong, revise: Section 14.1 (nuclear fission).

</details>

### Problem 11

An electron with kinetic energy $5.0 \;\mathrm{eV}$ approaches a rectangular potential barrier of height $10.0 \;\mathrm{eV}$ and width $0.50 \;\mathrm{nm}$. Estimate the transmission coefficient (probability of tunnelling).

<details>
<summary>
<b>Solution</b>
</summary>

First, find $\kappa$:

$$\kappa = \frac{\sqrt{2m_e(V_0 - E)}}{\hbar}$$

Convert energies to joules: $V_0 - E = 5.0 \;\mathrm{eV} = 8.0 \times 10^{-19} \;\mathrm{J}$.

$$\kappa = \frac{\sqrt{2 \times 9.11 \times 10^{-31} \times 8.0 \times 10^{-19}}}{1.055 \times 10^{-34}}$$

$$\kappa = \frac{\sqrt{1.458 \times 10^{-48}}}{1.055 \times 10^{-34}} = \frac{1.208 \times 10^{-24}}{1.055 \times 10^{-34}} = 1.145 \times 10^{10} \;\mathrm{m^{-1}}$$

Transmission coefficient:

$$T \approx e^{-2\kappa L} = e^{-2 \times 1.145 \times 10^{10} \times 0.50 \times 10^{-9}}$$

$$T = e^{-11.45} = 1.06 \times 10^{-5}$$

So the probability of tunnelling is approximately $0.001\%$.

If you get this wrong, revise: Section 8.2 (quantum tunnelling).

</details>

### Problem 12

A radioactive sample contains two isotopes: isotope A with half-life 6.0 hours and initial activity $200 \;\mathrm{Bq}$, and isotope B with half-life 12.0 hours and initial activity $100 \;\mathrm{Bq}$. Calculate the total activity of the sample after 24 hours.

<details>
<summary>
<b>Solution</b>
</summary>

**Isotope A:**

Number of half-lives: $n_A = 24 / 6.0 = 4.0$

$$A_A = 200 \times \left(\frac{1}{2}\right)^{4} = 200 \times 0.0625 = 12.5 \;\mathrm{Bq}$$

**Isotope B:**

Number of half-lives: $n_B = 24 / 12.0 = 2.0$

$$A_B = 100 \times \left(\frac{1}{2}\right)^{2} = 100 \times 0.25 = 25.0 \;\mathrm{Bq}$$

**Total activity:**

$$A_{\mathrm{total}} = 12.5 + 25.0 = 37.5 \;\mathrm{Bq}$$

If you get this wrong, revise: Section 11.1 (decay law).

</details>
