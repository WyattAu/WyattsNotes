---
title: Wave Properties
description:
description: >-
  A-Level Physics notes on Wave Properties: 1. Progressive Waves; Key Definitions; The Wave Equation; Real-World Application: Seismic Waves.
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: wave-properties
---

## Wave Properties

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

<PhetSimulation simulationId="waves-on-a-string" title="Waves on a String" />

Explore the simulation above to develop intuition for this topic.

## 1. Progressive Waves

A **progressive wave** is a disturbance that transfers energy through a medium (or vacuum) without
transferring matter. Each particle in the medium oscillates about its equilibrium position.

### Key Definitions

- **Displacement** $y$: the distance of a point on the wave from its equilibrium position (m)
- **Amplitude** $A$: the maximum displacement from equilibrium (m)
- **Wavelength** $\lambda$: the distance between two consecutive points in phase — e.g.,
  crest-to-crest (m)
- **Period** $T$: the time for one complete oscillation (s)
- **Frequency** $f$: the number of complete oscillations per unit time (Hz)
- **Phase** $\phi$: a measure of the position in the cycle of oscillation (rad)

$$f = \frac{1}{T}$$

### The Wave Equation

$$\boxed{v = f\lambda}$$

**Derivation.** Consider a wave travelling at speed $v$. In one period $T$, the wave advances by
exactly one wavelength $\lambda$ (the source completes one full oscillation, producing one complete
wave cycle):

$$v = \frac{\mathrm{distance travelled}}{\mathrm{time taken}} = \frac{\lambda}{T} = \lambda \cdot \frac{1}{T} = f\lambda$$

$\square$

**Intuition.** If you shake a rope at 2 Hz with a wavelength of 1.5 m, the crests travel at 3 m/s.
Faster shaking or longer waves both make the wave move faster.

### Real-World Application: Seismic Waves

When an earthquake occurs, seismic waves carry energy through the Earth. **P-waves** (primary waves)
are longitudinal compressional waves that travel fastest (5 to 8 km/s through the crust) and can
pass through solids and liquids. **S-waves** (secondary waves) are transverse waves that travel
slower (3 to 4.5 km/s) and cannot pass through liquids — this is how geophysicists determined that
the Earth's outer core is liquid.

Seismographs at different stations detect P-waves and S-waves arriving at different times. By
measuring the time difference $\Delta t$ and knowing the approximate speeds $v_P$ and $v_S$, the
distance to the epicentre can be estimated:

$$d \approx \frac{v_P \cdot v_S}{v_P - v_S} \cdot \Delta t$$

Three or more stations are needed to triangulate the epicentre location.

### Mathematical Description of a Progressive Wave

A sinusoidal progressive wave travelling in the $+x$ direction is described by:

$$y(x,t) = A\sin(kx - \omega t + \phi_0)$$

where:

- $k = \frac{2\pi}{\lambda}$ is the **wave number** (rad m$^{-1}$)
- $\omega = 2\pi f = \frac{2\pi}{T}$ is the **angular frequency** (rad s$^{-1}$)
- $\phi_0$ is the initial phase

**Proof that $v = f\lambda$ from the wave function.** A point of constant phase satisfies
$kx - \omega t = \mathrm{const}$. Differentiating: $k\frac{dx}{dt} - \omega = 0$, so:

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

Longitudinal waves have **compressions** (regions of high pressure, where particles bunch together)
and **rarefactions** (regions of low pressure, where particles spread apart).

### Real-World Application: Musical Instruments

Sound production in musical instruments relies on creating standing waves (covered in the next
topic), but the initial wave type depends on the instrument:

- **Stringed instruments** (guitar, violin): A plucked or bowed string vibrates transversely,
  creating a transverse wave on the string. The vibrating string then pushes air molecules back and
  forth, producing a **longitudinal** sound wave. This is a key exam point: the wave on the string
  is transverse, but the sound wave in air is longitudinal.
- **Wind instruments** (flute, clarinet, trumpet): A column of air vibrates longitudinally. The
  player's lips or a reed create compressions and rarefactions that travel along the air column.
- **Percussion** (drums): The drum membrane vibrates transversely, and the resulting pressure
  changes in the surrounding air produce longitudinal sound waves.

The speed of sound in air at 20°C is approximately 343 m/s. For a concert A (440 Hz), the wavelength
in air is $\lambda = 343/440 = 0.78$ m. Higher notes have shorter wavelengths; lower notes have
longer wavelengths.

