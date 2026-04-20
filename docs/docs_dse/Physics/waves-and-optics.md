---
id: dse-physics-waves-and-optics
title: Physics - Waves and Optics
description:
  DSE Physics notes on wave properties, sound, light, electromagnetic spectrum, reflection,
  refraction, and interference.
slug: physics-waves-and-optics
---

## Nature of Waves

A wave is a disturbance that transfers energy from one point to another without transferring matter.
Waves can be classified by the direction of particle motion relative to the direction of wave
propagation.

### Transverse Waves

In a transverse wave, the particle displacement is perpendicular to the direction of wave
propagation.

Examples: light waves, water waves (surface), waves on a string, electromagnetic waves.

### Longitudinal Waves

In a longitudinal wave, the particle displacement is parallel to the direction of wave propagation.

Examples: sound waves, compression waves in a spring.

### Wave Terminology

| Term       | Symbol    | SI Unit | Definition                                       |
| ---------- | --------- | ------- | ------------------------------------------------ |
| Wavelength | $\lambda$ | m       | Distance between two consecutive points in phase |
| Frequency  | $f$       | Hz      | Number of complete oscillations per second       |
| Period     | $T$       | s       | Time for one complete oscillation                |
| Amplitude  | $A$       | m       | Maximum displacement from equilibrium            |
| Wave speed | $v$       | m/s     | Speed at which the wave propagates               |
| Wavefront  | —         | —       | Line joining all points in phase                 |

### The Wave Equation

$$v = f\lambda$$

This is a fundamental relationship connecting wave speed, frequency, and wavelength.

Since $f = \frac{1}{T}$, we can also write:

$$v = \frac{\lambda}{T}$$

:::info
The wave equation applies to all types of waves: transverse, longitudinal, mechanical, and
electromagnetic.
:::

### Worked Example 1

A sound wave has a frequency of $440 \mathrm{ Hz}$ and a wavelength of $0.78 \mathrm{ m}$. Find the
speed of sound.

$$v = f\lambda = 440 \times 0.78 = 343.2 \mathrm{ m/s}$$

### Phase and Phase Difference

Two points on a wave are **in phase** if they have the same displacement and are moving in the same
direction. Points separated by a whole number of wavelengths are in phase.

**Phase difference** is the fraction of a cycle by which one wave leads or lags another:

$$\mathrm{Phase difference} = \frac{\Delta x}{\lambda} \times 360^\circ = \frac{\Delta x}{\lambda} \times 2\pi \mathrm{ rad}$$

Points that are half a wavelength apart are in **antiphase** (phase difference $= 180^\circ$ or
$\pi \mathrm{ rad}$).

---

## Wave Properties

### Reflection

<PhetSimulation simulationId="waves-on-a-string" title="Waves on a String" />

Adjust frequency, amplitude, and damping to explore wave behaviour on a virtual string.

Reflection occurs when a wave bounces off a boundary. The law of reflection states:

- The angle of incidence equals the angle of reflection: $\theta_i = \theta_r$
- The incident ray, reflected ray, and normal all lie in the same plane

### Refraction

Refraction is the change in direction of a wave as it passes from one medium to another with a
different wave speed.

**Snell's Law:**

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

Where $n$ is the refractive index of the medium and $\theta$ is the angle measured from the normal.

The refractive index is defined as:

$$n = \frac{c}{v}$$

Where $c$ is the speed of light in vacuum and $v$ is the speed of light in the medium.

:::info
When a wave enters a denser medium (higher refractive index), it slows down and bends
**towards** the normal. When entering a less dense medium, it speeds up and bends **away** from the
normal.
:::

### Total Internal Reflection

Total internal reflection occurs when:

1. Light travels from a denser medium to a less dense medium ($n_1 \gt n_2$)
2. The angle of incidence exceeds the critical angle $\theta_c$

The critical angle is found when the refracted ray travels along the boundary
($\theta_2 = 90^\circ$):

$$\sin\theta_c = \frac{n_2}{n_1}$$

### Worked Example 2

Light travels from glass ($n = 1.5$) to air ($n = 1.0$). Find the critical angle.

$$\sin\theta_c = \frac{1.0}{1.5} = 0.667$$

$$\theta_c = \sin^{-1}(0.667) = 41.8^\circ$$

### Diffraction

Diffraction is the spreading of waves as they pass through a gap or around an obstacle. The amount
of diffraction depends on the ratio of the wavelength to the gap width.

