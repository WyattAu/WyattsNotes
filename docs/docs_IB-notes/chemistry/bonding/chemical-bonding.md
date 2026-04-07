---
title: Chemical Bonding and Structure
date: 2026-04-07T00:00:00.000Z
tags:
  - Chemistry
  - IB
categories:
  - Chemistry
  - IB
slug: chemical-bonding-and-structure
---

## Introduction

### Why Atoms Bond

Atoms interact to achieve lower potential energy. This is a stability argument. An isolated atom is
a high-energy state; when atoms rearrange their electrons to form bonds, the resulting configuration
sits in an energy well. The depth of that well is the bond enthalpy.

There are three broad categories of chemical bonding:

| Bond Type | Mechanism                 | Typical Participants  | Directionality  |
| --------- | ------------------------- | --------------------- | --------------- |
| Ionic     | Electron transfer         | Metal + non-metal     | Non-directional |
| Covalent  | Electron sharing          | Non-metal + non-metal | Directional     |
| Metallic  | Delocalised electron pool | Metal atoms           | Non-directional |

Beyond intramolecular bonds, **intermolecular forces** govern how molecules interact with each
other. These are weaker by one to two orders of magnitude but are critical for determining physical
properties such as melting point, boiling point, and solubility.

**Definition.** The **bond enthalpy** is the average enthalpy change when one mole of a specified
type of bond is broken in the gaseous phase, measured in kJ/mol.

---

## Ionic Bonding

### Mechanism

Ionic bonding results from the electrostatic attraction between cations and anions formed by
complete electron transfer from a metal atom to a non-metal atom.

The driving force is the attainment of noble gas electron configurations:

$$
\text{Na}(s) \to \text{Na}^+(g) + e^- \quad \Delta H_{\text{at}}^\circ = +108\text{ kJ/mol}
$$

$$
\frac{1}{2}\text{Cl}_2(g) \to \text{Cl}(g) \quad \Delta H_{\text{at}}^\circ = +122\text{ kJ/mol}
$$

$$
\text{Cl}(g) + e^- \to \text{Cl}^-(g) \quad \Delta H_{\text{EA}} = -349\text{ kJ/mol}
$$

$$
\text{Na}^+(g) + \text{Cl}^-(g) \to \text{NaCl}(s) \quad \Delta H_{\text{LE}} = -787\text{ kJ/mol}
$$

**Definition.** **Lattice energy** ($\Delta H_{\text{LE}}$) is the enthalpy change when one mole of
an ionic solid is formed from its gaseous ions. It is always exothermic. A more negative lattice
energy indicates a stronger ionic bond.

### Factors Affecting Lattice Energy

The Born-Lande equation captures the key variables:

$$
\Delta H_{\text{LE}} \propto -\frac{|z^+| \cdot |z^-|}{r_+ + r_-}
$$

| Factor            | Effect on Lattice Energy | Example                      |
| ----------------- | ------------------------ | ---------------------------- |
| Higher ion charge | More negative (stronger) | $\text{MgO} \gt \text{NaCl}$ |
| Smaller ion radii | More negative (stronger) | $\text{LiF} \gt \text{NaF}$  |

| Compound | $   | z^+ | $   | $     | z^- | $   | $r_+ + r_-$ (pm) | Lattice Energy (kJ/mol) |
| -------- | --- | --- | --- | ----- | --- | --- | ---------------- | ----------------------- |
| NaCl     | +1  | -1  | 276 | -787  |
| MgO      | +2  | -2  | 210 | -3795 |
| LiF      | +1  | -1  | 201 | -1036 |
| CaO      | +2  | -2  | 241 | -3414 |

### The Born-Haber Cycle

The Born-Haber cycle is an application of Hess's law that links lattice energy to thermodynamic data
you can measure experimentally.

**Definition.** The **Born-Haber cycle** is a thermochemical cycle that decomposes the formation of
an ionic solid into a series of sequential steps, allowing calculation of lattice energy from
measurable quantities.

For NaCl:

$$
\Delta H_f^\circ = \Delta H_{\text{at}}^\circ(\text{Na}) + \frac{1}{2}\Delta H_{\text{at}}^\circ(\text{Cl}_2) + \text{IE}_1(\text{Na}) + \text{EA}_1(\text{Cl}) + \Delta H_{\text{LE}}
$$

Rearranging for lattice energy:

$$
\Delta H_{\text{LE}} = \Delta H_f^\circ - \Delta H_{\text{at}}^\circ(\text{Na}) - \frac{1}{2}\Delta H_{\text{at}}^\circ(\text{Cl}_2) - \text{IE}_1(\text{Na}) - \text{EA}_1(\text{Cl})
$$

Substituting values:

$$
\Delta H_{\text{LE}} = -411 - 108 - 122 - 496 - (-349) = -788\text{ kJ/mol}
$$

:::info[IB Exam Tip]

When constructing a Born-Haber cycle diagram, every arrow must be labelled with the correct enthalpy
term. The most common error is confusing $\Delta H_{\text{at}}^\circ$ (atomisation of the solid
element) with $\Delta H_{\text{sub}}$ (sublimation) -- for metals they are the same quantity, but
the terminology matters.

:::

### Physical Properties of Ionic Compounds

| Property                                   | Explanation                                                                              |
| ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| High melting/boiling point                 | Strong electrostatic forces in the lattice require large energy input to break           |
| Brittle                                    | Shifting one layer of ions places like charges adjacent, causing repulsion and fracture  |
| Conduct electricity when molten or aqueous | Ions are free to move and carry charge; in the solid state ions are fixed in the lattice |
| Soluble in polar solvents                  | Polar water molecules can surround and stabilise individual ions (solvation/hydration)   |

### Solubility Rules

