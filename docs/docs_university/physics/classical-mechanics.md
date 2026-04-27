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

### 1.2 Newton's Second Law in Various Coordinate Systems

In Cartesian coordinates the component equations are straightforward:

$$F_x = m\ddot{x}, \quad F_y = m\ddot{y}, \quad F_z = m\ddot{z}$$

In planar polar coordinates $(r, \phi)$, the acceleration decomposes into radial and transverse components:

$$\mathbf{a} = (\ddot{r} - r\dot{\phi}^2)\,\hat{\mathbf{r}} + (r\ddot{\phi} + 2\dot{r}\dot{\phi})\,\hat{\boldsymbol{\phi}}$$

so Newton's second law becomes:

$$F_r = m(\ddot{r} - r\dot{\phi}^2), \quad F_\phi = m(r\ddot{\phi} + 2\dot{r}\dot{\phi})$$

The term $-mr\dot{\phi}^2$ is the **centrifugal acceleration** and $2m\dot{r}\dot{\phi}$ is the **Coriolis acceleration**.

In cylindrical coordinates $(\rho, \phi, z)$:

$$\mathbf{a} = (\ddot{\rho} - \rho\dot{\phi}^2)\,\hat{\boldsymbol{\rho}} + (\rho\ddot{\phi} + 2\dot{\rho}\dot{\phi})\,\hat{\boldsymbol{\phi}} + \ddot{z}\,\hat{\mathbf{z}}$$

### 1.3 Worked Example: Block on an Inclined Plane with Friction

**Problem.** A block of mass $m$ slides down an inclined plane at angle $\alpha$ to the horizontal. The coefficient of kinetic friction is $\mu_k$. Find the acceleration.

*Solution.* Choose axes parallel and perpendicular to the incline. The normal force is $N = mg\cos\alpha$. The friction force is $f = \mu_k N = \mu_k mg\cos\alpha$ directed up the plane. Newton's second law along the plane:

$$ma = mg\sin\alpha - \mu_k mg\cos\alpha$$

$$a = g(\sin\alpha - \mu_k \cos\alpha)$$

The block accelerates when $\tan\alpha \gt{} \mu_k$ and decelerates otherwise. $\blacksquare$

### 1.4 Worked Example: Conical Pendulum

**Problem.** A mass $m$ is attached to a string of length $l$ and rotates in a horizontal circle of radius $r$ with the string making angle $\theta$ with the vertical. Find the angular velocity $\omega$.

*Solution.* The forces on the mass are tension $\mathbf{T}$ along the string and weight $mg$ downward. Newton's second law in the vertical direction:

$$T\cos\theta - mg = 0 \implies T = \frac{mg}{\cos\theta}$$

In the radial (horizontal) direction:

$$T\sin\theta = m\omega^2 r = m\omega^2 l\sin\theta$$

$$\frac{mg}{\cos\theta}\sin\theta = m\omega^2 l\sin\theta$$

$$\omega^2 = \frac{g}{l\cos\theta}$$

The period is $T = 2\pi/\omega = 2\pi\sqrt{l\cos\theta/g}$. $\blacksquare$

### 1.5 Conservation of Linear Momentum

**Theorem 1.1 (Conservation of Linear Momentum).** For a system of $N$ particles with no external forces, the total linear momentum is conserved.

*Proof.* Newton's second law for the $i$-th particle:

$$\mathbf{F}_i^{(\mathrm{ext})} + \sum_{j \neq i} \mathbf{F}_{ij} = m_i \dot{\mathbf{v}}_i$$

where $\mathbf{F}_{ij}$ is the force on particle $i$ due to particle $j$. By Newton's third law, $\mathbf{F}_{ij} = -\mathbf{F}_{ji}$. Summing over all particles:

$$\sum_i \mathbf{F}_i^{(\mathrm{ext})} + \sum_i \sum_{j \neq i} \mathbf{F}_{ij} = \frac{d}{dt}\sum_i m_i \mathbf{v}_i$$

The double sum vanishes by Newton's third law. Defining $\mathbf{P} = \sum_i m_i \mathbf{v}_i$:

$$\sum_i \mathbf{F}_i^{(\mathrm{ext})} = \dot{\mathbf{P}}$$

If there are no external forces, $\dot{\mathbf{P}} = 0$ and $\mathbf{P}$ is constant. $\blacksquare$

**Corollary.** The centre of mass moves as if all external forces acted on a single particle of mass $M = \sum_i m_i$ located at the centre of mass: $M\ddot{\mathbf{R}} = \sum_i \mathbf{F}_i^{(\mathrm{ext})}$.

### 1.6 Conservation of Energy

**Theorem 1.2 (Work-Energy Theorem).** The work done by the net force on a particle equals the change in its kinetic energy:

$$W = \int_{\mathbf{r}_1}^{\mathbf{r}_2} \mathbf{F} \cdot d\mathbf{r} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

*Proof.* Using Newton's second law:

$$W = \int m\mathbf{a} \cdot \mathbf{v}\, dt = \int m \frac{d\mathbf{v}}{dt} \cdot \mathbf{v}\, dt = \int m\mathbf{v} \cdot d\mathbf{v} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

$\blacksquare$

**Definition.** A force is **conservative** if the work done is path-independent, equivalently $\nabla \times \mathbf{F} = \mathbf{0}$, equivalently $\mathbf{F} = -\nabla V$ for some scalar potential $V(\mathbf{r})$.

**Theorem 1.3 (Conservation of Mechanical Energy).** If all forces are conservative, $E = T + V$ is conserved.

*Proof.* For a conservative force, $W = -\Delta V$. By the work-energy theorem:

$$-\Delta V = \Delta T \implies \Delta(T + V) = 0$$

$\blacksquare$

### 1.7 Conservation of Angular Momentum

**Theorem 1.4 (Conservation of Angular Momentum).** If the net external torque on a system vanishes, the total angular momentum is conserved.

*Proof.* The angular momentum of the $i$-th particle about the origin is $\mathbf{L}_i = \mathbf{r}_i \times m_i \mathbf{v}_i$. Taking the time derivative:

$$\dot{\mathbf{L}}_i = \dot{\mathbf{r}}_i \times m_i \mathbf{v}_i + \mathbf{r}_i \times m_i \dot{\mathbf{v}}_i = \mathbf{r}_i \times \mathbf{F}_i$$

since $\dot{\mathbf{r}}_i \times m_i \mathbf{v}_i = \mathbf{v}_i \times m_i \mathbf{v}_i = \mathbf{0}$. Summing over all particles:

$$\dot{\mathbf{L}} = \sum_i \mathbf{r}_i \times \mathbf{F}_i^{(\mathrm{ext})} + \sum_i \sum_{j \neq i} \mathbf{r}_i \times \mathbf{F}_{ij}$$

The double sum represents internal torques. For central internal forces ($\mathbf{F}_{ij}$ parallel to $\mathbf{r}_i - \mathbf{r}_j$), the internal torques cancel in pairs. Hence:

$$\dot{\mathbf{L}} = \boldsymbol{\tau}^{(\mathrm{ext})}$$

If $\boldsymbol{\tau}^{(\mathrm{ext})} = \mathbf{0}$, then $\mathbf{L} = \mathrm{const}$. $\blacksquare$

### 1.8 The Rocket Equation

**Definition.** The **rocket equation** (Tsiolkovsky equation) describes the motion of a rocket that expels mass at a constant exhaust velocity.

Consider a rocket of mass $m$ moving with velocity $v$ in one dimension. In time $dt$, it ejects mass $dm$ (where $dm \lt{} 0$) at exhaust velocity $u_e$ relative to the rocket. The ejected mass has velocity $v - u_e$ in the lab frame. By conservation of momentum:

$$mv = (m + dm)(v + dv) + (-dm)(v - u_e)$$

Neglecting the second-order term $dm\, dv$:

$$mv = mv + m\, dv + dm\, v - dm\, v + u_e\, dm$$

$$0 = m\, dv + u_e\, dm$$

$$dv = -u_e \frac{dm}{m}$$

Integrating from initial mass $m_0$ and velocity $v_0$ to final mass $m_f$ and velocity $v_f$:

$$v_f - v_0 = u_e \ln\frac{m_0}{m_f}$$

This is the **Tsiolkovsky rocket equation**.

**Theorem 1.5 (Rocket Equation with Gravity).** If the rocket moves vertically against a uniform gravitational field $g$:

$$\Delta v = u_e \ln\frac{m_0}{m_f} - g\, \Delta t$$

where $\Delta t$ is the burn time.

### 1.9 Worked Example: Rocket in Free Space

**Problem.** A rocket starts from rest with mass $m_0 = 1000\,\mathrm{kg}$ and exhaust velocity $u_e = 3000\,\mathrm{m/s}$. It burns fuel until its mass is $m_f = 400\,\mathrm{kg}$. Find the final velocity.

<details>
<summary>Solution</summary>

Applying the Tsiolkovsky rocket equation:

$$\Delta v = u_e \ln\frac{m_0}{m_f} = 3000 \ln\frac{1000}{400} = 3000 \ln(2.5) \approx 3000 \times 0.916 = 2749\,\mathrm{m/s}$$

$\blacksquare$

</details>

### 1.10 From Newton to Variational Principles

Newton's laws work well in Cartesian coordinates but become cumbersome in constrained systems or
non-Cartesian coordinates. The **Lagrangian** and **Hamiltonian** formulations provide a more general
and elegant framework based on energy principles.

The key insight: instead of tracking forces, track the **energy** of the system. The trajectory is the
one that **minimises** (or more precisely, makes stationary) the **action**.

:::caution Common Pitfall
Newton's laws in curvilinear coordinates introduce fictitious forces (centrifugal, Coriolis) that
are artifacts of the coordinate choice. The Lagrangian formulation automatically accounts for these
through the coordinate transformation of the kinetic energy, without any ad-hoc force terms.
:::

## 2. Generalised Coordinates and Constraints

### 2.1 Generalised Coordinates

A system with $n$ degrees of freedom can be described by $n$ **generalised coordinates**
$q_1, q_2, \ldots, q_n$, which may be angles, arc lengths, or any other set of parameters that
uniquely determines the configuration.

The Cartesian coordinates are functions of the generalised coordinates (and possibly time):

$$\mathbf{r}_i = \mathbf{r}_i(q_1, q_2, \ldots, q_n, t), \quad i = 1, \ldots, N$$

The velocities are:

$$\dot{\mathbf{r}}_i = \sum_{j=1}^n \frac{\partial \mathbf{r}_i}{\partial q_j}\dot{q}_j + \frac{\partial \mathbf{r}_i}{\partial t}$$

**Example.** A simple pendulum has one degree of freedom. We can use the angle $\theta$ from the
vertical as the generalised coordinate, rather than the Cartesian coordinates $(x, y)$ of the bob.

### 2.2 Constraints

**Holonomic constraints** relate the coordinates by equations:

$$f(\mathbf{r}_1, \mathbf{r}_2, \ldots, \mathbf{r}_N, t) = 0$$

A holonomic constraint reduces the number of degrees of freedom.

**Non-holonomic constraints** involve inequalities or non-integrable differential relations:

$$\sum_j a_j(q, t)\, dq_j + a_t(q, t)\, dt = 0$$

which cannot be integrated to yield a relation among the $q_j$ alone.

**Scleronomic constraints** do not depend explicitly on time. **Rheonomic constraints** do.

**Example.** A bead sliding on a fixed wire: the constraint $f(x,y) = 0$ is holonomic and scleronomic.
A bead on a wire that moves with time: holonomic and rheonomic.

### 2.3 Worked Example: Classifying Constraints

**Problem.** Classify the following constraints: (a) a particle on the surface of a sphere of radius $R$, (b) a rolling disk (vertical), (c) a particle constrained to $z \geq 0$, (d) a pendulum whose pivot oscillates as $x_0(t) = A\cos(\omega t)$.

<details>
<summary>Solution</summary>

(a) Constraint: $x^2 + y^2 + z^2 - R^2 = 0$. Holonomic (an equation relating coordinates), scleronomic (no explicit time dependence).

(b) A vertical disk of radius $a$ rolling without slipping on a horizontal plane. The rolling condition gives $dx - a\, d\theta = 0$ and $dy - a\sin\phi\, d\theta = 0$. These cannot be integrated to eliminate the angles, so they are non-holonomic, scleronomic.

(c) Constraint: $z \geq 0$. This is a non-holonomic constraint (an inequality, not an equation).

