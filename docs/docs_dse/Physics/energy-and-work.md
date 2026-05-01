---
title: Energy and Work
description: "DSE Physics energy and work notes covering work done, kinetic energy, potential energy, conservation of energy, power, and efficiency calculations."
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

<details>
<summary>Solution</summary>

$$W = \frac{1}{2}(500)(0.08)^2 = \frac{1}{2}(500)(0.0064) = 1.6 \mathrm{ J}$$

</details>

### Worked Example 2

A worker pushes a $40 \mathrm{ kg}$ crate across a floor by applying a force of
$150 \mathrm{ N}$ at $25^\circ$ below the horizontal. The crate moves $8 \mathrm{ m}$.
The coefficient of kinetic friction is $0.3$. Find the work done by the applied force,
the work done by friction, and the net work done.

<details>
<summary>Solution</summary>

Work by applied force: $W_{\mathrm{app}} = Fs\cos\theta = 150 \times 8 \times \cos 25^\circ = 1200 \times 0.906 = 1088 \mathrm{ J}$

Normal reaction: $N = mg + F\sin\theta = 40 \times 9.81 + 150\sin 25^\circ = 392.4 + 63.4 = 455.8 \mathrm{ N}$

Friction force: $f_k = \mu_k N = 0.3 \times 455.8 = 136.7 \mathrm{ N}$

Work by friction: $W_f = -f_k s = -136.7 \times 8 = -1094 \mathrm{ J}$

$$W_{\mathrm{net}} = 1088 + (-1094) = -6 \mathrm{ J}$$

The small negative net work means the crate slightly decelerates.

</details>

### Worked Example 3

A $5 \mathrm{ kg}$ box is lowered vertically by a rope with a constant downward acceleration of
$2 \mathrm{ m/s}^2$. Find the tension in the rope and the work done by the tension as the box
descends $4 \mathrm{ m}$.

<details>
<summary>Solution</summary>

Taking downward as positive: $mg - T = ma$

$$T = m(g - a) = 5(9.81 - 2) = 5 \times 7.81 = 39.1 \mathrm{ N}$$

The tension acts upward while displacement is downward, so $\theta = 180^\circ$:

$$W = T s \cos 180^\circ = 39.1 \times 4 \times (-1) = -156 \mathrm{ J}$$

</details>

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

### Worked Example 3

A roller coaster car of mass $600 \mathrm{ kg}$ starts from rest at point `A`, $25 \mathrm{ m}$
above the ground. It descends to point `B`, $8 \mathrm{ m}$ above the ground. Find its speed at `B`,
neglecting friction.

<details>
<summary>Solution</summary>

At `A`: $E_k = 0$, $E_p = 600 \times 9.81 \times 25 = 147150 \mathrm{ J}$

At `B`: $E_k = \frac{1}{2}(600)v^2$, $E_p = 600 \times 9.81 \times 8 = 47088 \mathrm{ J}$

$$147150 = \frac{1}{2}(600)v^2 + 47088$$

$$\frac{1}{2}(600)v^2 = 100062$$

$$v^2 = \frac{200124}{600} = 333.54$$

$$v = 18.26 \mathrm{ m/s}$$

</details>

### Worked Example 4

A $2 \mathrm{ kg}$ block slides from rest down a rough curved ramp. The top of the ramp is
$4 \mathrm{ m}$ above the ground. The block reaches the bottom with speed $7 \mathrm{ m/s}$.
Find the energy lost to friction.

<details>
<summary>Solution</summary>

Initial energy: $E_i = mgh = 2 \times 9.81 \times 4 = 78.48 \mathrm{ J}$

Final kinetic energy: $E_{k,f} = \frac{1}{2}(2)(7^2) = 49.0 \mathrm{ J}$

$$W_{\mathrm{lost}} = E_i - E_{k,f} = 78.48 - 49.0 = 29.5 \mathrm{ J}$$

</details>

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

### Worked Example 5

A car of mass $1500 \mathrm{ kg}$ travels at a constant speed of $18 \mathrm{ m/s}$ up a slope of
$\sin^{-1}(0.08)$. The total resistive force is $400 \mathrm{ N}$. Find the power output of the
engine.

<details>
<summary>Solution</summary>

Component of weight along the slope:
$mg\sin\theta = 1500 \times 9.81 \times 0.08 = 1177.2 \mathrm{ N}$

Total force: $F = 1177.2 + 400 = 1577.2 \mathrm{ N}$

$$P = Fv = 1577.2 \times 18 = 28390 \mathrm{ W} = 28.4 \mathrm{ kW}$$

</details>

### Worked Example 6

