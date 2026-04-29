---
title: Dynamics and Newton's Laws
description: IB Physics — Newton's laws, friction, momentum, impulse, and work-energy.
slug: dynamics
---


## Newton's First Law — Inertia

### Statement

An object at rest remains at rest, and an object in motion continues with constant velocity, unless
acted upon by a net external force.

### Inertia

**Inertia** is the tendency of an object to resist changes in its state of motion. It is measured by
mass — the greater the mass, the greater the inertia.

### Inertial Frames of Reference

A frame of reference in which Newton's first law holds is called an **inertial frame**. Accelerating
frames (like a car rounding a corner) are non-inertial.

### Applications

- Passengers lurch forward when a bus brakes suddenly.
- Tablecloth can be pulled out from under dishes if done quickly (dishes have inertia).
- A spacecraft in deep space continues at constant velocity without thrust.

---

## Newton's Second Law

<PhetSimulation simulationId="forces-and-motion-basics" title="Forces and Motion: Basics" />

Explore how net force, mass, and acceleration are related by applying forces to objects. Experiment
with friction, applied forces, and different masses to see how they affect motion.

### Statement

The net force acting on an object equals the rate of change of momentum:

$$
\vec&lbrace;F&rbrace;_&lbrace;\mathrm&lbrace;net&rbrace;&rbrace; = \frac&lbrace;d\vec&lbrace;p&rbrace;&rbrace;&lbrace;dt&rbrace;
$$

For constant mass:

$$
\vec&lbrace;F&rbrace;_&lbrace;\mathrm&lbrace;net&rbrace;&rbrace; = m\vec&lbrace;a&rbrace;
$$

### Key Points

- Force is a **vector** quantity — direction matters.
- $\vec{F}_{\mathrm{net}}$ is the vector sum of all forces (the **resultant force**).
- The acceleration is always in the direction of the net force.
- SI unit: newton ($\mathrm{N}$), where $1\mathrm{ N} = 1\mathrm{ kg} \cdot \mathrm{m/s}^2$.

### Free-Body Diagrams

A free-body diagram shows all forces acting ON an object:

1. Isolate the object.
2. Draw all forces as arrows (label each force).
3. Do NOT include forces exerted BY the object.
4. Include the weight ($mg$), normal force ($N$), friction ($f$), and any applied forces.

### Component Resolution

For forces at angles, resolve into components:

$$
F_x = F\cos\theta, \quad F_y = F\sin\theta
$$

Apply Newton's second law in each direction:

$$
\sum F_x = ma_x, \quad \sum F_y = ma_y
$$

:::info[Example]

A $5\mathrm{ kg}$ block is pulled along a rough horizontal surface by a force of $30\mathrm{ N}$ at
$30\degree$ above the horizontal. The coefficient of kinetic friction is $0.3$. Find the
acceleration.

**Vertical**:

$$
N + 30\sin 30\degree = mg
$$

$$
N = 5(9.81) - 30(0.5) = 49.05 - 15 = 34.05\mathrm&lbrace; N&rbrace;
$$

**Friction**: $f_k = \mu_k N = 0.3(34.05) = 10.22\mathrm{ N}$.

**Horizontal**:

$$
30\cos 30\degree - f_k = ma
$$

$$
25.98 - 10.22 = 5a
$$

$$
a = \frac&lbrace;15.76&rbrace;&lbrace;5&rbrace; = 3.15\mathrm&lbrace; m/s&rbrace;^2
$$

:::

### Connected Bodies

For systems of connected objects (e.g., pulley systems):

- Draw a separate free-body diagram for each object.
- Apply $\vec{F} = m\vec{a}$ to each.
- Use the constraint that connected objects share the same acceleration magnitude.
- The tension in an ideal (massless, frictionless) string is the same throughout.

:::info[Example]

Two masses $m_1 = 3\mathrm{ kg}$ and $m_2 = 5\mathrm{ kg}$ are connected by a light string over a
frictionless pulley ($m_1$ hanging, $m_2$ on a rough table with $\mu_k = 0.4$).

For $m_1$ (hanging): $m_1 g - T = m_1 a$.

