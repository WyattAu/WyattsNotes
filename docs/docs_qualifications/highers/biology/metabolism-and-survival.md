---
title: Metabolism and Survival
date: 2026-04-14
tags:
  - Biology
  - Advanced Highers
categories:
  - Biology
slug: metabolism-and-survival
---

# Metabolism and Survival

:::info

This chapter covers **Advanced Higher** Biology content, extending beyond Higher level.

:::

## Metabolism

### Enzymes

**Enzymes** are biological catalysts that speed up biochemical reactions by lowering the activation
energy. They are globular proteins with a specific active site complementary in shape to the
substrate.

**Lock and Key model:** The substrate fits exactly into the active site like a key in a lock. Rigid
and specific.

**Induced Fit model:** The active site changes shape slightly to accommodate the substrate. More
widely accepted.

**Factors affecting enzyme activity:**

**Temperature:**

- Rate increases with temperature (up to the optimum) due to increased kinetic energy
- Beyond the optimum, the enzyme denatures (active site loses its shape)
- Typical optimum for human enzymes: 37$^\circ$C

**pH:**

- Each enzyme has an optimum pH
- Extreme pH changes the charge of amino acids, disrupting hydrogen bonds and ionic bonds
- Pepsin: optimum pH 2 (stomach); trypsin: optimum pH 8 (small intestine)

**Substrate concentration:**

- As substrate concentration increases, rate increases
- Eventually plateaus when all active sites are occupied (Vmax)

**Enzyme concentration:**

- More enzyme molecules = more active sites = higher rate (provided substrate is not limiting)

**Inhibitors:**

| Type            | Mechanism                                           | Reversibility      |
| --------------- | --------------------------------------------------- | ------------------ |
| Competitive     | Binds to active site; competes with substrate       | Reversible         |
| Non-competitive | Binds to allosteric site; changes active site shape | Usually reversible |

### Michaelis-Menten Kinetics

The relationship between enzyme activity and substrate concentration is described by the
Michaelis-Menten equation:

$$v = \frac{V_{\max}[S]}{K_m + [S]}$$

where:

- $v$ = reaction rate
- $V_{\max}$ = maximum rate (when enzyme is saturated)
- $[S]$ = substrate concentration
- $K_m$ = Michaelis constant (substrate concentration at half $V_{\max}$)

**$K_m$ interpretation:**

- Low $K_m$: High affinity between enzyme and substrate
- High $K_m$: Low affinity between enzyme and substrate

**Lineweaver-Burk plot:** A double reciprocal plot of $1/v$ vs. $1/[S]$:

$$\frac{1}{v} = \frac{K_m}{V_{\max}} \cdot \frac{1}{[S]} + \frac{1}{V_{\max}}$$

- Y-intercept: $1/V_{\max}$
- X-intercept: $-1/K_m$
- Gradient: $K_m/V_{\max}$

**Effect of inhibitors on Lineweaver-Burk plots:**

- **Competitive:** Increases $K_m$ (apparent); $V_{\max}$ unchanged. Lines intersect on the y-axis.
- **Non-competitive:** Decreases $V_{\max}$; $K_m$ unchanged. Lines intersect on the x-axis.

**Worked Example: Determining $K_m$ and $V_{\max}$ from data.**

An enzyme has the following rates at different substrate concentrations:

| [S] (mM) | v ($\mu$mol/min) |
| -------- | ---------------- |
| 1        | 1.67             |
| 2        | 2.86             |
| 5        | 4.55             |
| 10       | 5.88             |
| 20       | 6.90             |
| 50       | 7.69             |
| 100      | 8.00             |

At very high [S], $v$ approaches $V_{\max} \approx 8$ $\mu$mol/min.

At $v = V_{\max}/2 = 4$, $[S] = K_m \approx 5$ mM.

So $K_m = 5$ mM and $V_{\max} = 8$ $\mu$mol/min.

### Cellular Respiration

#### Glycolysis (Cytoplasm)

Glucose ($\text{C}_6\text{H}_{12}\text{O}_6$) is broken down to two molecules of pyruvate
($\text{C}_3\text{H}_4\text{O}_3$).

