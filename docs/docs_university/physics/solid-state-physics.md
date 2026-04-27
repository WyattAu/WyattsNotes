---
title: Solid State Physics
date: 2026-04-24T00:00:00.000Z
tags:
  - Physics
  - University
categories:
  - Physics
slug: solid-state-physics
---

## 1. Crystal Structures

### 1.1 Lattices and Basis

A crystal is defined by a **lattice** (infinite array of points with translational symmetry) and a
**basis** (the arrangement of atoms associated with each lattice point).

The lattice is specified by **primitive lattice vectors** $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$
such that every lattice point is at:

$$\mathbf{R} = n_1\mathbf{a}_1 + n_2\mathbf{a}_2 + n_3\mathbf{a}_3, \quad n_i \in \mathbb{Z}$$

### 1.2 Bravais Lattices

There are **14 Bravais lattices** in three dimensions, classified into 7 crystal systems:

| System | Lattices | Constraints |
|---|---|---|
| Cubic | SC, BCC, FCC | $a = b = c$, $\alpha = \beta = \gamma = 90^\circ$ |
| Tetragonal | P, I | $a = b \neq c$, $\alpha = \beta = \gamma = 90^\circ$ |
| Orthorhombic | P, C, I, F | $a \neq b \neq c$, $\alpha = \beta = \gamma = 90^\circ$ |
| Monoclinic | P, C | $a \neq b \neq c$, $\alpha = \gamma = 90^\circ \neq \beta$ |
| Triclinic | P | $a \neq b \neq c$, $\alpha \neq \beta \neq \gamma$ |
| Hexagonal | P | $a = b \neq c$, $\alpha = \beta = 90^\circ$, $\gamma = 120^\circ$ |
| Trigonal | R | $a = b = c$, $\alpha = \beta = \gamma \neq 90^\circ$ |

**Notation:** P = primitive, I = body-centred, F = face-centred, C = base-centred, R = rhombohedral.

### 1.3 Common Crystal Structures

**Simple Cubic (SC):** One atom per unit cell. Coordination number $= 6$. Packing fraction $= \pi/6 \approx 0.52$.

**Body-Centred Cubic (BCC):** Atoms at corners and body centre. Two atoms per cell. Coordination
number $= 8$. Packing fraction $= \sqrt{3}\pi/8 \approx 0.68$. Examples: Fe ($\alpha$-iron), W, Cr.

**Face-Centred Cubic (FCC):** Atoms at corners and face centres. Four atoms per cell. Coordination
number $= 12$. Packing fraction $= \sqrt{2}\pi/6 \approx 0.74$. Examples: Cu, Al, Au, Ag.

**Hexagonal Close-Packed (HCP):** Two atoms per primitive cell. Coordination number $= 12$. Same
packing fraction as FCC. Examples: Zn, Mg, Ti.

**Diamond structure:** Two interpenetrating FCC lattices offset by $(a/4, a/4, a/4)$. Eight atoms per
conventional cell. Examples: C (diamond), Si, Ge.

### 1.4 Miller Indices

A plane with Miller indices $(hkl)$ intersects the crystallographic axes at $a/h$, $b/k$, $c/l$.

**Procedure:** (1) Find intercepts with axes in units of lattice constants. (2) Take reciprocals.
(3) Reduce to smallest integers.

Negative indices are written with a bar: $(\bar{h}kl)$. Families of equivalent planes are denoted
$\{hkl\}$.

Directions are written as $[hkl]$; families of equivalent directions as $\langle hkl \rangle$.

### 1.5 Wigner-Seitz Cell

The **Wigner-Seitz cell** is the primitive cell constructed by drawing perpendicular bisector planes
between a lattice point and all its neighbours. It is the region of space closer to the given lattice
point than to any other.

### 1.6 Packing Fractions and Density

The **packing fraction** (also called atomic packing factor) is the fraction of volume in a unit cell
occupied by atoms:

$$\mathrm{APF} = \frac{N \cdot V_{\mathrm{atom}}}{V_{\mathrm{cell}}} = \frac{N \cdot \frac{4}{3}\pi R^3}{V_{\mathrm{cell}}}$$

where $N$ is the number of atoms per cell, $R$ is the atomic radius, and $V_{\mathrm{cell}}$ is the
cell volume.

The **theoretical density** of a crystal:

$$\rho = \frac{nM}{N_A V_{\mathrm{cell}}}$$

where $n$ is the number of formula units per cell, $M$ is the molar mass, $N_A$ is Avogadro's
number, and $V_{\mathrm{cell}}$ is the cell volume.

<details>
<summary>Worked Example: FCC Packing Fraction</summary>

In FCC, nearest neighbours touch along the face diagonal. For lattice constant $a$ and atomic radius $R$:

$$4R = \sqrt{2}\,a \implies R = \frac{a\sqrt{2}}{4}$$

Four atoms per conventional cell:

$$\mathrm{APF} = \frac{4 \times \frac{4}{3}\pi R^3}{a^3} = \frac{4 \times \frac{4}{3}\pi \left(\frac{a\sqrt{2}}{4}\right)^3}{a^3} = \frac{4 \times \frac{4}{3}\pi \cdot \frac{2\sqrt{2}\,a^3}{64}}{a^3} = \frac{\pi\sqrt{2}}{6} \approx 0.7405$$

</details>

<details>
<summary>Worked Example: Density of BCC Iron</summary>

$\alpha$-iron is BCC with lattice constant $a = 0.2866$ nm, molar mass $M = 55.845$ g/mol, and 2 atoms
per conventional cell.

$$\rho = \frac{2 \times 55.845}{6.022 \times 10^{23} \times (2.866 \times 10^{-8})^3}$$

$$(2.866 \times 10^{-8})^3 = 23.55 \times 10^{-24}\ \mathrm{cm}^3 = 2.355 \times 10^{-23}\ \mathrm{cm}^3$$

$$\rho = \frac{111.69}{6.022 \times 10^{23} \times 2.355 \times 10^{-23}} = \frac{111.69}{14.18} = 7.88\ \mathrm{g/cm}^3$$

This matches the accepted experimental density of iron ($7.87\ \mathrm{g/cm}^3$).

</details>

<details>
<summary>Worked Example: HCP Packing Fraction</summary>

For HCP with ideal $c/a = \sqrt{8/3}$, lattice constant $a$, and atomic radius $R = a/2$:

Two atoms per primitive cell. The cell volume is $V_{\mathrm{cell}} = \frac{\sqrt{3}}{2}a^2 \cdot c = \frac{\sqrt{3}}{2}a^2 \cdot a\sqrt{8/3} = \sqrt{2}\,a^3$.

$$\mathrm{APF} = \frac{2 \times \frac{4}{3}\pi (a/2)^3}{\sqrt{2}\,a^3} = \frac{\frac{\pi a^3}{3}}{\sqrt{2}\,a^3} = \frac{\pi}{3\sqrt{2}} = \frac{\pi\sqrt{2}}{6} \approx 0.7405$$

This confirms that HCP and FCC have the same packing fraction, as both are close-packed structures.

</details>

### 1.7 Crystal Defects

Real crystals are never perfect. Defects are classified by their dimensionality.

**Point defects (0D):**

- **Vacancy:** Missing atom at a lattice site.
- **Interstitial:** Extra atom between lattice sites.
- **Substitutional:** Foreign atom replacing a host atom.
- **Frenkel defect:** Vacancy-interstitial pair (atom moves to an interstitial site).
- **Schottky defect:** Pair of vacancies in ionic crystals (cation + anion vacancies to maintain
  charge neutrality).

The equilibrium concentration of vacancies follows from minimising the free energy
$F = n_v E_v - k_B T \ln\binom{N}{n_v}$:

$$n_v = N\,e^{-E_v/(k_B T)}$$

where $E_v$ is the vacancy formation energy (typically $\sim 1$ eV).

**Line defects (1D):**

- **Edge dislocation:** An extra half-plane of atoms inserted into the lattice. The Burgers vector
  $\mathbf{b}$ is perpendicular to the dislocation line.
- **Screw dislocation:** The lattice is helically distorted. $\mathbf{b}$ is parallel to the
  dislocation line.
- **Mixed dislocation:** Combines edge and screw character.

Dislocations enable plastic deformation at stresses far below the theoretical shear strength. The
Peach-Koehler force per unit length on a dislocation:

$$\mathbf{F} = (\boldsymbol{\sigma}\cdot\mathbf{b}) \times \hat{\mathbf{t}}$$

**Planar defects (2D):**

- **Grain boundary:** Interface between two crystallites of different orientation.
- **Stacking fault:** Error in the stacking sequence (e.g., ABCABC $\to$ ABCABABC in FCC).
- **Twin boundary:** Mirror plane across which the lattice is reflected.

### 1.8 X-ray Diffraction Analysis

X-ray diffraction is the primary experimental tool for determining crystal structures. X-rays are
produced by bombarding a metal target with electrons, generating both **Bremsstrahlung** (continuous
spectrum) and **characteristic radiation** (sharp lines at element-specific energies, e.g., Cu
$K_\alpha$ at $\lambda = 1.5406$ Å).

Three principal experimental methods:

1. **Laue method:** A stationary single crystal is exposed to a polychromatic X-ray beam. Each set
   of planes selects the wavelength satisfying Bragg's law, producing a spot pattern revealing
   symmetry.
2. **Rotating crystal method:** A single crystal is rotated in a monochromatic beam. As each set of
   planes sweeps through the Bragg angle, a diffraction spot is recorded.
3. **Powder (Debye--Scherrer) method:** A polycrystalline sample is exposed to monochromatic X-rays.
   Randomly oriented crystallites produce diffraction cones, recorded as concentric rings on a
   detector.

:::caution Common Pitfall
The coordination number is the number of *nearest neighbours*, not the number of atoms in the unit
cell. For FCC, the coordination number is 12 even though there are only 4 atoms per conventional
cell. Do not confuse the basis size with the coordination number.
:::

<details>
<summary>Worked Example: Interplanar Spacing for SC, BCC, FCC</summary>

For a cubic crystal with lattice constant $a$, the interplanar spacing for $(hkl)$ is:

$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$

For SC, all $(hkl)$ reflections are allowed. For BCC, only $(hkl)$ with $h+k+l$ even are present.
For FCC, only all-even or all-odd $(hkl)$ are present.

The first few allowed reflections and their $d$-spacings for FCC ($a = 0.405$ nm, aluminium):

| $(hkl)$ | $h^2+k^2+l^2$ | $d$ (nm) | $2\theta$ (Cu $K_\alpha$) |
|---|---|---|---|
| (111) | 3 | 0.2338 | 38.5° |
| (200) | 4 | 0.2025 | 44.7° |
| (220) | 8 | 0.1432 | 65.1° |
| (311) | 11 | 0.1221 | 78.2° |
| (222) | 12 | 0.1169 | 82.4° |

Note that (100) is absent in FCC (since 1+0+0 = 1 is odd but not all odd). The sequence of
allowed $h^2+k^2+l^2$ values (3, 4, 8, 11, 12, ...) is characteristic of FCC.

</details>

## 2. Reciprocal Lattice

### 2.1 Definition

The **reciprocal lattice vectors** are defined by:

$$\mathbf{b}_1 = 2\pi\frac{\mathbf{a}_2 \times \mathbf{a}_3}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

$$\mathbf{b}_2 = 2\pi\frac{\mathbf{a}_3 \times \mathbf{a}_1}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

$$\mathbf{b}_3 = 2\pi\frac{\mathbf{a}_1 \times \mathbf{a}_2}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

Every reciprocal lattice point is at:

$$\mathbf{G} = m_1\mathbf{b}_1 + m_2\mathbf{b}_2 + m_3\mathbf{b}_3, \quad m_i \in \mathbb{Z}$$

**Key property:** $\mathbf{G} \cdot \mathbf{R} = 2\pi \times \mathrm{integer}$, so
$e^{i\mathbf{G}\cdot\mathbf{R}} = 1$.

**Proof of key property.**

$$\mathbf{G} \cdot \mathbf{R} = (m_1\mathbf{b}_1 + m_2\mathbf{b}_2 + m_3\mathbf{b}_3) \cdot (n_1\mathbf{a}_1 + n_2\mathbf{a}_2 + n_3\mathbf{a}_3)$$

By the orthogonality relation $\mathbf{b}_i \cdot \mathbf{a}_j = 2\pi\delta_{ij}$:

$$\mathbf{G} \cdot \mathbf{R} = 2\pi(m_1 n_1 + m_2 n_2 + m_3 n_3) = 2\pi \times \mathrm{integer}$$

$\blacksquare$

### 2.2 First Brillouin Zone

The **first Brillouin zone** is the Wigner-Seitz cell of the reciprocal lattice. It is the set of
points closer to the origin than to any other reciprocal lattice point.

