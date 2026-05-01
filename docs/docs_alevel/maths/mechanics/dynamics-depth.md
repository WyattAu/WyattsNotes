---
title: Dynamics (Extended)
description:
  A-Level Mathematics notes on Dynamics (Extended): Dynamics (Extended
  Treatment); 1. Newton's Laws of Motion; 1.1 Statement of the laws.
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: dynamics-extended
---

## Dynamics (Extended Treatment)

This document provides a rigorous treatment of Newton's laws, connected particles, pulleys, friction,
inclined planes, momentum, and impulse.

:::info
A solid understanding of free-body diagrams is essential for all of the material in this document.
Always draw a clear diagram showing all forces acting on each body before writing any equations.
:::

<hr />

## 1. Newton's Laws of Motion

### 1.1 Statement of the laws

**Newton's First Law (Law of Inertia).** A body remains at rest or continues to move with constant
velocity unless acted upon by a resultant external force.

**Newton's Second Law.** The resultant force acting on a body is equal to the rate of change of
momentum:

$$\mathbf{F} = \frac{d\mathbf{p}}{dt} = \frac{d(m\mathbf{v})}{dt}$$

For constant mass $m$:

$$\boxed{\mathbf{F} = m\mathbf{a}}$$

**Newton's Third Law.** If body $A$ exerts a force on body $B$, then body $B$ exerts an equal and
opposite force on body $A$:

$$\mathbf{F}_{AB} = -\mathbf{F}_{BA}$$

### 1.2 Weight and normal reaction

The **weight** of a body of mass $m$ near the Earth's surface is:

$$W = mg$$

directed vertically downward, where $g \approx 9.8\;\mathrm{m\,s^{-2}}$.

The **normal reaction** $R$ is the force exerted by a surface on a body, always perpendicular to the
surface.

### 1.3 Worked example: lift problem

**Problem.** A woman of mass $70\;\mathrm{kg}$ stands in a lift. Find the normal reaction from the
floor of the lift when: (a) the lift accelerates upward at $2\;\mathrm{m\,s^{-2}}$; (b) the lift
moves at constant velocity; (c) the lift decelerates at $3\;\mathrm{m\,s^{-2}}$ while moving upward.

Let $R$ be the upward normal reaction. Taking upward as positive:

$$R - mg = ma$$

(a) $R = 70(9.8 + 2) = 70 \times 11.8 = 826\;\mathrm{N}$

(b) $R = 70(9.8 + 0) = 686\;\mathrm{N}$

(c) Decelerating upward means $a = -3$: $R = 70(9.8 - 3) = 70 \times 6.8 = 476\;\mathrm{N}$

:::warning Common Pitfall
The normal reaction is **not always equal to $mg$**. It equals $mg$ only when there is no vertical
acceleration. In an accelerating lift, on an inclined plane, or in circular motion, $R$ differs
from $mg$.
:::

<hr />

## 2. Connected Particles

### 2.1 General approach

For systems of connected particles:

1. Draw a separate free-body diagram for each particle.
2. Identify the **tension** $T$ in any connecting string (same magnitude on each particle for an
   inextensible string).
3. Apply Newton's second law to each particle separately.
4. If the string is inextensible, both particles have the same magnitude of acceleration.
5. Solve the resulting simultaneous equations.

### 2.2 Worked example: two particles on a table

**Problem.** Two particles of masses $3\;\mathrm{kg}$ and $5\;\mathrm{kg}$ are connected by a light
inextensible string. The $3\;\mathrm{kg}$ particle lies on a smooth horizontal table and the
$5\;\mathrm{kg}$ particle hangs freely over the edge. Find the acceleration of the system and the
tension in the string.

For the $5\;\mathrm{kg}$ particle (taking downward as positive):

$$5g - T = 5a \tag{1}$$

For the $3\;\mathrm{kg}$ particle (taking the direction of motion as positive):

$$T = 3a \tag{2}$$

Adding (1) and (2):

$$5g = 8a \implies a = \frac{5g}{8} = \frac{49}{8} = 6.125\;\mathrm{m\,s^{-2}}$$

$$T = 3 \times 6.125 = 18.375\;\mathrm{N}$$

### 2.3 Worked example: towing

