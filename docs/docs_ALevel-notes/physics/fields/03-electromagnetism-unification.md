---
title: Electromagnetism Unification
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: electromagnetism-unification
---

## Electromagnetism Unification

:::info Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4 :::

## 1. Maxwell's Equations (Integral Form)

Maxwell's four equations unify electricity and magnetism into a single coherent theory. They are
among the most important equations in physics.

### Gauss's Law for Electricity

$$\oint \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\text{enclosed}}}{\varepsilon_0}$$

**Meaning.** The total electric flux through any closed surface equals the total charge enclosed,
divided by $\varepsilon_0$. Electric charges are the sources (and sinks) of electric field lines.

### Gauss's Law for Magnetism

$$\oint \mathbf{B} \cdot d\mathbf{A} = 0$$

**Meaning.** The total magnetic flux through any closed surface is zero. There are **no magnetic
monopoles** — magnetic field lines always form closed loops.

### Faraday's Law

$$\oint \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt}$$

**Meaning.** A changing magnetic flux induces an electromotive force (and hence an electric field)
around a closed loop. This is the mathematical form of Faraday's law of induction.

### Ampere-Maxwell Law

$$\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\text{enclosed}} + \mu_0\varepsilon_0\frac{d\Phi_E}{dt}$$

**Definition.** The displacement current $I_d = \varepsilon_0\,d\Phi_E/dt$ is a quantity
proportional to the rate of change of electric flux through a surface. It is not a flow of charge
but produces a magnetic field in the same way as a real current, ensuring consistency of Ampere's
law for non-steady currents.

**Meaning.** A magnetic field is produced both by electric currents (first term) and by changing
electric fields (second term). Maxwell's addition of the displacement current term
$\mu_0\varepsilon_0\,d\Phi_E/dt$ was the crucial insight that made the theory self-consistent.

**Intuition.** Maxwell noticed a fundamental asymmetry: a changing magnetic field produces an
electric field (Faraday's law), but the original Ampere's law had no corresponding term for a
changing electric field producing a magnetic field. He added the displacement current term to
restore this symmetry — and in doing so, predicted electromagnetic waves.

**Definition.** An electromagnetic wave is a self-propagating transverse wave consisting of
oscillating electric and magnetic fields perpendicular to each other and to the direction of
propagation, travelling at speed $c = 1/\sqrt{\mu_0\varepsilon_0}$ in vacuum.

## 2. Derivation of the Speed of Electromagnetic Waves

Consider electromagnetic waves propagating in free space (no charges, no currents: $Q = 0$,
$I = 0$).

In free space, Maxwell's equations become:

$$\oint \mathbf{E} \cdot d\mathbf{A} = 0 \quad \text{(no charges)}$$
$$\oint \mathbf{B} \cdot d\mathbf{A} = 0 \quad \text{(no monopoles)}$$
$$\oint \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt} \quad \text{(Faraday)}$$
$$\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0\varepsilon_0\frac{d\Phi_E}{dt} \quad \text{(Ampere-Maxwell, no currents)}$$

Consider a plane wave propagating in the $x$-direction, with $\mathbf{E} = E_y\,\hat{\mathbf{j}}$
and $\mathbf{B} = B_z\,\hat{\mathbf{k}}$.

Applying Faraday's law to a rectangular loop in the $xy$-plane:

$$E_y \cdot l = -\frac{d}{dt}(B_z \cdot l \cdot \Delta x)$$

$$E_y = -\frac{\partial B_z}{\partial t}\Delta x$$

In the limit $\Delta x \to 0$: $\frac{\partial E_y}{\partial x} = -\frac{\partial B_z}{\partial t}$
... (i)

Applying the Ampere-Maxwell law to a rectangular loop in the $xz$-plane:

$$B_z \cdot l = \mu_0\varepsilon_0\frac{d}{dt}(E_y \cdot l \cdot \Delta x)$$

$$\frac{\partial B_z}{\partial x} = \mu_0\varepsilon_0\frac{\partial E_y}{\partial t}$$ ... (ii)

Differentiating (i) with respect to $x$ and (ii) with respect to $t$:

$$\frac{\partial^2 E_y}{\partial x^2} = -\frac{\partial^2 B_z}{\partial t \partial x}$$

$$\frac{\partial^2 B_z}{\partial x \partial t} = \mu_0\varepsilon_0\frac{\partial^2 E_y}{\partial t^2}$$

