---
title: Forces and Motion
description: "DSE Physics forces and motion notes covering Newton's laws, friction, projectile motion, circular motion, momentum, and impulse with worked examples."
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: forces-and-motion
---

## Newton's Laws of Motion

### First Law (Law of Inertia)

An object remains at rest or continues to move with uniform velocity unless acted upon by a net
External force.

$$\sum \vec{F} = \vec{0} \implies \vec{v} = \mathrm{constant}$$

Inertia is the resistance of an object to changes in its state of motion. It is quantified by the
Object's mass: a larger mass implies greater inertia.

### Second Law

The net force acting on an object equals the rate of change of its momentum:

$$\vec{F}_{\mathrm{net}} = \frac{d\vec{p}}{dt} = \frac{d(m\vec{v})}{dt}$$

For constant mass this reduces to:

$$\vec{F}_{\mathrm{net}} = m\vec{a}$$

The SI unit of force is the newton (N), where $1 \mathrm{ N} = 1 \mathrm{ kg}\cdot\mathrm{m/s}^2$.

### Third Law

If body `A` exerts a force on body `B`Then body `B` exerts an equal and opposite force on body
`A`:

$$\vec{F}_{AB} = -\vec{F}_{BA}$$

Action-reaction pairs always act on **different** bodies. They are equal in magnitude, opposite in
Direction, and of the same type (both gravitational, both contact, etc.).

### Worked Example 1

A block of mass $8 \mathrm{ kg}$ is pushed across a rough horizontal surface by a horizontal force
Of $50 \mathrm{ N}$. The coefficient of kinetic friction is $0.3$. Find the acceleration.

<details>
<summary>Solution</summary>

Normal reaction: $N = mg = 8 \times 9.81 = 78.48 \mathrm{ N}$

Friction: $f_k = \mu_k N = 0.3 \times 78.48 = 23.54 \mathrm{ N}$

$$a = \frac{F_{\mathrm{net}}}{m} = \frac{50 - 23.54}{8} = \frac{26.46}{8} = 3.31 \mathrm{ m/s}^2$$

</details>

### Worked Example 2

Two blocks, $m_1 = 3 \mathrm{ kg}$ and $m_2 = 5 \mathrm{ kg}$Are placed on a smooth horizontal
Table and connected by a light inextensible string. A horizontal force of $24 \mathrm{ N}$ is applied
To $m_2$Pulling the system to the right. Find the acceleration and the tension in the string.

<details>
<summary>Solution</summary>

The two blocks move together with the same acceleration:

$$a = \frac{F}{m_1 + m_2} = \frac{24}{3 + 5} = \frac{24}{8} = 3.0 \mathrm{ m/s}^2$$

For block $m_1$ alone, the only horizontal force is the tension $T$:

$$T = m_1 a = 3 \times 3.0 = 9.0 \mathrm{ N}$$

</details>

### Worked Example 3

A lift (elevator) of mass $800 \mathrm{ kg}$ carries 3 passengers of total mass $210 \mathrm{ kg}$.
The lift accelerates upward at $1.5 \mathrm{ m/s}^2$ for the first 3 seconds. Find the tension in
The cable during this acceleration and the distance travelled.

<details>
<summary>Solution</summary>

Total mass: $m = 800 + 210 = 1010 \mathrm{ kg}$

Applying Newton's second law upward: $T - mg = ma$

$$T = m(g + a) = 1010(9.81 + 1.5) = 1010 \times 11.31 = 11423 \mathrm{ N}$$

Distance: $s = ut + \frac{1}{2}at^2 = 0 + \frac{1}{2}(1.5)(9) = 6.75 \mathrm{ m}$

</details>

---

## Friction

### Static and Kinetic Friction

| Type | Symbol | Condition | Magnitude |
| ------- | ------ | ------------------ | ----------------------------------- |
| Static | $f_s$ | No relative motion | $0 \leqslant f_s \leqslant \mu_s N$ |
| Kinetic | $f_k$ | Surfaces sliding | $f_k = \mu_k N$ |

The coefficient of static friction $\mu_s$ is always greater than or equal to the coefficient of
Kinetic friction $\mu_k$:

$$\mu_s \geqslant \mu_k$$

Static friction adjusts its magnitude to match the applied force, up to a maximum of $\mu_s N$. Once
The applied force exceeds this maximum, the object begins to slide, and kinetic friction takes over.

### Inclined Planes

For an object on an inclined plane at angle $\theta$ to the horizontal:

- Component of weight parallel to the plane: $mg\sin\theta$
- Component of weight perpendicular to the plane: $mg\cos\theta$
- Normal reaction: $N = mg\cos\theta$
- Friction (if sliding): $f = \mu mg\cos\theta$

The object slides down the plane when $mg\sin\theta \gt \mu_s mg\cos\theta$I.e.:

$$\tan\theta \gt \mu_s$$

### Worked Example 3

A $5 \mathrm{ kg}$ block rests on a rough plane inclined at $35^\circ$. The block is on the verge of
Sliding. Find the coefficient of static friction.

<details>
<summary>Solution</summary>

At the point of sliding, $mg\sin\theta = \mu_s mg\cos\theta$:

$$\mu_s = \tan 35^\circ = 0.700$$

</details>

### Worked Example 4

A $10 \mathrm{ kg}$ block sits on a rough horizontal surface with $\mu_s = 0.4$ and
$\mu_k = 0.3$. A force of $30 \mathrm{ N}$ is applied at $30^\circ$ above the horizontal. Does the
Block move? If so, find its acceleration.

<details>
<summary>Solution</summary>

Resolve the applied force:

$$F_x = 30\cos 30^\circ = 25.98 \mathrm{ N}, \quad F_y = 30\sin 30^\circ = 15.0 \mathrm{ N}$$

Normal reaction: $N = mg - F_y = 10 \times 9.81 - 15.0 = 98.1 - 15.0 = 83.1 \mathrm{ N}$

Maximum static friction: $f_{s,\max} = \mu_s N = 0.4 \times 83.1 = 33.2 \mathrm{ N}$

Since $F_x = 25.98 \mathrm{ N} \lt 33.2 \mathrm{ N}$The block does **not** move.

</details>

---

## Momentum and Impulse

### Linear Momentum

$$\vec{p} = m\vec{v}$$

Momentum is a vector quantity with SI unit $\mathrm{ kg\, m/s}$.

### Conservation of Momentum

For a system of objects with no external net force:

$$\sum \vec{p}_{\mathrm{initial}} = \sum \vec{p}_{\mathrm{final}}$$

$$m_1 \vec{u}_1 + m_2 \vec{u}_2 = m_1 \vec{v}_1 + m_2 \vec{v}_2$$

### Impulse

$$\vec{J} = \vec{F}\,\Delta t = \Delta \vec{p}$$

Impulse equals the change in momentum. It is also the area under a force-time graph. The SI unit is
$\mathrm{ N\, s}$.

### Collisions

