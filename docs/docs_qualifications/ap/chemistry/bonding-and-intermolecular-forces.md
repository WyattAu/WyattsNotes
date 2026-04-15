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

The distinction between ionic and covalent bonding is not always sharp. Bonds with electronegativity
differences near the boundary ($\approx 1.7$) have significant ionic and covalent character. Bonding
is better described as a continuum rather than a discrete set of categories.

### Ionic Bonding

Ionic compounds consist of cations and anions held together by electrostatic attraction in a
three-dimensional lattice.

**Lattice energy** ($U$): the energy released when gaseous ions form one mole of solid ionic
compound:

$$
U \propto \frac{|z_+ \cdot z_-|}{r_+ + r_-}
$$

Higher charges and smaller ionic radii lead to larger (more negative) lattice energy. This is a
direct consequence of Coulomb's law: the electrostatic attraction is proportional to the product of
the charges and inversely proportional to the distance between them.

**Example:** MgO has a much higher lattice energy than NaCl because Mg$^{2+}$ and O$^{2-}$ carry
double charges compared to Na$^+$ and Cl$^-$.

### Derivation: Born-Haber Cycle and Lattice Energy

The Born-Haber cycle applies Hess's law to calculate lattice energy from measurable quantities. For
NaCl:

$$\Delta H_f^\circ = \Delta H_{\text{sub}} + IE_1 + \frac{1}{2}D_{\text{Cl}_2} + EA_{\text{Cl}} + U$$

Solving for $U$:

$$U = \Delta H_f^\circ - \Delta H_{\text{sub}} - IE_1 - \frac{1}{2}D_{\text{Cl}_2} - EA_{\text{Cl}}$$

Each term represents a step in forming the ionic solid from its elements. The lattice energy $U$ is
typically the largest (most negative) term, reflecting the strong electrostatic attraction in the
ionic lattice.

### Covalent Bonding

A covalent bond forms when atoms share one or more pairs of electrons. The shared electrons are
attracted to both nuclei simultaneously, which lowers the potential energy and holds the atoms
together.

- **Single bond:** 1 shared pair ($\sigma$ bond)
- **Double bond:** 2 shared pairs (1 $\sigma$ + 1 $\pi$)
- **Triple bond:** 3 shared pairs (1 $\sigma$ + 2 $\pi$)

### Bond Energy and Bond Length

- Bond length decreases as bond order increases (more shared electrons pull nuclei closer).
- Bond energy increases as bond order increases (more shared electrons = stronger bond).

| Bond Type  | Typical Length (pm) | Typical Energy (kJ/mol) |
| ---------- | ------------------- | ----------------------- |
| C--C       | 154                 | 347                     |
| C=C        | 134                 | 614                     |
| C$\equiv$C | 120                 | 839                     |

The trend is consistent: as bond order increases, the nuclei are pulled closer together (shorter
bond) and the bond becomes stronger (higher energy). This is because each additional shared pair
adds more electron density between the nuclei, increasing the net attractive force.

## Lewis Structures (CED Unit 2)

### Rules for Drawing Lewis Structures

1. Count total valence electrons.
2. Draw the skeletal structure (least electronegative atom is usually central, except H which is
   never central).
3. Connect atoms with single bonds (each uses 2 electrons).
4. Complete octets of terminal atoms first.
5. Place remaining electrons on the central atom.
6. If the central atom lacks an octet, form double or triple bonds.
7. Check: total electrons = valence electrons.

### Formal Charge

$$
\text{Formal Charge} = V - N - \frac{B}{2}
$$

where $V$ = valence electrons of the free atom, $N$ = nonbonding electrons on the atom, $B$ =
bonding electrons shared by the atom.

The best Lewis structure minimises formal charges and places negative formal charges on more
electronegative atoms. If formal charges must be non-zero, adjacent atoms should not carry the same
sign charge.

:::info[Example]

Draw the Lewis structure for $\text{SO}_4^{2-}$ with formal charges.

Total valence electrons: $6 + 4(6) + 2 = 32$.

Connect S to each O with single bonds: $4 \times 2 = 8$ electrons used, $24$ remaining.

Complete octets on each O: $4 \times 6 = 24$ electrons. All 32 used.

Formal charges: S has $6 - 0 - 8/2 = +2$. Each O has $6 - 6 - 2/2 = -1$.

