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
<p>

1. **Question (C.1 & D.1 - HL Only):** A small satellite of mass _m_ is in a circular orbit of radius _R_ around a planet of mass _M_ ($M \gg m$). A slight external impulse causes it to oscillate slightly in the radial direction around its stable circular path. By considering the effective potential energy of the system (gravitational + rotational kinetic), show that for small radial displacements _x_ from the stable orbit ($r = R+x$), the satellite undergoes simple harmonic motion. Determine the period of these small radial oscillations.
<details>
<summary>Answer</summary>

- **Strategy:** This is a very advanced problem that connects SHM with orbital mechanics. We need to find the total effective potential energy, find its minimum (the stable orbit), and show that the second derivative of the potential energy function (which relates to the restoring force) is positive, indicating a stable equilibrium. The "spring constant" of this effective potential well will give us the period.
- **1. Effective Potential Energy ($U_{\text{eff}}$):**
  - The system has gravitational potential energy ($U_g$) and rotational kinetic energy ($E_k$). For a given angular momentum _L_, the total energy is:
  - $U_g = -\frac{GMm}{r}$
  - Angular momentum $L = mvr = m(r\omega)r = mr^2\omega$. In an orbit, $L$ is conserved.
  - $E_k = \frac{1}{2}mv^2 = \frac{L^2}{2mr^2}$.
  - The effective potential energy combines the true potential with the "potential" of the angular momentum barrier:
  - $U_{\text{eff}}(r) = U_g + E_k = -\frac{GMm}{r} + \frac{L^2}{2mr^2}$.
- **2. Find Stable Orbit Radius:**
  - Equilibrium occurs where the net force is zero, which is where the derivative of the potential is zero: $\frac{dU_{\text{eff}}}{dr} = 0$.
  - $\frac{d}{dr}\left(-\frac{GMm}{r} + \frac{L^2}{2mr^2}\right) = \frac{GMm}{r^2} - \frac{L^2}{mr^3} = 0$.
  - This gives the stable radius R: $\frac{GMm}{R^2} = \frac{L^2}{mR^3} \implies R = \frac{L^2}{GMm^2}$. This confirms the circular orbit condition.
- **3. Find the "Effective Spring Constant" (k_eff):**
  - For small oscillations, the restoring force is $F_{\text{restore}} = - \frac{dU_{\text{eff}}}{dr}$. For SHM, we need $F \approx -k_{\text{eff}}x$. This corresponds to the second derivative of the potential energy, Taylor expanding around R: $U_{\text{eff}}(R+x) \approx U_{\text{eff}}(R) + \frac{1}{2} U''_{\text{eff}}(R) x^2$.
  - So, $k_{\text{eff}} = \frac{d^2U_{\text{eff}}}{dr^2}$ evaluated at $r=R$.
  - $U''_{\text{eff}}(r) = \frac{d}{dr}\left(\frac{GMm}{r^2} - \frac{L^2}{mr^3}\right) = -\frac{2GMm}{r^3} + \frac{3L^2}{mr^4}$.
  - At $r=R$, we substitute $L^2 = GMm^2R$:
  - $k_{\text{eff}} = -\frac{2GMm}{R^3} + \frac{3(GMm^2R)}{mR^4} = -\frac{2GMm}{R^3} + \frac{3GMm}{R^3} = \frac{GMm}{R^3}$.
- **4. Find the Period of Oscillation:**
  - The effective restoring force is $F = -k_{\text{eff}}x$, which is the definition of SHM.
  - The angular frequency of this SHM is $\omega_{\text{osc}} = \sqrt{\frac{k_{\text{eff}}}{m}} = \sqrt{\frac{GMm/R^3}{m}} = \sqrt{\frac{GM}{R^3}}$.
  - Notice that the orbital angular speed is $\omega_{\text{orb}} = \frac{v}{R} = \frac{\sqrt{GM/R}}{R} = \sqrt{\frac{GM}{R^3}}$.
  - The angular frequencies are identical. Therefore, the period of small radial oscillations is:
  - $T_{\text{osc}} = \frac{2\pi}{\omega_{\text{osc}}} = 2\pi\sqrt{\frac{R^3}{GM}}$. This is exactly the same as the orbital period (Kepler's Third Law).

<p>
<b>If you get this wrong, you should focus on:</b> The concept of effective potential energy in orbital mechanics, using calculus to find stable equilibrium points ($U'(r)=0$) and the effective spring constant ($k=U''(r)$), and the fundamental connection between the restoring force and the conditions for SHM.
</p>
</details>

2. **Question (C.3 & C.4):** Two coherent point sources, S1 and S2, emit sound waves of wavelength 0.50 m in phase. They are separated by a distance of 1.2 m. A microphone is moved along a line parallel to the line connecting S1 and S2, at a large distance D = 10 m away. At the same time, a reflective wall is placed 0.75 m behind the sources, creating standing waves between the sources and the wall.
a) Calculate the number of destructive interference nodes located between S1 and S2 on the line connecting them.
b) Calculate the separation between the central maximum and the first-order maximum on the distant screen.
c) Now consider the wall. Will the point midway between S1 and S2 on the connecting line be a displacement node or antinode for the standing wave? Justify.
<details>
<summary>Answer</summary>

