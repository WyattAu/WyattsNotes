---
title: Momentum -- Diagnostic Tests
description: Diagnostic tests for conservation of momentum, impulse, elastic and inelastic collisions, and vector momentum problems at A-Level Physics maximum difficulty.
slug: diag-momentum
hide_table_of_contents: true
---

# Momentum — Diagnostic Tests

## Unit Tests

### UT-1: Two-Dimensional Collision

**Question:**

Particle $A$ of mass $2.0\,\text{kg}$ moves with velocity $(4.0\hat{i} + 3.0\hat{j})\,\text{m}\,\text{s}^{-1}$ on a smooth horizontal surface. It collides with stationary particle $B$ of mass $3.0\,\text{kg}$. After the collision, $A$ moves with velocity $(-1.0\hat{i} + 4.0\hat{j})\,\text{m}\,\text{s}^{-1}$.

(a) Calculate the velocity of $B$ after the collision.

(b) Determine whether the collision is elastic.

(c) Calculate the impulse exerted on $A$ during the collision.

**Solution:**

(a) By conservation of momentum (vector form):

$$m_A\mathbf{u}_A + m_B\mathbf{u}_B = m_A\mathbf{v}_A + m_B\mathbf{v}_B$$

$$2.0(4.0\hat{i} + 3.0\hat{j}) + 0 = 2.0(-1.0\hat{i} + 4.0\hat{j}) + 3.0\mathbf{v}_B$$
$$(8.0\hat{i} + 6.0\hat{j}) = (-2.0\hat{i} + 8.0\hat{j}) + 3.0\mathbf{v}_B$$
$$3.0\mathbf{v}_B = 10.0\hat{i} - 2.0\hat{j}$$
$$\mathbf{v}_B = (3.33\hat{i} - 0.667\hat{j})\,\text{m}\,\text{s}^{-1}$$

(b) Check kinetic energy:

Before: $E_k = \frac{1}{2}(2.0)(4^2 + 3^2) = 1.0 \times 25 = 25\,\text{J}$

After: $E_k = \frac{1}{2}(2.0)(1 + 16) + \frac{1}{2}(3.0)(11.11 + 0.444) = 17 + \frac{1}{2}(3.0)(11.56) = 17 + 17.33 = 34.3\,\text{J}$

Since $34.3 \ne 25$, the collision is **not elastic** (kinetic energy is not conserved). In fact, KE has increased, which would require an internal energy source (e.g. an explosion). This scenario is physically unusual and highlights the importance of checking energy conservation.

Wait, let me recheck. $\mathbf{v}_B = (10/3\hat{i} - 2/3\hat{j})$:

$|\mathbf{v}_B|^2 = 100/9 + 4/9 = 104/9 = 11.56$

$E_{kB} = 0.5 \times 3.0 \times 11.56 = 17.33\,\text{J}$

$E_{kA} = 0.5 \times 2.0 \times (1 + 16) = 17\,\text{J}$

Total after $= 34.33\,\text{J}$, total before $= 25\,\text{J}$.

KE increased by $9.33\,\text{J}$. The collision is **superelastic** -- energy was released from an internal store.

(c) Impulse on $A$ $= \Delta\mathbf{p}_A = m_A(\mathbf{v}_A - \mathbf{u}_A)$

$$= 2.0[(-1 - 4)\hat{i} + (4 - 3)\hat{j}] = 2.0(-5\hat{i} + 1\hat{j}) = (-10\hat{i} + 2\hat{j})\,\text{N}\,\text{s}$$

Magnitude $= \sqrt{100 + 4} = \sqrt{104} = 10.2\,\text{N}\,\text{s}$

---
### UT-2: Coefficient of Restitution and Multiple Collisions

**Question:**

A ball of mass $0.15\,\text{kg}$ is dropped from a height of $2.0\,\text{m}$ onto a horizontal floor. The coefficient of restitution between the ball and the floor is $e = 0.80$.

(a) Calculate the height reached after the first bounce.

(b) Calculate the total time from release until the ball comes to rest. (The ball undergoes infinitely many bounces.)

(c) Calculate the total distance travelled by the ball.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Speed just before first impact: $v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 2.0} = \sqrt{39.24} = 6.264\,\text{m}\,\text{s}^{-1}$

Speed after first bounce: $v' = ev = 0.80 \times 6.264 = 5.012\,\text{m}\,\text{s}^{-1}$

Height after first bounce: $h' = v'^2/(2g) = 25.12/19.62 = 1.280\,\text{m}$

Or directly: $h' = e^2 h = 0.64 \times 2.0 = 1.28\,\text{m}$

(b) Time for first descent: $t_0 = \sqrt{2h/g} = \sqrt{4.0/9.81} = 0.6386\,\text{s}$

Time for first ascent: $t_1 = v'/g = 5.012/9.81 = 0.5109\,\text{s}$

Since $h' = e^2 h$ and $t \propto \sqrt{h}$, each successive bounce time is multiplied by $e$.

Total time $= t_0 + 2t_1 + 2et_1 + 2e^2t_1 + \ldots$

