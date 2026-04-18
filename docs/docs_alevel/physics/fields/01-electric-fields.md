---
title: Electric Fields
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: electric-fields
---

## Electric Fields

:::info
Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4
:::

## 1. Coulomb's Law

**Coulomb's Law.** The electrostatic force between two point charges $q_1$ and $q_2$ separated by
distance $r$ in vacuum is:

$$\boxed{F = \frac{q_1 q_2}{4\pi\varepsilon_0 r^2}}$$

where $\varepsilon_0 = 8.85 \times 10^{-12}$ F m$^{-1}$ is the **permittivity of free space**.

The force is **attractive** for opposite charges and **repulsive** for like charges. It acts along
the line joining the charges.

**Coulomb's constant:** $k = \frac{1}{4\pi\varepsilon_0} = 8.99 \times 10^9$ N m$^2$ C$^{-2}$.

### Comparison with Gravity

| Property          | Gravitational              | Electrostatic           |
| ----------------- | -------------------------- | ----------------------- |
| Force law         | $F = Gm_1m_2/r^2$          | $F = kq_1q_2/r^2$       |
| Constant          | $G = 6.67 \times 10^{-11}$ | $k = 8.99 \times 10^9$  |
| Nature            | Always attractive          | Attractive or repulsive |
| Acts on           | Mass                       | Charge                  |
| Relative strength | Very weak                  | Very strong             |

The electrostatic force is $\sim 10^{36}$ times stronger than gravity. We don't notice this in
everyday life because most objects have nearly equal numbers of positive and negative charges.

### Inverse Square Law Parallels

Both gravitational and electrostatic forces obey the inverse square law, $F \propto 1/r^2$. This
shared geometry arises because both fields propagate through three-dimensional space: the surface
area of a sphere grows as $4\pi r^2$, so field lines spread out and their density (which determines
field strength) decreases as $1/r^2$.

The key difference is that gravitational potential is always negative (zero at infinity, becoming
more negative as $r$ decreases), whereas electric potential can be positive or negative depending on
the source charge. This means gravitational bound systems always have negative total energy, while
electrostatic bound systems can be either bound ($U \lt 0$) or unbound ($U \gt 0$).

| Concept           | Gravitational Field                | Electric Field                              |
| ----------------- | ---------------------------------- | ------------------------------------------- |
| Field strength    | $g = GM/r^2$ (always towards mass) | $E = kQ/r^2$ (away from $+Q$, towards $-Q$) |
| Potential         | $V_g = -GM/r$ (always negative)    | $V = kQ/r$ (sign depends on $Q$)            |
| Potential energy  | $U = -GMm/r$ (always negative)     | $U = kq_1q_2/r$ (sign depends on charges)   |
| Gradient relation | $g = -dV_g/dr$                     | $E = -dV/dr$                                |
| Equipotentials    | Concentric spheres                 | Concentric spheres                          |
| Zero reference    | At infinity                        | At infinity                                 |
| Screening         | None (gravity unscreened)          | Conductors shield electric fields           |

**Defining similarity.** Both fields have a central $1/r$ potential, and both satisfy a
Gauss's-law-type conservation of flux. The field at radius $r$ from a point source depends only on
the total enclosed "charge" (mass or electric charge), not on its distribution. This means a
spherically symmetric shell of charge produces the same external field as a point charge at its
centre — a result exploited in both gravitational and electrostatic problems.

**Difference in screening.** A significant practical difference is that electric fields can be
screened by conductors (Faraday cages), whereas gravitational fields cannot. This is because there
are two types of electric charge that can rearrange themselves to cancel external fields, but there
is only one type of mass.

:::info
Board Coverage AQA: Comparison table is an expected synoptic link with gravitational fields
(Paper 2). Edexcel: Explicit comparison required in CP3. OCR (A): Potential energy comparison is
commonly tested (Paper 2). CIE: Gravitational--electrostatic analogies appear in P4.
:::

## 2. Electric Field Strength

**Definition.** The **electric field strength** $\mathbf{E}$ at a point is the force per unit
positive charge placed at that point:

$$\mathbf{E} = \frac{\mathbf{F}}{q}$$

SI units: N C$^{-1}$ (equivalent to V m$^{-1}$).

### Field of a Point Charge

