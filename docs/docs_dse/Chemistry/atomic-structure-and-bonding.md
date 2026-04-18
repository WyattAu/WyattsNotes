---
id: dse-chemistry-atomic-structure-and-bonding
title: Chemistry - Atomic Structure and Bonding
description:
  DSE Chemistry notes on atomic structure, electron configurations, periodic trends, ionic bonding,
  covalent bonding, and intermolecular forces.
slug: chemistry-atomic-structure-and-bonding
---

## Atomic Structure

### Subatomic Particles

| Particle | Symbol | Relative Mass                 | Relative Charge | Location        |
| -------- | ------ | ----------------------------- | --------------- | --------------- |
| Proton   | $p$    | 1                             | +1              | Nucleus         |
| Neutron  | $n$    | 1                             | 0               | Nucleus         |
| Electron | $e^-$  | $\frac{1}{1836}$ (negligible) | -1              | Electron shells |

The **atomic number** (proton number) $Z$ equals the number of protons in the nucleus.

The **mass number** $A$ equals the number of protons plus neutrons:

$$A = Z + N$$

Where $N$ is the number of neutrons.

### Isotopes

Isotopes are atoms of the same element with the same number of protons but different numbers of
neutrons. They have identical chemical properties but different physical properties (e.g., different
masses).

Examples of isotopes:

- Carbon-12, Carbon-13, Carbon-14
- Hydrogen (protium), Deuterium, Tritium
- Chlorine-35, Chlorine-37

### Worked Example 1

Chlorine has two isotopes: Cl-35 (75.8% abundance) and Cl-37 (24.2% abundance). Calculate the
relative atomic mass of chlorine.

$$A_r = \frac{35 \times 75.8 + 37 \times 24.2}{100} = \frac{2653 + 895.4}{100} = \frac{3548.4}{100} = 35.48$$

### Mass Spectrometry

A mass spectrometer separates ions based on their mass-to-charge ratio ($m/z$). The stages are:

1. **Ionisation:** Atoms are ionised by electron bombardment to form positive ions
2. **Acceleration:** Ions are accelerated by an electric field
3. **Deflection:** Ions are deflected by a magnetic field (lighter ions are deflected more)
4. **Detection:** Ions hit a detector, producing a signal proportional to abundance

:::info
In a mass spectrum, the x-axis is the mass-to-charge ratio ($m/z$) and the y-axis is the
relative abundance. For singly charged ions, $m/z$ equals the relative isotopic mass.
:::

---

## Electron Configuration

### Energy Levels and Subshells

Electrons occupy energy levels (shells) numbered $n = 1, 2, 3, \ldots$

Each energy level contains subshells:

- $s$ subshell: holds up to 2 electrons
- $p$ subshell: holds up to 6 electrons
- $d$ subshell: holds up to 10 electrons
- $f$ subshell: holds up to 14 electrons

### Order of Filling (Aufbau Principle)

Electrons fill orbitals in order of increasing energy:

$$1s \lt 2s \lt 2p \lt 3s \lt 3p \lt 4s \lt 3d \lt 4p \lt 5s \lt 4d \lt 5p \lt 6s \lt 4f \lt 5d \lt 6p$$

:::warning
Note that $4s$ fills before $3d$, but $3d$ loses electrons before $4s$ when forming
cations. This is because the $4s$ orbital is at a higher energy than $3d$ once electrons are in the
$3d$ subshell.
:::

### Pauli Exclusion Principle

Each orbital can hold a maximum of 2 electrons with opposite spins.

### Hund's Rule

When filling degenerate orbitals (orbitals of the same energy, such as the three $2p$ orbitals),
electrons occupy separate orbitals with parallel spins before pairing up.

### Worked Example 2

Write the electron configuration of:

- Sodium ($Z = 11$): $1s^2\, 2s^2\, 2p^6\, 3s^1$
- Iron ($Z = 26$): $1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^6\, 4s^2\, 3d^6$
- Chlorine ($Z = 17$): $1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^5$

### Condensed Electron Configuration

For transition metals, use the noble gas core notation:

- Iron: $[\mathrm{Ar}]\, 4s^2\, 3d^6$
- Copper ($Z = 29$): $[\mathrm{Ar}]\, 4s^1\, 3d^{10}$ (exception: full $d$ subshell is more stable)
- Chromium ($Z = 24$): $[\mathrm{Ar}]\, 4s^1\, 3d^5$ (exception: half-full subshells are more stable)