**Problem.** A car of mass $1200\;\mathrm{kg}$ tows a trailer of mass $400\;\mathrm{kg}$ along a
horizontal road. The engine provides a driving force of $3200\;\mathrm{N}$. Resistance forces of
$200\;\mathrm{N}$ and $100\;\mathrm{N}$ act on the car and trailer respectively. Find the
acceleration and the tension in the tow bar.

**System as a whole:**

$$(1200 + 400)a = 3200 - 200 - 100 = 2900$$

$$a = \frac{2900}{1600} = 1.8125\;\mathrm{m\,s^{-2}}$$

**Trailer alone:**

$$T - 100 = 400a = 400 \times 1.8125 = 725$$

$$T = 825\;\mathrm{N}$$

<hr />

## 3. Pulleys

### 3.1 Smooth, light pulleys

A smooth, light pulley changes only the **direction** of the tension -- the tension is the same on
both sides of the string.

### 3.2 Worked example: Atwood machine

**Problem.** Two masses $4\;\mathrm{kg}$ and $6\;\mathrm{kg}$ are connected by a light inextensible
string over a smooth, light pulley. Find the acceleration and the tension.

The heavier mass accelerates downward. Let $a$ be the acceleration magnitude.

For the $6\;\mathrm{kg}$ mass (downward positive):

$$6g - T = 6a \tag{1}$$

For the $4\;\mathrm{kg}$ mass (upward positive):

$$T - 4g = 4a \tag{2}$$

Adding (1) and (2):

$$2g = 10a \implies a = \frac{g}{5} = 1.96\;\mathrm{m\,s^{-2}}$$

From (2): $T = 4(g + a) = 4 \times 11.76 = 47.04\;\mathrm{N}$

### 3.3 Worked example: pulley on an inclined plane

**Problem.** A particle of mass $8\;\mathrm{kg}$ on a smooth plane inclined at $30^\circ$ is
connected by a light inextensible string over a smooth pulley at the top of the plane to a particle
of mass $5\;\mathrm{kg}$ hanging freely. Find the acceleration and tension.

Assuming the $8\;\mathrm{kg}$ mass moves up the plane (we will check this assumption):

For the $8\;\mathrm{kg}$ mass (up the plane positive):

$$T - 8g\sin 30^\circ = 8a \implies T - 4g = 8a \tag{1}$$

For the $5\;\mathrm{kg}$ mass (downward positive):

$$5g - T = 5a \tag{2}$$

Adding: $5g - 4g = 13a \implies a = \dfrac{g}{13} \approx 0.754\;\mathrm{m\,s^{-2}}$.

Since $a \gt 0$, our assumption was correct.

$T = 5(g - a) = 5(9.8 - 0.754) = 45.23\;\mathrm{N}$

:::warning Common Pitfall
When a pulley problem involves an inclined plane, always state your assumption about which
direction the system moves. If the resulting acceleration is negative, your assumption was wrong
and the system moves the other way.
:::

<hr />

## 4. Friction

### 4.1 Static and dynamic friction

**Static friction** $F_s$ prevents a body from starting to move. It satisfies:

$$F_s \leq \mu_s R$$

where $\mu_s$ is the coefficient of static friction and $R$ is the normal reaction.

**Dynamic (kinetic) friction** $F_d$ acts when a body is sliding:

$$F_d = \mu_d R$$

where $\mu_d$ is the coefficient of dynamic friction. In practice, $\mu_d \lt \mu_s$.

At A Level, a single coefficient $\mu$ is typically used, and we write:

$$F \leq \mu R \quad (\mathrm{limiting\ equilibrium})$$

$$F = \mu R \quad (\mathrm{when\ sliding})$$

### 4.2 The angle of friction

The **angle of friction** $\lambda$ is defined by $\tan\lambda = \mu$.

When a body is on the point of sliding on an inclined plane, the angle of the plane equals the
angle of friction:

$$\tan\alpha = \mu$$

### 4.3 Worked example: block on an inclined plane

**Problem.** A block of mass $10\;\mathrm{kg}$ rests on a rough plane inclined at $25^\circ$ to the
horizontal. The coefficient of friction is $\mu = 0.3$. A horizontal force of $P\;\mathrm{N}$ is
applied to the block. Find the range of values of $P$ for which the block remains in equilibrium.

Resolving perpendicular to the plane (upward from plane positive):

