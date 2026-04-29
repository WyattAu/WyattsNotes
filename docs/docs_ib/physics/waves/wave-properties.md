---
title: Wave Properties
description: IB Physics — wave types, properties, superposition, standing waves, and
  the Doppler effect.
slug: wave-properties
---


## Wave Fundamentals

<PhetSimulation simulationId="waves-on-a-string" title="Waves on a String" />

Investigate how wave speed, frequency, wavelength, and amplitude are related. Experiment with
different end conditions (fixed, loose, open) to observe standing waves and resonance.

### What is a Wave?

A wave is a disturbance that transfers energy through a medium or space without transferring matter.

### Types of Waves

| Property              | Transverse                          | Longitudinal                  |
| --------------------- | ----------------------------------- | ----------------------------- |
| Oscillation direction | Perpendicular to propagation        | Parallel to propagation       |
| Examples              | Light, water surface waves, strings | Sound, pressure waves         |
| Crests and troughs    | Yes                                 | Compressions and rarefactions |
| Polarisation          | Can be polarised                    | Cannot be polarised           |

### Wave Terminology

| Term         | Symbol     | Definition                                        | Unit |
| ------------ | ---------- | ------------------------------------------------- | ---- |
| Displacement | $x$ or $y$ | Distance from equilibrium                         | m    |
| Amplitude    | $A$        | Maximum displacement                              | m    |
| Wavelength   | $\lambda$  | Distance between two consecutive identical points | m    |
| Frequency    | $f$        | Number of complete oscillations per second        | Hz   |
| Period       | $T$        | Time for one complete oscillation                 | s    |
| Wave speed   | $v$        | Speed at which the wave propagates                | m/s  |
| Phase        | $\phi$     | Position in the cycle of oscillation              | rad  |

### Relationships

$$
f = \frac&lbrace;1&rbrace;&lbrace;T&rbrace;
$$

$$
v = f\lambda
$$

:::info[Example]

A sound wave has frequency $440\mathrm{ Hz}$ and travels at $343\mathrm{ m/s}$. Find its wavelength.

$$
\lambda = \frac&lbrace;v&rbrace;&lbrace;f&rbrace; = \frac&lbrace;343&rbrace;&lbrace;440&rbrace; = 0.780\mathrm&lbrace; m&rbrace;
$$

:::

---

## The Wave Equation

### General Form

For a travelling wave:

$$
y(x, t) = A\sin(\omega t - kx + \phi)
$$

where:

- $\omega = 2\pi f$ is the angular frequency
- $k = \dfrac{2\pi}{\lambda}$ is the wave number
- $\phi$ is the phase constant

### Key Relations

$$
v = \frac&lbrace;\omega&rbrace;&lbrace;k&rbrace; = f\lambda
$$

### Intensity

The intensity of a wave is the power per unit area:

$$
I = \frac&lbrace;P&rbrace;&lbrace;A&rbrace;
$$

For a point source radiating equally in all directions:

$$
I = \frac&lbrace;P&rbrace;&lbrace;4\pi r^2&rbrace;
$$

Intensity is proportional to amplitude squared:

$$
I \propto A^2
$$

---

## Sound Waves

### Nature of Sound

Sound is a longitudinal mechanical wave that requires a medium. It consists of compressions (high
pressure) and rarefactions (low pressure).

### Speed of Sound

| Medium                         | Speed (m/s) |
| ------------------------------ | ----------- |
| Air at $20\degree\mathrm{C}$   | 343         |
| Water at $20\degree\mathrm{C}$ | 1482        |
| Steel                          | 5960        |
| Glass                          | 5640        |

The speed of sound in air depends on temperature:

$$
v \approx 331 + 0.6T_C \mathrm&lbrace; m/s&rbrace;
$$

### Inverse Square Law

For a point source of sound:

$$
I \propto \frac&lbrace;1&rbrace;&lbrace;r^2&rbrace;
$$

Doubling the distance from a source reduces the intensity to one quarter.

### Sound Intensity Level

Measured in decibels (dB):

$$
\beta = 10\log_&lbrace;10&rbrace;\!\left(\frac&lbrace;I&rbrace;&lbrace;I_0&rbrace;\right)
$$

