---
title: Waves and Sound
description: "DSE Physics waves and sound notes covering wave properties, transverse and longitudinal waves, sound waves, the Doppler effect, and standing waves."
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: waves-and-sound
---

## Wave Properties

### Classification

Waves are classified by the direction of particle displacement relative to the direction of energy
propagation:

| Type         | Particle Motion              | Examples                             |
| ------------ | ---------------------------- | ------------------------------------ |
| Transverse   | Perpendicular to propagation | Light, water surface waves, EM waves |
| Longitudinal | Parallel to propagation      | Sound, compression waves in springs  |

### Wave Terminology

| Term       | Symbol    | SI Unit | Definition                                   |
| ---------- | --------- | ------- | -------------------------------------------- |
| Wavelength | $\lambda$ | m       | Distance between consecutive points in phase |
| Frequency  | $f$       | Hz      | Number of complete oscillations per second   |
| Period     | $T$       | s       | Time for one complete oscillation            |
| Amplitude  | $A$       | m       | Maximum displacement from equilibrium        |
| Wave speed | $v$       | m/s     | Speed of propagation                         |

### The Wave Equation

$$v = f\lambda$$

Since $f = 1/T$:

$$v = \frac{\lambda}{T}$$

### Phase Difference

Two points separated by a distance $\Delta x$ along a wave have a phase difference:

$$\Delta\phi = \frac{2\pi\,\Delta x}{\lambda}$$

Points in phase: $\Delta\phi = 0, 2\pi, 4\pi, \ldots$ (separated by whole wavelengths)

Points in antiphase: $\Delta\phi = \pi, 3\pi, 5\pi, \ldots$ (separated by half-wavelengths)

### Worked Example 1

A wave has frequency $250 \mathrm{ Hz}$ and wavelength $1.4 \mathrm{ m}$. Find the wave speed and
the phase difference between two points $0.35 \mathrm{ m}$ apart.

<details>
<summary>Solution</summary>

$$v = f\lambda = 250 \times 1.4 = 350 \mathrm{ m/s}$$

$$\Delta\phi = \frac{2\pi \times 0.35}{1.4} = \frac{\pi}{2} = 90^\circ$$

</details>

### Worked Example 2

A sound wave in air has a wavelength of $0.686 \mathrm{ m}$. When it enters water, its speed
changes to $1480 \mathrm{ m/s}$. Find the frequency of the wave and its wavelength in water.

<details>
<summary>Solution</summary>

Speed in air: $v_{\mathrm{air}} = 343 \mathrm{ m/s}$ (at $20^\circ\mathrm{C}$)

$$f = \frac{v_{\mathrm{air}}}{\lambda_{\mathrm{air}}} = \frac{343}{0.686} = 500 \mathrm{ Hz}$$

Frequency remains constant when crossing a boundary. In water:

$$\lambda_{\mathrm{water}} = \frac{v_{\mathrm{water}}}{f} = \frac{1480}{500} = 2.96 \mathrm{ m}$$

</details>

---

## Wave Phenomena

<PhetSimulation simulationId="waves-on-a-string" title="Waves on a String" />

Experiment with wave speed, frequency, amplitude, and damping to see how they affect the wave
pattern.

### Reflection

Waves reflect off a surface. The angle of incidence equals the angle of reflection. A fixed-end
reflection inverts the wave; a free-end reflection does not.

### Refraction

When a wave crosses a boundary between two media, its speed and wavelength change but its frequency
remains constant:

$$f = \frac{v_1}{\lambda_1} = \frac{v_2}{\lambda_2}$$

### Diffraction

Diffraction is the spreading of waves when they pass through a gap or around an obstacle. Maximum
diffraction occurs when the gap width is approximately equal to the wavelength:

$$d \approx \lambda$$

### Interference

When two coherent waves overlap, the resultant displacement is the sum of individual displacements
(principle of superposition).

**Constructive interference** (reinforcement) occurs when waves arrive in phase:

