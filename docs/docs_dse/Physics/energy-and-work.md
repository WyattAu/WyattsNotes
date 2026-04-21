---
title: Energy and Work
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: dse-physics-energy-and-work
---

## Work Done by a Force

### Definition

Work is done when a force causes displacement in the direction of the force.

$$W = Fs\cos\theta$$

where $\theta$ is the angle between the force and the displacement. The SI unit of work is the joule
(J), where $1 \mathrm{ J} = 1 \mathrm{ N\, m}$.

| Condition             | Work Done                        |
| --------------------- | -------------------------------- |
| $\theta = 0^\circ$    | $W = Fs$ (maximum)               |
| $\theta = 90^\circ$   | $W = 0$ (no work)                |
| $\theta \gt 90^\circ$ | $W \lt 0$ (force opposes motion) |

### Work Done by a Variable Force

When force varies with displacement:

$$W = \int_{s_1}^{s_2} F\, ds$$

This equals the area under the force-displacement graph.

### Work Done Against Gravity

Raising an object of mass $m$ through a vertical height $h$:

$$W = mgh$$

### Work Done Stretching a Spring (Hooke's Law)

For a spring obeying $F = kx$:

$$W = \frac{1}{2}kx^2$$

where $k$ is the spring constant and $x$ is the extension from the natural length.

### Worked Example 1

A spring of spring constant $500 \mathrm{ N/m}$ is stretched by $0.08 \mathrm{ m}$. Find the work
done.

$$W = \frac{1}{2}(500)(0.08)^2 = \frac{1}{2}(500)(0.0064) = 1.6 \mathrm{ J}$$

---

## Kinetic Energy

The kinetic energy of an object of mass $m$ moving at speed $v$:

$$E_k = \frac{1}{2}mv^2$$

### Derivation from Newton's Second Law

Starting from $F = ma$ and using $v^2 = u^2 + 2as$ with constant force:

$$W = Fs = mas = m\frac{v^2 - u^2}{2s}\cdot s = \frac{1}{2}m(v^2 - u^2) = \Delta E_k$$

This establishes the **work-energy theorem**: the net work done on an object equals its change in
kinetic energy.

---

## Potential Energy

### Gravitational Potential Energy

Near the Earth's surface:

$$E_p = mgh$$

where $h$ is the height above a chosen reference level.

### Elastic Potential Energy

For a spring obeying Hooke's law with extension $x$:

$$E_p = \frac{1}{2}kx^2$$

---

## Conservation of Energy

### Principle

Energy cannot be created or destroyed, only transformed from one form to another. In a closed system
with no non-conservative forces:

$$E_{k1} + E_{p1} = E_{k2} + E_{p2}$$

When friction or air resistance is present:

$$E_{k1} + E_{p1} = E_{k2} + E_{p2} + W_{\mathrm{lost}}$$

where $W_{\mathrm{lost}}$ is the energy dissipated as thermal energy.

<PhetSimulation simulationId="energy-skate-park" title="Energy Skate Park" />

Observe the continuous interchange between kinetic and potential energy as the skater moves along
the track.

### Worked Example 2

A roller coaster car of mass $600 \mathrm{ kg}$ starts from rest at point `A`, $25 \mathrm{ m}$
above the ground. It descends to point `B`, $8 \mathrm{ m}$ above the ground. Find its speed at `B`,
neglecting friction.

At `A`: $E_k = 0$, $E_p = 600 \times 9.81 \times 25 = 147150 \mathrm{ J}$

At `B`: $E_k = \frac{1}{2}(600)v^2$, $E_p = 600 \times 9.81 \times 8 = 47088 \mathrm{ J}$

$$147150 = \frac{1}{2}(600)v^2 + 47088$$

$$\frac{1}{2}(600)v^2 = 100062$$

$$v^2 = \frac{200124}{600} = 333.54$$

$$v = 18.26 \mathrm{ m/s}$$

---

## Power

### Definition

Power is the rate of doing work:

$$P = \frac{W}{t}$$

For a force acting on a moving object:

$$P = Fv\cos\theta$$

When force and velocity are parallel ($\theta = 0^\circ$):

$$P = Fv$$

The SI unit of power is the watt (W), where $1 \mathrm{ W} = 1 \mathrm{ J/s}$.

### Worked Example 3

A car of mass $1500 \mathrm{ kg}$ travels at a constant speed of $18 \mathrm{ m/s}$ up a slope of
$\sin^{-1}(0.08)$. The total resistive force is $400 \mathrm{ N}$. Find the power output of the
engine.

