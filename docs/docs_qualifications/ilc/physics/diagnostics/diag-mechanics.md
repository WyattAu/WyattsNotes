---
title: 'Mechanics -- Diagnostic Tests'
description:
  'ILC Physics Mechanics -- Diagnostic Tests notes covering key definitions, core concepts, worked
  examples, and practice questions for in-depth revision.'
slug: diag-mechanics
hide_table_of_contents: true
---

# Mechanics -- Diagnostic Tests

## Unit Tests

### UT-1: Linear Motion

**Question:**

(a) Define the following terms: displacement, velocity, acceleration, and scalar quantity.

(b) A car travelling at $30\,\text{m s}^{-1}$ decelerates uniformly at $5\,\text{m s}^{-2}$ until it
comes to rest. Calculate the distance travelled during deceleration and the time taken.

(c) A stone is dropped from a cliff $45\,\text{m}$ high. Calculate: (i) the time it takes to reach
the ground, (ii) its velocity just before impact. Take $g = 9.8\,\text{m s}^{-2}$ and ignore air
resistance.

(d) Explain the difference between speed and velocity. Can an object have constant speed but
changing velocity? If so, give an example.

**Solution:**

(a)

- **Displacement**: the straight-line distance from a fixed reference point to the current position,
  including direction. It is a vector quantity (has both magnitude and direction).
- **Velocity**: the rate of change of displacement with respect to time. Vector quantity:
  $\vec{v} = \frac{\Delta \vec{s}}{\Delta t}$.
- **Acceleration**: the rate of change of velocity with respect to time. Vector quantity:
  $\vec{a} = \frac{\Delta \vec{v}}{\Delta t}$.
- **Scalar quantity**: a physical quantity that has magnitude only (no direction). Examples: speed,
  distance, mass, temperature, energy.

(b) $u = 30\,\text{m s}^{-1}$, $v = 0$, $a = -5\,\text{m s}^{-2}$.

Using $v^2 = u^2 + 2as$:

$$0 = 900 + 2(-5)s$$ $$10s = 900$$ $$s = 90\,\text{m}$$

Using $v = u + at$:

$$0 = 30 + (-5)t$$ $$t = 6\,\text{s}$$

The car travels $90\,\text{m}$ in $6\,\text{s}$.

(c) $u = 0$, $s = 45\,\text{m}$, $a = 9.8\,\text{m s}^{-2}$.

(i) Using $s = ut + \frac{1}{2}at^2$:

$$45 = 0 + \frac{1}{2}(9.8)t^2$$ $$t^2 = \frac{90}{9.8} = 9.184$$ $$t = 3.03\,\text{s}$$

(ii) Using $v = u + at$:

$$v = 0 + 9.8 \times 3.03 = 29.7\,\text{m s}^{-1}$$

(d) **Speed** is the rate of change of distance (scalar), while **velocity** is the rate of change
of displacement (vector). Yes, an object can have constant speed but changing velocity if its
direction is changing. Example: a car travelling at constant speed around a circular roundabout has
constant speed but changing velocity because its direction is continuously changing.

---

### UT-2: Forces and Newton's Laws

**Question:**

(a) State Newton's three laws of motion.

(b) A block of mass $12\,\text{kg}$ is suspended by two ropes. Rope A makes an angle of $30^\circ$
with the vertical on the left and Rope B makes an angle of $45^\circ$ with the vertical on the
right. Calculate the tension in each rope.

(c) A hockey puck of mass $0.17\,\text{kg}$ is hit with a force that gives it an acceleration of
$40\,\text{m s}^{-2}$ for $0.05\,\text{s}$. Calculate: (i) the force applied, (ii) the impulse,
(iii) the final velocity.

(d) Explain the concept of friction. Describe the difference between static friction and kinetic
friction.

**Solution:**

(a)

- **First law**: An object remains at rest or moves with constant velocity unless acted upon by a
  net external force (law of inertia).
- **Second law**: The net force acting on an object equals the rate of change of its momentum. For
  constant mass: $F = ma$.
- **Third law**: If body A exerts a force on body B, then body B exerts an equal and opposite force
  on body A (action-reaction pair). The forces are equal in magnitude, opposite in direction, and
  act on different bodies.

