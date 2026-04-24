---
title: Work, Energy, and Power
date: 2026-04-14
tags:
  - Physics
  - AP
categories:
  - Physics
slug: work-energy-power
---

## Work (CED Unit 4)

Work is the energy transferred to or from an object by a force acting through a displacement.

### Definition

For a constant force $\vec{F}$ acting through displacement $\vec{d}$:

$$
W = \vec{F} \cdot \vec{d} = Fd\cos\theta
$$

where $\theta$ is the angle between the force and the displacement.

- $\theta = 0^\circ$: $W = Fd$ (force in direction of motion)
- $\theta = 90^\circ$: $W = 0$ (force perpendicular to motion)
- $\theta = 180^\circ$: $W = -Fd$ (force opposes motion)

### Why the Dot Product

Work is a scalar, not a vector. It is the component of the force _along the direction of motion_
that does work. The perpendicular component changes the direction of motion but does not transfer
energy. This is why the normal force does no work on an object sliding along a surface, and why the
centripetal force does no work on an object in uniform circular motion.

### Work by a Variable Force (AP Physics C)

$$
W = \int_a^b F(x)\, dx
$$

The work done by a variable force equals the area under the force-vs-displacement curve.

### Units

1 Joule (J) = $1 \mathrm{ N} \cdot \mathrm{m} = 1 \mathrm{ kg} \cdot \mathrm{m}^2/\mathrm{s}^2$

### Dimensional Analysis of the Joule

From $W = Fd$:
$[W] = \mathrm{N} \cdot \mathrm{m} = (\mathrm{kg} \cdot \mathrm{m/s}^2) \cdot \mathrm{m} =
\mathrm{kg} \cdot \mathrm{m}^2/\mathrm{s}^2$.
This is the same as the dimensions of kinetic energy $\frac{1}{2}mv^2$, confirming that work and
energy are the same physical quantity.

:::info[Example]

A person pushes a $50 \mathrm{ N}$ crate across a floor for $4.0 \mathrm{ m}$ at an angle of
$30^\circ$ below horizontal. The coefficient of kinetic friction is $\mu_k = 0.3$. Find the work
done by each force and the net work.

**Applied force:**
$W_F = Fd\cos\theta = 50 \times 4.0 \times \cos(-30^\circ) = 50 \times 4.0 \times 0.866 = 173.2 \mathrm{ J}$

**Normal force:** $N = mg - F\sin 30^\circ = 50 - 25 = 25 \mathrm{ N}$ (taking
$mg = 50 \mathrm{ N}$).

**Friction:** $W_f = -f_k d = -\mu_k N d = -0.3 \times 25 \times 4.0 = -30 \mathrm{ J}$

**Gravity:** $W_g = 0$ (vertical force, horizontal displacement)

**Normal force:** $W_N = 0$ (vertical force, horizontal displacement)

**Net work:** $W_{\mathrm{net}} = 173.2 - 30 = 143.2 \mathrm{ J}$

:::

## Kinetic Energy (CED Unit 4)

The kinetic energy of an object of mass $m$ moving with speed $v$ is:

<PhetSimulation simulationId="energy-skate-park-basics" title="Energy Skate Park: Basics" />

Explore the simulation above to develop intuition for this topic.

$$
K = \frac{1}{2}mv^2
$$

### Work-Energy Theorem

The net work done on an object equals its change in kinetic energy:

$$
W_{\mathrm{net}} = \Delta K = K_f - K_i = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2
$$

### Proof of the Work-Energy Theorem (AP Physics C)

$$
W_{\mathrm{net}} = \int_{x_i}^{x_f} F_{\mathrm{net}}\, dx = \int_{x_i}^{x_f} ma\, dx = m\int_{x_i}^{x_f} \frac{dv}{dt}\, dx
$$

Using the chain rule $\frac{dv}{dt} = \frac{dv}{dx}\frac{dx}{dt} = v\frac{dv}{dx}$:

$$
W_{\mathrm{net}} = m\int_{v_i}^{v_f} v\, dv = m\left[\frac{v^2}{2}\right]_{v_i}^{v_f} = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2
$$

$\blacksquare$

### Why the Work-Energy Theorem Is So Powerful

The work-energy theorem connects the net force (a dynamic quantity) to the change in speed (a
kinematic quantity) without requiring knowledge of the path taken. You do not need to know the
acceleration, the time, or the detailed trajectory. You only need the initial and final speeds and
the forces involved. This makes it far more efficient than using Newton's second law for many
problems.

:::info[Example]

A $2.0 \mathrm{ kg}$ block initially at rest is pushed by a $12 \mathrm{ N}$ horizontal force across
a frictionless surface for $5.0 \mathrm{ m}$. Find its final speed.