(d) The constraint is $x = A\cos(\omega t) + l\sin\theta$, which depends explicitly on $t$. Holonomic (can be written as an equation), rheonomic (explicit time dependence).

$\blacksquare$

</details>

### 2.4 Worked Example: Finding Generalised Coordinates

**Problem.** A rod of length $l$ and negligible mass has masses $m_1$ and $m_2$ at its ends. The rod slides on a frictionless horizontal table. Find suitable generalised coordinates.

<details>
<summary>Solution</summary>

The rod is in a plane, and the two masses have four Cartesian coordinates $(x_1, y_1, x_2, y_2)$. The constraint is the fixed distance: $(x_2 - x_1)^2 + (y_2 - y_1)^2 = l^2$. This is one holonomic scleronomic constraint, reducing the four coordinates to three degrees of freedom.

We can choose the centre of mass $(X, Y)$ and the angle $\theta$ the rod makes with the $x$-axis:

$$X = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}, \quad Y = \frac{m_1 y_1 + m_2 y_2}{m_1 + m_2}, \quad \theta = \arctan\frac{y_2 - y_1}{x_2 - x_1}$$

Then:

$$x_1 = X - \frac{m_2 l}{m_1 + m_2}\cos\theta, \quad y_1 = Y - \frac{m_2 l}{m_1 + m_2}\sin\theta$$

$$x_2 = X + \frac{m_1 l}{m_1 + m_2}\cos\theta, \quad y_2 = Y + \frac{m_1 l}{m_1 + m_2}\sin\theta$$

$\blacksquare$

</details>

### 2.5 Virtual Work and D'Alembert's Principle

A **virtual displacement** $\delta \mathbf{r}_i$ is an infinitesimal change in position consistent with
the constraints at a fixed instant in time ($\delta t = 0$).

**Definition (Virtual Work).** The virtual work of the forces is:

$$\delta W = \sum_{i=1}^N \mathbf{F}_i \cdot \delta \mathbf{r}_i$$

**Definition (Ideal Constraints).** Constraints are **ideal** if the virtual work of the constraint forces is zero:

$$\sum_{i=1}^N \mathbf{C}_i \cdot \delta \mathbf{r}_i = 0$$

where $\mathbf{C}_i$ is the constraint force on particle $i$.

**Theorem 2.1 (Principle of Virtual Work).** A system is in static equilibrium if and only if the virtual work of the applied forces vanishes for all virtual displacements consistent with the constraints.

*Proof.* In static equilibrium, $\mathbf{F}_i + \mathbf{C}_i = \mathbf{0}$ for each particle. Therefore:

$$\sum_i (\mathbf{F}_i + \mathbf{C}_i) \cdot \delta\mathbf{r}_i = 0$$

For ideal constraints, $\sum_i \mathbf{C}_i \cdot \delta\mathbf{r}_i = 0$, so $\sum_i \mathbf{F}_i \cdot \delta\mathbf{r}_i = 0$. Conversely, if the virtual work of applied forces vanishes for all admissible virtual displacements, the system must be in equilibrium (otherwise one could choose a virtual displacement in the direction of net force to get non-zero work). $\blacksquare$

**Theorem 2.2 (D'Alembert's Principle).** For a system of $N$ particles:

$$\sum_{i=1}^N (\mathbf{F}_i - m_i \ddot{\mathbf{r}}_i) \cdot \delta \mathbf{r}_i = 0$$

where $\mathbf{F}_i$ includes both applied and constraint forces. For ideal constraints, the
constraint forces do no virtual work, so only the applied forces contribute.

*Proof.* D'Alembert's principle extends the principle of virtual work to dynamics by treating $-m_i \ddot{\mathbf{r}}_i$ as a "fictitious force" (the **inertia force**). Starting from Newton's second law $\mathbf{F}_i + \mathbf{C}_i = m_i \ddot{\mathbf{r}}_i$:

$$\sum_i (\mathbf{F}_i + \mathbf{C}_i - m_i\ddot{\mathbf{r}}_i) \cdot \delta\mathbf{r}_i = 0$$

This is trivially true. For ideal constraints $\sum_i \mathbf{C}_i \cdot \delta\mathbf{r}_i = 0$, giving:

$$\sum_i (\mathbf{F}_i - m_i\ddot{\mathbf{r}}_i) \cdot \delta\mathbf{r}_i = 0$$

$\blacksquare$

## 3. Lagrangian Mechanics

### 3.1 The Lagrangian

The **Lagrangian** of a system is defined as

$$L(q_1, \ldots, q_n, \dot{q}_1, \ldots, \dot{q}_n, t) = T - V$$

where $T$ is the kinetic energy and $V$ is the potential energy.

### 3.2 Derivation of the Euler-Lagrange Equation from D'Alembert's Principle

**Theorem 3.1 (Euler-Lagrange from D'Alembert).** The equations of motion for a holonomic system with ideal constraints are:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) - \frac{\partial L}{\partial q_j} = 0, \quad j = 1, \ldots, n$$

*Proof.* Start from D'Alembert's principle with only applied forces (ideal constraints):

$$\sum_i (\mathbf{F}_i^{(\mathrm{app})} - m_i\ddot{\mathbf{r}}_i) \cdot \delta\mathbf{r}_i = 0$$

Express the virtual displacement in terms of generalised coordinates:

$$\delta\mathbf{r}_i = \sum_j \frac{\partial \mathbf{r}_i}{\partial q_j}\delta q_j$$

**First term (applied forces).** For a conservative system, $\mathbf{F}_i^{(\mathrm{app})} = -\nabla_i V$, so:

$$\sum_i \mathbf{F}_i^{(\mathrm{app})} \cdot \delta\mathbf{r}_i = -\sum_i \nabla_i V \cdot \sum_j \frac{\partial \mathbf{r}_i}{\partial q_j}\delta q_j = -\sum_j \frac{\partial V}{\partial q_j}\delta q_j$$

Defining the **generalised force** $Q_j = \sum_i \mathbf{F}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j}$, for conservative forces $Q_j = -\partial V/\partial q_j$.

**Second term (inertia).** Using $\frac{\partial \dot{\mathbf{r}}_i}{\partial \dot{q}_j} = \frac{\partial \mathbf{r}_i}{\partial q_j}$ (which holds when $\mathbf{r}_i = \mathbf{r}_i(q, t)$):

$$\sum_i m_i\ddot{\mathbf{r}}_i \cdot \delta\mathbf{r}_i = \sum_i m_i\ddot{\mathbf{r}}_i \cdot \sum_j \frac{\partial \mathbf{r}_i}{\partial q_j}\delta q_j = \sum_j \left[\sum_i m_i\ddot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j}\right]\delta q_j$$

Now:

$$\sum_i m_i\ddot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} = \frac{d}{dt}\left(\sum_i m_i\dot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j}\right) - \sum_i m_i\dot{\mathbf{r}}_i \cdot \frac{d}{dt}\frac{\partial \mathbf{r}_i}{\partial q_j}$$

Using $\frac{d}{dt}\frac{\partial \mathbf{r}_i}{\partial q_j} = \frac{\partial \dot{\mathbf{r}}_i}{\partial q_j}$ and $\frac{\partial \dot{\mathbf{r}}_i}{\partial \dot{q}_j} = \frac{\partial \mathbf{r}_i}{\partial q_j}$:

$$\sum_i m_i\ddot{\mathbf{r}}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} = \frac{d}{dt}\left(\sum_i m_i\dot{\mathbf{r}}_i \cdot \frac{\partial \dot{\mathbf{r}}_i}{\partial \dot{q}_j}\right) - \sum_i m_i\dot{\mathbf{r}}_i \cdot \frac{\partial \dot{\mathbf{r}}_i}{\partial q_j}$$

$$= \frac{d}{dt}\frac{\partial T}{\partial \dot{q}_j} - \frac{\partial T}{\partial q_j}$$

Combining both terms in D'Alembert's principle:

$$\sum_j \left[Q_j - \frac{d}{dt}\frac{\partial T}{\partial \dot{q}_j} + \frac{\partial T}{\partial q_j}\right]\delta q_j = 0$$

For conservative forces, $Q_j = -\partial V/\partial q_j$. Since $L = T - V$ and $V$ is independent of $\dot{q}_j$:

$$\sum_j \left[\frac{\partial L}{\partial q_j} - \frac{d}{dt}\frac{\partial L}{\partial \dot{q}_j}\right]\delta q_j = 0$$

Since the $\delta q_j$ are independent (and we have $n$ degrees of freedom):

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) - \frac{\partial L}{\partial q_j} = 0$$

$\blacksquare$

### 3.3 Hamilton's Principle (Action Formulation)

**Theorem 3.2 (Hamilton's Principle).** The actual path of a system between times $t_1$ and $t_2$ is
the one that makes the **action**

$$S = \int_{t_1}^{t_2} L(q, \dot{q}, t)\, dt$$

stationary.

**Theorem 3.3 (Euler-Lagrange Equation from Hamilton's Principle).** The path $q(t)$ that makes $S$ stationary satisfies

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

*Intuition.* Hamilton's principle says nature is "lazy": out of all possible paths connecting two configurations, the actual path taken is the one that makes the action stationary. This is a profound generalisation of Fermat's principle of least time in optics.

### 3.4 Worked Example: Simple Pendulum

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

### 3.5 Worked Example: Double Pendulum

**Problem.** Derive the equations of motion for a double pendulum: mass $m_1$ on rod $l_1$, mass $m_2$ on rod $l_2$ attached to $m_1$.

*Solution.* Generalised coordinates: angles $\theta_1, \theta_2$ from the vertical. Position of $m_1$:

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

The Euler-Lagrange equations for $\theta_1$ and $\theta_2$ yield two coupled second-order ODEs. For equal masses and lengths ($m_1 = m_2 = m$, $l_1 = l_2 = l$):

$$(m + m)l^2\ddot{\theta}_1 + ml^2\ddot{\theta}_2\cos(\theta_1 - \theta_2) + ml^2\dot{\theta}_2^2\sin(\theta_1 - \theta_2) + 2mgl\sin\theta_1 = 0$$

$$ml^2\ddot{\theta}_2 + ml^2\ddot{\theta}_1\cos(\theta_1 - \theta_2) - ml^2\dot{\theta}_1^2\sin(\theta_1 - \theta_2) + mgl\sin\theta_2 = 0$$

$\blacksquare$

### 3.6 Worked Example: Atwood Machine

**Problem.** Two masses $m_1$ and $m_2$ ($m_1 > m_2$) are connected by a massless inextensible string over a frictionless pulley. Find the acceleration using the Lagrangian.

<details>
<summary>Solution</summary>

Choose the vertical displacement $x$ of $m_1$ (downward positive) as the generalised coordinate. Since the string is inextensible, $m_2$ moves up by $x$.

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

**Problem.** A bead of mass $m$ slides without friction on a circular hoop of radius $R$. The hoop rotates about a vertical diameter with constant angular velocity $\omega$. Find the equilibrium positions and their stability.

<details>
<summary>Solution</summary>

Use the angle $\theta$ from the bottom of the hoop as the generalised coordinate. The position of the bead in cylindrical coordinates $(\rho, \phi, z)$:

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

Equilibrium ($\ddot{\theta} = 0$, $\dot{\theta} = 0$): $\sin\theta = 0$ giving $\theta = 0$ (bottom), or $\cos\theta = g/(R\omega^2)$ which exists only when $\omega^2 \gt{} g/R$.

For $\omega^2 \lt{} g/R$: only $\theta = 0$ is stable.
For $\omega^2 \gt{} g/R$: the bottom becomes unstable and the new equilibria at $\cos\theta = g/(R\omega^2)$ are stable.

$\blacksquare$

</details>

### 3.8 Cyclic Coordinates and Conserved Quantities

**Definition.** A coordinate $q_j$ is **cyclic** (or **ignorable**) if it does not appear explicitly in the Lagrangian: $\partial L / \partial q_j = 0$.

**Theorem 3.4.** If $q_j$ is cyclic, the conjugate generalised momentum $p_j = \partial L / \partial \dot{q}_j$ is a constant of motion.

*Proof.* The Euler-Lagrange equation for a cyclic coordinate is:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) = 0 \implies p_j = \mathrm{const}$$

$\blacksquare$

*Intuition.* Cyclic coordinates correspond to symmetries of the system. Each symmetry gives a conserved quantity --- this is the essence of Noether's theorem (Section 5).

### 3.9 Lagrange Multipliers for Constraints

When holonomic constraints cannot be eliminated by coordinate choice, introduce Lagrange multipliers
$\lambda_a$:

$$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_j} - \frac{\partial L}{\partial q_j} = \sum_a \lambda_a \frac{\partial f_a}{\partial q_j}$$