(b) The block is in equilibrium, so the horizontal and vertical components of tension must balance.

Weight $= mg = 12 \times 9.8 = 117.6\,\text{N}$ (downward).

Vertical equilibrium: $T_A \cos(30^\circ) + T_B \cos(45^\circ) = 117.6$

Horizontal equilibrium: $T_A \sin(30^\circ) = T_B \sin(45^\circ)$, so
$T_B = T_A \frac{\sin(30^\circ)}{\sin(45^\circ)} = T_A \frac{0.5}{0.7071} = 0.7071\,T_A$.

Substituting into vertical: $T_A \cos(30^\circ) + 0.7071\,T_A \cos(45^\circ) = 117.6$

$$T_A(0.8660 + 0.7071 \times 0.7071) = 117.6$$ $$T_A(0.8660 + 0.5000) = 117.6$$
$$1.366\,T_A = 117.6$$ $$T_A = 86.1\,\text{N}$$

$$T_B = 0.7071 \times 86.1 = 60.9\,\text{N}$$

(c)

(i) $F = ma = 0.17 \times 40 = 6.8\,\text{N}$

(ii) Impulse $J = F \times t = 6.8 \times 0.05 = 0.34\,\text{N s}$

(iii) Impulse $= \Delta p = mv$, so $0.34 = 0.17 \times v$, $v = 2.0\,\text{m s}^{-1}$

(d) **Friction** is a force that opposes the relative motion or attempted motion between two
surfaces in contact. It acts parallel to the surfaces in contact.

**Static friction** acts between surfaces that are not moving relative to each other. It adjusts its
magnitude to match the applied force, up to a maximum value ($F_{\text{max}} = \mu_s R$, where
$\mu_s$ is the coefficient of static friction and $R$ is the normal reaction). Static friction
prevents objects from starting to move.

**Kinetic (sliding) friction** acts between surfaces that are moving relative to each other. It is
generally constant ($F_k = \mu_k R$) and typically less than the maximum static friction. This is
why it takes more force to start an object moving than to keep it moving.

---

### UT-3: Work, Energy, and Power

**Question:**

(a) Define work done, kinetic energy, gravitational potential energy, and power. Give the formula
and SI unit for each.

(b) A car of mass $1500\,\text{kg}$ accelerates from $15\,\text{m s}^{-1}$ to $25\,\text{m s}^{-1}$
over a distance of $200\,\text{m}$. Calculate: (i) the change in kinetic energy, (ii) the work done
by the engine, (iii) the average force exerted by the engine (assuming no friction).

(c) A pump lifts $500\,\text{kg}$ of water from a well $12\,\text{m}$ deep in 30 seconds. Calculate
the power output of the pump.

(d) A pendulum bob of mass $0.5\,\text{kg}$ is released from a height of $0.8\,\text{m}$ above its
lowest point. Using the principle of conservation of energy, calculate its speed at the lowest point
and its maximum height on the opposite side.

**Solution:**

(a)

- **Work done**: $W = F \times d \times \cos\theta$. The energy transferred when a force causes
  displacement. SI unit: joule (J).
- **Kinetic energy**: $E_k = \frac{1}{2}mv^2$. The energy of a moving object. SI unit: joule (J).
- **Gravitational potential energy**: $E_p = mgh$. The energy stored by an object due to its height
  in a gravitational field. SI unit: joule (J).
- **Power**: $P = \frac{W}{t}$ or $P = Fv$. The rate at which work is done or energy is transferred.
  SI unit: watt (W).

(b)

(i)
$\Delta E_k = \frac{1}{2}m(v^2 - u^2) = \frac{1}{2}(1500)(25^2 - 15^2) = 750(625 - 225) = 750 \times 400 = 300{,}000\,\text{J}$

(ii) By the work-energy theorem: work done by engine $= \Delta E_k = 300{,}000\,\text{J}$ (assuming
no friction).

(iii) $W = F \times d$, so $F = W / d = 300{,}000 / 200 = 1500\,\text{N}$.

(c) Work done $= mgh = 500 \times 9.8 \times 12 = 58{,}800\,\text{J}$.

$$P = \frac{W}{t} = \frac{58{,}800}{30} = 1960\,\text{W} = 1.96\,\text{kW}$$

