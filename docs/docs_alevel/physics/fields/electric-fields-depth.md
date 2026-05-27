---
title: Electric Fields
description:
  "A-Level Physics notes on Electric Fields: 1. Coulomb's Law; Superposition Principle; Comparison
  with Gravitational Force; 2. Electric Field Strength."
date: 2026-04-23T00:00:00.000Z
tags: [Physics, ALevel]
categories: [Physics]
slug: electric-fields-depth
---

## Electric Fields

:::info Board Coverage AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4 :::

## 1. Coulomb's Law

**Coulomb's Law.** The electrostatic force between two point charges $q_1$ and $q_2$ separated by
Distance $r$ in vacuum is:

$$\boxed{F = \frac◆LB◆q_1 q_2◆RB◆◆LB◆4\pi\varepsilon_0 r^2◆RB◆}$$

Where $\varepsilon_0 = 8.85 \times 10^{-12}$ F m$^{-1}$ is the permittivity of free space and
$k = 1/(4\pi\varepsilon_0) = 8.99 \times 10^9$ N m$^2$ C$^{-2}$ is Coulomb's constant.

The force is **repulsive** for like charges and **attractive** for opposite charges, directed along
the Line joining them.

### Superposition Principle

The net force on a charge due to multiple other charges is the **vector sum** of the individual
Coulomb forces:

$$\mathbf{F}_{\mathrm{net}} = \sum_i \frac◆LB◆q\,q_i◆RB◆◆LB◆4\pi\varepsilon_0 r_i^2◆RB◆\,\hat{\mathbf{r}}_i$$

This linearity is fundamental: each pair of charges interacts independently of all others.

### Comparison with Gravitational Force

| Property          | Gravitational              | Electrostatic           |
| ----------------- | -------------------------- | ----------------------- |
| Law               | $F = Gm_1m_2/r^2$          | $F = kq_1q_2/r^2$       |
| Constant          | $G = 6.67 \times 10^{-11}$ | $k = 8.99 \times 10^9$  |
| Nature            | Always attractive          | Attractive or repulsive |
| Acts on           | Mass                       | Charge                  |
| Relative strength | Very weak                  | Very strong             |

The electrostatic force is approximately $10^{36}$ times stronger than gravity for proton--proton
Interactions. This enormous ratio explains why atomic and molecular structure is governed entirely
by Electromagnetic forces.

## 2. Electric Field Strength

**Definition.** The electric field strength $\mathbf{E}$ at a point is the force per unit positive
Charge:

$$\boxed{\mathbf{E} = \frac◆LB◆\mathbf{F}◆RB◆◆LB◆q◆RB◆}$$

SI units: N C$^{-1}$Equivalent to V m$^{-1}$.

### Field of a Point Charge

$$\boxed{E = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0 r^2◆RB◆}$$

**Proof.** Place test charge $q$ at distance $r$ from $Q$. By Coulomb's law:
$F = Qq/(4\pi\varepsilon_0 r^2)$. Therefore $E = F/q = Q/(4\pi\varepsilon_0 r^2)$. $\square$

The field points radially outward from a positive charge and radially inward toward a negative
charge.

### Uniform Electric Field Between Parallel Plates

$$\boxed{E = \frac{V}{d}}$$

Where $V$ is the potential difference and $d$ is the plate separation.

**Proof.** A charge $q$ between the plates experiences force $F = qE$. Work done moving from one
plate To the other: $W = Fd = qEd$. But also $W = qV$. Therefore $qEd = qV$Giving $E = V/d$.
$\square$

The field is uniform (constant magnitude and direction) between the plates, with fringe effects at
the Edges.

### Electric Field Lines

Field lines provide a visual representation of the electric field:

- The direction of the line at any point gives the direction of $\mathbf{E}$.
- The density of lines is proportional to the field strength.
- Lines begin on positive charges and end on negative charges.
- Lines never cross (the field has a unique direction at every point).
- Lines are perpendicular to conducting surfaces at equilibrium.

## 3. Electric Potential

**Definition.** The electric potential $V$ at a point is the work done per unit positive charge in
Bringing a small test charge from infinity to that point:

$$\boxed{V = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0 r◆RB◆}$$

SI units: volts (V), where 1 V = 1 J C$^{-1}$.

### Derivation from Coulomb's Law

