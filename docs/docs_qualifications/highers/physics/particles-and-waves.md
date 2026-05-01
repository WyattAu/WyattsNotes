---
title: Particles and Waves
description:
  Particles and Waves — Quantum Physics; Wave-Particle Duality; Why the
  Photoelectric Effect Disproves the Wave Theory of Light; De Broglie
  Wavelength.
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

### Why the Photoelectric Effect Disproves the Wave Theory of Light

Classical wave theory predicts that the energy of a light wave depends on its intensity (amplitude),
not its frequency. A sufficiently intense low-frequency light should eventually eject electrons.
This does not happen. Einstein's explanation -- that light consists of discrete photons with energy
$E = hf$ -- correctly predicts that the kinetic energy of emitted electrons depends on frequency,
and that there is a threshold frequency below which no electrons are emitted regardless of
intensity. This was one of the key experiments that led to quantum mechanics.

**Einstein's Photoelectric Equation:**

$$E_k = hf - \phi$$

where $\phi = hf_0$ is the work function of the metal.

**Example:** The work function of sodium is $2.28 \mathrm{ eV}$. Find the threshold frequency and the
maximum kinetic energy of photoelectrons when illuminated by light of frequency
$8 \times 10^{14} \mathrm{ Hz}$.

Threshold frequency:
$f_0 = \dfrac{\phi}{h} = \dfrac{2.28 \times 1.6 \times 10^{-19}}{6.63 \times 10^{-34}} = \dfrac{3.648 \times 10^{-19}}{6.63 \times 10^{-34}} = 5.50 \times 10^{14} \mathrm{ Hz}$.

Maximum kinetic energy:
$E_k = hf - \phi = 6.63 \times 10^{-34} \times 8 \times 10^{14} - 3.648 \times 10^{-19}$

$$= 5.304 \times 10^{-19} - 3.648 \times 10^{-19} = 1.656 \times 10^{-19} \mathrm{ J} = 1.04 \mathrm{ eV}$$

### De Broglie Wavelength

All matter has wave-like properties. The de Broglie wavelength of a particle with momentum $p$ is:

$$\lambda = \frac{h}{p} = \frac{h}{mv}$$

**Example:** Find the de Broglie wavelength of an electron accelerated through a potential
difference of $200 \mathrm{ V}$.

$$E_k = eV = 200 \mathrm{ eV} = 200 \times 1.6 \times 10^{-19} = 3.2 \times 10^{-17} \mathrm{ J}$$

$$E_k = \frac{1}{2}mv^2 = \frac{p^2}{2m}$$

$$p = \sqrt{2mE_k} = \sqrt{2 \times 9.11 \times 10^{-31} \times 3.2 \times 10^{-17}} = \sqrt{5.83 \times 10^{-47}} = 7.64 \times 10^{-24} \mathrm{ kg m/s}$$

$$\lambda = \frac{h}{p} = \frac{6.63 \times 10^{-34}}{7.64 \times 10^{-24}} = 8.68 \times 10^{-11} \mathrm{ m} \approx 0.087 \mathrm{ nm}$$

### Why Macroscopic Objects Do Not Show Wave Behaviour

A $1 \mathrm{ kg}$ ball moving at $1 \mathrm{ m/s}$ has a de Broglie wavelength of
$\lambda = 6.63 \times
10^{-34} / 1 = 6.63 \times 10^{-34}$ m. This is unfathomably small -- far
smaller than any aperture or obstacle. Wave effects (diffraction, interference) are only observable
when the wavelength is comparable to the size of the obstacles. For electrons (small mass), the de
Broglie wavelength can be comparable to atomic spacing, which is why electron diffraction is readily
observable.

### Energy Levels and Spectra

Electrons in atoms exist in discrete energy levels. Transitions between levels produce photons:

$$\Delta E = hf = \frac{hc}{\lambda}$$

- **Emission spectrum:** Bright lines on a dark background (photons emitted when electrons move to
  lower levels)
- **Absorption spectrum:** Dark lines on a continuous spectrum (photons absorbed when electrons move
  to higher levels)

**Example:** An electron in a hydrogen atom transitions from $n = 3$ to $n = 1$. The energy levels
are $E_1 = -13.6 \mathrm{ eV}$, $E_2 = -3.4 \mathrm{ eV}$, $E_3 = -1.51 \mathrm{ eV}$. Find the wavelength
of the emitted photon.

