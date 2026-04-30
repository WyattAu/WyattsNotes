---
title: Wave Phenomena
description: IB Physics — standing waves, resonance, harmonics, Doppler effect, diffraction, interference, and thin film interference.
slug: wave-phenomena
---

## Standing Waves

### Formation

A **standing wave** (stationary wave) is formed by the superposition of two waves of the same
frequency travelling in opposite directions. Unlike a travelling wave, a standing wave does not
propagate energy; the energy is trapped between fixed points.

### Nodes and Antinodes

- **Nodes** ($N$): Points of zero amplitude. Occur where the two travelling waves always cancel.
- **Antinodes** ($A$): Points of maximum amplitude. Occur where the two travelling waves always
  reinforce.

The distance between adjacent nodes (or adjacent antinodes) is $\dfrac{\lambda}{2}$. The distance
between a node and the adjacent antinode is $\dfrac{\lambda}{4}$.

### Mathematical Description

If the two travelling waves are $y_1 = A\sin(kx - \omega t)$ and $y_2 = A\sin(kx + \omega t)$,
their superposition gives:

$$y = y_1 + y_2 = 2A\sin(kx)\cos(\omega t)$$

This is a standing wave. The spatial part $2A\sin(kx)$ determines the amplitude envelope, and
$\cos(\omega t)$ determines the time oscillation. Nodes occur where $\sin(kx) = 0$, i.e. at
$x = \dfrac{n\lambda}{2}$ for integer $n$.

### Standing Waves on Strings

For a string of length $L$ fixed at both ends:

- Both ends are **nodes**.
- Only certain **resonant frequencies** are allowed.

| Mode | Wavelength | Frequency |
| :--- | :--- | :--- |
| Fundamental (1st harmonic) | $\lambda_1 = 2L$ | $f_1 = \dfrac{v}{2L}$ |
| 2nd harmonic | $\lambda_2 = L$ | $f_2 = \dfrac{v}{L} = 2f_1$ |
| 3rd harmonic | $\lambda_3 = \dfrac{2L}{3}$ | $f_3 = \dfrac{3v}{2L} = 3f_1$ |
| $n$-th harmonic | $\lambda_n = \dfrac{2L}{n}$ | $f_n = \dfrac{nv}{2L} = nf_1$ |

where $v = \sqrt{\dfrac{T}{\mu}}$ is the wave speed on the string, $T$ is the tension, and $\mu$ is
the mass per unit length.

**Example.** A string of length $0.75\,\mathrm{m}$ has a fundamental frequency of $220\,\mathrm{Hz}$.
Find the frequency of the 3rd harmonic and the wave speed.

$$f_3 = 3 \times 220 = 660\,\mathrm{Hz}$$

$$v = 2Lf_1 = 2(0.75)(220) = 330\,\mathrm{m/s}$$

### Standing Waves in Pipes

**Open pipe** (open at both ends): antinodes at both ends.

$$f_n = \frac{nv}{2L}, \qquad n = 1, 2, 3, \ldots$$

All harmonics are present.

**Closed pipe** (closed at one end): node at the closed end, antinode at the open end.

$$f_n = \frac{nv}{4L}, \qquad n = 1, 3, 5, \ldots \mathrm{(odd\ harmonics\ only)}$$

Only odd harmonics are produced. The fundamental has wavelength $\lambda_1 = 4L$.

---

## Resonance

### Definition

**Resonance** occurs when a system is driven at its natural frequency, causing the amplitude of
oscillation to reach a maximum. At resonance, energy is transferred most efficiently from the driver
to the system.

### Conditions for Resonance

1. The driving frequency must equal (or be close to) the natural frequency of the system.
2. Energy must be continuously supplied to compensate for damping.
3. The lighter the damping, the sharper and taller the resonance peak.

### Examples

- A child on a swing pushed at the right frequency.
- Tuning a radio to a specific station frequency.
- A glass shattering when exposed to a sound at its resonant frequency.
- Bridge collapse under periodic wind forcing (e.g. Tacoma Narrows, 1940).

### Damping and the $Q$-Factor

The **quality factor** $Q$ measures the sharpness of resonance:

$$Q = \frac{f_0}{\Delta f}$$

where $f_0$ is the resonant frequency and $\Delta f$ is the bandwidth (width of the resonance curve
at half the maximum amplitude). A high $Q$ means sharp resonance with low damping.

---

## The Doppler Effect

### Statement

The **Doppler effect** is the change in observed frequency (and wavelength) of a wave when there is
relative motion between the source and the observer.

### Formulas

**Source moving, observer stationary.** If the source moves towards the observer with speed $v_s$:

$$f' = \frac{v}{v - v_s}\,f$$

If the source moves away:

$$f' = \frac{v}{v + v_s}\,f$$

**Observer moving, source stationary.** If the observer moves towards the source with speed $v_o$:

$$f' = \frac{v + v_o}{v}\,f$$

**Combined formula** (source and observer moving along the line joining them):

$$f' = f \cdot \frac{v \pm v_o}{v \mp v_s}$$

Upper signs when moving towards each other, lower signs when moving apart.

**Example.** An ambulance with siren at $800\,\mathrm{Hz}$ travels at $30\,\mathrm{m/s}$ towards a
stationary observer. Speed of sound = $343\,\mathrm{m/s}$.

$$f' = \frac{343}{343 - 30} \times 800 = \frac{343}{313} \times 800 \approx 877\,\mathrm{Hz}$$

As the ambulance passes and moves away:

$$f' = \frac{343}{343 + 30} \times 800 = \frac{343}{373} \times 800 \approx 736\,\mathrm{Hz}$$

### Electromagnetic Doppler Effect

For light, the relativistic Doppler formula applies:

$$f' = f\sqrt{\frac{1 + \beta}{1 - \beta}}$$

where $\beta = v/c$ for relative approach. For $v \ll c$:

$$\frac{\Delta f}{f} \approx \frac{v}{c}$$

**Redshift:** source receding ($f' \lt f$). **Blueshift:** source approaching ($f' \gt f$).

---

## Diffraction

### Definition

**Diffraction** is the spreading of waves when they pass through an aperture or around an obstacle.
It is most pronounced when the aperture size is comparable to the wavelength.

### Single Slit Diffraction

When monochromatic light of wavelength $\lambda$ passes through a slit of width $a$:

- **Central maximum:** the widest and brightest fringe, of angular width $2\dfrac{\lambda}{a}$.
- **Secondary minima** at angles $\theta$ satisfying:

$$a\sin\theta = n\lambda, \qquad n = \pm 1, \pm 2, \ldots$$

- **Secondary maxima** approximately halfway between consecutive minima.

### Diffraction and Resolution

**Rayleigh criterion.** Two point sources are just resolvable when the central maximum of one
diffraction pattern coincides with the first minimum of the other:

$$\theta_{\min} = \frac{1.22\lambda}{D}$$

where $D$ is the aperture diameter. This sets the **angular resolution** of optical instruments.

---

## Interference

### Coherence

**Interference** is the superposition of two or more waves. For a stable interference pattern, the
waves must be **coherent** — they must have a constant phase relationship. This requires:

- Same frequency (monochromatic).
- Constant phase difference.

### Path Difference

For two coherent sources, constructive interference occurs when the path difference is a whole
number of wavelengths:

$$\Delta x = n\lambda, \qquad n = 0, 1, 2, \ldots$$

Destructive interference occurs when the path difference is a half-integer number of wavelengths:

$$\Delta x = \left(n + \frac{1}{2}\right)\lambda, \qquad n = 0, 1, 2, \ldots$$

---

## Young's Double-Slit Experiment

### Setup

Light from a single source passes through two narrow, parallel slits separated by distance $d$. The
light diffracts through each slit, and the diffracted waves overlap and interfere on a screen at
distance $L$ from the slits.

### Fringe Spacing

The bright fringes (maxima) occur where:

$$d\sin\theta = n\lambda, \qquad n = 0, \pm 1, \pm 2, \ldots$$

For small angles ($\sin\theta \approx \tan\theta \approx \theta$), the fringe spacing on the screen is:

$$\Delta y = \frac{\lambda L}{d}$$

**Example.** Light of wavelength $600\,\mathrm{nm}$ passes through slits $0.5\,\mathrm{mm}$ apart onto a
screen $2.0\,\mathrm{m}$ away. Find the fringe spacing.

$$\Delta y = \frac{600 \times 10^{-9} \times 2.0}{0.5 \times 10^{-3}} = \frac{1.2 \times 10^{-6}}{5 \times 10^{-4}} = 2.4 \times 10^{-3}\,\mathrm{m} = 2.4\,\mathrm{mm}$$

### Intensity Distribution

The intensity at angle $\theta$ on the screen is:

$$I = I_0 \cos^2\!\left(\frac{\pi d \sin\theta}{\lambda}\right)$$

where $I_0$ is the maximum intensity at the centre of the pattern. The pattern is modulated by the
single-slit diffraction envelope of each slit.

---

## Diffraction Gratings

### Principle

A diffraction grating consists of a large number $N$ of equally spaced parallel slits. It produces
sharper, more widely spaced maxima than a double slit.