| Type | Momentum | Kinetic Energy |
| ------------------- | --------- | ---------------------------- |
| Elastic | Conserved | Conserved |
| Inelastic | Conserved | Not conserved |
| Perfectly inelastic | Conserved | Maximum loss (objects stick) |

### Worked Example 5

A $0.2 \mathrm{ kg}$ ball travelling at $15 \mathrm{ m/s}$ strikes a wall and rebounds at
$10 \mathrm{ m/s}$ along the same line. Contact time is $0.02 \mathrm{ s}$. Find the average force.

<details>
<summary>Solution</summary>

Taking the initial direction as positive:

$$\Delta p = m(v - u) = 0.2(-10 - 15) = 0.2(-25) = -5.0 \mathrm{ kg\, m/s}$$

$$F = \frac{\Delta p}{\Delta t} = \frac{-5.0}{0.02} = -250 \mathrm{ N}$$

The magnitude of the average force is $250 \mathrm{ N}$Directed away from the wall.

</details>

### Worked Example 6

A $3 \mathrm{ kg}$ trolley moving at $4 \mathrm{ m/s}$ collides with a stationary $5 \mathrm{ kg}$
Trolley and they stick together. Find the velocity after the collision and the kinetic energy lost.

<details>
<summary>Solution</summary>

By conservation of momentum:

$$m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$$

$$3 \times 4 + 5 \times 0 = (3 + 5)v \implies 12 = 8v \implies v = 1.5 \mathrm{ m/s}$$

Initial KE: $E_{k,i} = \frac{1}{2}(3)(4^2) = 24.0 \mathrm{ J}$

Final KE: $E_{k,f} = \frac{1}{2}(8)(1.5^2) = 9.0 \mathrm{ J}$

Energy lost: $\Delta E_k = 24.0 - 9.0 = 15.0 \mathrm{ J}$

</details>

### Worked Example 7

A $0.05 \mathrm{ kg}$ bullet travelling at $400 \mathrm{ m/s}$ embeds itself in a
$2 \mathrm{ kg}$ wooden block at rest on a smooth surface. Find the velocity of the block
Immediately after impact.

<details>
<summary>Solution</summary>

By conservation of momentum (perfectly inelastic collision):

$$m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$$

$$0.05 \times 400 + 2 \times 0 = (0.05 + 2)v$$

$$20 = 2.05v \implies v = 9.76 \mathrm{ m/s}$$

</details>

---

## Projectile Motion

### Analysis by Components

For a projectile launched with speed $u$ at angle $\theta$ above the horizontal:

| Quantity | Horizontal | Vertical |
| ------------ | ------------------------------ | ------------------------------------------ |
| Acceleration | $0$ | $-g$ |
| Velocity | $u_x = u\cos\theta$ (constant) | $u_y = u\sin\theta - gt$ |
| Displacement | $x = u\cos\theta\cdot t$ | $y = u\sin\theta\cdot t - \frac{1}{2}gt^2$ |

### Key Results

**Time of flight** (landing at same height):

$$T = \frac{2u\sin\theta}{g}$$

**Maximum height:**

$$H = \frac{u^2\sin^2\theta}{2g}$$

**Horizontal range:**

$$R = \frac{u^2\sin 2\theta}{g}$$

Maximum range occurs at $\theta = 45^\circ$Giving $R_{\max} = u^2/g$.

Complementary angles ($\theta$ and $90^\circ - \theta$) produce the same range.

<PhetSimulation simulationId="projectile-motion" title="Projectile Motion" />

Explore how launch angle and initial speed affect the trajectory.

### Worked Example 7

A ball is thrown from ground level with speed $20 \mathrm{ m/s}$ at $50^\circ$ above the horizontal.
Find the range and maximum height.

<details>
<summary>Solution</summary>

$$R = \frac{20^2 \sin 100^\circ}{9.81} = \frac{400 \times 0.9848}{9.81} = 40.2 \mathrm{ m}$$

$$H = \frac{20^2 \sin^2 50^\circ}{2 \times 9.81} = \frac{400 \times 0.5868}{19.62} = 11.97 \mathrm{ m}$$

</details>

---

## Circular Motion

### Angular Quantities

| Quantity | Symbol | SI Unit | Relation |
| -------------------- | -------- | ------- | ------------------------- |
| Angular displacement | $\theta$ | rad | $\theta = s/r$ |
| Angular velocity | $\omega$ | rad/s | $\omega = d\theta/dt$ |
| Period | $T$ | s | $T = 2\pi/\omega$ |
| Frequency | $f$ | Hz | $f = 1/T = \omega/(2\pi)$ |

Linear-angular relation: $v = r\omega$$a = r\alpha$

### Centripetal Acceleration and Force

An object moving at constant speed $v$ in a circle of radius $r$ has centripetal acceleration:

$$a_c = \frac{v^2}{r} = \omega^2 r = \frac{4\pi^2 r}{T^2}$$

Directed towards the centre of the circle. The required centripetal force is:

$$F_c = \frac{mv^2}{r} = m\omega^2 r$$

### Vertical Circular Motion

For an object on a string in vertical circular motion, speed varies because gravity does work. At
The top of the circle:

$$T + mg = \frac{mv_{\mathrm{top}}^2}{r}$$

At the bottom:

$$T - mg = \frac{mv_{\mathrm{bottom}}^2}{r}$$

For the object to complete the full circle, the string must remain taut at the top
($T \geqslant 0$):

$$v_{\mathrm{top}} \geqslant \sqrt{gr}$$

### Worked Example 8

A car of mass $1200 \mathrm{ kg}$ travels around a flat curve of radius $60 \mathrm{ m}$ at
$15 \mathrm{ m/s}$. Find the minimum coefficient of friction required.

<details>
<summary>Solution</summary>

$$F_c = \frac{mv^2}{r} = \frac{1200 \times 15^2}{60} = \frac{1200 \times 225}{60} = 4500 \mathrm{ N}$$

The centripetal force is provided by friction: $F_c = \mu_s mg$

$$\mu_s = \frac{F_c}{mg} = \frac{4500}{1200 \times 9.81} = \frac{4500}{11772} = 0.382$$

</details>

### Worked Example 9

A $0.5 \mathrm{ kg}$ ball is attached to a string of length $0.8 \mathrm{ m}$ and whirled in a
Vertical circle. Find the minimum speed at the lowest point for the ball to complete the full circle.

<details>
<summary>Solution</summary>

For the ball to complete the full circle, the speed at the top must satisfy $v_{\mathrm{top}} \geqslant \sqrt{gr}$.

Using energy conservation between the bottom and top:

$$\frac{1}{2}mv_{\mathrm{bottom}}^2 = \frac{1}{2}mv_{\mathrm{top}}^2 + mg(2r)$$

Setting $v_{\mathrm{top}} = \sqrt{gr}$:

$$\frac{1}{2}mv_{\mathrm{bottom}}^2 = \frac{1}{2}m(gr) + 2mgr = \frac{5}{2}mgr$$

