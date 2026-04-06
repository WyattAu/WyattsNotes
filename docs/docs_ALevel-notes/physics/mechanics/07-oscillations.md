---
title: Oscillations
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: oscillations
---

## Oscillations

:::info
Board Coverage
AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2
:::

## 1. Simple Harmonic Motion — Definition

**Definition.** A body undergoes **simple harmonic motion (SHM)** if its acceleration is directly proportional to its displacement from a fixed point and is always directed towards that point:

$$\boxed{a = -\omega^2 x}$$

where $\omega$ is the angular frequency of the oscillation and $x$ is the displacement from the equilibrium position.

The negative sign is crucial: it ensures the acceleration is always directed towards the equilibrium position (a **restoring force**).

## 2. The SHM Equation and Its Solutions

Starting from $a = -\omega^2 x$, and using $a = \frac{d^2x}{dt^2}$:

$$\frac{d^2x}{dt^2} = -\omega^2 x$$

This is a second-order linear ODE with constant coefficients. We propose a solution of the form $x = A\cos(\omega t + \phi)$.

**Verification by double differentiation:**

$$\frac{dx}{dt} = -A\omega\sin(\omega t + \phi)$$

$$\frac{d^2x}{dt^2} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x \quad \checkmark$$

Therefore:

$$\boxed{x(t) = A\cos(\omega t + \phi)}$$

where:

- $A$ is the **amplitude** (maximum displacement)
- $\omega$ is the **angular frequency** (rad s$^{-1}$)
- $\phi$ is the **phase constant** (determined by initial conditions)

An equivalent form is $x = A\sin(\omega t + \phi')$, which differs only by a phase shift of $\pi/2$.

### Derived Quantities

**Velocity:**

$$v = \frac{dx}{dt} = -A\omega\sin(\omega t + \phi)$$

**Maximum velocity:** $v_{\max} = A\omega$ (at $x = 0$, the equilibrium position).

**Acceleration:**

$$a = \frac{d^2x}{dt^2} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x$$

**Maximum acceleration:** $a_{\max} = A\omega^2$ (at $x = \pm A$, the turning points).

### Velocity-Displacement Relation

From $x = A\cos(\omega t + \phi)$ and $v = -A\omega\sin(\omega t + \phi)$:

$$\cos(\omega t + \phi) = \frac{x}{A}, \quad \sin(\omega t + \phi) = \frac{-v}{A\omega}$$

Since $\sin^2 + \cos^2 = 1$:

$$\frac{x^2}{A^2} + \frac{v^2}{A^2\omega^2} = 1$$

$$\boxed{v = \pm\omega\sqrt{A^2 - x^2}}$$

## 3. Energy in SHM

### Kinetic Energy

$$E_k = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2(A^2 - x^2)$$

$$\boxed{E_k = \frac{1}{2}m\omega^2(A^2 - x^2)}$$

**Derivation.** Substituting $v = \omega\sqrt{A^2 - x^2}$ into $E_k = \frac{1}{2}mv^2$. $\square$

### Potential Energy

The potential energy at displacement $x$ is the work done against the restoring force from equilibrium to $x$:

$$E_p = -\int_0^x F\,dx' = -\int_0^x (-m\omega^2 x')\,dx' = m\omega^2\int_0^x x'\,dx'$$

$$\boxed{E_p = \frac{1}{2}m\omega^2 x^2}$$

### Total Energy

$$E_{\text{total}} = E_k + E_p = \frac{1}{2}m\omega^2(A^2 - x^2) + \frac{1}{2}m\omega^2 x^2 = \frac{1}{2}m\omega^2 A^2$$

$$\boxed{E_{\text{total}} = \frac{1}{2}m\omega^2 A^2 = \text{constant}}$$

**Proof that total energy is constant.** The total energy depends only on $m$, $\omega$, and $A$ — none of which change during the motion. Therefore $E_{\text{total}}$ is conserved. $\square$

**Intuition.** Energy oscillates between kinetic and potential forms. At the equilibrium ($x = 0$), all energy is kinetic. At the turning points ($x = \pm A$), all energy is potential. The total is always the same — this is just conservation of energy applied to SHM.

## 4. Mass-Spring System

**Derivation of $\omega = \sqrt{k/m}$.**

By Hooke's law, the restoring force on a mass $m$ attached to a spring of constant $k$ is $F = -kx$.

By Newton's second law: $ma = -kx$, i.e., $a = -\frac{k}{m}x$.

Comparing with $a = -\omega^2 x$:

$$\boxed{\omega = \sqrt{\frac{k}{m}}, \qquad T = 2\pi\sqrt{\frac{m}{k}}}$$

**Intuition.** A stiffer spring (larger $k$) gives faster oscillations. A heavier mass (larger $m$) gives slower oscillations. The period is independent of amplitude — this is a defining feature of SHM.

## 5. Simple Pendulum

**Derivation of $\omega = \sqrt{g/L}$ for small angles.**

