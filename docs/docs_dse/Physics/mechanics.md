---
id: dse-physics-mechanics
title: Physics - Mechanics
description:
  'Rigorous DSE physics notes covering Physics - Mechanics. Includes definitions, derivations,
  worked examples, and exam-style problems.'
slug: physics-mechanics
---

## Kinematics

Kinematics is the study of motion without considering the forces that cause it. It describes the
Motion of objects using displacement, velocity, and acceleration.

### Displacement, Velocity, and Acceleration

| Quantity     | Symbol | SI Unit | Definition                              |
| ------------ | ------ | ------- | --------------------------------------- |
| Displacement | $s$    | m       | Distance moved in a specified direction |
| Velocity     | $v$    | m/s     | Rate of change of displacement          |
| Acceleration | $a$    | m/s$^2$ | Rate of change of velocity              |

Displacement is a vector quantity; it has both magnitude and direction. Speed is the scalar
Counterpart of velocity.

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

:::info These equations are only valid for **uniform acceleration**. When acceleration varies,
Calculus or graphical methods must be used. :::

### Worked Example 1

A car starts from rest and accelerates uniformly at $3 \mathrm{ m/s}^2$ for $5$ seconds. Find the
Distance travelled.

<details>
<summary>Solution</summary>

Using $s = ut + \frac{1}{2}at^2$:

$$s = 0 + \frac{1}{2}(3)(5)^2 = \frac{1}{2}(3)(25) = 37.5 \mathrm{ m}$$

### Worked Example 1b

A cyclist travelling at $8 \mathrm{ m/s}$ applies the brakes and decelerates uniformly at
$2 \mathrm{ m/s}^2$. Find the time taken to stop and the distance travelled during braking.

</details>
<summary>Solution</summary>

Using $v = u + at$ with $v = 0$:

$$0 = 8 + (-2)t$$

$$t = 4 \mathrm{ s}$$

Using $v^2 = u^2 + 2as$:

$$0 = 8^2 + 2(-2)s$$

$$s = \frac{64}{4} = 16 \mathrm{ m}$$

The cyclist takes $4 \mathrm{ s}$ to stop and travels $16 \mathrm{ m}$ during braking.

### Worked Example 2

A ball is thrown vertically upwards with initial velocity $20 \mathrm{ m/s}$. Find the maximum
Height reached and the time taken to reach it.

<details>
<summary>Solution</summary>

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

:::tip Tip Squares or integration. :::

### Free Fall

All objects in free fall near the Earth's surface experience the same acceleration due to gravity,
Denoted $g$:

$$g \approx 9.81 \mathrm{ m/s}^2$$

The acceleration is **downward** regardless of whether the object is moving up or down.

:::warning Air resistance is neglected in ideal free-fall problems unless the question explicitly
States otherwise. :::

### Worked Example 3

An object is dropped from a height of $80 \mathrm{ m}$. How long does it take to reach the ground?

</details>
<summary>Solution</summary>

$$s = ut + \frac{1}{2}gt^2$$

$$80 = 0 + \frac{1}{2}(9.81)t^2$$

$$t^2 = \frac{160}{9.81}$$

$$t = \sqrt{16.31} = 4.04 \mathrm{ s}$$

### Projectile Motion

Projectile motion is the motion of an object launched into the air at an angle. It can be analysed
By resolving the motion into horizontal and vertical components.

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

:::info Info They share only the common variable $t$ (time). :::

### Worked Example 4

A ball is thrown with initial velocity $15 \mathrm{ m/s}$ at $30^\circ$ above the horizontal. Find
The range and maximum height.

<details>
<summary>Solution</summary>

Horizontal component: $u_x = 15\cos 30^\circ = 12.99 \mathrm{ m/s}$

Vertical component: $u_y = 15\sin 30^\circ = 7.5 \mathrm{ m/s}$

Maximum height:

$$H = \frac{u_y^2}{2g} = \frac{7.5^2}{2(9.81)} = \frac{56.25}{19.62} = 2.87 \mathrm{ m}$$

Time of flight:

$$T = \frac{2u_y}{g} = \frac{2(7.5)}{9.81} = 1.53 \mathrm{ s}$$

Range:

$$R = u_x \times T = 12.99 \times 1.53 = 19.87 \mathrm{ m}$$

### Worked Example 4b

A stone is thrown horizontally from a cliff $60 \mathrm{ m}$ high with speed $15 \mathrm{ m/s}$.
Find the horizontal distance it travels before hitting the ground.

</details>
<summary>Solution</summary>

**Vertical motion** (to find time of flight):

$$s = ut + \frac{1}{2}gt^2$$

$$60 = 0 + \frac{1}{2}(9.81)t^2$$

$$t = \sqrt{\frac{120}{9.81}} = 3.50 \mathrm{ s}$$

**Horizontal motion:**

$$d = u_x \times t = 15 \times 3.50 = 52.5 \mathrm{ m}$$

---

## Dynamics

Dynamics is the study of forces and their effects on motion. The central principle is Newton's laws
Of motion.

### Newton's Laws of Motion

**First Law (Law of Inertia):** An object remains at rest or continues to move with uniform velocity
Unless acted upon by a resultant external force.

**Second Law:** The resultant force acting on an object is equal to the rate of change of momentum
Of the object:

$$F = \frac{\Delta p}{\Delta t} = \frac{d(mv)}{dt}$$

For constant mass:

$$F = ma$$

**Third Law:** If body `A` exerts a force on body `B`Then body `B` exerts an equal and opposite
Force on body `A`.

$$F_{AB} = -F_{BA}$$

:::warning Warning Together as they do not act on the same object. :::

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

A block of mass $5 \mathrm{ kg}$ is placed on a smooth inclined plane at $30^\circ$ to the
Horizontal. Find the acceleration down the plane.

<details>
<summary>Solution</summary>

Forces parallel to the plane: $mg\sin\theta = 5(9.81)\sin 30^\circ = 24.525 \mathrm{ N}$

Since the plane is smooth (no friction):

$$F = ma$$

$$24.525 = 5a$$

$$a = 4.91 \mathrm{ m/s}^2$$

### Worked Example 5b

Two objects of mass $3 \mathrm{ kg}$ and $5 \mathrm{ kg}$ are connected by a light inextensible
String over a smooth pulley (Atwood machine). Find the acceleration and the tension in the string.

</details>
<summary>Solution</summary>

For the $3 \mathrm{ kg}$ mass (let upward be positive):

$$T - 3g = 3a \quad \cdots (1)$$

For the $5 \mathrm{ kg}$ mass (let downward be positive):

$$5g - T = 5a \quad \cdots (2)$$

Adding (1) and (2):

$$2g = 8a$$

$$a = \frac{2g}{8} = \frac{19.62}{8} = 2.45 \mathrm{ m/s}^2$$

Substituting into (1):

$$T = 3(9.81 + 2.45) = 3 \times 12.26 = 36.79 \mathrm{ N}$$

### Friction

Friction opposes relative motion between two surfaces in contact.