where $I_0 = 10^{-12}\mathrm{ W/m}^2$ is the threshold of hearing.

| Source               | Level (dB) |
| -------------------- | ---------- |
| Threshold of hearing | 0          |
| Whisper              | 30         |
| Normal conversation  | 60         |
| Busy traffic         | 80         |
| Rock concert         | 120        |
| Jet engine at 30 m   | 150        |

:::warning[Exam Tip]

A 10 dB increase represents a tenfold increase in intensity. A 3 dB increase approximately doubles
the intensity. Decibels are logarithmic, so you cannot simply add them.

:::

---

## Electromagnetic Spectrum

| Region        | Wavelength Range                       | Frequency Range                                          |
| ------------- | -------------------------------------- | -------------------------------------------------------- |
| Radio waves   | $\gt 0.1\mathrm{ m}$                   | $\lt 3 \times 10^9\mathrm{ Hz}$                          |
| Microwaves    | $0.1\mathrm{ mm}$ to $0.1\mathrm{ m}$  | $3 \times 10^9$ to $3 \times 10^{12}\mathrm{ Hz}$        |
| Infrared      | $700\mathrm{ nm}$ to $0.1\mathrm{ mm}$ | $3 \times 10^{12}$ to $4.3 \times 10^{14}\mathrm{ Hz}$   |
| Visible light | $400\mathrm{ nm}$ to $700\mathrm{ nm}$ | $4.3 \times 10^{14}$ to $7.5 \times 10^{14}\mathrm{ Hz}$ |
| Ultraviolet   | $10\mathrm{ nm}$ to $400\mathrm{ nm}$  | $7.5 \times 10^{14}$ to $3 \times 10^{16}\mathrm{ Hz}$   |
| X-rays        | $0.01\mathrm{ nm}$ to $10\mathrm{ nm}$ | $3 \times 10^{16}$ to $3 \times 10^{19}\mathrm{ Hz}$     |
| Gamma rays    | $\lt 0.01\mathrm{ nm}$                 | $\gt 3 \times 10^{19}\mathrm{ Hz}$                       |

### Key Properties

- All EM waves travel at $c = 3.0 \times 10^8\mathrm{ m/s}$ in a vacuum.
- They are all transverse waves.
- They can all travel through a vacuum.
- They can all be polarised.

---

## Superposition

### Principle of Superposition

When two or more waves overlap, the resultant displacement at any point is the algebraic sum of the
individual displacements:

$$
y_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = y_1 + y_2 + y_3 + \cdots
$$

### Constructive Interference

Waves arrive **in phase** (path difference $= n\lambda$, where $n$ is an integer):

$$
\mathrm&lbrace;Path difference&rbrace; = n\lambda
$$

The resultant amplitude is $A_1 + A_2$ (maximum).

### Destructive Interference

Waves arrive **out of phase** (path difference $= (n + \frac{1}{2})\lambda$):

$$
\mathrm&lbrace;Path difference&rbrace; = \left(n + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\right)\lambda
$$

The resultant amplitude is $|A_1 - A_2|$ (minimum).

### Two-Source Interference

For coherent sources (same frequency, constant phase relationship), interference produces a pattern
of bright and dark fringes (for light) or loud and quiet regions (for sound).

For double-slit interference with slit separation $d$ and distance to screen $D$:

$$
d\sin\theta = n\lambda \quad (\mathrm&lbrace;bright fringes&rbrace;)
$$

$$
d\sin\theta = \left(n + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\right)\lambda \quad (\mathrm&lbrace;dark fringes&rbrace;)
$$

For small angles ($\sin\theta \approx \tan\theta \approx \dfrac{x}{D}$):

$$
x_n = \frac&lbrace;n\lambda D&rbrace;&lbrace;d&rbrace;
$$

Fringe spacing:

$$
\Delta x = \frac&lbrace;\lambda D&rbrace;&lbrace;d&rbrace;
$$

:::info[Example]

Light of wavelength $600\mathrm{ nm}$ passes through a double slit with separation
$0.2\mathrm{ mm}$. The screen is $1.5\mathrm{ m}$ away. Find the fringe spacing.

