---
id: dse-physics-mechanics
title: Physics - Mechanics
description:
  DSE Physics mechanics notes covering kinematics, dynamics, work and energy, momentum, and circular
  motion.
slug: physics-mechanics
---

## Kinematics

Kinematics is the study of motion without considering the forces that cause it. It describes the
motion of objects using displacement, velocity, and acceleration.

### Displacement, Velocity, and Acceleration

| Quantity     | Symbol | SI Unit | Definition                              |
| ------------ | ------ | ------- | --------------------------------------- |
| Displacement | $s$    | m       | Distance moved in a specified direction |
| Velocity     | $v$    | m/s     | Rate of change of displacement          |
| Acceleration | $a$    | m/s$^2$ | Rate of change of velocity              |

Displacement is a vector quantity; it has both magnitude and direction. Speed is the scalar
counterpart of velocity.

$$v = \frac{\Delta s}{\Delta t}$$

$$a = \frac{\Delta v}{\Delta t}$$

### Equations of Uniformly Accelerated Motion (SUVAT Equations)

For motion with constant acceleration, the following equations apply:

$$v = u + at$$

$$s = ut + \frac{1}{2}at^2$$

$$v^2 = u^2 + 2as$$

$$s = \frac{1}{2}(u + v)t$$

Where:

- $u$ = initial velocity
- $v$ = final velocity
- $a$ = constant acceleration
- $s$ = displacement
- $t$ = time

:::info
These equations are only valid for **uniform acceleration**. When acceleration varies,
calculus or graphical methods must be used.
:::

### Worked Example 1

A car starts from rest and accelerates uniformly at $3 \mathrm{ m/s}^2$ for $5$ seconds. Find the
distance travelled.

Using $s = ut + \frac{1}{2}at^2$:

$$s = 0 + \frac{1}{2}(3)(5)^2 = \frac{1}{2}(3)(25) = 37.5 \mathrm{ m}$$

### Worked Example 2

A ball is thrown vertically upwards with initial velocity $20 \mathrm{ m/s}$. Find the maximum height
reached and the time taken to reach it.

At maximum height, $v = 0$:

$$v^2 = u^2 + 2as$$

$$0 = 20^2 + 2(-9.81)s$$

$$s = \frac{400}{19.62} = 20.39 \mathrm{ m}$$

Time to reach maximum height:

$$v = u + at$$

$$0 = 20 - 9.81t$$

$$t = \frac{20}{9.81} = 2.04 \mathrm{ s}$$

### Displacement-Time and Velocity-Time Graphs

For a displacement-time graph:

- Slope = instantaneous velocity
- A straight line indicates constant velocity
- A curved line indicates acceleration

For a velocity-time graph:

- Slope = acceleration
- Area under the graph = displacement
- A straight line indicates uniform acceleration

:::tip
The area under a velocity-time graph gives displacement. For non-linear graphs, use counting
squares or integration.
:::

### Free Fall

All objects in free fall near the Earth's surface experience the same acceleration due to gravity,
denoted $g$:

$$g \approx 9.81 \mathrm{ m/s}^2$$

The acceleration is **downward** regardless of whether the object is moving up or down.

:::warning
Air resistance is neglected in ideal free-fall problems unless the question explicitly
states otherwise.
:::

### Worked Example 3

An object is dropped from a height of $80 \mathrm{ m}$. How long does it take to reach the ground?

$$s = ut + \frac{1}{2}gt^2$$

$$80 = 0 + \frac{1}{2}(9.81)t^2$$

$$t^2 = \frac{160}{9.81}$$

$$t = \sqrt{16.31} = 4.04 \mathrm{ s}$$

### Projectile Motion

Projectile motion is the motion of an object launched into the air at an angle. It can be analysed
by resolving the motion into horizontal and vertical components.

For a projectile launched with speed $u$ at angle $\theta$ above the horizontal:

$$u_x = u\cos\theta \quad \mathrm{(constant, no horizontal acceleration)}$$

