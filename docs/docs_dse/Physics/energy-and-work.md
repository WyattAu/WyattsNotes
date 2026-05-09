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
efficiency of the kettle. (Specific heat capacity of water $= 4200 \mathrm{ J/(kg\cdot}^\circ C)}$)

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

---

:::tip
tip
Ready to test your understanding of **Energy and Work**? The [diagnostic test](/docs/dse/Physics/diagnostics/diag-energy-work) contains the hardest questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Energy and Work with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/dse/Physics/diagnostics/diagnostic-guide) for instructions on self-marking and building a personal test matrix.
:::

---

## Derivations

### Derivation: Work-Energy Theorem

Starting from Newton's second law for constant mass:

$$F = ma = m\frac{dv}{dt}$$

The work done by a net force over a displacement from $s_1$ to $s_2$:

$$W = \int_{s_1}^{s_2} F\, ds = \int_{s_1}^{s_2} m\frac{dv}{dt}\, ds = \int_{v_1}^{v_2} mv\, dv = \left[\frac{1}{2}mv^2\right]_{v_1}^{v_2} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

Therefore:

$$W_{\mathrm{net}} = \Delta E_k = E_{k,f} - E_{k,i}$$

This is the work-energy theorem: the net work done on an object equals its change in kinetic
energy.

### Derivation: Elastic Potential Energy of a Spring

For a spring obeying Hooke's law, $F = kx$, the force varies linearly with extension. The work
done in stretching the spring from $x = 0$ to $x = x$ is:

$$W = \int_0^x F\, dx' = \int_0^x kx'\, dx' = \left[\frac{1}{2}kx'^2\right]_0^x = \frac{1}{2}kx^2$$

This work is stored as elastic potential energy: $E_p = \frac{1}{2}kx^2$.

This is the area of a triangle under the force-extension graph (base $= x$, height $= kx$):

$$E_p = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times x \times kx = \frac{1}{2}kx^2$$

### Derivation: Escape Velocity

The escape velocity is the minimum speed needed for an object to escape a gravitational field
(i.e., reach infinity with zero kinetic energy). By conservation of energy:

$$\frac{1}{2}mv_e^2 - \frac{GMm}{R} = 0 + 0$$

$$\frac{1}{2}mv_e^2 = \frac{GMm}{R}$$

$$v_e = \sqrt{\frac{2GM}{R}}$$

For Earth: $v_e = \sqrt{\frac{2 \times 6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.37 \times 10^6}} = \sqrt{1.25 \times 10^8} = 11200 \mathrm{ m/s} \approx 11.2 \mathrm{ km/s}$

### Derivation: Power-Velocity Relation

$$P = \frac{dW}{dt} = \frac{d(Fs)}{dt} = F\frac{ds}{dt} = Fv$$

More generally, $P = \vec{F} \cdot \vec{v} = Fv\cos\theta$, where $\theta$ is the angle between
the force and velocity vectors.

---

## Experimental Methods

### Determining the Spring Constant Using Energy Conservation

**Apparatus:** A spring, a set of known masses, a metre rule, and a motion sensor (or video analysis).

**Procedure:**
1. Hang the spring vertically and attach a mass $m$.
2. Pull the mass down a known distance $x_0$ from the equilibrium position and release.
3. Measure the maximum speed $v_{\max}$ at the equilibrium position using a motion sensor.
4. By energy conservation: $\frac{1}{2}kx_0^2 = \frac{1}{2}mv_{\max}^2$
5. Calculate: $k = m\frac{v_{\max}^2}{x_0^2}$
6. Repeat for different masses and extensions, plot $v_{\max}^2$ versus $x_0^2$, and find the
   gradient $= k/m$.

**Comparison with static method:** The static method (measuring extension under different loads)
assumes Hooke's law is obeyed. The dynamic method verifies this independently through energy
conservation.

### Verifying Conservation of Energy on an Inclined Plane

**Apparatus:** An inclined plane, a trolley, light gates, a metre rule, and a mass balance.

**Procedure:**
1. Measure the mass $m$ of the trolley.
2. Set the inclined plane at angle $\theta$ and measure the height $h$ from the top to the
   bottom.
3. Release the trolley from rest at the top and use light gates to measure the speed $v$ at
   the bottom.