$$\boxed{E = \frac{Q}{4\pi\varepsilon_0 r^2}}$$

**Derivation.** Place a test charge $q$ at distance $r$ from $Q$. By Coulomb's law:
$F = \frac{Qq}{4\pi\varepsilon_0 r^2}$. Therefore:

$$E = \frac{F}{q} = \frac{Q}{4\pi\varepsilon_0 r^2}$$

$\square$

The field points radially outward from a positive charge and radially inward towards a negative
charge.

### Uniform Electric Field

Between two parallel plates with p.d. $V$ and separation $d$:

$$\boxed{E = \frac{V}{d}}$$

**Derivation.** A charge $q$ moving between the plates experiences force $F = qE$. The work done is
$W = Fd = qEd$. But also $W = qV$. Therefore $qEd = qV$, giving $E = V/d$. $\square$

### Field of an Infinite Plane of Charge

Consider an infinite plane with uniform surface charge density $\sigma$ (C m$^{-2}$). The field on
either side of the plane is:

$$\boxed{E = \frac{\sigma}{2\varepsilon_0}}$$

This is remarkable: the field is **independent of distance** from the plane. No matter how far away
you move, the field strength does not decrease. This is because an infinite plane always subtends
the same solid angle from any observation point.

### Proof of the Infinite Plane Field

Use a cylindrical Gaussian surface of cross-sectional area $A$ piercing the plane, with equal-length
extensions on each side. By symmetry, $\mathbf{E}$ is perpendicular to the plane, has equal
magnitude on both sides, and has no component parallel to the plane.

Flux through both end caps: $\Phi_E = EA + EA = 2EA$. (No flux through the curved surface since
$\mathbf{E}$ is parallel to it.)

Enclosed charge: $Q_{\mathrm{enc}} = \sigma A$.

By Gauss's law, $\Phi_E = Q_{\mathrm{enc}}/\varepsilon_0$:

$$2EA = \frac{\sigma A}{\varepsilon_0}$$

$$E = \frac{\sigma}{2\varepsilon_0}$$

$\square$

**Connection to parallel plates.** This result explains why the field between two large parallel
plates is approximately uniform. Near the centre of the plates, each plate's contribution resembles
that of an infinite plane. Between the plates, the fields add:
$E_{\mathrm{total}} = \sigma/\varepsilon_0$. Outside the plates, the fields cancel:
$E_{\mathrm{total}} = 0$. This is the ideal parallel-plate capacitor field, and it justifies the
formula $E = V/d$ for the uniform field region.

:::info
Board Coverage AQA: Gauss's law is not formally required but the uniform field result for
parallel plates is given. Edexcel: Only the uniform field result $E = V/d$ is required. OCR (A):
Gauss's law may appear as extension material in Module 6. CIE: The infinite plane result is not in
the syllabus but is useful for understanding parallel plates.
:::

## 3. Electric Potential

**Definition.** The **electric potential** $V$ at a point is the work done per unit positive charge
to bring a small test charge from infinity to that point:

$$\boxed{V = \frac{Q}{4\pi\varepsilon_0 r}}$$

SI units: volts (V), where 1 V = 1 J C$^{-1}$.

**Derivation.** The work done to bring $q$ from $\infty$ to $r$ against the electric force:

$$W = \int_{\infty}^{r} F\,dr' = \int_{\infty}^{r} \frac{Qq}{4\pi\varepsilon_0 r'^2}\,dr' = \frac{Qq}{4\pi\varepsilon_0}\left[-\frac{1}{r'}\right]_{\infty}^{r} = \frac{Qq}{4\pi\varepsilon_0 r}$$

$$V = \frac{W}{q} = \frac{Q}{4\pi\varepsilon_0 r}$$

$\square$

**Intuition.** Potential is positive near a positive charge (work must be done against repulsion)
and negative near a negative charge (work is done by the attraction). Potential decreases with
distance, approaching zero at infinity.

### Electric Potential Energy

The potential energy of two charges $q_1$ and $q_2$ separated by $r$:

$$U = \frac{q_1 q_2}{4\pi\varepsilon_0 r} = q_2 V_1$$

where $V_1 = q_1/(4\pi\varepsilon_0 r)$ is the potential due to $q_1$ at the location of $q_2$.

