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

### Why Calculus Is the Natural Language of Kinematics

Velocity is the derivative of position. Acceleration is the derivative of velocity. These are not
empirical observations; they are the definitions of velocity and acceleration. The kinematic
equations are simply the results of integrating constant acceleration once (to get velocity) and
twice (to get position). Every result in kinematics follows from these definitions plus the
assumption of constant acceleration. If you understand the calculus, you understand the kinematics.

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

### Eliminating Time: The $v^2$ Equation

To eliminate $t$ from the first two equations, substitute $t = (v - v_0)/a$ into the position
equation:

$$
x - x_0 = v_0 \frac{v - v_0}{a} + \frac{1}{2}a\left(\frac{v - v_0}{a}\right)^2
$$

$$
x - x_0 = \frac{v_0 v - v_0^2}{a} + \frac{v^2 - 2v_0 v + v_0^2}{2a}
$$

$$
2a(x - x_0) = 2v_0 v - 2v_0^2 + v^2 - 2v_0 v + v_0^2 = v^2 - v_0^2
$$

$$
v^2 = v_0^2 + 2a(x - x_0)
$$

This equation is useful because it relates velocity and displacement without requiring the time.

:::info[Example]

A car accelerates uniformly from rest at $3.0 \text{ m/s}^2$ for 5.0 s. Find the distance traveled.

$$
x = 0 + 0 \cdot 5.0 + \frac{1}{2}(3.0)(5.0)^2 = \frac{1}{2}(3.0)(25) = 37.5 \text{ m}
$$

:::

### When to Use Each Equation

Each of the four kinematic equations relates a different subset of the five variables ($v$, $v_0$,
$a$, $t$, $x - x_0$). Choose the equation that contains the variables you know and the variable you
need to find:

| Known variables        | Use equation                        |
| ---------------------- | ----------------------------------- |
| $v_0$, $a$, $t$        | $v = v_0 + at$                      |
| $v_0$, $a$, $t$        | $x - x_0 = v_0 t + \frac{1}{2}at^2$ |
| $v_0$, $a$, $\Delta x$ | $v^2 = v_0^2 + 2a\Delta x$          |
| $v_0$, $v$, $t$        | $\Delta x = \frac{v_0 + v}{2} t$    |

The variable that does _not_ appear in each equation tells you when to use it.

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

### Symmetry of Free Fall

An object thrown upward and an object dropped from the same height take the same time to reach the
ground (if air resistance is negligible). This is because the motion is symmetric about the peak:
the time to rise equals the time to fall, and the speed at any height on the way up equals the speed
at the same height on the way down. The symmetry is a direct consequence of the equations being
quadratic in $t$.

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

### Why Horizontal and Vertical Motions Are Independent

The horizontal component of velocity has no effect on the vertical acceleration (which is always
$g$, downward), and vice versa. This is because the gravitational force acts only vertically. There
is no horizontal force (ignoring air resistance), so the horizontal acceleration is zero. The two
components of motion are completely decoupled, and can be analyzed separately using the same
kinematic equations.

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

### Why Maximum Range Is at 45 Degrees

The range $R = (v_0^2/g)\sin 2\theta$ is maximized when $\sin 2\theta$ is maximized, i.e., when
$2\theta = 90^{\circ}$, giving $\theta = 45^{\circ}$. Complementary angles give the same range:
$\sin 2\theta = \sin 2(90^{\circ} - \theta)$. A projectile launched at $30^{\circ}$ and one launched
at $60^{\circ}$ with the same speed will travel the same horizontal distance, but the $60^{\circ}$
launch goes higher and stays in the air longer.

### The Trajectory Is a Parabola

Eliminating $t$ from the horizontal and vertical equations:

$$
t = \frac{x}{v_0 \cos\theta}
$$

$$
y = x\tan\theta - \frac{gx^2}{2v_0^2\cos^2\theta}
$$

This is a quadratic in $x$, so the trajectory is a parabola. The negative coefficient of $x^2$
confirms that the parabola opens downward.

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

