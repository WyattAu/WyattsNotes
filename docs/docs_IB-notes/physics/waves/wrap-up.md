---
title: Wrap Up
date: 2025-11-03T18:15:54.335Z
tags:
  - physics
categories:
  - physics
slug: wrap
---

<details>
<summary><strong>C.1 Simple Harmonic Motion, C.2 Wave Model & C.3 Wave Phenomena</strong></summary>

1. **Question (C.1 & D.1 - HL Only):** A small satellite of mass _m_ is in a circular orbit of
radius _R_ around a planet of mass _M_ ($M \gg m$). A slight external impulse causes it to oscillate
slightly in the radial direction around its stable circular path. By considering the effective
potential energy of the system (gravitational + rotational kinetic), show that for small radial
displacements _x_ from the stable orbit ($r = R+x$), the satellite undergoes simple harmonic motion.
Determine the period of these small radial oscillations.
<details>
<summary>Answer</summary>

- **Strategy:** This is a very advanced problem that connects SHM with orbital mechanics. We need to
  find the total effective potential energy, find its minimum (the stable orbit), and show that the
  second derivative of the potential energy function (which relates to the restoring force) is
  positive, indicating a stable equilibrium. The "spring constant" of this effective potential well
  will give us the period.
- **1. Effective Potential Energy ($U_{\text{eff}}$):**
  - The system has gravitational potential energy ($U_g$) and rotational kinetic energy ($E_k$). For
    a given angular momentum _L_, the total energy is:
  - $U_g = -\frac{GMm}{r}$
  - Angular momentum $L = mvr = m(r\omega)r = mr^2\omega$. In an orbit, $L$ is conserved.
  - $E_k = \frac{1}{2}mv^2 = \frac{L^2}{2mr^2}$.
  - The effective potential energy combines the true potential with the "potential" of the angular
    momentum barrier:
  - $U_{\text{eff}}(r) = U_g + E_k = -\frac{GMm}{r} + \frac{L^2}{2mr^2}$.
- **2. Find Stable Orbit Radius:**
  - Equilibrium occurs where the net force is zero, which is where the derivative of the potential
    is zero: $\frac{dU_{\text{eff}}}{dr} = 0$.
  - $\frac{d}{dr}\left(-\frac{GMm}{r} + \frac{L^2}{2mr^2}\right) = \frac{GMm}{r^2} - \frac{L^2}{mr^3} = 0$.
  - This gives the stable radius R:
    $\frac{GMm}{R^2} = \frac{L^2}{mR^3} \implies R = \frac{L^2}{GMm^2}$. This confirms the circular
    orbit condition.
- **3. Find the "Effective Spring Constant" (k_eff):**
  - For small oscillations, the restoring force is
    $F_{\text{restore}} = - \frac{dU_{\text{eff}}}{dr}$. For SHM, we need
    $F \approx -k_{\text{eff}}x$. This corresponds to the second derivative of the potential energy,
    Taylor expanding around R:
    $U_{\text{eff}}(R+x) \approx U_{\text{eff}}(R) + \frac{1}{2} U''_{\text{eff}}(R) x^2$.
  - So, $k_{\text{eff}} = \frac{d^2U_{\text{eff}}}{dr^2}$ evaluated at $r=R$.
  - $U''_{\text{eff}}(r) = \frac{d}{dr}\left(\frac{GMm}{r^2} - \frac{L^2}{mr^3}\right) = -\frac{2GMm}{r^3} + \frac{3L^2}{mr^4}$.
  - At $r=R$, we substitute $L^2 = GMm^2R$:
  - $k_{\text{eff}} = -\frac{2GMm}{R^3} + \frac{3(GMm^2R)}{mR^4} = -\frac{2GMm}{R^3} + \frac{3GMm}{R^3} = \frac{GMm}{R^3}$.
