---
title: Energy and Conservation -- Diagnostic Tests
description: Hardest IB Physics energy diagnostic tests covering path-dependent friction work, elastic collisions with energy conservation, power with variable forces, and gravitational potential energy in orbits.
slug: diag-energy
hide_table_of_contents: true
---

# Energy and Conservation — Diagnostic Tests

## Unit Tests

### UT-1: Work Done Against Friction is Path-Dependent

**Question:**

A block of mass $3.0\,\text{kg}$ is moved between two points $A$ and $B$ that are at the same height on a horizontal surface. The coefficient of kinetic friction is $\mu_k = 0.40$. The straight-line distance $AB$ is $5.0\,\text{m}$. The block is also moved along a semicircular path of radius $r = 2.5\,\text{m}$ from $A$ to $B$.

(a) Calculate the work done against friction for the straight-line path.

(b) Calculate the work done against friction for the semicircular path.

(c) Explain why these results demonstrate that friction is a non-conservative force, and identify what would need to change for the work to be path-independent.

**Solution:**

(a) Straight-line path of length $5.0\,\text{m}$:

Normal reaction: $R = mg = 3.0 \times 9.81 = 29.43\,\text{N}$

Friction force: $f = \mu_k R = 0.40 \times 29.43 = 11.77\,\text{N}$

Work done against friction: $W = f \times d = 11.77 \times 5.0 = 58.9\,\text{J}$

(b) Semicircular path of radius $2.5\,\text{m}$:

The length of the semicircular path is $\pi r = \pi \times 2.5 = 7.85\,\text{m}$.

The normal reaction on a flat surface is constant: $R = mg = 29.43\,\text{N}$ regardless of path direction.

Work done against friction: $W = f \times d = 11.77 \times 7.85 = 92.4\,\text{J}$

(c) The work done against friction is different for the two paths ($58.9\,\text{J}$ vs $92.4\,\text{J}$) despite both paths connecting the same start and end points at the same height. This means the work done by friction depends on the path taken, not just the initial and final positions.

This is the defining property of a **non-conservative force**: the work done depends on the path. For a conservative force (like gravity), the work done depends only on the start and end positions. The total mechanical energy is conserved only when all forces are conservative; friction dissipates energy as thermal energy.

---

### UT-2: Elastic Collision with Unknown Mass

**Question:**

A particle of mass $m_1 = 2.0\,\text{kg}$ moving at $4.0\,\text{m}\,\text{s}^{-1}$ collides head-on with a stationary particle of unknown mass $m_2$. After the collision, $m_1$ moves at $1.0\,\text{m}\,\text{s}^{-1}$ in the same direction and $m_2$ moves at $3.0\,\text{m}\,\text{s}^{-1}$ in the same direction.

(a) Determine $m_2$ using conservation of momentum.

(b) Verify that the collision is elastic by checking conservation of kinetic energy.

(c) A student claims that if $m_2$ were much larger than $m_1$, then $m_1$ would rebound with nearly the same speed. Show that this claim is correct for the limiting case $m_2 \to \infty$.

**Solution:**

(a) Conservation of momentum:

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$

$$2.0 \times 4.0 + m_2 \times 0 = 2.0 \times 1.0 + m_2 \times 3.0$$

$$8.0 = 2.0 + 3.0\,m_2$$

$$m_2 = \frac{6.0}{3.0} = 2.0\,\text{kg}$$

(b) Kinetic energy before: $KE_i = \frac{1}{2}(2.0)(4.0)^2 + 0 = 16.0\,\text{J}$

Kinetic energy after: $KE_f = \frac{1}{2}(2.0)(1.0)^2 + \frac{1}{2}(2.0)(3.0)^2 = 1.0 + 9.0 = 10.0\,\text{J}$

$KE_i \neq KE_f$, so the collision is **not** elastic.

This is a critical trap: the problem statement says to "verify" elasticity, but the calculation shows it is inelastic. The student must trust the calculation over the implication of the wording.

