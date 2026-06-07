---
title: Wave Properties
description:
  'A-Level Physics Wave Properties notes covering key definitions, core concepts, worked examples,
  and practice questions for practical revision.'
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: wave-properties
---

## Wave Properties

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2
:::
<PhetSimulation simulationId="waves-on-a-string" title="Waves on a String" />

Explore the simulation above to develop intuition for this topic.

## 1. Progressive Waves

A **progressive wave** is a disturbance that transfers energy through a medium (or vacuum) without
Transferring matter. Each particle in the medium oscillates about its equilibrium position.

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

**Derivation.** Consider a wave travelling at speed $v$. In one period $T$The wave advances by
Exactly one wavelength $\lambda$ (the source completes one full oscillation, producing one complete
Wave cycle):

$$v = \frac◆LB◆\mathrm{distance travelled}◆RB◆◆LB◆\mathrm{time taken}◆RB◆ = \frac◆LB◆\lambda◆RB◆◆LB◆T◆RB◆ = \lambda \cdot \frac{1}{T} = f\lambda$$

$\square$

**Intuition.** If you shake a rope at 2 Hz with a wavelength of 1.5 m, the crests travel at 3 m/s.
Faster shaking or longer waves both make the wave move faster.

### Real-World Application: Seismic Waves

When an earthquake occurs, seismic waves carry energy through the Earth. **P-waves** (primary waves)
Are longitudinal compressional waves that travel fastest (5 to 8 km/s through the crust) and can
Pass through solids and liquids. **S-waves** (secondary waves) are transverse waves that travel
Slower (3 to 4.5 km/s) and cannot pass through liquids — this is how geophysicists determined that
The Earth's outer core is liquid.

Seismographs at different stations detect P-waves and S-waves arriving at different times. By
Measuring the time difference $\Delta t$ and knowing the approximate speeds $v_P$ and $v_S$The
Distance to the epicentre can be estimated:

$$d \approx \frac◆LB◆v_P \cdot v_S◆RB◆◆LB◆v_P - v_S◆RB◆ \cdot \Delta t$$

Three or more stations are needed to triangulate the epicentre location.

### Mathematical Description of a Progressive Wave

A sinusoidal progressive wave travelling in the $+x$ direction is described by:

$$y(x,t) = A\sin(kx - \omega t + \phi_0)$$

Where:

- $k = \frac◆LB◆2\pi◆RB◆◆LB◆\lambda◆RB◆$ is the **wave number** (rad m$^{-1}$)
- $\omega = 2\pi f = \frac◆LB◆2\pi◆RB◆◆LB◆T◆RB◆$ is the **angular frequency** (rad s$^{-1}$)
- $\phi_0$ is the initial phase

**Proof that $v = f\lambda$ from the wave function.** A point of constant phase satisfies
$kx - \omega t = \mathrm{const}$. Differentiating: $k\frac{dx}{dt} - \omega = 0$So:

$$v = \frac{dx}{dt} = \frac◆LB◆\omega◆RB◆◆LB◆k◆RB◆ = \frac◆LB◆2\pi f◆RB◆◆LB◆2\pi/\lambda◆RB◆ = f\lambda$$

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
And **rarefactions** (regions of low pressure, where particles spread apart).

### Real-World Application: Musical Instruments

Sound production in musical instruments relies on creating standing waves (covered in the next
Topic), but the initial wave type depends on the instrument:

- **Stringed instruments** (guitar, violin): A plucked or bowed string vibrates transversely,
  creating a transverse wave on the string. The vibrating string then pushes air molecules back and
  forth, producing a **longitudinal** sound wave. This is a key exam point: the wave on the string
  is transverse, but the sound wave in air is longitudinal.
- **Wind instruments** (flute, clarinet, trumpet): A column of air vibrates longitudinally. The
  player's lips or a reed create compressions and rarefactions that travel along the air column.
- **Percussion** (drums): The drum membrane vibrates transversely, and the resulting pressure
  changes in the surrounding air produce longitudinal sound waves.

The speed of sound in air at 20°C is approximately 343 m/s. For a concert A (440 Hz), the wavelength
In air is $\lambda = 343/440 = 0.78$ m. Higher notes have shorter wavelengths; lower notes have
Longer wavelengths.

