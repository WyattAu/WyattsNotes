---
title: Light and Waves
description:
  "International LC Physics: Light and Waves — Wave Properties; Types of Waves (OL/HL); Why the Distinction Matters; Wave Terminology (OL/HL)."
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

### Why the Distinction Matters

Only transverse waves can be polarised. Sound cannot be polarised because it is longitudinal. The
fact that light can be polarised (by Polaroid filters) was historically important evidence that
light is a transverse wave, not a longitudinal one as Newton had believed.

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
v = 200 \times 1.5 = 300\mathrm{ m/s}
$$

### Derivation of the Wave Equation

In one period $T$, each wavefront travels a distance of one wavelength $\lambda$. Therefore:

$$
v = \frac{\mathrm{distance}}{\mathrm{time}} = \frac{\lambda}{T} = \lambda f
$$

This is exact for any periodic wave. It implies that frequency and wavelength are inversely
proportional for a given wave speed.

## Reflection and Refraction

### Laws of Reflection (OL/HL)

1. The incident ray, reflected ray, and normal all lie in the same plane.
2. The angle of incidence equals the angle of reflection: $\theta_i = \theta_r$.

### Why Reflection Obeys the Law

Huygens' principle: every point on a wavefront acts as a source of secondary wavelets. The envelope
of these wavelets forms the reflected wavefront. Geometry dictates that the angle of reflection
equals the angle of incidence.

### Snell's Law of Refraction (OL/HL)

$$
n_1 \sin\theta_1 = n_2 \sin\theta_2
$$

where $n$ is the refractive index.

**Example (OL):** Light travels from air ($n = 1$) into glass ($n = 1.5$) at an angle of incidence
of $30^\circ$. Find the angle of refraction.

$$
1 \times \sin 30° = 1.5 \times \sin\theta_2
$$

$$
\sin\theta_2 = \frac{0.5}{1.5} = \frac{1}{3} \implies \theta_2 \approx 19.5°
$$

### Why Frequency Does Not Change During Refraction

The rate at which wavefronts arrive at the boundary must equal the rate at which they leave.
Otherwise, wavefronts would pile up or gaps would appear. Since $v = f\lambda$ and $f$ is constant,
a decrease in speed produces a proportional decrease in wavelength.

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
reflects off the walls, travelling along the fibre with minimal loss. Applications include
telecommunications (high bandwidth, low signal loss over long distances) and medicine (endoscopes).

### Why Total Internal Reflection Only Occurs Denser to Less Dense

The refracted ray bends away from the normal as the wave speeds up. At the critical angle, the
refracted ray travels along the boundary ($\theta_2 = 90^\circ$). Beyond this angle, there is nowhere for
the refracted ray to go, so all the light is reflected. When going from less dense to more dense,
the refracted ray always bends toward the normal and there is no critical angle.

## Diffraction (OL/HL)

Diffraction is the spreading of waves when they pass through a gap or around an obstacle.

- Maximum diffraction occurs when the gap width is approximately equal to the wavelength.
- Diffraction is more pronounced for longer wavelengths.

### Why Diffraction Depends on Gap Size Relative to Wavelength

By Huygens' principle, every point on a wavefront acts as a source of secondary wavelets. If the gap
is much wider than the wavelength, most of the wavefront passes through undisturbed, and only the
edges show significant spreading. If the gap is comparable to the wavelength, the secondary wavelets
from all parts of the gap overlap significantly, producing broad spreading.

### Single Slit Diffraction (HL)

For light of wavelength $\lambda$ passing through a slit of width $a$:

- The central maximum has angular half-width $\sin\theta = \frac{\lambda}{a}$.
- Minima occur at $a\sin\theta = n\lambda$ for $n = 1, 2, 3, \ldots$

### Intensity Pattern

The intensity distribution for single-slit diffraction is:

$$I(\theta) = I_0 \left(\frac{\sin\beta}{\beta}\right)^2, \quad \mathrm{where } \beta = \frac{\pi a\sin\theta}{\lambda}$$

