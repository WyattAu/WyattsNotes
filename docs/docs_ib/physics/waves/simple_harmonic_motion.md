---
title: Simple Harmonic Motion
tags:
- physics
slug: simple-harmonic-motion
description: Comprehensive guide to simple harmonic motion for the International Baccalaureate.
---


## Specification

:::info

**Standard level and higher level (3 hours):** Students should understand:

- Conditions that lead to simple harmonic motion
- The defining equation of simple harmonic motion: $a = -\omega^2 x$
- A particle undergoing SHM can be described using time period $T$, frequency $f$, angular frequency
  $\omega$, amplitude, equilibrium position, and displacement
- The time period in terms of frequency and angular frequency:
  $T = \frac{1}{f} = \frac{2\pi}{\omega}$
- The time period of a mass-spring system: $T = 2\pi \sqrt{\frac{m}{k}}$
- The time period of a simple pendulum: $T = 2\pi \sqrt{\frac{L}{g}}$
- A qualitative approach to energy changes during one cycle of an oscillation

**Additional higher level (4 hours):** Students should understand:

- That a particle undergoing SHM can be described using phase angle
- That problems can be solved using the equations for SHM:

$$
x = x_0 \sin(\omega t + \Phi),\quad v = \omega x_0 \cos(\omega t + \Phi),\quad v = \pm\omega\sqrt&lbrace;x_0^2 - x^2&rbrace;,\quad E_T = \tfrac&lbrace;1&rbrace;&lbrace;2&rbrace;m\omega^2 x_0^2,\quad E_P = \tfrac&lbrace;1&rbrace;&lbrace;2&rbrace;m\omega^2 x^2
$$

:::

Throughout this file, amplitude is $A$ and initial phase is $\phi_0$, corresponding to the data
booklet notation $x_0$ and $\Phi$.

## Fundamental Principles

Simple Harmonic Motion (SHM) is a periodic oscillation about a stable equilibrium position,
characterized by a restoring force $F$ directly proportional to the displacement $x$ from
equilibrium and directed oppositely to the displacement. This yields Newton's second law:

$$
\begin&lbrace;aligned&rbrace;
  F \propto -x \\
  F_&lbrace;\mathrm&lbrace;net&rbrace;&rbrace; = -kx = m \frac&lbrace;d^2x&rbrace;&lbrace;dt^2&rbrace;,
\end&lbrace;aligned&rbrace;
$$

where $k > 0$ is the stiffness constant (e.g., spring constant). Rearranged as the equation of
motion:

$$
\frac&lbrace;d^2x&rbrace;&lbrace;dt^2&rbrace; + \omega^2 x = 0, \quad \omega = \sqrt&lbrace;\frac&lbrace;k&rbrace;&lbrace;m&rbrace;&rbrace;. \tag&lbrace;1&rbrace;
$$

Here, $\omega$ is the angular frequency (rad s$^{-1}$), governing the system's temporal evolution.

Key Characteristics:

- Equilibrium Position: Point where net force vanishes ($F_{\mathrm{net}} = 0$).
- Amplitude ($A$): Maximum displacement from equilibrium ($|x|_{\mathrm{max}} = A$).
- Isochrony: Period $T$ is amplitude-independent for ideal SHM.

Conditions for Ideal SHM:

1. Restoring force obeys Hooke's law: $F = -kx$.
2. Zero dissipative forces (undamped motion).
3. Constant total mechanical energy.

## Kinematic Relations

The general solution to Equation (1) is:

$$
x(t) = A \cos(\omega t + \phi_0), \tag&lbrace;2&rbrace;
$$

where $\phi_0$ is the initial phase angle. Velocity $v$ and acceleration $a$ follow by
differentiation:

$$
v(t) = \frac&lbrace;dx&rbrace;&lbrace;dt&rbrace; = -\omega A \sin(\omega t + \phi_0), \tag&lbrace;3&rbrace;
$$

$$
a(t) = \frac&lbrace;d^2x&rbrace;&lbrace;dt^2&rbrace; = -\omega^2 A \cos(\omega t + \phi_0) = -\omega^2 x. \tag&lbrace;4&rbrace;
$$

Phase Relationships:

- Displacement-Velocity: $v = \pm \omega \sqrt{A^2 - x^2}$ (from energy conservation).
- Displacement-Acceleration: $a = -\omega^2 x$ (definitive property of SHM).
- Extrema:
  - $|v|_{\mathrm{max}} = \omega A$ at $x = 0$ (equilibrium).
  - $|a|_{\mathrm{max}} = \omega^2 A$ at $x = \pm A$ (max displacement).

Graphical Interpretation:

