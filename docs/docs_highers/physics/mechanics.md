---
title: Mechanics
date: 2026-04-14
tags:
  - Physics
  - Highers
categories:
  - Physics
slug: mechanics
---

# Mechanics

## Higher Mechanics

### Scalars and Vectors

Physical quantities are either **scalars** (magnitude only) or **vectors** (magnitude and
direction).

| Scalar                    | Vector                                      |
| ------------------------- | ------------------------------------------- |
| Mass, speed, energy, time | Displacement, velocity, force, acceleration |

**Vector Addition:**

Vectors can be added using the triangle rule or by resolving into components.

**Example:** A boat sails north at $5 \text{ m/s}$ in a current flowing east at $3 \text{ m/s}$.
Find the resultant velocity.

$$|\mathbf{v}| = \sqrt{5^2 + 3^2} = \sqrt{34} \approx 5.83 \text{ m/s}$$

$$\theta = \arctan\left(\frac{3}{5}\right) \approx 30.96° \text{ east of north}$$

### Equations of Motion (Kinematics)

For constant acceleration $a$:

$$v = u + at$$

$$s = ut + \frac{1}{2}at^2$$

$$v^2 = u^2 + 2as$$

$$s = \frac{(u + v)}{2}t$$

where $u$ = initial velocity, $v$ = final velocity, $s$ = displacement, $t$ = time.

**Example:** A car accelerates uniformly from $10 \text{ m/s}$ to $30 \text{ m/s}$ over a distance
of $200 \text{ m}$. Find the acceleration and time taken.

Using $v^2 = u^2 + 2as$:

$$900 = 100 + 2a(200)$$

$$800 = 400a$$

$$a = 2 \text{ m/s}^2$$

Using $v = u + at$:

$$30 = 10 + 2t$$

$$t = 10 \text{ s}$$

### Projectile Motion

A projectile follows a parabolic path when air resistance is negligible.

**Horizontal:** $x = v_0 \cos\theta \cdot t$ (constant velocity)

**Vertical:** $y = v_0 \sin\theta \cdot t - \frac{1}{2}gt^2$ (uniform acceleration)

**Example:** A ball is thrown at $20 \text{ m/s}$ at an angle of $30°$ above the horizontal. Find
the maximum height and horizontal range.

Vertical component: $v_y = 20\sin 30° = 10 \text{ m/s}$.

Maximum height (when $v_y = 0$): $v_y^2 = u_y^2 - 2gh$

$$0 = 100 - 2(9.8)h$$

$$h = \frac{100}{19.6} \approx 5.10 \text{ m}$$

Time of flight: $t = \dfrac{2u_y}{g} = \dfrac{20}{9.8} \approx 2.04 \text{ s}$.

Horizontal component: $v_x = 20\cos 30° = 17.32 \text{ m/s}$.

Range: $R = v_x \cdot t = 17.32 \times 2.04 \approx 35.3 \text{ m}$.

### Newton's Laws of Motion

**First Law:** An object remains at rest or moves with constant velocity unless acted upon by a
resultant force.

**Second Law:** $F = ma$, where $F$ is the resultant force, $m$ is mass, and $a$ is acceleration.

**Third Law:** If object A exerts a force on object B, then B exerts an equal and opposite force on
A.

**Example:** A block of mass $5 \text{ kg}$ is pulled across a rough horizontal surface by a
horizontal force of $30 \text{ N}$. The coefficient of friction is $0.4$. Find the acceleration.

Normal force: $N = mg = 5 \times 9.8 = 49 \text{ N}$.

Friction force: $f = \mu N = 0.4 \times 49 = 19.6 \text{ N}$.

Resultant force: $F_{\text{net}} = 30 - 19.6 = 10.4 \text{ N}$.

$$a = \frac{F_{\text{net}}}{m} = \frac{10.4}{5} = 2.08 \text{ m/s}^2$$

### Free-Body Diagrams and Connected Bodies

**Example:** Two masses $m_1 = 3 \text{ kg}$ and $m_2 = 5 \text{ kg}$ are connected by a light
inextensible string over a smooth pulley. Find the acceleration and tension.

For $m_1$ (moving up): $T - m_1 g = m_1 a$.

For $m_2$ (moving down): $m_2 g - T = m_2 a$.

Adding: $m_2 g - m_1 g = (m_1 + m_2)a$

$$a = \frac{(m_2 - m_1)g}{m_1 + m_2} = \frac{2 \times 9.8}{8} = 2.45 \text{ m/s}^2$$

$$T = m_1(g + a) = 3(9.8 + 2.45) = 36.75 \text{ N}$$

### Work, Energy, and Power

**Work Done:** $W = Fs\cos\theta$, where $\theta$ is the angle between the force and displacement.

For force in the direction of motion: $W = Fs$.

