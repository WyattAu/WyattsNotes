---
title: Rigid Body Dynamics: Advanced Topics
tags:
  - Physics
  - University
---

### 9.1 Euler's Equations in the Body Frame

For a rigid body rotating freely (no external torques), the angular momentum in the body frame
satisfies:

$$I_1\dot{\omega}_1 - (I_2 - I_3)\omega_2\omega_3 = 0$$

$$I_2\dot{\omega}_2 - (I_3 - I_1)\omega_3\omega_1 = 0$$

$$I_3\dot{\omega}_3 - (I_1 - I_2)\omega_1\omega_2 = 0$$

Where $I_1, I_2, I_3$ are the principal moments of inertia and $\omega_1, \omega_2, \omega_3$ are
the angular velocity components in the body frame.

**First integral:** The kinetic energy
$T = \frac{1}{2}(I_1\omega_1^2 + I_2\omega_2^2 + I_3\omega_3^2)$ and the angular momentum magnitude
$L^2 = I_1^2\omega_1^2 + I_2^2\omega_2^2 + I_3^2\omega_3^2$ are both conserved.

### 9.2 Stability of Free Rotation

For an axisymmetric body ($I_1 = I_2 \neq I_3$):

- **Rotation about the symmetry axis** ($\omega_3$): The body is stable if $I_3$ is either the
  largest or smallest moment. This explains why a spinning top is stable but rotation about the
  intermediate axis is not.

- **Tennis racket theorem (Dzhanibekov effect):** Rotation about the intermediate axis
  ($I_1 < I_2 < I_3$Spinning about the $I_2$ axis) is unstable. Small perturbations cause the body
  to flip periodically.

**Proof of instability for intermediate axis.** Linearise Euler's equations about
$\boldsymbol{\omega} = (0, \Omega, 0)$:

$$I_1\dot{\omega}_1 = (I_2 - I_3)\Omega\,\omega_3$$

$$I_3\dot{\omega}_3 = (I_1 - I_2)\Omega\,\omega_1$$

Combining: $\ddot{\omega}_1 = \frac{(I_2 - I_3)(I_1 - I_2)}{I_1 I_3}\Omega^2\,\omega_1$. Since
$I_1 < I_2 < I_3$Both factors in the numerator are negative, giving a positive coefficient:
$\omega_1$ grows exponentially. The motion is unstable. $\blacksquare$

### 9.3 The Symmetric Top with One Point Fixed

A symmetric top ($I_1 = I_2$) with one point fixed, under gravity, is described by three Euler
angles $(\phi, \theta, \psi)$.

The Lagrangian:

$$L = \frac{1}{2}I_1(\dot{\theta}^2 + \dot{\phi}^2\sin^2\theta) + \frac{1}{2}I_3(\dot{\psi} + \dot{\phi}\cos\theta)^2 - Mgd\cos\theta$$

**Conserved quantities:** $p_\phi$ (angular momentum about the vertical) and $p_\psi$ (angular
momentum about the symmetry axis) are cyclic.

The effective potential for the $\theta$ motion:

$$V_{\text{eff}(\theta) = \frac{(p_\phi - p_\psi\cos\theta)^2}{2I_1\sin^2\theta} + \frac{p_\psi^2}{2I_3} + Mgd\cos\theta}$$

**Nutation:** The top nutates (oscillates in $\theta$) while precessing in $\phi$ and spinning in
$\psi$. The type of nutation (looping, cusped, or smooth) depends on the initial conditions.

**Fast top** ($p_\psi \gg Mgd$): The precession rate is:

$$\dot{\phi} \approx \frac{Mgd}{p_\psi} = \frac{Mgd}{I_3\omega_3}$$

This is independent of $\theta$ to leading order (steady precession).

<details>
<summary>Worked Example 9.1: Precession of a Gyroscope</summary>

A gyroscope has $I_3 = 5 \times 10^{-4}$ kg$\cdot$M$^2$Mass $M = 0.5$ kg, distance from pivot to
centre of mass $d = 0.05$ m, and spins at $\omega_3 = 300$ rad/s.

The precession rate:

$$\dot{\phi} = \frac{Mgd}{I_3\omega_3} = \frac{0.5 \times 9.81 \times 0.05}{5 \times 10^{-4} \times 300} = \frac{0.245}{0.15} = 1.63\ \text{rad}/s \approx 15.6\ \text{rpm}$$

The precession period: $T = 2\pi/\dot{\phi} = 3.85$ s.

If the spin is reduced to $\omega_3 = 30$ rad/s (10 times slower), the precession rate increases by
a factor of 10 to 16.3 rad/s. At some critical spin rate, the gyroscope can no longer maintain
steady precession and topples.

</details>

