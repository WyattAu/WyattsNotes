---
title: Crystal Structures
tags:
  - Physics
  - University
---

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



:::
