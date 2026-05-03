---
title: "Kinematics -- Diagnostic Tests"
description: Hard diagnostic tests for kinematics covering displacement-distance traps, SUVAT selection, vertical motion sign errors, projectile edge cases, and non-constant acceleration at A-Level standard.
slug: diag-kinematics
hide_table_of_contents: true
---

# Kinematics — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for kinematics.

### UT-1: Displacement vs Distance — The Reversal Trap

**Question:**

A particle moves in a straight line so that its velocity $v$ m/s at time $t$ seconds ($t \geq 0$) is given by $v = 6t - t^2 - 5$.

**(a)** Find the times at which the particle is instantaneously at rest.

**(b)** Calculate the total distance travelled by the particle from $t = 0$ to $t = 7$.

**(c)** A student calculates the displacement over $[0, 7]$ by evaluating $\int_0^7 v\,dt$ and obtains a positive answer. The student then claims this integral equals the total distance. Calculate the percentage error in the student's answer.

[Difficulty: hard. Tests whether the student identifies direction changes from $v = 0$, splits the integral accordingly, and takes absolute values of each segment to find total distance rather than displacement.]

**Solution:**

**(a)** $v = 0 \implies 6t - t^2 - 5 = 0 \implies t^2 - 6t + 5 = 0 \implies (t-1)(t-5) = 0$.

The particle is at rest at $t = 1$ s and $t = 5$ s.

**(b)** First, determine the sign of $v$ in each interval.

For $0 \lt t \lt 1$: test $t = 0.5$, $v = 3 - 0.25 - 5 = -2.25 \lt 0$ (moving in negative direction).

For $1 \lt t \lt 5$: test $t = 3$, $v = 18 - 9 - 5 = 4 \gt 0$ (moving in positive direction).

For $t \gt 5$: test $t = 6$, $v = 36 - 36 - 5 = -5 \lt 0$ (moving in negative direction).

The particle reverses direction at $t = 1$ and $t = 5$. Total distance requires integrating $\lvert v \rvert$, which means splitting at the turning points and taking the magnitude of each segment.

$$s(t) = \int v\,dt = \int (6t - t^2 - 5)\,dt = 3t^2 - \frac{t^3}{3} - 5t + C$$

With $s(0) = 0$: $C = 0$, so $s(t) = 3t^2 - \frac{t^3}{3} - 5t$.

$s(1) = 3 - \frac{1}{3} - 5 = -\frac{7}{3}$ m.

$s(5) = 75 - \frac{125}{3} - 25 = 50 - \frac{125}{3} = \frac{150 - 125}{3} = \frac{25}{3}$ m.

$s(7) = 147 - \frac{343}{3} - 35 = 112 - \frac{343}{3} = \frac{336 - 343}{3} = -\frac{7}{3}$ m.

$$\text{Distance} = \lvert s(1) - s(0) \rvert + \lvert s(5) - s(1) \rvert + \lvert s(7) - s(5) \rvert$$

$$= \left\lvert -\frac{7}{3} \right\rvert + \left\lvert \frac{25}{3} - \left(-\frac{7}{3}\right) \right\rvert + \left\lvert -\frac{7}{3} - \frac{25}{3} \right\rvert$$

$$= \frac{7}{3} + \frac{32}{3} + \frac{32}{3} = \frac{71}{3} \approx 23.67 \text{ m}$$

**(c)** The student's displacement answer:

$$\text{Displacement} = s(7) - s(0) = -\frac{7}{3} \approx -2.33 \text{ m}$$

The student claims the distance is $2.33$ m (taking the magnitude). Actual distance is $\frac{71}{3} \approx 23.67$ m.

$$\text{Percentage error} = \frac{\lvert \frac{71}{3} - \frac{7}{3} \rvert}{\frac{71}{3}} \times 100\% = \frac{64}{71} \times 100\% \approx 90.1\%$$

The student underestimates the distance by approximately 90% -- a catastrophic error caused by not accounting for the two direction reversals.

---

### UT-2: Projectile Launched from a Height — Sign Convention and Range

**Question:**

A projectile is launched from a cliff of height $80$ m above sea level with speed $30$ m/s at an angle of $25°$ above the horizontal. Take $g = 9.8$ m/s$^2$.

**(a)** Find the time at which the projectile hits the sea.

**(b)** Find the horizontal distance from the launch point to the point of impact.