:::warning Common Pitfall Electromagnetic waves are transverse but do not require a medium — they
propagate through vacuum via oscillating electric and magnetic fields. Sound waves are longitudinal
and require a medium.
:::

:::tip Exam Technique When asked to sketch a longitudinal wave, draw a series of vertical lines
representing air molecules. Show compressions (closely spaced) and rarefactions (widely spaced).
Label both.

Alternatively, plot displacement vs position — the graph looks sinusoidal, but positive displacement
means particles moved to the right (in the direction of propagation), not upward.
:::

## 3. Polarisation

**Definition.** **Polarisation** is the restriction of the oscillation direction of a transverse
wave to a single plane.

### Proof of Malus's Law

Consider unpolarised light of intensity $I_0$ incident on a polarising filter (analyser) whose
transmission axis makes an angle $\theta$ with the polarisation direction of the incoming light.

The **electric field** of the incoming polarised wave can be resolved into components parallel and
perpendicular to the analyser's transmission axis:

$$E_{\parallel} = E_0 \cos\theta, \qquad E_{\perp} = E_0 \sin\theta$$

Only the parallel component is transmitted. The transmitted intensity is:

$$I = \frac{1}{2}\varepsilon_0 c E_{\parallel}^2 = \frac{1}{2}\varepsilon_0 c E_0^2 \cos^2\theta = I_0 \cos^2\theta$$

$$\boxed{I = I_0 \cos^2\theta}$$

where $I_0 = \frac{1}{2}\varepsilon_0 c E_0^2$ is the intensity of the polarised light incident on
the analyser.

**Intuition.** When $\theta = 0$, all light passes through. When $\theta = 90^\circ$, no light
passes. At $\theta = 45^\circ$, the intensity is halved. This is a direct consequence of the vector
nature of the electric field.

### Polarisation by Reflection (Brewster's Angle)

When light reflects from a dielectric surface, the reflected ray is partially polarised. At
**Brewster's angle** $\theta_B$, the reflected light is fully polarised perpendicular to the plane
of incidence:

$$\tan\theta_B = n_2/n_1$$

:::info Board Note AQA and OCR (A) require Malus's law. CIE focuses on polarisation by filters.
Edexcel covers qualitative polarisation.
:::

### Polarisation in Real Life

Polarising filters have many practical applications:

- **Polaroid sunglasses** reduce glare by blocking horizontally polarised light reflected from
  horizontal surfaces (water, roads). Reflected light is predominantly horizontally polarised, so
  vertically oriented filters absorb most of the glare.
- **LCD screens** use two crossed polarisers with liquid crystals between them. The crystals rotate
  the polarisation of light passing through, allowing controlled transmission of each pixel.
- **Stress analysis** in engineering: transparent plastic models under stress become birefringent,
  rotating the polarisation of transmitted light. Viewed between crossed polarisers, stress
  concentrations appear as coloured fringes (photoelasticity).

### Polarisation and Microwaves

Microwave ovens use polarised EM waves (wavelength ~12 cm). The metal mesh on the oven door acts as
a polarising grid — the holes are much smaller than the wavelength, so the microwaves are reflected
while visible light (with a much shorter wavelength) passes through, allowing you to see inside.

## 4. The Electromagnetic Spectrum

All EM waves travel at $c = 3.00 \times 10^8$ m s$^{-1}$ in vacuum and are transverse. They are
distinguished by wavelength (equivalently, frequency).

| Region        | Wavelength Range | Typical Use                      |
| ------------- | ---------------- | -------------------------------- |
| Radio waves   | $\gt{} 1$ m      | Broadcasting, communication      |
| Microwaves    | 1 mm – 1 m       | Cooking, satellite signals       |
| Infrared      | 700 nm – 1 mm    | Thermal imaging, remote controls |
| Visible light | 400 – 700 nm     | Human vision                     |
| Ultraviolet   | 10 – 400 nm      | Sterilisation, fluorescence      |
| X-rays        | 0.01 – 10 nm     | Medical imaging                  |
| Gamma rays    | $\lt{} 0.01$ nm  | Cancer treatment, nuclear decay  |

All EM waves are produced by accelerating charges. In order of increasing frequency: radio
(oscillating currents in aerials), microwave (klystrons/magnetrons), infrared/visible/UV (atomic
electron transitions), X-rays (electron deceleration), gamma rays (nuclear transitions).

