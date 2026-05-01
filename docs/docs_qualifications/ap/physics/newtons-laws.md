---
title: Newton's Laws of Motion
description:
  Newton's Laws of Motion — Newton's First Law -- Inertia (CED Unit 2); Inertial
  Reference Frames; Mass and Inertia for thorough revision and examination pr.
date: 2026-04-14
tags:
  - Physics
  - AP
categories:
  - Physics
slug: newtons-laws
---

## Newton's First Law -- Inertia (CED Unit 2)

An object at rest stays at rest, and an object in motion stays in motion with the same speed and in
the same direction, unless acted upon by a net external force.


<PhetSimulation simulationId="forces-and-motion-basics" title="Forces and Motion: Basics" />

Explore the simulation above to develop intuition for this topic.


### Inertial Reference Frames

Newton's laws are valid only in **inertial reference frames** -- frames that are not accelerating. A
frame attached to an accelerating car is non-inertial: a pendulum hanging from the ceiling swings
backward even though no horizontal force acts on it (in the car's frame). In an inertial frame (the
ground), the pendulum simply tends to stay at rest while the car accelerates forward.

### Mass and Inertia

**Mass** is a measure of an object's resistance to changes in its motion (inertia). It is an
intrinsic property of an object, independent of location. The SI unit is the kilogram (kg).

Mass is not weight. Mass is a scalar; weight is a vector. Mass does not change with location; weight
depends on the local gravitational field. An astronaut on the Moon has the same mass as on Earth but
one-sixth the weight.

## Newton's Second Law -- Force and Acceleration (CED Unit 2)

The net external force on an object equals the product of its mass and acceleration:

$$
\vec{F}_{\mathrm{net}} = m\vec{a}
$$

In component form:

$$
\sum F_x = ma_x, \qquad \sum F_y = ma_y
$$

### The Kilogram, Newton, and Slug

- 1 Newton (N) = $1 \mathrm{ kg} \cdot \mathrm{m/s}^2$
- 1 slug = $14.59 \mathrm{ kg}$ (used in the US customary system)

### Weight vs Mass

$$
\vec{W} = m\vec{g}
$$

- **Weight** is a force (measured in N) that depends on the local gravitational field.
- **Mass** is an intrinsic property (measured in kg) that does not change with location.

On Earth: $g \approx 9.8 \mathrm{ m/s}^2$. On the Moon: $g \approx 1.62 \mathrm{ m/s}^2$.

### Proof That $F = ma$ Is Not a Definition

One might think $F = ma$ merely defines force. But force is defined independently through
interactions (contact forces, gravitational forces, spring forces). $F = ma$ is an empirical law
that relates the net force to the resulting acceleration. The fact that the same proportionality
constant ($m$) works for all forces (gravitational, electromagnetic, contact) is a deep and
non-trivial result. If $F = ma$ were merely a definition, it would not have predictive power, but it
does: given the forces, we can predict the motion, and given the motion, we can infer the forces.

## Newton's Third Law -- Action-Reaction Pairs (CED Unit 2)

For every action, there is an equal and opposite reaction:

$$
\vec{F}_{A \mathrm{ on } B} = -\vec{F}_{B \mathrm{ on } A}
$$

### Key Points About Action-Reaction Pairs

1. The two forces act on **different objects**.
2. The forces are always equal in magnitude and opposite in direction.
3. The forces are the same type (both gravitational, both normal, both frictional, etc.).
4. Action-reaction pairs cannot cancel each other because they act on different objects.

### Systematic Identification of Third Law Pairs

To correctly identify a third law pair, use this algorithm:

1. Identify the force on object $A$ and what object exerts it: "Object $B$ exerts force $\vec{F}$ on
   object $A$."
2. The third law pair is: "Object $A$ exerts force $-\vec{F}$ on object $B$."
3. Verify: same type, equal magnitude, opposite direction, different objects.

:::info[Example: Identifying Action-Reaction Pairs]

A book sits on a table. The forces on the book are:

- $\vec{W}$: gravitational pull of Earth on the book (downward).
- $\vec{N}$: normal force of table on the book (upward).

These are **not** an action-reaction pair. The correct pairs are:

- Earth pulls book down / Book pulls Earth up.
- Table pushes book up / Book pushes table down.

$\vec{W}$ and $\vec{N}$ balance (not because they are action-reaction, but because the book is in
equilibrium).

:::

## Types of Forces

### Gravitational Force (Weight)

$$
F_g = mg
$$

### Normal Force ($\vec{N}$)

The normal force is the contact force perpendicular to the surface. On a flat surface with no
vertical acceleration: $N = mg$. On an inclined plane at angle $\theta$:

$$
N = mg\cos\theta
$$

### Why the Normal Force Is Not Always Equal to $mg$