$$= t_0 + 2t_1(1 + e + e^2 + \ldots) = t_0 + \frac{2t_1}{1 - e}$$

$$= 0.6386 + \frac{2 \times 0.5109}{1 - 0.80} = 0.6386 + \frac{1.0218}{0.20} = 0.6386 + 5.109 = 5.748\,\text{s}$$

(c) Total distance $= h + 2h' + 2h'' + \ldots = h + 2e^2h + 2e^4h + \ldots$

$$= h + 2he^2(1 + e^2 + e^4 + \ldots) = h + \frac{2he^2}{1 - e^2}$$

$$= 2.0 + \frac{2 \times 2.0 \times 0.64}{1 - 0.64} = 2.0 + \frac{2.56}{0.36} = 2.0 + 7.11 = 9.11\,\text{m}$$

---
### UT-3: Impulse-Momentum with Variable Force

**Question:**

A ball of mass $0.40\,\text{kg}$ is initially at rest. A force $F = (6.0t - 0.5t^2)\,\text{N}$ acts on it for $4.0\,\text{s}$ in a fixed direction.

(a) Calculate the impulse imparted to the ball.

(b) Calculate the velocity of the ball at $t = 4.0\,\text{s}$.

(c) Calculate the average force over the $4.0\,\text{s}$ interval and explain why it differs from the force at $t = 2.0\,\text{s}$.

**Solution:**

(a) Impulse $= \displaystyle\int_0^{4.0} F\,dt = \int_0^{4.0} (6.0t - 0.5t^2)\,dt$

$$= \left[3.0t^2 - \frac{t^3}{6}\right]_0^4 = (3.0 \times 16 - \frac{64}{6}) - 0 = (48 - 10.67) = 37.33\,\text{N}\,\text{s}$$

(b) By the impulse-momentum theorem: $J = \Delta p = mv - 0$

$$v = J/m = 37.33/0.40 = 93.3\,\text{m}\,\text{s}^{-1}$$

(c) Average force $= J/\Delta t = 37.33/4.0 = 9.33\,\text{N}$

Force at $t = 2.0\,\text{s}$: $F(2) = 6.0(2) - 0.5(4) = 12 - 2 = 10\,\text{N}$

The average force ($9.33\,\text{N}$) differs from the force at the midpoint ($10\,\text{N}$) because the force is not linear in time -- it is quadratic. For a linearly varying force, the average equals the midpoint value, but for a quadratic force this is not the case. The average force is determined by the integral over the entire interval, weighted by time.

## Integration Tests

### IT-1: Oblique Collision with a Wall (with Kinematics)

**Question:**

A ball of mass $0.20\,\text{kg}$ hits a smooth vertical wall with velocity $(8.0\hat{i} - 6.0\hat{j})\,\text{m}\,\text{s}^{-1}$, where $\hat{i}$ is horizontal (perpendicular to the wall) and $\hat{j}$ is vertical (parallel to the wall). The coefficient of restitution between the ball and wall is $e = 0.75$. The wall is smooth, so there is no friction.

(a) Calculate the velocity of the ball after the collision.

(b) Calculate the impulse exerted by the wall on the ball.

(c) After rebounding, the ball moves freely under gravity. Calculate the horizontal distance from the wall at which the ball returns to its original height.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) The wall is vertical and smooth. The $\hat{j}$-component (parallel to the wall) is unchanged. The $\hat{i}$-component (perpendicular to the wall) reverses with restitution:

$$v_x' = -e \cdot u_x = -0.75 \times 8.0 = -6.0\,\text{m}\,\text{s}^{-1}$$

$$v_y' = u_y = -6.0\,\text{m}\,\text{s}^{-1}$$

Velocity after collision: $(-6.0\hat{i} - 6.0\hat{j})\,\text{m}\,\text{s}^{-1}$