### Grating Equation

$$d\sin\theta = n\lambda, \qquad n = 0, \pm 1, \pm 2, \ldots$$

where $d = \dfrac{1}{N_L}$ is the slit spacing and $N_L$ is the number of lines per unit length.

**Maximum order.** The highest observable order is limited by $|\sin\theta| \le 1$, giving
$n_{\max} \le \dfrac{d}{\lambda}$.

**Example.** A grating with $500\,\mathrm{lines/mm}$ is illuminated with light of wavelength
$589\,\mathrm{nm}$. Find the angles of the first two orders.

$$d = \frac{1}{500 \times 10^3} = 2.0 \times 10^{-6}\,\mathrm{m}$$

$$\sin\theta_1 = \frac{1 \times 589 \times 10^{-9}}{2.0 \times 10^{-6}} = 0.2945 \implies \theta_1 \approx 17.1\,{}^{\circ}$$

$$\sin\theta_2 = \frac{2 \times 589 \times 10^{-9}}{2.0 \times 10^{-6}} = 0.589 \implies \theta_2 \approx 36.1\,{}^{\circ}$$

### Applications

- **Spectroscopy:** separating light into its component wavelengths.
- **Astronomy:** measuring the redshift of spectral lines from distant galaxies.
- **CD/DVD reading:** the spiral tracks act as a diffraction grating.

---

## Thin Film Interference

### Principle

When light strikes a thin film (e.g. soap bubble, oil slick), it is partially reflected from the top
surface and partially from the bottom surface. These two reflected beams interfere.

### Phase Changes

A **phase change of $\pi$** (half-wavelength shift) occurs when light reflects off a medium with a
higher refractive index than the medium it is travelling in.

### Conditions

For a film of thickness $t$ and refractive index $n_f$:

**Constructive interference** (bright reflection):

$$2n_f t = \left(m + \frac{1}{2}\right)\lambda \qquad \mathrm{(one\ phase\ change)}$$

$$2n_f t = m\lambda \qquad \mathrm{(zero\ or\ two\ phase\ changes)}$$

**Destructive interference** (dark reflection):

$$2n_f t = m\lambda \qquad \mathrm{(one\ phase\ change)}$$

$$2n_f t = \left(m + \frac{1}{2}\right)\lambda \qquad \mathrm{(zero\ or\ two\ phase\ changes)}$$

where $m = 0, 1, 2, \ldots$ and $\lambda$ is the wavelength in vacuum.

### Newton's Rings

When a plano-convex lens is placed on a flat glass surface, concentric bright and dark rings are
observed due to thin film interference in the variable air gap. The $m$-th dark ring has radius:

$$r_m = \sqrt{m\lambda R}$$

where $R$ is the radius of curvature of the lens surface.

### Wedge Films

Two flat glass plates inclined at a small angle $\theta$ produce equally spaced interference fringes.
The fringe spacing is:

$$\Delta x = \frac{\lambda}{2\theta}$$

**Example.** A soap film ($n = 1.33$) of thickness $200\,\mathrm{nm}$ is illuminated with white light.
Which colour is most strongly reflected?

For constructive reflection (one phase change at air-to-film boundary):

$$\lambda = \frac{2n_f t}{m + 1/2} = \frac{2(1.33)(200)}{m + 1/2} = \frac{532}{m + 1/2}\,\mathrm{nm}$$

For $m = 0$: $\lambda = 1064\,\mathrm{nm}$ (infrared, not visible).
For $m = 1$: $\lambda \approx 355\,\mathrm{nm}$ (near UV).

The dominant visible reflection is at the violet end, giving the film a violet-blue appearance.

---

## Wave Superposition Principle

### Statement

When two or more waves overlap, the resultant displacement at any point is the algebraic sum of the
individual displacements:

$$y_{\mathrm{total}} = y_1 + y_2 + \cdots$$

This principle is linear and holds when the medium responds linearly to the wave amplitude. At very
large amplitudes (nonlinear regime), the principle breaks down.

### Constructive and Destructive Interference

- **Constructive:** waves in phase; amplitudes add.
- **Destructive:** waves in antiphase (out of phase by $\pi$); amplitudes cancel.
- **Partial:** any other phase difference; amplitudes add vectorially.

---

## Wave Intensity and Power

### Intensity

The **intensity** of a wave is the power per unit area carried by the wave:

$$I = \frac{P}{A}$$

For a point source radiating equally in all directions (spherical waves), the intensity at distance
$r$ from the source is:

$$I = \frac{P}{4\pi r^2}$$

