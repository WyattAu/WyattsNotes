---
title: Bonding and Intermolecular Forces
date: 2026-04-14
tags:
  - Chemistry
  - AP
categories:
  - Chemistry
slug: bonding-and-intermolecular-forces
---

## Chemical Bonds (CED Units 2-3)

### Types of Bonds

| Bond Type         | Description                             | Electronegativity Difference |
| ----------------- | --------------------------------------- | ---------------------------- |
| Ionic             | Transfer of electrons; metal + nonmetal | $\gt 1.7$                    |
| Polar Covalent    | Unequal sharing of electrons            | $0.4$ -- $1.7$               |
| Nonpolar Covalent | Equal sharing of electrons              | $\lt 0.4$                    |

### Ionic Bonding

Ionic compounds consist of cations and anions held together by electrostatic attraction.

**Lattice energy** ($U$): the energy released when gaseous ions form one mole of solid ionic
compound:

$$
U \propto \frac{|z_+ \cdot z_-|}{r_+ + r_-}
$$

Higher charges and smaller ionic radii lead to larger (more negative) lattice energy.

### Covalent Bonding

A covalent bond forms when atoms share one or more pairs of electrons.

- **Single bond:** 1 shared pair ($\sigma$ bond)
- **Double bond:** 2 shared pairs (1 $\sigma$ + 1 $\pi$)
- **Triple bond:** 3 shared pairs (1 $\sigma$ + 2 $\pi$)

### Bond Energy and Bond Length

- Bond length decreases as bond order increases.
- Bond energy increases as bond order increases.

| Bond Type  | Typical Length (pm) | Typical Energy (kJ/mol) |
| ---------- | ------------------- | ----------------------- |
| C--C       | 154                 | 347                     |
| C=C        | 134                 | 614                     |
| C$\equiv$C | 120                 | 839                     |

## Lewis Structures (CED Unit 2)

### Rules for Drawing Lewis Structures

1. Count total valence electrons.
2. Draw the skeletal structure (least electronegative atom is usually central).
3. Connect atoms with single bonds (each uses 2 electrons).
4. Complete octets of terminal atoms first.
5. Place remaining electrons on the central atom.
6. If the central atom lacks an octet, form double or triple bonds.
7. Check: total electrons = valence electrons.

### Formal Charge

$$
\text{Formal Charge} = V - N - \frac{B}{2}
$$

where $V$ = valence electrons, $N$ = nonbonding electrons, $B$ = bonding electrons.

The best Lewis structure minimizes formal charges and places negative formal charges on more
electronegative atoms.

:::info[Example]

Draw the Lewis structure for $\text{SO}_4^{2-}$ with formal charges.

Total valence electrons: $6 + 4(6) + 2 = 32$.

Connect S to each O with single bonds: $4 \times 2 = 8$ electrons used, $24$ remaining.

Complete octets on each O: $4 \times 6 = 24$ electrons. All 32 used.

Formal charges: S has $6 - 0 - 8/2 = +2$. Each O has $6 - 6 - 2/2 = -1$.

This gives total charge $+2 + 4(-1) = -2$, which is correct, but the formal charges are large.

**Better structure:** Form two S=O double bonds. S has $6 - 0 - 12/2 = 0$ (double-bonded O). For
double-bonded O: $6 - 4 - 4/2 = 0$. For single-bonded O: $6 - 6 - 2/2 = -1$.

Total: $0 + 0 + 0 + (-1) + (-1) = -2$. This is better.

:::

### Resonance

When multiple Lewis structures (resonance structures) are possible, the actual molecule is a hybrid
of all resonance forms. The actual bond order is the average.

:::info[Example: Ozone]

$\text{O}_3$ has two equivalent resonance structures:

$$
\text{O}=\text{O}-\text{O} \leftrightarrow \text{O}-\text{O}=\text{O}
$$

The actual O--O bonds are identical, with bond order $1.5$.

:::

### Exceptions to the Octet Rule

1. **Odd-electron molecules:** $\text{NO}$ (11 valence electrons), $\text{ClO}_2$ (19)
2. **Electron-deficient:** $\text{BeCl}_2$ (4 valence e), $\text{BF}_3$ (6 valence e)
3. **Expanded octets:** Elements in period 3 and beyond can have more than 8 electrons (e.g.,
   $\text{SF}_6$, $\text{PCl}_5$)