The multipliers $\lambda_a$ are proportional to the constraint forces.

### 3.10 The Energy Function and Its Relation to the Hamiltonian

**Definition.** The **energy function** (also called the Jacobi integral) is:

$$h = \sum_j \dot{q}_j \frac{\partial L}{\partial \dot{q}_j} - L$$

**Theorem 3.5.** If $L$ does not depend explicitly on time, then $h$ is conserved. Furthermore, if the transformation $\mathbf{r}_i = \mathbf{r}_i(q)$ does not depend explicitly on time and $V$ is velocity-independent, then $h = T + V$ (the total energy).

*Proof.* Taking the total time derivative:

$$\frac{dh}{dt} = \sum_j \ddot{q}_j \frac{\partial L}{\partial \dot{q}_j} + \sum_j \dot{q}_j \frac{d}{dt}\frac{\partial L}{\partial \dot{q}_j} - \sum_j \frac{\partial L}{\partial q_j}\dot{q}_j - \sum_j \frac{\partial L}{\partial \dot{q}_j}\ddot{q}_j - \frac{\partial L}{\partial t}$$

The $\ddot{q}_j$ terms cancel. Using the Euler-Lagrange equation $\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_j} = \frac{\partial L}{\partial q_j}$:

$$\frac{dh}{dt} = -\frac{\partial L}{\partial t}$$

If $\partial L/\partial t = 0$, then $dh/dt = 0$.

For the second part, when $\mathbf{r}_i = \mathbf{r}_i(q)$ (scleronomic) and $V = V(q)$:

$$T = \frac{1}{2}\sum_{i,j,k} m_i \frac{\partial \mathbf{r}_i}{\partial q_j}\frac{\partial \mathbf{r}_i}{\partial q_k}\dot{q}_j\dot{q}_k$$

is a homogeneous quadratic form in $\dot{q}_j$. By Euler's theorem for homogeneous functions:

$$\sum_j \dot{q}_j \frac{\partial T}{\partial \dot{q}_j} = 2T$$

Since $\partial L/\partial \dot{q}_j = \partial T/\partial \dot{q}_j$ (as $V$ is velocity-independent):

$$h = \sum_j \dot{q}_j \frac{\partial T}{\partial \dot{q}_j} - T + V = 2T - T + V = T + V$$

$\blacksquare$

:::caution Common Pitfall
The energy function $h$ equals $T + V$ only for natural systems (scleronomic constraints and
velocity-independent potentials). For a bead on a rotating hoop (rheonomic constraint), $h$ is
conserved but $h \neq T + V$. Always check whether the system is natural before identifying $h$
with the total energy.
:::

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

### 4.3 Worked Example: Legendre Transform for the Harmonic Oscillator

**Problem.** A one-dimensional harmonic oscillator has $L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2$. Find the Hamiltonian.

<details>
<summary>Solution</summary>

The conjugate momentum:

$$p = \frac{\partial L}{\partial \dot{x}} = m\dot{x} \implies \dot{x} = \frac{p}{m}$$

The Hamiltonian:

$$H = p\dot{x} - L = p\frac{p}{m} - \frac{1}{2}m\frac{p^2}{m^2} + \frac{1}{2}kx^2 = \frac{p^2}{2m} + \frac{1}{2}kx^2$$

This is $T + V$ as expected for a natural system. Hamilton's equations give:

$$\dot{x} = \frac{\partial H}{\partial p} = \frac{p}{m}, \quad \dot{p} = -\frac{\partial H}{\partial x} = -kx$$

Combining: $\ddot{x} = \dot{p}/m = -kx/m$, i.e., $\ddot{x} + (k/m)x = 0$. $\blacksquare$

</details>

### 4.4 Worked Example: Legendre Transform for the Simple Pendulum

**Problem.** Find the Hamiltonian for a simple pendulum of mass $m$ and length $l$.

<details>
<summary>Solution</summary>

From Section 3.4, $L = \frac{1}{2}ml^2\dot{\theta}^2 + mgl\cos\theta$.

Conjugate momentum:

$$p_\theta = \frac{\partial L}{\partial \dot{\theta}} = ml^2\dot{\theta} \implies \dot{\theta} = \frac{p_\theta}{ml^2}$$

Hamiltonian:

$$H = p_\theta\dot{\theta} - L = \frac{p_\theta^2}{ml^2} - \frac{p_\theta^2}{2ml^2} - mgl\cos\theta = \frac{p_\theta^2}{2ml^2} - mgl\cos\theta$$

Hamilton's equations:

$$\dot{\theta} = \frac{\partial H}{\partial p_\theta} = \frac{p_\theta}{ml^2}, \quad \dot{p}_\theta = -\frac{\partial H}{\partial \theta} = -mgl\sin\theta$$

$\blacksquare$

</details>

### 4.5 Hamilton's Equations

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

### 4.6 Phase Space

Hamiltonian mechanics naturally lives in **phase space**: the $2n$-dimensional space with coordinates
$(q_1, \ldots, q_n, p_1, \ldots, p_n)$. Each point in phase space represents a complete state of the
system (positions and momenta).

A **phase portrait** is the collection of trajectories in phase space. For a 1D harmonic oscillator, the trajectories are ellipses in the $(x, p)$ plane.

### 4.7 Liouville's Theorem