- **Static friction** ($f_s$): prevents motion from starting; varies up to a maximum value
- **Kinetic friction** ($f_k$): opposes motion when surfaces are sliding; approximately constant

$$f_s \leqslant \mu_s N$$

$$f_k = \mu_k N$$

Where $\mu$ is the coefficient of friction and $N$ is the normal reaction force.

:::tip Tip :::

### Worked Example 6

A $10 \mathrm{ kg}$ block rests on a rough horizontal surface with $\mu = 0.3$. A horizontal force
Of $40 \mathrm{ N}$ is applied. Does the block move?

<details>
<summary>Solution</summary>

Normal reaction: $N = mg = 10 \times 9.81 = 98.1 \mathrm{ N}$

Maximum static friction: $f_s = 0.3 \times 98.1 = 29.43 \mathrm{ N}$

Applied force $= 40 \mathrm{ N} \gt 29.43 \mathrm{ N}$So the block moves.

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

:::info Info The motion. :::

### Worked Example 7

A roller coaster car of mass $500 \mathrm{ kg}$ starts from rest at point `A`$20 \mathrm{ m}$ Above
the ground. It descends to point `B`$5 \mathrm{ m}$ above the ground. Find its speed at `B`
Neglecting friction.

</details>
<summary>Solution</summary>

At `A`: $E_k = 0$$E_p = 500 \times 9.81 \times 20 = 98100 \mathrm{ J}$

At `B`: $E_k = \frac{1}{2}(500)v^2$$E_p = 500 \times 9.81 \times 5 = 24525 \mathrm{ J}$

By conservation of energy:

$$98100 = \frac{1}{2}(500)v^2 + 24525$$

$$\frac{1}{2}(500)v^2 = 73575$$

$$v^2 = \frac{147150}{500} = 294.3$$

$$v = 17.16 \mathrm{ m/s}$$

### Worked Example 7b

A $2 \mathrm{ kg}$ block slides down a rough inclined plane of length $5 \mathrm{ m}$ at $30^\circ$
To the horizontal. The coefficient of friction is $0.2$. Find the speed at the bottom starting from
Rest.

<details>
<summary>Solution</summary>

Force down the plane: $mg\sin 30^\circ = 2(9.81)(0.5) = 9.81 \mathrm{ N}$

Normal reaction: $N = mg\cos 30^\circ = 2(9.81)(0.866) = 16.99 \mathrm{ N}$

Friction: $f = \mu N = 0.2 \times 16.99 = 3.40 \mathrm{ N}$

Net force: $F = 9.81 - 3.40 = 6.41 \mathrm{ N}$

$$a = \frac{F}{m} = \frac{6.41}{2} = 3.205 \mathrm{ m/s}^2$$

$$v^2 = u^2 + 2as = 0 + 2(3.205)(5) = 32.05$$

$$v = 5.66 \mathrm{ m/s}$$

### Power

Power is the rate of doing work:

$$P = \frac{W}{t}$$

$$P = Fv$$

The SI unit of power is the watt (W), where $1 \mathrm{ W} = 1 \mathrm{ J/s}$.

### Worked Example 8

A car of mass $1200 \mathrm{ kg}$ travels at a constant speed of $20 \mathrm{ m/s}$ up a slope of
$\sin^{-1}(0.1)$. The total resistive force is $300 \mathrm{ N}$. Find the power output of the
Engine.

</details>
<summary>Solution</summary>

Component of weight along the slope:
$mg\sin\theta = 1200 \times 9.81 \times 0.1 = 1177.2 \mathrm{ N}$

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

:::tip Impulse is the area under a force-time graph. For a variable force, use $J = \int F \, dt$.
:::

### Worked Example 9

A $0.15 \mathrm{ kg}$ cricket ball travelling at $30 \mathrm{ m/s}$ is hit back along the same line
At $20 \mathrm{ m/s}$. If the bat is in contact with the ball for $0.005 \mathrm{ s}$Find the
Average force exerted.

<details>
<summary>Solution</summary>

Take the initial direction as positive.

$$\Delta p = m(v - u) = 0.15(-20 - 30) = 0.15(-50) = -7.5 \mathrm{ kg m/s}$$

$$F = \frac{\Delta p}{\Delta t} = \frac{-7.5}{0.005} = -1500 \mathrm{ N}$$

The negative sign indicates the force acts in the opposite direction to the initial motion. The
Magnitude of the average force is $1500 \mathrm{ N}$.

### Collisions

**Elastic collision:** Both momentum and kinetic energy are conserved.

**Inelastic collision:** Momentum is conserved but kinetic energy is not.

**Perfectly inelastic collision:** The objects stick together after collision (maximum kinetic
Energy loss).

:::info Momentum is **always** conserved in collisions (provided no external forces act). Kinetic
Energy is only conserved in perfectly elastic collisions. :::

### Worked Example 10

A $2 \mathrm{ kg}$ object moving at $5 \mathrm{ m/s}$ collides head-on with a $3 \mathrm{ kg}$
Object at rest. If the collision is perfectly inelastic, find the common velocity after collision.

</details>
<summary>Solution</summary>

By conservation of momentum:

$$m_1u_1 + m_2u_2 = (m_1 + m_2)v$$

$$2(5) + 3(0) = (2 + 3)v$$

$$10 = 5v$$

$$v = 2 \mathrm{ m/s}$$

### Worked Example 11 (Elastic Collision)

A $2 \mathrm{ kg}$ object moving at $5 \mathrm{ m/s}$ collides elastically with a $3 \mathrm{ kg}$
Object at rest. Find the velocities after collision.

<details>
<summary>Solution</summary>

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

The $2 \mathrm{ kg}$ object rebounds at $1 \mathrm{ m/s}$And the $3 \mathrm{ kg}$ object moves
Forward at $4 \mathrm{ m/s}$.

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
Centre:

$$a_c = \frac{v^2}{r} = \omega^2 r = \frac{4\pi^2 r}{T^2}$$

The centripetal force required is:

$$F_c = \frac{mv^2}{r} = m\omega^2 r$$

:::warning Warning Directed towards the centre of the circle. It is provided by gravity, tension,
friction, normal Reaction, or a combination of these. :::

### Worked Example 12

A car of mass $1000 \mathrm{ kg}$ travels around a roundabout of radius $25 \mathrm{ m}$ at
$10 \mathrm{ m/s}$. Find the centripetal force.

</details>
<summary>Solution</summary>

$$F_c = \frac{mv^2}{r} = \frac{1000 \times 10^2}{25} = \frac{100000}{25} = 4000 \mathrm{ N}$$

This force is provided by friction between the tyres and the road.

### Worked Example 13

A particle of mass $0.5 \mathrm{ kg}$ is attached to a string of length $0.8 \mathrm{ m}$ and
Whirled in a horizontal circle at $3 \mathrm{ rev/s}$. Find the tension in the string.

<details>
<summary>Solution</summary>

Angular velocity: $\omega = 2\pi \times 3 = 6\pi \mathrm{ rad/s}$

