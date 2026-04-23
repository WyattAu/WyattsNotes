---
title: Magnetic Fields
date: 2026-04-23T00:00:00.000Z
tags: [Physics, ALevel]
categories: [Physics]
slug: magnetic-fields-depth
---

## Magnetic Fields

:::info Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4 :::

## 1. Magnetic Flux Density

**Definition.** The magnetic flux density $B$ (also called the magnetic field strength in the context
of force calculations) is defined by the force on a current-carrying conductor:

$$\boxed{B = \frac{F}{IL\sin\theta}}$$

where $F$ is the force on a wire of length $L$ carrying current $I$ at angle $\theta$ to the field.

SI unit: tesla (T). $1\ \mathrm{T} = 1\ \mathrm{N\,A^{-1}\,m^{-1}}$.

**Direction of force:** Given by Fleming's Left-Hand Rule:

- First finger: Field ($B$)
- Second finger: Current ($I$)
- Thumb: Force ($F$)

The force is maximum when the wire is perpendicular to the field ($\theta = 90^\circ$): $F = BIL$.
The force is zero when the wire is parallel ($\theta = 0^\circ$).

## 2. Force on a Moving Charge

A charge $q$ moving with velocity $v$ at angle $\theta$ to a magnetic field experiences:

$$\boxed{F = Bqv\sin\theta}$$

**Derivation from the wire force.** Current in a wire: $I = nqvA$ where $n$ is the number density of
charge carriers, $q$ is the charge per carrier, $v$ is the drift velocity, and $A$ is the
cross-sectional area. The number of carriers in length $L$ is $nAL$. The force is:

$$F = BIL\sin\theta = B(nqvA)L\sin\theta = (nAL) \cdot Bqv\sin\theta$$

For a single charge ($nAL = 1$): $F = Bqv\sin\theta$. $\square$

For a charge moving perpendicular to the field ($\theta = 90^\circ$):

$$\boxed{F = Bqv}$$

:::warning Common Pitfall The magnetic force is always perpendicular to both $\mathbf{v}$ and
$\mathbf{B}$. It does no work ($\mathbf{F} \cdot \mathbf{v} = 0$), so a magnetic field alone cannot
change the speed of a charged particle — only its direction. :::

## 3. Circular Motion in a Magnetic Field

When a charged particle moves perpendicular to a uniform magnetic field, the magnetic force provides
the centripetal acceleration:

$$Bqv = \frac{mv^2}{r}$$

Solving for the radius:

$$\boxed{r = \frac{mv}{Bq}}$$

### Proof of Frequency Independence

The period of revolution:

$$T = \frac{2\pi r}{v} = \frac{2\pi m}{Bq}$$

This is **independent of $v$ and $r$**. A faster particle traces a proportionally larger circle in the
same time. The cyclotron frequency is:

$$f = \frac{Bq}{2\pi m}$$

**Physical reason.** The magnetic force is $F = Bqv = mv^2/r$, giving $r = mv/(Bq)$. Both $r$ and $v$
increase proportionally, so $T = 2\pi r/v = 2\pi m/(Bq)$ is constant. This is the operating principle
of the cyclotron accelerator.

### Kinetic Energy in Terms of Radius

$$E_k = \frac{1}{2}mv^2 = \frac{B^2 q^2 r^2}{2m}$$

<details>
<summary>Worked Example: Proton and Alpha Particle</summary>
A proton and an alpha particle enter a magnetic field with the same speed. The alpha particle has
charge $+2e$ and mass $4m_p$. Compare their radii of curvature.

**Answer.** $r = mv/(Bq)$.

$r_\alpha / r_p = \frac{(4m_p)v/(B \cdot 2e)}{m_p v/(Be)} = \frac{4}{2} = 2$.

The alpha particle has twice the radius. Despite having four times the mass, its double charge reduces
the ratio to 2:1.

</details>

## 4. Helical Motion

When a particle enters a uniform $\mathbf{B}$ field at angle $\theta$ to the field lines:

$$v_\perp = v\sin\theta, \qquad v_\parallel = v\cos\theta$$

The perpendicular component produces circular motion (radius $r = mv_\perp/(Bq)$, period
$T = 2\pi m/(Bq)$), while the parallel component is unaffected by the magnetic force (since
$\mathbf{F} \perp \mathbf{B}$, there is no force component along $\mathbf{B}$).

The particle traces a **helix** with pitch:

