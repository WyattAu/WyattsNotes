---
title: Wave Properties
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: wave-properties
---

## Wave Properties

:::info Board Coverage
AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2
:::

## 1. Progressive Waves

A **progressive wave** is a disturbance that transfers energy through a medium (or vacuum) without transferring matter. Each particle in the medium oscillates about its equilibrium position.

### Key Definitions

- **Displacement** $y$: the distance of a point on the wave from its equilibrium position (m)
- **Amplitude** $A$: the maximum displacement from equilibrium (m)
- **Wavelength** $\lambda$: the distance between two consecutive points in phase — e.g., crest-to-crest (m)
- **Period** $T$: the time for one complete oscillation (s)
- **Frequency** $f$: the number of complete oscillations per unit time (Hz)
- **Phase** $\phi$: a measure of the position in the cycle of oscillation (rad)

$$f = \frac{1}{T}$$

### The Wave Equation

$$\boxed{v = f\lambda}$$

**Derivation.** Consider a wave travelling at speed $v$. In one period $T$, the wave advances by exactly one wavelength $\lambda$ (the source completes one full oscillation, producing one complete wave cycle):

$$v = \frac{\text{distance travelled}}{\text{time taken}} = \frac{\lambda}{T} = \lambda \cdot \frac{1}{T} = f\lambda$$

$\square$

**Intuition.** If you shake a rope at 2 Hz with a wavelength of 1.5 m, the crests travel at 3 m/s. Faster shaking or longer waves both make the wave move faster.

### Mathematical Description of a Progressive Wave

A sinusoidal progressive wave travelling in the $+x$ direction is described by:

$$y(x,t) = A\sin(kx - \omega t + \phi_0)$$

where:

- $k = \frac{2\pi}{\lambda}$ is the **wave number** (rad m$^{-1}$)
- $\omega = 2\pi f = \frac{2\pi}{T}$ is the **angular frequency** (rad s$^{-1}$)
- $\phi_0$ is the initial phase

**Proof that $v = f\lambda$ from the wave function.** A point of constant phase satisfies $kx - \omega t = \text{const}$. Differentiating: $k\frac{dx}{dt} - \omega = 0$, so:

$$v = \frac{dx}{dt} = \frac{\omega}{k} = \frac{2\pi f}{2\pi/\lambda} = f\lambda$$

$\square$

## 2. Transverse and Longitudinal Waves

### Transverse Waves

The oscillations are **perpendicular** to the direction of energy propagation.

- Electromagnetic waves (light, radio, X-rays)
- Waves on a string
- Water waves (approximately, for small amplitudes)

### Longitudinal Waves

The oscillations are **parallel** to the direction of energy propagation.

- Sound waves
- Pressure waves in springs

Longitudinal waves have **compressions** (regions of high pressure, where particles bunch together) and **rarefactions** (regions of low pressure, where particles spread apart).

:::warning Common Pitfall
Electromagnetic waves are transverse but do not require a medium — they propagate through vacuum via oscillating electric and magnetic fields. Sound waves are longitudinal and require a medium.
:::

:::tip Exam Technique
When asked to sketch a longitudinal wave, draw a series of vertical lines representing air molecules. Show compressions (closely spaced) and rarefactions (widely spaced). Label both.

Alternatively, plot displacement vs position — the graph looks sinusoidal, but positive displacement means particles moved to the right (in the direction of propagation), not upward.
:::

## 3. Polarisation

**Definition.** **Polarisation** is the restriction of the oscillation direction of a transverse wave to a single plane.

### Proof of Malus's Law

Consider unpolarised light of intensity $I_0$ incident on a polarising filter (analyser) whose transmission axis makes an angle $\theta$ with the polarisation direction of the incoming light.

The **electric field** of the incoming polarised wave can be resolved into components parallel and perpendicular to the analyser's transmission axis:

$$E_{\parallel} = E_0 \cos\theta, \qquad E_{\perp} = E_0 \sin\theta$$

Only the parallel component is transmitted. The transmitted intensity is:

$$I = \frac{1}{2}\varepsilon_0 c E_{\parallel}^2 = \frac{1}{2}\varepsilon_0 c E_0^2 \cos^2\theta = I_0 \cos^2\theta$$

$$\boxed{I = I_0 \cos^2\theta}$$

where $I_0 = \frac{1}{2}\varepsilon_0 c E_0^2$ is the intensity of the polarised light incident on the analyser.

**Intuition.** When $\theta = 0$, all light passes through. When $\theta = 90°$, no light passes. At $\theta = 45°$, the intensity is halved. This is a direct consequence of the vector nature of the electric field.

### Polarisation by Reflection (Brewster's Angle)

When light reflects from a dielectric surface, the reflected ray is partially polarised. At **Brewster's angle** $\theta_B$, the reflected light is fully polarised perpendicular to the plane of incidence:

