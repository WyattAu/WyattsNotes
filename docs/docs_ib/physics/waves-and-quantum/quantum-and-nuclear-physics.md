---
title: "Quantum and Nuclear Physics"
description: "IB Physics — photoelectric effect, photon model, de Broglie wavelength, energy levels, spectra, radioactive decay, nuclear reactions, and binding energy."
slug: quantum-and-nuclear-physics-advanced
---

## The Photoelectric Effect

### Observations

When light of sufficiently high frequency is incident on a metal surface, electrons are ejected. Key
experimental observations:

1. **Threshold frequency:** Electrons are emitted only if $f \ge f_0$, regardless of intensity.
2. **Instantaneous emission:** No detectable time delay between illumination and emission.
3. **Maximum kinetic energy** of photoelectrons depends on frequency, not intensity.
4. **More intensity** (at $f \ge f_0$) produces more photoelectrons, not faster ones.

These observations cannot be explained by the classical wave model of light.

### Einstein's Explanation (1905)

Light consists of discrete packets of energy called **photons**. Each photon has energy:

$$E = hf$$

where $h = 6.626 \times 10^{-34}\,\mathrm{J\,s}$ is Planck's constant and $f$ is the frequency.

A single photon can eject at most one electron. The photon gives its entire energy to the electron.
Some energy overcomes the **work function** $\Phi$ (minimum energy to escape the metal); the remainder
becomes kinetic energy:

$$E_k = hf - \Phi$$

This is **Einstein's photoelectric equation**.

### Threshold Frequency

At the threshold, $E_k = 0$:

$$hf_0 = \Phi \implies f_0 = \frac{\Phi}{h}$$

### Stopping Potential

The stopping potential $V_s$ is the minimum voltage needed to prevent the most energetic
photoelectrons from reaching the collector:

$$eV_s = E_{k,\max} = hf - \Phi$$

### Experimental Graphs

| Graph | Gradient | $y$-intercept | $x$-intercept |
| :--- | :--- | :--- | :--- |
| $E_{k,\max}$ vs $f$ | $h$ | $-\Phi$ | $f_0$ |
| $V_s$ vs $f$ | $h/e$ | $-\Phi/e$ | $f_0$ |

**Example.** Light of wavelength $400\,\mathrm{nm}$ is incident on a zinc surface with work function
$\Phi = 4.3\,\mathrm{eV}$. Find the maximum kinetic energy of the emitted electrons.

$$E_{\mathrm{photon}} = \frac{hc}{\lambda} = \frac{(6.626 \times 10^{-34})(3.0 \times 10^8)}{400 \times 10^{-9}} = 4.97 \times 10^{-19}\,\mathrm{J} = 3.11\,\mathrm{eV}$$

$$E_k = 3.11 - 4.3 = -1.19\,\mathrm{eV}$$

Since $E_k \lt 0$, no photoelectrons are emitted. The photon energy is below the work function.

---

## The Photon Model

### Photon Energy and Momentum

A photon has energy $E = hf = \dfrac{hc}{\lambda}$ and momentum:

$$p = \frac{E}{c} = \frac{h}{\lambda}$$

### Electron Volt

The electron volt is a unit of energy convenient for atomic-scale physics:

$$1\,\mathrm{eV} = 1.602 \times 10^{-19}\,\mathrm{J}$$

**Useful constant:**

$$hc = 1240\,\mathrm{eV\,nm}$$

This allows quick conversion: for a photon of wavelength $500\,\mathrm{nm}$:

$$E = \frac{1240}{500} = 2.48\,\mathrm{eV}$$

### Compton Scattering

When an X-ray photon collides with a free electron, it transfers some energy and the photon's
wavelength increases. The **Compton shift** is:

$$\Delta\lambda = \lambda' - \lambda = \frac{h}{m_e c}(1 - \cos\theta)$$

where $\theta$ is the scattering angle and $\dfrac{h}{m_e c} = 2.43 \times 10^{-12}\,\mathrm{m}$ is the
**Compton wavelength** of the electron. This demonstrates the particle nature of electromagnetic
radiation.

<details>
<summary>Worked Example: Compton Scattering</summary>

An X-ray photon of wavelength $0.0500\,\mathrm{nm}$ is scattered at $90^\circ$ by a free electron.
Find the wavelength of the scattered photon.

$$\Delta\lambda = \frac{h}{m_e c}(1 - \cos\theta) = (2.43 \times 10^{-12})(1 - \cos 90^\circ)$$

$$\Delta\lambda = (2.43 \times 10^{-12})(1 - 0) = 2.43 \times 10^{-12}\,\mathrm{m} = 0.00243\,\mathrm{nm}$$

$$\lambda' = 0.0500 + 0.00243 = 0.05243\,\mathrm{nm}$$

</details>

---

## Wave-Particle Duality

### De Broglie Hypothesis (1924)

Every particle has an associated wavelength:

$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

where $p = mv$ is the momentum of the particle.

**Example.** Find the de Broglie wavelength of an electron accelerated through $100\,\mathrm{V}$.

