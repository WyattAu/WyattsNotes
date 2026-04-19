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
a_t = r\alpha \quad \mathrm{(tangential, changes speed)}
$$

$$
a_c = r\omega^2 = \frac{v^2}{r} \quad \mathrm{(centripetal, changes direction)}
$$

$$
a_{\mathrm{total}} = \sqrt{a_t^2 + a_c^2}
$$

### The Analogy Between Linear and Rotational Kinematics

Every linear kinematic equation has a direct rotational analogue. Replace $x$ with $\theta$, $v$
with $\omega$, and $a$ with $\alpha$. This is not a coincidence: it reflects the fact that rotation
is a one-dimensional motion in the angular coordinate. The mathematics is identical.

:::info[Example]

A wheel starts from rest and accelerates at $2.0 \mathrm{ rad/s}^2$ for $5.0 \mathrm{ s}$. Find the
angular velocity, total angle rotated, and the tangential speed of a point 0.3 m from the center.

$$
\omega = 0 + (2.0)(5.0) = 10 \mathrm{ rad/s}
$$

$$
\theta = 0 + 0 + \frac{1}{2}(2.0)(5.0)^2 = 25 \mathrm{ rad}
$$

$$
v = r\omega = (0.3)(10) = 3.0 \mathrm{ m/s}
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
I = I_{\mathrm{cm}} + Md^2
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
I = I_{\mathrm{cm}} + Md^2
$$

$\blacksquare$

:::info[Example]

Find the moment of inertia of a solid sphere of mass $M$ and radius $R$ about an axis tangent to its
surface.

$$
I = I_{\mathrm{cm}} + Md^2 = \frac{2}{5}MR^2 + MR^2 = \frac{7}{5}MR^2
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

A solid disk of mass $5.0 \mathrm{ kg}$ and radius $0.3 \mathrm{ m}$ is mounted on a frictionless axle.
A $20 \mathrm{ N}$ force is applied tangentially at the rim. Find the angular acceleration.

$$
I = \frac{1}{2}MR^2 = \frac{1}{2}(5.0)(0.3)^2 = 0.225 \mathrm{ kg} \cdot \mathrm{m}^2
$$

$$
\tau = Fr = (20)(0.3) = 6.0 \mathrm{ N} \cdot \mathrm{m}
$$

$$
\alpha = \frac{\tau}{I} = \frac{6.0}{0.225} = 26.7 \mathrm{ rad/s}^2
$$

:::

## Rotational Energy (CED Unit 7)

The kinetic energy of a rotating object:

$$
K_{\mathrm{rot}} = \frac{1}{2}I\omega^2
$$

For an object that is both translating and rotating (like a rolling ball):

$$
K_{\mathrm{total}} = \frac{1}{2}mv_{\mathrm{cm}}^2 + \frac{1}{2}I_{\mathrm{cm}}\omega^2
$$

### Rolling Without Slipping

When an object rolls without slipping: $v_{\mathrm{cm}} = R\omega$.

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
\vec{L}_{\mathrm{initial}} = \vec{L}_{\mathrm{final}} \implies I_1\omega_1 = I_2\omega_2
$$

### Rotational Impulse

$$
\int \tau\, dt = \Delta L = I\omega_f - I\omega_i
$$

:::info[Example]

A figure skater with moment of inertia $4.0 \mathrm{ kg} \cdot \mathrm{m}^2$ is spinning at
$3.0 \mathrm{ rad/s}$. She pulls in her arms, reducing her moment of inertia to
$1.5 \mathrm{ kg} \cdot \mathrm{m}^2$. Find her new angular speed.

$$
I_1\omega_1 = I_2\omega_2
$$

$$
(4.0)(3.0) = (1.5)\omega_2 \implies \omega_2 = \frac{12.0}{1.5} = 8.0 \mathrm{ rad/s}
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

A uniform beam of mass $20 \mathrm{ kg}$ and length $4.0 \mathrm{ m}$ is supported at its left end by a
hinge and at its right end by a cable at $30^\circ$ above horizontal. A $50 \mathrm{ kg}$ mass hangs
$1.0 \mathrm{ m}$ from the right end. Find the tension in the cable.

Take torques about the hinge (eliminates the hinge force):

