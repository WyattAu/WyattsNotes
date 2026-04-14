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

### Work by a Variable Force (AP Physics C)

$$
W = \int_a^b F(x)\, dx
$$

### Units

1 Joule (J) = $1 \text{ N} \cdot \text{m} = 1 \text{ kg} \cdot \text{m}^2/\text{s}^2$

:::info[Example]

A person pushes a $50 \text{ N}$ crate across a floor for $4.0 \text{ m}$ at an angle of $30^\circ$
below horizontal. The coefficient of kinetic friction is $\mu_k = 0.3$. Find the work done by each
force and the net work.

**Applied force:**
$W_F = Fd\cos\theta = 50 \times 4.0 \times \cos(-30^\circ) = 50 \times 4.0 \times 0.866 = 173.2 \text{ J}$

**Normal force:** First find $N$.

$N + F\sin 30^\circ = mg \implies N = mg - F\sin 30^\circ = 50 - 25 = 25 \text{ N}$ (taking
$mg = 50 \text{ N}$).

Wait -- the problem says $F = 50 \text{ N}$, not $mg = 50 \text{ N}$. Let $mg$ be determined from
$N = mg - 50\sin 30^\circ = mg - 25$.

$W_f = -f_k d = -\mu_k N d = -0.3 \times (mg - 25) \times 4.0$.

Since $mg$ is not given, assume $mg = 50 \text{ N}$ (so $N = 25 \text{ N}$):

$W_f = -0.3 \times 25 \times 4.0 = -30 \text{ J}$

**Gravity:** $W_g = 0$ (vertical force, horizontal displacement)

**Normal force:** $W_N = 0$ (vertical force, horizontal displacement)

**Net work:** $W_{\text{net}} = 173.2 - 30 = 143.2 \text{ J}$

:::

## Kinetic Energy (CED Unit 4)

The kinetic energy of an object of mass $m$ moving with speed $v$ is:

$$
K = \frac{1}{2}mv^2
$$

### Work-Energy Theorem

The net work done on an object equals its change in kinetic energy:

$$
W_{\text{net}} = \Delta K = K_f - K_i = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2
$$

### Proof of the Work-Energy Theorem (AP Physics C)

$$
W_{\text{net}} = \int_{x_i}^{x_f} F_{\text{net}}\, dx = \int_{x_i}^{x_f} ma\, dx = m\int_{x_i}^{x_f} \frac{dv}{dt}\, dx
$$

Using the chain rule $\frac{dv}{dt} = \frac{dv}{dx}\frac{dx}{dt} = v\frac{dv}{dx}$:

$$
W_{\text{net}} = m\int_{v_i}^{v_f} v\, dv = m\left[\frac{v^2}{2}\right]_{v_i}^{v_f} = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2
$$

$\blacksquare$

:::info[Example]

A $2.0 \text{ kg}$ block initially at rest is pushed by a $12 \text{ N}$ horizontal force across a
frictionless surface for $5.0 \text{ m}$. Find its final speed.

$$
W_{\text{net}} = 12 \times 5.0 = 60 \text{ J}
$$

$$
\Delta K = \frac{1}{2}mv_f^2 - 0 = 60 \implies v_f = \sqrt{\frac{120}{2.0}} = \sqrt{60} \approx 7.75 \text{ m/s}
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

### Conservative vs Non-Conservative Forces

- **Conservative force:** Work done is path-independent; work around a closed loop is zero.
  Examples: gravity, spring force, electrostatic force.
- **Non-conservative force:** Work depends on the path. Examples: friction, air resistance, tension.

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
W_{\text{nc}} = \Delta K + \Delta U = E_f - E_i
$$

where $W_{\text{nc}}$ is the work done by non-conservative forces (like friction).

:::info[Example]

A roller coaster car starts from rest at height $h = 20 \text{ m}$, goes through a loop of radius
$6.0 \text{ m}$, and reaches a second hill of height $12 \text{ m}$. Find the speed at the top of
the loop (neglecting friction).

Using conservation of energy from the start to the top of the loop (height $= 2R = 12 \text{ m}$):

$$
mgh_i = \frac{1}{2}mv_f^2 + mgh_f
$$

$$
(9.8)(20) = \frac{1}{2}v_f^2 + (9.8)(12)
$$

$$
196 = \frac{1}{2}v_f^2 + 117.6 \implies \frac{1}{2}v_f^2 = 78.4 \implies v_f = \sqrt{156.8} \approx 12.5 \text{ m/s}
$$

:::

:::info[Example: With Friction]

A $3.0 \text{ kg}$ block slides down a $30^\circ$ incline of length $5.0 \text{ m}$ from rest. The
coefficient of kinetic friction is $\mu_k = 0.2$. Find the speed at the bottom.

**Energy method:** $W_{\text{nc}} = \Delta K + \Delta U$

$-f_k d = \frac{1}{2}mv_f^2 - 0 + mg(h_f - h_i)$

