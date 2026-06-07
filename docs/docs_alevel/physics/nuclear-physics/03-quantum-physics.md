---
title: Quantum Physics
description:
  'A-Level Quantum Physics notes covering key definitions, core concepts, worked examples, and
  practice questions for clear revision and exam readiness.'
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
Metal surface when electromagnetic radiation of frequency greater than a threshold frequency is
Incident upon it.

<PhetSimulation simulationId="photoelectric" title="Photoelectric Effect" />

Explore the simulation above to develop intuition for this topic.

### Observations

When light of sufficiently high frequency is incident on a metal surface, electrons are emitted. Key
Observations:

1. Electrons are emitted **instantaneously** (no time delay, even for very low intensity).
2. **No electrons are emitted** if the frequency is below a threshold $f_0$Regardless of intensity.
3. The **maximum kinetic energy** of emitted electrons depends on frequency, not intensity.
4. Increasing intensity increases the **number** of electrons, not their energy.

### Einstein's Explanation (1905)

**Definition.** A photon is a discrete quantum of electromagnetic radiation that carries energy
$E = hf$Where $h$ is Planck's constant and $f$ is the frequency of the radiation.

Light consists of discrete packets called **photons**, each with energy:

$$E = hf$$

Where $h = 6.63 \times 10^{-34}$ J s is Planck's constant and $f$ is the frequency.

**Definition.** The work function $\phi$ of a metal is the minimum energy required to remove an
Electron from the surface of that metal.

When a photon strikes the metal surface, it transfers **all** its energy to a single electron. The
Electron uses energy $\phi$ (the **work function**) to escape the metal, and the remainder becomes
Kinetic energy:

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
Radiation below which no photoelectrons are emitted from a metal surface, regardless of intensity.

The threshold frequency $f_0$ is the minimum frequency for photoemission. At this frequency,
$E_{k,\max} = 0$:

$$hf_0 = \phi \implies \boxed{f_0 = \frac◆LB◆\phi◆RB◆◆LB◆h◆RB◆}$$

The threshold wavelength: $\lambda_0 = c/f_0 = hc/\phi$.

**Why wave theory fails.** Classical wave theory predicts that energy accumulates over time and
Depends on intensity, so there should be a time delay and no frequency threshold. The instantaneous
Emission and frequency dependence can only be explained by the photon model.

### Stopping Potential

The maximum kinetic energy can be measured using a stopping potential $V_s$ — the minimum reverse
Voltage needed to stop the most energetic photoelectrons:

$$eV_s = E_{k,\max} = hf - \phi$$

**Graphical analysis.** A plot of $E_{k,\max}$ vs $f$ gives a straight line with:

- Gradient $= h$
- $x$-intercept $= f_0$
- $y$-intercept $= -\phi$

## 2. Energy Levels and Photon Emission

### Atomic Energy Levels

**Definition.** An energy level is a discrete, quantised energy state that an electron can occupy
Within an atom, characterised by a principal quantum number $n$.

Electrons in atoms can only occupy discrete **energy levels**. The energy of level $n$ is $E_n$
(negative, with $E_\infty = 0$).

### Photon Emission

When an electron transitions from a higher level $E_2$ to a lower level $E_1$It emits a photon of
Energy:

$$\boxed{hf = E_2 - E_1}$$

The frequency is uniquely determined by the energy difference, so each transition produces a photon
Of a specific frequency — a **spectral line**.

### Photon Absorption

An electron can absorb a photon and jump to a higher level, but **only** if the photon energy
Exactly matches an energy level difference:

$$hf = E_{\mathrm{upper}} - E_{\mathrm{lower}}$$

This is why absorption spectra show dark lines at the same frequencies as emission lines.

### The Hydrogen Spectrum

**Definition.** The electronvolt (eV) is a unit of energy equal to the work done when an electron is
Accelerated through a potential difference of one volt: $1\,\mathrm{eV} = 1.60 \times 10^{-19}$ J.

The energy levels of hydrogen are given by the **Bohr model**:

$$E_n = -\frac◆LB◆13.6\,\mathrm{eV}◆RB◆◆LB◆n^2◆RB◆, \qquad n = 1, 2, 3, \ldots$$

The Lyman series (UV): transitions to $n = 1$. The Balmer series (visible): transitions to $n = 2$.
The Paschen series (IR): transitions to $n = 3$.

**Wavelength of emitted photon:**

$$\frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆ = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

Where $R = 1.097 \times 10^7$ m$^{-1}$ is the Rydberg constant.

**Intuition.** Energy levels are like rungs on a ladder — electrons can stand on a rung or jump
Between rungs, but cannot hover in between. Each jump emits or absorbs a photon of a precise energy.

## 3. Wave-Particle Duality: de Broglie Wavelength

**Definition.** Wave-particle duality is the concept that all matter and radiation exhibit both
Wave-like and particle-like properties, depending on the type of measurement performed.

### de Broglie's Hypothesis (1924)

**Definition.** The de Broglie wavelength is the wavelength $\lambda$ associated with a particle of
Momentum $p$Given by $\lambda = h/p$Where $h$ is Planck's constant.

Every particle has an associated wave with wavelength:

$$\boxed{\lambda = \frac{h}{p} = \frac{h}{mv}}$$

### Derivation of the de Broglie Wavelength

1. For a photon, Einstein's energy-momentum relation gives $E = pc$ (for a massless particle).
2. Planck-Einstein relation: $E = hf = hc/\lambda$.
3. Equating: $pc = hc/\lambda$.
4. Therefore: $\lambda = h/p$ for a photon.
5. De Broglie postulated that this relation applies universally to **all** particles, not just
   photons:

$$\boxed{\lambda = \frac{h}{p}}$$

$\square$

**Derivation from photon momentum.** For a photon: $E = hf = hc/\lambda$. Using $E = pc$ (for
Massless particles): $pc = hc/\lambda$Giving $\lambda = h/p$. De Broglie proposed this relation
Applies to **all** particles, not just photons.

### Electron Diffraction

The de Broglie hypothesis was confirmed by Davisson and Germer (1927), who observed diffraction
Patterns when electrons were directed at a nickel crystal. The diffraction condition is:

$$n\lambda = d\sin\theta$$

Substituting $\lambda = h/(mv)$:

$$d\sin\theta = \frac{nh}{mv}$$

