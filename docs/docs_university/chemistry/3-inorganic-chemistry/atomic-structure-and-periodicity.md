---
title: Atomic Structure and Periodicity
description:
  'University Chemistry Atomic Structure and Periodicity notes covering key definitions, core
  concepts, worked examples, and practice questions for exam readiness.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Chemistry
  - University
categories:
  - Chemistry
slug: university-chemistry/atomic-structure-and-periodicity
---

## 1. Atomic Orbitals

### 1.1 Quantum Numbers and Orbital Designation

Each atomic orbital is characterized by four quantum numbers:

| Quantum Number | Symbol   | Allowed Values                   |
| -------------- | -------- | -------------------------------- |
| Principal      | $n$      | $1, 2, 3, \ldots$                |
| Azimuthal      | $\ell$   | $0, 1, 2, \ldots, n - 1$         |
| Magnetic       | $m_\ell$ | $-\ell, \ldots, 0, \ldots, \ell$ |
| Spin           | $m_s$    | $+\frac{1}{2}, -\frac{1}{2}$     |

Orbital types: $\ell = 0$ ($s$), $\ell = 1$ ($p$), $\ell = 2$ ($d$), $\ell = 3$ ($f$).

### 1.2 Orbital Shapes and Nodes

**Theorem 1 (Node Count):** Total nodes $= n - 1$.

$$\text{Radial nodes} = n - \ell - 1, \quad \text{Angular nodes} = \ell$$

| Orbital | Radial Nodes | Angular Nodes | Shape                  |
| ------- | ------------ | ------------- | ---------------------- |
| 1s      | 0            | 0             | Sphere                 |
| 2s      | 1            | 0             | Sphere + 1 radial node |
| 2p      | 0            | 1             | Dumbbell               |
| 3d      | 0            | 2             | Cloverleaf             |
| 4f      | 0            | 3             | Complex multi-lobed    |

### 1.3 The Radial Distribution Function

**Definition 1 (Radial Distribution Function):** $P(r) = r^2|R_{n\ell}(r)|^2$, the probability of
finding the electron between $r$ and $r + dr$ from the nucleus.

For the hydrogen 1s orbital, the maximum occurs at $r = a_0 = 52.9$ pm (the Bohr radius).

### 1.4 Penetration and Shielding

**Definition 2 (Penetration):** The ability of an electron to get close to the nucleus, bypassing
shielding by other electrons. Penetration follows $s > p > d > f$.

**Definition 3 (Shielding):** The reduction in effective nuclear charge experienced by an electron
due to repulsion by other electrons.

## 2. Effective Nuclear Charge

### 2.1 Slater's Rules

