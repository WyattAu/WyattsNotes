---
title: Metabolism and Cell Biology
description: "IB Biology -- enzyme kinetics (Michaelis-Menten, inhibition types), cellular respiration (glycolysis, Krebs cycle, electron transport chain), photosynthesis (light-dependent reactions, Calvin cycle, limiting factors), ATP, metabolic pathways, fermentation, and anaerobic respiration."
slug: metabolism-cell-biology
---

## 1. Enzyme Kinetics

### Michaelis-Menten Kinetics

The **Michaelis-Menten equation** describes the relationship between substrate concentration $[S]$
and reaction velocity $v$:

$$v = \frac{V_{\max} [S]}{K_m + [S]}$$

where:

- $V_{\max}$: the maximum reaction velocity, achieved when all enzyme active sites are saturated
  with substrate.
- $K_m$ (Michaelis constant): the substrate concentration at which the reaction velocity is
  $\frac{1}{2}V_{\max}$. $K_m$ is inversely related to the enzyme's affinity for the substrate:
  a **low $K_m$** indicates **high affinity** (the enzyme reaches half-maximal velocity at low
  substrate concentration).

**Derivation assumptions:**

1. The enzyme-substrate complex (ES) is in **steady state**: the rate of ES formation equals the
   rate of ES breakdown.
2. Total enzyme concentration $[E]_T = [E] + [ES]$ is constant.
3. Product formation is irreversible (or the reverse reaction is negligible at early time points).
4. $[S] \gg [E]_T$ (substrate concentration is much greater than enzyme concentration).

### The Lineweaver-Burk Plot

A double-reciprocal plot of $\frac{1}{v}$ vs $\frac{1}{[S]}$ transforms the Michaelis-Menten
equation into a straight line:

$$\frac{1}{v} = \frac{K_m}{V_{\max}} \cdot \frac{1}{[S]} + \frac{1}{V_{\max}}$$

- **y-intercept**: $\frac{1}{V_{\max}}$
- **x-intercept**: $-\frac{1}{K_m}$
- **Slope**: $\frac{K_m}{V_{\max}}$

### Enzyme Inhibition Types

#### Competitive Inhibition

- **Mechanism**: the inhibitor ($I$) structurally resembles the substrate and binds reversibly to
  the active site, competing with the substrate.
- **Effect**: increases the apparent $K_m$ ($K_m^{\mathrm{app}} = K_m(1 + [I]/K_i)$); $V_{\max}$ is
  unchanged (at very high $[S]$, the substrate outcompetes the inhibitor).
- **Lineweaver-Burk**: lines intersect on the **y-axis** (same $1/V_{\max}$, different slopes and
  x-intercepts).

**Example**: statins competitively inhibit HMG-CoA reductase in cholesterol biosynthesis.

#### Non-Competitive Inhibition

- **Mechanism**: the inhibitor binds to an **allosteric site** (not the active site), causing a
  conformational change that reduces the enzyme's catalytic activity.
- **Effect**: decreases $V_{\max}$ ($V_{\max}^{\mathrm{app}} = V_{\max}/(1 + [I]/K_i)$); $K_m$ is
  unchanged (substrate binding is not affected).
- **Lineweaver-Burk**: lines intersect on the **x-axis** (same $-1/K_m$, different y-intercepts and
  slopes).

**Example**: heavy metal ions ($\mathrm{Pb}^{2+}$, $\mathrm{Hg}^{2+}$) bind to thiol groups
  (-SH) of cysteine residues at allosteric sites.

#### Uncompetitive Inhibition

- **Mechanism**: the inhibitor binds only to the enzyme-substrate complex (ES), not to the free
  enzyme.
- **Effect**: decreases both $V_{\max}$ and $K_m$ proportionally
  ($V_{\max}^{\mathrm{app}} = V_{\max}/(1 + [I]/K_i)$;
  $K_m^{\mathrm{app}} = K_m/(1 + [I]/K_i)$).
- **Lineweaver-Burk**: produces **parallel lines** (same slope, different y- and x-intercepts).

#### Mixed Inhibition