$$v_{\mathrm{bottom}} = \sqrt{5gr} = \sqrt{5 \times 9.81 \times 0.8} = \sqrt{39.24} = 6.26 \mathrm{ m/s}$$

</details>

---

## Gravitation

### Newton's Law of Universal Gravitation

$$F = \frac{Gm_1 m_2}{r^2}$$

Where $G = 6.67 \times 10^{-11} \mathrm{ N\, m}^2\,\mathrm{ kg}^{-2}$.

### Gravitational Field Strength

$$g = \frac{F}{m} = \frac{GM}{r^2}$$

Near the Earth's surface, $g \approx 9.81 \mathrm{ N/kg}$ (equivalent to $\mathrm{ m/s}^2$).

### Gravitational Potential Energy

For two masses separated by distance $r$:

$$E_p = -\frac{GMm}{r}$$

The negative sign reflects the convention that $E_p = 0$ at infinite separation. Work must be done
Against gravity to increase the separation.

### Orbital Motion

For a satellite of mass $m$ orbiting a central body of mass $M$ at radius $r$:

$$\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v = \sqrt{\frac{GM}{r}}$$

$$T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}$$

This is Kepler's third law: $T^2 \propto r^3$.

<PhetSimulation simulationId="gravity-and-orbits" title="Gravity and Orbits" />

Visualise how orbital speed and period depend on the distance from the central body.

### Worked Example 10

Find the orbital speed of a satellite orbiting the Earth at a height of $400 \mathrm{ km}$. (Earth
Radius $R_E = 6.37 \times 10^6 \mathrm{ m}$Earth mass $M_E = 5.97 \times 10^{24} \mathrm{ kg}$)

<details>
<summary>Solution</summary>

$$r = R_E + 400 \times 10^3 = 6.77 \times 10^6 \mathrm{ m}$$

$$v = \sqrt{\frac{GM_E}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.77 \times 10^6}} = \sqrt{5.88 \times 10^7} = 7668 \mathrm{ m/s}$$

</details>

---

## Common Pitfalls

- Confusing action-reaction pairs with balanced forces. Newton's third law pairs act on
 **different** objects; balanced forces act on the **same** object.
- Forgetting that friction opposes **relative** motion, not necessarily the direction of the applied
 force.
- Using $\mu_s N$ for kinetic friction or $\mu_k N$ for static friction. They are different.
- In projectile motion, treating horizontal and vertical components as coupled. They share only the
 common variable $t$.
- Adding centripetal force as an extra force on a free body diagram. Centripetal force is the
 **name** given to the net inward force, not an additional force.

---

## Summary Table

| Topic | Key Formula | Key Concept |
| ------------------- | -------------------------- | ------------------------------ |
| Newton's Second Law | $F = ma$ | Net force causes acceleration |
| Static friction | $f_s \leqslant \mu_s N$ | Adjusts to match applied force |
| Kinetic friction | $f_k = \mu_k N$ | Constant during sliding |
| Momentum | $p = mv$ | Vector quantity |
| Impulse | $J = F\Delta t = \Delta p$ | Area under F-t graph |
| Projectile range | $R = u^2\sin 2\theta/g$ | Maximum at $45^\circ$ |
| Centripetal force | $F_c = mv^2/r$ | Net force towards centre |
| Gravitation | $F = Gm_1 m_2/r^2$ | Inverse square law |
| Orbital speed | $v = \sqrt{GM/r}$ | Balances gravity |

---

## Problem Set

**Problem 1.** A $6 \mathrm{ kg}$ block on a smooth horizontal table is connected by a light
Inextensible string over a smooth pulley to a $4 \mathrm{ kg}$ block hanging freely. Find the
Acceleration of the system and the tension in the string.

<details>
<summary>Solution</summary>

For the $4 \mathrm{ kg}$ block (taking downward as positive): $4g - T = 4a$

For the $6 \mathrm{ kg}$ block: $T = 6a$

Adding: $4g = 10a \implies a = \frac{4 \times 9.81}{10} = 3.92 \mathrm{ m/s}^2$

$$T = 6 \times 3.92 = 23.5 \mathrm{ N}$$

</details>

If you get this wrong, revise: Newton's Laws of Motion / Second Law

**Problem 2.** A $3 \mathrm{ kg}$ block is placed on a rough inclined plane at $30^\circ$.
The coefficient of static friction is $0.35$. Does the block slide? If it does, find the
Acceleration ($\mu_k = 0.25$).

<details>
<summary>Solution</summary>

Check: $\tan 30^\circ = 0.577 \gt \mu_s = 0.35$So the block slides.

$$a = g(\sin\theta - \mu_k\cos\theta) = 9.81(0.5 - 0.25 \times 0.866) = 9.81(0.5 - 0.217) = 9.81 \times 0.283 = 2.78 \mathrm{ m/s}^2$$

</details>

If you get this wrong, revise: Friction / Inclined Planes

**Problem 3.** A $2 \mathrm{ kg}$ object moving at $6 \mathrm{ m/s}$ collides elastically with a
$4 \mathrm{ kg}$ object at rest. Find the velocities after collision.

<details>
<summary>Solution</summary>

Conservation of momentum: $2(6) + 4(0) = 2v_1 + 4v_2 \implies 12 = 2v_1 + 4v_2 \quad (1)$

Conservation of KE:
$\frac{1}{2}(2)(36) = \frac{1}{2}(2)v_1^2 + \frac{1}{2}(4)v_2^2 \implies 36 = v_1^2 + 2v_2^2 \quad (2)$

From (1): $v_1 = 6 - 2v_2$. Substituting into (2):

$$36 = (6 - 2v_2)^2 + 2v_2^2 = 36 - 24v_2 + 4v_2^2 + 2v_2^2 = 36 - 24v_2 + 6v_2^2$$

$$6v_2^2 - 24v_2 = 0 \implies 6v_2(v_2 - 4) = 0$$

$v_2 = 0$ (original) or $v_2 = 4 \mathrm{ m/s}$. Therefore $v_1 = 6 - 8 = -2 \mathrm{ m/s}$.

The $2 \mathrm{ kg}$ object rebounds at $2 \mathrm{ m/s}$; the $4 \mathrm{ kg}$ object moves forward
At $4 \mathrm{ m/s}$.

</details>

If you get this wrong, revise: Momentum and Impulse / Collisions

**Problem 4.** A $150 \mathrm{ g}$ cricket ball is hit by a bat. The force-time graph is a
Triangle with peak force $600 \mathrm{ N}$ and contact time $0.005 \mathrm{ s}$. Find the
Impulse and the speed of the ball after impact (initially at rest).

<details>
<summary>Solution</summary>

Impulse = area under F-t graph $= \frac{1}{2} \times 600 \times 0.005 = 1.5 \mathrm{ N\, s}$

$$J = \Delta p = mv \implies v = \frac{J}{m} = \frac{1.5}{0.150} = 10.0 \mathrm{ m/s}$$