Substituting the second into the first:

$$\frac{\partial^2 E_y}{\partial x^2} = -\mu_0\varepsilon_0\frac{\partial^2 E_y}{\partial t^2}$$

$$\boxed{\frac{\partial^2 E_y}{\partial x^2} = \mu_0\varepsilon_0\frac{\partial^2 E_y}{\partial t^2}}$$

This is the **wave equation** with wave speed:

$$\boxed{c = \frac{1}{\sqrt{\mu_0\varepsilon_0}}}$$

$\square$

Similarly for $B_z$:

$$\frac{\partial^2 B_z}{\partial x^2} = \mu_0\varepsilon_0\frac{\partial^2 B_z}{\partial t^2}}$$

### Calculating $c$

$$c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} = \frac{1}{\sqrt{4\pi \times 10^{-7} \times 8.854 \times 10^{-12}}}$$

$$c = \frac{1}{\sqrt{1.113 \times 10^{-17}}} = \frac{1}{3.337 \times 10^{-9}} = 2.998 \times 10^8 \text{ m s}^{-1}$$

$$\boxed{c \approx 3.00 \times 10^8 \text{ m s}^{-1}}$$

**This was one of the greatest triumphs of theoretical physics.** Maxwell derived the speed of light
from purely electrical and magnetic constants — proving that light is an electromagnetic wave.

**Intuition.** The speed of EM waves is determined by how quickly electric and magnetic fields can
"regenerate" each other. A changing $E$ field creates a changing $B$ field (Ampere-Maxwell), which
creates a changing $E$ field (Faraday), and so on. The rate of this mutual generation is set by
$\mu_0$ and $\varepsilon_0$.

## 3. Properties of Electromagnetic Waves

From Maxwell's equations, EM waves have these properties:

1. **Transverse**: $\mathbf{E}$ and $\mathbf{B}$ are perpendicular to each other and to the
   direction of propagation
2. **Speed**: $c = 1/\sqrt{\mu_0\varepsilon_0}$ in vacuum (independent of frequency)
3. **Relation between fields**: $E = cB$ (the ratio $E/B = c$ is constant)
4. **Self-propagating**: no medium required
5. **Carry energy**: the Poynting vector $\mathbf{S} = \frac{1}{\mu_0}\mathbf{E} \times \mathbf{B}$
   gives the energy flux

## 4. The EM Spectrum as a Unified Phenomenon

All electromagnetic radiation — radio waves, microwaves, infrared, visible light, ultraviolet,
X-rays, and gamma rays — is fundamentally the same phenomenon: oscillating electric and magnetic
fields propagating at speed $c$. The only difference is the frequency (and hence wavelength):

$$c = f\lambda$$

| Band      | $f$ (Hz)                                | Origin                                   |
| --------- | --------------------------------------- | ---------------------------------------- |
| Radio     | $< 3 \times 10^9$                       | Oscillating charges in aerials           |
| Microwave | $10^9$–$10^{12}$                        | Klystrons, molecular rotation            |
| IR        | $10^{12}$–$10^{14}$                     | Molecular vibration                      |
| Visible   | $4 \times 10^{14}$–$7.5 \times 10^{14}$ | Atomic electron transitions              |
| UV        | $10^{15}$–$10^{17}$                     | Electron transitions (outer)             |
| X-ray     | $10^{16}$–$10^{19}$                     | Electron deceleration, inner transitions |
| Gamma     | $> 10^{19}$                             | Nuclear transitions                      |

Maxwell's unification showed that all these phenomena are described by the same four equations. The
quantum nature of EM radiation (photons) would later be explained by Planck and Einstein, but the
classical wave description remains valid and powerful.

:::info Board Note The derivation of $c = 1/\sqrt{\mu_0\varepsilon_0}$ is required by Edexcel and
CIE. AQA and OCR (A) expect you to know the result and its significance but may not require the full
derivation. :::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

Calculate the speed of light from the values of $\mu_0 = 4\pi \times 10^{-7}$ T m A$^{-1}$ and
$\varepsilon_0 = 8.85 \times 10^{-12}$ F m$^{-1}$.