The normal force adjusts to prevent the object from penetrating the surface. It equals $mg$ only
when there is no vertical acceleration and no other vertical forces. In a lift accelerating upward,
$N = m(g + a) \gt mg$. On an inclined plane, only the component of gravity perpendicular to the
surface ($mg\cos\theta$) must be balanced by the normal force. The parallel component
($mg\sin\theta$) causes acceleration along the slope.

### Tension ($\vec{T}$)

Tension is the pulling force transmitted through a string, rope, or cable. For a massless,
inextensible string, tension is the same throughout.

### Friction ($\vec{f}$)

**Static friction** prevents relative motion:

$$
f_s \le \mu_s N
$$

where $\mu_s$ is the coefficient of static friction. Static friction adjusts to match the applied
force up to a maximum of $f_{s,\max} = \mu_s N$.

**Kinetic friction** opposes relative motion:

$$
f_k = \mu_k N
$$

where $\mu_k$ is the coefficient of kinetic friction. Note that $\mu_k \lt \mu_s$ in general.

### Why Kinetic Friction Is Less Than Static Friction

At the microscopic level, static friction holds because the surfaces form temporary bonds
(atomic-scale cold welds) at the contact points. These bonds must be broken to initiate sliding.
Once sliding begins, the surfaces do not have time to form as many bonds, and the kinetic friction
force is lower. The transition from static to kinetic friction is the reason objects "jerk" when
they start to move.

### Applied Force ($\vec{F}_{\mathrm{app}}$)

Any external push or pull.

### Spring Force (Hooke's Law)

$$
F_s = -kx
$$

where $k$ is the spring constant and $x$ is the displacement from equilibrium.

## Free Body Diagrams (FBDs)

A free body diagram shows all external forces acting on a single object:

1. Isolate the object.
2. Draw vectors for each force, originating from the object's center.
3. Do not include internal forces or forces exerted by the object on other objects.

### Common FBD Errors

- Including velocity or acceleration vectors on the FBD. The FBD shows only _forces_.
- Drawing the normal force at an angle. The normal force is always perpendicular to the contact
  surface.
- Including the "centripetal force" as a separate force. The centripetal force is the _net_ radial
  force, not a separate interaction.

:::info[Example: Block on an Inclined Plane]

A $5.0 \mathrm{ kg}$ block rests on a $30^\circ$ incline with $\mu_s = 0.4$ and $\mu_k = 0.3$. Does
the block slide?

**Forces along the incline:** $mg\sin\theta = 5.0 \times 9.8 \times \sin 30^\circ = 24.5 \mathrm{ N}$
(down).

**Maximum static friction:**
$f_{s,\max} = \mu_s N = 0.4 \times 5.0 \times 9.8 \times \cos 30^\circ = 0.4 \times 42.4 = 17.0 \mathrm{ N}$.

Since $mg\sin\theta = 24.5 \mathrm{ N} \gt f_{s,\max} = 17.0 \mathrm{ N}$, the block slides.

**Kinetic friction:** $f_k = 0.3 \times 42.4 = 12.7 \mathrm{ N}$.

**Acceleration down the incline:**

$$
a = \frac{mg\sin\theta - f_k}{m} = \frac{24.5 - 12.7}{5.0} = \frac{11.8}{5.0} = 2.36 \mathrm{ m/s}^2
$$

:::

## Applications of Newton's Laws

### Atwood Machine

Two masses $m_1$ and $m_2$ ($m_2 \gt m_1$) connected by a massless string over a frictionless
pulley.

For mass $m_1$ (taking up as positive): $T - m_1 g = m_1 a$

For mass $m_2$ (taking up as positive): $m_2 g - T = m_2 a$

Adding: $(m_2 - m_1)g = (m_1 + m_2)a$

$$
a = \frac{(m_2 - m_1)g}{m_1 + m_2}
$$

$$
T = \frac{2m_1 m_2 g}{m_1 + m_2}
$$

### Derivation of Tension in the Atwood Machine

The tension is the same throughout a massless string. Solving the first equation for $T$:

$$
T = m_1(g + a)
$$

Substituting the expression for $a$:

$$
T = m_1\left(g + \frac{(m_2 - m_1)g}{m_1 + m_2}\right) = m_1 g \cdot \frac{m_1 + m_2 + m_2 - m_1}{m_1 + m_2} = \frac{2m_1 m_2 g}{m_1 + m_2}
$$

Note that $T$ is always between $m_1 g$ and $m_2 g$: it must be greater than $m_1 g$ to accelerate
$m_1$ upward, and less than $m_2 g$ to accelerate $m_2$ downward.

:::info[Example]

An Atwood machine has $m_1 = 3.0 \mathrm{ kg}$ and $m_2 = 5.0 \mathrm{ kg}$. Find the acceleration and
tension.