$$\boxed{\mathrm{pitch} = v_\parallel\, T = \frac{2\pi m v\cos\theta}{Bq}}$$

## 5. Velocity Selector

Crossed electric and magnetic fields select particles of a specific velocity.

A particle with charge $q$ and velocity $v$ passes through a region where $\mathbf{E}$ and $\mathbf{B}$
are perpendicular. The electric force $F_E = qE$ acts in one direction; the magnetic force
$F_B = Bqv$ acts in the opposite direction.

For undeflected passage:

$$\boxed{qE = Bqv \implies v = \frac{E}{B}}$$

Only particles with this exact velocity pass through. Faster particles are deflected by the dominant
magnetic force; slower particles by the electric force.

## 6. Electromagnetic Induction

### Magnetic Flux

$$\boxed{\Phi = BA\cos\theta}$$

where $A$ is the area and $\theta$ is the angle between the field and the normal to the area.

SI unit: weber (Wb). $1\ \mathrm{Wb} = 1\ \mathrm{T\,m^2}$.

### Faraday's Law

**Statement.** The magnitude of the induced e.m.f. equals the rate of change of flux linkage:

$$\boxed{|\varepsilon| = N\left|\frac{d\Phi}{dt}\right|}$$

where $N$ is the number of turns and $N\Phi$ is the flux linkage.

### Lenz's Law

**Statement.** The direction of the induced current is such that it **opposes the change** in magnetic
flux that produced it.

Lenz's law is the physical content of the minus sign in the full Faraday equation:

$$\varepsilon = -N\frac{d\Phi}{dt}$$

**Energy conservation argument.** If the induced current reinforced the flux change rather than
opposing it, a self-amplifying cycle would create energy from nothing. The opposition ensures that
work must be done to maintain the flux change, and this work appears as electrical energy.

:::tip Exam Technique When applying Lenz's law: (1) identify the direction of the change in flux, (2)
determine the field direction that would oppose this change, (3) use the right-hand grip rule to find
the induced current direction. :::

### Motional e.m.f.

A conducting rod of length $l$ moving at velocity $v$ perpendicular to a uniform field $B$:

$$\boxed{\varepsilon = Blv}$$

**Proof.** In time $dt$, the rod sweeps area $l \cdot v\,dt$. Flux swept: $d\Phi = Blv\,dt$. By
Faraday's law: $\varepsilon = d\Phi/dt = Blv$. $\square$

**Alternative derivation.** Charges in the rod experience force $F = Bqv$ (by the magnetic force law).
This separates charges, creating an electric field $E = Blv/l = Bv$ inside the rod, giving
$\varepsilon = Bvl$.

## 7. The AC Generator

A coil of $N$ turns, area $A$, rotating at angular frequency $\omega$ in uniform field $B$:

$$\Phi = NBA\cos(\omega t)$$

$$\varepsilon = -\frac{d\Phi}{dt} = NBA\omega\sin(\omega t)$$

$$\boxed{\varepsilon = \varepsilon_0\sin(\omega t)}$$

where the peak e.m.f. is $\varepsilon_0 = NBA\omega$.

The output is sinusoidal with the same frequency as the rotation. The peak e.m.f. is proportional to
$N$, $B$, $A$, and $\omega$.

## 8. Transformers

A transformer consists of a primary coil and a secondary coil wound on a shared iron core.

### Ideal Transformer Equations

$$\boxed{\frac{V_s}{V_p} = \frac{N_s}{N_p}}$$

**Proof.** The same changing flux $\Phi$ threads both coils. By Faraday's law:
$V_p = N_p|d\Phi/dt|$ and $V_s = N_s|d\Phi/dt|$. Dividing gives the result. $\square$

For an ideal transformer (no energy losses), power is conserved:

$$V_p I_p = V_s I_s$$

$$\frac{I_s}{I_p} = \frac{N_p}{N_s}$$

A step-up transformer ($N_s \gt N_p$) increases voltage but decreases current. A step-down transformer
($N_s \lt N_p$) decreases voltage but increases current.

### Energy Losses in Real Transformers

| Loss mechanism | Cause | Mitigation |
|---|---|---|
| Eddy currents | Changing flux induces currents in the core | Laminated core (thin insulated sheets) |
| Hysteresis | Repeated magnetisation/demagnetisation of core | Soft iron core (low coercivity) |
| Resistive ($I^2R$) heating | Current in windings | Thick copper wire |
| Flux leakage | Not all flux links both coils | Efficient core geometry |

