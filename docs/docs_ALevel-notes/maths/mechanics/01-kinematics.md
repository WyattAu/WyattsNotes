---
title: Kinematics
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
equation and apply it to multi-stage problems. :::

---

## 1. Fundamental Quantities

### 1.1 Definitions

- **Displacement** $s$: position relative to a reference point (vector, measured in metres, m).
- **Velocity** $v$: rate of change of displacement (vector, m/s).
- **Speed**: magnitude of velocity (scalar, m/s).
- **Acceleration** $a$: rate of change of velocity (vector, m/s$^2$).

### 1.2 Relationships via calculus

$$v = \frac{ds}{dt}, \qquad a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$$

$$s = \int v\,dt, \qquad v = \int a\,dt$$

---

## 2. The SUVAT Equations

### 2.1 Derivation from calculus

Assuming constant acceleration $a$:

$$v = \frac{ds}{dt} \implies \frac{ds}{dt} = u + at \implies s = ut + \frac{1}{2}at^2 + C$$

Since $s = 0$ when $t = 0$: $C = 0$.

$$\boxed{s = ut + \tfrac{1}{2}at^2} \quad \text{(Equation 1)}$$

From $v = u + at$: $\boxed{v = u + at} \quad \text{(Equation 2)}$

Eliminating $t$ from (1) and (2): $t = (v-u)/a$.

$$s = u\frac{v-u}{a} + \frac{1}{2}a\frac{(v-u)^2}{a^2} = \frac{uv - u^2}{a} + \frac{v^2 - 2uv + u^2}{2a}$$

$$s = \frac{2uv - 2u^2 + v^2 - 2uv + u^2}{2a} = \frac{v^2 - u^2}{2a}$$

$$\boxed{v^2 = u^2 + 2as} \quad \text{(Equation 3)}$$

From (1): $s = ut + \tfrac{1}{2}at^2 = \tfrac{1}{2}(2u + at)t = \tfrac{1}{2}(u + u + at)t$.

Using $v = u + at$: $\boxed{s = \tfrac{1}{2}(u+v)t} \quad \text{(Equation 4)}$

Eliminating $a$ from (1) and (2): $a = (v-u)/t$.

$s = ut + \tfrac{1}{2}\frac{v-u}{t}t^2 = ut + \tfrac{1}{2}(v-u)t = \tfrac{1}{2}(u+v)t$. (Same as
Equation 4.)

$$s = \tfrac{1}{2}(u+v)t \implies v = \frac{2s}{t} - u \quad \text{(useful when } a \text{ is unknown)}$$

### 2.2 Summary

| Equation                   | Variables    | Missing |
| -------------------------- | ------------ | ------- |
| $v = u + at$               | $v, u, a, t$ | $s$     |
| $s = ut + \frac{1}{2}at^2$ | $s, u, a, t$ | $v$     |
| $v^2 = u^2 + 2as$          | $v, u, a, s$ | $t$     |
| $s = \frac{1}{2}(u+v)t$    | $s, u, v, t$ | $a$     |

:::tip Always write down what you know and what you need. Choose the equation that contains all
known quantities and the unknown. Draw a diagram with positive direction clearly marked. :::

---

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

---

## 4. Projectiles

### 4.1 Assumptions

- Motion is in a vertical plane.
- The only force is gravity (no air resistance).
- Horizontal and vertical motions are independent.

### 4.2 Horizontal motion

$$x = v\cos\theta \cdot t, \quad a_x = 0$$

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

Maximum range occurs when $\sin 2\theta = 1$, i.e., $\theta = 45°$.

$$R_{\max} = \frac{v^2}{g}$$

---

## 5. Variable Acceleration

When acceleration is not constant, use calculus:

$$v = \frac{ds}{dt}, \quad a = \frac{dv}{dt}$$

$$s = \int v\,dt, \quad v = \int a\,dt$$

Use initial conditions to find constants of integration.

---

## Problem Set

<details>
<summary>Problem 1</summary>
A car accelerates from rest at $2\,\text{m/s}^2$ for 8 seconds. Find the distance travelled.
</details>

<details>
<summary>Solution 1</summary>
$u = 0$, $a = 2$, $t = 8$. Using $s = ut + \tfrac{1}{2}at^2$:

$s = 0 + \tfrac{1}{2}(2)(64) = 64\,\text{m}$.