Component of weight along the slope:
$mg\sin\theta = 1500 \times 9.81 \times 0.08 = 1177.2 \mathrm{ N}$

Total force: $F = 1177.2 + 400 = 1577.2 \mathrm{ N}$

$$P = Fv = 1577.2 \times 18 = 28390 \mathrm{ W} = 28.4 \mathrm{ kW}$$

---

## Efficiency

### Definition

$$\mathrm{Efficiency} = \frac{\mathrm{Useful energy output}}{\mathrm{Total energy input}} \times 100\%$$

Equivalently, using power:

$$\mathrm{Efficiency} = \frac{P_{\mathrm{out}}}{P_{\mathrm{in}}} \times 100\%$$

Efficiency is always less than 100% in practice because some energy is always dissipated as heat due
to friction, air resistance, or electrical resistance.

### Worked Example 4

A motor lifts a $200 \mathrm{ kg}$ load through $5 \mathrm{ m}$ in $10 \mathrm{ s}$. The motor is
connected to a $240 \mathrm{ V}$ supply and draws a current of $5 \mathrm{ A}$. Find the efficiency
of the motor.

Useful power output:
$P_{\mathrm{out}} = \frac{mgh}{t} = \frac{200 \times 9.81 \times 5}{10} = 981 \mathrm{ W}$

Electrical power input: $P_{\mathrm{in}} = VI = 240 \times 5 = 1200 \mathrm{ W}$

$$\mathrm{Efficiency} = \frac{981}{1200} \times 100\% = 81.8\%$$

---

## Energy in Simple Harmonic Motion

In SHM, kinetic and potential energy continuously interchange while the total energy remains
constant.

$$E_k = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2(A^2 - x^2)$$

$$E_p = \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 x^2$$

$$E_{\mathrm{total}} = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}kA^2$$

At equilibrium ($x = 0$): all energy is kinetic. At maximum displacement ($x = A$): all energy is
potential.

### Worked Example 5

A mass-spring system has mass $0.3 \mathrm{ kg}$, spring constant $120 \mathrm{ N/m}$, and amplitude
$0.04 \mathrm{ m}$. Find the total energy and the speed when $x = 0.02 \mathrm{ m}$.

$$E_{\mathrm{total}} = \frac{1}{2}kA^2 = \frac{1}{2}(120)(0.04)^2 = \frac{1}{2}(120)(0.0016) = 0.096 \mathrm{ J}$$

At $x = 0.02 \mathrm{ m}$:

$$E_k = E_{\mathrm{total}} - \frac{1}{2}kx^2 = 0.096 - \frac{1}{2}(120)(0.0004) = 0.096 - 0.024 = 0.072 \mathrm{ J}$$

$$v = \sqrt{\frac{2E_k}{m}} = \sqrt{\frac{2 \times 0.072}{0.3}} = \sqrt{0.48} = 0.693 \mathrm{ m/s}$$

---

## Common Pitfalls

- Confusing work done on an object with the energy the object possesses. Work is a **process**;
  energy is a **state**.
- Forgetting that work is a scalar quantity. Even when a force acts at an angle, $W = Fs\cos\theta$
  gives a signed scalar, not a vector.
- Applying $W = mgh$ when the height is large enough that $g$ varies significantly. For orbital
  problems, use $E_p = -GMm/r$ instead.
- Using $P = Fv$ when the force and velocity are not parallel. The correct form is
  $P = Fv\cos\theta$.
- Forgetting to include all forms of energy when applying conservation of energy. Missing a term
  (e.g., elastic potential energy or work done against friction) leads to incorrect results.

---

## Summary Table

| Topic               | Key Formula                               | Key Concept                        |
| ------------------- | ----------------------------------------- | ---------------------------------- |
| Work                | $W = Fs\cos\theta$                        | Energy transfer by a force         |
| Work-energy theorem | $W_{\mathrm{net}} = \Delta E_k$           | Net work = change in KE            |
| Kinetic energy      | $E_k = \frac{1}{2}mv^2$                   | Energy of motion                   |
| Gravitational PE    | $E_p = mgh$                               | Energy due to position in a field  |
| Elastic PE          | $E_p = \frac{1}{2}kx^2$                   | Energy stored in a deformed spring |
| Conservation        | $E_{k1} + E_{p1} = E_{k2} + E_{p2}$       | No energy lost                     |
| Power               | $P = W/t = Fv$                            | Rate of energy transfer            |
| Efficiency          | $\eta = E_{\mathrm{out}}/E_{\mathrm{in}}$ | Always less than 100%              |