**Kinetic Energy:** $E_k = \dfrac{1}{2}mv^2$

**Gravitational Potential Energy:** $E_p = mgh$

**Work-Energy Principle:** The work done by the resultant force equals the change in kinetic energy.

**Conservation of Energy (mechanical):** In the absence of non-conservative forces:

$$E_k + E_p = \text{constant}$$

**Power:** $P = \dfrac{W}{t} = Fv$

**Example:** A car of mass $1200 \text{ kg}$ travels at a constant speed of $25 \text{ m/s}$ up a
hill inclined at $5°$ to the horizontal. The total resistive force is $800 \text{ N}$. Find the
power output of the engine.

Component of weight along the slope:
$mg\sin 5° = 1200 \times 9.8 \times \sin 5° \approx 1026 \text{ N}$.

Total force to be overcome: $1026 + 800 = 1826 \text{ N}$.

$$P = Fv = 1826 \times 25 = 45650 \text{ W} \approx 45.7 \text{ kW}$$

**Example:** A roller coaster car starts from rest at a height of $30 \text{ m}$. Neglecting
friction, find its speed at a height of $10 \text{ m}$.

Conservation of energy: $mgh_1 = mgh_2 + \frac{1}{2}mv^2$

$$\frac{1}{2}v^2 = g(h_1 - h_2) = 9.8 \times 20 = 196$$

$$v = \sqrt{392} \approx 19.8 \text{ m/s}$$

### Momentum and Impulse

**Momentum:** $p = mv$

**Newton's Second Law (momentum form):** $F = \dfrac{dp}{dt} = \dfrac{\Delta p}{\Delta t}$

**Impulse:** $J = F\Delta t = \Delta p = m\Delta v$

**Conservation of Momentum:** For a system with no external forces:

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$

**Example:** A $2 \text{ kg}$ ball moving at $5 \text{ m/s}$ collides with a stationary
$3 \text{ kg}$ ball. If the $2 \text{ kg}$ ball rebounds at $1 \text{ m/s}$, find the velocity of
the $3 \text{ kg}$ ball.

Conservation of momentum:

$$2(5) + 3(0) = 2(-1) + 3v$$

$$10 = -2 + 3v$$

$$v = 4 \text{ m/s}$$

### Collisions

**Elastic collision:** Both momentum and kinetic energy are conserved.

**Inelastic collision:** Momentum is conserved, but kinetic energy is not.

**Coefficient of Restitution:**

$$e = \frac{\text{relative speed of separation}}{\text{relative speed of approach}}$$

For a perfectly elastic collision, $e = 1$. For a perfectly inelastic collision, $e = 0$.

---

## Common Pitfalls

1. **Confusing mass and weight:** Mass is measured in kg; weight is a force measured in N
   ($W = mg$).

2. **Forgetting to resolve forces:** On an inclined plane, always resolve forces parallel and
   perpendicular to the plane.

3. **Sign conventions in momentum:** Be consistent with positive and negative directions.

4. **Assuming all collisions are elastic:** Always check whether kinetic energy is conserved.

5. **Units in power:** Power is measured in watts (W). Ensure force is in N and velocity in m/s.

---

## Practice Questions

1. A stone is thrown horizontally from a cliff $40 \text{ m}$ high at $15 \text{ m/s}$. Find the
   time to hit the ground and the horizontal distance travelled.

2. A $60 \text{ kg}$ skier accelerates down a slope inclined at $20°$ to the horizontal. The
   coefficient of friction is $0.1$. Find the acceleration.

3. A car of mass $800 \text{ kg}$ accelerates from rest to $20 \text{ m/s}$ in $8 \text{ s}$.
   Calculate the work done and the average power.

4. A $4 \text{ kg}$ object moving at $6 \text{ m/s}$ collides with a $6 \text{ kg}$ object moving at
   $2 \text{ m/s}$ in the same direction. They stick together. Find the velocity after the collision
   and the kinetic energy lost.

5. A ball is projected at $25 \text{ m/s}$ at $40°$ above the horizontal from the top of a
   $15 \text{ m}$ cliff. Find the speed when it hits the ground.

6. Two particles of masses $2 \text{ kg}$ and $3 \text{ kg}$ are connected by a string over a
   pulley. The system is released from rest. Find the speed after the $3 \text{ kg}$ mass has fallen
   $2 \text{ m}$.

7. A crane lifts a $500 \text{ kg}$ load from rest with constant acceleration. In the first
   $3 \text{ s}$, it rises $9 \text{ m}$. Find the tension in the cable.

8. A bullet of mass $10 \text{ g}$ travelling at $400 \text{ m/s}$ embeds itself in a wooden block
   of mass $2 \text{ kg}$ at rest. Find the velocity of the block immediately after impact.