$$R - 10g\cos 25^\circ - P\sin 25^\circ = 0$$

$$R = 10g\cos 25^\circ + P\sin 25^\circ$$

Resolving up the plane:

$$P\cos 25^\circ - 10g\sin 25^\circ - F = 0$$

**Case 1: on the point of sliding up the plane** ($F = \mu R$, acting down the plane):

$$P\cos 25^\circ - 10g\sin 25^\circ = \mu(10g\cos 25^\circ + P\sin 25^\circ)$$

$$P\cos 25^\circ - \mu P\sin 25^\circ = 10g\sin 25^\circ + 10\mu g\cos 25^\circ$$

$$P(\cos 25^\circ - 0.3\sin 25^\circ) = 10g(\sin 25^\circ + 0.3\cos 25^\circ)$$

$$P = \frac{10(9.8)(0.4226 + 0.3 \times 0.9063)}{0.9063 - 0.3 \times 0.4226} = \frac{98 \times 0.6945}{0.7795} \approx 87.3\;\mathrm{N}$$

**Case 2: on the point of sliding down the plane** ($F = \mu R$, acting up the plane):

$$P\cos 25^\circ - 10g\sin 25^\circ + \mu R = 0$$

$$P\cos 25^\circ + \mu(10g\cos 25^\circ + P\sin 25^\circ) = 10g\sin 25^\circ$$

$$P(\cos 25^\circ + 0.3\sin 25^\circ) = 10g(\sin 25^\circ - 0.3\cos 25^\circ)$$

$$P = \frac{98(0.4226 - 0.2719)}{0.9063 + 0.1268} = \frac{98 \times 0.1507}{1.0331} \approx 14.3\;\mathrm{N}$$

Therefore, for equilibrium: $14.3 \leq P \leq 87.3\;\mathrm{N}$.

<hr />

## 5. Momentum and Impulse

### 5.1 Linear momentum

The **linear momentum** of a body of mass $m$ moving with velocity $\mathbf{v}$ is:

$$\mathbf{p} = m\mathbf{v}$$

Momentum is a vector quantity measured in $\mathrm{kg\,m\,s^{-1}}$ (or $\mathrm{Ns}$).

### 5.2 Principle of conservation of momentum

**Theorem.** If no external resultant force acts on a system of particles, the total momentum of the
system is conserved.

$$m_1\mathbf{u}_1 + m_2\mathbf{u}_2 = m_1\mathbf{v}_1 + m_2\mathbf{v}_2$$

**Proof.** Newton's second law for the system: $\mathbf{F}_{\mathrm{ext}} = \dfrac{d\mathbf{p}_{\mathrm{total}}}{dt}$.

If $\mathbf{F}_{\mathrm{ext}} = \mathbf{0}$, then $\mathbf{p}_{\mathrm{total}}$ is constant. $\blacksquare$

### 5.3 Impulse

The **impulse** of a constant force $\mathbf{F}$ acting over a time interval $\Delta t$ is:

$$\mathbf{I} = \mathbf{F}\,\Delta t$$

By Newton's second law, impulse equals change in momentum:

$$\boxed{\mathbf{I} = \mathbf{F}\,\Delta t = m\mathbf{v} - m\mathbf{u} = \Delta\mathbf{p}}$$

For a variable force:

$$\mathbf{I} = \int_{t_1}^{t_2} \mathbf{F}\,dt$$

### 5.4 Worked example: collision

**Problem.** A particle of mass $2\;\mathrm{kg}$ moving at $5\;\mathrm{m\,s^{-1}}$ collides with a
stationary particle of mass $3\;\mathrm{kg}$. After the collision, the $2\;\mathrm{kg}$ particle
moves at $1\;\mathrm{m\,s^{-1}}$ in its original direction. Find the velocity of the $3\;\mathrm{kg}$
particle and the magnitude of the impulse exerted on it.

Conservation of momentum (one dimension):

$$2(5) + 3(0) = 2(1) + 3v$$

$$10 = 2 + 3v \implies v = \frac{8}{3} \approx 2.67\;\mathrm{m\,s^{-1}}$$

Impulse on the $3\;\mathrm{kg}$ particle $= \Delta p = 3v - 0 = 3 \times \dfrac{8}{3} = 8\;\mathrm{Ns}$.

