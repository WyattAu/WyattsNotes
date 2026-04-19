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
\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6 + 6\mathrm{O}_2 \to 6\mathrm{CO}_2 + 6\mathrm{H}_2\mathrm{O} + \mathrm{ATP} + \mathrm{heat}
$$

$\Delta G^\circ \approx -686 \mathrm{ kcal/mol}$ (highly exergonic).

### Four Stages

| Stage                     | Location                     | O$_2$ Required? | ATP Produced (Net)        |
| ------------------------- | ---------------------------- | --------------- | ------------------------- |
| Glycolysis                | Cytoplasm                    | No              | 2 ATP (substrate-level)   |
| Pyruvate oxidation        | Mitochondrial matrix         | No              | 0                         |
| Citric acid cycle         | Mitochondrial matrix         | No              | 2 ATP (substrate-level)   |
| Oxidative phosphorylation | Inner mitochondrial membrane | Yes             | ~26-28 ATP (chemiosmosis) |

### Glycolysis

Glycolysis ("sugar splitting") breaks one glucose ($\mathrm{C}_6$) into two pyruvate
($\mathrm{C}_3$) molecules.

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

**Worked Example: ATP yield from glycolysis alone.**

If a cell can only carry out glycolysis (no oxygen available), the net ATP yield per glucose is 2
ATP. The 2 NADH produced cannot enter the electron transport chain without oxygen. In animal cells,
these NADH are used to reduce pyruvate to lactate (fermentation). In yeast, NADH are used to reduce
acetaldehyde to ethanol.

**Worked Example: Why hexokinase and PFK are different.**

Hexokinase catalyses the first step of glycolysis (glucose $\to$ glucose-6-phosphate). It is not the
committed step because glucose-6-phosphate can also enter the pentose phosphate pathway (for NADPH
production). PFK catalyses the committed step (fructose-6-phosphate $\to$
fructose-1,6-bisphosphate). Once fructose-1,6-bisphosphate is formed, the molecule is committed to
glycolysis. This is why PFK is the key regulatory enzyme -- it controls the rate at which glucose
enters glycolysis.

### Pyruvate Oxidation (Link Reaction)

Each pyruvate ($\mathrm{C}_3$) is transported into the mitochondrial matrix and converted to
acetyl-CoA ($\mathrm{C}_2$):

$$
\mathrm{Pyruvate} + \mathrm{CoA} + \mathrm{NAD}^+ \to \mathrm{Acetyl-CoA} + \mathrm{CO}_2 + \mathrm{NADH}
$$

Per glucose: 2 acetyl-CoA, $2 \mathrm{CO}_2$, 2 NADH.

The link reaction is catalysed by the pyruvate dehydrogenase complex, a large multi-enzyme complex
that requires five coenzymes: CoA, $\mathrm{NAD}^+$, FAD, lipoic acid, and thiamine (vitamin B1).
This is why thiamine deficiency (beriberi) impairs energy metabolism.

### Citric Acid Cycle (Krebs Cycle)

Each acetyl-CoA ($\mathrm{C}_2$) enters the cycle and combines with oxaloacetate ($\mathrm{C}_4$) to
form citrate ($\mathrm{C}_6$). Through a series of redox and decarboxylation reactions:

Per acetyl-CoA:

- 3 $\mathrm{NADH}$
- 1 $\mathrm{FADH}_2$
- 1 ATP (or GTP)
- 2 $\mathrm{CO}_2$

Per glucose (2 turns):

- 6 NADH
- 2 $\mathrm{FADH}_2$
- 2 ATP
- 4 $\mathrm{CO}_2$

**Worked Example: Tracking carbon atoms through the Krebs cycle.**

The two carbon atoms from one acetyl-CoA enter the cycle as part of citrate. Over the course of one
turn, both carbons are released as $\mathrm{CO}_2$. However, neither $\mathrm{CO}_2$ molecule comes
directly from the acetyl-CoA -- the carbon atoms are scrambled by the symmetrical nature of some
intermediates (succinate and fumarate). This was demonstrated by Melvin Calvin using radioactive
$^{14}\mathrm{C}$-labelled acetyl-CoA. Despite the scrambling, the net result is that the two
carbons from acetyl-CoA are released as $\mathrm{CO}_2$ by the end of one turn.

### Oxidative Phosphorylation

The electron transport chain (ETC) and chemiosmosis generate the majority of ATP.

**Electron Transport Chain:**

Complexes I--IV are embedded in the inner mitochondrial membrane:

1. **Complex I (NADH dehydrogenase):** NADH donates electrons, pumping 4 $\mathrm{H}^+$ into the
   intermembrane space.
2. **Complex II (succinate dehydrogenase):** $\mathrm{FADH}_2$ donates electrons (no $\mathrm{H}^+$
   pumped).
3. **Coenzyme Q (ubiquinone):** Transfers electrons from Complex I/II to Complex III.
4. **Complex III (cytochrome bc1):** Pumps 4 $\mathrm{H}^+$.
5. **Cytochrome c:** Transfers electrons to Complex IV.
6. **Complex IV (cytochrome c oxidase):** Transfers electrons to $\mathrm{O}_2$ (final electron
   acceptor), forming $\mathrm{H}_2\mathrm{O}$. Pumps 2 $\mathrm{H}^+$.

Total $\mathrm{H}^+$ pumped per NADH: $\approx 10$. Total $\mathrm{H}^+$ pumped per
$\mathrm{FADH}_2$: $\approx 6$.

**Chemiosmosis:**

The proton gradient ($\mathrm{H}^+$ concentration and charge difference) stores potential energy
(proton-motive force). $\mathrm{H}^+$ flows back through ATP synthase, driving the synthesis of ATP:

$$
\mathrm{ADP} + \mathrm{P}_i + n\mathrm{H}^+_{\mathrm{out}} \to \mathrm{ATP} + \mathrm{H}_2\mathrm{O} + n\mathrm{H}^+_{\mathrm{in}}
$$

Approximately 3-4 $\mathrm{H}^+$ are needed per ATP synthesized.

**The role of ATP synthase:** ATP synthase is a molecular motor. The flow of protons through the
$F_0$ portion causes the $F_1$ portion to rotate, inducing conformational changes that catalyse the
phosphorylation of ADP to ATP. This mechanism was proposed by Paul Boyer and confirmed by John
Walker (Nobel Prize, 1997).

### ATP Yield Per Glucose

| Source                  | ATP (Approximate) |
| ----------------------- | ----------------- |
| Glycolysis              | 2 ATP (direct)    |
| Glycolysis NADH         | 3-5 ATP           |
| Pyruvate oxidation      | 6 ATP             |
| Krebs cycle             | 2 ATP (direct)    |
| Krebs NADH              | 15 ATP            |
| Krebs $\mathrm{FADH}_2$ | 3 ATP             |
| **Total**               | **30-32 ATP**     |

**Worked Example: Calculating total ATP yield.**

Using the values of 2.5 ATP per NADH and 1.5 ATP per $\mathrm{FADH}_2$:

- Glycolysis: 2 ATP + 2 NADH $\times$ 2.5 = 7 ATP
- Pyruvate oxidation: 2 NADH $\times$ 2.5 = 5 ATP
- Krebs cycle: 2 ATP + 6 NADH $\times$ 2.5 + 2 $\mathrm{FADH}_2 \times$ 1.5 = 2 + 15 + 3 = 20 ATP
- **Total: 7 + 5 + 20 = 32 ATP**

Note: Some textbooks use 3 ATP per NADH and 2 ATP per $\mathrm{FADH}_2$, giving a total of 38 ATP.
The actual yield is closer to 30-32 because of proton leak and the cost of transporting molecules
across membranes.

### Fermentation (Anaerobic Respiration)

When $\mathrm{O}_2$ is unavailable, cells use fermentation to regenerate $\mathrm{NAD}^+$ from NADH,
allowing glycolysis to continue.

**Alcoholic fermentation** (yeast):

$$
\mathrm{Pyruvate} \to \mathrm{Acetaldehyde} + \mathrm{CO}_2 \to \mathrm{Ethanol} + \mathrm{NAD}^+
$$

**Lactic acid fermentation** (muscle cells, some bacteria):

$$
\mathrm{Pyruvate} + \mathrm{NADH} \to \mathrm{Lactate} + \mathrm{NAD}^+
$$

**Worked Example: Why fermentation is necessary.**

During glycolysis, NAD+ is reduced to NADH. Without a way to regenerate NAD+, glycolysis would stop
after a few seconds because there would be no NAD+ to accept electrons.

In the presence of oxygen, NADH donates its electrons to the ETC, regenerating NAD+. But without
oxygen, the ETC cannot function. Fermentation solves this problem by using NADH to reduce pyruvate
(to lactate or ethanol), regenerating NAD+ so glycolysis can continue producing its 2 ATP per
glucose.

**Worked Example: Why alcoholic fermentation is important in industry.**

Yeast (Saccharomyces cerevisiae) carries out alcoholic fermentation in anaerobic conditions. This is
exploited in brewing (beer), winemaking, and bread-making. In bread-making, the $\mathrm{CO}_2$
produced by fermentation causes the dough to rise, while the ethanol evaporates during baking. In
brewing, ethanol is the desired product, and the $\mathrm{CO}_2$ provides carbonation. The yeast
consumes the sugars in the wort or grape juice and produces ethanol and $\mathrm{CO}_2$ as waste
products.

## Photosynthesis (CED Unit 3)

### Overview

Photosynthesis converts light energy into chemical energy stored in glucose:

$$
6\mathrm{CO}_2 + 6\mathrm{H}_2\mathrm{O} + \mathrm{light energy} \to \mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6 + 6\mathrm{O}_2
$$

### Two Stages

| Stage           | Location           | Inputs                                                  | Outputs                             |
| --------------- | ------------------ | ------------------------------------------------------- | ----------------------------------- |
| Light-dependent | Thylakoid membrane | $\mathrm{H}_2\mathrm{O}$, light, $\mathrm{NADP}^+$, ADP | $\mathrm{O}_2$, ATP, NADPH          |
| Calvin cycle    | Stroma             | $\mathrm{CO}_2$, ATP, NADPH                             | G3P (sugar), ADP, $\mathrm{NADP}^+$ |

### Light-Dependent Reactions

1. **Photosystem II (PS II):** Light excites electrons in P680. Water is split (photolysis):
   $2\mathrm{H}_2\mathrm{O} \to 4\mathrm{H}^+ + 4e^- + \mathrm{O}_2$. Electrons pass through the
   ETC, pumping $\mathrm{H}^+$ into the thylakoid lumen.

2. **Cytochrome b6f complex:** Continues the ETC, pumping more $\mathrm{H}^+$.

3. **Photosystem I (PS I):** Light excites electrons in P700. Electrons are re-energized and
   transferred to ferredoxin, then to $\mathrm{NADP}^+$ reductase.

4. **$\mathrm{NADP}^+$ reductase:** $\mathrm{NADP}^+ + \mathrm{H}^+ + 2e^- \to \mathrm{NADPH}$.

5. **Chemiosmosis:** $\mathrm{H}^+$ gradient drives ATP synthase, producing ATP.

**Why water is the source of electrons:** The electrons from water replace those lost by P680.
Without water, the photosystems would run out of electrons and photosynthesis would stop. This was
demonstrated using $^{18}\mathrm{O}$-labelled water: the labelled oxygen appeared in $\mathrm{O}_2$
gas, not in glucose, confirming that water (not $\mathrm{CO}_2$) is the source of oxygen released
during photosynthesis.

