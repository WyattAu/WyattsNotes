---
title: Quantum Physics
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: quantum-physics
---

## Quantum Physics

:::info Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4 :::

## 1. The Photoelectric Effect

**Definition.** The photoelectric effect is the phenomenon in which electrons are emitted from a
metal surface when electromagnetic radiation of frequency greater than a threshold frequency is
incident upon it.

### Observations

When light of sufficiently high frequency is incident on a metal surface, electrons are emitted. Key
observations:

1. Electrons are emitted **instantaneously** (no time delay, even for very low intensity).
2. **No electrons are emitted** if the frequency is below a threshold $f_0$, regardless of
   intensity.
3. The **maximum kinetic energy** of emitted electrons depends on frequency, not intensity.
4. Increasing intensity increases the **number** of electrons, not their energy.

### Einstein's Explanation (1905)

**Definition.** A photon is a discrete quantum of electromagnetic radiation that carries energy
$E = hf$, where $h$ is Planck's constant and $f$ is the frequency of the radiation.

Light consists of discrete packets called **photons**, each with energy:

$$E = hf$$

where $h = 6.63 \times 10^{-34}$ J s is Planck's constant and $f$ is the frequency.

**Definition.** The work function $\phi$ of a metal is the minimum energy required to remove an
electron from the surface of that metal.

When a photon strikes the metal surface, it transfers **all** its energy to a single electron. The
electron uses energy $\phi$ (the **work function**) to escape the metal, and the remainder becomes
kinetic energy:

$$\boxed{hf = \phi + E_{k,\max}}$$

This is **Einstein's photoelectric equation**.

### Derivation of the Photoelectric Equation

1. A single photon transfers all its energy $E = hf$ to a single electron on the metal surface.
2. The electron must overcome the work function $\phi$ to escape the metal.
3. By conservation of energy, any excess energy becomes the electron's maximum kinetic energy:

$$E_{k,\max} = hf - \phi$$

$$\boxed{E_{k,\max} = hf - \phi}$$

$\square$

### Threshold Frequency

**Definition.** The threshold frequency $f_0$ is the minimum frequency of incident electromagnetic
radiation below which no photoelectrons are emitted from a metal surface, regardless of intensity.

The threshold frequency $f_0$ is the minimum frequency for photoemission. At this frequency,
$E_{k,\max} = 0$:

$$hf_0 = \phi \implies \boxed{f_0 = \frac{\phi}{h}}$$

The threshold wavelength: $\lambda_0 = c/f_0 = hc/\phi$.

**Why wave theory fails.** Classical wave theory predicts that energy accumulates over time and
depends on intensity, so there should be a time delay and no frequency threshold. The instantaneous
emission and frequency dependence can only be explained by the photon model.

### Stopping Potential

The maximum kinetic energy can be measured using a stopping potential $V_s$ — the minimum reverse
voltage needed to stop the most energetic photoelectrons:

$$eV_s = E_{k,\max} = hf - \phi$$

**Graphical analysis.** A plot of $E_{k,\max}$ vs $f$ gives a straight line with:

- Gradient $= h$
- $x$-intercept $= f_0$
- $y$-intercept $= -\phi$

## 2. Energy Levels and Photon Emission

### Atomic Energy Levels

**Definition.** An energy level is a discrete, quantised energy state that an electron can occupy
within an atom, characterised by a principal quantum number $n$.

Electrons in atoms can only occupy discrete **energy levels**. The energy of level $n$ is $E_n$
(negative, with $E_\infty = 0$).

### Photon Emission

When an electron transitions from a higher level $E_2$ to a lower level $E_1$, it emits a photon of
energy:

$$\boxed{hf = E_2 - E_1}$$

The frequency is uniquely determined by the energy difference, so each transition produces a photon
of a specific frequency — a **spectral line**.

### Photon Absorption

An electron can absorb a photon and jump to a higher level, but **only** if the photon energy
exactly matches an energy level difference:

$$hf = E_{\text{upper}} - E_{\text{lower}}$$

This is why absorption spectra show dark lines at the same frequencies as emission lines.

### The Hydrogen Spectrum

**Definition.** The electronvolt (eV) is a unit of energy equal to the work done when an electron is
accelerated through a potential difference of one volt: $1\,\text{eV} = 1.60 \times 10^{-19}$ J.

The energy levels of hydrogen are given by the **Bohr model**:

$$E_n = -\frac{13.6\,\text{eV}}{n^2}, \qquad n = 1, 2, 3, \ldots$$

The Lyman series (UV): transitions to $n = 1$. The Balmer series (visible): transitions to $n = 2$.
The Paschen series (IR): transitions to $n = 3$.

**Wavelength of emitted photon:**

$$\frac{1}{\lambda} = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

where $R = 1.097 \times 10^7$ m$^{-1}$ is the Rydberg constant.

**Intuition.** Energy levels are like rungs on a ladder — electrons can stand on a rung or jump
between rungs, but cannot hover in between. Each jump emits or absorbs a photon of a precise energy.

## 3. Wave-Particle Duality: de Broglie Wavelength

