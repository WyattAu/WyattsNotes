---
title: AP Physics 1 Study Guide
description:
  'Qualifications Physics 1.Md AP Physics 1 Study notes covering key definitions, core concepts,
  worked examples, and practice questions for methodical revision.'
date: 2026-05-31
tags:
  - ap
  - ap-physics
categories:
  - ap-physics
slug: physics-1
---

# AP Physics 1 Study Guide

Comprehensive study guide for AP Physics 1 (Algebra-Based), aligned with the College Board Course
and Exam Description. Covers mechanics and rotational motion with emphasis on conceptual
understanding and problem-solving.

## 1. Kinematics

### Displacement, Velocity, and Acceleration

| Quantity     | Type   | Definition                           | SI Unit |
| ------------ | ------ | ------------------------------------ | ------- |
| Displacement | Vector | Change in position, $\Delta \vec{r}$ | m       |
| Distance     | Scalar | Total path length                    | m       |
| Velocity     | Vector | Rate of change of displacement       | m/s     |
| Speed        | Scalar | Rate of change of distance           | m/s     |
| Acceleration | Vector | Rate of change of velocity           | m/s$^2$ |

### One-Dimensional Kinematics

**Constant acceleration equations:**

$$
v = v_0 + at
$$

$$
x = x_0 + v_0 t + \frac{1}{2}at^2
$$

$$
v^2 = v_0^2 + 2a(x - x_0)
$$

$$
x = x_0 + \frac{1}{2}(v_0 + v)t
$$

### Two-Dimensional Motion

In 2D, resolve all vectors into perpendicular components. The $x$ and $y$ components of motion are
independent of each other (superposition principle).

### Projectile Motion

For a projectile launched with initial speed $v_0$ at angle $\theta$ above the horizontal (ignoring
air resistance):

$$
v_{0x} = v_0 \cos\theta, \quad v_{0y} = v_0 \sin\theta
$$

**Horizontal (constant velocity):**

$$
x(t) = v_{0x}\, t
$$

**Vertical (constant acceleration $a_y = -g$):**

$$
y(t) = v_{0y}\, t - \frac{1}{2}gt^2
$$

$$
v_y(t) = v_{0y} - gt
$$

**Time of flight:** $t = \dfrac{2v_{0y}}{g}$

**Maximum height:** $H = \dfrac{v_{0y}^2}{2g}$

**Range:** $R = \dfrac{v_0^2 \sin 2\theta}{g}$

### Free Fall

An object in free fall experiences only the force of gravity. All objects in free fall have the same
acceleration $g \approx 9.8\ \text{m/s}^2$ near Earth's surface, regardless of mass.

### Graphical Analysis

- **Position-time graph:** Slope gives velocity
- **Velocity-time graph:** Slope gives acceleration; area under the curve gives displacement
- **Acceleration-time graph:** Area under the curve gives change in velocity

## 2. Dynamics

### Newton's Laws

**First Law (Inertia):** An object at rest stays at rest and an object in motion stays in motion
with the same speed and in the same direction unless acted upon by a net external force.

**Second Law:** The net force on an object equals its mass times its acceleration:

$$
\vec{F}_{\text{net}} = m\vec{a}
$$

This is a vector equation — apply separately in each direction.

**Third Law:** For every action force there is an equal and opposite reaction force. Forces always
come in pairs acting on different objects.

### Free-Body Diagrams

1. Isolate the object of interest
2. Draw arrows for every force acting **on** the object
3. Forces act **on** the object; the object's forces act on other things
4. Common forces: weight ($mg$), normal force ($N$), tension ($T$), friction ($f$), applied force
   ($F$)

### Friction

**Static friction:** $f_s \leq \mu_s N$ (prevents motion; maximum value is $\mu_s N$)

**Kinetic friction:** $f_k = \mu_k N$ (opposes motion; constant magnitude)

where $\mu_s$ and $\mu_k$ are coefficients of static and kinetic friction respectively, and $N$ is
the normal force.

### Inclined Planes

On an incline at angle $\theta$ to the horizontal:

$$
a = g(\sin\theta - \mu_k \cos\theta)
$$

The component of weight parallel to the plane is $mg\sin\theta$; the component perpendicular (which
equals the normal force) is $mg\cos\theta$.