$$T = F_c = m\omega^2 r = 0.5 \times (6\pi)^2 \times 0.8$$

$$T = 0.5 \times 36\pi^2 \times 0.8 = 14.4\pi^2 = 142.1 \mathrm{ N}$$

### Worked Example 13b

A car of mass $800 \mathrm{ kg}$ travels at $15 \mathrm{ m/s}$ around a banked curve of radius
$50 \mathrm{ m}$ and angle $20^\circ$. Find the normal reaction force and the frictional force
Required if the car does not rely on friction alone.

</details>
<summary>Solution</summary>

Resolving vertically: $N\cos 20^\circ = mg$

$$N = \frac{800 \times 9.81}{\cos 20^\circ} = \frac{7848}{0.9397} = 8352 \mathrm{ N}$$

Resolving horizontally (centripetal direction):

$$N\sin 20^\circ + f = \frac{mv^2}{r}$$

$$8352 \times 0.342 + f = \frac{800 \times 225}{50}$$

$$2856 + f = 3600$$

$$f = 744 \mathrm{ N}$$

### Vertical Circular Motion

For an object moving in a vertical circle, the speed is not constant because gravity does work on
The object.

At the top of the circle:

$$T + mg = \frac{mv_{\mathrm{top}}^2}{r}$$

At the bottom of the circle:

$$T - mg = \frac{mv_{\mathrm{bottom}}^2}{r}$$

For the object to complete the full circle, the tension at the top must satisfy $T \geqslant 0$
Giving:

$$v_{\mathrm{top}} \geqslant \sqrt{gr}$$

---

## Gravitation

### Newton's Law of Universal Gravitation

Every particle attracts every other particle with a force that is proportional to the product of
Their masses and inversely proportional to the square of the distance between them:

$$F = \frac{Gm_1m_2}{r^2}$$

Where $G = 6.67 \times 10^{-11} \mathrm{ N m}^2 \mathrm{ kg}^{-2}$ is the universal gravitational
Constant.

### Gravitational Field Strength

The gravitational field strength at a point is the force per unit mass placed at that point:

$$g = \frac{F}{m} = \frac{GM}{r^2}$$

Near the Earth's surface, $g \approx 9.81 \mathrm{ N/kg}$.

### Gravitational Potential Energy

For two masses separated by distance $r$:

$$E_p = -\frac{GMm}{r}$$

The negative sign indicates that work must be done against gravity to separate the masses to
Infinity (where $E_p = 0$).

### Orbital Motion

For a satellite of mass $m$ orbiting a planet of mass $M$ at radius $r$:

$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

$$v = \sqrt{\frac{GM}{r}}$$

Orbital period:

$$T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}$$

:::info Geostationary satellites orbit at the same rate as the Earth's rotation (period = 24 hours),
Remaining above the same point on the equator. They orbit at approximately $42,300 \mathrm{ km}$
From the centre of the Earth. :::

### Worked Example 14

Find the orbital speed of a satellite orbiting the Earth at a height of $300 \mathrm{ km}$ above the
Surface. (Earth's radius $= 6.37 \times 10^6 \mathrm{ m}$Earth's mass
$= 5.97 \times 10^{24} \mathrm{ kg}$)

<details>
<summary>Solution</summary>

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

</details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** A stone is thrown horizontally from a cliff $60 \mathrm{ m}$ high with speed
$15 \mathrm{ m/s}$. Find the horizontal distance it travels before hitting the ground.

### Details

<summary>Solution</summary>

Vertical motion: $60 = \frac{1}{2}(9.81)t^2$So $t = \sqrt{\frac{120}{9.81}} = 3.50 \mathrm{ s}$

Horizontal distance: $d = 15 \times 3.50 = 52.5 \mathrm{ m}$

**Question 2:** Two objects of mass $3 \mathrm{ kg}$ and $5 \mathrm{ kg}$ are connected by a light
Inextensible string over a smooth pulley. Find the acceleration and the tension.

<details>
<summary>Solution</summary>

$$a = \frac{(m_2 - m_1)g}{m_1 + m_2} = \frac{(5 - 3)(9.81)}{3 + 5} = \frac{19.62}{8} = 2.45 \mathrm{ m/s}^2$$

$$T = \frac{2m_1m_2g}{m_1 + m_2} = \frac{2(3)(5)(9.81)}{8} = 36.79 \mathrm{ N}$$

**Question 3:** A $0.5 \mathrm{ kg}$ ball is dropped from a height of $2 \mathrm{ m}$ onto a hard
Floor and rebounds to $1.5 \mathrm{ m}$. Find the impulse exerted by the floor.

</details>
<summary>Solution</summary>

Velocity just before impact: $v = \sqrt{2gh} = \sqrt{2(9.81)(2)} = 6.26 \mathrm{ m/s}$ (downward)

Velocity just after rebound: $v = \sqrt{2(9.81)(1.5)} = 5.42 \mathrm{ m/s}$ (upward)

Taking upward as positive: $\Delta p = 0.5(5.42 - (-6.26)) = 0.5(11.68) = 5.84 \mathrm{ kg m/s}$

Impulse $= 5.84 \mathrm{ N s}$ (upward)

**Question 4:** A $3 \mathrm{ kg}$ object slides down a rough inclined plane of length
$5 \mathrm{ m}$ at $30^\circ$ to the horizontal. The coefficient of friction is $0.2$. Find the
Speed at the bottom if the object starts from rest.

<details>
<summary>Solution</summary>

Force down the plane: $mg\sin 30^\circ = 3(9.81)(0.5) = 14.715 \mathrm{ N}$

Normal reaction: $N = mg\cos 30^\circ = 3(9.81)(0.866) = 25.49 \mathrm{ N}$

Friction: $f = \mu N = 0.2 \times 25.49 = 5.10 \mathrm{ N}$

Net force down the plane: $F = 14.715 - 5.10 = 9.615 \mathrm{ N}$

$$a = \frac{F}{m} = \frac{9.615}{3} = 3.205 \mathrm{ m/s}^2$$

$$v^2 = u^2 + 2as = 0 + 2(3.205)(5) = 32.05$$

$$v = 5.66 \mathrm{ m/s}$$

**Question 5:** A satellite orbits the Earth at a height of $500 \mathrm{ km}$. Given the Earth's
Mass is $5.97 \times 10^{24} \mathrm{ kg}$ and radius is $6.37 \times 10^6 \mathrm{ m}$Find the
Orbital period.

</details>
<summary>Solution</summary>

$$r = 6.37 \times 10^6 + 500 \times 10^3 = 6.87 \times 10^6 \mathrm{ m}$$

$$v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.87 \times 10^6}} = \sqrt{5.79 \times 10^7} = 7611 \mathrm{ m/s}$$

$$T = \frac{2\pi r}{v} = \frac{2\pi \times 6.87 \times 10^6}{7611} = 5671 \mathrm{ s} = 94.5 \mathrm{ minutes}$$

---

## Simple Harmonic Motion

### Definition