</details>

If you get this wrong, revise: Momentum and Impulse / Impulse

**Problem 5.** A projectile is launched at $25 \mathrm{ m/s}$ from the edge of a cliff
$80 \mathrm{ m}$ high at $40^\circ$ above the horizontal. Find the horizontal distance from the
Cliff edge where it lands.

<details>
<summary>Solution</summary>

Vertical: $y = u_y t + \frac{1}{2}at^2$Where $u_y = 25\sin 40^\circ = 16.07 \mathrm{ m/s}$

$$-80 = 16.07t - 4.905t^2 \implies 4.905t^2 - 16.07t - 80 = 0$$

$$t = \frac{16.07 \pm \sqrt{258.2 + 1569.6}}{9.81} = \frac{16.07 \pm \sqrt{1827.8}}{9.81} = \frac{16.07 + 42.76}{9.81} = 5.99 \mathrm{ s}$$

Horizontal distance:
$d = u_x t = 25\cos 40^\circ \times 5.99 = 19.15 \times 5.99 = 114.7 \mathrm{ m}$

</details>

If you get this wrong, revise: Projectile Motion / Analysis by Components

**Problem 6.** A stone is tied to a string of length $1.2 \mathrm{ m}$ and whirled in a horizontal
Circle. The string breaks when the tension reaches $50 \mathrm{ N}$. The stone has mass
$0.4 \mathrm{ kg}$. Find the maximum speed before the string breaks.

<details>
<summary>Solution</summary>

The tension provides the centripetal force: $T = \frac{mv^2}{r}$

$$v = \sqrt{\frac{Tr}{m}} = \sqrt{\frac{50 \times 1.2}{0.4}} = \sqrt{150} = 12.2 \mathrm{ m/s}$$

</details>

If you get this wrong, revise: Circular Motion / Centripetal Acceleration and Force

**Problem 7.** A satellite orbits the Earth at a height of $600 \mathrm{ km}$. Find the orbital
Period and the gravitational field strength at that altitude.

<details>
<summary>Solution</summary>

$$r = 6.37 \times 10^6 + 600 \times 10^3 = 6.97 \times 10^6 \mathrm{ m}$$

$$g = \frac{GM_E}{r^2} = \frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{(6.97 \times 10^6)^2} = \frac{3.98 \times 10^{14}}{4.86 \times 10^{13}} = 8.19 \mathrm{ N/kg}$$

$$T = 2\pi\sqrt{\frac{r^3}{GM_E}} = 2\pi\sqrt{\frac{(6.97 \times 10^6)^3}{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}} = 2\pi\sqrt{\frac{3.385 \times 10^{20}}{3.982 \times 10^{14}}} = 2\pi\sqrt{850300} = 2\pi \times 922.1 = 5794 \mathrm{ s} = 96.6 \mathrm{ minutes}$$

</details>

If you get this wrong, revise: Gravitation / Orbital Motion

**Problem 8.** A $4 \mathrm{ kg}$ block slides down a rough incline of length $6 \mathrm{ m}$ at
$30^\circ$ to the horizontal. The coefficient of kinetic friction is $0.25$. Find the speed at the
Bottom if the block starts from rest.

<details>
<summary>Solution</summary>

Net force down the plane: $F = mg\sin 30^\circ - \mu_k mg\cos 30^\circ$

$$F = 4 \times 9.81 \times 0.5 - 0.25 \times 4 \times 9.81 \times 0.866 = 19.62 - 8.50 = 11.12 \mathrm{ N}$$

$$a = \frac{F}{m} = \frac{11.12}{4} = 2.78 \mathrm{ m/s}^2$$

$$v = \sqrt{2as} = \sqrt{2 \times 2.78 \times 6} = \sqrt{33.36} = 5.78 \mathrm{ m/s}$$

</details>

If you get this wrong, revise: Friction / Inclined Planes and Newton's Second Law

**Problem 9.** A $1.5 \mathrm{ kg}$ ball on a string of length $0.5 \mathrm{ m}$ is swung in a
Vertical circle. At the lowest point, the tension is $45 \mathrm{ N}$. Find the speed at the
Lowest point and the speed at the highest point.

<details>
<summary>Solution</summary>

At the lowest point: $T - mg = \frac{mv^2}{r}$

$$45 - 1.5 \times 9.81 = \frac{1.5 v_{\mathrm{bottom}}^2}{0.5} \implies 45 - 14.7 = 3 v_{\mathrm{bottom}}^2$$

$$v_{\mathrm{bottom}}^2 = \frac{30.3}{3} = 10.1 \implies v_{\mathrm{bottom}} = 3.18 \mathrm{ m/s}$$

Energy conservation between bottom and top:

$$\frac{1}{2}mv_{\mathrm{bottom}}^2 = \frac{1}{2}mv_{\mathrm{top}}^2 + mg(2r)$$

$$10.1 = v_{\mathrm{top}}^2 + 2 \times 9.81 \times 1.0 = v_{\mathrm{top}}^2 + 19.62$$

$$v_{\mathrm{top}}^2 = -9.52$$

The result is negative, meaning the ball does **not** reach the top of the circle. The speed is
Insufficient.

</details>

If you get this wrong, revise: Circular Motion / Vertical Circular Motion

**Problem 10.** Two astronauts of masses $80 \mathrm{ kg}$ and $60 \mathrm{ kg}$ are initially at
Rest in deep space, connected by a light rope. They push off each other and the $80 \mathrm{ kg}$
Astronaut moves away at $0.5 \mathrm{ m/s}$. Find the velocity of the $60 \mathrm{ kg}$ astronaut
And the distance between them after 5 seconds.

<details>
<summary>Solution</summary>

By conservation of momentum (initially at rest, total momentum = 0):

$$80 \times 0.5 + 60 \times v_2 = 0 \implies v_2 = -\frac{40}{60} = -0.667 \mathrm{ m/s}$$

The $60 \mathrm{ kg}$ astronaut moves at $0.667 \mathrm{ m/s}$ in the opposite direction.

Relative speed $= 0.5 + 0.667 = 1.167 \mathrm{ m/s}$

$$\mathrm{Distance\ after\ 5\ s} = 1.167 \times 5 = 5.83 \mathrm{ m}$$

</details>

If you get this wrong, revise: Momentum and Impulse / Conservation of Momentum

For the A-Level treatment of this topic, see [Dynamics](https://alevel.wyattau.com/docs/physics/mechanics/dynamics).

---

:::tip
Diagnostic Test
Ready to test your understanding of **Forces and Motion**? The [diagnostic test](/docs/dse/Physics/diagnostics/diag-forces-motion) contains the hardest questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Forces and Motion with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/dse/Physics/diagnostics/diagnostic-guide) for instructions on self-marking and building a personal test matrix.
:::

---

## Derivations

### Derivation: Centripetal Acceleration