$$
W_{\mathrm{net}} = 12 \times 5.0 = 60 \mathrm{ J}
$$

$$
\Delta K = \frac{1}{2}mv_f^2 - 0 = 60 \implies v_f = \sqrt{\frac{120}{2.0}} = \sqrt{60} \approx 7.75 \mathrm{ m/s}
$$

:::

## Potential Energy (CED Unit 4)

Potential energy is energy associated with the position or configuration of a system.

### Gravitational Potential Energy (Near Earth's Surface)

$$
U_g = mgh
$$

where $h$ is the height above an arbitrary reference level.

### Elastic (Spring) Potential Energy

$$
U_s = \frac{1}{2}kx^2
$$

where $k$ is the spring constant and $x$ is the displacement from equilibrium.

### Gravitational Potential Energy (General)

$$
U = -\frac{GMm}{r}
$$

### Why Gravitational PE Is Negative

The choice $U = 0$ at $r = \infty$ is a convention, but a natural one. As two masses are brought
together from infinity, gravity does positive work and the potential energy decreases below zero.
The negative sign means that energy must be _supplied_ to separate the masses. A bound orbit has
negative total energy; an unbound trajectory has positive total energy. The boundary between the two
($E = 0$) corresponds to escape velocity.

### Conservative vs Non-Conservative Forces

- **Conservative force:** Work done is path-independent; work around a closed loop is zero.
  Examples: gravity, spring force, electrostatic force.
- **Non-conservative force:** Work depends on the path. Examples: friction, air resistance, tension.

### Mathematical Criterion for Conservative Forces

A force $\vec{F}$ is conservative if and only if:

$$
\oint \vec{F} \cdot d\vec{r} = 0
$$

for every closed path. Equivalently, the curl of $\vec{F}$ is zero: $\nabla \times \vec{F} = 0$. For
one-dimensional motion, a force is conservative if and only if it depends only on position (not on
velocity or time): $F = F(x)$.

## Conservation of Energy (CED Unit 4)

### The Law of Conservation of Energy

Energy cannot be created or destroyed, only transformed from one form to another.

### Mechanical Energy

$$
E = K + U = \frac{1}{2}mv^2 + U
$$

When only conservative forces do work:

$$
K_i + U_i = K_f + U_f
$$

### Work-Energy Principle (with Non-Conservative Forces)

$$
W_{\mathrm{nc}} = \Delta K + \Delta U = E_f - E_i
$$

where $W_{\mathrm{nc}}$ is the work done by non-conservative forces (like friction).

:::info[Example]

A roller coaster car starts from rest at height $h = 20 \mathrm{ m}$, goes through a loop of radius
$6.0 \mathrm{ m}$, and reaches a second hill of height $12 \mathrm{ m}$. Find the speed at the top
of the loop (neglecting friction).

Using conservation of energy from the start to the top of the loop (height $= 2R = 12 \mathrm{ m}$):

$$
mgh_i = \frac{1}{2}mv_f^2 + mgh_f
$$

$$
(9.8)(20) = \frac{1}{2}v_f^2 + (9.8)(12)
$$

$$
196 = \frac{1}{2}v_f^2 + 117.6 \implies \frac{1}{2}v_f^2 = 78.4 \implies v_f = \sqrt{156.8} \approx 12.5 \mathrm{ m/s}
$$

:::

:::info[Example: With Friction]

A $3.0 \mathrm{ kg}$ block slides down a $30^\circ$ incline of length $5.0 \mathrm{ m}$ from rest.
The coefficient of kinetic friction is $\mu_k = 0.2$. Find the speed at the bottom.

**Energy method:** $W_{\mathrm{nc}} = \Delta K + \Delta U$

$-f_k d = \frac{1}{2}mv_f^2 - 0 + mg(h_f - h_i)$

$f_k = \mu_k mg\cos\theta = 0.2 \times 3.0 \times 9.8 \times \cos 30^\circ = 5.09 \mathrm{ N}$

$h = d\sin\theta = 5.0 \times \sin 30^\circ = 2.5 \mathrm{ m}$

$-5.09 \times 5.0 = \frac{1}{2}(3.0)v_f^2 - (3.0)(9.8)(2.5)$

$-25.45 = 1.5v_f^2 - 73.5$

$1.5v_f^2 = 48.05 \implies v_f = \sqrt{32.03} \approx 5.66 \mathrm{ m/s}$

:::

## Power (CED Unit 4)

Power is the rate at which work is done:

$$
P = \frac{dW}{dt}
$$

For a constant force: $P = Fv\cos\theta$.

