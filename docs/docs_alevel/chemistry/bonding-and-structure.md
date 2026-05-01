---
title: Bonding & Structure
description:
  A-Level Chemistry notes on Bonding & Structure: Ionic Bonding; Formation;
  Structure of Ionic Compounds; Properties of Ionic Compounds.
date: 2026-04-21T00:00:00.000Z
tags:
  - Chemistry
  - ALevel
categories:
  - Chemistry
slug: bonding-and-structure
sidebar_position: 7
---

# Bonding & Structure

Chemical bonding is the consequence of electrostatic interactions between nuclei and electrons that result in a lower-energy arrangement than the separated atoms. This module classifies bonds by the mechanism of electron redistribution and examines the resulting structures and their physical properties.

## Ionic Bonding

### Formation

Ionic bonds form between atoms with significantly different electronegativities (typically $\Delta\chi \gt 1.7$). A metal atom transfers one or more electrons to a non-metal atom, producing a cation and anion held together by **electrostatic attraction**. The process is:

$$
\mathrm{M}(s) \to \mathrm{M}^+(g) + e^- \quad (\mathrm{ionisation})
$$

$$
\tfrac{1}{2}\mathrm{X}_2(g) + e^- \to \mathrm{X}^-(g) \quad (\mathrm{electron affinity})
$$

$$
\mathrm{M}^+(g) + \mathrm{X}^-(g) \to \mathrm{MX}(s) \quad (\mathrm{lattice formation})
$$

### Structure of Ionic Compounds

Ionic compounds form **giant ionic lattices** -- extended three-dimensional arrays of alternating cations and anions. The structure is determined by the relative sizes of the ions (radius ratio rule):

| Radius ratio $r^+/r^-$ | Coordination number | Geometry | Example |
|---|---|---|---|
| 0.225 -- 0.414 | 4 | Tetrahedral | $\mathrm{ZnS}$ |
| 0.414 -- 0.732 | 6 | Octahedral | $\mathrm{NaCl}$ |
| 0.732 -- 1.000 | 8 | Cubic | $\mathrm{CsCl}$ |

### Properties of Ionic Compounds

- **High melting and boiling points** -- strong electrostatic forces throughout the lattice require substantial energy to overcome.
- **Brittle** -- displacement of one plane of ions relative to another brings like charges into alignment, causing repulsion and fracture.
- **Electrical conductors when molten or dissolved** -- ions are mobile and can carry charge; in the solid state, ions are fixed.
- **Soluble in polar solvents** -- polar solvent molecules can solvate individual ions, compensating for the lattice energy.

### Lattice Enthalpy and Born-Haber Cycles

The **lattice enthalpy** $\Delta H_\mathrm{lat}$ is the enthalpy change when one mole of an ionic compound is formed from its gaseous ions under standard conditions. It is always exothermic (negative).

Born-Haber cycles apply Hess's Law to determine lattice enthalpies indirectly, since they cannot be measured directly. The cycle for $\mathrm{NaCl}$ is:

$$
\begin{aligned}
\mathrm{Na}(s) &\xrightarrow{\Delta H_\mathrm{atom}} \mathrm{Na}(g) \\
&\xrightarrow{\mathrm{IE}_1} \mathrm{Na}^+(g) \\
\tfrac{1}{2}\mathrm{Cl}_2(g) &\xrightarrow{\tfrac{1}{2}\Delta H_\mathrm{atom}} \mathrm{Cl}(g) \\
&\xrightarrow{\mathrm{EA}_1} \mathrm{Cl}^-(g) \\
\mathrm{Na}^+(g) + \mathrm{Cl}^-(g) &\xrightarrow{\Delta H_\mathrm{lat}} \mathrm{NaCl}(s)
\end{aligned}
$$

By Hess's Law:

$$
\Delta H_f^\circ = \Delta H_\mathrm{atom}(\mathrm{Na}) + \tfrac{1}{2}\Delta H_\mathrm{atom}(\mathrm{Cl}_2) + \mathrm{IE}_1(\mathrm{Na}) + \mathrm{EA}_1(\mathrm{Cl}) + \Delta H_\mathrm{lat}
$$

