---
title: Magnetic Fields
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: magnetic-fields
---

## Magnetic Fields

:::info
Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4
:::

**Definition.** A magnetic field is a region of space where a magnetic force acts on moving charges
or magnetic materials.

## 1. Magnetic Force on a Current-Carrying Wire

**Definition.** Magnetic flux density $B$ is the force per unit length per unit current on a
straight conductor perpendicular to the field.

$$\boxed{B = \frac{F}{IL}}$$

A current-carrying wire in a magnetic field experiences a force:

$$\boxed{F = BIl\sin\theta}$$

where $B$ is the magnetic flux density (T), $I$ is the current (A), $l$ is the length of wire in the
field (m), and $\theta$ is the angle between the wire and the field direction.

The force is maximum when the wire is perpendicular to the field ($\theta = 90°$): $F = BIl$. The
force is zero when the wire is parallel to the field ($\theta = 0°$).

**Definition.** Fleming's left-hand rule relates the directions of force, magnetic field, and
current: thumb (force), index (field), middle (current).

**Direction:** Given by **Fleming's Left-Hand Rule**:

- **First finger** → Field ($B$)
- **Second finger** → Current ($I$)
- **Thumb** → Force ($F$)

**Definition.** The tesla is the SI unit of magnetic flux density; 1 T = 1 N A$^{-1}$ m$^{-1}$ — the
magnetic flux density that produces a force of 1 N on a wire of length 1 m carrying a current of 1 A
perpendicular to the field.

$$\boxed{1\,\text{T} = 1\,\text{N A}^{-1}\,\text{m}^{-1}}$$

### Magnetic Force on a Moving Charge

Since $I = dq/dt$, and $n$ charges each of charge $q$ move through length $l$ in time $t$:
$I = nq/t$ for one charge $I = q/t$ where $t = l/v$.

$$F = B \cdot \frac{q}{t} \cdot l \cdot \sin\theta = B \cdot q \cdot \frac{l}{t} \cdot \sin\theta$$

$$\boxed{F = Bqv\sin\theta}$$

For a charge moving perpendicular to the field ($\theta = 90°$):

$$\boxed{F = Bqv}$$

## 2. Circular Motion in a Magnetic Field

### Derivation of $r = mv/(Bq)$

When a charged particle moves perpendicular to a uniform magnetic field, the magnetic force provides
the centripetal acceleration:

$$F = Bqv = \frac{mv^2}{r}$$

Solving for the radius of curvature:

$$\boxed{r = \frac{mv}{Bq}}$$

**Derivation of the cyclotron frequency.** The period of the circular orbit:

$$T = \frac{2\pi r}{v} = \frac{2\pi m}{Bq}$$

Note that $T$ is **independent of $v$ and $r$** — a remarkable result. All particles of the same
mass and charge orbit with the same period regardless of speed.

The **cyclotron frequency** is:

$$f = \frac{1}{T} = \frac{Bq}{2\pi m}$$

**Intuition.** A faster particle has a larger orbit (proportionally), so it takes the same time to
complete one revolution. This is the principle behind the cyclotron particle accelerator.

### Kinetic Energy in Terms of $r$

$$E_k = \frac{1}{2}mv^2 = \frac{1}{2}m\left(\frac{Bqr}{m}\right)^2 = \frac{B^2q^2r^2}{2m}$$

<details>
<summary>Example: Proton in a Magnetic Field</summary>
A proton ($m = 1.67 \times 10^{-27}$ kg) moves at $3.0 \times 10^6$ m s$^{-1}$ perpendicular to a
magnetic field of 0.50 T. Find the radius of its circular path.

**Answer.**
$r = \frac{mv}{Bq} = \frac{1.67 \times 10^{-27} \times 3.0 \times 10^6}{0.50 \times 1.60 \times 10^{-19}} = \frac{5.01 \times 10^{-21}}{8.0 \times 10^{-20}} = 0.0626$
m $= 6.26$ cm.

</details>

## 3. Velocity Selector

A velocity selector uses crossed electric and magnetic fields to select particles of a specific
velocity.

**Principle.** A particle with charge $q$ and velocity $v$ passes through a region where
$\mathbf{E}$ and $\mathbf{B}$ are perpendicular to each other and to the particle's velocity.

The electric force: $F_E = qE$ (one direction) The magnetic force: $F_B = Bqv$ (opposite direction)

For the particle to travel in a straight line (undeflected):

$$F_E = F_B$$

$$\boxed{qE = Bqv \implies v = \frac{E}{B}}$$