The central maximum is the brightest, and the secondary maxima decrease rapidly in intensity.

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
\mathrm{Path difference} = d\sin\theta
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

**Example (HL):** In a Young's double slit experiment, light of wavelength $600\mathrm{ nm}$ is used.
The slits are $0.5\mathrm{ mm}$ apart and the screen is $1.5\mathrm{ m}$ away. Find the fringe spacing.

$$
\Delta x = \frac{600 \times 10^{-9} \times 1.5}{0.5 \times 10^{-3}} = \frac{9 \times 10^{-7}}{5 \times 10^{-4}} = 1.8 \times 10^{-3}\mathrm{ m} = 1.8\mathrm{ mm}
$$

### Why Coherence Is Necessary

Interference requires a constant phase relationship between the two sources. Two independent light
sources are not coherent: the phase difference between them changes randomly due to the independent
emission of photons from different atoms. This is why Young's slits must be illuminated by the
_same_ source (one slit, then two narrow slits).

### Diffraction Grating (HL)

A diffraction grating has $N$ slits per unit length. The slit spacing is $d = \frac{1}{N}$.

**Grating equation:**

$$
d\sin\theta = n\lambda
$$

The number of maxima visible is limited by $|\sin\theta| \le 1$.

**Example (HL):** A grating has 500 lines per mm. Light of wavelength $580\mathrm{ nm}$ is incident
normally. Find the angles of the first and second order maxima.

$$
d = \frac{1}{500 \times 10^3} = 2 \times 10^{-6}\mathrm{ m}
$$

First order ($n = 1$):
$\sin\theta = \frac{580 \times 10^{-9}}{2 \times 10^{-6}} = 0.29 \implies \theta \approx 16.9^\circ$.

Second order ($n = 2$): $\sin\theta = 0.58 \implies \theta \approx 35.4^\circ$.

Third order: $\sin\theta = 0.87 \implies \theta \approx 60.5^\circ$.

Fourth order: $\sin\theta = 1.16$ -- not possible. So only 3 orders are visible on each side.

## The Electromagnetic Spectrum (OL/HL)

| Region        | Wavelength range                 | Typical source         |
| ------------- | -------------------------------- | ---------------------- |
| Radio waves   | $\gt 1\mathrm{ m}$                 | Radio transmitters     |
| Microwaves    | $1\mathrm{ mm}$ -- $1\mathrm{ m}$    | Microwave ovens, radar |
| Infrared      | $700\mathrm{ nm}$ -- $1\mathrm{ mm}$ | Warm objects           |
| Visible light | $400$ -- $700\mathrm{ nm}$         | Sun, lamps             |
| Ultraviolet   | $10$ -- $400\mathrm{ nm}$          | Sun, UV lamps          |
| X-rays        | $0.01$ -- $10\mathrm{ nm}$         | X-ray tubes            |
| Gamma rays    | $\lt 0.01\mathrm{ nm}$             | Radioactive decay      |

All EM waves travel at $c = 3 \times 10^8\mathrm{ m/s}$ in a vacuum.

### Why Higher Frequency EM Waves Are More Energetic

The energy of a photon is $E = hf$. Higher frequency means higher energy per photon. This is why
gamma rays (very high frequency) are extremely dangerous: each photon carries enough energy to break
chemical bonds and damage DNA. Radio photons have such low energy that they are harmless to
biological tissue.

## Sound Waves

### Properties of Sound (OL/HL)

- Sound is a longitudinal wave requiring a medium.
- Speed of sound in air at $20°\mathrm{C}$: approximately $343\mathrm{ m/s}$.
- Frequency range of human hearing: $20\mathrm{ Hz}$ to $20,000\mathrm{ Hz}$.

### Why Sound Cannot Travel Through a Vacuum

Sound is a mechanical wave: it propagates by particles colliding with their neighbours. In a vacuum,
there are no particles, so the disturbance cannot propagate. Light (an electromagnetic wave) does
not require a medium, which is why we can see the Sun but cannot hear it.

