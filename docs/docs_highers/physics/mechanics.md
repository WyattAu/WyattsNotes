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

### Resolving Vectors into Components

Any vector can be resolved into perpendicular components. For a vector of magnitude $F$ at angle
$\theta$ to the horizontal:

$$F_x = F\cos\theta, \qquad F_y = F\sin\theta$$

The original vector can be reconstructed: $F = \sqrt{F_x^2 + F_y^2}$, at angle
$\theta =
\arctan(F_y / F_x)$.

This technique is the single most important problem-solving tool in mechanics. Instead of working
with forces at awkward angles, resolve every force into components along two perpendicular axes,
apply Newton's second law to each axis independently, and then recombine the results.

**Example:** A boat sails north at $5 \text{ m/s}$ in a current flowing east at $3 \text{ m/s}$.
Find the resultant velocity.

$$|\mathbf{v}| = \sqrt{5^2 + 3^2} = \sqrt{34} \approx 5.83 \text{ m/s}$$

$$\theta = \arctan\left(\frac{3}{5}\right) \approx 30.96° \text{ east of north}$$

### Vector Addition

Vectors can be added using the triangle rule (head-to-tail) or by resolving into components and
adding the components separately:

$$\vec{R} = \vec{A} + \vec{B} \implies R_x = A_x + B_x, \quad R_y = A_y + B_y$$

## Equations of Motion (Kinematics)

For constant acceleration $a$:

$$v = u + at$$

$$s = ut + \frac{1}{2}at^2$$

$$v^2 = u^2 + 2as$$

$$s = \frac{(u + v)}{2}t$$

where $u$ = initial velocity, $v$ = final velocity, $s$ = displacement, $t$ = time.

### Choosing the Right Equation

Each equation relates a different subset of the five variables ($u$, $v$, $a$, $s$, $t$). The
variable that does _not_ appear tells you when to use that equation. If you know $u$, $a$, and $s$
and need $v$, use $v^2 = u^2 + 2as$ (it does not contain $t$). If you know $u$, $v$, and $t$ and
need $s$, use $s = \frac{1}{2}(u+v)t$ (it does not contain $a$).

**Example:** A car accelerates uniformly from $10 \text{ m/s}$ to $30 \text{ m/s}$ over a distance
of $200 \text{ m}$. Find the acceleration and time taken.

Using $v^2 = u^2 + 2as$:

$$900 = 100 + 2a(200)$$

$$800 = 400a$$

$$a = 2 \text{ m/s}^2$$

Using $v = u + at$:

$$30 = 10 + 2t$$

$$t = 10 \text{ s}$$

### When the Kinematic Equations Fail

