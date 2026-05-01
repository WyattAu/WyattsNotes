---
title: Arenes
description:
  "A-Level Chemistry notes on Arenes: Benzene Structure; Molecular Formula and Degree of Unsaturation; The Kekule Structure; Evidence for Delocalisation."
date: 2026-04-22T00:00:00.000Z
tags:
  - Chemistry
  - ALevel
categories:
  - Chemistry
slug: arenes
---

# Arenes (Aromatic Compounds)

Arenes are hydrocarbons containing one or more benzene rings. Benzene ($\mathrm{C}_6\mathrm{H}_6$)
is the archetypal aromatic compound. Its structure and reactivity differ fundamentally from those of
alkenes, despite both containing $\pi$ electrons. The key distinction is that benzene's $\pi$
electrons are **delocalised** over the entire ring, forming an aromatic system with exceptional
thermodynamic stability.

## Benzene Structure

### Molecular Formula and Degree of Unsaturation

Benzene has the molecular formula $\mathrm{C}_6\mathrm{H}_6$, corresponding to four degrees of
unsaturation. This immediately rules out an acyclic structure and indicates significant multiple
bonding or ring formation.

### The Kekule Structure

August Kekule proposed a cyclic structure with alternating single and double bonds in 1865. While
this was a productive historical hypothesis, it fails to explain several key observations and is now
known to be incorrect.

### Evidence for Delocalisation

**1. Bond lengths are identical.** X-ray diffraction shows that all six C--C bonds in benzene have
the same length: $139\,\mathrm{pm}$. A Kekule structure with alternating single ($154\,\mathrm{pm}$)
and double ($134\,\mathrm{pm}$) bonds would show two distinct bond lengths. The experimental value
is intermediate between single and double, consistent with bond order of 1.5.

**2. No isomers of 1,2-disubstituted benzene.** The Kekule structure predicts two distinct isomers
of 1,2-dibromobenzene (bromines on a "single" bond vs on a "double" bond). Only one compound is
observed.

**3. Thermochemical evidence.** The experimental enthalpy of hydrogenation of benzene
($-208\,\mathrm{kJ/mol}$) is significantly less exothermic than the theoretical value for three
isolated double bonds ($3 \times -120 = -360\,\mathrm{kJ/mol}$). The difference of approximately
$152\,\mathrm{kJ/mol}$ is the **delocalisation energy** (also called resonance energy or aromatic
stabilisation energy).

**4. Resistance to addition reactions.** Unlike alkenes, benzene does not readily undergo addition
reactions that would destroy the aromatic $\pi$ system. It favours substitution, which preserves the
delocalised ring.

### The Delocalised Model

In the modern model:

- Each carbon is $sp^2$ hybridised, forming three $\sigma$ bonds (two C--C and one C--H) at
  $120^\circ$ angles in a planar arrangement.
- Each carbon has one remaining electron in an unhybridised $p_z$ orbital, perpendicular to the ring
  plane.
- The six $p_z$ orbitals overlap laterally, forming a delocalised $\pi$ molecular orbital that
  extends over all six carbons, above and below the ring.
- The electron density is distributed uniformly (shown experimentally by X-ray and electron
  diffraction).
- The ring current induced by an external magnetic field explains the diamagnetic ring current
  (detectable by NMR spectroscopy: aromatic protons are deshielded and appear at
  $\delta \approx 7.2\,\mathrm{ppm}$).

### Huckel's Rule

A planar, cyclic, fully conjugated system with $4n + 2$ $\pi$ electrons (where $n$ is a non-negative
integer) is aromatic. Benzene has $6\,\pi$ electrons ($n = 1$), satisfying the rule. Cyclobutadiene
($4\,\pi$ electrons) and cyclooctatetraene ($8\,\pi$ electrons) are not aromatic because they have
$4n\,\pi$ electrons (anti-aromatic or non-aromatic).

## Electrophilic Aromatic Substitution

The defining reaction of arenes is electrophilic substitution, not addition. The mechanism involves
two steps:

1. **Attack:** The electrophile attacks the delocalised $\pi$ system, forming a cyclohexadienyl
   cation intermediate (also called a sigma complex or arenium ion). This step is endothermic
   because it destroys the aromatic stabilisation.
2. **Deprotonation:** A base removes a proton from the arenium ion, restoring aromaticity. This step
   is exothermic.

The overall reaction is thermodynamically favourable because the aromatic system is regenerated. The
rate-determining step is the initial electrophilic attack.

### Nitration

**Reagents:** Concentrated nitric acid and concentrated sulphuric acid (the latter acts as a
catalyst and dehydrating agent).

**Conditions:** $50$--$60^\circ\mathrm{C}$ (gentle heating). Higher temperatures produce di- and
tri-nitration.

**Generation of the electrophile** (the nitronium ion, $\mathrm{NO}_2^+$):

