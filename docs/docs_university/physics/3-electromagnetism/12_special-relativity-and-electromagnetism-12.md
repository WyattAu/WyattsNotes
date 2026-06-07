---
title: Special Relativity and Electromagnetism
tags:
  - Physics
  - University
---

### 12.1 Covariant Formulation

Maxwell's equations in covariant form using the field tensor $F^{\mu\nu}$:

$$\partial_\mu F^{\mu\nu} = \mu_0 J^\nu \quad \text{(inhomogeneous)}$$

$$\partial_\lambda F_{\mu\nu} + \partial_\mu F_{\nu\lambda} + \partial_\nu F_{\lambda\mu} = 0 \quad \text{(homogeneous / Bianchi identity)}$$

The electromagnetic field tensor:

$$F^{\mu\nu} = \begin{pmatrix} 0 & -E_x/c & -E_y/c & -E_z/c \\ E_x/c & 0 & -B_z & B_y \\ E_y/c & B_z & 0 & -B_x \\ E_z/c & -B_y & B_x & 0 \end{pmatrix}$$

The dual tensor: $\tilde{F}^{\mu\nu} = \frac{1}{2}\epsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}$.

The Lorentz force: $f^\mu = qF^{\mu\nu}u_\nu$ where $u^\nu = \gamma(c, \mathbf{v})$ is the
four-velocity.

### 12.2 Lorentz Transformation of Fields

Under a boost with velocity $v$ along the $x$-axis:

$$E'_x = E_x, \quad B'_x = B_x$$

$$E'_y = \gamma(E_y - vB_z), \quad B'_y = \gamma\!\left(B_y + \frac{v}{c^2}E_z\right)$$

$$E'_z = \gamma(E_z + vB_y), \quad B'_z = \gamma\!\left(B_z - \frac{v}{c^2}E_y\right)$$

**Key insight:** $\mathbf{E}$ and $\mathbf{B}$ mix under Lorentz transformations. What appears as a
pure electric field in one frame becomes a mixture of electric and magnetic fields in another. There
is no frame-independent distinction between $\mathbf{E}$ and $\mathbf{B}$.

**Invariants:** $E^2 - c^2B^2$ and $\mathbf{E}\cdot\mathbf{B}$ are Lorentz invariants. A pure
radiation field ($E = cB$, $\mathbf{E}\perp\mathbf{B}$) satisfies both invariants being zero.

### 12.3 Electromagnetic Field Momentum and Angular Momentum

**Field momentum density:**

$$\mathbf{g} = \frac{\mathbf{S}}{c^2} = \varepsilon_0\mathbf{E} \times \mathbf{B}$$

**Field angular momentum:** $\mathbf{L} = \int \mathbf{r} \times \mathbf{g}\, d^3r$.

**Conservation:**
$\frac{d}{dt}\left(\mathbf{p}_{\text{mech} + \mathbf{p}_{\text{field}\right) = 0}}$.

For a charge and a magnetic monopole (if they exist), the field angular momentum
$\mathbf{L} = -qg\hat{\mathbf{r}}/(4\pi)$ is quantised in units of $\hbar/2$Leading to the Dirac
charge quantisation condition $eg = n\hbar/2$.

<details>
<summary>Worked Example 12.1: Fields of a Moving Point Charge</summary>

A point charge $q$ at rest at the origin has
$\mathbf{E} = q\hat{\mathbf{r}}/(4\pi\varepsilon_0 r^2)$, $\mathbf{B} = 0$.

In a frame moving with velocity $v$ along the $x$-axis, the fields at the boosted position are:

$$E'_y = \gamma\frac{qy'}{4\pi\varepsilon_0(r'^2 + \gamma^2 v^2 t'^2)^{3/2}}, \quad B'_z = -\frac{v}{c^2}E'_y$$

At $t' = 0$: $\mathbf{E}'$ is still radial (from the instantaneous position) but with an enhanced
transverse component by factor $\gamma$. The magnetic field is
$\mathbf{B}' = -\mathbf{v} \times \mathbf{E}'/c^2$Circulating around the direction of motion.

The Poynting vector $\mathbf{S}' = \mathbf{E}' \times \mathbf{B}'/\mu_0$ is nonzero even for a
uniformly moving charge (it points outward and forward, indicating energy flow in the direction of
motion).

For ultrarelativistic motion ($\gamma \gg 1$): the fields are concentrated in a thin disk of angular
width $\sim 1/\gamma$ around the plane perpendicular to the motion. This is the basis of
**synchrotron radiation** patterns.

</details>