:::tip Exam Technique Memorise the order: **R**adio, **M**icrowave, **I**nfrared, **V**isible,
**U**ltraviolet, **X**-ray, **G**amma. Mnemonic: "**R**eal **M**en **I**n **V**ietnam **U**se
**X**-ray **G**uns."
:::

## 5. Intensity and Amplitude

**Definition.** The **intensity** $I$ of a wave is the power per unit area:

$$I = \frac{P}{A}$$

with SI units W m$^{-2}$.

### Proof that $I \propto A^2$ for a 2D Wave

Consider a sinusoidal wave on a string. The power transmitted past a point is the rate at which the
transverse force does work:

$$P = F_{\mathrm{transverse}} \times v_{\mathrm{transverse}}$$

For a wave $y = A\sin(kx - \omega t)$, the transverse velocity is:

$$v_y = \frac{\partial y}{\partial t} = -A\omega\cos(kx - \omega t)$$

The transverse component of tension is (for small amplitudes):

$$F_y \approx -T\frac{\partial y}{\partial x} = -TAk\cos(kx - \omega t)$$

The instantaneous power is:

$$P = F_y \cdot v_y = TAk \cdot A\omega \cos^2(kx - \omega t) = TA^2 k\omega \cos^2(kx - \omega t)$$

The average power over one cycle (since $\langle\cos^2\rangle = 1/2$):

$$\langle P \rangle = \frac{1}{2}TA^2 k\omega$$

Since $v = \omega/k$, we have $k\omega = \omega^2/v$. Also, for a string, $v = \sqrt{T/\mu}$ where
$\mu$ is the mass per unit length, so $T = \mu v^2$:

$$\langle P \rangle = \frac{1}{2}\mu v^2 A^2 \cdot \frac{\omega^2}{v} = \frac{1}{2}\mu v \omega^2 A^2$$

The intensity is power per unit... but for a string wave, the "intensity" concept maps to power
directly. The key result is:

$$\boxed{I \propto A^2}$$

For electromagnetic waves, the intensity is:

$$I = \frac{1}{2}\varepsilon_0 c E_0^2$$

which also shows $I \propto A^2$ (where $A$ is the electric field amplitude $E_0$).

**Intuition.** Double the amplitude and you quadruple the energy carried. This is analogous to
kinetic energy ($E_k = \frac{1}{2}mv^2$): double the speed and you quadruple the energy. The wave
amplitude plays the same role as "speed" for the oscillating particles.

### Inverse Square Law for Point Sources

For a wave spreading uniformly from a point source in 3D:

$$I = \frac{P}{4\pi r^2}$$

At distance $r$, the power is spread over a sphere of area $4\pi r^2$. Doubling the distance
quarters the intensity.

$$I_1 r_1^2 = I_2 r_2^2$$

### Intensity and the Decibel Scale

In practice, intensity ratios are often expressed using the **decibel scale**:

$$\mathrm{Intensity level (dB)} = 10 \log_{10}\left(\frac{I}{I_0}\right)$$

where $I_0 = 1.0 \times 10^{-12}$ W m$^{-2}$ is the threshold of hearing. This logarithmic scale
reflects how human perception of loudness works: a 3 dB increase represents a doubling of intensity,
while a 10 dB increase sounds roughly "twice as loud" to human ears.

**Example.** Normal conversation is approximately 60 dB. A whisper is about 30 dB. The intensity
ratio is $10^{(60-30)/10} = 10^3 = 1000$, meaning conversation is 1000 times more intense than a
whisper.

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

All boards cover the inverse square law. The decibel scale is explicitly on CIE and sometimes
appears in AQA context questions. Edexcel and OCR (A) focus more on $I \propto A^2$ and
$I \propto 1/r^2$ calculations.

### Amplitude and the Inverse Square Law

Since $I \propto A^2$ and $I \propto 1/r^2$, it follows that:

$$A \propto \frac{1}{r}$$

The amplitude decreases inversely with distance (not as $1/r^2$). This is an important distinction
in exam questions that ask about amplitude at different distances.

## 6. Phase and Phase Difference

Two points on a wave are **in phase** if they have the same displacement and are moving in the same
direction. They are in **antiphase** (completely out of phase) if their displacements are equal and
opposite.

The **phase difference** between two points separated by distance $\Delta x$ is:

$$\Delta\phi = \frac{2\pi}{\lambda}\Delta x$$

**Special cases:**

