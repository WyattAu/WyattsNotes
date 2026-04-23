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
