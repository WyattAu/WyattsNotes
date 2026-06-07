---
title: Magnetism and Electromagnetism
description:
  'DSE Physics Magnetism and Electromagnetism notes covering key definitions, core concepts, worked
  examples, and practice questions for effective revision.'
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
Conductors, or moving charges. Magnetic field lines emerge from the north pole and enter the south
Pole of a magnet. They never cross.

### Magnetic Flux Density

The magnetic flux density $B$ (also called the magnetic field strength) is defined by the force on a
Current-carrying conductor:

$$F = BIL\sin\theta$$

Where $I$ is the current, $L$ is the length of conductor in the field, and $\theta$ is the angle
Between the current direction and the field direction. The SI unit of $B$ is the tesla (T).

Rearranging: $1 \mathrm{ T} = 1 \mathrm{ N/(A\cdot m)}$.

### Force on a Moving Charge

A charge $q$ moving with velocity $v$ in a magnetic field experiences a force:

$$F = qvB\sin\theta$$

The force is perpendicular to both the velocity and the field (determined by Fleming's Left-Hand
Rule for positive charges).

### Worked Example 1

An electron (charge $1.6 \times 10^{-19} \mathrm{ C}$Mass $9.11 \times 10^{-31} \mathrm{ kg}$)
Enters a uniform magnetic field of $0.5 \mathrm{ T}$ perpendicular to its velocity at
$3 \times 10^6 \mathrm{ m/s}$. Find the radius of its circular path.

<details>
<summary>Solution</summary>

The magnetic force provides the centripetal force:

$$qvB = \frac{mv^2}{r}$$

$$r = \frac{mv}{qB} = \frac{9.11 \times 10^{-31} \times 3 \times 10^6}{1.6 \times 10^{-19} \times 0.5} = \frac{2.733 \times 10^{-24}}{8 \times 10^{-20}} = 3.42 \times 10^{-5} \mathrm{ m}$$

</details>

### Worked Example 2

A wire of length $0.4 \mathrm{ m}$ carries a current of $5 \mathrm{ A}$ at $30^\circ$ to a magnetic
Field of flux density $0.6 \mathrm{ T}$. Find the magnetic force on the wire.

<details>
<summary>Solution</summary>

$$F = BIL\sin\theta = 0.6 \times 5 \times 0.4 \times \sin 30^\circ = 0.6 \times 5 \times 0.4 \times 0.5 = 0.60 \mathrm{ N}$$

</details>

---

## Electromagnets

### Magnetic Field of a Current-Carrying Wire

A long straight wire carrying current $I$ produces a magnetic field at distance $r$:

$$B = \frac{\mu_0 I}{2\pi r}$$

Where $\mu_0 = 4\pi \times 10^{-7} \mathrm{ T\, m/A}$ is the permeability of free space.

The field lines are concentric circles around the wire. The direction is given by the right-hand
Grip rule: if the thumb points in the direction of conventional current, the fingers curl in the
Direction of the field.

### Force Between Two Parallel Current-Carrying Wires

Two parallel wires carrying currents $I_1$ and $I_2$ separated by distance $d$ experience a force
Per unit length:

$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$$

The force is attractive if the currents flow in the same direction and repulsive if they flow in
Opposite directions.

### Magnetic Field of a Solenoid

Inside a long solenoid with $n$ turns per unit length carrying current $I$:

$$B = \mu_0 n I$$

The field inside a long solenoid is approximately uniform and parallel to the axis. Outside the
Solenoid, the field is approximately zero.

### Worked Example 3

A solenoid of length $0.25 \mathrm{ m}$ has 500 turns and carries a current of $3 \mathrm{ A}$. Find
The magnetic flux density inside the solenoid.

<details>
<summary>Solution</summary>

$$n = \frac{N}{L} = \frac{500}{0.25} = 2000 \mathrm{ turns/m}$$

$$B = \mu_0 n I = 4\pi \times 10^{-7} \times 2000 \times 3 = 4\pi \times 10^{-7} \times 6000 = 7.54 \times 10^{-3} \mathrm{ T} = 7.54 \mathrm{ mT}$$

</details>

### Worked Example 4

Two parallel wires $0.1 \mathrm{ m}$ apart carry currents of $10 \mathrm{ A}$ and $15 \mathrm{ A}$
In the same direction. Find the force per unit length between them and state whether it is
Attractive or repulsive.

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
Uniform magnetic field. A commutator (split-ring) reverses the current direction every half-turn,
Ensuring continuous rotation.

The torque on the coil:

$$\tau = nBIA\sin\alpha$$

Where $n$ is the number of turns, $A$ is the area of the coil, and $\alpha$ is the angle between the
Normal to the coil and the magnetic field.

### Worked Example 5

A rectangular coil of 200 turns, dimensions $0.05 \mathrm{ m} \times 0.08 \mathrm{ m}$Carries a
Current of $0.5 \mathrm{ A}$ in a magnetic field of $0.3 \mathrm{ T}$. Find the maximum torque.

<details>
<summary>Solution</summary>

$$A = 0.05 \times 0.08 = 0.004 \mathrm{ m}^2$$