:::warning Common Pitfall Electromagnetic waves are transverse but do not require a medium — they
Propagate through vacuum via oscillating electric and magnetic fields. Sound waves are longitudinal
And require a medium.
:::

:::tip Exam Technique When asked to sketch a longitudinal wave, draw a series of vertical lines
Representing air molecules. Show compressions (closely spaced) and rarefactions (widely spaced).
Label both.

Alternatively, plot displacement vs position — the graph looks sinusoidal, but positive displacement
Means particles moved to the right (in the direction of propagation), not upward.
:::

## 3. Polarisation

**Definition.** **Polarisation** is the restriction of the oscillation direction of a transverse
Wave to a single plane.

### Proof of Malus's Law

Consider unpolarised light of intensity $I_0$ incident on a polarising filter (analyser) whose
Transmission axis makes an angle $\theta$ with the polarisation direction of the incoming light.

The **electric field** of the incoming polarised wave can be resolved into components parallel and
Perpendicular to the analyser's transmission axis:

$$E_{\parallel} = E_0 \cos\theta, \qquad E_{\perp} = E_0 \sin\theta$$

Only the parallel component is transmitted. The transmitted intensity is:

$$I = \frac{1}{2}\varepsilon_0 c E_{\parallel}^2 = \frac{1}{2}\varepsilon_0 c E_0^2 \cos^2\theta = I_0 \cos^2\theta$$

$$\boxed{I = I_0 \cos^2\theta}$$

Where $I_0 = \frac{1}{2}\varepsilon_0 c E_0^2$ is the intensity of the polarised light incident on
The analyser.

**Intuition.** When $\theta = 0$All light passes through. When $\theta = 90^\circ$No light Passes.
At $\theta = 45^\circ$The intensity is halved. This is a direct consequence of the vector Nature of
the electric field.

### Polarisation by Reflection (Brewster's Angle)

When light reflects from a dielectric surface, the reflected ray is partially polarised. At
**Brewster's angle** $\theta_B$The reflected light is fully polarised perpendicular to the plane Of
incidence:

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
A polarising grid — the holes are much smaller than the wavelength, so the microwaves are reflected
While visible light (with a much shorter wavelength) passes through, allowing you to see inside.

## 4. The Electromagnetic Spectrum

All EM waves travel at $c = 3.00 \times 10^8$ m s$^{-1}$ in vacuum and are transverse. They are
Distinguished by wavelength (equivalently, frequency).

| Region        | Wavelength Range | Typical Use                      |
| ------------- | ---------------- | -------------------------------- |
| Radio waves   | $\gt 1$ m        | Broadcasting, communication      |
| Microwaves    | 1 mm – 1 m       | Cooking, satellite signals       |
| Infrared      | 700 nm – 1 mm    | Thermal imaging, remote controls |
| Visible light | 400 – 700 nm     | Human vision                     |
| Ultraviolet   | 10 – 400 nm      | Sterilisation, fluorescence      |
| X-rays        | 0.01 – 10 nm     | Medical imaging                  |
| Gamma rays    | $\lt 0.01$ nm    | Cancer treatment, nuclear decay  |

All EM waves are produced by accelerating charges. In order of increasing frequency: radio
(oscillating currents in aerials), microwave (klystrons/magnetrons), infrared/visible/UV (atomic
Electron transitions), X-rays (electron deceleration), gamma rays (nuclear transitions).

:::tip Exam Technique Memorise the order: **R**adio, **M**icrowave, **I**nfrared, **V**isible,
**U**ltraviolet, **X**-ray, **G**amma. Mnemonic: "**R**eal **M**en **I**n **V**ietnam **U**se
**X**-ray **G**uns."
:::

## 5. Intensity and Amplitude

**Definition.** The **intensity** $I$ of a wave is the power per unit area:

$$I = \frac{P}{A}$$

With SI units W m$^{-2}$.

### Proof that $I \propto A^2$ for a 2D Wave

Consider a sinusoidal wave on a string. The power transmitted past a point is the rate at which the
Transverse force does work:

$$P = F_{\mathrm{transverse}} \times v_{\mathrm{transverse}}$$

For a wave $y = A\sin(kx - \omega t)$The transverse velocity is:

$$v_y = \frac◆LB◆\partial y◆RB◆◆LB◆\partial t◆RB◆ = -A\omega\cos(kx - \omega t)$$

The transverse component of tension is (for small amplitudes):

