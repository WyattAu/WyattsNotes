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

## 11. Derivation: Kinematic Equations from Calculus (HL)

Starting from the definition of constant acceleration $a = dv/dt$:

$$\int_u^v dv = \int_0^t a\, dt' \implies v - u = at \implies v = u + at$$

This is the first kinematic equation. Now substitute $v = ds/dt$ and integrate:

$$\int_0^s ds = \int_0^t (u + at')\, dt' \implies s = ut + \frac{1}{2}at^2$$

To eliminate $t$ from the first two equations, substitute $t = (v - u)/a$:

$$s = u\frac{v - u}{a} + \frac{1}{2}a\left(\frac{v - u}{a}\right)^2 = \frac{uv - u^2}{a} + \frac{v^2 - 2uv + u^2}{2a}$$

$$2as = 2uv - 2u^2 + v^2 - 2uv + u^2 = v^2 - u^2$$

$$v^2 = u^2 + 2as$$

## 12. Worked Example: Projectile from a Height (HL)

A ball is thrown from the top of a $20 \text{ m}$ cliff at $25 \text{ m/s}$ at $40^{\circ}$ above
the horizontal. Find the horizontal distance from the cliff where it hits the water.

$$v_x = 25\cos 40^{\circ} = 19.15 \text{ m/s}, \qquad v_y = 25\sin 40^{\circ} = 16.07 \text{ m/s}$$

The vertical motion: $y = 20 + 16.07t - 4.9t^2$. At impact, $y = 0$:

$$4.9t^2 - 16.07t - 20 = 0$$

$$t = \frac{16.07 + \sqrt{16.07^2 + 4 \times 4.9 \times 20}}{2 \times 4.9} = \frac{16.07 + \sqrt{258.2 + 392}}{9.8} = \frac{16.07 + 25.50}{9.8} = 4.24 \text{ s}$$

$$R = v_x t = 19.15 \times 4.24 = 81.2 \text{ m}$$

## 13. Worked Example: Inclined Plane with Friction (HL)

A $5 \text{ kg}$ block is on a $30^{\circ}$ rough incline with $\mu_k = 0.3$. It is given an initial
velocity of $6 \text{ m/s}$ up the slope. How far does it travel up the slope before stopping, and
does it slide back down?

**Going up (friction acts down the slope):**

$$a = -g(\sin\theta + \mu_k\cos\theta) = -9.8(0.5 + 0.3 \times 0.866) = -9.8 \times 0.760 = -7.45 \text{ m/s}^2$$

$$v^2 = u^2 + 2as \implies 0 = 36 + 2(-7.45)s \implies s = \frac{36}{14.9} = 2.42 \text{ m}$$

**Will it slide back?** Check if the gravitational component exceeds maximum static friction:

$$mg\sin\theta = 5 \times 9.8 \times 0.5 = 24.5 \text{ N}$$

$$f_{\max} = \mu_s mg\cos\theta \approx 0.35 \times 5 \times 9.8 \times 0.866 = 14.9 \text{ N}$$

Since $24.5 \text{ N} \gt 14.9 \text{ N}$, the block slides back.

**Sliding back (friction acts up the slope):**

$$a = g(\sin\theta - \mu_k\cos\theta) = 9.8(0.5 - 0.3 \times 0.866) = 9.8 \times 0.240 = 2.35 \text{ m/s}^2$$

## 14. Worked Example: Elastic Collision (HL)

A $3 \text{ kg}$ object moving at $5 \text{ m/s}$ collides elastically with a $2 \text{ kg}$ object
at rest.

$$v_1 = \frac{m_1 - m_2}{m_1 + m_2}u_1 = \frac{3 - 2}{3 + 2} \times 5 = \frac{1}{5} \times 5 = 1 \text{ m/s}$$

$$v_2 = \frac{2m_1}{m_1 + m_2}u_1 = \frac{6}{5} \times 5 = 6 \text{ m/s}$$

**Verification:**

Momentum: $3 \times 5 + 0 = 15$. After: $3 \times 1 + 2 \times 6 = 3 + 12 = 15$. Conserved.

KE: Before: $\frac{1}{2} \times 3 \times 25 = 37.5 \text{ J}$. After:
$\frac{1}{2} \times 3 \times 1 + \frac{1}{2} \times 2 \times 36 = 1.5 + 36 = 37.5 \text{ J}$.
Conserved.

## 15. Simple Harmonic Motion: Extended Analysis (HL)

### Worked Example: Mass-Spring System

A $0.2 \text{ kg}$ mass on a spring oscillates with period $1.5 \text{ s}$ and amplitude
$0.08 \text{ m}$.

**Spring constant:**
$k = \frac{4\pi^2 m}{T^2} = \frac{4\pi^2 \times 0.2}{1.5^2} = \frac{7.896}{2.25} = 3.51 \text{ N/m}$

**Maximum speed:**
$v_{\max} = \omega A = \frac{2\pi}{T}A = \frac{2\pi}{1.5} \times 0.08 = 0.335 \text{ m/s}$

**Maximum acceleration:**
$a_{\max} = \omega^2 A = \left(\frac{2\pi}{1.5}\right)^2 \times 0.08 = \left(\frac{6.283}{1.5}\right)^2 \times 0.08 = 17.55 \times 0.08 = 1.40 \text{ m/s}^2$

**Total energy:** $E = \frac{1}{2}kA^2 = \frac{1}{2} \times 3.51 \times 0.0064 = 0.0112 \text{ J}$

## 16. Summary Table: Key Mechanics Formulas

| Topic             | Formula                    | Level | Notes                             |
| ----------------- | -------------------------- | ----- | --------------------------------- |
| Kinematics        | $v = u + at$, etc.         | OL/HL | Constant acceleration only        |
| Newton's 2nd law  | $F = ma$                   | OL/HL | Vector equation                   |
| Friction          | $f \le \mu R$              | OL/HL | Static adjusts; kinetic = $\mu R$ |
| Work              | $W = Fs\cos\theta$         | OL/HL | Scalar                            |
| Kinetic energy    | $E_k = \frac{1}{2}mv^2$    | OL/HL | Always positive                   |
| Potential energy  | $E_p = mgh$                | OL/HL | Near surface only                 |
| Conservation      | $E_k + E_p = \text{const}$ | OL/HL | No non-conservative forces        |
| Power             | $P = Fv$                   | OL/HL | Instantaneous power               |
| Momentum          | $p = mv$                   | OL/HL | Vector                            |
| Impulse           | $J = F\Delta t = \Delta p$ | HL    | Force times time                  |
| Centripetal force | $F = mv^2/r$               | HL    | Net inward force                  |
| SHM               | $T = 2\pi\sqrt{m/k}$       | HL    | Independent of amplitude          |

## 17. Practice Questions (Additional)

### Higher Level (Additional)

11. A $4 \text{ kg}$ object on a frictionless surface is connected by a string over a pulley to a
    $6 \text{ kg}$ object hanging vertically. Find the acceleration and the tension in the string.

12. A ball is thrown vertically upward with speed $18 \text{ m/s}$ from a height of $5 \text{ m}$
    above the ground. Find the speed just before it hits the ground.

13. A satellite of mass $800 \text{ kg}$ orbits at $400 \text{ km}$ altitude. Calculate the orbital
    speed, period, and gravitational potential energy.

14. A $0.15 \text{ kg}$ mass on a spring of constant $200 \text{ N/m}$ has amplitude
    $0.05 \text{ m}$. Calculate the period, maximum speed, maximum KE, and total energy.

15. A car of mass $1200 \text{ kg}$ travels around a banked curve of radius $80 \text{ m}$ at
    $18 \text{ m/s}$. The banking angle is $15^{\circ}$. Find the minimum coefficient of static
    friction required.

16. Two ice skaters, one of mass $60 \text{ kg}$ and one of mass $40 \text{ kg}$, push apart. The
    $60 \text{ kg}$ skater moves at $2 \text{ m/s}$. Calculate the velocity of the $40 \text{ kg}$
    skater and the total KE before and after.

17. A block of mass $5 \text{ kg}$ slides $6 \text{ m}$ down a $35^{\circ}$ incline with
    $\mu_k = 0.15$. Find the work done by friction, the work done by gravity, and the final speed if
    the block started from rest.

18. A spring of spring constant $150 \text{ N/m}$ is compressed by $0.12 \text{ m}$ and launches a
    $0.3 \text{ kg}$ block on a frictionless surface. Calculate the speed of the block as it leaves
    the spring.

19. Explain why a satellite in a circular orbit around Earth is not truly weightless. Include
    reference to the gravitational field strength at orbital altitude.

20. A $2 \text{ kg}$ object is projected up a $30^{\circ}$ rough incline at $10 \text{ m/s}$ with
    $\mu_k = 0.25$. Find the distance travelled up the incline and whether it returns.

## Extended Worked Examples

### Example 21: Projectile Motion with Air Resistance (Qualitative)

A projectile is launched at $45°$ to the horizontal. Explain qualitatively how air resistance
affects (a) the maximum height, (b) the range, (c) the time of flight, and (d) the optimal launch
angle.

**Effects of air resistance:**

(a) **Maximum height:** Air resistance acts opposite to the velocity throughout the flight. On the
way up, both gravity and air resistance act downward, so the projectile decelerates faster and
reaches a lower maximum height than without air resistance.

(b) **Range:** Air resistance reduces the horizontal velocity throughout the flight, so the range is
significantly shorter. The horizontal component of velocity decreases continuously.

(c) **Time of flight:** The maximum height is lower (so less time to reach it), but on the way down,
air resistance acts upward (opposing the downward motion), so the projectile takes longer to fall.
The net effect is usually a slightly _longer_ time of flight than the ascent time, but the total
time may be less than without air resistance due to the much lower apex.

(d) **Optimal launch angle:** Without air resistance, $45°$ gives maximum range. With air
resistance, the optimal angle is less than $45°$ (typically around $35°-40°$ for a baseball,
depending on the drag coefficient). This is because a lower angle gives a flatter trajectory,
reducing the time the projectile spends in the air (and thus the total distance over which air
resistance acts).

:::info
The study of projectile motion with air resistance requires numerical methods or
differential equations. At Leaving Certificate level, you are expected to describe the effects
qualitatively.
:::

### Example 22: Conservation of Momentum with External Forces

A $1200 \text{ kg}$ car travelling east at $15 \text{ m/s}$ collides with a $1500 \text{ kg}$ car
travelling north at $12 \text{ m/s}$. They stick together. Find the velocity of the combined wreck
immediately after the collision.

**Step 1: Momentum conservation (east direction)**

$$m_1 v_{1x} = (m_1 + m_2) v_{fx}$$

$$1200 \times 15 = 2700 v_{fx} \implies v_{fx} = \frac{18000}{2700} = 6.67 \text{ m/s}$$

**Step 2: Momentum conservation (north direction)**

$$m_2 v_{2y} = (m_1 + m_2) v_{fy}$$

$$1500 \times 12 = 2700 v_{fy} \implies v_{fy} = \frac{18000}{2700} = 6.67 \text{ m/s}$$

**Step 3: Magnitude and direction**

$$|v_f| = \sqrt{6.67^2 + 6.67^2} = \sqrt{88.89 + 88.89} = \sqrt{177.78} = 13.33 \text{ m/s}$$

$$\theta = \arctan\left(\frac{6.67}{6.67}\right) = 45° \text{ north of east}$$

**Step 4: Kinetic energy analysis**

$$KE_i = \frac{1}{2}(1200)(15^2) + \frac{1}{2}(1500)(12^2) = 135000 + 108000 = 243000 \text{ J}$$

$$KE_f = \frac{1}{2}(2700)(13.33^2) = \frac{1}{2}(2700)(177.78) = 240000 \text{ J}$$

Energy lost $= 243000 - 240000 = 3000 \text{ J}$ (about $1.2\%$ of initial KE).

### Example 23: Simple Harmonic Motion -- Mass on a Spring

A $0.8 \text{ kg}$ mass hangs from a spring with spring constant $50 \text{ N/m}$. The mass is
pulled down $0.1 \text{ m}$ from equilibrium and released. Calculate (a) the period, (b) the maximum
speed, (c) the maximum acceleration, and (d) the speed when the mass is $0.05 \text{ m}$ from
equilibrium.

**Step 1: Period**

$$T = 2\pi\sqrt{\frac{m}{k}} = 2\pi\sqrt{\frac{0.8}{50}} = 2\pi\sqrt{0.016} = 2\pi \times 0.1265 = 0.795 \text{ s}$$

**Step 2: Maximum speed (at equilibrium)**

$$v_{\max} = \omega A = \frac{2\pi}{T} \times 0.1 = \frac{2\pi}{0.795} \times 0.1 = 7.90 \times 0.1 = 0.790 \text{ m/s}$$

**Step 3: Maximum acceleration (at maximum displacement)**

$$a_{\max} = \omega^2 A = \left(\frac{2\pi}{0.795}\right)^2 \times 0.1 = 62.41 \times 0.1 = 6.24 \text{ m/s}^2$$

**Step 4: Speed at $x = 0.05 \text{ m}$**

Using energy conservation:

$$\frac{1}{2}kA^2 = \frac{1}{2}kx^2 + \frac{1}{2}mv^2$$

$$v = \sqrt{\frac{k(A^2 - x^2)}{m}} = \sqrt{\frac{50(0.01 - 0.0025)}{0.8}} = \sqrt{\frac{50 \times 0.0075}{0.8}} = \sqrt{0.4688} = 0.685 \text{ m/s}$$

## Common Pitfalls Extended

### Pitfall 6: Using the Wrong Formula for Centripetal Force

Centripetal force is _not_ a separate force -- it is the _net_ force directed toward the centre of
the circular path. It is provided by whatever force acts toward the centre: tension (conical
pendulum), friction (car on a roundabout), gravity (satellite orbit), or the normal force component
(banked curve). Never write "centripetal force" on a free body diagram alongside the actual forces.

### Pitfall 7: Sign Errors in Energy Conservation

When using energy conservation, be consistent with your sign convention. Gravitational PE increases
with height ($mgh$). Elastic PE increases with extension ($\frac{1}{2}kx^2$). KE is always positive.
A common error is to assign negative values to KE or to forget that friction does negative work.

### Pitfall 8: Forgetting to Convert Units

In mechanics problems, ensure all quantities are in SI units before calculating. Common conversion
errors:

- km/h to m/s: divide by 3.6
- cm to m: divide by 100
- g to kg: divide by 1000
- minutes to seconds: multiply by 60
- rpm to rad/s: multiply by $2\pi/60$

## Additional Practice Problems

21. A $500 \text{ g}$ ball is attached to a string of length $1.2 \text{ m}$ and whirled in a
    vertical circle. Calculate the minimum speed at the top of the circle and the tension in the
    string at the bottom if the speed at the bottom is $8 \text{ m/s}$.

22. Two objects of mass $4 \text{ kg}$ and $6 \text{ kg}$ collide. The $4 \text{ kg}$ object is
    moving at $5 \text{ m/s}$ and the $6 \text{ kg}$ object is at rest. After the collision, the
    $4 \text{ kg}$ object rebounds at $1 \text{ m/s}$. Calculate the velocity of the $6 \text{ kg}$
    object and determine the type of collision.

23. A lift of mass $800 \text{ kg}$ accelerates upward at $2.5 \text{ m/s}^2$ for 3 s, then travels
    at constant speed for 5 s, then decelerates at $3 \text{ m/s}^2$ for 2 s. Calculate the tension
    in the cable during each phase and the total distance travelled.

24. A spring of natural length $0.3 \text{ m}$ and spring constant $200 \text{ N/m}$ is compressed
    to $0.15 \text{ m}$ and used to launch a $0.4 \text{ kg}$ ball vertically. Calculate the maximum
    height reached and the speed of the ball as it leaves the spring.

25. Derive an expression for the acceleration of an object sliding down a frictionless incline of
    angle $\theta$. A block takes $4 \text{ s}$ to slide $8 \text{ m}$ from rest down a frictionless
    incline. Calculate the angle of the incline.