This showed that electrons — particles — exhibit wave behaviour, confirming wave-particle duality.

**Intuition.** A cricket ball has a de Broglie wavelength of $\sim 10^{-34}$ m — far too small to
Detect. But electrons accelerated through $\sim 100$ V have $\lambda \sim 10^{-10}$ m, comparable to
Atomic spacing, so diffraction is observable.

### Calculating Electron Wavelength

For an electron accelerated through p.d. $V$:

$$eV = \frac{1}{2}mv^2 \implies v = \sqrt◆LB◆\frac{2eV}{m}◆RB◆$$

$$\lambda = \frac{h}{mv} = \frac◆LB◆h◆RB◆◆LB◆\sqrt{2meV}◆RB◆$$

Numerically: $\lambda = \sqrt◆LB◆\frac{1.505 \times 10^{-18}}{V}◆RB◆$ m (where $V$ is in volts).

For $V = 100$ V: $\lambda = 1.23 \times 10^{-10}$ m $= 0.123$ nm.

## 4. Emission and Absorption Spectra

### Emission Spectrum

A hot gas emits light at specific frequencies (bright lines on a dark background). Each line
Corresponds to an electron transition from a higher to a lower energy level.

### Absorption Spectrum

When white light passes through a cool gas, the gas absorbs specific frequencies (dark lines on a
Continuous spectrum). The dark lines are at the same frequencies as the emission lines.

### Continuous Spectrum

A hot solid or dense gas emits a continuous spectrum (all frequencies), because the close proximity
Of atoms broadens the energy levels into bands.

:::tip Exam Technique When calculating photon wavelengths from energy level transitions, first find
$\Delta E$ in joules, then use $\lambda = hc/\Delta E$. Remember to convert eV to joules:
$1\,\mathrm{eV} = 1.60 \times 10^{-19}$ J.
:::

## 5. Wave-Particle Duality — Deeper Analysis

### Double-Slit Experiment with Electrons

The double-slit experiment, originally performed with light by Young, was extended to electrons by
Jonsson (1961). When a beam of electrons is directed at a barrier with two narrow slits, the
Resulting pattern on a detector screen shows an **interference pattern** of alternating bright and
Dark fringes — exactly as expected for waves. This occurs even when electrons are sent one at a
Time: each electron arrives at a single point on the screen, but over many arrivals, the statistical
Distribution forms an interference pattern.

This is not a property of the electron "splitting in two" — each electron arrives whole at the
Detector. The interference pattern is a statistical property of the ensemble of many electrons.

### The Measurement Problem

If a detector is placed at one slit to determine **which** slit each electron passes through, the
Interference pattern **disappears** and is replaced by two overlapping single-slit diffraction
Patterns. The act of measurement fundamentally alters the outcome.

This is not a limitation of the detector technology. It is a fundamental feature of nature: the
Measurement interaction disturbs the electron's wavefunction sufficiently to destroy the coherence
Between the two paths.

**The critical insight.** An electron does not have a well-defined trajectory (slit position) and
Simultaneously exhibit interference. The experimental arrangement determines which aspect of the
Electron's behaviour is revealed.

### Complementarity Principle (Bohr)

Bohr's complementarity principle states that wave-like and particle-like descriptions are
**complementary**: a complete description of a quantum object requires both, but they cannot be
Observed simultaneously. Any experiment that reveals particle behaviour (which-slit detection)
Suppresses wave behaviour (interference), and vice versa.

This is not a statement about experimental imperfection — it is a statement about the nature of
Reality at the quantum level.

### Heisenberg Uncertainty Principle

**Theorem (Heisenberg, 1927).** For any quantum particle, the product of the uncertainty in position
$\Delta x$ and the uncertainty in momentum $\Delta p$ satisfies:

$$\boxed{\Delta x \cdot \Delta p \geq \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆}$$

Where $\hbar = h/(2\pi) = 1.055 \times 10^{-34}$ J s is the reduced Planck constant.

This is an equality for Gaussian wave packets (minimum-uncertainty states) and an inequality for all
Others.

### Derivation from Wave Packet Analysis (Simplified)

A particle that is localised within a region of width $\Delta x$ cannot be described by a single
Plane wave (which extends over all space). It must be described by a **wave packet** — a
Superposition of many plane waves with different wavelengths (and hence different momenta, since
$p = h/\lambda$).

1. Consider a particle whose wavefunction is a superposition of plane waves with wave numbers
   centred at $k_0 = p_0/\hbar$ and spread over a range $\Delta k$:

$$\psi(x) = \int_{k_0 - \Delta k}^{k_0 + \Delta k} A(k) e^{ikx}\, dk$$

2. The localisation of this wave packet is determined by the spread in $k$. For a Gaussian amplitude
   $A(k)$The resulting $\psi(x)$ is also Gaussian, and the widths satisfy:

$$\Delta x \cdot \Delta k = \frac{1}{2}$$

3. Since $p = \hbar k$We have $\Delta p = \hbar \, \Delta k$. Substituting:

$$\Delta x \cdot \frac◆LB◆\Delta p◆RB◆◆LB◆\hbar◆RB◆ = \frac{1}{2}$$

$$\boxed{\Delta x \cdot \Delta p = \frac◆LB◆\hbar◆RB◆◆LB◆2◆RB◆}$$

This is the minimum uncertainty product. For non-Gaussian wave packets, the product is larger, hence
The general inequality $\Delta x \cdot \Delta p \geq \hbar/2$.

$\square$

:::warning Warning System." While this is a consequence, it is not the fundamental origin. The
principle follows from The mathematics of wave superposition — it is intrinsic to the wave nature of
matter, not an Artifact of clumsy measurement. A particle **does not simultaneously possess** a
well-defined Position and a well-defined momentum.
:::

### Consequences of the Uncertainty Principle

**Electrons cannot "fall into" the nucleus.** If an electron were confined to a nucleus
($\Delta x \sim 5 \times 10^{-15}$ m), the minimum momentum uncertainty would be:

$$\Delta p \geq \frac◆LB◆\hbar◆RB◆◆LB◆2\Delta x◆RB◆ = \frac◆LB◆1.055 \times 10^{-34}◆RB◆◆LB◆2 \times 5 \times 10^{-15}◆RB◆ = 1.06 \times 10^{-20}\,\mathrm{kg m s}^{-1}$$