This gives total charge $+2 + 4(-1) = -2$, which is correct, but the formal charges are large.

**Better structure:** Form two S=O double bonds. S has $6 - 0 - 12/2 = 0$ (double-bonded O). For
double-bonded O: $6 - 4 - 4/2 = 0$. For single-bonded O: $6 - 6 - 2/2 = -1$.

Total: $0 + 0 + 0 + (-1) + (-1) = -2$. This is better because the formal charges are smaller.

:::

**Worked Example.** Draw the Lewis structure for $\text{NO}_3^-$.

Total valence electrons: $5 + 3(6) + 1 = 24$.

Connect N to each O with single bonds: $6$ electrons used, $18$ remaining.

Complete octets: $3 \times 6 = 18$ electrons. All 24 used.

Formal charges: N has $5 - 0 - 6/2 = +2$. Each O has $6 - 6 - 2/2 = -1$.

Better structure: form one N=O double bond. N has $5 - 0 - 8/2 = +1$. Double-bonded O has
$6 - 4 - 4/2 = 0$. Each single-bonded O has $6 - 6 - 2/2 = -1$.

Total: $+1 + 0 + (-1) + (-1) = -1$. Three resonance structures are possible, each with the double
bond on a different oxygen.

### Resonance

When multiple Lewis structures (resonance structures) are possible, the actual molecule is a hybrid
of all resonance forms. The actual bond order is the average.

:::info[Example: Ozone]

$\text{O}_3$ has two equivalent resonance structures:

$$
\text{O}=\text{O}-\text{O} \leftrightarrow \text{O}-\text{O}=\text{O}
$$

The actual O--O bonds are identical, with bond order $1.5$. The bond length is intermediate between
a single and a double bond, and the bond energy is also intermediate.

:::

Resonance stabilises a molecule: the more resonance structures, the lower the energy. Benzene
($\text{C}_6\text{H}_6$) is a classic example, with six equivalent resonance structures giving it
exceptional stability.

### Exceptions to the Octet Rule

1. **Odd-electron molecules:** $\text{NO}$ (11 valence electrons), $\text{ClO}_2$ (19 valence
   electrons). These have an unpaired electron and are called radicals.
2. **Electron-deficient:** $\text{BeCl}_2$ (4 valence electrons), $\text{BF}_3$ (6 valence
   electrons). These stable molecules have fewer than 8 electrons around the central atom.
3. **Expanded octets:** Elements in period 3 and beyond can have more than 8 electrons because they
   have accessible d orbitals (e.g., $\text{SF}_6$, $\text{PCl}_5$, $\text{XeF}_4$).

## VSEPR Theory (CED Unit 2)

Valence Shell Electron Pair Repulsion (VSEPR) predicts molecular geometry based on the repulsion
between electron pairs (both bonding and lone pairs). The key idea is that electron pairs arrange
themselves to be as far apart as possible.

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
$104.5^\circ$ vs ideal $109.5^\circ$). A lone pair occupies more space than a bonding pair because
it is attracted to only one nucleus, whereas a bonding pair is attracted to two nuclei and is
therefore more compressed.

### Axial vs. Equatorial Positions in Trigonal Bipyramidal

In a trigonal bipyramidal geometry, there are two types of positions: axial (90$^\circ$ from three
equatorial atoms) and equatorial (120$^\circ$ from two equatorial atoms, 90$^\circ$ from two axial
atoms). Lone pairs preferentially occupy equatorial positions because this minimises repulsion (only
two 90$^\circ$ interactions instead of three).

**Worked Example.** Determine the molecular geometry of $\text{SF}_4$.

S has 6 valence electrons + 4 from bonds = 10 electrons = 5 electron domains. Four are bonding
pairs, one is a lone pair. This gives a seesaw geometry. The lone pair occupies an equatorial
position, and the two axial fluorine atoms are bent slightly away from the lone pair.

## Molecular Polarity (CED Unit 3)

A molecule is polar if:

1. It contains polar bonds, AND
2. The molecular geometry does not cancel out the bond dipoles.

### Dipole Moments

$$
\vec{\mu} = q \cdot d
$$

where $q$ is the partial charge and $d$ is the distance between charges. The dipole moment is a
vector quantity; the overall molecular dipole is the vector sum of all bond dipoles.

### Examples