### The Calvin Cycle (Light-Independent Reactions)

Also called the C3 pathway. Three phases:

1. **Carbon fixation:** RuBisCO catalyzes $\mathrm{CO}_2$ + RuBP (5C) $\to$ 2 molecules of 3-PGA
   (3C).
   - RuBisCO is the most abundant protein on Earth.
   - It can also catalyze photorespiration (RuBP + $\mathrm{O}_2$ $\to$ 3-PGA + 2-phosphoglycolate),
     which wastes energy.

2. **Reduction:** 3-PGA + ATP + NADPH $\to$ G3P. For every 3 $\mathrm{CO}_2$ fixed, 6 G3P are
   produced (5 are recycled, 1 is net gain).

3. **Regeneration of RuBP:** 5 G3P (15C) + 3 ATP $\to$ 3 RuBP (15C).

**Net:** 3 $\mathrm{CO}_2$ + 9 ATP + 6 NADPH $\to$ 1 G3P + 9 ADP + 8 $\mathrm{P}_i$ + 6
$\mathrm{NADP}^+$

To make one glucose: 2 G3P needed, so the cycle must turn 6 times, fixing 6 $\mathrm{CO}_2$: 6
$\mathrm{CO}_2$ + 18 ATP + 12 NADPH $\to$ glucose + 18 ADP + 16 $\mathrm{P}_i$ + 12
$\mathrm{NADP}^+$.

### Photorespiration

When stomata close on hot, dry days, $\mathrm{CO}_2$ levels drop and $\mathrm{O}_2$ levels rise.
RuBisCO binds $\mathrm{O}_2$ instead of $\mathrm{CO}_2$, producing 2-phosphoglycolate (a 2-carbon
compound) and 3-PGA. This consumes energy without producing sugar.

### C4 and CAM Photosynthesis

**C4 plants** (corn, sugarcane):

- $\mathrm{CO}_2$ is initially fixed into a 4-carbon compound (oxaloacetate) by PEP carboxylase in
  mesophyll cells.
- The 4-carbon compound is transported to bundle-sheath cells, where $\mathrm{CO}_2$ is released for
  the Calvin cycle.
- PEP carboxylase has a much higher affinity for $\mathrm{CO}_2$ than RuBisCO and does not bind
  $\mathrm{O}_2$.
- Minimizes photorespiration.

**CAM plants** (cacti, pineapples):

- Open stomata at night to fix $\mathrm{CO}_2$ into organic acids.
- Close stomata during the day to conserve water.
- Release $\mathrm{CO}_2$ from organic acids during the day for the Calvin cycle.
- Temporal separation of $\mathrm{CO}_2$ fixation and the Calvin cycle.

**Comparison table: C3, C4, and CAM plants.**

| Feature          | C3 Plants             | C4 Plants                                            | CAM Plants                             |
| ---------------- | --------------------- | ---------------------------------------------------- | -------------------------------------- |
| Carbon fixation  | RuBisCO (mesophyll)   | PEP carboxylase (mesophyll), RuBisCO (bundle-sheath) | PEP carboxylase (night), RuBisCO (day) |
| Photorespiration | Significant           | Minimal                                              | Minimal                                |
| Water use        | Moderate              | Moderate                                             | Very efficient                         |
| Habitat          | Temperate, cool       | Tropical, hot                                        | Arid, desert                           |
| Examples         | Wheat, rice, soybeans | Corn, sugarcane                                      | Cacti, pineapples, orchids             |

**Worked Example: Comparing C4 and CAM strategies.**

Both C4 and CAM plants minimise photorespiration by concentrating $\mathrm{CO}_2$ around RuBisCO. C4
plants achieve this through spatial separation: PEP carboxylase fixes $\mathrm{CO}_2$ in mesophyll
cells, and the resulting 4-carbon acid is transported to bundle-sheath cells where $\mathrm{CO}_2$
is released. CAM plants achieve the same result through temporal separation: $\mathrm{CO}_2$ is
fixed at night (when stomata can open without excessive water loss) and stored as organic acids.
During the day, the organic acids release $\mathrm{CO}_2$ for the Calvin cycle. The key difference
is that C4 plants fix $\mathrm{CO}_2$ and run the Calvin cycle simultaneously in different cells,
while CAM plants separate them in time within the same cell.

## Common Pitfalls

1. **Confusing the inputs and outputs of cellular respiration and photosynthesis.** They are
   essentially reverse processes (respiration: glucose + $\mathrm{O}_2$ $\to$ $\mathrm{CO}_2$ +
   $\mathrm{H}_2\mathrm{O}$; photosynthesis: $\mathrm{CO}_2$ + $\mathrm{H}_2\mathrm{O}$ $\to$
   glucose + $\mathrm{O}_2$).
2. **Misidentifying the final electron acceptor.** In respiration, it is $\mathrm{O}_2$. In the
   light reactions, it is $\mathrm{NADP}^+$.
3. **Confusing NADH and $\mathrm{FADH}_2$ ATP yields.** NADH yields more ATP because electrons enter
   the ETC at Complex I (pumping more protons), while $\mathrm{FADH}_2$ enters at Complex II.
4. **Forgetting that the Calvin cycle must turn 6 times** to produce one glucose molecule.
5. **Confusing C4 and CAM plants.** C4 plants have spatial separation (mesophyll vs bundle-sheath);
   CAM plants have temporal separation (night vs day).
6. **Thinking fermentation produces ATP.** Fermentation only regenerates $\mathrm{NAD}^+$ to allow
   glycolysis to continue; the ATP comes from glycolysis alone.
7. **Confusing the roles of photosystems I and II.** PS II comes first (P680), splits water, and
   produces ATP. PS I comes second (P700) and produces NADPH.