### Transformer Efficiency

$$\eta = \frac{V_s I_s}{V_p I_p} \times 100\%$$

Modern transformers achieve efficiencies exceeding 95% for power distribution applications.

<details>
<summary>Worked Example: Step-Down Transformer</summary>
A transformer with 2400 turns on the primary and 120 turns on the secondary is connected to 240 V AC.
The secondary delivers 8.0 A to a load. Assuming ideal behaviour, find the secondary voltage and
primary current.

**Answer.** $V_s = V_p \times N_s/N_p = 240 \times 120/2400 = 12$ V.

$I_p = I_s \times N_s/N_p = 8.0 \times 120/2400 = 0.40$ A.

Check: $V_p I_p = 240 \times 0.40 = 96$ W. $V_s I_s = 12 \times 8.0 = 96$ W. $\checkmark$

</details>

## 9. Self-Inductance

When the current in a coil changes, the changing flux through the coil itself induces an e.m.f.:

$$\boxed{\varepsilon = -L\frac{dI}{dt}}$$

where $L$ is the self-inductance in henry (H). $1\ \mathrm{H} = 1\ \mathrm{Wb\,A^{-1}} = 1\ \mathrm{V\,s\,A^{-1}}$.

### Energy Stored in an Inductor

$$\boxed{E = \frac{1}{2}LI^2}$$

**Proof.** Power delivered to inductor while current grows from 0 to $I$:

$$P = -\varepsilon I = LI\frac{dI}{dt}$$

$$E = \int_0^t P\,dt' = \int_0^I LI'\,dI' = \frac{1}{2}LI^2$$

$\square$

This is the magnetic analogue of $\frac{1}{2}CV^2$ for capacitors. The energy is stored in the
magnetic field, with energy density $u = B^2/(2\mu_0)$.

## 10. Force Between Parallel Current-Carrying Wires

### Derivation

Wire 1 (current $I_1$) creates field at distance $d$: $B_1 = \mu_0 I_1/(2\pi d)$.

Wire 2 (current $I_2$, length $L$) in this field experiences force:

$$F = B_1 I_2 L = \frac{\mu_0 I_1 I_2 L}{2\pi d}$$

$$\boxed{\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}}$$

### Direction

- Same-direction currents: attractive
- Opposite-direction currents: repulsive

This can be determined by applying the right-hand grip rule to wire 1 (to find $\mathbf{B}_1$ at wire
2) and Fleming's left-hand rule to wire 2 (to find the force direction).

### Definition of the Ampere

The ampere is defined such that two parallel wires 1 m apart, each carrying 1 A, experience a force of
exactly $2 \times 10^{-7}$ N m$^{-1}$.

## Problem Set

<details>
<summary>Problem 1</summary>
A wire of length 0.30 m carries 5.0 A at $30^\circ$ to a field of 0.40 T. Calculate the force.

**Answer.** $F = BIl\sin\theta = 0.40 \times 5.0 \times 0.30 \times \sin 30^\circ = 0.40 \times 5.0 \times 0.30 \times 0.5 = 0.30$ N.

</details>

<details>
<summary>Problem 2</summary>
An electron moves at $2.0 \times 10^6$ m s$^{-1}$ perpendicular to a 0.80 T field. Calculate the
radius of its circular path.

**Answer.** $r = \frac{m_e v}{Be} = \frac{9.11 \times 10^{-31} \times 2.0 \times 10^6}{0.80 \times 1.60 \times 10^{-19}} = 1.42 \times 10^{-5}$ m $= 14.2\,\mu$m.

</details>

<details>
<summary>Problem 3</summary>
A velocity selector has $E = 6.0 \times 10^5$ V m$^{-1}$ and $B = 0.20$ T. What velocity is selected?

**Answer.** $v = E/B = 6.0 \times 10^5 / 0.20 = 3.0 \times 10^6$ m s$^{-1}$.

</details>

<details>
<summary>Problem 4</summary>
A coil of 200 turns, each of area 0.010 m$^2$, is in a field that decreases from 0.50 T to 0.10 T in
0.05 s. Calculate the average induced e.m.f.

**Answer.** $d\Phi = A\,dB = 0.010 \times 0.40 = 0.004$ Wb.
$\varepsilon = N|d\Phi/dt| = 200 \times 0.004/0.05 = 16$ V.

</details>

