---
title: "Energy and Work -- Diagnostic Tests"
description: Hard diagnostic tests for energy and work covering work-energy principle, power-velocity subtleties, elastic potential energy, variable force work, and efficiency at A-Level standard.
slug: diag-energy-and-work
hide_table_of_contents: true
---

# Energy and Work — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for energy and work.

### UT-1: Work Done Against Friction — Applied Force vs Frictional Force

**Question:**

A block of mass $10$ kg is pulled along a rough horizontal surface by a force of $80$ N applied at an angle of $20°$ above the horizontal. The coefficient of friction is $\mu = 0.5$. The block moves a total distance of $15$ m.

**(a)** Find the work done by the applied force.

**(b)** Find the work done against friction.

**(c)** Find the net work done and hence the final speed, given the block starts from rest.

**(d)** A student claims "the work done against friction equals $\mu mgd$." Calculate what this would give, and find the percentage error compared to the correct answer.

[Difficulty: hard. Tests the distinction between the work done by the applied force and the work done against friction, and the effect of an angled force on the normal reaction and hence the friction.]

**Solution:**

**(a)** Work done by the applied force $= Fd\cos\theta = 80 \times 15 \times \cos 20° = 1200\cos 20° \approx 1127.6$ J.

**(b)** First find the normal reaction. Resolving vertically:

$$R + 80\sin 20° = mg = 98 \implies R = 98 - 80\sin 20° = 98 - 27.36 = 70.64 \text{ N}$$

Friction $= \mu R = 0.5 \times 70.64 = 35.32$ N.

Work done against friction $= F_{\text{friction}} \times d = 35.32 \times 15 = 529.8$ J.

**(c)** Net work done $= 1127.6 - 529.8 = 597.8$ J.

By the work-energy principle:

$$W_{\text{net}} = \Delta\mathrm{KE} = \frac{1}{2}mv^2 - 0$$

$$597.8 = \frac{1}{2}(10)v^2 \implies v^2 = 119.56 \implies v \approx 10.93 \text{ m/s}$$

**(d)** The student's formula $\mu mgd = 0.5 \times 98 \times 15 = 735$ J.

This is wrong because the student used $R = mg = 98$ N, ignoring the fact that the upward component of the applied force reduces the normal reaction.

Correct work against friction $= 529.8$ J.

$$\text{Percentage error} = \frac{735 - 529.8}{529.8} \times 100\% \approx 38.7\%$$

---

### UT-2: Power, Force, and Velocity — The Constant-Power Trap

**Question:**

A car of mass $800$ kg travels on a level road. The engine works at constant power $40$ kW. The resistance to motion is a constant $200$ N.

**(a)** Show that the acceleration of the car is given by $a = \frac{P}{mv} - \frac{R}{m}$, where $P$ is the power, $v$ is the speed, and $R$ is the resistance.

**(b)** Find the maximum speed of the car.

**(c)** Find the acceleration when the speed is $10$ m/s, and when the speed is $100$ m/s.

**(d)** A student claims that "since the power is constant, the acceleration is constant." Use your answers from part (c) to refute this claim.

**(e)** Find the time taken for the car to accelerate from $5$ m/s to $15$ m/s, giving your answer in terms of an integral that you need not evaluate.

[Difficulty: hard. Tests the relationship $P = Fv$ and its consequence that constant power implies decreasing force (and hence decreasing acceleration) as speed increases.]

**Solution:**

**(a)** The driving force at speed $v$ is $F = \frac{P}{v}$ (from $P = Fv$).

Net force $= F - R = \frac{P}{v} - R$.

By Newton's Second Law: $ma = \frac{P}{v} - R$.

$$a = \frac{P}{mv} - \frac{R}{m} \quad \blacksquare$$

**(b)** At maximum speed, $a = 0$:

$$\frac{P}{v_{\max}} = R \implies v_{\max} = \frac{P}{R} = \frac{40000}{200} = 200 \text{ m/s}$$

**(c)** At $v = 10$ m/s:

$$a = \frac{40000}{800 \times 10} - \frac{200}{800} = 5 - 0.25 = 4.75 \text{ m/s}^2$$

At $v = 100$ m/s:

$$a = \frac{40000}{800 \times 100} - \frac{200}{800} = 0.5 - 0.25 = 0.25 \text{ m/s}^2$$

**(d)** The acceleration at $10$ m/s is $4.75$ m/s$^2$ and at $100$ m/s is $0.25$ m/s$^2$. The acceleration decreases by a factor of 19 as the speed increases by a factor of 10. Constant power does not imply constant acceleration; in fact, the acceleration decreases hyperbolically with speed.