A lift of mass $800 \mathrm{ kg}$ carries 5 passengers of average mass $70 \mathrm{ kg}$ each.
The lift travels upward at a constant speed of $2 \mathrm{ m/s}$. The motor is $85\%$ efficient.
Find the power input to the motor.

<details>
<summary>Solution</summary>

Total mass: $m = 800 + 5 \times 70 = 1150 \mathrm{ kg}$

Force to overcome gravity: $F = mg = 1150 \times 9.81 = 11282 \mathrm{ N}$

Useful power: $P_{\mathrm{out}} = Fv = 11282 \times 2 = 22563 \mathrm{ W}$

$$P_{\mathrm{in}} = \frac{P_{\mathrm{out}}}{\eta} = \frac{22563}{0.85} = 26545 \mathrm{ W} = 26.5 \mathrm{ kW}$$

</details>

---

## Efficiency

### Definition

$$\mathrm{Efficiency} = \frac{\mathrm{Useful energy output}}{\mathrm{Total energy input}} \times 100\%$$

Equivalently, using power:

$$\mathrm{Efficiency} = \frac{P_{\mathrm{out}}}{P_{\mathrm{in}}} \times 100\%$$

Efficiency is always less than 100% in practice because some energy is always dissipated as heat due
to friction, air resistance, or electrical resistance.

### Worked Example 7

A motor lifts a $200 \mathrm{ kg}$ load through $5 \mathrm{ m}$ in $10 \mathrm{ s}$. The motor is
connected to a $240 \mathrm{ V}$ supply and draws a current of $5 \mathrm{ A}$. Find the efficiency
of the motor.

<details>
<summary>Solution</summary>

Useful power output:
$P_{\mathrm{out}} = \frac{mgh}{t} = \frac{200 \times 9.81 \times 5}{10} = 981 \mathrm{ W}$

Electrical power input: $P_{\mathrm{in}} = VI = 240 \times 5 = 1200 \mathrm{ W}$

$$\mathrm{Efficiency} = \frac{981}{1200} \times 100\% = 81.8\%$$

</details>

---

## Energy in Simple Harmonic Motion

In SHM, kinetic and potential energy continuously interchange while the total energy remains
constant.

$$E_k = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2(A^2 - x^2)$$

$$E_p = \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 x^2$$

$$E_{\mathrm{total}} = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}kA^2$$

At equilibrium ($x = 0$): all energy is kinetic. At maximum displacement ($x = A$): all energy is
potential.

### Worked Example 8

A mass-spring system has mass $0.3 \mathrm{ kg}$, spring constant $120 \mathrm{ N/m}$, and amplitude
$0.04 \mathrm{ m}$. Find the total energy and the speed when $x = 0.02 \mathrm{ m}$.

<details>
<summary>Solution</summary>

$$E_{\mathrm{total}} = \frac{1}{2}kA^2 = \frac{1}{2}(120)(0.04)^2 = \frac{1}{2}(120)(0.0016) = 0.096 \mathrm{ J}$$

At $x = 0.02 \mathrm{ m}$:

$$E_k = E_{\mathrm{total}} - \frac{1}{2}kx^2 = 0.096 - \frac{1}{2}(120)(0.0004) = 0.096 - 0.024 = 0.072 \mathrm{ J}$$

$$v = \sqrt{\frac{2E_k}{m}} = \sqrt{\frac{2 \times 0.072}{0.3}} = \sqrt{0.48} = 0.693 \mathrm{ m/s}$$

</details>

### Worked Example 9

A simple pendulum of length $1.5 \mathrm{ m}$ has a bob of mass $0.5 \mathrm{ kg}$. It is pulled
aside until the string makes $30^\circ$ with the vertical and released from rest. Find the speed
of the bob at the lowest point and the total energy, neglecting air resistance.

<details>
<summary>Solution</summary>

Height gain: $h = L(1 - \cos\theta) = 1.5(1 - \cos 30^\circ) = 1.5(1 - 0.866) = 0.201 \mathrm{ m}$

By conservation of energy: $mgh = \frac{1}{2}mv^2$

$$v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 0.201} = \sqrt{3.94} = 1.99 \mathrm{ m/s}$$

Total energy: $E_{\mathrm{total}} = mgh = 0.5 \times 9.81 \times 0.201 = 0.986 \mathrm{ J}$

</details>

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

## Problem Set

**Problem 1.** A crate of mass $50 \mathrm{ kg}$ is pushed $12 \mathrm{ m}$ up a rough ramp
inclined at $25^\circ$ to the horizontal by a force of $350 \mathrm{ N}$ acting parallel to the
ramp. The coefficient of kinetic friction is $0.2$. Find the work done by the applied force, the
work done against gravity, the work done against friction, and the final speed if the crate starts
from rest.