For $m_2$ (on table): $T - \mu_k m_2 g = m_2 a$.

Adding: $m_1 g - \mu_k m_2 g = (m_1 + m_2)a$.

$$
a = \frac&lbrace;m_1 g - \mu_k m_2 g&rbrace;&lbrace;m_1 + m_2&rbrace; = \frac&lbrace;3(9.81) - 0.4(5)(9.81)&rbrace;&lbrace;8&rbrace; = \frac&lbrace;29.43 - 19.62&rbrace;&lbrace;8&rbrace; = \frac&lbrace;9.81&rbrace;&lbrace;8&rbrace; = 1.23\mathrm&lbrace; m/s&rbrace;^2
$$

$$
T = m_1(g - a) = 3(9.81 - 1.23) = 25.74\mathrm&lbrace; N&rbrace;
$$

:::

### Apparent Weight and Elevators

In an elevator accelerating upward at $a$:

$$
N - mg = ma \implies N = m(g + a)
$$

The apparent weight is $N = m(g + a)$, which is greater than the true weight.

In an elevator accelerating downward at $a$:

$$
mg - N = ma \implies N = m(g - a)
$$

The apparent weight is $N = m(g - a)$, which is less than the true weight.

---

## Newton's Third Law

### Statement

For every action, there is an equal and opposite reaction:

$$
\vec&lbrace;F&rbrace;_&lbrace;A \mathrm&lbrace; on &rbrace; B&rbrace; = -\vec&lbrace;F&rbrace;_&lbrace;B \mathrm&lbrace; on &rbrace; A&rbrace;
$$

### Key Points

- Action-reaction pairs act on **different objects**.
- They are equal in magnitude and opposite in direction.
- They are the **same type** of force (both gravitational, both normal, etc.).
- Action-reaction forces do NOT cancel because they act on different bodies.

### Common Action-Reaction Pairs

| Action                           | Reaction                               |
| -------------------------------- | -------------------------------------- |
| Book pushes down on table        | Table pushes up on book (normal force) |
| Earth pulls on apple (weight)    | Apple pulls on Earth                   |
| Foot pushes backward on ground   | Ground pushes forward on foot          |
| Rocket pushes exhaust gases down | Exhaust gases push rocket up           |

:::warning[Exam Tip]

A common mistake is to confuse Newton's third law pairs with balanced forces on the same object. The
weight and normal force on a stationary book are NOT an action-reaction pair — they act on the SAME
object and balance. The reaction to the book's weight is the book pulling the Earth upward.

:::

---

## Friction

### Static Friction

Static friction prevents a stationary object from starting to move. It varies from $0$ up to a
maximum value:

$$
f_s \le \mu_s N
$$

where $\mu_s$ is the **coefficient of static friction** and $N$ is the normal force.

### Kinetic Friction

Kinetic friction opposes the motion of a sliding object:

$$
f_k = \mu_k N
$$

where $\mu_k$ is the **coefficient of kinetic friction**.

### Key Relationships

- $\mu_s \gt \mu_k$ in general (it is harder to start moving than to keep moving).
- Friction is independent of the area of contact.
- Friction is proportional to the normal force.
- Kinetic friction is approximately constant (independent of speed).

### Angle of Repose

The angle at which an object on an inclined plane begins to slide:

$$
\tan\theta = \mu_s
$$

:::info[Example]

A block rests on an inclined plane at $35\degree$. Does it slide if $\mu_s = 0.6$?

$$
\tan 35\degree \approx 0.700
$$

Since $\tan 35\degree \gt \mu_s = 0.6$, the block slides.

:::

### Friction on an Inclined Plane

For a block on an incline at angle $\theta$:

| Force                                      | Expression                     |
| ------------------------------------------ | ------------------------------ |
| Component of weight along plane            | $mg\sin\theta$                 |
| Component of weight perpendicular to plane | $mg\cos\theta$                 |
| Normal force                               | $N = mg\cos\theta$             |
| Friction force                             | $f = \mu N = \mu mg\cos\theta$ |

The block slides down if $mg\sin\theta \gt \mu_s mg\cos\theta$, i.e., $\tan\theta \gt \mu_s$.