(d) At the lowest point, by conservation of energy ($E_p = E_k$, assuming no energy losses):

$$mgh = \frac{1}{2}mv^2$$ $$0.5 \times 9.8 \times 0.8 = \frac{1}{2}(0.5)v^2$$ $$3.92 = 0.25v^2$$
$$v^2 = 15.68$$ $$v = 3.96\,\text{m s}^{-1}$$

On the opposite side, by conservation of energy, the bob reaches the same height (assuming no air
resistance): **$0.8\,\text{m}$** above the lowest point.

---

## Integration Tests

### IT-1: Projectile Motion and Energy Conservation

**Question:**

(a) A golfer hits a ball from ground level with an initial velocity of $35\,\text{m s}^{-1}$ at an
angle of $50^\circ$ to the horizontal. Calculate: (i) the maximum height reached, (ii) the total
time of flight, (iii) the horizontal range.

(b) A roller coaster car of mass $500\,\text{kg}$ starts from rest at a height of $40\,\text{m}$
above the ground. At the lowest point (ground level), the car has a speed of $26\,\text{m s}^{-1}$.
Calculate: (i) the total mechanical energy at the starting point, (ii) the total mechanical energy
at the lowest point, (iii) the energy lost to friction.

(c) A crate of mass $25\,\text{kg}$ is pushed up a rough incline of length $8\,\text{m}$ at an angle
of $30^\circ$ to the horizontal. The coefficient of kinetic friction is $0.3$. Calculate: (i) the
work done against gravity, (ii) the work done against friction, (iii) the total work done by the
applied force if the crate moves at constant velocity.

(d) Explain why a satellite in a stable circular orbit around Earth does not need a continuous
supply of fuel to maintain its orbit, despite the gravitational force acting on it.

**Solution:**

(a) $u = 35\,\text{m s}^{-1}$, $\theta = 50^\circ$.

$u_x = 35\cos(50^\circ) = 22.50\,\text{m s}^{-1}$ $u_y = 35\sin(50^\circ) = 26.81\,\text{m s}^{-1}$

(i) Maximum height: $v_y = 0$ at the top.

$$v_y^2 = u_y^2 + 2(-g)s$$ $$0 = 26.81^2 - 2(9.8)s$$ $$s = \frac{718.78}{19.6} = 36.67\,\text{m}$$

(ii) Time of flight: $t = \frac{2u_y}{g} = \frac{2 \times 26.81}{9.8} = 5.47\,\text{s}$.

(iii) Range: $R = u_x \times t = 22.50 \times 5.47 = 123.1\,\text{m}$.

(b)

(i) At the starting point (rest at height $40\,\text{m}$): $E_k = 0$,
$E_p = mgh = 500 \times 9.8 \times 40 = 196{,}000\,\text{J}$. Total $= 196{,}000\,\text{J}$.

(ii) At the lowest point: $E_p = 0$,
$E_k = \frac{1}{2}(500)(26)^2 = 250 \times 676 = 169{,}000\,\text{J}$. Total
$= 169{,}000\,\text{J}$.

(iii) Energy lost to friction $= 196{,}000 - 169{,}000 = 27{,}000\,\text{J}$.

(c)

(i) Height of incline: $h = 8\sin(30^\circ) = 4\,\text{m}$. Work against gravity
$= mgh = 25 \times 9.8 \times 4 = 980\,\text{J}$.

(ii) Normal force: $R = mg\cos(30^\circ) = 25 \times 9.8 \times 0.866 = 212.3\,\text{N}$. Friction
force: $F_f = \mu R = 0.3 \times 212.3 = 63.7\,\text{N}$. Work against friction
$= F_f \times d = 63.7 \times 8 = 509.6\,\text{J}$.

(iii) At constant velocity, net force $= 0$, so applied force
$= mg\sin(30^\circ) + F_f = 25 \times 9.8 \times 0.5 + 63.7 = 122.5 + 63.7 = 186.2\,\text{N}$.

Total work by applied force $= 186.2 \times 8 = 1489.6\,\text{J}$.