4. Calculate: $\Delta E_p = mgh$ and $E_k = \frac{1}{2}mv^2$.
5. Compare $\Delta E_p$ with $E_k$. The difference is the work done against friction.
6. Vary $\theta$ and plot $E_k/E_p$ versus $\theta$ to see how the fraction of energy
   conserved changes.

### Investigating Power Output of a Motor

**Apparatus:** A small electric motor, a string, a set of masses, a metre rule, a stopwatch,
an ammeter, and a voltmeter.

**Procedure:**
1. Attach a mass $m$ to the motor via a string over a pulley.
2. Measure the time $t$ for the motor to lift the mass through a height $h$.
3. Record the voltage $V$ and current $I$.
4. Calculate useful power: $P_{\mathrm{out}} = mgh/t$.
5. Calculate electrical power input: $P_{\mathrm{in}} = VI$.
6. Calculate efficiency: $\eta = P_{\mathrm{out}} / P_{\mathrm{in}}$.
7. Repeat for different masses and plot efficiency versus load.

**Expected result:** Efficiency is low for very light loads (most energy lost to overcoming
internal friction) and for very heavy loads (motor draws high current, high copper losses).
Maximum efficiency occurs at intermediate loads.

---

## Data Analysis and Uncertainty

### Uncertainty in Energy Calculations

When calculating $E_k = \frac{1}{2}mv^2$, the percentage uncertainty is:

$$\frac{\Delta E_k}{E_k} = \sqrt{\left(\frac{\Delta m}{m}\right)^2 + \left(2\frac{\Delta v}{v}\right)^2}$$

Note the factor of 2 on the velocity uncertainty because $E_k \propto v^2$.

**Example:** Mass $(0.200 \pm 0.001) \mathrm{ kg}$, velocity $(3.00 \pm 0.05) \mathrm{ m/s}$:

$$E_k = \frac{1}{2}(0.200)(3.00)^2 = 0.900 \mathrm{ J}$$

$$\frac{\Delta E_k}{E_k} = \sqrt{\left(\frac{0.001}{0.200}\right)^2 + \left(2 \times \frac{0.05}{3.00}\right)^2} = \sqrt{0.000025 + 0.001111} = \sqrt{0.001136} = 0.0337 = 3.4\%$$

$$\Delta E_k = 0.034 \times 0.900 = 0.031 \mathrm{ J}$$

$$E_k = (0.90 \pm 0.03) \mathrm{ J}$$

### Linearising Energy Data

To verify $E_k \propto v^2$: plot $E_k$ (y-axis) versus $v^2$ (x-axis). A straight line through
the origin confirms the relationship, and the gradient equals $m/2$.

To verify $E_p \propto h$: plot $E_p$ (y-axis) versus $h$ (x-axis). A straight line through the
origin with gradient $mg$ confirms the relationship.

---

## Additional Worked Examples

### Worked Example 10

A $0.5 \mathrm{ kg}$ ball is thrown vertically upward with speed $15 \mathrm{ m/s}$ from the
top of a building $20 \mathrm{ m}$ tall. Air resistance is negligible. Find:
(a) the maximum height above the ground reached by the ball,
(b) the speed of the ball just before it hits the ground.

<details>
<summary>Solution</summary>

(a) At maximum height above the launch point, $v = 0$:

$$h_{\max} = \frac{v_0^2}{2g} = \frac{15^2}{2 \times 9.81} = \frac{225}{19.62} = 11.47 \mathrm{ m}$$

Maximum height above ground: $H = 20 + 11.47 = 31.5 \mathrm{ m}$

(b) Taking ground as reference. Total energy at launch: $E = E_k + E_p = \frac{1}{2}(0.5)(225) + 0.5 \times 9.81 \times 20 = 56.25 + 98.1 = 154.35 \mathrm{ J}$

At ground level, all energy is kinetic:

$$\frac{1}{2}(0.5)v^2 = 154.35$$

$$v = \sqrt{\frac{2 \times 154.35}{0.5}} = \sqrt{617.4} = 24.8 \mathrm{ m/s}$$

</details>

### Worked Example 11

A spring of spring constant $200 \mathrm{ N/m}$ is compressed by $0.05 \mathrm{ m}$ and used
to launch a $0.1 \mathrm{ kg}$ ball horizontally from a table of height $1.5 \mathrm{ m}$. The
spring transfers $80\%$ of its energy to the ball. Find the horizontal distance the ball travels
before hitting the ground.

