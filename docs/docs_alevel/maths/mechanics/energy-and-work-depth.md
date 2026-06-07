---
title: Energy and Work (Extended)
description:
  'A-Level Maths Energy and Work (Extended) notes covering key definitions, core concepts, worked
  examples, and practice questions for analytical revision.'
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: energy-and-work-extended
---

## Energy and Work (Extended Treatment)

This document provides a thorough treatment of the work-energy principle, power, conservation of
Energy, and elastic potential energy with proofs and applications.

:::info Energy methods often provide elegant shortcuts in mechanics problems. Where a Newton's-law
approach Requires solving differential equations, an energy approach may give the answer in a single
step.
:::

<hr />

## 1. Work Done by a Force

### 1.1 Definition

The **work done** by a constant force $\mathbf{F}$ acting on a body that undergoes a displacement
$\mathbf{s}$ is:

$$W = \mathbf{F} \cdot \mathbf{s} = Fs\cos\theta$$

Where $\theta$ is the angle between the force and the displacement.

The SI unit of work is the joule ($\mathrm{J} = \mathrm{Nm}$). Work is a **scalar** quantity.

**Special cases:**

- $\theta = 0^\circ$: $W = Fs$ (force in the direction of motion).
- $\theta = 90^\circ$: $W = 0$ (force perpendicular to motion -- no work done).
- $\theta = 180^\circ$: $W = -Fs$ (force opposing motion).

### 1.2 Work done by a variable force

For a variable force in one dimension:

$$W = \int_{x_1}^{x_2} F\,dx$$

**Proof.** For a small displacement $\delta x$The work done is approximately $F\,\delta x$. In the
Limit as $\delta x \to 0$:

$$W = \lim_{\delta x \to 0} \sum F\,\delta x = \int_{x_1}^{x_2} F\,dx \quad \blacksquare$$

### 1.3 Work done against gravity

Lifting a mass $m$ through a vertical height $h$:

$$W = mgh$$

This is independent of the path taken (gravitational force is **conservative**).

**Proof.** Consider a general path from height $h_1$ to height $h_2$. The gravitational force is
$-mg\hat{\mathbf{j}}$. The work done by gravity is:

$$W = \int \mathbf{F} \cdot d\mathbf{s} = \int_{h_1}^{h_2} (-mg)\,dh = -mg(h_2 - h_1) = mgh_1 - mgh_2$$

The work done **against** gravity is $mg(h_2 - h_1) = mgh$. $\blacksquare$

### 1.4 Work done by friction

Friction is a **non-conservative** force. The work done by friction depends on the path:

$$W_{\mathrm{friction}} = -\mu R \times d$$

Where $d$ is the total distance travelled along the surface (not the displacement). Friction always
Does negative work (it opposes motion), so it always removes energy from the system.

<hr />

## 2. Kinetic Energy

### 2.1 Definition and derivation

The **kinetic energy** of a body of mass $m$ moving with speed $v$ is:

$$\boxed{\mathrm{KE} = \frac{1}{2}mv^2}$$

**Derivation from Newton's second law.** Starting from $F = ma$ and using $a = \dfrac{dv}{dt}$:

$$F = m\frac{dv}{dt} = m\frac{dv}{ds}\frac{ds}{dt} = mv\frac{dv}{ds}$$

$$F\,ds = mv\,dv$$

Integrating:

$$\int_{s_1}^{s_2} F\,ds = \int_{v_1}^{v_2} mv\,dv = \left[\frac{1}{2}mv^2\right]_{v_1}^{v_2}$$

The left-hand side is the work done by the force, so:

$$W = \Delta\mathrm{KE} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

This is the **work-energy theorem**. $\blacksquare$

### 2.2 Worked example

**Problem.** A car of mass $1200\;\mathrm{kg}$ accelerates from $15\;\mathrm{m\,s^{-1}}$ to
$25\;\mathrm{m\,s^{-1}}$ over a distance of $200\;\mathrm{m}$ on a level road. Find the average
Driving force, given that the total resistance to motion is $400\;\mathrm{N}$.

