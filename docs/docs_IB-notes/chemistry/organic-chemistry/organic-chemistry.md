---
id: organic-chemistry
title: Organic Chemistry
description:
  IB Chemistry — hydrocarbons, functional groups, reaction mechanisms, and polymer chemistry.
slug: organic-chemistry
---

## Homologous Series and Naming

### IUPAC Nomenclature

Organic compounds are named systematically using IUPAC rules:

1. Identify the **longest carbon chain** (parent chain).
2. Number the chain to give substituents the **lowest possible numbers**.
3. Name and number **substituents** (alkyl groups, halogens, etc.).
4. Identify and name the **principal functional group** (gets the lowest number).

### Alkyl Groups

| Name   | Formula      |
| ------ | ------------ |
| Methyl | --CH$_3$     |
| Ethyl  | --C$_2$H$_5$ |
| Propyl | --C$_3$H$_7$ |
| Butyl  | --C$_4$H$_9$ |

### Carbon Chain Prefixes

| Carbons | Prefix |
| ------- | ------ |
| 1       | Meth-  |
| 2       | Eth-   |
| 3       | Prop-  |
| 4       | But-   |
| 5       | Pent-  |
| 6       | Hex-   |
| 7       | Hept-  |
| 8       | Oct-   |
| 9       | Non-   |
| 10      | Dec-   |

### Suffixes for Functional Groups

| Functional Group | Suffix    | Example          |
| ---------------- | --------- | ---------------- |
| Alkane           | -ane      | Ethane           |
| Alkene           | -ene      | Ethene           |
| Alkyne           | -yne      | Ethyne           |
| Alcohol          | -ol       | Ethanol          |
| Aldehyde         | -al       | Ethanal          |
| Ketone           | -one      | Propanone        |
| Carboxylic acid  | -oic acid | Ethanoic acid    |
| Ester            | -oate     | Methyl ethanoate |
| Amine            | -amine    | Ethanamine       |
| Amide            | -amide    | Ethanamide       |

:::info[Example]

Name: 2-methylbut-2-ene.

- Parent chain: 4 carbons (butene).
- Double bond starts at carbon 2.
- Methyl substituent at carbon 2.

:::

### Structural Isomers

**Chain isomers**: different arrangements of the carbon skeleton.

**Position isomers**: same skeleton, different position of the functional group.

**Functional group isomers**: same molecular formula, different functional groups.

:::info[Example]

C$_4$H$_8$O has multiple isomers: butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, butanal, butanone,
methyl propanoate, ethyl ethanoate, etc.

:::

---

## Alkanes

### Structure

- General formula: C$_n$H$_{2n+2}$
- Single covalent bonds only (C--C and C--H).
- sp$^3$ hybridisation, tetrahedral geometry (bond angles $\approx 109.5\degree$).
- Saturated hydrocarbons (maximum number of hydrogens).

### Physical Properties

| Property                  | Trend                                                         |
| ------------------------- | ------------------------------------------------------------- |
| Boiling point             | Increases with chain length (more London forces)              |
| Melting point             | Increases with chain length                                   |
| State at room temperature | C$_1$--C$_4$: gas; C$_5$--C$_{17}$: liquid; C$_{18}^+$: solid |
| Solubility                | Non-polar, insoluble in water                                 |

### Reactions

#### Combustion

**Complete combustion** (excess oxygen):

$$
\text{C}_n\text{H}_{2n+2} + \frac{3n+1}{2}\text{O}_2 \to n\text{CO}_2 + (n+1)\text{H}_2\text{O}
$$

**Incomplete combustion** (limited oxygen):

$$
\text{C}_n\text{H}_{2n+2} + \frac{3n+1}{2}\text{O}_2 \to \text{CO} + (n+1)\text{H}_2\text{O}
$$

Or: produces carbon (soot) and water.

#### Halogenation (Free Radical Substitution)

$$
\text{CH}_4 + \text{Cl}_2 \xrightarrow{\text{UV light}} \text{CH}_3\text{Cl} + \text{HCl}
$$

**Mechanism** (free radical substitution):

