---
title: Lagrangian Mechanics
tags:
  - Physics
  - University
---

### 3.1 The Lagrangian

The **Lagrangian** of a system is defined as

$$L(q_1, \ldots, q_n, \dot{q}_1, \ldots, \dot{q}_n, t) = T - V$$

Where $T$ is the kinetic energy and $V$ is the potential energy.

### 3.2 Derivation of the Euler-Lagrange Equation from D'Alembert’s Principle

**Theorem 3.1 (Euler-Lagrange from D'Alembert).** The equations of motion for a holonomic system
with ideal constraints are:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) - \frac{\partial L}{\partial q_j} = 0, \quad j = 1, \ldots, n$$

_Proof._ Start from D'Alembert’s principle with only applied forces (ideal constraints):

$$\sum_i (\mathbf{F}_i^{(\mathrm{app})} - m_i\ddot{\mathbf{r}}_i) \cdot \delta\mathbf{r}_i = 0$$

Express the virtual displacement in terms of generalised coordinates:

$$\delta\mathbf{r}_i = \sum_j \frac{\partial \mathbf{r}_i}{\partial q_j}\delta q_j$$

**First term (applied forces).** For a conservative system,
$\mathbf{F}_i^{(\mathrm{app})} = -\nabla_i V$So:

$$\sum_i \mathbf{F}_i^{(\mathrm{app})} \cdot \delta\mathbf{r}_i = -\sum_i \nabla_i V \cdot \sum_j \frac{\partial \mathbf{r}_i}{\partial q_j}\delta q_j = -\sum_j \frac{\partial V}{\partial q_j}\delta q_j$$

Defining the **generalised force**
$Q_j = \sum_i \mathbf{F}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j}$For conservative forces
$Q_j = -\partial V/\partial q_j$.

**Second term (inertia).** Using
$\frac{\partial \dot{\mathbf{r}}_i}{\partial \dot{q}_j} = \frac{\partial \mathbf{r}_i}{\partial q_j}$
(which holds when $\mathbf{r}_i = \mathbf{r}_i(q, t)$):

$$\sum_i m_i\ddot{\mathbf{r}}_i \cdot \delta\mathbf{r}_i = \sum_i m_i\ddot{\mathbf{r}}_i \cdot \sum_j \frac{\partial \mathbf{r}_i}{\partial q_j}\delta q_j = \sum_j \left[\sum_i m_i\ddot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j}\right]\delta q_j$$

Now:

$$\sum_i m_i\ddot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} = \frac{d}{dt}\left(\sum_i m_i\dot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j}\right) - \sum_i m_i\dot{\mathbf{r}}_i \cdot \frac{d}{dt}\frac{\partial \mathbf{r}_i}{\partial q_j}$$

Using
$\frac{d}{dt}\frac{\partial \mathbf{r}_i}{\partial q_j} = \frac{\partial \dot{\mathbf{r}}_i}{\partial q_j}$
and
$\frac{\partial \dot{\mathbf{r}}_i}{\partial \dot{q}_j} = \frac{\partial \mathbf{r}_i}{\partial q_j}$:

$$\sum_i m_i\ddot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} = \frac{d}{dt}\left(\sum_i m_i\dot{\mathbf{r}}_i \cdot \frac{\partial \dot{\mathbf{r}}_i}{\partial \dot{q}_j}\right) - \sum_i m_i\dot{\mathbf{r}}_i \cdot \frac{\partial \dot{\mathbf{r}}_i}{\partial q_j}$$

$$= \frac{d}{dt}\frac{\partial T}{\partial \dot{q}_j} - \frac{\partial T}{\partial q_j}$$

Combining both terms in D'Alembert’s principle:

$$\sum_j \left[Q_j - \frac{d}{dt}\frac{\partial T}{\partial \dot{q}_j} + \frac{\partial T}{\partial q_j}\right]\delta q_j = 0$$

For conservative forces, $Q_j = -\partial V/\partial q_j$. Since $L = T - V$ and $V$ is independent
of $\dot{q}_j$:

$$\sum_j \left[\frac{\partial L}{\partial q_j} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}_j}\right]\delta q_j = 0$$

Since the $\delta q_j$ are independent (and we have $n$ degrees of freedom):

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) - \frac{\partial L}{\partial q_j} = 0$$

