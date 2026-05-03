---
title: Magnetism and Electromagnetism
description: "DSE Physics magnetism and electromagnetism notes covering magnetic fields, electromagnetic induction, transformers, motors, generators, and magnetic materials."
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: magnetism-and-electromagnetism
---

## Magnetic Fields

### Magnetic Force

A magnetic field is a region where a magnetic force acts on magnetic materials, current-carrying
conductors, or moving charges. Magnetic field lines emerge from the north pole and enter the south
pole of a magnet. They never cross.

### Magnetic Flux Density

The magnetic flux density $B$ (also called the magnetic field strength) is defined by the force on a
current-carrying conductor:

$$F = BIL\sin\theta$$

where $I$ is the current, $L$ is the length of conductor in the field, and $\theta$ is the angle
between the current direction and the field direction. The SI unit of $B$ is the tesla (T).

Rearranging: $1 \mathrm{ T} = 1 \mathrm{ N/(A\cdot m)}$.

### Force on a Moving Charge

A charge $q$ moving with velocity $v$ in a magnetic field experiences a force:

$$F = qvB\sin\theta$$

The force is perpendicular to both the velocity and the field (determined by Fleming's Left-Hand
Rule for positive charges).

### Worked Example 1

An electron (charge $1.6 \times 10^{-19} \mathrm{ C}$, mass $9.11 \times 10^{-31} \mathrm{ kg}$)
enters a uniform magnetic field of $0.5 \mathrm{ T}$ perpendicular to its velocity at
$3 \times 10^6 \mathrm{ m/s}$. Find the radius of its circular path.

<details>
<summary>Solution</summary>

The magnetic force provides the centripetal force:

$$qvB = \frac{mv^2}{r}$$

$$r = \frac{mv}{qB} = \frac{9.11 \times 10^{-31} \times 3 \times 10^6}{1.6 \times 10^{-19} \times 0.5} = \frac{2.733 \times 10^{-24}}{8 \times 10^{-20}} = 3.42 \times 10^{-5} \mathrm{ m}$$

</details>

### Worked Example 2

A wire of length $0.4 \mathrm{ m}$ carries a current of $5 \mathrm{ A}$ at $30^\circ$ to a
magnetic field of flux density $0.6 \mathrm{ T}$. Find the magnetic force on the wire.

<details>
<summary>Solution</summary>

$$F = BIL\sin\theta = 0.6 \times 5 \times 0.4 \times \sin 30^\circ = 0.6 \times 5 \times 0.4 \times 0.5 = 0.60 \mathrm{ N}$$

</details>

---

## Electromagnets

### Magnetic Field of a Current-Carrying Wire

A long straight wire carrying current $I$ produces a magnetic field at distance $r$:

$$B = \frac{\mu_0 I}{2\pi r}$$

where $\mu_0 = 4\pi \times 10^{-7} \mathrm{ T\, m/A}$ is the permeability of free space.

The field lines are concentric circles around the wire. The direction is given by the right-hand
grip rule: if the thumb points in the direction of conventional current, the fingers curl in the
direction of the field.

### Force Between Two Parallel Current-Carrying Wires

Two parallel wires carrying currents $I_1$ and $I_2$ separated by distance $d$ experience a force
per unit length:

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$$

The force is attractive if the currents flow in the same direction and repulsive if they flow in
opposite directions.

### Magnetic Field of a Solenoid

Inside a long solenoid with $n$ turns per unit length carrying current $I$:

$$B = \mu_0 n I$$

The field inside a long solenoid is approximately uniform and parallel to the axis. Outside the
solenoid, the field is approximately zero.

### Worked Example 3

A solenoid of length $0.25 \mathrm{ m}$ has 500 turns and carries a current of $3 \mathrm{ A}$. Find
the magnetic flux density inside the solenoid.

<details>
<summary>Solution</summary>

$$n = \frac{N}{L} = \frac{500}{0.25} = 2000 \mathrm{ turns/m}$$

$$B = \mu_0 n I = 4\pi \times 10^{-7} \times 2000 \times 3 = 4\pi \times 10^{-7} \times 6000 = 7.54 \times 10^{-3} \mathrm{ T} = 7.54 \mathrm{ mT}$$

</details>

### Worked Example 4

Two parallel wires $0.1 \mathrm{ m}$ apart carry currents of $10 \mathrm{ A}$ and $15 \mathrm{ A}$ in
the same direction. Find the force per unit length between them and state whether it is attractive
or repulsive.