These equations assume _constant_ acceleration. If the acceleration changes (a rocket losing mass, a
spring-mass system, a pendulum), these equations do not apply. For variable acceleration, use
calculus: $v = u + \int_0^t a(t')\, dt'$ and $s = \int_0^t v(t')\, dt'$.

## Projectile Motion

A projectile follows a parabolic path when air resistance is negligible.

**Horizontal:** $x = v_0 \cos\theta \cdot t$ (constant velocity)

**Vertical:** $y = v_0 \sin\theta \cdot t - \frac{1}{2}gt^2$ (uniform acceleration)

### Key Results

- **Maximum height:** $H = \dfrac{(v_0 \sin\theta)^2}{2g}$
- **Time of flight:** $T = \dfrac{2v_0 \sin\theta}{g}$
- **Range:** $R = \dfrac{v_0^2 \sin 2\theta}{g}$
- **Maximum range** at $\theta = 45°$

### Why the Path Is a Parabola

Eliminating $t$ from the horizontal and vertical equations:

$$t = \frac{x}{v_0 \cos\theta}, \qquad y = x\tan\theta - \frac{gx^2}{2v_0^2\cos^2\theta}$$

This is quadratic in $x$ with a negative coefficient, confirming a parabola opening downward.

### Independence of Horizontal and Vertical Motion

The horizontal and vertical components are completely independent. There is no horizontal force
(ignoring air resistance), so the horizontal velocity is constant. The vertical acceleration is
always $g$ downward, regardless of the horizontal motion. This means you can solve each component
separately using the kinematic equations.

**Example:** A ball is thrown at $20 \text{ m/s}$ at an angle of $30°$ above the horizontal. Find
the maximum height and horizontal range.

Vertical component: $v_y = 20\sin 30° = 10 \text{ m/s}$.

Maximum height (when $v_y = 0$): $v_y^2 = u_y^2 - 2gh$

$$0 = 100 - 2(9.8)h$$

$$h = \frac{100}{19.6} \approx 5.10 \text{ m}$$

Time of flight: $t = \dfrac{2u_y}{g} = \dfrac{20}{9.8} \approx 2.04 \text{ s}$.

Horizontal component: $v_x = 20\cos 30° = 17.32 \text{ m/s}$.

Range: $R = v_x \cdot t = 17.32 \times 2.04 \approx 35.3 \text{ m}$.

## Newton's Laws of Motion

**First Law:** An object remains at rest or moves with constant velocity unless acted upon by a
resultant force.

**Second Law:** $F = ma$, where $F$ is the resultant force, $m$ is mass, and $a$ is acceleration.

**Third Law:** If object A exerts a force on object B, then B exerts an equal and opposite force on
A.

### Why Newton's Third Law Pairs Act on Different Objects

The normal force and weight on a book resting on a table are _not_ a third law pair. They act on the
_same_ object and balance because the book is in equilibrium. The correct third law pairs are: Earth
pulls book down / book pulls Earth up, and table pushes book up / book pushes table down. The fact
that the pairs act on different objects is why they cannot cancel.

**Example:** A block of mass $5 \text{ kg}$ is pulled across a rough horizontal surface by a
horizontal force of $30 \text{ N}$. The coefficient of friction is $0.4$. Find the acceleration.

Normal force: $N = mg = 5 \times 9.8 = 49 \text{ N}$.

Friction force: $f = \mu N = 0.4 \times 49 = 19.6 \text{ N}$.

Resultant force: $F_{\text{net}} = 30 - 19.6 = 10.4 \text{ N}$.

$$a = \frac{F_{\text{net}}}{m} = \frac{10.4}{5} = 2.08 \text{ m/s}^2$$

### Free-Body Diagrams and Connected Bodies

Draw a free body diagram for _each_ object separately. Apply Newton's second law to each object. The
tension in a massless, inextensible string is the same throughout.

**Example:** Two masses $m_1 = 3 \text{ kg}$ and $m_2 = 5 \text{ kg}$ are connected by a light
inextensible string over a smooth pulley. Find the acceleration and tension.

For $m_1$ (moving up): $T - m_1 g = m_1 a$.

For $m_2$ (moving down): $m_2 g - T = m_2 a$.

Adding: $m_2 g - m_1 g = (m_1 + m_2)a$

$$a = \frac{(m_2 - m_1)g}{m_1 + m_2} = \frac{2 \times 9.8}{8} = 2.45 \text{ m/s}^2$$

$$T = m_1(g + a) = 3(9.8 + 2.45) = 36.75 \text{ N}$$

### Inclined Planes

On a plane inclined at angle $\theta$, resolve forces parallel and perpendicular to the plane:

- Component of weight down the slope: $mg\sin\theta$
- Normal reaction: $N = mg\cos\theta$
- Friction: $f = \mu N = \mu mg\cos\theta$ (opposing motion)

The block slides when $mg\sin\theta \gt \mu mg\cos\theta$, i.e., $\tan\theta \gt \mu$.

### Friction on Inclined Planes

If the block is sliding _down_, friction acts _up_ the slope:

$$a = g(\sin\theta - \mu\cos\theta)$$

If the block is sliding _up_, friction acts _down_ the slope:

$$a = -g(\sin\theta + \mu\cos\theta)$$

The negative sign indicates deceleration.

## Work, Energy, and Power

**Work Done:** $W = Fs\cos\theta$, where $\theta$ is the angle between the force and displacement.

For force in the direction of motion: $W = Fs$.

**Kinetic Energy:** $E_k = \dfrac{1}{2}mv^2$

**Gravitational Potential Energy:** $E_p = mgh$

**Work-Energy Principle:** The work done by the resultant force equals the change in kinetic energy.

$$W_{\text{net}} = \Delta E_k = \frac{1}{2}mv^2 - \frac{1}{2}mu^2$$

**Conservation of Energy (mechanical):** In the absence of non-conservative forces:

$$E_k + E_p = \text{constant}$$

**Power:** $P = \dfrac{W}{t} = Fv$

### Why the Work-Energy Theorem Is Powerful

You do not need to know the acceleration, the time, or the detailed path. Given the initial and
final speeds and the forces, you can solve the problem directly. This is especially useful for
variable-force problems and curved paths.

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

### Energy with Friction

When friction is present, the work-energy theorem becomes:

$$W_{\text{nc}} = \Delta E_k + \Delta E_p$$

where $W_{\text{nc}}$ is the work done by non-conservative forces (friction, which is negative).

$$-fd = \frac{1}{2}mv^2 - 0 + mg(h_f - h_i)$$

## Momentum and Impulse

**Momentum:** $p = mv$

**Newton's Second Law (momentum form):** $F = \dfrac{dp}{dt} = \dfrac{\Delta p}{\Delta t}$

**Impulse:** $J = F\Delta t = \Delta p = m\Delta v$

**Conservation of Momentum:** For a system with no external forces:

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$

### Why Momentum Is Conserved

Newton's third law guarantees that internal forces cancel in pairs. If the net external force is
zero, the total momentum of the system cannot change. This is one of the most powerful conservation
laws in physics.

**Example:** A $2 \text{ kg}$ ball moving at $5 \text{ m/s}$ collides with a stationary
$3 \text{ kg}$ ball. If the $2 \text{ kg}$ ball rebounds at $1 \text{ m/s}$, find the velocity of
the $3 \text{ kg}$ ball.

Conservation of momentum:

$$2(5) + 3(0) = 2(-1) + 3v$$

$$10 = -2 + 3v$$

$$v = 4 \text{ m/s}$$

### Impulse and Average Force

For a given change in momentum, increasing the impact time decreases the average force:

$$F_{\text{avg}} = \frac{\Delta p}{\Delta t}$$

This is why car crumple zones, seat belts, air bags, and crash mats all work: they increase the time
over which the momentum changes, reducing the peak force.

### Collisions

**Elastic collision:** Both momentum and kinetic energy are conserved.

**Inelastic collision:** Momentum is conserved, but kinetic energy is not.

**Coefficient of Restitution:**

$$e = \frac{\text{relative speed of separation}}{\text{relative speed of approach}}$$

For a perfectly elastic collision, $e = 1$. For a perfectly inelastic collision, $e = 0$.

### Elastic Collision Formulas (Stationary Target)

When $m_2$ is initially at rest:

$$v_1 = \frac{m_1 - m_2}{m_1 + m_2} u_1, \qquad v_2 = \frac{2m_1}{m_1 + m_2} u_1$$

**Special case:** If $m_1 = m_2$, the objects exchange velocities.

## Circular Motion (Higher)

### Centripetal Acceleration and Force

For an object moving in a circle of radius $r$ at speed $v$:

$$a = \frac{v^2}{r} = \omega^2 r, \qquad F = \frac{mv^2}{r} = m\omega^2 r$$

The centripetal force always points towards the centre of the circle. It is not a separate force; it
is the _net_ radial force.

### Why Objects Do Not Fly Off in Circular Motion

Newton's first law says an object continues in a straight line unless acted upon by a force. In
circular motion, the centripetal force continuously deflects the object from its straight-line path.
If the centripetal force disappears (the string breaks, friction is insufficient), the object
continues in a straight line tangent to the circle at the point of release. It does not fly radially
outward.

**Example:** A car of mass $1200 \text{ kg}$ travels around a roundabout of radius $25 \text{ m}$ at
$12 \text{ m/s}$. Find the centripetal force.

$$F = \frac{mv^2}{r} = \frac{1200 \times 144}{25} = \frac{172800}{25} = 6912 \text{ N}$$

### Vertical Circular Motion

At the top of a vertical circle: $F_c = mg + T$ (both weight and tension point toward the centre).

At the bottom: $F_c = T - mg$ (tension points toward the centre, weight points away).

The minimum speed at the top to maintain circular motion: $v_{\min} = \sqrt{gr}$ (when $T = 0$).

---

## Common Pitfalls

1. **Confusing mass and weight:** Mass is measured in kg; weight is a force measured in N
   ($W = mg$).

2. **Forgetting to resolve forces:** On an inclined plane, always resolve forces parallel and
   perpendicular to the plane.

3. **Sign conventions in momentum:** Be consistent with positive and negative directions.

4. **Assuming all collisions are elastic:** Always check whether kinetic energy is conserved.

5. **Units in power:** Power is measured in watts (W). Ensure force is in N and velocity in m/s.

6. **Using the wrong kinematic equation:** Choose the equation that does not contain the unknown
   variable you do not have.

7. **Confusing centripetal force with a separate force:** The centripetal force is the _resultant_
   radial force, not an additional interaction.

8. **Forgetting that the range formula only applies when launch and landing heights are equal.**

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

9. A car of mass $1000 \text{ kg}$ rounds a bend of radius $80 \text{ m}$ at $15 \text{ m/s}$. Find
   the minimum coefficient of static friction required.

10. A $3 \text{ kg}$ block slides $4 \text{ m}$ down a $30°$ incline with $\mu_k = 0.2$. Find the
    work done by friction, the work done by gravity, and the final speed if the block started from
    rest.