- Maximum diffraction occurs when the gap width is approximately equal to the wavelength
- When the gap is much wider than the wavelength, diffraction is negligible

### Interference

Interference occurs when two or more waves superpose (overlap). The principle of superposition
states that the resultant displacement at any point is the sum of the individual displacements.

**Constructive interference** occurs when waves meet in phase:

$$\mathrm{Path difference} = n\lambda \quad (n = 0, 1, 2, \ldots)$$

**Destructive interference** occurs when waves meet in antiphase:

$$\mathrm{Path difference} = \left(n + \frac{1}{2}\right)\lambda \quad (n = 0, 1, 2, \ldots)$$

### Worked Example 3

Two coherent sources are $0.5 \mathrm{ mm}$ apart and produce an interference pattern on a screen
$1.2 \mathrm{ m}$ away. The fringe spacing is $1.2 \mathrm{ mm}$. Find the wavelength of the light.

Using the double-slit formula:

$$\lambda = \frac{ay}{D} = \frac{0.5 \times 10^{-3} \times 1.2 \times 10^{-3}}{1.2} = 5 \times 10^{-7} \mathrm{ m} = 500 \mathrm{ nm}$$

---

## Stationary Waves

A stationary (standing) wave is formed when two waves of the same frequency and amplitude travel in
opposite directions and superpose.

### Properties of Stationary Waves

- Nodes: points of zero amplitude (always at rest)
- Antinodes: points of maximum amplitude
- The distance between adjacent nodes $= \frac{\lambda}{2}$
- The distance between a node and the adjacent antinode $= \frac{\lambda}{4}$
- All points between nodes are in phase
- Points in adjacent loops are in antiphase

### Stationary Waves on a String

For a string of length $L$ fixed at both ends:

| Mode                       | Frequency            | Wavelength                 | Description     |
| -------------------------- | -------------------- | -------------------------- | --------------- |
| Fundamental (1st harmonic) | $f_1 = \frac{v}{2L}$ | $\lambda_1 = 2L$           | One antinode    |
| 2nd harmonic               | $f_2 = 2f_1$         | $\lambda_2 = L$            | Two antinodes   |
| 3rd harmonic               | $f_3 = 3f_1$         | $\lambda_3 = \frac{2L}{3}$ | Three antinodes |
| $n$th harmonic             | $f_n = nf_1$         | $\lambda_n = \frac{2L}{n}$ | $n$ antinodes   |

### Worked Example 4

A string of length $0.8 \mathrm{ m}$ has a fundamental frequency of $220 \mathrm{ Hz}$. Find the wave
speed and the frequency of the third harmonic.

$$v = f_1 \times \lambda_1 = 220 \times 2(0.8) = 352 \mathrm{ m/s}$$

$$f_3 = 3f_1 = 3 \times 220 = 660 \mathrm{ Hz}$$

---

## Sound Waves

### Properties of Sound

Sound is a longitudinal mechanical wave that requires a medium to propagate. It cannot travel
through a vacuum.

| Property                           | Description                            |
| ---------------------------------- | -------------------------------------- |
| Speed in air at $20^\circ\mathrm{C}$ | Approximately $343 \mathrm{ m/s}$        |
| Speed in water                     | Approximately $1480 \mathrm{ m/s}$       |
| Speed in steel                     | Approximately $5960 \mathrm{ m/s}$       |
| Audible range                      | $20 \mathrm{ Hz}$ to $20,000 \mathrm{ Hz}$ |
| Infrasonic                         | Below $20 \mathrm{ Hz}$                  |
| Ultrasonic                         | Above $20,000 \mathrm{ Hz}$              |

### Intensity and Loudness

The intensity of a sound wave is the power per unit area:

$$I = \frac{P}{A}$$

Intensity is proportional to the square of the amplitude:

$$I \propto A^2$$

The loudness level is measured in decibels (dB):

$$\beta = 10\log_{10}\left(\frac{I}{I_0}\right)$$

Where $I_0 = 10^{-12} \mathrm{ W/m}^2$ is the threshold of hearing.

:::warning
Loudness is a subjective measure (perceived by the ear) while intensity is an objective
physical quantity. A $10 \mathrm{ dB}$ increase corresponds to a $10\times$ increase in intensity, but
is perceived as roughly a doubling of loudness.
:::

### Worked Example 5