For FCC (real space), the reciprocal lattice is BCC. The first Brillouin zone is a truncated octahedron.
For BCC (real space), the reciprocal lattice is FCC.

**Important volumes:**

| Real space | Reciprocal space | BZ volume |
|---|---|---|
| SC ($a$) | SC ($2\pi/a$) | $(2\pi/a)^3$ |
| BCC ($a$) | FCC ($4\pi/a$) | $2(2\pi/a)^3$ |
| FCC ($a$) | BCC ($4\pi/a$) | $4(2\pi/a)^3$ |

In general, $V_{\mathrm{BZ}} = (2\pi)^3 / V_{\mathrm{cell}}$.

### 2.3 Reciprocal Lattice and Planes

**Theorem 2.1.** The reciprocal lattice vector $\mathbf{G}_{hkl} = h\mathbf{b}_1 + k\mathbf{b}_2 + l\mathbf{b}_3$
is perpendicular to the real-space planes $(hkl)$, and $\lvert\mathbf{G}_{hkl}\rvert = 2\pi/d_{hkl}$ where
$d_{hkl}$ is the interplanar spacing.

**Proof.** The plane $(hkl)$ has intercepts $\mathbf{a}_1/h$, $\mathbf{a}_2/k$, $\mathbf{a}_3/l$.
Two vectors in this plane are $\mathbf{a}_2/k - \mathbf{a}_1/h$ and $\mathbf{a}_3/l - \mathbf{a}_1/h$.

$\mathbf{G}_{hkl} \cdot (\mathbf{a}_2/k - \mathbf{a}_1/h) = (2\pi/k)k - (2\pi/h)h = 0$.

Similarly $\mathbf{G}_{hkl} \cdot (\mathbf{a}_3/l - \mathbf{a}_1/h) = 0$. Hence $\mathbf{G}_{hkl}$ is
perpendicular to the plane.

For the spacing: the plane through the origin has equation $\mathbf{G}_{hkl} \cdot \mathbf{r} = 0$.
The next parallel plane is $\mathbf{G}_{hkl} \cdot \mathbf{r} = 2\pi$ (since $e^{i\mathbf{G}\cdot\mathbf{r}} = 1$
on all lattice planes). The distance from the origin to this plane is
$d_{hkl} = 2\pi/\lvert\mathbf{G}_{hkl}\rvert$. $\blacksquare$

### 2.4 Brillouin Zone Construction

<details>
<summary>Worked Example: First Brillouin Zone of the 2D Square Lattice</summary>

For a 2D square lattice with primitive vectors $\mathbf{a}_1 = a\hat{x}$, $\mathbf{a}_2 = a\hat{y}$:

$$\mathbf{b}_1 = \frac{2\pi}{a}\hat{x}, \quad \mathbf{b}_2 = \frac{2\pi}{a}\hat{y}$$

The nearest reciprocal lattice points to the origin are at $(\pm 2\pi/a,\, 0)$ and $(0,\, \pm 2\pi/a)$.
Their perpendicular bisectors are the lines $k_x = \pm\pi/a$ and $k_y = \pm\pi/a$.

The next-nearest points are at $(\pm 2\pi/a,\, \pm 2\pi/a)$. Their perpendicular bisectors are
$k_x + k_y = \pm 2\pi/a$ and $k_x - k_y = \pm 2\pi/a$.

The first Brillouin zone is bounded by the four nearest-neighbour bisectors and is a square with
vertices at $(\pm\pi/a,\, \pm\pi/a)$ and area $(2\pi/a)^2$.

The second Brillouin zone is the region between the first zone and the bisectors of the next-nearest
neighbours.

</details>

<details>
<summary>Worked Example: First Brillouin Zone of the 2D Hexagonal Lattice</summary>

For a 2D hexagonal lattice with $\mathbf{a}_1 = a\hat{x}$,
$\mathbf{a}_2 = a(\hat{x}/2 + \sqrt{3}\hat{y}/2)$:

$$\mathbf{b}_1 = \frac{2\pi}{a}\left(\hat{x} - \frac{\hat{y}}{\sqrt{3}}\right), \quad \mathbf{b}_2 = \frac{4\pi}{a\sqrt{3}}\hat{y}$$

The six nearest reciprocal lattice points form a regular hexagon. The perpendicular bisectors of
the six nearest-neighbour vectors form a regular hexagon centred at the origin --- the first
Brillouin zone.

High-symmetry points: $\Gamma$ (centre), $M$ (midpoint of edge), $K$ (corner).

The area of the BZ equals $(2\pi)^2/A_{\mathrm{cell}}$ where $A_{\mathrm{cell}} = a^2\sqrt{3}/2$.

</details>

### 2.5 Ewald Sphere Construction

The **Ewald sphere** provides a geometric criterion for when diffraction occurs. Given an incident
wave vector $\mathbf{k}$ (with $\lvert\mathbf{k}\rvert = 2\pi/\lambda$) and the reciprocal lattice:

1. Draw $\mathbf{k}$ terminating at the origin of reciprocal space.
2. Construct a sphere of radius $k = 2\pi/\lambda$ centred at the start of $\mathbf{k}$.
3. Diffraction occurs for every reciprocal lattice point $\mathbf{G}$ that lies on the sphere, since
   then $\mathbf{k}' = \mathbf{k} + \mathbf{G}$ also has $\lvert\mathbf{k}'\rvert = k$ (elastic
   scattering condition).

**Implications:**

- For a fixed wavelength and a single crystal, very few reciprocal lattice points typically lie on
  the Ewald sphere. The crystal must be rotated to bring different points onto the sphere.
- As $\lambda$ decreases (shorter wavelength), the Ewald sphere radius increases and more points
  satisfy the condition.
- For $\lambda \to 0$ (e.g., electron diffraction), the Ewald sphere is effectively flat, and
  the Laue condition reduces to a planar section through reciprocal space.

<details>
<summary>Worked Example: Ewald Sphere for Aluminium</summary>

Aluminium is FCC with $a = 0.405$ nm. The reciprocal lattice is BCC with conventional cubic
constant $4\pi/a = 3.10 \times 10^{10}$ m$^{-1}$.

Using Cu $K_\alpha$ radiation ($\lambda = 0.15406$ nm), the Ewald sphere radius is
$k = 2\pi/\lambda = 4.08 \times 10^{10}$ m$^{-1}$.

The shortest reciprocal lattice vector has magnitude $G_{\min} = 2\pi/(a\sqrt{2}) = 1.10 \times 10^{10}$ m$^{-1}$
(the (111) reflection of FCC).

Since $k = 4.08 \times 10^{10}$ m$^{-1} \gt G_{\min}$, the (111) point can lie on the Ewald sphere
when the crystal is appropriately oriented. The maximum accessible $G$ is $G_{\max} = 2k = 8.16 \times 10^{10}$
m$^{-1}$, which allows access to many reflections.

The **limiting sphere** of radius $2k$ centred at the origin contains all reciprocal lattice points
that can potentially be accessed by rotating the crystal. Points outside this sphere can never
satisfy the diffraction condition for the given wavelength.

</details>

### 2.6 Structure Factor Calculations

<details>
<summary>Worked Example: Structure Factor of the NaCl Structure</summary>

NaCl has an FCC lattice with a two-atom basis: Na$^+$ at $(0,0,0)$ and Cl$^-$ at $(a/2, 0, 0)$
(or equivalently, Cl$^-$ at $(1/2, 0, 0)$ in fractional coordinates).

The FCC sublattice contributes a factor $S_{\mathrm{FCC}} = f[1 + e^{-i\pi(h+k)} + e^{-i\pi(h+l)} + e^{-i\pi(k+l)}]$,
which is zero unless $h,k,l$ are all even or all odd.

For allowed FCC reflections, the basis factor is:

$$F_{\mathrm{basis}} = f_{\mathrm{Na}} + f_{\mathrm{Cl}}\, e^{-i\pi h}$$

When $h,k,l$ are all even: $F = f_{\mathrm{Na}} + f_{\mathrm{Cl}}$.
When $h,k,l$ are all odd: $F = f_{\mathrm{Na}} - f_{\mathrm{Cl}}$.

The intensity $I \propto \lvert S\rvert^2$:
- All even: $I \propto (f_{\mathrm{Na}} + f_{\mathrm{Cl}})^2$ (strong)
- All odd: $I \propto (f_{\mathrm{Na}} - f_{\mathrm{Cl}})^2$ (weak, since $f_{\mathrm{Na}} \approx f_{\mathrm{Cl}}$
  at high scattering angles where form factors converge)

</details>

## 3. Diffraction

### 3.1 Bragg's Law

X-ray diffraction from crystal planes produces constructive interference when:

$$2d\sin\theta = n\lambda$$

where $d$ is the interplanar spacing, $\theta$ is the angle of incidence, and $n$ is the order.

**Derivation.** The path difference between waves scattered from adjacent planes is
$2d\sin\theta$. Constructive interference requires this to be an integer multiple of $\lambda$.
$\blacksquare$

For the $n$-th order reflection from $(hkl)$ planes, one can equivalently define it as the first-order
reflection from $(nh\ nk\ nl)$ planes with spacing $d/n$.

### 3.2 The Laue Condition

Diffraction occurs when the scattering vector equals a reciprocal lattice vector:

$$\Delta\mathbf{k} = \mathbf{k}' - \mathbf{k} = \mathbf{G}$$

This is equivalent to Bragg's law. Since $\lvert\mathbf{k}\rvert = \lvert\mathbf{k}'\rvert$ (elastic
scattering), the Laue condition requires $\mathbf{k}$ to terminate on the **Ewald sphere** (a sphere
of radius $k$ centred at the tip of $\mathbf{k}$).

**Equivalence with Bragg's law.** From $\lvert\mathbf{k}\rvert = \lvert\mathbf{k} + \mathbf{G}\rvert$:

$$k^2 = \lvert\mathbf{k} + \mathbf{G}\rvert^2 = k^2 + G^2 + 2\mathbf{k}\cdot\mathbf{G}$$

$$\implies \mathbf{k}\cdot\mathbf{G} = -\frac{G^2}{2}$$

Since $G = 2\pi/d$ and $\lvert\mathbf{k}\cdot\hat{\mathbf{G}}\rvert = k\sin\theta$:

$$k\sin\theta = \frac{G}{2} = \frac{\pi}{d}$$

Using $k = 2\pi/\lambda$: $2d\sin\theta = \lambda$ (first order). $\blacksquare$

### 3.3 Structure Factor

The **structure factor** determines the intensity of diffraction from planes $(hkl)$:

$$S_{hkl} = \sum_j f_j e^{-i\mathbf{G}_{hkl}\cdot\mathbf{d}_j}$$

where $f_j$ is the atomic form factor of atom $j$ at position $\mathbf{d}_j$ in the basis.

**Example: BCC.** Two atoms at $(0,0,0)$ and $(a/2, a/2, a/2)$ in the conventional cell:

$$S_{hkl} = f\left[1 + e^{-i\pi(h+k+l)}\right] = f\left[1 + (-1)^{h+k+l}\right]$$

Reflections are present only when $h + k + l$ is even. When $h + k + l$ is odd, $S_{hkl} = 0$
(systematic absence).

**Example: FCC.** Atoms at $(0,0,0)$, $(a/2,a/2,0)$, $(a/2,0,a/2)$, $(0,a/2,a/2)$:

$$S_{hkl} = f\left[1 + e^{-i\pi(h+k)} + e^{-i\pi(h+l)} + e^{-i\pi(k+l)}\right]$$

Reflections present only when $h, k, l$ are all even or all odd.

### 3.4 Worked Examples: Structure Factor Calculations

<details>
<summary>Worked Example: Diamond Cubic Structure Factor</summary>

Diamond has an FCC lattice with a two-atom basis at $(0,0,0)$ and $(a/4, a/4, a/4)$. The FCC
sublattice factor $S_{\mathrm{FCC}}$ is nonzero only when $h,k,l$ are all even or all odd.

The full structure factor is:

$$S_{hkl} = S_{\mathrm{FCC}} \cdot \left[1 + e^{-i\frac{\pi}{2}(h+k+l)}\right]$$

For allowed FCC reflections:

- $h + k + l = 4n$: $S = 4f(1 + 1) = 8f$. Intensity $\propto 64f^2$.
- $h + k + l = 4n + 2$: $S = 4f(1 + e^{-i\pi}) = 4f(1 - 1) = 0$. **Systematic absence.**
- $h + k + l = 2n + 1$ (odd): $S = 4f(1 \pm i)$. Intensity $\propto \lvert 4f(1 \pm i)\rvert^2 = 32f^2$.

The extra absence at $h + k + l = 4n + 2$ is the signature of the diamond structure, distinguishing
it from a simple FCC lattice.

</details>

<details>
<summary>Worked Example: HCP Structure Factor</summary>

HCP has a two-atom basis at $(0,0,0)$ and $(2/3, 1/3, 1/2)$ in fractional coordinates of the
hexagonal lattice.