$$\Delta E = E_3 - E_1 = -1.51 - (-13.6) = 12.09 \mathrm{ eV} = 1.934 \times 10^{-18} \mathrm{ J}$$

$$\lambda = \frac{hc}{\Delta E} = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{1.934 \times 10^{-18}} = \frac{1.989 \times 10^{-25}}{1.934 \times 10^{-18}} = 1.028 \times 10^{-7} \mathrm{ m} \approx 103 \mathrm{ nm}$$

This is in the ultraviolet region (Lyman series).

### Heisenberg Uncertainty Principle

It is fundamentally impossible to simultaneously know both the exact position and exact momentum of
a particle:

$$\Delta x \cdot \Delta p \geq \frac{\hbar}{2}$$

where $\hbar = \dfrac{h}{2\pi}$.

### Why the Uncertainty Principle Is Not About Measurement Error

The uncertainty principle is not a statement about the limitations of our instruments. It is a
fundamental property of nature: a particle simply does not have simultaneously well-defined position
and momentum. This has profound consequences: it explains why electrons cannot spiral into the
nucleus (confinement to a small volume requires large momentum, preventing collapse), and it sets a
limit on the precision of any physical theory.

**Example:** An electron is confined to a region of width $1 \mathrm{ nm}$. What is the minimum
uncertainty in its momentum?

$$\Delta p \geq \frac{\hbar}{2\Delta x} = \frac{1.055 \times 10^{-34}}{2 \times 10^{-9}} = 5.275 \times 10^{-26} \mathrm{ kg m/s}$$

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

### Why Quarks Are Never Found in Isolation

The strong force between quarks increases with distance (unlike gravity and electromagnetism, which
decrease with distance). This phenomenon, called **colour confinement**, means that separating
quarks requires more and more energy, until it becomes energetically favourable to create new
quark-antiquark pairs. The result is that quarks are always found in colour-neutral combinations:
baryons (three quarks) and mesons (quark-antiquark pair).

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

**Example:** A guitar string of length $65 \mathrm{ cm}$ has a fundamental frequency of
$330 \mathrm{ Hz}$. Find the wave speed and the frequency of the third harmonic.

$$v = 2Lf_1 = 2 \times 0.65 \times 330 = 429 \mathrm{ m/s}$$

$$f_3 = \frac{3v}{2L} = 3 \times 330 = 990 \mathrm{ Hz}$$

### Why a Closed Pipe Only Supports Odd Harmonics

At the closed end, there must be a displacement node (the air cannot move). At the open end, there
is a displacement antinode. The fundamental has a quarter wavelength fitting in the pipe. The second
harmonic would require three-quarters of a wavelength, which gives the frequency $3f_1$. The pattern
continues with only odd multiples of the fundamental.

### Doppler Effect

When a source of waves moves relative to an observer, the observed frequency changes:

$$f' = f\frac{v}{v \pm v_s}$$

where $v_s$ is the speed of the source (minus for approaching, plus for receding).

**For electromagnetic waves (relativistic):**

$$f' = f\sqrt{\frac{c \pm v}{c \mp v}}$$

**Example:** An ambulance siren emits sound at $800 \mathrm{ Hz}$. If the ambulance approaches at
$25 \mathrm{ m/s}$ (speed of sound $= 343 \mathrm{ m/s}$), find the observed frequency.

$$f' = 800 \times \frac{343}{343 - 25} = 800 \times \frac{343}{318} = 800 \times 1.0786 = 862.9 \mathrm{ Hz}$$

---

## Common Pitfalls

1. **Units in the photoelectric effect:** Convert between eV and joules as needed.
   $1 \mathrm{ eV} = 1.6 \times 10^{-19} \mathrm{ J}$.

2. **De Broglie wavelength of massive objects:** While all matter has a de Broglie wavelength, it is
   negligibly small for macroscopic objects.

3. **Conservation laws:** Always check charge, baryon number, and lepton number are conserved in
   particle reactions.

4. **Stationary wave harmonics:** A pipe closed at one end only supports odd harmonics
   ($n = 1, 3, 5, \ldots$).

5. **Doppler effect sign convention:** Approaching sources increase observed frequency; receding
   sources decrease it.