---

## Momentum and Impulse

### Linear Momentum

$$
\vec&lbrace;p&rbrace; = m\vec&lbrace;v&rbrace;
$$

Momentum is a vector quantity with SI unit $\mathrm{kg} \cdot \mathrm{m/s}$.

### Newton's Second Law (Momentum Form)

$$
\vec&lbrace;F&rbrace;_&lbrace;\mathrm&lbrace;net&rbrace;&rbrace; = \frac&lbrace;d\vec&lbrace;p&rbrace;&rbrace;&lbrace;dt&rbrace;
$$

### Impulse

Impulse equals the change in momentum:

$$
\vec&lbrace;J&rbrace; = \vec&lbrace;F&rbrace;_&lbrace;\mathrm&lbrace;net&rbrace;&rbrace; \cdot \Delta t = \Delta\vec&lbrace;p&rbrace; = m\vec&lbrace;v&rbrace; - m\vec&lbrace;u&rbrace;
$$

For a constant force: $J = F \Delta t$.

The unit of impulse is $\mathrm{N} \cdot \mathrm{s} = \mathrm{kg} \cdot \mathrm{m/s}$.

### Impulse and Force-Time Graphs

The area under a force-time graph equals the impulse.

:::info[Example]

A $0.15\mathrm{ kg}$ cricket ball moving at $30\mathrm{ m/s}$ is hit back at $20\mathrm{ m/s}$ in
the opposite direction in $0.01\mathrm{ s}$. Find the average force.

$$
J = \Delta p = 0.15(20 - (-30)) = 0.15 \times 50 = 7.5\mathrm&lbrace; N&rbrace;\cdot\mathrm&lbrace;s&rbrace;
$$

$$
F = \frac&lbrace;J&rbrace;&lbrace;\Delta t&rbrace; = \frac&lbrace;7.5&rbrace;&lbrace;0.01&rbrace; = 750\mathrm&lbrace; N&rbrace;
$$

:::

### Conservation of Linear Momentum

In a closed system (no external forces), the total momentum is conserved:

$$
m_1\vec&lbrace;u&rbrace;_1 + m_2\vec&lbrace;u&rbrace;_2 = m_1\vec&lbrace;v&rbrace;_1 + m_2\vec&lbrace;v&rbrace;_2
$$

### Elastic and Inelastic Collisions

| Type                | Kinetic Energy | Momentum                           |
| ------------------- | -------------- | ---------------------------------- |
| Perfectly elastic   | Conserved      | Conserved                          |
| Inelastic           | NOT conserved  | Conserved                          |
| Perfectly inelastic | Maximum loss   | Conserved (objects stick together) |

:::info[Example]

A $2\mathrm{ kg}$ object moving at $5\mathrm{ m/s}$ collides with a $3\mathrm{ kg}$ object at rest.
After the collision, they stick together. Find the velocity after collision.

$$
m_1 u_1 + m_2 u_2 = (m_1 + m_2)v
$$

$$
2(5) + 3(0) = 5v
$$

$$
v = 2\mathrm&lbrace; m/s&rbrace;
$$

**KE before**: $\dfrac{1}{2}(2)(25) = 25\mathrm{ J}$.

**KE after**: $\dfrac{1}{2}(5)(4) = 10\mathrm{ J}$.

$15\mathrm{ J}$ of kinetic energy is lost (inelastic collision).

:::

---

## Work-Energy Theorem

### Work Done

Work is done when a force causes displacement:

$$
W = Fd\cos\theta
$$

where $\theta$ is the angle between the force and the displacement.

- Work is a **scalar** quantity (SI unit: joule, $\mathrm{J}$).
- Work done by friction is always negative (opposes motion).
- If $F$ and $d$ are in the same direction: $W = Fd$.
- If $F \perp d$: $W = 0$ (e.g., normal force does no work on horizontal motion).

### Work-Energy Theorem

$$
W_&lbrace;\mathrm&lbrace;net&rbrace;&rbrace; = \Delta E_k = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2 - \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mu^2
$$