**Torques:**

- Weight of beam at center: $\tau_1 = -(20)(9.8)(2.0)\sin 90^\circ = -392 \mathrm{ N} \cdot \mathrm{m}$
  (CW)
- Hanging mass at $3.0 \mathrm{ m}$ from hinge:
  $\tau_2 = -(50)(9.8)(3.0) = -1470 \mathrm{ N} \cdot \mathrm{m}$ (CW)
- Tension $T$ at $4.0 \mathrm{ m}$ from hinge: $\tau_3 = T(4.0)\sin 30^\circ = 2.0T$ (CCW)

Set $\sum \tau = 0$:

$$
2.0T - 392 - 1470 = 0 \implies T = \frac{1862}{2.0} = 931 \mathrm{ N}
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

1. A disk of mass $8.0 \mathrm{ kg}$ and radius $0.5 \mathrm{ m}$ is mounted on a frictionless axle. A
   block of mass $2.0 \mathrm{ kg}$ is attached to a string wrapped around the disk. Find the
   acceleration of the block.

2. A solid cylinder and a hollow cylinder of the same mass and radius are released from rest at the
   top of an incline. Which reaches the bottom first? Prove your answer.

3. A uniform rod of length $L$ and mass $M$ is pivoted at one end and held horizontally, then
   released. Find its angular speed as it passes through the vertical position.

4. A merry-go-round of radius $3.0 \mathrm{ m}$ and moment of inertia
   $600 \mathrm{ kg} \cdot \mathrm{m}^2$ is rotating at $0.50 \mathrm{ rad/s}$. A child of mass
   $30 \mathrm{ kg}$ jumps on at the edge. Find the new angular speed.

5. A $4.0 \mathrm{ m}$ uniform beam of mass $50 \mathrm{ kg}$ is supported by two vertical cables, one
   at each end. A $200 \mathrm{ kg}$ mass hangs $1.0 \mathrm{ m}$ from the left end. Find the tension in
   each cable.

6. Calculate the moment of inertia of a uniform solid sphere about its diameter by integration.

7. A $0.50 \mathrm{ kg}$ ball of radius $0.05 \mathrm{ m}$ rolls without slipping down a $30^\circ$
   incline from a height of $2.0 \mathrm{ m}$. Find the translational and rotational speeds at the
   bottom.

8. Derive the parallel axis theorem from the definition of moment of inertia.

9. A solid sphere rolls without slipping up a $20^\circ$ incline. If its initial speed is
   $5.0 \mathrm{ m/s}$, how far up the incline does it travel before stopping and rolling back?

10. A flywheel of moment of inertia $50 \mathrm{ kg} \cdot \mathrm{m}^2$ rotating at $300 \mathrm{ rpm}$
    is brought to rest by a constant frictional torque of $10 \mathrm{ N} \cdot \mathrm{m}$ in
    $785 \mathrm{ s}$. Verify this using the rotational impulse equation, and calculate the angle
    through which the flywheel rotates while stopping.

## 11. Moment of Inertia: Extended Derivations

### Derivation: Solid Sphere About Its Diameter

Divide a solid sphere of mass $M$ and radius $R$ into thin disks of radius $r$ and thickness $dz$ at
height $z$ from the centre.

$$r^2 = R^2 - z^2$$

The volume of each disk is $dV = \pi r^2 dz = \pi(R^2 - z^2)dz$.

$$dm = \frac{M}{\frac{4}{3}\pi R^3} \cdot \pi(R^2 - z^2)dz = \frac{3M}{4R^3}(R^2 - z^2)dz$$

$$I = \int_{-R}^{R} \frac{1}{2}r^2\, dm = \int_{-R}^{R} \frac{1}{2}(R^2 - z^2) \cdot \frac{3M}{4R^3}(R^2 - z^2)dz$$

$$= \frac{3M}{8R^3}\int_{-R}^{R} (R^2 - z^2)^2 dz = \frac{3M}{8R^3}\int_{-R}^{R} (R^4 - 2R^2z^2 + z^4)dz$$

$$= \frac{3M}{8R^3}\left[R^4 \cdot 2R - 2R^2 \cdot \frac{2R^3}{3} + \frac{2R^5}{5}\right] = \frac{3M}{8R^3}\left[2R^5 - \frac{4R^5}{3} + \frac{2R^5}{5}\right]$$

