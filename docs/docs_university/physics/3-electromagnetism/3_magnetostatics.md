---
title: Magnetostatics
tags:
  - Physics
  - University
---

### 3.1 The Biot-Savart Law

The magnetic field due to a steady current $I$ in a wire element $d\mathbf{l}$:

$$d\mathbf{B} = \frac{\mu_0 I}{4\pi} \frac{d\mathbf{l} \times \hat{\mathbf{r}}}{r^2}$$

For a complete circuit:

$$\mathbf{B}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \oint \frac{d\mathbf{l} \times \hat{\mathbf{r}}'}{|\mathbf{r} - \mathbf{r}'|^2}$$

### 3.2 Ampere's Law

For steady currents ($\partial \mathbf{E} / \partial t = 0$):

$$\oint_C \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\mathrm{enc}}$$

**Example: Infinite straight wire** carrying current $I$.

By cylindrical symmetry, $B$ is constant on circles centred on the wire. Choose an Amperian loop of
Radius $r$:

$$\oint \mathbf{B} \cdot d\mathbf{l} = B \cdot 2\pi r = \mu_0 I \implies B = \frac{\mu_0 I}{2\pi r}$$

**Example: Solenoid.** For a long solenoid with $n$ turns per unit length carrying current $I$:

$$B = \mu_0 n I \quad \mathrm{(inside)}, \quad B = 0 \quad \mathrm{(outside)}$$

### 3.3 Magnetic Vector Potential

Since $\nabla \cdot \mathbf{B} = 0$We can write $\mathbf{B} = \nabla \times \mathbf{A}$Where
$\mathbf{A}$ is the **magnetic vector potential**.

In the Coulomb gauge ($\nabla \cdot \mathbf{A} = 0$), the vector potential satisfies

$$\nabla^2 \mathbf{A} = -\mu_0 \mathbf{J}$$

This is Poisson's equation for each component of $\mathbf{A}$.

For a current loop, the solution is:

$$\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, d^3\mathbf{r}'$$

### 3.4 Additional Ampere's Law Examples

**Example: Toroid.** A toroid with $N$ turns carrying current $I$ has inner radius $a$ and outer
Radius $b$.

By symmetry, $\mathbf{B}$ is tangential and constant on circular Amperian loops inside the Toroid.
For a loop of radius $r$ ($a \lt r \lt b$):

$$B \cdot 2\pi r = \mu_0 N I \implies B = \frac{\mu_0 N I}{2\pi r}$$

For $r \lt a$ or $r \gt b$: $B = 0$ (no enclosed current).

Unlike a solenoid, the field inside a toroid is _not_ uniform --- it varies as $1/r$.

**Example: Infinite current sheet.** A sheet in the $xy$-plane carries surface current density
$\mathbf{K} = K\,\hat{\mathbf{x}}$.

By symmetry, $\mathbf{B}$ is parallel to $\pm\hat{\mathbf{y}}$ and depends only on $z$. Choose a
rectangular Amperian loop straddling the sheet with sides parallel to $\hat{\mathbf{y}}$:

$$B \cdot 2L = \mu_0 K L \implies B = \frac{\mu_0 K}{2}$$

The field is uniform on each side, pointing in opposite directions:

$$\mathbf{B} = \begin{cases} +\frac{\mu_0 K}{2}\,\hat{\mathbf{y}} & z \gt 0 \\[4pt] -\frac{\mu_0 K}{2}\,\hat{\mathbf{y}} & z \lt 0 \end{cases}$$

### 3.5 Magnetic Dipole Moment

A current loop carrying current $I$ enclosing area $\mathbf{a}$ has **magnetic dipole moment**:

$$\mathbf{m} = I\mathbf{a}$$

For a planar loop of $N$ turns: $\mathbf{m} = NIA\,\hat{\mathbf{n}}$Where $A$ is the area And
$\hat{\mathbf{n}}$ is the unit normal given by the right-hand rule.

**Field of a magnetic dipole** (at position $\mathbf{r}$ from the dipole):

$$\mathbf{B}_{\mathrm{dip}(\mathbf{r}) = \frac{\mu_0}{4\pi}\left[\frac{3(\mathbf{m} \cdot \hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}}{r^3}\right]}$$

This has the same angular structure as the electric dipole field.

**Torque on a dipole** in a uniform field:

$$\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}$$

**Energy of a dipole** in a field:

$$U = -\mathbf{m} \cdot \mathbf{B}$$

**Force on a dipole** in a non-uniform field:

$$\mathbf{F} = \nabla(\mathbf{m} \cdot \mathbf{B})$$

<details>
<summary>Example: Field on the axis of a circular loop</summary>

A circular loop of radius $R$ carries current $I$. On the axis at distance $z$ from the centre,
Every element $d\mathbf{l}$ is perpendicular to $\hat{\mathbf{r}}$So:

$$d\mathbf{B} = \frac{\mu_0 I}{4\pi}\frac{dl}{R^2 + z^2}$$

The component perpendicular to the axis cancels by symmetry. The axial component is:

$$B_z = \oint dB\,\sin\alpha = \frac{\mu_0 I}{4\pi(R^2+z^2)}\frac{R}{\sqrt{R^2+z^2}}\oint dl = \frac{\mu_0 I R^2}{2(R^2+z^2)^{3/2}}$$

For $z \gg R$: $B_z \approx \frac{\mu_0 I R^2}{2z^3} = \frac{\mu_0}{4\pi}\frac{2\mathbf{m}}{z^3}$
Which matches the dipole formula with $\mathbf{m} = I\pi R^2\,\hat{\mathbf{z}}$. $\blacksquare$

</details>

### 3.6 Vector Potential: Detailed Derivation

