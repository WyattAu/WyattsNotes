---
title: Particles and Waves
date: 2026-04-14
tags:
  - Physics
  - Advanced Highers
categories:
  - Physics
slug: particles-and-waves
---

# Particles and Waves

:::info

This chapter covers **Advanced Higher** Physics content, extending beyond Higher level.

:::

## Quantum Physics

### Wave-Particle Duality

Light and matter exhibit both wave-like and particle-like properties.

**Photoelectric Effect:** When light of sufficient frequency shines on a metal surface, electrons
are emitted.

- Electrons are emitted **instantaneously**, not after a delay
- No electrons are emitted if the frequency is below the threshold frequency $f_0$, regardless of
  intensity
- The maximum kinetic energy of emitted electrons depends on frequency, not intensity
- More intense light produces more electrons, not more energetic ones

**Einstein's Photoelectric Equation:**

$$E_k = hf - \phi$$

where $\phi = hf_0$ is the work function of the metal.

**Example:** The work function of sodium is $2.28 \text{ eV}$. Find the threshold frequency and the
maximum kinetic energy of photoelectrons when illuminated by light of frequency
$8 \times 10^{14} \text{ Hz}$.

Threshold frequency:
$f_0 = \dfrac{\phi}{h} = \dfrac{2.28 \times 1.6 \times 10^{-19}}{6.63 \times 10^{-34}} = \dfrac{3.648 \times 10^{-19}}{6.63 \times 10^{-34}} = 5.50 \times 10^{14} \text{ Hz}$.

Maximum kinetic energy:
$E_k = hf - \phi = 6.63 \times 10^{-34} \times 8 \times 10^{14} - 3.648 \times 10^{-19}$

$$= 5.304 \times 10^{-19} - 3.648 \times 10^{-19} = 1.656 \times 10^{-19} \text{ J} = 1.04 \text{ eV}$$

### De Broglie Wavelength

All matter has wave-like properties. The de Broglie wavelength of a particle with momentum $p$ is:

$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

**Example:** Find the de Broglie wavelength of an electron accelerated through a potential
difference of $200 \text{ V}$.

$$E_k = eV = 200 \text{ eV} = 200 \times 1.6 \times 10^{-19} = 3.2 \times 10^{-17} \text{ J}$$

$$E_k = \frac{1}{2}mv^2 = \frac{p^2}{2m}$$

$$p = \sqrt{2mE_k} = \sqrt{2 \times 9.11 \times 10^{-31} \times 3.2 \times 10^{-17}} = \sqrt{5.83 \times 10^{-47}} = 7.64 \times 10^{-24} \text{ kg m/s}$$

$$\lambda = \frac{h}{p} = \frac{6.63 \times 10^{-34}}{7.64 \times 10^{-24}} = 8.68 \times 10^{-11} \text{ m} \approx 0.087 \text{ nm}$$

### Energy Levels and Spectra

Electrons in atoms exist in discrete energy levels. Transitions between levels produce photons:

$$\Delta E = hf = \frac{hc}{\lambda}$$

- **Emission spectrum:** Bright lines on a dark background (photons emitted when electrons move to
  lower levels)
- **Absorption spectrum:** Dark lines on a continuous spectrum (photons absorbed when electrons move
  to higher levels)

**Example:** An electron in a hydrogen atom transitions from $n = 3$ to $n = 1$. The energy levels
are $E_1 = -13.6 \text{ eV}$, $E_2 = -3.4 \text{ eV}$, $E_3 = -1.51 \text{ eV}$. Find the wavelength
of the emitted photon.

$$\Delta E = E_3 - E_1 = -1.51 - (-13.6) = 12.09 \text{ eV} = 1.934 \times 10^{-18} \text{ J}$$

$$\lambda = \frac{hc}{\Delta E} = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{1.934 \times 10^{-18}} = \frac{1.989 \times 10^{-25}}{1.934 \times 10^{-18}} = 1.028 \times 10^{-7} \text{ m} \approx 103 \text{ nm}$$

This is in the ultraviolet region (Lyman series).

### Heisenberg Uncertainty Principle

It is fundamentally impossible to simultaneously know both the exact position and exact momentum of
a particle:

$$\Delta x \cdot \Delta p \geq \frac{\hbar}{2}$$

where $\hbar = \dfrac{h}{2\pi}$.

**Example:** An electron is confined to a region of width $1 \text{ nm}$. What is the minimum
uncertainty in its momentum?

$$\Delta p \geq \frac{\hbar}{2\Delta x} = \frac{1.055 \times 10^{-34}}{2 \times 10^{-9}} = 5.275 \times 10^{-26} \text{ kg m/s}$$

---

## Particle Physics

### Standard Model

The Standard Model classifies fundamental particles into:

**Quarks** (six flavours, each with an antiquark):

| Generation | Up-type   | Charge | Down-type   | Charge |
| ---------- | --------- | ------ | ----------- | ------ |
| 1          | Up (u)    | $+2/3$ | Down (d)    | $-1/3$ |
| 2          | Charm (c) | $+2/3$ | Strange (s) | $-1/3$ |
| 3          | Top (t)   | $+2/3$ | Bottom (b)  | $-1/3$ |

**Leptons** (six flavours, each with an antilepton):

| Generation | Charged      | Charge | Neutrino          | Charge |
| ---------- | ------------ | ------ | ----------------- | ------ |
| 1          | Electron (e) | $-1$   | Electron neutrino | $0$    |
| 2          | Muon ($\mu$) | $-1$   | Muon neutrino     | $0$    |
| 3          | Tau ($\tau$) | $-1$   | Tau neutrino      | $0$    |

