---
title: Forces
date: 2026-04-14
tags:
  - Physics
  - GCSE
categories:
  - Physics
slug: forces
---

## Forces

:::info
Board Coverage AQA Paper 1 & 2 | Edexcel Paper 1 & 2 | OCR A Gateway P2 & P6 | WJEC P2
:::

## 1. Force Diagrams and Vector Quantities

### 1.1 Scalars and Vectors

| Scalar (magnitude only) | Vector (magnitude and direction) |
| ----------------------- | -------------------------------- |
| Mass                    | Weight                           |
| Speed                   | Velocity                         |
| Distance                | Displacement                     |
| Energy                  | Force                            |
| Temperature             | Acceleration                     |
| Time                    | Momentum                         |

### 1.2 Why the Distinction Matters

A scalar tells you "how much." A vector tells you "how much" and "which way." When you add two
scalars, you simply add their magnitudes: 3 kg + 5 kg = 8 kg. When you add two vectors, you must
account for direction: a 3 N force east plus a 5 N force west gives a 2 N force west, not an 8 N
force. Ignoring the vector nature of forces is the single most common source of error in mechanics
problems.

### 1.3 Force Diagrams

A **free body diagram** shows all the forces acting on a single object, drawn as arrows from the
centre of the object. The length of each arrow represents the magnitude of the force.

**Rules:**

- Show only forces acting ON the object
- Forces should be drawn to scale
- Use labelled arrows
- Do not include forces exerted BY the object on other objects

### 1.4 Resultant Forces

The **resultant force** is the single force that has the same effect as all the forces acting
together.

Forces in the same direction: add them.

Forces in opposite directions: subtract the smaller from the larger.

Forces at angles: use a vector diagram (triangle or parallelogram of forces).

**Worked Example.** Two forces of 30 N and 40 N act on an object at right angles. Find the magnitude
of the resultant force.

$$F = \sqrt{30^2 + 40^2} = \sqrt{900 + 1600} = \sqrt{2500} = 50 \text{ N}$$

### 1.5 Resolving Vectors into Components (Higher Tier)

Any vector can be resolved into two perpendicular components. For a force $F$ at angle $\theta$ to
the horizontal:

$$F_x = F\cos\theta \quad \text{(horizontal component)}$$
$$F_y = F\sin\theta \quad \text{(vertical component)}$$

This technique is essential for inclined plane problems. Instead of working with forces at awkward
angles, you resolve every force into components parallel and perpendicular to the slope, then apply
Newton's second law to each direction independently.

## 2. Newton's Laws of Motion

### 2.1 Newton's First Law

An object remains at rest or moves with constant velocity unless acted upon by a **resultant (net)
force**.

This means:

- If the resultant force is zero, the object does not accelerate
- A stationary object stays stationary; a moving object continues at the same speed in the same
  direction

### 2.2 The Inertial Frame Caveat

Newton's first law is only valid in an **inertial reference frame** -- a frame that is not itself
accelerating. If you are in a car that accelerates forward, you feel pushed back into your seat.
There is no backward force acting on you; the feeling arises because the car (your reference frame)
is accelerating forward. In the car's non-inertial frame, Newton's first law appears to be violated.
On Earth's surface, the frame is approximately inertial because the centripetal acceleration due to
Earth's rotation is very small compared to $g$.

### 2.3 Newton's Second Law

The acceleration of an object is proportional to the resultant force and inversely proportional to
its mass:

$$F = ma$$

where $F$ is the resultant force (N), $m$ is mass (kg), and $a$ is acceleration (m/s$^2$).

**Worked Example.** A 1200 kg car accelerates from rest at 2.5 m/s$^2$. Find the driving force
(ignore friction).

$$F = ma = 1200 \times 2.5 = 3000 \text{ N}$$

**Worked Example.** A resultant force of 45 N acts on a 5 kg object. Find the acceleration.

$$a = \frac{F}{m} = \frac{45}{5} = 9 \text{ m/s}^2$$

### 2.4 What $F = ma$ Really Means

The equation $F = ma$ is a vector equation. In component form:

$$\sum F_x = ma_x, \qquad \sum F_y = ma_y$$