$$
\Delta x = \frac&lbrace;\lambda D&rbrace;&lbrace;d&rbrace; = \frac&lbrace;600 \times 10^&lbrace;-9&rbrace; \times 1.5&rbrace;&lbrace;0.2 \times 10^&lbrace;-3&rbrace;&rbrace; = \frac&lbrace;9 \times 10^&lbrace;-7&rbrace;&rbrace;&lbrace;2 \times 10^&lbrace;-4&rbrace;&rbrace; = 4.5 \times 10^&lbrace;-3&rbrace;\mathrm&lbrace; m&rbrace; = 4.5\mathrm&lbrace; mm&rbrace;
$$

:::

---

## Standing Waves

### Formation

Standing waves form when two identical waves travelling in opposite directions superpose. This
occurs due to reflection at a boundary.

### Nodes and Antinodes

- **Node**: point of zero displacement (destructive interference)
- **Antinode**: point of maximum displacement (constructive interference)

### Standing Waves on Strings

For a string of length $L$ fixed at both ends:

**Harmonics**:

| Harmonic          | Wavelength                  | Frequency                     |
| ----------------- | --------------------------- | ----------------------------- |
| 1st (fundamental) | $\lambda_1 = 2L$            | $f_1 = \dfrac{v}{2L}$         |
| 2nd               | $\lambda_2 = L$             | $f_2 = \dfrac{v}{L} = 2f_1$   |
| 3rd               | $\lambda_3 = \dfrac{2L}{3}$ | $f_3 = \dfrac{3v}{2L} = 3f_1$ |
| $n$th             | $\lambda_n = \dfrac{2L}{n}$ | $f_n = \dfrac{nv}{2L} = nf_1$ |

The wave speed on a string under tension $T$ with mass per unit length $\mu$:

$$
v = \sqrt&lbrace;\frac&lbrace;T&rbrace;&lbrace;\mu&rbrace;&rbrace;
$$

### Standing Waves in Pipes

**Open pipe** (open at both ends):

$$
f_n = \frac&lbrace;nv&rbrace;&lbrace;2L&rbrace;, \quad n = 1, 2, 3, \ldots
$$

Both ends are antinodes.

**Closed pipe** (closed at one end):

$$
f_n = \frac&lbrace;nv&rbrace;&lbrace;4L&rbrace;, \quad n = 1, 3, 5, \ldots \mathrm&lbrace; (odd harmonics only)&rbrace;
$$

The closed end is a node, the open end is an antinode.

:::info[Example]

A string of length $0.75\mathrm{ m}$ has a fundamental frequency of $220\mathrm{ Hz}$. Find the
speed of waves on the string.

$$
f_1 = \frac&lbrace;v&rbrace;&lbrace;2L&rbrace; \implies v = 2Lf_1 = 2(0.75)(220) = 330\mathrm&lbrace; m/s&rbrace;
$$

:::

:::info[Example]

An open pipe has a fundamental frequency of $440\mathrm{ Hz}$. Find the frequency of the third
harmonic.

$$
f_3 = 3f_1 = 3(440) = 1320\mathrm&lbrace; Hz&rbrace;
$$

:::

---

## The Doppler Effect

### Definition

The Doppler effect is the change in observed frequency of a wave when there is relative motion
between the source and the observer.

### Moving Source, Stationary Observer

$$
f' = \frac&lbrace;f&rbrace;&lbrace;1 \pm \frac&lbrace;v_s&rbrace;&lbrace;v_w&rbrace;&rbrace;
$$

where $v_s$ is the speed of the source and $v_w$ is the wave speed.

- Source approaching: $f' = \dfrac{f}{1 - v_s/v_w}$ (frequency increases)
- Source receding: $f' = \dfrac{f}{1 + v_s/v_w}$ (frequency decreases)

### Moving Observer, Stationary Source

$$
f' = f\!\left(1 \pm \frac&lbrace;v_o&rbrace;&lbrace;v_w&rbrace;\right)
$$

- Observer approaching: $f' = f(1 + v_o/v_w)$ (frequency increases)
- Observer receding: $f' = f(1 - v_o/v_w)$ (frequency decreases)

### General Doppler Formula

$$
f' = f\!\left(\frac&lbrace;v_w \pm v_o&rbrace;&lbrace;v_w \mp v_s&rbrace;\right)
$$