Maximum torque occurs when $\sin\alpha = 1$:

$$\tau_{\max} = nBIA = 200 \times 0.3 \times 0.5 \times 0.004 = 0.12 \mathrm{ N\, m}$$

</details>

### Worked Example 6

A DC motor has a rectangular coil of 100 turns, area $0.01 \mathrm{ m}^2$In a field of
$0.4 \mathrm{ T}$. When the coil carries a current of $2 \mathrm{ A}$Find the torque when the Normal
to the coil makes an angle of $60^\circ$ with the field.

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

Where $N$ is the number of turns and $\Phi$ is the magnetic flux.

### Magnetic Flux

$$\Phi = BA\cos\theta$$

Where $A$ is the area and $\theta$ is the angle between the field and the normal to the area. The SI
Unit of flux is the weber (Wb), where $1 \mathrm{ Wb} = 1 \mathrm{ T\, m}^2$.

### Lenz's Law

The direction of the induced EMF is such that it opposes the change producing it. This is the
Physical basis of the negative sign in Faraday's law.

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
Magnetic field. The field decreases uniformly from $0.5 \mathrm{ T}$ to $0.1 \mathrm{ T}$ in
$0.04 \mathrm{ s}$. Find the average induced EMF.

<details>
<summary>Solution</summary>

Change in flux through one turn:

$$\Delta\Phi = \Delta B \times A = (0.5 - 0.1) \times 0.02 = 0.4 \times 0.02 = 0.008 \mathrm{ Wb}$$

By Faraday's law:

$$\varepsilon = N\frac{\Delta\Phi}{\Delta t} = 200 \times \frac{0.008}{0.04} = 200 \times 0.2 = 40.0 \mathrm{ V}$$

By Lenz's law, the induced EMF opposes the decrease in flux, so it acts to maintain the original
Field direction.

</details>

---

## Transformers

### Principle

A transformer changes the voltage of an alternating current. It consists of a primary coil and a
Secondary coil wound on a soft iron core.

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
Voltage is $240 \mathrm{ V}$ and the primary current is $0.5 \mathrm{ A}$. Find the secondary
Voltage and the maximum secondary current (assuming 90% efficiency).

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

Power input:
$P_{\mathrm{in}} = V_p I_p = 25000 \times 400 = 10.0 \times 10^6 \mathrm{ W} = 10.0 \mathrm{ MW}$

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
Field of $0.8 \mathrm{ T}$. Find the magnetic force on the electron and the radius of its circular
Path. (Electron charge $= 1.6 \times 10^{-19} \mathrm{ C}$Mass
$= 9.11 \times 10^{-31} \mathrm{ kg}$)

<details>
<summary>Solution</summary>

$$F = qvB = 1.6 \times 10^{-19} \times 4 \times 10^6 \times 0.8 = 5.12 \times 10^{-13} \mathrm{ N}$$

$$r = \frac{mv}{qB} = \frac{9.11 \times 10^{-31} \times 4 \times 10^6}{1.6 \times 10^{-19} \times 0.8} = \frac{3.644 \times 10^{-24}}{1.28 \times 10^{-19}} = 2.85 \times 10^{-5} \mathrm{ m}$$

</details>

If you get this wrong, revise: Magnetic Fields / Force on a Moving Charge

**Problem 2.** A proton (charge $1.6 \times 10^{-19} \mathrm{ C}$Mass
$1.67 \times 10^{-27} \mathrm{ kg}$) moves in a circle of radius $0.05 \mathrm{ m}$ in a uniform
Magnetic field of $0.2 \mathrm{ T}$ with its velocity perpendicular to the field. Find the speed of
The proton.

<details>
<summary>Solution</summary>

$$r = \frac{mv}{qB} \implies v = \frac{qBr}{m} = \frac{1.6 \times 10^{-19} \times 0.2 \times 0.05}{1.67 \times 10^{-27}} = \frac{1.6 \times 10^{-21}}{1.67 \times 10^{-27}} = 9.58 \times 10^5 \mathrm{ m/s}$$

</details>

If you get this wrong, revise: Magnetic Fields / Force on a Moving Charge

**Problem 3.** A straight wire of length $0.15 \mathrm{ m}$ carries a current of $8 \mathrm{ A}$ in
A magnetic field of $0.6 \mathrm{ T}$. The wire makes an angle of $30^\circ$ with the field. Find
The force on the wire.

<details>
<summary>Solution</summary>

$$F = BIL\sin\theta = 0.6 \times 8 \times 0.15 \times \sin 30^\circ = 0.6 \times 8 \times 0.15 \times 0.5 = 0.36 \mathrm{ N}$$

</details>

If you get this wrong, revise: Magnetic Fields / Magnetic Flux Density

**Problem 4.** A solenoid of length $0.3 \mathrm{ m}$ has 600 turns. What current is needed to
Produce a magnetic flux density of $0.01 \mathrm{ T}$ inside the solenoid?

<details>
<summary>Solution</summary>

$$n = \frac{N}{L} = \frac{600}{0.3} = 2000 \mathrm{ turns/m}$$