Simple harmonic motion (SHM) is a type of periodic motion where the restoring force is directly
Proportional to the displacement from the equilibrium position and acts in the opposite direction.

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

:::info The period of SHM is independent of amplitude (isochronous). This is why pendulum clocks
Keep consistent time even as the swing gradually decreases. :::

### Worked Example 15

A mass of $0.5 \mathrm{ kg}$ is attached to a spring with constant $200 \mathrm{ N/m}$ and displaced
$0.05 \mathrm{ m}$ from equilibrium. Find the period, maximum velocity, and maximum acceleration.

<details>
<summary>Solution</summary>

$$T = 2\pi\sqrt{\frac{m}{k}} = 2\pi\sqrt{\frac{0.5}{200}} = 2\pi\sqrt{0.0025} = 2\pi \times 0.05 = 0.314 \mathrm{ s}$$

$$\omega = \frac{2\pi}{T} = \frac{2\pi}{0.314} = 20.0 \mathrm{ rad/s}$$

$$v_{\max} = \omega A = 20.0 \times 0.05 = 1.00 \mathrm{ m/s}$$

$$a_{\max} = \omega^2 A = 400 \times 0.05 = 20.0 \mathrm{ m/s}^2$$

</details>

### Worked Example 16

A simple pendulum has a length of $1.0 \mathrm{ m}$. Find its period.

<details>
<summary>Solution</summary>

$$T = 2\pi\sqrt{\frac{L}{g}} = 2\pi\sqrt{\frac{1.0}{9.81}} = 2\pi \times 0.319 = 2.01 \mathrm{ s}$$

</details>

---

## Energy in SHM

In SHM, kinetic energy and potential energy continuously interchange, but the total energy remains
Constant.

$$E_k = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2(A^2 - x^2)$$

$$E_p = \frac{1}{2}kx^2 = \frac{1}{2}m\omega^2 x^2$$

$$E_{\mathrm{total}} = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}kA^2$$

At equilibrium ($x = 0$): all energy is kinetic ($E_k = E_{\mathrm{total}}$)

At maximum displacement ($x = A$): all energy is potential ($E_p = E_{\mathrm{total}}$)

### Worked Example 17

A mass-spring system has mass $0.2 \mathrm{ kg}$Spring constant $80 \mathrm{ N/m}$And amplitude
$0.03 \mathrm{ m}$. Find the total energy and the speed when the displacement is $0.02 \mathrm{ m}$.

<details>
<summary>Solution</summary>

$$E_{\mathrm{total}} = \frac{1}{2}kA^2 = \frac{1}{2}(80)(0.03)^2 = \frac{1}{2}(80)(0.0009) = 0.036 \mathrm{ J}$$

At $x = 0.02 \mathrm{ m}$:

$$E_k = E_{\mathrm{total}} - E_p = 0.036 - \frac{1}{2}(80)(0.02)^2 = 0.036 - 0.016 = 0.020 \mathrm{ J}$$

$$v = \sqrt{\frac{2E_k}{m}} = \sqrt{\frac{2 \times 0.020}{0.2}} = \sqrt{0.20} = 0.447 \mathrm{ m/s}$$

</details>

---

## Damping and Forced Oscillations

### Damping

Damping is the reduction in amplitude of oscillations due to energy loss ( to friction or air
Resistance).

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

---

## Problem Set

<details>
<summary>Problem 1: SUVAT — Deceleration</summary>

A car travelling at $25 \mathrm{ m/s}$ decelerates uniformly to rest in $4 \mathrm{ s}$. Find the
Deceleration and the distance travelled.

</details>
<details>
<summary>Solution</summary>

$$v = u + at \implies 0 = 25 + a(4) \implies a = -6.25 \mathrm{ m/s}^2$$

$$s = ut + \frac{1}{2}at^2 = 25(4) + \frac{1}{2}(-6.25)(16) = 100 - 50 = 50 \mathrm{ m}$$

_If you get this wrong, revise: SUVAT equations and the sign convention for deceleration._

</details>

<details>
<summary>Problem 2: Projectile — Maximum Height and Range</summary>

A ball is thrown with speed $20 \mathrm{ m/s}$ at $45^\circ$ above the horizontal. Find the maximum
Height and the horizontal range.

</details>
<summary>Solution</summary>

$$u_x = 20\cos 45^\circ = 14.14 \mathrm{ m/s}$$

$$u_y = 20\sin 45^\circ = 14.14 \mathrm{ m/s}$$

$$H = \frac{u_y^2}{2g} = \frac{14.14^2}{2(9.81)} = \frac{200}{19.62} = 10.19 \mathrm{ m}$$

$$R = \frac{u^2 \sin 2\theta}{g} = \frac{400 \times \sin 90^\circ}{9.81} = \frac{400}{9.81} = 40.77 \mathrm{ m}$$

_If you get this wrong, revise: Projectile motion formulas for maximum height and range._

<details>
<summary>Problem 3: Newton's Second Law — Inclined Plane</summary>

A $4 \mathrm{ kg}$ block is placed on a rough inclined plane at $35^\circ$ to the horizontal. The
Coefficient of kinetic friction is $0.25$. Find the acceleration of the block sliding down.

</details>
<details>
<summary>Solution</summary>

$$F_{\parallel} = mg\sin 35^\circ = 4 \times 9.81 \times 0.5736 = 22.51 \mathrm{ N}$$

$$N = mg\cos 35^\circ = 4 \times 9.81 \times 0.8192 = 32.15 \mathrm{ N}$$

$$f_k = \mu_k N = 0.25 \times 32.15 = 8.04 \mathrm{ N}$$

$$F_{\mathrm{net}} = 22.51 - 8.04 = 14.47 \mathrm{ N}$$

$$a = \frac{14.47}{4} = 3.62 \mathrm{ m/s}^2$$

_If you get this wrong, revise: Forces on an inclined plane and kinetic friction._

</details>

<details>
<summary>Problem 4: Conservation of Energy with Friction</summary>

A $1.5 \mathrm{ kg}$ block slides from rest down a curved frictionless ramp of height
$3 \mathrm{ m}$ Onto a rough horizontal surface. The coefficient of friction on the horizontal
surface is $0.3$. How far does the block slide before stopping?

</details>
<summary>Solution</summary>

By conservation of energy, the kinetic energy at the bottom of the ramp equals the potential energy
At the top:

$$E_k = mgh = 1.5 \times 9.81 \times 3 = 44.15 \mathrm{ J}$$

This energy is dissipated by friction on the horizontal surface:

$$E_k = f_k \times d = \mu mg \times d$$

$$44.15 = 0.3 \times 1.5 \times 9.81 \times d = 4.41d$$

$$d = \frac{44.15}{4.41} = 10.01 \mathrm{ m}$$

_If you get this wrong, revise: Conservation of energy and work done against friction._

<details>
<summary>Problem 5: Elastic Collision — Equal Masses</summary>

A ball of mass $2 \mathrm{ kg}$ moving at $6 \mathrm{ m/s}$ collides elastically with a stationary
Ball of the same mass. Find the velocities after collision.