The structure factor is:

$$S_{hkl} = f\left[1 + e^{2\pi i(h/3 + k/3 + l/2)}\right] = f\left[1 + e^{2\pi i(2h+k)/3}\,e^{i\pi l}\right]$$

For $l$ even: $e^{i\pi l} = 1$, so $S = f[1 + e^{2\pi i(2h+k)/3}]$.
For $l$ odd: $e^{i\pi l} = -1$, so $S = f[1 - e^{2\pi i(2h+k)/3}]$.

When $2h + k = 3n$: $S = 2f$ (strong) for even $l$, and $S = 0$ (absent) for odd $l$.
When $2h + k = 3n \pm 1$: both even and odd $l$ give reflections but with different intensities.

</details>

### 3.5 Systematic Absences

Systematic absences arise from lattice centring and glide planes/screw axes, and are summarised by
the structure factor:

| Structure | Condition for reflection | Systematic absence |
|---|---|---|
| SC | All $(hkl)$ | None |
| BCC | $h + k + l$ even | $h + k + l$ odd |
| FCC | $h,k,l$ all even or all odd | Mixed even/odd |
| Diamond | $h,k,l$ all even/odd, $h+k+l \neq 4n+2$ | $h+k+l = 4n+2$ (and mixed) |
| HCP | $l$ even when $2h+k=3n$ | $l$ odd when $2h+k=3n$ |

Systematic absences allow unambiguous identification of the Bravais lattice from a diffraction pattern.
The presence of a $(100)$ reflection rules out BCC; the presence of $(200)$ but absence of $(110)$
identifies FCC.

### 3.6 Powder Diffraction

In a **powder diffraction** experiment, a polycrystalline sample with randomly oriented crystallites
is illuminated by a monochromatic X-ray beam. Each family of planes $(hkl)$ that satisfies Bragg's
law produces a diffraction cone at angle $2\theta$ from the incident beam.

The **Bragg--Brentano geometry** uses a divergent beam and a focusing detector, recording intensity
as a function of $2\theta$. Each peak position gives $d_{hkl}$ via Bragg's law, and the peak
intensity is proportional to $\lvert S_{hkl}\rvert^2$ times multiplicity and geometric factors.

**Scherrer equation.** For crystallites of size $L$, the diffraction peaks are broadened. The
full width at half maximum (FWHM) $\beta$ (in radians) relates to the crystallite size by:

$$L = \frac{K\lambda}{\beta\cos\theta}$$

where $K \approx 0.89$ is the Scherrer constant. This provides a straightforward method for
estimating nanocrystallite sizes from powder diffraction data.

:::caution Common Pitfall
Do not confuse the Laue condition $\Delta\mathbf{k} = \mathbf{G}$ with Bragg's law $2d\sin\theta = n\lambda$.
These are equivalent formulations of the same physics. The Laue condition is a vector equation in
reciprocal space, while Bragg's law is a scalar equation in real space. Converting between them
requires careful geometry --- remember that $\theta$ in Bragg's law is measured from the *plane*,
not from the normal.
:::

## 4. Lattice Vibrations and Phonons

### 4.1 The One-Dimensional Monatomic Chain

Consider $N$ atoms of mass $m$ connected by springs of constant $K$ with equilibrium spacing $a$.

The equation of motion for the $n$-th atom:

$$m\ddot{u}_n = K(u_{n+1} - u_n) + K(u_{n-1} - u_n) = K(u_{n+1} + u_{n-1} - 2u_n)$$

**Derivation of the dispersion relation.** Assuming solutions $u_n = u_0\, e^{i(qna - \omega t)}$:

$$-m\omega^2 = K(e^{iqa} + e^{-iqa} - 2) = 2K(\cos qa - 1) = -4K\sin^2\left(\frac{qa}{2}\right)$$

$$\omega(q) = 2\sqrt{\frac{K}{m}}\left|\sin\left(\frac{qa}{2}\right)\right|$$

$\blacksquare$

**Key features:**

- The Brillouin zone is $-\pi/a \leq q \leq \pi/a$.
- Linear for small $q$: $\omega \approx v_s \lvert q\rvert$ where $v_s = a\sqrt{K/m}$ is the speed of sound.
- Group velocity: $v_g = d\omega/dq = a\sqrt{K/m}\cos(qa/2)$.
- Maximum frequency: $\omega_{\mathrm{max}} = 2\sqrt{K/m}$.
- Phase velocity: $v_p = \omega/q$, which exceeds $v_s$ and diverges as $q \to 0$.

### 4.2 The Diatomic Chain

For a chain with alternating masses $m_1$ and $m_2$ (e.g., NaCl):

$$\omega^2 = K\left(\frac{1}{m_1} + \frac{1}{m_2}\right) \pm K\sqrt{\left(\frac{1}{m_1} + \frac{1}{m_2}\right)^2 - \frac{4\sin^2(qa/2)}{m_1 m_2}}$$

This gives two branches:

- **Acoustic branch** ($-$ sign): $\omega \to 0$ as $q \to 0$. Atoms in the unit cell move in phase.
- **Optical branch** ($+$ sign): $\omega \neq 0$ at $q = 0$. Atoms in the unit cell move out of phase.
  Can interact with light (hence the name).

At $q = 0$, the optical frequency is $\omega_0 = \sqrt{2K(1/m_1 + 1/m_2)}$ and the acoustic branch
has $\omega = v_s q$ with $v_s = a\sqrt{2K/(m_1 + m_2)}$.

### 4.3 Quantisation: Phonons

Lattice vibrations are quantised. Each normal mode of wave vector $\mathbf{q}$ and branch $s$ has
energy:

$$E_{\mathbf{q}s} = \left(n_{\mathbf{q}s} + \frac{1}{2}\right)\hbar\omega_{\mathbf{q}s}$$

where $n_{\mathbf{q}s}$ is the phonon occupation number. Phonons are bosons obeying Bose-Einstein
statistics:

$$\langle n_{\mathbf{q}s} \rangle = \frac{1}{e^{\beta\hbar\omega_{\mathbf{q}s}} - 1}$$

In three dimensions, there are 3 acoustic branches (1 longitudinal, 2 transverse) and $3p - 3$
optical branches for a crystal with $p$ atoms per primitive cell.

### 4.4 Debye Model

The Debye model approximates the phonon spectrum as linear ($\omega = v_s q$) up to a cutoff frequency
$\omega_D$ (the Debye frequency):

$$\omega_D = v_s\left(\frac{6\pi^2 N}{V}\right)^{1/3}$$

The **Debye temperature:** $\Theta_D = \hbar\omega_D / k_B$.

**Derivation of the phonon density of states.** The number of modes with wave vector $\lvert\mathbf{q}\rvert \leq q$
in 3D is $N(q) = 3 \cdot \frac{V}{(2\pi)^3} \cdot \frac{4\pi q^3}{3}$ (factor of 3 for polarisations).
Differentiating: $g(q)\,dq = dN/dq\,dq = (Vq^2/\pi^2)\,dq$. Converting to frequency with
$\omega = v_s q$:

$$g(\omega)\,d\omega = \frac{Vq^2}{\pi^2}\frac{dq}{d\omega}\,d\omega = \frac{V\omega^2}{\pi^2 v_s^3}\,d\omega$$

Since there are $3N$ total modes, the cutoff is determined by
$\int_0^{\omega_D} g(\omega)\,d\omega = 3N$, giving $g(\omega) = \frac{3V\omega^2}{2\pi^2 v_s^3}$
for $0 \leq \omega \leq \omega_D$. $\blacksquare$

**Lattice heat capacity:**

$$C_V = 9Nk_B\left(\frac{T}{\Theta_D}\right)^3 \int_0^{\Theta_D/T} \frac{x^4 e^x}{(e^x - 1)^2}\,dx$$

**High-temperature limit** ($T \gg \Theta_D$): $C_V = 3Nk_B$ (Dulong--Petit law).

**Low-temperature limit** ($T \ll \Theta_D$): $C_V = \frac{12\pi^4}{5}Nk_B\left(\frac{T}{\Theta_D}\right)^3$
(Debye $T^3$ law).

### 4.5 Einstein Model

The Einstein model treats all atoms as independent quantum harmonic oscillators with the same frequency
$\omega_E$:

$$C_V = 3Nk_B\left(\frac{\Theta_E}{T}\right)^2 \frac{e^{\Theta_E/T}}{(e^{\Theta_E/T} - 1)^2}$$

where $\Theta_E = \hbar\omega_E/k_B$.

**High-temperature limit** ($T \gg \Theta_E$): expanding $e^{\Theta_E/T} \approx 1 + \Theta_E/T +
\frac{1}{2}(\Theta_E/T)^2$ gives $C_V \to 3Nk_B$ (Dulong--Petit), matching Debye.

**Low-temperature limit** ($T \ll \Theta_E$): $C_V \approx 3Nk_B(\Theta_E/T)^2 e^{-\Theta_E/T}$,
which is exponentially suppressed. This disagrees with the Debye $T^3$ law (and experiment).

### 4.6 Phonon Thermal Conductivity

Phonons carry heat through the lattice. By the kinetic theory formula:

$$\kappa_{\mathrm{ph}} = \frac{1}{3}C_V v_s \ell_{\mathrm{ph}}$$

where $\ell_{\mathrm{ph}}$ is the phonon mean free path.

**Scattering mechanisms** that limit $\ell_{\mathrm{ph}}$:

1. **Phonon--phonon scattering:** At high $T$, $\ell_{\mathrm{ph}} \propto 1/T$ (Umklapp processes
   dominate, where the total phonon momentum is not conserved). At low $T$, only normal processes
   ($N$-processes, conserving momentum) contribute, and $\ell_{\mathrm{ph}}$ grows exponentially.
2. **Boundary scattering:** At very low $T$, $\ell_{\mathrm{ph}}$ is limited by the sample size $L$.
3. **Defect scattering:** Point defects, dislocations, and grain boundaries scatter phonons,
   reducing $\kappa_{\mathrm{ph}}$.

**Temperature dependence:**

- Low $T$ ($T \ll \Theta_D$): $\kappa_{\mathrm{ph}} \propto T^3$ (from $C_V \propto T^3$, with
  $\ell_{\mathrm{ph}}$ limited by boundaries).
- Intermediate $T$: $\kappa_{\mathrm{ph}}$ peaks.
- High $T$ ($T \gtrsim \Theta_D$): $\kappa_{\mathrm{ph}} \propto 1/T$ (from $\ell_{\mathrm{ph}} \propto 1/T$
  and $C_V \approx \mathrm{const}$).

### 4.7 Specific Heat: Debye vs Einstein vs Experiment

| Feature | Debye | Einstein | Experiment |
|---|---|---|---|
| High $T$ | $3Nk_B$ | $3Nk_B$ | $3Nk_B$ |
| Low $T$ | $\propto T^3$ | $\propto e^{-\Theta_E/T}$ | $\propto T^3$ |
| Single parameter | $\Theta_D$ | $\Theta_E$ | --- |
| Physical basis | Acoustic phonons | Optical phonons | Both contribute |

The Debye model captures the correct low-$T$ behaviour because long-wavelength acoustic phonons
dominate the specific heat at low temperatures. The Einstein model is more appropriate for
describing the optical branch contribution, which is nearly flat (dispersionless) and hence well
approximated by a single frequency.

For crystals with optical branches (e.g., NaCl, SiO$_2$), a combined model using Debye for
acoustic modes and Einstein for optical modes gives better agreement with experiment across all
temperatures.

<details>
<summary>Worked Example: Debye Temperature of Copper</summary>

Copper has molar mass $M = 63.55$ g/mol, density $\rho = 8.96\ \mathrm{g/cm}^3$, and measured
speed of sound $v_s = 3810$ m/s (average of longitudinal and transverse).

Number density: $n = \frac{\rho N_A}{M} = \frac{8.96 \times 6.022 \times 10^{23}}{63.55} = 8.49 \times 10^{28}\ \mathrm{m}^{-3}$.

$$\Theta_D = \frac{\hbar v_s}{k_B}(6\pi^2 n)^{1/3}$$

$$(6\pi^2 n)^{1/3} = (6\pi^2 \times 8.49 \times 10^{28})^{1/3} = (5.03 \times 10^{30})^{1/3} = 1.71 \times 10^{10}\ \mathrm{m}^{-1}$$

$$\Theta_D = \frac{1.055 \times 10^{-34} \times 3810}{1.381 \times 10^{-23}} \times 1.71 \times 10^{10} = 2.91 \times 10^{-8} \times 1.71 \times 10^{10} = 498\ \mathrm{K}$$

The accepted experimental value is $\Theta_D = 343$ K. The discrepancy arises because the Debye
model uses a single average sound velocity, while the real phonon spectrum is anisotropic.

</details>

