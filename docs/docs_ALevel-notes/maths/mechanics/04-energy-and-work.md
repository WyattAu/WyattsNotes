---
title: Energy and Work
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: energy-and-work
---

## Board Coverage

| Board      | Paper   | Notes                              |
| ---------- | ------- | ---------------------------------- |
| AQA        | Paper 1 | Work, energy, power                |
| Edexcel    | P1      | Similar                            |
| OCR (A)    | Paper 1 | Includes energy on inclined planes |
| CIE (9709) | P1, P4  | Work-energy in P1; further in P4   |

:::info
Energy methods are often simpler than force methods for problems where only initial and final states matter (no time information needed).
:::

---

## 1. Work Done

### 1.1 Definition and derivation

**Definition.** The work done by a constant force $\mathbf{F}$ moving a body through displacement $\mathbf{s}$ is

$$W = \mathbf{F} \cdot \mathbf{s} = Fs\cos\theta$$

where $\theta$ is the angle between $\mathbf{F}$ and $\mathbf{s}$.

**Derivation.** For a force $F$ in the direction of motion:

$$W = \int_{s_1}^{s_2} F\,ds$$

For constant force: $W = F(s_2 - s_1) = Fs$.

If the force makes angle $\theta$ with the displacement, only the component $F\cos\theta$ in the direction of motion does work: $W = Fs\cos\theta$. $\blacksquare$

The SI unit of work is the joule (J) = newton-metre (Nm).

**Intuition.** Work is energy transferred by a force. No work is done if the force is perpendicular to the motion (e.g., the normal reaction does no work on a body sliding on a horizontal surface).

---

## 2. Kinetic Energy

### 2.1 Derivation

**Theorem.** The kinetic energy of a body of mass $m$ moving at speed $v$ is

$$\text{KE} = \frac{1}{2}mv^2$$

**Proof.** Starting from Newton's Second Law:

$$F = ma = m\frac{dv}{dt} = m\frac{dv}{ds}\frac{ds}{dt} = mv\frac{dv}{ds}$$

$$F\,ds = mv\,dv$$

Integrating from rest ($v=0$) to speed $v$:

$$W = \int_0^s F\,ds' = \int_0^v mv'\,dv' = \frac{1}{2}mv^2$$

This work equals the kinetic energy gained: $\text{KE} = \tfrac{1}{2}mv^2$. $\blacksquare$

---

## 3. Gravitational Potential Energy

### 3.1 Derivation

**Theorem.** The gravitational potential energy of a mass $m$ at height $h$ above a reference level is

$$\text{GPE} = mgh$$

**Proof.** The work done against gravity to raise a mass $m$ through height $h$ is:

$$W = F \times h = mg \times h = mgh$$

This work is stored as gravitational potential energy. $\blacksquare$

### 3.2 Notes

- GPE depends on the choice of reference level (typically the ground or lowest point).
- Only **changes** in GPE are physically meaningful.
- When a body falls through height $h$: loss in GPE $= mgh = $ gain in KE (if no other forces do work).

---

## 4. Conservation of Energy

### 4.1 Statement

**Theorem (Work-Energy Principle).** The work done by all forces on a body equals the change in its kinetic energy:

$$W_{\text{net}} = \Delta\text{KE} = \frac{1}{2}mv^2 - \frac{1}{2}mu^2$$

### 4.2 Proof from Newton's Second Law

$$W = \int_{s_1}^{s_2} F\,ds = \int_{s_1}^{s_2} ma\,ds = m\int_{s_1}^{s_2}\frac{dv}{dt}\,ds = m\int_{u}^{v}v'\,dv' = \frac{1}{2}mv^2 - \frac{1}{2}mu^2 \quad \blacksquare$$

### 4.3 Conservation of mechanical energy

If only conservative forces (gravity) do work:

$$\text{KE}_1 + \text{GPE}_1 = \text{KE}_2 + \text{GPE}_2$$