Note: For a truly elastic collision with these initial conditions ($m_1 = m_2 = 2.0\,\text{kg}$, $u_2 = 0$), $m_1$ should stop and $m_2$ should move at $4.0\,\text{m}\,\text{s}^{-1}$. The given post-collision velocities ($1.0$ and $3.0\,\text{m}\,\text{s}^{-1}$) are inconsistent with an elastic collision.

(c) For a head-on elastic collision with $m_2$ initially at rest:

$$v_1 = \frac{m_1 - m_2}{m_1 + m_2} u_1$$

As $m_2 \to \infty$:

$$v_1 \to \frac{-m_2}{m_2} u_1 = -u_1$$

So $m_1$ rebounds with speed $u_1$ in the opposite direction, confirming the student's claim.

---

### UT-3: Power with Variable Velocity on an Incline

**Question:**

A car of mass $1200\,\text{kg}$ travels up a hill inclined at $\sin^{-1}(0.05)$ to the horizontal. The resistance to motion (drag plus rolling friction) is given by $F_{\text{res}} = 300 + 2.0v^2\,\text{N}$ where $v$ is the speed in $\text{m}\,\text{s}^{-1}$. The engine delivers constant power $P = 30\,\text{kW}$.

(a) Show that the equation of motion is $P/v - mg\sin\theta - 300 - 2v^2 = ma$ and derive the terminal velocity of the car on this hill.

(b) Calculate the acceleration of the car when its speed is $15.0\,\text{m}\,\text{s}^{-1}$.

(c) Calculate the maximum speed the car can maintain on this hill.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Driving force at speed $v$: $F = P/v$

Net force up the hill: $F_{\text{net}} = P/v - mg\sin\theta - F_{\text{res}}$

$$F_{\text{net}} = \frac{P}{v} - mg\sin\theta - 300 - 2v^2$$

Since $F_{\text{net}} = ma$:

$$ma = \frac{P}{v} - mg\sin\theta - 300 - 2v^2$$

Terminal velocity occurs when $a = 0$:

$$\frac{30000}{v_t} - 1200 \times 9.81 \times 0.05 - 300 - 2v_t^2 = 0$$

$$\frac{30000}{v_t} - 588.6 - 300 - 2v_t^2 = 0$$

$$\frac{30000}{v_t} = 888.6 + 2v_t^2$$

$$30000 = 888.6v_t + 2v_t^3$$

This cubic equation can be solved by trial. Trying $v_t = 15$:

$888.6 \times 15 + 2 \times 3375 = 13329 + 6750 = 20079 \neq 30000$

Trying $v_t = 18$:

$888.6 \times 18 + 2 \times 5832 = 15995 + 11664 = 27659$

Trying $v_t = 19$:

$888.6 \times 19 + 2 \times 6859 = 16883 + 13718 = 30601$

So $v_t \approx 18.9\,\text{m}\,\text{s}^{-1}$.

(b) At $v = 15.0\,\text{m}\,\text{s}^{-1}$:

$$F = \frac{30000}{15.0} = 2000\,\text{N}$$

$$F_{\text{res}} = 300 + 2.0 \times 225 = 300 + 450 = 750\,\text{N}$$

$$F_{\text{gravity}} = 1200 \times 9.81 \times 0.05 = 588.6\,\text{N}$$

$$F_{\text{net}} = 2000 - 750 - 588.6 = 661.4\,\text{N}$$

$$a = \frac{661.4}{1200} = 0.551\,\text{m}\,\text{s}^{-2}$$

(c) The maximum speed is the terminal velocity, which occurs when $a = 0$:

$v_{\max} \approx 18.9\,\text{m}\,\text{s}^{-1}$ (from the cubic equation above).

## Integration Tests

### IT-1: Energy Conservation in Orbital Transfer (with Gravitational Fields)

**Question:**

