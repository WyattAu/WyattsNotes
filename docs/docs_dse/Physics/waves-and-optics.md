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

:::info The wave equation applies to all types of waves: transverse, longitudinal, mechanical, and
electromagnetic.
:::

### Worked Example 1

A sound wave has a frequency of $440 \mathrm{ Hz}$ and a wavelength of $0.78 \mathrm{ m}$. Find the
speed of sound.

<details>
<summary>Solution</summary>

$$v = f\lambda = 440 \times 0.78 = 343.2 \mathrm{ m/s}$$

</details>

### Worked Example 1b

A light wave has a frequency of $5.0 \times 10^{14} \mathrm{ Hz}$. Find its wavelength in air.

<details>
<summary>Solution</summary>

$$\lambda = \frac{c}{f} = \frac{3.0 \times 10^8}{5.0 \times 10^{14}} = 6.0 \times 10^{-7} \mathrm{ m} = 600 \mathrm{ nm}$$

</details>

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

:::info When a wave enters a denser medium (higher refractive index), it slows down and bends
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

<details>
<summary>Solution</summary>

$$\sin\theta_c = \frac{1.0}{1.5} = 0.667$$

$$\theta_c = \sin^{-1}(0.667) = 41.8^\circ$$

</details>

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

<details>
<summary>Solution</summary>

Using the double-slit formula:

$$\lambda = \frac{ay}{D} = \frac{0.5 \times 10^{-3} \times 1.2 \times 10^{-3}}{1.2} = 5 \times 10^{-7} \mathrm{ m} = 500 \mathrm{ nm}$$

</details>

### Worked Example 3b

In a double-slit experiment, light of wavelength $550 \mathrm{ nm}$ passes through slits
$0.4 \mathrm{ mm}$ apart onto a screen $1.5 \mathrm{ m}$ away. Find the separation between the
central bright fringe and the first dark fringe.

<details>
<summary>Solution</summary>

The first dark fringe occurs at path difference $= \lambda/2$:

$$y = \frac{(n + 0.5)\lambda D}{a} = \frac{0.5 \times 550 \times 10^{-9} \times 1.5}{0.4 \times 10^{-3}} = \frac{4.125 \times 10^{-7}}{4 \times 10^{-4}} = 1.03 \times 10^{-3} \mathrm{ m} = 1.03 \mathrm{ mm}$$

*If you get this wrong, revise: Double-slit interference — dark fringes occur at half-integer
multiples of $\lambda$.*

</details>

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

A string of length $0.8 \mathrm{ m}$ has a fundamental frequency of $220 \mathrm{ Hz}$. Find the
wave speed and the frequency of the third harmonic.

<details>
<summary>Solution</summary>

$$v = f_1 \times \lambda_1 = 220 \times 2(0.8) = 352 \mathrm{ m/s}$$

$$f_3 = 3f_1 = 3 \times 220 = 660 \mathrm{ Hz}$$

</details>

---

## Sound Waves

### Properties of Sound

Sound is a longitudinal mechanical wave that requires a medium to propagate. It cannot travel
through a vacuum.

| Property                             | Description                                |
| ------------------------------------ | ------------------------------------------ |
| Speed in air at $20^\circ\mathrm{C}$ | Approximately $343 \mathrm{ m/s}$          |
| Speed in water                       | Approximately $1480 \mathrm{ m/s}$         |
| Speed in steel                       | Approximately $5960 \mathrm{ m/s}$         |
| Audible range                        | $20 \mathrm{ Hz}$ to $20,000 \mathrm{ Hz}$ |
| Infrasonic                           | Below $20 \mathrm{ Hz}$                    |
| Ultrasonic                           | Above $20,000 \mathrm{ Hz}$                |

### Intensity and Loudness

The intensity of a sound wave is the power per unit area:

$$I = \frac{P}{A}$$

Intensity is proportional to the square of the amplitude:

$$I \propto A^2$$

The loudness level is measured in decibels (dB):

$$\beta = 10\log_{10}\left(\frac{I}{I_0}\right)$$

Where $I_0 = 10^{-12} \mathrm{ W/m}^2$ is the threshold of hearing.

