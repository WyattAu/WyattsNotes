---
title: Kinematics
description:
  A-Level Mathematics notes on Kinematics: Board Coverage; 1. Fundamental
  Quantities; 1.1 Definitions; 1.2 Relationships via calculus.
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: kinematics
---

## Board Coverage

| Board      | Paper   | Notes                          |
| ---------- | ------- | ------------------------------ |
| AQA        | Paper 1 | 1D kinematics, projectiles     |
| Edexcel    | P1      | Similar                        |
| OCR (A)    | Paper 1 | Includes variable acceleration |
| CIE (9709) | P1, P4  | 1D in P1; 2D/projectiles in P4 |

:::info The formula booklet lists the SUVAT equations. You must be able to select the correct
equation and apply it to multi-stage problems.
:::

<hr />

## 1. Fundamental Quantities

### 1.1 Definitions

- **Displacement** $s$: position relative to a reference point (vector, measured in metres, m).
- **Velocity** $v$: rate of change of displacement (vector, m/s).
- **Speed**: magnitude of velocity (scalar, m/s).
- **Acceleration** $a$: rate of change of velocity (vector, m/s$^2$).

### 1.2 Relationships via calculus

$$v = \frac{ds}{dt}, \qquad a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$$

$$s = \int v\,dt, \qquad v = \int a\,dt$$

<hr />

## 2. The SUVAT Equations

### 2.1 Derivation from calculus

Assuming constant acceleration $a$:

Start from the definition of acceleration:

$$a = \frac{dv}{dt}$$

Since $a$ is constant, integrate both sides with respect to $t$:

$$\int a\,dt = \int \frac{dv}{dt}\,dt \implies at + C_1 = v$$

Applying the initial condition $v = u$ when $t = 0$: $C_1 = u$.

$$\boxed{v = u + at} \quad \mathrm{(Equation 2)}$$

Now use $v = ds/dt$:

$$\frac{ds}{dt} = u + at$$

Integrate with respect to $t$:

$$s = \int (u + at)\,dt = ut + \frac{1}{2}at^2 + C_2$$

Since $s = 0$ when $t = 0$: $C_2 = 0$.

$$\boxed{s = ut + \tfrac{1}{2}at^2} \quad \mathrm{(Equation 1)}$$

Eliminating $t$ from (1) and (2): $t = (v-u)/a$.

$$s = u\frac{v-u}{a} + \frac{1}{2}a\frac{(v-u)^2}{a^2} = \frac{uv - u^2}{a} + \frac{v^2 - 2uv + u^2}{2a}$$

$$s = \frac{2uv - 2u^2 + v^2 - 2uv + u^2}{2a} = \frac{v^2 - u^2}{2a}$$

$$\boxed{v^2 = u^2 + 2as} \quad \mathrm{(Equation 3)}$$

From (1): $s = ut + \tfrac{1}{2}at^2 = \tfrac{1}{2}(2u + at)t = \tfrac{1}{2}(u + u + at)t$.

Using $v = u + at$: $\boxed{s = \tfrac{1}{2}(u+v)t} \quad \mathrm{(Equation 4)}$

Eliminating $a$ from (1) and (2): $a = (v-u)/t$.

$s = ut + \tfrac{1}{2}\frac{v-u}{t}t^2 = ut + \tfrac{1}{2}(v-u)t = \tfrac{1}{2}(u+v)t$. (Same as
Equation 4.)

$$s = \tfrac{1}{2}(u+v)t \implies v = \frac{2s}{t} - u \quad \mathrm{(useful when } a \mathrm{ is unknown)}$$

:::tip The key insight is that **all five SUVAT equations follow from two integrations** of the
constant acceleration $a = dv/dt$, using the initial conditions $v(0) = u$ and $s(0) = 0$.
Memorising the derivation means you can recover any formula you forget.
:::

### 2.2 Summary

| Equation                   | Variables    | Missing |
| -------------------------- | ------------ | ------- |
| $v = u + at$               | $v, u, a, t$ | $s$     |
| $s = ut + \frac{1}{2}at^2$ | $s, u, a, t$ | $v$     |
| $v^2 = u^2 + 2as$          | $v, u, a, s$ | $t$     |
| $s = \frac{1}{2}(u+v)t$    | $s, u, v, t$ | $a$     |

:::tip Always write down what you know and what you need. Choose the equation that contains all
known quantities and the unknown. Draw a diagram with positive direction clearly marked.
:::

<hr />

## 3. Motion Graphs

### 3.1 Displacement-time graphs

- Gradient = velocity
- Horizontal line = stationary
- Curved line = acceleration
- Area under the graph has no direct meaning

### 3.2 Velocity-time graphs

