---
title: Kinematics (Extended)
description:
  "A-Level Mathematics notes on Kinematics (Extended): Kinematics (Extended Treatment); 1. Equations of Motion (SUVAT) -- Rigorous Derivation."
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: kinematics-extended
---

## Kinematics (Extended Treatment)

This document extends the core kinematics material with deeper derivations, multi-stage problems,
projectile motion in two dimensions, and the calculus approach to variable acceleration.

:::info
This page complements the core kinematics notes. Readers should already be comfortable with the
SUVAT equations and basic calculus definitions of velocity and acceleration.
:::

<hr />

## 1. Equations of Motion (SUVAT) -- Rigorous Derivation

### 1.1 Derivation from first principles

Starting from the definition of constant acceleration:

$$a = \frac{dv}{dt}$$

Integrating with respect to $t$:

$$\int_0^t a\,dt = \int_u^v dv \implies at = v - u \implies v = u + at$$

This is **SUVAT equation 1**. We now derive the remaining four.

**Equation 2: $s = ut + \tfrac{1}{2}at^2$**

Since $v = \dfrac{ds}{dt} = u + at$, integrate:

$$\int_0^s ds = \int_0^t (u + at)\,dt \implies s = ut + \frac{1}{2}at^2$$

**Equation 3: $s = \dfrac{1}{2}(u + v)t$**

Substitute $v = u + at$ into Equation 2:

$$s = ut + \frac{1}{2}(v - u)t = \frac{1}{2}(2u + v - u)t = \frac{1}{2}(u + v)t$$

**Equation 4: $v^2 = u^2 + 2as$**

From $v = u + at$, square both sides:

$$v^2 = (u + at)^2 = u^2 + 2uat + a^2t^2$$

Factor $2a$ from the last two terms:

$$v^2 = u^2 + 2a\!\left(ut + \frac{1}{2}at^2\right) = u^2 + 2as$$

**Equation 5: $s = vt - \tfrac{1}{2}at^2$**

Substitute $u = v - at$ into Equation 2:

$$s = (v - at)t + \frac{1}{2}at^2 = vt - \frac{1}{2}at^2$$

### 1.2 Selecting the correct equation

The key skill is identifying which variable is **unknown** and which is **not needed**:

| Unknown         | Do not use           |
| --------------- | -------------------- |
| displacement $s$ | $v^2 = u^2 + 2as$  |
| final velocity $v$ | $s = \tfrac{1}{2}(u+v)t$ |
| time $t$        | $v^2 = u^2 + 2as$   |
| acceleration $a$ | $s = \tfrac{1}{2}(u+v)t$ |
| initial velocity $u$ | $s = vt - \tfrac{1}{2}at^2$ |

### 1.3 Worked example: multi-stage motion

**Problem.** A car accelerates uniformly from rest at $2\;\mathrm{m\,s^{-2}}$ for 6 seconds, then
decelerates uniformly at $3\;\mathrm{m\,s^{-2}}$ until it comes to rest. Find the total distance
travelled.

**Stage 1: Acceleration.**

$$v = u + at = 0 + 2 \times 6 = 12\;\mathrm{m\,s^{-1}}$$

$$s_1 = ut + \frac{1}{2}at^2 = 0 + \frac{1}{2}(2)(36) = 36\;\mathrm{m}$$

**Stage 2: Deceleration.** Now $u = 12$, $v = 0$, $a = -3$.

$$t_2 = \frac{v - u}{a} = \frac{0 - 12}{-3} = 4\;\mathrm{s}$$

$$s_2 = \frac{1}{2}(u + v)t_2 = \frac{1}{2}(12 + 0)(4) = 24\;\mathrm{m}$$

$$s_{\mathrm{total}} = 36 + 24 = 60\;\mathrm{m}$$

:::warning Common Pitfall
When a problem has multiple stages, the **final velocity of one stage becomes the initial velocity
of the next**. Forgetting this connection is the most frequent error in multi-stage kinematics
problems.
:::

<hr />

## 2. Free Fall Under Gravity

