---
title: Magnetism and Electromagnetism
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: dse-physics-magnetism-and-electromagnetism
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

$$F = qvB = \frac{mv^2}{r}$$

$$r = \frac{mv}{qB} = \frac{9.11 \times 10^{-31} \times 3 \times 10^6}{1.6 \times 10^{-19} \times 0.5} = \frac{2.733 \times 10^{-24}}{8 \times 10^{-20}} = 3.42 \times 10^{-5} \mathrm{ m}$$

---

## Electromagnets

### Magnetic Field of a Current-Carrying Wire

A long straight wire carrying current $I$ produces a magnetic field at distance $r$:

$$B = \frac{\mu_0 I}{2\pi r}$$

where $\mu_0 = 4\pi \times 10^{-7} \mathrm{ T\, m/A}$ is the permeability of free space.

The field lines are concentric circles around the wire. The direction is given by the right-hand
grip rule: if the thumb points in the direction of conventional current, the fingers curl in the
direction of the field.

### Magnetic Field of a Solenoid

Inside a long solenoid with $n$ turns per unit length carrying current $I$:

$$B = \mu_0 n I$$

The field inside a long solenoid is approximately uniform and parallel to the axis. Outside the
solenoid, the field is approximately zero.

### Worked Example 2

A solenoid of length $0.25 \mathrm{ m}$ has 500 turns and carries a current of $3 \mathrm{ A}$. Find
the magnetic flux density inside the solenoid.

$$n = \frac{N}{L} = \frac{500}{0.25} = 2000 \mathrm{ turns/m}$$

$$B = \mu_0 n I = 4\pi \times 10^{-7} \times 2000 \times 3 = 4\pi \times 10^{-7} \times 6000 = 7.54 \times 10^{-3} \mathrm{ T} = 7.54 \mathrm{ mT}$$

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

### Worked Example 3

A rectangular coil of 200 turns, dimensions $0.05 \mathrm{ m} \times 0.08 \mathrm{ m}$, carries a
current of $0.5 \mathrm{ A}$ in a magnetic field of $0.3 \mathrm{ T}$. Find the maximum torque.

$$A = 0.05 \times 0.08 = 0.004 \mathrm{ m}^2$$

$$\tau_{\max} = nBIA = 200 \times 0.3 \times 0.5 \times 0.004 = 0.12 \mathrm{ N\, m}$$

---

## Electromagnetic Induction

### Faraday's Law

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

### Worked Example 4

A straight wire of length $0.3 \mathrm{ m}$ moves perpendicular to a magnetic field of
$0.4 \mathrm{ T}$ at a speed of $5 \mathrm{ m/s}$. Find the induced EMF.

$$\varepsilon = BLv = 0.4 \times 0.3 \times 5 = 0.6 \mathrm{ V}$$

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

### Worked Example 5

A step-down transformer has 2000 turns on the primary and 100 turns on the secondary. The primary
voltage is $240 \mathrm{ V}$ and the primary current is $0.5 \mathrm{ A}$. Find the secondary
voltage and the maximum secondary current (assuming 90% efficiency).

$$V_s = V_p \times \frac{N_s}{N_p} = 240 \times \frac{100}{2000} = 12 \mathrm{ V}$$

$$I_{s,\max} = \frac{\eta V_p I_p}{V_s} = \frac{0.90 \times 240 \times 0.5}{12} = \frac{108}{12} = 9.0 \mathrm{ A}$$

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

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** A proton (charge $1.6 \times 10^{-19} \mathrm{ C}$, mass
$1.67 \times 10^{-27}
\mathrm{ kg}$) moves in a circle of radius $0.05 \mathrm{ m}$ in a uniform
magnetic field of $0.2 \mathrm{ T}$ with its velocity perpendicular to the field. Find the speed of
the proton.

$$r = \frac{mv}{qB} \implies v = \frac{qBr}{m} = \frac{1.6 \times 10^{-19} \times 0.2 \times 0.05}{1.67 \times 10^{-27}} = \frac{1.6 \times 10^{-21}}{1.67 \times 10^{-27}} = 9.58 \times 10^5 \mathrm{ m/s}$$

**Question 2:** A rectangular coil of 100 turns, area $0.02 \mathrm{ m}^2$, rotates at
$50 \mathrm{ rev/s}$ in a magnetic field of $0.1 \mathrm{ T}$. The axis of rotation is perpendicular
to the field. Find the peak EMF.

$$\omega = 2\pi \times 50 = 314.2 \mathrm{ rad/s}$$

$$\varepsilon_{\max} = NAB\omega = 100 \times 0.02 \times 0.1 \times 314.2 = 62.8 \mathrm{ V}$$

**Question 3:** A straight wire of length $0.15 \mathrm{ m}$ carries a current of $8 \mathrm{ A}$ in
a magnetic field of $0.6 \mathrm{ T}$. The wire makes an angle of $30^\circ$ with the field. Find
the force on the wire.

$$F = BIL\sin\theta = 0.6 \times 8 \times 0.15 \times \sin 30^\circ = 0.6 \times 8 \times 0.15 \times 0.5 = 0.36 \mathrm{ N}$$

**Question 4:** A power station generates $500 \mathrm{ MW}$ of power at $25 \mathrm{ kV}$. It is
transmitted through cables of total resistance $2 \Omega$. Find the power loss in the cables. If the
voltage is stepped up to $250 \mathrm{ kV}$ using an ideal transformer, find the new power loss.

At $25 \mathrm{ kV}$: $I = P/V = 500 \times 10^6 / 25000 = 20000 \mathrm{ A}$

$$P_{\mathrm{loss}} = I^2 R = (20000)^2 \times 2 = 8 \times 10^8 \mathrm{ W} = 800 \mathrm{ MW}$$

(This exceeds the generated power, showing that low-voltage transmission is impractical.)

At $250 \mathrm{ kV}$: $I = 500 \times 10^6 / 250000 = 2000 \mathrm{ A}$

$$P_{\mathrm{loss}} = (2000)^2 \times 2 = 8 \times 10^6 \mathrm{ W} = 8 \mathrm{ MW}$$

Stepping up the voltage reduces the transmission current by a factor of 10, reducing power loss by a
factor of 100.

**Question 5:** A coil of 50 turns and area $0.01 \mathrm{ m}^2$ is placed with its plane
perpendicular to a magnetic field that increases uniformly from $0.2 \mathrm{ T}$ to
$0.8 \mathrm{ T}$ in $0.05 \mathrm{ s}$. Find the induced EMF.

$$\Delta\Phi = \Delta B \times A = (0.8 - 0.2) \times 0.01 = 0.006 \mathrm{ Wb}$$

$$\varepsilon = N\frac{\Delta\Phi}{\Delta t} = 50 \times \frac{0.006}{0.05} = 50 \times 0.12 = 6.0 \mathrm{ V}$$

</details>