$$u_y = u\sin\theta \quad \mathrm{(subject to } g \mathrm{)}$$

The horizontal displacement (range) is:

$$R = \frac{u^2 \sin 2\theta}{g}$$

Maximum range occurs at $\theta = 45^\circ$.

The maximum height is:

$$H = \frac{u^2 \sin^2\theta}{2g}$$

Time of flight:

$$T = \frac{2u\sin\theta}{g}$$

:::info
In projectile motion, the horizontal and vertical motions are **independent** of each other.
They share only the common variable $t$ (time).
:::

### Worked Example 4

A ball is thrown with initial velocity $15 \mathrm{ m/s}$ at $30^\circ$ above the horizontal. Find the
range and maximum height.

Horizontal component: $u_x = 15\cos 30^\circ = 12.99 \mathrm{ m/s}$

Vertical component: $u_y = 15\sin 30^\circ = 7.5 \mathrm{ m/s}$

Maximum height:

$$H = \frac{u_y^2}{2g} = \frac{7.5^2}{2(9.81)} = \frac{56.25}{19.62} = 2.87 \mathrm{ m}$$

Time of flight:

$$T = \frac{2u_y}{g} = \frac{2(7.5)}{9.81} = 1.53 \mathrm{ s}$$

Range:

$$R = u_x \times T = 12.99 \times 1.53 = 19.87 \mathrm{ m}$$

---

## Dynamics

Dynamics is the study of forces and their effects on motion. The central principle is Newton's laws
of motion.

### Newton's Laws of Motion

**First Law (Law of Inertia):** An object remains at rest or continues to move with uniform velocity
unless acted upon by a resultant external force.

**Second Law:** The resultant force acting on an object is equal to the rate of change of momentum
of the object:

$$F = \frac{\Delta p}{\Delta t} = \frac{d(mv)}{dt}$$

For constant mass:

$$F = ma$$

**Third Law:** If body `A` exerts a force on body `B`, then body `B` exerts an equal and opposite
force on body `A`.

$$F_{AB} = -F_{BA}$$

:::warning
Newton's third law pairs act on **different** bodies. Never add action-reaction pairs
together as they do not act on the same object.
:::

### Types of Forces

| Force           | Symbol     | Description                                  |
| --------------- | ---------- | -------------------------------------------- |
| Weight          | $W = mg$   | Gravitational force on an object             |
| Normal reaction | $N$ or $R$ | Perpendicular contact force from a surface   |
| Friction        | $f$        | Opposes relative motion between surfaces     |
| Tension         | $T$        | Pulling force along a string or rope         |
| Air resistance  | $F_d$      | Resistive force in a fluid, depends on speed |

### Free Body Diagrams

A free body diagram shows all the forces acting on a single object. Follow these steps:

1. Isolate the object of interest
2. Draw all external forces as arrows from the centre of the object
3. Do not include forces that the object exerts on other objects

### Worked Example 5

A block of mass $5 \mathrm{ kg}$ is placed on a smooth inclined plane at $30^\circ$ to the horizontal.
Find the acceleration down the plane.

Forces parallel to the plane: $mg\sin\theta = 5(9.81)\sin 30^\circ = 24.525 \mathrm{ N}$

Since the plane is smooth (no friction):

$$F = ma$$

$$24.525 = 5a$$

$$a = 4.91 \mathrm{ m/s}^2$$

### Friction

Friction opposes relative motion between two surfaces in contact.

- **Static friction** ($f_s$): prevents motion from starting; varies up to a maximum value
- **Kinetic friction** ($f_k$): opposes motion when surfaces are sliding; approximately constant

$$f_s \leqslant \mu_s N$$

$$f_k = \mu_k N$$

Where $\mu$ is the coefficient of friction and $N$ is the normal reaction force.

:::tip
$\mu_k \lt \mu_s$ is always true. Kinetic friction is less than the maximum static friction.
:::