Work-energy theorem:

$$(F - 400) \times 200 = \frac{1}{2}(1200)(25^2 - 15^2)$$

$$(F - 400) \times 200 = 600(625 - 225) = 600 \times 400 = 240000$$

$$F - 400 = 1200 \implies F = 1600\;\mathrm{N}$$

<hr />

## 3. Gravitational Potential Energy

### 3.1 Definition

The **gravitational potential energy** of a body of mass $m$ at height $h$ above a reference level
Is:

$$\boxed{\mathrm{GPE} = mgh}$$

This is valid near the Earth's surface where $g$ is approximately constant.

### 3.2 Reference level

The choice of reference level (where $\mathrm{GPE} = 0$) is arbitrary. Only **changes** in GPE Have
physical significance:

$$\Delta\mathrm{GPE} = mg\Delta h$$

<hr />

## 4. The Work-Energy Principle

### 4.1 Statement

The **work-energy principle** states that the work done by the resultant force on a body equals the
Change in its kinetic energy:

$$W_{\mathrm{net}} = \Delta\mathrm{KE}$$

### 4.2 Extended form with potential energy

When conservative forces (gravity, elastic forces) are present:

$$W_{\mathrm{non-conservative}} = \Delta\mathrm{KE} + \Delta\mathrm{GPE} + \Delta\mathrm{EPE}$$

Or equivalently:

$$\Delta\mathrm{KE} + \Delta\mathrm{GPE} + \Delta\mathrm{EPE} = W_{\mathrm{external}}$$

### 4.3 Worked example: inclined plane with friction

**Problem.** A particle of mass $5\;\mathrm{kg}$ is projected up a rough inclined plane at
$30^\circ$ to the horizontal with speed $8\;\mathrm{m\,s^{-1}}$. The coefficient of friction is
$0.3$. Find how far up the plane the particle travels before coming to rest.

$$R = 5g\cos 30^\circ$$

$$F = \mu R = 0.3 \times 5g\cos 30^\circ = 1.5g\cos 30^\circ \approx 12.74\;\mathrm{N}$$

Work-energy: loss of KE $=$ work done against gravity $+$ work done against friction.

$$\frac{1}{2}(5)(64) = 5g \times d\sin 30^\circ + 12.74d$$

$$160 = 24.5d + 12.74d = 37.24d$$

$$d = \frac{160}{37.24} \approx 4.30\;\mathrm{m}$$

<hr />

## 5. Conservation of Energy

### 5.1 Principle of conservation of energy

**Principle.** Energy cannot be created or destroyed, only transformed from one form to another.

For a mechanical system with no friction or other dissipative forces:

$$\mathrm{KE} + \mathrm{GPE} + \mathrm{EPE} = \mathrm{constant}$$

### 5.2 Worked example: pendulum

**Problem.** A simple pendulum has a bob of mass $0.5\;\mathrm{kg}$ on a string of length
$1.5\;\mathrm{m}$. It is released from rest when the string makes an angle of $40^\circ$ with the
vertical. Find the Speed of the bob at the lowest point, neglecting air resistance.

Height gain:
$h = 1.5 - 1.5\cos 40^\circ = 1.5(1 - \cos 40^\circ) \approx 1.5(1 - 0.766) = 0.351\;\mathrm{m}$.

Conservation of energy: $\mathrm{GPE}_{\mathrm{top}} = \mathrm{KE}_{\mathrm{bottom}}$.

$$mgh = \frac{1}{2}mv^2$$

$$v = \sqrt{2gh} = \sqrt◆LB◆2 \times 9.8 \times 0.351◆RB◆ = \sqrt{6.88} \approx 2.62\;\mathrm{m\,s^{-1}}$$

### 5.3 Worked example: roller coaster

**Problem.** A roller coaster car of mass $500\;\mathrm{kg}$ starts from rest at point $A$,
$30\;\mathrm{m}$ Above the ground. It descends to point $B$ at ground level, then rises to point $C$
at $20\;\mathrm{m}$ Above ground. The average frictional force is $200\;\mathrm{N}$ and the total
track length from $A$ To $C$ is $300\;\mathrm{m}$. Find the speed at $C$.