6. **Confusing baryon number and atomic mass number.** Baryon number counts the number of quarks
   minus antiquarks (each quark has $B = 1/3$, each antiquark has $B = -1/3$). A proton has $B = 1$,
   a neutron has $B = 1$, a meson has $B = 0$.

---

## Practice Questions

1. The work function of potassium is $2.30 \mathrm{ eV}$. Find the threshold wavelength and the
   maximum kinetic energy of photoelectrons when illuminated by $400 \mathrm{ nm}$ light.

2. Calculate the de Broglie wavelength of a proton moving at $2 \times 10^6 \mathrm{ m/s}$.

3. Verify that the following reaction conserves charge, baryon number, and lepton number:
   $\pi^- + p \to K^0 + \Lambda^0$.

4. A stationary wave on a string of length $0.8 \mathrm{ m}$ has a third harmonic frequency of
   $600 \mathrm{ Hz}$. Find the wave speed.

5. Draw a Feynman diagram for electron-proton scattering via photon exchange.

6. A source emitting $500 \mathrm{ Hz}$ sound moves away from a stationary observer at
   $30 \mathrm{ m/s}$. Speed of sound is $343 \mathrm{ m/s}$. Find the observed frequency.

7. In a hydrogen atom, an electron transitions from $n = 4$ to $n = 2$. Calculate the wavelength of
   the emitted photon.

8. Explain how the Heisenberg uncertainty principle limits the precision of simultaneous
   measurements of position and momentum.

9. A neutron decays into a proton, electron, and electron antineutrino. Write the full reaction and
   verify conservation of charge, baryon number, and lepton number.

10. A stationary wave is formed on a string of length $1.2 \mathrm{ m}$ with a fundamental frequency
    of $200 \mathrm{ Hz}$. Calculate the frequencies of the second, third, and fourth harmonics, and
    the positions of the nodes and antinodes for the second harmonic.

## 11. Photoelectric Effect: Extended Worked Examples

### Worked Example: Stopping Potential

When light of wavelength $450 \mathrm{ nm}$ is incident on a sodium surface, the stopping potential is
measured to be $0.65 \mathrm{ V}$. Find the work function of sodium and the threshold frequency.

$$E_k = eV_s = 1.6 \times 10^{-19} \times 0.65 = 1.04 \times 10^{-19} \mathrm{ J} = 0.65 \mathrm{ eV}$$

Photon energy:
$E = hf = \frac{hc}{\lambda} = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{450 \times 10^{-9}} = 4.42 \times 10^{-19} \mathrm{ J} = 2.76 \mathrm{ eV}$

$$\phi = E - E_k = 2.76 - 0.65 = 2.11 \mathrm{ eV}$$

Threshold frequency:
$f_0 = \frac{\phi}{h} = \frac{2.11 \times 1.6 \times 10^{-19}}{6.63 \times 10^{-34}} = 5.09 \times 10^{14} \mathrm{ Hz}$

Threshold wavelength:
$\lambda_0 = \frac{c}{f_0} = \frac{3 \times 10^8}{5.09 \times 10^{14}} = 5.89 \times 10^{-7} \mathrm{ m} = 589 \mathrm{ nm}$

This is in the yellow part of the visible spectrum, so sodium only emits photoelectrons when
illuminated with blue, violet, or UV light.

### Worked Example: Photoelectric Current

A metal surface with work function $2.0 \mathrm{ eV}$ is illuminated with light of frequency
$7 \times 10^{14} \mathrm{ Hz}$ at an intensity of $5 \mathrm{ W/m}^2$. The surface area is
$2 \mathrm{ cm}^2$.

**Photon energy:**
$E = hf = 6.63 \times 10^{-34} \times 7 \times 10^{14} = 4.64 \times 10^{-19} \mathrm{ J} = 2.90 \mathrm{ eV}$

Since $2.90 \mathrm{ eV} \gt 2.0 \mathrm{ eV}$, photoelectrons are emitted.

**Maximum KE:** $E_k = 2.90 - 2.0 = 0.90 \mathrm{ eV}$

**Photon flux:** Power per unit area divided by energy per photon:

$$\mathrm{flux} = \frac{5}{4.64 \times 10^{-19}} = 1.078 \times 10^{19} \mathrm{ photons/m}^2\mathrm{/s}$$

**Photoelectrons per second:**
$1.078 \times 10^{19} \times 2 \times 10^{-4} = 2.16 \times 10^{15} \mathrm{ electrons/s}$