</details>
<details>
<summary>Solution</summary>

For an elastic collision between equal masses, the balls exchange velocities:

$$v_1 = 0 \mathrm{ m/s}, \quad v_2 = 6 \mathrm{ m/s}$$

**Verification:**

Conservation of momentum: $2(6) + 2(0) = 2(0) + 2(6) = 12$ ✓

Conservation of KE: $\frac{1}{2}(2)(36) = 36 = \frac{1}{2}(2)(0) + \frac{1}{2}(2)(36) = 36$ ✓

_If you get this wrong, revise: Elastic collisions between equal masses and conservation laws._

</details>

<details>
<summary>Problem 6: Impulse from Force-Time Graph</summary>

A force-time graph shows a constant force of $50 \mathrm{ N}$ acting for $0.1 \mathrm{ s}$Followed
By a linearly decreasing force from $50 \mathrm{ N}$ to $0 \mathrm{ N}$ over the next
$0.2 \mathrm{ s}$. Find the impulse and the change in velocity of a $5 \mathrm{ kg}$ object.

</details>
<summary>Solution</summary>

Impulse = area under the F-t graph:

First part: $50 \times 0.1 = 5.0 \mathrm{ N s}$

Second part: $\frac{1}{2} \times 50 \times 0.2 = 5.0 \mathrm{ N s}$

Total impulse: $J = 5.0 + 5.0 = 10.0 \mathrm{ N s}$

$$\Delta v = \frac{J}{m} = \frac{10.0}{5} = 2.0 \mathrm{ m/s}$$

_If you get this wrong, revise: Impulse as the area under a force-time graph and the
impulse-momentum Theorem._

<details>
<summary>Problem 7: Centripetal Force — Conical Pendulum</summary>

A conical pendulum consists of a $0.5 \mathrm{ kg}$ mass on a string of length $1.0 \mathrm{ m}$
Swinging in a horizontal circle of radius $0.8 \mathrm{ m}$. Find the tension and the speed of the
Mass.

</details>
<details>
<summary>Solution</summary>

The string makes an angle with the vertical. The vertical component of tension balances weight:

$$T\cos\theta = mg$$

The horizontal component provides centripetal force:

$$T\sin\theta = \frac{mv^2}{r}$$

The string length is $L = 1.0 \mathrm{ m}$ and the radius is $r = 0.8 \mathrm{ m}$So:

$$\sin\theta = \frac{r}{L} = 0.8, \quad \cos\theta = 0.6$$

$$T = \frac{mg}{\cos\theta} = \frac{0.5 \times 9.81}{0.6} = 8.175 \mathrm{ N}$$

$$T\sin\theta = \frac{mv^2}{r} \implies 8.175 \times 0.8 = \frac{0.5v^2}{0.8}$$

$$v^2 = \frac{8.175 \times 0.8 \times 0.8}{0.5} = 10.46$$

$$v = 3.23 \mathrm{ m/s}$$

_If you get this wrong, revise: Circular motion in a vertical plane and resolving forces for conical
Pendulums._

</details>

<details>
<summary>Problem 8: Gravitational Field Strength — Above Surface</summary>

Find the gravitational field strength at a height of $300 \mathrm{ km}$ above the Earth's surface.
(Earth's radius $= 6.37 \times 10^6 \mathrm{ m}$Earth's mass $= 5.97 \times 10^{24} \mathrm{ kg}$)

</details>
<summary>Solution</summary>

$$r = 6.37 \times 10^6 + 3.0 \times 10^5 = 6.67 \times 10^6 \mathrm{ m}$$

$$g = \frac{GM}{r^2} = \frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{(6.67 \times 10^6)^2}$$

$$g = \frac{3.982 \times 10^{14}}{4.449 \times 10^{13}} = 8.95 \mathrm{ N/kg}$$

This is less than $9.81 \mathrm{ N/kg}$ at the surface, as expected.

_If you get this wrong, revise: Newton's law of gravitation and gravitational field strength at a
Distance from a spherical body._

<details>
<summary>Problem 9: SHM — Finding Velocity at a Given Displacement</summary>

A mass-spring system has mass $0.3 \mathrm{ kg}$Spring constant $120 \mathrm{ N/m}$And amplitude
$0.04 \mathrm{ m}$. Find the velocity when the displacement is $0.02 \mathrm{ m}$.

</details>
<details>
<summary>Solution</summary>

$$\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{120}{0.3}} = \sqrt{400} = 20 \mathrm{ rad/s}$$

$$v = \pm\omega\sqrt{A^2 - x^2} = 20\sqrt{0.04^2 - 0.02^2} = 20\sqrt{0.0016 - 0.0004} = 20\sqrt{0.0012}$$

$$v = 20 \times 0.0346 = 0.693 \mathrm{ m/s}$$

_If you get this wrong, revise: SHM velocity equation and the relationship between velocity and
Displacement._

</details>

<details>
<summary>Problem 10: Simple Pendulum — Finding Length</summary>

A simple pendulum has a period of $2.5 \mathrm{ s}$. Find its length.

</details>
<summary>Solution</summary>

$$T = 2\pi\sqrt{\frac{L}{g}}$$

$$\frac{T}{2\pi} = \sqrt{\frac{L}{g}}$$

$$\frac{L}{g} = \left(\frac{T}{2\pi}\right)^2 = \left(\frac{2.5}{2\pi}\right)^2 = (0.3979)^2 = 0.1583$$

$$L = 0.1583 \times 9.81 = 1.55 \mathrm{ m}$$

_If you get this wrong, revise: Simple pendulum period formula and rearranging it to find $L$._

<details>
<summary>Problem 11: Work Done by a Spring</summary>

A spring with constant $500 \mathrm{ N/m}$ is stretched $0.08 \mathrm{ m}$ from its natural length.
Find the work done and the elastic potential energy stored.

</details>
<details>
<summary>Solution</summary>

$$W = \frac{1}{2}kx^2 = \frac{1}{2}(500)(0.08)^2 = \frac{1}{2}(500)(0.0064) = 1.6 \mathrm{ J}$$

The work done equals the elastic potential energy stored: $E_p = 1.6 \mathrm{ J}$.

_If you get this wrong, revise: Hooke's law and work done in stretching a spring._

</details>

<details>
<summary>Problem 12: Power on an Incline</summary>

A $60 \mathrm{ kg}$ person runs up a flight of stairs of vertical height $5 \mathrm{ m}$ in
$8 \mathrm{ s}$. Find the average power developed.

</details>
<summary>Solution</summary>

$$W = mgh = 60 \times 9.81 \times 5 = 2943 \mathrm{ J}$$

$$P = \frac{W}{t} = \frac{2943}{8} = 367.9 \mathrm{ W}$$

_If you get this wrong, revise: Work done against gravity and the definition of power._

<details>
<summary>Problem 13: Vertical Circular Motion — Minimum Speed</summary>

A bucket of water of mass $0.8 \mathrm{ kg}$ is whirled in a vertical circle of radius
$0.6 \mathrm{ m}$. Find the minimum speed at the top of the circle for the water to remain in the
bucket.

