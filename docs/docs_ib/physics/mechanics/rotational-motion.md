---
id: rotational-motion
title: Rotational Motion
description: IB Physics — circular motion, centripetal acceleration, torque, and angular momentum.
slug: rotational-motion
---

## Circular Motion Fundamentals

### Angular Quantities

| Quantity             | Symbol   | SI Unit   | Relation to Linear |
| -------------------- | -------- | --------- | ------------------ |
| Angular displacement | $\theta$ | rad       | $s = r\theta$      |
| Angular velocity     | $\omega$ | rad/s     | $v = r\omega$      |
| Angular acceleration | $\alpha$ | rad/s$^2$ | $a_t = r\alpha$    |

### Angular Velocity

$$
\omega = \frac{\Delta\theta}{\Delta t}
$$

For uniform circular motion, $\omega$ is constant.

### Period and Frequency

$$
T = \frac{2\pi}{\omega}, \quad f = \frac{1}{T} = \frac{\omega}{2\pi}
$$

where $T$ is the period (time for one revolution) and $f$ is the frequency (revolutions per second).

### Relation to Linear Speed

$$
v = r\omega = \frac{2\pi r}{T} = 2\pi rf
$$

:::info[Example]

A CD rotates at $200\mathrm{ rpm}$. Find the angular velocity in rad/s and the linear speed of a point
$5\mathrm{ cm}$ from the centre.

$$
\omega = 200 \times \frac{2\pi}{60} = \frac{400\pi}{60} = 20.9\mathrm{ rad/s}
$$

$$
v = r\omega = 0.05 \times 20.9 = 1.05\mathrm{ m/s}
$$

:::

---

## Centripetal Acceleration

An object in uniform circular motion has a constantly changing velocity (direction changes), so it
is always accelerating toward the centre of the circle.

### Magnitude

$$
a_c = \frac{v^2}{r} = \omega^2 r = \frac{4\pi^2 r}{T^2}
$$

### Direction

Always directed toward the centre of the circular path (radially inward).

### Key Points

- Centripetal acceleration changes the **direction** of velocity, not its magnitude.
- If the centripetal force is removed, the object moves in a straight line (tangent to the circle)
  by Newton's first law.
- The word "centripetal" means "centre-seeking."

:::warning[Exam Tip]

Centripetal force is NOT a new force — it is the NET force toward the centre provided by existing
forces (gravity, tension, friction, normal force, etc.). Never include "centripetal force" as a
separate force on a free-body diagram.

:::

---

## Centripetal Force

### Magnitude

$$
F_c = ma_c = \frac{mv^2}{r} = m\omega^2 r
$$

### Direction

Always directed toward the centre of the circle.

### Common Examples

| Situation                              | Centripetal Force Provided By             |
| -------------------------------------- | ----------------------------------------- |
| Car turning on a flat road             | Friction between tyres and road           |
| Car on a banked curve                  | Horizontal component of normal force      |
| Satellite in orbit                     | Gravitational force                       |
| Object on a string (horizontal circle) | Tension in the string                     |
| Conical pendulum                       | Horizontal component of tension           |
| Motorcyclist in vertical circle        | Combination of weight and normal reaction |

---

## Horizontal Circular Motion

### Object on a String

For an object of mass $m$ on a string of length $r$ moving in a horizontal circle at speed $v$:

$$
T = \frac{mv^2}{r}
$$

where $T$ is the tension in the string (horizontal).

### Conical Pendulum

A mass $m$ on a string of length $L$ traces a horizontal circle of radius $r$ at angle $\theta$ to
the vertical.

**Vertical**: $T\cos\theta = mg$

**Horizontal**: $T\sin\theta = \dfrac{mv^2}{r}$

Dividing: $\tan\theta = \dfrac{v^2}{rg}$

The radius: $r = L\sin\theta$

The period: $T_p = 2\pi\sqrt{\dfrac{L\cos\theta}{g}}$

:::info[Example]

A $0.5\mathrm{ kg}$ mass on a string of length $1\mathrm{ m}$ moves in a horizontal circle at
$3\mathrm{ m/s}$. Find the angle the string makes with the vertical and the tension.

$$
\tan\theta = \frac{v^2}{rg} = \frac{9}{r \times 9.81}
$$