:::warning Loudness is a subjective measure (perceived by the ear) while intensity is an objective
physical quantity. A $10 \mathrm{ dB}$ increase corresponds to a $10\times$ increase in intensity,
but is perceived as roughly a doubling of loudness.
:::

### Worked Example 5

The intensity of one sound is $10^{-4} \mathrm{ W/m}^2$ and another is $10^{-2} \mathrm{ W/m}^2$.
Find the difference in loudness level.

<details>
<summary>Solution</summary>

$$\Delta\beta = 10\log_{10}\left(\frac{10^{-2}}{10^{-4}}\right) = 10\log_{10}(100) = 10 \times 2 = 20 \mathrm{ dB}$$

</details>

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

| Type          | Wavelength Range                         | Frequency Range                                         | Source                       |
| ------------- | ---------------------------------------- | ------------------------------------------------------- | ---------------------------- |
| Radio waves   | $\gt 0.1 \mathrm{ m}$                    | $\lt 3 \times 10^9 \mathrm{ Hz}$                        | Oscillating circuits         |
| Microwaves    | $0.1 \mathrm{ mm}$ to $0.1 \mathrm{ m}$  | $3 \times 10^9$ to $3 \times 10^{11} \mathrm{ Hz}$      | Magnetron                    |
| Infrared      | $700 \mathrm{ nm}$ to $1 \mathrm{ mm}$   | $3 \times 10^{11}$ to $4 \times 10^{14} \mathrm{ Hz}$   | Hot objects                  |
| Visible light | $400 \mathrm{ nm}$ to $700 \mathrm{ nm}$ | $4 \times 10^{14}$ to $7.5 \times 10^{14} \mathrm{ Hz}$ | Luminous objects             |
| Ultraviolet   | $10 \mathrm{ nm}$ to $400 \mathrm{ nm}$  | $7.5 \times 10^{14}$ to $3 \times 10^{16} \mathrm{ Hz}$ | Hot objects, discharge tubes |
| X-rays        | $0.01 \mathrm{ nm}$ to $10 \mathrm{ nm}$ | $3 \times 10^{16}$ to $3 \times 10^{19} \mathrm{ Hz}$   | Electron bombardment         |
| Gamma rays    | $\lt 0.01 \mathrm{ nm}$                  | $\gt 3 \times 10^{19} \mathrm{ Hz}$                     | Radioactive decay            |

All EM waves:

- Travel at $c = 3 \times 10^8 \mathrm{ m/s}$ in vacuum
- Are transverse waves
- Can be polarised
- Can travel through a vacuum
- Obey the wave equation $c = f\lambda$
- Can be reflected, refracted, and diffracted

:::tip For the DSE exam, remember the order of the EM spectrum from longest to shortest wavelength:
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

<details>
<summary>Solution</summary>

$$\frac{1}{v} - \frac{1}{-30} = \frac{1}{20}$$

$$\frac{1}{v} + \frac{1}{30} = \frac{1}{20}$$

$$\frac{1}{v} = \frac{1}{20} - \frac{1}{30} = \frac{3 - 2}{60} = \frac{1}{60}$$

$$v = 60 \mathrm{ cm}$$

$$m = \frac{v}{u} = \frac{60}{-30} = -2$$

The image is real, inverted, and twice the size of the object, located $60 \mathrm{ cm}$ on the
other side of the lens.

</details>

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

:::warning In exam questions, always check whether you need to calculate the critical angle or the
acceptance angle. The acceptance angle is the maximum angle at which light can enter the fibre and
still undergo total internal reflection.
:::

### Worked Example 7

An optical fibre has a core of refractive index $1.50$ and cladding of refractive index $1.45$. Find
the critical angle at the core-cladding boundary.

<details>
<summary>Solution</summary>

$$\sin\theta_c = \frac{n_{\mathrm{cladding}}}{n_{\mathrm{core}}} = \frac{1.45}{1.50} = 0.967$$

$$\theta_c = \sin^{-1}(0.967) = 75.2^\circ$$

</details>

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

<details>
<summary>Solution</summary>

After the first filter (intensity halved): $I_1 = 100 \mathrm{ W/m}^2$

After the second filter: $I_2 = I_1\cos^2 60^\circ = 100 \times 0.25 = 25 \mathrm{ W/m}^2$

