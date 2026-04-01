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

:::info Board Coverage
AQA Paper 1 | Edexcel CP2 | OCR (A) Paper 1 | CIE P2
:::

## 1. Linear Momentum

**Definition.** The **linear momentum** of a body of mass $m$ moving with velocity $\mathbf{v}$ is:

$$\boxed{\mathbf{p} = m\mathbf{v}}$$

Momentum is a vector quantity with SI units kg m s$^{-1}$.

## 2. Conservation of Momentum

**Principle of Conservation of Linear Momentum.** In the absence of an external net force, the total momentum of a system is conserved:

$$\sum \mathbf{p}_{\text{initial}} = \sum \mathbf{p}_{\text{final}}$$

### Proof from Newton's Laws

Consider two bodies $A$ and $B$ that interact with each other but with no external forces.

By Newton's third law: $\mathbf{F}_{AB} = -\mathbf{F}_{BA}$.

By Newton's second law: $\mathbf{F}_{AB} = \frac{d\mathbf{p}_A}{dt}$ and $\mathbf{F}_{BA} = \frac{d\mathbf{p}_B}{dt}$.

Therefore:

$$\frac{d\mathbf{p}_A}{dt} = -\frac{d\mathbf{p}_B}{dt} \implies \frac{d\mathbf{p}_A}{dt} + \frac{d\mathbf{p}_B}{dt} = 0 \implies \frac{d}{dt}(\mathbf{p}_A + \mathbf{p}_B) = 0$$

Hence $\mathbf{p}_A + \mathbf{p}_B = \text{constant}$. $\square$

**Intuition.** Momentum conservation is more fundamental than energy conservation in collisions because it holds for _all_ types of collisions — elastic, inelastic, and explosive. Kinetic energy is only conserved in elastic collisions.

## 3. Impulse

**Definition.** The **impulse** $J$ delivered by a force $\mathbf{F}$ acting over a time interval $\Delta t$ is:

$$\boxed{\mathbf{J} = \mathbf{F}\Delta t = \Delta\mathbf{p}}$$

For a variable force:

$$\mathbf{J} = \int_{t_1}^{t_2} \mathbf{F}(t)\,dt$$

**Derivation from Newton's second law.**

$$\mathbf{F} = \frac{d\mathbf{p}}{dt} \implies \mathbf{F}\,dt = d\mathbf{p} \implies \int \mathbf{F}\,dt = \int d\mathbf{p} = \Delta\mathbf{p}$$

$\square$

**Units.** Impulse has units N s, which are equivalent to kg m s$^{-1}$ (the same as momentum).

**Intuition.** Impulse explains why airbags save lives. The change in momentum $\Delta p$ is fixed (car stops, so $p$ goes from $mv$ to 0). The airbag increases $\Delta t$, so the force $F = \Delta p / \Delta t$ is reduced.

## 4. Collisions

### Coefficient of Restitution

**Definition.** The **coefficient of restitution** $e$ measures the elasticity of a collision:

$$\boxed{e = -\frac{v_1 - v_2}{u_1 - u_2}}$$

where $u_1, u_2$ are the velocities before collision and $v_1, v_2$ are the velocities after collision, measured along the line of impact.

**Derivation.** For a collision between two bodies, Newton's experimental law of restitution states that the relative speed of separation equals $e$ times the relative speed of approach. Since the bodies separate after collision ($v_2 > v_1$ if body 2 was struck), and approached before ($u_1 > u_2$), the minus sign ensures $e > 0$.

- **Perfectly elastic collision**: $e = 1$ (kinetic energy is conserved)
- **Perfectly inelastic collision**: $e = 0$ (bodies coalesce — maximum KE loss)
- **Inelastic collision**: $0 < e < 1$

### 1D Elastic Collision: Final Velocities

For two bodies of masses $m_1$ and $m_2$ with initial velocities $u_1$ and $u_2$:

**Conservation of momentum:**

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2 \quad \text{...(i)}$$

**Conservation of kinetic energy** (elastic, $e = 1$):

$$\frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2 = \frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2 \quad \text{...(ii)}$$

From (i): $m_1(u_1 - v_1) = m_2(v_2 - u_2)$ ... (iii)

From (ii): $m_1(u_1^2 - v_1^2) = m_2(v_2^2 - u_2^2)$ ... (iv)