$$B = \mu_0 n I \implies I = \frac{B}{\mu_0 n} = \frac{0.01}{4\pi \times 10^{-7} \times 2000} = \frac{0.01}{2.513 \times 10^{-3}} = 3.98 \mathrm{ A}$$

</details>

If you get this wrong, revise: Electromagnets / Magnetic Field of a Solenoid

**Problem 5.** A rectangular coil of 100 turns, area $0.02 \mathrm{ m}^2$Carries a current of
$3 \mathrm{ A}$ in a magnetic field of $0.5 \mathrm{ T}$. Find the maximum torque and the torque
When the normal to the coil makes an angle of $45^\circ$ with the field.

<details>
<summary>Solution</summary>

Maximum torque (when $\sin\alpha = 1$):

$$\tau_{\max} = nBIA = 100 \times 0.5 \times 3 \times 0.02 = 3.0 \mathrm{ N\, m}$$

At $\alpha = 45^\circ$:

$$\tau = nBIA\sin 45^\circ = 3.0 \times 0.707 = 2.12 \mathrm{ N\, m}$$

</details>

If you get this wrong, revise: Motor Effect / DC Motor

**Problem 6.** A straight conductor of length $0.2 \mathrm{ m}$ moves at $8 \mathrm{ m/s}$
Perpendicular to a magnetic field of $0.5 \mathrm{ T}$. The conductor is part of a complete circuit
With total resistance $2 \Omega$. Find the induced EMF and the induced current.

<details>
<summary>Solution</summary>

$$\varepsilon = BLv = 0.5 \times 0.2 \times 8 = 0.8 \mathrm{ V}$$

$$I = \frac{\varepsilon}{R} = \frac{0.8}{2} = 0.40 \mathrm{ A}$$

By Lenz's law, the induced current opposes the motion of the conductor (creates a force opposing the
Motion via the motor effect).

</details>

If you get this wrong, revise: Electromagnetic Induction / Motional EMF

**Problem 7.** A coil of 50 turns and area $0.01 \mathrm{ m}^2$ is placed with its plane
Perpendicular to a magnetic field that increases uniformly from $0.2 \mathrm{ T}$ to
$0.8 \mathrm{ T}$ in $0.05 \mathrm{ s}$. Find the induced EMF.

<details>
<summary>Solution</summary>

$$\Delta\Phi = \Delta B \times A = (0.8 - 0.2) \times 0.01 = 0.006 \mathrm{ Wb}$$

$$\varepsilon = N\frac{\Delta\Phi}{\Delta t} = 50 \times \frac{0.006}{0.05} = 50 \times 0.12 = 6.0 \mathrm{ V}$$

</details>

If you get this wrong, revise: Electromagnetic Induction / Faraday's Law

**Problem 8.** A rectangular coil of 100 turns, area $0.02 \mathrm{ m}^2$Rotates at
$50 \mathrm{ rev/s}$ in a magnetic field of $0.1 \mathrm{ T}$. The axis of rotation is perpendicular
To the field. Find the peak EMF.

<details>
<summary>Solution</summary>

$$\omega = 2\pi \times 50 = 314.2 \mathrm{ rad/s}$$

$$\varepsilon_{\max} = NAB\omega = 100 \times 0.02 \times 0.1 \times 314.2 = 62.8 \mathrm{ V}$$

</details>

If you get this wrong, revise: Electromagnetic Induction / Faraday's Law

**Problem 9.** A step-up transformer has 500 turns on the primary and 5000 turns on the secondary.
The primary voltage is $220 \mathrm{ V}$ and the primary current is $10 \mathrm{ A}$. Assuming 100%
Efficiency, find the secondary voltage and current. If the actual efficiency is 92%, what is the
Actual secondary current?

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
Transmitted through cables of total resistance $2 \Omega$. Find the power loss in the cables. If the
Voltage is stepped up to $250 \mathrm{ kV}$ using an ideal transformer, find the new power loss.

<details>
<summary>Solution</summary>

At $25 \mathrm{ kV}$: $I = P/V = 500 \times 10^6 / 25000 = 20000 \mathrm{ A}$

$$P_{\mathrm{loss}} = I^2 R = (20000)^2 \times 2 = 8 \times 10^8 \mathrm{ W} = 800 \mathrm{ MW}$$

(This exceeds the generated power, showing that low-voltage transmission is impractical.)

At $250 \mathrm{ kV}$: $I = 500 \times 10^6 / 250000 = 2000 \mathrm{ A}$

$$P_{\mathrm{loss}} = (2000)^2 \times 2 = 8 \times 10^6 \mathrm{ W} = 8 \mathrm{ MW}$$

Stepping up the voltage reduces the transmission current by a factor of 10, reducing power loss by a
Factor of 100.

</details>

If you get this wrong, revise: Transformers / Efficiency

For the A-Level treatment of this topic, see
[Magnetic Fields](https://alevel.wyattau.com/docs/physics/fields/magnetic-fields).

---

:::tip Tip [diagnostic test](/docs/dse/physics/diagnostics/diag-electricity-magnetism) contains the
hardest Questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Magnetism
And Electromagnetism with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/dse/physics/diagnostics/diagnostic-guide) for instructions on
Self-marking and building a personal test matrix.