The intensity of one sound is $10^{-4} \mathrm{ W/m}^2$ and another is $10^{-2} \mathrm{ W/m}^2$. Find
the difference in loudness level.

$$\Delta\beta = 10\log_{10}\left(\frac{10^{-2}}{10^{-4}}\right) = 10\log_{10}(100) = 10 \times 2 = 20 \mathrm{ dB}$$

### Ultrasound

Ultrasound has frequencies above $20,000 \mathrm{ Hz}$. Applications include:

- Medical imaging (sonography)
- Non-destructive testing of materials
- Cleaning of precision instruments
- Depth sounding (echo sounding)

---

## The Electromagnetic Spectrum

Electromagnetic waves are transverse waves that can travel through a vacuum at the speed of light
$c = 3 \times 10^8 \mathrm{ m/s}$.

### EM Spectrum Summary

| Type          | Wavelength Range                     | Frequency Range                                       | Source                       |
| ------------- | ------------------------------------ | ----------------------------------------------------- | ---------------------------- |
| Radio waves   | $\gt 0.1 \mathrm{ m}$                  | $\lt 3 \times 10^9 \mathrm{ Hz}$                        | Oscillating circuits         |
| Microwaves    | $0.1 \mathrm{ mm}$ to $0.1 \mathrm{ m}$  | $3 \times 10^9$ to $3 \times 10^{11} \mathrm{ Hz}$      | Magnetron                    |
| Infrared      | $700 \mathrm{ nm}$ to $1 \mathrm{ mm}$   | $3 \times 10^{11}$ to $4 \times 10^{14} \mathrm{ Hz}$   | Hot objects                  |
| Visible light | $400 \mathrm{ nm}$ to $700 \mathrm{ nm}$ | $4 \times 10^{14}$ to $7.5 \times 10^{14} \mathrm{ Hz}$ | Luminous objects             |
| Ultraviolet   | $10 \mathrm{ nm}$ to $400 \mathrm{ nm}$  | $7.5 \times 10^{14}$ to $3 \times 10^{16} \mathrm{ Hz}$ | Hot objects, discharge tubes |
| X-rays        | $0.01 \mathrm{ nm}$ to $10 \mathrm{ nm}$ | $3 \times 10^{16}$ to $3 \times 10^{19} \mathrm{ Hz}$   | Electron bombardment         |
| Gamma rays    | $\lt 0.01 \mathrm{ nm}$                | $\gt 3 \times 10^{19} \mathrm{ Hz}$                     | Radioactive decay            |

All EM waves:

- Travel at $c = 3 \times 10^8 \mathrm{ m/s}$ in vacuum
- Are transverse waves
- Can be polarised
- Can travel through a vacuum
- Obey the wave equation $c = f\lambda$
- Can be reflected, refracted, and diffracted

:::tip
For the DSE exam, remember the order of the EM spectrum from longest to shortest wavelength:
**R**adio, **M**icrowaves, **I**nfrared, **V**isible, **U**ltraviolet, **X**-rays, **G**amma rays
(RMIVUXG).
:::

---

## Light

### Reflection of Light

Plane mirrors produce virtual images that are:

- The same size as the object
- The same distance behind the mirror as the object is in front
- Laterally inverted (left-right reversed)
- Upright

### Refraction of Light

When light passes from one medium to another, it changes speed and direction. The refractive index:

$$n = \frac{\sin i}{\sin r} = \frac{c}{v}$$

### Dispersion

White light is composed of a continuous spectrum of colours. Dispersion occurs because the
refractive index of a medium varies with wavelength (shorter wavelengths refract more):

$$n_{\mathrm{violet}} \gt n_{\mathrm{blue}} \gt n_{\mathrm{green}} \gt n_{\mathrm{yellow}} \gt n_{\mathrm{orange}} \gt n_{\mathrm{red}}$$

A prism separates white light into its constituent colours because each colour has a slightly
different refractive index in the glass.

### Lenses

**Convex (converging) lens:** Thicker in the centre, converges parallel rays to the focal point.

**Concave (diverging) lens:** Thinner in the centre, diverges parallel rays as if from the focal
point.

### Thin Lens Formula

$$\frac{1}{f} = \frac{1}{v} - \frac{1}{u}$$

Where:

- $f$ = focal length (positive for convex, negative for concave)
- $v$ = image distance (positive for real image, negative for virtual)
- $u$ = object distance (always negative in the real-is-positive convention)

**Magnification:**