1. Glucose is phosphorylated (2 ATP used)
2. 6-carbon intermediate is split into two 3-carbon molecules
3. Each 3-carbon molecule is oxidised and phosphorylated
4. 2 NADH and 4 ATP produced (net: 2 ATP, 2 NADH)

#### Link Reaction (Mitochondrial Matrix)

Pyruvate is decarboxylated and dehydrogenated:

$$\text{Pyruvate} + \text{NAD}^+ + \text{CoA} \to \text{Acetyl-CoA} + \text{CO}_2 + \text{NADH}$$

(Per glucose: 2 $\text{CO}_2$, 2 NADH)

#### Krebs Cycle (Mitochondrial Matrix)

1. Acetyl-CoA (2C) combines with oxaloacetate (4C) to form citrate (6C)
2. Citrate is decarboxylated and oxidised back to oxaloacetate
3. Per turn: 2 $\text{CO}_2$, 3 NADH, 1 FADH$_2$, 1 ATP
4. Per glucose: 4 $\text{CO}_2$, 6 NADH, 2 FADH$_2$, 2 ATP

#### Oxidative Phosphorylation (Inner Mitochondrial Membrane)

- NADH and FADH$_2$ donate electrons to the electron transport chain
- Electrons pass through a series of protein complexes (I, III, IV)
- Energy released pumps protons from the matrix to the intermembrane space
- Creates a proton gradient (proton motive force)
- Protons flow back through ATP synthase, producing ATP
- Oxygen is the final electron acceptor, forming water

**ATP yield per glucose:**

- Glycolysis: 2 ATP (net) + 2 NADH $\to$ ~5 ATP
- Link reaction: 2 NADH $\to$ ~5 ATP
- Krebs cycle: 2 ATP + 6 NADH + 2 FADH$_2$ $\to$ ~22 ATP
- **Total: approximately 38 ATP** (theoretical maximum; actual yield is about 30-32 ATP)

### Photosynthesis

#### Light-Dependent Reactions (Thylakoid Membranes)

1. Light energy is absorbed by photosynthetic pigments (chlorophyll a, chlorophyll b, carotenoids)
   in Photosystem II and Photosystem I
2. Water is split by photolysis: $2\text{H}_2\text{O} \to 4\text{H}^+ + 4e^- + \text{O}_2$
3. Electrons pass through the electron transport chain, generating a proton gradient
4. ATP is produced by photophosphorylation
5. NADP is reduced to NADPH

#### Light-Independent Reactions (Calvin Cycle, Stroma)

1. $\text{CO}_2$ is fixed by ribulose bisphosphate carboxylase (RuBisCO) combining with ribulose
   bisphosphate (RuBP, 5C) to form two molecules of glycerate-3-phosphate (GP, 3C)
2. GP is reduced to triose phosphate (TP) using ATP and NADPH
3. Some TP is used to synthesise glucose and other organic compounds
4. Most TP is used to regenerate RuBP (using ATP)

**Summary of the Calvin cycle:**

- 3 turns of the cycle fix 3 $\text{CO}_2$ to produce 1 TP (G3P)
- 6 turns fix 6 $\text{CO}_2$ to produce 1 glucose molecule

---

## Survival

### Homeostasis

**Homeostasis** is the maintenance of a constant internal environment despite changes in the
external environment.

**Key principles:**

- Stimulus $\to$ Receptor $\to$ Coordinator $\to$ Effector $\to$ Response
- Negative feedback loops maintain stability

### Thermoregulation

**Temperature regulation in mammals:**

**When too hot:**

- Vasodilation: Blood vessels near the skin surface dilate, increasing heat loss by radiation
- Sweating: Evaporation of sweat removes heat
- Piloerection (in some mammals): Fur lies flat to reduce insulation

**When too cold:**

- Vasoconstriction: Blood vessels near the skin constrict, reducing heat loss
- Shivering: Muscle contractions generate heat
- Piloerection: Fur stands up to trap air (insulation)
- Brown fat metabolism: Non-shivering thermogenesis

**The thermoregulatory centre** is in the hypothalamus. It receives input from thermoreceptors in
the skin and in the hypothalamus itself.

### Osmoregulation

**The kidneys** regulate water balance and blood composition.

**Nephron structure:**

- **Bowman's capsule:** Filtration of blood; forms glomerular filtrate
- **Proximal convoluted tubule:** Selective reabsorption of all glucose, amino acids, and some water
  and ions