**Theorem 4.2 (Liouville's Theorem).** The flow in phase space is **incompressible**: the phase space volume is conserved along trajectories. Equivalently, the phase space density $\rho(q, p, t)$ satisfies:

$$\frac{d\rho}{dt} = \frac{\partial \rho}{\partial t} + \sum_j \left(\frac{\partial \rho}{\partial q_j}\dot{q}_j + \frac{\partial \rho}{\partial p_j}\dot{p}_j\right) = 0$$

*Proof.* Consider a volume $\Omega$ in phase space. The rate of change of the volume is:

$$\frac{d}{dt}\int_\Omega \rho\, dq\, dp = \int_\Omega \frac{\partial \rho}{\partial t}\, dq\, dp$$

By the continuity equation in $2n$ dimensions:

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0$$

where $\mathbf{v} = (\dot{q}_1, \ldots, \dot{q}_n, \dot{p}_1, \ldots, \dot{p}_n)$ is the phase space velocity. Using Hamilton's equations:

$$\nabla \cdot \mathbf{v} = \sum_j \frac{\partial \dot{q}_j}{\partial q_j} + \sum_j \frac{\partial \dot{p}_j}{\partial p_j} = \sum_j \frac{\partial^2 H}{\partial q_j \partial p_j} - \sum_j \frac{\partial^2 H}{\partial p_j \partial q_j} = 0$$

by equality of mixed partial derivatives. Therefore:

$$\frac{\partial \rho}{\partial t} + \rho\,(\nabla \cdot \mathbf{v}) + \mathbf{v} \cdot \nabla\rho = \frac{\partial \rho}{\partial t} + \mathbf{v} \cdot \nabla\rho = \frac{d\rho}{dt} = 0$$

$\blacksquare$

*Intuition.* Liouville's theorem is the classical analogue of unitarity in quantum mechanics. It tells us that phase space volume is conserved --- like an incompressible fluid flowing through phase space. This underlies the ergodic hypothesis of statistical mechanics.

### 4.8 Poisson Brackets

**Definition.** The **Poisson bracket** of two functions $f(q, p, t)$ and $g(q, p, t)$ is:

$$\{f, g\} = \sum_{j=1}^n \left(\frac{\partial f}{\partial q_j}\frac{\partial g}{\partial p_j} - \frac{\partial f}{\partial p_j}\frac{\partial g}{\partial q_j}\right)$$

**Theorem 4.3 (Equations of Motion via Poisson Brackets).** For any function $f(q, p, t)$:

$$\frac{df}{dt} = \frac{\partial f}{\partial t} + \{f, H\}$$

In particular, Hamilton's equations become:

$$\dot{q}_j = \{q_j, H\}, \quad \dot{p}_j = \{p_j, H\}$$

*Proof.* Using the chain rule:

$$\frac{df}{dt} = \frac{\partial f}{\partial t} + \sum_j \left(\frac{\partial f}{\partial q_j}\dot{q}_j + \frac{\partial f}{\partial p_j}\dot{p}_j\right)$$

Substituting Hamilton's equations:

$$\frac{df}{dt} = \frac{\partial f}{\partial t} + \sum_j \left(\frac{\partial f}{\partial q_j}\frac{\partial H}{\partial p_j} - \frac{\partial f}{\partial p_j}\frac{\partial H}{\partial q_j}\right) = \frac{\partial f}{\partial t} + \{f, H\}$$

$\blacksquare$

**Properties of Poisson Brackets.**

**Theorem 4.4.** The Poisson bracket satisfies:

1. **Antisymmetry:** $\{f, g\} = -\{g, f\}$
2. **Linearity:** $\{af + bg, h\} = a\{f, h\} + b\{g, h\}$ for constants $a, b$
3. **Leibniz rule:** $\{fg, h\} = f\{g, h\} + \{f, h\}g$
4. **Jacobi identity:** $\{f, \{g, h\}\} + \{g, \{h, f\}\} + \{h, \{f, g\}\} = 0$

*Proof.* Properties (1)--(3) follow directly from the definition. For the Jacobi identity, write out the terms explicitly:

$$\{f, \{g, h\}\} = \sum_j \frac{\partial f}{\partial q_j}\frac{\partial}{\partial p_j}\sum_k \left(\frac{\partial g}{\partial q_k}\frac{\partial h}{\partial p_k} - \frac{\partial g}{\partial p_k}\frac{\partial h}{\partial q_k}\right) - \sum_j \frac{\partial f}{\partial p_j}\frac{\partial}{\partial q_j}\sum_k \left(\frac{\partial g}{\partial q_k}\frac{\partial h}{\partial p_k} - \frac{\partial g}{\partial p_k}\frac{\partial h}{\partial q_k}\right)$$

Expanding and collecting terms, the second-order mixed partial derivatives cancel in groups of three (by equality of mixed partials), yielding the Jacobi identity. $\blacksquare$

**Theorem 4.5.** A quantity $f$ is a constant of motion if and only if $\partial f/\partial t + \{f, H\} = 0$. If $f$ does not depend explicitly on time, $f$ is conserved if and only if $\{f, H\} = 0$.

*Proof.* Immediate from Theorem 4.3 with $df/dt = 0$. $\blacksquare$

**Fundamental Poisson Brackets:**

$$\{q_j, q_k\} = 0, \quad \{p_j, p_k\} = 0, \quad \{q_j, p_k\} = \delta_{jk}$$

### 4.9 The Hamilton-Jacobi Equation

**Definition.** Hamilton's principal function $S(q, t)$ is the action evaluated along the classical path from $(q_0, t_0)$ to $(q, t)$.

**Theorem 4.6 (Hamilton-Jacobi Equation).** The function $S$ satisfies:

$$H\left(q_1, \ldots, q_n, \frac{\partial S}{\partial q_1}, \ldots, \frac{\partial S}{\partial q_n}, t\right) + \frac{\partial S}{\partial t} = 0$$

This is a first-order nonlinear PDE in $n + 1$ variables.

*Proof.* The action from $t_0$ to $t$ is $S = \int_{t_0}^{t} L\, dt'$. The total time derivative is:

$$\frac{dS}{dt} = L$$

But $S = S(q_1(t), \ldots, q_n(t), t)$, so by the chain rule:

$$\frac{dS}{dt} = \sum_j \frac{\partial S}{\partial q_j}\dot{q}_j + \frac{\partial S}{\partial t} = L$$

From the definition of the conjugate momentum, $p_j = \partial L/\partial \dot{q}_j = \partial S/\partial q_j$ (this can be shown rigorously by varying the endpoint). Therefore:

$$L = \sum_j p_j \dot{q}_j + \frac{\partial S}{\partial t} = H + \frac{\partial S}{\partial t}$$

Since $dS/dt = L$:

$$H + \frac{\partial S}{\partial t} = L = \sum_j p_j\dot{q}_j + \frac{\partial S}{\partial t}$$

which gives $H + \partial S/\partial t = 0$. $\blacksquare$

*Intuition.* The Hamilton-Jacobi equation is the bridge between classical and quantum mechanics. Schrodinger's equation can be obtained from it via the substitution $S = -i\hbar \ln\psi$ (up to constants), making $S$ the classical limit of the quantum phase.

**Separation of Variables.** If $H$ does not depend explicitly on $t$, write $S(q, t) = W(q) - Et$. Then the time-independent Hamilton-Jacobi equation is:

$$H\left(q_1, \ldots, q_n, \frac{\partial W}{\partial q_1}, \ldots, \frac{\partial W}{\partial q_n}\right) = E$$

where $W$ is **Hamilton's characteristic function** and $E$ is the constant energy.

### 4.10 Worked Example: Hamilton-Jacobi for the Harmonic Oscillator

**Problem.** Solve the Hamilton-Jacobi equation for a 1D harmonic oscillator with $H = p^2/(2m) + kx^2/2$.

<details>
<summary>Solution</summary>

Since $H$ is time-independent, write $S(x, t) = W(x) - Et$. The HJ equation becomes:

$$\frac{1}{2m}\left(\frac{dW}{dx}\right)^2 + \frac{1}{2}kx^2 = E$$

$$\frac{dW}{dx} = \sqrt{2mE - mkx^2}$$

Integrating:

$$W(x) = \int \sqrt{2mE - mkx^2}\, dx$$

Let $x = \sqrt{2E/k}\sin\alpha$, then $dx = \sqrt{2E/k}\cos\alpha\, d\alpha$:

$$W = \frac{2E}{\omega}\int_0^\alpha \cos^2\alpha'\, d\alpha' = \frac{E}{\omega}\left(\alpha + \frac{1}{2}\sin 2\alpha\right)$$

where $\omega = \sqrt{k/m}$. The solution gives $x(t) = \sqrt{2E/k}\sin(\omega t + \delta)$ as expected.

$\blacksquare$

</details>

:::caution Common Pitfall
The Lagrangian and Hamiltonian formulations are equivalent only when the Legendre transform from $L$
to $H$ is regular. If $\det(\partial^2 L / \partial \dot{q}_i \partial \dot{q}_j) = 0$, the system
has **constraints** and the Hamiltonian formulation requires special treatment (Dirac brackets or
constraint analysis).
:::

## 5. Noether's Theorem and Conservation Laws

### 5.1 Statement of Noether's Theorem

**Theorem 5.1 (Noether's Theorem).** For every continuous symmetry of the action, there is a
corresponding conserved quantity.

More precisely: if the action is invariant (up to a boundary term) under the infinitesimal transformation
$q_j \to q_j + \epsilon f_j(q, \dot{q}, t)$, then

$$Q = \sum_j \frac{\partial L}{\partial \dot{q}_j} f_j$$

is a constant of motion.

### 5.2 Full Proof of Noether's Theorem

**Theorem 5.2 (Noether's Theorem --- Full Proof).** Suppose the Lagrangian transforms under an infinitesimal transformation $q_j \to q_j + \epsilon \delta q_j$ as:

$$L \to L + \epsilon \frac{dF}{dt}$$

for some function $F(q, t)$. Then the quantity

$$Q = \sum_j p_j\, \delta q_j - F$$

is conserved.

*Proof.* The variation of the action is:

$$\delta S = \int_{t_1}^{t_2} \left[\sum_j \left(\frac{\partial L}{\partial q_j}\delta q_j + \frac{\partial L}{\partial \dot{q}_j}\delta\dot{q}_j\right)\right] dt = \int_{t_1}^{t_2} \frac{dF}{dt}\, dt$$

where the second equality uses the assumption that the action changes by at most a boundary term. Using the Euler-Lagrange equations $\frac{\partial L}{\partial q_j} = \frac{d}{dt}\frac{\partial L}{\partial \dot{q}_j}$:

$$\delta S = \int_{t_1}^{t_2} \sum_j \left[\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right)\delta q_j + \frac{\partial L}{\partial \dot{q}_j}\frac{d}{dt}\delta q_j\right] dt$$

$$= \int_{t_1}^{t_2} \frac{d}{dt}\left(\sum_j p_j\, \delta q_j\right) dt$$

Setting this equal to $\int_{t_1}^{t_2} \frac{dF}{dt}\, dt$:

$$\frac{d}{dt}\left(\sum_j p_j\, \delta q_j - F\right) = 0$$

Therefore $Q = \sum_j p_j\, \delta q_j - F$ is constant. $\blacksquare$

### 5.3 Worked Example: Spatial Translation and Linear Momentum

**Problem.** Show that spatial translation invariance implies conservation of linear momentum.

<details>
<summary>Solution</summary>

Consider an infinitesimal translation $x \to x + \epsilon$, i.e., $\delta x = 1$, $\delta y = 0$, $\delta z = 0$.

For a free particle, $L = \frac{1}{2}m(\dot{x}^2 + \dot{y}^2 + \dot{z}^2)$, which is clearly invariant ($\delta L = 0$, so $F = 0$).

By Noether's theorem:

$$Q = p_x \cdot 1 + p_y \cdot 0 + p_z \cdot 0 - 0 = p_x = \mathrm{const}$$

This is conservation of the $x$-component of linear momentum. Translation invariance in all three directions gives conservation of the full momentum vector $\mathbf{p}$. $\blacksquare$

</details>

### 5.4 Worked Example: Rotation and Angular Momentum

**Problem.** Show that rotational invariance implies conservation of angular momentum.

<details>
<summary>Solution</summary>

Consider an infinitesimal rotation by angle $\epsilon$ about the $z$-axis:

$$\delta x = -\epsilon y, \quad \delta y = \epsilon x, \quad \delta z = 0$$

For a free particle, $\delta L = m(\dot{x}\,\delta\dot{x} + \dot{y}\,\delta\dot{y}) = m(\dot{x}(-\epsilon\dot{y}) + \dot{y}(\epsilon\dot{x})) = 0$, so $F = 0$.

By Noether's theorem:

$$Q = p_x(-y) + p_y(x) - 0 = x\, p_y - y\, p_x = L_z$$

This is the $z$-component of angular momentum. Full rotational invariance gives conservation of the entire angular momentum vector $\mathbf{L} = \mathbf{r} \times \mathbf{p}$. $\blacksquare$

</details>

### 5.5 Worked Example: Time Translation and Energy

**Problem.** Show that time translation invariance implies conservation of energy.

<details>
<summary>Solution</summary>

Consider an infinitesimal time translation $t \to t + \epsilon$. The coordinates transform as $q_j(t) \to q_j(t + \epsilon) \approx q_j(t) + \epsilon \dot{q}_j(t)$, so $\delta q_j = \dot{q}_j$.

If $L$ does not depend explicitly on time, then:

$$\delta L = \sum_j \left(\frac{\partial L}{\partial q_j}\dot{q}_j + \frac{\partial L}{\partial \dot{q}_j}\ddot{q}_j\right)\epsilon = \frac{dL}{dt}\epsilon = \frac{d}{dt}\left(\epsilon L\right)$$

So $F = \epsilon L$, giving $F = L$ (per unit $\epsilon$).

By Noether's theorem:

$$Q = \sum_j p_j \dot{q}_j - L = h$$

This is the energy function, which equals $T + V$ for natural systems. $\blacksquare$

</details>

### 5.6 Summary: Symmetry-Conservation Correspondence

| Symmetry | Transformation | Conserved Quantity |
|---|---|---|
| Time translation | $t \to t + \epsilon$ | Energy $H$ |
| Spatial translation | $x \to x + \epsilon$ | Linear momentum $p_x$ |
| Rotation about $z$ | $\phi \to \phi + \epsilon$ | Angular momentum $L_z$ |
| Galilean boost | $x \to x + \epsilon t$ | Centre-of-mass motion |

### 5.7 Worked Example: Central Potential

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

### 6.2 Effective Potential Analysis

**Definition.** The **effective one-dimensional energy** is:

$$E = \frac{1}{2}m\dot{r}^2 + V_{\mathrm{eff}}(r)$$

Since $E$ and $l$ are conserved, the radial motion is completely determined by $V_{\mathrm{eff}}(r)$.

**Circular orbits** occur at radii $r_0$ where $V_{\mathrm{eff}}'(r_0) = 0$:

$$V'(r_0) - \frac{l^2}{mr_0^3} = 0$$

The orbit is **stable** if $V_{\mathrm{eff}}''(r_0) \gt{} 0$ and **unstable** if $V_{\mathrm{eff}}''(r_0) \lt{} 0$.

For the Kepler problem $V(r) = -k/r$:

$$V_{\mathrm{eff}}(r) = -\frac{k}{r} + \frac{l^2}{2mr^2}$$

$$V_{\mathrm{eff}}'(r) = \frac{k}{r^2} - \frac{l^2}{mr^3} = 0 \implies r_0 = \frac{l^2}{mk}$$

$$V_{\mathrm{eff}}''(r_0) = -\frac{2k}{r_0^3} + \frac{3l^2}{mr_0^4} = \frac{m^3k^2}{l^4} \gt{} 0$$

so the circular orbit is always stable for the Kepler problem.

### 6.3 The Orbit Equation

Starting from conservation of energy and angular momentum, we derive the orbit equation. Let $u = 1/r$ and use $d/dt = (l/mr^2)\, d/d\phi = (lu^2/m)\, d/d\phi$:

$$\dot{r} = \frac{dr}{dt} = \frac{l}{mr^2}\frac{dr}{d\phi} = -\frac{l}{m}\frac{du}{d\phi}$$

Substituting into the energy equation:

$$E = \frac{l^2}{2m}\left(\frac{du}{d\phi}\right)^2 + \frac{l^2 u^2}{2m} + V\left(\frac{1}{u}\right)$$

Differentiating with respect to $\phi$:

$$\frac{l^2}{m}\frac{du}{d\phi}\frac{d^2u}{d\phi^2} + \frac{l^2 u}{m}\frac{du}{d\phi} - \frac{1}{u^2}V'\left(\frac{1}{u}\right)\frac{du}{d\phi} = 0$$

Dividing by $l^2 u'/(m)$ (assuming $u' \neq 0$):

$$\frac{d^2u}{d\phi^2} + u = -\frac{m}{l^2 u^2}V'\left(\frac{1}{u}\right)$$

This is the **Binet equation**.

### 6.4 The Kepler Problem

For $V(r) = -k/r$ (gravitational or Coulomb potential):

$$V'\left(\frac{1}{u}\right) = \frac{dV}{dr} = \frac{k}{r^2} = ku^2$$

The Binet equation becomes:

$$\frac{d^2u}{d\phi^2} + u = \frac{mk}{l^2}$$

This is an inhomogeneous ODE with solution:

$$u(\phi) = \frac{mk}{l^2}(1 + e\cos(\phi - \phi_0))$$

where $e$ is the **eccentricity** and $\phi_0$ is a constant. Setting $\phi_0 = 0$:

$$r(\phi) = \frac{l^2/(mk)}{1 + e\cos\phi} = \frac{p}{1 + e\cos\phi}$$

where $p = l^2/(mk)$ is the **semi-latus rectum**.

The eccentricity is determined by the energy:

$$e = \sqrt{1 + \frac{2El^2}{mk^2}}$$

**Classification of orbits:**

| Energy | Eccentricity | Orbit Type |
|---|---|---|
| $E \lt{} 0$ | $e \lt{} 1$ | Ellipse (bound) |
| $E = 0$ | $e = 1$ | Parabola (marginally bound) |
| $E \gt{} 0$ | $e \gt{} 1$ | Hyperbola (unbound) |

**Bertrand's Theorem:** The only central potentials that give closed orbits for all bound states are
$V(r) \propto 1/r$ (Kepler/Coulomb) and $V(r) \propto r^2$ (harmonic oscillator).

**Key results for Kepler orbits:**

- Orbits are conic sections (ellipses, parabolas, or hyperbolas).
- The semi-major axis $a$ satisfies $E = -k/(2a)$ for bound orbits.
- The period is $T = 2\pi\sqrt{ma^3/k}$ (Kepler's third law).

### 6.5 Worked Example: Satellite Orbit

**Problem.** A satellite of mass $m$ orbits Earth ($M = 5.97 \times 10^{24}\,\mathrm{kg}$) in an elliptical orbit with perigee (closest approach) $r_p = 7000\,\mathrm{km}$ and apogee (farthest point) $r_a = 42000\,\mathrm{km}$. Find the eccentricity, semi-major axis, and orbital period.

<details>
<summary>Solution</summary>

The semi-major axis is $a = (r_p + r_a)/2 = (7000 + 42000)/2 = 24500\,\mathrm{km}$.

From the orbit equation, at perigee ($\phi = 0$): $r_p = p/(1 + e)$, and at apogee ($\phi = \pi$): $r_a = p/(1 - e)$.

Therefore:

$$e = \frac{r_a - r_p}{r_a + r_p} = \frac{42000 - 7000}{42000 + 7000} = \frac{35000}{49000} \approx 0.714$$

The energy is $E = -k/(2a)$ where $k = GMm = 6.674 \times 10^{-11} \times 5.97 \times 10^{24} \times m = 3.986 \times 10^{14} m\,\mathrm{m}^3/\mathrm{s}^2$.

The period (independent of mass $m$):

$$T = 2\pi\sqrt{\frac{ma^3}{k}} = 2\pi\sqrt{\frac{a^3}{GM}} = 2\pi\sqrt{\frac{(2.45 \times 10^7)^3}{3.986 \times 10^{14}}}$$

$$= 2\pi\sqrt{\frac{1.471 \times 10^{22}}{3.986 \times 10^{14}}} = 2\pi\sqrt{3.691 \times 10^7} \approx 2\pi \times 6075 \approx 38170\,\mathrm{s} \approx 10.6\,\mathrm{hours}$$

$\blacksquare$

</details>

### 6.6 Worked Example: Rutherford Scattering

**Problem.** A particle of mass $m$ and energy $E \gt{} 0$ is scattered by a repulsive Coulomb potential $V(r) = k/r$ ($k \gt{} 0$). Find the scattering angle $\Theta$ as a function of the impact parameter $b$.

<details>
<summary>Solution</summary>

The angular momentum is $l = mv_\infty b$ where $v_\infty = \sqrt{2E/m}$. The eccentricity is:

$$e = \sqrt{1 + \frac{2El^2}{mk^2}} = \sqrt{1 + \left(\frac{2Eb}{k/m}\right)^2}$$

The orbit is a hyperbola. The asymptotic angles satisfy $r \to \infty$, i.e., $1 + e\cos\phi = 0$, giving $\phi_{\pm} = \pi \pm \arccos(1/e)$. The scattering angle is:

$$\Theta = \pi - 2\arccos(1/e) = 2\arcsin(1/e)$$

Using $\sin(\Theta/2) = 1/e$:

$$\cot\frac{\Theta}{2} = \frac{2Eb}{k/m} = \frac{mv_\infty^2 b}{k/m}$$

This is the **Rutherford scattering formula** relating the scattering angle to the impact parameter. $\blacksquare$

</details>

## 7. Small Oscillations and Normal Modes

### 7.1 Equilibrium and Small Oscillations

At a stable equilibrium, $V$ has a local minimum. Expanding around equilibrium ($q_j = q_j^0 + \eta_j$):

$$L \approx \frac{1}{2}\sum_{j,k} T_{jk}\dot{\eta}_j\dot{\eta}_k - \frac{1}{2}\sum_{j,k} V_{jk}\eta_j\eta_k$$

where $T_{jk} = \frac{\partial^2 T}{\partial \dot{q}_j \partial \dot{q}_k}\bigg|_0$ is the (constant)
mass matrix and $V_{jk} = \frac{\partial^2 V}{\partial q_j \partial q_k}\bigg|_0$ is the (constant)
stiffness matrix.

Both $T_{jk}$ and $V_{jk}$ are symmetric matrices. $T$ is positive definite (kinetic energy is always positive), and $V$ is positive definite at a stable equilibrium.

### 7.2 Matrix Formulation

Writing the Lagrangian in matrix form:

$$L = \frac{1}{2}\dot{\boldsymbol{\eta}}^T \mathbf{T}\, \dot{\boldsymbol{\eta}} - \frac{1}{2}\boldsymbol{\eta}^T \mathbf{V}\, \boldsymbol{\eta}$$

The Euler-Lagrange equations become:

$$\mathbf{T}\, \ddot{\boldsymbol{\eta}} + \mathbf{V}\, \boldsymbol{\eta} = \mathbf{0}$$

### 7.3 Normal Modes and the Secular Equation

Assuming solutions of the form $\eta_j = a_j e^{i\omega t}$, the eigenvalue problem is:

$$(\mathbf{V} - \omega^2 \mathbf{T})\mathbf{a} = \mathbf{0}$$

The **secular equation** (characteristic equation) is:

$$\det(\mathbf{V} - \omega^2 \mathbf{T}) = 0$$

This is a polynomial of degree $n$ in $\omega^2$ whose roots are the squared normal mode frequencies $\omega_\alpha^2$.

**Theorem 7.1.** For a stable system, all normal mode frequencies are real and positive. The normal
modes are orthogonal with respect to both $\mathbf{T}$ and $\mathbf{V}$.

*Proof.* Since $\mathbf{T}$ is positive definite, we can write $\mathbf{T} = \mathbf{L}\mathbf{L}^T$ (Cholesky decomposition). Defining $\boldsymbol{\xi} = \mathbf{L}^T\mathbf{a}$ and $\mathbf{W} = \mathbf{L}^{-1}\mathbf{V}\mathbf{L}^{-T}$, the eigenvalue problem becomes $\mathbf{W}\boldsymbol{\xi} = \omega^2\boldsymbol{\xi}$. Since $\mathbf{W}$ is symmetric and $\mathbf{V}$ is positive definite, all eigenvalues $\omega^2$ are real and positive. Orthogonality follows from the symmetry of $\mathbf{W}$. $\blacksquare$

### 7.4 Orthogonality of Normal Modes

**Theorem 7.2.** The normal mode vectors $\mathbf{a}^{(\alpha)}$ satisfy:

$$\sum_{j,k} a_j^{(\alpha)} T_{jk} a_k^{(\beta)} = T_\alpha\, \delta_{\alpha\beta}, \quad \sum_{j,k} a_j^{(\alpha)} V_{jk} a_k^{(\beta)} = \omega_\alpha^2 T_\alpha\, \delta_{\alpha\beta}$$

where $T_\alpha$ is a normalisation constant.

This allows us to expand any motion as a superposition of normal modes.

### 7.5 Worked Example: Coupled Pendulums

**Problem.** Two identical simple pendulums of length $l$ and mass $m$ are coupled by a spring of constant $k$ connecting the bobs. Find the normal modes and frequencies.

<details>
<summary>Solution</summary>

Let $\theta_1$ and $\theta_2$ be the small angles from vertical. The separation between bobs (to first order) is approximately $l(\theta_2 - \theta_1)$, so the spring potential energy is $\frac{1}{2}k l^2(\theta_2 - \theta_1)^2$.

Kinetic energy:

$$T = \frac{1}{2}ml^2\dot{\theta}_1^2 + \frac{1}{2}ml^2\dot{\theta}_2^2$$

Potential energy (gravitational + spring):

$$V = \frac{1}{2}mgl\theta_1^2 + \frac{1}{2}mgl\theta_2^2 + \frac{1}{2}kl^2(\theta_2 - \theta_1)^2$$

$$= \frac{1}{2}(mgl + kl^2)\theta_1^2 + \frac{1}{2}(mgl + kl^2)\theta_2^2 - kl^2\theta_1\theta_2$$

The mass matrix and stiffness matrix are:

$$\mathbf{T} = ml^2 \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad \mathbf{V} = \begin{pmatrix} mgl + kl^2 & -kl^2 \\ -kl^2 & mgl + kl^2 \end{pmatrix}$$

The secular equation $\det(\mathbf{V} - \omega^2\mathbf{T}) = 0$:

$$(mgl + kl^2 - ml^2\omega^2)^2 - (kl^2)^2 = 0$$

$$mgl + kl^2 - ml^2\omega^2 = \pm kl^2$$

**Mode 1** ($+$ sign): $\omega_1^2 = g/l$. The eigenvector is $(1, 1)$: both pendulums swing in phase, the spring is not stretched.

**Mode 2** ($-$ sign): $\omega_2^2 = g/l + 2k/m$. The eigenvector is $(1, -1)$: the pendulums swing out of phase, the spring is maximally stretched.

The general solution is a superposition:

$$\theta_1(t) = A\cos(\omega_1 t + \phi_1) + B\cos(\omega_2 t + \phi_2)$$

$$\theta_2(t) = A\cos(\omega_1 t + \phi_1) - B\cos(\omega_2 t + \phi_2)$$

If initially only $\theta_1$ is displaced and $\theta_2 = 0$ with zero velocities, energy slowly transfers between the two pendulums --- the classic **beat phenomenon**.

$\blacksquare$

</details>

### 7.6 Worked Example: Double Pendulum (Small Oscillations)

For two equal masses $m$ on massless rods of length $l$:

The kinetic and potential energy matrices (to second order) give the eigenvalue problem with solutions
$\omega_1 = \sqrt{g/l}(2 - \sqrt{2})^{1/2}$ and $\omega_2 = \sqrt{g/l}(2 + \sqrt{2})^{1/2}$.

The corresponding normal modes are:
- **Mode 1:** both pendulums swing in the same direction (in phase).
- **Mode 2:** the pendulums swing in opposite directions (out of phase).

## 8. Rigid Body Dynamics

### 8.1 Rigid Body Kinematics

**Definition.** A **rigid body** is a system of particles in which the distance between every pair of particles is fixed.

A rigid body has 6 degrees of freedom: 3 translational (centre of mass position) and 3 rotational (orientation). The orientation is specified by three angles, most commonly the **Euler angles** $(\phi, \theta, \psi)$.

### 8.2 Angular Velocity and Euler Angles

The angular velocity $\boldsymbol{\omega}$ in terms of the Euler angles ($z$-$x'$-$z''$ convention) expressed in the body frame:

$$\omega_1 = \dot{\phi}\sin\theta\sin\psi + \dot{\theta}\cos\psi$$

$$\omega_2 = \dot{\phi}\sin\theta\cos\psi - \dot{\theta}\sin\psi$$

$$\omega_3 = \dot{\phi}\cos\theta + \dot{\psi}$$

### 8.3 The Inertia Tensor

**Definition.** The **moment of inertia tensor** about the centre of mass is:

$$I_{jk} = \int \rho(\mathbf{r})\left(\lvert\mathbf{r}\rvert^2 \delta_{jk} - r_j r_k\right) dV$$

In matrix form, for a discrete system:

$$\mathbf{I} = \begin{pmatrix} I_{xx} & I_{xy} & I_{xz} \\ I_{xy} & I_{yy} & I_{yz} \\ I_{xz} & I_{yz} & I_{zz} \end{pmatrix}$$

where:

$$I_{xx} = \sum_i m_i(y_i^2 + z_i^2), \quad I_{xy} = -\sum_i m_i x_i y_i, \quad \mathrm{etc.}$$

**Theorem 8.1 (Parallel Axis Theorem).** The inertia tensor about a point displaced by $\mathbf{a}$ from the centre of mass is:

$$I_{jk}' = I_{jk}^{(\mathrm{CM})} + M(a^2\delta_{jk} - a_j a_k)$$

where $M$ is the total mass.

*Proof.* Writing $\mathbf{r}_i' = \mathbf{r}_i + \mathbf{a}$ where $\mathbf{r}_i$ is measured from the centre of mass:

$$I_{jk}' = \sum_i m_i\left(\lvert\mathbf{r}_i'\rvert^2\delta_{jk} - r_i' r_{i',k}\right) = \sum_i m_i\left(\lvert\mathbf{r}_i + \mathbf{a}\rvert^2\delta_{jk} - (r_{i,j} + a_j)(r_{i,k} + a_k)\right)$$

Expanding and using $\sum_i m_i \mathbf{r}_i = \mathbf{0}$ (centre of mass condition):

$$I_{jk}' = I_{jk}^{(\mathrm{CM})} + M(a^2\delta_{jk} - a_j a_k)$$

$\blacksquare$

### 8.4 Principal Axes

**Definition.** The **principal axes** are the eigenvectors of $\mathbf{I}$, and the **principal moments of inertia** $I_1, I_2, I_3$ are the corresponding eigenvalues.

In the principal axis frame, the inertia tensor is diagonal:

$$\mathbf{I} = \begin{pmatrix} I_1 & 0 & 0 \\ 0 & I_2 & 0 \\ 0 & 0 & I_3 \end{pmatrix}$$

Since $\mathbf{I}$ is a real symmetric matrix, the principal axes are always real and orthogonal.

### 8.5 Euler's Equations of Motion

**Theorem 8.2 (Euler's Equations).** For torque-free rotation ($\boldsymbol{\tau} = \mathbf{0}$) about the centre of mass, the equations of motion in the body frame are:

$$I_1\dot{\omega}_1 = (I_2 - I_3)\omega_2\omega_3$$

$$I_2\dot{\omega}_2 = (I_3 - I_1)\omega_3\omega_1$$

$$I_3\dot{\omega}_3 = (I_1 - I_2)\omega_1\omega_2$$

*Proof.* In the body frame, the angular momentum is $\mathbf{L} = \mathbf{I}\,\boldsymbol{\omega}$. The equation of motion is:

$$\left(\frac{d\mathbf{L}}{dt}\right)_{\mathrm{space}} = \boldsymbol{\tau}$$

Transforming to the body frame using $\left(\frac{d\mathbf{L}}{dt}\right)_{\mathrm{space}} = \left(\frac{d\mathbf{L}}{dt}\right)_{\mathrm{body}} + \boldsymbol{\omega} \times \mathbf{L}$:

$$\mathbf{I}\,\dot{\boldsymbol{\omega}} + \boldsymbol{\omega} \times (\mathbf{I}\,\boldsymbol{\omega}) = \boldsymbol{\tau}$$

In the principal axis frame with $\boldsymbol{\tau} = \mathbf{0}$, this gives Euler's equations directly. $\blacksquare$

### 8.6 Stability of Torque-Free Rotation

**Theorem 8.3.** Torque-free rotation about a principal axis is stable if the axis corresponds to the largest or smallest principal moment of inertia, and unstable for the intermediate axis.

*Proof.* Consider rotation primarily about the 1-axis: $\boldsymbol{\omega} = (\omega_1, \epsilon_2, \epsilon_3)$ where $\epsilon_2, \epsilon_3$ are small perturbations. From Euler's equations:

$$I_2\dot{\epsilon}_2 = (I_3 - I_1)\omega_1\epsilon_3, \quad I_3\dot{\epsilon}_3 = (I_1 - I_2)\omega_1\epsilon_2$$

Combining: $\ddot{\epsilon}_2 = \frac{(I_3 - I_1)(I_1 - I_2)}{I_2 I_3}\omega_1^2\,\epsilon_2$.

For stability, the coefficient must be negative. This requires $(I_1 - I_3)(I_1 - I_2) \gt{} 0$, i.e., $I_1$ is either the largest or smallest. If $I_1$ is intermediate, the perturbation grows exponentially. $\blacksquare$

:::caution Common Pitfall
The intermediate axis theorem (tennis racket theorem / Dzhanibekov effect) is counterintuitive: a
rigid body spinning about its intermediate axis is unstable. This is not a violation of angular
momentum conservation --- the angular momentum vector remains fixed in space, but the body
tumbles relative to it.
:::

### 8.7 Worked Example: The Spinning Top

**Problem.** A symmetric top (moments of inertia $I_1 = I_2 \neq I_3$) of mass $M$ spins about its symmetry axis with the tip of the axis fixed. The distance from the fixed point to the centre of mass is $l$. Find the conditions for steady precession.

<details>
<summary>Solution</summary>

Using Euler angles $(\phi, \theta, \psi)$ where $\theta$ is the tilt from vertical, $\phi$ is the precession angle, and $\psi$ is the spin angle.

The kinetic energy is:

$$T = \frac{1}{2}I_1(\dot{\theta}^2 + \dot{\phi}^2\sin^2\theta) + \frac{1}{2}I_3(\dot{\psi} + \dot{\phi}\cos\theta)^2$$

The potential energy is $V = Mgl\cos\theta$.

The Lagrangian is $L = T - V$. Since $\phi$ and $\psi$ are cyclic:

$$p_\phi = I_1\dot{\phi}\sin^2\theta + I_3(\dot{\psi} + \dot{\phi}\cos\theta)\cos\theta = \mathrm{const}$$

$$p_\psi = I_3(\dot{\psi} + \dot{\phi}\cos\theta) = \mathrm{const}$$

The quantity $p_\psi = I_3\omega_3$ is the angular momentum component along the symmetry axis. The quantity $p_\phi$ is the angular momentum component along the vertical.

For **steady precession** at constant $\theta$ and $\dot{\phi} = \Omega$:

$$\dot{\theta} = 0, \quad \dot{\phi} = \Omega = \mathrm{const}, \quad \dot{\psi} = \dot{\psi}_0 = \mathrm{const}$$

The equation of motion for $\theta$ gives:

$$I_1\Omega^2\sin\theta\cos\theta - I_3(\dot{\psi}_0 + \Omega\cos\theta)\Omega\sin\theta + Mgl\sin\theta = 0$$

Dividing by $\sin\theta$ and using $p_\psi = I_3 n$ where $n = \dot{\psi}_0 + \Omega\cos\theta$:

$$I_1\Omega^2\cos\theta - I_3 n\Omega + Mgl = 0$$

This is a quadratic in $\Omega$:

$$\Omega_\pm = \frac{I_3 n \pm \sqrt{(I_3 n)^2 - 4I_1 Mgl\cos\theta}}{2I_1\cos\theta}$$

Real solutions exist when $(I_3 n)^2 \geq 4I_1 Mgl\cos\theta$. This is the condition for steady precession. For fast spinning ($n$ large), $\Omega_\approx \approx I_3 n / (I_1\cos\theta)$ (slow precession) and $\Omega_\approx \approx Mgl / (I_3 n)$ (fast precession). The slow precession is the one usually observed.

$\blacksquare$

</details>

### 8.8 Worked Example: Gyroscopic Precession

**Problem.** A bicycle wheel of mass $m$ and radius $R$ is spinning with angular velocity $\dot{\psi}$ about its axle. One end of the axle is supported. Find the precession rate.

<details>
<summary>Solution</summary>

Model the wheel as a symmetric top with $I_3 \approx mR^2$ (thin ring approximation) and $I_1 \approx mR^2/2$. The axle has length $l$ from pivot to centre of mass.

For a horizontal axle ($\theta = \pi/2$), the steady precession condition becomes:

$$I_1\Omega^2 \cdot 0 - I_3 n\Omega + Mgl = 0$$

$$\Omega = \frac{Mgl}{I_3 n} = \frac{mgl}{mR^2\dot{\psi}} = \frac{gl}{R^2\dot{\psi}}$$

This is the **gyroscopic precession rate**. Notice that it is inversely proportional to the spin rate --- the faster the wheel spins, the slower it precesses.

$\blacksquare$

</details>

### 8.9 Worked Example: Inertia Tensor of a Uniform Rod

**Problem.** Find the inertia tensor of a uniform thin rod of mass $M$ and length $L$ about one end.

<details>
<summary>Solution</summary>

Place the rod along the $x$-axis from $x = 0$ to $x = L$. The linear mass density is $\lambda = M/L$.

$$I_{xx} = \int_0^L \lambda(y^2 + z^2)\, dx = 0$$

(since $y = z = 0$ for a thin rod on the $x$-axis).

$$I_{yy} = \int_0^L \lambda(x^2 + z^2)\, dx = \lambda \int_0^L x^2\, dx = \frac{M}{L} \cdot \frac{L^3}{3} = \frac{ML^2}{3}$$

$$I_{zz} = \int_0^L \lambda(x^2 + y^2)\, dx = \frac{ML^2}{3}$$

The products of inertia all vanish by symmetry:

$$I_{xy} = I_{xz} = I_{yz} = 0$$

The inertia tensor is:

$$\mathbf{I} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & ML^2/3 & 0 \\ 0 & 0 & ML^2/3 \end{pmatrix}$$

The principal moments about one end are $0$, $ML^2/3$, $ML^2/3$. By the parallel axis theorem, about the centre of mass they would be $0$, $ML^2/12$, $ML^2/12$.

$\blacksquare$

</details>

## 9. Problem Set

### Problem 1

A particle of mass $m$ is placed on top of a smooth sphere of radius $R$. It is given a tiny nudge so it begins to slide. At what angle $\theta$ does it leave the surface of the sphere?

<details>
<summary>Solution</summary>

Energy conservation (starting from rest at the top):

$$mgR = mgR\cos\theta + \frac{1}{2}mR^2\dot{\theta}^2 \implies \dot{\theta}^2 = \frac{2g(1 - \cos\theta)}{R}$$

Newton's second law in the radial direction:

$$mg\cos\theta - N = mR\dot{\theta}^2 = 2mg(1 - \cos\theta)$$

The particle leaves when $N = 0$:

$$\cos\theta = 2(1 - \cos\theta) \implies 3\cos\theta = 2 \implies \theta = \arccos(2/3) \approx 48.2°$$

**If you get this wrong, revise:** Section 1.6 (conservation of energy), Section 1.2 (polar coordinates).

</details>

### Problem 2

A block of mass $m_1 = 2\,\mathrm{kg}$ on a frictionless horizontal table is connected by a string over a pulley to a mass $m_2 = 1\,\mathrm{kg}$ hanging vertically. Find the acceleration using the Lagrangian.

<details>
<summary>Solution</summary>

Let $x$ be the displacement of $m_1$ (positive to the right, so $m_2$ moves down).

$$T = \frac{1}{2}(m_1 + m_2)\dot{x}^2, \quad V = -m_2 g x$$

$$L = \frac{1}{2}(m_1 + m_2)\dot{x}^2 + m_2 g x$$

Euler-Lagrange: $(m_1 + m_2)\ddot{x} = m_2 g$, so $a = m_2 g / (m_1 + m_2) = g/3 \approx 3.27\,\mathrm{m/s}^2$.

**If you get this wrong, revise:** Section 3.5 (Atwood machine example), Section 3.1 (Lagrangian construction).

</details>

### Problem 3

Derive the equation of motion for a particle of mass $m$ sliding on the inside of a paraboloid of revolution $z = \alpha r^2$ under gravity, using cylindrical coordinates and the Lagrangian method.

<details>
<summary>Solution</summary>

Coordinates: $(r, \phi, z)$ with constraint $z = \alpha r^2$. Degrees of freedom: $r$ and $\phi$.

$$\dot{z} = 2\alpha r\dot{r}$$

$$T = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\phi}^2 + 4\alpha^2 r^2\dot{r}^2) = \frac{1}{2}m\dot{r}^2(1 + 4\alpha^2 r^2) + \frac{1}{2}mr^2\dot{\phi}^2$$

