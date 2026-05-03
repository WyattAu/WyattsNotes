---
title: Dynamics
description:
  "A-Level Physics notes on Dynamics: 1. Newton's Laws of Motion; Newton's First Law (Law of Inertia); Newton's Second Law; Newton's Third Law."
date: 2025-06-02T16:25:28.480Z
tags:
  - Physics
  - ALevel
categories:
  - Physics
slug: dynamics
---

## Dynamics

:::info Board Coverage AQA Paper 1 | Edexcel CP1, CP2 | OCR (A) Paper 1 | CIE P2 :::

## 1. Newton's Laws of Motion

Newton's three laws form the foundation of classical mechanics. They were first published in the
_Principia Mathematica_ (1687).

<PhetSimulation simulationId="forces-and-motion-basics" title="Forces and Motion: Basics" />

Explore the simulation above to develop intuition for this topic.

### Newton's First Law (Law of Inertia)

> **Every body continues in its state of rest or uniform motion in a straight line unless acted upon
> by a net external force.**

**Intuition.** This law defines what a force _is_ — it is that which changes motion. An object does
not need a force to keep moving; it needs a force to _stop_ moving. This was revolutionary:
Aristotle believed that force was necessary to _maintain_ motion.

### Newton's Second Law

> **The rate of change of momentum of a body is directly proportional to the net external force
> acting on it, and takes place in the direction of that force.**

$$\mathbf{F}_{\mathrm{net}} = \frac{d\mathbf{p}}{dt} = \frac{d(m\mathbf{v})}{dt}$$

For constant mass:

$$\boxed{\mathbf{F}_{\mathrm{net}} = m\mathbf{a}}$$

This is the most important equation in mechanics. It states that force, mass, and acceleration are
related by a simple proportionality.

**Units.** The newton is defined as the force required to accelerate a mass of 1 kg at 1 m s$^{-2}$:
$1 \mathrm{ N} = 1 \mathrm{ kg m s}^{-2}$.

### Newton's Third Law

> **If body A exerts a force on body B, then body B exerts an equal and opposite force on body A.**

$$\mathbf{F}_{AB} = -\mathbf{F}_{BA}$$

:::warning Common Pitfall The two forces in a Newton's third law pair act on **different bodies**.
They do **not** cancel. The normal reaction from a table on a book and the book's weight are **not**
a third law pair (both act on the book). The third law pair of the book's weight is the
gravitational pull of the book on the Earth.
:::

## 2. Weight and Mass

**Definition.** The **mass** $m$ of a body is a measure of its inertia — its resistance to
acceleration. Mass is a scalar, measured in kg. It is an intrinsic property of an object.

**Definition.** The **weight** $W$ of a body is the gravitational force acting on it.

$$W = mg$$

**Derivation.** By Newton's second law, the gravitational force on a mass $m$ in a gravitational
field of strength $g$ is:

$$F = ma \implies W = mg$$

where $g$ is the gravitational field strength (approximately $9.81$ N kg$^{-1}$ near Earth's
surface).

**Intuition.** Mass is the same everywhere in the universe. Weight depends on location. An astronaut
on the Moon has the same mass but one-sixth the weight.

## 3. Free Body Diagrams

A **free body diagram** (FBD) is a diagram showing all the forces acting on a single body, drawn as
arrows originating from the body's centre of mass.

**Rules:**

1. Include only forces acting **on** the body (not by the body).
2. Represent each force as an arrow in the direction of the force.
3. The length of the arrow should be proportional to the magnitude.
4. Label each force clearly.

Common forces: weight ($mg$), normal reaction ($R$), friction ($F_f$), tension ($T$), drag ($F_d$),
thrust.

## 4. Resolving Forces in Two Dimensions

When forces are not collinear, we resolve them into perpendicular components (typically horizontal
and vertical).

