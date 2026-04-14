---
title: Mechanics
date: 2026-04-14
tags:
  - Physics
  - ILC
categories:
  - Physics
slug: mechanics
---

# Mechanics

Mechanics is the study of motion and forces. It forms the largest single topic on the Leaving
Certificate Physics paper and covers kinematics, dynamics, energy, momentum, and circular motion.

## Physical Quantities and Units

### SI Base Units (OL/HL)

| Quantity            | Unit     | Symbol |
| ------------------- | -------- | ------ |
| Mass                | kilogram | kg     |
| Length              | metre    | m      |
| Time                | second   | s      |
| Temperature         | kelvin   | K      |
| Electric current    | ampere   | A      |
| Amount of substance | mole     | mol    |
| Luminous intensity  | candela  | cd     |

### Derived Units (OL/HL)

| Quantity | Unit        | In base units                    |
| -------- | ----------- | -------------------------------- |
| Force    | newton (N)  | $\text{kg m s}^{-2}$             |
| Energy   | joule (J)   | $\text{kg m}^2\text{ s}^{-2}$    |
| Power    | watt (W)    | $\text{kg m}^2\text{ s}^{-3}$    |
| Pressure | pascal (Pa) | $\text{kg m}^{-1}\text{ s}^{-2}$ |

### Scalars and Vectors (OL/HL)

- **Scalar:** has magnitude only (e.g., mass, speed, temperature).
- **Vector:** has magnitude and direction (e.g., displacement, velocity, force, acceleration).

### Resolving Vectors

Any vector of magnitude $F$ at angle $\theta$ to the horizontal can be resolved into components:

$$F_x = F\cos\theta, \qquad F_y = F\sin\theta$$

This technique is essential for inclined plane problems and projectile motion.

## Kinematics

### Equations of Motion (OL/HL)

For constant acceleration $a$:

$$
v = u + at
$$

$$
s = ut + \frac{1}{2}at^2
$$

$$
v^2 = u^2 + 2as
$$

$$
s = \frac{1}{2}(u + v)t
$$

where $u$ = initial velocity, $v$ = final velocity, $s$ = displacement, $t$ = time.

### Choosing the Right Equation

The variable that does _not_ appear in each equation tells you when to use it. If you do not know
the time, use $v^2 = u^2 + 2as$. If you do not know the acceleration, use $s = \frac{1}{2}(u+v)t$.
If you do not know the displacement, use $v = u + at$.

**Example (OL):** A car accelerates from rest at $2\text{ m/s}^2$ for 8 seconds. Find the distance
travelled.

$$
s = 0 + \frac{1}{2}(2)(64) = 64\text{ m}
$$

### Acceleration Due to Gravity (OL/HL)

Near the Earth's surface, $g \approx 9.8\text{ m/s}^2$.

**Example (OL):** A stone is dropped from a height of 45 m. How long does it take to reach the
ground?

$$
s = ut + \frac{1}{2}gt^2 \implies 45 = 0 + \frac{1}{2}(9.8)t^2
$$

$$
t^2 = \frac{90}{9.8} \approx 9.18 \implies t \approx 3.03\text{ s}
$$

### Sign Conventions

Always define a positive direction before solving. If "up is positive," then downward velocity and
acceleration are negative. Be consistent throughout the calculation.

## Projectile Motion (HL)

A projectile moves under the influence of gravity alone (ignoring air resistance). Resolve the
motion into horizontal and vertical components.

### Key Principles

- Horizontal: $a_x = 0$, so $v_x = u\cos\theta$ (constant).
- Vertical: $a_y = -g$, using the equations of motion.

### Time of Flight

$$
T = \frac{2u\sin\theta}{g}
$$

### Maximum Height

$$
H = \frac{u^2\sin^2\theta}{2g}
$$

### Range

$$
R = \frac{u^2\sin 2\theta}{g}
$$

Maximum range occurs when $\theta = 45°$.

### Why Horizontal and Vertical Motions Are Independent