8. **Forgetting that $\mathrm{CO}_2$ is released in both pyruvate oxidation and the Krebs cycle.** A
   total of 6 $\mathrm{CO}_2$ are released per glucose (2 from link reaction, 4 from Krebs cycle).
9. **Thinking that the Krebs cycle directly produces a lot of ATP.** It only produces 2 ATP per
   glucose by substrate-level phosphorylation; most ATP comes from oxidative phosphorylation.
10. **Confusing photophosphorylation and oxidative phosphorylation.** Photophosphorylation occurs in
    chloroplasts and uses light energy; oxidative phosphorylation occurs in mitochondria and uses
    energy from the electron transport chain.
11. **Thinking glycolysis requires oxygen.** Glycolysis is anaerobic and occurs in the cytoplasm.
    Oxygen is only required for oxidative phosphorylation.
12. **Confusing the source of oxygen released in photosynthesis.** Oxygen comes from the splitting
    of water (photolysis), not from $\mathrm{CO}_2$.
13. **Forgetting the role of PEP carboxylase in C4 plants.** PEP carboxylase has no oxygenase
    activity, unlike RuBisCO, so it does not catalyse photorespiration.

## Practice Questions

1. Trace the complete path of a carbon atom from $\mathrm{CO}_2$ to glucose through the Calvin
   cycle, including the number of turns needed.

2. Explain why poisons like cyanide (which blocks Complex IV of the ETC) are lethal.

3. Compare the ATP yield of aerobic respiration with fermentation. Why does aerobic respiration
   produce so much more ATP?

4. A researcher adds a proton ionophore (a chemical that makes the thylakoid membrane permeable to
   $\mathrm{H}^+$) to chloroplasts. Predict the effect on ATP synthesis and explain why.

5. Explain how C4 plants minimize photorespiration and why this is advantageous in hot, dry
   climates.

6. Describe the role of RuBisCO in both the Calvin cycle and photorespiration.

7. During intense exercise, muscle cells switch to lactic acid fermentation. Explain why this is
   necessary and how it affects ATP production.

8. Calculate the total ATP yield from one molecule of glucose, assuming 2.5 ATP per NADH and 1.5 ATP
   per $\mathrm{FADH}_2$ in the electron transport chain.

9. Explain the chemiosmotic theory of ATP production. How is it similar in mitochondria and
   chloroplasts, and how does it differ?

10. A plant is grown in an atmosphere with radioactive ${}^{14}\mathrm{CO}_2$. Describe the path of
    the radioactive carbon from the atmosphere to glucose, naming the molecules it passes through.

11. Compare the light-dependent reactions and the Calvin cycle in terms of location, inputs,
    outputs, and dependence on light.

12. Explain why the proton gradient is necessary for ATP synthase to function.

13. Describe the role of PEP carboxylase in C4 photosynthesis and explain why it has a higher
    affinity for $\mathrm{CO}_2$ than RuBisCO.

14. A researcher measures the rate of oxygen production by isolated chloroplasts under different
    light intensities. Sketch the expected graph and explain its shape.

15. Explain why uncoupling proteins (which make the inner mitochondrial membrane permeable to
    protons) cause increased oxygen consumption but decreased ATP production.

16. Describe how the products of the light-dependent reactions (ATP and NADPH) are used in the
    Calvin cycle.

17. Explain why fermentation is less efficient than aerobic respiration in terms of ATP yield per
    glucose.

18. Compare the electron transport chains in mitochondria and chloroplasts. What are the key
    similarities and differences?

19. Explain the effect of increasing temperature on the rate of photosynthesis, including why very
    high temperatures reduce the rate.

20. A student claims that "plants release oxygen during photosynthesis and absorb oxygen during
    respiration." Evaluate this claim for a plant in (a) bright sunlight and (b) complete darkness.

21. Explain why the glycerol-3-phosphate shuttle reduces the total ATP yield from glycolysis
    compared to the malate-aspartate shuttle.

22. Describe the mechanism of brown fat thermogenesis and explain how it differs from normal
    oxidative phosphorylation.

23. A researcher isolates mitochondria and measures oxygen consumption and ATP production in the
    presence and absence of DNP (dinitrophenol). Explain the expected results.

24. Explain how the enzyme RuBisCO can be both essential for photosynthesis and wasteful (through
    photorespiration). Why has evolution not produced a better enzyme?

25. Compare the structure and function of ATP synthase in mitochondria and chloroplasts.

## Review: Detailed Comparison of Respiration and Photosynthesis

Understanding the similarities and differences between these two processes is essential for the AP
exam.

| Feature           | Cellular Respiration                                                                                   | Photosynthesis                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Location          | Cytoplasm and mitochondria                                                                             | Chloroplasts                                                                                           |
| Organisms         | All living organisms                                                                                   | Plants, algae, some bacteria                                                                           |
| Overall equation  | $\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6 + 6\mathrm{O}_2 \to 6\mathrm{CO}_2 + 6\mathrm{H}_2\mathrm{O}$ | $6\mathrm{CO}_2 + 6\mathrm{H}_2\mathrm{O} \to \mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6 + 6\mathrm{O}_2$ |
| Energy change     | Exergonic ($\Delta G \lt 0$)                                                                           | Endergonic ($\Delta G \gt 0$)                                                                          |
| Electron donor    | Glucose (organic molecule)                                                                             | Water ($\mathrm{H}_2\mathrm{O}$)                                                                       |
| Electron acceptor | $\mathrm{O}_2$ (final)                                                                                 | $\mathrm{NADP}^+$ (final)                                                                              |
| ATP production    | Substrate-level + oxidative                                                                            | Photophosphorylation                                                                                   |
| $\mathrm{CO}_2$   | Released                                                                                               | Consumed                                                                                               |
| $\mathrm{O}_2$    | Consumed                                                                                               | Released                                                                                               |