**Definition.** Wave-particle duality is the concept that all matter and radiation exhibit both
wave-like and particle-like properties, depending on the type of measurement performed.

### de Broglie's Hypothesis (1924)

**Definition.** The de Broglie wavelength is the wavelength $\lambda$ associated with a particle of
momentum $p$, given by $\lambda = h/p$, where $h$ is Planck's constant.

Every particle has an associated wave with wavelength:

$$\boxed{\lambda = \frac{h}{p} = \frac{h}{mv}}$$

### Derivation of the de Broglie Wavelength

1. For a photon, Einstein's energy-momentum relation gives $E = pc$ (for a massless particle).
2. Planck-Einstein relation: $E = hf = hc/\lambda$.
3. Equating: $pc = hc/\lambda$.
4. Therefore: $\lambda = h/p$ for a photon.
5. de Broglie postulated that this relation applies universally to **all** particles, not just
   photons:

$$\boxed{\lambda = \frac{h}{p}}$$

$\square$

**Derivation from photon momentum.** For a photon: $E = hf = hc/\lambda$. Using $E = pc$ (for
massless particles): $pc = hc/\lambda$, giving $\lambda = h/p$. de Broglie proposed this relation
applies to **all** particles, not just photons.

### Electron Diffraction

The de Broglie hypothesis was confirmed by Davisson and Germer (1927), who observed diffraction
patterns when electrons were directed at a nickel crystal. The diffraction condition is:

$$n\lambda = d\sin\theta$$

Substituting $\lambda = h/(mv)$:

$$d\sin\theta = \frac{nh}{mv}$$

This showed that electrons — particles — exhibit wave behaviour, confirming wave-particle duality.

**Intuition.** A cricket ball has a de Broglie wavelength of $\sim 10^{-34}$ m — far too small to
detect. But electrons accelerated through $\sim 100$ V have $\lambda \sim 10^{-10}$ m, comparable to
atomic spacing, so diffraction is observable.

### Calculating Electron Wavelength

For an electron accelerated through p.d. $V$:

$$eV = \frac{1}{2}mv^2 \implies v = \sqrt{\frac{2eV}{m}}$$

$$\lambda = \frac{h}{mv} = \frac{h}{\sqrt{2meV}}$$

Numerically: $\lambda = \sqrt{\frac{1.505 \times 10^{-18}}{V}}$ m (where $V$ is in volts).

For $V = 100$ V: $\lambda = 1.23 \times 10^{-10}$ m $= 0.123$ nm.

## 4. Emission and Absorption Spectra

### Emission Spectrum

A hot gas emits light at specific frequencies (bright lines on a dark background). Each line
corresponds to an electron transition from a higher to a lower energy level.

### Absorption Spectrum

When white light passes through a cool gas, the gas absorbs specific frequencies (dark lines on a
continuous spectrum). The dark lines are at the same frequencies as the emission lines.

### Continuous Spectrum

A hot solid or dense gas emits a continuous spectrum (all frequencies), because the close proximity
of atoms broadens the energy levels into bands.

:::tip Exam Technique When calculating photon wavelengths from energy level transitions, first find
$\Delta E$ in joules, then use $\lambda = hc/\Delta E$. Remember to convert eV to joules:
$1\,\text{eV} = 1.60 \times 10^{-19}$ J. :::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

The work function of sodium is $2.28$ eV. Calculate: (a) the threshold frequency, (b) the maximum
kinetic energy of photoelectrons when light of frequency $8.0 \times 10^{14}$ Hz is incident.

**Answer.** (a)
$f_0 = \phi/h = 2.28 \times 1.60 \times 10^{-19} / 6.63 \times 10^{-34} = 5.50 \times 10^{14}$ Hz.

(b)
$E_{k,\max} = hf - \phi = 6.63 \times 10^{-34} \times 8.0 \times 10^{14} - 2.28 \times 1.60 \times 10^{-19} = 5.304 \times 10^{-19} - 3.648 \times 10^{-19} = 1.66 \times 10^{-19}$
J $= 1.04$ eV.