### Energy Stored in a Charged Capacitor

When a capacitor of capacitance $C$ carries charge $Q$ at p.d. $V$ ($Q = CV$), the energy stored is:

$$\boxed{U = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}}$$

### Proof of Energy in a Capacitor

The energy stored equals the total work done in transferring charge onto the capacitor. At any
instant during charging, the p.d. across the plates is $v = q/C$. To transfer a small increment of
charge $dq$ against this p.d., the work done is $dW = v\,dq = \frac{q}{C}\,dq$.

$$W = \int_{0}^{Q} \frac{q}{C}\,dq = \frac{1}{C}\left[\frac{q^2}{2}\right]_{0}^{Q} = \frac{Q^2}{2C}$$

Since $Q = CV$: $U = \frac{1}{2}CV^2$. And since $V = Q/C$: $U = \frac{1}{2}QV$.

$\square$

**Intuition.** The factor of $\frac{1}{2}$ arises because the average p.d. during charging is $V/2$
(the p.d. grows linearly from 0 to $V$ as charge accumulates). The total work is therefore
$W = Q \times V/2 = \frac{1}{2}QV$, which is the area of the triangle under the $V$--$q$ graph. This
graphical interpretation is frequently tested: sketch the $V$--$Q$ graph and find the area to
determine stored energy.

**Where does the energy go?** The energy is stored in the electric field between the plates. For a
parallel-plate capacitor of area $A$ and separation $d$, the energy density (energy per unit volume)
is:

$$u = \frac{U}{Ad} = \frac{\frac{1}{2}CV^2}{Ad} = \frac{\frac{1}{2}\left(\frac{\varepsilon_0 A}{d}\right)\left(Ed\right)^2}{Ad} = \frac{1}{2}\varepsilon_0 E^2$$

This result is general: any electric field of strength $E$ stores energy density
$\frac{1}{2}\varepsilon_0 E^2$. Doubling the field strength quadruples the energy density.

**Comparison with gravitational energy.** Just as gravitational potential energy can be visualised
as the area under the force--distance curve ($W = \int F\,dr$), the energy in a capacitor is the
area under the voltage--charge curve. Both represent stored field energy, and both can be recovered
as useful work when the system returns to its equilibrium state.

:::info
Board Coverage AQA: Energy stored in capacitors is required (6.4.3). Edexcel: Required in
Topic 11 (capacitor energy and charging/discharging graphs). OCR (A): Required in 6.3.2, including
deriving energy from the area under a $V$--$Q$ graph. CIE: Required in P3 (Chapter 22), including
the three equivalent forms.
:::

## 4. Relationship Between $E$ and $V$: $E = -dV/dr$

The electric field is the negative gradient of the electric potential.

### Proof

Consider a test charge $q$ moved by a small distance $dr$ in the direction of the field. The work
done by the field is:

$$dW = F\,dr = qE\,dr$$

This work comes from the change in potential energy: $dW = -q\,dV$ (negative because the field does
work, reducing potential energy).

$$qE\,dr = -q\,dV$$

$$\boxed{E = -\frac{dV}{dr}}$$

In 3D: $\mathbf{E} = -\nabla V$.

**Verification for a point charge.** $V = \frac{Q}{4\pi\varepsilon_0 r}$.

$$-\frac{dV}{dr} = -\frac{Q}{4\pi\varepsilon_0}\left(-\frac{1}{r^2}\right) = \frac{Q}{4\pi\varepsilon_0 r^2} = E \quad \checkmark$$

**Intuition.** The minus sign tells us that the electric field points in the direction of
**decreasing** potential — a positive charge "rolls downhill" in the potential landscape.

## 5. Charged Particle Motion in a Uniform Electric Field

Consider a particle of charge $q$ and mass $m$ entering a uniform electric field $E$ between
parallel plates of length $L$, with initial velocity $v$ perpendicular to the field.

**Horizontal motion** (perpendicular to field): uniform velocity.

$$x = vt, \qquad t = \frac{L}{v}$$

**Vertical motion** (parallel to field): uniform acceleration.

$$F = qE, \qquad a = \frac{qE}{m}$$

$$y = \frac{1}{2}at^2 = \frac{qE}{2m} \cdot \frac{L^2}{v^2}$$