**(e)** From $a = \frac{dv}{dt} = \frac{P}{mv} - \frac{R}{m}$:

$$dt = \frac{dv}{\frac{P}{mv} - \frac{R}{m}} = \frac{mv\,dv}{P - Rv}$$

$$t = \int_{5}^{15} \frac{mv}{P - Rv}\,dv = 800\int_{5}^{15} \frac{v}{40000 - 200v}\,dv$$

Let $u = 40000 - 200v$, $du = -200\,dv$, $dv = -\frac{du}{200}$, $v = \frac{40000 - u}{200}$:

$$t = 800\int \frac{(40000 - u)/200}{u} \cdot \left(-\frac{du}{200}\right) = 800 \times \frac{-1}{40000}\int \frac{40000 - u}{u}\,du$$

$$= -\frac{1}{50}\int \left(\frac{40000}{u} - 1\right)du = -\frac{1}{50}[40000\ln u - u]$$

Evaluating from $v = 5$ ($u = 39000$) to $v = 15$ ($u = 37000$):

$$t = -\frac{1}{50}\left[(40000\ln 37000 - 37000) - (40000\ln 39000 - 39000)\right]$$

$$= \frac{1}{50}\left[40000\ln\!\left(\frac{39000}{37000}\right) + 2000\right]$$

$$= 800\ln\!\left(\frac{39}{37}\right) + 40 \approx 800(0.05263) + 40 \approx 42.1 + 40 = 82.1 \text{ s}$$

---

### UT-3: Elastic Potential Energy — Maximum Extension of a Spring System

**Question:**

A particle of mass $3$ kg is attached to one end of a light elastic spring of natural length $1.2$ m and stiffness $k = 300$ N/m. The other end of the spring is fixed. The particle is held at a point where the spring is at its natural length and then released.

**(a)** Find the maximum extension of the spring.

**(b)** Find the maximum speed of the particle and the extension at which it occurs.

**(c)** A student assumes that the maximum speed occurs at the natural length of the spring. Explain why this is incorrect.

[Difficulty: hard. Tests the interplay between gravitational potential energy, elastic potential energy, and kinetic energy in a vertical spring system, including the identification of the equilibrium position as the point of maximum speed.]

**Solution:**

**(a)** At maximum extension $x_{\max}$, the speed is zero. Taking the natural length position as the reference for GPE (so the particle falls a distance $x_{\max}$):

Loss in GPE $= mgx_{\max} = 3 \times 9.8 \times x_{\max} = 29.4x_{\max}$.

Gain in EPE $= \frac{1}{2}kx_{\max}^2 = \frac{1}{2}(300)x_{\max}^2 = 150x_{\max}^2$.

$$29.4x_{\max} = 150x_{\max}^2$$

$$x_{\max}(150x_{\max} - 29.4) = 0$$

$$x_{\max} = \frac{29.4}{150} = 0.196 \text{ m}$$

(Ignoring $x_{\max} = 0$, the trivial solution.)

**(b)** The speed is maximum when the acceleration is zero, i.e., when the net force on the particle is zero. This occurs at the equilibrium extension $x_e$ where:

$$mg = kx_e \implies x_e = \frac{mg}{k} = \frac{29.4}{300} = 0.098 \text{ m}$$

At this point, using energy conservation from the natural length:

Loss in GPE $= mgx_e = 29.4 \times 0.098 = 2.8812$ J.

Gain in EPE $= \frac{1}{2}(300)(0.098)^2 = 150 \times 0.009604 = 1.4406$ J.

Gain in KE $= 2.8812 - 1.4406 = 1.4406$ J.

$$\frac{1}{2}(3)v_{\max}^2 = 1.4406 \implies v_{\max}^2 = 0.9604 \implies v_{\max} = 0.98 \text{ m/s}$$

**(c)** At the natural length, the spring exerts no force, so the only force on the particle is gravity ($mg = 29.4$ N downward). The particle is still accelerating at $g = 9.8$ m/s$^2$ at this point. The particle continues to accelerate until the restoring force of the spring equals gravity (at $x_e = 0.098$ m). Beyond this point, the spring force exceeds gravity and the particle decelerates. The maximum speed occurs at $x_e$, not at the natural length.

---

## Integration Tests

> Tests synthesis of energy and work with other topics. Requires combining concepts from multiple units.

### IT-1: Work Done by a Variable Force (with Integration)

**Question:**

A particle moves along the $x$-axis under the action of a variable force $F(x) = 3x^2 + 2x - 5$ N, where $x$ is the displacement in metres from a fixed origin.

