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

**Example:** A boat sails north at $5 \mathrm{ m/s}$ in a current flowing east at $3 \mathrm{ m/s}$.
Find the resultant velocity.

$$|\mathbf{v}| = \sqrt{5^2 + 3^2} = \sqrt{34} \approx 5.83 \mathrm{ m/s}$$

$$\theta = \arctan\left(\frac{3}{5}\right) \approx 30.96° \mathrm{ east of north}$$

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

**Example:** A car accelerates uniformly from $10 \mathrm{ m/s}$ to $30 \mathrm{ m/s}$ over a distance
of $200 \mathrm{ m}$. Find the acceleration and time taken.

Using $v^2 = u^2 + 2as$:

$$900 = 100 + 2a(200)$$

$$800 = 400a$$

$$a = 2 \mathrm{ m/s}^2$$

Using $v = u + at$:

$$30 = 10 + 2t$$

$$t = 10 \mathrm{ s}$$

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
- **Maximum range** at $\theta = 45^\circ$

### Why the Path Is a Parabola

Eliminating $t$ from the horizontal and vertical equations:

$$t = \frac{x}{v_0 \cos\theta}, \qquad y = x\tan\theta - \frac{gx^2}{2v_0^2\cos^2\theta}$$

This is quadratic in $x$ with a negative coefficient, confirming a parabola opening downward.

### Independence of Horizontal and Vertical Motion

The horizontal and vertical components are completely independent. There is no horizontal force
(ignoring air resistance), so the horizontal velocity is constant. The vertical acceleration is
always $g$ downward, regardless of the horizontal motion. This means you can solve each component
separately using the kinematic equations.

**Example:** A ball is thrown at $20 \mathrm{ m/s}$ at an angle of $30^\circ$ above the horizontal. Find
the maximum height and horizontal range.

Vertical component: $v_y = 20\sin 30° = 10 \mathrm{ m/s}$.

Maximum height (when $v_y = 0$): $v_y^2 = u_y^2 - 2gh$

$$0 = 100 - 2(9.8)h$$

$$h = \frac{100}{19.6} \approx 5.10 \mathrm{ m}$$

Time of flight: $t = \dfrac{2u_y}{g} = \dfrac{20}{9.8} \approx 2.04 \mathrm{ s}$.

Horizontal component: $v_x = 20\cos 30° = 17.32 \mathrm{ m/s}$.

Range: $R = v_x \cdot t = 17.32 \times 2.04 \approx 35.3 \mathrm{ m}$.

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

**Example:** A block of mass $5 \mathrm{ kg}$ is pulled across a rough horizontal surface by a
horizontal force of $30 \mathrm{ N}$. The coefficient of friction is $0.4$. Find the acceleration.

Normal force: $N = mg = 5 \times 9.8 = 49 \mathrm{ N}$.

Friction force: $f = \mu N = 0.4 \times 49 = 19.6 \mathrm{ N}$.

Resultant force: $F_{\mathrm{net}} = 30 - 19.6 = 10.4 \mathrm{ N}$.

$$a = \frac{F_{\mathrm{net}}}{m} = \frac{10.4}{5} = 2.08 \mathrm{ m/s}^2$$

### Free-Body Diagrams and Connected Bodies

Draw a free body diagram for _each_ object separately. Apply Newton's second law to each object. The
tension in a massless, inextensible string is the same throughout.

**Example:** Two masses $m_1 = 3 \mathrm{ kg}$ and $m_2 = 5 \mathrm{ kg}$ are connected by a light
inextensible string over a smooth pulley. Find the acceleration and tension.

For $m_1$ (moving up): $T - m_1 g = m_1 a$.

For $m_2$ (moving down): $m_2 g - T = m_2 a$.

Adding: $m_2 g - m_1 g = (m_1 + m_2)a$

$$a = \frac{(m_2 - m_1)g}{m_1 + m_2} = \frac{2 \times 9.8}{8} = 2.45 \mathrm{ m/s}^2$$

$$T = m_1(g + a) = 3(9.8 + 2.45) = 36.75 \mathrm{ N}$$

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

$$W_{\mathrm{net}} = \Delta E_k = \frac{1}{2}mv^2 - \frac{1}{2}mu^2$$

**Conservation of Energy (mechanical):** In the absence of non-conservative forces:

$$E_k + E_p = \mathrm{constant}$$

**Power:** $P = \dfrac{W}{t} = Fv$

### Why the Work-Energy Theorem Is Powerful

