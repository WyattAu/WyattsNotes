---
title: Organic Chemistry (Advanced)
description:
  IB Chemistry — reaction mechanisms, stereochemistry, addition and condensation polymers, and
  spectroscopic identification.
slug: organic-chemistry-advanced
---

## 1. Reaction Mechanisms

### SN1 Mechanism (Unimolecular Nucleophilic Substitution)

**Definition.** SN1 proceeds via a two-step mechanism where the rate depends only on the
concentration of the substrate.

**Step 1** (slow, rate-determining): Heterolytic cleavage of the C--X bond to form a carbocation
intermediate.

$$
\mathrm{(CH_3)_3C\mathrm{-}Br} \to \mathrm{(CH_3)_3C^+} + \mathrm{Br}^-
$$

**Step 2** (fast): Nucleophilic attack on the planar carbocation.

$$
\mathrm{(CH_3)_3C^+} + \mathrm{OH}^- \to \mathrm{(CH_3)_3COH}
$$

**Rate law**: $\mathrm{rate} = k[\mathrm{substrate}]$ (first order)

**Characteristics:**

| Feature              | SN1                                      |
| -------------------- | ---------------------------------------- |
| Kinetics             | First order                              |
| Mechanism            | Two steps, carbocation intermediate      |
| Stereochemistry      | Racemisation (attack from both sides)    |
| Substrate preference | Tertiary $\gt$ secondary (primary never) |
| Nucleophile strength | Weak nucleophiles are sufficient         |
| Leaving group        | Needs a good leaving group               |
| Rearrangements       | Possible (hydride or alkyl shifts)       |

### SN2 Mechanism (Bimolecular Nucleophilic Substitution)

**Definition.** SN2 proceeds via a single concerted step where the nucleophile attacks from the back
side as the leaving group departs.

$$
\mathrm{OH}^- + \mathrm{CH_3\mathrm{-}Br} \to \mathrm{TS} \to \mathrm{CH_3OH} + \mathrm{Br}^-
$$

**Rate law**: $\mathrm{rate} = k[\mathrm{substrate}][\mathrm{nucleophile}]$ (second order)

**Characteristics:**

| Feature              | SN2                                      |
| -------------------- | ---------------------------------------- |
| Kinetics             | Second order                             |
| Mechanism            | One concerted step, transition state     |
| Stereochemistry      | Walden inversion (back-side attack)      |
| Substrate preference | Primary $\gt$ secondary (tertiary never) |
| Nucleophile strength | Strong nucleophiles required             |
| Leaving group        | Needs a good leaving group               |
| Rearrangements       | Not possible                             |

### E1 Mechanism (Unimolecular Elimination)

Two-step mechanism via a carbocation intermediate (same intermediate as SN1):

**Step 1**: Formation of carbocation (rate-determining).

**Step 2**: Base removes a proton from an adjacent carbon, forming a double bond.

$$
\mathrm{rate} = k[\mathrm{substrate}]
$$

### E2 Mechanism (Bimolecular Elimination)

Concerted mechanism: the base removes a proton while the leaving group departs, forming a double
bond in a single step.

$$
\mathrm{rate} = k[\mathrm{substrate}][\mathrm{base}]
$$

### Comparing SN1, SN2, E1, E2

| Factor             | Favours SN1/E1                        | Favours SN2/E2                                 |
| ------------------ | ------------------------------------- | ---------------------------------------------- |
| Substrate          | Tertiary                              | Primary, methyl                                |
| Nucleophile/Base   | Weak                                  | Strong                                         |
| Leaving group      | Good (I$^-$, Br$^-$)                  | Good (I$^-$, Br$^-$)                           |
| Temperature        | Lower (substitution)                  | Higher (elimination)                           |
| Solvent            | Polar protic (stabilises carbocation) | Polar aprotic (does not stabilise carbocation) |
| Base concentration | Low                                   | High                                           |

### Zaitsev's Rule

When multiple alkenes can form, the **more substituted** (more stable) alkene is the major product:

$$
\mathrm{CH_3CH_2CH(CH_3)CH_2Br} \xrightarrow{\mathrm{E2}} \mathrm{CH_3CH_2C(CH_3)=CH_2} \mathrm{ (minor, Hofmann)}
$$

$$
\mathrm{CH_3CH_2CH(CH_3)CH_2Br} \xrightarrow{\mathrm{E2}} \mathrm{CH_3CH=C(CH_3)CH_3} \mathrm{ (major, Zaitsev)}
$$

### Common Pitfalls

- Primary substrates do not undergo SN1 or E1 (they cannot form stable carbocations).
- Tertiary substrates do not undergo SN2 (steric hindrance blocks back-side attack).
- Strong bases favour E2 over SN2, especially at elevated temperatures.

---

## 2. Stereochemistry

### Chirality