$\blacksquare$

### 3.3 Hamilton's Principle (Action Formulation)

**Theorem 3.2 (Hamilton's Principle).** The actual path of a system between times $t_1$ and $t_2$ is
The one that makes the **action**

$$S = \int_{t_1}^{t_2} L(q, \dot{q}, t)\, dt$$

Stationary.

**Theorem 3.3 (Euler-Lagrange Equation from Hamilton's Principle).** The path $q(t)$ that makes $S$
stationary satisfies

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) - \frac{\partial L}{\partial q_j} = 0, \quad j = 1, \ldots, n$$

_Proof (for one degree of freedom)._ Consider a variation $q(t) + \epsilon \eta(t)$ where
$\eta(t_1) =
\eta(t_2) = 0$. The variation of the action:

$$\delta S = \int_{t_1}^{t_2} \left(\frac{\partial L}{\partial q}\eta + \frac{\partial L}{\partial \dot{q}}\dot{\eta}\right) dt$$

Integrating the second term by parts:

$$\delta S = \int_{t_1}^{t_2} \left(\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}}\right) \eta\, dt + \left[\frac{\partial L}{\partial \dot{q}}\eta\right]_{t_1}^{t_2}$$

The boundary term vanishes since $\eta(t_1) = \eta(t_2) = 0$. For $\delta S = 0$ for all $\eta$By
The fundamental lemma of the calculus of variations:

$$\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}} = 0$$

$\blacksquare$

_Intuition._ Hamilton's principle says nature is "lazy": out of all possible paths connecting two
configurations, the actual path taken is the one that makes the action stationary. This is a
profound generalisation of Fermat's principle of least time in optics.

### 3.4 Worked Example: Simple Pendulum

**Problem.** Derive the equation of motion for a simple pendulum of length $l$ and mass $m$.

_Solution._ Take $\theta$ as the generalised coordinate. The position of the bob is
$(l\sin\theta, -l\cos\theta)$.

$$T = \frac{1}{2}m(\dot{x}^2 + \dot{y}^2) = \frac{1}{2}ml^2\dot{\theta}^2$$

$$V = -mgl\cos\theta$$

$$L = T - V = \frac{1}{2}ml^2\dot{\theta}^2 + mgl\cos\theta$$

Euler-Lagrange equation:

$$\frac{\partial L}{\partial \theta} = -mgl\sin\theta, \quad \frac{\partial L}{\partial \dot{\theta}} = ml^2\dot{\theta}$$

$$\frac{d}{dt}(ml^2\dot{\theta}) + mgl\sin\theta = 0 \implies \ddot{\theta} + \frac{g}{l}\sin\theta = 0$$

For small angles ($\sin\theta \approx \theta$): $\ddot{\theta} + \frac{g}{l}\theta = 0$Giving simple
Harmonic motion with $\omega = \sqrt{g/l}$. $\blacksquare$

### 3.5 Worked Example: Double Pendulum

**Problem.** Derive the equations of motion for a double pendulum: mass $m_1$ on rod $l_1$Mass $m_2$
on rod $l_2$ attached to $m_1$.

_Solution._ Generalised coordinates: angles $\theta_1, \theta_2$ from the vertical. Position of
$m_1$:

$$x_1 = l_1\sin\theta_1, \quad y_1 = -l_1\cos\theta_1$$

Position of $m_2$:

$$x_2 = l_1\sin\theta_1 + l_2\sin\theta_2, \quad y_2 = -l_1\cos\theta_1 - l_2\cos\theta_2$$

Velocities:

$$\dot{x}_1 = l_1\dot{\theta}_1\cos\theta_1, \quad \dot{y}_1 = l_1\dot{\theta}_1\sin\theta_1$$

$$\dot{x}_2 = l_1\dot{\theta}_1\cos\theta_1 + l_2\dot{\theta}_2\cos\theta_2, \quad \dot{y}_2 = l_1\dot{\theta}_1\sin\theta_1 + l_2\dot{\theta}_2\sin\theta_2$$

Kinetic energy:

$$T = \frac{1}{2}m_1(\dot{x}_1^2 + \dot{y}_1^2) + \frac{1}{2}m_2(\dot{x}_2^2 + \dot{y}_2^2)$$