Also $r = L\sin\theta = \sin\theta$, so:

$$
\tan\theta = \frac{9}{9.81\sin\theta}
$$

$$
\frac{\sin\theta}{\cos\theta} = \frac{0.917}{\sin\theta}
$$

$$
\sin^2\theta = 0.917\cos\theta
$$

$$
1 - \cos^2\theta = 0.917\cos\theta
$$

Let $u = \cos\theta$: $u^2 + 0.917u - 1 = 0$.

$$
u = \frac{-0.917 + \sqrt{0.841 + 4}}{2} = \frac{-0.917 + 2.200}{2} = 0.642
$$

$\theta = \arccos(0.642) = 50.1\degree$.

$$
T = \frac{mg}{\cos\theta} = \frac{0.5 \times 9.81}{0.642} = 7.64\mathrm{ N}
$$

:::

---

## Vertical Circular Motion

For an object moving in a vertical circle, the speed varies (it is fastest at the bottom, slowest at
the top) because gravity does work.

### At the Bottom of the Circle

$$
T - mg = \frac{mv_{\mathrm{bottom}}^2}{r} \implies T = mg + \frac{mv_{\mathrm{bottom}}^2}{r}
$$

### At the Top of the Circle

$$
T + mg = \frac{mv_{\mathrm{top}}^2}{r} \implies T = \frac{mv_{\mathrm{top}}^2}{r} - mg
$$

### Minimum Speed at the Top

For the object to complete the full circle, $T \ge 0$ at the top:

$$
\frac{mv_{\mathrm{top}}^2}{r} \ge mg \implies v_{\mathrm{top}} \ge \sqrt{gr}
$$

### Energy Conservation in Vertical Circles

$$
\frac{1}{2}mv_{\mathrm{bottom}}^2 = \frac{1}{2}mv_{\mathrm{top}}^2 + mg(2r)
$$

$$
v_{\mathrm{bottom}}^2 = v_{\mathrm{top}}^2 + 4gr
$$

For minimum speed at the top ($v_{\mathrm{top}} = \sqrt{gr}$):

$$
v_{\mathrm{bottom}} = \sqrt{5gr}
$$

:::info[Example]

A $0.3\mathrm{ kg}$ ball on a string of length $0.8\mathrm{ m}$ is swung in a vertical circle. Find the
minimum speed at the bottom for the ball to complete the circle.

$$
v_{\mathrm{bottom}} = \sqrt{5gr} = \sqrt{5(9.81)(0.8)} = \sqrt{39.24} = 6.26\mathrm{ m/s}
$$

:::

---

## Banked Curves

### Without Friction

For a car on a banked curve at angle $\theta$ with radius $r$ at speed $v$:

**Vertical**: $N\cos\theta = mg$

**Horizontal**: $N\sin\theta = \dfrac{mv^2}{r}$

Dividing: $\tan\theta = \dfrac{v^2}{rg}$

The ideal (no friction needed) speed:

$$
v = \sqrt{rg\tan\theta}
$$

### With Friction

When friction is present, the car can travel at speeds above or below the ideal speed. Friction acts
up the slope (to prevent sliding down) or down the slope (to prevent sliding up).

---

## Torque

### Definition

Torque (moment of force) is the rotational equivalent of force:

$$
\tau = Fd\sin\theta = Fr_\perp
$$

where:

- $F$ is the force
- $d$ is the distance from the axis (pivot) to the point of application
- $\theta$ is the angle between the force and the line from pivot to application point
- $r_\perp = d\sin\theta$ is the perpendicular distance from the axis to the line of action (moment
  arm)

### SI Unit

The unit of torque is $\mathrm{N}\cdot\mathrm{m}$ (newton-metre).

### Torque and Angular Acceleration

Newton's second law for rotation:

$$
\tau_{\mathrm{net}} = I\alpha
$$

where $I$ is the moment of inertia and $\alpha$ is the angular acceleration.

### Equilibrium Conditions

For an object in **static equilibrium**:

1. **Translational**: $\sum \vec{F} = 0$ (no net force)
2. **Rotational**: $\sum \tau = 0$ (no net torque)

The second condition must hold about ANY axis.

:::info[Example]

A uniform beam of mass $10\mathrm{ kg}$ and length $4\mathrm{ m}$ is supported at its ends. A
$20\mathrm{ kg}$ mass hangs $1\mathrm{ m}$ from the left end. Find the support forces.