**Answer.**
$c = \frac{1}{\sqrt{4\pi \times 10^{-7} \times 8.85 \times 10^{-12}}} = \frac{1}{\sqrt{1.113 \times 10^{-17}}} = \frac{1}{3.337 \times 10^{-9}} = 2.998 \times 10^8$
m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Calculating $c$](#calculating-c)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

An EM wave in vacuum has an electric field amplitude of 30 V m$^{-1}$. Calculate the magnetic field
amplitude.

**Answer.** $E_0 = cB_0$, so $B_0 = E_0/c = 30/(3.0 \times 10^8) = 1.0 \times 10^{-7}$ T $= 100$ nT.

<b>If you get this wrong, revise:</b>
[Properties of Electromagnetic Waves](#3-properties-of-electromagnetic-waves)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

State Gauss's law for magnetism and explain its physical significance.

**Answer.** $\oint \mathbf{B} \cdot d\mathbf{A} = 0$. This states that the net magnetic flux through
any closed surface is zero, which means there are no magnetic monopoles. Every magnetic field line
that enters a closed surface must also exit it — field lines always form closed loops.

<b>If you get this wrong, revise:</b> [Gauss's Law for Magnetism](#gausss-law-for-magnetism)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

Explain why Maxwell added the displacement current term to Ampere's law and what physical phenomenon
it predicts.

**Answer.** Maxwell noticed that applying the original Ampere's law to a charging capacitor gave
inconsistent results — different surfaces bounded by the same loop gave different values of
$\oint \mathbf{B} \cdot d\mathbf{l}$. He resolved this by adding the term
$\mu_0\varepsilon_0\,d\Phi_E/dt$, representing the magnetic field produced by a changing electric
field. This addition predicted that changing electric fields generate magnetic fields, and combined
with Faraday's law (changing $B$ generates $E$), it predicted self-sustaining electromagnetic waves.

<b>If you get this wrong, revise:</b> [Ampere-Maxwell Law](#ampere-maxwell-law)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

An X-ray has wavelength $0.10$ nm. Calculate its frequency and the electric field amplitude if the
magnetic field amplitude is $1.5\,\mu$T.

**Answer.** $f = c/\lambda = 3.0 \times 10^8 / 1.0 \times 10^{-10} = 3.0 \times 10^{18}$ Hz.

$E_0 = cB_0 = 3.0 \times 10^8 \times 1.5 \times 10^{-6} = 450$ V m$^{-1}$.

<b>If you get this wrong, revise:</b>
[Properties of Electromagnetic Waves](#3-properties-of-electromagnetic-waves)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Explain why electromagnetic waves do not require a medium to propagate, unlike mechanical waves.

**Answer.** EM waves consist of self-sustaining oscillations of electric and magnetic fields. A
changing electric field generates a magnetic field (Ampere-Maxwell law), and a changing magnetic
field generates an electric field (Faraday's law). These fields exist in vacuum — they do not need a
material medium. Mechanical waves require particles to oscillate and transfer energy, hence a medium
is essential.

<b>If you get this wrong, revise:</b>
[Derivation of the Speed of Electromagnetic Waves](#2-derivation-of-the-speed-of-electromagnetic-waves)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

In an EM wave, the electric field is given by $E_y = 60\sin(2\pi \times 10^{10}t - kx)$ V m$^{-1}$.
Calculate: (a) the frequency, (b) the wavelength, (c) the magnetic field amplitude.

**Answer.** (a) $\omega = 2\pi \times 10^{10}$, so $f = 10^{10}$ Hz $= 10$ GHz.

(b) $\lambda = c/f = 3.0 \times 10^8/10^{10} = 0.030$ m $= 3.0$ cm.

(c) $B_0 = E_0/c = 60/(3.0 \times 10^8) = 2.0 \times 10^{-7}$ T $= 200$ nT.

<b>If you get this wrong, revise:</b>
[Properties of Electromagnetic Waves](#3-properties-of-electromagnetic-waves)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

What was the significance of Maxwell's prediction of the speed of EM waves? How was it
experimentally confirmed?

**Answer.** Maxwell showed that EM waves travel at $c = 1/\sqrt{\mu_0\varepsilon_0}$, which matched
the measured speed of light. This proved that light is an electromagnetic wave — unifying optics
with electromagnetism. It was experimentally confirmed by Hertz (1887), who generated and detected
radio waves using oscillating circuits, showing they had the predicted properties (reflection,
refraction, polarisation, speed matching $c$).

<b>If you get this wrong, revise:</b>
[The EM Spectrum as a Unified Phenomenon](#4-the-em-spectrum-as-a-unified-phenomenon)

</p>
</details>