$$\mathrm{GPE}_A + \mathrm{KE}_A = \mathrm{GPE}_C + \mathrm{KE}_C + W_{\mathrm{friction}}$$

$$500g(30) + 0 = 500g(20) + \frac{1}{2}(500)v^2 + 200 \times 300$$

$$147000 = 98000 + 250v^2 + 60000$$

$$250v^2 = 147000 - 158000 = -11000$$

Since $250v^2$ cannot be negative, the car **cannot** reach point $C$. It comes to rest before
Reaching $C$.

Let us find how far along the track it travels before stopping (let this be $d$ metres from $A$ At
height $h$):

$$500g(30) = 500gh + 200d$$

Without more information about the track profile, we cannot determine the exact stopping point. This
illustrates the importance of knowing the track geometry.

:::warning Common Pitfall The work-energy principle gives the change in kinetic energy, not the
velocity directly. Remember To take the square root to find speed, and always check that the result
is physically meaningful (i.e., the quantity under the square root must be non-negative).
:::

<hr />

## 6. Power

### 6.1 Definition

**Power** is the rate of doing work:

$$P = \frac{dW}{dt}$$

For a constant force $F$ moving a body at velocity $v$:

$$\boxed{P = Fv}$$

The SI unit of power is the watt ($\mathrm{W} = \mathrm{J\,s^{-1}}$).

### 6.2 Derivation of $P = Fv$

$$P = \frac{dW}{dt} = \frac{d}{dt}(\mathbf{F} \cdot \mathbf{s}) = \mathbf{F} \cdot \frac◆LB◆d\mathbf{s}◆RB◆◆LB◆dt◆RB◆ = \mathbf{F} \cdot \mathbf{v}$$

For motion in one dimension: $P = Fv$. $\blacksquare$

### 6.3 Worked example: car at maximum speed

**Problem.** A car of mass $1000\;\mathrm{kg}$ has an engine that produces a constant power of
$40\;\mathrm{kW}$. The resistance to motion is $800\;\mathrm{N}$. Find the maximum speed of the car
On a level road and the acceleration when the speed is $15\;\mathrm{m\,s^{-1}}$.

**Maximum speed:** At maximum speed, acceleration $= 0$So driving force $=$ resistance.

$$P = Fv_{\max} = Rv_{\max}$$

$$40000 = 800v_{\max} \implies v_{\max} = 50\;\mathrm{m\,s^{-1}}$$

**At $v = 15\;\mathrm{m\,s^{-1}}$:**

Driving force: $F = \dfrac{P}{v} = \dfrac{40000}{15} \approx 2666.7\;\mathrm{N}$.

$$F - R = ma$$

$$2666.7 - 800 = 1000a \implies a = 1.867\;\mathrm{m\,s^{-2}}$$

### 6.4 Worked example: car on an incline

**Problem.** A car of mass $800\;\mathrm{kg}$ travels up a hill inclined at $\sin^{-1}(0.05)$ to The
horizontal. The engine works at a constant $30\;\mathrm{kW}$ and the resistance is
$300\;\mathrm{N}$. Find the maximum speed.

At maximum speed: driving force
$= 300 + 800g\sin\alpha = 300 + 800(9.8)(0.05) = 300 + 392 = 692\;\mathrm{N}$.

$$v_{\max} = \frac{P}{F} = \frac{30000}{692} \approx 43.4\;\mathrm{m\,s^{-1}}$$

<hr />

## 7. Elastic Potential Energy

### 7.1 Hooke's Law

For an elastic spring (or string) that obeys **Hooke's Law**, the tension (or thrust) is
Proportional to the extension:

$$T = kx$$

Where $k$ is the **stiffness** (or spring constant) in $\mathrm{N\,m^{-1}}$ and $x$ is the extension
In metres.

