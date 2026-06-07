---
title: Solid State Physics
description:
  'University Solid State Physics notes covering key definitions, core concepts, worked examples,
  and practice questions for focused exam preparation and revision.'
date: 2026-04-24T00:00:00.000Z
tags:
  - Physics
  - University
categories:
  - Physics
---

## 1. Crystal Structures

### 1.1 Lattices and Basis

A crystal is defined by a **lattice** (infinite array of points with translational symmetry) and a
**basis** (the arrangement of atoms associated with each lattice point).

The lattice is specified by **primitive lattice vectors** $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$
Such that every lattice point is at:

$$\mathbf{R} = n_1\mathbf{a}_1 + n_2\mathbf{a}_2 + n_3\mathbf{a}_3, \quad n_i \in \mathbb{Z}$$

### 1.2 Bravais Lattices

There are **14 Bravais lattices** in three dimensions, classified into 7 crystal systems:

| System       | Lattices     | Constraints                                                       |
| ------------ | ------------ | ----------------------------------------------------------------- |
| Cubic        | SC, BCC, FCC | $a = b = c$, $\alpha = \beta = \gamma = 90^\circ$                 |
| Tetragonal   | P, I         | $a = b \neq c$, $\alpha = \beta = \gamma = 90^\circ$              |
| Orthorhombic | P, C, I, F   | $a \neq b \neq c$, $\alpha = \beta = \gamma = 90^\circ$           |
| Monoclinic   | P, C         | $a \neq b \neq c$, $\alpha = \gamma = 90^\circ \neq \beta$        |
| Triclinic    | P            | $a \neq b \neq c$, $\alpha \neq \beta \neq \gamma$                |
| Hexagonal    | P            | $a = b \neq c$, $\alpha = \beta = 90^\circ$, $\gamma = 120^\circ$ |
| Trigonal     | R            | $a = b = c$, $\alpha = \beta = \gamma \neq 90^\circ$              |

**Notation:** P = primitive, I = body-centred, F = face-centred, C = base-centred, R = rhombohedral.

### 1.3 Common Crystal Structures

**Simple Cubic (SC):** One atom per unit cell. Coordination number $= 6$. Packing fraction
$= \pi/6 \approx 0.52$.

**Body-Centred Cubic (BCC):** Atoms at corners and body centre. Two atoms per cell. Coordination
Number $= 8$. Packing fraction $= \sqrt{3}\pi/8 \approx 0.68$. Examples: Fe ($\alpha$-iron), W, Cr.

**Face-Centred Cubic (FCC):** Atoms at corners and face centres. Four atoms per cell. Coordination
Number $= 12$. Packing fraction $= \sqrt{2}\pi/6 \approx 0.74$. Examples: Cu, Al, Au, Ag.

**Hexagonal Close-Packed (HCP):** Two atoms per primitive cell. Coordination number $= 12$. Same
Packing fraction as FCC. Examples: Zn, Mg, Ti.

**Diamond structure:** Two interpenetrating FCC lattices offset by $(a/4, a/4, a/4)$. Eight atoms
per Conventional cell. Examples: C (diamond), Si, Ge.

### 1.4 Miller Indices

A plane with Miller indices $(hkl)$ intersects the crystallographic axes at $a/h$, $b/k$, $c/l$.

**Procedure:** (1) Find intercepts with axes in units of lattice constants. (2) Take reciprocals.
(3) Reduce to smallest integers.

Negative indices are written with a bar: $(\bar{h}kl)$. Families of equivalent planes are denoted
$\{hkl\}$.

Directions are written as $[hkl]$; families of equivalent directions as $\langle hkl \rangle$.

### 1.5 Wigner-Seitz Cell

The **Wigner-Seitz cell** is the primitive cell constructed by drawing perpendicular bisector planes
Between a lattice point and all its neighbours. It is the region of space closer to the given
lattice Point than to any other.

### 1.6 Packing Fractions and Density

The **packing fraction** (also called atomic packing factor) is the fraction of volume in a unit
cell Occupied by atoms:

$$\mathrm{APF} = \frac{N \cdot V_{\mathrm{atom}}{V_{\mathrm{cell}} = \frac{N \cdot \frac{4}{3}\pi R^3}{V_{\mathrm{cell}}}}}$$

Where $N$ is the number of atoms per cell, $R$ is the atomic radius, and $V_{\mathrm{cell}}$ is the
Cell volume.

The **theoretical density** of a crystal:

$$\rho = \frac{nM}{N_A V_{\mathrm{cell}}}$$

Where $n$ is the number of formula units per cell, $M$ is the molar mass, $N_A$ is Avogadro's
Number, and $V_{\mathrm{cell}}$ is the cell volume.

<details>
<summary>Worked Example: FCC Packing Fraction</summary>

In FCC, nearest neighbours touch along the face diagonal. For lattice constant $a$ and atomic radius
$R$:

$$4R = \sqrt{2}\,a \implies R = \frac{a\sqrt{2}}{4}$$

Four atoms per conventional cell:

$$\mathrm{APF} = \frac{4 \times \frac{4}{3}\pi R^3}{a^3} = \frac{4 \times \frac{4}{3}\pi \left(\frac{a\sqrt{2}}{4}\right)^3}{a^3} = \frac{4 \times \frac{4}{3}\pi \cdot \frac{2\sqrt{2}\,a^3}{64}}{a^3} = \frac{\pi\sqrt{2}}{6} \approx 0.7405$$

</details>

<details>
<summary>Worked Example: Density of BCC Iron</summary>

$\alpha$-iron is BCC with lattice constant $a = 0.2866$ nm, molar mass $M = 55.845$ g/mol, and 2
atoms Per conventional cell.

$$\rho = \frac{2 \times 55.845}{6.022 \times 10^{23} \times (2.866 \times 10^{-8})^3}$$

$$(2.866 \times 10^{-8})^3 = 23.55 \times 10^{-24}\ \mathrm{cm}^3 = 2.355 \times 10^{-23}\ \mathrm{cm}^3$$

$$\rho = \frac{111.69}{6.022 \times 10^{23} \times 2.355 \times 10^{-23}} = \frac{111.69}{14.18} = 7.88\ \mathrm{g}/cm^3$$

This matches the accepted experimental density of iron ($7.87\ \mathrm{g}/cm^3$).

</details>

<details>
<summary>Worked Example: HCP Packing Fraction</summary>

For HCP with ideal $c/a = \sqrt{8/3}$Lattice constant $a$And atomic radius $R = a/2$:

Two atoms per primitive cell. The cell volume is
$V_{\mathrm{cell} = \frac{\sqrt{3}}{2}a^2 \cdot c = \frac{\sqrt{3}}{2}a^2 \cdot a\sqrt{8/3} = \sqrt{2}\,a^3}$.

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