- $x(t)$, $v(t)$, and $a(t)$ are phase-shifted sinusoids.
- $a(t)$ is inverted relative to $x(t)$ due to $a \propto -x$.

## Energy Conservation

Total mechanical energy $E_{\mathrm{total}}$ is conserved:

$$
E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = K + U = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2 + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2. \tag&lbrace;5&rbrace;
$$

Substituting Equations (2)--(4) yields: Kinetic Energy ($K$):

$$
K = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m \omega^2 A^2 \sin^2(\omega t + \phi_0) = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m\omega^2 (A^2 - x^2). \tag&lbrace;6&rbrace;
$$

Potential Energy ($U$):

$$
U = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m\omega^2 x^2. \tag&lbrace;7&rbrace;
$$

Total Energy:

$$
E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kA^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m\omega^2 A^2. \tag&lbrace;8&rbrace;
$$

Energy Oscillations:

- $K_{\mathrm{max}} = E_{\mathrm{total}}$ at $x = 0$.
- $U_{\mathrm{max}} = E_{\mathrm{total}}$ at $x = \pm A$.

## Example Systems

### Simple Pendulum

Description: Point mass $m$ suspended on a massless string of length $L$ in gravitational field $g$.
Equation of Motion: For small $\theta$ ($\sin\theta \approx \theta$):

$$
\frac&lbrace;d^2\theta&rbrace;&lbrace;dt^2&rbrace; + \frac&lbrace;g&rbrace;&lbrace;L&rbrace;\theta = 0. \tag&lbrace;9&rbrace;
$$

This matches Equation (1) with $\omega = \sqrt{g/L}$. Period:

$$
T = \frac&lbrace;2\pi&rbrace;&lbrace;\omega&rbrace; = 2\pi \sqrt&lbrace;\frac&lbrace;L&rbrace;&lbrace;g&rbrace;&rbrace;. \tag&lbrace;10&rbrace;
$$

Properties:

- $T \propto \sqrt{L}$; $T \propto 1/\sqrt{g}$; independent of $m$ and $A$ (for $\theta \ll 1$ rad).

### Mass-Spring System

<PhetSimulation simulationId="masses-and-springs" title="Masses and Springs" />

Explore how mass, spring stiffness, and damping affect oscillations. Hang different masses from
springs and observe how the period and amplitude change in real time.

Description: Mass $m$ attached to a spring of stiffness $k$. Equation of Motion: From Hooke's law:

$$
m\frac&lbrace;d^2x&rbrace;&lbrace;dt^2&rbrace; = -kx \implies \frac&lbrace;d^2x&rbrace;&lbrace;dt^2&rbrace; + \frac&lbrace;k&rbrace;&lbrace;m&rbrace;x = 0. \tag&lbrace;11&rbrace;
$$

Period:

$$
T = 2\pi \sqrt&lbrace;\frac&lbrace;m&rbrace;&lbrace;k&rbrace;&rbrace;. \tag&lbrace;12&rbrace;
$$

Properties:

- $T \propto \sqrt{m}$; $T \propto 1/\sqrt{k}$; independent of $A$.

## Angular Frequency and Phase

Angular Frequency ($\omega$):

$$
\omega = 2\pi f = \frac&lbrace;2\pi&rbrace;&lbrace;T&rbrace;, \tag&lbrace;13&rbrace;
$$

where $f$ is linear frequency (Hz). Converts temporal periodicity to angular speed.

Phase Angle ($\phi$): Generalizes Equation (2):

$$
x(t) = A \cos(\omega t + \phi_0).
$$

- Phase Difference ($\Delta\phi$): Temporal shift between two SHMs:
  $$
  \Delta\phi = \omega \Delta t = \frac&lbrace;2\pi \Delta t&rbrace;&lbrace;T&rbrace;. \tag&lbrace;14&rbrace;
  $$
- Measured in radians (1 rad $\approx$ 57.3°).

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
| Total Energy      | $E_{\mathrm{total}} = \frac{1}{2}m\omega^2 A^2$                  |

## Derivation of the SHM Solution

### Verification by Direct Substitution

**Claim:** $x(t) = A\cos(\omega t + \phi_0)$ satisfies $\frac{d^2x}{dt^2} + \omega^2 x = 0$ for any
constants $A$, $\omega$, and $\phi_0$.

**Proof.** First derivative:

$$
\frac&lbrace;dx&rbrace;&lbrace;dt&rbrace; = -\omega A \sin(\omega t + \phi_0)
$$

Second derivative:

$$
\frac&lbrace;d^2x&rbrace;&lbrace;dt^2&rbrace; = -\omega^2 A \cos(\omega t + \phi_0) = -\omega^2 x
$$

