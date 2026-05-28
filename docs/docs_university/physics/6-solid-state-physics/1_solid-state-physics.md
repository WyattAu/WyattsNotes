---
title: Solid State Physics
description:
  'University-level notes on Solid State Physics: 1. Crystal Structures; 1.1 Lattices and Basis; 1.2
  Bravais Lattices; 1.3 Common Crystal Structures.'
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

The lattice is specified by **primitive lattice vectors** $\mathbf◆LB◆a◆RB◆_1, \mathbf◆LB◆a◆RB◆_2, \mathbf◆LB◆a◆RB◆_3$
Such that every lattice point is at:

$$\mathbf◆LB◆R◆RB◆ = n_1\mathbf◆LB◆a◆RB◆_1 + n_2\mathbf◆LB◆a◆RB◆_2 + n_3\mathbf◆LB◆a◆RB◆_3, \quad n_i \in \mathbb◆LB◆Z◆RB◆$$

### 1.2 Bravais Lattices

There are **14 Bravais lattices** in three dimensions, classified into 7 crystal systems:

| System       | Lattices     | Constraints                                                   |
| ------------ | ------------ | ------------------------------------------------------------- |
| Cubic        | SC, BCC, FCC | $a = b = c$, $\alpha = \beta = \gamma = 90^\circ$               |
| Tetragonal   | P, I         | $a = b \neq c$, $\alpha = \beta = \gamma = 90^\circ$            |
| Orthorhombic | P, C, I, F   | $a \neq b \neq c$, $\alpha = \beta = \gamma = 90^\circ$         |
| Monoclinic   | P, C         | $a \neq b \neq c$, $\alpha = \gamma = 90^\circ \neq \beta$      |
| Triclinic    | P            | $a \neq b \neq c$, $\alpha \neq \beta \neq \gamma$              |
| Hexagonal    | P            | $a = b \neq c$$\alpha = \beta = 90^\circ$$\gamma = 120^\circ$ |
| Trigonal     | R            | $a = b = c$$\alpha = \beta = \gamma \neq 90^\circ$            |

**Notation:** P = primitive, I = body-centred, F = face-centred, C = base-centred, R = rhombohedral.

### 1.3 Common Crystal Structures

**Simple Cubic (SC):** One atom per unit cell. Coordination number $= 6$. Packing fraction
$= \pi/6 \approx 0.52$.

**Body-Centred Cubic (BCC):** Atoms at corners and body centre. Two atoms per cell. Coordination
Number $= 8$. Packing fraction $= \sqrt◆LB◆3◆RB◆\pi/8 \approx 0.68$. Examples: Fe ($\alpha$-iron), W, Cr.

**Face-Centred Cubic (FCC):** Atoms at corners and face centres. Four atoms per cell. Coordination
Number $= 12$. Packing fraction $= \sqrt◆LB◆2◆RB◆\pi/6 \approx 0.74$. Examples: Cu, Al, Au, Ag.

**Hexagonal Close-Packed (HCP):** Two atoms per primitive cell. Coordination number $= 12$. Same
Packing fraction as FCC. Examples: Zn, Mg, Ti.

**Diamond structure:** Two interpenetrating FCC lattices offset by $(a/4, a/4, a/4)$. Eight atoms
per Conventional cell. Examples: C (diamond), Si, Ge.

### 1.4 Miller Indices

A plane with Miller indices $(hkl)$ intersects the crystallographic axes at $a/h$$b/k$$c/l$.

**Procedure:** (1) Find intercepts with axes in units of lattice constants. (2) Take reciprocals.
(3) Reduce to smallest integers.

Negative indices are written with a bar: $(\bar◆LB◆h◆RB◆kl)$. Families of equivalent planes are denoted
$\{hkl\}$.

Directions are written as $[hkl]$; families of equivalent directions as $\langle hkl \rangle$.

### 1.5 Wigner-Seitz Cell

The **Wigner-Seitz cell** is the primitive cell constructed by drawing perpendicular bisector planes
Between a lattice point and all its neighbours. It is the region of space closer to the given
lattice Point than to any other.

### 1.6 Packing Fractions and Density

The **packing fraction** (also called atomic packing factor) is the fraction of volume in a unit
cell Occupied by atoms:

$$\mathrm◆LB◆APF◆RB◆ = \frac◆LB◆N \cdot V_◆LB◆\mathrm◆LB◆atom◆RB◆◆RB◆◆LB◆V_◆LB◆\mathrm◆LB◆cell◆RB◆◆RB◆ = \frac◆LB◆N \cdot \frac◆LB◆4◆RB◆◆LB◆3◆RB◆\pi R^3◆RB◆◆LB◆V_◆LB◆\mathrm◆LB◆cell◆RB◆◆RB◆$$

Where $N$ is the number of atoms per cell, $R$ is the atomic radius, and $V_◆LB◆\mathrm◆LB◆cell◆RB◆$ is the
Cell volume.

The **theoretical density** of a crystal:

$$\rho = \frac◆LB◆nM◆RB◆◆LB◆N_A V_◆LB◆\mathrm◆LB◆cell◆RB◆◆RB◆$$

Where $n$ is the number of formula units per cell, $M$ is the molar mass, $N_A$ is Avogadro's
Number, and $V_◆LB◆\mathrm◆LB◆cell◆RB◆$ is the cell volume.

<details>
<summary>Worked Example: FCC Packing Fraction</summary>

In FCC, nearest neighbours touch along the face diagonal. For lattice constant $a$ and atomic radius
$R$:

$$4R = \sqrt◆LB◆2◆RB◆\,a \implies R = \frac◆LB◆a\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆4◆RB◆$$

Four atoms per conventional cell:

$$\mathrm◆LB◆APF◆RB◆ = \frac◆LB◆4 \times \frac◆LB◆4◆RB◆◆LB◆3◆RB◆\pi R^3◆RB◆◆LB◆a^3◆RB◆ = \frac◆LB◆4 \times \frac◆LB◆4◆RB◆◆LB◆3◆RB◆\pi \left(\frac◆LB◆a\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆4◆RB◆\right)^3◆RB◆◆LB◆a^3◆RB◆ = \frac◆LB◆4 \times \frac◆LB◆4◆RB◆◆LB◆3◆RB◆\pi \cdot \frac◆LB◆2\sqrt◆LB◆2◆RB◆\,a^3◆RB◆◆LB◆64◆RB◆◆RB◆◆LB◆a^3◆RB◆ = \frac◆LB◆\pi\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆6◆RB◆ \approx 0.7405$$

</details>

<details>
<summary>Worked Example: Density of BCC Iron</summary>

$\alpha$-iron is BCC with lattice constant $a = 0.2866$ nm, molar mass $M = 55.845$ g/mol, and 2
atoms Per conventional cell.

$$\rho = \frac◆LB◆2 \times 55.845◆RB◆◆LB◆6.022 \times 10^◆LB◆23◆RB◆ \times (2.866 \times 10^◆LB◆-8◆RB◆)^3◆RB◆$$

$$(2.866 \times 10^◆LB◆-8◆RB◆)^3 = 23.55 \times 10^◆LB◆-24◆RB◆\ \mathrm◆LB◆cm◆RB◆^3 = 2.355 \times 10^◆LB◆-23◆RB◆\ \mathrm◆LB◆cm◆RB◆^3$$

$$\rho = \frac◆LB◆111.69◆RB◆◆LB◆6.022 \times 10^◆LB◆23◆RB◆ \times 2.355 \times 10^◆LB◆-23◆RB◆◆RB◆ = \frac◆LB◆111.69◆RB◆◆LB◆14.18◆RB◆ = 7.88\ \mathrm◆LB◆g◆RB◆/cm^3$$

This matches the accepted experimental density of iron ($7.87\ \mathrm◆LB◆g◆RB◆/cm^3$).

</details>

<details>
<summary>Worked Example: HCP Packing Fraction</summary>

For HCP with ideal $c/a = \sqrt◆LB◆8/3◆RB◆$Lattice constant $a$And atomic radius $R = a/2$:

Two atoms per primitive cell. The cell volume is
$V_◆LB◆\mathrm◆LB◆cell◆RB◆ = \frac◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆◆LB◆2◆RB◆a^2 \cdot c = \frac◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆◆LB◆2◆RB◆a^2 \cdot a\sqrt◆LB◆8/3◆RB◆ = \sqrt◆LB◆2◆RB◆\,a^3$.

$$\mathrm◆LB◆APF◆RB◆ = \frac◆LB◆2 \times \frac◆LB◆4◆RB◆◆LB◆3◆RB◆\pi (a/2)^3◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆\,a^3◆RB◆ = \frac◆LB◆\frac◆LB◆\pi a^3◆RB◆◆LB◆3◆RB◆◆RB◆◆LB◆\sqrt◆LB◆2◆RB◆\,a^3◆RB◆ = \frac◆LB◆\pi◆RB◆◆LB◆3\sqrt◆LB◆2◆RB◆◆RB◆ = \frac◆LB◆\pi\sqrt◆LB◆2◆RB◆◆RB◆◆LB◆6◆RB◆ \approx 0.7405$$

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
$F = n_v E_v - k_B T \ln\binom◆LB◆N◆RB◆◆LB◆n_v◆RB◆$:

$$n_v = N\,e^◆LB◆-E_v/(k_B T)◆RB◆$$

Where $E_v$ is the vacancy formation energy ( $\sim 1$ eV).

**Line defects (1D):**

- **Edge dislocation:** An extra half-plane of atoms inserted into the lattice. The Burgers vector
  $\mathbf◆LB◆b◆RB◆$ is perpendicular to the dislocation line.
- **Screw dislocation:** The lattice is helically distorted. $\mathbf◆LB◆b◆RB◆$ is parallel to the
  dislocation line.
- **Mixed dislocation:** Combines edge and screw character.

Dislocations enable plastic deformation at stresses far below the theoretical shear strength. The
Peach-Koehler force per unit length on a dislocation:

$$\mathbf◆LB◆F◆RB◆ = (\boldsymbol◆LB◆\sigma◆RB◆\cdot\mathbf◆LB◆b◆RB◆) \times \hat◆LB◆\mathbf◆LB◆t◆RB◆◆RB◆$$

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
4 atoms per conventional Cell. Do not confuse the basis size with the coordination number. :::

<details>
<summary>Worked Example: Interplanar Spacing for SC, BCC, FCC</summary>

For a cubic crystal with lattice constant $a$The interplanar spacing for $(hkl)$ is:

$$d_◆LB◆hkl◆RB◆ = \frac◆LB◆a◆RB◆◆LB◆\sqrt◆LB◆h^2 + k^2 + l^2◆RB◆◆RB◆$$

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

$$\mathbf◆LB◆b◆RB◆_1 = 2\pi\frac◆LB◆\mathbf◆LB◆a◆RB◆_2 \times \mathbf◆LB◆a◆RB◆_3◆RB◆◆LB◆\mathbf◆LB◆a◆RB◆_1 \cdot (\mathbf◆LB◆a◆RB◆_2 \times \mathbf◆LB◆a◆RB◆_3)◆RB◆$$

$$\mathbf◆LB◆b◆RB◆_2 = 2\pi\frac◆LB◆\mathbf◆LB◆a◆RB◆_3 \times \mathbf◆LB◆a◆RB◆_1◆RB◆◆LB◆\mathbf◆LB◆a◆RB◆_1 \cdot (\mathbf◆LB◆a◆RB◆_2 \times \mathbf◆LB◆a◆RB◆_3)◆RB◆$$

$$\mathbf◆LB◆b◆RB◆_3 = 2\pi\frac◆LB◆\mathbf◆LB◆a◆RB◆_1 \times \mathbf◆LB◆a◆RB◆_2◆RB◆◆LB◆\mathbf◆LB◆a◆RB◆_1 \cdot (\mathbf◆LB◆a◆RB◆_2 \times \mathbf◆LB◆a◆RB◆_3)◆RB◆$$

Every reciprocal lattice point is at:

$$\mathbf◆LB◆G◆RB◆ = m_1\mathbf◆LB◆b◆RB◆_1 + m_2\mathbf◆LB◆b◆RB◆_2 + m_3\mathbf◆LB◆b◆RB◆_3, \quad m_i \in \mathbb◆LB◆Z◆RB◆$$

**Key property:** $\mathbf◆LB◆G◆RB◆ \cdot \mathbf◆LB◆R◆RB◆ = 2\pi \times \mathrm◆LB◆integer◆RB◆$So
$e^◆LB◆i\mathbf◆LB◆G◆RB◆\cdot\mathbf◆LB◆R◆RB◆◆RB◆ = 1$.

**Proof of key property.**

$$\mathbf◆LB◆G◆RB◆ \cdot \mathbf◆LB◆R◆RB◆ = (m_1\mathbf◆LB◆b◆RB◆_1 + m_2\mathbf◆LB◆b◆RB◆_2 + m_3\mathbf◆LB◆b◆RB◆_3) \cdot (n_1\mathbf◆LB◆a◆RB◆_1 + n_2\mathbf◆LB◆a◆RB◆_2 + n_3\mathbf◆LB◆a◆RB◆_3)$$

By the orthogonality relation $\mathbf◆LB◆b◆RB◆_i \cdot \mathbf◆LB◆a◆RB◆_j = 2\pi\delta_◆LB◆ij◆RB◆$:

$$\mathbf◆LB◆G◆RB◆ \cdot \mathbf◆LB◆R◆RB◆ = 2\pi(m_1 n_1 + m_2 n_2 + m_3 n_3) = 2\pi \times \mathrm◆LB◆integer◆RB◆$$

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

$V_◆LB◆\mathrm◆LB◆BZ◆RB◆ = (2\pi)^3 / V_◆LB◆\mathrm◆LB◆cell◆RB◆$.

### 2.3 Reciprocal Lattice and Planes

**Theorem 2.1.** The reciprocal lattice vector
$\mathbf◆LB◆G◆RB◆_◆LB◆hkl◆RB◆ = h\mathbf◆LB◆b◆RB◆_1 + k\mathbf◆LB◆b◆RB◆_2 + l\mathbf◆LB◆b◆RB◆_3$ Is perpendicular to the
real-space planes $(hkl)$And $\lvert\mathbf◆LB◆G◆RB◆_◆LB◆hkl◆RB◆\rvert = 2\pi/d_◆LB◆hkl◆RB◆$ where $d_◆LB◆hkl◆RB◆$ is the
interplanar spacing.

**Proof.** The plane $(hkl)$ has intercepts $\mathbf◆LB◆a◆RB◆_1/h$$\mathbf◆LB◆a◆RB◆_2/k$$\mathbf◆LB◆a◆RB◆_3/l$. Two
vectors in this plane are $\mathbf◆LB◆a◆RB◆_2/k - \mathbf◆LB◆a◆RB◆_1/h$ and $\mathbf◆LB◆a◆RB◆_3/l - \mathbf◆LB◆a◆RB◆_1/h$.

$\mathbf◆LB◆G◆RB◆_◆LB◆hkl◆RB◆ \cdot (\mathbf◆LB◆a◆RB◆_2/k - \mathbf◆LB◆a◆RB◆_1/h) = (2\pi/k)k - (2\pi/h)h = 0$.

Similarly $\mathbf◆LB◆G◆RB◆_◆LB◆hkl◆RB◆ \cdot (\mathbf◆LB◆a◆RB◆_3/l - \mathbf◆LB◆a◆RB◆_1/h) = 0$. Hence $\mathbf◆LB◆G◆RB◆_◆LB◆hkl◆RB◆$
is Perpendicular to the plane.

For the spacing: the plane through the origin has equation $\mathbf◆LB◆G◆RB◆_◆LB◆hkl◆RB◆ \cdot \mathbf◆LB◆r◆RB◆ = 0$.
The next parallel plane is $\mathbf◆LB◆G◆RB◆_◆LB◆hkl◆RB◆ \cdot \mathbf◆LB◆r◆RB◆ = 2\pi$ (since
$e^◆LB◆i\mathbf◆LB◆G◆RB◆\cdot\mathbf◆LB◆r◆RB◆◆RB◆ = 1$ On all lattice planes). The distance from the origin to this
plane is $d_◆LB◆hkl◆RB◆ = 2\pi/\lvert\mathbf◆LB◆G◆RB◆_◆LB◆hkl◆RB◆\rvert$. $\blacksquare$

### 2.4 Brillouin Zone Construction

<details>
<summary>Worked Example: First Brillouin Zone of the 2D Square Lattice</summary>

For a 2D square lattice with primitive vectors $\mathbf◆LB◆a◆RB◆_1 = a\hat◆LB◆x◆RB◆$$\mathbf◆LB◆a◆RB◆_2 = a\hat◆LB◆y◆RB◆$:

$$\mathbf◆LB◆b◆RB◆_1 = \frac◆LB◆2\pi◆RB◆◆LB◆a◆RB◆\hat◆LB◆x◆RB◆, \quad \mathbf◆LB◆b◆RB◆_2 = \frac◆LB◆2\pi◆RB◆◆LB◆a◆RB◆\hat◆LB◆y◆RB◆$$

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

For a 2D hexagonal lattice with $\mathbf◆LB◆a◆RB◆_1 = a\hat◆LB◆x◆RB◆$
$\mathbf◆LB◆a◆RB◆_2 = a(\hat◆LB◆x◆RB◆/2 + \sqrt◆LB◆3◆RB◆\hat◆LB◆y◆RB◆/2)$:

$$\mathbf◆LB◆b◆RB◆_1 = \frac◆LB◆2\pi◆RB◆◆LB◆a◆RB◆\left(\hat◆LB◆x◆RB◆ - \frac◆LB◆\hat◆LB◆y◆RB◆◆RB◆◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆\right), \quad \mathbf◆LB◆b◆RB◆_2 = \frac◆LB◆4\pi◆RB◆◆LB◆a\sqrt◆LB◆3◆RB◆◆RB◆\hat◆LB◆y◆RB◆$$

The six nearest reciprocal lattice points form a regular hexagon. The perpendicular bisectors of The
six nearest-neighbour vectors form a regular hexagon centred at the origin --- the first Brillouin
zone.

High-symmetry points: $\Gamma$ (centre), $M$ (midpoint of edge), $K$ (corner).

The area of the BZ equals $(2\pi)^2/A_◆LB◆\mathrm◆LB◆cell◆RB◆$ where $A_◆LB◆\mathrm◆LB◆cell◆RB◆ = a^2\sqrt◆LB◆3◆RB◆/2$.

</details>

### 2.5 Ewald Sphere Construction

The **Ewald sphere** provides a geometric criterion for when diffraction occurs. Given an incident
Wave vector $\mathbf◆LB◆k◆RB◆$ (with $\lvert\mathbf◆LB◆k◆RB◆\rvert = 2\pi/\lambda$) and the reciprocal lattice:

1. Draw $\mathbf◆LB◆k◆RB◆$ terminating at the origin of reciprocal space.
2. Construct a sphere of radius $k = 2\pi/\lambda$ centred at the start of $\mathbf◆LB◆k◆RB◆$.
3. Diffraction occurs for every reciprocal lattice point $\mathbf◆LB◆G◆RB◆$ that lies on the sphere, since
   then $\mathbf◆LB◆k◆RB◆' = \mathbf◆LB◆k◆RB◆ + \mathbf◆LB◆G◆RB◆$ also has $\lvert\mathbf◆LB◆k◆RB◆'\rvert = k$ (elastic
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
$4\pi/a = 3.10 \times 10^◆LB◆10◆RB◆$ m$^◆LB◆-1◆RB◆$.

Using Cu $K_\alpha$ radiation ($\lambda = 0.15406$ nm), the Ewald sphere radius is
$k = 2\pi/\lambda = 4.08 \times 10^◆LB◆10◆RB◆$ m$^◆LB◆-1◆RB◆$.

The shortest reciprocal lattice vector has magnitude
$G_◆LB◆\min◆RB◆ = 2\pi/(a\sqrt◆LB◆2◆RB◆) = 1.10 \times 10^◆LB◆10◆RB◆$ m$^◆LB◆-1◆RB◆$ (the (111) reflection of FCC).

Since $k = 4.08 \times 10^◆LB◆10◆RB◆$ m$^◆LB◆-1◆RB◆ \gt G_◆LB◆\min◆RB◆$The (111) point can lie on the Ewald sphere
When the crystal is appropriately oriented. The maximum accessible $G$ is
$G_◆LB◆\max◆RB◆ = 2k = 8.16 \times 10^◆LB◆10◆RB◆$ M$^◆LB◆-1◆RB◆$Which allows access to many reflections.

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
$S_◆LB◆\mathrm◆LB◆FCC◆RB◆ = f[1 + e^◆LB◆-i\pi(h+k)◆RB◆ + e^◆LB◆-i\pi(h+l)◆RB◆ + e^◆LB◆-i\pi(k+l)◆RB◆]$ Which is zero unless
$h,k,l$ are all even or all odd.

For allowed FCC reflections, the basis factor is:

$$F_◆LB◆\mathrm◆LB◆basis◆RB◆ = f_◆LB◆\mathrm◆LB◆Na◆RB◆ + f_◆LB◆\mathrm◆LB◆Cl◆RB◆\, e^◆LB◆-i\pi h◆RB◆$$

When $h,k,l$ are all even: $F = f_◆LB◆\mathrm◆LB◆Na◆RB◆ + f_◆LB◆\mathrm◆LB◆Cl◆RB◆$. When $h,k,l$ are all odd:
$F = f_◆LB◆\mathrm◆LB◆Na◆RB◆ - f_◆LB◆\mathrm◆LB◆Cl◆RB◆$.

The intensity $I \propto \lvert S\rvert^2$:

- All even: $I \propto (f_◆LB◆\mathrm◆LB◆Na◆RB◆ + f_◆LB◆\mathrm◆LB◆Cl◆RB◆)^2$ (strong)
- All odd: $I \propto (f_◆LB◆\mathrm◆LB◆Na◆RB◆ - f_◆LB◆\mathrm◆LB◆Cl◆RB◆)^2$ (weak, since
  $f_◆LB◆\mathrm◆LB◆Na◆RB◆ \approx f_◆LB◆\mathrm◆LB◆Cl◆RB◆$ at high scattering angles where form factors converge)

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

$$\Delta\mathbf◆LB◆k◆RB◆ = \mathbf◆LB◆k◆RB◆' - \mathbf◆LB◆k◆RB◆ = \mathbf◆LB◆G◆RB◆$$

This is equivalent to Bragg's law. Since $\lvert\mathbf◆LB◆k◆RB◆\rvert = \lvert\mathbf◆LB◆k◆RB◆'\rvert$ (elastic
Scattering), the Laue condition requires $\mathbf◆LB◆k◆RB◆$ to terminate on the **Ewald sphere** (a sphere
Of radius $k$ centred at the tip of $\mathbf◆LB◆k◆RB◆$).

**Equivalence with Bragg's law.** From
$\lvert\mathbf◆LB◆k◆RB◆\rvert = \lvert\mathbf◆LB◆k◆RB◆ + \mathbf◆LB◆G◆RB◆\rvert$:

$$k^2 = \lvert\mathbf◆LB◆k◆RB◆ + \mathbf◆LB◆G◆RB◆\rvert^2 = k^2 + G^2 + 2\mathbf◆LB◆k◆RB◆\cdot\mathbf◆LB◆G◆RB◆$$

$$\implies \mathbf◆LB◆k◆RB◆\cdot\mathbf◆LB◆G◆RB◆ = -\frac◆LB◆G^2◆RB◆◆LB◆2◆RB◆$$

Since $G = 2\pi/d$ and $\lvert\mathbf◆LB◆k◆RB◆\cdot\hat◆LB◆\mathbf◆LB◆G◆RB◆◆RB◆\rvert = k\sin\theta$:

$$k\sin\theta = \frac◆LB◆G◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆\pi◆RB◆◆LB◆d◆RB◆$$

Using $k = 2\pi/\lambda$: $2d\sin\theta = \lambda$ (first order). $\blacksquare$

### 3.3 Structure Factor

The **structure factor** determines the intensity of diffraction from planes $(hkl)$:

$$S_◆LB◆hkl◆RB◆ = \sum_j f_j e^◆LB◆-i\mathbf◆LB◆G◆RB◆_◆LB◆hkl◆RB◆\cdot\mathbf◆LB◆d◆RB◆_j◆RB◆$$

Where $f_j$ is the atomic form factor of atom $j$ at position $\mathbf◆LB◆d◆RB◆_j$ in the basis.

**Example: BCC.** Two atoms at $(0,0,0)$ and $(a/2, a/2, a/2)$ in the conventional cell:

$$S_◆LB◆hkl◆RB◆ = f\left[1 + e^◆LB◆-i\pi(h+k+l)◆RB◆\right] = f\left[1 + (-1)^◆LB◆h+k+l◆RB◆\right]$$

Reflections are present only when $h + k + l$ is even. When $h + k + l$ is odd, $S_◆LB◆hkl◆RB◆ = 0$
(systematic absence).

**Example: FCC.** Atoms at $(0,0,0)$$(a/2,a/2,0)$$(a/2,0,a/2)$$(0,a/2,a/2)$:

$$S_◆LB◆hkl◆RB◆ = f\left[1 + e^◆LB◆-i\pi(h+k)◆RB◆ + e^◆LB◆-i\pi(h+l)◆RB◆ + e^◆LB◆-i\pi(k+l)◆RB◆\right]$$

Reflections present only when $h, k, l$ are all even or all odd.

### 3.4 Worked Examples: Structure Factor Calculations

<details>
<summary>Worked Example: Diamond Cubic Structure Factor</summary>

Diamond has an FCC lattice with a two-atom basis at $(0,0,0)$ and $(a/4, a/4, a/4)$. The FCC
Sublattice factor $S_◆LB◆\mathrm◆LB◆FCC◆RB◆$ is nonzero only when $h,k,l$ are all even or all odd.

The full structure factor is:

$$S_◆LB◆hkl◆RB◆ = S_◆LB◆\mathrm◆LB◆FCC◆RB◆ \cdot \left[1 + e^◆LB◆-i\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆(h+k+l)◆RB◆\right]$$

For allowed FCC reflections:

- $h + k + l = 4n$: $S = 4f(1 + 1) = 8f$. Intensity $\propto 64f^2$.
- $h + k + l = 4n + 2$: $S = 4f(1 + e^◆LB◆-i\pi◆RB◆) = 4f(1 - 1) = 0$. **Systematic absence.**
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

$$S_◆LB◆hkl◆RB◆ = f\left[1 + e^◆LB◆2\pi i(h/3 + k/3 + l/2)◆RB◆\right] = f\left[1 + e^◆LB◆2\pi i(2h+k)/3◆RB◆\,e^◆LB◆i\pi l◆RB◆\right]$$

For $l$ even: $e^◆LB◆i\pi l◆RB◆ = 1$So $S = f[1 + e^◆LB◆2\pi i(2h+k)/3◆RB◆]$. For $l$ odd: $e^◆LB◆i\pi l◆RB◆ = -1$So
$S = f[1 - e^◆LB◆2\pi i(2h+k)/3◆RB◆]$.

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
As a function of $2\theta$. Each peak position gives $d_◆LB◆hkl◆RB◆$ via Bragg's law, and the peak
Intensity is proportional to $\lvert S_◆LB◆hkl◆RB◆\rvert^2$ times multiplicity and geometric factors.

**Scherrer equation.** For crystallites of size $L$The diffraction peaks are broadened. The Full
width at half maximum (FWHM) $\beta$ (in radians) relates to the crystallite size by:

$$L = \frac◆LB◆K\lambda◆RB◆◆LB◆\beta\cos\theta◆RB◆$$

Where $K \approx 0.89$ is the Scherrer constant. This provides a straightforward method for
Estimating nanocrystallite sizes from powder diffraction data.

:::caution Common Pitfall Do not confuse the Laue condition $\Delta\mathbf◆LB◆k◆RB◆ = \mathbf◆LB◆G◆RB◆$ with
Bragg's law $2d\sin\theta = n\lambda$. These are equivalent formulations of the same physics. The
Laue condition is a vector equation in Reciprocal space, while Bragg's law is a scalar equation in
real space. Converting between them Requires careful geometry --- remember that $\theta$ in Bragg's
law is measured from the _plane_, Not from the normal. :::

## 4. Lattice Vibrations and Phonons

### 4.1 The One-Dimensional Monatomic Chain

Consider $N$ atoms of mass $m$ connected by springs of constant $K$ with equilibrium spacing $a$.

The equation of motion for the $n$-th atom:

$$m\ddot◆LB◆u◆RB◆_n = K(u_◆LB◆n+1◆RB◆ - u_n) + K(u_◆LB◆n-1◆RB◆ - u_n) = K(u_◆LB◆n+1◆RB◆ + u_◆LB◆n-1◆RB◆ - 2u_n)$$

**Derivation of the dispersion relation.** Assuming solutions $u_n = u_0\, e^◆LB◆i(qna - \omega t)◆RB◆$:

$$-m\omega^2 = K(e^◆LB◆iqa◆RB◆ + e^◆LB◆-iqa◆RB◆ - 2) = 2K(\cos qa - 1) = -4K\sin^2\left(\frac◆LB◆qa◆RB◆◆LB◆2◆RB◆\right)$$

$$\omega(q) = 2\sqrt◆LB◆\frac◆LB◆K◆RB◆◆LB◆m◆RB◆◆RB◆\left|\sin\left(\frac◆LB◆qa◆RB◆◆LB◆2◆RB◆\right)\right|$$

$\blacksquare$

**Key features:**

- The Brillouin zone is $-\pi/a \leq q \leq \pi/a$.
- Linear for small $q$: $\omega \approx v_s \lvert q\rvert$ where $v_s = a\sqrt◆LB◆K/m◆RB◆$ is the speed
  of sound.
- Group velocity: $v_g = d\omega/dq = a\sqrt◆LB◆K/m◆RB◆\cos(qa/2)$.
- Maximum frequency: $\omega_◆LB◆\mathrm◆LB◆max◆RB◆ = 2\sqrt◆LB◆K/m◆RB◆$.
- Phase velocity: $v_p = \omega/q$Which exceeds $v_s$ and diverges as $q \to 0$.

### 4.2 The Diatomic Chain

For a chain with alternating masses $m_1$ and $m_2$ (e.g., NaCl):

$$\omega^2 = K\left(\frac◆LB◆1◆RB◆◆LB◆m_1◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆m_2◆RB◆\right) \pm K\sqrt◆LB◆\left(\frac◆LB◆1◆RB◆◆LB◆m_1◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆m_2◆RB◆\right)^2 - \frac◆LB◆4\sin^2(qa/2)◆RB◆◆LB◆m_1 m_2◆RB◆◆RB◆$$

This gives two branches:

- **Acoustic branch** ($-$ sign): $\omega \to 0$ as $q \to 0$. Atoms in the unit cell move in phase.
- **Optical branch** ($+$ sign): $\omega \neq 0$ at $q = 0$. Atoms in the unit cell move out of
  phase. Can interact with light (hence the name).

At $q = 0$The optical frequency is $\omega_0 = \sqrt◆LB◆2K(1/m_1 + 1/m_2)◆RB◆$ and the acoustic branch Has
$\omega = v_s q$ with $v_s = a\sqrt◆LB◆2K/(m_1 + m_2)◆RB◆$.

### 4.3 Quantisation: Phonons

Lattice vibrations are quantised. Each normal mode of wave vector $\mathbf◆LB◆q◆RB◆$ and branch $s$ has
Energy:

$$E_◆LB◆\mathbf◆LB◆q◆RB◆s◆RB◆ = \left(n_◆LB◆\mathbf◆LB◆q◆RB◆s◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)\hbar\omega_◆LB◆\mathbf◆LB◆q◆RB◆s◆RB◆$$

Where $n_◆LB◆\mathbf◆LB◆q◆RB◆s◆RB◆$ is the phonon occupation number. Phonons are bosons obeying Bose-Einstein
Statistics:

$$\langle n_◆LB◆\mathbf◆LB◆q◆RB◆s◆RB◆ \rangle = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆\beta\hbar\omega_◆LB◆\mathbf◆LB◆q◆RB◆s◆RB◆◆RB◆ - 1◆RB◆$$

In three dimensions, there are 3 acoustic branches (1 longitudinal, 2 transverse) and $3p - 3$
Optical branches for a crystal with $p$ atoms per primitive cell.

### 4.4 Debye Model

The Debye model approximates the phonon spectrum as linear ($\omega = v_s q$) up to a cutoff
frequency $\omega_D$ (the Debye frequency):

$$\omega_D = v_s\left(\frac◆LB◆6\pi^2 N◆RB◆◆LB◆V◆RB◆\right)^◆LB◆1/3◆RB◆$$

The **Debye temperature:** $\Theta_D = \hbar\omega_D / k_B$.

**Derivation of the phonon density of states.** The number of modes with wave vector
$\lvert\mathbf◆LB◆q◆RB◆\rvert \leq q$ In 3D is
$N(q) = 3 \cdot \frac◆LB◆V◆RB◆◆LB◆(2\pi)^3◆RB◆ \cdot \frac◆LB◆4\pi q^3◆RB◆◆LB◆3◆RB◆$ (factor of 3 for polarisations).
Differentiating: $g(q)\,dq = dN/dq\,dq = (Vq^2/\pi^2)\,dq$. Converting to frequency with
$\omega = v_s q$:

$$g(\omega)\,d\omega = \frac◆LB◆Vq^2◆RB◆◆LB◆\pi^2◆RB◆\frac◆LB◆dq◆RB◆◆LB◆d\omega◆RB◆\,d\omega = \frac◆LB◆V\omega^2◆RB◆◆LB◆\pi^2 v_s^3◆RB◆\,d\omega$$

Since there are $3N$ total modes, the cutoff is determined by
$\int_0^◆LB◆\omega_D◆RB◆ g(\omega)\,d\omega = 3N$Giving $g(\omega) = \frac◆LB◆3V\omega^2◆RB◆◆LB◆2\pi^2 v_s^3◆RB◆$ For
$0 \leq \omega \leq \omega_D$. $\blacksquare$

**Lattice heat capacity:**

$$C_V = 9Nk_B\left(\frac◆LB◆T◆RB◆◆LB◆\Theta_D◆RB◆\right)^3 \int_0^◆LB◆\Theta_D/T◆RB◆ \frac◆LB◆x^4 e^x◆RB◆◆LB◆(e^x - 1)^2◆RB◆\,dx$$

**High-temperature limit** ($T \gg \Theta_D$): $C_V = 3Nk_B$ (Dulong--Petit law).

**Low-temperature limit** ($T \ll \Theta_D$):
$C_V = \frac◆LB◆12\pi^4◆RB◆◆LB◆5◆RB◆Nk_B\left(\frac◆LB◆T◆RB◆◆LB◆\Theta_D◆RB◆\right)^3$ (Debye $T^3$ law).

### 4.5 Einstein Model

The Einstein model treats all atoms as independent quantum harmonic oscillators with the same
frequency $\omega_E$:

$$C_V = 3Nk_B\left(\frac◆LB◆\Theta_E◆RB◆◆LB◆T◆RB◆\right)^2 \frac◆LB◆e^◆LB◆\Theta_E/T◆RB◆◆RB◆◆LB◆(e^◆LB◆\Theta_E/T◆RB◆ - 1)^2◆RB◆$$

Where $\Theta_E = \hbar\omega_E/k_B$.

**High-temperature limit** ($T \gg \Theta_E$): expanding
$e^◆LB◆\Theta_E/T◆RB◆ \approx 1 + \Theta_E/T +
\frac◆LB◆1◆RB◆◆LB◆2◆RB◆(\Theta_E/T)^2$ gives $C_V \to 3Nk_B$
(Dulong--Petit), matching Debye.

**Low-temperature limit** ($T \ll \Theta_E$): $C_V \approx 3Nk_B(\Theta_E/T)^2 e^◆LB◆-\Theta_E/T◆RB◆$
Which is exponentially suppressed. This disagrees with the Debye $T^3$ law (and experiment).

### 4.6 Phonon Thermal Conductivity

Phonons carry heat through the lattice. By the kinetic theory formula:

$$\kappa_◆LB◆\mathrm◆LB◆ph◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆C_V v_s \ell_◆LB◆\mathrm◆LB◆ph◆RB◆$$

Where $\ell_◆LB◆\mathrm◆LB◆ph◆RB◆$ is the phonon mean free path.

**Scattering mechanisms** that limit $\ell_◆LB◆\mathrm◆LB◆ph◆RB◆$:

1. **Phonon--phonon scattering:** At high $T$$\ell_◆LB◆\mathrm◆LB◆ph◆RB◆ \propto 1/T$ (Umklapp processes
   dominate, where the total phonon momentum is not conserved). At low $T$Only normal processes
   ($N$-processes, conserving momentum) contribute, and $\ell_◆LB◆\mathrm◆LB◆ph◆RB◆$ grows exponentially.
2. **Boundary scattering:** At very low $T$$\ell_◆LB◆\mathrm◆LB◆ph◆RB◆$ is limited by the sample size $L$.
3. **Defect scattering:** Point defects, dislocations, and grain boundaries scatter phonons,
   reducing $\kappa_◆LB◆\mathrm◆LB◆ph◆RB◆$.

**Temperature dependence:**

- Low $T$ ($T \ll \Theta_D$): $\kappa_◆LB◆\mathrm◆LB◆ph◆RB◆ \propto T^3$ (from $C_V \propto T^3$With
  $\ell_◆LB◆\mathrm◆LB◆ph◆RB◆$ limited by boundaries).
- Intermediate $T$: $\kappa_◆LB◆\mathrm◆LB◆ph◆RB◆$ peaks.
- High $T$ ($T \gtrsim \Theta_D$): $\kappa_◆LB◆\mathrm◆LB◆ph◆RB◆ \propto 1/T$ (from
  $\ell_◆LB◆\mathrm◆LB◆ph◆RB◆ \propto 1/T$ and $C_V \approx \mathrm◆LB◆const◆RB◆$).

### 4.7 Specific Heat: Debye vs Einstein vs Experiment

| Feature          | Debye            | Einstein                  | Experiment      |
| ---------------- | ---------------- | ------------------------- | --------------- |
| High $T$         | $3Nk_B$          | $3Nk_B$                   | $3Nk_B$         |
| Low $T$          | $\propto T^3$    | $\propto e^◆LB◆-\Theta_E/T◆RB◆$ | $\propto T^3$   |
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

Copper has molar mass $M = 63.55$ g/mol, density $\rho = 8.96\ \mathrm◆LB◆g◆RB◆/cm^3$And measured Speed of
sound $v_s = 3810$ m/s (average of longitudinal and transverse).

Number density:
$n = \frac◆LB◆\rho N_A◆RB◆◆LB◆M◆RB◆ = \frac◆LB◆8.96 \times 6.022 \times 10^◆LB◆23◆RB◆◆RB◆◆LB◆63.55◆RB◆ = 8.49 \times 10^◆LB◆28◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-3◆RB◆$.

$$\Theta_D = \frac◆LB◆\hbar v_s◆RB◆◆LB◆k_B◆RB◆(6\pi^2 n)^◆LB◆1/3◆RB◆$$

$$(6\pi^2 n)^◆LB◆1/3◆RB◆ = (6\pi^2 \times 8.49 \times 10^◆LB◆28◆RB◆)^◆LB◆1/3◆RB◆ = (5.03 \times 10^◆LB◆30◆RB◆)^◆LB◆1/3◆RB◆ = 1.71 \times 10^◆LB◆10◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-1◆RB◆$$

$$\Theta_D = \frac◆LB◆1.055 \times 10^◆LB◆-34◆RB◆ \times 3810◆RB◆◆LB◆1.381 \times 10^◆LB◆-23◆RB◆◆RB◆ \times 1.71 \times 10^◆LB◆10◆RB◆ = 2.91 \times 10^◆LB◆-8◆RB◆ \times 1.71 \times 10^◆LB◆10◆RB◆ = 498\ \mathrm◆LB◆K◆RB◆$$

The accepted experimental value is $\Theta_D = 343$ K. The discrepancy arises because the Debye
Model uses a single average sound velocity, while the real phonon spectrum is anisotropic.

</details>

:::caution Common Pitfall The Debye and Einstein models describe the _lattice_ contribution to
specific heat. At low Temperatures, the electronic specific heat $C_e = \gamma T$ also contributes
and can dominate over The lattice $T^3$ term in metals. The total low-$T$ specific heat of a metal
is $C_V = \gamma T + \beta T^3$Where $\beta$ is related to $\Theta_D$. A plot of $C_V/T$ versus
$T^2$ yields $\gamma$ (intercept) and $\beta$ (slope). :::

<details>
<summary>Worked Example: Comparing Debye and Einstein Specific Heats</summary>

For aluminium: $\Theta_D = 428$ K. Fit an Einstein temperature to match the Debye model at
$T = \Theta_D/2 = 214$ K.

The Debye specific heat at $T/\Theta_D = 0.5$:

$$\frac◆LB◆C_V◆RB◆◆LB◆3Nk_B◆RB◆ = \left(\frac◆LB◆T◆RB◆◆LB◆\Theta_D◆RB◆\right)^3 \int_0^◆LB◆\Theta_D/T◆RB◆ \frac◆LB◆x^4 e^x◆RB◆◆LB◆(e^x - 1)^2◆RB◆\,dx = 0.125 \times \int_0^2 \frac◆LB◆x^4 e^x◆RB◆◆LB◆(e^x - 1)^2◆RB◆\,dx$$

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
$\kappa_◆LB◆\mathrm◆LB◆ph◆RB◆ = 401$ W/(m$\cdot$K), and
$C_V \approx 3Nk_B = 3 \times 8.49 \times 10^◆LB◆28◆RB◆ \times 1.381 \times 10^◆LB◆-23◆RB◆ = 3.52 \times 10^6$
J/(m$^3\cdot$K).

From $\kappa = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆C_V v_s \ell$:

$$\ell = \frac◆LB◆3\kappa◆RB◆◆LB◆C_V v_s◆RB◆ = \frac◆LB◆3 \times 401◆RB◆◆LB◆3.52 \times 10^6 \times 3810◆RB◆ = 8.97 \times 10^◆LB◆-8◆RB◆\ \mathrm◆LB◆m◆RB◆ \approx 90\ \mathrm◆LB◆nm◆RB◆$$

This is much shorter than the sample size, confirming that phonon--phonon (Umklapp) scattering
Dominates at room temperature. At 10 K, the mean free path would be limited by sample boundaries.

</details>

### 4.8 Neutron Scattering

Neutrons are an ideal probe of phonons because their de Broglie wavelength ($\sim 1$ Å) matches
Lattice spacings, and their energy ($\sim 10$--$100$ meV) matches phonon energies. In an **inelastic
Neutron scattering** experiment, the energy and momentum transfer are measured:

$$\hbar\omega = E_i - E_f, \quad \mathbf◆LB◆q◆RB◆ = \mathbf◆LB◆k◆RB◆_i - \mathbf◆LB◆k◆RB◆_f$$

The scattering cross-section is proportional to the dynamical structure factor
$S(\mathbf◆LB◆q◆RB◆, \omega)$ Which has peaks when $\hbar\omega = \hbar\omega_◆LB◆\mathbf◆LB◆q◆RB◆s◆RB◆$ (phonon
creation) or $\hbar\omega = -\hbar\omega_◆LB◆\mathbf◆LB◆q◆RB◆s◆RB◆$ (phonon annihilation). This allows direct
measurement of The full phonon dispersion relation $\omega(\mathbf◆LB◆q◆RB◆)$.

Time-of-flight and triple-axis spectrometers are the primary instruments used. Neutron scattering
Has provided definitive measurements of phonon dispersions in virtually all important crystals.

## 5. Electronic Band Structure

### 5.1 Free Electron Model

In the simplest model, conduction electrons move freely in a box of volume $V$ (the "jellium"
model). The allowed wave vectors are:

$$\mathbf◆LB◆k◆RB◆ = \frac◆LB◆2\pi◆RB◆◆LB◆L◆RB◆(n_x, n_y, n_z), \quad n_i \in \mathbb◆LB◆Z◆RB◆$$

The energy spectrum:

$$\varepsilon(\mathbf◆LB◆k◆RB◆) = \frac◆LB◆\hbar^2 k^2◆RB◆◆LB◆2m_e◆RB◆$$

The **Fermi wave vector** is determined by the electron density $n = N/V$:

$$k_F = (3\pi^2 n)^◆LB◆1/3◆RB◆$$

The **Fermi energy:**

$$\varepsilon_F = \frac◆LB◆\hbar^2 k_F^2◆RB◆◆LB◆2m_e◆RB◆$$

### 5.2 Density of States

For a 3D free electron gas:

$$g(\varepsilon) = \frac◆LB◆V◆RB◆◆LB◆2\pi^2◆RB◆\left(\frac◆LB◆2m_e◆RB◆◆LB◆\hbar^2◆RB◆\right)^◆LB◆3/2◆RB◆\sqrt◆LB◆\varepsilon◆RB◆$$

**Derivation.** The number of states with $\lvert\mathbf◆LB◆k◆RB◆\rvert \leq k$ is:

$$N(k) = 2 \cdot \frac◆LB◆V◆RB◆◆LB◆(2\pi)^3◆RB◆ \cdot \frac◆LB◆4\pi k^3◆RB◆◆LB◆3◆RB◆$$

Where the factor of 2 accounts for spin. Differentiating: $g(k)\,dk = dN/dk\,dk = (Vk^2/\pi^2)\,dk$.
Converting to energy:
$g(\varepsilon) = g(k)\lvert dk/d\varepsilon\rvert = (Vk^2/\pi^2)(m_e/\hbar^2 k)$. $\blacksquare$

At the Fermi energy: $g(\varepsilon_F) = \frac◆LB◆3N◆RB◆◆LB◆2\varepsilon_F◆RB◆$.

**The Fermi surface** is the surface in $\mathbf◆LB◆k◆RB◆$-space defined by
$\varepsilon(\mathbf◆LB◆k◆RB◆) = \varepsilon_F$. For the free electron gas, this is a sphere of radius
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
Potential $V(\mathbf◆LB◆r◆RB◆ + \mathbf◆LB◆R◆RB◆) = V(\mathbf◆LB◆r◆RB◆)$ can be written as:

$$\psi_◆LB◆n\mathbf◆LB◆k◆RB◆◆RB◆(\mathbf◆LB◆r◆RB◆) = e^◆LB◆i\mathbf◆LB◆k◆RB◆\cdot\mathbf◆LB◆r◆RB◆◆RB◆ u_◆LB◆n\mathbf◆LB◆k◆RB◆◆RB◆(\mathbf◆LB◆r◆RB◆)$$

Where $u_◆LB◆n\mathbf◆LB◆k◆RB◆◆RB◆(\mathbf◆LB◆r◆RB◆)$ has the periodicity of the lattice:
$u_◆LB◆n\mathbf◆LB◆k◆RB◆◆RB◆(\mathbf◆LB◆r◆RB◆ + \mathbf◆LB◆R◆RB◆) = u_◆LB◆n\mathbf◆LB◆k◆RB◆◆RB◆(\mathbf◆LB◆r◆RB◆)$.

**Proof.** The translation operators $\hat◆LB◆T◆RB◆_◆LB◆\mathbf◆LB◆R◆RB◆◆RB◆$ commute with the Hamiltonian
$\hat◆LB◆H◆RB◆ = -\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\nabla^2 + V(\mathbf◆LB◆r◆RB◆)$ since $V$ is periodic. Therefore, the
Eigenstates of $\hat◆LB◆H◆RB◆$ can be chosen as simultaneous eigenstates of all $\hat◆LB◆T◆RB◆_◆LB◆\mathbf◆LB◆R◆RB◆◆RB◆$:

$$\hat◆LB◆T◆RB◆_◆LB◆\mathbf◆LB◆R◆RB◆◆RB◆\psi(\mathbf◆LB◆r◆RB◆) = \psi(\mathbf◆LB◆r◆RB◆ + \mathbf◆LB◆R◆RB◆) = c_◆LB◆\mathbf◆LB◆R◆RB◆◆RB◆\psi(\mathbf◆LB◆r◆RB◆)$$

From the composition rule
$\hat◆LB◆T◆RB◆_◆LB◆\mathbf◆LB◆R◆RB◆_1◆RB◆\hat◆LB◆T◆RB◆_◆LB◆\mathbf◆LB◆R◆RB◆_2◆RB◆ = \hat◆LB◆T◆RB◆_◆LB◆\mathbf◆LB◆R◆RB◆_1 + \mathbf◆LB◆R◆RB◆_2◆RB◆$:

$$c_◆LB◆\mathbf◆LB◆R◆RB◆_1 + \mathbf◆LB◆R◆RB◆_2◆RB◆ = c_◆LB◆\mathbf◆LB◆R◆RB◆_1◆RB◆ c_◆LB◆\mathbf◆LB◆R◆RB◆_2◆RB◆$$

The only solution of this functional equation is $c_◆LB◆\mathbf◆LB◆R◆RB◆◆RB◆ = e^◆LB◆i\mathbf◆LB◆k◆RB◆\cdot\mathbf◆LB◆R◆RB◆◆RB◆$.
Therefore $\psi(\mathbf◆LB◆r◆RB◆ + \mathbf◆LB◆R◆RB◆) = e^◆LB◆i\mathbf◆LB◆k◆RB◆\cdot\mathbf◆LB◆R◆RB◆◆RB◆\psi(\mathbf◆LB◆r◆RB◆)$Which is
Satisfied by $\psi(\mathbf◆LB◆r◆RB◆) = e^◆LB◆i\mathbf◆LB◆k◆RB◆\cdot\mathbf◆LB◆r◆RB◆◆RB◆u_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆(\mathbf◆LB◆r◆RB◆)$ with
$u_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆$ periodic. $\blacksquare$

**Consequences:**

- $\mathbf◆LB◆k◆RB◆$ is defined only up to a reciprocal lattice vector: $\mathbf◆LB◆k◆RB◆$ and
  $\mathbf◆LB◆k◆RB◆ + \mathbf◆LB◆G◆RB◆$ are equivalent.
- The energy spectrum consists of **bands** $\varepsilon_n(\mathbf◆LB◆k◆RB◆)$Each labelled by a band index
  $n$.
- Band gaps appear between allowed energy bands.

### 5.4 Nearly Free Electron Model

Starting from the free electron model, a weak periodic potential
$V(\mathbf◆LB◆r◆RB◆) = \sum_◆LB◆\mathbf◆LB◆G◆RB◆◆RB◆ V_◆LB◆\mathbf◆LB◆G◆RB◆◆RB◆ e^◆LB◆i\mathbf◆LB◆G◆RB◆\cdot\mathbf◆LB◆r◆RB◆◆RB◆$ Opens gaps at the
Brillouin zone boundaries where $\lvert\mathbf◆LB◆k◆RB◆\rvert = \lvert\mathbf◆LB◆k◆RB◆ + \mathbf◆LB◆G◆RB◆\rvert$
(Bragg Condition).

At the zone boundary $\mathbf◆LB◆k◆RB◆ = \mathbf◆LB◆G◆RB◆/2$The gap is:

$$\Delta\varepsilon = 2\lvert V_◆LB◆\mathbf◆LB◆G◆RB◆◆RB◆\rvert$$

**Derivation.** Near the zone boundary, the free electron states at $\mathbf◆LB◆k◆RB◆$ and
$\mathbf◆LB◆k◆RB◆ - \mathbf◆LB◆G◆RB◆$ Are degenerate:
$\varepsilon_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆^0 = \varepsilon_◆LB◆\mathbf◆LB◆k◆RB◆ - \mathbf◆LB◆G◆RB◆◆RB◆^0$. Degenerate Perturbation
theory gives:

$$\det\begin◆LB◆pmatrix◆RB◆ \varepsilon_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆^0 - E & V_◆LB◆\mathbf◆LB◆G◆RB◆◆RB◆ \\ V_◆LB◆\mathbf◆LB◆G◆RB◆◆RB◆^* & \varepsilon_◆LB◆\mathbf◆LB◆k◆RB◆ - \mathbf◆LB◆G◆RB◆◆RB◆^0 - E \end◆LB◆pmatrix◆RB◆ = 0$$

At $\mathbf◆LB◆k◆RB◆ = \mathbf◆LB◆G◆RB◆/2$: $E = \varepsilon_◆LB◆\mathbf◆LB◆G◆RB◆/2◆RB◆^0 \pm \lvert V_◆LB◆\mathbf◆LB◆G◆RB◆◆RB◆\rvert$So
the gap is $2\lvert V_◆LB◆\mathbf◆LB◆G◆RB◆◆RB◆\rvert$. $\blacksquare$

### 5.5 Drude Model

The **Drude model** (1900) treats conduction electrons as a classical ideal gas scattering off
Static ions with a mean free time $\tau$ (relaxation time).

**Equation of motion.** Under an electric field $\mathbf◆LB◆E◆RB◆$:

$$m_e\frac◆LB◆d\mathbf◆LB◆v◆RB◆◆RB◆◆LB◆dt◆RB◆ = -e\mathbf◆LB◆E◆RB◆ - \frac◆LB◆m_e\mathbf◆LB◆v◆RB◆◆RB◆◆LB◆\tau◆RB◆$$

The second term represents a frictional drag with characteristic time $\tau$.

**DC conductivity.** In steady state ($d\mathbf◆LB◆v◆RB◆/dt = 0$):
$\mathbf◆LB◆v◆RB◆_d = -\frac◆LB◆e\tau◆RB◆◆LB◆m_e◆RB◆\mathbf◆LB◆E◆RB◆$. The current density:
$\mathbf◆LB◆J◆RB◆ = -ne\mathbf◆LB◆v◆RB◆_d = \frac◆LB◆ne^2\tau◆RB◆◆LB◆m_e◆RB◆\mathbf◆LB◆E◆RB◆$.

$$\sigma = \frac◆LB◆ne^2\tau◆RB◆◆LB◆m_e◆RB◆$$

**AC conductivity.** For $\mathbf◆LB◆E◆RB◆(t) = \mathbf◆LB◆E◆RB◆_0\,e^◆LB◆-i\omega t◆RB◆$The Drude model gives:

$$\sigma(\omega) = \frac◆LB◆ne^2\tau/m_e◆RB◆◆LB◆1 - i\omega\tau◆RB◆ = \frac◆LB◆\sigma_0◆RB◆◆LB◆1 - i\omega\tau◆RB◆$$

The real part $\mathrm◆LB◆Re◆RB◆[\sigma(\omega)] = \frac◆LB◆\sigma_0◆RB◆◆LB◆1 + \omega^2\tau^2◆RB◆$ describes
absorption, Peaking at $\omega = 0$ (the Drude peak). This explains the metallic reflectivity in the
infrared.

**Hall effect.** With $\mathbf◆LB◆B◆RB◆ = B\hat◆LB◆z◆RB◆$ applied, the steady-state equation becomes:

$$-e\mathbf◆LB◆E◆RB◆ - \frac◆LB◆m_e\mathbf◆LB◆v◆RB◆◆RB◆◆LB◆\tau◆RB◆ - e\mathbf◆LB◆v◆RB◆ \times \mathbf◆LB◆B◆RB◆ = 0$$

For current $\mathbf◆LB◆J◆RB◆ = J_x\hat◆LB◆x◆RB◆$A transverse field $E_y$ develops:

$$R_H = \frac◆LB◆E_y◆RB◆◆LB◆J_x B◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆ne◆RB◆$$

This provides a direct measurement of the carrier density $n$.

**Successes:** Ohm's law ($\mathbf◆LB◆J◆RB◆ = \sigma\mathbf◆LB◆E◆RB◆$), Wiedemann--Franz law
($\kappa/\sigma T = \frac◆LB◆\pi^2 k_B^2◆RB◆◆LB◆3e^2◆RB◆$), Hall effect.

**Failures:** Predicts $\chi \propto T^◆LB◆-1◆RB◆$ (Curie law) for magnetic susceptibility, but real
Metals have nearly temperature-independent Pauli paramagnetism. Predicts $C_V = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆nk_B$ But
experiments give $C_V \ll \frac◆LB◆3◆RB◆◆LB◆2◆RB◆nk_B$ at room temperature.

### 5.6 Sommerfeld Model

The **Sommerfeld model** (1928) corrects the Drude model by treating electrons as a **Fermi gas**
Obeying Fermi--Dirac .../4-statistics-and-probability/2_statistics:

$$f(\varepsilon) = \frac◆LB◆1◆RB◆◆LB◆e^◆LB◆(\varepsilon - \mu)/k_B T◆RB◆ + 1◆RB◆$$

At $T = 0$The chemical potential equals the Fermi energy: $\mu(0) = \varepsilon_F$. At finite $T$:

$$\mu(T) = \varepsilon_F\left[1 - \frac◆LB◆\pi^2◆RB◆◆LB◆12◆RB◆\left(\frac◆LB◆k_B T◆RB◆◆LB◆\varepsilon_F◆RB◆\right)^2 + \cdots\right]$$

Since $\varepsilon_F/k_B \sim 10^4$ K for metals, the correction at room temperature is negligible:
The chemical potential is essentially constant.

**Electronic specific heat.** By the Sommerfeld expansion:

$$C_e = \frac◆LB◆\pi^2◆RB◆◆LB◆3◆RB◆k_B^2\,g(\varepsilon_F)\,T = \gamma T$$

Where $\gamma = \frac◆LB◆\pi^2◆RB◆◆LB◆2◆RB◆\frac◆LB◆Nk_B^2◆RB◆◆LB◆\varepsilon_F◆RB◆$. At room temperature, only electrons
within $\sim k_B T$ of $\varepsilon_F$ can be thermally excited, which is a tiny fraction
$\sim T/T_F \sim 1/100$ of the total. This explains why $C_e \ll \frac◆LB◆3◆RB◆◆LB◆2◆RB◆Nk_B$.

**Pauli paramagnetism.** The spin susceptibility of a degenerate electron gas:

$$\chi_P = \mu_0\mu_B^2\,g(\varepsilon_F) = \frac◆LB◆3\mu_0\mu_B^2 N◆RB◆◆LB◆2\varepsilon_F◆RB◆$$

This is independent of $T$ (up to corrections of order $(T/T_F)^2$), in contrast to the Curie law
$\chi \propto 1/T$ of the Drude model.

<details>
<summary>Derivation: Sommerfeld Expansion</summary>

To compute thermal averages at low $T$We integrate $h(\varepsilon) f(\varepsilon)$ where
$f(\varepsilon) = 1/(e^◆LB◆\beta(\varepsilon - \mu)◆RB◆ + 1)$ is the Fermi--Dirac distribution and
$h(\varepsilon)$ Is any smooth function (e.g., density of states times energy).

Define $H(\varepsilon) = \int_0^\varepsilon h(\varepsilon')\,d\varepsilon'$. Then:

$$I = \int_0^\infty h(\varepsilon)f(\varepsilon)\,d\varepsilon = \int_0^\infty \frac◆LB◆dH◆RB◆◆LB◆d\varepsilon◆RB◆\,f\,d\varepsilon = [Hf]_0^\infty + \int_0^\infty H(\varepsilon)\left(-\frac◆LB◆\partial f◆RB◆◆LB◆\partial \varepsilon◆RB◆\right)d\varepsilon$$

Since $f(0) \approx 1$ and $f(\infty) = 0$And $-\partial f/\partial \varepsilon$ is sharply peaked
At $\varepsilon = \mu$ with width $\sim k_B T$We expand $H(\varepsilon)$ about $\mu$:

$$I = \int_0^\mu h(\varepsilon)\,d\varepsilon + \frac◆LB◆\pi^2◆RB◆◆LB◆6◆RB◆(k_B T)^2 h'(\mu) + \cdots$$

For the total energy with $h(\varepsilon) = \varepsilon\,g(\varepsilon)$:

$$E = \int_0^◆LB◆\mu_0◆RB◆ \varepsilon\,g(\varepsilon)\,d\varepsilon + \frac◆LB◆\pi^2◆RB◆◆LB◆6◆RB◆(k_B T)^2 \frac◆LB◆d◆RB◆◆LB◆d\varepsilon◆RB◆[\varepsilon g(\varepsilon)]_◆LB◆\varepsilon = \mu_0◆RB◆ + \cdots$$

Differentiating with respect to $T$ gives the specific heat
$C_V = \frac◆LB◆\pi^2◆RB◆◆LB◆3◆RB◆k_B^2\,g(\varepsilon_F)\,T$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Fermi Energy of Sodium</summary>

Sodium has $n = 2.65 \times 10^◆LB◆28◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-3◆RB◆$ conduction electrons (one per atom, BCC
structure).

$$k_F = (3\pi^2 n)^◆LB◆1/3◆RB◆ = (3\pi^2 \times 2.65 \times 10^◆LB◆28◆RB◆)^◆LB◆1/3◆RB◆ = (7.85 \times 10^◆LB◆29◆RB◆)^◆LB◆1/3◆RB◆ = 9.23 \times 10^9\ \mathrm◆LB◆m◆RB◆^◆LB◆-1◆RB◆$$

$$\varepsilon_F = \frac◆LB◆\hbar^2 k_F^2◆RB◆◆LB◆2m_e◆RB◆ = \frac◆LB◆(1.055 \times 10^◆LB◆-34◆RB◆)^2 \times (9.23 \times 10^9)^2◆RB◆◆LB◆2 \times 9.11 \times 10^◆LB◆-31◆RB◆◆RB◆ = \frac◆LB◆9.48 \times 10^◆LB◆-58◆RB◆◆RB◆◆LB◆1.82 \times 10^◆LB◆-30◆RB◆◆RB◆ = 5.21 \times 10^◆LB◆-19◆RB◆\ \mathrm◆LB◆J◆RB◆ = 3.25\ \mathrm◆LB◆eV◆RB◆$$

$$T_F = \frac◆LB◆\varepsilon_F◆RB◆◆LB◆k_B◆RB◆ = \frac◆LB◆5.21 \times 10^◆LB◆-19◆RB◆◆RB◆◆LB◆1.381 \times 10^◆LB◆-23◆RB◆◆RB◆ = 3.77 \times 10^4\ \mathrm◆LB◆K◆RB◆$$

$$v_F = \frac◆LB◆\hbar k_F◆RB◆◆LB◆m_e◆RB◆ = \frac◆LB◆1.055 \times 10^◆LB◆-34◆RB◆ \times 9.23 \times 10^9◆RB◆◆LB◆9.11 \times 10^◆LB◆-31◆RB◆◆RB◆ = 1.07 \times 10^6\ \mathrm◆LB◆m◆RB◆/s$$

The electronic specific heat coefficient:
$\gamma = \frac◆LB◆\pi^2◆RB◆◆LB◆2◆RB◆\frac◆LB◆nk_B^2◆RB◆◆LB◆\varepsilon_F◆RB◆ = \frac◆LB◆\pi^2 \times 2.65 \times 10^◆LB◆28◆RB◆ \times (1.381 \times 10^◆LB◆-23◆RB◆)^2◆RB◆◆LB◆2 \times 5.21 \times 10^◆LB◆-19◆RB◆◆RB◆ = 1.38 \times 10^3\ \mathrm◆LB◆J◆RB◆/(m^3\cdot K^2)$

</details>

### 5.7 Tight-Binding Model

The **tight-binding model** starts from isolated atomic orbitals and treats the overlap between
Neighbours as a perturbation. For a 1D chain with lattice constant $a$ and a single $s$-orbital Of
energy $\varepsilon_0$:

$$\psi_k(r) = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆N◆RB◆◆RB◆\sum_n e^◆LB◆ikna◆RB◆\,\phi(r - na)$$

Where $\phi(r - na)$ is the atomic orbital centred at site $n$.

**Dispersion relation** (nearest-neighbour approximation):

$$\varepsilon(k) = \varepsilon_0 - 2t\cos(ka)$$

Where $t = -\int \phi^*(r - na)\,\hat◆LB◆H◆RB◆\,\phi(r - (n+1)a)\,dr$ is the **hopping integral** ($t > 0$
for typical $s$-orbitals).

**Key features:**

- Band width: $W = 4t$.
- Minimum at $k = 0$: $\varepsilon_◆LB◆\min◆RB◆ = \varepsilon_0 - 2t$.
- Maximum at $k = \pm\pi/a$: $\varepsilon_◆LB◆\max◆RB◆ = \varepsilon_0 + 2t$.
- Effective mass at band bottom: $m^* = \hbar^2/(2ta^2)$.

**Extension to 3D:** For a simple cubic lattice with nearest-neighbour hopping:

$$\varepsilon(\mathbf◆LB◆k◆RB◆) = \varepsilon_0 - 2t(\cos k_x a + \cos k_y a + \cos k_z a)$$

The band width is $W = 12t$ and the density of states develops a van Hove singularity at
$\varepsilon = \varepsilon_0$.

<details>
<summary>Worked Example: Tight-Binding Band Structure of Graphene</summary>

Graphene has a honeycomb lattice with two carbon atoms per unit cell. Using $p_z$ orbitals with
Nearest-neighbour hopping $t \approx 2.8$ eV, the tight-binding Hamiltonian gives:

$$\varepsilon_◆LB◆\pm◆RB◆(\mathbf◆LB◆k◆RB◆) = \pm t\left\lvert 1 + e^◆LB◆i\mathbf◆LB◆k◆RB◆\cdot\mathbf◆LB◆a◆RB◆_1◆RB◆ + e^◆LB◆i\mathbf◆LB◆k◆RB◆\cdot\mathbf◆LB◆a◆RB◆_2◆RB◆\right\rvert$$

Where $\mathbf◆LB◆a◆RB◆_1$ and $\mathbf◆LB◆a◆RB◆_2$ are the primitive vectors of the hexagonal lattice.

The two bands touch at the **Dirac points** $\mathbf◆LB◆K◆RB◆$ and $\mathbf◆LB◆K◆RB◆'$ in the Brillouin zone.
Near these points, expanding to linear order:

$$\varepsilon(\mathbf◆LB◆q◆RB◆) = \pm \hbar v_F \lvert\mathbf◆LB◆q◆RB◆\rvert$$

Where $v_F = \frac◆LB◆\sqrt◆LB◆3◆RB◆◆RB◆◆LB◆2◆RB◆\frac◆LB◆ta◆RB◆◆LB◆\hbar◆RB◆ \approx 10^6$ m/s and
$\mathbf◆LB◆q◆RB◆ = \mathbf◆LB◆k◆RB◆ - \mathbf◆LB◆K◆RB◆$.

This linear (Dirac-like) dispersion means graphene has zero effective mass and a density of states
$g(\varepsilon) \propto \lvert\varepsilon\rvert$ (linear in energy), unlike the $\sqrt◆LB◆\varepsilon◆RB◆$
Dependence of a parabolic band.

</details>

### 5.8 Effective Mass

Near a band extremum at $\mathbf◆LB◆k◆RB◆_0$The energy can be expanded:

$$\varepsilon(\mathbf◆LB◆k◆RB◆) = \varepsilon_0 + \frac◆LB◆\hbar^2◆RB◆◆LB◆2◆RB◆\sum_◆LB◆ij◆RB◆(m^◆LB◆-1◆RB◆)_◆LB◆ij◆RB◆(k_i - k_◆LB◆0,i◆RB◆)(k_j - k_◆LB◆0,j◆RB◆)$$

The **effective mass tensor**
$(m^◆LB◆-1◆RB◆)_◆LB◆ij◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\hbar^2◆RB◆\frac◆LB◆\partial^2 \varepsilon◆RB◆◆LB◆\partial k_i \partial k_j◆RB◆$
Determines the response to external fields. For isotropic bands,
$m^* = \hbar^2/(d^2\varepsilon/dk^2)$.

A large effective mass means a flat band (small group velocity). A small effective mass means a
Steep band (high mobility).

The effective mass can be **negative** near a band maximum (holes). Cyclotron resonance experiments
Measure $m^*$ directly: the resonance frequency is $\omega_c = eB/m^*$.

:::caution Common Pitfall The effective mass is a tensor quantity . For crystals with cubic
symmetry, it reduces to A scalar, but for anisotropic crystals (e.g., graphite, silicon), different
effective masses apply Along different crystallographic directions. Always check the crystal
symmetry before assuming $m^*$ is a scalar. :::

### 5.9 Band Structure Calculations

Modern band structure calculations are based on **density functional theory** (DFT), formulated by
Hohenberg, Kohn, and Sham (1964--1965).

**Hohenberg--Kohn theorems.** (1) The ground-state energy of a many-electron system is a unique
Functional of the electron density $n(\mathbf◆LB◆r◆RB◆)$. (2) The correct ground-state density minimises
This functional.

**Kohn--Sham equations.** The interacting system is mapped to a fictitious system of non-interacting
Electrons in an effective potential:

$$\left[-\frac◆LB◆\hbar^2◆RB◆◆LB◆2m◆RB◆\nabla^2 + V_◆LB◆\mathrm◆LB◆eff◆RB◆(\mathbf◆LB◆r◆RB◆)\right]\psi_i(\mathbf◆LB◆r◆RB◆) = \varepsilon_i\psi_i(\mathbf◆LB◆r◆RB◆)$$

Where $V_◆LB◆\mathrm◆LB◆eff◆RB◆ = V_◆LB◆\mathrm◆LB◆ext◆RB◆ + V_H[n] + V_◆LB◆\mathrm◆LB◆xc◆RB◆[n]$. Here $V_◆LB◆\mathrm◆LB◆ext◆RB◆$ is
the External (ionic) potential, $V_H$ is the Hartree (classical Coulomb) potential, and
$V_◆LB◆\mathrm◆LB◆xc◆RB◆$ Is the exchange-correlation potential.

The electron density is $n(\mathbf◆LB◆r◆RB◆) = \sum_i \lvert\psi_i(\mathbf◆LB◆r◆RB◆)\rvert^2$ (summing over
occupied States). The Kohn--Sham equations are solved self-consistently.

**Common approximations for $V_◆LB◆\mathrm◆LB◆xc◆RB◆$:**

- **Local density approximation (LDA):**
  $V_◆LB◆\mathrm◆LB◆xc◆RB◆(\mathbf◆LB◆r◆RB◆) = V_◆LB◆\mathrm◆LB◆xc◆RB◆^◆LB◆\mathrm◆LB◆hom◆RB◆(n(\mathbf◆LB◆r◆RB◆))$ using the
  exchange-correlation energy of a homogeneous electron gas. Good for simple metals but tends to
  underestimate band gaps.
- **Generalised gradient approximation (GGA):** Includes the density gradient
  $\nabla n(\mathbf◆LB◆r◆RB◆)$Improving accuracy for structural properties and band gaps.
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

$$n_i = p_i = \sqrt◆LB◆N_c N_v◆RB◆\, e^◆LB◆-E_g/(2k_B T)◆RB◆$$

Where $N_c$ and $N_v$ are the effective density of states in the conduction and valence bands:

$$N_c = 2\left(\frac◆LB◆2\pi m_e^* k_B T◆RB◆◆LB◆h^2◆RB◆\right)^◆LB◆3/2◆RB◆, \quad N_v = 2\left(\frac◆LB◆2\pi m_h^* k_B T◆RB◆◆LB◆h^2◆RB◆\right)^◆LB◆3/2◆RB◆$$

Here $m_e^*$ and $m_h^*$ are the effective masses of electrons and holes.

**Fermi level** in an intrinsic semiconductor:
$E_F = (E_c + E_v)/2 + \frac◆LB◆3◆RB◆◆LB◆4◆RB◆k_B T\ln(m_h^*/m_e^*)$. For $m_e^* = m_h^*$: $E_F = E_g/2$.

### 6.2 Extrinsic Semiconductors

**n-type:** Doping with donor atoms (e.g., P in Si) that donate electrons to the conduction band.
Majority carriers: electrons.

**p-type:** Doping with acceptor atoms (e.g., B in Si) that accept electrons from the valence band,
Creating holes. Majority carriers: holes.

For $n$-type with donor concentration $N_D$ (non-degenerate, $T$ not too high):

$$n \approx N_D, \quad p = \frac◆LB◆n_i^2◆RB◆◆LB◆N_D◆RB◆$$

$$E_F \approx E_c - k_B T \ln\left(\frac◆LB◆N_c◆RB◆◆LB◆N_D◆RB◆\right)$$

For $p$-type with acceptor concentration $N_A$:

$$p \approx N_A, \quad n = \frac◆LB◆n_i^2◆RB◆◆LB◆N_A◆RB◆$$

$$E_F \approx E_v + k_B T \ln\left(\frac◆LB◆N_v◆RB◆◆LB◆N_A◆RB◆\right)$$

**Mass action law:** $np = n_i^2$ holds at thermal equilibrium regardless of doping.

### 6.3 The p-n Junction

At the interface between p-type and n-type material:

- **Depletion region:** Mobile carriers diffuse, leaving behind fixed ionised donors (n-side) and
  acceptors (p-side), creating a built-in electric field.
- **Built-in potential:** $V_0 = \frac◆LB◆k_B T◆RB◆◆LB◆e◆RB◆\ln\left(\frac◆LB◆N_A N_D◆RB◆◆LB◆n_i^2◆RB◆\right)$.
- **Depletion width:**
  $W = \sqrt◆LB◆\frac◆LB◆2\varepsilon_s V_0◆RB◆◆LB◆e◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆N_A◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆N_D◆RB◆\right)◆RB◆$ where
  $\varepsilon_s$ is the permittivity of the semiconductor.

**Current-voltage characteristic (Shockley equation):**

$$I = I_0\left(e^◆LB◆eV/(k_B T)◆RB◆ - 1\right)$$

Where $I_0$ is the reverse saturation current. Forward bias ($V \gt 0$) exponentially increases the
Current. Reverse bias ($V \lt 0$) gives approximately $I \approx -I_0$.

**Derivation of the built-in potential.** In equilibrium, the Fermi level is constant. The potential
Difference between the n-side (where $E_F$ is near $E_c$) and the p-side (where $E_F$ is near $E_v$)
Is:

$$eV_0 = E_◆LB◆c,n◆RB◆ - E_◆LB◆c,p◆RB◆ = E_g - (E_c - E_F)_n - (E_F - E_v)_p$$

Using $n = N_c e^◆LB◆-(E_c - E_F)/(k_B T)◆RB◆$ and $p = N_v e^◆LB◆-(E_F - E_v)/(k_B T)◆RB◆$ with $np = n_i^2$:

$$V_0 = \frac◆LB◆k_B T◆RB◆◆LB◆e◆RB◆\ln\left(\frac◆LB◆N_A N_D◆RB◆◆LB◆n_i^2◆RB◆\right)$$

$\blacksquare$

**Capacitance.** The depletion region acts as a parallel-plate capacitor:

$$C = \frac◆LB◆\varepsilon_s A◆RB◆◆LB◆W◆RB◆ = A\sqrt◆LB◆\frac◆LB◆e\varepsilon_s◆RB◆◆LB◆2◆RB◆\frac◆LB◆N_A N_D◆RB◆◆LB◆N_A + N_D◆RB◆\frac◆LB◆1◆RB◆◆LB◆V_0 - V◆RB◆◆RB◆$$

This $C \propto 1/\sqrt◆LB◆V_0 - V◆RB◆$ dependence is used experimentally to determine $N_A$ and $N_D$
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

$$E_n = \frac◆LB◆n^2 \pi^2 \hbar^2◆RB◆◆LB◆2m^* L^2◆RB◆$$

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
  at the same $\mathbf◆LB◆k◆RB◆$. Photon absorption requires only energy conservation (the photon momentum
  $\hbar\omega/c \approx 0$ is negligible). The absorption coefficient rises sharply above $E_g$:

  $$\alpha(\omega) \propto \sqrt◆LB◆\hbar\omega - E_g◆RB◆$$

- **Indirect band gap** (e.g., Si, Ge): The band edges occur at different $\mathbf◆LB◆k◆RB◆$. A phonon is
  required to conserve momentum, making the absorption weaker and temperature-dependent:

  $$\alpha(\omega) \propto \frac◆LB◆(\hbar\omega - E_g - \hbar\Omega)^2◆RB◆◆LB◆e^◆LB◆\hbar\Omega/k_BT◆RB◆ - 1◆RB◆ + \frac◆LB◆(\hbar\omega - E_g + \hbar\Omega)^2◆RB◆◆LB◆1 - e^◆LB◆-\hbar\Omega/k_BT◆RB◆◆RB◆$$

where $\hbar\Omega$ is the phonon energy.

**Excitons.** The electron and hole created by photon absorption are attracted by the Coulomb
Interaction, forming a bound state called an **exciton** with binding energy:

$$E_◆LB◆\mathrm◆LB◆ex◆RB◆ = \frac◆LB◆\mu e^4◆RB◆◆LB◆2(4\pi\varepsilon_s)^2\hbar^2◆RB◆ = \frac◆LB◆\mu◆RB◆◆LB◆m_e\varepsilon_r^2◆RB◆ \times 13.6\ \mathrm◆LB◆eV◆RB◆$$

Where $\mu = m_e^* m_h^*/(m_e^* + m_h^*)$ is the reduced mass and $\varepsilon_r$ is the relative
Permittivity. Excitons produce sharp absorption lines slightly below $E_g$.

**Photoluminescence.** When electron--hole pairs recombine radiatively, photons are emitted at
Energies near $E_g$. Direct-gap materials are efficient light emitters (used in LEDs and laser
Diodes). Indirect-gap materials like Si have very low radiative efficiency.

<details>
<summary>Worked Example: Intrinsic Carrier Concentration in Silicon</summary>

For Si at $T = 300$ K: $E_g = 1.12$ eV, $m_e^* = 1.08\,m_e$$m_h^* = 0.56\,m_e$.

$$N_c = 2\left(\frac◆LB◆2\pi \times 1.08 \times 9.11 \times 10^◆LB◆-31◆RB◆ \times 1.381 \times 10^◆LB◆-23◆RB◆ \times 300◆RB◆◆LB◆(6.626 \times 10^◆LB◆-34◆RB◆)^2◆RB◆\right)^◆LB◆3/2◆RB◆ = 2.81 \times 10^◆LB◆25◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-3◆RB◆$$

$$N_v = 2\left(\frac◆LB◆2\pi \times 0.56 \times 9.11 \times 10^◆LB◆-31◆RB◆ \times 1.381 \times 10^◆LB◆-23◆RB◆ \times 300◆RB◆◆LB◆(6.626 \times 10^◆LB◆-34◆RB◆)^2◆RB◆\right)^◆LB◆3/2◆RB◆ = 1.04 \times 10^◆LB◆25◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-3◆RB◆$$

$$n_i = \sqrt◆LB◆N_c N_v◆RB◆\,e^◆LB◆-E_g/(2k_B T)◆RB◆ = \sqrt◆LB◆2.81 \times 1.04◆RB◆ \times 10^◆LB◆25◆RB◆ \times e^◆LB◆-1.12/(2 \times 0.02585)◆RB◆$$

$$n_i = 1.71 \times 10^◆LB◆25◆RB◆ \times e^◆LB◆-21.66◆RB◆ = 1.71 \times 10^◆LB◆25◆RB◆ \times 3.95 \times 10^◆LB◆-10◆RB◆ = 6.75 \times 10^◆LB◆15◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-3◆RB◆$$

The accepted value is $n_i \approx 1.5 \times 10^◆LB◆16◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-3◆RB◆$ at 300 K.

</details>

### 6.7 Semiconductor Devices

**Light-emitting diodes (LEDs).** Under forward bias, electrons and holes are injected into the
Depletion region where they recombine radiatively. The emission wavelength is determined by the Band
gap: $\lambda = hc/E_g$. GaAs ($E_g = 1.42$ eV) emits in the infrared; GaN ($E_g = 3.4$ eV) Emits in
the ultraviolet; InGaN alloys span the visible spectrum.

**Solar cells.** A p-n junction under illumination generates electron--hole pairs. The built-in
Field separates them, producing a photocurrent. The open-circuit voltage satisfies
$V_◆LB◆\mathrm◆LB◆OC◆RB◆ \lt E_g/e$ ( $V_◆LB◆\mathrm◆LB◆OC◆RB◆ \approx 0.7\,E_g/e$). The power conversion Efficiency
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
2. **Meissner effect:** Complete expulsion of magnetic flux from the interior: $\mathbf◆LB◆B◆RB◆ = 0$
   inside a superconductor (for $T \lt T_c$ and $B \lt B_c$).
3. **Critical magnetic field:** Superconductivity is destroyed above
   $B_c(T) = B_c(0)[1 - (T/T_c)^2]$.
4. **Critical current density:** Superconductivity is destroyed above a critical current density
   $J_c$.

### 7.2 London Equations

The **London equations** describe the electromagnetic response of a superconductor:

$$\frac◆LB◆\partial \mathbf◆LB◆J◆RB◆_s◆RB◆◆LB◆\partial t◆RB◆ = \frac◆LB◆n_s e^2◆RB◆◆LB◆m_e◆RB◆\mathbf◆LB◆E◆RB◆$$

$$\nabla \times \mathbf◆LB◆J◆RB◆_s = -\frac◆LB◆n_s e^2◆RB◆◆LB◆m_e◆RB◆\mathbf◆LB◆B◆RB◆$$

Where $n_s$ is the density of superconducting electrons.

Combining with Maxwell's equations:

$$\nabla^2 \mathbf◆LB◆B◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\lambda_L^2◆RB◆\mathbf◆LB◆B◆RB◆$$

Where $\lambda_L = \sqrt◆LB◆m_e/(\mu_0 n_s e^2)◆RB◆$ is the **London penetration depth**.

The solution $\mathbf◆LB◆B◆RB◆(x) = B_0 e^◆LB◆-x/\lambda_L◆RB◆$ shows that magnetic fields decay exponentially
Inside the superconductor, explaining the Meissner effect.

### 7.3 BCS Theory

**BCS theory** (Bardeen, Cooper, Schrieffer, 1957) explains superconductivity through the formation
Of **Cooper pairs**.

**Cooper pairing.** Two electrons with opposite momenta and spins form a bound state via the
Electron-phonon interaction (the lattice mediates an effective attractive interaction). The Cooper
pair Has charge $2e$ and spin 0 (boson).

**The BCS gap equation:**

$$\Delta = V_◆LB◆\mathrm◆LB◆pair◆RB◆ \sum_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ \frac◆LB◆\Delta◆RB◆◆LB◆2E_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆◆RB◆ \tanh\left(\frac◆LB◆E_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆◆RB◆◆LB◆2k_B T◆RB◆\right)$$

Where $E_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ = \sqrt◆LB◆\xi_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆^2 + \Delta^2◆RB◆$ is the quasiparticle energy,
$\xi_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆$ Is the normal-state energy relative to $E_F$And $\Delta$ is the superconducting
energy gap.

At $T = 0$: $\Delta(0) = 2\hbar\omega_D\, e^◆LB◆-1/(N(E_F)V_◆LB◆\mathrm◆LB◆pair◆RB◆)◆RB◆$ (BCS formula).

The critical temperature:

$$k_B T_c = 1.13\,\hbar\omega_D\, e^◆LB◆-1/(N(E_F)V_◆LB◆\mathrm◆LB◆pair◆RB◆)◆RB◆$$

The ratio $2\Delta(0)/(k_B T_c) \approx 3.53$ is a universal BCS prediction.

### 7.4 Type I and Type II Superconductors

**Type I:** One critical field $B_c$. Below $B_c$: complete Meissner effect. Above $B_c$: normal
State. Examples: Pb, Hg, Al.

**Type II:** Two critical fields $B_◆LB◆c1◆RB◆ \lt B_◆LB◆c2◆RB◆$. For $B_◆LB◆c1◆RB◆ \lt B \lt B_◆LB◆c2◆RB◆$: **mixed state**
(vortices with normal cores in a superconducting matrix). For $B \gt B_◆LB◆c2◆RB◆$: normal state.
Examples: Nb, YBCO (high-$T_c$).

### 7.5 High-Temperature Superconductors

Discovered in 1986 (Bednorz and Müller). Cuprate superconductors such as YBa$_2$Cu$_3$O$_◆LB◆7-\delta◆RB◆$
(YBCO) have $T_c$ up to $\sim 135$ K. These are Type II, layered, and not fully explained by BCS
Theory (the pairing mechanism is still debated).

**Key properties of high-$T_c$ superconductors:**

- **d-wave pairing symmetry:** Unlike conventional BCS superconductors (s-wave), cuprates have a gap
  function with $d_◆LB◆x^2-y^2◆RB◆$ symmetry: $\Delta(\mathbf◆LB◆k◆RB◆) = \Delta_0(\cos k_x - \cos k_y)/2$ which
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

Under an electric field $\mathbf◆LB◆E◆RB◆$The equation of motion:

$$m_e\frac◆LB◆d\mathbf◆LB◆v◆RB◆◆RB◆◆LB◆dt◆RB◆ = -e\mathbf◆LB◆E◆RB◆ - \frac◆LB◆m_e\mathbf◆LB◆v◆RB◆◆RB◆◆LB◆\tau◆RB◆$$

In steady state ($d\mathbf◆LB◆v◆RB◆/dt = 0$): $\mathbf◆LB◆v◆RB◆_d = -\frac◆LB◆e\tau◆RB◆◆LB◆m_e◆RB◆\mathbf◆LB◆E◆RB◆$.

The current density: $\mathbf◆LB◆J◆RB◆ = -ne\mathbf◆LB◆v◆RB◆_d = \frac◆LB◆ne^2\tau◆RB◆◆LB◆m_e◆RB◆\mathbf◆LB◆E◆RB◆$.

The **Drude conductivity:**

$$\sigma = \frac◆LB◆ne^2\tau◆RB◆◆LB◆m_e◆RB◆$$

The **mean free path:** $\ell = v_F\tau$.

**Successes:** Explains Ohm's law ($\mathbf◆LB◆J◆RB◆ = \sigma\mathbf◆LB◆E◆RB◆$) and the Wiedemann--Franz law
($\kappa/\sigma = LT$ with $L = \pi^2 k_B^2/(3e^2)$).

**Failures:** Predicts the wrong temperature dependence ($\rho \propto T$But experiments show
$\rho \propto T^5$ at low $T$ for pure metals). Predicts
$\gamma_◆LB◆\mathrm◆LB◆electron◆RB◆ = \frac◆LB◆3◆RB◆◆LB◆2◆RB◆nk_B$ But experiments give
$\gamma_◆LB◆\mathrm◆LB◆electron◆RB◆ = \frac◆LB◆\pi^2◆RB◆◆LB◆2◆RB◆nk_B(T/T_F)$ (much smaller).

### 8.2 The Boltzmann Transport Equation

The semiclassical distribution function $f(\mathbf◆LB◆r◆RB◆, \mathbf◆LB◆k◆RB◆, t)$ satisfies:

$$\frac◆LB◆\partial f◆RB◆◆LB◆\partial t◆RB◆ + \mathbf◆LB◆v◆RB◆_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ \cdot \nabla_◆LB◆\mathbf◆LB◆r◆RB◆◆RB◆ f - \frac◆LB◆e\mathbf◆LB◆E◆RB◆◆RB◆◆LB◆\hbar◆RB◆\cdot\nabla_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ f = \left(\frac◆LB◆\partial f◆RB◆◆LB◆\partial t◆RB◆\right)_◆LB◆\mathrm◆LB◆coll◆RB◆$$

In the **relaxation time approximation:**

$$\left(\frac◆LB◆\partial f◆RB◆◆LB◆\partial t◆RB◆\right)_◆LB◆\mathrm◆LB◆coll◆RB◆ = -\frac◆LB◆f - f_0◆RB◆◆LB◆\tau◆RB◆$$

Where $f_0$ is the equilibrium distribution.

**Solution for conductivity.** In a uniform electric field with $f = f_0 + f_1$:

$$f_1 = e\tau\mathbf◆LB◆E◆RB◆\cdot\mathbf◆LB◆v◆RB◆_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆\frac◆LB◆\partial f_0◆RB◆◆LB◆\partial\varepsilon◆RB◆$$

The conductivity becomes:

$$\sigma = \frac◆LB◆e^2◆RB◆◆LB◆3◆RB◆\int \tau(\varepsilon)\,v^2(\varepsilon)\,g(\varepsilon)\left(-\frac◆LB◆\partial f_0◆RB◆◆LB◆\partial\varepsilon◆RB◆\right) d\varepsilon$$

At low $T$, $-\partial f_0/\partial\varepsilon \approx \delta(\varepsilon - \varepsilon_F)$So only
states Near $E_F$ contribute to transport. This explains why impurity scattering dominates at low
$T$ (even a small concentration of impurities affects states near $E_F$).

**Matthiessen's rule.** When multiple scattering mechanisms act independently, the total resistivity
Is approximately additive:

$$\rho(T) = \rho_0 + \rho_◆LB◆\mathrm◆LB◆ph◆RB◆(T)$$

Where $\rho_0$ is the residual resistivity (temperature-independent, from impurities and defects)
And $\rho_◆LB◆\mathrm◆LB◆ph◆RB◆(T)$ is the phonon contribution (proportional to $T$ at high $T$ and to $T^5$
At low $T$ via the Bloch--Grüneisen formula). The **resistance ratio**
$RRR = \rho(300\ \mathrm◆LB◆K◆RB◆)/\rho_0$ Is a measure of sample purity.

**Bloch--Grüneisen formula.** For electron--phonon scattering in a free electron metal:

$$\rho_◆LB◆\mathrm◆LB◆ph◆RB◆(T) \propto \left(\frac◆LB◆T◆RB◆◆LB◆\Theta_D◆RB◆\right)^5 \int_0^◆LB◆\Theta_D/T◆RB◆ \frac◆LB◆x^5◆RB◆◆LB◆(e^x - 1)(1 - e^◆LB◆-x◆RB◆)◆RB◆\,dx$$

At high $T$ ($T \gt \Theta_D$): $\rho_◆LB◆\mathrm◆LB◆ph◆RB◆ \propto T$ (linear, agreeing with the Drude
model). At low $T$ ($T \ll \Theta_D$): $\rho_◆LB◆\mathrm◆LB◆ph◆RB◆ \propto T^5$Consistent with experiment.

### 8.3 Thermal Conductivity

The thermal conductivity of electrons:

$$\kappa_e = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆c_e v_F \ell_e$$

Where $c_e = \frac◆LB◆\pi^2◆RB◆◆LB◆2◆RB◆nk_B(T/T_F)$ is the electronic specific heat. The phonon contribution:

$$\kappa_◆LB◆\mathrm◆LB◆ph◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆3◆RB◆C_V v_s \ell_◆LB◆\mathrm◆LB◆ph◆RB◆$$

The total thermal conductivity: $\kappa = \kappa_e + \kappa_◆LB◆\mathrm◆LB◆ph◆RB◆$.

### 8.4 The Hall Effect

When a magnetic field $\mathbf◆LB◆B◆RB◆ = B\hat◆LB◆\mathbf◆LB◆z◆RB◆◆RB◆$ is applied perpendicular to a current
$\mathbf◆LB◆J◆RB◆ = J_x\hat◆LB◆\mathbf◆LB◆x◆RB◆◆RB◆$A transverse electric field develops:

$$E_y = R_H J_x B$$

The **Hall coefficient:** $R_H = -1/(ne)$ for a single carrier type.

The **Hall angle:** $\theta_H = \arctan(E_y/E_x) = \omega_c\tau$ where $\omega_c = eB/m^*$ is the
Cyclotron frequency.

### 8.5 Effective Mass

Near a band extremum, the energy can be expanded:

$$\varepsilon(\mathbf◆LB◆k◆RB◆) = \varepsilon_0 + \frac◆LB◆\hbar^2◆RB◆◆LB◆2◆RB◆\sum_◆LB◆ij◆RB◆(m^◆LB◆-1◆RB◆)_◆LB◆ij◆RB◆k_i k_j$$

The **effective mass tensor**
$(m^◆LB◆-1◆RB◆)_◆LB◆ij◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\hbar^2◆RB◆\frac◆LB◆\partial^2 \varepsilon◆RB◆◆LB◆\partial k_i \partial k_j◆RB◆$
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

$$n_v = N\,e^◆LB◆-E_v/(k_B T)◆RB◆$$

Where $N$ is the number of lattice sites and $E_v$ is the vacancy formation energy ($\sim 1$ eV).

**Derivation.** Minimising the free energy $F = n_v E_v - T S_◆LB◆\mathrm◆LB◆config◆RB◆$ where
$S_◆LB◆\mathrm◆LB◆config◆RB◆ = k_B \ln\binom◆LB◆N◆RB◆◆LB◆n_v◆RB◆$:

$$\frac◆LB◆\partial F◆RB◆◆LB◆\partial n_v◆RB◆ = E_v + k_B T \ln\left(\frac◆LB◆n_v◆RB◆◆LB◆N - n_v◆RB◆\right) = 0$$

For $n_v \ll N$: $n_v = N e^◆LB◆-E_v/(k_B T)◆RB◆$. $\blacksquare$

### 9.2 Dislocations

- **Edge dislocation:** Extra half-plane inserted into the lattice. Burgers vector $\mathbf◆LB◆b◆RB◆$ is
  perpendicular to the dislocation line.
- **Screw dislocation:** The lattice is sheared. $\mathbf◆LB◆b◆RB◆$ is parallel to the dislocation line.

Dislocations enable **plastic deformation** at stresses far below the theoretical shear strength.
The Peach-Koehler force on a dislocation:

$$\mathbf◆LB◆F◆RB◆ = (\boldsymbol◆LB◆\sigma◆RB◆\cdot\mathbf◆LB◆b◆RB◆) \times \hat◆LB◆\mathbf◆LB◆t◆RB◆◆RB◆$$

Where $\boldsymbol◆LB◆\sigma◆RB◆$ is the stress tensor and $\hat◆LB◆\mathbf◆LB◆t◆RB◆◆RB◆$ is the unit tangent to the
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
  from the orbital response to an applied field (Lenz's law). $\chi_d \sim -10^◆LB◆-5◆RB◆$.
- **Paramagnetism:** Positive susceptibility ($\chi \gt 0$). Unpaired spins align with the field.
  Curie law: $\chi = C/T$ where $C = N\mu_0\mu_◆LB◆\mathrm◆LB◆eff◆RB◆^2/(3k_B)$.
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

$$\mu_◆LB◆\mathrm◆LB◆dia◆RB◆ = -\frac◆LB◆e^2 B◆RB◆◆LB◆6m_e◆RB◆\sum_◆LB◆i=1◆RB◆^◆LB◆Z◆RB◆\langle r_i^2 \rangle = -\frac◆LB◆e^2 Z B◆RB◆◆LB◆6m_e◆RB◆\langle r^2 \rangle$$

The susceptibility (per unit volume, with $n$ atoms per unit volume):

$$\chi_L = -\frac◆LB◆\mu_0 n e^2 Z \langle r^2 \rangle◆RB◆◆LB◆6m_e◆RB◆$$

This is independent of temperature and very small: $\chi_L \sim -10^◆LB◆-5◆RB◆$.

**Landau diamagnetism.** Free electrons also exhibit diamagnetism. The quantisation of electron
Orbits into Landau levels modifies the ground-state energy in an applied field:

$$\chi_◆LB◆\mathrm◆LB◆Landau◆RB◆ = -\frac◆LB◆1◆RB◆◆LB◆3◆RB◆\chi_P = -\frac◆LB◆\mu_0 \mu_B^2 g(\varepsilon_F)◆RB◆◆LB◆3◆RB◆$$

Where $\chi_P$ is the Pauli paramagnetic susceptibility. The total susceptibility of a free electron
Gas is $\chi = \chi_P + \chi_◆LB◆\mathrm◆LB◆Landau◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆3◆RB◆\chi_P$ (still paramagnetic, but Reduced
by one-third).

### 10.3 Paramagnetism

**Langevin paramagnetism (classical).** For $N$ non-interacting magnetic moments $\boldsymbol◆LB◆\mu◆RB◆$
Of magnitude $\mu$ in a field $B$:

$$M = N\mu\, L(\mu B/k_B T)$$

Where $L(x) = \coth x - 1/x$ is the Langevin function. At high temperature ($\mu B \ll k_B T$):

$$L(x) \approx \frac◆LB◆x◆RB◆◆LB◆3◆RB◆ \implies M \approx \frac◆LB◆N\mu^2 B◆RB◆◆LB◆3k_B T◆RB◆$$

Giving the **Curie law** $\chi = C/T$ with $C = N\mu_0\mu^2/(3k_B)$.

**Quantum treatment (Brillouin function).** For angular momentum $J$ with $g_J$ the Landé g-factor,
The magnetisation is:

$$M = Ng_J\mu_B J\, B_J(x)$$

Where $x = g_J\mu_B J B/(k_B T)$ and
$B_J(x) = \frac◆LB◆2J+1◆RB◆◆LB◆2J◆RB◆\coth\left(\frac◆LB◆2J+1◆RB◆◆LB◆2J◆RB◆x\right) - \frac◆LB◆1◆RB◆◆LB◆2J◆RB◆\coth\left(\frac◆LB◆x◆RB◆◆LB◆2J◆RB◆\right)$
Is the Brillouin function. For $J = 1/2$ (spin-1/2), $B_◆LB◆1/2◆RB◆(x) = \tanh x$.

**Pauli paramagnetism.** In a metal, the conduction electrons form a degenerate Fermi gas. Only
Electrons near $\varepsilon_F$ can flip their spins in response to a field:

$$\chi_P = \mu_0\mu_B^2\,g(\varepsilon_F) = \frac◆LB◆3\mu_0\mu_B^2 N◆RB◆◆LB◆2\varepsilon_F◆RB◆$$

This is temperature-independent (up to corrections of order $(T/T_F)^2$), in contrast to the Curie
Law. The ratio $\chi_P/\chi_◆LB◆\mathrm◆LB◆Curie◆RB◆ \sim T/T_F \sim 10^◆LB◆-2◆RB◆$ at room temperature, Explaining
why metals are only weakly paramagnetic.

### 10.4 Ferromagnetism and the Mean-Field Theory

In the **mean-field (Weiss) model**, each spin experiences an effective field:

$$B_◆LB◆\mathrm◆LB◆eff◆RB◆ = B_0 + \lambda M$$

Where $\lambda$ is the molecular field constant and $M$ is the magnetisation.

The spontaneous magnetisation satisfies:

$$M = N\mu_B\tanh\left(\frac◆LB◆\mu_B(B_0 + \lambda M)◆RB◆◆LB◆k_B T◆RB◆\right)$$

Setting $B_0 = 0$ and expanding for small $M$ near $T_C$:

$$M \approx \frac◆LB◆N\mu_B^2\lambda M◆RB◆◆LB◆k_B T_C◆RB◆$$

Giving the **Curie temperature:** $T_C = N\mu_B^2\lambda/k_B$.

The critical exponent $\beta = 1/2$ (mean-field value), compared with the experimental value
$\beta \approx 1/3$ (3D Ising universality class).

Above $T_C$The susceptibility follows the **Curie--Weiss law:**

$$\chi = \frac◆LB◆C◆RB◆◆LB◆T - T_C◆RB◆$$

<details>
<summary>Worked Example: Curie Temperature of Iron</summary>

Iron has $N = 8.49 \times 10^◆LB◆28◆RB◆$ atoms/m$^3$Magnetic moment $\mu = 2.22\,\mu_B$ per atom, And
$T_C = 1043$ K. From $T_C = N\mu^2\lambda/(3k_B)$:

$$\lambda = \frac◆LB◆3k_B T_C◆RB◆◆LB◆N\mu^2◆RB◆ = \frac◆LB◆3 \times 1.381 \times 10^◆LB◆-23◆RB◆ \times 1043◆RB◆◆LB◆8.49 \times 10^◆LB◆28◆RB◆ \times (2.22 \times 9.274 \times 10^◆LB◆-24◆RB◆)^2◆RB◆$$

$$\lambda = \frac◆LB◆4.32 \times 10^◆LB◆-20◆RB◆◆RB◆◆LB◆8.49 \times 10^◆LB◆28◆RB◆ \times 4.25 \times 10^◆LB◆-46◆RB◆◆RB◆ = \frac◆LB◆4.32 \times 10^◆LB◆-20◆RB◆◆RB◆◆LB◆3.61 \times 10^◆LB◆-17◆RB◆◆RB◆ = 1.20 \times 10^◆LB◆-3◆RB◆\ \mathrm◆LB◆T◆RB◆\,m/A$$

The corresponding exchange field at $T = 0$ ($M = N\mu$):

$$B_◆LB◆\mathrm◆LB◆ex◆RB◆ = \lambda M = 1.20 \times 10^◆LB◆-3◆RB◆ \times 8.49 \times 10^◆LB◆28◆RB◆ \times 2.22 \times 9.274 \times 10^◆LB◆-24◆RB◆ = 2100\ \mathrm◆LB◆T◆RB◆$$

This enormous effective field is purely quantum-mechanical in origin (exchange interaction).

</details>

### 10.5 Magnetic Domains

Below $T_C$A ferromagnet divides into **domains** of uniform magnetisation, separated by **domain
Walls** (Bloch walls). Domain formation reduces the magnetostatic energy.

The **domain wall width:** $\delta \sim \sqrt◆LB◆A/K◆RB◆$ where $A$ is the exchange stiffness and $K$ is
the Anisotropy constant. Typical values: $\delta \sim 100$ nm.

The wall energy per unit area: $\sigma_w \sim 4\sqrt◆LB◆AK◆RB◆$.

### 10.6 Magnetic Ordering

**Antiferromagnetism.** In antiferromagnets (e.g., MnO, NiO), adjacent spins align antiparallel due
To negative exchange interaction $J \lt 0$. The Néel temperature is:

$$T_N = \frac◆LB◆\lvert J\rvert z S(S+1)◆RB◆◆LB◆3k_B◆RB◆$$

Where $z$ is the number of nearest neighbours. The susceptibility peaks at $T_N$ and decreases at
Both higher and lower temperatures.

**Ferrimagnetism.** In ferrimagnets (e.g., Fe$_3$O$_4$), antiparallel sublattices have different
Magnetic moments, giving a net spontaneous magnetisation. The temperature dependence of $M(T)$ is
More complex than for simple ferromagnets.

**Heisenberg model.** The exchange interaction between neighbouring spins is described by:

$$\hat◆LB◆H◆RB◆ = -\sum_◆LB◆\langle i,j\rangle◆RB◆ J_◆LB◆ij◆RB◆\,\hat◆LB◆\mathbf◆LB◆S◆RB◆◆RB◆_i \cdot \hat◆LB◆\mathbf◆LB◆S◆RB◆◆RB◆_j$$

For $J \gt 0$: ferromagnetic coupling (spins parallel). For $J \lt 0$: antiferromagnetic coupling
(spins antiparallel). The exchange integral $J$ arises from the combination of Coulomb repulsion and
The Pauli exclusion principle (not from magnetic dipole interactions, which are far too weak).

### 10.7 Spin Waves (Magnons)

At low temperatures ($T \ll T_C$), the reduction in magnetisation below saturation is carried by
Collective excitations called **spin waves** or **magnons**.

**Linear spin wave theory.** For a 1D chain of spins with nearest-neighbour exchange $J$ and Lattice
constant $a$The magnon dispersion is:

$$\hbar\omega(q) = 2JS[1 - \cos(qa)] = 4JS\sin^2\left(\frac◆LB◆qa◆RB◆◆LB◆2◆RB◆\right)$$

For small $q$ (long wavelength): $\hbar\omega \approx JSa^2 q^2$ (quadratic dispersion, unlike
Phonons which are linear).

The magnetisation at low $T$:

$$M(T) = M(0)\left[1 - \zeta(3/2)\left(\frac◆LB◆k_B T◆RB◆◆LB◆4\pi JS◆RB◆\right)^◆LB◆3/2◆RB◆\right]$$

In 3D, where $\zeta(3/2) \approx 2.612$ is the Riemann zeta function. The $T^◆LB◆3/2◆RB◆$ dependence
(Bloch $T^◆LB◆3/2◆RB◆$ law) is well confirmed experimentally and contrasts with the exponential Freeze-out
of a classical paramagnet.

Magnons are bosons and obey Bose--Einstein .../4-statistics-and-probability/2*statistics. They
contribute to the low-temperature Specific heat of ferromagnets: $C*◆LB◆\mathrm◆LB◆mag◆RB◆ \propto T^◆LB◆3/2◆RB◆$.

### 10.8 The de Haas--van Alphen Effect

In a magnetic field, the electron orbits are quantised into **Landau levels**:

$$\varepsilon_n = \left(n + \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\right)\hbar\omega_c, \quad \omega_c = \frac◆LB◆eB◆RB◆◆LB◆m^*◆RB◆$$

The density of states oscillates with $1/B$ (de Haas--van Alphen oscillations). The oscillation
period Gives the extremal cross-sectional area of the Fermi surface:

$$\Delta\left(\frac◆LB◆1◆RB◆◆LB◆B◆RB◆\right) = \frac◆LB◆2\pi e◆RB◆◆LB◆\hbar A_◆LB◆\mathrm◆LB◆ext◆RB◆◆RB◆$$

This is the primary experimental technique for mapping Fermi surfaces.

:::caution Common Pitfall The exchange interaction $J$ in the Heisenberg model is _not_ the magnetic
dipole interaction. The dipole energy between two spins is $\sim \mu_0\mu_B^2/a^3 \sim 10^◆LB◆-4◆RB◆$ eV,
far too small to Explain Curie temperatures of $\sim 10^3$ K ($\sim 0.1$ eV). The exchange
interaction is a Consequence of the Coulomb repulsion combined with the antisymmetry of the electron
wave function (Pauli principle), and is $10$--$100$ meV. :::

## 11. Problem Set

**Problem 1.** Calculate the packing fraction of the simple cubic lattice. Compare it with BCC and
FCC, And explain why SC is rarely observed in elemental metals.

**Problem 2.** Aluminium is FCC with $a = 0.405$ nm and $M = 26.98$ g/mol. Calculate the theoretical
Density and compare with the experimental value ($2.70\ \mathrm◆LB◆g◆RB◆/cm^3$).

**Problem 3.** A plane intercepts the crystallographic axes at $2a$, $3b$And $\infty c$. Determine the
Miller indices. A direction passes through the origin and the point $(1, -1, 0)$ in units of lattice
Constants. Write the direction indices.

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

**Problem 12.** Compare the Einstein and Debye predictions for $C_V/C_◆LB◆\mathrm◆LB◆Dulong◆RB◆--Petit◆RB◆$ as a
Function of $T/\Theta$ at $T/\Theta = 0.1$, $0.5$And $1.0$.

**Problem 13.** Sodium has $n = 2.65 \times 10^◆LB◆28◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-3◆RB◆$ conduction electrons. Calculate
The Fermi energy, Fermi wave vector, Fermi velocity, and Fermi temperature.

**Problem 14.** Using the tight-binding model for a 1D chain with nearest-neighbour hopping $t$: (a)
find the effective mass at the band bottom and band top, and (b) calculate the density of states
$g(\varepsilon)$ and show it diverges at the band edges.

**Problem 15.** A silicon sample is doped with $N_D = 10^◆LB◆22◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-3◆RB◆$ phosphorus atoms.
Calculate the electron and hole concentrations at 300 K ($n_i = 1.5 \times 10^◆LB◆16◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-3◆RB◆$)
And the position of the Fermi level relative to the conduction band edge.

**Problem 16.** A p-n junction is made from Si with $N_A = 10^◆LB◆23◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-3◆RB◆$ and
$N_D = 10^◆LB◆22◆RB◆\ \mathrm◆LB◆m◆RB◆^◆LB◆-3◆RB◆$. Calculate the built-in potential and the depletion width at 300 K.
($\varepsilon_s = 11.7\varepsilon_0$ for Si.)

**Problem 17.** A classical paramagnetic salt contains $N = 2.69 \times 10^◆LB◆27◆RB◆$ spins/m$^3$ with
$J = S = 1/2$ and $g = 2$. Calculate the magnetisation in a field of $B = 1$ T at $T = 300$ K and
$T = 4$ K.

**Problem 18.** Using the mean-field theory, derive the Curie--Weiss law $\chi = C/(T - T_C)$ for a
Ferromagnet above $T_C$. Express $C$ in terms of $N$, $\mu$And $k_B$.

**Hints and Selected Results:**

- _Problem 1:_ $\mathrm◆LB◆APF_◆RB◆◆LB◆\mathrm◆LB◆SC◆RB◆ = \pi/6 \approx 0.524$. SC has the lowest packing
  efficiency of the three cubic structures, which is why it is energetically unfavourable for most
  metals (polonium being the exception).
- _Problem 3:_ Reciprocals of $(2, 3, \infty)$ are $(1/2, 1/3, 0)$Giving $(3, 2, 0)$. Direction:
  $[1\bar◆LB◆1◆RB◆0]$.
- _Problem 4:_ Ideal $c/a = \sqrt◆LB◆8/3◆RB◆ \approx 1.633$. Actual $c/a = 1.623$. 6 atoms per
  conventional cell.
- _Problem 5:_ $\mathbf◆LB◆b◆RB◆_1 = (2\pi/a)(\hat◆LB◆y◆RB◆ + \hat◆LB◆z◆RB◆ - \hat◆LB◆x◆RB◆)$Etc. The 8 nearest reciprocal
  lattice points at $(\pm 2\pi/a)(\pm 1, \pm 1, \pm 1)/2$ form an FCC pattern.
- _Problem 7:_ First five FCC reflections: (111), (200), (220), (311), (222). Use
  $2d\sin\theta = \lambda$ with $d = a/\sqrt◆LB◆h^2+k^2+l^2◆RB◆$.
- _Problem 13:_ $\varepsilon_F = 3.24$ eV, $k_F = 9.22 \times 10^9$ m$^◆LB◆-1◆RB◆$, $v_F = 1.07 \times 10^6$
  m/s, $T_F = 3.76 \times 10^4$ K.
- _Problem 15:_ $n = N_D = 10^◆LB◆22◆RB◆$ m$^◆LB◆-3◆RB◆$, $p = n_i^2/N_D = 2.25 \times 10^◆LB◆10◆RB◆$ m$^◆LB◆-3◆RB◆$
  $E_c - E_F = k_B T\ln(N_c/N_D) \approx 0.214$ eV.
- _Problem 16:_ $V_0 = 0.716$ V, $W \approx 0.35$ $\mu$M.
- _Problem 17:_ At 300 K: $M \approx \mu_0 N \mu_B^2 B/(3k_B T) = 0.078$ A/m. At 4 K: the classical
  approximation breaks down; use the Brillouin function $B_◆LB◆1/2◆RB◆(x) = \tanh(x)$ with
  $x = \mu_B B/(k_B T)$.

:::caution Common Pitfall The free electron model and the nearly free electron model give band gaps
at the Brillouin zone Boundaries (where Bragg diffraction occurs). Do not confuse the real-space
lattice constant $a$ With the reciprocal lattice spacing $2\pi/a$. The first Brillouin zone extends
from $-\pi/a$ to $+\pi/a$ in each direction, not from $0$ to $a$. When calculating the Fermi wave
vector, always Use $k_F = (3\pi^2 n)^◆LB◆1/3◆RB◆$ --- the factor of $3\pi^2$ (not $6\pi^2$) accounts for
the factor Of 2 from spin. :::

## 12. Advanced Topics in Superconductivity

### 12.1 Ginzburg--Landau Theory

The Ginzburg--Landau (GL) theory provides a phenomenological description of superconductivity near
$T_c$ using a complex order parameter $\psi(\mathbf◆LB◆r◆RB◆)$ where $|\psi|^2 = n_s$ is the superfluid
density.

The GL free energy functional:

$$\mathcal◆LB◆F◆RB◆ = \mathcal◆LB◆F◆RB◆_n + \alpha|\psi|^2 + \frac◆LB◆\beta◆RB◆◆LB◆2◆RB◆|\psi|^4 + \frac◆LB◆1◆RB◆◆LB◆2m^*◆RB◆\left|\left(-i\hbar\nabla - e^*\mathbf◆LB◆A◆RB◆\right)\psi\right|^2 + \frac◆LB◆|\mathbf◆LB◆B◆RB◆|^2◆RB◆◆LB◆2\mu_0◆RB◆$$

Where $\alpha = \alpha_0(T - T_c)$ (negative below $T_c$), $\beta > 0$$m^* = 2m_e$$e^* = 2e$ (Cooper
pair charge), and $\mathbf◆LB◆A◆RB◆$ is the vector potential.

Minimising with respect to $\psi^*$ gives the **first GL equation**:

$$\alpha\psi + \beta|\psi|^2\psi + \frac◆LB◆1◆RB◆◆LB◆2m^*◆RB◆\left(-i\hbar\nabla - e^*\mathbf◆LB◆A◆RB◆\right)^2\psi = 0$$

Minimising with respect to $\mathbf◆LB◆A◆RB◆$ gives the **second GL equation** (supercurrent):

$$\mathbf◆LB◆J◆RB◆_s = \frac◆LB◆e^*\hbar◆RB◆◆LB◆m^*◆RB◆\left(\psi^*\nabla\psi - \psi\nabla\psi^*\right) - \frac◆LB◆e^◆LB◆*2◆RB◆◆RB◆◆LB◆m^*◆RB◆|\psi|^2\mathbf◆LB◆A◆RB◆$$

### 12.2 Coherence Length and Penetration Depth

Two fundamental length scales emerge from the GL theory:

**Coherence length** (characterises the spatial variation of $|\psi|$):

$$\xi(T) = \sqrt◆LB◆\frac◆LB◆\hbar^2◆RB◆◆LB◆2m^*|\alpha|◆RB◆◆RB◆ = \frac◆LB◆\xi_0◆RB◆◆LB◆\sqrt◆LB◆1 - T/T_c◆RB◆◆RB◆$$

**Penetration depth** (characterises the decay of $\mathbf◆LB◆B◆RB◆$):

$$\lambda(T) = \sqrt◆LB◆\frac◆LB◆m^*◆RB◆◆LB◆\mu_0 e^◆LB◆*2◆RB◆|\psi_\infty|^2◆RB◆◆RB◆ = \frac◆LB◆\lambda_0◆RB◆◆LB◆\sqrt◆LB◆1 - T/T_c◆RB◆◆RB◆$$

Where $|\psi_\infty|^2 = |\alpha|/\beta$ is the bulk equilibrium value.

The ratio of these length scales determines the superconductor type:

$$\kappa = \frac◆LB◆\lambda◆RB◆◆LB◆\xi◆RB◆$$

- $\kappa < 1/\sqrt◆LB◆2◆RB◆$: Type I (positive surface energy)
- $\kappa > 1/\sqrt◆LB◆2◆RB◆$: Type II (negative surface energy, mixed state favourable)

### 12.3 Abrikosov Vortices

In the mixed state of a Type II superconductor ($B_◆LB◆c1◆RB◆ < B < B_◆LB◆c2◆RB◆$), magnetic flux penetrates in
quantised vortices, each carrying one flux quantum:

$$\Phi_0 = \frac◆LB◆h◆RB◆◆LB◆2e◆RB◆ = 2.07 \times 10^◆LB◆-15◆RB◆\ \mathrm◆LB◆Wb◆RB◆$$

The vortex core (radius $\sim\xi$) is in the normal state, while supercurrents circulate around it
(decaying over $\sim\lambda$).

The upper critical field from GL theory:

$$B_◆LB◆c2◆RB◆ = \frac◆LB◆\Phi_0◆RB◆◆LB◆2\pi\xi^2◆RB◆$$

The lower critical field:

$$B_◆LB◆c1◆RB◆ = \frac◆LB◆\Phi_0◆RB◆◆LB◆4\pi\lambda^2◆RB◆\ln\kappa$$

The thermodynamic critical field:

$$B_c = \frac◆LB◆\Phi_0◆RB◆◆LB◆2\pi\sqrt◆LB◆2◆RB◆\xi\lambda◆RB◆$$

These satisfy $B_◆LB◆c1◆RB◆ < B_c < B_◆LB◆c2◆RB◆$ for $\kappa > 1/\sqrt◆LB◆2◆RB◆$.

### 12.4 Flux Quantisation and Josephson Effect

**Flux quantisation.** The GL order parameter must be single-valued. Integrating the supercurrent
around a closed loop enclosing flux $\Phi$:

$$\oint \nabla\theta \cdot d\mathbf◆LB◆l◆RB◆ = \frac◆LB◆2\pi\Phi◆RB◆◆LB◆\Phi_0◆RB◆ = 2\pi n$$

Where $\theta$ is the phase of $\psi$ and $n$ is an integer. Hence $\Phi = n\Phi_0$.

**DC Josephson effect.** For a superconductor--insulator--superconductor (SIS) junction with phase
difference $\delta$:

$$I = I_c \sin\delta$$

Where $I_c$ is the critical current.

**AC Josephson effect.** Applying a voltage $V$ across the junction causes the phase to evolve as
$\dot◆LB◆\delta◆RB◆ = 2eV/\hbar$Giving:

$$I = I_c\sin\!\left(\delta_0 + \frac◆LB◆2eV◆RB◆◆LB◆\hbar◆RB◆t\right)$$

The oscillation frequency $\nu = 2eV/h$ provides the basis for the Josephson voltage standard:
$V = n(h/2e)\nu$.

<details>
<summary>Worked Example 12.1: Type I vs Type II Classification</summary>

Niobium has $\xi_0 = 39$ nm and $\lambda_0 = 39$ nm, giving
$\kappa = \lambda/\xi = 1.0 > 1/\sqrt◆LB◆2◆RB◆ \approx 0.71$. Therefore Nb is Type II.

$$B_◆LB◆c2◆RB◆ = \frac◆LB◆\Phi_0◆RB◆◆LB◆2\pi\xi^2◆RB◆ = \frac◆LB◆2.07 \times 10^◆LB◆-15◆RB◆◆RB◆◆LB◆2\pi \times (39 \times 10^◆LB◆-9◆RB◆)^2◆RB◆ = \frac◆LB◆2.07 \times 10^◆LB◆-15◆RB◆◆RB◆◆LB◆9.55 \times 10^◆LB◆-15◆RB◆◆RB◆ \approx 0.217\ \mathrm◆LB◆T◆RB◆$$

The experimental $B_◆LB◆c2◆RB◆(0) \approx 0.4$ T. The discrepancy arises because the GL expressions use
$\xi$ and $\lambda$ at $T_c$While the actual values differ at $T = 0$.

For aluminium: $\xi_0 = 1600$ nm, $\lambda_0 = 16$ nm, $\kappa = 0.01 \ll 1/\sqrt◆LB◆2◆RB◆$. Al is
strongly Type I.

</details>

<details>
<summary>Worked Example 12.2: Josephson Junction Frequency</summary>

A voltage $V = 1\ \mu$V is applied across a Josephson junction:

$$\nu = \frac◆LB◆2eV◆RB◆◆LB◆h◆RB◆ = \frac◆LB◆2 \times 1.602 \times 10^◆LB◆-19◆RB◆ \times 10^◆LB◆-6◆RB◆◆RB◆◆LB◆6.626 \times 10^◆LB◆-34◆RB◆◆RB◆ = \frac◆LB◆3.204 \times 10^◆LB◆-25◆RB◆◆RB◆◆LB◆6.626 \times 10^◆LB◆-34◆RB◆◆RB◆ = 4.836 \times 10^◆LB◆8◆RB◆\ \mathrm◆LB◆Hz◆RB◆ \approx 483.6\ \mathrm◆LB◆MHz◆RB◆$$

The convenient relation is $\nu/\text◆LB◆GHz◆RB◆ = 483.6 \times V/\mu\text◆LB◆V◆RB◆$. This precise
frequency-voltage relation is used to maintain the volt standard worldwide.

</details>

## 13. Topological Insulators and Semimetals

### 13.1 Berry Phase

When an electron adiabatically traverses a closed loop in $\mathbf◆LB◆k◆RB◆$-space, its Bloch state
acquires a geometric phase:

$$\gamma_n(\mathcal◆LB◆C◆RB◆) = i\oint_◆LB◆\mathcal◆LB◆C◆RB◆◆RB◆ \langle u_◆LB◆n\mathbf◆LB◆k◆RB◆◆RB◆|\nabla_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ u_◆LB◆n\mathbf◆LB◆k◆RB◆◆RB◆\rangle \cdot d\mathbf◆LB◆k◆RB◆$$

The **Berry curvature** is the $\mathbf◆LB◆k◆RB◆$-space analog of a magnetic field:

$$\boldsymbol◆LB◆\Omega◆RB◆_n(\mathbf◆LB◆k◆RB◆) = \nabla_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ \times \langle u_◆LB◆n\mathbf◆LB◆k◆RB◆◆RB◆|i\nabla_◆LB◆\mathbf◆LB◆k◆RB◆◆RB◆ u_◆LB◆n\mathbf◆LB◆k◆RB◆◆RB◆\rangle$$

The Berry phase for a loop $\mathcal◆LB◆C◆RB◆$ enclosing area $\mathcal◆LB◆A◆RB◆$ is:

$$\gamma = \int_◆LB◆\mathcal◆LB◆A◆RB◆◆RB◆ \boldsymbol◆LB◆\Omega◆RB◆ \cdot d\mathcal◆LB◆A◆RB◆$$

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

$$\varepsilon(\mathbf◆LB◆k◆RB◆) = \pm\hbar v_F |\mathbf◆LB◆k◆RB◆ - \mathbf◆LB◆k◆RB◆_W|$$

Weyl nodes come in pairs of opposite chirality and are topologically protected. Key signatures:

- **Fermi arcs**: Surface states connecting projections of Weyl nodes of opposite chirality
- **Chiral anomaly**: In parallel $\mathbf◆LB◆E◆RB◆$ and $\mathbf◆LB◆B◆RB◆$ fields, charge is pumped between
  Weyl nodes, giving negative magnetoresistance
- **Anomalous Hall effect**: Even without magnetic order

**Dirac semimetals** have fourfold-degenerate Dirac points (two overlapping Weyl points of opposite
chirality). Examples: Na$_3$Bi, Cd$_3$As$_2$.

<details>
<summary>Worked Example 13.1: Chern Number and Quantum Hall Effect</summary>

The **Chern number** for a 2D band is the integral of the Berry curvature over the Brillouin zone:

$$C = \frac◆LB◆1◆RB◆◆LB◆2\pi◆RB◆\int_◆LB◆\text◆LB◆BZ◆RB◆ \Omega_z(\mathbf◆LB◆k◆RB◆)\, d^2k$$

The Chern number is an integer (topological invariant). The Hall conductivity is quantised:

$$\sigma_◆LB◆xy◆RB◆ = C\frac◆LB◆e^2◆RB◆◆LB◆h◆RB◆$$

For the integer quantum Hall effect with filling factor $\nu$, $C = \nu$.

The TKNN formula (Thouless, Kohmoto, Nightingale, den Nijs, 1982) established that the quantum Hall
conductance is a topological invariant, explaining its remarkable precision and robustness against
disorder.

</details>

## 14. Many-Body Physics in Solids

### 14.1 Electron--Electron Interactions: Screening

In a metal, the Coulomb interaction between electrons is screened by the other electrons. The
**Thomas--Fermi screening wavevector**:

$$q_◆LB◆\text◆LB◆TF◆RB◆^2 = \frac◆LB◆e^2 g(\varepsilon_F)◆RB◆◆LB◆\varepsilon_0◆RB◆ = \frac◆LB◆4k_F◆RB◆◆LB◆\pi a_0◆RB◆$$

Where $a_0 = 4\pi\varepsilon_0\hbar^2/(m_e e^2)$ is the Bohr radius. The screened potential:

$$V_◆LB◆\text◆LB◆scr◆RB◆(r) = \frac◆LB◆e^2◆RB◆◆LB◆4\pi\varepsilon_0 r◆RB◆\,e^◆LB◆-q_◆LB◆\text◆LB◆TF◆RB◆ r◆RB◆$$

The screening length $\lambda_◆LB◆\text◆LB◆TF◆RB◆ = 1/q_◆LB◆\text◆LB◆TF◆RB◆ \sim 0.5$ Å in metals (about one atomic
spacing), meaning the Coulomb interaction is very short-ranged.

### 14.2 The Hubbard Model

The Hubbard model captures the competition between kinetic energy (delocalisation) and on-site
Coulomb repulsion (localisation):

$$\hat◆LB◆H◆RB◆ = -t\sum_◆LB◆\langle i,j\rangle,\sigma◆RB◆\hat◆LB◆c◆RB◆_◆LB◆i\sigma◆RB◆^\dagger\hat◆LB◆c◆RB◆_◆LB◆j\sigma◆RB◆ + U\sum_i \hat◆LB◆n◆RB◆_◆LB◆i\uparrow◆RB◆\hat◆LB◆n◆RB◆_◆LB◆i\downarrow◆RB◆$$

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

$$k_B T_K \sim D\,e^◆LB◆-1/(N(E_F)J)◆RB◆$$

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

$$\frac◆LB◆m^*◆RB◆◆LB◆m_e◆RB◆ = \frac◆LB◆\gamma◆RB◆◆LB◆\gamma_0◆RB◆ \approx \frac◆LB◆1000◆RB◆◆LB◆1◆RB◆ = 1000$$

This enormous enhancement arises from the Kondo effect: the $4f$ electrons of Ce hybridise with
conduction electrons, forming heavy quasiparticles. The Kondo temperature $T_K \sim 10$ K is the
characteristic energy scale.

Similarly, the Pauli susceptibility is enhanced: $\chi/\chi_0 = m^*/m_e = 1000$.

</details>

## 15. Advanced Semiconductor Physics

### 15.1 MOSFET Operation in Detail

In an n-channel MOSFET, the gate voltage $V_G$ controls the channel charge:

**Threshold voltage:**

$$V_T = V_◆LB◆FB◆RB◆ + 2\phi_F + \frac◆LB◆\sqrt◆LB◆2\varepsilon_s q N_A(2\phi_F)◆RB◆◆RB◆◆LB◆C_◆LB◆ox◆RB◆◆RB◆$$

Where $V_◆LB◆FB◆RB◆$ is the flat-band voltage, $\phi_F = (k_BT/q)\ln(N_A/n_i)$ is the bulk Fermi
potential, and $C_◆LB◆ox◆RB◆ = \varepsilon_◆LB◆ox◆RB◆/t_◆LB◆ox◆RB◆$ is the oxide capacitance.

**Drain current (long-channel, above threshold):**

$$I_D = \mu_n C_◆LB◆ox◆RB◆\frac◆LB◆W◆RB◆◆LB◆L◆RB◆\left[\left(V_G - V_T\right)V_D - \frac◆LB◆V_D^2◆RB◆◆LB◆2◆RB◆\right] \quad \text◆LB◆(linear region)◆RB◆$$

$$I_D = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\mu_n C_◆LB◆ox◆RB◆\frac◆LB◆W◆RB◆◆LB◆L◆RB◆(V_G - V_T)^2 \quad \text◆LB◆(saturation,  V_D \geq V_G - V_T \text◆LB◆)◆RB◆$$

**Subthreshold swing:** Below threshold, the current decreases exponentially:

$$I_D \propto e^◆LB◆qV_G/(nk_BT)◆RB◆$$

Where $n = 1 + C_d/C_◆LB◆ox◆RB◆$ and $C_d$ is the depletion capacitance. The minimum subthreshold swing at
room temperature is $S = nk_BT\ln 10/q \approx 60$ mV/decade.

### 15.2 Bipolar Junction Transistor (BJT)

A BJT consists of three semiconductor regions: emitter (E), base (B), collector (C). In active mode
(E-B forward biased, C-B reverse biased):

**Ebers--Moll model:**

$$I_E = I_◆LB◆ES◆RB◆\left(e^◆LB◆V_◆LB◆BE◆RB◆/V_T◆RB◆ - 1\right) - \alpha_R I_◆LB◆CS◆RB◆\left(e^◆LB◆V_◆LB◆BC◆RB◆/V_T◆RB◆ - 1\right)$$

$$I_C = \alpha_F I_◆LB◆ES◆RB◆\left(e^◆LB◆V_◆LB◆BE◆RB◆/V_T◆RB◆ - 1\right) - I_◆LB◆CS◆RB◆\left(e^◆LB◆V_◆LB◆BC◆RB◆/V_T◆RB◆ - 1\right)$$

Where $\alpha_F$ is the forward current gain ( $0.98$--$0.998$) and $V_T = k_BT/e$.

The common-emitter current gain $\beta = \alpha_F/(1 - \alpha_F)$. For $\alpha_F = 0.99$:
$\beta = 99$.

### 15.3 Excitons and Polaritons

**Wannier--Mott excitons** (in semiconductors with small $\varepsilon_r$ and small effective mass):

$$E_n = E_g - \frac◆LB◆\mu e^4◆RB◆◆LB◆2(4\pi\varepsilon_0\varepsilon_r)^2\hbar^2 n^2◆RB◆ = E_g - \frac◆LB◆R^*◆RB◆◆LB◆n^2◆RB◆$$

Where $R^* = \frac◆LB◆\mu◆RB◆◆LB◆m_e\varepsilon_r^2◆RB◆ \times 13.6$ eV is the effective Rydberg.

For GaAs ($m_e^* = 0.067m_e$$m_h^* = 0.45m_e$$\varepsilon_r = 12.9$):

$$\mu = \frac◆LB◆0.067 \times 0.45◆RB◆◆LB◆0.067 + 0.45◆RB◆m_e = 0.058m_e$$

$$R^* = \frac◆LB◆0.058◆RB◆◆LB◆12.9^2◆RB◆ \times 13.6 = \frac◆LB◆0.058◆RB◆◆LB◆166.4◆RB◆ \times 13.6 = 4.7\ \text◆LB◆meV◆RB◆$$

$$a_B^* = \frac◆LB◆\varepsilon_r m_e◆RB◆◆LB◆\mu◆RB◆a_0 = \frac◆LB◆12.9◆RB◆◆LB◆0.058◆RB◆ \times 0.529\ \text◆LB◆Å = 118\ \text◆LB◆Å \approx 12\ \text◆LB◆nm◆RB◆$$

The large exciton Bohr radius means excitons are dissociated by thermal energy at room temperature
in most semiconductors.

**Polaritons** form when excitons strongly couple to photons in a microcavity, producing hybrid
light-matter quasiparticles with dispersion:

$$E_◆LB◆\pm◆RB◆(k) = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\left(E_◆LB◆\text◆LB◆cav◆RB◆(k) + E_◆LB◆\text◆LB◆exc◆RB◆(k)\right) \pm \frac◆LB◆1◆RB◆◆LB◆2◆RB◆\sqrt◆LB◆\Omega_R^2 + \delta^2(k)◆RB◆$$

Where $\Omega_R$ is the Rabi splitting and $\delta = E_◆LB◆\text◆LB◆cav◆RB◆ - E_◆LB◆\text◆LB◆exc◆RB◆$ is the detuning.

<details>
<summary>Worked Example 15.1: MOSFET Drain Current</summary>

An n-channel MOSFET has $\mu_n = 450$ cm$^2$/(V$\cdot$S), $C_◆LB◆ox◆RB◆ = 34.5$ nF/cm$^2$ ($t_◆LB◆ox◆RB◆ = 10$
nm SiO$_2$), $W = 10$ $\mu$M, $L = 1$ $\mu$M, $V_T = 0.7$ V.

For $V_G = 2$ V, $V_D = 0.5$ V (linear region since $V_D < V_G - V_T = 1.3$ V):

$$I_D = 450 \times 34.5 \times 10^◆LB◆-9◆RB◆ \times \frac◆LB◆10 \times 10^◆LB◆-4◆RB◆◆RB◆◆LB◆1 \times 10^◆LB◆-4◆RB◆◆RB◆\left[1.3 \times 0.5 - \frac◆LB◆0.25◆RB◆◆LB◆2◆RB◆\right]$$

$$= 450 \times 3.45 \times 10^◆LB◆-7◆RB◆ \times 10 \times [0.65 - 0.125]$$

$$= 1.55 \times 10^◆LB◆-3◆RB◆ \times 0.525 = 8.14 \times 10^◆LB◆-4◆RB◆\ \text◆LB◆A◆RB◆ = 0.814\ \text◆LB◆mA◆RB◆$$

At saturation ($V_D = 2$ V):

$$I_D = \frac◆LB◆1◆RB◆◆LB◆2◆RB◆ \times 450 \times 34.5 \times 10^◆LB◆-9◆RB◆ \times 10 \times (1.3)^2 = 1.30\ \text◆LB◆mA◆RB◆$$

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

(b) Calculate $B_◆LB◆c1◆RB◆$ and $B_◆LB◆c2◆RB◆$ at $T = 0.9\,T_c$.

(c) How many flux quanta per unit area are present at $B = B_◆LB◆c2◆RB◆/2$?

**Solution:**

(a) At $T = 0.9\,T_c$: $1 - T/T_c = 0.1$.

$$\xi = \frac◆LB◆\xi_0◆RB◆◆LB◆\sqrt◆LB◆0.1◆RB◆◆RB◆ = \frac◆LB◆5◆RB◆◆LB◆0.316◆RB◆ = 15.8\ \text◆LB◆nm◆RB◆, \quad \lambda = \frac◆LB◆50◆RB◆◆LB◆\sqrt◆LB◆0.1◆RB◆◆RB◆ = 158\ \text◆LB◆nm◆RB◆$$

$$\kappa = \lambda/\xi = 10 \quad \text◆LB◆(independent of  T\text◆LB◆)◆RB◆$$

(b)
$B_◆LB◆c2◆RB◆ = \frac◆LB◆\Phi_0◆RB◆◆LB◆2\pi\xi^2◆RB◆ = \frac◆LB◆2.07 \times 10^◆LB◆-15◆RB◆◆RB◆◆LB◆2\pi \times (15.8 \times 10^◆LB◆-9◆RB◆)^2◆RB◆ = \frac◆LB◆2.07 \times 10^◆LB◆-15◆RB◆◆RB◆◆LB◆1.57 \times 10^◆LB◆-15◆RB◆◆RB◆ = 1.32\ \text◆LB◆T◆RB◆$

$$B_◆LB◆c1◆RB◆ = \frac◆LB◆\Phi_0◆RB◆◆LB◆4\pi\lambda^2◆RB◆\ln\kappa = \frac◆LB◆2.07 \times 10^◆LB◆-15◆RB◆◆RB◆◆LB◆4\pi \times (158 \times 10^◆LB◆-9◆RB◆)^2◆RB◆\ln 10 = \frac◆LB◆2.07 \times 10^◆LB◆-15◆RB◆◆RB◆◆LB◆3.14 \times 10^◆LB◆-13◆RB◆◆RB◆ \times 2.303 = 1.52 \times 10^◆LB◆-3◆RB◆\ \text◆LB◆T◆RB◆ = 1.52\ \text◆LB◆mT◆RB◆$$

(c) At $B = B_◆LB◆c2◆RB◆/2 = 0.66$ T: number of flux quanta per m$^2$ =
$B/\Phi_0 = 0.66/(2.07 \times 10^◆LB◆-15◆RB◆) = 3.19 \times 10^◆LB◆14◆RB◆\ \text◆LB◆m◆RB◆^◆LB◆-2◆RB◆$.

Average spacing between vortices:
$a \approx (2\Phi_0/(\sqrt◆LB◆3◆RB◆B))^◆LB◆1/2◆RB◆ = (2 \times 2.07 \times 10^◆LB◆-15◆RB◆/(1.73 \times 0.66))^◆LB◆1/2◆RB◆ = 60\ \text◆LB◆nm◆RB◆$.

</details>

<details>
<summary>Problem 20: Berry Phase in a Tight-Binding Model</summary>

Consider a spinless particle on a 1D lattice with Hamiltonian:

$$\hat◆LB◆H◆RB◆ = \sum_n \left(t\,e^◆LB◆i\phi◆RB◆\,\hat◆LB◆c◆RB◆_n^\dagger\hat◆LB◆c◆RB◆_◆LB◆n+1◆RB◆ + t\,e^◆LB◆-i\phi◆RB◆\,\hat◆LB◆c◆RB◆_◆LB◆n+1◆RB◆^\dagger\hat◆LB◆c◆RB◆_n\right)$$

(a) Show that the dispersion is $\varepsilon(k) = -2t\cos(k + \phi)$.

(b) Calculate the Berry phase for an electron traversing the Brillouin zone $-\pi/a \to \pi/a$.

(c) Show that the Berry phase is $\gamma = 2\pi\phi/(2\pi/a)$ and interpret physically.

**Solution:**

(a) Substituting $\psi_k(n) = e^◆LB◆ikna◆RB◆/\sqrt◆LB◆N◆RB◆$:

$$\varepsilon(k)\psi_k(n) = t\,e^◆LB◆i\phi◆RB◆\,e^◆LB◆ika◆RB◆\psi_k(n) + t\,e^◆LB◆-i\phi◆RB◆\,e^◆LB◆-ika◆RB◆\psi_k(n)$$

$$\varepsilon(k) = t\,e^◆LB◆i(k+\phi)a◆RB◆ + t\,e^◆LB◆-i(k+\phi)a◆RB◆ = -2t\cos(k + \phi)$$

(b) The Bloch function is $u_k(n) = e^◆LB◆i\phi n◆RB◆$ (up to normalisation). The Berry connection:

$$A(k) = \langle u_k | i\partial_k | u_k \rangle = i \cdot i\phi = -\phi$$

Wait, more carefully. In a continuum formulation:

$$A(k) = \langle u_k | \frac◆LB◆\partial◆RB◆◆LB◆\partial k◆RB◆ | u_k \rangle = \frac◆LB◆\partial◆RB◆◆LB◆\partial k◆RB◆(\arg u_k) = \frac◆LB◆\partial◆RB◆◆LB◆\partial k◆RB◆(0) = 0$$

Since $u_k(x) = e^◆LB◆ikx◆RB◆$ has $\partial_k \ln u_k = ix$ and $\langle u_k|ix|u_k\rangle$ averages to
zero.

Actually, for this model the Berry phase arises from the $\phi$-dependent phase winding. Let us use
the proper formulation. The wavefunction $\psi_k(x) = e^◆LB◆ikx◆RB◆u_k(x)$ where $u_k$ has the periodicity
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

A silicon p-n junction has $N_A = 10^◆LB◆24◆RB◆$ m$^◆LB◆-3◆RB◆$ and $N_D = 10^◆LB◆22◆RB◆$ m$^◆LB◆-3◆RB◆$ at $T = 300$ K.

(a) Calculate the built-in potential $V_0$.

(b) Calculate the depletion width $W$ and the depletion capacitance per unit area at zero bias.

(c) Under forward bias $V = 0.5$ V, calculate the current density. Assume $I_0/A = 10^◆LB◆-12◆RB◆$
A/m$^2$.

(d) What is the breakdown voltage if the critical field for Zener breakdown in Si is
$E_◆LB◆\text◆LB◆crit◆RB◆ \approx 3 \times 10^8$ V/m?

**Solution:**

(a)
$V_0 = \frac◆LB◆k_BT◆RB◆◆LB◆e◆RB◆\ln\frac◆LB◆N_A N_D◆RB◆◆LB◆n_i^2◆RB◆ = 0.02585 \times \ln\frac◆LB◆10^◆LB◆24◆RB◆ \times 10^◆LB◆22◆RB◆◆RB◆◆LB◆(1.5 \times 10^◆LB◆16◆RB◆)^2◆RB◆$

$$= 0.02585 \times \ln\frac◆LB◆10^◆LB◆46◆RB◆◆RB◆◆LB◆2.25 \times 10^◆LB◆32◆RB◆◆RB◆ = 0.02585 \times \ln(4.44 \times 10^◆LB◆13◆RB◆)$$

$$= 0.02585 \times 31.43 = 0.812\ \text◆LB◆V◆RB◆$$

(b) $W = \sqrt◆LB◆\frac◆LB◆2\varepsilon_s V_0◆RB◆◆LB◆e◆RB◆\left(\frac◆LB◆1◆RB◆◆LB◆N_A◆RB◆ + \frac◆LB◆1◆RB◆◆LB◆N_D◆RB◆\right)◆RB◆$

Since $N_D \ll N_A$The depletion region extends mainly into the n-side:

$$W \approx \sqrt◆LB◆\frac◆LB◆2 \times 11.7 \times 8.85 \times 10^◆LB◆-12◆RB◆ \times 0.812◆RB◆◆LB◆1.6 \times 10^◆LB◆-19◆RB◆ \times 10^◆LB◆22◆RB◆◆RB◆◆RB◆ = \sqrt◆LB◆\frac◆LB◆1.68 \times 10^◆LB◆-10◆RB◆◆RB◆◆LB◆1.6 \times 10^◆LB◆-3◆RB◆◆RB◆◆RB◆ = \sqrt◆LB◆1.05 \times 10^◆LB◆-7◆RB◆◆RB◆ = 3.24 \times 10^◆LB◆-4◆RB◆\ \text◆LB◆m◆RB◆ = 0.324\ \text◆LB◆mm◆RB◆$$

This is a wide depletion region because of the asymmetric doping.

$$C/A = \frac◆LB◆\varepsilon_s◆RB◆◆LB◆W◆RB◆ = \frac◆LB◆11.7 \times 8.85 \times 10^◆LB◆-12◆RB◆◆RB◆◆LB◆3.24 \times 10^◆LB◆-4◆RB◆◆RB◆ = 3.19 \times 10^◆LB◆-7◆RB◆\ \text◆LB◆F◆RB◆/m^2 = 319\ \text◆LB◆nF◆RB◆/m^2$$

(c)
$J = J_0(e^◆LB◆eV/(k_BT)◆RB◆ - 1) = 10^◆LB◆-12◆RB◆(e^◆LB◆0.5/0.02585◆RB◆ - 1) = 10^◆LB◆-12◆RB◆(e^◆LB◆19.34◆RB◆ - 1) = 10^◆LB◆-12◆RB◆ \times 2.48 \times 10^8 = 2.48 \times 10^◆LB◆-4◆RB◆\ \text◆LB◆A◆RB◆/m^2 = 0.248\ \text◆LB◆mA◆RB◆/m^2$

(d) The maximum field occurs at the metallurgical junction and for a one-sided junction is
approximately $E_◆LB◆\max◆RB◆ = 2V_0/W$. For breakdown: $V_◆LB◆BD◆RB◆ \approx E_◆LB◆\text◆LB◆crit◆RB◆ \cdot W_◆LB◆BD◆RB◆/2$.

With $W_◆LB◆BD◆RB◆ = \sqrt◆LB◆2\varepsilon_s V_◆LB◆BD◆RB◆/(eN_D)◆RB◆$ (one-sided):

$$V_◆LB◆BD◆RB◆ = \frac◆LB◆\varepsilon_s E_◆LB◆\text◆LB◆crit◆RB◆^2◆RB◆◆LB◆2eN_D◆RB◆ = \frac◆LB◆11.7 \times 8.85 \times 10^◆LB◆-12◆RB◆ \times (3 \times 10^8)^2◆RB◆◆LB◆2 \times 1.6 \times 10^◆LB◆-19◆RB◆ \times 10^◆LB◆22◆RB◆◆RB◆ = \frac◆LB◆9.29 \times 10^◆LB◆-1◆RB◆◆RB◆◆LB◆3.2 \times 10^◆LB◆-3◆RB◆◆RB◆ = 290\ \text◆LB◆V◆RB◆$$

</details>

## 16. Advanced Semiconductor Physics (Continued)

### 16.1 Quantum Hall Effect

When a 2D electron gas (2DEG) is placed in a strong perpendicular magnetic field at low temperature,
the Hall resistance shows quantised plateaux:

$$R_◆LB◆xy◆RB◆ = \frac◆LB◆h◆RB◆◆LB◆\nu e^2◆RB◆ = \frac◆LB◆R_K◆RB◆◆LB◆\nu◆RB◆$$

Where $\nu = 1, 2, 3, \ldots$ is an integer and $R_K = h/e^2 \approx 25812.8\,\Omega$ is the von
Klitzing constant.

**Integer Quantum Hall Effect (IQHE)** (von Klitzing, 1980):

- Occurs when the filling factor $\nu = n_◆LB◆2D◆RB◆h/(eB)$ is an integer
- At these plateaux, the longitudinal resistance $R_◆LB◆xx◆RB◆ = 0$ (dissipationless transport)
- The quantisation is exact to better than 1 part in $10^◆LB◆10◆RB◆$Providing the resistance standard

**Fractional Quantum Hall Effect (FQHE)** (Tsui, Stormer, Gossard, 1982):

- Plateaux at $\nu = 1/3, 2/3, 2/5, 3/7, \ldots$
- Arises from electron--electron correlations (Laughlin wavefunction)
- Described by Chern--Simons topological field theory

**Composite fermions:** At $\nu = 1/2$The FQHE electrons bind two flux quanta to become "composite
fermions" that see zero effective field. The FQHE of electrons maps to the IQHE of composite
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
$\mathbf◆LB◆E◆RB◆ = S\nabla T$ where $S$ is the Seebeck coefficient.

**Peltier effect:** A current $I$ through a junction produces heat flow $\dot◆LB◆Q◆RB◆ = \Pi I$ where
$\Pi = ST$ (Kelvin relation).

**Figure of merit:** $ZT = S^2\sigma T/\kappa$ where $\sigma$ is electrical conductivity and
$\kappa$ is thermal conductivity.

The **Mott formula** relates the Seebeck coefficient to the energy derivative of the conductivity:

$$S = -\frac◆LB◆\pi^2 k_B^2 T◆RB◆◆LB◆3e◆RB◆\frac◆LB◆d\ln\sigma(\epsilon)◆RB◆◆LB◆d\epsilon◆RB◆\bigg|_◆LB◆\epsilon_F◆RB◆$$

Best thermoelectric materials: Bi$_2$Te$_3$ ($ZT \approx 1$ at 300 K), PbTe ($ZT \approx 1.5$ at 700
K), SnSe ($ZT \approx 2.6$ at 923 K).

<details>
<summary>Worked Example 16.1: Quantum Hall Plateaux</summary>

A 2DEG in a GaAs/AlGaAs heterostructure has $n_◆LB◆2D◆RB◆ = 3 \times 10^◆LB◆15◆RB◆$ m$^◆LB◆-2◆RB◆$.

(a) At $B = 10$ T:
$\nu = n_◆LB◆2D◆RB◆h/(eB) = 3 \times 10^◆LB◆15◆RB◆ \times 6.626 \times 10^◆LB◆-34◆RB◆/(1.6 \times 10^◆LB◆-19◆RB◆ \times 10) = 3 \times 10^◆LB◆15◆RB◆ \times 4.14 \times 10^◆LB◆-16◆RB◆ = 1.24$.

The filling factor $\nu \approx 1.24$ is close to $\nu = 1$So the $\nu = 1$ plateau is observed
with:

$$R_◆LB◆xy◆RB◆ = \frac◆LB◆h◆RB◆◆LB◆e^2◆RB◆ = 25812.8\,\Omega$$

(b) To observe the $\nu = 2$ plateau, we need $B = n_◆LB◆2D◆RB◆h/(2e) = 5$ T.

(c) The cyclotron energy at $B = 10$ T:

$$\hbar\omega_c = \hbar\frac◆LB◆eB◆RB◆◆LB◆m^*◆RB◆ = \frac◆LB◆1.055 \times 10^◆LB◆-34◆RB◆ \times 1.6 \times 10^◆LB◆-19◆RB◆ \times 10◆RB◆◆LB◆0.067 \times 9.11 \times 10^◆LB◆-31◆RB◆◆RB◆ = \frac◆LB◆1.688 \times 10^◆LB◆-33◆RB◆◆RB◆◆LB◆6.10 \times 10^◆LB◆-32◆RB◆◆RB◆ = 0.0277\,\text◆LB◆eV◆RB◆ = 27.7\,\text◆LB◆meV◆RB◆$$

For IQHE plateaux to be resolved: $k_BT \ll \hbar\omega_c$I.e., $T \ll 27.7/0.0862 \approx 321$ K.
Experiments are done at $T < 4$ K.

</details>

## Worked Examples

### Example 1: Bragg diffraction

**Problem.** X-rays of wavelength $0.154 \mathrm◆LB◆ nm◆RB◆$ are diffracted by a crystal with interplanar
spacing $d = 0.2 \mathrm◆LB◆ nm◆RB◆$. Find the first-order diffraction angle.

**Solution.**
$2d\sin\theta = n\lambda \implies \sin\theta = \frac◆LB◆0.154◆RB◆◆LB◆2 \times 0.2◆RB◆ = 0.385 \implies \theta = 22.7°$.

$\blacksquare$

### Example 2: Band gap

**Problem.** A semiconductor has a band gap of $1.1 \mathrm◆LB◆ eV◆RB◆$. Find the minimum wavelength of
light that can excite an electron across the gap.

**Solution.**
$\lambda = \frac◆LB◆hc◆RB◆◆LB◆E_g◆RB◆ = \frac◆LB◆1240 \mathrm◆LB◆ eV\cdot◆RB◆ nm◆RB◆◆RB◆◆LB◆1.1 \mathrm◆LB◆ eV◆RB◆◆RB◆ = 1127 \mathrm◆LB◆ nm◆RB◆$
(infrared).

$\blacksquare$

## Common Pitfalls

- **Confusing reciprocal and real space.** The reciprocal lattice is the Fourier transform of the
  real-space lattice; its vectors have dimensions of inverse length. **Fix:**
  $\vec◆LB◆b◆RB◆_1 = 2\pi \frac◆LB◆\vec◆LB◆a◆RB◆_2 \times \vec◆LB◆a◆RB◆_3◆RB◆◆LB◆\vec◆LB◆a◆RB◆_1 \cdot (\vec◆LB◆a◆RB◆_2 \times \vec◆LB◆a◆RB◆_3)◆RB◆$.
- **Wrong effective mass interpretation.** The effective mass $m^*$ can be negative near the top of
  a band; it reflects the curvature of $E(k)$. **Fix:**
  $1/m^* = \frac◆LB◆1◆RB◆◆LB◆\hbar^2◆RB◆\frac◆LB◆d^2E◆RB◆◆LB◆dk^2◆RB◆$; negative curvature gives negative effective mass.
- **Confusing metals, semiconductors, and insulators.** Metals: partially filled band.
  Semiconductors: small band gap ($\sim 1 \mathrm◆LB◆ eV◆RB◆$). Insulators: large band gap
  ($> 4 \mathrm◆LB◆ eV◆RB◆$). **Fix:** Band gap determines electrical properties; temperature can excite
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
