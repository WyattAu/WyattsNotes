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

A wave has frequency $250 \mathrm{'\{'} Hz{'\}'}$ and wavelength $1.4 \mathrm{'\{'} m{'\}'}$. Find the wave speed and
the phase difference between two points $0.35 \mathrm{'\{'} m{'\}'}$ apart.

<details>
<summary>Solution</summary>

$$v = f\lambda = 250 \times 1.4 = 350 \mathrm{'\{'} m/s{'\}'}$$

$$\Delta\phi = \frac{2\pi \times 0.35}{1.4} = \frac{\pi}{2} = 90^\circ$$

</details>

### Worked Example 2

A sound wave in air has a wavelength of $0.686 \mathrm{'\{'} m{'\}'}$. When it enters water, its speed
changes to $1480 \mathrm{'\{'} m/s{'\}'}$. Find the frequency of the wave and its wavelength in water.

<details>
<summary>Solution</summary>

Speed in air: $v_{\mathrm{'\{'}air{'\}'}} = 343 \mathrm{'\{'} m/s{'\}'}$ (at $20^\circ\mathrm{'\{'}C{'\}'}$)

$$f = \frac{v_{\mathrm{'\{'}air{'\}'}}}{\lambda_{\mathrm{'\{'}air{'\}'}}} = \frac{343}{0.686} = 500 \mathrm{'\{'} Hz{'\}'}$$

Frequency remains constant when crossing a boundary. In water:

$$\lambda_{\mathrm{'\{'}water{'\}'}} = \frac{v_{\mathrm{'\{'}water{'\}'}}}{f} = \frac{1480}{500} = 2.96 \mathrm{'\{'} m{'\}'}$$

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

$$\Delta\phi = 0, 2\pi, 4\pi, \ldots \quad \mathrm{'\{'}or{'\}'} \quad \mathrm{'\{'}path difference{'\}'} = n\lambda$$

**Destructive interference** (cancellation) occurs when waves arrive in antiphase:

$$\Delta\phi = \pi, 3\pi, 5\pi, \ldots \quad \mathrm{'\{'}or{'\}'} \quad \mathrm{'\{'}path difference{'\}'} = (n + \tfrac{1}{2})\lambda$$

### Worked Example 3

Two coherent sources are $0.8 \mathrm{'\{'} m{'\}'}$ apart and emit waves of wavelength $0.04 \mathrm{'\{'} m{'\}'}$. A
point `P` is $1.5 \mathrm{'\{'} m{'\}'}$ from one source and $1.7 \mathrm{'\{'} m{'\}'}$ from the other. Is there
constructive or destructive interference at `P`?

<details>
<summary>Solution</summary>

Path difference: $\Delta s = 1.7 - 1.5 = 0.2 \mathrm{'\{'} m{'\}'}$

$$\frac{\Delta s}{\lambda} = \frac{0.2}{0.04} = 5$$

Since the path difference is an integer multiple of $\lambda$, constructive interference occurs at
`P`.

</details>

### Worked Example 4

Light of wavelength $600 \mathrm{'\{'} nm{'\}'}$ passes through a double slit with slit separation
$0.1 \mathrm{'\{'} mm{'\}'}$. The interference pattern is observed on a screen $2 \mathrm{'\{'} m{'\}'}$ away. Find
the separation between adjacent bright fringes.

<details>
<summary>Solution</summary>

For a double-slit arrangement, the fringe spacing is:

$$\Delta y = \frac{\lambda D}{d} = \frac{600 \times 10^{-9} \times 2}{0.1 \times 10^{-3}} = \frac{1.2 \times 10^{-6}}{1 \times 10^{-4}} = 0.012 \mathrm{'\{'} m{'\}'} = 12 \mathrm{'\{'} mm{'\}'}$$

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

A string of length $0.65 \mathrm{'\{'} m{'\}'}$ has a fundamental frequency of $440 \mathrm{'\{'} Hz{'\}'}$. Find the
wave speed and the frequency of the third harmonic.

<details>
<summary>Solution</summary>

$$v = 2Lf_1 = 2 \times 0.65 \times 440 = 572 \mathrm{'\{'} m/s{'\}'}$$

$$f_3 = 3f_1 = 3 \times 440 = 1320 \mathrm{'\{'} Hz{'\}'}$$

</details>

### Worked Example 6

A pipe is closed at one end and open at the other. The pipe is $0.85 \mathrm{'\{'} m{'\}'}$ long. Find the
fundamental frequency and the next two resonant frequencies. (Speed of sound $= 340 \mathrm{'\{'} m/s{'\}'}$)

<details>
<summary>Solution</summary>

For a pipe closed at one end, only odd harmonics are present:

$$f_1 = \frac{v}{4L} = \frac{340}{4 \times 0.85} = \frac{340}{3.4} = 100 \mathrm{'\{'} Hz{'\}'}$$

$$f_3 = 3f_1 = 300 \mathrm{'\{'} Hz{'\}'}$$

$$f_5 = 5f_1 = 500 \mathrm{'\{'} Hz{'\}'}$$

The resonant frequencies are $100 \mathrm{'\{'} Hz{'\}'}$, $300 \mathrm{'\{'} Hz{'\}'}$, and $500 \mathrm{'\{'} Hz{'\}'}$.

</details>

---

## Sound Waves

### Nature of Sound

Sound is a longitudinal mechanical wave. It requires a medium for propagation and cannot travel
through a vacuum. The speed of sound depends on the medium:

| Medium                        | Speed of Sound (m/s) |
| ----------------------------- | -------------------- |
| Air (at $20^\circ\mathrm{'\{'}C{'\}'}$) | 343                  |
| Water                         | 1480                 |
| Steel                         | 5960                 |

### Intensity and Loudness

**Intensity** is the power per unit area carried by the wave:

$$I = \frac{P}{4\pi r^2}$$