---

## Derivations

### Derivation: Magnetic Flux Density from Force on a Conductor

The magnetic flux density $B$ is defined as the force per unit current per unit length on a
conductor Perpendicular to the field:

$$B = \frac{F}{IL}$$

When $\theta = 90^\circ$ (conductor perpendicular to the field). For an arbitrary angle, the
Perpendicular component of the current element is $IL\sin\theta$Giving:

$$F = BIL\sin\theta$$

This definition is equivalent to the Lorentz force on a moving charge. Since $I = nqv_d A$ for a
wire With $n$ charge carriers per unit volume, drift velocity $v_d$And cross-sectional area $A$And
the Number of charge carriers in length $L$ is $nAL$:

$$F = B(nqv_d A)L\sin\theta = B(nAL)qv_d\sin\theta$$

For a single charge: $F = qvB\sin\theta$.

### Derivation: Force Between Two Parallel Wires

Each wire produces a magnetic field at the location of the other. Consider wire 1 carrying current
$I_1$ Which produces a field at the position of wire 2 (distance $d$ away):

$$B_1 = \frac{\mu_0 I_1}{2\pi d}$$

Wire 2, carrying current $I_2$ in this field, experiences a force per unit length:

$$\frac{F}{L} = B_1 I_2 = \frac{\mu_0 I_1 I_2}{2\pi d}$$

The direction follows from Fleming's Left-Hand Rule: currents in the same direction produce an
Attractive force; opposite currents produce a repulsive force.

### Derivation: Motional EMF from Faraday's Law

A conducting rod of length $L$ moves with velocity $v$ perpendicular to a uniform field $B$. In time
$\Delta t$The rod sweeps out area $\Delta A = L \cdot v\Delta t$.

$$\varepsilon = \frac{\Delta\Phi}{\Delta t} = \frac{B\Delta A}{\Delta t} = \frac{B \cdot Lv\Delta t}{\Delta t} = BLv$$

By Lenz's law, the induced EMF drives a current that opposes the change in flux. The direction of
The induced current is found using Fleming's Right-Hand Rule (generator rule): thumb = motion, first
Finger = field, second finger = induced current.

### Derivation: EMF of a Rotating Coil (AC Generator)

A coil of $N$ turns, area $A$Rotating with angular velocity $\omega$ in a uniform field $B$. At Time
$t$The angle between the normal to the coil and the field is $\theta = \omega t$.

$$\Phi = NBA\cos(\omega t)$$

$$\varepsilon = -N\frac{d\Phi}{dt} = -N \cdot NBA(-\omega\sin\omega t) = NBA\omega\sin(\omega t)$$

The peak EMF is $\varepsilon_0 = NBA\omega$And the EMF varies sinusoidally.

---

## Experimental Methods

### Determining Magnetic Flux Density Using a Current Balance

**Apparatus:** A rectangular wire frame suspended from a balance, placed so the horizontal section
of The frame is in a uniform magnetic field (e.g., between the poles of a horseshoe magnet). A known
Current $I$ passes through the frame.

**Procedure:**

1. Measure the mass $m_0$ of the frame with no current.
2. Pass current $I$ through the frame and measure the new apparent mass $m_1$.
3. The force on the wire is $F = (m_0 - m_1)g$ (the wire is pushed up or down depending on
   direction).
4. The length $L$ of wire in the field is measured with a ruler.
5. Calculate $B = \frac{F}{IL} = \frac{(m_0 - m_1)g}{IL}$.

**Sources of error:**

- The field may not be perfectly uniform across the width of the wire.
- The wire may not be perfectly horizontal.
- The balance may have a zero error.
- The current may cause heating, altering the wire dimensions slightly.

**Improvements:** Repeat for different currents and plot $F$ versus $I$. The gradient of the
Straight line gives $BL$From which $B$ can be found. This averaging technique reduces random Errors.

### Measuring the Magnetic Field of a Solenoid

**Apparatus:** A long solenoid, DC power supply, ammeter, and a search coil (small coil of known
Turns and area) connected to a ballistic galvanometer or data logger.

**Procedure:**

1. Place the search coil at the centre of the solenoid.
2. Pass a known current $I$ through the solenoid and quickly switch it off (or reverse it).
3. The change in flux through the search coil induces a charge $Q$ in the circuit, measured by the
   ballistic galvanometer.
4. $Q = \frac{N\Delta\Phi}{R} = \frac{NA\Delta B}{R}$Where $R$ is the total circuit resistance.
5. From $\Delta B = \mu_0 n \Delta I$ (for switching off, $\Delta I = I$), verify $B = \mu_0 n I$.

### Verifying Faraday's Law

**Apparatus:** A coil of $N$ turns connected to a data logger or oscilloscope. A bar magnet is
Dropped through the coil from a known height.

**Procedure:**

1. Record the induced EMF as a function of time as the magnet falls through the coil.
2. The area under the EMF-time graph gives the total change in flux linkage.
3. Vary the speed by changing the drop height and show that the peak EMF increases with speed, but
   the total flux change (integral) remains the same.