Rearranging:

$$
\Delta H_\mathrm{lat} = \Delta H_f^\circ - \Delta H_\mathrm{atom}(\mathrm{Na}) - \tfrac{1}{2}\Delta H_\mathrm{atom}(\mathrm{Cl}_2) - \mathrm{IE}_1(\mathrm{Na}) - \mathrm{EA}_1(\mathrm{Cl})
$$

**Worked Example.** Calculate the lattice enthalpy of NaCl given:

- $\Delta H_f^\circ(\mathrm{NaCl}) = -411\,\mathrm{kJ/mol}$
- $\Delta H_\mathrm{atom}(\mathrm{Na}) = +108\,\mathrm{kJ/mol}$
- $\Delta H_\mathrm{atom}(\mathrm{Cl}_2) = +122\,\mathrm{kJ/mol}$
- $\mathrm{IE}_1(\mathrm{Na}) = +496\,\mathrm{kJ/mol}$
- $\mathrm{EA}_1(\mathrm{Cl}) = -349\,\mathrm{kJ/mol}$

$$
\Delta H_\mathrm{lat} = -411 - 108 - 61 - 496 - (-349) = -411 - 108 - 61 - 496 + 349 = -727\,\mathrm{kJ/mol}
$$

See [Thermodynamics](./thermodynamics) for a more detailed treatment of Born-Haber cycles.

## Covalent Bonding

### Formation

Covalent bonds form when atoms share one or more pairs of electrons, achieving a lower energy than the separated atoms. The shared pair is attracted to both nuclei simultaneously, forming an electron density maximum between the bonded atoms.

### Sigma ($\sigma$) and Pi ($\pi$) Bonds

A **sigma bond** is formed by end-on (head-on) overlap of atomic orbitals along the internuclear axis. Sigma bonds can arise from $s$-$s$, $s$-$p$, or $p$-$p$ overlap. All single bonds are sigma bonds.

A **pi bond** is formed by sideways overlap of parallel $p$ orbitals above and below the internuclear axis. Pi bonds are weaker than sigma bonds because the sideways overlap is less effective.

A double bond consists of one sigma and one pi bond ($1\sigma + 1\pi$). A triple bond consists of one sigma and two pi bonds ($1\sigma + 2\pi$).

$$
\begin{aligned}
\mathrm{C}\equiv\mathrm{C}: &\quad 1\sigma + 2\pi \\
\mathrm{C}=\mathrm{C}: &\quad 1\sigma + 1\pi \\
\mathrm{C}-\mathrm{C}: &\quad 1\sigma
\end{aligned}
$$

### Bond Polarity and Electronegativity

**Electronegativity** ($\chi$) is the power of an atom to attract electron density towards itself in a covalent bond. The Pauling scale is most commonly used:

| Element | $\chi$ (Pauling) |
|---|
| F | 3.98 |
| O | 3.44 |
| N | 3.04 |
| Cl | 3.16 |
| C | 2.55 |
| H | 2.20 |
| Na | 0.93 |
| K | 0.82 |

When two atoms of different electronegativity form a covalent bond, the electron pair is unequally shared, creating a **polar bond** with a **bond dipole**. The dipole moment $\mu$ is:

$$
\mu = q \cdot d
$$

where $q$ is the partial charge and $d$ is the separation distance. Dipole moments are measured in Debye ($1\,\mathrm{D} = 3.336 \times 10^{-30}\,\mathrm{C\,m}$).

### Coordinate (Dative Covalent) Bonds

A coordinate bond is a covalent bond in which both electrons in the shared pair come from the same atom. Once formed, a coordinate bond is indistinguishable from any other covalent bond.

Example: formation of the ammonium ion:

$$
\mathrm{NH}_3 + \mathrm{H}^+ \to \mathrm{NH}_4^+
$$

The lone pair on nitrogen forms a coordinate bond with the proton. All four N-H bonds in $\mathrm{NH}_4^+$ are equivalent (resonance/rapid exchange).