</details>
<details>
<summary>Solution</summary>

At the top of the circle, the minimum condition is when the normal reaction (or tension) is zero:

$$mg = \frac{mv_{\mathrm{top}}^2}{r}$$

$$v_{\mathrm{top}} = \sqrt{gr} = \sqrt{9.81 \times 0.6} = \sqrt{5.886} = 2.43 \mathrm{ m/s}$$

_If you get this wrong, revise: Vertical circular motion and the minimum speed condition at the top
of The circle._

</details>

<details>
<summary>Problem 14: Geostationary Orbit</summary>

A geostationary satellite orbits at a distance of $4.23 \times 10^7 \mathrm{ m}$ from the centre of
The Earth. Find its orbital speed and verify that the orbital period is approximately 24 hours.
(Earth's mass $= 5.97 \times 10^{24} \mathrm{ kg}$)

</details>
<summary>Solution</summary>

$$v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{4.23 \times 10^7}}$$

$$v = \sqrt{9.41 \times 10^6} = 3068 \mathrm{ m/s}$$

$$T = \frac{2\pi r}{v} = \frac{2\pi \times 4.23 \times 10^7}{3068} = 86600 \mathrm{ s} = 24.06 \mathrm{ hours}$$

This confirms the geostationary orbit period is approximately 24 hours.

_If you get this wrong, revise: Orbital motion, orbital speed, and orbital period formulas._

<details>
<summary>Problem 15: Energy in SHM — Fraction of KE</summary>

A mass-spring system oscillates with amplitude $A$. At what displacement is the kinetic energy equal
To half the total energy?

</details>
<details>
<summary>Solution</summary>

$$E_k = \frac{1}{2}E_{\mathrm{total}}$$

$$\frac{1}{2}m\omega^2(A^2 - x^2) = \frac{1}{2} \times \frac{1}{2}m\omega^2 A^2$$

$$A^2 - x^2 = \frac{A^2}{2}$$

$$x^2 = \frac{A^2}{2}$$

$$x = \pm\frac{A}{\sqrt{2}} = \pm 0.707A$$

The KE equals half the total energy at $x = \pm 0.707A$ from equilibrium.

For the A-Level treatment of this topic, see
[Kinematics](https://alevel.wyattau.com/docs/physics/mechanics/kinematics).

_If you get this wrong, revise: Energy exchange in SHM and the expressions for $E_k$ and $E_p$ as
Functions of displacement._

</details>

---

:::tip Diagnostic Test Ready to test your understanding of **Mechanics**? The
[diagnostic test](/docs/dse/Physics/diagnostics/diag-mechanics) contains the hardest questions
within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Mechanics
with other physics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/dse/Physics/diagnostics/diagnostic-guide) for instructions on
self-marking and building a personal test matrix. :::

:::danger Common Pitfalls

- **Forgetting to resolve forces into components:** When an object is on an inclined plane, the
  weight (mg) must be resolved into components parallel to and perpendicular to the surface. The
  component parallel to the slope is mg sin(theta) and perpendicular is mg cos(theta). Students
  often use the wrong trigonometric function or forget to resolve at all.

- **Confusing speed and velocity in projectile motion:** In projectile motion, the horizontal
  VELOCITY is constant (no horizontal acceleration), but the vertical velocity changes due to
  gravity. The speed (magnitude of velocity) changes throughout the flight because the vertical
  component changes. At the maximum height, the vertical velocity is zero but the horizontal
  velocity is unchanged.

- **Applying conservation of energy when friction is present:** Mechanical energy (KE + PE) is only
  conserved when no non-conservative forces act. If friction is mentioned, work done against
  friction must be subtracted: KE_initial + PE_initial = KE_final + PE_final + energy lost to
  friction. Ignoring friction leads to an overestimate of the final speed.

- **Misidentifying the direction of the normal reaction force:** The normal reaction force is always
  PERPENDICULAR to the surface of contact, not necessarily vertical. On an inclined plane, the
  normal reaction is perpendicular to the slope, not straight up. Including a vertical normal force
  on a slope is a common error that leads to incorrect force resolution.

---

## Derivations

### Derivation: Velocity-Time Graph for Projectile Motion

For a projectile launched at angle $\theta$ with initial speed $u$:

**Horizontal component:** $v_x = u\cos\theta = \mathrm{constant}$ (no horizontal force)

**Vertical component:** $v_y = u\sin\theta - gt$

The resultant velocity at any time:

$$v = \sqrt{v_x^2 + v_y^2} = \sqrt{(u\cos\theta)^2 + (u\sin\theta - gt)^2}$$

At maximum height: $v_y = 0$So $t_{\max} = \frac{u\sin\theta}{g}$ and $v_{\max\ h} = u\cos\theta$.

The angle of the velocity vector below the horizontal at time $t$:
$\alpha = \tan^{-1}\left(\frac{gt - u\sin\theta}{u\cos\theta}\right)$

### Derivation: Work Done by a Variable Force (General)

For a force $F(x)$ that varies with position, the work done from $x_1$ to $x_2$ is:

$$W = \int_{x_1}^{x_2} F(x)\, dx$$

This equals the area under the force-displacement graph.

**Special case: Hooke's law ($F = kx$):**

$$W = \int_0^x kx'\, dx' = \frac{1}{2}kx^2$$

**Special case: Inverse square force ($F = A/x^2$):**

$$W = \int_{x_1}^{x_2} \frac{A}{x^2}\, dx = \left[-\frac{A}{x}\right]_{x_1}^{x_2} = A\left(\frac{1}{x_1} - \frac{1}{x_2}\right)$$

This applies to gravitational and electrostatic forces.

### Derivation: Time of Flight for a Projectile on an Elevated Launch

When a projectile is launched from height $h$ above the landing level:

Vertical: $y = u_y t - \frac{1}{2}gt^2$

At landing: $-h = u\sin\theta \cdot t - \frac{1}{2}gt^2$

$$\frac{1}{2}gt^2 - u\sin\theta \cdot t - h = 0$$

Using the quadratic formula:

$$t = \frac{u\sin\theta + \sqrt{u^2\sin^2\theta + 2gh}}{g}$$

(The positive root is taken since time must be positive.)

The horizontal range is:
$R = u\cos\theta \cdot t = u\cos\theta \cdot \frac{u\sin\theta + \sqrt{u^2\sin^2\theta + 2gh}}{g}$

---

## Experimental Methods

### Determining the Acceleration of Free Fall Using a Simple Pendulum

**Apparatus:** A string, a small dense bob, a retort stand, a protractor, a metre rule, and a
Stopwatch.

**Procedure:**

1. Set up the pendulum with a string of length $L$ (measured from the pivot to the centre of the
   bob).
2. Displace the bob through a small angle ($< 10^\circ$) and release it.
3. Time 20 complete oscillations and divide by 20 to find the period $T$.
4. Repeat for different lengths $L$.
5. Plot $T^2$ (y-axis) versus $L$ (x-axis). The gradient equals $4\pi^2/g$.

