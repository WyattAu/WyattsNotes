---
title: Respiration (In Depth)
description:
  "A-Level Biology notes on Respiration: glycolysis, link reaction, Krebs cycle, oxidative phosphorylation, respiratory quotient, anaerobic respiration, respiratory substrates, practical investigations."
date: 2026-04-18T00:00:00.000Z
tags:
  - Biology
  - ALevel
categories:
  - Biology
slug: respiration-depth
sidebar_position: 9
---

## Respiration (In Depth)

:::info
Board Coverage AQA Paper 1 & 2 | Edexcel A Paper 1 | OCR (A) Paper 1 | CIE Paper 4
:::

## 1. Overview of Cellular Respiration

### 1.1 Definition and Significance

Cellular respiration is the controlled release of energy from organic molecules (typically glucose) to produce ATP. It is an exergonic, enzyme-catalysed process that occurs in every living cell.

The overall equation for aerobic respiration of glucose:

$$\mathrm{C_6H_{12}O_6 + 6O_2 \to 6CO_2 + 6H_2O}$$

$$\Delta G = -2870\ \mathrm{kJ\ mol^{-1}}$$

However, not all of this energy is captured as ATP. Approximately 40% is captured (theoretical maximum approximately 38 ATP; actual yield approximately 30--32 ATP). The remainder is released as heat, which maintains body temperature in endotherms.

### 1.2 The Four Stages of Aerobic Respiration

| Stage                     | Location           | Oxygen Required? | ATP Produced (Net) | $\mathrm{CO_2}$ Produced | $\mathrm{NADH}$ Produced | $\mathrm{FADH_2}$ Produced |
| ------------------------- | ------------------ | ---------------- | ------------------ | ------------------------ | ------------------------ | -------------------------- |
| Glycolysis                | Cytoplasm          | No               | 2 (substrate-level) | 0                        | 2                        | 0                          |
| Link reaction             | Mitochondrial matrix | No             | 0                  | 2                        | 2                        | 0                          |
| Krebs cycle               | Mitochondrial matrix | No             | 2 (substrate-level) | 4                        | 6                        | 2                          |
| Oxidative phosphorylation | Inner mitochondrial membrane | Yes          | $\approx$ 26--28     | 0                        | --                       | --                         |

**Total per glucose molecule**: approximately 30--32 ATP (varies between cell types and organisms).

## 2. Glycolysis

### 2.1 Overview

Glycolysis ("sugar splitting") is the first stage of both aerobic and anaerobic respiration. It occurs in the cytoplasm and does not require oxygen. One molecule of glucose ($\mathrm{C_6H_{12}O_6}$, 6-carbon) is converted into two molecules of pyruvate ($\mathrm{CH_3COCOO^-}$, 3-carbon).

### 2.2 Detailed Steps

**Phase 1: Energy Investment (uses 2 ATP)**

**Step 1: Phosphorylation of glucose.** Glucose is phosphorylated by hexokinase (or glucokinase in the liver), using ATP:

$$\mathrm{Glucose + ATP \to glucose\text{-}6\text{-}phosphate + ADP}$$

This traps glucose inside the cell (phosphorylated glucose cannot cross the cell membrane) and makes it more reactive.

**Step 2: Isomerisation.** Glucose-6-phosphate is converted to fructose-6-phosphate by phosphoglucose isomerase. This rearranges the molecule to enable the formation of two 3-carbon compounds later.

**Step 3: Second phosphorylation.** Fructose-6-phosphate is phosphorylated by phosphofructokinase (PFK), using a second ATP:

$$\mathrm{Fructose\text{-}6\text{-}phosphate + ATP \to fructose\text{-}1,6\text{-}bisphosphate + ADP}$$

PFK is a key regulatory enzyme: it is allosterically inhibited by ATP and citrate (signalling high energy status) and activated by AMP and fructose-2,6-bisphosphate (signalling low energy status).

**Step 4: Cleavage.** Fructose-1,6-bisphosphate is cleaved by aldolase into two 3-carbon molecules: glyceraldehyde-3-phosphate (G3P, also called triose phosphate, TP) and dihydroxyacetone phosphate (DHAP).

**Step 5: Isomerisation.** DHAP is converted to G3P by triose phosphate isomerase. From this point, both molecules follow the same pathway. All subsequent steps occur twice per glucose molecule.

**Phase 2: Energy Payoff (produces 4 ATP + 2 NADH)**

**Step 6: Oxidation and phosphorylation.** Each G3P is oxidised by triose phosphate dehydrogenase, which transfers two electrons and a proton to $\mathrm{NAD^+}$, forming NADH. A phosphate group is added from inorganic phosphate ($P_i$), producing 1,3-bisphosphoglycerate:

$$\mathrm{G3P + NAD^+ + P_i \to 1,3\text{-}BPG + NADH + H^+}$$

**Step 7: Substrate-level phosphorylation (first).** Phosphoglycerate kinase transfers a phosphate group from 1,3-BPG to ADP, producing ATP and 3-phosphoglycerate:

$$\mathrm{1,3\text{-}BPG + ADP \to 3\text{-}phosphoglycerate + ATP}$$

This occurs twice per glucose, producing 2 ATP (recovering the 2 ATP invested in steps 1 and 3).

**Step 8: Rearrangement.** 3-phosphoglycerate is converted to 2-phosphoglycerate by phosphoglycerate mutase.

**Step 9: Dehydration.** 2-phosphoglycerate is converted to phosphoenolpyruvate (PEP) by enolase, releasing one molecule of $\mathrm{H_2O}$ per molecule (2 per glucose):

$$\mathrm{2\text{-}phosphoglycerate \to PEP + H_2O}$$

**Step 10: Substrate-level phosphorylation (second).** Pyruvate kinase transfers the phosphate from PEP to ADP, producing ATP and pyruvate:

$$\mathrm{PEP + ADP \to pyruvate + ATP}$$

This occurs twice per glucose, producing 2 additional ATP.

### 2.3 Summary of Glycolysis

| Input (per glucose)  | Output (per glucose)    |
| -------------------- | ----------------------- |
| 1 glucose ($\mathrm{C_6H_{12}O_6}$) | 2 pyruvate ($\mathrm{CH_3COCOO^-}$) |
| 2 ATP                | 4 ATP (net: **2 ATP**) |
| 2 $\mathrm{NAD^+}$  | 2 $\mathrm{NADH}$     |
| 2 ADP + 2 $P_i$     | 2 $\mathrm{H_2O}$     |

### 2.4 Energetics of Glycolysis

$$\Delta G^\circ_{\text{glycolysis}} = -63\ \mathrm{kJ\ mol^{-1}}$$

The reaction is exergonic overall but contains both endergonic and exergonic steps. The energy-investment steps (steps 1 and 3) are endergonic and are coupled to the exergonic hydrolysis of ATP. The energy-payoff steps (7 and 10) are exergonic and generate ATP by substrate-level phosphorylation.

:::warning
Common Pitfall Students often state that glycolysis produces "2 ATP." Glycolysis produces 4 ATP but uses 2 ATP, giving a net yield of 2 ATP. In examination answers, it is important to specify the net yield. Also, glycolysis produces 2 molecules of pyruvate, 2 NADH, and 2 $\mathrm{H_2O}$ (not just ATP).
:::

## 3. The Link Reaction

### 3.1 Mechanism

The link reaction (also called the pyruvate dehydrogenase reaction) converts pyruvate from glycolysis into acetyl coenzyme A (acetyl CoA), which enters the Krebs cycle. It occurs in the mitochondrial matrix and requires oxygen indirectly (the Krebs cycle and oxidative phosphorylation that follow require oxygen to regenerate $\mathrm{NAD^+}$ and FAD).

The reaction occurs twice per glucose molecule (one per pyruvate):

$$\mathrm{Pyruvate + CoA + NAD^+ \to acetyl\ CoA + CO_2 + NADH + H^+}$$

**Key points:**

- Pyruvate (3-carbon) loses one carbon as $\mathrm{CO_2}$ (decarboxylation).
- The remaining 2-carbon fragment (acetyl group) is transferred to coenzyme A, forming acetyl CoA.
- $\mathrm{NAD^+}$ is reduced to $\mathrm{NADH}$.
- The reaction is catalysed by the **pyruvate dehydrogenase complex**, a large multi-enzyme complex.

### 3.2 Summary per Glucose Molecule

| Input (per glucose)   | Output (per glucose)      |
| --------------------- | ------------------------- |
| 2 pyruvate            | 2 acetyl CoA             |
| 2 CoA                 | 2 $\mathrm{CO_2}$        |
| 2 $\mathrm{NAD^+}$   | 2 $\mathrm{NADH}$        |

## 4. The Krebs Cycle (Citric Acid Cycle)

### 4.1 Overview

The Krebs cycle (also called the citric acid cycle or tricarboxylic acid cycle, TCA cycle) is a series of enzyme-catalysed reactions in the mitochondrial matrix. It completes the oxidation of acetyl CoA, releasing $\mathrm{CO_2}$ and transferring high-energy electrons to $\mathrm{NAD^+}$, FAD, and ATP.

The cycle turns twice per glucose molecule (one turn per acetyl CoA).

### 4.2 Detailed Steps (Per Turn)

**Step 1: Formation of citrate.** Acetyl CoA (2-carbon) combines with oxaloacetate (4-carbon) to form citrate (6-carbon). CoA is released and recycled. Catalysed by citrate synthase.

$$\mathrm{Acetyl\ CoA + oxaloacetate + H_2O \to citrate + CoA + H^+}$$

**Step 2: Isomerisation to isocitrate.** Citrate is converted to isocitrate by aconitase. This rearrangement makes the molecule more reactive for the next step.

**Step 3: First oxidative decarboxylation.** Isocitrate is oxidised and decarboxylated by isocitrate dehydrogenase, producing $\alpha$-ketoglutarate (5-carbon), $\mathrm{CO_2}$, and NADH. This is a key regulatory step.

$$\mathrm{Isocitrate + NAD^+ \to \alpha\text{-}ketoglutarate + CO_2 + NADH + H^+}$$

**Step 4: Second oxidative decarboxylation.** $\alpha$-Ketoglutarate is oxidised and decarboxylated by the $\alpha$-ketoglutarate dehydrogenase complex, producing succinyl CoA (4-carbon), $\mathrm{CO_2}$, and NADH.

$$\mathrm{\alpha\text{-}Ketoglutarate + CoA + NAD^+ \to succinyl\ CoA + CO_2 + NADH + H^+}$$

**Step 5: Substrate-level phosphorylation.** Succinyl CoA is converted to succinate by succinyl thiokinase (succinyl CoA synthetase). The energy released by cleaving the thioester bond in succinyl CoA is used to phosphorylate GDP to GTP, which is equivalent to ATP:

$$\mathrm{Succinyl\ CoA + GDP + P_i \to succinate + GTP + CoA + H^+}$$

**Step 6: Oxidation of succinate.** Succinate is oxidised to fumarate by succinate dehydrogenase (an integral membrane protein embedded in the inner mitochondrial membrane, directly feeding electrons to the electron transport chain via FAD). FAD is reduced to $\mathrm{FADH_2}$.

$$\mathrm{Succinate + FAD \to fumarate + FADH_2}$$

**Step 7: Hydration.** Fumarate is hydrated to malate by fumarase, adding $\mathrm{H_2O}$:

$$\mathrm{Fumarate + H_2O \to malate}$$

**Step 8: Oxidation to oxaloacetate.** Malate is oxidised to oxaloacetate by malate dehydrogenase, reducing $\mathrm{NAD^+}$ to NADH. This regenerates oxaloacetate, which can accept another acetyl CoA, continuing the cycle.

$$\mathrm{Malate + NAD^+ \to oxaloacetate + NADH + H^+}$$

### 4.3 Summary Per Glucose Molecule (Two Turns)

| Input (per glucose)         | Output (per glucose)           |
| --------------------------- | ------------------------------ |
| 2 acetyl CoA (from link reaction) | 4 $\mathrm{CO_2}$            |
| 6 $\mathrm{NAD^+}$         | 6 $\mathrm{NADH}$            |
| 2 FAD                      | 2 $\mathrm{FADH_2}$          |
| 2 GDP + 2 $P_i$            | 2 GTP ($\approx$ 2 ATP)      |
| 2 oxaloacetate (regenerated) | 2 oxaloacetate (regenerated) |

### 4.4 Key Products and Their Fates

- **NADH**: carries electrons to the electron transport chain. Each NADH ultimately generates approximately 2.5 ATP.
- **$\mathrm{FADH_2}$**: carries electrons to the electron transport chain (enters at a later point). Each $\mathrm{FADH_2}$ generates approximately 1.5 ATP.
- **$\mathrm{CO_2}$**: released as a waste product; excreted via the lungs.
- **GTP/ATP**: used directly by the cell.

:::warning
Common Pitfall Students often state that the Krebs cycle produces "2 ATP." The Krebs cycle produces 2 GTP (or ATP equivalents) per glucose via substrate-level phosphorylation, plus large quantities of NADH and $\mathrm{FADH_2}$ that feed into oxidative phosphorylation. The majority of ATP from aerobic respiration comes from oxidative phosphorylation, not from the Krebs cycle.
:::

## 5. Oxidative Phosphorylation

### 5.1 Overview

Oxidative phosphorylation is the final stage of aerobic respiration. It occurs on the **inner mitochondrial membrane** (cristae) and requires oxygen as the final electron acceptor. It produces the vast majority of ATP from the oxidation of glucose.

### 5.2 The Electron Transport Chain (ETC)

The electron transport chain is a series of membrane-bound protein complexes and mobile electron carriers embedded in the inner mitochondrial membrane. Electrons from NADH and $\mathrm{FADH_2}$ pass through the chain in a series of redox reactions, releasing energy that is used to pump protons across the inner membrane.

**Components of the ETC (in order):**

1. **Complex I (NADH dehydrogenase)**: accepts electrons from NADH and passes them to ubiquinone (coenzyme Q, Q). Pumps $4\ \mathrm{H^+}$ from the matrix to the intermembrane space.

2. **Complex II (succinate dehydrogenase)**: accepts electrons from $\mathrm{FADH_2}$ (produced in the Krebs cycle) and passes them to ubiquinone. Does not pump protons.

3. **Ubiquinone (coenzyme Q)**: a lipid-soluble mobile electron carrier that shuttles electrons from Complexes I and II to Complex III.

4. **Complex III (cytochrome $bc_1$)**: receives electrons from ubiquinone and passes them to cytochrome c. Pumps $4\ \mathrm{H^+}$.

5. **Cytochrome c**: a small peripheral membrane protein that shuttles electrons from Complex III to Complex IV.

6. **Complex IV (cytochrome c oxidase)**: receives electrons from cytochrome c and transfers them to molecular oxygen ($\mathrm{O_2}$), the final electron acceptor. Oxygen combines with electrons and protons to form water:

$$\mathrm{O_2 + 4e^- + 4H^+ \to 2H_2O}$$

Complex IV pumps $2\ \mathrm{H^+}$.

### 5.3 Chemiosmotic Theory (Peter Mitchell, 1961)

The chemiosmotic theory explains how the energy from electron transport is used to synthesise ATP.

1. As electrons pass through Complexes I, III, and IV, protons ($\mathrm{H^+}$) are actively pumped from the mitochondrial matrix to the intermembrane space.
2. This creates a **proton gradient** across the inner membrane: high $\mathrm{H^+}$ concentration in the intermembrane space, low in the matrix. This is both a **chemical gradient** (difference in $\mathrm{H^+}$ concentration) and an **electrical gradient** (difference in charge).
3. The combined electrochemical gradient is called the **proton motive force (PMF)**:

$$\mathrm{PMF} = \Delta\Psi - \frac{2.303RT}{F}\Delta\mathrm{pH}$$

where $\Delta\Psi$ is the membrane potential (approximately $150$--$180\ \mathrm{mV}$) and $\Delta\mathrm{pH}$ is the pH difference across the membrane (approximately 0.5--1.0 unit).

4. Protons can only return to the matrix through **ATP synthase** (Complex V), a transmembrane protein complex that acts as a molecular motor.
5. As protons flow through ATP synthase, the flow drives the rotation of a rotor, which induces conformational changes in the catalytic domains that synthesise ATP from ADP and $P_i$:

$$\mathrm{ADP + P_i \to ATP}$$

**Proton pumping summary:**

| Source             | Protons Pumped per Molecule |
| ------------------ | --------------------------- |
| NADH via Complex I | 4                           |
| $\mathrm{FADH_2}$ via Complex II | 0 (enters at Q)        |
| Complex III        | 4                           |
| Complex IV         | 2                           |
| **Total per NADH** | **10**                      |
| **Total per $\mathrm{FADH_2}$** | **6**                  |

Approximately 3--4 protons must flow through ATP synthase to synthesise one ATP molecule (the exact number depends on the organism and conditions; a commonly cited value is $4\ \mathrm{H^+}$ per ATP: 3 for ATP synthesis and 1 for phosphate transport).