1. **Initiation**: Cl$_2 \xrightarrow{\text{UV}} 2\text{Cl}^\bullet$ (homolytic fission)

2. **Propagation**:
   - $\text{Cl}^\bullet + \text{CH}_4 \to \text{HCl} + \text{CH}_3^\bullet$
   - $\text{CH}_3^\bullet + \text{Cl}_2 \to \text{CH}_3\text{Cl} + \text{Cl}^\bullet$

3. **Termination**: radicals combine in various ways:
   - $\text{Cl}^\bullet + \text{Cl}^\bullet \to \text{Cl}_2$
   - $\text{CH}_3^\bullet + \text{CH}_3^\bullet \to \text{C}_2\text{H}_6$
   - $\text{CH}_3^\bullet + \text{Cl}^\bullet \to \text{CH}_3\text{Cl}$

### Cracking

Breaking large hydrocarbons into smaller, more useful molecules.

**Thermal cracking**: high temperature, produces alkenes.

**Catalytic cracking**: uses a zeolite catalyst, lower temperature, produces branched alkanes and
cycloalkanes.

---

## Alkenes

### Structure

- General formula: C$_n$H$_{2n}$
- Contain at least one C=C double bond.
- sp$^2$ hybridisation, trigonal planar geometry around the double bond (bond angle
  $\approx 120\degree$).
- Unsaturated hydrocarbons.
- The double bond consists of one $\sigma$ bond and one $\pi$ bond.
- Restricted rotation about the C=C bond leads to **cis-trans (E/Z) isomerism**.

### Physical Properties

Similar to alkanes of comparable molecular mass but with slightly higher boiling points due to the
$\pi$ electron cloud.

### Reactions

#### Addition Reactions

**Hydrogenation**:

$$
\text{CH}_2=\text{CH}_2 + \text{H}_2 \xrightarrow{\text{Ni catalyst}} \text{CH}_3\text{CH}_3
$$

**Halogenation**:

$$
\text{CH}_2=\text{CH}_2 + \text{Br}_2 \to \text{CH}_2\text{BrCH}_2\text{Br}
$$

The bromine water is decolourised — this is the test for unsaturation.

**Hydration** (with acid catalyst):

$$
\text{CH}_2=\text{CH}_2 + \text{H}_2\text{O} \xrightarrow{\text{H}_3\text{PO}_4} \text{CH}_3\text{CH}_2\text{OH}
$$

**Hydrohalogenation**:

$$
\text{CH}_2=\text{CH}_2 + \text{HBr} \to \text{CH}_3\text{CH}_2\text{Br}
$$

### Markovnikov's Rule

When HX adds to an unsymmetrical alkene, the hydrogen adds to the carbon with the greater number of
hydrogen atoms (the more substituted carbon gets the halogen).

$$
\text{CH}_3\text{CH}=\text{CH}_2 + \text{HBr} \to \text{CH}_3\text{CHBrCH}_3 \text{ (major product)}
$$

### Polymerisation

Alkenes undergo addition polymerisation:

$$
n\text{CH}_2=\text{CHCl} \to -(\text{CH}_2\text{CHCl})_n-
$$

Poly(chloroethene) — PVC.

---

## Alkynes

### Structure

- General formula: C$_n$H$_{2n-2}$
- Contain a C$\equiv$C triple bond.
- sp hybridisation, linear geometry around the triple bond.
- Terminal alkynes have an acidic hydrogen.

### Reactions

Similar to alkenes but can undergo two successive addition reactions due to two $\pi$ bonds.

---

## Benzene and Aromatic Chemistry

### Structure of Benzene

- Formula: C$_6$H$_6$.
- Delocalised $\pi$ electron system (6 $\pi$ electrons above and below the ring).
- Planar hexagonal structure.
- All C--C bonds are equal length (intermediate between single and double).
- Represented by a hexagon with a circle inside (or alternating double bonds).

### Stability

Benzene is more stable than predicted by Kekule's structure because of **delocalisation energy**
(resonance energy).

### Electrophilic Substitution