- **4. Find the Period of Oscillation:**
  - The effective restoring force is $F = -k_{\text{eff}}x$, which is the definition of SHM.
  - The angular frequency of this SHM is
    $\omega_{\text{osc}} = \sqrt{\frac{k_{\text{eff}}}{m}} = \sqrt{\frac{GMm/R^3}{m}} = \sqrt{\frac{GM}{R^3}}$.
  - Notice that the orbital angular speed is
    $\omega_{\text{orb}} = \frac{v}{R} = \frac{\sqrt{GM/R}}{R} = \sqrt{\frac{GM}{R^3}}$.
  - The angular frequencies are identical. Therefore, the period of small radial oscillations is:
  - $T_{\text{osc}} = \frac{2\pi}{\omega_{\text{osc}}} = 2\pi\sqrt{\frac{R^3}{GM}}$. This is exactly
    the same as the orbital period (Kepler's Third Law).

<p>
<b>If you get this wrong, you should focus on:</b> The concept of effective potential energy in orbital mechanics, using calculus to find stable equilibrium points ($U'(r)=0$) and the effective spring constant ($k=U''(r)$), and the fundamental connection between the restoring force and the conditions for SHM.
</p>
</details>

2. **Question (C.3 & C.4):** Two coherent point sources, S1 and S2, emit sound waves of wavelength
0.50 m in phase. They are separated by a distance of 1.2 m. A microphone is moved along a line
parallel to the line connecting S1 and S2, at a large distance D = 10 m away. At the same time, a
reflective wall is placed 0.75 m behind the sources, creating standing waves between the sources and
the wall. a) Calculate the number of destructive interference nodes located between S1 and S2 on the
line connecting them. b) Calculate the separation between the central maximum and the first-order
maximum on the distant screen. c) Now consider the wall. Will the point midway between S1 and S2 on
the connecting line be a displacement node or antinode for the standing wave? Justify.
<details>
<summary>Answer</summary>

- **Strategy:** Part (a) is a 1D interference problem. Part (b) is a standard Young's double-slit
  problem. Part (c) combines standing wave theory with path difference.
- **a) Nodes between sources:**
  - Consider a point P at a distance _x_ from S1 on the line towards S2. The path difference is
    $\Delta L = (1.2 - x) - x = 1.2 - 2x$.
  - Destructive interference occurs when $\Delta L = (n + \frac{1}{2})\lambda$.
  - $1.2 - 2x = (n + 0.5)(0.50)$. The point P must be between the sources, so $0 < x < 1.2$.
  - For $n=0$: $1.2 - 2x = 0.25 \implies 2x = 0.95 \implies x = 0.475$ m. (Valid)
  - For $n=1$: $1.2 - 2x = 0.75 \implies 2x = 0.45 \implies x = 0.225$ m. (Valid)
  - For $n=-1$: $1.2 - 2x = -0.25 \implies 2x = 1.45 \implies x = 0.725$ m. (Valid)
  - For $n=-2$: $1.2 - 2x = -0.75 \implies 2x = 1.95 \implies x = 0.975$ m. (Valid)
  - For $n=-3$: $1.2 - 2x = -1.25 \implies 2x = 2.45 \implies x = 1.225$ m. (Invalid)
  - There are **4 nodes** located between the sources.
- **b) Fringe Separation on Screen:**
  - Use the small angle approximation for Young's double-slit experiment: $s = \frac{\lambda D}{d}$.
  - Here, s is the fringe separation, $\lambda = 0.50$ m, $D = 10$ m, and $d = 1.2$ m.
  - $s = \frac{(0.50)(10)}{1.2} = 4.17$ m.
- **c) Standing Wave at Midpoint:**
  - A reflective wall acts as a fixed end for sound waves, creating a displacement node at the wall.
  - The distance from the sources to the wall is 0.75 m.
  - Standing waves have nodes separated by $\lambda/2$. Wavelength $\lambda = 0.50$ m, so
    $\lambda/2 = 0.25$ m.
  - Nodes will be located at distances of $n(\lambda/2)$ from the wall.
  - Locations from the wall: 0 m (at the wall), 0.25 m, 0.50 m, 0.75 m.
  - The sources are located 0.75 m from the wall. The point midway between S1 and S2 is also at a
    distance of 0.75 m from the wall.
  - Since this location is an integer multiple of $\lambda/2$ from the fixed-end reflector, it must
    be a **displacement node**.