- **Strategy:** Part (a) is a 1D interference problem. Part (b) is a standard Young's double-slit problem. Part (c) combines standing wave theory with path difference.
- **a) Nodes between sources:**
  - Consider a point P at a distance _x_ from S1 on the line towards S2. The path difference is $\Delta L = (1.2 - x) - x = 1.2 - 2x$.
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
  - Standing waves have nodes separated by $\lambda/2$. Wavelength $\lambda = 0.50$ m, so $\lambda/2 = 0.25$ m.
  - Nodes will be located at distances of $n(\lambda/2)$ from the wall.
  - Locations from the wall: 0 m (at the wall), 0.25 m, 0.50 m, 0.75 m.
  - The sources are located 0.75 m from the wall. The point midway between S1 and S2 is also at a distance of 0.75 m from the wall.
  - Since this location is an integer multiple of $\lambda/2$ from the fixed-end reflector, it must be a **displacement node**.

<p>
<b>If you get this wrong, you should focus on:</b> Distinguishing between interference conditions in the near-field (between sources) and far-field (screen), the small angle approximation, and the conditions for nodes/antinodes in standing waves relative to a fixed boundary.
</p>
</details>

3. **Question (HL Only):** A single slit of width _b_ = 1.2 μm is illuminated by light of wavelength 600 nm. The diffraction pattern is projected onto a screen. Immediately behind the first slit, a double slit with separation _d_ = 3.6 μm is placed.
a) At what angle is the third minimum of the single-slit diffraction pattern located?
b) How many bright interference fringes from the double slit appear within the central maximum of the single-slit diffraction pattern?
c) If the amplitude of the wave from the center of the single slit is $A_0$, what is the approximate intensity of the first-order double-slit fringe relative to the central double-slit fringe?
<details>
<summary>Answer</summary>

- **Strategy:** This problem overlays a double-slit interference pattern on top of a single-slit diffraction envelope.
- **a) Third Single-Slit Minimum:**
  - The condition for minima in single-slit diffraction is $b \sin\theta = n\lambda$, for $n=1, 2, 3, ...$.
  - For the third minimum, $n=3$.
  - $\sin\theta = \frac{3\lambda}{b} = \frac{3(600 \times 10^{-9})}{1.2 \times 10^{-6}} = 1.5$.
  - This is impossible, as $\sin\theta$ cannot be > 1. This means the third minimum (and anything beyond it) does not exist. The pattern only has two minima on each side. **This is a trick to test boundary conditions.** Let's recalculate for the _second_ minimum ($n=2$) instead.
  - $\sin\theta = \frac{2\lambda}{b} = \frac{2(600 \times 10^{-9})}{1.2 \times 10^{-6}} = 1.0$. So $\theta = 90^\circ$. The second minimum is at 90 degrees.
- **b) Fringes within Central Maximum:**
  - The central maximum of the single-slit pattern extends from its first minimum on one side to the first minimum on the other.
  - Location of first single-slit minimum: $b \sin\theta_1 = \lambda \implies \sin\theta_1 = \frac{600 \text{ nm}}{1200 \text{ nm}} = 0.5 \implies \theta_1 = 30^\circ$.
  - The central max spans from -30° to +30°.
  - Now find the angles of the double-slit bright fringes: $d \sin\theta_2 = m\lambda$.
  - $\sin\theta_2 = \frac{m\lambda}{d} = \frac{m(600)}{3600} = \frac{m}{6}$.
  - We need to find how many integer values of _m_ satisfy $|\sin\theta_2| < \sin\theta_1$, which is $|\frac{m}{6}| < 0.5$.
  - $|m| < 3$.
  - So, the allowed values for _m_ are -2, -1, 0, 1, 2.
  - This gives a total of **5 bright fringes** inside the central maximum. (The fringes at $m=\pm 3$ would fall exactly on the dark minima of the envelope and be invisible).