$$\tan\theta_B = n_2/n_1$$

:::info Board Note
AQA and OCR (A) require Malus's law. CIE focuses on polarisation by filters. Edexcel covers qualitative polarisation.
:::

## 4. The Electromagnetic Spectrum

All EM waves travel at $c = 3.00 \times 10^8$ m s$^{-1}$ in vacuum and are transverse. They are distinguished by wavelength (equivalently, frequency).

| Region        | Wavelength Range | Typical Use                      |
| ------------- | ---------------- | -------------------------------- |
| Radio waves   | $> 1$ m          | Broadcasting, communication      |
| Microwaves    | 1 mm – 1 m       | Cooking, satellite signals       |
| Infrared      | 700 nm – 1 mm    | Thermal imaging, remote controls |
| Visible light | 400 – 700 nm     | Human vision                     |
| Ultraviolet   | 10 – 400 nm      | Sterilisation, fluorescence      |
| X-rays        | 0.01 – 10 nm     | Medical imaging                  |
| Gamma rays    | $< 0.01$ nm      | Cancer treatment, nuclear decay  |

All EM waves are produced by accelerating charges. In order of increasing frequency: radio (oscillating currents in aerials), microwave (klystrons/magnetrons), infrared/visible/UV (atomic electron transitions), X-rays (electron deceleration), gamma rays (nuclear transitions).

:::tip Exam Technique
Memorise the order: **R**adio, **M**icrowave, **I**nfrared, **V**isible, **U**ltraviolet, **X**-ray, **G**amma. Mnemonic: "**R**eal **M**en **I**n **V**ietnam **U**se **X**-ray **G**uns."
:::

## 5. Intensity and Amplitude

**Definition.** The **intensity** $I$ of a wave is the power per unit area:

$$I = \frac{P}{A}$$

with SI units W m$^{-2}$.

### Proof that $I \propto A^2$ for a 2D Wave

Consider a sinusoidal wave on a string. The power transmitted past a point is the rate at which the transverse force does work:

$$P = F_{\text{transverse}} \times v_{\text{transverse}}$$

For a wave $y = A\sin(kx - \omega t)$, the transverse velocity is:

$$v_y = \frac{\partial y}{\partial t} = -A\omega\cos(kx - \omega t)$$

The transverse component of tension is (for small amplitudes):

$$F_y \approx -T\frac{\partial y}{\partial x} = -TAk\cos(kx - \omega t)$$

The instantaneous power is:

$$P = F_y \cdot v_y = TAk \cdot A\omega \cos^2(kx - \omega t) = TA^2 k\omega \cos^2(kx - \omega t)$$

The average power over one cycle (since $\langle\cos^2\rangle = 1/2$):

$$\langle P \rangle = \frac{1}{2}TA^2 k\omega$$

Since $v = \omega/k$, we have $k\omega = \omega^2/v$. Also, for a string, $v = \sqrt{T/\mu}$ where $\mu$ is the mass per unit length, so $T = \mu v^2$:

$$\langle P \rangle = \frac{1}{2}\mu v^2 A^2 \cdot \frac{\omega^2}{v} = \frac{1}{2}\mu v \omega^2 A^2$$

The intensity is power per unit... but for a string wave, the "intensity" concept maps to power directly. The key result is:

$$\boxed{I \propto A^2}$$

For electromagnetic waves, the intensity is:

$$I = \frac{1}{2}\varepsilon_0 c E_0^2$$

which also shows $I \propto A^2$ (where $A$ is the electric field amplitude $E_0$).

**Intuition.** Double the amplitude and you quadruple the energy carried. This is analogous to kinetic energy ($E_k = \frac{1}{2}mv^2$): double the speed and you quadruple the energy. The wave amplitude plays the same role as "speed" for the oscillating particles.

### Inverse Square Law for Point Sources

For a wave spreading uniformly from a point source in 3D:

$$I = \frac{P}{4\pi r^2}$$

At distance $r$, the power is spread over a sphere of area $4\pi r^2$. Doubling the distance quarters the intensity.

$$I_1 r_1^2 = I_2 r_2^2$$

## 6. Phase and Phase Difference

Two points on a wave are **in phase** if they have the same displacement and are moving in the same direction. They are in **antiphase** (completely out of phase) if their displacements are equal and opposite.

The **phase difference** between two points separated by distance $\Delta x$ is:

$$\Delta\phi = \frac{2\pi}{\lambda}\Delta x$$

**Special cases:**

- In phase: $\Delta\phi = 0, 2\pi, 4\pi, \ldots$ (integer multiples of $2\pi$)
- Antiphase: $\Delta\phi = \pi, 3\pi, 5\pi, \ldots$ (odd multiples of $\pi$)