### Units

1 Watt (W) = $1 \mathrm{ J/s} = 1 \mathrm{ kg} \cdot \mathrm{m}^2/\mathrm{s}^3$

1 horsepower (hp) = 746 W

### Instantaneous vs Average Power

Average power: $P_{\mathrm{avg}} = W/t = \Delta E / t$.

Instantaneous power: $P(t) = \vec{F}(t) \cdot \vec{v}(t)$.

When the force and velocity are not constant, average and instantaneous power differ.

:::info[Example]

A $1200 \mathrm{ kg}$ car accelerates from rest to $25 \mathrm{ m/s}$ in 8.0 s on a level road. If
the engine provides constant power, what is that power?

**Energy method:**

$$
P = \frac{W}{t} = \frac{\Delta K}{t} = \frac{\frac{1}{2}(1200)(25)^2}{8.0} = \frac{375000}{8.0} = 46875 \mathrm{ W} \approx 46.9 \mathrm{ kW}
$$

:::

### Power at Constant Speed Up an Incline

At constant speed, the driving force equals the component of weight down the slope plus friction:

$$
P = F_{\mathrm{drive}} v = (mg\sin\theta + f)v
$$

## Potential Energy Diagrams and Stability

A potential energy diagram plots $U(x)$ vs $x$. From this, we can determine:

- **Force:** $\displaystyle F(x) = -\frac{dU}{dx}$
- **Equilibrium points:** Where $F(x) = 0$, i.e., $\frac{dU}{dx} = 0$
- **Stable equilibrium:** Local minimum of $U$ ($\frac{d^2U}{dx^2} \gt 0$)
- **Unstable equilibrium:** Local maximum of $U$ ($\frac{d^2U}{dx^2} \lt 0$)
- **Neutral equilibrium:** Flat region of $U$

### Why $F = -dU/dx$

Consider a one-dimensional conservative force $F(x)$. The work done by this force from $x_1$ to
$x_2$ is:

$$
W = \int_{x_1}^{x_2} F(x)\, dx
$$

By definition, the potential energy change is the negative of this work:

$$
\Delta U = U(x_2) - U(x_1) = -W = -\int_{x_1}^{x_2} F(x)\, dx
$$

Differentiating with respect to $x_2$:

$$
\frac{dU}{dx} = -F(x)
$$

### Total Energy on a Potential Energy Diagram

On a potential energy diagram, the total energy $E = K + U$ is a horizontal line. The kinetic energy
at any point is $K = E - U$. Motion is only possible where $K \ge 0$, i.e., $E \ge U$. The object
oscillates between the "turning points" where $E = U$ (and $K = 0$).

## Escape Velocity

The minimum speed needed for an object to escape a gravitational field (reach infinity with zero
speed):

$$
\frac{1}{2}mv_e^2 - \frac{GMm}{R} = 0 \implies v_e = \sqrt{\frac{2GM}{R}}
$$

For Earth: $v_e \approx 11.2 \mathrm{ km/s}$.

### Why Escape Velocity Is Independent of Mass

Both the kinetic energy $\frac{1}{2}mv_e^2$ and the gravitational potential energy $GMm/R$ are
proportional to $m$, so the mass cancels. A ping-pong ball and a spacecraft need the same escape
velocity from the same point. This is a consequence of the equivalence of gravitational and inertial
mass.

## Common Pitfalls

1. **Forgetting that work is a scalar.** It can be positive, negative, or zero depending on the
   angle between force and displacement.
2. **Using the wrong height for gravitational PE.** $h$ is measured from the chosen reference level,
   which can be set anywhere convenient.
3. **Confusing force and power.** Power is force times velocity, not just force.
4. **Applying conservation of mechanical energy when non-conservative forces are present.** Use
   $W_{\mathrm{nc}} = \Delta E$ instead.
5. **Forgetting the sign convention.** Work done by gravity is $W_g = -mg\Delta h$ (positive when
   the object moves down).
6. **Using $U = mgh$ far from Earth's surface.** Use $U = -\frac{GMm}{r}$ instead.
7. **Incorrectly computing power as force divided by time.** Power is work divided by time, or force
   times velocity.
8. **Confusing the total energy with the mechanical energy.** Total energy includes thermal energy,
   sound energy, and all other forms. Mechanical energy ($K + U$) is conserved only when
   non-conservative forces do no work.

## Practice Questions

1. A $5.0 \mathrm{ kg}$ block slides $3.0 \mathrm{ m}$ down a $25^\circ$ frictionless incline. Find
   the work done by gravity and the final speed.

