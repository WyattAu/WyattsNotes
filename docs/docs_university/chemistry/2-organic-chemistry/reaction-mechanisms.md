---
title: Reaction Mechanisms
description:
  'University Chemistry Reaction Mechanisms notes covering key definitions, core concepts, worked
  examples, and practice questions for practical revision.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Chemistry
  - University
categories:
  - Chemistry
slug: university-chemistry/reaction-mechanisms
---

## 1. Nucleophilic Substitution

### 1.1 SN2 Mechanism

**Definition 1 (S$\_\text{N}$2):** Bimolecular nucleophilic substitution — a single concerted step
with backside attack.

$$\text{Nu}^- + \text{R–LG} \to [\text{Nu}\cdots\text{R}\cdots\text{LG}]^{\ddagger} \to \text{Nu–R} + \text{LG}^-$$

**Theorem 1 (SN2 Rate Law):**

$$v = k[\text{Nu}^-][\text{R–LG}]$$

**Features:**

- Second-order kinetics (depends on both nucleophile and substrate).
- **Walden inversion** (complete inversion of stereochemistry).
- Rate: $\text{CH}_3 > \text{1°} > \text{2°} \gg \text{3°}$ (3° essentially inert to
  S$\_\text{N}$2).
- Transition state: trigonal bipyramidal; the nucleophile and leaving group are at 180°.

### 1.2 SN1 Mechanism

**Definition 2 (S$\_\text{N}$1):** Unimolecular nucleophilic substitution — two steps via a
carbocation intermediate.

$$\text{R–LG} \xrightarrow{k_1} \text{R}^+ + \text{LG}^- \quad \text{(rate-determining)}$$
$$\text{R}^+ + \text{Nu}^- \xrightarrow{k_2} \text{R–Nu}$$

**Theorem 2 (SN1 Rate Law):**

$$v = k[\text{R–LG}]$$

**Features:**

- First-order kinetics (rate independent of nucleophile concentration).
- **Racemization** (with possible slight inversion due to ion pairing).
- Rate: $\text{3°} > \text{2°} \gg \text{1°} > \text{CH}_3$.
- Favored by polar protic solvents and good leaving groups.

### 1.3 Carbocation Stability

**Theorem 3 (Carbocation Stability Order):**

$$\text{3°} > \text{2°} > \text{1°} > \text{CH}_3^+$$

Stabilized by:

- **Hyperconjugation:** More C–H bonds adjacent $\implies$ more stabilization.
- **Resonance:** Allylic ($\text{CH}_2=\text{CH}-\text{CH}_2^+$) and benzylic cations are especially
  stable.
- **Inductive effects:** Alkyl groups donate electron density.

### 1.4 Nucleophilicity vs Basicity

**Definition 3 (Nucleophilicity):** The ability of a species to donate an electron pair to carbon
(to form a new bond). Measured by S$\_\text{N}$2 rate constants.

**Definition 4 (Basicity):** The thermodynamic tendency to accept a proton. Measured by pK$_a$ of
the conjugate acid.

**Theorem 4:** For the same atom, nucleophilicity roughly parallels basicity. Exceptions:

- $\text{I}^-$ is a better nucleophile than $\text{F}^-$ (polarizability outweighs basicity in
  protic solvents).
- $\text{HS}^-$ is a better nucleophile than $\text{HO}^-$ (larger, more polarizable).
- Sterically hindered bases (e.g., $t$-BuO$^-$) are strong bases but poor nucleophiles.

### 1.5 Leaving Groups

**Theorem 5 (Leaving Group Ability):** The weaker the base, the better the leaving group:

$$\text{I}^- > \text{Br}^- > \text{Cl}^- > \text{F}^- > \text{OH}^- \gg \text{NH}_2^-$$

Weak bases make good leaving groups because they can stabilize the negative charge after departure.
$\text{H}_2\text{O}$ is a better leaving group than $\text{HO}^-$; protonating $\text{HO}^-$ makes
it $\text{H}_2\text{O}$.

### 1.6 Solvent Effects

- **Polar protic solvents** (e.g., H$_2$O, ROH): Stabilize ions, favor
  S$_\text{N}$1 by stabilizing
  the carbocation. Solvate small anions strongly (reduce nucleophilicity of $\text{F}^-$).