The net work done on an object equals its change in kinetic energy.

### Kinetic Energy

$$
E_k = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2
$$

### Power

$$
P = \frac&lbrace;W&rbrace;&lbrace;t&rbrace; = \vec&lbrace;F&rbrace; \cdot \vec&lbrace;v&rbrace;
$$

SI unit: watt ($\mathrm{W}$), where $1\mathrm{ W} = 1\mathrm{ J/s}$.

### Efficiency

$$
\mathrm&lbrace;Efficiency&rbrace; = \frac&lbrace;\mathrm&lbrace;useful energy output&rbrace;&rbrace;&lbrace;\mathrm&lbrace;total energy input&rbrace;&rbrace; \times 100\%
$$

Alternatively:

$$
\mathrm&lbrace;Efficiency&rbrace; = \frac&lbrace;\mathrm&lbrace;useful power output&rbrace;&rbrace;&lbrace;\mathrm&lbrace;total power input&rbrace;&rbrace; \times 100\%
$$

:::info[Example]

A car of mass $1200\mathrm{ kg}$ accelerates from $15\mathrm{ m/s}$ to $25\mathrm{ m/s}$ in
$6\mathrm{ s}$. The engine provides a constant driving force of $3000\mathrm{ N}$. Find the average
friction force.

$$
\Delta E_k = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(1200)(625 - 225) = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(1200)(400) = 240000\mathrm&lbrace; J&rbrace;
$$

$$
W_&lbrace;\mathrm&lbrace;net&rbrace;&rbrace; = W_&lbrace;\mathrm&lbrace;engine&rbrace;&rbrace; + W_&lbrace;\mathrm&lbrace;friction&rbrace;&rbrace; = 3000(6 \times 20) + W_f
$$

Wait, let me recalculate properly:

$$
W_&lbrace;\mathrm&lbrace;net&rbrace;&rbrace; = (F_&lbrace;\mathrm&lbrace;engine&rbrace;&rbrace; - f) \times d
$$

$$
a = \frac&lbrace;25-15&rbrace;&lbrace;6&rbrace; = \frac&lbrace;5&rbrace;&lbrace;3&rbrace;\mathrm&lbrace; m/s&rbrace;^2
$$

$$
d = 15(6) + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;\left(\frac&lbrace;5&rbrace;&lbrace;3&rbrace;\right)(36) = 90 + 30 = 120\mathrm&lbrace; m&rbrace;
$$

$$
240000 = (3000 - f)(120)
$$

$$
3000 - f = 2000 \implies f = 1000\mathrm&lbrace; N&rbrace;
$$

:::

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

A $10\mathrm{ kg}$ box sits on a rough surface. A horizontal force of $60\mathrm{ N}$ is applied.
The box accelerates at $4\mathrm{ m/s}^2$. Find the coefficient of kinetic friction.

$$
F_&lbrace;\mathrm&lbrace;net&rbrace;&rbrace; = F - f_k = ma
$$

$$
60 - \mu_k \times 10(9.81) = 10(4)
$$

$$
60 - 98.1\mu_k = 40
$$

$$
\mu_k = \frac&lbrace;20&rbrace;&lbrace;98.1&rbrace; \approx 0.204
$$

### Question 2 (Paper 2 style)

Two ice skaters, one of mass $60\mathrm{ kg}$ moving at $3\mathrm{ m/s}$ and the other of mass
$80\mathrm{ kg}$ at rest, collide and move off together on frictionless ice.

**(a)** Find their common velocity after collision.

$$
60(3) + 80(0) = (60 + 80)v
$$

$$
180 = 140v \implies v = 1.29\mathrm&lbrace; m/s&rbrace;
$$

**(b)** Calculate the kinetic energy lost.

Before: $\dfrac{1}{2}(60)(9) = 270\mathrm{ J}$.

After:
$\dfrac{1}{2}(140)\left(\dfrac{9}{7}\right)^2 = \dfrac{1}{2}(140)\left(\dfrac{81}{49}\right) = 115.7\mathrm{ J}$.

Lost: $270 - 115.7 = 154.3\mathrm{ J}$.