Intensity follows an inverse square law for a point source.

**Sound intensity level** is measured in decibels (dB):

$$\beta = 10\log_{10}\left(\frac{I}{I_0}\right)$$

where $I_0 = 10^{-12} \mathrm{'\{'} W/m{'\}'}^2$ is the threshold of hearing.

### Worked Example 7

A sound source emits power $0.01 \mathrm{'\{'} W{'\}'}$ uniformly in all directions. Find the intensity and
the sound intensity level at a distance of $10 \mathrm{'\{'} m{'\}'}$.

<details>
<summary>Solution</summary>

$$I = \frac{P}{4\pi r^2} = \frac{0.01}{4\pi \times 100} = \frac{0.01}{1257} = 7.96 \times 10^{-6} \mathrm{'\{'} W/m{'\}'}^2$$

$$\beta = 10\log_{10}\left(\frac{7.96 \times 10^{-6}}{10^{-12}}\right) = 10\log_{10}(7.96 \times 10^6) = 10 \times 6.90 = 69.0 \mathrm{'\{'} dB{'\}'}$$

</details>

### Worked Example 8

The intensity of a sound at $3 \mathrm{'\{'} m{'\}'}$ from a source is $5 \times 10^{-4} \mathrm{'\{'} W/m{'\}'}^2$.
Find the intensity and the sound intensity level at $12 \mathrm{'\{'} m{'\}'}$ from the source.

<details>
<summary>Solution</summary>

Using the inverse square law:

$$I_2 = I_1 \times \left(\frac{r_1}{r_2}\right)^2 = 5 \times 10^{-4} \times \left(\frac{3}{12}\right)^2 = 5 \times 10^{-4} \times \frac{1}{16} = 3.125 \times 10^{-5} \mathrm{'\{'} W/m{'\}'}^2$$

At $3 \mathrm{'\{'} m{'\}'}$:
$\beta_1 = 10\log_{10}(5 \times 10^{-4} / 10^{-12}) = 10\log_{10}(5 \times 10^8) = 10 \times 8.699 = 87.0 \mathrm{'\{'} dB{'\}'}$

At $12 \mathrm{'\{'} m{'\}'}$:
$\beta_2 = 10\log_{10}(3.125 \times 10^{-5} / 10^{-12}) = 10\log_{10}(3.125 \times 10^7) = 10 \times 7.495 = 74.9 \mathrm{'\{'} dB{'\}'}$

The distance quadrupled (factor of 4), so the level decreased by $87.0 - 74.9 = 12.1 \mathrm{'\{'} dB{'\}'}$,
which matches $10\log_{10}(16) = 12.0 \mathrm{'\{'} dB{'\}'}$.

</details>

### Ultrasound

Ultrasound refers to sound waves with frequencies above $20\,000 \mathrm{'\{'} Hz{'\}'}$, beyond the range of
human hearing. Applications include medical imaging, sonar, and non-destructive testing.

---

## Electromagnetic Spectrum

### Properties

Electromagnetic (EM) waves are transverse waves that do not require a medium. All EM waves travel at
the speed of light in vacuum:

$$c = 3.0 \times 10^8 \mathrm{'\{'} m/s{'\}'}$$

The relationship between speed, frequency, and wavelength:

$$c = f\lambda$$

### The EM Spectrum

| Region        | Wavelength Range                       | Typical Use                         |
| ------------- | -------------------------------------- | ----------------------------------- |
| Radio waves   | $\gt 0.1 \mathrm{'\{'} m{'\}'}$                  | Broadcasting, communication         |
| Microwaves    | $1 \mathrm{'\{'} mm{'\}'}$ to $0.1 \mathrm{'\{'} m{'\}'}$  | Cooking, radar, satellite           |
| Infrared      | $700 \mathrm{'\{'} nm{'\}'}$ to $1 \mathrm{'\{'} mm{'\}'}$ | Thermal imaging, remote controls    |
| Visible light | $400\mathrm{'\{'}--{'\}'}700 \mathrm{'\{'} nm{'\}'}$       | Human vision                        |
| Ultraviolet   | $10\mathrm{'\{'}--{'\}'}400 \mathrm{'\{'} nm{'\}'}$        | Sterilisation, fluorescence         |
| X-rays        | $0.01\mathrm{'\{'}--{'\}'}10 \mathrm{'\{'} nm{'\}'}$       | Medical imaging, security           |
| Gamma rays    | $\lt 0.01 \mathrm{'\{'} nm{'\}'}$                | Cancer treatment, nuclear processes |

### Worked Example 9

A radio station broadcasts at a frequency of $100 \mathrm{'\{'} MHz{'\}'}$. Find the wavelength.

<details>
<summary>Solution</summary>

$$\lambda = \frac{c}{f} = \frac{3.0 \times 10^8}{100 \times 10^6} = 3.0 \mathrm{'\{'} m{'\}'}$$

</details>

### Worked Example 10

A laser emits light of wavelength $532 \mathrm{'\{'} nm{'\}'}$ (green). Find the frequency and the energy of
each photon. (Planck constant $h = 6.63 \times 10^{-34} \mathrm{'\{'} J\, s{'\}'}$)

<details>
<summary>Solution</summary>

$$f = \frac{c}{\lambda} = \frac{3.0 \times 10^8}{532 \times 10^{-9}} = 5.64 \times 10^{14} \mathrm{'\{'} Hz{'\}'}$$

$$E = hf = 6.63 \times 10^{-34} \times 5.64 \times 10^{14} = 3.74 \times 10^{-19} \mathrm{'\{'} J{'\}'}$$

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

**Problem 1.** A water wave has a wavelength of $2.5 \mathrm{'\{'} m{'\}'}$ and a frequency of
$0.4 \mathrm{'\{'} Hz{'\}'}$. A boat bobs up and down as the wave passes. Find the wave speed and the time
between successive crests passing the boat.