## Metallic Bonding

### The Sea of Delocalised Electrons

In a metal, the valence electrons are not associated with individual atoms but are **delocalised** over the entire lattice of positive metal ions. The metallic bond is the electrostatic attraction between the cation lattice and the delocalised electron "sea".

### Properties of Metals

- **High melting and boiling points** -- strong electrostatic attraction throughout the lattice. The strength varies with charge density of the cation.
- **Electrical conductivity** -- delocalised electrons are mobile and carry charge.
- **Malleability and ductility** -- when force is applied, cation layers slide past each other; the delocalised electrons adjust, maintaining bonding in the new positions. Unlike ionic solids, no like-charge repulsion occurs.
- **Thermal conductivity** -- delocalised electrons transfer kinetic energy efficiently.
- **Lustre** -- delocalised electrons absorb and re-emit light at all visible wavelengths.

## Intermolecular Forces

Intermolecular forces (IMFs) are the attractive forces **between** molecules. They are much weaker than intramolecular bonds (covalent, ionic, metallic) but govern physical properties such as boiling point, solubility, and viscosity.

### Van der Waals Forces (London Dispersion Forces)

London dispersion forces arise from instantaneous, temporary dipoles caused by fluctuations in the electron cloud. These temporary dipoles induce dipoles in neighbouring molecules, creating a net attractive force.

- **All molecules** experience London forces.
- The strength depends on the number of electrons (molecular mass), molecular shape (surface area of contact), and polarisability.
- Larger electron clouds are more polarisable, producing stronger London forces.

Trend in boiling points of the halogens:

$$
\mathrm{F}_2\,(-188^\circ\mathrm{C}) \lt \mathrm{Cl}_2\,(-34^\circ\mathrm{C}) \lt \mathrm{Br}_2\,(59^\circ\mathrm{C}) \lt \mathrm{I}_2\,(184^\circ\mathrm{C})
$$

### Dipole-Dipole Forces

Polar molecules have permanent dipoles. The positive end of one molecule attracts the negative end of another, creating an alignment that produces an attractive force.

Dipole-dipole forces are stronger than London forces for molecules of similar mass but weaker than hydrogen bonds.

### Hydrogen Bonding

Hydrogen bonding is a special, strong type of dipole-dipole interaction that occurs when hydrogen is covalently bonded to a highly electronegative atom ($\mathrm{N}$, $\mathrm{O}$, or $\mathrm{F}$). The conditions are:

1. Hydrogen bonded to $\mathrm{N}$, $\mathrm{O}$, or $\mathrm{F}$.
2. The hydrogen has a large partial positive charge ($\delta^+$).
3. A lone pair on a nearby $\mathrm{N}$, $\mathrm{O}$, or $\mathrm{F}$ atom interacts with the $\delta^+$ hydrogen.

Hydrogen bonds are approximately 10-40 kJ/mol, compared with 2-5 kJ/mol for typical dipole-dipole interactions and 0.05-2 kJ/mol for London forces.

**Consequences of hydrogen bonding:**

- Water has an anomalously high boiling point ($100^\circ\mathrm{C}$) compared with $\mathrm{H}_2\mathrm{S}$ ($-60^\circ\mathrm{C}$), despite $\mathrm{H}_2\mathrm{S}$ having greater molecular mass.
- Ice is less dense than liquid water -- hydrogen bonds in the solid hold molecules in an open, hexagonal lattice.
- DNA's double helix is stabilised by hydrogen bonding between complementary base pairs.

## Shapes of Molecules (VSEPR Theory)

The **Valence Shell Electron Pair Repulsion** (VSEPR) theory predicts molecular geometry by minimising the repulsion between electron pairs (both bonding and lone pairs) in the valence shell.

### Electron Pair Repulsion Order

Lone pair-lone pair repulsion $\gt$ lone pair-bonding pair repulsion $\gt$ bonding pair-bonding pair repulsion.

This hierarchy arises because lone pairs are confined to one atom and thus occupy more space around that atom than bonding pairs, which are shared between two atoms.

### Molecular Geometries