<b>If you get this wrong, revise:</b> [Einstein's Explanation](#einstiens-explanation-1905)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

The stopping potential for photoelectrons emitted from a metal illuminated by light of wavelength
400 nm is 1.2 V. Calculate the work function.

**Answer.** $E_{k,\max} = eV_s = 1.2$ eV $= 1.92 \times 10^{-19}$ J.

Photon energy:
$E = hc/\lambda = 6.63 \times 10^{-34} \times 3.0 \times 10^8 / 400 \times 10^{-9} = 4.97 \times 10^{-19}$
J $= 3.11$ eV.

$\phi = 3.11 - 1.2 = 1.91$ eV.

<b>If you get this wrong, revise:</b> [Stopping Potential](#stopping-potential)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

Calculate the de Broglie wavelength of an electron moving at $2.0 \times 10^6$ m s$^{-1}$.

**Answer.**
$\lambda = h/(m_e v) = 6.63 \times 10^{-34} / (9.11 \times 10^{-31} \times 2.0 \times 10^6) = 6.63 \times 10^{-34} / 1.822 \times 10^{-24} = 3.64 \times 10^{-10}$
m $= 0.364$ nm.

<b>If you get this wrong, revise:</b> [de Broglie's Hypothesis](#de-broglies-hypothesis-1924)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

An electron in a hydrogen atom transitions from $n = 4$ to $n = 2$. Calculate the wavelength of the
emitted photon.

**Answer.** $E_4 = -13.6/16 = -0.85$ eV. $E_2 = -13.6/4 = -3.40$ eV. $\Delta E = 3.40 - 0.85 = 2.55$
eV $= 4.08 \times 10^{-19}$ J.

$\lambda = hc/\Delta E = 6.63 \times 10^{-34} \times 3.0 \times 10^8 / 4.08 \times 10^{-19} = 4.87 \times 10^{-7}$
m $= 487$ nm (blue-green, Balmer series).

<b>If you get this wrong, revise:</b> [Photon Emission](#photon-emission)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

Light of wavelength 200 nm is incident on a zinc plate with work function 4.30 eV. Determine whether
photoelectrons are emitted and, if so, calculate their maximum kinetic energy.

**Answer.** Photon energy $= hc/\lambda = 1240\,\text{eV nm}/200\,\text{nm} = 6.20$ eV.

Since $6.20 > 4.30$, photoelectrons are emitted. $E_{k,\max} = 6.20 - 4.30 = 1.90$ eV.

<b>If you get this wrong, revise:</b> [Threshold Frequency](#threshold-frequency)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Calculate the de Broglie wavelength of a neutron moving with kinetic energy $0.025$ eV (thermal
neutron).

**Answer.** $E_k = 0.025 \times 1.60 \times 10^{-19} = 4.0 \times 10^{-21}$ J.
$v = \sqrt{2E_k/m_n} = \sqrt{2 \times 4.0 \times 10^{-21} / 1.675 \times 10^{-27}} = \sqrt{4.78 \times 10^6} = 2186$
m s$^{-1}$.

$\lambda = h/(m_n v) = 6.63 \times 10^{-34} / (1.675 \times 10^{-27} \times 2186) = 1.82 \times 10^{-10}$
m $= 0.182$ nm.

<b>If you get this wrong, revise:</b> [de Broglie's Hypothesis](#de-broglies-hypothesis-1924)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

Explain why the photoelectric effect cannot be explained by classical wave theory.

**Answer.** Classical wave theory predicts: (1) energy is proportional to intensity, so sufficient
intensity at any frequency should eventually eject electrons — but there is a frequency threshold
below which no electrons are emitted regardless of intensity. (2) Energy accumulates over time, so
there should be a time delay at low intensities — but emission is instantaneous. (3) Maximum kinetic
energy should depend on intensity — but it depends on frequency. These observations are explained by
the photon model: each photon has energy $hf$; one photon interacts with one electron; the photon
must have enough energy ($hf > \phi$) to liberate the electron.

<b>If you get this wrong, revise:</b> [Why wave theory fails](#why-wave-theory-fails)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

An electron is accelerated through a potential difference of 500 V. Calculate its de Broglie
wavelength.

**Answer.**
$\lambda = \frac{h}{\sqrt{2m_e eV}} = \frac{6.63 \times 10^{-34}}{\sqrt{2 \times 9.11 \times 10^{-31} \times 1.60 \times 10^{-19} \times 500}} = \frac{6.63 \times 10^{-34}}{\sqrt{1.458 \times 10^{-46}}} = \frac{6.63 \times 10^{-34}}{1.208 \times 10^{-23}} = 5.49 \times 10^{-11}$
m $= 0.0549$ nm.

<b>If you get this wrong, revise:</b>
[Calculating Electron Wavelength](#calculating-electron-wavelength)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

A hydrogen atom in the ground state ($n = 1$) absorbs a photon of wavelength 97.3 nm. To which
energy level does the electron jump?

**Answer.** Photon energy $= hc/\lambda = 1240/97.3 = 12.75$ eV.

$E_1 = -13.6$ eV. $E_{\text{final}} = -13.6 + 12.75 = -0.85$ eV.

$E_n = -13.6/n^2 = -0.85$. $n^2 = 13.6/0.85 = 16$. $n = 4$.

<b>If you get this wrong, revise:</b> [Photon Absorption](#photon-absorption)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

In a photoelectric effect experiment, the maximum kinetic energy of photoelectrons is plotted
against the frequency of incident light. The graph has a gradient of $4.0 \times 10^{-15}$ J s and a
$y$-intercept of $-3.2 \times 10^{-19}$ J. Calculate Planck's constant and the work function.

**Answer.** From $E_{k,\max} = hf - \phi$: gradient $= h = 4.0 \times 10^{-15}$ J s.

$y$-intercept $= -\phi = -3.2 \times 10^{-19}$ J. $\phi = 3.2 \times 10^{-19}$ J $= 2.0$ eV.

<b>If you get this wrong, revise:</b> [Graphical analysis](#graphical-analysis)

</p>
</details>