### Projectile from a Height

When a projectile is launched from a height $h$ above the landing level, the time of flight is
longer than $2v_0\sin\theta/g$ because the projectile must travel further vertically. There is no
simple closed-form formula for the range in this case; instead, find $t$ from the quadratic
$y(t) = 0$, then compute $R = v_0\cos\theta \cdot t$.

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

### Inflection Points and Velocity Extrema

On an $x$-vs-$t$ graph, an inflection point (where the curvature changes sign) corresponds to zero
acceleration. This is the point where the velocity graph crosses its extremum (maximum or minimum).
At this instant, the object is changing from speeding up to slowing down (or vice versa).

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

### Why Centripetal Acceleration Does Not Change Speed

Centripetal acceleration is always perpendicular to the velocity. Since the dot product
$\vec{a}_c \cdot \vec{v} = 0$, the power delivered is $P = \vec{F} \cdot \vec{v} = 0$, and the
kinetic energy $\frac{1}{2}mv^2$ is constant. The speed does not change; only the direction of the
velocity vector changes. This is why "centripetal" means "centre-seeking" -- the acceleration always
points toward the center, never along the velocity.

:::info[Example]

A car rounds a curve of radius 50 m at $15 \text{ m/s}$. What is its centripetal acceleration?

$$
a_c = \frac{v^2}{r} = \frac{(15)^2}{50} = \frac{225}{50} = 4.5 \text{ m/s}^2
$$

:::

## Non-Uniform Acceleration (AP Physics C)

When acceleration is not constant, use calculus.

### Velocity from Variable Acceleration