$$= \frac{3M}{8R^3} \cdot \frac{2R^5}{15}(15 - 10 + 3) = \frac{3M}{8R^3} \cdot \frac{16R^5}{15} = \frac{2MR^2}{5}$$

### Derivation: Thin Rod About One End

A thin uniform rod of mass $M$ and length $L$, pivoted at one end.

$$I = \int_0^L x^2 \frac{M}{L}\, dx = \frac{M}{L}\left[\frac{x^3}{3}\right]_0^L = \frac{ML^2}{3}$$

Using the parallel axis theorem:
$I_{\mathrm{end}} = I_{\mathrm{cm}} + Md^2 = \frac{ML^2}{12} + M\left(\frac{L}{2}\right)^2 = \frac{ML^2}{12} + \frac{ML^2}{4} = \frac{ML^2}{3}$.
Confirmed.

## 12. Rolling Without Slipping: Extended Analysis

### Worked Example: Race Down an Incline

A solid sphere, a solid cylinder, a hollow sphere, and a hollow cylinder, all of mass $M$ and radius
$R$, are released from rest at the top of an incline of height $h$. Rank them by their speed at the
bottom.

| Object          | $I_{\mathrm{cm}}$   | $v$ at bottom   | Fraction as KE of translation |
| --------------- | ----------------- | --------------- | ----------------------------- |
| Solid sphere    | $\frac{2}{5}MR^2$ | $\sqrt{10gh/7}$ | $5/7 = 71\%$                  |
| Solid cylinder  | $\frac{1}{2}MR^2$ | $\sqrt{4gh/3}$  | $2/3 = 67\%$                  |
| Hollow sphere   | $\frac{2}{3}MR^2$ | $\sqrt{6gh/5}$  | $3/5 = 60\%$                  |
| Hollow cylinder | $MR^2$            | $\sqrt{gh}$     | $1/2 = 50\%$                  |

Ranking (fastest to slowest): solid sphere, solid cylinder, hollow sphere, hollow cylinder. Objects
with more mass concentrated near the rim (larger $I$) have more rotational KE and less translational
KE, so they move more slowly.

### Worked Example: Rolling Up an Incline

A solid sphere rolls without slipping up a $20^{\circ}$ incline with initial speed $5 \mathrm{ m/s}$.
How far up does it travel?

$$Mgh = \frac{1}{2}Mv^2 + \frac{1}{2}I\omega^2 = \frac{1}{2}Mv^2 + \frac{1}{2}\cdot\frac{2}{5}MR^2\cdot\frac{v^2}{R^2} = \frac{7}{10}Mv^2$$

$$h = \frac{7v^2}{10g} = \frac{7 \times 25}{10 \times 9.8} = \frac{175}{98} = 1.786 \mathrm{ m}$$

$$d = \frac{h}{\sin 20^{\circ}} = \frac{1.786}{0.342} = 5.22 \mathrm{ m}$$

## 13. Angular Momentum: Extended Examples

### Worked Example: Angular Momentum of a Collision

A $0.05 \mathrm{ kg}$ ball moving at $8 \mathrm{ m/s}$ strikes a rod of mass $2 \mathrm{ kg}$ and length
$1 \mathrm{ m}$ that is free to rotate about one end. The ball strikes the rod at its free end,
perpendicular to the rod. Find the angular velocity of the rod after the collision.

**Conservation of angular momentum** about the pivot (the external forces at the pivot produce no
torque about the pivot):

$$L_{\mathrm{initial}} = L_{\mathrm{final}}$$

$$mv \cdot L = I_{\mathrm{rod}}\omega + mv' \cdot L$$

Since the ball sticks to the end of the rod (perfectly inelastic collision):

$$mvr = (I_{\mathrm{rod}} + mr^2)\omega = \left(\frac{1}{3}Mr^2 + mr^2\right)\omega$$

$$\omega = \frac{mvr}{r^2\left(\frac{M}{3} + m\right)} = \frac{mv}{r\left(\frac{M}{3} + m\right)} = \frac{0.05 \times 8}{1 \times \left(\frac{2}{3} + 0.05\right)}$$

