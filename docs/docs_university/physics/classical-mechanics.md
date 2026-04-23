---
title: Classical Mechanics
date: 2026-04-23T00:00:00.000Z
tags:
  - Physics
  - University
categories:
  - Physics
slug: classical-mechanics
---

## 1. Newtonian Mechanics Review

### 1.1 Newton's Laws

1. **First Law (Inertia):** A body remains at rest or in uniform motion unless acted upon by a net force.
2. **Second Law:** $\mathbf{F} = m\mathbf{a} = \dot{\mathbf{p}}$ where $\mathbf{p} = m\mathbf{v}$.
3. **Third Law:** For every action, there is an equal and opposite reaction.

### 1.2 From Newton to Variational Principles

Newton's laws work well in Cartesian coordinates but become cumbersome in constrained systems or
non-Cartesian coordinates. The **Lagrangian** and **Hamiltonian** formulations provide a more general
and elegant framework based on energy principles.

The key insight: instead of tracking forces, track the **energy** of the system. The trajectory is the
one that **minimises** (or more precisely, makes stationary) the **action**.

## 2. Generalised Coordinates and Constraints

### 2.1 Generalised Coordinates

A system with $n$ degrees of freedom can be described by $n$ **generalised coordinates**
$q_1, q_2, \ldots, q_n$, which may be angles, arc lengths, or any other set of parameters that
uniquely determines the configuration.

**Example.** A simple pendulum has one degree of freedom. We can use the angle $\theta$ from the
vertical as the generalised coordinate, rather than the Cartesian coordinates $(x, y)$ of the bob.

### 2.2 Constraints

**Holonomic constraints** relate the coordinates by equations:
$$f(\mathbf{r}_1, \mathbf{r}_2, \ldots, \mathbf{r}_N, t) = 0$$

A holonomic constraint reduces the number of degrees of freedom.

**Non-holonomic constraints** involve inequalities or non-integrable differential relations.

**Scleronomic constraints** do not depend explicitly on time. **Rheonomic constraints** do.

**Example.** A bead sliding on a fixed wire: the constraint $f(x,y) = 0$ is holonomic and scleronomic.
A bead on a wire that moves with time: holonomic and rheonomic.

### 2.3 Virtual Work and D'Alembert's Principle

A **virtual displacement** $\delta \mathbf{r}_i$ is an infinitesimal change in position consistent with
the constraints at a fixed instant in time.

**D'Alembert's Principle:** For a system of $N$ particles:

$$\sum_{i=1}^N (\mathbf{F}_i - m_i \ddot{\mathbf{r}}_i) \cdot \delta \mathbf{r}_i = 0$$

where $\mathbf{F}_i$ includes both applied and constraint forces. For ideal constraints, the
constraint forces do no virtual work, so only the applied forces contribute.

## 3. Lagrangian Mechanics

### 3.1 The Lagrangian

The **Lagrangian** of a system is defined as

$$L(q_1, \ldots, q_n, \dot{q}_1, \ldots, \dot{q}_n, t) = T - V$$

where $T$ is the kinetic energy and $V$ is the potential energy.

### 3.2 Euler-Lagrange Equation

**Theorem 3.1 (Hamilton's Principle).** The actual path of a system between times $t_1$ and $t_2$ is
the one that makes the **action**

$$S = \int_{t_1}^{t_2} L(q, \dot{q}, t)\, dt$$

stationary.

**Theorem 3.2 (Euler-Lagrange Equation).** The path $q(t)$ that makes $S$ stationary satisfies

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) - \frac{\partial L}{\partial q_j} = 0, \quad j = 1, \ldots, n$$

*Proof (for one degree of freedom).* Consider a variation $q(t) + \epsilon \eta(t)$ where $\eta(t_1) =
\eta(t_2) = 0$. The variation of the action:

$$\delta S = \int_{t_1}^{t_2} \left(\frac{\partial L}{\partial q}\eta + \frac{\partial L}{\partial \dot{q}}\dot{\eta}\right) dt$$

Integrating the second term by parts:

$$\delta S = \int_{t_1}^{t_2} \left(\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}}\right) \eta\, dt + \left[\frac{\partial L}{\partial \dot{q}}\eta\right]_{t_1}^{t_2}$$

The boundary term vanishes since $\eta(t_1) = \eta(t_2) = 0$. For $\delta S = 0$ for all $\eta$, by
the fundamental lemma of the calculus of variations:

$$\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}} = 0$$

$\blacksquare$

### 3.3 Worked Example: Simple Pendulum

**Problem.** Derive the equation of motion for a simple pendulum of length $l$ and mass $m$.

*Solution.* Take $\theta$ as the generalised coordinate. The position of the bob is
$(l\sin\theta, -l\cos\theta)$.