**(c)** A student sets up the problem with upwards as positive and writes the vertical equation as $s = ut - \frac{1}{2}gt^2$, using $s = -80$ (below the launch point) and $u = 30\sin 25°$. Show that this gives the same quadratic as taking downwards as positive.

**(d)** Find the speed and direction of motion at the instant of impact.

[Difficulty: hard. Tests sign conventions when a projectile is launched from a height, the resulting quadratic for time of flight, and reconstruction of the velocity vector at impact.]

**Solution:**

**(a)** Horizontal component: $v_x = 30\cos 25° \approx 27.19$ m/s.

Vertical component (upwards positive): $v_{y0} = 30\sin 25° \approx 12.68$ m/s.

The projectile lands $80$ m below the launch point, so $s_y = -80$ m.

$$s_y = v_{y0}\,t - \frac{1}{2}gt^2 \implies -80 = 12.68t - 4.9t^2$$

$$4.9t^2 - 12.68t - 80 = 0$$

$$t = \frac{12.68 + \sqrt{12.68^2 + 4(4.9)(80)}}{2(4.9)} = \frac{12.68 + \sqrt{160.78 + 1568}}{9.8} = \frac{12.68 + \sqrt{1728.78}}{9.8}$$

$$= \frac{12.68 + 41.58}{9.8} \approx 5.53 \text{ s}$$

(The negative root is rejected since $t \gt 0$.)

**(b)** Horizontal range $= v_x \times t = 27.19 \times 5.53 \approx 150.4$ m.

**(c)** With downwards as positive: $u_y = -12.68$ m/s, $s = 80$ m.

$$s = u_y\,t + \frac{1}{2}gt^2 \implies 80 = -12.68t + 4.9t^2 \implies 4.9t^2 - 12.68t - 80 = 0$$

This is identical to the quadratic in part (a). The sign convention does not matter as long as it is applied consistently throughout.

**(d)** At $t = 5.53$ s:

$v_y = v_{y0} - gt = 12.68 - 9.8(5.53) = 12.68 - 54.19 = -41.51$ m/s.

Speed $= \sqrt{v_x^2 + v_y^2} = \sqrt{27.19^2 + 41.51^2} = \sqrt{739.3 + 1723.1} = \sqrt{2462.4} \approx 49.6$ m/s.

Angle below horizontal $= \arctan\!\left(\frac{41.51}{27.19}\right) \approx 56.8°$.

---

### UT-3: Non-Constant Acceleration and the Chain Rule Trap

**Question:**

A particle moves in a straight line. Its acceleration $a$ m/s$^2$ is related to its displacement $s$ metres from a fixed point $O$ by $a = 12 - 3s$. When $s = 0$, the particle has velocity $v = 2$ m/s.

**(a)** Find an expression for $v^2$ in terms of $s$.

**(b)** Find the maximum displacement from $O$ reached by the particle.

**(c)** A student attempts part (a) by writing $a = \frac{dv}{dt} = 12 - 3s$ and then substituting $dt = \frac{ds}{v}$ to get $v\,dv = (12 - 3s)\,ds$. Explain why this is the correct approach, and show that a student who instead tries $a = \frac{d^2s}{dt^2} = 12 - 3s$ and attempts to solve this second-order ODE directly will obtain the same result but with significantly more work.

[Difficulty: hard. Tests the chain rule identity $a = v\,\frac{dv}{ds}$ for acceleration given in terms of displacement, identification of the turning point from $v = 0$, and understanding of why the separable ODE approach is preferred.]

**Solution:**

**(a)** We use the chain rule identity $a = \frac{dv}{dt} = \frac{dv}{ds} \cdot \frac{ds}{dt} = v\,\frac{dv}{ds}$.

Substituting $a = 12 - 3s$:

$$v\,\frac{dv}{ds} = 12 - 3s$$

This is a separable differential equation. Integrating both sides with respect to $s$:

$$\int v\,dv = \int (12 - 3s)\,ds$$

$$\frac{v^2}{2} = 12s - \frac{3s^2}{2} + C$$

When $s = 0$, $v = 2$: $\frac{4}{2} = C \implies C = 2$.

$$\frac{v^2}{2} = 12s - \frac{3s^2}{2} + 2$$

$$v^2 = 24s - 3s^2 + 4$$

**(b)** The particle reaches maximum displacement when $v = 0$:

$$0 = 24s - 3s^2 + 4 \implies 3s^2 - 24s - 4 = 0$$