<details>
<summary>Solution</summary>

Work by applied force: $W_{\mathrm{app}} = 350 \times 12 = 4200 \mathrm{ J}$

Work against gravity:
$W_g = mgh = 50 \times 9.81 \times 12\sin 25^\circ = 50 \times 9.81 \times 5.071 = 2487 \mathrm{ J}$

Work against friction:
$W_f = \mu mg\cos\theta \times s = 0.2 \times 50 \times 9.81 \times \cos 25^\circ \times 12 = 0.2 \times 50 \times 9.81 \times 0.9063 \times 12 = 1066 \mathrm{ J}$

By work-energy theorem:
$W_{\mathrm{net}} = W_{\mathrm{app}} - W_g - W_f = 4200 - 2487 - 1066 = 647 \mathrm{ J} = \frac{1}{2}mv^2$

$$v = \sqrt{\frac{2 \times 647}{50}} = \sqrt{25.88} = 5.09 \mathrm{ m/s}$$

</details>

If you get this wrong, revise: Work Done by a Force / Work-Energy Theorem

**Problem 2.** A ball of mass $0.1 \mathrm{ kg}$ is thrown vertically upward with speed
$12 \mathrm{ m/s}$. Find the maximum height and the speed when it returns to its starting point,
given that air resistance does $0.3 \mathrm{ J}$ of work on the ball during the ascent.

<details>
<summary>Solution</summary>

Going up: $E_{k1} = \frac{1}{2}(0.1)(144) = 7.2 \mathrm{ J}$

$$7.2 = mgh + W_{\mathrm{air}} = 0.1 \times 9.81 \times h + 0.3$$

$$0.981h = 6.9 \implies h = 7.03 \mathrm{ m}$$

Coming down: total energy lost to air resistance $= 2 \times 0.3 = 0.6 \mathrm{ J}$ (approximately,
assuming similar dissipation on the way down).

$$\frac{1}{2}(0.1)v^2 = 7.2 - 0.6 = 6.6 \mathrm{ J}$$

$$v = \sqrt{\frac{2 \times 6.6}{0.1}} = \sqrt{132} = 11.49 \mathrm{ m/s}$$

</details>

If you get this wrong, revise: Conservation of Energy

**Problem 3.** A pump lifts $500 \mathrm{ kg}$ of water per minute from a well $15 \mathrm{ m}$
deep. If the pump is $75\%$ efficient, what is its power input?

<details>
<summary>Solution</summary>

Useful power:
$P_{\mathrm{out}} = \frac{mgh}{t} = \frac{500 \times 9.81 \times 15}{60} = 1226.25 \mathrm{ W}$

$$P_{\mathrm{in}} = \frac{P_{\mathrm{out}}}{\eta} = \frac{1226.25}{0.75} = 1635 \mathrm{ W} = 1.64 \mathrm{ kW}$$

</details>

If you get this wrong, revise: Power and Efficiency

**Problem 4.** A spring with $k = 200 \mathrm{ N/m}$ is placed at the bottom of a ramp inclined at
$30^\circ$. A block of mass $2 \mathrm{ kg}$ slides $0.5 \mathrm{ m}$ down the ramp (measured along
the slope) before hitting the spring. The ramp is smooth. Find the maximum compression of the
spring.

<details>
<summary>Solution</summary>

Height descended: $h = 0.5\sin 30^\circ = 0.25 \mathrm{ m}$

$$mgh = \frac{1}{2}kx^2$$

$$2 \times 9.81 \times 0.25 = \frac{1}{2}(200)x^2$$

$$4.905 = 100x^2 \implies x^2 = 0.04905 \implies x = 0.222 \mathrm{ m}$$

</details>

If you get this wrong, revise: Conservation of Energy / Elastic Potential Energy

**Problem 5.** A $1200 \mathrm{ kg}$ car accelerates from rest to $25 \mathrm{ m/s}$ in
$8 \mathrm{ s}$ on a level road. The average resistive force is $400 \mathrm{ N}$. Find the
average power output of the engine.

<details>
<summary>Solution</summary>

Final KE: $E_k = \frac{1}{2}(1200)(25^2) = 375000 \mathrm{ J}$

Work against resistance: $W_r = 400 \times d$, where $d = \frac{1}{2}(0 + 25) \times 8 = 100 \mathrm{ m}$

$$W_r = 400 \times 100 = 40000 \mathrm{ J}$$

Total work by engine: $W_{\mathrm{engine}} = 375000 + 40000 = 415000 \mathrm{ J}$

