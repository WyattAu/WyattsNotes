---
title: Nonlinear Dynamics and Chaos
tags:
  - Physics
  - University
---

### 11.1 The Logistic Map

The logistic map is the simplest model of chaotic dynamics:

$$x_{n+1} = r\,x_n(1 - x_n), \quad 0 \leq x \leq 1$$

- $0 \leq r \leq 1$: $x_n \to 0$ (extinction)
- $1 < r < 3$: Fixed point $x^* = 1 - 1/r$ (stable population)
- $3 < r < 3.449$: Period-2 cycle
- $3.449 < r < 3.544$: Period-4 cycle
- $r_c \approx 3.56995$: Onset of chaos (period doubling cascade)
- $r > r_c$: Chaotic regime (with periodic windows)

**Feigenbaum constants:** The ratio of successive bifurcation intervals converges to
$\delta = 4.669\ldots$A universal constant for all period-doubling transitions.

### 11.2 Lyapunov Exponents

The **Lyapunov exponent** $\lambda$ measures the rate of exponential divergence of nearby
trajectories:

$$|\delta x(t)| \sim e^{\lambda t}|\delta x(0)|$$

- $\lambda < 0$: Trajectories converge (stable, periodic)
- $\lambda = 0$: Trajectories neither converge nor diverge (marginal)
- $\lambda > 0$: Trajectories diverge exponentially (chaos)

For the logistic map at $r = 4$: $\lambda = \ln 2 \approx 0.693$.

### 11.3 The Driven Damped Pendulum

The equation of motion for a driven damped pendulum:

$$\ddot{\theta} + \gamma\dot{\theta} + \frac{g}{\ell}\sin\theta = A\cos(\omega_d t)$$

For certain parameter ranges, this system exhibits deterministic chaos despite being described by a
simple differential equation. The transition to chaos occurs via the same period-doubling cascade as
the logistic map.

**Poincaré section:** By sampling the phase space $(\theta, \dot{\theta})$ at the driving frequency,
the chaotic attractor reveals its fractal structure.

<details>
<summary>Worked Example 11.1: Period Doubling in the Logistic Map</summary>

At $r = 3.2$The logistic map has a stable period-2 cycle.

Starting from $x_0 = 0.2$:

$$x_1 = 3.2 \times 0.2 \times 0.8 = 0.512$$

$$x_2 = 3.2 \times 0.512 \times 0.488 = 0.799$$

$$x_3 = 3.2 \times 0.799 \times 0.201 = 0.513$$

$$x_4 = 3.2 \times 0.513 \times 0.487 = 0.799$$

The system settles into the cycle $\{0.513, 0.799\}$. The period-2 orbit has
$f(x^*) = f(f(x^*)) = x^*$ with $f(x) = rx(1-x)$.

To find the period-2 points analytically: solve $f(f(x)) = x$ while excluding the fixed points of
$f$:

$$r^2 x(1-x)[1 - rx(1-x)] = x$$

$$r[r(1-x)(1 - rx + rx^2)] = 1$$

At $r = 3.2$: the solutions are $x^* = 0.5130$ and $x^* = 0.7995$Matching our numerical result.

</details>

## Common Pitfalls (Additional)

1. **Euler angles have gimbal lock:** When $\theta = 0$ (or $\pi$), the angles $\phi$ and $\psi$
   become degenerate and cannot independently specify the orientation. This is the same gimbal lock
   problem encountered in navigation. For numerical simulations, use quaternions instead.

2. **Canonical transformations are not coordinate transformations:** A canonical transformation
   changes both coordinates and momenta in a way that preserves Hamilton's equations. Not every
   coordinate transformation $(q, p) \to (Q, P)$ is canonical. The test is whether the Poisson
   brackets $\{Q_i, Q_j\} = \{P_i, P_j\} = 0$ and $\{Q_i, P_j\} = \delta_{ij}$ are preserved.

3. **The adiabatic theorem requires slowness:** The adiabatic invariant $E/\omega$ is conserved only
   when $\dot{\omega}/\omega^2 \ll 1$ (the parameter changes slowly compared to the period). For
   sudden changes, the adiabatic theorem does not apply, and the energy change must be computed from
   the explicit time-dependent Hamiltonian.