- Gradient = acceleration
- Area under the graph = displacement
- Horizontal line = constant velocity
- Straight line through origin = constant acceleration from rest

### 3.3 Acceleration-time graphs

- Area under the graph = change in velocity

### 3.4 Interpreting displacement-time graphs in detail

The gradient of an $s$-$t$ graph gives the velocity at that instant. The **sign** of the gradient
tells you the direction of motion, and the **steepness** tells you the speed.

- **Positive, increasing gradient**: particle moves in the positive direction with increasing speed
  (positive acceleration).
- **Positive, decreasing gradient**: particle moves in the positive direction but is decelerating.
- **Zero gradient (horizontal)**: particle is instantaneously at rest ($v = 0$). This may be a
  turning point.
- **Negative gradient**: particle moves in the negative direction.
- **Concave-up curve** ($\frac{d^2s}{dt^2} \gt{} 0$): acceleration is positive.
- **Concave-down curve** ($\frac{d^2s}{dt^2} \lt{} 0$): acceleration is negative.

A common mistake is assuming a particle is at rest only when $s = 0$. In fact, the particle is at
rest whenever the **gradient** is zero, regardless of the displacement value.

### 3.5 Interpreting velocity-time graphs in detail

The area between the $v$-$t$ curve and the $t$-axis gives the **displacement** (with sign). To find
the total **distance** travelled, you must take the absolute value of velocity in each region before
integrating, or equivalently add the magnitudes of the areas above and below the axis.

- **Area above the $t$-axis**: displacement in the positive direction.
- **Area below the $t$-axis**: displacement in the negative direction.
- **Total distance** = (area above) + |area below|.

The **gradient** of the tangent to a $v$-$t$ curve gives the instantaneous acceleration. For a
straight-line $v$-$t$ graph, the acceleration is constant and equals the gradient of that line.

:::warning Displacement $\neq$ distance. If a particle moves $10\,\mathrm{m}$ forwards and then
$10\,\mathrm{m}$ backwards, its displacement is $0$ but its total distance is $20\,\mathrm{m}$. On a
$v$-$t$ graph, the signed areas cancel (displacement), but the unsigned areas add (distance).
:::

### 3.6 Worked example: graphs

A particle moves so that its displacement $s$ metres from a fixed point $O$ at time $t$ seconds is
given by $s = t^3 - 9t^2 + 24t$.

The velocity is $v = ds/dt = 3t^2 - 18t + 24 = 3(t^2 - 6t + 8) = 3(t-2)(t-4)$.

- $v = 0$ at $t = 2$ and $t = 4$: the particle is instantaneously at rest at these times.
- For $0 \lt{} t \lt{} 2$: $v \gt{} 0$ (moving in positive direction).
- For $2 \lt{} t \lt{} 4$: $v \lt{} 0$ (moving in negative direction — it has reversed).
- For $t \gt{} 4$: $v \gt{} 0$ (moving in positive direction again).

The acceleration is $a = dv/dt = 6t - 18 = 6(t - 3)$.

- At $t = 3$: $a = 0$, the particle changes from decelerating to accelerating (in the positive
  sense).

Displacement at key times: $s(0) = 0$, $s(2) = 8 - 36 + 48 = 20$, $s(4) = 64 - 144 + 96 = 16$,
$s(6) = 216 - 324 + 144 = 36$.

<hr />

## 4. Projectiles

### 4.1 Assumptions

- Motion is in a vertical plane.
- The only force is gravity (no air resistance).
- Horizontal and vertical motions are independent.

### 4.2 Horizontal motion

$$x = v\cos\theta \cdot t, \quad a_x = 0$$

Since there is no horizontal acceleration, the horizontal velocity $v_x = v\cos\theta$ remains
constant throughout the flight.

### 4.3 Vertical motion

$$y = v\sin\theta \cdot t - \frac{1}{2}gt^2, \quad v_y = v\sin\theta - gt$$

### 4.4 Derivation of the trajectory equation

From horizontal: $t = \dfrac{x}{v\cos\theta}$.

Substitute into vertical:

$$y = v\sin\theta \cdot \frac{x}{v\cos\theta} - \frac{1}{2}g\left(\frac{x}{v\cos\theta}\right)^2$$

$$\boxed{y = x\tan\theta - \frac{gx^2}{2v^2\cos^2\theta}}$$

This is a parabola — all projectile trajectories are parabolic (under constant gravity, no air
resistance).

### 4.5 Maximum height

At maximum height, $v_y = 0$:

$$0 = v\sin\theta - gt_{\max} \implies t_{\max} = \frac{v\sin\theta}{g}$$

$$H_{\max} = \frac{(v\sin\theta)^2}{2g}$$