:::tip
Exceptions to remember: Cr is $4s^1\, 3d^5$ (not $4s^2\, 3d^4$) and Cu is $4s^1\, 3d^{10}$
(not $4s^2\, 3d^9$). These arise because half-filled and fully-filled $d$ subshells have extra
stability.
:::

---

## The Periodic Table

### Periods and Groups

- **Periods:** Horizontal rows (1 to 7). The period number equals the number of occupied electron
  shells.
- **Groups:** Vertical columns. Elements in the same group have the same number of valence electrons
  and similar chemical properties.

### Periodic Trends

| Property                   | Across a Period (Left to Right) | Down a Group (Top to Bottom) |
| -------------------------- | ------------------------------- | ---------------------------- |
| Atomic radius              | Decreases                       | Increases                    |
| First ionisation energy    | Generally increases             | Generally decreases          |
| Electronegativity          | Increases                       | Decreases                    |
| Metallic character         | Decreases                       | Increases                    |
| Melting point (Groups 1-3) | Increases                       | Decreases                    |

### Atomic Radius

The atomic radius decreases across a period because the increasing nuclear charge pulls electrons
closer. It increases down a group because additional electron shells are added.

### Ionisation Energy

**First ionisation energy** is the energy required to remove one mole of electrons from one mole of
gaseous atoms:

$$\mathrm{X}(g) \to \mathrm{X}^+(g) + e^-$$

Trends in first ionisation energy:

- **Increases across a period:** Nuclear charge increases, electrons held more tightly
- **Decreases down a group:** Outer electrons are further from the nucleus and more shielded

Dips in ionisation energy occur at:

- Group 3 (e.g., Al): electron removed from $p$ subshell (higher energy than $s$)
- Group 6 (e.g., S): electron removed from a paired orbital (electron-electron repulsion)

### Worked Example 3

Explain why the first ionisation energy of aluminium ($Z = 13$) is lower than that of magnesium
($Z = 12$).

Magnesium has electron configuration $1s^2\, 2s^2\, 2p^6\, 3s^2$. The electron is removed from the
$3s$ subshell.

Aluminium has electron configuration $1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^1$. The electron is removed
from the $3p$ subshell.

The $3p$ subshell is at a slightly higher energy level than $3s$, so the $3p$ electron is less
tightly held and requires less energy to remove.

### Electronegativity

Electronegativity is the ability of an atom to attract the bonding pair of electrons in a covalent
bond.

- Fluorine is the most electronegative element (Pauling scale: 4.0)
- Electronegativity increases across a period and decreases down a group

---

## Ionic Bonding

### Formation of Ions

Ionic bonds form between **metals** (which lose electrons to form cations) and **non-metals** (which
gain electrons to form anions).

### Lattice Structure

Ionic compounds form **giant ionic lattices**:

- Ions are arranged in a regular 3D pattern
- Each ion is surrounded by ions of opposite charge
- The electrostatic attraction between oppositely charged ions is the ionic bond
- There are no discrete molecules

### Properties of Ionic Compounds

| Property                                     | Explanation                                                     |
| -------------------------------------------- | --------------------------------------------------------------- |
| High melting and boiling points              | Strong electrostatic forces throughout the lattice              |
| Conduct electricity when molten or dissolved | Ions are free to move and carry charge                          |
| Do not conduct when solid                    | Ions are fixed in position                                      |
| Soluble in polar solvents (e.g., water)      | Polar solvent molecules attract and separate ions               |
| Brittle                                      | Shifting layers brings like charges together, causing repulsion |

### Worked Example 4

Write the formula of magnesium oxide.

Magnesium is in Group 2: $\mathrm{Mg} \to \mathrm{Mg}^{2+} + 2e^-$

Oxygen is in Group 16: $\mathrm{O} + 2e^- \to \mathrm{O}^{2-}$

To balance charges: 1 $\mathrm{Mg}^{2+}$ ion balances 1 $\mathrm{O}^{2-}$ ion.

Formula: $\mathrm{MgO}$

---

## Covalent Bonding

A covalent bond is formed when two atoms share a pair of electrons. It occurs between non-metal
atoms.

### Types of Covalent Bonding

**Single bond:** One shared pair of electrons, e.g., H-H

**Double bond:** Two shared pairs of electrons, e.g., O=O

**Triple bond:** Three shared pairs of electrons, e.g., N$\equiv$N

**Dative (coordinate) bond:** Both electrons in the shared pair come from the same atom, e.g., in
the ammonium ion $\mathrm{NH}_4^+$

### Bond Polarity

When two atoms with different electronegativities form a covalent bond, the bonding electrons are
pulled towards the more electronegative atom, creating a **polar bond** with a dipole.

