---
title: Forces and Motion
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Physics
categories:
  - DSE
  - Physics
slug: dse-physics-forces-and-motion
---

## Newton's Laws of Motion

### First Law (Law of Inertia)

An object remains at rest or continues to move with uniform velocity unless acted upon by a net
external force.

$$\sum \vec{F} = \vec{0} \implies \vec{v} = \mathrm{constant}$$

Inertia is the resistance of an object to changes in its state of motion. It is quantified by the
object's mass: a larger mass implies greater inertia.

### Second Law

The net force acting on an object equals the rate of change of its momentum:

$$\vec{F}_{\mathrm{net}} = \frac{d\vec{p}}{dt} = \frac{d(m\vec{v})}{dt}$$

For constant mass this reduces to:

$$\vec{F}_{\mathrm{net}} = m\vec{a}$$

The SI unit of force is the newton (N), where $1 \mathrm{ N} = 1 \mathrm{ kg}\cdot\mathrm{m/s}^2$.

### Third Law

If body `A` exerts a force on body `B`, then body `B` exerts an equal and opposite force on body
`A`:

$$\vec{F}_{AB} = -\vec{F}_{BA}$$

Action-reaction pairs always act on **different** bodies. They are equal in magnitude, opposite in
direction, and of the same type (both gravitational, both contact, etc.).

### Worked Example 1

A block of mass $8 \mathrm{ kg}$ is pushed across a rough horizontal surface by a horizontal force
of $50 \mathrm{ N}$. The coefficient of kinetic friction is $0.3$. Find the acceleration.

Normal reaction: $N = mg = 8 \times 9.81 = 78.48 \mathrm{ N}$

Friction: $f_k = \mu_k N = 0.3 \times 78.48 = 23.54 \mathrm{ N}$

$$a = \frac{F_{\mathrm{net}}}{m} = \frac{50 - 23.54}{8} = \frac{26.46}{8} = 3.31 \mathrm{ m/s}^2$$

---

## Friction

### Static and Kinetic Friction

| Type    | Symbol | Condition          | Magnitude                           |
| ------- | ------ | ------------------ | ----------------------------------- |
| Static  | $f_s$  | No relative motion | $0 \leqslant f_s \leqslant \mu_s N$ |
| Kinetic | $f_k$  | Surfaces sliding   | $f_k = \mu_k N$                     |

The coefficient of static friction $\mu_s$ is always greater than or equal to the coefficient of
kinetic friction $\mu_k$:

$$\mu_s \geqslant \mu_k$$

Static friction adjusts its magnitude to match the applied force, up to a maximum of $\mu_s N$. Once
the applied force exceeds this maximum, the object begins to slide, and kinetic friction takes over.

### Inclined Planes

For an object on an inclined plane at angle $\theta$ to the horizontal:

- Component of weight parallel to the plane: $mg\sin\theta$
- Component of weight perpendicular to the plane: $mg\cos\theta$
- Normal reaction: $N = mg\cos\theta$
- Friction (if sliding): $f = \mu mg\cos\theta$

The object slides down the plane when $mg\sin\theta \gt \mu_s mg\cos\theta$, i.e.:

$$\tan\theta \gt \mu_s$$

### Worked Example 2

A $5 \mathrm{ kg}$ block rests on a rough plane inclined at $35^\circ$. The block is on the verge of
sliding. Find the coefficient of static friction.

At the point of sliding, $mg\sin\theta = \mu_s mg\cos\theta$:

$$\mu_s = \tan 35^\circ = 0.700$$

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

| Type                | Momentum  | Kinetic Energy               |
| ------------------- | --------- | ---------------------------- |
| Elastic             | Conserved | Conserved                    |
| Inelastic           | Conserved | Not conserved                |
| Perfectly inelastic | Conserved | Maximum loss (objects stick) |

### Worked Example 3