$$E_k = eV = 100\,\mathrm{eV} = 1.6 \times 10^{-17}\,\mathrm{J}$$

$$p = \sqrt{2m_e E_k} = \sqrt{2(9.109 \times 10^{-31})(1.6 \times 10^{-17})} = 5.40 \times 10^{-24}\,\mathrm{kg\,m/s}$$

$$\lambda = \frac{6.626 \times 10^{-34}}{5.40 \times 10^{-24}} = 1.23 \times 10^{-10}\,\mathrm{m} = 0.123\,\mathrm{nm}$$

This is comparable to atomic spacing, explaining why electron diffraction is observable.

### Electron Diffraction

The Davisson-Germer experiment (1927) confirmed the wave nature of electrons. An electron beam
directed at a nickel crystal produced a diffraction pattern consistent with the de Broglie
wavelength. The constructive interference condition is:

$$d\sin\theta = n\lambda$$

This is the same equation as for X-ray diffraction (Bragg's law), but with $\lambda = h/(mv)$.

### Significance

Wave-particle duality is a fundamental property of nature. All matter exhibits wave-like properties,
but the effect is only significant at atomic and subatomic scales. For macroscopic objects, the de
Broglie wavelength is far too small to detect.

---

## Atomic Energy Levels

### Bohr Model

Niels Bohr proposed that electrons in atoms occupy discrete **energy levels** (orbitals). An
electron can transition between levels by absorbing or emitting a photon of energy exactly equal to
the energy difference:

$$hf = \Delta E = E_{\mathrm{upper}} - E_{\mathrm{lower}}$$

### Hydrogen Energy Levels

$$E_n = -\frac{13.6\,\mathrm{eV}}{n^2}, \qquad n = 1, 2, 3, \ldots$$

- $n = 1$: ground state ($-13.6\,\mathrm{eV}$)
- $n = 2$: first excited state ($-3.4\,\mathrm{eV}$)
- $n = \infty$: ionisation ($0\,\mathrm{eV}$)

The **ionisation energy** of hydrogen is $13.6\,\mathrm{eV}$.

### Emission and Absorption Spectra

**Emission spectrum:** When excited atoms de-excite, they emit photons at discrete frequencies,
producing bright lines on a dark background.

**Absorption spectrum:** When white light passes through cool gas, atoms absorb photons at specific
frequencies, producing dark lines on a continuous spectrum.

For hydrogen, the wavelengths of the spectral lines are given by the **Rydberg formula**:

$$\frac{1}{\lambda} = R_H\!\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

where $R_H = 1.097 \times 10^7\,\mathrm{m^{-1}}$ is the Rydberg constant, $n_i \gt n_f$.

| Series | $n_f$ | Region |
| :--- | :--- | :--- |
| Lyman | 1 | Ultraviolet |
| Balmer | 2 | Visible |
| Paschen | 3 | Infrared |

**Example.** Find the wavelength of the first Balmer line ($n_i = 3 \to n_f = 2$).

$$\frac{1}{\lambda} = 1.097 \times 10^7\!\left(\frac{1}{4} - \frac{1}{9}\right) = 1.097 \times 10^7 \times \frac{5}{36} = 1.524 \times 10^6\,\mathrm{m^{-1}}$$

$$\lambda = 656\,\mathrm{nm}$$

This is the characteristic red line of the hydrogen spectrum ($\mathrm{H}\alpha$).

<details>
<summary>Worked Example: Hydrogen Spectral Lines</summary>

An electron in a hydrogen atom transitions from $n = 4$ to $n = 2$.

**Find the energy, wavelength, and frequency of the emitted photon.**

Energy of levels:

$$E_4 = \frac{-13.6}{16} = -0.85\,\mathrm{eV}, \quad E_2 = \frac{-13.6}{4} = -3.40\,\mathrm{eV}$$

Photon energy:

$$\Delta E = E_4 - E_2 = -0.85 - (-3.40) = 2.55\,\mathrm{eV}$$

Wavelength:

$$\lambda = \frac{hc}{\Delta E} = \frac{1240}{2.55} = 486\,\mathrm{nm}$$

Frequency:

$$f = \frac{c}{\lambda} = \frac{3.0 \times 10^8}{486 \times 10^{-9}} = 6.17 \times 10^{14}\,\mathrm{Hz}$$

This is the blue-green $\mathrm{H}\beta$ line in the Balmer series.

**Is the electron excited or de-excited?** The electron moves from a higher energy level ($n = 4$)
to a lower one ($n = 2$), so this is de-excitation and a photon is emitted.

</details>

---

## Radioactive Decay

### Nuclear Stability

Nuclei are stable only for certain combinations of protons ($Z$) and neutrons ($N$). For light
nuclei, stability requires $N \approx Z$. For heavier nuclei, more neutrons are needed ($N \gt Z$)
to counteract the increasing Coulomb repulsion between protons.

### Types of Radioactive Decay

| Decay | Emission | Change | Example |
| :--- | :--- | :--- | :--- |
| Alpha ($\alpha$) | $^4_2\mathrm{He}$ (helium nucleus) | $Z \to Z - 2$, $A \to A - 4$ | $^{238}_{92}\mathrm{U} \to ^{234}_{90}\mathrm{Th} + \alpha$ |
| Beta-minus ($\beta^-$) | $e^-$ (electron) + $\bar{\nu}_e$ | $n \to p$: $Z \to Z + 1$, $A$ unchanged | $^{14}_6\mathrm{C} \to ^{14}_7\mathrm{N} + e^- + \bar{\nu}_e$ |
| Beta-plus ($\beta^+$) | $e^+$ (positron) + $\nu_e$ | $p \to n$: $Z \to Z - 1$, $A$ unchanged | $^{11}_6\mathrm{C} \to ^{11}_5\mathrm{B} + e^+ + \nu_e$ |
| Gamma ($\gamma$) | High-energy photon | No change in $Z$ or $A$ | Excited nucleus de-excites |

### The Decay Law

Radioactive decay is a random process governed by:

$$N = N_0 e^{-\lambda t}$$

where $N$ is the number of undecayed nuclei at time $t$, $N_0$ is the initial number, and $\lambda$
is the **decay constant**.

**Activity** (rate of decay): $A = -\dfrac{dN}{dt} = \lambda N = A_0 e^{-\lambda t}$, measured in
**becquerels** ($\mathrm{Bq}$), where $1\,\mathrm{Bq} = 1$ decay per second.

### Half-Life

The **half-life** $t_{1/2}$ is the time for half the nuclei to decay:

$$N_0 e^{-\lambda t_{1/2}} = \frac{N_0}{2} \implies t_{1/2} = \frac{\ln 2}{\lambda}$$

After $n$ half-lives: $N = N_0 \left(\dfrac{1}{2}\right)^n$.

**Example.** Cobalt-60 has a half-life of $5.27\,\mathrm{years}$. A sample initially has activity
$800\,\mathrm{Bq}$. Find the activity after $15.81\,\mathrm{years}$.

Number of half-lives: $n = 15.81 / 5.27 = 3$.

$$A = 800 \times \left(\frac{1}{2}\right)^3 = 100\,\mathrm{Bq}$$

<details>
<summary>Worked Example: Decay Constant and Half-Life</summary>

A radioactive isotope has a half-life of $8.0\,\mathrm{days}$. A sample contains $4.0 \times 10^{15}$
undecayed nuclei at $t = 0$.

**(a) Find the decay constant.**

$$\lambda = \frac{\ln 2}{t_{1/2}} = \frac{0.693}{8.0 \times 24 \times 3600} = 1.00 \times 10^{-6}\,\mathrm{s}^{-1}$$

**(b) Find the initial activity.**

$$A_0 = \lambda N_0 = (1.00 \times 10^{-6})(4.0 \times 10^{15}) = 4.0 \times 10^9\,\mathrm{Bq}$$

**(c) How long until the activity falls to $1.0 \times 10^8\,\mathrm{Bq}$?**

$$A = A_0 e^{-\lambda t} \implies 1.0 \times 10^8 = 4.0 \times 10^9 \times e^{-(1.00 \times 10^{-6})t}$$

$$e^{-(1.00 \times 10^{-6})t} = 0.025 \implies -(1.00 \times 10^{-6})t = \ln(0.025)$$

$$t = \frac{-3.689}{1.00 \times 10^{-6}} = 3.69 \times 10^6\,\mathrm{s} \approx 42.7\,\mathrm{days}$$

</details>

---

## Nuclear Reactions

### Nuclear Fission

A heavy nucleus splits into two (or more) lighter nuclei, releasing energy and neutrons. A **chain
reaction** occurs when released neutrons induce further fission events.

$$^{235}_{92}\mathrm{U} + ^1_0\mathrm{n} \to ^{141}_{56}\mathrm{Ba} + ^{92}_{36}\mathrm{Kr} + 3\,^1_0\mathrm{n} + \mathrm{energy}$$

**Critical mass:** the minimum mass of fissile material needed to sustain a chain reaction.

**Conditions for a controlled chain reaction:**

- Fuel exceeds the critical mass.
- Neutrons are moderated (slowed) to increase the fission cross-section.
- Control rods absorb excess neutrons to regulate the reaction rate.

### Nuclear Fusion

Light nuclei combine to form a heavier nucleus, releasing energy. Fusion powers stars and is the
basis of the proton-proton chain:

$$^1_1\mathrm{H} + ^1_1\mathrm{H} \to ^2_1\mathrm{H} + e^+ + \nu_e$$

$$^2_1\mathrm{H} + ^1_1\mathrm{H} \to ^3_2\mathrm{He} + \gamma$$

$$^3_2\mathrm{He} + ^3_2\mathrm{He} \to ^4_2\mathrm{He} + 2\,^1_1\mathrm{H}$$

Net: $4\,^1_1\mathrm{H} \to ^4_2\mathrm{He} + 2e^+ + 2\nu_e + 2\gamma + 26.7\,\mathrm{MeV}$

Fusion requires extremely high temperatures ($\sim 10^7\,\mathrm{K}$) to overcome Coulomb repulsion.

---

## Mass-Energy Equivalence

### Einstein's Equation

$$E = mc^2$$

The **mass defect** $\Delta m$ of a nucleus is the difference between the mass of the separated
nucleons and the mass of the bound nucleus:

$$\Delta m = Zm_p + Nm_n - m_{\mathrm{nucleus}}$$

This mass defect represents the energy released when the nucleus was formed.

### Binding Energy

The **binding energy** of a nucleus is the energy required to completely separate it into its
constituent nucleons:

$$E_b = \Delta m \cdot c^2$$

The **binding energy per nucleon** $E_b/A$ is a measure of nuclear stability. It peaks around
iron-56 ($\sim 8.8\,\mathrm{MeV/nucleon}$), which is the most stable nucleus.

| Nucleus | Binding Energy per Nucleon (MeV) |
| :--- | :--- |
| $^2_1\mathrm{H}$ (deuterium) | 1.11 |
| $^4_2\mathrm{He}$ | 7.07 |
| $^{56}_{26}\mathrm{Fe}$ | 8.79 |
| $^{235}_{92}\mathrm{U}$ | 7.59 |

**Implications:**

- **Fission** of heavy nuclei ($A \gt 56$) releases energy because the products have higher binding
  energy per nucleon.
- **Fusion** of light nuclei ($A \lt 56$) releases energy for the same reason.
- Iron-56 is the most stable nucleus; neither fission nor fusion of iron releases energy.

### Calculating Binding Energy

**Example.** Calculate the binding energy of the helium-4 nucleus.

Given: $m_p = 1.00728\,\mathrm{u}$, $m_n = 1.00867\,\mathrm{u}$, $m_{\mathrm{He}} = 4.00260\,\mathrm{u}$,
$1\,\mathrm{u} = 931.5\,\mathrm{MeV}/c^2$.

$$\Delta m = 2(1.00728) + 2(1.00867) - 4.00260 = 0.03030\,\mathrm{u}$$

$$E_b = 0.03030 \times 931.5 = 28.2\,\mathrm{MeV}$$

$$\frac{E_b}{A} = \frac{28.2}{4} = 7.07\,\mathrm{MeV/nucleon}$$

### Energy Released in Reactions

**Example.** Find the energy released in the fission reaction:

$$^{235}_{92}\mathrm{U} + ^1_0\mathrm{n} \to ^{141}_{56}\mathrm{Ba} + ^{92}_{36}\mathrm{Kr} + 3\,^1_0\mathrm{n}$$

Masses: $m_{\mathrm{U-235}} = 235.0439\,\mathrm{u}$, $m_{\mathrm{Ba-141}} = 140.9139\,\mathrm{u}$,
$m_{\mathrm{Kr-92}} = 91.8973\,\mathrm{u}$, $m_n = 1.0087\,\mathrm{u}$.

Reactants: $235.0439 + 1.0087 = 236.0526\,\mathrm{u}$.
Products: $140.9139 + 91.8973 + 3(1.0087) = 235.8373\,\mathrm{u}$.

$$\Delta m = 236.0526 - 235.8373 = 0.2153\,\mathrm{u}$$

$$E = 0.2153 \times 931.5 \approx 200.6\,\mathrm{MeV}$$

<details>
<summary>Worked Example: Binding Energy per Nucleon</summary>

Calculate the binding energy per nucleon of lithium-7
($^7_3\mathrm{Li}$).

Given: $m_p = 1.00728\,\mathrm{u}$, $m_n = 1.00867\,\mathrm{u}$,
$m_{\mathrm{Li-7}} = 7.01600\,\mathrm{u}$, $1\,\mathrm{u} = 931.5\,\mathrm{MeV}/c^2$.

Lithium-7 has $Z = 3$ protons and $N = 4$ neutrons.

$$\Delta m = 3(1.00728) + 4(1.00867) - 7.01600 = 3.02184 + 4.03468 - 7.01600 = 0.04052\,\mathrm{u}$$

$$E_b = 0.04052 \times 931.5 = 37.74\,\mathrm{MeV}$$

$$\frac{E_b}{A} = \frac{37.74}{7} = 5.39\,\mathrm{MeV/nucleon}$$

This is lower than the binding energy per nucleon of helium-4 ($7.07\,\mathrm{MeV/nucleon}$), which
reflects the exceptional stability of the helium nucleus (an "alpha particle" with a filled shell
structure).

</details>

---

## Heisenberg Uncertainty Principle

### Statement

It is fundamentally impossible to simultaneously know both the position and momentum of a particle
with arbitrary precision:

$$\Delta x \cdot \Delta p \ge \frac{\hbar}{2}$$

where $\hbar = \dfrac{h}{2\pi} = 1.055 \times 10^{-34}\,\mathrm{J\,s}$.

This is not a limitation of measurement technology but a fundamental property of nature. It arises
directly from the wave nature of matter: a well-defined wavelength (precise momentum) requires an
extended wave (uncertain position).

### Energy-Time Uncertainty

$$\Delta E \cdot \Delta t \ge \frac{\hbar}{2}$$

This allows virtual particle-antiparticle pairs to briefly exist, provided $\Delta E \cdot \Delta t$
is sufficiently small.

<details>
<summary>Worked Example: Heisenberg Uncertainty Principle</summary>

An electron is confined within a region of width $\Delta x = 1.0 \times 10^{-10}\,\mathrm{m}$ (roughly
the diameter of a hydrogen atom).

**Find the minimum uncertainty in its momentum.**

$$\Delta p \ge \frac{\hbar}{2\Delta x} = \frac{1.055 \times 10^{-34}}{2(1.0 \times 10^{-10})} = 5.28 \times 10^{-25}\,\mathrm{kg\,m/s}$$

**Find the corresponding minimum uncertainty in velocity.**

$$\Delta v = \frac{\Delta p}{m_e} = \frac{5.28 \times 10^{-25}}{9.11 \times 10^{-31}} = 5.80 \times 10^5\,\mathrm{m/s}$$

This is a significant fraction of the speed of light, showing that confining an electron to atomic
dimensions implies a very large uncertainty in its velocity -- consistent with the probabilistic
nature of electron behaviour in atoms.

</details>

---

## Pair Production and Annihilation

### Pair Production

A photon can convert into a particle-antiparticle pair (e.g. $e^- + e^+$) provided its energy
exceeds the total rest energy of the pair:

$$E_{\mathrm{photon}} \ge 2m_e c^2 = 1.022\,\mathrm{MeV}$$

Momentum must also be conserved, which requires the presence of a nearby nucleus to absorb recoil
momentum. Pair production cannot occur in empty space.

### Pair Annihilation

When a particle meets its antiparticle, they annihilate, converting their combined rest mass into
photon energy. For an electron-positron pair at rest:

$$2m_e c^2 = 2(0.511\,\mathrm{MeV}) = 1.022\,\mathrm{MeV}$$

This energy is carried by two photons (to conserve momentum), each with energy $0.511\,\mathrm{MeV}$,
emitted in opposite directions.

---

## Nuclear Physics Applications

### Carbon Dating

Living organisms continuously exchange carbon with the environment, maintaining a constant ratio of
$^{14}\mathrm{C}$ to $^{12}\mathrm{C}$. After death, $^{14}\mathrm{C}$ decays with a half-life of
$5730\,\mathrm{years}$. The age of a sample is determined from the remaining $^{14}\mathrm{C}$:

$$N = N_0 e^{-\lambda t} \implies t = \frac{1}{\lambda}\ln\!\left(\frac{N_0}{N}\right) = \frac{t_{1/2}}{\ln 2}\ln\!\left(\frac{N_0}{N}\right)$$

**Example.** A sample has $25\%$ of the original $^{14}\mathrm{C}$. Find its age.

$$t = \frac{5730}{0.693}\ln(4) = 5730 \times 2 = 11460\,\mathrm{years}$$

### Nuclear Medicine

- **Technetium-99m** ($t_{1/2} = 6.01\,\mathrm{h}$): gamma emitter used in diagnostic imaging.
- **Iodine-131** ($t_{1/2} = 8.02\,\mathrm{d}$): beta emitter used to treat thyroid conditions.
- **Cobalt-60** ($t_{1/2} = 5.27\,\mathrm{y}$): gamma emitter used in radiotherapy.

### Nuclear Reactor Components

| Component | Function |
| :--- | :--- |
| Fuel ($^{235}\mathrm{U}$) | Undergoes fission, releasing energy |
| Moderator (water, graphite) | Slows neutrons to thermal energies |
| Control rods (boron, cadmium) | Absorb neutrons to control reaction rate |
| Coolant (water, $\mathrm{CO}_2$) | Transfers heat from reactor core |
| Shielding (concrete, lead) | Absorbs radiation for safety |

---

## Wave Functions and Probability

### The Schrodinger Equation

The time-independent Schrodinger equation for a particle of mass $m$ in a potential $V(x)$:

$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + V(x)\psi = E\psi$$

where $\psi(x)$ is the **wave function** and $E$ is the energy eigenvalue.

### Probability Interpretation

The wave function $\psi$ has no direct physical meaning, but $|\psi(x)|^2$ gives the **probability
density** for finding the particle at position $x$:

$$P(x)\,dx = |\psi(x)|^2\,dx$$

The total probability must be unity (normalisation):

$$\int_{-\infty}^{\infty} |\psi(x)|^2\,dx = 1$$

### Particle in a Box

For a particle confined to a one-dimensional box of length $L$ ($V = 0$ inside, $V = \infty$ outside):

$$\psi_n(x) = \sqrt{\frac{2}{L}}\sin\!\left(\frac{n\pi x}{L}\right), \qquad n = 1, 2, 3, \ldots$$

$$E_n = \frac{n^2 h^2}{8mL^2}$$

Key features: energy is quantised, the ground state has non-zero energy ($n = 1$), and the particle
has non-zero probability of being found at any position inside the box.

### Quantum Tunneling

A particle with energy $E \lt V_0$ has a non-zero probability of passing through a potential barrier
of height $V_0$. The transmission coefficient decreases exponentially with barrier width $w$:

$$T \approx e^{-2\kappa w}$$

where $\kappa = \dfrac{\sqrt{2m(V_0 - E)}}{\hbar}$.

Quantum tunneling is responsible for alpha decay, tunnel diodes, and scanning tunnelling microscopy.

---

## Standard Model Overview

### Classification of Particles

**Fermions** (half-integer spin): matter particles.

- **Quarks** (six flavours: up, down, charm, strange, top, bottom): experience all four forces.
- **Leptons** (electron, muon, tau + their neutrinos): experience gravity, EM, weak force.

**Bosons** (integer spin): force carriers.

- **Photon** ($\gamma$): electromagnetic force.
- **Gluon** ($g$): strong nuclear force.
- **$W^+$, $W^-$, $Z^0$**: weak nuclear force.
- **Higgs boson**: gives mass to $W$, $Z$ bosons and fermions.

### The Four Fundamental Forces

| Force | Mediator | Relative Strength | Range |
| :--- | :--- | :--- | :--- |
| Strong | Gluon | 1 | $\sim 10^{-15}\,\mathrm{m}$ |
| Electromagnetic | Photon | $\sim 10^{-2}$ | Infinite |
| Weak | $W$, $Z$ bosons | $\sim 10^{-6}$ | $\sim 10^{-18}\,\mathrm{m}$ |
| Gravitational | Graviton (hypothetical) | $\sim 10^{-38}$ | Infinite |

---

## Feynman Diagrams

### Purpose

Feynman diagrams are pictorial representations of particle interactions. Each diagram represents a
term in a perturbation expansion of the quantum field theory amplitude.

### Conventions

- **Straight lines** with arrows: fermions (matter particles; arrows reversed for antiparticles).
- **Wavy lines**: photons.
- **Curly lines**: gluons.
- **Dashed lines**: $W$ or $Z$ bosons, or Higgs.
- **Vertices** represent interactions; conservation laws apply at each vertex.

### Example: Electron-Positron Annihilation

$e^- + e^+ \to \gamma + \gamma$: The electron and positron annihilate into a virtual photon, which
produces two real photons. The diagram has two incoming fermion lines, one internal photon line, and
two outgoing photon lines.

:::warning Common Pitfall

The binding energy curve shows a peak at iron-56, but the curve is relatively flat around this peak.
Elements from nickel to lead all have binding energies per nucleon in the range
$7.5$--$8.8\,\mathrm{MeV/nucleon}$. Do not assume that fission of elements lighter than iron always
absorbs energy; the actual threshold depends on the specific reaction.

:::

---

## Problem Set

### Problem 1

Light of wavelength $250\,\mathrm{nm}$ is incident on a sodium surface with work function
$\Phi = 2.28\,\mathrm{eV}$. Find the maximum kinetic energy of the emitted photoelectrons and the
stopping potential.

<details>
<summary>Solution</summary>

Photon energy:

$$E = \frac{hc}{\lambda} = \frac{1240}{250} = 4.96\,\mathrm{eV}$$

Maximum kinetic energy:

$$E_{k,\max} = E - \Phi = 4.96 - 2.28 = 2.68\,\mathrm{eV}$$

Stopping potential:

$$eV_s = E_{k,\max} \implies V_s = 2.68\,\mathrm{V}$$

**If you get this wrong, revise:** The Photoelectric Effect section.

</details>

### Problem 2

Find the de Broglie wavelength of a neutron moving at $2.0 \times 10^4\,\mathrm{m/s}$.
($m_n = 1.675 \times 10^{-27}\,\mathrm{kg}$)

<details>
<summary>Solution</summary>

$$\lambda = \frac{h}{mv} = \frac{6.626 \times 10^{-34}}{(1.675 \times 10^{-27})(2.0 \times 10^4)} = \frac{6.626 \times 10^{-34}}{3.35 \times 10^{-23}}$$

$$\lambda = 1.98 \times 10^{-11}\,\mathrm{m} = 0.0198\,\mathrm{nm}$$

This is comparable to X-ray wavelengths, explaining why neutron diffraction is used to study crystal
structures.

**If you get this wrong, revise:** Wave-Particle Duality section.

</details>

### Problem 3

A hydrogen atom absorbs a photon of wavelength $97.3\,\mathrm{nm}$. Determine the transition involved
(initial and final energy levels).

<details>
<summary>Solution</summary>

Photon energy:

$$E = \frac{1240}{97.3} = 12.75\,\mathrm{eV}$$

Energy levels: $E_n = -13.6/n^2$.

The photon is absorbed, so the electron moves to a higher level:

$$\Delta E = E_{n_f} - E_{n_i} = 12.75\,\mathrm{eV}$$

If the electron starts from $n = 1$ ($E_1 = -13.6\,\mathrm{eV}$):

$$E_{n_f} = -13.6 + 12.75 = -0.85\,\mathrm{eV}$$

$$-0.85 = \frac{-13.6}{n_f^2} \implies n_f^2 = 16 \implies n_f = 4$$

The transition is $n = 1 \to n = 4$ (absorption, Lyman series).

**If you get this wrong, revise:** Atomic Energy Levels section.

</details>

### Problem 4

Strontium-90 has a half-life of $28.8\,\mathrm{years}$. A sample initially contains $2.0 \times 10^{20}$
atoms. How many atoms remain after $100\,\mathrm{years}$? What is the activity at that time?

<details>
<summary>Solution</summary>

Decay constant:

$$\lambda = \frac{\ln 2}{t_{1/2}} = \frac{0.693}{28.8 \times 365.25 \times 24 \times 3600} = 7.64 \times 10^{-10}\,\mathrm{s}^{-1}$$

Number remaining:

$$N = N_0 e^{-\lambda t}$$

$$t = 100 \times 365.25 \times 24 \times 3600 = 3.156 \times 10^9\,\mathrm{s}$$

$$\lambda t = (7.64 \times 10^{-10})(3.156 \times 10^9) = 2.411$$

$$N = 2.0 \times 10^{20} \times e^{-2.411} = 2.0 \times 10^{20} \times 0.0897 = 1.79 \times 10^{19}$$

Activity:

$$A = \lambda N = (7.64 \times 10^{-10})(1.79 \times 10^{19}) = 1.37 \times 10^{10}\,\mathrm{Bq}$$

**If you get this wrong, revise:** Radioactive Decay section.

</details>

### Problem 5

Complete the following nuclear equation and identify the type of decay:

$$^{234}_{90}\mathrm{Th} \to ^{234}_{91}\mathrm{Pa} + \,?$$

<details>
<summary>Solution</summary>

Conserving mass number: $234 = 234 + A \implies A = 0$

Conserving atomic number: $90 = 91 + Z \implies Z = -1$

The emitted particle has $A = 0$ and $Z = -1$, which is an electron: $e^{-}$ (or
$\beta^{-}$).

This is **beta-minus decay**, in which a neutron converts to a proton, emitting an electron and an
antineutrino:

$$^{234}_{90}\mathrm{Th} \to ^{234}_{91}\mathrm{Pa} + e^{-} + \bar{\nu}_e$$

**If you get this wrong, revise:** Types of Radioactive Decay table.

</details>

### Problem 6

Calculate the binding energy of carbon-12 ($^{12}_{6}\mathrm{C}$).
Given: $m_p = 1.00728\,\mathrm{u}$, $m_n = 1.00867\,\mathrm{u}$,
$m_{\mathrm{C-12}} = 12.00000\,\mathrm{u}$ (by definition of the atomic mass unit),
$1\,\mathrm{u} = 931.5\,\mathrm{MeV}/c^2$.

<details>
<summary>Solution</summary>

Carbon-12 has $Z = 6$ protons and $N = 6$ neutrons.

$$\Delta m = 6(1.00728) + 6(1.00867) - 12.00000 = 6.04368 + 6.05202 - 12.00000 = 0.09570\,\mathrm{u}$$

$$E_b = 0.09570 \times 931.5 = 89.1\,\mathrm{MeV}$$

$$\frac{E_b}{A} = \frac{89.1}{12} = 7.43\,\mathrm{MeV/nucleon}$$

**If you get this wrong, revise:** Mass-Energy Equivalence section.

</details>

### Problem 7

Find the minimum energy a photon must have to produce an electron-positron pair. If the photon has
exactly this energy, can pair production occur? Explain.

<details>
<summary>Solution</summary>

Minimum energy:

$$E_{\min} = 2m_e c^2 = 2(0.511\,\mathrm{MeV}) = 1.022\,\mathrm{MeV}$$

If the photon has exactly $1.022\,\mathrm{MeV}$, pair production **cannot** occur in free space
because momentum cannot be conserved. The photon has momentum $p = E/c$, but the electron-positron
pair at rest has zero momentum. A nearby nucleus must be present to absorb the recoil momentum. The
photon energy must be **greater than** $1.022\,\mathrm{MeV}$ for pair production to actually occur.

**If you get this wrong, revise:** Pair Production section.

</details>

### Problem 8

An electron is confined in a one-dimensional box of length $L = 0.50\,\mathrm{nm}$. Find the energy
of the ground state and the first excited state. What is the wavelength of a photon emitted when the
electron transitions from $n = 2$ to $n = 1$?

<details>
<summary>Solution</summary>

Ground state ($n = 1$):

$$E_1 = \frac{h^2}{8mL^2} = \frac{(6.626 \times 10^{-34})^2}{8(9.109 \times 10^{-31})(0.50 \times 10^{-9})^2}$$

$$E_1 = \frac{4.390 \times 10^{-67}}{1.822 \times 10^{-49}} = 2.41 \times 10^{-18}\,\mathrm{J} = 15.0\,\mathrm{eV}$$

First excited state ($n = 2$):

$$E_2 = 4E_1 = 60.0\,\mathrm{eV}$$

Photon energy for $n = 2 \to n = 1$:

$$\Delta E = 60.0 - 15.0 = 45.0\,\mathrm{eV}$$

Wavelength:

$$\lambda = \frac{1240}{45.0} = 27.6\,\mathrm{nm}$$

This is in the ultraviolet region.

**If you get this wrong, revise:** Particle in a Box section.

</details>

### Problem 9

A sample of wood from an archaeological site has $^{14}\mathrm{C}$ activity that is $35\%$ of the
activity of a living sample. Estimate the age of the wood. ($t_{1/2}$ of $^{14}\mathrm{C} = 5730\,\mathrm{years}$)

<details>
<summary>Solution</summary>

$$N = N_0 e^{-\lambda t} \implies 0.35 = e^{-\lambda t}$$

$$-\lambda t = \ln(0.35) = -1.050$$

$$t = \frac{1.050}{\lambda} = \frac{1.050 \times t_{1/2}}{\ln 2} = \frac{1.050 \times 5730}{0.693} = 8680\,\mathrm{years}$$

The wood is approximately $8700\,\mathrm{years}$ old.

**If you get this wrong, revise:** Carbon Dating section.

</details>

### Problem 10

In a Compton scattering experiment, a photon is scattered at $180^\circ$ (backscattered) by a free
electron. If the incident photon has wavelength $0.0100\,\mathrm{nm}$, find the wavelength of the
scattered photon and the kinetic energy transferred to the electron.

<details>
<summary>Solution</summary>

Wavelength shift:

$$\Delta\lambda = \frac{h}{m_e c}(1 - \cos 180^\circ) = (2.43 \times 10^{-12})(1 - (-1)) = 4.86 \times 10^{-12}\,\mathrm{m}$$

$$\lambda' = 0.0100 \times 10^{-9} + 4.86 \times 10^{-12} = 1.486 \times 10^{-11}\,\mathrm{m} = 0.01486\,\mathrm{nm}$$

Energy of incident photon:

$$E_i = \frac{1240}{0.0100} = 124000\,\mathrm{eV} = 124\,\mathrm{keV}$$

Energy of scattered photon:

$$E_f = \frac{1240}{0.01486} = 83446\,\mathrm{eV} = 83.4\,\mathrm{keV}$$

Kinetic energy of electron:

$$E_k = E_i - E_f = 124 - 83.4 = 40.6\,\mathrm{keV}$$

**If you get this wrong, revise:** Compton Scattering section.

</details>

### Problem 11

A proton is confined within a nucleus of radius approximately $5.0 \times 10^{-15}\,\mathrm{m}$.
Estimate the minimum kinetic energy of the proton using the Heisenberg uncertainty principle.
($m_p = 1.67 \times 10^{-27}\,\mathrm{kg}$)

<details>
<summary>Solution</summary>

$$\Delta x \approx 5.0 \times 10^{-15}\,\mathrm{m}$$

$$\Delta p \ge \frac{\hbar}{2\Delta x} = \frac{1.055 \times 10^{-34}}{2(5.0 \times 10^{-15})} = 1.055 \times 10^{-20}\,\mathrm{kg\,m/s}$$

Using $E_k \approx \frac{(\Delta p)^2}{2m}$:

$$E_k \approx \frac{(1.055 \times 10^{-20})^2}{2(1.67 \times 10^{-27})} = \frac{1.113 \times 10^{-40}}{3.34 \times 10^{-27}} = 3.33 \times 10^{-14}\,\mathrm{J}$$

$$E_k \approx \frac{3.33 \times 10^{-14}}{1.602 \times 10^{-19}} \approx 208\,\mathrm{keV}$$

This shows that confinement energy of nucleons is on the order of MeV, consistent with nuclear
binding energies.

**If you get this wrong, revise:** Heisenberg Uncertainty Principle section.

</details>

### Problem 12

A nuclear power plant produces $3.0 \times 10^9\,\mathrm{W}$ of thermal power. Each fission of
$^{235}\mathrm{U}$ releases approximately $200\,\mathrm{MeV}$. Calculate the number of fissions per
second and the mass of $^{235}\mathrm{U}$ consumed per day.

<details>
<summary>Solution</summary>

Energy per fission:

$$E_{\mathrm{fission}} = 200\,\mathrm{MeV} = 200 \times 1.602 \times 10^{-13} = 3.20 \times 10^{-11}\,\mathrm{J}$$

Fissions per second:

$$\mathrm{Rate} = \frac{P}{E_{\mathrm{fission}}} = \frac{3.0 \times 10^9}{3.20 \times 10^{-11}} = 9.38 \times 10^{19}\,\mathrm{fissions/s}$$

Fissions per day:

$$N = 9.38 \times 10^{19} \times 86400 = 8.10 \times 10^{24}$$

Mass of $^{235}\mathrm{U}$ (molar mass $\approx 235\,\mathrm{g/mol}$):

$$m = \frac{N \times 235}{N_A} = \frac{8.10 \times 10^{24} \times 235}{6.022 \times 10^{23}} = \frac{1.904 \times 10^{27}}{6.022 \times 10^{23}} \approx 3160\,\mathrm{g} \approx 3.2\,\mathrm{kg}$$

Approximately $3.2\,\mathrm{kg}$ of $^{235}\mathrm{U}$ is consumed per day.

**If you get this wrong, revise:** Nuclear Fission and Mass-Energy Equivalence sections.

</details>