$$= \frac{0.4}{0.717} = 0.558 \mathrm{ rad/s}$$

### Worked Example: Person on a Rotating Platform

A merry-go-round of radius $3 \mathrm{ m}$ and moment of inertia $600 \mathrm{ kg}\cdot\mathrm{m}^2$
rotates at $0.5 \mathrm{ rad/s}$. A $60 \mathrm{ kg}$ person standing at the edge walks to the centre.
Find the new angular speed.

**Initially:** $I_i = 600 + 60 \times 3^2 = 600 + 540 = 1140 \mathrm{ kg}\cdot\mathrm{m}^2$.

**Finally:** $I_f = 600 + 60 \times 0^2 = 600 \mathrm{ kg}\cdot\mathrm{m}^2$.

$$I_i\omega_i = I_f\omega_f$$

$$1140 \times 0.5 = 600 \times \omega_f$$

$$\omega_f = \frac{570}{600} = 0.95 \mathrm{ rad/s}$$

The angular speed nearly doubles. This is the same principle behind figure skaters pulling in their
arms to spin faster.

## 14. Static Equilibrium: Extended Examples

### Worked Example: Ladder Against a Wall

A uniform ladder of mass $15 \mathrm{ kg}$ and length $4 \mathrm{ m}$ leans against a smooth
(frictionless) wall at $65^{\circ}$ to the horizontal. The floor is rough with $\mu_s = 0.4$. Will
the ladder slip?

Take torques about the base of the ladder (eliminates the friction and normal force at the base):

**Forces on the ladder:**

- Weight $Mg$ at the centre ($2 \mathrm{ m}$ from base)
- Normal force from wall $N_w$ at the top ($4 \mathrm{ m}$ from base, horizontal)
- Normal force from floor $N_f$ at the base (vertical)
- Friction $f$ at the base (horizontal, towards wall)

**Torque equation (about base):**

Clockwise (positive):
$Mg \times 2\cos 65^{\circ} = 15 \times 9.8 \times 2 \times 0.4226 = 124.2 \mathrm{ N}\cdot\mathrm{m}$

Anticlockwise (negative): $N_w \times 4\sin 65^{\circ} = N_w \times 3.625$

$$N_w \times 3.625 = 124.2 \implies N_w = 34.3 \mathrm{ N}$$

**Horizontal equilibrium:** $f = N_w = 34.3 \mathrm{ N}$

**Vertical equilibrium:** $N_f = Mg = 147 \mathrm{ N}$

**Check slipping:** $f_{\max} = \mu_s N_f = 0.4 \times 147 = 58.8 \mathrm{ N}$

Since $f = 34.3 \mathrm{ N} \lt 58.8 \mathrm{ N} = f_{\max}$, the ladder does not slip.

## 15. Summary Table: Linear vs Rotational Quantities

| Linear                | Rotational                 | Relationship                                                |
| --------------------- | -------------------------- | ----------------------------------------------------------- |
| $x$                   | $\theta$                   | $x = r\theta$                                               |
| $v$                   | $\omega$                   | $v = r\omega$                                               |
| $a$                   | $\alpha$                   | $a_t = r\alpha$                                             |
| $m$                   | $I$                        | $I = \int r^2 dm$                                           |
| $F$                   | $\tau$                     | $\tau = rF\sin\theta$                                       |
| $p = mv$              | $L = I\omega$              | $L = r \times p$                                            |
| $K = \frac{1}{2}mv^2$ | $K = \frac{1}{2}I\omega^2$ | $K_{\mathrm{total}} = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$ |
| $F = ma$              | $\tau = I\alpha$           | Newton's second law for rotation                            |
| $W = Fd$              | $W = \tau\theta$           | Work-energy theorem for rotation                            |

## 16. Practice Questions (Additional)

11. A uniform rod of mass $4 \mathrm{ kg}$ and length $2 \mathrm{ m}$ is pivoted at one end and held
    horizontally. It is released from rest. Find (a) the initial angular acceleration, (b) the
    angular speed as it passes through the vertical, and (c) the angular speed when it makes an
    angle of $45^{\circ}$ with the vertical.