<details>
<summary>Solution</summary>

Energy stored in spring: $E_p = \frac{1}{2}(200)(0.05)^2 = 0.25 \mathrm{ J}$

Kinetic energy of ball: $E_k = 0.80 \times 0.25 = 0.20 \mathrm{ J}$

$$v = \sqrt{\frac{2E_k}{m}} = \sqrt{\frac{2 \times 0.20}{0.1}} = \sqrt{4.0} = 2.0 \mathrm{ m/s}$$

Time to fall $1.5 \mathrm{ m}$: $h = \frac{1}{2}gt^2 \implies t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \times 1.5}{9.81}} = \sqrt{0.306} = 0.553 \mathrm{ s}$

Horizontal distance: $d = vt = 2.0 \times 0.553 = 1.11 \mathrm{ m}$

</details>

### Worked Example 12

A car of mass $1200 \mathrm{ kg}$ accelerates uniformly from $10 \mathrm{ m/s}$ to $25 \mathrm{ m/s}$
over a distance of $200 \mathrm{ m}$ against a constant resistive force of $600 \mathrm{ N}$. Find
the average force developed by the engine and the average power.

<details>
<summary>Solution</summary>

Change in kinetic energy: $\Delta E_k = \frac{1}{2}(1200)(25^2 - 10^2) = 600(625 - 100) = 600 \times 525 = 315000 \mathrm{ J}$

Work against resistance: $W_r = 600 \times 200 = 120000 \mathrm{ J}$

Total work by engine: $W_{\mathrm{engine}} = \Delta E_k + W_r = 315000 + 120000 = 435000 \mathrm{ J}$

$$F_{\mathrm{engine}} = \frac{W_{\mathrm{engine}}}{d} = \frac{435000}{200} = 2175 \mathrm{ N}$$

Time taken: $d = \frac{1}{2}(u + v)t \implies t = \frac{2d}{u + v} = \frac{400}{35} = 11.43 \mathrm{ s}$

$$P_{\mathrm{avg}} = \frac{W_{\mathrm{engine}}}{t} = \frac{435000}{11.43} = 38060 \mathrm{ W} = 38.1 \mathrm{ kW}$$

</details>

---

## Exam-Style Questions

### Question 1 (DSE Structured)

A student investigates how the stopping distance of a car depends on its speed. She measures the
stopping distance $d$ from speed $v$ for several trials on a level road.

| Speed $v$ (m/s) | Stopping distance $d$ (m) |
| --------------- | ------------------------- |
| 5.0             | 4.2                       |
| 10.0            | 16.8                      |
| 15.0            | 37.5                      |
| 20.0            | 66.0                      |
| 25.0            | 103.0                     |

(a) Plot a graph of $d$ against $v^2$. What relationship does this suggest?

(b) The student suggests that the work done by friction equals the initial kinetic energy:
$\mu mgd = \frac{1}{2}mv^2$. Use the graph to find the coefficient of friction $\mu$.

(c) State two assumptions made in this model.

(d) Explain why the actual stopping distance is typically longer than the value predicted by this
model.

<details>
<summary>Solution</summary>

(a)

| $v^2$ (m$^2$/s$^2$) | $d$ (m) |
| -------------------- | ------- |
| 25                   | 4.2     |
| 100                  | 16.8    |
| 225                  | 37.5    |
| 400                  | 66.0    |
| 625                  | 103.0   |

The graph of $d$ versus $v^2$ is approximately a straight line through the origin, confirming
$d \propto v^2$.

(b) Gradient of the line of best fit:

$$\mathrm{Gradient} = \frac{\Delta d}{\Delta v^2} \approx \frac{103.0 - 4.2}{625 - 25} = \frac{98.8}{600} = 0.165 \mathrm{ s}^2$$

From $\mu mgd = \frac{1}{2}mv^2$: $d = \frac{v^2}{2\mu g}$, so gradient $= \frac{1}{2\mu g}$.

$$\mu = \frac{1}{2g \times \mathrm{gradient}} = \frac{1}{2 \times 9.81 \times 0.165} = \frac{1}{3.237} = 0.309$$

(c) Assumptions:
1. The braking force (friction) is constant throughout the stopping distance.
2. The road is level (no component of weight assists or opposes braking).
3. All the initial kinetic energy is converted to work against friction (no other energy losses
   or gains).