A $0.2 \mathrm{ kg}$ ball travelling at $15 \mathrm{ m/s}$ strikes a wall and rebounds at
$10 \mathrm{ m/s}$ along the same line. Contact time is $0.02 \mathrm{ s}$. Find the average force.

Taking the initial direction as positive:

$$\Delta p = m(v - u) = 0.2(-10 - 15) = 0.2(-25) = -5.0 \mathrm{ kg\, m/s}$$

$$F = \frac{\Delta p}{\Delta t} = \frac{-5.0}{0.02} = -250 \mathrm{ N}$$

The magnitude of the average force is $250 \mathrm{ N}$, directed away from the wall.

---

## Projectile Motion

### Analysis by Components

For a projectile launched with speed $u$ at angle $\theta$ above the horizontal:

| Quantity     | Horizontal                     | Vertical                                   |
| ------------ | ------------------------------ | ------------------------------------------ |
| Acceleration | $0$                            | $-g$                                       |
| Velocity     | $u_x = u\cos\theta$ (constant) | $u_y = u\sin\theta - gt$                   |
| Displacement | $x = u\cos\theta\cdot t$       | $y = u\sin\theta\cdot t - \frac{1}{2}gt^2$ |

### Key Results

**Time of flight** (landing at same height):

$$T = \frac{2u\sin\theta}{g}$$

**Maximum height:**

$$H = \frac{u^2\sin^2\theta}{2g}$$

**Horizontal range:**

$$R = \frac{u^2\sin 2\theta}{g}$$

Maximum range occurs at $\theta = 45^\circ$, giving $R_{\max} = u^2/g$.

Complementary angles ($\theta$ and $90^\circ - \theta$) produce the same range.

<PhetSimulation simulationId="projectile-motion" title="Projectile Motion" />

Explore how launch angle and initial speed affect the trajectory.

### Worked Example 4

A ball is thrown from ground level with speed $20 \mathrm{ m/s}$ at $50^\circ$ above the horizontal.
Find the range and maximum height.

$$R = \frac{20^2 \sin 100^\circ}{9.81} = \frac{400 \times 0.9848}{9.81} = 40.2 \mathrm{ m}$$

$$H = \frac{20^2 \sin^2 50^\circ}{2 \times 9.81} = \frac{400 \times 0.5868}{19.62} = 11.97 \mathrm{ m}$$

---

## Circular Motion

### Angular Quantities

| Quantity             | Symbol   | SI Unit | Relation                  |
| -------------------- | -------- | ------- | ------------------------- |
| Angular displacement | $\theta$ | rad     | $\theta = s/r$            |
| Angular velocity     | $\omega$ | rad/s   | $\omega = d\theta/dt$     |
| Period               | $T$      | s       | $T = 2\pi/\omega$         |
| Frequency            | $f$      | Hz      | $f = 1/T = \omega/(2\pi)$ |

Linear-angular relation: $v = r\omega$, $a = r\alpha$

### Centripetal Acceleration and Force

An object moving at constant speed $v$ in a circle of radius $r$ has centripetal acceleration:

$$a_c = \frac{v^2}{r} = \omega^2 r = \frac{4\pi^2 r}{T^2}$$

directed towards the centre of the circle. The required centripetal force is:

$$F_c = \frac{mv^2}{r} = m\omega^2 r$$

### Vertical Circular Motion

For an object on a string in vertical circular motion, speed varies because gravity does work. At
the top of the circle:

$$T + mg = \frac{mv_{\mathrm{top}}^2}{r}$$

At the bottom:

$$T - mg = \frac{mv_{\mathrm{bottom}}^2}{r}$$

For the object to complete the full circle, the string must remain taut at the top
($T \geqslant 0$):

$$v_{\mathrm{top}} \geqslant \sqrt{gr}$$

### Worked Example 5

A car of mass $1200 \mathrm{ kg}$ travels around a flat curve of radius $60 \mathrm{ m}$ at
$15 \mathrm{ m/s}$. Find the minimum coefficient of friction required.

