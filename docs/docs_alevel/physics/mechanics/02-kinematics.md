---
title: Kinematics
description:
description: >-
  A-Level Physics notes on Kinematics: 1. Fundamental Definitions; 2. Derivation of the SUVAT Equations; Equation 1: $v = u + at$.
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: kinematics
---

## Kinematics

:::info Board Coverage AQA Paper 1 | Edexcel CP1, CP2 | OCR (A) Paper 1 | CIE P2 :::

## 1. Fundamental Definitions

Kinematics is the mathematical description of motion, without reference to the forces that cause it.
We begin with three rigorous definitions.

**Definition.** The **displacement** $s$ of a particle is its position vector relative to a chosen
origin. Unlike distance, displacement is a vector quantity.

**Definition.** The **velocity** $v$ of a particle is the rate of change of its displacement with
respect to time:

$$v = \frac{ds}{dt} = \lim_{\Delta t \to 0}\frac{\Delta s}{\Delta t}$$

Velocity is a vector. Its magnitude is the speed.

**Definition.** The **acceleration** $a$ of a particle is the rate of change of its velocity with
respect to time:

$$a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$$

Acceleration is also a vector. The SI unit is m s$^{-2}$.

## 2. Derivation of the SUVAT Equations

For **uniform acceleration** (constant $a$), we derive five equations relating the kinematic
variables $s$, $u$, $v$, $a$, and $t$.

### Equation 1: $v = u + at$

Starting from the definition of acceleration:

$$a = \frac{dv}{dt}$$

Since $a$ is constant, we integrate with respect to time:

$$\int_{u}^{v} dv = \int_{0}^{t} a \, dt' \implies v - u = at \implies \boxed{v = u + at}$$

### Equation 2: $s = \frac{1}{2}(u + v)t$

From the definition of velocity:

$$v = \frac{ds}{dt}$$

For constant acceleration, the velocity varies linearly from $u$ to $v$. The average velocity over
the interval is $\bar{v} = \frac{u + v}{2}$. Since displacement equals average velocity multiplied
by time:

$$\boxed{s = \frac{1}{2}(u + v)t}$$

**Rigorous derivation.** Integrating $ds = v \, dt$ and substituting $v = u + at$:

$$s = \int_0^t (u + at')\,dt' = ut + \frac{1}{2}at^2$$

From Equation 1, $v = u + at$, so $at = v - u$, giving:

$$s = ut + \frac{1}{2}(v-u)t = \frac{1}{2}(u + v)t \quad \square$$

### Equation 3: $s = ut + \frac{1}{2}at^2$

This was obtained above during the rigorous derivation of Equation 2:

$$\boxed{s = ut + \frac{1}{2}at^2}$$

### Equation 4: $v^2 = u^2 + 2as$

We eliminate $t$ between Equations 1 and 3. From Equation 1: $t = \frac{v - u}{a}$. Substituting
into Equation 3:

$$
\begin{aligned}
s &= u\left(\frac{v - u}{a}\right) + \frac{1}{2}a\left(\frac{v - u}{a}\right)^2 \\[4pt]
s &= \frac{u(v - u)}{a} + \frac{(v - u)^2}{2a} \\[4pt]
2as &= 2u(v - u) + (v - u)^2 \\[4pt]
2as &= 2uv - 2u^2 + v^2 - 2uv + u^2 \\[4pt]
2as &= v^2 - u^2
\end{aligned}
$$

$$\boxed{v^2 = u^2 + 2as}$$

### Equation 5: $s = vt - \frac{1}{2}at^2$

Substitute $u = v - at$ (from Equation 1) into Equation 3:

$$s = (v - at)t + \frac{1}{2}at^2 = vt - at^2 + \frac{1}{2}at^2$$

$$\boxed{s = vt - \frac{1}{2}at^2}$$

:::tip Exam Technique To decide which SUVAT equation to use, identify which variable is **not**
given and **not** asked for, then use the equation that doesn't contain it.

| Missing variable | Use                        |
| ---------------- | -------------------------- |
| $s$              | $v = u + at$               |
| $v$              | $s = ut + \frac{1}{2}at^2$ |
| $u$              | $s = vt - \frac{1}{2}at^2$ |
| $a$              | $s = \frac{1}{2}(u + v)t$  |
| $t$              | $v^2 = u^2 + 2as$          |

:::

## 3. Displacement-Time and Velocity-Time Graphs

- The **gradient** of a displacement-time graph gives the velocity.
- The **gradient** of a velocity-time graph gives the acceleration.
- The **area under** a velocity-time graph gives the displacement.

<PhetSimulation simulationId="the-moving-man" title="The Moving Man" />

Explore the simulation above to develop intuition for this topic.

For uniform acceleration, the $v$-$t$ graph is a straight line, and the area is a trapezium.

For **non-constant acceleration**, the $v$-$t$ graph is curved, but the same three principles apply
at every instant:

- The **gradient** of the $s$-$t$ curve at any point gives the instantaneous velocity at that time.
- The **gradient** of the $v$-$t$ curve at any point gives the instantaneous acceleration at that
  time.
- The **area under** the $v$-$t$ curve between two times gives the displacement over that interval.

When the $v$-$t$ graph is curved, the area cannot be found using the trapezium rule for a single
straight line. Two approaches are available:

1. **Counting squares** -- estimate the area by counting grid squares on the graph paper, treating
   partial squares by eye.
2. **Integration** -- if $v(t)$ is given algebraically, compute $\int_{t_1}^{t_2} v(t)\,dt$ exactly.

:::tip Exam Technique When asked to find the distance travelled from a curved $v$-$t$ graph, check
whether the curve crosses the time axis. If it does, the velocity changes sign and you must split
the calculation: the **area above** the axis is positive displacement, the **area below** is
negative displacement. The total distance is the sum of absolute areas; the net displacement is
their algebraic sum.
:::

:::warning Common Pitfall Students often draw a tangent to a curve incorrectly by placing the ruler
away from the point of interest. Always place the ruler so it just touches the curve **at the
point** where you need the gradient, then extend it to read two clear coordinates for
$\Delta y / \Delta x$.
:::

<details>
<summary>Example: Finding displacement from a curved v-t graph</summary>

A particle has velocity $v = 6t - t^2$ m s$^{-1}$ for $0 \leq t \leq 6$ s. The $v$-$t$ graph is a
parabola opening downward, with $v = 0$ at $t = 0$ and $t = 6$, and maximum $v = 9$ m s$^{-1}$ at
$t = 3$. The displacement over the full 6 seconds is
$\int_0^6 (6t - t^2)\,dt = [3t^2 - t^3/3]_0^6 = 108 - 72 = 36$ m.

</details>

## 4. Free Fall

A body in **free fall** moves under the influence of gravity alone (neglecting air resistance). Near
the Earth's surface, all objects experience the same gravitational acceleration:

$$g \approx 9.81 \mathrm{ m s}^{-2}$$

This was established by Galileo's experiments and is a consequence of the equivalence principle
(mass cancels in $F = ma = mg$).

:::info Board Note Some boards use $g = 9.8$ m s$^{-2}$ or $g = 10$ m s$^{-2}$ in numerical
problems. Always use the value specified in the question.
:::

## 5. Projectile Motion

### Assumptions

We assume:

1. The only force acting is gravity (no air resistance).
2. $g$ is constant (valid for trajectories small compared to Earth's radius).
3. The horizontal and vertical components of motion are **independent**.

### Independence of Components

This is the central insight. Since gravity acts vertically, it produces **no horizontal
acceleration**. Therefore:

- **Horizontal**: $a_x = 0 \implies v_x = \mathrm{const} = v_0\cos\theta$
- **Vertical**: $a_y = -g \implies$ the motion is uniformly accelerated

### Deriving the Parabolic Trajectory

A projectile is launched from the origin with speed $v_0$ at angle $\theta$ above the horizontal.

**Horizontal motion** (constant velocity):

$$x = v_0\cos\theta \cdot t \implies t = \frac{x}{v_0\cos\theta}$$

**Vertical motion** (uniform acceleration):

$$y = v_0\sin\theta \cdot t - \frac{1}{2}gt^2$$

Substituting $t$ from the horizontal equation:

$$
\begin{aligned}
y &= v_0\sin\theta \left(\frac{x}{v_0\cos\theta}\right) - \frac{1}{2}g\left(\frac{x}{v_0\cos\theta}\right)^2 \\[4pt]
y &= x\tan\theta - \frac{gx^2}{2v_0^2\cos^2\theta}
\end{aligned}
$$

This is the equation of a **parabola** — a direct consequence of constant horizontal velocity
combined with constant vertical acceleration.

### Maximum Height

At maximum height, the vertical velocity is zero: $v_y = v_0\sin\theta - gt = 0$, giving
$t_{\mathrm{peak}} = \frac{v_0\sin\theta}{g}$.

$$H = v_0\sin\theta \cdot \frac{v_0\sin\theta}{g} - \frac{1}{2}g\left(\frac{v_0\sin\theta}{g}\right)^2 = \frac{v_0^2\sin^2\theta}{2g}$$

$$\boxed{H = \frac{v_0^2\sin^2\theta}{2g}}$$

### Time of Flight

The projectile returns to $y = 0$ when:

$$0 = v_0\sin\theta \cdot t - \frac{1}{2}gt^2 \implies t(v_0\sin\theta - \frac{1}{2}gt) = 0$$

The non-trivial solution gives:

$$\boxed{T = \frac{2v_0\sin\theta}{g}}$$

### Maximum Range

The range is $R = v_0\cos\theta \cdot T$:

$$R = v_0\cos\theta \cdot \frac{2v_0\sin\theta}{g} = \frac{v_0^2 \cdot 2\sin\theta\cos\theta}{g} = \frac{v_0^2\sin 2\theta}{g}$$

$$\boxed{R = \frac{v_0^2\sin 2\theta}{g}}$$

**Maximum range** occurs when $\sin 2\theta = 1$, i.e., $\theta = 45^\circ$:

$$R_{\max} = \frac{v_0^2}{g}$$

### Intuition: Why Parabolas?

A parabola arises because the vertical position depends quadratically on time ($y \propto t^2$),
while the horizontal position depends linearly on time ($x \propto t$). Eliminating $t$ between a
linear and quadratic relation always produces a parabola. The shape is not special to gravity — it
is the geometry of combining uniform motion in one direction with uniformly accelerated motion in
the perpendicular direction.

### Effect of Air Resistance on Projectiles

In reality, air resistance (drag) opposes the velocity of a moving object. The magnitude of the drag
force depends on the object's speed and shape, and typically increases with speed.

**Effect on projectile trajectory.** When drag is included:

- The **horizontal velocity** is no longer constant -- it decreases throughout the flight because
  drag has a horizontal component opposing the motion.
- On the way **up**, both gravity and the vertical component of drag act downward, so the vertical
  deceleration is **greater than** $g$.
- On the way **down**, gravity acts downward but drag acts upward (opposing the downward velocity),
  so the vertical acceleration is **less than** $g$.
- The trajectory is **no longer parabolic**. The descent is steeper than the ascent, the range is
  shorter, and the maximum height is lower compared to the idealised case.

**Terminal velocity.** For an object falling vertically under gravity with air resistance, the drag
force increases with speed. Eventually, the drag force equals the weight of the object:

$$F_{\mathrm{drag}} = mg$$

At this point the net force is zero, the acceleration is zero, and the object falls at a constant
speed called the **terminal velocity** $v_T$:

$$\boxed{v_T \mathrm{ is reached when } F_{\mathrm{drag}} = mg \implies a = 0}$$

The $v$-$t$ graph for a falling object reaching terminal velocity shows the velocity increasing with
a decreasing gradient (decreasing acceleration) until it asymptotically approaches $v_T$.

:::info Board Coverage AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 1 | CIE P2 :::

:::warning Common Pitfall Terminal velocity does **not** mean the object has stopped accelerating
because it has run out of force. The forces are balanced: weight down equals drag up. The
acceleration is zero because the **net** force is zero, not because no forces act.
:::

## 6. Non-Uniform Acceleration

When acceleration is not constant, the SUVAT equations do not apply. Instead, we use calculus to
relate displacement, velocity, and acceleration.

:::info Board Coverage AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 1 | CIE P1, P2 :::

### The Differential Relations

From the definitions:

$$\boxed{v = \frac{ds}{dt}}$$

$$\boxed{a = \frac{dv}{dt} = \frac{d^2s}{dt^2}}$$

A third relation follows from the chain rule. Since $a = dv/dt$ and $v = ds/dt$:

$$a = \frac{dv}{dt} = \frac{dv}{ds} \cdot \frac{ds}{dt} = v\,\frac{dv}{ds}$$

$$\boxed{a = v\,\frac{dv}{ds}}$$

This form is useful when acceleration is given as a function of displacement $s$ rather than time
$t$.

### Selecting the Correct Form

| Given      | Use                                                              |
| ---------- | ---------------------------------------------------------------- |
| $a = f(t)$ | $a = dv/dt$, integrate with respect to $t$                       |
| $a = f(v)$ | Rewrite as $dt/dv = 1/f(v)$ and integrate, or use $a = v\,dv/ds$ |
| $a = f(s)$ | $a = v\,dv/ds$, integrate with respect to $s$                    |

:::tip Exam Technique Identify what the acceleration is given as a function of -- time, velocity, or
displacement -- to decide which calculus method to use. If $a$ is a function of $t$, integrate
$dv/dt$ directly. If $a$ is a function of $s$, use $a = v\,dv/ds$ and integrate with respect to $s$.
If $a$ is a function of $v$, rewrite as $dt/dv = 1/f(v)$ and integrate to find $t(v)$, then invert
if possible.
:::

### Derivation of $v^2 = u^2 + 2as$ by Integration

Starting from $a = v\,dv/ds$ and assuming constant $a$:

$$\int_{u}^{v} v'\,dv' = \int_{0}^{s} a\,ds'$$

$$\left[\frac{v'^2}{2}\right]_{u}^{v} = as$$

$$\frac{v^2}{2} - \frac{u^2}{2} = as$$

$$\boxed{v^2 = u^2 + 2as} \quad \square$$

This derivation relies only on the chain-rule identity $a = v\,dv/ds$.

<details>
<summary>Example: Variable acceleration</summary>

A particle moves in a straight line with acceleration $a = 6t$ m s$^{-2}$, starting from rest at the
origin.

**(a)** Find $v$ as a function of $t$. $a = dv/dt = 6t$, so $dv = 6t\,dt$. Integrating:
$v = \int_0^t 6t'\,dt' = 3t^2 + C$. Since $v(0) = 0$: $C = 0$, giving $v = 3t^2$ m s$^{-1}$.

**(b)** Find $s$ as a function of $t$. $v = ds/dt = 3t^2$, so $ds = 3t^2\,dt$. Integrating:
$s = \int_0^t 3t'^2\,dt' = t^3$ m.

**(c)** Find the acceleration as a function of $s$. From $v = 3t^2$ and $s = t^3$: $t = s^{1/3}$, so
$v = 3s^{2/3}$. Then $a = v\,dv/ds = 3s^{2/3} \cdot 2s^{-1/3} = 6s^{1/3} = 6t$, confirming
consistency.

</details>

## 7. Relative Velocity in Two Dimensions

When two objects move in different directions, their velocities are combined using vector addition.
The **velocity of A relative to B** is:

$$\boxed{\mathbf{v}_{AB} = \mathbf{v}_A - \mathbf{v}_B}$$

This is the velocity A appears to have when observed from B's frame of reference.

:::info Board Coverage AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 2 | CIE P2 :::

### Resolving into Components

In two dimensions, resolve each velocity into perpendicular components, then subtract component by
component.

**Example.** A river flows east at $3.0$ m s$^{-1}$. A boat heads north at $5.0$ m s$^{-1}$ relative
to the water. The boat's velocity relative to the ground is:

$$\mathbf{v}_{\mathrm{ground}} = (3.0\ \mathrm{east}) + (5.0\ \mathrm{north})$$

Speed relative to ground: $v = \sqrt{3^2 + 5^2} = \sqrt{34} = 5.83$ m s$^{-1}$.

Direction: $\theta = \arctan(5/3) = 59.0^\circ$ north of east.

### Crossing a River

A classic relative-velocity problem: to cross a river of width $d$ with current speed $v_c$, a boat
with speed $v_b$ (relative to water) can:

- **Head directly across** (perpendicular to bank). The boat is carried downstream. Time to cross:
  $t = d/v_b$. Downstream displacement: $\Delta x = v_c \cdot d/v_b$.
- **Head upstream at an angle** to compensate for the current. If the boat heads at angle $\theta$
  upstream from the perpendicular, the component across the river is $v_b\cos\theta$ and the
  component against the current is $v_b\sin\theta$. For zero downstream drift:
  $v_b\sin\theta = v_c$, giving $\theta = \arcsin(v_c/v_b)$. This is only possible if $v_b > v_c$.

:::warning Common Pitfall The boat's speed $v_b$ is always relative to the water, not relative to
the ground. The ground speed is the vector sum of the boat's water-relative velocity and the current
velocity. Never add the magnitudes directly unless the velocities are in the same direction.
:::

### Relative Velocity and Closest Approach

Two objects A and B are on a collision course if their relative velocity $\mathbf{v}_{AB}$ is
directed along the line joining them. If not, the closest approach occurs when the position vector
from A to B is perpendicular to the relative velocity: $\mathbf{r}_{BA} \cdot \mathbf{v}_{BA} = 0$.

<details>
<summary>Example: Will two ships collide?</summary>

Ship A sails north at $10$ m s$^{-1}$ and is at position $(0, 0)$ m. Ship B sails east at $10$ m
s$^{-1}$ and is at position $(200, 0)$ m. Will they collide?

$\mathbf{v}_{BA} = \mathbf{v}_B - \mathbf{v}_A = (10\ \mathrm{east}) - (10\ \mathrm{north}) = (10, -10)$
m s$^{-1}$.

The position of B relative to A is $(200, 0)$. The relative velocity $(10, -10)$ is **not** parallel
to $(200, 0)$, so they will not collide. The closest approach occurs when
$\mathbf{r}_{BA} \cdot \mathbf{v}_{BA} = 0$.

</details>

## Problem Set

<details>
<summary>Problem 1</summary>
A stone is thrown vertically upward with speed $15.0$ m s$^{-1}$. Find: (a) the maximum height reached, (b) the time to reach maximum height, (c) the total time of flight, (d) the speed when it returns to the thrower's hand.

**Answer.** (a) $v^2 = u^2 + 2as$: $0 = 15^2 - 2(9.81)s$, $s = \frac{225}{19.62} = 11.5$ m.

(b) $v = u + at$: $0 = 15 - 9.81t$, $t = 1.53$ s.

(c) By symmetry (no air resistance), $T = 2t = 3.06$ s.

(d) By conservation of energy (or symmetry), the speed equals the initial speed: $15.0$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Free Fall](#4-free-fall) and
[SUVAT Equations](#2-derivation-of-the-suvat-equations)

</details>

<details>
<summary>Problem 2</summary>
A projectile is launched from ground level with speed $25.0$ m s$^{-1}$ at an angle of $35^\circ$ to the horizontal. Calculate the horizontal range and the maximum height.

**Answer.**
$R = \frac{v_0^2\sin 2\theta}{g} = \frac{625 \times \sin 70°}{9.81} = \frac{625 \times 0.9397}{9.81} = 59.9$
m.

$H = \frac{v_0^2\sin^2\theta}{2g} = \frac{625 \times \sin^2 35°}{19.62} = \frac{625 \times 0.329}{19.62} = 10.5$
m.

<b>If you get this wrong, revise:</b> [Maximum Height](#maximum-height) and
[Maximum Range](#maximum-range)

</details>

<details>
<summary>Problem 3</summary>
A ball is thrown from a cliff of height $40.0$ m with horizontal velocity $12.0$ m s$^{-1}$. Find: (a) the time to hit the ground, (b) the horizontal distance from the cliff base, (c) the vertical component of velocity at impact, (d) the magnitude of the final velocity.

**Answer.** (a) Vertical: $s = ut + \frac{1}{2}at^2$, $40 = 0 + \frac{1}{2}(9.81)t^2$,
$t = \sqrt{\frac{80}{9.81}} = 2.86$ s.

(b) $R = v_x t = 12.0 \times 2.86 = 34.3$ m.

(c) $v_y = 0 + 9.81 \times 2.86 = 28.1$ m s$^{-1}$ downward.

(d) $v = \sqrt{12^2 + 28.1^2} = \sqrt{144 + 789.6} = \sqrt{933.6} = 30.6$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Independence of Components](#independence-of-components)

</details>

<details>
<summary>Problem 4</summary>
Derive the equation $s = ut + \frac{1}{2}at^2$ from the definition of velocity as a derivative, assuming constant acceleration.

**Answer.** $v = \frac{ds}{dt}$ and $a = \frac{dv}{dt} = \mathrm{const}$. Integrating:
$\int_0^t a\,dt' = \int_u^v dv'$, giving $v = u + at$. Then $ds/dt = u + at$. Integrating:
$\int_0^s ds' = \int_0^t (u + at')\,dt' = [ut' + \frac{1}{2}at'^2]_0^t = ut + \frac{1}{2}at^2$.
$\square$

<b>If you get this wrong, revise:</b>
[Derivation of the SUVAT Equations](#2-derivation-of-the-suvat-equations)

</details>

<details>
<summary>Problem 5</summary>
Two balls are thrown simultaneously from the same height. Ball A is thrown vertically upward with speed $20$ m s$^{-1}$; Ball B is thrown vertically downward with speed $20$ m s$^{-1}$. Which ball hits the ground first, and by how much? Take the initial height as $30$ m.

**Answer.** For Ball A: upward first, then downward. Time to reach max height:
$t_1 = 20/9.81 = 2.04$ s, max height above launch: $20^2/(2 \times 9.81) = 20.4$ m, total height
above ground = $50.4$ m. Time to fall from 50.4 m: $50.4 = \frac{1}{2}(9.81)t_2^2$, $t_2 = 3.21$ s.
Total: $t_A = 2.04 + 3.21 = 5.25$ s.

For Ball B: $30 = 20t + \frac{1}{2}(9.81)t^2$. Solving: $4.905t^2 + 20t - 30 = 0$,
$t = \frac{-20 + \sqrt{400 + 588.6}}{9.81} = \frac{-20 + 31.4}{9.81} = 1.16$ s.

Ball B hits first. Difference: $5.25 - 1.16 = 4.09$ s.

<b>If you get this wrong, revise:</b> [SUVAT Equations](#2-derivation-of-the-suvat-equations)

</details>

<details>
<summary>Problem 6</summary>
A particle moves along a straight line with velocity $v = 3t^2 - 6t$ m s$^{-1}$ for $0 \leq t \leq 4$ s. Find: (a) when the particle is at rest, (b) the total distance travelled, (c) the displacement.

**Answer.** (a) $v = 0$: $3t^2 - 6t = 0 \implies t = 0$ or $t = 2$ s.

(b) $s(t) = \int v\,dt = t^3 - 3t^2 + C$. Take $s(0) = 0$, so $C = 0$.

- At $t = 2$: $s = 8 - 12 = -4$ m.
- At $t = 4$: $s = 64 - 48 = 16$ m. Total distance = $4 + 20 = 24$ m.

(c) Displacement = $16$ m.

<b>If you get this wrong, revise:</b>
[Displacement-Time and Velocity-Time Graphs](#3-displacement-time-and-velocity-time-graphs)

</details>

<details>
<summary>Problem 7</summary>
A projectile is fired with speed $v_0$ at angle $\theta$ from a height $h$ above level ground. Derive an expression for the time of flight in terms of $v_0$, $\theta$, $g$, and $h$.

**Answer.** $y = h + v_0\sin\theta \cdot t - \frac{1}{2}gt^2 = 0$ at landing. This gives
$\frac{1}{2}gt^2 - v_0\sin\theta \cdot t - h = 0$. By the quadratic formula:

$$t = \frac{v_0\sin\theta + \sqrt{v_0^2\sin^2\theta + 2gh}}{g}$$

(We take the positive root since $t > 0$.)

<b>If you get this wrong, revise:</b>
[Deriving the Parabolic Trajectory](#deriving-the-parabolic-trajectory)

</details>

<details>
<summary>Problem 8</summary>
A car accelerates uniformly from $10$ m s$^{-1}$ to $30$ m s$^{-1}$ while covering a distance of $200$ m. Find the acceleration and the time taken.

**Answer.** Using $v^2 = u^2 + 2as$: $900 = 100 + 2a(200)$, $400a = 800$, $a = 2.0$ m s$^{-2}$.

Using $v = u + at$: $30 = 10 + 2t$, $t = 10$ s.

<b>If you get this wrong, revise:</b> [SUVAT Equations](#2-derivation-of-the-suvat-equations)

</details>

<details>
<summary>Problem 9</summary>
A golfer hits a ball from the ground with speed $40$ m s$^{-1}$. At what angle should she hit the ball to land it $120$ m away? (Give both possible angles.)

**Answer.** $R = \frac{v_0^2\sin 2\theta}{g}$, so
$\sin 2\theta = \frac{Rg}{v_0^2} = \frac{120 \times 9.81}{1600} = 0.736$.

$2\theta = 47.4^\circ$ or $132.6^\circ$, giving $\theta = 23.7^\circ$ or $66.3^\circ$. Both angles
give the same range — complementary angles always do (since $\sin 2\theta = \sin(180° - 2\theta)$).

<b>If you get this wrong, revise:</b> [Maximum Range](#maximum-range)

</details>

<details>
<summary>Problem 10</summary>
On the Moon, $g = 1.62$ m s$^{-2}$. A astronaut throws a rock with speed $12$ m s$^{-1}$ at $60^\circ$ to the horizontal. Compare the maximum height and range to what they would be on Earth.

**Answer.** On the Moon:
$H = \frac{144 \times \sin^2 60°}{2 \times 1.62} = \frac{144 \times 0.75}{3.24} = 33.3$ m.
$R = \frac{144 \times \sin 120°}{1.62} = \frac{144 \times 0.866}{1.62} = 77.0$ m.

On Earth: $H = \frac{108}{19.62} = 5.51$ m. $R = \frac{124.7}{9.81} = 12.7$ m.

The Moon gives $\frac{33.3}{5.51} = 6.0$ times greater height and $\frac{77.0}{12.7} = 6.1$ times
greater range, consistent with the ratio $g_E/g_M \approx 6.1$.

<b>If you get this wrong, revise:</b> [Maximum Height](#maximum-height) and
[Maximum Range](#maximum-range)

</details>

<details>
<summary>Problem 11</summary>
A ball rolls off a table of height $1.2$ m with a horizontal speed of $3.0$ m s$^{-1}$. A second ball is dropped from the same height at the same instant. Which ball hits the ground first? Justify your answer.

**Answer.** Both balls hit the ground at the same time. The horizontal velocity of the first ball
does not affect its vertical motion. Both have $u_y = 0$, $a_y = g$, and $h = 1.2$ m, so both have
$t = \sqrt{2h/g} = 0.495$ s.

<b>If you get this wrong, revise:</b> [Independence of Components](#independence-of-components)

</details>

<details>
<summary>Problem 12</summary>
An object moves with uniform acceleration. In the first 3 seconds it travels 18 m, and in the next 2 seconds it travels 30 m. Find the initial velocity and the acceleration.

**Answer.** Using $s = ut + \frac{1}{2}at^2$:

- For $t = 3$: $18 = 3u + \frac{9}{2}a$ ... (i)
- For $t = 5$: $18 + 30 = 5u + \frac{25}{2}a$ ... (ii), i.e., $48 = 5u + \frac{25}{2}a$.

From (i): $3u = 18 - 4.5a$, $u = 6 - 1.5a$. Substituting into (ii):
$48 = 5(6 - 1.5a) + 12.5a = 30 - 7.5a + 12.5a = 30 + 5a$. $5a = 18$, $a = 3.6$ m s$^{-2}$.
$u = 6 - 1.5(3.6) = 6 - 5.4 = 0.6$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [SUVAT Equations](#2-derivation-of-the-suvat-equations)

</details>

<details>
<summary>Problem 13</summary>

A particle moves along a straight line with acceleration $a = 4 - 2t$ m s$^{-2}$. At $t = 0$, the
particle is at rest at the origin. Find: (a) the velocity as a function of $t$, (b) the displacement
as a function of $t$, (c) the time at which the particle is momentarily at rest again, (d) the
displacement at that time.

**Answer.** (a) $a = dv/dt = 4 - 2t$. Integrating: $v = 4t - t^2$ m s$^{-1}$ (using $v(0) = 0$).

(b) $ds/dt = 4t - t^2$. Integrating: $s = 2t^2 - t^3/3$ m (using $s(0) = 0$).

(c) $v = 0$: $t(4 - t) = 0 \implies t = 4$ s.

(d) $s(4) = 2(16) - 64/3 = 32 - 21.3 = 10.7$ m.

<b>If you get this wrong, revise:</b> [Non-Uniform Acceleration](#6-non-uniform-acceleration)

</details>

<details>
<summary>Problem 14</summary>

A river is $80$ m wide and flows at $2.5$ m s$^{-1}$. A boat can travel at $5.0$ m s$^{-1}$ in still
water. (a) If the boat heads directly across the river, how long does it take to cross and how far
downstream does it land? (b) At what angle upstream should the boat head to land directly opposite
the starting point?

**Answer.** (a) Time = $80/5.0 = 16$ s. Downstream displacement = $2.5 \times 16 = 40$ m.

(b) For zero downstream drift: $\sin\theta = 2.5/5.0 = 0.5$, giving $\theta = 30^\circ$ upstream
from the perpendicular.

<b>If you get this wrong, revise:</b> [Crossing a River](#crossing-a-river)

</details>

<details>
<summary>Problem 15</summary>

A particle moves with acceleration $a = -0.5v$ m s$^{-2}$, where $v$ is the speed. The initial speed
is $10$ m s$^{-1}$. Find: (a) the velocity as a function of time, (b) the time taken for the speed
to halve.

**Answer.** (a) $dv/dt = -0.5v$. Separating variables: $\frac{dv}{v} = -0.5\,dt$. Integrating:
$\ln v = -0.5t + C$. At $t = 0$, $v = 10$: $\ln 10 = C$. So $v = 10e^{-0.5t}$ m s$^{-1}$.

(b) When $v = 5$: $5 = 10e^{-0.5t}$, $e^{-0.5t} = 0.5$, $t = 1.39$ s.

<b>If you get this wrong, revise:</b> [Non-Uniform Acceleration](#6-non-uniform-acceleration)

</details>

<details>
<summary>Problem 16</summary>

A particle moves with acceleration $a = 3s$ m s$^{-2}$, where $s$ is the displacement from the
origin. At $s = 0$, the velocity is $4.0$ m s$^{-1}$. Find the velocity when $s = 2.0$ m.

**Answer.** We are given $a = f(s)$, so use $a = v\,dv/ds$:

$\int_{4}^{v} v'\,dv' = \int_{0}^{2} 3s'\,ds'$

$\frac{v^2}{2} - 8 = 6$

$v^2 = 28$, $v = 5.29$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [The Differential Relations](#the-differential-relations)

</details>

<details>
<summary>Problem 17</summary>

A ball is thrown from the top of a building of height $45$ m with speed $20$ m s$^{-1}$ at an angle
of $30^\circ$ above the horizontal. Find: (a) the time of flight, (b) the horizontal distance from
the base where the ball lands, (c) the speed at impact.

**Answer.** (a) Vertical: $y = 45 + 10t - 4.905t^2 = 0$.

$4.905t^2 - 10t - 45 = 0$, $t = \frac{10 + \sqrt{100 + 882.9}}{9.81} = 4.22$ s.

(b) $R = 20\cos 30° \times 4.22 = 17.3 \times 4.22 = 73.1$ m.

(c) $v_x = 17.3$ m s$^{-1}$, $v_y = 10 - 9.81 \times 4.22 = -31.4$ m s$^{-1}$. Speed =
$\sqrt{17.3^2 + 31.4^2} = 35.8$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Projectile Motion](#5-projectile-motion)

</details>