</details>

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
$0.2 \mathrm{ mm}$. The screen is $1.5 \mathrm{ m}$ away. Find the distance between the central
maximum and the third bright fringe.

<details>
<summary>Solution</summary>

$$y = \frac{n\lambda D}{a} = \frac{3 \times 600 \times 10^{-9} \times 1.5}{0.2 \times 10^{-3}} = \frac{2.7 \times 10^{-6}}{2 \times 10^{-4}} = 0.0135 \mathrm{ m} = 13.5 \mathrm{ mm}$$

</details>

**Question 2:** A concave lens has a focal length of $15 \mathrm{ cm}$. An object is placed
$25 \mathrm{ cm}$ from the lens. Find the image position.

<details>
<summary>Solution</summary>

$$\frac{1}{v} - \frac{1}{-25} = \frac{1}{-15}$$

$$\frac{1}{v} + \frac{1}{25} = -\frac{1}{15}$$

$$\frac{1}{v} = -\frac{1}{15} - \frac{1}{25} = \frac{-5 - 3}{75} = -\frac{8}{75}$$

$$v = -9.375 \mathrm{ cm}$$

The image is virtual, upright, and $9.375 \mathrm{ cm}$ from the lens on the same side as the
object.

</details>

**Question 3:** The critical angle for a glass-air boundary is $42^\circ$. Find the refractive index
of the glass.

<details>
<summary>Solution</summary>

$$n = \frac{1}{\sin 42^\circ} = \frac{1}{0.669} = 1.49$$

</details>

**Question 4:** Unpolarised light of intensity $300 \mathrm{ W/m}^2$ passes through a Polaroid
filter. What is the transmitted intensity?

<details>
<summary>Solution</summary>

The first Polaroid reduces the intensity by half: $I = 150 \mathrm{ W/m}^2$.

</details>

**Question 5:** A stationary wave is set up on a string of length $1.2 \mathrm{ m}$. The speed of
the waves on the string is $24 \mathrm{ m/s}$. Find the frequency of the second harmonic.

<details>
<summary>Solution</summary>

For the second harmonic: $\lambda_2 = L = 1.2 \mathrm{ m}$

$$f_2 = \frac{v}{\lambda_2} = \frac{24}{1.2} = 20 \mathrm{ Hz}$$

</details>

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

:::info Red shift occurs when a light source moves away from the observer. The observed wavelength
increases (shifts towards the red end of the spectrum). This is key evidence for the expansion of
the universe.
:::

### Worked Example 9

A police car sounding a siren of frequency $500 \mathrm{ Hz}$ travels at $30 \mathrm{ m/s}$ towards
a stationary observer. The speed of sound is $340 \mathrm{ m/s}$. Find the frequency heard by the
observer.

<details>
<summary>Solution</summary>

$$f' = f \left(\frac{v}{v - v_s}\right) = 500 \times \frac{340}{340 - 30} = 500 \times \frac{340}{310}$$

$$f' = 500 \times 1.097 = 548.4 \mathrm{ Hz}$$

</details>

### Worked Example 10

After the police car passes the observer and moves away, what frequency is heard?

<details>
<summary>Solution</summary>

$$f' = f \left(\frac{v}{v + v_s}\right) = 500 \times \frac{340}{340 + 30} = 500 \times \frac{340}{370}$$

$$f' = 500 \times 0.919 = 459.5 \mathrm{ Hz}$$

</details>

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

A source emits sound with power $0.01 \mathrm{ W}$. Find the intensity at distances of
$5 \mathrm{ m}$ and $20 \mathrm{ m}$ from the source.

<details>
<summary>Solution</summary>

At $r = 5 \mathrm{ m}$:

$$I_1 = \frac{0.01}{4\pi(5)^2} = \frac{0.01}{314.16} = 3.18 \times 10^{-5} \mathrm{ W/m}^2$$

At $r = 20 \mathrm{ m}$:

$$I_2 = \frac{0.01}{4\pi(20)^2} = \frac{0.01}{5026.55} = 1.99 \times 10^{-6} \mathrm{ W/m}^2$$

Note that doubling the distance reduces the intensity by a factor of 4 (inverse square law).

</details>

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

:::warning In real-world applications, some damping is often deliberately introduced to prevent
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