$$F_y \approx -T\frac◆LB◆\partial y◆RB◆◆LB◆\partial x◆RB◆ = -TAk\cos(kx - \omega t)$$

The instantaneous power is:

$$P = F_y \cdot v_y = TAk \cdot A\omega \cos^2(kx - \omega t) = TA^2 k\omega \cos^2(kx - \omega t)$$

The average power over one cycle (since $\langle\cos^2\rangle = 1/2$):

$$\langle P \rangle = \frac{1}{2}TA^2 k\omega$$

Since $v = \omega/k$We have $k\omega = \omega^2/v$. Also, for a string, $v = \sqrt◆LB◆T/\mu◆RB◆$
where $\mu$ is the mass per unit length, so $T = \mu v^2$:

$$\langle P \rangle = \frac{1}{2}\mu v^2 A^2 \cdot \frac◆LB◆\omega^2◆RB◆◆LB◆v◆RB◆ = \frac{1}{2}\mu v \omega^2 A^2$$

The intensity is power per unit... But for a string wave, the "intensity" concept maps to power
Directly. The key result is:

$$\boxed{I \propto A^2}$$

For electromagnetic waves, the intensity is:

$$I = \frac{1}{2}\varepsilon_0 c E_0^2$$

Which also shows $I \propto A^2$ (where $A$ is the electric field amplitude $E_0$).

**Intuition.** Double the amplitude and you quadruple the energy carried. This is analogous to
Kinetic energy ($E_k = \frac{1}{2}mv^2$): double the speed and you quadruple the energy. The wave
Amplitude plays the same role as "speed" for the oscillating particles.

### Inverse Square Law for Point Sources

For a wave spreading uniformly from a point source in 3D:

$$I = \frac◆LB◆P◆RB◆◆LB◆4\pi r^2◆RB◆$$

At distance $r$The power is spread over a sphere of area $4\pi r^2$. Doubling the distance Quarters
the intensity.

$$I_1 r_1^2 = I_2 r_2^2$$

### Intensity and the Decibel Scale

In practice, intensity ratios are often expressed using the **decibel scale**:

$$\mathrm{Intensity level (dB)} = 10 \log_{10}\left(\frac{I}{I_0}\right)$$

Where $I_0 = 1.0 \times 10^{-12}$ W m$^{-2}$ is the threshold of hearing. This logarithmic scale
Reflects how human perception of loudness works: a 3 dB increase represents a doubling of intensity,
While a 10 dB increase sounds roughly "twice as loud" to human ears.

**Example.** Normal conversation is approximately 60 dB. A whisper is about 30 dB. The intensity
Ratio is $10^{(60-30)/10} = 10^3 = 1000$Meaning conversation is 1000 times more intense than a
Whisper.

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2
:::
All boards cover the inverse square law. The decibel scale is explicitly on CIE and sometimes
Appears in AQA context questions. Edexcel and OCR (A) focus more on $I \propto A^2$ and
$I \propto 1/r^2$ calculations.

### Amplitude and the Inverse Square Law

Since $I \propto A^2$ and $I \propto 1/r^2$It follows that:

$$A \propto \frac{1}{r}$$

The amplitude decreases inversely with distance (not as $1/r^2$). This is an important distinction
In exam questions that ask about amplitude at different distances.

## 6. Phase and Phase Difference

Two points on a wave are **in phase** if they have the same displacement and are moving in the same
Direction. They are in **antiphase** (completely out of phase) if their displacements are equal and
Opposite.

The **phase difference** between two points separated by distance $\Delta x$ is:

$$\Delta\phi = \frac◆LB◆2\pi◆RB◆◆LB◆\lambda◆RB◆\Delta x$$

**Special cases:**

- In phase: $\Delta\phi = 0, 2\pi, 4\pi, \ldots$ (integer multiples of $2\pi$)
- Antiphase: $\Delta\phi = \pi, 3\pi, 5\pi, \ldots$ (odd multiples of $\pi$)

:::tip Exam Technique Phase difference questions often require you to identify two points on a wave
Graph and calculate $\Delta x$. Then use $\Delta\phi = 360° \times \Delta x / \lambda$ (using
Degrees) or $\Delta\phi = 2\pi \Delta x / \lambda$ (using radians). Be consistent with units.
:::

### Phase Difference from Wave Equations

If two waves are described by:

$$y_1 = A_1\sin(kx - \omega t + \phi_1), \qquad y_2 = A_2\sin(kx - \omega t + \phi_2)$$

Then the phase difference is $\Delta\phi = \phi_2 - \phi_1$. This constant phase difference Is what
determines whether two waves interfere constructively ($\Delta\phi = 2n\pi$) or Destructively
($\Delta\phi = (2n+1)\pi$).

### Phase Difference from Graphs

When given a displacement--position graph:

1. Identify the positions of the two points: $x_1$ and $x_2$
2. Measure the wavelength $\lambda$ from the graph (peak to peak)
3. Calculate $\Delta x = |x_2 - x_1|$
4. Apply $\Delta\phi = \frac◆LB◆\Delta x◆RB◆◆LB◆\lambda◆RB◆ \times 360^\circ$ (or $\times 2\pi$ rad)

When given a displacement--time graph at a single point, the phase difference between two instants
$t_1$ and $t_2$ is:

$$\Delta\phi = \frac◆LB◆\Delta t◆RB◆◆LB◆T◆RB◆ \times 360° = \frac◆LB◆\Delta t◆RB◆◆LB◆T◆RB◆ \times 2\pi \mathrm{ rad}$$

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2
:::
AQA and OCR (A) frequently test phase difference from displacement--position graphs. CIE often
Combines phase difference with path difference in interference questions. Edexcel emphasises the
Connection between phase difference and the condition for constructive/destructive interference.

### Real-World Application: Doppler Ultrasound

The Doppler effect causes a change in observed frequency when there is relative motion between
Source and observer. The phase difference between transmitted and received waves is used in
**Doppler ultrasound** to measure blood flow velocity.

When ultrasound of frequency $f_0$ is reflected off blood cells moving with velocity $v$ away from
The transducer, the received frequency is:

$$f' = f_0 \cdot \frac{c - v}{c}$$

Where $c$ is the speed of ultrasound in tissue (~1540 m/s). The frequency shift
$\Delta f = f_0 - f'$ is proportional to blood velocity. By measuring this shift, clinicians can
Detect narrowed arteries, heart valve problems, and foetal heartbeats.

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

**Answer.** $\lambda = \frac{c}{f} = \frac◆LB◆3.00 \times 10^8◆RB◆◆LB◆97.4 \times 10^6◆RB◆ = 3.08$
m.