<details>
<summary>Solution</summary>

$$v = f\lambda = 0.4 \times 2.5 = 1.0 \mathrm{'\{'} m/s{'\}'}$$

The time between successive crests equals the period: $T = 1/f = 1/0.4 = 2.5 \mathrm{'\{'} s{'\}'}$

</details>

If you get this wrong, revise: Wave Properties / The Wave Equation

**Problem 2.** Light of wavelength $550 \mathrm{'\{'} nm{'\}'}$ in air enters glass where its speed is
$2.0 \times 10^8 \mathrm{'\{'} m/s{'\}'}$. Find the frequency and the wavelength in glass.

<details>
<summary>Solution</summary>

$$f = \frac{c}{\lambda_{\mathrm{'\{'}air{'\}'}}} = \frac{3.0 \times 10^8}{550 \times 10^{-9}} = 5.45 \times 10^{14} \mathrm{'\{'} Hz{'\}'}$$

Frequency remains constant in glass:

$$\lambda_{\mathrm{'\{'}glass{'\}'}} = \frac{v_{\mathrm{'\{'}glass{'\}'}}}{f} = \frac{2.0 \times 10^8}{5.45 \times 10^{14}} = 3.67 \times 10^{-7} \mathrm{'\{'} m{'\}'} = 367 \mathrm{'\{'} nm{'\}'}$$

</details>

If you get this wrong, revise: Wave Phenomena / Refraction

**Problem 3.** Two speakers are connected to the same signal generator and placed $3 \mathrm{'\{'} m{'\}'}$
apart. They emit sound of frequency $680 \mathrm{'\{'} Hz{'\}'}$. A microphone is moved along a line parallel
to the speakers, $5 \mathrm{'\{'} m{'\}'}$ away. Find the distance between consecutive positions of loud
sound. (Speed of sound $= 340 \mathrm{'\{'} m/s{'\}'}$)

<details>
<summary>Solution</summary>

$$\lambda = \frac{v}{f} = \frac{340}{680} = 0.5 \mathrm{'\{'} m{'\}'}$$

Using the double-slit fringe spacing formula:

$$\Delta y = \frac{\lambda D}{d} = \frac{0.5 \times 5}{3} = 0.833 \mathrm{'\{'} m{'\}'}$$

The spacing between consecutive loud positions is $0.833 \mathrm{'\{'} m{'\}'}$.

</details>

If you get this wrong, revise: Wave Phenomena / Interference

**Problem 4.** A guitar string of length $0.65 \mathrm{'\{'} m{'\}'}$ produces a fundamental note of
$330 \mathrm{'\{'} Hz{'\}'}$. When the string is pressed against a fret to shorten its effective length to
$0.55 \mathrm{'\{'} m{'\}'}$, what is the new fundamental frequency?

<details>
<summary>Solution</summary>

Since $f_1 = v/(2L)$ and $v$ is constant, $f \propto 1/L$:

$$f_{\mathrm{'\{'}new{'\}'}} = f_1 \times \frac{L_1}{L_{\mathrm{'\{'}new{'\}'}}} = 330 \times \frac{0.65}{0.55} = 330 \times 1.182 = 390 \mathrm{'\{'} Hz{'\}'}$$

</details>

If you get this wrong, revise: Standing Waves / String Fixed at Both Ends

**Problem 5.** A pipe open at both ends is $1.2 \mathrm{'\{'} m{'\}'}$ long. Find the fundamental
frequency and the first three harmonics. (Speed of sound $= 340 \mathrm{'\{'} m/s{'\}'}$)

<details>
<summary>Solution</summary>

For a pipe open at both ends, all harmonics are present:

$$f_1 = \frac{v}{2L} = \frac{340}{2 \times 1.2} = \frac{340}{2.4} = 141.7 \mathrm{'\{'} Hz{'\}'}$$

$$f_2 = 2f_1 = 283.3 \mathrm{'\{'} Hz{'\}'}$$

$$f_3 = 3f_1 = 425.0 \mathrm{'\{'} Hz{'\}'}$$

$$f_4 = 4f_1 = 566.7 \mathrm{'\{'} Hz{'\}'}$$

</details>

If you get this wrong, revise: Standing Waves

**Problem 6.** A pipe closed at one end has a fundamental frequency of $85 \mathrm{'\{'} Hz{'\}'}$. Find
the length of the pipe and the frequency of the next resonant frequency. (Speed of sound
$= 340 \mathrm{'\{'} m/s{'\}'}$)

<details>
<summary>Solution</summary>

$$f_1 = \frac{v}{4L} \implies L = \frac{v}{4f_1} = \frac{340}{4 \times 85} = \frac{340}{340} = 1.0 \mathrm{'\{'} m{'\}'}$$

For a pipe closed at one end, the next resonance after $f_1$ is the **third** harmonic (only odd
harmonics exist):

$$f_3 = 3f_1 = 3 \times 85 = 255 \mathrm{'\{'} Hz{'\}'}$$

</details>

If you get this wrong, revise: Standing Waves / Pipe Closed at One End

**Problem 7.** The intensity of a sound at a distance of $5 \mathrm{'\{'} m{'\}'}$ from a source is
$2 \times 10^{-4} \mathrm{'\{'} W/m{'\}'}^2$. Find the intensity at $20 \mathrm{'\{'} m{'\}'}$ and the intensity level
at both distances.

<details>
<summary>Solution</summary>

At $5 \mathrm{'\{'} m{'\}'}$:
$\beta_1 = 10\log_{10}(2 \times 10^{-4}/10^{-12}) = 10\log_{10}(2 \times 10^8) = 10 \times 8.301 = 83.0 \mathrm{'\{'} dB{'\}'}$