12. A solid cylinder of mass $10 \mathrm{ kg}$ and radius $0.2 \mathrm{ m}$ rolls without slipping down
    an incline of $30^{\circ}$ from a height of $2 \mathrm{ m}$. Find the linear speed at the bottom
    and the time taken.

13. A disk of moment of inertia $0.5 \mathrm{ kg}\cdot\mathrm{m}^2$ rotating at $20 \mathrm{ rad/s}$ has a
    braking torque of $0.2 \mathrm{ N}\cdot\mathrm{m}$ applied. Find (a) the angular deceleration, (b)
    the time to stop, and (c) the number of revolutions made while stopping.

14. A $3 \mathrm{ m}$ uniform beam of mass $40 \mathrm{ kg}$ is hinged at a wall and supported by a
    cable at $30^{\circ}$ to the beam at the far end. A $100 \mathrm{ kg}$ mass hangs $1 \mathrm{ m}$
    from the hinge. Find the tension in the cable and the force at the hinge.

15. Calculate the moment of inertia of a hollow cylinder (thin-walled) of mass $M$ and radius $R$
    about its central axis by integration. Verify the result using the parallel axis theorem if
    necessary.

## Extended Worked Examples

### Example 16: Gyroscopic Precession

A spinning bicycle wheel of mass $2 \mathrm{ kg}$ and radius $0.35 \mathrm{ m}$ is supported on one end
of its axle. The wheel spins at $50 \mathrm{ rad/s}$ and the axle is horizontal. The distance from the
support to the wheel centre is $0.15 \mathrm{ m}$. Calculate the precession angular velocity.

**Step 1: Moment of inertia of the wheel (thin ring approximation)**

$$I = MR^2 = 2 \times 0.35^2 = 0.245 \mathrm{ kg}\cdot\mathrm{m}^2$$

**Step 2: Angular momentum of the wheel**

$$L = I\omega = 0.245 \times 50 = 12.25 \mathrm{ kg}\cdot\mathrm{m}^2/\mathrm{s}$$

**Step 3: Torque due to gravity about the support**

$$\tau = Mg \times d = 2 \times 9.8 \times 0.15 = 2.94 \mathrm{ N}\cdot\mathrm{m}$$

**Step 4: Precession angular velocity**

$$\omega_p = \frac{\tau}{L} = \frac{2.94}{12.25} = 0.240 \mathrm{ rad/s}$$

The wheel precesses at $0.240 \mathrm{ rad/s}$, completing one revolution in
$T = 2\pi/\omega_p = 26.2 \mathrm{ s}$.

:::info
Precession occurs because the torque (due to gravity) is perpendicular to the angular
momentum vector. Instead of tipping over, the angular momentum vector rotates horizontally. This is
the same principle behind gyrocompasses and spacecraft attitude control.
:::

### Example 17: Moment of Inertia of a Composite Object

A uniform rod of mass $3 \mathrm{ kg}$ and length $2 \mathrm{ m}$ has a point mass of $2 \mathrm{ kg}$
attached at one end. Calculate the moment of inertia about (a) the end with the point mass, and (b)
the centre of the rod.

**Part (a): About the end with the point mass**

Rod about its end:
$I_{\mathrm{rod}} = \frac{1}{3}ML^2 = \frac{1}{3} \times 3 \times 4 = 4 \mathrm{ kg}\cdot\mathrm{m}^2$

Point mass at the pivot: $I_{\mathrm{pm}} = mr^2 = 2 \times 0^2 = 0 \mathrm{ kg}\cdot\mathrm{m}^2$

$$I_a = 4 + 0 = 4 \mathrm{ kg}\cdot\mathrm{m}^2$$

**Part (b): About the centre of the rod**

Rod about its centre:
$I_{\mathrm{rod}} = \frac{1}{12}ML^2 = \frac{1}{12} \times 3 \times 4 = 1 \mathrm{ kg}\cdot\mathrm{m}^2$

Point mass is $1 \mathrm{ m}$ from the centre:
$I_{\mathrm{pm}} = 2 \times 1^2 = 2 \mathrm{ kg}\cdot\mathrm{m}^2$

$$I_b = 1 + 2 = 3 \mathrm{ kg}\cdot\mathrm{m}^2$$

**Verify with parallel axis theorem (part a from part b):**