- **Loop of Henle:** Countercurrent multiplier; creates a concentration gradient in the medulla for
  water reabsorption
- **Distal convoluted tubule:** Fine-tuning of water and ion balance (under hormonal control)
- **Collecting duct:** Water reabsorption under ADH control

**ADH (Antidiuretic Hormone):**

- Produced by the hypothalamus, released by the posterior pituitary
- Increases the permeability of the collecting duct to water
- More ADH = more water reabsorbed = more concentrated urine
- Triggered by increased blood osmolarity (detected by osmoreceptors in the hypothalamus)

**Worked Example: ADH and water balance.**

A person drinks 2 litres of water. What happens to their blood osmolarity and ADH levels?

1. The excess water is absorbed from the gut into the blood.
2. Blood osmolarity decreases (blood becomes more dilute).
3. Osmoreceptors in the hypothalamus detect the decrease in osmolarity.
4. The hypothalamus reduces ADH production and release.
5. The collecting duct becomes less permeable to water.
6. Less water is reabsorbed from the filtrate.
7. Large volumes of dilute urine are produced.
8. Blood osmolarity returns to normal.

### Immune System

**Innate immunity (non-specific):**

- Physical barriers: skin, mucous membranes, cilia, stomach acid
- Phagocytosis: Phagocytes (macrophages, neutrophils) engulf and digest pathogens
- Inflammation: Increased blood flow, increased permeability of capillaries, recruitment of
  phagocytes
- Fever: Elevated temperature inhibits pathogen growth

**Adaptive immunity (specific):**

- **Cell-mediated response:** T lymphocytes
  - Helper T cells: Release cytokines to stimulate B cells and cytotoxic T cells
  - Cytotoxic T cells: Kill infected body cells by releasing perforins
  - Memory T cells: Provide long-term immunity
- **Humoral response:** B lymphocytes
  - Plasma cells: Produce and secrete antibodies
  - Memory B cells: Provide long-term immunity
  - Antibodies: Y-shaped proteins that bind to specific antigens on pathogens

**Antibody structure:**

- Two heavy chains and two light chains
- Variable region: Unique binding site for a specific antigen
- Constant region: Determines the antibody class (IgG, IgM, IgA, IgE, IgD)

**Primary vs. secondary immune response:**

- **Primary response:** Initial exposure to antigen; slow response, produces IgM then IgG; memory
  cells formed
- **Secondary response:** Subsequent exposure; rapid, stronger response; mainly IgG; due to memory
  cells

**Vaccination:**

- Introduces a harmless form of the antigen (attenuated, dead, or subunit)
- Stimulates primary immune response without causing disease
- Memory cells provide protection against future infection
- **Herd immunity:** When a high proportion of the population is immune, the spread of disease is
  reduced

---

## Common Pitfalls

1. **ATP yield:** The theoretical maximum of 38 ATP per glucose is rarely achieved. Actual yield is
   about 30-32 due to proton leak and cost of transporting molecules.

2. **$K_m$ interpretation:** Low $K_m$ means HIGH affinity (less substrate needed to reach half
   $V_{\max}$), not low affinity.

3. **Calvin cycle:** 6 turns are needed to produce 1 glucose, not 1 turn.

4. **ADH mechanism:** ADH makes the collecting duct MORE permeable, not less. More ADH means more
   concentrated urine, not more dilute.

5. **Innate vs. adaptive immunity:** Innate is non-specific and immediate; adaptive is specific and
   takes time to develop but provides memory.

---

## Practice Questions

1. Explain how competitive and non-competitive inhibitors affect enzyme activity, with reference to
   the Michaelis-Menten equation.

2. Calculate the number of ATP molecules produced from the complete oxidation of one molecule of
   glucose, showing the contribution from each stage.

3. Explain how the structure of the mitochondrion is adapted for its function in aerobic
   respiration.

4. Describe the role of ADH in osmoregulation and explain what happens when a person drinks a large
   volume of water.

5. Compare the primary and secondary immune responses, explaining why vaccination provides
   protection.

6. Explain the principle of negative feedback using thermoregulation as an example.

7. Draw and label a Lineweaver-Burk plot showing the effect of a competitive inhibitor on enzyme
   kinetics.

