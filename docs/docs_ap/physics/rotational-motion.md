---
title: Rotational Motion
date: 2026-04-14
tags:
  - Physics
  - AP
categories:
  - Physics
slug: rotational-motion
---

## Rotational Kinematics (CED Unit 7)

### Angular Quantities

| Linear Quantity  | Angular Quantity              | Relation        |
| ---------------- | ----------------------------- | --------------- |
| Displacement $x$ | Angle $\theta$                | $x = r\theta$   |
| Velocity $v$     | Angular velocity $\omega$     | $v = r\omega$   |
| Acceleration $a$ | Angular acceleration $\alpha$ | $a_t = r\alpha$ |

### Angular Velocity and Acceleration

$$
\omega = \frac{d\theta}{dt}, \qquad \alpha = \frac{d\omega}{dt}
$$

### Constant Angular Acceleration Equations

$$
\omega = \omega_0 + \alpha t
$$

$$
\theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2
$$

$$
\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)
$$

### Tangential vs Centripetal Acceleration

For circular motion, the total acceleration has two components:

$$
a_t = r\alpha \quad \text{(tangential, changes speed)}
$$

$$
a_c = r\omega^2 = \frac{v^2}{r} \quad \text{(centripetal, changes direction)}
$$

$$
a_{\text{total}} = \sqrt{a_t^2 + a_c^2}
$$

### The Analogy Between Linear and Rotational Kinematics

Every linear kinematic equation has a direct rotational analogue. Replace $x$ with $\theta$, $v$
with $\omega$, and $a$ with $\alpha$. This is not a coincidence: it reflects the fact that rotation
is a one-dimensional motion in the angular coordinate. The mathematics is identical.

:::info[Example]

A wheel starts from rest and accelerates at $2.0 \text{ rad/s}^2$ for $5.0 \text{ s}$. Find the
angular velocity, total angle rotated, and the tangential speed of a point 0.3 m from the center.

$$
\omega = 0 + (2.0)(5.0) = 10 \text{ rad/s}
$$

$$
\theta = 0 + 0 + \frac{1}{2}(2.0)(5.0)^2 = 25 \text{ rad}
$$

$$
v = r\omega = (0.3)(10) = 3.0 \text{ m/s}
$$

:::

## Moment of Inertia (CED Unit 7)

The moment of inertia is the rotational analog of mass. It measures an object's resistance to
angular acceleration:

$$
I = \sum m_i r_i^2
$$

For a continuous body:

$$
I = \int r^2\, dm
$$

### Why the Moment of Inertia Depends on the Axis

Mass is a scalar, but moment of inertia depends on how the mass is distributed _relative to the axis
of rotation_. A rod rotated about its center has $I = \frac{1}{12}ML^2$, but the same rod rotated
about one end has $I = \frac{1}{3}ML^2$ -- four times larger. The same physical object can have
different moments of inertia depending on the axis. This has no linear analogue: mass is mass,
regardless of the direction of motion.

### Common Moments of Inertia

| Object                          | Axis                         | Moment of Inertia  |
| ------------------------------- | ---------------------------- | ------------------ |
| Thin rod, length $L$, mass $M$  | Center, perpendicular to rod | $\frac{1}{12}ML^2$ |
| Thin rod, length $L$, mass $M$  | End, perpendicular to rod    | $\frac{1}{3}ML^2$  |
| Solid cylinder/disk, radius $R$ | Central axis                 | $\frac{1}{2}MR^2$  |
| Hollow cylinder, radius $R$     | Central axis                 | $MR^2$             |
| Solid sphere, radius $R$        | Diameter                     | $\frac{2}{5}MR^2$  |
| Hollow sphere, radius $R$       | Diameter                     | $\frac{2}{3}MR^2$  |
| Point mass $m$ at distance $r$  | --                           | $mr^2$             |

### Derivation: Moment of Inertia of a Solid Cylinder