$$V = \frac{W}{q} = \frac{1}{q}\int_{\infty}^{r}\frac◆LB◆Qq◆RB◆◆LB◆4\pi\varepsilon_0 r'^2◆RB◆\,dr' = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\left[-\frac{1}{r'}\right]_{\infty}^{r} = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0 r◆RB◆$$

$\square$

**Sign convention.** Potential is positive near a positive charge (work must be done against
repulsion) And negative near a negative charge (the field does work). Potential decreases with
distance, Approaching zero at infinity.

### Field--Potential Relationship

$$\boxed{E = -\frac{dV}{dr}}$$

**Proof.** Consider a test charge $q$ moved by $dr$ in the direction of the field. Work done by the
Field: $dW = qE\,dr$. This equals the loss in potential energy: $dW = -q\,dV$. Therefore
$qE\,dr = -q\,dV$Giving $E = -dV/dr$. $\square$

The minus sign means the field points in the direction of decreasing potential.

**Verification for a point charge.** $V = Q/(4\pi\varepsilon_0 r)$.

$-\frac{dV}{dr} = -\frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\left(-\frac{1}{r^2}\right) = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0 r^2◆RB◆ = E\quad\checkmark$

### Electric Potential Energy

$$\boxed{U = \frac◆LB◆q_1 q_2◆RB◆◆LB◆4\pi\varepsilon_0 r◆RB◆}$$

This is the work required to bring two charges from infinite separation to distance $r$.

## 4. Equipotential Surfaces

**Definition.** An equipotential surface is a surface on which every point has the same electric
Potential.

### Properties

1. **No work is done** moving a charge along an equipotential surface (since $\Delta V = 0$).
2. The electric field is always **perpendicular** to equipotential surfaces (since $E = -dV/dr$ and
   $dV = 0$ along the surface).
3. Equipotential surfaces **never cross** (each point has a unique potential).
4. For a point charge, equipotentials are concentric spheres.
5. For a uniform field, equipotentials are parallel planes perpendicular to the field.
6. Equipotentials are closer together where the field is stronger (steeper potential gradient).

### Mapping Equipotentials Experimentally

A practical method uses conducting paper with electrodes painted on:

1. Connect electrodes to a power supply, establishing a potential difference.
2. Use a voltmeter probe to locate points of equal potential.
3. Plot the equipotential lines by joining points of equal voltage.
4. Draw field lines perpendicular to the equipotentials.

:::warning Warning The field is zero on an equipotential. The field is non-zero and perpendicular;
only the component Tangent to the surface is zero. :::

## 5. Motion of Charged Particles in Uniform Fields

### Parabolic Trajectory

A particle of charge $q$ and mass $m$ enters a uniform electric field $E$ with initial velocity $v$
Perpendicular to the field, between plates of length $L$.

**Horizontal** (perpendicular to field): uniform motion.

$$x = vt, \qquad t = \frac{L}{v}$$

**Vertical** (parallel to field): uniformly accelerated.

$$F = qE, \qquad a = \frac{qE}{m}$$

$$y = \frac{1}{2}at^2 = \frac{qEL^2}{2mv^2}$$

Eliminating $t$: $y = \frac{qE}{2mv^2}\,x^2$. This is a parabola.

**Vertical velocity at exit:** $v_y = at = \frac{qEL}{mv}$.

**Deflection angle:** $\tan\theta = \frac{v_y}{v} = \frac{qEL}{mv^2}$.

### Energy Method

An alternative approach uses energy conservation. The kinetic energy gained by the particle equals
the Work done by the field:

$$\Delta E_k = qV = qEd$$

Where $d$ is the vertical displacement. This is often quicker than the kinematic approach.

<details>
<summary>Worked Example: Electron Deflection</summary>
An electron enters a uniform field of $E = 5000$ V m$^{-1}$ between plates of length 5.0 cm with speed
$3.0 \times 10^7$ m s$^{-1}$. Calculate the vertical deflection and deflection angle.

**Answer.**
$a = \frac{eE}{m_e} = \frac◆LB◆1.60 \times 10^{-19} \times 5000◆RB◆◆LB◆9.11 \times 10^{-31}◆RB◆ = 8.78 \times 10^{14}$
m s$^{-2}$.

$t = L/v = 0.050 / (3.0 \times 10^7) = 1.67 \times 10^{-9}$ s.

$y = \frac{1}{2}at^2 = \frac{1}{2} \times 8.78 \times 10^{14} \times (1.67 \times 10^{-9})^2 = 1.22 \times 10^{-3}$
m $= 1.22$ mm.

$v_y = at = 8.78 \times 10^{14} \times 1.67 \times 10^{-9} = 1.47 \times 10^6$ m s$^{-1}$.

$\tan\theta = v_y/v = 1.47 \times 10^6 / (3.0 \times 10^7) = 0.0489$. $\theta = 2.80^\circ$.

</details>

## 6. Deflection of Electrons

### Cathode Ray Tube (CRT)

A CRT uses electric fields to control and deflect a beam of electrons:

1. **Electron gun:** A heated cathode emits electrons by thermionic emission. A high potential
   difference $V_{\mathrm{acc}}$ accelerates them through a potential difference, giving kinetic
   energy $\frac{1}{2}m_e v^2 = eV_{\mathrm{acc}}$.
2. **Deflection system:** Two pairs of parallel plates (X and Y) apply transverse electric fields,
   deflecting the beam horizontally and vertically.
3. **Fluorescent screen:** Electrons strike a phosphor coating, producing visible light.

### Acceleration Voltage and Beam Speed

From energy conservation:

$$\frac{1}{2}m_e v^2 = eV_{\mathrm{acc}}$$

$$\boxed{v = \sqrt◆LB◆\frac{2eV_{\mathrm{acc}}}{m_e}◆RB◆}$$

For $V_{\mathrm{acc}} = 2000$ V:
$v = \sqrt◆LB◆2 \times 1.60 \times 10^{-19} \times 2000 / 9.11 \times 10^{-31}◆RB◆ = 2.65 \times 10^7$
m s$^{-1}$.

### Sensitivity of a CRT

The deflection sensitivity $S$ is the deflection per unit deflection voltage:

$$S = \frac{y}{V_d} = \frac{eL^2}{2m_e v^2 d} = \frac◆LB◆L^2◆RB◆◆LB◆4V_{\mathrm{acc}}\,d◆RB◆$$

Where $L$ is the plate length and $d$ is the plate separation. Higher sensitivity requires longer
Plates, closer spacing, and lower acceleration voltage.

:::warning Common Pitfall A common error is to confuse the acceleration voltage $V_{\mathrm{acc}}$
(which determines beam speed) with the deflection voltage $V_d$ (which determines deflection). The
Deflection is proportional to $V_d$ and inversely proportional to $V_{\mathrm{acc}}$. :::

## 7. Electric Fields of Extended Charge Distributions

### Field on the Axis of a Charged Ring

A ring of radius $a$ carrying total charge $Q$. The field at distance $x$ from the centre along the
Axis:

$$\boxed{E = \frac◆LB◆Qx◆RB◆◆LB◆4\pi\varepsilon_0(x^2 + a^2)^{3/2}◆RB◆}$$

**Proof.** By symmetry, the transverse components cancel. Each element $dq$ contributes
$dE = dq/(4\pi\varepsilon_0(x^2 + a^2))$. The axial component is
$dE_x = dE \cdot x/\sqrt{x^2 + a^2}$. Integrating over the ring:

$$E_x = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\cdot\frac{x}{(x^2 + a^2)^{3/2}}$$

$\square$

**Checks.** At $x = 0$: $E = 0$ (by symmetry). For $x \gg a$: $E \approx Q/(4\pi\varepsilon_0 x^2)$
(point charge limit). $\checkmark$

### Field of an Infinite Line of Charge

For a line of charge with linear charge density $\lambda$ (C m$^{-1}$):

$$\boxed{E = \frac◆LB◆\lambda◆RB◆◆LB◆2\pi\varepsilon_0 r◆RB◆}$$

Where $r$ is the perpendicular distance from the line. Note: the field falls off as $1/r$Not $1/r^2$
Because a line charge is an extended source in one dimension.

## 8. Potential Gradient and the Millikan Experiment

### Millikan's Oil Drop Experiment

Millikan (1909--1913) measured the elementary charge $e$ by observing electrically charged oil drops
In a uniform electric field.

**Method:** An oil drop of mass $m$ carries charge $q$. In a uniform upward field $E$The drop is
Suspended when the electric force balances gravity:

$$qE = mg$$

$$\boxed{q = \frac{mg}{E}}$$

The mass is found from the terminal velocity (using Stokes' law for the drag force in air). Millikan
Found that all measured charges were integer multiples of $e = 1.60 \times 10^{-19}$ C.

**Significance.** This experiment proved that charge is quantised — it comes in discrete packets of
Size $e$.

## 9. Capacitance and Stored Energy

For a parallel-plate capacitor with plate area $A$ and separation $d$:

$$C = \frac◆LB◆\varepsilon_0 A◆RB◆◆LB◆d◆RB◆$$

The energy stored when the capacitor carries charge $Q$ at potential difference $V$:

$$\boxed{U = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}}$$

**Proof.** During charging, the p.d. At any instant is $v = q/C$. Work to transfer charge $dq$:
$dW = v\,dq = q\,dq/C$.

$$W = \int_0^Q \frac{q}{C}\,dq = \frac{Q^2}{2C}$$

$\square$

The energy is stored in the electric field between the plates. The energy density is:

$$u = \frac{1}{2}\varepsilon_0 E^2$$

## Problem Set

<details>
<summary>Problem 1</summary>
Two point charges, $q_1 = +3.0\,\mu$C and $q_2 = -5.0\,\mu$C, are separated by 0.20 m. Calculate the
Force between them.

**Answer.**
$F = \frac◆LB◆k|q_1||q_2|◆RB◆◆LB◆r^2◆RB◆ = \frac◆LB◆8.99 \times 10^9 \times 3.0 \times 10^{-6} \times 5.0 \times 10^{-6}◆RB◆◆LB◆0.040◆RB◆ = 3.37$
N (attractive).

</details>

<details>
<summary>Problem 2</summary>
Calculate the electric field strength at 0.10 m from a point charge of $+8.0\,\mu$C.

**Answer.**
$E = \frac{kQ}{r^2} = \frac◆LB◆8.99 \times 10^9 \times 8.0 \times 10^{-6}◆RB◆◆LB◆0.010◆RB◆ = 7.19 \times 10^6$
N C$^{-1}$.

</details>

<details>
<summary>Problem 3</summary>
Two parallel plates are separated by 2.0 cm with p.d. 500 V. Calculate the field strength and the force
On a proton between the plates.

**Answer.** $E = V/d = 500/0.020 = 2.5 \times 10^4$ V m$^{-1}$.
$F = qE = 1.60 \times 10^{-19} \times 2.5 \times 10^4 = 4.0 \times 10^{-15}$ N.

</details>

<details>
<summary>Problem 4</summary>
Calculate the electric potential at 5.0 cm from a $+2.0\,\mu$C point charge. A second charge of
$-1.0\,\mu$C is placed at this point. Calculate the potential energy of the system.

**Answer.**
$V = \frac{kQ}{r} = \frac◆LB◆8.99 \times 10^9 \times 2.0 \times 10^{-6}◆RB◆◆LB◆0.050◆RB◆ = 3.60 \times 10^5$
V.

$U = q_2 V = (-1.0 \times 10^{-6})(3.60 \times 10^5) = -0.360$ J.

</details>

<details>
<summary>Problem 5</summary>
Starting from $E = -dV/dr$Derive the field of a point charge from its potential.

**Answer.** $V = Q/(4\pi\varepsilon_0 r)$.
$E = -\frac{dV}{dr} = -\frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆\cdot\frac{d}{dr}(r^{-1}) = -\frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0◆RB◆(-r^{-2}) = \frac◆LB◆Q◆RB◆◆LB◆4\pi\varepsilon_0 r^2◆RB◆$.
$\square$

</details>

<details>
<summary>Problem 6</summary>
An electron is accelerated through 3000 V in a CRT. Calculate its final speed and kinetic energy.

**Answer.** $E_k = eV = 1.60 \times 10^{-19} \times 3000 = 4.80 \times 10^{-16}$ J.

$v = \sqrt{2E_k/m_e} = \sqrt◆LB◆2 \times 4.80 \times 10^{-16}/9.11 \times 10^{-31}◆RB◆ = 3.25 \times 10^7$
m s$^{-1}$.

</details>

<details>
<summary>Problem 7</summary>
In a Millikan-type experiment, an oil drop of mass $1.2 \times 10^{-14}$ kg is suspended between
Parallel plates with field $E = 4.8 \times 10^4$ V m$^{-1}$. Calculate the charge on the drop and
Determine how many elementary charges it carries.

**Answer.** $q = mg/E = 1.2 \times 10^{-14} \times 9.81 / (4.8 \times 10^4) = 2.45 \times 10^{-18}$
C.

$n = q/e = 2.45 \times 10^{-18} / 1.60 \times 10^{-19} = 15.3$.

Since $n$ must be an integer, the drop carries 15 elementary charges (the discrepancy is within
Experimental uncertainty).

</details>

<details>
<summary>Problem 8</summary>
Sketch the equipotential lines and field lines for two equal positive charges separated by distance
$d$. Explain why the field is zero at the midpoint.

**Answer.** The equipotential lines form peanut-shaped closed curves around each charge, with a
Zero-potential surface at infinity. The field lines radiate outward from each charge, curving away
from Each other.

At the midpoint, the fields due to each charge are equal in magnitude ($kq/(d/2)^2$) and opposite in
Direction (each points away from its own charge). By symmetry, $\mathbf{E}_1 + \mathbf{E}_2 = 0$.
This is an unstable equilibrium point.

</details>

<details>
<summary>Problem 9</summary>
A proton is released from rest in a uniform electric field of $3.0 \times 10^4$ V m$^{-1}$. Calculate
Its acceleration and the kinetic energy gained after moving 5.0 cm.

**Answer.**
$a = qE/m_p = 1.60 \times 10^{-19} \times 3.0 \times 10^4 / 1.67 \times 10^{-27} = 2.88 \times 10^{12}$
m s$^{-2}$.

$E_k = qEd = 1.60 \times 10^{-19} \times 3.0 \times 10^4 \times 0.050 = 2.4 \times 10^{-16}$ J.

</details>

<details>
<summary>Problem 10</summary>
A charged sphere of mass 0.50 g is suspended by a thread in a horizontal uniform field of
$5.0 \times 10^3$ V m$^{-1}$. The thread makes $15^\circ$ with the vertical. Calculate the charge.

**Answer.** Resolving: $qE = T\sin 15^\circ$, $mg = T\cos 15^\circ$.

$\tan 15^\circ = qE/(mg)$.
$q = mg\tan 15^\circ / E = 0.50 \times 10^{-3} \times 9.81 \times 0.268 / 5000 = 2.63 \times 10^{-7}$
C $= 263$ nC.

</details>

## Common Pitfalls

1. Confusing EMF and potential difference — EMF is the total energy per unit charge supplied; PD is
   the energy per unit charge transferred to a component.

2. Forgetting that ammeters are connected in series and voltmeters in parallel.

3. Incorrectly applying Kirchhoff's second law by missing components in a loop.

4. Confusing scalar and vector quantities — always check whether direction matters for the quantity
   in question.

5. Misidentifying the system boundary when applying conservation laws — define what is included
   before writing equations.

6. Forgetting to include units in final answers, especially when working with derived units like
   $\text{N}\,\text{kg}^{-1}\,\text{m}^2$.

## Worked Examples

### Example 1: Electric Field Between Parallel Plates

**Problem.** Two parallel plates are separated by $5\ \mathrm{cm}$ and have a potential difference
of $2000\ \mathrm{V}$ across them. Find the electric field strength and the force on an electron
between the plates.

**Solution.** $$E = \frac{V}{d} = \frac{2000}{0.05} = 40000\ \mathrm{V\,m^{-1}}$$

Force on the electron:

$$F = eE = 1.6 \times 10^{-19} \times 40000 = 6.4 \times 10^{-15}\ \mathrm{N}$$

$\blacksquare$

### Example 2: Coulomb's Law for Two Charges

**Problem.** Two point charges $+3\ \mathrm{nC}$ and $-5\ \mathrm{nC}$ are separated by
$10\ \mathrm{cm}$ in vacuum. Calculate the electrostatic force between them.

**Solution.**
$$F = \frac{1}{4\pi\varepsilon_0} \frac{|q_1 q_2|}{r^2} = \frac{8.99 \times 10^9 \times 3 \times 10^{-9} \times 5 \times 10^{-9}}{(0.1)^2}$$

$$F = \frac{8.99 \times 10^9 \times 15 \times 10^{-18}}{0.01} = \frac{134.85 \times 10^{-9}}{0.01} = 1.35 \times 10^{-5}\ \mathrm{N}$$

The force is attractive (opposite charges).

$\blacksquare$

## Summary

- Coulomb's law: $F = \frac{q_1 q_2}{4\pi\varepsilon_0 r^2}$; like charges repel, unlike attract.
- Electric field strength: $E = \frac{F}{q}$; for a point charge
  $E = \frac{Q}{4\pi\varepsilon_0 r^2}$.
- Uniform field between parallel plates: $E = \frac{V}{d}$; equipotential lines are perpendicular to
  field lines.
- Electric potential: $V = \frac{Q}{4\pi\varepsilon_0 r}$; potential energy: $W = qV$.
- $E = -\frac{dV}{dr}$; the electric field is the negative gradient of the potential.