The corresponding kinetic energy (using $E_k = p^2/2m$ and taking $p \approx \Delta p$):

$$E_k \geq \frac◆LB◆(1.06 \times 10^{-20})^2◆RB◆◆LB◆2 \times 9.11 \times 10^{-31}◆RB◆ = 6.1 \times 10^{-11}\,\mathrm{J} \approx 382\,\mathrm{MeV}$$

This is orders of magnitude larger than the binding energy of the atom ($\sim 13.6$ eV). The
Confinement energy alone would far exceed any attractive potential, so the electron cannot be
Confined to the nucleus.

**Zero-point energy.** A particle confined to any finite region must have non-zero kinetic energy
Due to the uncertainty principle. Even at absolute zero temperature, a particle in a box has
$E_1 \gt 0$. This is the **zero-point energy**, and it is a direct consequence of wave mechanics,
Not thermal motion.

### Worked Example: Uncertainty in Position of an Electron Confined to a Nucleus

**Problem.** Estimate the minimum kinetic energy of an electron confined within a nucleus of radius
$5 \times 10^{-15}$ m.

**Solution.**

1. Position uncertainty: $\Delta x \approx 5 \times 10^{-15}$ m.
2. From the uncertainty principle:

$$\Delta p \geq \frac◆LB◆\hbar◆RB◆◆LB◆2\Delta x◆RB◆ = \frac◆LB◆1.055 \times 10^{-34}◆RB◆◆LB◆2 \times 5 \times 10^{-15}◆RB◆ = 1.06 \times 10^{-20}\,\mathrm{kg m s}^{-1}$$

3. Minimum kinetic energy (using $E_k = (\Delta p)^2 / 2m_e$):

$$E_k \geq \frac◆LB◆(1.06 \times 10^{-20})^2◆RB◆◆LB◆2 \times 9.11 \times 10^{-31}◆RB◆ = \frac◆LB◆1.12 \times 10^{-40}◆RB◆◆LB◆1.82 \times 10^{-30}◆RB◆ = 6.15 \times 10^{-11}\,\mathrm{J}$$

4. Converting to eV:

$$E_k \geq \frac◆LB◆6.15 \times 10^{-11}◆RB◆◆LB◆1.60 \times 10^{-19}◆RB◆ = 3.84 \times 10^8\,\mathrm{eV} = 384\,\mathrm{MeV}$$

This is $\sim 28$ million times the ground-state binding energy of hydrogen (13.6 eV), confirming
That the electron cannot exist inside the nucleus.

## 6. Line Spectra — Quantitative Treatment

### Derivation of the Bohr Model

The Bohr model (1913) was the first successful quantitative model of the hydrogen atom. It rests on
Two postulates.

**Bohr's Postulates:**

1. **Quantised angular momentum.** The electron can only occupy orbits where its angular momentum is
   an integer multiple of $\hbar$:

$$L = m_e v r = n\hbar, \qquad n = 1, 2, 3, \ldots$$

2. **Radiation condition.** An electron in a stationary orbit does not radiate. It emits or absorbs
   a photon only when transitioning between orbits:

$$hf = E_{n_i} - E_{n_f}$$

**Proof: Derivation of the Bohr radius.**

Starting from the quantisation condition and the balance of Coulomb force and centripetal force:

1. Coulomb attraction provides centripetal acceleration:

$$\frac{k e^2}{r^2} = \frac{m_e v^2}{r}$$

Where $k = 1/(4\pi\varepsilon_0)$.

2. From the quantisation condition: $v = n\hbar/(m_e r)$.

3. Substituting into the force balance:

$$\frac{k e^2}{r^2} = \frac{m_e}{r}\left(\frac◆LB◆n\hbar◆RB◆◆LB◆m_e r◆RB◆\right)^2 = \frac◆LB◆n^2 \hbar^2◆RB◆◆LB◆m_e r^3◆RB◆$$

4. Solving for $r$:

$$r^3 = \frac◆LB◆n^2 \hbar^2◆RB◆◆LB◆m_e k e^2◆RB◆ \cdot r^2 \implies \boxed{r_n = \frac◆LB◆n^2 \hbar^2◆RB◆◆LB◆m_e k e^2◆RB◆ = \frac{n^2}{Z} a_0}$$

Where the **Bohr radius** is:

$$\boxed{a_0 = \frac◆LB◆\hbar^2◆RB◆◆LB◆m_e k e^2◆RB◆ = 0.0529\,\mathrm{nm}}$$

For hydrogen ($Z = 1$), the ground state ($n = 1$) orbit has $r_1 = a_0 = 0.0529$ nm.

$\square$

**Proof: Derivation of the energy levels.**

The total energy of the electron in orbit $n$ is the sum of kinetic and potential energies:

1. Kinetic energy: from the force balance, $m_e v^2/r = ke^2/r^2$So:

$$E_k = \frac{1}{2}m_e v^2 = \frac{k e^2}{2r_n}$$

2. Potential energy (Coulomb):

$$E_p = -\frac{k e^2}{r_n}$$

3. Total energy:

$$E_n = E_k + E_p = \frac{k e^2}{2r_n} - \frac{k e^2}{r_n} = -\frac{k e^2}{2r_n}$$

4. Substituting $r_n = n^2\hbar^2/(m_e k e^2)$:

$$E_n = -\frac{k e^2}{2} \cdot \frac◆LB◆m_e k e^2◆RB◆◆LB◆n^2 \hbar^2◆RB◆ = -\frac◆LB◆m_e k^2 e^4◆RB◆◆LB◆2\hbar^2 n^2◆RB◆$$

$$\boxed{E_n = -\frac◆LB◆Z^2 \cdot 13.6\,\mathrm{eV}◆RB◆◆LB◆n^2◆RB◆}$$

For hydrogen ($Z = 1$): $E_1 = -13.6$ eV, $E_2 = -3.4$ eV, $E_3 = -1.51$ eV, $E_4 = -0.85$ eV.

$\square$

**Proof: Derivation of the Rydberg constant.**

1. For a transition from $n_i$ to $n_f$ ($n_i \gt n_f$):

$$hf = E_{n_i} - E_{n_f} = \frac◆LB◆m_e k^2 e^4◆RB◆◆LB◆2\hbar^2◆RB◆\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