**Maximum current:**
$I = ne = 2.16 \times 10^{15} \times 1.6 \times 10^{-19} = 3.45 \times 10^{-4} \mathrm{ A} = 0.345 \mathrm{ mA}$

## 12. De Broglie Wavelength: Extended Examples

### Worked Example: Electron Diffraction

Electrons are accelerated through a potential difference of $500 \mathrm{ V}$. They pass through a
thin crystal and produce a diffraction pattern. The first diffraction maximum is observed at an
angle of $1.8^{\circ}$. Calculate the atomic spacing.

$$E_k = eV = 500 \mathrm{ eV} = 8.0 \times 10^{-17} \mathrm{ J}$$

$$p = \sqrt{2mE_k} = \sqrt{2 \times 9.11 \times 10^{-31} \times 8.0 \times 10^{-17}} = \sqrt{1.458 \times 10^{-46}} = 1.208 \times 10^{-23} \mathrm{ kg m/s}$$

$$\lambda = \frac{h}{p} = \frac{6.63 \times 10^{-34}}{1.208 \times 10^{-23}} = 5.49 \times 10^{-11} \mathrm{ m}$$

For the first-order maximum: $d\sin\theta = \lambda$

$$d = \frac{\lambda}{\sin\theta} = \frac{5.49 \times 10^{-11}}{\sin 1.8^{\circ}} = \frac{5.49 \times 10^{-11}}{0.0314} = 1.75 \times 10^{-9} \mathrm{ m} = 1.75 \mathrm{ nm}$$

This is roughly 3--5 atomic spacings, which is consistent with crystal lattice spacing.

## 13. Energy Levels: Extended Analysis

### Worked Example: Hydrogen Spectral Series

Calculate the wavelength of the first three lines in the Balmer series (transitions to $n = 2$).

$E_n = -\frac{13.6}{n^2} \mathrm{ eV}$

**$n = 3 \to 2$:**

$$\Delta E = 13.6\left(\frac{1}{4} - \frac{1}{9}\right) = 13.6 \times \frac{5}{36} = 1.889 \mathrm{ eV}$$

$$\lambda = \frac{hc}{\Delta E} = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{1.889 \times 1.6 \times 10^{-19}} = \frac{1.989 \times 10^{-25}}{3.022 \times 10^{-19}} = 6.58 \times 10^{-7} \mathrm{ m} = 658 \mathrm{ nm} \mathrm{ (red)}$$

**$n = 4 \to 2$:**

$$\Delta E = 13.6\left(\frac{1}{4} - \frac{1}{16}\right) = 13.6 \times \frac{3}{16} = 2.55 \mathrm{ eV}$$

$$\lambda = \frac{1.989 \times 10^{-25}}{2.55 \times 1.6 \times 10^{-19}} = 4.87 \times 10^{-7} \mathrm{ m} = 487 \mathrm{ nm} \mathrm{ (blue-green)}$$

**$n = 5 \to 2$:**

$$\Delta E = 13.6\left(\frac{1}{4} - \frac{1}{25}\right) = 13.6 \times \frac{21}{100} = 2.856 \mathrm{ eV}$$

$$\lambda = \frac{1.989 \times 10^{-25}}{2.856 \times 1.6 \times 10^{-19}} = 4.35 \times 10^{-7} \mathrm{ m} = 435 \mathrm{ nm} \mathrm{ (violet)}$$

## 14. Particle Physics: Extended Conservation Laws

### Worked Example: Verifying Conservation Laws

Verify conservation of charge, baryon number, and lepton number for beta-minus decay of a free
neutron:

$$n \to p + e^- + \bar{\nu}_e$$

Writing with full quark content: $udd \to uud + e^- + \bar{\nu}_e$

| Quantity      | Before                                                      | After                                                        | Conserved? |
| ------------- | ----------------------------------------------------------- | ------------------------------------------------------------ | ---------- |
| Charge        | $0 + (-\frac{1}{3}) + (-\frac{1}{3}) + (-\frac{1}{3}) = -1$ | $\frac{2}{3} + \frac{2}{3} + (-\frac{1}{3}) + (-1) + 0 = -1$ | Yes        |
| Baryon number | $3 \times \frac{1}{3} = 1$                                  | $3 \times \frac{1}{3} + 0 + 0 + 0 = 1$                       | Yes        |
| Lepton number | $0$                                                         | $1 + (-1) = 0$                                               | Yes        |