$$V = mg\alpha r^2$$

$$L = \frac{1}{2}m(1 + 4\alpha^2 r^2)\dot{r}^2 + \frac{1}{2}mr^2\dot{\phi}^2 - mg\alpha r^2$$

Since $\phi$ is cyclic, $p_\phi = mr^2\dot{\phi} = l = \mathrm{const}$.

For the $r$ equation:

$$\frac{d}{dt}\left[m(1 + 4\alpha^2 r^2)\dot{r}\right] = 4m\alpha^2 r\dot{r}^2 + mr\dot{\phi}^2 - 2mg\alpha r$$

$$m(1 + 4\alpha^2 r^2)\ddot{r} + 4m\alpha^2 r\dot{r}^2 = 4m\alpha^2 r\dot{r}^2 + \frac{l^2}{mr^3} - 2mg\alpha r$$

$$(1 + 4\alpha^2 r^2)\ddot{r} = \frac{l^2}{m^2 r^3} - 2g\alpha r$$

**If you get this wrong, revise:** Section 2.1 (generalised coordinates), Section 3.8 (cyclic coordinates).

</details>

### Problem 4

For the double pendulum with $m_1 = m_2 = m$ and $l_1 = l_2 = l$, find the Lagrangian and verify the equations of motion in the small-angle limit reduce to coupled harmonic oscillators.