(d) A satellite in a stable circular orbit is in perpetual free fall. The gravitational force
provides the centripetal acceleration needed to keep the satellite moving in a circular path. The
satellite's velocity is always tangential to the orbit, meaning the gravitational force is always
perpendicular to the direction of motion. Since work done $W = F \times d \times \cos\theta$ and
$\theta = 90^\circ$ ($\cos 90^\circ = 0$), gravity does no work on the satellite. The satellite's
speed and kinetic energy remain constant, and no energy input (fuel) is required to maintain the
orbit. This is the same principle as an object in free fall at constant speed (ignoring air
resistance).

---

### IT-2: Forces, Energy, and Momentum

**Question:**

(a) A $60\,\text{kg}$ person stands on a bathroom scale in a lift. Calculate the reading on the
scale when the lift is: (i) stationary, (ii) accelerating upwards at $2\,\text{m s}^{-2}$, (iii)
accelerating downwards at $3\,\text{m s}^{-2}$.

(b) Two trolleys, A of mass $2\,\text{kg}$ and B of mass $3\,\text{kg}$, are pushed towards each
other and collide head-on. Before the collision, A moves at $4\,\text{m s}^{-1}$ to the right and B
moves at $2\,\text{m s}^{-1}$ to the left. After the collision, they stick together. Calculate their
common velocity after the collision.

(c) A spring with spring constant $k = 200\,\text{N m}^{-1}$ is compressed by $0.15\,\text{m}$ and
used to launch a $0.4\,\text{kg}$ ball horizontally. Calculate the speed of the ball as it leaves
the spring, assuming all the elastic potential energy is converted to kinetic energy.

(d) A student claims that "a heavier object falls faster than a lighter one in a vacuum." Evaluate
this claim using Newton's laws and the equation for gravitational acceleration.

**Solution:**

(a)

(i) Stationary ($a = 0$): Reading = weight $= mg = 60 \times 9.8 = 588\,\text{N}$.

(ii) Accelerating upwards: Normal force
$N = m(g + a) = 60(9.8 + 2) = 60 \times 11.8 = 708\,\text{N}$.

(iii) Accelerating downwards: Normal force
$N = m(g - a) = 60(9.8 - 3) = 60 \times 6.8 = 408\,\text{N}$.

(b) Taking right as positive. Momentum before collision:

$$p_{\text{before}} = 2(4) + 3(-2) = 8 - 6 = 2\,\text{kg m s}^{-1}$$

By conservation of momentum: $p_{\text{after}} = p_{\text{before}}$.

Total mass after collision $= 2 + 3 = 5\,\text{kg}$.

$$5v = 2$$ $$v = 0.4\,\text{m s}^{-1} \text{ to the right}$$

(c) Elastic potential energy
$= \frac{1}{2}kx^2 = \frac{1}{2}(200)(0.15)^2 = 100 \times 0.0225 = 2.25\,\text{J}$.

Kinetic energy $= \frac{1}{2}mv^2 = 2.25$.

$$v^2 = \frac{2.25 \times 2}{0.4} = \frac{4.5}{0.4} = 11.25$$ $$v = 3.35\,\text{m s}^{-1}$$

(d) This claim is **false**. In a vacuum (no air resistance), all objects fall with the same
acceleration regardless of mass. This is because the gravitational force on an object is $F = mg$,
and by Newton's second law, $F = ma$. Therefore $ma = mg$, which gives $a = g$. Since $g$ is the
same for all objects at a given location (approximately $9.8\,\text{m s}^{-2}$ near Earth's
surface), the acceleration is independent of mass. Both a heavy and a light object released from the
same height in a vacuum will reach the ground at the same time. The misconception arises because in
air, heavier objects often fall faster due to the ratio of gravitational force to air resistance
being more favourable for massive objects.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing distance (scalar) with displacement (vector), and speed (scalar) with velocity (vector).
- Forgetting to define a positive direction in mechanics problems, leading to sign errors.
- Applying $F = ma$ to individual forces rather than the net (resultant) force on an object.
- Forgetting that the work done by gravity on a satellite in circular orbit is zero because the
  force is perpendicular to the displacement.
- Confusing kinetic friction with static friction: static friction adjusts to match the applied
  force up to a maximum; kinetic friction is constant.
- Using the wrong SUVAT equation for the given data: always identify which three variables are known
  and which one is needed.