### Intensity (HL)

The intensity of sound decreases with distance from a point source:

$$
I \propto \frac{1}{r^2}
$$

### Decibels (HL)

Sound intensity level:

$$
\beta = 10\log_{10}\left(\frac{I}{I_0}\right)\mathrm{ dB}
$$

where $I_0 = 10^{-12}\mathrm{ W/m}^2$ (threshold of hearing).

**Example (HL):** A sound has intensity level $75\mathrm{ dB}$. Find its intensity.

$$
75 = 10\log_{10}\left(\frac{I}{10^{-12}}\right) \implies \frac{I}{10^{-12}} = 10^{7.5}
$$

$$
I = 10^{7.5} \times 10^{-12} = 10^{-4.5} = 3.16 \times 10^{-5}\mathrm{ W/m}^2
$$

### Why the Decibel Scale

The human ear can detect intensities spanning $10^{12}$. A linear scale would require numbers from 1
to a trillion. The logarithmic decibel scale compresses this range to 0--120 dB, which is far more
manageable. A 3 dB increase corresponds to a doubling of intensity.

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

**Example (HL):** An ambulance with siren at 800 Hz travels at $30\mathrm{ m/s}$ towards a stationary
observer. Speed of sound $= 343\mathrm{ m/s}$. Find the observed frequency.

$$
f' = 800 \times \frac{343}{343 - 30} = 800 \times \frac{343}{313} \approx 877\mathrm{ Hz}
$$

### Applications of the Doppler Effect

- **Radar speed guns:** measure the frequency shift of reflected microwaves from moving vehicles.
- **Astronomy:** redshift of light from distant galaxies indicates they are moving away (Hubble's
  law).
- **Medical ultrasound:** the Doppler effect is used to measure blood flow velocity.

## Common Pitfalls

1. **Mixing up diffraction and interference** -- diffraction is spreading; interference is
   superposition.
2. **Snell's law** -- identify which medium the light is entering (the refractive index changes).
3. **Fringe spacing formula** -- ensure consistent units (convert nm to m).
4. **Doppler effect** -- the source moving towards gives a higher frequency, moving away gives
   lower.
5. **Total internal reflection** -- only occurs when going from denser to less dense medium.
6. **Forgetting that the fringe spacing formula assumes small angles.** For large angles, use
   $d\sin\theta = n\lambda$ directly.
7. **Confusing amplitude and frequency** -- amplitude determines loudness; frequency determines
   pitch.

## Practice Questions

### Ordinary Level

1. A wave has wavelength 0.5 m and frequency 680 Hz. Find the speed.
2. Light travels from air into water ($n = 1.33$) at $40^\circ$. Find the angle of refraction.
3. State the laws of reflection.
4. Describe how sound differs from light in terms of wave type and propagation.

### Higher Level

1. In a Young's double slit experiment, the fringe spacing is $0.8\mathrm{ mm}$. If the slit
   separation is $0.4\mathrm{ mm}$ and the screen is $2\mathrm{ m}$ away, find the wavelength of light
   used.
2. Light of wavelength $550\mathrm{ nm}$ is incident on a diffraction grating with 400 lines/mm. Find
   the maximum number of orders visible.
3. A car horn has frequency 440 Hz. The car approaches at $25\mathrm{ m/s}$. Find the frequency heard
   by a stationary observer (speed of sound $= 343\mathrm{ m/s}$).
4. Find the critical angle for light going from diamond ($n = 2.42$) to air.

5. A single slit of width $0.1\mathrm{ mm}$ is illuminated with light of wavelength $500\mathrm{ nm}$.
   Calculate the angular width of the central maximum and the angles of the first two minima.

6. The first-order maximum for a diffraction grating occurs at $17.5^\circ$ for light of wavelength
   $590\mathrm{ nm}$. Calculate the number of lines per mm on the grating.