Upper signs when approaching, lower signs when receding.

### Electromagnetic Doppler Effect

For light:

$$
f' = f\sqrt&lbrace;\frac&lbrace;1 + \beta&rbrace;&lbrace;1 - \beta&rbrace;&rbrace;
$$

where $\beta = \dfrac{v}{c}$. For $v \ll c$:

$$
\frac&lbrace;\Delta f&rbrace;&lbrace;f&rbrace; \approx \frac&lbrace;v&rbrace;&lbrace;c&rbrace;
$$

- **Redshift**: source receding, observed wavelength increases
- **Blueshift**: source approaching, observed wavelength decreases

### Applications

| Application        | Description                                |
| ------------------ | ------------------------------------------ |
| Radar guns         | Measure speed of vehicles                  |
| Medical ultrasound | Measure blood flow velocity                |
| Astronomy          | Measure speed of stars/galaxies (redshift) |
| Weather radar      | Track storm systems                        |

:::info[Example]

A fire engine with siren at $700\mathrm{ Hz}$ approaches at $30\mathrm{ m/s}$. What frequency does a
stationary observer hear? ($v_{\mathrm{sound}} = 343\mathrm{ m/s}$)

$$
f' = \frac&lbrace;f&rbrace;&lbrace;1 - v_s/v_w&rbrace; = \frac&lbrace;700&rbrace;&lbrace;1 - 30/343&rbrace; = \frac&lbrace;700&rbrace;&lbrace;0.9125&rbrace; = 767\mathrm&lbrace; Hz&rbrace;
$$

:::

---

## Diffraction

### Definition

Diffraction is the spreading of waves when they pass through an aperture or around an obstacle.

### Conditions

- Diffraction is most significant when the wavelength is comparable to the size of the aperture or
  obstacle.
- For light (very small $\lambda$), diffraction requires very narrow slits.
- For sound (larger $\lambda$), diffraction is more noticeable around everyday objects.

### Single Slit Diffraction

For light of wavelength $\lambda$ passing through a slit of width $a$:

**Minima** occur at:

$$
a\sin\theta = n\lambda, \quad n = \pm 1, \pm 2, \ldots
$$

The central maximum is twice as wide as the secondary maxima.

### Rayleigh Criterion

Two sources are just resolvable when the central maximum of one diffraction pattern coincides with
the first minimum of the other:

$$
\theta_&lbrace;\min&rbrace; = 1.22\frac&lbrace;\lambda&rbrace;&lbrace;D&rbrace;
$$

where $D$ is the diameter of the circular aperture.

### Resolution

The ability to distinguish between two closely spaced objects depends on:

- Wavelength (shorter $\lambda$ gives better resolution)
- Aperture diameter (larger $D$ gives better resolution)

This is why astronomical telescopes use large mirrors and electron microscopes use short wavelengths
(electrons).

:::info[Example]

A telescope with a mirror of diameter $0.1\mathrm{ m}$ observes light of wavelength
$550\mathrm{ nm}$. Find the minimum angular separation it can resolve.

$$
\theta_&lbrace;\min&rbrace; = 1.22 \times \frac&lbrace;550 \times 10^&lbrace;-9&rbrace;&rbrace;&lbrace;0.1&rbrace; = 6.71 \times 10^&lbrace;-6&rbrace;\mathrm&lbrace; rad&rbrace;
$$

This is approximately $1.38$ arcseconds.

:::

---

## Polarisation

### Definition

Polarisation is the restriction of the oscillation direction of a transverse wave to one plane.

### Methods

| Method            | Description                                              |
| ----------------- | -------------------------------------------------------- |
| Polarising filter | Allows only one plane of oscillation to pass             |
| Reflection        | Light reflected from a surface is partially polarised    |
| Birefringence     | Certain crystals split light into two polarised beams    |
| Scattering        | Light scattered by the atmosphere is partially polarised |

### Malus's Law

When polarised light of intensity $I_0$ passes through an analyser at angle $\theta$ to the
polarisation direction:

$$
I = I_0\cos^2\theta
$$

### Brewster's Angle

When light hits a surface at Brewster's angle, the reflected light is completely polarised:

$$
\tan\theta_B = \frac&lbrace;n_2&rbrace;&lbrace;n_1&rbrace;
$$

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