- Non-polar covalent: $\Delta\mathrm{EN} \lt 0.5$ (e.g., H-H, Cl-Cl)
- Polar covalent: $0.5 \leqslant \Delta\mathrm{EN} \lt 1.7$ (e.g., H-Cl, H-O)
- Ionic: $\Delta\mathrm{EN} \geqslant 1.7$ (e.g., Na-Cl)

### Shapes of Molecules (VSEPR Theory)

The Valence Shell Electron Pair Repulsion theory predicts molecular shapes based on the idea that
electron pairs around a central atom repel each other and arrange themselves as far apart as
possible.

| Electron Pairs    | Shape                | Bond Angle            | Example                        |
| ----------------- | -------------------- | --------------------- | ------------------------------ |
| 2 bonding pairs   | Linear               | $180^\circ$           | $\mathrm{BeCl}_2$, $\mathrm{CO}_2$ |
| 3 bonding pairs   | Trigonal planar      | $120^\circ$           | $\mathrm{BF}_3$                  |
| 2 bonding, 1 lone | Bent                 | $\lt 120^\circ$       | $\mathrm{SO}_2$                  |
| 4 bonding pairs   | Tetrahedral          | $109.5^\circ$         | $\mathrm{CH}_4$                  |
| 3 bonding, 1 lone | Trigonal pyramidal   | $\lt 109.5^\circ$     | $\mathrm{NH}_3$                  |
| 2 bonding, 2 lone | Bent                 | $\lt 109.5^\circ$     | $\mathrm{H}_2\mathrm{O}$           |
| 5 bonding pairs   | Trigonal bipyramidal | $90^\circ, 120^\circ$ | $\mathrm{PCl}_5$                 |
| 6 bonding pairs   | Octahedral           | $90^\circ$            | $\mathrm{SF}_6$                  |

:::info
Lone pairs exert a greater repulsive effect than bonding pairs because they are closer to
the nucleus. This reduces bond angles from the ideal values.
:::

### Worked Example 5

Predict the shape and bond angle of $\mathrm{NH}_3$.

Nitrogen has 5 valence electrons. Three are used in bonding with hydrogen, leaving one lone pair.

Total electron pairs = 4 (3 bonding + 1 lone pair)

The electron pair geometry is tetrahedral. With one lone pair, the molecular shape is **trigonal
pyramidal**.

The bond angle is approximately $107^\circ$ (less than $109.5^\circ$ due to lone pair repulsion).

### Simple Molecular vs Giant Covalent Structures

**Simple molecular** (e.g., $\mathrm{H}_2\mathrm{O}$, $\mathrm{CO}_2$, $\mathrm{I}_2$):

- Low melting and boiling points (weak intermolecular forces between molecules)
- Do not conduct electricity
- Usually gases or liquids at room temperature

**Giant covalent** (e.g., diamond, graphite, silicon dioxide):

- Very high melting and boiling points (strong covalent bonds throughout)
- Diamond: hard, insulator (all electrons in bonds)
- Graphite: soft (layers can slide), conducts electricity (delocalised electrons)

---

## Intermolecular Forces

Intermolecular forces are weaker than intramolecular (covalent) bonds.

### van der Waals Forces (London Dispersion Forces)

- Present between all molecules (including non-polar ones)
- Caused by instantaneous dipoles due to uneven electron distribution
- Strength increases with molecular size (more electrons) and shape (greater surface area contact)

Trend: larger molecules with more electrons have stronger van der Waals forces.

### Dipole-Dipole Interactions

- Occur between polar molecules
- The positive end of one molecule attracts the negative end of another
- Stronger than van der Waals forces but weaker than hydrogen bonding

### Hydrogen Bonding

A special, strong type of dipole-dipole interaction that occurs when:

1. Hydrogen is covalently bonded to a highly electronegative atom (N, O, or F)
2. The hydrogen atom interacts with a lone pair on another N, O, or F atom

Conditions: H bonded to N, O, or F, and interacting with another N, O, or F.

Examples: $\mathrm{H}_2\mathrm{O}$, $\mathrm{NH}_3$, HF, DNA base pairing.

### Effect of Intermolecular Forces on Properties

| Property      | Strong IMF | Weak IMF |
| ------------- | ---------- | -------- |
| Melting point | High       | Low      |
| Boiling point | High       | Low      |
| Viscosity     | High       | Low      |
| Volatility    | Low        | High     |

### Worked Example 6

Explain why $\mathrm{H}_2\mathrm{O}$ has a higher boiling point than $\mathrm{H}_2\mathrm{S}$, despite
$\mathrm{H}_2\mathrm{S}$ having a larger molecular mass.

