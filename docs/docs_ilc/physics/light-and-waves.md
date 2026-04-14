---
title: Light and Waves
date: 2026-04-14
tags:
  - Physics
  - ILC
categories:
  - Physics
slug: light-and-waves
---

# Light and Waves

This topic covers the wave nature of light, sound, reflection, refraction, diffraction,
interference, and the electromagnetic spectrum. Waves are a major area of the Leaving Certificate
Physics syllabus.

## Wave Properties

### Types of Waves (OL/HL)

- **Transverse waves:** oscillations are perpendicular to the direction of propagation (e.g., light,
  water waves).
- **Longitudinal waves:** oscillations are parallel to the direction of propagation (e.g., sound).

### Wave Terminology (OL/HL)

| Term                   | Definition                                       |
| ---------------------- | ------------------------------------------------ |
| Wavelength ($\lambda$) | Distance between two consecutive points in phase |
| Frequency ($f$)        | Number of complete oscillations per second (Hz)  |
| Amplitude ($A$)        | Maximum displacement from equilibrium            |
| Period ($T$)           | Time for one complete oscillation                |
| Wave speed ($v$)       | Speed at which the wave propagates               |

### Wave Equation (OL/HL)

$$
v = f\lambda
$$

**Example (OL):** A wave has frequency 200 Hz and wavelength 1.5 m. Find the speed.

$$
v = 200 \times 1.5 = 300\text{ m/s}
$$

## Reflection and Refraction

### Laws of Reflection (OL/HL)

1. The incident ray, reflected ray, and normal all lie in the same plane.
2. The angle of incidence equals the angle of reflection: $\theta_i = \theta_r$.

### Snell's Law of Refraction (OL/HL)

$$
n_1 \sin\theta_1 = n_2 \sin\theta_2
$$

where $n$ is the refractive index.

**Example (OL):** Light travels from air ($n = 1$) into glass ($n = 1.5$) at an angle of incidence
of $30°$. Find the angle of refraction.

$$
1 \times \sin 30° = 1.5 \times \sin\theta_2
$$

$$
\sin\theta_2 = \frac{0.5}{1.5} = \frac{1}{3} \implies \theta_2 \approx 19.5°
$$

### Total Internal Reflection (HL)

When light travels from a denser to a less dense medium, the critical angle $\theta_c$ is given by:

$$
\sin\theta_c = \frac{n_2}{n_1}, \quad n_1 > n_2
$$

Total internal reflection occurs when $\theta_1 > \theta_c$.

**Example (HL):** Find the critical angle for light going from glass ($n = 1.5$) to air.

$$
\sin\theta_c = \frac{1}{1.5} = \frac{2}{3} \implies \theta_c \approx 41.8°
$$

### Optical Fibres (HL)

Optical fibres use total internal reflection to transmit light signals. Light enters the fibre and
reflects off the walls, travelling along the fibre with minimal loss.

## Diffraction (OL/HL)

Diffraction is the spreading of waves when they pass through a gap or around an obstacle.

- Maximum diffraction occurs when the gap width is approximately equal to the wavelength.
- Diffraction is more pronounced for longer wavelengths.

### Single Slit Diffraction (HL)

For light of wavelength $\lambda$ passing through a slit of width $a$:

- The central maximum has angular half-width $\sin\theta = \frac{\lambda}{a}$.
- Minima occur at $a\sin\theta = n\lambda$ for $n = 1, 2, 3, \ldots$

## Interference (HL)

### Conditions for Interference

1. Waves must be coherent (same frequency and constant phase relationship).
2. Waves must have similar amplitudes.
3. Waves must be polarised in the same plane (for transverse waves).

### Young's Double Slit Experiment (HL)

Light passes through two narrow slits separated by distance $d$, producing an interference pattern
on a screen at distance $D$.

**Path difference** between the two waves arriving at a point on the screen:

$$
\text{Path difference} = d\sin\theta
$$

For small angles ($\theta$ small): $\sin\theta \approx \tan\theta = \frac{x}{D}$.

**Bright fringes (constructive interference):**

$$
d\sin\theta = n\lambda \implies x_n = \frac{n\lambda D}{d}, \quad n = 0, 1, 2, \ldots
$$

**Dark fringes (destructive interference):**

$$
d\sin\theta = \left(n + \frac{1}{2}\right)\lambda \implies x_n = \frac{\left(n + \frac{1}{2}\right)\lambda D}{d}, \quad n = 0, 1, 2, \ldots
$$

**Fringe spacing:**

$$
\Delta x = \frac{\lambda D}{d}
$$

**Example (HL):** In a Young's double slit experiment, light of wavelength $600\text{ nm}$ is used.
The slits are $0.5\text{ mm}$ apart and the screen is $1.5\text{ m}$ away. Find the fringe spacing.