### Atwood Machine

Two masses $m_1$ and $m_2$ ($m_2 > m_1$) connected by a string over a frictionless pulley:

$$
a = \frac{(m_2 - m_1)g}{m_1 + m_2}
$$

$$
T = \frac{2m_1 m_2 g}{m_1 + m_2}
$$

### Uniform Circular Motion

An object moving in a circle of radius $r$ at constant speed $v$ has a centripetal acceleration
directed towards the centre:

$$
a_c = \frac{v^2}{r}
$$

The net inward force providing this acceleration is:

$$
F_c = \frac{mv^2}{r} = m\omega^2 r
$$

where $\omega$ is the angular velocity in rad/s.

### Gravitational Force

Newton's law of universal gravitation:

$$
F_g = \frac{Gm_1 m_2}{r^2}
$$

where $G = 6.674 \times 10^{-11}\ \text{N}\cdot\text{m}^2/\text{kg}^2$.

The gravitational field strength at distance $r$ from mass $M$:

$$
g = \frac{GM}{r^2}
$$

## 3. Work and Energy

### Work

Work done by a constant force:

$$
W = Fd\cos\theta
$$

where $\theta$ is the angle between the force and the displacement. Work is positive when the force
has a component in the direction of displacement and negative when opposing displacement.

For a variable force:

$$
W = \int_a^b F(x)\, dx
$$

### Work-Energy Theorem

The net work done on an object equals its change in kinetic energy:

$$
W_{\text{net}} = \Delta K = K_f - K_i
$$

### Kinetic Energy

$$
K = \frac{1}{2}mv^2
$$

### Potential Energy

