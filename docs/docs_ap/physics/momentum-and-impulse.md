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

Momentum is a vector quantity with SI units of $\text{kg} \cdot \text{m/s}$.

### Newton's Second Law in Terms of Momentum

$$
\vec{F}_{\text{net}} = \frac{d\vec{p}}{dt}
$$

When mass is constant: $\vec{F}_{\text{net}} = m\vec{a}$.

### Why Momentum Is More Fundamental Than Force

$F = dp/dt$ is the general form of Newton's second law. $F = ma$ is the special case when mass is
constant. For a rocket expelling fuel, a raindrop accumulating mass, or a relativistic particle,
$F = ma$ fails but $F = dp/dt$ remains valid. Momentum is conserved; force is not. The momentum form
of Newton's second law connects directly to the most powerful conservation law in classical
mechanics.

## Impulse (CED Unit 5)

Impulse is the change in momentum:

$$
\vec{J} = \vec{F}_{\text{net}} \Delta t = \Delta\vec{p} = m\vec{v}_f - m\vec{v}_i
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
F_{\text{avg}} = \frac{J}{\Delta t} = \frac{\Delta p}{\Delta t}
$$

This is the constant force that would produce the same impulse over the same time interval.

:::info[Example]

A $0.15 \text{ kg}$ baseball pitched at $40 \text{ m/s}$ is hit back at $50 \text{ m/s}$ in the
opposite direction. If the bat is in contact with the ball for $2.0 \text{ ms}$, find the average
force exerted by the bat.

Take the initial direction as positive.

$$
J = \Delta p = m(v_f - v_i) = 0.15(-50 - 40) = 0.15(-90) = -13.5 \text{ kg} \cdot \text{m/s}
$$

$$
F_{\text{avg}} = \frac{J}{\Delta t} = \frac{-13.5}{0.002} = -6750 \text{ N}
$$

The magnitude is $6750 \text{ N}$, directed opposite to the initial pitch.

:::

### Why Increasing Contact Time Reduces Force

For a given change in momentum $\Delta p$, the average force is inversely proportional to the
contact time: $F = \Delta p / \Delta t$. This is the principle behind all safety devices: seat
belts, air bags, crumple zones, and crash mats all increase the time over which the momentum
changes, thereby reducing the peak force on the body.

## Conservation of Momentum (CED Unit 5)

If the net external force on a system is zero, the total momentum of the system is conserved:

$$
\sum \vec{p}_{\text{initial}} = \sum \vec{p}_{\text{final}}
$$

### Proof from Newton's Second and Third Laws

For a system of $n$ particles, Newton's second law gives:

$$
\frac{d\vec{P}_{\text{total}}}{dt} = \sum_{i=1}^{n} \vec{F}_i = \sum \vec{F}_{\text{ext}} + \sum \vec{F}_{\text{int}}
$$

By Newton's third law, all internal forces cancel in pairs: $\sum \vec{F}_{\text{int}} = 0$.

Therefore: $\displaystyle\frac{d\vec{P}_{\text{total}}}{dt} = \sum \vec{F}_{\text{ext}}$.

If $\sum \vec{F}_{\text{ext}} = 0$, then $\vec{P}_{\text{total}}$ is constant.

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
e = \frac{v_{2f} - v_{1f}}{v_{1i} - v_{2i}} = \frac{\text{relative speed of separation}}{\text{relative speed of approach}}
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

A $1500 \text{ kg}$ car traveling east at $20 \text{ m/s}$ collides with a $2500 \text{ kg}$ truck
traveling west at $15 \text{ m/s}$. They stick together. Find their velocity after the collision.

Take east as positive.

$$
(1500)(20) + (2500)(-15) = (1500 + 2500)v_f
$$

$$
30000 - 37500 = 4000 v_f
$$

$$
v_f = \frac{-7500}{4000} = -1.875 \text{ m/s}
$$

The combined wreckage moves west at $1.875 \text{ m/s}$.

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

A $2.0 \text{ kg}$ ball moving at $5.0 \text{ m/s}$ collides elastically with a stationary
$3.0 \text{ kg}$ ball. Find the velocities after the collision.

$$
v_{1f} = \frac{2.0 - 3.0}{2.0 + 3.0}(5.0) = \frac{-1}{5}(5.0) = -1.0 \text{ m/s}
$$

$$
v_{2f} = \frac{2(2.0)}{2.0 + 3.0}(5.0) = \frac{4}{5}(5.0) = 4.0 \text{ m/s}
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
\vec{r}_{\text{cm}} = \frac{\sum m_i \vec{r}_i}{\sum m_i} = \frac{\sum m_i \vec{r}_i}{M}
$$

For a continuous object:

$$
\vec{r}_{\text{cm}} = \frac{1}{M}\int \vec{r}\, dm
$$

### Motion of the Center of Mass

$$
M\vec{a}_{\text{cm}} = \sum \vec{F}_{\text{ext}}
$$

The center of mass of a system moves as if all external forces were applied to a single particle of
mass $M$ at the center of mass.

### Center of Mass and Collisions

In any collision, the velocity of the center of mass does not change (since there are no external
forces during the brief collision):

$$
\vec{v}_{\text{cm}} = \frac{m_1 \vec{v}_1 + m_2 \vec{v}_2}{m_1 + m_2} = \text{constant}
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

1. A $0.50 \text{ kg}$ ball hits a wall at $10 \text{ m/s}$ and rebounds at $8.0 \text{ m/s}$. If
   the contact time is $0.020 \text{ s}$, find the average force on the ball.

2. A $10 \text{ g}$ bullet embeds in a $2.0 \text{ kg}$ wooden block on a frictionless surface. The
   block then slides into a spring ($k = 200 \text{ N/m}$) and compresses it $5.0 \text{ cm}$. Find
   the initial speed of the bullet.

3. Two ice skaters push off each other. Skater A ($60 \text{ kg}$) moves at $2.0 \text{ m/s}$ and
   skater B ($40 \text{ kg}$) moves at $3.0 \text{ m/s}$. What was the initial momentum of the
   system?

4. A $3.0 \text{ kg}$ object moving at $4.0 \text{ m/s}$ collides elastically with a
   $1.0 \text{ kg}$ object moving at $-6.0 \text{ m/s}$. Find the final velocities.

5. Find the center of mass of a uniform rod of length $L$ and mass $M$.

6. A $2000 \text{ kg}$ cannon fires a $50 \text{ kg}$ shell horizontally at $400 \text{ m/s}$. What
   is the recoil velocity of the cannon?

7. Prove that in a one-dimensional elastic collision with a stationary target, the relative velocity
   of approach equals the relative velocity of separation: $v_{1i} - v_{2i} = -(v_{1f} - v_{2f})$.

8. Two identical balls collide. One was moving at $5.0 \text{ m/s}$ and the other was stationary.
   After the collision, one ball moves at $30^\circ$ above the original direction. Find the speeds
   and direction of both balls after the collision (assume elastic).

9. A force $F(t) = 6t^2 - 2t$ (in N, with $t$ in s) acts on a $3.0 \text{ kg}$ object initially at
   rest. Find the impulse from $t = 0$ to $t = 4.0 \text{ s}$ and the velocity at
   $t = 4.0 \text{ s}$.

10. A flat disk of mass $M$ and radius $R$ has a small hole of mass $m$ removed at a distance $r$
    from the center. Find the center of mass of the remaining object.