**Derivation of the parabolic trajectory.** Eliminating $t$: $y = \frac{qE}{2mv^2}x^2$. This is a
parabola ($y \propto x^2$).

**Vertical velocity at exit:**

$$v_y = at = \frac{qEL}{mv}$$

**Deflection angle:**

$$\tan\theta = \frac{v_y}{v} = \frac{qEL}{mv^2}$$

<details>
<summary>Example: Electron Deflection</summary>
An electron enters a uniform electric field of 5000 V m$^{-1}$ between plates of length 5.0 cm with
speed $3.0 \times 10^7$ m s$^{-1}$. Calculate the vertical deflection.

**Answer.**
$a = \frac{eE}{m_e} = \frac{1.60 \times 10^{-19} \times 5000}{9.11 \times 10^{-31}} = 8.78 \times 10^{14}$
m s$^{-2}$.

$t = L/v = 0.050/3.0 \times 10^7 = 1.67 \times 10^{-9}$ s.

$y = \frac{1}{2}at^2 = \frac{1}{2} \times 8.78 \times 10^{14} \times (1.67 \times 10^{-9})^2 = 1.22 \times 10^{-3}$
m $= 1.22$ mm.
</details>

## 6. Real-World Applications of Electric Fields

### Van de Graaff Generator

A Van de Graaff generator uses a moving rubber or latex belt to transport charge to a hollow metal
dome. As charge accumulates on the outer surface of the dome, the electric potential rises (since
$V = kQ/r$ and the dome has a large but finite radius). Potentials of several million volts can be
achieved in laboratory demonstrations.

**Key physics:**

- Charge resides entirely on the **outer surface** of the dome. A conductor in electrostatic
  equilibrium has zero electric field inside, so no charge is needed on the inner surface to shield
  the interior.
- The dome is approximately spherical, so the field just outside is $E = kQ/r^2$, directed radially
  outward for a positively charged dome.
- When the field at the surface exceeds the breakdown strength of air ($E \approx 3 \times 10^6$ V
  m$^{-1}$ at STP), spark discharge occurs to any nearby grounded object.
- The potential at breakdown is $V_{\mathrm{breakdown}} = E_{\mathrm{breakdown}} \times r$. Larger domes
  reach higher breakdown potentials because the same surface charge density produces a weaker field
  on a larger sphere ($E = \sigma/\varepsilon_0$ for a sphere).

**Safety demonstration.** A person touching the dome while standing on an insulating platform also
acquires a high potential. Their hair stands on end because each strand acquires the same sign of
charge, and strands repel each other via Coulomb's law — a vivid demonstration of electrostatic
repulsion.

:::info
Board Coverage AQA: Van de Graaff generators are a specified practical context (required
practical 10). Edexcel: Mentioned in CP3 and CP6 as an example of charge accumulation and high
potential. OCR (A): Can appear in Paper 2 as a context question. CIE: Not explicitly named but the
underlying physics (field of a sphere, potential, discharge) is examined in P4.
:::

### Inkjet Printers

Inkjet printers use electric fields to precisely control the trajectory of charged ink droplets.
There are two main types:

1. **Continuous inkjet (CIJ):** A stream of ink is broken into uniform droplets by a vibrating
   piezoelectric crystal at a rate of roughly 100,000 droplets per second. Droplets pass through a
   charging electrode where each droplet is given a controlled charge. The charged droplets then
   pass between deflection plates creating a transverse electric field. The vertical deflection is
   $y = qEL^2/(2mv^2)$, so different charges produce different deflections. Uncharged droplets are
   collected in a gutter and recycled; charged droplets strike the paper to form characters.

2. **Drop-on-demand (DOD):** Thermal or piezoelectric actuators fire individual droplets only where
   needed. Some designs still use electric fields for final trajectory correction.

**Physics involved.** The deflection of each droplet in the plates is exactly the parabolic
trajectory problem from Section 5. By varying the charge $q$ on each droplet (controlled by the
charging electrode voltage), the printer achieves different vertical positions on the paper. The
horizontal position is controlled by the timing of droplet ejection combined with paper motion.

### Electrostatic Precipitator

