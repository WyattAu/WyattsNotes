---
title: Momentum and Impulse
date: 2026-04-14
tags:
  - Physics
  - AP
categories:
  - Physics
slug: momentum-and-impulse
---

## Linear Momentum (CED Unit 5)

The linear momentum of an object is:

$$
\vec{p} = m\vec{v}
$$

Momentum is a vector quantity with SI units of $\mathrm{kg} \cdot \mathrm{m/s}$.

### Newton's Second Law in Terms of Momentum

$$
\vec{F}_{\mathrm{net}} = \frac{d\vec{p}}{dt}
$$

When mass is constant: $\vec{F}_{\mathrm{net}} = m\vec{a}$.

### Why Momentum Is More Fundamental Than Force

$F = dp/dt$ is the general form of Newton's second law. $F = ma$ is the special case when mass is
constant. For a rocket expelling fuel, a raindrop accumulating mass, or a relativistic particle,
$F = ma$ fails but $F = dp/dt$ remains valid. Momentum is conserved; force is not. The momentum form
of Newton's second law connects directly to the most powerful conservation law in classical
mechanics.

## Impulse (CED Unit 5)

Impulse is the change in momentum:

$$
\vec{J} = \vec{F}_{\mathrm{net}} \Delta t = \Delta\vec{p} = m\vec{v}_f - m\vec{v}_i
$$

For a variable force:

$$
\vec{J} = \int_{t_i}^{t_f} \vec{F}(t)\, dt
$$

### Impulse-Momentum Theorem

$$
\vec{J} = \Delta\vec{p}
$$

The impulse delivered to an object equals its change in momentum.

### Geometric Interpretation

On a force-vs-time graph, the impulse equals the area under the curve. For a constant force, this is
a rectangle. For a variable force, the area can be computed by integration or approximated by
counting squares.

### Average Force

The average force during an interaction of duration $\Delta t$ is:

$$
F_{\mathrm{avg}} = \frac{J}{\Delta t} = \frac{\Delta p}{\Delta t}
$$

This is the constant force that would produce the same impulse over the same time interval.

:::info[Example]

A $0.15 \mathrm{ kg}$ baseball pitched at $40 \mathrm{ m/s}$ is hit back at $50 \mathrm{ m/s}$ in the
opposite direction. If the bat is in contact with the ball for $2.0 \mathrm{ ms}$, find the average
force exerted by the bat.

Take the initial direction as positive.

$$
J = \Delta p = m(v_f - v_i) = 0.15(-50 - 40) = 0.15(-90) = -13.5 \mathrm{ kg} \cdot \mathrm{m/s}
$$

$$
F_{\mathrm{avg}} = \frac{J}{\Delta t} = \frac{-13.5}{0.002} = -6750 \mathrm{ N}
$$

The magnitude is $6750 \mathrm{ N}$, directed opposite to the initial pitch.

:::

### Why Increasing Contact Time Reduces Force

For a given change in momentum $\Delta p$, the average force is inversely proportional to the
contact time: $F = \Delta p / \Delta t$. This is the principle behind all safety devices: seat
belts, air bags, crumple zones, and crash mats all increase the time over which the momentum
changes, thereby reducing the peak force on the body.

## Conservation of Momentum (CED Unit 5)

If the net external force on a system is zero, the total momentum of the system is conserved:

$$
\sum \vec{p}_{\mathrm{initial}} = \sum \vec{p}_{\mathrm{final}}
$$

### Proof from Newton's Second and Third Laws

For a system of $n$ particles, Newton's second law gives:

$$
\frac{d\vec{P}_{\mathrm{total}}}{dt} = \sum_{i=1}^{n} \vec{F}_i = \sum \vec{F}_{\mathrm{ext}} + \sum \vec{F}_{\mathrm{int}}
$$

By Newton's third law, all internal forces cancel in pairs: $\sum \vec{F}_{\mathrm{int}} = 0$.

Therefore: $\displaystyle\frac{d\vec{P}_{\mathrm{total}}}{dt} = \sum \vec{F}_{\mathrm{ext}}$.

If $\sum \vec{F}_{\mathrm{ext}} = 0$, then $\vec{P}_{\mathrm{total}}$ is constant.

$\blacksquare$

### When to Use Conservation of Momentum

- Collisions (short duration, internal forces dominate)
- Explosions
- Rocket propulsion (AP Physics C)
- Any system with zero net external force

### When External Forces Are Negligible

During a collision, the internal forces (contact forces between the colliding objects) are very
large but act for a very short time. The external forces (gravity, friction) are typically much
smaller. The impulse from external forces is negligible compared to the impulse from internal
forces, so momentum is approximately conserved during the collision even though the system is not
truly isolated.

## Collisions (CED Unit 5)

### Types of Collisions