Benzene undergoes electrophilic substitution (not addition) to preserve the aromatic system.

#### Nitration

$$
\text{C}_6\text{H}_6 + \text{HNO}_3 \xrightarrow{\text{H}_2\text{SO}_4, 50\degree\text{C}} \text{C}_6\text{H}_5\text{NO}_2 + \text{H}_2\text{O}
$$

**Electrophile**: $\text{NO}_2^+$ (nitronium ion).

#### Halogenation

$$
\text{C}_6\text{H}_6 + \text{Br}_2 \xrightarrow{\text{FeBr}_3} \text{C}_6\text{H}_5\text{Br} + \text{HBr}
$$

**Electrophile**: $\text{Br}^+$ (generated by FeBr$_3$).

#### Friedel-Crafts Alkylation

$$
\text{C}_6\text{H}_6 + \text{RCl} \xrightarrow{\text{AlCl}_3} \text{C}_6\text{H}_5\text{R} + \text{HCl}
$$

**Electrophile**: $\text{R}^+$ (carbocation).

---

## Functional Groups

### Alcohols (R--OH)

**Classification**:

- Primary ($1\degree$): the --OH carbon is attached to one other carbon.
- Secondary ($2\degree$): the --OH carbon is attached to two other carbons.
- Tertiary ($3\degree$): the --OH carbon is attached to three other carbons.

**Reactions**:

| Reaction       | Conditions                      | Product                                                     |
| -------------- | ------------------------------- | ----------------------------------------------------------- |
| Combustion     | Burns in air                    | CO$_2$ + H$_2$O                                             |
| Oxidation      | PCC                             | Aldehyde (from $1\degree$)                                  |
| Oxidation      | Acidified K$_2$Cr$_2$O$_7$      | Carboxylic acid (from $1\degree$), Ketone (from $2\degree$) |
| Dehydration    | H$_2$SO$_4$, heat               | Alkene                                                      |
| Substitution   | PBr$_3$ or SOCl$_2$             | Alkyl halide                                                |
| Esterification | Carboxylic acid, H$^+$ catalyst | Ester                                                       |

**Oxidation of Alcohols**:

Primary alcohol $\to$ Aldehyde $\to$ Carboxylic acid

Secondary alcohol $\to$ Ketone (stops here)

Tertiary alcohol $\to$ Not easily oxidised

### Aldehydes and Ketones (C=O)

**Aldehydes** (terminal C=O): suffix -al. Can be oxidised to carboxylic acids (reducing agents).

**Ketones** (internal C=O): suffix -one. Cannot be further oxidised.

**Tests**:

- **Tollens' reagent**: aldehydes give a silver mirror; ketones do not.
- **Fehling's solution**: aldehydes give a brick-red precipitate; ketones do not.
- **2,4-DNPH**: both aldehydes and ketones give an orange precipitate (test for carbonyl group).

### Carboxylic Acids (R--COOH)

**Properties**:

- Weak acids (partially dissociate in water).
- Hydrogen bonding gives relatively high boiling points.
- Form dimers in non-polar solvents.

**Reactions**:

| Reaction                      | Product         |
| ----------------------------- | --------------- |
| With base                     | Salt + water    |
| With alcohol (esterification) | Ester + water   |
| With ammonia                  | Amide           |
| Reduction (LiAlH$_4$)         | Primary alcohol |

### Esters (R--COO--R')

Formed by condensation (esterification) of a carboxylic acid and an alcohol:

$$
\text{RCOOH} + \text{R'OH} \rightleftharpoons \text{RCOOR}' + \text{H}_2\text{O}
$$

Catalysed by concentrated H$_2$SO$_4$.

**Uses**: flavourings, fragrances, plasticisers, solvents.

### Amines (R--NH$_2$)

- Weak bases (the lone pair on nitrogen accepts a proton).
- Form salts with acids.
- Primary amines can be formed by nucleophilic substitution of halogenoalkanes with ammonia.

---

## Reaction Mechanisms

### Nucleophilic Substitution ($S_N1$ and $S_N2$)

#### $S_N2$ (Bimolecular)

- One-step mechanism.
- Concerted: bond breaking and forming happen simultaneously.
- **Inversion of configuration** (Walden inversion).
- Rate depends on both substrate and nucleophile concentration.

$$
\text{Rate} = k[\text{R--X}][\text{Nu}^-]
$$

- Favoured by: primary substrates, strong nucleophiles, polar aprotic solvents.
- Sterically hindered substrates react slowly.

**Mechanism**:

1. Nucleophile attacks from the back of the C--X bond.
2. Transition state with partial bonds.
3. X$^-$ leaves.
4. Product has inverted configuration.

#### $S_N1$ (Unimolecular)

- Two-step mechanism.
- Rate depends only on substrate concentration.

$$
\text{Rate} = k[\text{R--X}]
$$

- **Step 1** (slow, rate-determining): R--X $\to$ R$^+$ + X$^-$ (carbocation formation).
- **Step 2** (fast): R$^+$ + Nu$^-$ $\to$ R--Nu.
- **Racemisation** occurs (equal mixture of inverted and retained configuration).
- Favoured by: tertiary substrates, weak nucleophiles, polar protic solvents.

| Feature              | $S_N1$                         | $S_N2$                           |
| -------------------- | ------------------------------ | -------------------------------- |
| Steps                | Two (carbocation intermediate) | One (concerted)                  |
| Rate law             | Rate $= k[\text{RX}]$          | Rate $= k[\text{RX}][\text{Nu}]$ |
| Stereochemistry      | Racemisation                   | Inversion                        |
| Substrate preference | Tertiary                       | Primary                          |
| Carbocation          | Yes                            | No                               |

### Elimination ($E1$ and $E2$)

Elimination reactions remove HX to form an alkene.

#### $E2$ (Bimolecular)

- Concerted one-step mechanism.
- Strong base removes a proton while X$^-$ leaves.
- Follows Zaitsev's rule: the more substituted alkene is the major product.

$$
\text{Rate} = k[\text{R--X}][\text{base}]
$$

#### $E1$ (Unimolecular)

- Two-step mechanism.
- Step 1: carbocation formation (rate-determining).
- Step 2: base removes a proton.

$$
\text{Rate} = k[\text{R--X}]
$$

### Factors Affecting $S_N$ vs $E$

| Condition          | Favours Substitution ($S_N$) | Favours Elimination ($E$) |
| ------------------ | ---------------------------- | ------------------------- |
| Temperature        | Lower                        | Higher                    |
| Base strength      | Weak                         | Strong                    |
| Base concentration | Low                          | High                      |
| Substrate          | Primary ($S_N2$)             | Tertiary                  |
| Steric hindrance   | Low                          | High                      |
| Solvent            | Polar protic ($S_N1$)        | -                         |

---

## Polymer Chemistry

### Addition Polymers

Formed by addition polymerisation of alkenes (monomers with C=C bonds). No by-product.

| Polymer     | Monomer           | Uses                  |
| ----------- | ----------------- | --------------------- |
| Polyethene  | Ethene            | Bags, bottles         |
| Polypropene | Propene           | Ropes, containers     |
| PVC         | Chloroethene      | Pipes, insulation     |
| Polystyrene | Phenylethene      | Packaging, insulation |
| PTFE        | Tetrafluoroethene | Non-stick coatings    |

### Condensation Polymers

Formed when monomers join with the elimination of a small molecule (usually water).

#### Polyesters

Monomer: dicarboxylic acid + diol.

$$
n\text{HOOC--R--COOH} + n\text{HO--R'--OH} \to -(\text{OC--R--COO--R'O})_n- + 2n\text{H}_2\text{O}
$$

Example: PET (polyethylene terephthalate) — used in fibres and bottles.

#### Polyamides (Nylons)

Monomer: dicarboxylic acid + diamine.

$$
n\text{HOOC--R--COOH} + n\text{H}_2\text{N--R'--NH}_2 \to -(\text{OC--R--CONH--R'--NH})_n- + 2n\text{H}_2\text{O}
$$

#### Proteins