### 5.5 Coefficient of restitution

The **coefficient of restitution** $e$ for a collision is defined as:

$$e = \frac{\mathrm{relative\ speed\ of\ separation}}{\mathrm{relative\ speed\ of\ approach}}$$

For a direct impact between two particles:

$$e = \frac{v_2 - v_1}{u_1 - u_2}$$

where $u_1, u_2$ are velocities before and $v_1, v_2$ are velocities after the collision. The value
$e = 1$ corresponds to a perfectly elastic collision; $e = 0$ to a perfectly inelastic collision.

### 5.6 Worked example: restitution

**Problem.** Two particles of masses $2\;\mathrm{kg}$ and $3\;\mathrm{kg}$ move towards each other
with speeds $6\;\mathrm{m\,s^{-1}}$ and $4\;\mathrm{m\,s^{-1}}$ respectively. They collide directly
with coefficient of restitution $e = 0.5$. Find their velocities after the collision.

Taking the direction of the $2\;\mathrm{kg}$ particle as positive, $u_1 = 6$, $u_2 = -4$.

Conservation of momentum:

$$2(6) + 3(-4) = 2v_1 + 3v_2 \implies 12 - 12 = 2v_1 + 3v_2 \implies 2v_1 + 3v_2 = 0 \tag{1}$$

Restitution equation:

$$v_2 - v_1 = 0.5(6 - (-4)) = 0.5(10) = 5 \tag{2}$$

From (2): $v_2 = v_1 + 5$. Substituting into (1):

$$2v_1 + 3(v_1 + 5) = 0 \implies 5v_1 = -15 \implies v_1 = -3\;\mathrm{m\,s^{-1}}$$

$$v_2 = -3 + 5 = 2\;\mathrm{m\,s^{-1}}$$

:::warning Common Pitfall
The restitution equation uses **relative velocities with the correct signs**. The speed of approach
is $|u_1 - u_2|$ and the speed of separation is $|v_2 - v_1|$, but the signs in the formula must
be consistent with your chosen positive direction.
:::

<hr />

## 6. Newton's Third Law Applications

### 6.1 Action-reaction pairs

Newton's third law pairs must satisfy:

1. They act on **different bodies**.
2. They are equal in magnitude.
3. They are opposite in direction.
4. They are of the **same type** (both gravitational, both contact, etc.).

**Common error:** The weight of a book on a table and the normal reaction are **not** a Newton's
third law pair. The weight is the gravitational pull of the Earth on the book; the normal reaction
is the contact force of the table on the book. The correct pair for the book's weight is the
gravitational pull of the book on the Earth.

### 6.2 Worked example: book on a table in a lift

**Problem.** A book of mass $2\;\mathrm{kg}$ rests on a table of mass $10\;\mathrm{kg}$ inside a
lift accelerating upward at $3\;\mathrm{m\,s^{-2}}$. Find: (a) the force exerted by the book on
the table; (b) the force exerted by the table on the book; (c) the tension in the lift cable.

(a) and (b) are a Newton's third law pair, so they are equal in magnitude.

For the book: $R_{\mathrm{table\ on\ book}} - 2g = 2(3) = 6$

$$R = 2(9.8) + 6 = 25.6\;\mathrm{N}$$

The book exerts $25.6\;\mathrm{N}$ downward on the table.

(c) For the entire system (book + table + lift platform):

Let the total mass being accelerated be $M$ (including the lift structure). If we consider just
the book and table: total mass $= 12\;\mathrm{kg}$, acceleration $= 3\;\mathrm{m\,s^{-2}}$.

$$T - 12g = 12(3) \implies T = 12(12.8) = 153.6\;\mathrm{N}$$

(If the lift structure itself has mass, this would need to be included.)

<hr />

## 7. Practice Problems

### Problem 1

A block of mass $5\;\mathrm{kg}$ is pushed along a rough horizontal surface by a horizontal force
of $30\;\mathrm{N}$. The coefficient of friction is $0.4$. Find the acceleration of the block.

<details>
<summary>Solution</summary>

$$R = 5g = 49\;\mathrm{N}$$

$$F = \mu R = 0.4 \times 49 = 19.6\;\mathrm{N}$$

$$30 - 19.6 = 5a \implies a = \frac{10.4}{5} = 2.08\;\mathrm{m\,s^{-2}}$$