| Type                | Momentum Conserved? | Kinetic Energy Conserved? |
| ------------------- | ------------------- | ------------------------- |
| Elastic             | Yes                 | Yes                       |
| Inelastic           | Yes                 | No                        |
| Perfectly Inelastic | Yes                 | No (maximum KE loss)      |

### Coefficient of Restitution

The coefficient of restitution $e$ measures the elasticity of a collision:

$$
e = \frac{v_{2f} - v_{1f}}{v_{1i} - v_{2i}} = \frac{\mathrm{relative speed of separation}}{\mathrm{relative speed of approach}}
$$

- $e = 1$: perfectly elastic
- $0 \lt e \lt 1$: inelastic
- $e = 0$: perfectly inelastic (objects stick together)

### Perfectly Inelastic Collisions

Objects stick together after the collision.

$$
m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2) v_f
$$

:::info[Example]

A $1500 \mathrm{ kg}$ car traveling east at $20 \mathrm{ m/s}$ collides with a $2500 \mathrm{ kg}$ truck
traveling west at $15 \mathrm{ m/s}$. They stick together. Find their velocity after the collision.

Take east as positive.

$$
(1500)(20) + (2500)(-15) = (1500 + 2500)v_f
$$

$$
30000 - 37500 = 4000 v_f
$$

$$
v_f = \frac{-7500}{4000} = -1.875 \mathrm{ m/s}
$$

The combined wreckage moves west at $1.875 \mathrm{ m/s}$.

:::

### Elastic Collisions in One Dimension

Both momentum and kinetic energy are conserved:

$$
m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}
$$

$$
\frac{1}{2}m_1 v_{1i}^2 + \frac{1}{2}m_2 v_{2i}^2 = \frac{1}{2}m_1 v_{1f}^2 + \frac{1}{2}m_2 v_{2f}^2
$$

### Elastic Collision Formulas

When $m_2$ is initially at rest ($v_{2i} = 0$):

$$
v_{1f} = \frac{m_1 - m_2}{m_1 + m_2} v_{1i}
$$

$$
v_{2f} = \frac{2m_1}{m_1 + m_2} v_{1i}
$$

### Derivation of the Elastic Collision Formulas

Starting from conservation of momentum and kinetic energy with $v_{2i} = 0$:

From momentum: $m_1 v_{1i} = m_1 v_{1f} + m_2 v_{2f}$, so
$v_{2f} = \frac{m_1}{m_2}(v_{1i} - v_{1f})$.

Substitute into the KE equation and simplify:

$$
v_{1f} = \frac{m_1 - m_2}{m_1 + m_2} v_{1i}, \qquad v_{2f} = \frac{2m_1}{m_1 + m_2} v_{1i}
$$

### Special Cases of Elastic Collisions

1. **Equal masses** ($m_1 = m_2$): The objects exchange velocities. $v_{1f} = 0$, $v_{2f} = v_{1i}$.
2. **Stationary target with $m_1 \gg m_2$:** $m_1$ continues essentially unchanged; $m_2$ moves off
   at roughly $2v_{1i}$.
3. **Stationary target with $m_1 \ll m_2$:** $m_1$ bounces back with $-v_{1i}$; $m_2$ barely moves.

:::info[Example]

A $2.0 \mathrm{ kg}$ ball moving at $5.0 \mathrm{ m/s}$ collides elastically with a stationary
$3.0 \mathrm{ kg}$ ball. Find the velocities after the collision.

$$
v_{1f} = \frac{2.0 - 3.0}{2.0 + 3.0}(5.0) = \frac{-1}{5}(5.0) = -1.0 \mathrm{ m/s}
$$

$$
v_{2f} = \frac{2(2.0)}{2.0 + 3.0}(5.0) = \frac{4}{5}(5.0) = 4.0 \mathrm{ m/s}
$$

**Verification -- Momentum:** $(2.0)(5.0) + 0 = (2.0)(-1.0) + (3.0)(4.0) = -2.0 + 12.0 = 10.0$.

**Verification -- KE:** $\frac{1}{2}(2.0)(25) + 0 = 25$ J. Final:
$\frac{1}{2}(2.0)(1) + \frac{1}{2}(3.0)(16) = 1 + 24 = 25$ J. Conserved.

:::

## Collisions in Two Dimensions (CED Unit 5)

For 2D collisions, apply conservation of momentum separately in the $x$ and $y$ directions:

$$
m_1 v_{1ix} + m_2 v_{2ix} = m_1 v_{1fx} + m_2 v_{2fx}
$$

$$
m_1 v_{1iy} + m_2 v_{2iy} = m_1 v_{1fy} + m_2 v_{2fy}
$$

For elastic 2D collisions, kinetic energy is also conserved:

$$
\frac{1}{2}m_1 v_{1i}^2 + \frac{1}{2}m_2 v_{2i}^2 = \frac{1}{2}m_1 v_{1f}^2 + \frac{1}{2}m_2 v_{2f}^2
$$

### Why 2D Elastic Collisions of Equal Masses Produce 90-Degree Scattering

:::info[Example]

A pool ball of mass $m$ moving at speed $v$ collides with an identical stationary ball. After the
collision, one ball moves at angle $\theta$ above the original direction and the other at angle
$\phi$ below. Show that $\theta + \phi = 90^\circ$ for an elastic collision.

From conservation of KE: $v^2 = v_1^2 + v_2^2$.

From the $x$-momentum equation squared and using the $y$-equation, we obtain:

$\cos\theta\cos\phi = \sin\theta\sin\phi \implies \cos(\theta + \phi) = 0 \implies \theta + \phi = 90^\circ$.

:::

## Center of Mass (CED Unit 5)

The center of mass of a system of particles is:

$$
\vec{r}_{\mathrm{cm}} = \frac{\sum m_i \vec{r}_i}{\sum m_i} = \frac{\sum m_i \vec{r}_i}{M}
$$

For a continuous object:

$$
\vec{r}_{\mathrm{cm}} = \frac{1}{M}\int \vec{r}\, dm
$$

### Motion of the Center of Mass

$$
M\vec{a}_{\mathrm{cm}} = \sum \vec{F}_{\mathrm{ext}}
$$

The center of mass of a system moves as if all external forces were applied to a single particle of
mass $M$ at the center of mass.

### Center of Mass and Collisions

In any collision, the velocity of the center of mass does not change (since there are no external
forces during the brief collision):

$$
\vec{v}_{\mathrm{cm}} = \frac{m_1 \vec{v}_1 + m_2 \vec{v}_2}{m_1 + m_2} = \mathrm{constant}
$$

### Center of Mass Frame

Transforming to the center of mass frame simplifies collision analysis. In this frame, the total
momentum is zero. Before the collision, the particles approach each other; after the collision, they
move apart. For an elastic collision, the speeds are unchanged but the directions may be different.

## Rocket Propulsion (AP Physics C)

A rocket expels mass at a rate $\frac{dm}{dt} = -\alpha$ (where $\alpha \gt 0$) with exhaust
velocity $v_e$ relative to the rocket. By conservation of momentum:

$$
m\frac{dv}{dt} = -v_e \frac{dm}{dt} = \alpha v_e
$$

This is the **Tsiolkovsky rocket equation**. Integrating gives:

$$
\Delta v = v_e \ln\frac{m_0}{m_f}
$$

where $m_0$ is the initial mass and $m_f$ is the final mass.

### Why Rockets Work in a Vacuum

Rockets do not "push against" the air or the ground. They work by conservation of momentum: the
rocket expels mass backward, and the rocket moves forward. The expelled gas carries momentum in one
direction, and the rocket acquires equal and opposite momentum. This works equally well in a vacuum.

## Common Pitfalls

1. **Confusing momentum and kinetic energy.** Both depend on mass and velocity, but momentum is a
   vector ($m\vec{v}$) while KE is a scalar ($\frac{1}{2}mv^2$).
2. **Forgetting that momentum is a vector.** In 2D collisions, you must conserve momentum in both
   the $x$ and $y$ directions separately.
3. **Assuming all collisions are elastic.** Most real collisions are inelastic. Only use the elastic
   collision formulas when KE is explicitly conserved.
4. **Sign errors with velocity directions.** Always define a positive direction and be consistent.
5. **Using impulse incorrectly with variable forces.** For non-constant forces, integrate or find
   the area under the $F$-vs-$t$ graph.
6. **Forgetting that momentum is conserved only when the net external force is zero.** During a
   collision, external forces (like gravity) are usually negligible compared to the large internal
   forces, so momentum is approximately conserved.
7. **Computing the center of mass incorrectly for non-uniform objects.** Use the integral form.

## Practice Questions

1. A $0.50 \mathrm{ kg}$ ball hits a wall at $10 \mathrm{ m/s}$ and rebounds at $8.0 \mathrm{ m/s}$. If
   the contact time is $0.020 \mathrm{ s}$, find the average force on the ball.

2. A $10 \mathrm{ g}$ bullet embeds in a $2.0 \mathrm{ kg}$ wooden block on a frictionless surface. The
   block then slides into a spring ($k = 200 \mathrm{ N/m}$) and compresses it $5.0 \mathrm{ cm}$. Find
   the initial speed of the bullet.

3. Two ice skaters push off each other. Skater A ($60 \mathrm{ kg}$) moves at $2.0 \mathrm{ m/s}$ and
   skater B ($40 \mathrm{ kg}$) moves at $3.0 \mathrm{ m/s}$. What was the initial momentum of the
   system?