Consider a pendulum of length $L$ with a bob of mass $m$ displaced by angle $\theta$ from the vertical.

The restoring force along the arc is $F = -mg\sin\theta$.

The displacement along the arc is $x = L\theta$.

Newton's second law: $ma = -mg\sin\theta$, where $a = L\ddot{\theta}$:

$$mL\ddot{\theta} = -mg\sin\theta \implies \ddot{\theta} = -\frac{g}{L}\sin\theta$$

**Small angle approximation:** For $\theta \lesssim 10°$, $\sin\theta \approx \theta$ (in radians). Then:

$$\ddot{\theta} = -\frac{g}{L}\theta$$

This is SHM in the variable $\theta$ with angular frequency $\omega = \sqrt{g/L}$:

$$\boxed{T = 2\pi\sqrt{\frac{L}{g}}}$$

:::warning
Common Pitfall
The period of a simple pendulum is **independent of mass** and **independent of amplitude** (for small oscillations). These are classic exam questions.
:::

## 6. Phase Relationships

In SHM, displacement, velocity, and acceleration are out of phase:

- **Displacement:** $x = A\cos(\omega t + \phi)$
- **Velocity:** $v = -A\omega\sin(\omega t + \phi) = A\omega\cos(\omega t + \phi + \pi/2)$ — leads displacement by $\pi/2$
- **Acceleration:** $a = -A\omega^2\cos(\omega t + \phi) = A\omega^2\cos(\omega t + \phi + \pi)$ — leads displacement by $\pi$

**Key phase differences:**

- Velocity leads displacement by $90°$ ($\pi/2$)
- Acceleration leads displacement by $180°$ ($\pi$) — acceleration is always antiphase to displacement

## 7. Damping

**Definition.** **Damping** is the dissipation of energy from an oscillating system, usually due to friction or viscous forces.

### Types of Damping

| Type                    | Description                                                     | Displacement-Time Graph         |
| ----------------------- | --------------------------------------------------------------- | ------------------------------- |
| **Light (underdamped)** | Oscillates with gradually decreasing amplitude                  | Decaying sinusoid               |
| **Critical**            | Returns to equilibrium in the shortest time without oscillating | Exponential decay, no overshoot |
| **Heavy (overdamped)**  | Returns to equilibrium very slowly without oscillating          | Slow exponential decay          |

**Critical damping** is the boundary between oscillatory and non-oscillatory decay. It occurs when the damping coefficient $b$ satisfies $b = 2\sqrt{km}$ (for a mass-spring system). Car suspension systems are designed to be critically damped.

## 8. Resonance

**Definition.** **Resonance** occurs when a periodic driving force has a frequency equal to the natural frequency of the oscillating system. At resonance, the amplitude of oscillation is maximised.

**Key features:**

- The amplitude is maximum when the driving frequency $f_d$ equals the natural frequency $f_0$.
- Lightly damped systems have a sharp resonance peak; heavily damped systems have a broad peak.
- At resonance, the system absorbs maximum energy from the driving force.

**Examples:** A child on a swing (driving at natural frequency), the Tacoma Narrows Bridge (aeroelastic resonance), tuning a radio (LC circuit resonance), MRI machines (nuclear magnetic resonance).

:::tip
Exam Technique
In exam questions about damping and resonance, remember: more damping $\to$ lower maximum amplitude $\to$ broader resonance curve. Less damping $\to$ higher peak $\to$ narrower curve.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
A mass-spring system has $m = 0.40$ kg and $k = 160$ N m$^{-1}$. The mass is displaced $0.05$ m from equilibrium and released. Find: (a) the period, (b) the maximum velocity, (c) the maximum acceleration.

**Answer.** (a) $T = 2\pi\sqrt{m/k} = 2\pi\sqrt{0.40/160} = 2\pi\sqrt{0.0025} = 2\pi \times 0.05 = 0.314$ s.

(b) $v_{\max} = A\omega = 0.05 \times \sqrt{160/0.40} = 0.05 \times 20 = 1.0$ m s$^{-1}$.

