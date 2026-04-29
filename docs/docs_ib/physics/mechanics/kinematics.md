---
title: Kinematics
description: IB Physics — motion, velocity, acceleration, projectiles, and kinematics
  equations.
slug: kinematics
---


## Fundamental Quantities

### Scalars and Vectors

| Scalar (magnitude only) | Vector (magnitude and direction) |
| ----------------------- | -------------------------------- |
| Distance                | Displacement                     |
| Speed                   | Velocity                         |
| Mass                    | Weight                           |
| Energy                  | Force                            |
| Temperature             | Acceleration                     |
| Time                    | Momentum                         |

### Distance and Displacement

- **Distance**: total path length travelled (scalar).
- **Displacement**: change in position from start to finish (vector).

### Speed and Velocity

- **Speed**: rate of change of distance. $s = \dfrac{d}{t}$
- **Velocity**: rate of change of displacement. $\vec{v} = \dfrac{\Delta \vec{s}}{\Delta t}$

### Acceleration

- **Acceleration**: rate of change of velocity. $\vec{a} = \dfrac{\Delta \vec{v}}{\Delta t}$

Average acceleration:

$$
\bar&lbrace;a&rbrace; = \frac&lbrace;v - u&rbrace;&lbrace;t&rbrace;
$$

Instantaneous acceleration is the derivative of velocity with respect to time.

---

## Kinematics Equations (SUVAT)

For motion with **constant acceleration** in a straight line:

| Equation                   | Variables    | Missing |
| -------------------------- | ------------ | ------- |
| $v = u + at$               | $v, u, a, t$ | $s$     |
| $s = ut + \frac{1}{2}at^2$ | $s, u, a, t$ | $v$     |
| $v^2 = u^2 + 2as$          | $v, u, a, s$ | $t$     |
| $s = \frac{1}{2}(u+v)t$    | $s, u, v, t$ | $a$     |

Where:

- $s$ = displacement
- $u$ = initial velocity
- $v$ = final velocity
- $a$ = acceleration
- $t$ = time

:::warning[Exam Tip]

SUVAT equations ONLY apply when acceleration is constant. If acceleration varies, you must use
calculus or other methods.

:::

:::info[Example]

A car accelerates from rest at $2\mathrm{ m/s}^2$ for $6$ seconds. Find the distance travelled.

$u = 0$, $a = 2$, $t = 6$.

$$
s = ut + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;at^2 = 0 + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(2)(36) = 36\mathrm&lbrace; m&rbrace;
$$

:::

:::info[Example]

A ball is thrown vertically upward at $15\mathrm{ m/s}$. Find the maximum height reached and the
time to reach it.

At maximum height, $v = 0$.

$$
v^2 = u^2 + 2as \implies 0 = 225 + 2(-9.81)s \implies s = \frac&lbrace;225&rbrace;&lbrace;19.62&rbrace; \approx 11.47\mathrm&lbrace; m&rbrace;
$$

$$
v = u + at \implies 0 = 15 - 9.81t \implies t = \frac&lbrace;15&rbrace;&lbrace;9.81&rbrace; \approx 1.53\mathrm&lbrace; s&rbrace;
$$

:::

---

## Displacement-Time Graphs

<PhetSimulation simulationId="the-moving-man" title="The Moving Man" />

Use this simulation to explore how displacement, velocity, and acceleration change as a man moves.
Try creating different motion scenarios and observe how the graphs relate to one another.

### Key Features

| Feature           | Interpretation                   |
| ----------------- | -------------------------------- |
| Gradient          | Velocity                         |
| Steeper gradient  | Greater speed                    |
| Horizontal line   | Object at rest                   |
| Positive gradient | Moving in positive direction     |
| Negative gradient | Moving in negative direction     |
| Curve             | Changing velocity (acceleration) |
| Area under graph  | No direct meaning                |

### Instantaneous Velocity