### Worked Example: Pion Decay

A $\pi^-$ meson (quark content $d\bar{u}$) decays: $\pi^- \to \mu^- + \bar{\nu}_\mu$

| Quantity      | Before                                 | After          | Conserved? |
| ------------- | -------------------------------------- | -------------- | ---------- |
| Charge        | $(-\frac{1}{3}) + (-\frac{2}{3}) = -1$ | $-1 + 0 = -1$  | Yes        |
| Baryon number | $0 + 0 = 0$                            | $0 + 0 = 0$    | Yes        |
| Lepton number | $0$                                    | $1 + (-1) = 0$ | Yes        |

## 15. Stationary Waves: Extended Analysis

### Worked Example: Nodes and Antinodes for the Second Harmonic

A string of length $1.2 \mathrm{ m}$ has fundamental frequency $200 \mathrm{ Hz}$.

Wave speed: $v = 2Lf_1 = 2 \times 1.2 \times 200 = 480 \mathrm{ m/s}$

**Second harmonic ($n = 2$):** $f_2 = 400 \mathrm{ Hz}$, $\lambda_2 = \frac{2L}{2} = 1.2 \mathrm{ m}$.

Nodes at: $0, 0.6 \mathrm{ m}, 1.2 \mathrm{ m}$ (3 nodes, including the fixed ends)

Antinodes at: $0.3 \mathrm{ m}, 0.9 \mathrm{ m}$ (2 antinodes)

**Third harmonic ($n = 3$):** $f_3 = 600 \mathrm{ Hz}$, $\lambda_3 = \frac{2L}{3} = 0.8 \mathrm{ m}$.

**Fourth harmonic ($n = 4$):** $f_4 = 800 \mathrm{ Hz}$, $\lambda_4 = \frac{2L}{4} = 0.6 \mathrm{ m}$.

## 16. Summary Table: Quantum and Wave Formulas

| Topic           | Formula                         | Variables              | Notes                |
| --------------- | ------------------------------- | ---------------------- | -------------------- |
| Photon energy   | $E = hf = hc/\lambda$           | $h$, $f$, $\lambda$    | Planck's constant    |
| Photoelectric   | $E_k = hf - \phi$               | $h$, $f$, $\phi$       | Einstein's equation  |
| De Broglie      | $\lambda = h/p = h/(mv)$        | $h$, $p$, $m$, $v$     | Matter waves         |
| Uncertainty     | $\Delta x \Delta p \ge \hbar/2$ | $\Delta x$, $\Delta p$ | Fundamental limit    |
| Energy levels   | $\Delta E = hf = hc/\lambda$    | $h$, $f$, $\lambda$    | Spectral lines       |
| Standing wave   | $f_n = nv/(2L)$                 | $n$, $v$, $L$          | String fixed at ends |
| Closed pipe     | $f_n = nv/(4L)$                 | $n$ odd                | Only odd harmonics   |
| Doppler (sound) | $f' = fv/(v \pm v_s)$           | $f$, $v$, $v_s$        | Approaching/receding |

## 17. Practice Questions (Additional)

11. The work function of caesium is $2.14 \mathrm{ eV}$. Calculate the threshold wavelength and the
    maximum KE of photoelectrons when illuminated with $550 \mathrm{ nm}$ light.

12. Calculate the de Broglie wavelength of a neutron moving at $2200 \mathrm{ m/s}$ (thermal neutrons
    in a nuclear reactor). (Mass of neutron $= 1.675 \times 10^{-27} \mathrm{ kg}$.)

13. A hydrogen atom is in the $n = 4$ state. Calculate the wavelengths of all possible photons
    emitted as it decays to the ground state.

14. Verify conservation of charge, baryon number, and lepton number for the reaction:
    $\pi^+ + p \to K^+ + \Sigma^+$

15. A stationary wave is set up on a string of length $0.6 \mathrm{ m}$ with a fundamental frequency
    of $250 \mathrm{ Hz}$. Calculate the wave speed and the frequency of the fifth harmonic.

16. A source emitting $600 \mathrm{ Hz}$ moves towards a stationary observer at $40 \mathrm{ m/s}$.
    Speed of sound $= 343 \mathrm{ m/s}$. Calculate the observed frequency and the wavelength of the
    observed sound.