Light of wavelength $590\mathrm{ nm}$ is incident on a double slit with separation
$0.5\mathrm{ mm}$. The screen is $2\mathrm{ m}$ away. Find the distance from the central maximum to
the third bright fringe.

$$
x_3 = \frac&lbrace;3\lambda D&rbrace;&lbrace;d&rbrace; = \frac&lbrace;3 \times 590 \times 10^&lbrace;-9&rbrace; \times 2&rbrace;&lbrace;0.5 \times 10^&lbrace;-3&rbrace;&rbrace; = \frac&lbrace;3.54 \times 10^&lbrace;-6&rbrace;&rbrace;&lbrace;5 \times 10^&lbrace;-4&rbrace;&rbrace; = 7.08 \times 10^&lbrace;-3&rbrace;\mathrm&lbrace; m&rbrace; = 7.08\mathrm&lbrace; mm&rbrace;
$$

### Question 2 (Paper 2 style)

A string of length $0.8\mathrm{ m}$ and mass $4\mathrm{ g}$ is under tension $50\mathrm{ N}$.

**(a)** Find the speed of waves on the string.

$$
\mu = \frac&lbrace;0.004&rbrace;&lbrace;0.8&rbrace; = 0.005\mathrm&lbrace; kg/m&rbrace;
$$

$$
v = \sqrt&lbrace;\frac&lbrace;T&rbrace;&lbrace;\mu&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;50&rbrace;&lbrace;0.005&rbrace;&rbrace; = \sqrt&lbrace;10000&rbrace; = 100\mathrm&lbrace; m/s&rbrace;
$$

**(b)** Find the fundamental frequency and the first three harmonic frequencies.

$$
f_1 = \frac&lbrace;v&rbrace;&lbrace;2L&rbrace; = \frac&lbrace;100&rbrace;&lbrace;1.6&rbrace; = 62.5\mathrm&lbrace; Hz&rbrace;
$$

$$
f_2 = 125\mathrm&lbrace; Hz&rbrace;, \quad f_3 = 187.5\mathrm&lbrace; Hz&rbrace;
$$

**(c)** Draw the standing wave pattern for the second harmonic.

The second harmonic has one node at the centre and antinodes at each quarter point. There are 3
nodes (including both ends) and 2 antinodes.

### Question 3 (Paper 1 style)

An ambulance with siren at $800\mathrm{ Hz}$ moves away from a stationary observer at
$20\mathrm{ m/s}$. What frequency does the observer hear? ($v_{\mathrm{sound}} = 340\mathrm{ m/s}$)

$$
f' = \frac&lbrace;f&rbrace;&lbrace;1 + v_s/v_w&rbrace; = \frac&lbrace;800&rbrace;&lbrace;1 + 20/340&rbrace; = \frac&lbrace;800&rbrace;&lbrace;1.0588&rbrace; = 756\mathrm&lbrace; Hz&rbrace;
$$

### Question 4 (Paper 2 style)

Unpolarised light of intensity $I_0$ passes through two polarising filters. The axis of the second
filter is at $60\degree$ to the first.

**(a)** Find the intensity after the first filter.

$$
I_1 = \frac&lbrace;I_0&rbrace;&lbrace;2&rbrace;
$$

**(b)** Find the intensity after the second filter.

$$
I_2 = I_1\cos^2 60\degree = \frac&lbrace;I_0&rbrace;&lbrace;2&rbrace; \times \frac&lbrace;1&rbrace;&lbrace;4&rbrace; = \frac&lbrace;I_0&rbrace;&lbrace;8&rbrace;
$$

### Question 5 (Paper 2 style)

A car horn produces sound at $400\mathrm{ Hz}$. The car approaches a stationary observer at
$25\mathrm{ m/s}$, then passes and moves away at the same speed.

**(a)** Find the frequency heard by the observer as the car approaches.

$$
f' = \frac&lbrace;400&rbrace;&lbrace;1 - 25/343&rbrace; = \frac&lbrace;400&rbrace;&lbrace;0.927&rbrace; = 431\mathrm&lbrace; Hz&rbrace;
$$

**(b)** Find the frequency heard as the car moves away.