**(a)** Find the work done by the force as the particle moves from $x = 0$ to $x = 3$.

**(b)** Given that the particle has mass $2$ kg and starts from rest at $x = 0$, find its speed at $x = 3$.

**(c)** Find the positions where the force is zero, and determine whether the force does positive or negative work in each region.

**(d)** Find the total work done from $x = -2$ to $x = 3$ and the speed at $x = 3$ if the particle started from rest at $x = -2$.

[Difficulty: hard. Combines integration of a variable force for work done with the work-energy theorem, and requires analysis of the sign of the force function.]

**Solution:**

**(a)** $$W = \int_0^3 F(x)\,dx = \int_0^3 (3x^2 + 2x - 5)\,dx = \left[x^3 + x^2 - 5x\right]_0^3$$

$$= (27 + 9 - 15) - 0 = 21 \text{ J}$$

**(b)** By the work-energy theorem: $W = \Delta\mathrm{KE} = \frac{1}{2}mv^2 - 0$.

$$21 = \frac{1}{2}(2)v^2 \implies v^2 = 21 \implies v = \sqrt{21} \approx 4.58 \text{ m/s}$$

**(c)** $F(x) = 0 \implies 3x^2 + 2x - 5 = 0 \implies (3x + 5)(x - 1) = 0 \implies x = -\frac{5}{3}$ or $x = 1$.

For $x \lt -5/3$: test $x = -2$, $F = 12 - 4 - 5 = 3 \gt 0$ (force in positive $x$-direction).

For $-5/3 \lt x \lt 1$: test $x = 0$, $F = -5 \lt 0$ (force in negative $x$-direction).

For $x \gt 1$: test $x = 2$, $F = 12 + 4 - 5 = 11 \gt 0$ (force in positive $x$-direction).

The force does positive work in $(-\infty, -5/3)$ and $(1, \infty)$, and negative work in $(-5/3, 1)$.

**(d)** $$W = \int_{-2}^3 (3x^2 + 2x - 5)\,dx = \left[x^3 + x^2 - 5x\right]_{-2}^3$$

$$= (27 + 9 - 15) - (-8 + 4 + 10) = 21 - 6 = 15 \text{ J}$$

$$v = \sqrt{\frac{2W}{m}} = \sqrt{\frac{30}{2}} = \sqrt{15} \approx 3.87 \text{ m/s}$$

Note that the work from $-2$ to $3$ ($15$ J) is less than from $0$ to $3$ ($21$ J) because the force does negative work in the region $[-5/3, 1]$ through which the particle passes.

---

### IT-2: Deriving the Work-Energy Theorem from $F = ma$ (with Proof)

**Question:**

**(a)** Starting from Newton's Second Law $F = ma$, derive the work-energy theorem in one dimension:

$$W = \int_{s_1}^{s_2} F\,ds = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

Show every step and justify each substitution.

**(b)** Extend the derivation to two dimensions, where the force is $\mathbf{F} = (F_x, F_y)$ and the displacement is $\mathbf{s} = (x, y)$, to show that:

$$W = \int \mathbf{F} \cdot d\mathbf{s} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

**(c)** Explain why the work-energy theorem holds for non-conservative forces (such as friction) but conservation of mechanical energy ($\mathrm{KE} + \mathrm{PE} = \text{constant}$) does not.

[Difficulty: hard. Requires a rigorous derivation from first principles, extending to vector form, and a conceptual explanation of the distinction between the work-energy theorem and conservation of energy.]

**Solution:**

**(a)** Starting from $F = ma$ where $F$ may vary with position:

$$F = m\frac{dv}{dt}$$

Multiply both sides by $ds$ (the infinitesimal displacement):

$$F\,ds = m\frac{dv}{dt}\,ds$$

Since $v = \frac{ds}{dt}$, we have $ds = v\,dt$, so $\frac{ds}{dt} = v$. Rearranging:

$$F\,ds = m\frac{dv}{dt} \cdot v\,dt = mv\,dv$$

This step uses the chain rule: $\frac{dv}{dt} = \frac{dv}{ds} \cdot \frac{ds}{dt} = v\frac{dv}{ds}$, so $F = mv\frac{dv}{ds}$ and $F\,ds = mv\,dv$.

Integrating both sides from the initial state $(s_1, v_1)$ to the final state $(s_2, v_2)$:

$$\int_{s_1}^{s_2} F\,ds = \int_{v_1}^{v_2} mv\,dv = \left[\frac{1}{2}mv^2\right]_{v_1}^{v_2} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2 \quad \blacksquare$$

**(b)** In two dimensions, Newton's Second Law is $\mathbf{F} = m\mathbf{a}$.