$$P_{\mathrm{avg}} = \frac{W_{\mathrm{engine}}}{t} = \frac{415000}{8} = 51875 \mathrm{ W} = 51.9 \mathrm{ kW}$$

</details>

If you get this wrong, revise: Power and Work Done by a Force

**Problem 6.** A pendulum bob of mass $0.2 \mathrm{ kg}$ is released from a height of
$0.4 \mathrm{ m}$ above its lowest point. At the lowest point, $20\%$ of its energy is lost to
air resistance during the swing. Find the speed at the lowest point and the maximum height on the
other side.

<details>
<summary>Solution</summary>

Initial PE: $E_p = mgh = 0.2 \times 9.81 \times 0.4 = 0.785 \mathrm{ J}$

KE at lowest point (80% of initial energy):
$E_k = 0.80 \times 0.785 = 0.628 \mathrm{ J}$

$$v = \sqrt{\frac{2E_k}{m}} = \sqrt{\frac{2 \times 0.628}{0.2}} = \sqrt{6.28} = 2.51 \mathrm{ m/s}$$

If another $20\%$ is lost on the upswing: remaining energy $= 0.8^2 \times 0.785 = 0.502 \mathrm{ J}$

$$h_{\mathrm{max}} = \frac{E_{\mathrm{remaining}}}{mg} = \frac{0.502}{0.2 \times 9.81} = 0.256 \mathrm{ m}$$

</details>

If you get this wrong, revise: Conservation of Energy

**Problem 7.** A mass-spring system oscillates with amplitude $0.05 \mathrm{ m}$ and total energy
$0.5 \mathrm{ J}$. The mass is $0.4 \mathrm{ kg}$. Find the spring constant and the speed when the
displacement is $0.03 \mathrm{ m}$.

<details>
<summary>Solution</summary>

$$E_{\mathrm{total}} = \frac{1}{2}kA^2 \implies k = \frac{2E_{\mathrm{total}}}{A^2} = \frac{2 \times 0.5}{0.05^2} = \frac{1}{0.0025} = 400 \mathrm{ N/m}$$

At $x = 0.03 \mathrm{ m}$:

$$E_k = E_{\mathrm{total}} - \frac{1}{2}kx^2 = 0.5 - \frac{1}{2}(400)(0.0009) = 0.5 - 0.18 = 0.32 \mathrm{ J}$$

$$v = \sqrt{\frac{2E_k}{m}} = \sqrt{\frac{2 \times 0.32}{0.4}} = \sqrt{1.6} = 1.26 \mathrm{ m/s}$$

</details>

If you get this wrong, revise: Energy in Simple Harmonic Motion

**Problem 8.** An electric kettle rated at $2000 \mathrm{ W}$ takes $3$ minutes to boil
$0.8 \mathrm{ kg}$ of water from $20^\circ\mathrm{C}$ to $100^\circ\mathrm{C}$. Find the
efficiency of the kettle. (Specific heat capacity of water $= 4200 \mathrm{ J/(kg\cdot{}^\circ C)}$)

<details>
<summary>Solution</summary>

Useful energy: $Q = mc\Delta T = 0.8 \times 4200 \times (100 - 20) = 0.8 \times 4200 \times 80 = 268800 \mathrm{ J}$

Electrical energy supplied: $E_{\mathrm{in}} = Pt = 2000 \times 3 \times 60 = 360000 \mathrm{ J}$

$$\mathrm{Efficiency} = \frac{268800}{360000} \times 100\% = 74.7\%$$

</details>

If you get this wrong, revise: Efficiency

**Problem 9.** A force of $F = 3x^2 \mathrm{ N}$ (where $x$ is in metres) acts on an object
moving along the x-axis from $x = 0$ to $x = 2 \mathrm{ m}$. Find the work done.

<details>
<summary>Solution</summary>

$$W = \int_{0}^{2} 3x^2\, dx = \left[x^3\right]_0^2 = 8 - 0 = 8.0 \mathrm{ J}$$

</details>

If you get this wrong, revise: Work Done by a Variable Force

**Problem 10.** A $60 \mathrm{ kg}$ student runs up a flight of stairs in $5 \mathrm{ s}$. The
vertical height of the stairs is $6 \mathrm{ m}$. Find the average power developed by the student.

<details>
<summary>Solution</summary>

$$P = \frac{mgh}{t} = \frac{60 \times 9.81 \times 6}{5} = \frac{3531.6}{5} = 706 \mathrm{ W}$$

</details>

If you get this wrong, revise: Power

For the A-Level treatment of this topic, see [Work, Energy and Power](https://alevel.wyattau.com/docs/physics/mechanics/work-energy-power).