Substituting into the equation of motion:

$$
\frac&lbrace;d^2x&rbrace;&lbrace;dt^2&rbrace; + \omega^2 x = -\omega^2 x + \omega^2 x = 0 \quad \blacksquare
$$

### Sine Form Equivalence

**Claim:** $x(t) = A\sin(\omega t + \phi_0)$ is equally valid as a general solution.

Using the identity $\sin\theta = \cos\!\left(\theta - \frac{\pi}{2}\right)$:

$$
A\sin(\omega t + \phi_0) = A\cos\!\left(\omega t + \phi_0 - \frac&lbrace;\pi&rbrace;&lbrace;2&rbrace;\right)
$$

This is the cosine form with a shifted phase. Since $\phi_0$ is already an arbitrary constant,
absorbing a constant offset of $-\pi/2$ does not reduce generality. Both forms span the full
two-parameter solution space $(A, \phi_0)$.

Direct substitution confirms:

$$
\frac&lbrace;d^2&rbrace;&lbrace;dt^2&rbrace;\!\left[A\sin(\omega t + \phi_0)\right] = -\omega^2 A\sin(\omega t + \phi_0) = -\omega^2 x \quad \blacksquare
$$

### Choosing Sine vs Cosine

The two forms are physically equivalent; the choice is a matter of convenience based on initial
conditions.

| Initial condition                         | Preferred form                   | Rationale                      |
| ----------------------------------------- | -------------------------------- | ------------------------------ |
| Released from $x = A$ with $v = 0$        | $x = A\cos(\omega t)$            | $\cos(0) = 1$, $\sin(0) = 0$   |
| Released from $x = 0$ with $v = v_{\max}$ | $x = A\sin(\omega t)$            | $\sin(0) = 0$, $\cos(0) = 1$   |
| General initial state                     | Either with appropriate $\phi_0$ | Phase angle absorbs the offset |

The IB data booklet uses the sine convention ($x = x_0 \sin(\omega t + \Phi)$). Both conventions are
correct. Pick one and remain consistent within a single problem. Switching conventions mid-problem
introduces a systematic phase error of $\pm\pi/2$.

---

## Worked Examples — SL Level

### Example 1: Period and Frequency of a Mass-Spring System

A spring of stiffness $k = 200\mathrm{ N/m}$ has a $0.50\mathrm{ kg}$ mass attached. Find the period
$T$ and frequency $f$.

$$
T = 2\pi \sqrt&lbrace;\frac&lbrace;m&rbrace;&lbrace;k&rbrace;&rbrace; = 2\pi \sqrt&lbrace;\frac&lbrace;0.50&rbrace;&lbrace;200&rbrace;&rbrace; = 2\pi(0.0500) = 0.314\mathrm&lbrace; s&rbrace;
$$

$$
f = \frac&lbrace;1&rbrace;&lbrace;T&rbrace; = \frac&lbrace;1&rbrace;&lbrace;0.314&rbrace; = 3.18\mathrm&lbrace; Hz&rbrace;
$$

### Example 2: Displacement and Velocity at a Given Time

A mass-spring system has amplitude $A = 0.10\mathrm{ m}$ and period $T = 0.50\mathrm{ s}$. The mass
is released from maximum displacement at $t = 0$. Find $x$ and $v$ at $t = 0.125\mathrm{ s}$.

Angular frequency:

$$
\omega = \frac&lbrace;2\pi&rbrace;&lbrace;T&rbrace; = \frac&lbrace;2\pi&rbrace;&lbrace;0.50&rbrace; = 4\pi\mathrm&lbrace; rad/s&rbrace;
$$

With $x(0) = A$, use the cosine form: $x = A\cos(\omega t)$.

$$
x(0.125) = 0.10\cos(4\pi \times 0.125) = 0.10\cos\!\left(\frac&lbrace;\pi&rbrace;&lbrace;2&rbrace;\right) = 0\mathrm&lbrace; m&rbrace;
$$

$$
v(0.125) = -\omega A \sin(\omega t) = -4\pi(0.10)\sin\!\left(\frac&lbrace;\pi&rbrace;&lbrace;2&rbrace;\right) = -1.26\mathrm&lbrace; m/s&rbrace;
$$

The mass passes through equilibrium at $t = T/4 = 0.125\mathrm{ s}$, moving in the negative
direction with speed $|v| = \omega A = 1.26\mathrm{ m/s}$.

### Example 3: Amplitude from Energy

A $0.30\mathrm{ kg}$ mass oscillates on a spring with $k = 120\mathrm{ N/m}$. At equilibrium, the
speed is $1.6\mathrm{ m/s}$. Determine the amplitude.