$$
a = \frac{(5.0 - 3.0)(9.8)}{3.0 + 5.0} = \frac{2.0 \times 9.8}{8.0} = 2.45 \mathrm{ m/s}^2
$$

$$
T = \frac{2(3.0)(5.0)(9.8)}{3.0 + 5.0} = \frac{294}{8.0} = 36.75 \mathrm{ N}
$$

:::

### Connected Bodies (Systems)

When multiple objects are connected, you can either:

1. Analyze each object separately with its own FBD, or
2. Treat the system as a single object (internal forces cancel).

**When to use each approach:** Use the system approach when you need the acceleration of the entire
system. Use the individual approach when you need the tension in a connecting string or the normal
force between two objects in contact.

### Elevator Problems

A person of mass $m$ stands on a scale in an elevator. The scale reads the normal force $N$.

- At rest or constant velocity: $N = mg$
- Accelerating upward: $N = m(g + a)$ (scale reads higher)
- Accelerating downward: $N = m(g - a)$ (scale reads lower)
- Free fall ($a = g$): $N = 0$ (apparent weightlessness)

### Friction and Circular Motion

For an object moving in a circle, the net force toward the center provides the centripetal force:

$$
\sum F_{\mathrm{radial}} = \frac{mv^2}{r}
$$

### Banked Curves

On a banked curve of angle $\theta$ and radius $r$, the ideal speed (at which no friction is
required) is:

$$
v_{\mathrm{ideal}} = \sqrt{rg\tan\theta}
$$

At this speed, the horizontal component of the normal force provides exactly the required
centripetal force. Below this speed, friction acts up the slope; above it, friction acts down the
slope.

:::info[Example]

A $1200 \mathrm{ kg}$ car rounds a flat curve of radius 80 m at $15 \mathrm{ m/s}$. What minimum
coefficient of static friction is required?

$$
f_s = \frac{mv^2}{r} = \mu_s N = \mu_s mg
$$

$$
\mu_s = \frac{v^2}{rg} = \frac{(15)^2}{80 \times 9.8} = \frac{225}{784} \approx 0.287
$$

:::

## Newton's Law of Universal Gravitation (CED Unit 3)

$$
F = \frac{Gm_1 m_2}{r^2}
$$

where $G = 6.674 \times 10^{-11} \mathrm{ N} \cdot \mathrm{m}^2/\mathrm{kg}^2$.

### Gravitational Field

The gravitational field strength at a distance $r$ from mass $M$ is:

$$
g = \frac{GM}{r^2}
$$

### Gravitational Potential Energy

$$
U = -\frac{GMm}{r}
$$

The negative sign indicates that work must be done against gravity to move masses apart. The
reference point ($U = 0$) is at infinity.

### Orbital Mechanics

For a circular orbit of radius $r$ around mass $M$:

$$
\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v = \sqrt{\frac{GM}{r}}
$$

$$
T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}
$$

These are Kepler's Third Law: $T^2 \propto r^3$.

### Why All Orbits Are Conic Sections

Newton showed that any orbit under an inverse-square gravitational force is a conic section
(ellipse, parabola, or hyperbola). Bound orbits (total energy negative) are ellipses. Escape
trajectories (total energy zero) are parabolas. Unbound trajectories (total energy positive) are
hyperbolas. Circular orbits are a special case of elliptical orbits with eccentricity zero.

## Common Pitfalls

1. **Including forces in the wrong direction on FBDs.** Always draw forces in the direction they
   actually act, not in the direction of motion.
2. **Confusing action-reaction pairs.** $\vec{N}$ and $\vec{W}$ on the same object are not an
   action-reaction pair.
3. **Using $\mu_s N$ as the static friction force.** $f_s \le \mu_s N$; static friction adjusts to
   the applied force. Only use $\mu_s N$ for the maximum.
4. **Forgetting that tension in a massless string is the same on both sides of a pulley** (assuming
   a frictionless, massless pulley).
5. **Assuming $\mu_k = \mu_s$.** Kinetic friction is generally less than static friction.
6. **Using $g = 9.8$ when a different value is specified** or when the problem takes place far from
   Earth's surface.
7. **Ignoring the direction of the normal force.** The normal force is always perpendicular to the
   contact surface, not necessarily vertical.
8. **Adding mass to a pulley system without accounting for the pulley's inertia.** The standard
   Atwood machine assumes a massless pulley. A massive pulley has its own moment of inertia.
9. **Assuming the acceleration of a connected system is the same for all parts.** This is true only
   if the connections are rigid or inextensible.

## Practice Questions

1. A $10 \mathrm{ kg}$ box is pushed across a floor with $\mu_k = 0.25$ by a horizontal force of
   $50 \mathrm{ N}$. Find the acceleration of the box.

2. Two blocks of masses $4.0 \mathrm{ kg}$ and $6.0 \mathrm{ kg}$ are connected by a string over a
   frictionless pulley (Atwood machine). Find the acceleration and the tension.