### Question 3 (Paper 2 style)

A block of mass $4\mathrm{ kg}$ is placed on a rough inclined plane at $30\degree$ to the
horizontal. The coefficient of static friction is $0.5$ and the coefficient of kinetic friction is
$0.3$.

**(a)** Determine whether the block slides.

$$
mg\sin 30\degree = 4(9.81)(0.5) = 19.62\mathrm&lbrace; N&rbrace;
$$

$$
\mu_s mg\cos 30\degree = 0.5(4)(9.81)(0.866) = 17.0\mathrm&lbrace; N&rbrace;
$$

Since $19.62 \gt 17.0$, the block slides.

**(b)** Find the acceleration down the plane.

$$
a = g(\sin\theta - \mu_k\cos\theta) = 9.81(0.5 - 0.3 \times 0.866) = 9.81(0.240) = 2.36\mathrm&lbrace; m/s&rbrace;^2
$$

### Question 4 (Paper 1 style)

A motor lifts a $500\mathrm{ kg}$ elevator through a height of $20\mathrm{ m}$ in $10\mathrm{ s}$.
Find the power output of the motor.

$$
P = \frac&lbrace;mgh&rbrace;&lbrace;t&rbrace; = \frac&lbrace;500 \times 9.81 \times 20&rbrace;&lbrace;10&rbrace; = 9810\mathrm&lbrace; W&rbrace; = 9.81\mathrm&lbrace; kW&rbrace;
$$

---

## Summary

| Law             | Statement                                                                     |
| --------------- | ----------------------------------------------------------------------------- |
| Newton's First  | An object continues at rest or constant velocity unless acted on by net force |
| Newton's Second | $\vec{F}_{\mathrm{net}} = m\vec{a}$ or $\vec{F} = \dfrac{d\vec{p}}{dt}$       |
| Newton's Third  | Every action has an equal and opposite reaction                               |

| Quantity       | Formula                                     | Unit                             |
| -------------- | ------------------------------------------- | -------------------------------- |
| Momentum       | $\vec{p} = m\vec{v}$                        | $\mathrm{kg} \cdot \mathrm{m/s}$ |
| Impulse        | $\vec{J} = \vec{F}\Delta t = \Delta\vec{p}$ | $\mathrm{N} \cdot \mathrm{s}$    |
| Work           | $W = Fd\cos\theta$                          | $\mathrm{J}$                     |
| Kinetic energy | $E_k = \dfrac{1}{2}mv^2$                    | $\mathrm{J}$                     |
| Power          | $P = \dfrac{W}{t} = Fv$                     | $\mathrm{W}$                     |

:::tip[Exam Strategy]

Always draw free-body diagrams. Resolve forces into components along the chosen axes. For momentum
questions, clearly define the positive direction. For efficiency questions, remember that efficiency
is always less than 100% in real systems.

:::

---

## Advanced Applications

### Motion in Lifts (Elevators)

| Situation                       | Equation       | Apparent Weight     |
| ------------------------------- | -------------- | ------------------- |
| Stationary or constant velocity | $N = mg$       | Normal ($mg$)       |
| Accelerating upward             | $N = m(g + a)$ | Greater than normal |
| Accelerating downward           | $N = m(g - a)$ | Less than normal    |
| Free fall ($a = g$)             | $N = 0$        | Weightless          |

:::info[Example]

A person of mass $70\mathrm{ kg}$ stands on a scale in a lift. Find the scale reading when the lift
accelerates upward at $2\mathrm{ m/s}^2$.

$$
N = m(g + a) = 70(9.81 + 2) = 70 \times 11.81 = 826.7\mathrm&lbrace; N&rbrace;
$$

The scale reads $826.7\mathrm{ N}$ (equivalent to $84.3\mathrm{ kg}$).

:::

### Connected Bodies on Inclined Planes

For two masses connected by a string over a pulley on an inclined plane, draw separate free-body
diagrams and apply Newton's second law to each body.

:::info[Example]

Mass $m_1 = 5\mathrm{ kg}$ hangs vertically. Mass $m_2 = 8\mathrm{ kg}$ is on a $30\degree$ incline
with $\mu_k = 0.2$.