### 5.4 ATP Yield Calculation

| Stage                  | Reduced Coenzyme | ATP Yield              |
| ---------------------- | ---------------- | ---------------------- |
| Glycolysis             | 2 NADH           | $\approx 5$ ATP         |
| Link reaction          | 2 NADH           | $\approx 5$ ATP         |
| Krebs cycle            | 6 NADH           | $\approx 15$ ATP        |
| Krebs cycle            | 2 $\mathrm{FADH_2}$ | $\approx 3$ ATP       |
| Glycolysis             | --               | 2 ATP (net, substrate-level) |
| Krebs cycle            | --               | 2 GTP ($\approx$ 2 ATP, substrate-level) |
| **Total**              |                  | **$\approx$ 32 ATP**    |

Note: the actual yield in most cells is approximately 30--32 ATP per glucose molecule, lower than the theoretical maximum due to proton leakage across the inner membrane, the cost of transporting pyruvate and ADP into the mitochondria, and other inefficiencies.

### 5.5 The Role of Oxygen

Oxygen is the **final electron acceptor** in the electron transport chain. Without oxygen:

- Electrons cannot pass through Complex IV (they back up through the chain).
- Proton pumping stops, the proton gradient dissipates, and ATP synthase stops.
- NADH and $\mathrm{FADH_2}$ cannot be reoxidised to $\mathrm{NAD^+}$ and FAD.
- Without $\mathrm{NAD^+}$, the Krebs cycle and glycolysis (specifically step 6) stop.

This is why cells must switch to anaerobic respiration in the absence of oxygen.

:::warning
Common Pitfall Students often write that "oxygen is needed to make ATP." Oxygen is needed specifically as the final electron acceptor in the electron transport chain. The ATP itself is synthesised by ATP synthase, driven by the proton gradient. Oxygen's role is to keep the electron transport chain flowing so that the proton gradient is maintained.
:::

## 6. Anaerobic Respiration

### 6.1 Anaerobic Respiration in Animals (Lactate Fermentation)

In the absence of oxygen, pyruvate from glycolysis cannot enter the mitochondria for the link reaction and Krebs cycle. Instead, pyruvate is converted to **lactate** (lactic acid) by the enzyme **lactate dehydrogenase**:

$$\mathrm{Pyruvate + NADH + H^+ \to lactate + NAD^+}$$

The critical purpose of this reaction is to **regenerate $\mathrm{NAD^+}$**, allowing glycolysis to continue. Without $\mathrm{NAD^+}$, glycolysis would stop at step 6, and the cell would have no ATP production.

**ATP yield from anaerobic respiration**: 2 ATP per glucose (only from glycolysis; the link reaction, Krebs cycle, and oxidative phosphorylation do not occur).

### 6.2 Anaerobic Respiration in Yeast (Alcoholic Fermentation)

Yeast and some plant cells carry out alcoholic fermentation:

$$\mathrm{Pyruvate \xrightarrow{\text{decarboxylase}} ethanal + CO_2}$$

$$\mathrm{Ethanal + NADH + H^+ \xrightarrow{\text{alcohol dehydrogenase}} ethanol + NAD^+}$$

Products: **ethanol** and $\mathrm{CO_2}$. ATP yield: 2 ATP per glucose.

This reaction is exploited in brewing (ethanol production) and bread-making ($\mathrm{CO_2}$ production causes dough to rise).

### 6.3 Comparison of Aerobic and Anaerobic Respiration

| Feature                  | Aerobic Respiration                     | Anaerobic Respiration                   |
| ------------------------ | --------------------------------------- | --------------------------------------- |
| Oxygen required          | Yes                                     | No                                      |
| Location                 | Cytoplasm and mitochondria              | Cytoplasm only                          |
| Final electron acceptor  | Oxygen                                  | Pyruvate (in animals) / ethanal (in yeast) |
| ATP yield per glucose    | $\approx$ 30--32 ATP                    | 2 ATP                                   |
| Products                 | $\mathrm{CO_2}$, $\mathrm{H_2O}$       | Lactate (animals) / ethanol + $\mathrm{CO_2}$ (yeast) |
| Rate                     | Slower (more steps, more efficient)     | Faster (fewer steps, less efficient)    |

## 7. Respiratory Substrates

### 7.1 Different Substrates and Their Energy Values

Different respiratory substrates release different amounts of energy per unit mass:

| Substrate        | Energy Value ($\mathrm{kJ\ g^{-1}}$) | Reason for Difference                                 |
| ---------------- | ------------------------------------- | ----------------------------------------------------- |
| Carbohydrates    | $\approx 15.8$                        | Many $\mathrm{C{-}H}$ and $\mathrm{C{-}O}$ bonds; partially oxidised |
| Lipids           | $\approx 39.4$                        | More $\mathrm{C{-}H}$ bonds (higher H:C ratio); less oxidised, more energy released per gram |
| Proteins         | $\approx 17.0$                        | Similar to carbohydrates; nitrogen must be excreted (as urea) |