3. A $60 \mathrm{ kg}$ person stands on a scale in an elevator that accelerates upward at
   $2.0 \mathrm{ m/s}^2$. What does the scale read?

4. A $2.0 \mathrm{ kg}$ block on a $35^\circ$ incline has $\mu_s = 0.5$ and $\mu_k = 0.3$. Find the
   acceleration if the block is given an initial push up the incline.

5. A satellite orbits Earth at an altitude of $400 \mathrm{ km}$. Find the orbital velocity and
   period. (Earth's mass = $5.97 \times 10^{24} \mathrm{ kg}$, Earth's radius = $6371 \mathrm{ km}$.)

6. A $1500 \mathrm{ kg}$ car rounds a banked curve of radius 100 m at $20 \mathrm{ m/s}$. The banking
   angle is $15^\circ$. Find the minimum coefficient of static friction.

7. Three blocks of masses $m_1$, $m_2$, and $m_3$ are connected by strings on a frictionless table,
   with $m_3$ hanging off the edge over a pulley. Derive the acceleration in terms of the masses.

8. A $5.0 \mathrm{ kg}$ block is on a frictionless table connected to a $3.0 \mathrm{ kg}$ block hanging
   over the edge. Find the acceleration of the system and the tension in the string.

9. A block of mass $m$ is placed on a wedge of mass $M$ with angle $\theta$. All surfaces are
   frictionless. Find the acceleration of the wedge relative to the ground.

10. A $2000 \mathrm{ kg}$ car towing a $1000 \mathrm{ kg}$ trailer accelerates at $1.5 \mathrm{ m/s}^2$.
    If the tension in the tow bar is $1800 \mathrm{ N}$, find the friction force on the car.

## 10. Friction: A Deeper Look

### Microscopic Origin of Friction

At the microscopic level, even apparently smooth surfaces are rough. When two surfaces are pressed
together, the microscopic peaks (asperities) interlock. To slide the surfaces, these interlocking
features must be broken or deformed. The force needed is friction.

**Static friction** involves cold welding: the atoms at the contact points form temporary bonds.
These bonds must be broken simultaneously to initiate motion, which requires a larger force. Once
sliding begins, the surfaces do not have time to form as many bonds, and the kinetic friction force
is lower.

### The Angle of Repose

The steepest angle at which an object on an inclined plane remains stationary is the **angle of
repose**, given by:

$$\theta_r = \arctan(\mu_s)$$

This is because the block is on the point of sliding when $mg\sin\theta = \mu_s mg\cos\theta$, i.e.,
$\tan\theta = \mu_s$. This relationship is used in geology to predict landslides and in industry to
design hoppers and chutes.

### Worked Example: Friction on a Banked Curve Without Friction

A circular road of radius $80 \mathrm{ m}$ is banked at $15^{\circ}$. Find the speed at which a car
can round the curve without needing any friction.

At the ideal speed, the horizontal component of the normal force provides the centripetal force, and
the vertical component balances gravity:

$$N\sin\theta = \frac{mv^2}{r}, \qquad N\cos\theta = mg$$

Dividing: $\tan\theta = \frac{v^2}{rg}$

$$v = \sqrt{rg\tan\theta} = \sqrt{80 \times 9.8 \times \tan 15^{\circ}} = \sqrt{80 \times 9.8 \times 0.2679} = \sqrt{209.9} = 14.5 \mathrm{ m/s}$$

At this speed, the car can negotiate the curve even on ice. Below this speed, friction acts up the
slope; above it, friction acts down the slope.

## 11. Connected Bodies: Systematic Approach

### Worked Example: Three-Body System with a Pulley

Three blocks are connected as follows: $m_1 = 4 \mathrm{ kg}$ and $m_2 = 6 \mathrm{ kg}$ on a
frictionless table, connected by a string over a pulley at the edge, with $m_3 = 5 \mathrm{ kg}$
hanging vertically.

**System approach:** The net force on the system is $m_3 g$ (the weight of the hanging mass). The
total mass being accelerated is $m_1 + m_2 + m_3 = 15 \mathrm{ kg}$.

$$a = \frac{m_3 g}{m_1 + m_2 + m_3} = \frac{5 \times 9.8}{15} = \frac{49}{15} = 3.27 \mathrm{ m/s}^2$$

**Individual approach for tension:** For $m_3$:

$$m_3 g - T = m_3 a \implies T = m_3(g - a) = 5(9.8 - 3.27) = 5 \times 6.53 = 32.7 \mathrm{ N}$$

For the string between $m_1$ and $m_2$ on the table: $T' = m_2 a = 6 \times 3.27 = 19.6 \mathrm{ N}$.