The instantaneous velocity at a point is the gradient of the tangent to the displacement-time graph
at that point.

---

## Velocity-Time Graphs

### Key Features

| Feature           | Interpretation               |
| ----------------- | ---------------------------- |
| Gradient          | Acceleration                 |
| Area under graph  | Displacement                 |
| Horizontal line   | Constant velocity            |
| Positive gradient | Accelerating                 |
| Negative gradient | Decelerating                 |
| Above $t$-axis    | Moving in positive direction |
| Below $t$-axis    | Moving in negative direction |
| Curve             | Changing acceleration        |

### Finding Displacement

The displacement is the area under the velocity-time graph. For areas below the time axis, the
contribution is negative.

:::info[Example]

A car travels at $20\mathrm{ m/s}$ for $5\mathrm{ s}$, then decelerates uniformly to rest in
$4\mathrm{ s}$.

**Total displacement**:

Rectangle: $20 \times 5 = 100\mathrm{ m}$.

Triangle: $\dfrac{1}{2} \times 20 \times 4 = 40\mathrm{ m}$.

Total $= 140\mathrm{ m}$.

**Total distance** $= 140\mathrm{ m}$ (no reversal).

**Average velocity** $= \dfrac{140}{9} \approx 15.6\mathrm{ m/s}$.

:::

---

## Free Fall

### Gravitational Acceleration

Near the Earth's surface, all objects in free fall accelerate at approximately:

$$
g \approx 9.81\mathrm&lbrace; m/s&rbrace;^2
$$

This value varies slightly with location and altitude.

### Key Results for Free Fall

- Objects dropped from rest: $u = 0$, $a = g$.
- Time to fall height $h$: $h = \dfrac{1}{2}gt^2 \implies t = \sqrt{\dfrac{2h}{g}}$.
- Speed after falling height $h$: $v = \sqrt{2gh}$.
- In the absence of air resistance, all objects fall at the same rate regardless of mass.

### Measuring $g$

**Method 1 — Free fall**: Drop an object from a known height and time the fall.

$$
g = \frac&lbrace;2h&rbrace;&lbrace;t^2&rbrace;
$$

**Method 2 — Pendulum**: Use a simple pendulum of length $L$ and period $T$.

$$
T = 2\pi\sqrt&lbrace;\frac&lbrace;L&rbrace;&lbrace;g&rbrace;&rbrace; \implies g = \frac&lbrace;4\pi^2 L&rbrace;&lbrace;T^2&rbrace;
$$

:::info[Example]

An object is dropped from a height of $45\mathrm{ m}$. Find the speed just before it hits the
ground.

$$
v^2 = u^2 + 2as = 0 + 2(9.81)(45) = 882.9
$$

$$
v = \sqrt&lbrace;882.9&rbrace; \approx 29.7\mathrm&lbrace; m/s&rbrace;
$$

:::

---

## Projectile Motion

### Principles

Projectile motion is the motion of an object launched into the air, subject only to gravity
(ignoring air resistance).

- The **horizontal** component of velocity is constant (no horizontal acceleration).
- The **vertical** component of motion is free fall (constant acceleration $g$ downward).

### Resolving Velocity

For a projectile launched at speed $u$ at angle $\theta$ to the horizontal:

$$
u_x = u\cos\theta, \quad u_y = u\sin\theta
$$

### Equations of Motion

**Horizontal** (constant velocity):

$$
x = u\cos\theta \cdot t
$$

$$
v_x = u\cos\theta \quad (\mathrm&lbrace;constant&rbrace;)
$$

**Vertical** (uniform acceleration):

$$
y = u\sin\theta \cdot t - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;gt^2
$$

$$
v_y = u\sin\theta - gt
$$

$$
v_y^2 = (u\sin\theta)^2 - 2gy
$$

### Time of Flight

At landing, $y = 0$ (assuming same level):

$$
0 = u\sin\theta \cdot t - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;gt^2
$$