8. Explain the role of the loop of Henle in producing concentrated urine in desert animals.

9. Describe the process of oxidative phosphorylation, explaining the role of the electron transport
   chain and ATP synthase.

10. Explain why the Calvin cycle stops in the dark, even though it does not directly require light.

11. Describe the structure of an antibody and explain how antibodies provide specific immunity
    against pathogens.

12. Explain how vaccination leads to herd immunity and why this is important for protecting
    immunocompromised individuals.

13. A student measures the effect of pH on the activity of pepsin. Sketch the expected graph and
    explain its shape.

14. Describe the process of phagocytosis and explain how it differs from the action of antibodies.

15. Explain why fever can be beneficial during an infection, with reference to enzyme activity.

16. Calculate the $K_m$ and $V_{\max}$ of an enzyme from the following data: [S] = 2 mM, v = 3.33
    $\mu$mol/min; [S] = 10 mM, v = 6.67 $\mu$mol/min; [S] = 50 mM, v = 8.33 $\mu$mol/min.

17. Explain how the countercurrent multiplier in the loop of Henle creates a concentration gradient
    in the kidney medulla.

18. Compare and contrast the light-dependent and light-independent reactions of photosynthesis.

19. Describe the role of cytokines in the immune response and explain how they coordinate the
    activities of different immune cells.

20. Explain why type 1 diabetes is an autoimmune disease and describe how it affects blood glucose
    regulation.

## Review: Aerobic Respiration -- Detailed ATP Accounting

The precise ATP yield from aerobic respiration depends on the shuttle system used to transport NADH
from glycolysis into the mitochondria and on the actual number of protons pumped per complex.

**Using modern estimates (2.5 ATP per NADH, 1.5 ATP per FADH$_2$):**

| Stage              | NADH   | FADH$_2$ | Direct ATP | Total ATP |
| ------------------ | ------ | -------- | ---------- | --------- |
| Glycolysis         | 2      | 0        | 2          | 7         |
| Pyruvate oxidation | 2      | 0        | 0          | 5         |
| Krebs cycle        | 6      | 2        | 2          | 20        |
| **Total**          | **10** | **2**    | **4**      | **32**    |

Note: The actual yield may be lower (approximately 30 ATP) due to proton leak across the inner
mitochondrial membrane and the cost of transporting ATP out of the mitochondria.

**Glycolysis NADH shuttle systems:** The cytoplasmic NADH produced in glycolysis cannot cross the
inner mitochondrial membrane. Two shuttle systems transport the electrons:

- **Malate-aspartate shuttle:** Transfers electrons to mitochondrial NAD$^+$, producing NADH inside
  the mitochondrion (yields 2.5 ATP per NADH). This is the more efficient shuttle.
- **Glycerol-3-phosphate shuttle:** Transfers electrons to mitochondrial FAD, producing
  $\text{FADH}_2$ (yields 1.5 ATP per $\text{FADH}_2$). This is less efficient.

The choice of shuttle system affects the total ATP yield. Using the malate-aspartate shuttle gives a
total of 32 ATP; using the glycerol-3-phosphate shuttle gives approximately 30 ATP.

## Review: Photosynthesis -- Light-Dependent Reactions in Detail

**Photosystem II (P680):**

1. Light energy is absorbed by antenna pigments and transferred to the reaction centre chlorophyll
   P680.
2. An electron in P680 is excited to a higher energy level and is captured by the primary electron
   acceptor.
3. P680$^+$ is a very strong oxidant and extracts electrons from water (photolysis):
   $2\text{H}_2\text{O} \to 4\text{H}^+ + 4e^- + \text{O}_2$.
4. The electrons pass through the electron transport chain (plastoquinone, cytochrome b6f complex,
   plastocyanin), pumping protons from the stroma into the thylakoid lumen.

**Photosystem I (P700):**

1. Light energy excites electrons in P700.
2. Electrons are passed to ferredoxin, then to $\text{NADP}^+$ reductase.
3. $\text{NADP}^+$ reductase reduces $\text{NADP}^+$ to NADPH using the electrons and a proton from
   the stroma.

**Chemiosmosis in chloroplasts:**