$$
\mathrm{HNO}_3 + \mathrm{H}_2\mathrm{SO}_4 \to \mathrm{NO}_2^+ + \mathrm{HSO}_4^- + \mathrm{H}_2\mathrm{O}
$$

The sulphuric acid protonates nitric acid, which then loses water to form the nitronium ion. This is
a strong electrophile because the positive charge is delocalised over three atoms
($\mathrm{O}=\mathrm{N}^+=\mathrm{O}$).

**Overall reaction:**

$$
\mathrm{C}_6\mathrm{H}_6 + \mathrm{HNO}_3 \xrightarrow{\mathrm{H}_2\mathrm{SO}_4} \mathrm{C}_6\mathrm{H}_5\mathrm{NO}_2 + \mathrm{H}_2\mathrm{O}
$$

### Friedel-Crafts Acylation

**Reagents:** Acyl chloride ($\mathrm{RCOCl}$) and aluminium chloride ($\mathrm{AlCl}_3$) catalyst
(anhydrous).

**Electrophile:** The acylium ion ($\mathrm{RCO}^+$), generated by:

$$
\mathrm{RCOCl} + \mathrm{AlCl}_3 \to \mathrm{RCO}^+ + \mathrm{AlCl}_4^-
$$

**Overall reaction:**

$$
\mathrm{C}_6\mathrm{H}_6 + \mathrm{RCOCl} \xrightarrow{\mathrm{AlCl}_3} \mathrm{C}_6\mathrm{H}_5\mathrm{COR} + \mathrm{HCl}
$$

The product is an aryl ketone. Friedel-Crafts acylation is preferred over Friedel-Crafts alkylation
because:

- The acylium ion is a weaker electrophile, reducing over-alkylation.
- The ketone product is electron-withdrawing and deactivates the ring, preventing further
  substitution.
- No carbocation rearrangement occurs (the acylium ion is resonance-stabilised:
  $\mathrm{R}-\mathrm{C}\equiv\mathrm{O}^+ \leftrightarrow \mathrm{R}-\mathrm{C}^+=\mathrm{O}$).

**Limitations:** Does not work on deactivated rings (e.g. nitrobenzene, phenol derivatives with
electron-withdrawing groups). The $\mathrm{AlCl}_3$ catalyst is destroyed by water and must be used
under anhydrous conditions.

### Halogenation

**Reagents:** Halogen ($\mathrm{Cl}_2$ or $\mathrm{Br}_2$) with a Lewis acid catalyst
($\mathrm{AlCl}_3$ or $\mathrm{FeCl}_3$ / $\mathrm{FeBr}_3$).

**Electrophile:** The halonium ion ($\mathrm{Cl}^+$ or $\mathrm{Br}^+$), generated by:

$$
\mathrm{Cl}_2 + \mathrm{AlCl}_3 \to \mathrm{Cl}^+ + \mathrm{AlCl}_4^-
$$

**Overall reaction:**

$$
\mathrm{C}_6\mathrm{H}_6 + \mathrm{Cl}_2 \xrightarrow{\mathrm{AlCl}_3} \mathrm{C}_6\mathrm{H}_5\mathrm{Cl} + \mathrm{HCl}
$$

Note: Benzene does not react with bromine water or chlorine water (no Lewis acid catalyst). This is
a critical distinction from alkenes, which decolourise bromine water rapidly.

## Phenol

Phenol ($\mathrm{C}_6\mathrm{H}_5\mathrm{OH}$) is benzene with a hydroxyl group directly attached to
the ring. The $-\mathrm{OH}$ group donates electron density into the ring through resonance, making
the ring much more reactive toward electrophilic substitution than benzene itself.

### Increased Reactivity

The oxygen lone pair is delocalised into the ring, increasing electron density at the ortho and para
positions. This has two consequences:

1. **Faster reactions:** Phenol reacts with bromine water without a catalyst (whereas benzene
   requires $\mathrm{FeBr}_3$).
2. **Ortho/para directing:** Substitution occurs preferentially at the 2- (ortho) and 4- (para)
   positions relative to the $-\mathrm{OH}$ group.

### Bromination of Phenol

Phenol decolourises bromine water immediately at room temperature, producing 2,4,6-tribromophenol as
a white precipitate:

$$
\mathrm{C}_6\mathrm{H}_5\mathrm{OH} + 3\mathrm{Br}_2 \to \mathrm{C}_6\mathrm{H}_2\mathrm{Br}_3\mathrm{OH} + 3\mathrm{HBr}
$$

The tribromo derivative precipitates because it is much less soluble in water than phenol.

### Acidity of Phenol

Phenol is a weak acid ($\mathrm{p}K_a \approx 10$) compared with carboxylic acids
($\mathrm{p}K_a \approx 4\mathrm{--}5$) but is more acidic than alcohols
($\mathrm{p}K_a \approx 16$). The phenoxide ion ($\mathrm{C}_6\mathrm{H}_5\mathrm{O}^-$) is
stabilised by delocalisation of the negative charge over the aromatic ring:

$$
\mathrm{C}_6\mathrm{H}_5\mathrm{OH} \rightleftharpoons \mathrm{C}_6\mathrm{H}_5\mathrm{O}^- + \mathrm{H}^+
$$

Phenol reacts with sodium hydroxide (but not sodium carbonate or sodium hydrogencarbonate) to form
sodium phenoxide:

$$
\mathrm{C}_6\mathrm{H}_5\mathrm{OH} + \mathrm{NaOH} \to \mathrm{C}_6\mathrm{H}_5\mathrm{ONa} + \mathrm{H}_2\mathrm{O}
$$

## Common Pitfalls

1. **Drawing the Kekule structure.** The Kekule structure (alternating single/double bonds) is
   incorrect and should not be used. Draw a hexagon with a circle inside to represent the
   delocalised $\pi$ system.

2. **Confusing addition and substitution for benzene.** Benzene undergoes electrophilic substitution
   (preserving the aromatic ring), not addition (which would destroy the delocalisation energy).
   Alkenes undergo electrophilic addition.

3. **Assuming benzene reacts with bromine water.** Benzene does not react with bromine water. It
   requires $\mathrm{Br}_2$ with a Lewis acid catalyst ($\mathrm{FeBr}_3$). Phenol does react with
   bromine water.

4. **Forgetting the catalyst in Friedel-Crafts reactions.** $\mathrm{AlCl}_3$ (or equivalent Lewis
   acid) is essential for generating the electrophile. Without it, the reaction does not proceed.

5. **Misunderstanding the role of $\mathrm{H}_2\mathrm{SO}_4$ in nitration.** Concentrated
   $\mathrm{H}_2\mathrm{SO}_4$ generates the nitronium ion and is not simply a "catalyst" in the
   usual sense -- it is consumed stoichiometrically in generating the electrophile (one mole per
   mole of $\mathrm{NO}_2^+$), though it is regenerated when the arenium ion is deprotonated.

## Practice Problems

<details>
<summary>Problem 1</summary>

Calculate the delocalisation energy of benzene using the following hydrogenation data:

- $\Delta H$ for
  $\mathrm{C}_6\mathrm{H}_6(g) + 3\mathrm{H}_2(g) \to \mathrm{C}_6\mathrm{H}_{12}(g)$:
  $-208\,\mathrm{kJ/mol}$
- $\Delta H$ for $\mathrm{C}_6\mathrm{H}_{12}(g)$: cyclohexane
- Mean C=C bond enthalpy: $612\,\mathrm{kJ/mol}$ (note: this is for a double bond, consisting of one
  $\sigma$ and one $\pi$ component)
- Mean C--C bond enthalpy: $348\,\mathrm{kJ/mol}$
- Mean C--H bond enthalpy: $413\,\mathrm{kJ/mol}$
- H--H bond enthalpy: $436\,\mathrm{kJ/mol}$

**Solution:**

Benzene has 6 C--C bonds (effectively bond order 1.5), 6 C--H bonds, and we break 3 H--H bonds. We
form cyclohexane with 6 C--C bonds (single) and 12 C--H bonds.

Expected $\Delta H$ if benzene had 3 isolated C=C bonds:

Bonds broken: 3 C=C ($3 \times 612 = 1836$), 3 C--C ($3 \times 348 = 1044$), 6 C--H
($6 \times 413 = 2478$), 3 H--H ($3 \times 436 = 1308$). Total broken = $6666\,\mathrm{kJ/mol}$.

Bonds formed: 6 C--C ($6 \times 348 = 2088$), 12 C--H ($12 \times 413 = 4956$). Total formed =
$7044\,\mathrm{kJ/mol}$.

Expected $\Delta H = 6666 - 7044 = -378\,\mathrm{kJ/mol}$.

Delocalisation energy = expected $-$ actual = $-378 - (-208) = -170\,\mathrm{kJ/mol}$.

The benzene ring is stabilised by approximately $170\,\mathrm{kJ/mol}$ relative to the Kekule
structure with three isolated double bonds.

</details>

<details>
<summary>Problem 2</summary>

Explain why Friedel-Crafts acylation of nitrobenzene fails, while Friedel-Crafts acylation of phenol
proceeds readily.

**Solution:**

The $-\mathrm{NO}_2$ group is strongly electron-withdrawing through both the inductive effect (the
nitrogen is electron-deficient) and resonance (the $\pi$ electrons of the ring are delocalised onto
the oxygen atoms of the nitro group). This deactivates the ring toward electrophilic attack by
reducing the electron density in the $\pi$ system. Additionally, the $-\mathrm{NO}_2$ group makes
the ring less nucleophilic, so the electrophilic attack step (already the rate-determining step)
becomes prohibitively slow.

The $-\mathrm{OH}$ group on phenol is electron-donating through resonance (the oxygen lone pair
delocalises into the ring, increasing electron density at ortho and para positions). This activates
the ring toward electrophilic substitution, making the reaction much faster than for unsubstituted
benzene.

</details>