**Condition for equilibrium** (Newton's first law):

$$\sum F_x = 0 \quad \mathrm{and} \quad \sum F_y = 0$$

**Condition for acceleration** (Newton's second law):

$$\sum F_x = ma_x \quad \mathrm{and} \quad \sum F_y = ma_y$$

<details>
<summary>Example: Inclined Plane</summary>
A block of mass $m$ rests on a plane inclined at angle $\alpha$ to the horizontal. Find the acceleration down the plane, assuming no friction.

**Answer.** Resolving perpendicular to the plane: $R = mg\cos\alpha$.

Resolving parallel to the plane (taking down-plane as positive): $mg\sin\alpha = ma$.

$$a = g\sin\alpha$$

</details>

## 5. Motion on a Curved Path -- Centripetal Force Introduction

When a body moves along a curved path, its velocity changes direction. Since acceleration is the
rate of change of velocity, a change in direction constitutes acceleration even if the speed is
constant.

**Key idea.** If the velocity direction changes, there must be a component of the net force
perpendicular to the velocity.

For uniform circular motion (constant speed $v$ on a circle of radius $r$), the acceleration is
directed towards the centre of the circle. Using $v = \omega r$ where $\omega$ is the angular speed:

$$a_c = \frac{v^2}{r} = \omega^2 r$$

By Newton's second law, the net force towards the centre is:

$$\boxed{F_c = \frac{mv^2}{r} = m\omega^2 r}$$

**Definition.** The **centripetal acceleration** $a_c$ is the acceleration directed towards the
centre of a circular path, responsible for changing the direction of the velocity.

**Definition.** The **centripetal force** $F_c$ is the component of the net force directed towards
the centre of a circular path, responsible for maintaining circular motion.

:::warning Common Pitfall Centripetal force is **not** a separate force. It is the **net radial
component** of the real forces acting on the body (tension, friction, gravity, normal reaction,
etc.). Never draw "centripetal force" as an additional arrow on a free body diagram.
:::

:::tip Exam Technique When solving circular motion problems, always start with a free body diagram
showing only the real forces. Then resolve forces towards the centre of the circle and apply
$F_c = mv^2/r$. The centripetal force is always provided by one or more of the forces already on
your diagram.
:::

<details>
<summary>Example: Car on a Banked Curve</summary>
A car of mass $m$ travels at speed $v$ around a banked curve of radius $r$ at angle $\theta$ to the horizontal. Find the ideal banking angle for which no friction is required.

**Answer.** Resolving vertically: $R\cos\theta = mg$.

Resolving horizontally (towards the centre): $R\sin\theta = \frac{mv^2}{r}$.

Dividing the second equation by the first: $\tan\theta = \frac{v^2}{rg}$.

The ideal banking angle is $\theta = \arctan\left(\frac{v^2}{rg}\right)$. At this angle, the
horizontal component of the normal reaction alone provides the centripetal force.

</details>

<details>
<summary>Example: Conical Pendulum</summary>
A particle of mass $m$ is attached to a string of length $L$ and revolves in a horizontal circle of radius $r$ with the string making angle $\theta$ with the vertical. Find the tension and the angular speed.

**Answer.** Resolving vertically: $T\cos\theta = mg$, so $T = \frac{mg}{\cos\theta}$.

Resolving horizontally (towards the centre): $T\sin\theta = m\omega^2 r$.

Substituting: $\frac{mg\sin\theta}{\cos\theta} = m\omega^2 r$, giving
$\omega^2 = \frac{g\tan\theta}{r}$.

Since $r = L\sin\theta$, this becomes $\omega^2 = \frac{g}{L\cos\theta}$, so
$\omega = \sqrt{\frac{g}{L\cos\theta}}$.

</details>

## 6. Friction

### Static Friction

When two surfaces are in contact but not sliding relative to each other, the friction force adjusts
to prevent motion, up to a maximum:

$$F_s \leq \mu_s R$$

where $\mu_s$ is the **coefficient of static friction** and $R$ is the normal reaction.

### Dynamic (Kinetic) Friction

When sliding occurs, the friction force is:

$$F_d = \mu_d R$$

where $\mu_d$ is the **coefficient of dynamic friction**. In general, $\mu_d < \mu_s$ — it is harder
to start an object moving than to keep it moving.

### Microscopic Origin

Friction arises from intermolecular bonds forming between the irregularities (asperities) of the two
surfaces. At the microscopic level, the real area of contact is much smaller than the apparent area,
but the contact pressure is enormous, causing cold welding. To slide, these bonds must be broken —
this requires force.

**Intuition.** Friction is independent of the apparent area of contact (since the real contact area
adjusts proportionally to the load) and independent of sliding speed (approximately). It is
proportional to the normal force because a greater normal force creates more contact points.

### Angle of Friction

**Definition.** The **angle of friction** $\lambda$ is the angle between the normal reaction and the
total contact force when slipping is about to occur. It satisfies:

$$\boxed{\tan\lambda = \mu_s}$$

<details>
<summary>Derivation</summary>
The total contact force on a body is the vector sum of the normal reaction $R$ (perpendicular to the surface) and the maximum static friction $F_s = \mu_s R$ (parallel to the surface). The angle $\lambda$ that this resultant makes with $R$ satisfies:

$\tan\lambda = \frac{F_s}{R} = \frac{\mu_s R}{R} = \mu_s$

$\square$

</details>

**Definition.** The **angle of repose** is the steepest angle of an inclined plane on which a body
can rest without sliding.

<details>
<summary>Derivation of the Angle of Repose</summary>
Consider a block on an inclined plane at angle $\alpha$. Resolving perpendicular to the plane: $R = mg\cos\alpha$. Resolving parallel to the plane (down-slope positive): $mg\sin\alpha \leq \mu_s R = \mu_s mg\cos\alpha$.

At limiting equilibrium (just about to slide), equality holds:

$mg\sin\alpha = \mu_s mg\cos\alpha \implies \tan\alpha = \mu_s$

But $\tan\lambda = \mu_s$, so $\alpha = \lambda$. The angle of repose equals the angle of friction.

$\square$

</details>

**Intuition.** Steeper surfaces require more friction to prevent sliding. When the incline angle
equals $\arctan(\mu_s)$, the gravitational component along the plane exactly equals maximum static
friction. Beyond this angle, no amount of static friction can prevent sliding.

## 7. Connected Particles

### Pulleys: The Atwood Machine

Consider two masses $m_1$ and $m_2$ ($m_1 > m_2$) connected by a light inextensible string over a
smooth pulley.

**Assumptions:** The string is light (massless) and inextensible, the pulley is smooth
(frictionless).

Since the string is inextensible, both masses have the same acceleration magnitude $a$ and same
speed.

For mass $m_1$ (descending, taking downward as positive):

$$m_1 g - T = m_1 a \quad \mathrm{...(i)}$$

For mass $m_2$ (ascending, taking upward as positive):

$$T - m_2 g = m_2 a \quad \mathrm{...(ii)}$$

Adding (i) and (ii):

$$m_1 g - m_2 g = (m_1 + m_2)a$$

$$\boxed{a = \frac{(m_1 - m_2)g}{m_1 + m_2}}$$

Substituting back into (i):

$$T = m_1(g - a) = m_1 g\left(1 - \frac{m_1 - m_2}{m_1 + m_2}\right) = \frac{2m_1 m_2 g}{m_1 + m_2}$$

$$\boxed{T = \frac{2m_1 m_2 g}{m_1 + m_2}}$$

### Lifts (Apparent Weight)

A person of mass $m$ stands on a weighing scale in a lift.

**Case 1: Lift accelerating upward at $a$.**

For the person (taking upward as positive):

$$R - mg = ma \implies R = m(g + a)$$

The apparent weight $R$ is **greater** than the true weight $mg$.

**Case 2: Lift accelerating downward at $a$.**

$$mg - R = ma \implies R = m(g - a)$$

The apparent weight is **less** than the true weight. If $a = g$, then $R = 0$ — the person
experiences **weightlessness**.

**Case 3: Constant velocity (or at rest).**

$R = mg$ — the apparent weight equals the true weight.

### Particles on a Rough Surface

The Atwood machine can be extended by placing one mass on a rough horizontal surface rather than
suspending both masses freely.

<details>
<summary>Derivation: Rough Atwood Machine</summary>
A mass $m_1$ rests on a rough horizontal table with coefficient of friction $\mu$. A light inextensible string connects $m_1$ over a smooth pulley at the edge of the table to a hanging mass $m_2$.

For $m_1$ on the table (taking the direction of motion towards the pulley as positive):
$T - \mu m_1 g = m_1 a$.

For $m_2$ hanging vertically (taking downward as positive): $m_2 g - T = m_2 a$.

Adding the two equations: $m_2 g - \mu m_1 g = (m_1 + m_2)a$.

$$\boxed{a = \frac{(m_2 - \mu m_1)g}{m_1 + m_2}}$$

Substituting into the equation for $m_2$:
$T = m_2(g - a) = m_2 g\left(1 - \frac{m_2 - \mu m_1}{m_1 + m_2}\right)$

$T = m_2 g \cdot \frac{m_1 + m_2 - m_2 + \mu m_1}{m_1 + m_2} = \frac{m_1 m_2 g(1 + \mu)}{m_1 + m_2}$

$$\boxed{T = \frac{m_1 m_2 g(1 + \mu)}{m_1 + m_2}}$$

Note: the system only accelerates if $m_2 > \mu m_1$; otherwise static friction is sufficient to
hold the system in equilibrium.

$\square$

</details>

<details>
<summary>Example</summary>
A block of mass $4.0$ kg is on a rough horizontal table ($\mu = 0.3$) connected by a string over a smooth pulley to a mass of $2.0$ kg hanging freely. Find the acceleration and tension.

**Answer.** Check condition: $m_2 = 2.0$ kg, $\mu m_1 = 0.3 \times 4.0 = 1.2$ kg. Since $2.0 > 1.2$,
the system accelerates.

$a = \frac{(2.0 - 0.3 \times 4.0) \times 9.81}{4.0 + 2.0} = \frac{0.8 \times 9.81}{6.0} = 1.31$ m
s$^{-2}$.

$T = \frac{4.0 \times 2.0 \times 9.81 \times 1.3}{6.0} = \frac{101.8}{6.0} = 17.0$ N.

Check: for $m_1$, $T - \mu m_1 g = 17.0 - 0.3 \times 4.0 \times 9.81 = 17.0 - 11.8 = 5.2$ N, and
$m_1 a = 4.0 \times 1.31 = 5.2$ N. Consistent.

</details>

## 8. Terminal Velocity

When an object falls through a fluid, it experiences a drag force that increases with speed.

### Linear Drag Model

For low speeds (e.g., small objects in viscous fluids), Stokes' drag applies: $F_d = kv$.

Applying Newton's second law (taking downward as positive):

$$mg - kv = ma$$

$$ma = mg - kv \implies \frac{dv}{dt} = g - \frac{k}{m}v$$

This is a first-order linear ODE. At **terminal velocity**, $a = 0$:

$$mg - kv_T = 0 \implies \boxed{v_T = \frac{mg}{k}}$$

### Solving the ODE

Rewrite: $\frac{dv}{dt} = \frac{k}{m}(v_T - v)$ where $v_T = mg/k$.

$$\int_0^v \frac{dv'}{v_T - v'} = \int_0^t \frac{k}{m}\,dt'$$

$$-\ln\left(\frac{v_T - v}{v_T}\right) = \frac{kt}{m}$$

$$\frac{v_T - v}{v_T} = e^{-kt/m}$$

$$\boxed{v(t) = v_T\left(1 - e^{-kt/m}\right)}$$

**Intuition.** The velocity starts at zero and asymptotically approaches $v_T$. The exponential
approach means the object gets close to terminal velocity quickly but never quite reaches it in
finite time. The time constant is $\tau = m/k$.

### Quadratic Drag Model

At higher speeds (e.g., a skydiver in air), drag is proportional to $v^2$: $F_d = kv^2$.

$$mg - kv^2 = ma$$

At terminal velocity: $v_T = \sqrt{\frac{mg}{k}}$.

:::info Board Note CIE and Edexcel may expect you to know both drag models qualitatively. AQA
focuses on the qualitative description of terminal velocity.
:::

## Problem Set

<details>
<summary>Problem 1</summary>
A block of mass $5.0$ kg rests on a rough horizontal surface with $\mu_s = 0.4$ and $\mu_d = 0.3$. A horizontal force of $25$ N is applied. Determine whether the block moves and, if so, find its acceleration.

**Answer.** Maximum static friction: $F_s = \mu_s R = 0.4 \times 5.0 \times 9.81 = 19.6$ N. Since
the applied force $25$ N $> 19.6$ N, the block moves.

Dynamic friction: $F_d = 0.3 \times 49.05 = 14.7$ N.

Net force: $25 - 14.7 = 10.3$ N. Acceleration: $a = 10.3/5.0 = 2.1$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Friction](#6-friction)

</details>

<details>
<summary>Problem 2</summary>
In an Atwood machine, $m_1 = 8.0$ kg and $m_2 = 5.0$ kg. Find the acceleration and the tension in the string.

**Answer.** $a = \frac{(8.0 - 5.0) \times 9.81}{8.0 + 5.0} = \frac{29.43}{13.0} = 2.26$ m s$^{-2}$.

$T = \frac{2 \times 8.0 \times 5.0 \times 9.81}{13.0} = \frac{784.8}{13.0} = 60.4$ N.

<b>If you get this wrong, revise:</b> [Pulleys: The Atwood Machine](#pulleys-the-atwood-machine)

</details>

<details>
<summary>Problem 3</summary>
A person of mass $70$ kg stands on a scale in a lift. The lift accelerates upward at $2.0$ m s$^{-2}$ for 3 s, then travels at constant velocity for 4 s, then decelerates at $3.0$ m s$^{-2}$ to rest. Calculate the scale reading in each phase.

**Answer.** Phase 1 (accelerating up): $R = 70(9.81 + 2.0) = 70 \times 11.81 = 827$ N.

Phase 2 (constant velocity): $R = 70 \times 9.81 = 687$ N.

Phase 3 (decelerating, i.e., accelerating downward): $R = 70(9.81 - 3.0) = 70 \times 6.81 = 477$ N.

<b>If you get this wrong, revise:</b> [Lifts (Apparent Weight)](#lifts-apparent-weight)

</details>

<details>
<summary>Problem 4</summary>
A block of mass $4.0$ kg is placed on a smooth inclined plane at $30^\circ$ to the horizontal. Find the acceleration of the block down the plane.

**Answer.** Resolving parallel to the plane: $mg\sin 30° = ma$, so
$a = g\sin 30° = 9.81 \times 0.5 = 4.91$ m s$^{-2}$.

<b>If you get this wrong, revise:</b>
[Resolving Forces in Two Dimensions](#4-resolving-forces-in-two-dimensions)

</details>

<details>
<summary>Problem 5</summary>
A raindrop of mass $2.0 \times 10^{-5}$ kg falls through air with drag proportional to $v^2$. If the terminal velocity is $9.0$ m s$^{-1}$, find the drag constant $k$.

**Answer.** At terminal velocity: $mg = kv_T^2$.
$k = \frac{mg}{v_T^2} = \frac{2.0 \times 10^{-5} \times 9.81}{81} = 2.4 \times 10^{-6}$ N s$^2$
m$^{-2}$.

<b>If you get this wrong, revise:</b> [Quadratic Drag Model](#quadratic-drag-model)

</details>

<details>
<summary>Problem 6</summary>
Two forces, $\mathbf{F}_1 = (3\mathbf{i} + 4\mathbf{j})$ N and $\mathbf{F}_2 = (-\mathbf{i} + 2\mathbf{j})$ N, act on a body of mass $2.0$ kg. Find the magnitude and direction of the acceleration.

**Answer.**
$\mathbf{F}_{\mathrm{net}} = (3-1)\mathbf{i} + (4+2)\mathbf{j} = (2\mathbf{i} + 6\mathbf{j})$ N.
$\mathbf{a} = \frac{1}{2}(2\mathbf{i} + 6\mathbf{j}) = (1\mathbf{i} + 3\mathbf{j})$ m s$^{-2}$.
$|\mathbf{a}| = \sqrt{1 + 9} = \sqrt{10} = 3.16$ m s$^{-2}$. Direction:
$\theta = \arctan(3/1) = 71.6^\circ$ from the $x$-axis.

<b>If you get this wrong, revise:</b>
[Resolving Forces in Two Dimensions](#4-resolving-forces-in-two-dimensions)

</details>

<details>
<summary>Problem 7</summary>
A block slides down a rough inclined plane at $25^\circ$ to the horizontal. If $\mu_d = 0.2$, find the acceleration.

**Answer.** Resolving parallel (down-plane positive): $mg\sin 25° - F_d = ma$. Resolving
perpendicular: $R = mg\cos 25^\circ$. So $F_d = 0.2mg\cos 25^\circ$.

$a = g(\sin 25° - 0.2\cos 25°) = 9.81(0.4226 - 0.1813) = 9.81 \times 0.2413 = 2.37$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Friction](#6-friction) and
[Resolving Forces in Two Dimensions](#4-resolving-forces-in-two-dimensions)

</details>

<details>
<summary>Problem 8</summary>
A $60$ kg woman is in a lift that is moving downward at $3.0$ m s$^{-1}$ and decelerating at $1.5$ m s$^{-2}$ (i.e., slowing down). What does the scale read?

**Answer.** The lift is decelerating while moving downward, so the acceleration is **upward**.
$R - mg = ma$ where $a = 1.5$ m s$^{-2}$ upward.

$R = 60(9.81 + 1.5) = 60 \times 11.31 = 679$ N.

<b>If you get this wrong, revise:</b> [Lifts (Apparent Weight)](#lifts-apparent-weight)

</details>

<details>
<summary>Problem 9</summary>
Two blocks, $m_1 = 3.0$ kg and $m_2 = 5.0$ kg, are in contact on a frictionless horizontal surface. A horizontal force of $24$ N pushes on $m_1$. Find: (a) the acceleration of the system, (b) the contact force between the blocks.

**Answer.** (a) $a = F/(m_1 + m_2) = 24/8.0 = 3.0$ m s$^{-2}$.

(b) For $m_2$ alone: the only horizontal force is the contact force $C$.
$C = m_2 a = 5.0 \times 3.0 = 15$ N.

<b>If you get this wrong, revise:</b> [Newton's Second Law](#newtons-second-law)

</details>

<details>
<summary>Problem 10</summary>
For the linear drag model $F_d = kv$, derive the time taken for a falling object to reach half its terminal velocity.

**Answer.** $v(t) = v_T(1 - e^{-kt/m})$. Setting $v = v_T/2$:

$\frac{1}{2} = 1 - e^{-kt/m} \implies e^{-kt/m} = \frac{1}{2} \implies -kt/m = \ln\frac{1}{2} = -\ln 2$.

$t = \frac{m \ln 2}{k}$. Since $\tau = m/k$, $t = \tau \ln 2 \approx 0.693\tau$.

<b>If you get this wrong, revise:</b> [Solving the ODE](#solving-the-ode)

</details>

<details>
<summary>Problem 11</summary>
Explain why the tension in a rope draped over a pulley is the same on both sides, assuming the pulley is smooth and light.

**Answer.** A smooth pulley exerts no friction on the rope, so the rope slides freely. A light
pulley has zero moment of inertia, requiring zero net torque to rotate. Since the rope has the same
tension throughout (no friction to create a difference), and the pulley requires no torque, Newton's
second law for rotation ($\tau = I\alpha$) gives zero net torque, which is satisfied when
$T_1 = T_2$.

<b>If you get this wrong, revise:</b> [Pulleys: The Atwood Machine](#pulleys-the-atwood-machine)

</details>

<details>
<summary>Problem 12</summary>
A crate of mass $20$ kg is pushed up a rough ramp inclined at $15^\circ$ to the horizontal by a force of $120$ N acting parallel to the ramp. The coefficient of friction is $0.25$. Find the acceleration.

**Answer.** Resolving perpendicular: $R = mg\cos 15° = 20 \times 9.81 \times 0.966 = 189.5$ N.

Friction (opposing motion, so acting down the slope): $F_f = 0.25 \times 189.5 = 47.4$ N.

Resolving parallel (up the slope positive): $120 - mg\sin 15° - F_f = ma$.

$120 - 20 \times 9.81 \times 0.259 - 47.4 = 20a$.

$120 - 50.8 - 47.4 = 20a$. $21.8 = 20a$. $a = 1.09$ m s$^{-2}$.

<b>If you get this wrong, revise:</b> [Friction](#6-friction) and
[Resolving Forces in Two Dimensions](#4-resolving-forces-in-two-dimensions)

</details>

<details>
<summary>Problem 13</summary>
A block is placed on an inclined plane and the angle is slowly increased. The block begins to slide when the angle reaches $35^\circ$. Find the coefficient of static friction.

**Answer.** At the angle of repose, the block is at limiting equilibrium: $\tan\alpha = \mu_s$.

$\mu_s = \tan 35° = 0.700$.

<b>If you get this wrong, revise:</b> [Angle of Friction](#angle-of-friction)

</details>

<details>
<summary>Problem 14</summary>
(a) In each of the following situations, state which force(s) provide the centripetal force: a car rounding a level bend; a ball on a string swung in a horizontal circle; a satellite in circular orbit around Earth. (b) A stone of mass $0.50$ kg is whirled in a vertical circle of radius $0.80$ m. At the lowest point, the speed is $6.0$ m s$^{-1}$. Find the tension in the string.

**Answer.** (a) Car on level bend: static friction between tyres and road. Ball on string: tension
in the string (the horizontal component provides the centripetal force). Satellite: gravitational
attraction from Earth.

(b) At the lowest point, taking upward (towards the centre) as positive: $T - mg = mv^2/r$.

$T = 0.50\left(9.81 + \frac{36}{0.80}\right) = 0.50(9.81 + 45.0) = 0.50 \times 54.8 = 27.4$ N.

<b>If you get this wrong, revise:</b>
[Motion on a Curved Path -- Centripetal Force Introduction](#5-motion-on-a-curved-path----centripetal-force-introduction)

</details>

<details>
<summary>Problem 15</summary>
A mass of $3.0$ kg rests on a rough horizontal table ($\mu = 0.25$) connected by a light inextensible string over a smooth pulley to a mass of $1.5$ kg hanging freely. Determine whether the system moves and, if so, find the acceleration and tension.

**Answer.** Check condition: $\mu m_1 = 0.25 \times 3.0 = 0.75$ kg. Since $m_2 = 1.5 > 0.75$, the
system accelerates.

$a = \frac{(1.5 - 0.25 \times 3.0) \times 9.81}{3.0 + 1.5} = \frac{0.75 \times 9.81}{4.5} = \frac{7.36}{4.5} = 1.63$
m s$^{-2}$.

$T = \frac{3.0 \times 1.5 \times 9.81 \times 1.25}{4.5} = \frac{55.2}{4.5} = 12.3$ N.

<b>If you get this wrong, revise:</b> [Particles on a Rough Surface](#particles-on-a-rough-surface)

</details>

<details>
<summary>Problem 16</summary>
Two masses, $m_A = 5.0$ kg and $m_B = 3.0$ kg, are connected by a light inextensible string over a smooth pulley. Mass $m_A$ rests on a smooth plane inclined at $30^\circ$ to the horizontal, with the string parallel to the slope. Mass $m_B$ hangs freely. The system is released from rest. Find the acceleration and the tension in the string.

**Answer.** First determine the direction of motion. For $m_A$ down the slope:
$m_A g\sin 30° = 5.0 \times 9.81 \times 0.5 = 24.5$ N. Weight of $m_B$ = $3.0 \times 9.81 = 29.4$ N.
Since $m_B$'s weight exceeds $m_A$'s component down the slope, $m_B$ descends and $m_A$ moves up the
slope.

For $m_A$ (up the slope positive): $T - m_A g\sin 30° = m_A a$.

For $m_B$ (downward positive): $m_B g - T = m_B a$.

Adding: $m_B g - m_A g\sin 30° = (m_A + m_B)a$.

$a = \frac{(3.0 \times 9.81 - 5.0 \times 9.81 \times 0.5)}{5.0 + 3.0} = \frac{(29.4 - 24.5)}{8.0} = \frac{4.90}{8.0} = 0.613$
m s$^{-2}$.

$T = m_B(g - a) = 3.0(9.81 - 0.613) = 3.0 \times 9.20 = 27.6$ N.

<b>If you get this wrong, revise:</b> [Connected Particles](#7-connected-particles) and
[Resolving Forces in Two Dimensions](#4-resolving-forces-in-two-dimensions)

</details>

<details>
<summary>Problem 17</summary>
A particle of mass $0.50$ kg moves on the inside of a vertical circular track of radius $0.80$ m. At the bottom of the track, the speed is $7.0$ m s$^{-1}$. Assuming energy is conserved, find the normal reaction from the track at (a) the bottom and (b) the top of the circle.

**Answer.** First find the speed at the top using conservation of energy. Taking the bottom as zero
potential energy, the height difference is $2r = 1.60$ m:

$\frac{1}{2}mv_{\mathrm{bot}}^2 = \frac{1}{2}mv_{\mathrm{top}}^2 + mg(2r)$

$v_{\mathrm{top}}^2 = v_{\mathrm{bot}}^2 - 4gr = 49 - 4 \times 9.81 \times 0.80 = 49 - 31.4 = 17.6$

$v_{\mathrm{top}} = 4.20$ m s$^{-1}$

(a) At the bottom, the normal reaction $R$ and weight act along the same line, with $R$ pointing
upward (towards the centre):

$R - mg = \frac{mv_{\mathrm{bot}}^2}{r}$, so
$R = 0.50 \times 9.81 + \frac{0.50 \times 49}{0.80} = 4.91 + 30.6 = 35.5$ N.

(b) At the top, both $R$ and weight point towards the centre (downward):

$R + mg = \frac{mv_{\mathrm{top}}^2}{r}$, so
$R = \frac{0.50 \times 17.6}{0.80} - 0.50 \times 9.81 = 11.0 - 4.91 = 6.09$ N.

<b>If you get this wrong, revise:</b>
[Motion on a Curved Path -- Centripetal Force Introduction](#5-motion-on-a-curved-path----centripetal-force-introduction)

</details>

<details>
<summary>Problem 18</summary>
A car of mass $800$ kg travels around the inside of a vertical circular loop of radius $10$ m. (a) Find the minimum speed the car must have at the highest point to maintain contact with the track. (b) Using energy conservation, find the normal reaction at the lowest point when the car has this minimum speed at the top.

**Answer.** (a) At the top, taking downward as positive (towards the centre): $R + mg = mv^2/r$.
Contact is lost when $R = 0$, so the minimum speed is:

$mg = \frac{mv_{\min}^2}{r} \implies v_{\min} = \sqrt{gr} = \sqrt{9.81 \times 10} = 9.90$ m s$^{-1}$

(b) By conservation of energy (bottom to top, height difference $2r$):

$\frac{1}{2}mv_b^2 = \frac{1}{2}mv_{\min}^2 + mg(2r)$

$v_b^2 = v_{\min}^2 + 4gr = gr + 4gr = 5gr = 5 \times 9.81 \times 10 = 490.5$

At the bottom, taking upward as positive (towards the centre): $R - mg = mv_b^2/r$

$R = m\left(g + \frac{v_b^2}{r}\right) = 800\left(9.81 + \frac{490.5}{10}\right) = 800(9.81 + 49.05) = 800 \times 58.86 = 47100$
N $= 47.1$ kN

<b>If you get this wrong, revise:</b>
[Motion on a Curved Path -- Centripetal Force Introduction](#5-motion-on-a-curved-path----centripetal-force-introduction)

</details>

<details>
<summary>Problem 19</summary>
A man of mass $75$ kg stands in a lift of mass $500$ kg. The lift accelerates upward from rest at $2.0$ m s$^{-2}$ for 4 s, then moves at constant speed for 6 s, then decelerates at $3.0$ m s$^{-2}$ until it stops. Find: (a) the tension in the cable during each phase, (b) the apparent weight of the man in each phase, (c) the total distance travelled.

**Answer.** Total mass of lift + man: $M = 575$ kg.

(a) Phase 1 (accelerating up): $T - Mg = Ma$, so $T = 575(9.81 + 2.0) = 575 \times 11.81 = 6790$ N.

Phase 2 (constant speed): $T = Mg = 575 \times 9.81 = 5640$ N.

Phase 3 (decelerating): $T = 575(9.81 - 3.0) = 575 \times 6.81 = 3916$ N.

(b) Phase 1: $R = 75(9.81 + 2.0) = 886$ N. Phase 2: $R = 75 \times 9.81 = 736$ N. Phase 3:
$R = 75(9.81 - 3.0) = 511$ N.

(c) Phase 1: $d_1 = \frac{1}{2} \times 2.0 \times 16 = 16$ m. End speed: $v = 2.0 \times 4 = 8.0$ m
s$^{-1}$.

Phase 2: $d_2 = 8.0 \times 6 = 48$ m.

Phase 3: $v^2 = u^2 + 2as \implies 0 = 64 - 2 \times 3.0 \times d_3$, so $d_3 = 64/6 = 10.7$ m.

Total distance: $16 + 48 + 10.7 = 74.7$ m.

<b>If you get this wrong, revise:</b> [Lifts (Apparent Weight)](#lifts-apparent-weight)

</details>

<details>
<summary>Problem 20</summary>
Two blocks, $m_A = 5.0$ kg on a rough incline at $30^\circ$ ($\mu = 0.2$) and $m_B = 8.0$ kg hanging vertically, are connected by a light inextensible string over a smooth pulley at the top of the incline. The string is parallel to the incline. If the system is released from rest, find: (a) the acceleration, (b) the tension, (c) the velocity after the system has moved 2.0 m.

**Answer.** First determine the direction of motion. Component of $m_A$'s weight down the slope:
$m_A g\sin 30° = 5.0 \times 9.81 \times 0.5 = 24.5$ N. Maximum friction on $m_A$:
$\mu m_A g\cos 30° = 0.2 \times 5.0 \times 9.81 \times 0.866 = 8.50$ N.

If $m_A$ moves up the slope, total resistance = $24.5 + 8.50 = 33.0$ N. Driving force =
$m_B g = 78.5$ N. Since $78.5 > 33.0$, $m_B$ descends and $m_A$ moves up the slope.

For $m_A$ (up the slope positive): $T - m_A g\sin 30° - \mu m_A g\cos 30° = m_A a$.

For $m_B$ (downward positive): $m_B g - T = m_B a$.

Adding: $m_B g - m_A g\sin 30° - \mu m_A g\cos 30° = (m_A + m_B)a$.

(a) $a = \frac{78.5 - 24.5 - 8.50}{5.0 + 8.0} = \frac{45.5}{13.0} = 3.50$ m s$^{-2}$.

(b) $T = m_B(g - a) = 8.0(9.81 - 3.50) = 8.0 \times 6.31 = 50.5$ N.

(c) Using $v^2 = u^2 + 2as$ with $u = 0$: $v = \sqrt{2 \times 3.50 \times 2.0} = \sqrt{14.0} = 3.74$
m s$^{-1}$.

<b>If you get this wrong, revise:</b> [Friction](#6-friction) and
[Connected Particles](#7-connected-particles)

</details>


---

:::tip Diagnostic Test
Ready to test your understanding of **Dynamics**? The [diagnostic test](/physics/diagnostics/diag-dynamics) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Dynamics with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/physics/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::