- In phase: $\Delta\phi = 0, 2\pi, 4\pi, \ldots$ (integer multiples of $2\pi$)
- Antiphase: $\Delta\phi = \pi, 3\pi, 5\pi, \ldots$ (odd multiples of $\pi$)

:::tip Exam Technique Phase difference questions often require you to identify two points on a wave
graph and calculate $\Delta x$. Then use $\Delta\phi = 360° \times \Delta x / \lambda$ (using
degrees) or $\Delta\phi = 2\pi \Delta x / \lambda$ (using radians). Be consistent with units.
:::

### Phase Difference from Wave Equations

If two waves are described by:

$$y_1 = A_1\sin(kx - \omega t + \phi_1), \qquad y_2 = A_2\sin(kx - \omega t + \phi_2)$$

then the phase difference is simply $\Delta\phi = \phi_2 - \phi_1$. This constant phase difference
is what determines whether two waves interfere constructively ($\Delta\phi = 2n\pi$) or
destructively ($\Delta\phi = (2n+1)\pi$).

### Phase Difference from Graphs

When given a displacement--position graph:

1. Identify the positions of the two points: $x_1$ and $x_2$
2. Measure the wavelength $\lambda$ from the graph (peak to peak)
3. Calculate $\Delta x = |x_2 - x_1|$
4. Apply $\Delta\phi = \frac{\Delta x}{\lambda} \times 360^\circ$ (or $\times 2\pi$ rad)

When given a displacement--time graph at a single point, the phase difference between two instants
$t_1$ and $t_2$ is:

$$\Delta\phi = \frac{\Delta t}{T} \times 360° = \frac{\Delta t}{T} \times 2\pi \mathrm{ rad}$$

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

AQA and OCR (A) frequently test phase difference from displacement--position graphs. CIE often
combines phase difference with path difference in interference questions. Edexcel emphasises the
connection between phase difference and the condition for constructive/destructive interference.

### Real-World Application: Doppler Ultrasound

The Doppler effect causes a change in observed frequency when there is relative motion between
source and observer. The phase difference between transmitted and received waves is used in
**Doppler ultrasound** to measure blood flow velocity.

When ultrasound of frequency $f_0$ is reflected off blood cells moving with velocity $v$ away from
the transducer, the received frequency is:

$$f' = f_0 \cdot \frac{c - v}{c}$$

where $c$ is the speed of ultrasound in tissue (~1540 m/s). The frequency shift
$\Delta f = f_0 - f'$ is proportional to blood velocity. By measuring this shift, clinicians can
detect narrowed arteries, heart valve problems, and foetal heartbeats.

## Problem Set

<details>
<summary>Problem 1</summary>
A sound wave has frequency 440 Hz and wavelength 0.78 m. Calculate the speed of sound.