Both molecules have van der Waals forces, which are stronger for $\mathrm{H}_2\mathrm{S}$ (larger, more
electrons).

However, $\mathrm{H}_2\mathrm{O}$ can form hydrogen bonds between molecules (H bonded to O), while
$\mathrm{H}_2\mathrm{S}$ cannot (S is not electronegative enough).

Hydrogen bonding in $\mathrm{H}_2\mathrm{O}$ is much stronger than the van der Waals forces in
$\mathrm{H}_2\mathrm{S}$, resulting in a higher boiling point for water.

### Trends in Boiling Points of Group 17 Halogens

| Halogen       | Boiling Point        | Explanation                                    |
| ------------- | -------------------- | ---------------------------------------------- |
| $\mathrm{F}_2$  | $-188^\circ\mathrm{C}$ | Few electrons, weak van der Waals forces       |
| $\mathrm{Cl}_2$ | $-34^\circ\mathrm{C}$  | More electrons, stronger van der Waals forces  |
| $\mathrm{Br}_2$ | $59^\circ\mathrm{C}$   | Even more electrons                            |
| $\mathrm{I}_2$  | $184^\circ\mathrm{C}$  | Most electrons, strongest van der Waals forces |

---

## Metallic Bonding

### The Sea of Electrons Model

In metallic bonding:

- Metal atoms lose their valence electrons to form positive ions (cations)
- The valence electrons are delocalised and form a "sea" of electrons
- The electrostatic attraction between the cations and the delocalised electrons is the metallic
  bond

### Properties of Metals

| Property                        | Explanation                                                               |
| ------------------------------- | ------------------------------------------------------------------------- |
| High melting and boiling points | Strong metallic bonds throughout the lattice                              |
| Good electrical conductivity    | Delocalised electrons are free to move and carry charge                   |
| Good thermal conductivity       | Delocalised electrons transfer kinetic energy                             |
| Malleable and ductile           | Layers of cations can slide without breaking the metallic bonds           |
| Lustrous                        | Delocalised electrons absorb and re-emit light at all visible wavelengths |
| Generally high density          | Atoms are closely packed                                                  |

### Alloys

An alloy is a mixture of two or more elements, at least one of which is a metal.

- Different-sized atoms disrupt the regular lattice
- Layers cannot slide as easily
- Alloys are harder and stronger than pure metals

Examples: steel (Fe + C), brass (Cu + Zn), bronze (Cu + Sn), solder (Sn + Pb)

---

## Summary Table

| Topic                  | Key Concept                             | Example                            |
| ---------------------- | --------------------------------------- | ---------------------------------- |
| Atomic structure       | Protons, neutrons, electrons            | $A = Z + N$                        |
| Electron configuration | Aufbau, Pauli, Hund                     | $1s^2\, 2s^2\, 2p^6\, 3s^1$ for Na |
| Ionisation energy      | Energy to remove outermost electron     | Decreases down a group             |
| Ionic bonding          | Transfer of electrons, giant lattice    | NaCl                               |
| Covalent bonding       | Sharing of electrons                    | H-Cl, O=O                          |
| VSEPR                  | Electron pair repulsion                 | Tetrahedral for $\mathrm{CH}_4$      |
| Intermolecular forces  | van der Waals, dipole-dipole, H-bonding | H-bonding in water                 |
| Metallic bonding       | Delocalised electrons                   | Malleability of metals             |

---

## Exam Tips

- For electron configuration questions, always use the correct order: $4s$ before $3d$ for filling,
  but $3d$ before $4s$ for ion formation.
- When explaining ionisation energy trends, mention nuclear charge, shielding, and atomic radius.
- In VSEPR questions, count total electron pairs (bonding + lone pairs) first, then determine the
  shape based on bonding pairs only.
- Remember that hydrogen bonding requires H bonded to N, O, or F specifically.
- When comparing boiling points, consider the type and strength of intermolecular forces, not just
  molecular mass.
- For ionic compounds, always state that they have high melting points due to strong electrostatic
  forces throughout the giant lattice.

<details>
<summary>Exam-Style Practice Questions</summary>

**Question 1:** The first three ionisation energies of an element are 578, 1817, and 2745 kJ/mol.
Identify the group of this element.

The large jump between the 3rd and 4th ionisation energies indicates that the fourth electron is
removed from a new, inner shell. This means the element has 3 valence electrons, placing it in
**Group 13** (it is aluminium).

**Question 2:** Draw the shape of $\mathrm{PCl}_3$ and state its bond angle.

Phosphorus has 5 valence electrons. Three are used for bonding with Cl, leaving one lone pair.

