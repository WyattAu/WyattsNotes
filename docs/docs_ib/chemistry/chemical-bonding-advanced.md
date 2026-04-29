---
title: Chemical Bonding (Advanced)
description:
  IB Chemistry — VSEPR theory, hybridization, molecular orbital theory, metallic bonding, and band
  theory.
slug: chemical-bonding-advanced
---

## 1. VSEPR Theory

### Principle

The **Valence Shell Electron Pair Repulsion** (VSEPR) theory predicts molecular geometry based on
the repulsion between electron pairs (both bonding and lone pairs) around a central atom.

**Postulates:**

1. Electron pairs arrange themselves to minimise repulsion.
2. Repulsion order: lone pair--lone pair $\gt$ lone pair--bonding pair $\gt$ bonding pair--bonding
   pair.
3. Lone pairs occupy more space than bonding pairs because they are held by one nucleus and spread
   closer to the central atom.
4. Multiple bonds are treated as a single region of electron density (but repel more strongly than
   single bonds).

### Electron Pair Geometries

| Electron pairs | Geometry             | Bond angle              |
| -------------- | -------------------- | ----------------------- |
| $2$            | Linear               | $180\degree$            |
| $3$            | Trigonal planar      | $120\degree$            |
| $4$            | Tetrahedral          | $109.5\degree$          |
| $5$            | Trigonal bipyramidal | $120\degree, 90\degree$ |
| $6$            | Octahedral           | $90\degree$             |

### Molecular Shapes from VSEPR

| Steric number | Lone pairs | Shape                | Bond angle                      | Example                                            |
| ------------- | ---------- | -------------------- | ------------------------------- | -------------------------------------------------- |
| $2$           | $0$        | Linear               | $180\degree$                    | $\mathrm{BeCl}_2$, $\mathrm{CO}_2$                 |
| $3$           | $0$        | Trigonal planar      | $120\degree$                    | $\mathrm{BF}_3$, $\mathrm{SO}_3$                   |
| $3$           | $1$        | Bent (V-shaped)      | $\lt 120\degree$                | $\mathrm{SO}_2$, $\mathrm{O}_3$                    |
| $4$           | $0$        | Tetrahedral          | $109.5\degree$                  | $\mathrm{CH}_4$, $\mathrm{NH}_4^+$                 |
| $4$           | $1$        | Trigonal pyramidal   | $\lt 109.5\degree$              | $\mathrm{NH}_3$, $\mathrm{PH}_3$                   |
| $4$           | $2$        | Bent                 | $\lt 109.5\degree$              | $\mathrm{H}_2\mathrm{O}$, $\mathrm{H}_2\mathrm{S}$ |
| $5$           | $0$        | Trigonal bipyramidal | $120\degree, 90\degree$         | $\mathrm{PF}_5$, $\mathrm{PCl}_5$                  |
| $5$           | $1$        | Seesaw               | $\lt 90\degree, \lt 120\degree$ | $\mathrm{SF}_4$                                    |
| $5$           | $2$        | T-shaped             | $\lt 90\degree$                 | $\mathrm{ClF}_3$                                   |
| $5$           | $3$        | Linear               | $180\degree$                    | $\mathrm{XeF}_2$, $\mathrm{I}_3^-$                 |
| $6$           | $0$        | Octahedral           | $90\degree$                     | $\mathrm{SF}_6$, $\mathrm{PF}_6^-$                 |
| $6$           | $1$        | Square pyramidal     | $\lt 90\degree$                 | $\mathrm{BrF}_5$, $\mathrm{IF}_5$                  |
| $6$           | $2$        | Square planar        | $90\degree$                     | $\mathrm{XeF}_4$, $\mathrm{ICl}_4^-$               |

### Bond Angle Distortions

Lone pair repulsion compresses bond angles. The more lone pairs, the greater the compression:

| Molecule                 | Expected       | Actual         | Reason                              |
| ------------------------ | -------------- | -------------- | ----------------------------------- |
| $\mathrm{NH}_3$          | $109.5\degree$ | $107\degree$   | One lone pair compresses angles     |
| $\mathrm{H}_2\mathrm{O}$ | $109.5\degree$ | $104.5\degree$ | Two lone pairs compress angles more |

Electronegativity effects also distort angles: more electronegative terminal atoms pull bonding
pairs away from the central atom, reducing repulsion and **decreasing** bond angles.

### Common Pitfalls