**Definition.** A molecule is **chiral** if it is not superimposable on its mirror image. A chiral
centre (stereocentre) is a carbon atom bonded to four different groups.

### Enantiomers

**Definition.** **Enantiomers** are non-superimposable mirror images. They have identical physical
properties (melting point, solubility) except for their interaction with plane-polarised light and
with other chiral molecules.

### Optical Activity

- **Dextrorotatory** ($+$ or $d$): rotates plane-polarised light clockwise.
- **Laevorotatory** ($-$ or $l$): rotates plane-polarised light anticlockwise.
- A racemic mixture ($50:50$ mixture of enantiomers) shows no optical rotation.

### Cahn-Ingold-Prelog (CIP) Priority Rules

Assign priorities to the four groups on a stereocentre:

1. Higher atomic number = higher priority.
2. If tied, look at the next atoms outward.
3. Double bonds are treated as if each atom is duplicated.
4. Orient the molecule so the lowest priority group points away.
5. If the remaining three groups go clockwise: $R$ (rectus). Anticlockwise: $S$ (sinister).

### Diastereomers

**Definition.** **Diastereomers** are stereoisomers that are not mirror images. They have different
physical properties.

### Geometric (cis/trans) Isomerism

Restricted rotation around a C=C double bond or a ring gives rise to geometric isomers.

For C=C: assign priorities using CIP rules. If the two higher-priority groups are on the same side:
$Z$ (zusammen). Opposite sides: $E$ (entgegen).

| Isomer  | Description                      | Example                       |
| ------- | -------------------------------- | ----------------------------- |
| $cis$   | Same side (similar groups)       | $cis$-but-2-ene               |
| $trans$ | Opposite sides                   | $trans$-but-2-ene             |
| $Z$     | Higher priority groups same side | $(Z)$-1-bromo-1-chloropropene |
| $E$     | Higher priority groups opposite  | $(E)$-1-bromo-1-chloropropene |

### Optical vs Geometric Isomerism

| Property            | Optical Isomerism          | Geometric Isomerism             |
| ------------------- | -------------------------- | ------------------------------- |
| Cause               | Chiral centre              | Restricted rotation (C=C, ring) |
| Mirror images       | Non-superimposable         | Not necessarily mirror images   |
| Physical properties | Identical (except optical) | Different                       |

### Common Pitfalls

- A molecule with a plane of symmetry is never chiral, even if it has stereocentres (meso
  compounds).
- Not all stereocentres produce chirality — internal symmetry can make a molecule achiral.
- $R$/$S$ refers to absolute configuration at a single stereocentre; it does not predict the
  direction of optical rotation.

---

## 3. Addition Polymers

### Mechanism

Addition polymers form from alkene monomers via free-radical addition. The double bond opens and
monomers link together in a chain.

**Initiation**: A peroxide or other radical initiator generates free radicals.

$$
\mathrm{ROOR} \to 2\mathrm{RO}^{\bullet}
$$

**Propagation**: The radical adds to a monomer, and the new radical adds to another monomer.

$$
\mathrm{RO}^{\bullet} + \mathrm{CH_2=CHR} \to \mathrm{ROCH_2CHR}^{\bullet} \to \mathrm{ROCH_2CHRCH_2CHR}^{\bullet} \to \cdots
$$

**Termination**: Two radicals combine, ending chain growth.

### Common Addition Polymers

| Monomer                       | Polymer          | Uses                                      |
| ----------------------------- | ---------------- | ----------------------------------------- |
| Ethene                        | Polyethene (PE)  | Bags, bottles, film                       |
| Propene                       | Polypropene (PP) | Containers, ropes, carpet fibre           |
| Chloroethene (vinyl chloride) | PVC              | Pipes, window frames, insulation          |
| Phenylethene (styrene)        | Polystyrene (PS) | Packaging, insulation, CD cases           |
| Tetrafluoroethene             | PTFE (Teflon)    | Non-stick coatings, electrical insulation |

### Biodegradability

Most addition polymers are non-biodegradable because the strong C--C backbone resists chemical and
biological breakdown. Disposal by landfill or incineration creates environmental problems.

### Common Pitfalls

- The repeating unit of an addition polymer is not the same as the monomer (the double bond is
  gone).
- Condensation polymers and addition polymers are formed by different mechanisms — do not confuse
  them.

---

## 4. Condensation Polymers

### Mechanism

Condensation polymers form when monomers join with the elimination of a small molecule (usually
$\mathrm{H}_2\mathrm{O}$ or $\mathrm{HCl}$). Two types:

### Polyesters

Formed from a diol and a dicarboxylic acid:

$$
\mathrm{diol} + \mathrm{dicarboxylic acid} \to \mathrm{polyester} + \mathrm{H}_2\mathrm{O}
$$

:::info[Example — PET (polyethylene terephthalate)]

Monomers: ethane-1,2-diol and benzene-1,4-dicarboxylic acid.