At $x = 0$, all energy is kinetic:

$$
E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv_&lbrace;\max&rbrace;^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(0.30)(1.6)^2 = 0.384\mathrm&lbrace; J&rbrace;
$$

At $x = A$, all energy is potential:

$$
E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kA^2 \implies A = \sqrt&lbrace;\frac&lbrace;2E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace;&rbrace;&lbrace;k&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;2(0.384)&rbrace;&lbrace;120&rbrace;&rbrace; = \sqrt&lbrace;0.00640&rbrace; = 0.0800\mathrm&lbrace; m&rbrace;
$$

### Example 4: Simple Pendulum Period

A simple pendulum on Earth has a period of $2.00\mathrm{ s}$. Determine its length. Use
$g = 9.81\mathrm{ m/s}^2$.

$$
L = \frac&lbrace;gT^2&rbrace;&lbrace;4\pi^2&rbrace; = \frac&lbrace;(9.81)(2.00)^2&rbrace;&lbrace;4\pi^2&rbrace; = \frac&lbrace;39.2&rbrace;&lbrace;39.5&rbrace; = 0.993\mathrm&lbrace; m&rbrace;
$$

This is close to $1.00\mathrm{ m}$, which is why a "seconds pendulum" ($T = 2\mathrm{ s}$) is
approximately $1\mathrm{ m}$ long on Earth.

### Example 5: Phase Difference Between Two Oscillators

Two identical mass-spring systems oscillate with the same amplitude and frequency. System A is
released from maximum displacement at $t = 0$. System B is released from equilibrium, moving in the
positive direction, at $t = 0$. Find the phase difference $\Delta\phi$.

System A (cosine form): $x_A = A\cos(\omega t)$

System B (starts at $x = 0$ with positive velocity, sine form):
$x_B = A\sin(\omega t) = A\cos\!\left(\omega t - \frac{\pi}{2}\right)$

Comparing phases: $\phi_A = 0$, $\phi_B = -\pi/2$.

$$
|\Delta\phi| = \left|0 - \left(-\frac&lbrace;\pi&rbrace;&lbrace;2&rbrace;\right)\right| = \frac&lbrace;\pi&rbrace;&lbrace;2&rbrace;\mathrm&lbrace; rad&rbrace; = 90°
$$

System A leads System B by $90^\circ$.

### Example 6: Energy Partition at a Given Displacement

A mass-spring system has $A = 0.15\mathrm{ m}$, $k = 80.0\mathrm{ N/m}$, and $m = 0.20\mathrm{ kg}$.
Find the kinetic energy, potential energy, and speed at $x = 0.090\mathrm{ m}$.

$$
E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kA^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(80.0)(0.15)^2 = 0.900\mathrm&lbrace; J&rbrace;
$$

$$
U = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(80.0)(0.090)^2 = 0.324\mathrm&lbrace; J&rbrace;
$$

$$
K = E_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; - U = 0.900 - 0.324 = 0.576\mathrm&lbrace; J&rbrace;
$$

$$
v = \sqrt&lbrace;\frac&lbrace;2K&rbrace;&lbrace;m&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;2(0.576)&rbrace;&lbrace;0.20&rbrace;&rbrace; = \sqrt&lbrace;5.76&rbrace; = 2.40\mathrm&lbrace; m/s&rbrace;
$$

---

## HL Extension: Phase and Advanced Problems

### Determining Phase Angle from Initial Conditions

Given initial displacement $x(0) = x_0$ and initial velocity $v(0) = v_0$, we determine both the
amplitude $A$ and the phase angle $\phi_0$.

Using the cosine form $x = A\cos(\omega t + \phi_0)$:

$$
x(0) = A\cos\phi_0 = x_0 \tag&lbrace;i&rbrace;
$$

$$
v(0) = -\omega A\sin\phi_0 = v_0 \tag&lbrace;ii&rbrace;
$$

Squaring and adding (i) and (ii):

$$
A^2\cos^2\phi_0 + A^2\sin^2\phi_0 = x_0^2 + \frac&lbrace;v_0^2&rbrace;&lbrace;\omega^2&rbrace;
$$

$$
A = \sqrt&lbrace;x_0^2 + \frac&lbrace;v_0^2&rbrace;&lbrace;\omega^2&rbrace;&rbrace; \tag&lbrace;15&rbrace;
$$

Dividing (ii) by (i):

$$
\tan\phi_0 = -\frac&lbrace;v_0&rbrace;&lbrace;\omega x_0&rbrace; \tag&lbrace;16&rbrace;
$$

:::warning