- Confusing steric number (total regions of electron density) with the number of atoms bonded.
- Placing lone pairs in equatorial positions of trigonal bipyramidal arrangements (equatorial
  positions minimise $90\degree$ repulsions).
- Forgetting that double and triple bonds count as one region of electron density.

---

## 2. Hybridization

### Definition

**Hybridization** is a mathematical model that combines atomic orbitals on the central atom to form
equivalent hybrid orbitals that explain observed geometries.

### Types of Hybridization

| Hybridization | Geometry             | Orbitals combined | Angle                   |
| ------------- | -------------------- | ----------------- | ----------------------- |
| $sp$          | Linear               | $1s + 1p$         | $180\degree$            |
| $sp^2$        | Trigonal planar      | $1s + 2p$         | $120\degree$            |
| $sp^3$        | Tetrahedral          | $1s + 3p$         | $109.5\degree$          |
| $sp^3d$       | Trigonal bipyramidal | $1s + 3p + 1d$    | $120\degree, 90\degree$ |
| $sp^3d^2$     | Octahedral           | $1s + 3p + 2d$    | $90\degree$             |

### Determining Hybridization

Count the regions of electron density (steric number) around the central atom:

$$
\mathrm{Steric number} = \mathrm{bonded atoms} + \mathrm{lone pairs}
$$

| Steric number | Hybridization |
| ------------- | ------------- |
| $2$           | $sp$          |
| $3$           | $sp^2$        |
| $4$           | $sp^3$        |
| $5$           | $sp^3d$       |
| $6$           | $sp^3d^2$     |

### Examples

| Molecule                 | Central atom | Steric number | Hybridization | Shape                |
| ------------------------ | ------------ | ------------- | ------------- | -------------------- |
| $\mathrm{CH}_4$          | C            | $4$           | $sp^3$        | Tetrahedral          |
| $\mathrm{NH}_3$          | N            | $4$           | $sp^3$        | Trigonal pyramidal   |
| $\mathrm{H}_2\mathrm{O}$ | O            | $4$           | $sp^3$        | Bent                 |
| $\mathrm{BF}_3$          | B            | $3$           | $sp^2$        | Trigonal planar      |
| $\mathrm{CO}_2$          | C            | $2$           | $sp$          | Linear               |
| $\mathrm{SF}_6$          | S            | $6$           | $sp^3d^2$     | Octahedral           |
| $\mathrm{PCl}_5$         | P            | $5$           | $sp^3d$       | Trigonal bipyramidal |

### Sigma and Pi Bonds

- **Sigma ($\sigma$) bond**: formed by head-on overlap of orbitals along the internuclear axis.
  Always the first bond between two atoms. Can be formed by $s$-$s$, $s$-$p$, $p$-$p$, or
  hybrid-hybrid overlap.
- **Pi ($\pi$) bond**: formed by sideways overlap of parallel $p$-orbitals. Always the second (or
  third) bond in a multiple bond.

A double bond consists of one $\sigma$ and one $\pi$ bond. A triple bond consists of one $\sigma$
and two $\pi$ bonds.

$$
\mathrm{C=C}: 1\sigma + 1\pi, \qquad \mathrm{C\equiv C}: 1\sigma + 2\pi
$$

### Common Pitfalls

- Hybridization describes the central atom's orbitals, not the entire molecule.
- Lone pairs are included in the steric number when determining hybridization.
- Pi bonds do not participate in hybridization — they involve unhybridized $p$-orbitals.

---

## 3. Molecular Orbital Theory

### Principle

Molecular orbital (MO) theory treats the molecule as a whole. Atomic orbitals combine to form
molecular orbitals that are delocalised over the entire molecule.

### Rules for Forming MOs

1. Atomic orbitals must have similar energy.
2. Atomic orbitals must overlap effectively.
3. The number of MOs equals the number of atomic orbitals combined.
4. MOs that are lower in energy than the parent AOs are **bonding**; those higher are
   **antibonding**.
5. Each MO can hold two electrons with opposite spins.

### MO Diagrams for Diatomic Molecules

For homonuclear diatomics ($\mathrm{O}_2$, $\mathrm{F}_2$, and beyond):

$$
\sigma_{1s} \lt \sigma_{1s}^* \lt \sigma_{2s} \lt \sigma_{2s}^* \lt \sigma_{2p_z} \lt \pi_{2p_x} = \pi_{2p_y} \lt \pi_{2p_x}^* = \pi_{2p_y}^* \lt \sigma_{2p_z}^*
$$