- **c) Relative Intensity:**
  - The intensity of the double-slit pattern is modulated by the single-slit diffraction envelope.
  - Intensity is proportional to amplitude squared, $I \propto A^2$. The intensity of the double-slit fringes is approximately $I_{\text{double}} \approx \cos^2(\frac{\pi d \sin\theta}{\lambda})$. The single-slit envelope intensity is $I_{\text{single}} \propto \left(\frac{\sin(\beta/2)}{\beta/2}\right)^2$ where $\beta = \frac{2\pi b \sin\theta}{\lambda}$.
  - The central fringe ($m=0, \theta=0$) has relative intensity $I_0 = I_{\text{max}}$.
  - The first-order fringe ($m=1$) occurs at $\sin\theta = \lambda/d = 1/6$.
  - At this angle, the intensity from the single-slit envelope is reduced. Let's find the reduction factor.
  - $\beta = \frac{2\pi b}{\lambda} \sin\theta = \frac{2\pi b}{\lambda} (\frac{\lambda}{d}) = \frac{2\pi b}{d} = \frac{2\pi (1.2)}{3.6} = \frac{2\pi}{3}$.
  - The intensity reduction is $\left(\frac{\sin(\beta/2)}{\beta/2}\right)^2 = \left(\frac{\sin(\pi/3)}{\pi/3}\right)^2 = \left(\frac{\sqrt{3}/2}{\pi/3}\right)^2 = \left(\frac{3\sqrt{3}}{2\pi}\right)^2 \approx (0.827)^2 \approx 0.684$.
  - The intensity of the first-order fringe is approximately **68.4%** of the central maximum's intensity.

<p>
<b>If you get this wrong, you should focus on:</b> The concept of a diffraction envelope modulating an interference pattern, correctly applying the conditions for minima (single-slit) and maxima (double-slit), and understanding how to find the number of fringes within the central envelope. The intensity calculation is a very high-level synthesis step.
</p>
</details>

4. **Question (C.5 & B.1 - HL Only):** A distant star is traveling directly away from an observer. The star's spectrum is analyzed. A spectral line for hydrogen, which has a laboratory (rest) wavelength of 486.1 nm, is measured to be 487.3 nm. The star is known to have a radius of $7.0 \times 10^8$ m and a peak emission wavelength of 500 nm. The observer is on a planet that receives a radiation intensity of $1.0 \times 10^{-8}$ W/m² from this star. Calculate the distance to the star.
<details>
<summary>Answer</summary>

- **Strategy:** This is a multi-step astrophysics problem. (1) Use the Doppler shift to find the star's recessional velocity. (2) Use Wien's Law to find the star's surface temperature. (3) Use the Stefan-Boltzmann law to find the star's total luminosity (power output). (4) Use the inverse square law for intensity to find the distance.
- **1. Recessional Velocity (v):**
  - $\lambda = 486.1$ nm, $\lambda' = 487.3$ nm. This is a redshift.
  - $\Delta\lambda = \lambda' - \lambda = 1.2$ nm.
  - Use the low-speed Doppler formula: $v \approx c \frac{\Delta\lambda}{\lambda} = (3.0 \times 10^8) \frac{1.2}{486.1} = 7.41 \times 10^5$ m/s. (The velocity is not needed for the distance, but it's part of a full analysis).
- **2. Surface Temperature (T):**
  - Use Wien's Law: $T = \frac{2.9 \times 10^{-3}}{\lambda_{\text{max}}} = \frac{2.9 \times 10^{-3}}{500 \times 10^{-9}} = 5800$ K.
- **3. Luminosity (L):**
  - Use the Stefan-Boltzmann Law: $L = \sigma A T^4 = \sigma (4\pi R^2) T^4$.
  - $L = (5.67 \times 10^{-8})(4\pi (7.0 \times 10^8)^2)(5800)^4 = 3.95 \times 10^{26}$ W.
- **4. Distance (d):**
  - The observed intensity (brightness _b_) follows the inverse square law: $b = \frac{L}{4\pi d^2}$.
  - Rearrange to solve for d: $d = \sqrt{\frac{L}{4\pi b}}$.
  - $d = \sqrt{\frac{3.95 \times 10^{26}}{4\pi (1.0 \times 10^{-8})}} = \sqrt{3.14 \times 10^{33}} = 1.77 \times 10^{16}$ m.
  - This is approximately 1.87 light-years.

<p>
<b>If you get this wrong, you should focus on:</b> Synthesizing the four key equations of observational astrophysics: Doppler shift, Wien's Law, Stefan-Boltzmann Law, and the inverse-square law for brightness. Each step provides a piece of information needed for the next.
</p>
</details>

</p>
</details>