| Ion Group                    | Solubility Pattern                                             |
| ---------------------------- | -------------------------------------------------------------- |
| Group 1 cations, NH$_4^+$    | Always soluble                                                 |
| Nitrates (NO$_3^-$)          | Always soluble                                                 |
| Acetates (CH$_3$COO$^-$)     | Always soluble                                                 |
| Chlorides, bromides, iodides | Soluble except with Ag$^+$, Pb$^{2+}$, Hg$_2^{2+}$             |
| Sulfates (SO$_4^{2-}$)       | Soluble except with Ba$^{2+}$, Pb$^{2+}$, Ca$^{2+}$ (slightly) |
| Hydroxides (OH$^-$)          | Insoluble except with Group 1, Ba$^{2+}$, Ca$^{2+}$ (slightly) |
| Carbonates (CO$_3^{2-}$)     | Insoluble except with Group 1, NH$_4^+$                        |
| Phosphates (PO$_4^{3-}$)     | Insoluble except with Group 1, NH$_4^+$                        |

---

## Covalent Bonding

### Lewis Structures

Lewis structures represent valence electrons as dots and show bonding pairs as lines (each line = 2
shared electrons).

Rules for drawing Lewis structures:

1. Count the total number of valence electrons from all atoms.
2. Identify the central atom (lowest electronegativity, excluding H which is always terminal).
3. Connect all atoms with single bonds (use 2 electrons per bond).
4. Complete the octets of terminal atoms first.
5. Place any remaining electrons on the central atom.
6. If the central atom lacks an octet, form double or triple bonds by converting lone pairs on
   terminal atoms into bonding pairs.

:::warning[Common Mistake]

Hydrogen only needs 2 electrons (duet rule). Beryllium can be stable with 4 electrons, and boron
with 6. Do not force an octet on these atoms.

:::

### Exceptions to the Octet Rule

| Element      | Reason                                        | Example                  |
| ------------ | --------------------------------------------- | ------------------------ |
| Be           | Only 4 valence electrons available            | BeCl$_2$                 |
| B            | Only 6 valence electrons in stable compounds  | BF$_3$                   |
| P, S, Cl, Xe | Can expand octet using d-orbitals (period 3+) | PCl$_5$, SF$_6$, XeF$_4$ |

### Sigma and Pi Bonds

**Definition.** A **sigma bond** ($\sigma$) is formed by end-to-end (head-on) overlap of atomic
orbitals. Electron density is concentrated along the internuclear axis.

**Definition.** A **pi bond** ($\pi$) is formed by side-to-side (lateral) overlap of parallel
p-orbitals. Electron density is concentrated above and below the internuclear axis.

| Feature          | Sigma Bond                   | Pi Bond                      |
| ---------------- | ---------------------------- | ---------------------------- |
| Orbital overlap  | Head-on                      | Side-to-side                 |
| Electron density | Along internuclear axis      | Above and below the axis     |
| Rotation         | Free rotation about the bond | No rotation (locks the bond) |
| Strength         | Stronger                     | Weaker                       |
| First bond       | Always sigma                 | Never pi                     |
| Additional       | Can exist alone              | Only with an existing sigma  |

A single bond = 1 sigma. A double bond = 1 sigma + 1 pi. A triple bond = 1 sigma + 2 pi.

### Bond Polarity and Electronegativity

**Definition.** **Electronegativity** is the ability of an atom to attract the bonding electron pair
towards itself within a covalent bond.

The Pauling scale assigns fluorine (the most electronegative element) a value of 4.0.

| Element | Electronegativity (Pauling) |
| ------- | --------------------------- |
| F       | 4.0                         |
| O       | 3.5                         |
| N, Cl   | 3.0                         |
| C       | 2.5                         |
| S, P    | 2.1                         |
| H       | 2.2                         |
| Na, K   | 0.9, 0.8                    |

### Electronegativity Trends

- **Across a period (left to right):** Increases. Nuclear charge increases with constant shielding,
  pulling electron density in.
- **Down a group:** Decreases. Shielding increases and atomic radius increases, reducing the
  nucleus-electron attraction.

### Classifying Bond Type by Electronegativity Difference

| $\Delta\text{EN}$ | Bond Classification   |
| ----------------- | --------------------- |
| 0.0               | Non-polar covalent    |
| 0.1 -- 1.7        | Polar covalent        |
| $\gt 1.7$         | Ionic (predominantly) |

:::info[IB Exam Tip]

The threshold of 1.7 is a guideline, not an absolute boundary. For example, H-Cl has
$\Delta\text{EN} = 0.9$ (polar covalent), but Al-Cl has $\Delta\text{EN} = 1.55$ (still considered
covalent in AlCl$_3$, a molecular compound). Always consider the compound's actual properties.

:::

### Dipole Moments

A **bond dipole** is represented by an arrow pointing towards the more electronegative atom, with a
cross at the less electronegative end.

The **molecular dipole moment** ($\mu$) is the vector sum of all individual bond dipoles. A molecule
can have polar bonds but be non-polar overall if the bond dipoles cancel by symmetry.

$$
\vec{\mu}_{\text{net}} = \sum \vec{\mu}_i
$$

| Molecule | Bond Dipoles | Molecular Dipole | Reason                               |
| -------- | ------------ | ---------------- | ------------------------------------ |
| CO$_2$   | Present      | Zero             | Linear geometry, dipoles cancel      |
| H$_2$O   | Present      | Present          | Bent geometry, dipoles do not cancel |
| CCl$_4$  | Present      | Zero             | Tetrahedral symmetry, cancellation   |
| CHCl$_3$ | Present      | Present          | Asymmetric substitution              |

---

## Metallic Bonding

### The Sea of Electrons Model

In a metallic lattice, metal atoms release their valence electrons into a delocalised "sea" or
"cloud" of electrons. The resulting cations are held in a regular lattice by electrostatic
attraction to this delocalised electron pool.

This model explains the key properties of metals:

| Property                   | Explanation                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| High melting points        | Strong metallic bonding throughout the lattice                               |
| Electrical conductivity    | Delocalised electrons are free to move under an applied potential            |
| Malleability and ductility | Layers of cations can slide past each other without breaking metallic bonds  |
| Thermal conductivity       | Delocalised electrons transfer kinetic energy efficiently                    |
| Lustrous appearance        | Delocalised electrons absorb and re-emit photons across the visible spectrum |
| Alloy formation            | Atoms of different sizes distort the lattice, preventing layer sliding       |

### Factors Affecting Metallic Bond Strength

| Factor                      | Effect                                     | Example     |
| --------------------------- | ------------------------------------------ | ----------- |
| Number of valence electrons | More delocalised electrons = stronger bond | Al $\gt$ Na |
| Nuclear charge              | Higher charge = stronger attraction        | Ca $\gt$ K  |
| Ionic radius                | Smaller radius = stronger bond             | Mg $\gt$ Ca |

| Metal | Melting Point ($\degree$C) | Reason                               |
| ----- | -------------------------- | ------------------------------------ |
| Na    | 98                         | 1 valence electron, large radius     |
| Mg    | 650                        | 2 valence electrons                  |
| Al    | 660                        | 3 valence electrons                  |
| W     | 3422                       | Many valence electrons, small radius |

### Alloys

**Definition.** An **alloy** is a homogeneous mixture of two or more elements, at least one of which
is a metal.

| Alloy Type     | Description                                             | Effect on Properties                                       |
| -------------- | ------------------------------------------------------- | ---------------------------------------------------------- |
| Substitutional | Atoms of similar size replace host atoms in the lattice | Distorts lattice, increases hardness, reduces malleability |
| Interstitial   | Small atoms (C, N) fit into gaps in the lattice         | Blocks dislocation movement, increases hardness            |

Steel is an interstitial alloy of iron with carbon. Brass is a substitutional alloy of copper and
zinc.

---

## Intermolecular Forces

Intermolecular forces (IMFs) are the attractions between molecules. They are much weaker than
intramolecular bonds (typically 2--50 kJ/mol vs 150--1000 kJ/mol for covalent bonds).

### Types of Intermolecular Forces

| IMF Type          | Strength (kJ/mol) | Mechanism                                        | Present In                        |
| ----------------- | ----------------- | ------------------------------------------------ | --------------------------------- |
| London dispersion | 0.05 -- 40        | Temporary dipole from electron cloud fluctuation | All molecules                     |
| Dipole-dipole     | 5 -- 20           | Permanent dipole-dipole attraction               | Polar molecules                   |
| Hydrogen bonding  | 10 -- 40          | H bonded to N, O, or F attracted to lone pair    | Molecules with N-H, O-H, or F-H   |
| Ion-dipole        | 10 -- 50          | Ion interacts with molecular dipole              | Ionic compounds in polar solvents |

### London Dispersion Forces

**Definition.** **London dispersion forces** (also called induced dipole-induced dipole forces or
van der Waals forces) arise from temporary, instantaneous dipoles created by the uneven distribution
of electrons at any given moment.

Factors affecting London dispersion force strength:

1. **Number of electrons:** More electrons = larger electron cloud = stronger temporary dipoles.
2. **Molecular shape (surface area):** Larger contact area between molecules = stronger forces.

| Molecule     | Electrons | Boiling Point ($\degree$C) | Reason                       |
| ------------ | --------- | -------------------------- | ---------------------------- |
| CH$_4$       | 10        | -161                       | Few electrons, small surface |
| C$_2$H$_6$   | 18        | -89                        | More electrons               |
| C$_4$H\_{10} | 50        | -1                         | Many more electrons          |

### Dipole-Dipole Forces

Polar molecules have a permanent separation of charge. The positive end of one molecule is attracted
to the negative end of another.

**Definition.** **Dipole-dipole forces** are the electrostatic attractions between the positive end
of one polar molecule and the negative end of another.

### Hydrogen Bonding

**Definition.** **Hydrogen bonding** is a particularly strong dipole-dipole interaction that occurs
when a hydrogen atom is covalently bonded to a highly electronegative atom (N, O, or F) and is
simultaneously attracted to a lone pair on another N, O, or F atom.

Requirements:

- A hydrogen atom bonded to N, O, or F.
- A lone pair on an N, O, or F atom on a neighbouring molecule.

| Substance | Boiling Point ($\degree$C) | Why so high?                          |
| --------- | -------------------------- | ------------------------------------- |
| H$_2$O    | 100                        | Extensive hydrogen bonding network    |
| HF        | 20                         | Strong H-bonds (1 per molecule)       |
| NH$_3$    | -33                        | Fewer H-bonds per molecule            |
| H$_2$S    | -60                        | No hydrogen bonding (S not EN enough) |
| CH$_4$    | -161                       | Only London dispersion forces         |

:::info[IB Exam Tip]

Water has an anomalously high boiling point compared to H$_2$S, H$_2$Se, and H$_2$Te. The expected
trend (boiling point increases down the group due to increasing electrons) is overridden by hydrogen
bonding in water. This is a classic IB exam question.

:::

### Ion-Dipole Forces

When an ionic compound dissolves in a polar solvent like water, the ions interact with the molecular
dipoles. This is the force responsible for the solvation of ions.

$$
\text{Na}^+ \cdots \delta^-\text{O}(\text{H}_2\text{O}) \qquad \text{Cl}^- \cdots \delta^+\text{H}(\text{H}_2\text{O})
$$

### Trends in Boiling Points

For comparing boiling points of similar molecules:

1. Check for hydrogen bonding first (dominant IMF).
2. Among non-H-bonding molecules, compare dipole-dipole vs London dispersion.
3. For non-polar molecules, boiling point increases with molar mass (more electrons = stronger
   London forces).
4. For isomers, the more branched isomer has a lower boiling point (smaller surface area).

### Effect of IMF on Physical Properties