<p>
<b>If you get this wrong, you should focus on:</b> Distinguishing between interference conditions in the near-field (between sources) and far-field (screen), the small angle approximation, and the conditions for nodes/antinodes in standing waves relative to a fixed boundary.
</p>
</details>

3. **Question (HL Only):** A single slit of width _b_ = 1.2 μm is illuminated by light of wavelength
600 nm. The diffraction pattern is projected onto a screen. Immediately behind the first slit, a
double slit with separation _d_ = 3.6 μm is placed. a) At what angle is the third minimum of the
single-slit diffraction pattern located? b) How many bright interference fringes from the double
slit appear within the central maximum of the single-slit diffraction pattern? c) If the amplitude
of the wave from the center of the single slit is $A_0$, what is the approximate intensity of the
first-order double-slit fringe relative to the central double-slit fringe?
<details>
<summary>Answer</summary>

- **Strategy:** This problem overlays a double-slit interference pattern on top of a single-slit
  diffraction envelope.
- **a) Third Single-Slit Minimum:**
  - The condition for minima in single-slit diffraction is $b \sin\theta = n\lambda$, for
    $n=1, 2, 3, ...$.
  - For the third minimum, $n=3$.
  - $\sin\theta = \frac{3\lambda}{b} = \frac{3(600 \times 10^{-9})}{1.2 \times 10^{-6}} = 1.5$.
  - This is impossible, as $\sin\theta$ cannot be > 1. This means the third minimum (and anything
    beyond it) does not exist. The pattern only has two minima on each side. **This is a trick to
    test boundary conditions.** Let's recalculate for the _second_ minimum ($n=2$) instead.
  - $\sin\theta = \frac{2\lambda}{b} = \frac{2(600 \times 10^{-9})}{1.2 \times 10^{-6}} = 1.0$. So
    $\theta = 90^\circ$. The second minimum is at 90 degrees.
- **b) Fringes within Central Maximum:**
  - The central maximum of the single-slit pattern extends from its first minimum on one side to the
    first minimum on the other.
  - Location of first single-slit minimum:
    $b \sin\theta_1 = \lambda \implies \sin\theta_1 = \frac{600 \text{ nm}}{1200 \text{ nm}} = 0.5 \implies \theta_1 = 30^\circ$.
  - The central max spans from -30° to +30°.
  - Now find the angles of the double-slit bright fringes: $d \sin\theta_2 = m\lambda$.
  - $\sin\theta_2 = \frac{m\lambda}{d} = \frac{m(600)}{3600} = \frac{m}{6}$.
  - We need to find how many integer values of _m_ satisfy $|\sin\theta_2| < \sin\theta_1$, which is
    $|\frac{m}{6}| < 0.5$.
  - $|m| < 3$.
  - So, the allowed values for _m_ are -2, -1, 0, 1, 2.
  - This gives a total of **5 bright fringes** inside the central maximum. (The fringes at $m=\pm 3$
    would fall exactly on the dark minima of the envelope and be invisible).
- **c) Relative Intensity:**
  - The intensity of the double-slit pattern is modulated by the single-slit diffraction envelope.
  - Intensity is proportional to amplitude squared, $I \propto A^2$. The intensity of the
    double-slit fringes is approximately
    $I_{\text{double}} \approx \cos^2(\frac{\pi d \sin\theta}{\lambda})$. The single-slit envelope
    intensity is $I_{\text{single}} \propto \left(\frac{\sin(\beta/2)}{\beta/2}\right)^2$ where
    $\beta = \frac{2\pi b \sin\theta}{\lambda}$.
  - The central fringe ($m=0, \theta=0$) has relative intensity $I_0 = I_{\text{max}}$.
  - The first-order fringe ($m=1$) occurs at $\sin\theta = \lambda/d = 1/6$.
  - At this angle, the intensity from the single-slit envelope is reduced. Let's find the reduction
    factor.
  - $\beta = \frac{2\pi b}{\lambda} \sin\theta = \frac{2\pi b}{\lambda} (\frac{\lambda}{d}) = \frac{2\pi b}{d} = \frac{2\pi (1.2)}{3.6} = \frac{2\pi}{3}$.
  - The intensity reduction is
    $\left(\frac{\sin(\beta/2)}{\beta/2}\right)^2 = \left(\frac{\sin(\pi/3)}{\pi/3}\right)^2 = \left(\frac{\sqrt{3}/2}{\pi/3}\right)^2 = \left(\frac{3\sqrt{3}}{2\pi}\right)^2 \approx (0.827)^2 \approx 0.684$.
  - The intensity of the first-order fringe is approximately **68.4%** of the central maximum's
    intensity.