**Theory:** For small angles, $T = 2\pi\sqrt{L/g}$So $T^2 = \frac{4\pi^2}{g}L$.

**Sources of error:**

- The angle may not be small enough for the simple pendulum approximation.
- The string may stretch slightly.
- Reaction time of the stopwatch operator (reduced by timing many oscillations).
- The pivot may not be perfectly fixed.

**Improvements:** Use a light gate for timing. Use an inextensible wire. Ensure small angles.

### Verifying the Principle of Conservation of Momentum

**Apparatus:** Two trolleys on a friction-compensated track, light gates, and a data logger.

**Procedure:**

1. Set up the track so a single trolley moves at constant velocity (friction compensated).
2. Measure the mass of each trolley: $m_1$ and $m_2$.
3. Launch trolley 1 towards stationary trolley 2. Use light gates to measure velocities before
   ($u_1$$u_2 = 0$) and after ($v_1$$v_2$) the collision.
4. Calculate total momentum before: $p_{\mathrm{before}} = m_1 u_1 + m_2 u_2$
5. Calculate total momentum after: $p_{\mathrm{after}} = m_1 v_1 + m_2 v_2$
6. Compare $p_{\mathrm{before}}$ and $p_{\mathrm{after}}$. They should be approximately equal.
7. Repeat for different masses and initial velocities.
8. Also calculate KE before and after to determine if the collision is elastic.

**Expected results:** Momentum is conserved in all collisions. KE is conserved only in elastic
Collisions.

### Measuring the Spring Constant Dynamically

**Apparatus:** A spring, a set of masses, a motion sensor or video camera, and a metre rule.

**Procedure:**

1. Hang a spring vertically and attach a mass $m$.
2. Displace the mass downward and release, setting up simple harmonic motion.
3. Measure the period $T$ of oscillation.
4. Repeat for different masses.
5. Plot $T^2$ (y-axis) versus $m$ (x-axis). The gradient equals $4\pi^2/k$.

**Theory:** $T = 2\pi\sqrt{m/k}$So $T^2 = \frac{4\pi^2}{k}m$.

**Comparison with static method:** The static method (measuring extension under load) gives
$k = F/x$. The dynamic method gives $k = 4\pi^2 m / T^2$. Both should agree if Hooke's law Is
obeyed.

---

## Additional Worked Examples

### Worked Example 11

A block of mass $5.0 \mathrm{ kg}$ slides from rest down a curved ramp from height
$3.0 \mathrm{ m}$. At the bottom, it collides with and sticks to a stationary block of mass
$3.0 \mathrm{ kg}$. The combined blocks then slide across a rough horizontal surface ($\mu_k = 0.3$)
before coming to rest. Find the total distance travelled on the rough surface.

<details>
<summary>Solution</summary>

Speed at bottom of ramp (conservation of energy, no friction):

$$v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 3.0} = \sqrt{58.86} = 7.67 \mathrm{ m/s}$$

Perfectly inelastic collision: $(m_1 + m_2)v' = m_1 v$

$$v' = \frac{m_1 v}{m_1 + m_2} = \frac{5.0 \times 7.67}{8.0} = 4.79 \mathrm{ m/s}$$

Energy dissipated on rough surface = initial KE of combined blocks:

$$\frac{1}{2}(8.0)(4.79)^2 = \mu_k (8.0)(9.81) d$$

$$91.8 = 23.5d$$

$$d = \frac{91.8}{23.5} = 3.90 \mathrm{ m}$$

</details>

### Worked Example 12

A rocket of mass $1000 \mathrm{ kg}$ is launched vertically from rest. The engine provides a
Constant thrust of $25000 \mathrm{ N}$ for $10 \mathrm{ s}$. The mass decreases at a constant Rate
as fuel is burned. Assume $g = 9.81 \mathrm{ m/s}^2$ and neglect air resistance.

(a) If the fuel burn rate is $50 \mathrm{ kg/s}$Calculate the velocity of the rocket at Burnout
($t = 10 \mathrm{ s}$).

(b) Calculate the height of the rocket at burnout.

<details>
<summary>Solution</summary>

(a) This requires the rocket equation, but for DSE we simplify. The average mass during the burn:

$$m_{\mathrm{avg}} = \frac{1000 + (1000 - 50 \times 10)}{2} = \frac{1000 + 500}{2} = 750 \mathrm{ kg}$$

Average net force:
$F_{\mathrm{net}} = T - m_{\mathrm{avg}}g = 25000 - 750 \times 9.81 = 25000 - 7358 = 17642 \mathrm{ N}$

Average acceleration: $a = F_{\mathrm{net}} / m_{\mathrm{avg}} = 17642 / 750 = 23.5 \mathrm{ m/s}^2$

Velocity at burnout: $v = at = 23.5 \times 10 = 235 \mathrm{ m/s}$

(More precisely, the acceleration increases as mass decreases, so the actual velocity is higher. For
a full treatment, use $v = v_0 + u\ln(m_0/m_f) - gt$But this is beyond the DSE scope.)

(b) Using average acceleration: $h = \frac{1}{2}at^2 = \frac{1}{2}(23.5)(100) = 1175 \mathrm{ m}$

</details>

### Worked Example 13

A uniform ladder of length $5.0 \mathrm{ m}$ and mass $20 \mathrm{ kg}$ leans against a smooth
Vertical wall at angle $\theta = 65^\circ$ to the horizontal. The floor is rough. A person of Mass
$70 \mathrm{ kg}$ stands on the ladder at a distance of $3.0 \mathrm{ m}$ from the bottom. Find the
minimum coefficient of static friction between the ladder and the floor for the Ladder to be in
equilibrium.

<details>
<summary>Solution</summary>

Forces: weight of ladder $20g$ (at centre, $2.5 \mathrm{ m}$ from bottom), weight of person $70g$
(at $3.0 \mathrm{ m}$ from bottom), normal reaction from wall $R_W$ (horizontal, at Top), normal
reaction from floor $R_F$ (vertical, at bottom), friction $f$ (horizontal, at Bottom).

Resolving vertically: $R_F = 20g + 70g = 90g = 882.9 \mathrm{ N}$

Resolving horizontally: $f = R_W$

Taking moments about the bottom of the ladder:

Clockwise: $20g \times 2.5\cos 65^\circ + 70g \times 3.0\cos 65^\circ$

Anticlockwise: $R_W \times 5.0\sin 65^\circ$

$$R_W \times 5.0\sin 65^\circ = g\cos 65^\circ(20 \times 2.5 + 70 \times 3.0)$$

$$R_W \times 4.532 = 9.81 \times 0.4226 \times (50 + 210)$$

$$R_W \times 4.532 = 4.146 \times 260 = 1078$$

$$R_W = 237.8 \mathrm{ N}$$

For equilibrium: $f \leqslant \mu_s R_F$

$$\mu_s \geqslant \frac{f}{R_F} = \frac{R_W}{R_F} = \frac{237.8}{882.9} = 0.269$$