The acceleration is always in the _same direction_ as the resultant force. If the resultant force is
zero, the acceleration is zero (Newton's first law is a special case of the second). The mass $m$ is
a scalar: it tells you how resistant the object is to acceleration. Doubling the mass halves the
acceleration for the same force.

### 2.5 Newton's Third Law

When two objects interact, they exert equal and opposite forces on each other.

**Key features:**

- The forces are equal in magnitude
- The forces are opposite in direction
- The forces act on **different** objects
- The forces are of the same type (e.g. both gravitational, both contact)

**Example:** A book rests on a table. The book exerts a downward force on the table (its weight),
and the table exerts an equal upward force on the book (the normal reaction). These are a Newton's
third law pair? No -- the normal reaction and weight are NOT a third law pair because they act on
the SAME object. The true pairs are: Earth pulls book down / book pulls Earth up; book pushes table
down / table pushes book up.

:::warning
Newton's third law pairs always act on different objects. The normal reaction and weight
act on the same object, so they are NOT a third law pair.
:::

### 2.6 Identifying Third Law Pairs: A Systematic Method

To identify the correct third law pair for any force, ask: "What other object is involved in this
interaction?" Then write both forces in the form "Object A exerts force on Object B" and "Object B
exerts force on Object A." Both forces must be the same type (gravitational, electromagnetic,
contact, etc.) and must be equal and opposite.

- **Incorrect:** Weight of book (Earth on book) and normal reaction (table on book). Different
  objects receive the force (book vs. book), different types (gravitational vs. contact).
- **Correct:** Weight of book (Earth on book, gravitational, downward) and gravitational pull of
  book on Earth (book on Earth, gravitational, upward). Same type, equal magnitude, opposite
  direction, different objects.

## 3. Weight, Mass, and Gravity

### 3.1 Weight and Mass

**Mass** is a measure of the amount of matter in an object. It is measured in kilograms (kg) and
does not change with location.

**Weight** is the gravitational force acting on an object. It is measured in newtons (N) and depends
on the gravitational field strength.

$$W = mg$$

where $W$ is weight (N), $m$ is mass (kg), and $g$ is gravitational field strength (N/kg).

| Location          | $g$ (N/kg) |
| ----------------- | ---------- |
| Earth's surface   | 9.8        |
| Moon's surface    | 1.6        |
| Mars' surface     | 3.7        |
| Jupiter's surface | 24.8       |

**Worked Example.** An astronaut has a mass of 80 kg. Find their weight on Earth and on the Moon.

$$W_{\text{Earth}} = 80 \times 9.8 = 784 \text{ N}$$
$$W_{\text{Moon}} = 80 \times 1.6 = 128 \text{ N}$$

### 3.2 Why Mass and Weight Are Different

Mass is an intrinsic property: it does not depend on where the object is. Weight is a force that
depends on the local gravitational field. An astronaut on the Moon has the same mass as on Earth but
only one-sixth the weight. If you were in deep space, far from any gravitational field, your mass
would be unchanged but your weight would be zero. You would still have inertia (resistance to
acceleration) even though you would be weightless.

### 3.3 Centre of Mass

The **centre of mass** is the single point through which the entire weight of an object can be
considered to act.

For a uniform, regular solid, the centre of mass is at its geometric centre.

**Finding the centre of mass of an irregular lamina:**

1. Suspend the lamina from a point and let it hang freely.
2. Hang a plumb line from the suspension point and draw a vertical line.
3. Repeat from a different suspension point.
4. The centre of mass is where the two lines intersect.

### 3.4 Centre of Mass and Stability

An object is stable if its centre of mass lies above its base. If the centre of mass moves outside
the base, the object topples. This is why:

- A wide-based object is harder to topple than a narrow-based one.
- A low centre of mass makes an object more stable (double-decker buses have heavy engines at the
  bottom).
- A leaning object topples when the vertical line through its centre of mass falls outside its base.

## 4. Terminal Velocity

### 4.1 Drag and Air Resistance

**Drag** is the resistive force experienced by an object moving through a fluid (liquid or gas).
Drag increases with speed.

For many objects at moderate speeds, drag is approximately proportional to the square of the speed:

$$F_{\text{drag}} \propto v^2$$

This means that doubling the speed quadruples the drag force. This quadratic dependence has enormous
practical consequences: the power required to overcome drag (and therefore the fuel consumption of a
vehicle) increases with the cube of the speed.

### 4.2 Reaching Terminal Velocity

When an object falls through a fluid:

1. Initially, the only force is weight (downward). Acceleration = $g$.
2. As speed increases, drag increases.
3. The resultant force decreases: $F_{\text{net}} = W - D$.
4. Eventually, drag equals weight: $D = W$. The resultant force is zero, and acceleration is zero.
5. The object continues at a constant speed called **terminal velocity**.

### 4.3 Why Terminal Velocity Is Not the Same as Maximum Speed

Terminal velocity is the speed at which the drag force exactly equals the driving force (in free
fall, the weight). It is a _dynamic equilibrium_: the forces are balanced, so the acceleration is
zero, but the object is still moving. The word "terminal" does not mean the object stops; it means
the speed stops increasing.

