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

:::info Energy methods are often simpler than force methods for problems where only initial and
final states matter (no time information needed). :::

---

## 1. Work Done

### 1.1 Definition and derivation

**Definition.** The work done by a constant force $\mathbf{F}$ moving a body through displacement
$\mathbf{s}$ is

$$W = \mathbf{F} \cdot \mathbf{s} = Fs\cos\theta$$

where $\theta$ is the angle between $\mathbf{F}$ and $\mathbf{s}$.

**Derivation.** For a force $F$ in the direction of motion:

$$W = \int_{s_1}^{s_2} F\,ds$$

For constant force: $W = F(s_2 - s_1) = Fs$.

If the force makes angle $\theta$ with the displacement, only the component $F\cos\theta$ in the
direction of motion does work: $W = Fs\cos\theta$. $\blacksquare$

The SI unit of work is the joule (J) = newton-metre (Nm).

**Intuition.** Work is energy transferred by a force. No work is done if the force is perpendicular
to the motion (e.g., the normal reaction does no work on a body sliding on a horizontal surface).

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

**Theorem.** The gravitational potential energy of a mass $m$ at height $h$ above a reference level
is

$$\text{GPE} = mgh$$

**Proof.** The work done against gravity to raise a mass $m$ through height $h$ is:

$$W = F \times h = mg \times h = mgh$$

This work is stored as gravitational potential energy. $\blacksquare$

### 3.2 Notes

- GPE depends on the choice of reference level (typically the ground or lowest point).
- Only **changes** in GPE are physically meaningful.
- When a body falls through height $h$: loss in GPE $= mgh = $ gain in KE (if no other forces do
  work).

### 3.3 Real-world application: roller coasters

Roller coasters are a classic application of GPE. A coaster train is hauled to the highest point
using a motor (work done against gravity). From there, GPE converts to KE as it descends, and back
to GPE as it climbs the next hill.

**Key insight:** The maximum speed depends only on the vertical drop, not the track shape (assuming
no friction). For a drop of $40\,\text{m}$:

$$v_{\max} = \sqrt{2(9.8)(40)} \approx 28\,\text{m/s}$$

(approximately $100\,\text{km/h}$). Real coasters never reach this due to friction and air
resistance.

For a loop-the-loop of radius $r$, the minimum speed at the top is $\sqrt{gr}$ (from circular
motion). The coaster must enter the loop with enough GPE to reach this speed at the top:

$$mgh = \frac{1}{2}m(\sqrt{gr})^2 + mg(2r) \implies h = \frac{5}{2}r$$

The entry height must be at least $2.5r$ above the bottom of the loop.

---

## 4. Conservation of Energy

### 4.1 Statement

**Theorem (Work-Energy Principle).** The work done by all forces on a body equals the change in its
kinetic energy:

$$W_{\text{net}} = \Delta\text{KE} = \frac{1}{2}mv^2 - \frac{1}{2}mu^2$$

### 4.2 Proof from Newton's Second Law

$$W = \int_{s_1}^{s_2} F\,ds = \int_{s_1}^{s_2} ma\,ds = m\int_{s_1}^{s_2}\frac{dv}{dt}\,ds = m\int_{u}^{v}v'\,dv' = \frac{1}{2}mv^2 - \frac{1}{2}mu^2 \quad \blacksquare$$

### 4.3 Conservation of mechanical energy

If only conservative forces (gravity) do work:

$$\text{KE}_1 + \text{GPE}_1 = \text{KE}_2 + \text{GPE}_2$$

When friction is present:

$$\text{KE}_1 + \text{GPE}_1 = \text{KE}_2 + \text{GPE}_2 + \text{Work done against friction}$$

### 4.4 Work-energy principle for systems

When multiple bodies interact (e.g., two blocks connected by a string over a pulley), apply the
work-energy principle to the **system as a whole**:

$$W_{\text{external}} = \Delta\text{KE}_{\text{system}} + \Delta\text{GPE}_{\text{system}} + W_{\text{friction}}$$