The two processes are essentially reverse reactions in terms of overall chemical equation, but they
differ fundamentally in their mechanisms: respiration catabolises glucose to harvest energy, while
photosynthesis uses light energy to build glucose.

## Review: Factors Affecting the Rate of Photosynthesis

**Light intensity:** At low light intensity, the rate of photosynthesis increases linearly because
more photons are available to excite electrons in the photosystems. As light intensity increases,
the rate plateaus because another factor (usually $\mathrm{CO}_2$ concentration or temperature)
becomes limiting.

**$\mathrm{CO}_2$ concentration:** At low $\mathrm{CO}_2$, the rate increases because RuBisCO has
more substrate to fix. At high $\mathrm{CO}_2$, the rate plateaus because light or temperature is
limiting. Commercial greenhouses often enrich the atmosphere with $\mathrm{CO}_2$ to increase crop
yields.

**Temperature:** Affects enzyme activity (particularly RuBisCO). The rate increases with temperature
up to an optimum (typically $25$--$35\degree$C for most plants) and then decreases sharply as
enzymes denature. The effect of temperature is most pronounced at high light intensities where light
is not the limiting factor.

**Water availability:** Water is a reactant in the light-dependent reactions, but it is rarely a
limiting factor in practice because plants use relatively little water for photosynthesis compared
to the amount lost through transpiration. However, severe drought causes stomata to close, reducing
$\mathrm{CO}_2$ uptake and therefore limiting photosynthesis.

**Worked Example: Interpreting a photosynthesis rate graph.**

A graph shows the rate of photosynthesis plotted against light intensity at two temperatures,
$15\degree$C and $30\degree$C.

1. At low light intensity, both curves rise at the same rate. Light is the limiting factor at both
   temperatures.
2. The $15\degree$C curve plateaus at a lower maximum rate than the $30\degree$C curve. At
   $15\degree$C, temperature limits the rate of enzyme-catalysed reactions (particularly RuBisCO
   activity).
3. At $30\degree$C, the higher enzyme activity allows a higher maximum rate of photosynthesis.
4. If a third curve at $40\degree$C were added, it might plateau at a similar or lower level than
   the $30\degree$C curve if $40\degree$C is close to the optimum, or it might show a lower rate if
   enzymes are beginning to denature.

## Review: The Role of the Electron Transport Chain in Respiration

The ETC is a series of membrane-bound protein complexes and mobile electron carriers that transfer
electrons from NADH and $\mathrm{FADH}_2$ to $\mathrm{O}_2$, the final electron acceptor. The energy
released by electron transfer is used to pump protons across the inner mitochondrial membrane,
creating the electrochemical gradient that drives ATP synthesis.

**Key points:**

- Electrons move through the complexes in order of increasingly positive reduction potential (each
  successive complex has a greater affinity for electrons).
- $\mathrm{O}_2$ is essential because it is the only molecule with a positive enough reduction
  potential to accept electrons at the end of the chain. Without $\mathrm{O}_2$, electrons back up
  through the chain, NADH and $\mathrm{FADH}_2$ cannot be oxidised, and the Krebs cycle stops.
- Some compounds that block the ETC are poisons: cyanide blocks Complex IV, rotenone blocks Complex
  I, and antimycin A blocks Complex III. DNP (dinitrophenol) is an uncoupler that makes the membrane
  permeable to protons, dissipating the gradient without producing ATP. Energy is released as heat
  instead.

**Worked Example: Effect of cyanide on cellular respiration.**

Cyanide blocks Complex IV (cytochrome c oxidase) of the ETC. When Complex IV is blocked:

1. Electrons cannot be passed to $\mathrm{O}_2$, so the entire ETC backs up.
2. NADH and $\mathrm{FADH}_2$ cannot be oxidised because there is no electron acceptor available.
3. Without NAD$^+$ regeneration, glycolysis, the link reaction, and the Krebs cycle all stop.
4. The proton gradient is not maintained, so ATP synthase cannot produce ATP.
5. The cell cannot produce ATP aerobically and must rely on fermentation (if possible), which
   produces only 2 ATP per glucose.
6. Cells with high energy demands (brain cells, heart muscle) are particularly affected, which is
   why cyanide is lethal even in small doses.

**Worked Example: DNP as an uncoupler.**

DNP (2,4-dinitrophenol) makes the inner mitochondrial membrane permeable to protons. The proton
gradient is dissipated because $\mathrm{H}^+$ can flow back across the membrane without passing
through ATP synthase. The ETC continues to operate (electrons are still passed to $\mathrm{O}_2$),
and oxygen consumption increases as the cell tries to maintain the gradient, but no ATP is produced.
All the energy from electron transfer is released as heat. This is the mechanism behind brown fat
thermogenesis in newborns and hibernating animals, where uncoupling proteins (UCP1) perform a
similar function. DNP was used as a weight-loss drug in the 1930s (it "burned" calories as heat) but
was banned due to dangerous side effects including fatal hyperthermia.

## Review: The Compensation Point

The **compensation point** is the light intensity at which the rate of photosynthesis exactly equals
the rate of respiration. At this point, there is no net gas exchange: all $\mathrm{CO}_2$ produced
by respiration is used for photosynthesis, and all $\mathrm{O}_2$ produced by photosynthesis is used
for respiration.

- Below the compensation point: respiration exceeds photosynthesis; the plant has a net consumption
  of $\mathrm{CO}_2$ and net release of $\mathrm{O}_2$ (or more precisely, the plant takes in more
  $\mathrm{O}_2$ than it releases).
- Above the compensation point: photosynthesis exceeds respiration; the plant has a net uptake of
  $\mathrm{CO}_2$ and net release of $\mathrm{O}_2$.