<details>
<summary>Solution</summary>

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d} = \frac{4\pi \times 10^{-7} \times 10 \times 15}{2\pi \times 0.1} = \frac{6\pi \times 10^{-5}}{0.2\pi} = 3.0 \times 10^{-4} \mathrm{ N/m}$$

Since the currents flow in the same direction, the force is **attractive**.

</details>

---

## Motor Effect

### Force on a Current-Carrying Conductor

When a current-carrying conductor is placed in a magnetic field, it experiences a force given by
$F = BIL\sin\theta$.

The direction of the force is determined by **Fleming's Left-Hand Rule**:

- First finger: direction of the magnetic field ($B$)
- Second finger: direction of conventional current ($I$)
- Thumb: direction of the force ($F$)

### DC Motor

A simple DC motor converts electrical energy to mechanical energy. A rectangular coil rotates in a
uniform magnetic field. A commutator (split-ring) reverses the current direction every half-turn,
ensuring continuous rotation.

The torque on the coil:

$$\tau = nBIA\sin\alpha$$

where $n$ is the number of turns, $A$ is the area of the coil, and $\alpha$ is the angle between the
normal to the coil and the magnetic field.

### Worked Example 5

A rectangular coil of 200 turns, dimensions $0.05 \mathrm{ m} \times 0.08 \mathrm{ m}$, carries a
current of $0.5 \mathrm{ A}$ in a magnetic field of $0.3 \mathrm{ T}$. Find the maximum torque.

<details>
<summary>Solution</summary>

$$A = 0.05 \times 0.08 = 0.004 \mathrm{ m}^2$$

Maximum torque occurs when $\sin\alpha = 1$:

$$\tau_{\max} = nBIA = 200 \times 0.3 \times 0.5 \times 0.004 = 0.12 \mathrm{ N\, m}$$

</details>

### Worked Example 6

A DC motor has a rectangular coil of 100 turns, area $0.01 \mathrm{ m}^2$, in a field of
$0.4 \mathrm{ T}$. When the coil carries a current of $2 \mathrm{ A}$, find the torque when the
normal to the coil makes an angle of $60^\circ$ with the field.

<details>
<summary>Solution</summary>

$$\tau = nBIA\sin\alpha = 100 \times 0.4 \times 2 \times 0.01 \times \sin 60^\circ = 0.8 \times 0.866 = 0.693 \mathrm{ N\, m}$$

</details>

---

## Electromagnetic Induction

### Faraday's Law

<PhetSimulation simulationId="faraday" title="Faraday's Electromagnetic Lab" />

Move magnets and coils to observe how changing magnetic flux induces an EMF.

An EMF is induced in a circuit whenever there is a change in the magnetic flux linking the circuit:

$$\varepsilon = -N\frac{d\Phi}{dt}$$

where $N$ is the number of turns and $\Phi$ is the magnetic flux.

### Magnetic Flux

$$\Phi = BA\cos\theta$$

where $A$ is the area and $\theta$ is the angle between the field and the normal to the area. The SI
unit of flux is the weber (Wb), where $1 \mathrm{ Wb} = 1 \mathrm{ T\, m}^2$.

### Lenz's Law

The direction of the induced EMF is such that it opposes the change producing it. This is the
physical basis of the negative sign in Faraday's law.

### Methods of Inducing EMF

| Method                               | Description                               |
| ------------------------------------ | ----------------------------------------- |
| Changing the magnetic field strength | Varying $B$ through a stationary coil     |
| Changing the area                    | Moving a conductor into or out of a field |
| Changing the orientation             | Rotating a coil in a field                |
| Moving a conductor                   | Cutting magnetic field lines              |

### Motional EMF

A conductor of length $L$ moving at velocity $v$ perpendicular to a field $B$:

$$\varepsilon = BLv$$

### Worked Example 7

A straight wire of length $0.3 \mathrm{ m}$ moves perpendicular to a magnetic field of
$0.4 \mathrm{ T}$ at a speed of $5 \mathrm{ m/s}$. Find the induced EMF.

<details>
<summary>Solution</summary>

$$\varepsilon = BLv = 0.4 \times 0.3 \times 5 = 0.6 \mathrm{ V}$$

</details>

### Worked Example 8

A coil of 200 turns and cross-sectional area $0.02 \mathrm{ m}^2$ is placed perpendicular to a
magnetic field. The field decreases uniformly from $0.5 \mathrm{ T}$ to $0.1 \mathrm{ T}$ in
$0.04 \mathrm{ s}$. Find the average induced EMF.

<details>
<summary>Solution</summary>

Change in flux through one turn:

$$\Delta\Phi = \Delta B \times A = (0.5 - 0.1) \times 0.02 = 0.4 \times 0.02 = 0.008 \mathrm{ Wb}$$

By Faraday's law:

$$\varepsilon = N\frac{\Delta\Phi}{\Delta t} = 200 \times \frac{0.008}{0.04} = 200 \times 0.2 = 40.0 \mathrm{ V}$$

By Lenz's law, the induced EMF opposes the decrease in flux, so it acts to maintain the original
field direction.

</details>

---

## Transformers

### Principle

A transformer changes the voltage of an alternating current. It consists of a primary coil and a
secondary coil wound on a soft iron core.

### Transformer Equation

$$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$

For an ideal transformer (100% efficiency), power is conserved:

$$V_p I_p = V_s I_s$$

### Efficiency

In practice, energy losses occur due to:

- Copper losses ($I^2 R$ heating in the windings)
- Eddy currents in the iron core
- Hysteresis losses in the iron core
- Magnetic flux leakage

$$\mathrm{Efficiency} = \frac{V_s I_s}{V_p I_p} \times 100\%$$

### Step-up and Step-down Transformers

| Type      | Turns ratio   | Effect                               |
| --------- | ------------- | ------------------------------------ |
| Step-up   | $N_s \gt N_p$ | Increases voltage, decreases current |
| Step-down | $N_s \lt N_p$ | Decreases voltage, increases current |

### Worked Example 9

A step-down transformer has 2000 turns on the primary and 100 turns on the secondary. The primary
voltage is $240 \mathrm{ V}$ and the primary current is $0.5 \mathrm{ A}$. Find the secondary
voltage and the maximum secondary current (assuming 90% efficiency).

<details>
<summary>Solution</summary>

$$V_s = V_p \times \frac{N_s}{N_p} = 240 \times \frac{100}{2000} = 12 \mathrm{ V}$$

$$I_{s,\max} = \frac{\eta V_p I_p}{V_s} = \frac{0.90 \times 240 \times 0.5}{12} = \frac{108}{12} = 9.0 \mathrm{ A}$$

</details>

### Worked Example 10

A step-up transformer at a power station increases the voltage from $25 \mathrm{ kV}$ to
$250 \mathrm{ kV}$. The primary current is $400 \mathrm{ A}$ and the transformer is 95% efficient.
Find the secondary current and the power loss in the transformer.

<details>
<summary>Solution</summary>

Ideal secondary current:

$$I_{s,\mathrm{ideal}} = \frac{V_p I_p}{V_s} = \frac{25000 \times 400}{250000} = 40.0 \mathrm{ A}$$

Actual secondary current (accounting for efficiency):

$$I_s = \eta \times I_{s,\mathrm{ideal}} = 0.95 \times 40.0 = 38.0 \mathrm{ A}$$

Power input: $P_{\mathrm{in}} = V_p I_p = 25000 \times 400 = 10.0 \times 10^6 \mathrm{ W} = 10.0 \mathrm{ MW}$

Power output: $P_{\mathrm{out}} = \eta \times P_{\mathrm{in}} = 0.95 \times 10.0 = 9.5 \mathrm{ MW}$

Power loss: $P_{\mathrm{loss}} = P_{\mathrm{in}} - P_{\mathrm{out}} = 10.0 - 9.5 = 0.5 \mathrm{ MW}$

</details>

---

## Common Pitfalls

- Confusing Fleming's Left-Hand Rule (for motors/force) with Fleming's Right-Hand Rule (for
  generators/induced current).
- Forgetting that the magnetic force on a moving charge is always perpendicular to its velocity,
  meaning the force does no work and does not change the particle's speed.
- Misapplying Lenz's law. The induced current opposes the **change** in flux, not the flux itself.
- Using DC in a transformer. Transformers only work with alternating current because a changing
  magnetic flux is required.
- Confusing magnetic flux density $B$ with magnetic flux $\Phi$. Remember $\Phi = BA\cos\theta$.

---

## Summary Table

| Topic              | Key Formula                | Key Concept               |
| ------------------ | -------------------------- | ------------------------- |
| Force on conductor | $F = BIL\sin\theta$        | Fleming's Left-Hand Rule  |
| Force on charge    | $F = qvB\sin\theta$        | Perpendicular to v and B  |
| Wire field         | $B = \mu_0 I/(2\pi r)$     | Right-hand grip rule      |
| Solenoid field     | $B = \mu_0 n I$            | Uniform inside            |
| Faraday's Law      | $\varepsilon = -Nd\Phi/dt$ | Changing flux induces EMF |
| Lenz's Law         | Induced EMF opposes change | Conservation of energy    |
| Motional EMF       | $\varepsilon = BLv$        | Cutting field lines       |
| Transformer        | $V_s/V_p = N_s/N_p$        | AC only                   |