The proton gradient across the thylakoid membrane (higher $\text{H}^+$ concentration in the lumen)
drives ATP synthesis by ATP synthase. This is called photophosphorylation. The proton gradient is
generated by: (1) splitting of water (releases $\text{H}^+$ into the lumen), (2) pumping of
$\text{H}^+$ by the cytochrome b6f complex, and (3) removal of $\text{H}^+$ from the stroma by
$\text{NADP}^+$ reductase.

**Worked Example: Products of the light-dependent reactions.**

For every 2 water molecules split:

- 1 $\text{O}_2$ released
- 4 electrons enter the ETC
- 4 $\text{H}^+$ released into the lumen
- Approximately 3 ATP produced (by chemiosmosis)
- 2 NADPH produced

To fix 6 $\text{CO}_2$ molecules (to make one glucose), the light reactions must produce 18 ATP and
12 NADPH.

## Review: Enzyme Inhibition in Metabolic Regulation

Enzyme inhibition is a key mechanism for regulating metabolic pathways.

**Competitive inhibition:** The inhibitor has a similar structure to the substrate and competes for
the active site. The effect can be overcome by increasing substrate concentration. Examples:
malonate inhibits succinate dehydrogenase in the Krebs cycle; methotrexate inhibits dihydrofolate
reductase (used in cancer chemotherapy).

**Non-competitive inhibition:** The inhibitor binds to an allosteric site (different from the active
site), changing the enzyme's conformation and reducing its activity. Increasing substrate
concentration does not overcome the inhibition. Examples: heavy metal ions (Pb$^{2+}$, Hg$^{2+}$)
bind to -SH groups and denature enzymes; cyanide inhibits cytochrome c oxidase.

**End-product inhibition (feedback inhibition):** The final product of a metabolic pathway inhibits
an enzyme earlier in the pathway, preventing overproduction. Example: ATP inhibits
phosphofructokinase (PFK) in glycolysis, and citrate (from the Krebs cycle) also inhibits PFK.

**Worked Example: Feedback inhibition of the Krebs cycle.**

When ATP levels are high, the cell does not need to produce more energy through the Krebs cycle.
High ATP inhibits several enzymes in the pathway:

- Phosphofructokinase (glycolysis) is inhibited by ATP and citrate.
- Pyruvate dehydrogenase (link reaction) is inhibited by ATP, NADH, and acetyl-CoA.
- Isocitrate dehydrogenase (Krebs cycle) is inhibited by ATP and NADH.

This coordinated inhibition prevents unnecessary energy production when the cell already has
sufficient ATP.

## Review: The Immune Response -- Vaccination

**How vaccines work:**

A vaccine introduces an antigen (or a weakened/inactivated pathogen) into the body without causing
disease. This triggers the primary immune response, producing memory B cells and memory T cells.
When the actual pathogen enters the body, the memory cells mount a rapid secondary response,
producing large quantities of antibodies before the pathogen can cause illness.

**Herd immunity:** When a high proportion of a population is immune to a disease (through
vaccination or previous infection), the spread of the disease is limited because there are too few
susceptible individuals for the pathogen to infect. This protects even those who cannot be
vaccinated (e.g., newborns, immunocompromised individuals). The threshold for herd immunity varies
by disease: measles requires approximately 95% immunity; polio requires approximately 80%.

**Types of vaccines:**

| Type            | Example           | Mechanism                                           |
| --------------- | ----------------- | --------------------------------------------------- |
| Live attenuated | MMR vaccine       | Weakened form of the pathogen                       |
| Inactivated     | Influenza vaccine | Killed pathogen, cannot reproduce                   |
| Subunit         | Hepatitis B       | Specific antigens from the pathogen                 |
| Toxoid          | Tetanus vaccine   | Inactivated toxin from the pathogen                 |
| mRNA            | COVID-19 vaccines | mRNA encoding a viral antigen (e.g., spike protein) |

## Review: The Kidney and Osmoregulation in Detail

**Structure of the nephron in detail:**

The nephron is the functional unit of the kidney. Each kidney contains approximately 1 million
nephrons.

