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

On a force-vs-time graph, the impulse equals the area under the curve.

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

## Collisions (CED Unit 5)

### Types of Collisions

| Type                | Momentum Conserved? | Kinetic Energy Conserved? |
| ------------------- | ------------------- | ------------------------- |
| Elastic             | Yes                 | Yes                       |
| Inelastic           | Yes                 | No                        |
| Perfectly Inelastic | Yes                 | No (maximum KE loss)      |

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

### Special Cases of Elastic Collisions

1. **Equal masses** ($m_1 = m_2$): The objects exchange velocities.
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

:::info[Example]

A pool ball of mass $m$ moving at speed $v$ collides with an identical stationary ball. After the
collision, one ball moves at angle $\theta$ above the original direction and the other at angle
$\phi$ below. Show that $\theta + \phi = 90^\circ$ for an elastic collision.

Conservation of momentum:

$x$: $mv = mv_1\cos\theta + mv_2\cos\phi \implies v = v_1\cos\theta + v_2\cos\phi$

$y$: $0 = mv_1\sin\theta - mv_2\sin\phi \implies v_1\sin\theta = v_2\sin\phi$

Conservation of KE:

$v^2 = v_1^2 + v_2^2$

From the $x$-equation squared:
$v^2 = v_1^2\cos^2\theta + v_2^2\cos^2\phi + 2v_1 v_2\cos\theta\cos\phi$.

Setting equal to the KE equation:

$v_1^2\cos^2\theta + v_2^2\cos^2\phi + 2v_1 v_2\cos\theta\cos\phi = v_1^2 + v_2^2$

$v_1^2\sin^2\theta + v_2^2\sin^2\phi = 2v_1 v_2\cos\theta\cos\phi$

From the $y$-equation: $v_2 = v_1\sin\theta / \sin\phi$. Substituting and simplifying yields:

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