Where $E_v$ is the vacancy formation energy ( $\sim 1$ eV).

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
Produced by bombarding a metal target with electrons, generating both **Bremsstrahlung** (continuous
Spectrum) and **characteristic radiation** (sharp lines at element-specific energies, e.g., Cu
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

:::caution Common Pitfall The coordination number is the number of _nearest neighbours_, not the
number of atoms in the unit Cell. For FCC, the coordination number is 12 even though there are only
4 atoms per conventional Cell. Do not confuse the basis size with the coordination number.
:::

<details>
<summary>Worked Example: Interplanar Spacing for SC, BCC, FCC</summary>

For a cubic crystal with lattice constant $a$The interplanar spacing for $(hkl)$ is:

$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$

For SC, all $(hkl)$ reflections are allowed. For BCC, only $(hkl)$ with $h+k+l$ even are present.
For FCC, only all-even or all-odd $(hkl)$ are present.

The first few allowed reflections and their $d$-spacings for FCC ($a = 0.405$ nm, aluminium):

| $(hkl)$ | $h^2+k^2+l^2$ | $d$ (nm) | $2\theta$ (Cu $K_\alpha$) |
| ------- | ------------- | -------- | ------------------------- |
| (111)   | 3             | 0.2338   | 38.5°                     |
| (200)   | 4             | 0.2025   | 44.7°                     |
| (220)   | 8             | 0.1432   | 65.1°                     |
| (311)   | 11            | 0.1221   | 78.2°                     |
| (222)   | 12            | 0.1169   | 82.4°                     |

Note that (100) is absent in FCC (since 1+0+0 = 1 is odd but not all odd). The sequence of Allowed
$h^2+k^2+l^2$ values (3, 4, 8, 11, 12, ...) is characteristic of FCC.

</details>

## 2. Reciprocal Lattice

### 2.1 Definition

The **reciprocal lattice vectors** are defined by:

$$\mathbf{b}_1 = 2\pi\frac{\mathbf{a}_2 \times \mathbf{a}_3}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

$$\mathbf{b}_2 = 2\pi\frac{\mathbf{a}_3 \times \mathbf{a}_1}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

$$\mathbf{b}_3 = 2\pi\frac{\mathbf{a}_1 \times \mathbf{a}_2}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

Every reciprocal lattice point is at:

$$\mathbf{G} = m_1\mathbf{b}_1 + m_2\mathbf{b}_2 + m_3\mathbf{b}_3, \quad m_i \in \mathbb{Z}$$

**Key property:** $\mathbf{G} \cdot \mathbf{R} = 2\pi \times \mathrm{integer}$So
$e^{i\mathbf{G}\cdot\mathbf{R}} = 1$.

**Proof of key property.**

$$\mathbf{G} \cdot \mathbf{R} = (m_1\mathbf{b}_1 + m_2\mathbf{b}_2 + m_3\mathbf{b}_3) \cdot (n_1\mathbf{a}_1 + n_2\mathbf{a}_2 + n_3\mathbf{a}_3)$$

By the orthogonality relation $\mathbf{b}_i \cdot \mathbf{a}_j = 2\pi\delta_{ij}$:

$$\mathbf{G} \cdot \mathbf{R} = 2\pi(m_1 n_1 + m_2 n_2 + m_3 n_3) = 2\pi \times \mathrm{integer}$$

$\blacksquare$

### 2.2 First Brillouin Zone

The **first Brillouin zone** is the Wigner-Seitz cell of the reciprocal lattice. It is the set of
Points closer to the origin than to any other reciprocal lattice point.

For FCC (real space), the reciprocal lattice is BCC. The first Brillouin zone is a truncated
octahedron. For BCC (real space), the reciprocal lattice is FCC.

**Important volumes:**

| Real space | Reciprocal space | BZ volume     |
| ---------- | ---------------- | ------------- |
| SC ($a$)   | SC ($2\pi/a$)    | $(2\pi/a)^3$  |
| BCC ($a$)  | FCC ($4\pi/a$)   | $2(2\pi/a)^3$ |
| FCC ($a$)  | BCC ($4\pi/a$)   | $4(2\pi/a)^3$ |

$V_{\mathrm{BZ} = (2\pi)^3 / V_{\mathrm{cell}}}$.

### 2.3 Reciprocal Lattice and Planes

**Theorem 2.1.** The reciprocal lattice vector
$\mathbf{G}_{hkl} = h\mathbf{b}_1 + k\mathbf{b}_2 + l\mathbf{b}_3$ Is perpendicular to the
real-space planes $(hkl)$And $\lvert\mathbf{G}_{hkl}\rvert = 2\pi/d_{hkl}$ where $d_{hkl}$ is the
interplanar spacing.

**Proof.** The plane $(hkl)$ has intercepts $\mathbf{a}_1/h$, $\mathbf{a}_2/k$, $\mathbf{a}_3/l$.
Two vectors in this plane are $\mathbf{a}_2/k - \mathbf{a}_1/h$ and
$\mathbf{a}_3/l - \mathbf{a}_1/h$.

$\mathbf{G}_{hkl} \cdot (\mathbf{a}_2/k - \mathbf{a}_1/h) = (2\pi/k)k - (2\pi/h)h = 0$.

Similarly $\mathbf{G}_{hkl} \cdot (\mathbf{a}_3/l - \mathbf{a}_1/h) = 0$. Hence $\mathbf{G}_{hkl}$
is Perpendicular to the plane.

For the spacing: the plane through the origin has equation $\mathbf{G}_{hkl} \cdot \mathbf{r} = 0$.
The next parallel plane is $\mathbf{G}_{hkl} \cdot \mathbf{r} = 2\pi$ (since
$e^{i\mathbf{G}\cdot\mathbf{r}} = 1$ On all lattice planes). The distance from the origin to this
plane is $d_{hkl} = 2\pi/\lvert\mathbf{G}_{hkl}\rvert$. $\blacksquare$

### 2.4 Brillouin Zone Construction

<details>
<summary>Worked Example: First Brillouin Zone of the 2D Square Lattice</summary>

For a 2D square lattice with primitive vectors $\mathbf{a}_1 = a\hat{x}$, $\mathbf{a}_2 = a\hat{y}$:

$$\mathbf{b}_1 = \frac{2\pi}{a}\hat{x}, \quad \mathbf{b}_2 = \frac{2\pi}{a}\hat{y}$$

The nearest reciprocal lattice points to the origin are at $(\pm 2\pi/a,\, 0)$ and
$(0,\, \pm 2\pi/a)$. Their perpendicular bisectors are the lines $k_x = \pm\pi/a$ and
$k_y = \pm\pi/a$.

The next-nearest points are at $(\pm 2\pi/a,\, \pm 2\pi/a)$. Their perpendicular bisectors are
$k_x + k_y = \pm 2\pi/a$ and $k_x - k_y = \pm 2\pi/a$.

The first Brillouin zone is bounded by the four nearest-neighbour bisectors and is a square with
Vertices at $(\pm\pi/a,\, \pm\pi/a)$ and area $(2\pi/a)^2$.

The second Brillouin zone is the region between the first zone and the bisectors of the next-nearest
Neighbours.

</details>

<details>
<summary>Worked Example: First Brillouin Zone of the 2D Hexagonal Lattice</summary>

For a 2D hexagonal lattice with $\mathbf{a}_1 = a\hat{x}$
$\mathbf{a}_2 = a(\hat{x}/2 + \sqrt{3}\hat{y}/2)$:

$$\mathbf{b}_1 = \frac{2\pi}{a}\left(\hat{x} - \frac{\hat{y}}{\sqrt{3}}\right), \quad \mathbf{b}_2 = \frac{4\pi}{a\sqrt{3}}\hat{y}$$

The six nearest reciprocal lattice points form a regular hexagon. The perpendicular bisectors of The
six nearest-neighbour vectors form a regular hexagon centred at the origin --- the first Brillouin
zone.

High-symmetry points: $\Gamma$ (centre), $M$ (midpoint of edge), $K$ (corner).

The area of the BZ equals $(2\pi)^2/A_{\mathrm{cell}}$ where $A_{\mathrm{cell} = a^2\sqrt{3}/2}$.

</details>

### 2.5 Ewald Sphere Construction

The **Ewald sphere** provides a geometric criterion for when diffraction occurs. Given an incident
Wave vector $\mathbf{k}$ (with $\lvert\mathbf{k}\rvert = 2\pi/\lambda$) and the reciprocal lattice:

1. Draw $\mathbf{k}$ terminating at the origin of reciprocal space.
2. Construct a sphere of radius $k = 2\pi/\lambda$ centred at the start of $\mathbf{k}$.
3. Diffraction occurs for every reciprocal lattice point $\mathbf{G}$ that lies on the sphere, since
   then $\mathbf{k}' = \mathbf{k} + \mathbf{G}$ also has $\lvert\mathbf{k}'\rvert = k$ (elastic
   scattering condition).

**Implications:**

- For a fixed wavelength and a single crystal, very few reciprocal lattice points lie on the Ewald
  sphere. The crystal must be rotated to bring different points onto the sphere.
- As $\lambda$ decreases (shorter wavelength), the Ewald sphere radius increases and more points
  satisfy the condition.
- For $\lambda \to 0$ (e.g., electron diffraction), the Ewald sphere is effectively flat, and the
  Laue condition reduces to a planar section through reciprocal space.

<details>
<summary>Worked Example: Ewald Sphere for Aluminium</summary>

Aluminium is FCC with $a = 0.405$ nm. The reciprocal lattice is BCC with conventional cubic Constant
$4\pi/a = 3.10 \times 10^{10}$ m$^{-1}$.

Using Cu $K_\alpha$ radiation ($\lambda = 0.15406$ nm), the Ewald sphere radius is
$k = 2\pi/\lambda = 4.08 \times 10^{10}$ m$^{-1}$.

The shortest reciprocal lattice vector has magnitude
$G_{\min} = 2\pi/(a\sqrt{2}) = 1.10 \times 10^{10}$ m$^{-1}$ (the (111) reflection of FCC).

Since $k = 4.08 \times 10^{10}$ m$^{-1} \gt G_{\min}$The (111) point can lie on the Ewald sphere
When the crystal is appropriately oriented. The maximum accessible $G$ is
$G_{\max} = 2k = 8.16 \times 10^{10}$ M$^{-1}$Which allows access to many reflections.

The **limiting sphere** of radius $2k$ centred at the origin contains all reciprocal lattice points
That can potentially be accessed by rotating the crystal. Points outside this sphere can never
Satisfy the diffraction condition for the given wavelength.

</details>

### 2.6 Structure Factor Calculations

<details>
<summary>Worked Example: Structure Factor of the NaCl Structure</summary>

NaCl has an FCC lattice with a two-atom basis: Na$^+$ at $(0,0,0)$ and Cl$^-$ at $(a/2, 0, 0)$ (or
equivalently, Cl$^-$ at $(1/2, 0, 0)$ in fractional coordinates).

The FCC sublattice contributes a factor
$S_{\mathrm{FCC} = f[1 + e^{-i\pi(h+k)} + e^{-i\pi(h+l)} + e^{-i\pi(k+l)}]}$ Which is zero unless
$h,k,l$ are all even or all odd.

For allowed FCC reflections, the basis factor is:

$$F_{\mathrm{basis} = f_{\mathrm{Na} + f_{\mathrm{Cl}\, e^{-i\pi h}}}}$$

When $h,k,l$ are all even: $F = f_{\mathrm{Na} + f_{\mathrm{Cl}}}$. When $h,k,l$ are all odd:
$F = f_{\mathrm{Na} - f_{\mathrm{Cl}}}$.

The intensity $I \propto \lvert S\rvert^2$:

- All even: $I \propto (f_{\mathrm{Na} + f_{\mathrm{Cl})^2}}$ (strong)
- All odd: $I \propto (f_{\mathrm{Na} - f_{\mathrm{Cl})^2}}$ (weak, since
  $f_{\mathrm{Na} \approx f_{\mathrm{Cl}}}$ at high scattering angles where form factors converge)

</details>

## 3. Diffraction

### 3.1 Bragg's Law

X-ray diffraction from crystal planes produces constructive interference when:

$$2d\sin\theta = n\lambda$$

Where $d$ is the interplanar spacing, $\theta$ is the angle of incidence, and $n$ is the order.

**Derivation.** The path difference between waves scattered from adjacent planes is $2d\sin\theta$.
Constructive interference requires this to be an integer multiple of $\lambda$. $\blacksquare$

For the $n$-th order reflection from $(hkl)$ planes, one can equivalently define it as the
first-order Reflection from $(nh\ nk\ nl)$ planes with spacing $d/n$.

### 3.2 The Laue Condition

Diffraction occurs when the scattering vector equals a reciprocal lattice vector:

$$\Delta\mathbf{k} = \mathbf{k}' - \mathbf{k} = \mathbf{G}$$

This is equivalent to Bragg's law. Since $\lvert\mathbf{k}\rvert = \lvert\mathbf{k}'\rvert$ (elastic
Scattering), the Laue condition requires $\mathbf{k}$ to terminate on the **Ewald sphere** (a sphere
Of radius $k$ centred at the tip of $\mathbf{k}$).

**Equivalence with Bragg's law.** From
$\lvert\mathbf{k}\rvert = \lvert\mathbf{k} + \mathbf{G}\rvert$:

$$k^2 = \lvert\mathbf{k} + \mathbf{G}\rvert^2 = k^2 + G^2 + 2\mathbf{k}\cdot\mathbf{G}$$

$$\implies \mathbf{k}\cdot\mathbf{G} = -\frac{G^2}{2}$$

Since $G = 2\pi/d$ and $\lvert\mathbf{k}\cdot\hat{\mathbf{G}}\rvert = k\sin\theta$:

$$k\sin\theta = \frac{G}{2} = \frac{\pi}{d}$$

Using $k = 2\pi/\lambda$: $2d\sin\theta = \lambda$ (first order). $\blacksquare$

### 3.3 Structure Factor

The **structure factor** determines the intensity of diffraction from planes $(hkl)$:

$$S_{hkl} = \sum_j f_j e^{-i\mathbf{G}_{hkl}\cdot\mathbf{d}_j}$$

Where $f_j$ is the atomic form factor of atom $j$ at position $\mathbf{d}_j$ in the basis.

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
Sublattice factor $S_{\mathrm{FCC}}$ is nonzero only when $h,k,l$ are all even or all odd.

The full structure factor is:

$$S_{hkl} = S_{\mathrm{FCC} \cdot \left[1 + e^{-i\frac{\pi}{2}(h+k+l)}\right]}$$

For allowed FCC reflections:

- $h + k + l = 4n$: $S = 4f(1 + 1) = 8f$. Intensity $\propto 64f^2$.
- $h + k + l = 4n + 2$: $S = 4f(1 + e^{-i\pi}) = 4f(1 - 1) = 0$. **Systematic absence.**
- $h + k + l = 2n + 1$ (odd): $S = 4f(1 \pm i)$. Intensity
  $\propto \lvert 4f(1 \pm i)\rvert^2 = 32f^2$.

The extra absence at $h + k + l = 4n + 2$ is the signature of the diamond structure, distinguishing
It from a simple FCC lattice.

</details>

<details>
<summary>Worked Example: HCP Structure Factor</summary>

HCP has a two-atom basis at $(0,0,0)$ and $(2/3, 1/3, 1/2)$ in fractional coordinates of the
Hexagonal lattice.

The structure factor is:

$$S_{hkl} = f\left[1 + e^{2\pi i(h/3 + k/3 + l/2)}\right] = f\left[1 + e^{2\pi i(2h+k)/3}\,e^{i\pi l}\right]$$

For $l$ even: $e^{i\pi l} = 1$So $S = f[1 + e^{2\pi i(2h+k)/3}]$. For $l$ odd: $e^{i\pi l} = -1$So
$S = f[1 - e^{2\pi i(2h+k)/3}]$.

When $2h + k = 3n$: $S = 2f$ (strong) for even $l$And $S = 0$ (absent) for odd $l$. When
$2h + k = 3n \pm 1$: both even and odd $l$ give reflections but with different intensities.

</details>

### 3.5 Systematic Absences

Systematic absences arise from lattice centring and glide planes/screw axes, and are summarised by
The structure factor:

| Structure | Condition for reflection                | Systematic absence         |
| --------- | --------------------------------------- | -------------------------- |
| SC        | All $(hkl)$                             | None                       |
| BCC       | $h + k + l$ even                        | $h + k + l$ odd            |
| FCC       | $h,k,l$ all even or all odd             | Mixed even/odd             |
| Diamond   | $h,k,l$ all even/odd, $h+k+l \neq 4n+2$ | $h+k+l = 4n+2$ (and mixed) |
| HCP       | $l$ even when $2h+k=3n$                 | $l$ odd when $2h+k=3n$     |

Systematic absences allow unambiguous identification of the Bravais lattice from a diffraction
pattern. The presence of a $(100)$ reflection rules out BCC; the presence of $(200)$ but absence of
$(110)$ Identifies FCC.

### 3.6 Powder Diffraction

In a **powder diffraction** experiment, a polycrystalline sample with randomly oriented crystallites
Is illuminated by a monochromatic X-ray beam. Each family of planes $(hkl)$ that satisfies Bragg's
Law produces a diffraction cone at angle $2\theta$ from the incident beam.

The **Bragg--Brentano geometry** uses a divergent beam and a focusing detector, recording intensity
As a function of $2\theta$. Each peak position gives $d_{hkl}$ via Bragg's law, and the peak
Intensity is proportional to $\lvert S_{hkl}\rvert^2$ times multiplicity and geometric factors.

**Scherrer equation.** For crystallites of size $L$The diffraction peaks are broadened. The Full
width at half maximum (FWHM) $\beta$ (in radians) relates to the crystallite size by:

$$L = \frac{K\lambda}{\beta\cos\theta}$$

Where $K \approx 0.89$ is the Scherrer constant. This provides a straightforward method for
Estimating nanocrystallite sizes from powder diffraction data.

:::caution Common Pitfall Do not confuse the Laue condition $\Delta\mathbf{k} = \mathbf{G}$ with
Bragg's law $2d\sin\theta = n\lambda$. These are equivalent formulations of the same physics. The
Laue condition is a vector equation in Reciprocal space, while Bragg's law is a scalar equation in
real space. Converting between them Requires careful geometry --- remember that $\theta$ in Bragg's
law is measured from the _plane_, Not from the normal.
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
- Linear for small $q$: $\omega \approx v_s \lvert q\rvert$ where $v_s = a\sqrt{K/m}$ is the speed
  of sound.
- Group velocity: $v_g = d\omega/dq = a\sqrt{K/m}\cos(qa/2)$.
- Maximum frequency: $\omega_{\mathrm{max} = 2\sqrt{K/m}}$.
- Phase velocity: $v_p = \omega/q$Which exceeds $v_s$ and diverges as $q \to 0$.

### 4.2 The Diatomic Chain

For a chain with alternating masses $m_1$ and $m_2$ (e.g., NaCl):

$$\omega^2 = K\left(\frac{1}{m_1} + \frac{1}{m_2}\right) \pm K\sqrt{\left(\frac{1}{m_1} + \frac{1}{m_2}\right)^2 - \frac{4\sin^2(qa/2)}{m_1 m_2}}$$

This gives two branches:

- **Acoustic branch** ($-$ sign): $\omega \to 0$ as $q \to 0$. Atoms in the unit cell move in phase.
- **Optical branch** ($+$ sign): $\omega \neq 0$ at $q = 0$. Atoms in the unit cell move out of
  phase. Can interact with light (hence the name).

At $q = 0$The optical frequency is $\omega_0 = \sqrt{2K(1/m_1 + 1/m_2)}$ and the acoustic branch Has
$\omega = v_s q$ with $v_s = a\sqrt{2K/(m_1 + m_2)}$.

### 4.3 Quantisation: Phonons

Lattice vibrations are quantised. Each normal mode of wave vector $\mathbf{q}$ and branch $s$ has
Energy:

$$E_{\mathbf{q}s} = \left(n_{\mathbf{q}s} + \frac{1}{2}\right)\hbar\omega_{\mathbf{q}s}$$

Where $n_{\mathbf{q}s}$ is the phonon occupation number. Phonons are bosons obeying Bose-Einstein
Statistics:

$$\langle n_{\mathbf{q}s} \rangle = \frac{1}{e^{\beta\hbar\omega_{\mathbf{q}s}} - 1}$$

In three dimensions, there are 3 acoustic branches (1 longitudinal, 2 transverse) and $3p - 3$
Optical branches for a crystal with $p$ atoms per primitive cell.

### 4.4 Debye Model

The Debye model approximates the phonon spectrum as linear ($\omega = v_s q$) up to a cutoff
frequency $\omega_D$ (the Debye frequency):

$$\omega_D = v_s\left(\frac{6\pi^2 N}{V}\right)^{1/3}$$

The **Debye temperature:** $\Theta_D = \hbar\omega_D / k_B$.

**Derivation of the phonon density of states.** The number of modes with wave vector
$\lvert\mathbf{q}\rvert \leq q$ In 3D is
$N(q) = 3 \cdot \frac{V}{(2\pi)^3} \cdot \frac{4\pi q^3}{3}$ (factor of 3 for polarisations).
Differentiating: $g(q)\,dq = dN/dq\,dq = (Vq^2/\pi^2)\,dq$. Converting to frequency with
$\omega = v_s q$:

$$g(\omega)\,d\omega = \frac{Vq^2}{\pi^2}\frac{dq}{d\omega}\,d\omega = \frac{V\omega^2}{\pi^2 v_s^3}\,d\omega$$

Since there are $3N$ total modes, the cutoff is determined by
$\int_0^{\omega_D} g(\omega)\,d\omega = 3N$Giving $g(\omega) = \frac{3V\omega^2}{2\pi^2 v_s^3}$ For
$0 \leq \omega \leq \omega_D$. $\blacksquare$

**Lattice heat capacity:**

$$C_V = 9Nk_B\left(\frac{T}{\Theta_D}\right)^3 \int_0^{\Theta_D/T} \frac{x^4 e^x}{(e^x - 1)^2}\,dx$$

**High-temperature limit** ($T \gg \Theta_D$): $C_V = 3Nk_B$ (Dulong--Petit law).

**Low-temperature limit** ($T \ll \Theta_D$):
$C_V = \frac{12\pi^4}{5}Nk_B\left(\frac{T}{\Theta_D}\right)^3$ (Debye $T^3$ law).

### 4.5 Einstein Model

The Einstein model treats all atoms as independent quantum harmonic oscillators with the same
frequency $\omega_E$:

$$C_V = 3Nk_B\left(\frac{\Theta_E}{T}\right)^2 \frac{e^{\Theta_E/T}}{(e^{\Theta_E/T} - 1)^2}$$

Where $\Theta_E = \hbar\omega_E/k_B$.

**High-temperature limit** ($T \gg \Theta_E$): expanding
$e^{\Theta_E/T} \approx 1 + \Theta_E/T +
\frac{1}{2}(\Theta_E/T)^2$ gives $C_V \to 3Nk_B$
(Dulong--Petit), matching Debye.

**Low-temperature limit** ($T \ll \Theta_E$): $C_V \approx 3Nk_B(\Theta_E/T)^2 e^{-\Theta_E/T}$
Which is exponentially suppressed. This disagrees with the Debye $T^3$ law (and experiment).

### 4.6 Phonon Thermal Conductivity

Phonons carry heat through the lattice. By the kinetic theory formula:

$$\kappa_{\mathrm{ph} = \frac{1}{3}C_V v_s \ell_{\mathrm{ph}}}$$

Where $\ell_{\mathrm{ph}}$ is the phonon mean free path.

**Scattering mechanisms** that limit $\ell_{\mathrm{ph}}$:

1. **Phonon--phonon scattering:** At high $T$, $\ell_{\mathrm{ph} \propto 1/T}$ (Umklapp processes
   dominate, where the total phonon momentum is not conserved). At low $T$Only normal processes
   ($N$-processes, conserving momentum) contribute, and $\ell_{\mathrm{ph}}$ grows exponentially.
2. **Boundary scattering:** At very low $T$, $\ell_{\mathrm{ph}}$ is limited by the sample size $L$.
3. **Defect scattering:** Point defects, dislocations, and grain boundaries scatter phonons,
   reducing $\kappa_{\mathrm{ph}}$.

**Temperature dependence:**

- Low $T$ ($T \ll \Theta_D$): $\kappa_{\mathrm{ph} \propto T^3}$ (from $C_V \propto T^3$With
  $\ell_{\mathrm{ph}}$ limited by boundaries).
- Intermediate $T$: $\kappa_{\mathrm{ph}}$ peaks.
- High $T$ ($T \gtrsim \Theta_D$): $\kappa_{\mathrm{ph} \propto 1/T}$ (from
  $\ell_{\mathrm{ph} \propto 1/T}$ and $C_V \approx \mathrm{const}$).

### 4.7 Specific Heat: Debye vs Einstein vs Experiment

| Feature          | Debye            | Einstein                  | Experiment      |
| ---------------- | ---------------- | ------------------------- | --------------- |
| High $T$         | $3Nk_B$          | $3Nk_B$                   | $3Nk_B$         |
| Low $T$          | $\propto T^3$    | $\propto e^{-\Theta_E/T}$ | $\propto T^3$   |
| Single parameter | $\Theta_D$       | $\Theta_E$                | ---             |
| Physical basis   | Acoustic phonons | Optical phonons           | Both contribute |

The Debye model captures the correct low-$T$ behaviour because long-wavelength acoustic phonons
Dominate the specific heat at low temperatures. The Einstein model is more appropriate for
Describing the optical branch contribution, which is nearly flat (dispersionless) and hence well
Approximated by a single frequency.

For crystals with optical branches (e.g., NaCl, SiO$_2$), a combined model using Debye for Acoustic
modes and Einstein for optical modes gives better agreement with experiment across all Temperatures.

<details>
<summary>Worked Example: Debye Temperature of Copper</summary>

Copper has molar mass $M = 63.55$ g/mol, density $\rho = 8.96\ \mathrm{g}/cm^3$And measured Speed of
sound $v_s = 3810$ m/s (average of longitudinal and transverse).

Number density:
$n = \frac{\rho N_A}{M} = \frac{8.96 \times 6.022 \times 10^{23}}{63.55} = 8.49 \times 10^{28}\ \mathrm{m}^{-3}$.

$$\Theta_D = \frac{\hbar v_s}{k_B}(6\pi^2 n)^{1/3}$$

$$(6\pi^2 n)^{1/3} = (6\pi^2 \times 8.49 \times 10^{28})^{1/3} = (5.03 \times 10^{30})^{1/3} = 1.71 \times 10^{10}\ \mathrm{m}^{-1}$$

$$\Theta_D = \frac{1.055 \times 10^{-34} \times 3810}{1.381 \times 10^{-23}} \times 1.71 \times 10^{10} = 2.91 \times 10^{-8} \times 1.71 \times 10^{10} = 498\ \mathrm{K}$$

The accepted experimental value is $\Theta_D = 343$ K. The discrepancy arises because the Debye
Model uses a single average sound velocity, while the real phonon spectrum is anisotropic.

</details>

:::caution Common Pitfall The Debye and Einstein models describe the _lattice_ contribution to
specific heat. At low Temperatures, the electronic specific heat $C_e = \gamma T$ also contributes
and can dominate over The lattice $T^3$ term in metals. The total low-$T$ specific heat of a metal
is $C_V = \gamma T + \beta T^3$Where $\beta$ is related to $\Theta_D$. A plot of $C_V/T$ versus
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
Temperatures. The Einstein model overestimates $C_V$ at low $T$ and is less accurate overall, but It
is simpler to evaluate analytically.

At $T = 300$ K: $T/\Theta_D = 0.70$And both models give $C_V \approx 0.94 \times 3Nk_B$ Approaching
the Dulong--Petit limit.

</details>

<details>
<summary>Worked Example: Phonon Mean Free Path in Copper</summary>

For copper at 300 K: $\Theta_D = 343$ K, $v_s = 3810$ m/s, thermal conductivity
$\kappa_{\mathrm{ph} = 401}$ W/(m$\cdot$K), and
$C_V \approx 3Nk_B = 3 \times 8.49 \times 10^{28} \times 1.381 \times 10^{-23} = 3.52 \times 10^6$
J/(m$^3\cdot$K).

From $\kappa = \frac{1}{3}C_V v_s \ell$:

$$\ell = \frac{3\kappa}{C_V v_s} = \frac{3 \times 401}{3.52 \times 10^6 \times 3810} = 8.97 \times 10^{-8}\ \mathrm{m} \approx 90\ \mathrm{nm}$$

This is much shorter than the sample size, confirming that phonon--phonon (Umklapp) scattering
Dominates at room temperature. At 10 K, the mean free path would be limited by sample boundaries.

</details>

### 4.8 Neutron Scattering

Neutrons are an ideal probe of phonons because their de Broglie wavelength ($\sim 1$ Å) matches
Lattice spacings, and their energy ($\sim 10$--$100$ meV) matches phonon energies. In an **inelastic
Neutron scattering** experiment, the energy and momentum transfer are measured:

$$\hbar\omega = E_i - E_f, \quad \mathbf{q} = \mathbf{k}_i - \mathbf{k}_f$$

The scattering cross-section is proportional to the dynamical structure factor
$S(\mathbf{q}, \omega)$ Which has peaks when $\hbar\omega = \hbar\omega_{\mathbf{q}s}$ (phonon
creation) or $\hbar\omega = -\hbar\omega_{\mathbf{q}s}$ (phonon annihilation). This allows direct
measurement of The full phonon dispersion relation $\omega(\mathbf{q})$.

Time-of-flight and triple-axis spectrometers are the primary instruments used. Neutron scattering
Has provided definitive measurements of phonon dispersions in virtually all important crystals.

## 5. Electronic Band Structure

### 5.1 Free Electron Model

In the simplest model, conduction electrons move freely in a box of volume $V$ (the "jellium"
model). The allowed wave vectors are:

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

Where the factor of 2 accounts for spin. Differentiating: $g(k)\,dk = dN/dk\,dk = (Vk^2/\pi^2)\,dk$.
Converting to energy:
$g(\varepsilon) = g(k)\lvert dk/d\varepsilon\rvert = (Vk^2/\pi^2)(m_e/\hbar^2 k)$. $\blacksquare$

At the Fermi energy: $g(\varepsilon_F) = \frac{3N}{2\varepsilon_F}$.

**The Fermi surface** is the surface in $\mathbf{k}$-space defined by
$\varepsilon(\mathbf{k}) = \varepsilon_F$. For the free electron gas, this is a sphere of radius
$k_F$. The shape of the Fermi surface Strongly influences transport properties (conductivity, Hall
effect, cyclotron resonance).

In real metals, the periodic potential distorts the Fermi surface from a sphere. At the Brillouin
Zone boundaries, band gaps open and the Fermi surface can develop "necks" (connecting to adjacent
Zones) or become multiply connected. The topology of the Fermi surface determines whether a material
Is a metal or insulator: a material is metallic if the Fermi surface crosses any Brillouin zone
Boundary.

The number of electrons per atom determines the filling: 1 electron/atom (e.g., Na, Cu) gives a
Nearly spherical Fermi surface well within the first BZ. 2 electrons/atom (e.g., Mg) nearly fills
The first BZ and the Fermi surface contacts the zone boundary. 3--4 electrons/atom (e.g., Al, Pb)
Produce complex multiply-connected Fermi surfaces.

### 5.3 Bloch's Theorem

**Theorem 5.1 (Bloch, 1928).** The eigenstates of the one-electron Hamiltonian in a periodic
Potential $V(\mathbf{r} + \mathbf{R}) = V(\mathbf{r})$ can be written as:

$$\psi_{n\mathbf{k}}(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}} u_{n\mathbf{k}}(\mathbf{r})$$