### 4.6 Range

Time of flight: $y = 0 \implies t = \dfrac{2v\sin\theta}{g}$.

$$R = v\cos\theta \cdot \frac{2v\sin\theta}{g} = \frac{v^2\sin 2\theta}{g}$$

Maximum range occurs when $\sin 2\theta = 1$, i.e., $\theta = 45^\circ$.

$$R_{\max} = \frac{v^2}{g}$$

### 4.7 Velocity at any point on the trajectory

At any time $t$, the velocity vector is:

$$\mathbf{v} = \begin{pmatrix} v\cos\theta \\ v\sin\theta - gt \end{pmatrix}$$

The speed at time $t$ is:

$$|\mathbf{v}| = \sqrt{(v\cos\theta)^2 + (v\sin\theta - gt)^2} = \sqrt{v^2 - 2vgt\sin\theta + g^2t^2}$$

The angle the velocity makes with the horizontal at time $t$ is:

$$\alpha = \arctan\left(\frac{v\sin\theta - gt}{v\cos\theta}\right)$$

At the highest point ($t = v\sin\theta / g$), the velocity is purely horizontal:
$\mathbf{v} = (v\cos\theta,\, 0)$. The speed at the highest point equals the horizontal component
$v\cos\theta$.

On landing ($t = 2v\sin\theta / g$), the vertical component is $-v\sin\theta$, so the speed equals
the initial speed $v$. The landing angle with the horizontal equals the launch angle $\theta$ (by
symmetry).

### 4.8 Time to reach a given height

Setting $y = h$ and solving for $t$:

$$h = v\sin\theta \cdot t - \frac{1}{2}gt^2 \implies \frac{1}{2}gt^2 - v\sin\theta \cdot t + h = 0$$

$$t = \frac{v\sin\theta \pm \sqrt{(v\sin\theta)^2 - 2gh}}{g}$$

- If $(v\sin\theta)^2 \gt{} 2gh$: two solutions — the projectile passes through height $h$ twice (on
  the way up and on the way down).
- If $(v\sin\theta)^2 = 2gh$: one solution — $h$ is the maximum height.
- If $(v\sin\theta)^2 \lt{} 2gh$: no real solution — the projectile never reaches height $h$.

### 4.9 Projectiles launched from a height

If a projectile is launched from height $H$ above ground level, set $y = -H$ at landing (taking
upwards as positive):

$$-H = v\sin\theta \cdot t - \frac{1}{2}gt^2$$

$$\frac{1}{2}gt^2 - v\sin\theta \cdot t - H = 0$$

$$t = \frac{v\sin\theta + \sqrt{(v\sin\theta)^2 + 2gH}}{g}$$

(We take the positive root since $t \gt{} 0$.)

The horizontal range is then $R = v\cos\theta \cdot t$.

:::tip When a projectile is launched from a height, the time of flight is **longer** than for level
ground, and the angle for maximum range is **less** than $45^\circ$ (derived via calculus, but
beyond the core syllabus).
:::

<hr />

## 5. Variable Acceleration

When acceleration is not constant, the SUVAT equations do not apply. Instead, use calculus:

$$v = \frac{ds}{dt}, \quad a = \frac{dv}{dt}$$

$$s = \int v\,dt, \quad v = \int a\,dt$$

Use initial conditions to find constants of integration.

### 5.1 Finding velocity from acceleration

Given $a = f(t)$, integrate to find $v$:

$$v = \int a\,dt = \int f(t)\,dt = F(t) + C$$

Use the initial velocity $v(0) = u$ to find $C$.

### 5.2 Finding displacement from velocity

Given $v = g(t)$, integrate to find $s$:

$$s = \int v\,dt = \int g(t)\,dt = G(t) + K$$

Use the initial displacement $s(0) = s_0$ to find $K$.

### 5.3 Acceleration in terms of displacement or velocity

Sometimes acceleration is given as a function of $s$ or $v$, not $t$.

**Case 1:** $a = f(v)$.

Use the chain rule: $a = \dfrac{dv}{dt} = \dfrac{dv}{ds} \cdot \dfrac{ds}{dt} = v\dfrac{dv}{ds}$.

This gives a separable differential equation:

$$f(v) = v\frac{dv}{ds} \implies \int ds = \int \frac{v}{f(v)}\,dv$$

**Case 2:** $a = f(s)$.

Again using $a = v\,dv/ds$:

$$v\,\frac{dv}{ds} = f(s) \implies \int v\,dv = \int f(s)\,ds$$

$$\frac{v^2}{2} = F(s) + C$$

This is equivalent to the work-energy principle: $\tfrac{1}{2}mv^2 = \mathrm{work done}$.

### 5.4 Definite integration for distance and displacement