2. A spring with $k = 500 \mathrm{ N/m}$ is compressed $0.10 \mathrm{ m}$ and launches a
   $0.50 \mathrm{ kg}$ block on a frictionless surface. Find the maximum speed of the block and the
   maximum height it reaches on a frictionless incline.

3. A $1000 \mathrm{ kg}$ elevator starts from rest and accelerates upward at $2.0 \mathrm{ m/s}^2$
   for $3.0 \mathrm{ s}$. Find the power output of the motor at $t = 3.0 \mathrm{ s}$.

4. A pendulum of length $1.5 \mathrm{ m}$ is released from horizontal. Find its speed at the lowest
   point (neglect air resistance).

5. A $0.50 \mathrm{ kg}$ ball is thrown straight up with speed $15 \mathrm{ m/s}$. If air resistance
   does $-5.0 \mathrm{ J}$ of work, find the maximum height.

6. A car of mass $1500 \mathrm{ kg}$ travels at constant speed $20 \mathrm{ m/s}$ up a $10^\circ$
   incline. If the engine produces $50 \mathrm{ kW}$, find the frictional force.

7. A satellite in circular orbit at altitude $500 \mathrm{ km}$ needs to escape Earth. What
   additional speed must it acquire?

8. Derive the relationship $F = -\frac{dU}{dx}$ from the work-energy theorem for one-dimensional
   motion.

9. A force $F(x) = 3x^2 - 2x$ (in N, with $x$ in m) acts on a $2.0 \mathrm{ kg}$ object. Find the
   work done as the object moves from $x = 0$ to $x = 3.0 \mathrm{ m}$, and the speed at $x = 3.0$ m
   if the object started from rest.

10. A potential energy function is given by $U(x) = x^4 - 2x^2$ (in J, with $x$ in m). Find all
    equilibrium positions and classify each as stable, unstable, or neutral.

## 11. Work by a Variable Force: Detailed Examples (AP Physics C)

### Worked Example: Spring Force

A spring obeys Hooke's law with $k = 200 \mathrm{ N/m}$. Find the work done compressing it from
$x = 0$ to $x = 0.15 \mathrm{ m}$.

$$W = \int_0^{0.15} (-kx)\, dx = -\left[\frac{1}{2}kx^2\right]_0^{0.15} = -\frac{1}{2}(200)(0.0225) = -2.25 \mathrm{ J}$$

The negative sign indicates the spring force opposes the displacement. The magnitude of work done
_by_ the spring is $2.25 \mathrm{ J}$, and the work done _on_ the spring (by the external agent) is
$+2.25 \mathrm{ J}$, which is stored as elastic potential energy.

### Worked Example: Non-Linear Force

A force $F(x) = 3x^2 + 2x$ (in N, with $x$ in m) acts on a $2 \mathrm{ kg}$ object. Find the work
done from $x = 0$ to $x = 3 \mathrm{ m}$ and the speed at $x = 3 \mathrm{ m}$ if the object starts
from rest.

$$W = \int_0^3 (3x^2 + 2x)\, dx = \left[x^3 + x^2\right]_0^3 = 27 + 9 = 36 \mathrm{ J}$$

By the work-energy theorem: $W = \frac{1}{2}mv_f^2 - 0$

$$v_f = \sqrt{\frac{2W}{m}} = \sqrt{\frac{72}{2}} = \sqrt{36} = 6 \mathrm{ m/s}$$

## 12. Conservation of Energy: Extended Examples

### Worked Example: Block-Spring System on a Frictionless Surface

A $3 \mathrm{ kg}$ block slides on a frictionless surface at $4 \mathrm{ m/s}$ and strikes a spring
with $k = 500 \mathrm{ N/m}$. Find the maximum compression of the spring.

At maximum compression, all kinetic energy has been converted to elastic potential energy:

$$\frac{1}{2}mv^2 = \frac{1}{2}kx^2$$

$$x = v\sqrt{\frac{m}{k}} = 4\sqrt{\frac{3}{500}} = 4 \times 0.0775 = 0.310 \mathrm{ m}$$

### Worked Example: Pendulum with Energy

A pendulum of length $L = 1.5 \mathrm{ m}$ and mass $m = 0.5 \mathrm{ kg}$ is released from
horizontal ($\theta = 90^{\circ}$). Find the speed at the lowest point.

The pendulum bob falls a height $h = L = 1.5 \mathrm{ m}$.

$$mgh = \frac{1}{2}mv^2$$

$$v = \sqrt{2gL} = \sqrt{2 \times 9.8 \times 1.5} = \sqrt{29.4} = 5.42 \mathrm{ m/s}$$

### Worked Example: Loop-the-Loop

