---
title: Dynamics — Diagnostic Tests
description: Diagnostic tests for Newton's laws, friction, connected particles, inclined planes, and resolving forces at the hardest A-Level Physics standard.
slug: diag-dynamics
hide_table_of_contents: true
---

# Dynamics — Diagnostic Tests

## Unit Tests

### UT-1: Newton's Third Law on an Accelerating System

**Question:**

A lift (elevator) of total mass $800\,\text{kg}$ (including a passenger of mass $70\,\text{kg}$) accelerates upwards at $2.0\,\text{m}\,\text{s}^{-2}$.

(a) State the Newton's third law pair for the normal contact force exerted by the lift floor on the passenger.

(b) Calculate the magnitude of the normal contact force exerted by the lift floor on the passenger.

(c) Calculate the tension in the cable. Explain why this tension is not the Newton's third law pair of the weight of the lift.

**Solution:**

(a) The Newton's third law pair is: **the normal contact force exerted by the passenger on the lift floor**. The pair consists of two forces of equal magnitude and opposite direction, acting on **different bodies**, and of the **same type** (both are electromagnetic/normal contact forces).

Common error: stating "the weight of the passenger" as the pair. Weight acts on the passenger due to the Earth's gravitational field, while the normal force acts on the passenger due to the floor. These are not a third law pair because they act on the same body and are not the same type of force.

(b) For the passenger alone (upward positive):

$$N - mg = ma$$
$$N = m(g + a) = 70(9.81 + 2.0) = 70 \times 11.81 = 826.7 \approx 827\,\text{N}$$

(c) For the entire system (lift + passenger):

$$T - Mg = Ma$$
$$T = M(g + a) = 800(9.81 + 2.0) = 800 \times 11.81 = 9448 \approx 9450\,\text{N}$$

The tension in the cable is not the third law pair of the weight because: (1) the third law pair of the weight is the gravitational pull of the lift (and passenger) on the Earth, and (2) the tension acts on the lift while the weight acts on the lift -- but more fundamentally, the tension and weight are not a third law pair because they are not the same type of force and do not act between the same two bodies.

---
### UT-2: Friction on an Inclined Plane with Applied Force

**Question:**

A block of mass $5.0\,\text{kg}$ rests on a rough plane inclined at $30^\circ$ to the horizontal. The coefficient of friction between the block and the plane is $\mu = 0.25$. A horizontal force $P$ is applied to the block.

(a) Calculate the minimum value of $P$ required to prevent the block from sliding down the plane.

(b) Calculate the maximum value of $P$ before the block begins to slide up the plane.

(c) If $P = 30\,\text{N}$, determine the magnitude and direction of the frictional force.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

Resolving forces perpendicular to the plane:

$$R = mg\cos 30^\circ + P\sin 30^\circ$$

Resolving forces parallel to the plane (up the plane positive):

Component of weight down the plane: $mg\sin 30^\circ$

Component of $P$ up the plane: $P\cos 30^\circ$

(a) **Minimum $P$ to prevent sliding down**: The block is on the point of sliding down, so friction acts **up** the plane at its maximum value.

$$P\cos 30^\circ + F_{\max} = mg\sin 30^\circ$$
$$P\cos 30^\circ + \mu(mg\cos 30^\circ + P\sin 30^\circ) = mg\sin 30^\circ$$
$$P\cos 30^\circ + 0.25(5.0 \times 9.81 \times \cos 30^\circ + 0.5P) = 5.0 \times 9.81 \times 0.5$$
$$0.866P + 0.25(42.48 + 0.5P) = 24.525$$
$$0.866P + 10.62 + 0.125P = 24.525$$
$$0.991P = 13.905$$
$$P = 14.0\,\text{N}$$

(b) **Maximum $P$ before sliding up**: Friction now acts **down** the plane at its maximum value.

$$P\cos 30^\circ = mg\sin 30^\circ + F_{\max}$$
$$P\cos 30^\circ = mg\sin 30^\circ + \mu(mg\cos 30^\circ + P\sin 30^\circ)$$
$$0.866P = 24.525 + 0.25(42.48 + 0.5P)$$
$$0.866P = 24.525 + 10.62 + 0.125P$$
$$0.741P = 35.145$$
$$P = 47.4\,\text{N}$$