Proteins are natural polyamides formed from amino acid monomers via peptide bonds.

### Biodegradability

| Polymer               | Biodegradable? | Reason                                         |
| --------------------- | -------------- | ---------------------------------------------- |
| Polyethene            | No             | C--C backbone resists hydrolysis               |
| Polyesters            | Yes (some)     | Ester bonds can be hydrolysed                  |
| Polyamides            | Partially      | Amide bonds can be hydrolysed (slowly)         |
| Polylactic acid (PLA) | Yes            | Ester linkages, derived from renewable sources |
| Cellulose             | Yes            | Natural polymer, readily broken down           |

### Identifying Monomers

To find the monomer from an addition polymer, break single C--C bonds alternately to recover the C=C
double bond.

For condensation polymers, identify the repeating unit and add back the eliminated molecule
(H$_2$O).

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

Name the following compound: CH$_3$CH(Cl)CH(CH$_3$)CH$_2$CH$_3$.

1. Longest chain: 5 carbons (pentane).
2. Number from the end nearest the substituent with the lowest number: Cl at C2, CH$_3$ at C3.
3. Name: 2-chloro-3-methylpentane.

### Question 2 (Paper 2 style)

**Compare the mechanisms of $S_N1$ and $S_N2$ reactions.**

$S_N2$: One-step bimolecular mechanism. The nucleophile attacks the carbon bearing the leaving group
from the opposite side, leading to inversion of configuration. The rate depends on both [substrate]
and [nucleophile]. Favoured for primary substrates.

$S_N1$: Two-step unimolecular mechanism. The leaving group departs first to form a carbocation
intermediate, which is then attacked by the nucleophile. This leads to racemisation. The rate
depends only on [substrate]. Favoured for tertiary substrates.

### Question 3 (Paper 2 style)

Ethanol can be oxidised to ethanal and then to ethanoic acid.

**(a)** Describe the conditions for each oxidation.

Ethanol $\to$ Ethanal: Use PCC (pyridinium chlorochromate) in CH$_2$Cl$_2$ at room temperature (mild
oxidation).

Ethanol $\to$ Ethanoic acid: Use acidified K$_2$Cr$_2$O$_7$ (potassium dichromate) under reflux
(strong oxidation).

**(b)** How would you distinguish between ethanol, ethanal, and ethanoic acid?

- Tollens' reagent: silver mirror with ethanal, no reaction with ethanol or ethanoic acid.
- Acidified K$_2$Cr$_2$O$_7$: orange to green with ethanol and ethanal, no change with ethanoic
  acid.
- NaHCO$_3$: bubbles of CO$_2$ with ethanoic acid, no reaction with ethanol or ethanal.

### Question 4 (Paper 1 style)

Which compound is the major product when 2-methylpropene reacts with HBr?

By Markovnikov's rule, H adds to the less substituted carbon (C1) and Br adds to the more
substituted carbon (C2):

$$
\text{CH}_2=\text{C}(\text{CH}_3)_2 + \text{HBr} \to \text{CH}_3\text{CBr}(\text{CH}_3)_2
$$

Product: 2-bromo-2-methylpropane.

### Question 5 (Paper 2 style)

**Describe the electrophilic substitution mechanism for the nitration of benzene.**

**Generation of electrophile**:

$$
\text{HNO}_3 + \text{H}_2\text{SO}_4 \to \text{NO}_2^+ + \text{HSO}_4^- + \text{H}_2\text{O}
$$

**Mechanism**:

1. The electron-rich benzene ring attacks the nitronium ion ($\text{NO}_2^+$), forming a delocalised
   carbocation intermediate.

2. The intermediate loses a proton to HSO$_4^-$, regenerating the aromatic system and forming
   nitrobenzene.

---

## Summary

| Reaction Type  | Description                                              |
| -------------- | -------------------------------------------------------- |
| Substitution   | Atom/group replaced (alkanes, benzene)                   |
| Addition       | Atoms added across double/triple bond (alkenes, alkynes) |
| Elimination    | Small molecule removed to form double bond               |
| Condensation   | Monomers join, small molecule eliminated                 |
| Oxidation      | Gain of oxygen or loss of hydrogen                       |
| Reduction      | Loss of oxygen or gain of hydrogen                       |
| Polymerisation | Monomers join to form long chains                        |