1. **Bowman's capsule and glomerulus (ultrafiltration):** Blood enters the glomerulus (a knot of
   capillaries) at high pressure. The afferent arteriole is wider than the efferent arteriole, which
   creates high hydrostatic pressure. Water, glucose, amino acids, urea, and ions are forced out of
   the blood through the basement membrane into the Bowman's capsule. Large proteins and blood cells
   are retained. The basement membrane acts as a filter, allowing only small molecules to pass
   through.

2. **Proximal convoluted tubule (selective reabsorption):** All glucose, all amino acids, most water
   and ions, and some urea are reabsorbed. Glucose and amino acids are reabsorbed by active
   transport (secondary active transport coupled to $\text{Na}^+$ reabsorption). Water follows by
   osmosis. The PCT has many mitochondria to provide ATP for active transport and microvilli to
   increase the surface area for reabsorption.

3. **Loop of Henle (countercurrent multiplication):**
   - **Descending limb:** Permeable to water but not to ions. Water leaves the filtrate by osmosis
     into the increasingly concentrated medulla. The filtrate becomes more concentrated.
   - **Thin ascending limb:** Impermeable to water. $\text{Na}^+$ and $\text{Cl}^-$ diffuse out
     passively.
   - **Thick ascending limb:** Actively pumps out $\text{Na}^+$, $\text{K}^+$, and $\text{Cl}^-$.
     Impermeable to water. The medulla becomes increasingly concentrated from cortex to papilla
     (approximately 300 mOsm at the cortex to 1200 mOsm at the papilla).

4. **Distal convoluted tubule:** Fine-tuning of water and ion balance under hormonal control:
   - **ADH:** Makes the collecting duct more permeable to water.
   - **Aldosterone:** Increases $\text{Na}^+$ reabsorption and $\text{K}^+$ secretion in the DCT and
     collecting duct.

5. **Collecting duct:** Water reabsorption is controlled by ADH. In the presence of ADH, aquaporin
   channels are inserted into the membrane, and water is reabsorbed into the concentrated medulla.
   The maximum urine concentration in humans is approximately 1200 mOsm (four times more
   concentrated than blood).

**Worked Example: Comparing urine production in different conditions.**

| Condition          | ADH Level | Collecting Duct Permeability | Urine Concentration | Urine Volume |
| ------------------ | --------- | ---------------------------- | ------------------- | ------------ |
| Well hydrated      | Low       | Low                          | Low (dilute)        | High         |
| Normal             | Normal    | Moderate                     | Moderate            | Moderate     |
| Dehydrated         | High      | High                         | High (concentrated) | Low          |
| Diabetes insipidus | Very low  | Very low                     | Very low (dilute)   | Very high    |

## Review: Thermoregulation in Detail

**The hypothalamus** is the body's thermostat. It receives input from two types of thermoreceptors:

- **Peripheral thermoreceptors:** Located in the skin. Detect changes in external temperature.
- **Central thermoreceptors:** Located in the hypothalamus. Detect changes in blood temperature.

**Heat loss mechanisms (when core temperature rises above 37$\degree$C):**

1. **Vasodilation:** Arterioles near the skin surface dilate, increasing blood flow to the skin.
   More heat is lost by radiation and convection.
2. **Sweating:** Sweat glands secrete sweat onto the skin surface. Evaporation of water absorbs
   latent heat, cooling the skin. Each gram of water evaporated removes approximately 2.4 kJ of
   heat.
3. **Piloerection:** In some mammals, fur lies flat to reduce insulation. In humans, this mechanism
   is largely vestigial (goose bumps).

**Heat conservation mechanisms (when core temperature falls below 37$\degree$C):**

1. **Vasoconstriction:** Arterioles near the skin surface constrict, reducing blood flow to the
   skin. Less heat is lost.
2. **Shivering:** Rapid, involuntary contractions of skeletal muscles generate heat as a by-product
   of respiration.
3. **Piloerection:** Hair stands up, trapping a layer of insulating air.
4. **Brown fat metabolism:** Brown adipose tissue (found in newborns and between the shoulder blades
   in adults) contains many mitochondria with uncoupling protein (UCP1). The ETC operates without
   ATP synthesis, releasing energy as heat (non-shivering thermogenesis).

**Worked Example: Why shivering generates heat.**