(d) In practice, the braking force is not constant: it builds up as the brakes engage, and may
decrease if the brakes overheat. Additionally, the driver's reaction time adds to the total
stopping distance (thinking distance + braking distance), and road conditions (wet, icy) may
reduce the friction coefficient.

</details>

### Question 2 (DSE Structured)

A roller coaster car of mass $500 \mathrm{ kg}$ starts from rest at point A, height $30 \mathrm{ m}$
above the ground. It descends to point B at height $5 \mathrm{ m}$, then rises to point C at height
$20 \mathrm{ m}$. The total energy lost to friction between A and C is $5000 \mathrm{ J}$.

(a) Calculate the speed of the car at point B, neglecting friction.

(b) Calculate the speed of the car at point C, including friction.

(c) If the average frictional force over the track from A to C is $200 \mathrm{ N}$, estimate the
total track length from A to C.

(d) The car then descends from C to D at ground level. If the same average frictional force acts,
find the speed at D.

<details>
<summary>Solution</summary>

(a) Conservation of energy from A to B (no friction):

$$\frac{1}{2}mv_B^2 = mg(h_A - h_B) = 500 \times 9.81 \times (30 - 5) = 500 \times 9.81 \times 25 = 122625 \mathrm{ J}$$

$$v_B = \sqrt{\frac{2 \times 122625}{500}} = \sqrt{490.5} = 22.1 \mathrm{ m/s}$$

(b) With friction from A to C:

$$E_{\mathrm{initial}} = mgh_A = 500 \times 9.81 \times 30 = 147150 \mathrm{ J}$$

$$E_{\mathrm{final}} = mgh_C + \frac{1}{2}mv_C^2 = 500 \times 9.81 \times 20 + \frac{1}{2}(500)v_C^2 = 98100 + 250v_C^2$$

$$147150 = 98100 + 250v_C^2 + 5000$$

$$250v_C^2 = 147150 - 98100 - 5000 = 44050$$

$$v_C = \sqrt{\frac{44050}{250}} = \sqrt{176.2} = 13.3 \mathrm{ m/s}$$

(c) Energy lost to friction $= 5000 \mathrm{ J} = f \times L = 200 \times L$:

$$L = \frac{5000}{200} = 25 \mathrm{ m}$$

(d) From C to D: $\Delta h = 20 \mathrm{ m}$.

Energy available: $mgh_C - W_{\mathrm{friction}}$

$$\frac{1}{2}mv_D^2 = \frac{1}{2}mv_C^2 + mg(h_C - h_D) - f \times L_{CD}$$

We need $L_{CD}$. From the height difference: the track length is at least $20 \mathrm{ m}$ (if
straight down), but the actual length depends on the track shape. Assuming similar track geometry
to the A-to-C section, we need more information. If we assume the track from C to D is $20 \mathrm{ m}$
(a minimum estimate):

$$\frac{1}{2}(500)v_D^2 = 44050 + 500 \times 9.81 \times 20 - 200 \times 20 = 44050 + 98100 - 4000 = 138150$$

$$v_D = \sqrt{\frac{2 \times 138150}{500}} = \sqrt{552.6} = 23.5 \mathrm{ m/s}$$

</details>

### Question 3 (DSE Structured)

(a) Define power and state its SI unit.

(b) A lift motor has a power output of $15 \mathrm{ kW}$. It lifts a total mass of
$1200 \mathrm{ kg}$ at constant speed. Calculate the speed of the lift.

(c) The lift is only $85\%$ efficient. Calculate the electrical power input.

(d) The motor has a label that says "15 kW, 240 V". Calculate the current it draws and the
cost of running it for 8 hours at `USD 1.20` per kWh.

<details>
<summary>Solution</summary>

(a) Power is the rate of doing work (or rate of energy transfer): $P = W/t$. SI unit: watt (W),
where $1 \mathrm{ W} = 1 \mathrm{ J/s}$.

(b) At constant speed, the force equals the weight: $F = mg = 1200 \times 9.81 = 11772 \mathrm{ N}$

$$v = \frac{P}{F} = \frac{15000}{11772} = 1.27 \mathrm{ m/s}$$

(c) $P_{\mathrm{in}} = \frac{P_{\mathrm{out}}}{\eta} = \frac{15000}{0.85} = 17647 \mathrm{ W} = 17.6 \mathrm{ kW}$