**If you get this wrong, revise:** [The SUVAT Equations](#2-the-suvat-equations) — Section 2.

</details>

<details>
<summary>Problem 2</summary>
A ball is thrown vertically upwards at $15\,\text{m/s}$. Find the maximum height and the time to return to the thrower's hand. Take $g = 9.8\,\text{m/s}^2$.
</details>

<details>
<summary>Solution 2</summary>
At max height: $v = 0$. $v^2 = u^2 + 2as \implies 0 = 225 - 2(9.8)s \implies s = 225/19.6 \approx 11.48\,\text{m}$.

Time up: $v = u - gt \implies 0 = 15 - 9.8t \implies t = 15/9.8 \approx 1.53\,\text{s}$.

Total time (up and down): $2 \times 1.53 = 3.06\,\text{s}$.

**If you get this wrong, revise:** [Maximum Height](#45-maximum-height) — Section 4.5.

</details>

<details>
<summary>Problem 3</summary>
A projectile is launched at $30\,\text{m/s}$ at an angle of $40°$ above the horizontal. Find the range and maximum height. Take $g = 9.8\,\text{m/s}^2$.
</details>

<details>
<summary>Solution 3</summary>
$v_x = 30\cos 40° \approx 22.98\,\text{m/s}$, $v_y = 30\sin 40° \approx 19.28\,\text{m/s}$.

$H_{\max} = \dfrac{(19.28)^2}{2(9.8)} = \dfrac{371.72}{19.6} \approx 18.97\,\text{m}$.

$R = \dfrac{30^2 \sin 80°}{9.8} = \dfrac{900 \times 0.9848}{9.8} \approx 90.44\,\text{m}$.

**If you get this wrong, revise:** [Projectiles](#4-projectiles) — Section 4.

</details>

<details>
<summary>Problem 4</summary>
A train decelerates uniformly from $25\,\text{m/s}$ to $10\,\text{m/s}$ over a distance of $200\,\text{m}$. Find the deceleration and the time taken.
</details>

<details>
<summary>Solution 4</summary>
$u = 25$, $v = 10$, $s = 200$.

$v^2 = u^2 + 2as \implies 100 = 625 + 400a \implies a = -525/400 = -1.3125\,\text{m/s}^2$.

$v = u + at \implies 10 = 25 - 1.3125t \implies t = 15/1.3125 \approx 11.43\,\text{s}$.

**If you get this wrong, revise:** [The SUVAT Equations](#2-the-suvat-equations) — Section 2.

</details>

<details>
<summary>Problem 5</summary>
A particle moves with velocity $v = 3t^2 - 2t + 1$ m/s. Find the displacement after 3 seconds, given $s = 0$ at $t = 0$.
</details>

<details>
<summary>Solution 5</summary>
$s = \int_0^3 (3t^2 - 2t + 1)\,dt = \left[t^3 - t^2 + t\right]_0^3 = 27 - 9 + 3 = 21\,\text{m}$.

**If you get this wrong, revise:** [Variable Acceleration](#5-variable-acceleration) — Section 5.

</details>

<details>
<summary>Problem 6</summary>
Show that the maximum range of a projectile on level ground is achieved at $45°$.
</details>

<details>
<summary>Solution 6</summary>
$R = \dfrac{v^2 \sin 2\theta}{g}$. To maximise: $\dfrac{dR}{d\theta} = \dfrac{2v^2 \cos 2\theta}{g} = 0 \implies \cos 2\theta = 0 \implies 2\theta = 90° \implies \theta = 45°$.

$\dfrac{d^2R}{d\theta^2} = -\dfrac{4v^2 \sin 2\theta}{g} \lt{} 0$ at $\theta = 45°$, confirming a
maximum. $\blacksquare$

**If you get this wrong, revise:** [Range](#46-range) — Section 4.6.

</details>

<details>
<summary>Problem 7</summary>
A stone is dropped from a cliff of height $80\,\text{m}$. Find the time to hit the ground and the speed on impact. Take $g = 9.8\,\text{m/s}^2$.
</details>

<details>
<summary>Solution 7</summary>
$s = \tfrac{1}{2}gt^2 \implies 80 = 4.9t^2 \implies t^2 = 80/4.9 \implies t \approx 4.04\,\text{s}$.

$v = gt = 9.8(4.04) \approx 39.6\,\text{m/s}$.

**If you get this wrong, revise:** [The SUVAT Equations](#2-the-suvat-equations) — Section 2.

</details>

<details>
<summary>Problem 8</summary>
A particle is projected from a point $O$ on horizontal ground. It passes through a point $P$ which is $10\,\text{m}$ horizontally and $5\,\text{m}$ vertically from $O$. If the initial speed is $15\,\text{m/s}$, find the possible angles of projection.
</details>

<details>
<summary>Solution 8</summary>
Trajectory: $y = x\tan\theta - \dfrac{gx^2}{2v^2\cos^2\theta}$.

$5 = 10\tan\theta - \dfrac{9.8(100)}{2(225)\cos^2\theta} = 10\tan\theta - \dfrac{980}{450\cos^2\theta}$.

Using $\sec^2\theta = 1 + \tan^2\theta$:

$5 = 10\tan\theta - \dfrac{980}{450}(1+\tan^2\theta)$.

Let $u = \tan\theta$: $5 = 10u - \dfrac{49}{25}(1+u^2) = 10u - \dfrac{49}{25} - \dfrac{49}{25}u^2$.

$125 = 250u - 49 - 49u^2 \implies 49u^2 - 250u + 174 = 0$.

$u = \dfrac{250 \pm \sqrt{62500 - 34104}}{98} = \dfrac{250 \pm \sqrt{28396}}{98} = \dfrac{250 \pm 168.5}{98}$.

$u \approx 4.276$ or $u \approx 0.832$.

$\theta \approx 76.8°$ or $\theta \approx 39.8°$.

**If you get this wrong, revise:** [Trajectory Equation](#44-derivation-of-the-trajectory-equation)
— Section 4.4.

</details>

<details>
<summary>Problem 9</summary>
A car travels at $20\,\text{m/s}$ for 30 seconds, then decelerates at $1.5\,\text{m/s}^2$ until it stops. Find the total distance and total time.
</details>

<details>
<summary>Solution 9</summary>
Phase 1: $s_1 = 20 \times 30 = 600\,\text{m}$, $t_1 = 30\,\text{s}$.

Phase 2: $v = u + at \implies 0 = 20 - 1.5t \implies t = 40/3 \approx 13.33\,\text{s}$.

$s_2 = ut + \tfrac{1}{2}at^2 = 20(40/3) - \tfrac{1}{2}(1.5)(1600/9) = 800/3 - 400/3 = 400/3 \approx 133.3\,\text{m}$.

Total: $s = 600 + 133.3 = 733.3\,\text{m}$, $t = 30 + 13.33 = 43.33\,\text{s}$.

**If you get this wrong, revise:** [The SUVAT Equations](#2-the-suvat-equations) — Section 2.

</details>

<details>
<summary>Problem 10</summary>
The velocity of a particle is given by $v = 6t - t^2$ for $0 \leq t \leq 6$. Find the maximum velocity and the total distance travelled.
</details>

<details>
<summary>Solution 10</summary>
$a = dv/dt = 6 - 2t = 0 \implies t = 3$. $v_{\max} = 18 - 9 = 9\,\text{m/s}$.

Distance: $s = \int_0^6 (6t-t^2)\,dt = [3t^2 - t^3/3]_0^6 = 108 - 72 = 36\,\text{m}$.

**If you get this wrong, revise:** [Variable Acceleration](#5-variable-acceleration) — Section 5.

</details>

<details>
<summary>Problem 11</summary>
Two balls are dropped from the same height, the second $1\,\text{s}$ after the first. How far apart are they when the first hits the ground (height $= 45\,\text{m}$)?
</details>

<details>
<summary>Solution 11</summary>
First ball: $t = \sqrt{90/9.8} \approx 3.03\,\text{s}$.

Second ball at $t = 3.03$: has been falling for $2.03\,\text{s}$.

$s_2 = \tfrac{1}{2}(9.8)(2.03)^2 = 4.9 \times 4.121 \approx 20.19\,\text{m}$.

Separation: $45 - 20.19 = 24.81\,\text{m}$.

**If you get this wrong, revise:** [The SUVAT Equations](#2-the-suvat-equations) — Section 2.

</details>

<details>
<summary>Problem 12</summary>
A projectile is launched from ground level and just clears a wall $20\,\text{m}$ high and $40\,\text{m}$ away. If the launch angle is $50°$, find the minimum launch speed.
</details>

<details>
<summary>Solution 12</summary>
$y = x\tan\theta - \dfrac{gx^2}{2v^2\cos^2\theta}$.

$20 = 40\tan 50° - \dfrac{9.8 \times 1600}{2v^2\cos^2 50°}$.

$20 = 40(1.1918) - \dfrac{15680}{2v^2(0.4132)} = 47.67 - \dfrac{15680}{0.8263v^2} = 47.67 - \dfrac{18976.9}{v^2}$.

$\dfrac{18976.9}{v^2} = 27.67 \implies v^2 = 686.0 \implies v \approx 26.2\,\text{m/s}$.

**If you get this wrong, revise:** [Trajectory Equation](#44-derivation-of-the-trajectory-equation)
— Section 4.4.

</details>