Taking moments about the left end (clockwise positive):

$$
R_{\mathrm{right}} \times 4 - 10g \times 2 - 20g \times 1 = 0
$$

$$
4R_{\mathrm{right}} = 196.2 + 196.2 = 392.4
$$

$$
R_{\mathrm{right}} = 98.1\mathrm{ N}
$$

By vertical equilibrium:

$$
R_{\mathrm{left}} + R_{\mathrm{right}} = 10g + 20g = 294.3\mathrm{ N}
$$

$$
R_{\mathrm{left}} = 294.3 - 98.1 = 196.2\mathrm{ N}
$$

:::

---

## Moment of Inertia

### Definition

The moment of inertia $I$ measures an object's resistance to angular acceleration:

$$
I = \sum m_i r_i^2
$$

For a continuous body:

$$
I = \int r^2\,dm
$$

### Common Moments of Inertia

| Object              | Axis                         | $I$                 |
| ------------------- | ---------------------------- | ------------------- |
| Solid cylinder/disk | Central axis                 | $\dfrac{1}{2}MR^2$  |
| Hollow cylinder     | Central axis                 | $MR^2$              |
| Solid sphere        | Diameter                     | $\dfrac{2}{5}MR^2$  |
| Hollow sphere       | Diameter                     | $\dfrac{2}{3}MR^2$  |
| Thin rod (centre)   | Perpendicular through centre | $\dfrac{1}{12}ML^2$ |
| Thin rod (end)      | Perpendicular through end    | $\dfrac{1}{3}ML^2$  |
| Point mass          | At distance $r$              | $Mr^2$              |

### Parallel Axis Theorem

For a body of mass $M$ with moment of inertia $I_{\mathrm{cm}}$ about an axis through its centre of
mass:

$$
I = I_{\mathrm{cm}} + Md^2
$$

where $d$ is the distance between the original axis and the parallel axis through the centre of
mass.

---

## Angular Momentum

### Definition

$$
\vec{L} = I\vec{\omega}
$$

For a point mass: $L = mvr = mr^2\omega$.

### SI Unit

$\mathrm{kg}\cdot\mathrm{m}^2/\mathrm{s}$.

### Conservation of Angular Momentum

In a closed system with no external torques:

$$
I_1\omega_1 = I_2\omega_2
$$

### Applications

- **Ice skater spinning**: Pulling arms in reduces $I$, so $\omega$ increases.
- **Diving**: Tucking reduces $I$, increasing angular velocity for flips.
- **Figure skater**: Extending arms increases $I$, decreasing $\omega$ for a controlled landing.

:::info[Example]

A figure skater with arms extended has $I = 4.5\mathrm{ kg}\cdot\mathrm{m}^2$ and spins at
$2\mathrm{ rad/s}$. She pulls her arms in, reducing $I$ to $1.5\mathrm{ kg}\cdot\mathrm{m}^2$. Find her
new angular velocity.

$$
I_1\omega_1 = I_2\omega_2
$$

$$
4.5 \times 2 = 1.5 \times \omega_2
$$

$$
\omega_2 = 6\mathrm{ rad/s}
$$

Her angular velocity triples.

:::

### Angular Impulse

$$
\Delta L = \tau \cdot \Delta t
$$

This is analogous to linear impulse: $\Delta p = F \cdot \Delta t$.

---

## Rotational Kinetic Energy

### Formula

$$
E_{k,\mathrm{rot}} = \frac{1}{2}I\omega^2
$$

### Total Kinetic Energy of a Rolling Object

For an object that rolls without slipping:

$$
E_k = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2
$$

Since $v = r\omega$ for rolling without slipping:

$$
E_k = \frac{1}{2}mv^2 + \frac{1}{2}I\frac{v^2}{r^2} = \frac{1}{2}\left(m + \frac{I}{r^2}\right)v^2
$$

### Rolling Down an Incline

For an object rolling down a frictionless-free incline (rolling without slipping):

$$
mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2
$$

$$
v = \sqrt{\frac{2gh}{1 + \frac{I}{Mr^2}}}
$$

:::info[Example]

Compare the speeds of a solid sphere, a hollow sphere, and a solid cylinder rolling down the same
incline from the same height.