$$m = \frac{v}{u} = \frac{h_i}{h_o}$$

Where $h_i$ is the image height and $h_o$ is the object height.

### Ray Diagram Rules for Convex Lenses

1. A ray parallel to the principal axis refracts through the focal point
2. A ray through the centre of the lens passes straight through undeviated
3. A ray through the focal point refracts parallel to the principal axis

### Worked Example 6

An object is placed $30 \mathrm{ cm}$ from a convex lens of focal length $20 \mathrm{ cm}$. Find the
image position and magnification.

$$\frac{1}{v} - \frac{1}{-30} = \frac{1}{20}$$

$$\frac{1}{v} + \frac{1}{30} = \frac{1}{20}$$

$$\frac{1}{v} = \frac{1}{20} - \frac{1}{30} = \frac{3 - 2}{60} = \frac{1}{60}$$

$$v = 60 \mathrm{ cm}$$

$$m = \frac{v}{u} = \frac{60}{-30} = -2$$

The image is real, inverted, and twice the size of the object, located $60 \mathrm{ cm}$ on the other
side of the lens.

---

## Optical Fibres

Optical fibres use total internal reflection to transmit light signals over long distances with
minimal loss.

### Structure

An optical fibre consists of:

- A **core** with higher refractive index
- A **cladding** with lower refractive index

Light entering the fibre at an angle less than the acceptance angle undergoes repeated total
internal reflection and travels along the fibre.

### Applications

- Telecommunications (high-speed data transmission)
- Medical endoscopy
- Decorative lighting

:::warning
In exam questions, always check whether you need to calculate the critical angle or the
acceptance angle. The acceptance angle is the maximum angle at which light can enter the fibre and
still undergo total internal reflection.
:::

### Worked Example 7

An optical fibre has a core of refractive index $1.50$ and cladding of refractive index $1.45$. Find
the critical angle at the core-cladding boundary.

$$\sin\theta_c = \frac{n_{\mathrm{cladding}}}{n_{\mathrm{core}}} = \frac{1.45}{1.50} = 0.967$$

$$\theta_c = \sin^{-1}(0.967) = 75.2^\circ$$

---

## Polarisation

Polarisation is the process of restricting the vibrations of a transverse wave to one plane.

- Only transverse waves can be polarised
- Sound waves (longitudinal) cannot be polarised
- Polaroid filters allow only vibrations in one plane to pass through
- When two Polaroid filters are perpendicular (crossed), no light passes through

**Malus's Law:**

$$I = I_0 \cos^2\theta$$

Where $I_0$ is the intensity of polarised light incident on the analyser and $\theta$ is the angle
between the polariser and analyser.

### Worked Example 8

Unpolarised light of intensity $200 \mathrm{ W/m}^2$ passes through two Polaroid filters. The second
filter's transmission axis is at $60^\circ$ to the first. Find the intensity after the second
filter.

After the first filter (intensity halved): $I_1 = 100 \mathrm{ W/m}^2$

After the second filter: $I_2 = I_1\cos^2 60^\circ = 100 \times 0.25 = 25 \mathrm{ W/m}^2$

---

## Summary Table

| Topic            | Key Formula                                     | Key Concept                          |
| ---------------- | ----------------------------------------------- | ------------------------------------ |
| Wave equation    | $v = f\lambda$                                  | Relates speed, frequency, wavelength |
| Snell's law      | $n_1\sin\theta_1 = n_2\sin\theta_2$             | Law of refraction                    |
| Critical angle   | $\sin\theta_c = \frac{n_2}{n_1}$                | Total internal reflection threshold  |
| Double-slit      | $\lambda = \frac{ay}{D}$                        | Interference pattern                 |
| Stationary waves | $\lambda_n = \frac{2L}{n}$                      | Harmonics on a string                |
| Decibels         | $\beta = 10\log_{10}\left(\frac{I}{I_0}\right)$ | Loudness level                       |
| Thin lens        | $\frac{1}{f} = \frac{1}{v} - \frac{1}{u}$       | Image formation                      |
| Malus's law      | $I = I_0\cos^2\theta$                           | Polarisation                         |

---

## Exam Tips

- Remember that only transverse waves can be polarised; use this fact to distinguish wave types.
- In refraction problems, always measure angles from the **normal**, not the surface.
- For double-slit interference, the path difference determines constructive ($n\lambda$) or
  destructive ($(n + 0.5)\lambda$) interference.
