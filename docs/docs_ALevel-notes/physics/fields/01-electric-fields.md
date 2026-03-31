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

:::info Board Coverage
AQA Paper 2 | Edexcel CP3 | OCR (A) Paper 2 | CIE P4
:::

## 1. Coulomb's Law

**Coulomb's Law.** The electrostatic force between two point charges $q_1$ and $q_2$ separated by distance $r$ in vacuum is:

$$\boxed{F = \frac{q_1 q_2}{4\pi\varepsilon_0 r^2}}$$

where $\varepsilon_0 = 8.85 \times 10^{-12}$ F m$^{-1}$ is the **permittivity of free space**.

The force is **attractive** for opposite charges and **repulsive** for like charges. It acts along the line joining the charges.

**Coulomb's constant:** $k = \frac{1}{4\pi\varepsilon_0} = 8.99 \times 10^9$ N m$^2$ C$^{-2}$.

### Comparison with Gravity

| Property          | Gravitational              | Electrostatic           |
| ----------------- | -------------------------- | ----------------------- |
| Force law         | $F = Gm_1m_2/r^2$          | $F = kq_1q_2/r^2$       |
| Constant          | $G = 6.67 \times 10^{-11}$ | $k = 8.99 \times 10^9$  |
| Nature            | Always attractive          | Attractive or repulsive |
| Acts on           | Mass                       | Charge                  |
| Relative strength | Very weak                  | Very strong             |

The electrostatic force is $\sim 10^{36}$ times stronger than gravity. We don't notice this in everyday life because most objects have nearly equal numbers of positive and negative charges.

## 2. Electric Field Strength

**Definition.** The **electric field strength** $\mathbf{E}$ at a point is the force per unit positive charge placed at that point:

$$\mathbf{E} = \frac{\mathbf{F}}{q}$$

SI units: N C$^{-1}$ (equivalent to V m$^{-1}$).

### Field of a Point Charge

$$\boxed{E = \frac{Q}{4\pi\varepsilon_0 r^2}}$$

**Derivation.** Place a test charge $q$ at distance $r$ from $Q$. By Coulomb's law: $F = \frac{Qq}{4\pi\varepsilon_0 r^2}$. Therefore:

$$E = \frac{F}{q} = \frac{Q}{4\pi\varepsilon_0 r^2}$$

$\square$

The field points radially outward from a positive charge and radially inward towards a negative charge.

### Uniform Electric Field

Between two parallel plates with p.d. $V$ and separation $d$:

$$\boxed{E = \frac{V}{d}}$$

**Derivation.** A charge $q$ moving between the plates experiences force $F = qE$. The work done is $W = Fd = qEd$. But also $W = qV$. Therefore $qEd = qV$, giving $E = V/d$. $\square$

## 3. Electric Potential

**Definition.** The **electric potential** $V$ at a point is the work done per unit positive charge to bring a small test charge from infinity to that point:

$$\boxed{V = \frac{Q}{4\pi\varepsilon_0 r}}$$

SI units: volts (V), where 1 V = 1 J C$^{-1}$.

**Derivation.** The work done to bring $q$ from $\infty$ to $r$ against the electric force:

$$W = \int_{\infty}^{r} F\,dr' = \int_{\infty}^{r} \frac{Qq}{4\pi\varepsilon_0 r'^2}\,dr' = \frac{Qq}{4\pi\varepsilon_0}\left[-\frac{1}{r'}\right]_{\infty}^{r} = \frac{Qq}{4\pi\varepsilon_0 r}$$

$$V = \frac{W}{q} = \frac{Q}{4\pi\varepsilon_0 r}$$

$\square$

**Intuition.** Potential is positive near a positive charge (work must be done against repulsion) and negative near a negative charge (work is done by the attraction). Potential decreases with distance, approaching zero at infinity.

### Electric Potential Energy

The potential energy of two charges $q_1$ and $q_2$ separated by $r$:

$$U = \frac{q_1 q_2}{4\pi\varepsilon_0 r} = q_2 V_1$$

where $V_1 = q_1/(4\pi\varepsilon_0 r)$ is the potential due to $q_1$ at the location of $q_2$.

## 4. Relationship Between $E$ and $V$: $E = -dV/dr$

The electric field is the negative gradient of the electric potential.

### Proof

Consider a test charge $q$ moved by a small distance $dr$ in the direction of the field. The work done by the field is:

$$dW = F\,dr = qE\,dr$$

