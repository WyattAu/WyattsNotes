---
title: Work, Energy and Power
description:
  "A-Level Physics notes on Work, Energy and Power: 1. Work Done by a Force; 2. Kinetic Energy; 3. Gravitational Potential Energy; 4. Elastic Potential Energy."
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: work-energy-power
---

## Work, Energy and Power

:::info Board Coverage AQA Paper 1 | Edexcel CP1, CP2 | OCR (A) Paper 1 | CIE P2 :::

<PhetSimulation simulationId="energy-skate-park-basics" title="Energy Skate Park: Basics" />

Explore the simulation above to develop intuition for this topic.

## 1. Work Done by a Force

**Definition.** The **work done** by a constant force $\mathbf{F}$ when its point of application
moves through displacement $\mathbf{s}$ is:

$$W = \mathbf{F} \cdot \mathbf{s} = Fs\cos\theta$$

where $\theta$ is the angle between $\mathbf{F}$ and $\mathbf{s}$.

**Derivation.** We decompose $\mathbf{F}$ into components parallel and perpendicular to
$\mathbf{s}$. Only the parallel component $F\cos\theta$ does work (the perpendicular component
produces no displacement in its direction). Work is defined as force multiplied by the displacement
in the direction of the force, hence $W = (F\cos\theta) \cdot s = Fs\cos\theta$.

**Units.** Work has the unit joule (J), where
$1 \mathrm{ J} = 1 \mathrm{ N m} = 1 \mathrm{ kg m}^2\mathrm{s}^{-2}$.

**Sign convention.** Work is positive when the force has a component in the direction of motion,
negative when opposing motion.

**Work done by a variable force.** For a force $F(x)$ that varies with position:

$$W = \int_{x_1}^{x_2} F(x)\,dx$$

## 2. Kinetic Energy

**Definition.** The **kinetic energy** of a body of mass $m$ moving with velocity $v$ is:

$$\boxed{E_k = \frac{1}{2}mv^2}$$

**Derivation from the work-energy theorem.** Consider a body of mass $m$ accelerated from rest to
speed $v$ by a constant net force $F$ over distance $s$. The work done is:

$$W = Fs = mas$$

Using $v^2 = u^2 + 2as$ with $u = 0$: $s = v^2/(2a)$. Therefore:

$$W = ma \cdot \frac{v^2}{2a} = \frac{1}{2}mv^2$$

We define this work done as the kinetic energy gained. $\square$

**General proof (variable force).** From Newton's second law: $F = m\frac{dv}{dt}$. The work done
is:

$$W = \int_{s_1}^{s_2} F\,ds = \int_{s_1}^{s_2} m\frac{dv}{dt}\,ds = \int_{v_1}^{v_2} mv\,dv = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

This is the **work-energy theorem**: the net work done on a body equals its change in kinetic
energy.

$$\boxed{W_{\mathrm{net}} = \Delta E_k}$$

## 3. Gravitational Potential Energy

**Definition.** The **gravitational potential energy** of a body of mass $m$ at height $h$ above a
reference level is:

$$\boxed{E_p = mgh}$$

**Derivation.** The work done against gravity in lifting a mass $m$ through a vertical height $h$ at
constant velocity (so $a = 0$ and applied force $= mg$):

$$W = Fd = mg \times h = mgh$$

This work is stored as gravitational potential energy. $\square$

**Intuition.** $E_p$ depends on the choice of reference level. Only **changes** in potential energy
are physically meaningful. The convention is to take $E_p = 0$ at the lowest point of the system.

## 4. Elastic Potential Energy

**Definition.** The **elastic potential energy** stored in a spring (or any elastic body obeying
Hooke's law) extended by $x$ from its natural length is:

$$\boxed{E_e = \frac{1}{2}kx^2}$$

where $k$ is the spring constant (force per unit extension).

**Derivation.** By Hooke's law, the force required to extend the spring by $x$ is $F = kx$. Since
the force varies with extension, we integrate:

$$W = \int_0^x F\,dx' = \int_0^x kx'\,dx' = \left[\frac{1}{2}kx'^2\right]_0^x = \frac{1}{2}kx^2$$

This work is stored as elastic potential energy. $\square$

**Graphical interpretation.** On a force-extension graph, the elastic potential energy is the area
under the line $F = kx$, which is a triangle of base $x$ and height $kx$, giving $\frac{1}{2}kx^2$.