| Molecule                 | Polar Bonds? | Symmetric?                        | Polar? |
| ------------------------ | ------------ | --------------------------------- | ------ |
| $\text{CO}_2$            | Yes (C=O)    | Yes (linear)                      | No     |
| $\text{H}_2\text{O}$     | Yes (O--H)   | No (bent)                         | Yes    |
| $\text{CCl}_4$           | Yes (C--Cl)  | Yes (tetrahedral)                 | No     |
| $\text{NH}_3$            | Yes (N--H)   | No (trigonal pyramidal)           | Yes    |
| $\text{BF}_3$            | Yes (B--F)   | Yes (trigonal planar)             | No     |
| $\text{CH}_2\text{Cl}_2$ | Yes          | No (tetrahedral, not symmetrical) | Yes    |

## Intermolecular Forces (CED Unit 3)

Intermolecular forces (IMFs) are weaker than intramolecular bonds but determine physical properties
like boiling point, melting point, and solubility.

### Types of IMFs (Weakest to Strongest)

1. **London Dispersion Forces (LDF):** Present in all molecules. Caused by temporary, instantaneous
   dipoles arising from fluctuations in electron distribution. Strength increases with molecular
   size (number of electrons) and molecular surface area.

2. **Dipole-Dipole Forces:** Between polar molecules. The positive end of one dipole attracts the
   negative end of another. These are permanent (unlike LDFs, which are transient).

3. **Hydrogen Bonding:** A special, strong type of dipole-dipole interaction between H bonded to N,
   O, or F and a lone pair on N, O, or F. Hydrogen bonding is about 5-10% as strong as a covalent
   bond.

4. **Ion-Dipole Forces:** Between an ion and a polar molecule. Important in solutions (dissolving
   ionic compounds in water).

### Trends in IMF Strength

- **LDF** increases with molar mass (more electrons = larger polarizability) and molecular surface
  area (longer chain = stronger LDF; branched = weaker LDF for same formula mass).
- **Boiling point** generally increases with IMF strength.
- **Hydrogen bonding** is responsible for anomalously high boiling points of water, ammonia, and
  hydrogen fluoride compared to other hydrides in their groups.

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
has only dipole-dipole forces and LDFs (S is not electronegative enough for H-bonding). Hydrogen
bonding is much stronger than the other IMFs.

:::

### Worked Example: Comparing IMF Strengths

Arrange in order of increasing boiling point: $\text{C}_2\text{H}_6$ (ethane),
$\text{CH}_3\text{OH}$ (methanol), $\text{CH}_3\text{OCH}_3$ (dimethyl ether).

$\text{C}_2\text{H}_6$ ($-89^{\circ}\text{C}$) $\lt$ $\text{CH}_3\text{OCH}_3$
($-24^{\circ}\text{C}$) $\lt$ $\text{CH}_3\text{OH}$ ($65^{\circ}\text{C}$).

Ethane has only LDFs. Dimethyl ether has LDFs and dipole-dipole forces. Methanol has LDFs,
dipole-dipole, and hydrogen bonding (O-H group). Hydrogen bonding makes methanol the strongest.

### Solubility: "Like Dissolves Like"

Polar solvents (e.g., water) dissolve ionic and polar solutes (via ion-dipole and dipole-dipole
interactions). Nonpolar solvents (e.g., hexane) dissolve nonpolar solutes (via LDFs). Ionic
compounds do not dissolve in nonpolar solvents because the energy gained from ion-induced dipole
interactions is insufficient to overcome the lattice energy.

### Summary: IMF Types and Properties

| IMF Type         | Present In             | Strength Order | Effect on Boiling Point |
| ---------------- | ---------------------- | -------------- | ----------------------- |
| London (LDF)     | All molecules          | Weakest        | Increases with size     |
| Dipole-dipole    | Polar molecules        | Moderate       | Moderate increase       |
| Hydrogen bonding | H bonded to N, O, or F | Strongest      | Large increase          |
| Ion-dipole       | Ionic + polar solvent  | Strongest IMF  | Dissolution             |

## Hybridization (CED Unit 2)

### sp Hybridization

- 2 electron domains
- Geometry: linear
- Example: $\text{BeCl}_2$, $\text{CO}_2$, $\text{C}_2\text{H}_2$
- One s orbital + one p orbital = two sp hybrid orbitals; two p orbitals remain unhybridized