(b) Impulse $= m(\mathbf{v}' - \mathbf{u})$

$$= 0.20[(-6.0 - 8.0)\hat{i} + (-6.0 - (-6.0))\hat{j}]$$
$$= 0.20(-14.0\hat{i} + 0\hat{j}) = (-2.8\hat{i})\,\text{N}\,\text{s}$$

The impulse is purely horizontal (perpendicular to the wall), as expected for a smooth wall.

(c) The ball rebounds with $v_x = -6.0\,\text{m}\,\text{s}^{-1}$ (away from wall) and $v_y = -6.0\,\text{m}\,\text{s}^{-1}$ (downward).

Time to return to original height: $\Delta y = 0 = v_y t + \frac{1}{2}(-g)t^2$

$$0 = -6.0t - 4.905t^2 \Rightarrow t(-6.0 - 4.905t) = 0$$

Ignoring $t = 0$: $t = -6.0/4.905 = -1.223\,\text{s}$

This is negative, which means the ball is below its original height and moving downward. The ball never returns to its original height -- it hits the ground first.

If the collision happens at height $h$ above the ground, we need $h$. Since no height is specified, we note that with $v_y = -6.0\,\text{m}\,\text{s}^{-1}$ downward and decelerating (gravity acts downward), the ball continues to descend. The ball would need an upward component to return to its original height. Since $v_y$ is negative, the ball never rises back to its collision height.

Horizontal distance from wall at time $t$: $x = |v_x| \times t = 6.0t$. But since the ball never returns to its original height, the question's premise requires that the collision occurred at ground level, or the ball was given height. If we interpret "returns to its original height" as asking about the trajectory, the ball cannot return since it is moving downward with no upward component.

**Answer:** The ball cannot return to its original height after the collision since its vertical velocity component is directed downward and gravity does not reverse it.

---
### IT-2: Rocket Propulsion and Momentum (with Dynamics)

**Question:**

A rocket of mass $500\,\text{kg}$ (including fuel) is initially at rest in deep space (no external forces). It burns fuel at a rate of $5.0\,\text{kg}\,\text{s}^{-1}$, ejecting exhaust gas at a speed of $2000\,\text{m}\,\text{s}^{-1}$ relative to the rocket.

(a) Calculate the thrust produced by the rocket engine.

(b) Calculate the acceleration of the rocket at $t = 0$ and at $t = 60\,\text{s}$.

(c) Calculate the speed of the rocket after $60\,\text{s}$ of burning.

**Solution:**

(a) Thrust $= \frac{dm}{dt} \times v_{\text{exhaust}} = 5.0 \times 2000 = 10000\,\text{N}$

(b) At $t = 0$: mass $= 500\,\text{kg}$

$$a_0 = \frac{F_{\text{thrust}}}{m} = \frac{10000}{500} = 20.0\,\text{m}\,\text{s}^{-2}$$

At $t = 60\,\text{s}$: fuel burned $= 5.0 \times 60 = 300\,\text{kg}$, remaining mass $= 200\,\text{kg}$

$$a_{60} = \frac{10000}{200} = 50.0\,\text{m}\,\text{s}^{-2}$$

The acceleration increases with time because the rocket's mass decreases while the thrust remains constant.

(c) Using the rocket equation (Tsiolkovsky):

$$\Delta v = v_{\text{exhaust}} \ln\left(\frac{m_0}{m_f}\right) = 2000 \ln\left(\frac{500}{200}\right) = 2000 \ln(2.5) = 2000 \times 0.9163 = 1833\,\text{m}\,\text{s}^{-1}$$

Alternatively, using impulse: the total momentum of all exhaust gas ejected provides the momentum gain of the rocket. The difficulty is that the exhaust speed relative to an inertial frame changes as the rocket accelerates, so the integral form (rocket equation) is needed.

Check using approximation (treating exhaust velocity as constant in lab frame, which gives a lower bound):

Total fuel ejected $= 300\,\text{kg}$. Total impulse $= 300 \times 2000 = 600000\,\text{N}\,\text{s}$.

If all went to the rocket: $\Delta v = 600000/500 = 1200\,\text{m}\,\text{s}^{-1}$ (underestimate since it ignores the rocket's decreasing mass).

The correct answer from the rocket equation is $1833\,\text{m}\,\text{s}^{-1}$.

---
### IT-3: Collision Analysis with Energy Dissipation (with Work-Energy)

**Question:**

A bullet of mass $10\,\text{g}$ is fired horizontally with speed $400\,\text{m}\,\text{s}^{-1}$ into a wooden block of mass $1.99\,\text{kg}$ resting on a rough horizontal surface. The bullet embeds itself in the block. The coefficient of friction between the block and the surface is $\mu = 0.30$.

(a) Calculate the speed of the block (with embedded bullet) immediately after the collision.

(b) Calculate the distance the block slides before coming to rest.

(c) Calculate the energy lost in the collision and the energy lost due to friction. Express each as a percentage of the bullet's initial kinetic energy.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) Conservation of momentum (perfectly inelastic collision):

$$m_b v_b = (m_b + m_B)V$$
$$0.010 \times 400 = (0.010 + 1.99)V$$
$$4.0 = 2.00V$$
$$V = 2.00\,\text{m}\,\text{s}^{-1}$$

(b) Using the work-energy principle for the sliding block:

$$\frac{1}{2}(2.00)V^2 = \mu(2.00)g \times d$$
$$\frac{1}{2}(2.00)(4.0) = 0.30 \times 2.00 \times 9.81 \times d$$
$$4.0 = 5.886d$$
$$d = 0.680\,\text{m}$$

(c) Initial KE of bullet: $E_{k0} = \frac{1}{2}(0.010)(400)^2 = 800\,\text{J}$

KE after collision: $E_{k1} = \frac{1}{2}(2.00)(2.00)^2 = 4.0\,\text{J}$

Energy lost in collision: $800 - 4.0 = 796\,\text{J}$

Percentage: $\frac{796}{800} \times 100 = 99.5\%$

Energy lost due to friction: $= E_{k1} = 4.0\,\text{J}$ (all remaining KE is lost to friction)

Percentage: $\frac{4.0}{800} \times 100 = 0.50\%$

This demonstrates why perfectly inelastic collisions are so inefficient: $99.5\%$ of the bullet's kinetic energy is converted to heat, sound, and deformation in the collision.
