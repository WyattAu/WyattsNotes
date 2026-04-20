---
title: Waves and Sound
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: dse-physics-waves-and-sound
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

$$v = f\lambda = 250 \times 1.4 = 350 \mathrm{ m/s}$$

$$\Delta\phi = \frac{2\pi \times 0.35}{1.4} = \frac{\pi}{2} = 90^\circ$$

---

## Wave Phenomena

<PhetSimulation simulationId="waves-on-a-string" title="Waves on a String" />

Experiment with wave speed, frequency, amplitude, and damping to see how they affect the wave pattern.

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

$$\Delta\phi = 0, 2\pi, 4\pi, \ldots \quad \text{or} \quad \text{path difference} = n\lambda$$

**Destructive interference** (cancellation) occurs when waves arrive in antiphase:

$$\Delta\phi = \pi, 3\pi, 5\pi, \ldots \quad \text{or} \quad \text{path difference} = (n + \tfrac{1}{2})\lambda$$

### Worked Example 2

Two coherent sources are $0.8 \mathrm{ m}$ apart and emit waves of wavelength $0.04 \mathrm{ m}$. A
point $P$ is $1.5 \mathrm{ m}$ from one source and $1.7 \mathrm{ m}$ from the other. Is there
constructive or destructive interference at `P`?

Path difference: $\Delta s = 1.7 - 1.5 = 0.2 \mathrm{ m}$

$$\frac{\Delta s}{\lambda} = \frac{0.2}{0.04} = 5$$

Since the path difference is an integer multiple of $\lambda$, constructive interference occurs at
`P`.

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

Only odd harmonics are possible for a pipe closed at one end: $f_n = \frac{nv}{4L}$ for
$n = 1, 3, 5, \ldots$

### Worked Example 3

A string of length $0.65 \mathrm{ m}$ has a fundamental frequency of $440 \mathrm{ Hz}$. Find the
wave speed and the frequency of the third harmonic.

$$v = 2Lf_1 = 2 \times 0.65 \times 440 = 572 \mathrm{ m/s}$$

$$f_3 = 3f_1 = 3 \times 440 = 1320 \mathrm{ Hz}$$

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

### Worked Example 4

A sound source emits power $0.01 \mathrm{ W}$ uniformly in all directions. Find the intensity and
the sound intensity level at a distance of $10 \mathrm{ m}$.

$$I = \frac{P}{4\pi r^2} = \frac{0.01}{4\pi \times 100} = \frac{0.01}{1257} = 7.96 \times 10^{-6} \mathrm{ W/m}^2$$

$$\beta = 10\log_{10}\left(\frac{7.96 \times 10^{-6}}{10^{-12}}\right) = 10\log_{10}(7.96 \times 10^6) = 10 \times 6.90 = 69.0 \mathrm{ dB}$$

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
| Visible light | $400\text{--}700 \mathrm{ nm}$         | Human vision                        |
| Ultraviolet   | $10\text{--}400 \mathrm{ nm}$          | Sterilisation, fluorescence         |
| X-rays        | $0.01\text{--}10 \mathrm{ nm}$         | Medical imaging, security           |
| Gamma rays    | $\lt 0.01 \mathrm{ nm}$                | Cancer treatment, nuclear processes |

### Worked Example 5

A radio station broadcasts at a frequency of $100 \mathrm{ MHz}$. Find the wavelength.

$$\lambda = \frac{c}{f} = \frac{3.0 \times 10^8}{100 \times 10^6} = 3.0 \mathrm{ m}$$

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

---

## Summary Table