:::caution Common Pitfall
The Debye and Einstein models describe the *lattice* contribution to specific heat. At low
temperatures, the electronic specific heat $C_e = \gamma T$ also contributes and can dominate over
the lattice $T^3$ term in metals. The total low-$T$ specific heat of a metal is
$C_V = \gamma T + \beta T^3$, where $\beta$ is related to $\Theta_D$. A plot of $C_V/T$ versus
$T^2$ yields $\gamma$ (intercept) and $\beta$ (slope).
:::

<details>
<summary>Worked Example: Comparing Debye and Einstein Specific Heats</summary>

For aluminium: $\Theta_D = 428$ K. Fit an Einstein temperature to match the Debye model at
$T = \Theta_D/2 = 214$ K.

The Debye specific heat at $T/\Theta_D = 0.5$:

$$\frac{C_V}{3Nk_B} = \left(\frac{T}{\Theta_D}\right)^3 \int_0^{\Theta_D/T} \frac{x^4 e^x}{(e^x - 1)^2}\,dx = 0.125 \times \int_0^2 \frac{x^4 e^x}{(e^x - 1)^2}\,dx$$

Numerical evaluation gives $C_V/(3Nk_B) \approx 0.825$ at $T/\Theta_D = 0.5$.

For the Einstein model, $\Theta_E \approx 0.75\,\Theta_D$ gives a good match at intermediate
temperatures. The Einstein model overestimates $C_V$ at low $T$ and is less accurate overall, but
it is simpler to evaluate analytically.

At $T = 300$ K: $T/\Theta_D = 0.70$, and both models give $C_V \approx 0.94 \times 3Nk_B$,
approaching the Dulong--Petit limit.

</details>

<details>
<summary>Worked Example: Phonon Mean Free Path in Copper</summary>

For copper at 300 K: $\Theta_D = 343$ K, $v_s = 3810$ m/s, thermal conductivity
$\kappa_{\mathrm{ph}} = 401$ W/(m$\cdot$K), and $C_V \approx 3Nk_B = 3 \times 8.49 \times 10^{28} \times 1.381 \times 10^{-23} = 3.52 \times 10^6$ J/(m$^3\cdot$K).

From $\kappa = \frac{1}{3}C_V v_s \ell$:

$$\ell = \frac{3\kappa}{C_V v_s} = \frac{3 \times 401}{3.52 \times 10^6 \times 3810} = 8.97 \times 10^{-8}\ \mathrm{m} \approx 90\ \mathrm{nm}$$

This is much shorter than the sample size, confirming that phonon--phonon (Umklapp) scattering
dominates at room temperature. At 10 K, the mean free path would be limited by sample boundaries.

</details>

### 4.8 Neutron Scattering

Neutrons are an ideal probe of phonons because their de Broglie wavelength ($\sim 1$ Å) matches
lattice spacings, and their energy ($\sim 10$--$100$ meV) matches phonon energies. In an **inelastic
neutron scattering** experiment, the energy and momentum transfer are measured:

$$\hbar\omega = E_i - E_f, \quad \mathbf{q} = \mathbf{k}_i - \mathbf{k}_f$$

The scattering cross-section is proportional to the dynamical structure factor $S(\mathbf{q}, \omega)$,
which has peaks when $\hbar\omega = \hbar\omega_{\mathbf{q}s}$ (phonon creation) or
$\hbar\omega = -\hbar\omega_{\mathbf{q}s}$ (phonon annihilation). This allows direct measurement of
the full phonon dispersion relation $\omega(\mathbf{q})$.

Time-of-flight and triple-axis spectrometers are the primary instruments used. Neutron scattering
has provided definitive measurements of phonon dispersions in virtually all important crystals.

## 5. Electronic Band Structure

### 5.1 Free Electron Model

In the simplest model, conduction electrons move freely in a box of volume $V$ (the "jellium" model).
The allowed wave vectors are:

$$\mathbf{k} = \frac{2\pi}{L}(n_x, n_y, n_z), \quad n_i \in \mathbb{Z}$$

The energy spectrum:

$$\varepsilon(\mathbf{k}) = \frac{\hbar^2 k^2}{2m_e}$$

The **Fermi wave vector** is determined by the electron density $n = N/V$:

$$k_F = (3\pi^2 n)^{1/3}$$

The **Fermi energy:**

$$\varepsilon_F = \frac{\hbar^2 k_F^2}{2m_e}$$

### 5.2 Density of States

For a 3D free electron gas:

$$g(\varepsilon) = \frac{V}{2\pi^2}\left(\frac{2m_e}{\hbar^2}\right)^{3/2}\sqrt{\varepsilon}$$

**Derivation.** The number of states with $\lvert\mathbf{k}\rvert \leq k$ is:

$$N(k) = 2 \cdot \frac{V}{(2\pi)^3} \cdot \frac{4\pi k^3}{3}$$

where the factor of 2 accounts for spin. Differentiating:
$g(k)\,dk = dN/dk\,dk = (Vk^2/\pi^2)\,dk$. Converting to energy:
$g(\varepsilon) = g(k)\lvert dk/d\varepsilon\rvert = (Vk^2/\pi^2)(m_e/\hbar^2 k)$. $\blacksquare$

At the Fermi energy: $g(\varepsilon_F) = \frac{3N}{2\varepsilon_F}$.

**The Fermi surface** is the surface in $\mathbf{k}$-space defined by $\varepsilon(\mathbf{k}) = \varepsilon_F$.
For the free electron gas, this is a sphere of radius $k_F$. The shape of the Fermi surface
strongly influences transport properties (conductivity, Hall effect, cyclotron resonance).

In real metals, the periodic potential distorts the Fermi surface from a sphere. At the Brillouin
zone boundaries, band gaps open and the Fermi surface can develop "necks" (connecting to adjacent
zones) or become multiply connected. The topology of the Fermi surface determines whether a material
is a metal or insulator: a material is metallic if the Fermi surface crosses any Brillouin zone
boundary.

The number of electrons per atom determines the filling: 1 electron/atom (e.g., Na, Cu) gives a
nearly spherical Fermi surface well within the first BZ. 2 electrons/atom (e.g., Mg) nearly fills
the first BZ and the Fermi surface contacts the zone boundary. 3--4 electrons/atom (e.g., Al, Pb)
produce complex multiply-connected Fermi surfaces.

### 5.3 Bloch's Theorem

**Theorem 5.1 (Bloch, 1928).** The eigenstates of the one-electron Hamiltonian in a periodic
potential $V(\mathbf{r} + \mathbf{R}) = V(\mathbf{r})$ can be written as:

$$\psi_{n\mathbf{k}}(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}} u_{n\mathbf{k}}(\mathbf{r})$$

where $u_{n\mathbf{k}}(\mathbf{r})$ has the periodicity of the lattice: $u_{n\mathbf{k}}(\mathbf{r} + \mathbf{R}) = u_{n\mathbf{k}}(\mathbf{r})$.

**Proof.** The translation operators $\hat{T}_{\mathbf{R}}$ commute with the Hamiltonian
$\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r})$ since $V$ is periodic. Therefore, the
eigenstates of $\hat{H}$ can be chosen as simultaneous eigenstates of all $\hat{T}_{\mathbf{R}}$:

$$\hat{T}_{\mathbf{R}}\psi(\mathbf{r}) = \psi(\mathbf{r} + \mathbf{R}) = c_{\mathbf{R}}\psi(\mathbf{r})$$

From the composition rule $\hat{T}_{\mathbf{R}_1}\hat{T}_{\mathbf{R}_2} = \hat{T}_{\mathbf{R}_1 + \mathbf{R}_2}$:

$$c_{\mathbf{R}_1 + \mathbf{R}_2} = c_{\mathbf{R}_1} c_{\mathbf{R}_2}$$

The only solution of this functional equation is $c_{\mathbf{R}} = e^{i\mathbf{k}\cdot\mathbf{R}}$.
Therefore $\psi(\mathbf{r} + \mathbf{R}) = e^{i\mathbf{k}\cdot\mathbf{R}}\psi(\mathbf{r})$, which is
satisfied by $\psi(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}}u_{\mathbf{k}}(\mathbf{r})$ with
$u_{\mathbf{k}}$ periodic. $\blacksquare$

**Consequences:**

- $\mathbf{k}$ is defined only up to a reciprocal lattice vector: $\mathbf{k}$ and $\mathbf{k} + \mathbf{G}$
  are equivalent.
- The energy spectrum consists of **bands** $\varepsilon_n(\mathbf{k})$, each labelled by a band index $n$.
- Band gaps appear between allowed energy bands.

### 5.4 Nearly Free Electron Model

Starting from the free electron model, a weak periodic potential $V(\mathbf{r}) = \sum_{\mathbf{G}} V_{\mathbf{G}} e^{i\mathbf{G}\cdot\mathbf{r}}$
opens gaps at the Brillouin zone boundaries where $\lvert\mathbf{k}\rvert = \lvert\mathbf{k} + \mathbf{G}\rvert$ (Bragg
condition).

At the zone boundary $\mathbf{k} = \mathbf{G}/2$, the gap is:

$$\Delta\varepsilon = 2\lvert V_{\mathbf{G}}\rvert$$

**Derivation.** Near the zone boundary, the free electron states at $\mathbf{k}$ and $\mathbf{k} - \mathbf{G}$
are degenerate: $\varepsilon_{\mathbf{k}}^0 = \varepsilon_{\mathbf{k} - \mathbf{G}}^0$. Degenerate
perturbation theory gives:

$$\det\begin{pmatrix} \varepsilon_{\mathbf{k}}^0 - E & V_{\mathbf{G}} \\ V_{\mathbf{G}}^* & \varepsilon_{\mathbf{k} - \mathbf{G}}^0 - E \end{pmatrix} = 0$$

At $\mathbf{k} = \mathbf{G}/2$: $E = \varepsilon_{\mathbf{G}/2}^0 \pm \lvert V_{\mathbf{G}}\rvert$, so the gap is
$2\lvert V_{\mathbf{G}}\rvert$. $\blacksquare$

### 5.5 Drude Model

The **Drude model** (1900) treats conduction electrons as a classical ideal gas scattering off
static ions with a mean free time $\tau$ (relaxation time).

**Equation of motion.** Under an electric field $\mathbf{E}$:

$$m_e\frac{d\mathbf{v}}{dt} = -e\mathbf{E} - \frac{m_e\mathbf{v}}{\tau}$$

The second term represents a frictional drag with characteristic time $\tau$.

**DC conductivity.** In steady state ($d\mathbf{v}/dt = 0$): $\mathbf{v}_d = -\frac{e\tau}{m_e}\mathbf{E}$.
The current density: $\mathbf{J} = -ne\mathbf{v}_d = \frac{ne^2\tau}{m_e}\mathbf{E}$.

$$\sigma = \frac{ne^2\tau}{m_e}$$

**AC conductivity.** For $\mathbf{E}(t) = \mathbf{E}_0\,e^{-i\omega t}$, the Drude model gives:

$$\sigma(\omega) = \frac{ne^2\tau/m_e}{1 - i\omega\tau} = \frac{\sigma_0}{1 - i\omega\tau}$$

The real part $\mathrm{Re}[\sigma(\omega)] = \frac{\sigma_0}{1 + \omega^2\tau^2}$ describes absorption,
peaking at $\omega = 0$ (the Drude peak). This explains the metallic reflectivity in the infrared.

**Hall effect.** With $\mathbf{B} = B\hat{z}$ applied, the steady-state equation becomes:

$$-e\mathbf{E} - \frac{m_e\mathbf{v}}{\tau} - e\mathbf{v} \times \mathbf{B} = 0$$

For current $\mathbf{J} = J_x\hat{x}$, a transverse field $E_y$ develops:

$$R_H = \frac{E_y}{J_x B} = -\frac{1}{ne}$$

This provides a direct measurement of the carrier density $n$.

**Successes:** Ohm's law ($\mathbf{J} = \sigma\mathbf{E}$), Wiedemann--Franz law
($\kappa/\sigma T = \frac{\pi^2 k_B^2}{3e^2}$), Hall effect.

**Failures:** Predicts $\chi \propto T^{-1}$ (Curie law) for magnetic susceptibility, but real
metals have nearly temperature-independent Pauli paramagnetism. Predicts $C_V = \frac{3}{2}nk_B$
but experiments give $C_V \ll \frac{3}{2}nk_B$ at room temperature.

### 5.6 Sommerfeld Model

The **Sommerfeld model** (1928) corrects the Drude model by treating electrons as a **Fermi gas**
obeying Fermi--Dirac statistics:

$$f(\varepsilon) = \frac{1}{e^{(\varepsilon - \mu)/k_B T} + 1}$$

At $T = 0$, the chemical potential equals the Fermi energy: $\mu(0) = \varepsilon_F$. At finite $T$:

$$\mu(T) = \varepsilon_F\left[1 - \frac{\pi^2}{12}\left(\frac{k_B T}{\varepsilon_F}\right)^2 + \cdots\right]$$

Since $\varepsilon_F/k_B \sim 10^4$ K for metals, the correction at room temperature is negligible:
the chemical potential is essentially constant.

**Electronic specific heat.** By the Sommerfeld expansion:

$$C_e = \frac{\pi^2}{3}k_B^2\,g(\varepsilon_F)\,T = \gamma T$$

where $\gamma = \frac{\pi^2}{2}\frac{Nk_B^2}{\varepsilon_F}$. At room temperature, only electrons within
$\sim k_B T$ of $\varepsilon_F$ can be thermally excited, which is a tiny fraction
$\sim T/T_F \sim 1/100$ of the total. This explains why $C_e \ll \frac{3}{2}Nk_B$.

**Pauli paramagnetism.** The spin susceptibility of a degenerate electron gas:

$$\chi_P = \mu_0\mu_B^2\,g(\varepsilon_F) = \frac{3\mu_0\mu_B^2 N}{2\varepsilon_F}$$

This is independent of $T$ (up to corrections of order $(T/T_F)^2$), in contrast to the Curie law
$\chi \propto 1/T$ of the Drude model.

<details>
<summary>Derivation: Sommerfeld Expansion</summary>

To compute thermal averages at low $T$, we integrate $h(\varepsilon) f(\varepsilon)$ where
$f(\varepsilon) = 1/(e^{\beta(\varepsilon - \mu)} + 1)$ is the Fermi--Dirac distribution and $h(\varepsilon)$
is any smooth function (e.g., density of states times energy).

Define $H(\varepsilon) = \int_0^\varepsilon h(\varepsilon')\,d\varepsilon'$. Then:

$$I = \int_0^\infty h(\varepsilon)f(\varepsilon)\,d\varepsilon = \int_0^\infty \frac{dH}{d\varepsilon}\,f\,d\varepsilon = [Hf]_0^\infty + \int_0^\infty H(\varepsilon)\left(-\frac{\partial f}{\partial \varepsilon}\right)d\varepsilon$$

Since $f(0) \approx 1$ and $f(\infty) = 0$, and $-\partial f/\partial \varepsilon$ is sharply peaked
at $\varepsilon = \mu$ with width $\sim k_B T$, we expand $H(\varepsilon)$ about $\mu$:

$$I = \int_0^\mu h(\varepsilon)\,d\varepsilon + \frac{\pi^2}{6}(k_B T)^2 h'(\mu) + \cdots$$

For the total energy with $h(\varepsilon) = \varepsilon\,g(\varepsilon)$:

$$E = \int_0^{\mu_0} \varepsilon\,g(\varepsilon)\,d\varepsilon + \frac{\pi^2}{6}(k_B T)^2 \frac{d}{d\varepsilon}[\varepsilon g(\varepsilon)]_{\varepsilon = \mu_0} + \cdots$$

Differentiating with respect to $T$ gives the specific heat $C_V = \frac{\pi^2}{3}k_B^2\,g(\varepsilon_F)\,T$.
$\blacksquare$

</details>

<details>
<summary>Worked Example: Fermi Energy of Sodium</summary>

Sodium has $n = 2.65 \times 10^{28}\ \mathrm{m}^{-3}$ conduction electrons (one per atom, BCC structure).

$$k_F = (3\pi^2 n)^{1/3} = (3\pi^2 \times 2.65 \times 10^{28})^{1/3} = (7.85 \times 10^{29})^{1/3} = 9.23 \times 10^9\ \mathrm{m}^{-1}$$

$$\varepsilon_F = \frac{\hbar^2 k_F^2}{2m_e} = \frac{(1.055 \times 10^{-34})^2 \times (9.23 \times 10^9)^2}{2 \times 9.11 \times 10^{-31}} = \frac{9.48 \times 10^{-58}}{1.82 \times 10^{-30}} = 5.21 \times 10^{-19}\ \mathrm{J} = 3.25\ \mathrm{eV}$$

$$T_F = \frac{\varepsilon_F}{k_B} = \frac{5.21 \times 10^{-19}}{1.381 \times 10^{-23}} = 3.77 \times 10^4\ \mathrm{K}$$

$$v_F = \frac{\hbar k_F}{m_e} = \frac{1.055 \times 10^{-34} \times 9.23 \times 10^9}{9.11 \times 10^{-31}} = 1.07 \times 10^6\ \mathrm{m/s}$$

The electronic specific heat coefficient:
$\gamma = \frac{\pi^2}{2}\frac{nk_B^2}{\varepsilon_F} = \frac{\pi^2 \times 2.65 \times 10^{28} \times (1.381 \times 10^{-23})^2}{2 \times 5.21 \times 10^{-19}} = 1.38 \times 10^3\ \mathrm{J/(m^3\cdot K^2)}$

</details>

### 5.7 Tight-Binding Model

The **tight-binding model** starts from isolated atomic orbitals and treats the overlap between
neighbours as a perturbation. For a 1D chain with lattice constant $a$ and a single $s$-orbital
of energy $\varepsilon_0$:

$$\psi_k(r) = \frac{1}{\sqrt{N}}\sum_n e^{ikna}\,\phi(r - na)$$

where $\phi(r - na)$ is the atomic orbital centred at site $n$.

**Dispersion relation** (nearest-neighbour approximation):

$$\varepsilon(k) = \varepsilon_0 - 2t\cos(ka)$$

where $t = -\int \phi^*(r - na)\,\hat{H}\,\phi(r - (n+1)a)\,dr$ is the **hopping integral**
($t > 0$ for typical $s$-orbitals).

**Key features:**

- Band width: $W = 4t$.
- Minimum at $k = 0$: $\varepsilon_{\min} = \varepsilon_0 - 2t$.
- Maximum at $k = \pm\pi/a$: $\varepsilon_{\max} = \varepsilon_0 + 2t$.
- Effective mass at band bottom: $m^* = \hbar^2/(2ta^2)$.

**Extension to 3D:** For a simple cubic lattice with nearest-neighbour hopping:

$$\varepsilon(\mathbf{k}) = \varepsilon_0 - 2t(\cos k_x a + \cos k_y a + \cos k_z a)$$

The band width is $W = 12t$ and the density of states develops a van Hove singularity at
$\varepsilon = \varepsilon_0$.

<details>
<summary>Worked Example: Tight-Binding Band Structure of Graphene</summary>

Graphene has a honeycomb lattice with two carbon atoms per unit cell. Using $p_z$ orbitals with
nearest-neighbour hopping $t \approx 2.8$ eV, the tight-binding Hamiltonian gives:

$$\varepsilon_{\pm}(\mathbf{k}) = \pm t\left\lvert 1 + e^{i\mathbf{k}\cdot\mathbf{a}_1} + e^{i\mathbf{k}\cdot\mathbf{a}_2}\right\rvert$$

where $\mathbf{a}_1$ and $\mathbf{a}_2$ are the primitive vectors of the hexagonal lattice.

The two bands touch at the **Dirac points** $\mathbf{K}$ and $\mathbf{K}'$ in the Brillouin zone.
Near these points, expanding to linear order:

$$\varepsilon(\mathbf{q}) = \pm \hbar v_F \lvert\mathbf{q}\rvert$$

where $v_F = \frac{\sqrt{3}}{2}\frac{ta}{\hbar} \approx 10^6$ m/s and $\mathbf{q} = \mathbf{k} - \mathbf{K}$.

This linear (Dirac-like) dispersion means graphene has zero effective mass and a density of states
$g(\varepsilon) \propto \lvert\varepsilon\rvert$ (linear in energy), unlike the $\sqrt{\varepsilon}$
dependence of a parabolic band.

</details>

### 5.8 Effective Mass

Near a band extremum at $\mathbf{k}_0$, the energy can be expanded:

$$\varepsilon(\mathbf{k}) = \varepsilon_0 + \frac{\hbar^2}{2}\sum_{ij}(m^{-1})_{ij}(k_i - k_{0,i})(k_j - k_{0,j})$$

The **effective mass tensor** $(m^{-1})_{ij} = \frac{1}{\hbar^2}\frac{\partial^2 \varepsilon}{\partial k_i \partial k_j}$
determines the response to external fields. For isotropic bands, $m^* = \hbar^2/(d^2\varepsilon/dk^2)$.

A large effective mass means a flat band (small group velocity). A small effective mass means a
steep band (high mobility).

The effective mass can be **negative** near a band maximum (holes). Cyclotron resonance experiments
measure $m^*$ directly: the resonance frequency is $\omega_c = eB/m^*$.

:::caution Common Pitfall
The effective mass is a tensor quantity in general. For crystals with cubic symmetry, it reduces to
a scalar, but for anisotropic crystals (e.g., graphite, silicon), different effective masses apply
along different crystallographic directions. Always check the crystal symmetry before assuming
$m^*$ is a scalar.
:::

### 5.9 Band Structure Calculations

Modern band structure calculations are based on **density functional theory** (DFT), formulated by
Hohenberg, Kohn, and Sham (1964--1965).

**Hohenberg--Kohn theorems.** (1) The ground-state energy of a many-electron system is a unique
functional of the electron density $n(\mathbf{r})$. (2) The correct ground-state density minimises
this functional.

**Kohn--Sham equations.** The interacting system is mapped to a fictitious system of non-interacting
electrons in an effective potential:

$$\left[-\frac{\hbar^2}{2m}\nabla^2 + V_{\mathrm{eff}}(\mathbf{r})\right]\psi_i(\mathbf{r}) = \varepsilon_i\psi_i(\mathbf{r})$$

where $V_{\mathrm{eff}} = V_{\mathrm{ext}} + V_H[n] + V_{\mathrm{xc}}[n]$. Here $V_{\mathrm{ext}}$ is the
external (ionic) potential, $V_H$ is the Hartree (classical Coulomb) potential, and $V_{\mathrm{xc}}$
is the exchange-correlation potential.

The electron density is $n(\mathbf{r}) = \sum_i \lvert\psi_i(\mathbf{r})\rvert^2$ (summing over occupied
states). The Kohn--Sham equations are solved self-consistently.

**Common approximations for $V_{\mathrm{xc}}$:**

- **Local density approximation (LDA):** $V_{\mathrm{xc}}(\mathbf{r}) = V_{\mathrm{xc}}^{\mathrm{hom}}(n(\mathbf{r}))$,
  using the exchange-correlation energy of a homogeneous electron gas. Good for simple metals but
  tends to underestimate band gaps.
- **Generalised gradient approximation (GGA):** Includes the density gradient
  $\nabla n(\mathbf{r})$, improving accuracy for structural properties and band gaps.
- **Hybrid functionals (e.g., HSE06):** Mix a fraction of exact Hartree--Fock exchange with DFT
  exchange, giving improved band gaps at higher computational cost.

DFT accurately predicts structural properties (lattice constants, elastic constants, phonon
frequencies within a few percent) but is less reliable for band gaps (LDA typically underestimates
by 30--50\%) and strongly correlated systems (e.g., transition metal oxides).

## 6. Semiconductors

### 6.1 Intrinsic Semiconductors

At $T = 0$, the valence band is completely filled and the conduction band is completely empty.
There is a band gap $E_g$.

At finite $T$, electrons are thermally excited across the gap. The intrinsic carrier concentration:

$$n_i = p_i = \sqrt{N_c N_v}\, e^{-E_g/(2k_B T)}$$

where $N_c$ and $N_v$ are the effective density of states in the conduction and valence bands:

$$N_c = 2\left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2}, \quad N_v = 2\left(\frac{2\pi m_h^* k_B T}{h^2}\right)^{3/2}$$

Here $m_e^*$ and $m_h^*$ are the effective masses of electrons and holes.

**Fermi level** in an intrinsic semiconductor: $E_F = (E_c + E_v)/2 + \frac{3}{4}k_B T\ln(m_h^*/m_e^*)$.
For $m_e^* = m_h^*$: $E_F = E_g/2$.

### 6.2 Extrinsic Semiconductors

**n-type:** Doping with donor atoms (e.g., P in Si) that donate electrons to the conduction band.
Majority carriers: electrons.

**p-type:** Doping with acceptor atoms (e.g., B in Si) that accept electrons from the valence band,
creating holes. Majority carriers: holes.

For $n$-type with donor concentration $N_D$ (non-degenerate, $T$ not too high):

$$n \approx N_D, \quad p = \frac{n_i^2}{N_D}$$

$$E_F \approx E_c - k_B T \ln\left(\frac{N_c}{N_D}\right)$$

For $p$-type with acceptor concentration $N_A$:

$$p \approx N_A, \quad n = \frac{n_i^2}{N_A}$$

$$E_F \approx E_v + k_B T \ln\left(\frac{N_v}{N_A}\right)$$

**Mass action law:** $np = n_i^2$ holds at thermal equilibrium regardless of doping.

