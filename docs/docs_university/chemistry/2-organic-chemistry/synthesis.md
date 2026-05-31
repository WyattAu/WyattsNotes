---
title: Synthesis
description:
  "University-level notes on Organic Synthesis: 1. Retrosynthetic Analysis; 1.1 Disconnections
  and Synthons; 1.2 Functional Group Interconversions."
date: 2026-05-31T00:00:00.000Z
tags:
  - Chemistry
  - University
categories:
  - Chemistry
slug: university-chemistry/synthesis
---

## 1. Retrosynthetic Analysis

### 1.1 The Concept

**Definition 1 (Retrosynthetic Analysis):** A problem-solving technique in which the target molecule
(TM) is mentally disassembled into simpler precursors by applying known reactions in reverse. Each
step is denoted by the retrosynthetic arrow $\Rightarrow$.

$$\text{TM} \Rightarrow \text{Precursor}_1 \Rightarrow \text{Precursor}_2 \Rightarrow \ldots \Rightarrow \text{Starting Materials}$$

Developed by E.J. Corey (Nobel Prize, 1990).

### 1.2 Disconnections

**Definition 2 (Disconnection):** The imagined breaking of a bond in the target molecule, corresponding
to the reverse of a known synthetic reaction.

**Definition 3 (Synthon):** The idealized fragment resulting from a disconnection, representing the
reacting species. A synthon may or may not correspond to a real reagent.

**Definition 4 (Synthetic Equivalent):** The actual reagent used to represent a synthon.

**Example 1:** Disconnection of a secondary alcohol:

$$\text{R}–\text{CH(OH)}–\text{R}' \xRightarrow{\text{disconnect C–OH}} \text{RCHO} + \text{R}'\text{MgBr}$$

Synthons: $^+\text{R}'$ (electrophile, equivalent = R'Br) and $^-\text{OH}$ (nucleophile, equivalent
= formaldehyde or a carbonyl).

$\blacksquare$

### 1.3 Strategic Bonds

**Theorem 1 (Prioritization of Disconnections):**
1. Disconnections corresponding to the most reliable, high-yielding reactions.
2. Disconnections that give the simplest (most available) precursors.
3. Disconnections that remove functional groups or introduce symmetry.
4. Disconnections that form rings (if cyclic TM).

**Guiding principles:**
- Look for C–C bonds adjacent to functional groups (functionalized disconnections).
- Break rings at the bond that gives the most linear precursor.
- Maximize convergence (multiple fragments assembled in the final step).

### 1.4 Synthons and Their Equivalents

| Synthon  | Type         | Synthetic Equivalent           |
| -------- | ------------ | ------------------------------ |
| R$^-$    | Nucleophile  | Grignard (RMgBr), organolithium |
| R$^+$    | Electrophile | Alkyl halide (R–X)             |
| $^-$CH(OH)R | Nucleophile | Aldehyde (RCHO)               |
| $^+$CHO  | Electrophile | Formyl cation equiv. (DMF, etc.) |
| Ac$^-$   | Nucleophile  | Malonate ester, acetylide       |
| Ac$^+$   | Electrophile | Acid chloride, acyl anhydride   |

## 2. Functional Group Interconversions

### 2.1 Common Interconversions

**Theorem 2 (FGI Map):** The major functional group interconversions:

$$\text{Alkane} \xrightarrow{\text{X}_2/h\nu} \text{Alkyl halide} \xrightarrow{\text{NaOH}} \text{Alcohol} \xrightarrow{[\text{O}]} \text{Aldehyde} \xrightarrow{[\text{O}]} \text{Carboxylic acid}$$

$$\text{Alcohol} \xrightarrow{\text{PBr}_3} \text{Alkyl bromide}$$

$$\text{Alcohol} \xrightarrow{\text{SOCl}_2} \text{Alkyl chloride}$$

$$\text{Alcohol} \xrightarrow{\text{TsCl}} \text{Tosylate} \xrightarrow{\text{Nu}^-} \text{Nu–R}$$

$$\text{Aldehyde} \xrightarrow{\text{NaBH}_4} \text{Primary alcohol}$$

$$\text{Ketone} \xrightarrow{\text{NaBH}_4 \text{ or LiAlH}_4} \text{Secondary alcohol}$$