- When drawing ray diagrams, always use a ruler and label the focal points.
- In stationary wave problems, the distance between adjacent nodes is $\lambda/2$, not $\lambda$.
- For the EM spectrum, know the approximate wavelength ranges and one application for each type.

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** Light of wavelength $600 \mathrm{ nm}$ is incident on a pair of slits separated by
$0.2 \mathrm{ mm}$. The screen is $1.5 \mathrm{ m}$ away. Find the distance between the central maximum
and the third bright fringe.

$$y = \frac{n\lambda D}{a} = \frac{3 \times 600 \times 10^{-9} \times 1.5}{0.2 \times 10^{-3}} = \frac{2.7 \times 10^{-6}}{2 \times 10^{-4}} = 0.0135 \mathrm{ m} = 13.5 \mathrm{ mm}$$

**Question 2:** A concave lens has a focal length of $15 \mathrm{ cm}$. An object is placed
$25 \mathrm{ cm}$ from the lens. Find the image position.

$$\frac{1}{v} - \frac{1}{-25} = \frac{1}{-15}$$

$$\frac{1}{v} + \frac{1}{25} = -\frac{1}{15}$$

$$\frac{1}{v} = -\frac{1}{15} - \frac{1}{25} = \frac{-5 - 3}{75} = -\frac{8}{75}$$

$$v = -9.375 \mathrm{ cm}$$

The image is virtual, upright, and $9.375 \mathrm{ cm}$ from the lens on the same side as the object.

**Question 3:** The critical angle for a glass-air boundary is $42^\circ$. Find the refractive index
of the glass.

$$n = \frac{1}{\sin 42^\circ} = \frac{1}{0.669} = 1.49$$

**Question 4:** Unpolarised light of intensity $300 \mathrm{ W/m}^2$ passes through a Polaroid filter.
What is the transmitted intensity?

The first Polaroid reduces the intensity by half: $I = 150 \mathrm{ W/m}^2$.

**Question 5:** A stationary wave is set up on a string of length $1.2 \mathrm{ m}$. The speed of the
waves on the string is $24 \mathrm{ m/s}$. Find the frequency of the second harmonic.

For the second harmonic: $\lambda_2 = L = 1.2 \mathrm{ m}$

$$f_2 = \frac{v}{\lambda_2} = \frac{24}{1.2} = 20 \mathrm{ Hz}$$
</details>

---

## Doppler Effect

### Definition

The Doppler effect is the change in the observed frequency (or wavelength) of a wave when there is
relative motion between the source and the observer.

### General Formula

$$f' = f \left(\frac{v \pm v_o}{v \mp v_s}\right)$$

Where:

- $f'$ = observed frequency
- $f$ = source frequency
- $v$ = speed of the wave in the medium
- $v_o$ = speed of the observer (positive if moving towards the source)
- $v_s$ = speed of the source (positive if moving towards the observer)

### Doppler Effect for Sound

When the source moves towards a stationary observer:

$$f' = f \left(\frac{v}{v - v_s}\right)$$

The observed frequency is higher than the source frequency.

When the source moves away from a stationary observer:

$$f' = f \left(\frac{v}{v + v_s}\right)$$

The observed frequency is lower than the source frequency.

### Applications

- **Radar speed guns:** Police use Doppler radar to measure vehicle speed
- **Medical ultrasound:** Doppler ultrasound measures blood flow velocity
- **Astronomy:** Red shift indicates galaxies moving away from us; blue shift indicates approach
- **Weather radar:** Doppler radar detects the movement of precipitation

:::info
Red shift occurs when a light source moves away from the observer. The observed wavelength
increases (shifts towards the red end of the spectrum). This is key evidence for the expansion of
the universe.
:::

### Worked Example 9

A police car sounding a siren of frequency $500 \mathrm{ Hz}$ travels at $30 \mathrm{ m/s}$ towards a
stationary observer. The speed of sound is $340 \mathrm{ m/s}$. Find the frequency heard by the
observer.

$$f' = f \left(\frac{v}{v - v_s}\right) = 500 \times \frac{340}{340 - 30} = 500 \times \frac{340}{310}$$

$$f' = 500 \times 1.097 = 548.4 \mathrm{ Hz}$$

### Worked Example 10

After the police car passes the observer and moves away, what frequency is heard?

$$f' = f \left(\frac{v}{v + v_s}\right) = 500 \times \frac{340}{340 + 30} = 500 \times \frac{340}{370}$$