The work done by $\mathbf{F}$ along the path from $\mathbf{s}_1$ to $\mathbf{s}_2$ is:

$$W = \int \mathbf{F} \cdot d\mathbf{s} = \int (F_x\,dx + F_y\,dy)$$

Since $F_x = ma_x = m\frac{dv_x}{dt}$ and $dx = v_x\,dt$:

$$\int F_x\,dx = \int m\frac{dv_x}{dt} \cdot v_x\,dt = \int mv_x\,dv_x = \frac{1}{2}mv_{x,2}^2 - \frac{1}{2}mv_{x,1}^2$$

Similarly:

$$\int F_y\,dy = \frac{1}{2}mv_{y,2}^2 - \frac{1}{2}mv_{y,1}^2$$

Adding:

$$W = \frac{1}{2}m(v_{x,2}^2 + v_{y,2}^2) - \frac{1}{2}m(v_{x,1}^2 + v_{y,1}^2) = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2 \quad \blacksquare$$

**(c)** The work-energy theorem $W_{\text{net}} = \Delta\mathrm{KE}$ is a direct consequence of $F = ma$ (as proven above). It accounts for **all** forces, whether conservative or non-conservative. When friction acts, the work done by friction (which is negative) is included in $W_{\text{net}}$, and the change in KE correctly reflects this energy loss.

Conservation of mechanical energy ($\mathrm{KE} + \mathrm{PE} = \text{constant}$) applies only when all forces are conservative. A conservative force is one whose work done is path-independent (depends only on initial and final positions). Gravity is conservative; friction is not (the work done by friction depends on the path length). When friction is present, mechanical energy is not conserved -- some is converted to thermal energy. The work-energy theorem still holds because it accounts for the friction work explicitly.

---

### IT-3: Energy on an Inclined Plane with Friction (with Kinematics)

**Question:**

A particle of mass $5$ kg is projected up a rough plane inclined at $30°$ to the horizontal with speed $12$ m/s. The coefficient of friction is $\mu = 0.25$. Take $g = 9.8$ m/s$^2$.

**(a)** Using energy methods, find the distance the particle travels up the plane before coming to rest.

**(b)** Find the speed of the particle when it returns to its starting point.

**(c)** Solve part (a) using Newton's Second Law and SUVAT, and verify the answer.

**(d)** Find the total energy dissipated by friction during the complete up-and-down journey, and express it as a percentage of the initial kinetic energy.

[Difficulty: hard. Compares energy methods with force methods on an inclined plane with friction, and requires calculation of energy dissipation.]

**Solution:**

**(a)** Initial KE $= \frac{1}{2}(5)(144) = 360$ J.

At maximum distance $d$ up the plane, speed $= 0$.

Gain in GPE $= mgd\sin 30° = 5 \times 9.8 \times d \times 0.5 = 24.5d$ J.

Work done against friction (up the slope) $= \mu mg\cos 30° \times d = 0.25 \times 5 \times 9.8 \times \cos 30° \times d = 0.25 \times 42.43d = 10.61d$ J.

By conservation of energy:

$$\text{Initial KE} = \text{GPE gain} + \text{Work against friction}$$

$$360 = 24.5d + 10.61d = 35.11d$$

$$d = \frac{360}{35.11} \approx 10.25 \text{ m}$$

**(b)** On the return journey, the particle loses height $d\sin 30°$ and friction again acts over distance $d$.

Loss in GPE $= 24.5d = 24.5 \times 10.25 = 251.1$ J.

Work against friction (down the slope) $= 10.61d = 10.61 \times 10.25 = 108.8$ J.

Final KE $= 251.1 - 108.8 = 142.3$ J.

$$\frac{1}{2}(5)v^2 = 142.3 \implies v^2 = 56.9 \implies v \approx 7.54 \text{ m/s}$$

**(c)** By Newton's Second Law (up the slope positive):

$$a = -g\sin 30° - \mu g\cos 30° = -4.9 - 2.121 = -7.021 \text{ m/s}^2$$

Using $v^2 = u^2 + 2as$ with $v = 0$, $u = 12$:

$$0 = 144 + 2(-7.021)d \implies d = \frac{144}{14.042} \approx 10.25 \text{ m}$$

Matches part (a).

**(d)** Total work done against friction $= 2 \times 10.61d = 2 \times 108.8 = 217.7$ J.

Initial KE $= 360$ J.

$$\text{Percentage dissipated} = \frac{217.7}{360} \times 100\% \approx 60.5\%$$

Over 60% of the initial kinetic energy is lost to friction during the complete journey.