## VSEPR Theory (CED Unit 2)

Valence Shell Electron Pair Repulsion (VSEPR) predicts molecular geometry based on the repulsion
between electron pairs (both bonding and lone pairs).

### Electron Domain Geometry

| Electron Domains | Geometry             | Bond Angles             |
| ---------------- | -------------------- | ----------------------- |
| 2                | Linear               | $180^\circ$             |
| 3                | Trigonal planar      | $120^\circ$             |
| 4                | Tetrahedral          | $109.5^\circ$           |
| 5                | Trigonal bipyramidal | $90^\circ$, $120^\circ$ |
| 6                | Octahedral           | $90^\circ$              |

### Molecular Geometry (Accounting for Lone Pairs)

| Domains | Bonding | Lone | Shape                | Example              |
| ------- | ------- | ---- | -------------------- | -------------------- |
| 2       | 2       | 0    | Linear               | $\text{CO}_2$        |
| 3       | 3       | 0    | Trigonal planar      | $\text{BF}_3$        |
| 3       | 2       | 1    | Bent                 | $\text{SO}_2$        |
| 4       | 4       | 0    | Tetrahedral          | $\text{CH}_4$        |
| 4       | 3       | 1    | Trigonal pyramidal   | $\text{NH}_3$        |
| 4       | 2       | 2    | Bent                 | $\text{H}_2\text{O}$ |
| 5       | 5       | 0    | Trigonal bipyramidal | $\text{PCl}_5$       |
| 5       | 4       | 1    | Seesaw               | $\text{SF}_4$        |
| 5       | 3       | 2    | T-shaped             | $\text{ClF}_3$       |
| 5       | 2       | 3    | Linear               | $\text{XeF}_2$       |
| 6       | 6       | 0    | Octahedral           | $\text{SF}_6$        |
| 6       | 5       | 1    | Square pyramidal     | $\text{BrF}_5$       |
| 6       | 4       | 2    | Square planar        | $\text{XeF}_4$       |

### Lone Pair Repulsion Order

Lone pair--lone pair $\gt$ lone pair--bond pair $\gt$ bond pair--bond pair

This is why bond angles decrease when lone pairs are present (e.g., $\text{H}_2\text{O}$ at
$104.5^\circ$ vs ideal $109.5^\circ$).

## Molecular Polarity (CED Unit 3)

A molecule is polar if:

1. It contains polar bonds, AND
2. The molecular geometry does not cancel out the bond dipoles.

### Dipole Moments

$$
\vec{\mu} = q \cdot d
$$

where $q$ is the partial charge and $d$ is the distance between charges.

### Examples

| Molecule             | Polar Bonds? | Symmetric?              | Polar? |
| -------------------- | ------------ | ----------------------- | ------ |
| $\text{CO}_2$        | Yes (C=O)    | Yes (linear)            | No     |
| $\text{H}_2\text{O}$ | Yes (O--H)   | No (bent)               | Yes    |
| $\text{CCl}_4$       | Yes (C--Cl)  | Yes (tetrahedral)       | No     |
| $\text{NH}_3$        | Yes (N--H)   | No (trigonal pyramidal) | Yes    |

## Intermolecular Forces (CED Unit 3)

Intermolecular forces (IMFs) are weaker than intramolecular bonds but determine physical properties
like boiling point, melting point, and solubility.

### Types of IMFs (Weakest to Strongest)

1. **London Dispersion Forces (LDF):** Present in all molecules. Caused by temporary, instantaneous
   dipoles. Strength increases with molecular size and surface area.

2. **Dipole-Dipole Forces:** Between polar molecules. The positive end of one dipole attracts the
   negative end of another.

3. **Hydrogen Bonding:** A special, strong type of dipole-dipole interaction between H bonded to N,
   O, or F and a lone pair on N, O, or F.

4. **Ion-Dipole Forces:** Between an ion and a polar molecule. Important in solutions.

### Trends in IMF Strength