| Electron domains | Bonding pairs | Lone pairs | Geometry | Bond angle | Example |
|---|---|---|---|---|---|
| 2 | 2 | 0 | Linear | $180^\circ$ | $\mathrm{BeCl}_2$, $\mathrm{CO}_2$ |
| 3 | 3 | 0 | Trigonal planar | $120^\circ$ | $\mathrm{BF}_3$, $\mathrm{NO}_3^-$ |
| 3 | 2 | 1 | Bent (angular) | $\lt 120^\circ$ | $\mathrm{SO}_2$ ($\approx 119^\circ$) |
| 4 | 4 | 0 | Tetrahedral | $109.5^\circ$ | $\mathrm{CH}_4$, $\mathrm{NH}_4^+$ |
| 4 | 3 | 1 | Trigonal pyramidal | $\lt 109.5^\circ$ | $\mathrm{NH}_3$ ($107^\circ$) |
| 4 | 2 | 2 | Bent (angular) | $\lt 109.5^\circ$ | $\mathrm{H}_2\mathrm{O}$ ($104.5^\circ$) |
| 5 | 5 | 0 | Trigonal bipyramidal | $120^\circ$, $90^\circ$ | $\mathrm{PCl}_5$ |
| 5 | 4 | 1 | See-saw | $\lt 90^\circ$, $\lt 120^\circ$ | $\mathrm{SF}_4$ |
| 5 | 3 | 2 | T-shaped | $\lt 90^\circ$ | $\mathrm{ClF}_3$ |
| 5 | 2 | 3 | Linear | $180^\circ$ | $\mathrm{XeF}_2$ |
| 6 | 6 | 0 | Octahedral | $90^\circ$ | $\mathrm{SF}_6$ |
| 6 | 5 | 1 | Square pyramidal | $\lt 90^\circ$ | $\mathrm{BrF}_5$ |
| 6 | 4 | 2 | Square planar | $90^\circ$ | $\mathrm{XeF}_4$ |

### Why $\mathrm{NH}_3$ is $107^\circ$ and $\mathrm{H}_2\mathrm{O}$ is $104.5^\circ$

Both have four electron domains (tetrahedral electron pair geometry). In $\mathrm{NH}_3$, one lone pair compresses the H-N-H angle from $109.5^\circ$ to $107^\circ$. In $\mathrm{H}_2\mathrm{O}$, two lone pairs exert greater compression, reducing the H-O-H angle further to $104.5^\circ$.

## Giant Covalent Structures

### Diamond

Each carbon atom is $sp^3$ hybridised and covalently bonded to four other carbon atoms in a tetrahedral arrangement. This extends in three dimensions throughout the crystal.

- Extremely high melting point ($> 3500^\circ\mathrm{C}$) -- all bonds are strong covalent bonds that must be broken.
- Insulator -- no free electrons or ions; all valence electrons are localised in sigma bonds.
- Extremely hard -- the tetrahedral network resists deformation in all directions.
- Insoluble in all solvents.

### Graphite

Each carbon atom is $sp^2$ hybridised and bonded to three other carbons in a trigonal planar arrangement, forming hexagonal layers. The remaining $p_z$ electron is delocalised above and below each layer.

- High melting point -- strong covalent bonds within layers.
- Soft and slippery -- layers are held together by weak London forces, allowing them to slide.
- Electrical conductor along the plane -- delocalised electrons can move within the layers.
- Insoluble.

### Silicon Dioxide ($\mathrm{SiO}_2$)

Each silicon atom is covalently bonded to four oxygen atoms, and each oxygen atom bridges two silicon atoms ($\mathrm{SiO}_4$ tetrahedra sharing corners). This extends in three dimensions, analogous to diamond but with two different atom types.

- Very high melting point ($\approx 1700^\circ\mathrm{C}$).
- Hard, insoluble, electrical insulator.

## Common Pitfalls

1. **Confusing bond strength with intermolecular force strength.** A common error is to attribute high boiling points of water to "strong O-H bonds". The O-H covalent bonds are not broken during boiling; the hydrogen bonds between molecules are.