Consider an object moving at constant speed $v$ in a circle of radius $r$. In a small time
$\Delta t$It moves from point A to point B, subtending a small angle $\Delta\theta$ at the
Centre.

The change in velocity is directed towards the centre (radially inward). For small angles:

$$\Delta v \approx v \cdot \Delta\theta = v \cdot \frac{v\Delta t}{r} = \frac{v^2 \Delta t}{r}$$

The centripetal acceleration is:

$$a_c = \frac{\Delta v}{\Delta t} = \frac{v^2}{r}$$

In terms of angular velocity ($v = r\omega$):

$$a_c = \frac{(r\omega)^2}{r} = r\omega^2 = \frac{4\pi^2 r}{T^2}$$

This acceleration is always directed towards the centre of the circle and is perpendicular to the
Velocity (which is tangential). Since the force is perpendicular to the velocity, the magnetic
Force does no work and the speed remains constant.

### Derivation: Escape Velocity

For an object to escape from the surface of a planet of mass $M$ and radius $R$Its total energy
(kinetic + gravitational potential) at infinity must be at least zero.

At the surface: $E_{\mathrm{total}} = \frac{1}{2}mv_e^2 - \frac{GMm}{R}$

At infinity: $E_{\mathrm{total}} = 0$ (just barely escaping)

$$\frac{1}{2}mv_e^2 = \frac{GMm}{R}$$

$$v_e = \sqrt{\frac{2GM}{R}}$$

### Derivation: Orbital Speed and Period

For a satellite in circular orbit at radius $r$ around a central body of mass $M$The
Gravitational force provides the centripetal force:

$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

$$v = \sqrt{\frac{GM}{r}}$$

The orbital period is:

$$T = \frac{2\pi r}{v} = \frac{2\pi r}{\sqrt{GM/r}} = 2\pi\sqrt{\frac{r^3}{GM}}$$

Squaring both sides: $T^2 = \frac{4\pi^2}{GM}r^3$Which is Kepler's third law ($T^2 \propto r^3$).

### Derivation: Range of a Projectile

For a projectile launched from ground level with speed $u$ at angle $\theta$:

Horizontal: $x = u\cos\theta \cdot t$

Vertical at landing ($y = 0$): $0 = u\sin\theta \cdot t - \frac{1}{2}gt^2 \implies t = \frac{2u\sin\theta}{g}$

Substituting: $R = u\cos\theta \cdot \frac{2u\sin\theta}{g} = \frac{u^2 \cdot 2\sin\theta\cos\theta}{g} = \frac{u^2\sin 2\theta}{g}$

Maximum range when $\sin 2\theta = 1$I.e., $\theta = 45^\circ$: $R_{\max} = u^2/g$.

---

## Experimental Methods

### Determining Acceleration Due to Gravity Using a Free-Fall Apparatus

**Apparatus:** An electromagnetic release mechanism, a metal ball, a trapdoor, an electronic
Timer, and a metre rule.

**Procedure:**
1. Measure the height $h$ from the bottom of the ball to the trapdoor.
2. Release the ball electromagnetically; the timer starts.
3. The ball hits the trapdoor, stopping the timer. Record the time $t$.
4. Repeat for several heights.
5. Plot $h$ (y-axis) versus $t^2$ (x-axis).
6. From $h = \frac{1}{2}gt^2$: gradient $= g/2$So $g = 2 \times \mathrm{gradient}$.

**Sources of error:**
- Reaction time of the timer mechanism (minimised by using electronic timing).
- Air resistance on the ball (use a dense, small ball to minimise).
- Measurement of height $h$ (measure from the bottom of the ball, not the centre).

**Improvements:** Repeat each measurement multiple times and average. Use a heavier ball to reduce
Air resistance effects.

### Verifying Newton's Second Law Using a Trolley on a Ramp

**Apparatus:** A trolley on a horizontal track, light gates, a set of slotted masses, a string
Over a pulley, and a data logger.

**Procedure:**
1. Attach a string to the trolley, passing over a pulley at the edge of the track, with a
 hanging mass $m$ providing the accelerating force.
2. Measure the acceleration $a$ of the trolley using the light gates for different values of the
 total mass ($m + M$Where $M$ is the trolley mass) while keeping the accelerating force
 $mg$ constant.
3. Plot $a$ (y-axis) versus $1/(m + M)$ (x-axis). A straight line through the origin confirms
 $a \propto 1/(\mathrm{total\ mass})$.
4. Alternatively, keep the total mass constant and vary the hanging mass. Plot $a$ versus $F = mg$.
 A straight line through the origin confirms $a \propto F$.

**Precautions:**
- Compensate for friction by tilting the track slightly so the trolley moves at constant speed
 with no hanging mass.
- Ensure the string is parallel to the track.
- Use a light string and low-friction pulley.

### Measuring the Coefficient of Friction on an Inclined Plane

**Apparatus:** An inclined plane, a block, a protractor, and a set of masses.

**Procedure:**
1. Place the block on the inclined plane and gradually increase the angle.
2. Record the angle $\theta_c$ at which the block just begins to slide.
3. At this critical angle: $\tan\theta_c = \mu_s$.
4. Repeat several times and average.
5. For the coefficient of kinetic friction, measure the acceleration $a$ of the block sliding
 down the plane: $a = g(\sin\theta - \mu_k\cos\theta)$So $\mu_k = \tan\theta - a/(g\cos\theta)$.

---

## Data Analysis and Uncertainty

### Uncertainty in Acceleration Calculations

When determining $g$ from $h = \frac{1}{2}gt^2$:

$$g = \frac{2h}{t^2}$$

$$\frac{\Delta g}{g} = \sqrt{\left(\frac{\Delta h}{h}\right)^2 + \left(2\frac{\Delta t}{t}\right)^2}$$

The time measurement dominates the uncertainty due to the factor of 2.

**Example:** $h = (1.00 \pm 0.01) \mathrm{ m}$$t = (0.450 \pm 0.005) \mathrm{ s}$:

$$g = \frac{2 \times 1.00}{(0.450)^2} = \frac{2.00}{0.2025} = 9.88 \mathrm{ m/s}^2$$

$$\frac{\Delta g}{g} = \sqrt{(0.01)^2 + (2 \times 0.0111)^2} = \sqrt{0.0001 + 0.000493} = \sqrt{0.000593} = 0.0244 = 2.4\%$$

$$\Delta g = 0.024 \times 9.88 = 0.24 \mathrm{ m/s}^2$$

$$g = (9.9 \pm 0.2) \mathrm{ m/s}^2$$

### Linearising Projectile Motion Data

To verify $R = u^2\sin 2\theta / g$ at constant launch speed:
- Plot $R$ (y-axis) versus $\sin 2\theta$ (x-axis).
- A straight line through the origin confirms the relationship.
- The gradient equals $u^2/g$.

---

## Additional Worked Examples

### Worked Example 11