Total electron pairs = 4 (3 bonding + 1 lone pair)

Shape: **trigonal pyramidal**, bond angle approximately $107^\circ$.

**Question 3:** Explain why the boiling point of neon is lower than that of argon.

Both are noble gases with only van der Waals forces. Argon has more electrons than neon, so it has
stronger van der Waals forces. More energy is required to overcome these forces, giving argon a
higher boiling point.

**Question 4:** Draw the dot-and-cross diagram for $\mathrm{NH}_3$ and predict its shape.

Nitrogen has 5 valence electrons. Three electrons form covalent bonds with three hydrogen atoms (3
shared pairs), and one lone pair remains. The shape is trigonal pyramidal with a bond angle of
approximately $107^\circ$.

**Question 5:** Explain why $\mathrm{SiO}_2$ has a very high melting point.

$\mathrm{SiO}_2$ has a giant covalent structure. Each silicon atom is covalently bonded to four oxygen
atoms, and each oxygen atom is bonded to two silicon atoms, forming a continuous 3D network.
Breaking this structure requires breaking many strong covalent bonds, which requires a large amount
of energy, hence the very high melting point.

</details>

---

## Chemical Bonding Energetics

### Bond Enthalpy

Bond enthalpy (bond energy) is the average energy required to break one mole of a particular type of
bond in the gaseous state.

| Bond       | Average Bond Enthalpy (kJ/mol) |
| ---------- | ------------------------------ |
| C-C        | 347                            |
| C=C        | 612                            |
| C$\equiv$C | 838                            |
| C-H        | 413                            |
| C-O        | 358                            |
| C=O        | 745                            |
| O-H        | 463                            |
| O=O        | 498                            |
| H-H        | 436                            |
| N$\equiv$N | 945                            |
| N-H        | 391                            |

### Using Bond Enthalpies to Calculate Enthalpy Changes

$$\Delta H = \sum(\mathrm{Bonds broken}) - \sum(\mathrm{Bonds formed})$$

- Bonds broken: endothermic (positive value)
- Bonds formed: exothermic (negative value)

### Worked Example 7

Calculate the enthalpy change for the reaction: $\mathrm{H}_2(g) + \mathrm{Cl}_2(g) \to 2\mathrm{HCl}(g)$

Bonds broken:

- 1 $\times$ H-H = $436 \mathrm{ kJ/mol}$
- 1 $\times$ Cl-Cl = $243 \mathrm{ kJ/mol}$

Bonds formed:

- 2 $\times$ H-Cl = $2 \times 432 = 864 \mathrm{ kJ/mol}$

$$\Delta H = (436 + 243) - 864 = 679 - 864 = -185 \mathrm{ kJ/mol}$$

The reaction is exothermic.

### Worked Example 8

Calculate the enthalpy of combustion of methane:
$\mathrm{CH}_4(g) + 2\mathrm{O}_2(g) \to \mathrm{CO}_2(g) + 2\mathrm{H}_2\mathrm{O}(g)$

Bonds broken:

- 4 $\times$ C-H = $4 \times 413 = 1652 \mathrm{ kJ/mol}$
- 2 $\times$ O=O = $2 \times 498 = 996 \mathrm{ kJ/mol}$

Bonds formed:

- 2 $\times$ C=O = $2 \times 745 = 1490 \mathrm{ kJ/mol}$
- 4 $\times$ O-H = $4 \times 463 = 1852 \mathrm{ kJ/mol}$

$$\Delta H = (1652 + 996) - (1490 + 1852) = 2648 - 3342 = -694 \mathrm{ kJ/mol}$$

:::warning
Bond enthalpies are average values. For precise calculations, use standard enthalpy of
formation data instead. Bond enthalpy calculations are less accurate for reactions involving liquids
or solids because they only account for gaseous state bonds.
:::

---

## Giant Ionic Structures in Detail

### Properties Explained

The physical properties of ionic compounds can be explained by their giant ionic lattice structure:

**High melting and boiling points:**

The electrostatic attraction between oppositely charged ions acts throughout the entire lattice. A
large amount of energy is required to overcome these strong forces, resulting in high melting and
boiling points.

**Electrical conductivity:**

In the solid state, ions are held in fixed positions and cannot move, so ionic solids do not conduct
electricity. When molten or dissolved in water, ions are free to move and carry charge, allowing
conductivity.

**Solubility in polar solvents:**

Water molecules are polar and can attract ions from the lattice surface. The positive end of water
molecules (near $\mathrm{H}$) attracts anions, while the negative end (near $\mathrm{O}$) attracts
cations. If the hydration energy exceeds the lattice energy, the ionic compound dissolves.