4. This confirms that $\varepsilon = -d\Phi/dt$: faster change gives larger EMF, but the same total
   flux change.

### Investigating Transformer Efficiency

**Apparatus:** A step-up or step-down transformer, AC power supply, voltmeters, ammeters, and
Resistive load.

**Procedure:**

1. Measure the primary voltage $V_p$ and current $I_p$.
2. Measure the secondary voltage $V_s$ and current $I_s$.
3. Calculate efficiency: $\eta = \frac{V_s I_s}{V_p I_p} \times 100\%$.
4. Vary the load resistance and plot efficiency versus load current.
5. The turns ratio can be verified: $V_s/V_p$ should equal $N_s/N_p$.

**Expected result:** Efficiency is highest at moderate loads and decreases at very low or very high
Loads due to constant iron losses (dominant at low loads) and increasing copper losses
($I^2R$Dominant at high loads).

---

## Data Analysis and Uncertainty

### Uncertainty in Magnetic Force Measurements

When measuring $B = F/(IL)$The percentage uncertainty is:

$$\frac{\Delta B}{B} = \sqrt{\left(\frac{\Delta F}{F}\right)^2 + \left(\frac{\Delta I}{I}\right)^2 + \left(\frac{\Delta L}{L}\right)^2}$$

**Example:** A force of $(3.20 \pm 0.05) \mathrm{ N}$Current of $(2.00 \pm 0.02) \mathrm{ A}$ And
length of $(0.100 \pm 0.002) \mathrm{ m}$:

$$B = \frac{3.20}{2.00 \times 0.100} = 16.0 \mathrm{ T}$$

$$\frac{\Delta B}{B} = \sqrt{\left(\frac{0.05}{3.20}\right)^2 + \left(\frac{0.02}{2.00}\right)^2 + \left(\frac{0.002}{0.100}\right)^2} = \sqrt{0.000244 + 0.000100 + 0.000400} = \sqrt{0.000744} = 0.0273 = 2.7\%$$

$$\Delta B = 0.0273 \times 16.0 = 0.44 \mathrm{ T}$$

$$B = (16.0 \pm 0.4) \mathrm{ T}$$

### Graphical Analysis of Electromagnetic Induction

When investigating how induced EMF depends on the rate of change of flux:

- Plot $\varepsilon$ (y-axis) versus $d\Phi/dt$ (x-axis).
- The gradient should equal $N$ (number of turns).
- If the line passes through the origin, this confirms the proportionality.
- A line of best fit minimises the effect of random errors.

---

## Additional Worked Examples

### Worked Example 11

A proton enters a uniform magnetic field of $0.3 \mathrm{ T}$ at $60^\circ$ to the field direction
With speed $5 \times 10^5 \mathrm{ m/s}$. Find the radius and pitch of its helical path. (Proton
Mass $= 1.67 \times 10^{-27} \mathrm{ kg}$Charge $= 1.6 \times 10^{-19} \mathrm{ C}$)

<details>
<summary>Solution</summary>

The component of velocity perpendicular to the field determines the circular motion:

$$v_\perp = v\sin\theta = 5 \times 10^5 \times \sin 60^\circ = 5 \times 10^5 \times 0.866 = 4.33 \times 10^5 \mathrm{ m/s}$$

$$r = \frac{mv_\perp}{qB} = \frac{1.67 \times 10^{-27} \times 4.33 \times 10^5}{1.6 \times 10^{-19} \times 0.3} = \frac{7.23 \times 10^{-22}}{4.8 \times 10^{-20}} = 0.0151 \mathrm{ m} = 1.51 \mathrm{ cm}$$

The component parallel to the field is:

$$v_\parallel = v\cos\theta = 5 \times 10^5 \times \cos 60^\circ = 2.5 \times 10^5 \mathrm{ m/s}$$

The period of circular motion:
$T = \frac{2\pi m}{qB} = \frac{2\pi \times 1.67 \times 10^{-27}}{1.6 \times 10^{-19} \times 0.3} = \frac{1.049 \times 10^{-26}}{4.8 \times 10^{-20}} = 2.19 \times 10^{-7} \mathrm{ s}$

$$\mathrm{Pitch} = v_\parallel \times T = 2.5 \times 10^5 \times 2.19 \times 10^{-7} = 0.0547 \mathrm{ m} = 5.47 \mathrm{ cm}$$

</details>

### Worked Example 12

A rectangular coil of 150 turns, dimensions $0.06 \mathrm{ m} \times 0.10 \mathrm{ m}$Is placed In a
magnetic field of $0.4 \mathrm{ T}$ with its plane parallel to the field. The coil rotates About an
axis through the centre of the $0.06 \mathrm{ m}$ sides at $300 \mathrm{ rpm}$. Find The peak EMF
and the EMF when the coil has rotated $30^\circ$ from its initial position.

<details>
<summary>Solution</summary>

$$A = 0.06 \times 0.10 = 0.006 \mathrm{ m}^2$$

$$\omega = 2\pi \times \frac{300}{60} = 31.42 \mathrm{ rad/s}$$

$$\varepsilon_0 = NBA\omega = 150 \times 0.4 \times 0.006 \times 31.42 = 150 \times 0.4 \times 0.1885 = 11.3 \mathrm{ V}$$