**Theorem 2 (Slater's Rules):** The effective nuclear charge $Z_{\text{eff}}$ experienced by an
electron is:

$$Z_{\text{eff}} = Z - S$$

where $Z$ is the atomic number and $S$ is the shielding constant.

**Calculation of $S$:**

1. Write the electron configuration in groups: $(1s)(2s,2p)(3s,3p)(3d)(4s,4p)(4d)(4f)\ldots$
2. Electrons in groups **to the right** contribute nothing to $S$.
3. **Same group** ($ns$, $np$): Each other electron contributes $0.35$ (except $1s$: $0.30$).
4. **$n - 1$ shell:** Each electron contributes $0.85$.
5. **$n - 2$ or lower shells:** Each electron contributes $1.00$.
6. For $d$ and $f$ electrons: All electrons in groups to the left contribute $1.00$.

**Example 1:** Calculate $Z_{\text{eff}}$ for a 3p electron in chlorine ($Z = 17$, configuration
$1s^2\,2s^2\,2p^6\,3s^2\,3p^5$).

Same group (other 3p electrons): $4 \times 0.35 = 1.40$ $n - 1$ shell (3s + 2s2p):
$2 \times 0.85 + 8 \times 0.85 = 8.50$ $n - 2$ and below (1s): $2 \times 1.00 = 2.00$

$$S = 1.40 + 8.50 + 2.00 = 11.90$$

$$Z_{\text{eff}} = 17 - 11.90 = 5.10$$

$\blacksquare$

### 2.2 Periodic Consequences

Higher $Z_{\text{eff}}$ $\implies$ smaller atomic radius, higher ionization energy, greater
electronegativity.

## 3. Periodic Trends

### 3.1 Atomic Radius

**Definition 4 (Atomic Radius):** Half the distance between nuclei of two bonded atoms of the same
element (covalent radius) or nearest neighbors in a metallic crystal (metallic radius).

**Trends:**

- **Down a group:** Atomic radius increases (additional shells, $n$ increases).
- **Across a period (left to right):** Atomic radius decreases ($Z_{\text{eff}}$ increases, pulling
  electrons closer).

$$r \propto \frac{n^2}{Z_{\text{eff}}}$$

**Example 2:** Atomic radii (pm): Na (186) > Mg (160) > Al (143) > Si (117) > P (110) > S (104) > Cl
(99) > Ar (71)

$\blacksquare$

### 3.2 Ionization Energy

**Definition 5 (First Ionization Energy):** The energy required to remove the outermost electron
from a gaseous atom:

$$\text{X}(g) \to \text{X}^+(g) + e^- \quad \Delta H = \text{IE}_1$$

**Trends:**

- Increases across a period (larger $Z_{\text{eff}}$).
- Decreases down a group (larger radius, electron farther from nucleus).

**Exceptions:**

- $\text{IE}(\text{Be}) > \text{IE}(\text{B})$: 2s$^2$ is a filled, stable subshell.
- $\text{IE}(\text{N}) > \text{IE}(\text{O})$: 2p$^4$ has paired electrons (repulsion).

**Successive ionization energies:** Large jumps indicate the removal of core electrons:
$$\text{IE}_1 < \text{IE}_2 < \text{IE}_3 \ll \text{IE}_4$$

The jump from $\text{IE}_3$ to $\text{IE}_4$ for aluminum indicates removal from the $n = 2$ shell.

### 3.3 Electron Affinity

**Definition 6 (Electron Affinity):** The energy released when an electron is added to a gaseous
atom:

$$\text{X}(g) + e^- \to \text{X}^-(g) \quad \Delta H = \text{EA}$$

**Trends:**

- Generally becomes more negative across a period (halogens have the most negative EA).
- Less negative down a group.

**Notable exceptions:**

- Noble gases: Positive EA (endothermic).
- Group 2 (Be, Mg): Filled s-subshell $\implies$ small EA.
- Group 15 (N): Half-filled p-subshell $\implies$ small EA.

### 3.4 Electronegativity

**Definition 7 (Electronegativity):** The ability of an atom in a molecule to attract electrons
toward itself.

**Pauling scale:** Based on bond energy differences:

$$\chi_A - \chi_B = 0.102\sqrt{D_{AB} - \frac{D_{AA} + D_{BB}}{2}}$$

**Mulliken scale:** Average of ionization energy and electron affinity:

$$\chi_M = \frac{\text{IE} + \text{EA}}{2}$$

(normalized to Pauling scale)

**Trends:**

- Increases across a period (F is most electronegative: $\chi = 3.98$).
- Decreases down a group.
- Cesium ($\chi = 0.79$) is the least electronegative.

## 4. Advanced Periodic Concepts

### 4.1 Relativistic Effects

**Definition 8 (Relativistic Effects):** For heavy elements (high $Z$), inner-shell electrons move
at speeds approaching $c$. This causes:

- **Contraction of $s$ and $p$ orbitals:** Increased effective mass $\implies$ smaller Bohr radius.
- **Expansion of $d$ and $f$ orbitals:** Better shielding of $d/f$ electrons $\implies$ larger.
- **Gold's color:** Relativistic contraction shifts the $5d \to 6s$ transition into the visible.

**Consequence:** Mercury is a liquid (relativistic contraction of 6s weakens Hg–Hg bonding).

### 4.2 Diagonal Relationships

**Definition 9 (Diagonal Relationship):** Elements diagonal to each other in the periodic table show
similar properties due to similar $Z_{\text{eff}}$/radius ratios:

- **Li and Mg:** Both form nitrides, oxides with some covalent character.
- **Be and Al:** Both amphoteric, form covalent halides.
- **B and Si:** Both semiconductors, form acidic oxides.

### 4.3 Lanthanide Contraction

**Theorem 3 (Lanthanide Contraction):** Across the lanthanide series (La to Lu), the 4f electrons
poorly shield the nuclear charge. Each element has a slightly smaller radius than expected:

$$\text{La}^{3+} (103 \text{ pm}) > \text{Lu}^{3+} (86 \text{ pm})$$

**Consequences:**

- **Post-lanthanide $d$-block elements** (Hf, Ta, W, Re, Os, Ir, Pt, Au) are nearly the same size as
  their period 5 counterparts (Zr, Nb, Mo, Tc, Ru, Rh, Pd, Ag).
- Hf and Zr are extremely similar chemically (difficult to separate).
- Pt and Pd are more similar than expected.

### 4.4 Inert Pair Effect

**Definition 10 (Inert Pair Effect):** For heavier p-block elements (particularly Group 13–15), the
$ns^2$ electron pair is reluctant to participate in bonding, favoring lower oxidation states:

$$\text{Tl}^+ > \text{Tl}^{3+}, \quad \text{Pb}^{2+} > \text{Pb}^{4+}, \quad \text{Bi}^{3+} > \text{Bi}^{5+}$$

**Cause:** Relativistic stabilization of the $ns$ orbital (contracted, lower in energy).

### 4.5 Transition Metal Trends

- **Atomic radius:** Decreases across a series due to increasing $Z_{\text{eff}}$ (d electrons
  shield poorly). The decrease is smaller than in the main group.
- **Ionization energies:** Relatively uniform across a series; second and third rows have higher IE
  due to lanthanide contraction.
- **Melting points:** Peak around Group 6 (Cr, Mo, W) due to maximum d-bonding.
- **Oxidation states:** Range from +1 to +7; common oxidation states depend on electronic
  configuration and ligand field stabilization.

## 5. Electronic Configuration Anomalies

### 5.1 Chromium and Copper

- **Cr ($Z = 24$):** $[\text{Ar}]\,3d^5\,4s^1$ (not $3d^4\,4s^2$) — half-filled $d$-subshell is more
  stable.
- **Cu ($Z = 29$):** $[\text{Ar}]\,3d^{10}\,4s^1$ (not $3d^9\,4s^2$) — filled $d$-subshell is more
  stable.

Similar anomalies: Mo ($4d^5\,5s^1$), Ag ($4d^{10}\,5s^1$), Au ($5d^{10}\,6s^1$).

### 5.2 Stability of Half-Filled and Filled Subshells

**Theorem 4:** Half-filled ($d^5$, $f^7$) and filled ($d^{10}$, $f^{14}$) subshells have extra
stability due to exchange energy (symmetric spatial wavefunction for parallel spins).

Exchange energy per pair of parallel spins: $K_{ij} = J_{ij}$ (exchange integral).

For $d^5$: $C(5,2) = 10$ pairs of parallel spins (maximum exchange stabilization).

## 6. Ionization and Electron Configurations of Ions

### 6.1 Transition Metal Ions

When transition metals form cations, the $ns$ electrons are lost first (even though $ns$ fills
before $(n-1)d$):

$$\text{Fe}: [\text{Ar}]\,3d^6\,4s^2 \to \text{Fe}^{2+}: [\text{Ar}]\,3d^6$$
$$\text{Fe}: [\text{Ar}]\,3d^6\,4s^2 \to \text{Fe}^{3+}: [\text{Ar}]\,3d^5$$

### 6.2 Isoelectronic Series

**Definition 11 (Isoelectronic):** Species with the same number of electrons.

Radius trend:
$\text{O}^{2-} > \text{F}^- > \text{Ne} > \text{Na}^+ > \text{Mg}^{2+} > \text{Al}^{3+}$

For isoelectronic ions: higher nuclear charge $\implies$ smaller radius.

## 7. Periodic Properties and Chemical Behavior

### 7.1 Metallic vs Non-Metallic Character

- **Metallic character** increases down a group and decreases across a period.
- **Metalloid line:** B–Si–Ge–As–Sb–Te–At separates metals from non-metals (approximately).

### 7.2 Acid-Base Character of Oxides

- **Metal oxides:** Basic (e.g., Na$_2$O, CaO).
- **Non-metal oxides:** Acidic (e.g., SO$_3$, P$_4$O$_{10}$).
- **Amphoteric oxides:** Both basic and acidic (e.g., Al$_2$O$_3$, ZnO).

Trend: Basicity increases down a group; acidity increases across a period.

### 7.3 Bonding Trends

- **Ionic compounds:** Formed between metals (low IE, low EN) and non-metals (high EA, high EN).
  Characterized by large electronegativity differences ($\Delta\chi > 1.7$).
- **Covalent compounds:** Formed between elements with similar electronegativities.
- **Polar covalent:** Intermediate $\Delta\chi$ (0.4–1.7).

## Common Pitfalls

1. **Wrong shielding constant in Slater's rules.** Electrons in $d$ and $f$ subshells shield
   differently (all electrons to the left contribute 1.00). **Fix:** Use the correct Slater grouping
   for each type of electron.
2. **Confusing atomic radius definitions.** Covalent, metallic, van der Waals, and ionic radii are
   measured differently and cannot be directly compared. **Fix:** Use consistent definitions when
   comparing trends.
3. **Wrong ionization energy trend exceptions.** Be > B and N > O are due to subshell stability, not
   errors. **Fix:** Remember that filled and half-filled subshells are more stable.
4. **Assuming the 4s orbital fills before 3d and empties before 3d.** 4s fills before 3d, but loses
   electrons before 3d when ionized. **Fix:** In transition metal ions, always remove $ns$ first.
5. **Ignoring relativistic effects for heavy elements.** Properties of 5d elements (Hf–Au) differ
   significantly from what non-relativistic predictions would suggest. **Fix:** Account for
   lanthanide contraction and relativistic stabilization of $s$ orbitals.
6. **Confusing electron affinity signs.** EA is defined as energy released; a more negative EA means
   the process is more favorable. **Fix:** Conventionally, EA is reported as a positive number when
   energy is released (some sources differ — check the convention).
7. **Overgeneralizing diagonal relationships.** Li–Mg and Be–Al are the strongest; B–Si is weaker.
   **Fix:** Diagonal relationships are trends, not absolute rules; always consider specific
   chemistry.

## Summary

- **Orbital structure:** Quantum numbers $(n, \ell, m_\ell, m_s)$; nodes = $n - 1$.
- **Effective nuclear charge:** $Z_{\text{eff}} = Z - S$; Slater's rules for calculating $S$.
- **Periodic trends:** Atomic radius, IE, EA, EN increase across a period; decrease down a group.
- **Exceptions:** Be > B and N > O in IE; Cr, Cu configurations; lanthanide contraction.
- **Lanthanide contraction:** Poor shielding by 4f electrons; post-lanthanide $d$-block elements are
  similar in size to their period 5 counterparts.
- **Inert pair effect:** Heavy p-block elements favor lower oxidation states ($ns^2$ inert).
- **Relativistic effects:** Significant for 5d and 6p elements; gold's color, mercury’s liquid
  state.

## Worked Examples

### Example 1: Predicting Ionisation Energy Trends

**Problem:** Explain why the first ionisation energy of aluminium (578 kJ/mol) is lower than that of
magnesium (738 kJ/mol), despite aluminium being to the right of magnesium in period 3. **Solution:**
Magnesium has the electron configuration [Ne]3s^2. Removing one electron requires breaking a filled
s-subshell (stable configuration). Aluminium has [Ne]3s^2 3p^1. The 3p electron is higher in energy
and more effectively shielded than the 3s electrons, so it is removed more readily. This is a
general trend: the ionisation energy drops slightly when moving from a filled s-subshell to a
p-subshell element.

### Example 2: Lanthanide Contraction Effect

**Problem:** Explain why the atomic radius of Zr (160 pm) is nearly identical to that of Hf (159
pm), despite Hf being in the period below Zr. **Solution:** The lanthanide contraction is caused by
poor shielding of 4f electrons. As nuclear charge increases across the lanthanides (Ce to Lu), the
effective nuclear charge felt by outer electrons increases significantly, pulling them closer. This
contraction (~15 pm total) compensates for the expected increase in radius from adding a new shell,
making Zr and Hf nearly identical in size. This explains their similar chemical properties and the
difficulty of separating them.

## Cross-References

| Topic                         | Site        | Link                                                               |
| ----------------------------- | ----------- | ------------------------------------------------------------------ |
| Quantum Chemistry             | WyattsNotes | [View](/docs/university/chemistry/quantum-chemistry)               |
| Coordination Chemistry        | WyattsNotes | [View](/docs/university/chemistry/coordination-chemistry)          |
| Main-Group Chemistry          | WyattsNotes | [View](/docs/university/chemistry/main-group-chemistry)            |
| Atomic Structure — LibreTexts | LibreTexts  | [View](https://chem.libretexts.org/Bookshelves/General_Chemistry/) |