### 4.4 Factors Affecting Terminal Velocity

- **Mass:** Greater mass means greater weight, so higher terminal velocity
- **Surface area:** Larger surface area means more drag, so lower terminal velocity
- **Shape:** Streamlined objects experience less drag
- **Fluid density:** Denser fluids provide more drag

**Example:** A skydiver with a parachute has a much lower terminal velocity than without one,
because the parachute greatly increases the surface area.

### 4.5 Terminal Velocity and Motion Graphs

A velocity-time graph for an object falling through a fluid shows:

- An initial linear region (constant acceleration, drag is negligible)
- The curve gradually flattens as drag increases
- The graph becomes horizontal at terminal velocity

The acceleration-time graph shows:

- Initial acceleration = $g$
- Acceleration decreases to zero
- The graph approaches the time axis asymptotically

### 4.6 Worked Example: Skydiver

A skydiver of mass 80 kg jumps from a plane. At terminal velocity, the drag force equals the weight:

$$D = mg = 80 \times 9.8 = 784 \text{ N}$$

After opening the parachute, the terminal velocity drops from about 55 m/s to about 5 m/s because
the increased surface area produces much more drag at any given speed.

## 5. Stopping Distances

### 5.1 Stopping Distance

$$\text{Stopping distance} = \text{thinking distance} + \text{braking distance}$$

**Thinking distance:** The distance travelled during the driver's reaction time. Depends on:

- Speed (directly proportional)
- Reaction time (affected by tiredness, alcohol, drugs, distractions)

**Braking distance:** The distance travelled while the brakes are applied. Depends on:

- Speed (proportional to $v^2$)
- Mass of the vehicle
- Condition of brakes and tyres
- Road conditions (wet, icy)
- Gradient of the road

### 5.2 Why Braking Distance Increases with the Square of Speed

Using the work-energy theorem: the work done by the braking force equals the change in kinetic
energy.

$$Fd = \frac{1}{2}mv^2$$

For a given braking force $F$, the braking distance $d = \frac{mv^2}{2F}$ is proportional to $v^2$.
Doubling the speed quadruples the braking distance. Tripling the speed multiplies it by nine. This
is the single most important fact about road safety: small increases in speed produce very large
increases in stopping distance.

### 5.3 Reaction Time

Typical reaction time: 0.2 -- 0.9 seconds.

**Worked Example.** A car is travelling at 20 m/s. The driver's reaction time is 0.5 s. The braking
distance is 32 m. Calculate the total stopping distance.

$$\text{Thinking distance} = 20 \times 0.5 = 10 \text{ m}$$
$$\text{Stopping distance} = 10 + 32 = 42 \text{ m}$$

### 5.4 Factors Affecting Reaction Time

- **Tiredness:** Reaction time increases significantly when fatigued. After 18 hours without sleep,
  reaction time is comparable to a blood alcohol concentration of 0.05%.
- **Alcohol:** Even small amounts of alcohol increase reaction time and impair judgement.
- **Mobile phones:** Using a phone while driving increases reaction time by 30--50%.
- **Drugs:** Both illegal drugs and certain medications can impair reaction time.
- **Age:** Reaction time increases with age, particularly after 60.

## 6. Momentum

### 6.1 Definition

**Momentum** is a vector quantity defined as:

$$p = mv$$

where $p$ is momentum (kg m/s), $m$ is mass (kg), and $v$ is velocity (m/s).

### 6.2 Conservation of Momentum

In a closed system (no external forces), the total momentum before a collision equals the total
momentum after the collision.

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$

**Worked Example.** A 2 kg trolley moving at 3 m/s collides with a stationary 1 kg trolley and they
stick together. Find the velocity after the collision.

$$2 \times 3 + 1 \times 0 = (2 + 1) \times v$$ $$6 = 3v$$ $$v = 2 \text{ m/s}$$

### 6.3 Why Momentum Is Conserved

Newton's third law tells us that the forces between two colliding objects are equal and opposite.
Since these forces act for the same duration, the impulses are equal and opposite, and therefore the
changes in momentum are equal and opposite. The total momentum of the system is unchanged. This is a
direct consequence of Newton's laws, not a separate assumption.

### 6.4 Newton's Second Law and Momentum

$$F = \frac{\Delta p}{\Delta t} = \frac{mv - mu}{t}$$

This shows that force equals the rate of change of momentum. This form of Newton's second law is
more general than $F = ma$ because it remains valid even when the mass changes (e.g., a rocket
expelling fuel).

### 6.5 Impact Forces and Safety