### Worked Example 6

A $10 \mathrm{ kg}$ block rests on a rough horizontal surface with $\mu = 0.3$. A horizontal force of
$40 \mathrm{ N}$ is applied. Does the block move?

Normal reaction: $N = mg = 10 \times 9.81 = 98.1 \mathrm{ N}$

Maximum static friction: $f_s = 0.3 \times 98.1 = 29.43 \mathrm{ N}$

Applied force $= 40 \mathrm{ N} \gt 29.43 \mathrm{ N}$, so the block moves.

Acceleration: $a = \frac{F - f_k}{m} = \frac{40 - 29.43}{10} = 1.057 \mathrm{ m/s}^2$

---

## Work, Energy, and Power

### Work Done

Work is done when a force causes displacement in the direction of the force.

$$W = Fs\cos\theta$$

Where $\theta$ is the angle between the force and the displacement.

- If $\theta = 0^\circ$: $W = Fs$ (maximum work)
- If $\theta = 90^\circ$: $W = 0$ (no work done)
- If $\theta \gt 90^\circ$: $W \lt 0$ (force opposes motion)

The SI unit of work is the joule (J), where $1 \mathrm{ J} = 1 \mathrm{ N}\cdot\mathrm{m}$.

### Work Done by a Varying Force

When force varies with displacement, work is found from the area under a force-displacement graph:

$$W = \int_{s_1}^{s_2} F \, ds$$

### Work Done Against Gravity

$$W = mgh$$

This is the work required to raise an object of mass $m$ through a vertical height $h$.

### Work Done Stretching a Spring (Hooke's Law)

For a spring obeying Hooke's law, $F = kx$:

$$W = \frac{1}{2}kx^2$$

Where $k$ is the spring constant and $x$ is the extension.

### Kinetic Energy

$$E_k = \frac{1}{2}mv^2$$

The kinetic energy of an object depends on its mass and the square of its speed.

### Potential Energy

**Gravitational potential energy:**

$$E_p = mgh$$

**Elastic potential energy (spring):**

$$E_p = \frac{1}{2}kx^2$$

### Principle of Conservation of Energy

Energy cannot be created or destroyed, only transformed from one form to another.

$$\mathrm{Total energy at start} = \mathrm{Total energy at end}$$

In the presence of friction:

$$E_k + E_p + W_{\mathrm{friction}} = \mathrm{constant}$$

Or equivalently:

$$E_{k1} + E_{p1} = E_{k2} + E_{p2} + W_{\mathrm{lost to friction}}$$

:::info
When applying conservation of energy, always identify all forms of energy at each point in
the motion.
:::

### Worked Example 7

A roller coaster car of mass $500 \mathrm{ kg}$ starts from rest at point `A`, $20 \mathrm{ m}$ above
the ground. It descends to point `B`, $5 \mathrm{ m}$ above the ground. Find its speed at `B`,
neglecting friction.

At `A`: $E_k = 0$, $E_p = 500 \times 9.81 \times 20 = 98100 \mathrm{ J}$

At `B`: $E_k = \frac{1}{2}(500)v^2$, $E_p = 500 \times 9.81 \times 5 = 24525 \mathrm{ J}$

By conservation of energy:

$$98100 = \frac{1}{2}(500)v^2 + 24525$$

$$\frac{1}{2}(500)v^2 = 73575$$

$$v^2 = \frac{147150}{500} = 294.3$$

$$v = 17.16 \mathrm{ m/s}$$

### Power

Power is the rate of doing work:

$$P = \frac{W}{t}$$

$$P = Fv$$

The SI unit of power is the watt (W), where $1 \mathrm{ W} = 1 \mathrm{ J/s}$.

### Worked Example 8

A car of mass $1200 \mathrm{ kg}$ travels at a constant speed of $20 \mathrm{ m/s}$ up a slope of
$\sin^{-1}(0.1)$. The total resistive force is $300 \mathrm{ N}$. Find the power output of the engine.