A block of mass $m$ slides from rest down a frictionless ramp of height $h$ and enters a vertical
circular loop of radius $R$. What is the minimum $h$ for the block to complete the loop?

At the top of the loop, the minimum speed to maintain contact is $v = \sqrt{gR}$ (when the normal
force is zero).

Using conservation of energy from the top of the ramp to the top of the loop (height $= 2R$):

$$mgh = \frac{1}{2}mv^2 + mg(2R) = \frac{1}{2}m(gR) + 2mgR = \frac{5}{2}mgR$$

$$h = \frac{5}{2}R = 2.5R$$

The ramp must be at least 2.5 times the radius of the loop.

## 13. Potential Energy Diagrams: Extended Analysis

### Worked Example: Interpreting $U(x) = x^4 - 2x^2$

$$F(x) = -\frac{dU}{dx} = -(4x^3 - 4x) = -4x(x^2 - 1) = -4x(x-1)(x+1)$$

**Equilibrium points:** $F(x) = 0$ at $x = 0, \pm 1$.

**Classification:**

$$\frac{d^2U}{dx^2} = 12x^2 - 4$$

- At $x = 0$: $\frac{d^2U}{dx^2} = -4 \lt 0$ -- unstable equilibrium (local maximum)
- At $x = \pm 1$: $\frac{d^2U}{dx^2} = 8 \gt 0$ -- stable equilibrium (local minima)

$U(0) = 0$ (unstable), $U(\pm 1) = 1 - 2 = -1$ (stable, energy $= -1$ J).

An object with total energy $E = -0.5$ J oscillates between the two turning points in one of the
potential wells. It cannot escape because $E \lt U(0) = 0$.

## 14. Power: Extended Analysis

### Instantaneous Power for Variable Force

When force and velocity are not constant:

$$P(t) = \vec{F}(t) \cdot \vec{v}(t)$$

### Worked Example: Power as a Function of Time

A force $F(t) = 6t$ N acts on a $2 \mathrm{ kg}$ object initially at rest. Find the power at $t = 3$
s.

$$a = \frac{F}{m} = 3t$$

$$v(t) = \int_0^t 3t'\, dt' = \frac{3t^2}{2}$$

$$P(3) = F(3) \cdot v(3) = 18 \times \frac{27}{2} = 18 \times 13.5 = 243 \mathrm{ W}$$

### Worked Example: Power Needed to Climb at Constant Speed

A $70 \mathrm{ kg}$ cyclist climbs a $6^{\circ}$ hill at $5 \mathrm{ m/s}$. The total resistive
force (friction plus air resistance) is $20 \mathrm{ N}$. Find the power output.

$$P = Fv = (mg\sin\theta + F_{\mathrm{resist}})v = (70 \times 9.8 \times \sin 6^{\circ} + 20) \times 5$$

$$= (70 \times 9.8 \times 0.1045 + 20) \times 5 = (71.7 + 20) \times 5 = 458.5 \mathrm{ W}$$

This is close to the maximum sustained power output of a trained cyclist, illustrating the
difficulty of climbing even a modest gradient.

## 15. Summary Table: Energy Forms and Equations

| Energy Type                     | Formula                    | Key Notes                                       |
| ------------------------------- | -------------------------- | ----------------------------------------------- |
| Kinetic (translational)         | $K = \frac{1}{2}mv^2$      | Always positive; depends on speed, not velocity |
| Kinetic (rotational)            | $K = \frac{1}{2}I\omega^2$ | Depends on moment of inertia                    |
| Gravitational PE (near surface) | $U_g = mgh$                | $h$ measured from arbitrary reference           |
| Gravitational PE (general)      | $U = -GMm/r$               | Zero at infinity; negative for bound systems    |
| Elastic PE                      | $U_s = \frac{1}{2}kx^2$    | Requires Hooke's law to hold                    |
| Total mechanical                | $E = K + U$                | Conserved when only conservative forces act     |
| Work by non-conservative forces | $W_{nc} = \Delta E$        | Equals change in total mechanical energy        |

## 16. Common Pitfalls: Extended

9. **Using the wrong sign for work done by gravity.** When an object moves down, gravity does
   positive work ($W_g = +mg\Delta h$, where $\Delta h$ is negative if up is positive). When an
   object moves up, gravity does negative work. Be careful with sign conventions.

10. **Confusing the reference level for gravitational PE.** The choice of $h = 0$ is arbitrary. What
    matters is the _change_ in height, $\Delta h$, not the absolute height.

11. **Applying $U = mgh$ when the height change is a significant fraction of the distance from
    Earth's centre.** Use $U = -GMm/r$ for large altitude changes.