---

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** A crate of mass $50 \mathrm{ kg}$ is pushed $12 \mathrm{ m}$ up a rough ramp
inclined at $25^\circ$ to the horizontal by a force of $350 \mathrm{ N}$ acting parallel to the
ramp. The coefficient of kinetic friction is $0.2$. Find the work done by the applied force, the
work done against gravity, the work done against friction, and the final speed if the crate starts
from rest.

Work by applied force: $W_{\mathrm{app}} = 350 \times 12 = 4200 \mathrm{ J}$

Work against gravity:
$W_g = mgh = 50 \times 9.81 \times 12\sin 25^\circ = 50 \times 9.81 \times 5.071 = 2487 \mathrm{ J}$

Work against friction:
$W_f = \mu mg\cos\theta \times s = 0.2 \times 50 \times 9.81 \times \cos 25^\circ \times 12 = 0.2 \times 50 \times 9.81 \times 0.9063 \times 12 = 1066 \mathrm{ J}$

By work-energy theorem:
$W_{\mathrm{net}} = W_{\mathrm{app}} - W_g - W_f = 4200 - 2487 - 1066 = 647 \mathrm{ J} = \frac{1}{2}mv^2$

$$v = \sqrt{\frac{2 \times 647}{50}} = \sqrt{25.88} = 5.09 \mathrm{ m/s}$$

**Question 2:** A ball of mass $0.1 \mathrm{ kg}$ is thrown vertically upward with speed
$12 \mathrm{ m/s}$. Find the maximum height and the speed when it returns to its starting point,
given that air resistance does $0.3 \mathrm{ J}$ of work on the ball during the ascent.

Going up: $E_{k1} = \frac{1}{2}(0.1)(144) = 7.2 \mathrm{ J}$

$$7.2 = mgh + W_{\mathrm{air}} = 0.1 \times 9.81 \times h + 0.3$$

$$0.981h = 6.9 \implies h = 7.03 \mathrm{ m}$$

Coming down: total energy lost to air resistance $= 2 \times 0.3 = 0.6 \mathrm{ J}$ (approximately,
assuming similar dissipation on the way down).

$$\frac{1}{2}(0.1)v^2 = 7.2 - 0.6 = 6.6 \mathrm{ J}$$

$$v = \sqrt{\frac{2 \times 6.6}{0.1}} = \sqrt{132} = 11.49 \mathrm{ m/s}$$

**Question 3:** A pump lifts $500 \mathrm{ kg}$ of water per minute from a well $15 \mathrm{ m}$
deep. If the pump is $75\%$ efficient, what is its power input?

Useful power:
$P_{\mathrm{out}} = \frac{mgh}{t} = \frac{500 \times 9.81 \times 15}{60} = 1226.25 \mathrm{ W}$

$$P_{\mathrm{in}} = \frac{P_{\mathrm{out}}}{\eta} = \frac{1226.25}{0.75} = 1635 \mathrm{ W} = 1.64 \mathrm{ kW}$$

**Question 4:** A simple pendulum of length $1.5 \mathrm{ m}$ has a bob of mass $0.5 \mathrm{ kg}$.
It is pulled aside until the string makes $30^\circ$ with the vertical and released from rest. Find
the speed of the bob at the lowest point, neglecting air resistance.

Height gain: $h = L(1 - \cos\theta) = 1.5(1 - \cos 30^\circ) = 1.5(1 - 0.866) = 0.201 \mathrm{ m}$

By conservation of energy: $mgh = \frac{1}{2}mv^2$

$$v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 0.201} = \sqrt{3.94} = 1.99 \mathrm{ m/s}$$

**Question 5:** A spring with $k = 200 \mathrm{ N/m}$ is placed at the bottom of a ramp inclined at
$30^\circ$. A block of mass $2 \mathrm{ kg}$ slides $0.5 \mathrm{ m}$ down the ramp (measured along
the slope) before hitting the spring. The ramp is smooth. Find the maximum compression of the
spring.

Height descended: $h = 0.5\sin 30^\circ = 0.25 \mathrm{ m}$

$$mgh = \frac{1}{2}kx^2$$

$$2 \times 9.81 \times 0.25 = \frac{1}{2}(200)x^2$$

$$4.905 = 100x^2 \implies x^2 = 0.04905 \implies x = 0.222 \mathrm{ m}$$

</details>