For a given change in momentum, increasing the impact time decreases the force:

$$F = \frac{\Delta p}{\Delta t}$$

**Safety features that increase impact time:**

- Crumple zones in cars: the front of the car deforms during a crash, extending the stopping time
  from perhaps 0.01 s to 0.1 s. Since the momentum change is the same, the average force on the
  passengers is reduced by a factor of 10.
- Seat belts (stretch slightly): distribute the decelerating force over a larger area of the body
  and extend the stopping time.
- Air bags: provide a cushion that increases the time over which the passenger decelerates.
- Helmets and padding: increase the time over which an impact force acts.
- Crash mats: same principle applied to gymnastics and playgrounds.

### 6.6 Elastic and Inelastic Collisions (Higher Tier)

**Elastic collision:** Both momentum and kinetic energy are conserved. Examples: collisions between
hard steel balls, collisions between gas molecules.

**Inelastic collision:** Momentum is conserved but kinetic energy is not. Some kinetic energy is
transferred to thermal energy, sound, and deformation. Most real-world collisions are inelastic.

**Perfectly inelastic collision:** The objects stick together after the collision. This maximises
the kinetic energy lost.

## 7. Moments, Levers, and Gears

### 7.1 Moments

A **moment** is the turning effect of a force:

$$M = Fd$$

where $M$ is moment (Nm), $F$ is force (N), and $d$ is the perpendicular distance from the pivot to
the line of action of the force (m).

**Principle of moments:** For an object in equilibrium, the sum of clockwise moments equals the sum
of anticlockwise moments.

$$\sum M_{\text{clockwise}} = \sum M_{\text{anticlockwise}}$$

**Worked Example.** A seesaw has a pivot at its centre. A child of mass 30 kg sits 2 m from the
pivot. Where must a child of mass 40 kg sit to balance the seesaw?

$$30 \times 9.8 \times 2 = 40 \times 9.8 \times d$$ $$60 = 40d$$
$$d = 1.5 \text{ m from the pivot}$$

### 7.2 Why the Distance Must Be Perpendicular

The moment depends on the perpendicular distance from the pivot to the line of action of the force,
not the distance from the pivot to the point where the force is applied. If the force acts at an
angle, the effective moment arm is reduced. This is why pushing a door near the hinge requires much
more force than pushing near the handle: the perpendicular distance is much smaller.

### 7.3 Levers

A **lever** is a simple machine that uses moments. A small force applied at a large distance from
the pivot can balance (or overcome) a large force at a small distance.

**Mechanical advantage** = load / effort = distance from effort to pivot / distance from load to
pivot.

**Classes of lever:**

| Class | Arrangement                 | Example                 |
| ----- | --------------------------- | ----------------------- |
| 1     | Pivot between effort & load | Seesaw, scissors        |
| 2     | Load between pivot & effort | Wheelbarrow, nutcracker |
| 3     | Effort between pivot & load | Tweezers, forearm       |

### 7.4 Gears

**Gears** transfer rotational motion. If a large gear drives a small gear, the small gear rotates
faster but with less turning force (torque).

The ratio of speeds is inversely proportional to the ratio of teeth:

$$\frac{\text{speed of gear } B}{\text{speed of gear } A} = \frac{\text{teeth on gear } A}{\text{teeth on gear } B}$$

This is a consequence of conservation of energy: if the small gear rotates faster, it must exert
less torque, because $P = \tau \omega$ (power = torque times angular velocity), and the power
transmitted through the gears is (ideally) the same.

## 8. Hooke's Law

### 8.1 Statement

**Hooke's law:** The extension of a spring is directly proportional to the force applied, provided
the limit of proportionality is not exceeded.

$$F = ke$$

where $k$ is the spring constant (N/m) and $e$ is the extension (m).

### 8.2 Force-Extension Graph

- The graph is a straight line through the origin up to the **limit of proportionality**
- Beyond this point, the line curves: the spring no longer obeys Hooke's law
- The gradient of the linear section equals the spring constant $k$
- If the force is removed and the spring does not return to its original length, it has exceeded its
  **elastic limit**

### 8.3 The Spring Constant and Energy Storage

A stiffer spring (higher $k$) stores more energy for the same extension: $E = \frac{1}{2}ke^2$. Two
identical springs in parallel have twice the spring constant ($k_{\text{total}} = 2k$) and store
twice the energy for the same extension. Two identical springs in series have half the spring
constant ($k_{\text{total}} = \frac{k}{2}$).

### 8.4 Required Practical: Investigating Force and Extension

**Method:**