$$\text{Carboxylic acid} \xrightarrow{\text{LiAlH}_4} \text{Primary alcohol}$$

$$\text{Ester} \xrightarrow{\text{LiAlH}_4} \text{Primary alcohol}$$

$$\text{Nitrile} \xrightarrow{\text{LiAlH}_4} \text{Primary amine}$$

### 2.2 Oxidation and Reduction

| Transformation           | Reagent                    | Notes                    |
| ------------------------ | -------------------------- | ------------------------ |
| Primary alcohol → aldehyde | PCC, PDC, Swern            | Stops at aldehyde        |
| Primary alcohol → acid    | Jones (CrO$_3$/H$_2$SO$_4$) | Full oxidation           |
| Secondary alcohol → ketone | PCC, PDC, Jones           |                         |
| Alkene → epoxide         | mCPBA                      | Stereospecific           |
| Alkene → diol             | OsO$_4$/NMO or KMnO$_4$(cold) | cis-Diol               |
| Alkyne → trans-alkene     | Na/NH$_3$(l)               | Birch-type reduction     |
| Alkyne → cis-alkene       | H$_2$/Lindlar's catalyst   | Z-alkene                 |

## 3. Protecting Groups

### 3.1 Principles

**Definition 5 (Protecting Group):** A temporary modification of a functional group to prevent
its participation in a reaction, removable under conditions that do not affect other groups.

**Theorem 3 (Protecting Group Criteria):**
1. Easy to introduce under mild conditions.
2. Stable to the reaction conditions it must survive.
3. Easy to remove selectively without affecting other groups.

### 3.2 Common Protecting Groups

**Alcohols:**

| Protecting Group    | Introduction        | Removal            |
| ------------------- | ------------------- | ------------------ |
| TBDMS (TMS) ether   | TBDMSCl, imidazole  | TBAF or acid        |
| THP ether           | DHP, acid           | Acid                |
| Benzyl (Bn) ether   | BnBr, NaH           | H$_2$/Pd-C          |
| MOM ether           | MOMCl, base         | Acid                |
| Acetate             | Ac$_2$O, pyridine   | Base (K$_2$CO$_3$)  |

**Carbonyls (acetals):**

| Protecting Group    | Introduction        | Removal            |
| ------------------- | ------------------- | ------------------ |
| Acetal (dimethyl)   | MeOH, TsOH          | Acid (aq)          |
| Acetal (dioxolane)  | Ethylene glycol, TsOH | Acid (aq)        |
| Dithiane            | 1,3-propanedithiol, BF$_3$ | HgO, HgCl$_2$   |
| Ethylene ketal      | Ethylene glycol, TsOH | Acid              |

**Amines:**

| Protecting Group    | Introduction        | Removal            |
| ------------------- | ------------------- | ------------------ |
| Boc (t-butyloxycarbonyl) | (Boc)$_2$O, base | TFA or HCl        |
| Cbz                 | Cbz-Cl, base        | H$_2$/Pd-C          |
| Fmoc                | Fmoc-Cl, base       | Piperidine         |

**Carboxylic Acids:**

| Protecting Group    | Introduction        | Removal            |
| ------------------- | ------------------- | ------------------ |
| Methyl ester        | CH$_2$N$_2$ or MeOH/H$^+$ | LiOH or NaOH   |
| t-Butyl ester       | (t-Bu)$_2$O or t-BuOH/DCC | TFA             |
| Benzyl ester        | BnBr, K$_2$CO$_3$   | H$_2$/Pd-C          |

## 4. Carbon-Carbon Bond Forming Reactions

### 4.1 Grignard Reaction

**Theorem 4 (Grignard Reaction):** Organomagnesium halides (Grignard reagents) act as nucleophiles
toward carbonyl compounds:

$$\text{R–MgBr} + \text{R}'_2\text{C}=O \to \text{R}'_2\text{C(OMgBr)R} \xrightarrow{\text{H}_3\text{O}^+} \text{R}'_2\text{CHOH–R}$$

| Carbonyl Substrate | Product            |
| ------------------ | ------------------ |
| Formaldehyde       | Primary alcohol    |
| Aldehyde           | Secondary alcohol  |
| Ketone             | Tertiary alcohol   |
| Ester              | Tertiary alcohol   |
| CO$_2$             | Carboxylic acid    |