Consider a solid cylinder of mass $M$, radius $R$, and length $L$, rotating about its central axis.
Divide the cylinder into thin cylindrical shells of radius $r$ and thickness $dr$.

$$
dm = \frac{M}{\pi R^2 L} \cdot 2\pi r L\, dr = \frac{2M}{R^2} r\, dr
$$

$$
I = \int_0^R r^2\, dm = \int_0^R r^2 \frac{2M}{R^2} r\, dr = \frac{2M}{R^2} \int_0^R r^3\, dr = \frac{2M}{R^2} \cdot \frac{R^4}{4} = \frac{1}{2}MR^2
$$

### Parallel Axis Theorem

$$
I = I_{\text{cm}} + Md^2
$$

where $d$ is the distance from the center of mass to the new axis.

### Proof of the Parallel Axis Theorem

Consider a body rotating about an axis parallel to an axis through the center of mass, at distance
$d$. Let $r_i$ be the distance from the CM axis to mass element $m_i$, and $R_i$ be the distance
from the new axis. Then $R_i^2 = r_i^2 + d^2 - 2r_i d\cos\phi_i$.

$$
I = \sum m_i R_i^2 = \sum m_i r_i^2 + \sum m_i d^2 - 2d \sum m_i r_i \cos\phi_i
$$

The last term is zero because the CM is at the origin: $\sum m_i r_i \cos\phi_i = 0$.

$$
I = I_{\text{cm}} + Md^2
$$

$\blacksquare$

:::info[Example]

Find the moment of inertia of a solid sphere of mass $M$ and radius $R$ about an axis tangent to its
surface.

$$
I = I_{\text{cm}} + Md^2 = \frac{2}{5}MR^2 + MR^2 = \frac{7}{5}MR^2
$$

:::

## Torque (CED Unit 7)

Torque is the rotational analog of force:

$$
\vec{\tau} = \vec{r} \times \vec{F}
$$

The magnitude is:

$$
\tau = rF\sin\theta = Fd
$$

where $d = r\sin\theta$ is the **moment arm** (perpendicular distance from the axis to the line of
action of the force).

### Sign Convention

- Counterclockwise (CCW) torque: positive
- Clockwise (CW) torque: negative

## Newton's Second Law for Rotation (CED Unit 7)

$$
\sum \tau = I\alpha
$$

This is the rotational analog of $\sum F = ma$.

:::info[Example]

A solid disk of mass $5.0 \text{ kg}$ and radius $0.3 \text{ m}$ is mounted on a frictionless axle.
A $20 \text{ N}$ force is applied tangentially at the rim. Find the angular acceleration.

$$
I = \frac{1}{2}MR^2 = \frac{1}{2}(5.0)(0.3)^2 = 0.225 \text{ kg} \cdot \text{m}^2
$$

$$
\tau = Fr = (20)(0.3) = 6.0 \text{ N} \cdot \text{m}
$$

$$
\alpha = \frac{\tau}{I} = \frac{6.0}{0.225} = 26.7 \text{ rad/s}^2
$$

:::

## Rotational Energy (CED Unit 7)

The kinetic energy of a rotating object:

$$
K_{\text{rot}} = \frac{1}{2}I\omega^2
$$

For an object that is both translating and rotating (like a rolling ball):

$$
K_{\text{total}} = \frac{1}{2}mv_{\text{cm}}^2 + \frac{1}{2}I_{\text{cm}}\omega^2
$$

### Rolling Without Slipping

When an object rolls without slipping: $v_{\text{cm}} = R\omega$.

### Conservation of Energy with Rotation

$$
mgh_i + \frac{1}{2}mv_i^2 + \frac{1}{2}I\omega_i^2 = mgh_f + \frac{1}{2}mv_f^2 + \frac{1}{2}I\omega_f^2
$$

### Why Hollow Objects Roll Slower Than Solid Ones