- **Polar aprotic solvents** (e.g., DMSO, DMF, acetone): Do not hydrogen-bond to anions; enhance
  nucleophilicity of small anions. Favor S$\_\text{N}$2.

## 2. Elimination Reactions

### 2.1 E2 Mechanism

**Definition 5 (E2):** Bimolecular elimination — concerted removal of HX.

$$\text{Base} + \text{H–C–C–LG} \to \text{alkene} + \text{Base-H}^+ + \text{LG}^-$$

**Features:**

- Anti-periplanar geometry required (H and LG at 180° dihedral).
- Rate: $v = k[\text{base}][\text{substrate}]$.
- Strong bases favor E2; bulky bases (e.g., $t$-BuOK) favor E2 over S$\_\text{N}$2.
- **Zaitsev's rule:** The more substituted alkene is the major product.

### 2.2 E1 Mechanism

**Definition 6 (E1):** Unimolecular elimination — carbocation intermediate, then deprotonation.

$$\text{R–LG} \to \text{R}^+ + \text{LG}^- \quad \text{(rate-determining)}$$
$$\text{R}^+ \to \text{alkene} + \text{H}^+$$

**Features:**

- First-order kinetics: $v = k[\text{substrate}]$.
- Competes with S$\_\text{N}$1 (same carbocation intermediate).
- Often gives a mixture of substitution and elimination products.

### 2.3 E1cB Mechanism

**Definition 7 (E1cB):** Elimination, unimolecular, conjugate base — deprotonation first, then
leaving group departs.

$$\text{Base} + \text{H–C–C–LG} \to \text{C}^--\text{C–LG} \to \text{alkene} + \text{LG}^-$$

Favored when the leaving group is poor but the $\alpha$-H is acidic (e.g., carbonyl compounds).

### 2.4 Competition: S$_\text{N}$2 vs E2 vs S$\_\text{N}$1 vs E1

| Factor           | S$\_\text{N}$2     | E2                  | S$\_\text{N}$1   | E1            |
| ---------------- | ------------------ | ------------------- | ---------------- | ------------- |
| Substrate        | 1°, CH$_3$         | 3°, 2° (bulky base) | 3°, 2°           | 3°, 2°        |
| Base/Nucleophile | Strong nucleophile | Strong, bulky base  | Weak nucleophile | Weak base     |
| Solvent          | Polar aprotic      | Both                | Polar protic     | Polar protic  |
| Stereochemistry  | Inversion          | Anti-periplanar     | Racemization     | Often Zaitsev |

## 3. Addition Reactions

### 3.1 Electrophilic Addition to Alkenes