This work comes from the change in potential energy: $dW = -q\,dV$ (negative because the field does work, reducing potential energy).

$$qE\,dr = -q\,dV$$

$$\boxed{E = -\frac{dV}{dr}}$$

In 3D: $\mathbf{E} = -\nabla V$.

**Verification for a point charge.** $V = \frac{Q}{4\pi\varepsilon_0 r}$.

$$-\frac{dV}{dr} = -\frac{Q}{4\pi\varepsilon_0}\left(-\frac{1}{r^2}\right) = \frac{Q}{4\pi\varepsilon_0 r^2} = E \quad \checkmark$$

**Intuition.** The minus sign tells us that the electric field points in the direction of **decreasing** potential — a positive charge "rolls downhill" in the potential landscape.

## 5. Charged Particle Motion in a Uniform Electric Field

Consider a particle of charge $q$ and mass $m$ entering a uniform electric field $E$ between parallel plates of length $L$, with initial velocity $v$ perpendicular to the field.

**Horizontal motion** (perpendicular to field): uniform velocity.

$$x = vt, \qquad t = \frac{L}{v}$$

**Vertical motion** (parallel to field): uniform acceleration.

$$F = qE, \qquad a = \frac{qE}{m}$$

$$y = \frac{1}{2}at^2 = \frac{qE}{2m} \cdot \frac{L^2}{v^2}$$

**Derivation of the parabolic trajectory.** Eliminating $t$: $y = \frac{qE}{2mv^2}x^2$. This is a parabola ($y \propto x^2$).

**Vertical velocity at exit:**

$$v_y = at = \frac{qEL}{mv}$$

**Deflection angle:**

$$\tan\theta = \frac{v_y}{v} = \frac{qEL}{mv^2}$$

<details>
<summary>Example: Electron Deflection</summary>
<p>

An electron enters a uniform electric field of 5000 V m$^{-1}$ between plates of length 5.0 cm with speed $3.0 \times 10^7$ m s$^{-1}$. Calculate the vertical deflection.

**Answer.** $a = \frac{eE}{m_e} = \frac{1.60 \times 10^{-19} \times 5000}{9.11 \times 10^{-31}} = 8.78 \times 10^{14}$ m s$^{-2}$.

$t = L/v = 0.050/3.0 \times 10^7 = 1.67 \times 10^{-9}$ s.

$y = \frac{1}{2}at^2 = \frac{1}{2} \times 8.78 \times 10^{14} \times (1.67 \times 10^{-9})^2 = 1.22 \times 10^{-3}$ m $= 1.22$ mm.

</p>
</details>

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

Two point charges, $q_1 = +3.0\,\mu$C and $q_2 = -5.0\,\mu$C, are separated by 0.20 m. Calculate the electrostatic force between them.

**Answer.** $F = \frac{kq_1 q_2}{r^2} = \frac{8.99 \times 10^9 \times 3.0 \times 10^{-6} \times 5.0 \times 10^{-6}}{0.04} = \frac{0.135}{0.04} = 3.37$ N (attractive).

