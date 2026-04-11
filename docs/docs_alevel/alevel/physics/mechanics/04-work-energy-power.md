---
title: Work, Energy and Power
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: work-energy-power
---

## Work, Energy and Power

:::info
Board Coverage
AQA Paper 1 | Edexcel CP1, CP2 | OCR (A) Paper 1 | CIE P2
:::

## 1. Work Done by a Force

**Definition.** The **work done** by a constant force $\mathbf{F}$ when its point of application moves through displacement $\mathbf{s}$ is:

$$W = \mathbf{F} \cdot \mathbf{s} = Fs\cos\theta$$

where $\theta$ is the angle between $\mathbf{F}$ and $\mathbf{s}$.

**Derivation.** We decompose $\mathbf{F}$ into components parallel and perpendicular to $\mathbf{s}$. Only the parallel component $F\cos\theta$ does work (the perpendicular component produces no displacement in its direction). Work is defined as force multiplied by the displacement in the direction of the force, hence $W = (F\cos\theta) \cdot s = Fs\cos\theta$.

**Units.** Work has the unit joule (J), where $1 \text{ J} = 1 \text{ N m} = 1 \text{ kg m}^2\text{s}^{-2}$.

**Sign convention.** Work is positive when the force has a component in the direction of motion, negative when opposing motion.

**Work done by a variable force.** For a force $F(x)$ that varies with position:

$$W = \int_{x_1}^{x_2} F(x)\,dx$$

## 2. Kinetic Energy

**Definition.** The **kinetic energy** of a body of mass $m$ moving with velocity $v$ is:

$$\boxed{E_k = \frac{1}{2}mv^2}$$

**Derivation from the work-energy theorem.** Consider a body of mass $m$ accelerated from rest to speed $v$ by a constant net force $F$ over distance $s$. The work done is:

$$W = Fs = mas$$

Using $v^2 = u^2 + 2as$ with $u = 0$: $s = v^2/(2a)$. Therefore:

$$W = ma \cdot \frac{v^2}{2a} = \frac{1}{2}mv^2$$

We define this work done as the kinetic energy gained. $\square$

**General proof (variable force).** From Newton's second law: $F = m\frac{dv}{dt}$. The work done is:

$$W = \int_{s_1}^{s_2} F\,ds = \int_{s_1}^{s_2} m\frac{dv}{dt}\,ds = \int_{v_1}^{v_2} mv\,dv = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

This is the **work-energy theorem**: the net work done on a body equals its change in kinetic energy.

$$\boxed{W_{\text{net}} = \Delta E_k}$$

## 3. Gravitational Potential Energy

**Definition.** The **gravitational potential energy** of a body of mass $m$ at height $h$ above a reference level is:

$$\boxed{E_p = mgh}$$

**Derivation.** The work done against gravity in lifting a mass $m$ through a vertical height $h$ at constant velocity (so $a = 0$ and applied force $= mg$):

$$W = Fd = mg \times h = mgh$$

This work is stored as gravitational potential energy. $\square$

**Intuition.** $E_p$ depends on the choice of reference level. Only **changes** in potential energy are physically meaningful. The convention is to take $E_p = 0$ at the lowest point of the system.

## 4. Elastic Potential Energy

**Definition.** The **elastic potential energy** stored in a spring (or any elastic body obeying Hooke's law) extended by $x$ from its natural length is:

$$\boxed{E_e = \frac{1}{2}kx^2}$$

where $k$ is the spring constant (force per unit extension).

**Derivation.** By Hooke's law, the force required to extend the spring by $x$ is $F = kx$. Since the force varies with extension, we integrate:

$$W = \int_0^x F\,dx' = \int_0^x kx'\,dx' = \left[\frac{1}{2}kx'^2\right]_0^x = \frac{1}{2}kx^2$$

This work is stored as elastic potential energy. $\square$

**Graphical interpretation.** On a force-extension graph, the elastic potential energy is the area under the line $F = kx$, which is a triangle of base $x$ and height $kx$, giving $\frac{1}{2}kx^2$.