$$
f' = \frac&lbrace;400&rbrace;&lbrace;1 + 25/343&rbrace; = \frac&lbrace;400&rbrace;&lbrace;1.073&rbrace; = 373\mathrm&lbrace; Hz&rbrace;
$$

**(c)** Calculate the change in frequency.

$$
\Delta f = 431 - 373 = 58\mathrm&lbrace; Hz&rbrace;
$$

---

## Summary

| Quantity                | Formula                           |
| ----------------------- | --------------------------------- |
| Wave speed              | $v = f\lambda$                    |
| Intensity               | $I = \dfrac{P}{4\pi r^2}$         |
| Sound level             | $\beta = 10\log_{10}(I/I_0)$      |
| Double-slit maxima      | $d\sin\theta = n\lambda$          |
| Single-slit minima      | $a\sin\theta = n\lambda$          |
| String harmonics        | $f_n = \dfrac{nv}{2L}$            |
| Doppler (source moving) | $f' = \dfrac{f}{1 \mp v_s/v_w}$   |
| Malus's law             | $I = I_0\cos^2\theta$             |
| Rayleigh criterion      | $\theta = 1.22\dfrac{\lambda}{D}$ |

:::tip[Exam Strategy]

For wave problems, always identify the type of wave and the relevant equations. For interference
problems, determine whether you need path difference or phase difference. For standing waves,
clearly identify whether the system is a string, open pipe, or closed pipe. For Doppler problems,
identify what is moving (source, observer, or both).

:::

---

## Wave Intensity and Amplitude

### Relationship Between Intensity and Amplitude

For a wave, intensity is proportional to the square of the amplitude:

$$
I \propto A^2
$$

If the amplitude doubles, the intensity quadruples.

### Intensity at a Distance from a Point Source

$$
I = \frac&lbrace;P&rbrace;&lbrace;4\pi r^2&rbrace;
$$

This means:

$$
I_1 r_1^2 = I_2 r_2^2
$$

:::info[Example]

At $10\mathrm{ m}$ from a source, the intensity is $0.5\mathrm{ W/m}^2$. Find the intensity at
$25\mathrm{ m}$.

$$
I_2 = I_1 \times \frac&lbrace;r_1^2&rbrace;&lbrace;r_2^2&rbrace; = 0.5 \times \frac&lbrace;100&rbrace;&lbrace;625&rbrace; = 0.08\mathrm&lbrace; W/m&rbrace;^2
$$

:::

---

## Phase and Phase Difference

### Phase Difference

Phase difference $\Delta\phi$ between two waves at a point:

$$
\Delta\phi = \frac&lbrace;2\pi \Delta x&rbrace;&lbrace;\lambda&rbrace;
$$

where $\Delta x$ is the path difference.

| Phase Difference          | Description              |
| ------------------------- | ------------------------ |
| $0, 2\pi, 4\pi, \ldots$   | In phase (constructive)  |
| $\pi, 3\pi, 5\pi, \ldots$ | Anti-phase (destructive) |
| $\pi/2$                   | $90\degree$ out of phase |

### Coherence

Two sources are coherent if they have:

- The same frequency.
- A constant phase relationship.

Only coherent sources produce a stable interference pattern.

---

## Diffraction Gratings

### Equation

For a diffraction grating with $N$ slits per metre (slit separation $d = 1/N$):

$$
d\sin\theta = n\lambda
$$

The maximum number of orders visible:

$$
n_&lbrace;\max&rbrace; = \frac&lbrace;d&rbrace;&lbrace;\lambda&rbrace;
$$

(rounded down to the nearest integer).

### Advantages Over Double Slit

- Sharper, brighter fringes.
- Larger angular separation.
- More accurate measurement of wavelength.

:::info[Example]

A diffraction grating has $500\mathrm{ lines/mm}$. Light of wavelength $600\mathrm{ nm}$ is incident
normally. Find the angles of the first and second-order maxima.

$$
d = \frac&lbrace;1&rbrace;&lbrace;500000&rbrace; = 2 \times 10^&lbrace;-6&rbrace;\mathrm&lbrace; m&rbrace;
$$