### Springs in Series and Parallel

**Parallel** (same extension, forces add). Two springs with constants $k_1$ and $k_2$ share the same
extension $x$:

$$E_e = \frac{1}{2}k_1 x^2 + \frac{1}{2}k_2 x^2 = \frac{1}{2}(k_1 + k_2)x^2 = \frac{1}{2}k_{\mathrm{eff}}x^2$$

$$\boxed{k_{\mathrm{parallel}} = k_1 + k_2}$$

**Proof from equilibrium.** Both springs exert force on the mass:
$F = k_1 x + k_2 x = (k_1 + k_2)x$, so $k_{\mathrm{eff}} = k_1 + k_2$. $\square$

**Series** (same force, extensions add). Two springs with constants $k_1$ and $k_2$ experience the
same force $F$:

$F = k_1 x_1 = k_2 x_2$, so $x_1 = F/k_1$ and $x_2 = F/k_2$. Total extension:
$x = x_1 + x_2 = F(1/k_1 + 1/k_2)$.

$$\boxed{\frac{1}{k_{\mathrm{series}}} = \frac{1}{k_1} + \frac{1}{k_2}}$$

**Intuition.** Parallel springs are stiffer (each contributes to resisting displacement). Series
springs are less stiff (each stretches under the same load, giving more total compliance). This is
analogous to electrical circuits: parallel resistors decrease, series resistors increase.

## 5. Conservation of Energy

**Principle of Conservation of Energy.** Energy cannot be created or destroyed, only transferred
from one form to another.

$$\sum E_{\mathrm{initial}} = \sum E_{\mathrm{final}}$$

For a conservative system (no dissipative forces like friction):

$$E_k + E_p + E_e = \mathrm{constant}$$

**Proof for a mass falling under gravity.** A mass $m$ falls from height $h_1$ (at rest) to height
$h_2$ (speed $v$). By the work-energy theorem:

$$W_{\mathrm{gravity}} = \Delta E_k$$

But $W_{\mathrm{gravity}} = mg(h_1 - h_2) = -\Delta E_p$. Therefore:

$$-\Delta E_p = \Delta E_k \implies \Delta E_k + \Delta E_p = 0$$

$$E_k + E_p = \mathrm{constant} \quad \square$$

**With non-conservative forces:**

$$W_{\mathrm{nc}} = \Delta E_k + \Delta E_p$$

where $W_{\mathrm{nc}}$ is the work done by non-conservative forces (e.g., friction does negative
work, reducing total mechanical energy).

### Energy Dissipation by Friction

When friction acts, mechanical energy is not conserved -- it decreases monotonically as energy is
transferred to thermal energy. For a block sliding to rest on a rough horizontal surface:

$$E_k(\mathrm{initial}) = E_k(\mathrm{final}) + W_f$$

where $W_f = \mu mg d$ is the work done against friction over distance $d$.

Setting $E_k(\mathrm{final}) = 0$ (block comes to rest):

$$\frac{1}{2}mv^2 = \mu mgd$$

$$\boxed{d = \frac{v^2}{2\mu g}}$$

**Intuition.** The stopping distance is proportional to $v^2$ (not $v$), which is why driving at
twice the speed requires **four times** the braking distance. This quadratic dependence is a direct
consequence of energy conservation: kinetic energy scales as $v^2$, so removing that energy requires
friction to act over a distance proportional to $v^2$.

:::warning Common Pitfall Students sometimes write "energy is lost" when friction acts. Energy is
never lost -- it is transferred from mechanical to thermal (internal) energy. The total energy of
the closed system is always conserved. Only **mechanical** energy ($E_k + E_p$) decreases.
:::

<details>
<summary>Example: Braking distance comparison</summary>

A car travelling at 30 mph brakes to rest in 23 m. What is the braking distance at 60 mph?

**Answer.** Since $d \propto v^2$:
$d_2 = d_1 \times (v_2/v_1)^2 = 23 \times (60/30)^2 = 23 \times 4 = 92$ m.

Doubling the speed quadruples the braking distance -- a critical road safety result.

</details>

### Enrichment: Noether's Theorem