## 5. Conservation of Energy

**Principle of Conservation of Energy.** Energy cannot be created or destroyed, only transferred from one form to another.

$$\sum E_{\text{initial}} = \sum E_{\text{final}}$$

For a conservative system (no dissipative forces like friction):

$$E_k + E_p + E_e = \text{constant}$$

**Proof for a mass falling under gravity.** A mass $m$ falls from height $h_1$ (at rest) to height $h_2$ (speed $v$). By the work-energy theorem:

$$W_{\text{gravity}} = \Delta E_k$$

But $W_{\text{gravity}} = mg(h_1 - h_2) = -\Delta E_p$. Therefore:

$$-\Delta E_p = \Delta E_k \implies \Delta E_k + \Delta E_p = 0$$

$$E_k + E_p = \text{constant} \quad \square$$

**With non-conservative forces:**

$$W_{\text{nc}} = \Delta E_k + \Delta E_p$$

where $W_{\text{nc}}$ is the work done by non-conservative forces (e.g., friction does negative work, reducing total mechanical energy).

### Enrichment: Noether's Theorem

Emmy Noether proved in 1915 that every conservation law corresponds to a symmetry of nature. Conservation of energy corresponds to **time-translation symmetry** — the laws of physics do not change over time. If you perform an experiment today or tomorrow, you expect the same result. This deep connection between symmetry and conservation is one of the most profound results in physics.

## 6. Power

**Definition.** **Power** is the rate at which work is done (or energy is transferred):

$$\boxed{P = \frac{dW}{dt} = \frac{\Delta E}{\Delta t}}$$

**Units.** 1 watt (W) $= 1$ J s$^{-1}$.

### Power and Velocity

For a force $F$ moving a body at velocity $v$:

$$P = \frac{dW}{dt} = \frac{F \, ds}{dt} = Fv$$

More generally, for a force at angle $\theta$ to the velocity:

$$\boxed{P = Fv\cos\theta}$$

## 7. Efficiency

**Definition.** The **efficiency** of an energy transfer is:

$$\eta = \frac{\text{useful energy output}}{\text{total energy input}} \times 100\%$$

or equivalently for power:

$$\eta = \frac{P_{\text{out}}}{P_{\text{in}}} \times 100\%$$

Efficiency is always between 0% and 100%. In practice, some energy is always dissipated (usually as thermal energy due to friction or resistance).

## 8. Energy as the Universal Currency

Energy is the most unifying concept in physics. It connects mechanics, thermodynamics, electromagnetism, waves, quantum physics, and relativity. The conservation of energy is the one principle that holds across all domains:

- In mechanics, $E_k + E_p = \text{const}$.
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

(c) $P = Fv_{\text{avg}}$, $v_{\text{avg}} = 12.5$ m s$^{-1}$. $F = 46{,}900/12.5 = 3750$ N. Alternatively, $F = ma = 1200 \times 25/8 = 3750$ N.