### 6.3 The p-n Junction

At the interface between p-type and n-type material:

- **Depletion region:** Mobile carriers diffuse, leaving behind fixed ionised donors (n-side) and
  acceptors (p-side), creating a built-in electric field.
- **Built-in potential:** $V_0 = \frac{k_B T}{e}\ln\left(\frac{N_A N_D}{n_i^2}\right)$.
- **Depletion width:** $W = \sqrt{\frac{2\varepsilon_s V_0}{e}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)}$
  where $\varepsilon_s$ is the permittivity of the semiconductor.

**Current-voltage characteristic (Shockley equation):**

$$I = I_0\left(e^{eV/(k_B T)} - 1\right)$$

where $I_0$ is the reverse saturation current. Forward bias ($V \gt 0$) exponentially increases the
current. Reverse bias ($V \lt 0$) gives approximately $I \approx -I_0$.

**Derivation of the built-in potential.** In equilibrium, the Fermi level is constant. The potential
difference between the n-side (where $E_F$ is near $E_c$) and the p-side (where $E_F$ is near $E_v$)
is:

$$eV_0 = E_{c,n} - E_{c,p} = E_g - (E_c - E_F)_n - (E_F - E_v)_p$$

Using $n = N_c e^{-(E_c - E_F)/(k_B T)}$ and $p = N_v e^{-(E_F - E_v)/(k_B T)}$ with $np = n_i^2$:

$$V_0 = \frac{k_B T}{e}\ln\left(\frac{N_A N_D}{n_i^2}\right)$$

$\blacksquare$

**Capacitance.** The depletion region acts as a parallel-plate capacitor:

$$C = \frac{\varepsilon_s A}{W} = A\sqrt{\frac{e\varepsilon_s}{2}\frac{N_A N_D}{N_A + N_D}\frac{1}{V_0 - V}}$$

This $C \propto 1/\sqrt{V_0 - V}$ dependence is used experimentally to determine $N_A$ and $N_D$
(C--V profiling).

### 6.4 Band Diagrams

In equilibrium, the Fermi level is constant across the junction. Under forward bias, the bands on
the n-side are raised relative to the p-side, reducing the barrier. Under reverse bias, the barrier
is increased.

### 6.5 Band Gap Engineering

The electronic and optical properties of semiconductors can be tailored by forming **heterostructures**
--- junctions between different semiconductor materials.

**Band offsets.** When two semiconductors with different band gaps are joined, the conduction band
minimum and valence band maximum are offset. The **type-I** (straddling) alignment has the band gap
of one material contained within the gap of the other (e.g., GaAs/AlGaAs). The **type-II**
(staggered) alignment has the conduction and valence band edges of different materials at different
energies (e.g., InAs/GaSb).

**Quantum wells.** A thin layer of a narrow-gap semiconductor (e.g., 10 nm of GaAs) sandwiched
between wide-gap barriers (e.g., AlGaAs) confines electrons and holes in one dimension. The
confinement energy for an infinite well of width $L$:

$$E_n = \frac{n^2 \pi^2 \hbar^2}{2m^* L^2}$$

This quantisation raises the effective band gap, allowing the optical transition energy to be tuned
by varying $L$.

**Quantum wires and dots.** Further confinement in two dimensions (quantum wire) or three dimensions
(quantum dot) leads to additional quantisation. Quantum dots have discrete, atom-like energy levels
and are often called "artificial atoms."

**Strain engineering.** Lattice mismatch between a thin film and its substrate induces strain,
modifying the band structure. Tensile strain typically reduces the band gap, while compressive
strain can lift degeneracies (e.g., splitting the heavy-hole and light-hole bands).

### 6.6 Optical Properties of Semiconductors

**Absorption.** A photon of energy $\hbar\omega$ can be absorbed if $\hbar\omega \geq E_g$, promoting
an electron from the valence band to the conduction band.

- **Direct band gap** (e.g., GaAs, InP): The conduction band minimum and valence band maximum
  occur at the same $\mathbf{k}$. Photon absorption requires only energy conservation (the photon
  momentum $\hbar\omega/c \approx 0$ is negligible). The absorption coefficient rises sharply
  above $E_g$:

  $$\alpha(\omega) \propto \sqrt{\hbar\omega - E_g}$$

- **Indirect band gap** (e.g., Si, Ge): The band edges occur at different $\mathbf{k}$. A
  phonon is required to conserve momentum, making the absorption weaker and temperature-dependent:

  $$\alpha(\omega) \propto \frac{(\hbar\omega - E_g - \hbar\Omega)^2}{e^{\hbar\Omega/k_BT} - 1} + \frac{(\hbar\omega - E_g + \hbar\Omega)^2}{1 - e^{-\hbar\Omega/k_BT}}$$

  where $\hbar\Omega$ is the phonon energy.

**Excitons.** The electron and hole created by photon absorption are attracted by the Coulomb
interaction, forming a bound state called an **exciton** with binding energy:

$$E_{\mathrm{ex}} = \frac{\mu e^4}{2(4\pi\varepsilon_s)^2\hbar^2} = \frac{\mu}{m_e\varepsilon_r^2} \times 13.6\ \mathrm{eV}$$

where $\mu = m_e^* m_h^*/(m_e^* + m_h^*)$ is the reduced mass and $\varepsilon_r$ is the relative
permittivity. Excitons produce sharp absorption lines slightly below $E_g$.

**Photoluminescence.** When electron--hole pairs recombine radiatively, photons are emitted at
energies near $E_g$. Direct-gap materials are efficient light emitters (used in LEDs and laser
diodes). Indirect-gap materials like Si have very low radiative efficiency.

<details>
<summary>Worked Example: Intrinsic Carrier Concentration in Silicon</summary>

For Si at $T = 300$ K: $E_g = 1.12$ eV, $m_e^* = 1.08\,m_e$, $m_h^* = 0.56\,m_e$.

$$N_c = 2\left(\frac{2\pi \times 1.08 \times 9.11 \times 10^{-31} \times 1.381 \times 10^{-23} \times 300}{(6.626 \times 10^{-34})^2}\right)^{3/2} = 2.81 \times 10^{25}\ \mathrm{m}^{-3}$$

$$N_v = 2\left(\frac{2\pi \times 0.56 \times 9.11 \times 10^{-31} \times 1.381 \times 10^{-23} \times 300}{(6.626 \times 10^{-34})^2}\right)^{3/2} = 1.04 \times 10^{25}\ \mathrm{m}^{-3}$$

$$n_i = \sqrt{N_c N_v}\,e^{-E_g/(2k_B T)} = \sqrt{2.81 \times 1.04} \times 10^{25} \times e^{-1.12/(2 \times 0.02585)}$$

$$n_i = 1.71 \times 10^{25} \times e^{-21.66} = 1.71 \times 10^{25} \times 3.95 \times 10^{-10} = 6.75 \times 10^{15}\ \mathrm{m}^{-3}$$

The accepted value is $n_i \approx 1.5 \times 10^{16}\ \mathrm{m}^{-3}$ at 300 K.

</details>

### 6.7 Semiconductor Devices

**Light-emitting diodes (LEDs).** Under forward bias, electrons and holes are injected into the
depletion region where they recombine radiatively. The emission wavelength is determined by the
band gap: $\lambda = hc/E_g$. GaAs ($E_g = 1.42$ eV) emits in the infrared; GaN ($E_g = 3.4$ eV)
emits in the ultraviolet; InGaN alloys span the visible spectrum.

**Solar cells.** A p-n junction under illumination generates electron--hole pairs. The built-in
field separates them, producing a photocurrent. The open-circuit voltage satisfies
$V_{\mathrm{OC}} \lt E_g/e$ (typically $V_{\mathrm{OC}} \approx 0.7\,E_g/e$). The power conversion
efficiency is limited by the **Shockley--Queisser limit** ($\sim 33\%$ for a single junction)
due to spectral mismatch, thermalisation, and radiative recombination losses.

**Field-effect transistor (FET).** A voltage applied to a gate electrode modulates the conductivity
of a semiconductor channel. In a MOSFET (metal--oxide--semiconductor FET), the gate voltage creates
an inversion layer at the oxide--semiconductor interface, forming a conductive channel. The
threshold voltage $V_T$ depends on the oxide thickness, doping, and work function difference.

**HEMTs and HBTs.** High-electron-mobility transistors (HEMTs) use heterojunctions (e.g.,
AlGaAs/GaAs) to create a two-dimensional electron gas (2DEG) with very high mobility. Heterojunction
bipolar transistors (HBTs) use a wide-gap emitter to improve injection efficiency.

## 7. Superconductivity

### 7.1 Basic Phenomenology

**Superconductivity** is the complete loss of electrical resistance below a critical temperature
$T_c$. Discovered by Onnes in 1911 (mercury, $T_c = 4.2$ K).

Key experimental facts:

1. **Zero resistance:** $\rho = 0$ for $T \lt T_c$.
2. **Meissner effect:** Complete expulsion of magnetic flux from the interior: $\mathbf{B} = 0$ inside
   a superconductor (for $T \lt T_c$ and $B \lt B_c$).
3. **Critical magnetic field:** Superconductivity is destroyed above $B_c(T) = B_c(0)[1 - (T/T_c)^2]$.
4. **Critical current density:** Superconductivity is destroyed above a critical current density $J_c$.

### 7.2 London Equations

The **London equations** describe the electromagnetic response of a superconductor:

$$\frac{\partial \mathbf{J}_s}{\partial t} = \frac{n_s e^2}{m_e}\mathbf{E}$$

$$\nabla \times \mathbf{J}_s = -\frac{n_s e^2}{m_e}\mathbf{B}$$

where $n_s$ is the density of superconducting electrons.

Combining with Maxwell's equations:

$$\nabla^2 \mathbf{B} = \frac{1}{\lambda_L^2}\mathbf{B}$$

where $\lambda_L = \sqrt{m_e/(\mu_0 n_s e^2)}$ is the **London penetration depth**.

The solution $\mathbf{B}(x) = B_0 e^{-x/\lambda_L}$ shows that magnetic fields decay exponentially
inside the superconductor, explaining the Meissner effect.

### 7.3 BCS Theory

**BCS theory** (Bardeen, Cooper, Schrieffer, 1957) explains superconductivity through the formation
of **Cooper pairs**.

**Cooper pairing.** Two electrons with opposite momenta and spins form a bound state via the
electron-phonon interaction (the lattice mediates an effective attractive interaction). The Cooper pair
has charge $2e$ and spin 0 (boson).

**The BCS gap equation:**

$$\Delta = V_{\mathrm{pair}} \sum_{\mathbf{k}} \frac{\Delta}{2E_{\mathbf{k}}} \tanh\left(\frac{E_{\mathbf{k}}}{2k_B T}\right)$$

where $E_{\mathbf{k}} = \sqrt{\xi_{\mathbf{k}}^2 + \Delta^2}$ is the quasiparticle energy, $\xi_{\mathbf{k}}$
is the normal-state energy relative to $E_F$, and $\Delta$ is the superconducting energy gap.

At $T = 0$: $\Delta(0) = 2\hbar\omega_D\, e^{-1/(N(E_F)V_{\mathrm{pair}})}$ (BCS formula).

The critical temperature:

$$k_B T_c = 1.13\,\hbar\omega_D\, e^{-1/(N(E_F)V_{\mathrm{pair}})}$$

The ratio $2\Delta(0)/(k_B T_c) \approx 3.53$ is a universal BCS prediction.

### 7.4 Type I and Type II Superconductors

**Type I:** One critical field $B_c$. Below $B_c$: complete Meissner effect. Above $B_c$: normal
state. Examples: Pb, Hg, Al.

**Type II:** Two critical fields $B_{c1} \lt B_{c2}$. For $B_{c1} \lt B \lt B_{c2}$: **mixed state**
(vortices with normal cores in a superconducting matrix). For $B \gt B_{c2}$: normal state.
Examples: Nb, YBCO (high-$T_c$).

### 7.5 High-Temperature Superconductors

Discovered in 1986 (Bednorz and Müller). Cuprate superconductors such as YBa$_2$Cu$_3$O$_{7-\delta}$
(YBCO) have $T_c$ up to $\sim 135$ K. These are Type II, layered, and not fully explained by BCS
theory (the pairing mechanism is still debated).

**Key properties of high-$T_c$ superconductors:**

- **d-wave pairing symmetry:** Unlike conventional BCS superconductors (s-wave), cuprates have a
  gap function with $d_{x^2-y^2}$ symmetry: $\Delta(\mathbf{k}) = \Delta_0(\cos k_x - \cos k_y)/2$,
  which vanishes along the nodal directions $k_x = \pm k_y$.
- **Short coherence length:** $\xi \sim 1$--$2$ nm (compared with $\sim 100$ nm for conventional
  superconductors), making them sensitive to defects but allowing high critical current densities.