17. Explain how electron diffraction experiments provide evidence for the wave nature of matter.

18. Calculate the energy of a photon in the Lyman series corresponding to a transition from $n = 5$
    to $n = 1$ in hydrogen.

19. An electron is confined to a region of width $0.5 \mathrm{ nm}$. Estimate the minimum uncertainty
    in its velocity.

20. Explain why the strong nuclear force must be a short-range force. Reference colour confinement
    and the fact that quarks are never observed in isolation.

## Extended Worked Examples

### Example 21: De Broglie Wavelength of an Electron in a Potential Difference

An electron is accelerated through a potential difference of $200 \mathrm{ V}$. Calculate its de
Broglie wavelength.

**Step 1: Find the kinetic energy**

$$eV = \frac{1}{2}mv^2$$

$$1.602 \times 10^{-19} \times 200 = \frac{1}{2} \times 9.109 \times 10^{-31} \times v^2$$

$$v^2 = \frac{2 \times 3.204 \times 10^{-17}}{9.109 \times 10^{-31}} = 7.034 \times 10^{13}$$

$$v = 8.387 \times 10^6 \mathrm{ m/s}$$

**Step 2: Calculate the de Broglie wavelength**

$$\lambda = \frac{h}{mv} = \frac{6.626 \times 10^{-34}}{9.109 \times 10^{-31} \times 8.387 \times 10^6}$$

$$\lambda = \frac{6.626 \times 10^{-34}}{7.639 \times 10^{-24}} = 8.67 \times 10^{-11} \mathrm{ m} = 0.0867 \mathrm{ nm}$$

:::info
For electrons accelerated through potential $V$, the de Broglie wavelength can be calculated
directly:

$$\lambda = \frac{h}{\sqrt{2m_e eV}} = \frac{1.226}{\sqrt{V}} \mathrm{ nm}$$

where $V$ is in volts. This is a very useful shortcut: for $V = 200 \mathrm{ V}$,
$\lambda = 1.226/\sqrt{200} = 0.0867 \mathrm{ nm}$.
:::

### Example 22: Photon Energy and Wavelength Relationships

A photon has energy $4.5 \mathrm{ eV}$. Calculate (a) its wavelength, (b) its frequency, and (c) its
momentum.

**Step 1: Convert energy to joules**

$$E = 4.5 \mathrm{ eV} = 4.5 \times 1.602 \times 10^{-19} = 7.209 \times 10^{-19} \mathrm{ J}$$

**Step 2: Wavelength**

$$\lambda = \frac{hc}{E} = \frac{6.626 \times 10^{-34} \times 3.0 \times 10^8}{7.209 \times 10^{-19}}$$

$$\lambda = \frac{1.988 \times 10^{-25}}{7.209 \times 10^{-19}} = 2.758 \times 10^{-7} \mathrm{ m} = 275.8 \mathrm{ nm}$$

This is in the ultraviolet region.

**Step 3: Frequency**

$$f = \frac{c}{\lambda} = \frac{3.0 \times 10^8}{2.758 \times 10^{-7}} = 1.088 \times 10^{15} \mathrm{ Hz}$$

**Step 4: Momentum**

$$p = \frac{E}{c} = \frac{7.209 \times 10^{-19}}{3.0 \times 10^8} = 2.403 \times 10^{-27} \mathrm{ kg}\cdot\mathrm{m/s}$$

### Example 23: Stationary Waves in Closed and Open Pipes

A closed pipe (closed at one end, open at the other) has length $0.85 \mathrm{ m}$. Calculate the
fundamental frequency and the first two overtones. Speed of sound $= 340 \mathrm{ m/s}$.

**Step 1: Fundamental frequency (first harmonic)**

For a closed pipe, the fundamental has a node at the closed end and an antinode at the open end. The
effective length is $\lambda/4$:

$$f_1 = \frac{v}{4L} = \frac{340}{4 \times 0.85} = \frac{340}{3.4} = 100 \mathrm{ Hz}$$

**Step 2: First overtone (third harmonic)**

Only odd harmonics are present in a closed pipe:

$$f_3 = 3f_1 = 3 \times 100 = 300 \mathrm{ Hz}$$

**Step 3: Second overtone (fifth harmonic)**

$$f_5 = 5f_1 = 5 \times 100 = 500 \mathrm{ Hz}$$

**Comparison with an open pipe of the same length:**