12. **Forgetting that power is the time derivative of work, not force.** $P = dW/dt = Fv$. Power is
    not $F/t$ or $F/t^2$.

13. **Assuming the force is constant when using $W = Fd\cos\theta$.** If the force varies with
    position, you must integrate: $W = \int F(x)\, dx$.

## Practice Questions (Additional)

11. A $1.5 \mathrm{ kg}$ object slides from rest down a curved frictionless ramp of height
    $3 \mathrm{ m}$ and enters a rough horizontal section with $\mu_k = 0.4$. How far does it slide
    on the rough section before stopping?

12. A spring with $k = 800 \mathrm{ N/m}$ is compressed $0.10 \mathrm{ m}$ and launches a
    $0.2 \mathrm{ kg}$ ball vertically. Find the maximum height reached (a) on Earth and (b) on the
    Moon ($g = 1.62 \mathrm{ m/s}^2$).

13. A force $F(x) = -kx + bx^3$ acts on a particle. Find the potential energy function $U(x)$ and
    identify the equilibrium positions.

14. A $50 \mathrm{ kg}$ child on a swing is pushed to a height $0.8 \mathrm{ m}$ above the lowest
    point. Find the speed at the lowest point and the speed when the swing is $0.4 \mathrm{ m}$
    above the lowest point.

15. The potential energy of a particle is $U(r) = \frac{A}{r} - \frac{B}{r^2}$ where $A$ and $B$ are
    positive constants. Find (a) the force, (b) the equilibrium position, and (c) whether the
    equilibrium is stable or unstable.

## Extended Worked Examples

### Example 16: Power Dissipated by Air Resistance

A car of mass $1500 \mathrm{ kg}$ travels at a constant $25 \mathrm{ m/s}$ on a level road. The
engine produces a driving force of $1200 \mathrm{ N}$. Calculate the power output of the engine and
the power dissipated by air resistance and rolling friction.

**Step 1: At constant speed, net force is zero**

$$F_{\mathrm{drive}} = F_{\mathrm{resist}} = 1200 \mathrm{ N}$$

**Step 2: Power output**

$$P = Fv = 1200 \times 25 = 30000 \mathrm{ W} = 30 \mathrm{ kW}$$

**Step 3: All power goes to overcoming resistance**

$$P_{\mathrm{dissipated}} = 30 \mathrm{ kW}$$

If the car then accelerates to $30 \mathrm{ m/s}$ with the same driving force:

**Step 4: New resistance at $30 \mathrm{ m/s}$ (assuming air resistance scales as $v^2$)**

$$F_{\mathrm{air}} \propto v^2$$

Let $F_{\mathrm{air,25}} = F_{\mathrm{air}}(25)$ and $F_{\mathrm{roll}}$ be the constant rolling
friction.

At $25 \mathrm{ m/s}$: $F_{\mathrm{air}}(25) + F_{\mathrm{roll}} = 1200 \mathrm{ N}$

At $30 \mathrm{ m/s}$:
$F_{\mathrm{air}}(30) = F_{\mathrm{air}}(25) \times (30/25)^2 = 1.44 \times F_{\mathrm{air}}(25)$

Assuming $F_{\mathrm{air}}(25) = 1000 \mathrm{ N}$ and $F_{\mathrm{roll}} = 200 \mathrm{ N}$:

$$F_{\mathrm{air}}(30) = 1440 \mathrm{ N}$$

$$F_{\mathrm{total resist}}(30) = 1440 + 200 = 1640 \mathrm{ N}$$

**Net force:** $F_{\mathrm{net}} = 1200 - 1640 = -440 \mathrm{ N}$

The car cannot maintain $30 \mathrm{ m/s}$ with the same driving force -- air resistance increases
too rapidly.

:::info Air resistance (drag) force is given by $F_D = \frac{1}{2}\rho C_D A v^2$, where $\rho$ is
air density, $C_D$ is the drag coefficient, and $A$ is the cross-sectional area. This quadratic
dependence on velocity is why fuel consumption increases dramatically at high speeds. :::

### Example 17: Energy in a Mass-Spring System with Gravity

A $2 \mathrm{ kg}$ block hangs from a vertical spring with $k = 200 \mathrm{ N/m}$. The block is
pulled down $0.15 \mathrm{ m}$ from equilibrium and released. Find the maximum speed and the maximum
height above the release point.

**Step 1: Find the equilibrium extension**

At equilibrium, spring force balances weight:

$$kx_0 = mg \implies x_0 = \frac{mg}{k} = \frac{2 \times 9.8}{200} = 0.098 \mathrm{ m}$$

**Step 2: Define the zero of potential energy**