$$
n\mathrm{HOCH_2CH_2OH} + n\mathrm{HOOC\mathrm{-}C_6H_4\mathrm{-}COOH} \to \mathrm{PET} + 2n\mathrm{H}_2\mathrm{O}
$$

Uses: fibres (clothing), bottles, food containers.

:::

### Polyamides (Nylons)

Formed from a diamine and a dicarboxylic acid:

$$
\mathrm{diamine} + \mathrm{dicarboxylic acid} \to \mathrm{polyamide} + \mathrm{H}_2\mathrm{O}
$$

:::info[Example — Nylon-6,6]

Monomers: hexane-1,6-diamine and hexanedioic acid.

$$
n\mathrm{H_2N(CH_2)_6NH_2} + n\mathrm{HOOC(CH_2)_4COOH} \to \mathrm{Nylon-6,6} + 2n\mathrm{H}_2\mathrm{O}
$$

Uses: textiles, ropes, parachutes, engineering plastics.

:::

### Kevlar

An aromatic polyamide (aramid) with exceptional strength:

$$
\mathrm{benzene-1,4-diamine} + \mathrm{benzene-1,4-dicarboxylic acid} \to \mathrm{Kevlar}
$$

The rigid aromatic rings and strong hydrogen bonding between chains give Kevlar its high tensile
strength. Used in body armour, tyres, and aerospace.

### Comparison of Polymer Types

| Property         | Addition polymer            | Condensation polymer                       |
| ---------------- | --------------------------- | ------------------------------------------ |
| Monomers         | Alkenes                     | Diols + diacids / diamines + diacids       |
| By-product       | None                        | $\mathrm{H}_2\mathrm{O}$ or $\mathrm{HCl}$ |
| Biodegradability | Generally non-biodegradable | Some are biodegradable                     |
| Bond type        | C--C backbone               | Contains ester or amide bonds              |
| Examples         | PE, PP, PVC, PTFE           | PET, Nylon, Kevlar                         |

---

## 5. Spectroscopic Identification of Organic Compounds

### Combined Strategy

1. **Calculate the degree of unsaturation** (double bond equivalents, DBE):

$$
\mathrm{DBE} = C + 1 - \frac{H}{2} + \frac{N}{2}
$$

(For each halogen, add 1 to H. For each oxygen, ignore.)

2. **IR spectroscopy**: identify functional groups from characteristic absorptions.

3. **$\mathrm{^1H}$ NMR**: determine proton environments, integration, and splitting.

4. **Mass spectrometry**: determine molecular mass and fragmentation pattern.

5. **Assemble** all fragments into a consistent structure.

### Degree of Unsaturation Examples

| Molecular formula             | DBE | Possible features                          |
| ----------------------------- | --- | ------------------------------------------ |
| $\mathrm{C}_4\mathrm{H}_{10}$ | $0$ | No double bonds, no rings (alkane)         |
| $\mathrm{C}_4\mathrm{H}_8$    | $1$ | One double bond or one ring                |
| $\mathrm{C}_4\mathrm{H}_6$    | $2$ | Two double bonds, one triple, or two rings |
| $\mathrm{C}_6\mathrm{H}_6$    | $4$ | Benzene ring (three double bonds + ring)   |

### Characteristic IR Absorptions (Recap)

| Bond           | Range ($\mathrm{cm}^{-1}$)  |
| -------------- | --------------------------- |
| O--H (acid)    | $2500$--$3300$ (very broad) |
| O--H (alcohol) | $3200$--$3600$ (broad)      |
| N--H           | $3300$--$3500$              |
| C--H (alkane)  | $2850$--$3000$              |
| C--H (alkene)  | $3000$--$3100$              |
| C$\equiv$N     | $2200$--$2250$              |
| C=O            | $1700$--$1750$              |
| C=C            | $1600$--$1680$              |

### Key NMR Chemical Shifts (Recap)

| Proton type     | $\delta$ (ppm) |
| --------------- | -------------- |
| Alkane          | $0.7$--$1.5$   |
| Adjacent to C=O | $2.0$--$2.7$   |
| Alkene          | $4.5$--$6.5$   |
| Aromatic        | $6.5$--$8.0$   |
| Aldehyde        | $9.0$--$10.0$  |
| Carboxylic acid | $10.0$--$12.0$ |

### Common Pitfalls

- DBE = 4 is a strong indicator of a benzene ring, but not proof by itself.
- In $\mathrm{^1H}$ NMR, the integration ratio must be multiplied by the total number of protons
  (determined from the molecular formula).
- $\mathrm{D}_2\mathrm{O}$ exchange removes OH and NH signals, confirming their presence.

---

## Practice Problems

<details>
<summary>Problem 1</summary>

For each substrate, predict whether SN1, SN2, E1, or E2 will be the major pathway:

(a) $\mathrm{CH_3CH_2Br}$ with $\mathrm{NaOH}$ in $\mathrm{H}_2\mathrm{O}$ at $25\degree\mathrm{C}$

(b) $(\mathrm{CH_3})_3\mathrm{CBr}$ with $\mathrm{NaOH}$ in ethanol at $80\degree\mathrm{C}$

(c) $(\mathrm{CH_3})_3\mathrm{CBr}$ with $\mathrm{H}_2\mathrm{O}$ at $25\degree\mathrm{C}$

**Solution:**

(a) **SN2**: primary substrate, strong nucleophile/base, polar protic solvent, low temperature.

(b) **E2**: tertiary substrate, strong base, high temperature favours elimination over substitution.

(c) **SN1**: tertiary substrate, weak nucleophile (water), polar protic solvent, low temperature.
The carbocation intermediate is stable.

</details>

<details>
<summary>Problem 2</summary>

An unknown compound has molecular formula $\mathrm{C}_3\mathrm{H}_6\mathrm{O}_2$. Its IR spectrum
shows a broad peak at $3000\mathrm{ cm}^{-1}$ and a strong peak at $1710\mathrm{ cm}^{-1}$. Its
$\mathrm{^1H}$ NMR spectrum shows: $\delta\ 1.2\ (d,\ 3\mathrm{H})$,
$\delta\ 4.1\ (q,\ 1\mathrm{H})$, $\delta\ 11.0\ (s,\ 1\mathrm{H})$, and a singlet at $\delta\ 2.0$
that integrates to $1\mathrm{H}$.

Wait — the formula only has 6 H. Let me correct: $\delta\ 1.2\ (d,\ 3\mathrm{H})$,
$\delta\ 2.5\ (q,\ 2\mathrm{H})$, $\delta\ 11.5\ (s,\ 1\mathrm{H})$. Identify the compound.

**Solution:**

- $\mathrm{C}_3\mathrm{H}_6\mathrm{O}_2$: $\mathrm{DBE} = 3 + 1 - 6/2 = 1$ (one C=O).
- IR: broad $3000\mathrm{ cm}^{-1}$ (O--H) + $1710\mathrm{ cm}^{-1}$ (C=O) = carboxylic acid.
- NMR: $d, 3\mathrm{H}$ + $q, 2\mathrm{H}$ = ethyl group ($\mathrm{CH_3CH_2}$--). $s, 1\mathrm{H}$ =
  COOH proton.
- Structure: $\mathrm{CH_3CH_2COOH}$ (propanoic acid).

Check: M = $3(12) + 6(1) + 2(16) = 74$. But $\mathrm{C}_3\mathrm{H}_6\mathrm{O}_2$ has M = 74.
Confirmed.

</details>

<details>
<summary>Problem 3</summary>

Draw the repeating unit of the polyester formed from propane-1,3-diol and butanedioic acid. Write
the equation for its formation.

**Solution:**

$$
n\mathrm{HOCH_2CH_2CH_2OH} + n\mathrm{HOOCCH_2CH_2COOH} \to \left[-\mathrm{OCH_2CH_2CH_2OOCCH_2CH_2CO}-\right]_n + 2n\mathrm{H}_2\mathrm{O}
$$

Repeating unit: $-\mathrm{OCH_2CH_2CH_2OOCCH_2CH_2CO}-$

</details>

<details>
<summary>Problem 4</summary>

A compound $\mathrm{C}_5\mathrm{H}_{10}\mathrm{O}$ shows the following spectra. IR: strong peak at
$1700\mathrm{ cm}^{-1}$, no broad O--H. $\mathrm{^1H}$ NMR: $\delta\ 1.0\ (t,\ 3\mathrm{H})$,
$\delta\ 1.6\ (m,\ 2\mathrm{H})$, $\delta\ 2.1\ (s,\ 3\mathrm{H})$,
$\delta\ 2.3\ (t,\ 2\mathrm{H})$. Identify the compound.

**Solution:**

- $\mathrm{C}_5\mathrm{H}_{10}\mathrm{O}$: $\mathrm{DBE} = 5 + 1 - 10/2 = 1$ (one C=O).
- IR: $1700\mathrm{ cm}^{-1}$ (C=O), no O--H = ketone or aldehyde. No aldehyde peak around
  $\delta\ 9$--$10$, so it is a ketone.
- NMR: triplet + multiplet + triplet = propyl chain ($\mathrm{CH_3CH_2CH_2}$--). Singlet at
  $\delta\ 2.1$ ($3\mathrm{H}$) = $\mathrm{CH_3CO}$--.