Alternatively, $T = \dfrac◆LB◆\lambda x◆RB◆◆LB◆l◆RB◆$ where $\lambda$ is the **modulus of
elasticity** and $l$ Is the natural length.

### 7.2 Elastic potential energy

The **elastic potential energy** (EPE) stored in a spring extended by $x$ from its natural length
is:

$$\boxed{\mathrm{EPE} = \frac{1}{2}kx^2 = \frac◆LB◆\lambda x^2◆RB◆◆LB◆2l◆RB◆}$$

**Derivation.** The work done in extending the spring from $0$ to $x$:

$$W = \int_0^x T\,dx = \int_0^x kx\,dx = \left[\frac{1}{2}kx^2\right]_0^x = \frac{1}{2}kx^2$$

This work is stored as elastic potential energy. $\blacksquare$

### 7.3 Worked example: elastic string

**Problem.** A light elastic string of natural length $1.2\;\mathrm{m}$ and modulus of elasticity
$60\;\mathrm{N}$ has one end fixed and a particle of mass $2\;\mathrm{kg}$ attached to the other.
The particle is released from rest at the point where the string is just taut. Find the maximum
Extension and the maximum speed.

Let $x$ be the extension below the natural length position.

At maximum extension, speed $= 0$. By conservation of energy:

$$\mathrm{GPE\ lost} = \mathrm{EPE\ gained}$$

$$mgx = \frac◆LB◆\lambda x^2◆RB◆◆LB◆2l◆RB◆$$

$$2gx = \frac{60x^2}{2(1.2)} = 25x^2$$

$$x(25x - 2g) = 0 \implies x = \frac{2g}{25} = \frac{19.6}{25} = 0.784\;\mathrm{m}$$

**Maximum speed** occurs when acceleration $= 0$ (i.e., $mg = T$):

$$2g = \frac{60x}{1.2} = 50x \implies x = \frac{2g}{50} = 0.392\;\mathrm{m}$$

Energy conservation from start to this point:

$$mgx = \frac{1}{2}mv^2 + \frac◆LB◆\lambda x^2◆RB◆◆LB◆2l◆RB◆$$

$$2(9.8)(0.392) = v^2 + \frac{60(0.392)^2}{2(1.2)}$$

$$7.683 = v^2 + \frac◆LB◆60 \times 0.1537◆RB◆◆LB◆2.4◆RB◆ = v^2 + 3.842$$

$$v^2 = 3.841 \implies v \approx 1.96\;\mathrm{m\,s^{-1}}$$

### 7.4 Worked example: two elastic strings

**Problem.** A particle of mass $3\;\mathrm{kg}$ is attached to two elastic strings. One string has
Natural length $0.8\;\mathrm{m}$ and modulus $40\;\mathrm{N}$And is fixed at a point $A$. The other
Has natural length $1.0\;\mathrm{m}$ and modulus $50\;\mathrm{N}$And is fixed at a point $B$. The
Distance $AB$ is $3\;\mathrm{m}$. The particle hangs in equilibrium. Find the distance of the
particle From $A$.

Let the particle be at distance $d$ from $A$ (and $3 - d$ from $B$).

Extension of string from $A$: $d - 0.8$ (if $d \gt 0.8$). Extension of string from $B$:
$(3 - d) - 1.0 = 2 - d$ (if $d \lt 2$).

For equilibrium, both strings must be stretched, so $0.8 \lt d \lt 2$.

Resolving vertically (the particle hangs below the line $AB$):

$$T_A + T_B = 3g$$

$$\frac{40(d - 0.8)}{0.8} + \frac{50(2 - d)}{1.0} = 29.4$$

$$50(d - 0.8) + 50(2 - d) = 29.4$$

$$50d - 40 + 100 - 50d = 29.4$$

$$60 = 29.4$$

This is a contradiction, which means the particle does not hang directly below the line $AB$ in a
Simple 1D configuration, or one of the strings is slack. If string $A$ is slack, then $d \leq 0.8$:

$$T_B = 3g \implies \frac{50(2 - d)}{1.0} = 29.4 \implies 2 - d = 0.588 \implies d = 1.412$$