When friction is present:

$$\text{KE}_1 + \text{GPE}_1 = \text{KE}_2 + \text{GPE}_2 + \text{Work done against friction}$$

---

## 5. Power

### 5.1 Definition

$$P = \frac{dW}{dt}$$

For a force $F$ on a body moving at speed $v$:

$$\boxed{P = Fv}$$

**Derivation.** $P = \dfrac{dW}{dt} = \dfrac{F\,ds}{dt} = Fv$. $\blacksquare$

### 5.2 Units

The SI unit of power is the watt (W) = joule per second (J/s).

$1\,\text{kW} = 1000\,\text{W}$, $1\,\text{MW} = 10^6\,\text{W}$.

### 5.3 Power and inclined planes

At maximum speed (terminal velocity) up a slope, the driving force equals the component of weight plus friction:

$$\frac{P}{v_{\max}} = mg\sin\theta + F_{\text{friction}}$$

---

## Problem Set

<details><summary>Problem 1</summary><div>
A car of mass $1200\,\text{kg}$ accelerates from $10\,\text{m/s}$ to $25\,\text{m/s}$. Find the work done by the engine.
</div></details>

<details><summary>Solution 1</summary><div>
$W = \Delta\text{KE} = \tfrac{1}{2}(1200)(625 - 100) = 600 \times 525 = 315000\,\text{J} = 315\,\text{kJ}$.