At $20 \mathrm{'\{'} m{'\}'}$:
$I_2 = I_1 \times (5/20)^2 = 2 \times 10^{-4} \times 1/16 = 1.25 \times 10^{-5} \mathrm{'\{'} W/m{'\}'}^2$

$$\beta_2 = 10\log_{10}(1.25 \times 10^{-5}/10^{-12}) = 10\log_{10}(1.25 \times 10^7) = 10 \times 7.097 = 71.0 \mathrm{'\{'} dB{'\}'}$$

</details>

If you get this wrong, revise: Sound Waves / Intensity and Loudness

**Problem 8.** Two sound sources each produce an intensity level of $80 \mathrm{'\{'} dB{'\}'}$ at a point.
If both sources operate simultaneously, what is the combined intensity level?

<details>
<summary>Solution</summary>

$$\beta_1 = 10\log_{10}(I_1/I_0) = 80 \implies I_1/I_0 = 10^8 \implies I_1 = 10^8 I_0$$

Combined intensity: $I_{\mathrm{'\{'}total{'\}'}} = 2I_1 = 2 \times 10^8 I_0$

$$\beta_{\mathrm{'\{'}total{'\}'}} = 10\log_{10}(2 \times 10^8) = 10\log_{10}(2) + 10\log_{10}(10^8) = 3.01 + 80 = 83.0 \mathrm{'\{'} dB{'\}'}$$

Doubling the intensity increases the level by $3 \mathrm{'\{'} dB{'\}'}$ (not $160 \mathrm{'\{'} dB{'\}'}$).

</details>

If you get this wrong, revise: Sound Waves / Intensity and Loudness

**Problem 9.** A microwave oven operates at a frequency of $2.45 \mathrm{'\{'} GHz{'\}'}$. Find the
wavelength. Why are microwaves particularly effective for heating food?

<details>
<summary>Solution</summary>

$$\lambda = \frac{c}{f} = \frac{3.0 \times 10^8}{2.45 \times 10^9} = 0.122 \mathrm{'\{'} m{'\}'} = 12.2 \mathrm{'\{'} cm{'\}'}$$

Microwaves are effective because water molecules have a resonant frequency close to
$2.45 \mathrm{'\{'} GHz{'\}'}$. The microwaves cause water molecules to oscillate, and the molecular friction
generates thermal energy throughout the food.

</details>

If you get this wrong, revise: Electromagnetic Spectrum

**Problem 10.** A stationary observer hears a sound of frequency $500 \mathrm{'\{'} Hz{'\}'}$ from a source
moving towards them at $30 \mathrm{'\{'} m/s{'\}'}$. Find the apparent frequency heard by the observer.
(Speed of sound $= 340 \mathrm{'\{'} m/s{'\}'}$)

<details>
<summary>Solution</summary>

Using the Doppler effect formula (source moving towards stationary observer):

$$f' = f \times \frac{v}{v - v_s} = 500 \times \frac{340}{340 - 30} = 500 \times \frac{340}{310} = 500 \times 1.097 = 548 \mathrm{'\{'} Hz{'\}'}$$

The apparent frequency is higher than the actual frequency because the source is moving towards
the observer.

</details>

If you get this wrong, revise: Sound Waves

For the A-Level treatment of this topic, see [Wave Properties](https://alevel.wyattau.com/docs/physics/waves/wave-properties).

---

:::tip
tip
Ready to test your understanding of **Waves and Sound**? The [diagnostic test](/docs/dse/Physics/diagnostics/diag-waves-sound) contains the hardest questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Waves and Sound with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/dse/Physics/diagnostics/diagnostic-guide) for instructions on self-marking and building a personal test matrix.
:::

---

## Derivations

### Derivation: Doppler Effect for a Moving Source

Consider a source moving towards a stationary observer with speed $v_s$. The source emits waves at
frequency $f$, speed $v$. In one period $T = 1/f$, the source moves a distance $v_s T$ towards the
observer. The wavelength in front of the source is compressed:

$$\lambda' = \lambda - v_s T = \frac{v}{f} - \frac{v_s}{f} = \frac{v - v_s}{f}$$

The observer receives this compressed wave at speed $v$:

$$f' = \frac{v}{\lambda'} = \frac{v}{(v - v_s)/f} = f \cdot \frac{v}{v - v_s}$$

For a source moving away from the observer:

$$f' = f \cdot \frac{v}{v + v_s}$$

### Derivation: General Doppler Effect (Both Source and Observer Moving)

If the observer moves towards the source with speed $v_o$, the relative speed of the waves
approaching the observer is $v + v_o$. The observed frequency is:

$$f' = \frac{v + v_o}{\lambda'}$$

Combining with the moving source case:

$$f' = f \cdot \frac{v \pm v_o}{v \mp v_s}$$

where the upper signs apply when source and observer move towards each other, and the lower signs
apply when they move apart.

### Derivation: Fringe Spacing in Double-Slit Interference

Two coherent sources separated by distance $d$ emit waves of wavelength $\lambda$. The pattern is
observed on a screen at distance $D$ ($D \gg d$). For the $n$-th bright fringe, the path
difference equals $n\lambda$.

For a point on the screen at distance $y$ from the central maximum, the path difference is
approximately:

$$\Delta s \approx d\sin\theta \approx d \cdot \frac{y}{D}$$

For constructive interference: $d \cdot \frac{y}{D} = n\lambda$, so the position of the $n$-th
bright fringe is:

$$y_n = \frac{n\lambda D}{d}$$

The fringe spacing is:

$$\Delta y = y_{n+1} - y_n = \frac{\lambda D}{d}$$

### Derivation: Fundamental Frequency of a Pipe Closed at One End

A pipe of length $L$ closed at one end and open at the other supports a standing wave with a
displacement antinode at the open end and a displacement node at the closed end. The simplest
mode (fundamental) has a quarter-wavelength fitting in the pipe:

$$L = \frac{\lambda_1}{4}$$

$$\lambda_1 = 4L$$

$$f_1 = \frac{v}{\lambda_1} = \frac{v}{4L}$$

The next harmonic fits three quarter-wavelengths ($L = 3\lambda_3/4$), giving $f_3 = 3v/(4L)$.
Only odd harmonics ($n = 1, 3, 5, \ldots$) are possible because the closed end must always be a
node and the open end an antinode.

---

## Experimental Methods

### Measuring the Speed of Sound Using Resonance Tube

**Apparatus:** A long tube partially filled with water (effectively a pipe closed at one end), a
tuning fork of known frequency, and a metre rule.

**Procedure:**
1. Strike the tuning fork and hold it above the open end of the tube.
2. Lower the water level slowly until resonance is heard (a loud, clear sound).
3. Record the length $L_1$ of the air column at the first resonance position.
4. Continue lowering the water to find the second resonance position $L_2$.
5. The fundamental has $L_1 \approx \lambda/4$ and the second resonance has $L_2 \approx 3\lambda/4$.
6. Therefore: $\lambda = 2(L_2 - L_1)$ and $v = f\lambda = 2f(L_2 - L_1)$.

**Why use the difference $L_2 - L_1$?:** The antinode at the open end is slightly outside the tube
(end correction). Using the difference $L_2 - L_1 = \lambda/2$ eliminates the end correction.

**Sources of error:**
- Difficulty in pinpointing the exact resonance position (judging maximum loudness by ear).
- The end correction introduces a systematic error in $L_1$ alone.
- Temperature affects the speed of sound (record room temperature).

### Two-Source Interference with Sound

**Apparatus:** Two loudspeakers connected to the same signal generator (coherent sources), a
microphone on a movable track, and an oscilloscope.

**Procedure:**
1. Place the speakers a distance $d$ apart.
2. Move the microphone along a line parallel to the speakers at distance $D$ away.
3. Record positions of maximum amplitude (constructive interference) and minimum amplitude
   (destructive interference).
4. Measure the spacing $\Delta y$ between consecutive maxima.
5. Verify $\Delta y = \lambda D / d$ and calculate $\lambda = \Delta y \cdot d / D$.
6. Calculate $v = f\lambda$.

**Expected result:** The maxima and minima should be equally spaced. The spacing should increase
if $d$ is decreased or $D$ is increased.

### Measuring Wavelength of Light Using a Diffraction Grating

**Apparatus:** A laser or monochromatic light source, a diffraction grating with known number of
lines per mm ($N$), and a screen.

**Procedure:**
1. Shine the laser through the diffraction grating perpendicular to the grating.
2. Measure the distance $D$ from the grating to the screen.
3. Measure the distance $x_n$ from the central maximum to the $n$-th order maximum on the screen.
4. The grating spacing: $d = 1/N$.
5. For small angles: $\sin\theta_n \approx \tan\theta_n = x_n / D$.
6. Using $d\sin\theta_n = n\lambda$: $\lambda = \frac{d \cdot x_n}{nD}$.

**Improvements:** Use a spectrometer for more precise angle measurements. Measure on both sides
and average to reduce error.

---

## Data Analysis and Uncertainty

### Significant Figures in Wave Calculations

When calculating wave quantities, the result should be given to the same number of significant
figures as the least precise measurement.

**Example:** A wave has wavelength $(2.50 \pm 0.01) \mathrm{'\{'} m{'\}'}$ and frequency $(125.0 \pm 0.5) \mathrm{'\{'} Hz{'\}'}$.

$$v = f\lambda = 125.0 \times 2.50 = 312.5 \mathrm{'\{'} m/s{'\}'}$$

$$\frac{\Delta v}{v} = \sqrt{\left(\frac{0.01}{2.50}\right)^2 + \left(\frac{0.5}{125.0}\right)^2} = \sqrt{0.000016 + 0.000016} = \sqrt{0.000032} = 0.00566 = 0.57\%$$

$$\Delta v = 0.00566 \times 312.5 = 1.77 \mathrm{'\{'} m/s{'\}'}$$

$$v = (312.5 \pm 1.8) \mathrm{'\{'} m/s{'\}'}$$

### Analysing Standing Wave Data

When verifying the standing wave formula $f_n = nv/(2L)$ for a string:
- Plot $f_n$ (y-axis) versus $n$ (x-axis). The gradient should be $v/(2L)$.
- Plot $f_n$ (y-axis) versus $1/L$ (x-axis). The gradient should be $nv/2$.
- A straight line through the origin confirms the relationship.
- Non-linear data suggests the string does not obey the ideal wave equation (e.g., stiffness effects).

---

## Additional Worked Examples

### Worked Example 11

A police car sounding a siren of frequency $800 \mathrm{'\{'} Hz{'\}'}$ is chasing a speeding car. The police
car travels at $40 \mathrm{'\{'} m/s{'\}'}$ and the speeding car at $30 \mathrm{'\{'} m/s{'\}'}$, both in the same
direction. Find the frequency heard by the driver of the speeding car. (Speed of sound
$= 340 \mathrm{'\{'} m/s{'\}'}$)

<details>
<summary>Solution</summary>

Source (police) moving towards observer (speeding car): $v_s = 40 \mathrm{'\{'} m/s{'\}'}$ towards observer.
Observer moving away from source: $v_o = 30 \mathrm{'\{'} m/s{'\}'}$ away from source.

Using the general formula with source approaching, observer receding:

$$f' = f \cdot \frac{v - v_o}{v - v_s} = 800 \times \frac{340 - 30}{340 - 40} = 800 \times \frac{310}{300} = 800 \times 1.033 = 827 \mathrm{'\{'} Hz{'\}'}$$

</details>

### Worked Example 12