- Solid sphere: $I = \dfrac{2}{5}Mr^2 \implies v = \sqrt{\dfrac{10gh}{7}}$
- Hollow sphere: $I = \dfrac{2}{3}Mr^2 \implies v = \sqrt{\dfrac{6gh}{5}}$
- Solid cylinder: $I = \dfrac{1}{2}Mr^2 \implies v = \sqrt{\dfrac{4gh}{3}}$

The solid sphere is fastest, followed by the solid cylinder, then the hollow sphere. Objects with
more mass concentrated near the centre (smaller $I$) roll faster.

:::

---

## Analogy: Linear vs Rotational

| Linear Quantity         | Rotational Equivalent          |
| ----------------------- | ------------------------------ |
| Displacement $s$        | Angular displacement $\theta$  |
| Velocity $v$            | Angular velocity $\omega$      |
| Acceleration $a$        | Angular acceleration $\alpha$  |
| Mass $m$                | Moment of inertia $I$          |
| Force $F$               | Torque $\tau$                  |
| Momentum $p = mv$       | Angular momentum $L = I\omega$ |
| $F = ma$                | $\tau = I\alpha$               |
| $E_k = \frac{1}{2}mv^2$ | $E_k = \frac{1}{2}I\omega^2$   |
| $W = Fs$                | $W = \tau\theta$               |
| $P = Fv$                | $P = \tau\omega$               |

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

A car of mass $1200\mathrm{ kg}$ travels around a circular bend of radius $50\mathrm{ m}$ at
$15\mathrm{ m/s}$. Find the minimum coefficient of static friction required.

$$
\frac{mv^2}{r} \le \mu_s mg
$$

$$
\mu_s \ge \frac{v^2}{rg} = \frac{225}{50 \times 9.81} = \frac{225}{490.5} = 0.459
$$

### Question 2 (Paper 2 style)

A satellite orbits Earth at an altitude of $400\mathrm{ km}$ in a circular orbit.

**(a)** Calculate the orbital period.

($M_E = 5.97 \times 10^{24}\mathrm{ kg}$, $R_E = 6.37 \times 10^6\mathrm{ m}$)

$$
r = 6.77 \times 10^6\mathrm{ m}
$$

$$
\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{3.98 \times 10^{14}}{6.77 \times 10^6}} = 7669\mathrm{ m/s}
$$

$$
T = \frac{2\pi r}{v} = \frac{2\pi \times 6.77 \times 10^6}{7669} = 5544\mathrm{ s} \approx 92.4\mathrm{ min}
$$

**(b)** Calculate the centripetal acceleration.

$$
a_c = \frac{v^2}{r} = \frac{5.88 \times 10^7}{6.77 \times 10^6} = 8.68\mathrm{ m/s}^2
$$

### Question 3 (Paper 2 style)

A $0.2\mathrm{ kg}$ ball is attached to a string of length $0.8\mathrm{ m}$ and whirled in a vertical
circle.

**(a)** Find the minimum speed at the top of the circle for the ball to maintain contact.

$$
v_{\mathrm{min}} = \sqrt{gr} = \sqrt{9.81 \times 0.8} = \sqrt{7.85} = 2.80\mathrm{ m/s}
$$

**(b)** If the speed at the bottom is $8\mathrm{ m/s}$, find the tension in the string at the bottom.

$$
T_{\mathrm{bottom}} = mg + \frac{mv^2}{r} = 0.2(9.81) + \frac{0.2(64)}{0.8} = 1.962 + 16 = 17.96\mathrm{ N}
$$

**(c)** Find the tension at the top.

First find $v_{\mathrm{top}}$ using energy conservation:

$$
\frac{1}{2}mv_{\mathrm{bottom}}^2 = \frac{1}{2}mv_{\mathrm{top}}^2 + mg(2r)
$$

$$
64 = v_{\mathrm{top}}^2 + 9.81(1.6) = v_{\mathrm{top}}^2 + 15.70
$$

$$
v_{\mathrm{top}}^2 = 48.30 \implies v_{\mathrm{top}} = 6.95\mathrm{ m/s}
$$

$$
T_{\mathrm{top}} = \frac{mv_{\mathrm{top}}^2}{r} - mg = \frac{0.2(48.30)}{0.8} - 1.962 = 12.075 - 1.962 = 10.11\mathrm{ N}
$$