**If you get this wrong, revise:** [Work-Energy Principle](#41-statement) — Section 4.1.

</div></details>

<details><summary>Problem 2</summary><div>
A ball of mass $0.5\,\text{kg}$ is dropped from a height of $20\,\text{m}$. Find its speed just before hitting the ground. Take $g = 9.8\,\text{m/s}^2$.
</div></details>

<details><summary>Solution 2</summary><div>
Conservation of energy: $mgh = \tfrac{1}{2}mv^2$.

$v = \sqrt{2gh} = \sqrt{2(9.8)(20)} = \sqrt{392} \approx 19.8\,\text{m/s}$.

**If you get this wrong, revise:** [Conservation of Mechanical Energy](#43-conservation-of-mechanical-energy) — Section 4.3.

</div></details>

<details><summary>Problem 3</summary><div>
A car engine produces $60\,\text{kW}$ of power. The car has mass $1000\,\text{kg}$ and travels on a level road. Find the maximum speed if the resistance is $400\,\text{N}$.
</div></details>

<details><summary>Solution 3</summary><div>
At max speed: $P = Fv$ where $F = 400\,\text{N}$ (driving force equals resistance).

$60000 = 400v \implies v = 150\,\text{m/s}$.

**If you get this wrong, revise:** [Power](#5-power) — Section 5.

</div></details>

<details><summary>Problem 4</summary><div>
A block of mass $4\,\text{kg}$ slides $6\,\text{m}$ down a rough slope inclined at $30°$ ($\mu = 0.2$). It starts from rest. Find its speed at the bottom using energy methods.
</div></details>

<details><summary>Solution 4</summary><div>
Loss of GPE $= mgh = 4(9.8)(6\sin 30°) = 4(9.8)(3) = 117.6\,\text{J}$.
Work against friction $= \mu mg\cos 30° \times 6 = 0.2(4)(9.8)(0.866)(6) = 40.75\,\text{J}$.
$\tfrac{1}{2}mv^2 = 117.6 - 40.75 = 76.85 \implies v^2 = 76.85/2 = 38.425 \implies v \approx 6.20\,\text{m/s}$.

**If you get this wrong, revise:** [Conservation of Mechanical Energy](#43-conservation-of-mechanical-energy) — Section 4.3.

</div></details>

<details><summary>Problem 5</summary><div>
A crane lifts a load of $500\,\text{kg}$ through $30\,\text{m}$ in 45 seconds at constant speed. Find the power output.
</div></details>

<details><summary>Solution 5</summary><div>
$W = mgh = 500(9.8)(30) = 147000\,\text{J}$.

$P = W/t = 147000/45 = 3267\,\text{W} \approx 3.27\,\text{kW}$.

**If you get this wrong, revise:** [Power](#5-power) — Section 5.

</div></details>

<details><summary>Problem 6</summary><div>
A pendulum has a bob of mass $2\,\text{kg}$ on a string of length $1.5\,\text{m}$. It is released from horizontal. Find the speed at the lowest point.
</div></details>

<details><summary>Solution 6</summary><div>
Height dropped $= 1.5\,\text{m}$. $mgh = \tfrac{1}{2}mv^2 \implies v = \sqrt{2(9.8)(1.5)} = \sqrt{29.4} \approx 5.42\,\text{m/s}$.

**If you get this wrong, revise:** [Conservation of Mechanical Energy](#43-conservation-of-mechanical-energy) — Section 4.3.

</div></details>

<details><summary>Problem 7</summary><div>
A car of mass $800\,\text{kg}$ travels up a hill of gradient $\sin^{-1}(0.1)$ at constant speed $15\,\text{m/s}$. The engine power is $20\,\text{kW}$. Find the resistance to motion.
</div></details>

<details><summary>Solution 7</summary><div>
At constant speed: driving force $= mg\sin\theta + R$.

$P = Fv \implies F = P/v = 20000/15 = 1333.3\,\text{N}$.

$R = F - mg\sin\theta = 1333.3 - 800(9.8)(0.1) = 1333.3 - 784 = 549.3\,\text{N}$.

**If you get this wrong, revise:** [Power and Inclined Planes](#53-power-and-inclined-planes) — Section 5.3.

</div></details>

<details><summary>Problem 8</summary><div>
A spring obeys Hooke's law: $T = kx$. Derive the elastic potential energy stored when the extension is $x$.
</div></details>

<details><summary>Solution 8</summary><div>
The force varies from $0$ to $kx$. The work done (energy stored) is:

$$\text{EPE} = \int_0^x T\,dx' = \int_0^x kx'\,dx' = \frac{1}{2}kx^2$$

**If you get this wrong, revise:** [Work Done](#11-definition-and-derivation) — Section 1.1.

</div></details>

<details><summary>Problem 9</summary><div>
A projectile is launched at $20\,\text{m/s}$ at $60°$ to the horizontal from a cliff of height $30\,\text{m}$. Find its speed when it hits the ground using energy methods. Take $g = 9.8\,\text{m/s}^2$.
</div></details>

<details><summary>Solution 9</summary><div>
$\tfrac{1}{2}mu^2 + mgh = \tfrac{1}{2}mv^2$.

$\tfrac{1}{2}(400) + 9.8(30) = \tfrac{1}{2}v^2$.

$200 + 294 = \tfrac{1}{2}v^2 \implies v^2 = 988 \implies v \approx 31.4\,\text{m/s}$.

(Air resistance is neglected.)

**If you get this wrong, revise:** [Conservation of Mechanical Energy](#43-conservation-of-mechanical-energy) — Section 4.3.

</div></details>

<details><summary>Problem 10</summary><div>
A train of mass $200{,}000\,\text{kg}$ has a maximum power output of $2\,\text{MW}$. The resistance to motion is $R = 5000 + 20v$ newtons. Find the maximum speed on level ground.
</div></details>

<details><summary>Solution 10</summary><div>
At maximum speed: $P = Rv \implies 2000000 = (5000+20v)v = 5000v + 20v^2$.

$20v^2 + 5000v - 2000000 = 0 \implies v^2 + 250v - 100000 = 0$.

$v = \dfrac{-250 + \sqrt{62500 + 400000}}{2} = \dfrac{-250 + \sqrt{462500}}{2} = \dfrac{-250 + 680.1}{2} = 215.1\,\text{m/s}$.

**If you get this wrong, revise:** [Power](#5-power) — Section 5.

</div></details>