| Topic                     | Key Formula                         | Key Concept                          |
| ------------------------- | ----------------------------------- | ------------------------------------ |
| Wave equation             | $v = f\lambda$                      | Relates speed, frequency, wavelength |
| Phase difference          | $\Delta\phi = 2\pi\Delta x/\lambda$ | Fraction of a cycle                  |
| Constructive interference | Path difference $= n\lambda$        | Waves in phase                       |
| Destructive interference  | Path difference $= (n+1/2)\lambda$  | Waves in antiphase                   |
| Standing waves (string)   | $f_n = nv/(2L)$                     | All harmonics                        |
| Sound intensity           | $I = P/(4\pi r^2)$                  | Inverse square law                   |
| Intensity level           | $\beta = 10\log(I/I_0)$             | Decibels                             |
| EM spectrum               | $c = f\lambda$                      | All EM waves at speed $c$            |

---

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** A water wave has a wavelength of $2.5 \mathrm{ m}$ and a frequency of
$0.4 \mathrm{ Hz}$. A boat bobs up and down as the wave passes. Find the wave speed and the time
between successive crests passing the boat.

$$v = f\lambda = 0.4 \times 2.5 = 1.0 \mathrm{ m/s}$$

The time between successive crests equals the period: $T = 1/f = 1/0.4 = 2.5 \mathrm{ s}$

**Question 2:** Two speakers are connected to the same signal generator and placed $3 \mathrm{ m}$
apart. They emit sound of frequency $680 \mathrm{ Hz}$. A microphone is moved along a line parallel
to the speakers, $5 \mathrm{ m}$ away. Find the distance between consecutive positions of loud
sound. (Speed of sound $= 340 \mathrm{ m/s}$)

$$\lambda = \frac{v}{f} = \frac{340}{680} = 0.5 \mathrm{ m}$$

For constructive interference, the path difference must be $n\lambda$. Using the geometry of the
double-slit arrangement:

$$\Delta y = \frac{\lambda D}{d} = \frac{0.5 \times 5}{3} = 0.833 \mathrm{ m}$$

The spacing between consecutive loud positions is $0.833 \mathrm{ m}$.

**Question 3:** A guitar string of length $0.65 \mathrm{ m}$ produces a fundamental note of
$330 \mathrm{ Hz}$. When the string is pressed against a fret to shorten its effective length to
$0.55 \mathrm{ m}$, what is the new fundamental frequency?

Since $f_1 = v/(2L)$ and $v$ is constant, $f \propto 1/L$:

$$f_{\mathrm{new}} = f_1 \times \frac{L_1}{L_{\mathrm{new}}} = 330 \times \frac{0.65}{0.55} = 330 \times 1.182 = 390 \mathrm{ Hz}$$

**Question 4:** The intensity of a sound at a distance of $5 \mathrm{ m}$ from a source is
$2 \times 10^{-4} \mathrm{ W/m}^2$. Find the intensity at $20 \mathrm{ m}$ and the intensity level
at both distances.

At $5 \mathrm{ m}$:
$\beta = 10\log_{10}(2 \times 10^{-4}/10^{-12}) = 10\log_{10}(2 \times 10^8) = 10 \times 8.301 = 83.0 \mathrm{ dB}$

At $20 \mathrm{ m}$:
$I_2 = I_1 \times (5/20)^2 = 2 \times 10^{-4} \times \frac{1}{16} = 1.25 \times 10^{-5} \mathrm{ W/m}^2$

$$\beta_2 = 10\log_{10}(1.25 \times 10^{-5}/10^{-12}) = 10\log_{10}(1.25 \times 10^7) = 10 \times 7.097 = 71.0 \mathrm{ dB}$$

**Question 5:** A microwave oven operates at a frequency of $2.45 \mathrm{ GHz}$. Find the
wavelength. Why are microwaves particularly effective for heating food?

$$\lambda = \frac{c}{f} = \frac{3.0 \times 10^8}{2.45 \times 10^9} = 0.122 \mathrm{ m} = 12.2 \mathrm{ cm}$$

Microwaves are effective because water molecules have a resonant frequency close to
$2.45 \mathrm{ GHz}$. The microwaves cause water molecules to oscillate, and the molecular friction
generates thermal energy throughout the food.

</details>