**Gravitational potential energy (near Earth's surface):**

$$
U_g = mgh
$$

**Elastic (spring) potential energy:**

$$
U_s = \frac{1}{2}kx^2
$$

where $k$ is the spring constant and $x$ is the displacement from equilibrium.

### Conservation of Energy

In the absence of non-conservative forces (e.g., friction):

$$
K_i + U_i = K_f + U_f
$$

When friction is present:

$$
K_i + U_i = K_f + U_f + E_{\text{lost to friction}}
$$

where $E_{\text{lost to friction}} = f_k d$.

### Power

Average power is the rate at which work is done:

$$
P = \frac{W}{\Delta t}
$$

Instantaneous power:

$$
P = Fv\cos\theta
$$

SI unit: watt (W), where $1\ \text{W} = 1\ \text{J/s}$.

## 4. Momentum

### Impulse and Linear Momentum

**Momentum:**

$$
\vec{p} = m\vec{v}
$$

**Impulse:**

$$
\vec{J} = \vec{F}_{\text{avg}}\,\Delta t = \Delta\vec{p} = m\vec{v}_f - m\vec{v}_i
$$

The impulse-momentum theorem states that the impulse on an object equals its change in momentum.
Graphically, impulse equals the area under a force-time graph.

### Conservation of Momentum

When the net external force on a system is zero, the total momentum of the system is conserved:

$$
m_1\vec{v}_{1i} + m_2\vec{v}_{2i} = m_1\vec{v}_{1f} + m_2\vec{v}_{2f}
$$

This applies independently to each component direction.

### Collisions

**Elastic collision:** Both momentum and kinetic energy are conserved.

For a 1D elastic collision between masses $m_1$ and $m_2$:

$$
v_{1f} = \frac{(m_1 - m_2)v_{1i} + 2m_2 v_{2i}}{m_1 + m_2}
$$

$$
v_{2f} = \frac{(m_2 - m_1)v_{2i} + 2m_1 v_{1i}}{m_1 + m_2}
$$

**Inelastic collision:** Momentum is conserved but kinetic energy is not.

**Perfectly inelastic collision:** The objects stick together after collision.

$$
(m_1 + m_2)v_f = m_1 v_{1i} + m_2 v_{2i}
$$

### Centre of Mass

The centre of mass of a system of particles:

$$
x_{\text{cm}} = \frac{m_1 x_1 + m_2 x_2 + \cdots}{m_1 + m_2 + \cdots}
$$

The centre of mass of a system moves as if all external forces act on a single particle of total
mass located at the centre of mass.

## 5. Rotational Motion

### Torque

Torque is the rotational analogue of force:

$$
\tau = rF\sin\theta = r_\perp F
$$

where $r_\perp = r\sin\theta$ is the perpendicular distance from the axis of rotation to the line of
action of the force (the moment arm). Positive torque causes counter-clockwise rotation; negative
causes clockwise.

Net torque and angular acceleration:

$$
\tau_{\text{net}} = I\alpha
$$

where $I$ is the rotational inertia and $\alpha$ is the angular acceleration.

### Rotational Inertia (Moment of Inertia)

$$
I = \sum m_i r_i^2
$$

For continuous objects: $I = \int r^2\, dm$

Common moments of inertia:

| Object                                    | Rotational Inertia  |
| ----------------------------------------- | ------------------- |
| Solid disc/cylinder (axis through centre) | $\dfrac{1}{2}MR^2$  |
| Hoop/ring (axis through centre)           | $MR^2$              |
| Solid sphere                              | $\dfrac{2}{5}MR^2$  |
| Thin rod (axis through centre)            | $\dfrac{1}{12}ML^2$ |
| Thin rod (axis through end)               | $\dfrac{1}{3}ML^2$  |
| Point mass at distance $r$                | $mr^2$              |

### Angular Momentum

$$
L = I\omega
$$

For a point mass: $L = mvr_\perp$

**Conservation of angular momentum:** When no net external torque acts on a system, $I\omega$ is
constant:

$$
I_i\omega_i = I_f\omega_f
$$

### Rotational Kinetic Energy

$$
K_r = \frac{1}{2}I\omega^2
$$

Total kinetic energy for a rolling object:

$$
K_{\text{total}} = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2
$$

### Rolling Motion

For an object rolling without slipping:

$$
v_{\text{cm}} = R\omega
$$

$$
a_{\text{cm}} = R\alpha
$$

Acceleration of a solid sphere rolling down an incline of angle $\theta$:

$$
a = \frac{5}{7}g\sin\theta
$$

## 6. Oscillations

### Simple Harmonic Motion (SHM)

An object undergoes SHM when a restoring force is proportional to the displacement from equilibrium:

$$
F = -kx
$$

This yields sinusoidal motion:

$$
x(t) = A\cos(\omega t + \phi)
$$

where $A$ is the amplitude, $\omega$ is the angular frequency, and $\phi$ is the phase constant.

### Mass-Spring System

$$
\omega = \sqrt{\frac{k}{m}}, \quad T = 2\pi\sqrt{\frac{m}{k}}, \quad f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}
$$

where $T$ is the period (time for one complete oscillation) and $f$ is the frequency.

### Simple Pendulum

For small angles ($\theta < 15°$), a simple pendulum approximates SHM:

$$
\omega = \sqrt{\frac{g}{L}}, \quad T = 2\pi\sqrt{\frac{L}{g}}, \quad f = \frac{1}{2\pi}\sqrt{\frac{g}{L}}
$$

Note: the period of a pendulum is independent of mass.

### Energy in SHM

Total mechanical energy is conserved and constant:

$$
E_{\text{total}} = \frac{1}{2}kA^2 = K_{\text{max}} = U_{\text{max}}
$$

At any position $x$:

$$
K = \frac{1}{2}k(A^2 - x^2), \quad U = \frac{1}{2}kx^2
$$

### Period and Frequency

$$
T = \frac{1}{f}, \quad f = \frac{1}{T}, \quad \omega = 2\pi f = \frac{2\pi}{T}
$$

## 7. Key Equations

### Kinematics

$$
v = v_0 + at \quad x = x_0 + v_0 t + \tfrac{1}{2}at^2 \quad v^2 = v_0^2 + 2a\Delta x
$$

$$
x_{\text{max}} = \frac{v_0^2\sin^2\theta}{2g} \quad R = \frac{v_0^2 \sin 2\theta}{g}
$$

### Dynamics

$$
F_{\text{net}} = ma \quad f_k = \mu_k N \quad F_c = \frac{mv^2}{r}
$$

### Energy

$$
K = \tfrac{1}{2}mv^2 \quad U_g = mgh \quad U_s = \tfrac{1}{2}kx^2
$$