| Mechanism | Characteristics                              |
| --------- | -------------------------------------------- |
| $S_N2$    | One step, inversion, primary substrates      |
| $S_N1$    | Two steps, racemisation, tertiary substrates |
| $E2$      | One step, strong base, Zaitsev product       |
| $E1$      | Two steps, carbocation, weak base            |

:::tip[Exam Strategy]

For naming questions, always identify the longest chain first. For mechanism questions, draw clear
curly arrow mechanisms showing electron movement. For comparison questions ($S_N1$ vs $S_N2$), use a
table for clarity. For polymer questions, be able to identify the monomer from the polymer and vice
versa.

:::

---

## Organic Chemistry: Extended Topics

### Optical Isomerism

Optical isomers (enantiomers) are non-superimposable mirror images. They occur when a carbon atom
has four different groups attached (a chiral centre).

**Properties of enantiomers**:

- Same physical properties (except interaction with plane-polarised light).
- Rotate plane-polarised light in opposite directions.
- Same chemical properties except with other chiral molecules.
- A 50:50 mixture is called a racemic mixture (optically inactive).

### Racemisation

If a reaction creates a chiral centre but has no stereochemical control, a racemic mixture is
produced.

### $R/S$ Nomenclature

The Cahn-Ingold-Prelog priority rules assign $R$ or $S$ to chiral centres:

1. Assign priority (1--4) to groups around the chiral centre (atomic number).
2. Orient the molecule so the lowest priority group points away.
3. Trace 1 $\to$ 2 $\to$ 3: clockwise $= R$, counterclockwise $= S$.

### Conformational Isomerism

Different spatial arrangements due to rotation about single bonds.

**Ethane**: staggered (most stable) and eclipsed (least stable) conformations.

**Butane**: anti (most stable), gauche, and eclipsed conformations.

### Stereoisomerism in Cyclic Compounds

Cycloalkanes can have cis-trans isomerism when substituents are on different sides of the ring.

---

## Spectroscopy in Organic Chemistry

### Infrared (IR) Spectroscopy

Identifies functional groups by absorption of IR radiation.

| Absorption (cm$^{-1}$) | Bond                   |
| ---------------------- | ---------------------- |
| 2500--3300             | O--H (broad), N--H     |
| 2850--3100             | C--H                   |
| 1680--1750             | C=O                    |
| 1620--1680             | C=C                    |
| 2100--2260             | C$\equiv$C, C$\equiv$N |

### Mass Spectrometry

- **Molecular ion peak**: gives the molecular mass.
- **Fragmentation pattern**: helps identify the structure.
- **Isotope pattern**: Cl has $^{35}$Cl:$^{37}$Cl $\approx$ 3:1 ratio; Br has $^{79}$Br:$^{81}$Br
  $\approx$ 1:1.

### Nuclear Magnetic Resonance (NMR) Spectroscopy

- **Chemical shift ($\delta$)**: indicates the electronic environment.
- **Number of signals**: indicates the number of different types of proton.
- **Integration**: indicates the relative number of protons.
- **Splitting**: indicates the number of neighbouring protons ($n+1$ rule).

---

## Additional Reactions

### Oxidation of Primary Alcohols: Detailed

Primary alcohol $\xrightarrow{\text{[O]} }$ Aldehyde $\xrightarrow{\text{[O]} }$ Carboxylic acid

The aldehyde can be protected from over-oxidation by:

- Using PCC (mild oxidising agent).
- Distilling off the aldehyde as it forms (lower boiling point).

### Reduction of Carboxylic Acids

$$
\text{RCOOH} \xrightarrow{\text{LiAlH}_4} \text{RCH}_2\text{OH}
$$

LiAlH$_4$ is more powerful than NaBH$_4$ (which does not reduce carboxylic acids).

### Nucleophilic Addition to Carbonyls

#### With HCN