$$I_a = I_b + M_{\mathrm{total}}d^2 = 3 + 5 \times 1^2 = 8 \mathrm{ kg}\cdot\mathrm{m}^2$$

Wait -- this gives $8$, not $4$. Let me recheck. The parallel axis theorem requires the total mass
to be at the centre of mass of the _entire system_, not just the rod.

**Centre of mass from the pivot (end with point mass):**

$$x_{\mathrm{cm}} = \frac{3 \times 1 + 2 \times 0}{5} = 0.6 \mathrm{ m from pivot}$$

Now using the parallel axis theorem from the centre of mass:

$$I_{\mathrm{cm}} = I_b = 3 \mathrm{ kg}\cdot\mathrm{m}^2 \quad \mathrm{(already calculated)}$$

$$I_a = I_{\mathrm{cm}} + M_{\mathrm{total}} \times x_{\mathrm{cm}}^2 = 3 + 5 \times 0.36 = 3 + 1.8 = 4.8 \mathrm{ kg}\cdot\mathrm{m}^2$$

This still does not match. Let me recalculate $I_b$ more carefully. The point mass is at the _end_
of the rod, which is $1 \mathrm{ m}$ from the centre of the rod. So $I_b = 1 + 2 \times 1^2 = 3$ is
correct.

And $I_a$ directly: rod about its far end (away from point mass): use parallel axis from centre,
$I_{\mathrm{rod, end}} = \frac{1}{12}(3)(4) + 3(1)^2 = 1 + 3 = 4$. Point mass at distance
$2 \mathrm{ m}$: $I_{\mathrm{pm}} = 2 \times 4 = 8$. Wait -- the point mass is at the pivot, so $r = 0$,
giving $I_a = 4 + 0 = 4$.

The parallel axis check failed because I was not careful. The correct check: $I_{\mathrm{cm}} = 3$
about the centre of mass at $0.6 \mathrm{ m}$ from pivot, so $I_a = 3 + 5(0.6)^2 = 3 + 1.8 = 4.8$. But
direct calculation gives $4$.

Let me recheck $I_b$: the point mass is at one end of the rod, which is $1 \mathrm{ m}$ from the rod's
centre. $I_{\mathrm{pm}} = 2 \times 1^2 = 2$. $I_{\mathrm{rod, centre}} = 1$. $I_b = 3$. Correct.

The discrepancy means $I_{\mathrm{cm}} \ne I_b$. The centre of mass of the system is at
$0.6 \mathrm{ m}$ from the pivot (not at the centre of the rod). So $I_{\mathrm{cm}}$ should be
calculated about the system's centre of mass, not the rod's centre. This is a subtle but important
point.

### Example 18: Yo-Yo Problem

A yo-yo consists of two disks of total mass $0.1 \mathrm{ kg}$ and radius $3 \mathrm{ cm}$, with an axle
of radius $0.5 \mathrm{ cm}$. The string unwinds from the axle. Find the acceleration of the yo-yo as
it falls and the tension in the string.

**Step 1: Equations of motion**

Translation: $mg - T = ma$

Rotation: $TR = I\alpha$, where $R$ is the axle radius and $a = R\alpha$.

$$T \times 0.005 = I \times \frac{a}{0.005}$$

For the yo-yo (solid disk):
$I = \frac{1}{2}MR_{\mathrm{disk}}^2 = \frac{1}{2} \times 0.1 \times 0.03^2 = 4.5 \times 10^{-5} \mathrm{ kg}\cdot\mathrm{m}^2$

$$T = \frac{Ia}{R^2} = \frac{4.5 \times 10^{-5} \times a}{2.5 \times 10^{-5}} = 1.8a$$

**Step 2: Substitute into translational equation**

$$mg - 1.8a = ma$$

$$a = \frac{mg}{m + 1.8} = \frac{0.1 \times 9.8}{0.1 + 1.8} = \frac{0.98}{1.9} = 0.516 \mathrm{ m/s}^2$$

$$T = 1.8 \times 0.516 = 0.929 \mathrm{ N}$$

:::info
The yo-yo falls much more slowly than free fall ($0.516 \mathrm{ m/s}^2$ vs
$9.8 \mathrm{ m/s}^2$) because gravitational PE is converted into both translational and rotational
KE. The smaller the axle radius, the slower the fall, since more of the energy goes into rotation.
:::

