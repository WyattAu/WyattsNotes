---
title: Momentum
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: momentum
---

## Momentum

:::info
Board Coverage AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 1 | CIE P2
:::

## 1. Linear Momentum

**Definition.** The **linear momentum** of a body of mass $m$ moving with velocity $\mathbf{v}$ is:

$$\boxed{\mathbf{p} = m\mathbf{v}}$$

Momentum is a vector quantity with SI units kg m s$^{-1}$.

## 2. Conservation of Momentum

**Principle of Conservation of Linear Momentum.** In the absence of an external net force, the total
momentum of a system is conserved:

$$\sum \mathbf{p}_{\mathrm{initial}} = \sum \mathbf{p}_{\mathrm{final}}$$

### Proof from Newton's Laws

Consider two bodies $A$ and $B$ that interact with each other but with no external forces.

By Newton's third law: $\mathbf{F}_{AB} = -\mathbf{F}_{BA}$.

By Newton's second law: $\mathbf{F}_{AB} = \frac{d\mathbf{p}_A}{dt}$ and
$\mathbf{F}_{BA} = \frac{d\mathbf{p}_B}{dt}$.

Therefore:

$$\frac{d\mathbf{p}_A}{dt} = -\frac{d\mathbf{p}_B}{dt} \implies \frac{d\mathbf{p}_A}{dt} + \frac{d\mathbf{p}_B}{dt} = 0 \implies \frac{d}{dt}(\mathbf{p}_A + \mathbf{p}_B) = 0$$

Hence $\mathbf{p}_A + \mathbf{p}_B = \mathrm{constant}$. $\square$

**Intuition.** Momentum conservation is more fundamental than energy conservation in collisions
because it holds for _all_ types of collisions — elastic, inelastic, and explosive. Kinetic energy
is only conserved in elastic collisions.

## 3. Impulse

**Definition.** The **impulse** $J$ delivered by a force $\mathbf{F}$ acting over a time interval
$\Delta t$ is:

$$\boxed{\mathbf{J} = \mathbf{F}\Delta t = \Delta\mathbf{p}}$$

For a variable force:

$$\mathbf{J} = \int_{t_1}^{t_2} \mathbf{F}(t)\,dt$$

**Derivation from Newton's second law.**

$$\mathbf{F} = \frac{d\mathbf{p}}{dt} \implies \mathbf{F}\,dt = d\mathbf{p} \implies \int \mathbf{F}\,dt = \int d\mathbf{p} = \Delta\mathbf{p}$$

$\square$

**Units.** Impulse has units N s, which are equivalent to kg m s$^{-1}$ (the same as momentum).

**Intuition.** Impulse explains why airbags save lives. The change in momentum $\Delta p$ is fixed
(car stops, so $p$ goes from $mv$ to 0). The airbag increases $\Delta t$, so the force
$F = \Delta p / \Delta t$ is reduced.

## 4. Collisions

### Coefficient of Restitution

**Definition.** The **coefficient of restitution** $e$ measures the elasticity of a collision:

$$\boxed{e = -\frac{v_1 - v_2}{u_1 - u_2}}$$

where $u_1, u_2$ are the velocities before collision and $v_1, v_2$ are the velocities after
collision, measured along the line of impact.

**Derivation.** For a collision between two bodies, Newton's experimental law of restitution states
that the relative speed of separation equals $e$ times the relative speed of approach. Since the
bodies separate after collision ($v_2 > v_1$ if body 2 was struck), and approached before
($u_1 > u_2$), the minus sign ensures $e > 0$.

- **Perfectly elastic collision**: $e = 1$ (kinetic energy is conserved)
- **Perfectly inelastic collision**: $e = 0$ (bodies coalesce — maximum KE loss)
- **Inelastic collision**: $0 < e < 1$

### 1D Elastic Collision: Final Velocities

For two bodies of masses $m_1$ and $m_2$ with initial velocities $u_1$ and $u_2$:

**Conservation of momentum:**

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2 \quad \mathrm{...(i)}$$

**Conservation of kinetic energy** (elastic, $e = 1$):

$$\frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2 = \frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2 \quad \mathrm{...(ii)}$$