<b>If you get this wrong, revise:</b> [Kinetic Energy](#2-kinetic-energy) and [Power and Velocity](#power-and-velocity)
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

**Answer.** At B: $\frac{1}{2}(500)v_B^2 = 500 \times 9.81 \times 20$. $v_B = \sqrt{2 \times 9.81 \times 20} = \sqrt{392.4} = 19.8$ m s$^{-1}$.

At C: $E_k(C) = mg(h_A - h_C) = 500 \times 9.81 \times 8 = 39{,}240$ J. $v_C = \sqrt{2 \times 39{,}240/500} = \sqrt{156.96} = 12.5$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Conservation of Energy](#5-conservation-of-energy)
</details>

<details>
<summary>Problem 4</summary>
A motor lifts a $200$ kg load through a height of $15$ m in $10$ s. If the motor is $80\%$ efficient and runs on a $240$ V supply, calculate the current it draws.

**Answer.** Useful power: $P_{\text{out}} = \frac{mgh}{t} = \frac{200 \times 9.81 \times 15}{10} = 2943$ W.

Electrical power: $P_{\text{in}} = \frac{P_{\text{out}}}{\eta} = \frac{2943}{0.80} = 3679$ W.

Current: $I = \frac{P_{\text{in}}}{V} = \frac{3679}{240} = 15.3$ A.

<b>If you get this wrong, revise:</b> [Efficiency](#7-efficiency)
</details>

<details>
<summary>Problem 5</summary>
A pendulum bob of mass $0.50$ kg is pulled aside until it is $0.10$ m above its lowest point and released. Find its speed at the lowest point.

**Answer.** $mgh = \frac{1}{2}mv^2 \implies v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 0.10} = \sqrt{1.962} = 1.40$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Conservation of Energy](#5-conservation-of-energy)
</details>

<details>
<summary>Problem 6</summary>
A crate is pushed 8.0 m across a rough floor by a force of $150$ N at $30°$ below the horizontal. If $\mu = 0.25$ and the crate has mass $40$ kg, find: (a) the work done by the applied force, (b) the work done against friction, (c) the final speed (starting from rest).

**Answer.** (a) $W_F = Fd\cos\theta = 150 \times 8.0 \times \cos 30° = 150 \times 8.0 \times 0.866 = 1039$ J.

(b) Normal reaction: $R = mg + F\sin 30° = 40 \times 9.81 + 150 \times 0.5 = 392.4 + 75 = 467.4$ N.
Friction: $F_f = 0.25 \times 467.4 = 116.9$ N. $W_f = 116.9 \times 8.0 = 935$ J.

(c) Net work = $1039 - 935 = 104$ J. $W_{\text{net}} = \Delta E_k = \frac{1}{2}mv^2$. $v = \sqrt{2 \times 104/40} = \sqrt{5.2} = 2.28$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Work Done by a Force](#1-work-done-by-a-force) and [Work-Energy Theorem](#2-kinetic-energy)
</details>

<details>
<summary>Problem 7</summary>
A car of mass $800$ kg travels at constant speed $20$ m s$^{-1}$ up a hill inclined at $5°$ to the horizontal. The engine has an efficiency of $25\%$. Calculate the rate of fuel energy consumption (in watts).

**Answer.** Component of weight down the slope: $mg\sin 5° = 800 \times 9.81 \times 0.0872 = 684$ N.

At constant speed, engine force = resistance = $684$ N (ignoring other losses).

Power output: $P = Fv = 684 \times 20 = 13{,}680$ W.

Fuel power: $P_{\text{fuel}} = P/\eta = 13{,}680/0.25 = 54{,}700$ W $= 54.7$ kW.

<b>If you get this wrong, revise:</b> [Power and Velocity](#power-and-velocity) and [Efficiency](#7-efficiency)
</details>

<details>
<summary>Problem 8</summary>
Two springs are connected in parallel (both attached to the same mass). Spring A has $k_A = 200$ N m$^{-1}$, spring B has $k_B = 300$ N m$^{-1}$. The mass is displaced $0.05$ m. Find the total elastic PE stored.

**Answer.** For parallel springs, the effective spring constant is $k_{\text{eff}} = k_A + k_B = 500$ N m$^{-1}$.

$E_e = \frac{1}{2}k_{\text{eff}}x^2 = \frac{1}{2}(500)(0.0025) = 0.625$ J.

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

**Answer.** $r = R_E + h = 6{,}670{,}000$ m. $GM = gR_E^2 = 9.81 \times (6.37 \times 10^6)^2 = 3.976 \times 10^{14}$.

$E = -\frac{GMm}{2r} = -\frac{3.976 \times 10^{14} \times 500}{2 \times 6.67 \times 10^6} = -\frac{1.988 \times 10^{17}}{1.334 \times 10^7} = -1.49 \times 10^{10}$ J $= -14.9$ GJ.

<b>If you get this wrong, revise:</b> [Conservation of Energy](#5-conservation-of-energy) and [08-gravitational-fields](./08-gravitational-fields.md)
</details>