A $3.0 \mathrm{ kg}$ block is pushed against a spring of spring constant $300 \mathrm{ N/m}$
Compressing it by $0.10 \mathrm{ m}$. The block is released and moves across a rough horizontal
Surface with $\mu_k = 0.2$. How far does the block travel before coming to rest?

<details>
<summary>Solution</summary>

Energy stored in spring: $E_p = \frac{1}{2}(300)(0.10)^2 = 1.5 \mathrm{ J}$

This energy is dissipated by friction: $E_p = f_k \times d = \mu_k mg \times d$

$$1.5 = 0.2 \times 3.0 \times 9.81 \times d = 5.886d$$

$$d = \frac{1.5}{5.886} = 0.255 \mathrm{ m}$$

</details>

### Worked Example 12

A ball is thrown from the top of a building $45 \mathrm{ m}$ high with initial velocity
$20 \mathrm{ m/s}$ at $30^\circ$ above the horizontal. Find:
(a) the time taken to reach the ground,
(b) the horizontal distance from the base of the building where it lands,
(c) the speed and direction of the ball just before impact.

<details>
<summary>Solution</summary>

$u_x = 20\cos 30^\circ = 17.32 \mathrm{ m/s}$$u_y = 20\sin 30^\circ = 10.0 \mathrm{ m/s}$

(a) Vertical motion (taking upward as positive, $h = -45 \mathrm{ m}$):

$$-45 = 10.0t - \frac{1}{2}(9.81)t^2 \implies 4.905t^2 - 10.0t - 45 = 0$$

$$t = \frac{10.0 \pm \sqrt{100 + 882.9}}{9.81} = \frac{10.0 \pm \sqrt{982.9}}{9.81} = \frac{10.0 + 31.35}{9.81} = 4.21 \mathrm{ s}$$

(b) Horizontal distance: $d = u_x t = 17.32 \times 4.21 = 72.9 \mathrm{ m}$

(c) Vertical velocity at impact: $v_y = u_y - gt = 10.0 - 9.81 \times 4.21 = 10.0 - 41.3 = -31.3 \mathrm{ m/s}$

Horizontal velocity at impact: $v_x = 17.32 \mathrm{ m/s}$ (constant)

$$v = \sqrt{v_x^2 + v_y^2} = \sqrt{17.32^2 + 31.3^2} = \sqrt{300 + 980} = \sqrt{1280} = 35.8 \mathrm{ m/s}$$

Angle below horizontal: $\alpha = \tan^{-1}\left(\frac{31.3}{17.32}\right) = \tan^{-1}(1.807) = 61.0^\circ$ below horizontal

</details>

### Worked Example 13

A satellite of mass $500 \mathrm{ kg}$ is in a circular orbit $300 \mathrm{ km}$ above the
Earth's surface. Calculate:
(a) the orbital speed,
(b) the orbital period,
(c) the gravitational potential energy,
(d) the kinetic energy,
(e) the total energy.

(Earth mass $= 5.97 \times 10^{24} \mathrm{ kg}$Earth radius $= 6.37 \times 10^6 \mathrm{ m}$)

<details>
<summary>Solution</summary>

$$r = 6.37 \times 10^6 + 300 \times 10^3 = 6.67 \times 10^6 \mathrm{ m}$$

(a) $v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.67 \times 10^6}} = \sqrt{5.97 \times 10^7} = 7727 \mathrm{ m/s}$

(b) $T = \frac{2\pi r}{v} = \frac{2\pi \times 6.67 \times 10^6}{7727} = \frac{4.19 \times 10^7}{7727} = 5421 \mathrm{ s} = 90.4 \mathrm{ minutes}$

(c) $E_p = -\frac{GMm}{r} = -\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times 500}{6.67 \times 10^6} = -\frac{1.99 \times 10^{17}}{6.67 \times 10^6} = -2.98 \times 10^{10} \mathrm{ J}$

(d) $E_k = \frac{1}{2}mv^2 = \frac{1}{2}(500)(7727)^2 = 250 \times 5.97 \times 10^7 = 1.49 \times 10^{10} \mathrm{ J}$

(e) $E_{\mathrm{total}} = E_k + E_p = 1.49 \times 10^{10} + (-2.98 \times 10^{10}) = -1.49 \times 10^{10} \mathrm{ J}$

Note: For a circular orbit, $E_{\mathrm{total}} = -E_k = \frac{1}{2}E_p$.

</details>

---

## Exam-Style Questions

### Question 1 (DSE Structured)

A student investigates the motion of a trolley down an inclined plane. The plane is inclined at
$20^\circ$ to the horizontal. The trolley is released from rest and its acceleration is measured
Using light gates at different distances from the starting point.

| Distance from start (m) | Speed (m/s) |
| ----------------------- | ----------- |
| 0.20 | 1.10 |
| 0.40 | 1.58 |
| 0.60 | 1.95 |
| 0.80 | 2.25 |
| 1.00 | 2.52 |

(a) Plot a graph of $v^2$ (y-axis) against distance $s$ (x-axis). Determine the acceleration
From the gradient.

(b) Calculate the theoretical acceleration for a frictionless incline and compare it with the
Experimental value. Hence determine the coefficient of kinetic friction.

(c) Explain why the student plots $v^2$ against $s$ rather than $v$ against $s$.

(d) Suggest two improvements to this experiment to reduce random errors.

<details>
<summary>Solution</summary>

(a)

| $s$ (m) | $v^2$ (m$^2$/s$^2$) |
| ------- | -------------------- |
| 0.20 | $1.10^2 = 1.21$ |
| 0.40 | $1.58^2 = 2.50$ |
| 0.60 | $1.95^2 = 3.80$ |
| 0.80 | $2.25^2 = 5.06$ |
| 1.00 | $2.52^2 = 6.35$ |

From $v^2 = u^2 + 2as$ with $u = 0$: $v^2 = 2as$.

Gradient $= \Delta v^2 / \Delta s \approx (6.35 - 1.21)/(1.00 - 0.20) = 5.14/0.80 = 6.42 \mathrm{ m/s}^2$

Since gradient $= 2a$: $a = 6.42/2 = 3.21 \mathrm{ m/s}^2$

(b) Theoretical (frictionless): $a = g\sin 20^\circ = 9.81 \times 0.342 = 3.36 \mathrm{ m/s}^2$

Experimental: $a = 3.21 \mathrm{ m/s}^2$

The difference is due to friction: $a_{\mathrm{exp}} = g\sin\theta - \mu_k g\cos\theta$

$$3.21 = 3.36 - \mu_k \times 9.81 \times \cos 20^\circ = 3.36 - 9.22\mu_k$$

$$\mu_k = \frac{3.36 - 3.21}{9.22} = \frac{0.15}{9.22} = 0.016$$

(c) From the kinematic equation $v^2 = u^2 + 2as$Plotting $v^2$ against $s$ (with $u = 0$)
Gives a straight line through the origin with gradient $2a$. A plot of $v$ against $s$ would be
A curve ($v = \sqrt{2as}$), which is harder to analyse.