A closed pipe of length $0.85 \mathrm{ m}$ produces a fundamental frequency of $100 \mathrm{ Hz}$.
Find the speed of sound.

<details>
<summary>Solution</summary>

$$v = 4Lf_1 = 4 \times 0.85 \times 100 = 340 \mathrm{ m/s}$$

</details>

### Worked Example 13

Find the frequency of the second harmonic that a closed pipe of length $0.5 \mathrm{ m}$ can
support. Take the speed of sound as $340 \mathrm{ m/s}$.

<details>
<summary>Solution</summary>

A closed pipe only supports odd harmonics. The "second harmonic" that exists is actually the 3rd
harmonic:

$$f_3 = \frac{3v}{4L} = \frac{3 \times 340}{4 \times 0.5} = \frac{1020}{2} = 510 \mathrm{ Hz}$$

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
$40 \mathrm{ \mu s}$. The speed of ultrasound in tissue is $1540 \mathrm{ m/s}$. Find the depth of
the organ.

<details>
<summary>Solution</summary>

$$d = \frac{vt}{2} = \frac{1540 \times 40 \times 10^{-6}}{2} = \frac{0.0616}{2} = 0.0308 \mathrm{ m} = 3.08 \mathrm{ cm}$$

(The factor of 2 accounts for the pulse travelling to the organ and back.)

</details>

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

<details>
<summary>Solution</summary>

P-wave arrival time: $t_P = \frac{6000}{8.0} = 750 \mathrm{ s} = 12.5 \mathrm{ minutes}$

S-wave arrival time: $t_S = \frac{6000}{4.5} = 1333 \mathrm{ s} = 22.2 \mathrm{ minutes}$

Time difference: $t_S - t_P = 583 \mathrm{ s} = 9.7 \mathrm{ minutes}$

This time difference is used to determine the distance from the epicentre, and data from multiple
stations can triangulate the exact location.

</details>

---

## Problem Set

<details>
<summary>Problem 1: Wave Speed Calculation</summary>

A water wave has a wavelength of $3.0 \mathrm{ m}$ and a frequency of $0.25 \mathrm{ Hz}$. Find the
wave speed.

<details>
<summary>Solution</summary>

$$v = f\lambda = 0.25 \times 3.0 = 0.75 \mathrm{ m/s}$$

*If you get this wrong, revise: The wave equation $v = f\lambda$.*

</details>
</details>

<details>
<summary>Problem 2: Double-Slit Interference</summary>

Light of wavelength $480 \mathrm{ nm}$ passes through two slits $0.3 \mathrm{ mm}$ apart onto a
screen $2.0 \mathrm{ m}$ away. Find the separation of adjacent bright fringes.

<details>
<summary>Solution</summary>

$$y = \frac{\lambda D}{a} = \frac{480 \times 10^{-9} \times 2.0}{0.3 \times 10^{-3}} = \frac{9.6 \times 10^{-7}}{3 \times 10^{-4}} = 3.2 \times 10^{-3} \mathrm{ m} = 3.2 \mathrm{ mm}$$

*If you get this wrong, revise: Double-slit fringe spacing formula $y = \lambda D / a$.*

</details>
</details>

<details>
<summary>Problem 3: Snell's Law</summary>

Light travels from air into a glass block at an angle of incidence of $50^\circ$. If the refractive
index of the glass is $1.52$, find the angle of refraction.

<details>
<summary>Solution</summary>

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$$1.0 \times \sin 50^\circ = 1.52 \times \sin\theta_2$$

$$\sin\theta_2 = \frac{0.766}{1.52} = 0.504$$

$$\theta_2 = 30.2^\circ$$

*If you get this wrong, revise: Snell's law — remember to measure angles from the normal.*

</details>
</details>

<details>
<summary>Problem 4: Stationary Waves — Harmonics</summary>

A string of length $0.6 \mathrm{ m}$ has a wave speed of $240 \mathrm{ m/s}$. Find the
frequencies of the first three harmonics.

<details>
<summary>Solution</summary>

Fundamental: $f_1 = \frac{v}{2L} = \frac{240}{2 \times 0.6} = 200 \mathrm{ Hz}$

2nd harmonic: $f_2 = 2f_1 = 400 \mathrm{ Hz}$