4. **Chaos requires nonlinearity but not complexity:** The driven damped pendulum and the logistic
   map are among the simplest dynamical systems, yet they exhibit chaos. Chaos is a property of the
   dynamics, not the complexity of the equations. A three-dimensional autonomous system (or
   two-dimensional non-autonomous system) is the minimum for chaos.

5. **Liouville's theorem constrains but does not determine dynamics:** Liouville’s theorem says
   phase space volume is conserved, but it does not prevent phase space density from becoming
   filamented (stretched and folded). In fact, this filamentation is the mechanism behind mixing and
   ergodicity in Hamiltonian systems.

## Problems (Additional)

<details>
<summary>Problem 19: Euler's Equations for an Asymmetric Body</summary>

A rigid body with principal moments $I_1 = 1$, $I_2 = 2$, $I_3 = 3$ (in kg$\cdot$M$^2$) rotates
freely with initial angular velocity $\boldsymbol{\omega}(0) = (0.1, 0.5, 1.0)$ rad/s.

(a) Verify that $T$ and $L^2$ are conserved by computing them at $t = 0$.

(b) Use Euler's equations to find $\dot{\omega}_1, \dot{\omega}_2, \dot{\omega}_3$ at $t = 0$.

(c) Is the motion about the intermediate axis ($I_2$) stable? Predict the qualitative behaviour.

**Solution:**

(a)
$T = \frac{1}{2}(1 \times 0.01 + 2 \times 0.25 + 3 \times 1.00) = \frac{1}{2}(0.01 + 0.50 + 3.00) = 1.755$
J.

$L^2 = 1 \times 0.01 + 4 \times 0.25 + 9 \times 1.00 = 0.01 + 1.00 + 9.00 = 10.01$
(kg$\cdot$M$^2$/s$)^2$.

(b) $\dot{\omega}_1 = \frac{(I_2 - I_3)}{I_1}\omega_2\omega_3 = \frac{(2-3)}{1}(0.5)(1.0) = -0.5$
rad/s$^2$.

$\dot{\omega}_2 = \frac{(I_3 - I_1)}{I_2}\omega_3\omega_1 = \frac{(3-1)}{2}(1.0)(0.1) = 0.1$
rad/s$^2$.

$\dot{\omega}_3 = \frac{(I_1 - I_2)}{I_3}\omega_1\omega_2 = \frac{(1-2)}{3}(0.1)(0.5) = -0.0167$
rad/s$^2$.

(c) The initial $\omega_2 = 0.5$ is the largest component, so the rotation is predominantly about
the intermediate axis. Since $I_1 < I_2 < I_3$Rotation about the intermediate axis is **unstable**
(tennis racket theorem). The body will exhibit periodic flipping, with $\omega_1$ and $\omega_3$
growing at the expense of $\omega_2$Then reversing. This is the Dzhanibekov effect.

</details>

<details>
<summary>Problem 20: Hamilton--Jacobi for the Free Particle</summary>

(a) Solve the Hamilton--Jacobi equation for a free particle in one dimension: $H = p^2/(2m)$.

(b) Find the generating function $S(x, P, t)$ that transforms to constant momentum $P$.

(c) Show that the new coordinate $X = \partial S/\partial P = x - Pt/m$ (a freely moving
coordinate).

**Solution:**

(a) The Hamilton--Jacobi equation:

$$\frac{1}{2m}\left(\frac{\partial S}{\partial x}\right)^2 + \frac{\partial S}{\partial t} = 0$$

Separate variables: $S(x, t) = W(x) - Et$ where $E$ is the separation constant (energy).

$$\frac{1}{2m}\left(\frac{dW}{dx}\right)^2 = E \implies W(x) = \pm\sqrt{2mE}\,x$$

$$S(x, E, t) = \pm\sqrt{2mE}\,x - Et$$

(b) With $P = \sqrt{2mE}$ (identifying the new momentum with $\sqrt{2mE}$):

$$E = P^2/(2m), \quad S(x, P, t) = Px - \frac{P^2}{2m}t$$

(c) The new coordinate:

$$X = \frac{\partial S}{\partial P} = x - \frac{P}{m}t$$

The new Hamiltonian $K = H + \partial S/\partial t = P^2/(2m) - P^2/(2m) = 0$. All momenta and
energies are constant. The new coordinate evolves as $X = x_0 = \text{const}$ (the initial
position).

The original coordinate: $x = X + Pt/m = x_0 + v_0 t$ (uniform motion). $\checkmark$

</details>