**Brittleness:**

When a force is applied, layers of ions shift. Ions of the same charge come adjacent to each other,
and the repulsive forces cause the crystal to fracture along a cleavage plane.

### Lattice Energy

Lattice energy is the energy released when one mole of an ionic compound is formed from its gaseous
ions.

Factors affecting lattice energy:

- **Ionic charge:** Higher charge leads to stronger attraction and larger lattice energy
- **Ionic radius:** Smaller ions can get closer together, increasing lattice energy

| Compound      | Ionic Charges | Lattice Energy Trend                   |
| ------------- | ------------- | -------------------------------------- |
| $\mathrm{NaCl}$ | +1, -1        | Lower                                  |
| $\mathrm{MgO}$  | +2, -2        | Higher (about 4$\times$ $\mathrm{NaCl}$) |

---

## Electron Configuration and Chemical Behaviour

### Valence Electrons

Valence electrons are the electrons in the outermost shell of an atom. They determine the chemical
properties of an element.

| Group | Valence Electrons | Common Ion | Typical Behaviour     |
| ----- | ----------------- | ---------- | --------------------- |
| 1     | 1                 | +1         | Loses 1 electron      |
| 2     | 2                 | +2         | Loses 2 electrons     |
| 13    | 3                 | +3         | Loses 3 electrons     |
| 15    | 5                 | -3         | Gains 3 electrons     |
| 16    | 6                 | -2         | Gains 2 electrons     |
| 17    | 7                 | -1         | Gains 1 electron      |
| 18    | 8                 | None       | Noble gas, unreactive |

### Transition Metals

Transition metals have the following characteristic properties:

- Variable oxidation states (e.g., Fe: +2 and +3; Mn: +2, +4, +7)
- Formation of coloured compounds (due to d-d electron transitions)
- Catalytic activity (e.g., Fe in Haber process, V$_2$O$_5$ in Contact process)
- Formation of complex ions (e.g., $[\mathrm{Cu}(\mathrm{NH}_3)_4]^{2+}$)

### Worked Example 9

Write the electron configuration of $\mathrm{Fe}^{3+}$.

Fe ($Z = 26$): $1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^6\, 4s^2\, 3d^6$

$\mathrm{Fe}^{3+}$: Remove 3 electrons. Since $4s$ electrons are lost before $3d$:

$\mathrm{Fe}^{3+}$: $1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^6\, 3d^5$

Note that $\mathrm{Fe}^{3+}$ has a half-filled $3d$ subshell ($3d^5$), which contributes to its
relative stability compared to $\mathrm{Fe}^{2+}$ ($3d^6$).

---

## Trends Across Period 3

Period 3 elements ($\mathrm{Na}$ to $\mathrm{Ar}$) show clear trends that are frequently examined:

### Atomic and Ionic Radii

| Element            | Na  | Mg  | Al  | Si  | P   | S   | Cl  | Ar  |
| ------------------ | --- | --- | --- | --- | --- | --- | --- | --- |
| Atomic radius (pm) | 186 | 160 | 143 | 117 | 110 | 104 | 99  | —   |

Atomic radius decreases across the period because increasing nuclear charge pulls electrons closer.

### Melting and Boiling Points

| Element                          | Na  | Mg  | Al  | Si   | P   | S   | Cl   | Ar   |
| -------------------------------- | --- | --- | --- | ---- | --- | --- | ---- | ---- |
| Melting point ($^\circ\mathrm{C}$) | 98  | 650 | 660 | 1410 | 44  | 115 | -101 | -189 |

- $\mathrm{Na}$, $\mathrm{Mg}$, $\mathrm{Al}$: Metallic bonding, increasing strength (more delocalised
  electrons)
- $\mathrm{Si}$: Giant covalent structure, very high melting point
- $\mathrm{P}$, $\mathrm{S}$, $\mathrm{Cl}$, $\mathrm{Ar}$: Simple molecular, weak van der Waals forces

### Electrical Conductivity

- $\mathrm{Na}$, $\mathrm{Mg}$, $\mathrm{Al}$: Good conductors (metallic bonding with delocalised
  electrons)
- $\mathrm{Si}$: Semiconductor (conductivity increases with temperature)
- $\mathrm{P}$, $\mathrm{S}$, $\mathrm{Cl}$, $\mathrm{Ar}$: Non-conductors (no mobile charge carriers)

---

## Additional Practice Questions

<details>
<summary>More Exam-Style Problems</summary>