From (i): $m_1(u_1 - v_1) = m_2(v_2 - u_2)$ ... (iii)

From (ii): $m_1(u_1^2 - v_1^2) = m_2(v_2^2 - u_2^2)$ ... (iv)

Dividing (iv) by (iii):

$$u_1 + v_1 = u_2 + v_2 \implies v_1 - v_2 = -(u_1 - u_2) \quad \mathrm{(Newton's restitution with } e = 1\mathrm{)}$$

From $v_1 = u_2 + v_2 - u_1$, substituting into (i):

$$m_1 u_1 + m_2 u_2 = m_1(u_2 + v_2 - u_1) + m_2 v_2$$

$$m_1 u_1 + m_2 u_2 = m_1 u_2 + m_1 v_2 - m_1 u_1 + m_2 v_2$$

$$2m_1 u_1 + (m_2 - m_1)u_2 = (m_1 + m_2)v_2$$

$$\boxed{v_2 = \frac{(m_2 - m_1)u_2 + 2m_1 u_1}{m_1 + m_2}}$$

By symmetry:

$$\boxed{v_1 = \frac{(m_1 - m_2)u_1 + 2m_2 u_2}{m_1 + m_2}}$$

### Special Cases

**Equal masses** ($m_1 = m_2$): $v_1 = u_2$ and $v_2 = u_1$. The bodies exchange velocities.

**Stationary target** ($u_2 = 0$):

$$v_1 = \frac{(m_1 - m_2)u_1}{m_1 + m_2}, \qquad v_2 = \frac{2m_1 u_1}{m_1 + m_2}$$

**Heavy stationary target** ($m_2 \gg m_1$): $v_1 \approx -u_1$ (light body rebounds),
$v_2 \approx 0$ (heavy body barely moves).

**Light stationary target** ($m_2 \ll m_1$): $v_1 \approx u_1$ (heavy body continues),
$v_2 \approx 2u_1$ (light body moves at twice the speed).

### Inelastic Collision

For a perfectly inelastic collision ($e = 0$), the bodies coalesce. Let the common final velocity be
$v$:

$$m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$$

$$\boxed{v = \frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}}$$

**Kinetic energy lost:**

$$\Delta E_k = \frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2 - \frac{1}{2}(m_1 + m_2)v^2$$

$$= \frac{m_1 m_2}{2(m_1 + m_2)}(u_1 - u_2)^2$$

Note that the energy loss depends on the relative velocity — a faster approach means more energy is
dissipated.

## 5. 2D Collisions

In two dimensions, momentum conservation applies **separately** in each direction:

$$\sum p_x^{\mathrm{before}} = \sum p_x^{\mathrm{after}}, \qquad \sum p_y^{\mathrm{before}} = \sum p_y^{\mathrm{after}}$$

For an elastic collision, we also conserve kinetic energy. The coefficient of restitution applies
along the line of centres.

<details>
<summary>Example: 2D Collision</summary>
A particle of mass $2m$ moving with speed $u$ collides with a stationary particle of mass $m$. After the collision, the $2m$ particle moves at $60^\circ$ to its original direction. Find the final speeds (elastic collision).

**Answer.** Let the original direction be the $x$-axis.

Momentum conservation ($x$): $2mu = 2mv_1\cos 60° + mv_2\cos\theta$, i.e.,
$2u = v_1 + v_2\cos\theta$.

Momentum conservation ($y$): $0 = 2mv_1\sin 60° - mv_2\sin\theta$, i.e.,
$v_2\sin\theta = v_1\sqrt{3}$.

KE conservation: $2mu^2 = 2mv_1^2 + mv_2^2$, i.e., $2u^2 = 2v_1^2 + v_2^2$.

From the $x$-momentum: $v_2\cos\theta = 2u - v_1$. Squaring and adding the $y$-equation:
$v_2^2 = (2u - v_1)^2 + 3v_1^2 = 4u^2 - 4uv_1 + 4v_1^2$.

Substituting into KE: $2u^2 = 2v_1^2 + 4u^2 - 4uv_1 + 4v_1^2$, i.e., $6v_1^2 - 4uv_1 + 2u^2 = 0$,
i.e., $3v_1^2 - 2uv_1 + u^2 = 0$, i.e., $(v_1 - u)(3v_1 - u) = 0$.

Since $v_1 \neq u$ (the particle deflects), $v_1 = u/3$. Then
$v_2^2 = 4u^2 - 4u^2/3 + 4u^2/9 = \frac{36 - 12 + 4}{9}u^2 = \frac{28}{9}u^2$, so
$v_2 = \frac{2\sqrt{7}}{3}u$.

</details>

## 6. Force-Time Graphs

The area under a force-time graph equals the impulse, which equals the change in momentum.

For a collision, the force typically rises rapidly, peaks, and falls. A larger maximum force
corresponds to a shorter collision time (for the same impulse).

## Problem Set

<details>
<summary>Problem 1</summary>
A $1500$ kg car travelling at $20$ m s$^{-1}$ collides head-on with a $1000$ kg car travelling at $15$ m s$^{-1}$ in the opposite direction. If they stick together, find the common velocity and the kinetic energy lost.

**Answer.** Taking the direction of the first car as positive:
$p_i = 1500(20) + 1000(-15) = 30000 - 15000 = 15000$ kg m s$^{-1}$.

$v = \frac{15000}{2500} = 6.0$ m s$^{-1}$ (in the original direction of the first car).

KE lost:
$\Delta E_k = \frac{m_1 m_2}{2(m_1+m_2)}(u_1 - u_2)^2 = \frac{1500 \times 1000}{2 \times 2500}(20-(-35))^2 = 300 \times 1225 = 367{,}500$
J.

<b>If you get this wrong, revise:</b> [Inelastic Collision](#inelastic-collision)

</details>

<details>
<summary>Problem 2</summary>
A ball of mass $0.15$ kg hits a wall normally at $12$ m s$^{-1}$ and rebounds at $8.0$ m s$^{-1}$. Calculate: (a) the impulse, (b) the average force if contact lasts $0.040$ s.

**Answer.** (a) Taking away from the wall as positive:
$J = \Delta p = m(v - u) = 0.15(8 - (-12)) = 0.15 \times 20 = 3.0$ N s (away from wall).

(b) $F = J/\Delta t = 3.0/0.040 = 75$ N.

<b>If you get this wrong, revise:</b> [Impulse](#3-impulse)

</details>

<details>
<summary>Problem 3</summary>
In a nuclear reactor, a neutron of mass $m$ travelling at $v$ collides elastically with a stationary carbon nucleus of mass $12m$. What fraction of the neutron's kinetic energy is transferred to the carbon nucleus?

**Answer.** $v_2 = \frac{2m_1 u_1}{m_1 + m_2} = \frac{2m \cdot v}{m + 12m} = \frac{2v}{13}$.

KE of carbon =
$\frac{1}{2}(12m)\left(\frac{2v}{13}\right)^2 = \frac{1}{2}(12m)\frac{4v^2}{169} = \frac{48mv^2}{338}$.

Initial KE = $\frac{1}{2}mv^2$. Fraction transferred =
$\frac{48/338}{1/2} = \frac{48}{169} = \frac{48}{169} = 0.284 = 28.4\%$.

<b>If you get this wrong, revise:</b>
[1D Elastic Collision: Final Velocities](#1d-elastic-collision-final-velocities)

</details>

<details>
<summary>Problem 4</summary>
A cricket ball of mass $0.16$ kg is bowled at $35$ m s$^{-1}$ and hit straight back at $40$ m s$^{-1}$. Contact time is $0.001$ s. Find the average force exerted by the bat.

**Answer.** Taking the direction of the hit as positive:
$J = 0.16(40 - (-35)) = 0.16 \times 75 = 12$ N s. $F = 12/0.001 = 12{,}000$ N $= 12$ kN.

<b>If you get this wrong, revise:</b> [Impulse](#3-impulse)

</details>

<details>
<summary>Problem 5</summary>
Two identical particles collide. One is at rest and the other has velocity $\mathbf{u}$. After an elastic collision, the first particle moves at $30^\circ$ to $\mathbf{u}$. Find the direction of the second particle and the final speeds.

**Answer.** By conservation of momentum (equal masses in elastic collision), the particles move at
right angles to each other after collision. So the second particle moves at $60^\circ$ to $\mathbf{u}$.

By symmetry and KE conservation: both have speed $u\cos 60° = u/2$... No, let me be more careful.

Momentum ($x$): $mu = mv_1\cos 30° + mv_2\cos 60^\circ$, i.e.,
$u = \frac{\sqrt{3}}{2}v_1 + \frac{1}{2}v_2$.

Momentum ($y$): $0 = mv_1\sin 30° - mv_2\sin 60^\circ$, i.e., $v_1 = \sqrt{3}\,v_2$.

Substituting:
$u = \frac{\sqrt{3}}{2}(\sqrt{3}v_2) + \frac{v_2}{2} = \frac{3v_2}{2} + \frac{v_2}{2} = 2v_2$. So
$v_2 = u/2$ and $v_1 = \sqrt{3}u/2$.

<b>If you get this wrong, revise:</b> [2D Collisions](#5-2d-collisions)

</details>

<details>
<summary>Problem 6</summary>
Prove that kinetic energy is not conserved in a perfectly inelastic collision between two bodies, using the general result for energy loss.

**Answer.** For $e = 0$, the common velocity is $v = (m_1 u_1 + m_2 u_2)/(m_1 + m_2)$. The KE loss
is $\Delta E_k = \frac{m_1 m_2}{2(m_1+m_2)}(u_1 - u_2)^2$. This is zero only if $u_1 = u_2$ (no
collision). For any actual collision ($u_1 \neq u_2$), $\Delta E_k > 0$, so KE is not conserved.
$\square$

<b>If you get this wrong, revise:</b> [Inelastic Collision](#inelastic-collision)

</details>

<details>
<summary>Problem 7</summary>
A $60$ kg astronaut floating in space throws a $2.0$ kg tool at $8.0$ m s$^{-1}$. What is the astronaut's recoil velocity?

**Answer.** By conservation of momentum: $0 = m_a v_a + m_t v_t$.
$v_a = -\frac{m_t v_t}{m_a} = -\frac{2.0 \times 8.0}{60} = -0.267$ m s$^{-1}$ (opposite to the
throw).

<b>If you get this wrong, revise:</b> [Conservation of Momentum](#2-conservation-of-momentum)

</details>

<details>
<summary>Problem 8</summary>
A $0.50$ kg ball falls vertically from height $5.0$ m onto a concrete floor and rebounds to height $3.2$ m. Find the coefficient of restitution between the ball and the floor.

**Answer.** Speed just before impact: $v_1 = \sqrt{2g \times 5.0} = \sqrt{98.1} = 9.90$ m s$^{-1}$
(downward, so $u_1 = -9.90$).

Speed just after impact: $v_2 = \sqrt{2g \times 3.2} = \sqrt{62.78} = 7.92$ m s$^{-1}$ (upward).

The floor has infinite mass, so
$e = \frac{v_{\mathrm{separation}}}{v_{\mathrm{approach}}} = \frac{7.92}{9.90} = 0.80$.

<b>If you get this wrong, revise:</b> [Coefficient of Restitution](#coefficient-of-restitution)

</details>

<details>
<summary>Problem 9</summary>
A $3.0$ kg body moving at $4.0$ m s$^{-1}$ collides with a $5.0$ kg body moving at $2.0$ m s$^{-1}$ in the same direction. The coefficient of restitution is $0.6$. Find the velocities after the collision.

**Answer.** Momentum: $3(4) + 5(2) = 3v_1 + 5v_2$, i.e., $22 = 3v_1 + 5v_2$ ... (i).

Restitution: $0.6 = -\frac{v_1 - v_2}{4 - 2} = -\frac{v_1 - v_2}{2}$, so $v_1 - v_2 = -1.2$ ...
(ii).

From (ii): $v_1 = v_2 - 1.2$. Substituting into (i): $22 = 3(v_2 - 1.2) + 5v_2 = 8v_2 - 3.6$.
$v_2 = 25.6/8 = 3.2$ m s$^{-1}$. $v_1 = 3.2 - 1.2 = 2.0$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Coefficient of Restitution](#coefficient-of-restitution)

</details>

<details>
<summary>Problem 10</summary>
Two trolleys approach each other on a frictionless track. Trolley A ($2.0$ kg) moves at $3.0$ m s$^{-1}$ to the right, trolley B ($3.0$ kg) moves at $2.0$ m s$^{-1}$ to the left. They collide elastically. Find their final velocities.

**Answer.** Taking right as positive: $u_1 = 3.0$, $u_2 = -2.0$.

$v_1 = \frac{(2-3)(3) + 2(3)(-2)}{2+3} = \frac{-3 - 12}{5} = -3.0$ m s$^{-1}$.

$v_2 = \frac{(3-2)(-2) + 2(2)(3)}{5} = \frac{-2 + 12}{5} = 2.0$ m s$^{-1}$.

The bodies exchange their original speeds (approximately — this is because the masses are close).

<b>If you get this wrong, revise:</b>
[1D Elastic Collision: Final Velocities](#1d-elastic-collision-final-velocities)

</details>

<details>
<summary>Problem 11</summary>
Explain, using momentum conservation, why a gun recoils when fired, and calculate the recoil velocity of a $2.0$ kg rifle that fires a $10$ g bullet at $400$ m s$^{-1}$.

**Answer.** Before firing, total momentum is zero (both at rest). After firing, the bullet moves
forward with momentum $p_b = 0.010 \times 400 = 4.0$ kg m s$^{-1}$. By conservation:
$p_{\mathrm{rifle}} = -4.0$ kg m s$^{-1}$, so $v_r = -4.0/2.0 = -2.0$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Conservation of Momentum](#2-conservation-of-momentum)

</details>

## 7. Impulse in 2D

**Definition.** In two dimensions, impulse is a vector quantity:

$$\boxed{\mathbf{J} = \Delta\mathbf{p} = \mathbf{F}\,\Delta t}$$

Resolving into components:

$$J_x = \Delta p_x = F_x\,\Delta t, \qquad J_y = \Delta p_y = F_y\,\Delta t$$

$$|\mathbf{J}| = \sqrt{J_x^2 + J_y^2}$$

When a ball strikes a smooth wall, only the component of momentum perpendicular to the wall changes.
The parallel component is unchanged because the wall exerts no force parallel to its surface.

:::tip
Exam Technique For a ball hitting a smooth wall at angle $\alpha$ to the normal with speed
$u$ and rebounding with the normal component reduced by factor $e$: the impulse is
$J = m(1+e)u\cos\alpha$ perpendicular to the wall, and the rebound angle $\beta$ satisfies
$\tan\beta = \frac{u\sin\alpha}{eu\cos\alpha} = \frac{\tan\alpha}{e}$, which is greater than
$\alpha$ when $e \lt 1$.
:::

<details>
<summary>Example: Ball Hitting a Wall at an Angle</summary>
A ball of mass $0.20$ kg hits a smooth vertical wall at $30^\circ$ to the normal with speed $8.0$ m s$^{-1}$. The coefficient of restitution is $0.75$. Find: (a) the impulse exerted by the wall, (b) the speed and direction of the ball after impact.

**Answer.** Take the $x$-axis perpendicular to the wall (positive away from wall) and the $y$-axis
parallel to the wall.

Before impact: $u_x = -8.0\cos 30° = -6.93$ m s$^{-1}$ (towards wall) $u_y = 8.0\sin 30° = 4.00$ m
s$^{-1}$ (parallel to wall)

After impact (smooth wall, so $u_y$ unchanged; normal component reverses with restitution):
$v_x = +0.75 \times 6.93 = +5.20$ m s$^{-1}$ (away from wall) $v_y = 4.00$ m s$^{-1}$ (unchanged)

(a) $J_x = m(v_x - u_x) = 0.20(5.20 - (-6.93)) = 0.20 \times 12.13 = 2.43$ N s. $J_y = 0$ (smooth
wall).

The impulse is $2.43$ N s perpendicular to the wall, directed away from the wall.

(b) Speed:
$v = \sqrt{v_x^2 + v_y^2} = \sqrt{5.20^2 + 4.00^2} = \sqrt{27.04 + 16.00} = \sqrt{43.04} = 6.56$ m
s$^{-1}$.

Angle to normal: $\tan\beta = v_y/v_x = 4.00/5.20 = 0.769$, so $\beta = 37.6^\circ$.

The rebound angle ($37.6^\circ$) is greater than the approach angle ($30^\circ$), as expected when $e \lt 1$.

</details>

## 8. Coefficient of Restitution -- Relative Velocity Form

**Definition.** The coefficient of restitution can be expressed in terms of relative velocities:

$$\boxed{e = \frac{|\mathrm{relative speed of separation}|}{|\mathrm{relative speed of approach}|}}$$

### Derivation for a 1D Collision

Consider two bodies with masses $m_1$ and $m_2$. Before collision they move with velocities $u_1$
and $u_2$; after collision their velocities are $v_1$ and $v_2$.

**Relative speed of approach.** The speed at which the bodies approach each other is $|u_1 - u_2|$.

**Relative speed of separation.** The speed at which the bodies move apart after collision is
$|v_2 - v_1|$.

Newton's law of restitution states:

$$e = \frac{|v_2 - v_1|}{|u_1 - u_2|}$$

If body 1 catches up to body 2 ($u_1 \gt u_2$) and they separate after collision ($v_2 \gt v_1$),
then:

$$e = \frac{v_2 - v_1}{u_1 - u_2}$$

This is algebraically equivalent to the form $e = -\dfrac{v_1 - v_2}{u_1 - u_2}$ given in Section 4.
$\square$

**Intuition.** The relative velocity form shows that $e$ is a property of the collision itself (the
materials involved), not of the individual bodies. For a perfectly elastic collision ($e = 1$), the
relative speed is unchanged -- the bodies bounce off each other just as fast as they approached.

:::warning
Common Pitfall The coefficient of restitution applies along the **line of centres** (the
line joining the centres of the two bodies at the moment of impact). In oblique collisions, only the
components along this line are used in the restitution equation. The perpendicular components are
governed by the smoothness of the surfaces.
:::

## 9. Bouncing Ball: Proof that $e = \sqrt{h'/h}$

**Theorem.** For a ball dropped from height $h$ onto a hard floor, rebounding to height $h'$, the
coefficient of restitution satisfies $e = \sqrt{h'/h}$.

**Proof (energy method).** The ball falls from height $h$ under gravity. By conservation of energy:

$$mgh = \tfrac{1}{2}mu^2 \implies u = \sqrt{2gh}$$

where $u$ is the speed just before impact (downward).

After impact, the ball rises to height $h'$. By conservation of energy:

$$\tfrac{1}{2}mv^2 = mgh' \implies v = \sqrt{2gh'}$$

where $v$ is the speed just after impact (upward).

The floor has effectively infinite mass and does not move, so the relative speed of approach is $u$
and the relative speed of separation is $v$:

$$e = \frac{v}{u} = \frac{\sqrt{2gh'}}{\sqrt{2gh}} = \sqrt{\frac{h'}{h}}$$

$\square$

:::tip
Exam Technique This result provides a quick experimental method to determine $e$: drop a ball
from a known height, measure the rebound height, and compute $e = \sqrt{h'/h}$. This is often tested
in practical exams. For successive bounces, the heights form a geometric sequence:
$h,\ e^2h,\ e^4h,\ \ldots$
:::

## 10. Explosions and Rocket Propulsion

### Explosions

**Intuition.** In an explosion, a body at rest (or moving) breaks into fragments due to internal
forces. Since internal forces come in equal and opposite pairs (Newton's third law), the total
external force on the system is zero and momentum is conserved.

If a body of mass $M$ at rest explodes into two fragments of masses $m_1$ and $m_2$:

$$0 = m_1\mathbf{v}_1 + m_2\mathbf{v}_2$$

The fragments move in opposite directions with speeds inversely proportional to their masses:

$$\frac{|\mathbf{v}_1|}{|\mathbf{v}_2|} = \frac{m_2}{m_1}$$

**Kinetic energy in an explosion.** KE increases as chemical (or nuclear) energy is converted to KE
of fragments:

$$\Delta E_k = \tfrac{1}{2}m_1v_1^2 + \tfrac{1}{2}m_2v_2^2 - 0$$

Since $m_1v_1 = m_2v_2 = p$ (momentum conservation):

$$\Delta E_k = \frac{p^2}{2m_1} + \frac{p^2}{2m_2} = \frac{M\,p^2}{2m_1 m_2}$$

### Rocket Propulsion

**Intuition.** A rocket moves forward by ejecting exhaust gases backward. The rocket does not "push
against" the air or the ground -- it works in vacuum by momentum conservation.

Consider a rocket of mass $m$ moving at velocity $v$. In time $dt$, it ejects fuel of mass $dm$ at
exhaust velocity $u$ relative to the rocket. The absolute velocity of the exhaust is $v - u$.

**Momentum conservation** (no external forces):

$$m\,v = (m - dm)(v + dv) + dm\,(v - u)$$

Expanding and neglecting $dm\,dv$:

$$mv = mv + m\,dv - v\,dm - dm\,dv + v\,dm - u\,dm$$

$$0 = m\,dv - u\,dm$$

$$\boxed{m\,dv = -u\,dm}$$

This is the **rocket equation** (Tsiolkovsky equation in differential form). Since $dm \lt 0$ (the
rocket loses mass), $dv \gt 0$ (the rocket accelerates).

**Integrating** from initial mass $m_0$ to final mass $m_f$:

$$\int_0^{\Delta v} dv = -u\int_{m_0}^{m_f}\frac{dm}{m}$$

$$\Delta v = u\ln\left(\frac{m_0}{m_f}\right)$$

**Intuition.** The rocket equation shows that $\Delta v$ depends on exhaust velocity $u$ and mass
ratio $m_0/m_f$. This is why multi-stage rockets are used -- dropping empty stages reduces $m_f$
without reducing $m_0$.

:::info
Board Coverage AQA: Momentum conservation in explosions is required; the rocket equation is
extension material. Edexcel CP2: Explosions appear in the momentum topic; the rocket equation is not
explicitly required but may appear in context. OCR (A): Explosions are core; rocket propulsion is
stretch material. CIE P2: Explosions are required; the rocket equation occasionally appears as a
challenging problem.
:::

## Further Problems

<details>
<summary>Problem 12</summary>
A $5.0$ kg object at rest explodes into three fragments. Fragment A ($2.0$ kg) moves at $12$ m s$^{-1}$ due north, and fragment B ($1.5$ kg) moves at $8.0$ m s$^{-1}$ due east. Find the velocity of fragment C.

**Answer.** By conservation of momentum, the total momentum before the explosion is zero, so the
vector sum of the momenta after must also be zero.

$p_A = 2.0 \times 12 = 24$ kg m s$^{-1}$ (north) $p_B = 1.5 \times 8.0 = 12$ kg m s$^{-1}$ (east)

$p_C = -(p_A + p_B)$. Resolving into components (taking east as $+x$, north as $+y$):

$p_{Cx} = -12$ kg m s$^{-1}$ (west), $p_{Cy} = -24$ kg m s$^{-1}$ (south).

$m_C = 5.0 - 2.0 - 1.5 = 1.5$ kg.

$v_C = \sqrt{(-12/1.5)^2 + (-24/1.5)^2} = \sqrt{64 + 256} = \sqrt{320} = 17.9$ m s$^{-1}$.

Direction: $\tan\theta = 24/12 = 2.0$, so $\theta = 63.4^\circ$ south of west.

<b>If you get this wrong, revise:</b>
[Explosions and Rocket Propulsion](#10-explosions-and-rocket-propulsion)

</details>

<details>
<summary>Problem 13</summary>
A ball of mass $0.10$ kg is projected at $20^\circ$ to the vertical towards a smooth vertical wall with speed $10$ m s$^{-1}$. The coefficient of restitution between the ball and the wall is $0.60$. Find the impulse exerted by the wall and the speed of the ball after impact.

**Answer.** Let the $x$-axis be perpendicular to the wall (positive away from wall). The angle to
the normal is $20^\circ$.

Before: $u_x = -10\cos 20° = -9.40$ m s$^{-1}$, $u_y = 10\sin 20° = 3.42$ m s$^{-1}$.

After (smooth wall): $v_x = +0.60 \times 9.40 = +5.64$ m s$^{-1}$, $v_y = 3.42$ m s$^{-1}$.

Impulse: $J_x = 0.10(5.64 - (-9.40)) = 0.10 \times 15.04 = 1.50$ N s away from the wall. $J_y = 0$.

Speed after: $v = \sqrt{5.64^2 + 3.42^2} = \sqrt{31.8 + 11.7} = \sqrt{43.5} = 6.60$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Impulse in 2D](#7-impulse-in-2d)

</details>

<details>
<summary>Problem 14</summary>
A particle falls from height $H$ and bounces on a hard floor with coefficient of restitution $e$. Show that the total vertical distance travelled before the particle comes to rest is $\dfrac{1+e^2}{1-e^2}\,H$.

**Answer.** The particle falls $H$, rises to $e^2H$, falls $e^2H$, rises to $e^4H$, and so on.

Total distance $d = H + 2e^2H + 2e^4H + 2e^6H + \cdots$

$d = H + 2e^2H(1 + e^2 + e^4 + \cdots)$

The bracketed series converges to $\frac{1}{1-e^2}$ for $0 \leq e \lt 1$:

$d = H + \frac{2e^2H}{1-e^2} = \frac{H(1-e^2) + 2e^2H}{1-e^2} = \frac{H(1+e^2)}{1-e^2}$

$\square$

<b>If you get this wrong, revise:</b>
[Bouncing Ball: Proof that $e = \sqrt{h'/h}$](#9-bouncing-ball-proof-that-e--frachh)

</details>

<details>
<summary>Problem 15</summary>
Two bodies of masses $3.0$ kg and $5.0$ kg collide. Before the collision, the $3.0$ kg body moves at $6.0$ m s$^{-1}$ and the $5.0$ kg body moves at $2.0$ m s$^{-1}$ in the opposite direction. After the collision, the $3.0$ kg body moves at $1.0$ m s$^{-1}$ in its original direction. Find: (a) the velocity of the $5.0$ kg body after the collision, (b) the coefficient of restitution, (c) the kinetic energy lost.

**Answer.** Taking the direction of the $3.0$ kg body as positive.

(a) Momentum conservation: $3.0(6.0) + 5.0(-2.0) = 3.0(1.0) + 5.0v_2$.

$18 - 10 = 3 + 5v_2$, so $5v_2 = 5$, giving $v_2 = 1.0$ m s$^{-1}$ (in the original direction of the
$3.0$ kg body).

(b) $e = \frac{v_2 - v_1}{u_1 - u_2} = \frac{1.0 - 1.0}{6.0 - (-2.0)} = \frac{0}{8.0} = 0$.

The collision is perfectly inelastic (but the bodies do not coalesce -- they happen to have the same
final velocity).

(c) Initial KE $= \tfrac{1}{2}(3)(36) + \tfrac{1}{2}(5)(4) = 54 + 10 = 64$ J.

Final KE $= \tfrac{1}{2}(3)(1) + \tfrac{1}{2}(5)(1) = 1.5 + 2.5 = 4.0$ J.

KE lost $= 64 - 4 = 60$ J.

<b>If you get this wrong, revise:</b>
[Coefficient of Restitution -- Relative Velocity Form](#8-coefficient-of-restitution--relative-velocity-form)

</details>

<details>
<summary>Problem 16</summary>
A rocket of initial mass $1000$ kg (including $800$ kg of fuel) burns fuel at a constant rate, ejecting exhaust at $2000$ m s$^{-1}$ relative to the rocket. Find the rocket's velocity when all the fuel is exhausted, neglecting gravity and air resistance.

**Answer.** $m_0 = 1000$ kg, $m_f = 1000 - 800 = 200$ kg, $u = 2000$ m s$^{-1}$.

$\Delta v = u\ln(m_0/m_f) = 2000\ln(1000/200) = 2000\ln 5 = 2000 \times 1.609 = 3219$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Rocket Propulsion](#rocket-propulsion)

</details>