3rd harmonic: $f_3 = 3f_1 = 600 \mathrm{ Hz}$

*If you get this wrong, revise: Stationary waves on a string and the harmonic series $f_n = nf_1$.*

</details>
</details>

<details>
<summary>Problem 5: Decibel Calculation</summary>

A sound has an intensity of $10^{-6} \mathrm{ W/m}^2$. Find the loudness level in dB.

<details>
<summary>Solution</summary>

$$\beta = 10\log_{10}\left(\frac{10^{-6}}{10^{-12}}\right) = 10\log_{10}(10^6) = 10 \times 6 = 60 \mathrm{ dB}$$

*If you get this wrong, revise: The decibel formula $\beta = 10\log_{10}(I/I_0)$ and $I_0 = 10^{-12} \mathrm{ W/m}^2$.*

</details>
</details>

<details>
<summary>Problem 6: Convex Lens — Virtual Image</summary>

An object is placed $10 \mathrm{ cm}$ from a convex lens of focal length $15 \mathrm{ cm}$. Find the
image position and magnification.

<details>
<summary>Solution</summary>

$$\frac{1}{v} - \frac{1}{-10} = \frac{1}{15}$$

$$\frac{1}{v} + \frac{1}{10} = \frac{1}{15}$$

$$\frac{1}{v} = \frac{1}{15} - \frac{1}{10} = \frac{2 - 3}{30} = -\frac{1}{30}$$

$$v = -30 \mathrm{ cm}$$

$$m = \frac{v}{u} = \frac{-30}{-10} = 3$$

The image is virtual, upright, and magnified $3\times$, located $30 \mathrm{ cm}$ on the same side as
the object.

*If you get this wrong, revise: Thin lens formula for convex lens when object is inside $f$.*

</details>
</details>

<details>
<summary>Problem 7: Doppler Effect — Moving Observer</summary>

An observer moves towards a stationary sound source emitting $400 \mathrm{ Hz}$ at $20 \mathrm{ m/s}$.
Speed of sound is $340 \mathrm{ m/s}$. Find the observed frequency.

<details>
<summary>Solution</summary>

$$f' = f\left(\frac{v + v_o}{v}\right) = 400 \times \frac{340 + 20}{340} = 400 \times \frac{360}{340} = 400 \times 1.059 = 423.5 \mathrm{ Hz}$$

*If you get this wrong, revise: Doppler effect formula when the observer is moving — use $v + v_o$ in the
numerator.*

</details>
</details>

<details>
<summary>Problem 8: EM Spectrum — Frequency Range</summary>

Microwaves have wavelengths from $1 \mathrm{ mm}$ to $0.1 \mathrm{ m}$. Find the corresponding
frequency range.

<details>
<summary>Solution</summary>

$$f_1 = \frac{c}{\lambda_1} = \frac{3.0 \times 10^8}{0.1} = 3.0 \times 10^9 \mathrm{ Hz}$$

$$f_2 = \frac{c}{\lambda_2} = \frac{3.0 \times 10^8}{1 \times 10^{-3}} = 3.0 \times 10^{11} \mathrm{ Hz}$$

Frequency range: $3.0 \times 10^9$ to $3.0 \times 10^{11} \mathrm{ Hz}$.

*If you get this wrong, revise: EM spectrum and the wave equation $c = f\lambda$.*

</details>
</details>

<details>
<summary>Problem 9: Closed Pipe Harmonics</summary>

A closed pipe of length $0.75 \mathrm{ m}$ supports standing waves. The speed of sound is
$340 \mathrm{ m/s}$. Find the frequencies of the first two harmonics.

<details>
<summary>Solution</summary>

1st harmonic (fundamental): $f_1 = \frac{v}{4L} = \frac{340}{4 \times 0.75} = \frac{340}{3} = 113.3 \mathrm{ Hz}$

2nd available harmonic (3rd): $f_3 = 3f_1 = 3 \times 113.3 = 340 \mathrm{ Hz}$

Remember: closed pipes only support odd harmonics.

*If you get this wrong, revise: Closed pipe harmonics — only odd harmonics ($f_1, f_3, f_5, \ldots$).*

</details>
</details>