Shivering involves rapid, involuntary contractions of skeletal muscles. Muscle contraction requires
ATP, which is produced by cellular respiration. Respiration is only about 40% efficient, meaning
that 60% of the energy from glucose is released as heat. During shivering, the increased rate of
respiration in muscles generates significantly more heat than normal, raising the core body
temperature.

## Review: Enzyme Kinetics -- Worked Examples

**Worked Example: Effect of a competitive inhibitor.**

An enzyme has $K_m = 5$ mM and $V_{\max} = 10$ $\mu$mol/min. A competitive inhibitor is added at a
concentration that doubles the apparent $K_m$.

With inhibitor: apparent $K_m = 10$ mM, $V_{\max}$ unchanged at 10 $\mu$mol/min.

At $[S] = 5$ mM (original $K_m$):

- Without inhibitor: $v = (10 \times 5) / (5 + 5) = 5$ $\mu$mol/min (50% of $V_{\max}$).
- With inhibitor: $v = (10 \times 5) / (10 + 5) = 3.33$ $\mu$mol/min (33.3% of $V_{\max}$).

At very high $[S]$ (e.g., 100 mM):

- Without inhibitor: $v \approx 10$ $\mu$mol/min.
- With inhibitor: $v \approx 10$ $\mu$mol/min.

The competitive inhibitor reduces the rate at low $[S]$ but has no effect at very high $[S]$,
because the substrate outcompetes the inhibitor.

**Worked Example: Effect of a non-competitive inhibitor.**

The same enzyme with $K_m = 5$ mM and $V_{\max} = 10$ $\mu$mol/min. A non-competitive inhibitor
reduces $V_{\max}$ to 6 $\mu$mol/min but does not change $K_m$.

At $[S] = 5$ mM:

- Without inhibitor: $v = 5$ $\mu$mol/min.
- With inhibitor: $v = (6 \times 5) / (5 + 5) = 3$ $\mu$mol/min.

At very high $[S]$ (e.g., 100 mM):

- Without inhibitor: $v \approx 10$ $\mu$mol/min.
- With inhibitor: $v \approx 6$ $\mu$mol/min.

Unlike the competitive inhibitor, the non-competitive inhibitor reduces the maximum rate even at
very high substrate concentrations, because it reduces the number of functional enzyme molecules
regardless of substrate concentration.

## Review: C4 and CAM Photosynthesis (Advanced Higher)

**C4 photosynthesis:** In C4 plants (e.g., maize, sugarcane), $\text{CO}_2$ is initially fixed by
PEP carboxylase in mesophyll cells to form oxaloacetate (4C), which is converted to malate. Malate
is transported to bundle-sheath cells, where $\text{CO}_2$ is released and enters the Calvin cycle.
PEP carboxylase has a much higher affinity for $\text{CO}_2$ than RuBisCO and does not bind
$\text{O}_2$, minimising photorespiration.

**CAM photosynthesis:** In CAM plants (e.g., cacti, pineapples), stomata open at night to fix
$\text{CO}_2$ into malic acid, which is stored in vacuoles. During the day, stomata close, and malic
acid is decarboxylated to release $\text{CO}_2$ for the Calvin cycle. This temporal separation
minimises water loss while maintaining carbon fixation.

**Worked Example: Comparing water use efficiency.**

A C3 plant loses approximately 500 g of water per gram of $\text{CO}_2$ fixed. A C4 plant loses
approximately 250 g of water per gram of $\text{CO}_2$ fixed. A CAM plant loses approximately 50 g
of water per gram of $\text{CO}_2$ fixed.

CAM plants are the most water-efficient because they close their stomata during the day, minimising
transpirational water loss. This is why CAM plants dominate in arid environments.

## Review: Summary Table of Respiration vs. Photosynthesis

| Feature              | Respiration                                                                                | Photosynthesis                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Overall equation     | $\text{C}_6\text{H}_{12}\text{O}_6 + 6\text{O}_2 \to 6\text{CO}_2 + 6\text{H}_2\text{O}_2$ | $6\text{CO}_2 + 6\text{H}_2\text{O}_2 \to \text{C}_6\text{H}_{12}\text{O}_6 + 6\text{O}_2$ |
| Energy change        | Exergonic ($\Delta G \lt 0$)                                                               | Endergonic ($\Delta G \gt 0$)                                                              |
| Electron donor       | Glucose                                                                                    | Water                                                                                      |
| Electron acceptor    | $\text{O}_2$                                                                               | $\text{NADP}^+$                                                                            |
| ATP produced         | ~30-32 per glucose                                                                         | ~18 consumed per glucose                                                                   |
| Location             | Cytoplasm, mitochondria                                                                    | Chloroplasts                                                                               |
| Organisms            | All living organisms                                                                       | Plants, algae, some bacteria                                                               |
| ETC location         | Inner mitochondrial membrane                                                               | Thylakoid membrane                                                                         |
| Proton gradient site | Intermembrane space                                                                        | Thylakoid lumen                                                                            |