Where $u_{n\mathbf{k}}(\mathbf{r})$ has the periodicity of the lattice:
$u_{n\mathbf{k}}(\mathbf{r} + \mathbf{R}) = u_{n\mathbf{k}}(\mathbf{r})$.

**Proof.** The translation operators $\hat{T}_{\mathbf{R}}$ commute with the Hamiltonian
$\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r})$ since $V$ is periodic. Therefore, the
Eigenstates of $\hat{H}$ can be chosen as simultaneous eigenstates of all $\hat{T}_{\mathbf{R}}$:

$$\hat{T}_{\mathbf{R}}\psi(\mathbf{r}) = \psi(\mathbf{r} + \mathbf{R}) = c_{\mathbf{R}}\psi(\mathbf{r})$$

From the composition rule
$\hat{T}_{\mathbf{R}_1}\hat{T}_{\mathbf{R}_2} = \hat{T}_{\mathbf{R}_1 + \mathbf{R}_2}$:

$$c_{\mathbf{R}_1 + \mathbf{R}_2} = c_{\mathbf{R}_1} c_{\mathbf{R}_2}$$

The only solution of this functional equation is $c_{\mathbf{R}} = e^{i\mathbf{k}\cdot\mathbf{R}}$.
Therefore $\psi(\mathbf{r} + \mathbf{R}) = e^{i\mathbf{k}\cdot\mathbf{R}}\psi(\mathbf{r})$Which is
Satisfied by $\psi(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}}u_{\mathbf{k}}(\mathbf{r})$ with
$u_{\mathbf{k}}$ periodic. $\blacksquare$

**Consequences:**

- $\mathbf{k}$ is defined only up to a reciprocal lattice vector: $\mathbf{k}$ and
  $\mathbf{k} + \mathbf{G}$ are equivalent.
- The energy spectrum consists of **bands** $\varepsilon_n(\mathbf{k})$Each labelled by a band index
  $n$.
- Band gaps appear between allowed energy bands.

### 5.4 Nearly Free Electron Model

Starting from the free electron model, a weak periodic potential
$V(\mathbf{r}) = \sum_{\mathbf{G}} V_{\mathbf{G}} e^{i\mathbf{G}\cdot\mathbf{r}}$ Opens gaps at the
Brillouin zone boundaries where $\lvert\mathbf{k}\rvert = \lvert\mathbf{k} + \mathbf{G}\rvert$
(Bragg Condition).

At the zone boundary $\mathbf{k} = \mathbf{G}/2$The gap is:

$$\Delta\varepsilon = 2\lvert V_{\mathbf{G}}\rvert$$

**Derivation.** Near the zone boundary, the free electron states at $\mathbf{k}$ and
$\mathbf{k} - \mathbf{G}$ Are degenerate:
$\varepsilon_{\mathbf{k}}^0 = \varepsilon_{\mathbf{k} - \mathbf{G}}^0$. Degenerate Perturbation
theory gives:

$$\det\begin{pmatrix} \varepsilon_{\mathbf{k}}^0 - E & V_{\mathbf{G}} \\ V_{\mathbf{G}}^* & \varepsilon_{\mathbf{k} - \mathbf{G}}^0 - E \end{pmatrix} = 0$$

At $\mathbf{k} = \mathbf{G}/2$: $E = \varepsilon_{\mathbf{G}/2}^0 \pm \lvert V_{\mathbf{G}}\rvert$So
the gap is $2\lvert V_{\mathbf{G}}\rvert$. $\blacksquare$

### 5.5 Drude Model

The **Drude model** (1900) treats conduction electrons as a classical ideal gas scattering off
Static ions with a mean free time $\tau$ (relaxation time).

**Equation of motion.** Under an electric field $\mathbf{E}$:

$$m_e\frac{d\mathbf{v}}{dt} = -e\mathbf{E} - \frac{m_e\mathbf{v}}{\tau}$$

The second term represents a frictional drag with characteristic time $\tau$.

**DC conductivity.** In steady state ($d\mathbf{v}/dt = 0$):
$\mathbf{v}_d = -\frac{e\tau}{m_e}\mathbf{E}$. The current density:
$\mathbf{J} = -ne\mathbf{v}_d = \frac{ne^2\tau}{m_e}\mathbf{E}$.

$$\sigma = \frac{ne^2\tau}{m_e}$$

**AC conductivity.** For $\mathbf{E}(t) = \mathbf{E}_0\,e^{-i\omega t}$The Drude model gives:

$$\sigma(\omega) = \frac{ne^2\tau/m_e}{1 - i\omega\tau} = \frac{\sigma_0}{1 - i\omega\tau}$$

The real part $\mathrm{Re}[\sigma(\omega)] = \frac{\sigma_0}{1 + \omega^2\tau^2}$ describes
absorption, Peaking at $\omega = 0$ (the Drude peak). This explains the metallic reflectivity in the
infrared.

**Hall effect.** With $\mathbf{B} = B\hat{z}$ applied, the steady-state equation becomes:

$$-e\mathbf{E} - \frac{m_e\mathbf{v}}{\tau} - e\mathbf{v} \times \mathbf{B} = 0$$

For current $\mathbf{J} = J_x\hat{x}$A transverse field $E_y$ develops:

$$R_H = \frac{E_y}{J_x B} = -\frac{1}{ne}$$

This provides a direct measurement of the carrier density $n$.

**Successes:** Ohm's law ($\mathbf{J} = \sigma\mathbf{E}$), Wiedemann--Franz law
($\kappa/\sigma T = \frac{\pi^2 k_B^2}{3e^2}$), Hall effect.

**Failures:** Predicts $\chi \propto T^{-1}$ (Curie law) for magnetic susceptibility, but real
Metals have nearly temperature-independent Pauli paramagnetism. Predicts $C_V = \frac{3}{2}nk_B$ But
experiments give $C_V \ll \frac{3}{2}nk_B$ at room temperature.

### 5.6 Sommerfeld Model

The **Sommerfeld model** (1928) corrects the Drude model by treating electrons as a **Fermi gas**
Obeying Fermi--Dirac .../4-statistics-and-probability/2_statistics:

$$f(\varepsilon) = \frac{1}{e^{(\varepsilon - \mu)/k_B T} + 1}$$

At $T = 0$The chemical potential equals the Fermi energy: $\mu(0) = \varepsilon_F$. At finite $T$:

$$\mu(T) = \varepsilon_F\left[1 - \frac{\pi^2}{12}\left(\frac{k_B T}{\varepsilon_F}\right)^2 + \cdots\right]$$

Since $\varepsilon_F/k_B \sim 10^4$ K for metals, the correction at room temperature is negligible:
The chemical potential is essentially constant.

**Electronic specific heat.** By the Sommerfeld expansion:

$$C_e = \frac{\pi^2}{3}k_B^2\,g(\varepsilon_F)\,T = \gamma T$$

Where $\gamma = \frac{\pi^2}{2}\frac{Nk_B^2}{\varepsilon_F}$. At room temperature, only electrons
within $\sim k_B T$ of $\varepsilon_F$ can be thermally excited, which is a tiny fraction
$\sim T/T_F \sim 1/100$ of the total. This explains why $C_e \ll \frac{3}{2}Nk_B$.

**Pauli paramagnetism.** The spin susceptibility of a degenerate electron gas:

$$\chi_P = \mu_0\mu_B^2\,g(\varepsilon_F) = \frac{3\mu_0\mu_B^2 N}{2\varepsilon_F}$$

This is independent of $T$ (up to corrections of order $(T/T_F)^2$), in contrast to the Curie law
$\chi \propto 1/T$ of the Drude model.

<details>
<summary>Derivation: Sommerfeld Expansion</summary>

To compute thermal averages at low $T$We integrate $h(\varepsilon) f(\varepsilon)$ where
$f(\varepsilon) = 1/(e^{\beta(\varepsilon - \mu)} + 1)$ is the Fermi--Dirac distribution and
$h(\varepsilon)$ Is any smooth function (e.g., density of states times energy).

