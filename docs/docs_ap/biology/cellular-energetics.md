---
title: Cellular Energetics
date: 2026-04-14
tags:
  - Biology
  - AP
categories:
  - Biology
slug: cellular-energetics
---

## Cellular Respiration (CED Unit 3)

### Overview

Cellular respiration is the catabolic process by which cells harvest energy from organic molecules
(usually glucose). The overall equation:

$$
\text{C}_6\text{H}_{12}\text{O}_6 + 6\text{O}_2 \to 6\text{CO}_2 + 6\text{H}_2\text{O} + \text{ATP} + \text{heat}
$$

$\Delta G^\circ \approx -686 \text{ kcal/mol}$ (highly exergonic).

### Four Stages

| Stage                     | Location                     | O$_2$ Required? | ATP Produced (Net)        |
| ------------------------- | ---------------------------- | --------------- | ------------------------- |
| Glycolysis                | Cytoplasm                    | No              | 2 ATP (substrate-level)   |
| Pyruvate oxidation        | Mitochondrial matrix         | No              | 0                         |
| Citric acid cycle         | Mitochondrial matrix         | No              | 2 ATP (substrate-level)   |
| Oxidative phosphorylation | Inner mitochondrial membrane | Yes             | ~26-28 ATP (chemiosmosis) |

### Glycolysis

Glycolysis ("sugar splitting") breaks one glucose ($\text{C}_6$) into two pyruvate ($\text{C}_3$)
molecules.

**Investment phase (requires 2 ATP):**

1. Hexokinase: glucose $\to$ glucose-6-phosphate (uses 1 ATP)
2. Phosphoglucose isomerase: glucose-6-phosphate $\to$ fructose-6-phosphate
3. Phosphofructokinase (PFK): fructose-6-phosphate $\to$ fructose-1,6-bisphosphate (uses 1 ATP)
4. Aldolase: fructose-1,6-bisphosphate $\to$ DHAP + G3P
5. DHAP $\to$ G3P (isomerase)

**Payoff phase (produces 4 ATP + 2 NADH):** 6-10. Each G3P is oxidized to pyruvate, producing 2 ATP
(substrate-level phosphorylation) and 1 NADH per G3P.

**Net yield per glucose:** 2 ATP, 2 NADH, 2 pyruvate.

**Regulation:** Phosphofructokinase (PFK) is the key regulatory enzyme. It is inhibited by ATP and
citrate (high energy signals) and activated by AMP and fructose-2,6-bisphosphate.

### Pyruvate Oxidation (Link Reaction)

Each pyruvate ($\text{C}_3$) is transported into the mitochondrial matrix and converted to
acetyl-CoA ($\text{C}_2$):

$$
\text{Pyruvate} + \text{CoA} + \text{NAD}^+ \to \text{Acetyl-CoA} + \text{CO}_2 + \text{NADH}
$$

Per glucose: 2 acetyl-CoA, $2 \text{CO}_2$, 2 NADH.

### Citric Acid Cycle (Krebs Cycle)

Each acetyl-CoA ($\text{C}_2$) enters the cycle and combines with oxaloacetate ($\text{C}_4$) to
form citrate ($\text{C}_6$). Through a series of redox and decarboxylation reactions:

Per acetyl-CoA:

- 3 $\text{NADH}$
- 1 $\text{FADH}_2$
- 1 ATP (or GTP)
- 2 $\text{CO}_2$

Per glucose (2 turns):

- 6 NADH
- 2 $\text{FADH}_2$
- 2 ATP
- 4 $\text{CO}_2$

### Oxidative Phosphorylation

The electron transport chain (ETC) and chemiosmosis generate the majority of ATP.

**Electron Transport Chain:**

Complexes I--IV are embedded in the inner mitochondrial membrane:

1. **Complex I (NADH dehydrogenase):** NADH donates electrons, pumping 4 $\text{H}^+$ into the
   intermembrane space.
2. **Complex II (succinate dehydrogenase):** $\text{FADH}_2$ donates electrons (no $\text{H}^+$
   pumped).
3. **Coenzyme Q (ubiquinone):** Transfers electrons from Complex I/II to Complex III.
4. **Complex III (cytochrome bc1):** Pumps 4 $\text{H}^+$.
5. **Cytochrome c:** Transfers electrons to Complex IV.
6. **Complex IV (cytochrome c oxidase):** Transfers electrons to $\text{O}_2$ (final electron
   acceptor), forming $\text{H}_2\text{O}$. Pumps 2 $\text{H}^+$.