4. A $3.0 \mathrm{ kg}$ object moving at $4.0 \mathrm{ m/s}$ collides elastically with a
   $1.0 \mathrm{ kg}$ object moving at $-6.0 \mathrm{ m/s}$. Find the final velocities.

5. Find the center of mass of a uniform rod of length $L$ and mass $M$.

6. A $2000 \mathrm{ kg}$ cannon fires a $50 \mathrm{ kg}$ shell horizontally at $400 \mathrm{ m/s}$. What
   is the recoil velocity of the cannon?

7. Prove that in a one-dimensional elastic collision with a stationary target, the relative velocity
   of approach equals the relative velocity of separation: $v_{1i} - v_{2i} = -(v_{1f} - v_{2f})$.

8. Two identical balls collide. One was moving at $5.0 \mathrm{ m/s}$ and the other was stationary.
   After the collision, one ball moves at $30^\circ$ above the original direction. Find the speeds
   and direction of both balls after the collision (assume elastic).

9. A force $F(t) = 6t^2 - 2t$ (in N, with $t$ in s) acts on a $3.0 \mathrm{ kg}$ object initially at
   rest. Find the impulse from $t = 0$ to $t = 4.0 \mathrm{ s}$ and the velocity at
   $t = 4.0 \mathrm{ s}$.

10. A flat disk of mass $M$ and radius $R$ has a small hole of mass $m$ removed at a distance $r$
    from the center. Find the center of mass of the remaining object.

## 11. Impulse: Extended Analysis and Examples

### Impulse as the Area Under an F-t Graph

When the force is given graphically, the impulse equals the area under the $F$-vs-$t$ curve. For a
linearly decreasing force (a triangle), the area is
$\frac{1}{2} \times \mathrm{base} \times \mathrm{height}$.

### Worked Example: Triangular Force Profile

A ball hits a wall with a force that varies linearly from 0 to $F_{\max} = 800 \mathrm{ N}$ over
$\Delta t = 4 \mathrm{ ms}$, then linearly back to 0 over another $4 \mathrm{ ms}$. Find the total
impulse and the average force.

The $F$-vs-$t$ graph is a triangle with base $8 \mathrm{ ms}$ and height $800 \mathrm{ N}$.

$$J = \frac{1}{2} \times 0.008 \times 800 = 3.2 \mathrm{ N s}$$

$$F_{\mathrm{avg}} = \frac{J}{\Delta t} = \frac{3.2}{0.008} = 400 \mathrm{ N}$$

The average force is half the peak force, which is always the case for a triangular force profile.

### Worked Example: Variable Force from Calculus

A force $F(t) = 6t^2 - 2t$ (in N) acts on a $3 \mathrm{ kg}$ object initially at rest. Find the
impulse and velocity at $t = 4 \mathrm{ s}$.

$$J = \int_0^4 (6t^2 - 2t)\, dt = \left[2t^3 - t^2\right]_0^4 = 128 - 16 = 112 \mathrm{ N s}$$

$$v = \frac{J}{m} = \frac{112}{3} = 37.3 \mathrm{ m/s}$$

## 12. Collisions: Extended Analysis

### Worked Example: Two-Dimensional Collision

A $2 \mathrm{ kg}$ ball moving at $5 \mathrm{ m/s}$ strikes a stationary $3 \mathrm{ kg}$ ball. After the
collision, the $2 \mathrm{ kg}$ ball moves at $30^{\circ}$ above the original direction at
$3 \mathrm{ m/s}$. Find the velocity of the $3 \mathrm{ kg}$ ball.

**Conservation of $x$-momentum:**

$$2(5) + 0 = 2(3\cos 30^{\circ}) + 3v_{2x}$$

$$10 = 5.196 + 3v_{2x}$$

$$v_{2x} = \frac{4.804}{3} = 1.601 \mathrm{ m/s}$$

**Conservation of $y$-momentum:**

$$0 = 2(3\sin 30^{\circ}) + 3v_{2y}$$

$$0 = 3 + 3v_{2y}$$

$$v_{2y} = -1.0 \mathrm{ m/s}$$

**Speed of $3 \mathrm{ kg}$ ball:**

$$v_2 = \sqrt{1.601^2 + (-1.0)^2} = \sqrt{2.563 + 1} = \sqrt{3.563} = 1.89 \mathrm{ m/s}$$

**Direction:** $\theta = \arctan\left(\frac{-1.0}{1.601}\right) = -32.0^{\circ}$ (below the original
direction).

### Worked Example: Ballistic Pendulum

A $10 \mathrm{ g}$ bullet travelling at $400 \mathrm{ m/s}$ embeds itself in a $2 \mathrm{ kg}$ wooden
block hanging from a string. Find the maximum height the block reaches.

**Phase 1: Collision (conservation of momentum, perfectly inelastic).**