**Question 6:** The first four ionisation energies of boron are 801, 2427, 3660, and 25026 kJ/mol.
Explain the large jump between the third and fourth ionisation energies.

The first three electrons are removed from the outer shell (2s and 2p subshells). The fourth
electron is removed from the inner 1s shell, which is much closer to the nucleus and experiences
much less shielding. This requires significantly more energy, hence the large jump.

**Question 7:** Explain why the melting point of $\mathrm{MgO}$ is much higher than that of
$\mathrm{NaCl}$.

Both have giant ionic lattices, but $\mathrm{Mg}^{2+}$ and $\mathrm{O}^{2-}$ have higher charges than
$\mathrm{Na}^+$ and $\mathrm{Cl}^-$. The electrostatic attraction is proportional to the product of the
charges: $\mathrm{MgO}$ has $2 \times 2 = 4$ while $\mathrm{NaCl}$ has $1 \times 1 = 1$. Additionally,
$\mathrm{Mg}^{2+}$ and $\mathrm{O}^{2-}$ are smaller ions, allowing them to get closer together. Both
factors result in stronger ionic bonds and a higher melting point for $\mathrm{MgO}$.

**Question 8:** Draw the dot-and-cross diagram for $\mathrm{CO}_2$ and explain why it is a linear
molecule.

Carbon has 4 valence electrons and forms two double bonds with oxygen atoms (each oxygen has 6
valence electrons). The molecule has no lone pairs on the central carbon atom. With two bonding
pairs, the electron pair geometry and molecular shape are both **linear** with a bond angle of
$180^\circ$.

**Question 9:** Explain why $\mathrm{HF}$ has a higher boiling point than $\mathrm{HCl}$ despite having
a lower molecular mass.

$\mathrm{HF}$ can form hydrogen bonds between molecules because hydrogen is bonded to fluorine (highly
electronegative). $\mathrm{HCl}$ cannot form hydrogen bonds because chlorine is not electronegative
enough. Hydrogen bonding in $\mathrm{HF}$ is much stronger than the van der Waals forces and dipole-
dipole interactions in $\mathrm{HCl}$, resulting in a higher boiling point for $\mathrm{HF}$.

**Question 10:** Explain why diamond is an electrical insulator while graphite is a good conductor.

In diamond, each carbon atom is covalently bonded to four other carbon atoms in a tetrahedral
arrangement. All four valence electrons are used in sigma bonds, leaving no delocalised electrons to
carry charge. In graphite, each carbon atom is bonded to three others in a planar hexagonal
structure. The fourth electron from each carbon is delocalised and free to move throughout the
layers, allowing graphite to conduct electricity.

**Question 11:** Explain the trend in first ionisation energy across Period 3 (Na to Ar).

Ionisation energy generally increases across the period because nuclear charge increases (more
protons) while the shielding effect remains similar (same number of inner electron shells). This
pulls the outer electrons closer to the nucleus, making them harder to remove. The dip at aluminium
is because the electron is removed from the higher-energy $3p$ subshell. The dip at sulfur is
because the electron is removed from a paired $3p$ orbital where electron-electron repulsion makes
it easier to remove.

**Question 12:** Write the electron configuration of $\mathrm{Cu}^+$ and explain why it is more stable
than $\mathrm{Cu}^{2+}$ in some contexts.

$\mathrm{Cu}$ ($Z = 29$): $[\mathrm{Ar}]\, 4s^1\, 3d^{10}$

$\mathrm{Cu}^+$: $[\mathrm{Ar}]\, 3d^{10}$ (removing the $4s$ electron first)

$\mathrm{Cu}^+$ has a completely filled $3d$ subshell, which is particularly stable due to the
symmetrical distribution of electrons. However, $\mathrm{Cu}^{2+}$ ($3d^9$) is more common in aqueous
chemistry because of the high hydration energy that compensates for the loss of the stable $3d^{10}$
configuration.

</details>

---

## Advanced Bonding Concepts

### Hybridisation

Hybridisation is the concept of mixing atomic orbitals to form new hybrid orbitals that are
equivalent in energy and suitable for bonding.

| Hybridisation | Geometry             | Bond Angle            | Example                                 |
| ------------- | -------------------- | --------------------- | --------------------------------------- |
| $sp$          | Linear               | $180^\circ$           | $\mathrm{BeCl}_2$, $\mathrm{C}_2\mathrm{H}_2$ |
| $sp^2$        | Trigonal planar      | $120^\circ$           | $\mathrm{BF}_3$, $\mathrm{C}_2\mathrm{H}_4$   |
| $sp^3$        | Tetrahedral          | $109.5^\circ$         | $\mathrm{CH}_4$, $\mathrm{NH}_3$            |
| $sp^3d$       | Trigonal bipyramidal | $90^\circ, 120^\circ$ | $\mathrm{PCl}_5$                          |
| $sp^3d^2$     | Octahedral           | $90^\circ$            | $\mathrm{SF}_6$                           |