$$
\Delta x = \frac{600 \times 10^{-9} \times 1.5}{0.5 \times 10^{-3}} = \frac{9 \times 10^{-7}}{5 \times 10^{-4}} = 1.8 \times 10^{-3}\text{ m} = 1.8\text{ mm}
$$

### Diffraction Grating (HL)

A diffraction grating has $N$ slits per unit length. The slit spacing is $d = \frac{1}{N}$.

**Grating equation:**

$$
d\sin\theta = n\lambda
$$

The number of maxima visible is limited by $|\sin\theta| \leq 1$.

**Example (HL):** A grating has 500 lines per mm. Light of wavelength $580\text{ nm}$ is incident
normally. Find the angles of the first and second order maxima.

$$
d = \frac{1}{500 \times 10^3} = 2 \times 10^{-6}\text{ m}
$$

First order ($n = 1$):
$\sin\theta = \frac{580 \times 10^{-9}}{2 \times 10^{-6}} = 0.29 \implies \theta \approx 16.9°$.

Second order ($n = 2$): $\sin\theta = 0.58 \implies \theta \approx 35.4°$.

Third order: $\sin\theta = 0.87 \implies \theta \approx 60.5°$.

Fourth order: $\sin\theta = 1.16$ -- not possible. So only 3 orders are visible on each side.

## The Electromagnetic Spectrum (OL/HL)

| Region        | Wavelength range                 | Typical source         |
| ------------- | -------------------------------- | ---------------------- |
| Radio waves   | $\gt 1\text{ m}$                 | Radio transmitters     |
| Microwaves    | $1\text{ mm}$ -- $1\text{ m}$    | Microwave ovens, radar |
| Infrared      | $700\text{ nm}$ -- $1\text{ mm}$ | Warm objects           |
| Visible light | $400$ -- $700\text{ nm}$         | Sun, lamps             |
| Ultraviolet   | $10$ -- $400\text{ nm}$          | Sun, UV lamps          |
| X-rays        | $0.01$ -- $10\text{ nm}$         | X-ray tubes            |
| Gamma rays    | $\lt 0.01\text{ nm}$             | Radioactive decay      |

All EM waves travel at $c = 3 \times 10^8\text{ m/s}$ in a vacuum.

## Sound Waves

### Properties of Sound (OL/HL)

- Sound is a longitudinal wave requiring a medium.
- Speed of sound in air at $20°\text{C}$: approximately $343\text{ m/s}$.
- Frequency range of human hearing: $20\text{ Hz}$ to $20,000\text{ Hz}$.

### Intensity (HL)

The intensity of sound decreases with distance from a point source:

$$
I \propto \frac{1}{r^2}
$$

### Decibels (HL)

Sound intensity level:

$$
\beta = 10\log_{10}\left(\frac{I}{I_0}\right)\text{ dB}
$$

where $I_0 = 10^{-12}\text{ W/m}^2$ (threshold of hearing).

## Doppler Effect (HL)

When a source and observer are moving relative to each other, the observed frequency differs from
the emitted frequency.

For a source moving towards a stationary observer:

$$
f' = f\left(\frac{v}{v - v_s}\right)
$$

For a source moving away:

$$
f' = f\left(\frac{v}{v + v_s}\right)
$$

**Example (HL):** An ambulance with siren at 800 Hz travels at $30\text{ m/s}$ towards a stationary
observer. Speed of sound $= 343\text{ m/s}$. Find the observed frequency.

$$
f' = 800 \times \frac{343}{343 - 30} = 800 \times \frac{343}{313} \approx 877\text{ Hz}
$$

## Common Pitfalls

1. **Mixing up diffraction and interference** -- diffraction is spreading; interference is
   superposition.
2. **Snell's law** -- identify which medium the light is entering (the refractive index changes).
3. **Fringe spacing formula** -- ensure consistent units (convert nm to m).
4. **Doppler effect** -- the source moving towards gives a higher frequency, moving away gives
   lower.
5. **Total internal reflection** -- only occurs when going from denser to less dense medium.

## Practice Questions

### Ordinary Level

1. A wave has wavelength 0.5 m and frequency 680 Hz. Find the speed.
2. Light travels from air into water ($n = 1.33$) at $40°$. Find the angle of refraction.
3. State the laws of reflection.
4. Describe how sound differs from light in terms of wave type and propagation.

### Higher Level

1. In a Young's double slit experiment, the fringe spacing is $0.8\text{ mm}$. If the slit
   separation is $0.4\text{ mm}$ and the screen is $2\text{ m}$ away, find the wavelength of light
   used.
2. Light of wavelength $550\text{ nm}$ is incident on a diffraction grating with 400 lines/mm. Find
   the maximum number of orders visible.
3. A car horn has frequency 440 Hz. The car approaches at $25\text{ m/s}$. Find the frequency heard
   by a stationary observer (speed of sound $= 343\text{ m/s}$).
4. Find the critical angle for light going from diamond ($n = 2.42$) to air.