### sp2 Hybridization

- 3 electron domains
- Geometry: trigonal planar
- Example: $\text{BF}_3$, $\text{C}_2\text{H}_4$
- One s orbital + two p orbitals = three sp$^2$ hybrid orbitals; one p orbital remains unhybridized
  (forms the pi bond)

### sp3 Hybridization

- 4 electron domains
- Geometry: tetrahedral
- Example: $\text{CH}_4$, $\text{NH}_3$, $\text{H}_2\text{O}$
- One s orbital + three p orbitals = four sp$^3$ hybrid orbitals

### sp3d and sp3d2 Hybridization

- 5 and 6 electron domains respectively
- Examples: $\text{PCl}_5$ (sp3d), $\text{SF}_6$ (sp3d2)
- Require d orbitals, so only available for period 3 and beyond

### Sigma and Pi Bonds

- **Sigma ($\sigma$) bonds:** Head-on overlap of orbitals along the internuclear axis. Single bonds
  are always sigma bonds. Sigma bonds allow free rotation.
- **Pi ($\pi$) bonds:** Side-to-side overlap of parallel p orbitals, above and below the
  internuclear axis. Found in double and triple bonds. Pi bonds restrict rotation.
- A double bond = 1 $\sigma$ + 1 $\pi$.
- A triple bond = 1 $\sigma$ + 2 $\pi$.

### Hybridization and Bonding in Ethene and Ethyne

**Ethene ($\text{C}_2\text{H}_4$):** Each carbon is sp$^2$ hybridised. The three sp$^2$ orbitals
form three sigma bonds (two C--H and one C--C). The remaining unhybridized p orbital on each carbon
overlaps to form a pi bond. The C=C double bond is planar, and rotation is restricted.

**Ethyne ($\text{C}_2\text{H}_2$):** Each carbon is sp hybridised. The two sp orbitals form two
sigma bonds (one C--H and one C--C). The remaining two unhybridized p orbitals on each carbon form
two pi bonds. The molecule is linear.

### Worked Example: Bonding in Benzene

Benzene ($\text{C}_6\text{H}_6$) has six carbon atoms in a ring. Each carbon is sp$^2$ hybridised.
Three sp$^2$ orbitals form two C--H sigma bonds and one C--C sigma bond. The remaining p orbital on
each carbon overlaps with its neighbours to form a delocalised pi system above and below the ring.
The six C--C bonds are equivalent, each with bond order 1.5.

## Bonding Continuum and Partial Ionic Character

The distinction between ionic and covalent bonding is not absolute. Bonds exist on a continuum from
pure covalent (zero electronegativity difference) to ionic (large electronegativity difference).

Percent ionic character can be estimated from the electronegativity difference:

$$\%\text{ ionic character} \approx \left(1 - e^{-0.25(\Delta\chi)^2}\right) \times 100$$

| $\Delta\chi$ | % Ionic Character | Bond Example |
| ------------ | ----------------- | ------------ |
| 0.0          | 0%                | H-H          |
| 0.4          | 4%                | C-H          |
| 0.9          | 19%               | H-Cl         |
| 1.7          | 51%               | Na-Cl        |
| 2.1          | 67%               | Mg-O         |
| 3.0          | 89%               | Cs-F         |

Even a bond like Na-Cl has some covalent character because the chloride ion is polarizable and the
sodium cation distorts the electron cloud. Conversely, even H-Cl has some ionic character.

## Worked Example: Formal Charge Calculations

**Example.** Draw the Lewis structure for $\text{N}_2\text{O}$ and determine the formal charges.

Total valence electrons: $5 + 5 + 6 = 16$.

Three possible resonance structures:

Structure 1: $\text{N}\equiv\text{N}-\text{O}$: N(left) = $5 - 2 - 6/2 = 0$; N(right) =
$5 - 0 - 8/2 = +1$; O = $6 - 6 - 2/2 = -1$.

Structure 2: $\text{N}=\text{N}=\text{O}$: N(left) = $5 - 4 - 4/2 = -1$; N(right) =
$5 - 0 - 8/2 = +1$; O = $6 - 4 - 4/2 = 0$.