For an open pipe: $f_1 = \frac{v}{2L} = \frac{340}{1.7} = 200 \mathrm{ Hz}$, and _all_ harmonics are
present ($f_n = nf_1$).

:::info
A closed pipe produces only odd harmonics (1st, 3rd, 5th, ...), giving a richer, more
"hollow" sound than an open pipe which produces all harmonics (1st, 2nd, 3rd, ...). This is why
clarinets (effectively closed pipes) sound different from flutes (open pipes).
:::

## Common Pitfalls Extended

### Pitfall 6: Confusing Photon Energy with Electron Energy in the Photoelectric Effect

The photon energy $E = hf$ is the energy of the _incoming light_. The work function $\phi$ is the
minimum energy to release an electron. The kinetic energy of the emitted electron is
$KE_{\max} = hf - \phi$. If $hf \lt \phi$, no electrons are emitted _regardless_ of the intensity of
the light.

### Pitfall 7: Assuming All Transitions Are Equally Probable

Not all transitions between energy levels are equally likely. Selection rules govern which
transitions have high probability. For hydrogen, transitions where $\Delta l = \pm 1$ are strongly
favoured. However, for exam purposes, you should assume all allowed energy-conserving transitions
can occur.

### Pitfall 8: Forgetting That Wave Speed Depends on the Medium

When calculating the wavelength of a wave after it enters a new medium, remember that the frequency
_stays the same_ but the wavelength and speed change:

$$\lambda_2 = \frac{v_2}{v_1} \lambda_1$$

This applies to all waves: light entering glass, sound entering water, waves on a string when
tension changes, etc.

## Additional Practice Problems

21. Calculate the wavelength of (a) a $100 \mathrm{ eV}$ electron and (b) a $100 \mathrm{ eV}$ proton.
    Comment on why electron microscopes have much better resolution than optical microscopes.

22. A hydrogen atom is in the $n = 4$ state. Calculate the energies and wavelengths of all possible
    photons that could be emitted as the atom returns to the ground state. Identify which are in the
    visible spectrum.

23. In a Young's double slit experiment using laser light of wavelength $633 \mathrm{ nm}$, the slits
    are $0.5 \mathrm{ mm}$ apart and the screen is $2 \mathrm{ m}$ away. Calculate (a) the fringe
    spacing, (b) the distance from the central maximum to the third bright fringe, and (c) what
    happens to the fringe spacing if the wavelength is changed to $450 \mathrm{ nm}$.

24. An X-ray tube operates at $50 \mathrm{ kV}$. Calculate (a) the minimum wavelength of X-rays
    produced, (b) the maximum energy of the X-ray photons in eV, and (c) the momentum of these
    photons.

25. Explain how the Heisenberg uncertainty principle implies that electrons cannot exist in
    stationary orbits (as in the Bohr model) and must be described by probability clouds. Reference
    the uncertainty in both position and momentum.

## Further Worked Examples

### Example 26: Pair Production

A gamma ray photon converts into an electron-positron pair. Calculate the minimum photon energy
required.

**Step 1: Minimum energy**

The minimum photon energy must equal the rest mass energy of both particles:

$$E_{\min} = 2m_e c^2 = 2 \times 0.511 = 1.022 \mathrm{ MeV}$$

**Step 2: Corresponding wavelength**

$$\lambda = \frac{hc}{E} = \frac{6.626 \times 10^{-34} \times 3.0 \times 10^8}{1.022 \times 10^6 \times 1.602 \times 10^{-19}}$$

$$= \frac{1.988 \times 10^{-25}}{1.637 \times 10^{-13}} = 1.214 \times 10^{-12} \mathrm{ m}$$

This is in the gamma ray region of the electromagnetic spectrum.

:::info
Pair production cannot occur in a vacuum -- it must happen near a nucleus to conserve
momentum. The recoil of the nucleus absorbs the excess momentum. This is why pair production is more
likely in high-atomic-number materials (lead, tungsten), which are used in radiation shielding.
:::

### Example 27: Energy Levels of Hydrogen -- Detailed Transitions

Calculate the wavelength and frequency of the photon emitted when a hydrogen atom transitions from
$n = 4$ to $n = 2$ (H-beta line in the Balmer series).

**Step 1: Energy of each level**

$$E_n = -\frac{13.6}{n^2} \mathrm{ eV}$$