Component of weight along the slope: $mg\sin\theta = 1200 \times 9.81 \times 0.1 = 1177.2 \mathrm{ N}$

Total force the engine must overcome: $F = 1177.2 + 300 = 1477.2 \mathrm{ N}$

$$P = Fv = 1477.2 \times 20 = 29544 \mathrm{ W} = 29.5 \mathrm{ kW}$$

---

## Momentum and Impulse

### Linear Momentum

$$p = mv$$

Momentum is a vector quantity with SI unit kg m/s.

### Principle of Conservation of Momentum

For a system of objects with no external resultant force:

$$\sum p_{\mathrm{initial}} = \sum p_{\mathrm{final}}$$

$$m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$$

### Newton's Second Law in Terms of Momentum

$$F = \frac{\Delta p}{\Delta t}$$

This is the most general form of Newton's second law and is valid even when mass changes.

### Impulse

$$\mathrm{Impulse} = F\Delta t = \Delta p$$

Impulse equals the change in momentum. The SI unit is N s.

:::tip
Impulse is the area under a force-time graph. For a variable force, use $J = \int F \, dt$.
:::

### Worked Example 9

A $0.15 \mathrm{ kg}$ cricket ball travelling at $30 \mathrm{ m/s}$ is hit back along the same line at
$20 \mathrm{ m/s}$. If the bat is in contact with the ball for $0.005 \mathrm{ s}$, find the average
force exerted.

Take the initial direction as positive.

$$\Delta p = m(v - u) = 0.15(-20 - 30) = 0.15(-50) = -7.5 \mathrm{ kg m/s}$$

$$F = \frac{\Delta p}{\Delta t} = \frac{-7.5}{0.005} = -1500 \mathrm{ N}$$

The negative sign indicates the force acts in the opposite direction to the initial motion. The
magnitude of the average force is $1500 \mathrm{ N}$.

### Collisions

**Elastic collision:** Both momentum and kinetic energy are conserved.

**Inelastic collision:** Momentum is conserved but kinetic energy is not.

**Perfectly inelastic collision:** The objects stick together after collision (maximum kinetic
energy loss).

:::info
Momentum is **always** conserved in collisions (provided no external forces act). Kinetic
energy is only conserved in perfectly elastic collisions.
:::

### Worked Example 10

A $2 \mathrm{ kg}$ object moving at $5 \mathrm{ m/s}$ collides head-on with a $3 \mathrm{ kg}$ object at
rest. If the collision is perfectly inelastic, find the common velocity after collision.

By conservation of momentum:

$$m_1u_1 + m_2u_2 = (m_1 + m_2)v$$

$$2(5) + 3(0) = (2 + 3)v$$

$$10 = 5v$$

$$v = 2 \mathrm{ m/s}$$

### Worked Example 11 (Elastic Collision)

A $2 \mathrm{ kg}$ object moving at $5 \mathrm{ m/s}$ collides elastically with a $3 \mathrm{ kg}$ object
at rest. Find the velocities after collision.

Conservation of momentum:

$$2(5) + 3(0) = 2v_1 + 3v_2$$

$$10 = 2v_1 + 3v_2 \quad \mathrm{(1)}$$

Conservation of kinetic energy:

$$\frac{1}{2}(2)(5^2) = \frac{1}{2}(2)v_1^2 + \frac{1}{2}(3)v_2^2$$

$$25 = v_1^2 + 1.5v_2^2 \quad \mathrm{(2)}$$

From equation (1): $v_1 = \frac{10 - 3v_2}{2}$

Substituting into (2):

$$25 = \left(\frac{10 - 3v_2}{2}\right)^2 + 1.5v_2^2$$

$$25 = \frac{100 - 60v_2 + 9v_2^2}{4} + 1.5v_2^2$$

$$100 = 100 - 60v_2 + 9v_2^2 + 6v_2^2$$

$$15v_2^2 - 60v_2 = 0$$