$$
\sin\theta_1 = \frac&lbrace;\lambda&rbrace;&lbrace;d&rbrace; = \frac&lbrace;600 \times 10^&lbrace;-9&rbrace;&rbrace;&lbrace;2 \times 10^&lbrace;-6&rbrace;&rbrace; = 0.3 \implies \theta_1 = 17.5\degree
$$

$$
\sin\theta_2 = \frac&lbrace;2\lambda&rbrace;&lbrace;d&rbrace; = 0.6 \implies \theta_2 = 36.9\degree
$$

Maximum order: $n_{\max} = \dfrac{2 \times 10^{-6}}{600 \times 10^{-9}} = 3.33$, so 3 orders are
visible.

:::

---

## Additional IB Exam-Style Questions

### Question 6 (Paper 2 style)

A string of length $0.6\mathrm{ m}$ is fixed at both ends. The speed of waves on the string is
$240\mathrm{ m/s}$.

**(a)** Calculate the fundamental frequency.

$$
f_1 = \frac&lbrace;v&rbrace;&lbrace;2L&rbrace; = \frac&lbrace;240&rbrace;&lbrace;1.2&rbrace; = 200\mathrm&lbrace; Hz&rbrace;
$$

**(b)** Draw the standing wave pattern for the third harmonic and state its frequency.

The third harmonic has 3 half-wavelengths fitting on the string, with 4 nodes and 3 antinodes.

$$
f_3 = 3f_1 = 600\mathrm&lbrace; Hz&rbrace;
$$

**(c)** The tension in the string is doubled. Find the new fundamental frequency.

$$
v = \sqrt&lbrace;\frac&lbrace;T&rbrace;&lbrace;\mu&rbrace;&rbrace; \implies v' = \sqrt&lbrace;2&rbrace;v
$$

$$
f_1' = \sqrt&lbrace;2&rbrace; \times 200 = 283\mathrm&lbrace; Hz&rbrace;
$$

### Question 7 (Paper 2 style)

Two loudspeakers are $3\mathrm{ m}$ apart and emit sound of frequency $686\mathrm{ Hz}$ in phase.
The speed of sound is $343\mathrm{ m/s}$.

**(a)** Calculate the wavelength.

$$
\lambda = \frac&lbrace;v&rbrace;&lbrace;f&rbrace; = \frac&lbrace;343&rbrace;&lbrace;686&rbrace; = 0.5\mathrm&lbrace; m&rbrace;
$$

**(b)** A listener walks along a line parallel to the speakers, $4\mathrm{ m}$ away. Find the
positions of the first two points of constructive interference.

For constructive interference: path difference $= n\lambda$.

Using geometry, the path difference $\Delta = d\sin\theta$ where $\theta$ is the angle from the
perpendicular bisector.

$$
3\sin\theta = n \times 0.5
$$

For $n = 1$: $\sin\theta = 1/6$, $\theta = 9.6\degree$. Distance from centre:
$4\tan 9.6\degree = 0.68\mathrm{ m}$.

For $n = 2$: $\sin\theta = 1/3$, $\theta = 19.5\degree$. Distance from centre:
$4\tan 19.5\degree = 1.41\mathrm{ m}$.

### Question 8 (Paper 1 style)

Light of wavelength $\lambda$ passes through a single slit of width $a$ and produces a diffraction
pattern. If the slit width is halved, what happens to the width of the central maximum?

The first minimum occurs at $a\sin\theta = \lambda$. If $a$ is halved, $\sin\theta$ doubles, so the
angular width of the central maximum approximately doubles. The width of the central maximum is
inversely proportional to the slit width.

### Question 9 (Paper 2 style)

Unpolarised light of intensity $200\mathrm{ W/m}^2$ passes through three polarising filters. The
first has its axis vertical. The second is at $30\degree$ to the vertical. The third is at
$60\degree$ to the vertical.

Find the intensity after each filter.

After filter 1: $I_1 = \dfrac{200}{2} = 100\mathrm{ W/m}^2$.

After filter 2: $I_2 = 100\cos^2 30\degree = 100 \times 0.75 = 75\mathrm{ W/m}^2$.

After filter 3:
$I_3 = 75\cos^2(60\degree - 30\degree) = 75\cos^2 30\degree = 75 \times 0.75 = 56.25\mathrm{ W/m}^2$.
