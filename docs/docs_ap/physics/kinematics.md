---
title: Kinematics
date: 2026-04-14
tags:
  - Physics
  - AP
categories:
  - Physics
slug: kinematics
---

## Displacement, Velocity, and Acceleration (CED Unit 1)

Kinematics describes the motion of objects without considering the forces that cause motion.

### Scalar vs Vector Quantities

| Quantity     | Type   | Description                                        |
| ------------ | ------ | -------------------------------------------------- |
| Displacement | Vector | Change in position, $\Delta \vec{r}$               |
| Distance     | Scalar | Total path length traveled                         |
| Velocity     | Vector | Rate of change of displacement                     |
| Speed        | Scalar | Rate of change of distance (magnitude of velocity) |
| Acceleration | Vector | Rate of change of velocity                         |

### Definitions Using Calculus

For position $\vec{r}(t)$:

$$
\vec{v}(t) = \frac{d\vec{r}}{dt}
$$

$$
\vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}
$$

Conversely, by integration:

$$
\vec{v}(t) = \vec{v}_0 + \int_0^t \vec{a}(t')\, dt'
$$

$$
\vec{r}(t) = \vec{r}_0 + \int_0^t \vec{v}(t')\, dt'
$$

## One-Dimensional Kinematics

### Constant Acceleration Equations

When acceleration $a$ is constant, integrating twice yields:

$$
v(t) = v_0 + at
$$

$$
x(t) = x_0 + v_0 t + \frac{1}{2}at^2
$$

$$
v^2 = v_0^2 + 2a(x - x_0)
$$

$$
x - x_0 = \frac{v_0 + v}{2} t
$$

### Derivation from Calculus

Starting from $a = \frac{dv}{dt} = \text{const}$:

$$
\int_{v_0}^{v} dv' = \int_0^t a\, dt' \implies v - v_0 = at \implies v = v_0 + at
$$

Then $v = \frac{dx}{dt}$:

$$
\int_{x_0}^{x} dx' = \int_0^t (v_0 + at')\, dt' \implies x - x_0 = v_0 t + \frac{1}{2}at^2
$$

:::info[Example]

A car accelerates uniformly from rest at $3.0 \text{ m/s}^2$ for 5.0 s. Find the distance traveled.

$$
x = 0 + 0 \cdot 5.0 + \frac{1}{2}(3.0)(5.0)^2 = \frac{1}{2}(3.0)(25) = 37.5 \text{ m}
$$

:::

## Free Fall

Near Earth's surface, the acceleration due to gravity is approximately:

$$
g \approx 9.8 \text{ m/s}^2 \approx 32 \text{ ft/s}^2
$$

directed downward. In the standard coordinate system (upward positive), $a = -g$.

### Equations of Free Fall

$$
v = v_0 - gt
$$

$$
y = y_0 + v_0 t - \frac{1}{2}gt^2
$$

$$
v^2 = v_0^2 - 2g(y - y_0)
$$

:::info[Example]

A ball is thrown upward from ground level with initial velocity $20 \text{ m/s}$. Find the maximum
height and the total time in the air.

**Maximum height:** At the peak, $v = 0$.

$$
v^2 = v_0^2 - 2g(y - y_0) \implies 0 = (20)^2 - 2(9.8)y \implies y = \frac{400}{19.6} \approx 20.4 \text{ m}
$$

**Time in air:** The ball returns to $y = 0$:

$$
0 = 20t - \frac{1}{2}(9.8)t^2 \implies t(20 - 4.9t) = 0 \implies t = \frac{20}{4.9} \approx 4.08 \text{ s}
$$

:::

## Two-Dimensional Kinematics (Projectile Motion) (CED Unit 1)

In projectile motion, the horizontal and vertical motions are independent.

### Horizontal Motion (constant velocity, no acceleration)

$$
x(t) = x_0 + v_{0x} t = x_0 + (v_0 \cos\theta) t
$$

$$
v_x(t) = v_0 \cos\theta \quad \text{(constant)}
$$

### Vertical Motion (free fall)

$$
y(t) = y_0 + v_{0y} t - \frac{1}{2}gt^2 = y_0 + (v_0 \sin\theta) t - \frac{1}{2}gt^2
$$

$$
v_y(t) = v_0 \sin\theta - gt
$$

### Key Results

- **Time to reach maximum height:** $\displaystyle t_{\text{up}} = \frac{v_0 \sin\theta}{g}$
- **Maximum height:** $\displaystyle H = \frac{(v_0 \sin\theta)^2}{2g}$
- **Total time of flight:** $\displaystyle T = \frac{2v_0 \sin\theta}{g}$
- **Range:** $\displaystyle R = \frac{v_0^2 \sin 2\theta}{g}$
- **Maximum range** (for fixed $v_0$): achieved at $\theta = 45^\circ$

### Proof of the Range Formula

The projectile lands when $y = 0$:

$$
0 = (v_0 \sin\theta) T - \frac{1}{2}gT^2 \implies T = \frac{2v_0 \sin\theta}{g}
$$

The horizontal distance at time $T$:

$$
R = (v_0 \cos\theta) T = (v_0 \cos\theta) \cdot \frac{2v_0 \sin\theta}{g} = \frac{v_0^2 \cdot 2\sin\theta \cos\theta}{g} = \frac{v_0^2 \sin 2\theta}{g}
$$

using the double-angle identity $\sin 2\theta = 2\sin\theta \cos\theta$.

:::info[Example]

A projectile is launched at $50 \text{ m/s}$ at $37^\circ$ above horizontal from ground level. Find
the range and maximum height.

$\cos 37^\circ \approx 0.8$, $\sin 37^\circ \approx 0.6$.

**Range:**

$$
R = \frac{(50)^2 \sin 74^\circ}{9.8} = \frac{2500 \times 0.9613}{9.8} \approx 245.2 \text{ m}
$$

**Maximum height:**

$$
H = \frac{(50 \times 0.6)^2}{2 \times 9.8} = \frac{900}{19.6} \approx 45.9 \text{ m}
$$

:::

## Position, Velocity, and Acceleration as Graphs (CED Unit 1)

### From Graphs

- The **slope** of a position-time graph gives velocity.
- The **slope** of a velocity-time graph gives acceleration.
- The **area under** a velocity-time graph gives displacement.
- The **area under** an acceleration-time graph gives the change in velocity.

### Qualitative Analysis

- **Positive slope on $x$-vs-$t$:** moving in the positive direction.
- **Zero slope on $x$-vs-$t$:** at rest.
- **Negative slope on $x$-vs-$t$:** moving in the negative direction.
- **Curvature on $x$-vs-$t$:** indicates acceleration (concave up = positive $a$, concave down =
  negative $a$).

## Uniform Circular Motion (CED Unit 3)

An object moving in a circle of radius $r$ at constant speed $v$ has:

- **Centripetal acceleration:** $\displaystyle a_c = \frac{v^2}{r}$ directed toward the center of
  the circle.
- **Period:** $\displaystyle T = \frac{2\pi r}{v}$
- **Frequency:** $\displaystyle f = \frac{1}{T} = \frac{v}{2\pi r}$

### Angular Quantities

$$
\omega = \frac{d\theta}{dt} = \frac{v}{r}
$$

$$
a_c = \omega^2 r = \frac{v^2}{r}
$$

### Derivation of Centripetal Acceleration

Consider a particle moving at constant speed $v$ on a circle of radius $r$. Over a small time
interval $\Delta t$, the velocity vector changes direction by angle $\Delta\theta$ while maintaining
magnitude $v$.

The change in velocity $\Delta\vec{v}$ is perpendicular to $\vec{v}$ and has magnitude:

$$
|\Delta\vec{v}| = v \cdot \Delta\theta
$$

Since $\Delta\theta = \frac{v \Delta t}{r}$:

$$
|\Delta\vec{v}| = v \cdot \frac{v \Delta t}{r} = \frac{v^2 \Delta t}{r}
$$

The centripetal acceleration is:

$$
a_c = \lim_{\Delta t \to 0} \frac{|\Delta\vec{v}|}{\Delta t} = \frac{v^2}{r}
$$

:::info[Example]

A car rounds a curve of radius 50 m at $15 \text{ m/s}$. What is its centripetal acceleration?

$$
a_c = \frac{v^2}{r} = \frac{(15)^2}{50} = \frac{225}{50} = 4.5 \text{ m/s}^2
$$

:::

## Non-Uniform Acceleration (AP Physics C)

When acceleration is not constant, use calculus.

:::info[Example]

The velocity of a particle is $v(t) = 3t^2 - 6t + 2 \text{ m/s}$. Find the displacement from $t = 0$
to $t = 3$ s and the acceleration at $t = 2$ s.

**Displacement:**

$$
\Delta x = \int_0^3 v(t)\, dt = \int_0^3 (3t^2 - 6t + 2)\, dt = \left[t^3 - 3t^2 + 2t\right]_0^3 = 27 - 27 + 6 = 6 \text{ m}
$$

**Acceleration:**

$$
a(t) = \frac{dv}{dt} = 6t - 6 \implies a(2) = 6(2) - 6 = 6 \text{ m/s}^2
$$

:::

## Relative Motion

In one dimension with two reference frames $S$ and $S'$, where $S'$ moves with velocity $v_{S'/S}$
relative to $S$:

$$
\vec{v}_{P/S} = \vec{v}_{P/S'} + \vec{v}_{S'/S}
$$

This is the **Galilean velocity addition** formula.

:::info[Example]

A boat heads directly across a river 100 m wide at $4 \text{ m/s}$ relative to the water. The river
flows at $3 \text{ m/s}$. How far downstream does the boat land?

The boat's velocity relative to the shore has two components:

$$
v_x = 3 \text{ m/s} \quad \text{(downstream)}, \qquad v_y = 4 \text{ m/s} \quad \text{(across)}
$$

Time to cross: $\displaystyle t = \frac{100}{4} = 25 \text{ s}$.

Downstream distance: $d = 3 \times 25 = 75 \text{ m}$.

:::

## Common Pitfalls

1. **Confusing displacement with distance.** Displacement is a vector (net change in position);
   distance is a scalar (total path length).
2. **Ignoring the sign convention.** In free fall, choosing "up as positive" means $a = -g$. Be
   consistent throughout the problem.
3. **Treating horizontal and vertical components as dependent.** In projectile motion, the
   horizontal motion has constant velocity (no horizontal acceleration, ignoring air resistance).
4. **Using the constant acceleration equations when acceleration is not constant.** Use calculus
   (integration) instead.
5. **Confusing speed and velocity.** Speed is the magnitude of velocity. An object can have constant
   speed but changing velocity (e.g., uniform circular motion).
6. **Forgetting that centripetal acceleration changes direction, not speed.** In uniform circular
   motion, the speed is constant but the velocity vector changes direction continuously.
7. **Incorrectly applying the range formula** when the launch and landing heights differ.

## Practice Questions

1. A ball is dropped from a height of 80 m. How long does it take to reach the ground, and what is
   its speed at impact?

2. A projectile is launched from a cliff 60 m high at $30 \text{ m/s}$ at $40^\circ$ above
   horizontal. Find the time of flight and the horizontal range.

3. A particle has acceleration $a(t) = 6t \text{ m/s}^2$ with initial velocity
   $v(0) = -4 \text{ m/s}$ and initial position $x(0) = 2 \text{ m}$. Find $v(t)$, $x(t)$, and the
   displacement from $t = 0$ to $t = 3$.

4. A car accelerates from rest at $2.0 \text{ m/s}^2$ for 200 m. What is its final velocity?

5. An object moves along the $x$-axis with velocity $v(t) = t^3 - 6t^2 + 9t$. Find the total
   distance traveled from $t = 0$ to $t = 5$.

6. A satellite orbits Earth at an altitude of 300 km in a circular orbit. If the orbital period is
   90.5 minutes, find the orbital speed and centripetal acceleration. (Earth's radius = $6371$ km.)

7. A swimmer can swim at $2.0 \text{ m/s}$ in still water. She needs to cross a river 50 m wide
   flowing at $1.5 \text{ m/s}$. At what angle upstream should she head to land directly across?

8. Derive the formula for the maximum height of a projectile using calculus.