$$
t = \frac&lbrace;2u\sin\theta&rbrace;&lbrace;g&rbrace;
$$

### Maximum Height

At maximum height, $v_y = 0$:

$$
H = \frac&lbrace;(u\sin\theta)^2&rbrace;&lbrace;2g&rbrace;
$$

### Range

$$
R = u\cos\theta \cdot t = u\cos\theta \cdot \frac&lbrace;2u\sin\theta&rbrace;&lbrace;g&rbrace; = \frac&lbrace;u^2 \sin 2\theta&rbrace;&lbrace;g&rbrace;
$$

### Maximum Range

The range is maximised when $\sin 2\theta = 1$, i.e., $\theta = 45\degree$:

$$
R_&lbrace;\max&rbrace; = \frac&lbrace;u^2&rbrace;&lbrace;g&rbrace;
$$

### Complementary Angles

For complementary angles $\theta$ and $(90\degree - \theta)$, the range is the same (but the
trajectories differ in height).

:::info[Example]

A ball is thrown at $20\mathrm{ m/s}$ at $30\degree$ above the horizontal from ground level.

**Time of flight**:

$$
t = \frac&lbrace;2(20)\sin 30\degree&rbrace;&lbrace;9.81&rbrace; = \frac&lbrace;2(20)(0.5)&rbrace;&lbrace;9.81&rbrace; = \frac&lbrace;20&rbrace;&lbrace;9.81&rbrace; \approx 2.04\mathrm&lbrace; s&rbrace;
$$

**Maximum height**:

$$
H = \frac&lbrace;(20\sin 30\degree)^2&rbrace;&lbrace;2(9.81)&rbrace; = \frac&lbrace;100&rbrace;&lbrace;19.62&rbrace; \approx 5.10\mathrm&lbrace; m&rbrace;
$$

**Range**:

$$
R = \frac&lbrace;(20)^2 \sin 60\degree&rbrace;&lbrace;9.81&rbrace; = \frac&lbrace;400 \times 0.866&rbrace;&lbrace;9.81&rbrace; \approx 35.3\mathrm&lbrace; m&rbrace;
$$

**Speed at maximum height**:

At maximum height, $v_y = 0$, so speed $= v_x = 20\cos 30\degree \approx 17.3\mathrm{ m/s}$.

:::

### Trajectory Equation

Eliminating $t$ from the horizontal and vertical equations:

$$
y = x\tan\theta - \frac&lbrace;gx^2&rbrace;&lbrace;2u^2\cos^2\theta&rbrace;
$$

This is a parabola, confirming that the trajectory of a projectile (without air resistance) is
parabolic.

---

## Air Resistance (Qualitative)

### Effects of Air Resistance

- Air resistance (drag) is a force that opposes the motion of an object through air.
- Drag force depends on: speed, cross-sectional area, shape, and air density.
- At low speeds, drag is approximately proportional to velocity: $F_d \propto v$.
- At higher speeds (turbulent flow), drag is approximately proportional to $v^2$.

### Effect on Free Fall

Without air resistance, all objects fall at the same rate. With air resistance:

- Objects reach a **terminal velocity** when drag equals weight.
- $F_d = mg$ at terminal velocity.
- Heavier objects (with same shape and size) have a higher terminal velocity.
- A skydiver reaches terminal velocity of about $55\mathrm{ m/s}$ (belly-down) or $90\mathrm{ m/s}$
  (head-down).

### Effect on Projectiles

Air resistance:

- Reduces the range.
- Reduces the maximum height.
- Makes the descent steeper than the ascent.
- Changes the trajectory from parabolic to asymmetric.

:::warning[Exam Tip]

In IB Physics, unless stated otherwise, ignore air resistance in calculations. When asked to
describe the effect qualitatively, remember that air resistance always opposes motion and reduces
the range and maximum height of projectiles.

:::

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