### 2.1 The acceleration due to gravity

Near the Earth's surface, all objects in free fall (neglecting air resistance) experience the same
acceleration $g$. The standard value is:

$$g \approx 9.8\;\mathrm{m\,s^{-2}} \quad (\mathrm{or}\ 9.81\;\mathrm{m\,s^{-2}}\ \mathrm{for\ greater\ precision})$$

The direction of $g$ is always **downward**. The sign convention must be established at the start
of every problem.

### 2.2 Sign conventions

**Convention A (upward positive):** Displacement upward is positive, so $a = -g$.

**Convention B (downward positive):** Displacement downward is positive, so $a = +g$.

Both conventions are valid, but you must be consistent throughout a single problem.

### 2.3 Worked example: object thrown upward

**Problem.** A ball is thrown vertically upward at $15\;\mathrm{m\,s^{-1}}$ from a height of
$2\;\mathrm{m}$ above the ground. Taking $g = 9.8\;\mathrm{m\,s^{-2}}$ and upward as positive, find
the speed with which it hits the ground.

At the highest point, $v = 0$:

$$t_{\mathrm{max}} = \frac{v - u}{a} = \frac{0 - 15}{-9.8} = \frac{15}{9.8} \approx 1.531\;\mathrm{s}$$

Maximum height above the throw point:

$$s_{\mathrm{up}} = \frac{v^2 - u^2}{2a} = \frac{0 - 225}{2(-9.8)} = \frac{225}{19.6} \approx 11.48\;\mathrm{m}$$

Total height above ground: $11.48 + 2 = 13.48\;\mathrm{m}$.

On the way down: $u = 0$, $a = -9.8$ (still upward positive), $s = -13.48\;\mathrm{m}$.

$$v^2 = 0 + 2(-9.8)(-13.48) = 264.21$$

$$v = -\sqrt{264.21} \approx -16.26\;\mathrm{m\,s^{-1}}$$

The negative sign confirms downward motion. Speed $= 16.3\;\mathrm{m\,s^{-1}}$ (3 s.f.).

:::info
Note that the total time of flight can also be found directly: $s = -2$, $u = 15$, $a = -9.8$:
$-2 = 15t - 4.9t^2$, giving $t \approx 3.15\;\mathrm{s}$. This is **not** $2 \times t_{\mathrm{max}}$
because the ball was thrown from a height, not from ground level.
:::

<hr />

## 3. Projectile Motion

### 3.1 Resolving into horizontal and vertical components

For a projectile launched with speed $u$ at angle $\theta$ above the horizontal:

$$u_x = u\cos\theta, \qquad u_y = u\sin\theta$$

The key principle is that **horizontal and vertical motion are independent**:

- Horizontal: constant velocity (no acceleration, neglecting air resistance).
- Vertical: uniform acceleration $g$ downward.

### 3.2 Position as a function of time

Taking the launch point as the origin, with upward as positive:

$$x = u\cos\theta \cdot t \tag{horizontal}$$

$$y = u\sin\theta \cdot t - \frac{1}{2}gt^2 \tag{vertical}$$

### 3.3 The trajectory equation

Eliminating $t$ from the parametric equations:

$$t = \frac{x}{u\cos\theta}$$

$$y = u\sin\theta \cdot \frac{x}{u\cos\theta} - \frac{1}{2}g\!\left(\frac{x}{u\cos\theta}\right)^{\!2}$$

$$\boxed{y = x\tan\theta - \frac{gx^2}{2u^2\cos^2\theta}}$$

This is the equation of a **parabola**, confirming that the trajectory of a projectile (under
constant gravity with no air resistance) is parabolic.

### 3.4 Key results

**Time of flight** (landing at the same height): Setting $y = 0$:

$$t = \frac{2u\sin\theta}{g}$$

**Maximum height:**

$$H = \frac{u^2\sin^2\theta}{2g}$$

**Range:**

$$R = \frac{u^2\sin 2\theta}{g}$$