(d) Current at rated power: $I = \frac{P}{V} = \frac{15000}{240} = 62.5 \mathrm{ A}$

Energy consumed: $E = P_{\mathrm{in}} \times t = 17.647 \times 8 = 141.2 \mathrm{ kWh}$

Cost: $141.2 \times 1.20 = \$169.44$

</details>

### Question 4 (DSE Structured)

Two trolleys A and B are on a smooth horizontal track. Trolley A has mass $2.0 \mathrm{ kg}$ and
trolley B has mass $1.0 \mathrm{ kg}$. Trolley A moves towards B at $4.0 \mathrm{ m/s}$ and
trolley B is stationary. They collide and stick together.

(a) Calculate the velocity of the combined trolleys after the collision.

(b) Calculate the kinetic energy before and after the collision, and the energy lost.

(c) Explain why kinetic energy is not conserved in this collision, even though momentum is.

(d) If the collision were elastic instead, calculate the velocities of both trolleys after the
collision.

<details>
<summary>Solution</summary>

(a) By conservation of momentum:

$$m_A u_A = (m_A + m_B)v$$

$$2.0 \times 4.0 = (2.0 + 1.0)v$$

$$v = \frac{8.0}{3.0} = 2.67 \mathrm{ m/s}$$

(b) Before: $E_{k,i} = \frac{1}{2}(2.0)(4.0)^2 = 16.0 \mathrm{ J}$

After: $E_{k,f} = \frac{1}{2}(3.0)(2.67)^2 = \frac{1}{2}(3.0)(7.13) = 10.7 \mathrm{ J}$

Energy lost: $\Delta E_k = 16.0 - 10.7 = 5.3 \mathrm{ J}$ (converted to thermal energy, sound,
and deformation)

(c) Momentum is always conserved in a closed system because there is no external force. Kinetic
energy is only conserved in perfectly elastic collisions. In this perfectly inelastic collision,
some kinetic energy is converted to other forms (heat, sound, permanent deformation) because the
objects stick together and deform. The work done in deforming the objects accounts for the
"missing" kinetic energy.

(d) For an elastic collision, both momentum and kinetic energy are conserved.

Momentum: $2.0 \times 4.0 = 2.0v_A + 1.0v_B \implies 8.0 = 2v_A + v_B \quad (1)$

KE: $\frac{1}{2}(2.0)(4.0)^2 = \frac{1}{2}(2.0)v_A^2 + \frac{1}{2}(1.0)v_B^2 \implies 16 = 2v_A^2 + \frac{1}{2}v_B^2 \quad (2)$

From (1): $v_B = 8 - 2v_A$. Substituting into (2):

$$16 = 2v_A^2 + \frac{1}{2}(8 - 2v_A)^2 = 2v_A^2 + \frac{1}{2}(64 - 32v_A + 4v_A^2) = 2v_A^2 + 32 - 16v_A + 2v_A^2$$

$$4v_A^2 - 16v_A + 32 = 16$$

$$4v_A^2 - 16v_A + 16 = 0$$

$$v_A^2 - 4v_A + 4 = 0$$

$$(v_A - 2)^2 = 0 \implies v_A = 2.0 \mathrm{ m/s}$$

$$v_B = 8 - 2(2) = 4.0 \mathrm{ m/s}$$

After the elastic collision: A moves at $2.0 \mathrm{ m/s}$ and B moves at $4.0 \mathrm{ m/s}$.
(A transfers all its "excess" speed to B.)

</details>

### Question 5 (DSE Structured)

A $3.0 \mathrm{ kg}$ block is attached to a spring of spring constant $150 \mathrm{ N/m}$ on a
smooth horizontal surface. The block is displaced $0.10 \mathrm{ m}$ from the equilibrium
position and released from rest.

(a) Calculate the total energy of the system.

(b) Calculate the maximum speed of the block.

(c) Calculate the speed of the block when it is $0.05 \mathrm{ m}$ from the equilibrium position.

(d) Calculate the acceleration of the block when it is $0.05 \mathrm{ m}$ from the equilibrium
position.

(e) Sketch a graph showing how the kinetic energy and potential energy vary with displacement
over one complete oscillation.

<details>
<summary>Solution</summary>