A car starts from rest and accelerates uniformly at $3\mathrm{ m/s}^2$ for $8\mathrm{ s}$. It then
travels at constant velocity for $12\mathrm{ s}$ and finally decelerates uniformly to rest in
$4\mathrm{ s}$.

**(a)** Find the total distance travelled.

Phase 1: $s_1 = \dfrac{1}{2}(3)(64) = 96\mathrm{ m}$. Final velocity $= 24\mathrm{ m/s}$.

Phase 2: $s_2 = 24 \times 12 = 288\mathrm{ m}$.

Phase 3: $s_3 = \dfrac{1}{2}(24)(4) = 48\mathrm{ m}$.

Total $= 96 + 288 + 48 = 432\mathrm{ m}$.

**(b)** Find the average speed.

Total time $= 8 + 12 + 4 = 24\mathrm{ s}$.

Average speed $= \dfrac{432}{24} = 18\mathrm{ m/s}$.

### Question 2 (Paper 2 style)

A stone is thrown horizontally from a cliff $80\mathrm{ m}$ high with a speed of $15\mathrm{ m/s}$.

**(a)** Find the time to reach the ground.

Vertical:
$h = \dfrac{1}{2}gt^2 \implies 80 = \dfrac{1}{2}(9.81)t^2 \implies t = \sqrt{\dfrac{160}{9.81}} \approx 4.04\mathrm{ s}$.

**(b)** Find the horizontal distance from the base of the cliff.

$$
x = 15 \times 4.04 = 60.6\mathrm&lbrace; m&rbrace;
$$

**(c)** Find the velocity (magnitude and direction) just before impact.

Horizontal: $v_x = 15\mathrm{ m/s}$ (constant).

Vertical: $v_y = gt = 9.81 \times 4.04 = 39.6\mathrm{ m/s}$.

$$
v = \sqrt&lbrace;15^2 + 39.6^2&rbrace; = \sqrt&lbrace;225 + 1568.2&rbrace; = \sqrt&lbrace;1793.2&rbrace; \approx 42.4\mathrm&lbrace; m/s&rbrace;
$$

$$
\theta = \arctan\!\left(\frac&lbrace;39.6&rbrace;&lbrace;15&rbrace;\right) = \arctan(2.64) \approx 69.3\degree \mathrm&lbrace; below horizontal&rbrace;
$$

### Question 3 (Paper 1 style)

A projectile is launched from ground level with speed $25\mathrm{ m/s}$ at an angle of $50\degree$
above the horizontal.

**(a)** Calculate the maximum height.

$$
H = \frac&lbrace;(25\sin 50\degree)^2&rbrace;&lbrace;2(9.81)&rbrace; = \frac&lbrace;(19.15)^2&rbrace;&lbrace;19.62&rbrace; = \frac&lbrace;366.7&rbrace;&lbrace;19.62&rbrace; \approx 18.7\mathrm&lbrace; m&rbrace;
$$

**(b)** Calculate the range.

$$
R = \frac&lbrace;25^2 \sin 100\degree&rbrace;&lbrace;9.81&rbrace; = \frac&lbrace;625 \times 0.9848&rbrace;&lbrace;9.81&rbrace; \approx 62.7\mathrm&lbrace; m&rbrace;
$$

### Question 4 (Paper 2 style)

A ball is dropped from rest from a height of $20\mathrm{ m}$. At the same instant, a second ball is
thrown vertically upward from the ground with speed $v$.

Determine the value of $v$ for which the two balls meet at a height of $10\mathrm{ m}$.

**Ball 1** (dropped): $y_1 = 20 - \dfrac{1}{2}gt^2$

At $y_1 = 10$: $10 = 20 - 4.905t^2 \implies t^2 = \dfrac{10}{4.905} \implies t = 1.428\mathrm{ s}$.

**Ball 2** (thrown up): $y_2 = vt - \dfrac{1}{2}gt^2$