**Maximum range** occurs when $\sin 2\theta = 1$, i.e. $\theta = 45^\circ$, giving $R_{\max} = \dfrac{u^2}{g}$.

### 3.5 Proof that complementary angles give the same range

If $\theta_1 + \theta_2 = 90^\circ$, then $\sin 2\theta_1 = \sin(180^\circ - 2\theta_2) = \sin 2\theta_2$.

Therefore $R(\theta_1) = R(\theta_2)$.

### 3.6 Worked example

**Problem.** A cricketer hits a ball at $25\;\mathrm{m\,s^{-1}}$ at $35^\circ$ above the horizontal
from a height of $1.5\;\mathrm{m}$. Taking $g = 9.8\;\mathrm{m\,s^{-2}}$, find the horizontal distance
travelled before the ball hits the ground.

$u_x = 25\cos 35^\circ \approx 20.48\;\mathrm{m\,s^{-1}}$

$u_y = 25\sin 35^\circ \approx 14.34\;\mathrm{m\,s^{-1}}$

When the ball hits the ground, $y = -1.5\;\mathrm{m}$:

$$-1.5 = 14.34t - 4.9t^2$$

$$4.9t^2 - 14.34t - 1.5 = 0$$

$$t = \frac{14.34 \pm \sqrt{14.34^2 + 4(4.9)(1.5)}}{2(4.9)} = \frac{14.34 \pm \sqrt{205.64 + 29.4}}{9.8}$$

$$t = \frac{14.34 + 15.38}{9.8} \approx 3.025\;\mathrm{s} \quad (\mathrm{taking\ the\ positive\ root})$$

$$x = 20.48 \times 3.025 \approx 61.95\;\mathrm{m}$$

The ball travels approximately $62.0\;\mathrm{m}$ horizontally.

:::warning Common Pitfall
When a projectile is launched from a height above the landing level, the trajectory is **not**
symmetric. The time of ascent is less than the time of descent, and the landing angle is steeper
than the launch angle.
:::

<hr />

## 4. Two-Dimensional Motion with Non-Perpendicular Components

### 4.1 Resolving along arbitrary directions

Sometimes it is convenient to resolve velocity or acceleration along non-horizontal/vertical
directions, such as parallel and perpendicular to an inclined plane.

For an inclined plane at angle $\alpha$ to the horizontal:

- **Parallel to the plane:** $a_{\parallel} = g\sin\alpha$ (down the plane)
- **Perpendicular to the plane:** $a_{\perp} = g\cos\alpha$ (into the plane)

### 4.2 Worked example: projectile on an inclined plane

**Problem.** A particle is projected up a plane inclined at $30^\circ$ to the horizontal with
speed $20\;\mathrm{m\,s^{-1}}$ at an angle of $50^\circ$ to the horizontal. Taking $g = 9.8\;\mathrm{m\,s^{-1}}$,
find the distance travelled up the plane before the particle lands on it.

Resolve parallel and perpendicular to the plane. The angle of projection relative to the plane is
$50^\circ - 30^\circ = 20^\circ$.

Parallel to plane: $u_{\parallel} = 20\cos 20^\circ \approx 18.79\;\mathrm{m\,s^{-1}}$

$$a_{\parallel} = -g\sin 30^\circ = -4.9\;\mathrm{m\,s^{-2}}$$

Perpendicular to plane: $u_{\perp} = 20\sin 20^\circ \approx 6.84\;\mathrm{m\,s^{-1}}$

$$a_{\perp} = -g\cos 30^\circ = -8.49\;\mathrm{m\,s^{-2}}$$

Time of flight: the particle lands when its perpendicular displacement returns to zero.

$$s_{\perp} = u_{\perp}t + \tfrac{1}{2}a_{\perp}t^2 = 0$$

$$t\!\left(6.84 - 4.245t\right) = 0 \implies t = \frac{6.84}{4.245} \approx 1.611\;\mathrm{s}$$

Distance up the plane:

$$s_{\parallel} = 18.79(1.611) + \tfrac{1}{2}(-4.9)(1.611)^2 = 30.27 - 6.36 \approx 23.9\;\mathrm{m}$$