- **Strong anisotropy:** Superconducting properties differ dramatically between the $ab$-planes
  and the $c$-axis direction.
- **Pseudogap phase:** Above $T_c$ but below a characteristic temperature $T^*$, a partial gap
  opens in the electronic spectrum, suggesting precursive pairing correlations.
- **Phase diagram:** Doping controls the transition from antiferromagnetic insulator (underdoped)
  through the superconducting dome to a normal metal (overdoped).

Other families of high-$T_c$ superconductors include iron-based pnictides ($T_c$ up to 56 K),
magnesium diboride MgB$_2$ ($T_c = 39$ K), and the recently discovered nickelates and hydrides
($T_c$ up to $\sim 250$ K under extreme pressure).

## 8. Transport Properties

### 8.1 Electrical Conductivity: Drude Model

The **Drude model** treats conduction electrons as a classical gas scattering off ions with a mean
free time $\tau$.

Under an electric field $\mathbf{E}$, the equation of motion:

$$m_e\frac{d\mathbf{v}}{dt} = -e\mathbf{E} - \frac{m_e\mathbf{v}}{\tau}$$

In steady state ($d\mathbf{v}/dt = 0$): $\mathbf{v}_d = -\frac{e\tau}{m_e}\mathbf{E}$.

The current density: $\mathbf{J} = -ne\mathbf{v}_d = \frac{ne^2\tau}{m_e}\mathbf{E}$.

The **Drude conductivity:**

$$\sigma = \frac{ne^2\tau}{m_e}$$

The **mean free path:** $\ell = v_F\tau$.

**Successes:** Explains Ohm's law ($\mathbf{J} = \sigma\mathbf{E}$) and the Wiedemann--Franz law
($\kappa/\sigma = LT$ with $L = \pi^2 k_B^2/(3e^2)$).

**Failures:** Predicts the wrong temperature dependence ($\rho \propto T$, but experiments show
$\rho \propto T^5$ at low $T$ for pure metals). Predicts $\gamma_{\mathrm{electron}} = \frac{3}{2}nk_B$
but experiments give $\gamma_{\mathrm{electron}} = \frac{\pi^2}{2}nk_B(T/T_F)$ (much smaller).

### 8.2 The Boltzmann Transport Equation

The semiclassical distribution function $f(\mathbf{r}, \mathbf{k}, t)$ satisfies:

$$\frac{\partial f}{\partial t} + \mathbf{v}_{\mathbf{k}} \cdot \nabla_{\mathbf{r}} f - \frac{e\mathbf{E}}{\hbar}\cdot\nabla_{\mathbf{k}} f = \left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}$$

In the **relaxation time approximation:**

$$\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}} = -\frac{f - f_0}{\tau}$$

where $f_0$ is the equilibrium distribution.

**Solution for conductivity.** In a uniform electric field with $f = f_0 + f_1$:

$$f_1 = e\tau\mathbf{E}\cdot\mathbf{v}_{\mathbf{k}}\frac{\partial f_0}{\partial\varepsilon}$$

The conductivity becomes:

$$\sigma = \frac{e^2}{3}\int \tau(\varepsilon)\,v^2(\varepsilon)\,g(\varepsilon)\left(-\frac{\partial f_0}{\partial\varepsilon}\right) d\varepsilon$$

At low $T$, $-\partial f_0/\partial\varepsilon \approx \delta(\varepsilon - \varepsilon_F)$, so only states
near $E_F$ contribute to transport. This explains why impurity scattering dominates at low $T$
(even a small concentration of impurities affects states near $E_F$).

**Matthiessen's rule.** When multiple scattering mechanisms act independently, the total resistivity
is approximately additive:

$$\rho(T) = \rho_0 + \rho_{\mathrm{ph}}(T)$$

where $\rho_0$ is the residual resistivity (temperature-independent, from impurities and defects)
and $\rho_{\mathrm{ph}}(T)$ is the phonon contribution (proportional to $T$ at high $T$ and to $T^5$
at low $T$ via the Bloch--Grüneisen formula). The **resistance ratio** $RRR = \rho(300\ \mathrm{K})/\rho_0$
is a measure of sample purity.

**Bloch--Grüneisen formula.** For electron--phonon scattering in a free electron metal:

$$\rho_{\mathrm{ph}}(T) \propto \left(\frac{T}{\Theta_D}\right)^5 \int_0^{\Theta_D/T} \frac{x^5}{(e^x - 1)(1 - e^{-x})}\,dx$$

At high $T$ ($T \gt \Theta_D$): $\rho_{\mathrm{ph}} \propto T$ (linear, agreeing with the Drude model).
At low $T$ ($T \ll \Theta_D$): $\rho_{\mathrm{ph}} \propto T^5$, consistent with experiment.

### 8.3 Thermal Conductivity

The thermal conductivity of electrons:

$$\kappa_e = \frac{1}{3}c_e v_F \ell_e$$

where $c_e = \frac{\pi^2}{2}nk_B(T/T_F)$ is the electronic specific heat. The phonon contribution:

$$\kappa_{\mathrm{ph}} = \frac{1}{3}C_V v_s \ell_{\mathrm{ph}}$$

The total thermal conductivity: $\kappa = \kappa_e + \kappa_{\mathrm{ph}}$.

### 8.4 The Hall Effect

When a magnetic field $\mathbf{B} = B\hat{\mathbf{z}}$ is applied perpendicular to a current
$\mathbf{J} = J_x\hat{\mathbf{x}}$, a transverse electric field develops:

$$E_y = R_H J_x B$$

The **Hall coefficient:** $R_H = -1/(ne)$ for a single carrier type.

The **Hall angle:** $\theta_H = \arctan(E_y/E_x) = \omega_c\tau$ where $\omega_c = eB/m^*$ is the
cyclotron frequency.

### 8.5 Effective Mass

Near a band extremum, the energy can be expanded:

$$\varepsilon(\mathbf{k}) = \varepsilon_0 + \frac{\hbar^2}{2}\sum_{ij}(m^{-1})_{ij}k_i k_j$$

The **effective mass tensor** $(m^{-1})_{ij} = \frac{1}{\hbar^2}\frac{\partial^2 \varepsilon}{\partial k_i \partial k_j}$
determines the response to external fields. For isotropic bands, $m^* = \hbar^2/(d^2\varepsilon/dk^2)$.

A large effective mass means a flat band (small group velocity). A small effective mass means a
steep band (high mobility).

## 9. Defects in Crystals

### 9.1 Point Defects

- **Vacancy:** Missing atom at a lattice site.
- **Interstitial:** Extra atom between lattice sites.
- **Substitutional:** Foreign atom replacing a host atom.
- **Frenkel defect:** Vacancy-interstitial pair (atom moves to interstitial site).
- **Schottky defect:** Vacancy pair (in ionic crystals, cation and anion vacancies).

**Equilibrium concentration of vacancies:**

$$n_v = N\,e^{-E_v/(k_B T)}$$

where $N$ is the number of lattice sites and $E_v$ is the vacancy formation energy ($\sim 1$ eV).

**Derivation.** Minimising the free energy $F = n_v E_v - T S_{\mathrm{config}}$ where
$S_{\mathrm{config}} = k_B \ln\binom{N}{n_v}$:

$$\frac{\partial F}{\partial n_v} = E_v + k_B T \ln\left(\frac{n_v}{N - n_v}\right) = 0$$

For $n_v \ll N$: $n_v = N e^{-E_v/(k_B T)}$. $\blacksquare$

### 9.2 Dislocations

- **Edge dislocation:** Extra half-plane inserted into the lattice. Burgers vector $\mathbf{b}$ is
  perpendicular to the dislocation line.
- **Screw dislocation:** The lattice is sheared. $\mathbf{b}$ is parallel to the dislocation line.

Dislocations enable **plastic deformation** at stresses far below the theoretical shear strength.
The Peach-Koehler force on a dislocation:

$$\mathbf{F} = (\boldsymbol{\sigma}\cdot\mathbf{b}) \times \hat{\mathbf{t}}$$

where $\boldsymbol{\sigma}$ is the stress tensor and $\hat{\mathbf{t}}$ is the unit tangent to the
dislocation line.

### 9.3 Impact on Properties

Defects strongly affect electrical, mechanical, and thermal properties:
- **Electrical:** Donor and acceptor levels in semiconductors are substitutional defects. Vacancies
  act as scattering centres, reducing conductivity.
- **Mechanical:** Dislocations determine yield strength (Hall--Petch relation). Work hardening
  increases dislocation density.
- **Thermal:** Point defects scatter phonons, reducing thermal conductivity.

## 10. Magnetism in Solids

### 10.1 Types of Magnetism