At $y_2 = 10$ when $t = 1.428$:

$$
10 = v(1.428) - 4.905(1.428)^2
$$

$$
10 = 1.428v - 10
$$

$$
1.428v = 20 \implies v = 14.0\mathrm&lbrace; m/s&rbrace;
$$

---

## Summary

| Quantity                   | Symbol | SI Unit      |
| -------------------------- | ------ | ------------ |
| Displacement               | $s$    | m            |
| Velocity                   | $v$    | m/s          |
| Acceleration               | $a$    | m/s$^2$      |
| Time                       | $t$    | s            |
| Gravitational acceleration | $g$    | 9.81 m/s$^2$ |

| SUVAT Equation             | Use When                 |
| -------------------------- | ------------------------ |
| $v = u + at$               | No displacement needed   |
| $s = ut + \frac{1}{2}at^2$ | No final velocity needed |
| $v^2 = u^2 + 2as$          | No time needed           |
| $s = \frac{1}{2}(u+v)t$    | No acceleration needed   |

:::tip[Exam Strategy]

For projectile problems, always resolve into horizontal and vertical components. Solve the vertical
motion first (usually to find time), then use that time for the horizontal motion. Draw a clear
diagram showing the velocity components.

:::

---

## Relative Motion

### Relative Velocity

The velocity of object `A` relative to object `B`:

$$
\vec&lbrace;v&rbrace;_&lbrace;AB&rbrace; = \vec&lbrace;v&rbrace;_A - \vec&lbrace;v&rbrace;_B
$$

### Applications

**River crossing problems**: A boat must cross a river with a current. The boat's velocity relative
to the ground is the vector sum of its velocity in still water and the river current.

:::info[Example]

A boat can travel at $4\mathrm{ m/s}$ in still water. It needs to cross a river $100\mathrm{ m}$
wide flowing at $3\mathrm{ m/s}$.

**(a)** If the boat heads directly across, how far downstream does it land?

Time to cross: $t = \dfrac{100}{4} = 25\mathrm{ s}$.

Downstream drift: $d = 3 \times 25 = 75\mathrm{ m}$.

**(b)** What heading should the boat take to land directly across?

The boat must angle upstream so that the upstream component of its velocity cancels the current:

$$
4\sin\theta = 3 \implies \theta = \arcsin(0.75) = 48.6\degree
$$

The boat heads $48.6\degree$ upstream from the perpendicular.

Velocity across: $v_{\mathrm{across}} = 4\cos 48.6\degree = 2.65\mathrm{ m/s}$.

Time to cross: $t = \dfrac{100}{2.65} = 37.7\mathrm{ s}$.

:::

---

## Non-Uniform Acceleration

When acceleration is not constant, use calculus:

$$
a = \frac&lbrace;dv&rbrace;&lbrace;dt&rbrace; \implies v = \int a\,dt
$$

$$
v = \frac&lbrace;ds&rbrace;&lbrace;dt&rbrace; \implies s = \int v\,dt
$$

And conversely:

$$
v = \frac&lbrace;ds&rbrace;&lbrace;dt&rbrace;, \quad a = \frac&lbrace;dv&rbrace;&lbrace;dt&rbrace; = \frac&lbrace;d^2s&rbrace;&lbrace;dt^2&rbrace;
$$

:::info[Example]

A particle moves with acceleration $a = 6t\mathrm{ m/s}^2$. At $t = 0$, $v = 2\mathrm{ m/s}$ and
$s = 0$.

$$
v = \int 6t\,dt = 3t^2 + c
$$

$v(0) = 2 \implies c = 2$, so $v = 3t^2 + 2$.

$$
s = \int (3t^2 + 2)\,dt = t^3 + 2t + d
$$

$s(0) = 0 \implies d = 0$, so $s = t^3 + 2t$.

:::

---

## Graphical Analysis Extended