7. A sound of intensity $5.0 \times 10^{-6}\mathrm{ W/m}^2$ has an intensity level of $67\mathrm{ dB}$.
   Calculate the intensity level of a sound that is 1000 times more intense.

8. Explain why two independent light bulbs cannot produce a stable interference pattern, even though
   they emit the same frequency.

9. A police speed gun uses microwaves of frequency $24.15\mathrm{ GHz}$ reflected from a car
   approaching at $30\mathrm{ m/s}$. Calculate the observed frequency shift.

10. An optical fibre has a core of refractive index 1.50 and cladding of refractive index 1.45. Find
    the critical angle for light travelling from core to cladding, and explain why this angle
    ensures total internal reflection.

## 11. Worked Example: Single Slit Diffraction and Intensity (HL)

Light of wavelength $500 \mathrm{ nm}$ passes through a slit of width $0.05 \mathrm{ mm}$. Find the
angular width of the central maximum and the angles of the first two minima.

**Central maximum half-width:**

$$\sin\theta = \frac{\lambda}{a} = \frac{500 \times 10^{-9}}{0.05 \times 10^{-3}} = 0.01$$

$$\theta = \arcsin(0.01) = 0.573^{\circ}$$

The full angular width is $2\theta = 1.15^{\circ}$.

**First minimum:** $\sin\theta_1 = \frac{\lambda}{a} = 0.01 \implies \theta_1 = 0.573^{\circ}$

**Second minimum:** $\sin\theta_2 = \frac{2\lambda}{a} = 0.02 \implies \theta_2 = 1.15^{\circ}$

## 12. Worked Example: Diffraction Grating with Multiple Orders (HL)

A diffraction grating has 400 lines/mm. Light of wavelength $589 \mathrm{ nm}$ is incident normally.

**Grating spacing:** $d = \frac{1}{400 \times 10^3} = 2.5 \times 10^{-6} \mathrm{ m}$

**First order ($n = 1$):**
$\sin\theta = \frac{589 \times 10^{-9}}{2.5 \times 10^{-6}} = 0.2356 \implies \theta = 13.6^{\circ}$

**Second order ($n = 2$):** $\sin\theta = 0.4712 \implies \theta = 28.1^{\circ}$

**Third order ($n = 3$):** $\sin\theta = 0.7068 \implies \theta = 45.0^{\circ}$

**Fourth order:** $\sin\theta = 0.9424 \implies \theta = 70.4^{\circ}$

**Fifth order:** $\sin\theta = 1.178$ -- impossible. So only 4 orders are visible on each side (9
maxima total including central).

## 13. Sound Intensity: Extended Analysis (HL)

### Worked Example: Combining Decibels

Two machines produce $80 \mathrm{ dB}$ and $83 \mathrm{ dB}$ each at a worker's position. Find the total
intensity level.

$$I_1 = I_0 \times 10^{80/10} = 10^{-12} \times 10^8 = 10^{-4} \mathrm{ W/m}^2$$

$$I_2 = I_0 \times 10^{83/10} = 10^{-12} \times 10^{8.3} = 2 \times 10^{-4} \mathrm{ W/m}^2$$

$$I_{\mathrm{total}} = 3 \times 10^{-4} \mathrm{ W/m}^2$$

$$\beta_{\mathrm{total}} = 10\log_{10}\left(\frac{3 \times 10^{-4}}{10^{-12}}\right) = 10 \times 7.477 = 74.8 \mathrm{ dB}$$

Adding $80 \mathrm{ dB}$ and $83 \mathrm{ dB}$ gives $74.8 \mathrm{ dB}$, not $163 \mathrm{ dB}$. If two
sources have the same intensity, the total is $3 \mathrm{ dB}$ higher.

### Worked Example: Inverse Square Law for Sound

A speaker emits $1 \mathrm{ mW}$ of sound power. Calculate the intensity level at $3 \mathrm{ m}$.