| Property        | Strong IMF | Weak IMF |
| --------------- | ---------- | -------- |
| Melting point   | High       | Low      |
| Boiling point   | High       | Low      |
| Vapour pressure | Low        | High     |
| Viscosity       | High       | Low      |
| Surface tension | High       | Low      |
| Volatility      | Low        | High     |

---

## Molecular Geometry

### VSEPR Theory

**Definition.** **Valence Shell Electron Pair Repulsion (VSEPR) theory** states that electron pairs
(bonding and non-bonding) around a central atom will arrange themselves to minimise repulsion,
adopting geometries that maximise the angles between them.

The repulsion order is:

$$
\text{lone pair--lone pair} \gt \text{lone pair--bond pair} \gt \text{bond pair--bond pair}
$$

This is because lone pairs are held by only one nucleus and occupy more space, while bonding pairs
are constrained between two nuclei.

### AXnEm Notation

- **A** = central atom
- **X** = bonded atom (bonding pair)
- **n** = number of bonding pairs
- **E** = lone pair on the central atom
- **m** = number of lone pairs

### Electron Domain Geometries

The base geometries depend on the total number of electron domains ($n + m$):

| Total Domains | Base Geometry        | Bond Angles               |
| ------------- | -------------------- | ------------------------- |
| 2             | Linear               | 180$\degree$              |
| 3             | Trigonal planar      | 120$\degree$              |
| 4             | Tetrahedral          | 109.5$\degree$            |
| 5             | Trigonal bipyramidal | 90$\degree$, 120$\degree$ |
| 6             | Octahedral           | 90$\degree$               |

### Molecular Shapes and Examples

#### 2 Electron Domains

| Notation | Shape  | Bond Angle   | Example          |
| -------- | ------ | ------------ | ---------------- |
| AX$_2$   | Linear | 180$\degree$ | CO$_2$, BeCl$_2$ |

#### 3 Electron Domains

| Notation | Shape           | Bond Angle       | Example          |
| -------- | --------------- | ---------------- | ---------------- |
| AX$_3$   | Trigonal planar | 120$\degree$     | BF$_3$, AlCl$_3$ |
| AX$_2$E  | Bent/V-shaped   | $\lt 120\degree$ | SO$_2$, O$_3$    |

:::warning[Common Mistake]

Students often forget that lone pairs repel more strongly, so AX$_2$E has a bond angle less than
120$\degree$, not exactly 120$\degree$. SO$_2$ has a bond angle of approximately 119.5$\degree$.

:::

#### 4 Electron Domains

| Notation    | Shape              | Bond Angle         | Example         |
| ----------- | ------------------ | ------------------ | --------------- |
| AX$_4$      | Tetrahedral        | 109.5$\degree$     | CH$_4$, CCl$_4$ |
| AX$_3$E     | Trigonal pyramidal | $\lt 109.5\degree$ | NH$_3$, PCl$_3$ |
| AX$_2$E$_2$ | Bent               | $\lt 109.5\degree$ | H$_2$O, H$_2$S  |

| Molecule | Measured Angle | Deviation from 109.5$\degree$ |
| -------- | -------------- | ----------------------------- |
| CH$_4$   | 109.5$\degree$ | 0$\degree$                    |
| NH$_3$   | 107.0$\degree$ | -2.5$\degree$                 |
| H$_2$O   | 104.5$\degree$ | -5.0$\degree$                 |

The increasing deviation reflects the increasing number of lone pairs compressing the bonding pairs.

#### 5 Electron Domains

| Notation    | Shape                | Bond Angles                       | Example |
| ----------- | -------------------- | --------------------------------- | ------- |
| AX$_5$      | Trigonal bipyramidal | 90$\degree$, 120$\degree$         | PCl$_5$ |
| AX$_4$E     | Seesaw               | $\lt 90\degree$, $\lt 120\degree$ | SF$_4$  |
| AX$_3$E$_2$ | T-shaped             | $\lt 90\degree$                   | ClF$_3$ |
| AX$_2$E$_3$ | Linear               | 180$\degree$                      | XeF$_2$ |

In a trigonal bipyramidal arrangement, lone pairs always occupy **equatorial positions** because
this minimises repulsion (equatorial positions have two 90$\degree$ interactions vs three
90$\degree$ interactions for axial positions).

#### 6 Electron Domains

| Notation    | Shape            | Bond Angles     | Example |
| ----------- | ---------------- | --------------- | ------- |
| AX$_6$      | Octahedral       | 90$\degree$     | SF$_6$  |
| AX$_5$E     | Square pyramidal | $\lt 90\degree$ | BrF$_5$ |
| AX$_4$E$_2$ | Square planar    | 90$\degree$     | XeF$_4$ |

In octahedral geometry, all positions are equivalent. Lone pairs occupy positions 180$\degree$ apart
to maximise separation.

### Polarity Prediction from Geometry

To determine if a molecule is polar:

1. Draw the Lewis structure and identify polar bonds.
2. Determine the molecular geometry.
3. Check whether bond dipoles cancel by symmetry.

| Geometry                      | Polar Bonds Cancel? | Result    |
| ----------------------------- | ------------------- | --------- |
| Linear (AX$_2$)               | Yes (opposing)      | Non-polar |
| Trigonal planar (AX$_3$)      | Yes (symmetric)     | Non-polar |
| Tetrahedral (AX$_4$)          | Yes (symmetric)     | Non-polar |
| Trigonal pyramidal (AX$_3$E)  | No (asymmetric)     | Polar     |
| Bent (AX$_2$E or AX$_2$E$_2$) | No (asymmetric)     | Polar     |
| Octahedral (AX$_6$)           | Yes (symmetric)     | Non-polar |
| Square planar (AX$_4$E$_2$)   | Yes (symmetric)     | Non-polar |

:::info[IB Exam Tip]