A satellite of mass $500\,\text{kg}$ is in a circular orbit of radius $r_1 = 7.0 \times 10^6\,\text{m}$ around the Earth. The Earth's mass is $M_E = 6.0 \times 10^{24}\,\text{kg}$ and $G = 6.67 \times 10^{-11}\,\text{N}\,\text{m}^2\,\text{kg}^{-2}$.

(a) Calculate the total energy of the satellite in this orbit.

(b) The satellite transfers to a higher circular orbit of radius $r_2 = 1.4 \times 10^7\,\text{m}$ via a Hohmann transfer ellipse. Calculate the total energy change required.

(c) Calculate the speed of the satellite at perigee and apogee of the transfer ellipse.

**Solution:**

(a) Total energy in circular orbit: $E = -\frac{GMm}{2r}$

$$E_1 = -\frac{6.67 \times 10^{-11} \times 6.0 \times 10^{24} \times 500}{2 \times 7.0 \times 10^6}$$

$$E_1 = -\frac{2.001 \times 10^{17}}{1.4 \times 10^7} = -1.429 \times 10^{10}\,\text{J}$$

(b) Total energy in the higher orbit:

$$E_2 = -\frac{6.67 \times 10^{-11} \times 6.0 \times 10^{24} \times 500}{2 \times 1.4 \times 10^7}$$

$$E_2 = -\frac{2.001 \times 10^{17}}{2.8 \times 10^7} = -7.146 \times 10^9\,\text{J}$$

Energy change: $\Delta E = E_2 - E_1 = -7.146 \times 10^9 - (-1.429 \times 10^{10}) = 7.14 \times 10^9\,\text{J}$

This energy must be supplied by the rocket engines.

(c) For the Hohmann transfer ellipse, the semi-major axis is:

$$a = \frac{r_1 + r_2}{2} = \frac{7.0 \times 10^6 + 1.4 \times 10^7}{2} = 1.05 \times 10^7\,\text{m}$$

Energy of the transfer orbit: $E_t = -\frac{GMm}{2a} = -\frac{2.001 \times 10^{17}}{2.1 \times 10^7} = -9.53 \times 10^9\,\text{J}$

At perigee ($r = r_1$), using $E_t = \frac{1}{2}mv_p^2 - \frac{GMm}{r_1}$:

$$-9.53 \times 10^9 = \frac{1}{2} \times 500 \times v_p^2 - \frac{2.001 \times 10^{17}}{7.0 \times 10^6}$$

$$-9.53 \times 10^9 = 250v_p^2 - 2.859 \times 10^{10}$$

$$250v_p^2 = 2.859 \times 10^{10} - 9.53 \times 10^9 = 1.906 \times 10^{10}$$

$$v_p = \sqrt{\frac{1.906 \times 10^{10}}{250}} = \sqrt{7.624 \times 10^7} = 8732\,\text{m}\,\text{s}^{-1}$$

At apogee ($r = r_2$), using conservation of angular momentum: $mv_pr_1 = mv_ar_2$

$$v_a = v_p \times \frac{r_1}{r_2} = 8732 \times \frac{7.0 \times 10^6}{1.4 \times 10^7} = 8732 \times 0.5 = 4366\,\text{m}\,\text{s}^{-1}$$

---

### IT-2: Inelastic Collision with Energy Loss on a Spring (with Dynamics)

**Question:**

A block of mass $m_1 = 4.0\,\text{kg}$ moves at $6.0\,\text{m}\,\text{s}^{-1}$ on a frictionless horizontal surface towards a stationary block of mass $m_2 = 6.0\,\text{kg}$. Block $m_2$ is attached to a spring of spring constant $k = 800\,\text{N}\,\text{m}^{-1}$ whose other end is fixed to a wall. The collision between the blocks is perfectly inelastic (they stick together).

(a) Calculate the maximum compression of the spring.

(b) Calculate the energy lost in the collision.

(c) Calculate the fraction of the original kinetic energy that is stored in the spring at maximum compression.

**Solution:**

(a) First, find the velocity immediately after the inelastic collision using conservation of momentum:

$$m_1 u_1 = (m_1 + m_2) v$$