Note that the tension in the string connecting to the hanging mass ($32.7 \mathrm{ N}$) is greater
than the tension in the string between $m_1$ and $m_2$ ($19.6 \mathrm{ N}$), because the latter string
only needs to accelerate $m_2$, while the former must also provide the net force to accelerate
$m_3$.

## 12. Gravitational Field Strength: Derivation of Key Results

### Variation of $g$ with Altitude

At the Earth's surface, $g \approx 9.8 \mathrm{ m/s}^2$. At height $h$ above the surface:

$$g(h) = \frac{GM}{(R_E + h)^2}$$

At $h = R_E$ (one Earth radius above the surface):
$g = \frac{GM}{4R_E^2} = \frac{g_0}{4} \approx 2.45 \mathrm{ m/s}^2$.

This rapid decrease is why astronauts in low Earth orbit (altitude about 400 km) are not truly
weightless because of distance from Earth -- they are weightless because they are in free fall. The
gravitational field strength at 400 km altitude is $g \approx 8.7 \mathrm{ m/s}^2$, about 89% of the
surface value.

### Gravitational Field Strength Inside a Uniform Sphere

For a point at distance $r$ from the centre of a uniform sphere of radius $R$ and mass $M$:

$$g(r) = \frac{GMr}{R^3} \quad (r \le R)$$

$$g(r) = \frac{GM}{r^2} \quad (r \gt R)$$

Inside the sphere, $g$ increases linearly with $r$ and reaches its maximum at the surface. This is
because only the mass within radius $r$ contributes to the gravitational force at that point (by
Newton's shell theorem).

## 13. Orbital Mechanics: Extended Worked Examples

### Worked Example: Satellite Speed and Period

A satellite orbits at an altitude of $500 \mathrm{ km}$ above Earth's surface.

$$r = R_E + h = 6.371 \times 10^6 + 5 \times 10^5 = 6.871 \times 10^6 \mathrm{ m}$$

$$v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.674 \times 10^{-11} \times 5.97 \times 10^{24}}{6.871 \times 10^6}} = \sqrt{5.80 \times 10^7} = 7615 \mathrm{ m/s}$$

$$T = \frac{2\pi r}{v} = \frac{2\pi \times 6.871 \times 10^6}{7615} = 5671 \mathrm{ s} \approx 94.5 \mathrm{ min}$$

### Worked Example: Escape Velocity from a Planet

The escape velocity from a planet of mass $M$ and radius $R$ is:

$$v_e = \sqrt{\frac{2GM}{R}}$$

For Earth:
$v_e = \sqrt{\frac{2 \times 6.674 \times 10^{-11} \times 5.97 \times 10^{24}}{6.371 \times 10^6}} = 11186 \mathrm{ m/s} \approx 11.2 \mathrm{ km/s}$.

A useful approximation: $v_e \approx \sqrt{2} \times v_{\mathrm{orbit}}$ for a surface-skimming orbit.
The factor of $\sqrt{2}$ arises because escape requires twice the kinetic energy of a circular
orbit: $\frac{1}{2}mv_e^2 = 2 \times \frac{1}{2}mv_{\mathrm{orbit}}^2$.

## 14. Summary Table: Forces and Their Characteristics

| Force            | Law                            | Direction                              | Depends On                          |
| ---------------- | ------------------------------ | -------------------------------------- | ----------------------------------- |
| Gravity          | $F = GMm/r^2$                  | Attractive, along line joining centres | Masses, separation                  |
| Normal           | Adjusts to prevent penetration | Perpendicular to contact surface       | Other forces present                |
| Tension          | Along string                   | Away from object                       | Applied forces, mass                |
| Static friction  | $f_s \le \mu_s N$              | Opposes tendency to slide              | Normal force, coefficient           |
| Kinetic friction | $f_k = \mu_k N$                | Opposes motion                         | Normal force, coefficient           |
| Spring           | $F = -kx$                      | Toward equilibrium position            | Displacement, spring constant       |
| Drag             | $F_d \propto v^2$              | Opposes motion                         | Speed, cross-section, fluid density |

## 15. Common Pitfalls: Extended

10. **Assuming the normal force equals $mg$ on an inclined plane.** The normal force is
    $mg\cos\theta$, not $mg$. Always resolve forces perpendicular to the surface.

11. **Forgetting that tension has a maximum value.** A string can only pull, not push. If the
    calculated tension is negative, the string has gone slack and the tension is zero.

12. **Applying $F = ma$ to individual objects when using the system approach.** The system approach
    gives the acceleration of the entire system but does not give tensions or internal forces.

13. **Ignoring air resistance in orbital calculations.** While this is a valid approximation for
    satellites above the atmosphere, it fails for objects in the lower atmosphere.

14. **Using $g = 9.8 \mathrm{ m/s}^2$ for objects far from Earth's surface.** Use $g = GM/r^2$ with
    the actual distance from Earth's centre.