The simplest approach: measure displacements from equilibrium. Gravity shifts the equilibrium
position but does not affect the oscillation frequency or amplitude.

**Step 3: Maximum speed (at equilibrium position)**

Using energy conservation relative to equilibrium:

$$\frac{1}{2}kA^2 = \frac{1}{2}mv_{\max}^2$$

where $A = 0.15 \mathrm{ m}$ is the amplitude.

$$v_{\max} = A\sqrt{\frac{k}{m}} = 0.15 \times \sqrt{\frac{200}{2}} = 0.15 \times 10 = 1.5 \mathrm{ m/s}$$

**Step 4: Maximum height above release point**

The block oscillates symmetrically about equilibrium, so it rises $0.15 \mathrm{ m}$ above
equilibrium to $0.15 \mathrm{ m}$ above equilibrium, which is $0.15 + 0.15 = 0.30 \mathrm{ m}$ above
the lowest point (the release point).

### Example 18: Work Done Against a Non-Conservative Force

A $5 \mathrm{ kg}$ block starts from rest at the top of a rough curved ramp of height
$3 \mathrm{ m}$. At the bottom, its speed is $6 \mathrm{ m/s}$. Calculate the work done by friction.

**Step 1: Energy at the top**

$$E_{\mathrm{top}} = mgh = 5 \times 9.8 \times 3 = 147 \mathrm{ J}$$

**Step 2: Energy at the bottom**

$$E_{\mathrm{bottom}} = \frac{1}{2}mv^2 = \frac{1}{2} \times 5 \times 36 = 90 \mathrm{ J}$$

**Step 3: Work done by friction**

$$W_f = E_{\mathrm{bottom}} - E_{\mathrm{top}} = 90 - 147 = -57 \mathrm{ J}$$

The friction does $-57 \mathrm{ J}$ of work (dissipates $57 \mathrm{ J}$ of mechanical energy as
heat).

**Step 4: Effective coefficient of friction (if the ramp were straight)**

If the ramp length is $L = 6 \mathrm{ m}$:

$$W_f = -fL = -\mu mg\cos\theta \times L$$

$$57 = \mu \times 5 \times 9.8 \times \cos\theta \times 6$$

With $\cos\theta = 3/6 = 0.5$ (from $h = 3 \mathrm{ m}$, $L = 6 \mathrm{ m}$):

$$57 = \mu \times 5 \times 9.8 \times 0.5 \times 6 = 147\mu$$

$$\mu = \frac{57}{147} = 0.388$$

## Common Pitfalls Extended

### Pitfall 6: Confusing Power and Energy

Power is the _rate_ of energy transfer ($P = dW/dt$), measured in watts (W). Energy is the total
transferred, measured in joules (J). A device with high power can deliver the same energy as a
low-power device in less time. Always check units: if a question asks for energy, the answer must be
in joules; if it asks for power, the answer must be in watts.

### Pitfall 7: Forgetting That Work Is a Scalar

Work is $W = \vec{F} \cdot \vec{d} = Fd\cos\theta$. It can be positive, negative, or zero, but it
has no direction. A common error is to assign a direction to work or to add work components
vectorially instead of algebraically.

### Pitfall 8: Incorrect Reference Points for Gravitational PE

Gravitational PE depends on the choice of zero point. Only _changes_ in PE are physically
meaningful: $\Delta PE = mg\Delta h$. Always be explicit about where you are measuring $h$ from, and
ensure you are consistent throughout the problem.

## Additional Practice Problems

16. A $1200 \mathrm{ kg}$ car accelerates from $0$ to $30 \mathrm{ m/s}$ in $8 \mathrm{ s}$.
    Calculate (a) the average power developed, (b) the instantaneous power at $t = 4 \mathrm{ s}$
    assuming constant acceleration, and (c) the total distance covered.

17. A $0.5 \mathrm{ kg}$ ball is dropped from a height of $20 \mathrm{ m}$. On each bounce, it loses
    $20\%$ of its kinetic energy. Calculate the height after the first bounce, the velocity just
    before the second bounce, and the total vertical distance travelled before the ball comes to
    rest.

18. A force $F = 10 + 3x$ (N) acts on a $4 \mathrm{ kg}$ object from $x = 0$ to $x = 5 \mathrm{ m}$.
    Calculate the work done, the final speed if starting from rest, and the power delivered at
    $x = 3 \mathrm{ m}$ if the object is moving at $4 \mathrm{ m/s}$ at that point.

19. A roller coaster car of mass $500 \mathrm{ kg}$ starts from rest at point A, height
    $30 \mathrm{ m}$. It goes through a loop of radius $10 \mathrm{ m}$ and then up a ramp to point
    B. If $80\%$ of the initial PE is converted to KE at the top of the loop, calculate the normal
    force at the top of the loop and the maximum possible height of point B.