$$mv = (m + M)V$$

$$0.01 \times 400 = (0.01 + 2)V$$

$$V = \frac{4}{2.01} = 1.99 \mathrm{ m/s}$$

**Phase 2: Swing (conservation of energy).**

$$\frac{1}{2}(m + M)V^2 = (m + M)gh$$

$$h = \frac{V^2}{2g} = \frac{1.99^2}{2 \times 9.8} = \frac{3.96}{19.6} = 0.202 \mathrm{ m}$$

The key insight is that momentum is conserved during the collision (very short time, large internal
forces), but mechanical energy is not (the collision is inelastic). After the collision, energy is
conserved during the upward swing (only gravity does work).

## 13. Center of Mass: Extended Examples

### Worked Example: CM of a Non-Uniform Rod

A thin rod of length $L$ and mass $M$ has linear mass density $\lambda(x) = \lambda_0 x/L$, where
$x$ is the distance from one end. Find the center of mass.

$$\bar{x} = \frac{\int_0^L x\lambda(x)\, dx}{\int_0^L \lambda(x)\, dx} = \frac{\int_0^L x \cdot \frac{\lambda_0 x}{L}\, dx}{\int_0^L \frac{\lambda_0 x}{L}\, dx}$$

$$= \frac{\frac{\lambda_0}{L}\int_0^L x^2\, dx}{\frac{\lambda_0}{L}\int_0^L x\, dx} = \frac{\frac{L^3}{3}}{\frac{L^2}{2}} = \frac{2L}{3}$$

The center of mass is at $\frac{2}{3}L$ from the lighter end (not at the midpoint), because more
mass is concentrated toward the heavier end.

### Worked Example: CM of an L-Shaped Object

Two uniform rods, each of mass $M$ and length $L$, are joined at right angles to form an L shape.
Find the center of mass.

Take the origin at the corner. Rod 1 lies along the positive $x$-axis with CM at $(L/2, 0)$. Rod 2
lies along the positive $y$-axis with CM at $(0, L/2)$.

$$\bar{x} = \frac{M \cdot L/2 + M \cdot 0}{2M} = \frac{L}{4}$$

$$\bar{y} = \frac{M \cdot 0 + M \cdot L/2}{2M} = \frac{L}{4}$$

The center of mass is at $(L/4, L/4)$ from the corner.

## 14. Rocket Propulsion: Extended Analysis (AP Physics C)

### Worked Example: Rocket Velocity

A rocket has initial mass $m_0 = 50000 \mathrm{ kg}$ and final mass $m_f = 10000 \mathrm{ kg}$. The
exhaust velocity is $v_e = 3000 \mathrm{ m/s}$. Find the velocity gained.

$$\Delta v = v_e \ln\frac{m_0}{m_f} = 3000 \times \ln\left(\frac{50000}{10000}\right) = 3000 \times \ln 5 = 3000 \times 1.609 = 4828 \mathrm{ m/s}$$

### Why Multi-Stage Rockets Are More Efficient

For a single-stage rocket, the mass ratio $m_0/m_f$ is limited by the structural mass of the tank
and engine. A multi-stage rocket discards the empty first-stage tank and engine, reducing the mass
that must be accelerated in subsequent stages. This dramatically improves the mass ratio for each
stage.

For a two-stage rocket with equal exhaust velocities and equal structural fractions, the total
velocity gain is:

$$\Delta v_{\mathrm{total}} = v_e \ln\frac{m_0}{m_1} + v_e \ln\frac{m_1}{m_f} = v_e \ln\frac{m_0}{m_f}$$

This is the same as a single-stage rocket with the same mass ratio, but the structural mass is much
less because each stage only needs to be strong enough for its own fuel load, not the total fuel
load.

## 15. Summary Table: Collision Types

| Property                   | Elastic  | Inelastic       | Perfectly Inelastic  |
| -------------------------- | -------- | --------------- | -------------------- |
| Momentum conserved         | Yes      | Yes             | Yes                  |
| Kinetic energy conserved   | Yes      | No              | No                   |
| Maximum KE loss            | 0        | Varies          | Maximum              |
| Objects stick together     | No       | No              | Yes                  |
| Coefficient of restitution | $e = 1$  | $0 \lt e \lt 1$ | $e = 0$              |
| Relative velocity          | Reverses | Reduced         | Zero (same velocity) |

## 16. Practice Questions (Additional)

11. A $0.05 \mathrm{ kg}$ tennis ball hits a racket at $20 \mathrm{ m/s}$ and rebounds at
    $25 \mathrm{ m/s}$ at an angle of $30^{\circ}$ from the original direction. If the contact time is
    $5 \mathrm{ ms}$, find the average force exerted by the racket.