**Limitations:** Grignard reagents are strong bases — incompatible with acidic protons (OH, NH,
$\equiv$CH). They also react with epoxides (ring opening).

### 4.2 Wittig Reaction

**Theorem 5 (Wittig Reaction):** Phosphorus ylides convert carbonyls to alkenes:

$$\text{Ph}_3\text{P}=\text{CHR} + \text{R}'_2\text{C}=O \to \text{R}'_2\text{C}=\text{CHR} + \text{Ph}_3\text{PO}$$

- Non-stabilized ylides (R = alkyl): Z-alkene favored (kinetic).
- Stabilized ylides (R = COOR, CN): E-alkene favored (thermodynamic).

**Horner-Wadsworth-Emmons (HWE):** Modified Wittig with phosphonate esters; gives predominantly E-alkenes.

### 4.3 Aldol Reaction

**Theorem 6 (Aldol Reaction):** Enolates of carbonyl compounds add to other carbonyl compounds:

$$\text{CH}_3\text{CHO} \xrightarrow{\text{OH}^-} \text{CH}_2=\text{CH(O}^-)\text{CHO} \xrightarrow{\text{CH}_3\text{CHO}} \text{CH}_3\text{CH(OH)}\text{CH}_2\text{CHO}$$

**Features:**
- Forms a $\beta$-hydroxy carbonyl compound.
- Can dehydrate to give an $\alpha,\beta$-unsaturated carbonyl.
- Crossed aldol: one component must not have $\alpha$-H (or use LDA for regioselective enolate
  formation).

**Directed aldol with LDA:**