Starting from the Biot-Savart law and the identity
$\frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r}-\mathbf{r}'|^3} = -\nabla\frac{1}{|\mathbf{r}-\mathbf{r}'|}$:

$$\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi}\int \mathbf{J}(\mathbf{r}') \times \frac{(\mathbf{r}-\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|^3}\,d^3\mathbf{r}' = -\frac{\mu_0}{4\pi}\int \mathbf{J}(\mathbf{r}') \times \nabla\frac{1}{|\mathbf{r}-\mathbf{r}'|}\,d^3\mathbf{r}'$$

Using the product rule
$\mathbf{J} \times (\nabla f) = \nabla \times (f\mathbf{J}) - f(\nabla \times \mathbf{J})$ And
noting that $\nabla \times \mathbf{J}(\mathbf{r}') = 0$ (since $\mathbf{J}$ depends on
$\mathbf{r}'$Not $\mathbf{r}$):

$$\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi}\nabla \times \int \frac{\mathbf{J}(\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|}\,d^3\mathbf{r}'$$

Comparing with $\mathbf{B} = \nabla \times \mathbf{A}$:

$$\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi}\int \frac{\mathbf{J}(\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|}\,d^3\mathbf{r}'$$

This is the general solution for the vector potential in the Coulomb gauge. For a line current:

$$\mathbf{A}(\mathbf{r}) = \frac{\mu_0 I}{4\pi}\oint \frac{d\mathbf{l}'}{|\mathbf{r}-\mathbf{r}'|}$$

<details>
<summary>Example: Vector potential of an infinite wire</summary>

An infinite straight wire along the $z$-axis carries current $I$. In cylindrical coordinates
$(s, \phi, z)$The vector potential can only depend on $s$ by symmetry, and must point along
$\hat{\mathbf{z}}$.

$\mathbf{A}(s) = \frac{\mu_0 I}{4\pi}\int_{-\infty}^{\infty}\frac{dz'}{\sqrt{s^2 + z'^2}}\,\hat{\mathbf{z}}$

This integral diverges logarithmically. Introduce a cutoff at $z' = \pm L$:

$\mathbf{A}(s) \approx \frac{\mu_0 I}{2\pi}\ln\!\left(\frac{2L}{s}\right)\hat{\mathbf{z}} + \mathrm{const}$

Since $\mathbf{A}$ is defined only up to a gauge transformation, we write:

$$\mathbf{A}(s) = -\frac{\mu_0 I}{2\pi}\ln\!\left(\frac{s}{s_0}\right)\hat{\mathbf{z}}$$

Verify:
$\mathbf{B} = \nabla \times \mathbf{A} = -\frac{\partial A_z}{\partial s}\,\hat{\boldsymbol{\phi}} = \frac{\mu_0 I}{2\pi s}\,\hat{\boldsymbol{\phi}}$.
This matches the Ampere's law result. $\blacksquare$

</details>

### 3.7 Magnetization and the H Field

**Magnetization.** The **magnetization** $\mathbf{M}$ is the magnetic dipole moment per unit volume.
It produces **bound currents**:

$$\mathbf{J}_b = \nabla \times \mathbf{M}, \quad \mathbf{K}_b = \mathbf{M} \times \hat{\mathbf{n}}$$

**The H field** (magnetic field intensity) is defined as:

$$\mathbf{H} = \frac{1}{\mu_0}\mathbf{B} - \mathbf{M}$$

Ampere's law for $\mathbf{H}$:

$$\nabla \times \mathbf{H} = \mathbf{J}_f$$

$$\oint \mathbf{H} \cdot d\mathbf{l} = I_{f,\mathrm{enc}}$$

This is simpler than Ampere's law for $\mathbf{B}$ because only _free_ currents appear.

**Linear magnetic materials.** For isotropic linear materials:

$$\mathbf{M} = \chi_m \mathbf{H}, \quad \mathbf{B} = \mu \mathbf{H}$$

Where $\chi_m$ is the magnetic susceptibility and $\mu = \mu_0(1 + \chi_m)$ is the permeability. The
**relative permeability** is $\mu_r = 1 + \chi_m$.

### 3.8 Magnetic Materials

**Diamagnetic materials** ($\chi_m \lt 0$, $\lvert\chi_m\rvert \ll 1$): Weakly repelled by Magnetic
fields. The induced magnetization opposes the applied field (Lenz's law at the Atomic level).
Examples: bismuth, copper, water.

**Paramagnetic materials** ($\chi_m \gt 0$, $\chi_m \ll 1$): Weakly attracted by magnetic fields.
Atomic dipoles align partially with the applied field. Examples: aluminium, platinum, oxygen.

**Ferromagnetic materials** ($\chi_m \gg 1$): Strongly attracted by magnetic fields. Exhibit
**hysteresis**: the magnetization depends on the history of the applied field.

The **hysteresis loop** traces $\mathbf{B}$ vs $\mathbf{H}$ as the external field cycles. Key
Features:

- **Remanence** $B_r$: the residual field when $H = 0$.
- **Coercivity** $H_c$: the field required to demagnetize the material.
- **Saturation**: the maximum magnetization achievable.

For soft ferromagnets (iron, nickel), $H_c$ is small and the hysteresis loop is narrow. For hard
ferromagnets (permanent magnets), $H_c$ is large.

:::caution Common Pitfall The magnetic field $\mathbf{B}$ is the fundamental quantity; $\mathbf{H}$
is an auxiliary field Convenient for problems with free currents. The names "magnetic field" and
"magnetic field Intensity" vary across textbooks --- always check which symbol a given text
associates with Which name. In this document, $\mathbf{B}$ is the magnetic field and $\mathbf{H}$ is
the Auxiliary H field.
:::