The gravitational force acts only vertically. There is no horizontal force (ignoring air
resistance), so the horizontal acceleration is zero. The two components of motion are completely
decoupled and can be solved separately using the kinematic equations.

**Example (HL):** A ball is thrown from ground level with initial velocity $20\text{ m/s}$ at an
angle of $30°$ above the horizontal. Find the maximum height, time of flight, and range.

$$
u_x = 20\cos 30° = 10\sqrt{3} \approx 17.32\text{ m/s}
$$

$$
u_y = 20\sin 30° = 10\text{ m/s}
$$

**Maximum height:**

$$
H = \frac{u_y^2}{2g} = \frac{100}{19.6} \approx 5.10\text{ m}
$$

**Time of flight:**

$$
T = \frac{2u_y}{g} = \frac{20}{9.8} \approx 2.04\text{ s}
$$

**Range:**

$$
R = u_x \cdot T = 10\sqrt{3} \times \frac{20}{9.8} \approx 35.3\text{ m}
$$

### Projectile from a Height

When launched from a height $h$, the time of flight is found from $y(t) = 0$, which is a quadratic
in $t$. There is no simple closed-form range formula in this case.

## Newton's Laws of Motion (OL/HL)

### First Law (Inertia)

An object at rest stays at rest, and an object in motion stays in motion with constant velocity,
unless acted upon by an external force.

### Second Law

$$
F = ma
$$

**Example (OL):** A 5 kg box is pushed with a force of 30 N on a frictionless surface. Find its
acceleration.

$$
a = \frac{F}{m} = \frac{30}{5} = 6\text{ m/s}^2
$$

### Third Law

For every action, there is an equal and opposite reaction.

### Identifying Third Law Pairs Correctly

The two forces must: (1) be equal in magnitude, (2) be opposite in direction, (3) act on _different_
objects, and (4) be the same type of force. The weight of a book and the normal force on the book
are _not_ a third law pair (they act on the same object). The correct pairs are: Earth pulls book
down / book pulls Earth up, and table pushes book up / book pushes table down.

## Friction (OL/HL)

### Coefficient of Friction

$$
f \leq \mu R
$$

where $f$ is the frictional force, $\mu$ is the coefficient of friction, and $R$ is the normal
reaction force.

At limiting friction (when the object is on the point of moving): $f = \mu R$.

On a horizontal surface: $R = mg$, so $f = \mu mg$.

### Static vs Kinetic Friction

Static friction adjusts to match the applied force, up to a maximum of $\mu_s R$. Once the object
starts moving, kinetic friction takes over: $f_k = \mu_k R$. In general, $\mu_k \lt \mu_s$.

**Example (HL):** A block of mass 10 kg rests on a rough horizontal surface with $\mu = 0.4$. A
horizontal force of 60 N is applied. Find the acceleration.

Maximum friction: $f = 0.4 \times 10 \times 9.8 = 39.2\text{ N}$.

Net force: $F_{\text{net}} = 60 - 39.2 = 20.8\text{ N}$.

$$
a = \frac{20.8}{10} = 2.08\text{ m/s}^2
$$

### Inclined Planes (HL)

On a plane inclined at angle $\theta$:

$$
R = mg\cos\theta, \quad f = \mu R = \mu mg\cos\theta
$$

Component of weight down the slope: $mg\sin\theta$.

The block slides when $mg\sin\theta > \mu mg\cos\theta$, i.e., $\tan\theta > \mu$.

If the block slides _down_ the slope:

$$a = g(\sin\theta - \mu\cos\theta)$$

If the block is pushed _up_ the slope:

$$a = -g(\sin\theta + \mu\cos\theta)$$

## Work, Energy, and Power

### Work (OL/HL)

$$
W = Fs\cos\theta
$$

where $F$ is the force, $s$ is the displacement, and $\theta$ is the angle between them.

Unit: joule (J).

### Kinetic Energy (OL/HL)