$$T = \frac{1}{2}m(\dot{x}^2 + \dot{y}^2) = \frac{1}{2}ml^2\dot{\theta}^2$$

$$V = -mgl\cos\theta$$

$$L = T - V = \frac{1}{2}ml^2\dot{\theta}^2 + mgl\cos\theta$$

Euler-Lagrange equation:

$$\frac{\partial L}{\partial \theta} = -mgl\sin\theta, \quad \frac{\partial L}{\partial \dot{\theta}} = ml^2\dot{\theta}$$

$$\frac{d}{dt}(ml^2\dot{\theta}) + mgl\sin\theta = 0 \implies \ddot{\theta} + \frac{g}{l}\sin\theta = 0$$

For small angles ($\sin\theta \approx \theta$): $\ddot{\theta} + \frac{g}{l}\theta = 0$, giving simple
harmonic motion with $\omega = \sqrt{g/l}$. $\blacksquare$

### 3.4 Lagrange Multipliers for Constraints

When holonomic constraints cannot be eliminated by coordinate choice, introduce Lagrange multipliers
$\lambda_a$:

$$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_j} - \frac{\partial L}{\partial q_j} = \sum_a \lambda_a \frac{\partial f_a}{\partial q_j}$$

The multipliers $\lambda_a$ are proportional to the constraint forces.

## 4. Hamiltonian Mechanics

### 4.1 Generalised Momentum

The **generalised momentum** conjugate to $q_j$ is

$$p_j = \frac{\partial L}{\partial \dot{q}_j}$$

### 4.2 The Hamiltonian

The **Hamiltonian** is defined by the **Legendre transform**:

$$H(q_1, \ldots, q_n, p_1, \ldots, p_n, t) = \sum_{j=1}^n p_j \dot{q}_j - L$$

When the transformation is regular (i.e., the Hessian $\partial^2 L / \partial \dot{q}_j \partial \dot{q}_k$
is non-singular), this is well-defined.

If $L$ does not depend explicitly on time and $V$ is velocity-independent, then $H = T + V$ (total
energy).

### 4.3 Hamilton's Equations

**Theorem 4.1 (Hamilton's Equations).** The equations of motion in Hamiltonian form are

$$\dot{q}_j = \frac{\partial H}{\partial p_j}, \quad \dot{p}_j = -\frac{\partial H}{\partial q_j}$$

These are $2n$ first-order ODEs (compared to $n$ second-order ODEs in the Lagrangian formulation).

*Proof.* From $H = \sum p_j \dot{q}_j - L$:

$$dH = \sum \dot{q}_j\, dp_j + \sum p_j\, d\dot{q}_j - \sum \frac{\partial L}{\partial q_j}\, dq_j - \sum \frac{\partial L}{\partial \dot{q}_j}\, d\dot{q}_j - \frac{\partial L}{\partial t}\, dt$$

Since $p_j = \partial L / \partial \dot{q}_j$, the $d\dot{q}_j$ terms cancel:

$$dH = \sum \dot{q}_j\, dp_j - \sum \dot{p}_j\, dq_j - \frac{\partial L}{\partial t}\, dt$$

Comparing with $dH = \sum \frac{\partial H}{\partial p_j} dp_j + \sum \frac{\partial H}{\partial q_j} dq_j + \frac{\partial H}{\partial t} dt$:

$$\dot{q}_j = \frac{\partial H}{\partial p_j}, \quad \dot{p}_j = -\frac{\partial H}{\partial q_j}, \quad \frac{\partial H}{\partial t} = -\frac{\partial L}{\partial t}$$

$\blacksquare$

### 4.4 Phase Space

Hamiltonian mechanics naturally lives in **phase space**: the $2n$-dimensional space with coordinates
$(q_1, \ldots, q_n, p_1, \ldots, p_n)$. Each point in phase space represents a complete state of the
system (positions and momenta).

**Liouville's Theorem.** The flow in phase space is **incompressible**: the phase space volume is
conserved along trajectories.

## 5. Noether's Theorem and Conservation Laws

### 5.1 Statement of Noether's Theorem

**Theorem 5.1 (Noether's Theorem).** For every continuous symmetry of the action, there is a
corresponding conserved quantity.

More precisely: if the Lagrangian is invariant under the transformation $q_j \to q_j + \epsilon f_j(q, t)$
(for infinitesimal $\epsilon$), then

$$Q = \sum_j p_j f_j$$

is a constant of motion.

### 5.2 Specific Conservation Laws

**Time translation invariance** ($L$ does not depend explicitly on $t$):

$$\frac{dH}{dt} = -\frac{\partial L}{\partial t} = 0 \implies H = \mathrm{const}$$

This gives **conservation of energy**.

**Spatial translation invariance** ($L$ is invariant under $x \to x + \epsilon$):

$$\frac{\partial L}{\partial x} = 0 \implies p_x = \frac{\partial L}{\partial \dot{x}} = \mathrm{const}$$

This gives **conservation of linear momentum**.

**Rotational invariance** ($L$ is invariant under rotation about an axis):

$$\frac{\partial L}{\partial \theta} = 0 \implies p_\theta = \frac{\partial L}{\partial \dot{\theta}} = \mathrm{const}$$

This gives **conservation of angular momentum**.

### 5.3 Worked Example

**Problem.** A particle moves in a central potential $V(r)$. Show that angular momentum is conserved.

*Solution.* In spherical coordinates $(r, \theta, \phi)$ with $V = V(r)$:

$$L = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\theta}^2 + r^2\sin^2\theta\,\dot{\phi}^2) - V(r)$$