You do not need to know the acceleration, the time, or the detailed path. Given the initial and
final speeds and the forces, you can solve the problem directly. This is especially useful for
variable-force problems and curved paths.

**Example:** A car of mass $1200 \mathrm{ kg}$ travels at a constant speed of $25 \mathrm{ m/s}$ up a
hill inclined at $5^\circ$ to the horizontal. The total resistive force is $800 \mathrm{ N}$. Find the
power output of the engine.

Component of weight along the slope:
$mg\sin 5° = 1200 \times 9.8 \times \sin 5° \approx 1026 \mathrm{ N}$.

Total force to be overcome: $1026 + 800 = 1826 \mathrm{ N}$.

$$P = Fv = 1826 \times 25 = 45650 \mathrm{ W} \approx 45.7 \mathrm{ kW}$$

**Example:** A roller coaster car starts from rest at a height of $30 \mathrm{ m}$. Neglecting
friction, find its speed at a height of $10 \mathrm{ m}$.

Conservation of energy: $mgh_1 = mgh_2 + \frac{1}{2}mv^2$

$$\frac{1}{2}v^2 = g(h_1 - h_2) = 9.8 \times 20 = 196$$

$$v = \sqrt{392} \approx 19.8 \mathrm{ m/s}$$

### Energy with Friction

When friction is present, the work-energy theorem becomes:

$$W_{\mathrm{nc}} = \Delta E_k + \Delta E_p$$

where $W_{\mathrm{nc}}$ is the work done by non-conservative forces (friction, which is negative).

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

**Example:** A $2 \mathrm{ kg}$ ball moving at $5 \mathrm{ m/s}$ collides with a stationary
$3 \mathrm{ kg}$ ball. If the $2 \mathrm{ kg}$ ball rebounds at $1 \mathrm{ m/s}$, find the velocity of
the $3 \mathrm{ kg}$ ball.

Conservation of momentum:

$$2(5) + 3(0) = 2(-1) + 3v$$

$$10 = -2 + 3v$$

$$v = 4 \mathrm{ m/s}$$

### Impulse and Average Force

For a given change in momentum, increasing the impact time decreases the average force:

$$F_{\mathrm{avg}} = \frac{\Delta p}{\Delta t}$$

This is why car crumple zones, seat belts, air bags, and crash mats all work: they increase the time
over which the momentum changes, reducing the peak force.

### Collisions

**Elastic collision:** Both momentum and kinetic energy are conserved.

**Inelastic collision:** Momentum is conserved, but kinetic energy is not.

**Coefficient of Restitution:**

$$e = \frac{\mathrm{relative speed of separation}}{\mathrm{relative speed of approach}}$$

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

**Example:** A car of mass $1200 \mathrm{ kg}$ travels around a roundabout of radius $25 \mathrm{ m}$ at
$12 \mathrm{ m/s}$. Find the centripetal force.

$$F = \frac{mv^2}{r} = \frac{1200 \times 144}{25} = \frac{172800}{25} = 6912 \mathrm{ N}$$

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

1. A stone is thrown horizontally from a cliff $40 \mathrm{ m}$ high at $15 \mathrm{ m/s}$. Find the
   time to hit the ground and the horizontal distance travelled.

2. A $60 \mathrm{ kg}$ skier accelerates down a slope inclined at $20^\circ$ to the horizontal. The
   coefficient of friction is $0.1$. Find the acceleration.

3. A car of mass $800 \mathrm{ kg}$ accelerates from rest to $20 \mathrm{ m/s}$ in $8 \mathrm{ s}$.
   Calculate the work done and the average power.

4. A $4 \mathrm{ kg}$ object moving at $6 \mathrm{ m/s}$ collides with a $6 \mathrm{ kg}$ object moving at
   $2 \mathrm{ m/s}$ in the same direction. They stick together. Find the velocity after the collision
   and the kinetic energy lost.

5. A ball is projected at $25 \mathrm{ m/s}$ at $40^\circ$ above the horizontal from the top of a
   $15 \mathrm{ m}$ cliff. Find the speed when it hits the ground.

6. Two particles of masses $2 \mathrm{ kg}$ and $3 \mathrm{ kg}$ are connected by a string over a
   pulley. The system is released from rest. Find the speed after the $3 \mathrm{ kg}$ mass has fallen
   $2 \mathrm{ m}$.

7. A crane lifts a $500 \mathrm{ kg}$ load from rest with constant acceleration. In the first
   $3 \mathrm{ s}$, it rises $9 \mathrm{ m}$. Find the tension in the cable.