$$\text{RCHO} \xrightarrow{\text{LDA}, -78°C} \text{RCH}=\text{CHO}^- \xrightarrow{\text{R'}_2\text{C}=O} \text{RCH(OH)CHR'}_2\text{C}=O$$

### 4.4 Claisen and Dieckmann Condensation

**Theorem 7 (Claisen Condensation):** Two esters condense to form a $\beta$-keto ester:

$$\text{CH}_3\text{COOEt} \xrightarrow{\text{OEt}^-} \text{CH}_3\text{C(OEt)}=\text{CHCOOEt} \xrightarrow{\text{H}^+} \text{CH}_3\text{COCH}_2\text{COOEt}$$

**Dieckmann condensation:** Intramolecular Claisen; cyclizes diesters to 5- and 6-membered
$\beta$-keto esters.

**Acetoacetic ester synthesis:** Alkylation of ethyl acetoacetate, followed by decarboxylation:

$$\text{CH}_3\text{COCH}_2\text{COOEt} \xrightarrow{\text{1. OEt}^- \text{ 2. R–X}} \text{CH}_3\text{COCH(R)COOEt} \xrightarrow{\text{H}_3\text{O}^+, \Delta} \text{CH}_3\text{COCH}_2\text{R}$$

### 4.5 Diels-Alder Reaction

**Theorem 8 (Diels-Alder in Synthesis):** A powerful [4+2] cycloaddition forming six-membered rings:

$$\text{diene} + \text{dienophile} \to \text{cyclohexene derivative}$$

**Synthetic advantages:**
- Forms 2 C–C bonds and one ring in one step.
- Highly stereospecific (cis/trans preserved).
- Regio- and stereoselective (endo rule).
- Can construct complex polycyclic systems (e.g., endo adducts used in natural product synthesis).

### 4.6 Friedel-Crafts Reactions

**Theorem 9 (Friedel-Crafts Alkylation):**

$$\text{ArH} + \text{RCl} \xrightarrow{\text{AlCl}_3} \text{ArR} + \text{HCl}$$

**Limitation:** Can undergo polyalkylation and carbocation rearrangement.

**Theorem 10 (Friedel-Crafts Acylation):**

$$\text{ArH} + \text{RCOCl} \xrightarrow{\text{AlCl}_3} \text{ArCOR} + \text{HCl}$$

**Advantage over alkylation:** No rearrangement; deactivates the ring (prevents polyacylation).
The acyl group can be reduced to alkyl (Clemmensen or Wolff-Kishner):

$$\text{ArCOR} \xrightarrow{\text{Zn(Hg)/HCl or NH}_2\text{NH}_2/\text{KOH}} \text{ArCH}_2\text{R}$$

### 4.7 Additional C–C Bond Forming Reactions

**Heck reaction:** Palladium-catalyzed arylation of alkenes.

$$\text{Ar–X} + \text{CH}_2=\text{CHR} \xrightarrow{\text{Pd(0)}, \text{base}} \text{Ar–CH}=\text{CHR}$$

**Suzuki coupling:** Palladium-catalyzed cross-coupling of boronic acids with aryl/vinyl halides.

$$\text{Ar–X} + \text{Ar'–B(OH)}_2 \xrightarrow{\text{Pd(0)}, \text{base}} \text{Ar–Ar'}$$

**Sonogashira coupling:** Cross-coupling with terminal alkynes.

$$\text{Ar–X} + \text{HC}\equiv\text{CR} \xrightarrow{\text{Pd(0)}, \text{CuI}, \text{base}} \text{Ar–C}\equiv\text{CR}$$

**Mizoroki-Heck:** Aryl halide + alkene → aryl-substituted alkene.

## 5. Multistep Synthesis Design

### 5.1 Convergent vs Linear Synthesis

**Definition 6 (Convergent Synthesis):** Two or more fragments are prepared separately and then
joined in the final step. Higher overall yield.

$$\text{A} \to \text{B} \quad \text{C} \to \text{D}$$
$$\text{B} + \text{D} \to \text{TM}$$

**Definition 7 (Linear Synthesis):** Each step builds upon the previous one. Lower overall yield.

$$\text{SM} \to \text{I}_1 \to \text{I}_2 \to \ldots \to \text{TM}$$

For $n$ steps at 90% yield: linear gives $0.9^n$; convergent gives higher overall yield.

### 5.2 Strategic Principles

1. **Choose the key bond to form first** (the disconnection that most simplifies the structure).
2. **Use symmetry:** If the TM is symmetric, disconnect at the symmetry plane.
3. **Functional group interconversions** should be minimized and placed at the end.
4. **Protect only when necessary.**
5. **Consider atom economy** (minimize waste).

### 5.3 Example: Synthesis of 4-Methoxyacetophenone

**Retrosynthesis:**

$$\text{4-MeO-C}_6\text{H}_4\text{-COCH}_3 \Rightarrow \text{4-MeO-C}_6\text{H}_5 + \text{CH}_3\text{COCl} \quad \text{(Friedel-Crafts acylation)}$$

$$\text{4-MeO-C}_6\text{H}_5 \Rightarrow \text{C}_6\text{H}_5\text{-OH} \xRightarrow{\text{CH}_3\text{I}} \text{C}_6\text{H}_5\text{-OCH}_3$$

**Forward synthesis:**

1. Phenol → methylation with CH$_3$I/K$_2$CO$_3$ → anisole.
2. Anisole + CH$_3$COCl/AlCl$_3$ → 4-methoxyacetophenone.

$\blacksquare$

## 6. Asymmetric Synthesis

### 6.1 Enantioselective Reactions

**Definition 8 (Enantioselectivity):** The preferential formation of one enantiomer over the other.
Measured by enantiomeric excess (ee):

$$ee = \frac{|\text{major} - \text{minor}|}{\text{major} + \text{minor}} \times 100\%$$

### 6.2 Chiral Auxiliaries

**Definition 9 (Chiral Auxiliary):** A temporarily attached chiral group that directs
stereoselectivity in a reaction, then is removed.

**Example 2:** Evans oxazolidinone auxiliaries for asymmetric aldol reactions:

The auxiliary controls the facial selectivity of the enolate addition to the aldehyde, giving high
diastereoselectivity (>99:1 in favorable cases).

$\blacksquare$

### 6.3 Chiral Catalysts

**Definition 10 (Asymmetric Catalysis):** A chiral catalyst (often a transition metal complex with
chiral ligands) induces enantioselectivity in a reaction.

**Key asymmetric catalysts:**

| Catalyst / Ligand         | Reaction Type                |
| ------------------------ | ---------------------------- |
| BINAP-Ru (Noyori)        | Asymmetric hydrogenation    |
| Sharpless epoxidation     | Allylic alcohol epoxidation  |
| Jacobsen epoxidation     | Cis-alkene epoxidation      |
| Proline (organocatalyst)  | Aldol, Mannich, Michael      |
| CBS reduction (oxazaborolidine) | Ketone reduction       |
| DIPAMP (Rh complex)       | Asymmetric hydrogenation    |

### 6.4 Sharpless Epoxidation

**Theorem 11 (Sharpless Epoxidation):** Ti(O$i$-Pr)$_4$ + $t$-BuOOH + chiral tartrate ester epoxidizes
allylic alcohols with high enantioselectivity.

Prediction rule: "The allylic alcohol is drawn with the OH at bottom right. If L-(+)-DET is used,
the epoxide adds from the top; if D-(-)-DET, from the bottom."

### 6.5 Biocatalysis

Enzymes provide extremely high enantioselectivity under mild conditions:
- **Lipases:** Ester hydrolysis/synthesis with kinetic resolution.
- **Ketoreductases:** Asymmetric reduction of ketones.
- **Transaminases:** Asymmetric amination.

## Common Pitfalls

1. **Wrong disconnection choice.** Disconnecting a C–C bond with no corresponding reliable reaction
   leads to dead-end retrosynthesis. **Fix:** Map known reliable reactions and choose disconnections
   that correspond to them.
2. **Overprotecting functional groups.** Excessive protecting groups add steps and reduce yield.
   **Fix:** Protect only the groups that would interfere with the planned reaction; use orthogonal
   protecting groups.
3. **Wrong oxidation state in FGIs.** NaBH$_4$ reduces aldehydes and ketones but not esters or acids;
   LiAlH$_4$ reduces all. **Fix:** Choose the correct reagent for the desired transformation.
4. **Ignoring stereochemistry in Diels-Alder retrosynthesis.** The Diels-Alder is stereospecific:
   the stereochemistry of the product reflects the dienophile geometry. **Fix:** Draw the transition
   state and consider endo/exo selectivity.
5. **Wrong base for enolate formation.** LDA forms the kinetic enolate; weaker bases (alkoxide)
   form the thermodynamic enolate. **Fix:** Choose the base based on whether you need kinetic or
   thermodynamic control.
6. **Forgetting the order of operations in Friedel-Crafts.** FC acylation is irreversible; FC alkylation
   can rearrange. After FC acylation, the ring is deactivated. **Fix:** If you need further
   electrophilic substitution, use FC alkylation first or reduce the acyl group to alkyl.
7. **Misapplying asymmetric methods.** Chiral auxiliaries give diastereoselectivity, not
   enantioselectivity directly; the auxiliary must be removed. **Fix:** Choose between auxiliary,
   catalyst, or resolution based on the specific system.

## Summary

- **Retrosynthetic analysis:** TM $\Rightarrow$ precursors via disconnections; identify synthons and
  equivalents.
- **FGI map:** Systematic interconversion of functional groups; choose correct reagents for each
  transformation.
- **Protecting groups:** Temporary masking of reactive functional groups; choose based on stability
  and orthogonal removal.
- **C–C bond formation:** Grignard, Wittig, aldol, Claisen, Diels-Alder, Friedel-Crafts, cross-coupling
  (Heck, Suzuki, Sonogashira).
- **Multistep design:** Convergent > linear; minimize steps; maximize atom economy.
- **Asymmetric synthesis:** Chiral auxiliaries, chiral catalysts (Sharpless, Noyori, Jacobsen),
  biocatalysis; enantiomeric excess as the metric.

## Cross-References

| Topic                    | Site        | Link                                                                  |
| ------------------------ | ----------- | --------------------------------------------------------------------- |
| Structure and Bonding    | WyattsNotes | [View](/docs/university/chemistry/structure-and-bonding)              |
| Reaction Mechanisms      | WyattsNotes | [View](/docs/university/chemistry/reaction-mechanisms)                |
| Spectroscopy             | WyattsNotes | [View](/docs/university/chemistry/spectroscopy)                       |
| Organic Synthesis — MIT 5.34 | MIT OCW | [View](https://ocw.mit.edu/courses/5-34-advanced-organic-chemistry-spring-2003/) |