Dividing (iv) by (iii):

$$u_1 + v_1 = u_2 + v_2 \implies v_1 - v_2 = -(u_1 - u_2) \quad \text{(Newton's restitution with } e = 1\text{)}$$

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

**Heavy stationary target** ($m_2 \gg m_1$): $v_1 \approx -u_1$ (light body rebounds), $v_2 \approx 0$ (heavy body barely moves).

**Light stationary target** ($m_2 \ll m_1$): $v_1 \approx u_1$ (heavy body continues), $v_2 \approx 2u_1$ (light body moves at twice the speed).

### Inelastic Collision

For a perfectly inelastic collision ($e = 0$), the bodies coalesce. Let the common final velocity be $v$:

$$m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$$

$$\boxed{v = \frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}}$$

**Kinetic energy lost:**

$$\Delta E_k = \frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2 - \frac{1}{2}(m_1 + m_2)v^2$$

$$= \frac{m_1 m_2}{2(m_1 + m_2)}(u_1 - u_2)^2$$

Note that the energy loss depends on the relative velocity — a faster approach means more energy is dissipated.

## 5. 2D Collisions

In two dimensions, momentum conservation applies **separately** in each direction:

$$\sum p_x^{\text{before}} = \sum p_x^{\text{after}}, \qquad \sum p_y^{\text{before}} = \sum p_y^{\text{after}}$$

For an elastic collision, we also conserve kinetic energy. The coefficient of restitution applies along the line of centres.

<details>
<summary>Example: 2D Collision</summary>
<p>

A particle of mass $2m$ moving with speed $u$ collides with a stationary particle of mass $m$. After the collision, the $2m$ particle moves at $60°$ to its original direction. Find the final speeds (elastic collision).

**Answer.** Let the original direction be the $x$-axis.

Momentum conservation ($x$): $2mu = 2mv_1\cos 60° + mv_2\cos\theta$, i.e., $2u = v_1 + v_2\cos\theta$.

Momentum conservation ($y$): $0 = 2mv_1\sin 60° - mv_2\sin\theta$, i.e., $v_2\sin\theta = v_1\sqrt{3}$.

KE conservation: $2mu^2 = 2mv_1^2 + mv_2^2$, i.e., $2u^2 = 2v_1^2 + v_2^2$.

From the $x$-momentum: $v_2\cos\theta = 2u - v_1$. Squaring and adding the $y$-equation: $v_2^2 = (2u - v_1)^2 + 3v_1^2 = 4u^2 - 4uv_1 + 4v_1^2$.

Substituting into KE: $2u^2 = 2v_1^2 + 4u^2 - 4uv_1 + 4v_1^2$, i.e., $6v_1^2 - 4uv_1 + 2u^2 = 0$, i.e., $3v_1^2 - 2uv_1 + u^2 = 0$, i.e., $(v_1 - u)(3v_1 - u) = 0$.

Since $v_1 \neq u$ (the particle deflects), $v_1 = u/3$. Then $v_2^2 = 4u^2 - 4u^2/3 + 4u^2/9 = \frac{36 - 12 + 4}{9}u^2 = \frac{28}{9}u^2$, so $v_2 = \frac{2\sqrt{7}}{3}u$.

</p>
</details>

## 6. Force-Time Graphs

The area under a force-time graph equals the impulse, which equals the change in momentum.

For a collision, the force typically rises rapidly, peaks, and falls. A larger maximum force corresponds to a shorter collision time (for the same impulse).

## Problem Set

<details>
<summary>Problem 1</summary>
<p>

A $1500$ kg car travelling at $20$ m s$^{-1}$ collides head-on with a $1000$ kg car travelling at $15$ m s$^{-1}$ in the opposite direction. If they stick together, find the common velocity and the kinetic energy lost.

**Answer.** Taking the direction of the first car as positive: $p_i = 1500(20) + 1000(-15) = 30000 - 15000 = 15000$ kg m s$^{-1}$.

$v = \frac{15000}{2500} = 6.0$ m s$^{-1}$ (in the original direction of the first car).

KE lost: $\Delta E_k = \frac{m_1 m_2}{2(m_1+m_2)}(u_1 - u_2)^2 = \frac{1500 \times 1000}{2 \times 2500}(20-(-15))^2 = 300 \times 1225 = 367{,}500$ J.

<b>If you get this wrong, revise:</b> [Inelastic Collision](#inelastic-collision)

</p>
</details>

<details>
<summary>Problem 2</summary>
<p>

A ball of mass $0.15$ kg hits a wall normally at $12$ m s$^{-1}$ and rebounds at $8.0$ m s$^{-1}$. Calculate: (a) the impulse, (b) the average force if contact lasts $0.040$ s.

**Answer.** (a) Taking away from the wall as positive: $J = \Delta p = m(v - u) = 0.15(8 - (-12)) = 0.15 \times 20 = 3.0$ N s (away from wall).

(b) $F = J/\Delta t = 3.0/0.040 = 75$ N.

<b>If you get this wrong, revise:</b> [Impulse](#3-impulse)

</p>
</details>

<details>
<summary>Problem 3</summary>
<p>

In a nuclear reactor, a neutron of mass $m$ travelling at $v$ collides elastically with a stationary carbon nucleus of mass $12m$. What fraction of the neutron's kinetic energy is transferred to the carbon nucleus?

**Answer.** $v_2 = \frac{2m_1 u_1}{m_1 + m_2} = \frac{2m \cdot v}{m + 12m} = \frac{2v}{13}$.

KE of carbon = $\frac{1}{2}(12m)\left(\frac{2v}{13}\right)^2 = \frac{1}{2}(12m)\frac{4v^2}{169} = \frac{48mv^2}{338}$.

Initial KE = $\frac{1}{2}mv^2$. Fraction transferred = $\frac{48/338}{1/2} = \frac{48}{169} = \frac{48}{169} = 0.284 = 28.4\%$.

<b>If you get this wrong, revise:</b> [1D Elastic Collision: Final Velocities](#1d-elastic-collision-final-velocities)

</p>
</details>

<details>
<summary>Problem 4</summary>
<p>

A cricket ball of mass $0.16$ kg is bowled at $35$ m s$^{-1}$ and hit straight back at $40$ m s$^{-1}$. Contact time is $0.001$ s. Find the average force exerted by the bat.

**Answer.** Taking the direction of the hit as positive: $J = 0.16(40 - (-35)) = 0.16 \times 75 = 12$ N s. $F = 12/0.001 = 12{,}000$ N $= 12$ kN.

<b>If you get this wrong, revise:</b> [Impulse](#3-impulse)

</p>
</details>

<details>
<summary>Problem 5</summary>
<p>

Two identical particles collide. One is at rest and the other has velocity $\mathbf{u}$. After an elastic collision, the first particle moves at $30°$ to $\mathbf{u}$. Find the direction of the second particle and the final speeds.

**Answer.** By conservation of momentum (equal masses in elastic collision), the particles move at right angles to each other after collision. So the second particle moves at $60°$ to $\mathbf{u}$.

By symmetry and KE conservation: both have speed $u\cos 60° = u/2$... No, let me be more careful.

Momentum ($x$): $mu = mv_1\cos 30° + mv_2\cos 60°$, i.e., $u = \frac{\sqrt{3}}{2}v_1 + \frac{1}{2}v_2$.

Momentum ($y$): $0 = mv_1\sin 30° - mv_2\sin 60°$, i.e., $v_1 = \sqrt{3}\,v_2$.

Substituting: $u = \frac{\sqrt{3}}{2}(\sqrt{3}v_2) + \frac{v_2}{2} = \frac{3v_2}{2} + \frac{v_2}{2} = 2v_2$. So $v_2 = u/2$ and $v_1 = \sqrt{3}u/2$.

<b>If you get this wrong, revise:</b> [2D Collisions](#5-2d-collisions)

</p>
</details>

<details>
<summary>Problem 6</summary>
<p>

Prove that kinetic energy is not conserved in a perfectly inelastic collision between two bodies, using the general result for energy loss.

**Answer.** For $e = 0$, the common velocity is $v = (m_1 u_1 + m_2 u_2)/(m_1 + m_2)$. The KE loss is $\Delta E_k = \frac{m_1 m_2}{2(m_1+m_2)}(u_1 - u_2)^2$. This is zero only if $u_1 = u_2$ (no collision). For any actual collision ($u_1 \neq u_2$), $\Delta E_k > 0$, so KE is not conserved. $\square$

<b>If you get this wrong, revise:</b> [Inelastic Collision](#inelastic-collision)

</p>
</details>

<details>
<summary>Problem 7</summary>
<p>

A $60$ kg astronaut floating in space throws a $2.0$ kg tool at $8.0$ m s$^{-1}$. What is the astronaut's recoil velocity?

**Answer.** By conservation of momentum: $0 = m_a v_a + m_t v_t$. $v_a = -\frac{m_t v_t}{m_a} = -\frac{2.0 \times 8.0}{60} = -0.267$ m s$^{-1}$ (opposite to the throw).

<b>If you get this wrong, revise:</b> [Conservation of Momentum](#2-conservation-of-momentum)

</p>
</details>

<details>
<summary>Problem 8</summary>
<p>

A $0.50$ kg ball falls vertically from height $5.0$ m onto a concrete floor and rebounds to height $3.2$ m. Find the coefficient of restitution between the ball and the floor.

**Answer.** Speed just before impact: $v_1 = \sqrt{2g \times 5.0} = \sqrt{98.1} = 9.90$ m s$^{-1}$ (downward, so $u_1 = -9.90$).

Speed just after impact: $v_2 = \sqrt{2g \times 3.2} = \sqrt{62.78} = 7.92$ m s$^{-1}$ (upward).

The floor has infinite mass, so $e = \frac{v_{\text{separation}}}{v_{\text{approach}}} = \frac{7.92}{9.90} = 0.80$.

<b>If you get this wrong, revise:</b> [Coefficient of Restitution](#coefficient-of-restitution)

</p>
</details>

<details>
<summary>Problem 9</summary>
<p>

A $3.0$ kg body moving at $4.0$ m s$^{-1}$ collides with a $5.0$ kg body moving at $2.0$ m s$^{-1}$ in the same direction. The coefficient of restitution is $0.6$. Find the velocities after the collision.

**Answer.** Momentum: $3(4) + 5(2) = 3v_1 + 5v_2$, i.e., $22 = 3v_1 + 5v_2$ ... (i).

Restitution: $0.6 = -\frac{v_1 - v_2}{4 - 2} = -\frac{v_1 - v_2}{2}$, so $v_1 - v_2 = -1.2$ ... (ii).

From (ii): $v_1 = v_2 - 1.2$. Substituting into (i): $22 = 3(v_2 - 1.2) + 5v_2 = 8v_2 - 3.6$. $v_2 = 25.6/8 = 3.2$ m s$^{-1}$. $v_1 = 3.2 - 1.2 = 2.0$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Coefficient of Restitution](#coefficient-of-restitution)

</p>
</details>

<details>
<summary>Problem 10</summary>
<p>

Two trolleys approach each other on a frictionless track. Trolley A ($2.0$ kg) moves at $3.0$ m s$^{-1}$ to the right, trolley B ($3.0$ kg) moves at $2.0$ m s$^{-1}$ to the left. They collide elastically. Find their final velocities.

**Answer.** Taking right as positive: $u_1 = 3.0$, $u_2 = -2.0$.

$v_1 = \frac{(2-3)(3) + 2(3)(-2)}{2+3} = \frac{-3 - 12}{5} = -3.0$ m s$^{-1}$.

$v_2 = \frac{(3-2)(-2) + 2(2)(3)}{5} = \frac{-2 + 12}{5} = 2.0$ m s$^{-1}$.

The bodies exchange their original speeds (approximately — this is because the masses are close).

<b>If you get this wrong, revise:</b> [1D Elastic Collision: Final Velocities](#1d-elastic-collision-final-velocities)

</p>
</details>

<details>
<summary>Problem 11</summary>
<p>

Explain, using momentum conservation, why a gun recoils when fired, and calculate the recoil velocity of a $2.0$ kg rifle that fires a $10$ g bullet at $400$ m s$^{-1}$.

**Answer.** Before firing, total momentum is zero (both at rest). After firing, the bullet moves forward with momentum $p_b = 0.010 \times 400 = 4.0$ kg m s$^{-1}$. By conservation: $p_{\text{rifle}} = -4.0$ kg m s$^{-1}$, so $v_r = -4.0/2.0 = -2.0$ m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Conservation of Momentum](#2-conservation-of-momentum)

</p>
</details>