$$
W = Fd\cos\theta \quad P = \frac{W}{\Delta t} = Fv\cos\theta
$$

### Momentum

$$
p = mv \quad J = F_{\text{avg}}\,\Delta t = \Delta p
$$

### Rotation

$$
\tau = I\alpha \quad L = I\omega \quad K_r = \tfrac{1}{2}I\omega^2
$$

### Oscillations

$$
T_{\text{spring}} = 2\pi\sqrt{\frac{m}{k}} \quad T_{\text{pendulum}} = 2\pi\sqrt{\frac{L}{g}}
$$

## 8. Exam Tips

1. **Draw a free-body diagram for every problem.** It earns points, organises your thinking, and
   helps identify all forces. Never skip this step on the free-response section.
2. **Check dimensions and units at every step.** If your answer has units of kg·m/s when you expect
   joules, there is an error. Dimensional analysis catches many mistakes quickly.
3. **Define your coordinate system.** State which direction is positive and where the origin is.
   This prevents sign errors and makes your reasoning clear to the grader.
4. **Distinguish between vector and scalar quantities.** Displacement is not distance; velocity is
   not speed. The AP exam frequently tests this distinction.
5. **Apply conservation laws first.** Before writing out Newton's second law for every object, check
   whether conservation of energy or momentum solves the problem more efficiently.
6. **Explain your reasoning in words.** The AP Physics 1 exam emphasises conceptual understanding.
   After writing equations, explain what each term represents and why the equation applies.
7. **Use graphs to support your answers.** The exam often asks you to sketch or interpret graphs.
   Practise translating between equations, graphs, and physical descriptions.

## 9. Common Mistakes

1. **Confusing mass and weight.** Mass is an intrinsic property measured in kg; weight is the
   gravitational force $mg$ measured in newtons. An object has the same mass on the Moon but
   different weight.
2. **Including internal forces in $\vec{F}_{\text{net}}$.** Only external forces contribute to the
   net force on a system. The tension in a rope between two parts of the same system is an internal
   force and cancels out.
3. **Forgetting the normal force is not always $mg$.** On an incline, $N = mg\cos\theta$. In an
   accelerating lift, $N = m(g \pm a)$. Always derive $N$ from Newton's second law.
4. **Mixing up centripetal and centrifugal forces.** "Centrifugal force" is a fictitious force that
   appears in a rotating reference frame. In an inertial frame, only the centripetal force (directed
   towards the centre) acts on the object.
5. **Using the wrong collision formula.** Only use elastic collision equations when kinetic energy
   is conserved. For perfectly inelastic collisions, use conservation of momentum alone and set
   final velocities equal.
6. **Incorrect rotational inertia.** Do not assume $I = MR^2$ for all objects. A solid disc has
   $I = \tfrac{1}{2}MR^2$; a solid sphere has $I = \tfrac{2}{5}MR^2$. Know the common values.
7. **Applying the small-angle approximation outside its range.** The pendulum formula
   $T = 2\pi\sqrt{L/g}$ only holds for angles below roughly 15°. For larger amplitudes, the period
   is longer.

## 10. Summary

| Topic             | Key Ideas                                                                               |
| ----------------- | --------------------------------------------------------------------------------------- |
| Kinematics        | Displacement, velocity, acceleration, projectile motion, free fall, motion graphs       |
| Dynamics          | Newton's three laws, free-body diagrams, friction, inclined planes, circular motion     |
| Work and Energy   | Work, work-energy theorem, kinetic/potential energy, conservation of energy, power      |
| Momentum          | Impulse-momentum theorem, conservation of momentum, elastic and inelastic collisions    |
| Rotational Motion | Torque, rotational inertia, angular momentum, conservation of angular momentum, rolling |
| Oscillations      | SHM, mass-spring systems, pendulums, energy in oscillations                             |

AP Physics 1 rewards deep conceptual understanding over memorisation. Focus on building physical
intuition — ask yourself _why_ an object behaves as it does before reaching for an equation.
Practise explaining your reasoning evidently in writing, as the free-response section heavily
weights qualitative explanations alongside quantitative solutions.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing terminology or concepts that appear similar but have distinct meanings.
- Overlooking key assumptions or boundary conditions that limit applicability.