$$15v_2(v_2 - 4) = 0$$

$v_2 = 0$ (original situation) or $v_2 = 4 \mathrm{ m/s}$

Therefore $v_1 = \frac{10 - 12}{2} = -1 \mathrm{ m/s}$

The $2 \mathrm{ kg}$ object rebounds at $1 \mathrm{ m/s}$, and the $3 \mathrm{ kg}$ object moves forward
at $4 \mathrm{ m/s}$.

---

## Circular Motion



<PhetSimulation simulationId="forces-and-motion-basics" title="Forces and Motion: Basics" />

Explore the simulation above to develop intuition for this topic.

### Angular Quantities

| Quantity             | Symbol   | SI Unit   | Relation                      |
| -------------------- | -------- | --------- | ----------------------------- |
| Angular displacement | $\theta$ | rad       | $\theta = \frac{s}{r}$        |
| Angular velocity     | $\omega$ | rad/s     | $\omega = \frac{d\theta}{dt}$ |
| Angular acceleration | $\alpha$ | rad/s$^2$ | $\alpha = \frac{d\omega}{dt}$ |

Relation to linear quantities:

$$v = r\omega$$

$$a = r\alpha$$

### Centripetal Acceleration and Force

An object moving in a circle at constant speed has a centripetal acceleration directed towards the
centre:

$$a_c = \frac{v^2}{r} = \omega^2 r = \frac{4\pi^2 r}{T^2}$$

The centripetal force required is:

$$F_c = \frac{mv^2}{r} = m\omega^2 r$$

:::warning
Centripetal force is **not** a new force. It is the name given to the resultant force
directed towards the centre of the circle. It is provided by gravity, tension, friction, normal
reaction, or a combination of these.
:::

### Worked Example 12

A car of mass $1000 \mathrm{ kg}$ travels around a roundabout of radius $25 \mathrm{ m}$ at
$10 \mathrm{ m/s}$. Find the centripetal force.

$$F_c = \frac{mv^2}{r} = \frac{1000 \times 10^2}{25} = \frac{100000}{25} = 4000 \mathrm{ N}$$

This force is provided by friction between the tyres and the road.

### Worked Example 13

A particle of mass $0.5 \mathrm{ kg}$ is attached to a string of length $0.8 \mathrm{ m}$ and whirled in
a horizontal circle at $3 \mathrm{ rev/s}$. Find the tension in the string.

Angular velocity: $\omega = 2\pi \times 3 = 6\pi \mathrm{ rad/s}$

$$T = F_c = m\omega^2 r = 0.5 \times (6\pi)^2 \times 0.8$$

$$T = 0.5 \times 36\pi^2 \times 0.8 = 14.4\pi^2 = 142.1 \mathrm{ N}$$

### Vertical Circular Motion

For an object moving in a vertical circle, the speed is not constant because gravity does work on
the object.

At the top of the circle:

$$T + mg = \frac{mv_{\mathrm{top}}^2}{r}$$

At the bottom of the circle:

$$T - mg = \frac{mv_{\mathrm{bottom}}^2}{r}$$

For the object to complete the full circle, the tension at the top must satisfy $T \geqslant 0$,
giving:

$$v_{\mathrm{top}} \geqslant \sqrt{gr}$$

---

## Gravitation

### Newton's Law of Universal Gravitation

Every particle attracts every other particle with a force that is proportional to the product of
their masses and inversely proportional to the square of the distance between them:

$$F = \frac{Gm_1m_2}{r^2}$$

Where $G = 6.67 \times 10^{-11} \mathrm{ N m}^2 \mathrm{ kg}^{-2}$ is the universal gravitational
constant.

### Gravitational Field Strength

The gravitational field strength at a point is the force per unit mass placed at that point:

$$g = \frac{F}{m} = \frac{GM}{r^2}$$

Near the Earth's surface, $g \approx 9.81 \mathrm{ N/kg}$.