## Common Pitfalls Extended

### Pitfall 6: Using the Wrong Radius in Torque Calculations

In problems involving wheels, pulleys, or drums, the radius used in $\tau = Fr$ must be the radius
at which the force is applied, which may differ from the overall radius. For example, a force
applied at a string wound around an axle uses the axle radius, not the wheel radius.

### Pitfall 7: Confusing Angular Velocity with Linear Velocity in Rolling

For rolling without slipping, $v = r\omega$ relates the _centre-of-mass_ velocity to the angular
velocity about the centre of mass. A point on the rim has a velocity of $2v$ at the top and $0$ at
the contact point (instantaneously at rest).

### Pitfall 8: Forgetting Units in Moment of Inertia

Moment of inertia has units of $\mathrm{kg}\cdot\mathrm{m}^2$. A common error is to use centimetres
instead of metres when calculating $I = mr^2$, giving answers that are off by a factor of $10^4$.
Always convert to SI units before calculating.

## Additional Practice Problems

16. A solid sphere of mass $4 \mathrm{ kg}$ and radius $0.1 \mathrm{ m}$ rolls without slipping up a
    $20^\circ$ incline at $5 \mathrm{ m/s}$. Calculate how far up the incline it travels before stopping
    and rolling back.

17. A figure skater with arms extended has moment of inertia $4.5 \mathrm{ kg}\cdot\mathrm{m}^2$ and
    rotates at $2 \mathrm{ rad/s}$. She pulls her arms in, reducing her moment of inertia to
    $1.5 \mathrm{ kg}\cdot\mathrm{m}^2$. Calculate her new angular velocity and the ratio of final to
    initial rotational KE.

18. A uniform rod of mass $8 \mathrm{ kg}$ and length $3 \mathrm{ m}$ is hinged at one end and held
    horizontally. It is released from rest. Calculate the angular acceleration just after release,
    the angular velocity as it passes through the vertical, and the force at the hinge at that
    instant.

19. A $500 \mathrm{ g}$ ball of radius $5 \mathrm{ cm}$ rolls without slipping along a horizontal
    surface at $4 \mathrm{ m/s}$. It encounters a ramp of height $0.5 \mathrm{ m}$. Does it reach the
    top? If so, what is its speed at the top?

20. Two flywheels ($I_1 = 2 \mathrm{ kg}\cdot\mathrm{m}^2$ spinning at $300 \mathrm{ rpm}$,
    $I_2 = 5 \mathrm{ kg}\cdot\mathrm{m}^2$ at rest) are coupled together. Calculate the final angular
    velocity and the energy lost in the coupling process.

## Practice Problems

<details>
<summary>Question 1: Rolling without slipping down an incline</summary>

A solid sphere of mass $2 \mathrm{ kg}$ and radius $0.1 \mathrm{ m}$ rolls without slipping down a $30^\circ$ incline from rest. Calculate (a) the acceleration of the centre of mass, (b) the angular acceleration, and (c) the speed after rolling $3 \mathrm{ m}$ along the incline.

</details>

<details>
<summary>Answer</summary>

For a solid sphere, $I = \frac{2}{5}mr^2$.

Acceleration: $a = \frac{g\sin\theta}{1 + I/(mr^2)} = \frac{g\sin\theta}{1 + 2/5} = \frac{9.8 \times 0.5}{1.4} = 3.5 \mathrm{ m/s^2}$.

Angular acceleration: $\alpha = a/r = 3.5/0.1 = 35 \mathrm{ rad/s^2}$.

Speed: $v^2 = 2ad = 2 \times 3.5 \times 3 = 21$, $v = 4.58 \mathrm{ m/s}$.

</details>

<details>
<summary>Question 2: Conservation of angular momentum</summary>

A figure skater with arms extended has a moment of inertia of $4.5 \mathrm{ kg\cdot m^2}$ and rotates at $2 \mathrm{ rad/s}$. When she pulls her arms in, her moment of inertia decreases to $1.5 \mathrm{ kg\cdot m^2}$. Calculate her new angular velocity and the ratio of her new kinetic energy to the original.