Define $H(\varepsilon) = \int_0^\varepsilon h(\varepsilon')\,d\varepsilon'$. Then:

$$I = \int_0^\infty h(\varepsilon)f(\varepsilon)\,d\varepsilon = \int_0^\infty \frac{dH}{d\varepsilon}\,f\,d\varepsilon = [Hf]_0^\infty + \int_0^\infty H(\varepsilon)\left(-\frac{\partial f}{\partial \varepsilon}\right)d\varepsilon$$

Since $f(0) \approx 1$ and $f(\infty) = 0$And $-\partial f/\partial \varepsilon$ is sharply peaked
At $\varepsilon = \mu$ with width $\sim k_B T$We expand $H(\varepsilon)$ about $\mu$:

$$I = \int_0^\mu h(\varepsilon)\,d\varepsilon + \frac{\pi^2}{6}(k_B T)^2 h'(\mu) + \cdots$$

For the total energy with $h(\varepsilon) = \varepsilon\,g(\varepsilon)$:

$$E = \int_0^{\mu_0} \varepsilon\,g(\varepsilon)\,d\varepsilon + \frac{\pi^2}{6}(k_B T)^2 \frac{d}{d\varepsilon}[\varepsilon g(\varepsilon)]_{\varepsilon = \mu_0} + \cdots$$

Differentiating with respect to $T$ gives the specific heat
$C_V = \frac{\pi^2}{3}k_B^2\,g(\varepsilon_F)\,T$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Fermi Energy of Sodium</summary>

Sodium has $n = 2.65 \times 10^{28}\ \mathrm{m}^{-3}$ conduction electrons (one per atom, BCC
structure).

$$k_F = (3\pi^2 n)^{1/3} = (3\pi^2 \times 2.65 \times 10^{28})^{1/3} = (7.85 \times 10^{29})^{1/3} = 9.23 \times 10^9\ \mathrm{m}^{-1}$$

$$\varepsilon_F = \frac{\hbar^2 k_F^2}{2m_e} = \frac{(1.055 \times 10^{-34})^2 \times (9.23 \times 10^9)^2}{2 \times 9.11 \times 10^{-31}} = \frac{9.48 \times 10^{-58}}{1.82 \times 10^{-30}} = 5.21 \times 10^{-19}\ \mathrm{J} = 3.25\ \mathrm{eV}$$

$$T_F = \frac{\varepsilon_F}{k_B} = \frac{5.21 \times 10^{-19}}{1.381 \times 10^{-23}} = 3.77 \times 10^4\ \mathrm{K}$$

$$v_F = \frac{\hbar k_F}{m_e} = \frac{1.055 \times 10^{-34} \times 9.23 \times 10^9}{9.11 \times 10^{-31}} = 1.07 \times 10^6\ \mathrm{m}/s$$

The electronic specific heat coefficient:
$\gamma = \frac{\pi^2}{2}\frac{nk_B^2}{\varepsilon_F} = \frac{\pi^2 \times 2.65 \times 10^{28} \times (1.381 \times 10^{-23})^2}{2 \times 5.21 \times 10^{-19}} = 1.38 \times 10^3\ \mathrm{J}/(m^3\cdot K^2)$

</details>

### 5.7 Tight-Binding Model

The **tight-binding model** starts from isolated atomic orbitals and treats the overlap between
Neighbours as a perturbation. For a 1D chain with lattice constant $a$ and a single $s$-orbital Of
energy $\varepsilon_0$:

$$\psi_k(r) = \frac{1}{\sqrt{N}}\sum_n e^{ikna}\,\phi(r - na)$$

Where $\phi(r - na)$ is the atomic orbital centred at site $n$.

**Dispersion relation** (nearest-neighbour approximation):

$$\varepsilon(k) = \varepsilon_0 - 2t\cos(ka)$$

Where $t = -\int \phi^*(r - na)\,\hat{H}\,\phi(r - (n+1)a)\,dr$ is the **hopping integral** ($t > 0$
for typical $s$-orbitals).

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
Nearest-neighbour hopping $t \approx 2.8$ eV, the tight-binding Hamiltonian gives:

$$\varepsilon_{\pm}(\mathbf{k}) = \pm t\left\lvert 1 + e^{i\mathbf{k}\cdot\mathbf{a}_1} + e^{i\mathbf{k}\cdot\mathbf{a}_2}\right\rvert$$

Where $\mathbf{a}_1$ and $\mathbf{a}_2$ are the primitive vectors of the hexagonal lattice.

The two bands touch at the **Dirac points** $\mathbf{K}$ and $\mathbf{K}'$ in the Brillouin zone.
Near these points, expanding to linear order:

$$\varepsilon(\mathbf{q}) = \pm \hbar v_F \lvert\mathbf{q}\rvert$$

Where $v_F = \frac{\sqrt{3}}{2}\frac{ta}{\hbar} \approx 10^6$ m/s and
$\mathbf{q} = \mathbf{k} - \mathbf{K}$.

This linear (Dirac-like) dispersion means graphene has zero effective mass and a density of states
$g(\varepsilon) \propto \lvert\varepsilon\rvert$ (linear in energy), unlike the $\sqrt{\varepsilon}$
Dependence of a parabolic band.

</details>

### 5.8 Effective Mass

Near a band extremum at $\mathbf{k}_0$The energy can be expanded:

$$\varepsilon(\mathbf{k}) = \varepsilon_0 + \frac{\hbar^2}{2}\sum_{ij}(m^{-1})_{ij}(k_i - k_{0,i})(k_j - k_{0,j})$$

The **effective mass tensor**
$(m^{-1})_{ij} = \frac{1}{\hbar^2}\frac{\partial^2 \varepsilon}{\partial k_i \partial k_j}$
Determines the response to external fields. For isotropic bands,
$m^* = \hbar^2/(d^2\varepsilon/dk^2)$.

A large effective mass means a flat band (small group velocity). A small effective mass means a
Steep band (high mobility).

The effective mass can be **negative** near a band maximum (holes). Cyclotron resonance experiments
Measure $m^*$ directly: the resonance frequency is $\omega_c = eB/m^*$.

:::caution Common Pitfall The effective mass is a tensor quantity . For crystals with cubic
symmetry, it reduces to A scalar, but for anisotropic crystals (e.g., graphite, silicon), different
effective masses apply Along different crystallographic directions. Always check the crystal
symmetry before assuming $m^*$ is a scalar.
:::

### 5.9 Band Structure Calculations

Modern band structure calculations are based on **density functional theory** (DFT), formulated by
Hohenberg, Kohn, and Sham (1964--1965).

**Hohenberg--Kohn theorems.** (1) The ground-state energy of a many-electron system is a unique
Functional of the electron density $n(\mathbf{r})$. (2) The correct ground-state density minimises
This functional.

**Kohn--Sham equations.** The interacting system is mapped to a fictitious system of non-interacting
Electrons in an effective potential:

$$\left[-\frac{\hbar^2}{2m}\nabla^2 + V_{\mathrm{eff}(\mathbf{r})\right]\psi_i(\mathbf{r}) = \varepsilon_i\psi_i(\mathbf{r})}$$

Where $V_{\mathrm{eff} = V_{\mathrm{ext} + V_H[n] + V_{\mathrm{xc}[n]}}}$. Here $V_{\mathrm{ext}}$
is the External (ionic) potential, $V_H$ is the Hartree (classical Coulomb) potential, and
$V_{\mathrm{xc}}$ Is the exchange-correlation potential.

The electron density is $n(\mathbf{r}) = \sum_i \lvert\psi_i(\mathbf{r})\rvert^2$ (summing over
occupied States). The Kohn--Sham equations are solved self-consistently.

**Common approximations for $V_{\mathrm{xc}}$:**

- **Local density approximation (LDA):**
  $V_{\mathrm{xc}(\mathbf{r}) = V_{\mathrm{xc}^{\mathrm{hom}(n(\mathbf{r}))}}}$ using the
  exchange-correlation energy of a homogeneous electron gas. Good for simple metals but tends to
  underestimate band gaps.
- **Generalised gradient approximation (GGA):** Includes the density gradient
  $\nabla n(\mathbf{r})$Improving accuracy for structural properties and band gaps.
- **Hybrid functionals (e.g., HSE06):** Mix a fraction of exact Hartree--Fock exchange with DFT
  exchange, giving improved band gaps at higher computational cost.

DFT accurately predicts structural properties (lattice constants, elastic constants, phonon
Frequencies within a few percent) but is less reliable for band gaps (LDA underestimates By
30--50\%) and strongly correlated systems (e.g., transition metal oxides).

## 6. Semiconductors

### 6.1 Intrinsic Semiconductors

At $T = 0$The valence band is completely filled and the conduction band is completely empty. There
is a band gap $E_g$.

At finite $T$Electrons are thermally excited across the gap. The intrinsic carrier concentration:

$$n_i = p_i = \sqrt{N_c N_v}\, e^{-E_g/(2k_B T)}$$

Where $N_c$ and $N_v$ are the effective density of states in the conduction and valence bands:

$$N_c = 2\left(\frac{2\pi m_e^* k_B T}{h^2}\right)^{3/2}, \quad N_v = 2\left(\frac{2\pi m_h^* k_B T}{h^2}\right)^{3/2}$$

Here $m_e^*$ and $m_h^*$ are the effective masses of electrons and holes.

**Fermi level** in an intrinsic semiconductor:
$E_F = (E_c + E_v)/2 + \frac{3}{4}k_B T\ln(m_h^*/m_e^*)$. For $m_e^* = m_h^*$: $E_F = E_g/2$.

### 6.2 Extrinsic Semiconductors

**n-type:** Doping with donor atoms (e.g., P in Si) that donate electrons to the conduction band.
Majority carriers: electrons.

**p-type:** Doping with acceptor atoms (e.g., B in Si) that accept electrons from the valence band,
Creating holes. Majority carriers: holes.

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
- **Depletion width:**
  $W = \sqrt{\frac{2\varepsilon_s V_0}{e}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)}$ where
  $\varepsilon_s$ is the permittivity of the semiconductor.

**Current-voltage characteristic (Shockley equation):**

$$I = I_0\left(e^{eV/(k_B T)} - 1\right)$$

Where $I_0$ is the reverse saturation current. Forward bias ($V \gt 0$) exponentially increases the
Current. Reverse bias ($V \lt 0$) gives approximately $I \approx -I_0$.

**Derivation of the built-in potential.** In equilibrium, the Fermi level is constant. The potential
Difference between the n-side (where $E_F$ is near $E_c$) and the p-side (where $E_F$ is near $E_v$)
Is:

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
The n-side are raised relative to the p-side, reducing the barrier. Under reverse bias, the barrier
Is increased.

### 6.5 Band Gap Engineering

The electronic and optical properties of semiconductors can be tailored by forming
**heterostructures** --- junctions between different semiconductor materials.

**Band offsets.** When two semiconductors with different band gaps are joined, the conduction band
Minimum and valence band maximum are offset. The **type-I** (straddling) alignment has the band gap
Of one material contained within the gap of the other (e.g., GaAs/AlGaAs). The **type-II**
(staggered) alignment has the conduction and valence band edges of different materials at different
Energies (e.g., InAs/GaSb).

**Quantum wells.** A thin layer of a narrow-gap semiconductor (e.g., 10 nm of GaAs) sandwiched
Between wide-gap barriers (e.g., AlGaAs) confines electrons and holes in one dimension. The
Confinement energy for an infinite well of width $L$:

$$E_n = \frac{n^2 \pi^2 \hbar^2}{2m^* L^2}$$

This quantisation raises the effective band gap, allowing the optical transition energy to be tuned
By varying $L$.

**Quantum wires and dots.** Further confinement in two dimensions (quantum wire) or three dimensions
(quantum dot) leads to additional quantisation. Quantum dots have discrete, atom-like energy levels
And are often called "artificial atoms."

**Strain engineering.** Lattice mismatch between a thin film and its substrate induces strain,
Modifying the band structure. Tensile strain reduces the band gap, while compressive Strain can lift
degeneracies (e.g., splitting the heavy-hole and light-hole bands).

### 6.6 Optical Properties of Semiconductors

**Absorption.** A photon of energy $\hbar\omega$ can be absorbed if $\hbar\omega \geq E_g$Promoting
An electron from the valence band to the conduction band.

- **Direct band gap** (e.g., GaAs, InP): The conduction band minimum and valence band maximum occur
  at the same $\mathbf{k}$. Photon absorption requires only energy conservation (the photon momentum
  $\hbar\omega/c \approx 0$ is negligible). The absorption coefficient rises sharply above $E_g$:

  $$\alpha(\omega) \propto \sqrt{\hbar\omega - E_g}$$

- **Indirect band gap** (e.g., Si, Ge): The band edges occur at different $\mathbf{k}$. A phonon is
  required to conserve momentum, making the absorption weaker and temperature-dependent:

  $$\alpha(\omega) \propto \frac{(\hbar\omega - E_g - \hbar\Omega)^2}{e^{\hbar\Omega/k_BT} - 1} + \frac{(\hbar\omega - E_g + \hbar\Omega)^2}{1 - e^{-\hbar\Omega/k_BT}}$$

where $\hbar\Omega$ is the phonon energy.

**Excitons.** The electron and hole created by photon absorption are attracted by the Coulomb
Interaction, forming a bound state called an **exciton** with binding energy:

$$E_{\mathrm{ex} = \frac{\mu e^4}{2(4\pi\varepsilon_s)^2\hbar^2} = \frac{\mu}{m_e\varepsilon_r^2} \times 13.6\ \mathrm{eV}}$$

Where $\mu = m_e^* m_h^*/(m_e^* + m_h^*)$ is the reduced mass and $\varepsilon_r$ is the relative
Permittivity. Excitons produce sharp absorption lines slightly below $E_g$.

**Photoluminescence.** When electron--hole pairs recombine radiatively, photons are emitted at
Energies near $E_g$. Direct-gap materials are efficient light emitters (used in LEDs and laser
Diodes). Indirect-gap materials like Si have very low radiative efficiency.

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
Depletion region where they recombine radiatively. The emission wavelength is determined by the Band
gap: $\lambda = hc/E_g$. GaAs ($E_g = 1.42$ eV) emits in the infrared; GaN ($E_g = 3.4$ eV) Emits in
the ultraviolet; InGaN alloys span the visible spectrum.

**Solar cells.** A p-n junction under illumination generates electron--hole pairs. The built-in
Field separates them, producing a photocurrent. The open-circuit voltage satisfies
$V_{\mathrm{OC} \lt E_g/e}$ ( $V_{\mathrm{OC} \approx 0.7\,E_g/e}$). The power conversion Efficiency
is limited by the **Shockley--Queisser limit** ($\sim 33\%$ for a single junction) Due to spectral
mismatch, thermalisation, and radiative recombination losses.

**Field-effect transistor (FET).** A voltage applied to a gate electrode modulates the conductivity
Of a semiconductor channel. In a MOSFET (metal--oxide--semiconductor FET), the gate voltage creates
An inversion layer at the oxide--semiconductor interface, forming a conductive channel. The
Threshold voltage $V_T$ depends on the oxide thickness, doping, and work function difference.

**HEMTs and HBTs.** High-electron-mobility transistors (HEMTs) use heterojunctions (e.g.,
AlGaAs/GaAs) to create a two-dimensional electron gas (2DEG) with very high mobility. Heterojunction
Bipolar transistors (HBTs) use a wide-gap emitter to improve injection efficiency.

## 7. Superconductivity

### 7.1 Basic Phenomenology

**Superconductivity** is the complete loss of electrical resistance below a critical temperature
$T_c$. Discovered by Onnes in 1911 (mercury, $T_c = 4.2$ K).

Key experimental facts:

1. **Zero resistance:** $\rho = 0$ for $T \lt T_c$.
2. **Meissner effect:** Complete expulsion of magnetic flux from the interior: $\mathbf{B} = 0$
   inside a superconductor (for $T \lt T_c$ and $B \lt B_c$).
3. **Critical magnetic field:** Superconductivity is destroyed above
   $B_c(T) = B_c(0)[1 - (T/T_c)^2]$.
4. **Critical current density:** Superconductivity is destroyed above a critical current density
   $J_c$.

### 7.2 London Equations

The **London equations** describe the electromagnetic response of a superconductor:

$$\frac{\partial \mathbf{J}_s}{\partial t} = \frac{n_s e^2}{m_e}\mathbf{E}$$

$$\nabla \times \mathbf{J}_s = -\frac{n_s e^2}{m_e}\mathbf{B}$$

Where $n_s$ is the density of superconducting electrons.

Combining with Maxwell's equations:

$$\nabla^2 \mathbf{B} = \frac{1}{\lambda_L^2}\mathbf{B}$$

Where $\lambda_L = \sqrt{m_e/(\mu_0 n_s e^2)}$ is the **London penetration depth**.

The solution $\mathbf{B}(x) = B_0 e^{-x/\lambda_L}$ shows that magnetic fields decay exponentially
Inside the superconductor, explaining the Meissner effect.

### 7.3 BCS Theory

**BCS theory** (Bardeen, Cooper, Schrieffer, 1957) explains superconductivity through the formation
Of **Cooper pairs**.

**Cooper pairing.** Two electrons with opposite momenta and spins form a bound state via the
Electron-phonon interaction (the lattice mediates an effective attractive interaction). The Cooper
pair Has charge $2e$ and spin 0 (boson).

**The BCS gap equation:**

$$\Delta = V_{\mathrm{pair} \sum_{\mathbf{k}} \frac{\Delta}{2E_{\mathbf{k}}} \tanh\left(\frac{E_{\mathbf{k}}}{2k_B T}\right)}$$

Where $E_{\mathbf{k}} = \sqrt{\xi_{\mathbf{k}}^2 + \Delta^2}$ is the quasiparticle energy,
$\xi_{\mathbf{k}}$ Is the normal-state energy relative to $E_F$And $\Delta$ is the superconducting
energy gap.

At $T = 0$: $\Delta(0) = 2\hbar\omega_D\, e^{-1/(N(E_F)V_{\mathrm{pair})}}$ (BCS formula).

The critical temperature:

$$k_B T_c = 1.13\,\hbar\omega_D\, e^{-1/(N(E_F)V_{\mathrm{pair})}}$$

The ratio $2\Delta(0)/(k_B T_c) \approx 3.53$ is a universal BCS prediction.