Equation (16) alone is ambiguous: $\arctan$ returns values in $(-\pi/2,\, \pi/2)$, but the actual
phase could be in any quadrant. Always verify the signs of $\cos\phi_0 = x_0/A$ and
$\sin\phi_0 = -v_0/(\omega A)$ to resolve the correct quadrant.

:::

### HL Example 1: Phase Angle Determination

A $0.40\mathrm{ kg}$ mass on a spring with $k = 160\mathrm{ N/m}$ has initial conditions
$x(0) = 0.060\mathrm{ m}$ and $v(0) = 1.20\mathrm{ m/s}$ (positive). Find the amplitude and phase
angle.

$$
\omega = \sqrt&lbrace;\frac&lbrace;k&rbrace;&lbrace;m&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;160&rbrace;&lbrace;0.40&rbrace;&rbrace; = 20.0\mathrm&lbrace; rad/s&rbrace;
$$

$$
A = \sqrt&lbrace;(0.060)^2 + \frac&lbrace;(1.20)^2&rbrace;&lbrace;(20.0)^2&rbrace;&rbrace; = \sqrt&lbrace;0.00360 + 0.00360&rbrace; = \sqrt&lbrace;0.00720&rbrace; = 0.0849\mathrm&lbrace; m&rbrace;
$$

$$
\tan\phi_0 = -\frac&lbrace;v_0&rbrace;&lbrace;\omega x_0&rbrace; = -\frac&lbrace;1.20&rbrace;&lbrace;(20.0)(0.060)&rbrace; = -1.00
$$

So $\phi_0 = -\pi/4$ or $\phi_0 = 3\pi/4$. Check quadrant: $\cos\phi_0 = x_0/A = 0.707 > 0$ (first
or fourth quadrant). $\sin\phi_0 = -v_0/(\omega A) = -0.707 < 0$ (third or fourth quadrant). Both
conditions point to the fourth quadrant: $\phi_0 = -\pi/4 = -0.785\mathrm{ rad}$.

### HL Example 2: Velocity at Given Displacement

A pendulum oscillates with amplitude $A = 0.120\mathrm{ m}$ and angular frequency
$\omega = 3.50\mathrm{ rad/s}$. Find the speed at $x = 0.050\mathrm{ m}$.

$$
v = \pm\omega\sqrt&lbrace;A^2 - x^2&rbrace; = \pm 3.50\sqrt&lbrace;(0.120)^2 - (0.050)^2&rbrace; = \pm 3.50\sqrt&lbrace;0.0119&rbrace; = \pm 0.382\mathrm&lbrace; m/s&rbrace;
$$

The $\pm$ reflects that the mass passes through $x = 0.050\mathrm{ m}$ twice per cycle: once toward
equilibrium and once away.

### HL Example 3: Energy at Arbitrary Displacement

A $0.50\mathrm{ kg}$ mass on a spring ($k = 200\mathrm{ N/m}$) oscillates with amplitude
$0.10\mathrm{ m}$. Find the kinetic energy, potential energy, and speed at $x = 0.060\mathrm{ m}$.

$$
E_T = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m\omega^2 A^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(200)(0.10)^2 = 1.00\mathrm&lbrace; J&rbrace;
$$

$$
E_P = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m\omega^2 x^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(200)(0.060)^2 = 0.360\mathrm&lbrace; J&rbrace;
$$

$$
K = E_T - E_P = 1.00 - 0.360 = 0.640\mathrm&lbrace; J&rbrace;
$$

$$
v = \sqrt&lbrace;\frac&lbrace;2K&rbrace;&lbrace;m&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;2(0.640)&rbrace;&lbrace;0.50&rbrace;&rbrace; = 1.60\mathrm&lbrace; m/s&rbrace;
$$

Verification: $\omega = \sqrt{k/m} = 20.0\mathrm{ rad/s}$,
$v = 20.0\sqrt{(0.10)^2 - (0.060)^2} = 1.60\mathrm{ m/s}$ $\checkmark$

### HL Example 4: Period, Amplitude, and Total Energy

A $0.50\mathrm{ kg}$ object undergoes SHM with total energy $2.0\mathrm{ J}$ and amplitude
$0.20\mathrm{ m}$. Determine $\omega$, $k$, and the speed at $x = 0.10\mathrm{ m}$.

$$
E_T = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m\omega^2 A^2 \implies \omega^2 = \frac&lbrace;2E_T&rbrace;&lbrace;mA^2&rbrace; = \frac&lbrace;2(2.0)&rbrace;&lbrace;(0.50)(0.20)^2&rbrace; = 200
$$