Lipids contain approximately 2.5 times more energy per gram than carbohydrates because they have a higher proportion of $\mathrm{C{-}H}$ bonds (which release more energy when oxidised than $\mathrm{C{-}O$ bonds). This is why lipids are preferred for long-term energy storage.

### 7.2 Respiratory Quotient (RQ)

The respiratory quotient (RQ) is the ratio of $\mathrm{CO_2}$ produced to $\mathrm{O_2}$ consumed:

$$RQ = \frac◆LB◆\text{Volume of }\mathrm{CO_2}\text{ produced}◆RB◆◆LB◆\text{Volume of }\mathrm{O_2}\text{ consumed}◆RB◆$$

For different substrates:

| Substrate               | Equation (simplified)                                                  | RQ |
| ----------------------- | ---------------------------------------------------------------------- | -- |
| Carbohydrate (glucose)  | $\mathrm{C_6H_{12}O_6 + 6O_2 \to 6CO_2 + 6H_2O}$                   | 1.0 |
| Lipid (tripalmitin)     | $\mathrm{2C_{51}H_{98}O_6 + 145O_2 \to 102CO_2 + 98H_2O}$            | $\approx 0.70$ |
| Protein (average)       | Variable; approximately $\mathrm{C_{50}H_{85}O_{23}N_{15}S}$          | $\approx 0.80$ |

**Interpreting RQ values:**

- $RQ \approx 1.0$: the organism is primarily respiring carbohydrates.
- $RQ \approx 0.7$: the organism is primarily respiring lipids.
- $RQ > 1.0$: the organism is respiring anaerobically (producing $\mathrm{CO_2}$ without consuming $\mathrm{O_2}$) or performing short bursts of intense exercise (where anaerobic respiration supplements aerobic respiration).
- $RQ \approx 0.8$: the organism is using a mixture of substrates.

### 7.3 Worked Example: Calculating RQ

A respirometer experiment shows that a germinating seedling consumes $24.0\ \mathrm{cm^3}$ of $\mathrm{O_2}$ and produces $17.0\ \mathrm{cm^3}$ of $\mathrm{CO_2}$ in 30 minutes.

$$RQ = \frac{17.0}{24.0} = 0.71$$

An RQ of 0.71 indicates that the seedling is primarily respiring lipids (using energy stores in the seed).

## 8. Factors Affecting the Rate of Respiration

### 8.1 Temperature

As temperature increases from $0\ ^\circ\mathrm{C}$ to the optimum (approximately $35$--$40\ ^\circ\mathrm{C}$), the rate of respiration increases due to increased kinetic energy and more frequent enzyme-substrate collisions. Above the optimum, enzymes denature and the rate decreases sharply. This follows the same pattern as any enzyme-catalysed reaction.

### 8.2 Substrate Concentration

Increasing glucose concentration increases the respiration rate up to a point. At very high concentrations, the rate plateaus as the enzymes involved become saturated (limited by enzyme concentration, not substrate).

### 8.3 Oxygen Concentration

Aerobic respiration rate increases with $\mathrm{O_2}$ concentration until the rate plateaus. Below a critical $\mathrm{O_2}$ concentration, aerobic respiration cannot meet energy demands, and anaerobic pathways are activated.

### 8.4 $\mathrm{CO_2}$ Concentration

High $\mathrm{CO_2}$ concentrations can inhibit respiration (competitive inhibition of enzymes such as RuBisCO in photosynthesis; in respiration, high $\mathrm{CO_2}$ can reduce enzyme activity in some tissues).

## 9. Practical Investigations: The Respirometer

### 9.1 Principle

A respirometer measures the rate of respiration by measuring either:
- The consumption of $\mathrm{O_2}$ (volume of $\mathrm{O_2}$ absorbed per unit time).
- The production of $\mathrm{CO_2}$ (volume of $\mathrm{CO_2}$ released per unit time).

### 9.2 Simple Respirometer Design

A simple respirometer consists of:
- A sealed chamber containing the respiring organism (e.g., germinating seeds or small invertebrates).
- A tube connecting the chamber to a manometer (U-tube containing coloured liquid) or a syringe.
- A chemical to absorb $\mathrm{CO_2}$ (e.g., soda lime or potassium hydroxide solution).

**Procedure:**

1. The organism is placed in the chamber with soda lime to absorb $\mathrm{CO_2}$.
2. As the organism respires, it consumes $\mathrm{O_2}$ and produces $\mathrm{CO_2}$.
3. The $\mathrm{CO_2}$ is absorbed by the soda lime, creating a pressure drop in the chamber (gas volume decreases because $\mathrm{O_2}$ is consumed but $\mathrm{CO_2}$ is removed).
4. The pressure drop causes the coloured liquid in the manometer to move towards the chamber.
5. The distance moved by the liquid is proportional to the volume of $\mathrm{O_2}$ consumed.

**Worked Example.** In a respirometer experiment, the coloured liquid in the manometer moves $28\ \mathrm{mm}$ in 10 minutes. The manometer tube has an internal diameter of $1.0\ \mathrm{mm}$.

Cross-sectional area of tube $= \pi r^2 = \pi \times (0.5)^2 = 0.785\ \mathrm{mm^2}$.

Volume of $\mathrm{O_2}$ consumed $= 0.785 \times 28 = 22.0\ \mathrm{mm^3} = 0.022\ \mathrm{cm^3}$.

Rate of $\mathrm{O_2}$ consumption $= \frac{0.022}{10} = 0.0022\ \mathrm{cm^3\ min^{-1}}$.

### 9.3 Controls and Corrections

- **Control**: a respirometer with dead organisms (boiled seeds) to account for any non-respiratory changes in gas volume (e.g., temperature fluctuations).
- **Temperature control**: the respirometer must be placed in a water bath at constant temperature to prevent thermal expansion or contraction of gases.
- **Volume correction**: the readings must be corrected for the fact that the organism produces $\mathrm{CO_2}$ that the soda lime absorbs. Without soda lime, the net gas volume change would be smaller (because $\mathrm{CO_2}$ production partially offsets $\mathrm{O_2}$ consumption).

:::warning
Common Pitfall In respirometer experiments, students often forget to include a control (with dead organisms) and fail to control temperature. Changes in ambient temperature cause gas expansion or contraction, which can be mistaken for respiration. All respirometer measurements must be conducted in a temperature-controlled water bath with an appropriate control.
:::

## Practice Problems

<details>
<summary>Problem 1</summary>
Calculate the maximum theoretical ATP yield from the complete aerobic respiration of one molecule of glucose, showing the ATP contribution from each stage. Explain why the actual yield in cells is lower than this theoretical maximum. (6 marks)

**Answer.** Glycolysis: 2 ATP (net, substrate-level) + 2 NADH $\times$ 2.5 = 5 ATP = 7 ATP. Link reaction: 2 NADH $\times$ 2.5 = 5 ATP. Krebs cycle: 2 GTP ($\approx$ 2 ATP, substrate-level) + 6 NADH $\times$ 2.5 = 15 ATP + 2 $\mathrm{FADH_2} \times$ 1.5 = 3 ATP = 20 ATP. Oxidative phosphorylation: already included above. **Total theoretical maximum $\approx$ 32 ATP** (using the P/O ratios of 2.5 for NADH and 1.5 for $\mathrm{FADH_2}$). The actual yield is lower (typically 30--32 ATP) because: (1) some protons leak across the inner mitochondrial membrane without passing through ATP synthase, reducing the proton gradient; (2) ATP is used to transport pyruvate into the mitochondria (some models show this costs 1 ATP); (3) the $\mathrm{pH}$ gradient is partially used for purposes other than ATP synthesis (e.g., heat production); (4) the exact P/O ratios may be 2.5 and 1.5 or slightly different depending on the tissue and conditions.

<b>If you get this wrong, revise:</b> [ATP Yield Calculation](#54-atp-yield-calculation)

</details>

<details>
<summary>Problem 2</summary>
A student investigates the effect of temperature on the rate of respiration in yeast. She measures the volume of $\mathrm{CO_2}$ produced in 10 minutes at different temperatures. The results are:

| Temperature ($^\circ\mathrm{C}$) | 10 | 20 | 30 | 40 | 50 | 60 |
| Volume of $\mathrm{CO_2}$ ($\mathrm{cm^3}$) | 0.5 | 1.8 | 3.6 | 4.2 | 2.1 | 0.2 |

(a) Plot a graph of rate of respiration against temperature. (b) Explain the shape of the graph. (c) Calculate the $Q_{10}$ between $20\ ^\circ\mathrm{C}$ and $30\ ^\circ\mathrm{C}$.

**Answer.** (b) The rate of respiration increases with temperature from $10$ to $40\ ^\circ\mathrm{C}$ due to increased kinetic energy of molecules and more frequent enzyme-substrate collisions. The rate is highest at approximately $40\ ^\circ\mathrm{C}$ (the optimum temperature for the yeast's respiratory enzymes). Above $40\ ^\circ\mathrm{C}$, the rate decreases sharply as the enzymes denature -- hydrogen bonds and other weak interactions maintaining tertiary structure break, the active site changes shape, and the enzyme can no longer catalyse the reaction. By $60\ ^\circ\mathrm{C}$, most enzymes are denatured and the rate is very low.

(c) $Q_{10} = \frac◆LB◆\text{Rate at } 30\ ^\circ\mathrm{C}◆RB◆◆LB◆\text{Rate at } 20\ ^\circ\mathrm{C}◆RB◆ = \frac{3.6}{1.8} = 2.0$.

The rate doubles for a $10\ ^\circ\mathrm{C}$ increase, which is typical for enzyme-catalysed reactions within the range before denaturation.

<b>If you get this wrong, revise:</b> [Factors Affecting the Rate of Respiration](#8-factors-affecting-the-rate-of-respiration)

</details>

<details>
<summary>Problem 3</summary>
Explain why anaerobic respiration is necessary in muscle cells during intense exercise, even though it produces much less ATP per glucose molecule than aerobic respiration. (4 marks)

**Answer.** During intense exercise, muscle cells require ATP at a rate that exceeds the capacity of aerobic respiration to supply it. Aerobic respiration is limited by the rate at which $\mathrm{O_2}$ can be delivered to the muscles (via the lungs and cardiovascular system) and by the number of mitochondria in the muscle fibres. Anaerobic respiration (lactate fermentation) allows glycolysis to continue in the absence of sufficient $\mathrm{O_2}$ by regenerating $\mathrm{NAD^+}$ from NADH. The conversion of pyruvate to lactate oxidises NADH back to $\mathrm{NAD^+}$, which is needed for step 6 of glycolysis (the oxidation of G3P). Although anaerobic respiration yields only 2 ATP per glucose (compared to $\approx$ 32 from aerobic respiration), it can proceed very rapidly in the cytoplasm without requiring oxygen or mitochondrial machinery, providing a rapid but short-term ATP supply to meet immediate energy demands.

<b>If you get this wrong, revise:</b> [Anaerobic Respiration in Animals](#61-anaerobic-respiration-in-animals-lactate-fermentation)

</details>

<details>
<summary>Problem 4</summary>
A respirometer containing 5 g of germinating pea seeds and soda lime shows that $3.2\ \mathrm{cm^3}$ of $\mathrm{O_2}$ is consumed in 20 minutes at $20\ ^\circ\mathrm{C}$. (a) Calculate the respiration rate per gram of tissue. (b) Calculate the respiratory quotient if $2.5\ \mathrm{cm^3}$ of $\mathrm{CO_2}$ was produced (measured in a separate respirometer without soda lime). (c) What does the RQ value suggest about the respiratory substrate?

**Answer.** (a) Rate per gram $= \frac◆LB◆3.2◆RB◆◆LB◆5 \times 20◆RB◆ = 0.032\ \mathrm{cm^3\ O_2\ g^{-1}\ min^{-1}}$.

(b) $RQ = \frac◆LB◆\text{Volume of }\mathrm{CO_2}\text{ produced}◆RB◆◆LB◆\text{Volume of }\mathrm{O_2}\text{ consumed}◆RB◆ = \frac{2.5}{3.2} = 0.78$.

(c) An RQ of 0.78 is between the values for pure carbohydrate (1.0) and pure lipid (0.7), suggesting the seeds are respiring a mixture of substrates -- primarily lipids (from energy stores in the seed) with some carbohydrate. This is expected during seed germination, where stored lipids and carbohydrates are both mobilised.

<b>If you get this wrong, revise:</b> [Respiratory Quotient](#72-respiratory-quotient-rq) and [Practical Investigations](#9-practical-investigations-the-respirometer)

</details>

<details>
<summary>Problem 5</summary>
Explain the role of the electron transport chain and chemiosmosis in oxidative phosphorylation. Include reference to the proton gradient, ATP synthase, and the fate of the electrons and protons. (6 marks)

**Answer.** NADH and $\mathrm{FADH_2}$ donate electrons to the electron transport chain (ETC), a series of protein complexes (I--IV) and mobile carriers embedded in the inner mitochondrial membrane. As electrons pass through Complexes I, III, and IV, energy is released and used to pump protons ($\mathrm{H^+}$) from the mitochondrial matrix to the intermembrane space, creating an electrochemical gradient (the proton motive force). This gradient has two components: a higher $\mathrm{H^+}$ concentration in the intermembrane space (chemical gradient) and a more positive charge there (electrical gradient). Protons can only return to the matrix through ATP synthase (Complex V), a transmembrane protein that harnesses the energy of proton flow to catalyse the phosphorylation of ADP to ATP. Meanwhile, electrons are passed along the ETC until they reach Complex IV, where they are transferred to molecular oxygen (the final electron acceptor), which combines with protons to form water. Without oxygen, the ETC backs up, the proton gradient dissipates, and ATP synthesis ceases.

<b>If you get this wrong, revise:</b> [Oxidative Phosphorylation](#5-oxidative-phosphorylation)

</details>

## 10. Detailed Energetics and Thermodynamics

### 10.1 Free Energy Changes in Respiration

The overall free energy change for aerobic respiration of glucose is approximately $-2870\ \mathrm{kJ\ mol^{-1}}$. This energy is released in stages, with each stage releasing a specific amount:

| Stage                    | $\Delta G^\circ$ ($\mathrm{kJ\ mol^{-1}}$) | ATP Yield (theoretical) | Energy Released (%) |
| ------------------------- | --------------------------------------- | ---------------------- | ------------------- |
| Glycolysis               | $-63$                                    | 7 ATP (2 net + 5 from NADH) | 2.2%               |
| Link reaction            | $-167$ (per pyruvate)                    | 5 ATP (2 NADH)          | 5.8%               |
| Krebs cycle              | $-920$ (per glucose)                     | 20 ATP (2 GTP + 6 NADH + 2 $\mathrm{FADH_2}$) | 32.1%              |
| Oxidative phosphorylation | $-2200$ (per glucose, from ETC)       | $\approx$ 26--28 ATP       | 76.6%              |

The energy released at each stage is not directly captured as ATP. The efficiency of energy capture varies:

- Substrate-level phosphorylation captures approximately 40% of the energy released in glycolysis and the Krebs cycle as ATP.
- Oxidative phosphorylation captures approximately 40% of the energy released by electron transport as ATP.
- The remaining 60% at each stage is lost as heat, maintaining body temperature.

### 10.2 Efficiency of Respiration

Overall efficiency of aerobic respiration:

$$\text{Efficiency} = \frac◆LB◆\text{Energy captured as ATP}◆RB◆◆LB◆\text{Total energy released}◆RB◆ = \frac◆LB◆30 \times 30.5◆RB◆◆LB◆2870◆RB◆ = \frac{915}{2870} = 31.9\%$$

This means approximately 68% of the energy in glucose is lost as heat. While this seems inefficient, it is sufficient for the metabolic demands of most organisms because glucose is continuously available.

### 10.3 Thermodynamic Coupling

Respiration demonstrates **thermodynamic coupling**: an exergonic reaction (the oxidation of substrates) is coupled to an endergonic reaction (the phosphorylation of ADP to ATP). The coupling agent is the proton gradient: the energy released by electron transport is temporarily stored as an electrochemical gradient, which then drives ATP synthesis.

This coupling is not 100% efficient because:
- Some protons leak back across the inner membrane without passing through ATP synthase (proton leak).
- The proton gradient is also used for other purposes (import of metabolites into the matrix via symporters).
- Some heat production is essential (thermoregulation in endotherms).

## 11. Metabolic Pathway Integration

### 11.1 Fate of Pyruvate

Pyruvate is at a metabolic crossroads. Its fate depends on cellular conditions:

**Aerobic conditions (with oxygen):**
- Pyruvate enters the mitochondria and is converted to acetyl CoA by pyruvate dehydrogenase.
- Acetyl CoA enters the Krebs cycle.

**Anaerobic conditions (without oxygen):**
- In animals: pyruvate is converted to lactate by lactate dehydrogenase.
- In yeast: pyruvate is decarboxylated to ethanal and then reduced to ethanol by alcohol dehydrogenase.

**Fatty acid oxidation (beta-oxidation):**
- Fatty acids are broken down in the mitochondrial matrix by the removal of 2-carbon units as acetyl CoA.
- Each round of beta-oxidation produces 1 $\mathrm{FADH_2}$, 1 NADH, and 1 acetyl CoA.
- The acetyl CoA enters the Krebs cycle.
- Fatty acids yield more ATP per gram than carbohydrates (see Section 7.1).

**Amino acid catabolism:**
- Amino acids are deaminated (amino group removed as ammonia, converted to urea in the liver).
- The carbon skeleton is converted to intermediates of glycolysis or the Krebs cycle (pyruvate, acetyl CoA, $\alpha$-ketoglutarate, succinyl CoA, oxaloacetate).
- This explains the caloric value of proteins ($\approx 17\ \mathrm{kJ\ g^{-1}}$).

### 11.2 The Cori Cycle

During intense exercise, lactate produced by anaerobic respiration in muscles diffuses into the bloodstream and is carried to the **liver**. In the liver, lactate is converted back to pyruvate, which is converted to glucose by gluconeogenesis (requiring ATP). The glucose is released back into the blood and taken up by muscles. This cycle is called the **Cori cycle**.

The net effect of the Cori cycle is to transport lactate from muscles to the liver for conversion back to glucose, at the cost of ATP in the liver. The oxygen debt accumulated during exercise must be "repaid" after exercise by continued elevated breathing to oxidise the lactate that accumulated.

### 11.3 Respiratory Control: Allosteric Regulation

**Phosphofructokinase (PFK)** is the key regulatory enzyme of glycolysis:

- **Activated by**: AMP (signals low ATP), fructose-2,6-bisphosphate (signals high glucose availability), ADP.
- **Inhibited by**: ATP (signals sufficient energy), citrate (signals abundant TCA cycle intermediates), low pH.

When ATP is abundant, PFK is inhibited, slowing glycolysis. When ATP is depleted (high AMP), PFK is activated, accelerating glycolysis. This ensures that glycolysis runs only when the cell needs more ATP.

**Pyruvate dehydrogenase** (link reaction) and **isocitrate dehydrogenase** and **$\alpha$-ketoglutarate dehydrogenase** (Krebs cycle) are also regulated by product inhibition and covalent modification (phosphorylation/dephosphorylation by kinases/phosphatases).

## 12. Practical Investigations in Detail

### 12.1 Measuring the Rate of Respiration

**Using a respirometer with soda lime:**

When soda lime is present, $\mathrm{CO_2}$ is absorbed, so the volume change measured represents only $\mathrm{O_2}$ consumption. This simplifies calculations because the only gas exchange occurring is $\mathrm{O_2}$ uptake.

**Without soda lime:**

If no $\mathrm{CO_2}$ absorbent is used, the volume change is the net difference between $\mathrm{O_2}$ consumed and $\mathrm{CO_2}$ produced. For carbohydrate substrates where $RQ = 1$, this is zero (volumes cancel). For lipid substrates where $RQ < 1$, the measured volume change underestimates $\mathrm{O_2}$ consumption.

$$\text{True}\ \mathrm{O_2}\text{consumption} = \text{Measured volume change} \times \frac{1}{1 - RQ}$$

### 12.2 Worked Example: Determining the Respiratory Substrate

A respirometer with soda lime measures an $\mathrm{O_2}$ consumption of $3.0\ \mathrm{cm^3}$ in 20 minutes. A separate respirometer without soda lime measures a net volume change of $1.5\ \mathrm{cm^3}$ in the same time.

From the soda lime respirometer: $\mathrm{O_2}$ consumed $= 3.0\ \mathrm{cm^3}$.

From the non-soda lime respirometer: net volume change $= \mathrm{O_2}$ consumed $- \mathrm{CO_2}$ produced $= 1.5\ \mathrm{cm^3}$.

Therefore: $\mathrm{CO_2}$ produced $= 3.0 - 1.5 = 1.5\ \mathrm{cm^3}$.

$$RQ = \frac{1.5}{3.0} = 0.50$$

An RQ of 0.50 suggests a mix of carbohydrate and lipid substrates being respired. A purely carbohydrate substrate would give $RQ = 1.0$; a purely lipid substrate would give $RQ \approx 0.7$. An RQ of 0.50 is lower than expected for either pure substrate, which may indicate the use of protein as a respiratory substrate (average protein $RQ \approx 0.8$) or experimental error.

### 12.3 Control Variables in Respirometer Experiments

| Variable Type     | Examples                              | How to Control                                |
| --------------- | ------------------------------------- | --------------------------------------------- |
| Independent       | Substrate type, organism mass, temperature | Use the same substrate; weigh organisms carefully; use water bath |
| Controlled        | Atmospheric pressure, time of day        | Record conditions; run at the same time of day       |
| Dependent         | Volume change (manometer movement)        | Measure carefully with ruler or Vernier scale       |
| Standardised      | Water bath temperature                 | Thermostatically controlled water bath              |

### 12.4 Sources of Error

- Evaporation of water from the respiring organism adds gas to the system, overestimating respiration rate.
- Temperature fluctuations cause thermal expansion/contraction of gases.
- Leaks in the apparatus reduce accuracy.
- Soda lime may become saturated (limited $\mathrm{CO_2}$ absorption capacity).
- The organism may not be at a steady state of respiration at the start of the experiment.

## 13. Comparison of Aerobic and Anaerobic Respiration: Quantitative Analysis

### 13.1 ATP Yield Per Glucose Molecule

| Source                         | ATP Per Glucose | Percentage of Total |
| ------------------------------ | -------------- | ------------------ |
| Glycolysis (net)              | 2               | 6%                 |
| Link reaction (2 NADH)        | 5                | 16%                |
| Krebs cycle (2 GTP + 2 $\mathrm{FADH_2}$ + 6 NADH) | 20          | 62%                |
| Oxidative phosphorylation     | 26--28           | 81--88%             |
| **Total**                      | **30--32**       | **100%**            |

### 13.2 ATP Yield Per Fatty Acid

**Worked Example: Palmitic acid ($\mathrm{C_{16}H_{32}O_2}$).**

Palmitic acid undergoes 7 rounds of beta-oxidation, producing 7 acetyl CoA, 7 $\mathrm{FADH_2}$, and 7 NADH:

- Beta-oxidation products: 7 $\mathrm{FADH_2} \times 1.5 = 10.5$ ATP; 7 NADH $\times 2.5 = 17.5$ ATP.
- 7 acetyl CoA enter the Krebs cycle: $7 \times$ (3 ATP from 3 NADH + 1 ATP from 1 $\mathrm{FADH_2}$ + 1 GTP) = $7 \times 5 = 35$ ATP.
- Activation cost: 2 ATP (to convert fatty acid to fatty acyl CoA in the cytoplasm).

Total ATP $= 10.5 + 17.5 + 35 - 2 = 61$ ATP.

Energy value: $61 \times 30.5 = 1860.5\ \mathrm{kJ\ mol^{-1}}$.

Compare with glucose: $32 \times 30.5 = 976\ \mathrm{kJ\ mol^{-1}}$.

Palmitic acid (256 $\mathrm{g\ mol^{-1}}$) produces approximately $1860\ \mathrm{kJ\ mol^{-1}$, or $7.27\ \mathrm{kJ\ g^{-1}}$. Glucose (180 $\mathrm{g\ mol^{-1}}$) produces approximately $976\mathrm{kJ\ mol^{-1}}$, or $5.42\ \mathrm{kJ\ g^{-1}}$.

Fatty acids produce approximately 1.3 times more energy per gram than glucose, consistent with their higher energy value ($\approx 39\ \mathrm{kJ\ g^{-1}}$ vs $\approx 15.8\ \mathrm{kJ\ g^{-1}}$).

### 13.3 The Oxygen Debt

During intense exercise, the body's $\mathrm{O_2}$ supply is insufficient to meet ATP demand. The body switches to anaerobic respiration, accumulating lactate. The **oxygen debt** is the volume of $\mathrm{O_2}$ required to oxidise the accumulated lactate after exercise.

**Worked Example.** A runner accumulates $500\ \mathrm{mg}$ of lactate during a sprint.

The oxidation of lactate:

$$\mathrm{C_3H_6O_3 + 3O_2 \to 3CO_2 + 3H_2O}$$

Molar mass of lactate $= 90\ \mathrm{g\ mol^{-1}}$.

Moles of lactate $= \frac{0.500}{90} = 0.00556\ \mathrm{mol}$.

$\mathrm{O_2}$ required $= 0.00556 \times 3 = 0.0167\ \mathrm{mol}$.

Volume of $\mathrm{O_2}$ at room temperature (assuming $1\ \mathrm{mol}$ gas $\approx 24\ \mathrm{dm^3}$):

$$V = 0.0167 \times 24 = 0.40\ \mathrm{dm^3} = 400\ \mathrm{cm^3}$$

The runner must breathe an additional $400\ \mathrm{cm^3}$ of $\mathrm{O_2}$ above resting requirements to fully repay the oxygen debt.

:::warning
Common Pitfall Students often forget that the oxygen debt is not simply the volume of $\mathrm{O_2}$ that was "missed" during exercise. It is specifically the $\mathrm{O_2}$ needed to oxidise the lactate that accumulated due to anaerobic respiration. The volume of $\mathrm{O_2}$ consumed during exercise (from aerobic respiration) is not part of the oxygen debt -- it has already been "paid."
:::

## 14. Mitochondrial Structure and Adaptations

### 14.1 Mitochondrial Anatomy

| Structure | Description | Function |
| --------- | ----------- | -------- |
| Outer membrane | Smooth, permeable to small molecules ($< 5\ \mathrm{kDa}$) via porin channels | Contains the organelle; allows passage of metabolites |
| Intermembrane space | Space between outer and inner membranes | Site of proton accumulation (proton gradient) |
| Inner membrane | Highly folded into **cristae**; impermeable to ions without transport proteins | Site of the electron transport chain and ATP synthase; the folds increase surface area for these complexes |
| Matrix | Inner compartment; contains circular DNA, ribosomes, enzymes of the Krebs cycle and link reaction | Site of the Krebs cycle, link reaction, and fatty acid oxidation; semi-autonomous (can produce some of its own proteins) |

### 14.2 Mitochondria and Aerobic Capacity

Tissues with high aerobic demand have more mitochondria per cell:

| Tissue | Approximate Mitochondria per Cell | Reason |
| ------ | -------------------------------- | ------ |
| Cardiac muscle | $\approx 5000$ | Continuous aerobic respiration; cannot tolerate anaerobic conditions |
| Liver hepatocytes | $\approx 1000$--$2000$ | High metabolic activity (detoxification, protein synthesis, glycogen metabolism) |
| Skeletal muscle (type I fibres) | $\approx 1000$--$3000$ | Slow-twitch, fatigue-resistant fibres adapted for endurance |
| Skeletal muscle (type IIb fibres) | $\approx 200$--$500$ | Fast-twitch, fatigable fibres adapted for short bursts of activity |
| Red blood cells | 0 | No mitochondria (to make room for haemoglobin and to avoid using the $\mathrm{O_2}$ they carry) |

### 14.3 Endosymbiosis Theory

Mitochondria are thought to have originated from free-living aerobic bacteria that were engulfed by a larger anaerobic host cell approximately 2 billion years ago (the **endosymbiosis theory**, proposed by Lynn Margulis).

Evidence supporting endosymbiosis:

| Evidence | Explanation |
| -------- | ----------- |
| Double membrane | The outer membrane is from the host cell; the inner membrane is the original bacterial membrane |
| Circular DNA | Mitochondrial DNA is circular (like bacterial DNA), not linear like nuclear DNA |
| 70S ribosomes | Mitochondrial ribosomes are 70S (bacterial size), not 80S (eukaryotic size) |
| Reproduction by binary fission | Mitochondria divide independently of the cell by binary fission, similar to bacteria |
| Antibiotic sensitivity | Mitochondrial protein synthesis is inhibited by antibiotics that target bacteria (e.g., chloramphenicol, tetracycline) |
| Phylogenetic analysis | Mitochondrial DNA sequences are most similar to those of alpha-proteobacteria (e.g., _Rickettsia_) |

## 15. Respiratory Inhibitors and Poisons

### 15.1 Electron Transport Chain Inhibitors

| Inhibitor | Target | Effect |
| --------- | ------ | ------ |
| Cyanide ($\mathrm{CN^-}$) | Binds to the $\mathrm{Fe^{3+}}$ in the haem group of Complex IV (cytochrome c oxidase) | Blocks electron transfer to $\mathrm{O_2}$; $\mathrm{O_2}$ cannot be reduced to $\mathrm{H_2O}$; ETC backs up, proton gradient dissipates, ATP synthesis ceases; cells die from ATP depletion and $\mathrm{O_2}$ cannot be used (histotoxic hypoxia) |
| Carbon monoxide (CO) | Binds to $\mathrm{Fe^{2+}}$ in Complex IV (and to haemoglobin) | Similar to cyanide but less potent; blocks electron transfer to $\mathrm{O_2}$ |
| Rotenone | Blocks electron transfer from Complex I to ubiquinone (coenzyme Q) | Electrons cannot enter the ETC from Complex I; NADH cannot be oxidised; $\mathrm{FADH_2}$ can still feed electrons via Complex II |
| Antimycin A | Blocks electron transfer from cytochrome $b$ to cytochrome $c_1$ in Complex III | Both NADH and $\mathrm{FADH_2}$ electrons are blocked |
| Oligomycin | Blocks the proton channel in ATP synthase ($\mathrm{F_0}$ subunit) | Protons cannot flow back through ATP synthase; proton gradient builds up, eventually stopping the ETC (back pressure) |
| DNP (2,4-dinitrophenol) | Uncouples oxidative phosphorylation | DNP is a lipophilic molecule that carries $\mathrm{H^+}$ across the inner membrane, dissipating the proton gradient. Electrons continue to flow through the ETC (and $\mathrm{O_2}$ consumption increases), but no ATP is produced. Energy is released as heat instead. |

### 15.2 Cyanide Poisoning: Mechanism and Treatment

Cyanide binds with very high affinity to the ferric ($\mathrm{Fe^{3+}}$) state of cytochrome $a a_3$ (Complex IV), preventing the transfer of electrons to molecular oxygen. Without Complex IV function:

- $\mathrm{O_2}$ cannot be reduced to $\mathrm{H_2O}$.
- The entire ETC backs up (electrons cannot flow from Complex I or III).
- NADH and $\mathrm{FADH_2}$ cannot be oxidised, so the Krebs cycle and link reaction also stop (NAD$^+$ and FAD are not regenerated).
- ATP production ceases, and cells die rapidly. The brain and heart are most affected (highest $\mathrm{O_2}$ demand).

Treatment involves:
- **Amyl nitrite** or **sodium nitrite**: converts some haemoglobin to methaemoglobin ($\mathrm{Fe^{3+}}$), which has a higher affinity for cyanide than cytochrome oxidase. Cyanide dissociates from cytochrome oxidase and binds to methaemoglobin instead.
- **Sodium thiosulfate**: provides sulphur to convert cyanide to thiocyanate ($\mathrm{SCN^-}$), which is much less toxic and is excreted in urine.

### 15.3 Uncoupling and Thermogenesis

**Brown adipose tissue (BAT)** in mammals contains large numbers of mitochondria with a unique protein called **uncoupling protein 1 (UCP1, thermogenin)**. UCP1 forms a proton channel in the inner mitochondrial membrane, allowing $\mathrm{H^+}$ to flow back into the matrix without passing through ATP synthase.

The proton gradient is dissipated as heat instead of being used to make ATP. This is called **non-shivering thermogenesis** and is particularly important in newborn infants (who have limited ability to shiver) and in hibernating animals.

Newborns have more brown fat relative to body weight than adults. Brown fat is located around the neck, shoulders, and spine, where it can warm the blood supplying the brain and spinal cord.

## 16. Anaerobic Respiration in Other Organisms

### 16.1 Yeast Fermentation

_Yeast_ (_Saccharomyces cerevisiae_) is a facultative anaerobe: it can respire aerobically or anaerobically.

**Anaerobic respiration in yeast (alcoholic fermentation):**

$$\text{Glucose} \to 2\ \text{ethanol} + 2\ \mathrm{CO_2} + 2\ \text{ATP}$$

This is used in:
- **Bread making**: $\mathrm{CO_2}$ produced causes the dough to rise (leavening). The ethanol evaporates during baking.
- **Brewing**: yeast ferments sugars in malted barley (or grapes) to produce ethanol. The process is carried out under anaerobic conditions to ensure ethanol production (if $\mathrm{O_2}$ is present, yeast will respire aerobically, producing $\mathrm{CO_2}$ and $\mathrm{H_2O}$ instead of ethanol, reducing the alcohol yield).

### 16.2 Lactate Fermentation in Animals

$$\text{Glucose} \to 2\ \text{lactate} + 2\ \text{ATP}$$

Lactate fermentation occurs in:
- **Skeletal muscle** during intense exercise (when $\mathrm{O_2}$ supply is insufficient for aerobic respiration).
- **Red blood cells** (which have no mitochondria and rely entirely on anaerobic glycolysis for ATP).
- **Some bacteria** (_Lactobacillus_) are used in the production of yoghurt, cheese, and sauerkraut.

### 16.3 Comparing the ATP Yield

| Process | ATP per Glucose | End Products | Efficiency |
| ------- | -------------- | ------------ | ---------- |
| Aerobic respiration | 30--32 | $\mathrm{CO_2} + \mathrm{H_2O}$ | 31.9% |
| Anaerobic respiration (lactate) | 2 | Lactate | 2.0% |
| Anaerobic respiration (alcohol) | 2 | Ethanol + $\mathrm{CO_2}$ | 2.0% |

Anaerobic respiration is extremely inefficient compared to aerobic respiration. However, it has the advantage of speed (glycolysis can produce ATP much faster than the full aerobic pathway) and does not require $\mathrm{O_2}$.

## 17. The Link Reaction: Detailed Mechanism

### 17.1 The Pyruvate Dehydrogenase Complex

The link reaction converts pyruvate to acetyl CoA and is catalysed by the **pyruvate dehydrogenase complex** (PDC), a massive multi-enzyme complex containing three enzymes and five coenzymes:

| Enzyme | Coenzyme | Reaction |
| ------ | -------- | -------- |
| Pyruvate dehydrogenase (E1) | **TPP** (thiamine pyrophosphate, derived from vitamin $\mathrm{B_1}$) | Decarboxylates pyruvate; transfers the hydroxyethyl group to lipoamide |
| Dihydrolipoyl transacetylase (E2) | **Lipoic acid** (lipoamide) | Transfers the acetyl group to CoA, forming acetyl CoA |
| Dihydrolipoyl dehydrogenase (E3) | **FAD** (derived from vitamin $\mathrm{B_2}$), **NAD^+** | Reoxidises lipoamide, producing $\mathrm{FADH_2}$ and then NADH |

Additional coenzyme: **CoA** (coenzyme A, derived from pantothenic acid, vitamin $\mathrm{B_5}$).

Overall: $\text{Pyruvate} + \text{CoA} + \text{NAD}^+ \to \text{acetyl CoA} + \mathrm{CO_2} + \text{NADH} + \text{H}^+$

### 17.2 Vitamin Deficiencies and Respiration

Because several coenzymes are derived from vitamins, vitamin deficiencies impair respiration:

| Vitamin | Coenzyme | Deficiency Disease | Effect on Respiration |
| ------- | -------- | ------------------ | --------------------- |
| $\mathrm{B_1}$ (thiamine) | TPP (pyruvate dehydrogenase) | Beriberi, Wernicke-Korsakoff syndrome | Pyruvate cannot be converted to acetyl CoA; accumulates, causing neurological damage |
| $\mathrm{B_2}$ (riboflavin) | FAD (Complex II) | Ariboflavinosis | $\mathrm{FADH_2}$ cannot donate electrons to the ETC |
| $\mathrm{B_3}$ (niacin) | $\mathrm{NAD^+}$/NADH | Pellagra | NAD$^+$ deficiency impairs glycolysis, link reaction, Krebs cycle, and ETC |
| $\mathrm{B_5}$ (pantothenic acid) | CoA | Rare | Impairs link reaction and Krebs cycle |

:::warning
Common Pitfall Students often state that the link reaction produces 2 ATP. It does not produce any ATP directly. It produces 2 $\mathrm{CO_2}$ and 2 NADH per glucose molecule. The NADH subsequently yields approximately 5 ATP via oxidative phosphorylation. Similarly, the Krebs cycle produces no ATP directly -- it produces 2 GTP (which are equivalent to ATP) and 6 NADH + 2 $\mathrm{FADH_2}$.
:::

## 22. Exercise Physiology: Respiration in Practice

### 22.1 The Oxygen Debt Revisited

During intense exercise, the body's $\mathrm{O_2}$ demand exceeds supply. The body switches to anaerobic respiration, producing lactate. The **oxygen debt** has two components:

1. **Alactacid oxygen debt (fast component):** the $\mathrm{O_2}$ needed to restore ATP and creatine phosphate stores, and to reload myoglobin with $\mathrm{O_2}$. This is repaid within minutes after exercise stops.

2. **Lactacid oxygen debt (slow component):** the $\mathrm{O_2}$ needed to oxidise accumulated lactate in the liver (via the Cori cycle). This takes hours to repay fully.

**Worked Example.** A runner completes a 400 m sprint in 50 seconds. During the sprint, their respiration rate was insufficient to meet ATP demand, so anaerobic respiration contributed significantly to ATP production.

If the runner's peak $\mathrm{O_2}$ consumption during the sprint was $4.0\ \mathrm{L\ min^{-1}}$ and their resting $\mathrm{O_2}$ consumption is $0.25\ \mathrm{L\ min^{-1}}$:

Total $\mathrm{O_2}$ consumed during sprint $= (4.0 - 0.25) \times \frac{50}{60} = 3.75 \times 0.833 = 3.125\ \mathrm{L}$.

$\mathrm{O_2}$ deficit (oxygen that would have been consumed at peak rate if it had been maintained): this is difficult to calculate precisely, but if the total ATP demand during the sprint was met by aerobic respiration alone, the required $\mathrm{O_2}$ would have been approximately 8 L.

Estimated lactate production: $8 - 3.125 \approx 5\ \mathrm{L\ O_2}$ equivalent.

To oxidise 5 L of lactate (assuming 1 mole $\mathrm{O_2}$ per mole of lactate): this would require extended elevated breathing after the sprint to repay the lactacid debt.

### 22.2 Training and Respiration

**Endurance training** (e.g., marathon running) causes adaptations that improve aerobic capacity:

| Adaptation | Effect on Respiration |
| ---------- | --------------------- |
| Increased number of mitochondria in muscle cells | More ATP from aerobic respiration; delayed onset of anaerobic respiration |
| Increased myoglobin concentration | Greater $\mathrm{O_2}$ storage in muscles |
| Increased capillary density | Shorter diffusion distance for $\mathrm{O_2}$ from capillaries to mitochondria |
| Increased cardiac output (stroke volume) | Greater $\mathrm{O_2}$ delivery to muscles |
| Increased haemoglobin concentration | Greater $\mathrm{O_2}$-carrying capacity of blood |
| Increased oxidative enzyme activity (citrate synthase, cytochrome c oxidase) | Faster Krebs cycle and ETC |

**Sprint training** (e.g., 100 m sprint) causes adaptations that improve anaerobic capacity:

| Adaptation | Effect |
| ---------- | ------ |
| Increased muscle glycogen stores | More substrate for glycolysis |
| Increased creatine phosphate stores | More rapid ATP regeneration at the start of exercise |
| Increased glycolytic enzyme activity (phosphofructokinase, lactate dehydrogenase) | Faster glycolysis; more rapid lactate production |
| Increased lactate tolerance | Muscles can function at lower pH for longer before fatigue |
| Increased fast-twitch muscle fibre size | Greater force production per contraction |

### 22.3 VO2 Max

**$\dot{V}\mathrm{O_2}$ max** (maximal oxygen uptake) is the maximum rate of $\mathrm{O_2}$ consumption during exercise. It is a measure of cardiorespiratory fitness.

Typical values:

| Individual | $\dot{V}\mathrm{O_2}$ max ($\mathrm{mL\ kg^{-1}\ min^{-1}}$) |
| --------- | ----- |
| Untrained young male | 35--45 |
| Trained endurance athlete | 60--80 |
| Elite endurance athlete (e.g., Tour de France cyclist) | 80--90 |
| Untrained young female | 30--40 |
| Trained female endurance athlete | 50--70 |

$\dot{V}\mathrm{O_2}$ max is determined by the **Fick equation**:

$$\dot{V}\mathrm{O_2\ max} = Q \times (C_a - C_v)$$

Where $Q$ = cardiac output (L/min), $C_a$ = arterial $\mathrm{O_2}$ content, $C_v$ = venous $\mathrm{O_2}$ content. The difference $(C_a - C_v)$ is the **arteriovenous $\mathrm{O_2}$ difference**.

---

:::tip
Diagnostic Test

## 21. Comparing Respiration and Photosynthesis

### 21.1 Key Similarities

| Feature | Respiration | Photosynthesis |
| ------- | ----------- | -------------- |
| Location of ETC | Inner mitochondrial membrane | Thylakoid membrane |
| Energy transduction | Chemical energy $\to$ ATP + heat | Light energy $\to$ chemical energy (ATP, NADPH) |
| Electron carriers | NADH, $\mathrm{FADH_2}$, ubiquinone, cytochromes | Photosystems, plastoquinone, plastocyanin, ferredoxin |
| Chemiosmosis | Proton gradient across inner membrane drives ATP synthase | Proton gradient across thylakoid membrane drives ATP synthase |
| Enzyme types | Reductases, oxidases, synthases, dehydrogenases | Kinases, carboxylases, reductases, synthases |

### 21.2 Key Differences

| Feature | Respiration | Photosynthesis |
| ------- | ----------- | -------------- |
| Overall equation | $\mathrm{C_6H_{12}O_6 + 6O_2 \to 6CO_2 + 6H_2O + ATP}$ | $6\mathrm{CO_2 + 6H_2O + light \to C_6H_{12}O_6 + 6O_2}$ |
| Energy change | Exergonic ($\Delta G < 0$) | Endergonic ($\Delta G > 0$) |
| Carbon source | Organic molecules (glucose, fatty acids, amino acids) | Inorganic ($\mathrm{CO_2}$) |
| Electron source | Organic molecules (NADH, $\mathrm{FADH_2}$) | Water (photolysis) |
| Electron acceptor | $\mathrm{O_2}$ (reduced to $\mathrm{H_2O}$) | $\mathrm{NADP^+}$ (reduced to NADPH) |
| ATP role | Product (energy currency) | Intermediate (used to drive Calvin cycle) |
| $\mathrm{CO_2}$ role | Waste product | Raw material |

### 21.3 The Carbon Cycle: Linking Respiration and Photosynthesis

Respiration and photosynthesis are complementary processes that drive the global carbon cycle:

$$6\mathrm{CO_2 + 6H_2O \xrightleftharpoons[\text{respiration}]{\text{photosynthesis}} C_6H_{12}O_6 + 6O_2}$$

In the short term, the two processes are approximately balanced: the $\mathrm{O_2}$ produced by photosynthesis is approximately equal to the $\mathrm{O_2}$ consumed by respiration, and the $\mathrm{CO_2}$ consumed by photosynthesis is approximately equal to the $\mathrm{CO_2}$ produced by respiration.

However, over geological time scales, imbalances have occurred:
- Photosynthesis exceeded respiration during the Carboniferous period, when vast amounts of organic carbon were buried as coal, oil, and natural gas, and atmospheric $\mathrm{O_2}$ rose to its current level (21%).
- Burning fossil fuels releases this stored carbon as $\mathrm{CO_2}$, reversing the ancient imbalance and increasing atmospheric $\mathrm{CO_2}$.

---

:::tip
Diagnostic Test

## 18. The Krebs Cycle: Detailed Mechanism

### 18.1 Steps of the Krebs Cycle (per Acetyl CoA)

1. **Acetyl CoA (2C) + oxaloacetate (4C) $\to$ citrate (6C)**: catalysed by citrate synthase. This condensation reaction joins the 2-carbon acetyl group to the 4-carbon oxaloacetate, forming 6-carbon citrate.

2. **Citrate $\to$ isocitrate (6C)**: catalysed by aconitase. Citrate is isomerised to isocitrate via the intermediate cis-aconitate.

3. **Isocitrate $\to$ $\alpha$-ketoglutarate (5C)**: catalysed by isocitrate dehydrogenase. This is the first oxidative decarboxylation step: $\mathrm{CO_2}$ is released, NAD$^+$ is reduced to NADH, and a 5-carbon compound is produced. This is a key regulatory step.

4. **$\alpha$-Ketoglutarate (5C) $\to$ succinyl CoA (4C)**: catalysed by $\alpha$-ketoglutarate dehydrogenase complex (similar mechanism to the pyruvate dehydrogenase complex). Second oxidative decarboxylation: $\mathrm{CO_2}$ released, NADH produced, CoA-SH added.

5. **Succinyl CoA $\to$ succinate (4C)**: catalysed by succinyl CoA synthetase. **Substrate-level phosphorylation**: GDP is phosphorylated to GTP (equivalent to ATP).

6. **Succinate $\to$ fumarate (4C)**: catalysed by succinate dehydrogenase. $\mathrm{FAD}$ is reduced to $\mathrm{FADH_2}$. This is the only enzyme of the Krebs cycle that is embedded in the inner mitochondrial membrane (it is also Complex II of the ETC).

7. **Fumarate $\to$ malate (4C)**: catalysed by fumarase. Water is added across the double bond of fumarate.

8. **Malate $\to$ oxaloacetate (4C)**: catalysed by malate dehydrogenase. NAD$^+$ is reduced to NADH. The cycle is now complete, and oxaloacetate is regenerated to accept another acetyl CoA.

### 18.2 Summary of Products (per glucose)

The Krebs cycle turns twice per glucose (one turn per acetyl CoA):

| Product | Per Turn | Per Glucose |
| ------- | -------- | ----------- |
| $\mathrm{CO_2}$ | 2 | 4 |
| NADH | 3 | 6 |
| $\mathrm{FADH_2}$ | 1 | 2 |
| GTP (ATP equivalent) | 1 | 2 |
| Oxaloacetate regenerated | 1 | 1 (per turn) |

### 18.3 Regulation of the Krebs Cycle

The Krebs cycle is regulated by three key enzymes:

| Enzyme | Activated By | Inhibited By |
| ------ | ----------- | ------------ |
| Citrate synthase | ADP (signals low energy) | ATP, NADH, succinyl CoA, citrate (product inhibition) |
| Isocitrate dehydrogenase | ADP, $\mathrm{Ca^{2+}}$ | ATP, NADH |
| $\alpha$-Ketoglutarate dehydrogenase | $\mathrm{Ca^{2+}}$ | ATP, NADH, succinyl CoA |

When the cell has abundant ATP (high energy charge), NADH, and succinyl CoA, the Krebs cycle slows down. When ATP is depleted (high ADP), the cycle speeds up.

## 19. Electron Transport Chain: Detailed Mechanism

### 19.1 Complex I (NADH Dehydrogenase)

- Receives electrons from NADH.
- Transfers electrons to ubiquinone (coenzyme Q, Q).
- Pumps 4 $\mathrm{H^+}$ from the matrix to the intermembrane space per NADH.
- Inhibitor: rotenone (a pesticide).

### 19.2 Complex II (Succinate Dehydrogenase)

- Receives electrons from $\mathrm{FADH_2}$ (produced by succinate dehydrogenase in the Krebs cycle).
- Transfers electrons to ubiquinone.
- **Does not pump protons** (no proton gradient contribution from this step).
- This is why $\mathrm{FADH_2}$ yields fewer ATP than NADH.

### 19.3 Ubiquinone (Coenzyme Q)

A small, lipid-soluble molecule that diffuses freely within the inner mitochondrial membrane, carrying electrons from Complex I and Complex II to Complex III.

### 19.4 Complex III (Cytochrome $bc_1$ Complex)

- Receives electrons from ubiquinol (reduced ubiquinone, $\mathrm{QH_2}$).
- Transfers electrons to cytochrome $c$.
- Pumps 4 $\mathrm{H^+}$ per electron pair (via the Q cycle).
- Inhibitor: antimycin A.

### 19.5 Cytochrome $c$

A small protein that diffuses along the surface of the inner membrane, carrying electrons from Complex III to Complex IV.

### 19.6 Complex IV (Cytochrome c Oxidase)

- Receives electrons from cytochrome $c$.
- Transfers electrons to the final electron acceptor: molecular $\mathrm{O_2}$.
- $\mathrm{O_2} + 4e^- + 4\mathrm{H^+} \to 2\mathrm{H_2O}$.
- Pumps 2 $\mathrm{H^+}$ per electron pair.
- Inhibitors: cyanide, carbon monoxide, azide.

### 19.7 Total Proton Pumping per Glucose

| Source | Protons Pumped |
| ------ | ------------- |
| 10 NADH $\times 4\ \mathrm{H^+}$ (Complex I) | 40 |
| 2 $\mathrm{FADH_2} \times 0\ \mathrm{H^+}$ (Complex II) | 0 |
| 12 electron pairs $\times 4\ \mathrm{H^+}$ (Complex III) | 48 |
| 12 electron pairs $\times 2\ \mathrm{H^+}$ (Complex IV) | 24 |
| 4 $\mathrm{H^+}$ from 2 NADH used in the Krebs cycle + 4 $\mathrm{H^+}$ from 2 NADH from the link reaction (released into the matrix) | 8 |
| **Total** | **120** |

Actually, a simpler calculation: per NADH, 10 $\mathrm{H^+}$ are pumped (4 at Complex I + 4 at Complex III + 2 at Complex IV). Per $\mathrm{FADH_2}$, 6 $\mathrm{H^+}$ are pumped (0 at Complex II + 4 at Complex III + 2 at Complex IV).

Total $\mathrm{H^+}$ pumped $= 10 \times 10 + 2 \times 6 = 112$.

Plus 4 $\mathrm{H^+}$ from the transport of phosphate and ADP into the matrix, and 3 $\mathrm{H^+}$ transported per ATP synthesised by ATP synthase.

ATP yield from NADH: $\frac{10}{4} = 2.5$ ATP. ATP yield from $\mathrm{FADH_2}$: $\frac{6}{4} = 1.5$ ATP.

**Total ATP from glucose:** $2$ (glycolysis) + $2 \times 2.5$ (link reaction NADH) + $2$ (Krebs cycle GTP) + $6 \times 2.5$ (Krebs cycle NADH) + $2 \times 1.5$ (Krebs cycle $\mathrm{FADH_2}$) $= 2 + 5 + 2 + 15 + 3 = 27$ ATP.

Using the updated P/O ratios (2.5 for NADH, 1.5 for $\mathrm{FADH_2}$): approximately 27--30 ATP per glucose.

Note: the actual yield is variable and depends on the tissue (the proton leak reduces the theoretical maximum). In practice, the yield is approximately 25--28 ATP per glucose in most mammalian cells.

## 20. Alternative Respiratory Substrates

### 20.1 Fatty Acid Oxidation ($\beta$-Oxidation)

Fatty acids are broken down in the mitochondrial matrix by the sequential removal of 2-carbon units:

1. **Activation**: the fatty acid is converted to fatty acyl CoA by fatty acyl CoA synthetase, consuming 2 ATP equivalents (ATP $\to$ AMP + PPi).
2. **Transport**: the fatty acyl CoA is transported across the inner mitochondrial membrane by the **carnitine shuttle**.
3. **$\beta$-Oxidation spiral**: each cycle removes 2 carbons as acetyl CoA and produces 1 NADH and 1 $\mathrm{FADH_2}$.

**Worked Example: Palmitic acid ($\mathrm{C_{16}}$, saturated).**

Number of $\beta$-oxidation cycles $= \frac{16}{2} - 1 = 7$ (the last cycle produces 2 acetyl CoA directly).

Products from $\beta$-oxidation: 7 $\mathrm{FADH_2}$, 7 NADH, 8 acetyl CoA.

ATP from $\beta$-oxidation: $7 \times 1.5 + 7 \times 2.5 = 10.5 + 17.5 = 28$ ATP.

ATP from 8 acetyl CoA in Krebs cycle: $8 \times (3 \times 2.5 + 1 \times 1.5 + 1) = 8 \times 10 = 80$ ATP.

Minus activation cost: $-2$ ATP.

**Total from palmitic acid: $28 + 80 - 2 = 106$ ATP.**

### 20.2 Amino Acid Catabolism

After deamination (removal of the amino group by transaminases or deaminases), the carbon skeletons of amino acids enter metabolic pathways at various points:

| Entry Point | Amino Acids |
| ----------- | ----------- |
| Pyruvate | Alanine, serine, cysteine, glycine, threonine |
| Acetyl CoA | Leucine, lysine, isoleucine, tryptophan |
| $\alpha$-Ketoglutarate | Glutamate, glutamine, proline, arginine, histidine |
| Succinyl CoA | Methionine, isoleucine, valine, threonine |
| Fumarate | Phenylalanine, tyrosine |
| Oxaloacetate | Aspartate, asparagine |

The amino group is converted to ammonia ($\mathrm{NH_3}$), which is highly toxic. In the liver, ammonia is converted to urea by the **ornithine cycle** (urea cycle):

$$2\mathrm{NH_3} + \mathrm{CO_2} + 3\mathrm{ATP} \to \text{urea}(\mathrm{CO(NH_2)_2}) + 2\mathrm{H_2O} + 3\mathrm{ADP} + 2\mathrm{P_i}$$

Urea is less toxic than ammonia, relatively soluble in water, and excreted by the kidneys.

## 21. Respiratory Quotient (RQ) and Metabolic Rate

### 21.1 Respiratory Quotient

The respiratory quotient (RQ) is the ratio of $\mathrm{CO_2}$ produced to $\mathrm{O_2}$ consumed during respiration:

$$\mathrm{RQ} = \frac◆LB◆\text{volume of } \mathrm{CO_2} \text{ produced}◆RB◆◆LB◆\text{volume of } \mathrm{O_2} \text{ consumed}◆RB◆$$

| Substrate | RQ | Explanation |
| --------- | -- | ----------- |
| Carbohydrates | 1.0 | $\mathrm{C_6H_{12}O_6 + 6O_2 \to 6CO_2 + 6H_2O}$: ratio is 6:6 |
| Lipids | $\approx 0.7$ | More $\mathrm{O_2}$ needed per $\mathrm{CO_2}$ produced because lipids are more reduced (more H per C) |
| Proteins | $\approx 0.8--0.9$ | Intermediate between carbohydrates and lipids |
| Anaerobic respiration | $\infty$ | $\mathrm{CO_2}$ is produced but no $\mathrm{O_2}$ is consumed |

**Example calculation:** An organism consumes $240\ \mathrm{cm^3}$ of $\mathrm{O_2}$ and produces $192\ \mathrm{cm^3}$ of $\mathrm{CO_2}$.

$$\mathrm{RQ} = \frac{192}{240} = 0.8$$

This indicates a mixture of carbohydrate and lipid (or protein) is being respired.

### 21.2 Basal Metabolic Rate (BMR)

BMR is the rate of energy expenditure at rest in a thermoneutral environment, after fasting. It is measured in $\mathrm{kJ\ day^{-1}}$ or $\mathrm{kW}$.

Factors affecting BMR:

| Factor | Effect | Explanation |
| ------ | ------ | ----------- |
| Body mass | Positive correlation | Larger animals have more metabolically active tissue; BMR $\propto \text{mass}^{0.75}$ (Kleiber's law) |
| Age | Decreases with age | Muscle mass decreases; metabolic activity of tissues decreases |
| Sex | Males have higher BMR | Higher proportion of muscle mass; higher testosterone |
| Thyroid hormone levels | Positive correlation | Thyroid hormones increase metabolic rate (T3 increases Na+/K+ pump activity) |
| Body temperature | Positive correlation (Q10 effect) | Higher temperature increases enzyme activity; BMR increases by approximately 10--13% per degree C above normal |
| Diet | Can increase BMR | Protein has the highest thermic effect (20--30% of energy used in digestion) |
| Pregnancy | Increases BMR | Foetal growth; increased maternal tissue metabolism |

### 21.3 Measuring Metabolic Rate

**Respirometry:** measures $\mathrm{O_2}$ consumption and/or $\mathrm{CO_2}$ production.

- **Simple respirometer (e.g., with woodlice):** the organism is placed in a sealed tube connected to a manometer (or a capillary tube with coloured liquid). As $\mathrm{O_2}$ is consumed, the coloured liquid moves. The volume of $\mathrm{O_2}$ consumed is calculated from the distance moved.
- **$\mathrm{CO_2}$ must be absorbed** (e.g., with soda lime or potassium hydroxide) to ensure that any movement of the liquid is due only to $\mathrm{O_2}$ consumption (not $\mathrm{CO_2}$ production).

**Precautions:**
- Use a control tube (without organism) to account for temperature/pressure changes.
- Allow the organism to acclimatise before measuring.
- Repeat measurements and calculate a mean.

## 22. Respiration and Exercise

### 22.1 Energy Systems During Exercise

| Exercise Intensity | Dominant Energy System | Fuel | Duration |
| ------------------ | ---------------------- | ---- | -------- |
| Rest / low intensity | Aerobic respiration | Mainly fatty acids (and some glucose) | Hours |
| Moderate intensity | Aerobic respiration | Mainly glucose (from glycogen and blood glucose) | 30 min -- 2 hours |
| High intensity (short burst) | Anaerobic glycolysis + PCr system | Glucose; phosphocreatine | 10 seconds -- 3 minutes |
| Maximal intensity (sprint) | Phosphocreatine (PCr) system | PCr (stores phosphate for rapid ATP regeneration) | 0--10 seconds |

### 22.2 The Oxygen Debt and EPOC

During intense exercise, the body cannot supply $\mathrm{O_2}$ fast enough for aerobic respiration, so anaerobic respiration supplements ATP production. The accumulation of lactate and the depletion of $\mathrm{O_2}$ stores create an **oxygen debt** (now more accurately called **excess post-exercise oxygen consumption, EPOC**).

**Components of EPOC:**

1. **Lactate removal**: lactate is transported to the liver and converted back to glucose via the **Cori cycle** (gluconeogenesis). This requires ATP (hence $\mathrm{O_2}$ consumption).
2. **Replenishing $\mathrm{O_2}$ stores**: myoglobin in muscles, haemoglobin in blood, and dissolved $\mathrm{O_2}$ in plasma must be replenished.
3. **Replenishing PCr stores**: phosphocreatine must be resynthesised (requires ATP).
4. **Elevated body temperature**: increased metabolic rate due to elevated temperature and hormone levels (catecholamines, thyroid hormones).
5. **Increased heart rate and breathing rate**: persist for some time after exercise.

### 22.3 Training Adaptations

| Adaptation | Effect | Mechanism |
| ---------- | ------ | --------- |
| Increased cardiac output | More $\mathrm{O_2}$ delivered to muscles per minute | Increased stroke volume (heart hypertrophy) |
| Increased mitochondrial density | More sites for aerobic respiration | Endurance training stimulates mitochondrial biogenesis |
| Increased myoglobin concentration | Greater $\mathrm{O_2}$ storage in muscles | Enhanced $\mathrm{O_2}$ diffusion from blood to mitochondria |
| Increased capillary density | Greater $\mathrm{O_2}$ delivery to muscle fibres | Angiogenesis (new blood vessel formation) |
| Increased glycogen storage | More fuel available for glycolysis | Training increases glycogen synthase activity |
| Increased oxidative enzyme activity | Faster Krebs cycle and ETC | Upregulation of enzymes (e.g., citrate synthase, cytochrome c oxidase) |

## 23. Respiration Inhibitors and Poisons

### 23.1 Inhibitors of the Electron Transport Chain

| Inhibitor | Target | Effect | Source |
| --------- | ------ | ------ | ------ |
| Cyanide ($\mathrm{CN^-}$) | Cytochrome c oxidase (Complex IV) | Blocks electron transfer to $\mathrm{O_2}$; $\mathrm{O_2}$ cannot be reduced to $\mathrm{H_2O}$; ETC backs up, proton gradient cannot be maintained, ATP production stops | Industrial chemicals; some plants (cassava, apple seeds contain cyanogenic glycosides) |
| Carbon monoxide (CO) | Cytochrome c oxidase (Complex IV) | Binds to $\mathrm{Fe^{3+}}$ in cytochrome c oxidase, preventing $\mathrm{O_2}$ binding | Incomplete combustion of fossil fuels |
| Rotenone | Complex I (NADH dehydrogenase) | Blocks electron transfer from NADH to ubiquinone | Plant-derived insecticide |
| Antimycin A | Complex III (cytochrome bc1) | Blocks electron transfer from ubiquinone to cytochrome c | Fungal antibiotic |
| Oligomycin | ATP synthase (Complex V) | Blocks the proton channel in ATP synthase, preventing ATP synthesis | Antibiotic |
| DNP (2,4-dinitrophenol) | Uncouples ETC from ATP synthesis | Carries protons across the inner mitochondrial membrane, dissipating the proton gradient as heat. ETC continues (even faster than normal) but no ATP is produced. Energy is released as heat. | Historically used as a weight-loss drug (dangerous: hyperthermia, death) |

:::warning
Common Pitfall Students often confuse respiratory inhibitors with respiratory poisons. An inhibitor (e.g., cyanide) stops the ETC entirely, so no ATP is produced and $\mathrm{O_2}$ consumption drops. An uncoupler (e.g., DNP) allows the ETC to continue (so $\mathrm{O_2}$ consumption increases) but prevents ATP synthesis. The difference is that inhibitors block electron flow, while uncouplers dissipate the proton gradient.
:::

### 23.2 Effect of Cyanide on Respiration: A Worked Example

If cyanide is added to a suspension of mitochondria respiring on pyruvate:

| Parameter | Before cyanide | After cyanide |
| --------- | -------------- | ------------- |
| $\mathrm{O_2}$ consumption | Normal | Drops to zero (electrons cannot reach $\mathrm{O_2}$) |
| ATP production | Normal | Drops to zero (proton gradient cannot be maintained) |
| NADH concentration | Low (rapidly oxidised by ETC) | Increases (NADH cannot be oxidised because ETC is blocked) |
| $\mathrm{CO_2}$ production | Normal | Initially continues (Krebs cycle continues briefly), then stops (NAD$^+$ is depleted as NADH accumulates) |
| Heat production | Normal (some heat from ETC) | Decreases (ETC stops) |

### 23.3 Effect of DNP on Respiration

If DNP is added to a suspension of mitochondria:

| Parameter | Before DNP | After DNP |
| --------- | ---------- | --------- |
| $\mathrm{O_2}$ consumption | Normal | Increases (ETC runs faster to try to rebuild the proton gradient) |
| ATP production | Normal | Drops to zero (proton gradient is dissipated) |
| NADH concentration | Low | Low or decreases (ETC is still functioning, just uncoupled from ATP synthesis) |
| Heat production | Normal | Increases dramatically (energy from ETC released as heat) |
| $\mathrm{CO_2}$ production | Normal | Increases (Krebs cycle runs faster to supply NADH and $\mathrm{FADH_2}$ to the faster-running ETC) |

## 24. Mitochondrial Structure and Respiration Efficiency

### 24.1 Mitochondrial Anatomy

| Structure | Description | Function |
| --------- | ----------- | -------- |
| Outer membrane | Permeable to molecules up to 5 kDa (porins) | Contains porin channels for free diffusion of small molecules |
| Intermembrane space | Between outer and inner membranes | Site of proton accumulation; similar ionic composition to cytosol |
| Inner membrane | Highly folded (cristae); impermeable to most ions and small molecules | Site of the electron transport chain, ATP synthase, and transport proteins; cristae increase surface area |
| Matrix | Interior of the mitochondrion | Site of the link reaction, Krebs cycle, and fatty acid oxidation; contains mitochondrial DNA (circular), 70S ribosomes, enzymes |

### 24.2 Adaptations of Mitochondria to Their Function

1. **Cristae**: the inner membrane is folded into cristae, greatly increasing the surface area for the ETC and ATP synthase. Cells with high energy demands (e.g., cardiac muscle cells, sperm cells) have mitochondria with more densely packed cristae.
2. **Double membrane**: the inner membrane is impermeable to $\mathrm{H^+}$ ions, allowing the maintenance of a proton gradient.
3. **Own DNA and ribosomes**: mitochondria can produce some of their own proteins (they code for 13 proteins involved in the ETC). Most mitochondrial proteins are encoded by nuclear DNA and imported.
4. **Matrix enzymes**: high concentration of enzymes for the Krebs cycle and link reaction.

### 24.3 Mitochondria and Endosymbiosis

Like chloroplasts, mitochondria are thought to have evolved from free-living aerobic bacteria engulfed by a larger host cell (endosymbiotic theory). Evidence:

1. Mitochondria have their own circular DNA (16.5 kbp in humans, encoding 13 proteins).
2. Mitochondria have 70S ribosomes (bacterial type, sensitive to chloramphenicol).
3. Mitochondria are surrounded by a double membrane.
4. Mitochondria reproduce by binary fission.
5. Mitochondrial DNA is maternally inherited (sperm mitochondria are destroyed after fertilisation).

### 24.4 Mitochondrial Diseases

Mutations in mitochondrial DNA (mtDNA) cause a range of diseases because mitochondria are essential for ATP production in all tissues:

| Disease | Mutation | Symptoms |
| ------- | -------- | -------- |
| Leber's hereditary optic neuropathy (LHON) | Point mutations in mtDNA genes encoding Complex I subunits | Sudden loss of central vision in young adults |
| MELAS (mitochondrial encephalomyopathy, lactic acidosis, stroke-like episodes) | Point mutation in tRNA-Leu gene | Stroke-like episodes, muscle weakness, seizures |
| MERRF (myoclonic epilepsy with ragged-red fibres) | Point mutation in tRNA-Lys gene | Epilepsy, muscle weakness, deafness, ataxia |

Because mtDNA is maternally inherited, all children of an affected mother will inherit the mutation, but no children of an affected father will. The severity of mitochondrial diseases depends on **heteroplasmy**: the proportion of mutant vs normal mtDNA in each cell.

## 25. The Link Reaction and Krebs Cycle: Step-by-Step

### 25.1 The Link Reaction (Pyruvate Decarboxylation)

Location: mitochondrial matrix.

$$\text{Pyruvate (3C)} + \mathrm{NAD^+} + \text{CoA} \to \text{acetyl CoA (2C)} + \mathrm{CO_2} + \mathrm{NADH}$$

For each glucose molecule, the link reaction occurs twice (one for each pyruvate).

Key points:
- Pyruvate is decarboxylated (1 carbon removed as $\mathrm{CO_2}$).
- Pyruvate is dehydrogenated ($\mathrm{NAD^+}$ reduced to $\mathrm{NADH}$).
- The remaining 2-carbon fragment is attached to coenzyme A (CoA-SH) to form acetyl CoA.
- The enzyme complex is pyruvate dehydrogenase; it requires 5 coenzymes: $\mathrm{NAD^+}$, FAD, CoA, thiamine pyrophosphate (TPP, derived from vitamin $\mathrm{B_1}$), and lipoic acid.

### 25.2 The Krebs Cycle (Citric Acid Cycle): Step-by-Step

Location: mitochondrial matrix.

| Step | Reaction | Products |
| ---- | -------- | -------- |
| 1 | Acetyl CoA (2C) + oxaloacetate (4C) $\to$ citrate (6C) | CoA released |
| 2 | Citrate $\to$ isocitrate (6C) | (isomerisation) |
| 3 | Isocitrate $\to$ $\alpha$-ketoglutarate (5C) | $\mathrm{NADH}$, $\mathrm{CO_2}$ |
| 4 | $\alpha$-Ketoglutarate (5C) $\to$ succinyl CoA (4C) | $\mathrm{NADH}$, $\mathrm{CO_2}$, CoA |
| 5 | Succinyl CoA $\to$ succinate (4C) | ATP (or GTP) via substrate-level phosphorylation |
| 6 | Succinate $\to$ fumarate (4C) | $\mathrm{FADH_2}$ |
| 7 | Fumarate $\to$ malate (4C) | $\mathrm{H_2O}$ added |
| 8 | Malate $\to$ oxaloacetate (4C) | $\mathrm{NADH}$ |

**Per glucose (two turns of the cycle):**

| Product | Per Turn | Per Glucose |
| ------- | -------- | ----------- |
| $\mathrm{CO_2}$ | 2 | 4 |
| $\mathrm{NADH}$ | 3 | 6 |
| $\mathrm{FADH_2}$ | 1 | 2 |
| ATP | 1 | 2 |

### 25.3 Coenzymes in Respiration

| Coenzyme | Full Name | Function | Vitamin Precursor |
| -------- | --------- | -------- | ----------------- |
| $\mathrm{NAD^+}$/NADH | Nicotinamide adenine dinucleotide | Electron carrier (accepts 2 electrons and 1 $\mathrm{H^+}$); carries electrons to Complex I of ETC | Niacin ($\mathrm{B_3}$) |
| FAD/$\mathrm{FADH_2}$ | Flavin adenine dinucleotide | Electron carrier (accepts 2 electrons and 2 $\mathrm{H^+}$); carries electrons to Complex II of ETC | Riboflavin ($\mathrm{B_2}$) |
| CoA (Coenzyme A) | Coenzyme A | Carries acetyl groups (2C) to the Krebs cycle | Pantothenic acid ($\mathrm{B_5}$) |
| NADP$^+$/NADPH | Nicotinamide adenine dinucleotide phosphate | Electron carrier in photosynthesis (light reactions); used in biosynthetic reactions (fatty acid synthesis) | Niacin ($\mathrm{B_3}$) |
| TPP | Thiamine pyrophosphate | Coenzyme for pyruvate dehydrogenase and transketolase | Thiamine ($\mathrm{B_1}$) |

## 26. Anaerobic Respiration: Detailed Comparison

### 26.1 Anaerobic Respiration in Yeast (Fermentation)

Yeast carries out alcoholic fermentation in the absence of $\mathrm{O_2}$:

$$\text{Glucose} \to 2\text{ pyruvate} \to 2\text{ ethanol} + 2\mathrm{CO_2} + 2\text{ ATP}$$

Steps:
1. Glycolysis produces 2 pyruvate, 2 ATP (net), and 2 NADH.
2. Pyruvate is decarboxylated by pyruvate decarboxylase to acetaldehyde (ethanal) + $\mathrm{CO_2}$.
3. Acetaldehyde is reduced to ethanol by alcohol dehydrogenase, regenerating $\mathrm{NAD^+}$ from NADH.

The regeneration of $\mathrm{NAD^+}$ is essential: without it, glycolysis would stop (no $\mathrm{NAD^+}$ available to accept electrons).

**Applications:** brewing (beer, wine); baking (the $\mathrm{CO_2}$ produced causes dough to rise); biofuel production (bioethanol).

### 26.2 Anaerobic Respiration in Mammalian Muscle

Mammalian muscle cells carry out lactate fermentation during intense exercise:

$$\text{Glucose} \to 2\text{ pyruvate} \to 2\text{ lactate} + 2\text{ ATP}$$

Steps:
1. Glycolysis produces 2 pyruvate, 2 ATP (net), and 2 NADH.
2. Pyruvate is reduced to lactate by lactate dehydrogenase, regenerating $\mathrm{NAD^+}$ from NADH.

Lactate accumulates in the muscle and blood, lowering pH (causing fatigue and cramp). Lactate is transported to the liver via the blood and converted back to pyruvate (then glucose) by the Cori cycle.

### 26.3 Comparison of Aerobic and Anaerobic Respiration

| Feature | Aerobic Respiration | Anaerobic Respiration |
| ------- | ------------------- | --------------------- |
| $\mathrm{O_2}$ required? | Yes | No |
| Location | Cytoplasm + mitochondria | Cytoplasm only |
| Final electron acceptor | $\mathrm{O_2}$ (forms $\mathrm{H_2O}$) | Pyruvate (or its derivative) |
| ATP yield (per glucose) | Approximately 30--32 ATP | 2 ATP (net) |
| Products | $\mathrm{CO_2}$ + $\mathrm{H_2O}$ | Ethanol + $\mathrm{CO_2}$ (yeast) or lactate (muscle) |
| Speed | Slower (requires ETC and many steps) | Faster (glycolysis only) |
| Duration | Sustained | Short-term (limited by lactate accumulation and substrate depletion) |

## 27. Glycolysis: Detailed Step-by-Step

### 27.1 The Two Phases of Glycolysis

Glycolysis occurs in the cytoplasm and does not require $\mathrm{O_2}$. It consists of two phases:

**Phase 1: Energy investment (uses 2 ATP)**

| Step | Reaction | Enzyme | Key Points |
| ---- | -------- | ------- | ---------- |
| 1 | Glucose (6C) $\to$ glucose-6-phosphate (6C) | Hexokinase | Glucose is "trapped" in the cell (phosphorylated; cannot cross the membrane); uses 1 ATP |
| 2 | Glucose-6-phosphate $\to$ fructose-6-phosphate (6C) | Phosphoglucose isomerase | Isomerisation (aldose $\to$ ketose) |
| 3 | Fructose-6-phosphate $\to$ fructose-1,6-bisphosphate (6C) | Phosphofructokinase (PFK) | Rate-limiting step; uses 1 ATP; PFK is allosterically inhibited by ATP and citrate; stimulated by AMP |
| 4 | Fructose-1,6-bisphosphate $\to$ 2 $\times$ triose phosphate (3C) | Aldolase | Hexose is split into two triose phosphates: dihydroxyacetone phosphate (DHAP) and glyceraldehyde-3-phosphate (G3P); DHAP is converted to G3P (triose phosphate isomerase) |
| **Total ATP used** | **2 ATP** (per glucose; 1 per triose phosphate) | | |

**Phase 2: Energy payoff (produces 4 ATP + 2 NADH)**

| Step | Reaction | Enzyme | Key Points |
| ---- | -------- | ------- | ---------- |
| 5 | Triose phosphate (3C) + $\mathrm{NAD^+}$ + $\mathrm{P_i}$ $\to$ 1,3-bisphosphoglycerate (3C) + NADH | Triose phosphate dehydrogenase | Oxidation (NAD$^+$ reduced) and phosphorylation; produces 2 NADH per glucose |
| 6 | 1,3-bisphosphoglycerate + ADP $\to$ 3-phosphoglycerate (3C) + ATP | Phosphoglycerate kinase | Substrate-level phosphorylation; produces 2 ATP per glucose |
| 7 | 3-phosphoglycerate $\to$ 2-phosphoglycerate (3C) | Phosphoglycerate mutase | Rearrangement |
| 8 | 2-phosphoglycerate $\to$ phosphoenolpyruvate (PEP, 3C) + $\mathrm{H_2O}$ | Enolase | Dehydration; produces a high-energy phosphate bond |
| 9 | PEP + ADP $\to$ pyruvate (3C) + ATP | Pyruvate kinase | Substrate-level phosphorylation; produces 2 ATP per glucose; irreversible step |
| **Total ATP produced** | **4 ATP** (per glucose; 2 per triose phosphate) | | |

**Net ATP yield from glycolysis: 4 - 2 = 2 ATP per glucose.**

### 27.2 Regulation of Glycolysis

The three irreversible steps (1, 3, and 9) are the regulatory points:

| Enzyme | Regulator | Effect |
| ------ | --------- | ------ |
| Hexokinase (step 1) | Inhibited by glucose-6-phosphate (product inhibition) | Prevents accumulation of glucose-6-phosphate when downstream steps are slow |
| Phosphofructokinase (step 3) | Inhibited by ATP, citrate; stimulated by AMP, ADP, fructose-2,6-bisphosphate | Key regulatory enzyme; ensures glycolysis only runs when ATP is needed |
| Pyruvate kinase (step 9) | Inhibited by ATP, alanine; stimulated by fructose-1,6-bisphosphate (feed-forward activation) | Ensures glycolysis products are only produced when energy is needed |

## 28. Oxidative Phosphorylation: Detailed Electron Transport Chain

### 28.1 Complexes and Carriers

| Complex/Carrier | Composition | Function | Protons Pumped |
| --------------- | ----------- | -------- | ------------- |
| Complex I (NADH dehydrogenase) | 44 subunits; contains FMN and Fe-S clusters | Accepts electrons from NADH; passes to ubiquinone | 4 |
| Complex II (succinate dehydrogenase) | 4 subunits; contains FAD and Fe-S clusters | Accepts electrons from $\mathrm{FADH_2}$ (from Krebs cycle); passes to ubiquinone | 0 |
| Ubiquinone (Q / coenzyme Q) | Lipid-soluble carrier (mobile in inner membrane) | Carries electrons from Complex I/II to Complex III | 0 |
| Complex III (cytochrome $bc_1$) | 11 subunits; contains cytochromes $b$ and $c_1$, and Fe-S cluster | Passes electrons from ubiquinone to cytochrome $c$ | 4 |
| Cytochrome $c$ | Small soluble protein (mobile in intermembrane space) | Carries electrons from Complex III to Complex IV | 0 |
| Complex IV (cytochrome c oxidase) | 14 subunits; contains cytochromes $a$ and $a_3$, and Cu ions | Accepts electrons from cytochrome $c$; reduces $\mathrm{O_2}$ to $\mathrm{H_2O}$ | 2 |
| ATP synthase (Complex V) | F$_0$ (membrane-embedded) + F$_1$ (matrix side) | Uses proton gradient to phosphorylate ADP to ATP | 0 (utilises gradient) |

### 28.2 Proton Motive Force and ATP Yield

**Total $\mathrm{H^+}$ pumped per NADH:** 4 (Complex I) + 4 (Complex III) + 2 (Complex IV) = 10 $\mathrm{H^+}$.

**Total $\mathrm{H^+}$ pumped per $\mathrm{FADH_2}$:** 0 (Complex II) + 4 (Complex III) + 2 (Complex IV) = 6 $\mathrm{H^+}$.

**ATP synthase stoichiometry:** approximately 4 $\mathrm{H^+}$ per ATP (3 $\mathrm{H^+}$ for ATP synthesis + 1 $\mathrm{H^+}$ for phosphate transport).

**ATP yield per NADH:** $10 / 4 = 2.5$ ATP.

**ATP yield per $\mathrm{FADH_2}$:** $6 / 4 = 1.5$ ATP.

### 28.3 Total ATP Yield per Glucose

| Stage | NADH | $\mathrm{FADH_2}$ | ATP (direct) | ATP from oxidative phosphorylation |
| ----- | ---- | ---------- | ----------- | --------------------------------- |
| Glycolysis | 2 NADH (cytoplasmic) | 0 | 2 | $2 \times 1.5 = 3$ (shuttle cost) or $2 \times 2.5 = 5$ |
| Link reaction | 2 NADH (matrix) | 0 | 0 | $2 \times 2.5 = 5$ |
| Krebs cycle | 6 NADH (matrix) | 2 $\mathrm{FADH_2}$ | 2 | $(6 \times 2.5) + (2 \times 1.5) = 18$ |
| **Total** | **10 NADH** | **2 $\mathrm{FADH_2}$** | **4** | **26--30** |

**Total ATP yield: approximately 30--32 ATP per glucose** (depending on the shuttle used for cytoplasmic NADH).

## 29. Integration of Metabolism: The Big Picture

### 29.1 Metabolic Map: Key Junctions

```
                    ┌── Fatty acids ──→ β-oxidation ──→ acetyl CoA ──┐
                    │                                            │
Carbohydrates ──→ Glucose ──→ Glycolysis ──→ Pyruvate ──→ acetyl CoA ──┼── Krebs cycle ──→ CO2
                    │                                            │              │
Proteins ──→ Amino acids ──→ various entry points ────────────────┘              │
                                                                         │
                                                                    ETC ──→ ATP + H2O
```

### 29.2 Key Metabolic Pathway Interconnections

| Pathway | Connects To | Shared Intermediates |
| ------- | ---------- | ------------------- |
| Glycolysis | Link reaction; fermentation; lipid synthesis | Pyruvate; G3P; DHAP |
| Link reaction | Krebs cycle | Acetyl CoA; $\mathrm{CO_2}$; NADH |
| Krebs cycle | ETC; amino acid synthesis | Citrate; $\alpha$-ketoglutarate; oxaloacetate; succinyl CoA |
| $\beta$-oxidation | Krebs cycle | Acetyl CoA; $\mathrm{FADH_2}$; NADH |
| Gluconeogenesis | Glycolysis (reverse) | Pyruvate; oxaloacetate; G3P; fructose-6-phosphate; glucose-6-phosphate |
| Calvin cycle | Glycolysis (reverse, in plants) | G3P; glucose |
| Urea cycle | Krebs cycle (fumarate) | Fumarate; aspartate; ornithine; citrulline |

### 29.3 Metabolic Flexibility

The body can switch between metabolic fuels depending on circumstances:

| Condition | Primary Fuel | Why |
| --------- | ------------ | --- |
| Resting / low intensity | Fatty acids | More energy per gram; spares glucose for the brain |
| Moderate exercise | Glucose (from glycogen) + fatty acids | Mix of fuels for optimal efficiency |
| High-intensity exercise | Glucose (glycogen) + PCr | Faster ATP production; anaerobic glycolysis supplements |
| Fasting / starvation (first 1--3 days) | Glycogen (liver and muscle) | Glycogen stores are rapidly depleted |
| Prolonged fasting (> 3 days) | Fatty acids + ketone bodies | Liver converts fatty acids to ketone bodies (acetoacetate, $\beta$-hydroxybutyrate) which can cross the blood-brain barrier and be used by the brain |

## 30. The Cori Cycle and Oxygen Debt

### 30.1 The Oxygen Debt

During intense exercise, muscles may not receive enough $\mathrm{O_2}$ for aerobic respiration. Anaerobic respiration occurs:

$$\text{Glucose} \to 2\ \text{lactate} + 2\ \text{ATP}$$

The oxygen debt is the amount of extra $\mathrm{O_2}$ required after exercise to:

1. Oxidise the accumulated lactate back to pyruvate (which enters the Krebs cycle or is converted to glucose via gluconeogenesis).
2. Resynthesise ATP and phosphocreatine (PCr) stores.
3. Replace glycogen stores in the liver and muscles.

### 30.2 The Cori Cycle

The Cori cycle describes the recycling of lactate between muscles and the liver:

| Step | Location | Process |
| ---- | -------- | ------- |
| 1 | Muscle (during exercise) | Glucose $\to$ pyruvate $\to$ lactate (anaerobic respiration) |
| 2 | Blood | Lactate transported from muscles to liver via bloodstream |
| 3 | Liver (after exercise) | Lactate $\to$ pyruvate (via LDH); pyruvate $\to$ glucose (via gluconeogenesis; costs 6 ATP per glucose) |
| 4 | Blood | Glucose transported from liver back to muscles |

**Net ATP from the Cori cycle:**
- Muscle gains: 2 ATP per glucose (from glycolysis $\to$ lactate).
- Liver spends: 6 ATP per glucose (gluconeogenesis).
- **Net: 4 ATP consumed per glucose recycled** -- this is the metabolic cost of the Cori cycle.

:::warning
Common Pitfall
The Cori cycle is NOT energetically favourable. The liver spends more ATP making glucose than the muscles gain from breaking it down. The benefit is that it prevents dangerous lactate accumulation in the blood and recycles carbon skeletons.
:::

## 31. Respiratory Quotient (RQ)

### 31.1 Definition and Calculation

The respiratory quotient is the ratio of $\mathrm{CO_2}$ produced to $\mathrm{O_2}$ consumed:

$$\mathrm{RQ} = \frac◆LB◆\text{Volume of } \mathrm{CO_2} \text{ produced}◆RB◆◆LB◆\text{Volume of } \mathrm{O_2} \text{ consumed}◆RB◆$$

### 31.2 RQ Values for Different Substrates

| Substrate | Balanced Equation | RQ | Explanation |
| --------- | ---------------- | -- | ----------- |
| Carbohydrate (glucose) | $\mathrm{C_6H_{12}O_6 + 6O_2 \to 6CO_2 + 6H_2O}$ | 1.0 | Equal moles of $\mathrm{CO_2}$ and $\mathrm{O_2}$ |
| Lipid (triglyceride, generalised) | $\mathrm{C_{55}H_{104}O_6 + 78O_2 \to 55CO_2 + 52H_2O}$ | ~0.7 | More $\mathrm{O_2}$ needed per $\mathrm{CO_2}$ (lipids are more reduced, requiring more oxidation) |
| Protein (amino acid, average) | Variable | ~0.8--0.9 | Depends on amino acid composition; contains nitrogen which is excreted as urea |
| Anaerobic respiration | Glucose $\to$ 2 lactate + 2 ATP | $\infty$ | $\mathrm{CO_2}$ produced without $\mathrm{O_2}$ consumption (actually RQ is undefined; in practice, some $\mathrm{CO_2}$ comes from buffering) |
| Succulent plants (CAM) | Variable | ~0 (dark) to ~1 (light) | Store $\mathrm{CO_2}$ as malic acid at night (no net gas exchange); release and fix $\mathrm{CO_2}$ during the day |

### 31.3 Interpreting RQ

| RQ Value | Interpretation |
| --------- | -------------- |
| RQ = 1.0 | Respiring carbohydrates |
| RQ = 0.7--0.9 | Respiring lipids (fat) |
| RQ = 0.8--0.9 | Respiring protein |
| RQ > 1.0 | Anaerobic respiration occurring; or the organism is synthesising fat from carbohydrate (lipogenesis) |
| RQ < 0.7 | Possible error; or the organism is converting carbohydrate to fat (more $\mathrm{O_2}$ consumed than $\mathrm{CO_2}$ produced) |

## 32. Poisons and Inhibitors of Respiration

### 32.1 Electron Transport Chain Inhibitors

| Inhibitor | Target | Effect | Source |
| --------- | ------ | ------ | ------ |
| Cyanide | Cytochrome c oxidase (Complex IV) | Blocks electron transfer to $\mathrm{O_2}$; no proton gradient; no ATP production; death from cellular hypoxia | Industrial chemicals; some plants (cassava, apple seeds contain amygdalin which releases cyanide) |
| Carbon monoxide | Cytochrome c oxidase (Complex IV) | Binds to the $\mathrm{Fe}^{3+}$ in haem group; blocks $\mathrm{O_2}$ binding; prevents final electron transfer | Incomplete combustion (car exhaust, faulty boilers) |
| Rotenone | Complex I (NADH dehydrogenase) | Blocks electron flow from NADH to ubiquinone; reduces ATP yield | Plant-derived pesticide (derris root) |
| Antimycin A | Complex III (cytochrome bc1) | Blocks electron transfer from ubiquinol to cytochrome c | Antibiotic (produced by _Streptomyces_) |
| Oligomycin | ATP synthase (Complex V) | Blocks the proton channel in ATP synthase; proton gradient builds up but no ATP is produced | Antibiotic |
| DNP (2,4-dinitrophenol) | Uncoupler (not a specific complex) | Carries protons across the inner mitochondrial membrane; dissipates the proton gradient; energy is released as heat instead of ATP | Industrial chemical;曾经 used as a weight-loss drug (dangerous) |

### 32.2 Comparison of Inhibitors

| Inhibitor | Does It Stop Electron Flow? | Does It Stop ATP Production? | What Happens to $\mathrm{O_2}$ Consumption? |
| --------- | -------------------------- | --------------------------- | ------------------------------------------ |
| Cyanide | Yes (at Complex IV) | Yes | Decreases to zero |
| Rotenone | Yes (at Complex I) | Yes | Decreases (but Complex II can still pass electrons from FADH2) |
| Oligomycin | No (electrons still flow; gradient builds up) | Yes | Initially decreases (gradient builds up and stops further electron flow) |
| DNP (uncoupler) | No (electrons flow faster than normal) | Yes (gradient is dissipated) | Increases (electrons flow faster; more $\mathrm{O_2}$ consumed) |

## 33. Anaerobic Respiration in Detail

### 33.1 Anaerobic Respiration in Yeast (Fermentation)

$$\text{Glucose} \to 2\ \text{pyruvate} \to 2\ \text{ethanol} + 2\ \mathrm{CO_2} + 2\ \text{ATP}$$

| Step | Enzyme | What Happens |
| ---- | ------ | ----------- |
| Glycolysis | Various (hexokinase, PFK, etc.) | Glucose $\to$ 2 pyruvate; 2 ATP (net) and 2 NADH produced |
| Decarboxylation of pyruvate | Pyruvate decarboxylase | Pyruvate $\to$ ethanal (acetaldehyde) + $\mathrm{CO_2}$; releases $\mathrm{CO_2}$ (important in brewing and baking) |
| Reduction of ethanal | Alcohol dehydrogenase | Ethanal + NADH $\to$ ethanol + $\mathrm{NAD^+}$; regenerates $\mathrm{NAD^+}$ for glycolysis |

### 33.2 Anaerobic Respiration in Mammalian Muscle

$$\text{Glucose} \to 2\ \text{pyruvate} \to 2\ \text{lactate} + 2\ \text{ATP}$$

| Step | Enzyme | What Happens |
| ---- | ------ | ----------- |
| Glycolysis | Various | Glucose $\to$ 2 pyruvate; 2 ATP and 2 NADH |
| Reduction of pyruvate | Lactate dehydrogenase (LDH) | Pyruvate + NADH $\to$ lactate + $\mathrm{NAD^+}$; regenerates $\mathrm{NAD^+}$ |

### 33.3 Comparison: Aerobic vs Anaerobic Respiration

| Feature | Aerobic | Anaerobic (yeast) | Anaerobic (muscle) |
| ------- | ------- | ----------------- | ----------------- |
| Final electron acceptor | $\mathrm{O_2}$ | Ethanal (acetaldehyde) | Pyruvate |
| ATP yield per glucose | 30--32 ATP | 2 ATP | 2 ATP |
| End products | $\mathrm{CO_2}$ + $\mathrm{H_2O}$ | Ethanol + $\mathrm{CO_2}$ | Lactate |
| Location | Cytoplasm + mitochondria | Cytoplasm only | Cytoplasm only |
| NADH fate | Oxidised in ETC (produces ATP) | Oxidised in reduction of ethanal | Oxidised in reduction of pyruvate |

## 34. Mitochondrial Structure and Function

### 34.1 Mitochondrial Components

| Component | Description | Function |
| --------- | ----------- | -------- |
| Outer membrane | Permeable to small molecules and ions (contains porins) | Forms the boundary of the organelle; allows free passage of metabolites |
| Intermembrane space | Space between outer and inner membranes | Site where protons accumulate (part of the proton gradient); similar composition to cytoplasm |
| Inner membrane | Highly folded into cristae; impermeable to ions (except through specific transport proteins) | Site of the electron transport chain and ATP synthase; contains cardiolipin (unique phospholipid) |
| Cristae | Folds of the inner membrane | Increase surface area for ETC and ATP synthase; more cristae = higher metabolic activity (e.g., in cardiac muscle cells) |
| Matrix | Fluid-filled interior of the mitochondrion | Site of the Krebs cycle (link reaction and Krebs cycle enzymes); contains mitochondrial DNA (circular, like prokaryotic DNA), ribosomes (70S, like prokaryotes), and enzymes |

### 34.2 Evidence for the Endosymbiotic Theory

The endosymbiotic theory proposes that mitochondria (and chloroplasts) were once free-living prokaryotes that were engulfed by a larger host cell:

| Evidence | Explanation |
| -------- | ----------- |
| Double membrane | Outer membrane = host cell's phagocytic vesicle; inner membrane = original prokaryotic plasma membrane |
| Circular DNA | Mitochondrial DNA is circular, like prokaryotic DNA (not linear like nuclear DNA) |
| 70S ribosomes | Mitochondrial ribosomes are 70S (prokaryotic size), not 80S (eukaryotic cytoplasmic size) |
| Binary fission | Mitochondria divide by binary fission, similar to prokaryotes |
| Antibiotic sensitivity | Antibiotics that inhibit prokaryotic protein synthesis (e.g., chloramphenicol, tetracycline) also inhibit mitochondrial protein synthesis |
| Size | Similar in size to prokaryotes (1--10 $\mu$m) |
| Genetic code | Mitochondrial genetic code has slight differences from the nuclear genetic code (more similar to prokaryotes) |

## 35. ATP: The Universal Energy Currency

### 35.1 Structure of ATP

| Component | Description |
| --------- | ----------- |
| Adenine | Nitrogenous base (purine) |
| Ribose | Pentose sugar |
| Three phosphate groups | $\alpha$-phosphate (closest to ribose), $\beta$-phosphate, $\gamma$-phosphate (terminal) |

### 35.2 ATP Hydrolysis

$$\mathrm{ATP + H_2O \to ADP + P_i + energy}$$

| Feature | Value |
| ------- | ----- |
| Energy released per mole | ~30.5 kJ/mol under standard conditions; may be higher in the cell |
| Bond broken | Phosphoanhydride bond between $\gamma$- and $\beta$-phosphates |
| Reversible | ADP can be rephosphorylated to ATP (during photosynthesis, respiration, and substrate-level phosphorylation) |

### 35.3 Uses of ATP in Cells

| Use | Example |
| ---- | ------- |
| Active transport | $\mathrm{Na^+/K^+}$ pump; co-transport of glucose in the small intestine |
| Muscle contraction | Myosin head binds ATP, detaches, re-cocks (sliding filament theory) |
| Nerve impulse transmission | $\mathrm{Na^+/K^+}$ pump restores resting potential after an action potential |
| Synthesis reactions | Protein synthesis (ribosomes); DNA replication; glycogen synthesis |
| Cell division | Microtubule polymerisation (spindle fibres) |
| Luminescence | ATP powers luciferase in fireflies and bioluminescent organisms |

### 35.4 Why ATP Is Suitable as an Energy Currency

| Property | Benefit |
| -------- | ------- |
| Small, soluble | Can diffuse rapidly throughout the cell; easily transported in the blood |
| Hydrolysis releases immediate energy | No need for long metabolic pathways; energy is available instantly |
| Intermediate energy release | Not too much energy released at once (prevents thermal damage); can be coupled to many different reactions |
| Rapid regeneration | ATP can be re-synthesised quickly from ADP (within seconds in muscle cells) |
| Universal | All living organisms use ATP (suggests common ancestry) |

## 36. Glycolysis Step-by-Step

### 36.1 The Four Stages

| Stage | Steps | ATP Used | ATP Produced | NADH Produced | Net ATP |
| ----- | ----- | -------- | ------------ | ------------- | ------- |
| 1. Phosphorylation (energy investment) | Glucose $\to$ glucose-6-phosphate (hexokinase); fructose-6-phosphate $\to$ fructose-1,6-bisphosphate (PFK) | 2 | 0 | 0 | -2 |
| 2. Splitting | Fructose-1,6-bisphosphate $\to$ 2 molecules of triose phosphate (glyceraldehyde-3-phosphate, G3P) | 0 | 0 | 0 | 0 |
| 3. Oxidation | Each G3P $\to$ 1,3-bisphosphoglycerate; NAD$^+$ is reduced to NADH | 0 | 0 | 2 | 0 |
| 4. ATP production (energy payoff) | 1,3-bisphosphoglycerate $\to$ 3-phosphoglycerate $\to$ 2-phosphoglycerate $\to$ phosphoenolpyruvate (PEP) $\to$ pyruvate | 0 | 4 | 0 | +4 |

**Total net ATP from glycolysis: 2 ATP + 2 NADH per glucose.**

### 36.2 Key Enzymes

| Enzyme | Reaction | Significance |
| ------ | -------- | ------------ |
| Hexokinase | Glucose $\to$ glucose-6-phosphate (uses 1 ATP) | "Traps" glucose in the cell (G6P cannot cross the membrane); first committed step of glycolysis |
| Phosphofructokinase (PFK) | Fructose-6-phosphate $\to$ fructose-1,6-bisphosphate (uses 1 ATP) | Main regulatory enzyme of glycolysis; allosterically inhibited by ATP and citrate; activated by AMP |
| Pyruvate kinase | PEP $\to$ pyruvate (produces 1 ATP) | Irreversible step; final step of glycolysis; inhibited by ATP and alanine |

## 37. The Link Reaction and Krebs Cycle in Detail

### 37.1 The Link Reaction (Pyruvate $\to$ Acetyl CoA)

| Step | What Happens |
| ---- | ----------- |
| 1 | Pyruvate (3C) is transported from the cytoplasm into the mitochondrial matrix via a specific carrier protein |
| 2 | Pyruvate is decarboxylated: one carbon is removed as $\mathrm{CO_2}$ (2C remaining) |
| 3 | The remaining 2C fragment is oxidised: NAD$^+$ is reduced to NADH |
| 4 | The oxidised 2C fragment combines with coenzyme A (CoA) to form acetyl CoA |

$$\text{Pyruvate (3C)} + \text{CoA} + \text{NAD}^+ \to \text{Acetyl CoA (2C)} + \mathrm{CO_2} + \text{NADH}$$

Enzyme: **Pyruvate dehydrogenase** (a large multi-enzyme complex).

### 37.2 The Krebs Cycle (per turn, per acetyl CoA)

| Step | What Happens | Products |
| ---- | ----------- | -------- |
| 1 | Acetyl CoA (2C) combines with oxaloacetate (4C) to form citrate (6C) | Citrate (6C) |
| 2 | Citrate is converted to isocitrate (6C) | Isocitrate (6C) |
| 3 | Isocitrate is decarboxylated and oxidised; $\mathrm{CO_2}$ released; NAD$^+$ reduced to NADH | $\alpha$-ketoglutarate (5C); 1 $\mathrm{CO_2}$; 1 NADH |
| 4 | $\alpha$-ketoglutarate is decarboxylated and oxidised; $\mathrm{CO_2}$ released; NAD$^+$ reduced; CoA added | Succinyl CoA (4C); 1 $\mathrm{CO_2}$; 1 NADH |
| 5 | Succinyl CoA is converted to succinate; substrate-level phosphorylation produces GTP (which is converted to ATP) | Succinate (4C); 1 ATP (via GTP) |
| 6 | Succinate is oxidised to fumarate; FAD is reduced to $\mathrm{FADH_2}$ | Fumarate (4C); 1 $\mathrm{FADH_2}$ |
| 7 | Fumarate is hydrated to malate; $\mathrm{H_2O}$ is added | Malate (4C) |
| 8 | Malate is oxidised to oxaloacetate; NAD$^+$ reduced to NADH | Oxaloacetate (4C); 1 NADH |

### 37.3 Krebs Cycle Totals (per glucose = 2 turns)

| Product | Per Turn | Per Glucose (2 turns) |
| ------- | -------- | --------------------- |
| $\mathrm{CO_2}$ | 2 | 4 |
| NADH | 3 | 6 |
| $\mathrm{FADH_2}$ | 1 | 2 |
| ATP (via GTP) | 1 | 2 |

## 38. Metabolic Integration: Where Pathways Meet

### 38.1 Key Metabolic Intermediates

| Intermediate | Pathways That Feed Into It | Pathways It Can Feed Into |
| ------------ | -------------------------- | ------------------------ |
| Glucose-6-phosphate | Glycolysis; glycogen synthesis; pentose phosphate pathway | Glycolysis; glycogen synthesis; pentose phosphate pathway |
| Pyruvate | Glycolysis; alanine (from amino acids); lactate | Link reaction (acetyl CoA); gluconeogenesis; lactate fermentation; alanine synthesis |
| Acetyl CoA | Link reaction (pyruvate); $\beta$-oxidation of fatty acids; amino acid catabolism | Krebs cycle; fatty acid synthesis; ketone body synthesis; cholesterol synthesis |
| Oxaloacetate | Pyruvate carboxylase reaction (pyruvate $\to$ oxaloacetate); amino acids (aspartate) | Krebs cycle (combines with acetyl CoA); gluconeogenesis |
| Glycerol | Triglyceride breakdown (lipolysis) | Gluconeogenesis (converted to glyceraldehyde-3-phosphate) |
| Amino acids | Protein catabolism (proteolysis) | Transamination (forming new amino acids); Krebs cycle intermediates (after deamination) |

### 38.2 Energy Yield Summary (per glucose molecule)

| Stage | ATP Produced | NADH Produced | $\mathrm{FADH_2}$ Produced |
| ----- | ------------ | ------------- | ------------------------- |
| Glycolysis | 2 (net) | 2 | 0 |
| Link reaction | 0 | 2 | 0 |
| Krebs cycle | 2 | 6 | 2 |
| **Totals** | **4 (substrate-level)** | **10** | **2** |

**ATP from oxidative phosphorylation:**
- 10 NADH $\times$ 2.5 ATP = 25 ATP
- 2 $\mathrm{FADH_2}$ $\times$ 1.5 ATP = 3 ATP
- **Total from oxidative phosphorylation: 28 ATP**

**Grand total: 4 + 28 = 32 ATP per glucose molecule**

## 39. The Link Between Respiration and Photosynthesis

### 39.1 Reciprocal Relationship

| Process | Reactants | Products |
| ------- | -------- | -------- |
| Photosynthesis | $\mathrm{CO_2 + H_2O}$ (+ light energy) | $\mathrm{C_6H_{12}O_6 + O_2}$ |
| Respiration | $\mathrm{C_6H_{12}O_6 + O_2}$ | $\mathrm{CO_2 + H_2O}$ (+ ATP) |

The products of one process are the reactants of the other. This is a cyclical relationship.

### 39.2 Balance of Gases

| Location | Day (Photosynthesis > Respiration) | Night (Respiration > Photosynthesis) |
| -------- | -------------------------------- | ---------------------------------- |
| Forest | Net $\mathrm{O_2}$ producer; net $\mathrm{CO_2}$ absorber | Net $\mathrm{CO_2}$ producer |
| Ocean | Phytoplankton photosynthesise; net $\mathrm{CO_2}$ absorber | Net $\mathrm{CO_2}$ producer (respiration by all organisms) |

### 39.3 Impact on Global Carbon Cycle

- Over geological time, the balance between photosynthesis and respiration has been roughly equal (atmospheric $\mathrm{CO_2}$ ~280 ppm before industrialisation).
- Burning fossil fuels (stored photosynthetic products from millions of years ago) releases $\mathrm{CO_2}$ faster than current photosynthesis can reabsorb it.
- Deforestation reduces the total photosynthetic capacity, further disrupting the balance.

## 40. Electron Transport Chain: Complexes in Detail

### 40.1 The Four Protein Complexes

| Complex | Location in Inner Membrane | Function | Protons Pumped (per NADH) | Protons Pumped (per $\mathrm{FADH_2}$) |
| ------- | -------------------------- | -------- | ------------------------ | --------------------------------- |
| Complex I (NADH dehydrogenase) | Matrix side | Accepts electrons from NADH; passes them to ubiquinone (coenzyme Q); pumps 4 protons | 4 | 0 |
| Complex II (succinate dehydrogenase) | Matrix side | Accepts electrons from $\mathrm{FADH_2}$ (produced in the Krebs cycle); passes them to ubiquinone | 0 | 0 (no protons pumped) |
| Complex III (cytochrome bc1 complex) | Intermembrane side | Accepts electrons from ubiquinol (reduced ubiquinone); passes them to cytochrome c; pumps 4 protons | 4 | 4 |
| Complex IV (cytochrome c oxidase) | Intermembrane side | Accepts electrons from cytochrome c; reduces $\mathrm{O_2}$ to $\mathrm{H_2O}$; pumps 2 protons | 2 | 2 |
| ATP synthase (Complex V) | Intermembrane side | Protons flow back through ATP synthase; the energy released drives rotation of the $\gamma$ subunit; ADP + $P_i$ $\to$ ATP | 0 | 0 (but receives the proton gradient) |

### 40.2 Total ATP from Oxidative Phosphorylation

| Source | Electrons Enter Via | Complexes Used | Protons Pumped | ATP Produced |
| ------ | ----------------- | -------------- | -------------- | ------------ |
| NADH (from glycolysis) | Complex I | I $\to$ III $\to$ IV | 4 + 4 + 2 = 10 | $10 \times 2.5 = 25$ |
| NADH (from Krebs cycle) | Complex I | I $\to$ III $\to$ IV | 4 + 4 + 2 = 10 | $10 \times 2.5 = 25$ |
| $\mathrm{FADH_2}$ (from Krebs cycle) | Complex II | II $\to$ III $\to$ IV | 4 + 2 = 6 | $6 \times 1.5 = 9$ |

**Total ATP from oxidative phosphorylation:**
- 2 NADH (glycolysis) $\times$ 2.5 = 5 ATP
- 8 NADH (2 link reaction + 6 Krebs) $\times$ 2.5 = 20 ATP
- 2 $\mathrm{FADH_2}$ (Krebs cycle) $\times$ 1.5 = 3 ATP
- **Total = 5 + 20 + 3 = 28 ATP**

:::warning
Common Pitfall
$\mathrm{FADH_2}$ produces fewer ATP than NADH because it enters the ETC at Complex II (bypassing Complex I). This means fewer protons are pumped per $\mathrm{FADH_2}$ molecule (6 vs 10). Always use 2.5 ATP per NADH and 1.5 ATP per $\mathrm{FADH_2}$.
:::

## 43. Respiratory Substrates

### 43.1 Comparison of Respiratory Substrates

| Substrate | Energy Content (kJ g$^{-1}$) | RQ | Notes |
| --------- | --------------------------- | -- | ----- |
| Carbohydrate (glucose) | 15.8 | 1.0 | Most common respiratory substrate; fully oxidised to $\mathrm{CO_2}$ and $\mathrm{H_2O}$ |
| Lipid (triglyceride) | 39.4 | ~0.7 | Highest energy content per gram; most $\mathrm{H}$ atoms per C atom; requires more $\mathrm{O_2}$ for complete oxidation |
| Protein | 17.0 | ~0.8 | Rarely used as a respiratory substrate; amino acids must be deaminated first (producing toxic ammonia) |

### 43.2 Calculating RQ

$$\mathrm{RQ} = \frac◆LB◆\text{Volume of }\mathrm{CO_2}\text{ produced}◆RB◆◆LB◆\text{Volume of }\mathrm{O_2}\text{ consumed}◆RB◆$$

| Substrate | Equation | RQ Calculation |
| --------- | -------- | -------------- |
| Glucose | $\mathrm{C_6H_{12}O_6 + 6O_2 \to 6CO_2 + 6H_2O}$ | $6/6 = 1.0$ |
| Palmitic acid (lipid) | $\mathrm{C_{16}H_{32}O_2 + 23O_2 \to 16CO_2 + 16H_2O}$ | $16/23 \approx 0.70$ |
| Protein (average amino acid) | -- | ~0.8 |

## 44. Poisons and Their Effects on Respiration

### 44.1 Metabolic Poisons

| Poison | Target | Effect on Respiration |
| ------ | ------ | ------------------- |
| Cyanide | Inhibits cytochrome c oxidase (Complex IV) in the ETC | Electrons cannot pass to $\mathrm{O_2}$; ETC stops; no proton gradient; no ATP production; cells cannot respire aerobically; death from cellular hypoxia |
| Carbon monoxide | Binds irreversibly to haemoglobin (and to Complex IV) | Reduces $\mathrm{O_2}$ transport in blood; also inhibits ETC; same net effect as cyanide |
| Oligomycin | Inhibits ATP synthase | Protons cannot flow back through ATP synthase; proton gradient builds up but ATP is not produced |
| DNP (2,4-dinitrophenol) | Uncouples oxidative phosphorylation from the ETC | Makes the inner mitochondrial membrane permeable to protons; protons leak back without passing through ATP synthase; energy is released as heat instead of being used to make ATP; dangerous because respiration rate increases to compensate but no additional ATP is made |
| Rotenone | Inhibits Complex I | Blocks electron flow from NADH to ubiquinone; $\mathrm{FADH_2}$ can still donate electrons at Complex II (partial respiration continues) |

## 45. The Cori Cycle

### 45.1 What Is the Cori Cycle?

The Cori cycle is a metabolic pathway in which lactate produced by anaerobic respiration in muscles is transported to the liver, converted back to glucose, and returned to the muscles.

### 45.2 Steps

| Step | Location | Process |
| ---- | -------- | ------- |
| 1 | Muscle (during intense exercise) | Glucose is broken down by glycolysis to pyruvate; pyruvate is converted to lactate (regenerates $\mathrm{NAD^+}$ so glycolysis can continue) |
| 2 | Blood | Lactate diffuses from muscle cells into the blood and is transported to the liver |
| 3 | Liver | Lactate is converted back to pyruvate (by lactate dehydrogenase); pyruvate is converted to glucose by gluconeogenesis (uses ATP) |
| 4 | Blood | Glucose is released from the liver into the blood and transported back to the muscles |

### 45.3 Significance

| Point | Description |
| ----- | ----------- |
| Why it matters | Prevents the buildup of lactate in muscles (which lowers pH and causes fatigue); allows the body to recycle lactate into a usable fuel |
| Net cost | The liver uses ATP to convert lactate back to glucose (gluconeogenesis costs 6 ATP per glucose); the overall process has a net cost of 4 ATP per glucose molecule recycled |
| Oxygen debt | The oxygen debt after exercise is the extra $\mathrm{O_2}$ required to: (a) oxidise the remaining lactate to pyruvate, (b) regenerate ATP and creatine phosphate stores, (c) resynthesise glycogen from lactate |

## 46. Mitochondrial Structure and Function

### 46.1 Structure

| Feature | Description |
| ------- | ----------- |
| Outer membrane | Permeable to small molecules and ions; contains porins (channel proteins) |
| Intermembrane space | Space between outer and inner membranes; site of proton accumulation during the ETC |
| Inner membrane | Highly folded into cristae (increases surface area); impermeable to ions (requires specific transport proteins); site of the electron transport chain and ATP synthase |
| Matrix | The interior of the mitochondrion; contains enzymes for the Krebs cycle, link reaction, and fatty acid oxidation; contains mitochondrial DNA (circular, like prokaryotic DNA); contains 70S ribosomes |

### 46.2 The Endosymbiotic Theory

| Evidence | Description |
| -------- | ----------- |
| Size and shape | Mitochondria are similar in size and shape to bacteria |
| Double membrane | The outer membrane may represent the host cell's phagocytic vesicle; the inner membrane may be the original bacterial membrane |
| Own DNA | Mitochondria contain circular DNA, like prokaryotes; they replicate independently of the nucleus by binary fission |
| 70S ribosomes | Mitochondrial ribosomes are 70S (same size as bacterial ribosomes), not 80S (eukaryotic cytoplasmic ribosomes) |
| Antibiotic sensitivity | Mitochondrial protein synthesis is inhibited by antibiotics that target bacteria (e.g., chloramphenicol, streptomycin) |
| Phylogenetic evidence | Molecular sequencing suggests mitochondria are most closely related to alpha-proteobacteria |

---

:::tip
Diagnostic Test
:::
:::
:::