**Answer.** $v = f\lambda = 440 \times 0.78 = 343$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [The Wave Equation](#the-wave-equation)

</details>

<details>
<summary>Problem 2</summary>
A radio station broadcasts at 97.4 MHz. The speed of light is $3.00 \times 10^8$ m s$^{-1}$.
Calculate the wavelength.

**Answer.** $\lambda = \frac{c}{f} = \frac{3.00 \times 10^8}{97.4 \times 10^6} = 3.08$ m.

<b>If you get this wrong, revise:</b> [The Wave Equation](#the-wave-equation)

</details>

<details>
<summary>Problem 3</summary>
Unpolarised light of intensity $I_0$ passes through two polarising filters. The first filter's axis
is vertical. The second filter's axis is at $30^\circ$ to the vertical. What is the intensity of the
transmitted light?

**Answer.** After the first filter, the light is vertically polarised with intensity $I_0/2$
(unpolarised light has equal components in all directions; only one direction passes).

After the second filter:
$I = \frac{I_0}{2}\cos^2 30° = \frac{I_0}{2} \times \frac{3}{4} = \frac{3I_0}{8}$.

<b>If you get this wrong, revise:</b> [Proof of Malus's Law](#proof-of-maluss-law)

</details>

<details>
<summary>Problem 4</summary>
Two points on a wave are separated by 0.15 m. The wavelength is 0.60 m. Calculate the phase
difference in (a) radians and (b) degrees.

**Answer.** (a) $\Delta\phi = \frac{2\pi}{0.60} \times 0.15 = \frac{\pi}{2}$ rad.

(b) $\Delta\phi = \frac{0.15}{0.60} \times 360° = 90^\circ$.

<b>If you get this wrong, revise:</b> [Phase and Phase Difference](#6-phase-and-phase-difference)

</details>

<details>
<summary>Problem 5</summary>
A wave on a string has amplitude 5.0 mm and intensity 0.80 W. If the amplitude is increased to 15
mm, what is the new intensity?

**Answer.** $I \propto A^2$, so $I_2/I_1 = (A_2/A_1)^2 = (15/5)^2 = 9$. $I_2 = 9 \times 0.80 = 7.2$
W.

<b>If you get this wrong, revise:</b> [Intensity and Amplitude](#5-intensity-and-amplitude)

</details>

<details>
<summary>Problem 6</summary>
A point source emits 50 W of sound power. Calculate the intensity at a distance of 8.0 m from the
source.

**Answer.** $I = \frac{P}{4\pi r^2} = \frac{50}{4\pi(64)} = \frac{50}{804} = 0.0622$ W m$^{-2}$.

<b>If you get this wrong, revise:</b>
[Inverse Square Law for Point Sources](#inverse-square-law-for-point-sources)

</details>

<details>
<summary>Problem 7</summary>
A light source has intensity $I_0$ at 2.0 m. At what distance is the intensity $I_0/9$?

**Answer.** $I_1 r_1^2 = I_2 r_2^2$. $I_0 \times 4 = \frac{I_0}{9} \times r_2^2$. $r_2^2 = 36$.
$r_2 = 6.0$ m.

<b>If you get this wrong, revise:</b>
[Inverse Square Law for Point Sources](#inverse-square-law-for-point-sources)

</details>

<details>
<summary>Problem 8</summary>
Polarised light of intensity 120 W m$^{-2}$ is incident on an analyser at $60^\circ$ to the polarisation
direction. Calculate the transmitted intensity.

**Answer.** $I = 120 \cos^2 60° = 120 \times 0.25 = 30$ W m$^{-2}$.

<b>If you get this wrong, revise:</b> [Proof of Malus's Law](#proof-of-maluss-law)

</details>

<details>
<summary>Problem 9</summary>
A wave is described by $y = 0.03\sin(2.5x - 200t)$ m. Find: (a) the amplitude, (b) the wave number,
(c) the angular frequency, (d) the wavelength, (e) the frequency, (f) the wave speed.

**Answer.** (a) $A = 0.03$ m. (b) $k = 2.5$ rad m$^{-1}$. (c) $\omega = 200$ rad s$^{-1}$. (d)
$\lambda = 2\pi/k = 2\pi/2.5 = 2.51$ m. (e) $f = \omega/(2\pi) = 200/(2\pi) = 31.8$ Hz. (f)
$v = f\lambda = 31.8 \times 2.51 = 79.9$ m s$^{-1}$.

<b>If you get this wrong, revise:</b>
[Mathematical Description of a Progressive Wave](#mathematical-description-of-a-progressive-wave)

</details>

<details>
<summary>Problem 10</summary>
Explain why sound waves cannot be polarised but light waves can.

**Answer.** Polarisation restricts oscillation to a single plane, which is only meaningful for
transverse waves (where oscillations are perpendicular to propagation). Sound waves are longitudinal
— the oscillations are already along the direction of propagation, so there is no "plane" to
restrict. Light waves are transverse, with electric and magnetic fields perpendicular to the
direction of travel, so their oscillation direction can be restricted.

<b>If you get this wrong, revise:</b>
[Transverse and Longitudinal Waves](#2-transverse-and-longitudinal-waves)

</details>

<details>
<summary>Problem 11</summary>
A seismic P-wave travels at 6.5 km/s through rock and an S-wave travels at 3.8 km/s through the same
rock. A seismograph detects the P-wave 120 s before the S-wave. Estimate the distance from the
seismograph to the earthquake epicentre.

**Answer.** Let $d$ be the distance. The time for the P-wave is $t_P = d/v_P$ and for the S-wave is
$t_S = d/v_S$. The time difference is:

$$\Delta t = t_S - t_P = d\left(\frac{1}{v_S} - \frac{1}{v_P}\right) = d\left(\frac{v_P - v_S}{v_P v_S}\right)$$

$$d = \frac{\Delta t \cdot v_P \cdot v_S}{v_P - v_S} = \frac{120 \times 6500 \times 3800}{6500 - 3800} = \frac{120 \times 2.47 \times 10^7}{2700} = \frac{2.964 \times 10^9}{2700} \approx 1.10 \times 10^6 \mathrm{ m} = 1100 \mathrm{ km}$$

<b>If you get this wrong, revise:</b>
[Real-World Application: Seismic Waves](#real-world-application-seismic-waves)

</details>

<details>
<summary>Problem 12</summary>
Unpolarised light passes through three polarising filters. The first has a vertical axis, the second
is at $45^\circ$ to the vertical, and the third is horizontal ($90^\circ$ to the vertical). If the initial
intensity is $I_0$, what is the final transmitted intensity? Compare this with the case where the
middle filter is removed.

**Answer.** With all three filters:

- After filter 1 (vertical): $I_1 = I_0/2$, polarised vertically.
- After filter 2 ($45^\circ$): $I_2 = (I_0/2)\cos^2 45° = (I_0/2)(1/2) = I_0/4$, polarised at
  $45^\circ$.
- After filter 3 (horizontal, $45^\circ$ from filter 2's axis):
  $I_3 = (I_0/4)\cos^2 45° = (I_0/4)(1/2) = I_0/8$.

Without the middle filter (crossed polarisers): $I = (I_0/2)\cos^2 90° = 0$. No light passes.

<b>If you get this wrong, revise:</b> [Proof of Malus's Law](#proof-of-maluss-law)

</details>

<details>
<summary>Problem 13</summary>
A point source emits sound with power 0.10 W. At a distance of 5.0 m, the amplitude of the sound
wave is $A_1$. What is the amplitude at 20 m in terms of $A_1$?

**Answer.** Since $I \propto A^2$ and $I \propto 1/r^2$, it follows that $A \propto 1/r$. The ratio
of amplitudes is:

$$\frac{A_2}{A_1} = \frac{r_1}{r_2} = \frac{5.0}{20} = \frac{1}{4}$$

So $A_2 = A_1/4$.

<b>If you get this wrong, revise:</b>
[Amplitude and the Inverse Square Law](#amplitude-and-the-inverse-square-law)

</details>

<details>
<summary>Problem 14</summary>
A Doppler ultrasound transducer operates at 5.0 MHz. Blood is flowing away from the transducer at
0.80 m/s. The speed of ultrasound in tissue is 1540 m/s. Calculate the frequency shift of the
reflected signal.

**Answer.** First, the ultrasound hits the moving blood (source at rest, observer moving away):

$$f_1 = f_0 \cdot \frac{c - v}{c} = 5.0 \times 10^6 \times \frac{1540 - 0.80}{1540} = 5.0 \times 10^6 \times 0.99948 = 4.9974 \times 10^6 \mathrm{ Hz}$$

This reflected signal then travels back to the transducer (source moving away, observer at rest),
effectively doubling the shift:

$$\Delta f \approx \frac{2f_0 v}{c} = \frac{2 \times 5.0 \times 10^6 \times 0.80}{1540} = \frac{8.0 \times 10^6}{1540} \approx 5190 \mathrm{ Hz} \approx 5.2 \mathrm{ kHz}$$

<b>If you get this wrong, revise:</b>
[Real-World Application: Doppler Ultrasound](#real-world-application-doppler-ultrasound)

</details>

<details>
<summary>Problem 15</summary>
Two waves travel in the same direction along a string. Wave 1 is described by
$y_1 = 0.04\sin(3.0x - 12t)$ m and wave 2 by $y_2 = 0.04\sin(3.0x - 12t + \pi/3)$ m. State the phase
difference between the waves and determine whether their superposition produces a resultant wave
with amplitude greater than, less than, or equal to 0.04 m.

**Answer.** The phase difference is $\Delta\phi = \pi/3$ rad (60°). Since $\Delta\phi$ is neither
$0$ nor $\pi$, the resultant amplitude is intermediate:

$$A_{\mathrm{res}} = \sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \cos\Delta\phi} = \sqrt{0.04^2 + 0.04^2 + 2(0.04)(0.04)\cos(\pi/3)}$$

$$= 0.04\sqrt{2 + 2 \times 0.5} = 0.04\sqrt{3} \approx 0.069 \mathrm{ m}$$

The resultant amplitude ($\approx 0.069$ m) is greater than 0.04 m but less than 0.08 m (which would
be the fully constructive case at $\Delta\phi = 0$).

<b>If you get this wrong, revise:</b>
[Phase Difference from Wave Equations](#phase-difference-from-wave-equations)

</details>

:::

:::

:::

:::

:::