**Theorem 6 (Markovnikov's Rule):** In electrophilic addition to an unsymmetrical alkene, the
electrophile adds to the carbon with more hydrogen atoms (the less substituted carbon).

$$\text{HBr} + \text{CH}_3\text{CH}=\text{CH}_2 \to \text{CH}_3\text{CHBrCH}_3 \quad (\text{major})$$

Mechanism: $\pi$ bond attacks electrophile $\to$ carbocation $\to$ nucleophile attack.

**Regiochemistry:** More substituted carbocation is favored (Markovnikov).

### 3.2 Anti-Markovnikov Addition

With HBr and peroxides (radical mechanism):

$$\text{HBr} + \text{ROOR} \to \text{radical chain} \to \text{anti-Markovnikov product}$$

$$\text{Br}^\bullet + \text{CH}_3\text{CH}=\text{CH}_2 \to \text{CH}_3\text{CHCH}_2\text{Br} \quad (\text{anti-Markovnikov})$$

### 3.3 Addition to Carbonyl Compounds

**Nucleophilic addition to C=O:**

$$\text{Nu}^- + \text{R}_2\text{C}=O \to \text{R}_2\text{C(O}^-\text{)Nu} \xrightarrow{\text{H}^+} \text{R}_2\text{CH(OH)Nu}$$

- The carbonyl carbon is electrophilic due to the polarized $\text{C}^\delta+=\text{O}^\delta-$
  bond.
- Nucleophilicity at carbonyl: the addition is favored by good nucleophiles and less hindered
  carbonyls.

### 3.4 1,2- vs 1,4-Addition (Conjugate Addition)

For $\alpha,\beta$-unsaturated carbonyls:

$$\text{Nu}^- + \text{CH}_2=\text{CH}-\text{C}=O \to \begin{cases} \text{1,2-addition (direct)} \\ \text{1,4-addition (conjugate/Michael)} \end{cases}$$

**Theorem 7:** Hard nucleophiles (e.g., $^-$OH, $^-$CN) favor 1,2-addition. Soft nucleophiles (e.g.,
enolates, thiols) favor 1,4-addition (Michael addition).

## 4. Radical Reactions

### 4.1 Initiation, Propagation, Termination

1. **Initiation:** Homolytic cleavage (heat, light, or initiator):
   $$\text{R–R} \xrightarrow{\Delta \text{ or } h\nu} 2\,\text{R}^\bullet$$

2. **Propagation:** Radical reacts with stable molecule to generate a new radical:
   $$\text{R}^\bullet + \text{H–C} \to \text{R–H} + \text{C}^\bullet$$

3. **Termination:** Two radicals combine: $$\text{R}^\bullet + \text{R}^\bullet \to \text{R–R}$$

### 4.2 Radical Stability

$$\text{3°} > \text{2°} > \text{1°} > \text{CH}_3^\bullet > \text{H}^\bullet$$

Allylic and benzylic radicals are especially stable due to resonance.

### 4.3 Halogenation of Alkanes

$$\text{RH} + \text{X}_2 \xrightarrow{h\nu} \text{RX} + \text{HX}$$

**Selectivity:**

- Chlorination: $3°:2°:1° \approx 5:4:1$ (moderately selective).
- Bromination: $3°:2°:1° \approx 1600:82:1$ (highly selective, follows radical stability).

## 5. Pericyclic Reactions

### 5.1 Classification

**Definition 8 (Pericyclic Reactions):** Concerted reactions that proceed through a cyclic
transition state without intermediates. Three main types:

- **Electrocyclic reactions:** Ring opening/closing involving $\pi$ bonds and $\sigma$ bonds.
- **Cycloadditions:** Two $\pi$ systems combine to form rings (e.g., Diels-Alder).
- **Sigmatropic rearrangements:** $\sigma$ bond migrates across a $\pi$ system.

### 5.2 Woodward-Hoffmann Rules

**Theorem 8 (Woodward-Hoffmann Rules):** Pericyclic reactions proceed via the symmetry-allowed
pathway. The rule depends on:

- Number of $\pi$ electrons.
- Thermal vs photochemical conditions.

**Electrocyclic reactions:**

| $\pi$ Electrons | Thermal     | Photochemical |
| --------------- | ----------- | ------------- |
| $4n$            | Conrotatory | Disrotatory   |
| $4n + 2$        | Disrotatory | Conrotatory   |

### 5.3 Diels-Alder Reaction

**Theorem 9 (Diels-Alder Reaction):** A $[4 + 2]$ cycloaddition between a diene and a dienophile:

$$\text{diene} + \text{dienophile} \to \text{cyclohexene}$$

**Requirements:**

- Diene must be in the $s$-cis conformation.
- The reaction is thermally allowed (suprafacial on both components).
- **Endo rule:** The transition state leading to the endo product is lower in energy due to
  secondary orbital interactions.

**Stereospecificity:**

- **cis-Dienophile → cis-substituents** in the product.
- **trans-Dienophile → trans-substituents** in the product.
- The relative stereochemistry of the diene is preserved.

**Example 1:** Reaction of 1,3-butadiene with maleic anhydride gives the endo adduct
stereospecifically.

$\blacksquare$

### 5.4 Sigmatropic Rearrangements

**Definition 9:** A sigmatropic rearrangement $[i,j]$ involves the migration of a $\sigma$ bond
across a conjugated system of $i$ and $j$ atoms.

**Theorem 10 (Cope Rearrangement):** A $[3,3]$ sigmatropic rearrangement of 1,5-dienes:

$$\text{CH}_2=\text{CH}-\text{CH}_2-\text{CH}_2-\text{CH}=\text{CH}_2 \rightleftharpoons \text{CH}_2=\text{CH}-\text{CH}_2-\text{CH}_2-\text{CH}=\text{CH}_2$$

Thermally allowed via a chair-like transition state.

**Claisen rearrangement:** $[3,3]$ sigmatropic rearrangement of allyl vinyl ethers:
$$\text{CH}_2=\text{CH}-\text{CH}_2-\text{O}-\text{CH}=\text{CH}_2 \to \text{CH}_2=\text{CH}-\text{CH}_2-\text{CH}_2-\text{CHO}$$

### 5.5 Electrocyclic Reactions

- **Cyclobutene → 1,3-butadiene:** Thermally conrotatory ($4n$ $\pi$ electrons).
- **1,3,5-Hexatriene → cyclohexadiene:** Thermally disrotatory ($4n + 2$ $\pi$ electrons).

## 6. Aromatic Electrophilic Substitution

### 6.1 General Mechanism

1. **Electrophilic attack:** $\text{E}^+$ adds to the aromatic ring, forming a resonance-stabilized
   arenium ion (sigma complex).
2. **Deprotonation:** Loss of H$^+$ restores aromaticity.

$$\text{ArH} + \text{E}^+ \to [\text{ArHE}]^+ \xrightarrow{-\text{H}^+} \text{ArE}$$

### 6.2 Activating and Deactivating Groups

| Group Type           | Effect | Directing  | Examples                     |
| -------------------- | ------ | ---------- | ---------------------------- |
| Strong activator     | +      | ortho/para | $-$OH, $-$NH$_2$, $-$OCH$_3$ |
| Moderate activator   | +      | ortho/para | $-$CH$_3$, alkyl groups      |
| Weak activator       | +      | ortho/para | $-$F, $-$Cl, $-$Br, $-$I     |
| Moderate deactivator | -      | meta       | $-$NO$_2$, $-$CN, $-$SO$_3$H |
| Strong deactivator   | -      | meta       | $-$NR$_3^+$, $-$CF$_3$       |

### 6.3 Examples of Electrophilic Aromatic Substitution

- **Nitration:** $\text{HNO}_3/\text{H}_2\text{SO}_4 \to \text{NO}_2^+$
- **Sulfonation:** $\text{SO}_3/\text{H}_2\text{SO}_4$
- **Halogenation:** $\text{Cl}_2/\text{FeCl}_3$ or $\text{Br}_2/\text{FeBr}_3$
- **Friedel-Crafts alkylation:** $\text{RCl}/\text{AlCl}_3$
- **Friedel-Crafts acylation:** $\text{RCOCl}/\text{AlCl}_3$

## 7. Nucleophilic Aromatic Substitution

### 7.1 S$_\text{N}$Ar (Addition-Elimination)

**Definition 10 (S$_\text{N}$Ar):** Two-step mechanism requiring electron-withdrawing groups ortho
and/or para to the leaving group:

1. Nucleophilic addition to the aromatic ring (forming a Meisenheimer complex).
2. Elimination of the leaving group, restoring aromaticity.

$$\text{Ar-X} + \text{Nu}^- \to [\text{Ar(X)(Nu)}]^- \to \text{Ar-Nu} + \text{X}^-$$

Favored by strong EWGs and good leaving groups.

### 7.2 Benzyne Mechanism

Under extreme conditions (strong base, very high $T$), elimination via benzyne intermediate:

$$\text{Ar-X} + \text{NH}_2^- \to \text{benzyne} \to \text{Ar-NH}_2$$

No regioselectivity; products are in most cases mixtures.

## 8. Reaction Intermediates Summary

| Intermediate | Hybridization | Geometry        | Stability Factors           |
| ------------ | ------------- | --------------- | --------------------------- |
| Carbocation  | sp$^2$        | Trigonal planar | Alkyl groups, resonance     |
| Carbanion    | sp$^3$        | Pyramidal       | Inductive, resonance        |
| Radical      | sp$^2$        | Trigonal planar | Resonance, hyperconjugation |
| Carbene      | sp$^2$        | Trigonal planar | Singlet vs triplet          |

## Common Pitfalls

1. **Confusing S$_\text{N}$1 and S$\_\text{N}$2 stereochemistry.**
   S$_\text{N}$2 gives inversion; S$_\text{N}$1 gives
   racemization (not retention). **Fix:** S$_\text{N}$1
   proceeds through a planar carbocation attacked from both sides.
2. **Wrong regiochemistry in E2 reactions.** Bulky bases favor the less substituted alkene (Hofmann
   product) via abstraction of the less hindered H. **Fix:** $t$-BuOK favors Hofmann; smaller bases
   favor Zaitsev.
3. **Ignoring the anti-periplanar requirement in E2.** The H and leaving group must be at 180°.
   **Fix:** Cyclohexyl halides can only eliminate if both H and LG are diaxial.
4. **Wrong pericyclic stereochemistry.** Electrocyclic reactions depend on the number of $\pi$
   electrons and thermal/photochemical conditions. **Fix:** Apply Woodward-Hoffmann rules
   systematically.
5. **Assuming all aromatic substitutions are electrophilic.** Electron-poor rings undergo
   nucleophilic aromatic substitution (S$_\text{N}$Ar). **Fix:** Check if the ring has strong EWGs;
   if so, S$_\text{N}$Ar is likely.
6. **Misassigning directing effects.** Halogens are deactivating but ortho/para-directing (resonance
   donation outweighs inductive withdrawal for directing). **Fix:** Memorize the
   directing/activating table; halogens are a special case.
7. **Overlooking ion pairing in S$\_\text{N}$1.** The "racemic" product from S$\_\text{N}$1 is often
   slightly inverted due to the leaving group partially blocking one face. **Fix:** Use the ion-pair
   model for accurate stereochemical predictions.

## Summary

- **S$\_\text{N}$2:** Concerted, backside attack, inversion, $v = k[\text{Nu}][\text{RX}]$,
  1°/CH$_3$ favored.
- **S$\_\text{N}$1:** Stepwise, carbocation intermediate, racemization, $v = k[\text{RX}]$, 3°
  favored.
- **E2:** Concerted elimination, anti-periplanar, $v = k[\text{base}][\text{RX}]$.
- **E1:** Stepwise via carbocation, competes with S$\_\text{N}$1.
- **Carbocation stability:** 3° > 2° > 1° > CH$_3^+$; enhanced by resonance and hyperconjugation.
- **Pericyclic reactions:** Diels-Alder, Cope, Claisen; governed by Woodward-Hoffmann rules.
- **Electrophilic aromatic substitution:** Activating/deactivating groups control rate and
  directing.

## Worked Examples

### Example 1: Predicting SN1 vs SN2 Outcome

**Problem:** Predict the mechanism and product when (1-bromo-1-methylpropyl)benzene reacts with NaCN
in ethanol. The substrate is a tertiary benzylic halide. **Solution:** The tertiary benzylic carbon
stabilises the carbocation through resonance with the benzene ring. SN1 is strongly favoured over
SN2 (steric hindrance from the benzene ring and three alkyl groups). The carbocation is stabilised,
leading to a racemic product (if the nucleophile attacks from both faces). Product:
(1-cyano-1-methylpropyl)benzene, formed as a racemic mixture.

### Example 2: Diels-Alder Regioselectivity

**Problem:** Predict the product of the Diels-Alder reaction between 1,3-butadiene and methyl vinyl
ketone (MVK). Include regiochemistry. **Solution:** MVK is an electron-deficient dienophile. The
diene (butadiene) is electron-rich. The endo transition state is favoured (Alder endo rule).
Regiochemistry: the carbonyl group ends up ortho to the newly formed double bond in the cyclohexene
product. Product: 4-acetylcyclohexene (endo). The reaction proceeds thermally [4+2] suprafacially.

## Cross-References

| Topic                        | Site        | Link                                                                    |
| ---------------------------- | ----------- | ----------------------------------------------------------------------- |
| Structure and Bonding        | WyattsNotes | [View](/docs/university/chemistry/structure-and-bonding)                |
| Synthesis                    | WyattsNotes | [View](/docs/university/chemistry/synthesis)                            |
| Spectroscopy                 | WyattsNotes | [View](/docs/university/chemistry/spectroscopy)                         |
| Organic Chemistry — MIT 5.12 | MIT OCW     | [View](https://ocw.mit.edu/courses/5-12-organic-chemistry-i-fall-2005/) |