### Gravitational Potential Energy

For two masses separated by distance $r$:

$$E_p = -\frac{GMm}{r}$$

The negative sign indicates that work must be done against gravity to separate the masses to
infinity (where $E_p = 0$).

### Orbital Motion

For a satellite of mass $m$ orbiting a planet of mass $M$ at radius $r$:

$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

$$v = \sqrt{\frac{GM}{r}}$$

Orbital period:

$$T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}$$

:::info
Geostationary satellites orbit at the same rate as the Earth's rotation (period = 24 hours),
remaining above the same point on the equator. They orbit at approximately $42,300 \mathrm{ km}$ from
the centre of the Earth.
:::

### Worked Example 14

Find the orbital speed of a satellite orbiting the Earth at a height of $300 \mathrm{ km}$ above the
surface. (Earth's radius $= 6.37 \times 10^6 \mathrm{ m}$, Earth's mass
$= 5.97 \times 10^{24} \mathrm{ kg}$)

$$r = 6.37 \times 10^6 + 300 \times 10^3 = 6.67 \times 10^6 \mathrm{ m}$$

$$v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.67 \times 10^6}}$$

$$v = \sqrt{5.97 \times 10^7} = 7727 \mathrm{ m/s}$$

---

## Summary Table

| Topic                  | Key Formula                         | Key Concept                             |
| ---------------------- | ----------------------------------- | --------------------------------------- |
| Kinematics             | $v^2 = u^2 + 2as$                   | SUVAT for constant acceleration         |
| Projectile motion      | $R = \frac{u^2\sin 2\theta}{g}$     | Resolve into horizontal and vertical    |
| Newton's Second Law    | $F = ma$                            | Force equals rate of change of momentum |
| Work                   | $W = Fs\cos\theta$                  | Energy transfer by a force              |
| Kinetic energy         | $E_k = \frac{1}{2}mv^2$             | Energy of motion                        |
| Conservation of energy | $E_{k1} + E_{p1} = E_{k2} + E_{p2}$ | Energy cannot be created or destroyed   |
| Momentum               | $p = mv$                            | Vector quantity                         |
| Impulse                | $J = F\Delta t = \Delta p$          | Change in momentum                      |
| Centripetal force      | $F_c = \frac{mv^2}{r}$              | Resultant force towards centre          |
| Gravitation            | $F = \frac{Gm_1m_2}{r^2}$           | Inverse square law                      |

---

## Exam Tips

- Always draw a clear free body diagram before applying Newton's second law.
- Define a positive direction and stick to it throughout the calculation.
- In projectile motion, treat horizontal and vertical components separately.
- Check whether energy is conserved before applying conservation of energy equations.
- In collision problems, momentum is always conserved; kinetic energy is only conserved in elastic
  collisions.
- For circular motion, always identify what provides the centripetal force.
- Remember that $g$ acts **downward**; use negative sign when taking upward as positive.

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** A stone is thrown horizontally from a cliff $60 \mathrm{ m}$ high with speed
$15 \mathrm{ m/s}$. Find the horizontal distance it travels before hitting the ground.

Vertical motion: $60 = \frac{1}{2}(9.81)t^2$, so $t = \sqrt{\frac{120}{9.81}} = 3.50 \mathrm{ s}$

Horizontal distance: $d = 15 \times 3.50 = 52.5 \mathrm{ m}$

**Question 2:** Two objects of mass $3 \mathrm{ kg}$ and $5 \mathrm{ kg}$ are connected by a light
inextensible string over a smooth pulley. Find the acceleration and the tension.

$$a = \frac{(m_2 - m_1)g}{m_1 + m_2} = \frac{(5 - 3)(9.81)}{3 + 5} = \frac{19.62}{8} = 2.45 \mathrm{ m/s}^2$$

$$T = \frac{2m_1m_2g}{m_1 + m_2} = \frac{2(3)(5)(9.81)}{8} = 36.79 \mathrm{ N}$$