When the coil has rotated $30^\circ$ from the parallel position, the normal to the coil makes
$30^\circ$ with the field, so $\omega t = 30^\circ$:

$$\varepsilon = \varepsilon_0 \sin(30^\circ) = 11.3 \times 0.5 = 5.65 \mathrm{ V}$$

</details>

### Worked Example 13

A metal ring of radius $0.05 \mathrm{ m}$ and resistance $0.2 \Omega$ is placed in a uniform
Magnetic field of $0.8 \mathrm{ T}$ perpendicular to its plane. The field decreases to zero
Uniformly in $0.05 \mathrm{ s}$. Find the induced current and the total charge that flows.

<details>
<summary>Solution</summary>

$$A = \pi r^2 = \pi(0.05)^2 = 7.854 \times 10^{-3} \mathrm{ m}^2$$

$$\varepsilon = \frac{\Delta\Phi}{\Delta t} = \frac{\Delta B \cdot A}{\Delta t} = \frac{0.8 \times 7.854 \times 10^{-3}}{0.05} = \frac{6.283 \times 10^{-3}}{0.05} = 0.1257 \mathrm{ V}$$

$$I = \frac{\varepsilon}{R} = \frac{0.1257}{0.2} = 0.628 \mathrm{ A}$$

$$Q = I \cdot \Delta t = 0.628 \times 0.05 = 0.0314 \mathrm{ C}$$

Alternatively, using Faraday's law in charge form:
$Q = \frac{\Delta\Phi}{R} = \frac{6.283 \times 10^{-3}}{0.2} = 0.0314 \mathrm{ C}$.

</details>

---

## Exam-Style Questions

### Question 1 (DSE Structured)

A student investigates how the magnetic force on a current-carrying conductor depends on the
Current. She uses a wire of length $0.10 \mathrm{ m}$ in a uniform magnetic field and measures the
Force for different currents.

| Current $I$ (A) | Force $F$ (N) |
| --------------- | ------------- |
| 1.0             | 0.020         |
| 2.0             | 0.039         |
| 3.0             | 0.061         |
| 4.0             | 0.078         |
| 5.0             | 0.102         |

(a) Plot a graph of $F$ against $I$ and determine the gradient. What does the gradient represent?

(b) The student estimates the percentage uncertainty in $F$ as $\pm 5\%$ and in $I$ as $\pm 2\%$.
Calculate the percentage uncertainty in the gradient.

(c) If the wire is at $90^\circ$ to the field and has length $(0.100 \pm 0.002) \mathrm{ m}$
Calculate the magnetic flux density $B$ and its uncertainty.

<details>
<summary>Solution</summary>

(a) The graph of $F$ versus $I$ is a straight line through the origin. The gradient is:

$$\mathrm{Gradient} = \frac{\Delta F}{\Delta I} \approx \frac{0.102 - 0.020}{5.0 - 1.0} = \frac{0.082}{4.0} = 0.0205 \mathrm{ N/A}$$

A line of best fit gives approximately $0.0203 \mathrm{ N/A}$.

From $F = BIL$ with $L = 0.10 \mathrm{ m}$ and $\theta = 90^\circ$: gradient $= BL$So
$B = \mathrm{gradient}/L$.

(b) Percentage uncertainty in gradient:

$$\frac{\Delta(\mathrm{gradient})}{\mathrm{gradient}} = \sqrt{\left(\frac{\Delta F}{F}\right)^2 + \left(\frac{\Delta I}{I}\right)^2} = \sqrt{(0.05)^2 + (0.02)^2} = \sqrt{0.0029} = 0.0539 = 5.4\%$$

(c) $B = \frac{0.0203}{0.100} = 0.203 \mathrm{ T}$

$$\frac{\Delta B}{B} = \sqrt{(0.054)^2 + \left(\frac{0.002}{0.100}\right)^2} = \sqrt{0.00292 + 0.0004} = \sqrt{0.00332} = 0.0576 = 5.8\%$$

$$\Delta B = 0.058 \times 0.203 = 0.012 \mathrm{ T}$$

$$B = (0.20 \pm 0.01) \mathrm{ T}$$

</details>

### Question 2 (DSE Structured)

A coil of 200 turns and cross-sectional area $4.0 \times 10^{-3} \mathrm{ m}^2$ is placed with its
Axis parallel to a uniform magnetic field. The field increases from $0.20 \mathrm{ T}$ to
$0.60 \mathrm{ T}$ in $0.025 \mathrm{ s}$.

(a) Explain why an EMF is induced in the coil.

(b) Calculate the average induced EMF.

(c) The coil has a total resistance of $15 \Omega$. Find the average induced current.

(d) State the direction of the induced current relative to the increasing field, explaining your
Reasoning with reference to Lenz's law.

(e) Calculate the total charge that flows through the coil during the $0.025 \mathrm{ s}$ interval.

<details>
<summary>Solution</summary>

(a) According to Faraday's law, an EMF is induced whenever there is a change in the magnetic flux
Linking a circuit. Here, the magnetic field $B$ increases, so the flux $\Phi = BA\cos\theta$ Through
the coil changes.