A common exam question asks whether a molecule like CHCl$_3$ or CH$_2$Cl$_2$ is polar. Even though
C-H and C-Cl bonds have different polarities, the key is whether the vector sum of all bond dipoles
equals zero. CHCl$_3$ is polar (no symmetry), but CCl$_4$ is non-polar (perfect tetrahedral
symmetry). CH$_2$Cl$_2$ is polar because the two C-Cl dipoles and two C-H dipoles do not cancel.

:::

---

## Hybridization

### SL Content: sp, sp$^2$, sp$^3$

**Definition.** **Hybridization** is the mathematical mixing of atomic orbitals on a central atom to
form a new set of equivalent hybrid orbitals that match the observed geometry.

| Hybridization | Atomic Orbitals Mixed | Number of Hybrid Orbitals | Geometry        | Bond Angle     |
| ------------- | --------------------- | ------------------------- | --------------- | -------------- |
| sp            | 1s + 1p               | 2                         | Linear          | 180$\degree$   |
| sp$^2$        | 1s + 2p               | 3                         | Trigonal planar | 120$\degree$   |
| sp$^3$        | 1s + 3p               | 4                         | Tetrahedral     | 109.5$\degree$ |

### How to Determine Hybridization

Count the number of electron domains (bonding pairs + lone pairs) around the central atom:

- 2 domains = sp
- 3 domains = sp$^2$
- 4 domains = sp$^3$
- 5 domains = sp$^3$d
- 6 domains = sp$^3$d$^2$

### Examples

| Molecule | Central Atom | Domains | Hybridization | Geometry           |
| -------- | ------------ | ------- | ------------- | ------------------ |
| BeCl$_2$ | Be           | 2       | sp            | Linear             |
| BF$_3$   | B            | 3       | sp$^2$        | Trigonal planar    |
| CH$_4$   | C            | 4       | sp$^3$        | Tetrahedral        |
| NH$_3$   | N            | 4       | sp$^3$        | Trigonal pyramidal |
| H$_2$O   | O            | 4       | sp$^3$        | Bent               |

### Hybridization and Multiple Bonds

In a double bond, one bond is sigma (hybrid orbital overlap) and one is pi (unhybridized p-orbital
overlap). The hybridization of the central atom is determined by the total number of domains (not
bonds).

| Molecule            | Domains on C | Hybridization | Sigma Bonds | Pi Bonds |
| ------------------- | ------------ | ------------- | ----------- | -------- |
| C$_2$H$_4$ (ethene) | 3            | sp$^2$        | 5           | 1        |
| C$_2$H$_2$ (ethyne) | 2            | sp            | 3           | 2        |
| CO$_2$              | 2            | sp            | 2           | 2        |
| HCN                 | 2            | sp            | 2           | 2        |

---

## Resonance

### Delocalization

**Definition.** **Resonance** occurs when a molecule or ion can be represented by two or more valid
Lewis structures that differ only in the positions of electrons (not atoms). The actual structure is
a hybrid -- an average of all resonance forms.

Resonance stabilises a molecule. The more resonance structures, the greater the delocalisation
energy (lower energy, more stable).

### Ozone (O$_3$)

Ozone has two equivalent resonance structures:

$$
\chemfig{O=O^{-}-O^{+}} \longleftrightarrow \chemfig{^{-}O-O^{+}=O}
$$

The actual O-O bond order is 1.5, and the bond length is intermediate between a single and double
bond (127.8 pm vs 121 pm for O=O and 148 pm for O-O).

### Carbonate Ion (CO$_3^{2-}$)

Three equivalent resonance structures, each with one C=O double bond and two C-O single bonds. The
actual bond order is 1.33 for each C-O bond.

$$
\text{Bond length measured: } 136\text{ pm (between } 123\text{ pm for C=O and } 143\text{ pm for C-O)}
$$

### Benzene (C$_6$H$_6$)

Benzene has two Kekule structures with alternating single and double bonds. The actual structure
has:

- Six equivalent C-C bonds with bond order 1.5
- All bond lengths identical: 140 pm (between 134 pm for C=C and 154 pm for C-C)
- A delocalised pi electron system above and below the ring
- Planar geometry (sp$^2$ hybridised carbons)

:::info[IB Exam Tip]

The enthalpy of hydrogenation of benzene (-208 kJ/mol, for 3 moles of H$_2$) is less exothermic than
expected from three isolated C=C bonds (-360 kJ/mol). The difference (152 kJ/mol) is the **resonance
energy** (or delocalisation energy), which is a direct measure of the extra stability gained from
electron delocalisation.

:::

---

## HL-Only Extensions

### Formal Charge

**Definition.** **Formal charge** is the charge assigned to an atom in a Lewis structure, calculated
by comparing the number of valence electrons in the free atom with the number assigned to it in the
structure.

$$
\text{Formal charge} = V - N_B - \frac{N_L}{2}
$$

where:

- $V$ = number of valence electrons in the free atom
- $N_B$ = number of bonding electrons (shared) assigned to the atom
- $N_L$ = number of lone pair (non-bonding) electrons on the atom

Equivalently:

$$
\text{Formal charge} = V - (\text{number of bonds}) - (\text{number of lone pair electrons})
$$

**Rules for choosing the best Lewis structure:**

1. The best structure minimises formal charges.
2. Negative formal charges should reside on the most electronegative atoms.
3. Like charges should not be adjacent.
4. Formal charges closest to zero are preferred.

:::info[Example: SO$_4^{2-}$]

Sulfur has 6 valence electrons. With four single bonds to oxygen and no lone pairs:

$$
\text{FC}(\text{S}) = 6 - 4 - 0 = +2
$$

Each singly-bonded oxygen: $\text{FC} = 6 - 1 - 6 = -1$

Total charge: $+2 + 4(-1) = -2$. This is valid but has large formal charges. Adding double bonds
reduces the formal charges.

With two S=O double bonds:

$$
\text{FC}(\text{S}) = 6 - 6 - 0 = 0
$$

The two double-bonded oxygens: $\text{FC} = 6 - 2 - 4 = 0$

The two single-bonded oxygens: $\text{FC} = 6 - 1 - 6 = -1$

Total charge: $0 + 0 + 2(-1) = -2$. This is the preferred structure.

:::

### sp$^3$d and sp$^3$d$^2$ Hybridization (HL)

These hybridizations involve d-orbitals and are used for expanded octet species:

| Hybridization | Orbitals Mixed | Domains | Geometry             | Bond Angles               |
| ------------- | -------------- | ------- | -------------------- | ------------------------- |
| sp$^3$d       | 1s + 3p + 1d   | 5       | Trigonal bipyramidal | 90$\degree$, 120$\degree$ |
| sp$^3$d$^2$   | 1s + 3p + 2d   | 6       | Octahedral           | 90$\degree$               |

| Molecule | Central Atom | Domains | Hybridization |
| -------- | ------------ | ------- | ------------- |
| PCl$_5$  | P            | 5       | sp$^3$d       |
| SF$_4$   | S            | 5       | sp$^3$d       |
| ClF$_3$  | Cl           | 5       | sp$^3$d       |
| SF$_6$   | S            | 6       | sp$^3$d$^2$   |
| BrF$_5$  | Br           | 6       | sp$^3$d$^2$   |
| XeF$_4$  | Xe           | 6       | sp$^3$d$^2$   |

### Molecular Orbital Theory (HL)

**Definition.** **Molecular orbital (MO) theory** describes bonding in terms of the combination of
atomic orbitals to form molecular orbitals that belong to the entire molecule.

Key principles:

1. Atomic orbitals combine to form molecular orbitals.
2. The number of molecular orbitals equals the number of atomic orbitals combined.
3. Bonding orbitals are lower in energy than the parent atomic orbitals.
4. Antibonding orbitals are higher in energy than the parent atomic orbitals.

#### MO Diagrams for Homonuclear Diatomic Molecules

For elements in period 2:

- Li$_2$ through N$_2$:
  $\sigma_{2s} \lt \sigma^*_{2s} \lt \pi_{2p_x} = \pi_{2p_y} \lt \sigma_{2p_z} \lt \pi^*_{2p_x} = \pi^*_{2p_y} \lt \sigma^*_{2p_z}$
- O$_2$ through Ne$_2$:
  $\sigma_{2s} \lt \sigma^*_{2s} \lt \sigma_{2p_z} \lt \pi_{2p_x} = \pi_{2p_y} \lt \pi^*_{2p_x} = \pi^*_{2p_y} \lt \sigma^*_{2p_z}$

The s-p mixing in Li$_2$ through N$_2$ pushes the $\sigma_{2p_z}$ above the $\pi_{2p}$ orbitals. For
O$_2$ and F$_2$, the energy gap is large enough that s-p mixing is negligible.

#### Bond Order from MO Theory

$$
\text{Bond order} = \frac{1}{2}(N_{\text{bonding}} - N_{\text{antibonding}})
$$

| Molecule | Bonding Electrons | Antibonding Electrons | Bond Order | Stability   |
| -------- | ----------------- | --------------------- | ---------- | ----------- |
| H$_2$    | 2                 | 0                     | 1          | Stable      |
| He$_2$   | 2                 | 2                     | 0          | Not stable  |
| Li$_2$   | 2                 | 0                     | 1          | Stable      |
| Be$_2$   | 2                 | 2                     | 0          | Not stable  |
| B$_2$    | 4                 | 2                     | 1          | Stable      |
| C$_2$    | 6                 | 2                     | 2          | Stable      |
| N$_2$    | 8                 | 2                     | 3          | Very stable |
| O$_2$    | 8                 | 4                     | 2          | Stable      |
| F$_2$    | 8                 | 6                     | 1          | Stable      |
| Ne$_2$   | 8                 | 8                     | 0          | Not stable  |

:::info[IB Exam Tip]

MO theory explains why O$_2$ is paramagnetic (has unpaired electrons in the $\pi^*$ orbitals). Lewis
structures cannot predict this. This is a classic HL exam question.

:::

#### Paramagnetism vs Diamagnetism

- **Paramagnetic:** Contains unpaired electrons. Attracted to a magnetic field. Examples: O$_2$,
  B$_2$.
- **Diamagnetic:** All electrons are paired. Repelled by a magnetic field. Examples: N$_2$, F$_2$,
  C$_2$.

### Band Theory of Metals and Semiconductors (HL)

When many metal atoms come together in a lattice, their atomic orbitals combine to form **bands** --
a huge number of closely spaced molecular orbitals.

**Definition.** The **valence band** is the highest energy band that is occupied by electrons at 0
K. The **conduction band** is the next higher band, which is empty at 0 K.

#### Classification by Band Gap

| Material Type | Band Gap            | Conductivity at 0 K       | Example |
| ------------- | ------------------- | ------------------------- | ------- |
| Metal         | Overlapping         | Conducts                  | Cu, Na  |
| Semiconductor | Small (0.1 -- 3 eV) | Does not conduct (at 0 K) | Si, Ge  |
| Insulator     | Large ($\gt 3$ eV)  | Does not conduct          | Diamond |

In metals, the valence and conduction bands overlap, so electrons are always available for
conduction. In semiconductors, thermal energy can promote electrons across the band gap, creating
charge carriers.

#### Intrinsic vs Extrinsic Semiconductors

**Intrinsic semiconductors** are pure materials (e.g., pure Si) where conductivity increases with
temperature as more electrons are promoted across the band gap.

**Extrinsic semiconductors** have been doped with impurities:

| Doping Type | Dopant       | Effect                                  | Carrier Type    |
| ----------- | ------------ | --------------------------------------- | --------------- |
| n-type      | Group 15 (P) | Extra electron enters conduction band   | Electron        |
| p-type      | Group 13 (B) | Electron vacancy (hole) in valence band | Hole (positive) |