<hr />

## 5. Variable Acceleration

### 5.1 Using calculus for non-constant acceleration

When acceleration is not constant, the SUVAT equations do not apply. Instead, we use the calculus
relationships:

$$v = \frac{ds}{dt}, \qquad a = \frac{dv}{dt} = \frac{d^2s}{dt^2} = v\frac{dv}{ds}$$

$$s = \int v\,dt, \qquad v = \int a\,dt$$

The chain rule form $a = v\,\dfrac{dv}{ds}$ is particularly useful when acceleration is given as a
function of displacement rather than time.

### 5.2 Derivation of $a = v\,\dfrac{dv}{ds}$

By the chain rule:

$$a = \frac{dv}{dt} = \frac{dv}{ds} \cdot \frac{ds}{dt} = \frac{dv}{ds} \cdot v$$

This allows us to solve problems where $a = f(s)$ by separating variables:

$$v\,dv = a\,ds \implies \int v\,dv = \int a\,ds \implies \frac{1}{2}v^2 = \int a\,ds + C$$

### 5.3 Worked example: $a = f(t)$

**Problem.** A particle moves in a straight line with acceleration $a = 6t - 2t^2\;\mathrm{m\,s^{-2}}$.
At $t = 0$, $v = 3\;\mathrm{m\,s^{-1}}$ and $s = 0$. Find the distance travelled in the first
$4$ seconds.

$$v = \int (6t - 2t^2)\,dt = 3t^2 - \frac{2}{3}t^3 + C$$

When $t = 0$, $v = 3$: $C = 3$.

$$v = 3t^2 - \frac{2}{3}t^3 + 3$$

Check if the particle changes direction (i.e. $v = 0$):

$$3t^2 - \frac{2}{3}t^3 + 3 = 0 \implies 9t^2 - 2t^3 + 9 = 0$$

By inspection or numerical methods, $v \gt 0$ for all $t \geq 0$ (since $9t^2 + 9 \gt 2t^3$ for
$0 \leq t \leq 4$).

$$s = \int_0^4 \!\left(3t^2 - \frac{2}{3}t^3 + 3\right)dt = \left[t^3 - \frac{1}{6}t^4 + 3t\right]_0^4$$

$$s = 64 - \frac{256}{6} + 12 = 64 - 42.67 + 12 = 33.33\;\mathrm{m}$$

### 5.4 Worked example: $a = f(v)$

**Problem.** A particle moves with acceleration $a = -0.1v^2\;\mathrm{m\,s^{-2}}$. Initially
$v = 10\;\mathrm{m\,s^{-1}}$. Find an expression for $v$ in terms of $t$.

Since $a = \dfrac{dv}{dt}$:

$$\frac{dv}{dt} = -0.1v^2$$

Separating variables:

$$\int \frac{1}{v^2}\,dv = \int -0.1\,dt$$

$$-\frac{1}{v} = -0.1t + C$$

When $t = 0$, $v = 10$: $-\dfrac{1}{10} = C$.

$$-\frac{1}{v} = -0.1t - \frac{1}{10}$$

$$\frac{1}{v} = 0.1t + 0.1 = 0.1(t + 1)$$

$$v = \frac{10}{t + 1}\;\mathrm{m\,s^{-1}}$$

:::warning Common Pitfall
For variable acceleration problems, **always include the constant of integration** and use the
initial conditions to find it. Also check whether the particle changes direction by finding when
$v = 0$ -- the total distance is not the same as the displacement if there is a change of
direction.
:::

<hr />

## 6. Practice Problems

### Problem 1

A train decelerates uniformly from $40\;\mathrm{m\,s^{-1}}$ to rest over a distance of $800\;\mathrm{m}$.
Find the deceleration and the time taken.

<details>
<summary>Solution</summary>

Using $v^2 = u^2 + 2as$:

$$0 = 1600 + 2a(800) \implies a = -1\;\mathrm{m\,s^{-2}}$$