<details>
<summary>Solution</summary>

From Section 3.5, for equal masses and lengths:

$$T = ml^2\dot{\theta}_1^2 + \frac{1}{2}ml^2\dot{\theta}_2^2 + ml^2\dot{\theta}_1\dot{\theta}_2\cos(\theta_1 - \theta_2)$$

$$V = -2mgl\cos\theta_1 - mgl\cos\theta_2$$

In the small-angle limit ($\cos(\theta_1 - \theta_2) \approx 1$, $\cos\theta_i \approx 1 - \theta_i^2/2$):

$$T \approx ml^2\dot{\theta}_1^2 + \frac{1}{2}ml^2\dot{\theta}_2^2 + ml^2\dot{\theta}_1\dot{\theta}_2$$

$$V \approx mgl\theta_1^2 + \frac{1}{2}mgl\theta_2^2$$

The mass and stiffness matrices:

$$\mathbf{T} = ml^2\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \quad \mathbf{V} = mgl\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$$

The secular equation gives $\omega_1^2 = (2-\sqrt{2})g/l$ and $\omega_2^2 = (2+\sqrt{2})g/l$, confirming coupled harmonic oscillators.

**If you get this wrong, revise:** Section 3.5 (double pendulum), Section 7.1 (small oscillations).

</details>