1. Measure the natural length of the spring.
2. Add masses one at a time, recording the total mass and the new length.
3. Calculate the extension for each mass.
4. Plot a graph of force (weight = $mg$) against extension.
5. The gradient gives the spring constant.

**Sources of error:**

- The spring may not return to its original length after large forces (exceeding the elastic limit).
- Parallax error when reading the ruler.
- The ruler may not be perfectly vertical.
- The masses may swing, causing additional stretching.

## 9. Pressure (Higher Tier)

### 9.1 Definition

Pressure is the force per unit area:

$$P = \frac{F}{A}$$

where $P$ is pressure (pascals, Pa), $F$ is force (N), and $A$ is area (m$^2$).

### 9.2 Pressure in Fluids

The pressure in a fluid increases with depth:

$$P = h\rho g$$

where $h$ is the depth, $\rho$ is the density of the fluid, and $g$ is gravitational field strength.

This explains why dams are thicker at the bottom: the pressure from the water increases linearly
with depth, so the base must withstand a much greater force than the top.

### 9.3 Upthrust and Floating

An object submerged in a fluid experiences an upward force called **upthrust** equal to the weight
of the fluid displaced. An object floats when its weight equals the upthrust. A steel ship floats
because its hull encloses a large volume of air, making its average density less than that of water.

## Common Pitfalls

- **Confusing mass and weight.** Mass is in kg (scalar); weight is in N (vector). Mass does not
  change; weight depends on $g$.
- **Drawing force arrows on the wrong object** in free body diagrams. Show forces on ONE object
  only.
- **Confusing Newton's third law pairs with balanced forces.** Third law pairs act on DIFFERENT
  objects; balanced forces act on the SAME object.
- **Forgetting that momentum is a vector.** Assign a positive direction and include signs.
- **Using the wrong distance in moment calculations.** It must be the PERPENDICULAR distance from
  the pivot.
- **Stating that terminal velocity is when drag equals mass.** It is when drag equals WEIGHT.
- **Including internal forces on a free body diagram.** Only show external forces acting on the
  object.
- **Writing $F = ma$ when the mass is changing** (e.g., a burning rocket). Use $F = \frac{dp}{dt}$
  instead.
- **Assuming friction always opposes motion.** Friction opposes relative motion (or the tendency
  towards it). A block on a conveyor belt may be accelerated _by_ friction.
- **Forgetting that the normal force is not always equal to $mg$.** On an inclined plane or in a
  lift, the normal force is different.

## Practice Questions

1. A 1500 kg car travelling at 30 m/s decelerates uniformly to rest in 5 seconds. Calculate the
   decelerating force.

2. Explain, with reference to Newton's laws, why a passenger in a car is thrown forward when the car
   stops suddenly.

3. A 60 kg person stands on a bathroom scale in a lift. Calculate the reading on the scale when the
   lift accelerates upward at 2 m/s$^2$.

4. Two objects collide. Object A (mass 3 kg, velocity 4 m/s to the right) collides with object B
   (mass 2 kg, velocity 3 m/s to the left). After the collision, A moves at 1 m/s to the left. Find
   the velocity of B after the collision.

5. A uniform metre rule is pivoted at the 30 cm mark. A 4 N weight hangs from the 10 cm mark. What
   force must be applied at the 80 cm mark to balance the rule?

6. Explain why a skydiver reaches terminal velocity. Describe what happens when they open their
   parachute.

7. A spring has a spring constant of 500 N/m. How much energy is stored when it is extended by 0.04
   m?

8. Calculate the thinking distance and braking distance for a car travelling at 30 m/s, given a
   reaction time of 0.6 s and a deceleration of 6 m/s$^2$.

9. A lever has an effort of 50 N applied 0.8 m from the pivot. What load can be lifted at 0.2 m from
   the pivot?

10. Explain how crumple zones reduce the force on passengers during a collision, using the concept
    of momentum.

11. A 5 kg block rests on a rough plane inclined at $30^{\circ}$ to the horizontal. The coefficient
    of friction is 0.3. Determine whether the block slides, and if so, calculate its acceleration.

12. A tennis ball of mass 0.06 kg is hit at 25 m/s. The racket is in contact with the ball for 0.005
    s. Calculate the average force exerted on the ball.

13. Two identical springs each have spring constant 200 N/m. Calculate the effective spring constant
    when they are connected (a) in parallel and (b) in series.

14. A hydraulic press has a small piston of area $0.01$ m$^2$ and a large piston of area $0.5$
    m$^2$. If a force of 200 N is applied to the small piston, what force is exerted by the large
    piston?

15. Explain why a car tyre needs to be inflated to the correct pressure. Include reference to the
    contact area between the tyre and the road.