### Question 4 (Paper 1 style)

A disc of mass $2\mathrm{ kg}$ and radius $0.3\mathrm{ m}$ rotates at $10\mathrm{ rad/s}$. Find its
rotational kinetic energy.

$$
I = \frac{1}{2}MR^2 = \frac{1}{2}(2)(0.09) = 0.09\mathrm{ kg}\cdot\mathrm{m}^2
$$

$$
E_k = \frac{1}{2}I\omega^2 = \frac{1}{2}(0.09)(100) = 4.5\mathrm{ J}
$$

### Question 5 (Paper 2 style)

A diver has moment of inertia $15\mathrm{ kg}\cdot\mathrm{m}^2$ with arms extended and
$4\mathrm{ kg}\cdot\mathrm{m}^2$ in a tucked position. She leaves the board with angular velocity
$2\mathrm{ rad/s}$ (arms extended).

**(a)** Find her angular velocity when tucked.

$$
I_1\omega_1 = I_2\omega_2
$$

$$
15 \times 2 = 4 \times \omega_2 \implies \omega_2 = 7.5\mathrm{ rad/s}
$$

**(b)** How many complete somersaults can she perform in $1.2\mathrm{ s}$ while tucked?

$$
\theta = \omega_2 \times t = 7.5 \times 1.2 = 9\mathrm{ rad}
$$

Number of somersaults $= \dfrac{9}{2\pi} = 1.43$

She can complete 1 full somersault and is partway through a second.

---

## Summary

| Quantity                         | Formula                                   |
| -------------------------------- | ----------------------------------------- |
| Angular velocity                 | $\omega = \dfrac{v}{r} = \dfrac{2\pi}{T}$ |
| Centripetal acceleration         | $a_c = \dfrac{v^2}{r} = \omega^2 r$       |
| Centripetal force                | $F_c = \dfrac{mv^2}{r} = m\omega^2 r$     |
| Torque                           | $\tau = Fr_\perp$                         |
| Newton's second law (rotation)   | $\tau = I\alpha$                          |
| Angular momentum                 | $L = I\omega$                             |
| Rotational kinetic energy        | $E_k = \dfrac{1}{2}I\omega^2$             |
| Conservation of angular momentum | $I_1\omega_1 = I_2\omega_2$               |

:::tip[Exam Strategy]

For circular motion problems, always draw a free-body diagram and identify which force(s) provide
the centripetal force. For vertical circle problems, use energy conservation to relate speeds at
different points. For torque problems, clearly identify the pivot and calculate the moment arm.

:::

---

## Angular Kinematics

### Angular Equations of Motion

For constant angular acceleration $\alpha$:

$$
\omega = \omega_0 + \alpha t
$$

$$
\theta = \omega_0 t + \frac{1}{2}\alpha t^2
$$

$$
\omega^2 = \omega_0^2 + 2\alpha\theta
$$

$$
\theta = \frac{1}{2}(\omega_0 + \omega)t
$$

:::info[Example]

A flywheel starts from rest and accelerates uniformly at $2\mathrm{ rad/s}^2$ for $5\mathrm{ s}$.

**(a)** Find the angular velocity after $5\mathrm{ s}$.

$$
\omega = 0 + 2 \times 5 = 10\mathrm{ rad/s}
$$

**(b)** Find the number of revolutions made.

$$
\theta = 0 + \frac{1}{2}(2)(25) = 25\mathrm{ rad}
$$

$$
\mathrm{Revolutions} = \frac{25}{2\pi} = 3.98
$$

**(c)** Find the linear speed of a point $0.3\mathrm{ m}$ from the axis.

$$
v = r\omega = 0.3 \times 10 = 3.0\mathrm{ m/s}
$$

:::

---

## Gravitation and Circular Orbits (Extended)

### Orbital Energy

For a satellite of mass $m$ in circular orbit of radius $r$ around a planet of mass $M$:

$$
E_{\mathrm{total}} = -\frac{GMm}{2r}
$$

$$
E_k = \frac{GMm}{2r}
$$

$$
E_p = -\frac{GMm}{r}
$$

### Orbital Speed

$$
v = \sqrt{\frac{GM}{r}}
$$