:::warning[Common Mistake]

The "n" in n-type stands for "negative" (electron carriers), not the element nitrogen. The "p" in
p-type stands for "positive" (hole carriers). Doping does not make the material charged -- the
overall crystal remains electrically neutral.

:::

---

## Exam Practice

### Question 1: Ionic Bonding (SL, 4 marks)

Explain why magnesium oxide has a much higher melting point than sodium chloride.

**Markscheme:**

- Mg$^{2+}$ and O$^{2-}$ have higher charges than Na$^+$ and Cl$^-$ (1 mark).
- Higher ionic charge leads to stronger electrostatic attraction (1 mark).
- More energy is required to overcome the stronger lattice (1 mark).
- Mg$^{2+}$ has a smaller ionic radius than Na$^+$, which further increases lattice energy (1 mark).

---

### Question 2: Lewis Structures and VSEPR (SL, 5 marks)

(a) Draw the Lewis structure of the phosphate ion, PO$_4^{3-}$. (2 marks)

**Markscheme:**

- P is the central atom with 5 valence electrons. Each O contributes 6 valence electrons. Add 3 for
  the -3 charge.
- Total valence electrons: $5 + 4(6) + 3 = 32$.
- P forms single bonds to all four O atoms (8 electrons used, 24 remaining).
- Each O gets 3 lone pairs to complete its octet (24 electrons used).
- P has a formal charge of $+1$; each singly-bonded O has a formal charge of $-1$.
- One P=O double bond is added to reduce formal charges. The structure can have resonance with 4
  equivalent forms.

(b) Determine the shape and bond angle of PO$_4^{3-}$. (3 marks)

**Markscheme:**

- Four bonding pairs, zero lone pairs around P (1 mark).
- Shape is tetrahedral (1 mark).
- Bond angle is approximately 109.5$\degree$ (1 mark).

---

### Question 3: Intermolecular Forces (SL, 4 marks)

Explain why propan-1-ol (CH$_3$CH$_2$CH$_2$OH) has a higher boiling point than propane
(CH$_3$CH$_2$CH$_3$), despite having a similar molar mass.

**Markscheme:**

- Propan-1-ol can form hydrogen bonds between molecules due to the O-H group (1 mark).
- Propane can only form London dispersion forces (1 mark).
- Hydrogen bonding is a much stronger intermolecular force than London dispersion (1 mark).
- More energy is therefore required to separate propan-1-ol molecules (1 mark).

---

### Question 4: Polarity (SL, 3 marks)

Determine whether sulfur tetrafluoride (SF$_4$) is a polar or non-polar molecule, explaining your
reasoning.

**Markscheme:**

- SF$_4$ has a seesaw geometry (AX$_4$E) (1 mark).
- The bond dipoles do not cancel due to the asymmetric shape and presence of a lone pair (1 mark).
- Therefore, SF$_4$ is a polar molecule (1 mark).

---

### Question 5: Resonance (SL/HL, 3 marks)

The carbonate ion, CO$_3^{2-}$, has a measured C-O bond length of 136 pm. Explain this value.

**Markscheme:**

- CO$_3^{2-}$ has three equivalent resonance structures (1 mark).
- Each C-O bond is intermediate between a single and a double bond (bond order = 1.33) (1 mark).
- The bond length of 136 pm is between a typical C-O single bond (143 pm) and a C=O double bond (123
  pm) (1 mark).

---

### Question 6: Born-Haber Cycle (HL, 6 marks)

Calculate the lattice energy of calcium fluoride, CaF$_2$, using the following data:

| Quantity                            | Value (kJ/mol) |
| ----------------------------------- | -------------- |
| $\Delta H_f^\circ$(CaF$_2$)         | -1220          |
| $\Delta H_{\text{at}}^\circ$(Ca)    | +178           |
| $\Delta H_{\text{at}}^\circ$(F$_2$) | +159           |
| IE$_1$(Ca)                          | +590           |
| IE$_2$(Ca)                          | +1145          |
| EA$_1$(F)                           | -328           |

**Markscheme:**

$$
\Delta H_f^\circ = \Delta H_{\text{at}}^\circ(\text{Ca}) + \Delta H_{\text{at}}^\circ(\text{F}_2) + \text{IE}_1 + \text{IE}_2 + 2 \times \text{EA}_1(\text{F}) + \Delta H_{\text{LE}}
$$

$$
-1220 = 178 + 159 + 590 + 1145 + 2(-328) + \Delta H_{\text{LE}}
$$

$$
-1220 = 2416 + \Delta H_{\text{LE}}
$$

$$
\Delta H_{\text{LE}} = -1220 - 2416 = -3636\text{ kJ/mol}
$$

(6 marks for correct cycle setup, correct substitution of all values, and correct arithmetic.)

---

### Question 7: MO Theory (HL, 5 marks)

(a) Draw the molecular orbital energy level diagram for O$_2$. Indicate the electron configuration
and label all orbitals. (3 marks)

**Markscheme:**

Using the O$_2$/F$_2$ ordering (no s-p mixing):

$$
\sigma_{2s}^2\; \sigma^{*2}_{2s}\; \sigma^2_{2p_z}\; \pi^2_{2p_x} = \pi^2_{2p_y}\; \pi^{*1}_{2p_x} = \pi^{*1}_{2p_y}
$$

- Correct orbital energy ordering (1 mark).
- 12 valence electrons correctly placed (1 mark).
- Two unpaired electrons in $\pi^*$ orbitals shown (1 mark).

(b) Explain why O$_2$ is paramagnetic, referring to your diagram. (2 marks)

**Markscheme:**

- O$_2$ has two unpaired electrons in the degenerate $\pi^*_{2p}$ antibonding orbitals (1 mark).
- Species with unpaired electrons are paramagnetic (attracted to a magnetic field) (1 mark).