For $m_1$: $m_1 g - T = m_1 a$

For $m_2$: $T - m_2 g\sin\theta - \mu_k m_2 g\cos\theta = m_2 a$

Adding: $m_1 g - m_2 g\sin\theta - \mu_k m_2 g\cos\theta = (m_1 + m_2)a$

$$
a = \frac&lbrace;5(9.81) - 8(9.81)(0.5) - 0.2(8)(9.81)(0.866)&rbrace;&lbrace;13&rbrace;
$$

$$
= \frac&lbrace;49.05 - 39.24 - 13.60&rbrace;&lbrace;13&rbrace; = \frac&lbrace;-3.79&rbrace;&lbrace;13&rbrace;
$$

The negative value means the system accelerates in the opposite direction to what was assumed (i.e.,
$m_2$ slides down and $m_1$ goes up).

:::

---

## Friction: Extended Analysis

### Static Friction Graph

As the applied force increases from zero:

1. The static friction matches the applied force (up to $\mu_s N$).
2. At the limiting friction point, the object begins to move.
3. Once moving, kinetic friction ($\mu_k N$) applies, which is less than the maximum static
   friction.
4. Kinetic friction is approximately constant regardless of speed.

### Rolling Friction

Rolling friction is much smaller than sliding friction, which is why wheels are so effective. It
arises from deformation of the rolling object and the surface.

### Drag Force

At low speeds: $F_d \propto v$ (viscous drag, e.g., in oil).

At high speeds: $F_d \propto v^2$ (turbulent drag, e.g., air resistance on a car).

Terminal velocity is reached when drag equals the driving force (e.g., weight for a falling object):

$$
mg = kv_&lbrace;\mathrm&lbrace;terminal&rbrace;&rbrace;^2 \implies v_&lbrace;\mathrm&lbrace;terminal&rbrace;&rbrace; = \sqrt&lbrace;\frac&lbrace;mg&rbrace;&lbrace;k&rbrace;&rbrace;
$$

---

## Momentum: Extended Applications

### Rockets and Thrust

A rocket expels mass (exhaust gases) at high velocity. By conservation of momentum:

$$
\mathrm&lbrace;Thrust&rbrace; = v_e \frac&lbrace;\Delta m&rbrace;&lbrace;\Delta t&rbrace;
$$

where $v_e$ is the exhaust velocity and $\dfrac{\Delta m}{\Delta t}$ is the mass flow rate.

### Rocket Equation (Tsiolkovsky)

$$
\Delta v = v_e \ln\!\left(\frac&lbrace;m_i&rbrace;&lbrace;m_f&rbrace;\right)
$$

where $m_i$ is the initial mass and $m_f$ is the final mass.

### Impulse-Momentum in Two Dimensions

Momentum is conserved separately in each direction:

$$
\sum m\vec&lbrace;v&rbrace;_&lbrace;\mathrm&lbrace;initial&rbrace;&rbrace; = \sum m\vec&lbrace;v&rbrace;_&lbrace;\mathrm&lbrace;final&rbrace;&rbrace;
$$

Resolve into $x$ and $y$ components and apply conservation in each direction independently.

:::info[Example]

A $3\mathrm{ kg}$ object moving at $4\mathrm{ m/s}$ collides with a stationary $2\mathrm{ kg}$
object. After the collision, the $3\mathrm{ kg}$ object moves at $2\mathrm{ m/s}$ at $30\degree$
above the original direction. Find the velocity of the $2\mathrm{ kg}$ object.

**x-direction**: $3(4) = 3(2)\cos 30\degree + 2v_x$

$$
12 = 5.196 + 2v_x \implies v_x = 3.402\mathrm&lbrace; m/s&rbrace;
$$

**y-direction**: $0 = 3(2)\sin 30\degree + 2v_y$

$$
0 = 3 + 2v_y \implies v_y = -1.5\mathrm&lbrace; m/s&rbrace;
$$