(c) $a_{\max} = A\omega^2 = 0.05 \times 400 = 20$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Mass-Spring System](#4-mass-spring-system)
</details>

<details>
<summary>Problem 2</summary>
A simple pendulum has a period of $2.00$ s on Earth. What would be its period on the Moon ($g_{\text{Moon}} = 1.62$ m s$^{-2}$)?

**Answer.** $T_E = 2\pi\sqrt{L/g_E} \implies L = g_E(T_E/2\pi)^2 = 9.81(2.00/2\pi)^2 = 9.81 \times 0.1013 = 0.994$ m.

$T_M = 2\pi\sqrt{0.994/1.62} = 2\pi \times 0.7827 = 4.92$ s.

<b>If you get this wrong, revise:</b> [Simple Pendulum](#5-simple-pendulum)
</details>

<details>
<summary>Problem 3</summary>
An object in SHM has amplitude $0.10$ m and frequency $5.0$ Hz. Find its speed and acceleration when it is $0.06$ m from the equilibrium position.

**Answer.** $\omega = 2\pi \times 5.0 = 31.4$ rad s$^{-1}$.

$v = \omega\sqrt{A^2 - x^2} = 31.4\sqrt{0.01 - 0.0036} = 31.4\sqrt{0.0064} = 31.4 \times 0.08 = 2.51$ m s$^{-1}$.

$a = -\omega^2 x = -(31.4)^2 \times 0.06 = -986 \times 0.06 = -59.2$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Velocity-Displacement Relation](#velocity-displacement-relation)
</details>

<details>
<summary>Problem 4</summary>
A pendulum of length $1.50$ m has a bob of mass $0.50$ kg. Calculate: (a) its period, (b) its total energy when swinging with amplitude $0.10$ m, (c) the maximum velocity.

**Answer.** (a) $T = 2\pi\sqrt{1.50/9.81} = 2\pi \times 0.391 = 2.46$ s.

(b) For small angles, $\omega = \sqrt{g/L} = \sqrt{9.81/1.50} = 2.557$ rad s$^{-1}$. $E = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}(0.50)(2.557)^2(0.10)^2 = 0.0163$ J.

(c) $v_{\max} = A\omega = 0.10 \times 2.557 = 0.256$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Energy in SHM](#3-energy-in-shm)
</details>

<details>
<summary>Problem 5</summary>
Show that the period of a mass-spring system is independent of the amplitude of oscillation.

**Answer.** $T = 2\pi/\omega = 2\pi\sqrt{m/k}$. The period depends only on $m$ and $k$, neither of which depends on the amplitude $A$. The amplitude $A$ is determined by initial conditions, not the inherent properties of the oscillator. $\square$

<b>If you get this wrong, revise:</b> [Mass-Spring System](#4-mass-spring-system)
</details>

<details>
<summary>Problem 6</summary>
A 50 g mass on a spring oscillates with amplitude 4.0 cm and period 0.80 s. Find the total energy and the speed when the displacement is 2.0 cm.

**Answer.** $\omega = 2\pi/0.80 = 7.854$ rad s$^{-1}$.

$E = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}(0.050)(7.854)^2(0.04)^2 = \frac{1}{2}(0.050)(61.65)(0.0016) = 2.46 \times 10^{-3}$ J.

$v = \omega\sqrt{A^2 - x^2} = 7.854\sqrt{0.0016 - 0.0004} = 7.854 \times 0.0346 = 0.272$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Energy in SHM](#3-energy-in-shm)
</details>

<details>
<summary>Problem 7</summary>
Sketch graphs showing how displacement, velocity, and acceleration vary with time for one complete cycle of SHM. Show the phase relationships clearly.

**Answer.** All three are sinusoidal curves of the same period.

- Displacement: $x = A\cos(\omega t)$ — starts at $A$, goes to $-A$, returns.
- Velocity: $v = -A\omega\sin(\omega t)$ — starts at $0$, goes to $-A\omega$, returns. Leads $x$ by $90°$.
- Acceleration: $a = -A\omega^2\cos(\omega t)$ — starts at $-A\omega^2$, goes to $+A\omega^2$, returns. Antiphase to $x$.

<b>If you get this wrong, revise:</b> [Phase Relationships](#6-phase-relationships)
</details>

<details>
<summary>Problem 8</summary>
A pendulum has a period of $1.00$ s at a location where $g = 9.81$ m s$^{-2}$. If the pendulum is taken to a location where $g = 9.40$ m s$^{-2}$, what is the new period?

**Answer.** $T \propto g^{-1/2}$. $T_2/T_1 = \sqrt{g_1/g_2} = \sqrt{9.81/9.40} = \sqrt{1.0436} = 1.0216$. $T_2 = 1.0216$ s.

<b>If you get this wrong, revise:</b> [Simple Pendulum](#5-simple-pendulum)
</details>

<details>
<summary>Problem 9</summary>
In an SHM system, the kinetic energy equals the potential energy when the displacement is $x = x_0$. Show that $x_0 = A/\sqrt{2}$.

**Answer.** $E_k = E_p$ when $\frac{1}{2}m\omega^2(A^2 - x^2) = \frac{1}{2}m\omega^2 x^2$. $A^2 - x^2 = x^2 \implies 2x^2 = A^2 \implies x = A/\sqrt{2}$. $\square$

<b>If you get this wrong, revise:</b> [Energy in SHM](#3-energy-in-shm)
</details>

<details>
<summary>Problem 10</summary>
Explain why a heavily damped system does not exhibit resonance at its natural frequency.

**Answer.** A heavily damped system has a very broad, low resonance curve. Energy is dissipated so rapidly that even when driven at the natural frequency, the amplitude build-up is minimal. The damping force is comparable to the restoring force, preventing significant oscillation. The peak of the resonance curve is very flat and occurs at a frequency slightly below the undamped natural frequency.

<b>If you get this wrong, revise:</b> [Damping](#7-damping) and [Resonance](#8-resonance)
</details>