Minimum coefficient of static friction: $\mu_s = 0.27$.

</details>

---

## Exam-Style Questions

### Question 1 (DSE Structured)

A $0.50 \mathrm{ kg}$ ball is attached to a string of length $1.0 \mathrm{ m}$ and released from
Rest when the string makes $60^\circ$ with the vertical.

(a) Calculate the speed of the ball at the lowest point.

(b) Calculate the tension in the string at the lowest point.

(c) Calculate the speed of the ball when the string makes $30^\circ$ with the vertical on the Other
side.

(d) Explain why the ball does not reach $60^\circ$ on the other side if air resistance is Present.

<details>
<summary>Solution</summary>

(a) Height drop: $h = L(1 - \cos 60^\circ) = 1.0(1 - 0.5) = 0.50 \mathrm{ m}$

$$v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 0.50} = \sqrt{9.81} = 3.13 \mathrm{ m/s}$$

(b) At the lowest point: $T - mg = \frac{mv^2}{L}$

$$T = mg + \frac{mv^2}{L} = 0.50 \times 9.81 + \frac{0.50 \times 9.81}{1.0} = 4.905 + 4.905 = 9.81 \mathrm{ N}$$

(c) At $30^\circ$ on the other side: height above lowest point
$= L(1 - \cos 30^\circ) = 1.0(1 - 0.866) = 0.134 \mathrm{ m}$

$$v^2 = 2g(h_{\mathrm{start}} - h_{\mathrm{current}}) = 2 \times 9.81 \times (0.50 - 0.134) = 2 \times 9.81 \times 0.366 = 7.18$$

$$v = \sqrt{7.18} = 2.68 \mathrm{ m/s}$$

(d) Air resistance does negative work on the ball, dissipating energy as heat. The total Mechanical
energy decreases, so the ball cannot reach the same height on the other side. The Final height will
be less than the initial height by an amount equal to the total energy lost To air resistance.

</details>

### Question 2 (DSE Structured)

Two ice skaters, A ($60 \mathrm{ kg}$) and B ($80 \mathrm{ kg}$), face each other on frictionless
Ice. They push off each other and A moves away at $3.0 \mathrm{ m/s}$.

(a) Calculate the velocity of B after the push.

(b) Calculate the kinetic energy of each skater after the push.

(c) Explain why the total kinetic energy increases during the push.

(d) If A had pushed harder so that A's speed was $4.0 \mathrm{ m/s}$Calculate the speed of B And the
change in total kinetic energy compared with part (b).

<details>
<summary>Solution</summary>

(a) By conservation of momentum (initially at rest):

$$0 = m_A v_A + m_B v_B$$

$$0 = 60 \times 3.0 + 80 \times v_B$$

$$v_B = -\frac{180}{80} = -2.25 \mathrm{ m/s}$$

(B moves at $2.25 \mathrm{ m/s}$ in the opposite direction to A.)

(b) $E_{k,A} = \frac{1}{2}(60)(3.0)^2 = 270 \mathrm{ J}$

$E_{k,B} = \frac{1}{2}(80)(2.25)^2 = 202.5 \mathrm{ J}$

Total KE $= 270 + 202.5 = 472.5 \mathrm{ J}$

(c) The skaters convert internal chemical energy (from their muscles) into kinetic energy during The
push. The push is an internal force that does work on the system. Total momentum is Conserved
(internal forces cannot change the total momentum of a system), but the internal Energy is converted
to kinetic energy, so the total KE increases.

(d) $v_B = \frac{60 \times 4.0}{80} = 3.0 \mathrm{ m/s}$

$E_{k,A} = \frac{1}{2}(60)(16) = 480 \mathrm{ J}$

$E_{k,B} = \frac{1}{2}(80)(9) = 360 \mathrm{ J}$

New total KE $= 480 + 360 = 840 \mathrm{ J}$

Change $= 840 - 472.5 = 367.5 \mathrm{ J}$ increase.

</details>

### Question 3 (DSE Structured)

A car of mass $1500 \mathrm{ kg}$ travels at $20 \mathrm{ m/s}$ around a banked curve of radius
$50 \mathrm{ m}$. The banking angle is $25^\circ$.

(a) Calculate the speed at which no friction is required to keep the car on the curve.

(b) If the car travels at $25 \mathrm{ m/s}$Does it tend to slide up or down the bank? Which
Direction does friction act?

(c) Calculate the minimum coefficient of friction required for the car to travel at
$25 \mathrm{ m/s}$ without sliding.

<details>
<summary>Solution</summary>

(a) For no friction: the horizontal component of the normal reaction provides the centripetal Force.

$$N\sin\theta = \frac{mv^2}{r}, \quad N\cos\theta = mg$$

Dividing: $\tan\theta = \frac{v^2}{rg}$

$$v = \sqrt{rg\tan\theta} = \sqrt{50 \times 9.81 \times \tan 25^\circ} = \sqrt{50 \times 9.81 \times 0.4663} = \sqrt{228.7} = 15.1 \mathrm{ m/s}$$

(b) Since the car is travelling faster ($25 \mathrm{ m/s}$) than the no-friction speed
($15.1 \mathrm{ m/s}$), it tends to slide **up** the bank. Friction acts **down** the bank to
Provide additional centripetal force.

(c) At $25 \mathrm{ m/s}$Friction acts down the bank. Resolving forces:

Horizontally: $N\sin\theta + f\cos\theta = \frac{mv^2}{r}$

Vertically: $N\cos\theta - f\sin\theta = mg$

From the vertical equation: $N = \frac{mg + f\sin\theta}{\cos\theta}$

Substituting into the horizontal equation:

$$\frac{(mg + f\sin\theta)\sin\theta}{\cos\theta} + f\cos\theta = \frac{mv^2}{r}$$

$$mg\tan\theta + f\tan\theta\sin\theta + f\cos\theta = \frac{mv^2}{r}$$

$$f(\tan\theta\sin\theta + \cos\theta) = \frac{mv^2}{r} - mg\tan\theta$$

$$f = \frac{m(v^2/r - g\tan\theta)}{\tan\theta\sin\theta + \cos\theta}$$

$v^2/r = 625/50 = 12.5$$g\tan\theta = 9.81 \times 0.4663 = 4.575$

Numerator: $1500(12.5 - 4.575) = 1500 \times 7.925 = 11888$

Denominator: $0.4663 \times 0.4226 + 0.9063 = 0.197 + 0.906 = 1.103$

$$f = \frac{11888}{1.103} = 10778 \mathrm{ N}$$

From the vertical equation:
$N = \frac{1500 \times 9.81 + 10778 \times 0.4226}{0.9063} = \frac{14715 + 4555}{0.9063} = \frac{19270}{0.9063} = 21262 \mathrm{ N}$

$$\mu_s \geqslant \frac{f}{N} = \frac{10778}{21262} = 0.507$$

Minimum coefficient of static friction: $\mu_s = 0.51$.

</details>

:::

## Common Pitfalls

<!-- TODO: Add common pitfalls for this topic -->