$$
v = \sqrt&lbrace;3.402^2 + (-1.5)^2&rbrace; = \sqrt&lbrace;11.57 + 2.25&rbrace; = \sqrt&lbrace;13.82&rbrace; = 3.72\mathrm&lbrace; m/s&rbrace;
$$

Direction: $\theta = \arctan\!\left(\dfrac{-1.5}{3.402}\right) = -23.8\degree$ (below the original
direction).

:::

---

## Additional IB Exam-Style Questions

### Question 5 (Paper 2 style)

A $60\mathrm{ kg}$ skier starts from rest at the top of a $30\degree$ slope that is $100\mathrm{ m}$
long. The coefficient of kinetic friction is $0.1$.

**(a)** Find the acceleration down the slope.

$$
a = g(\sin\theta - \mu_k\cos\theta) = 9.81(\sin 30\degree - 0.1\cos 30\degree) = 9.81(0.5 - 0.0866) = 9.81(0.4134) = 4.06\mathrm&lbrace; m/s&rbrace;^2
$$

**(b)** Find the speed at the bottom of the slope.

$$
v^2 = u^2 + 2as = 0 + 2(4.06)(100) = 812
$$

$$
v = 28.5\mathrm&lbrace; m/s&rbrace;
$$

**(c)** The skier then travels across level ground with the same coefficient of friction. How far do
they slide before stopping?

$$
\mu_k mg \cdot d = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2
$$

$$
d = \frac&lbrace;v^2&rbrace;&lbrace;2\mu_k g&rbrace; = \frac&lbrace;812&rbrace;&lbrace;2(0.1)(9.81)&rbrace; = \frac&lbrace;812&rbrace;&lbrace;1.962&rbrace; = 414\mathrm&lbrace; m&rbrace;
$$

### Question 6 (Paper 2 style)

Two objects, one of mass $m$ and the other of mass $3m$, collide head-on. The lighter object is
moving at $6\mathrm{ m/s}$ and the heavier one at $2\mathrm{ m/s}$ in the opposite direction. After
the collision, the lighter object moves at $2\mathrm{ m/s}$ in the opposite direction to its
original motion.

**(a)** Find the velocity of the heavier object after the collision.

Taking the direction of $m$ as positive:

$$
m(6) + 3m(-2) = m(-2) + 3m v
$$

$$
6m - 6m = -2m + 3mv
$$

$$
0 = -2 + 3v \implies v = \frac&lbrace;2&rbrace;&lbrace;3&rbrace;\mathrm&lbrace; m/s&rbrace; \mathrm&lbrace; (in the positive direction)&rbrace;
$$

**(b)** Is the collision elastic?

KE before $= \dfrac{1}{2}m(36) + \dfrac{1}{2}(3m)(4) = 18m + 6m = 24m$.

KE after
$= \dfrac{1}{2}m(4) + \dfrac{1}{2}(3m)\!\left(\dfrac{4}{9}\right) = 2m + \dfrac{2m}{3} = \dfrac{8m}{3}$.

Since $24m \neq \dfrac{8m}{3}$, the collision is inelastic.

### Question 7 (Paper 1 style)

A force of $F = 3t^2\mathrm{ N}$ acts on a $2\mathrm{ kg}$ object initially at rest. Find the
velocity after $4\mathrm{ s}$.

$$
F = ma \implies a = \frac&lbrace;3t^2&rbrace;&lbrace;2&rbrace; = 1.5t^2
$$

$$
v = \int_0^4 1.5t^2\,dt = \left[0.5t^3\right]_0^4 = 0.5(64) = 32\mathrm&lbrace; m/s&rbrace;
$$

---

## Advanced Dynamics Topics

### Systems with Friction on Multiple Surfaces

When a system involves multiple surfaces with different coefficients of friction, draw separate
free-body diagrams for each object and apply Newton's second law individually.

### Motion on Curved Paths

For an object moving along a curved path (not necessarily circular), the normal force provides the
centripetal component of acceleration:

$$
N - mg\cos\theta = \frac&lbrace;mv^2&rbrace;&lbrace;r&rbrace;
$$

where $\theta$ is the angle of the surface with the horizontal.

### Friction on a Banked Curve with Speed Different from Ideal