Light of wavelength $550 \mathrm{'\{'} nm{'\}'}$ is incident normally on a diffraction grating with
$500 \mathrm{'\{'} lines/mm{'\}'}$. Find the angles of the first and second order maxima, and determine the
maximum number of orders visible.

<details>
<summary>Solution</summary>

$$d = \frac{1}{500} \mathrm{'\{'} mm{'\}'} = \frac{1}{500 \times 10^3} \mathrm{'\{'} m{'\}'} = 2.0 \times 10^{-6} \mathrm{'\{'} m{'\}'}$$

First order ($n = 1$):

$$\sin\theta_1 = \frac{\lambda}{d} = \frac{550 \times 10^{-9}}{2.0 \times 10^{-6}} = 0.275$$

$$\theta_1 = \sin^{-1}(0.275) = 16.0^\circ$$

Second order ($n = 2$):

$$\sin\theta_2 = \frac{2\lambda}{d} = 0.550$$

$$\theta_2 = \sin^{-1}(0.550) = 33.4^\circ$$

Maximum order: $n_{\max}$ when $\sin\theta = 1$:

$$n_{\max} = \frac{d}{\lambda} = \frac{2.0 \times 10^{-6}}{550 \times 10^{-9}} = 3.64$$

Since $n$ must be an integer, the maximum number of orders is **3** (on each side, plus the
central maximum).

</details>

### Worked Example 13

A stationary source emits sound of frequency $440 \mathrm{'\{'} Hz{'\}'}$. An observer moves directly
towards the source at $15 \mathrm{'\{'} m/s{'\}'}$, then directly away at the same speed. Find the two
observed frequencies and the change in observed wavelength. (Speed of sound $= 340 \mathrm{'\{'} m/s{'\}'}$)

<details>
<summary>Solution</summary>

Approaching: $f' = f \cdot \frac{v + v_o}{v} = 440 \times \frac{340 + 15}{340} = 440 \times 1.044 = 459 \mathrm{'\{'} Hz{'\}'}$

Receding: $f' = f \cdot \frac{v - v_o}{v} = 440 \times \frac{340 - 15}{340} = 440 \times 0.956 = 421 \mathrm{'\{'} Hz{'\}'}$

The wavelength in the medium is unchanged: $\lambda = 340/440 = 0.773 \mathrm{'\{'} m{'\}'}$. The
observer does not change the wavelength in the medium; only the perceived frequency changes
because the observer encounters wavefronts at a different rate.

</details>

---

## Exam-Style Questions

### Question 1 (DSE Structured)

A student sets up an experiment to measure the wavelength of light from a laser using a double-slit
arrangement. The slit separation is $0.40 \mathrm{'\{'} mm{'\}'}$ and the screen is $1.50 \mathrm{'\{'} m{'\}'}$ from
the slits.

(a) The student measures the distance between 10 bright fringes as $22.5 \mathrm{'\{'} mm{'\}'}$. Calculate
the wavelength of the laser light.

(b) The student estimates the uncertainty in the fringe spacing measurement as $\pm 0.5 \mathrm{'\{'} mm{'\}'}$
and the slit separation uncertainty as $\pm 0.01 \mathrm{'\{'} mm{'\}'}$. Calculate the percentage
uncertainty in the wavelength.

(c) State three conditions necessary for a clear interference pattern to be observed.

(d) Explain what happens to the interference pattern if white light is used instead of a laser.

<details>
<summary>Solution</summary>

(a) Fringe spacing: $\Delta y = \frac{22.5}{10} = 2.25 \mathrm{'\{'} mm{'\}'} = 2.25 \times 10^{-3} \mathrm{'\{'} m{'\}'}$

$$\lambda = \frac{\Delta y \cdot d}{D} = \frac{2.25 \times 10^{-3} \times 0.40 \times 10^{-3}}{1.50} = \frac{9.0 \times 10^{-7}}{1.50} = 6.0 \times 10^{-7} \mathrm{'\{'} m{'\}'} = 600 \mathrm{'\{'} nm{'\}'}$$

(b) Percentage uncertainty in fringe spacing: $\frac{0.5/10}{2.25} \times 100\% = \frac{0.05}{2.25} \times 100\% = 2.2\%$

Percentage uncertainty in slit separation: $\frac{0.01}{0.40} \times 100\% = 2.5\%$

$$\frac{\Delta\lambda}{\lambda} = \sqrt{(2.2\%)^2 + (2.5\%)^2} = \sqrt{4.84 + 6.25} = \sqrt{11.09} = 3.3\%$$

$$\Delta\lambda = 0.033 \times 600 = 20 \mathrm{'\{'} nm{'\}'}$$

$$\lambda = (600 \pm 20) \mathrm{'\{'} nm{'\}'}$$

(c) Three conditions for clear interference:
1. The sources must be coherent (constant phase relationship).
2. The waves must have the same frequency (monochromatic).
3. The waves must have similar amplitudes for good contrast between maxima and minima.

(d) With white light, each wavelength produces its own fringe pattern with different fringe spacings
($\Delta y \propto \lambda$). The central maximum is white (all wavelengths constructively interfere
at $\Delta s = 0$), but higher-order fringes are coloured with blue fringes closer to the centre
and red fringes further out. The pattern becomes blurred after a few orders because the fringes
overlap.

</details>

### Question 2 (DSE Structured)

A stationary observer stands near a road. A car sounding a horn of frequency $500 \mathrm{'\{'} Hz{'\}'}$
approaches at $25 \mathrm{'\{'} m/s{'\}'}$, passes the observer, and then moves away at the same speed.

(a) Calculate the frequency heard by the observer as the car approaches.

(b) Calculate the frequency heard by the observer as the car moves away.

(c) Calculate the percentage change in frequency as the car passes.

(d) Explain why the observer hears a sudden change in pitch as the car passes, rather than a
gradual change.

<details>
<summary>Solution</summary>