(a) $E_{\mathrm{total}} = \frac{1}{2}kA^2 = \frac{1}{2}(150)(0.10)^2 = \frac{1}{2}(150)(0.01) = 0.75 \mathrm{ J}$

(b) Maximum speed occurs at equilibrium ($x = 0$), where all energy is kinetic:

$$\frac{1}{2}mv_{\max}^2 = 0.75 \implies v_{\max} = \sqrt{\frac{2 \times 0.75}{3.0}} = \sqrt{0.50} = 0.707 \mathrm{ m/s}$$

(c) At $x = 0.05 \mathrm{ m}$:

$$E_k = E_{\mathrm{total}} - \frac{1}{2}kx^2 = 0.75 - \frac{1}{2}(150)(0.0025) = 0.75 - 0.1875 = 0.5625 \mathrm{ J}$$

$$v = \sqrt{\frac{2E_k}{m}} = \sqrt{\frac{2 \times 0.5625}{3.0}} = \sqrt{0.375} = 0.612 \mathrm{ m/s}$$

(d) $F = -kx = -150 \times 0.05 = -7.5 \mathrm{ N}$

$$a = \frac{F}{m} = \frac{-7.5}{3.0} = -2.5 \mathrm{ m/s}^2$$

(The negative sign indicates the acceleration is directed towards the equilibrium position.)

(e) The KE is maximum at $x = 0$ (parabolic decrease with $x$): $E_k = \frac{1}{2}k(A^2 - x^2)$.
The PE is maximum at $x = \pm A$ (parabolic increase with $x$): $E_p = \frac{1}{2}kx^2$.
The total energy $E_k + E_p = 0.75 \mathrm{ J}$ is constant (a horizontal line). The KE and PE
curves are inverted parabolas that sum to the constant total.

### Extended Derivation: Power Dissipated by a Falling Object

An object of mass $m$ falls from height $h$. The power dissipated by air resistance at any
instant is:

$$P_{\mathrm{air}} = F_{\mathrm{air}} \times v = (mg - ma) \times v$$

At terminal velocity, $a = 0$, so $F_{\mathrm{air}} = mg$ and:

$$P_{\mathrm{terminal}} = mgv_{\mathrm{terminal}}$$

The gravitational power input ($mgv$) exactly equals the power dissipated by air resistance.

### Extended Worked Example: Terminal Velocity

A raindrop of mass $5.0 \times 10^{-7} \mathrm{ kg}$ falls through air. The air resistance
force is given by $F_{\mathrm{air}} = kv^2$, where $k = 2.0 \times 10^{-5} \mathrm{ kg/m}$.
Calculate the terminal velocity.

<details>
<summary>Solution</summary>

At terminal velocity: $mg = kv_{\mathrm{terminal}}^2$

$$v_{\mathrm{terminal}} = \sqrt{\frac{mg}{k}} = \sqrt{\frac{5.0 \times 10^{-7} \times 9.81}{2.0 \times 10^{-5}}} = \sqrt{\frac{4.905 \times 10^{-6}}{2.0 \times 10^{-5}}} = \sqrt{0.245} = 0.495 \mathrm{ m/s}$$

</details>

### Extended Worked Example: Efficiency of a Machine

A machine lifts a load of $800 \mathrm{ kg}$ through $5.0 \mathrm{ m}$ in $30 \mathrm{ s}$. The
machine is powered by an electric motor connected to a $240 \mathrm{ V}$ supply drawing
$12 \mathrm{ A}$.

(a) Calculate the useful power output.
(b) Calculate the electrical power input.
(c) Calculate the efficiency.
(d) If the motor runs for 8 hours per day, calculate the daily energy cost at `USD 1.50` per
kWh.

<details>
<summary>Solution</summary>

(a) $P_{\mathrm{out}} = \frac{mgh}{t} = \frac{800 \times 9.81 \times 5.0}{30} = \frac{39240}{30} = 1308 \mathrm{ W}$

(b) $P_{\mathrm{in}} = VI = 240 \times 12 = 2880 \mathrm{ W}$

(c) $\eta = \frac{1308}{2880} \times 100\% = 45.4\%$

(d) Daily energy consumption: $E = P_{\mathrm{in}} \times t = 2880 \times 8 = 23040 \mathrm{ Wh} = 23.04 \mathrm{ kWh}$

Daily cost: $23.04 \times 1.50 = \$34.56$

</details>

</details>