$$F_c = \frac{mv^2}{r} = \frac{1200 \times 15^2}{60} = \frac{1200 \times 225}{60} = 4500 \mathrm{ N}$$

The centripetal force is provided by friction: $F_c = \mu_s mg$

$$\mu_s = \frac{F_c}{mg} = \frac{4500}{1200 \times 9.81} = \frac{4500}{11772} = 0.382$$

---

## Gravitation

### Newton's Law of Universal Gravitation

$$F = \frac{Gm_1 m_2}{r^2}$$

where $G = 6.67 \times 10^{-11} \mathrm{ N\, m}^2\,\mathrm{ kg}^{-2}$.

### Gravitational Field Strength

$$g = \frac{F}{m} = \frac{GM}{r^2}$$

Near the Earth's surface, $g \approx 9.81 \mathrm{ N/kg}$ (equivalent to $\mathrm{ m/s}^2$).

### Gravitational Potential Energy

For two masses separated by distance $r$:

$$E_p = -\frac{GMm}{r}$$

The negative sign reflects the convention that $E_p = 0$ at infinite separation. Work must be done
against gravity to increase the separation.

### Orbital Motion

For a satellite of mass $m$ orbiting a central body of mass $M$ at radius $r$:

$$\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v = \sqrt{\frac{GM}{r}}$$

$$T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}$$

This is Kepler's third law: $T^2 \propto r^3$.

<PhetSimulation simulationId="gravity-and-orbits" title="Gravity and Orbits" />

Visualise how orbital speed and period depend on the distance from the central body.

### Worked Example 6

Find the orbital speed of a satellite orbiting the Earth at a height of $400 \mathrm{ km}$. (Earth
radius $R_E = 6.37 \times 10^6 \mathrm{ m}$, Earth mass $M_E = 5.97 \times 10^{24} \mathrm{ kg}$)

$$r = R_E + 400 \times 10^3 = 6.77 \times 10^6 \mathrm{ m}$$

$$v = \sqrt{\frac{GM_E}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.77 \times 10^6}} = \sqrt{5.88 \times 10^7} = 7668 \mathrm{ m/s}$$

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

| Topic               | Key Formula                | Key Concept                    |
| ------------------- | -------------------------- | ------------------------------ |
| Newton's Second Law | $F = ma$                   | Net force causes acceleration  |
| Static friction     | $f_s \leqslant \mu_s N$    | Adjusts to match applied force |
| Kinetic friction    | $f_k = \mu_k N$            | Constant during sliding        |
| Momentum            | $p = mv$                   | Vector quantity                |
| Impulse             | $J = F\Delta t = \Delta p$ | Area under F-t graph           |
| Projectile range    | $R = u^2\sin 2\theta/g$    | Maximum at $45^\circ$          |
| Centripetal force   | $F_c = mv^2/r$             | Net force towards centre       |
| Gravitation         | $F = Gm_1 m_2/r^2$         | Inverse square law             |
| Orbital speed       | $v = \sqrt{GM/r}$          | Balances gravity               |

---

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** Two blocks, $m_1 = 3 \mathrm{ kg}$ and $m_2 = 5 \mathrm{ kg}$, are connected by a
light inextensible string over a smooth pulley. Find the acceleration of the system and the tension
in the string.

$$a = \frac{(m_2 - m_1)g}{m_1 + m_2} = \frac{(5 - 3) \times 9.81}{3 + 5} = \frac{19.62}{8} = 2.45 \mathrm{ m/s}^2$$

$$T = \frac{2m_1 m_2 g}{m_1 + m_2} = \frac{2 \times 3 \times 5 \times 9.81}{8} = 36.79 \mathrm{ N}$$

**Question 2:** A $4 \mathrm{ kg}$ block slides down a rough incline of length $6 \mathrm{ m}$ at
$30^\circ$ to the horizontal. The coefficient of kinetic friction is $0.25$. Find the speed at the
bottom if the block starts from rest.