(a) Approaching: $f' = f \cdot \frac{v}{v - v_s} = 500 \times \frac{340}{340 - 25} = 500 \times \frac{340}{315} = 500 \times 1.079 = 540 \mathrm{'\{'} Hz{'\}'}$

(b) Receding: $f' = f \cdot \frac{v}{v + v_s} = 500 \times \frac{340}{340 + 25} = 500 \times \frac{340}{365} = 500 \times 0.932 = 466 \mathrm{'\{'} Hz{'\}'}$

(c) As the car approaches, the observed frequency is $540 \mathrm{'\{'} Hz{'\}'}$. As it recedes, $466 \mathrm{'\{'} Hz{'\}'}$.

The percentage change from approaching to receding:

$$\frac{540 - 466}{540} \times 100\% = \frac{74}{540} \times 100\% = 13.7\%$$

(d) The rapid change in pitch occurs because the radial component of the velocity (the component
along the line joining the source and observer) changes sign abruptly as the car passes. Just
before passing, the radial velocity is $+v_s$ (approaching); just after, it is $-v_s$ (receding).
The Doppler shift depends on the radial velocity, not the total velocity, so the frequency drops
sharply at the moment of passing.

</details>

### Question 3 (DSE Structured)

A stretched string of length $0.80 \mathrm{'\{'} m{'\}'}$ is fixed at both ends. A student investigates the
relationship between the tension $T$ in the string and the fundamental frequency $f_1$.

(a) Derive the expression $f_1 = \frac{1}{2L}\sqrt{\frac{T}{\mu}}$, where $\mu$ is the mass per
unit length of the string.

(b) The student measures the following data:

| Tension $T$ (N) | Frequency $f_1$ (Hz) |
| --------------- | -------------------- |
| 10              | 125                  |
| 20              | 177                  |
| 40              | 250                  |
| 60              | 306                  |
| 80              | 354                  |

The mass per unit length of the string is $4.0 \times 10^{-4} \mathrm{'\{'} kg/m{'\}'}$. Plot a suitable
graph to verify the relationship and determine the length of the string from the gradient.

(c) State two sources of error in this experiment and suggest improvements.

<details>
<summary>Solution</summary>

(a) For the fundamental mode: $\lambda_1 = 2L$ and $v = f_1 \lambda_1 = 2Lf_1$.

The wave speed on a string is $v = \sqrt{T/\mu}$.

Therefore: $2Lf_1 = \sqrt{T/\mu}$

$$f_1 = \frac{1}{2L}\sqrt{\frac{T}{\mu}}$$

This shows that $f_1 \propto \sqrt{T}$, or equivalently, $f_1^2 \propto T$.

(b) Plot $f_1^2$ versus $T$:

| $T$ (N) | $f_1^2$ ($\mathrm{'\{'} Hz{'\}'}^2$) |
| ------- | -------------------------- |
| 10      | $125^2 = 15625$           |
| 20      | $177^2 = 31329$           |
| 40      | $250^2 = 62500$           |
| 60      | $306^2 = 93636$           |
| 80      | $354^2 = 125316$          |

The gradient of the $f_1^2$ vs $T$ graph:

$$\mathrm{'\{'}Gradient{'\}'} = \frac{\Delta f_1^2}{\Delta T} \approx \frac{125316 - 15625}{80 - 10} = \frac{109691}{70} = 1567 \mathrm{'\{'} Hz{'\}'}^2/\mathrm{'\{'}N{'\}'}$$

From the formula: $f_1^2 = \frac{T}{4L^2\mu}$, so the gradient $= \frac{1}{4L^2\mu}$.

$$L = \sqrt{\frac{1}{4\mu \times \mathrm{'\{'}gradient{'\}'}}} = \sqrt{\frac{1}{4 \times 4.0 \times 10^{-4} \times 1567}} = \sqrt{\frac{1}{2.507}} = \sqrt{0.399} = 0.631 \mathrm{'\{'} m{'\}'}$$

This is close to the stated $0.80 \mathrm{'\{'} m{'\}'}$ (the discrepancy may be due to data rounding or
stiffness effects in the string).

(c) Two sources of error:
1. **Difficulty measuring frequency accurately** by ear or with a stroboscope. Improvement: use a
   frequency meter or an oscilloscope.
2. **The string may not be perfectly uniform** in mass per unit length. Improvement: use a
   uniform steel wire and measure $\mu$ precisely by weighing a known length.

</details>

### Question 4 (DSE Structured)

(a) Distinguish between transverse and longitudinal waves, giving one example of each.

(b) Water waves in a ripple tank pass through a gap of width $4.0 \mathrm{'\{'} cm{'\}'}$. The wavelength of
the waves is $2.0 \mathrm{'\{'} cm{'\}'}$. Describe and explain the diffraction pattern observed.

(c) If the gap width is increased to $10.0 \mathrm{'\{'} cm{'\}'}$, describe how the diffraction pattern
changes.

(d) Explain why sound waves can diffract around buildings but light waves cannot.

<details>
<summary>Solution</summary>

(a) In a transverse wave, the particle displacement is perpendicular to the direction of energy
propagation. Example: light waves or water surface waves.

In a longitudinal wave, the particle displacement is parallel to the direction of energy
propagation. Example: sound waves.

(b) Since the gap width ($d = 4.0 \mathrm{'\{'} cm{'\}'}$) is twice the wavelength ($\lambda = 2.0 \mathrm{'\{'} cm{'\}'}$),
significant diffraction occurs. The waves spread out into the region beyond the gap. The
diffraction is considerable because $d/\lambda = 2$, which is close to the condition for maximum
diffraction ($d \approx \lambda$). A semicircular wavefront is observed beyond the gap.