$$f' = 500 \times 0.919 = 459.5 \mathrm{ Hz}$$

---

## Sound Intensity and Attenuation

### Inverse Square Law for Sound

For a point source emitting sound uniformly in all directions, the intensity decreases with the
square of the distance:

$$I = \frac{P}{4\pi r^2}$$

Where $P$ is the power of the source and $r$ is the distance from the source.

### Attenuation

Sound intensity decreases as it travels through a medium due to:

- Spreading of the wavefront (inverse square law)
- Absorption by the medium (energy converted to heat)
- Scattering

The attenuation of sound in a medium is often expressed in decibels per unit distance.

### Worked Example 11

A source emits sound with power $0.01 \mathrm{ W}$. Find the intensity at distances of $5 \mathrm{ m}$
and $20 \mathrm{ m}$ from the source.

At $r = 5 \mathrm{ m}$:

$$I_1 = \frac{0.01}{4\pi(5)^2} = \frac{0.01}{314.16} = 3.18 \times 10^{-5} \mathrm{ W/m}^2$$

At $r = 20 \mathrm{ m}$:

$$I_2 = \frac{0.01}{4\pi(20)^2} = \frac{0.01}{5026.55} = 1.99 \times 10^{-6} \mathrm{ W/m}^2$$

Note that doubling the distance reduces the intensity by a factor of 4 (inverse square law).

---

## Resonance

### Definition

Resonance occurs when a system is driven at its natural frequency, resulting in a large amplitude of
oscillation.

### Conditions for Resonance

- The driving frequency must equal the natural frequency of the system
- Energy is transferred efficiently from the driving force to the system

### Examples of Resonance

| Example             | Description                                                          |
| ------------------- | -------------------------------------------------------------------- |
| Swing               | Pushing a swing at its natural frequency makes it go higher          |
| Tuning fork         | A tuning fork can cause another of the same frequency to vibrate     |
| Musical instruments | Air columns in wind instruments resonate at specific frequencies     |
| Bridge collapse     | Tacoma Narrows Bridge collapsed due to resonant vibrations from wind |
| Microwave oven      | Microwaves at the resonant frequency of water molecules heat food    |

### Forced Vibrations vs Natural Vibrations

- **Natural frequency:** The frequency at which a system oscillates freely when disturbed
- **Forced vibrations:** Vibrations caused by an external periodic driving force
- **Resonance:** Maximum amplitude occurs when driving frequency = natural frequency

### Damping

Damping reduces the amplitude of oscillations over time by dissipating energy.

- **Light damping:** Oscillations gradually decrease; sharp resonance peak
- **Heavy damping:** Oscillations decrease rapidly; broader, lower resonance peak
- **Critical damping:** System returns to equilibrium in the shortest time without oscillating
- **Over-damping:** System returns to equilibrium slowly without oscillating

:::warning
In real-world applications, some damping is often deliberately introduced to prevent
excessive vibrations at resonance. Car shock absorbers and building dampers are examples.
:::

---

## Sound Waves in Air Columns

### Closed Pipe (Closed at One End)

A closed pipe supports standing waves with a node at the closed end and an antinode at the open end.

| Mode                       | Frequency            | Wavelength                 |
| -------------------------- | -------------------- | -------------------------- |
| Fundamental (1st harmonic) | $f_1 = \frac{v}{4L}$ | $\lambda_1 = 4L$           |
| 3rd harmonic               | $f_3 = 3f_1$         | $\lambda_3 = \frac{4L}{3}$ |
| 5th harmonic               | $f_5 = 5f_1$         | $\lambda_5 = \frac{4L}{5}$ |

Only odd harmonics are present in a closed pipe.

### Open Pipe (Open at Both Ends)

An open pipe supports standing waves with antinodes at both open ends.

| Mode                       | Frequency            | Wavelength                 |
| -------------------------- | -------------------- | -------------------------- |
| Fundamental (1st harmonic) | $f_1 = \frac{v}{2L}$ | $\lambda_1 = 2L$           |
| 2nd harmonic               | $f_2 = 2f_1$         | $\lambda_2 = L$            |
| 3rd harmonic               | $f_3 = 3f_1$         | $\lambda_3 = \frac{2L}{3}$ |

All harmonics are present in an open pipe.

### Worked Example 12