The compensation point varies among plants. Shade-tolerant plants have a lower compensation point
(their rate of respiration is lower, so they need less light to compensate). Sun-loving plants have
a higher compensation point.

## Review: Detailed ATP Yield Calculations

Understanding the precise ATP yield from aerobic respiration requires tracking every NADH and
$\mathrm{FADH}_2$ molecule through the electron transport chain.

**Per NADH:** Approximately 10 protons are pumped into the intermembrane space. Approximately 4
protons are needed per ATP (3 for ATP synthase + 1 for phosphate transport). So each NADH yields
approximately 2.5 ATP.

**Per $\mathrm{FADH}_2$:** Approximately 6 protons are pumped (electrons enter at Complex II,
bypassing Complex I). So each $\mathrm{FADH}_2$ yields approximately 1.5 ATP.

**Detailed accounting per glucose:**

| Source                | NADH   | $\mathrm{FADH}_2$ | Direct ATP | ATP from NADH | ATP from $\mathrm{FADH}_2$ | Total  |
| --------------------- | ------ | ----------------- | ---------- | ------------- | -------------------------- | ------ |
| Glycolysis            | 2      | 0                 | 2          | 5             | 0                          | 7      |
| Pyruvate oxidation    | 2      | 0                 | 0          | 5             | 0                          | 5      |
| Krebs cycle (2 turns) | 6      | 2                 | 2          | 15            | 3                          | 20     |
| **Total**             | **10** | **2**             | **4**      | **25**        | **3**                      | **32** |

**Why the actual yield may be lower:**

1. **Proton leak:** Some protons leak back across the inner mitochondrial membrane without passing
   through ATP synthase, reducing the proton-motive force.
2. **Cost of transport:** Cytoplasmic NADH must be shuttled into the mitochondrion. The glycerol-3-
   phosphate shuttle produces $\mathrm{FADH}_2$ (1.5 ATP) instead of NADH (2.5 ATP) in the
   mitochondrion, reducing the yield by 2 ATP per glucose.
3. **Variation in proton/ATP ratio:** The actual number of protons per ATP varies between organisms
   and tissues.

## Review: Regulation of Cellular Respiration

Respiration is regulated at several key control points to match ATP production to the cell's energy
demands.

**Phosphofructokinase (PFK):** The most important regulatory enzyme of glycolysis. It catalyses the
phosphorylation of fructose-6-phosphate to fructose-1,6-bisphosphate (the committed step of
glycolysis).

- **Inhibited by:** ATP (high energy signal -- when ATP is abundant, glycolysis should slow down),
  citrate (intermediate of the Krebs cycle -- signals that the cell already has sufficient
  intermediates for energy production).
- **Activated by:** AMP (low energy signal -- when ATP is being depleted, glycolysis should speed
  up), fructose-2,6-bisphosphate (a potent allosteric activator whose concentration increases when
  glucose is abundant).

**Pyruvate dehydrogenase (link reaction):** Converts pyruvate to acetyl-CoA. Inhibited by high
levels of ATP, NADH, and acetyl-CoA. Activated by high levels of ADP and pyruvate.

**Isocitrate dehydrogenase and $\alpha$-ketoglutarate dehydrogenase (Krebs cycle):** Both are
inhibited by ATP, NADH, and succinyl-CoA. Both are activated by ADP and $\mathrm{Ca}^{2+}$ (which
signals increased energy demand in muscle cells).

**Worked Example: How a sprinter's cells regulate respiration.**

During a sprint, the muscle cells' demand for ATP increases dramatically. ATP levels drop, AMP
levels rise, and ADP levels increase. These changes activate PFK and other regulatory enzymes,
speeding up glycolysis and the Krebs cycle. However, oxygen delivery cannot keep up with demand, so
the electron transport chain cannot process all the NADH produced. The cell switches to anaerobic
respiration (fermentation) to regenerate NAD$^+$ and maintain glycolysis. Lactate accumulates, and
the oxygen debt builds up.

## Review: Anaerobic Respiration in Various Organisms

While most eukaryotic organisms use lactic acid fermentation or alcoholic fermentation, some
prokaryotes carry out anaerobic respiration using electron acceptors other than oxygen.

**Nitrate respiration:** Some bacteria use nitrate ($\mathrm{NO}_3^-$) as the final electron
acceptor instead of oxygen. This is denitrification, which converts nitrate to nitrogen gas
($\mathrm{N}_2$). Denitrifying bacteria are important in the nitrogen cycle and are found in
waterlogged, anaerobic soils.

**Sulphate respiration:** Sulphate-reducing bacteria use sulphate ($\mathrm{SO}_4^{2-}$) as the
final electron acceptor, producing hydrogen sulphide ($\mathrm{H}_2\mathrm{S}$), which has a
characteristic "rotten egg" smell. These bacteria are found in anaerobic sediments and hot springs.

**Methanogenesis:** Archaea in anaerobic environments (e.g., swamps, landfill sites, the guts of
ruminants) use $\mathrm{CO}_2$ as the final electron acceptor, producing methane ($\mathrm{CH}_4$).
Methane is a potent greenhouse gas.

## Review: Photophosphorylation -- Linear and Cyclic

**Linear (non-cyclic) photophosphorylation:** The standard pathway involving both photosystems.
Produces both ATP and NADPH. Water is split, and oxygen is released.

**Cyclic photophosphorylation:** Uses only photosystem I. Electrons from ferredoxin are returned to
the cytochrome b6f complex (rather than being passed to $\mathrm{NADP}^+$), creating a proton
gradient that drives ATP synthesis. No NADPH is produced, and no water is split (no oxygen
released).

**Why cyclic photophosphorylation is important:** The Calvin cycle uses more ATP than NADPH (18 ATP
and 12 NADPH per glucose). Linear photophosphorylation produces ATP and NADPH in approximately equal
amounts. Cyclic photophosphorylation allows the plant to produce extra ATP without producing excess
NADPH, balancing the supply to meet the Calvin cycle's demands.