### Velocity-Time Graphs for Non-Uniform Acceleration

For a curved velocity-time graph:

- The gradient at any point gives the instantaneous acceleration.
- The area under the curve gives the displacement.
- Use integration for the area: $s = \displaystyle\int_{t_1}^{t_2} v(t)\,dt$.

### Acceleration-Time Graphs

- The area under an acceleration-time graph gives the change in velocity.
- $\Delta v = \displaystyle\int_{t_1}^{t_2} a(t)\,dt$.

---

## Motion in One Dimension: Advanced Problems

### Stopping Distance

The total stopping distance of a vehicle consists of:

1. **Thinking distance**: distance travelled during the driver's reaction time.
   $$d_{\mathrm{think}} = v \times t_r$$

2. **Braking distance**: distance travelled while braking. $$d_{\mathrm{brake}} = \frac{v^2}{2a}$$

Total stopping distance $= d_{\mathrm{think}} + d_{\mathrm{brake}}$.

:::info[Example]

A car travels at $30\mathrm{ m/s}$ ($108\mathrm{ km/h}$). The driver's reaction time is
$0.7\mathrm{ s}$ and the maximum deceleration is $8\mathrm{ m/s}^2$.

$$
d_&lbrace;\mathrm&lbrace;think&rbrace;&rbrace; = 30 \times 0.7 = 21\mathrm&lbrace; m&rbrace;
$$

$$
d_&lbrace;\mathrm&lbrace;brake&rbrace;&rbrace; = \frac&lbrace;30^2&rbrace;&lbrace;2 \times 8&rbrace; = \frac&lbrace;900&rbrace;&lbrace;16&rbrace; = 56.25\mathrm&lbrace; m&rbrace;
$$

$$
d_&lbrace;\mathrm&lbrace;total&rbrace;&rbrace; = 21 + 56.25 = 77.25\mathrm&lbrace; m&rbrace;
$$

:::

---

## Additional IB Exam-Style Questions

### Question 5 (Paper 2 style)

A ball is thrown from the top of a $40\mathrm{ m}$ building with initial velocity $15\mathrm{ m/s}$
at $30\degree$ above the horizontal.

**(a)** Find the time for the ball to reach the ground.

Vertical: $s_y = u_y t - \dfrac{1}{2}gt^2$

$$
-40 = 15\sin 30\degree \cdot t - 4.905t^2
$$

$$
-40 = 7.5t - 4.905t^2
$$

$$
4.905t^2 - 7.5t - 40 = 0
$$

$$
t = \frac&lbrace;7.5 \pm \sqrt&lbrace;56.25 + 784.8&rbrace;&rbrace;&lbrace;9.81&rbrace; = \frac&lbrace;7.5 \pm 28.97&rbrace;&lbrace;9.81&rbrace;
$$

$$
t = \frac&lbrace;36.47&rbrace;&lbrace;9.81&rbrace; = 3.72\mathrm&lbrace; s&rbrace;
$$

**(b)** Find the horizontal range.

$$
x = 15\cos 30\degree \times 3.72 = 12.99 \times 3.72 = 48.3\mathrm&lbrace; m&rbrace;
$$

**(c)** Find the velocity (magnitude and direction) when the ball hits the ground.

Horizontal: $v_x = 15\cos 30\degree = 12.99\mathrm{ m/s}$.

Vertical: $v_y = 7.5 - 9.81(3.72) = 7.5 - 36.49 = -28.99\mathrm{ m/s}$.

$$
v = \sqrt&lbrace;12.99^2 + 28.99^2&rbrace; = \sqrt&lbrace;168.7 + 840.4&rbrace; = \sqrt&lbrace;1009.1&rbrace; = 31.8\mathrm&lbrace; m/s&rbrace;
$$

$$
\theta = \arctan\!\left(\frac&lbrace;28.99&rbrace;&lbrace;12.99&rbrace;\right) = 65.9\degree \mathrm&lbrace; below horizontal&rbrace;
$$