(c) With $P = 30\,\text{N}$, we first check whether the block is in equilibrium by assuming it is and finding the required friction.

Up the plane: $P\cos 30^\circ = 30 \times 0.866 = 25.98\,\text{N}$

Down the plane: $mg\sin 30^\circ = 24.525\,\text{N}$

Net force up the plane (without friction): $25.98 - 24.525 = 1.455\,\text{N}$ up the plane.

Since the net force (without friction) is up the plane and the block is in equilibrium, friction must act **down** the plane:

$$F = 1.455\,\text{N}\text{ down the plane}$$

Check: $F_{\max} = \mu R = 0.25(42.48 + 30 \times 0.5) = 0.25 \times 57.48 = 14.37\,\text{N}$

Since $1.455 \lt 14.37$, the block is indeed in equilibrium and the friction is **less than the maximum**, confirming $F \le \mu R$.

The magnitude of friction is $1.5\,\text{N}$ (2 s.f.), directed down the plane.

---
### UT-3: Connected Particles with a Pulley on an Inclined Plane

**Question:**

Particle $A$ of mass $4.0\,\text{kg}$ rests on a rough plane inclined at $25^\circ$ to the horizontal. It is connected by a light inextensible string over a smooth fixed pulley at the top of the plane to particle $B$ of mass $6.0\,\text{kg}$ hanging vertically. The coefficient of friction between $A$ and the plane is $\mu = 0.30$. The system is released from rest.

(a) Calculate the acceleration of the system and the tension in the string.

(b) After $2.0\,\text{s}$ of motion, the string snaps. Calculate the total distance travelled by $A$ from the moment of release until it comes to rest.

(c) Explain why the acceleration of $A$ changes when the string snaps.

**Solution:**

(a) Since $B$ is heavier, $B$ moves down and $A$ moves up the plane.

For $B$ (down positive): $6.0g - T = 6.0a$

For $A$ (up the plane positive): $T - mg\sin 25^\circ - F = 4.0a$

where $F = \mu R = \mu \cdot mg\cos 25^\circ = 0.30 \times 4.0 \times 9.81 \times \cos 25^\circ = 0.30 \times 4.0 \times 9.81 \times 0.9063 = 10.66\,\text{N}$

Adding the equations:

$$6.0g - 4.0g\sin 25^\circ - 10.66 = 10.0a$$
$$58.86 - 16.59 - 10.66 = 10.0a$$
$$31.61 = 10.0a$$
$$a = 3.16\,\text{m}\,\text{s}^{-2}$$

From $B$'s equation: $T = 6.0(9.81 - 3.16) = 6.0 \times 6.65 = 39.9\,\text{N}$

(b) After $2.0\,\text{s}$:

Speed of $A$: $v = at = 3.16 \times 2.0 = 6.32\,\text{m}\,\text{s}^{-1}$ up the plane

Distance already travelled: $s = \frac{1}{2}at^2 = 0.5 \times 3.16 \times 4.0 = 6.32\,\text{m}$

When the string snaps, $A$ decelerates due to gravity component and friction:

$$a' = \frac{-(mg\sin 25^\circ + F)}{m} = \frac{-(16.59 + 10.66)}{4.0} = \frac{-27.25}{4.0} = -6.81\,\text{m}\,\text{s}^{-2}$$

Distance to stop: $s' = \frac{v^2}{2|a'|} = \frac{6.32^2}{2 \times 6.81} = \frac{39.94}{13.62} = 2.93\,\text{m}$

Total distance $= 6.32 + 2.93 = 9.25\,\text{m}$

(c) When the string snaps, $A$ is no longer being pulled up the plane by the tension. The forces on $A$ are now only: weight component down the plane, normal reaction, and friction (which also acts down the plane since $A$ is moving up). Both the component of weight and friction now oppose the motion, so the deceleration is larger than before. Previously, the tension partially counteracted the weight component and friction, giving a net acceleration up the plane.