$$E_4 = -\frac{13.6}{16} = -0.85 \mathrm{ eV}$$

$$E_2 = -\frac{13.6}{4} = -3.40 \mathrm{ eV}$$

**Step 2: Energy of emitted photon**

$$\Delta E = E_4 - E_2 = -0.85 - (-3.40) = 2.55 \mathrm{ eV}$$

**Step 3: Wavelength**

$$\lambda = \frac{hc}{\Delta E} = \frac{1240 \mathrm{ eV}\cdot\mathrm{nm}}{2.55 \mathrm{ eV}} = 486.3 \mathrm{ nm}$$

This is in the blue-green region of the visible spectrum -- the H-beta line.

**Step 4: Frequency**

$$f = \frac{c}{\lambda} = \frac{3.0 \times 10^8}{4.863 \times 10^{-7}} = 6.17 \times 10^{14} \mathrm{ Hz}$$

### Example 28: Standing Wave on a String -- All Harmonics

A string of length $0.75 \mathrm{ m}$ and mass $0.015 \mathrm{ kg}$ is under a tension of
$40 \mathrm{ N}$. Calculate the fundamental frequency, the first three harmonic frequencies, and the
wave speed.

**Step 1: Wave speed**

$$v = \sqrt{\frac{T}{\mu}} = \sqrt{\frac{40}{0.015/0.75}} = \sqrt{\frac{40}{0.02}} = \sqrt{2000} = 44.7 \mathrm{ m/s}$$

**Step 2: Fundamental frequency**

$$f_1 = \frac{v}{2L} = \frac{44.7}{1.5} = 29.8 \mathrm{ Hz}$$

**Step 3: Harmonics**

$$f_2 = 2f_1 = 59.6 \mathrm{ Hz}$$

$$f_3 = 3f_1 = 89.4 \mathrm{ Hz}$$

$$f_4 = 4f_1 = 119.2 \mathrm{ Hz}$$

All harmonics are present for a string fixed at both ends.

## Board-Specific Content: SQA Advanced Higher

### Wave-Particle Duality: Davisson-Germer Experiment

The Davisson-Germer experiment (1927) provided direct evidence for the wave nature of electrons.
Electrons were accelerated through a potential difference and directed at a nickel crystal. The
reflected electrons showed a diffraction pattern, with a peak at an angle consistent with Bragg's
law:

$$n\lambda = 2d\sin\theta$$

For electrons accelerated through $54 \mathrm{ V}$:

$$\lambda = \frac{1.226}{\sqrt{54}} = 0.167 \mathrm{ nm}$$

The observed peak angle gave $\lambda = 0.165 \mathrm{ nm}$, in excellent agreement. This confirmed de
Broglie's hypothesis that $\lambda = h/p$.

### Standard Model Particles

The Standard Model classifies fundamental particles into:

- **Quarks** (6 flavours: up, down, charm, strange, top, bottom) -- experience all four forces
- **Leptons** (6: electron, muon, tau + their neutrinos) -- experience gravity, EM, weak
- **Gauge bosons** (force carriers): photon (EM), gluon (strong), W and Z (weak), Higgs (mass)
- **Each quark comes in three colours** (red, green, blue) -- the charge of the strong force

### Conservation Laws in Particle Physics

In every particle interaction, the following must be conserved:

- Energy/momentum
- Electric charge
- Baryon number
- Lepton number (electron lepton number, muon lepton number, tau lepton number separately)
- Strangeness (in strong interactions only; can change by 1 in weak interactions)

## Additional Practice Problems

26. Calculate the energy of a photon with wavelength $0.02 \mathrm{ nm}$ (hard X-ray region). Can this
    photon produce pair production? Justify your answer.

27. An electron in a hydrogen atom is in the $n = 5$ state. List all possible transitions that emit
    photons in the visible spectrum and calculate their wavelengths.

28. A string under tension $T$ has fundamental frequency $f_1$. By what factor must the tension
    change to double the fundamental frequency? By what factor must the length change?

29. A positron with kinetic energy $2 \mathrm{ MeV}$ collides with an electron at rest, producing two
    gamma ray photons. Calculate the wavelength of each photon (assume they have equal energy).

30. Compare and contrast the properties of alpha, beta, and gamma radiation in a table. Include:
    nature, charge, mass, speed, penetrating power, ionising power, and deflection in magnetic
    fields.