But $d = 1.412 \gt 0.8$Contradicting $d \leq 0.8$. If string $B$ is slack ($d \geq 2$):

$$T_A = 3g \implies 50(d - 0.8) = 29.4 \implies d = 1.388\;\mathrm{m}$$

But $1.388 \lt 2$Contradiction. This problem needs a 2D treatment with the particle hanging below
The line, with both strings at angles.

:::warning Warning Elastic potential energy problems often require careful consideration of whether
strings are taut or Slack at different points in the motion. Always check the assumptions about
extensions at each stage.
:::

<hr />

## 8. Practice Problems

### Problem 1

A crate of mass $50\;\mathrm{kg}$ is pushed $12\;\mathrm{m}$ up a rough ramp inclined at $15^\circ$
To the horizontal by a force of $300\;\mathrm{N}$ acting parallel to the ramp. The coefficient of
Friction is $0.25$. Find the speed of the crate at the top if it starts from rest.

<details>
<summary>Solution</summary>

Work done by the pushing force: $300 \times 12 = 3600\;\mathrm{J}$.

Work done against gravity: $50g \times 12\sin 15^\circ = 50(9.8)(12)(0.2588) = 1521.7\;\mathrm{J}$.

Work done against friction:
$0.25 \times 50g\cos 15^\circ \times 12 = 0.25 \times 50(9.8)(0.9659) \times 12 = 1419.0\;\mathrm{J}$.

Net work $= 3600 - 1521.7 - 1419.0 = 659.3\;\mathrm{J}$.

$\frac{1}{2}(50)v^2 = 659.3 \implies v = \sqrt{26.37} \approx 5.14\;\mathrm{m\,s^{-1}}$.

</details>

### Problem 2

A light elastic spring of natural length $0.5\;\mathrm{m}$ and stiffness $200\;\mathrm{N\,m^{-1}}$
Is compressed by $0.1\;\mathrm{m}$ and used to launch a particle of mass $0.4\;\mathrm{kg}$
Vertically upward from ground level. Find the maximum height reached by the particle.

<details>
<summary>Solution</summary>

EPE released: $\frac{1}{2}(200)(0.1)^2 = 1\;\mathrm{J}$.

At maximum height, all energy is GPE: $mgh = 1$.

$h = \frac◆LB◆1◆RB◆◆LB◆0.4 \times 9.8◆RB◆ = \frac{1}{3.92} \approx 0.255\;\mathrm{m}$.

Note: this neglects the spring's own mass and any energy lost during the launch transition.

</details>

### Problem 3

A car of mass $900\;\mathrm{kg}$ travels at constant speed $20\;\mathrm{m\,s^{-1}}$ up a hill
Inclined at $\sin^{-1}(0.08)$ to the horizontal. The resistance is $250\;\mathrm{N}$. Find the power
Developed by the engine.

<details>
<summary>Solution</summary>

Total force to overcome: $250 + 900g(0.08) = 250 + 705.6 = 955.6\;\mathrm{N}$.

$P = Fv = 955.6 \times 20 = 19112\;\mathrm{W} \approx 19.1\;\mathrm{kW}$.

</details>

### Problem 4

A particle of mass $4\;\mathrm{kg}$ is attached to one end of a light elastic string of natural
Length $1.5\;\mathrm{m}$ and modulus $80\;\mathrm{N}$. The other end is fixed. The particle is held
At a point $2.5\;\mathrm{m}$ below the fixed point and released from rest. Find: (a) the speed when
The string first becomes slack; (b) the maximum height above the release point.

<details>
<summary>Solution</summary>

(a) At the release point, extension $= 1.0\;\mathrm{m}$So EPE
$= \dfrac{80(1.0)^2}{2(1.5)} = 26.67\;\mathrm{J}$. GPE (taking release point as reference) $= 0$. KE
$= 0$.

When the string becomes slack, the particle is at the natural length position, i.e.
$1.0\;\mathrm{m}$ Above the release point.