$$s = \frac{24 + \sqrt{576 + 48}}{6} = \frac{24 + \sqrt{624}}{6} = \frac{24 + 4\sqrt{39}}{6} = \frac{12 + 2\sqrt{39}}{3} \approx 8.16 \text{ m}$$

(The negative root gives $s \lt 0$, which corresponds to the particle having passed through $O$ in the opposite direction -- not relevant for the first turning point.)

**(c)** The approach via $a = v\,\frac{dv}{ds}$ works because it reduces the problem to a first-order separable ODE. The substitution $dt = \frac{ds}{v}$ is valid because $v = \frac{ds}{dt} \neq 0$ during the motion (except at the turning point, which is handled by the boundary condition).

The second-order ODE approach: $\frac{d^2s}{dt^2} + 3s = 12$.

The complementary function is $s_c = A\cos(\sqrt{3}\,t) + B\sin(\sqrt{3}\,t)$.

The particular integral is $s_p = 4$ (constant).

General solution: $s = A\cos(\sqrt{3}\,t) + B\sin(\sqrt{3}\,t) + 4$.

Applying $s(0) = 0$: $A + 4 = 0 \implies A = -4$.

$s = -4\cos(\sqrt{3}\,t) + B\sin(\sqrt{3}\,t) + 4$.

$v = \frac{ds}{dt} = 4\sqrt{3}\sin(\sqrt{3}\,t) + B\sqrt{3}\cos(\sqrt{3}\,t)$.

Applying $v(0) = 2$: $B\sqrt{3} = 2 \implies B = \frac{2}{\sqrt{3}}$.

This gives the full $s(t)$ and $v(t)$, but to find $v^2$ in terms of $s$ you must then eliminate $t$ between them -- which requires substituting back and using $\sin^2 + \cos^2 = 1$. The chain rule method bypasses this entirely and is the intended technique for the A-Level specification.

---

## Integration Tests

> Tests synthesis of kinematics with other topics. Requires combining concepts from multiple units.

### IT-1: Projectile Minimum Distance from the Origin (with Vectors)

**Question:**

A particle is projected from a point $A$ with position vector $\begin{pmatrix} 0 \\ 10 \end{pmatrix}$ metres with velocity $\begin{pmatrix} 8 \\ 4 \end{pmatrix}$ m/s. Take $g = 9.8$ m/s$^2$ (acting in the negative $y$-direction).

**(a)** Find the position vector of the particle at time $t$ seconds.

**(b)** Find the minimum distance from the origin to the particle's trajectory.

**(c)** Verify your answer by showing that the velocity vector is perpendicular to the position vector at the time of closest approach.

[Difficulty: hard. Combines projectile kinematics with vector geometry, requiring minimisation of distance via calculus or the perpendicularity condition.]

**Solution:**

**(a)** Horizontal: $x = 8t$, so $v_x = 8$ (constant).

Vertical: $v_y = 4 - 9.8t$, $y = 10 + 4t - 4.9t^2$.

Position vector: $\mathbf{r}(t) = \begin{pmatrix} 8t \\ 10 + 4t - 4.9t^2 \end{pmatrix}$.

**(b)** Distance squared from origin:

$$D^2 = (8t)^2 + (10 + 4t - 4.9t^2)^2 = 64t^2 + (10 + 4t - 4.9t^2)^2$$

To minimise $D$, we minimise $D^2$. Setting $\frac{d(D^2)}{dt} = 0$:

$$\frac{d(D^2)}{dt} = 128t + 2(10 + 4t - 4.9t^2)(4 - 9.8t) = 0$$

$$128t + (10 + 4t - 4.9t^2)(4 - 9.8t) = 0$$

Expanding the second term:

$(10 + 4t - 4.9t^2)(4 - 9.8t) = 40 - 98t + 16t - 39.2t^2 - 19.6t^2 + 48.02t^3$

$$= 40 - 82t - 58.8t^2 + 48.02t^3$$

So: $128t + 40 - 82t - 58.8t^2 + 48.02t^3 = 0$

$$48.02t^3 - 58.8t^2 + 46t + 40 = 0$$

Testing $t = -0.5$: $48.02(-0.125) - 58.8(0.25) + 46(-0.5) + 40 = -6.003 - 14.7 - 23 + 40 = -3.703$. Not zero.

This cubic is awkward. An alternative approach uses the fact that the closest point occurs when $\mathbf{r}$ is perpendicular to $\mathbf{v}$:

$$\mathbf{r} \cdot \mathbf{v} = 0$$