$$\Delta\phi = 0, 2\pi, 4\pi, \ldots \quad \mathrm{or} \quad \mathrm{path difference} = n\lambda$$

**Destructive interference** (cancellation) occurs when waves arrive in antiphase:

$$\Delta\phi = \pi, 3\pi, 5\pi, \ldots \quad \mathrm{or} \quad \mathrm{path difference} = (n + \tfrac{1}{2})\lambda$$

### Worked Example 3

Two coherent sources are $0.8 \mathrm{ m}$ apart and emit waves of wavelength $0.04 \mathrm{ m}$. A
point `P` is $1.5 \mathrm{ m}$ from one source and $1.7 \mathrm{ m}$ from the other. Is there
constructive or destructive interference at `P`?

<details>
<summary>Solution</summary>

Path difference: $\Delta s = 1.7 - 1.5 = 0.2 \mathrm{ m}$

$$\frac{\Delta s}{\lambda} = \frac{0.2}{0.04} = 5$$

Since the path difference is an integer multiple of $\lambda$, constructive interference occurs at
`P`.

</details>

### Worked Example 4

Light of wavelength $600 \mathrm{ nm}$ passes through a double slit with slit separation
$0.1 \mathrm{ mm}$. The interference pattern is observed on a screen $2 \mathrm{ m}$ away. Find
the separation between adjacent bright fringes.

<details>
<summary>Solution</summary>

For a double-slit arrangement, the fringe spacing is:

$$\Delta y = \frac{\lambda D}{d} = \frac{600 \times 10^{-9} \times 2}{0.1 \times 10^{-3}} = \frac{1.2 \times 10^{-6}}{1 \times 10^{-4}} = 0.012 \mathrm{ m} = 12 \mathrm{ mm}$$

</details>

---

## Standing Waves

### Formation

A standing wave forms when two identical waves travelling in opposite directions superpose. Nodes
(points of zero amplitude) and antinodes (points of maximum amplitude) are fixed in position.

### String Fixed at Both Ends

| Mode                       | Diagram                 | Wavelength | Frequency              |
| -------------------------- | ----------------------- | ---------- | ---------------------- |
| Fundamental (1st harmonic) | --N--A--N--             | $2L$       | $f_1 = v/(2L)$         |
| 2nd harmonic               | --N--A--N--A--N--       | $L$        | $f_2 = v/L = 2f_1$     |
| 3rd harmonic               | --N--A--N--A--N--A--N-- | $2L/3$     | $f_3 = 3v/(2L) = 3f_1$ |

In general: $f_n = \frac{nv}{2L}$ for $n = 1, 2, 3, \ldots$

### Pipe Closed at One End

Only odd harmonics are possible for a pipe closed at one end:

| Mode                       | Wavelength | Frequency              |
| -------------------------- | ---------- | ---------------------- |
| Fundamental (1st harmonic) | $4L$       | $f_1 = v/(4L)$         |
| 3rd harmonic               | $4L/3$     | $f_3 = 3v/(4L) = 3f_1$ |
| 5th harmonic               | $4L/5$     | $f_5 = 5v/(4L) = 5f_1$ |

In general: $f_n = \frac{nv}{4L}$ for $n = 1, 3, 5, \ldots$

### Worked Example 5

A string of length $0.65 \mathrm{ m}$ has a fundamental frequency of $440 \mathrm{ Hz}$. Find the
wave speed and the frequency of the third harmonic.

<details>
<summary>Solution</summary>

$$v = 2Lf_1 = 2 \times 0.65 \times 440 = 572 \mathrm{ m/s}$$

$$f_3 = 3f_1 = 3 \times 440 = 1320 \mathrm{ Hz}$$

</details>

### Worked Example 6

A pipe is closed at one end and open at the other. The pipe is $0.85 \mathrm{ m}$ long. Find the
fundamental frequency and the next two resonant frequencies. (Speed of sound $= 340 \mathrm{ m/s}$)