Total $\text{H}^+$ pumped per NADH: $\approx 10$. Total $\text{H}^+$ pumped per $\text{FADH}_2$:
$\approx 6$.

**Chemiosmosis:**

The proton gradient ($\text{H}^+$ concentration and charge difference) stores potential energy
(proton-motive force). $\text{H}^+$ flows back through ATP synthase, driving the synthesis of ATP:

$$
\text{ADP} + \text{P}_i + n\text{H}^+_{\text{out}} \to \text{ATP} + \text{H}_2\text{O} + n\text{H}^+_{\text{in}}
$$

Approximately 3-4 $\text{H}^+$ are needed per ATP synthesized.

### ATP Yield Per Glucose

| Source                | ATP (Approximate) |
| --------------------- | ----------------- |
| Glycolysis            | 2 ATP (direct)    |
| Glycolysis NADH       | 3-5 ATP           |
| Pyruvate oxidation    | 6 ATP             |
| Krebs cycle           | 2 ATP (direct)    |
| Krebs NADH            | 15 ATP            |
| Krebs $\text{FADH}_2$ | 3 ATP             |
| **Total**             | **30-32 ATP**     |

### Fermentation (Anaerobic Respiration)

When $\text{O}_2$ is unavailable, cells use fermentation to regenerate $\text{NAD}^+$ from NADH,
allowing glycolysis to continue.

**Alcoholic fermentation** (yeast):

$$
\text{Pyruvate} \to \text{Acetaldehyde} + \text{CO}_2 \to \text{Ethanol} + \text{NAD}^+
$$

**Lactic acid fermentation** (muscle cells, some bacteria):

$$
\text{Pyruvate} + \text{NADH} \to \text{Lactate} + \text{NAD}^+
$$

## Photosynthesis (CED Unit 3)

### Overview

Photosynthesis converts light energy into chemical energy stored in glucose:

$$
6\text{CO}_2 + 6\text{H}_2\text{O} + \text{light energy} \to \text{C}_6\text{H}_{12}\text{O}_6 + 6\text{O}_2
$$

### Two Stages

| Stage           | Location           | Inputs                                            | Outputs                           |
| --------------- | ------------------ | ------------------------------------------------- | --------------------------------- |
| Light-dependent | Thylakoid membrane | $\text{H}_2\text{O}$, light, $\text{NADP}^+$, ADP | $\text{O}_2$, ATP, NADPH          |
| Calvin cycle    | Stroma             | $\text{CO}_2$, ATP, NADPH                         | G3P (sugar), ADP, $\text{NADP}^+$ |

### Light-Dependent Reactions

1. **Photosystem II (PS II):** Light excites electrons in P680. Water is split (photolysis):
   $2\text{H}_2\text{O} \to 4\text{H}^+ + 4e^- + \text{O}_2$. Electrons pass through the ETC,
   pumping $\text{H}^+$ into the thylakoid lumen.

2. **Cytochrome b6f complex:** Continues the ETC, pumping more $\text{H}^+$.

3. **Photosystem I (PS I):** Light excites electrons in P700. Electrons are re-energized and
   transferred to ferredoxin, then to $\text{NADP}^+$ reductase.

4. **$\text{NADP}^+$ reductase:** $\text{NADP}^+ + \text{H}^+ + 2e^- \to \text{NADPH}$.

5. **Chemiosmosis:** $\text{H}^+$ gradient drives ATP synthase, producing ATP.

### The Calvin Cycle (Light-Independent Reactions)

Also called the C3 pathway. Three phases:

1. **Carbon fixation:** RuBisCO catalyzes $\text{CO}_2$ + RuBP (5C) $\to$ 2 molecules of 3-PGA (3C).
   - RuBisCO is the most abundant protein on Earth.
   - It can also catalyze photorespiration (RuBP + $\text{O}_2$ $\to$ 3-PGA + 2-phosphoglycolate),
     which wastes energy.

2. **Reduction:** 3-PGA + ATP + NADPH $\to$ G3P. For every 3 $\text{CO}_2$ fixed, 6 G3P are produced
   (5 are recycled, 1 is net gain).