15. **Confusing the mass of an orbiting body with the mass of the central body.** In
    $v = \sqrt{GM/r}$, $M$ is the mass of the body being orbited (e.g., Earth), not the satellite.

## Practice Questions (Additional)

11. A block of mass $m$ is placed on a wedge of mass $M$ with angle $\theta$. All surfaces are
    frictionless. Find the acceleration of the wedge. (Hint: use conservation of momentum in the
    horizontal direction.)

12. A $3 \mathrm{ kg}$ block on a frictionless table is connected by a string over a pulley to a
    $2 \mathrm{ kg}$ block hanging off the edge. The pulley has mass $0.5 \mathrm{ kg}$ and radius
    $0.1 \mathrm{ m}$ (moment of inertia $I = \frac{1}{2}mr^2$). Find the acceleration of the system
    and the tension on each side of the pulley.

13. A rocket of mass $1000 \mathrm{ kg}$ is launched vertically. The engine produces a thrust of
    $15000 \mathrm{ N}$ for $30 \mathrm{ s}$. Find the maximum height reached. (Assume $g$ is constant
    at $9.8 \mathrm{ m/s}^2$ and neglect air resistance.)

14. Two masses $m_1 = 2 \mathrm{ kg}$ and $m_2 = 3 \mathrm{ kg}$ are connected by a light string over a
    smooth pulley. $m_1$ rests on a rough table with $\mu_k = 0.3$. Find the acceleration and the
    tension in the string.

15. Calculate the gravitational field strength at a point halfway between the Earth and the Moon.
    (Earth-Moon distance $= 3.84 \times 10^8 \mathrm{ m}$, $M_E = 5.97 \times 10^{24} \mathrm{ kg}$,
    $M_M = 7.35 \times 10^{22} \mathrm{ kg}$.)

## Extended Worked Examples

### Example 16: Atwood Machine with Massive Pulley

Two masses $m_1 = 4 \mathrm{ kg}$ and $m_2 = 6 \mathrm{ kg}$ are connected by a light string over a
pulley of mass $M = 2 \mathrm{ kg}$ and radius $R = 0.1 \mathrm{ m}$ (solid disk,
$I = \frac{1}{2}MR^2$). Find the acceleration of the system and the tensions on each side of the
pulley.

**Step 1: Write equations for each mass and the pulley**

For $m_1$ (lighter, accelerates up):

$$T_1 - m_1 g = m_1 a$$

For $m_2$ (heavier, accelerates down):

$$m_2 g - T_2 = m_2 a$$

For the pulley (rotates clockwise):

$$T_2 R - T_1 R = I\alpha = \frac{1}{2}MR^2 \times \frac{a}{R} = \frac{1}{2}MaR$$

$$T_2 - T_1 = \frac{1}{2}Ma$$

**Step 2: Solve the system**

From the first two equations:

$$T_1 = m_1(g + a), \quad T_2 = m_2(g - a)$$

Substituting into the pulley equation:

$$m_2(g - a) - m_1(g + a) = \frac{1}{2}Ma$$

$$(m_2 - m_1)g - (m_1 + m_2)a = \frac{1}{2}Ma$$

$$a = \frac{(m_2 - m_1)g}{m_1 + m_2 + \frac{1}{2}M} = \frac{(6 - 4) \times 9.8}{4 + 6 + 1} = \frac{19.6}{11} = 1.78 \mathrm{ m/s}^2$$

**Step 3: Find the tensions**

$$T_1 = 4(9.8 + 1.78) = 4 \times 11.58 = 46.3 \mathrm{ N}$$

$$T_2 = 6(9.8 - 1.78) = 6 \times 8.02 = 48.1 \mathrm{ N}$$

:::info
With a massless pulley, $T_1 = T_2$ and
$a = \frac{(m_2 - m_1)g}{m_1 + m_2} = \frac{19.6}{10} = 1.96 \mathrm{ m/s}^2$. The massive pulley
reduces the acceleration because some of the net force goes into rotating the pulley rather than
accelerating the masses. The difference $T_2 - T_1 = 1.8 \mathrm{ N}$ is the net torque on the pulley.
:::

### Example 17: Object in a Fluid with Drag

A $0.5 \mathrm{ kg}$ steel ball is dropped into a tank of oil. The drag force is given by $F_D = bv$
where $b = 0.8 \mathrm{ N}\cdot\mathrm{s/m}$. Find (a) the terminal velocity, (b) the time to reach 63%
of terminal velocity, and (c) the velocity after $3 \mathrm{ s}$.

**Step 1: Terminal velocity (net force = 0)**

$$mg = bv_T$$

$$v_T = \frac{mg}{b} = \frac{0.5 \times 9.8}{0.8} = 6.125 \mathrm{ m/s}$$

**Step 2: Time constant**

The equation of motion is $ma = mg - bv$, which gives:

$$v(t) = v_T(1 - e^{-t/\tau})$$

where $\tau = m/b = 0.5/0.8 = 0.625 \mathrm{ s}$.

The time to reach $63\%$ of $v_T$ is $t = \tau = 0.625 \mathrm{ s}$.

**Step 3: Velocity after $3 \mathrm{ s}$**

$$v(3) = 6.125(1 - e^{-3/0.625}) = 6.125(1 - e^{-4.8}) = 6.125(1 - 0.00823) = 6.125 \times 0.9918 = 6.074 \mathrm{ m/s}$$

The ball is essentially at terminal velocity after $3 \mathrm{ s}$ (about $99.2\%$ of $v_T$).

### Example 18: Tension in a Cable at an Angle

A $20 \mathrm{ kg}$ traffic light is suspended by two cables. Cable A makes $30^\circ$ with the horizontal
and Cable B makes $45^\circ$ with the horizontal. Find the tension in each cable.

**Step 1: Resolve forces**

Horizontal: $T_A \cos 30° = T_B \cos 45^\circ$

$$T_A \times 0.866 = T_B \times 0.707 \implies T_A = 0.816 T_B$$

Vertical: $T_A \sin 30° + T_B \sin 45° = mg$

$$T_A \times 0.5 + T_B \times 0.707 = 20 \times 9.8 = 196 \mathrm{ N}$$

**Step 2: Substitute and solve**

$$0.816 T_B \times 0.5 + 0.707 T_B = 196$$

$$0.408 T_B + 0.707 T_B = 196$$

$$1.115 T_B = 196 \implies T_B = 175.8 \mathrm{ N}$$

$$T_A = 0.816 \times 175.8 = 143.4 \mathrm{ N}$$

**Check:** $143.4 \times 0.5 + 175.8 \times 0.707 = 71.7 + 124.3 = 196.0 \mathrm{ N}$. Confirmed.

## Common Pitfalls Extended

### Pitfall 6: Confusing Mass and Weight in Fluid Problems

When an object is submerged in a fluid, the apparent weight is
$W_{\mathrm{app}} = mg - \rho_{\mathrm{fluid}} V g$. Do not confuse the actual weight $mg$ with the
apparent weight. Also, the buoyant force depends on the _fluid density_ and the _submerged volume_,
not the object's density.

### Pitfall 7: Drawing Incorrect Normal Force Directions

The normal force is always perpendicular to the _surface of contact_, not necessarily vertical. On a
curved surface, the normal force direction changes along the surface. Always draw the normal force
perpendicular to the contact surface at the point of contact.

### Pitfall 8: Assuming Tension Is the Same Throughout a Rope with Mass

For a "light" (massless) rope, the tension is the same throughout. For a heavy rope, the tension
varies along its length due to the weight of the rope itself. At the top of a hanging heavy rope,
the tension equals the total weight; at the bottom, it is zero.

## Additional Practice Problems

16. A $3 \mathrm{ kg}$ block on a $25^\circ$ incline is connected by a string over a pulley to a
    $5 \mathrm{ kg}$ block hanging vertically. The coefficient of kinetic friction is $0.3$. Calculate
    the acceleration of the system and the tension in the string.

17. A helicopter of mass $3000 \mathrm{ kg}$ is rising at $2 \mathrm{ m/s}^2$. Calculate the upward
    force from the rotors. If the helicopter then moves at constant velocity, what upward force is
    needed?

18. A block of mass $m$ is placed on a frictionless cone with half-angle $\theta$. The cone rotates
    about its vertical axis with angular velocity $\omega$. Find the height above the apex at which
    the block remains stationary relative to the cone.

19. A $10 \mathrm{ kg}$ crate is pushed across a rough floor ($\mu_k = 0.4$) by a force of
    $80 \mathrm{ N}$ applied at $30^\circ$ below the horizontal. Calculate the normal force, the friction
    force, and the acceleration.

20. Two blocks ($m_1 = 3 \mathrm{ kg}$ on a table, $m_2 = 2 \mathrm{ kg}$ hanging) are connected by a
    string over a pulley. The table is frictionless. Calculate (a) the acceleration, (b) the
    tension, and (c) the speed after $m_2$ has fallen $0.5 \mathrm{ m}$ from rest.

## Practice Problems

<details>
<summary>Question 1: Inclined plane with friction</summary>

A block of mass $5 \mathrm{ kg}$ is placed on a $30^\circ$ incline. The coefficient of static friction is $0.4$ and the coefficient of kinetic friction is $0.3$. Determine (a) whether the block slides down, and (b) if it does, the acceleration down the incline.

</details>

<details>
<summary>Answer</summary>

Component of gravity along the incline: $mg\sin\theta = 5 \times 9.8 \times \sin(30^\circ) = 24.5 \mathrm{ N}$.