<details>
<summary>Solution</summary>

For a pipe closed at one end, only odd harmonics are present:

$$f_1 = \frac{v}{4L} = \frac{340}{4 \times 0.85} = \frac{340}{3.4} = 100 \mathrm{ Hz}$$

$$f_3 = 3f_1 = 300 \mathrm{ Hz}$$

$$f_5 = 5f_1 = 500 \mathrm{ Hz}$$

The resonant frequencies are $100 \mathrm{ Hz}$, $300 \mathrm{ Hz}$, and $500 \mathrm{ Hz}$.

</details>

---

## Sound Waves

### Nature of Sound

Sound is a longitudinal mechanical wave. It requires a medium for propagation and cannot travel
through a vacuum. The speed of sound depends on the medium:

| Medium                        | Speed of Sound (m/s) |
| ----------------------------- | -------------------- |
| Air (at $20^\circ\mathrm{C}$) | 343                  |
| Water                         | 1480                 |
| Steel                         | 5960                 |

### Intensity and Loudness

**Intensity** is the power per unit area carried by the wave:

$$I = \frac{P}{4\pi r^2}$$

Intensity follows an inverse square law for a point source.

**Sound intensity level** is measured in decibels (dB):

$$\beta = 10\log_{10}\left(\frac{I}{I_0}\right)$$

where $I_0 = 10^{-12} \mathrm{ W/m}^2$ is the threshold of hearing.

### Worked Example 7

A sound source emits power $0.01 \mathrm{ W}$ uniformly in all directions. Find the intensity and
the sound intensity level at a distance of $10 \mathrm{ m}$.

<details>
<summary>Solution</summary>

$$I = \frac{P}{4\pi r^2} = \frac{0.01}{4\pi \times 100} = \frac{0.01}{1257} = 7.96 \times 10^{-6} \mathrm{ W/m}^2$$

$$\beta = 10\log_{10}\left(\frac{7.96 \times 10^{-6}}{10^{-12}}\right) = 10\log_{10}(7.96 \times 10^6) = 10 \times 6.90 = 69.0 \mathrm{ dB}$$

</details>

### Worked Example 8

The intensity of a sound at $3 \mathrm{ m}$ from a source is $5 \times 10^{-4} \mathrm{ W/m}^2$.
Find the intensity and the sound intensity level at $12 \mathrm{ m}$ from the source.

<details>
<summary>Solution</summary>

Using the inverse square law:

$$I_2 = I_1 \times \left(\frac{r_1}{r_2}\right)^2 = 5 \times 10^{-4} \times \left(\frac{3}{12}\right)^2 = 5 \times 10^{-4} \times \frac{1}{16} = 3.125 \times 10^{-5} \mathrm{ W/m}^2$$

At $3 \mathrm{ m}$:
$\beta_1 = 10\log_{10}(5 \times 10^{-4} / 10^{-12}) = 10\log_{10}(5 \times 10^8) = 10 \times 8.699 = 87.0 \mathrm{ dB}$

At $12 \mathrm{ m}$:
$\beta_2 = 10\log_{10}(3.125 \times 10^{-5} / 10^{-12}) = 10\log_{10}(3.125 \times 10^7) = 10 \times 7.495 = 74.9 \mathrm{ dB}$

The distance quadrupled (factor of 4), so the level decreased by $87.0 - 74.9 = 12.1 \mathrm{ dB}$,
which matches $10\log_{10}(16) = 12.0 \mathrm{ dB}$.

</details>

### Ultrasound

Ultrasound refers to sound waves with frequencies above $20\,000 \mathrm{ Hz}$, beyond the range of
human hearing. Applications include medical imaging, sonar, and non-destructive testing.

---

## Electromagnetic Spectrum

### Properties

Electromagnetic (EM) waves are transverse waves that do not require a medium. All EM waves travel at
the speed of light in vacuum:

$$c = 3.0 \times 10^8 \mathrm{ m/s}$$