<details>
<summary>Problem 10: Malus's Law — Crossed Polaroids</summary>

Unpolarised light of intensity $400 \mathrm{ W/m}^2$ passes through two Polaroid filters with their
transmission axes at $90^\circ$ (crossed). What intensity is transmitted?

<details>
<summary>Solution</summary>

After the first filter: $I_1 = 200 \mathrm{ W/m}^2$

After the second (crossed) filter: $I_2 = I_1\cos^2 90^\circ = 200 \times 0 = 0 \mathrm{ W/m}^2$

No light is transmitted through crossed polaroids.

*If you get this wrong, revise: Malus's law — $\cos 90^\circ = 0$.*

</details>
</details>

<details>
<summary>Problem 11: Optical Fibre — Acceptance Angle</summary>

An optical fibre has a core refractive index of $1.55$ and cladding refractive index of $1.48$. Find the
maximum angle (from the fibre axis) at which light can enter and still undergo total internal
reflection.

<details>
<summary>Solution</summary>

Critical angle:

$$\sin\theta_c = \frac{n_{\mathrm{cladding}}}{n_{\mathrm{core}}} = \frac{1.48}{1.55} = 0.9548$$

$$\theta_c = 72.8^\circ$$

Maximum angle from the fibre axis:

$$\theta_{\mathrm{max}} = 90^\circ - 72.8^\circ = 17.2^\circ$$

*If you get this wrong, revise: Optical fibres — the relationship between the acceptance angle
(from the axis) and the critical angle (from the normal).*

</details>
</details>

<details>
<summary>Problem 12: Ultrasound Depth</summary>

An ultrasound pulse is reflected from a tissue boundary and returns after $26 \ \mu\mathrm{s}$. The speed
of ultrasound in the tissue is $1540 \mathrm{ m/s}$. Find the depth of the boundary.

<details>
<summary>Solution</summary>

$$d = \frac{vt}{2} = \frac{1540 \times 26 \times 10^{-6}}{2} = \frac{0.04004}{2} = 0.0200 \mathrm{ m} = 2.00 \mathrm{ cm}$$

*If you get this wrong, revise: Ultrasound depth calculation — remember the factor of 2 for the
round trip.*

</details>
</details>

<details>
<summary>Problem 13: Sound Intensity — Inverse Square Law</summary>

At a distance of $10 \mathrm{ m}$ from a sound source, the intensity is $8.0 \times 10^{-5} \mathrm{ W/m}^2$.
What is the intensity at $40 \mathrm{ m}$?

<details>
<summary>Solution</summary>

$$\frac{I_2}{I_1} = \left(\frac{r_1}{r_2}\right)^2 = \left(\frac{10}{40}\right)^2 = \frac{1}{16}$$

$$I_2 = \frac{8.0 \times 10^{-5}}{16} = 5.0 \times 10^{-6} \mathrm{ W/m}^2$$

*If you get this wrong, revise: Inverse square law for sound intensity $I \propto 1/r^2$.*

</details>
</details>

<details>
<summary>Problem 14: Refraction — Water to Glass</summary>

Light travels from water ($n = 1.33$) into glass ($n = 1.50$) at an angle of incidence of
$45^\circ$. Find the angle of refraction.

<details>
<summary>Solution</summary>

$$1.33 \times \sin 45^\circ = 1.50 \times \sin\theta_2$$

$$\sin\theta_2 = \frac{1.33 \times 0.7071}{1.50} = \frac{0.9404}{1.50} = 0.627$$

$$\theta_2 = 38.8^\circ$$

*If you get this wrong, revise: Snell's law — check which medium is denser to determine the
direction of bending.*

</details>
</details>

<details>
<summary>Problem 15: Seismic Waves — S-Wave Evidence</summary>

P-waves are detected at a seismograph but S-waves are not detected on the opposite side of the
Earth. What does this tell us about the Earth's interior?

<details>
<summary>Solution</summary>

S-waves are transverse waves that cannot travel through liquids. The absence of S-waves on the
opposite side of the Earth from an earthquake indicates that part of the Earth's interior is
liquid. This is evidence for the existence of the liquid outer core.

*If you get this wrong, revise: Seismic wave types and their ability to travel through different
states of matter.*

</details>
</details>