$$
\omega = \sqrt&lbrace;200&rbrace; = 14.1\mathrm&lbrace; rad/s&rbrace;, \quad k = m\omega^2 = (0.50)(200) = 100\mathrm&lbrace; N/m&rbrace;
$$

$$
v = \omega\sqrt&lbrace;A^2 - x^2&rbrace; = 14.1\sqrt&lbrace;(0.20)^2 - (0.10)^2&rbrace; = 14.1(0.173) = 2.44\mathrm&lbrace; m/s&rbrace;
$$

---

## Damping — Qualitative Treatment

Real oscillators lose energy to their surroundings. The rate of energy loss determines the damping
regime. IB students may be asked to sketch displacement-time graphs for each regime.

### Light Damping (Underdamping)

The amplitude decays exponentially: $A(t) = A_0 e^{-bt}$, where $b$ is the damping coefficient.

- The system oscillates with gradually decreasing amplitude.
- The period is slightly **longer** than the undamped period: $T_{\mathrm{damped}} \gt T_0$.
- Energy is dissipated each cycle, primarily as heat via friction or air resistance.
- The quality factor $Q = 2\pi \times \frac{\mathrm{energy stored}}{\mathrm{energy lost per cycle}}$
  quantifies how underdamped the system is. High $Q$ means low energy loss per cycle.

### Critical Damping

The damping force is just sufficient to prevent oscillation. The system returns to equilibrium in
the **shortest possible time** without overshooting.

- Displacement decays as $x(t) = (c_1 + c_2 t)e^{-\alpha t}$ for constants $c_1$, $c_2$, $\alpha$.
- No oscillation occurs.
- Applications: car shock absorbers, door closers, instrument mechanisms.

### Heavy Damping (Overdamping)

The damping force exceeds the critical value. The system returns to equilibrium **more slowly** than
critical damping.

- No oscillation.
- The return to equilibrium is sluggish.
- Example: a pendulum immersed in viscous oil.

### Comparison of Damping Regimes

| Regime   | Oscillation        | Return speed | Period vs undamped |
| -------- | ------------------ | ------------ | ------------------ |
| Light    | Yes (decaying $A$) | Moderate     | Slightly longer    |
| Critical | No                 | Fastest      | N/A                |
| Heavy    | No                 | Slowest      | N/A                |

### Energy Dissipation

In all damped systems, mechanical energy converts to thermal energy through resistive forces. The
rate of energy loss is proportional to $v^2$. For light damping, $E(t) \approx E_0 e^{-2bt}$; since
$E \propto A^2$, the amplitude decays as $A(t) \propto e^{-bt}$.

### Phase Space (Qualitative)

An undamped SHM traces a closed **ellipse** in the phase plane ($x$ vs $v$). Under light damping the
ellipse spirals inward. Under critical or heavy damping the trajectory converges directly without
loops.

---

## Common Pitfalls

### 1. Confusing $\omega$ and $f$

$\omega = 2\pi f$. The angular frequency $\omega$ (rad/s) is $2\pi$ times the linear frequency $f$
(Hz). When a question asks for "frequency," it means $f$, not $\omega$. When computing
$v_{\max} = \omega A$, you need $\omega$.

### 2. Pendulum Period is Independent of Mass

$T = 2\pi\sqrt{L/g}$ contains no $m$. A heavier bob does not swing faster or slower (for small
angles). Contrast this with the mass-spring system, where $T \propto \sqrt{m}$. The physical reason
is that gravitational force ($mg$) and inertia ($m$) both scale with mass, cancelling out.

### 3. Sign Errors in the Restoring Force

The defining characteristic of SHM is $F = -kx$ or $a = -\omega^2 x$. The negative sign guarantees
the force points toward equilibrium. Dropping it gives exponential growth, not oscillation. Always
verify the restoring force direction opposes displacement.

### 4. Mixing Up Phase Angle Conventions

The cosine form $x = A\cos(\omega t + \phi_0)$ and sine form $x = A\sin(\omega t + \Phi)$ yield
different phase constants for the same physical state. If $x(0) = 0$ using the cosine form, then
$\phi_0 = \pm\pi/2$, not $0$.

### 5. Small-Angle Approximation Validity

$T = 2\pi\sqrt{L/g}$ relies on $\sin\theta \approx \theta$, accurate to within 1% for
$\theta \lt 10^\circ$ and 0.1% for $\theta \lt 5^\circ$. Beyond approximately $15^\circ$, the true
period exceeds the prediction and the motion is no longer strictly SHM.

### 6. Misidentifying Equilibrium Position

The equilibrium position is where the **net force** is zero, not where the spring is at its natural
length. For a vertical spring-mass system, equilibrium is where the spring is stretched by $mg/k$
below its natural length. SHM occurs about this equilibrium, not the natural length.