The relationship between speed, frequency, and wavelength:

$$c = f\lambda$$

### The EM Spectrum

| Region        | Wavelength Range                       | Typical Use                         |
| ------------- | -------------------------------------- | ----------------------------------- |
| Radio waves   | $\gt 0.1 \mathrm{ m}$                  | Broadcasting, communication         |
| Microwaves    | $1 \mathrm{ mm}$ to $0.1 \mathrm{ m}$  | Cooking, radar, satellite           |
| Infrared      | $700 \mathrm{ nm}$ to $1 \mathrm{ mm}$ | Thermal imaging, remote controls    |
| Visible light | $400\mathrm{--}700 \mathrm{ nm}$       | Human vision                        |
| Ultraviolet   | $10\mathrm{--}400 \mathrm{ nm}$        | Sterilisation, fluorescence         |
| X-rays        | $0.01\mathrm{--}10 \mathrm{ nm}$       | Medical imaging, security           |
| Gamma rays    | $\lt 0.01 \mathrm{ nm}$                | Cancer treatment, nuclear processes |

### Worked Example 9

A radio station broadcasts at a frequency of $100 \mathrm{ MHz}$. Find the wavelength.

<details>
<summary>Solution</summary>

$$\lambda = \frac{c}{f} = \frac{3.0 \times 10^8}{100 \times 10^6} = 3.0 \mathrm{ m}$$

</details>

### Worked Example 10

A laser emits light of wavelength $532 \mathrm{ nm}$ (green). Find the frequency and the energy of
each photon. (Planck constant $h = 6.63 \times 10^{-34} \mathrm{ J\, s}$)

<details>
<summary>Solution</summary>

$$f = \frac{c}{\lambda} = \frac{3.0 \times 10^8}{532 \times 10^{-9}} = 5.64 \times 10^{14} \mathrm{ Hz}$$

$$E = hf = 6.63 \times 10^{-34} \times 5.64 \times 10^{14} = 3.74 \times 10^{-19} \mathrm{ J}$$

</details>

---

## Common Pitfalls

- Confusing the speed of a wave with the speed of the particles. The wave speed $v = f\lambda$ is
  the speed at which the wave pattern propagates, not the speed of individual particles.
- Forgetting that frequency remains constant when a wave crosses a boundary. It is wavelength and
  speed that change.
- Confusing nodes and antinodes in standing waves. Nodes are points of zero amplitude (minimum);
  antinodes are points of maximum amplitude.
- Misidentifying the type of wave. Sound is longitudinal; light is transverse. Water surface waves
  are a combination.
- When calculating sound intensity level, forgetting that the formula uses $\log_{10}$, not $\ln$.
- Forgetting that a pipe closed at one end only supports odd harmonics.

---

## Summary Table

| Topic                     | Key Formula                         | Key Concept                          |
| ------------------------- | ----------------------------------- | ------------------------------------ |
| Wave equation             | $v = f\lambda$                      | Relates speed, frequency, wavelength |
| Phase difference          | $\Delta\phi = 2\pi\Delta x/\lambda$ | Fraction of a cycle                  |
| Constructive interference | Path difference $= n\lambda$        | Waves in phase                       |
| Destructive interference  | Path difference $= (n+1/2)\lambda$  | Waves in antiphase                   |
| Standing waves (string)   | $f_n = nv/(2L)$                     | All harmonics                        |
| Standing waves (pipe)     | $f_n = nv/(4L)$, $n$ odd            | Odd harmonics only                   |
| Sound intensity           | $I = P/(4\pi r^2)$                  | Inverse square law                   |
| Intensity level           | $\beta = 10\log(I/I_0)$             | Decibels                             |
| EM spectrum               | $c = f\lambda$                      | All EM waves at speed $c$            |

---

## Problem Set

**Problem 1.** A water wave has a wavelength of $2.5 \mathrm{ m}$ and a frequency of
$0.4 \mathrm{ Hz}$. A boat bobs up and down as the wave passes. Find the wave speed and the time
between successive crests passing the boat.