$$= \frac{1}{2}(m_1 + m_2)l_1^2\dot{\theta}_1^2 + \frac{1}{2}m_2 l_2^2\dot{\theta}_2^2 + m_2 l_1 l_2\dot{\theta}_1\dot{\theta}_2\cos(\theta_1 - \theta_2)$$

Potential energy:

$$V = -m_1 g l_1\cos\theta_1 - m_2 g(l_1\cos\theta_1 + l_2\cos\theta_2)$$

The Euler-Lagrange equations for $\theta_1$ and $\theta_2$ yield two coupled second-order ODEs. For
equal masses and lengths ($m_1 = m_2 = m$, $l_1 = l_2 = l$):

$$(m + m)l^2\ddot{\theta}_1 + ml^2\ddot{\theta}_2\cos(\theta_1 - \theta_2) + ml^2\dot{\theta}_2^2\sin(\theta_1 - \theta_2) + 2mgl\sin\theta_1 = 0$$

$$ml^2\ddot{\theta}_2 + ml^2\ddot{\theta}_1\cos(\theta_1 - \theta_2) - ml^2\dot{\theta}_1^2\sin(\theta_1 - \theta_2) + mgl\sin\theta_2 = 0$$

$\blacksquare$

### 3.6 Worked Example: Atwood Machine

**Problem.** Two masses $m_1$ and $m_2$ ($m_1 > m_2$) are connected by a massless inextensible
string over a frictionless pulley. Find the acceleration using the Lagrangian.

<details>
<summary>Solution</summary>

Choose the vertical displacement $x$ of $m_1$ (downward positive) as the generalised coordinate.
Since the string is inextensible, $m_2$ moves up by $x$.

$$T = \frac{1}{2}m_1\dot{x}^2 + \frac{1}{2}m_2\dot{x}^2 = \frac{1}{2}(m_1 + m_2)\dot{x}^2$$

$$V = -m_1 g x + m_2 g x = -(m_1 - m_2)gx$$

$$L = \frac{1}{2}(m_1 + m_2)\dot{x}^2 + (m_1 - m_2)gx$$

Euler-Lagrange equation:

$$\frac{\partial L}{\partial x} = (m_1 - m_2)g, \quad \frac{\partial L}{\partial \dot{x}} = (m_1 + m_2)\dot{x}$$

$$(m_1 + m_2)\ddot{x} = (m_1 - m_2)g$$

$$a = \ddot{x} = \frac{m_1 - m_2}{m_1 + m_2}g$$

$\blacksquare$

</details>

### 3.7 Worked Example: Bead on a Rotating Hoop

**Problem.** A bead of mass $m$ slides without friction on a circular hoop of radius $R$. The hoop
rotates about a vertical diameter with constant angular velocity $\omega$. Find the equilibrium
positions and their stability.

<details>
<summary>Solution</summary>

Use the angle $\theta$ from the bottom of the hoop as the generalised coordinate. The position of
the bead in cylindrical coordinates $(\rho, \phi, z)$:

$$\rho = R\sin\theta, \quad \phi = \omega t, \quad z = -R\cos\theta$$

Velocity:

$$\dot{\rho} = R\dot{\theta}\cos\theta, \quad \dot{\phi} = \omega, \quad \dot{z} = R\dot{\theta}\sin\theta$$

Kinetic energy:

$$T = \frac{1}{2}m(\dot{\rho}^2 + \rho^2\dot{\phi}^2 + \dot{z}^2) = \frac{1}{2}m R^2\dot{\theta}^2 + \frac{1}{2}mR^2\omega^2\sin^2\theta$$

Potential energy:

$$V = -mgR\cos\theta$$

Lagrangian:

$$L = \frac{1}{2}mR^2\dot{\theta}^2 + \frac{1}{2}mR^2\omega^2\sin^2\theta + mgR\cos\theta$$

Euler-Lagrange equation:

$$mR^2\ddot{\theta} = mR^2\omega^2\sin\theta\cos\theta - mgR\sin\theta$$

$$\ddot{\theta} = \sin\theta\left(\omega^2\cos\theta - \frac{g}{R}\right)$$