$$I = \frac{P}{4\pi r^2} = \frac{10^{-3}}{4\pi \times 9} = 8.84 \times 10^{-6} \mathrm{ W/m}^2$$

$$\beta = 10\log_{10}\left(\frac{8.84 \times 10^{-6}}{10^{-12}}\right) = 10 \times 6.946 = 69.5 \mathrm{ dB}$$

## 14. Refraction: Extended Worked Examples

### Worked Example: Refraction Through a Glass Block (HL)

A ray of light enters a rectangular glass block at $40^{\circ}$ to the normal. The glass has
refractive index $1.5$. The block is $6 \mathrm{ cm}$ thick. Find the lateral displacement of the ray.

**At entry:**

$$\sin\theta_r = \frac{\sin 40^{\circ}}{1.5} = \frac{0.6428}{1.5} = 0.4285$$

$$\theta_r = \arcsin(0.4285) = 25.4^{\circ}$$

**Lateral displacement:**

$$d_{\mathrm{horizontal}} = \frac{6}{\cos 25.4^{\circ}} = \frac{6}{0.9030} = 6.64 \mathrm{ cm}$$

Lateral displacement
$= 6.64 \times \sin(40^{\circ} - 25.4^{\circ}) = 6.64 \times 0.252 = 1.67 \mathrm{ cm}$

**At exit:** The ray exits parallel to the original direction (parallel faces). The exit angle
equals the entry angle ($40^{\circ}$).

## 15. Doppler Effect: Extended Analysis (HL)

### Worked Example: Moving Observer

An observer moves towards a stationary $440 \mathrm{ Hz}$ source at $15 \mathrm{ m/s}$. Speed of sound =
$343 \mathrm{ m/s}$.

$$f' = 440 \times \frac{343 + 15}{343} = 440 \times 1.0437 = 459.2 \mathrm{ Hz}$$

### Worked Example: Frequency Shift for Radar

A police radar gun operates at $24.15 \mathrm{ GHz}$. A car approaches at $30 \mathrm{ m/s}$. The
reflected wave is Doppler-shifted twice.

The frequency received by the car:

$$f_1 = 24.15 \times 10^9 \times \frac{343}{343 - 30} = 26.46 \times 10^9 \mathrm{ Hz}$$

The frequency received back at the gun:

$$f_2 = 26.46 \times 10^9 \times \frac{343}{313} = 29.00 \times 10^9 \mathrm{ Hz}$$

Frequency shift: $\Delta f = 29.00 - 24.15 = 4.85 \mathrm{ GHz}$

## 16. Summary Table: Wave and Optics Formulas

| Topic              | Formula                             | Level | Notes                        |
| ------------------ | ----------------------------------- | ----- | ---------------------------- |
| Wave equation      | $v = f\lambda$                      | OL/HL | Universal for periodic waves |
| Snell's law        | $n_1\sin\theta_1 = n_2\sin\theta_2$ | OL/HL | Frequency unchanged          |
| Critical angle     | $\sin\theta_c = n_2/n_1$            | HL    | Denser to less dense only    |
| Fringe spacing     | $\Delta x = \lambda L/d$            | HL    | Double slit                  |
| Grating equation   | $d\sin\theta = n\lambda$            | HL    | $n$th order maximum          |
| Decibels           | $\beta = 10\log_{10}(I/I_0)$        | HL    | $I_0 = 10^{-12}$ W/m$^2$     |
| Doppler (source)   | $f' = fv/(v - v_s)$                 | HL    | Minus for approaching        |
| Doppler (observer) | $f' = f(v + v_o)/v$                 | HL    | Plus for approaching         |

## 17. Practice Questions (Additional)

### Higher Level (Additional)

11. Light of wavelength $620 \mathrm{ nm}$ passes through a single slit of width $0.03 \mathrm{ mm}$.
    Calculate the angular positions of the first and second minima.

12. A diffraction grating has 600 lines/mm. Light of wavelength $550 \mathrm{ nm}$ is incident
    normally. Calculate the maximum number of orders visible and the total angular width of the
    second-order spectrum.