- The inhibitor can bind to both the free enzyme and the ES complex, but with different affinities
  ($K_i \neq K_i'$).
- Both $V_{\max}$ and $K_m$ are affected. If the inhibitor binds more strongly to the free enzyme
  ($K_i < K_i'$), $K_m$ increases (competitive-like). If it binds more strongly to ES ($K_i > K_i'$),
  $K_m$ decreases (uncompetitive-like).
- **Lineweaver-Burk**: lines intersect in the **second quadrant** (left of the y-axis, above the
  x-axis).

### Summary of Inhibition Effects

| Parameter       | Competitive | Non-competitive | Uncompetitive | Mixed           |
| --------------- | ----------- | --------------- | ------------- | --------------- |
| $V_{\max}$      | Unchanged   | Decreases       | Decreases     | Decreases       |
| $K_m$           | Increases   | Unchanged       | Decreases     | Increases or decreases |
| LB plot         | Intersect y-axis | Intersect x-axis | Parallel lines | Intersect 2nd quadrant |

---

## 2. ATP: Structure and Function

### Structure of ATP

**Adenosine triphosphate (ATP)** consists of:

- **Adenine**: a nitrogenous base (purine).
- **Ribose**: a pentose sugar.
- **Three phosphate groups** ($\alpha$, $\beta$, $\gamma$).

The bonds between the phosphate groups are **phosphoanhydride bonds**. The hydrolysis of the terminal
phosphoanhydride bond (between $\beta$ and $\gamma$ phosphates) releases energy:

$$\mathrm{ATP} + \mathrm{H}_2\mathrm{O} \to \mathrm{ADP} + \mathrm{P_i} + \Delta G \approx -30.5\;\mathrm{kJ/mol}$$

### Why ATP is an Effective Energy Currency

1. **Immediate energy release**: hydrolysis is exergonic under cellular conditions.
2. **Intermediary energy**: the energy released is sufficient to drive most cellular reactions but
   not so large as to damage the cell.
3. **Rapid regeneration**: ATP is continuously regenerated from ADP and $\mathrm{P_i}$ by cellular
   respiration and photosynthesis.
4. **Coupling**: ATP hydrolysis can be coupled to endergonic reactions, making the overall process
   exergonic ($\Delta G_{\mathrm{total}} < 0$).

### ATP Yields from Glucose

| Stage of respiration  | Net ATP (approximate) | Net reduced coenzymes            |
| -------------------- | --------------------- | -------------------------------- |
| Glycolysis            | 2 ATP (substrate-level) | 2 NADH (cytoplasm)              |
| Pyruvate oxidation    | 0 ATP                | 2 NADH (mitochondrial matrix)    |
| Krebs cycle           | 2 ATP (GTP)          | 6 NADH + 2 $\mathrm{FADH}_2$ (mitochondrial matrix) |
| Oxidative phosphorylation | ---               | NADH $\to \approx 2.5$ ATP each; $\mathrm{FADH}_2 \to \approx 1.5$ ATP each |
| **Total (per glucose)** | **$\approx 30$--$32$ ATP** | **10 NADH + 2 $\mathrm{FADH}_2$** |

Note: older textbooks cite $36$--$38$ ATP, based on the P/O ratio of $3$ for NADH and $2$ for
$\mathrm{FADH}_2$. Current evidence suggests the shuttle system for cytoplasmic NADH (malate-aspartate
or glycerol-3-phosphate) and proton leak across the inner mitochondrial membrane reduce the actual
yield to approximately $30$--$32$ ATP per glucose.

---

## 3. Cellular Respiration: Glycolysis

### Overview

Glycolysis ("sugar splitting") occurs in the **cytoplasm** and does not require oxygen. It converts
one molecule of glucose ($\mathrm{C_6H_{12}O_6}$) into two molecules of pyruvate ($\mathrm{C_3H_4O_3}$).

### Stages

#### Investment Phase (ATP consumed)

1. **Hexokinase** phosphorylates glucose to glucose-6-phosphate (G6P), using 1 ATP. Traps glucose
   inside the cell (charged, cannot cross the membrane).
2. **Phosphoglucose isomerase** converts G6P to fructose-6-phosphate (F6P).
3. **Phosphofructokinase (PFK)** phosphorylates F6P to fructose-1,6-bisphosphate (F1,6BP), using 1
   ATP. This is the **committed step** (rate-limiting step) of glycolysis; PFK is allosterically
   regulated.
4. **Aldolase** cleaves F1,6BP into two 3-carbon sugars: glyceraldehyde-3-phosphate (G3P) and
   dihydroxyacetone phosphate (DHAP).
5. **Triose phosphate isomerase** converts DHAP to G3P. From this point, each molecule of glucose
   yields two molecules of G3P.

#### Payoff Phase (ATP and NADH produced)

For each G3P (multiply by 2 for the full glucose molecule):

6. **Glyceraldehyde-3-phosphate dehydrogenase** oxidises G3P to 1,3-bisphosphoglycerate (1,3BPG),
   reducing $\mathrm{NAD}^+$ to NADH and incorporating inorganic phosphate ($\mathrm{P_i}$).
7. **Phosphoglycerate kinase** transfers a phosphate from 1,3BPG to ADP, producing 3-phosphoglycerate
   (3PG) and 1 ATP (**substrate-level phosphorylation**). Per glucose: $2$ ATP.
8. **Phosphoglycerate mutase** converts 3PG to 2-phosphoglycerate (2PG).
9. **Enolase** dehydrates 2PG to phosphoenolpyruvate (PEP).
10. **Pyruvate kinase** transfers a phosphate from PEP to ADP, producing pyruvate and 1 ATP.
    Per glucose: $2$ ATP. This is an irreversible step.

### Net yield of glycolysis

- 2 ATP consumed (steps 1 and 3)
- 4 ATP produced (steps 7 and 10, $\times 2$)
- **Net ATP: 2**
- 2 NADH produced (step 6, $\times 2$)

### Regulation of Glycolysis

| Enzyme | Allosteric activator | Allosteric inhibitor | Hormonal regulation |
| ------ | ------------------- | -------------------- | ------------------- |
| **Hexokinase** | --- | Glucose-6-phosphate (product inhibition) | --- |
| **Phosphofructokinase (PFK)** | AMP, ADP, $\mathrm{F}_{2,6}\mathrm{BP}$ | ATP, citrate, low pH | Insulin activates (via $\mathrm{F}_{2,6}\mathrm{BP}$) |
| **Pyruvate kinase** | $\mathrm{F}_{1,6}\mathrm{BP}$ (feedforward) | ATP, alanine, acetyl-CoA | Glucagon inhibits (phosphorylation in liver) |

---

## 4. Cellular Respiration: Pyruvate Oxidation and the Krebs Cycle

### Pyruvate Oxidation (Link Reaction)

Pyruvate is transported from the cytoplasm into the mitochondrial matrix, where it is converted to
acetyl-CoA:

$$\mathrm{Pyruvate} + \mathrm{CoA} + \mathrm{NAD}^+ \to \mathrm{Acetyl\text{-}CoA} + \mathrm{CO}_2 + \mathrm{NADH}$$

Catalysed by the **pyruvate dehydrogenase complex** (a multi-enzyme complex). Per glucose: $2$ pyruvate
$\to$ $2$ acetyl-CoA, $2$ $\mathrm{CO}_2$, $2$ NADH.

### The Krebs Cycle (Citric Acid Cycle)

Occurs in the **mitochondrial matrix**. Each turn of the cycle processes one acetyl-CoA (per glucose:
2 turns).

**Steps (per turn):**

1. **Citrate synthase**: acetyl-CoA ($2\;\mathrm{C}$) combines with oxaloacetate ($4\;\mathrm{C}$)
   to form citrate ($6\;\mathrm{C}$).
2. **Aconitase**: citrate is isomerised to isocitrate.
3. **Isocitrate dehydrogenase**: isocitrate is oxidised to $\alpha$-ketoglutarate ($5\;\mathrm{C}$),
   releasing $\mathrm{CO}_2$ and reducing $\mathrm{NAD}^+$ to NADH. **Rate-limiting step** of the
   cycle.
4. $\alpha$-Ketoglutarate dehydrogenase: $\alpha$-ketoglutarate is oxidised to succinyl-CoA
   ($4\;\mathrm{C}$), releasing $\mathrm{CO}_2$ and reducing $\mathrm{NAD}^+$ to NADH.
5. **Succinyl-CoA synthetase**: succinyl-CoA is converted to succinate, producing GTP (equivalent to
   ATP) via **substrate-level phosphorylation**.
6. **Succinate dehydrogenase**: succinate is oxidised to fumarate, reducing FAD to $\mathrm{FADH}_2$.
   This enzyme is embedded in the inner mitochondrial membrane (Complex II).
7. **Fumarase**: fumarate is hydrated to malate.
8. **Malate dehydrogenase**: malate is oxidised to oxaloacetate, reducing $\mathrm{NAD}^+$ to NADH.
   Oxaloacetate is regenerated for step 1.

### Net yield per turn of the Krebs cycle

- 2 $\mathrm{CO}_2$ (decarboxylation)
- 3 NADH (steps 3, 4, 8)
- 1 $\mathrm{FADH}_2$ (step 6)
- 1 GTP (step 5, equivalent to 1 ATP)

### Per glucose (2 turns):

- 4 $\mathrm{CO}_2$
- 6 NADH
- 2 $\mathrm{FADH}_2$
- 2 GTP (2 ATP)

---

## 5. Oxidative Phosphorylation

### The Electron Transport Chain (ETC)

Located in the **inner mitochondrial membrane**. NADH and $\mathrm{FADH}_2$ donate electrons to a
series of protein complexes and mobile carriers:

| Complex | Component                  | Electron donor          | Electron acceptor           | Protons pumped ($\mathrm{H}^+$) |
| ------- | -------------------------- | ----------------------- | -------------------------- | ------------------------------ |
| **I**   | NADH dehydrogenase         | NADH                    | Ubiquinone (Q)             | 4                              |
| **II**  | Succinate dehydrogenase    | $\mathrm{FADH}_2$       | Ubiquinone (Q)             | 0                              |
| **III** | Cytochrome $bc_1$ complex  | Ubiquinol ($\mathrm{QH}_2$) | Cytochrome c              | 4                              |
| **IV**  | Cytochrome c oxidase       | Cytochrome c            | $\mathrm{O}_2$ ($\to \mathrm{H}_2\mathrm{O}$) | 2                              |

**Electron flow**: NADH $\to$ Complex I $\to$ Q $\to$ Complex III $\to$ Cyt c $\to$ Complex IV $\to$
$\mathrm{O}_2$.

$\mathrm{FADH}_2$ enters at Complex II (bypassing Complex I), so fewer protons are pumped per
$\mathrm{FADH}_2$ ($6$ total vs $10$ for NADH).

### Chemiosmotic Theory (Peter Mitchell, 1961)

The proton gradient generated by the ETC drives ATP synthesis:

1. Electron transport through Complexes I, III, and IV pumps $\mathrm{H}^+$ from the matrix to the
   intermembrane space, creating:
   - A **proton gradient** ($\Delta\mathrm{pH}$: higher pH in matrix)
   - An **electrical gradient** ($\Delta\Psi$: positive charge in intermembrane space)
2. Together, these form the **proton-motive force (PMF)**:
   $$\Delta p = \Delta\Psi - \frac{2.303 RT}{F} \Delta\mathrm{pH}$$
3. Protons flow back into the matrix through **ATP synthase** (Complex V), driving the
   phosphorylation of ADP to ATP.

### ATP Synthase

A multi-subunit enzyme with two components:

- **$\mathrm{F}_0$**: membrane-embedded proton channel.
- **$\mathrm{F}_1$**: catalytic head in the matrix where ATP is synthesised.

The binding change mechanism (Boyer, 1997): as protons flow through $\mathrm{F}_0$, the $\gamma$
subunit rotates, inducing conformational changes in the three $\beta$ subunits of $\mathrm{F}_1$
(Loose, Tight, Open states), sequentially binding ADP + $\mathrm{P_i}$, forming ATP, and releasing
ATP. Approximately $3$--$4$ protons are required per ATP synthesised.

### P/O Ratios

| Donor          | Protons pumped to IMS | Protons for ATP synthesis | Approximate ATP yield |
| -------------- | --------------------- | ------------------------ | --------------------- |
| NADH           | 10                    | $\approx 3$--$4$ per ATP | $\approx 2.5$ ATP     |
| $\mathrm{FADH}_2$ | 6                  | $\approx 3$--$4$ per ATP | $\approx 1.5$ ATP     |

### Uncouplers and Inhibitors

| Substance              | Effect                                                                    | Example                              |
| ---------------------- | ------------------------------------------------------------------------- | ------------------------------------ |
| **Cyanide** ($\mathrm{CN}^-$) | Binds to $\mathrm{Fe}^{3+}$ in Complex IV, blocking electron transport | Lethal poison; halts ATP production  |
| **Carbon monoxide** (CO) | Binds to $\mathrm{Fe}^{2+}$ in Complex IV                                | Same as cyanide                      |
| **Oligomycin**         | Blocks the proton channel in ATP synthase ($\mathrm{F}_0$)                  | ETC runs but no ATP synthesis; PMF builds up |
| **DNP (2,4-dinitrophenol)** | Lipid-soluble uncoupler; carries $\mathrm{H}^+$ across the inner membrane, dissipating the PMF | ETC runs at maximum rate; energy released as heat |
| **Rotenone**           | Inhibits Complex I                                                         | Blocks electron flow from NADH       |

### Oxygen as the Final Electron Acceptor

$$\frac{1}{2}\mathrm{O}_2 + 2\mathrm{H}^+ + 2e^- \to \mathrm{H}_2\mathrm{O}$$

Oxygen is essential because it has a very high reduction potential ($E_0' = +0.82\;\mathrm{V}$),
making it the strongest biological electron acceptor. Without oxygen, the ETC backs up: NADH and
$\mathrm{FADH}_2$ cannot be oxidised, the Krebs cycle stops (NAD$^+$ and FAD are not regenerated),
and the cell must rely on fermentation or anaerobic respiration.

---

## 6. Photosynthesis

### Overview

Photosynthesis converts light energy into chemical energy stored in glucose:

$$6\mathrm{CO}_2 + 6\mathrm{H}_2\mathrm{O} + \text{light energy} \to \mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6 + 6\mathrm{O}_2$$

Occurs in the **chloroplasts** of plant cells (and algae, cyanobacteria). Chloroplasts have an
outer membrane, inner membrane, stroma (fluid), and thylakoid membranes (site of the
light-dependent reactions).

### Light-Dependent Reactions

Occur in the **thylakoid membranes**. Light energy is captured and used to generate ATP and NADPH.

#### Photosystems

Photosystems are pigment-protein complexes containing **chlorophyll a**, accessory pigments
(chlorophyll b, carotenoids), and electron carriers. Accessory pigments absorb wavelengths not
absorbed by chlorophyll a and transfer the energy to chlorophyll a via resonance energy transfer
(antenna effect).

**Absorption spectrum**: chlorophyll a absorbs blue ($\approx 430\;\mathrm{nm}$) and red
($\approx 660\;\mathrm{nm}$) light most strongly; green light is reflected (giving leaves their
green colour). Carotenoids absorb blue-green light ($\approx 450$--$500\;\mathrm{nm}$).

**Action spectrum**: the rate of photosynthesis as a function of wavelength; closely matches the
absorption spectrum, confirming that absorbed light drives photosynthesis.

#### Photosystem II (P680)

1. Light energy excites an electron in **P680** (the reaction centre chlorophyll of PSII) to a higher
   energy level.
2. The excited electron is transferred to the primary electron acceptor (pheophytin).
3. **Photolysis of water**: $\mathrm{H}_2\mathrm{O} \to 2\mathrm{H}^+ + \frac{1}{2}\mathrm{O}_2 + 2e^-$
   replaces the lost electron. This is the source of $\mathrm{O}_2$ released during photosynthesis.
4. The electron passes through the **electron transport chain**: pheophytin $\to$ plastoquinone (PQ)
   $\to$ cytochrome $b_6f$ complex $\to$ plastocyanin (PC).
5. As electrons pass through cytochrome $b_6f$, protons are pumped from the stroma into the
   thylakoid lumen, contributing to the proton gradient.

#### Photosystem I (P700)

6. Light energy excites an electron in **P700** (reaction centre of PSI).
7. The excited electron passes to ferredoxin (Fd) and then to **NADP$^+$ reductase**, which reduces
   $\mathrm{NADP}^+$ to NADPH using the electrons and $\mathrm{H}^+$ from the stroma.

#### Chemiosmosis in Chloroplasts

The proton gradient across the thylakoid membrane ($\mathrm{H}^+$ concentration higher in the lumen)
drives ATP synthesis by **ATP synthase** (CF$_0$-CF$_1$), analogous to mitochondrial ATP synthase.
Protons enter the lumen from photolysis and from the cytochrome $b_6f$ complex.

### The Calvin Cycle (Light-Independent Reactions)

Occurs in the **stroma**. Uses ATP and NADPH from the light-dependent reactions to fix $\mathrm{CO}_2$
into organic molecules ( carbohydrates).

**Three phases:**

#### 1. Carbon Fixation

$\mathrm{CO}_2$ is fixed by **ribulose-1,5-bisphosphate carboxylase/oxygenase (Rubisco)**, the most
abundant protein on Earth:

$$\mathrm{CO}_2 + \text{RuBP (5C)} \to 2\times\text{3-phosphoglycerate (3-PGA, 3C)}$$

Rubisco catalyses approximately $10^{12}$ reactions per second globally but is inefficient:
- **Slow turnover**: $\approx 3$ reactions per second per active site.
- **Oxygenase activity**: Rubisco can bind $\mathrm{O}_2$ instead of $\mathrm{CO}_2$, producing
  one 3-PGA molecule and one 2-phosphoglycolate (2-PG). This is **photorespiration**, which wastes
  carbon and energy.

#### 2. Reduction

3-PGA is phosphorylated by ATP (from the light-dependent reactions) and reduced by NADPH:

$$\text{3-PGA} + \text{ATP} + \text{NADPH} \to \text{G3P (glyceraldehyde-3-phosphate)}$$

For every 3 $\mathrm{CO}_2$ fixed, 6 G3P are produced, but 5 are recycled to regenerate RuBP.
Only 1 G3P (a 3-carbon sugar) is the net gain per 3 $\mathrm{CO}_2$.

#### 3. Regeneration of RuBP

5 G3P molecules (15 carbons) are rearranged using 3 ATP to regenerate 3 RuBP molecules (15 carbons).

### Net equation of the Calvin cycle (per 3 $\mathrm{CO}_2$):

$$3\mathrm{CO}_2 + 9\mathrm{ATP} + 6\mathrm{NADPH} \to \text{G3P} + 9\mathrm{ADP} + 8\mathrm{P_i} + 6\mathrm{NADP}^+$$

To synthesise one glucose molecule ($6\;\mathrm{C}$), the Calvin cycle must turn twice:
$6\mathrm{CO}_2 + 18\mathrm{ATP} + 12\mathrm{NADPH} \to \mathrm{glucose} + 18\mathrm{ADP} + 18\mathrm{P_i} + 12\mathrm{NADP}^+$.

### Limiting Factors of Photosynthesis

The rate of photosynthesis is affected by:

| Factor            | Effect                                                                                          | Graph shape                                    |
| ----------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Light intensity** | Rate increases linearly at low intensity (light is limiting). At high intensity, rate plateaus (another factor becomes limiting). | Rectangular hyperbola, levelling off           |
| **$\mathrm{CO}_2$ concentration** | Rate increases with $\mathrm{CO}_2$ up to a plateau (Rubisco saturation). | Similar to light intensity curve              |
| **Temperature**    | Rate increases up to an optimum ($\approx 25$--$30^\circ\mathrm{C}$ for $\mathrm{C_3}$ plants); above this, Rubisco and other enzymes denature. | Bell-shaped curve; declines at high temperatures |
| **Water**          | Severe water stress closes stomata, limiting $\mathrm{CO}_2$ uptake.                              | Rate drops sharply as water availability decreases |

**$\mathrm{C_4}$ and CAM adaptations**: in hot, dry conditions, $\mathrm{C_3}$ plants lose water
through open stomata and suffer from photorespiration. $\mathrm{C_4}$ plants (maize, sugarcane) use
PEP carboxylase (which has no oxygenase activity) to fix $\mathrm{CO}_2$ into a 4-carbon compound
in mesophyll cells, then transport it to bundle-sheath cells where $\mathrm{CO}_2$ is released at
high concentration for Rubisco. CAM plants (cactus, pineapple) fix $\mathrm{CO}_2$ at night (open
stomata to reduce water loss) and store it as malic acid; during the day, stomata close and the
stored $\mathrm{CO}_2$ is released for the Calvin cycle.

---

## 7. Fermentation and Anaerobic Respiration

### Lactic Acid Fermentation

In the absence of oxygen (or when the ETC cannot keep up with demand), pyruvate is converted to
lactate by **lactate dehydrogenase**, oxidising NADH to $\mathrm{NAD}^+$:

$$\text{Pyruvate} + \mathrm{NADH} \to \text{Lactate} + \mathrm{NAD}^+$$

- Net ATP per glucose: 2 (from glycolysis only).
- Occurs in **animal muscle cells** during intense exercise (oxygen debt) and in certain bacteria
  (e.g., _Lactobacillus_ used in yoghurt production).
- The accumulated lactate is transported to the liver and converted back to pyruvate (Cori cycle).

### Alcoholic Fermentation

In yeast and some plant cells, pyruvate is first decarboxylated to acetaldehyde (releasing
$\mathrm{CO}_2$), then reduced to ethanol:

$$\text{Pyruvate} \xrightarrow{\text{pyruvate decarboxylase}} \text{Acetaldehyde} + \mathrm{CO}_2$$
$$\text{Acetaldehyde} + \mathrm{NADH} \to \text{Ethanol} + \mathrm{NAD}^+$$

- Net ATP per glucose: 2 (from glycolysis only).
- Used in **brewing** (ethanol production) and **baking** ($\mathrm{CO}_2$ production causes bread to
  rise).

### Anaerobic Respiration

Some prokaryotes use electron acceptors other than $\mathrm{O}_2$ in the ETC:

| Final electron acceptor | Product             | Example organism                          |
| ---------------------- | ------------------- | ---------------------------------------- |
| $\mathrm{NO}_3^-$ (nitrate) | $\mathrm{N}_2$ or $\mathrm{N}_2\mathrm{O}$ (denitrification) | _Pseudomonas denitrificans_ (soil bacteria) |
| $\mathrm{SO}_4^{2-}$ (sulfate) | $\mathrm{H}_2\mathrm{S}$ (hydrogen sulfide) | _Desulfovibrio_ (sulfate-reducing bacteria) |
| $\mathrm{CO}_3^{2-}$ (carbonate) | $\mathrm{CH}_4$ (methane) | Methanogens (archaea)                    |
| $\mathrm{Fe}^{3+}$ (iron) | $\mathrm{Fe}^{2+}$ | Geobacter (iron-reducing bacteria)       |

Anaerobic respiration produces more ATP than fermentation (the ETC still operates) but less than
aerobic respiration (alternative acceptors have lower reduction potentials than $\mathrm{O}_2$).

---

## 8. Metabolic Regulation

### Regulation of Cellular Respiration

Cellular respiration is regulated primarily by **feedback inhibition** and **allosteric regulation**:

- **High ATP/ADP ratio**: ATP allosterically inhibits PFK (glycolysis) and isocitrate dehydrogenase
  (Krebs cycle). When energy is abundant, respiration slows.
- **High ADP/AMP ratio**: ADP and AMP activate PFK and isocitrate dehydrogenase, stimulating
  respiration.
- **High $\mathrm{NADH/NAD}^+$ ratio**: inhibits pyruvate dehydrogenase, isocitrate dehydrogenase,
  and $\alpha$-ketoglutarate dehydrogenase.
- **High citrate**: inhibits PFK (signals abundant Krebs cycle intermediates).

### Integration of Metabolic Pathways

| Intermediate       | Source pathways              | Destination pathways              |
| ------------------ | ---------------------------- | -------------------------------- |
| **Pyruvate**       | Glycolysis                   | Krebs cycle (aerobic); fermentation (anaerobic); gluconeogenesis; fatty acid synthesis |
| **Acetyl-CoA**     | Pyruvate oxidation; $\beta$-oxidation of fatty acids | Krebs cycle; fatty acid synthesis; ketone body synthesis |
| **G3P**           | Calvin cycle (plants)        | Glucose synthesis; glycolysis (reverse) |
| **Oxaloacetate**   | Krebs cycle; gluconeogenesis | Krebs cycle; gluconeogenesis; amino acid synthesis (aspartate) |

---

## Common Pitfalls

- Confusing **competitive** and **non-competitive inhibition**: competitive inhibitors bind the
  active site ($K_m$ increases, $V_{\max}$ unchanged); non-competitive bind allosteric sites
  ($V_{\max}$ decreases, $K_m$ unchanged).
- Stating that "photosynthesis produces energy": photosynthesis **stores** light energy as chemical
  energy (glucose); it does not produce ATP for the plant's direct use (the ATP is used in the
  Calvin cycle).
- Confusing **the light-dependent and light-independent reactions**: the Calvin cycle does not
  directly require light, but it requires ATP and NADPH produced by the light-dependent reactions.
  It does not occur in the dark for extended periods.
- Writing that "$\mathrm{CO}_2$ is split in photosynthesis": $\mathrm{CO}_2$ is fixed (combined with
  RuBP), not split. Water is split (photolysis) in the light-dependent reactions.
- Confusing **fermentation** and **anaerobic respiration**: fermentation uses substrate-level
  phosphorylation only (no ETC); anaerobic respiration uses an ETC with an alternative final
  electron acceptor.
- Stating that "the Krebs cycle produces $\mathrm{CO}_2$": it does, but the carbon in the
  $\mathrm{CO}_2$ comes from acetyl-CoA (which came from pyruvate, which came from glucose). The
  carbons released as $\mathrm{CO}_2$ are not the same molecules of $\mathrm{CO}_2$ that were
  absorbed.

---

## Practice Problems

<details>
<summary>Question 1: Michaelis-Menten Calculation</summary>

An enzyme has $V_{\max} = 60\;\mathrm{\mu mol/min}$ and $K_m = 8\;\mathrm{mM}$. Calculate the
reaction velocity at $[S] = 4\;\mathrm{mM}$, $8\;\mathrm{mM}$, and $20\;\mathrm{mM}$. A
competitive inhibitor is added that increases the apparent $K_m$ to $24\;\mathrm{mM}$.
Calculate the velocity at $[S] = 20\;\mathrm{mM}$ with the inhibitor. At what substrate
concentration does the inhibited reaction reach $90\%$ of $V_{\max}$?

</details>

<details>
<summary>Answer</summary>

$v = \frac{V_{\max}[S]}{K_m + [S]}$

At $[S] = 4\;\mathrm{mM}$: $v = \frac{60 \times 4}{8 + 4} = \frac{240}{12} = 20\;\mathrm{\mu mol/min}$

At $[S] = 8\;\mathrm{mM}$: $v = \frac{60 \times 8}{8 + 8} = \frac{480}{16} = 30\;\mathrm{\mu mol/min}$ (= $\frac{1}{2}V_{\max}$, confirming $K_m$)

At $[S] = 20\;\mathrm{mM}$: $v = \frac{60 \times 20}{8 + 20} = \frac{1200}{28} = 42.9\;\mathrm{\mu mol/min}$

With competitive inhibitor ($K_m^{\mathrm{app}} = 24\;\mathrm{mM}$, $V_{\max}$ unchanged):
At $[S] = 20\;\mathrm{mM}$: $v = \frac{60 \times 20}{24 + 20} = \frac{1200}{44} = 27.3\;\mathrm{\mu mol/min}$

For $90\%$ of $V_{\max}$ with inhibitor:
$0.9 \times 60 = \frac{60 \times [S]}{24 + [S]}$
$54(24 + [S]) = 60[S]$
$1296 + 54[S] = 60[S]$
$6[S] = 1296$
$[S] = 216\;\mathrm{mM}$

At $[S] = 216\;\mathrm{mM}$, the competitive inhibitor is effectively outcompeted.

</details>

<details>
<summary>Question 2: Photosynthesis Limiting Factors</summary>

A student investigates the effect of light intensity on the rate of photosynthesis in an aquatic plant
at two different $\mathrm{CO}_2$ concentrations ($0.04\%$ and $0.10\%$). The results show that at
low light intensities, both curves rise linearly at the same rate. At higher intensities, the
$0.10\%$ $\mathrm{CO}_2$ curve plateaus at a higher rate than the $0.04\%$ curve. Explain these
observations with reference to limiting factors.

</details>

<details>
<summary>Answer</summary>

At low light intensities, light is the limiting factor for both curves. Increasing light intensity
increases the rate of ATP and NADPH production by the light-dependent reactions, which drives the
Calvin cycle. Since the $\mathrm{CO}_2$ concentration is not limiting at low light, both curves
follow the same trajectory.

At higher light intensities, the light-dependent reactions produce abundant ATP and NADPH, and
$\mathrm{CO}_2$ concentration becomes the limiting factor. At $0.04\%$ $\mathrm{CO}_2$, Rubisco is
saturated with its substrates at a lower rate, so the curve plateaus earlier and at a lower
photosynthetic rate. At $0.10\%$ $\mathrm{CO}_2$, more $\mathrm{CO}_2$ is available for Rubisco,
allowing a higher maximum rate before the curve plateaus. This demonstrates the principle of
limiting factors: the rate is determined by the factor in shortest supply.

</details>

<details>
<summary>Question 3: Cellular Respiration ATP Yield</summary>

A researcher measures the $\mathrm{O}_2$ consumption and $\mathrm{CO}_2$ production of a tissue sample.
In $10$ minutes, the sample consumes $60\;\mathrm{\mu L}$ of $\mathrm{O}_2$ at STP and produces
$58\;\mathrm{\mu L}$ of $\mathrm{CO}_2$. (a) Calculate the respiratory quotient (RQ). (b) What
does the RQ suggest about the primary respiratory substrate? (c) If the tissue completely oxidises
1 mole of glucose, calculate the approximate volume of $\mathrm{O}_2$ consumed at STP.

</details>

<details>
<summary>Answer</summary>

(a) $\mathrm{RQ} = \frac{\mathrm{CO}_2\text{ produced}}{\mathrm{O}_2\text{ consumed}} = \frac{58}{60} = 0.967$

(b) An RQ close to $1.0$ indicates that the primary substrate is **carbohydrate** (glucose), since
the complete oxidation of glucose produces equal moles of $\mathrm{CO}_2$ and $\mathrm{O}_2$
consumed: $\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6 + 6\mathrm{O}_2 \to 6\mathrm{CO}_2 + 6\mathrm{H}_2\mathrm{O}$.
For lipids, RQ $\approx 0.7$; for proteins, RQ $\approx 0.8$--$0.9$.

(c) For complete oxidation of 1 mole of glucose: $6$ moles of $\mathrm{O}_2$ consumed.
At STP, $1$ mole of gas occupies $22.4\;\mathrm{L}$.
Volume of $\mathrm{O}_2$ consumed: $6 \times 22.4 = 134.4\;\mathrm{L}$.

</details>

<details>
<summary>Question 4: Inhibition Type Identification</summary>

An experiment measures enzyme activity at varying substrate concentrations with and without an
unknown inhibitor. The results are:

| $[S]$ (mM) | Velocity without inhibitor ($\mathrm{\mu mol/min}$) | Velocity with inhibitor ($\mathrm{\mu mol/min}$) |
| ---------- | ----------------------------------------------------- | --------------------------------------------------- |
| 2          | 12                                                    | 7.5                                                |
| 5          | 23                                                    | 17.6                                               |
| 10         | 32                                                    | 28.6                                               |
| 20         | 39                                                    | 37.0                                               |
| 50         | 44                                                    | 43.2                                               |

Identify the type of inhibition and justify your answer.

</details>

<details>
<summary>Answer</summary>

At high $[S]$ ($50\;\mathrm{mM}$), the velocity with inhibitor ($43.2$) approaches the velocity
without inhibitor ($44.0$). The $V_{\max}$ is approximately the same with and without the inhibitor.

At low $[S]$ ($2\;\mathrm{mM}$), the velocity with inhibitor ($7.5$) is substantially lower than
without ($12.0$), indicating a higher apparent $K_m$.

Since $V_{\max}$ is unchanged and $K_m$ is increased, the inhibition is **competitive**. The
inhibitor competes with the substrate for the active site but can be overcome by increasing
substrate concentration.

</details>

<details>
<summary>Question 5: C4 vs C3 Photosynthesis</summary>

Compare $\mathrm{C_4}$ and $\mathrm{C_3}$ photosynthesis with respect to: (a) the initial
$\mathrm{CO}_2$ fixation enzyme and its properties, (b) the spatial organisation of carbon
fixation and the Calvin cycle, (c) photorespiration efficiency, and (d) water use efficiency.
Explain why $\mathrm{C_4}$ plants have a competitive advantage in hot, arid environments.

</details>

<details>
<summary>Answer</summary>

(a) $\mathrm{C_3}$ plants use **Rubisco** to fix $\mathrm{CO}_2$ directly in mesophyll cells.
Rubisco has both carboxylase and oxygenase activity and a low affinity for $\mathrm{CO}_2$.
$\mathrm{C_4}$ plants use **PEP carboxylase** in mesophyll cells to fix $\mathrm{CO}_2$ into
oxaloacetate (4C). PEP carboxylase has no oxygenase activity and a high affinity for $\mathrm{CO}_2$.

(b) In $\mathrm{C_4}$ plants, the initial $\mathrm{CO}_2$ fixation occurs in mesophyll cells
(producing a 4C acid, usually malate). The 4C acid is transported to **bundle-sheath cells**, where
$\mathrm{CO}_2$ is released at high concentration for Rubisco. In $\mathrm{C_3}$ plants, all
reactions occur in the mesophyll cells.

(c) $\mathrm{C_4}$ plants suppress photorespiration by concentrating $\mathrm{CO}_2$ around
Rubisco in the bundle-sheath cells ($\mathrm{CO}_2$ concentration is $10$--$60\times$ atmospheric).
$\mathrm{C_3}$ plants cannot prevent $\mathrm{O}_2$ from competing with $\mathrm{CO}_2$ at Rubisco.

(d) $\mathrm{C_4}$ plants can maintain a higher photosynthetic rate at lower stomatal conductance
(because $\mathrm{CO}_2$ is concentrated internally), meaning they lose less water per unit of
$\mathrm{CO}_2$ fixed. This gives them higher water use efficiency (WUE). In hot, arid environments,
where water conservation is critical and temperatures promote Rubisco's oxygenase activity,
$\mathrm{C_4}$ plants outcompete $\mathrm{C_3}$ plants.

</details>

---

## Worked Examples

**Worked Example: Calculating ATP Yield with a Specific Inhibitor**

A tissue sample is respiring glucose aerobically. Oligomycin is added, completely blocking ATP
synthase. Predict the effect on: (a) $\mathrm{O}_2$ consumption, (b) ATP production, (c) NADH
concentration, (d) the proton gradient. Explain the mechanism.

<details>
<summary>Solution</summary>

(a) **$\mathrm{O}_2$ consumption decreases to zero**. Oligomycin blocks ATP synthase, so protons
cannot flow back into the matrix. The proton gradient builds up until the PMF is so large that the
electron transport chain cannot pump more protons against it. Electron transport stops, and $\mathrm{O}_2$
is no longer reduced.

(b) **ATP production drops to zero** (no oxidative phosphorylation) and only the 2 ATP from glycolysis
remain (and possibly 2 GTP from the Krebs cycle, though the Krebs cycle will also stop as NAD$^+$
runs out).

(c) **NADH concentration increases**. Without the ETC accepting electrons, NADH from glycolysis and
the Krebs cycle cannot be oxidised to $\mathrm{NAD}^+$. The $\mathrm{NADH/NAD}^+$ ratio increases
dramatically.

(d) **The proton gradient increases to its maximum** and is maintained. The ETC has stopped, so no
more protons are pumped, but the existing gradient cannot dissipate through ATP synthase.

This is analogous to a car engine where the exhaust is blocked: fuel cannot be consumed, energy
production ceases, and intermediates accumulate.

</details>

**Worked Example: Photorespiration Quantification**

At $35^\circ\mathrm{C}$ and atmospheric $\mathrm{CO}_2$ ($0.04\%$), Rubisco's relative specificity
for $\mathrm{CO}_2$ vs $\mathrm{O}_2$ is $80$ (i.e., Rubisco reacts with $\mathrm{CO}_2$ 80
times more readily than with $\mathrm{O}_2$, per molecule). The $\mathrm{O}_2$ concentration in
the leaf is $21\%$. Calculate the ratio of carboxylation to oxygenation reactions. If each
oxygenation reaction wastes 2 ATP and 1 NADPH, calculate the energy wasted per 1000 Rubisco
reactions.

<details>
<summary>Solution</summary>

The ratio of carboxylation to oxygenation depends on the relative concentrations of $\mathrm{CO}_2$
and $\mathrm{O}_2$ at the Rubisco active site, weighted by Rubisco's relative specificity:

$\frac{V_{\mathrm{carboxylation}}}{V_{\mathrm{oxygenation}}} = \frac{[\mathrm{CO}_2]}{[\mathrm{O}_2]} \times \frac{S_{\mathrm{CO_2/O_2}}}{1} = \frac{0.04}{21} \times 80 = \frac{3.2}{21} \approx 0.152$

This means for every carboxylation reaction, there are approximately $1/0.152 \approx 6.6$ oxygenation
reactions. This is very high, explaining why photorespiration is severe at high temperatures.

Per 1000 Rubisco reactions:
- Carboxylation reactions: $1000 \times \frac{0.152}{1.152} \approx 132$
- Oxygenation reactions: $1000 \times \frac{1}{1.152} \approx 868$

Energy wasted by photorespiration: $868 \times 2 = 1736$ ATP and $868 \times 1 = 868$ NADPH.

This demonstrates why $\mathrm{C_4}$ plants (which concentrate $\mathrm{CO}_2$) have a massive
advantage in hot conditions: by raising the effective $[\mathrm{CO}_2]$ around Rubisco to
$\approx 10\times$ atmospheric, the carboxylation:oxygenation ratio improves dramatically.

</details>

---

## Common Pitfalls (Expanded)

- **Confusing competitive and non-competitive inhibition**: competitive = active site ($K_m$ up,
  $V_{\max}$ same); non-competitive = allosteric site ($V_{\max}$ down, $K_m$ same).
- **Stating photosynthesis produces energy**: photosynthesis stores light energy; cellular respiration
  releases it.
- **Confusing light-dependent and Calvin cycle**: the Calvin cycle is light-independent but requires
  ATP/NADPH from the light-dependent reactions.
- **Writing that $\mathrm{CO}_2$ is split**: $\mathrm{CO}_2$ is fixed (combined with RuBP); water is
  split (photolysis).
- **Confusing fermentation and anaerobic respiration**: fermentation = no ETC (substrate-level
  phosphorylation only); anaerobic respiration = ETC with alternative electron acceptor.
- **Overestimating ATP yield**: the actual yield ($\approx 30$--$32$ ATP) is less than the theoretical
  maximum ($36$--$38$) due to proton leak, the cost of transporting ATP/ADP across the mitochondrial
  membrane, and the shuttle system for cytoplasmic NADH.

---

## Exam-Style Problems

<details>
<summary>Problem 1: Data Analysis -- Enzyme Kinetics with Inhibitor</summary>

The following data show the initial velocity of an enzyme-catalysed reaction at different substrate
concentrations, with and without an unknown inhibitor:

| $[S]$ (mM) | Velocity, no inhibitor | Velocity + 5 mM inhibitor |
| ---------- | ---------------------- | -------------------------- |
| 1          | 5.0                    | 2.8                       |
| 2          | 8.3                    | 5.0                       |
| 5          | 14.3                   | 10.0                      |
| 10         | 18.2                   | 14.3                      |
| 20         | 20.8                   | 17.2                      |
| 50         | 22.7                   | 20.8                      |

(a) Plot a Lineweaver-Burk graph and determine $V_{\max}$ and $K_m$ with and without the inhibitor.
(b) Identify the type of inhibition. (c) Calculate the inhibitor constant $K_i$.

</details>

<details>
<summary>Problem 2: Extended Response -- Photosynthesis Under Different Conditions</summary>

An aquatic plant is placed in a solution of $\mathrm{NaHCO}_3$ (providing dissolved $\mathrm{CO}_2$).
The rate of oxygen production is measured at different light intensities and temperatures.
(a) Predict and explain the effect of increasing temperature from $15^\circ\mathrm{C}$ to
$35^\circ\mathrm{C}$ on the rate of photosynthesis at saturating light intensity. (b) Explain why
the rate decreases above $35^\circ\mathrm{C}$. (c) If the experiment is repeated with a $\mathrm{C_4}$
plant, predict how the temperature response would differ and explain why.

</details>

<details>
<summary>Problem 3: Quantitative -- Respiratory Quotient and Metabolic Substrate</summary>

A mouse consumes $1200\;\mathrm{mL}$ of $\mathrm{O}_2$ and produces $960\;\mathrm{mL}$ of
$\mathrm{CO}_2$ over 24 hours at STP. (a) Calculate the RQ. (b) Identify the most likely metabolic
substrate(s). (c) Calculate the energy released, assuming the calorific value is $20\;\mathrm{kJ/L\;O_2}$
for carbohydrate and $19\;\mathrm{kJ/L\;O_2}$ for fat. (d) Explain why the RQ can change during
prolonged fasting.

</details>

<details>
<summary>Problem 4: Extended Response -- Uncouplers and Metabolic Rate</summary>

2,4-Dinitrophenol (DNP) was used as a weight-loss drug in the 1930s before being banned due to
fatal hyperthermia. (a) Explain the mechanism by which DNP uncouples oxidative phosphorylation.
(b) Predict the effect of DNP on: (i) $\mathrm{O}_2$ consumption, (ii) ATP production, (iii) body
temperature, (iv) blood glucose levels. (c) Explain why DNP causes rapid weight loss but is
extremely dangerous.

</details>

<details>
<summary>Problem 5: Data Analysis -- Photosynthesis and Wavelength</summary>

The following data show the rate of photosynthesis of a green alga at different wavelengths of light:

| Wavelength (nm) | Rate of photosynthesis (arbitrary units) |
| --------------- | ---------------------------------------- |
| 400             | 65                                       |
| 425             | 80                                       |
| 450             | 55                                       |
| 475             | 30                                       |
| 500             | 15                                       |
| 525             | 10                                       |
| 550             | 8                                        |
| 575             | 10                                       |
| 600             | 25                                       |
| 625             | 55                                       |
| 650             | 80                                       |
| 675             | 72                                       |
| 700             | 30                                       |

(a) Plot the action spectrum. (b) Superimpose the expected absorption spectra of chlorophyll a,
chlorophyll b, and carotenoids. (c) Explain why the action spectrum has two peaks and why the
green region ($500$--$600\;\mathrm{nm}$) has a low rate. (d) Explain why the action spectrum and
absorption spectrum are similar but not identical.

</details>

---

## If You Get These Wrong, Revise:

- **Molecular biology -- protein structure** --> Review [./molecular-biology](./molecular-biology)
- **Cell biology -- membrane transport** --> Review [./cell-biology](./cell-biology)
- **Plant biology -- transpiration and transport** --> Review [./plant-biology](./plant-biology)
- **Human physiology -- gas exchange** --> Review [./human-physiology](./human-physiology)
- **Genetics -- enzyme genes** --> Review [./genetics](./genetics)