(b) Change in flux per turn:
$\Delta\Phi = \Delta B \times A = (0.60 - 0.20) \times 4.0 \times 10^{-3} = 0.40 \times 4.0 \times 10^{-3} = 1.6 \times 10^{-3} \mathrm{ Wb}$

$$\varepsilon = N\frac{\Delta\Phi}{\Delta t} = 200 \times \frac{1.6 \times 10^{-3}}{0.025} = 200 \times 0.064 = 12.8 \mathrm{ V}$$

(c) $I = \frac{\varepsilon}{R} = \frac{12.8}{15} = 0.853 \mathrm{ A}$

(d) By Lenz's law, the induced current opposes the change producing it. Since the field is
Increasing, the induced current flows in a direction that creates a magnetic field opposing the
Increase (i.e., the induced field is in the opposite direction to the applied field).

(e) $Q = I \times \Delta t = 0.853 \times 0.025 = 0.0213 \mathrm{ C}$

Alternatively:
$Q = \frac{N\Delta\Phi}{R} = \frac{200 \times 1.6 \times 10^{-3}}{15} = \frac{0.32}{15} = 0.0213 \mathrm{ C}$.

</details>

### Question 3 (DSE Structured)

An ideal transformer has 800 turns on the primary coil and 200 turns on the secondary coil. The
Primary is connected to a $240 \mathrm{ V}$ RMS AC supply.

(a) Calculate the secondary voltage.

(b) A $10 \Omega$ resistor is connected across the secondary. Find the primary and secondary
Currents.

(c) Explain why the transformer would not work with a DC supply.

(d) In practice, the transformer is only $92\%$ efficient. Calculate the power loss and explain Two
causes of energy loss in a real transformer.

<details>
<summary>Solution</summary>

(a)
$V_s = V_p \times \frac{N_s}{N_p} = 240 \times \frac{200}{800} = 240 \times 0.25 = 60.0 \mathrm{ V}$

(b) Secondary current: $I_s = \frac{V_s}{R} = \frac{60}{10} = 6.0 \mathrm{ A}$

For an ideal transformer: $V_p I_p = V_s I_s$

$$I_p = \frac{V_s I_s}{V_p} = \frac{60 \times 6.0}{240} = 1.5 \mathrm{ A}$$