### Orbital Period (Kepler's Third Law)

$$
T^2 = \frac{4\pi^2}{GM}r^3
$$

$T^2$ is proportional to $r^3$ for all satellites orbiting the same body.

### Geostationary Orbits

A geostationary satellite:

- Orbits above the equator.
- Has a period of 24 hours (matches Earth's rotation).
- Remains above the same point on Earth's surface.
- Orbital radius $\approx 42200\mathrm{ km}$ from Earth's centre.

---

## Gyroscopic Effects

A spinning gyroscope resists changes to its axis of rotation due to conservation of angular
momentum. This principle is used in:

- Navigation systems (gyrocompasses).
- Stabilisation of ships and aircraft.
- Bicycle stability.
- Smartphone orientation sensors.

### Precession

When a torque is applied to a spinning object, instead of tipping over, the axis of rotation moves
perpendicular to the applied torque. This is called precession.

The precession angular velocity:

$$
\omega_p = \frac{\tau}{L}
$$

---

## Additional IB Exam-Style Questions

### Question 6 (Paper 2 style)

A disc of mass $5\mathrm{ kg}$ and radius $0.2\mathrm{ m}$ rotates about its central axis. A constant
torque of $0.5\mathrm{ N}\cdot\mathrm{m}$ is applied for $4\mathrm{ s}$, starting from rest.

**(a)** Find the angular acceleration.

$$
\alpha = \frac{\tau}{I} = \frac{0.5}{\frac{1}{2}(5)(0.04)} = \frac{0.5}{0.1} = 5\mathrm{ rad/s}^2
$$

**(b)** Find the angular velocity after $4\mathrm{ s}$.

$$
\omega = 0 + 5 \times 4 = 20\mathrm{ rad/s}
$$

**(c)** Find the rotational kinetic energy after $4\mathrm{ s}$.

$$
E_k = \frac{1}{2}I\omega^2 = \frac{1}{2}(0.1)(400) = 20\mathrm{ J}
$$

**(d)** Find the work done by the torque.

$$
W = \tau\theta = \tau \cdot \frac{1}{2}\alpha t^2 = 0.5 \times \frac{1}{2}(5)(16) = 20\mathrm{ J}
$$

This equals the change in rotational kinetic energy, confirming the work-energy theorem.

### Question 7 (Paper 2 style)

A thin rod of mass $2\mathrm{ kg}$ and length $1\mathrm{ m}$ is pivoted at one end and held
horizontally. It is released from rest.

**(a)** Find the moment of inertia about the pivot.

$$
I = \frac{1}{3}ML^2 = \frac{1}{3}(2)(1) = 0.667\mathrm{ kg}\cdot\mathrm{m}^2
$$

**(b)** Find the initial angular acceleration.

The torque about the pivot:
$\tau = mg \times \dfrac{L}{2} = 2(9.81)(0.5) = 9.81\mathrm{ N}\cdot\mathrm{m}$.

$$
\alpha = \frac{\tau}{I} = \frac{9.81}{0.667} = 14.7\mathrm{ rad/s}^2
$$

**(c)** Find the angular velocity as the rod passes through the vertical.

Using conservation of energy (taking the pivot as reference):

Loss of $E_p$: the centre of mass falls by $\dfrac{L}{2} = 0.5\mathrm{ m}$.

$$
Mg\frac{L}{2} = \frac{1}{2}I\omega^2
$$

$$
2(9.81)(0.5) = \frac{1}{2}(0.667)\omega^2
$$

$$
9.81 = 0.333\omega^2 \implies \omega = \sqrt{29.4} = 5.42\mathrm{ rad/s}
$$

### Question 8 (Paper 1 style)

A horizontal turntable of radius $0.5\mathrm{ m}$ rotates at $3\mathrm{ rad/s}$. A coin is placed on the
turntable at a distance $0.3\mathrm{ m}$ from the centre. If the coefficient of static friction is
$0.4$, does the coin slip?

$$
a_c = \omega^2 r = 9 \times 0.3 = 2.7\mathrm{ m/s}^2
$$

Required friction: $f = ma_c = m \times 2.7$.

Maximum available friction: $f_{\max} = \mu_s mg = 0.4m(9.81) = 3.924m$.

Since $2.7m \lt 3.924m$, the coin does not slip.