## Review: Photorespiration and Its Impact

**What is photorespiration?** When $\mathrm{CO}_2$ levels inside the leaf are low and $\mathrm{O}_2$
levels are high (e.g., on hot, dry days when stomata close to conserve water), RuBisCO binds
$\mathrm{O}_2$ instead of $\mathrm{CO}_2$. This produces one molecule of 3-PGA (3 carbons) and one
molecule of 2-phosphoglycolate (2 carbons). The 2-phosphoglycolate enters a salvage pathway in the
peroxisome and mitochondrion, ultimately releasing $\mathrm{CO}_2$ and consuming ATP without
producing any sugar.

**Impact:** Photorespiration can reduce the efficiency of photosynthesis by 25--50% in C3 plants
under hot, dry conditions. It is estimated to consume approximately 25% of the carbon fixed by
photosynthesis globally.

**Why RuBisCO is not more specific:** RuBisCO evolved in an atmosphere with very little
$\mathrm{O}_2$ (and abundant $\mathrm{CO}_2$). As photosynthesis produced $\mathrm{O}_2$ over
billions of years, the $\mathrm{O}_2$ concentration increased, making photorespiration inevitable.
Evolution has not produced a more $\mathrm{CO}_2$-specific form of RuBisCO, possibly because any
mutation that increases specificity also decreases catalytic rate.

**C4 and CAM adaptations:** C4 and CAM plants have evolved mechanisms to concentrate $\mathrm{CO}_2$
at the site of RuBisCO, reducing photorespiration. C4 plants use a spatial separation (mesophyll and
bundle-sheath cells); CAM plants use a temporal separation (fixing $\mathrm{CO}_2$ at night).

## Review: Summary Comparison Table

| Process               | Cellular Respiration                     | Photosynthesis                 |
| --------------------- | ---------------------------------------- | ------------------------------ |
| Purpose               | Harvest energy from glucose              | Build glucose from light       |
| ETC location          | Inner mitochondrial membrane             | Thylakoid membrane             |
| ETC final acceptor    | $\mathrm{O}_2$                           | $\mathrm{NADP}^+$              |
| Proton gradient site  | Intermembrane space                      | Thylakoid lumen                |
| ATP synthase location | Inner mitochondrial membrane             | Thylakoid membrane             |
| ATP yield per glucose | ~30-32 ATP                               | ~18 ATP consumed per glucose   |
| Water role            | Final product ($\mathrm{H}_2\mathrm{O}$) | Reactant (split for electrons) |
| Carbon dioxide role   | Waste product                            | Reactant (fixed by RuBisCO)    |

## Review: Brown Fat and Uncoupling Proteins

Brown adipose tissue (brown fat) is specialised for thermogenesis (heat production). It contains
mitochondria with uncoupling protein 1 (UCP1, also called thermogenin), which forms a channel in the
inner mitochondrial membrane that allows protons to flow back into the matrix without passing
through ATP synthase.

**Mechanism:**

1. Brown fat cells oxidise fatty acids, generating NADH and $\mathrm{FADH}_2$.
2. The ETC pumps protons into the intermembrane space, creating a gradient.
3. Instead of flowing through ATP synthase, protons flow through UCP1, dissipating the gradient as
   heat.
4. No ATP is produced; all the energy from electron transfer is released as heat.

**Physiological significance:** Brown fat is abundant in newborns (who have a large surface
area-to-volume ratio and cannot shiver effectively) and in hibernating animals. It helps maintain
body temperature. Adults also have small amounts of brown fat, and there is research interest in
activating brown fat as a treatment for obesity (burning calories as heat).

## Review: The Role of Alternative Oxidases

Some plants and fungi possess an alternative oxidase (AOX) in their mitochondrial ETC. AOX transfers
electrons directly from ubiquinol to $\mathrm{O}_2$, bypassing Complexes III and IV. This pathway
does not pump protons, so no ATP is produced, but it does allow the ETC to continue operating when
the cytochrome pathway is saturated. AOX also reduces the production of reactive oxygen species
(ROS) by preventing over-reduction of the ETC.

## Review: Metabolic Disorders of Energy Metabolism

Several inherited disorders affect cellular energy metabolism:

**Leigh syndrome:** A severe neurological disorder caused by defects in mitochondrial ETC complexes
(especially Complex I or IV). Symptoms include developmental delay, muscle weakness, and respiratory
failure. Cells cannot produce sufficient ATP, particularly affecting high-energy-demand tissues like
the brain.

**Pyruvate dehydrogenase deficiency:** Caused by mutations in the pyruvate dehydrogenase complex.
Pyruvate cannot be converted to acetyl-CoA, so it accumulates and is converted to lactate (lactic
acidosis). Treatment includes a ketogenic diet (high in fats, which produce acetyl-CoA directly
through beta-oxidation, bypassing the link reaction).

**Phosphofructokinase deficiency (Tarui disease):** A glycogen storage disease caused by a
deficiency of muscle PFK. Affected individuals experience muscle pain and cramping during exercise
because glycolysis cannot proceed past the PFK step.

## Practice Problems

<details>
<summary>Question 1: ATP yield with a mitochondrial inhibitor</summary>

A researcher adds rotenone, which blocks Complex I of the electron transport chain, to isolated
mitochondria. Pyruvate and ADP are supplied. Calculate the maximum ATP yield per glucose molecule
under these conditions, assuming 2.5 ATP per NADH and 1.5 ATP per $\mathrm{FADH}_2$. Explain which
electrons can still reach the ETC.

</details>

<details>
<summary>Answer</summary>