$$
E_k = \frac{1}{2}mv^2
$$

### Potential Energy (OL/HL)

Gravitational potential energy near Earth's surface:

$$
E_p = mgh
$$

### Conservation of Energy (OL/HL)

In the absence of non-conservative forces:

$$
E_k + E_p = \text{constant}
$$

**Example (OL):** A 2 kg ball is dropped from a height of 10 m. Find its speed just before it hits
the ground.

$$
mgh = \frac{1}{2}mv^2 \implies v = \sqrt{2gh} = \sqrt{2 \times 9.8 \times 10} = \sqrt{196} = 14\text{ m/s}
$$

### Energy with Friction (HL)

When friction is present, the work-energy theorem becomes:

$$
W_{\text{nc}} = \Delta E_k + \Delta E_p
$$

where $W_{\text{nc}} = -fd$ is the work done by friction (negative because friction opposes motion).

### Power (OL/HL)

$$
P = \frac{W}{t} = Fv
$$

Unit: watt (W).

**Example (HL):** A car of mass 1200 kg travels at a constant speed of $20\text{ m/s}$ up a hill
inclined at $5°$ against a total resistance of 400 N. Find the power output of the engine.

$$
P = Fv = (mg\sin 5° + 400) \times 20
$$

$$
= (1200 \times 9.8 \times 0.0872 + 400) \times 20
$$

$$
= (1025.8 + 400) \times 20 = 28516\text{ W} \approx 28.5\text{ kW}
$$

## Momentum

### Linear Momentum (OL/HL)

$$
p = mv
$$

### Conservation of Momentum (OL/HL)

In the absence of external forces, the total momentum of a system is conserved.

$$
m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2
$$

**Example (OL):** A 3 kg object moving at $4\text{ m/s}$ collides with a 2 kg object at rest. They
stick together. Find the velocity after collision.

$$
3(4) + 2(0) = (3 + 2)v \implies 12 = 5v \implies v = 2.4\text{ m/s}
$$

### Impulse (HL)

$$
\text{Impulse} = F \Delta t = \Delta p = m\Delta v
$$

The impulse equals the change in momentum. For a given $\Delta p$, increasing $\Delta t$ decreases
the average force. This is the principle behind crumple zones, air bags, and seat belts.

### Elastic vs Inelastic Collisions (HL)

**Elastic:** Both momentum and kinetic energy are conserved.

**Inelastic:** Momentum is conserved, but kinetic energy is not.

**Coefficient of restitution:**

$$
e = \frac{\text{relative speed of separation}}{\text{relative speed of approach}}
$$

For elastic: $e = 1$. For perfectly inelastic: $e = 0$.

## Circular Motion (HL)

### Centripetal Acceleration and Force

For an object moving in a circle of radius $r$ at speed $v$:

$$
a_c = \frac{v^2}{r} = \omega^2 r
$$

$$
F_c = \frac{mv^2}{r} = m\omega^2 r
$$

where $\omega$ is the angular velocity.

### Why Centripetal Force Is Not a Separate Force

The centripetal force is the _net_ inward force, not an additional interaction. For a car on a flat
roundabout, it is provided by friction. For a satellite in orbit, it is provided by gravity. For a
ball on a string, it is provided by tension.

**Example (HL):** A car of mass 1000 kg travels around a circular bend of radius 50 m at
$15\text{ m/s}$. Find the centripetal force.

$$
F_c = \frac{1000 \times 225}{50} = 4500\text{ N}
$$

### Vertical Circular Motion (HL)

At the top of a vertical circle:

$$F_c = mg + T = \frac{mv^2}{r}$$

At the bottom:

$$F_c = T - mg = \frac{mv^2}{r}$$

Minimum speed at the top: $v_{\min} = \sqrt{gr}$ (when $T = 0$).

## Simple Harmonic Motion (HL)

### Conditions

An object undergoes SHM when the restoring force is proportional to the displacement from the
equilibrium position and directed towards it:

$$
F = -kx
$$

### Equations

$$
x = A\cos(\omega t + \phi)
$$

$$
v = \pm \omega \sqrt{A^2 - x^2}
$$

$$
T = 2\pi \sqrt{\frac{m}{k}}
$$

where $A$ is the amplitude and $\omega = \frac{2\pi}{T}$.

### Energy in SHM (HL)

The total energy in SHM is constant:

$$
E = \frac{1}{2}kA^2 = \frac{1}{2}mv_{\max}^2 = \frac{1}{2}m\omega^2 A^2
$$

At displacement $x$: $E = \frac{1}{2}mv^2 + \frac{1}{2}kx^2$.

### Mass on a Spring (HL)

For a mass $m$ on a spring of constant $k$:

$$
T = 2\pi\sqrt{\frac{m}{k}}
$$

This is independent of amplitude and gravitational field strength. The period depends only on the
mass and the spring constant.

## Common Pitfalls

1. **Confusing speed and velocity** -- velocity is a vector.
2. **Projectile motion** -- always resolve into horizontal and vertical components separately.
3. **Forgetting to convert units** (e.g., km/h to m/s).
4. **Friction on inclined planes** -- resolve forces parallel and perpendicular to the slope.
5. **Conservation of momentum** only applies when no external net force acts.
6. **Centripetal force** is not a new force -- it is the net force towards the centre.
7. **Using $v = u + at$ when acceleration is not constant.**
8. **Forgetting that the range formula assumes launch and landing at the same height.**

## Practice Questions

### Ordinary Level

1. A car accelerates uniformly from $10\text{ m/s}$ to $25\text{ m/s}$ in 5 seconds. Find the
   acceleration and distance travelled.
2. A stone is thrown vertically upward at $15\text{ m/s}$. Find the maximum height and total time of
   flight.
3. A 50 kg student stands in a lift accelerating upward at $2\text{ m/s}^2$. Find the normal force
   on the student.
4. A 2000 W motor lifts a 100 kg load through 8 m. How long does it take?

### Higher Level

1. A projectile is launched at $30\text{ m/s}$ at $45°$ to the horizontal from a cliff 20 m above
   sea level. Find the horizontal distance from the cliff where it hits the water.
2. A block of mass 5 kg is on a rough plane inclined at $30°$ with $\mu = 0.3$. Find the
   acceleration of the block down the plane.
3. A satellite of mass 500 kg orbits Earth at a height of 300 km above the surface. Find the orbital
   speed and period. (Earth's radius $= 6.37 \times 10^6\text{ m}$,
   $M_{\text{Earth}} = 5.97 \times 10^{24}\text{ kg}$.)
4. A spring of spring constant $200\text{ N/m}$ has a mass of 2 kg attached. Find the period of
   oscillation.

5. A $3\text{ kg}$ object moving at $5\text{ m/s}$ collides elastically with a $2\text{ kg}$ object
   at rest. Find the velocities after the collision.

6. A ball is swung in a vertical circle of radius $1.0\text{ m}$. Find the minimum speed at the top
   of the circle and the tension in the string at the bottom when the speed is $6\text{ m/s}$.

7. A car of mass $1500\text{ kg}$ rounds a banked curve of radius $100\text{ m}$ at $18\text{ m/s}$.
   The banking angle is $20°$. Find the minimum coefficient of static friction required.

8. A block of mass $4\text{ kg}$ slides $5\text{ m}$ down a $35°$ incline with $\mu_k = 0.15$. Find
   the work done by friction, the work done by gravity, and the final speed if the block started
   from rest.

9. A $0.2\text{ kg}$ mass oscillates on a spring with period $1.5\text{ s}$. Find the spring
   constant and the total energy if the amplitude is $0.08\text{ m}$.

10. A $60\text{ kg}$ person stands on a scale in a lift. The scale reads $650\text{ N}$. Is the lift
    accelerating, decelerating, or moving at constant velocity? If accelerating, in which direction?