Only particles with this specific velocity pass through undeflected. Faster or slower particles are
deflected and filtered out.

**Intuition.** The electric and magnetic forces balance for exactly one speed. This is how mass
spectrometers first select a monoenergetic beam before separating by mass.

## 4. Faraday's Law of Electromagnetic Induction

### Magnetic Flux

**Definition.** Magnetic flux $\Phi$ is the product of the magnetic flux density and the
perpendicular component of area: $\Phi = BA\cos\theta$ where $\theta$ is the angle between the field
and the normal to the area.

$$\boxed{\Phi = BA\cos\theta}$$

where $A$ is the area of the surface and $\theta$ is the angle between the field and the normal to
the surface.

**Definition.** The weber is the SI unit of magnetic flux; 1 Wb = 1 T m$^2$.

$$\boxed{1\,\text{Wb} = 1\,\text{T}\,\text{m}^2}$$

### Faraday's Law

**Definition.** Faraday's law states that the induced e.m.f. is equal to the negative rate of change
of magnetic flux linkage.

$$\boxed{\varepsilon = -N\frac{d\Phi}{dt}}$$

where $N$ is the number of turns, $\Phi$ is the magnetic flux, and $N\Phi$ is the **flux linkage**.

**Derivation from energy conservation.** If an e.m.f. were induced that did not oppose the change in
flux, you could create a self-sustaining current and violate conservation of energy.

### Lenz's Law

**Definition.** Lenz's law states that the direction of the induced current is such that it opposes
the change producing it.

This is the physical content of the minus sign in Faraday's law. The induced current creates a
magnetic field that opposes the change in the original flux.

**Intuition.** Lenz's law is nature's expression of inertia for magnetic systems. If you push a
magnet towards a coil, the coil generates a current whose field repels the magnet. If you pull the
magnet away, the current attracts it. The system always resists change.

### Motional e.m.f.

A conducting rod of length $l$ moving with velocity $v$ perpendicular to a uniform field $B$:

$$\mathcal{E} = Blv$$

**Derivation.** In time $dt$, the rod sweeps out area $l \cdot v\,dt$. The flux swept:
$d\Phi = B \cdot lv\,dt$. By Faraday's law: $\mathcal{E} = d\Phi/dt = Blv$. $\square$

## 5. The Alternating Current Generator

A coil of $N$ turns, area $A$, rotating at angular frequency $\omega$ in a uniform field $B$:

$$\Phi = NBA\cos(\omega t)$$

$$\mathcal{E} = -\frac{d\Phi}{dt} = NBA\omega\sin(\omega t)$$

$$\boxed{\mathcal{E} = \mathcal{E}_0\sin(\omega t)}$$

where the peak e.m.f. is $\mathcal{E}_0 = NBA\omega$.

:::tip
Exam Technique When asked about Lenz's law, always describe what the induced current does
(creates a field to oppose the change) and identify the direction of the induced current using the
right-hand grip rule.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
A wire of length 0.30 m carries a current of 5.0 A at $30°$ to a magnetic field of 0.40 T. Calculate
the force on the wire.

**Answer.**
$F = BIl\sin\theta = 0.40 \times 5.0 \times 0.30 \times \sin 30° = 0.40 \times 5.0 \times 0.30 \times 0.5 = 0.30$
N.