<details>
<summary>Solution</summary>

$$v = f\lambda = 0.4 \times 2.5 = 1.0 \mathrm{ m/s}$$

The time between successive crests equals the period: $T = 1/f = 1/0.4 = 2.5 \mathrm{ s}$

</details>

If you get this wrong, revise: Wave Properties / The Wave Equation

**Problem 2.** Light of wavelength $550 \mathrm{ nm}$ in air enters glass where its speed is
$2.0 \times 10^8 \mathrm{ m/s}$. Find the frequency and the wavelength in glass.

<details>
<summary>Solution</summary>

$$f = \frac{c}{\lambda_{\mathrm{air}}} = \frac{3.0 \times 10^8}{550 \times 10^{-9}} = 5.45 \times 10^{14} \mathrm{ Hz}$$

Frequency remains constant in glass:

$$\lambda_{\mathrm{glass}} = \frac{v_{\mathrm{glass}}}{f} = \frac{2.0 \times 10^8}{5.45 \times 10^{14}} = 3.67 \times 10^{-7} \mathrm{ m} = 367 \mathrm{ nm}$$

</details>

If you get this wrong, revise: Wave Phenomena / Refraction

**Problem 3.** Two speakers are connected to the same signal generator and placed $3 \mathrm{ m}$
apart. They emit sound of frequency $680 \mathrm{ Hz}$. A microphone is moved along a line parallel
to the speakers, $5 \mathrm{ m}$ away. Find the distance between consecutive positions of loud
sound. (Speed of sound $= 340 \mathrm{ m/s}$)

<details>
<summary>Solution</summary>

$$\lambda = \frac{v}{f} = \frac{340}{680} = 0.5 \mathrm{ m}$$

Using the double-slit fringe spacing formula:

$$\Delta y = \frac{\lambda D}{d} = \frac{0.5 \times 5}{3} = 0.833 \mathrm{ m}$$

The spacing between consecutive loud positions is $0.833 \mathrm{ m}$.

</details>

If you get this wrong, revise: Wave Phenomena / Interference

**Problem 4.** A guitar string of length $0.65 \mathrm{ m}$ produces a fundamental note of
$330 \mathrm{ Hz}$. When the string is pressed against a fret to shorten its effective length to
$0.55 \mathrm{ m}$, what is the new fundamental frequency?

<details>
<summary>Solution</summary>

Since $f_1 = v/(2L)$ and $v$ is constant, $f \propto 1/L$:

$$f_{\mathrm{new}} = f_1 \times \frac{L_1}{L_{\mathrm{new}}} = 330 \times \frac{0.65}{0.55} = 330 \times 1.182 = 390 \mathrm{ Hz}$$

</details>

If you get this wrong, revise: Standing Waves / String Fixed at Both Ends

**Problem 5.** A pipe open at both ends is $1.2 \mathrm{ m}$ long. Find the fundamental
frequency and the first three harmonics. (Speed of sound $= 340 \mathrm{ m/s}$)

<details>
<summary>Solution</summary>

For a pipe open at both ends, all harmonics are present:

$$f_1 = \frac{v}{2L} = \frac{340}{2 \times 1.2} = \frac{340}{2.4} = 141.7 \mathrm{ Hz}$$

$$f_2 = 2f_1 = 283.3 \mathrm{ Hz}$$

$$f_3 = 3f_1 = 425.0 \mathrm{ Hz}$$

$$f_4 = 4f_1 = 566.7 \mathrm{ Hz}$$

</details>

If you get this wrong, revise: Standing Waves

**Problem 6.** A pipe closed at one end has a fundamental frequency of $85 \mathrm{ Hz}$. Find
the length of the pipe and the frequency of the next resonant frequency. (Speed of sound
$= 340 \mathrm{ m/s}$)

<details>
<summary>Solution</summary>