Structure 3: $\text{N}-\text{N}\equiv\text{O}$: N(left) = $5 - 6 - 2/2 = -2$; N(right) =
$5 - 0 - 6/2 = +2$; O = $6 - 2 - 6/2 = +1$.

Structure 1 is the best because the formal charges are closest to zero and the negative charge is on
the more electronegative atom (oxygen).

## Detailed Worked Example: VSEPR with Multiple Lone Pairs

**Example.** Determine the molecular geometry of $\text{XeF}_4$.

Xe has 8 valence electrons + 4 from bonds = 12 electrons = 6 electron domains. Four are bonding
pairs and two are lone pairs.

Electron domain geometry: octahedral. The two lone pairs occupy axial positions (to minimise 90
degree repulsions). This gives a square planar molecular geometry with 90 degree bond angles.

### Worked Example: Formal Charge to Determine Best Structure

**Example.** Draw the best Lewis structure for $\text{N}_2\text{O}$ (nitrous oxide) and determine
the formal charges.

Total valence electrons: $5 + 5 + 6 = 16$.

Three possible resonance structures:

Structure 1: $\text{N}\equiv\text{N}-\text{O}$: N(left) FC = 0; N(right) FC = +1; O FC = -1.

Structure 2: $\text{N}=\text{N}=\text{O}$: N(left) FC = -1; N(right) FC = +1; O FC = 0.

Structure 3: $\text{N}-\text{N}\equiv\text{O}$: N(left) FC = -2; N(right) FC = +2; O FC = +1.

Structure 1 is the best because the formal charges are closest to zero and the negative charge is on
the more electronegative atom (oxygen). Structure 3 can be eliminated because it has the largest
formal charges.

### Worked Example: VSEPR for Complex Molecules

**Example.** Determine the geometry around each central atom in $\text{CH}_3\text{COOH}$ (acetic
acid).

Carbon 1 ($\text{CH}_3$): 4 bonding domains, 0 lone pairs. Tetrahedral, 109.5 degrees.

Carbon 2 ($\text{COOH}$): 3 bonding domains (one C-C, one C=O, one C-O), 0 lone pairs. Trigonal
planar, 120 degrees.

Oxygen (in C=O): 2 bonding domains, 2 lone pairs. Bent, approximately 120 degrees (sp2).

Oxygen (in C-OH): 2 bonding domains, 2 lone pairs. Bent, approximately 109.5 degrees (sp3).

### Worked Example: Polarity Analysis

**Example.** Is $\text{SF}_4$ polar?

S has 5 electron domains (4 bonding, 1 lone pair). Seesaw geometry. The bond dipoles do not cancel
because the geometry is not symmetric (the lone pair distorts the structure). Therefore,
$\text{SF}_4$ is polar.

Compare with $\text{XeF}_4$: 6 electron domains (4 bonding, 2 lone pairs). Square planar. The bond
dipoles of the four Xe-F bonds cancel in pairs because the molecule is symmetric. $\text{XeF}_4$ is
nonpolar.

### Derivation: Why Hydrogen Bonds Are Directional

Hydrogen bonds are directional because they require a specific geometry: the hydrogen must be
colinear with the two electronegative atoms (donor-H...acceptor angle close to 180 degrees). This
maximises the electrostatic attraction between the partial positive hydrogen and the lone pair on
the acceptor. Deviation from linearity weakens the hydrogen bond significantly.

This directionality explains many of water's unique properties. In ice, each water molecule forms
four hydrogen bonds in a tetrahedral arrangement, creating an open lattice structure with lower
density than liquid water.

## Bonding Continuum and Partial Ionic Character

The distinction between ionic and covalent bonding is not absolute. Bonds exist on a continuum from
pure covalent (zero electronegativity difference) to ionic (large electronegativity difference).

Percent ionic character can be estimated from the electronegativity difference:

$$\%\text{ ionic character} \approx \left(1 - e^{-0.25(\Delta\chi)^2}\right) \times 100$$

| $\Delta\chi$ | % Ionic Character | Bond Example |
| ------------ | ----------------- | ------------ |
| 0.0          | 0%                | H-H          |
| 0.4          | 4%                | C-H          |
| 0.9          | 19%               | H-Cl         |
| 1.7          | 51%               | Na-Cl        |
| 2.1          | 67%               | Mg-O         |
| 3.0          | 89%               | Cs-F         |