When finding displacement over a time interval $[t_1, t_2]$:

$$\Delta s = \int_{t_1}^{t_2} v\,dt$$

When finding total distance, you must account for changes in direction. Find when $v = 0$ (turning
points), split the integral at those times, and take absolute values:

$$\mathrm{Distance} = \int_{t_1}^{t_2} |v|\,dt$$

### 5.5 Worked example: variable acceleration

A particle moves in a straight line. At time $t$ seconds, its acceleration is
$a = 6t - 4\,\mathrm{m/s}^2$. When $t = 0$, the particle is at rest at the origin. Find:

**(a)** The velocity at time $t$:

$$v = \int (6t - 4)\,dt = 3t^2 - 4t + C$$

Since $v = 0$ when $t = 0$: $C = 0$, so $v = 3t^2 - 4t$.

**(b)** When the particle is at rest:

$v = 0 \implies 3t^2 - 4t = 0 \implies t(3t - 4) = 0 \implies t = 0$ or $t = 4/3\,\mathrm{s}$.

**(c)** The displacement at time $t$:

$$s = \int (3t^2 - 4t)\,dt = t^3 - 2t^2 + K$$

Since $s = 0$ when $t = 0$: $K = 0$, so $s = t^3 - 2t^2$.

**(d)** The total distance travelled in the first 3 seconds:

The particle reverses direction at $t = 4/3$.

$s(4/3) = (64/27) - 2(16/9) = 64/27 - 96/27 = -32/27\,\mathrm{m}$.

$s(3) = 27 - 18 = 9\,\mathrm{m}$.

Distance
$= |s(4/3) - s(0)| + |s(3) - s(4/3)| = |-32/27| + |9 - (-32/27)| = 32/27 + 275/27 = 307/27 \approx 11.37\,\mathrm{m}$.

<hr />

## Problem Set

<details>
<summary>Problem 1</summary>
A car accelerates from rest at $2\,\mathrm{m/s}^2$ for 8 seconds. Find the distance travelled.
</details>

<details>
<summary>Solution 1</summary>
$u = 0$, $a = 2$, $t = 8$. Using $s = ut + \tfrac{1}{2}at^2$:

$s = 0 + \tfrac{1}{2}(2)(64) = 64\,\mathrm{m}$.