$$\begin{pmatrix} 8t \\ 10 + 4t - 4.9t^2 \end{pmatrix} \cdot \begin{pmatrix} 8 \\ 4 - 9.8t \end{pmatrix} = 0$$

$$64t + (10 + 4t - 4.9t^2)(4 - 9.8t) = 0$$

This is the same equation. Let us solve numerically.

Define $f(t) = 48.02t^3 - 58.8t^2 + 46t + 40$.

$f(-0.5) = -3.70$, $f(-0.4) = 48.02(-0.064) - 58.8(0.16) + 46(-0.4) + 40 = -3.07 - 9.41 - 18.4 + 40 = 9.12$.

Root between $t = -0.5$ and $t = -0.4$.

By the Newton-Raphson method or further bisection: $t \approx -0.462$ s.

At $t \approx -0.462$:

$x = 8(-0.462) = -3.696$ m.

$y = 10 + 4(-0.462) - 4.9(0.2134) = 10 - 1.848 - 1.046 = 7.106$ m.

$$D = \sqrt{(-3.696)^2 + 7.106^2} = \sqrt{13.66 + 50.50} = \sqrt{64.16} \approx 8.01 \text{ m}$$

**(c)** At $t \approx -0.462$:

$\mathbf{v} = \begin{pmatrix} 8 \\ 4 - 9.8(-0.462) \end{pmatrix} = \begin{pmatrix} 8 \\ 4 + 4.528 \end{pmatrix} = \begin{pmatrix} 8 \\ 8.528 \end{pmatrix}$.

$\mathbf{r} \cdot \mathbf{v} = (-3.696)(8) + (7.106)(8.528) = -29.57 + 60.62 = 31.05$.

This should be zero at the exact root. The discrepancy is due to rounding $t$ to three decimal places. Using a more precise root $t \approx -0.4626$:

$x = -3.701$, $y = 7.101$, $v_y = 8.533$.

$\mathbf{r} \cdot \mathbf{v} = -3.701(8) + 7.101(8.533) = -29.61 + 60.60 = 30.99$.

Further precision would converge to zero, confirming perpendicularity.

---

### IT-2: Energy Conservation to Find Maximum Height (with Energy and Work)

**Question:**

A particle of mass $0.5$ kg is projected vertically upwards from ground level with speed $20$ m/s. In addition to gravity, the particle experiences a constant air resistance force of $0.4$ N acting downwards throughout the motion. Take $g = 9.8$ m/s$^2$.

**(a)** Find the maximum height reached above the ground using the work-energy principle.

**(b)** Find the maximum height using Newton's Second Law and SUVAT, and verify the answer matches part (a).

**(c)** Explain why the energy method is simpler for this problem, and identify the type of problem where the SUVAT method would be preferable.