---

## Problem Set

### Problem 1 (SL)

A $0.25\mathrm{ kg}$ mass is attached to a spring with $k = 400\mathrm{ N/m}$. Calculate: (a) the
period of oscillation, (b) the frequency, (c) the angular frequency.

<details>
<summary>Solution</summary>

(a)

$$
T = 2\pi\sqrt&lbrace;\frac&lbrace;m&rbrace;&lbrace;k&rbrace;&rbrace; = 2\pi\sqrt&lbrace;\frac&lbrace;0.25&rbrace;&lbrace;400&rbrace;&rbrace; = 2\pi(0.0250) = 0.157\mathrm&lbrace; s&rbrace;
$$

(b)

$$
T_&lbrace;\mathrm&lbrace;Earth&rbrace;&rbrace; = 2\pi\sqrt&lbrace;\frac&lbrace;1.50&rbrace;&lbrace;9.81&rbrace;&rbrace; = 2.46\mathrm&lbrace; s&rbrace;
$$

On Mars:

$$
T_&lbrace;\mathrm&lbrace;Mars&rbrace;&rbrace; = 2\pi\sqrt&lbrace;\frac&lbrace;1.50&rbrace;&lbrace;3.71&rbrace;&rbrace; = 4.00\mathrm&lbrace; s&rbrace;
$$

The period is longer on Mars due to the weaker gravitational field.

</details>

### Problem 3 (SL)

A mass-spring system has amplitude $0.080\mathrm{ m}$ and spring constant $k = 500\mathrm{ N/m}$
with mass $0.50\mathrm{ kg}$. Find the kinetic energy and potential energy when the displacement is
$0.040\mathrm{ m}$.

<details>
<summary>Solution</summary>

$$
E_T = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kA^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(500)(0.080)^2 = 1.60\mathrm&lbrace; J&rbrace;
$$

$$
U = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(500)(0.040)^2 = 0.400\mathrm&lbrace; J&rbrace;
$$

$$
K = E_T - U = 1.60 - 0.400 = 1.20\mathrm&lbrace; J&rbrace;
$$

At half the amplitude, the split is 75% kinetic, 25% potential (energy scales as $x^2$).

</details>

### Problem 4 (SL)

Two identical pendulums are released simultaneously. Pendulum P is released from an angle of
$5^\circ$ and pendulum Q from an angle of $10^\circ$. Both are within the small-angle regime.
Compare their periods.

<details>
<summary>Solution</summary>

For ideal SHM, the period is independent of amplitude:

$$
T = 2\pi\sqrt&lbrace;\frac&lbrace;L&rbrace;&lbrace;g&rbrace;&rbrace;
$$

Both pendulums have the same length and gravitational field, so $T_P = T_Q$. This is the property of
**isochrony**. In practice, Q's period is very slightly longer because the small-angle approximation
is less accurate at $10^\circ$, but this difference is negligible at the IB level.

</details>

### Problem 5 (SL)

A $2.0\mathrm{ kg}$ object on a spring oscillates with amplitude $0.30\mathrm{ m}$. At
$x = 0.20\mathrm{ m}$, the speed is $2.0\mathrm{ m/s}$. Find the total energy and the spring
constant.

<details>
<summary>Solution</summary>

From $v^2 = \omega^2(A^2 - x^2) = \frac{k}{m}(A^2 - x^2)$:

$$
(2.0)^2 = \frac&lbrace;k&rbrace;&lbrace;2.0&rbrace;\!\left((0.30)^2 - (0.20)^2\right) = \frac&lbrace;k&rbrace;&lbrace;2.0&rbrace;(0.050)
$$

$$
4.0 = 0.025k \implies k = 160\mathrm&lbrace; N/m&rbrace;
$$

Total energy:

$$
E_T = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kA^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(160)(0.30)^2 = 7.2\mathrm&lbrace; J&rbrace;
$$

</details>

### Problem 6 (HL)

A particle undergoes SHM with $\omega = 8.0\mathrm{ rad/s}$. At $t = 0$, $x = 0.030\mathrm{ m}$ and
$v = -0.20\mathrm{ m/s}$. Determine the amplitude, the phase angle (cosine form), and the
displacement at $t = 0.50\mathrm{ s}$.

<details>
<summary>Solution</summary>

Amplitude:

$$
A = \sqrt&lbrace;x_0^2 + \frac&lbrace;v_0^2&rbrace;&lbrace;\omega^2&rbrace;&rbrace; = \sqrt&lbrace;(0.030)^2 + \frac&lbrace;(0.20)^2&rbrace;&lbrace;(8.0)^2&rbrace;&rbrace; = \sqrt&lbrace;0.000900 + 0.000625&rbrace; = \sqrt&lbrace;0.001525&rbrace; = 0.0391\mathrm&lbrace; m&rbrace;
$$

