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
frame attached to an accelerating car is non-inertial.

### Mass and Inertia

**Mass** is a measure of an object's resistance to changes in its motion (inertia). It is an
intrinsic property of an object, independent of location. The SI unit is the kilogram (kg).

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

The negative sign indicates that work must be done against gravity to move masses apart.

### Orbital Mechanics

For a circular orbit of radius $r$ around mass $M$:

$$
\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v = \sqrt{\frac{GM}{r}}
$$

$$
T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}
$$

These are Kepler's Third Law: $T^2 \propto r^3$.

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