- **Diamagnetism:** Weak, negative susceptibility ($\chi \lt 0$). Present in all materials. Arises from
  the orbital response to an applied field (Lenz's law). $\chi_d \sim -10^{-5}$.
- **Paramagnetism:** Positive susceptibility ($\chi \gt 0$). Unpaired spins align with the field.
  Curie law: $\chi = C/T$ where $C = N\mu_0\mu_{\mathrm{eff}}^2/(3k_B)$.
- **Ferromagnetism:** Large positive susceptibility. Spontaneous magnetisation below the Curie
  temperature $T_C$.
- **Antiferromagnetism:** Adjacent spins antiparallel. Susceptibility peaks at the Néel temperature $T_N$.
- **Ferrimagnetism:** Antiparallel spins of unequal magnitude. Net magnetisation (e.g., magnetite).

### 10.2 Diamagnetism

Diamagnetism is the universal tendency of matter to weakly oppose an applied magnetic field.

**Langevin diamagnetism.** For an atom with $Z$ electrons, each in a circular orbit of radius
$\langle r^2 \rangle$, a field $B$ along $z$ modifies the angular velocity by
$\Delta\omega = eB/(2m_e)$. The induced magnetic moment per atom:

$$\mu_{\mathrm{dia}} = -\frac{e^2 B}{6m_e}\sum_{i=1}^{Z}\langle r_i^2 \rangle = -\frac{e^2 Z B}{6m_e}\langle r^2 \rangle$$

The susceptibility (per unit volume, with $n$ atoms per unit volume):

$$\chi_L = -\frac{\mu_0 n e^2 Z \langle r^2 \rangle}{6m_e}$$

This is independent of temperature and very small: $\chi_L \sim -10^{-5}$.

**Landau diamagnetism.** Free electrons also exhibit diamagnetism. The quantisation of electron
orbits into Landau levels modifies the ground-state energy in an applied field:

$$\chi_{\mathrm{Landau}} = -\frac{1}{3}\chi_P = -\frac{\mu_0 \mu_B^2 g(\varepsilon_F)}{3}$$

where $\chi_P$ is the Pauli paramagnetic susceptibility. The total susceptibility of a free electron
gas is $\chi = \chi_P + \chi_{\mathrm{Landau}} = \frac{2}{3}\chi_P$ (still paramagnetic, but
reduced by one-third).

### 10.3 Paramagnetism

**Langevin paramagnetism (classical).** For $N$ non-interacting magnetic moments $\boldsymbol{\mu}$
of magnitude $\mu$ in a field $B$:

$$M = N\mu\, L(\mu B/k_B T)$$

where $L(x) = \coth x - 1/x$ is the Langevin function. At high temperature ($\mu B \ll k_B T$):

$$L(x) \approx \frac{x}{3} \implies M \approx \frac{N\mu^2 B}{3k_B T}$$

giving the **Curie law** $\chi = C/T$ with $C = N\mu_0\mu^2/(3k_B)$.

**Quantum treatment (Brillouin function).** For angular momentum $J$ with $g_J$ the Landé g-factor,
the magnetisation is:

$$M = Ng_J\mu_B J\, B_J(x)$$

where $x = g_J\mu_B J B/(k_B T)$ and $B_J(x) = \frac{2J+1}{2J}\coth\left(\frac{2J+1}{2J}x\right) - \frac{1}{2J}\coth\left(\frac{x}{2J}\right)$
is the Brillouin function. For $J = 1/2$ (spin-1/2), $B_{1/2}(x) = \tanh x$.

**Pauli paramagnetism.** In a metal, the conduction electrons form a degenerate Fermi gas. Only
electrons near $\varepsilon_F$ can flip their spins in response to a field:

$$\chi_P = \mu_0\mu_B^2\,g(\varepsilon_F) = \frac{3\mu_0\mu_B^2 N}{2\varepsilon_F}$$

This is temperature-independent (up to corrections of order $(T/T_F)^2$), in contrast to the Curie
law. The ratio $\chi_P/\chi_{\mathrm{Curie}} \sim T/T_F \sim 10^{-2}$ at room temperature,
explaining why metals are only weakly paramagnetic.

### 10.4 Ferromagnetism and the Mean-Field Theory

In the **mean-field (Weiss) model**, each spin experiences an effective field:

$$B_{\mathrm{eff}} = B_0 + \lambda M$$

where $\lambda$ is the molecular field constant and $M$ is the magnetisation.

The spontaneous magnetisation satisfies:

$$M = N\mu_B\tanh\left(\frac{\mu_B(B_0 + \lambda M)}{k_B T}\right)$$

Setting $B_0 = 0$ and expanding for small $M$ near $T_C$:

$$M \approx \frac{N\mu_B^2\lambda M}{k_B T_C}$$

giving the **Curie temperature:** $T_C = N\mu_B^2\lambda/k_B$.

The critical exponent $\beta = 1/2$ (mean-field value), compared with the experimental value
$\beta \approx 1/3$ (3D Ising universality class).

Above $T_C$, the susceptibility follows the **Curie--Weiss law:**

$$\chi = \frac{C}{T - T_C}$$

<details>
<summary>Worked Example: Curie Temperature of Iron</summary>

Iron has $N = 8.49 \times 10^{28}$ atoms/m$^3$, magnetic moment $\mu = 2.22\,\mu_B$ per atom,
and $T_C = 1043$ K. From $T_C = N\mu^2\lambda/(3k_B)$:

$$\lambda = \frac{3k_B T_C}{N\mu^2} = \frac{3 \times 1.381 \times 10^{-23} \times 1043}{8.49 \times 10^{28} \times (2.22 \times 9.274 \times 10^{-24})^2}$$

$$\lambda = \frac{4.32 \times 10^{-20}}{8.49 \times 10^{28} \times 4.25 \times 10^{-46}} = \frac{4.32 \times 10^{-20}}{3.61 \times 10^{-17}} = 1.20 \times 10^{-3}\ \mathrm{T\,m/A}$$

The corresponding exchange field at $T = 0$ ($M = N\mu$):

$$B_{\mathrm{ex}} = \lambda M = 1.20 \times 10^{-3} \times 8.49 \times 10^{28} \times 2.22 \times 9.274 \times 10^{-24} = 2100\ \mathrm{T}$$

This enormous effective field is purely quantum-mechanical in origin (exchange interaction).

</details>

### 10.5 Magnetic Domains

Below $T_C$, a ferromagnet divides into **domains** of uniform magnetisation, separated by **domain
walls** (Bloch walls). Domain formation reduces the magnetostatic energy.

The **domain wall width:** $\delta \sim \sqrt{A/K}$ where $A$ is the exchange stiffness and $K$ is the
anisotropy constant. Typical values: $\delta \sim 100$ nm.

The wall energy per unit area: $\sigma_w \sim 4\sqrt{AK}$.

### 10.6 Magnetic Ordering

**Antiferromagnetism.** In antiferromagnets (e.g., MnO, NiO), adjacent spins align antiparallel due
to negative exchange interaction $J \lt 0$. The Néel temperature is:

$$T_N = \frac{\lvert J\rvert z S(S+1)}{3k_B}$$

where $z$ is the number of nearest neighbours. The susceptibility peaks at $T_N$ and decreases at
both higher and lower temperatures.

**Ferrimagnetism.** In ferrimagnets (e.g., Fe$_3$O$_4$), antiparallel sublattices have different
magnetic moments, giving a net spontaneous magnetisation. The temperature dependence of $M(T)$ is
more complex than for simple ferromagnets.

**Heisenberg model.** The exchange interaction between neighbouring spins is described by:

$$\hat{H} = -\sum_{\langle i,j\rangle} J_{ij}\,\hat{\mathbf{S}}_i \cdot \hat{\mathbf{S}}_j$$

For $J \gt 0$: ferromagnetic coupling (spins parallel). For $J \lt 0$: antiferromagnetic coupling
(spins antiparallel). The exchange integral $J$ arises from the combination of Coulomb repulsion and
the Pauli exclusion principle (not from magnetic dipole interactions, which are far too weak).

### 10.7 Spin Waves (Magnons)

At low temperatures ($T \ll T_C$), the reduction in magnetisation below saturation is carried by
collective excitations called **spin waves** or **magnons**.

**Linear spin wave theory.** For a 1D chain of spins with nearest-neighbour exchange $J$ and
lattice constant $a$, the magnon dispersion is:

$$\hbar\omega(q) = 2JS[1 - \cos(qa)] = 4JS\sin^2\left(\frac{qa}{2}\right)$$

For small $q$ (long wavelength): $\hbar\omega \approx JSa^2 q^2$ (quadratic dispersion, unlike
phonons which are linear).

The magnetisation at low $T$:

$$M(T) = M(0)\left[1 - \zeta(3/2)\left(\frac{k_B T}{4\pi JS}\right)^{3/2}\right]$$

in 3D, where $\zeta(3/2) \approx 2.612$ is the Riemann zeta function. The $T^{3/2}$ dependence
(Bloch $T^{3/2}$ law) is well confirmed experimentally and contrasts with the exponential
freeze-out of a classical paramagnet.

Magnons are bosons and obey Bose--Einstein statistics. They contribute to the low-temperature
specific heat of ferromagnets: $C_{\mathrm{mag}} \propto T^{3/2}$.

### 10.8 The de Haas--van Alphen Effect

In a magnetic field, the electron orbits are quantised into **Landau levels**:

$$\varepsilon_n = \left(n + \frac{1}{2}\right)\hbar\omega_c, \quad \omega_c = \frac{eB}{m^*}$$

The density of states oscillates with $1/B$ (de Haas--van Alphen oscillations). The oscillation period
gives the extremal cross-sectional area of the Fermi surface:

$$\Delta\left(\frac{1}{B}\right) = \frac{2\pi e}{\hbar A_{\mathrm{ext}}}$$

This is the primary experimental technique for mapping Fermi surfaces.

:::caution Common Pitfall
The exchange interaction $J$ in the Heisenberg model is *not* the magnetic dipole interaction.
The dipole energy between two spins is $\sim \mu_0\mu_B^2/a^3 \sim 10^{-4}$ eV, far too small to
explain Curie temperatures of $\sim 10^3$ K ($\sim 0.1$ eV). The exchange interaction is a
consequence of the Coulomb repulsion combined with the antisymmetry of the electron wave function
(Pauli principle), and is typically $10$--$100$ meV.
:::

## 11. Problem Set

**Problem 1.** Calculate the packing fraction of the simple cubic lattice. Compare it with BCC and FCC,
and explain why SC is rarely observed in elemental metals.

**Problem 2.** Aluminium is FCC with $a = 0.405$ nm and $M = 26.98$ g/mol. Calculate the theoretical
density and compare with the experimental value ($2.70\ \mathrm{g/cm}^3$).

**Problem 3.** A plane intercepts the crystallographic axes at $2a$, $3b$, and $\infty c$. Determine the
Miller indices. A direction passes through the origin and the point $(1, -1, 0)$ in units of lattice
constants. Write the direction indices.

**Problem 4.** Magnesium is HCP with $a = 0.321$ nm, $c = 0.521$ nm. Calculate the ideal $c/a$ ratio
and the actual ratio. How many atoms are in the conventional cell?

**Problem 5.** For a BCC lattice with lattice constant $a$, find the reciprocal lattice vectors and show
that the reciprocal lattice is FCC with conventional cubic constant $4\pi/a$.

**Problem 6.** Construct the first three Brillouin zones of a 2D square lattice. Show that all three
zones have the same area.

**Problem 7.** A powder sample of copper (FCC, $a = 0.3615$ nm) is illuminated with Cu $K_\alpha$
radiation ($\lambda = 0.15406$ nm). Calculate the $2\theta$ angles of the first five diffraction
peaks and identify their $(hkl)$ indices.

**Problem 8.** Calculate the structure factor for the CsCl structure (simple cubic with a two-atom
basis: Cs at $(0,0,0)$ and Cl at $(a/2, a/2, a/2)$). Show that there are no systematic absences.

**Problem 9.** Derive the structure factor for the perovskite structure (e.g., SrTiO$_3$: Sr at corners,
Ti at body centre, O at face centres). Identify which reflections depend on which atoms.

**Problem 10.** Derive the phonon dispersion relation for a 1D monatomic chain with nearest-neighbour
spring constant $K_1$ and next-nearest-neighbour spring constant $K_2$. Show that the maximum
frequency increases relative to the nearest-neighbour-only case.

**Problem 11.** The Debye temperature of diamond is $\Theta_D = 2230$ K. Calculate the lattice specific
heat at $T = 100$ K and $T = 500$ K. At what temperature does the Debye $T^3$ law give a 1%
accurate approximation?

**Problem 12.** Compare the Einstein and Debye predictions for $C_V/C_{\mathrm{Dulong--Petit}}$ as a
function of $T/\Theta$ at $T/\Theta = 0.1$, $0.5$, and $1.0$.

**Problem 13.** Sodium has $n = 2.65 \times 10^{28}\ \mathrm{m}^{-3}$ conduction electrons. Calculate
the Fermi energy, Fermi wave vector, Fermi velocity, and Fermi temperature.

**Problem 14.** Using the tight-binding model for a 1D chain with nearest-neighbour hopping $t$:
(a) find the effective mass at the band bottom and band top, and (b) calculate the density of states
$g(\varepsilon)$ and show it diverges at the band edges.

**Problem 15.** A silicon sample is doped with $N_D = 10^{22}\ \mathrm{m}^{-3}$ phosphorus atoms.
Calculate the electron and hole concentrations at 300 K ($n_i = 1.5 \times 10^{16}\ \mathrm{m}^{-3}$)
and the position of the Fermi level relative to the conduction band edge.

**Problem 16.** A p-n junction is made from Si with $N_A = 10^{23}\ \mathrm{m}^{-3}$ and
$N_D = 10^{22}\ \mathrm{m}^{-3}$. Calculate the built-in potential and the depletion width at
300 K. ($\varepsilon_s = 11.7\varepsilon_0$ for Si.)

**Problem 17.** A classical paramagnetic salt contains $N = 2.69 \times 10^{27}$ spins/m$^3$ with
$J = S = 1/2$ and $g = 2$. Calculate the magnetisation in a field of $B = 1$ T at $T = 300$ K and
$T = 4$ K.

**Problem 18.** Using the mean-field theory, derive the Curie--Weiss law $\chi = C/(T - T_C)$ for a
ferromagnet above $T_C$. Express $C$ in terms of $N$, $\mu$, and $k_B$.

**Hints and Selected Results:**

- *Problem 1:* $\mathrm{APF}_{\mathrm{SC}} = \pi/6 \approx 0.524$. SC has the lowest packing efficiency
  of the three cubic structures, which is why it is energetically unfavourable for most metals
  (polonium being the exception).
- *Problem 3:* Reciprocals of $(2, 3, \infty)$ are $(1/2, 1/3, 0)$, giving $(3, 2, 0)$. Direction: $[1\bar{1}0]$.
- *Problem 4:* Ideal $c/a = \sqrt{8/3} \approx 1.633$. Actual $c/a = 1.623$. 6 atoms per conventional cell.
- *Problem 5:* $\mathbf{b}_1 = (2\pi/a)(\hat{y} + \hat{z} - \hat{x})$, etc. The 8 nearest reciprocal lattice
  points at $(\pm 2\pi/a)(\pm 1, \pm 1, \pm 1)/2$ form an FCC pattern.
- *Problem 7:* First five FCC reflections: (111), (200), (220), (311), (222). Use $2d\sin\theta = \lambda$
  with $d = a/\sqrt{h^2+k^2+l^2}$.
- *Problem 13:* $\varepsilon_F = 3.24$ eV, $k_F = 9.22 \times 10^9$ m$^{-1}$, $v_F = 1.07 \times 10^6$ m/s,
  $T_F = 3.76 \times 10^4$ K.
- *Problem 15:* $n = N_D = 10^{22}$ m$^{-3}$, $p = n_i^2/N_D = 2.25 \times 10^{10}$ m$^{-3}$,
  $E_c - E_F = k_B T\ln(N_c/N_D) \approx 0.214$ eV.
- *Problem 16:* $V_0 = 0.716$ V, $W \approx 0.35$ $\mu$m.
- *Problem 17:* At 300 K: $M \approx \mu_0 N \mu_B^2 B/(3k_B T) = 0.078$ A/m. At 4 K: the classical
  approximation breaks down; use the Brillouin function $B_{1/2}(x) = \tanh(x)$ with $x = \mu_B B/(k_B T)$.

:::caution Common Pitfall
The free electron model and the nearly free electron model give band gaps at the Brillouin zone
boundaries (where Bragg diffraction occurs). Do not confuse the real-space lattice constant $a$
with the reciprocal lattice spacing $2\pi/a$. The first Brillouin zone extends from $-\pi/a$ to
$+\pi/a$ in each direction, not from $0$ to $a$. When calculating the Fermi wave vector, always
use $k_F = (3\pi^2 n)^{1/3}$ --- the factor of $3\pi^2$ (not $6\pi^2$) accounts for the factor
of 2 from spin.
:::