20. Two springs with $k_1 = 200 \mathrm{ N/m}$ and $k_2 = 300 \mathrm{ N/m}$ are connected (a) in
    series and (b) in parallel. For each arrangement, find the effective spring constant, the period
    of oscillation for a $2 \mathrm{ kg}$ mass, and the energy stored when compressed
    $0.1 \mathrm{ m}$.

## Practice Problems

<details>
<summary>Question 1: Work-energy theorem with variable force</summary>

A $3 \mathrm{ kg}$ object moves along the x-axis under the influence of a force
$F(x) = 4x^2 - 2x \mathrm{ N}$ (where $x$ is in metres). Calculate the work done by this force as
the object moves from $x = 0$ to $x = 3 \mathrm{ m}$ and the final speed if it started from rest.

</details>

<details>
<summary>Answer</summary>

$W = \int_0^3 F(x) \, dx = \int_0^3 (4x^2 - 2x) \, dx = \left[\frac{4x^3}{3} - x^2\right]_0^3 = \frac{4(27)}{3} - 9 = 36 - 9 = 27 \mathrm{ J}$.

By the work-energy theorem: $W = \Delta KE = \frac{1}{2}mv^2 - 0$.

$v = \sqrt{2W/m} = \sqrt{2 \times 27/3} = \sqrt{18} = 4.24 \mathrm{ m/s}$.

</details>

<details>
<summary>Question 2: Conservation of energy with spring</summary>

A $0.5 \mathrm{ kg}$ block slides on a frictionless surface and collides with a horizontal spring
($k = 200 \mathrm{ N/m}$). The block compresses the spring by $0.15 \mathrm{ m}$ before momentarily
stopping. What was the speed of the block just before it hit the spring?

</details>

<details>
<summary>Answer</summary>

All kinetic energy converts to elastic potential energy: $\frac{1}{2}mv^2 = \frac{1}{2}kx^2$.

$v = x\sqrt{k/m} = 0.15\sqrt{200/0.5} = 0.15\sqrt{400} = 0.15 \times 20 = 3.0 \mathrm{ m/s}$.

</details>

<details>
<summary>Question 3: Power and inclined plane</summary>

A $60 \mathrm{ kg}$ person runs up a flight of stairs that is $10 \mathrm{ m}$ high in
$8 \mathrm{ s}$. Calculate the average power output in watts and horsepower. Take
$g = 9.8 \mathrm{ m/s^2}$ and $1 \mathrm{ hp} = 746 \mathrm{ W}$.

</details>

<details>
<summary>Answer</summary>

Work done against gravity: $W = mgh = 60 \times 9.8 \times 10 = 5880 \mathrm{ J}$.

Average power: $P = W/t = 5880/8 = 735 \mathrm{ W}$.

In horsepower: $735/746 = 0.985 \mathrm{ hp}$.

</details>

<details>
<summary>Question 4: Loop-the-loop energy analysis</summary>

A block of mass $m$ starts from rest at height $h$ on a frictionless track and enters a circular
loop of radius $R$. What is the minimum value of $h$ for the block to complete the loop? Express
your answer in terms of $R$.

</details>

<details>
<summary>Answer</summary>

At the top of the loop, the minimum condition is that the normal force is zero, so centripetal
acceleration is provided entirely by gravity: $mg = mv_{\mathrm{top}}^2/R$, giving
$v_{\mathrm{top}}^2 = gR$.

Energy conservation from start to top of loop (height $2R$):

$mgh = mg(2R) + \frac{1}{2}mv_{\mathrm{top}}^2 = 2mgR + \frac{1}{2}m(gR) = \frac{5}{2}mgR$.

$h = \frac{5}{2}R = 2.5R$.

</details>

<details>
<summary>Question 5: Work done by non-constant force on a curve</summary>

A $2 \mathrm{ kg}$ object is moved from the origin to the point $(4, 3)$ by a force
$\vec{F} = (3x\hat{i} + 2y\hat{j}) \mathrm{ N}$. Calculate the work done by this force.

</details>

<details>
<summary>Answer</summary>

$W = \int \vec{F} \cdot d\vec{r} = \int_0^4 3x \, dx + \int_0^3 2y \, dy$.

$= \left[\frac{3x^2}{2}\right]_0^4 + \left[y^2\right]_0^3 = 24 + 9 = 33 \mathrm{ J}$.

The force is conservative (it can be written as the negative gradient of a potential
$U = -\frac{3}{2}x^2 - y^2$), so the work depends only on the endpoints, not the path taken.

</details>