(c) A transformer requires a changing magnetic flux to induce an EMF (Faraday's law). DC produces a
Constant current and therefore a constant magnetic field. With no changing flux, no EMF is induced
In the secondary coil.

(d) Input power: $P_{\mathrm{in}} = V_p I_p = 240 \times 1.5 = 360 \mathrm{ W}$

$$P_{\mathrm{loss}} = (1 - 0.92) \times 360 = 0.08 \times 360 = 28.8 \mathrm{ W}$$

Two causes of energy loss:

1. **Copper losses**: Resistance in the windings causes $I^2 R$ heating.
2. **Eddy currents**: Changing flux induces circulating currents in the iron core, causing heating.
   (Other valid answers: hysteresis losses, magnetic flux leakage.)

</details>

### Question 4 (DSE Structured)

A straight horizontal wire of length $0.30 \mathrm{ m}$ and mass $0.012 \mathrm{ kg}$ carries a
Current of $4.0 \mathrm{ A}$. The wire is in a uniform vertical magnetic field.

(a) The wire floats in the magnetic field (the magnetic force supports its weight). Find the
Magnitude and direction of the magnetic flux density.

(b) If the current is reversed, what is the acceleration of the wire?

(c) If the wire is now placed at $30^\circ$ to the horizontal (still carrying the original current
In the same direction), what current is needed for the wire to float? Assume the field is still
Vertical.

<details>
<summary>Solution</summary>

(a) For the wire to float, the magnetic force must equal the weight:

$$BIL = mg$$

$$B = \frac{mg}{IL} = \frac{0.012 \times 9.81}{4.0 \times 0.30} = \frac{0.1177}{1.2} = 0.0981 \mathrm{ T}$$

Using Fleming's Left-Hand Rule: current is horizontal, force is upward, so the field must be into
The page (for conventional current flowing from left to right) or out of the page (for right to
Left). The direction depends on the current direction.

(b) If the current is reversed, the magnetic force reverses and acts downward:

$$F_{\mathrm{net}} = mg + BIL = 2mg = 2 \times 0.1177 = 0.235 \mathrm{ N}$$

$$a = \frac{F_{\mathrm{net}}}{m} = \frac{0.235}{0.012} = 19.6 \mathrm{ m/s}^2$$ (downward, i.e.,
$2g$)

(c) When the wire is at $30^\circ$ to the horizontal, only the horizontal component of the wire
Length is perpendicular to the vertical field:

$$BI(L\cos 30^\circ) = mg$$

$$I = \frac{mg}{BL\cos 30^\circ} = \frac{0.012 \times 9.81}{0.0981 \times 0.30 \times 0.866} = \frac{0.1177}{0.0255} = 4.62 \mathrm{ A}$$

</details>

### Question 5 (DSE Structured)

(a) State Faraday's law of electromagnetic induction.

(b) A square coil of side $0.08 \mathrm{ m}$ with 100 turns is pulled completely out of a Uniform
magnetic field of $0.5 \mathrm{ T}$ in $0.1 \mathrm{ s}$. The field is perpendicular To the plane of
the coil. Calculate the average EMF induced.

(c) If the coil has resistance $5 \Omega$Find the total energy dissipated as the coil is Removed
from the field.

(d) Explain how Lenz's law is consistent with the principle of conservation of energy.

(e) The coil is now rotated about an axis through its centre, parallel to the field, at
$10 \mathrm{ rev/s}$. Calculate the peak EMF induced and explain why the average EMF over one
Complete rotation is zero.

<details>
<summary>Solution</summary>

(a) Faraday's law states that the magnitude of the induced EMF in a circuit is equal to the rate Of
change of magnetic flux linkage: $\varepsilon = -N\frac{d\Phi}{dt}$.

(b) Initial flux linkage:
$\Phi_i = NBA = 100 \times 0.5 \times (0.08)^2 = 100 \times 0.5 \times 0.0064 = 0.32 \mathrm{ Wb}$

Final flux linkage (outside the field): $\Phi_f = 0$

$$\varepsilon = N\frac{\Delta\Phi}{\Delta t} = \frac{0.32 - 0}{0.1} = 3.2 \mathrm{ V}$$

(c) The charge that flows: $Q = \frac{N\Delta\Phi}{R} = \frac{0.32}{5} = 0.064 \mathrm{ C}$

Energy dissipated: $E = \frac{Q^2 R}{\Delta t}$... Alternatively, use the work done by the External
force:

$$E = \frac{\varepsilon^2}{R} \times \Delta t = \frac{(3.2)^2}{5} \times 0.1 = \frac{10.24}{5} \times 0.1 = 0.2048 \mathrm{ J}$$

Alternatively:
$E = \frac{(N\Delta\Phi)^2}{R\Delta t} = \frac{(0.32)^2}{5 \times 0.1} = \frac{0.1024}{0.5} = 0.205 \mathrm{ J}$

(d) Lenz's law states that the induced current opposes the change in flux. This means work must Be
done against the magnetic force to change the flux through the coil. The work done by the External
agent is converted into electrical energy in the circuit, which is then dissipated as Heat in the
resistance. This is consistent with conservation of energy: the energy supplied Equals the energy
dissipated.

(e) Peak EMF: $\varepsilon_0 = NBA\omega$

$\omega = 2\pi \times 10 = 62.8 \mathrm{ rad/s}$

$\varepsilon_0 = 100 \times 0.5 \times (0.08)^2 \times 62.8 = 100 \times 0.5 \times 0.0064 \times 62.8 = 20.1 \mathrm{ V}$

The average EMF over one complete rotation is zero because the EMF varies sinusoidally
($\varepsilon = \varepsilon_0\sin\omega t$), and the average of a sine function over a full Period
is zero. The positive half-cycle exactly cancels the negative half-cycle.

</details>

## Worked Examples

### Example 1: Faraday's law

**Problem.** A coil of 200 turns (area $0.01 \mathrm{ m^2}$) is in a field increasing from $0$ to
$0.5 \mathrm{ T}$ in $0.1 \mathrm{ s}$. Find the induced EMF.

**Solution.**
$\mathcal{E} = N\frac{\Delta\Phi}{\Delta t} = 200 \times \frac{0.5 \times 0.01}{0.1} = 200 \times 0.05 = 10 \mathrm{ V}$.

$\blacksquare$

### Example 2: Transformer

**Problem.** A transformer has 500 primary and 50 secondary turns. Input: $240 \mathrm{ V}$. Find
output voltage and output current for $1200 \mathrm{ W}$ input (ideal).

**Solution.** $V_s = 240 \times \frac{50}{500} = 24 \mathrm{ V}$.
$I_s = \frac{1200}{24} = 50 \mathrm{ A}$.

$\blacksquare$

## Summary

- Faraday's law: $\mathcal{E} = -N\frac{d\Phi}{dt}$; Lenz's law: induced current opposes the change
  in flux.
- Transformer: $\frac{V_s}{V_p} = \frac{N_s}{N_p}$; ideal: $V_p I_p = V_s I_s$.
- Back-EMF in motors: $\mathcal{E}_{\text{back}} \propto \omega$; limits current at high speed.
- Electromagnetic induction underpins generators, transformers, and induction motors.

## Cross-References

| Topic              | Site       | Link                                                                                                          |
| ------------------ | ---------- | ------------------------------------------------------------------------------------------------------------- |
| [Electromagnetism] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/fields/03-electromagnetism-unification)   |
| [Electromagnetism] | IB         | [View](https://ib.wyattau.com/docs/ib/physics/4-fields/4_induction)                                           |
| [Electromagnetism] | DSE        | [View](https://dse.wyattau.com/docs/dse/physics/3-electricity-and-magnetism/3_magnetism-and-electromagnetism) |
| [Electromagnetism] | University | [View](https://university.wyattau.com/docs/physics/3-electromagnetism/1_electromagnetism)                     |