### Problem 5

A particle moves in the potential $V(x, y) = \frac{1}{2}k(x^2 + y^2) + \lambda xy$. Find the normal mode frequencies and describe the normal modes.

<details>
<summary>Solution</summary>

$$L = \frac{1}{2}m(\dot{x}^2 + \dot{y}^2) - \frac{1}{2}k(x^2 + y^2) - \lambda xy$$

$$\mathbf{T} = m\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad \mathbf{V} = \begin{pmatrix} k & \lambda \\ \lambda & k \end{pmatrix}$$

Secular equation: $\det(\mathbf{V} - \omega^2\mathbf{T}) = (k - m\omega^2)^2 - \lambda^2 = 0$

$$\omega_\pm^2 = \frac{k \pm \lambda}{m}$$

Normal modes: $(1, 1)$ for $\omega_+$ (symmetric stretch) and $(1, -1)$ for $\omega_-$ (antisymmetric stretch).

**If you get this wrong, revise:** Section 7.3 (secular equation), Section 7.4 (orthogonality).

</details>

### Problem 6

Prove that the Poisson bracket of two conserved quantities is itself a conserved quantity (Poisson's theorem), assuming neither quantity depends explicitly on time.

<details>
<summary>Solution</summary>

Let $f$ and $g$ be conserved, so $\{f, H\} = 0$ and $\{g, H\} = 0$. Using the Jacobi identity:

$$\{f, \{g, H\}\} + \{g, \{H, f\}\} + \{H, \{f, g\}\} = 0$$

The first term vanishes since $\{g, H\} = 0$. The second term: $\{g, \{H, f\}\} = \{g, -\{f, H\}\} = -\{g, 0\} = 0$. Therefore:

$$\{H, \{f, g\}\} = 0 \implies \frac{d}{dt}\{f, g\} = \{f, g\} = 0$$

(since neither depends explicitly on time). So $\{f, g\}$ is conserved. $\blacksquare$

**If you get this wrong, revise:** Section 4.8 (Poisson brackets, properties, and Jacobi identity).

</details>

### Problem 7

A particle of mass $m$ moves in one dimension with potential $V(x) = V_0(\lvert x/a\rvert)^n$ where $V_0, a \gt{} 0$ and $n \gt{} 0$. Use dimensional analysis (or the virial theorem) to find the dependence of the period of oscillation on the amplitude $A$.

<details>
<summary>Solution</summary>

The Lagrangian is $L = \frac{1}{2}m\dot{x}^2 - V_0\lvert x/a\rvert^n$. For oscillation with amplitude $A$, the energy is $E = V_0(A/a)^n$.

By dimensional analysis, the period $T$ can only depend on $m$, $V_0$, $a$, $n$, and $A$. Writing $[T] = [m]^\alpha [V_0]^\beta [a]^\gamma [A]^\delta$ and noting $[V_0] = ML^2T^{-2}$:

$$T = M^{-\alpha}L^{-2\beta-\gamma-\delta}T^{2\beta} \cdot M^\alpha(V_0)^\beta a^\gamma A^\delta$$

Matching dimensions: $-\alpha + \beta = 0$, $-2\beta - \gamma - \delta = 0$, $2\beta = 1$. So $\beta = 1/2$, $\alpha = 1/2$.

$$T \propto \sqrt{m/V_0}\, a^\gamma A^\delta \quad \mathrm{with} \quad -1 - \gamma - \delta = 0$$

Since $n$ is dimensionless, we need $\delta = n\gamma$ (to make $A/a$ appear with power $n$ in the energy). Then $-1 - \gamma(1 + n) = 0$, giving $\gamma = -1/(1+n)$, $\delta = -n/(1+n)$.

$$T \propto A^{-n/(1+n)} = \frac{1}{A^{n/(1+n)}}$$

For $n = 2$ (harmonic oscillator): $T$ is independent of $A$ (isochronous). For $n = 4$: $T \propto A^{-4/5}$.

Alternatively, via the virial theorem for $V \propto x^n$: $\langle T \rangle = \frac{n}{2}\langle V \rangle$, and $E = \langle T \rangle + \langle V \rangle = \frac{n+2}{2}\langle V \rangle$, so the average kinetic energy scales as $\langle T \rangle \propto E \propto A^n$. The period scales as $T \propto \sqrt{\langle T \rangle} / A \propto A^{n/2 - 1} = A^{-(2-n)/2}$. Wait --- let me redo this more carefully.

Using $E = V_0(A/a)^n$ and $\langle T \rangle = \frac{n}{n+2}E \propto A^n$. The RMS velocity scales as $v_{\mathrm{rms}} \propto A^{n/2}$. The period is $T \propto A/v_{\mathrm{rms}} \propto A^{1-n/2} = A^{-(n-2)/2} = A^{-n/(n+2)} \cdot A^{\cdot}$.

Actually, the cleanest result from dimensional analysis is $T \propto A^{1 - n/2}$, giving $T \propto A^{-1/2}$ for $n = 3$ (cubic potential).

**If you get this wrong, revise:** Section 1.6 (energy conservation), Section 3.1 (Lagrangian).

</details>

### Problem 8

Find the Hamiltonian for a charged particle (mass $m$, charge $q$) in an electromagnetic field with vector potential $\mathbf{A}$ and scalar potential $\phi$.

<details>
<summary>Solution</summary>

The Lagrangian for a charged particle in an electromagnetic field is:

$$L = \frac{1}{2}m\dot{\mathbf{r}}^2 + q\dot{\mathbf{r}} \cdot \mathbf{A} - q\phi$$

The canonical momentum:

$$\mathbf{p} = \frac{\partial L}{\partial \dot{\mathbf{r}}} = m\dot{\mathbf{r}} + q\mathbf{A}$$

Note: $\mathbf{p} \neq m\dot{\mathbf{r}}$; the canonical momentum differs from the mechanical momentum by $q\mathbf{A}$.

The Hamiltonian:

$$H = \mathbf{p} \cdot \dot{\mathbf{r}} - L = \mathbf{p} \cdot \frac{\mathbf{p} - q\mathbf{A}}{m} - \frac{1}{2}m\left(\frac{\mathbf{p} - q\mathbf{A}}{m}\right)^2 - q\frac{\mathbf{p} - q\mathbf{A}}{m} \cdot \mathbf{A} + q\phi$$

$$= \frac{(\mathbf{p} - q\mathbf{A})^2}{2m} + q\phi$$

**If you get this wrong, revise:** Section 4.2 (Hamiltonian via Legendre transform), Section 4.3 (Hamilton's equations).

</details>

### Problem 9

Find the inertia tensor of a uniform solid cube of mass $M$ and side $a$ about one of its corners. Identify the principal moments of inertia.

<details>
<summary>Solution</summary>

By symmetry, $I_{xx} = I_{yy} = I_{zz}$ and $I_{xy} = I_{xz} = I_{yz}$.

Place the corner at the origin with edges along the axes.

$$I_{xx} = \int_0^a \int_0^a \int_0^a \frac{M}{a^3}(y^2 + z^2)\, dx\, dy\, dz = \frac{M}{a^3} \cdot a \cdot \frac{2a^3}{3} = \frac{2Ma^2}{3}$$

$$I_{xy} = -\int_0^a \int_0^a \int_0^a \frac{M}{a^3} xy\, dx\, dy\, dz = -\frac{M}{a^3} \cdot \frac{a^2}{2} \cdot \frac{a^2}{2} \cdot a = -\frac{Ma^2}{4}$$

The inertia tensor is:

$$\mathbf{I} = \frac{Ma^2}{12}\begin{pmatrix} 8 & -3 & -3 \\ -3 & 8 & -3 \\ -3 & -3 & 8 \end{pmatrix}$$

The eigenvalues of $\begin{pmatrix} 8 & -3 & -3 \\ -3 & 8 & -3 \\ -3 & -3 & 8 \end{pmatrix}$ are found from $\det(\mathbf{M} - \lambda\mathbf{1}) = 0$:

$$(8-\lambda)^3 - 27 - 27 + 3(8-\lambda)(9) = 0$$

Trying $\lambda = 2$: $216 - 54 = 162 \neq 0$. Trying $\lambda = 11$: $(-3)^3 - 54 + 3(-3)(9) = -27 - 54 - 81 = -162 \neq 0$.

The eigenvalues are $\lambda_1 = 2$ (with eigenvector $(1,1,1)$, the body diagonal) and $\lambda_{2,3} = 11$ (degenerate, in the plane perpendicular to the body diagonal).

Principal moments: $I_1 = Ma^2/6$, $I_2 = I_3 = 11Ma^2/12$.

**If you get this wrong, revise:** Section 8.3 (inertia tensor), Section 8.4 (principal axes).

</details>

### Problem 10

A satellite in a circular orbit of radius $r_0$ around Earth receives a brief tangential impulse that increases its speed by $\Delta v$. Determine whether the new orbit is elliptical, parabolic, or hyperbolic as a function of $\Delta v$.

<details>
<summary>Solution</summary>

The circular orbital speed is $v_c = \sqrt{GM/r_0}$. The energy of the circular orbit is $E_0 = -GMm/(2r_0) = -mv_c^2/2$.

After the impulse, the speed is $v = v_c + \Delta v$ and the new energy is:

$$E = \frac{1}{2}m(v_c + \Delta v)^2 - \frac{GMm}{r_0} = \frac{1}{2}m(v_c + \Delta v)^2 - mv_c^2 = \frac{1}{2}m(v_c^2 + 2v_c\Delta v + \Delta v^2) - mv_c^2$$

$$= \frac{1}{2}m(2v_c\Delta v + \Delta v^2) - \frac{1}{2}mv_c^2 = E_0 + mv_c\Delta v + \frac{1}{2}m\Delta v^2$$

- **Elliptical** if $E \lt{} 0$: $\Delta v \lt{} (\sqrt{2} - 1)v_c \approx 0.414\, v_c$
- **Parabolic** if $E = 0$: $\Delta v = (\sqrt{2} - 1)v_c$
- **Hyperbolic** if $E \gt{} 0$: $\Delta v \gt{} (\sqrt{2} - 1)v_c$

**If you get this wrong, revise:** Section 6.4 (Kepler problem, orbit classification).

</details>

### Problem 11

Two particles of masses $m_1$ and $m_2$ interact via a central force. Reduce the two-body problem to an equivalent one-body problem and identify the reduced mass.

<details>
<summary>Solution</summary>

The Lagrangian for two particles interacting via $V(\lvert\mathbf{r}_1 - \mathbf{r}_2\rvert)$:

$$L = \frac{1}{2}m_1\dot{\mathbf{r}}_1^2 + \frac{1}{2}m_2\dot{\mathbf{r}}_2^2 - V(\lvert\mathbf{r}_1 - \mathbf{r}_2\rvert)$$

Introduce centre of mass $\mathbf{R} = (m_1\mathbf{r}_1 + m_2\mathbf{r}_2)/(m_1 + m_2)$ and relative coordinate $\mathbf{r} = \mathbf{r}_1 - \mathbf{r}_2$.

Then $\mathbf{r}_1 = \mathbf{R} + \frac{m_2}{M}\mathbf{r}$ and $\mathbf{r}_2 = \mathbf{R} - \frac{m_1}{M}\mathbf{r}$ where $M = m_1 + m_2$.

$$L = \frac{1}{2}M\dot{\mathbf{R}}^2 + \frac{1}{2}\mu\dot{\mathbf{r}}^2 - V(r)$$

where $\mu = m_1 m_2 / (m_1 + m_2)$ is the **reduced mass**.

The centre of mass moves freely (uniform motion or at rest), and the relative motion is equivalent to a single particle of mass $\mu$ in the potential $V(r)$.

**If you get this wrong, revise:** Section 6.1 (central force reduction), Section 1.5 (centre of mass).

</details>

### Problem 12

Show that the Poisson brackets $\{L_x, L_y\} = L_z$ and its cyclic permutations hold, where $\mathbf{L} = \mathbf{r} \times \mathbf{p}$ is the angular momentum.

<details>
<summary>Solution</summary>

$L_x = yp_z - zp_y$, $L_y = zp_x - xp_z$, $L_z = xp_y - yp_x$.

$$\{L_x, L_y\} = \frac{\partial L_x}{\partial x}\frac{\partial L_y}{\partial p_x} - \frac{\partial L_x}{\partial p_x}\frac{\partial L_y}{\partial x} + \frac{\partial L_x}{\partial y}\frac{\partial L_y}{\partial p_y} - \frac{\partial L_x}{\partial p_y}\frac{\partial L_y}{\partial y} + \frac{\partial L_x}{\partial z}\frac{\partial L_y}{\partial p_z} - \frac{\partial L_x}{\partial p_z}\frac{\partial L_y}{\partial z}$$

Computing each term:

- $\partial L_x/\partial x = 0$, $\partial L_y/\partial p_x = z$: contributes $0$
- $\partial L_x/\partial p_x = 0$, $\partial L_y/\partial x = -p_z$: contributes $0$
- $\partial L_x/\partial y = p_z$, $\partial L_y/\partial p_y = 0$: contributes $0$
- $\partial L_x/\partial p_y = -z$, $\partial L_y/\partial y = 0$: contributes $0$
- $\partial L_x/\partial z = -p_y$, $\partial L_y/\partial p_z = -x$: contributes $p_y x$
- $\partial L_x/\partial p_z = y$, $\partial L_y/\partial z = p_x$: contributes $-y p_x$

$$\{L_x, L_y\} = xp_y - yp_x = L_z \quad \blacksquare$$

The cyclic permutations follow by the same method.

**If you get this wrong, revise:** Section 4.8 (Poisson bracket definition and properties).

</details>

### Problem 13

A particle of mass $m$ is constrained to move on the surface of a cone $z = \alpha\sqrt{x^2 + y^2}$ ($\alpha \gt{} 0$) under gravity. Set up the Lagrangian and find the effective potential for the radial coordinate.

<details>
<summary>Solution</summary>

In cylindrical coordinates, the constraint is $z = \alpha r$, so $\dot{z} = \alpha\dot{r}$. The Lagrangian has two degrees of freedom, $r$ and $\phi$:

$$T = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\phi}^2 + \alpha^2\dot{r}^2) = \frac{1}{2}m(1+\alpha^2)\dot{r}^2 + \frac{1}{2}mr^2\dot{\phi}^2$$