:::tip Exam Technique
Phase difference questions often require you to identify two points on a wave graph and calculate $\Delta x$. Then use $\Delta\phi = 360° \times \Delta x / \lambda$ (using degrees) or $\Delta\phi = 2\pi \Delta x / \lambda$ (using radians). Be consistent with units.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

A sound wave has frequency 440 Hz and wavelength 0.78 m. Calculate the speed of sound.

**Answer.** $v = f\lambda = 440 \times 0.78 = 343$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [The Wave Equation](#the-wave-equation)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

A radio station broadcasts at 97.4 MHz. The speed of light is $3.00 \times 10^8$ m s$^{-1}$. Calculate the wavelength.

**Answer.** $\lambda = \frac{c}{f} = \frac{3.00 \times 10^8}{97.4 \times 10^6} = 3.08$ m.

<b>If you get this wrong, revise:</b> [The Wave Equation](#the-wave-equation)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

Unpolarised light of intensity $I_0$ passes through two polarising filters. The first filter's axis is vertical. The second filter's axis is at $30°$ to the vertical. What is the intensity of the transmitted light?

**Answer.** After the first filter, the light is vertically polarised with intensity $I_0/2$ (unpolarised light has equal components in all directions; only one direction passes).

After the second filter: $I = \frac{I_0}{2}\cos^2 30° = \frac{I_0}{2} \times \frac{3}{4} = \frac{3I_0}{8}$.

<b>If you get this wrong, revise:</b> [Proof of Malus's Law](#proof-of-maluss-law)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

Two points on a wave are separated by 0.15 m. The wavelength is 0.60 m. Calculate the phase difference in (a) radians and (b) degrees.

**Answer.** (a) $\Delta\phi = \frac{2\pi}{0.60} \times 0.15 = \frac{\pi}{2}$ rad.

(b) $\Delta\phi = \frac{0.15}{0.60} \times 360° = 90°$.

<b>If you get this wrong, revise:</b> [Phase and Phase Difference](#6-phase-and-phase-difference)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

A wave on a string has amplitude 5.0 mm and intensity 0.80 W. If the amplitude is increased to 15 mm, what is the new intensity?

**Answer.** $I \propto A^2$, so $I_2/I_1 = (A_2/A_1)^2 = (15/5)^2 = 9$. $I_2 = 9 \times 0.80 = 7.2$ W.

<b>If you get this wrong, revise:</b> [Intensity and Amplitude](#5-intensity-and-amplitude)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

A point source emits 50 W of sound power. Calculate the intensity at a distance of 8.0 m from the source.

**Answer.** $I = \frac{P}{4\pi r^2} = \frac{50}{4\pi(64)} = \frac{50}{804} = 0.0622$ W m$^{-2}$.

<b>If you get this wrong, revise:</b> [Inverse Square Law for Point Sources](#inverse-square-law-for-point-sources)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

A light source has intensity $I_0$ at 2.0 m. At what distance is the intensity $I_0/9$?

**Answer.** $I_1 r_1^2 = I_2 r_2^2$. $I_0 \times 4 = \frac{I_0}{9} \times r_2^2$. $r_2^2 = 36$. $r_2 = 6.0$ m.

<b>If you get this wrong, revise:</b> [Inverse Square Law for Point Sources](#inverse-square-law-for-point-sources)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

Polarised light of intensity 120 W m$^{-2}$ is incident on an analyser at $60°$ to the polarisation direction. Calculate the transmitted intensity.

**Answer.** $I = 120 \cos^2 60° = 120 \times 0.25 = 30$ W m$^{-2}$.

<b>If you get this wrong, revise:</b> [Proof of Malus's Law](#proof-of-maluss-law)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

A wave is described by $y = 0.03\sin(2.5x - 200t)$ m. Find: (a) the amplitude, (b) the wave number, (c) the angular frequency, (d) the wavelength, (e) the frequency, (f) the wave speed.

**Answer.** (a) $A = 0.03$ m. (b) $k = 2.5$ rad m$^{-1}$. (c) $\omega = 200$ rad s$^{-1}$. (d) $\lambda = 2\pi/k = 2\pi/2.5 = 2.51$ m. (e) $f = \omega/(2\pi) = 200/(2\pi) = 31.8$ Hz. (f) $v = f\lambda = 31.8 \times 2.51 = 79.9$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Mathematical Description of a Progressive Wave](#mathematical-description-of-a-progressive-wave)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

Explain why sound waves cannot be polarised but light waves can.

**Answer.** Polarisation restricts oscillation to a single plane, which is only meaningful for transverse waves (where oscillations are perpendicular to propagation). Sound waves are longitudinal — the oscillations are already along the direction of propagation, so there is no "plane" to restrict. Light waves are transverse, with electric and magnetic fields perpendicular to the direction of travel, so their oscillation direction can be restricted.

<b>If you get this wrong, revise:</b> [Transverse and Longitudinal Waves](#2-transverse-and-longitudinal-waves)

</p>
</details>
