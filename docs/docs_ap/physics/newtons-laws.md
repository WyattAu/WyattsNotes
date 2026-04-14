---
title: Newton's Laws of Motion
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
\vec{F}_{\text{net}} = m\vec{a}
$$

In component form:

$$
\sum F_x = ma_x, \qquad \sum F_y = ma_y
$$

### The Kilogram, Newton, and Slug

- 1 Newton (N) = $1 \text{ kg} \cdot \text{m/s}^2$
- 1 slug = $14.59 \text{ kg}$ (used in the US customary system)

### Weight vs Mass

$$
\vec{W} = m\vec{g}
$$

- **Weight** is a force (measured in N) that depends on the local gravitational field.
- **Mass** is an intrinsic property (measured in kg) that does not change with location.

On Earth: $g \approx 9.8 \text{ m/s}^2$. On the Moon: $g \approx 1.62 \text{ m/s}^2$.

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
\vec{F}_{A \text{ on } B} = -\vec{F}_{B \text{ on } A}
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

### Applied Force ($\vec{F}_{\text{app}}$)

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

A $5.0 \text{ kg}$ block rests on a $30^\circ$ incline with $\mu_s = 0.4$ and $\mu_k = 0.3$. Does
the block slide?

**Forces along the incline:** $mg\sin\theta = 5.0 \times 9.8 \times \sin 30^\circ = 24.5 \text{ N}$
(down).

**Maximum static friction:**
$f_{s,\max} = \mu_s N = 0.4 \times 5.0 \times 9.8 \times \cos 30^\circ = 0.4 \times 42.4 = 17.0 \text{ N}$.

Since $mg\sin\theta = 24.5 \text{ N} \gt f_{s,\max} = 17.0 \text{ N}$, the block slides.

**Kinetic friction:** $f_k = 0.3 \times 42.4 = 12.7 \text{ N}$.

**Acceleration down the incline:**

$$
a = \frac{mg\sin\theta - f_k}{m} = \frac{24.5 - 12.7}{5.0} = \frac{11.8}{5.0} = 2.36 \text{ m/s}^2
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

An Atwood machine has $m_1 = 3.0 \text{ kg}$ and $m_2 = 5.0 \text{ kg}$. Find the acceleration and
tension.

$$
a = \frac{(5.0 - 3.0)(9.8)}{3.0 + 5.0} = \frac{2.0 \times 9.8}{8.0} = 2.45 \text{ m/s}^2
$$

$$
T = \frac{2(3.0)(5.0)(9.8)}{3.0 + 5.0} = \frac{294}{8.0} = 36.75 \text{ N}
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
\sum F_{\text{radial}} = \frac{mv^2}{r}
$$

### Banked Curves

On a banked curve of angle $\theta$ and radius $r$, the ideal speed (at which no friction is
required) is:

$$
v_{\text{ideal}} = \sqrt{rg\tan\theta}
$$

At this speed, the horizontal component of the normal force provides exactly the required
centripetal force. Below this speed, friction acts up the slope; above it, friction acts down the
slope.

:::info[Example]

A $1200 \text{ kg}$ car rounds a flat curve of radius 80 m at $15 \text{ m/s}$. What minimum
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

where $G = 6.674 \times 10^{-11} \text{ N} \cdot \text{m}^2/\text{kg}^2$.

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

1. A $10 \text{ kg}$ box is pushed across a floor with $\mu_k = 0.25$ by a horizontal force of
   $50 \text{ N}$. Find the acceleration of the box.

2. Two blocks of masses $4.0 \text{ kg}$ and $6.0 \text{ kg}$ are connected by a string over a
   frictionless pulley (Atwood machine). Find the acceleration and the tension.

3. A $60 \text{ kg}$ person stands on a scale in an elevator that accelerates upward at
   $2.0 \text{ m/s}^2$. What does the scale read?

4. A $2.0 \text{ kg}$ block on a $35^\circ$ incline has $\mu_s = 0.5$ and $\mu_k = 0.3$. Find the
   acceleration if the block is given an initial push up the incline.

5. A satellite orbits Earth at an altitude of $400 \text{ km}$. Find the orbital velocity and
   period. (Earth's mass = $5.97 \times 10^{24} \text{ kg}$, Earth's radius = $6371 \text{ km}$.)

6. A $1500 \text{ kg}$ car rounds a banked curve of radius 100 m at $20 \text{ m/s}$. The banking
   angle is $15^\circ$. Find the minimum coefficient of static friction.

7. Three blocks of masses $m_1$, $m_2$, and $m_3$ are connected by strings on a frictionless table,
   with $m_3$ hanging off the edge over a pulley. Derive the acceleration in terms of the masses.

8. A $5.0 \text{ kg}$ block is on a frictionless table connected to a $3.0 \text{ kg}$ block hanging
   over the edge. Find the acceleration of the system and the tension in the string.

9. A block of mass $m$ is placed on a wedge of mass $M$ with angle $\theta$. All surfaces are
   frictionless. Find the acceleration of the wedge relative to the ground.

10. A $2000 \text{ kg}$ car towing a $1000 \text{ kg}$ trailer accelerates at $1.5 \text{ m/s}^2$.
    If the tension in the tow bar is $1800 \text{ N}$, find the friction force on the car.