(d) Two improvements:
1. Repeat each measurement several times and use the average to reduce random errors.
2. Use a data logger with higher time resolution (smaller uncertainty in timing).

</details>

### Question 2 (DSE Structured)

Two objects, A ($2.0 \mathrm{ kg}$) and B ($3.0 \mathrm{ kg}$), are connected by a light
Inextensible string over a smooth pulley. Object A rests on a rough horizontal table
($\mu_k = 0.3$) and object B hangs freely.

(a) Draw free body diagrams for both objects.

(b) Calculate the acceleration of the system and the tension in the string.

(c) Object B starts from rest. Find the speed of the system after B has fallen $0.80 \mathrm{ m}$.

(d) If the string is cut just as B reaches the floor (having fallen $0.80 \mathrm{ m}$), how
Far does A slide before stopping?

<details>
<summary>Solution</summary>

(a) Object A: Weight $2g$ down, normal reaction $N$ up, tension $T$ right, friction $f$ left.
Object B: Weight $3g$ down, tension $T$ up.

(b) For B (taking down as positive): $3g - T = 3a \quad (1)$

For A (taking right as positive): $T - f = 2a$Where $f = \mu_k N = \mu_k \times 2g = 0.3 \times 2g = 0.6g$

$$T - 0.6g = 2a \quad (2)$$

Adding (1) and (2): $3g - 0.6g = 5a \implies 2.4g = 5a$

$$a = \frac{2.4 \times 9.81}{5} = \frac{23.54}{5} = 4.71 \mathrm{ m/s}^2$$

From (2): $T = 2a + 0.6g = 2(4.71) + 0.6(9.81) = 9.42 + 5.89 = 15.3 \mathrm{ N}$

(c) $v^2 = u^2 + 2as = 0 + 2(4.71)(0.80) = 7.54$

$$v = \sqrt{7.54} = 2.75 \mathrm{ m/s}$$

(d) After the string is cut, A slides with initial speed $2.75 \mathrm{ m/s}$ and decelerates due
To friction only:

$$a = -\frac{f}{m} = -\frac{\mu_k mg}{m} = -\mu_k g = -0.3 \times 9.81 = -2.94 \mathrm{ m/s}^2$$

$$v^2 = u^2 + 2as \implies 0 = (2.75)^2 + 2(-2.94)s$$

$$s = \frac{7.56}{5.89} = 1.28 \mathrm{ m}$$

A slides $1.28 \mathrm{ m}$ before stopping.

</details>

### Question 3 (DSE Structured)

(a) State the conditions for an object to be in equilibrium.

(b) A uniform beam of weight $80 \mathrm{ N}$ and length $4.0 \mathrm{ m}$ is hinged at one
End (point P) and supported by a cable attached to the other end (point Q). The cable makes an
Angle of $30^\circ$ with the beam. A $150 \mathrm{ N}$ weight hangs from a point $1.5 \mathrm{ m}$
From P.

(i) Calculate the tension in the cable.
(ii) Calculate the magnitude and direction of the force exerted by the hinge on the beam.

<details>
<summary>Solution</summary>

(a) For an object to be in equilibrium:
1. The net force on the object must be zero ($\sum \vec{F} = 0$).
2. The net moment (torque) about any point must be zero ($\sum \tau = 0$).

(b) (i) Take moments about P (eliminates the hinge force):

Clockwise moments = $80 \times 2.0 + 150 \times 1.5 = 160 + 225 = 385 \mathrm{ N\, m}$

(Weight of beam acts at centre, $2.0 \mathrm{ m}$ from P.)

Anticlockwise moment = $T\sin 30^\circ \times 4.0 = T \times 0.5 \times 4.0 = 2.0T$

$$2.0T = 385 \implies T = 192.5 \mathrm{ N}$$

(ii) Resolving forces on the beam:

Vertical: $H_y + T\sin 30^\circ = 80 + 150$

$$H_y + 192.5 \times 0.5 = 230 \implies H_y + 96.25 = 230 \implies H_y = 133.75 \mathrm{ N}$$ (upward)

Horizontal: $H_x = T\cos 30^\circ = 192.5 \times 0.866 = 166.7 \mathrm{ N}$ (away from the wall)

$$H = \sqrt{H_x^2 + H_y^2} = \sqrt{166.7^2 + 133.75^2} = \sqrt{27789 + 17889} = \sqrt{45678} = 213.7 \mathrm{ N}$$

Angle above horizontal: $\alpha = \tan^{-1}(133.75/166.7) = \tan^{-1}(0.803) = 38.7^\circ$

</details>

### Question 4 (DSE Structured)

A $500 \mathrm{ g}$ ball is attached to a string of length $0.80 \mathrm{ m}$ and swung in a
Vertical circle.

(a) The ball has speed $6.0 \mathrm{ m/s}$ at the lowest point. Calculate the tension in the
String at this point.

(b) Calculate the speed of the ball at the highest point.

(c) Calculate the tension in the string at the highest point.

(d) Calculate the minimum speed at the lowest point for the ball to complete the full circle.

(e) Explain why the ball cannot complete the full circle if the string is replaced by a light
Rod (consider what happens at the top).

<details>
<summary>Solution</summary>

(a) At the lowest point: $T_{\mathrm{bottom}} - mg = \frac{mv_{\mathrm{bottom}}^2}{r}$

$$T_{\mathrm{bottom}} = mg + \frac{mv_{\mathrm{bottom}}^2}{r} = 0.5 \times 9.81 + \frac{0.5 \times 36}{0.80} = 4.905 + 22.5 = 27.4 \mathrm{ N}$$

(b) Energy conservation between lowest and highest points (height difference $= 2r = 1.6 \mathrm{ m}$):

$$\frac{1}{2}mv_{\mathrm{bottom}}^2 = \frac{1}{2}mv_{\mathrm{top}}^2 + mg(2r)$$

$$\frac{1}{2}(0.5)(36) = \frac{1}{2}(0.5)v_{\mathrm{top}}^2 + 0.5 \times 9.81 \times 1.6$$

$$9.0 = 0.25v_{\mathrm{top}}^2 + 7.85$$

$$v_{\mathrm{top}}^2 = \frac{9.0 - 7.85}{0.25} = \frac{1.15}{0.25} = 4.6$$

$$v_{\mathrm{top}} = \sqrt{4.6} = 2.14 \mathrm{ m/s}$$

(c) At the highest point: $T_{\mathrm{top}} + mg = \frac{mv_{\mathrm{top}}^2}{r}$

$$T_{\mathrm{top}} = \frac{mv_{\mathrm{top}}^2}{r} - mg = \frac{0.5 \times 4.6}{0.80} - 4.905 = 2.875 - 4.905 = -2.03 \mathrm{ N}$$

Since the tension is negative, the string goes slack before the ball reaches the top. The ball
Does **not** complete the full circle.