<p>
<b>If you get this wrong, you should focus on:</b> The concept of a diffraction envelope modulating an interference pattern, correctly applying the conditions for minima (single-slit) and maxima (double-slit), and understanding how to find the number of fringes within the central envelope. The intensity calculation is a very high-level synthesis step.
</p>
</details>

4. **Question (C.5 & B.1 - HL Only):** A distant star is traveling directly away from an observer.
The star's spectrum is analyzed. A spectral line for hydrogen, which has a laboratory (rest)
wavelength of 486.1 nm, is measured to be 487.3 nm. The star is known to have a radius of
$7.0 \times 10^8$ m and a peak emission wavelength of 500 nm. The observer is on a planet that
receives a radiation intensity of $1.0 \times 10^{-8}$ W/m² from this star. Calculate the distance
to the star.
<details>
<summary>Answer</summary>

- **Strategy:** This is a multi-step astrophysics problem. (1) Use the Doppler shift to find the
  star's recessional velocity. (2) Use Wien's Law to find the star's surface temperature. (3) Use
  the Stefan-Boltzmann law to find the star's total luminosity (power output). (4) Use the inverse
  square law for intensity to find the distance.
- **1. Recessional Velocity (v):**
  - $\lambda = 486.1$ nm, $\lambda' = 487.3$ nm. This is a redshift.
  - $\Delta\lambda = \lambda' - \lambda = 1.2$ nm.
  - Use the low-speed Doppler formula:
    $v \approx c \frac{\Delta\lambda}{\lambda} = (3.0 \times 10^8) \frac{1.2}{486.1} = 7.41 \times 10^5$
    m/s. (The velocity is not needed for the distance, but it's part of a full analysis).
- **2. Surface Temperature (T):**
  - Use Wien's Law:
    $T = \frac{2.9 \times 10^{-3}}{\lambda_{\text{max}}} = \frac{2.9 \times 10^{-3}}{500 \times 10^{-9}} = 5800$
    K.
- **3. Luminosity (L):**
  - Use the Stefan-Boltzmann Law: $L = \sigma A T^4 = \sigma (4\pi R^2) T^4$.
  - $L = (5.67 \times 10^{-8})(4\pi (7.0 \times 10^8)^2)(5800)^4 = 3.95 \times 10^{26}$ W.
- **4. Distance (d):**
  - The observed intensity (brightness _b_) follows the inverse square law:
    $b = \frac{L}{4\pi d^2}$.
  - Rearrange to solve for d: $d = \sqrt{\frac{L}{4\pi b}}$.
  - $d = \sqrt{\frac{3.95 \times 10^{26}}{4\pi (1.0 \times 10^{-8})}} = \sqrt{3.14 \times 10^{33}} = 1.77 \times 10^{16}$
    m.
  - This is approximately 1.87 light-years.

<p>
</p>
</details>

<details>
<summary><strong>Wave Properties, Reflection, Refraction, Diffraction, Interference, Standing Waves &amp; Doppler Effect</strong></summary>

## Fundamental Wave Properties

A **wave** is a disturbance that transfers energy through a medium (or vacuum, for EM waves) without
transferring matter.

### Key Wave Quantities

| Quantity   | Symbol    | Unit       | Definition                                       |
| :--------- | :-------- | :--------- | :----------------------------------------------- |
| Wavelength | $\lambda$ | m          | Distance between two consecutive points in phase |
| Frequency  | $f$       | Hz         | Number of complete oscillations per second       |
| Period     | $T$       | s          | Time for one complete oscillation                |
| Amplitude  | $A$       | m          | Maximum displacement from equilibrium            |
| Wave speed | $v$       | m s$^{-1}$ | Speed at which the wave propagates               |

### The Wave Equation

$$v = f \lambda$$

This is one of the most frequently used equations in IB Physics. It applies to all types of waves.

### Worked Example: Wave Speed

A sound wave has a frequency of $440$ Hz and a wavelength of $0.78$ m. What is its speed?

$$v = f\lambda = (440)(0.78) = 343 \text{ m s}^{-1}$$

(This is close to the speed of sound in air at room temperature.)

### Transverse vs Longitudinal Waves

| Property              | Transverse                   | Longitudinal                |
| :-------------------- | :--------------------------- | :-------------------------- |
| Oscillation direction | Perpendicular to propagation | Parallel to propagation     |
| Examples              | EM waves, waves on a string  | Sound waves, pressure waves |
| Polarisation          | Can be polarised             | Cannot be polarised         |

> **Exam Tip:** The fact that only transverse waves can be polarised is frequently tested. If a wave
> can be polarised, it must be transverse.

---

## Reflection and Refraction

### Reflection

**Law of reflection:** The angle of incidence equals the angle of reflection, both measured from the
normal.

$$\theta_i = \theta_r$$

For reflection from a **fixed boundary**, the reflected wave is inverted (phase change of $\pi$).
For a **free boundary**, there is no inversion.

### Refraction and Snell's Law

When a wave crosses a boundary between two media, its speed changes, causing a change in direction.
**Snell's law** relates the angles and wave speeds:

$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

where $n = \frac{c}{v}$ is the **refractive index** of a medium, $c$ is the speed of light in
vacuum, and $v$ is the speed of light in the medium.

**Total internal reflection (TIR)** occurs when light travels from a denser medium ($n_1$) to a less
dense medium ($n_2$) and the angle of incidence exceeds the **critical angle** $\theta_c$:

$$\sin\theta_c = \frac{n_2}{n_1}$$

### Worked Example: Critical Angle

Light travels from glass ($n = 1.50$) to air ($n = 1.00$). Find the critical angle.

$$\sin\theta_c = \frac{1.00}{1.50} = 0.667 \implies \theta_c = 41.8°$$

Any angle of incidence greater than $41.8°$ will result in total internal reflection.

### Dispersion

The refractive index depends on wavelength: shorter wavelengths (blue/violet) are refracted more
than longer wavelengths (red). This is why white light separates into a spectrum when passing
through a prism.

> **Exam Tip:** When drawing ray diagrams for refraction, always include the **normal** (dashed line
> perpendicular to the boundary at the point of incidence). The angles are always measured from the
> normal, never from the boundary surface.

---

## Diffraction

**Diffraction** is the spreading of a wave when it passes through an aperture or around an obstacle.
The amount of diffraction depends on the relationship between the wavelength and the gap size:

- **Maximum diffraction** occurs when $\lambda \approx \text{gap size}$ (or
  $\lambda \geq \text{gap size}$)
- **Minimum diffraction** occurs when $\lambda \ll \text{gap size}$

### Single-Slit Diffraction

For a slit of width $b$, the condition for **minima** (destructive interference) is:

$$b \sin\theta = n\lambda, \quad n = 1, 2, 3, \ldots$$

The **central maximum** is twice as wide as the secondary maxima, and is the brightest region.

### Resolution (Rayleigh Criterion)

Two sources are just resolved when the central maximum of one diffraction pattern coincides with the
first minimum of the other. The Rayleigh criterion states:

$$\theta = \frac{1.22\lambda}{b}$$

where $b$ is the aperture diameter.

For a circular aperture (like a telescope or microscope), the minimum resolvable angular separation
is:

$$\theta = \frac{1.22\lambda}{D}$$

where $D$ is the diameter of the aperture.

### Worked Example: Resolving Power

A telescope with a mirror of diameter $0.10$ m observes light of wavelength $550$ nm. What is the
minimum angular separation it can resolve?

$$\theta = \frac{1.22 \times 550 \times 10^{-9}}{0.10} = 6.71 \times 10^{-6} \text{ rad} \approx 0.00038°$$

> **Exam Tip:** Diffraction is often the limiting factor on the resolving power of optical
> instruments. A larger aperture gives better resolution. This is why astronomical telescopes use
> very large mirrors.

---

## Interference

### Conditions for Interference

For two waves to produce a stable interference pattern, they must be **coherent** (constant phase
relationship) and have the same frequency.

### Path Difference

- **Constructive interference** (bright fringe / loud sound): path difference $= n\lambda$, where
  $n = 0, 1, 2, \ldots$
- **Destructive interference** (dark fringe / silence): path difference
  $= (n + \frac{1}{2})\lambda$, where $n = 0, 1, 2, \ldots$

### Young's Double-Slit Experiment

For two slits separated by distance $d$, with the screen at distance $D$ from the slits:

$$\text{Fringe spacing: } s = \frac{\lambda D}{d}$$

This formula uses the **small angle approximation**
($\sin\theta \approx \tan\theta \approx \theta$), which is valid when $D \gg d$.

### Worked Example: Double-Slit Fringe Spacing

Light of wavelength $600$ nm passes through two slits separated by $0.50$ mm. The screen is $2.0$ m
away. Calculate the fringe spacing.

$$s = \frac{\lambda D}{d} = \frac{(600 \times 10^{-9})(2.0)}{0.50 \times 10^{-3}} = \frac{1.2 \times 10^{-6}}{5.0 \times 10^{-4}} = 2.4 \times 10^{-3} \text{ m} = 2.4 \text{ mm}$$

### Thin Film Interference

When light reflects off the top and bottom surfaces of a thin film (e.g., soap bubble, oil slick),
the two reflected rays can interfere. Key points:

- A **phase change of $\pi$** occurs when light reflects off a medium with a higher refractive index
- The condition for constructive/destructive interference depends on the film thickness $t$,
  refractive index $n$, and wavelength $\lambda$:
  - Constructive: $2nt = (m + \frac{1}{2})\lambda$ (if one reflection has phase change)
  - Destructive: $2nt = m\lambda$ (if one reflection has phase change)

> **Exam Tip:** Always check how many phase changes occur (one or two reflections from denser media)
> before applying thin film formulas. This is the most commonly tested subtlety.

---

## Standing Waves

A **standing wave** (stationary wave) is formed when two identical waves travelling in opposite
directions superpose. Unlike travelling waves, standing waves do not transfer energy.

### Key Features

- **Nodes:** Points of zero amplitude (destructive interference)
- **Antinodes:** Points of maximum amplitude (constructive interference)
- Nodes and antinodes are separated by $\lambda/4$
- Adjacent nodes are separated by $\lambda/2$

### Standing Waves on a String (Fixed-Fixed)

For a string of length $L$ fixed at both ends:

| Harmonic             | Pattern       | Wavelength                 | Frequency                    |
| :------------------- | :------------ | :------------------------- | :--------------------------- |
| Fundamental ($n=1$)  | One antinode  | $\lambda_1 = 2L$           | $f_1 = \frac{v}{2L}$         |
| 2nd harmonic ($n=2$) | Two antinodes | $\lambda_2 = L$            | $f_2 = \frac{2v}{2L} = 2f_1$ |
| $n$th harmonic       | $n$ antinodes | $\lambda_n = \frac{2L}{n}$ | $f_n = \frac{nv}{2L} = nf_1$ |

The wave speed on a string under tension $T$ with mass per unit length $\mu$ is:

$$v = \sqrt{\frac{T}{\mu}}$$

### Standing Waves in Pipes

**Open pipe** (open at both ends): antinodes at both ends.

$$f_n = \frac{nv}{2L}, \quad n = 1, 2, 3, \ldots$$

**Closed pipe** (closed at one end): node at closed end, antinode at open end. **Only odd
harmonics** are present.

$$f_n = \frac{nv}{4L}, \quad n = 1, 3, 5, \ldots$$

### Worked Example: Guitar String

A guitar string of length $0.65$ m has a fundamental frequency of $330$ Hz. What is the speed of
waves on the string?

$$v = f_1 \times 2L = (330)(1.30) = 429 \text{ m s}^{-1}$$

If the string has a mass per unit length of $\mu = 3.5 \times 10^{-3} \text{ kg m}^{-1}$, what
tension is required?

$$T = \mu v^2 = (3.5 \times 10^{-3})(429)^2 = 644 \text{ N}$$

> **Exam Tip:** A closed pipe cannot produce even harmonics ($n = 2, 4, 6, \ldots$). If an IB
> question asks about the "second harmonic" of a closed pipe, the answer is the third harmonic
> ($n = 3$), with frequency $3f_1$. Be very careful with this terminology.

---

## The Doppler Effect

The **Doppler effect** is the change in observed frequency (and wavelength) of a wave when there is
relative motion between the source and the observer.

### General Formula

$$f' = f \left(\frac{v \pm v_o}{v \mp v_s}\right)$$

where:

- $f'$ = observed frequency
- $f$ = emitted (source) frequency
- $v$ = speed of the wave in the medium
- $v_o$ = speed of the observer ($+$ if moving towards the source)
- $v_s$ = speed of the source ($-$ if moving towards the observer)

**Mnemonic:** Top sign is the same as the motion of the observer; bottom sign is the opposite of the
motion of the source.

### For Electromagnetic Waves (Light)

Since EM waves do not require a medium, the relativistic Doppler formula applies. For speeds much
less than $c$:

$$\frac{\Delta\lambda}{\lambda} \approx \frac{v}{c}$$

- **Redshift** ($\Delta\lambda \gt{} 0$): source moving away from observer
- **Blueshift** ($\Delta\lambda \lt{} 0$): source moving towards observer

### Worked Example: Ambulance Siren

An ambulance travelling at $30$ m s$^{-1}$ emits a siren at $800$ Hz. The speed of sound is $343$ m
s$^{-1}$.

**Observer stationary, ambulance approaching:**

$$f' = f\left(\frac{v}{v - v_s}\right) = 800\left(\frac{343}{343 - 30}\right) = 800\left(\frac{343}{313}\right) = 877 \text{ Hz}$$

**Observer stationary, ambulance moving away:**

$$f' = f\left(\frac{v}{v + v_s}\right) = 800\left(\frac{343}{343 + 30}\right) = 800\left(\frac{343}{373}\right) = 736 \text{ Hz}$$

> **Exam Tip:** For the Doppler effect, always identify whether the source, the observer, or both
> are moving. The formula changes depending on this. Also remember that the wave speed $v$ is always
> the speed of the wave **in the medium**, not the speed of the source.

---

## Quick Reference: Key Wave Formulas

| Formula                                             | Application                      |
| :-------------------------------------------------- | :------------------------------- |
| $v = f\lambda$                                      | Wave speed                       |
| $n_1 \sin\theta_1 = n_2 \sin\theta_2$               | Snell's law                      |
| $\sin\theta_c = \frac{n_2}{n_1}$                    | Critical angle                   |
| $b \sin\theta = n\lambda$                           | Single-slit diffraction minima   |
| $\theta = \frac{1.22\lambda}{D}$                    | Rayleigh resolution criterion    |
| $s = \frac{\lambda D}{d}$                           | Double-slit fringe spacing       |
| $f_n = \frac{nv}{2L}$                               | Harmonics (string / open pipe)   |
| $f_n = \frac{nv}{4L}$ ($n$ odd)                     | Harmonics (closed pipe)          |
| $v = \sqrt{\frac{T}{\mu}}$                          | Wave speed on a string           |
| $f' = f\left(\frac{v \pm v_o}{v \mp v_s}\right)$    | Doppler effect (sound)           |
| $\frac{\Delta\lambda}{\lambda} \approx \frac{v}{c}$ | Doppler shift (light, $v \ll c$) |

</details>
