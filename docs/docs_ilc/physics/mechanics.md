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

## Friction (OL/HL)

### Coefficient of Friction

$$
f \leq \mu R
$$

where $f$ is the frictional force, $\mu$ is the coefficient of friction, and $R$ is the normal
reaction force.

At limiting friction (when the object is on the point of moving): $f = \mu R$.

On a horizontal surface: $R = mg$, so $f = \mu mg$.

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

**Example (HL):** A car of mass 1000 kg travels around a circular bend of radius 50 m at
$15\text{ m/s}$. Find the centripetal force.

$$
F_c = \frac{1000 \times 225}{50} = 4500\text{ N}
$$

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

## Common Pitfalls

1. **Confusing speed and velocity** -- velocity is a vector.
2. **Projectile motion** -- always resolve into horizontal and vertical components separately.
3. **Forgetting to convert units** (e.g., km/h to m/s).
4. **Friction on inclined planes** -- resolve forces parallel and perpendicular to the slope.
5. **Conservation of momentum** only applies when no external net force acts.
6. **Centripetal force** is not a new force -- it is the net force towards the centre.

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