(d) For the ball to just complete the circle: $T_{\mathrm{top}} = 0$ at the top, so
$v_{\mathrm{top}} = \sqrt{gr} = \sqrt{9.81 \times 0.80} = \sqrt{7.848} = 2.80 \mathrm{ m/s}$

$$\frac{1}{2}mv_{\mathrm{bottom}}^2 = \frac{1}{2}m(gr) + mg(2r) = \frac{1}{2}mgr + 2mgr = \frac{5}{2}mgr$$

$$v_{\mathrm{bottom}} = \sqrt{5gr} = \sqrt{5 \times 9.81 \times 0.80} = \sqrt{39.24} = 6.26 \mathrm{ m/s}$$

(e) With a light rod, the rod can push as well as pull. At the top, even if $v_{\mathrm{top}} < \sqrt{gr}$
The rod can exert a push (compression) to provide the additional centripetal force. The ball will
Still complete the circle as long as it reaches the top with any speed (the rod supports it).

With a string, the string can only pull (tension $\geq 0$). If the speed at the top is too low,
The string goes slack and the ball falls.

</details>

### Question 5 (DSE Structured)

A spacecraft of mass $1000 \mathrm{ kg}$ is travelling towards the Moon. The Moon has mass
$7.35 \times 10^{22} \mathrm{ kg}$ and radius $1.74 \times 10^6 \mathrm{ m}$.

(a) Calculate the gravitational field strength on the surface of the Moon.

(b) The spacecraft is at a height of $500 \mathrm{ km}$ above the Moon's surface. Calculate the
Gravitational force on the spacecraft.

(c) Calculate the escape velocity from the Moon's surface.

(d) Explain why the Moon has no atmosphere, referring to escape velocity and molecular speeds.

<details>
<summary>Solution</summary>

(a) $g_{\mathrm{Moon}} = \frac{GM}{R^2} = \frac{6.67 \times 10^{-11} \times 7.35 \times 10^{22}}{(1.74 \times 10^6)^2}$

$$g_{\mathrm{Moon}} = \frac{4.90 \times 10^{12}}{3.03 \times 10^{12}} = 1.62 \mathrm{ N/kg}$$

(b) $r = 1.74 \times 10^6 + 500 \times 10^3 = 2.24 \times 10^6 \mathrm{ m}$

$$F = \frac{GMm}{r^2} = \frac{6.67 \times 10^{-11} \times 7.35 \times 10^{22} \times 1000}{(2.24 \times 10^6)^2} = \frac{4.90 \times 10^{15}}{5.02 \times 10^{12}} = 976 \mathrm{ N}$$

(c) $v_e = \sqrt{\frac{2GM}{R}} = \sqrt{\frac{2 \times 6.67 \times 10^{-11} \times 7.35 \times 10^{22}}{1.74 \times 10^6}} = \sqrt{\frac{9.80 \times 10^{12}}{1.74 \times 10^6}} = \sqrt{5.63 \times 10^6} = 2370 \mathrm{ m/s}$

(d) The Moon's escape velocity ($2370 \mathrm{ m/s}$) is relatively low. Gas molecules in the
Upper atmosphere have a range of speeds described by the Maxwell-Boltzmann distribution. A
Significant fraction of molecules (especially lighter ones like hydrogen and helium) have speeds
Exceeding the escape velocity. Over geological time, these molecules escape into space, and the
Moon cannot retain an atmosphere. The Earth's much higher escape velocity ($11200 \mathrm{ m/s}$)
Means very few molecules have sufficient speed to escape.

</details>

---

## Extended Problems

### Extended Problem 1: Banked Curve with Friction

A road curve of radius $80 \mathrm{ m}$ is banked at $15^\circ$. The coefficient of static
Friction between tyres and road is $0.40$.

(a) Calculate the maximum speed at which a car can negotiate the curve without sliding up the
Bank.

(b) Calculate the minimum speed at which the car can negotiate the curve without sliding down
The bank.

<details>
<summary>Solution</summary>

(a) At maximum speed, friction acts down the bank. Taking components:

Horizontally: $N\sin\theta + f\cos\theta = \frac{mv_{\max}^2}{r}$

Vertically: $N\cos\theta - f\sin\theta = mg$

Dividing the horizontal by the vertical equation:

$$\frac{\sin\theta + \mu_s\cos\theta}{\cos\theta - \mu_s\sin\theta} = \frac{v_{\max}^2}{rg}$$

$$v_{\max}^2 = rg\frac{\sin 15^\circ + 0.40\cos 15^\circ}{\cos 15^\circ - 0.40\sin 15^\circ} = 80 \times 9.81 \times \frac{0.259 + 0.386}{0.966 - 0.104} = 784.8 \times \frac{0.645}{0.862} = 587$$

$$v_{\max} = \sqrt{587} = 24.2 \mathrm{ m/s}$$

(b) At minimum speed, friction acts up the bank:

$$v_{\min}^2 = rg\frac{\sin\theta - \mu_s\cos\theta}{\cos\theta + \mu_s\sin\theta} = 80 \times 9.81 \times \frac{0.259 - 0.386}{0.966 + 0.104} = 784.8 \times \frac{-0.127}{1.070}$$

Since the numerator is negative, $v_{\min}^2 < 0$Meaning the car will not slide down the bank
At any speed (the banking alone provides enough centripetal force for stationary or very slow
Speeds). The minimum speed is effectively $0$.

</details>

### Extended Problem 2: Satellite Orbit Transfer

A satellite of mass $500 \mathrm{ kg}$ is in a circular orbit of radius $7.0 \times 10^6 \mathrm{ m}$
Around the Earth. The satellite needs to transfer to a higher circular orbit of radius
$7.5 \times 10^6 \mathrm{ m}$.

(a) Calculate the orbital speed in the lower orbit.

(b) Calculate the orbital speed in the higher orbit.

(c) Calculate the total energy required for the transfer (ignoring the mass of fuel burned).

(Earth mass $= 5.97 \times 10^{24} \mathrm{ kg}$)

<details>
<summary>Solution</summary>

(a) $v_1 = \sqrt{\frac{GM}{r_1}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{7.0 \times 10^6}} = \sqrt{5.69 \times 10^7} = 7544 \mathrm{ m/s}$

(b) $v_2 = \sqrt{\frac{GM}{r_2}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{7.5 \times 10^6}} = \sqrt{5.31 \times 10^7} = 7287 \mathrm{ m/s}$

(c) The energy in a circular orbit: $E = -\frac{GMm}{2r}$

$$E_1 = -\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times 500}{2 \times 7.0 \times 10^6} = -\frac{1.99 \times 10^{17}}{1.4 \times 10^7} = -1.42 \times 10^{10} \mathrm{ J}$$

$$E_2 = -\frac{1.99 \times 10^{17}}{1.5 \times 10^7} = -1.33 \times 10^{10} \mathrm{ J}$$

Energy required: $\Delta E = E_2 - E_1 = -1.33 \times 10^{10} - (-1.42 \times 10^{10}) = 9.0 \times 10^8 \mathrm{ J}$

</details>