12. A $5 \mathrm{ kg}$ object moving at $8 \mathrm{ m/s}$ collides with a $3 \mathrm{ kg}$ object moving
    at $4 \mathrm{ m/s}$ in the same direction. After the collision, the $5 \mathrm{ kg}$ object moves
    at $5 \mathrm{ m/s}$ in the same direction. Find the velocity of the $3 \mathrm{ kg}$ object and the
    coefficient of restitution.

13. A force $F(t) = 12t - 3t^2$ (in N) acts on a $4 \mathrm{ kg}$ object initially moving at
    $2 \mathrm{ m/s}$. Find (a) the time when the object is at rest, (b) the impulse from $t = 0$ to
    that time, and (c) the impulse from $t = 0$ to $t = 6 \mathrm{ s}$.

14. Two ice skaters of masses $50 \mathrm{ kg}$ and $70 \mathrm{ kg}$ stand facing each other on
    frictionless ice. They push off each other, and the $50 \mathrm{ kg}$ skater moves at
    $3 \mathrm{ m/s}$. Find the velocity of the $70 \mathrm{ kg}$ skater and the total kinetic energy of
    the system.

15. A rocket burns fuel at a rate of $100 \mathrm{ kg/s}$ with an exhaust velocity of
    $2500 \mathrm{ m/s}$. The initial mass is $20000 \mathrm{ kg}$. Find (a) the thrust and (b) the
    velocity after $60 \mathrm{ s}$ of burning, assuming the rocket starts from rest in deep space (no
    gravity).

## Extended Worked Examples

### Example 16: Glancing Collision with Energy Analysis

A $4 \mathrm{ kg}$ object moving at $6 \mathrm{ m/s}$ collides with a stationary $6 \mathrm{ kg}$ object
on a frictionless surface. After the collision, the $6 \mathrm{ kg}$ object moves at $3 \mathrm{ m/s}$
at $45^\circ$ to the original direction. Determine the final velocity of the $4 \mathrm{ kg}$ object and
classify the collision.

**Step 1: Conservation of momentum (x-direction)**

$$m_1 u_1 = m_1 v_{1x} + m_2 v_{2x}$$

$$4 \times 6 = 4v_{1x} + 6 \times 3\cos 45^\circ$$

$$24 = 4v_{1x} + 12.728$$

$$v_{1x} = \frac{24 - 12.728}{4} = 2.818 \mathrm{ m/s}$$

**Step 2: Conservation of momentum (y-direction)**

$$0 = m_1 v_{1y} + m_2 v_{2y}$$

$$0 = 4v_{1y} + 6 \times 3\sin 45^\circ$$

$$v_{1y} = \frac{-12.728}{4} = -3.182 \mathrm{ m/s}$$

**Step 3: Final velocity of the $4 \mathrm{ kg}$ object**

$$|v_1| = \sqrt{2.818^2 + (-3.182)^2} = \sqrt{7.941 + 10.125} = \sqrt{18.066} = 4.251 \mathrm{ m/s}$$

$$\theta = \arctan\left(\frac{-3.182}{2.818}\right) = -48.5^\circ$$

**Step 4: Classify the collision**

$$KE_i = \frac{1}{2}(4)(6^2) = 72 \mathrm{ J}$$

$$KE_f = \frac{1}{2}(4)(4.251)^2 + \frac{1}{2}(6)(3^2) = \frac{1}{2}(4)(18.07) + \frac{1}{2}(6)(9) = 36.14 + 27 = 63.14 \mathrm{ J}$$

$$KE_f \lt KE_i$$, so this is an inelastic collision (but not perfectly inelastic since the objects
did not stick together). Energy lost $= 72 - 63.14 = 8.86 \mathrm{ J}$.

### Example 17: Impulse and Force-Time Graph Analysis

A $2 \mathrm{ kg}$ object initially at rest is subjected to a force described by:

$$F(t) = \begin{cases} 20t & 0 \le t \le 2 \\ 40 - 10t & 2 \lt t \le 4 \\ 0 & t \gt 4 \end{cases}$$

where $F$ is in newtons and $t$ in seconds. Find the velocity at $t = 4 \mathrm{ s}$ and the average
force.

**Step 1: Calculate total impulse**

$$J = \int_0^2 20t \, dt + \int_2^4 (40 - 10t) \, dt$$

$$J = \left[ 10t^2 \right]_0^2 + \left[ 40t - 5t^2 \right]_2^4$$

$$J = (40 - 0) + (160 - 80 - 80 + 20) = 40 + 20 = 60 \mathrm{ N}\cdot\mathrm{s}$$

**Step 2: Final velocity**

$$J = mv - mu = 2v - 0 \implies v = 30 \mathrm{ m/s}$$

**Step 3: Average force**

$$F_{\mathrm{avg}} = \frac{J}{\Delta t} = \frac{60}{4} = 15 \mathrm{ N}$$