$$
\text{RCHO} + \text{HCN} \to \text{RCH(OH)CN}
$$

Forms a hydroxynitrile (cyanohydrin). Creates a new chiral centre.

#### With Grignard Reagents

$$
\text{RCHO} + \text{R'MgBr} \to \text{RCH(OMgBr)R'} \xrightarrow{\text{H}_3\text{O}^+} \text{RCH(OH)R'}
$$

Forms secondary alcohols from aldehydes, tertiary alcohols from ketones.

### Hydrolysis of Esters

$$
\text{RCOOR}' + \text{H}_2\text{O} \rightleftharpoons \text{RCOOH} + \text{R'OH}
$$

Acid-catalysed (reversible) or base-catalysed (irreversible, saponification).

### Saponification

Base-catalysed hydrolysis of fats produces soap (sodium salts of fatty acids):

$$
\text{Fat} + \text{NaOH} \to \text{glycerol} + \text{soap}
$$

---

## Additional IB Exam-Style Questions

### Question 6 (Paper 2 style)

**Describe the mechanism for the nucleophilic substitution reaction between 1-bromopropane and
aqueous sodium hydroxide.**

**Mechanism**:

1. The hydroxide ion (Nu$^-$) attacks the carbon bonded to bromine from the opposite side of the
   C--Br bond.

2. A transition state forms where the C--O bond is partially formed and the C--Br bond is partially
   broken.

3. The C--Br bond breaks completely, and Br$^-$ leaves as a leaving group.

4. The product is propan-1-ol, and the configuration at the carbon is inverted.

This is an $S_N2$ mechanism because:

- It is a primary halogenoalkane (little steric hindrance).
- The rate depends on both [halogenoalkane] and [Nu$^-$].
- The reaction proceeds in a single concerted step.
- Inversion of configuration occurs.

### Question 7 (Paper 1 style)

Which compound is a product of the complete combustion of pentane?

A. C$_5$H$_{12}$O$_2$ B. C$_5$H$_{10}$ C. CO$_2$ and H$_2$O D. CO and H$_2$O

**Answer: C.** Complete combustion of any hydrocarbon produces only CO$_2$ and H$_2$O.

### Question 8 (Paper 2 style)

**Compare addition and condensation polymers, giving one example of each and their corresponding
monomers.**

**Addition polymer**: Polyethene. Monomer: ethene (CH$_2$=CH$_2$).

- Formed from unsaturated monomers with C=C bonds.
- No by-product.
- The polymer contains the same atoms as the monomers.
- Often non-biodegradable.

**Condensation polymer**: Nylon-6,6. Monomers: hexanedioic acid and 1,6-diaminohexane.

- Formed from monomers with two functional groups.
- A small molecule (usually water) is eliminated.
- The polymer contains fewer atoms than the monomers combined.
- Can be more easily biodegradable due to hydrolysable bonds.

### Question 9 (Paper 1 style)

Which compound can exhibit both geometrical (cis-trans) and optical isomerism?

A. CH$_3$CH=CHCH$_3$ B. CH$_3$CHClCOOH C. CH$_3$CH(OH)CH=CH$_2$ D. BrCH$_2$CH(NH$_2$)COOH

**Answer: D.** It has a C=C bond (for cis-trans isomerism) and a chiral carbon (for optical
isomerism).

### Question 10 (Paper 2 style)

**Explain Markovnikov's rule in terms of the mechanism of electrophilic addition to propene.**

When HBr adds to propene (CH$_3$CH=CH$_2$):

1. The H$^+$ electrophile attacks the double bond.
2. It can form either a secondary carbocation (CH$_3$CH$^+$CH$_3$) or a primary carbocation
   (CH$_3$CH$_2$CH$_2^+$).
3. The secondary carbocation is more stable (hyperconjugation and inductive effects).
4. The secondary carbocation forms preferentially.
5. Br$^-$ then attacks the carbocation, giving 2-bromopropane as the major product.

Markovnikov's rule states that the hydrogen adds to the carbon with more hydrogen atoms because this
pathway proceeds through the more stable carbocation intermediate.