2. Since $f = c/\lambda$:

$$\frac◆LB◆hc◆RB◆◆LB◆\lambda◆RB◆ = \frac◆LB◆m_e k^2 e^4◆RB◆◆LB◆2\hbar^2◆RB◆\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

3. Rearranging:

$$\frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆ = \frac◆LB◆m_e k^2 e^4◆RB◆◆LB◆2\hbar^2 hc◆RB◆\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right) = \frac◆LB◆m_e k^2 e^4◆RB◆◆LB◆4\pi c \hbar^3◆RB◆\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

4. Identifying the Rydberg constant:

$$\boxed{R = \frac◆LB◆m_e k^2 e^4◆RB◆◆LB◆4\pi c \hbar^3◆RB◆ = 1.097 \times 10^7\,\mathrm{m}^{-1}}$$

$\square$

### Series Limits

Each spectral series has a **series limit** — the shortest wavelength (highest frequency)
Corresponding to the transition from $n = \infty$ to the series' final level:

- **Lyman** ($n_f = 1$): $\lambda_{\min} = 1/R = 91.18$ nm (UV)
- **Balmer** ($n_f = 2$): $\lambda_{\min} = 4/(3R) = 364.6$ nm (near UV)
- **Paschen** ($n_f = 3$): $\lambda_{\min} = 9/(8R) = 820.4$ nm (near IR)

The series limit represents ionisation — the electron is freed from the atom entirely.

### Ionisation Energy

The ionisation energy is the energy required to move the electron from the ground state to
$n = \infty$ (free):

$$E_{\mathrm{ionisation}} = E_\infty - E_1 = 0 - (-13.6\,\mathrm{eV}) = 13.6\,\mathrm{eV}$$

For hydrogen, this equals the ground state binding energy in magnitude.

### Franck-Hertz Experiment (1914)

The Franck-Hertz experiment provided direct experimental evidence for quantised energy levels,
Independent of spectroscopy.

**Setup.** Electrons are emitted from a heated cathode and accelerated through a potential
Difference $V$ toward a grid. Beyond the grid is an anode held at a slightly lower potential
($\sim 0.5$ V less than the grid). The tube contains low-pressure mercury (Hg) vapour.

**Observation.** As the accelerating voltage $V$ is increased from zero, the anode current rises —
Electrons reach the anode. At $V \approx 4.9$ V, the current **drops sharply**. The current then
Rises again, drops at $V \approx 9.8$ V, again at $V \approx 14.7$ V, and so on.

**Explanation.**

1. At $V = 4.9$ V, electrons have just enough kinetic energy ($4.9$ eV) to excite a Hg atom from its
   ground state to its first excited state via an inelastic collision.
2. The electron loses $4.9$ eV and no longer has enough energy to overcome the small retarding
   potential between grid and anode — the current drops.
3. At higher voltages, the electron can undergo one excitation and still reach the anode (current
   rises), then at $V = 9.8$ V it can excite two atoms, and so on.

The spacing of $4.9$ V between successive dips directly measures the energy gap to the first excited
State of Hg. The emitted photon has wavelength:

$$\lambda = \frac◆LB◆hc◆RB◆◆LB◆\Delta E◆RB◆ = \frac◆LB◆1240\,\mathrm{eV nm}◆RB◆◆LB◆4.9\,\mathrm{eV}◆RB◆ = 253\,\mathrm{nm}$$

Which is in the UV — consistent with the observed UV emission from the Hg vapour.

:::tip Tip Confirms quantised energy levels." The key points are: (1) the periodic current drops
occur at Multiples of $4.9$ V, (2) this corresponds to a fixed energy loss per collision, (3) the
fixed Energy loss can only be explained by discrete (quantised) energy levels in the Hg atom.
:::

## 7. Wave Functions and Probability

### Born Interpretation

**Definition.** The wave function $\psi(x)$ is a complex-valued function that completely describes
The quantum state of a particle. Its physical significance is given by the Born rule.

The **Born interpretation** (1926) states that $|\psi(x)|^2$ is the **probability density** for
Finding the particle at position $x$:

$$\boxed{P(x)\,dx = |\psi(x)|^2\,dx}$$

Where $P(x)\,dx$ is the probability of finding the particle between $x$ and $x + dx$.

Since the particle must be somewhere, the total probability must equal 1:

$$\boxed{\int_{-\infty}^{\infty} |\psi(x)|^2\,dx = 1}$$

This is the **normalisation condition**. A wave function that satisfies this condition is said to be
**normalised**.

:::warning Warning Only $|\psi(x)|^2 = \psi^*(x)\psi(x)$ has physical meaning as a probability
density. Also, $\psi(x)$ Is not directly measurable; only $|\psi(x)|^2$ is observable.
:::

### Electron in a Box: 1D Infinite Potential Well

Consider an electron confined to a one-dimensional box of length $L$With impenetrable walls at
$x = 0$ and $x = L$. Inside the box, $V = 0$; outside, $V = \infty$.

**Boundary conditions.** The electron cannot exist outside the box, so:

$$\psi(0) = 0 \quad \mathrm{and} \quad \psi(L) = 0$$

**Proof: Derivation of the wave functions and energy levels.**

1. Inside the box ($0 \lt x \lt L$), the time-independent Schrodinger equation for a free particle
   is:

$$-\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\frac◆LB◆d^2\psi◆RB◆◆LB◆dx^2◆RB◆ = E\psi$$

2. Rearranging:

$$\frac◆LB◆d^2\psi◆RB◆◆LB◆dx^2◆RB◆ + \frac◆LB◆2mE◆RB◆◆LB◆\hbar^2◆RB◆\psi = 0$$

3. This is the simple harmonic oscillator equation with $k^2 = 2mE/\hbar^2$. The general solution
   is:

$$\psi(x) = A\sin(kx) + B\cos(kx)$$

Where $k = \sqrt{2mE}/\hbar$.

4. Applying the boundary condition $\psi(0) = 0$:

$$\psi(0) = A\sin(0) + B\cos(0) = B = 0 \implies B = 0$$

So $\psi(x) = A\sin(kx)$.

5. Applying the boundary condition $\psi(L) = 0$:

$$\psi(L) = A\sin(kL) = 0$$