## Integration Tests

### IT-1: Towing a Trailer up a Hill (with Work-Energy)

**Question:**

A car of mass $1500\,\text{kg}$ tows a trailer of mass $500\,\text{kg}$ up a hill inclined at $\sin^{-1}(1/20)$ to the horizontal. The car's engine provides a constant driving force of $4500\,\text{N}$. The resistive forces on the car are $400\,\text{N}$ and on the trailer are $200\,\text{N}$ (both constant and opposing motion). The towbar is light and inextensible.

(a) Calculate the acceleration of the system.

(b) Calculate the tension in the towbar.

(c) Calculate the work done by the engine over the first $50\,\text{m}$ and hence the speed of the system after $50\,\text{m}$, starting from rest.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) For the entire system (mass $2000\,\text{kg}$):

Driving force up the hill: $4500\,\text{N}$

Weight component down the hill: $2000g \times \frac{1}{20} = 100g = 981\,\text{N}$

Total resistance: $400 + 200 = 600\,\text{N}$

$$F_{\text{net}} = 4500 - 981 - 600 = 2919\,\text{N}$$
$$a = \frac{2919}{2000} = 1.460\,\text{m}\,\text{s}^{-2}$$

(b) For the trailer alone:

$$T - 500g \times \frac{1}{20} - 200 = 500a$$
$$T - 245.25 - 200 = 500 \times 1.460$$
$$T = 729.75 + 445.25 = 1175\,\text{N}$$

(c) Work done by engine: $W = F \times d = 4500 \times 50 = 225000\,\text{J}$

Work done against gravity: $\Delta E_p = Mgh = 2000 \times 9.81 \times 50/20 = 49050\,\text{J}$

Work done against resistance: $600 \times 50 = 30000\,\text{J}$

By the work-energy principle: $W_{\text{engine}} = \Delta E_k + \Delta E_p + W_{\text{resistance}}$

$$225000 = \frac{1}{2}(2000)v^2 + 49050 + 30000$$
$$225000 - 79050 = 1000v^2$$
$$145950 = 1000v^2$$
$$v^2 = 145.95$$
$$v = 12.08\,\text{m}\,\text{s}^{-1}$$

Check with kinematics: $v = \sqrt{2ad} = \sqrt{2 \times 1.460 \times 50} = \sqrt{146.0} = 12.08\,\text{m}\,\text{s}^{-1}$. Consistent.

---
### IT-2: Block on a Turntable (with Circular Motion)

**Question:**

A block of mass $0.50\,\text{kg}$ is placed on a horizontal turntable at a distance $r = 0.15\,\text{m}$ from the axis of rotation. The coefficient of static friction between the block and the turntable is $\mu_s = 0.40$. The turntable rotates with angular velocity $\omega$.

(a) Derive an expression for the maximum angular velocity $\omega_{\max}$ before the block slides off.

(b) Calculate $\omega_{\max}$.

(c) The turntable is then tilted so that its surface makes an angle of $10^\circ$ with the horizontal, with the block on the upper side. The turntable rotates about a vertical axis. Will the block slide more easily or less easily? Justify your answer with calculations.

**Solution:**

(a) The centripetal force is provided by friction:

$$F = m\omega^2 r \le \mu_s R = \mu_s mg$$

At the limiting case: $m\omega_{\max}^2 r = \mu_s mg$

$$\omega_{\max} = \sqrt{\frac{\mu_s g}{r}}$$

(b) $\omega_{\max} = \sqrt{\frac{0.40 \times 9.81}{0.15}} = \sqrt{\frac{3.924}{0.15}} = \sqrt{26.16} = 5.11\,\text{rad}\,\text{s}^{-1}$

(c) When tilted at $10^\circ$, resolve perpendicular to the surface:

$$R = mg\cos 10^\circ = 0.50 \times 9.81 \times 0.9848 = 4.831\,\text{N}$$

Maximum friction: $F_{\max} = \mu_s R = 0.40 \times 4.831 = 1.932\,\text{N}$