A hollow cylinder has $I = MR^2$, so its kinetic energy is split as
$K = \frac{1}{2}Mv^2 +
\frac{1}{2}(MR^2)(v/R)^2 = Mv^2$. Half the energy goes to translation and half
to rotation. A solid cylinder has $I = \frac{1}{2}MR^2$, so
$K = \frac{1}{2}Mv^2 + \frac{1}{4}Mv^2 =
\frac{3}{4}Mv^2$. More energy goes to translation, so the
solid cylinder moves faster.

:::info[Example]

A solid sphere of mass $M$ and radius $R$ rolls without slipping from rest down an incline of height
$h$ and angle $\theta$. Find its speed at the bottom.

Using conservation of energy (starting from rest, ending at the bottom):

$$
Mgh = \frac{1}{2}Mv^2 + \frac{1}{2}\!\left(\frac{2}{5}MR^2\right)\!\left(\frac{v}{R}\right)^2
$$

$$
Mgh = \frac{1}{2}Mv^2 + \frac{1}{5}Mv^2 = \frac{7}{10}Mv^2
$$

$$
v = \sqrt{\frac{10gh}{7}}
$$

Note: the answer is independent of both the mass and the radius. For a hollow sphere, the factor
would be $\frac{5}{6}$ instead of $\frac{7}{10}$, so the solid sphere is always faster.

:::

## Angular Momentum (CED Unit 7)

The angular momentum of a particle:

$$
\vec{L} = \vec{r} \times \vec{p} = \vec{r} \times m\vec{v}
$$

For a rigid body rotating about a fixed axis:

$$
L = I\omega
$$

### Conservation of Angular Momentum

If the net external torque on a system is zero:

$$
\vec{L}_{\text{initial}} = \vec{L}_{\text{final}} \implies I_1\omega_1 = I_2\omega_2
$$

### Rotational Impulse

$$
\int \tau\, dt = \Delta L = I\omega_f - I\omega_i
$$

:::info[Example]

A figure skater with moment of inertia $4.0 \text{ kg} \cdot \text{m}^2$ is spinning at
$3.0 \text{ rad/s}$. She pulls in her arms, reducing her moment of inertia to
$1.5 \text{ kg} \cdot \text{m}^2$. Find her new angular speed.

$$
I_1\omega_1 = I_2\omega_2
$$

$$
(4.0)(3.0) = (1.5)\omega_2 \implies \omega_2 = \frac{12.0}{1.5} = 8.0 \text{ rad/s}
$$

:::

### Why Angular Momentum Is a Vector

Angular momentum is a vector pointing along the axis of rotation, with direction given by the
right-hand rule. Conservation of angular momentum applies to each component separately. This is why
a spinning top precesses: gravity exerts a torque that changes the direction (but not the magnitude)
of the angular momentum vector.

## Torque and the Cross Product (AP Physics C)

The torque vector is:

$$
\vec{\tau} = \vec{r} \times \vec{F}
$$

In component form:

$$
\vec{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ r_x & r_y & r_z \\ F_x & F_y & F_z \end{vmatrix}
$$

The magnitude: $\tau = rF\sin\theta$, where $\theta$ is the angle from $\vec{r}$ to $\vec{F}$.

The direction is determined by the right-hand rule.

## Static Equilibrium

An object is in static equilibrium when:

1. $\sum \vec{F} = 0$ (translational equilibrium)
2. $\sum \vec{\tau} = 0$ (rotational equilibrium)

### Choosing the Pivot Point

The choice of pivot point is arbitrary when the system is in equilibrium. Choosing the pivot at an
unknown force eliminates that force from the torque equation.

:::info[Example]

A uniform beam of mass $20 \text{ kg}$ and length $4.0 \text{ m}$ is supported at its left end by a
hinge and at its right end by a cable at $30^\circ$ above horizontal. A $50 \text{ kg}$ mass hangs
$1.0 \text{ m}$ from the right end. Find the tension in the cable.

Take torques about the hinge (eliminates the hinge force):

**Torques:**

- Weight of beam at center: $\tau_1 = -(20)(9.8)(2.0)\sin 90^\circ = -392 \text{ N} \cdot \text{m}$
  (CW)
- Hanging mass at $3.0 \text{ m}$ from hinge:
  $\tau_2 = -(50)(9.8)(3.0) = -1470 \text{ N} \cdot \text{m}$ (CW)
- Tension $T$ at $4.0 \text{ m}$ from hinge: $\tau_3 = T(4.0)\sin 30^\circ = 2.0T$ (CCW)

Set $\sum \tau = 0$:

$$
2.0T - 392 - 1470 = 0 \implies T = \frac{1862}{2.0} = 931 \text{ N}
$$

:::

## Common Pitfalls

1. **Using the wrong moment of inertia.** Always check which axis the object rotates about. Use the
   parallel axis theorem when the axis does not pass through the center of mass.
2. **Confusing torque and force.** Torque depends on both the force and the moment arm (distance
   from the axis).
3. **Forgetting that angular momentum is a vector.** Direction matters and is determined by the
   right-hand rule.
4. **Incorrectly applying the rolling condition.** Rolling without slipping means $v = R\omega$, not
   $v = R\alpha$.
5. **Not accounting for rotational KE in energy problems.** Rolling objects have both translational
   and rotational kinetic energy.
6. **Sign errors with torque.** Be consistent with the sign convention (CCW positive, CW negative).
7. **Assuming angular momentum is conserved when external torques act.** Conservation requires zero
   net external torque.
8. **Confusing moment of inertia with mass.** Mass is a scalar; moment of inertia depends on the
   axis.
9. **Using the wrong radius in $v = R\omega$.** $R$ is the radius of the rolling object, not the
   radius of the incline or the path.

## Practice Questions

1. A disk of mass $8.0 \text{ kg}$ and radius $0.5 \text{ m}$ is mounted on a frictionless axle. A
   block of mass $2.0 \text{ kg}$ is attached to a string wrapped around the disk. Find the
   acceleration of the block.

2. A solid cylinder and a hollow cylinder of the same mass and radius are released from rest at the
   top of an incline. Which reaches the bottom first? Prove your answer.

3. A uniform rod of length $L$ and mass $M$ is pivoted at one end and held horizontally, then
   released. Find its angular speed as it passes through the vertical position.

4. A merry-go-round of radius $3.0 \text{ m}$ and moment of inertia
   $600 \text{ kg} \cdot \text{m}^2$ is rotating at $0.50 \text{ rad/s}$. A child of mass
   $30 \text{ kg}$ jumps on at the edge. Find the new angular speed.

5. A $4.0 \text{ m}$ uniform beam of mass $50 \text{ kg}$ is supported by two vertical cables, one
   at each end. A $200 \text{ kg}$ mass hangs $1.0 \text{ m}$ from the left end. Find the tension in
   each cable.

6. Calculate the moment of inertia of a uniform solid sphere about its diameter by integration.

7. A $0.50 \text{ kg}$ ball of radius $0.05 \text{ m}$ rolls without slipping down a $30^\circ$
   incline from a height of $2.0 \text{ m}$. Find the translational and rotational speeds at the
   bottom.

8. Derive the parallel axis theorem from the definition of moment of inertia.

9. A solid sphere rolls without slipping up a $20^\circ$ incline. If its initial speed is
   $5.0 \text{ m/s}$, how far up the incline does it travel before stopping and rolling back?

10. A flywheel of moment of inertia $50 \text{ kg} \cdot \text{m}^2$ rotating at $300 \text{ rpm}$
    is brought to rest by a constant frictional torque of $10 \text{ N} \cdot \text{m}$ in
    $785 \text{ s}$. Verify this using the rotational impulse equation, and calculate the angle
    through which the flywheel rotates while stopping.