Since $A \neq 0$ (trivial solution), we require $\sin(kL) = 0$Which means:

$$kL = n\pi, \qquad n = 1, 2, 3, \ldots$$

Note: $n = 0$ gives $\psi(x) = 0$ everywhere (no particle), and $n \lt 0$ gives the same wave
Function as positive $n$.

6. Therefore:

$$k_n = \frac◆LB◆n\pi◆RB◆◆LB◆L◆RB◆$$

7. The energy is quantised:

$$E_n = \frac◆LB◆\hbar^2 k_n^2◆RB◆◆LB◆2m◆RB◆ = \frac◆LB◆\hbar^2 n^2 \pi^2◆RB◆◆LB◆2mL^2◆RB◆ = \boxed{\frac{n^2 h^2}{8mL^2}}$$

8. The normalised wave function (using $\int_0^L |\psi|^2 dx = 1$):

$$\boxed{\psi_n(x) = \sqrt◆LB◆\frac{2}{L}◆RB◆\sin\left(\frac◆LB◆n\pi x◆RB◆◆LB◆L◆RB◆\right)}$$

$\square$

**Key features of the solutions:**

- **Quantised energy.** Only discrete energies $E_n = n^2 h^2/(8mL^2)$ are allowed — quantisation
  emerges from boundary conditions, not from ad hoc postulates.
- **Zero-point energy.** $E_1 = h^2/(8mL^2) \gt 0$. The ground state energy is non-zero, a direct
  consequence of the uncertainty principle: confining the particle to the box requires momentum
  uncertainty, hence kinetic energy.
- **Nodes.** The wave function $\psi_n$ has $n - 1$ nodes (zero crossings) within the box. Higher
  energy states have more nodes.

### Comparison with the Bohr Model

| Feature                | Bohr Model               | Infinite Square Well          |
| ---------------------- | ------------------------ | ----------------------------- |
| Origin of quantisation | Postulate ($L = n\hbar$) | Boundary conditions on $\psi$ |
| Energy scaling         | $E_n \propto -1/n^2$     | $E_n \propto n^2$             |
| Ground state           | $E_1 = -13.6$ eV         | $E_1 = h^2/(8mL^2)$           |
| Angular momentum       | $L = n\hbar$             | Not defined (1D)              |
| Validity               | Hydrogen-like atoms only | General confinement           |

The Bohr model and the infinite square well both give quantised energy levels, but the **mechanism**
Is fundamentally different. The Bohr model imposes quantisation as an axiom; in wave mechanics,
Quantisation **emerges ** from the requirement that the wave function satisfy boundary Conditions.
This is the deeper insight of quantum mechanics.

### Probability Density Plots

For the first three states:

- **$n = 1$:** $|\psi_1(x)|^2 = (2/L)\sin^2(\pi x/L)$. Maximum probability at the centre
  ($x = L/2$). No nodes inside the box.
- **$n = 2$:** $|\psi_2(x)|^2 = (2/L)\sin^2(2\pi x/L)$. A node at $x = L/2$. Maxima at $x = L/4$ and
  $x = 3L/4$. The particle is **never** found at the centre — this has no classical analogue.
- **$n = 3$:** $|\psi_3(x)|^2 = (2/L)\sin^2(3\pi x/L)$. Two nodes at $x = L/3$ and $x = 2L/3$. Three
  maxima.

:::warning Warning (nodes), but the probability of finding the particle in an **interval** of finite
width containing a Node is not zero. When asked "what is the probability at position $x$" the
correct answer is zero For any single point (probability densities are per unit length). Always
integrate over an interval.
:::

## 8. Electron Microscopy

### Resolution Limit: The Abbe Criterion

The resolution of any imaging system — the minimum distance between two points that can be
Distinguished — is limited by diffraction. The **Abbe criterion** states:

$$\boxed{\Delta x \approx \frac◆LB◆\lambda◆RB◆◆LB◆2\sin\theta◆RB◆}$$

Where $\lambda$ is the wavelength of the probing radiation and $\theta$ is the half-angle subtended
By the objective lens. For the best possible resolution (large $\theta$), this simplifies to:

$$\Delta x \sim \frac◆LB◆\lambda◆RB◆◆LB◆2◆RB◆$$

**The key advantage of electron microscopes.** The resolving power is directly proportional to
Wavelength. Electrons can be given very short wavelengths by accelerating them to high energies:

$$\lambda_e = \frac◆LB◆h◆RB◆◆LB◆\sqrt{2m_e eV}◆RB◆$$

For $V = 100$ kV: $\lambda_e = 3.7 \times 10^{-12}$ m $= 0.0037$ nm.

Compare with visible light ($\lambda \sim 500$ nm): the electron wavelength is $\sim 10^5$ times
Smaller, so the theoretical resolution is $\sim 10^5$ times better.

### TEM vs SEM

| Feature              | TEM (Transmission)                        | SEM (Scanning)                            |
| -------------------- | ----------------------------------------- | ----------------------------------------- |
| Principle            | Electrons transmitted through thin sample | Electrons scattered from surface          |
| Image                | 2D projection of internal structure       | 3D surface topography                     |
| Sample               | Must be very thin ($\lt 100$ nm)          | Can be bulk, coated with conductive layer |
| Resolution           | $\sim 0.1$ nm                             | $\sim 1$ nm                               |
| Accelerating voltage | 100--300 kV                               | 1--30 kV                                  |

### Accelerating Voltage for a Given Resolution

To achieve a resolution of $\Delta x$We need $\lambda \lesssim 2\Delta x$:

$$\frac◆LB◆h◆RB◆◆LB◆\sqrt{2m_e eV}◆RB◆ \leq 2\Delta x$$

Solving for $V$:

$$\sqrt{2m_e eV} \geq \frac◆LB◆h◆RB◆◆LB◆2\Delta x◆RB◆$$

$$2m_e eV \geq \frac◆LB◆h^2◆RB◆◆LB◆4(\Delta x)^2◆RB◆$$

$$\boxed{V \geq \frac◆LB◆h^2◆RB◆◆LB◆8m_e e(\Delta x)^2◆RB◆}$$

This gives the minimum accelerating voltage needed to achieve a target resolution, neglecting lens
Aberrations (which in practice further limit resolution).

## Problem Set

