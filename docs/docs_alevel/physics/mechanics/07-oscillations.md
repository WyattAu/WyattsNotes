---
title: Oscillations
description:
  "A-Level Physics notes on Oscillations: 1. Simple Harmonic Motion — Definition; 2. The SHM Equation and Its Solutions; Derived Quantities."
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: oscillations
---

## Oscillations

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

<PhetSimulation simulationId="masses-and-springs" title="Masses and Springs" />

Explore the simulation above to develop intuition for this topic.

## 1. Simple Harmonic Motion — Definition

**Definition.** A body undergoes **simple harmonic motion (SHM)** if its acceleration is directly
proportional to its displacement from a fixed point and is always directed towards that point:

$$\boxed{a = -\omega^2 x}$$

where $\omega$ is the angular frequency of the oscillation and $x$ is the displacement from the
equilibrium position.

The negative sign is crucial: it ensures the acceleration is always directed towards the equilibrium
position (a **restoring force**).

## 2. The SHM Equation and Its Solutions

Starting from $a = -\omega^2 x$, and using $a = \frac{d^2x}{dt^2}$:

$$\frac{d^2x}{dt^2} = -\omega^2 x$$

This is a second-order linear ODE with constant coefficients. We propose a solution of the form
$x = A\cos(\omega t + \phi)$.

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

The potential energy at displacement $x$ is the work done against the restoring force from
equilibrium to $x$:

$$E_p = -\int_0^x F\,dx' = -\int_0^x (-m\omega^2 x')\,dx' = m\omega^2\int_0^x x'\,dx'$$

$$\boxed{E_p = \frac{1}{2}m\omega^2 x^2}$$

### Total Energy

$$E_{\mathrm{total}} = E_k + E_p = \frac{1}{2}m\omega^2(A^2 - x^2) + \frac{1}{2}m\omega^2 x^2 = \frac{1}{2}m\omega^2 A^2$$

$$\boxed{E_{\mathrm{total}} = \frac{1}{2}m\omega^2 A^2 = \mathrm{constant}}$$

**Proof that total energy is constant.** The total energy depends only on $m$, $\omega$, and $A$ —
none of which change during the motion. Therefore $E_{\mathrm{total}}$ is conserved. $\square$

**Intuition.** Energy oscillates between kinetic and potential forms. At the equilibrium ($x = 0$),
all energy is kinetic. At the turning points ($x = \pm A$), all energy is potential. The total is
always the same — this is just conservation of energy applied to SHM.

## 4. Mass-Spring System

**Derivation of $\omega = \sqrt{k/m}$.**

By Hooke's law, the restoring force on a mass $m$ attached to a spring of constant $k$ is $F = -kx$.

By Newton's second law: $ma = -kx$, i.e., $a = -\frac{k}{m}x$.

Comparing with $a = -\omega^2 x$:

$$\boxed{\omega = \sqrt{\frac{k}{m}}, \qquad T = 2\pi\sqrt{\frac{m}{k}}}$$

**Intuition.** A stiffer spring (larger $k$) gives faster oscillations. A heavier mass (larger $m$)
gives slower oscillations. The period is independent of amplitude — this is a defining feature of
SHM.

## 5. Simple Pendulum

**Derivation of $\omega = \sqrt{g/L}$ for small angles.**

Consider a pendulum of length $L$ with a bob of mass $m$ displaced by angle $\theta$ from the
vertical.

The restoring force along the arc is $F = -mg\sin\theta$.

The displacement along the arc is $x = L\theta$.

Newton's second law: $ma = -mg\sin\theta$, where $a = L\ddot{\theta}$:

$$mL\ddot{\theta} = -mg\sin\theta \implies \ddot{\theta} = -\frac{g}{L}\sin\theta$$

**Small angle approximation:** For $\theta \lesssim 10^\circ$, $\sin\theta \approx \theta$ (in
radians). Then:

$$\ddot{\theta} = -\frac{g}{L}\theta$$

This is SHM in the variable $\theta$ with angular frequency $\omega = \sqrt{g/L}$:

$$\boxed{T = 2\pi\sqrt{\frac{L}{g}}}$$

:::warning Common Pitfall The period of a simple pendulum is **independent of mass** and
**independent of amplitude** (for small oscillations). These are classic exam questions.
:::

## 6. Phase Relationships