### Question 6 (Paper 1 style)

A stone is thrown vertically upward with speed $v$ from a height $h$ above the ground. It reaches a
maximum height $H$ above the ground.

Which expression gives $v$?

A. $\sqrt{2gH}$ B. $\sqrt{2g(H-h)}$ C. $\sqrt{2gH - 2gh}$ D. $\sqrt{2g(H+h)}$

**Answer: B**. From energy conservation: $\dfrac{1}{2}mv^2 = mg(H-h)$, so $v = \sqrt{2g(H-h)}$.

### Question 7 (Paper 2 style)

Two cars are travelling on a straight road. Car `A` is travelling at a constant speed of
$20\mathrm{ m/s}$. Car `B`, initially at rest $50\mathrm{ m}$ behind Car `A`, accelerates at
$2\mathrm{ m/s}^2$.

**(a)** How long does it take for Car `B` to catch up with Car `A`?

Let $t = 0$ when Car `B` starts. Car `A` has a $50\mathrm{ m}$ head start.

Position of Car `A`: $s_A = 20t + 50$

Position of Car `B`: $s_B = \dfrac{1}{2}(2)t^2 = t^2$

When $s_A = s_B$: $t^2 = 20t + 50 \implies t^2 - 20t - 50 = 0$.

$$
t = \frac&lbrace;20 \pm \sqrt&lbrace;400 + 200&rbrace;&rbrace;&lbrace;2&rbrace; = \frac&lbrace;20 \pm 24.49&rbrace;&lbrace;2&rbrace;
$$

$t = 22.25\mathrm{ s}$.

**(b)** What is the speed of Car `B` at this moment?

$$
v_B = 2 \times 22.25 = 44.5\mathrm&lbrace; m/s&rbrace;
$$

---

## Kinematics in Two Dimensions: Vector Approach

### Vector Notation for Motion

Position vector: $\vec{r}(t) = x(t)\hat{i} + y(t)\hat{j}$

Velocity: $\vec{v}(t) = \dfrac{d\vec{r}}{dt} = \dot{x}(t)\hat{i} + \dot{y}(t)\hat{j}$

Acceleration: $\vec{a}(t) = \dfrac{d\vec{v}}{dt} = \ddot{x}(t)\hat{i} + \ddot{y}(t)\hat{j}$

### Speed and Velocity

Speed is the magnitude of velocity:

$$
|\vec&lbrace;v&rbrace;| = \sqrt&lbrace;v_x^2 + v_y^2&rbrace;
$$

### Displacement as a Vector

The displacement from $t_1$ to $t_2$ is:

$$
\Delta\vec&lbrace;r&rbrace; = \vec&lbrace;r&rbrace;(t_2) - \vec&lbrace;r&rbrace;(t_1)
$$

:::info[Example]

A particle moves with position vector $\vec{r}(t) = (2t^2 - 3t)\hat{i} + (t^3 - 4)\hat{j}$ metres.

**(a)** Find the velocity at $t = 2\mathrm{ s}$.

$$
\vec&lbrace;v&rbrace; = (4t - 3)\hat&lbrace;i&rbrace; + 3t^2\hat&lbrace;j&rbrace;
$$

At $t = 2$: $\vec{v} = 5\hat{i} + 12\hat{j}\mathrm{ m/s}$.

Speed $= \sqrt{25 + 144} = \sqrt{169} = 13\mathrm{ m/s}$.

**(b)** Find the acceleration.

$$
\vec&lbrace;a&rbrace; = 4\hat&lbrace;i&rbrace; + 6t\hat&lbrace;j&rbrace;
$$

The acceleration is not constant (depends on $t$).

At $t = 2$: $\vec{a} = 4\hat{i} + 12\hat{j}\mathrm{ m/s}^2$.

:::

---

## Uniformly Accelerated Motion in Two Dimensions