---

## Problem Set

**Problem 1.** An electron travels at $4 \times 10^6 \mathrm{ m/s}$ perpendicular to a magnetic
field of $0.8 \mathrm{ T}$. Find the magnetic force on the electron and the radius of its circular
path. (Electron charge $= 1.6 \times 10^{-19} \mathrm{ C}$, mass $= 9.11 \times 10^{-31} \mathrm{ kg}$)

<details>
<summary>Solution</summary>

$$F = qvB = 1.6 \times 10^{-19} \times 4 \times 10^6 \times 0.8 = 5.12 \times 10^{-13} \mathrm{ N}$$

$$r = \frac{mv}{qB} = \frac{9.11 \times 10^{-31} \times 4 \times 10^6}{1.6 \times 10^{-19} \times 0.8} = \frac{3.644 \times 10^{-24}}{1.28 \times 10^{-19}} = 2.85 \times 10^{-5} \mathrm{ m}$$

</details>

If you get this wrong, revise: Magnetic Fields / Force on a Moving Charge

**Problem 2.** A proton (charge $1.6 \times 10^{-19} \mathrm{ C}$, mass
$1.67 \times 10^{-27} \mathrm{ kg}$) moves in a circle of radius $0.05 \mathrm{ m}$ in a uniform
magnetic field of $0.2 \mathrm{ T}$ with its velocity perpendicular to the field. Find the speed of
the proton.

<details>
<summary>Solution</summary>

$$r = \frac{mv}{qB} \implies v = \frac{qBr}{m} = \frac{1.6 \times 10^{-19} \times 0.2 \times 0.05}{1.67 \times 10^{-27}} = \frac{1.6 \times 10^{-21}}{1.67 \times 10^{-27}} = 9.58 \times 10^5 \mathrm{ m/s}$$

</details>

If you get this wrong, revise: Magnetic Fields / Force on a Moving Charge

**Problem 3.** A straight wire of length $0.15 \mathrm{ m}$ carries a current of $8 \mathrm{ A}$ in
a magnetic field of $0.6 \mathrm{ T}$. The wire makes an angle of $30^\circ$ with the field. Find
the force on the wire.

<details>
<summary>Solution</summary>

$$F = BIL\sin\theta = 0.6 \times 8 \times 0.15 \times \sin 30^\circ = 0.6 \times 8 \times 0.15 \times 0.5 = 0.36 \mathrm{ N}$$

</details>

If you get this wrong, revise: Magnetic Fields / Magnetic Flux Density

**Problem 4.** A solenoid of length $0.3 \mathrm{ m}$ has 600 turns. What current is needed to
produce a magnetic flux density of $0.01 \mathrm{ T}$ inside the solenoid?

<details>
<summary>Solution</summary>

$$n = \frac{N}{L} = \frac{600}{0.3} = 2000 \mathrm{ turns/m}$$

$$B = \mu_0 n I \implies I = \frac{B}{\mu_0 n} = \frac{0.01}{4\pi \times 10^{-7} \times 2000} = \frac{0.01}{2.513 \times 10^{-3}} = 3.98 \mathrm{ A}$$

</details>

If you get this wrong, revise: Electromagnets / Magnetic Field of a Solenoid

**Problem 5.** A rectangular coil of 100 turns, area $0.02 \mathrm{ m}^2$, carries a current of
$3 \mathrm{ A}$ in a magnetic field of $0.5 \mathrm{ T}$. Find the maximum torque and the torque
when the normal to the coil makes an angle of $45^\circ$ with the field.

<details>
<summary>Solution</summary>

Maximum torque (when $\sin\alpha = 1$):

$$\tau_{\max} = nBIA = 100 \times 0.5 \times 3 \times 0.02 = 3.0 \mathrm{ N\, m}$$

At $\alpha = 45^\circ$:

$$\tau = nBIA\sin 45^\circ = 3.0 \times 0.707 = 2.12 \mathrm{ N\, m}$$

</details>

If you get this wrong, revise: Motor Effect / DC Motor

**Problem 6.** A straight conductor of length $0.2 \mathrm{ m}$ moves at $8 \mathrm{ m/s}$
perpendicular to a magnetic field of $0.5 \mathrm{ T}$. The conductor is part of a complete circuit
with total resistance $2 \Omega$. Find the induced EMF and the induced current.