In SHM, displacement, velocity, and acceleration are out of phase:

- **Displacement:** $x = A\cos(\omega t + \phi)$
- **Velocity:** $v = -A\omega\sin(\omega t + \phi) = A\omega\cos(\omega t + \phi + \pi/2)$ — leads
  displacement by $\pi/2$
- **Acceleration:** $a = -A\omega^2\cos(\omega t + \phi) = A\omega^2\cos(\omega t + \phi + \pi)$ —
  leads displacement by $\pi$

**Key phase differences:**

- Velocity leads displacement by $90^\circ$ ($\pi/2$)
- Acceleration leads displacement by $180^\circ$ ($\pi$) — acceleration is always antiphase to
  displacement

## 7. Damping

**Definition.** **Damping** is the dissipation of energy from an oscillating system, usually due to
friction or viscous forces.

### Types of Damping

| Type                    | Description                                                     | Displacement-Time Graph         |
| ----------------------- | --------------------------------------------------------------- | ------------------------------- |
| **Light (underdamped)** | Oscillates with gradually decreasing amplitude                  | Decaying sinusoid               |
| **Critical**            | Returns to equilibrium in the shortest time without oscillating | Exponential decay, no overshoot |
| **Heavy (overdamped)**  | Returns to equilibrium very slowly without oscillating          | Slow exponential decay          |

**Critical damping** is the boundary between oscillatory and non-oscillatory decay. It occurs when
the damping coefficient $b$ satisfies $b = 2\sqrt{km}$ (for a mass-spring system). Car suspension
systems are designed to be critically damped.

## 8. Resonance

**Definition.** **Resonance** occurs when a periodic driving force has a frequency equal to the
natural frequency of the oscillating system. At resonance, the amplitude of oscillation is
maximised.

**Key features:**

- The amplitude is maximum when the driving frequency $f_d$ equals the natural frequency $f_0$.
- Lightly damped systems have a sharp resonance peak; heavily damped systems have a broad peak.
- At resonance, the system absorbs maximum energy from the driving force.

**Examples:** A child on a swing (driving at natural frequency), the Tacoma Narrows Bridge
(aeroelastic resonance), tuning a radio (LC circuit resonance), MRI machines (nuclear magnetic
resonance).

:::tip Exam Technique In exam questions about damping and resonance, remember: more damping $\to$
lower maximum amplitude $\to$ broader resonance curve. Less damping $\to$ higher peak $\to$ narrower
curve.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
A mass-spring system has $m = 0.40$ kg and $k = 160$ N m$^{-1}$. The mass is displaced $0.05$ m from equilibrium and released. Find: (a) the period, (b) the maximum velocity, (c) the maximum acceleration.

**Answer.** (a)
$T = 2\pi\sqrt{m/k} = 2\pi\sqrt{0.40/160} = 2\pi\sqrt{0.0025} = 2\pi \times 0.05 = 0.314$ s.

(b) $v_{\max} = A\omega = 0.05 \times \sqrt{160/0.40} = 0.05 \times 20 = 1.0$ m s$^{-1}$.