Emmy Noether proved in 1915 that every conservation law corresponds to a symmetry of nature.
Conservation of energy corresponds to **time-translation symmetry** — the laws of physics do not
change over time. If you perform an experiment today or tomorrow, you expect the same result. This
deep connection between symmetry and conservation is one of the most profound results in physics.

## 6. Power

**Definition.** **Power** is the rate at which work is done (or energy is transferred):

$$\boxed{P = \frac{dW}{dt} = \frac{\Delta E}{\Delta t}}$$

**Units.** 1 watt (W) $= 1$ J s$^{-1}$.

### Power and Velocity

For a force $F$ moving a body at velocity $v$:

$$P = \frac{dW}{dt} = \frac{F \, ds}{dt} = Fv$$

More generally, for a force at angle $\theta$ to the velocity:

$$\boxed{P = Fv\cos\theta}$$

### Average Power for Constant Acceleration

When a constant force accelerates a body from $u$ to $v$ over distance $s$:

$$P_{\mathrm{avg}} = \frac{W}{t} = \frac{Fs}{t} = F \cdot \frac{s}{t} = F\bar{v}$$

Since the average velocity is $\bar{v} = (u + v)/2$:

$$\boxed{P_{\mathrm{avg}} = \frac{F(u + v)}{2}}$$

This is useful because it relates power to the initial and final velocities directly, without
needing to know the distance or time separately.

:::tip Exam Technique When asked for "the power developed by the engine" as a car accelerates,
specify whether you mean instantaneous power ($P = Fv$) or average power ($P = Fs/t$). The
instantaneous power at the end of the acceleration is $Fv_{\mathrm{final}}$, while the average power
over the whole acceleration is $F(u+v)/2$.
:::

**Definition.** The **efficiency** of an energy transfer is:

$$\eta = \frac{\mathrm{useful energy output}}{\mathrm{total energy input}} \times 100\%$$

or equivalently for power:

$$\eta = \frac{P_{\mathrm{out}}}{P_{\mathrm{in}}} \times 100\%$$

Efficiency is always between 0% and 100%. In practice, some energy is always dissipated (usually as
thermal energy due to friction or resistance).

## 8. Energy as the Universal Currency

Energy is the most unifying concept in physics. It connects mechanics, thermodynamics,
electromagnetism, waves, quantum physics, and relativity. The conservation of energy is the one
principle that holds across all domains:

- In mechanics, $E_k + E_p = \mathrm{const}$.
- In circuits, $E = VIt = I^2Rt$ is dissipated as heat.
- In waves, intensity (energy per unit area per unit time) decreases with distance.
- In nuclear physics, $E = \Delta mc^2$ converts mass to energy.
- In thermodynamics, the first law $\Delta U = Q + W$ is a statement of energy conservation.

## Problem Set

<details>
<summary>Problem 1</summary>
A car of mass $1200$ kg accelerates from rest to $25$ m s$^{-1}$ in $8.0$ s. Calculate: (a) the kinetic energy gained, (b) the average power output, (c) the average force.

**Answer.** (a) $E_k = \frac{1}{2}(1200)(25)^2 = 375{,}000$ J $= 375$ kJ.

(b) $P = \frac{\Delta E_k}{\Delta t} = \frac{375{,}000}{8.0} = 46{,}900$ W $= 46.9$ kW.

(c) $P = Fv_{\mathrm{avg}}$, $v_{\mathrm{avg}} = 12.5$ m s$^{-1}$. $F = 46{,}900/12.5 = 3750$ N.
Alternatively, $F = ma = 1200 \times 25/8 = 3750$ N.

