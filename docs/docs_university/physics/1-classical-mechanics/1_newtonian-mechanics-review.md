---
title: Newtonian Mechanics Review
tags:
  - Physics
  - University
---

### 1.1 Newton's Laws

1. **First Law (Inertia):** A body remains at rest or in uniform motion unless acted upon by a net
   force.
2. **Second Law:** $\mathbf{F} = m\mathbf{a} = \dot{\mathbf{p}}$ where $\mathbf{p} = m\mathbf{v}$.
3. **Third Law:** For every action, there is an equal and opposite reaction.

### 1.2 Newton's Second Law in Various Coordinate Systems

In Cartesian coordinates the component equations are straightforward:

$$F_x = m\ddot{x}, \quad F_y = m\ddot{y}, \quad F_z = m\ddot{z}$$

In planar polar coordinates $(r, \phi)$The acceleration decomposes into radial and transverse
components:

$$\mathbf{a} = (\ddot{r} - r\dot{\phi}^2)\,\hat{\mathbf{r}} + (r\ddot{\phi} + 2\dot{r}\dot{\phi})\,\hat{\boldsymbol{\phi}}$$

So Newton's second law becomes:

$$F_r = m(\ddot{r} - r\dot{\phi}^2), \quad F_\phi = m(r\ddot{\phi} + 2\dot{r}\dot{\phi})$$

The term $-mr\dot{\phi}^2$ is the **centrifugal acceleration** and $2m\dot{r}\dot{\phi}$ is the
**Coriolis acceleration**.

In cylindrical coordinates $(\rho, \phi, z)$:

$$\mathbf{a} = (\ddot{\rho} - \rho\dot{\phi}^2)\,\hat{\boldsymbol{\rho}} + (\rho\ddot{\phi} + 2\dot{\rho}\dot{\phi})\,\hat{\boldsymbol{\phi}} + \ddot{z}\,\hat{\mathbf{z}}$$

### 1.3 Worked Example: Block on an Inclined Plane with Friction

**Problem.** A block of mass $m$ slides down an inclined plane at angle $\alpha$ to the horizontal.
The coefficient of kinetic friction is $\mu_k$. Find the acceleration.

_Solution._ Choose axes parallel and perpendicular to the incline. The normal force is
$N = mg\cos\alpha$. The friction force is $f = \mu_k N = \mu_k mg\cos\alpha$ directed up the plane.
Newton's second law along the plane:

$$ma = mg\sin\alpha - \mu_k mg\cos\alpha$$

$$a = g(\sin\alpha - \mu_k \cos\alpha)$$

The block accelerates when $\tan\alpha \gt \mu_k$ and decelerates otherwise. $\blacksquare$

### 1.4 Worked Example: Conical Pendulum

**Problem.** A mass $m$ is attached to a string of length $l$ and rotates in a horizontal circle of
radius $r$ with the string making angle $\theta$ with the vertical. Find the angular velocity
$\omega$.

_Solution._ The forces on the mass are tension $\mathbf{T}$ along the string and weight $mg$
downward. Newton's second law in the vertical direction:

$$T\cos\theta - mg = 0 \implies T = \frac{mg}{\cos\theta}$$

In the radial (horizontal) direction:

$$T\sin\theta = m\omega^2 r = m\omega^2 l\sin\theta$$

$$\frac{mg}{\cos\theta}\sin\theta = m\omega^2 l\sin\theta$$

$$\omega^2 = \frac{g}{l\cos\theta}$$

The period is $T = 2\pi/\omega = 2\pi\sqrt{l\cos\theta/g}$. $\blacksquare$

### 1.5 Conservation of Linear Momentum

**Theorem 1.1 (Conservation of Linear Momentum).** For a system of $N$ particles with no external
forces, the total linear momentum is conserved.

_Proof._ Newton's second law for the $i$-th particle:

$$\mathbf{F}_i^{(\mathrm{ext})} + \sum_{j \neq i} \mathbf{F}_{ij} = m_i \dot{\mathbf{v}}_i$$

Where $\mathbf{F}_{ij}$ is the force on particle $i$ due to particle $j$. By Newton's third law,
$\mathbf{F}_{ij} = -\mathbf{F}_{ji}$. Summing over all particles:

$$\sum_i \mathbf{F}_i^{(\mathrm{ext})} + \sum_i \sum_{j \neq i} \mathbf{F}_{ij} = \frac{d}{dt}\sum_i m_i \mathbf{v}_i$$

The double sum vanishes by Newton's third law. Defining $\mathbf{P} = \sum_i m_i \mathbf{v}_i$:

$$\sum_i \mathbf{F}_i^{(\mathrm{ext})} = \dot{\mathbf{P}}$$

If there are no external forces, $\dot{\mathbf{P}} = 0$ and $\mathbf{P}$ is constant. $\blacksquare$

**Corollary.** The centre of mass moves as if all external forces acted on a single particle of mass
$M = \sum_i m_i$ located at the centre of mass:
$M\ddot{\mathbf{R}} = \sum_i \mathbf{F}_i^{(\mathrm{ext})}$.

### 1.6 Conservation of Energy

**Theorem 1.2 (Work-Energy Theorem).** The work done by the net force on a particle equals the
change in its kinetic energy:

$$W = \int_{\mathbf{r}_1}^{\mathbf{r}_2} \mathbf{F} \cdot d\mathbf{r} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

_Proof._ Using Newton's second law:

$$W = \int m\mathbf{a} \cdot \mathbf{v}\, dt = \int m \frac{d\mathbf{v}}{dt} \cdot \mathbf{v}\, dt = \int m\mathbf{v} \cdot d\mathbf{v} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

$\blacksquare$

**Definition.** A force is **conservative** if the work done is path-independent, equivalently
$\nabla \times \mathbf{F} = \mathbf{0}$Equivalently $\mathbf{F} = -\nabla V$ for some scalar
potential $V(\mathbf{r})$.

**Theorem 1.3 (Conservation of Mechanical Energy).** If all forces are conservative, $E = T + V$ is
conserved.

_Proof._ For a conservative force, $W = -\Delta V$. By the work-energy theorem:

$$-\Delta V = \Delta T \implies \Delta(T + V) = 0$$

$\blacksquare$

### 1.7 Conservation of Angular Momentum

**Theorem 1.4 (Conservation of Angular Momentum).** If the net external torque on a system vanishes,
the total angular momentum is conserved.

_Proof._ The angular momentum of the $i$-th particle about the origin is
$\mathbf{L}_i = \mathbf{r}_i \times m_i \mathbf{v}_i$. Taking the time derivative:

$$\dot{\mathbf{L}}_i = \dot{\mathbf{r}}_i \times m_i \mathbf{v}_i + \mathbf{r}_i \times m_i \dot{\mathbf{v}}_i = \mathbf{r}_i \times \mathbf{F}_i$$

Since
$\dot{\mathbf{r}}_i \times m_i \mathbf{v}_i = \mathbf{v}_i \times m_i \mathbf{v}_i = \mathbf{0}$.
Summing over all particles:

$$\dot{\mathbf{L}} = \sum_i \mathbf{r}_i \times \mathbf{F}_i^{(\mathrm{ext})} + \sum_i \sum_{j \neq i} \mathbf{r}_i \times \mathbf{F}_{ij}$$

The double sum represents internal torques. For central internal forces ($\mathbf{F}_{ij}$ parallel
to $\mathbf{r}_i - \mathbf{r}_j$), the internal torques cancel in pairs. Hence:

$$\dot{\mathbf{L}} = \boldsymbol{\tau}^{(\mathrm{ext})}$$

If $\boldsymbol{\tau}^{(\mathrm{ext})} = \mathbf{0}$Then $\mathbf{L} = \mathrm{const}$.
$\blacksquare$

### 1.8 The Rocket Equation

**Definition.** The **rocket equation** (Tsiolkovsky equation) describes the motion of a rocket that
expels mass at a constant exhaust velocity.

Consider a rocket of mass $m$ moving with velocity $v$ in one dimension. In time $dt$It ejects mass
$dm$ (where $dm \lt 0$) at exhaust velocity $u_e$ relative to the rocket. The ejected mass has
velocity $v - u_e$ in the lab frame. By conservation of momentum:

$$mv = (m + dm)(v + dv) + (-dm)(v - u_e)$$

Neglecting the second-order term $dm\, dv$:

$$mv = mv + m\, dv + dm\, v - dm\, v + u_e\, dm$$

$$0 = m\, dv + u_e\, dm$$

$$dv = -u_e \frac{dm}{m}$$

Integrating from initial mass $m_0$ and velocity $v_0$ to final mass $m_f$ and velocity $v_f$:

$$v_f - v_0 = u_e \ln\frac{m_0}{m_f}$$

This is the **Tsiolkovsky rocket equation**.

**Theorem 1.5 (Rocket Equation with Gravity).** If the rocket moves vertically against a uniform
gravitational field $g$:

$$\Delta v = u_e \ln\frac{m_0}{m_f} - g\, \Delta t$$

Where $\Delta t$ is the burn time.

### 1.9 Worked Example: Rocket in Free Space

**Problem.** A rocket starts from rest with mass $m_0 = 1000\,\mathrm{kg}$ and exhaust velocity
$u_e = 3000\,\mathrm{m}/s$. It burns fuel until its mass is $m_f = 400\,\mathrm{kg}$. Find the final
velocity.

<details>
<summary>Solution</summary>

Applying the Tsiolkovsky rocket equation:

$$\Delta v = u_e \ln\frac{m_0}{m_f} = 3000 \ln\frac{1000}{400} = 3000 \ln(2.5) \approx 3000 \times 0.916 = 2749\,\mathrm{m}/s$$

$\blacksquare$

</details>

### 1.10 From Newton to Variational Principles

Newton's laws work well in Cartesian coordinates but become cumbersome in constrained systems or
Non-Cartesian coordinates. The **Lagrangian** and **Hamiltonian** formulations provide a more
general And elegant framework based on energy principles.

The key insight: instead of tracking forces, track the **energy** of the system. The trajectory is
the One that **minimises** (or more precisely, makes stationary) the **action**.

:::caution Common Pitfall Newton's laws in curvilinear coordinates introduce fictitious forces
(centrifugal, Coriolis) that Are artifacts of the coordinate choice. The Lagrangian formulation
automatically accounts for these Through the coordinate transformation of the kinetic energy,
without any ad-hoc force terms.
:::