<b>If you get this wrong, revise:</b> [Coulomb's Law](#1-coulombs-law)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

Calculate the electric field strength at a distance of 0.10 m from a point charge of $+8.0\,\mu$C.

**Answer.** $E = \frac{kQ}{r^2} = \frac{8.99 \times 10^9 \times 8.0 \times 10^{-6}}{0.01} = \frac{71920}{0.01} = 7.19 \times 10^6$ N C$^{-1}$.

<b>If you get this wrong, revise:</b> [Field of a Point Charge](#field-of-a-point-charge)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

Calculate the electric potential at a distance of 5.0 cm from a $+2.0\,\mu$C point charge.

**Answer.** $V = \frac{kQ}{r} = \frac{8.99 \times 10^9 \times 2.0 \times 10^{-6}}{0.050} = \frac{17980}{0.050} = 3.60 \times 10^5$ V $= 360$ kV.

<b>If you get this wrong, revise:</b> [Electric Potential](#3-electric-potential)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

Starting from $E = -dV/dr$, derive the electric field of a point charge from its potential.

**Answer.** $V = \frac{Q}{4\pi\varepsilon_0 r}$. $E = -\frac{dV}{dr} = -\frac{Q}{4\pi\varepsilon_0} \cdot \frac{d}{dr}\left(\frac{1}{r}\right) = -\frac{Q}{4\pi\varepsilon_0}\left(-\frac{1}{r^2}\right) = \frac{Q}{4\pi\varepsilon_0 r^2}$.

<b>If you get this wrong, revise:</b> [Relationship Between $E$ and $V$](#4-relationship-between-e-and-v-e--dvdr)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

Two parallel plates are separated by 2.0 cm with a p.d. of 500 V across them. Calculate the electric field strength and the force on a proton between the plates.

**Answer.** $E = V/d = 500/0.020 = 25000$ V m$^{-1}$.

$F = qE = 1.60 \times 10^{-19} \times 25000 = 4.0 \times 10^{-15}$ N.

<b>If you get this wrong, revise:</b> [Uniform Electric Field](#uniform-electric-field)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

A proton is released from rest in a uniform electric field of $3.0 \times 10^4$ V m$^{-1}$. Calculate its acceleration and the kinetic energy gained after moving 5.0 cm.

**Answer.** $a = \frac{qE}{m} = \frac{1.60 \times 10^{-19} \times 3.0 \times 10^4}{1.67 \times 10^{-27}} = 2.88 \times 10^{12}$ m s$^{-2}$.

$E_k = qV = qEd = 1.60 \times 10^{-19} \times 3.0 \times 10^4 \times 0.050 = 2.4 \times 10^{-16}$ J.

<b>If you get this wrong, revise:</b> [Charged Particle Motion in a Uniform Electric Field](#5-charged-particle-motion-in-a-uniform-electric-field)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

Calculate the electric potential energy of two charges, $q_1 = +4.0\,\mu$C and $q_2 = +6.0\,\mu$C, separated by 0.30 m.

**Answer.** $U = \frac{kq_1 q_2}{r} = \frac{8.99 \times 10^9 \times 4.0 \times 10^{-6} \times 6.0 \times 10^{-6}}{0.30} = \frac{0.2158}{0.30} = 0.719$ J.

<b>If you get this wrong, revise:</b> [Electric Potential Energy](#electric-potential-energy)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

An electron with speed $2.0 \times 10^7$ m s$^{-1}$ enters a uniform electric field of 8000 V m$^{-1}$ perpendicular to its motion. The plates are 8.0 cm long. Calculate the deflection angle.

**Answer.** $a = \frac{eE}{m_e} = \frac{1.60 \times 10^{-19} \times 8000}{9.11 \times 10^{-31}} = 1.405 \times 10^{15}$ m s$^{-2}$.

$t = L/v = 0.080/(2.0 \times 10^7) = 4.0 \times 10^{-9}$ s.

$v_y = at = 1.405 \times 10^{15} \times 4.0 \times 10^{-9} = 5.62 \times 10^6$ m s$^{-1}$.

$\tan\theta = v_y/v = 5.62 \times 10^6 / 2.0 \times 10^7 = 0.281$. $\theta = 15.7°$.

<b>If you get this wrong, revise:</b> [Charged Particle Motion in a Uniform Electric Field](#5-charged-particle-motion-in-a-uniform-electric-field)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

Three equal charges of $+2.0\,\mu$C are placed at the corners of an equilateral triangle of side 0.10 m. Calculate the net electric field at the centre of the triangle.

**Answer.** The centre is at distance $r = \frac{0.10}{\sqrt{3}} = 0.0577$ m from each charge.

$E_{\text{one}} = \frac{kQ}{r^2} = \frac{8.99 \times 10^9 \times 2.0 \times 10^{-6}}{0.00333} = 5.40 \times 10^6$ N C$^{-1}$.

By symmetry, the fields from the three charges cancel out (they are 120° apart and equal in magnitude). $E_{\text{net}} = 0$.

<b>If you get this wrong, revise:</b> [Field of a Point Charge](#field-of-a-point-charge)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

A small charged sphere of mass 0.50 g is suspended by a thread in a uniform horizontal electric field of $5.0 \times 10^3$ V m$^{-1}$. The thread makes an angle of $15°$ with the vertical. Calculate the charge on the sphere.

**Answer.** Resolving horizontally: $qE = T\sin 15°$. Resolving vertically: $mg = T\cos 15°$.

$\tan 15° = \frac{qE}{mg}$. $q = \frac{mg\tan 15°}{E} = \frac{0.50 \times 10^{-3} \times 9.81 \times 0.2679}{5000} = \frac{1.314 \times 10^{-3}}{5000} = 2.63 \times 10^{-7}$ C $= 263$ nC.

<b>If you get this wrong, revise:</b> [Electric Field Strength](#2-electric-field-strength)

</p>
</details>