Maximum static friction: $f_s = \mu_s N = 0.4 \times 5 \times 9.8 \times \cos(30^\circ) = 0.4 \times 42.4 = 17.0 \mathrm{ N}$.

Since $24.5 \mathrm{ N} > 17.0 \mathrm{ N}$, the block slides.

Kinetic friction: $f_k = \mu_k N = 0.3 \times 42.4 = 12.7 \mathrm{ N}$.

Net force along incline: $F = 24.5 - 12.7 = 11.8 \mathrm{ N}$.

Acceleration: $a = F/m = 11.8/5 = 2.36 \mathrm{ m/s^2}$.

</details>

<details>
<summary>Question 2: Elevator apparent weight</summary>

A person of mass $70 \mathrm{ kg}$ stands on a scale in an elevator. What does the scale read (a) when the elevator accelerates upward at $2 \mathrm{ m/s^2}$, (b) when it moves at constant velocity, and (c) when it decelerates at $3 \mathrm{ m/s^2}$ while moving upward?

</details>

<details>
<summary>Answer</summary>

The scale reads the normal force $N$.

(a) Accelerating up: $N - mg = ma$, $N = m(g + a) = 70(9.8 + 2) = 826 \mathrm{ N}$. Scale reads $826 \mathrm{ N}$ (about $119\%$ of actual weight).

(b) Constant velocity: $a = 0$, $N = mg = 70 \times 9.8 = 686 \mathrm{ N}$.

(c) Decelerating upward (acceleration downward): $N = m(g - a) = 70(9.8 - 3) = 476 \mathrm{ N}$.

</details>

<details>
<summary>Question 3: Connected masses with friction</summary>

Two blocks, $m_1 = 4 \mathrm{ kg}$ and $m_2 = 6 \mathrm{ kg}$, are connected by a string over a frictionless pulley. $m_1$ rests on a horizontal table with $\mu_k = 0.2$, and $m_2$ hangs vertically. Find the acceleration and the tension in the string.

</details>

<details>
<summary>Answer</summary>

For $m_2$: $m_2 g - T = m_2 a$.
For $m_1$: $T - \mu_k m_1 g = m_1 a$.

Adding: $m_2 g - \mu_k m_1 g = (m_1 + m_2)a$.

$a = \frac{m_2 g - \mu_k m_1 g}{m_1 + m_2} = \frac{6 \times 9.8 - 0.2 \times 4 \times 9.8}{10} = \frac{58.8 - 7.84}{10} = \frac{50.96}{10} = 5.10 \mathrm{ m/s^2}$.

$T = m_1 a + \mu_k m_1 g = 4(5.10) + 0.2(4)(9.8) = 20.4 + 7.84 = 28.2 \mathrm{ N}$.

</details>

<details>
<summary>Question 4: Circular motion on a banked curve</summary>

A curve of radius $50 \mathrm{ m}$ is banked at $15^\circ$. At what speed can a car negotiate this curve without relying on friction? If the car travels at $20 \mathrm{ m/s}$, what minimum coefficient of friction is required?

</details>

<details>
<summary>Answer</summary>

Without friction: $v^2 = rg\tan\theta = 50 \times 9.8 \times \tan(15^\circ) = 50 \times 9.8 \times 0.268 = 131.3$. $v = 11.5 \mathrm{ m/s}$.

At $20 \mathrm{ m/s}$, friction must provide additional centripetal force. The horizontal component of normal force provides: $N\sin\theta = mv^2/r - f\cos\theta$. The vertical: $N\cos\theta + f\sin\theta = mg$.

Solving simultaneously: $v^2 = \frac{rg(\tan\theta + \mu)}{1 - \mu\tan\theta}$.

$400 = \frac{50 \times 9.8(0.268 + \mu)}{1 - 0.268\mu}$.

$400(1 - 0.268\mu) = 490(0.268 + \mu) = 131.3 + 490\mu$.

$400 - 107.2\mu = 131.3 + 490\mu$.

$268.7 = 597.2\mu$, so $\mu = 0.45$.

</details>

<details>
<summary>Question 5: Newton's third law pairs</summary>

A book sits at rest on a table. Identify all action-reaction pairs involving the book. Explain why the normal force on the book is not the reaction force to gravity.

</details>

<details>
<summary>Answer</summary>

Action-reaction pairs (Newton's third law):
1. Earth pulls book down (gravity) AND book pulls Earth up with equal magnitude.
2. Table pushes book up (normal force) AND book pushes table down with equal magnitude.

The normal force and gravity are NOT an action-reaction pair because they act on the SAME object (the book). Newton's third law pairs always act on DIFFERENT objects. The normal force on the book is a reaction to the book pressing on the table (pair 2), not to gravity (pair 1). The book is in equilibrium because these two forces (gravity and normal) balance, but they are not a third-law pair.

</details>