<b>If you get this wrong, revise:</b> [Kinetic Energy](#2-kinetic-energy) and
[Power and Velocity](#power-and-velocity)

</details>

<details>
<summary>Problem 2</summary>
A spring of spring constant $500$ N m$^{-1}$ is compressed by $0.08$ m. A $0.50$ kg ball is placed against it and released. Calculate the speed of the ball as it leaves the spring (assuming no energy losses).

**Answer.** Elastic PE converted to KE: $\frac{1}{2}kx^2 = \frac{1}{2}mv^2$.

$v = \sqrt{\frac{kx^2}{m}} = \sqrt{\frac{500 \times 0.0064}{0.50}} = \sqrt{6.4} = 2.53$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Conservation of Energy](#5-conservation-of-energy)

</details>

<details>
<summary>Problem 3</summary>
A roller coaster car of mass $500$ kg starts from rest at point A, 20 m above the ground. It descends to point B at ground level, then rises to point C at 12 m above the ground. Assuming no friction, find the speed at B and C.

**Answer.** At B: $\frac{1}{2}(500)v_B^2 = 500 \times 9.81 \times 20$.
$v_B = \sqrt{2 \times 9.81 \times 20} = \sqrt{392.4} = 19.8$ m s$^{-1}$.

At C: $E_k(C) = mg(h_A - h_C) = 500 \times 9.81 \times 8 = 39{,}240$ J.
$v_C = \sqrt{2 \times 39{,}240/500} = \sqrt{156.96} = 12.5$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Conservation of Energy](#5-conservation-of-energy)

</details>

<details>
<summary>Problem 4</summary>
A motor lifts a $200$ kg load through a height of $15$ m in $10$ s. If the motor is $80\%$ efficient and runs on a $240$ V supply, calculate the current it draws.

**Answer.** Useful power:
$P_{\mathrm{out}} = \frac{mgh}{t} = \frac{200 \times 9.81 \times 15}{10} = 2943$ W.

Electrical power: $P_{\mathrm{in}} = \frac{P_{\mathrm{out}}}{\eta} = \frac{2943}{0.80} = 3679$ W.

Current: $I = \frac{P_{\mathrm{in}}}{V} = \frac{3679}{240} = 15.3$ A.

<b>If you get this wrong, revise:</b> [Efficiency](#6-power)

</details>

<details>
<summary>Problem 5</summary>
A pendulum bob of mass $0.50$ kg is pulled aside until it is $0.10$ m above its lowest point and released. Find its speed at the lowest point.

**Answer.**
$mgh = \frac{1}{2}mv^2 \implies v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 0.10} = \sqrt{1.962} = 1.40$
m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Conservation of Energy](#5-conservation-of-energy)

</details>

<details>
<summary>Problem 6</summary>
A crate is pushed 8.0 m across a rough floor by a force of $150$ N at $30^\circ$ below the horizontal. If $\mu = 0.25$ and the crate has mass $40$ kg, find: (a) the work done by the applied force, (b) the work done against friction, (c) the final speed (starting from rest).

**Answer.** (a)
$W_F = Fd\cos\theta = 150 \times 8.0 \times \cos 30° = 150 \times 8.0 \times 0.866 = 1039$ J.

(b) Normal reaction: $R = mg + F\sin 30° = 40 \times 9.81 + 150 \times 0.5 = 392.4 + 75 = 467.4$ N.
Friction: $F_f = 0.25 \times 467.4 = 116.9$ N. $W_f = 116.9 \times 8.0 = 935$ J.

(c) Net work = $1039 - 935 = 104$ J. $W_{\mathrm{net}} = \Delta E_k = \frac{1}{2}mv^2$.
$v = \sqrt{2 \times 104/40} = \sqrt{5.2} = 2.28$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Work Done by a Force](#1-work-done-by-a-force) and
[Work-Energy Theorem](#2-kinetic-energy)

</details>

<details>
<summary>Problem 7</summary>
A car of mass $800$ kg travels at constant speed $20$ m s$^{-1}$ up a hill inclined at $5^\circ$ to the horizontal. The engine has an efficiency of $25\%$. Calculate the rate of fuel energy consumption (in watts).

**Answer.** Component of weight down the slope: $mg\sin 5° = 800 \times 9.81 \times 0.0872 = 684$ N.

At constant speed, engine force = resistance = $684$ N (ignoring other losses).

Power output: $P = Fv = 684 \times 20 = 13{,}680$ W.

Fuel power: $P_{\mathrm{fuel}} = P/\eta = 13{,}680/0.25 = 54{,}700$ W $= 54.7$ kW.

<b>If you get this wrong, revise:</b> [Power and Velocity](#power-and-velocity) and
[Efficiency](#6-power)

</details>

<details>
<summary>Problem 8</summary>
Two springs are connected in parallel (both attached to the same mass). Spring A has $k_A = 200$ N m$^{-1}$, spring B has $k_B = 300$ N m$^{-1}$. The mass is displaced $0.05$ m. Find the total elastic PE stored.

**Answer.** For parallel springs, the effective spring constant is
$k_{\mathrm{eff}} = k_A + k_B = 500$ N m$^{-1}$.

$E_e = \frac{1}{2}k_{\mathrm{eff}}x^2 = \frac{1}{2}(500)(0.0025) = 0.625$ J.

<b>If you get this wrong, revise:</b> [Elastic Potential Energy](#4-elastic-potential-energy)

</details>

<details>
<summary>Problem 9</summary>
A ball is thrown vertically upward with speed $15$ m s$^{-1}$ from a height of $2.0$ m. Use energy conservation to find the maximum height above the ground.

**Answer.** At launch: $E = E_k + E_p = \frac{1}{2}m(15)^2 + mg(2) = 112.5m + 19.62m = 132.1m$.

At max height: $E = mgh_{\max}$. So $h_{\max} = 132.1/9.81 = 13.5$ m.

<b>If you get this wrong, revise:</b> [Conservation of Energy](#5-conservation-of-energy)

</details>

<details>
<summary>Problem 10</summary>
A satellite of mass $500$ kg is in a circular orbit at altitude $300$ km above Earth's surface. Given $g = 9.81$ m s$^{-2}$ at the surface and $R_E = 6370$ km, calculate the total energy of the satellite. (The total energy of a circular orbit is $E = -\frac{GMm}{2r} = -\frac{1}{2}mgh$ is not valid here — use $E = -GMm/(2r)$ with $GM = gR_E^2$.)

**Answer.** $r = R_E + h = 6{,}670{,}000$ m.
$GM = gR_E^2 = 9.81 \times (6.37 \times 10^6)^2 = 3.976 \times 10^{14}$.

$E = -\frac{GMm}{2r} = -\frac{3.976 \times 10^{14} \times 500}{2 \times 6.67 \times 10^6} = -\frac{1.988 \times 10^{17}}{1.334 \times 10^7} = -1.49 \times 10^{10}$
J $= -14.9$ GJ.

<b>If you get this wrong, revise:</b> [Conservation of Energy](#5-conservation-of-energy) and
[08-gravitational-fields](./08-gravitational-fields.md)

</details>

<details>
<summary>Problem 11</summary>

A spring of constant $200$ N m$^{-1}$ is connected in series with a spring of constant $300$ N
m$^{-1}$. A $2.0$ kg mass is attached and displaced $0.10$ m. Find: (a) the total extension, (b) the
total elastic potential energy stored.

**Answer.** (a) For series: $1/k_{\mathrm{eff}} = 1/200 + 1/300 = 5/600$. $k_{\mathrm{eff}} = 120$ N
m$^{-1}$.

Extension: $x = F/k_{\mathrm{eff}} = k_{\mathrm{eff}} \times 0.10 / k_{\mathrm{eff}} = 0.10$ m.
(Each spring shares the same force: $F = k_1 x_1 = k_2 x_2$.
$x_1 = F/k_1 = 0.10 \times 120/200 = 0.060$ m, $x_2 = 0.10 \times 120/300 = 0.040$ m. Total
$= 0.100$ m, confirming consistency.)

(b) $E_e = \frac{1}{2}k_{\mathrm{eff}}x^2 = \frac{1}{2}(120)(0.010) = 0.60$ J.

Alternatively:
$E_e = \frac{1}{2}k_1 x_1^2 + \frac{1}{2}k_2 x_2^2 = \frac{1}{2}(200)(0.0036) + \frac{1}{2}(300)(0.0016) = 0.36 + 0.24 = 0.60$
J.

<b>If you get this wrong, revise:</b>
[Springs in Series and Parallel](#springs-in-series-and-parallel)

</details>

<details>
<summary>Problem 12</summary>

A block of mass $3.0$ kg is projected up a rough incline at $30^\circ$ with speed $8.0$ m s$^{-1}$.
The coefficient of friction is $0.20$. Use energy methods to find how far up the incline it travels
before stopping.

**Answer.** Initial KE: $\frac{1}{2}(3.0)(64) = 96$ J. Gain in PE:
$mg\Delta s \sin 30° = 3.0 \times 9.81 \times 0.5 \times \Delta s = 14.7\,\Delta s$.

Work against friction:
$\mu mg\cos 30° \times \Delta s = 0.20 \times 3.0 \times 9.81 \times 0.866 \times \Delta s = 5.10\,\Delta s$.

Energy equation: $E_k = \Delta E_p + W_f$. $96 = 14.7\,\Delta s + 5.10\,\Delta s = 19.8\,\Delta s$.

$\Delta s = 96/19.8 = 4.85$ m.

<b>If you get this wrong, revise:</b>
[Energy Dissipation by Friction](#energy-dissipation-by-friction)

</details>

<details>
<summary>Problem 13</summary>

A $70$ kg student runs up a flight of stairs, gaining $5.0$ m of height in $4.0$ s. Calculate: (a)
the work done against gravity, (b) the average power output, (c) the minimum instantaneous power if
the student starts from rest and accelerates uniformly.

**Answer.** (a) $W = mgh = 70 \times 9.81 \times 5.0 = 3434$ J.

(b) $P_{\mathrm{avg}} = W/t = 3434/4.0 = 859$ W $\approx 860$ W. (About 1.15 horsepower.)

(c) Starting from rest with constant acceleration, $h = \frac{1}{2}at^2$ and $v = at$.

$a = 2h/t^2 = 2 \times 5.0/16 = 0.625$ m s$^{-2}$. $v_{\mathrm{final}} = 0.625 \times 4 = 2.5$ m
s$^{-1}$.

Vertical force = $mg + ma = 70(9.81 + 0.625) = 731$ N.

$P_{\mathrm{max}} = Fv = 731 \times 2.5 = 1828$ W. The minimum instantaneous power is the power at
the start (when $v = 0$): $P_{\mathrm{min}} = 0$. Power increases linearly with speed.

<b>If you get this wrong, revise:</b> [Power and Velocity](#power-and-velocity)

</details>

<details>
<summary>Problem 14</summary>

A mass of $0.50$ kg is attached to a spring of constant $200$ N m$^{-1}$ on a smooth horizontal
surface. The mass is pulled $0.15$ m from equilibrium and released. Find: (a) the maximum speed, (b)
the speed when the mass is $0.05$ m from equilibrium, (c) the total energy of the system.

**Answer.** (a) At equilibrium: all energy is elastic. At maximum displacement: all energy is
elastic. At any other point: $E_e + E_k = E_{\mathrm{total}}$.

$E_{\mathrm{total}} = \frac{1}{2}(200)(0.15)^2 = 2.25$ J. Maximum speed at equilibrium ($x = 0$):
$E_k = E_{\mathrm{total}}$.
$v_{\mathrm{max}} = \sqrt{2E_{\mathrm{total}}/m} = \sqrt{2 \times 2.25/0.50} = \sqrt{9} = 3.0$ m
s$^{-1}$.

(b) At $x = 0.05$ m: $E_e = \frac{1}{2}(200)(0.0025) = 0.25$ J. $E_k = 2.25 - 0.25 = 2.0$ J.
$v = \sqrt{2 \times 2.0/0.50} = \sqrt{8} = 2.83$ m s$^{-1}$.

(c) $E_{\mathrm{total}} = 2.25$ J (constant, since no friction).

<b>If you get this wrong, revise:</b> [Conservation of Energy](#5-conservation-of-energy)

</details>

<details>
<summary>Problem 15</summary>

A car engine delivers a constant driving force of $3000$ N. The total resistive force (drag +
rolling resistance) is $F_{\mathrm{res}} = 300 + 2v^2$ N (where $v$ is in m s$^{-1}$). Find: (a) the
maximum speed of the car (terminal velocity), (b) the power at this speed.

**Answer.** (a) At maximum speed, driving force equals resistive force: $3000 = 300 + 2v^2$.

$2v^2 = 2700$, $v^2 = 1350$, $v = 36.7$ m s$^{-1} \approx 132$ km h$^{-1}$.

(b) $P = Fv = 3000 \times 36.7 = 110{,}100$ W $= 110$ kW.

Note: at maximum speed, all the engine's power goes into overcoming resistance. If the car tried to
go faster, resistance would exceed the driving force and it would decelerate.

<b>If you get this wrong, revise:</b> [Power and Velocity](#power-and-velocity)

</details>

<details>
<summary>Problem 16</summary>

A bungee jumper of mass $75$ kg jumps from a platform. The bungee cord has an unstretched length of
$25$ m and spring constant $50$ N m$^{-1}$. Taking the reference level as the jump platform, find
the speed of the jumper when the cord is stretched $15$ m beyond its natural length.

**Answer.** Height below platform: $h = 25 + 15 = 40$ m. Loss of PE:
$mgh = 75 \times 9.81 \times 40 = 29{,}430$ J.

Elastic PE in cord: $E_e = \frac{1}{2}(50)(15)^2 = 5625$ J.

By conservation: $mgh = E_k + E_e$. $29{,}430 = \frac{1}{2}(75)v^2 + 5625$.

$\frac{1}{2}(75)v^2 = 23{,}805$. $v^2 = 634.8$. $v = 25.2$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Conservation of Energy](#5-conservation-of-energy)

</details>

<details>
<summary>Problem 17</summary>

An electric motor is 85% efficient. It lifts a $200$ kg crate vertically at a steady speed of $0.80$
m s$^{-1}$. Calculate: (a) the useful power output, (b) the total electrical power input, (c) the
energy wasted per second, (d) the total electrical energy consumed to lift the crate $12$ m.

**Answer.** (a) $P_{\mathrm{out}} = Fv = mgv = 200 \times 9.81 \times 0.80 = 1570$ W.

(b) $P_{\mathrm{in}} = P_{\mathrm{out}}/\eta = 1570/0.85 = 1847$ W.

(c) Energy wasted per second = $P_{\mathrm{in}} - P_{\mathrm{out}} = 1847 - 1570 = 277$ J s$^{-1}$.

(d) Time to lift 12 m: $t = 12/0.80 = 15$ s. Total electrical energy =
$P_{\mathrm{in}} \times t = 1847 \times 15 = 27{,}705$ J $= 27.7$ kJ.

<b>If you get this wrong, revise:</b> [Efficiency](#6-power)

</details>

<details>
<summary>Problem 18</summary>

Two identical springs, each of constant $k = 400$ N m$^{-1}$, are connected in parallel and support
a mass of $5.0$ kg. The mass is displaced $0.05$ m downward and released. Calculate: (a) the period
of the resulting oscillation (you may assume SHM), (b) the maximum kinetic energy, (c) the maximum
elastic potential energy in each spring.

**Answer.** (a) For parallel springs: $k_{\mathrm{eff}} = 2k = 800$ N m$^{-1}$.

Angular frequency: $\omega = \sqrt{k_{\mathrm{eff}}/m} = \sqrt{800/5.0} = \sqrt{160} = 12.6$ rad
s$^{-1}$.

Period: $T = 2\pi/\omega = 2\pi/12.6 = 0.499$ s.

(b) Maximum KE = total energy $= \frac{1}{2}k_{\mathrm{eff}}A^2 = \frac{1}{2}(800)(0.05)^2 = 1.0$ J.

(c) Total elastic PE = 1.0 J (when KE = 0). Each spring stores half: $E_{e,\mathrm{each}} = 0.50$ J.

<b>If you get this wrong, revise:</b>
[Springs in Series and Parallel](#springs-in-series-and-parallel)

</details>


---

:::tip Diagnostic Test
Ready to test your understanding of **Work, Energy and Power**? The [diagnostic test](/physics/diagnostics/diag-work-energy-power) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Work, Energy and Power with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/physics/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::

:::danger Common Pitfalls

- **Confusing work done on an object with work done by gravity:** Work done by gravity when an object falls is POSITIVE (force and displacement are in the same direction). Work done AGAINST gravity when lifting is NEGATIVE. When using energy conservation, gravitational PE LOSS equals kinetic energy GAIN -- be careful with signs.

- **Applying conservation of energy when non-conservative forces act:** The work-energy principle (W_net = delta(E_k)) always applies, but conservation of mechanical energy (E_k + E_p = constant) only holds when no non-conservative forces (friction, air resistance) do work. If friction is present, mechanical energy is lost to heat.

- **Forgetting the angle in W = Fd cos(theta):** Work is maximum when the force is parallel to displacement (theta = 0, cos = 1) and zero when perpendicular (theta = 90, cos = 0). A force applied at right angles to motion (e.g., centripetal force in circular motion) does NO work and does not change kinetic energy.

- **Confusing power and energy:** Power is the RATE of doing work (P = W/t = Fv), measured in watts. Energy is the total work done or transferred, measured in joules. A machine that is twice as powerful delivers the same energy in half the time, not twice the energy.

:::