A closed pipe of length $0.85 \mathrm{ m}$ produces a fundamental frequency of $100 \mathrm{ Hz}$. Find
the speed of sound.

$$v = 4Lf_1 = 4 \times 0.85 \times 100 = 340 \mathrm{ m/s}$$

### Worked Example 13

Find the frequency of the second harmonic that a closed pipe of length $0.5 \mathrm{ m}$ can support.
Take the speed of sound as $340 \mathrm{ m/s}$.

A closed pipe only supports odd harmonics. The "second harmonic" that exists is actually the 3rd
harmonic:

$$f_3 = \frac{3v}{4L} = \frac{3 \times 340}{4 \times 0.5} = \frac{1020}{2} = 510 \mathrm{ Hz}$$

---

## Additional Exam-Style Questions

<details>
<summary>More Practice Problems</summary>

**Question 6:** A concave mirror has a focal length of $15 \mathrm{ cm}$. An object $4 \mathrm{ cm}$
tall is placed $25 \mathrm{ cm}$ from the mirror. Find the image position, height, and nature.

Using the mirror formula $\frac{1}{v} + \frac{1}{u} = \frac{1}{f}$ (with real-is-positive
convention):

$$\frac{1}{v} + \frac{1}{-25} = \frac{1}{15}$$

$$\frac{1}{v} = \frac{1}{15} + \frac{1}{25} = \frac{5 + 3}{75} = \frac{8}{75}$$

$$v = 9.375 \mathrm{ cm}$$

Magnification: $m = \frac{-v}{u} = \frac{-9.375}{-25} = 0.375$

Image height: $h_i = 0.375 \times 4 = 1.5 \mathrm{ cm}$

The image is real, inverted, diminished, and located $9.375 \mathrm{ cm}$ in front of the mirror.

**Question 7:** Light travels from water ($n = 1.33$) to glass ($n = 1.5$). If the angle of
incidence is $40^\circ$, find the angle of refraction.

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$$1.33 \times \sin 40^\circ = 1.5 \times \sin\theta_2$$

$$\sin\theta_2 = \frac{1.33 \times 0.6428}{1.5} = \frac{0.855}{1.5} = 0.570$$

$$\theta_2 = \sin^{-1}(0.570) = 34.7^\circ$$

**Question 8:** A source of sound of frequency $600 \mathrm{ Hz}$ is placed on a moving train. The
train moves towards a stationary observer at $25 \mathrm{ m/s}$. Speed of sound is $340 \mathrm{ m/s}$.
What frequency does the observer hear?

$$f' = f \left(\frac{v}{v - v_s}\right) = 600 \times \frac{340}{340 - 25} = 600 \times \frac{340}{315}$$

$$f' = 600 \times 1.079 = 647.6 \mathrm{ Hz}$$

**Question 9:** Two point sources are $3 \mathrm{ mm}$ apart and emit coherent light of wavelength
$600 \mathrm{ nm}$. A screen is placed $2 \mathrm{ m}$ away. Find the separation between adjacent bright
fringes.

$$y = \frac{\lambda D}{a} = \frac{600 \times 10^{-9} \times 2}{3 \times 10^{-3}} = \frac{1.2 \times 10^{-6}}{3 \times 10^{-3}} = 4 \times 10^{-4} \mathrm{ m} = 0.4 \mathrm{ mm}$$

**Question 10:** A string fixed at both ends is $0.6 \mathrm{ m}$ long. The wave speed on the string
is $180 \mathrm{ m/s}$. Find the frequencies of the first three harmonics.

Fundamental: $f_1 = \frac{v}{2L} = \frac{180}{2 \times 0.6} = 150 \mathrm{ Hz}$

2nd harmonic: $f_2 = 2f_1 = 300 \mathrm{ Hz}$

3rd harmonic: $f_3 = 3f_1 = 450 \mathrm{ Hz}$

**Question 11:** An object is placed $12 \mathrm{ cm}$ from a convex lens of focal length
$8 \mathrm{ cm}$. Determine the image position, magnification, and nature.

$$\frac{1}{v} - \frac{1}{-12} = \frac{1}{8}$$

$$\frac{1}{v} + \frac{1}{12} = \frac{1}{8}$$

$$\frac{1}{v} = \frac{1}{8} - \frac{1}{12} = \frac{3 - 2}{24} = \frac{1}{24}$$

$$v = 24 \mathrm{ cm}$$

$$m = \frac{v}{u} = \frac{24}{-12} = -2$$