### Example 18: Perfectly Inelastic Collision with Rotation

A $0.1 \mathrm{ kg}$ bullet travelling at $400 \mathrm{ m/s}$ embeds itself in a wooden block of mass
$1.9 \mathrm{ kg}$ suspended by a $2 \mathrm{ m}$ string. Find the maximum height the block rises.

**Step 1: Momentum conservation (perfectly inelastic collision)**

$$mv = (m + M)V$$

$$0.1 \times 400 = (0.1 + 1.9)V$$

$$40 = 2V \implies V = 20 \mathrm{ m/s}$$

**Step 2: Energy conservation (pendulum swing)**

$$\frac{1}{2}(m + M)V^2 = (m + M)gh$$

$$h = \frac{V^2}{2g} = \frac{400}{2 \times 9.8} = 20.4 \mathrm{ m}$$

**Step 3: Check feasibility**

The string length is only $2 \mathrm{ m}$, so the block cannot rise $20.4 \mathrm{ m}$. This means the
block swings past the horizontal. Let us check the velocity at the top of the swing:

At the top of a vertical circle, the block must have enough speed to maintain tension:

$$V_{\mathrm{top}}^2 = V^2 - 4gL = 400 - 4 \times 9.8 \times 2 = 400 - 78.4 = 321.6$$

$$V_{\mathrm{top}} = 17.9 \mathrm{ m/s}$$

Since $V_{\mathrm{top}} \gt 0$, the block completes full circles. The string remains taut at the top
if:

$$T + (m+M)g = \frac{(m+M)V_{\mathrm{top}}^2}{L}$$

$$T = 2 \times \frac{321.6}{2} - 2 \times 9.8 = 321.6 - 19.6 = 302 \mathrm{ N}$$

The tension is positive, so the block does indeed complete full vertical circles.

:::info
This is a classic ballistic pendulum problem with a twist: the bullet has enough energy to
make the block complete full vertical circles. In most textbook versions, the block only swings to a
modest height.
:::

## Common Pitfalls Extended

### Pitfall 6: Momentum Is a Vector -- Direction Matters

Momentum conservation applies separately in each direction. In 2D collisions, you must resolve
momentum into components. A common error is to use scalar momentum conservation in 2D problems.

### Pitfall 7: Confusing Impulse with Force

Impulse $J = F\Delta t = \Delta p$. A small force applied for a long time can produce the same
impulse (and velocity change) as a large force applied for a short time. Always think about the
_area under the force-time graph_, not just the peak force.

### Pitfall 8: Assuming KE Is Conserved in All Collisions

Only _elastic_ collisions conserve kinetic energy. In real-world collisions, some KE is always
converted to heat, sound, or deformation. Before using KE conservation, verify that the collision is
elastic (or that the problem states it is).

## Additional Practice Problems

16. A $1500 \mathrm{ kg}$ car travelling at $20 \mathrm{ m/s}$ rear-ends a $2500 \mathrm{ kg}$ truck
    travelling at $15 \mathrm{ m/s}$ in the same direction. The vehicles stick together. Calculate the
    final velocity, the KE lost, and the impulse on each vehicle.

17. A tennis ball of mass $0.06 \mathrm{ kg}$ is struck by a racket. The force on the ball during the
    $0.005 \mathrm{ s}$ contact is $F(t) = 1200 \sin(200\pi t)$ (N). Calculate the impulse and the
    speed of the ball after impact if it was initially at rest.

18. A $3 \mathrm{ kg}$ object moving at $5 \mathrm{ m/s}$ collides elastically with a $1 \mathrm{ kg}$
    object at rest. Use the elastic collision formulas to find the final velocities of both objects.

19. A $60 \mathrm{ kg}$ person standing on ice catches a $2 \mathrm{ kg}$ ball thrown at
    $15 \mathrm{ m/s}$. Calculate the person's velocity after catching the ball. If the person then
    throws the ball back at $15 \mathrm{ m/s}$ (relative to the person), what is the person's new
    velocity?

20. Two identical objects collide. Object A has velocity $3\hat{i} + 2\hat{j}$ m/s and Object B has
    velocity $-1\hat{i} + 4\hat{j}$ m/s. After the elastic collision, Object A moves with velocity
    $1\hat{i} + 3\hat{j}$ m/s. Find the final velocity of Object B and verify both momentum and KE
    conservation.

## Practice Problems

<details>
<summary>Question 1: Perfectly inelastic collision</summary>

A $1500 \mathrm{ kg}$ car travelling east at $20 \mathrm{ m/s}$ collides with a $2500 \mathrm{ kg}$ truck travelling west at $15 \mathrm{ m/s}$. They stick together after the collision. Find the velocity of the wreckage and the kinetic energy lost.

</details>

<details>
<summary>Answer</summary>