Electrostatic precipitators remove fine particulate matter (dust, ash, smoke) from industrial
exhaust gases. They are widely used in coal-fired power stations, waste incinerators, and cement
plants, and can remove over 99% of particulate emissions.

**How it works:**

1. A thin high-voltage wire (at $\sim 50$ kV) runs along the centre of a duct or between large
   grounded collecting plates. The strong field near the wire ionises the surrounding air, creating
   a corona discharge.
2. The electric field (directed radially inward from the outer collecting plates towards the central
   wire, since the wire is negative) drives negative ions towards the collecting plates.
3. Particulate matter in the gas stream collides with these ions, acquires a negative charge, and is
   then attracted to the grounded collecting plates by the electric field.
4. The plates are periodically rapped (mechanically vibrated) to dislodge the collected dust into
   hoppers below for disposal or recycling.

**Efficiency.** Modern electrostatic precipitators can capture particles as small as $0.01\,\mu$m.
The collection efficiency depends on the drift velocity of charged particles, which increases with
both the charge acquired by the particle and the electric field strength. The Deutsch--Anderson
equation relates collection efficiency $\eta$ to plate area, gas flow rate, and drift velocity.

:::info
Board Coverage AQA: Electrostatic precipitators appear as an application of electric fields
in Paper 2. Edexcel: Listed as an application in CP3. OCR (A): May appear as an unseen context
question in Paper 2 requiring application of field and force principles. CIE: Industrial
applications of electric fields are examinable in P4.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
Two point charges, $q_1 = +3.0\,\mu$C and $q_2 = -5.0\,\mu$C, are separated by 0.20 m. Calculate the
electrostatic force between them.

**Answer.**
$F = \frac{kq_1 q_2}{r^2} = \frac{8.99 \times 10^9 \times 3.0 \times 10^{-6} \times 5.0 \times 10^{-6}}{0.04} = \frac{0.135}{0.04} = 3.37$
N (attractive).