- **LDF** increases with molar mass (more electrons = larger polarizability) and molecular surface
  area (longer chain = stronger LDF).
- **Boiling point** generally increases with IMF strength.

:::info[Example]

Explain the boiling point trend: $\text{CH}_4$ ($-161^\circ\text{C}$) $\lt$ $\text{SiH}_4$
($-112^\circ\text{C}$) $\lt$ $\text{GeH}_4$ ($-88^\circ\text{C}$).

All are nonpolar (tetrahedral), so only LDFs are present. As molar mass increases, electron clouds
become more polarizable, LDFs strengthen, and boiling point increases.

:::

:::info[Example]

Explain why $\text{H}_2\text{O}$ ($100^\circ\text{C}$) has a much higher boiling point than
$\text{H}_2\text{S}$ ($-60^\circ\text{C}$) despite having a lower molar mass.

$\text{H}_2\text{O}$ has hydrogen bonding (O is highly electronegative), while $\text{H}_2\text{S}$
has only dipole-dipole forces and LDFs (S is not electronegative enough for H-bonding).

:::

## Hybridization (CED Unit 2)

### sp Hybridization

- 2 electron domains
- Geometry: linear
- Example: $\text{BeCl}_2$, $\text{CO}_2$, $\text{C}_2\text{H}_2$

### sp2 Hybridization

- 3 electron domains
- Geometry: trigonal planar
- Example: $\text{BF}_3$, $\text{C}_2\text{H}_4$

### sp3 Hybridization

- 4 electron domains
- Geometry: tetrahedral
- Example: $\text{CH}_4$, $\text{NH}_3$, $\text{H}_2\text{O}$

### sp3d and sp3d2 Hybridization

- 5 and 6 electron domains respectively
- Examples: $\text{PCl}_5$ (sp3d), $\text{SF}_6$ (sp3d2)

### Sigma and Pi Bonds

- **Sigma ($\sigma$) bonds:** Head-on overlap of orbitals along the internuclear axis. Single bonds
  are always sigma bonds.
- **Pi ($\pi$) bonds:** Side-to-side overlap of parallel p orbitals, above and below the
  internuclear axis. Found in double and triple bonds.
- A double bond = 1 $\sigma$ + 1 $\pi$.
- A triple bond = 1 $\sigma$ + 2 $\pi$.

## Common Pitfalls

1. **Drawing incorrect Lewis structures.** Always count valence electrons and verify formal charges.
2. **Confusing electron domain geometry with molecular geometry.** Electron domain geometry includes
   lone pairs; molecular geometry only considers atom positions.
3. **Forgetting that hydrogen bonding requires H bonded to N, O, or F.** H bonded to C or S does not
   participate in hydrogen bonding.
4. **Confusing polarity of bonds with polarity of molecules.** A molecule with polar bonds can be
   nonpolar if the geometry is symmetric (e.g., $\text{CCl}_4$).
5. **Misidentifying the central atom.** The central atom is usually the least electronegative
   (except H, which is never central).
6. **Incorrect hybridization.** The hybridization matches the number of electron domains, not the
   number of atoms bonded.
7. **Forgetting expanded octets.** Only elements in period 3 and beyond can exceed an octet.

## Practice Questions

1. Draw the Lewis structure for $\text{XeO}_3$ and determine its molecular geometry and polarity.

2. Arrange in order of increasing boiling point: $\text{F}_2$, $\text{Cl}_2$, $\text{Br}_2$,
   $\text{I}_2$. Explain your reasoning.

3. Explain why $\text{NH}_3$ has a higher boiling point than $\text{PH}_3$.

4. Determine the hybridization, electron domain geometry, and molecular geometry of $\text{SF}_4$.

5. Draw all resonance structures for $\text{NO}_3^-$ and determine the average N--O bond order.

6. Which has a higher boiling point and why: $n$-pentane or neopentane (2,2-dimethylpropane)?

7. For each molecule, predict whether it is polar or nonpolar: $\text{BrF}_5$, $\text{XeF}_4$,
   $\text{IF}_3$, $\text{PF}_5$.

8. Draw the Lewis structure for $\text{ClO}_4^-$, determine the formal charge on each atom, and
   describe the molecular geometry.