Taking east as positive: $p_i = 1500(20) + 2500(-15) = 30,000 - 37,500 = -7,500 \mathrm{ kg\cdot m/s}$.

Final mass: $4000 \mathrm{ kg}$. $v_f = p_i / m_f = -7500/4000 = -1.875 \mathrm{ m/s}$ (westward).

Initial KE: $\frac{1}{2}(1500)(20^2) + \frac{1}{2}(2500)(15^2) = 300,000 + 281,250 = 581,250 \mathrm{ J}$.

Final KE: $\frac{1}{2}(4000)(1.875^2) = 7031 \mathrm{ J}$.

Energy lost: $581,250 - 7,031 = 574,219 \mathrm{ J}$ (about 98.8% lost to deformation and heat).

</details>

<details>
<summary>Question 2: Impulse and force-time graph</summary>

A $0.15 \mathrm{ kg}$ baseball is hit by a bat. The force on the ball as a function of time is approximately triangular: it rises linearly from 0 to $6000 \mathrm{ N}$ in $1 \mathrm{ ms}$ and falls back to 0 in the next $1 \mathrm{ ms}$. Calculate the impulse, the change in velocity, and the average force.

</details>

<details>
<summary>Answer</summary>

Impulse = area under F-t graph = area of triangle = $\frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 0.002 \times 6000 = 6 \mathrm{ N\cdot s}$.

Change in velocity: $\Delta v = J/m = 6/0.15 = 40 \mathrm{ m/s}$.

Average force: $F_{\text{avg}} = J/\Delta t = 6/0.002 = 3000 \mathrm{ N}$.

</details>

<details>
<summary>Question 3: Elastic collision in 1D</summary>

A ball of mass $2 \mathrm{ kg}$ moving at $5 \mathrm{ m/s}$ collides elastically with a stationary ball of mass $3 \mathrm{ kg}$. Calculate the final velocities of both balls.

</details>

<details>
<summary>Answer</summary>

For an elastic collision:

$v_1' = \frac{(m_1 - m_2)v_1 + 2m_2 v_2}{m_1 + m_2} = \frac{(2-3)(5) + 0}{5} = \frac{-5}{5} = -1 \mathrm{ m/s}$.

$v_2' = \frac{(m_2 - m_1)v_2 + 2m_1 v_1}{m_1 + m_2} = \frac{0 + 2(2)(5)}{5} = \frac{20}{5} = 4 \mathrm{ m/s}$.

The 2 kg ball bounces back at 1 m/s; the 3 kg ball moves forward at 4 m/s.

Verification: $p_i = 2(5) = 10$. $p_f = 2(-1) + 3(4) = -2 + 12 = 10$. Momentum conserved.
$KE_i = \frac{1}{2}(2)(25) = 25$. $KE_f = \frac{1}{2}(2)(1) + \frac{1}{2}(3)(16) = 1 + 24 = 25$. KE conserved.

</details>

<details>
<summary>Question 4: Rocket propulsion (variable mass)</summary>

A rocket ejects fuel at a rate of $100 \mathrm{ kg/s}$ with an exhaust velocity of $3000 \mathrm{ m/s}$ relative to the rocket. If the rocket has an initial mass of $50,000 \mathrm{ kg}$, what is the initial thrust and initial acceleration?

</details>

<details>
<summary>Answer</summary>

Thrust: $F = v_{\text{exhaust}} \times \frac{dm}{dt} = 3000 \times 100 = 300,000 \mathrm{ N}$.

Initial acceleration: $a = F/m - g = 300,000/50,000 - 9.8 = 6 - 9.8 = -3.8 \mathrm{ m/s^2}$.

The rocket cannot lift off from the ground with these parameters because the thrust ($300 \mathrm{ kN}$) is less than the weight ($490 \mathrm{ kN}$). It would need a higher fuel ejection rate or exhaust velocity.

</details>

<details>
<summary>Question 5: Ballistic pendulum</summary>

A $10 \mathrm{ g}$ bullet travelling at $400 \mathrm{ m/s}$ embeds itself in a $2 \mathrm{ kg}$ wooden block suspended as a pendulum. How high does the block rise after the collision?

</details>

<details>
<summary>Answer</summary>

Perfectly inelastic collision (momentum conserved, KE not conserved):

$m_b v_b = (m_b + M)V$: $0.010 \times 400 = (0.010 + 2.0)V$, $4 = 2.01V$, $V = 1.99 \mathrm{ m/s}$.

After collision, energy conserved (pendulum swings up):

$\frac{1}{2}(m_b + M)V^2 = (m_b + M)gh$, $h = V^2/(2g) = 1.99^2/(2 \times 9.8) = 3.96/19.6 = 0.202 \mathrm{ m}$.

The block rises approximately $20.2 \mathrm{ cm}$.

</details>