Net force down the plane: $F = mg\sin 30^\circ - \mu_k mg\cos 30^\circ$

$$F = 4 \times 9.81 \times 0.5 - 0.25 \times 4 \times 9.81 \times 0.866 = 19.62 - 8.50 = 11.12 \mathrm{ N}$$

$$a = \frac{F}{m} = \frac{11.12}{4} = 2.78 \mathrm{ m/s}^2$$

$$v = \sqrt{2as} = \sqrt{2 \times 2.78 \times 6} = \sqrt{33.36} = 5.78 \mathrm{ m/s}$$

**Question 3:** A $2 \mathrm{ kg}$ object moving at $6 \mathrm{ m/s}$ collides elastically with a
$4 \mathrm{ kg}$ object at rest. Find the velocities after collision.

Conservation of momentum: $2(6) + 4(0) = 2v_1 + 4v_2 \implies 12 = 2v_1 + 4v_2 \quad (1)$

Conservation of KE:
$\frac{1}{2}(2)(36) = \frac{1}{2}(2)v_1^2 + \frac{1}{2}(4)v_2^2 \implies 36 = v_1^2 + 2v_2^2 \quad (2)$

From (1): $v_1 = 6 - 2v_2$. Substituting into (2):

$$36 = (6 - 2v_2)^2 + 2v_2^2 = 36 - 24v_2 + 4v_2^2 + 2v_2^2 = 36 - 24v_2 + 6v_2^2$$

$$6v_2^2 - 24v_2 = 0 \implies 6v_2(v_2 - 4) = 0$$

$v_2 = 0$ (original) or $v_2 = 4 \mathrm{ m/s}$. Therefore $v_1 = 6 - 8 = -2 \mathrm{ m/s}$.

The $2 \mathrm{ kg}$ object rebounds at $2 \mathrm{ m/s}$; the $4 \mathrm{ kg}$ object moves forward
at $4 \mathrm{ m/s}$.

**Question 4:** A projectile is launched at $25 \mathrm{ m/s}$ from the edge of a cliff
$80 \mathrm{ m}$ high at $40^\circ$ above the horizontal. Find the horizontal distance from the
cliff edge where it lands.

Vertical: $y = u_y t + \frac{1}{2}at^2$, where $u_y = 25\sin 40^\circ = 16.07 \mathrm{ m/s}$

$$-80 = 16.07t - 4.905t^2 \implies 4.905t^2 - 16.07t - 80 = 0$$

$$t = \frac{16.07 \pm \sqrt{258.2 + 1569.6}}{9.81} = \frac{16.07 \pm \sqrt{1827.8}}{9.81} = \frac{16.07 + 42.76}{9.81} = 5.99 \mathrm{ s}$$

Horizontal distance:
$d = u_x t = 25\cos 40^\circ \times 5.99 = 19.15 \times 5.99 = 114.7 \mathrm{ m}$

**Question 5:** A satellite orbits the Earth at a height of $600 \mathrm{ km}$. Find the orbital
period and the gravitational field strength at that altitude.

$$r = 6.37 \times 10^6 + 600 \times 10^3 = 6.97 \times 10^6 \mathrm{ m}$$

$$g = \frac{GM_E}{r^2} = \frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{(6.97 \times 10^6)^2} = \frac{3.98 \times 10^{14}}{4.86 \times 10^{13}} = 8.19 \mathrm{ N/kg}$$

$$T = 2\pi\sqrt{\frac{r^3}{GM_E}} = 2\pi\sqrt{\frac{(6.97 \times 10^6)^3}{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}} = 2\pi\sqrt{\frac{3.385 \times 10^{20}}{3.982 \times 10^{14}}} = 2\pi\sqrt{850300} = 2\pi \times 922.1 = 5794 \mathrm{ s} = 96.6 \mathrm{ minutes}$$

</details>