On a banked curve designed for speed $v_0$, if a car travels at speed $v \neq v_0$, friction
provides the additional centripetal force:

- $v \gt v_0$: friction acts down the slope (adds to centripetal force).
- $v \lt v_0$: friction acts up the slope (reduces centripetal force).

---

## Additional IB Exam-Style Questions

### Question 8 (Paper 2 style)

A block of mass $3\mathrm{ kg}$ is on a rough horizontal surface ($\mu_s = 0.4$, $\mu_k = 0.3$). A
force of $15\mathrm{ N}$ is applied at $25\degree$ above the horizontal.

**(a)** Determine whether the block moves.

Vertical: $N + 15\sin 25\degree = 3(9.81)$.

$$
N = 29.43 - 6.34 = 23.09\mathrm&lbrace; N&rbrace;
$$

Maximum static friction: $f_{s,\max} = 0.4 \times 23.09 = 9.24\mathrm{ N}$.

Horizontal applied force: $15\cos 25\degree = 13.59\mathrm{ N}$.

Since $13.59 \gt 9.24$, the block moves.

**(b)** Find the acceleration.

$$
a = \frac&lbrace;15\cos 25\degree - 0.3(23.09)&rbrace;&lbrace;3&rbrace; = \frac&lbrace;13.59 - 6.93&rbrace;&lbrace;3&rbrace; = \frac&lbrace;6.66&rbrace;&lbrace;3&rbrace; = 2.22\mathrm&lbrace; m/s&rbrace;^2
$$

**(c)** If the applied force is removed, how far does the block slide before stopping?

$$
\mu_k mg \cdot d = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;mv^2
$$

Need to find $v$ at the moment force is removed. Assuming the force was applied from rest:

This depends on how long the force was applied. If the question implies the block has some velocity
$v_0$ when the force is removed:

$$
d = \frac&lbrace;v_0^2&rbrace;&lbrace;2\mu_k g&rbrace; = \frac&lbrace;v_0^2&rbrace;&lbrace;5.886&rbrace;
$$

### Question 9 (Paper 1 style)

A $5\mathrm{ kg}$ object experiences a force that varies with time: $F = 6t - 2\mathrm{ N}$ for
$0 \le t \le 5\mathrm{ s}$. If the object starts from rest, what is its momentum at
$t = 5\mathrm{ s}$?

$$
\Delta p = \int_0^5 F\,dt = \int_0^5 (6t - 2)\,dt = [3t^2 - 2t]_0^5 = 75 - 10 = 65\mathrm&lbrace; kg&rbrace;\cdot\mathrm&lbrace;m/s&rbrace;
$$

Since $p_0 = 0$: $p = 65\mathrm{ kg}\cdot\mathrm{m/s}$.

### Question 10 (Paper 2 style)

Two trolleys, A ($2\mathrm{ kg}$) and B ($3\mathrm{ kg}$), are held together by a compressed spring
between them on a frictionless surface. When released, trolley A moves at $4\mathrm{ m/s}$ to the
left.

**(a)** Find the velocity of trolley B.

$$
0 = m_A v_A + m_B v_B
$$

$$
0 = 2(-4) + 3v_B \implies v_B = \frac&lbrace;8&rbrace;&lbrace;3&rbrace; = 2.67\mathrm&lbrace; m/s&rbrace; \mathrm&lbrace; (to the right)&rbrace;
$$

**(b)** Calculate the elastic potential energy stored in the spring.

$$
E_e = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m_A v_A^2 + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;m_B v_B^2 = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(2)(16) + \frac&lbrace;1&rbrace;&lbrace;2&rbrace;(3)\!\left(\frac&lbrace;64&rbrace;&lbrace;9&rbrace;\right) = 16 + 10.67 = 26.67\mathrm&lbrace; J&rbrace;
$$

**(c)** If the spring has spring constant $k = 2000\mathrm{ N/m}$, find the initial compression.

$$
E_e = \frac&lbrace;1&rbrace;&lbrace;2&rbrace;kx^2 \implies 26.67 = 1000x^2 \implies x = 0.163\mathrm&lbrace; m&rbrace;
$$