3. **Regeneration of RuBP:** 5 G3P (15C) + 3 ATP $\to$ 3 RuBP (15C).

**Net:** 3 $\text{CO}_2$ + 9 ATP + 6 NADPH $\to$ 1 G3P + 9 ADP + 8 $\text{P}_i$ + 6 $\text{NADP}^+$

To make one glucose: 2 G3P needed, so the cycle must turn 6 times, fixing 6 $\text{CO}_2$: 6
$\text{CO}_2$ + 18 ATP + 12 NADPH $\to$ glucose + 18 ADP + 16 $\text{P}_i$ + 12 $\text{NADP}^+$.

### Photorespiration

When stomata close on hot, dry days, $\text{CO}_2$ levels drop and $\text{O}_2$ levels rise. RuBisCO
binds $\text{O}_2$ instead of $\text{CO}_2$, producing 2-phosphoglycolate (a 2-carbon compound) and
3-PGA. This consumes energy without producing sugar.

### C4 and CAM Photosynthesis

**C4 plants** (corn, sugarcane):

- $\text{CO}_2$ is initially fixed into a 4-carbon compound (oxaloacetate) by PEP carboxylase in
  mesophyll cells.
- The 4-carbon compound is transported to bundle-sheath cells, where $\text{CO}_2$ is released for
  the Calvin cycle.
- PEP carboxylase has a much higher affinity for $\text{CO}_2$ than RuBisCO and does not bind
  $\text{O}_2$.
- Minimizes photorespiration.

**CAM plants** (cacti, pineapples):

- Open stomata at night to fix $\text{CO}_2$ into organic acids.
- Close stomata during the day to conserve water.
- Release $\text{CO}_2$ from organic acids during the day for the Calvin cycle.
- Temporal separation of $\text{CO}_2$ fixation and the Calvin cycle.

## Common Pitfalls

1. **Confusing the inputs and outputs of cellular respiration and photosynthesis.** They are
   essentially reverse processes (respiration: glucose + $\text{O}_2$ $\to$ $\text{CO}_2$ +
   $\text{H}_2\text{O}$; photosynthesis: $\text{CO}_2$ + $\text{H}_2\text{O}$ $\to$ glucose +
   $\text{O}_2$).
2. **Misidentifying the final electron acceptor.** In respiration, it is $\text{O}_2$. In the light
   reactions, it is $\text{NADP}^+$.
3. **Confusing NADH and $\text{FADH}_2$ ATP yields.** NADH yields more ATP because electrons enter
   the ETC at Complex I (pumping more protons), while $\text{FADH}_2$ enters at Complex II.
4. **Forgetting that the Calvin cycle must turn 6 times** to produce one glucose molecule.
5. **Confusing C4 and CAM plants.** C4 plants have spatial separation (mesophyll vs bundle-sheath);
   CAM plants have temporal separation (night vs day).
6. **Thinking fermentation produces ATP.** Fermentation only regenerates $\text{NAD}^+$ to allow
   glycolysis to continue; the ATP comes from glycolysis alone.
7. **Confusing the roles of photosystems I and II.** PS II comes first (P680), splits water, and
   produces ATP. PS I comes second (P700) and produces NADPH.

## Practice Questions

1. Trace the complete path of a carbon atom from $\text{CO}_2$ to glucose through the Calvin cycle,
   including the number of turns needed.

2. Explain why poisons like cyanide (which blocks Complex IV of the ETC) are lethal.

3. Compare the ATP yield of aerobic respiration with fermentation. Why does aerobic respiration
   produce so much more ATP?

4. A researcher adds a proton ionophore (a chemical that makes the thylakoid membrane permeable to
   $\text{H}^+$) to chloroplasts. Predict the effect on ATP synthesis and explain why.

5. Explain how C4 plants minimize photorespiration and why this is advantageous in hot, dry
   climates.

6. Describe the role of RuBisCO in both the Calvin cycle and photorespiration.

7. During intense exercise, muscle cells switch to lactic acid fermentation. Explain why this is
   necessary and how it affects ATP production.

8. Calculate the total ATP yield from one molecule of glucose, assuming 2.5 ATP per NADH and 1.5 ATP
   per $\text{FADH}_2$ in the electron transport chain.