This is the **inverse square law**: intensity is inversely proportional to the square of the
distance.

### Intensity and Amplitude

Intensity is proportional to the square of the amplitude:

$$I \propto A^2$$

For electromagnetic waves, $I \propto E_0^2$ where $E_0$ is the electric field amplitude.

### Decibels

Sound intensity level is measured in **decibels** (dB):

$$\beta = 10\log_{10}\!\left(\frac{I}{I_0}\right)$$

where $I_0 = 1.0 \times 10^{-12}\,\mathrm{W/m^2}$ is the threshold of hearing.

**Example.** A sound has intensity $I = 1.0 \times 10^{-6}\,\mathrm{W/m^2}$. Find the intensity
level.

$$\beta = 10\log_{10}\!\left(\frac{10^{-6}}{10^{-12}}\right) = 10\log_{10}(10^6) = 60\,\mathrm{dB}$$

---

## Polarisation

### Transverse Waves Only

Only transverse waves can be polarised. **Polarisation** restricts the oscillation of a wave to a
single plane.

### Types

- **Unpolarised:** oscillations in all planes perpendicular to propagation.
- **Plane (linearly) polarised:** oscillations confined to one plane.
- **Partially polarised:** mixture of polarised and unpolarised.

### Malus's Law

When plane-polarised light of intensity $I_0$ passes through an analyser at angle $\theta$ to the
polarisation direction:

$$I = I_0\cos^2\theta$$

**Example.** Unpolarised light passes through two polarising filters. The first is vertical; the
second is at $30\,{}^{\circ}$ to the vertical. What fraction of the original intensity emerges?

After the first filter: $I_1 = \dfrac{I_0}{2}$ (half transmitted for unpolarised light).

After the second filter (Malus's law): $I_2 = I_1\cos^2 30\,{}^{\circ} = \dfrac{I_0}{2} \cdot \dfrac{3}{4}
= \dfrac{3}{8}I_0$.

### Brewster's Angle

When unpolarised light reflects off a surface at the **Brewster angle** $\theta_B$, the reflected
light is completely polarised (perpendicular to the plane of incidence):

$$\tan\theta_B = \frac{n_2}{n_1}$$

**Example.** Find Brewster's angle for light reflecting off water ($n = 1.33$).

$$\theta_B = \arctan(1.33) \approx 53.1\,{}^{\circ}$$

---

## Huygens' Principle

### Statement

Every point on a wavefront acts as a source of secondary wavelets. The new wavefront at a later
time is the envelope (tangent surface) of these wavelets.

### Applications

- **Reflection:** Huygens' construction shows that the angle of incidence equals the angle of
  reflection.
- **Refraction:** Huygens' construction leads to Snell's law: $n_1\sin\theta_1 = n_2\sin\theta_2$.
- **Diffraction:** The spreading of wavelets beyond the edge of an obstacle explains diffraction.

---

## Superposition of Waves

### Interference from Two Coherent Sources

For two coherent sources separated by distance $d$, the path difference to a point at angle $\theta$
is $d\sin\theta$.

**Intensity distribution:**

$$I(\theta) = 4I_0\cos^2\!\left(\frac{\pi d \sin\theta}{\lambda}\right)$$

where $I_0$ is the intensity from a single source. Maxima occur at $d\sin\theta = n\lambda$ and
minima at $d\sin\theta = (n + 1/2)\lambda$.

### Path Difference and Phase Difference

Path difference $\Delta x$ and phase difference $\Delta\phi$ are related by:

$$\Delta\phi = \frac{2\pi}{\lambda}\,\Delta x$$

| Path Difference | Phase Difference | Interference |
| :--- | :--- | :--- |
| $0, \lambda, 2\lambda, \ldots$ | $0, 2\pi, 4\pi, \ldots$ | Constructive |
| $\lambda/2, 3\lambda/2, \ldots$ | $\pi, 3\pi, \ldots$ | Destructive |

:::warning Common Pitfall

In double-slit calculations, do not confuse the slit separation $d$ with the slit width $a$. The
fringe spacing is determined by $d$; the envelope of the diffraction pattern is determined by $a$.
The overall intensity pattern is the product of the double-slit interference pattern and the
single-slit diffraction envelope.

:::

---

## Related Content at Other Levels

- **A-Level Waves:** [Physics](https://alevel.wyattau.com/docs/physics/physics)
- **DSE Waves and Sound:** [Waves and Sound](https://academics.wyattau.com/docs/dse/Physics/waves-and-sound)
- **University Wave Physics:** [Optics and Wave Physics](https://university.wyattau.com/docs/physics/optics-and-wave-physics)