(c) When the gap width increases to $10.0 \mathrm{'\{'} cm{'\}'}$ ($d/\lambda = 5$), the diffraction is
much less pronounced. The waves spread out less and the pattern becomes more like the geometric
shadow of the gap. There is still some spreading at the edges, but the central region is
relatively undiffracted.

(d) Diffraction is most significant when the wavelength is comparable to the size of the obstacle
or gap. Sound waves have wavelengths of order centimetres to metres (similar to building
dimensions), so they diffract readily around buildings. Light waves have wavelengths of order
$10^{-7} \mathrm{'\{'} m{'\}'}$, which is much smaller than building dimensions, so diffraction of light
around buildings is negligible.

</details>

### Question 5 (DSE Structured)

A pipe is open at both ends and has length $1.00 \mathrm{'\{'} m{'\}'}$. The speed of sound in air is
$340 \mathrm{'\{'} m/s{'\}'}$.

(a) Calculate the fundamental frequency and the first three overtones.

(b) If one end of the pipe is now closed, calculate the new fundamental frequency and the first
two overtones.

(c) Explain why a pipe closed at one end cannot produce even harmonics.

(d) The air temperature increases from $20^\circ\mathrm{'\{'}C{'\}'}$ to $30^\circ\mathrm{'\{'}C{'\}'}$. By what
percentage does the fundamental frequency of the open pipe change? (The speed of sound in air is
proportional to $\sqrt{T}$ in kelvin.)

<details>
<summary>Solution</summary>

(a) Open pipe: all harmonics present, $f_n = \frac{nv}{2L}$ for $n = 1, 2, 3, 4$.

$$f_1 = \frac{340}{2 \times 1.00} = 170 \mathrm{'\{'} Hz{'\}'}$$

$$f_2 = 2 \times 170 = 340 \mathrm{'\{'} Hz{'\}'}$$

$$f_3 = 3 \times 170 = 510 \mathrm{'\{'} Hz{'\}'}$$

$$f_4 = 4 \times 170 = 680 \mathrm{'\{'} Hz{'\}'}$$

(b) Closed pipe: only odd harmonics, $f_n = \frac{nv}{4L}$ for $n = 1, 3, 5$.

$$f_1 = \frac{340}{4 \times 1.00} = 85.0 \mathrm{'\{'} Hz{'\}'}$$

$$f_3 = 3 \times 85.0 = 255 \mathrm{'\{'} Hz{'\}'}$$

$$f_5 = 5 \times 85.0 = 425 \mathrm{'\{'} Hz{'\}'}$$

(c) A pipe closed at one end must have a displacement node at the closed end and an antinode at
the open end. The boundary conditions require that an odd number of quarter-wavelengths fit in
the pipe: $L = (2n - 1)\lambda/4$ for $n = 1, 2, 3, \ldots$. Even harmonics would require a
node at the open end or an antinode at the closed end, which violates the boundary conditions.

(d) $T_1 = 20 + 273 = 293 \mathrm{'\{'} K{'\}'}$, $T_2 = 30 + 273 = 303 \mathrm{'\{'} K{'\}'}$.

$$\frac{v_2}{v_1} = \sqrt{\frac{T_2}{T_1}} = \sqrt{\frac{303}{293}} = \sqrt{1.0341} = 1.0169$$

Since $f \propto v$ (for a fixed pipe length):

$$\frac{f_2}{f_1} = 1.0169$$

The fundamental frequency increases by approximately **1.7%**.

### Extended Derivation: Speed of Sound in Terms of Bulk Modulus

The speed of a longitudinal wave in a medium depends on the elastic properties and density of the
medium. For sound in a gas or liquid:

$$v = \sqrt{\frac{B}{\rho}}$$

where $B$ is the bulk modulus (a measure of the medium's resistance to compression) and $\rho$
is the density.

For an ideal gas undergoing adiabatic compression:

$$B = \gamma P$$

where $\gamma = C_p/C_v$ is the ratio of specific heats (adibatic index). Therefore:

$$v = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma RT}{M}}$$

For air at $20^\circ\mathrm{'\{'}C{'\}'}$ ($293 \mathrm{'\{'} K{'\}'}$), $\gamma = 1.4$, $M = 0.029 \mathrm{'\{'} kg/mol{'\}'}$:

$$v = \sqrt{\frac{1.4 \times 8.31 \times 293}{0.029}} = \sqrt{\frac{3407}{0.029}} = \sqrt{117483} = 343 \mathrm{'\{'} m/s{'\}'}$$

This matches the accepted value and shows that the speed of sound in air increases with
temperature (as $v \propto \sqrt{T}$).

### Extended Worked Example: Measuring the Speed of Sound Using an Echo

A student stands $85 \mathrm{'\{'} m{'\}'}$ from a large wall and claps her hands. She hears the echo
$0.50 \mathrm{'\{'} s{'\}'}$ after clapping. Calculate the speed of sound.

<details>
<summary>Solution</summary>

The sound travels to the wall and back, so the total distance is $2 \times 85 = 170 \mathrm{'\{'} m{'\}'}$.

$$v = \frac{d}{t} = \frac{170}{0.50} = 340 \mathrm{'\{'} m/s{'\}'}$$

</details>

### Extended Worked Example: Beat Frequency

Two tuning forks are sounded together. One has frequency $256 \mathrm{'\{'} Hz{'\}'}$ and the other has
frequency $260 \mathrm{'\{'} Hz{'\}'}$. Calculate the beat frequency heard and explain the phenomenon.

<details>
<summary>Solution</summary>

The beat frequency is the difference between the two frequencies:

$$f_{\mathrm{'\{'}beat{'\}'}} = |f_1 - f_2| = |256 - 260| = 4 \mathrm{'\{'} Hz{'\}'}$$

The observer hears a sound that waxes and wanes in loudness 4 times per second. Beats occur
because the two sound waves periodically come into and out of phase, producing alternating
constructive and destructive interference.

</details>

</details>