**Question 3:** A $0.5 \mathrm{ kg}$ ball is dropped from a height of $2 \mathrm{ m}$ onto a hard floor
and rebounds to $1.5 \mathrm{ m}$. Find the impulse exerted by the floor.

Velocity just before impact: $v = \sqrt{2gh} = \sqrt{2(9.81)(2)} = 6.26 \mathrm{ m/s}$ (downward)

Velocity just after rebound: $v = \sqrt{2(9.81)(1.5)} = 5.42 \mathrm{ m/s}$ (upward)

Taking upward as positive: $\Delta p = 0.5(5.42 - (-6.26)) = 0.5(11.68) = 5.84 \mathrm{ kg m/s}$

Impulse $= 5.84 \mathrm{ N s}$ (upward)

**Question 4:** A $3 \mathrm{ kg}$ object slides down a rough inclined plane of length $5 \mathrm{ m}$
at $30^\circ$ to the horizontal. The coefficient of friction is $0.2$. Find the speed at the bottom
if the object starts from rest.

Force down the plane: $mg\sin 30^\circ = 3(9.81)(0.5) = 14.715 \mathrm{ N}$

Normal reaction: $N = mg\cos 30^\circ = 3(9.81)(0.866) = 25.49 \mathrm{ N}$

Friction: $f = \mu N = 0.2 \times 25.49 = 5.10 \mathrm{ N}$

Net force down the plane: $F = 14.715 - 5.10 = 9.615 \mathrm{ N}$

$$a = \frac{F}{m} = \frac{9.615}{3} = 3.205 \mathrm{ m/s}^2$$

$$v^2 = u^2 + 2as = 0 + 2(3.205)(5) = 32.05$$

$$v = 5.66 \mathrm{ m/s}$$

**Question 5:** A satellite orbits the Earth at a height of $500 \mathrm{ km}$. Given the Earth's mass
is $5.97 \times 10^{24} \mathrm{ kg}$ and radius is $6.37 \times 10^6 \mathrm{ m}$, find the orbital
period.

$$r = 6.37 \times 10^6 + 500 \times 10^3 = 6.87 \times 10^6 \mathrm{ m}$$

$$v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.87 \times 10^6}} = \sqrt{5.79 \times 10^7} = 7611 \mathrm{ m/s}$$

$$T = \frac{2\pi r}{v} = \frac{2\pi \times 6.87 \times 10^6}{7611} = 5671 \mathrm{ s} = 94.5 \mathrm{ minutes}$$
</details>

---

## Simple Harmonic Motion

### Definition

Simple harmonic motion (SHM) is a type of periodic motion where the restoring force is directly
proportional to the displacement from the equilibrium position and acts in the opposite direction.

$$F = -kx$$

$$a = -\omega^2 x$$

Where:

- $F$ = restoring force
- $k$ = force constant (spring constant)
- $x$ = displacement from equilibrium
- $\omega$ = angular frequency
- $a$ = acceleration

### Equations of SHM

**Displacement:**

$$x = A\cos(\omega t) \quad \mathrm{or} \quad x = A\sin(\omega t)$$

Where $A$ is the amplitude (maximum displacement).

**Velocity:**

$$v = \pm\omega\sqrt{A^2 - x^2}$$

Maximum velocity occurs at equilibrium ($x = 0$):

$$v_{\max} = \omega A$$

**Acceleration:**

$$a = -\omega^2 x$$

Maximum acceleration occurs at maximum displacement ($x = A$):

$$a_{\max} = \omega^2 A$$

**Period:**

For a mass-spring system: $T = 2\pi\sqrt{\frac{m}{k}}$

For a simple pendulum (small angle approximation): $T = 2\pi\sqrt{\frac{L}{g}}$

:::info
The period of SHM is independent of amplitude (isochronous). This is why pendulum clocks
keep consistent time even as the swing gradually decreases.
:::

### Worked Example 15