$$
v(t) = v_0 + \int_0^t a(t')\, dt'
$$

### Position from Variable Velocity

$$
x(t) = x_0 + \int_0^t v(t')\, dt'
$$

### Displacement as Area Under the Curve

When $a(t)$ or $v(t)$ is given graphically rather than analytically, the displacement can be found
by computing the area under the $v$-vs-$t$ curve. For non-linear curves, this requires numerical
integration (counting squares, the trapezoidal rule, or Simpson's rule).

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

### Worked Example: Reversing the Problem

A particle has acceleration $a(t) = 12t$ m/s$^2$, initial velocity $v(0) = 5$ m/s, and initial
position $x(0) = 0$. Find $v(t)$ and $x(t)$.

$$
v(t) = v(0) + \int_0^t 12t'\, dt' = 5 + 6t^2
$$

$$
x(t) = x(0) + \int_0^t (5 + 6t'^2)\, dt' = 5t + 2t^3
$$

## Relative Motion

In one dimension with two reference frames $S$ and $S'$, where $S'$ moves with velocity $v_{S'/S}$
relative to $S$:

$$
\vec{v}_{P/S} = \vec{v}_{P/S'} + \vec{v}_{S'/S}
$$

This is the **Galilean velocity addition** formula.

### Relative Motion in Two Dimensions

In two dimensions, the velocity addition is done component by component:

$$
v_{P/x} = v_{P/S'}\cos\alpha + v_{S'/S}\cos\beta
$$

$$
v_{P/y} = v_{P/S'}\sin\alpha + v_{S'/S}\sin\beta
$$

where $\alpha$ is the angle of the particle's velocity in frame $S'$ and $\beta$ is the angle of
frame $S'$ relative to frame $S$.

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

### Crossing the River Perpendicular to the Bank

To land directly across the river, the boat must angle upstream so that the downstream component of
its velocity relative to the water cancels the river current. If the boat has speed $v_b$ and the
river flows at $v_r$:

$$
\sin\theta = \frac{v_r}{v_b}
$$

where $\theta$ is the angle upstream from the perpendicular. This requires $v_b \gt v_r$; otherwise,
the boat cannot overcome the current.

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
8. **Forgetting that the kinematic equations assume constant acceleration.** If the problem involves
   variable acceleration (a spring, a pendulum, a rocket losing mass), you must use calculus.
9. **Mixing up initial and final values.** $v_0$ is the velocity at the start of the interval; $v$
   is the velocity at the end. Be careful about which instant each variable refers to.
10. **Assuming the maximum height occurs at half the total time.** This is only true when the launch
    and landing heights are the same.

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

9. A ball is thrown from the top of a 50 m building at $20 \text{ m/s}$ at $30^\circ$ below the
   horizontal. Find the time to hit the ground and the horizontal distance from the building.

10. The position of a particle is $x(t) = t^3 - 6t^2 + 9t + 1$ m. Find (a) the times when the
    particle is at rest, (b) the acceleration at each of those times, and (c) the total distance
    traveled between $t = 0$ and $t = 5$ s.

## Motion Graphs: Advanced Analysis

### Determining Velocity from a Displacement-Time Graph

For a curved $x$-vs-$t$ graph, the instantaneous velocity at any point is the gradient of the
tangent to the curve at that point. A straight-line section indicates constant velocity (zero
acceleration). A section that curves upward (concave up) indicates positive acceleration; a section
that curves downward (concave down) indicates negative acceleration.

### Worked Example: Interpreting a Velocity-Time Graph

A particle moves along the $x$-axis. Its velocity is given by $v(t) = 4t - t^2$ for $0 \le t \le 5$
s.

**Velocity at $t = 2$ s:** $v(2) = 8 - 4 = 4$ m/s.

**Acceleration:** $a(t) = \frac{dv}{dt} = 4 - 2t$. At $t = 2$: $a = 0$ (turning point of velocity).

**Displacement from $t = 0$ to $t = 4$:**

$$\Delta x = \int_0^4 (4t - t^2)\, dt = \left[2t^2 - \frac{t^3}{3}\right]_0^4 = 32 - \frac{64}{3} = 32 - 21.33 = 10.67 \text{ m}$$

**Total distance from $t = 0$ to $t = 5$:** The velocity is zero at $t = 0$ and $t = 4$. For
$0 \lt t \lt 4$, $v \gt 0$. For $4 \lt t \lt 5$, $v \lt 0$.

$$d = \int_0^4 (4t - t^2)\, dt + \left|\int_4^5 (4t - t^2)\, dt\right| = 10.67 + \left|\left[2t^2 - \frac{t^3}{3}\right]_4^5\right|$$

$$= 10.67 + \left|(50 - 41.67) - (32 - 21.33)\right| = 10.67 + |8.33 - 10.67| = 10.67 + 2.33 = 13.0 \text{ m}$$

## Uniform Circular Motion: Extended Analysis

### Period, Frequency, and Angular Velocity Relationships

For an object in uniform circular motion:

$$\omega = 2\pi f = \frac{2\pi}{T}, \qquad v = \frac{2\pi r}{T} = 2\pi rf, \qquad a_c = \frac{4\pi^2 r}{T^2} = \omega^2 r = \frac{v^2}{r}$$

### Worked Example: Geostationary Orbit

A geostationary satellite orbits above the equator with a period of 24 hours. Given Earth's radius
$R_E = 6.371 \times 10^6$ m and mass $M_E = 5.97 \times 10^{24}$ kg, find the altitude of the orbit.

$$T = 86400 \text{ s}$$

$$T^2 = \frac{4\pi^2 r^3}{GM}$$

$$r^3 = \frac{GMT^2}{4\pi^2} = \frac{6.674 \times 10^{-11} \times 5.97 \times 10^{24} \times 86400^2}{4\pi^2}$$

$$r^3 = \frac{2.987 \times 10^{24}}{39.48} = 7.566 \times 10^{22}$$

$$r = \sqrt[3]{7.566 \times 10^{22}} = 4.225 \times 10^7 \text{ m}$$

$$h = r - R_E = 4.225 \times 10^7 - 6.371 \times 10^6 = 3.588 \times 10^7 \text{ m} \approx 35880 \text{ km}$$

This is approximately 36000 km above Earth's surface, the standard geostationary orbit altitude.

## Non-Uniform Acceleration: Advanced Examples (AP Physics C)

### Worked Example: Position, Velocity, and Acceleration from a Single Function

The position of a particle is $x(t) = t^4 - 4t^3 + 6t^2$ m.

$$v(t) = \frac{dx}{dt} = 4t^3 - 12t^2 + 12t$$

$$a(t) = \frac{dv}{dt} = 12t^2 - 24t + 12 = 12(t^2 - 2t + 1) = 12(t-1)^2$$

The acceleration is always non-negative (it is zero at $t = 1$). The particle is never decelerating.

**Times when at rest:** $v(t) = 0 \implies 4t(t^2 - 3t + 3) = 0$. The quadratic $t^2 - 3t + 3 = 0$
has discriminant $9 - 12 = -3 \lt 0$, so the only solution is $t = 0$.

The particle is at rest only at $t = 0$.

### Worked Example: Piecewise-Defined Acceleration

A particle starts from rest. For $0 \le t \le 3$ s, $a = 6t$ m/s$^2$. For $t \gt 3$ s, $a = 0$.

**Phase 1 ($0 \le t \le 3$):**

$$v(t) = \int_0^t 6t'\, dt' = 3t^2$$

$$x(t) = \int_0^t 3t'^2\, dt' = t^3$$

At $t = 3$: $v = 27$ m/s, $x = 27$ m.

**Phase 2 ($t \gt 3$):** Constant velocity $v = 27$ m/s.

$$x(t) = 27 + 27(t - 3)$$

## Summary Table: Kinematic Equations

| Equation                            | Missing Variable | Best Used When                                      |
| ----------------------------------- | ---------------- | --------------------------------------------------- |
| $v = v_0 + at$                      | $x - x_0$        | You know initial velocity, acceleration, time       |
| $x - x_0 = v_0 t + \frac{1}{2}at^2$ | $v$              | You know initial velocity, acceleration, time       |
| $v^2 = v_0^2 + 2a(x - x_0)$         | $t$              | You know velocities and displacement                |
| $x - x_0 = \frac{v_0 + v}{2}t$      | $a$              | You know velocities and time (uniform acceleration) |

## Common Pitfalls: Extended

11. **Assuming that the magnitude of acceleration equals $g$ for objects thrown upward.** The
    magnitude is $g$ only when air resistance is negligible. With air resistance, the acceleration
    while going up is greater than $g$ (drag and gravity both act downward) and while coming down is
    less than $g$ (drag opposes gravity).

12. **Using the wrong reference frame in relative motion problems.** Always identify the observer's
    frame and the moving frame explicitly. Write the velocity addition formula carefully.

13. **Forgetting that in 2D projectile motion, the time determines everything.** Once you find the
    time of flight (from the vertical motion), you can find the horizontal range. You cannot find
    the range without first finding the time.

14. **Confusing angular displacement with linear displacement in circular motion problems.** Angular
    displacement $\theta$ is dimensionless (radians). Linear displacement $s = r\theta$ has units of
    metres.

15. **Assuming that $a = v^2/r$ applies when the speed is not constant.** The formula $a_c = v^2/r$
    gives only the centripetal component of acceleration. If the speed is changing, there is also a
    tangential component $a_t = dv/dt$.

## Practice Questions (Additional)

11. A particle moves along the $x$-axis with acceleration $a(t) = 8t - 6$ m/s$^2$. At $t = 0$, the
    particle is at $x = 2$ m with velocity $v = -3$ m/s. Find (a) the time when the particle is at
    rest, (b) the position at that time, and (c) the total distance traveled between $t = 0$ and
    $t = 3$ s.

12. A projectile is launched from ground level at $40 \text{ m/s}$. Find the two launch angles that
    give a range of $120 \text{ m}$.

13. A car accelerates from rest at $3 \text{ m/s}^2$ for $4 \text{ s}$, then travels at constant
    speed for $6 \text{ s}$, then decelerates uniformly to rest in $3 \text{ s}$. Find the total
    distance and draw a velocity-time graph.

14. Two boats leave the same point simultaneously. Boat A heads north at $6 \text{ m/s}$ and Boat B
    heads northeast at $8 \text{ m/s}$. Find the velocity of Boat A relative to Boat B.

15. An astronaut on the Moon throws a ball vertically upward at $15 \text{ m/s}$. Find the maximum
    height and total time in the air. ($g_{\text{Moon}} = 1.62 \text{ m/s}^2$.)

## Extended Worked Examples

### Example 16: Relative Motion in Two Dimensions

Airplane A flies north at $250 \text{ m/s}$. Airplane B flies at $200 \text{ m/s}$ on a heading of
$60^\circ$ east of north. Find the velocity of A relative to B.

**Step 1: Write velocity vectors**

$$\vec{v}_A = 250\hat{j} \text{ m/s}$$

$$\vec{v}_B = 200\sin 60°\hat{i} + 200\cos 60°\hat{j} = 173.2\hat{i} + 100\hat{j} \text{ m/s}$$

**Step 2: Relative velocity**

$$\vec{v}_{AB} = \vec{v}_A - \vec{v}_B = -173.2\hat{i} + (250 - 100)\hat{j} = -173.2\hat{i} + 150\hat{j} \text{ m/s}$$

**Step 3: Magnitude and direction**

$$|\vec{v}_{AB}| = \sqrt{173.2^2 + 150^2} = \sqrt{29998 + 22500} = \sqrt{52498} = 229.1 \text{ m/s}$$

$$\theta = \arctan\left(\frac{150}{-173.2}\right) = 180° - 40.9° = 139.1° \text{ from east}$$

So the velocity of A relative to B is $229.1 \text{ m/s}$ at $139.1^\circ$ from east (or $50.9^\circ$ west of
north).

### Example 17: Non-Uniform Acceleration from a Velocity Function

The velocity of a particle is given by $v(t) = t^3 - 6t^2 + 9t$ (m/s) for $0 \le t \le 5 \text{ s}$.

Find (a) when the particle is at rest, (b) the total distance travelled, and (c) the displacement.

**Step 1: Find when the particle is at rest**

$$v(t) = t^3 - 6t^2 + 9t = t(t^2 - 6t + 9) = t(t - 3)^2 = 0$$

$t = 0$ or $t = 3 \text{ s}$.

**Step 2: Determine the sign of $v$ between critical points**

- $0 \lt t \lt 3$: Test $t = 1$: $v = 1 - 6 + 9 = 4 \gt 0$ (moving forward)
- $t \gt 3$: Test $t = 4$: $v = 64 - 96 + 36 = 4 \gt 0$ (moving forward)

The particle never moves backward. The velocity is always non-negative (zero only at $t = 0$ and
$t = 3$).

**Step 3: Total distance = displacement (since $v \ge 0$ always)**

$$s(5) - s(0) = \int_0^5 (t^3 - 6t^2 + 9t) \, dt = \left[ \frac{t^4}{4} - 2t^3 + \frac{9t^2}{2} \right]_0^5$$

$$= \frac{625}{4} - 250 + \frac{225}{2} = 156.25 - 250 + 112.5 = 18.75 \text{ m}$$

**Step 4: Acceleration at key points**

$$a(t) = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t - 1)(t - 3)$$

At $t = 0$: $a = 9 \text{ m/s}^2$ (speeding up) At $t = 3$: $a = 3(9 - 12 + 3) = 0 \text{ m/s}^2$
(momentarily stationary, inflection point)

:::info
Even though the particle is stationary at $t = 3 \text{ s}$, the acceleration is also zero
there, so the particle does not reverse direction. Compare this to projectile motion at the top of
the trajectory where $v = 0$ but $a = g \ne 0$, so the projectile immediately starts moving
downward.
:::

### Example 18: Kinematics with Air Resistance

A $70 \text{ kg}$ skydiver falls from rest. The air resistance force is $F_D = kv^2$ where
$k = 0.25 \text{ kg/m}$. Calculate (a) the terminal velocity, (b) the velocity after $10 \text{ s}$,
and (c) the distance fallen after $10 \text{ s}$.

**Step 1: Terminal velocity**

At terminal velocity: $mg = kv_T^2$

$$v_T = \sqrt{\frac{mg}{k}} = \sqrt{\frac{70 \times 9.8}{0.25}} = \sqrt{2744} = 52.4 \text{ m/s}$$

**Step 2: Analytical solution**

The equation of motion is $m\frac{dv}{dt} = mg - kv^2$.

This has the solution:

$$v(t) = v_T \tanh\left(\frac{gt}{v_T}\right)$$

$$v(10) = 52.4 \times \tanh\left(\frac{9.8 \times 10}{52.4}\right) = 52.4 \times \tanh(1.870)$$

$$\tanh(1.870) = \frac{e^{3.74} - e^{-3.74}}{e^{3.74} + e^{-3.74}} = \frac{42.10 - 0.0238}{42.10 + 0.0238} = 0.9989$$

$$v(10) = 52.4 \times 0.9989 = 52.3 \text{ m/s}$$

The skydiver has essentially reached terminal velocity after $10 \text{ s}$.

**Step 3: Distance fallen**

$$y(t) = \frac{v_T^2}{g}\ln\left(\cosh\left(\frac{gt}{v_T}\right)\right)$$

$$y(10) = \frac{2744}{9.8}\ln(\cosh(1.870)) = 280 \times \ln(3.263) = 280 \times 1.183 = 331.2 \text{ m}$$

## Common Pitfalls Extended

### Pitfall 6: Using the Wrong Sign Convention in Free Fall

Always define your positive direction before solving. If upward is positive, then $a = -g$ and
displacements above the launch point are positive. Many errors come from mixing sign conventions
mid-problem, especially when combining horizontal and vertical components.

### Pitfall 7: Confusing Average Velocity with Average Speed

Average velocity $= \frac{\text{displacement}}{\text{time}}$ (a vector, can be zero for round
trips). Average speed $= \frac{\text{total distance}}{\text{time}}$ (a scalar, always positive).
They are equal only for motion in one direction without reversing.

### Pitfall 8: Assuming Graph Slopes Give Instantaneous Values Everywhere

The slope of a displacement-time graph gives instantaneous velocity. The slope of a velocity-time
graph gives instantaneous acceleration. However, for curved graphs, the slope changes continuously.
You must draw a tangent at the specific point to find the instantaneous value -- the average slope
between two points is not the same as the instantaneous slope.

## Additional Practice Problems

16. A ball is thrown upward from the top of a $50 \text{ m}$ building at $20 \text{ m/s}$. Calculate
    (a) the maximum height above ground, (b) the time to reach maximum height, (c) the total time in
    the air, and (d) the velocity just before impact with the ground.

17. A police car chasing a speeding motorist. The motorist passes at $30 \text{ m/s}$. The police
    car starts $2 \text{ s}$ later with acceleration $3 \text{ m/s}^2$. Calculate (a) when and where
    the police car catches the motorist, and (b) the speeds of both vehicles at that moment.

18. A projectile is launched from a cliff of height $80 \text{ m}$ at $50 \text{ m/s}$ at $40^\circ$
    above the horizontal. Calculate (a) the time of flight, (b) the maximum height above the launch
    point, (c) the horizontal range, and (d) the velocity (magnitude and direction) at impact.

19. Two trains approach each other on parallel tracks. Train A travels at $60 \text{ m/s}$ and Train
    B at $40 \text{ m/s}$. A bird flies at $80 \text{ m/s}$ from Train A to Train B and back
    repeatedly until the trains meet. If the trains are initially $2 \text{ km}$ apart, calculate
    the total distance the bird flies.

20. The position of a particle is given by $x(t) = 2t^3 - 9t^2 + 12t + 1$ (m). Find (a) the times
    when the particle changes direction, (b) the total distance travelled between $t = 0$ and
    $t = 4 \text{ s}$, and (c) the average velocity and average speed over this interval.