(c) $a_{\max} = A\omega^2 = 0.05 \times 400 = 20$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Mass-Spring System](#4-mass-spring-system)

</details>

<details>
<summary>Problem 2</summary>
A simple pendulum has a period of $2.00$ s on Earth. What would be its period on the Moon ($g_{\mathrm{Moon}} = 1.62$ m s$^{-2}$)?

**Answer.**
$T_E = 2\pi\sqrt{L/g_E} \implies L = g_E(T_E/2\pi)^2 = 9.81(2.00/2\pi)^2 = 9.81 \times 0.1013 = 0.994$
m.

$T_M = 2\pi\sqrt{0.994/1.62} = 2\pi \times 0.7827 = 4.92$ s.

<b>If you get this wrong, revise:</b> [Simple Pendulum](#5-simple-pendulum)

</details>

<details>
<summary>Problem 3</summary>
An object in SHM has amplitude $0.10$ m and frequency $5.0$ Hz. Find its speed and acceleration when it is $0.06$ m from the equilibrium position.

**Answer.** $\omega = 2\pi \times 5.0 = 31.4$ rad s$^{-1}$.

$v = \omega\sqrt{A^2 - x^2} = 31.4\sqrt{0.01 - 0.0036} = 31.4\sqrt{0.0064} = 31.4 \times 0.08 = 2.51$
m s$^{-1}$.

$a = -\omega^2 x = -(31.4)^2 \times 0.06 = -986 \times 0.06 = -59.2$ m s$^{-2}$.

<b>If you get this wrong, revise:</b>
[Velocity-Displacement Relation](#velocity-displacement-relation)

</details>

<details>
<summary>Problem 4</summary>
A pendulum of length $1.50$ m has a bob of mass $0.50$ kg. Calculate: (a) its period, (b) its total energy when swinging with amplitude $0.10$ m, (c) the maximum velocity.

**Answer.** (a) $T = 2\pi\sqrt{1.50/9.81} = 2\pi \times 0.391 = 2.46$ s.

(b) For small angles, $\omega = \sqrt{g/L} = \sqrt{9.81/1.50} = 2.557$ rad s$^{-1}$.
$E = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}(0.50)(2.557)^2(0.10)^2 = 0.0163$ J.

(c) $v_{\max} = A\omega = 0.10 \times 2.557 = 0.256$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Energy in SHM](#3-energy-in-shm)

</details>

<details>
<summary>Problem 5</summary>
Show that the period of a mass-spring system is independent of the amplitude of oscillation.

**Answer.** $T = 2\pi/\omega = 2\pi\sqrt{m/k}$. The period depends only on $m$ and $k$, neither of
which depends on the amplitude $A$. The amplitude $A$ is determined by initial conditions, not the
inherent properties of the oscillator. $\square$

<b>If you get this wrong, revise:</b> [Mass-Spring System](#4-mass-spring-system)

</details>

<details>
<summary>Problem 6</summary>
A 50 g mass on a spring oscillates with amplitude 4.0 cm and period 0.80 s. Find the total energy and the speed when the displacement is 2.0 cm.

**Answer.** $\omega = 2\pi/0.80 = 7.854$ rad s$^{-1}$.

$E = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}(0.050)(7.854)^2(0.04)^2 = \frac{1}{2}(0.050)(61.65)(0.0016) = 2.46 \times 10^{-3}$
J.

$v = \omega\sqrt{A^2 - x^2} = 7.854\sqrt{0.0016 - 0.0004} = 7.854 \times 0.0346 = 0.272$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Energy in SHM](#3-energy-in-shm)

</details>

<details>
<summary>Problem 7</summary>
Sketch graphs showing how displacement, velocity, and acceleration vary with time for one complete cycle of SHM. Show the phase relationships clearly.

**Answer.** All three are sinusoidal curves of the same period.

- Displacement: $x = A\cos(\omega t)$ — starts at $A$, goes to $-A$, returns.
- Velocity: $v = -A\omega\sin(\omega t)$ — starts at $0$, goes to $-A\omega$, returns. Leads $x$ by
  $90^\circ$.
- Acceleration: $a = -A\omega^2\cos(\omega t)$ — starts at $-A\omega^2$, goes to $+A\omega^2$,
  returns. Antiphase to $x$.

<b>If you get this wrong, revise:</b> [Phase Relationships](#6-phase-relationships)

</details>

<details>
<summary>Problem 8</summary>
A pendulum has a period of $1.00$ s at a location where $g = 9.81$ m s$^{-2}$. If the pendulum is taken to a location where $g = 9.40$ m s$^{-2}$, what is the new period?

**Answer.** $T \propto g^{-1/2}$.
$T_2/T_1 = \sqrt{g_1/g_2} = \sqrt{9.81/9.40} = \sqrt{1.0436} = 1.0216$. $T_2 = 1.0216$ s.

<b>If you get this wrong, revise:</b> [Simple Pendulum](#5-simple-pendulum)

</details>

<details>
<summary>Problem 9</summary>
In an SHM system, the kinetic energy equals the potential energy when the displacement is $x = x_0$. Show that $x_0 = A/\sqrt{2}$.

**Answer.** $E_k = E_p$ when $\frac{1}{2}m\omega^2(A^2 - x^2) = \frac{1}{2}m\omega^2 x^2$.
$A^2 - x^2 = x^2 \implies 2x^2 = A^2 \implies x = A/\sqrt{2}$. $\square$

<b>If you get this wrong, revise:</b> [Energy in SHM](#3-energy-in-shm)

</details>

<details>
<summary>Problem 10</summary>
Explain why a heavily damped system does not exhibit resonance at its natural frequency.

**Answer.** A heavily damped system has a very broad, low resonance curve. Energy is dissipated so
rapidly that even when driven at the natural frequency, the amplitude build-up is minimal. The
damping force is comparable to the restoring force, preventing significant oscillation. The peak of
the resonance curve is very flat and occurs at a frequency slightly below the undamped natural
frequency.

<b>If you get this wrong, revise:</b> [Damping](#7-damping) and [Resonance](#8-resonance)

</details>

## 9. Energy in SHM — Alternative Forms and Frequency Doubling

### Spring Constant Form

For a mass-spring system, the total energy can be written using the spring constant $k$:

$$\boxed{E = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2}$$

**Proof.** Since $\omega^2 = k/m$ for a mass-spring system:
$\frac{1}{2}m\omega^2 A^2 = \frac{1}{2}m \cdot \frac{k}{m} \cdot A^2 = \frac{1}{2}kA^2$. $\square$

**Intuition.** The total energy is set by the amplitude and the stiffness. A stiffer spring or
larger amplitude stores more energy. The mass determines how energy is shared between KE and PE but
does not affect the total.

### KE and PE Oscillate at Twice the Displacement Frequency

Substituting $x = A\cos(\omega t + \phi)$ into the energy expressions:

$$E_k(t) = \frac{1}{2}m\omega^2(A^2 - x^2) = \frac{1}{2}m\omega^2 A^2 \sin^2(\omega t + \phi)$$

$$E_p(t) = \frac{1}{2}m\omega^2 x^2 = \frac{1}{2}m\omega^2 A^2 \cos^2(\omega t + \phi)$$

Applying the double-angle identities $\sin^2\theta = \tfrac{1}{2}(1 - \cos 2\theta)$ and
$\cos^2\theta = \tfrac{1}{2}(1 + \cos 2\theta)$:

$$E_k(t) = \frac{1}{4}m\omega^2 A^2\bigl(1 - \cos(2\omega t + 2\phi)\bigr)$$

$$E_p(t) = \frac{1}{4}m\omega^2 A^2\bigl(1 + \cos(2\omega t + 2\phi)\bigr)$$

Both $E_k$ and $E_p$ vary sinusoidally with angular frequency $2\omega$ — twice the displacement
frequency.

**Key observations:**

- $E_k$ is maximum when $x = 0$ (equilibrium position), where all energy is kinetic.
- $E_p$ is maximum when $x = \pm A$ (turning points), where all energy is potential.
- KE and PE are always in antiphase with each other.
- At every instant, $E_k + E_p = \frac{1}{2}m\omega^2 A^2$ (constant).

Consider an oscillator with $\omega = 4\pi$ rad s$^{-1}$ (displacement frequency $f = 2$ Hz, period
$T = 0.5$ s). KE varies as $\cos(8\pi t)$, giving a frequency of $4$ Hz — exactly double. In one
displacement cycle, KE reaches its maximum twice: once as the mass passes through equilibrium moving
left, and once moving right.

:::tip Exam Technique When asked to sketch $E_k$ and $E_p$ against time, draw two sinusoidal curves
at twice the displacement frequency, exactly out of phase, oscillating between $0$ and
$E_{\mathrm{total}}$. Their sum is a horizontal line at $E_{\mathrm{total}}$.
:::

## 10. Damping — Time Constant and Displacement-Time Graphs

### The Damping Force

A damped oscillator experiences a resistive force proportional to velocity:

$$F_d = -bv$$

where $b$ is the **damping coefficient** (units: kg s$^{-1}$). The negative sign indicates the force
opposes the motion.

The equation of motion becomes:

$$m\ddot{x} + b\dot{x} + kx = 0$$

### Light Damping — Exponential Decay of Amplitude

For light damping ($b \lt 2\sqrt{km}$), the solution is:

$$\boxed{x(t) = A_0 \, e^{-bt/(2m)} \cos(\omega' t + \phi)}$$

where $\omega' = \sqrt{\omega_0^2 - b^2/(4m^2)}$ is the damped angular frequency, slightly less than
the natural frequency $\omega_0 = \sqrt{k/m}$.

The amplitude decays inside the exponential envelope:

$$A(t) = A_0 \, e^{-t/\tau}$$

where the **time constant** is:

$$\boxed{\tau = \frac{2m}{b}}$$

**Intuition.** The time constant is the time for the amplitude to fall to $1/e \approx 37\%$ of its
initial value. After one time constant, $A = A_0/e$; after two, $A = A_0/e^2 \approx 14\%$; after
three, $A = A_0/e^3 \approx 5\%$. A larger $b$ means faster energy dissipation (shorter $\tau$). A
larger $m$ means more inertia (longer $\tau$).

### Comparison of Damping Regimes

| Damping             | Condition          | Behaviour                                                        |
| ------------------- | ------------------ | ---------------------------------------------------------------- |
| Light (underdamped) | $b \lt 2\sqrt{km}$ | Oscillates with exponentially decaying amplitude                 |
| Critical            | $b = 2\sqrt{km}$   | Fastest return to equilibrium without oscillation                |
| Heavy (overdamped)  | $b \gt 2\sqrt{km}$ | No oscillation; returns to equilibrium more slowly than critical |

**Displacement-time description.** For light damping, the graph shows a sinusoid shrinking inside an
exponential envelope $A_0 e^{-t/\tau}$. The system crosses equilibrium many times. For critical
damping, the displacement decreases smoothly to zero in the shortest possible time without
overshooting. For heavy damping, the displacement also decreases smoothly to zero but takes longer
than critical damping.

### Energy Dissipation in Damped Oscillations

The total mechanical energy of a lightly damped oscillator decays as:

$$E(t) = E_0 \, e^{-t/\tau_E}$$

where $\tau_E = \tau/2 = m/b$. Energy is lost twice as fast as the amplitude decays, since
$E \propto A^2$.

:::warning Common Pitfall Critical damping is the fastest return **without oscillation**, not the
fastest overall. A lightly damped system passes through equilibrium sooner but overshoots. Heavy
damping is slower than critical — adding more damping beyond the critical value makes the system
**slower**, not faster.
:::

**Application.** Car shock absorbers are designed to be critically damped: after hitting a bump, the
car body returns to equilibrium as quickly as possible without bouncing up and down.

## 11. Forced Oscillations and Resonance — Detailed Treatment

### Natural Frequency and Driving Frequency

Every oscillating system has a **natural frequency** $f_0 = \omega_0/(2\pi)$ — the frequency at
which it oscillates when free from external forces.

When a periodic driving force $F = F_0\cos(\omega_d t)$ is applied at driving frequency
$f_d = \omega_d/(2\pi)$, the system is compelled to oscillate at $f_d$.

### Resonance

**Definition.** **Resonance** occurs when the driving frequency equals the natural frequency:
$f_d = f_0$. At resonance, the system absorbs maximum energy per cycle from the driving force and
the amplitude reaches its maximum value.

### Amplitude Response

The steady-state amplitude of a driven, damped oscillator:

$$A(f_d) = \frac{F_0 / m}{\sqrt{(\omega_0^2 - \omega_d^2)^2 + (b\omega_d/m)^2}}$$

At resonance ($\omega_d = \omega_0$):

$$A_{\max} = \frac{F_0}{b\omega_0}$$

**Key features of the resonance curve:**

- The peak amplitude occurs at $f_d \approx f_0$, shifting slightly below $f_0$ as damping
  increases.
- Light damping produces a sharp, tall peak (high $Q$-factor).
- Heavy damping produces a broad, low peak.
- At resonance, the driving force is in phase with velocity ($90^\circ$ ahead of displacement),
  maximising power transfer: $P = F \cdot v$.

### Applications of Resonance

**Musical instruments:** Wind instruments use resonating air columns; strings vibrate at natural
frequencies (harmonics) to produce sustained, rich tones.

**Tuning forks:** Striking a tuning fork at $f_0$ causes a second identical fork to vibrate
sympathetically — a classic demonstration of resonance.

**Tacoma Narrows Bridge (1940):** Wind-induced aeroelastic forces matched the bridge's natural
torsional frequency, causing violent resonance and catastrophic collapse.

**Microwave ovens:** Microwaves at 2.45 GHz resonate with the rotational frequency of water
molecules, efficiently transferring energy and heating food.

**MRI scanners:** Protons in body tissue resonate at specific radio frequencies in a strong magnetic
field, enabling detailed internal imaging without ionising radiation.

:::tip Exam Technique More damping $\to$ lower peak amplitude, broader resonance curve, peak shifts
slightly below $f_0$. Less damping $\to$ higher, sharper peak closer to $f_0$. When sketching
resonance curves for different damping levels, always label the natural frequency $f_0$ and show the
amplitude axis clearly.
:::

## 12. Phasor Diagrams for SHM

### What Is a Phasor?

A **phasor** is a rotating vector whose projection onto a fixed axis gives the instantaneous value
of a sinusoidal quantity. For SHM, a phasor of length $A$ rotates anticlockwise at angular speed
$\omega$.

### Constructing the Diagram

Three phasors originate from the same point, all rotating at $\omega$:

- **Displacement phasor** (length $A$): makes angle $\theta = \omega t + \phi$ with the horizontal.
  Its horizontal projection gives $x = A\cos(\omega t + \phi)$.
- **Velocity phasor** (length $A\omega$): leads the displacement phasor by $90^\circ$
  (perpendicular, in the direction of rotation). Its horizontal projection gives
  $v = -A\omega\sin(\omega t + \phi)$.
- **Acceleration phasor** (length $A\omega^2$): leads the displacement phasor by $180^\circ$
  (antiparallel). Its horizontal projection gives $a = -A\omega^2\cos(\omega t + \phi)$.

### Phase Relationships

| Quantity         | Phase relative to $x$ | Relationship                       |
| ---------------- | --------------------- | ---------------------------------- |
| Displacement $x$ | $0^\circ$             | Reference                          |
| Velocity $v$     | $+90^\circ$           | $v$ leads $x$ by $\pi/2$           |
| Acceleration $a$ | $+180^\circ$          | $a$ leads $x$ by $\pi$ (antiphase) |

**Equivalently:** displacement lags velocity by $90^\circ$, and displacement lags acceleration by
$180^\circ$.

**Intuition.** The phasor diagram makes phase relationships visually obvious. When the displacement
phasor is horizontal (turning point, maximum $x$), the velocity phasor is vertical ($v = 0$) and the
acceleration phasor points left ($a = -\omega^2 A$). When the displacement phasor is vertical
(equilibrium, $x = 0$), the velocity phasor is horizontal ($v = \pm A\omega$) and the acceleration
phasor is vertical ($a = 0$).

### Adding Oscillations with Phasors

When two SHM oscillations of the same frequency are combined, the resultant is also SHM with the
same frequency. The resultant phasor is the **vector sum** of the individual phasors.

For $x_1 = A_1\cos(\omega t)$ and $x_2 = A_2\cos(\omega t + \delta)$:

$$\boxed{A_{\mathrm{res}} = \sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \cos\delta}}$$

**Proof.** The cosine rule applied to the triangle formed by the two phasors and their resultant,
with included angle $\delta$. $\square$

The resultant phase is given by
$\tan\phi_{\mathrm{res}} = \frac{A_2 \sin\delta}{A_1 + A_2 \cos\delta}$.

:::info Board Coverage AQA Paper 2 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

<details>
<summary>Problem 11</summary>
A mass-spring system has $m = 0.25$ kg and $k = 100$ N m$^{-1}$, oscillating with amplitude $0.08$ m. Calculate: (a) the total energy using $E = \frac{1}{2}kA^2$, (b) the KE and PE when $x = 0.04$ m, (c) show that KE and PE each oscillate at twice the displacement frequency.

**Answer.** (a) $E = \frac{1}{2}(100)(0.08)^2 = 0.320$ J.

(b) $E_p = \frac{1}{2}(100)(0.04)^2 = 0.080$ J. $E_k = E - E_p = 0.320 - 0.080 = 0.240$ J.

(c) $E_k(t) = \frac{1}{2}m\omega^2 A^2 \sin^2(\omega t) = \frac{E}{2}(1 - \cos 2\omega t)$. The
argument $2\omega t$ means the angular frequency is $2\omega$, twice the displacement frequency
$\omega$. Similarly $E_p(t) = \frac{E}{2}(1 + \cos 2\omega t)$. $\square$

<b>If you get this wrong, revise:</b>
[Energy in SHM — Alternative Forms and Frequency Doubling](#9-energy-in-shm--alternative-forms-and-frequency-doubling)

</details>

<details>
<summary>Problem 12</summary>
A damped oscillator has $m = 0.50$ kg and $b = 0.80$ kg s$^{-1}$. Calculate: (a) the time constant, (b) the fraction of initial amplitude remaining after 3.0 s, (c) the time for amplitude to fall to 10% of its initial value.

**Answer.** (a) $\tau = 2m/b = 2(0.50)/0.80 = 1.25$ s.

(b) $A(3.0)/A_0 = e^{-3.0/1.25} = e^{-2.4} = 0.0907$, so approximately 9.1%.

(c) $0.10 = e^{-t/1.25} \implies t = -1.25 \ln(0.10) = 1.25 \times 2.303 = 2.88$ s.

<b>If you get this wrong, revise:</b>
[Damping — Time Constant and Displacement-Time Graphs](#10-damping--time-constant-and-displacement-time-graphs)

</details>

<details>
<summary>Problem 13</summary>
A system has natural frequency 440 Hz and is lightly damped. It is driven at: (a) 220 Hz, (b) 440 Hz, (c) 880 Hz. Rank the amplitudes from largest to smallest and explain your reasoning.

**Answer.** Largest at 440 Hz: this is resonance ($f_d = f_0$), so the amplitude peaks. The
amplitudes at 220 Hz and 880 Hz are both smaller. On a linear frequency scale, 220 Hz is 220 Hz
below resonance and 880 Hz is 440 Hz above, so the response at 220 Hz is larger than at 880 Hz.
Ranking: 440 Hz (largest) &gt; 220 Hz &gt; 880 Hz (smallest).

<b>If you get this wrong, revise:</b>
[Forced Oscillations and Resonance — Detailed Treatment](#11-forced-oscillations-and-resonance--detailed-treatment)

</details>

<details>
<summary>Problem 14</summary>
Two SHM oscillations of the same frequency have amplitudes 3.0 cm and 4.0 cm, with a phase difference of $60^\circ$. Find the amplitude of the resultant oscillation using the phasor method.

**Answer.**
$A_{\mathrm{res}} = \sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \cos\delta} = \sqrt{9 + 16 + 2(3)(4)\cos 60°} = \sqrt{25 + 12} = \sqrt{37} = 6.08$
cm.

<b>If you get this wrong, revise:</b> [Phasor Diagrams for SHM](#12-phasor-diagrams-for-shm)

</details>

<details>
<summary>Problem 15</summary>
A 200 g mass on a spring ($k = 50$ N m$^{-1}$) oscillates with amplitude 5.0 cm. A damping force with $b = 0.20$ kg s$^{-1}$ is present. Calculate: (a) the time constant, (b) the total energy at $t = 0$, (c) the total energy at $t = 2\tau$.

**Answer.** (a) $\tau = 2m/b = 2(0.200)/0.20 = 2.00$ s.

(b) $E_0 = \frac{1}{2}kA^2 = \frac{1}{2}(50)(0.05)^2 = 0.0625$ J.

(c) Since $E \propto A^2 \propto e^{-2t/\tau}$:
$E(2\tau) = E_0 \, e^{-4} = 0.0625 \times 0.0183 = 1.14 \times 10^{-3}$ J.

<b>If you get this wrong, revise:</b>
[Damping — Time Constant and Displacement-Time Graphs](#10-damping--time-constant-and-displacement-time-graphs)

</details>

<details>
<summary>Problem 16</summary>
Using a phasor diagram, explain why the velocity of an SHM oscillator is zero at the turning points and maximum at the equilibrium position.

**Answer.** The velocity phasor (length $A\omega$) leads the displacement phasor by $90^\circ$. The
horizontal projection of the velocity phasor gives the instantaneous velocity. When the displacement
phasor is horizontal (turning points, $x = \pm A$), the velocity phasor is vertical, giving a
horizontal projection of zero ($v = 0$). When the displacement phasor is vertical (equilibrium,
$x = 0$), the velocity phasor is horizontal, giving a maximum projection of $\pm A\omega$. $\square$

<b>If you get this wrong, revise:</b> [Phasor Diagrams for SHM](#12-phasor-diagrams-for-shm)

</details>


---

:::tip Diagnostic Test
Ready to test your understanding of **Oscillations**? The [diagnostic test](/physics/diagnostics/diag-oscillations) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Oscillations with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/physics/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::