8. A bullet of mass $10 \mathrm{ g}$ travelling at $400 \mathrm{ m/s}$ embeds itself in a wooden block
   of mass $2 \mathrm{ kg}$ at rest. Find the velocity of the block immediately after impact.

9. A car of mass $1000 \mathrm{ kg}$ rounds a bend of radius $80 \mathrm{ m}$ at $15 \mathrm{ m/s}$. Find
   the minimum coefficient of static friction required.

10. A $3 \mathrm{ kg}$ block slides $4 \mathrm{ m}$ down a $30^\circ$ incline with $\mu_k = 0.2$. Find the
    work done by friction, the work done by gravity, and the final speed if the block started from
    rest.

## 11. Derivation of the Kinematic Equations from Calculus (Advanced Higher)

For constant acceleration $a$, starting from the definition of acceleration:

$$a = \frac{dv}{dt}$$

Integrating with respect to time:

$$\int_{u}^{v} dv = \int_0^t a\, dt' \implies v - u = at \implies v = u + at$$

This is the first kinematic equation. Now integrate velocity to get displacement:

$$v = \frac{ds}{dt} = u + at$$

$$\int_0^s ds = \int_0^t (u + at')\, dt' \implies s = ut + \frac{1}{2}at^2$$

This is the second kinematic equation. To eliminate $t$, substitute $t = (v - u)/a$ into the second
equation:

$$s = u\frac{v - u}{a} + \frac{1}{2}a\left(\frac{v - u}{a}\right)^2 = \frac{uv - u^2}{a} + \frac{v^2 - 2uv + u^2}{2a}$$

$$2as = 2uv - 2u^2 + v^2 - 2uv + u^2 = v^2 - u^2$$

$$v^2 = u^2 + 2as$$

This is the third kinematic equation. The fourth follows from the average velocity:

$$s = \bar{v}t = \frac{u + v}{2}t$$

## 12. Worked Example: Projectile from a Height

A ball is thrown from the top of a $40 \mathrm{ m}$ cliff at $15 \mathrm{ m/s}$ at $25^\circ$ above the
horizontal. Find the time to hit the ground and the horizontal distance.

$$v_x = 15\cos 25° = 13.59 \mathrm{ m/s}, \qquad v_y = 15\sin 25° = 6.34 \mathrm{ m/s}$$

The vertical motion: $y = 40 + 6.34t - 4.9t^2$. At impact, $y = 0$:

$$4.9t^2 - 6.34t - 40 = 0$$

$$t = \frac{6.34 \pm \sqrt{6.34^2 + 4 \times 4.9 \times 40}}{2 \times 4.9} = \frac{6.34 \pm \sqrt{40.20 + 784}}{9.8} = \frac{6.34 \pm 28.72}{9.8}$$

Taking the positive root: $t = \frac{35.06}{9.8} = 3.58 \mathrm{ s}$.

Horizontal distance: $R = v_x t = 13.59 \times 3.58 = 48.7 \mathrm{ m}$.

## 13. Worked Example: Energy with Friction on an Incline

A $4 \mathrm{ kg}$ block slides $5 \mathrm{ m}$ down a $30^\circ$ rough incline with $\mu_k = 0.2$, starting
from rest.

**Work done by gravity:**
$W_g = mg\sin\theta \times d = 4 \times 9.8 \times \sin 30° \times 5 = 98 \mathrm{ J}$

**Normal force:** $N = mg\cos\theta = 4 \times 9.8 \times \cos 30° = 33.95 \mathrm{ N}$

**Friction force:** $f = \mu_k N = 0.2 \times 33.95 = 6.79 \mathrm{ N}$

**Work done by friction:** $W_f = -fd = -6.79 \times 5 = -33.95 \mathrm{ J}$

**Net work:** $W_{\mathrm{net}} = 98 - 33.95 = 64.05 \mathrm{ J}$

**Final speed:**
$W_{\mathrm{net}} = \frac{1}{2}mv^2 \implies v = \sqrt{\frac{2 \times 64.05}{4}} = \sqrt{32.03} = 5.66 \mathrm{ m/s}$

## 14. Vertical Circular Motion: Detailed Analysis

For a ball of mass $m$ on a string of length $L$ swung in a vertical circle:

**At the bottom:** $T - mg = \frac{mv^2}{L}$, so $T = mg + \frac{mv^2}{L}$ (tension is maximum
here).

**At the top:** $T + mg = \frac{mv^2}{L}$, so $T = \frac{mv^2}{L} - mg$ (tension is minimum here).

**Minimum speed at the top:** Set $T = 0$: $v_{\min} = \sqrt{gL}$.

**Worked Example:** A ball of mass $0.5 \mathrm{ kg}$ on a string of length $1.2 \mathrm{ m}$ has speed
$7 \mathrm{ m/s}$ at the bottom. Find the tension at the bottom and the tension at the top.

**At the bottom:**
$T_b = mg + \frac{mv_b^2}{L} = 0.5 \times 9.8 + \frac{0.5 \times 49}{1.2} = 4.9 + 20.42 = 25.3 \mathrm{ N}$

**Energy conservation to find speed at the top:**

$$\frac{1}{2}mv_b^2 = \frac{1}{2}mv_t^2 + mg(2L)$$

$$v_t^2 = v_b^2 - 4gL = 49 - 4 \times 9.8 \times 1.2 = 49 - 47.04 = 1.96$$

$$v_t = 1.4 \mathrm{ m/s}$$

**At the top:**
$T_t = \frac{mv_t^2}{L} - mg = \frac{0.5 \times 1.96}{1.2} - 4.9 = 0.817 - 4.9 = -4.08 \mathrm{ N}$

A negative tension means the string would go slack. The ball does not complete the full circle. For
the ball to just complete the circle, we need $v_t = \sqrt{gL} = \sqrt{11.76} = 3.43 \mathrm{ m/s}$.

## 15. Summary Table: Key Mechanics Formulas

| Topic             | Formula                    | Variables                   | Conditions              |
| ----------------- | -------------------------- | --------------------------- | ----------------------- |
| Kinematics        | $v = u + at$               | $u$, $v$, $a$, $t$          | Constant acceleration   |
| Kinematics        | $v^2 = u^2 + 2as$          | $u$, $v$, $a$, $s$          | Constant acceleration   |
| Projectile range  | $R = u^2\sin 2\theta / g$  | $u$, $\theta$, $g$          | Launch = landing height |
| Newton's 2nd law  | $F = ma$                   | $F$, $m$, $a$               | Vector equation         |
| Weight            | $W = mg$                   | $m$, $g$                    | Near surface            |
| Friction          | $f = \mu N$                | $\mu$, $N$                  | Sliding                 |
| Work              | $W = Fs\cos\theta$         | $F$, $s$, $\theta$          | Constant force          |
| Kinetic energy    | $E_k = \frac{1}{2}mv^2$    | $m$, $v$                    | Always positive         |
| Potential energy  | $E_p = mgh$                | $m$, $g$, $h$               | Near surface            |
| Power             | $P = Fv$                   | $F$, $v$                    | Constant velocity       |
| Momentum          | $p = mv$                   | $m$, $v$                    | Vector                  |
| Impulse           | $J = F\Delta t = \Delta p$ | $F$, $\Delta t$, $\Delta p$ | --                      |
| Centripetal force | $F = mv^2/r$               | $m$, $v$, $r$               | Uniform circular motion |

## 16. Practice Questions (Additional)

11. A stone is thrown at $18 \mathrm{ m/s}$ at $50^\circ$ to the horizontal from the top of a
    $25 \mathrm{ m}$ cliff. Calculate the speed at which it hits the ground.

12. A car of mass $900 \mathrm{ kg}$ travels at constant speed around a circular bend of radius
    $60 \mathrm{ m}$ that is banked at $12^\circ$. Calculate the minimum coefficient of static friction
    required.

13. A bullet of mass $8 \mathrm{ g}$ travelling at $600 \mathrm{ m/s}$ passes through a wooden block of
    mass $2 \mathrm{ kg}$, emerging at $200 \mathrm{ m/s}$. Calculate the velocity of the block and the
    kinetic energy lost.

14. A $5 \mathrm{ kg}$ box is pushed up a $35^\circ$ incline at constant speed by a force of $50 \mathrm{ N}$
    applied parallel to the incline. Calculate the coefficient of kinetic friction.

15. A ball of mass $0.3 \mathrm{ kg}$ is attached to a string of length $0.8 \mathrm{ m}$ and swung in a
    vertical circle. Calculate the minimum speed at the lowest point for the ball to complete the
    full circle.

16. Two objects of masses $3 \mathrm{ kg}$ and $5 \mathrm{ kg}$, connected by a light string, are placed
    on a smooth table with a pulley at the edge. The $5 \mathrm{ kg}$ mass hangs over the edge. Find
    the speed of the system after the $5 \mathrm{ kg}$ mass has fallen $1.5 \mathrm{ m}$ using energy
    methods.

17. A satellite of mass $500 \mathrm{ kg}$ orbits at a height of $600 \mathrm{ km}$ above Earth's
    surface. Calculate the orbital speed, period, and gravitational potential energy of the
    satellite.

18. A $2 \mathrm{ kg}$ object slides from rest down a frictionless curved ramp of total height
    $4 \mathrm{ m}$. At the bottom, it enters a rough horizontal surface with $\mu_k = 0.3$. How far
    does it slide before stopping?

19. A crane lifts a $300 \mathrm{ kg}$ load with an upward acceleration of $1.5 \mathrm{ m/s}^2$ for
    $4 \mathrm{ s}$, then travels at constant speed for $3 \mathrm{ s}$, then decelerates at
    $2 \mathrm{ m/s}^2$ to rest. Calculate the total work done by the tension in the cable.

20. Explain why the range of a projectile is the same for complementary angles (e.g., $30^\circ$ and
    $60^\circ$). Include a mathematical derivation.

## Extended Worked Examples

### Example 21: Work-Energy with Variable Force

A force $F(x) = 3x^2 - 2x$ (in N) acts on a $2 \mathrm{ kg}$ object moving along the x-axis. Calculate
the work done by this force as the object moves from $x = 0$ to $x = 3 \mathrm{ m}$, and find the
speed at $x = 3 \mathrm{ m}$ if the object starts from rest.

**Step 1: Calculate the work done by integration**

$$W = \int_0^3 F(x) \, dx = \int_0^3 (3x^2 - 2x) \, dx = \left[ x^3 - x^2 \right]_0^3 = (27 - 9) - 0 = 18 \mathrm{ J}$$

**Step 2: Apply the work-energy theorem**

$$W = \Delta KE = \frac{1}{2}mv^2 - \frac{1}{2}mu^2$$

$$18 = \frac{1}{2}(2)v^2 - 0$$

$$v = \sqrt{18} = 4.24 \mathrm{ m/s}$$

:::info
The work-energy theorem is one of the most powerful tools in mechanics. It works even when
forces are variable (requiring calculus) and does not require knowledge of the path taken, only the
initial and final speeds.
:::

### Example 22: Oblique Collision in 2D

A $3 \mathrm{ kg}$ object moving at $4 \mathrm{ m/s}$ collides with a stationary $2 \mathrm{ kg}$ object.
After the collision, the $3 \mathrm{ kg}$ object moves at $2 \mathrm{ m/s}$ at $30^\circ$ to its original
direction. Find the velocity of the $2 \mathrm{ kg}$ object after the collision.

Take the original direction as the x-axis.

**Step 1: Conservation of momentum (x-component)**

$$3 \times 4 + 0 = 3 \times 2\cos 30° + 2v_{2x}$$

$$12 = 3 \times 1.732 + 2v_{2x} = 5.196 + 2v_{2x}$$

$$v_{2x} = \frac{12 - 5.196}{2} = 3.402 \mathrm{ m/s}$$

**Step 2: Conservation of momentum (y-component)**

$$0 = 3 \times 2\sin 30° + 2v_{2y}$$

$$0 = 3 \times 1 + 2v_{2y} = 3 + 2v_{2y}$$

$$v_{2y} = -1.5 \mathrm{ m/s}$$

**Step 3: Find magnitude and direction of $v_2$**

$$|v_2| = \sqrt{3.402^2 + (-1.5)^2} = \sqrt{11.57 + 2.25} = \sqrt{13.82} = 3.72 \mathrm{ m/s}$$

$$\theta = \arctan\left(\frac{-1.5}{3.402}\right) = -23.8^\circ$$

The $2 \mathrm{ kg}$ object moves at $3.72 \mathrm{ m/s}$ at $23.8^\circ$ below the original direction.

### Example 23: Connected Bodies on an Inclined Plane

Two masses, $m_A = 8 \mathrm{ kg}$ on a $30^\circ$ incline and $m_B = 5 \mathrm{ kg}$ hanging vertically, are
connected by a light inextensible string over a smooth pulley at the top of the incline. The
coefficient of friction between $m_A$ and the incline is $\mu = 0.2$. Find the acceleration of the
system and the tension in the string. Take $g = 9.8 \mathrm{ m/s}^2$.

**Step 1: Identify the direction of motion**

Weight component of $m_A$ down the slope:
$m_A g \sin 30° = 8 \times 9.8 \times 0.5 = 39.2 \mathrm{ N}$

Friction force (opposing motion):
$f = \mu m_A g \cos 30° = 0.2 \times 8 \times 9.8 \times 0.866 = 13.6 \mathrm{ N}$

Weight of $m_B$: $m_B g = 5 \times 9.8 = 49 \mathrm{ N}$

Since $m_B g = 49 \mathrm{ N} \gt m_A g \sin 30° + f = 39.2 + 13.6 = 52.8 \mathrm{ N}$... actually
$49 \lt 52.8$.

So the system does not move. Let me verify: if we assume $m_B$ moves down:

$$m_B g - m_A g \sin 30° - \mu m_A g \cos 30° = (m_A + m_B)a$$

$$49 - 39.2 - 13.6 = 13a$$

$$-3.8 = 13a \implies a = -0.29 \mathrm{ m/s}^2$$

The negative acceleration means our assumption was wrong. The system would try to move with $m_A$
sliding down, but let us check:

$$m_A g \sin 30° - m_B g - \mu m_A g \cos 30° = (m_A + m_B)a$$

$$39.2 - 49 - 13.6 = 13a$$

$$-23.4 = 13a \implies a = -1.8 \mathrm{ m/s}^2$$

This is also negative. Neither direction produces positive acceleration, so the system remains in
equilibrium. The static friction adjusts to prevent motion.

**Correct answer:** The system is in equilibrium. The tension equals $m_B g = 49 \mathrm{ N}$ (since
the string supports $m_B$ in equilibrium), and the static friction on $m_A$ adjusts to balance the
net force.

:::warning
Always check whether motion actually occurs before applying the equations of motion. If
the net force in every possible direction is negative (accounting for the maximum static friction),
the system remains stationary.
:::

## Common Pitfalls Extended

### Pitfall 6: Using Kinematic Equations for Non-Constant Acceleration

The standard kinematic equations ($v = u + at$, $s = ut + \frac{1}{2}at^2$, etc.) assume _constant_
acceleration. For variable acceleration, you must use calculus:

$$a = \frac{dv}{dt}, \quad v = \frac{ds}{dt}, \quad a = v\frac{dv}{ds}$$

### Pitfall 7: Incorrect Free Body Diagrams for Connected Bodies

When drawing free body diagrams for connected bodies (e.g., two masses on a pulley), each body gets
its own diagram. The tension in the string appears on _both_ diagrams, and the acceleration is the
same for both bodies (assuming an inextensible string). Never combine forces from different bodies
on one diagram.

### Pitfall 8: Forgetting That Normal Force Is Not Always $mg$

On an incline: $N = mg\cos\theta$. In an accelerating lift: $N = m(g \pm a)$. The normal force
adjusts to prevent motion perpendicular to the surface, and is only equal to $mg$ on a horizontal
surface with no vertical acceleration.

## Additional Practice Problems

21. A $0.5 \mathrm{ kg}$ ball is thrown horizontally from a cliff $40 \mathrm{ m}$ high at
    $15 \mathrm{ m/s}$. Calculate (a) the time to hit the ground, (b) the vertical velocity at impact,
    (c) the total speed at impact, and (d) the horizontal distance from the base of the cliff.

22. A car of mass $1200 \mathrm{ kg}$ travels at $20 \mathrm{ m/s}$ on a level road. The engine provides
    a driving force of $3000 \mathrm{ N}$ and the total resistive force is $800 \mathrm{ N}$. Calculate
    the acceleration, the distance to reach $30 \mathrm{ m/s}$, and the power developed at
    $30 \mathrm{ m/s}$.

23. A $60 \mathrm{ kg}$ person stands on a spring scale in a lift. Calculate the scale reading when
    the lift (a) accelerates upward at $2 \mathrm{ m/s}^2$, (b) travels at constant velocity, (c)
    decelerates at $3 \mathrm{ m/s}^2$ while moving upward, and (d) is in free fall.

24. Two particles of masses $0.3 \mathrm{ kg}$ and $0.5 \mathrm{ kg}$ approach each other with speeds
    $4 \mathrm{ m/s}$ and $2 \mathrm{ m/s}$ respectively. After a perfectly elastic head-on collision,
    calculate the velocities of both particles.

25. Derive an expression for the period of a simple pendulum using energy considerations. A pendulum
    of length $1.5 \mathrm{ m}$ is displaced $10^\circ$ from the vertical. Calculate the maximum speed of
    the bob and the period of oscillation.