The image is real, inverted, magnified ($2\times$), and located $24 \mathrm{ cm}$ from the lens on the
opposite side.

**Question 12:** Calculate the speed of light in glass of refractive index $1.52$.

$$v = \frac{c}{n} = \frac{3 \times 10^8}{1.52} = 1.97 \times 10^8 \mathrm{ m/s}$$

**Question 13:** A sound source emits waves of frequency $440 \mathrm{ Hz}$ and wavelength
$0.78 \mathrm{ m}$. The source moves towards a stationary observer at $20 \mathrm{ m/s}$. What frequency
does the observer hear?

$$v_{\mathrm{sound}} = f\lambda = 440 \times 0.78 = 343.2 \mathrm{ m/s}$$

$$f' = f\left(\frac{v}{v - v_s}\right) = 440 \times \frac{343.2}{343.2 - 20} = 440 \times \frac{343.2}{323.2}$$

$$f' = 440 \times 1.062 = 467.3 \mathrm{ Hz}$$

**Question 14:** Explain the principle of a communication optical fibre and calculate the minimum
refractive index of the core for total internal reflection at a bend of $5^\circ$ from the straight
path.

At a bend, the effective angle of incidence at the core-cladding boundary is reduced by the bend
angle. For total internal reflection, the effective angle must exceed the critical angle. If the
bend causes the ray to strike at $85^\circ$ (instead of $90^\circ$ for a straight fibre), then:

$$\sin\theta_c = \sin 85^\circ = 0.996$$

The core must have refractive index such that the critical angle is less than $85^\circ$, i.e.,
$n_{\mathrm{core}}/n_{\mathrm{cladding}} \gt 1.004$. In practice, optical fibres are designed with much
larger refractive index differences to accommodate bends.
</details>

---

## Applications of Wave Theory

### Ultrasound Imaging

Medical ultrasound uses high-frequency sound waves ($1$ to $15 \mathrm{ MHz}$) to create images of
internal body structures.

**Principle:**

- A piezoelectric transducer emits ultrasound pulses
- Sound waves reflect at boundaries between tissues of different acoustic impedance
- The time delay of returning echoes is used to determine the depth of structures
- The intensity of returning echoes is used to construct a 2D image

**Acoustic impedance:**

$$Z = \rho v$$

Where $\rho$ is the density of the medium and $v$ is the speed of sound in the medium.

The fraction of ultrasound reflected at a boundary depends on the difference in acoustic impedance
between the two media. A gel is applied between the transducer and the skin to eliminate the air gap
(which would cause nearly total reflection due to the large impedance mismatch).

### Worked Example 14

Ultrasound pulses are sent into the body and the echo from an organ returns after
$40 \mathrm{ \mu s}$. The speed of ultrasound in tissue is $1540 \mathrm{ m/s}$. Find the depth of the
organ.

$$d = \frac{vt}{2} = \frac{1540 \times 40 \times 10^{-6}}{2} = \frac{0.0616}{2} = 0.0308 \mathrm{ m} = 3.08 \mathrm{ cm}$$

(The factor of 2 accounts for the pulse travelling to the organ and back.)

### Seismic Waves

Earthquakes generate several types of waves:

- **P-waves (Primary):** Longitudinal waves that travel through solids and liquids; fastest
- **S-waves (Secondary):** Transverse waves that travel through solids only; slower than P-waves
- **Surface waves:** Travel along the Earth's surface; cause the most damage; slowest

The fact that S-waves cannot travel through liquids provides evidence that the Earth's outer core is
liquid.

### Worked Example 15

P-waves are detected at a seismograph station $6000 \mathrm{ km}$ from the earthquake epicentre. If
the P-wave speed is $8.0 \mathrm{ km/s}$ and the S-wave speed is $4.5 \mathrm{ km/s}$, find the time
difference between the arrival of P-waves and S-waves.

P-wave arrival time: $t_P = \frac{6000}{8.0} = 750 \mathrm{ s} = 12.5 \mathrm{ minutes}$

S-wave arrival time: $t_S = \frac{6000}{4.5} = 1333 \mathrm{ s} = 22.2 \mathrm{ minutes}$

Time difference: $t_S - t_P = 583 \mathrm{ s} = 9.7 \mathrm{ minutes}$

This time difference is used to determine the distance from the epicentre, and data from multiple
stations can triangulate the exact location.

:::

:::

:::

:::

:::

:::

:::
