---
title: Simple Harmonic Motion
date: 2025-07-07T00:33:35.322Z
tags:
  - physics
categories:
  - physics
slug: simple-harmonic-motion
---

## Specification

:::info

Standard level and higher level: 3 hours
Students should understand:
-conditions that lead to simple harmonic motion

- the defining equation of simple harmonic motion as given by a = -$\omega^2 x$
- a particle undergoing simple harmonic motion can be described using time period $T$, frequency $f$, angular frequency $\omega$, amplitude, equilibrium position, and displacement
- the time period in terms of frequency of oscillation and angular frequency as given by $T = 1/f$ = $2\pi \omega$
- the time period of a mass-spring system as given by $T = 2\pi \sqrt{\frac mk}$
- the time period of a simple pendulum as given by $T = 2\pi\ sqrt{\frac lg}$
- a qualitative approach to energy changes during one cycle of an oscillation.
  -dditional higher level: 4 hours
  -tudents should understand:
- that a particle undergoing simple harmonic motion can be described using phase angle
- that problems can be solved using the equations for simple harmonic motion as given by
  $x = x_0 \sin (\omega t + \Phi) >v = \omega x_0 cos (\omega t + \Phi ) >v = \pm \omega x_0 2 -x 2 >E_T = \frac{12}{m} \omega 2 x0 2 > E_P = \frac{12}{m} \omega 2 \times 2 .$

:::

## Fundamental Principles

Simple Harmonic Motion (SHM) is a periodic oscillation about a stable equilibrium position, characterized by a restoring force $F$ directly proportional to the displacement $x$ from equilibrium and directed oppositely to the displacement. This yields Newton's second law:

$$
\begin{aligned}
  F \propto x \\
  F_{\text{net}} = -kx = m \frac{d^2x}{dt^2},
\end{aligned}


$$

where $k > 0$ is the stiffness constant (e.g., spring constant). Rearranged as the equation of motion:

$$
\frac{d^2x}{dt^2} + \omega^2 x = 0, \quad \omega = \sqrt{\frac{k}{m}}. \tag{1}
$$

Here, $\omega$ is the angular frequency (rad·s⁻¹), governing the system's temporal evolution.

Key Characteristics:

- Equilibrium Position: Point where net force vanishes ($F_{\text{net}} = 0$).
- Amplitude ($A$): Maximum displacement from equilibrium ($|x|_{\text{max}} = A$).
- Isochrony: Period $T$ is amplitude-independent for ideal SHM.

Conditions for Ideal SHM:

1. Restoring force obeys Hooke’s law: $F = -kx$.
2. Zero dissipative forces (undamped motion).
3. Constant total mechanical energy.

## Kinematic Relations

The general solution to Equation (1) is:

$$
x(t) = A \cos(\omega t + \phi_0), \tag{2}
$$

where $\phi_0$ is the initial phase angle. Velocity $v$ and acceleration $a$ follow by differentiation:

$$
v(t) = \frac{dx}{dt} = -\omega A \sin(\omega t + \phi_0), \tag{3}
$$

$$
a(t) = \frac{d^2x}{dt^2} = -\omega^2 A \cos(\omega t + \phi_0) = -\omega^2 x. \tag{4}
$$

Phase Relationships:

- Displacement-Velocity: $v = \pm \omega \sqrt{A^2 - x^2}$ (from energy conservation).
- Displacement-Acceleration: $a = -\omega^2 x$ (definitive property of SHM).
- Extrema:
  - $|v|_{\text{max}} = \omega A$ at $x = 0$ (equilibrium).
  - $|a|_{\text{max}} = \omega^2 A$ at $x = \pm A$ (max displacement).

Graphical Interpretation:

- $x(t)$, $v(t)$, and $a(t)$ are phase-shifted sinusoids (Figure 1).
- $a(t)$ is inverted relative to $x(t)$ due to $a \propto -x$.

## Energy Conservation

Total mechanical energy $E_{\text{total}}$ is conserved:

$$
E_{\text{total}} = K + U = \frac{1}{2}mv^2 + \frac{1}{2}kx^2. \tag{5}
$$

Substituting Equations (2)–(4) yields:  
Kinetic Energy ($K$):

$$
K = \frac{1}{2}m \omega^2 A^2 \sin^2(\omega t + \phi_0) = \frac{1}{2}m\omega^2 (A^2 - x^2). \tag{6}
$$

Potential Energy ($U$):

$$
U = \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 x^2. \tag{7}
$$

Total Energy:

$$
E_{\text{total}} = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2. \tag{8}
$$

Energy Oscillations:

- $K_{\text{max}} = E_{\text{total}}$ at $x = 0$.
- $U_{\text{max}} = E_{\text{total}}$ at $x = \pm A$.

## Example Systems

### Simple Pendulum

Description: Point mass $m$ suspended on a massless string of length $L$ in gravitational field $g$.  
Equation of Motion:  
For small $\theta$ ($\sin\theta \approx \theta$):

$$
\frac{d^2\theta}{dt^2} + \frac{g}{L}\theta = 0. \tag{9}
$$

This matches Equation (1) with $\omega = \sqrt{g/L}$.  
Period:

$$
T = \frac{2\pi}{\omega} = 2\pi \sqrt{\frac{L}{g}}. \tag{10}
$$

Properties:

- $T \propto \sqrt{L}$; $T \propto 1/\sqrt{g}$; independent of $m$ and $A$ (for $\theta \ll 1$ rad).

### Mass-Spring System

Description: Mass $m$ attached to a spring of stiffness $k$.  
Equation of Motion:  
From Hooke’s law:

$$
m\frac{d^2x}{dt^2} = -kx \implies \frac{d^2x}{dt^2} + \frac{k}{m}x = 0. \tag{11}
$$

Period:

$$
T = 2\pi \sqrt{\frac{m}{k}}. \tag{12}
$$

Properties:

- $T \propto \sqrt{m}$; $T \propto 1/\sqrt{k}$; independent of $A$.

## Angular Frequency and Phase

Angular Frequency ($\omega$):

$$
\omega = 2\pi f = \frac{2\pi}{T}, \tag{13}
$$

where $f$ is linear frequency (Hz). Converts temporal periodicity to angular speed.

Phase Angle ($\phi$):  
Generalizes Equation (2):

$$
x(t) = A \cos(\omega t + \phi_0).
$$

- Phase Difference ($\Delta\phi$): Temporal shift between two SHMs:
  $$
  \Delta\phi = \omega \Delta t = \frac{2\pi \Delta t}{T}. \tag{14}
  $$
- Measured in radians (1 rad ≈ 57.3°).

## Summary of Key Equations

| Quantity          | Expression                                                       |
| ----------------- | ---------------------------------------------------------------- |
| Displacement      | $x = A \cos(\omega t + \phi_0)$                                  |
| Velocity          | $v = -\omega A \sin(\omega t + \phi_0)$                          |
| Acceleration      | $a = -\omega^2 x$                                                |
| Angular Frequency | $\omega = \sqrt{k/m}$ (spring), $\omega = \sqrt{g/L}$ (pendulum) |
| Period            | $T = 2\pi / \omega$                                              |
| Kinetic Energy    | $K = \frac{1}{2}m\omega^2(A^2 - x^2)$                            |
| Potential Energy  | $U = \frac{1}{2}m\omega^2 x^2$                                   |
| Total Energy      | $E_{\text{total}} = \frac{1}{2}m\omega^2 A^2$                    |