Phase angle:

$$
\tan\phi_0 = -\frac&lbrace;v_0&rbrace;&lbrace;\omega x_0&rbrace; = -\frac&lbrace;-0.20&rbrace;&lbrace;(8.0)(0.030)&rbrace; = 0.833
$$

$\phi_0 = \arctan(0.833) = 0.694\mathrm{ rad}$. Quadrant check: $\cos\phi_0 = x_0/A = 0.767 > 0$ and
$\sin\phi_0 = -v_0/(\omega A) = 0.639 > 0$. Both positive, first quadrant confirmed.

Displacement at $t = 0.50\mathrm{ s}$:

$$
x = 0.0391\cos(8.0 \times 0.50 + 0.694) = 0.0391\cos(4.694) = 0.0391(-0.0296) = -0.00116\mathrm&lbrace; m&rbrace;
$$

</details>

### Problem 7 (HL)

A $0.60\mathrm{ kg}$ mass on a spring has total energy $0.48\mathrm{ J}$ and amplitude
$0.040\mathrm{ m}$. (a) Find the spring constant. (b) Find the maximum speed. (c) Find the speed
when $x = 0.020\mathrm{ m}$. (d) At what displacement is $K = U$?

<details>
<summary>Solution</summary>

(a)

$$
k = \frac&lbrace;2E_T&rbrace;&lbrace;A^2&rbrace; = \frac&lbrace;2(0.48)&rbrace;&lbrace;(0.040)^2&rbrace; = 600\mathrm&lbrace; N/m&rbrace;
$$

(b)

$$
v_&lbrace;\max&rbrace; = \omega A = A\sqrt&lbrace;\frac&lbrace;k&rbrace;&lbrace;m&rbrace;&rbrace; = 0.040\sqrt&lbrace;\frac&lbrace;600&rbrace;&lbrace;0.60&rbrace;&rbrace; = 0.040(31.6) = 1.26\mathrm&lbrace; m/s&rbrace;
$$

(c)

$$
v = \omega\sqrt&lbrace;A^2 - x^2&rbrace; = 31.6\sqrt&lbrace;(0.040)^2 - (0.020)^2&rbrace; = 31.6\sqrt&lbrace;0.00120&rbrace; = 1.10\mathrm&lbrace; m/s&rbrace;
$$

(d) $K = U \implies E_T = 2U$:

$$
\frac&lbrace;1&rbrace;&lbrace;2&rbrace;kA^2 = 2 \times \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2 \implies x = \frac&lbrace;A&rbrace;&lbrace;\sqrt&lbrace;2&rbrace;&rbrace; = \frac&lbrace;0.040&rbrace;&lbrace;\sqrt&lbrace;2&rbrace;&rbrace; = 0.0283\mathrm&lbrace; m&rbrace;
$$

This holds for any SHM regardless of system parameters.

</details>

### Problem 8 (HL)

A simple pendulum of length $2.00\mathrm{ m}$ is released from a small angle on Earth. At the lowest
point, the bob has speed $3.13\mathrm{ m/s}$. Determine: (a) the amplitude (arc length), (b) the
maximum acceleration, (c) the speed when the bob is $0.50\mathrm{ m}$ below the release point.

<details>
<summary>Solution</summary>

$$
A = \frac&lbrace;v_&lbrace;\max&rbrace;&rbrace;&lbrace;\omega&rbrace; = \frac&lbrace;3.13&rbrace;&lbrace;2.21&rbrace; = 1.42\mathrm&lbrace; m&rbrace;
$$

This corresponds to an angular amplitude of $0.71\mathrm{ rad} \approx 41^\circ$, exceeding the
small-angle regime. The SHM model is approximate here.

(b)

$$
a_&lbrace;\max&rbrace; = \omega^2 A = (4.905)(1.42) = 6.97\mathrm&lbrace; m/s&rbrace;^2
$$

(c) The release point is at $x = A = 1.42\mathrm{ m}$. A point $0.50\mathrm{ m}$ below corresponds
to $x = A - 0.50 = 0.92\mathrm{ m}$.

$$
v = \omega\sqrt&lbrace;A^2 - x^2&rbrace; = 2.21\sqrt&lbrace;(1.42)^2 - (0.92)^2&rbrace; = 2.21\sqrt&lbrace;1.170&rbrace; = 2.21(1.082) = 2.39\mathrm&lbrace; m/s&rbrace;
$$

</details>