---

### Question 8: Formal Charge (HL, 4 marks)

Three possible Lewis structures can be drawn for sulfur dioxide, SO$_2$:

1. O=S=O (no formal charges)
2. O=S-O with formal charges of 0 on S, -1 on single-bonded O, +1 on double-bonded O
3. O-S=O with formal charges of 0 on S, -1 on single-bonded O, +1 on double-bonded O

Identify the most stable resonance structure and explain your reasoning.

**Markscheme:**

- Structure 1 (O=S=O) is the most significant contributor to the resonance hybrid (1 mark).
- It has zero formal charge on all atoms (1 mark).
- Structures with formal charges closest to zero are more stable (1 mark).
- The actual structure of SO$_2$ is a resonance hybrid of all three forms (1 mark).

---

### Question 9: Hybridization and Bonding (HL, 4 marks)

Describe the bonding in ethyne, C$_2$H$_2$, including hybridization and the types of bonds formed.

**Markscheme:**

- Each carbon is sp hybridised (2 electron domains: one C-C bond, one C-H bond) (1 mark).
- The C-C bond consists of one sigma bond (sp-sp overlap) and two pi bonds (p-p overlap) (1 mark).
- Each C-H bond is a sigma bond (sp-s overlap) (1 mark).
- The molecule is linear with a bond angle of 180$\degree$ (1 mark).

---

### Question 10: Comprehensive -- Boiling Points (SL, 5 marks)

The following substances have the boiling points shown:

| Substance | Boiling Point ($\degree$C) |
| --------- | -------------------------- |
| CH$_4$    | -161                       |
| SiH$_4$   | -112                       |
| NH$_3$    | -33                        |
| PH$_3$    | -88                        |
| H$_2$O    | 100                        |
| H$_2$S    | -60                        |

(a) Explain the trend in boiling points from CH$_4$ to SiH$_4$. (2 marks)

**Markscheme:**

- Both are non-polar molecules with only London dispersion forces (1 mark).
- SiH$_4$ has more electrons than CH$_4$, so London dispersion forces are stronger (1 mark).

(b) Explain why H$_2$O has a much higher boiling point than H$_2$S, but NH$_3$ and PH$_3$ show the
expected trend. (3 marks)

**Markscheme:**

- H$_2$O can form extensive hydrogen bonding due to two O-H bonds and two lone pairs on oxygen (1
  mark).
- H$_2$S cannot form hydrogen bonding because S is not electronegative enough (1 mark).
- NH$_3$ can form hydrogen bonding but only has one N-H bond per molecule, limiting the extent; the
  trend from NH$_3$ to PH$_3$ is dominated by increasing London dispersion forces (1 mark).

---

## Summary: Quick Reference Tables

### Bond Type Comparison

| Feature       | Ionic                        | Covalent (Molecular)             | Covalent (Network)           | Metallic                    |
| ------------- | ---------------------------- | -------------------------------- | ---------------------------- | --------------------------- |
| Bond type     | Electrostatic attraction     | Shared electron pairs            | Continuous covalent          | Metallic bonding            |
| Constituents  | Cations and anions           | Discrete molecules               | Giant lattice                | Metal cations + sea         |
| Melting point | High                         | Low                              | Very high                    | Variable (often high)       |
| Electrical    | Conducts when molten/aqueous | Generally insulators             | Insulators (except graphite) | Conducts (solid and liquid) |
| Solubility    | Polar solvents               | Non-polar (molecular), varies    | Insoluble                    | Generally insoluble         |
| Hardness      | Hard but brittle             | Soft (molecular), hard (network) | Very hard                    | Malleable, ductile          |
| Example       | NaCl, MgO                    | H$_2$O, CO$_2$                   | Diamond, SiO$_2$             | Cu, Fe, Al                  |

### IMF Strength Ranking

$$
\text{Ion-dipole} \gt \text{Hydrogen bonding} \gt \text{Dipole-dipole} \gt \text{London dispersion}
$$

### VSEPR Quick Reference

| Domains | Lone Pairs | Shape                | Angle                             | Example |
| ------- | ---------- | -------------------- | --------------------------------- | ------- |
| 2       | 0          | Linear               | 180$\degree$                      | CO$_2$  |
| 3       | 0          | Trigonal planar      | 120$\degree$                      | BF$_3$  |
| 3       | 1          | Bent                 | $\lt 120\degree$                  | SO$_2$  |
| 4       | 0          | Tetrahedral          | 109.5$\degree$                    | CH$_4$  |
| 4       | 1          | Trigonal pyramidal   | $\lt 109.5\degree$                | NH$_3$  |
| 4       | 2          | Bent                 | $\lt 109.5\degree$                | H$_2$O  |
| 5       | 0          | Trigonal bipyramidal | 90$\degree$, 120$\degree$         | PCl$_5$ |
| 5       | 1          | Seesaw               | $\lt 90\degree$, $\lt 120\degree$ | SF$_4$  |
| 5       | 2          | T-shaped             | $\lt 90\degree$                   | ClF$_3$ |
| 5       | 3          | Linear               | 180$\degree$                      | XeF$_2$ |
| 6       | 0          | Octahedral           | 90$\degree$                       | SF$_6$  |
| 6       | 1          | Square pyramidal     | $\lt 90\degree$                   | BrF$_5$ |
| 6       | 2          | Square planar        | 90$\degree$                       | XeF$_4$ |

### Hybridization Quick Reference

| Domains | Hybridization | Geometry             |
| ------- | ------------- | -------------------- |
| 2       | sp            | Linear               |
| 3       | sp$^2$        | Trigonal planar      |
| 4       | sp$^3$        | Tetrahedral          |
| 5       | sp$^3$d       | Trigonal bipyramidal |
| 6       | sp$^3$d$^2$   | Octahedral           |