<b>If you get this wrong, revise:</b>
[Magnetic Force on a Current-Carrying Wire](#1-magnetic-force-on-a-current-carrying-wire)

</details>

<details>
<summary>Problem 2</summary>
An electron moves at $2.0 \times 10^6$ m s$^{-1}$ perpendicular to a magnetic field of 0.80 T.
Calculate the radius of its circular path.

**Answer.**
$r = \frac{mv}{Be} = \frac{9.11 \times 10^{-31} \times 2.0 \times 10^6}{0.80 \times 1.60 \times 10^{-19}} = \frac{1.822 \times 10^{-24}}{1.28 \times 10^{-19}} = 1.42 \times 10^{-5}$
m $= 14.2\,\mu$m.

<b>If you get this wrong, revise:</b>
[Circular Motion in a Magnetic Field](#2-circular-motion-in-a-magnetic-field)

</details>

<details>
<summary>Problem 3</summary>
A velocity selector has $E = 6.0 \times 10^5$ V m$^{-1}$ and $B = 0.20$ T. Calculate the velocity of
particles that pass through undeflected.

**Answer.** $v = E/B = 6.0 \times 10^5 / 0.20 = 3.0 \times 10^6$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Velocity Selector](#3-velocity-selector)

</details>

<details>
<summary>Problem 4</summary>
A coil of 200 turns, each of area $0.010$ m$^2$, is placed in a magnetic field that decreases
uniformly from 0.50 T to 0.10 T in 0.05 s. Calculate the average induced e.m.f.

**Answer.** $d\Phi = A \cdot dB = 0.010 \times (0.50 - 0.10) = 0.004$ Wb.
$d(N\Phi)/dt = 200 \times 0.004 / 0.05 = 16$ V. $\mathcal{E} = 16$ V.

<b>If you get this wrong, revise:</b> [Faraday's Law](#4-faradays-law-of-electromagnetic-induction)

</details>

<details>
<summary>Problem 5</summary>
A proton and an alpha particle enter a magnetic field with the same velocity. The alpha particle has
twice the charge and four times the mass of the proton. Compare the radii of their circular paths.

**Answer.** $r = mv/(Bq)$.
$r_\alpha/r_p = \frac{(4m_p)v/(B \cdot 2e)}{m_p v/(Be)} = \frac{4}{2} = 2$. The alpha particle has
twice the radius.

<b>If you get this wrong, revise:</b>
[Circular Motion in a Magnetic Field](#2-circular-motion-in-a-magnetic-field)

</details>

<details>
<summary>Problem 6</summary>
A straight rod of length 0.50 m moves at 8.0 m s$^{-1}$ perpendicular to a magnetic field of 0.60 T.
Calculate the motional e.m.f. induced.

**Answer.** $\mathcal{E} = Blv = 0.60 \times 0.50 \times 8.0 = 2.4$ V.

<b>If you get this wrong, revise:</b> [Motional e.m.f.](#motional-emf)

</details>

<details>
<summary>Problem 7</summary>
A rectangular coil of 100 turns, dimensions 0.10 m $\times$ 0.05 m, rotates at 3000 rpm in a 0.20 T
magnetic field. Calculate the peak e.m.f.

**Answer.** $\omega = 3000 \times 2\pi/60 = 314$ rad s$^{-1}$. $A = 0.10 \times 0.05 = 0.005$ m$^2$.

$\mathcal{E}_0 = NBA\omega = 100 \times 0.20 \times 0.005 \times 314 = 31.4$ V.

<b>If you get this wrong, revise:</b>
[The Alternating Current Generator](#5-the-alternating-current-generator)

</details>

<details>
<summary>Problem 8</summary>
State Lenz's law and explain how it relates to conservation of energy.

**Answer.** Lenz's law states that the direction of the induced current is such that it opposes the
change in magnetic flux that produced it. This ensures energy conservation: if the induced current
reinforced the flux change, it would amplify the effect, creating energy from nothing. The
opposition means work must be done against the induced effects, and this work appears as electrical
energy in the circuit.

<b>If you get this wrong, revise:</b> [Lenz's Law](#lenzs-law)

</details>

<details>
<summary>Problem 9</summary>
An electron moves in a circle of radius 1.0 mm in a magnetic field of 0.30 T. Calculate its speed
and kinetic energy.

**Answer.**
$v = \frac{Ber}{m} = \frac{1.60 \times 10^{-19} \times 0.30 \times 0.001}{9.11 \times 10^{-31}} = \frac{4.8 \times 10^{-23}}{9.11 \times 10^{-31}} = 5.27 \times 10^7$
m s$^{-1}$.

$E_k = \frac{1}{2}mv^2 = \frac{1}{2} \times 9.11 \times 10^{-31} \times (5.27 \times 10^7)^2 = 1.27 \times 10^{-16}$
J.

<b>If you get this wrong, revise:</b>
[Circular Motion in a Magnetic Field](#2-circular-motion-in-a-magnetic-field)

</details>

<details>
<summary>Problem 10</summary>
A magnet is pushed into a coil of 50 turns, and the magnetic flux through each turn increases by
$4.0 \times 10^{-3}$ Wb in 0.10 s. Calculate the average induced e.m.f. and explain which end of the
coil acts as a north pole.

**Answer.** $\mathcal{E} = N\frac{d\Phi}{dt} = 50 \times \frac{4.0 \times 10^{-3}}{0.10} = 2.0$ V.

By Lenz's law, the induced current opposes the increasing flux. If the magnet's north pole is being
pushed in, the coil end facing the magnet becomes a north pole (to repel the magnet), so current
flows anticlockwise when viewed from the magnet's side.

<b>If you get this wrong, revise:</b> [Faraday's Law](#4-faradays-law-of-electromagnetic-induction)
and [Lenz's Law](#lenzs-law)

</details>

:::