</details>

### Problem 2

Two particles of masses $3\;\mathrm{kg}$ and $7\;\mathrm{kg}$ are connected by a light
inextensible string passing over a smooth pulley. The system is released from rest. Find the speed
of the particles after they have moved $2\;\mathrm{m}$ and the tension in the string.

<details>
<summary>Solution</summary>

$$7g - T = 7a, \qquad T - 3g = 3a$$

Adding: $4g = 10a \implies a = 3.92\;\mathrm{m\,s^{-2}}$.

Using $v^2 = u^2 + 2as = 0 + 2(3.92)(2) = 15.68$:

$$v = \sqrt{15.68} \approx 3.96\;\mathrm{m\,s^{-1}}$$

$$T = 3(g + a) = 3(13.72) = 41.16\;\mathrm{N}$$

</details>

### Problem 3

A particle of mass $4\;\mathrm{kg}$ is on a rough plane inclined at $30^\circ$ to the horizontal,
connected by a string over a pulley to a particle of mass $6\;\mathrm{kg}$ hanging vertically. The
coefficient of friction between the $4\;\mathrm{kg}$ mass and the plane is $0.2$. Find the
acceleration of the system.

<details>
<summary>Solution</summary>

Assume the $6\;\mathrm{kg}$ mass moves down.

For the $6\;\mathrm{kg}$ mass: $6g - T = 6a$.

For the $4\;\mathrm{kg}$ mass (up the plane): $T - 4g\sin 30^\circ - F = 4a$.

$R = 4g\cos 30^\circ$, so $F = 0.2 \times 4g\cos 30^\circ = 0.8g\cos 30^\circ \approx 6.80\;\mathrm{N}$.

Adding: $6g - 4g\sin 30^\circ - F = 10a$

$$6(9.8) - 4(4.9) - 6.80 = 10a$$

$$58.8 - 19.6 - 6.80 = 10a \implies 32.4 = 10a \implies a = 3.24\;\mathrm{m\,s^{-2}}$$

Since $a \gt 0$, the assumption is correct.

</details>

### Problem 4

A ball of mass $0.15\;\mathrm{kg}$ is struck by a bat. Immediately before the impact, the ball is
moving at $20\;\mathrm{m\,s^{-1}}$ towards the bat. Immediately after, it moves at $30\;\mathrm{m\,s^{-1}}$
away from the bat. The impact lasts $0.01\;\mathrm{s}$. Find the magnitude of the force exerted by
the bat on the ball.

<details>
<summary>Solution</summary>

Taking the direction away from the bat as positive:

$$I = m(v - u) = 0.15(30 - (-20)) = 0.15(50) = 7.5\;\mathrm{Ns}$$

$$F = \frac{I}{\Delta t} = \frac{7.5}{0.01} = 750\;\mathrm{N}$$

</details>

### Problem 5

A $5\;\mathrm{kg}$ particle moving at $8\;\mathrm{m\,s^{-1}}$ collides directly with a $3\;\mathrm{kg}$
particle moving at $2\;\mathrm{m\,s^{-1}}$ in the same direction. The coefficient of restitution is
$0.6$. Find the velocities after collision and the loss of kinetic energy.

<details>
<summary>Solution</summary>

Momentum: $5(8) + 3(2) = 5v_1 + 3v_2 \implies 46 = 5v_1 + 3v_2 \tag{1}$

Restitution: $v_2 - v_1 = 0.6(8 - 2) = 3.6 \implies v_2 = v_1 + 3.6 \tag{2}$

Substituting (2) into (1): $46 = 5v_1 + 3(v_1 + 3.6) = 8v_1 + 10.8$

$$v_1 = \frac{35.2}{8} = 4.4\;\mathrm{m\,s^{-1}}, \qquad v_2 = 8.0\;\mathrm{m\,s^{-1}}$$

Initial KE $= \frac{1}{2}(5)(64) + \frac{1}{2}(3)(4) = 160 + 6 = 166\;\mathrm{J}$

Final KE $= \frac{1}{2}(5)(19.36) + \frac{1}{2}(3)(64) = 48.4 + 96 = 144.4\;\mathrm{J}$

Loss of KE $= 166 - 144.4 = 21.6\;\mathrm{J}$

</details>