### 7.4 Type I and Type II Superconductors

**Type I:** One critical field $B_c$. Below $B_c$: complete Meissner effect. Above $B_c$: normal
State. Examples: Pb, Hg, Al.

**Type II:** Two critical fields $B_{c1} \lt B_{c2}$. For $B_{c1} \lt B \lt B_{c2}$: **mixed state**
(vortices with normal cores in a superconducting matrix). For $B \gt B_{c2}$: normal state.
Examples: Nb, YBCO (high-$T_c$).

### 7.5 High-Temperature Superconductors

Discovered in 1986 (Bednorz and Müller). Cuprate superconductors such as YBa$_2$Cu$_3$O$_{7-\delta}$
(YBCO) have $T_c$ up to $\sim 135$ K. These are Type II, layered, and not fully explained by BCS
Theory (the pairing mechanism is still debated).

**Key properties of high-$T_c$ superconductors:**

- **d-wave pairing symmetry:** Unlike conventional BCS superconductors (s-wave), cuprates have a gap
  function with $d_{x^2-y^2}$ symmetry: $\Delta(\mathbf{k}) = \Delta_0(\cos k_x - \cos k_y)/2$ which
  vanishes along the nodal directions $k_x = \pm k_y$.
- **Short coherence length:** $\xi \sim 1$--$2$ nm (compared with $\sim 100$ nm for conventional
  superconductors), making them sensitive to defects but allowing high critical current densities.
- **Strong anisotropy:** Superconducting properties differ dramatically between the $ab$-planes and
  the $c$-axis direction.
- **Pseudogap phase:** Above $T_c$ but below a characteristic temperature $T^*$A partial gap opens
  in the electronic spectrum, suggesting precursive pairing correlations.
- **Phase diagram:** Doping controls the transition from antiferromagnetic insulator (underdoped)
  through the superconducting dome to a normal metal (overdoped).

Other families of high-$T_c$ superconductors include iron-based pnictides ($T_c$ up to 56 K),
Magnesium diboride MgB$_2$ ($T_c = 39$ K), and the recently discovered nickelates and hydrides
($T_c$ up to $\sim 250$ K under extreme pressure).

## 8. Transport Properties

### 8.1 Electrical Conductivity: Drude Model

The **Drude model** treats conduction electrons as a classical gas scattering off ions with a mean
Free time $\tau$.

Under an electric field $\mathbf{E}$The equation of motion:

$$m_e\frac{d\mathbf{v}}{dt} = -e\mathbf{E} - \frac{m_e\mathbf{v}}{\tau}$$

In steady state ($d\mathbf{v}/dt = 0$): $\mathbf{v}_d = -\frac{e\tau}{m_e}\mathbf{E}$.

The current density: $\mathbf{J} = -ne\mathbf{v}_d = \frac{ne^2\tau}{m_e}\mathbf{E}$.

The **Drude conductivity:**

$$\sigma = \frac{ne^2\tau}{m_e}$$

The **mean free path:** $\ell = v_F\tau$.

**Successes:** Explains Ohm's law ($\mathbf{J} = \sigma\mathbf{E}$) and the Wiedemann--Franz law
($\kappa/\sigma = LT$ with $L = \pi^2 k_B^2/(3e^2)$).

**Failures:** Predicts the wrong temperature dependence ($\rho \propto T$But experiments show
$\rho \propto T^5$ at low $T$ for pure metals). Predicts
$\gamma_{\mathrm{electron} = \frac{3}{2}nk_B}$ But experiments give
$\gamma_{\mathrm{electron} = \frac{\pi^2}{2}nk_B(T/T_F)}$ (much smaller).

### 8.2 The Boltzmann Transport Equation

The semiclassical distribution function $f(\mathbf{r}, \mathbf{k}, t)$ satisfies:

$$\frac{\partial f}{\partial t} + \mathbf{v}_{\mathbf{k}} \cdot \nabla_{\mathbf{r}} f - \frac{e\mathbf{E}}{\hbar}\cdot\nabla_{\mathbf{k}} f = \left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}$$

In the **relaxation time approximation:**

$$\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll} = -\frac{f - f_0}{\tau}}$$

Where $f_0$ is the equilibrium distribution.

**Solution for conductivity.** In a uniform electric field with $f = f_0 + f_1$:

$$f_1 = e\tau\mathbf{E}\cdot\mathbf{v}_{\mathbf{k}}\frac{\partial f_0}{\partial\varepsilon}$$

The conductivity becomes:

$$\sigma = \frac{e^2}{3}\int \tau(\varepsilon)\,v^2(\varepsilon)\,g(\varepsilon)\left(-\frac{\partial f_0}{\partial\varepsilon}\right) d\varepsilon$$

At low $T$, $-\partial f_0/\partial\varepsilon \approx \delta(\varepsilon - \varepsilon_F)$So only
states Near $E_F$ contribute to transport. This explains why impurity scattering dominates at low
$T$ (even a small concentration of impurities affects states near $E_F$).

**Matthiessen's rule.** When multiple scattering mechanisms act independently, the total resistivity
Is approximately additive:

$$\rho(T) = \rho_0 + \rho_{\mathrm{ph}(T)}$$

Where $\rho_0$ is the residual resistivity (temperature-independent, from impurities and defects)
And $\rho_{\mathrm{ph}(T)}$ is the phonon contribution (proportional to $T$ at high $T$ and to $T^5$
At low $T$ via the Bloch--Grüneisen formula). The **resistance ratio**
$RRR = \rho(300\ \mathrm{K})/\rho_0$ Is a measure of sample purity.

**Bloch--Grüneisen formula.** For electron--phonon scattering in a free electron metal:

$$\rho_{\mathrm{ph}(T) \propto \left(\frac{T}{\Theta_D}\right)^5 \int_0^{\Theta_D/T} \frac{x^5}{(e^x - 1)(1 - e^{-x})}\,dx}$$

At high $T$ ($T \gt \Theta_D$): $\rho_{\mathrm{ph} \propto T}$ (linear, agreeing with the Drude
model). At low $T$ ($T \ll \Theta_D$): $\rho_{\mathrm{ph} \propto T^5}$Consistent with experiment.

### 8.3 Thermal Conductivity

The thermal conductivity of electrons:

$$\kappa_e = \frac{1}{3}c_e v_F \ell_e$$

Where $c_e = \frac{\pi^2}{2}nk_B(T/T_F)$ is the electronic specific heat. The phonon contribution:

$$\kappa_{\mathrm{ph} = \frac{1}{3}C_V v_s \ell_{\mathrm{ph}}}$$

The total thermal conductivity: $\kappa = \kappa_e + \kappa_{\mathrm{ph}}$.

### 8.4 The Hall Effect

When a magnetic field $\mathbf{B} = B\hat{\mathbf{z}}$ is applied perpendicular to a current
$\mathbf{J} = J_x\hat{\mathbf{x}}$A transverse electric field develops:

$$E_y = R_H J_x B$$

The **Hall coefficient:** $R_H = -1/(ne)$ for a single carrier type.

The **Hall angle:** $\theta_H = \arctan(E_y/E_x) = \omega_c\tau$ where $\omega_c = eB/m^*$ is the
Cyclotron frequency.

### 8.5 Effective Mass

Near a band extremum, the energy can be expanded:

$$\varepsilon(\mathbf{k}) = \varepsilon_0 + \frac{\hbar^2}{2}\sum_{ij}(m^{-1})_{ij}k_i k_j$$

The **effective mass tensor**
$(m^{-1})_{ij} = \frac{1}{\hbar^2}\frac{\partial^2 \varepsilon}{\partial k_i \partial k_j}$
Determines the response to external fields. For isotropic bands,
$m^* = \hbar^2/(d^2\varepsilon/dk^2)$.

A large effective mass means a flat band (small group velocity). A small effective mass means a
Steep band (high mobility).

## 9. Defects in Crystals

### 9.1 Point Defects

- **Vacancy:** Missing atom at a lattice site.
- **Interstitial:** Extra atom between lattice sites.
- **Substitutional:** Foreign atom replacing a host atom.
- **Frenkel defect:** Vacancy-interstitial pair (atom moves to interstitial site).
- **Schottky defect:** Vacancy pair (in ionic crystals, cation and anion vacancies).

**Equilibrium concentration of vacancies:**

$$n_v = N\,e^{-E_v/(k_B T)}$$

Where $N$ is the number of lattice sites and $E_v$ is the vacancy formation energy ($\sim 1$ eV).

**Derivation.** Minimising the free energy $F = n_v E_v - T S_{\mathrm{config}}$ where
$S_{\mathrm{config} = k_B \ln\binom{N}{n_v}}$:

$$\frac{\partial F}{\partial n_v} = E_v + k_B T \ln\left(\frac{n_v}{N - n_v}\right) = 0$$

For $n_v \ll N$: $n_v = N e^{-E_v/(k_B T)}$. $\blacksquare$

### 9.2 Dislocations

- **Edge dislocation:** Extra half-plane inserted into the lattice. Burgers vector $\mathbf{b}$ is
  perpendicular to the dislocation line.
- **Screw dislocation:** The lattice is sheared. $\mathbf{b}$ is parallel to the dislocation line.

Dislocations enable **plastic deformation** at stresses far below the theoretical shear strength.
The Peach-Koehler force on a dislocation:

$$\mathbf{F} = (\boldsymbol{\sigma}\cdot\mathbf{b}) \times \hat{\mathbf{t}}$$

Where $\boldsymbol{\sigma}$ is the stress tensor and $\hat{\mathbf{t}}$ is the unit tangent to the
Dislocation line.

### 9.3 Impact on Properties

Defects strongly affect electrical, mechanical, and thermal properties:

- **Electrical:** Donor and acceptor levels in semiconductors are substitutional defects. Vacancies
  act as scattering centres, reducing conductivity.
- **Mechanical:** Dislocations determine yield strength (Hall--Petch relation). Work hardening
  increases dislocation density.
- **Thermal:** Point defects scatter phonons, reducing thermal conductivity.

## 10. Magnetism in Solids

### 10.1 Types of Magnetism