Even a bond like Na-Cl has some covalent character because the chloride ion is polarizable and the
sodium cation distorts the electron cloud. Conversely, even H-Cl has some ionic character.

### Worked Example: Bond Type Prediction

Predict the bond type and percent ionic character for the C-O bond in methanol.

$\Delta\chi = 3.44 - 2.55 = 0.89$. This falls in the polar covalent range (0.4 to 1.7).

$\%\text{ ionic} \approx (1 - e^{-0.25(0.89)^2}) \times 100 = (1 - e^{-0.198}) \times 100 = (1 - 0.820) \times 100 = 18\%$.

The C-O bond in methanol is polar covalent with approximately 18% ionic character.

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
8. **Counting sigma and pi bonds incorrectly.** Every bond has at least one sigma bond. Only
   additional bonds (second and third) are pi bonds.
9. **Confusing LDF strength with dipole-dipole strength.** For large molecules, LDFs can be stronger
   than dipole-dipole forces.
10. **Assuming all molecules with hydrogen form hydrogen bonds.** H must be bonded to N, O, or F.
11. **Placing lone pairs in axial positions of a trigonal bipyramid.** Lone pairs always go
    equatorial to minimise repulsion.
12. **Forgetting that resonance structures are not real.** The actual molecule is a hybrid; no
    single resonance structure exists independently.

## Comparison Table: IMF Types and Boiling Points

| Substance            | Molar Mass | IMF Types          | Boiling Point (${}^{\circ}\text{C}$) |
| -------------------- | ---------- | ------------------ | ------------------------------------ |
| $\text{CH}_4$        | 16         | LDF only           | -161                                 |
| $\text{NH}_3$        | 17         | H-bonding, LDF     | -33                                  |
| $\text{H}_2\text{O}$ | 18         | H-bonding, LDF     | 100                                  |
| $\text{Ne}$          | 20         | LDF only           | -246                                 |
| $\text{HF}$          | 20         | H-bonding, LDF     | 20                                   |
| $\text{Ar}$          | 40         | LDF only           | -186                                 |
| $\text{HCl}$         | 36.5       | Dipole-dipole, LDF | -85                                  |
| $\text{H}_2\text{S}$ | 34         | Dipole-dipole, LDF | -60                                  |

This table clearly shows that hydrogen bonding produces dramatically higher boiling points than
other IMF types for similar molar masses.

## Summary Table: Types of Chemical Bonds Compared

| Property                     | Ionic              | Nonpolar Covalent     | Polar Covalent  | Metallic                |
| ---------------------------- | ------------------ | --------------------- | --------------- | ----------------------- |
| Constituents                 | Cations and anions | Shared electron pairs | Unequal sharing | Cations + delocalised e |
| Electron transfer            | Complete           | None                  | Partial         | Complete (delocalised)  |
| Electronegativity difference | $\gt 1.7$          | $\lt 0.4$             | 0.4 -- 1.7      | N/A                     |
| Melting point                | High               | Low                   | Low             | High                    |
| Electrical cond.             | Molten/dissolved   | None                  | None            | Yes (always)            |
| Solubility                   | Polar solvents     | Nonpolar solvents     | Both            | Insoluble               |
| Example                      | NaCl               | $\text{O}_2$          | HCl             | Cu, Fe                  |

## Summary Table: Hybridization Quick Reference

| Electron Domains | Hybridization | Geometry             | Bond Angles             | Examples                                           |
| ---------------- | ------------- | -------------------- | ----------------------- | -------------------------------------------------- |
| 2                | sp            | Linear               | 180$^\circ$             | $\text{BeCl}_2$, $\text{CO}_2$                     |
| 3                | sp$^2$        | Trigonal planar      | 120$^\circ$             | $\text{BF}_3$, $\text{C}_2\text{H}_4$              |
| 4                | sp$^3$        | Tetrahedral          | 109.5$^\circ$           | $\text{CH}_4$, $\text{NH}_3$, $\text{H}_2\text{O}$ |
| 5                | sp$^3$d       | Trigonal bipyramidal | 90$^\circ$, 120$^\circ$ | $\text{PCl}_5$                                     |
| 6                | sp$^3$d$^2$   | Octahedral           | 90$^\circ$              | $\text{SF}_6$, $\text{XeF}_4$                      |

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