GPE gained $= 4g(1.0) = 39.2\;\mathrm{J}$.

Energy conservation: $26.67 = \frac{1}{2}(4)v^2 + 39.2$.

$\frac{1}{2}(4)v^2 = 26.67 - 39.2 = -12.53$.

Since this is negative, the string **never becomes slack** -- the particle oscillates without the
String going slack. Let us verify: for the string to go slack, EPE $\gt$ GPE gain at natural length.

$26.67 \lt 39.2$So indeed the string remains taut.

(b) At the lowest point (maximum extension), $v = 0$. The particle oscillates between two points
Where all energy is EPE $+$ GPE. At the lowest point, all initial energy $+$ GPE lost $=$ EPE.

$26.67 + 4gx = \frac{80x^2}{3}$ where $x$ is the additional extension beyond $1.0\;\mathrm{m}$.
Total extension $= 1.0 + x$.

$26.67 + 39.2x = \frac{80(1 + x)^2}{3} = \frac{80}{3}(1 + 2x + x^2)$

$80 + 117.6x = 80 + 160x + 26.67x^2$

$26.67x^2 + 42.4x = 0 \implies x(26.67x + 42.4) = 0$

$x = 0$ (the initial position) or $x = -1.59$ (not physically meaningful for extension).

This confirms the particle returns to its starting point. The motion is simple harmonic about the
Equilibrium position.

</details>

## Common Pitfalls

1. Forgetting to include units in final answers, especially when working with derived units like
   $\text{N}\,\text{kg}^{-1}\,\text{m}^2$.

2. Incorrectly applying $\vec{F} = m\vec{a}$ when forces are not collinear — resolve into components
   first.

3. Confusing displacement with distance, or velocity with speed, particularly in graphs and
   calculations.

4. Neglecting air resistance or assuming ideal conditions when the question specifies a real-world
   scenario.

## Worked Examples

### Example 1: Conservation of Energy with a Pendulum

**Problem.** A pendulum bob of mass $0.8\ \mathrm{kg}$ is released from rest when the string (length
$2\ \mathrm{m}$) makes an angle of $50^\circ$ with the vertical. Find the speed at the lowest point.

**Solution.** Height above lowest point:
$h = 2 - 2\cos 50^\circ = 2(1 - \cos 50^\circ) \approx 2(1 - 0.6428) = 0.714\ \mathrm{m}$.

Conservation of energy: $mgh = \frac{1}{2}mv^2$.

$$v = \sqrt{2gh} = \sqrt{2 \times 9.8 \times 0.714} = \sqrt{13.99} \approx 3.74\ \mathrm{m\,s^{-1}}$$

$\blacksquare$

### Example 2: Power on an Incline

**Problem.** A car of mass $1200\ \mathrm{kg}$ climbs a hill inclined at $\sin^{-1}(0.1)$ at a
constant speed of $25\ \mathrm{m\,s^{-1}}$. Resistance is $400\ \mathrm{N}$. Find the power
developed by the engine.

**Solution.** At constant speed, driving force $=$ resistance $+$ component of weight along slope.

$$F = 400 + 1200g \times 0.1 = 400 + 1176 = 1576\ \mathrm{N}$$

$$P = Fv = 1576 \times 25 = 39400\ \mathrm{W} \approx 39.4\ \mathrm{kW}$$

$\blacksquare$

## Summary

- Work done: $W = Fs\cos\theta$; kinetic energy: $\mathrm{KE} = \frac{1}{2}mv^2$; gravitational PE:
  $\mathrm{GPE} = mgh$.
- Work-energy theorem: net work $=$ change in KE.
- Conservation of energy: $\mathrm{KE} + \mathrm{GPE} + \mathrm{EPE} = \mathrm{constant}$ (no
  friction).
- Power: $P = Fv$; at maximum speed, driving force equals total resistance.
- Elastic PE: $\mathrm{EPE} = \frac{1}{2}kx^2 = \frac{\lambda x^2}{2l}$ for springs and elastic
  strings.