- Structure: $\mathrm{CH_3COCH_2CH_2CH_3$ (pentan-2-one).

Total protons: $3 + 2 + 3 + 2 = 10 = \mathrm{C}_5\mathrm{H}_{10}\mathrm{O}$. Confirmed.

</details>

---

## Worked Examples

**Worked Example: Predicting the major organic product of a substitution reaction**

Predict the major product when $(CH_3)_3CBr$ is heated with $\mathrm{KOH}$ in ethanol. State the
mechanism, draw the transition state or intermediate, and explain the regiochemistry.

<details>
<summary>Solution</summary>

**Substrate analysis:** $(CH_3)_3CBr$ is a tertiary alkyl halide.

**Conditions:** $\mathrm{KOH}$ (strong base) in ethanol (polar protic solvent) at elevated temperature.

**Mechanism determination:** Tertiary substrate + strong base + heat $\to$ E2 is favoured over SN2.
SN1 is also possible but elevated temperature shifts the product distribution toward elimination.

**Major product: E2 elimination.**

The base abstracts a proton from a $\beta$-carbon while the leaving group departs. By Zaitsev's
rule, the more substituted (more stable) alkene is the major product:

$$\mathrm{(CH_3)_3CBr + KOH \to (CH_3)_2C=CH_2 + KBr + H_2O}$$

This is the **Hofmann product** (less substituted). The Zaitsev product would require removing a
proton from a methyl group:

$$\mathrm{(CH_3)_3CBr + KOH \to CH_3CH=C(CH_3)_2 + KBr + H_2O}$$

Actually, for $(CH_3)_3CBr$, there are no $\beta$-hydrogens on the carbon bearing two methyl groups
that are distinct from the terminal methyl groups. The only elimination products are
$(CH_3)_2C=CH_2$ (the only possible alkene). Since there is only one type of $\beta$-hydrogen,
Zaitsev's rule does not apply here --- there is only one elimination product.

**SN1 product (minor):** $(CH_3)_3COH$ (tert-butanol), formed via a carbocation intermediate with
water as the nucleophile.

</details>

**Worked Example: CIP priority rules and R/S assignment**

Assign the absolute configuration (R or S) to the stereocentre in
$\mathrm{CH_3CHClCH_2CH_3}$ (2-chlorobutane).

<details>
<summary>Solution</summary>

**Step 1: Identify the stereocentre.**

Carbon-2 is bonded to four different groups: $-\mathrm{H}$, $-\mathrm{Cl}$, $-\mathrm{CH_3}$,
$-\mathrm{CH_2CH_3}$.

**Step 2: Assign CIP priorities.**

1. $-\mathrm{Cl}$: atomic number 17 (highest priority)
2. $-\mathrm{CH_2CH_3}$: the first atom is C, and the next atoms are C, H, H (by expansion: C is
   bonded to C, H, H)
3. $-\mathrm{CH_3}$: the first atom is C, and the next atoms are H, H, H
4. $-\mathrm{H}$: atomic number 1 (lowest priority)

Priority order: $\mathrm{Cl} \gt \mathrm{CH_2CH_3} \gt \mathrm{CH_3} \gt \mathrm{H}$

**Step 3: Orient the molecule.**

Place the lowest priority group ($-\mathrm{H}$) pointing away (dashed wedge). If $-\mathrm{H}$ is
on a wedge in the given structure, invert the assignment.

**Step 4: Determine R or S.**

Looking at the remaining three groups (Cl, ethyl, methyl) in order of decreasing priority:
$1 \to 2 \to 3$. If the sequence is clockwise, the configuration is R. If anticlockwise, it is S.

For the standard representation where Cl is on a wedge and H is on a dash: the sequence
$\mathrm{Cl} \to \mathrm{CH_2CH_3} \to \mathrm{CH_3$ goes anticlockwise, so the configuration is
**S**.

If H were on a wedge (pointing toward you), the apparent direction would be reversed, and the true
configuration would be R. Always orient H away before assigning.

</details>

**Worked Example: Drawing the repeating unit of a condensation polymer**

Draw the repeating unit of the polyester formed from propane-1,3-diol and butanedioic acid. Write
the balanced equation for its formation and identify the by-product.

<details>
<summary>Solution</summary>

**Step 1: Write the structures of the monomers.**

Propane-1,3-diol: $\mathrm{HOCH_2CH_2CH_2OH}$

Butanedioic acid (succinic acid): $\mathrm{HOOCCH_2CH_2COOH}$

**Step 2: Write the condensation equation.**

$$n\mathrm{HOCH_2CH_2CH_2OH} + n\mathrm{HOOCCH_2CH_2COOH} \to \left[-\mathrm{OCH_2CH_2CH_2OOCCH_2CH_2CO}-\right]_n + 2n\mathrm{H_2O}$$

**Step 3: Identify the repeating unit.**

The repeating unit is:
$-\mathrm{OCH_2CH_2CH_2OOCCH_2CH_2CO}-$

**Step 4: Verify atom conservation.**

Left side per repeat: $\mathrm{C}_7\mathrm{H}_{12}\mathrm{O}_4$

Right side per repeat: repeating unit $\mathrm{C}_7\mathrm{H}_{10}\mathrm{O}_4$ + $2\mathrm{H_2O}$
= $\mathrm{C}_7\mathrm{H}_{10}\mathrm{O}_4 + \mathrm{H_4}\mathrm{O}_2$ =
$\mathrm{C}_7\mathrm{H}_{14}\mathrm{O}_6$

Wait --- let me recount. Each repeat consumes one diol ($\mathrm{C}_3\mathrm{H}_8\mathrm{O}_2$)
and one diacid ($\mathrm{C}_4\mathrm{H}_6\mathrm{O}_4$):

$$\mathrm{C}_3\mathrm{H}_8\mathrm{O}_2 + \mathrm{C}_4\mathrm{H}_6\mathrm{O}_4 \to \mathrm{C}_7\mathrm{H}_{12}\mathrm{O}_4 \text{(repeating unit)} + 2\mathrm{H_2O}$$

Check atoms: LHS = $\mathrm{C}_7\mathrm{H}_{14}\mathrm{O}_6$. RHS = $\mathrm{C}_7\mathrm{H}_{12}\mathrm{O}_4 + \mathrm{H_4}\mathrm{O}_2 = \mathrm{C}_7\mathrm{H}_{16}\mathrm{O}_6$.

That does not balance. The correct stoichiometry is:

$$\mathrm{C}_3\mathrm{H}_8\mathrm{O}_2 + \mathrm{C}_4\mathrm{H}_6\mathrm{O}_4 \to \mathrm{C}_7\mathrm{H}_{10}\mathrm{O}_4 + 2\mathrm{H_2O}$$

Check: LHS = $\mathrm{C}_7\mathrm{H}_{14}\mathrm{O}_6$. RHS = $\mathrm{C}_7\mathrm{H}_{10}\mathrm{O}_4 + \mathrm{H_4}\mathrm{O}_2 = \mathrm{C}_7\mathrm{H}_{14}\mathrm{O}_6$. Balanced.

The repeating unit has lost 4 H and 2 O relative to the monomers (two ester linkages formed).

</details>

**Worked Example: Degree of unsaturation and structural elucidation**

A compound $\mathrm{C}_8\mathrm{H}_8\mathrm{O}$ has the following spectra. IR: $3060\mathrm{ cm}^{-1}$
(medium), $1690\mathrm{ cm}^{-1}$ (strong), $1600\mathrm{ cm}^{-1}$ (medium),
$1580\mathrm{ cm}^{-1}$ (medium), $750\mathrm{ cm}^{-1}$ (strong). $^{1}\mathrm{H}$ NMR:
$\delta\ 7.5$--$7.9\ (m,\ 5\mathrm{H})$, $\delta\ 3.9\ (s,\ 2\mathrm{H})$. MS:
$\mathrm{M}^+ = 120$. Identify the compound.

<details>
<summary>Solution</summary>

**Step 1: Calculate the degree of unsaturation.**

$$\mathrm{DBE} = 8 + 1 - \frac{8}{2} = 5$$

DBE = 5 is consistent with a benzene ring (DBE = 4) plus one additional unsaturation (likely C=O).

**Step 2: Analyse IR data.**

- $3060\mathrm{ cm}^{-1}$: aromatic C--H stretch (above $3000\mathrm{ cm}^{-1}$ confirms sp2 C--H).
- $1690\mathrm{ cm}^{-1}$: C=O stretch (slightly below $1700$, suggesting conjugation with the
  aromatic ring).
- $1600$, $1580\mathrm{ cm}^{-1}$: aromatic C=C stretches.
- $750\mathrm{ cm}^{-1}$: mono-substituted benzene (ortho-disubstituted typically shows near
  $750\mathrm{ cm}^{-1}$, but combined with other evidence, this suggests a single substituent on the
  benzene ring).

**Step 3: Analyse NMR data.**

- $\delta\ 7.5$--$7.9\ (m,\ 5\mathrm{H})$: 5 aromatic protons, consistent with a mono-substituted
  benzene ring ($\mathrm{C}_6\mathrm{H}_5$--).
- $\delta\ 3.9\ (s,\ 2\mathrm{H})$: isolated $\mathrm{CH}_2$ group, singlet (no adjacent protons).
  The chemical shift ($\delta\ 3.9$) suggests the $\mathrm{CH}_2$ is adjacent to an electron-withdrawing
  group (C=O).

**Step 4: Assemble the structure.**

Mono-substituted benzene ring: $\mathrm{C}_6\mathrm{H}_5$--. Remaining atoms: $\mathrm{C}_2\mathrm{H}_3\mathrm{O}$.
With C=O at $1690\mathrm{ cm}^{-1}$ and a $\mathrm{CH}_2$ singlet at $\delta\ 3.9$:

Structure: $\mathrm{C}_6\mathrm{H}_5\mathrm{CH_2CHO}$ (phenylethanal, also called phenylacetaldehyde).

**Step 5: Verify.**

- $\mathrm{C}_8\mathrm{H}_8\mathrm{O}$: $8(12) + 8(1) + 16 = 120 = \mathrm{M}^+$. Confirmed.
- DBE = 5: benzene ring (4) + aldehyde C=O (1). Confirmed.
- NMR: 5 aromatic H + 2 aldehydic CH2 = 7 H, plus 1 aldehyde H = 8 H total. Confirmed.

The compound is **phenylethanal** ($\mathrm{C}_6\mathrm{H}_5\mathrm{CH_2CHO}$).

</details>

**Worked Example: Reaction mechanism comparison**

For each substrate, predict the major product and mechanism when treated with $\mathrm{NaOH}$ in
$\mathrm{H}_2\mathrm{O}$ at $25\degree\mathrm{C}$:

(a) $\mathrm{CH_3CH_2Br}$

(b) $(\mathrm{CH_3})_3\mathrm{CBr}$

(c) $\mathrm{CH_3CHBrCH_3}$

<details>
<summary>Solution</summary>

**(a) $\mathrm{CH_3CH_2Br}$ (primary substrate, strong nucleophile, polar protic solvent):**

Mechanism: **SN2** (primary substrates do not form stable carbocations, so SN1/E1 are not possible).

$$\mathrm{CH_3CH_2Br + OH^- \to CH_3CH_2OH + Br^-}$$

Product: ethanol ($\mathrm{CH_3CH_2OH}$). Stereochemistry: Walden inversion at carbon.

**(b) $(\mathrm{CH_3})_3\mathrm{CBr}$ (tertiary substrate, strong nucleophile/base, low temperature):**

Mechanism: **SN1** (tertiary substrates form stable carbocations; back-side attack is blocked for SN2).

Step 1 (slow): $(\mathrm{CH_3})_3\mathrm{CBr} \to (\mathrm{CH_3})_3\mathrm{C}^+ + \mathrm{Br}^-$

Step 2 (fast): $(\mathrm{CH_3})_3\mathrm{C}^+ + \mathrm{H_2O} \to (\mathrm{CH_3})_3\mathrm{COH_2}^+$

Step 3 (fast): $(\mathrm{CH_3})_3\mathrm{COH_2}^+ \to (\mathrm{CH_3})_3\mathrm{COH} + \mathrm{H}^+$

Product: 2-methylpropan-2-ol (tert-butanol). Minor E1 product: 2-methylpropene.

**(c) $\mathrm{CH_3CHBrCH_3}$ (secondary substrate):**

Mechanism: **competition between SN1 and SN2**. Secondary substrates can proceed via either pathway
depending on exact conditions. With $\mathrm{NaOH}$ in water at $25\degree\mathrm{C}$, both SN2 and
SN1 are possible, but SN2 is slightly favoured because $\mathrm{OH}^-$ is a strong nucleophile.

Product: propan-2-ol ($\mathrm{CH_3CH(OH)CH_3}$). Minor elimination product: propene.

</details>

---

## Common Pitfalls

- **Assuming primary substrates can undergo SN1**: Primary carbocations are too unstable to form. A
  primary alkyl halide with a weak nucleophile and polar protic solvent will still proceed via SN2
  (just slowly), not SN1.

- **Confusing stereocentres with chirality**: A molecule can have stereocentres but be achiral if
  it has an internal plane of symmetry (meso compounds). For example, meso-tartaric acid has two
  stereocentres but is not chiral overall.

- **Writing the monomer instead of the repeating unit**: The repeating unit of an addition polymer
  is not the same as the monomer --- the double bond has opened. For polyethene, the monomer is
  $\mathrm{CH_2=CH_2}$ but the repeating unit is $-\mathrm{CH_2CH_2}-$.

- **Using the wrong $\mathrm{p}K_a$ when working with bases**: In the Henderson-Hasselbalch equation,
  always use the $\mathrm{p}K_a$ of the conjugate acid, not the $\mathrm{p}K_b$ of the base.
  $\mathrm{p}K_a + \mathrm{p}K_b = 14.00$.

- **Ignoring conjugation effects on IR frequencies**: A C=O conjugated with a C=C bond absorbs at a
  lower wavenumber ($\sim 1680\mathrm{ cm}^{-1}$) than an unconjugated C=O
  ($\sim 1715\mathrm{ cm}^{-1}$). This shift is diagnostic in structure determination.

- **Misassigning NMR splitting patterns**: The $n + 1$ rule only applies when the neighbouring
  protons are equivalent. Non-equivalent neighbouring protons produce complex multiplets, not simple
  doublets or triplets.

- **Forgetting that E2 requires an anti-periplanar arrangement**: The proton being removed and the
  leaving group must be in the same plane on opposite sides. This geometric requirement can make
  certain E2 eliminations stereospecific and can explain why some theoretical elimination products
  are not observed.

- **Confusing addition and condensation polymerisation mechanisms**: Addition polymers form from
  alkene monomers with no by-product. Condensation polymers form from monomers with two functional
  groups and release a small molecule (usually $\mathrm{H}_2\mathrm{O}$ or $\mathrm{HCl}$).

- **Over-relying on DBE alone for structural identification**: DBE = 4 suggests an aromatic ring
  but does not prove it. A compound could have two C=C bonds and two rings. Always confirm with IR
  and NMR data.

---

## Exam-Style Problems

1. Predict the major organic product(s) and state the mechanism for each reaction:
   (a) $\mathrm{CH_3CH_2CH_2Br}$ with $\mathrm{NaOH}$ in $\mathrm{H}_2\mathrm{O}$ at $25\degree\mathrm{C}$
   (b) $\mathrm{(CH_3)_3CBr}$ with $\mathrm{NaOH}$ in ethanol at $80\degree\mathrm{C}$
   (c) $\mathrm{CH_3CHBrCH_3}$ with $\mathrm{NaOH}$ in ethanol at $25\degree\mathrm{C}$
   **[Medium]**

2. A compound $\mathrm{C}_4\mathrm{H}_8\mathrm{O}$ shows IR absorptions at $1720\mathrm{ cm}^{-1}$
   (strong) and $2720\mathrm{ cm}^{-1}$ (weak). $^{1}\mathrm{H}$ NMR:
   $\delta\ 1.2\ (d,\ 3\mathrm{H})$, $\delta\ 2.5\ (q,\ 1\mathrm{H})$,
   $\delta\ 9.7\ (d,\ 1\mathrm{H})$. Identify the compound and explain the splitting pattern of
   the signal at $\delta\ 9.7$. **[Medium]**

3. Draw the repeating unit of the polyamide formed from hexane-1,6-diamine and pentanedioic acid.
   Write the balanced equation. Calculate the mass of polymer produced from $10.0\mathrm{ g}$ of
   each monomer, assuming 100% yield. **[Medium]**

4. Explain why 2-bromobutane reacts with $\mathrm{NaOH}$ in ethanol to produce a mixture of
   butan-2-ol and but-2-ene, but 2-bromo-2-methylpropane reacts under the same conditions to
   produce predominantly 2-methylpropene. Reference the relevant mechanisms in your answer.
   **[Hard]**

5. A compound $\mathrm{C}_9\mathrm{H}_{10}\mathrm{O}$ has the following spectra. IR:
   $3050\mathrm{ cm}^{-1}$, $1700\mathrm{ cm}^{-1}$, $1600$, $1580$, $1470\mathrm{ cm}^{-1}$,
   $690\mathrm{ cm}^{-1}$. $^{1}\mathrm{H}$ NMR: $\delta\ 2.6\ (s,\ 3\mathrm{H})$,
   $\delta\ 7.5$--$8.0\ (m,\ 5\mathrm{H})$, $\delta\ 9.9\ (s,\ 2\mathrm{H})$. MS:
   $\mathrm{M}^+ = 134$. Identify the compound. **[Hard]**

6. (a) Assign the CIP priority to each group on the stereocentre of 3-bromopentan-2-ol. (b) Determine
   the absolute configuration. (c) Draw both enantiomers and label them R and S. (d) Would a racemic
   mixture of this compound be optically active? **[Medium]**

7. Compare and contrast the structures and properties of low-density polyethene (LDPE) and high-density
   polyethene (HDPE). Reference the branching of polymer chains, intermolecular forces, density,
   melting point, and typical applications. **[Medium]**

8. Deduce the structure of a compound $\mathrm{C}_7\mathrm{H}_{14}\mathrm{O}$ given: IR:
   $3400\mathrm{ cm}^{-1}$ (broad), $2950\mathrm{ cm}^{-1}$ (sharp), no C=O absorption.
   $^{1}\mathrm{H}$ NMR: $\delta\ 0.9\ (t,\ 6\mathrm{H})$, $\delta\ 1.4\ (m,\ 4\mathrm{H})$,
   $\delta\ 1.6\ (s,\ 2\mathrm{H})$, $\delta\ 2.4\ (t,\ 2\mathrm{H})$.
   The signal at $\delta\ 1.6$ disappears upon $\mathrm{D}_2\mathrm{O}$ addition. **[Hard]**

---

## If You Get These Wrong, Revise:

- **VSEPR geometry and molecular shapes** → Review [./chemical-bonding-advanced](./chemical-bonding-advanced)
- **IR, MS, and NMR spectroscopy** → Review [./measurement-and-data-processing](./measurement-and-data-processing)
- **Electron configurations and orbital theory** → Review [./atomic-theory](./atomic-theory)
- **Stoichiometry of polymer reactions** → Review [./organic-chemistry/organic-chemistry](./organic-chemistry/organic-chemistry)