13. Two sound sources produce intensity levels of $72 \mathrm{ dB}$ and $72 \mathrm{ dB}$ at a point.
    Find the total intensity level.

14. A light ray enters a semicircular glass block of refractive index $1.6$ at an angle of
    $50^{\circ}$ to the normal at the flat surface. Describe what happens at the curved surface.

15. An ambulance siren at $700 \mathrm{ Hz}$ approaches a stationary observer at $20 \mathrm{ m/s}$ and
    then recedes at $20 \mathrm{ m/s}$. Calculate the frequency heard by the observer in both cases.

16. Explain why total internal reflection only occurs when light travels from a denser medium to a
    less dense medium, with reference to Snell's law.

17. A sound intensity level of $90 \mathrm{ dB}$ is measured at $1 \mathrm{ m}$ from a point source. At
    what distance is the level $60 \mathrm{ dB}$?

18. Describe Young's double slit experiment and explain how it provides evidence for the wave nature
    of light.

19. An optical fibre has a core refractive index of $1.48$ and cladding refractive index of $1.42$.
    Calculate the critical angle and explain why this fibre can transmit signals around bends.

20. Explain the difference between coherent and incoherent sources. Why are two independent light
    bulbs unable to produce a stable interference pattern?

## Extended Worked Examples

### Example 21: Lateral Displacement Through a Glass Block

A ray of light enters a rectangular glass block of refractive index $1.52$ at an angle of incidence
of $40^\circ$. The block has thickness $5 \mathrm{ cm}$. Calculate the angle of refraction, the lateral
displacement of the ray, and the angle of emergence.