<details>
<summary>Solution</summary>

$$\varepsilon = BLv = 0.5 \times 0.2 \times 8 = 0.8 \mathrm{ V}$$

$$I = \frac{\varepsilon}{R} = \frac{0.8}{2} = 0.40 \mathrm{ A}$$

By Lenz's law, the induced current opposes the motion of the conductor (creates a force opposing
the motion via the motor effect).

</details>

If you get this wrong, revise: Electromagnetic Induction / Motional EMF

**Problem 7.** A coil of 50 turns and area $0.01 \mathrm{ m}^2$ is placed with its plane
perpendicular to a magnetic field that increases uniformly from $0.2 \mathrm{ T}$ to
$0.8 \mathrm{ T}$ in $0.05 \mathrm{ s}$. Find the induced EMF.

<details>
<summary>Solution</summary>

$$\Delta\Phi = \Delta B \times A = (0.8 - 0.2) \times 0.01 = 0.006 \mathrm{ Wb}$$

$$\varepsilon = N\frac{\Delta\Phi}{\Delta t} = 50 \times \frac{0.006}{0.05} = 50 \times 0.12 = 6.0 \mathrm{ V}$$

</details>

If you get this wrong, revise: Electromagnetic Induction / Faraday's Law

**Problem 8.** A rectangular coil of 100 turns, area $0.02 \mathrm{ m}^2$, rotates at
$50 \mathrm{ rev/s}$ in a magnetic field of $0.1 \mathrm{ T}$. The axis of rotation is
perpendicular to the field. Find the peak EMF.

<details>
<summary>Solution</summary>

$$\omega = 2\pi \times 50 = 314.2 \mathrm{ rad/s}$$

$$\varepsilon_{\max} = NAB\omega = 100 \times 0.02 \times 0.1 \times 314.2 = 62.8 \mathrm{ V}$$

</details>

If you get this wrong, revise: Electromagnetic Induction / Faraday's Law

**Problem 9.** A step-up transformer has 500 turns on the primary and 5000 turns on the secondary.
The primary voltage is $220 \mathrm{ V}$ and the primary current is $10 \mathrm{ A}$. Assuming
100% efficiency, find the secondary voltage and current. If the actual efficiency is 92%, what is
the actual secondary current?

<details>
<summary>Solution</summary>

Ideal case:

$$V_s = V_p \times \frac{N_s}{N_p} = 220 \times \frac{5000}{500} = 2200 \mathrm{ V}$$

$$I_s = \frac{V_p I_p}{V_s} = \frac{220 \times 10}{2200} = 1.0 \mathrm{ A}$$

With 92% efficiency:

$$I_{s,\mathrm{actual}} = \eta \times I_s = 0.92 \times 1.0 = 0.92 \mathrm{ A}$$

</details>

If you get this wrong, revise: Transformers / Efficiency

**Problem 10.** A power station generates $500 \mathrm{ MW}$ of power at $25 \mathrm{ kV}$. It is
transmitted through cables of total resistance $2 \Omega$. Find the power loss in the cables. If the
voltage is stepped up to $250 \mathrm{ kV}$ using an ideal transformer, find the new power loss.

<details>
<summary>Solution</summary>

At $25 \mathrm{ kV}$: $I = P/V = 500 \times 10^6 / 25000 = 20000 \mathrm{ A}$

$$P_{\mathrm{loss}} = I^2 R = (20000)^2 \times 2 = 8 \times 10^8 \mathrm{ W} = 800 \mathrm{ MW}$$

(This exceeds the generated power, showing that low-voltage transmission is impractical.)

At $250 \mathrm{ kV}$: $I = 500 \times 10^6 / 250000 = 2000 \mathrm{ A}$

$$P_{\mathrm{loss}} = (2000)^2 \times 2 = 8 \times 10^6 \mathrm{ W} = 8 \mathrm{ MW}$$

Stepping up the voltage reduces the transmission current by a factor of 10, reducing power loss by a
factor of 100.

</details>

If you get this wrong, revise: Transformers / Efficiency

For the A-Level treatment of this topic, see [Magnetic Fields](https://alevel.wyattau.com/docs/physics/fields/magnetic-fields).

---

:::tip Diagnostic Test
Ready to test your understanding of **Magnetism and Electromagnetism**? The [diagnostic test](/Physics/diagnostics/diag-magnetism-and-electromagnetism) contains the hardest questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Magnetism and Electromagnetism with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/Physics/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::