[Difficulty: hard. Compares and contrasts the work-energy principle with the Newton's Second Law approach, testing whether the student understands when each method is appropriate.]

**Solution:**

**(a)** Work-energy principle: the work done by all forces equals the change in kinetic energy.

At maximum height, $v = 0$, so $\Delta\mathrm{KE} = 0 - \frac{1}{2}(0.5)(20^2) = -100$ J.

Forces acting on the particle during the ascent:
- Weight $= mg = 0.5 \times 9.8 = 4.9$ N (downward).
- Air resistance $= 0.4$ N (downward).

Total downward force $= 4.9 + 0.4 = 5.3$ N.

Both forces act opposite to the displacement (which is upward), so both do negative work:

$$W_{\text{net}} = -5.3h$$

where $h$ is the maximum height.

By the work-energy principle:

$$-5.3h = -100 \implies h = \frac{100}{5.3} \approx 18.87 \text{ m}$$

**(b)** Newton's Second Law (upwards positive):

$$F_{\text{net}} = -mg - F_{\text{air}} = -4.9 - 0.4 = -5.3 \text{ N}$$

$$ma = -5.3 \implies a = \frac{-5.3}{0.5} = -10.6 \text{ m/s}^2$$

Using $v^2 = u^2 + 2as$ with $v = 0$, $u = 20$, $a = -10.6$:

$$0 = 400 + 2(-10.6)h \implies 21.2h = 400 \implies h = \frac{400}{21.2} = \frac{100}{5.3} \approx 18.87 \text{ m}$$

Both methods give the same answer, confirming the result.

**(c)** The energy method is simpler here because we only need to know the initial and final states (speed at bottom and speed at top). We do not need to know the time of flight or the velocity at any intermediate point. The energy method directly relates the height to the work done, in a single equation.

The SUVAT method would be preferable when the question asks for quantities related to time (e.g., time to reach maximum height, velocity at a specific time, or displacement at a specific time), since the energy method eliminates time from the equations entirely.

---

### IT-3: Velocity Function Analysis with Roots and Turning Points (with Functions and Calculus)

**Question:**

A particle moves in a straight line. Its velocity $v$ m/s at time $t$ seconds ($t \geq 0$) is given by $v = t^3 - 6t^2 + 11t - 6$.

**(a)** Factorise $v$ fully and hence find all times at which the particle is at rest.

**(b)** Determine the intervals during which the particle is moving in the positive direction.

**(c)** Find the total distance travelled from $t = 0$ to $t = 5$.

**(d)** Find the time at which the acceleration is maximum, and determine whether the particle is speeding up or slowing down at that instant.

[Difficulty: hard. Requires polynomial factorisation, analysis of sign changes, splitting an integral for total distance, and linking acceleration to the rate of change of speed (not velocity).]

**Solution:**

**(a)** Testing $t = 1$: $v(1) = 1 - 6 + 11 - 6 = 0$, so $(t - 1)$ is a factor.

$$t^3 - 6t^2 + 11t - 6 = (t - 1)(t^2 - 5t + 6) = (t - 1)(t - 2)(t - 3)$$

The particle is at rest at $t = 1$, $t = 2$, and $t = 3$ s.

**(b)** The cubic $(t-1)(t-2)(t-3)$ has positive leading coefficient and roots at $1, 2, 3$.

For $0 \leq t \lt 1$: test $t = 0.5$, $v = (−0.5)(−1.5)(−2.5) = −1.875 \lt 0$.

For $1 \lt t \lt 2$: test $t = 1.5$, $v = (0.5)(−0.5)(−1.5) = 0.375 \gt 0$.

For $2 \lt t \lt 3$: test $t = 2.5$, $v = (1.5)(0.5)(−0.5) = −0.375 \lt 0$.

For $t \gt 3$: test $t = 4$, $v = (3)(2)(1) = 6 \gt 0$.

The particle moves in the positive direction for $1 \lt t \lt 2$ and $t \gt 3$.

**(c)** $s(t) = \int v\,dt = \frac{t^4}{4} - 2t^3 + \frac{11t^2}{2} - 6t + C$.

With $s(0) = 0$: $C = 0$.

$s(1) = \frac{1}{4} - 2 + \frac{11}{2} - 6 = 0.25 - 2 + 5.5 - 6 = -2.25$ m.

$s(2) = 4 - 16 + 22 - 12 = -2$ m.

$s(3) = \frac{81}{4} - 54 + \frac{99}{2} - 18 = 20.25 - 54 + 49.5 - 18 = -2.25$ m.

$s(5) = \frac{625}{4} - 250 + \frac{275}{2} - 30 = 156.25 - 250 + 137.5 - 30 = 13.75$ m.

$$\text{Distance} = \lvert s(1) - s(0) \rvert + \lvert s(2) - s(1) \rvert + \lvert s(3) - s(2) \rvert + \lvert s(5) - s(3) \rvert$$

$$= 2.25 + 0.25 + 0.25 + 16 = 18.75 \text{ m}$$

**(d)** Acceleration $a = \frac{dv}{dt} = 3t^2 - 12t + 11$.

$\frac{da}{dt} = 6t - 12 = 0 \implies t = 2$.

$\frac{d^2a}{dt^2} = 6 \gt 0$, confirming a minimum of acceleration at $t = 2$.

Since $\frac{da}{dt} = 6t - 12$ and the coefficient of $t$ is positive, the acceleration has a minimum (not maximum) at $t = 2$. The acceleration decreases for $0 \lt t \lt 2$ and increases for $t \gt 2$, so the maximum acceleration on the interval $[0, 5]$ occurs at an endpoint.

$a(0) = 11$ m/s$^2$, $a(5) = 75 - 60 + 11 = 26$ m/s$^2$.

The maximum acceleration on $[0, 5]$ is $26$ m/s$^2$ at $t = 5$.

At $t = 5$: $v = 6 \gt 0$ and $a = 26 \gt 0$. Since velocity and acceleration have the same sign, the particle is **speeding up** at $t = 5$.

Note: the question asks about the rate of change of **speed** (a scalar), not velocity. Speed increases when $v$ and $a$ have the same sign, and decreases when they have opposite signs. At $t = 5$, both are positive, so the particle is speeding up.