**Step 1: Angle of refraction (Snell's law at entry)**

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

$$1 \times \sin 40° = 1.52 \times \sin\theta_2$$

$$\sin\theta_2 = \frac{0.6428}{1.52} = 0.4229$$

$$\theta_2 = 25.03^\circ$$

**Step 2: Lateral displacement**

The lateral displacement $d$ is given by:

$$d = t \times \frac{\sin(\theta_1 - \theta_2)}{\cos\theta_2}$$

where $t = 5 \mathrm{ cm} = 0.05 \mathrm{ m}$.

$$d = 0.05 \times \frac{\sin(40° - 25.03°)}{\cos 25.03°} = 0.05 \times \frac{\sin 14.97°}{\cos 25.03°}$$

$$d = 0.05 \times \frac{0.2583}{0.9061} = 0.05 \times 0.2851 = 0.01426 \mathrm{ m} = 1.43 \mathrm{ cm}$$

**Step 3: Angle of emergence**

At the second surface, the light goes from glass to air. By Snell's law:

$$1.52 \times \sin 25.03° = 1 \times \sin\theta_e$$

$$\sin\theta_e = 1.52 \times 0.4229 = 0.6428$$

$$\theta_e = 40^\circ$$

The emergent ray is parallel to the incident ray but displaced sideways by $1.43 \mathrm{ cm}$.

:::info
The emergent ray is always parallel to the incident ray for a rectangular block with
parallel faces. The lateral displacement increases with thickness and with angle of incidence.
:::

### Example 22: Doppler Effect -- Moving Observer

A sound source emits a frequency of $440 \mathrm{ Hz}$ and is stationary. An observer moves directly
towards the source at $25 \mathrm{ m/s}$. Calculate the observed frequency. (Speed of sound
$= 343 \mathrm{ m/s}$.)

**Step 1: Use the Doppler equation for moving observer**

$$f' = f\left(\frac{v + v_o}{v}\right)$$

where $v_o$ is the observer speed (positive when moving towards the source).

$$f' = 440 \times \frac{343 + 25}{343} = 440 \times \frac{368}{343} = 440 \times 1.0729 = 472.1 \mathrm{ Hz}$$

**Step 2: What if the source moves towards a stationary observer?**

$$f' = f\left(\frac{v}{v - v_s}\right)$$

For the same speed ($v_s = 25 \mathrm{ m/s}$):

$$f' = 440 \times \frac{343}{343 - 25} = 440 \times \frac{343}{318} = 440 \times 1.0786 = 474.6 \mathrm{ Hz}$$

The frequency shift is slightly different for a moving source vs a moving observer at the same
speed. This asymmetry is a key feature of the classical Doppler effect.

### Example 23: Refraction Through a Prism

A prism has an apex angle of $60^\circ$ and refractive index $1.50$. Light enters one face at an angle of
$45^\circ$. Calculate the angle of deviation.

**Step 1: Refraction at the first face**

$$\sin 45° = 1.50 \times \sin r_1$$

$$\sin r_1 = \frac{0.7071}{1.50} = 0.4714$$

$$r_1 = 28.13^\circ$$

**Step 2: Angle of incidence at the second face**

For a prism with apex angle $A$:

$$r_1 + r_2 = A = 60^\circ$$

$$r_2 = 60° - 28.13° = 31.87^\circ$$

**Step 3: Check for total internal reflection**

Critical angle: $\sin\theta_c = \frac{1}{n} = \frac{1}{1.50} = 0.6667 \implies \theta_c = 41.8^\circ$

Since $r_2 = 31.87° \lt \theta_c$, the light exits the second face.

**Step 4: Angle of emergence**

$$1.50 \times \sin 31.87° = 1 \times \sin e$$

$$\sin e = 1.50 \times 0.5284 = 0.7926$$

$$e = 52.48^\circ$$

**Step 5: Angle of deviation**

$$D = (i - r_1) + (e - r_2) = (45° - 28.13°) + (52.48° - 31.87°) = 16.87° + 20.61° = 37.48^\circ$$

Or using the formula: $D = i + e - A = 45° + 52.48° - 60° = 37.48^\circ$.

## Common Pitfalls Extended

### Pitfall 6: Forgetting That Light Slows Down in Denser Media

The speed of light in a medium is $v = c/n$. Many students incorrectly believe light speeds up in
glass. Higher refractive index means slower speed and shorter wavelength (frequency stays constant).

### Pitfall 7: Incorrect Application of Snell's Law at Curved Surfaces

Snell's law applies at every interface, but for curved surfaces (lenses), the angle of incidence
varies across the surface. You cannot use a single angle of incidence for the entire lens. Instead,
use the lens maker's equation or the thin lens formula.

### Pitfall 8: Confusing Diffraction and Refraction

Diffraction is the spreading of waves around obstacles or through gaps. Refraction is the bending of
waves due to a change in speed. They are different phenomena. Diffraction is most pronounced when
the gap size is comparable to the wavelength; refraction occurs at boundaries between media of
different densities.

## Additional Practice Problems

21. A convex lens has a focal length of $15 \mathrm{ cm}$. An object $3 \mathrm{ cm}$ tall is placed
    $25 \mathrm{ cm}$ from the lens. Calculate the image position, height, magnification, and nature
    (real/virtual, upright/inverted). Draw a ray diagram.

22. Monochromatic light of wavelength $550 \mathrm{ nm}$ is incident on a diffraction grating with
    $400 \mathrm{ lines/mm}$. Calculate the angles of the first and second order maxima and the total
    number of orders visible.

23. A concave mirror has a focal length of $20 \mathrm{ cm}$. An object is placed $30 \mathrm{ cm}$ from
    the mirror. Calculate the image position and magnification. Is the image real or virtual?

24. The wavelength of light in a certain liquid is $450 \mathrm{ nm}$. If the wavelength in air is
    $600 \mathrm{ nm}$, calculate the refractive index of the liquid and the speed of light in the
    liquid.

25. Explain how fibre optic cables use total internal reflection to transmit data. Include a
    calculation showing why a fibre with core refractive index $1.50$ and cladding index $1.45$ is
    suitable for this purpose.