9. Explain why $n$-butanol has a much higher boiling point than diethyl ether, despite having the
   same molecular formula ($\text{C}_4\text{H}_{10}\text{O}$).

10. Describe the bonding in $\text{O}_3$ including hybridization, sigma and pi bonds, and the
    concept of resonance.

11. Explain, using the concept of hybridization, why the H--C--H bond angle in methane is
    $109.5^\circ$ but the H--N--H bond angle in ammonia is $107^\circ$.

12. Predict the molecular geometry of $\text{I}_3^-$ and explain why the central iodine atom can
    have more than 8 electrons.

13. Compare and contrast the types of intermolecular forces present in liquid $\text{CH}_3\text{F}$
    and liquid $\text{CH}_3\text{OH}$.

14. Draw the Lewis structure for $\text{SF}_6$, determine the formal charges, and explain why sulfur
    can accommodate 12 electrons around it.

15. Which of the following can form hydrogen bonds with water: $\text{CH}_3\text{OH}$,
    $\text{CH}_3\text{OCH}_3$, $\text{CH}_3\text{CH}_3$? Explain.

16. Describe the bonding in the nitrate ion ($\text{NO}_3^-$), including hybridization, resonance,
    and bond order.

17. Explain why $\text{CCl}_4$ is nonpolar despite having four polar C--Cl bonds, while
    $\text{CHCl}_3$ is polar.

18. Determine the hybridization of the central atom and the molecular geometry of $\text{BrF}_3$.

19. Arrange in order of increasing boiling point and explain:
    $\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_3$, $\text{CH}_3\text{CH}_2\text{CH}_2\text{OH}$,
    $\text{HOCH}_2\text{CH}_2\text{OH}$.

20. Draw the Lewis structure for $\text{ClF}_3$ and explain why the molecule has a T-shaped geometry
    rather than a trigonal planar geometry.

21. For the molecule $\text{SO}_3$, draw the Lewis structure, determine the hybridization of sulfur,
    and explain why all three S--O bonds have the same length despite one being a double bond in the
    Lewis structure.

22. Explain why $\text{HF}$ has a higher boiling point than $\text{HCl}$ even though $\text{HCl}$
    has a larger molar mass.

23. Draw the Lewis structure for $\text{XeF}_4$, determine the formal charge on each atom, and
    explain the square planar geometry.

24. Calculate the number of sigma and pi bonds in
    $\text{H}_2\text{C}=\text{CH}-\text{C}\equiv\text{N}$.

25. Explain why the bond angle in $\text{H}_2\text{S}$ ($92^\circ$) is smaller than the bond angle
    in $\text{H}_2\text{O}$ ($104.5^\circ$), even though both have the same number of electron
    domains and lone pairs.

26. Draw all resonance structures for the carbonate ion ($\text{CO}_3^{2-}$) and determine the
    average C--O bond order.

27. Predict the hybridization and molecular geometry of $\text{ICl}_4^-$.

28. Which compound in each pair has the higher boiling point? Explain your reasoning in each case:
    (a) $\text{CH}_3\text{OH}$ or $\text{CH}_3\text{SH}$ (b) $\text{C}_2\text{H}_6$ or
    $\text{C}_4\text{H}_{10}$ (c) $\text{NH}_3$ or $\text{PH}_3$.

29. Draw the Lewis structure for $\text{PO}_4^{3-}$ and determine the formal charge on each atom.
    What is the hybridization of phosphorus?

30. Explain, using VSEPR theory, why the $\text{F}-\text{Xe}-\text{F}$ bond angles in $\text{XeF}_4$
    are all $90^\circ$.

31. Calculate the percent ionic character of the H-F bond. Is it more accurate to describe this bond
    as covalent or ionic?

32. Draw the Lewis structure for $\text{ClO}_2^-$, determine the molecular geometry, and predict
    whether the ion is polar.

33. Explain why the boiling point of $\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{OH}$
    ($117^{\circ}\text{C}$) is higher than that of $\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_3$
    ($0^{\circ}\text{C}$) by more than can be explained by the difference in molar mass alone.

34. For the molecule $\text{BF}_3\text{NH}_3$, determine the hybridization of both boron and
    nitrogen, and identify the type of bond formed between them.

35. Explain why carbon tetrachloride ($\text{CCl}_4$) does not conduct electricity in any state,
    whereas molten sodium chloride does.
