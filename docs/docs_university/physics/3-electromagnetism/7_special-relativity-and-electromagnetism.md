---
title: Special Relativity and Electromagnetism
tags:
  - Physics
  - University
---

### 7.1 Covariant Formulation

The laws of electromagnetism are inherently relativistic. In fact, it was the inconsistency of
Maxwell's equations with Galilean relativity that motivated Einstein’s 1905 theory.

**Minkowski spacetime.** Events are labelled by coordinates $(ct, x, y, z)$ in a four-dimensional
Spacetime. The **spacetime interval** between two events is:

$$ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2$$

This interval is invariant under Lorentz transformations --- all inertial observers agree on its
Value. We use the metric signature $\eta_{\mu\nu} = \mathrm{diag}(-1, +1, +1, +1)$.

**Lorentz transformations.** For a boost with velocity $v$ along the $x$-axis, define $\beta = v/c$
and $\gamma = 1/\sqrt{1-\beta^2}$:

$$\Lambda^\mu_{\ \nu} = \begin{pmatrix} \gamma & -\gamma\beta & 0 & 0 \\ -\gamma\beta & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

Coordinates transform as $x'^\mu = \Lambda^\mu_{\ \nu}\,x^\nu$ (Einstein summation convention
Implied).

### 7.2 Four-Vectors

A **four-vector** $A^\mu = (A^0, A^1, A^2, A^3)$ transforms as $A'^\mu = \Lambda^\mu_{\ \nu}\,A^\nu$
Under Lorentz transformations. The inner product $A_\mu B^\mu = \eta_{\mu\nu}A^\mu B^\nu$ is a
Lorentz scalar (invariant).

Key four-vectors in electromagnetism:

**Position:** $x^\mu = (ct, x, y, z)$

**Four-velocity:** $U^\mu = \frac{dx^\mu}{d\tau} = \gamma(c, v_x, v_y, v_z)$ where $\tau$ is proper
time.

**Four-momentum:** $p^\mu = mU^\mu = (E/c, p_x, p_y, p_z)$With $E = \gamma mc^2$.

**Four-current density:**

$$J^\mu = (c\rho, J_x, J_y, J_z)$$

The continuity equation $\nabla \cdot \mathbf{J} + \partial\rho/\partial t = 0$ becomes the
Manifestly covariant:

$$\partial_\mu J^\mu = 0$$

**Four-potential:**

$$A^\mu = (V/c, A_x, A_y, A_z)$$

The Lorenz gauge condition
$\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial V}{\partial t} = 0$ Becomes:

$$\partial_\mu A^\mu = 0$$

### 7.3 The Electromagnetic Field Tensor

The six components of $\mathbf{E}$ and $\mathbf{B}$ are unified in the **antisymmetric field
Tensor** $F^{\mu\nu}$Defined by:

$$F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu$$

In matrix form:

$$F^{\mu\nu} = \begin{pmatrix} 0 & -E_x/c & -E_y/c & -E_z/c \\ E_x/c & 0 & -B_z & B_y \\ E_y/c & B_z & 0 & -B_x \\ E_z/c & -B_y & B_x & 0 \end{pmatrix}$$

The **dual field tensor** is:

$$\tilde{F}^{\mu\nu} = \frac{1}{2}\varepsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}$$

Where $\varepsilon^{\mu\nu\rho\sigma}$ is the totally antisymmetric Levi-Civita symbol with
$\varepsilon^{0123} = +1$. In matrix form:

$$\tilde{F}^{\mu\nu} = \begin{pmatrix} 0 & -B_x & -B_y & -B_z \\ B_x & 0 & E_z/c & -E_y/c \\ B_y & -E_z/c & 0 & E_x/c \\ B_z & E_y/c & -E_x/c & 0 \end{pmatrix}$$

The dual tensor is obtained from $F^{\mu\nu}$ by the replacement $\mathbf{E}/c \to -\mathbf{B}$,
$\mathbf{B} \to \mathbf{E}/c$.

**Lorentz force.** The four-force on a charge $q$ is:

$$K^\mu = \frac{dp^\mu}{d\tau} = qF^{\mu\nu}U_\nu$$

The spatial components reduce to $\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})$ And the
time component gives the power equation $dE/dt = q\mathbf{E} \cdot \mathbf{v}$.

### 7.4 Invariance of Maxwell's Equations

All four Maxwell equations are contained in two covariant equations:

**Inhomogeneous equations** (Gauss's law + Ampere-Maxwell law):

$$\boxed{\partial_\mu F^{\mu\nu} = \mu_0 J^\nu}$$

**Homogeneous equations** (Gauss's law for magnetism + Faraday’s law):

$$\boxed{\partial_\mu \tilde{F}^{\mu\nu} = 0}$$

<details>
<summary>Verification: $\nu = 0$ gives Gauss's law</summary>

For $\nu = 0$:

$$\partial_\mu F^{\mu 0} = \mu_0 J^0 = \mu_0 c\rho$$

Since $F^{\mu 0} = (0, -E_x/c, -E_y/c, -E_z/c)$:

$$\partial_0 F^{00} + \partial_1 F^{10} + \partial_2 F^{20} + \partial_3 F^{30} = 0 + \frac{\partial}{\partial x}\!\left(-\frac{E_x}{c}\right) + \frac{\partial}{\partial y}\!\left(-\frac{E_y}{c}\right) + \frac{\partial}{\partial z}\!\left(-\frac{E_z}{c}\right)$$

$$-\frac{1}{c}\nabla \cdot \mathbf{E} = \mu_0 c\rho$$

$$\nabla \cdot \mathbf{E} = -\mu_0 c^2 \rho = \frac{\rho}{\varepsilon_0}$$

This is Gauss's law, using $c^2 = 1/(\mu_0\varepsilon_0)$. $\blacksquare$

</details>

**Field transformations.** Under a Lorentz boost with velocity $\mathbf{v} = v\,\hat{\mathbf{x}}$
The fields transform as:

$$E'_x = E_x, \quad E'_y = \gamma(E_y - vB_z), \quad E'_z = \gamma(E_z + vB_y)$$

$$B'_x = B_x, \quad B'_y = \gamma\!\left(B_y + \frac{v}{c^2}E_z\right), \quad B'_z = \gamma\!\left(B_z - \frac{v}{c^2}E_y\right)$$

Components parallel to the boost are unchanged; perpendicular components mix $\mathbf{E}$ and
$\mathbf{B}$.

**Lorentz invariants.** The following quantities are the same in all frames:

$$F_{\mu\nu}F^{\mu\nu} = 2\!\left(B^2 - \frac{E^2}{c^2}\right), \quad F_{\mu\nu}\tilde{F}^{\mu\nu} = -\frac{4}{c}\,\mathbf{E} \cdot \mathbf{B}$$

These invariants classify electromagnetic fields:

- If $E^2 \gt c^2 B^2$ in some frame, there exists a frame where $\mathbf{B} = \mathbf{0}$ (purely
  electric).
- If $c^2 B^2 \gt E^2$There exists a frame where $\mathbf{E} = \mathbf{0}$ (purely magnetic).
- If $\mathbf{E} \cdot \mathbf{B} = 0$ and $E = cB$The field is a null field (electromagnetic wave).

