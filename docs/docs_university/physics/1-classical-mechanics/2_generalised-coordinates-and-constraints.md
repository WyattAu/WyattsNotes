---
title: Generalised Coordinates and Constraints
tags:
  - Physics
  - University
---

### 2.1 Generalised Coordinates

A system with $n$ degrees of freedom can be described by $n$ **generalised coordinates**
$q_1, q_2, \ldots, q_n$Which may be angles, arc lengths, or any other set of parameters that
Uniquely determines the configuration.

The Cartesian coordinates are functions of the generalised coordinates (and possibly time):

$$\mathbf{r}_i = \mathbf{r}_i(q_1, q_2, \ldots, q_n, t), \quad i = 1, \ldots, N$$

The velocities are:

$$\dot{\mathbf{r}}_i = \sum_{j=1}^n \frac{\partial \mathbf{r}_i}{\partial q_j}\dot{q}_j + \frac{\partial \mathbf{r}_i}{\partial t}$$

**Example.** A simple pendulum has one degree of freedom. We can use the angle $\theta$ from the
Vertical as the generalised coordinate, rather than the Cartesian coordinates $(x, y)$ of the bob.

### 2.2 Constraints

**Holonomic constraints** relate the coordinates by equations:

$$f(\mathbf{r}_1, \mathbf{r}_2, \ldots, \mathbf{r}_N, t) = 0$$

A holonomic constraint reduces the number of degrees of freedom.

**Non-holonomic constraints** involve inequalities or non-integrable differential relations:

$$\sum_j a_j(q, t)\, dq_j + a_t(q, t)\, dt = 0$$

Which cannot be integrated to yield a relation among the $q_j$ alone.

**Scleronomic constraints** do not depend explicitly on time. **Rheonomic constraints** do.

**Example.** A bead sliding on a fixed wire: the constraint $f(x,y) = 0$ is holonomic and
scleronomic. A bead on a wire that moves with time: holonomic and rheonomic.

### 2.3 Worked Example: Classifying Constraints

**Problem.** Classify the following constraints: (a) a particle on the surface of a sphere of radius
$R$(b) a rolling disk (vertical), (c) a particle constrained to $z \geq 0$(d) a pendulum whose pivot
oscillates as $x_0(t) = A\cos(\omega t)$.

<details>
<summary>Solution</summary>

(a) Constraint: $x^2 + y^2 + z^2 - R^2 = 0$. Holonomic (an equation relating coordinates),
scleronomic (no explicit time dependence).

(b) A vertical disk of radius $a$ rolling without slipping on a horizontal plane. The rolling
condition gives $dx - a\, d\theta = 0$ and $dy - a\sin\phi\, d\theta = 0$. These cannot be
integrated to eliminate the angles, so they are non-holonomic, scleronomic.

(c) Constraint: $z \geq 0$. This is a non-holonomic constraint (an inequality, not an equation).

(d) The constraint is $x = A\cos(\omega t) + l\sin\theta$Which depends explicitly on $t$. Holonomic
(can be written as an equation), rheonomic (explicit time dependence).

$\blacksquare$

</details>

### 2.4 Worked Example: Finding Generalised Coordinates

**Problem.** A rod of length $l$ and negligible mass has masses $m_1$ and $m_2$ at its ends. The rod
slides on a frictionless horizontal table. Find suitable generalised coordinates.

<details>
<summary>Solution</summary>

The rod is in a plane, and the two masses have four Cartesian coordinates $(x_1, y_1, x_2, y_2)$.
The constraint is the fixed distance: $(x_2 - x_1)^2 + (y_2 - y_1)^2 = l^2$. This is one holonomic
scleronomic constraint, reducing the four coordinates to three degrees of freedom.

We can choose the centre of mass $(X, Y)$ and the angle $\theta$ the rod makes with the $x$-axis:

$$X = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}, \quad Y = \frac{m_1 y_1 + m_2 y_2}{m_1 + m_2}, \quad \theta = \arctan\frac{y_2 - y_1}{x_2 - x_1}$$

Then:

$$x_1 = X - \frac{m_2 l}{m_1 + m_2}\cos\theta, \quad y_1 = Y - \frac{m_2 l}{m_1 + m_2}\sin\theta$$

$$x_2 = X + \frac{m_1 l}{m_1 + m_2}\cos\theta, \quad y_2 = Y + \frac{m_1 l}{m_1 + m_2}\sin\theta$$

$\blacksquare$

</details>

### 2.5 Virtual Work and D'Alembert’s Principle

A **virtual displacement** $\delta \mathbf{r}_i$ is an infinitesimal change in position consistent
with The constraints at a fixed instant in time ($\delta t = 0$).

**Definition (Virtual Work).** The virtual work of the forces is:

$$\delta W = \sum_{i=1}^N \mathbf{F}_i \cdot \delta \mathbf{r}_i$$

**Definition (Ideal Constraints).** Constraints are **ideal** if the virtual work of the constraint
forces is zero:

$$\sum_{i=1}^N \mathbf{C}_i \cdot \delta \mathbf{r}_i = 0$$

Where $\mathbf{C}_i$ is the constraint force on particle $i$.

**Theorem 2.1 (Principle of Virtual Work).** A system is in static equilibrium if and only if the
virtual work of the applied forces vanishes for all virtual displacements consistent with the
constraints.

_Proof._ In static equilibrium, $\mathbf{F}_i + \mathbf{C}_i = \mathbf{0}$ for each particle.
Therefore:

$$\sum_i (\mathbf{F}_i + \mathbf{C}_i) \cdot \delta\mathbf{r}_i = 0$$

For ideal constraints, $\sum_i \mathbf{C}_i \cdot \delta\mathbf{r}_i = 0$So
$\sum_i \mathbf{F}_i \cdot \delta\mathbf{r}_i = 0$. Conversely, if the virtual work of applied
forces vanishes for all admissible virtual displacements, the system must be in equilibrium
(otherwise one could choose a virtual displacement in the direction of net force to get non-zero
work). $\blacksquare$

**Theorem 2.2 (D'Alembert’s Principle).** For a system of $N$ particles:

$$\sum_{i=1}^N (\mathbf{F}_i - m_i \ddot{\mathbf{r}}_i) \cdot \delta \mathbf{r}_i = 0$$

Where $\mathbf{F}_i$ includes both applied and constraint forces. For ideal constraints, the
Constraint forces do no virtual work, so only the applied forces contribute.

_Proof._ D'Alembert’s principle extends the principle of virtual work to dynamics by treating
$-m_i \ddot{\mathbf{r}}_i$ as a "fictitious force" (the **inertia force**). Starting from Newton's
second law $\mathbf{F}_i + \mathbf{C}_i = m_i \ddot{\mathbf{r}}_i$:

$$\sum_i (\mathbf{F}_i + \mathbf{C}_i - m_i\ddot{\mathbf{r}}_i) \cdot \delta\mathbf{r}_i = 0$$

This is true. For ideal constraints $\sum_i \mathbf{C}_i \cdot \delta\mathbf{r}_i = 0$Giving:

$$\sum_i (\mathbf{F}_i - m_i\ddot{\mathbf{r}}_i) \cdot \delta\mathbf{r}_i = 0$$

$\blacksquare$