Internal forces (such as tension in a connecting string) do equal and opposite work on the two
masses and cancel out. Only external forces and changes in GPE need be considered.

**Example.** Two particles of masses $3\,\text{kg}$ and $5\,\text{kg}$ are connected by a light
inextensible string over a smooth pulley. Released from rest, find the speed when the $5\,\text{kg}$
mass has descended $2\,\text{m}$.

Net GPE lost $= (5 - 3)(9.8)(2) = 39.2\,\text{J}$. This equals total KE gained:

$$\frac{1}{2}(3 + 5)v^2 = 39.2 \implies 4v^2 = 39.2 \implies v \approx 3.13\,\text{m/s}$$

Compare with the force method: $a = \frac{5-3}{5+3}(9.8) = 2.45\,\text{m/s}^2$, then
$v = \sqrt{2(2.45)(2)} \approx 3.13\,\text{m/s}$. The energy method avoids solving for tension.

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

At maximum speed (terminal velocity) up a slope, the driving force equals the component of weight
plus friction:

$$\frac{P}{v_{\max}} = mg\sin\theta + F_{\text{friction}}$$

### 5.4 Power in variable-force situations

When a body moves under constant power $P$ (e.g., a car with the throttle fixed), the available
tractive force decreases as speed increases:

$$F = \frac{P}{v}$$

Since $F = ma$:

$$m\frac{dv}{dt} = \frac{P}{v} \implies mv\frac{dv}{dt} = P$$

Integrating from rest ($v = 0$) to speed $v$ over time $t$:

$$\int_0^v mv'\,dv' = \int_0^t P\,dt' \implies \frac{1}{2}mv^2 = Pt \implies v = \sqrt{\frac{2Pt}{m}}$$

Speed increases as $\sqrt{t}$ under constant power, slower than the linear increase under constant
force. This explains why cars feel less responsive at high speeds: the available force at speed $v$
is only $P/v$.

To find the distance covered:

$$s = \int_0^t \sqrt{\frac{2Pt'}{m}}\,dt' = \sqrt{\frac{2P}{m}} \cdot \frac{2}{3}t^{3/2} = \frac{2}{3}\sqrt{\frac{2P}{m}}\,t^{3/2}$$

### 5.5 Energy-time graphs and average power

The gradient of a kinetic energy-time graph gives the instantaneous power:

$$\frac{d(\text{KE})}{dt} = \frac{d}{dt}\left(\frac{1}{2}mv^2\right) = mv\frac{dv}{dt} = Fv = P$$

The area under a power-time graph equals the total work done (or total energy transferred).

**Average power** over a time interval $\Delta t$:

$$P_{\text{avg}} = \frac{\Delta W}{\Delta t} = \frac{\Delta\text{KE} + \Delta\text{GPE}}{\Delta t}$$

For a body accelerating from rest to speed $v$ in time $t$ under constant force:

$$P_{\text{avg}} = \frac{\frac{1}{2}mv^2}{t} = \frac{1}{2}Fv$$

This is half the instantaneous power $Fv$ at the end, since velocity increases linearly from $0$ to
$v$ while force remains constant. For constant power $P$, the average power equals $P$ throughout.

---

## 6. Elastic Potential Energy

### 6.1 Hooke's law

Hooke's law states that the tension in an elastic spring (or string) is proportional to its
extension from the natural length:

$$T = kx$$

where $k$ is the stiffness (spring constant) in $\text{N/m}$, and $x$ is the extension.

The force-extension graph is a straight line through the origin. The area under this graph equals
the work done stretching the spring.

### 6.2 Derivation of elastic potential energy

**Theorem.** The elastic potential energy stored in a spring of stiffness $k$ extended by $x$ is:

$$\text{EPE} = \frac{1}{2}kx^2$$

**Proof.** The force varies from $0$ to $kx$. The work done equals the area under the
force-extension graph (a triangle):

$$W = \frac{1}{2} \times x \times kx = \frac{1}{2}kx^2$$

By integration:

$$\text{EPE} = \int_0^x kx'\,dx' = \left[\frac{1}{2}kx'^2\right]_0^x = \frac{1}{2}kx^2 \quad \blacksquare$$

An equivalent form using the tension $T = kx$ at maximum extension is $\text{EPE} = \frac{1}{2}Tx$.

### 6.3 Conservation of energy with springs

When elastic springs are involved, EPE must be included in the energy balance:

$$\text{KE}_1 + \text{GPE}_1 + \text{EPE}_1 = \text{KE}_2 + \text{GPE}_2 + \text{EPE}_2 + W_{\text{friction}}$$

### 6.4 Real-world application: bungee jumping

A bungee cord behaves like a spring. As a jumper falls, GPE converts to KE until the cord becomes
taut. Once taut, the cord stretches and stores EPE. Energy oscillates between GPE, KE, and EPE until
damping dissipates it.

**Example.** A jumper of mass $75\,\text{kg}$ leaps from a platform $50\,\text{m}$ above a river.
The cord has natural length $25\,\text{m}$ and stiffness $200\,\text{N/m}$. Find the lowest point
reached ($g = 9.8\,\text{m/s}^2$).

At the lowest point, speed $= 0$. If the total distance fallen is $d$ (where $d \gt{} 25$ since the
cord must be stretched):

$$mgd = \frac{1}{2}k(d - 25)^2$$

$$735d = 100(d - 25)^2 \implies 100d^2 - 5735d + 62500 = 0$$

$$d = \frac{5735 \pm \sqrt{5735^2 - 4(100)(62500)}}{200} = \frac{5735 \pm 2809}{200}$$

$d = 42.72\,\text{m}$ (the root $14.63\,\text{m}$ is rejected since the cord is not yet taut).

The lowest point is $50 - 42.72 = 7.28\,\text{m}$ above the river. The jumper is safe.

### 6.5 Real-world application: spring-mass systems

A mass $m$ on a spring of stiffness $k$ (smooth surface) forms a simple harmonic oscillator. At the
natural length, all energy is kinetic. At maximum extension $A$ (the amplitude), all energy is EPE:

$$E_{\text{total}} = \frac{1}{2}kA^2 = \frac{1}{2}mv_{\max}^2$$

This gives $v_{\max} = A\sqrt{k/m}$, the maximum speed at the equilibrium position.

---

## Problem Set

<details>
<summary>Problem 1</summary>
A car of mass $1200\,\text{kg}$ accelerates from $10\,\text{m/s}$ to $25\,\text{m/s}$. Find the work done by the engine.
</details>

<details>
<summary>Solution 1</summary>
$W = \Delta\text{KE} = \tfrac{1}{2}(1200)(625 - 100) = 600 \times 525 = 315000\,\text{J} = 315\,\text{kJ}$.

**If you get this wrong, revise:** [Work-Energy Principle](#41-statement) — Section 4.1.

</details>

<details>
<summary>Problem 2</summary>
A ball of mass $0.5\,\text{kg}$ is dropped from a height of $20\,\text{m}$. Find its speed just before hitting the ground. Take $g = 9.8\,\text{m/s}^2$.
</details>

<details>
<summary>Solution 2</summary>
Conservation of energy: $mgh = \tfrac{1}{2}mv^2$.

$v = \sqrt{2gh} = \sqrt{2(9.8)(20)} = \sqrt{392} \approx 19.8\,\text{m/s}$.

**If you get this wrong, revise:**
[Conservation of Mechanical Energy](#43-conservation-of-mechanical-energy) — Section 4.3.

</details>

<details>
<summary>Problem 3</summary>
A car engine produces $60\,\text{kW}$ of power. The car has mass $1000\,\text{kg}$ and travels on a level road. Find the maximum speed if the resistance is $400\,\text{N}$.
</details>

<details>
<summary>Solution 3</summary>
At max speed: $P = Fv$ where $F = 400\,\text{N}$ (driving force equals resistance).

$60000 = 400v \implies v = 150\,\text{m/s}$.

**If you get this wrong, revise:** [Power](#5-power) — Section 5.

</details>

<details>
<summary>Problem 4</summary>
A block of mass $4\,\text{kg}$ slides $6\,\text{m}$ down a rough slope inclined at $30°$ ($\mu = 0.2$). It starts from rest. Find its speed at the bottom using energy methods.
</details>

<details>
<summary>Solution 4</summary>
Loss of GPE $= mgh = 4(9.8)(6\sin 30°) = 4(9.8)(3) = 117.6\,\text{J}$.
Work against friction $= \mu mg\cos 30° \times 6 = 0.2(4)(9.8)(0.866)(6) = 40.75\,\text{J}$.
$\tfrac{1}{2}mv^2 = 117.6 - 40.75 = 76.85 \implies v^2 = 76.85/2 = 38.425 \implies v \approx 6.20\,\text{m/s}$.

**If you get this wrong, revise:**
[Conservation of Mechanical Energy](#43-conservation-of-mechanical-energy) — Section 4.3.

</details>

<details>
<summary>Problem 5</summary>
A crane lifts a load of $500\,\text{kg}$ through $30\,\text{m}$ in 45 seconds at constant speed. Find the power output.
</details>

<details>
<summary>Solution 5</summary>
$W = mgh = 500(9.8)(30) = 147000\,\text{J}$.

$P = W/t = 147000/45 = 3267\,\text{W} \approx 3.27\,\text{kW}$.

**If you get this wrong, revise:** [Power](#5-power) — Section 5.

</details>

<details>
<summary>Problem 6</summary>
A pendulum has a bob of mass $2\,\text{kg}$ on a string of length $1.5\,\text{m}$. It is released from horizontal. Find the speed at the lowest point.
</details>

<details>
<summary>Solution 6</summary>
Height dropped $= 1.5\,\text{m}$. $mgh = \tfrac{1}{2}mv^2 \implies v = \sqrt{2(9.8)(1.5)} = \sqrt{29.4} \approx 5.42\,\text{m/s}$.

**If you get this wrong, revise:**
[Conservation of Mechanical Energy](#43-conservation-of-mechanical-energy) — Section 4.3.

</details>

<details>
<summary>Problem 7</summary>
A car of mass $800\,\text{kg}$ travels up a hill of gradient $\sin^{-1}(0.1)$ at constant speed $15\,\text{m/s}$. The engine power is $20\,\text{kW}$. Find the resistance to motion.
</details>

<details>
<summary>Solution 7</summary>
At constant speed: driving force $= mg\sin\theta + R$.

$P = Fv \implies F = P/v = 20000/15 = 1333.3\,\text{N}$.

$R = F - mg\sin\theta = 1333.3 - 800(9.8)(0.1) = 1333.3 - 784 = 549.3\,\text{N}$.

**If you get this wrong, revise:** [Power and Inclined Planes](#53-power-and-inclined-planes) —
Section 5.3.

</details>

<details>
<summary>Problem 8</summary>
A spring obeys Hooke's law: $T = kx$. Derive the elastic potential energy stored when the extension is $x$.
</details>

<details>
<summary>Solution 8</summary>
The force varies from $0$ to $kx$. The work done (energy stored) is:

$$\text{EPE} = \int_0^x T\,dx' = \int_0^x kx'\,dx' = \frac{1}{2}kx^2$$

**If you get this wrong, revise:** [Work Done](#11-definition-and-derivation) — Section 1.1.

</details>

<details>
<summary>Problem 9</summary>
A projectile is launched at $20\,\text{m/s}$ at $60°$ to the horizontal from a cliff of height $30\,\text{m}$. Find its speed when it hits the ground using energy methods. Take $g = 9.8\,\text{m/s}^2$.
</details>

<details>
<summary>Solution 9</summary>
$\tfrac{1}{2}mu^2 + mgh = \tfrac{1}{2}mv^2$.

$\tfrac{1}{2}(400) + 9.8(30) = \tfrac{1}{2}v^2$.

$200 + 294 = \tfrac{1}{2}v^2 \implies v^2 = 988 \implies v \approx 31.4\,\text{m/s}$.

(Air resistance is neglected.)

**If you get this wrong, revise:**
[Conservation of Mechanical Energy](#43-conservation-of-mechanical-energy) — Section 4.3.

</details>

<details>
<summary>Problem 10</summary>
A train of mass $200{,}000\,\text{kg}$ has a maximum power output of $2\,\text{MW}$. The resistance to motion is $R = 5000 + 20v$ newtons. Find the maximum speed on level ground.
</details>

<details>
<summary>Solution 10</summary>
At maximum speed: $P = Rv \implies 2000000 = (5000+20v)v = 5000v + 20v^2$.

$20v^2 + 5000v - 2000000 = 0 \implies v^2 + 250v - 100000 = 0$.

$v = \dfrac{-250 + \sqrt{62500 + 400000}}{2} = \dfrac{-250 + \sqrt{462500}}{2} = \dfrac{-250 + 680.1}{2} = 215.1\,\text{m/s}$.

**If you get this wrong, revise:** [Power](#5-power) — Section 5.

</details>

<details>
<summary>Problem 11</summary>
A particle of mass $0.5\,\text{kg}$ is attached to one end of a light elastic spring of natural
length $1.0\,\text{m}$ and stiffness $200\,\text{N/m}$. The other end is fixed. The particle is
held at rest where the extension is $0.3\,\text{m}$ and released on a smooth horizontal surface.
Find the speed when the spring returns to its natural length.
</details>

<details>
<summary>Solution 11</summary>
EPE at release $= \tfrac{1}{2}(200)(0.3)^2 = 9\,\text{J}$.

At natural length, EPE $= 0$, so all EPE converts to KE:

$\tfrac{1}{2}(0.5)v^2 = 9 \implies v^2 = 36 \implies v = 6\,\text{m/s}$.

**If you get this wrong, revise:** [Elastic Potential Energy](#6-elastic-potential-energy) —
Section 6.

</details>

<details>
<summary>Problem 12</summary>
A car of mass $500\,\text{kg}$ moves from rest under constant power $5\,\text{kW}$ on a level road
with no resistance. Find the speed after $5\,\text{s}$ and the distance covered.
</details>

<details>
<summary>Solution 12</summary>
Using $v = \sqrt{2Pt/m}$:

$v = \sqrt{\frac{2(5000)(5)}{500}} = \sqrt{100} = 10\,\text{m/s}$.

Using $s = \frac{2}{3}\sqrt{\frac{2P}{m}}\,t^{3/2}$:

$s = \frac{2}{3}\sqrt{\frac{2(5000)}{500}} \times 5^{3/2} = \frac{2}{3}\sqrt{20} \times 5\sqrt{5} = \frac{2}{3}(2\sqrt{5})(5\sqrt{5}) = \frac{2}{3}(50) = \frac{100}{3} \approx 33.3\,\text{m}$.

**If you get this wrong, revise:**
[Power in variable-force situations](#54-power-in-variable-force-situations) — Section 5.4.

</details>

<details>
<summary>Problem 13</summary>
A block of mass $2\,\text{kg}$ is projected up a rough slope inclined at $45°$ to the horizontal
with speed $12\,\text{m/s}$. The coefficient of friction is $0.3$. Using energy methods, find the
distance travelled before the block comes to rest, and the speed when it returns to its starting
point.
</details>

<details>
<summary>Solution 13</summary>
**Going up:** $\tfrac{1}{2}(2)(144) = 2(9.8)(d\sin 45°) + 0.3(2)(9.8)\cos 45° \times d$.

$144 = 13.86d + 4.16d = 18.02d \implies d \approx 7.99\,\text{m}$.

**Coming back down:** Loss of GPE $= 2(9.8)(7.99\sin 45°) = 110.8\,\text{J}$. Work against friction
$= 0.3(2)(9.8)\cos 45° \times 7.99 = 33.2\,\text{J}$.

$\tfrac{1}{2}(2)v^2 = 110.8 - 33.2 = 77.6 \implies v = \sqrt{77.6} \approx 8.81\,\text{m/s}$.

The return speed is less than $12\,\text{m/s}$ because energy is lost to friction on both the up and
down journey.

**If you get this wrong, revise:**
[Conservation of Mechanical Energy](#43-conservation-of-mechanical-energy) — Section 4.3.

</details>

<details>
<summary>Problem 14</summary>
A particle of mass $2\,\text{kg}$ is attached to the lower end of a light elastic spring of natural
length $1.5\,\text{m}$ and stiffness $50\,\text{N/m}$. The upper end is fixed. The particle is held
at rest at the point where the spring is at its natural length and then released. Find the maximum
extension of the spring. Take $g = 9.8\,\text{m/s}^2$.
</details>

<details>
<summary>Solution 14</summary>
At maximum extension $x$, speed $= 0$.

GPE lost $= mgx = 2(9.8)x = 19.6x$.

EPE gained $= \tfrac{1}{2}(50)x^2 = 25x^2$.

$19.6x = 25x^2 \implies x(25x - 19.6) = 0 \implies x = 0.784\,\text{m}$ (ignoring the trivial
solution $x = 0$).

**If you get this wrong, revise:**
[Conservation of energy with springs](#63-conservation-of-energy-with-springs) — Section 6.3.

</details>

<details>
<summary>Problem 15</summary>
A small body of mass $0.2\,\text{kg}$ is attached to one end of a light elastic spring of stiffness
$50\,\text{N/m}$ and natural length $0.5\,\text{m}$. The other end is fixed to a point on a smooth
inclined plane at angle $30°$ to the horizontal. The body is released from rest at the point where
the spring is at its natural length. Find the maximum extension. Take $g = 9.8\,\text{m/s}^2$.
</details>

<details>
<summary>Solution 15</summary>
At maximum extension $x$, speed $= 0$. The body has moved distance $x$ down the slope.

GPE lost $= mgx\sin 30° = 0.2(9.8)(0.5)x = 0.98x$.

EPE gained $= \tfrac{1}{2}(50)x^2 = 25x^2$.

$0.98x = 25x^2 \implies x(25x - 0.98) = 0 \implies x = 0.0392\,\text{m} = 3.92\,\text{cm}$.

**If you get this wrong, revise:** [Elastic Potential Energy](#6-elastic-potential-energy) —
Section 6.

</details>

<details>
<summary>Problem 16</summary>
A vehicle of mass $1500\,\text{kg}$ travels up a slope inclined at $\sin^{-1}(0.08)$ to the
horizontal. The engine works at constant power $30\,\text{kW}$. The resistance to motion (excluding
gravity) is constant at $500\,\text{N}$. Find the maximum speed and the acceleration when the speed
is $8\,\text{m/s}$. Take $g = 9.8\,\text{m/s}^2$.
</details>

<details>
<summary>Solution 16</summary>
**Maximum speed** ($a = 0$, driving force equals total resistance):

$\frac{P}{v_{\max}} = mg\sin\theta + R = 1500(9.8)(0.08) + 500 = 1176 + 500 = 1676\,\text{N}$.

$v_{\max} = \frac{30000}{1676} \approx 17.9\,\text{m/s}$.

**At $v = 8\,\text{m/s}$:**

Driving force $= \frac{P}{v} = \frac{30000}{8} = 3750\,\text{N}$.

Net force $= 3750 - 1676 = 2074\,\text{N}$.

$a = \frac{2074}{1500} \approx 1.38\,\text{m/s}^2$.

**If you get this wrong, revise:** [Power and Inclined Planes](#53-power-and-inclined-planes) —
Section 5.3, and [Power in variable-force situations](#54-power-in-variable-force-situations) —
Section 5.4.

</details>

:::