When acceleration is constant (both magnitude and direction), the SUVAT equations can be applied
separately to each component.

### Equations

$$
v_x = u_x + a_x t, \quad v_y = u_y + a_y t
$$

$$
x = u_x t + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;a_x t^2, \quad y = u_y t + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;a_y t^2
$$

### Projectile Motion Revisited (Vector Form)

For a projectile launched with initial velocity
$\vec{u} = u\cos\theta\,\hat{i} + u\sin\theta\,\hat{j}$:

- $a_x = 0$, $a_y = -g$

$$
x(t) = u\cos\theta \cdot t
$$

$$
y(t) = u\sin\theta \cdot t - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;gt^2
$$

$$
v_x(t) = u\cos\theta
$$

$$
v_y(t) = u\sin\theta - gt
$$

---

## Additional IB Exam-Style Questions

### Question 8 (Paper 2 style)

A particle moves along a straight line. Its acceleration is given by $a = 4 - 2t\mathrm{ m/s}^2$.

**(a)** Find the time when the particle is momentarily at rest.

$$
v = \int_0^t (4-2t')\,dt' = 4t - t^2
$$

When $v = 0$: $t(4 - t) = 0 \implies t = 0$ or $t = 4\mathrm{ s}$.

**(b)** Find the displacement at $t = 4\mathrm{ s}$.

$$
s = \int_0^4 (4t - t^2)\,dt = \left[2t^2 - \frac&lbrace;t^3&rbrace;&lbrace;3&rbrace;\right]_0^4 = 32 - \frac&lbrace;64&rbrace;&lbrace;3&rbrace; = \frac&lbrace;32&rbrace;&lbrace;3&rbrace;\mathrm&lbrace; m&rbrace;
$$

**(c)** Find the distance travelled between $t = 0$ and $t = 4\mathrm{ s}$.

Since $v \ge 0$ for $0 \le t \le 4$, the distance equals the displacement:
$\dfrac{32}{3}\mathrm{ m}$.

### Question 9 (Paper 1 style)

A ball is projected at speed $v$ at angle $\theta$ above horizontal on level ground. For what value
of $\theta$ is the horizontal range maximised?

The range is $R = \dfrac{v^2 \sin 2\theta}{g}$. This is maximised when $\sin 2\theta = 1$, i.e.,
$2\theta = 90\degree$, so $\theta = 45\degree$.

### Question 10 (Paper 2 style)

An object is released from a hot air balloon ascending at $5\mathrm{ m/s}$. At the moment of
release, the balloon is at a height of $120\mathrm{ m}$.

**(a)** Find the maximum height reached by the object.

At release: $u_y = 5\mathrm{ m/s}$, $s_y = 120\mathrm{ m}$.

$$
v_y^2 = u_y^2 - 2g \cdot \Delta s \implies 0 = 25 - 2(9.81)\Delta s
$$

$$
\Delta s = \frac&lbrace;25&rbrace;&lbrace;19.62&rbrace; = 1.27\mathrm&lbrace; m&rbrace;
$$

Maximum height $= 120 + 1.27 = 121.3\mathrm{ m}$.

**(b)** Find the time to reach the ground.

$$
s = 120 + 5t - 4.905t^2
$$

At ground: $4.905t^2 - 5t - 120 = 0$.

$$
t = \frac&lbrace;5 + \sqrt&lbrace;25 + 2354&rbrace;&rbrace;&lbrace;9.81&rbrace; = \frac&lbrace;5 + 48.72&rbrace;&lbrace;9.81&rbrace; = 5.48\mathrm&lbrace; s&rbrace;
$$

**(c)** Find the velocity just before impact.

$$
v_y = 5 - 9.81(5.48) = 5 - 53.76 = -48.76\mathrm&lbrace; m/s&rbrace;
$$

Speed $= 48.8\mathrm{ m/s}$ (downward).