## Review: Anaerobic Respiration in Detail

**Lactate fermentation in muscle cells:**

During intense exercise, oxygen supply to muscle cells may be insufficient for aerobic respiration.
Muscle cells switch to anaerobic respiration:

$$\text{Glucose} \to 2 \text{pyruvate} \to 2 \text{lactate} + 2 \text{ATP}$$

Pyruvate is reduced to lactate by the enzyme lactate dehydrogenase (LDH), which regenerates
$\text{NAD}^+$ from NADH. This allows glycolysis to continue producing ATP even in the absence of
oxygen. However, the net yield is only 2 ATP per glucose (compared to approximately 30-32 ATP for
aerobic respiration).

**The oxygen debt:** After exercise, the accumulated lactate must be metabolised. Lactate is
transported to the liver, where it is converted back to pyruvate. Some pyruvate enters the Krebs
cycle, and some is converted back to glucose via gluconeogenesis. This process requires oxygen,
which is why breathing rate remains elevated after exercise (to repay the oxygen debt).

**Alcoholic fermentation in yeast:**

$$\text{Glucose} \to 2 \text{pyruvate} \to 2 \text{ethanol} + 2 \text{CO}_2 + 2 \text{ATP}$$

Pyruvate is decarboxylated to acetaldehyde (by pyruvate decarboxylase) and then reduced to ethanol
(by alcohol dehydrogenase). This regenerates $\text{NAD}^+$ for glycolysis. Alcoholic fermentation
is exploited in brewing (beer) and baking (bread -- $\text{CO}_2$ causes the dough to rise).

**Comparing fermentation products:**

| Feature         | Lactic acid fermentation  | Alcoholic fermentation             |
| --------------- | ------------------------- | ---------------------------------- |
| Organisms       | Animals, some bacteria    | Yeast, some plants                 |
| End products    | Lactate                   | Ethanol and $\text{CO}_2$          |
| Enzyme (step 1) | Lactate dehydrogenase     | Pyruvate decarboxylase             |
| Enzyme (step 2) | --                        | Alcohol dehydrogenase              |
| ATP yield       | 2 ATP per glucose         | 2 ATP per glucose                  |
| Reversible?     | Yes (Cori cycle in liver) | No (ethanol cannot be reconverted) |

**Commercial applications of fermentation:**

- **Brewing:** Yeast ferment sugars in malted barley to produce ethanol. The $\text{CO}_2$ produced
  carbonates the beer. Different yeast strains produce different flavour compounds (esters,
  phenols).
- **Baking:** Yeast ferment sugars in dough, producing $\text{CO}_2$ which causes the dough to rise.
  The ethanol evaporates during baking.
- **Cheese production:** Bacteria ferment lactose to lactic acid, lowering the pH and causing milk
  proteins (casein) to coagulate, forming the cheese curd.
- **Yoghurt production:** Lactobacillus bacteria ferment lactose to lactic acid, thickening the milk
  and producing the characteristic tart flavour.

**Key comparison: aerobic vs anaerobic respiration:**

- Aerobic respiration yields approximately 30-32 ATP per glucose; anaerobic respiration yields only
  2 ATP per glucose.
- Aerobic respiration completely oxidises glucose to $\text{CO}_2$ and $\text{H}_2\text{O}$;
  anaerobic respiration produces partially oxidised products (lactate or ethanol).
- Aerobic respiration requires oxygen as the final electron acceptor in the electron transport
  chain; anaerobic respiration uses organic molecules as the final electron acceptor.
- Aerobic respiration occurs in the mitochondria (in eukaryotes); anaerobic respiration occurs in
  the cytoplasm.