For $\mathrm{B}_2$, $\mathrm{C}_2$, $\mathrm{N}_2$ (and $\mathrm{Li}_2$, $\mathrm{Be}_2$), the
$\sigma_{2p_z}$ and $\pi_{2p}$ levels are reversed:

$$
\cdots \lt \pi_{2p_x} = \pi_{2p_y} \lt \sigma_{2p_z} \lt \pi_{2p_x}^* = \pi_{2p_y}^* \lt \sigma_{2p_z}^*
$$

### Bond Order

$$
\mathrm{Bond order} = \frac{N_{\mathrm{bonding}} - N_{\mathrm{antibonding}}}{2}
$$

| Molecule        | Bond order | Bond type      | Magnetic         |
| --------------- | ---------- | -------------- | ---------------- |
| $\mathrm{H}_2$  | $1$        | Single         | Diamagnetic      |
| $\mathrm{He}_2$ | $0$        | Does not exist | —                |
| $\mathrm{Li}_2$ | $1$        | Single         | Diamagnetic      |
| $\mathrm{B}_2$  | $1$        | Single         | **Paramagnetic** |
| $\mathrm{C}_2$  | $2$        | Double         | Diamagnetic      |
| $\mathrm{N}_2$  | $3$        | Triple         | Diamagnetic      |
| $\mathrm{O}_2$  | $2$        | Double         | **Paramagnetic** |
| $\mathrm{F}_2$  | $1$        | Single         | Diamagnetic      |
| $\mathrm{Ne}_2$ | $0$        | Does not exist | —                |

### Key Successes of MO Theory

- Explains why $\mathrm{O}_2$ is **paramagnetic** (two unpaired electrons in $\pi^*$ orbitals) —
  VSEPR and valence bond theory cannot explain this.
- Explains why $\mathrm{He}_2$ and $\mathrm{Ne}_2$ do not exist (bond order = 0).
- Predicts correct bond orders and bond lengths.

### Common Pitfalls

- The ordering of $\sigma_{2p}$ and $\pi_{2p}$ reverses between $\mathrm{N}_2$ and $\mathrm{O}_2$.
- Bond order of zero means the molecule is unstable.
- Antibonding electrons weaken the bond more than bonding electrons strengthen it.

---

## 4. Metallic Bonding

### The Sea of Electrons Model

In a metal, the valence electrons are delocalised over the entire lattice of positive metal ions.
These delocalised electrons form an "electron sea" that holds the metal cations together through
electrostatic attraction.

### Properties Explained by Metallic Bonding

| Property                | Explanation                                                               |
| ----------------------- | ------------------------------------------------------------------------- |
| Electrical conductivity | Delocalised electrons can move freely under an applied potential          |
| Thermal conductivity    | Delocalised electrons transfer kinetic energy                             |
| Malleability            | Cations can slide past each other without breaking the metallic bond      |
| Ductility               | Same as malleability — layers of cations can shift                        |
| High melting points     | Strong electrostatic attraction between cations and electrons             |
| Luster                  | Delocalised electrons absorb and re-emit light at all visible wavelengths |

### Factors Affecting Metallic Bond Strength

| Factor                     | Effect                                         |
| -------------------------- | ---------------------------------------------- |
| More delocalised electrons | Stronger bonding                               |
| Smaller ionic radius       | Stronger bonding (cations closer to electrons) |
| Higher ionic charge        | Stronger bonding                               |

| Comparison | Stronger bonding | Reason                                                |
| ---------- | ---------------- | ----------------------------------------------------- |
| Na vs Al   | Al               | Al contributes 3 electrons, Na contributes 1          |
| Mg vs Ca   | Mg               | $\mathrm{Mg}^{2+}$ is smaller than $\mathrm{Ca}^{2+}$ |

---

## 5. Band Theory

### Formation of Energy Bands

When a large number of atoms are brought together (as in a metal), the discrete atomic energy levels
broaden into **energy bands** due to orbital overlap.

- **Valence band**: the highest occupied band at $0\mathrm{ K}$.
- **Conduction band**: the lowest unoccupied band.
- **Band gap** ($E_g$): the energy difference between the top of the valence band and the bottom of
  the conduction band.

### Classification of Solids