$f_k = \mu_k mg\cos\theta = 0.2 \times 3.0 \times 9.8 \times \cos 30^\circ = 5.09 \text{ N}$

$h = d\sin\theta = 5.0 \times \sin 30^\circ = 2.5 \text{ m}$

$-5.09 \times 5.0 = \frac{1}{2}(3.0)v_f^2 - (3.0)(9.8)(2.5)$

$-25.45 = 1.5v_f^2 - 73.5$

$1.5v_f^2 = 48.05 \implies v_f = \sqrt{32.03} \approx 5.66 \text{ m/s}$

:::

## Power (CED Unit 4)

Power is the rate at which work is done:

$$
P = \frac{dW}{dt}
$$

For a constant force: $P = Fv\cos\theta$.

### Units

1 Watt (W) = $1 \text{ J/s} = 1 \text{ kg} \cdot \text{m}^2/\text{s}^3$

1 horsepower (hp) = 746 W

:::info[Example]

A $1200 \text{ kg}$ car accelerates from rest to $25 \text{ m/s}$ in 8.0 s on a level road. If the
engine provides constant power, what is that power?

**Energy method:**

$$
P = \frac{W}{t} = \frac{\Delta K}{t} = \frac{\frac{1}{2}(1200)(25)^2}{8.0} = \frac{375000}{8.0} = 46875 \text{ W} \approx 46.9 \text{ kW}
$$

:::

## Potential Energy Diagrams and Stability

A potential energy diagram plots $U(x)$ vs $x$. From this, we can determine:

- **Force:** $\displaystyle F(x) = -\frac{dU}{dx}$
- **Equilibrium points:** Where $F(x) = 0$, i.e., $\frac{dU}{dx} = 0$
- **Stable equilibrium:** Local minimum of $U$ ($\frac{d^2U}{dx^2} \gt 0$)
- **Unstable equilibrium:** Local maximum of $U$ ($\frac{d^2U}{dx^2} \lt 0$)
- **Neutral equilibrium:** Flat region of $U$

### Total Energy

On a potential energy diagram, the total energy $E = K + U$ is a horizontal line. The kinetic energy
at any point is $K = E - U$. Motion is only possible where $K \ge 0$, i.e., $E \ge U$.

## Escape Velocity

The minimum speed needed for an object to escape a gravitational field (reach infinity with zero
speed):

$$
\frac{1}{2}mv_e^2 - \frac{GMm}{R} = 0 \implies v_e = \sqrt{\frac{2GM}{R}}
$$

For Earth: $v_e \approx 11.2 \text{ km/s}$.

## Common Pitfalls

1. **Forgetting that work is a scalar.** It can be positive, negative, or zero depending on the
   angle between force and displacement.
2. **Using the wrong height for gravitational PE.** $h$ is measured from the chosen reference level,
   which can be set anywhere convenient.
3. **Confusing force and power.** Power is force times velocity, not just force.
4. **Applying conservation of mechanical energy when non-conservative forces are present.** Use
   $W_{\text{nc}} = \Delta E$ instead.
5. **Forgetting the sign convention.** Work done by gravity is $W_g = -mg\Delta h$ (positive when
   the object moves down).
6. **Using $U = mgh$ far from Earth's surface.** Use $U = -\frac{GMm}{r}$ instead.
7. **Incorrectly computing power as force divided by time.** Power is work divided by time, or force
   times velocity.

## Practice Questions

1. A $5.0 \text{ kg}$ block slides $3.0 \text{ m}$ down a $25^\circ$ frictionless incline. Find the
   work done by gravity and the final speed.

2. A spring with $k = 500 \text{ N/m}$ is compressed $0.10 \text{ m}$ and launches a
   $0.50 \text{ kg}$ block on a frictionless surface. Find the maximum speed of the block and the
   maximum height it reaches on a frictionless incline.

3. A $1000 \text{ kg}$ elevator starts from rest and accelerates upward at $2.0 \text{ m/s}^2$ for
   $3.0 \text{ s}$. Find the power output of the motor at $t = 3.0 \text{ s}$.

4. A pendulum of length $1.5 \text{ m}$ is released from horizontal. Find its speed at the lowest
   point (neglect air resistance).

5. A $0.50 \text{ kg}$ ball is thrown straight up with speed $15 \text{ m/s}$. If air resistance
   does $-5.0 \text{ J}$ of work, find the maximum height.

6. A car of mass $1500 \text{ kg}$ travels at constant speed $20 \text{ m/s}$ up a $10^\circ$
   incline. If the engine produces $50 \text{ kW}$, find the frictional force.

7. A satellite in circular orbit at altitude $500 \text{ km}$ needs to escape Earth. What additional
   speed must it acquire?

8. Derive the relationship $F = -\frac{dU}{dx}$ from the work-energy theorem for one-dimensional
   motion.