$$t = \frac{v - u}{a} = \frac{-40}{-1} = 40\;\mathrm{s}$$

</details>

### Problem 2

A projectile is launched from ground level at $30\;\mathrm{m\,s^{-1}}$ at $60^\circ$ to the horizontal.
Taking $g = 9.8\;\mathrm{m\,s^{-2}}$, find the maximum height and the range.

<details>
<summary>Solution</summary>

$$H = \frac{u^2\sin^2\theta}{2g} = \frac{900 \times 0.75}{19.6} = \frac{675}{19.6} \approx 34.4\;\mathrm{m}$$

$$R = \frac{u^2\sin 2\theta}{g} = \frac{900 \times \sin 120^\circ}{9.8} = \frac{900 \times 0.866}{9.8} \approx 79.6\;\mathrm{m}$$

</details>

### Problem 3

A particle moves with acceleration $a = 12t\;\mathrm{m\,s^{-2}}$. At $t = 0$, it is at rest at the
origin. Find its displacement when $t = 3\;\mathrm{s}$.

<details>
<summary>Solution</summary>

$$v = \int 12t\,dt = 6t^2 + C_1$$

When $t = 0$, $v = 0$: $C_1 = 0$, so $v = 6t^2$.

$$s = \int 6t^2\,dt = 2t^3 + C_2$$

When $t = 0$, $s = 0$: $C_2 = 0$, so $s = 2t^3$.

At $t = 3$: $s = 2(27) = 54\;\mathrm{m}$.

</details>

### Problem 4

A stone is thrown horizontally at $8\;\mathrm{m\,s^{-1}}$ from the top of a cliff $60\;\mathrm{m}$ high.
Taking $g = 9.8\;\mathrm{m\,s^{-2}}$, find the horizontal distance from the base of the cliff where the
stone lands, and the velocity (magnitude and direction) at impact.

<details>
<summary>Solution</summary>

Vertical: $s = -60$, $u_y = 0$, $a = -9.8$.

$$-60 = 0 - \frac{1}{2}(9.8)t^2 \implies t = \sqrt{\frac{120}{9.8}} \approx 3.50\;\mathrm{s}$$

Horizontal: $x = 8 \times 3.50 = 28.0\;\mathrm{m}$.

At impact: $v_y = -9.8 \times 3.50 = -34.3\;\mathrm{m\,s^{-1}}$, $v_x = 8\;\mathrm{m\,s^{-1}}$.

$$|\mathbf{v}| = \sqrt{8^2 + 34.3^2} = \sqrt{64 + 1176.5} \approx 35.2\;\mathrm{m\,s^{-1}}$$

Angle below horizontal: $\theta = \arctan\!\left(\dfrac{34.3}{8}\right) \approx 76.9^\circ$.

</details>

### Problem 5

A particle moves in a straight line so that its acceleration is given by $a = 4 - 2s\;\mathrm{m\,s^{-2}}$,
where $s$ is the displacement from a fixed point. When $s = 0$, $v = 2\;\mathrm{m\,s^{-1}}$. Find the
maximum displacement.

<details>
<summary>Solution</summary>

Using $a = v\,\dfrac{dv}{ds}$:

$$v\,\frac{dv}{ds} = 4 - 2s$$

Integrating:

$$\int v\,dv = \int (4 - 2s)\,ds$$

$$\frac{1}{2}v^2 = 4s - s^2 + C$$

When $s = 0$, $v = 2$: $\dfrac{1}{2}(4) = 0 + C \implies C = 2$.

$$\frac{1}{2}v^2 = 4s - s^2 + 2$$

Maximum displacement when $v = 0$:

$$0 = 4s - s^2 + 2 \implies s^2 - 4s - 2 = 0$$

$$s = \frac{4 \pm \sqrt{16 + 8}}{2} = \frac{4 \pm \sqrt{24}}{2} = 2 \pm \sqrt{6}$$

Taking the positive root: $s_{\max} = 2 + \sqrt{6} \approx 4.45\;\mathrm{m}$.

</details>