A mass of $0.5 \mathrm{ kg}$ is attached to a spring with constant $200 \mathrm{ N/m}$ and displaced
$0.05 \mathrm{ m}$ from equilibrium. Find the period, maximum velocity, and maximum acceleration.

$$T = 2\pi\sqrt{\frac{m}{k}} = 2\pi\sqrt{\frac{0.5}{200}} = 2\pi\sqrt{0.0025} = 2\pi \times 0.05 = 0.314 \mathrm{ s}$$

$$\omega = \frac{2\pi}{T} = \frac{2\pi}{0.314} = 20.0 \mathrm{ rad/s}$$

$$v_{\max} = \omega A = 20.0 \times 0.05 = 1.00 \mathrm{ m/s}$$

$$a_{\max} = \omega^2 A = 400 \times 0.05 = 20.0 \mathrm{ m/s}^2$$

### Worked Example 16

A simple pendulum has a length of $1.0 \mathrm{ m}$. Find its period.

$$T = 2\pi\sqrt{\frac{L}{g}} = 2\pi\sqrt{\frac{1.0}{9.81}} = 2\pi \times 0.319 = 2.01 \mathrm{ s}$$

---

## Energy in SHM

In SHM, kinetic energy and potential energy continuously interchange, but the total energy remains
constant.

$$E_k = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2(A^2 - x^2)$$

$$E_p = \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 x^2$$

$$E_{\mathrm{total}} = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}kA^2$$

At equilibrium ($x = 0$): all energy is kinetic ($E_k = E_{\mathrm{total}}$)

At maximum displacement ($x = A$): all energy is potential ($E_p = E_{\mathrm{total}}$)

### Worked Example 17

A mass-spring system has mass $0.2 \mathrm{ kg}$, spring constant $80 \mathrm{ N/m}$, and amplitude
$0.03 \mathrm{ m}$. Find the total energy and the speed when the displacement is $0.02 \mathrm{ m}$.

$$E_{\mathrm{total}} = \frac{1}{2}kA^2 = \frac{1}{2}(80)(0.03)^2 = \frac{1}{2}(80)(0.0009) = 0.036 \mathrm{ J}$$

At $x = 0.02 \mathrm{ m}$:

$$E_k = E_{\mathrm{total}} - E_p = 0.036 - \frac{1}{2}(80)(0.02)^2 = 0.036 - 0.016 = 0.020 \mathrm{ J}$$

$$v = \sqrt{\frac{2E_k}{m}} = \sqrt{\frac{2 \times 0.020}{0.2}} = \sqrt{0.20} = 0.447 \mathrm{ m/s}$$

---

## Damping and Forced Oscillations

### Damping

Damping is the reduction in amplitude of oscillations due to energy loss (usually to friction or air
resistance).

- **Light damping:** Amplitude decreases gradually; the period is nearly unchanged
- **Heavy damping:** Amplitude decreases rapidly; period increases slightly
- **Critical damping:** The system returns to equilibrium in the shortest time without oscillating
- **Overdamping:** The system returns to equilibrium very slowly without oscillating

### Resonance

When a system is driven at its natural frequency, the amplitude of oscillation reaches a maximum.
This is called resonance.

- At resonance, energy is transferred most efficiently from the driving force to the system
- The amplitude at resonance depends on the degree of damping
- Lightly damped systems show sharp resonance peaks
- Heavily damped systems show broad, low resonance peaks

### Examples of SHM and Resonance

| Example               | Type                                 |
| --------------------- | ------------------------------------ |
| Mass on a spring      | SHM                                  |
| Simple pendulum       | SHM (small angles)                   |
| Liquid in a U-tube    | SHM                                  |
| Vibrating tuning fork | SHM                                  |
| Bridge in wind        | Resonance (potentially destructive)  |
| Microwave heating     | Resonance of water molecules         |
| Musical instruments   | Resonance of air columns and strings |

:::

:::

:::

:::

:::

:::

:::

:::

:::

:::