- **Diamagnetism:** Weak, negative susceptibility ($\chi \lt 0$). Present in all materials. Arises
  from the orbital response to an applied field (Lenz's law). $\chi_d \sim -10^{-5}$.
- **Paramagnetism:** Positive susceptibility ($\chi \gt 0$). Unpaired spins align with the field.
  Curie law: $\chi = C/T$ where $C = N\mu_0\mu_{\mathrm{eff}^2/(3k_B)}$.
- **Ferromagnetism:** Large positive susceptibility. Spontaneous magnetisation below the Curie
  temperature $T_C$.
- **Antiferromagnetism:** Adjacent spins antiparallel. Susceptibility peaks at the Néel temperature
  $T_N$.
- **Ferrimagnetism:** Antiparallel spins of unequal magnitude. Net magnetisation (e.g., magnetite).

### 10.2 Diamagnetism

Diamagnetism is the universal tendency of matter to weakly oppose an applied magnetic field.

**Langevin diamagnetism.** For an atom with $Z$ electrons, each in a circular orbit of radius
$\langle r^2 \rangle$A field $B$ along $z$ modifies the angular velocity by
$\Delta\omega = eB/(2m_e)$. The induced magnetic moment per atom:

$$\mu_{\mathrm{dia} = -\frac{e^2 B}{6m_e}\sum_{i=1}^{Z}\langle r_i^2 \rangle = -\frac{e^2 Z B}{6m_e}\langle r^2 \rangle}$$

The susceptibility (per unit volume, with $n$ atoms per unit volume):

$$\chi_L = -\frac{\mu_0 n e^2 Z \langle r^2 \rangle}{6m_e}$$

This is independent of temperature and very small: $\chi_L \sim -10^{-5}$.

**Landau diamagnetism.** Free electrons also exhibit diamagnetism. The quantisation of electron
Orbits into Landau levels modifies the ground-state energy in an applied field:

$$\chi_{\mathrm{Landau} = -\frac{1}{3}\chi_P = -\frac{\mu_0 \mu_B^2 g(\varepsilon_F)}{3}}$$

Where $\chi_P$ is the Pauli paramagnetic susceptibility. The total susceptibility of a free electron
Gas is $\chi = \chi_P + \chi_{\mathrm{Landau} = \frac{2}{3}\chi_P}$ (still paramagnetic, but Reduced
by one-third).

### 10.3 Paramagnetism

**Langevin paramagnetism (classical).** For $N$ non-interacting magnetic moments $\boldsymbol{\mu}$
Of magnitude $\mu$ in a field $B$:

$$M = N\mu\, L(\mu B/k_B T)$$

Where $L(x) = \coth x - 1/x$ is the Langevin function. At high temperature ($\mu B \ll k_B T$):

$$L(x) \approx \frac{x}{3} \implies M \approx \frac{N\mu^2 B}{3k_B T}$$

Giving the **Curie law** $\chi = C/T$ with $C = N\mu_0\mu^2/(3k_B)$.

**Quantum treatment (Brillouin function).** For angular momentum $J$ with $g_J$ the Landé g-factor,
The magnetisation is:

$$M = Ng_J\mu_B J\, B_J(x)$$

Where $x = g_J\mu_B J B/(k_B T)$ and
$B_J(x) = \frac{2J+1}{2J}\coth\left(\frac{2J+1}{2J}x\right) - \frac{1}{2J}\coth\left(\frac{x}{2J}\right)$
Is the Brillouin function. For $J = 1/2$ (spin-1/2), $B_{1/2}(x) = \tanh x$.

**Pauli paramagnetism.** In a metal, the conduction electrons form a degenerate Fermi gas. Only
Electrons near $\varepsilon_F$ can flip their spins in response to a field:

$$\chi_P = \mu_0\mu_B^2\,g(\varepsilon_F) = \frac{3\mu_0\mu_B^2 N}{2\varepsilon_F}$$

This is temperature-independent (up to corrections of order $(T/T_F)^2$), in contrast to the Curie
Law. The ratio $\chi_P/\chi_{\mathrm{Curie} \sim T/T_F \sim 10^{-2}}$ at room temperature,
Explaining why metals are only weakly paramagnetic.

### 10.4 Ferromagnetism and the Mean-Field Theory

In the **mean-field (Weiss) model**, each spin experiences an effective field:

$$B_{\mathrm{eff} = B_0 + \lambda M}$$

Where $\lambda$ is the molecular field constant and $M$ is the magnetisation.

The spontaneous magnetisation satisfies:

$$M = N\mu_B\tanh\left(\frac{\mu_B(B_0 + \lambda M)}{k_B T}\right)$$

Setting $B_0 = 0$ and expanding for small $M$ near $T_C$:

$$M \approx \frac{N\mu_B^2\lambda M}{k_B T_C}$$

Giving the **Curie temperature:** $T_C = N\mu_B^2\lambda/k_B$.

The critical exponent $\beta = 1/2$ (mean-field value), compared with the experimental value
$\beta \approx 1/3$ (3D Ising universality class).

Above $T_C$The susceptibility follows the **Curie--Weiss law:**

$$\chi = \frac{C}{T - T_C}$$

<details>
<summary>Worked Example: Curie Temperature of Iron</summary>

Iron has $N = 8.49 \times 10^{28}$ atoms/m$^3$Magnetic moment $\mu = 2.22\,\mu_B$ per atom, And
$T_C = 1043$ K. From $T_C = N\mu^2\lambda/(3k_B)$:

$$\lambda = \frac{3k_B T_C}{N\mu^2} = \frac{3 \times 1.381 \times 10^{-23} \times 1043}{8.49 \times 10^{28} \times (2.22 \times 9.274 \times 10^{-24})^2}$$

$$\lambda = \frac{4.32 \times 10^{-20}}{8.49 \times 10^{28} \times 4.25 \times 10^{-46}} = \frac{4.32 \times 10^{-20}}{3.61 \times 10^{-17}} = 1.20 \times 10^{-3}\ \mathrm{T}\,m/A$$

The corresponding exchange field at $T = 0$ ($M = N\mu$):

$$B_{\mathrm{ex} = \lambda M = 1.20 \times 10^{-3} \times 8.49 \times 10^{28} \times 2.22 \times 9.274 \times 10^{-24} = 2100\ \mathrm{T}}$$

This enormous effective field is purely quantum-mechanical in origin (exchange interaction).

</details>

### 10.5 Magnetic Domains

Below $T_C$A ferromagnet divides into **domains** of uniform magnetisation, separated by **domain
Walls** (Bloch walls). Domain formation reduces the magnetostatic energy.

The **domain wall width:** $\delta \sim \sqrt{A/K}$ where $A$ is the exchange stiffness and $K$ is
the Anisotropy constant. Typical values: $\delta \sim 100$ nm.

The wall energy per unit area: $\sigma_w \sim 4\sqrt{AK}$.

### 10.6 Magnetic Ordering

**Antiferromagnetism.** In antiferromagnets (e.g., MnO, NiO), adjacent spins align antiparallel due
To negative exchange interaction $J \lt 0$. The Néel temperature is:

$$T_N = \frac{\lvert J\rvert z S(S+1)}{3k_B}$$

Where $z$ is the number of nearest neighbours. The susceptibility peaks at $T_N$ and decreases at
Both higher and lower temperatures.

**Ferrimagnetism.** In ferrimagnets (e.g., Fe$_3$O$_4$), antiparallel sublattices have different
Magnetic moments, giving a net spontaneous magnetisation. The temperature dependence of $M(T)$ is
More complex than for simple ferromagnets.

**Heisenberg model.** The exchange interaction between neighbouring spins is described by:

$$\hat{H} = -\sum_{\langle i,j\rangle} J_{ij}\,\hat{\mathbf{S}}_i \cdot \hat{\mathbf{S}}_j$$

For $J \gt 0$: ferromagnetic coupling (spins parallel). For $J \lt 0$: antiferromagnetic coupling
(spins antiparallel). The exchange integral $J$ arises from the combination of Coulomb repulsion and
The Pauli exclusion principle (not from magnetic dipole interactions, which are far too weak).

### 10.7 Spin Waves (Magnons)

At low temperatures ($T \ll T_C$), the reduction in magnetisation below saturation is carried by
Collective excitations called **spin waves** or **magnons**.

**Linear spin wave theory.** For a 1D chain of spins with nearest-neighbour exchange $J$ and Lattice
constant $a$The magnon dispersion is:

$$\hbar\omega(q) = 2JS[1 - \cos(qa)] = 4JS\sin^2\left(\frac{qa}{2}\right)$$

For small $q$ (long wavelength): $\hbar\omega \approx JSa^2 q^2$ (quadratic dispersion, unlike
Phonons which are linear).

The magnetisation at low $T$:

$$M(T) = M(0)\left[1 - \zeta(3/2)\left(\frac{k_B T}{4\pi JS}\right)^{3/2}\right]$$

In 3D, where $\zeta(3/2) \approx 2.612$ is the Riemann zeta function. The $T^{3/2}$ dependence
(Bloch $T^{3/2}$ law) is well confirmed experimentally and contrasts with the exponential Freeze-out
of a classical paramagnet.

Magnons are bosons and obey Bose--Einstein .../4-statistics-and-probability/2*statistics. They
contribute to the low-temperature Specific heat of ferromagnets: $C*{\mathrm{mag} \propto T^{3/2}}$.

### 10.8 The de Haas--van Alphen Effect

In a magnetic field, the electron orbits are quantised into **Landau levels**:

$$\varepsilon_n = \left(n + \frac{1}{2}\right)\hbar\omega_c, \quad \omega_c = \frac{eB}{m^*}$$

The density of states oscillates with $1/B$ (de Haas--van Alphen oscillations). The oscillation
period Gives the extremal cross-sectional area of the Fermi surface:

$$\Delta\left(\frac{1}{B}\right) = \frac{2\pi e}{\hbar A_{\mathrm{ext}}}$$

This is the primary experimental technique for mapping Fermi surfaces.

:::caution Common Pitfall The exchange interaction $J$ in the Heisenberg model is _not_ the magnetic
dipole interaction. The dipole energy between two spins is $\sim \mu_0\mu_B^2/a^3 \sim 10^{-4}$ eV,
far too small to Explain Curie temperatures of $\sim 10^3$ K ($\sim 0.1$ eV). The exchange
interaction is a Consequence of the Coulomb repulsion combined with the antisymmetry of the electron
wave function (Pauli principle), and is $10$--$100$ meV.
:::

## 11. Problem Set

**Problem 1.** Calculate the packing fraction of the simple cubic lattice. Compare it with BCC and
FCC, And explain why SC is rarely observed in elemental metals.

**Problem 2.** Aluminium is FCC with $a = 0.405$ nm and $M = 26.98$ g/mol. Calculate the theoretical
Density and compare with the experimental value ($2.70\ \mathrm{g}/cm^3$).

**Problem 3.** A plane intercepts the crystallographic axes at $2a$, $3b$And $\infty c$. Determine
the Miller indices. A direction passes through the origin and the point $(1, -1, 0)$ in units of
lattice Constants. Write the direction indices.

**Problem 4.** Magnesium is HCP with $a = 0.321$ nm, $c = 0.521$ nm. Calculate the ideal $c/a$ ratio
And the actual ratio. How many atoms are in the conventional cell?

**Problem 5.** For a BCC lattice with lattice constant $a$Find the reciprocal lattice vectors and
show That the reciprocal lattice is FCC with conventional cubic constant $4\pi/a$.

**Problem 6.** Construct the first three Brillouin zones of a 2D square lattice. Show that all three
Zones have the same area.

**Problem 7.** A powder sample of copper (FCC, $a = 0.3615$ nm) is illuminated with Cu $K_\alpha$
Radiation ($\lambda = 0.15406$ nm). Calculate the $2\theta$ angles of the first five diffraction
Peaks and identify their $(hkl)$ indices.

**Problem 8.** Calculate the structure factor for the CsCl structure (simple cubic with a two-atom
Basis: Cs at $(0,0,0)$ and Cl at $(a/2, a/2, a/2)$). Show that there are no systematic absences.

**Problem 9.** Derive the structure factor for the perovskite structure (e.g., SrTiO$_3$: Sr at
corners, Ti at body centre, O at face centres). Identify which reflections depend on which atoms.

**Problem 10.** Derive the phonon dispersion relation for a 1D monatomic chain with
nearest-neighbour Spring constant $K_1$ and next-nearest-neighbour spring constant $K_2$. Show that
the maximum Frequency increases relative to the nearest-neighbour-only case.

**Problem 11.** The Debye temperature of diamond is $\Theta_D = 2230$ K. Calculate the lattice
specific Heat at $T = 100$ K and $T = 500$ K. At what temperature does the Debye $T^3$ law give a 1%
Accurate approximation?

**Problem 12.** Compare the Einstein and Debye predictions for $C_V/C_{\mathrm{Dulong}--Petit}$ as a
Function of $T/\Theta$ at $T/\Theta = 0.1$, $0.5$And $1.0$.

**Problem 13.** Sodium has $n = 2.65 \times 10^{28}\ \mathrm{m}^{-3}$ conduction electrons.
Calculate The Fermi energy, Fermi wave vector, Fermi velocity, and Fermi temperature.

**Problem 14.** Using the tight-binding model for a 1D chain with nearest-neighbour hopping $t$: (a)
find the effective mass at the band bottom and band top, and (b) calculate the density of states
$g(\varepsilon)$ and show it diverges at the band edges.

**Problem 15.** A silicon sample is doped with $N_D = 10^{22}\ \mathrm{m}^{-3}$ phosphorus atoms.
Calculate the electron and hole concentrations at 300 K
($n_i = 1.5 \times 10^{16}\ \mathrm{m}^{-3}$) And the position of the Fermi level relative to the
conduction band edge.

**Problem 16.** A p-n junction is made from Si with $N_A = 10^{23}\ \mathrm{m}^{-3}$ and
$N_D = 10^{22}\ \mathrm{m}^{-3}$. Calculate the built-in potential and the depletion width at 300 K.
($\varepsilon_s = 11.7\varepsilon_0$ for Si.)

**Problem 17.** A classical paramagnetic salt contains $N = 2.69 \times 10^{27}$ spins/m$^3$ with
$J = S = 1/2$ and $g = 2$. Calculate the magnetisation in a field of $B = 1$ T at $T = 300$ K and
$T = 4$ K.

**Problem 18.** Using the mean-field theory, derive the Curie--Weiss law $\chi = C/(T - T_C)$ for a
Ferromagnet above $T_C$. Express $C$ in terms of $N$, $\mu$And $k_B$.

**Hints and Selected Results:**

- _Problem 1:_ $\mathrm{APF_}{\mathrm{SC} = \pi/6 \approx 0.524}$. SC has the lowest packing
  efficiency of the three cubic structures, which is why it is energetically unfavourable for most
  metals (polonium being the exception).
- _Problem 3:_ Reciprocals of $(2, 3, \infty)$ are $(1/2, 1/3, 0)$Giving $(3, 2, 0)$. Direction:
  $[1\bar{1}0]$.
- _Problem 4:_ Ideal $c/a = \sqrt{8/3} \approx 1.633$. Actual $c/a = 1.623$. 6 atoms per
  conventional cell.
- _Problem 5:_ $\mathbf{b}_1 = (2\pi/a)(\hat{y} + \hat{z} - \hat{x})$Etc. The 8 nearest reciprocal
  lattice points at $(\pm 2\pi/a)(\pm 1, \pm 1, \pm 1)/2$ form an FCC pattern.
- _Problem 7:_ First five FCC reflections: (111), (200), (220), (311), (222). Use
  $2d\sin\theta = \lambda$ with $d = a/\sqrt{h^2+k^2+l^2}$.
- _Problem 13:_ $\varepsilon_F = 3.24$ eV, $k_F = 9.22 \times 10^9$ m$^{-1}$,
  $v_F = 1.07 \times 10^6$ m/s, $T_F = 3.76 \times 10^4$ K.
- _Problem 15:_ $n = N_D = 10^{22}$ m$^{-3}$, $p = n_i^2/N_D = 2.25 \times 10^{10}$ m$^{-3}$
  $E_c - E_F = k_B T\ln(N_c/N_D) \approx 0.214$ eV.
- _Problem 16:_ $V_0 = 0.716$ V, $W \approx 0.35$ $\mu$M.
- _Problem 17:_ At 300 K: $M \approx \mu_0 N \mu_B^2 B/(3k_B T) = 0.078$ A/m. At 4 K: the classical
  approximation breaks down; use the Brillouin function $B_{1/2}(x) = \tanh(x)$ with
  $x = \mu_B B/(k_B T)$.

:::caution Common Pitfall The free electron model and the nearly free electron model give band gaps
at the Brillouin zone Boundaries (where Bragg diffraction occurs). Do not confuse the real-space
lattice constant $a$ With the reciprocal lattice spacing $2\pi/a$. The first Brillouin zone extends
from $-\pi/a$ to $+\pi/a$ in each direction, not from $0$ to $a$. When calculating the Fermi wave
vector, always Use $k_F = (3\pi^2 n)^{1/3}$ --- the factor of $3\pi^2$ (not $6\pi^2$) accounts for
the factor Of 2 from spin.
:::

## 12. Advanced Topics in Superconductivity

### 12.1 Ginzburg--Landau Theory

The Ginzburg--Landau (GL) theory provides a phenomenological description of superconductivity near
$T_c$ using a complex order parameter $\psi(\mathbf{r})$ where $|\psi|^2 = n_s$ is the superfluid
density.

The GL free energy functional:

$$\mathcal{F} = \mathcal{F}_n + \alpha|\psi|^2 + \frac{\beta}{2}|\psi|^4 + \frac{1}{2m^*}\left|\left(-i\hbar\nabla - e^*\mathbf{A}\right)\psi\right|^2 + \frac{|\mathbf{B}|^2}{2\mu_0}$$

Where $\alpha = \alpha_0(T - T_c)$ (negative below $T_c$), $\beta > 0$, $m^* = 2m_e$, $e^* = 2e$
(Cooper pair charge), and $\mathbf{A}$ is the vector potential.

Minimising with respect to $\psi^*$ gives the **first GL equation**:

$$\alpha\psi + \beta|\psi|^2\psi + \frac{1}{2m^*}\left(-i\hbar\nabla - e^*\mathbf{A}\right)^2\psi = 0$$

Minimising with respect to $\mathbf{A}$ gives the **second GL equation** (supercurrent):

$$\mathbf{J}_s = \frac{e^*\hbar}{m^*}\left(\psi^*\nabla\psi - \psi\nabla\psi^*\right) - \frac{e^{*2}}{m^*}|\psi|^2\mathbf{A}$$

### 12.2 Coherence Length and Penetration Depth

Two fundamental length scales emerge from the GL theory:

**Coherence length** (characterises the spatial variation of $|\psi|$):

$$\xi(T) = \sqrt{\frac{\hbar^2}{2m^*|\alpha|}} = \frac{\xi_0}{\sqrt{1 - T/T_c}}$$

**Penetration depth** (characterises the decay of $\mathbf{B}$):

$$\lambda(T) = \sqrt{\frac{m^*}{\mu_0 e^{*2}|\psi_\infty|^2}} = \frac{\lambda_0}{\sqrt{1 - T/T_c}}$$

Where $|\psi_\infty|^2 = |\alpha|/\beta$ is the bulk equilibrium value.

The ratio of these length scales determines the superconductor type:

$$\kappa = \frac{\lambda}{\xi}$$

- $\kappa < 1/\sqrt{2}$: Type I (positive surface energy)
- $\kappa > 1/\sqrt{2}$: Type II (negative surface energy, mixed state favourable)

### 12.3 Abrikosov Vortices

In the mixed state of a Type II superconductor ($B_{c1} < B < B_{c2}$), magnetic flux penetrates in
quantised vortices, each carrying one flux quantum:

$$\Phi_0 = \frac{h}{2e} = 2.07 \times 10^{-15}\ \mathrm{Wb}$$

The vortex core (radius $\sim\xi$) is in the normal state, while supercurrents circulate around it
(decaying over $\sim\lambda$).

The upper critical field from GL theory:

$$B_{c2} = \frac{\Phi_0}{2\pi\xi^2}$$

The lower critical field:

$$B_{c1} = \frac{\Phi_0}{4\pi\lambda^2}\ln\kappa$$

The thermodynamic critical field:

$$B_c = \frac{\Phi_0}{2\pi\sqrt{2}\xi\lambda}$$

These satisfy $B_{c1} < B_c < B_{c2}$ for $\kappa > 1/\sqrt{2}$.

### 12.4 Flux Quantisation and Josephson Effect

**Flux quantisation.** The GL order parameter must be single-valued. Integrating the supercurrent
around a closed loop enclosing flux $\Phi$:

$$\oint \nabla\theta \cdot d\mathbf{l} = \frac{2\pi\Phi}{\Phi_0} = 2\pi n$$

Where $\theta$ is the phase of $\psi$ and $n$ is an integer. Hence $\Phi = n\Phi_0$.

**DC Josephson effect.** For a superconductor--insulator--superconductor (SIS) junction with phase
difference $\delta$:

$$I = I_c \sin\delta$$

Where $I_c$ is the critical current.

**AC Josephson effect.** Applying a voltage $V$ across the junction causes the phase to evolve as
$\dot{\delta} = 2eV/\hbar$Giving:

$$I = I_c\sin\!\left(\delta_0 + \frac{2eV}{\hbar}t\right)$$

The oscillation frequency $\nu = 2eV/h$ provides the basis for the Josephson voltage standard:
$V = n(h/2e)\nu$.

<details>
<summary>Worked Example 12.1: Type I vs Type II Classification</summary>

Niobium has $\xi_0 = 39$ nm and $\lambda_0 = 39$ nm, giving
$\kappa = \lambda/\xi = 1.0 > 1/\sqrt{2} \approx 0.71$. Therefore Nb is Type II.

$$B_{c2} = \frac{\Phi_0}{2\pi\xi^2} = \frac{2.07 \times 10^{-15}}{2\pi \times (39 \times 10^{-9})^2} = \frac{2.07 \times 10^{-15}}{9.55 \times 10^{-15}} \approx 0.217\ \mathrm{T}$$

The experimental $B_{c2}(0) \approx 0.4$ T. The discrepancy arises because the GL expressions use
$\xi$ and $\lambda$ at $T_c$While the actual values differ at $T = 0$.

For aluminium: $\xi_0 = 1600$ nm, $\lambda_0 = 16$ nm, $\kappa = 0.01 \ll 1/\sqrt{2}$. Al is
strongly Type I.

</details>

<details>
<summary>Worked Example 12.2: Josephson Junction Frequency</summary>

A voltage $V = 1\ \mu$V is applied across a Josephson junction:

$$\nu = \frac{2eV}{h} = \frac{2 \times 1.602 \times 10^{-19} \times 10^{-6}}{6.626 \times 10^{-34}} = \frac{3.204 \times 10^{-25}}{6.626 \times 10^{-34}} = 4.836 \times 10^{8}\ \mathrm{Hz} \approx 483.6\ \mathrm{MHz}$$

The convenient relation is $\nu/\text{GHz} = 483.6 \times V/\mu\text{V}$. This precise
frequency-voltage relation is used to maintain the volt standard worldwide.

</details>

## 13. Topological Insulators and Semimetals

### 13.1 Berry Phase

When an electron adiabatically traverses a closed loop in $\mathbf{k}$-space, its Bloch state
acquires a geometric phase:

$$\gamma_n(\mathcal{C}) = i\oint_{\mathcal{C}} \langle u_{n\mathbf{k}}|\nabla_{\mathbf{k}} u_{n\mathbf{k}}\rangle \cdot d\mathbf{k}$$

The **Berry curvature** is the $\mathbf{k}$-space analog of a magnetic field:

$$\boldsymbol{\Omega}_n(\mathbf{k}) = \nabla_{\mathbf{k}} \times \langle u_{n\mathbf{k}}|i\nabla_{\mathbf{k}} u_{n\mathbf{k}}\rangle$$

The Berry phase for a loop $\mathcal{C}$ enclosing area $\mathcal{A}$ is:

$$\gamma = \int_{\mathcal{A}} \boldsymbol{\Omega} \cdot d\mathcal{A}$$

For graphene near a Dirac point, the Berry phase is $\gamma = \pi$ (a half-flux quantum), which
leads to the **absence of backscattering** and contributes to the high mobility of graphene.

### 13.2 Topological Insulators

A **topological insulator** (TI) is an insulator in the bulk but has conducting states on its
surface. These surface states are topologically protected: they cannot be removed by surface
impurities or disorder (as long as time-reversal symmetry is preserved).

**Key properties:**

- Bulk has a band gap, but the surface has gapless Dirac-like states
- Surface states have a single Dirac cone (spin-momentum locking)
- The $Z_2$ topological invariant $\nu = 1$ distinguishes TIs ($\nu = 1$) from trivial insulators
  ($\nu = 0$)

**2D topological insulator** (quantum spin Hall insulator): Time-reversal-symmetric 2D system with
helical edge states. The conductance is quantised: $G = 2e^2/h$ (one channel per edge, with opposite
spins moving in opposite directions).

**Examples:** Bi$_2$Se$_3$Bi$_2$Te$_3$Sb$_2$Te$_3$ (3D TIs); HgTe/CdTe quantum wells (2D TIs).

### 13.3 Weyl and Dirac Semimetals

**Weyl semimetals** have band touchings at discrete points (Weyl nodes) in the Brillouin zone where
the dispersion is linear in all three directions:

$$\varepsilon(\mathbf{k}) = \pm\hbar v_F |\mathbf{k} - \mathbf{k}_W|$$

Weyl nodes come in pairs of opposite chirality and are topologically protected. Key signatures:

- **Fermi arcs**: Surface states connecting projections of Weyl nodes of opposite chirality
- **Chiral anomaly**: In parallel $\mathbf{E}$ and $\mathbf{B}$ fields, charge is pumped between
  Weyl nodes, giving negative magnetoresistance
- **Anomalous Hall effect**: Even without magnetic order

**Dirac semimetals** have fourfold-degenerate Dirac points (two overlapping Weyl points of opposite
chirality). Examples: Na$_3$Bi, Cd$_3$As$_2$.

<details>
<summary>Worked Example 13.1: Chern Number and Quantum Hall Effect</summary>

The **Chern number** for a 2D band is the integral of the Berry curvature over the Brillouin zone:

$$C = \frac{1}{2\pi}\int_{\text{BZ} \Omega_z(\mathbf{k})\, d^2k}$$

The Chern number is an integer (topological invariant). The Hall conductivity is quantised:

$$\sigma_{xy} = C\frac{e^2}{h}$$

For the integer quantum Hall effect with filling factor $\nu$, $C = \nu$.

The TKNN formula (Thouless, Kohmoto, Nightingale, den Nijs, 1982) established that the quantum Hall
conductance is a topological invariant, explaining its remarkable precision and robustness against
disorder.

</details>

## 14. Many-Body Physics in Solids

### 14.1 Electron--Electron Interactions: Screening

In a metal, the Coulomb interaction between electrons is screened by the other electrons. The
**Thomas--Fermi screening wavevector**:

$$q_{\text{TF}^2 = \frac{e^2 g(\varepsilon_F)}{\varepsilon_0} = \frac{4k_F}{\pi a_0}}$$

Where $a_0 = 4\pi\varepsilon_0\hbar^2/(m_e e^2)$ is the Bohr radius. The screened potential:

$$V_{\text{scr}(r) = \frac{e^2}{4\pi\varepsilon_0 r}\,e^{-q_{\text{TF} r}}}$$

The screening length $\lambda_{\text{TF} = 1/q_{\text{TF} \sim 0.5}}$ Å in metals (about one atomic
spacing), meaning the Coulomb interaction is very short-ranged.

### 14.2 The Hubbard Model

The Hubbard model captures the competition between kinetic energy (delocalisation) and on-site
Coulomb repulsion (localisation):

$$\hat{H} = -t\sum_{\langle i,j\rangle,\sigma}\hat{c}_{i\sigma}^\dagger\hat{c}_{j\sigma} + U\sum_i \hat{n}_{i\uparrow}\hat{n}_{i\downarrow}$$

Where $t$ is the hopping integral and $U$ is the on-site repulsion energy.

**Limiting cases:**

- $U \ll t$: Weakly correlated metal (well-described by band theory)
- $U \gg t$: Mott insulator (each site has exactly one electron, localised by strong repulsion)
- $U/t \sim 1$: Strongly correlated regime (intermediate coupling), relevant for transition metal
  oxides

The half-filled Hubbard model on a bipartite lattice has a metal--insulator transition at
$U_c \sim W$ (bandwidth). For $U > U_c$The system is a Mott insulator even though band theory
predicts a metal.

### 14.3 Quasiparticles and Fermi Liquid Theory

Landau's **Fermi liquid theory** (1956) states that the low-energy excitations of an interacting
Fermi system can be described as **quasiparticles** --- weakly interacting fermions with
renormalised parameters:

- Effective mass $m^*$ (renormalised by interactions)
- Residual quasiparticle--quasiparticle interactions described by Landau parameters $F_l$

The quasiparticle lifetime goes as $\tau \propto 1/(\varepsilon - \varepsilon_F)^2$So quasiparticles
near the Fermi surface are well-defined (long-lived).

**Experimental signatures of Fermi liquid behaviour:**

- $C_V = \gamma T$ with enhanced $\gamma \propto m^*$
- $\rho = \rho_0 + AT^2$ (quadratic temperature dependence)
- Pauli-like susceptibility $\chi$ (temperature-independent)

**Non-Fermi liquid** behaviour occurs in many correlated systems (cuprates near optimal doping,
heavy fermion materials near quantum critical points) where $\rho \propto T$ (linear) or other
anomalous power laws are observed.

### 14.4 Kondo Effect

When a magnetic impurity (e.g., a single Fe atom) is embedded in a non-magnetic metal, the impurity
spin is screened by conduction electrons at low temperature, forming a singlet state. This is the
**Kondo effect**.

The Kondo temperature $T_K$ sets the energy scale:

$$k_B T_K \sim D\,e^{-1/(N(E_F)J)}$$

Where $D$ is the bandwidth and $J$ is the exchange coupling. Below $T_K$:

- The resistivity increases logarithmically: $\Delta\rho \propto \ln(T_K/T)$
- The impurity moment is fully screened
- A narrow resonance (Kondo resonance) appears at the Fermi level in the density of states

<details>
<summary>Worked Example 14.1: Mott Transition</summary>

Consider the Hubbard model at half-filling on a Bethe lattice (infinite coordination number) with
bandwidth $W = 12t$.

The Mott transition occurs when $U \sim W$. For typical transition metal oxides:

- VO$_2$: $U \sim 1$--$2$ eV, $W \sim 2$ eV --- near the transition (VO$_2$ undergoes a
  metal--insulator transition at $T_c = 340$ K)
- NiO: $U \sim 5$--$8$ eV, $W \sim 2$ eV --- deep in the insulating regime
- SrVO$_3$: $U \sim 1$--$3$ eV, $W \sim 3$ eV --- correlated metal

In the Mott insulator NiO, band theory predicts a partially filled $3d$ band (metal), but strong
correlations open a gap of $\sim 4$ eV between the lower and upper Hubbard bands. This is why DFT
(which underestimates correlations) incorrectly predicts NiO to be metallic, while DFT+$U$ or GW
methods correctly give an insulator.

</details>

<details>
<summary>Worked Example 14.2: Effective Mass Enhancement</summary>

In a heavy fermion material like CeCu$_2$Si$_2$The electronic specific heat coefficient is
$\gamma \approx 1$ J/(mol$\cdot$K$^2$), compared with the free electron value $\gamma_0 \approx 1$
mJ/(mol$\cdot$K$^2$).

The mass enhancement:

$$\frac{m^*}{m_e} = \frac{\gamma}{\gamma_0} \approx \frac{1000}{1} = 1000$$

This enormous enhancement arises from the Kondo effect: the $4f$ electrons of Ce hybridise with
conduction electrons, forming heavy quasiparticles. The Kondo temperature $T_K \sim 10$ K is the
characteristic energy scale.

Similarly, the Pauli susceptibility is enhanced: $\chi/\chi_0 = m^*/m_e = 1000$.

</details>

## 15. Advanced Semiconductor Physics

### 15.1 MOSFET Operation in Detail

In an n-channel MOSFET, the gate voltage $V_G$ controls the channel charge:

**Threshold voltage:**

$$V_T = V_{FB} + 2\phi_F + \frac{\sqrt{2\varepsilon_s q N_A(2\phi_F)}}{C_{ox}}$$

Where $V_{FB}$ is the flat-band voltage, $\phi_F = (k_BT/q)\ln(N_A/n_i)$ is the bulk Fermi
potential, and $C_{ox} = \varepsilon_{ox}/t_{ox}$ is the oxide capacitance.

**Drain current (long-channel, above threshold):**

$$I_D = \mu_n C_{ox}\frac{W}{L}\left[\left(V_G - V_T\right)V_D - \frac{V_D^2}{2}\right] \quad \text{(linear region)}$$

$$I_D = \frac{1}{2}\mu_n C_{ox}\frac{W}{L}(V_G - V_T)^2 \quad \text{(saturation,  V_D \geq V_G - V_T \text{)}}$$

**Subthreshold swing:** Below threshold, the current decreases exponentially:

$$I_D \propto e^{qV_G/(nk_BT)}$$

Where $n = 1 + C_d/C_{ox}$ and $C_d$ is the depletion capacitance. The minimum subthreshold swing at
room temperature is $S = nk_BT\ln 10/q \approx 60$ mV/decade.

### 15.2 Bipolar Junction Transistor (BJT)

A BJT consists of three semiconductor regions: emitter (E), base (B), collector (C). In active mode
(E-B forward biased, C-B reverse biased):

**Ebers--Moll model:**

$$I_E = I_{ES}\left(e^{V_{BE}/V_T} - 1\right) - \alpha_R I_{CS}\left(e^{V_{BC}/V_T} - 1\right)$$

$$I_C = \alpha_F I_{ES}\left(e^{V_{BE}/V_T} - 1\right) - I_{CS}\left(e^{V_{BC}/V_T} - 1\right)$$

Where $\alpha_F$ is the forward current gain ( $0.98$--$0.998$) and $V_T = k_BT/e$.

The common-emitter current gain $\beta = \alpha_F/(1 - \alpha_F)$. For $\alpha_F = 0.99$:
$\beta = 99$.

### 15.3 Excitons and Polaritons

**Wannier--Mott excitons** (in semiconductors with small $\varepsilon_r$ and small effective mass):

$$E_n = E_g - \frac{\mu e^4}{2(4\pi\varepsilon_0\varepsilon_r)^2\hbar^2 n^2} = E_g - \frac{R^*}{n^2}$$

Where $R^* = \frac{\mu}{m_e\varepsilon_r^2} \times 13.6$ eV is the effective Rydberg.

For GaAs ($m_e^* = 0.067m_e$, $m_h^* = 0.45m_e$, $\varepsilon_r = 12.9$):

$$\mu = \frac{0.067 \times 0.45}{0.067 + 0.45}m_e = 0.058m_e$$

$$R^* = \frac{0.058}{12.9^2} \times 13.6 = \frac{0.058}{166.4} \times 13.6 = 4.7\ \text{meV}$$

$$a_B^* = \frac{\varepsilon_r m_e}{\mu}a_0 = \frac{12.9}{0.058} \times 0.529\ \text{Å = 118\ \text{Å \approx 12\ \text{nm}}}$$

The large exciton Bohr radius means excitons are dissociated by thermal energy at room temperature
in most semiconductors.

**Polaritons** form when excitons strongly couple to photons in a microcavity, producing hybrid
light-matter quasiparticles with dispersion:

$$E_{\pm}(k) = \frac{1}{2}\left(E_{\text{cav}(k) + E_{\text{exc}(k)\right) \pm \frac{1}{2}\sqrt{\Omega_R^2 + \delta^2(k)}}}$$

Where $\Omega_R$ is the Rabi splitting and $\delta = E_{\text{cav} - E_{\text{exc}}}$ is the
detuning.

<details>
<summary>Worked Example 15.1: MOSFET Drain Current</summary>

An n-channel MOSFET has $\mu_n = 450$ cm$^2$/(V$\cdot$S), $C_{ox} = 34.5$ nF/cm$^2$ ($t_{ox} = 10$
nm SiO$_2$), $W = 10$ $\mu$M, $L = 1$ $\mu$M, $V_T = 0.7$ V.

For $V_G = 2$ V, $V_D = 0.5$ V (linear region since $V_D < V_G - V_T = 1.3$ V):

$$I_D = 450 \times 34.5 \times 10^{-9} \times \frac{10 \times 10^{-4}}{1 \times 10^{-4}}\left[1.3 \times 0.5 - \frac{0.25}{2}\right]$$

$$= 450 \times 3.45 \times 10^{-7} \times 10 \times [0.65 - 0.125]$$

$$= 1.55 \times 10^{-3} \times 0.525 = 8.14 \times 10^{-4}\ \text{A} = 0.814\ \text{mA}$$

At saturation ($V_D = 2$ V):

$$I_D = \frac{1}{2} \times 450 \times 34.5 \times 10^{-9} \times 10 \times (1.3)^2 = 1.30\ \text{mA}$$

</details>

## Common Pitfalls (Additional)

1. **GL theory is valid only near $T_c$**: The Ginzburg--Landau theory is a mean-field expansion
   that assumes the order parameter varies slowly in space and is small. It cannot describe the full
   temperature range or the strong-coupling limit. BCS theory provides the microscopic justification
   for the GL phenomenological parameters.

2. **Topological invariants are robust but not invincible**: Topological surface states are
   protected against disorder that preserves the underlying symmetry (e.g., time-reversal for $Z_2$
   TIs). Breaking that symmetry (e.g., magnetic doping of a TI) can gap out the surface states.
   Similarly, interactions can sometimes destroy topological phases.

3. **Hubbard $U$ is not the bare Coulomb energy**: The effective $U$ in the Hubbard model is
   significantly reduced from the bare Coulomb repulsion ($\sim 20$ eV for $3d$ electrons) by
   screening. Typical values are $U \sim 2$--$8$ eV for transition metal oxides.

4. **MOSFET scaling limits**: As transistors shrink below $\sim 10$ nm, short-channel effects
   (drain-induced barrier lowering, punch-through) dominate, and the subthreshold swing cannot be
   reduced below 60 mV/decade with conventional thermionic emission. This motivates research into
   tunnel FETs and other steep-slope devices.

5. **Effective mass can be negative or anisotropic**: The curvature $d^2\varepsilon/dk^2$ determines
   the sign of $m^*$. Near band maxima, $m^* < 0$ (holes). In multivalley semiconductors like
   silicon, the effective mass tensor has longitudinal ($m_l$) and transverse ($m_t$) components
   that differ significantly ($m_l/m_t \approx 5$ for Si).

## Problems (Additional)

<details>
<summary>Problem 19: GL Coherence Length and Penetration Depth</summary>

A Type II superconductor has $\xi_0 = 5$ nm and $\lambda_0 = 50$ nm at $T = 0$. At $T = 0.9\,T_c$:

(a) Calculate $\xi(T)$, $\lambda(T)$And $\kappa(T)$.

(b) Calculate $B_{c1}$ and $B_{c2}$ at $T = 0.9\,T_c$.

(c) How many flux quanta per unit area are present at $B = B_{c2}/2$?

**Solution:**

(a) At $T = 0.9\,T_c$: $1 - T/T_c = 0.1$.

$$\xi = \frac{\xi_0}{\sqrt{0.1}} = \frac{5}{0.316} = 15.8\ \text{nm}, \quad \lambda = \frac{50}{\sqrt{0.1}} = 158\ \text{nm}$$

$$\kappa = \lambda/\xi = 10 \quad \text{(independent of  T\text{)}}$$

(b)
$B_{c2} = \frac{\Phi_0}{2\pi\xi^2} = \frac{2.07 \times 10^{-15}}{2\pi \times (15.8 \times 10^{-9})^2} = \frac{2.07 \times 10^{-15}}{1.57 \times 10^{-15}} = 1.32\ \text{T}$

$$B_{c1} = \frac{\Phi_0}{4\pi\lambda^2}\ln\kappa = \frac{2.07 \times 10^{-15}}{4\pi \times (158 \times 10^{-9})^2}\ln 10 = \frac{2.07 \times 10^{-15}}{3.14 \times 10^{-13}} \times 2.303 = 1.52 \times 10^{-3}\ \text{T} = 1.52\ \text{mT}$$

(c) At $B = B_{c2}/2 = 0.66$ T: number of flux quanta per m$^2$ =
$B/\Phi_0 = 0.66/(2.07 \times 10^{-15}) = 3.19 \times 10^{14}\ \text{m}^{-2}$.

Average spacing between vortices:
$a \approx (2\Phi_0/(\sqrt{3}B))^{1/2} = (2 \times 2.07 \times 10^{-15}/(1.73 \times 0.66))^{1/2} = 60\ \text{nm}$.

</details>

<details>
<summary>Problem 20: Berry Phase in a Tight-Binding Model</summary>

Consider a spinless particle on a 1D lattice with Hamiltonian:

$$\hat{H} = \sum_n \left(t\,e^{i\phi}\,\hat{c}_n^\dagger\hat{c}_{n+1} + t\,e^{-i\phi}\,\hat{c}_{n+1}^\dagger\hat{c}_n\right)$$

(a) Show that the dispersion is $\varepsilon(k) = -2t\cos(k + \phi)$.

(b) Calculate the Berry phase for an electron traversing the Brillouin zone $-\pi/a \to \pi/a$.

(c) Show that the Berry phase is $\gamma = 2\pi\phi/(2\pi/a)$ and interpret physically.

**Solution:**

(a) Substituting $\psi_k(n) = e^{ikna}/\sqrt{N}$:

$$\varepsilon(k)\psi_k(n) = t\,e^{i\phi}\,e^{ika}\psi_k(n) + t\,e^{-i\phi}\,e^{-ika}\psi_k(n)$$

$$\varepsilon(k) = t\,e^{i(k+\phi)a} + t\,e^{-i(k+\phi)a} = -2t\cos(k + \phi)$$

(b) The Bloch function is $u_k(n) = e^{i\phi n}$ (up to normalisation). The Berry connection:

$$A(k) = \langle u_k | i\partial_k | u_k \rangle = i \cdot i\phi = -\phi$$

Wait, more carefully. In a continuum formulation:

$$A(k) = \langle u_k | \frac{\partial}{\partial k} | u_k \rangle = \frac{\partial}{\partial k}(\arg u_k) = \frac{\partial}{\partial k}(0) = 0$$

Since $u_k(x) = e^{ikx}$ has $\partial_k \ln u_k = ix$ and $\langle u_k|ix|u_k\rangle$ averages to
zero.

Actually, for this model the Berry phase arises from the $\phi$-dependent phase winding. Let us use
the proper formulation. The wavefunction $\psi_k(x) = e^{ikx}u_k(x)$ where $u_k$ has the periodicity
of the lattice. With the flux $\phi$The Berry connection picks up an extra term. The Berry phase for
one circuit of the BZ is:

$$\gamma = \oint A(k)\,dk = 2\pi\phi$$

(c) The Berry phase $\gamma = 2\pi\phi$ is directly proportional to the flux $\phi$ per unit cell.
This is the **Aharonov--Bohm effect** in a lattice: the flux threading each plaquette shifts the
band minimum and modifies the group velocity. For $\phi = \pi$The band is inverted
($\varepsilon = 2t\cos k$), which is the basis for the Rice--Mele model of topological insulators.

</details>

<details>
<summary>Problem 21: Semiconductor Device Analysis</summary>

A silicon p-n junction has $N_A = 10^{24}$ m$^{-3}$ and $N_D = 10^{22}$ m$^{-3}$ at $T = 300$ K.

(a) Calculate the built-in potential $V_0$.

(b) Calculate the depletion width $W$ and the depletion capacitance per unit area at zero bias.

(c) Under forward bias $V = 0.5$ V, calculate the current density. Assume $I_0/A = 10^{-12}$
A/m$^2$.

(d) What is the breakdown voltage if the critical field for Zener breakdown in Si is
$E_{\text{crit} \approx 3 \times 10^8}$ V/m?

**Solution:**

(a)
$V_0 = \frac{k_BT}{e}\ln\frac{N_A N_D}{n_i^2} = 0.02585 \times \ln\frac{10^{24} \times 10^{22}}{(1.5 \times 10^{16})^2}$

$$= 0.02585 \times \ln\frac{10^{46}}{2.25 \times 10^{32}} = 0.02585 \times \ln(4.44 \times 10^{13})$$

$$= 0.02585 \times 31.43 = 0.812\ \text{V}$$

(b) $W = \sqrt{\frac{2\varepsilon_s V_0}{e}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)}$