<b>If you get this wrong, revise:</b> [The Wave Equation](#the-wave-equation)

</details>

<details>
<summary>Problem 3</summary>
Unpolarised light of intensity $I_0$ passes through two polarising filters. The first filter's axis
Is vertical. The second filter's axis is at $30^\circ$ to the vertical. What is the intensity of the
Transmitted light?

**Answer.** After the first filter, the light is vertically polarised with intensity $I_0/2$
(unpolarised light has equal components in all directions; only one direction passes).

After the second filter:
$I = \frac{I_0}{2}\cos^2 30° = \frac{I_0}{2} \times \frac{3}{4} = \frac{3I_0}{8}$.

<b>If you get this wrong, revise:</b> [Proof of Malus's Law](#proof-of-maluss-law)

</details>

<details>
<summary>Problem 4</summary>
Two points on a wave are separated by 0.15 m. The wavelength is 0.60 m. Calculate the phase
Difference in (a) radians and (b) degrees.

**Answer.** (a) $\Delta\phi = \frac◆LB◆2\pi◆RB◆◆LB◆0.60◆RB◆ \times 0.15 = \frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$
rad.

(b) $\Delta\phi = \frac{0.15}{0.60} \times 360° = 90^\circ$.

<b>If you get this wrong, revise:</b> [Phase and Phase Difference](#6-phase-and-phase-difference)

</details>

<details>
<summary>Problem 5</summary>
A wave on a string has amplitude 5.0 mm and intensity 0.80 W. If the amplitude is increased to 15
Mm, what is the new intensity?

**Answer.** $I \propto A^2$So $I_2/I_1 = (A_2/A_1)^2 = (15/5)^2 = 9$. $I_2 = 9 \times 0.80 = 7.2$ W.

<b>If you get this wrong, revise:</b> [Intensity and Amplitude](#5-intensity-and-amplitude)

</details>

<details>
<summary>Problem 6</summary>
A point source emits 50 W of sound power. Calculate the intensity at a distance of 8.0 m from the
Source.

**Answer.**
$I = \frac◆LB◆P◆RB◆◆LB◆4\pi r^2◆RB◆ = \frac◆LB◆50◆RB◆◆LB◆4\pi(64)◆RB◆ = \frac{50}{804} = 0.0622$ W
m$^{-2}$.

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
Direction. Calculate the transmitted intensity.

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
Transverse waves (where oscillations are perpendicular to propagation). Sound waves are longitudinal
— the oscillations are already along the direction of propagation, so there is no "plane" to
Restrict. Light waves are transverse, with electric and magnetic fields perpendicular to the
Direction of travel, so their oscillation direction can be restricted.

<b>If you get this wrong, revise:</b>
[Transverse and Longitudinal Waves](#2-transverse-and-longitudinal-waves)

</details>

<details>
<summary>Problem 11</summary>
A seismic P-wave travels at 6.5 km/s through rock and an S-wave travels at 3.8 km/s through the same
Rock. A seismograph detects the P-wave 120 s before the S-wave. Estimate the distance from the
Seismograph to the earthquake epicentre.

**Answer.** Let $d$ be the distance. The time for the P-wave is $t_P = d/v_P$ and for the S-wave is
$t_S = d/v_S$. The time difference is:

$$\Delta t = t_S - t_P = d\left(\frac{1}{v_S} - \frac{1}{v_P}\right) = d\left(\frac{v_P - v_S}{v_P v_S}\right)$$

$$d = \frac◆LB◆\Delta t \cdot v_P \cdot v_S◆RB◆◆LB◆v_P - v_S◆RB◆ = \frac◆LB◆120 \times 6500 \times 3800◆RB◆◆LB◆6500 - 3800◆RB◆ = \frac◆LB◆120 \times 2.47 \times 10^7◆RB◆◆LB◆2700◆RB◆ = \frac◆LB◆2.964 \times 10^9◆RB◆◆LB◆2700◆RB◆ \approx 1.10 \times 10^6 \mathrm{ m} = 1100 \mathrm{ km}$$

<b>If you get this wrong, revise:</b>
[Real-World Application: Seismic Waves](#real-world-application-seismic-waves)

</details>

<details>
<summary>Problem 12</summary>
Unpolarised light passes through three polarising filters. The first has a vertical axis, the second
Is at $45^\circ$ to the vertical, and the third is horizontal ($90^\circ$ to the vertical). If the initial
Intensity is $I_0$What is the final transmitted intensity? Compare this with the case where the
Middle filter is removed.

**Answer.** With all three filters:

- After filter 1 (vertical): $I_1 = I_0/2$Polarised vertically.
- After filter 2 ($45^\circ$): $I_2 = (I_0/2)\cos^2 45° = (I_0/2)(1/2) = I_0/4$Polarised at
  $45^\circ$.
- After filter 3 (horizontal, $45^\circ$ from filter 2's axis):
  $I_3 = (I_0/4)\cos^2 45° = (I_0/4)(1/2) = I_0/8$.

Without the middle filter (crossed polarisers): $I = (I_0/2)\cos^2 90° = 0$. No light passes.

<b>If you get this wrong, revise:</b> [Proof of Malus's Law](#proof-of-maluss-law)

</details>

<details>
<summary>Problem 13</summary>
A point source emits sound with power 0.10 W. At a distance of 5.0 m, the amplitude of the sound
Wave is $A_1$. What is the amplitude at 20 m in terms of $A_1$?

**Answer.** Since $I \propto A^2$ and $I \propto 1/r^2$It follows that $A \propto 1/r$. The ratio Of
amplitudes is:

$$\frac{A_2}{A_1} = \frac{r_1}{r_2} = \frac{5.0}{20} = \frac{1}{4}$$

So $A_2 = A_1/4$.

<b>If you get this wrong, revise:</b>
[Amplitude and the Inverse Square Law](#amplitude-and-the-inverse-square-law)

</details>

<details>
<summary>Problem 14</summary>
A Doppler ultrasound transducer operates at 5.0 MHz. Blood is flowing away from the transducer at
0.80 m/s. The speed of ultrasound in tissue is 1540 m/s. Calculate the frequency shift of the
Reflected signal.

**Answer.** First, the ultrasound hits the moving blood (source at rest, observer moving away):

$$f_1 = f_0 \cdot \frac{c - v}{c} = 5.0 \times 10^6 \times \frac{1540 - 0.80}{1540} = 5.0 \times 10^6 \times 0.99948 = 4.9974 \times 10^6 \mathrm{ Hz}$$

This reflected signal then travels back to the transducer (source moving away, observer at rest),
Effectively doubling the shift:

$$\Delta f \approx \frac{2f_0 v}{c} = \frac◆LB◆2 \times 5.0 \times 10^6 \times 0.80◆RB◆◆LB◆1540◆RB◆ = \frac◆LB◆8.0 \times 10^6◆RB◆◆LB◆1540◆RB◆ \approx 5190 \mathrm{ Hz} \approx 5.2 \mathrm{ kHz}$$

<b>If you get this wrong, revise:</b>
[Real-World Application: Doppler Ultrasound](#real-world-application-doppler-ultrasound)

</details>

<details>
<summary>Problem 15</summary>
Two waves travel in the same direction along a string. Wave 1 is described by
$y_1 = 0.04\sin(3.0x - 12t)$ m and wave 2 by $y_2 = 0.04\sin(3.0x - 12t + \pi/3)$ m. State the phase
Difference between the waves and determine whether their superposition produces a resultant wave
With amplitude greater than, less than, or equal to 0.04 m.

**Answer.** The phase difference is $\Delta\phi = \pi/3$ rad (60°). Since $\Delta\phi$ is neither
$0$ nor $\pi$The resultant amplitude is intermediate:

$$A_{\mathrm{res}} = \sqrt◆LB◆A_1^2 + A_2^2 + 2A_1 A_2 \cos\Delta\phi◆RB◆ = \sqrt◆LB◆0.04^2 + 0.04^2 + 2(0.04)(0.04)\cos(\pi/3)◆RB◆$$

$$= 0.04\sqrt◆LB◆2 + 2 \times 0.5◆RB◆ = 0.04\sqrt{3} \approx 0.069 \mathrm{ m}$$

The resultant amplitude ($\approx 0.069$ m) is greater than 0.04 m but less than 0.08 m (which would
Be the fully constructive case at $\Delta\phi = 0$).

<b>If you get this wrong, revise:</b>
[Phase Difference from Wave Equations](#phase-difference-from-wave-equations)

</details>


---

:::tip Diagnostic Test Ready to test your understanding of **Wave Properties**? The
[diagnostic test](/docs/alevel/physics/diagnostics/diag-wave-properties) contains the hardest
questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Wave
Properties with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/alevel/physics/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix.
:::

:::danger Common Pitfalls

- **Confusing wave speed with particle speed:** In a transverse wave, the wave propagates
  horizontally but the particles oscillate vertically. The wave speed v = f \* lambda is the speed
  of the wave pattern, not the speed of the individual particles. Particles in the medium do NOT
  travel with the wave.

- **Confusing frequency with period:** Frequency f is the number of oscillations per second (Hz).
  Period T is the time for one complete oscillation (s). They are related by f = 1/T. A common error
  is to confuse which is the reciprocal of the other or to add them instead of converting.

- **Not distinguishing between transverse and longitudinal waves:** In transverse waves,
  oscillations are PERPENDICULAR to the direction of energy transfer (light, water surface waves,
  S-waves). In longitudinal waves, oscillations are PARALLEL to the direction of energy transfer
  (sound, P-waves). Only longitudinal waves have compressions and rarefactions.

- **Misidentifying points on a wave that are in phase:** Two points are in phase if the distance
  between them is a whole number of wavelengths (n _ lambda). They are in antiphase if the distance
  is an odd multiple of half-wavelengths ((n + 0.5) _ lambda). The phase difference between adjacent
  points is 2 _ pi _ (path difference) / lambda.

## Common Pitfalls

1. Confusing wave speed, frequency, and wavelength — remember $v = f\lambda$ relates all three.

2. Forgetting that waves transfer energy, not matter (except for matter waves in quantum mechanics).

3. Misidentifying nodes and antinodes in standing wave diagrams.

4. Misidentifying the system boundary when applying conservation laws — define what is included
   before writing equations.

5. Rounding intermediate answers too early, which compounds errors in multi-step calculations.

6. Incorrectly applying $\vec{F} = m\vec{a}$ when forces are not collinear — resolve into components
   first.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

:::