<details>
<summary>Problem 1</summary>
The work function of sodium is $2.28$ eV. Calculate: (a) the threshold frequency, (b) the maximum
Kinetic energy of photoelectrons when light of frequency $8.0 \times 10^{14}$ Hz is incident.

**Answer.** (a)
$f_0 = \phi/h = 2.28 \times 1.60 \times 10^{-19} / 6.63 \times 10^{-34} = 5.50 \times 10^{14}$ Hz.

(b)
$E_{k,\max} = hf - \phi = 6.63 \times 10^{-34} \times 8.0 \times 10^{14} - 2.28 \times 1.60 \times 10^{-19} = 5.304 \times 10^{-19} - 3.648 \times 10^{-19} = 1.66 \times 10^{-19}$
J $= 1.04$ eV.

<b>If you get this wrong, revise:</b> [Einstein's Explanation](#einsteins-explanation-1905)

</details>

<details>
<summary>Problem 2</summary>
The stopping potential for photoelectrons emitted from a metal illuminated by light of wavelength
400 nm is 1.2 V. Calculate the work function.

**Answer.** $E_{k,\max} = eV_s = 1.2$ eV $= 1.92 \times 10^{-19}$ J.

Photon energy:
$E = hc/\lambda = 6.63 \times 10^{-34} \times 3.0 \times 10^8 / 400 \times 10^{-9} = 4.97 \times 10^{-19}$
J $= 3.11$ eV.

$\phi = 3.11 - 1.2 = 1.91$ eV.

<b>If you get this wrong, revise:</b> [Stopping Potential](#stopping-potential)

</details>

<details>
<summary>Problem 3</summary>
Calculate the de Broglie wavelength of an electron moving at $2.0 \times 10^6$ m s$^{-1}$.

**Answer.**
$\lambda = h/(m_e v) = 6.63 \times 10^{-34} / (9.11 \times 10^{-31} \times 2.0 \times 10^6) = 6.63 \times 10^{-34} / 1.822 \times 10^{-24} = 3.64 \times 10^{-10}$
M $= 0.364$ nm.

<b>If you get this wrong, revise:</b> [de Broglie's Hypothesis](#de-broglies-hypothesis-1924)

</details>

<details>
<summary>Problem 4</summary>
An electron in a hydrogen atom transitions from $n = 4$ to $n = 2$. Calculate the wavelength of the
Emitted photon.

**Answer.** $E_4 = -13.6/16 = -0.85$ eV. $E_2 = -13.6/4 = -3.40$ eV. $\Delta E = 3.40 - 0.85 = 2.55$
EV $= 4.08 \times 10^{-19}$ J.

$\lambda = hc/\Delta E = 6.63 \times 10^{-34} \times 3.0 \times 10^8 / 4.08 \times 10^{-19} = 4.87 \times 10^{-7}$
M $= 487$ nm (blue-green, Balmer series).

<b>If you get this wrong, revise:</b> [Photon Emission](#photon-emission)

</details>

<details>
<summary>Problem 5</summary>
Light of wavelength 200 nm is incident on a zinc plate with work function 4.30 eV. Determine whether
Photoelectrons are emitted and, if so, calculate their maximum kinetic energy.

**Answer.** Photon energy $= hc/\lambda = 1240\,\mathrm{eV nm}/200\,\mathrm{nm} = 6.20$ eV.

Since $6.20 \gt 4.30$Photoelectrons are emitted. $E_{k,\max} = 6.20 - 4.30 = 1.90$ eV.

<b>If you get this wrong, revise:</b> [Threshold Frequency](#threshold-frequency)

</details>

<details>
<summary>Problem 6</summary>
Calculate the de Broglie wavelength of a neutron moving with kinetic energy $0.025$ eV (thermal
Neutron).

**Answer.** $E_k = 0.025 \times 1.60 \times 10^{-19} = 4.0 \times 10^{-21}$ J.
$v = \sqrt{2E_k/m_n} = \sqrt◆LB◆2 \times 4.0 \times 10^{-21} / 1.675 \times 10^{-27}◆RB◆ = \sqrt◆LB◆4.78 \times 10^6◆RB◆ = 2186$
M s$^{-1}$.

$\lambda = h/(m_n v) = 6.63 \times 10^{-34} / (1.675 \times 10^{-27} \times 2186) = 1.82 \times 10^{-10}$
M $= 0.182$ nm.

<b>If you get this wrong, revise:</b> [de Broglie's Hypothesis](#de-broglies-hypothesis-1924)

</details>

<details>
<summary>Problem 7</summary>
Explain why the photoelectric effect cannot be explained by classical wave theory.

**Answer.** Classical wave theory predicts: (1) energy is proportional to intensity, so sufficient
Intensity at any frequency should eventually eject electrons — but there is a frequency threshold
Below which no electrons are emitted regardless of intensity. (2) Energy accumulates over time, so
There should be a time delay at low intensities — but emission is instantaneous. (3) Maximum kinetic
Energy should depend on intensity — but on frequency. These observations are explained by The photon
model: each photon has energy $hf$; one photon interacts with one electron; the photon Must have
enough energy ($hf \gt \phi$) to liberate the electron.

<b>If you get this wrong, revise:</b> [Why wave theory fails](#threshold-frequency)

</details>

<details>
<summary>Problem 8</summary>
An electron is accelerated through a potential difference of 500 V. Calculate its de Broglie
Wavelength.

**Answer.**
$\lambda = \frac◆LB◆h◆RB◆◆LB◆\sqrt{2m_e eV}◆RB◆ = \frac◆LB◆6.63 \times 10^{-34}◆RB◆◆LB◆\sqrt{2 \times 9.11 \times 10^{-31} \times 1.60 \times 10^{-19} \times 500}◆RB◆ = \frac◆LB◆6.63 \times 10^{-34}◆RB◆◆LB◆\sqrt{1.458 \times 10^{-46}}◆RB◆ = \frac◆LB◆6.63 \times 10^{-34}◆RB◆◆LB◆1.208 \times 10^{-23}◆RB◆ = 5.49 \times 10^{-11}$
M $= 0.0549$ nm.

<b>If you get this wrong, revise:</b>
[Calculating Electron Wavelength](#calculating-electron-wavelength)

</details>

<details>
<summary>Problem 9</summary>
A hydrogen atom in the ground state ($n = 1$) absorbs a photon of wavelength 97.3 nm. To which
Energy level does the electron jump?

**Answer.** Photon energy $= hc/\lambda = 1240/97.3 = 12.75$ eV.

$E_1 = -13.6$ eV. $E_{\mathrm{final}} = -13.6 + 12.75 = -0.85$ eV.

$E_n = -13.6/n^2 = -0.85$. $n^2 = 13.6/0.85 = 16$. $n = 4$.

<b>If you get this wrong, revise:</b> [Photon Absorption](#photon-absorption)

</details>

<details>
<summary>Problem 10</summary>
In a photoelectric effect experiment, the maximum kinetic energy of photoelectrons is plotted
Against the frequency of incident light. The graph has a gradient of $4.0 \times 10^{-15}$ J s and a
$y$-intercept of $-3.2 \times 10^{-19}$ J. Calculate Planck's constant and the work function.

**Answer.** From $E_{k,\max} = hf - \phi$: gradient $= h = 4.0 \times 10^{-15}$ J s.

$y$-intercept $= -\phi = -3.2 \times 10^{-19}$ J. $\phi = 3.2 \times 10^{-19}$ J $= 2.0$ eV.

<b>If you get this wrong, revise:</b> [Graphical analysis](#stopping-potential)

</details>

<details>
<summary>Problem 11</summary>
An electron is confined within an atom of diameter approximately $1.0 \times 10^{-10}$ m. Use the
Heisenberg uncertainty principle to estimate the minimum uncertainty in its velocity.

**Answer.**

1. Position uncertainty: $\Delta x \approx 1.0 \times 10^{-10}$ m.
2. From $\Delta x \cdot \Delta p \geq \hbar/2$:

$$\Delta p \geq \frac◆LB◆1.055 \times 10^{-34}◆RB◆◆LB◆2 \times 1.0 \times 10^{-10}◆RB◆ = 5.28 \times 10^{-25}\,\mathrm{kg m s}^{-1}$$

3. Since $\Delta p = m_e \Delta v$:

$$\Delta v \geq \frac◆LB◆5.28 \times 10^{-25}◆RB◆◆LB◆9.11 \times 10^{-31}◆RB◆ = 5.80 \times 10^5\,\mathrm{m s}^{-1}$$

The minimum uncertainty in velocity is $5.8 \times 10^5$ m s$^{-1}$.

<b>If you get this wrong, revise:</b>
[Heisenberg Uncertainty Principle](#heisenberg-uncertainty-principle)

</details>

<details>
<summary>Problem 12</summary>
Starting from the Bohr postulates, derive the Bohr radius $a_0$ and the ground state energy of
Hydrogen.

**Answer.**

From the quantised angular momentum postulate, $m_e v r = n\hbar$And the Coulomb-centripetal force
Balance, $ke^2/r^2 = m_e v^2/r$:

1. From the force balance: $m_e v^2 = ke^2/r$.
2. From quantisation: $v = n\hbar/(m_e r)$.
3. Substituting into the force balance:

$$m_e \frac◆LB◆n^2\hbar^2◆RB◆◆LB◆m_e^2 r^2◆RB◆ = \frac{ke^2}{r} \implies \frac◆LB◆n^2\hbar^2◆RB◆◆LB◆m_e r◆RB◆ = ke^2$$

$$r_n = \frac◆LB◆n^2\hbar^2◆RB◆◆LB◆m_e ke^2◆RB◆$$

For $n = 1$The Bohr radius:

$$a_0 = \frac◆LB◆\hbar^2◆RB◆◆LB◆m_e ke^2◆RB◆ = \frac◆LB◆(1.055 \times 10^{-34})^2◆RB◆◆LB◆9.11 \times 10^{-31} \times 8.99 \times 10^9 \times (1.60 \times 10^{-19})^2◆RB◆ = 5.29 \times 10^{-11}\,\mathrm{m} = 0.0529\,\mathrm{nm}$$

4. Total energy $E_n = -ke^2/(2r_n)$. For $n = 1$:

$$E_1 = -\frac{ke^2}{2a_0} = -\frac◆LB◆(8.99 \times 10^9)(1.60 \times 10^{-19})^2◆RB◆◆LB◆2 \times 5.29 \times 10^{-11}◆RB◆ = -2.18 \times 10^{-18}\,\mathrm{J} = -13.6\,\mathrm{eV}$$

<b>If you get this wrong, revise:</b> [Derivation of the Bohr Model](#derivation-of-the-bohr-model)

</details>

<details>
<summary>Problem 13</summary>
In a Franck-Hertz experiment with mercury vapour, the anode current shows periodic dips at
Accelerating voltages of 4.9 V, 9.8 V, and 14.7 V. Calculate the energy of the first excited state
Of mercury (relative to the ground state) and the wavelength of the photon emitted when the atom
De-excites.

**Answer.**

1. The spacing between consecutive dips is $9.8 - 4.9 = 4.9$ V, which corresponds to an energy of
   $4.9$ eV. This is the energy of the first excited state above the ground state.

2. Wavelength of the emitted photon:

$$\lambda = \frac◆LB◆hc◆RB◆◆LB◆\Delta E◆RB◆ = \frac◆LB◆1240\,\mathrm{eV nm}◆RB◆◆LB◆4.9\,\mathrm{eV}◆RB◆ = 253\,\mathrm{nm}$$

This is in the ultraviolet region, consistent with the observed UV emission.

<b>If you get this wrong, revise:</b> [Franck-Hertz Experiment](#franck-hertz-experiment-1914)

</details>

<details>
<summary>Problem 14</summary>
An electron is confined to a one-dimensional infinite potential well of width $L = 1.0$ nm. Calculate
The energies of the ground state ($n = 1$) and the first three excited states ($n = 2, 3, 4$).

**Answer.**

Using $E_n = n^2 h^2 / (8m_e L^2)$:

$$E_1 = \frac◆LB◆(6.63 \times 10^{-34})^2◆RB◆◆LB◆8 \times 9.11 \times 10^{-31} \times (1.0 \times 10^{-9})^2◆RB◆ = \frac◆LB◆4.396 \times 10^{-67}◆RB◆◆LB◆7.288 \times 10^{-48}◆RB◆ = 6.03 \times 10^{-20}\,\mathrm{J} = 0.377\,\mathrm{eV}$$

Since $E_n \propto n^2$:

- $E_1 = 0.377$ eV
- $E_2 = 4 \times 0.377 = 1.51$ eV
- $E_3 = 9 \times 0.377 = 3.39$ eV
- $E_4 = 16 \times 0.377 = 6.03$ eV

<b>If you get this wrong, revise:</b>
[Electron in a Box](#electron-in-a-box-1d-infinite-potential-well)

</details>

<details>
<summary>Problem 15</summary>
Calculate the shortest wavelength in the Lyman series of hydrogen. What type of radiation is this?

**Answer.**

The shortest wavelength in the Lyman series corresponds to the transition from $n = \infty$ to
$n = 1$ (the series limit):

$$\frac◆LB◆1◆RB◆◆LB◆\lambda_{\min}◆RB◆ = R\left(\frac{1}{1^2} - \frac◆LB◆1◆RB◆◆LB◆\infty^2◆RB◆\right) = R = 1.097 \times 10^7\,\mathrm{m}^{-1}$$

$$\lambda_{\min} = \frac{1}{R} = \frac◆LB◆1◆RB◆◆LB◆1.097 \times 10^7◆RB◆ = 9.12 \times 10^{-8}\,\mathrm{m} = 91.2\,\mathrm{nm}$$

This is in the far ultraviolet region, well below the visible range ($380$--$700$ nm).

<b>If you get this wrong, revise:</b> [Series Limits](#series-limits)

</details>

<details>
<summary>Problem 16</summary>
An electron is in the $n = 2$ state of a one-dimensional infinite potential well of width $L$.
Calculate the probability of finding the electron in the first quarter of the well ($0 \leq x \leq L/4$).

**Answer.**

For $n = 2$: $\psi_2(x) = \sqrt{2/L}\sin(2\pi x/L)$.

$$P = \int_0^{L/4} |\psi_2(x)|^2\,dx = \frac{2}{L}\int_0^{L/4}\sin^2\left(\frac◆LB◆2\pi x◆RB◆◆LB◆L◆RB◆\right)dx$$

Using $\sin^2\theta = (1 - \cos 2\theta)/2$:

$$P = \frac{2}{L}\int_0^{L/4}\frac◆LB◆1 - \cos(4\pi x/L)◆RB◆◆LB◆2◆RB◆\,dx = \frac{1}{L}\left[x - \frac◆LB◆L◆RB◆◆LB◆4\pi◆RB◆\sin\left(\frac◆LB◆4\pi x◆RB◆◆LB◆L◆RB◆\right)\right]_0^{L/4}$$

Evaluating at $x = L/4$:

$$P = \frac{1}{L}\left[\frac{L}{4} - \frac◆LB◆L◆RB◆◆LB◆4\pi◆RB◆\sin(\pi)\right] = \frac{1}{L} \cdot \frac{L}{4} = \frac{1}{4}$$

The probability is exactly $1/4$ (or $25\%$). This makes sense by symmetry: for $n = 2$The
Probability density has two identical lobes, and the first quarter contains exactly half of the
First lobe.

<b>If you get this wrong, revise:</b> [Born Interpretation](#born-interpretation)

</details>

<details>
<summary>Problem 17</summary>
An electron microscope is designed to achieve a resolution of $0.1$ nm. Calculate the minimum
Accelerating voltage required, assuming the Abbe criterion with $\sin\theta \approx 1$.

**Answer.**

From the Abbe criterion, we need
$\lambda \leq 2\Delta x = 2 \times 0.1 \times 10^{-9} = 2.0 \times 10^{-10}$ m.

Using $\lambda = h/\sqrt{2m_e eV}$:

$$V = \frac◆LB◆h^2◆RB◆◆LB◆2m_e e \lambda^2◆RB◆ = \frac◆LB◆(6.63 \times 10^{-34})^2◆RB◆◆LB◆2 \times 9.11 \times 10^{-31} \times 1.60 \times 10^{-19} \times (2.0 \times 10^{-10})^2◆RB◆$$

$$V = \frac◆LB◆4.396 \times 10^{-67}◆RB◆◆LB◆2 \times 9.11 \times 10^{-31} \times 1.60 \times 10^{-19} \times 4.0 \times 10^{-20}◆RB◆$$

$$V = \frac◆LB◆4.396 \times 10^{-67}◆RB◆◆LB◆1.167 \times 10^{-68}◆RB◆ = 37.7\,\mathrm{V}$$

In practice, a much higher voltage ($\gt 100$ kV) is used because lens aberrations further limit the
Resolution, but the diffraction-limited minimum is approximately $38$ V.

<b>If you get this wrong, revise:</b>
[Accelerating Voltage for a Given Resolution](#accelerating-voltage-for-a-given-resolution)

</details>

<details>
<summary>Problem 18</summary>
Calculate the de Broglie wavelength of a C-60 fullerene molecule (buckminsterfullerene) with a
Mass of $1.20 \times 10^{-24}$ kg moving at $220$ m s$^{-1}$ (typical velocity in a molecular beam
Experiment at $\sim 900$ K).

**Answer.**

$$\lambda = \frac{h}{mv} = \frac◆LB◆6.63 \times 10^{-34}◆RB◆◆LB◆1.20 \times 10^{-24} \times 220◆RB◆ = \frac◆LB◆6.63 \times 10^{-34}◆RB◆◆LB◆2.64 \times 10^{-22}◆RB◆ = 2.51 \times 10^{-12}\,\mathrm{m} = 0.00251\,\mathrm{nm}$$

This is comparable to the spacing between atoms in a crystal lattice. Remarkably, interference
Patterns for C-60 have been observed experimentally (Arndt et al., 1999), confirming wave-particle
Duality for molecules composed of 60 carbon atoms.

<b>If you get this wrong, revise:</b> [de Broglie's Hypothesis](#de-broglies-hypothesis-1924)

</details>

## Common Pitfalls

1. Rounding intermediate answers too early, which compounds errors in multi-step calculations.

2. Confusing displacement with distance, or velocity with speed, particularly in graphs and
   calculations.

3. Forgetting to include units in final answers, especially when working with derived units like
   $\text{N}\,\text{kg}^{-1}\,\text{m}^2$.

4. Neglecting air resistance or assuming ideal conditions when the question specifies a real-world
   scenario.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