The required centripetal force is still $m\omega^2 r = 0.50\omega^2 \times 0.15 = 0.075\omega^2$.

But there is also a component of weight down the slope: $mg\sin 10^\circ = 0.50 \times 9.81 \times 0.1736 = 0.851\,\text{N}$.

For the block not to slide, friction must provide both the centripetal force and counteract the weight component down the slope. Since the centripetal force is horizontal and the weight component is along the slope, we need to resolve more carefully.

The friction acts along the plane. Resolving horizontally (centripetal direction):

$$F\cos 10^\circ = m\omega^2 r$$

Resolving along the slope (to prevent sliding down):

$$F\sin 10^\circ + mg\sin 10^\circ \text{ component check:}$$

Actually, resolving perpendicular to the slope (for $R$): $R = mg\cos 10^\circ$ (the rotation doesn't change this since the rotation axis is vertical).

Along the slope: friction must balance the weight component plus provide the centripetal force component along the slope.

$$F = mg\sin 10^\circ + m\omega^2 r\cos 10^\circ$$

Wait, let me redo this more carefully.

Resolving horizontally: $F\cos 10^\circ - R\sin 10^\circ = m\omega^2 r$

But $R = mg\cos 10^\circ$ only if we ignore the friction component perpendicular to the plane. Let me use a more careful analysis.

Resolving perpendicular to the plane: $R - mg\cos 10^\circ = 0$ (no acceleration perpendicular to plane), so $R = mg\cos 10^\circ$.

Resolving horizontally (centripetal): $F\cos 10^\circ - R\sin 10^\circ = m\omega^2 r$

Wait, actually friction acts along the plane. Let me resolve the friction into horizontal and vertical components.

$F_{\text{horizontal}} = F\cos 10^\circ$

$F_{\text{vertical}} = F\sin 10^\circ$

Resolving horizontally: $F\cos 10^\circ = m\omega^2 r$

Resolving vertically: $R\cos 10^\circ + F\sin 10^\circ = mg$

So $R = \frac{mg - F\sin 10^\circ}{\cos 10^\circ}$

At limiting friction: $F = \mu_s R$

From the horizontal equation: $F = \frac{m\omega^2 r}{\cos 10^\circ}$

Substituting:

$$\frac{m\omega^2 r}{\cos 10^\circ} = \mu_s \cdot \frac{mg - \frac{m\omega^2 r \sin 10^\circ}{\cos 10^\circ}}{\cos 10^\circ}$$

$$\frac{m\omega^2 r}{\cos 10^\circ} = \frac{\mu_s(mg\cos 10^\circ - m\omega^2 r\sin 10^\circ)}{\cos^2 10^\circ}$$

$$m\omega^2 r\cos 10^\circ = \mu_s mg\cos 10^\circ - \mu_s m\omega^2 r\sin 10^\circ$$

$$m\omega^2 r(\cos 10^\circ + \mu_s\sin 10^\circ) = \mu_s mg\cos 10^\circ$$

$$\omega_{\max}^2 = \frac{\mu_s g\cos 10^\circ}{r(\cos 10^\circ + \mu_s\sin 10^\circ)}$$

$$\omega_{\max}^2 = \frac{0.40 \times 9.81 \times 0.9848}{0.15(0.9848 + 0.40 \times 0.1736)} = \frac{3.865}{0.15(0.9848 + 0.06944)} = \frac{3.865}{0.15 \times 1.0542} = \frac{3.865}{0.1581} = 24.45$$

$$\omega_{\max} = 4.94\,\text{rad}\,\text{s}^{-1}$$

Since $4.94 \lt 5.11$, the block slides **more easily** when the turntable is tilted. The tilt reduces the effective normal reaction and the friction must also counteract the tendency to slide down the slope.

---
### IT-3: Multi-Stage Connected Particle Problem (with Momentum)

**Question:**

Two trolleys $A$ and $B$ are on a horizontal track. $A$ has mass $2.0\,\text{kg}$ and $B$ has mass $3.0\,\text{kg}$. They are initially at rest, separated by a compressed spring of negligible mass between them. When released, the spring pushes the trolleys apart. The spring stores $12.0\,\text{J}$ of elastic potential energy.

(a) Calculate the speeds of $A$ and $B$ immediately after the spring is released, assuming no energy losses.

(b) $B$ then collides with a wall and rebounds with speed $1.0\,\text{m}\,\text{s}^{-1}$ towards $A$. If $A$ and $B$ then collide and stick together, calculate their common velocity after the collision.

(c) Calculate the total kinetic energy at the end and compare it with the initial $12.0\,\text{J}$, accounting for the difference.

**Solution:**

(a) By conservation of momentum (initially both at rest):

$$0 = m_A v_A + m_B v_B$$
$$2.0v_A + 3.0v_B = 0 \Rightarrow v_A = -1.5v_B$$

By conservation of energy:

$$12.0 = \frac{1}{2}(2.0)v_A^2 + \frac{1}{2}(3.0)v_B^2$$
$$12.0 = v_A^2 + 1.5v_B^2$$

Substituting $v_A = -1.5v_B$:

$$12.0 = 2.25v_B^2 + 1.5v_B^2 = 3.75v_B^2$$
$$v_B^2 = 3.20 \Rightarrow v_B = 1.789\,\text{m}\,\text{s}^{-1}$$
$$v_A = -1.5 \times 1.789 = -2.683\,\text{m}\,\text{s}^{-1}$$

Taking rightward as positive: $v_A = 2.68\,\text{m}\,\text{s}^{-1}$ (leftward), $v_B = 1.79\,\text{m}\,\text{s}^{-1}$ (rightward).

(b) After $B$ rebounds from the wall with speed $1.0\,\text{m}\,\text{s}^{-1}$ towards $A$ (leftward, so negative):

At the moment of collision between $A$ and $B$: $A$ is still moving left at $2.68\,\text{m}\,\text{s}^{-1}$ and $B$ is moving left at $1.0\,\text{m}\,\text{s}^{-1}$.

Wait, we need to set up directions carefully. Let rightward be positive.

Initially after spring: $v_A = -2.68\,\text{m}\,\text{s}^{-1}$ (leftward), $v_B = +1.79\,\text{m}\,\text{s}^{-1}$ (rightward).

$B$ hits the wall and rebounds: $v_B' = -1.0\,\text{m}\,\text{s}^{-1}$ (leftward).

For the $A$-$B$ collision (they stick together, perfectly inelastic):

$$m_A v_A + m_B v_B' = (m_A + m_B)v_f$$
$$2.0(-2.68) + 3.0(-1.0) = 5.0v_f$$
$$-5.36 - 3.0 = 5.0v_f$$
$$v_f = -1.67\,\text{m}\,\text{s}^{-1}$$

Common velocity is $1.67\,\text{m}\,\text{s}^{-1}$ leftward.

(c) Final KE $= \frac{1}{2}(5.0)(1.67)^2 = 2.5 \times 2.789 = 6.97\,\text{J}$

Energy lost $= 12.0 - 6.97 = 5.03\,\text{J}$

This energy is lost in the collision with the wall (where $B$'s KE changed from $\frac{1}{2}(3.0)(1.79)^2 = 4.80\,\text{J}$ to $\frac{1}{2}(3.0)(1.0)^2 = 1.50\,\text{J}$, a loss of $3.30\,\text{J}$) and in the perfectly inelastic collision between $A$ and $B$ (loss of $5.03 - 3.30 = 1.73\,\text{J}$).

Total KE before wall collision: $12.0\,\text{J}$. KE after wall collision, before $A$-$B$ collision: $\frac{1}{2}(2.0)(2.68)^2 + \frac{1}{2}(3.0)(1.0)^2 = 7.18 + 1.50 = 8.68\,\text{J}$. Lost at wall: $12.0 - 8.68 = 3.32\,\text{J}$.

After $A$-$B$ collision: $6.97\,\text{J}$. Lost in $A$-$B$ collision: $8.68 - 6.97 = 1.71\,\text{J}$.

Total lost: $3.32 + 1.71 = 5.03\,\text{J}$. Consistent.