Since $L$ does not depend on $\phi$ (rotational symmetry about the $z$-axis):

$$p_\phi = \frac{\partial L}{\partial \dot{\phi}} = mr^2\sin^2\theta\,\dot{\phi} = \mathrm{const}$$

This is the $z$-component of angular momentum. By Noether's theorem, the full angular momentum vector
is conserved for any central potential. $\blacksquare$

## 6. Central Force Problems

### 6.1 Reduction to One Dimension

For a particle of mass $m$ in a central potential $V(r)$, using polar coordinates $(r, \phi)$ in the
plane of motion:

$$L = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\phi}^2) - V(r)$$

The angular momentum $l = mr^2\dot{\phi}$ is conserved. Substituting $\dot{\phi} = l/(mr^2)$:

$$L = \frac{1}{2}m\dot{r}^2 + \frac{l^2}{2mr^2} - V(r)$$

The effective potential is $V_{\mathrm{eff}}(r) = V(r) + \frac{l^2}{2mr^2}$, where the second term is
the **centrifugal barrier**.

### 6.2 The Kepler Problem

For $V(r) = -k/r$ (gravitational or Coulomb potential):

**Bertrand's Theorem:** The only central potentials that give closed orbits for all bound states are
$V(r) \propto 1/r$ (Kepler/Coulomb) and $V(r) \propto r^2$ (harmonic oscillator).

**Key results for Kepler orbits:**

- Orbits are conic sections (ellipses, parabolas, or hyperbolas).
- The semi-major axis $a$ satisfies $E = -k/(2a)$ for bound orbits.
- The period is $T = 2\pi\sqrt{ma^3/k}$ (Kepler's third law).

## 7. Small Oscillations and Normal Modes

### 7.1 Equilibrium and Small Oscillations

At a stable equilibrium, $V$ has a local minimum. Expanding around equilibrium ($q_j = q_j^0 + \eta_j$):

$$L \approx \frac{1}{2}\sum_{j,k} T_{jk}\dot{\eta}_j\dot{\eta}_k - \frac{1}{2}\sum_{j,k} V_{jk}\eta_j\eta_k$$

where $T_{jk} = \frac{\partial^2 T}{\partial \dot{q}_j \partial \dot{q}_k}\bigg|_0$ is the (constant)
mass matrix and $V_{jk} = \frac{\partial^2 V}{\partial q_j \partial q_k}\bigg|_0$ is the (constant)
stiffness matrix.

### 7.2 Normal Modes

Assuming solutions of the form $\eta_j = a_j e^{i\omega t}$, the eigenvalue problem is:

$$(V - \omega^2 T)\mathbf{a} = \mathbf{0}$$

The **normal mode frequencies** $\omega_\alpha$ are solutions to $\det(V - \omega^2 T) = 0$.

**Theorem 7.1.** For a stable system, all normal mode frequencies are real and positive. The normal
modes are orthogonal with respect to both $T$ and $V$.

### 7.3 Worked Example: Double Pendulum (Small Oscillations)

For two equal masses $m$ on massless rods of length $l$:

The kinetic and potential energy matrices (to second order) give the eigenvalue problem with solutions
$\omega_1 = \sqrt{g/l}(2 - \sqrt{2})^{1/2}$ and $\omega_2 = \sqrt{g/l}(2 + \sqrt{2})^{1/2}$.

The corresponding normal modes are:
- **Mode 1:** both pendulums swing in the same direction (in phase).
- **Mode 2:** the pendulums swing in opposite directions (out of phase).

:::caution Common Pitfall
The Lagrangian and Hamiltonian formulations are equivalent only when the Legendre transform from $L$
to $H$ is regular. If $\det(\partial^2 L / \partial \dot{q}_i \partial \dot{q}_j) = 0$, the system
has **constraints** and the Hamiltonian formulation requires special treatment (Dirac brackets or
constraint analysis).
:::