$$4.0 \times 6.0 = (4.0 + 6.0) v$$

$$v = \frac{24.0}{10.0} = 2.4\,\text{m}\,\text{s}^{-1}$$

The combined block then compresses the spring. At maximum compression $x$, all kinetic energy converts to elastic potential energy:

$$\frac{1}{2}(m_1 + m_2)v^2 = \frac{1}{2}kx^2$$

$$\frac{1}{2} \times 10.0 \times 2.4^2 = \frac{1}{2} \times 800 \times x^2$$

$$28.8 = 400x^2$$

$$x = \sqrt{\frac{28.8}{400}} = \sqrt{0.072} = 0.268\,\text{m}$$

(b) Initial kinetic energy: $KE_i = \frac{1}{2} \times 4.0 \times 6.0^2 = 72.0\,\text{J}$

Kinetic energy after collision: $KE_f = \frac{1}{2} \times 10.0 \times 2.4^2 = 28.8\,\text{J}$

Energy lost: $\Delta E = 72.0 - 28.8 = 43.2\,\text{J}$

(c) Energy stored in spring at maximum compression: $E_s = 28.8\,\text{J}$

Fraction of original KE: $\frac{28.8}{72.0} = 0.40 = 40\%$

---

### IT-3: Power and Efficiency on a Variable Gradient (with Kinematics)

**Question:**

A cyclist of total mass (cyclist + bicycle) $80\,\text{kg}$ travels along a road whose elevation profile is given by $h(x) = 0.002x^2 - 0.05x$ where $h$ is in metres and $x$ is the horizontal distance in metres. The cyclist maintains constant power output $P = 250\,\text{W}$. The total resistive force (air resistance + rolling friction) is $F_r = 15 + 0.5v^2\,\text{N}$.

At position $x = 50\,\text{m}$, the cyclist is moving at $v = 8.0\,\text{m}\,\text{s}^{-1}$.

(a) Calculate the gradient of the road at $x = 50\,\text{m}$ and determine whether the cyclist is going uphill or downhill.

(b) Calculate the acceleration of the cyclist at $x = 50\,\text{m}$.

(c) Explain why the cyclist's speed will not increase without bound even on a downhill section.

**Solution:**

(a) The gradient of the road is $dh/dx = 0.004x - 0.05$.

At $x = 50\,\text{m}$: $\frac{dh}{dx} = 0.004 \times 50 - 0.05 = 0.20 - 0.05 = 0.15$

Since $dh/dx \gt 0$, the cyclist is going **uphill**.

The angle of the incline: $\sin\theta \approx \tan\theta \approx 0.15$ (small angle approximation is valid here since $\theta \approx 8.5^\circ$).

(b) Driving force: $F_d = P/v = 250/8.0 = 31.25\,\text{N}$

Gravitational component along the road (opposing motion uphill): $mg\sin\theta \approx mg \times 0.15 = 80 \times 9.81 \times 0.15 = 117.7\,\text{N}$

Resistive force: $F_r = 15 + 0.5 \times 64 = 15 + 32 = 47\,\text{N}$

Net force: $F_{\text{net}} = F_d - mg\sin\theta - F_r = 31.25 - 117.7 - 47 = -133.5\,\text{N}$

Acceleration: $a = F_{\text{net}}/m = -133.5/80 = -1.67\,\text{m}\,\text{s}^{-2}$

The cyclist decelerates significantly. At this gradient, the constant power of $250\,\text{W}$ is insufficient to maintain speed.

(c) Even on a downhill section where gravity assists, the speed is limited by the power equation $P = Fv$. As speed increases:
- The driving force from the cyclist's power decreases ($F = P/v$)
- The resistive force increases ($F_r = 15 + 0.5v^2$)
- Eventually, $F_d + mg\sin\theta_{\text{down}} = F_r$, and acceleration becomes zero

The cyclist reaches a terminal velocity where the power output equals the rate of energy dissipation against resistance. The quadratic nature of the air resistance term ensures this equilibrium always exists at finite speed.