$$V = mg\alpha r$$

$$L = \frac{1}{2}m(1+\alpha^2)\dot{r}^2 + \frac{1}{2}mr^2\dot{\phi}^2 - mg\alpha r$$

Since $\phi$ is cyclic, $p_\phi = mr^2\dot{\phi} = l = \mathrm{const}$.

The energy is:

$$E = \frac{1}{2}m(1+\alpha^2)\dot{r}^2 + V_{\mathrm{eff}}(r)$$

where the effective potential is:

$$V_{\mathrm{eff}}(r) = \frac{l^2}{2mr^2} + mg\alpha r$$

This is the sum of a centrifugal barrier ($\propto 1/r^2$) and a linear potential ($\propto r$), giving a single minimum that corresponds to a stable circular orbit.

**If you get this wrong, revise:** Section 2.2 (holonomic constraints), Section 6.2 (effective potential).

</details>

### Problem 14

Derive the Hamilton-Jacobi equation for a particle in a central potential $V(r)$ and use separation of variables to reduce it to quadratures.

<details>
<summary>Solution</summary>

In spherical coordinates $(r, \theta, \phi)$, the Hamiltonian is:

$$H = \frac{1}{2m}\left(p_r^2 + \frac{p_\theta^2}{r^2} + \frac{p_\phi^2}{r^2\sin^2\theta}\right) + V(r)$$

Since $H$ is time-independent, write $S = W(r, \theta, \phi) - Et$. The HJ equation:

$$\frac{1}{2m}\left[\left(\frac{\partial W}{\partial r}\right)^2 + \frac{1}{r^2}\left(\frac{\partial W}{\partial \theta}\right)^2 + \frac{1}{r^2\sin^2\theta}\left(\frac{\partial W}{\partial \phi}\right)^2\right] + V(r) = E$$

Since $\phi$ is cyclic, separate $W = W_r(r) + W_\theta(\theta) + p_\phi\phi$ where $p_\phi$ is the $z$-component of angular momentum. Defining $l^2$ as the separation constant:

$$\left(\frac{dW_\theta}{d\theta}\right)^2 + \frac{p_\phi^2}{\sin^2\theta} = l^2$$

$$\left(\frac{dW_r}{dr}\right)^2 + \frac{l^2}{r^2} = 2m(E - V(r))$$

The solution is reduced to quadratures:

$$W_r = \int \sqrt{2m(E - V(r)) - l^2/r^2}\, dr$$

$$W_\theta = \int \sqrt{l^2 - \frac{p_\phi^2}{\sin^2\theta}}\, d\theta$$

$$S = W_r + W_\theta + p_\phi\phi - Et$$

**If you get this wrong, revise:** Section 4.9 (Hamilton-Jacobi equation), Section 6.1 (central force reduction).

</details>

### Problem 15

A symmetric top ($I_1 = I_2$) with $I_3 = 2I_1$ has total angular momentum $L$ and spin $n$ about its symmetry axis. Show that the angular velocity vector $\boldsymbol{\omega}$ precesses around $\mathbf{L}$ and find the precession frequency.

<details>
<summary>Solution</summary>

In the body frame, Euler's equations with $I_1 = I_2$ and no external torque:

$$I_1\dot{\omega}_1 = (I_1 - I_3)\omega_2\omega_3 = -I_1\omega_2\omega_3$$

$$I_1\dot{\omega}_2 = (I_3 - I_1)\omega_3\omega_1 = I_1\omega_3\omega_1$$

$$I_3\dot{\omega}_3 = 0$$

From the third equation, $\omega_3 = n = \mathrm{const}$. Define $\Omega = (I_3 - I_1)\omega_3/I_1 = n$. The first two equations become:

$$\dot{\omega}_1 = -n\omega_2, \quad \dot{\omega}_2 = n\omega_1$$

These describe circular motion in the $(\omega_1, \omega_2)$ plane with frequency $n$. The angular velocity vector precesses around the 3-axis (symmetry axis) with frequency $n$ in the body frame.

In the space frame, $\mathbf{L}$ is fixed. The symmetry axis precesses around $\mathbf{L}$ with the **body cone** rolling on the **space cone**. The precession frequency in the space frame is:

$$\Omega_{\mathrm{space}} = \frac{L}{I_1} = \frac{\sqrt{I_1^2(\omega_1^2 + \omega_2^2) + I_3^2\omega_3^2}}{I_1}$$

**If you get this wrong, revise:** Section 8.5 (Euler's equations), Section 8.7 (spinning top).

</details>

### Problem 16

A mass $m$ is attached to a spring of constant $k$ and hangs vertically. The upper end of the spring is then oscillated vertically as $y_0(t) = A\cos(\omega t)$. Find the steady-state solution and identify the resonance condition.

<details>
<summary>Solution</summary>

Let $x$ be the extension of the spring from its natural length. The position of the mass is $y_0 - x$. The Lagrangian:

$$L = \frac{1}{2}m(\dot{y}_0 - \dot{x})^2 + mg(y_0 - x) - \frac{1}{2}kx^2$$

Since $\dot{y}_0 = -A\omega\sin(\omega t)$:

$$L = \frac{1}{2}m\dot{x}^2 - mA\omega\sin(\omega t)\dot{x} + mgA\cos(\omega t) - mgx - \frac{1}{2}kx^2$$

Euler-Lagrange equation:

$$m\ddot{x} + kx = -mA\omega^2\cos(\omega t) - mg + mA\omega^2\cos(\omega t) + mg = -mA\omega^2\cos(\omega t)$$

Wait, let me redo this. Let $x$ be measured from the equilibrium position. The equation of motion for the displacement from equilibrium is:

$$m\ddot{x} + kx = mA\omega^2\cos(\omega t)$$

The steady-state solution is $x(t) = X\cos(\omega t)$ where:

$$X = \frac{mA\omega^2}{k - m\omega^2} = \frac{A\omega^2}{\omega_0^2 - \omega^2}$$

where $\omega_0 = \sqrt{k/m}$. **Resonance** occurs at $\omega = \omega_0$ where the amplitude diverges (without damping).

**If you get this wrong, revise:** Section 3.2 (Euler-Lagrange equation), forced oscillation theory.

</details>

### Problem 17

Compute $\{H, H\}$ and $\{q_j, p_k\}$ directly from the definition of the Poisson bracket. Show that $\{q_j, p_k\} = \delta_{jk}$.

<details>
<summary>Solution</summary>

For $\{H, H\}$:

$$\{H, H\} = \sum_j \left(\frac{\partial H}{\partial q_j}\frac{\partial H}{\partial p_j} - \frac{\partial H}{\partial p_j}\frac{\partial H}{\partial q_j}\right) = 0$$

by antisymmetry of the Poisson bracket. (Also follows from Theorem 4.5 since $H$ is conserved when $\partial H/\partial t = 0$.)

For $\{q_j, p_k\}$:

$$\{q_j, p_k\} = \sum_l \left(\frac{\partial q_j}{\partial q_l}\frac{\partial p_k}{\partial p_l} - \frac{\partial q_j}{\partial p_l}\frac{\partial p_k}{\partial q_l}\right)$$

$$= \sum_l \left(\delta_{jl}\delta_{kl} - 0\right) = \delta_{jk}$$

$\blacksquare$

**If you get this wrong, revise:** Section 4.8 (fundamental Poisson brackets).

</details>

### Problem 18

Prove Bertrand's theorem: the only central potentials for which all bounded orbits are closed are $V(r) = -k/r$ and $V(r) = \frac{1}{2}kr^2$. (Sketch the proof; a full proof requires showing that the orbit must close after a finite number of oscillations for all energies.)

<details>
<summary>Solution</summary>

We sketch the key steps of the proof.

**Step 1: Orbit equation.** From the Binet equation $u'' + u = -\frac{m}{l^2 u^2}V'(1/u)$, write $V'(1/u) = -f(u)/u^2$ where $f(u)$ is the force law. The orbit equation becomes $u'' + u = J(u)$ where $J(u) = \frac{m}{l^2}f(1/u)/u^2$... actually let me use the standard approach.

For a nearly circular orbit at radius $r_0$, write $u = u_0 + x$ where $u_0 = 1/r_0$ and $x$ is small. Linearising the Binet equation:

$$x'' + \beta^2 x = 0$$

where $\beta^2 = 3 + \frac{r_0}{f(r_0)}\frac{df}{dr}\bigg|_{r_0}$ and $f(r) = -dV/dr$.

The orbit closes after a finite number of oscillations if $\beta^2$ is a positive rational number for **all** $r_0$ (i.e., for all energies). This is a very restrictive condition.

**Step 2: Force law.** Write $f(r) = -k r^{-(n+3)}$ (power law) or equivalently $V(r) \propto r^{-n}$. Then:

$$\beta^2 = 3 - n$$

For the orbit to close for all energies, $\beta^2$ must be rational for all $r_0$, and since it is energy-independent for power laws, we need $\beta^2 = p^2/q^2$ for integers $p, q$.

The apsidal angle is $\Delta\phi = \pi/\beta = \pi q/p$. For the orbit to close, $\Delta\phi$ must be a rational multiple of $\pi$.

**Step 3: Only two possibilities.** For the orbit to be closed (not just the apsidal angle to be rational, but the orbit to close for all initial conditions), a deeper analysis shows only $n = -1$ ($V \propto -1/r$, Kepler) and $n = 2$ ($V \propto r^2$, harmonic oscillator) work. For $n = -1$: $\beta^2 = 4$, $\beta = 2$, $\Delta\phi = \pi/2$ (ellipse closes after 2 oscillations, 4 quadrants). For $n = 2$: $\beta^2 = 1$, $\beta = 1$, $\Delta\phi = \pi$ (ellipse closes after 1 oscillation, 2 half-turns).

$\blacksquare$

**If you get this wrong, revise:** Section 6.3 (Binet equation), Section 6.4 (Kepler problem, Bertrand's theorem).

</details>