<details>
<summary>Problem 5</summary>
A rod of length 0.50 m moves at 8.0 m s$^{-1}$ perpendicular to a 0.60 T field. Calculate the motional
e.m.f.

**Answer.** $\varepsilon = Blv = 0.60 \times 0.50 \times 8.0 = 2.4$ V.

</details>

<details>
<summary>Problem 6</summary>
A rectangular coil of 100 turns (0.10 m by 0.05 m) rotates at 3000 rpm in 0.20 T. Calculate the peak
e.m.f.

**Answer.** $\omega = 3000 \times 2\pi/60 = 314$ rad s$^{-1}$. $A = 0.10 \times 0.05 = 0.005$ m$^2$.
$\varepsilon_0 = NBA\omega = 100 \times 0.20 \times 0.005 \times 314 = 31.4$ V.

</details>

<details>
<summary>Problem 7</summary>
State Lenz's law and explain why it is a consequence of energy conservation.

**Answer.** Lenz's law: the induced current flows in a direction such that its magnetic effect opposes
the change in flux that produced it.

If the induced current reinforced the flux change, the increased flux would induce more current,
creating a positive feedback loop. This would generate electrical energy from nothing, violating
conservation of energy. The opposition ensures work must be done against the induced effects, and this
work is converted to electrical energy.

</details>

<details>
<summary>Problem 8</summary>
Two parallel wires 10 cm apart carry 10 A each in the same direction. Calculate the force per unit
length.

**Answer.** $\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d} = \frac{4\pi \times 10^{-7} \times 10 \times 10}{2\pi \times 0.10} = 2.0 \times 10^{-4}$ N m$^{-1}$ (attractive).

</details>

<details>
<summary>Problem 9</summary>
A proton enters a 0.40 T field at $30^\circ$ to the field lines with speed $5.0 \times 10^6$ m s$^{-1}$.
Calculate the radius and pitch of the helical path.

**Answer.** $v_\perp = 5.0 \times 10^6 \times \sin 30^\circ = 2.5 \times 10^6$ m s$^{-1}$.
$v_\parallel = 5.0 \times 10^6 \times \cos 30^\circ = 4.33 \times 10^6$ m s$^{-1}$.

$r = \frac{m_p v_\perp}{Bq} = \frac{1.67 \times 10^{-27} \times 2.5 \times 10^6}{0.40 \times 1.60 \times 10^{-19}} = 0.0653$ m $= 6.53$ cm.

$T = 2\pi m_p/(Bq) = 2\pi \times 1.67 \times 10^{-27}/(0.40 \times 1.60 \times 10^{-19}) = 1.64 \times 10^{-7}$ s.

$\mathrm{pitch} = v_\parallel T = 4.33 \times 10^6 \times 1.64 \times 10^{-7} = 0.710$ m $= 71.0$ cm.

</details>

<details>
<summary>Problem 10</summary>
A 100 mH inductor carries 2.0 A. Calculate the stored energy and the e.m.f. induced when the current
falls to zero in 5.0 ms.

**Answer.** $E = \frac{1}{2}LI^2 = \frac{1}{2} \times 0.100 \times 4.0 = 0.200$ J.

$\varepsilon = -L\,dI/dt = -0.100 \times (0 - 2.0)/(5.0 \times 10^{-3}) = 40$ V.

The positive sign confirms the inductor opposes the decrease in current.

</details>

<details>
<summary>Problem 11</summary>
A transformer with 2000 primary turns and 100 secondary turns is connected to 240 V AC. The secondary
delivers 5.0 A. Calculate the secondary voltage, primary current, and the power.

**Answer.** $V_s = 240 \times 100/2000 = 12$ V.
$I_p = 5.0 \times 100/2000 = 0.25$ A.
$P = V_s I_s = 12 \times 5.0 = 60$ W (ideal case).

</details>

<details>
<summary>Problem 12</summary>
Explain why eddy currents in a transformer core reduce efficiency, and describe how lamination
mitigates this.

**Answer.** The alternating magnetic flux induces circulating currents (eddy currents) in the
conductive iron core by Faraday's law. These currents dissipate energy as heat via $P = I^2R$,
reducing the useful power delivered to the secondary.

Lamination divides the core into thin, electrically insulated sheets perpendicular to the eddy
current paths. This increases the effective resistance of each current loop, reducing the magnitude
of the eddy currents and thus the power dissipated.

</details>