With Complex I blocked, NADH from glycolysis, pyruvate oxidation, and the Krebs cycle cannot donate
electrons to the ETC. However, $\mathrm{FADH}_2$ from the Krebs cycle donates electrons at Complex
II, which is downstream of the block. So only the $\mathrm{FADH}_2$ pathway is functional.

ATP sources:

- Glycolysis: 2 ATP (substrate-level). The 2 NADH from glycolysis cannot enter the ETC.
- Pyruvate oxidation: 0 ATP. The 2 NADH cannot enter the ETC.
- Krebs cycle: 2 ATP (substrate-level) + 2 $\mathrm{FADH}_2 \times 1.5 = 3$ ATP.

Total: 2 + 2 + 3 = 7 ATP per glucose.

The 6 NADH from pyruvate oxidation (2) and the Krebs cycle (4) are unable to donate electrons
because Complex I is blocked. Only the 2 $\mathrm{FADH}_2$ from the Krebs cycle can feed electrons
through Complex II to Complex III, cytochrome c, and Complex IV.

</details>

<details>
<summary>Question 2: Calvin cycle stoichiometry</summary>

How many molecules of ATP and NADPH are required to synthesise one molecule of sucrose
($\mathrm{C}_{12}\mathrm{H}_{22}\mathrm{O}_{11}$) from $\mathrm{CO}_2$? Show your working.

</details>

<details>
<summary>Answer</summary>

Sucrose is a disaccharide of glucose + fructose, each with 6 carbons, so 12 carbons total. Each G3P
has 3 carbons, so 12/3 = 4 G3P molecules are needed. However, 3 $\mathrm{CO}_2$ produce 6 G3P (5
recycled, 1 net), so 1 net G3P requires 3 $\mathrm{CO}_2$, 9 ATP, and 6 NADPH.

For 4 net G3P: 4 $\times$ 3 = 12 $\mathrm{CO}_2$, 4 $\times$ 9 = 36 ATP, and 4 $\times$ 6 = 24
NADPH.

Since the cycle turns 6 times per glucose (2 G3P), for sucrose (4 G3P) it turns 12 times: 12
$\mathrm{CO}_2$, 36 ATP, 24 NADPH.

</details>

<details>
<summary>Question 3: DNP and oxygen consumption</summary>

Isolated mitochondria are supplied with pyruvate, ADP, and $\mathrm{P}_i$. The rate of oxygen
consumption is measured. DNP is then added. Predict and explain the change in oxygen consumption and
ATP production after adding DNP.

</details>

<details>
<summary>Answer</summary>

Oxygen consumption will increase after DNP is added. DNP is an uncoupler that makes the inner
mitochondrial membrane permeable to protons. The proton gradient is dissipated because
$\mathrm{H}^+$ flows back across the membrane without passing through ATP synthase. The ETC
continues to operate (electrons are still passed to $\mathrm{O}_2$), and oxygen consumption
increases as the cell tries to maintain the gradient by pumping more protons. However, no ATP is
produced because the gradient is destroyed. All the energy from electron transfer is released as
heat. This is similar to the mechanism of brown fat thermogenesis, where uncoupling protein 1 (UCP1)
performs the same function.

</details>

<details>
<summary>Question 4: Fermentation and lactate accumulation</summary>

A runner sprints for 30 seconds. During this time, the muscle cells produce lactate at a rate of
$0.5 \mathrm{ mmol/(g\cdot min)}$. If the muscle weighs $25 \mathrm{ kg}$, calculate the total moles
of lactate produced and the number of glucose molecules consumed by fermentation during the sprint.

</details>

<details>
<summary>Answer</summary>

Lactate production rate:
$0.5 \mathrm{ mmol/(g\cdot min)} = 0.5 \times 10^{-3} \mathrm{ mol/(g\cdot min)}$.

Muscle mass: $25 \mathrm{ kg} = 25,000 \mathrm{ g}$.

Time: $0.5 \mathrm{ min}$.

Total lactate: $0.5 \times 10^{-3} \times 25,000 \times 0.5 = 6.25 \mathrm{ mol}$.

Each glucose produces 2 lactate molecules (via fermentation: 1 glucose $\to$ 2 pyruvate $\to$ 2
lactate).

Moles of glucose consumed: $6.25 / 2 = 3.125 \mathrm{ mol}$.

Number of glucose molecules: $3.125 \times 6.022 \times 10^{23} = 1.88 \times 10^{24}$ molecules.

</details>

<details>
<summary>Question 5: Photorespiration calculation</summary>

In a C3 plant on a hot dry day, RuBisCO fixes $\mathrm{O}_2$ for 20% of its reactions instead of
$\mathrm{CO}_2$. If the plant fixes $1000 \mathrm{ molecules}$ of $\mathrm{CO}_2$ per minute, how
many molecules of $\mathrm{CO}_2$ are released by photorespiration per minute? What is the net
carbon gain per minute?

</details>

<details>
<summary>Answer</summary>

If RuBisCO fixes $\mathrm{O}_2$ for 20% of its reactions, then 20% of the RuBP molecules undergo
photorespiration and 80% undergo normal carbon fixation.

Total RuBisCO reactions per minute: Let this be $R$.

Carbon-fixing reactions: $0.8R = 1000$, so $R = 1250$.

Photorespiration reactions: $0.2R = 0.2 \times 1250 = 250$.

For every photorespiration event, approximately 0.5 molecules of $\mathrm{CO}_2$ are released
(2-phosphoglycolate is partially salvaged, with a net loss of about 0.5 $\mathrm{CO}_2$ per
oxygenation event).

$\mathrm{CO}_2$ released by photorespiration: $250 \times 0.5 = 125$ molecules per minute.

Net carbon gain per minute: $1000 - 125 = 875$ molecules of $\mathrm{CO}_2$ fixed.

Photorespiration reduces the net carbon gain by approximately 12.5% in this scenario.

</details>