$$f_1 = \frac{v}{4L} \implies L = \frac{v}{4f_1} = \frac{340}{4 \times 85} = \frac{340}{340} = 1.0 \mathrm{ m}$$

For a pipe closed at one end, the next resonance after $f_1$ is the **third** harmonic (only odd
harmonics exist):

$$f_3 = 3f_1 = 3 \times 85 = 255 \mathrm{ Hz}$$

</details>

If you get this wrong, revise: Standing Waves / Pipe Closed at One End

**Problem 7.** The intensity of a sound at a distance of $5 \mathrm{ m}$ from a source is
$2 \times 10^{-4} \mathrm{ W/m}^2$. Find the intensity at $20 \mathrm{ m}$ and the intensity level
at both distances.

<details>
<summary>Solution</summary>

At $5 \mathrm{ m}$:
$\beta_1 = 10\log_{10}(2 \times 10^{-4}/10^{-12}) = 10\log_{10}(2 \times 10^8) = 10 \times 8.301 = 83.0 \mathrm{ dB}$

At $20 \mathrm{ m}$:
$I_2 = I_1 \times (5/20)^2 = 2 \times 10^{-4} \times 1/16 = 1.25 \times 10^{-5} \mathrm{ W/m}^2$

$$\beta_2 = 10\log_{10}(1.25 \times 10^{-5}/10^{-12}) = 10\log_{10}(1.25 \times 10^7) = 10 \times 7.097 = 71.0 \mathrm{ dB}$$

</details>

If you get this wrong, revise: Sound Waves / Intensity and Loudness

**Problem 8.** Two sound sources each produce an intensity level of $80 \mathrm{ dB}$ at a point.
If both sources operate simultaneously, what is the combined intensity level?

<details>
<summary>Solution</summary>

$$\beta_1 = 10\log_{10}(I_1/I_0) = 80 \implies I_1/I_0 = 10^8 \implies I_1 = 10^8 I_0$$

Combined intensity: $I_{\mathrm{total}} = 2I_1 = 2 \times 10^8 I_0$

$$\beta_{\mathrm{total}} = 10\log_{10}(2 \times 10^8) = 10\log_{10}(2) + 10\log_{10}(10^8) = 3.01 + 80 = 83.0 \mathrm{ dB}$$

Doubling the intensity increases the level by $3 \mathrm{ dB}$ (not $160 \mathrm{ dB}$).

</details>

If you get this wrong, revise: Sound Waves / Intensity and Loudness

**Problem 9.** A microwave oven operates at a frequency of $2.45 \mathrm{ GHz}$. Find the
wavelength. Why are microwaves particularly effective for heating food?

<details>
<summary>Solution</summary>

$$\lambda = \frac{c}{f} = \frac{3.0 \times 10^8}{2.45 \times 10^9} = 0.122 \mathrm{ m} = 12.2 \mathrm{ cm}$$

Microwaves are effective because water molecules have a resonant frequency close to
$2.45 \mathrm{ GHz}$. The microwaves cause water molecules to oscillate, and the molecular friction
generates thermal energy throughout the food.

</details>

If you get this wrong, revise: Electromagnetic Spectrum

**Problem 10.** A stationary observer hears a sound of frequency $500 \mathrm{ Hz}$ from a source
moving towards them at $30 \mathrm{ m/s}$. Find the apparent frequency heard by the observer.
(Speed of sound $= 340 \mathrm{ m/s}$)

<details>
<summary>Solution</summary>

Using the Doppler effect formula (source moving towards stationary observer):

$$f' = f \times \frac{v}{v - v_s} = 500 \times \frac{340}{340 - 30} = 500 \times \frac{340}{310} = 500 \times 1.097 = 548 \mathrm{ Hz}$$

The apparent frequency is higher than the actual frequency because the source is moving towards
the observer.

</details>

If you get this wrong, revise: Sound Waves

For the A-Level treatment of this topic, see [Wave Properties](https://alevel.wyattau.com/docs/physics/waves/wave-properties).