Equilibrium ($\ddot{\theta} = 0$, $\dot{\theta} = 0$): $\sin\theta = 0$ giving $\theta = 0$
(bottom), or $\cos\theta = g/(R\omega^2)$ which exists only when $\omega^2 \gt g/R$.

For $\omega^2 \lt g/R$: only $\theta = 0$ is stable. For $\omega^2 \gt g/R$: the bottom becomes
unstable and the new equilibria at $\cos\theta = g/(R\omega^2)$ are stable.

$\blacksquare$

</details>

### 3.8 Cyclic Coordinates and Conserved Quantities

**Definition.** A coordinate $q_j$ is **cyclic** (or **ignorable**) if it does not appear explicitly
in the Lagrangian: $\partial L / \partial q_j = 0$.

**Theorem 3.4.** If $q_j$ is cyclic, the conjugate generalised momentum
$p_j = \partial L / \partial \dot{q}_j$ is a constant of motion.

_Proof._ The Euler-Lagrange equation for a cyclic coordinate is:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) = 0 \implies p_j = \mathrm{const}$$

$\blacksquare$

_Intuition._ Cyclic coordinates correspond to symmetries of the system. Each symmetry gives a
conserved quantity --- this is the essence of Noether's theorem (Section 5).

### 3.9 Lagrange Multipliers for Constraints

When holonomic constraints cannot be eliminated by coordinate choice, introduce Lagrange multipliers
$\lambda_a$:

$$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_j} - \frac{\partial L}{\partial q_j} = \sum_a \lambda_a \frac{\partial f_a}{\partial q_j}$$

The multipliers $\lambda_a$ are proportional to the constraint forces.

### 3.10 The Energy Function and Its Relation to the Hamiltonian

**Definition.** The **energy function** (also called the Jacobi integral) is:

$$h = \sum_j \dot{q}_j \frac{\partial L}{\partial \dot{q}_j} - L$$

**Theorem 3.5.** If $L$ does not depend explicitly on time, then $h$ is conserved. Furthermore, if
the transformation $\mathbf{r}_i = \mathbf{r}_i(q)$ does not depend explicitly on time and $V$ is
velocity-independent, then $h = T + V$ (the total energy).

_Proof._ Taking the total time derivative:

$$\frac{dh}{dt} = \sum_j \ddot{q}_j \frac{\partial L}{\partial \dot{q}_j} + \sum_j \dot{q}_j \frac{d}{dt}\frac{\partial L}{\partial \dot{q}_j} - \sum_j \frac{\partial L}{\partial q_j}\dot{q}_j - \sum_j \frac{\partial L}{\partial \dot{q}_j}\ddot{q}_j - \frac{\partial L}{\partial t}$$

The $\ddot{q}_j$ terms cancel. Using the Euler-Lagrange equation
$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_j} = \frac{\partial L}{\partial q_j}$:

$$\frac{dh}{dt} = -\frac{\partial L}{\partial t}$$

If $\partial L/\partial t = 0$Then $dh/dt = 0$.

For the second part, when $\mathbf{r}_i = \mathbf{r}_i(q)$ (scleronomic) and $V = V(q)$:

$$T = \frac{1}{2}\sum_{i,j,k} m_i \frac{\partial \mathbf{r}_i}{\partial q_j}\frac{\partial \mathbf{r}_i}{\partial q_k}\dot{q}_j\dot{q}_k$$

Is a homogeneous quadratic form in $\dot{q}_j$. By Euler's theorem for homogeneous functions:

$$\sum_j \dot{q}_j \frac{\partial T}{\partial \dot{q}_j} = 2T$$

Since $\partial L/\partial \dot{q}_j = \partial T/\partial \dot{q}_j$ (as $V$ is
velocity-independent):

$$h = \sum_j \dot{q}_j \frac{\partial T}{\partial \dot{q}_j} - T + V = 2T - T + V = T + V$$

$\blacksquare$

:::caution Common Pitfall The energy function $h$ equals $T + V$ only for natural systems
(scleronomic constraints and Velocity-independent potentials). For a bead on a rotating hoop
(rheonomic constraint), $h$ is Conserved but $h \neq T + V$. Always check whether the system is
natural before identifying $h$ With the total energy.
:::