| Type          | Band gap    | Conductivity                    | Examples                                                             |
| ------------- | ----------- | ------------------------------- | -------------------------------------------------------------------- |
| Metal         | $E_g = 0$   | High; electrons easily promoted | $\mathrm{Cu}$, $\mathrm{Fe}$, $\mathrm{Na}$                          |
| Semiconductor | Small $E_g$ | Moderate; temperature-dependent | $\mathrm{Si}$ ($1.1\mathrm{ eV}$), $\mathrm{Ge}$ ($0.7\mathrm{ eV}$) |
| Insulator     | Large $E_g$ | Very low                        | Diamond ($5.5\mathrm{ eV}$), $\mathrm{SiO}_2$                        |

### Semiconductor Behaviour

In an intrinsic semiconductor at $0\mathrm{ K}$, the valence band is full and the conduction band is
empty. As temperature increases:

1. Some electrons gain enough energy to cross the band gap.
2. These electrons enter the conduction band and carry charge.
3. The holes left in the valence band also contribute to conduction.

$$
n_i \propto \exp\!\left(-\frac{E_g}{2k_BT}\right)
$$

### Doping

- **n-type semiconductor**: doped with a Group 15 element (e.g., P in Si). Extra electrons are
  donated to the conduction band.
- **p-type semiconductor**: doped with a Group 13 element (e.g., B in Si). Holes are created in the
  valence band.

### Common Pitfalls

- The band gap is a property of the bulk material, not individual atoms.
- Metals have overlapping valence and conduction bands, not a zero band gap with separate bands.
- In p-type semiconductors, it is holes (positive charge carriers) that conduct, not the dopant
  atoms themselves.

---

## Practice Problems

<details>
<summary>Problem 1</summary>

Predict the shape and bond angles of $\mathrm{ClF}_3$ and explain why the lone pairs occupy
equatorial positions.

**Solution:**

Chlorine has $7$ valence electrons. In $\mathrm{ClF}_3$: $3$ bonding pairs + $2$ lone pairs = $5$
regions of electron density (trigonal bipyramidal electron pair geometry).

The lone pairs occupy **equatorial** positions because this minimises the number of $90\degree$ lone
pair--bonding pair repulsions. If the lone pairs were axial, they would experience three $90\degree$
repulsions each. In equatorial positions, they experience only two $90\degree$ repulsions each.

Molecular shape: **T-shaped**. Bond angles: approximately $87.5\degree$ and $175\degree$ (slightly
compressed from $90\degree$ and $180\degree$ due to lone pair repulsion).

</details>

<details>
<summary>Problem 2</summary>

Construct the MO diagram for $\mathrm{O}_2$ and use it to explain the paramagnetism and bond order.

**Solution:**

Electron configuration of $\mathrm{O}_2$ ($12$ valence electrons):

$$
\sigma_{2s}^2\, (\sigma_{2s}^*)^2\, \sigma_{2p_z}^2\, \pi_{2p_x}^2\, \pi_{2p_y}^2\, (\pi_{2p_x}^*)^1\, (\pi_{2p_y}^*)^1
$$

Bond order $= \frac{10 - 6}{2} = 2$

The two unpaired electrons in the degenerate $\pi_{2p}^*$ orbitals make $\mathrm{O}_2$ paramagnetic.
This is confirmed experimentally: liquid oxygen is attracted to a magnet.

</details>

<details>
<summary>Problem 3</summary>

Explain why the melting point of aluminium ($660\degree\mathrm{C}$) is much higher than that of
sodium ($98\degree\mathrm{C}$).

**Solution:**

Aluminium has the electron configuration $[\mathrm{Ne}]\, 3s^2\, 3p^1$ and contributes **three**
delocalised electrons to the metallic bond. Sodium has $[\mathrm{Ne}]\, 3s^1$ and contributes only
**one**. More delocalised electrons produce stronger electrostatic attraction between the cations
and the electron sea. Additionally, $\mathrm{Al}^{3+}$ is smaller than $\mathrm{Na}^+$, so the
charge density is higher and the ions are closer together. Both factors increase the strength of the
metallic bond and therefore the melting point.

</details>

<details>
<summary>Problem 4</summary>

Silicon has a band gap of $1.1\mathrm{ eV}$. Calculate the minimum wavelength of light required to
excite an electron from the valence band to the conduction band.

**Solution:**

$$
E = \frac{hc}{\lambda} \implies \lambda = \frac{hc}{E}
$$

$$
\lambda = \frac{(6.626 \times 10^{-34})(3.00 \times 10^8)}{1.1 \times 1.602 \times 10^{-19}} = \frac{1.988 \times 10^{-25}}{1.762 \times 10^{-19}} = 1.13 \times 10^{-6}\mathrm{ m} = 1130\mathrm{ nm}
$$

This is in the infrared region.

</details>