<b>If you get this wrong, revise:</b> [Coulomb's Law](#1-coulombs-law)
</details>

<details>
<summary>Problem 2</summary>
Calculate the electric field strength at a distance of 0.10 m from a point charge of $+8.0\,\mu$C.

**Answer.**
$E = \frac{kQ}{r^2} = \frac{8.99 \times 10^9 \times 8.0 \times 10^{-6}}{0.01} = \frac{71920}{0.01} = 7.19 \times 10^6$
N C$^{-1}$.

<b>If you get this wrong, revise:</b> [Field of a Point Charge](#field-of-a-point-charge)
</details>

<details>
<summary>Problem 3</summary>
Calculate the electric potential at a distance of 5.0 cm from a $+2.0\,\mu$C point charge.

**Answer.**
$V = \frac{kQ}{r} = \frac{8.99 \times 10^9 \times 2.0 \times 10^{-6}}{0.050} = \frac{17980}{0.050} = 3.60 \times 10^5$
V $= 360$ kV.

<b>If you get this wrong, revise:</b> [Electric Potential](#3-electric-potential)
</details>

<details>
<summary>Problem 4</summary>
Starting from $E = -dV/dr$, derive the electric field of a point charge from its potential.

**Answer.** $V = \frac{Q}{4\pi\varepsilon_0 r}$.
$E = -\frac{dV}{dr} = -\frac{Q}{4\pi\varepsilon_0} \cdot \frac{d}{dr}\left(\frac{1}{r}\right) = -\frac{Q}{4\pi\varepsilon_0}\left(-\frac{1}{r^2}\right) = \frac{Q}{4\pi\varepsilon_0 r^2}$.

<b>If you get this wrong, revise:</b>
[Relationship Between $E$ and $V$](#4-relationship-between-e-and-v-e--dvdr)
</details>

<details>
<summary>Problem 5</summary>
Two parallel plates are separated by 2.0 cm with a p.d. of 500 V across them. Calculate the electric
field strength and the force on a proton between the plates.

**Answer.** $E = V/d = 500/0.020 = 25000$ V m$^{-1}$.

$F = qE = 1.60 \times 10^{-19} \times 25000 = 4.0 \times 10^{-15}$ N.

<b>If you get this wrong, revise:</b> [Uniform Electric Field](#uniform-electric-field)
</details>

<details>
<summary>Problem 6</summary>
A proton is released from rest in a uniform electric field of $3.0 \times 10^4$ V m$^{-1}$.
Calculate its acceleration and the kinetic energy gained after moving 5.0 cm.

**Answer.**
$a = \frac{qE}{m} = \frac{1.60 \times 10^{-19} \times 3.0 \times 10^4}{1.67 \times 10^{-27}} = 2.88 \times 10^{12}$
m s$^{-2}$.

$E_k = qV = qEd = 1.60 \times 10^{-19} \times 3.0 \times 10^4 \times 0.050 = 2.4 \times 10^{-16}$ J.

<b>If you get this wrong, revise:</b>
[Charged Particle Motion in a Uniform Electric Field](#5-charged-particle-motion-in-a-uniform-electric-field)
</details>

<details>
<summary>Problem 7</summary>
Calculate the electric potential energy of two charges, $q_1 = +4.0\,\mu$C and $q_2 = +6.0\,\mu$C,
separated by 0.30 m.

**Answer.**
$U = \frac{kq_1 q_2}{r} = \frac{8.99 \times 10^9 \times 4.0 \times 10^{-6} \times 6.0 \times 10^{-6}}{0.30} = \frac{0.2158}{0.30} = 0.719$
J.

<b>If you get this wrong, revise:</b> [Electric Potential Energy](#electric-potential-energy)
</details>

<details>
<summary>Problem 8</summary>
An electron with speed $2.0 \times 10^7$ m s$^{-1}$ enters a uniform electric field of 8000 V
m$^{-1}$ perpendicular to its motion. The plates are 8.0 cm long. Calculate the deflection angle.

**Answer.**
$a = \frac{eE}{m_e} = \frac{1.60 \times 10^{-19} \times 8000}{9.11 \times 10^{-31}} = 1.405 \times 10^{15}$
m s$^{-2}$.

$t = L/v = 0.080/(2.0 \times 10^7) = 4.0 \times 10^{-9}$ s.

$v_y = at = 1.405 \times 10^{15} \times 4.0 \times 10^{-9} = 5.62 \times 10^6$ m s$^{-1}$.

$\tan\theta = v_y/v = 5.62 \times 10^6 / 2.0 \times 10^7 = 0.281$. $\theta = 15.7^\circ$.

<b>If you get this wrong, revise:</b>
[Charged Particle Motion in a Uniform Electric Field](#5-charged-particle-motion-in-a-uniform-electric-field)
</details>

<details>
<summary>Problem 9</summary>
Three equal charges of $+2.0\,\mu$C are placed at the corners of an equilateral triangle of side
0.10 m. Calculate the net electric field at the centre of the triangle.

**Answer.** The centre is at distance $r = \frac{0.10}{\sqrt{3}} = 0.0577$ m from each charge.

$E_{\mathrm{one}} = \frac{kQ}{r^2} = \frac{8.99 \times 10^9 \times 2.0 \times 10^{-6}}{0.00333} = 5.40 \times 10^6$
N C$^{-1}$.

By symmetry, the fields from the three charges cancel out (they are 120° apart and equal in
magnitude). $E_{\mathrm{net}} = 0$.

<b>If you get this wrong, revise:</b> [Field of a Point Charge](#field-of-a-point-charge)
</details>

<details>
<summary>Problem 10</summary>
A small charged sphere of mass 0.50 g is suspended by a thread in a uniform horizontal electric
field of $5.0 \times 10^3$ V m$^{-1}$. The thread makes an angle of $15^\circ$ with the vertical.
Calculate the charge on the sphere.

**Answer.** Resolving horizontally: $qE = T\sin 15^\circ$. Resolving vertically: $mg = T\cos 15^\circ$.

$\tan 15° = \frac{qE}{mg}$.
$q = \frac{mg\tan 15°}{E} = \frac{0.50 \times 10^{-3} \times 9.81 \times 0.2679}{5000} = \frac{1.314 \times 10^{-3}}{5000} = 2.63 \times 10^{-7}$
C $= 263$ nC.

<b>If you get this wrong, revise:</b> [Electric Field Strength](#2-electric-field-strength)
</details>

<details>
<summary>Problem 11</summary>
A Van de Graaff generator has a dome of radius 0.30 m. Calculate the electric field strength and the
potential at the surface when the dome carries a charge of $1.0\,\mu$C. At what potential will spark
discharge occur if the breakdown field of air is $3.0 \times 10^6$ V m$^{-1}$?

**Answer.**
$E = \frac{kQ}{r^2} = \frac{8.99 \times 10^9 \times 1.0 \times 10^{-6}}{0.090} = 9.99 \times 10^4$ V
m$^{-1}$.

$V = \frac{kQ}{r} = \frac{8.99 \times 10^9 \times 1.0 \times 10^{-6}}{0.30} = 3.00 \times 10^4$ V
$= 30.0$ kV.

For breakdown:
$V_{\mathrm{breakdown}} = E_{\mathrm{breakdown}} \times r = 3.0 \times 10^6 \times 0.30 = 9.0 \times 10^5$
V $= 900$ kV.

<b>If you get this wrong, revise:</b> [Field of a Point Charge](#field-of-a-point-charge),
[Electric Potential](#3-electric-potential), [Van de Graaff Generator](#van-de-graaff-generator)
</details>

<details>
<summary>Problem 12</summary>
A $10$ nF capacitor is charged to $200$ V. Calculate the energy stored. The capacitor is then
disconnected from the supply and the plate separation is doubled. Calculate the new energy stored
and explain where the extra energy came from.

**Answer.** Initial energy:
$U = \frac{1}{2}CV^2 = \frac{1}{2} \times 10 \times 10^{-9} \times (200)^2 = 2.0 \times 10^{-4}$ J
$= 200\,\mu$J.

Since the capacitor is disconnected, charge $Q$ is conserved. When $d$ doubles, $C' = C/2 = 5.0$ nF.

$V' = Q/C' = (CV)/C' = (10 \times 10^{-9} \times 200)/(5.0 \times 10^{-9}) = 400$ V.

$U' = \frac{1}{2}C'V'^2 = \frac{1}{2} \times 5.0 \times 10^{-9} \times (400)^2 = 4.0 \times 10^{-4}$
J $= 400\,\mu$J.

The energy doubled because work was done against the attractive force between the oppositely charged
plates when pulling them apart. This mechanical work is stored as additional electric field energy.

<b>If you get this wrong, revise:</b>
[Energy Stored in a Charged Capacitor](#energy-stored-in-a-charged-capacitor)
</details>

<details>
<summary>Problem 13</summary>
In an electrostatic precipitator, a dust particle of mass $1.0 \times 10^{-12}$ kg acquires a charge
of $-50$ fC and enters a region with electric field $2.0 \times 10^5$ V m$^{-1}$ directed towards
the collecting plate. If the particle must travel $0.50$ m to reach the plate, how long does it
take? (Assume uniform field and negligible air resistance.)

**Answer.** $F = qE = 50 \times 10^{-15} \times 2.0 \times 10^5 = 1.0 \times 10^{-8}$ N.

$a = F/m = 1.0 \times 10^{-8} / 1.0 \times 10^{-12} = 1.0 \times 10^4$ m s$^{-2}$.

$s = \frac{1}{2}at^2$, so
$t = \sqrt{2s/a} = \sqrt{2 \times 0.50 / 1.0 \times 10^4} = \sqrt{1.0 \times 10^{-4}} = 0.010$ s
$= 10$ ms.

<b>If you get this wrong, revise:</b>
[Charged Particle Motion in a Uniform Electric Field](#5-charged-particle-motion-in-a-uniform-electric-field),
[Electrostatic Precipitator](#electrostatic-precipitator)
</details>

<details>
<summary>Problem 14</summary>
Two charges, $q_A = +4.0\,\mu$C and $q_B = -2.0\,\mu$C, are placed on the x-axis at $x = 0$ and
$x = 0.20$ m respectively. Find the point on the x-axis (outside the two charges) where the electric
field is zero.

**Answer.** Let the zero-field point be at distance $x$ from charge $A$ (to the right of charge
$B$), so it is at distance $(x - 0.20)$ from charge $B$.

For the fields to cancel (both point rightwards at this location, since $A$ repels a positive test
charge and $B$ attracts):

$\frac{kq_A}{x^2} = \frac{kq_B}{(x - 0.20)^2}$

$\frac{4.0}{x^2} = \frac{2.0}{(x - 0.20)^2}$

$2(x - 0.20)^2 = x^2$

$2x^2 - 0.80x + 0.08 = x^2$

$x^2 - 0.80x + 0.08 = 0$

$x = \frac{0.80 \pm \sqrt{0.64 - 0.32}}{2} = \frac{0.80 \pm 0.566}{2}$

Taking the solution outside both charges: $x = \frac{0.80 + 0.566}{2} = 0.683$ m.

The zero-field point is at $x = 0.683$ m on the x-axis.

<b>If you get this wrong, revise:</b> [Field of a Point Charge](#field-of-a-point-charge)
</details>

<details>
<summary>Problem 15</summary>
Compare the gravitational and electrostatic forces between a proton and an electron in a hydrogen
atom (separation $r = 5.29 \times 10^{-11}$ m). By what factor does the electrostatic force exceed
the gravitational force?

**Answer.**
$F_e = \frac{kq_1q_2}{r^2} = \frac{8.99 \times 10^9 \times (1.60 \times 10^{-19})^2}{(5.29 \times 10^{-11})^2} = \frac{2.30 \times 10^{-28}}{2.80 \times 10^{-21}} = 8.22 \times 10^{-8}$
N.

$F_g = \frac{Gm_pm_e}{r^2} = \frac{6.67 \times 10^{-11} \times 1.67 \times 10^{-27} \times 9.11 \times 10^{-31}}{(5.29 \times 10^{-11})^2} = \frac{1.01 \times 10^{-67}}{2.80 \times 10^{-21}} = 3.61 \times 10^{-47}$
N.

Ratio: $\frac{F_e}{F_g} = \frac{8.22 \times 10^{-8}}{3.61 \times 10^{-47}} = 2.28 \times 10^{39}$.

The electrostatic force is $\sim 10^{39}$ times stronger than gravity. This enormous ratio explains
why atomic and molecular physics are governed entirely by electromagnetic forces, with gravity only
becoming significant at macroscopic scales where charges cancel almost perfectly.

<b>If you get this wrong, revise:</b> [Coulomb's Law](#1-coulombs-law),
[Comparison with Gravity](#comparison-with-gravity)
</details>

## Board-Specific Notes

### AQA (7408)

- Electric fields are assessed in Paper 2 (Sections 6.1--6.2).
- Coulomb's law and the inverse square law formula are provided on the data sheet.
- Required practical 10 investigates electric fields using conducting paper (mapping equipotentials
  and field lines).
- The comparison with gravitational fields is a common synoptic link, particularly in multi-mark
  questions.
- Graphical methods for determining energy stored (area under $V$--$Q$ curve) are frequently
  examined.

### Edexcel (9PH0)

- Electric fields are covered in Core Practical 3 (CP3) and Topic 11.
- Edexcel places emphasis on practical applications and numerical problem-solving using the formula
  booklet.
- The energy stored in capacitors is covered in Topic 11 alongside charging and discharging through
  resistors.
- Deflection of charged particles (the "electron gun" and CRT context) is a recurring exam theme.
- Questions often require identifying the correct equation from the formula sheet for multi-step
  calculations.

### OCR (A) (H556)

- Electric fields appear in Module 6 (Sections 6.1 and 6.3).
- OCR commonly tests full derivations from first principles (e.g., deriving $E = -dV/dr$ or the
  potential of a point charge from Coulomb's law).
- The $V$--$Q$ graph area-under-curve argument for energy is a staple of OCR marking schemes.
- Gravitational--electrostatic comparison questions are a hallmark of OCR synoptic assessment.
- Multi-part questions often begin with a recall/derivation and build to an application or
  calculation.

### CIE (9702)

- Electric fields are in Paper 4 (A2), Chapters 21--22 of the coursebook.
- CIE requires the most mathematical rigour: full derivations from Coulomb's law to potential and
  field strength are expected.
- CIE commonly combines electric fields with mechanics (projectile motion of charged particles in
  fields).
- Permittivity calculations and relative permittivity ($\varepsilon_r$) of dielectric materials are
  explicitly examinable.
- Numerical answers are typically given to 2 or 3 significant figures, matching the precision of the
  data provided.

:::

:::

:::

:::

:::