**Gauge Bosons** (force carriers):

| Force           | Boson                   | Mass  | Acts on           |
| --------------- | ----------------------- | ----- | ----------------- |
| Electromagnetic | Photon ($\gamma$)       | 0     | Charged particles |
| Strong          | Gluon (g)               | 0     | Quarks, gluons    |
| Weak            | $W^+, W^-, Z^0$         | Heavy | All fermions      |
| Gravity         | Graviton (hypothetical) | 0     | All particles     |

**Higgs Boson:** Gives particles mass via the Higgs mechanism.

### Conservation Laws in Particle Physics

In all particle interactions, the following are conserved:

- Charge
- Baryon number
- Lepton number
- Energy and momentum
- Strangeness (in strong interactions)

### Feynman Diagrams

Feynman diagrams represent particle interactions visually. Key features:

- Straight lines represent matter particles (left to right) or antimatter (right to left)
- Wavy lines represent photons
- Curly lines represent gluons
- Dashed lines represent $W$ or $Z$ bosons

**Beta decay:** A neutron converts to a proton by emitting a $W^-$ boson, which decays into an
electron and electron antineutrino:

$$n \to p + W^-$$ $$W^- \to e^- + \bar{\nu}_e$$

### Antimatter

Every particle has a corresponding antiparticle with the same mass but opposite charge.

**Electron-positron annihilation:**

$$e^- + e^+ \to 2\gamma$$

The total energy of the photons equals $2m_e c^2$ plus any kinetic energy.

---

## Wave Phenomena (Advanced Higher)

### Superposition and Interference

**Principle of Superposition:** When two or more waves overlap, the resultant displacement at any
point is the sum of the individual displacements.

**Coherent sources** have the same frequency and a constant phase relationship.

### Stationary Waves

A stationary (standing) wave is formed by the superposition of two progressive waves of the same
frequency travelling in opposite directions.

**Nodes:** Points of zero amplitude.

**Antinodes:** Points of maximum amplitude.

**String fixed at both ends:**

$$f_n = \frac{nv}{2L}, \quad n = 1, 2, 3, \ldots$$

where $L$ is the string length and $v$ is the wave speed.

**Pipe open at both ends:**

$$f_n = \frac{nv}{2L}, \quad n = 1, 2, 3, \ldots$$

**Pipe closed at one end:**

$$f_n = \frac{nv}{4L}, \quad n = 1, 3, 5, \ldots$$

**Example:** A guitar string of length $65 \text{ cm}$ has a fundamental frequency of
$330 \text{ Hz}$. Find the wave speed and the frequency of the third harmonic.

$$v = 2Lf_1 = 2 \times 0.65 \times 330 = 429 \text{ m/s}$$

$$f_3 = \frac{3v}{2L} = 3 \times 330 = 990 \text{ Hz}$$

### Doppler Effect

When a source of waves moves relative to an observer, the observed frequency changes:

$$f' = f\frac{v}{v \pm v_s}$$

where $v_s$ is the speed of the source (minus for approaching, plus for receding).

**For electromagnetic waves (relativistic):**

$$f' = f\sqrt{\frac{c \pm v}{c \mp v}}$$

**Example:** An ambulance siren emits sound at $800 \text{ Hz}$. If the ambulance approaches at
$25 \text{ m/s}$ (speed of sound $= 343 \text{ m/s}$), find the observed frequency.

$$f' = 800 \times \frac{343}{343 - 25} = 800 \times \frac{343}{318} = 800 \times 1.0786 = 862.9 \text{ Hz}$$

---

## Common Pitfalls

1. **Units in the photoelectric effect:** Convert between eV and joules as needed.
   $1 \text{ eV} = 1.6 \times 10^{-19} \text{ J}$.

2. **De Broglie wavelength of massive objects:** While all matter has a de Broglie wavelength, it is
   negligibly small for macroscopic objects.

3. **Conservation laws:** Always check charge, baryon number, and lepton number are conserved in
   particle reactions.

4. **Stationary wave harmonics:** A pipe closed at one end only supports odd harmonics
   ($n = 1, 3, 5, \ldots$).

5. **Doppler effect sign convention:** Approaching sources increase observed frequency; receding
   sources decrease it.

---

## Practice Questions

1. The work function of potassium is $2.30 \text{ eV}$. Find the threshold wavelength and the
   maximum kinetic energy of photoelectrons when illuminated by $400 \text{ nm}$ light.

2. Calculate the de Broglie wavelength of a proton moving at $2 \times 10^6 \text{ m/s}$.

3. Verify that the following reaction conserves charge, baryon number, and lepton number:
   $\pi^- + p \to K^0 + \Lambda^0$.

4. A stationary wave on a string of length $0.8 \text{ m}$ has a third harmonic frequency of
   $600 \text{ Hz}$. Find the wave speed.

5. Draw a Feynman diagram for electron-proton scattering via photon exchange.

6. A source emitting $500 \text{ Hz}$ sound moves away from a stationary observer at
   $30 \text{ m/s}$. Speed of sound is $343 \text{ m/s}$. Find the observed frequency.

7. In a hydrogen atom, an electron transitions from $n = 4$ to $n = 2$. Calculate the wavelength of
   the emitted photon.

8. Explain how the Heisenberg uncertainty principle limits the precision of simultaneous
   measurements of position and momentum.