2. **Applying VSEPR incorrectly to molecules with multiple bonds.** Each double or triple bond counts as a single electron domain. $\mathrm{CO}_2$ has two electron domains (each double bond), giving linear geometry, not four domains.

3. **Stating that ionic compounds "share electrons".** Ionic bonding involves complete electron transfer, not sharing. Coordinate bonds (a type of covalent bond) do involve sharing from a single donor.

4. **Ignoring lone pairs in VSEPR.** A molecule described as "tetrahedral" with two lone pairs is bent, not tetrahedral. "Tetrahedral" refers to the electron pair geometry; the molecular geometry must account for lone pairs.

5. **Incorrect radius ratio application.** The radius ratio rule is a guideline, not a strict predictor. Many compounds adopt structures outside the predicted range due to covalent character, polarisation effects, or entropy considerations.

## Worked Examples

<details>
<summary>Example 1: Predicting shape and polarity of $\mathrm{SF}_4$</summary>

Sulphur in $\mathrm{SF}_4$ has 6 valence electrons. Four are used in S-F bonds, leaving one lone pair. Total electron domains = 5 (4 bonding + 1 lone pair).

Geometry: **see-saw**. The lone pair occupies an equatorial position to minimise repulsion (two $90^\circ$ interactions vs two $90^\circ$ interactions for axial; equatorial is preferred as it avoids three $90^\circ$ interactions).

The molecule is polar because the bond dipoles do not cancel -- the axial and equatorial fluorines are not symmetrically arranged.

</details>

<details>
<summary>Example 2: Born-Haber cycle for $\mathrm{MgCl}_2$</summary>

Given:
- $\Delta H_f^\circ(\mathrm{MgCl}_2) = -641\,\mathrm{kJ/mol}$
- $\Delta H_\mathrm{atom}(\mathrm{Mg}) = +148\,\mathrm{kJ/mol}$
- $\Delta H_\mathrm{atom}(\mathrm{Cl}_2) = +122\,\mathrm{kJ/mol}$
- $\mathrm{IE}_1(\mathrm{Mg}) = +738\,\mathrm{kJ/mol}$
- $\mathrm{IE}_2(\mathrm{Mg}) = +1451\,\mathrm{kJ/mol}$
- $\mathrm{EA}_1(\mathrm{Cl}) = -349\,\mathrm{kJ/mol}$

$$
\Delta H_\mathrm{lat} = \Delta H_f^\circ - \Delta H_\mathrm{atom}(\mathrm{Mg}) - \Delta H_\mathrm{atom}(\mathrm{Cl}_2) - \mathrm{IE}_1 - \mathrm{IE}_2 - 2\mathrm{EA}_1
$$

$$
\Delta H_\mathrm{lat} = -641 - 148 - 122 - 738 - 1451 - 2(-349)
$$

$$
\Delta H_\mathrm{lat} = -641 - 148 - 122 - 738 - 1451 + 698 = -2402\,\mathrm{kJ/mol}
$$

</details>

<details>
<summary>Example 3: Explaining boiling point trends</summary>

Arrange in order of increasing boiling point: $\mathrm{CH}_4$, $\mathrm{CH}_3\mathrm{Cl}$, $\mathrm{CH}_3\mathrm{OH}$, $\mathrm{CH}_3\mathrm{NH}_2$.

$\mathrm{CH}_4 \lt \mathrm{CH}_3\mathrm{Cl} \lt \mathrm{CH}_3\mathrm{NH}_2 \lt \mathrm{CH}_3\mathrm{OH}$

- $\mathrm{CH}_4$: only London forces (smallest, fewest electrons).
- $\mathrm{CH}_3\mathrm{Cl}$: London forces (more electrons) plus permanent dipole-dipole.
- $\mathrm{CH}_3\mathrm{NH}_2$: London forces plus hydrogen bonding (N-H).
- $\mathrm{CH}_3\mathrm{OH}$: London forces plus hydrogen bonding (O-H), which is stronger than N-H hydrogen bonding because oxygen is more electronegative than nitrogen.

</details>