Since $N_D \ll N_A$The depletion region extends mainly into the n-side:

$$W \approx \sqrt{\frac{2 \times 11.7 \times 8.85 \times 10^{-12} \times 0.812}{1.6 \times 10^{-19} \times 10^{22}}} = \sqrt{\frac{1.68 \times 10^{-10}}{1.6 \times 10^{-3}}} = \sqrt{1.05 \times 10^{-7}} = 3.24 \times 10^{-4}\ \text{m} = 0.324\ \text{mm}$$

This is a wide depletion region because of the asymmetric doping.

$$C/A = \frac{\varepsilon_s}{W} = \frac{11.7 \times 8.85 \times 10^{-12}}{3.24 \times 10^{-4}} = 3.19 \times 10^{-7}\ \text{F}/m^2 = 319\ \text{nF}/m^2$$

(c)
$J = J_0(e^{eV/(k_BT)} - 1) = 10^{-12}(e^{0.5/0.02585} - 1) = 10^{-12}(e^{19.34} - 1) = 10^{-12} \times 2.48 \times 10^8 = 2.48 \times 10^{-4}\ \text{A}/m^2 = 0.248\ \text{mA}/m^2$

(d) The maximum field occurs at the metallurgical junction and for a one-sided junction is
approximately $E_{\max} = 2V_0/W$. For breakdown: $V_{BD} \approx E_{\text{crit} \cdot W_{BD}/2}$.