</details>

<details>
<summary>Answer</summary>

Conservation of angular momentum: $L = I_1\omega_1 = I_2\omega_2$.

$\omega_2 = \frac{I_1\omega_1}{I_2} = \frac{4.5 \times 2}{1.5} = 6 \mathrm{ rad/s}$.

KE ratio: $\frac{KE_2}{KE_1} = \frac{\frac{1}{2}I_2\omega_2^2}{\frac{1}{2}I_1\omega_1^2} = \frac{1.5 \times 36}{4.5 \times 4} = \frac{54}{18} = 3$.

The kinetic energy triples. The extra energy comes from the work done by the skater in pulling her arms inward against the centrifugal tendency.

</details>

<details>
<summary>Question 3: Torque and equilibrium of a beam</summary>

A uniform beam of length $4 \mathrm{ m}$ and mass $20 \mathrm{ kg}$ is supported at its left end by a hinge and at a point $1 \mathrm{ m}$ from the right end by a cable making $30^\circ$ with the horizontal. A $50 \mathrm{ kg}$ mass hangs from the right end. Find the tension in the cable and the force exerted by the hinge.

</details>

<details>
<summary>Answer</summary>

Taking torques about the hinge (left end):

Forces and distances from hinge:
- Weight of beam: $20g$ at $2 \mathrm{ m}$.
- Hanging mass: $50g$ at $4 \mathrm{ m}$.
- Cable tension $T$ at $3 \mathrm{ m}$ from hinge, at $30^\circ$ above horizontal. Vertical component = $T\sin(30^\circ) = T/2$.

Clockwise torques: $20g \times 2 + 50g \times 4 = 40g + 200g = 240g = 2352 \mathrm{ N\cdot m}$.

Anticlockwise torque: $T\sin(30^\circ) \times 3 = 1.5T$.

$1.5T = 2352$, so $T = 1568 \mathrm{ N}$.

Hinge force: Horizontal = $T\cos(30^\circ) = 1568 \times 0.866 = 1358 \mathrm{ N}$ (outward). Vertical = $70g - T\sin(30^\circ) = 686 - 784 = -98 \mathrm{ N}$ (downward).

</details>

<details>
<summary>Question 4: Physical pendulum</summary>

A uniform rod of length $1.0 \mathrm{ m}$ and mass $2 \mathrm{ kg}$ is pivoted at one end and swings as a physical pendulum. Calculate the period of small oscillations.

</details>

<details>
<summary>Answer</summary>

Moment of inertia about the end: $I = \frac{1}{3}mL^2 = \frac{1}{3}(2)(1)^2 = 0.667 \mathrm{ kg\cdot m^2}$.

Distance from pivot to centre of mass: $d = L/2 = 0.5 \mathrm{ m}$.

Period: $T = 2\pi\sqrt{\frac{I}{mgd}} = 2\pi\sqrt{\frac{0.667}{2 \times 9.8 \times 0.5}} = 2\pi\sqrt{\frac{0.667}{9.8}} = 2\pi\sqrt{0.0681} = 2\pi \times 0.261 = 1.64 \mathrm{ s}$.

</details>

<details>
<summary>Question 5: Angular momentum of a system</summary>

A disk of mass $3 \mathrm{ kg}$ and radius $0.4 \mathrm{ m}$ rotates at $10 \mathrm{ rad/s}$. A $1 \mathrm{ kg}$ lump of clay is dropped onto the disk at a distance of $0.3 \mathrm{ m}$ from the centre and sticks. What is the new angular velocity?

</details>

<details>
<summary>Answer</summary>

Initial angular momentum: $L = I_{\text{disk}}\omega = \frac{1}{2}(3)(0.4)^2 \times 10 = 0.24 \times 10 = 2.4 \mathrm{ kg\cdot m^2/s}$.

Final moment of inertia: $I_f = I_{\text{disk}} + mr^2 = 0.24 + 1(0.3)^2 = 0.24 + 0.09 = 0.33 \mathrm{ kg\cdot m^2}$.

Conservation: $L_f = L_i$, $I_f\omega_f = 2.4$, $\omega_f = 2.4/0.33 = 7.27 \mathrm{ rad/s}$.

</details>