**If you get this wrong, revise:** [The SUVAT Equations](#2-the-suvat-equations) — Section 2.

</details>

<details>
<summary>Problem 2</summary>
A ball is thrown vertically upwards at $15\,\mathrm{m/s}$. Find the maximum height and the time to return to the thrower's hand. Take $g = 9.8\,\mathrm{m/s}^2$.
</details>

<details>
<summary>Solution 2</summary>
At max height: $v = 0$. $v^2 = u^2 + 2as \implies 0 = 225 - 2(9.8)s \implies s = 225/19.6 \approx 11.48\,\mathrm{m}$.

Time up: $v = u - gt \implies 0 = 15 - 9.8t \implies t = 15/9.8 \approx 1.53\,\mathrm{s}$.

Total time (up and down): $2 \times 1.53 = 3.06\,\mathrm{s}$.

**If you get this wrong, revise:** [Maximum Height](#45-maximum-height) — Section 4.5.

</details>

<details>
<summary>Problem 3</summary>
A projectile is launched at $30\,\mathrm{m/s}$ at an angle of $40^\circ$ above the horizontal. Find the range and maximum height. Take $g = 9.8\,\mathrm{m/s}^2$.
</details>

<details>
<summary>Solution 3</summary>
$v_x = 30\cos 40° \approx 22.98\,\mathrm{m/s}$, $v_y = 30\sin 40° \approx 19.28\,\mathrm{m/s}$.

$H_{\max} = \dfrac{(19.28)^2}{2(9.8)} = \dfrac{371.72}{19.6} \approx 18.97\,\mathrm{m}$.

$R = \dfrac{30^2 \sin 80°}{9.8} = \dfrac{900 \times 0.9848}{9.8} \approx 90.44\,\mathrm{m}$.

**If you get this wrong, revise:** [Projectiles](#4-projectiles) — Section 4.

</details>

<details>
<summary>Problem 4</summary>
A train decelerates uniformly from $25\,\mathrm{m/s}$ to $10\,\mathrm{m/s}$ over a distance of $200\,\mathrm{m}$. Find the deceleration and the time taken.
</details>

<details>
<summary>Solution 4</summary>
$u = 25$, $v = 10$, $s = 200$.

$v^2 = u^2 + 2as \implies 100 = 625 + 400a \implies a = -525/400 = -1.3125\,\mathrm{m/s}^2$.

$v = u + at \implies 10 = 25 - 1.3125t \implies t = 15/1.3125 \approx 11.43\,\mathrm{s}$.

**If you get this wrong, revise:** [The SUVAT Equations](#2-the-suvat-equations) — Section 2.

</details>

<details>
<summary>Problem 5</summary>
A particle moves with velocity $v = 3t^2 - 2t + 1$ m/s. Find the displacement after 3 seconds, given $s = 0$ at $t = 0$.
</details>

<details>
<summary>Solution 5</summary>
$s = \int_0^3 (3t^2 - 2t + 1)\,dt = \left[t^3 - t^2 + t\right]_0^3 = 27 - 9 + 3 = 21\,\mathrm{m}$.

**If you get this wrong, revise:** [Variable Acceleration](#5-variable-acceleration) — Section 5.

</details>

<details>
<summary>Problem 6</summary>
Show that the maximum range of a projectile on level ground is achieved at $45^\circ$.
</details>

<details>
<summary>Solution 6</summary>
$R = \dfrac{v^2 \sin 2\theta}{g}$. To maximise: $\dfrac{dR}{d\theta} = \dfrac{2v^2 \cos 2\theta}{g} = 0 \implies \cos 2\theta = 0 \implies 2\theta = 90° \implies \theta = 45^\circ$.

$\dfrac{d^2R}{d\theta^2} = -\dfrac{4v^2 \sin 2\theta}{g} \lt{} 0$ at $\theta = 45^\circ$, confirming
a maximum. $\blacksquare$

**If you get this wrong, revise:** [Range](#46-range) — Section 4.6.

</details>

<details>
<summary>Problem 7</summary>
A stone is dropped from a cliff of height $80\,\mathrm{m}$. Find the time to hit the ground and the speed on impact. Take $g = 9.8\,\mathrm{m/s}^2$.
</details>

<details>
<summary>Solution 7</summary>
$s = \tfrac{1}{2}gt^2 \implies 80 = 4.9t^2 \implies t^2 = 80/4.9 \implies t \approx 4.04\,\mathrm{s}$.

$v = gt = 9.8(4.04) \approx 39.6\,\mathrm{m/s}$.

**If you get this wrong, revise:** [The SUVAT Equations](#2-the-suvat-equations) — Section 2.

</details>

<details>
<summary>Problem 8</summary>
A particle is projected from a point $O$ on horizontal ground. It passes through a point $P$ which is $10\,\mathrm{m}$ horizontally and $5\,\mathrm{m}$ vertically from $O$. If the initial speed is $15\,\mathrm{m/s}$, find the possible angles of projection.
</details>

<details>
<summary>Solution 8</summary>
Trajectory: $y = x\tan\theta - \dfrac{gx^2}{2v^2\cos^2\theta}$.

$5 = 10\tan\theta - \dfrac{9.8(100)}{2(225)\cos^2\theta} = 10\tan\theta - \dfrac{980}{450\cos^2\theta}$.

Using $\sec^2\theta = 1 + \tan^2\theta$:

$5 = 10\tan\theta - \dfrac{980}{450}(1+\tan^2\theta)$.

Let $u = \tan\theta$: $5 = 10u - \dfrac{98}{45}(1+u^2) = 10u - \dfrac{98}{45} - \dfrac{98}{45}u^2$.

$225 = 450u - 98 - 98u^2 \implies 98u^2 - 450u + 323 = 0$.

$u = \dfrac{450 \pm \sqrt{202500 - 126604}}{196} = \dfrac{450 \pm \sqrt{75896}}{98} = \dfrac{450 \pm 275.5}{196}$.

$u \approx 3.702$ or $u \approx 0.890$.

$\theta \approx 74.9^\circ$ or $\theta \approx 41.7^\circ$.

**If you get this wrong, revise:** [Trajectory Equation](#44-derivation-of-the-trajectory-equation)
— Section 4.4.

</details>

<details>
<summary>Problem 9</summary>
A car travels at $20\,\mathrm{m/s}$ for 30 seconds, then decelerates at $1.5\,\mathrm{m/s}^2$ until it stops. Find the total distance and total time.
</details>

<details>
<summary>Solution 9</summary>
Phase 1: $s_1 = 20 \times 30 = 600\,\mathrm{m}$, $t_1 = 30\,\mathrm{s}$.

Phase 2: $v = u + at \implies 0 = 20 - 1.5t \implies t = 40/3 \approx 13.33\,\mathrm{s}$.

$s_2 = ut + \tfrac{1}{2}at^2 = 20(40/3) - \tfrac{1}{2}(1.5)(1600/9) = 800/3 - 400/3 = 400/3 \approx 133.3\,\mathrm{m}$.

Total: $s = 600 + 133.3 = 733.3\,\mathrm{m}$, $t = 30 + 13.33 = 43.33\,\mathrm{s}$.

**If you get this wrong, revise:** [The SUVAT Equations](#2-the-suvat-equations) — Section 2.

</details>

<details>
<summary>Problem 10</summary>
The velocity of a particle is given by $v = 6t - t^2$ for $0 \leq t \leq 6$. Find the maximum velocity and the total distance travelled.
</details>

<details>
<summary>Solution 10</summary>
$a = dv/dt = 6 - 2t = 0 \implies t = 3$. $v_{\max} = 18 - 9 = 9\,\mathrm{m/s}$.

Distance: $s = \int_0^6 (6t-t^2)\,dt = [3t^2 - t^3/3]_0^6 = 108 - 72 = 36\,\mathrm{m}$.

**If you get this wrong, revise:** [Variable Acceleration](#5-variable-acceleration) — Section 5.

</details>

<details>
<summary>Problem 11</summary>
Two balls are dropped from the same height, the second $1\,\mathrm{s}$ after the first. How far apart are they when the first hits the ground (height $= 45\,\mathrm{m}$)?
</details>

<details>
<summary>Solution 11</summary>
First ball: $t = \sqrt{90/9.8} \approx 3.03\,\mathrm{s}$.

Second ball at $t = 3.03$: has been falling for $2.03\,\mathrm{s}$.

$s_2 = \tfrac{1}{2}(9.8)(2.03)^2 = 4.9 \times 4.121 \approx 20.19\,\mathrm{m}$.

Separation: $45 - 20.19 = 24.81\,\mathrm{m}$.

**If you get this wrong, revise:** [The SUVAT Equations](#2-the-suvat-equations) — Section 2.

</details>

<details>
<summary>Problem 12</summary>
A projectile is launched from ground level and just clears a wall $20\,\mathrm{m}$ high and $40\,\mathrm{m}$ away. If the launch angle is $50^\circ$, find the minimum launch speed.
</details>

<details>
<summary>Solution 12</summary>
$y = x\tan\theta - \dfrac{gx^2}{2v^2\cos^2\theta}$.

$20 = 40\tan 50° - \dfrac{9.8 \times 1600}{2v^2\cos^2 50°}$.

$20 = 40(1.1918) - \dfrac{15680}{2v^2(0.4132)} = 47.67 - \dfrac{15680}{0.8263v^2} = 47.67 - \dfrac{18976.9}{v^2}$.

$\dfrac{18976.9}{v^2} = 27.67 \implies v^2 = 686.0 \implies v \approx 26.2\,\mathrm{m/s}$.

**If you get this wrong, revise:** [Trajectory Equation](#44-derivation-of-the-trajectory-equation)
— Section 4.4.

</details>

<details>
<summary>Problem 13</summary>
A particle moves with acceleration $a = 4 - 2t\,\mathrm{m/s}^2$. When $t = 0$, $v = 3\,\mathrm{m/s}$ and $s = 0$. Find the velocity and displacement when $t = 5$. Also find when the particle is at rest.
</details>

<details>
<summary>Solution 13</summary>
$v = \int (4 - 2t)\,dt = 4t - t^2 + C$. Since $v(0) = 3$: $C = 3$, so $v = 4t - t^2 + 3$.

$s = \int (4t - t^2 + 3)\,dt = 2t^2 - t^3/3 + 3t + K$. Since $s(0) = 0$: $K = 0$, so
$s = 2t^2 - t^3/3 + 3t$.

At $t = 5$: $v = 20 - 25 + 3 = -2\,\mathrm{m/s}$,
$s = 50 - 125/3 + 15 = 65 - 41.67 = 23.33\,\mathrm{m}$.

At rest:
$v = 0 \implies -t^2 + 4t + 3 = 0 \implies t^2 - 4t - 3 = 0 \implies t = (4 \pm \sqrt{16+12})/2 = 2 \pm \sqrt{7}$.

$t = 2 + \sqrt{7} \approx 4.65\,\mathrm{s}$ (taking the positive root).

**If you get this wrong, revise:** [Variable Acceleration](#5-variable-acceleration) — Section 5.

</details>

<details>
<summary>Problem 14</summary>
A projectile is launched from the top of a cliff $60\,\mathrm{m}$ high at $20\,\mathrm{m/s}$ horizontally. Find the time to hit the ground, the horizontal distance from the base of the cliff, and the speed on impact. Take $g = 9.8\,\mathrm{m/s}^2$.
</details>

<details>
<summary>Solution 14</summary>
Horizontal: $v_x = 20\,\mathrm{m/s}$ (constant). Vertical: $u_y = 0$, $a_y = 9.8$, $s_y = 60$ (downwards positive).

$s_y = \tfrac{1}{2}gt^2 \implies 60 = 4.9t^2 \implies t = \sqrt{60/4.9} \approx 3.50\,\mathrm{s}$.

Horizontal distance: $x = 20 \times 3.50 = 70.0\,\mathrm{m}$.

Vertical velocity on impact: $v_y = gt = 9.8 \times 3.50 = 34.3\,\mathrm{m/s}$.

Speed:
$|\mathbf{v}| = \sqrt{20^2 + 34.3^2} = \sqrt{400 + 1176.49} = \sqrt{1576.49} \approx 39.7\,\mathrm{m/s}$.

**If you get this wrong, revise:**
[Projectiles from a Height](#49-projectiles-launched-from-a-height) — Section 4.9.

</details>

<details>
<summary>Problem 15</summary>
The velocity of a particle is $v = 2t^3 - 9t^2 + 12t - 5$ m/s. Find the total distance travelled between $t = 0$ and $t = 3$.
</details>

<details>
<summary>Solution 15</summary>
First find when $v = 0$: $2t^3 - 9t^2 + 12t - 5 = 0$.

Testing $t = 1$: $2 - 9 + 12 - 5 = 0$. So $(t-1)$ is a factor.

$2t^3 - 9t^2 + 12t - 5 = (t-1)(2t^2 - 7t + 5) = (t-1)(2t-5)(t-1) = (t-1)^2(2t-5)$.

So $v = 0$ at $t = 1$ and $t = 2.5$.

Check the sign of $v$: for $0 \lt{} t \lt{} 1$, test $t = 0.5$:
$v = 0.25 - 2.25 + 6 - 5 = -1 \lt{} 0$. For $1 \lt{} t \lt{} 2.5$, test $t = 2$:
$v = 16 - 36 + 24 - 5 = -1 \lt{} 0$. For $t \gt{} 2.5$, test $t = 3$:
$v = 54 - 81 + 36 - 5 = 4 \gt{} 0$.

So $v \lt{} 0$ for $0 \lt{} t \lt{} 2.5$ and $v \gt{} 0$ for $t \gt{} 2.5$.

$s(2.5) = \int_0^{2.5} v\,dt = \left[\tfrac{1}{2}t^4 - 3t^3 + 6t^2 - 5t\right]_0^{2.5} = 19.531 - 46.875 + 37.5 - 12.5 = -2.344\,\mathrm{m}$.

$s(3) = \left[\tfrac{1}{2}t^4 - 3t^3 + 6t^2 - 5t\right]_0^3 = 40.5 - 81 + 54 - 15 = -1.5\,\mathrm{m}$.

Distance
$= |s(2.5) - s(0)| + |s(3) - s(2.5)| = |-2.344| + |-1.5 - (-2.344)| = 2.344 + 0.844 = 3.188\,\mathrm{m}$.

**If you get this wrong, revise:**
[Definite Integration for Distance](#54-definite-integration-for-distance-and-displacement) —
Section 5.4.

</details>

<details>
<summary>Problem 16</summary>
A ball is thrown at $12\,\mathrm{m/s}$ at an angle of $60^\circ$ above the horizontal from a point $2\,\mathrm{m}$ above level ground. Find the speed and direction of the ball when it hits the ground. Take $g = 9.8\,\mathrm{m/s}^2$.
</details>

<details>
<summary>Solution 16</summary>
$v_x = 12\cos 60° = 6\,\mathrm{m/s}$, $v_{y0} = 12\sin 60° = 6\sqrt{3} \approx 10.39\,\mathrm{m/s}$.

Taking upwards as positive with launch at $s_y = 2$:

$s_y = v_{y0}\,t - \tfrac{1}{2}gt^2 = 2$. On hitting ground: $s_y = 0$ (relative to ground).

$0 = 2 + 10.39t - 4.9t^2 \implies 4.9t^2 - 10.39t - 2 = 0$.

$t = \dfrac{10.39 + \sqrt{107.95 + 39.2}}{9.8} = \dfrac{10.39 + \sqrt{147.15}}{9.8} = \dfrac{10.39 + 12.13}{9.8} \approx 2.29\,\mathrm{s}$.

Vertical velocity at impact: $v_y = 10.39 - 9.8(2.29) = 10.39 - 22.44 = -12.05\,\mathrm{m/s}$.

Speed: $\sqrt{6^2 + 12.05^2} = \sqrt{36 + 145.20} = \sqrt{181.20} \approx 13.46\,\mathrm{m/s}$.

Angle below horizontal: $\arctan(12.05/6) \approx 63.5^\circ$.

**If you get this wrong, revise:**
[Velocity at Any Point](#47-velocity-at-any-point-on-the-trajectory) — Section 4.7.

</details>

<details>
<summary>Problem 17</summary>
A particle moves so that $a = -6s\,\mathrm{m/s}^2$, where $s$ is the displacement from a fixed point. When $s = 0$, $v = 8\,\mathrm{m/s}$. Find the velocity when $s = 1$.
</details>

<details>
<summary>Solution 17</summary>
Using $a = v\,dv/ds$:

$$v\,\frac{dv}{ds} = -6s$$

$$\int v\,dv = \int -6s\,ds$$

$$\frac{v^2}{2} = -3s^2 + C$$

When $s = 0$, $v = 8$: $64/2 = C \implies C = 32$.

$$\frac{v^2}{2} = -3s^2 + 32$$

When $s = 1$:
$v^2/2 = -3 + 32 = 29 \implies v^2 = 58 \implies v = \sqrt{58} \approx 7.62\,\mathrm{m/s}$.

The particle is still moving in the positive direction ($v \gt{} 0$) since it has not yet reached
the turning point where $v = 0$ (which occurs at $s^2 = 32/3$, i.e., $s \approx 3.27\,\mathrm{m}$).

**If you get this wrong, revise:**
[Acceleration in Terms of Displacement](#53-acceleration-in-terms-of-displacement-or-velocity) —
Section 5.3.

</details>

<details>
<summary>Problem 18</summary>
A particle $P$ is projected from a point $A$ on horizontal ground with speed $u$ at an angle $\theta$ above the horizontal. At the instant $P$ passes through the highest point of its trajectory, a second particle $Q$ is projected vertically upwards from the point on the ground directly below that highest point. Given that $P$ and $Q$ collide, find an expression for the speed of projection of $Q$ in terms of $u$ and $\theta$.
</details>

<details>
<summary>Solution 18</summary>
Highest point of $P$'s trajectory: $x = \dfrac{u^2\sin 2\theta}{2g}$, $y = \dfrac{u^2\sin^2\theta}{2g}$, at time
$t_1 = \dfrac{u\sin\theta}{g}$.

After $t_1$, $P$ is in free fall with $v_y = 0$ at $t_1$, so for $t \geq t_1$:

$y_P = \dfrac{u^2\sin^2\theta}{2g} - \dfrac{1}{2}g(t - t_1)^2$.

$x_P = u\cos\theta \cdot t$.

For collision, $Q$ must be at the same $(x, y)$. Since $Q$ is projected vertically from directly
below the highest point, $Q$'s horizontal position is always $x = u^2\sin 2\theta / (2g)$.

For $P$ to be at this $x$-coordinate at time $t$:
$u\cos\theta \cdot t = u^2\sin 2\theta / (2g) = u^2\sin\theta\cos\theta / g$, so
$t = u\sin\theta / g = t_1$.

This means collision occurs at $t = t_1$, the instant of the highest point. But $Q$ is projected at
that instant, so for collision we need $y_Q(0^+) = y_P(t_1) = H$.

$Q$ starts at ground level ($y_Q = 0$) and must reach $y = H = u^2\sin^2\theta / (2g)$.

For $Q$: $v_Q = w - gt$, $y_Q = wt - \tfrac{1}{2}gt^2$, where $w$ is the projection speed.

Collision at $y = H$ when $t = 0$ is impossible ($Q$ starts at $y = 0$). So collision must occur at
some $\Delta t \gt{} 0$ after $t_1$.

At time $t_1 + \Delta t$:

$y_P = H - \tfrac{1}{2}g(\Delta t)^2$, $y_Q = w\,\Delta t - \tfrac{1}{2}g(\Delta t)^2$.

For collision: $H = w\,\Delta t$. Also, $x$ must match:
$u\cos\theta(t_1 + \Delta t) = u^2\sin\theta\cos\theta/g + u\cos\theta\,\Delta t$. This is satisfied
for all $\Delta t$ since $u\cos\theta \cdot t_1 = u^2\sin\theta\cos\theta/g$.

So any $w$ and $\Delta t$ with $w\,\Delta t = H$ gives a collision. The minimum speed is
$w = H/\Delta t$ for $\Delta t \to 0^+$, but in practice we need a finite time.

If we require collision at the highest point itself ($\Delta t \to 0$), then $w \to \infty$, which
is unphysical. The problem states they collide at some time after projection. Since no further
constraint is given, we take $w$ as a free parameter satisfying
$w\,\Delta t = u^2\sin^2\theta / (2g)$ for some $\Delta t \gt{} 0$.

**If you get this wrong, revise:** [Projectiles](#4-projectiles) — Section 4.

</details>

:::

:::