### Worked Example 10

Determine the hybridisation of the central atom in $\mathrm{SF}_4$.

Sulphur has 6 valence electrons. In $\mathrm{SF}_4$, four are used for bonding with fluorine, leaving
one lone pair. Total electron pairs = 5 (4 bonding + 1 lone pair).

Hybridisation: $sp^3d$ (trigonal bipyramidal electron pair geometry, with the lone pair in an
equatorial position, giving a "see-saw" molecular shape).

### Molecular Orbital Theory (Brief Overview)

Molecular orbital theory describes bonding in terms of the combination of atomic orbitals to form
molecular orbitals that extend over the entire molecule.

**Bonding orbitals:** Lower in energy than the original atomic orbitals; stabilise the molecule.

**Antibonding orbitals:** Higher in energy than the original atomic orbitals; destabilise the
molecule.

**Bond order:**

$$\mathrm{Bond order} = \frac{1}{2}(\mathrm{bonding electrons} - \mathrm{antibonding electrons})$$

- Bond order = 1: single bond
- Bond order = 2: double bond
- Bond order = 1.5: intermediate (e.g., $\mathrm{O}_2^-$)
- Bond order = 0: no bond (molecule does not exist, e.g., $\mathrm{He}_2$)

:::info
Molecular orbital theory explains why $\mathrm{O}_2$ is paramagnetic (has unpaired electrons
in antibonding orbitals), which cannot be explained by simple Lewis structures.
:::

### Intermolecular Forces in Detail

The strength of intermolecular forces directly affects physical properties:

**Boiling points of hydrogen halides:**

| Compound | Boiling Point ($^\circ\mathrm{C}$) | Dominant IMF                  |
| -------- | -------------------------------- | ----------------------------- |
| HF       | 19.5                             | Hydrogen bonding              |
| HCl      | -84.9                            | Dipole-dipole + van der Waals |
| HBr      | -67.0                            | Dipole-dipole + van der Waals |
| HI       | -35.4                            | van der Waals                 |

HF has the highest boiling point due to hydrogen bonding. For HCl, HBr, and HI, boiling points
increase with molecular mass (more electrons = stronger van der Waals forces), despite the
decreasing dipole moment.

### Worked Example 11

Explain why $\mathrm{C}_2\mathrm{H}_5\mathrm{OH}$ (ethanol) is soluble in water but
$\mathrm{C}_6\mathrm{H}_{12}$ (hexane) is not.

Ethanol has a hydroxyl group (-OH) that can form hydrogen bonds with water molecules, making it
miscible. Hexane is a non-polar hydrocarbon with only weak van der Waals forces. The energy released
from forming hexane-water interactions is insufficient to overcome the hydrogen bonds between water
molecules and the van der Waals forces between hexane molecules. This follows the principle "like
dissolves like."

### Allotropes of Carbon

| Allotrope                   | Structure                 | Bonding                                                   | Properties                                               |
| --------------------------- | ------------------------- | --------------------------------------------------------- | -------------------------------------------------------- |
| Diamond                     | Tetrahedral 3D network    | Each C bonded to 4 others ($sp^3$)                        | Hardest natural substance, insulator, high melting point |
| Graphite                    | Layered hexagonal sheets  | Each C bonded to 3 others ($sp^2$), delocalised electrons | Soft, conductor, lubricant, high melting point           |
| Graphene                    | Single layer of graphite  | Each C bonded to 3 others ($sp^2$)                        | Strongest material known, conductor, transparent         |
| Fullerene ($\mathrm{C}_{60}$) | Hollow sphere (buckyball) | Each C bonded to 3 others                                 | Molecular solid, semiconductor                           |
| Carbon nanotube             | Cylindrical graphene      | Each C bonded to 3 others                                 | Very strong, conductor                                   |

### Worked Example 12

Explain why graphite is soft and slippery while diamond is hard.

In graphite, the carbon atoms are arranged in flat hexagonal layers. Within each layer, strong
covalent bonds hold atoms together. Between layers, only weak van der Waals forces act, allowing the
layers to slide over each other easily. This makes graphite soft and a good lubricant. In diamond,
all carbon atoms are covalently bonded in a rigid 3D tetrahedral network with no weak planes, making
it extremely hard.

:::

:::

:::

:::

:::

:::
