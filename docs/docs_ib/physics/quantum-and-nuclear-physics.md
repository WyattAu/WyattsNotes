---
title: Quantum and Nuclear Physics
tags:
- IB
- Physics
slug: quantum-and-nuclear-physics
description: "Comprehensive guide to quantum and nuclear physics for the International Baccalaureate."
---


## 1. Quantum Physics (Topic 12, HL)

### 1.1 The Photoelectric Effect

When electromagnetic radiation is incident on a metal surface, electrons may be ejected. This phenomenon
is called the **photoelectric effect**. The experimental observations cannot be explained by classical
wave theory:

- There is a **threshold frequency** $f_0$ below which no electrons are emitted, regardless of intensity.
- The maximum kinetic energy of emitted electrons depends on the frequency, not the intensity.
- Electrons are emitted instantaneously, even at very low intensities.

Einstein explained these observations by proposing that light consists of discrete packets of energy
called **photons**, each with energy:

$$E = hf$$

where $h = 6.63 \times 10^{-34}\,\mathrm{J\,s}$ is Planck's constant and $f$ is the frequency.

A photon can transfer all its energy to a single electron. The **work function** $\phi$ is the minimum
energy required to liberate an electron from the metal surface. Einstein's photoelectric equation gives
the maximum kinetic energy of emitted electrons:

$$E_{k,\mathrm{max}} = hf - \phi$$

Since $\phi = hf_0$ (the threshold frequency), this can also be written as:

$$E_{k,\mathrm{max}} = h(f - f_0)$$

The **stopping potential** $V_s$ is the minimum potential difference needed to prevent the most
energetic photoelectrons from reaching the collector:

$$eV_s = E_{k,\mathrm{max}} = hf - \phi$$

:::info[Data Booklet Reference] Key photoelectric equations:

$$E = hf$$

$$E_{k,\mathrm{max}} = hf - \phi$$

$$\phi = hf_0$$

:::

### 1.2 Wave-Particle Duality

The **de Broglie hypothesis** states that all matter exhibits wave-like properties. A particle with
momentum $p$ has an associated wavelength:

$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

where $m$ is the relativistic mass and $v$ is the velocity. For non-relativistic particles,
$\lambda = \frac{h}{m_0 v}$ where $m_0$ is the rest mass.

**Evidence for wave nature of matter:**

- **Electron diffraction:** Electrons passing through a thin crystal produce a diffraction pattern
  identical to that produced by X-rays. The diffraction condition is $d\sin\theta = n\lambda$, confirming
  that electrons have a wavelength given by the de Broglie equation.
- **Davisson-Germer experiment:** Electrons scattered from a nickel crystal showed intensity maxima at
  specific angles consistent with diffraction of waves.

**Evidence for particle nature of light:**

- The photoelectric effect (photons transfer discrete quanta of energy).
- **Compton scattering** (see Section 1.5): X-ray photons scatter off electrons, behaving as particles
  in collisions.

The wave-particle duality is a fundamental principle: all quantum objects exhibit both wave-like and
particle-like properties depending on the type of observation performed.

### 1.3 Energy Levels and Spectral Lines

The **Bohr model** of the atom postulates that electrons orbit the nucleus only in certain allowed
energy levels. When an electron transitions between energy levels, a photon is emitted or absorbed with
energy equal to the difference between the two levels:

$$hf = E_{\mathrm{upper}} - E_{\mathrm{lower}}$$

For hydrogen, the energy levels are given by:

$$E_n = \frac{-13.6\,\mathrm{eV}}{n^2}$$

where $n = 1, 2, 3, \ldots$ is the principal quantum number.

**Emission spectra** are produced when electrons fall from higher to lower energy levels, emitting
photons of specific frequencies. Each element produces a unique line spectrum, a "fingerprint" used in
spectroscopy.

**Absorption spectra** are produced when white light passes through a cool gas. Electrons absorb photons
of specific frequencies to jump to higher energy levels, producing dark lines in a continuous spectrum.

The **Rydberg formula** for hydrogen gives the wavelengths of spectral lines:

$$\frac{1}{\lambda} = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

where $R = 1.097 \times 10^7\,\mathrm{m}^{-1}$ is the Rydberg constant, $n_i$ is the initial level, and
$n_f$ is the final level.

**Spectral series:**

| Series   | $n_f$ | Region        |
| -------- | ----- | ------------- |
| Lyman    | 1     | Ultraviolet   |
| Balmer   | 2     | Visible       |
| Paschen  | 3     | Infrared      |
| Brackett | 4     | Infrared      |

<details>
<summary>Worked Example: Photon Emission in Hydrogen</summary>

An electron in a hydrogen atom transitions from $n = 4$ to $n = 2$. Calculate the energy, frequency,
and wavelength of the emitted photon, and identify the spectral series.

Energy of photon:

$$\Delta E = E_4 - E_2 = \frac{-13.6}{16} - \frac{-13.6}{4} = -0.85 - (-3.40) = 2.55\,\mathrm{eV}$$

Convert to joules: $\Delta E = 2.55 \times 1.60 \times 10^{-19} = 4.08 \times 10^{-19}\,\mathrm{J}$

Frequency:

$$f = \frac{\Delta E}{h} = \frac{4.08 \times 10^{-19}}{6.63 \times 10^{-34}} = 6.15 \times 10^{14}\,\mathrm{Hz}$$

Wavelength:

$$\lambda = \frac{c}{f} = \frac{3.00 \times 10^8}{6.15 \times 10^{14}} = 4.88 \times 10^{-7}\,\mathrm{m} = 488\,\mathrm{nm}$$

This is in the visible range (blue-green), part of the **Balmer series** ($n_f = 2$).

**If you get this wrong, revise:** Section 1.3.

</details>

### 1.4 Heisenberg Uncertainty Principle

The Heisenberg uncertainty principle is a fundamental limit on the precision with which certain pairs of
physical properties can be known simultaneously. For position and momentum:

$$\Delta x \, \Delta p \geq \frac{\hbar}{2}$$

where $\hbar = \frac{h}{2\pi}$ is the reduced Planck constant.

This means:

- The more precisely we know a particle's position ($\Delta x$ small), the less precisely we can know
  its momentum ($\Delta p$ large), and vice versa.
- This is **not** a limitation of measurement instruments; it is a fundamental property of nature.
- The uncertainty principle has important consequences: electrons cannot orbit the nucleus in
  classical trajectories (Bohr model is an approximation), and it explains why particles can tunnel
  through classically forbidden regions.

There is also an energy-time uncertainty relation:

$$\Delta E \, \Delta t \geq \frac{\hbar}{2}$$

This allows "virtual particles" to briefly exist as long as $\Delta E \, \Delta t \sim \hbar$, and
explains the natural width of spectral lines.

### 1.5 Compton Scattering

When an X-ray photon collides with a free (or loosely bound) electron, the photon is scattered with a
longer wavelength. This shift in wavelength is called **Compton scattering** and provides direct
evidence for the particle nature of photons.

The change in wavelength of the scattered photon is:

$$\Delta\lambda = \lambda' - \lambda = \frac{h}{m_e c}(1 - \cos\theta)$$

where:

- $\lambda$ is the initial wavelength
- $\lambda'$ is the scattered wavelength
- $\theta$ is the scattering angle of the photon
- $m_e$ is the electron rest mass
- $\frac{h}{m_e c} = 2.43 \times 10^{-12}\,\mathrm{m}$ is the **Compton wavelength** of the electron

**Key observations:**

- The wavelength shift depends only on the scattering angle, not the initial wavelength.
- $\Delta\lambda = 0$ when $\theta = 0$ (no scattering) and $\Delta\lambda = \frac{2h}{m_e c}$
  when $\theta = 180^\circ$ (back-scattering).
- The scattered photon has less energy than the incident photon; the difference is transferred to the
  electron as kinetic energy.

<details>
<summary>Worked Example: Compton Scattering Calculation</summary>

An X-ray photon with wavelength $\lambda = 5.00 \times 10^{-12}\,\mathrm{m}$ is scattered at an angle
of $\theta = 90^\circ$ by a free electron. Find the wavelength of the scattered photon and the kinetic
energy transferred to the electron.

Wavelength shift:

$$\Delta\lambda = \frac{h}{m_e c}(1 - \cos 90^\circ) = 2.43 \times 10^{-12}(1 - 0) = 2.43 \times 10^{-12}\,\mathrm{m}$$

Scattered wavelength:

$$\lambda' = \lambda + \Delta\lambda = 5.00 \times 10^{-12} + 2.43 \times 10^{-12} = 7.43 \times 10^{-12}\,\mathrm{m}$$

Energy of incident photon:

$$E_i = \frac{hc}{\lambda} = \frac{(6.63 \times 10^{-34})(3.00 \times 10^8)}{5.00 \times 10^{-12}} = 3.978 \times 10^{-14}\,\mathrm{J}$$

Energy of scattered photon:

$$E_s = \frac{hc}{\lambda'} = \frac{(6.63 \times 10^{-34})(3.00 \times 10^8)}{7.43 \times 10^{-12}} = 2.677 \times 10^{-14}\,\mathrm{J}$$

Kinetic energy of electron:

$$E_k = E_i - E_s = 3.978 \times 10^{-14} - 2.677 \times 10^{-14} = 1.30 \times 10^{-14}\,\mathrm{J}$$

**If you get this wrong, revise:** Section 1.5.

</details>

### 1.6 Pair Production and Annihilation

**Pair production** is the process in which a photon is converted into a particle-antiparticle pair,
most commonly an electron-positron pair. Energy and momentum must both be conserved.

The minimum photon energy for pair production equals the combined rest energy of the two particles:

$$E_{\mathrm{min}} = 2m_e c^2 = 2(9.11 \times 10^{-31})(3.00 \times 10^8)^2 = 1.64 \times 10^{-13}\,\mathrm{J} = 1.02\,\mathrm{MeV}$$

In practice, the photon must have **more** than this energy because momentum conservation requires a
nearby nucleus (or another particle) to recoil, absorbing some momentum.

**Pair annihilation** is the reverse process: when a particle meets its antiparticle, both are
converted entirely into photon energy. For example, when an electron and positron annihilate:

$$e^- + e^+ \to 2\gamma$$

Two photons are produced (not one) to conserve momentum. Each photon has energy $E = m_e c^2 = 0.511\,\mathrm{MeV}$
and the photons travel in opposite directions.

### 1.7 Quantum Tunnelling (Qualitative)

**Quantum tunnelling** is the phenomenon where a particle can pass through a potential energy barrier
that it classically could not surmount. This is a consequence of the wave nature of particles and the
uncertainty principle.

**Key points:**

- The probability of tunnelling depends on the barrier height and width. Higher and wider barriers
  have lower transmission probabilities.
- Tunnelling probability increases exponentially as the barrier width decreases.
- The wavefunction does not abruptly go to zero inside the barrier; it decays exponentially.
- There is a non-zero probability of finding the particle on the other side of the barrier.

**Applications of quantum tunnelling:**

- **Alpha decay:** An alpha particle inside a nucleus encounters a potential barrier due to the
  strong nuclear force. Tunnelling through this barrier allows alpha decay.
- **Scanning tunnelling microscope (STM):** Uses the exponential dependence of tunnelling current
  on distance to create atomic-resolution images of surfaces.
- **Nuclear fusion in stars:** Protons tunnel through the Coulomb barrier to undergo fusion at
  temperatures lower than classical physics would predict.

---

## 2. Nuclear Physics (Topic 7)

### 2.1 Nuclear Structure

The nucleus of an atom contains **protons** (positively charged, $+e$) and **neutrons** (electrically
neutral). Together, protons and neutrons are called **nucleons**.

**Key definitions:**

- **Atomic number (proton number)** $Z$: the number of protons in the nucleus.
- **Mass number (nucleon number)** $A$: the total number of protons and neutrons ($A = Z + N$).
- **Neutron number** $N = A - Z$: the number of neutrons.
- **Nuclide notation:** $\prescript{A}{}{Z}\mathrm{X}$, where X is the chemical symbol.
- **Isotopes:** atoms of the same element with different numbers of neutrons (same $Z$, different $A$).
- **Isobars:** nuclei with the same mass number but different proton number (same $A$, different $Z$).
- **Isotones:** nuclei with the same neutron number (same $N$, different $Z$).

The nucleus is extremely small: typical nuclear radius $r \approx 1.2 \times 10^{-15}\,\mathrm{m}$.
The empirical formula for nuclear radius is:

$$r = r_0 A^{1/3}$$

where $r_0 \approx 1.2 \times 10^{-15}\,\mathrm{m}$. The $A^{1/3}$ dependence implies that nuclear
density is approximately constant for all nuclei.

Nuclear density:

$$\rho = \frac{A \times m_p}{\frac{4}{3}\pi r^3} = \frac{A \times m_p}{\frac{4}{3}\pi (r_0 A^{1/3})^3} = \frac{3m_p}{4\pi r_0^3} \approx 2.3 \times 10^{17}\,\mathrm{kg\,m}^{-3}$$

This is enormously greater than typical atomic or everyday densities.

### 2.2 Radioactive Decay

Unstable nuclei undergo radioactive decay by emitting particles or electromagnetic radiation. There are
three main types:

**Alpha decay ($\alpha$):**

An alpha particle ($\prescript{4}{}{2}\mathrm{He}$, i.e., a helium-4 nucleus) is emitted:

$$\prescript{A}{}{Z}\mathrm{X} \to \prescript{A-4}{}{Z-2}\mathrm{Y} + \prescript{4}{}{2}\mathrm{He}$$

Alpha particles are highly ionising but have low penetration (stopped by a few centimetres of air or a
sheet of paper).

**Beta-minus decay ($\beta^-$):**

A neutron converts into a proton, emitting an electron and an electron antineutrino:

$$n \to p + e^- + \bar{\nu}_e$$

The nuclear equation:

$$\prescript{A}{}{Z}\mathrm{X} \to \prescript{A}{}{Z+1}\mathrm{Y} + e^- + \bar{\nu}_e$$

Mass number $A$ is conserved; proton number increases by 1. The antineutrino is required to conserve
energy and momentum (the continuous energy spectrum of beta particles led Pauli to propose its
existence).

**Beta-plus decay ($\beta^+$):**

A proton converts into a neutron, emitting a positron and an electron neutrino:

$$p \to n + e^+ + \nu_e$$

The nuclear equation:

$$\prescript{A}{}{Z}\mathrm{X} \to \prescript{A}{}{Z-1}\mathrm{Y} + e^+ + \nu_e$$

Beta-plus decay requires the parent nucleus to have sufficient energy to create the positron mass.

**Gamma radiation ($\gamma$):**

After alpha or beta decay, the daughter nucleus is often left in an excited state. It returns to the
ground state by emitting a gamma photon:

$$\prescript{A}{}{Z}\mathrm{X}^* \to \prescript{A}{}{Z}\mathrm{X} + \gamma$$

Gamma rays are highly penetrating but weakly ionising. They require thick lead or concrete for
shielding.

| Property         | Alpha ($\alpha$) | Beta ($\beta$) | Gamma ($\gamma$) |
| ---------------- | ---------------- | -------------- | ---------------- |
| Particle         | $\prescript{4}{}{2}\mathrm{He}$ nucleus | Electron / Positron | Photon          |
| Charge           | $+2e$            | $\pm e$        | 0                |
| Ionising power   | High             | Moderate       | Low              |
| Penetrating power| Low              | Moderate       | High             |
| Stopped by       | Paper / few cm air | Aluminium    | Lead / concrete  |

### 2.3 Half-Life and Decay Constant

Radioactive decay is a **random** and **spontaneous** process. The probability that any given nucleus
will decay in a given time interval is constant, independent of:

- The number of nuclei present
- External conditions (temperature, pressure, chemical state)
- How long the nucleus has already existed

The **decay constant** $\lambda$ is the probability per unit time that a nucleus will decay. The number
of undecayed nuclei at time $t$ is:

$$N = N_0 e^{-\lambda t}$$

where $N_0$ is the initial number of nuclei.

The **half-life** $t_{1/2}$ is the time for half the nuclei in a sample to decay:

$$N = \frac{N_0}{2} = N_0 e^{-\lambda t_{1/2}}$$

$$\frac{1}{2} = e^{-\lambda t_{1/2}} \implies \ln 2 = \lambda t_{1/2}$$

$$t_{1/2} = \frac{\ln 2}{\lambda}$$

**Activity** $A$ is the rate of decay (number of decays per unit time):

$$A = -\frac{dN}{dt} = \lambda N = A_0 e^{-\lambda t}$$

The SI unit of activity is the **becquerel (Bq)**, where $1\,\mathrm{Bq} = 1\,\mathrm{decay/s}$.

<details>
<summary>Worked Example: Half-Life Calculations</summary>

A sample of iodine-131 has a half-life of 8.04 days and an initial activity of $640\,\mathrm{Bq}$.

(a) Find the decay constant.

$$\lambda = \frac{\ln 2}{t_{1/2}} = \frac{0.693}{8.04 \times 24 \times 3600} = \frac{0.693}{694656} = 9.98 \times 10^{-7}\,\mathrm{s}^{-1}$$

(b) Find the activity after 2 days.

$$A = A_0 e^{-\lambda t} = 640 \times e^{-(9.98 \times 10^{-7})(2 \times 24 \times 3600)}$$

$$A = 640 \times e^{-0.172} = 640 \times 0.842 = 539\,\mathrm{Bq}$$

(c) Find the time for the activity to fall to $40\,\mathrm{Bq}$.

$$40 = 640 e^{-\lambda t} \implies e^{-\lambda t} = \frac{40}{640} = 0.0625$$

$$-\lambda t = \ln 0.0625 = -2.773$$

$$t = \frac{2.773}{9.98 \times 10^{-7}} = 2.78 \times 10^6\,\mathrm{s} \approx 32.2\,\mathrm{days}$$

Check using half-lives: $\frac{640}{40} = 16 = 2^4$, so exactly 4 half-lives = $4 \times 8.04 = 32.2\,\mathrm{days}$.

**If you get this wrong, revise:** Section 2.3.

</details>

### 2.4 Nuclear Equations and Conservation Laws

All nuclear reactions must satisfy the following conservation laws:

1. **Conservation of nucleon number** (mass number $A$): the total number of nucleons is the same on
   both sides.
2. **Conservation of proton number** (atomic number $Z$): the total charge is the same on both sides.
3. **Conservation of energy:** total energy (including rest energy) is conserved.
4. **Conservation of momentum:** total momentum is conserved.

<details>
<summary>Worked Example: Nuclear Equations</summary>

Complete the following nuclear equations:

(a) $\prescript{238}{}{92}\mathrm{U} \to \prescript{234}{}{90}\mathrm{Th} + \prescript{4}{}{2}\mathrm{He}$

This is alpha decay. Check conservation: $A = 238 = 234 + 4$ and $Z = 92 = 90 + 2$.

(b) $\prescript{14}{}{6}\mathrm{C} \to \prescript{14}{}{7}\mathrm{N} + e^- + \bar{\nu}_e$

This is beta-minus decay. Check: $A = 14 = 14 + 0$ and $Z = 6 = 7 + (-1)$.

(c) $\prescript{11}{}{6}\mathrm{C} \to \prescript{11}{}{5}\mathrm{B} + e^+ + \nu_e$

This is beta-plus decay. Check: $A = 11 = 11 + 0$ and $Z = 6 = 5 + 1$.

(d) Identify the unknown particle X in:
$\prescript{14}{}{7}\mathrm{N} + \prescript{4}{}{2}\mathrm{He} \to \prescript{17}{}{8}\mathrm{O} + \mathrm{X}$

Conservation of $A$: $14 + 4 = 17 + A_X \implies A_X = 1$

Conservation of $Z$: $7 + 2 = 8 + Z_X \implies Z_X = 1$

Therefore $\mathrm{X} = \prescript{1}{}{1}\mathrm{H}$ (a proton).

**If you get this wrong, revise:** Section 2.4.

</details>

### 2.5 Binding Energy and Mass Defect

The **mass defect** $\Delta m$ is the difference between the mass of a nucleus and the total mass of
its individual nucleons:

$$\Delta m = Zm_p + Nm_n - m_{\mathrm{nucleus}}$$

This "missing" mass has been converted into the **binding energy** that holds the nucleus together,
given by Einstein's mass-energy equivalence:

$$E_b = \Delta m \, c^2$$

:::info[Data Booklet Reference] The unified atomic mass unit (u) is defined such that $1\,\mathrm{u} = 931.5\,\mathrm{MeV}/c^2$.
This conversion factor appears in the IB data booklet.

:::

**Binding energy per nucleon** is a measure of nuclear stability. Plotting binding energy per nucleon
against mass number gives the binding energy curve, which shows:

- Very light nuclei (e.g., $\prescript{2}{}{1}\mathrm{H}$) have low binding energy per nucleon.
- The curve peaks around $A \approx 56$ (iron-56 is the most stable nucleus).
- Heavy nuclei (e.g., uranium) have lower binding energy per nucleon.

The **most stable** nucleus is $\prescript{62}{}{28}\mathrm{Ni}$ or $\prescript{56}{}{26}\mathrm{Fe}$,
with the highest binding energy per nucleon of approximately $8.8\,\mathrm{MeV/nucleon}$.

<details>
<summary>Worked Example: Binding Energy of Helium-4</summary>

Calculate the binding energy per nucleon of $\prescript{4}{}{2}\mathrm{He}$ (alpha particle).

Given masses:
- $m_p = 1.00728\,\mathrm{u}$
- $m_n = 1.00867\,\mathrm{u}$
- $m(\prescript{4}{}{2}\mathrm{He}) = 4.00151\,\mathrm{u}$

Mass defect:

$$\Delta m = 2m_p + 2m_n - m_{\mathrm{He}} = 2(1.00728) + 2(1.00867) - 4.00151$$

$$\Delta m = 2.01456 + 2.01734 - 4.00151 = 0.03039\,\mathrm{u}$$

Binding energy:

$$E_b = 0.03039 \times 931.5 = 28.3\,\mathrm{MeV}$$

Binding energy per nucleon:

$$\frac{E_b}{A} = \frac{28.3}{4} = 7.08\,\mathrm{MeV/nucleon}$$

**If you get this wrong, revise:** Section 2.5.

</details>

### 2.6 Nuclear Fission and Fusion

**Nuclear fission** is the splitting of a heavy nucleus into two (or more) lighter nuclei, accompanied
by the release of energy. Fission occurs because the products have a higher binding energy per nucleon
than the parent nucleus.

A typical fission reaction:

$$\prescript{235}{}{92}\mathrm{U} + \prescript{1}{}{0}\mathrm{n} \to \prescript{236}{}{92}\mathrm{U}^* \to \prescript{141}{}{56}\mathrm{Ba} + \prescript{92}{}{36}\mathrm{Kr} + 3\prescript{1}{}{0}\mathrm{n}$$

Key features:

- A **chain reaction** is possible because each fission event releases neutrons that can trigger further
  fission events.
- A **critical mass** is the minimum mass of fissile material needed to sustain a chain reaction.
- **Controlled fission** occurs in nuclear reactors; **uncontrolled fission** occurs in nuclear
  weapons.
- The released energy comes from the mass difference between reactants and products.

**Nuclear fusion** is the joining of two light nuclei to form a heavier nucleus, releasing energy.
Fusion occurs because the product has a higher binding energy per nucleon than the reactants.

Example fusion reactions:

$$\prescript{2}{}{1}\mathrm{H} + \prescript{2}{}{1}\mathrm{H} \to \prescript{3}{}{2}\mathrm{He} + \prescript{1}{}{0}\mathrm{n} + 3.27\,\mathrm{MeV}$$

$$\prescript{2}{}{1}\mathrm{H} + \prescript{3}{}{1}\mathrm{H} \to \prescript{4}{}{2}\mathrm{He} + \prescript{1}{}{0}\mathrm{n} + 17.6\,\mathrm{MeV}$$

Fusion requires extremely high temperatures ($\sim 10^7\,\mathrm{K}$) to overcome the electrostatic
repulsion between the positively charged nuclei. At these temperatures, matter exists as a **plasma**.

**Conditions for fusion in a reactor:**

- **High temperature:** to give nuclei sufficient kinetic energy to overcome the Coulomb barrier.
- **High density:** to increase the collision rate between nuclei.
- **Confinement time:** to keep the plasma contained long enough for sufficient reactions to occur.
  The Lawson criterion ($n\tau \gt 10^{20}\,\mathrm{s\,m}^{-3}$) gives the minimum product of
  density and confinement time.

<details>
<summary>Worked Example: Energy from Fission</summary>

Calculate the energy released when $\prescript{235}{}{92}\mathrm{U}$ undergoes fission to produce
$\prescript{141}{}{56}\mathrm{Ba}$, $\prescript{92}{}{36}\mathrm{Kr}$, and 3 neutrons.

Given masses:
- $m(\prescript{235}{}{92}\mathrm{U}) = 235.044\,\mathrm{u}$
- $m(\prescript{141}{}{56}\mathrm{Ba}) = 140.914\,\mathrm{u}$
- $m(\prescript{92}{}{36}\mathrm{Kr}) = 91.926\,\mathrm{u}$
- $m_n = 1.009\,\mathrm{u}$

Mass of reactants: $235.044 + 1.009 = 236.053\,\mathrm{u}$

Mass of products: $140.914 + 91.926 + 3(1.009) = 235.867\,\mathrm{u}$

Mass defect:

$$\Delta m = 236.053 - 235.867 = 0.186\,\mathrm{u}$$

Energy released:

$$E = 0.186 \times 931.5 = 173\,\mathrm{MeV}$$

This energy appears as kinetic energy of the fission fragments, neutrons, and gamma radiation.

**If you get this wrong, revise:** Section 2.6.

</details>

### 2.7 Background Radiation and Detection

**Background radiation** is the ionising radiation that is always present in the environment. Sources
include:

- **Cosmic rays:** high-energy particles from space (primarily protons and alpha particles).
- **Terrestrial radiation:** radioactive isotopes in rocks and soil (e.g., uranium, thorium,
  radon-222 gas).
- **Medical sources:** X-rays, radioactive tracers used in diagnosis and treatment.
- **Nuclear power and weapons testing:** fallout and waste from nuclear facilities.

Typical background radiation dose is approximately $2.4\,\mathrm{mSv}$ per year, varying by location.

**Radiation detection methods:**

- **Geiger-Muller (GM) tube:** detects ionising radiation by the ionisation of gas inside the tube.
  Each particle produces a current pulse, counted electronically. It does not distinguish between
  types of radiation.
- **Photographic film:** darkens when exposed to radiation. Used in radiation badges worn by workers.
- **Scintillation detector:** a material (e.g., sodium iodide) that emits light when radiation passes
  through it. The light is converted to an electrical signal by a photomultiplier tube.
- **Semiconductor detector:** radiation creates electron-hole pairs in a semiconductor material,
  producing a current proportional to the energy deposited.

---

## 3. Worked Examples

<details>
<summary>Worked Example 1: Photoelectric Effect</summary>

Light of wavelength $400\,\mathrm{nm}$ is incident on a sodium surface with work function
$\phi = 2.28\,\mathrm{eV}$.

(a) Calculate the maximum kinetic energy of emitted photoelectrons.

Photon energy:

$$E = \frac{hc}{\lambda} = \frac{(6.63 \times 10^{-34})(3.00 \times 10^8)}{400 \times 10^{-9}} = 4.97 \times 10^{-19}\,\mathrm{J}$$

Convert to eV: $E = \frac{4.97 \times 10^{-19}}{1.60 \times 10^{-19}} = 3.11\,\mathrm{eV}$

Maximum kinetic energy:

$$E_{k,\mathrm{max}} = E - \phi = 3.11 - 2.28 = 0.83\,\mathrm{eV}$$

(b) Calculate the stopping potential.

$$V_s = \frac{E_{k,\mathrm{max}}}{e} = \frac{0.83\,\mathrm{eV}}{e} = 0.83\,\mathrm{V}$$

(c) Calculate the threshold frequency.

$$f_0 = \frac{\phi}{h} = \frac{2.28 \times 1.60 \times 10^{-19}}{6.63 \times 10^{-34}} = 5.50 \times 10^{14}\,\mathrm{Hz}$$

</details>

<details>
<summary>Worked Example 2: De Broglie Wavelength</summary>

An electron is accelerated through a potential difference of $200\,\mathrm{V}$. Calculate its de Broglie
wavelength.

The kinetic energy gained by the electron:

$$E_k = eV = (1.60 \times 10^{-19})(200) = 3.20 \times 10^{-17}\,\mathrm{J}$$

Since $E_k = \frac{p^2}{2m_e}$, the momentum is:

$$p = \sqrt{2m_e E_k} = \sqrt{2(9.11 \times 10^{-31})(3.20 \times 10^{-17})} = \sqrt{5.83 \times 10^{-47}} = 7.64 \times 10^{-24}\,\mathrm{kg\,m\,s}^{-1}$$

De Broglie wavelength:

$$\lambda = \frac{h}{p} = \frac{6.63 \times 10^{-34}}{7.64 \times 10^{-24}} = 8.68 \times 10^{-11}\,\mathrm{m}$$

This is comparable to atomic spacings, explaining why electron diffraction can probe crystal structures.

</details>

<details>
<summary>Worked Example 3: Pair Production</summary>

A photon with energy $3.00\,\mathrm{MeV}$ undergoes pair production, creating an electron-positron
pair. Calculate the total kinetic energy of the pair.

The rest energy of an electron (or positron) is:

$$m_e c^2 = 0.511\,\mathrm{MeV}$$

Total rest energy of the pair: $2 \times 0.511 = 1.022\,\mathrm{MeV}$

Total kinetic energy:

$$E_k = E_{\mathrm{photon}} - 2m_e c^2 = 3.00 - 1.022 = 1.978\,\mathrm{MeV}$$

This kinetic energy is shared between the electron and positron (not necessarily equally, depending on
how momentum is shared with any recoiling nucleus).

</details>

<details>
<summary>Worked Example 4: Nuclear Binding Energy</summary>

Calculate the binding energy per nucleon of $\prescript{56}{}{26}\mathrm{Fe}$.

Given masses:
- $m_p = 1.00728\,\mathrm{u}$
- $m_n = 1.00867\,\mathrm{u}$
- $m(\prescript{56}{}{26}\mathrm{Fe}) = 55.93493\,\mathrm{u}$

Number of protons: $Z = 26$, number of neutrons: $N = 56 - 26 = 30$.

Mass defect:

$$\Delta m = 26(1.00728) + 30(1.00867) - 55.93493$$

$$\Delta m = 26.18928 + 30.26010 - 55.93493 = 0.51445\,\mathrm{u}$$

Binding energy:

$$E_b = 0.51445 \times 931.5 = 479.2\,\mathrm{MeV}$$

Binding energy per nucleon:

$$\frac{E_b}{A} = \frac{479.2}{56} = 8.56\,\mathrm{MeV/nucleon}$$

This is close to the maximum on the binding energy curve, confirming that iron-56 is among the most
stable nuclei.

</details>

<details>
<summary>Worked Example 5: Radioactive Dating</summary>

A sample of ancient wood contains $25\%$ of the carbon-14 found in a living tree. The half-life of
carbon-14 is 5730 years. Estimate the age of the sample.

The fraction remaining is $\frac{N}{N_0} = 0.25 = \frac{1}{4} = 2^{-2}$.

Since the fraction is $\left(\frac{1}{2}\right)^n$ where $n$ is the number of half-lives, we have
$n = 2$ half-lives.

Age $= 2 \times 5730 = 11460\,\mathrm{years}$.

Using the exponential formula:

$$N = N_0 e^{-\lambda t} \implies 0.25 = e^{-\lambda t}$$

$$\lambda t = \ln 4 = 1.386$$

$$t = \frac{1.386}{\lambda} = \frac{1.386 \times 5730}{\ln 2} = \frac{1.386 \times 5730}{0.693} = 11460\,\mathrm{years}$$

</details>

<details>
<summary>Worked Example 6: Heisenberg Uncertainty Principle</summary>

An electron is confined to a region of width $\Delta x = 1.0 \times 10^{-10}\,\mathrm{m}$ (roughly the
size of an atom). Estimate the minimum uncertainty in its momentum.

Using the Heisenberg uncertainty principle:

$$\Delta x \, \Delta p \geq \frac{\hbar}{2} = \frac{h}{4\pi}$$

$$\Delta p \geq \frac{h}{4\pi \, \Delta x} = \frac{6.63 \times 10^{-34}}{4\pi(1.0 \times 10^{-10})} = 5.27 \times 10^{-25}\,\mathrm{kg\,m\,s}^{-1}$$

The corresponding minimum uncertainty in velocity:

$$\Delta v = \frac{\Delta p}{m_e} = \frac{5.27 \times 10^{-25}}{9.11 \times 10^{-31}} = 5.79 \times 10^5\,\mathrm{m/s}$$

This is a significant fraction of the speed of light, illustrating that confinement to atomic
dimensions leads to large momentum uncertainties, consistent with the quantum behaviour of electrons
in atoms.

</details>

---

## Summary of Key Results

| Concept                    | Key Formula                                                        |
| -------------------------- | ------------------------------------------------------------------ |
| Photon energy              | $E = hf$                                                           |
| Photoelectric equation     | $E_{k,\mathrm{max}} = hf - \phi$                                   |
| Work function              | $\phi = hf_0$                                                      |
| De Broglie wavelength      | $\lambda = \frac{h}{p}$                                            |
| Heisenberg uncertainty     | $\Delta x \, \Delta p \geq \frac{\hbar}{2}$                        |
| Compton scattering         | $\Delta\lambda = \frac{h}{m_e c}(1 - \cos\theta)$                 |
| Energy levels (hydrogen)   | $E_n = \frac{-13.6}{n^2}\,\mathrm{eV}$                             |
| Pair production minimum    | $E_{\mathrm{min}} = 2m_e c^2$                                      |
| Radioactive decay          | $N = N_0 e^{-\lambda t}$                                           |
| Half-life                  | $t_{1/2} = \frac{\ln 2}{\lambda}$                                  |
| Activity                   | $A = \lambda N$                                                     |
| Binding energy             | $E_b = \Delta m \, c^2$                                            |
| Nuclear radius             | $r = r_0 A^{1/3}$                                                  |
| Mass-energy conversion     | $1\,\mathrm{u} = 931.5\,\mathrm{MeV}/c^2$                          |

---

## Problem Set

### Problem 1

Light of wavelength $550\,\mathrm{nm}$ is incident on a metal surface. The stopping potential is found
to be $0.45\,\mathrm{V}$. Calculate the work function of the metal in eV.

<details>
<summary>Solution</summary>

Photon energy:

$$E = \frac{hc}{\lambda} = \frac{(6.63 \times 10^{-34})(3.00 \times 10^8)}{550 \times 10^{-9}} = 3.62 \times 10^{-19}\,\mathrm{J} = 2.26\,\mathrm{eV}$$

Using $E_{k,\mathrm{max}} = eV_s = 0.45\,\mathrm{eV}$:

$$\phi = E - E_{k,\mathrm{max}} = 2.26 - 0.45 = 1.81\,\mathrm{eV}$$

**If you get this wrong, revise:** Section 1.1.

</details>

### Problem 2

The threshold wavelength for a certain metal is $300\,\mathrm{nm}$. Calculate the maximum kinetic
energy of photoelectrons when light of wavelength $200\,\mathrm{nm}$ is incident on the surface.

<details>
<summary>Solution</summary>

Work function:

$$\phi = \frac{hc}{\lambda_0} = \frac{(6.63 \times 10^{-34})(3.00 \times 10^8)}{300 \times 10^{-9}} = 6.63 \times 10^{-19}\,\mathrm{J} = 4.14\,\mathrm{eV}$$

Photon energy at $200\,\mathrm{nm}$:

$$E = \frac{hc}{\lambda} = \frac{(6.63 \times 10^{-34})(3.00 \times 10^8)}{200 \times 10^{-9}} = 9.945 \times 10^{-19}\,\mathrm{J} = 6.22\,\mathrm{eV}$$

Maximum kinetic energy:

$$E_{k,\mathrm{max}} = 6.22 - 4.14 = 2.08\,\mathrm{eV}$$

**If you get this wrong, revise:** Section 1.1.

</details>

### Problem 3

A neutron moving with velocity $2.0 \times 10^4\,\mathrm{m/s}$ has a de Broglie wavelength of
$1.98 \times 10^{-11}\,\mathrm{m}$. Calculate the mass of the neutron from this data and verify it
agrees with the accepted value of $1.675 \times 10^{-27}\,\mathrm{kg}$.

<details>
<summary>Solution</summary>

Using $\lambda = \frac{h}{mv}$:

$$m = \frac{h}{\lambda v} = \frac{6.63 \times 10^{-34}}{(1.98 \times 10^{-11})(2.0 \times 10^4)} = \frac{6.63 \times 10^{-34}}{3.96 \times 10^{-7}} = 1.67 \times 10^{-27}\,\mathrm{kg}$$

This agrees with the accepted value of $1.675 \times 10^{-27}\,\mathrm{kg}$ to three significant
figures.

**If you get this wrong, revise:** Section 1.2.

</details>

### Problem 4

An electron in a hydrogen atom is in the $n = 3$ energy level. Calculate the wavelengths of all
possible photons that could be emitted as the electron returns to the ground state.

<details>
<summary>Solution</summary>

Possible transitions: $3 \to 2$, $3 \to 1$, and $2 \to 1$ (after first transitioning to $n = 2$).

For $3 \to 2$ (Balmer series):

$$\Delta E = \frac{-13.6}{9} - \frac{-13.6}{4} = -1.51 - (-3.40) = 1.89\,\mathrm{eV}$$

$$\lambda = \frac{hc}{\Delta E} = \frac{1240\,\mathrm{eV\,nm}}{1.89\,\mathrm{eV}} = 656\,\mathrm{nm}$$

For $3 \to 1$ (Lyman series):

$$\Delta E = \frac{-13.6}{9} - \frac{-13.6}{1} = -1.51 - (-13.6) = 12.09\,\mathrm{eV}$$

$$\lambda = \frac{1240}{12.09} = 102.6\,\mathrm{nm}$$

For $2 \to 1$ (Lyman series):

$$\Delta E = \frac{-13.6}{4} - \frac{-13.6}{1} = -3.40 - (-13.6) = 10.2\,\mathrm{eV}$$

$$\lambda = \frac{1240}{10.2} = 121.6\,\mathrm{nm}$$

The three possible wavelengths are $656\,\mathrm{nm}$, $121.6\,\mathrm{nm}$, and $102.6\,\mathrm{nm}$.

**If you get this wrong, revise:** Section 1.3.

</details>

### Problem 5

A proton is confined within a nucleus of radius $5.0 \times 10^{-15}\,\mathrm{m}$. Estimate the minimum
uncertainty in its kinetic energy.

<details>
<summary>Solution</summary>

Using the uncertainty principle with $\Delta x \approx 2r = 1.0 \times 10^{-14}\,\mathrm{m}$:

$$\Delta p \geq \frac{\hbar}{2\Delta x} = \frac{1.055 \times 10^{-34}}{2(1.0 \times 10^{-14})} = 5.28 \times 10^{-21}\,\mathrm{kg\,m\,s}^{-1}$$

For a non-relativistic proton ($m_p = 1.67 \times 10^{-27}\,\mathrm{kg}$):

$$E_k \geq \frac{(\Delta p)^2}{2m_p} = \frac{(5.28 \times 10^{-21})^2}{2(1.67 \times 10^{-27})} = \frac{2.79 \times 10^{-41}}{3.34 \times 10^{-27}} = 8.35 \times 10^{-15}\,\mathrm{J}$$

$$E_k \geq \frac{8.35 \times 10^{-15}}{1.60 \times 10^{-19}} = 5.22 \times 10^4\,\mathrm{eV} = 52.2\,\mathrm{keV}$$

**If you get this wrong, revise:** Section 1.4.

</details>

### Problem 6

X-rays of wavelength $1.00 \times 10^{-11}\,\mathrm{m}$ are scattered at an angle of $60^\circ$ by free
electrons. Calculate the wavelength of the scattered X-rays and the kinetic energy of the recoil
electrons.

<details>
<summary>Solution</summary>

Wavelength shift:

$$\Delta\lambda = \frac{h}{m_e c}(1 - \cos 60^\circ) = 2.43 \times 10^{-12}(1 - 0.5) = 1.215 \times 10^{-12}\,\mathrm{m}$$

Scattered wavelength:

$$\lambda' = 1.00 \times 10^{-11} + 1.215 \times 10^{-12} = 1.12 \times 10^{-11}\,\mathrm{m}$$

Energy of incident photon:

$$E_i = \frac{hc}{\lambda} = \frac{1240\,\mathrm{eV\,nm}}{0.0100\,\mathrm{nm}} = 1.24 \times 10^5\,\mathrm{eV} = 124\,\mathrm{keV}$$

Energy of scattered photon:

$$E_s = \frac{hc}{\lambda'} = \frac{1240}{0.0112} = 1.107 \times 10^5\,\mathrm{eV} = 110.7\,\mathrm{keV}$$

Kinetic energy of recoil electron:

$$E_k = E_i - E_s = 124 - 110.7 = 13.3\,\mathrm{keV}$$

**If you get this wrong, revise:** Section 1.5.

</details>

### Problem 7

A radioactive isotope has a half-life of 5.27 years and an initial activity of $800\,\mathrm{Bq}$.
Calculate the time taken for the activity to decrease to $50\,\mathrm{Bq}$.

<details>
<summary>Solution</summary>

Number of half-lives: $\frac{800}{50} = 16 = 2^4$, so $n = 4$ half-lives.

Time $= 4 \times 5.27 = 21.1\,\mathrm{years}$.

Using the exponential formula:

$$\lambda = \frac{\ln 2}{5.27 \times 365.25 \times 24 \times 3600} = 4.17 \times 10^{-9}\,\mathrm{s}^{-1}$$

$$50 = 800 e^{-\lambda t} \implies t = \frac{\ln 16}{\lambda} = \frac{2.773}{4.17 \times 10^{-9}} = 6.65 \times 10^8\,\mathrm{s} \approx 21.1\,\mathrm{years}$$

**If you get this wrong, revise:** Section 2.3.

</details>

### Problem 8

Complete the following nuclear equation and state the type of decay:

$$\prescript{226}{}{88}\mathrm{Ra} \to \prescript{222}{}{86}\mathrm{Rn} + \prescript{A}{}{Z}\mathrm{X}$$

Also calculate the energy released given the following masses:
$m(\prescript{226}{}{88}\mathrm{Ra}) = 226.02540\,\mathrm{u}$,
$m(\prescript{222}{}{86}\mathrm{Rn}) = 222.01757\,\mathrm{u}$,
$m(\prescript{4}{}{2}\mathrm{He}) = 4.00260\,\mathrm{u}$.

<details>
<summary>Solution</summary>

Conservation of $A$: $226 = 222 + A \implies A = 4$

Conservation of $Z$: $88 = 86 + Z \implies Z = 2$

So $\mathrm{X} = \prescript{4}{}{2}\mathrm{He}$ (alpha particle). This is **alpha decay**.

Mass defect:

$$\Delta m = 226.02540 - (222.01757 + 4.00260) = 226.02540 - 226.02017 = 0.00523\,\mathrm{u}$$

Energy released:

$$E = 0.00523 \times 931.5 = 4.87\,\mathrm{MeV}$$

**If you get this wrong, revise:** Sections 2.2 and 2.4.

</details>

### Problem 9

Calculate the binding energy per nucleon of lithium-7 ($\prescript{7}{}{3}\mathrm{Li}$).

Given: $m(\prescript{7}{}{3}\mathrm{Li}) = 7.01600\,\mathrm{u}$, $m_p = 1.00728\,\mathrm{u}$,
$m_n = 1.00867\,\mathrm{u}$.

<details>
<summary>Solution</summary>

$Z = 3$ protons, $N = 7 - 3 = 4$ neutrons.

Mass defect:

$$\Delta m = 3(1.00728) + 4(1.00867) - 7.01600$$

$$\Delta m = 3.02184 + 4.03468 - 7.01600 = 0.04052\,\mathrm{u}$$

Binding energy:

$$E_b = 0.04052 \times 931.5 = 37.7\,\mathrm{MeV}$$

Binding energy per nucleon:

$$\frac{E_b}{A} = \frac{37.7}{7} = 5.39\,\mathrm{MeV/nucleon}$$

**If you get this wrong, revise:** Section 2.5.

</details>

### Problem 10

In a nuclear fusion reaction, two deuterium nuclei ($\prescript{2}{}{1}\mathrm{H}$) fuse to form
helium-3 ($\prescript{3}{}{2}\mathrm{He}$) and a neutron. Calculate the energy released.

Given: $m(\prescript{2}{}{1}\mathrm{H}) = 2.01410\,\mathrm{u}$,
$m(\prescript{3}{}{2}\mathrm{He}) = 3.01603\,\mathrm{u}$,
$m_n = 1.00867\,\mathrm{u}$.

<details>
<summary>Solution</summary>

Reaction: $\prescript{2}{}{1}\mathrm{H} + \prescript{2}{}{1}\mathrm{H} \to \prescript{3}{}{2}\mathrm{He} + \prescript{1}{}{0}\mathrm{n}$

Mass of reactants: $2(2.01410) = 4.02820\,\mathrm{u}$

Mass of products: $3.01603 + 1.00867 = 4.02470\,\mathrm{u}$

Mass defect:

$$\Delta m = 4.02820 - 4.02470 = 0.00350\,\mathrm{u}$$

Energy released:

$$E = 0.00350 \times 931.5 = 3.26\,\mathrm{MeV}$$

**If you get this wrong, revise:** Section 2.6.

</details>

### Problem 11

A GM tube records a count rate of $120\,\mathrm{counts/min}$ from a radioactive source. When a $2.0\,\mathrm{mm}$
thick aluminium sheet is placed in front of the source, the count rate drops to $15\,\mathrm{counts/min}$.
When the sheet is replaced by a $5.0\,\mathrm{mm}$ thick lead sheet, the count rate drops to
$10\,\mathrm{counts/min}$. The background count rate is $10\,\mathrm{counts/min}$. Identify the types of
radiation emitted by the source.

<details>
<summary>Solution</summary>

Corrected count rate without absorber: $120 - 10 = 110\,\mathrm{counts/min}$

With aluminium: $15 - 10 = 5\,\mathrm{counts/min}$ (almost all radiation stopped)

With lead: $10 - 10 = 0\,\mathrm{counts/min}$ (all radiation stopped)

The aluminium stops most of the radiation, indicating the presence of **alpha radiation** (which is
stopped by thin aluminium or even paper). The small residual count rate with aluminium that is fully
eliminated by lead indicates a small component of **beta radiation**.

No significant gamma component is detected since the lead stops everything.

The source emits **alpha and beta radiation**.

**If you get this wrong, revise:** Sections 2.2 and 2.7.

</details>

### Problem 12

A positron and an electron, each with negligible kinetic energy, annihilate to produce two gamma-ray
photons. Calculate the wavelength of each photon.

<details>
<summary>Solution</summary>

The total energy of the electron-positron pair is their combined rest energy:

$$E_{\mathrm{total}} = 2m_e c^2 = 2(0.511\,\mathrm{MeV}) = 1.022\,\mathrm{MeV}$$

This energy is shared equally between the two photons (for zero initial kinetic energy):

$$E_\gamma = 0.511\,\mathrm{MeV} = 8.18 \times 10^{-14}\,\mathrm{J}$$

Wavelength of each photon:

$$\lambda = \frac{hc}{E} = \frac{(6.63 \times 10^{-34})(3.00 \times 10^8)}{8.18 \times 10^{-14}} = 2.43 \times 10^{-12}\,\mathrm{m}$$

Note that this equals the Compton wavelength of the electron, $\frac{h}{m_e c}$.

**If you get this wrong, revise:** Section 1.6.

</details>