With $W_{BD} = \sqrt{2\varepsilon_s V_{BD}/(eN_D)}$ (one-sided):

$$V_{BD} = \frac{\varepsilon_s E_{\text{crit}^2}{2eN_D} = \frac{11.7 \times 8.85 \times 10^{-12} \times (3 \times 10^8)^2}{2 \times 1.6 \times 10^{-19} \times 10^{22}} = \frac{9.29 \times 10^{-1}}{3.2 \times 10^{-3}} = 290\ \text{V}}$$

</details>

## 16. Advanced Semiconductor Physics (Continued)

### 16.1 Quantum Hall Effect

When a 2D electron gas (2DEG) is placed in a strong perpendicular magnetic field at low temperature,
the Hall resistance shows quantised plateaux:

$$R_{xy} = \frac{h}{\nu e^2} = \frac{R_K}{\nu}$$

Where $\nu = 1, 2, 3, \ldots$ is an integer and $R_K = h/e^2 \approx 25812.8\,\Omega$ is the von
Klitzing constant.

**Integer Quantum Hall Effect (IQHE)** (von Klitzing, 1980):

- Occurs when the filling factor $\nu = n_{2D}h/(eB)$ is an integer
- At these plateaux, the longitudinal resistance $R_{xx} = 0$ (dissipationless transport)
- The quantisation is exact to better than 1 part in $10^{10}$Providing the resistance standard

**Fractional Quantum Hall Effect (FQHE)** (Tsui, Stormer, Gossard, 1982):

- Plateaux at $\nu = 1/3, 2/3, 2/5, 3/7, \ldots$
- Arises from electron--electron correlations (Laughlin wavefunction)
- Described by Chern--Simons topological field theory

**Composite fermions:** At $\nu = 1/2$The FQHE electrons bind two flux quanta to become "composite fermions" that see zero effective field. The FQHE of electrons maps to the IQHE of composite
fermions, elegantly explaining the observed sequence of fractions.

### 16.2 Mesoscopic Physics

Mesoscopic systems are intermediate in size between microscopic (atomic) and macroscopic (bulk). Key
length scales:

- **Phase coherence length** $L_\phi$: distance over which the electron maintains phase coherence (
  $1$--$10\,\mu$M at low $T$)
- **Mean free path** $\ell$: distance between elastic scattering events
- **Thermal length** $L_T = \hbar v_F/(k_BT)$

When the sample size $L < L_\phi$Quantum interference effects become observable:

- **Aharonov--Bohm oscillations:** Periodic oscillations in magnetoresistance as $B$ varies, with
  period $\Delta B = \Phi_0/A$ where $A$ is the area enclosed by the paths.
- **Weak localisation:** Quantum interference of backscattered paths enhances the probability of
  returning to the origin, increasing the resistance. This is destroyed by a magnetic field
  (negative magnetoresistance).
- **Universal conductance fluctuations:** Sample-specific, reproducible fluctuations in conductance
  of order $e^2/h$.

### 16.3 Thermoelectric Effects

**Seebeck effect:** A temperature gradient $\nabla T$ produces an electric field
$\mathbf{E} = S\nabla T$ where $S$ is the Seebeck coefficient.

**Peltier effect:** A current $I$ through a junction produces heat flow $\dot{Q} = \Pi I$ where
$\Pi = ST$ (Kelvin relation).

**Figure of merit:** $ZT = S^2\sigma T/\kappa$ where $\sigma$ is electrical conductivity and
$\kappa$ is thermal conductivity.

The **Mott formula** relates the Seebeck coefficient to the energy derivative of the conductivity:

$$S = -\frac{\pi^2 k_B^2 T}{3e}\frac{d\ln\sigma(\epsilon)}{d\epsilon}\bigg|_{\epsilon_F}$$

Best thermoelectric materials: Bi$_2$Te$_3$ ($ZT \approx 1$ at 300 K), PbTe ($ZT \approx 1.5$ at 700
K), SnSe ($ZT \approx 2.6$ at 923 K).

<details>
<summary>Worked Example 16.1: Quantum Hall Plateaux</summary>

A 2DEG in a GaAs/AlGaAs heterostructure has $n_{2D} = 3 \times 10^{15}$ m$^{-2}$.

(a) At $B = 10$ T:
$\nu = n_{2D}h/(eB) = 3 \times 10^{15} \times 6.626 \times 10^{-34}/(1.6 \times 10^{-19} \times 10) = 3 \times 10^{15} \times 4.14 \times 10^{-16} = 1.24$.

The filling factor $\nu \approx 1.24$ is close to $\nu = 1$So the $\nu = 1$ plateau is observed
with:

$$R_{xy} = \frac{h}{e^2} = 25812.8\,\Omega$$

(b) To observe the $\nu = 2$ plateau, we need $B = n_{2D}h/(2e) = 5$ T.

(c) The cyclotron energy at $B = 10$ T:

$$\hbar\omega_c = \hbar\frac{eB}{m^*} = \frac{1.055 \times 10^{-34} \times 1.6 \times 10^{-19} \times 10}{0.067 \times 9.11 \times 10^{-31}} = \frac{1.688 \times 10^{-33}}{6.10 \times 10^{-32}} = 0.0277\,\text{eV} = 27.7\,\text{meV}$$

For IQHE plateaux to be resolved: $k_BT \ll \hbar\omega_c$I.e., $T \ll 27.7/0.0862 \approx 321$ K.
Experiments are done at $T < 4$ K.

</details>

## Worked Examples

### Example 1: Bragg diffraction

**Problem.** X-rays of wavelength $0.154 \mathrm{ nm}$ are diffracted by a crystal with interplanar
spacing $d = 0.2 \mathrm{ nm}$. Find the first-order diffraction angle.

**Solution.**
$2d\sin\theta = n\lambda \implies \sin\theta = \frac{0.154}{2 \times 0.2} = 0.385 \implies \theta = 22.7°$.

$\blacksquare$

### Example 2: Band gap

**Problem.** A semiconductor has a band gap of $1.1 \mathrm{ eV}$. Find the minimum wavelength of
light that can excite an electron across the gap.

**Solution.**
${\lambda = \frac{hc}{E_g} = \frac{1240 \mathrm{ eV\cdot} nm}}{1.1 \mathrm{ eV}} = 1127 \mathrm{ nm}$
(infrared).

$\blacksquare$

## Common Pitfalls

- **Confusing reciprocal and real space.** The reciprocal lattice is the Fourier transform of the
  real-space lattice; its vectors have dimensions of inverse length. **Fix:**
  $\vec{b}_1 = 2\pi \frac{\vec{a}_2 \times \vec{a}_3}{\vec{a}_1 \cdot (\vec{a}_2 \times \vec{a}_3)}$.
- **Wrong effective mass interpretation.** The effective mass $m^*$ can be negative near the top of
  a band; it reflects the curvature of $E(k)$. **Fix:**
  $1/m^* = \frac{1}{\hbar^2}\frac{d^2E}{dk^2}$; negative curvature gives negative effective mass.
- **Confusing metals, semiconductors, and insulators.** Metals: partially filled band.
  Semiconductors: small band gap ($\sim 1 \mathrm{ eV}$). Insulators: large band gap
  ($> 4 \mathrm{ eV}$). **Fix:** Band gap determines electrical properties; temperature can excite
  carriers across semiconductor gaps.

## Summary

- Crystal structure: Bravais lattices, reciprocal lattice, Miller indices.
- Bragg's law: $2d\sin\theta = n\lambda$; determines crystal structure from diffraction patterns.
- Band theory: metals (partially filled bands), semiconductors (small gap), insulators (large gap).
- Effective mass: $m^* = \hbar^2/(d^2E/dk^2)$; describes carrier response to external fields.

## Cross-References

| Topic                           | Site        | Link                                                                                       |
| ------------------------------- | ----------- | ------------------------------------------------------------------------------------------ |
| Solid State Physics (Overview)  | WyattsNotes | [View](/docs/university/physics/solid-state-physics)                                       |
| Quantum Mechanics               | WyattsNotes | [View](/docs/university/physics/quantum-mechanics)                                         |
| Thermal Physics                 | WyattsNotes | [View](/docs/university/physics/thermal-physics)                                           |
| Solid State Physics — MIT 6.720 | MIT OCW     | [View](https://ocw.mit.edu/courses/6-720j-integrated-microelectronic-devices-spring-2007/) |
