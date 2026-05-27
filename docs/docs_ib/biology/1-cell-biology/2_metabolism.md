title: Metabolism and Cell Biology description: 'IB Biology -- enzyme kinetics (Michaelis-Menten,
inhibition types), cellular respiration (glycolysis, Krebs cycle, electron transport chain),
photosynthesis' slug: metabolism-cell-biology

date: 2024-01-01T00:00:00Z tags:

- ib
- biology categories:
- ib
- ib-biology

## 1. Enzyme Kinetics

### Michaelis-Menten Kinetics

The **Michaelis-Menten equation** describes the relationship between substrate concentration $[S]$
And reaction velocity $v$:

$$v = \frac{V_{\max} [S]}{K_m + [S]}$$

Where:

- $V_{\max}$: the maximum reaction velocity, achieved when all enzyme active sites are saturated
  with substrate.
- $K_m$ (Michaelis constant): the substrate concentration at which the reaction velocity is
  $\frac{1}{2}V_{\max}$. $K_m$ is inversely related to the enzyme's affinity for the substrate: a
  **low $K_m$** indicates **high affinity** (the enzyme reaches half-maximal velocity at low
  substrate concentration).

**Derivation assumptions:**

1. The enzyme-substrate complex (ES) is in **steady state**: the rate of ES formation equals the
   rate of ES breakdown.
2. Total enzyme concentration $[E]_T = [E] + [ES]$ is constant.
3. Product formation is irreversible (or the reverse reaction is negligible at early time points).
4. $[S] \gg [E]_T$ (substrate concentration is much greater than enzyme concentration).

### The Lineweaver-Burk Plot

A double-reciprocal plot of $\frac{1}{v}$ vs $\frac{1}{[S]}$ transforms the Michaelis-Menten
Equation into a straight line:

$$\frac{1}{v} = \frac{K_m}{V_{\max}} \cdot \frac{1}{[S]} + \frac{1}{V_{\max}}$$

- **y-intercept**: $\frac{1}{V_{\max}}$
- **x-intercept**: $-\frac{1}{K_m}$
- **Slope**: $\frac{K_m}{V_{\max}}$

### Enzyme Inhibition Types

#### Competitive Inhibition

- **Mechanism**: the inhibitor ($I$) structurally resembles the substrate and binds reversibly to
  the active site, competing with the substrate.
- **Effect**: increases the apparent $K_m$ ($K_m^{\mathrm{app}} = K_m(1 + [I]/K_i)$); $V_{\max}$ is
  unchanged (at very high $[S]$The substrate outcompetes the inhibitor).
- **Lineweaver-Burk**: lines intersect on the **y-axis** (same $1/V_{\max}$Different slopes and
  x-intercepts).

**Example**: statins competitively inhibit HMG-CoA reductase in cholesterol biosynthesis.

#### Non-Competitive Inhibition

- **Mechanism**: the inhibitor binds to an **allosteric site** (not the active site), causing a
  conformational change that reduces the enzyme's catalytic activity.
- **Effect**: decreases $V_{\max}$ ($V_{\max}^{\mathrm{app}} = V_{\max}/(1 + [I]/K_i)$); $K_m$ is
  unchanged (substrate binding is not affected).
- **Lineweaver-Burk**: lines intersect on the **x-axis** (same $-1/K_m$Different y-intercepts and
  slopes).

**Example**: heavy metal ions ($\mathrm{Pb}^{2+}$$\mathrm{Hg}^{2+}$) bind to thiol groups (-SH) of
cysteine residues at allosteric sites.

#### Uncompetitive Inhibition

- **Mechanism**: the inhibitor binds only to the enzyme-substrate complex (ES), not to the free
  enzyme.
- **Effect**: decreases both $V_{\max}$ and $K_m$ proportionally
  ($V_{\max}^{\mathrm{app}} = V_{\max}/(1 + [I]/K_i)$; $K_m^{\mathrm{app}} = K_m/(1 + [I]/K_i)$).
- **Lineweaver-Burk**: produces **parallel lines** (same slope, different y- and x-intercepts).

#### Mixed Inhibition

- The inhibitor can bind to both the free enzyme and the ES complex, but with different affinities
  ($K_i \neq K_i'$).
- Both $V_{\max}$ and $K_m$ are affected. If the inhibitor binds more strongly to the free enzyme
  ($K_i < K_i'$), $K_m$ increases (competitive-like). If it binds more strongly to ES
  ($K_i > K_i'$), $K_m$ decreases (uncompetitive-like).
- **Lineweaver-Burk**: lines intersect in the **second quadrant** (left of the y-axis, above the
  x-axis).

### Summary of Inhibition Effects

| Parameter  | Competitive      | Non-competitive  | Uncompetitive  | Mixed                  |
| ---------- | ---------------- | ---------------- | -------------- | ---------------------- |
| $V_{\max}$ | Unchanged        | Decreases        | Decreases      | Decreases              |
| $K_m$      | Increases        | Unchanged        | Decreases      | Increases or decreases |
| LB plot    | Intersect y-axis | Intersect x-axis | Parallel lines | Intersect 2nd quadrant |

---

## 2. ATP: Structure and Function

### Structure of ATP

**Adenosine triphosphate (ATP)** consists of:

- **Adenine**: a nitrogenous base (purine).
- **Ribose**: a pentose sugar.
- **Three phosphate groups** ($\alpha$$\beta$$\gamma$).

The bonds between the phosphate groups are **phosphoanhydride bonds**. The hydrolysis of the
terminal Phosphoanhydride bond (between $\beta$ and $\gamma$ phosphates) releases energy:

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

| Stage of respiration      | Net ATP (approximate)      | Net reduced coenzymes                                                       |
| ------------------------- | -------------------------- | --------------------------------------------------------------------------- |
| Glycolysis                | 2 ATP (substrate-level)    | 2 NADH (cytoplasm)                                                          |
| Pyruvate oxidation        | 0 ATP                      | 2 NADH (mitochondrial matrix)                                               |
| Krebs cycle               | 2 ATP (GTP)                | 6 NADH + 2 $\mathrm{FADH}_2$ (mitochondrial matrix)                         |
| Oxidative phosphorylation | ---                        | NADH $\to \approx 2.5$ ATP each; $\mathrm{FADH}_2 \to \approx 1.5$ ATP each |
| **Total (per glucose)**   | **$\approx 30$--$32$ ATP** | **10 NADH + 2 $\mathrm{FADH}_2$**                                           |

Note: older textbooks cite $36$--$38$ ATP, based on the P/O ratio of $3$ for NADH and $2$ for
$\mathrm{FADH}_2$. Current evidence suggests the shuttle system for cytoplasmic NADH
(malate-aspartate Or glycerol-3-phosphate) and proton leak across the inner mitochondrial membrane
reduce the actual Yield to approximately $30$--$32$ ATP per glucose.

---

## 3. Cellular Respiration: Glycolysis

### Overview

Glycolysis ("sugar splitting") occurs in the **cytoplasm** and does not require oxygen. It converts
One molecule of glucose ($\mathrm{C_6H_{12}O_6}$) into two molecules of pyruvate
($\mathrm{C_3H_4O_3}$).

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
7. **Phosphoglycerate kinase** transfers a phosphate from 1,3BPG to ADP, producing
   3-phosphoglycerate (3PG) and 1 ATP (**substrate-level phosphorylation**). Per glucose: $2$ ATP.
8. **Phosphoglycerate mutase** converts 3PG to 2-phosphoglycerate (2PG).
9. **Enolase** dehydrates 2PG to phosphoenolpyruvate (PEP).
10. **Pyruvate kinase** transfers a phosphate from PEP to ADP, producing pyruvate and 1 ATP. Per
    glucose: $2$ ATP. This is an irreversible step.

### Net yield of glycolysis

- 2 ATP consumed (steps 1 and 3)
- 4 ATP produced (steps 7 and 10, $\times 2$)
- **Net ATP: 2**
- 2 NADH produced (step 6, $\times 2$)

### Regulation of Glycolysis

| Enzyme                        | Allosteric activator                        | Allosteric inhibitor                     | Hormonal regulation                                   |
| ----------------------------- | ------------------------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| **Hexokinase**                | ---                                         | Glucose-6-phosphate (product inhibition) | ---                                                   |
| **Phosphofructokinase (PFK)** | AMP, ADP, $\mathrm{F}_{2,6}\mathrm{BP}$     | ATP, citrate, low pH                     | Insulin activates (via $\mathrm{F}_{2,6}\mathrm{BP}$) |
| **Pyruvate kinase**           | $\mathrm{F}_{1,6}\mathrm{BP}$ (feedforward) | ATP, alanine, acetyl-CoA                 | Glucagon inhibits (phosphorylation in liver)          |

---

## 4. Cellular Respiration: Pyruvate Oxidation and the Krebs Cycle

### Pyruvate Oxidation (Link Reaction)

Pyruvate is transported from the cytoplasm into the mitochondrial matrix, where it is converted to
Acetyl-CoA:

$$\mathrm{Pyruvate} + \mathrm{CoA} + \mathrm{NAD}^+ \to \mathrm{Acetyl\text{-}CoA} + \mathrm{CO}_2 + \mathrm{NADH}$$

Catalysed by the **pyruvate dehydrogenase complex** (a multi-enzyme complex). Per glucose: $2$
pyruvate $\to$ $2$ acetyl-CoA, $2$ $\mathrm{CO}_2$$2$ NADH.

### The Krebs Cycle (Citric Acid Cycle)

Occurs in the **mitochondrial matrix**. Each turn of the cycle processes one acetyl-CoA (per
glucose: 2 turns).

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
6. **Succinate dehydrogenase**: succinate is oxidised to fumarate, reducing FAD to
   $\mathrm{FADH}_2$. This enzyme is embedded in the inner mitochondrial membrane (Complex II).
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
Series of protein complexes and mobile carriers:

| Complex | Component                 | Electron donor              | Electron acceptor                             | Protons pumped ($\mathrm{H}^+$) |
| ------- | ------------------------- | --------------------------- | --------------------------------------------- | ------------------------------- |
| **I**   | NADH dehydrogenase        | NADH                        | Ubiquinone (Q)                                | 4                               |
| **II**  | Succinate dehydrogenase   | $\mathrm{FADH}_2$           | Ubiquinone (Q)                                | 0                               |
| **III** | Cytochrome $bc_1$ complex | Ubiquinol ($\mathrm{QH}_2$) | Cytochrome c                                  | 4                               |
| **IV**  | Cytochrome c oxidase      | Cytochrome c                | $\mathrm{O}_2$ ($\to \mathrm{H}_2\mathrm{O}$) | 2                               |

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

The binding change mechanism (Boyer, 1997): as protons flow through $\mathrm{F}_0$The $\gamma$
Subunit rotates, inducing conformational changes in the three $\beta$ subunits of $\mathrm{F}_1$
(Loose, Tight, Open states), sequentially binding ADP + $\mathrm{P_i}$Forming ATP, and releasing
ATP. Approximately $3$--$4$ protons are required per ATP synthesised.

### P/O Ratios

| Donor             | Protons pumped to IMS | Protons for ATP synthesis | Approximate ATP yield |
| ----------------- | --------------------- | ------------------------- | --------------------- |
| NADH              | 10                    | $\approx 3$--$4$ per ATP  | $\approx 2.5$ ATP     |
| $\mathrm{FADH}_2$ | 6                     | $\approx 3$--$4$ per ATP  | $\approx 1.5$ ATP     |

### Uncouplers and Inhibitors

| Substance                     | Effect                                                                                         | Example                                           |
| ----------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **Cyanide** ($\mathrm{CN}^-$) | Binds to $\mathrm{Fe}^{3+}$ in Complex IV, blocking electron transport                         | Lethal poison; halts ATP production               |
| **Carbon monoxide** (CO)      | Binds to $\mathrm{Fe}^{2+}$ in Complex IV                                                      | Same as cyanide                                   |
| **Oligomycin**                | Blocks the proton channel in ATP synthase ($\mathrm{F}_0$)                                     | ETC runs but no ATP synthesis; PMF builds up      |
| **DNP (2,4-dinitrophenol)**   | Lipid-soluble uncoupler; carries $\mathrm{H}^+$ across the inner membrane, dissipating the PMF | ETC runs at maximum rate; energy released as heat |
| **Rotenone**                  | Inhibits Complex I                                                                             | Blocks electron flow from NADH                    |

### Oxygen as the Final Electron Acceptor

$$\frac{1}{2}\mathrm{O}_2 + 2\mathrm{H}^+ + 2e^- \to \mathrm{H}_2\mathrm{O}$$

Oxygen is essential because it has a very high reduction potential ($E_0' = +0.82\;\mathrm{V}$),
Making it the strongest biological electron acceptor. Without oxygen, the ETC backs up: NADH and
$\mathrm{FADH}_2$ cannot be oxidised, the Krebs cycle stops (NAD$^+$ and FAD are not regenerated),
And the cell must rely on fermentation or anaerobic respiration.

---

## 6. Photosynthesis

### Overview

Photosynthesis converts light energy into chemical energy stored in glucose:

$$6\mathrm{CO}_2 + 6\mathrm{H}_2\mathrm{O} + \text{light energy} \to \mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6 + 6\mathrm{O}_2$$

Occurs in the **chloroplasts** of plant cells (and algae, cyanobacteria). Chloroplasts have an Outer
membrane, inner membrane, stroma (fluid), and thylakoid membranes (site of the Light-dependent
reactions).

### Light-Dependent Reactions

Occur in the **thylakoid membranes**. Light energy is captured and used to generate ATP and NADPH.

#### Photosystems

Photosystems are pigment-protein complexes containing **chlorophyll a**, accessory pigments
(chlorophyll b, carotenoids), and electron carriers. Accessory pigments absorb wavelengths not
Absorbed by chlorophyll a and transfer the energy to chlorophyll a via resonance energy transfer
(antenna effect).

**Absorption spectrum**: chlorophyll a absorbs blue ($\approx 430\;\mathrm{nm}$) and red
($\approx 660\;\mathrm{nm}$) light most strongly; green light is reflected (giving leaves their
Green colour). Carotenoids absorb blue-green light ($\approx 450$--$500\;\mathrm{nm}$).

**Action spectrum**: the rate of photosynthesis as a function of wavelength; closely matches the
Absorption spectrum, confirming that absorbed light drives photosynthesis.

#### Photosystem II (P680)

1. Light energy excites an electron in **P680** (the reaction centre chlorophyll of PSII) to a
   higher energy level.
2. The excited electron is transferred to the primary electron acceptor (pheophytin).
3. **Photolysis of water**:
   $\mathrm{H}_2\mathrm{O} \to 2\mathrm{H}^+ + \frac{1}{2}\mathrm{O}_2 + 2e^-$ replaces the lost
   electron. This is the source of $\mathrm{O}_2$ released during photosynthesis.
4. The electron passes through the **electron transport chain**: pheophytin $\to$ plastoquinone (PQ)
   $\to$ cytochrome $b_6f$ complex $\to$ plastocyanin (PC).
5. As electrons pass through cytochrome $b_6f$Protons are pumped from the stroma into the thylakoid
   lumen, contributing to the proton gradient.

#### Photosystem I (P700)

6. Light energy excites an electron in **P700** (reaction centre of PSI).
7. The excited electron passes to ferredoxin (Fd) and then to **NADP$^+$ reductase**, which reduces
   $\mathrm{NADP}^+$ to NADPH using the electrons and $\mathrm{H}^+$ from the stroma.

#### Chemiosmosis in Chloroplasts

The proton gradient across the thylakoid membrane ($\mathrm{H}^+$ concentration higher in the lumen)
Drives ATP synthesis by **ATP synthase** (CF$_0$-CF$_1$), analogous to mitochondrial ATP synthase.
Protons enter the lumen from photolysis and from the cytochrome $b_6f$ complex.

### The Calvin Cycle (Light-Independent Reactions)

Occurs in the **stroma**. Uses ATP and NADPH from the light-dependent reactions to fix
$\mathrm{CO}_2$ Into organic molecules ( carbohydrates).

**Three phases:**

#### 1. Carbon Fixation

$\mathrm{CO}_2$ is fixed by **ribulose-1,5-bisphosphate carboxylase/oxygenase (Rubisco)**, the most
Abundant protein on Earth:

$$\mathrm{CO}_2 + \text{RuBP (5C)} \to 2\times\text{3-phosphoglycerate (3-PGA, 3C)}$$

Rubisco catalyses approximately $10^{12}$ reactions per second globally but is inefficient:

- **Slow turnover**: $\approx 3$ reactions per second per active site.
- **Oxygenase activity**: Rubisco can bind $\mathrm{O}_2$ instead of $\mathrm{CO}_2$Producing one
  3-PGA molecule and one 2-phosphoglycolate (2-PG). This is **photorespiration**, which wastes
  carbon and energy.

#### 2. Reduction

3-PGA is phosphorylated by ATP (from the light-dependent reactions) and reduced by NADPH:

$$\text{3-PGA} + \text{ATP} + \text{NADPH} \to \text{G3P (glyceraldehyde-3-phosphate)}$$

For every 3 $\mathrm{CO}_2$ fixed, 6 G3P are produced, but 5 are recycled to regenerate RuBP. Only 1
G3P (a 3-carbon sugar) is the net gain per 3 $\mathrm{CO}_2$.

#### 3. Regeneration of RuBP

5 G3P molecules (15 carbons) are rearranged using 3 ATP to regenerate 3 RuBP molecules (15 carbons).

### Net equation of the Calvin cycle (per 3 $\mathrm{CO}_2$):

$$3\mathrm{CO}_2 + 9\mathrm{ATP} + 6\mathrm{NADPH} \to \text{G3P} + 9\mathrm{ADP} + 8\mathrm{P_i} + 6\mathrm{NADP}^+$$

To synthesise one glucose molecule ($6\;\mathrm{C}$), the Calvin cycle must turn twice:
$6\mathrm{CO}_2 + 18\mathrm{ATP} + 12\mathrm{NADPH} \to \mathrm{glucose} + 18\mathrm{ADP} + 18\mathrm{P_i} + 12\mathrm{NADP}^+$.

### Limiting Factors of Photosynthesis

The rate of photosynthesis is affected by:

| Factor                            | Effect                                                                                                                                          | Graph shape                                        |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **Light intensity**               | Rate increases linearly at low intensity (light is limiting). At high intensity, rate plateaus (another factor becomes limiting).               | Rectangular hyperbola, levelling off               |
| **$\mathrm{CO}_2$ concentration** | Rate increases with $\mathrm{CO}_2$ up to a plateau (Rubisco saturation).                                                                       | Similar to light intensity curve                   |
| **Temperature**                   | Rate increases up to an optimum ($\approx 25$--$30^\circ\mathrm{C}$ for $\mathrm{C_3}$ plants); above this, Rubisco and other enzymes denature. | Bell-shaped curve; declines at high temperatures   |
| **Water**                         | Severe water stress closes stomata, limiting $\mathrm{CO}_2$ uptake.                                                                            | Rate drops sharply as water availability decreases |

**$\mathrm{C_4}$ and CAM adaptations**: in hot, dry conditions, $\mathrm{C_3}$ plants lose water
Through open stomata and suffer from photorespiration. $\mathrm{C_4}$ plants (maize, sugarcane) use
PEP carboxylase (which has no oxygenase activity) to fix $\mathrm{CO}_2$ into a 4-carbon compound In
mesophyll cells, then transport it to bundle-sheath cells where $\mathrm{CO}_2$ is released at High
concentration for Rubisco. CAM plants (cactus, pineapple) fix $\mathrm{CO}_2$ at night (open Stomata
to reduce water loss) and store it as malic acid; during the day, stomata close and the Stored
$\mathrm{CO}_2$ is released for the Calvin cycle.

---

## 7. Fermentation and Anaerobic Respiration

### Lactic Acid Fermentation

In the absence of oxygen (or when the ETC cannot keep up with demand), pyruvate is converted to
Lactate by **lactate dehydrogenase**, oxidising NADH to $\mathrm{NAD}^+$:

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
- Used in **brewing** (ethanol production) and **baking** ($\mathrm{CO}_2$ production causes bread
  to rise).

### Anaerobic Respiration

Some prokaryotes use electron acceptors other than $\mathrm{O}_2$ in the ETC:

| Final electron acceptor          | Product                                                      | Example organism                            |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| $\mathrm{NO}_3^-$ (nitrate)      | $\mathrm{N}_2$ or $\mathrm{N}_2\mathrm{O}$ (denitrification) | _Pseudomonas denitrificans_ (soil bacteria) |
| $\mathrm{SO}_4^{2-}$ (sulfate)   | $\mathrm{H}_2\mathrm{S}$ (hydrogen sulfide)                  | _Desulfovibrio_ (sulfate-reducing bacteria) |
| $\mathrm{CO}_3^{2-}$ (carbonate) | $\mathrm{CH}_4$ (methane)                                    | Methanogens (archaea)                       |
| $\mathrm{Fe}^{3+}$ (iron)        | $\mathrm{Fe}^{2+}$                                           | Geobacter (iron-reducing bacteria)          |

Anaerobic respiration produces more ATP than fermentation (the ETC still operates) but less than
Aerobic respiration (alternative acceptors have lower reduction potentials than $\mathrm{O}_2$).

---

## 8. Metabolic Regulation

### Regulation of Cellular Respiration

Cellular respiration is regulated primarily by **feedback inhibition** and **allosteric
regulation**:

- **High ATP/ADP ratio**: ATP allosterically inhibits PFK (glycolysis) and isocitrate dehydrogenase
  (Krebs cycle). When energy is abundant, respiration slows.
- **High ADP/AMP ratio**: ADP and AMP activate PFK and isocitrate dehydrogenase, stimulating
  respiration.
- **High $\mathrm{NADH/NAD}^+$ ratio**: inhibits pyruvate dehydrogenase, isocitrate dehydrogenase,
  and $\alpha$-ketoglutarate dehydrogenase.
- **High citrate**: inhibits PFK (signals abundant Krebs cycle intermediates).

### Integration of Metabolic Pathways

| Intermediate     | Source pathways                                      | Destination pathways                                                                   |
| ---------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Pyruvate**     | Glycolysis                                           | Krebs cycle (aerobic); fermentation (anaerobic); gluconeogenesis; fatty acid synthesis |
| **Acetyl-CoA**   | Pyruvate oxidation; $\beta$-oxidation of fatty acids | Krebs cycle; fatty acid synthesis; ketone body synthesis                               |
| **G3P**          | Calvin cycle (plants)                                | Glucose synthesis; glycolysis (reverse)                                                |
| **Oxaloacetate** | Krebs cycle; gluconeogenesis                         | Krebs cycle; gluconeogenesis; amino acid synthesis (aspartate)                         |

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
Reaction velocity at $[S] = 4\;\mathrm{mM}$$8\;\mathrm{mM}$And $20\;\mathrm{mM}$. A Competitive
inhibitor is added that increases the apparent $K_m$ to $24\;\mathrm{mM}$. Calculate the velocity at
$[S] = 20\;\mathrm{mM}$ with the inhibitor. At what substrate Concentration does the inhibited
reaction reach $90\%$ of $V_{\max}$?

</details>

<details>
<summary>Answer</summary>

$v = \frac{V_{\max}[S]}{K_m + [S]}$

At $[S] = 4\;\mathrm{mM}$:
$v = \frac{60 \times 4}{8 + 4} = \frac{240}{12} = 20\;\mathrm{\mu mol/min}$

At $[S] = 8\;\mathrm{mM}$:
$v = \frac{60 \times 8}{8 + 8} = \frac{480}{16} = 30\;\mathrm{\mu mol/min}$ (=
$\frac{1}{2}V_{\max}$Confirming $K_m$)

At $[S] = 20\;\mathrm{mM}$:
$v = \frac{60 \times 20}{8 + 20} = \frac{1200}{28} = 42.9\;\mathrm{\mu mol/min}$

With competitive inhibitor ($K_m^{\mathrm{app}} = 24\;\mathrm{mM}$$V_{\max}$ unchanged): At
$[S] = 20\;\mathrm{mM}$:
$v = \frac{60 \times 20}{24 + 20} = \frac{1200}{44} = 27.3\;\mathrm{\mu mol/min}$

For $90\%$ of $V_{\max}$ with inhibitor: $0.9 \times 60 = \frac{60 \times [S]}{24 + [S]}$
$54(24 + [S]) = 60[S]$ $1296 + 54[S] = 60[S]$ $6[S] = 1296$ $[S] = 216\;\mathrm{mM}$

At $[S] = 216\;\mathrm{mM}$The competitive inhibitor is effectively outcompeted.

</details>

<details>
<summary>Question 2: Photosynthesis Limiting Factors</summary>

A student investigates the effect of light intensity on the rate of photosynthesis in an aquatic
plant At two different $\mathrm{CO}_2$ concentrations ($0.04\%$ and $0.10\%$). The results show that
at Low light intensities, both curves rise linearly at the same rate. At higher intensities, the
$0.10\%$ $\mathrm{CO}_2$ curve plateaus at a higher rate than the $0.04\%$ curve. Explain these
Observations with reference to limiting factors.

</details>

<details>
<summary>Answer</summary>

At low light intensities, light is the limiting factor for both curves. Increasing light intensity
Increases the rate of ATP and NADPH production by the light-dependent reactions, which drives the
Calvin cycle. Since the $\mathrm{CO}_2$ concentration is not limiting at low light, both curves
Follow the same trajectory.

At higher light intensities, the light-dependent reactions produce abundant ATP and NADPH, and
$\mathrm{CO}_2$ concentration becomes the limiting factor. At $0.04\%$ $\mathrm{CO}_2$Rubisco is
Saturated with its substrates at a lower rate, so the curve plateaus earlier and at a lower
Photosynthetic rate. At $0.10\%$ $\mathrm{CO}_2$More $\mathrm{CO}_2$ is available for Rubisco,
Allowing a higher maximum rate before the curve plateaus. This demonstrates the principle of
Limiting factors: the rate is determined by the factor in shortest supply.

</details>

<details>
<summary>Question 3: Cellular Respiration ATP Yield</summary>

A researcher measures the $\mathrm{O}_2$ consumption and $\mathrm{CO}_2$ production of a tissue
sample. In $10$ minutes, the sample consumes $60\;\mathrm{\mu L}$ of $\mathrm{O}_2$ at STP and
produces $58\;\mathrm{\mu L}$ of $\mathrm{CO}_2$. (a) Calculate the respiratory quotient (RQ). (b)
What Does the RQ suggest about the primary respiratory substrate? (c) If the tissue completely
oxidises 1 mole of glucose, calculate the approximate volume of $\mathrm{O}_2$ consumed at STP.

</details>

<details>
<summary>Answer</summary>

(a)
$\mathrm{RQ} = \frac{\mathrm{CO}_2\text{ produced}}{\mathrm{O}_2\text{ consumed}} = \frac{58}{60} = 0.967$

(b) An RQ close to $1.0$ indicates that the primary substrate is **carbohydrate** (glucose), since
The complete oxidation of glucose produces equal moles of $\mathrm{CO}_2$ and $\mathrm{O}_2$
Consumed:
$\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6 + 6\mathrm{O}_2 \to 6\mathrm{CO}_2 + 6\mathrm{H}_2\mathrm{O}$.
For lipids, RQ $\approx 0.7$; for proteins, RQ $\approx 0.8$--$0.9$.

(c) For complete oxidation of 1 mole of glucose: $6$ moles of $\mathrm{O}_2$ consumed. At STP, $1$
mole of gas occupies $22.4\;\mathrm{L}$. Volume of $\mathrm{O}_2$ consumed:
$6 \times 22.4 = 134.4\;\mathrm{L}$.

</details>

<details>
<summary>Question 4: Inhibition Type Identification</summary>

An experiment measures enzyme activity at varying substrate concentrations with and without an
Unknown inhibitor. The results are:

| $[S]$ (mM) | Velocity without inhibitor ($\mathrm{\mu mol/min}$) | Velocity with inhibitor ($\mathrm{\mu mol/min}$) |
| ---------- | --------------------------------------------------- | ------------------------------------------------ |
| 2          | 12                                                  | 7.5                                              |
| 5          | 23                                                  | 17.6                                             |
| 10         | 32                                                  | 28.6                                             |
| 20         | 39                                                  | 37.0                                             |
| 50         | 44                                                  | 43.2                                             |

Identify the type of inhibition and justify your answer.

</details>

<details>
<summary>Answer</summary>

At high $[S]$ ($50\;\mathrm{mM}$), the velocity with inhibitor ($43.2$) approaches the velocity
Without inhibitor ($44.0$). The $V_{\max}$ is approximately the same with and without the inhibitor.

At low $[S]$ ($2\;\mathrm{mM}$), the velocity with inhibitor ($7.5$) is substantially lower than
Without ($12.0$), indicating a higher apparent $K_m$.

Since $V_{\max}$ is unchanged and $K_m$ is increased, the inhibition is **competitive**. The
Inhibitor competes with the substrate for the active site but can be overcome by increasing
Substrate concentration.

</details>

<details>
<summary>Question 5: C4 vs C3 Photosynthesis</summary>

Compare $\mathrm{C_4}$ and $\mathrm{C_3}$ photosynthesis with respect to: (a) the initial
$\mathrm{CO}_2$ fixation enzyme and its properties, (b) the spatial organisation of carbon Fixation
and the Calvin cycle, (c) photorespiration efficiency, and (d) water use efficiency. Explain why
$\mathrm{C_4}$ plants have a competitive advantage in hot, arid environments.

</details>

<details>
<summary>Answer</summary>

(a) $\mathrm{C_3}$ plants use **Rubisco** to fix $\mathrm{CO}_2$ directly in mesophyll cells.
Rubisco has both carboxylase and oxygenase activity and a low affinity for $\mathrm{CO}_2$.
$\mathrm{C_4}$ plants use **PEP carboxylase** in mesophyll cells to fix $\mathrm{CO}_2$ into
Oxaloacetate (4C). PEP carboxylase has no oxygenase activity and a high affinity for
$\mathrm{CO}_2$.

(b) In $\mathrm{C_4}$ plants, the initial $\mathrm{CO}_2$ fixation occurs in mesophyll cells
(producing a 4C acid, malate). The 4C acid is transported to **bundle-sheath cells**, where
$\mathrm{CO}_2$ is released at high concentration for Rubisco. In $\mathrm{C_3}$ plants, all
Reactions occur in the mesophyll cells.

(c) $\mathrm{C_4}$ plants suppress photorespiration by concentrating $\mathrm{CO}_2$ around Rubisco
in the bundle-sheath cells ($\mathrm{CO}_2$ concentration is $10$--$60\times$ atmospheric).
$\mathrm{C_3}$ plants cannot prevent $\mathrm{O}_2$ from competing with $\mathrm{CO}_2$ at Rubisco.

(d) $\mathrm{C_4}$ plants can maintain a higher photosynthetic rate at lower stomatal conductance
(because $\mathrm{CO}_2$ is concentrated internally), meaning they lose less water per unit of
$\mathrm{CO}_2$ fixed. This gives them higher water use efficiency (WUE). In hot, arid environments,
Where water conservation is critical and temperatures promote Rubisco's oxygenase activity,
$\mathrm{C_4}$ plants outcompete $\mathrm{C_3}$ plants.

</details>

---

## Worked Examples

**Worked Example: Calculating ATP Yield with a Specific Inhibitor**

A tissue sample is respiring glucose aerobically. Oligomycin is added, completely blocking ATP
Synthase. Predict the effect on: (a) $\mathrm{O}_2$ consumption, (b) ATP production, (c) NADH
Concentration, (d) the proton gradient. Explain the mechanism.

<details>
<summary>Solution</summary>

(a) **$\mathrm{O}_2$ consumption decreases to zero**. Oligomycin blocks ATP synthase, so protons
Cannot flow back into the matrix. The proton gradient builds up until the PMF is so large that the
Electron transport chain cannot pump more protons against it. Electron transport stops, and
$\mathrm{O}_2$ Is no longer reduced.

(b) **ATP production drops to zero** (no oxidative phosphorylation) and only the 2 ATP from
glycolysis Remain (and possibly 2 GTP from the Krebs cycle, though the Krebs cycle will also stop as
NAD$^+$ Runs out).

(c) **NADH concentration increases**. Without the ETC accepting electrons, NADH from glycolysis and
The Krebs cycle cannot be oxidised to $\mathrm{NAD}^+$. The $\mathrm{NADH/NAD}^+$ ratio increases
Dramatically.

(d) **The proton gradient increases to its maximum** and is maintained. The ETC has stopped, so no
More protons are pumped, but the existing gradient cannot dissipate through ATP synthase.

This is analogous to a car engine where the exhaust is blocked: fuel cannot be consumed, energy
Production ceases, and intermediates accumulate.

</details>

**Worked Example: Photorespiration Quantification**

At $35^\circ\mathrm{C}$ and atmospheric $\mathrm{CO}_2$ ($0.04\%$), Rubisco's relative specificity
For $\mathrm{CO}_2$ vs $\mathrm{O}_2$ is $80$ (i.e., Rubisco reacts with $\mathrm{CO}_2$ 80 Times
more readily than with $\mathrm{O}_2$Per molecule). The $\mathrm{O}_2$ concentration in The leaf is
$21\%$. Calculate the ratio of carboxylation to oxygenation reactions. If each Oxygenation reaction
wastes 2 ATP and 1 NADPH, calculate the energy wasted per 1000 Rubisco Reactions.

<details>
<summary>Solution</summary>

The ratio of carboxylation to oxygenation depends on the relative concentrations of $\mathrm{CO}_2$
And $\mathrm{O}_2$ at the Rubisco active site, weighted by Rubisco's relative specificity:

$\frac{V_{\mathrm{carboxylation}}}{V_{\mathrm{oxygenation}}} = \frac{[\mathrm{CO}_2]}{[\mathrm{O}_2]} \times \frac{S_{\mathrm{CO_2/O_2}}}{1} = \frac{0.04}{21} \times 80 = \frac{3.2}{21} \approx 0.152$

This means for every carboxylation reaction, there are approximately $1/0.152 \approx 6.6$
oxygenation Reactions. This is very high, explaining why photorespiration is severe at high
temperatures.

Per 1000 Rubisco reactions:

- Carboxylation reactions: $1000 \times \frac{0.152}{1.152} \approx 132$
- Oxygenation reactions: $1000 \times \frac{1}{1.152} \approx 868$

Energy wasted by photorespiration: $868 \times 2 = 1736$ ATP and $868 \times 1 = 868$ NADPH.

This demonstrates why $\mathrm{C_4}$ plants (which concentrate $\mathrm{CO}_2$) have a massive
Advantage in hot conditions: by raising the effective $[\mathrm{CO}_2]$ around Rubisco to
$\approx 10\times$ atmospheric, the carboxylation:oxygenation ratio improves dramatically.

</details>

---

## Common Pitfalls (Expanded)

- **Confusing competitive and non-competitive inhibition**: competitive = active site ($K_m$ up,
  $V_{\max}$ same); non-competitive = allosteric site ($V_{\max}$ down, $K_m$ same).
- **Stating photosynthesis produces energy**: photosynthesis stores light energy; cellular
  respiration releases it.
- **Confusing light-dependent and Calvin cycle**: the Calvin cycle is light-independent but requires
  ATP/NADPH from the light-dependent reactions.
- **Writing that $\mathrm{CO}_2$ is split**: $\mathrm{CO}_2$ is fixed (combined with RuBP); water is
  split (photolysis).
- **Confusing fermentation and anaerobic respiration**: fermentation = no ETC (substrate-level
  phosphorylation only); anaerobic respiration = ETC with alternative electron acceptor.
- **Overestimating ATP yield**: the actual yield ($\approx 30$--$32$ ATP) is less than the
  theoretical maximum ($36$--$38$) due to proton leak, the cost of transporting ATP/ADP across the
  mitochondrial membrane, and the shuttle system for cytoplasmic NADH.

---

## Exam-Style Problems

<details>
<summary>Problem 1: Data Analysis -- Enzyme Kinetics with Inhibitor</summary>

The following data show the initial velocity of an enzyme-catalysed reaction at different substrate
Concentrations, with and without an unknown inhibitor:

| $[S]$ (mM) | Velocity, no inhibitor | Velocity + 5 mM inhibitor |
| ---------- | ---------------------- | ------------------------- |
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

An aquatic plant is placed in a solution of $\mathrm{NaHCO}_3$ (providing dissolved
$\mathrm{CO}_2$). The rate of oxygen production is measured at different light intensities and
temperatures. (a) Predict and explain the effect of increasing temperature from $15^\circ\mathrm{C}$
to $35^\circ\mathrm{C}$ on the rate of photosynthesis at saturating light intensity. (b) Explain why
The rate decreases above $35^\circ\mathrm{C}$. (c) If the experiment is repeated with a
$\mathrm{C_4}$ Plant, predict how the temperature response would differ and explain why.

</details>

<details>
<summary>Problem 3: Quantitative -- Respiratory Quotient and Metabolic Substrate</summary>

A mouse consumes $1200\;\mathrm{mL}$ of $\mathrm{O}_2$ and produces $960\;\mathrm{mL}$ of
$\mathrm{CO}_2$ over 24 hours at STP. (a) Calculate the RQ. (b) Identify the most likely metabolic
Substrate(s). (c) Calculate the energy released, assuming the calorific value is
$20\;\mathrm{kJ/L\;O_2}$ For carbohydrate and $19\;\mathrm{kJ/L\;O_2}$ for fat. (d) Explain why the
RQ can change during Prolonged fasting.

</details>

<details>
<summary>Problem 4: Extended Response -- Uncouplers and Metabolic Rate</summary>

2,4-Dinitrophenol (DNP) was used as a weight-loss drug in the 1930s before being banned due to Fatal
hyperthermia. (a) Explain the mechanism by which DNP uncouples oxidative phosphorylation. (b)
Predict the effect of DNP on: (i) $\mathrm{O}_2$ consumption, (ii) ATP production, (iii) body
Temperature, (iv) blood glucose levels. (c) Explain why DNP causes rapid weight loss but is
Extremely dangerous.

</details>

<details>
<summary>Problem 5: Data Analysis -- Photosynthesis and Wavelength</summary>

The following data show the rate of photosynthesis of a green alga at different wavelengths of
light:

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
Chlorophyll b, and carotenoids. (c) Explain why the action spectrum has two peaks and why the Green
region ($500$--$600\;\mathrm{nm}$) has a low rate. (d) Explain why the action spectrum and
Absorption spectrum are similar but not identical.

</details>

---

## If You Get These Wrong, Revise:

- **Molecular biology -- protein structure** --> Review
  [.../2-molecular-biology/1_molecular-biology](../2-molecular-biology/1_molecular-biology)
- **Cell biology -- membrane transport** --> Review
  [.../1-cell-biology/1_cell-biology](../1-cell-biology/1_cell-biology)
- **Plant biology -- transpiration and transport** --> Review
  [.../7-plant-biology/1_plant-biology](../7-plant-biology/1_plant-biology)
- **Human physiology -- gas exchange** --> Review
  [.../6-human-physiology/1_human-physiology](../6-human-physiology/1_human-physiology)
- **Genetics -- enzyme genes** --> Review [.../3-genetics/1_genetics](../3-genetics/1_genetics)

---

## Additional Worked Examples

**Worked Example: Calculating ATP Yield from Palmitic Acid Oxidation**

Palmitic acid (16-carbon saturated fatty acid, C16:0) undergoes complete $\beta$-oxidation.
Calculate the Net ATP yield, assuming the malate-aspartate shuttle transfers NADH from glycolysis
into the mitochondria And using the updated P/O ratios
($\mathrm{NADH} = 2.5\;\mathrm{ATP}$$\mathrm{FADH}_2 = 1.5\;\mathrm{ATP}$).

<details>
<summary>Solution</summary>

Step 1: Activation of palmitic acid to palmitoyl-CoA.

- Requires 2 ATP equivalents (ATP $\to$ AMP + $\mathrm{PP_i}$Equivalent to 2 ATP hydrolysed).

Step 2: $\beta$-oxidation cycles.

- Palmitoyl-CoA (16C) undergoes $16/2 - 1 = 7$ cycles of $\beta$-oxidation.
- Each cycle produces: 1 $\mathrm{FADH}\_2$1 NADH, and 1 acetyl-CoA (2C).
- After 7 cycles: $7\;\mathrm{FADH}_2$$7\;\mathrm{NADH}$And $8$ acetyl-CoA.

Step 3: Oxidation of products through the ETC and Krebs cycle.

- $7\;\mathrm{FADH}_2 \times 1.5 = 10.5\;\mathrm{ATP}$
- $7\;\mathrm{NADH} \times 2.5 = 17.5\;\mathrm{ATP}$
- $8$ acetyl-CoA enter Krebs cycle: each produces
  $3\;\mathrm{NADH} + 1\;\mathrm{FADH}_2 + 1\;\mathrm{GTP}$:
  $8 \times (3 \times 2.5 + 1 \times 1.5 + 1) = 8 \times (7.5 + 1.5 + 1) = 8 \times 10 = 80\;\mathrm{ATP}$

Step 4: Net ATP yield. $\text{Total} = 10.5 + 17.5 + 80 - 2 = 106\;\mathrm{ATP}$

Using the traditional P/O ratios ($\mathrm{NADH} = 3$$\mathrm{FADH}_2 = 2$):
$7 \times 2 + 7 \times 3 + 8 \times 12 - 2 = 14 + 21 + 96 - 2 = 129\;\mathrm{ATP}$

</details>

**Worked Example: Respiratory Quotient and Substrate Utilisation**

A patient in a metabolic chamber consumes $280\;\mathrm{mL}$ of $\mathrm{O}_2$ per minute and
produces $252\;\mathrm{mL}$ of $\mathrm{CO}_2$ per minute. (a) Calculate the respiratory quotient
(RQ). (b) Identify the primary metabolic substrate being oxidised. (c) If the patient consumes
$400\;\mathrm{kcal}$ Per hour, calculate the energy equivalent per litre of $\mathrm{O}_2$ consumed.

<details>
<summary>Solution</summary>

(a)
$\mathrm{RQ} = \frac{\mathrm{CO}_2\text{ produced}}{\mathrm{O}_2\text{ consumed}} = \frac{252}{280} = 0.90$

(b) Interpretation of RQ values:

- $\mathrm{RQ} = 1.0$: pure carbohydrate (glucose:
  $\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6 + 6\mathrm{O}_2 \to 6\mathrm{CO}_2 + 6\mathrm{H}_2\mathrm{O}$)
- $\mathrm{RQ} = 0.7$: pure fat (e.g., palmitic acid:
  $\mathrm{C}_{16}\mathrm{H}_{32}\mathrm{O}_2 + 23\mathrm{O}_2 \to 16\mathrm{CO}_2 + 16\mathrm{H}_2\mathrm{O}$$\mathrm{RQ} = 16/23 = 0.696$)
- $\mathrm{RQ} = 0.8$: protein
- $\mathrm{RQ} = 0.9$: mixed substrate, approximately $50\%$ carbohydrate and $50\%$ fat.

The patient is oxidising a mix of carbohydrates and fats.

(c) $\mathrm{O}_2$ consumption per hour: $280 \times 60 = 16800\;\mathrm{mL} = 16.8\;\mathrm{L/h}$.
Energy per litre of $\mathrm{O}_2$: $\frac{400}{16.8} = 23.8\;\mathrm{kcal/L\;O}_2$.

This is close to the typical value for a mixed diet ($\approx 20.1$ for fat, $\approx 21.1$ for
protein, $\approx 5.0$ for carbohydrate per litre of $\mathrm{O}_2$ -- the weighted average is
approximately $20\text{--}22\;\mathrm{kcal/L\;O}_2$).

</details>

**Worked Example: Inhibitor Type Determination from Lineweaver-Burk Plot**

An enzyme has a $V_{max}$ of $120\;\mathrm{\mu mol/min}$ and a $K_m$ of $4.0\;\mathrm{mM}$. In the
Presence of an inhibitor, the apparent $V_{max}$ is $120\;\mathrm{\mu mol/min}$ and the apparent
$K_m$ Is $12.0\;\mathrm{mM}$. (a) Identify the type of inhibitor. (b) Calculate the inhibitor
constant $K_i$ If the inhibitor concentration is $2.0\;\mathrm{mM}$. (c) Sketch the expected
Lineweaver-Burk plot Showing both the uninhibited and inhibited reactions. (d) At a substrate
concentration of $4.0\;\mathrm{mM}$What fraction of the enzyme's maximum velocity is achieved in the
presence and Absence of the inhibitor?

<details>
<summary>Solution</summary>

(a) The inhibitor increases $K_m$ (from $4.0$ to $12.0\;\mathrm{mM}$) but does not change $V_{max}$.
This is characteristic of a **competitive inhibitor**.

(b) For competitive inhibition: $\alpha = \frac{K_m^{app}}{K_m} = \frac{12.0}{4.0} = 3$.
$\alpha = 1 + \frac{[I]}{K_i}$So $3 = 1 + \frac{2.0}{K_i}$Giving $K_i = 1.0\;\mathrm{mM}$.

(c) Lineweaver-Burk plot ($1/v$ vs $1/[S]$):

- Uninhibited: x-intercept $= -1/K_m = -0.25$Y-intercept $= 1/V_{max} = 0.00833$
- Inhibited: x-intercept $= -1/K_m^{app} = -0.0833$Y-intercept $= 1/V_{max} = 0.00833$ Both lines
  intersect on the y-axis (same $1/V_{max}$). The inhibited line has a steeper slope (slope
  $= K_m/V_{max}$ increases from $4/120$ to $12/120$).

(d) Without inhibitor: at
$[S] = K_m = 4.0\;\mathrm{mM}$$v = \frac{V_{max} \times [S]}{K_m + [S]} = \frac{120 \times 4}{4 + 4} = 60\;\mathrm{\mu mol/min}$.
Fraction $= 60/120 = 0.50$ ($50\%$).

With inhibitor:
$v = \frac{V_{max} \times [S]}{K_m^{app} + [S]} = \frac{120 \times 4}{12 + 4} = 30\;\mathrm{\mu mol/min}$.
Fraction $= 30/120 = 0.25$ ($25\%$).

The competitive inhibitor reduces the velocity to half at $[S] = K_m$.

</details>

**Worked Example: Photosynthetic Electron Transport and Chemiosmosis**

In an experiment, isolated chloroplasts are illuminated in the presence of DCMU (an inhibitor that
blocks Electron flow from PSII to plastoquinone). (a) Explain the effect of DCMU on non-cyclic
photophosphorylation. (b) Predict the effect on the production of: NADPH, ATP, and $\mathrm{O}_2$.
(c) Explain whether cyclic Photophosphorylation would still occur and what its products would be.

<details>
<summary>Solution</summary>

(a) DCMU (3-(3,4-dichlorophenyl)-1,1-dimethylurea) binds to the $\mathrm{Q_B}$ binding site on the
D1 protein of PSII, blocking the transfer of electrons from plastoquinone $\mathrm{Q_A}$ to
plastoquinone $\mathrm{Q_B}$. This stops electron flow from PSII through the entire non-cyclic
electron transport chain.

(b) Effects on non-cyclic photophosphorylation:

- **NADPH**: production stops. Electrons cannot reach PSI via the ETC, so PSI cannot reduce
  $\mathrm{NADP}^+$.
- **ATP**: production from non-cyclic photophosphorylation stops. The proton gradient across the
  thylakoid membrane is not established because electron flow through the cytochrome $b_6f$ complex
  (which pumps protons) is blocked.
- **$\mathrm{O}_2$**: production stops. $\mathrm{O}_2$ is produced by the photolysis of water at
  PSII, but DCMU blocks the downstream acceptor, so electrons from water cannot be passed on and the
  entire process stalls.

(c) Cyclic photophosphorylation involves only PSI (not PSII). Electrons from PSI are passed to
ferredoxin, Then to the cytochrome $b_6f$ complex (via ferredoxin-plastoquinone reductase, FQR), and
back to Plastocyanin (PC), which returns them to PSI. This creates a proton gradient without
producing NADPH or $\mathrm{O}_2$.

Since DCMU blocks PSII but not PSI, cyclic photophosphorylation **can still occur**. Products: ATP
only (no NADPH, no $\mathrm{O}_2$). This is why DCMU-treated chloroplasts can still produce some ATP
but no NADPH.

</details>

**Worked Example: Fermentation Rate and Ethanol Production**

Baker's yeast (_Saccharomyces cerevisiae_) is used to ferment glucose anaerobically in a bioreactor.
The fermentation equation is:
$$\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6 \to 2\;\mathrm{C}_2\mathrm{H}_5\mathrm{OH} + 2\;\mathrm{CO}_2$$

The bioreactor contains $100\;\mathrm{L}$ of $0.5\;\mathrm{mol/L}$ glucose solution. After $8$
hours, $15\;\mathrm{mol}$ of $\mathrm{CO}_2$ have been produced. (a) Calculate the percentage of
glucose consumed. (b) Calculate the volume of $\mathrm{CO}_2$ produced at $25^\circ\mathrm{C}$ and
$1\;\mathrm{atm}$ (ideal gas: $V = nRT/P$$R = 0.0821\;\mathrm{L\;atm/(mol\;K)}$). (c) Calculate the
mass of ethanol Produced. (d) Explain why fermentation eventually stops even if glucose remains.

<details>
<summary>Solution</summary>

(a) From the equation, $1\;\mathrm{mol}$ glucose produces $2\;\mathrm{mol}\;\mathrm{CO}_2$.
$15\;\mathrm{mol\;CO}_2$ corresponds to $15/2 = 7.5\;\mathrm{mol}$ glucose consumed. Total glucose
initially: $100 \times 0.5 = 50\;\mathrm{mol}$. Percentage consumed:
$\frac{7.5}{50} \times 100 = 15\%$.

(b) $T = 25 + 273 = 298\;\mathrm{K}$.
$V = \frac{nRT}{P} = \frac{15 \times 0.0821 \times 298}{1} = 366.9\;\mathrm{L\;CO}_2$.

(c) $1\;\mathrm{mol}$ glucose produces $2\;\mathrm{mol}$ ethanol. Ethanol produced:
$7.5 \times 2 = 15\;\mathrm{mol}$. Molar mass of ethanol ($\mathrm{C}_2\mathrm{H}_5\mathrm{OH}$)
$= 2(12) + 6(1) + 16 = 46\;\mathrm{g/mol}$. Mass: $15 \times 46 = 690\;\mathrm{g}$ ethanol.

(d) Fermentation eventually stops because:

- Ethanol is toxic to yeast at concentrations above approximately $12$--$15\%$ (v/v), denaturing
  enzymes and disrupting membrane integrity.
- The accumulation of waste products (ethanol, other metabolites) lowers the pH and creates
  unfavourable conditions.
- Nutrients other than glucose (nitrogen sources, vitamins, minerals) may become depleted.
- The declining pH and increasing ethanol concentration inhibit yeast enzyme activity, including the
  enzymes of glycolysis.

</details>

---

## Additional Common Pitfalls

- **Confusing substrate-level phosphorylation with oxidative phosphorylation**: substrate-level
  phosphorylation directly transfers a phosphate group from a substrate to ADP (occurs in glycolysis
  and Krebs cycle); oxidative phosphorylation uses the proton gradient and ATP synthase (ETC).
- **Stating that the Krebs cycle directly produces large amounts of ATP**: the Krebs cycle produces
  $1\;\mathrm{GTP}$ (equivalent to $1\;\mathrm{ATP}$) per turn. Most ATP comes from oxidative
  phosphorylation driven by NADH and $\mathrm{FADH}_2$ from the Krebs cycle.
- **Confusing the roles of PS I and PS II**: PS II comes first in the electron transport chain
  (P680), extracts electrons from water ($\mathrm{O}_2$ evolution), and passes them to the ETC; PS I
  (P700) receives electrons from the ETC and uses them to reduce $\mathrm{NADP}^+$.
- **Forgetting that glycolysis occurs in the cytoplasm, not the mitochondria**: only the link
  reaction, Krebs cycle, and oxidative phosphorylation occur in the mitochondria.
- **Confusing photorespiration with photosynthesis**: photorespiration is a wasteful process in
  which Rubisco binds $\mathrm{O}_2$ instead of $\mathrm{CO}_2$Consuming energy and releasing
  $\mathrm{CO}_2$ without producing sugar. It is favoured at high temperatures and low
  $\mathrm{CO}_2$ concentrations.
- **Assuming $V_{max}$ is always achievable**: $V_{max}$ is a theoretical maximum approached
  asymptotically; it is never truly reached because it would require infinite substrate
  concentration.

---

## Additional Exam-Style Problems with Full Solutions

<details>
<summary>Problem 6: Extended Response -- Control of Respiration</summary>

Describe how the rate of cellular respiration is controlled, explaining the roles of: (a) ATP/ADP
ratio, (b) feedback inhibition of phosphofructokinase (PFK), (c) availability of $\mathrm{NAD}^+$And
(d) oxygen availability. Explain how each mechanism ensures that ATP production matches cellular
demand.

</details>

<details>
<summary>Answer 6</summary>

(a) **ATP/ADP ratio as a cellular energy signal**: when ATP levels are high (energy charge is high),
The cell has sufficient energy and respiration slows. When ATP is consumed (e.g., during muscle
contraction), ADP and AMP levels rise. AMP is a particularly powerful allosteric activator of PFK. A
high ADP/ATP ratio Stimulates respiration by increasing the rate of oxidative phosphorylation (more
ADP available to accept Phosphate from ATP synthase), which in turn increases the rate of the ETC,
Krebs cycle, and glycolysis.

(b) **Phosphofructokinase (PFK) regulation**: PFK catalyses the committed step of glycolysis
(fructose-6-phosphate $\to$ fructose-1,6-bisphosphate) and is the major rate-limiting enzyme. It is
allosterically:

- **Activated by**: AMP, ADP, fructose-2,6-bisphosphate (F2,6BP, a potent activator in liver cells)
- **Inhibited by**: ATP, citrate (signals abundant energy and TCA intermediates respectively) High
  ATP inhibits PFK even though ATP is a substrate for the PFK reaction -- this is called **substrate
  Inhibition** and ensures glycolysis slows when energy is abundant. Citrate inhibition provides a
  link Between glycolysis and the Krebs cycle.

(c) **$\mathrm{NAD}^+$ availability**: $\mathrm{NAD}^+$ is required for glycolysis (step 6:
glyceraldehyde-3-phosphate Dehydrogenase) and for the Krebs cycle (three dehydrogenase reactions).
Under aerobic conditions, $\mathrm{NADH}$ is reoxidised to $\mathrm{NAD}^+$ by the ETC. Under
anaerobic conditions, $\mathrm{NAD}^+$ Is regenerated by fermentation (lactate dehydrogenase in
animals; alcohol dehydrogenase in yeast). If $\mathrm{NAD}^+$ is depleted, both glycolysis and the
Krebs cycle stop.

(d) **Oxygen availability**: oxygen is the terminal electron acceptor of the ETC. Without oxygen,
the ETC Stops, the proton gradient dissipates, ATP synthase ceases, and oxidative phosphorylation
halts. NADH And $\mathrm{FADH}_2$ accumulate, $\mathrm{NAD}^+$ is depleted, and the Krebs cycle
stops. The cell Switches to fermentation to regenerate $\mathrm{NAD}^+$ and maintain glycolysis.
This is why hypoxia Rapidly shifts metabolism from aerobic to anaerobic pathways.

</details>

<details>
<summary>Problem 7: Quantitative -- Photosynthetic Efficiency</summary>

A leaf with surface area $50\;\mathrm{cm}^2$ absorbs $200\;\mathrm{\mu mol}$ of photons per second
(PAR). The quantum yield of $\mathrm{CO}_2$ fixation is
$0.05\;\mathrm{mol\;CO}_2/\mathrm{mol\;photons}$. (a) Calculate the rate of $\mathrm{CO}_2$ fixation
in $\mathrm{\mu mol/s}$. (b) Calculate the rate Of glucose synthesis in $\mathrm{nmol/s}$. (c) The
leaf respires at a rate of $1.0\;\mathrm{\mu mol\;CO}_2/s$. Calculate the net $\mathrm{CO}_2$
fixation rate. (d) If the leaf is exposed to light for $10$ hours, Calculate the total mass of
glucose produced (net). Molar mass of glucose $= 180\;\mathrm{g/mol}$.

</details>

<details>
<summary>Answer 7</summary>

(a) Rate of $\mathrm{CO}_2$ fixation:
$200\;\mathrm{\mu mol\;photons/s} \times 0.05 = 10\;\mathrm{\mu mol\;CO}_2/s}$

(b) Glucose synthesis: $6\;\mathrm{CO}_2 \to 1$ glucose.
$10\;\mathrm{\mu mol\;CO}_2/s \div 6 = 1.667\;\mathrm{\mu mol\;glucose/s} = 1667\;\mathrm{nmol\;glucose/s}$

(c) Net $\mathrm{CO}_2$ fixation: $10 - 1.0 = 9.0\;\mathrm{\mu mol\;CO}_2/s}$ Net glucose:
$9.0 \div 6 = 1.5\;\mathrm{\mu mol\;glucose/s}$

(d) Total time: $10 \times 3600 = 36000\;\mathrm{s}$. Total net glucose:
$1.5 \times 36000 = 54000\;\mathrm{\mu mol} = 0.054\;\mathrm{mol}$. Mass:
$0.054 \times 180 = 9.72\;\mathrm{g}$ glucose.

</details>

<details>
<summary>Problem 8: Extended Response -- C4 and CAM Photosynthesis</summary>

Compare C3, C4, and CAM photosynthesis with respect to: (a) the initial carbon fixation product and
enzyme, (b) the spatial or temporal separation of $\mathrm{CO}_2$ fixation and the Calvin cycle, (c)
the Advantage under conditions of high temperature and water stress, and (d) the energetic cost
relative To C3 photosynthesis. Provide one example plant for each type.

</details>

<details>
<summary>Answer 8</summary>

(a) **C3**: initial fixation by Rubisco in mesophyll cells, producing 3-phosphoglycerate (3-PGA, a
3-carbon Compound). Example: wheat, rice, soybean.

**C4**: initial fixation by PEP carboxylase in mesophyll cells, producing oxaloacetate (4-carbon),
which Is converted to malate. Example: maize, sugarcane.

**CAM**: initial fixation by PEP carboxylase at night, producing malate stored in vacuoles. During
the Day, malate is decarboxylated and $\mathrm{CO}_2$ enters the Calvin cycle. Example: pineapple,
cactus, Jade plant.

(b) **C3**: no separation; fixation and Calvin cycle occur in mesophyll chloroplasts simultaneously.

**C4**: **spatial separation**. $\mathrm{CO}_2$ is initially fixed in mesophyll cells (by PEP
carboxylase), Then the 4-carbon acid (malate) is transported to bundle-sheath cells, where it
releases $\mathrm{CO}_2$ For the Calvin cycle (Rubisco). This concentrates $\mathrm{CO}_2$ around
Rubisco.

**CAM**: **temporal separation**. Stomata open at night; $\mathrm{CO}_2$ is fixed into malate and
stored In vacuoles. Stomata close during the day; malate is released from vacuoles, decarboxylated,
and the $\mathrm{CO}_2$ enters the Calvin cycle.

(c) **Advantage under heat and water stress**:

- In C3 plants, high temperatures increase photorespiration (Rubisco's affinity for $\mathrm{O}_2$
  increases relative to $\mathrm{CO}_2$), reducing photosynthetic efficiency.
- C4 plants concentrate $\mathrm{CO}_2$ in bundle-sheath cells (to $10$--$60\times$ atmospheric
  levels), effectively suppressing photorespiration. They also have higher water-use efficiency
  because PEP carboxylase has a much higher affinity for $\mathrm{CO}_2$ than Rubisco, allowing
  stomata to be partially closed.
- CAM plants minimise water loss by opening stomata only at night (when temperatures are lower and
  humidity is higher). They are extremely water-efficient but grow more slowly due to limited carbon
  storage capacity.

(d) **Energetic cost**:

- C3: $3\;\mathrm{ATP}$ and $2\;\mathrm{NADPH}$ per $\mathrm{CO}_2$ fixed ($18\;\mathrm{ATP}$ and
  $12\;\mathrm{NADPH}$ per glucose).
- C4: $5\;\mathrm{ATP}$ and $2\;\mathrm{NADPH}$ per $\mathrm{CO}_2$ fixed ($30\;\mathrm{ATP}$ and
  $12\;\mathrm{NADPH}$ per glucose). The extra $2\;\mathrm{ATP}$ per $\mathrm{CO}_2$ are needed to
  regenerate PEP (via pyruvate phosphate dikinase in mesophyll cells). C4 costs approximately $67\%$
  more energy than C3.
- CAM: similar total cost to C4 when all steps are considered, but distributed differently between
  day and night. The cost of transporting malate into and out of vacuoles adds to the energetic
  burden.

</details>

<details>
<summary>Problem 9: Data Analysis -- Oxygen Dissociation Curve Shift</summary>

The following data show the percentage saturation of haemoglobin at different $\mathrm{pO}_2$ values
Under normal conditions and in the presence of 2,3-BPG:

| $\mathrm{pO}_2$ (kPa) | Normal saturation (%) | + 2,3-BPG (%) |
| --------------------- | --------------------- | ------------- |
| 1.0                   | 5                     | 2             |
| 2.0                   | 15                    | 8             |
| 3.0                   | 30                    | 18            |
| 5.0                   | 60                    | 42            |
| 8.0                   | 85                    | 72            |
| 10.0                  | 92                    | 82            |
| 13.3                  | 97                    | 92            |

(a) Sketch both curves on the same axes. (b) At a $\mathrm{pO}_2$ of $5.0\;\mathrm{kPa}$ (typical Of
active muscle tissue), how much more $\mathrm{O}_2$ is unloaded in the presence of 2,3-BPG compared
To normal conditions? (c) Explain the molecular mechanism by which 2,3-BPG shifts the curve. (d)
Explain Why 2,3-BPG levels increase at high altitude and how this is beneficial.

</details>

<details>
<summary>Answer 9</summary>

(a) The + 2,3-BPG curve is shifted to the right (lower saturation at each $\mathrm{pO}_2$). Both
curves Are sigmoidal (S-shaped).

(b) At $5.0\;\mathrm{kPa}$:

- Normal saturation: $60\%$. If arterial saturation is $97\%$Then $97 - 60 = 37\%$ of $\mathrm{O}_2$
  is unloaded.
- - 2,3-BPG: $42\%$. $\mathrm{O}_2$ unloaded: $92 - 42 = 50\%$.
- Additional unloading: $50 - 37 = 13\%$ more $\mathrm{O}_2$ is unloaded in the presence of 2,3-BPG.

(c) 2,3-BPG (2,3-bisphosphoglycerate) is a highly negatively charged molecule that binds to the
central Cavity of deoxyhaemoglobin (the T state). It stabilises the T state, making it harder for
$\mathrm{O}_2$ To bind (lowering haemoglobin's affinity for $\mathrm{O}_2$). This shifts the oxygen
dissociation curve To the right, facilitating $\mathrm{O}_2$ unloading in tissues.

(d) At high altitude, $\mathrm{pO}_2$ is lower, so less $\mathrm{O}_2$ loads onto haemoglobin in the
Lungs. The body compensates by increasing 2,3-BPG production (via the Rapoport-Luebering shunt in
Glycolysis), which shifts the curve to the right. This reduces haemoglobin's affinity for
$\mathrm{O}_2$ So more $\mathrm{O}_2$ is unloaded in tissues, partially compensating for the reduced
loading. However, The shift also reduces loading in the lungs, so the net effect is a compromise.

</details>

<details>
<summary>Problem 10: Extended Response -- Uncouplers and Brown Fat</summary>

2,4-dinitrophenol (DNP) is a proton ionophore that makes the inner mitochondrial membrane permeable
to Protons. (a) Explain the effect of DNP on oxidative phosphorylation. (b) Predict what happens to
$\mathrm{O}_2$ consumption, $\mathrm{CO}_2$ production, and heat production in the presence of DNP.
(c) Explain the role of uncoupling protein 1 (UCP1, thermogenin) in brown adipose tissue (BAT) and
How it relates to DNP's mechanism. (d) Explain why DNP was used as a weight-loss drug in the 1930s
And why it is extremely dangerous.

</details>

<details>
<summary>Answer 10</summary>

(a) Normally, the proton gradient across the inner mitochondrial membrane drives ATP synthesis via
ATP Synthase (chemiosmotic coupling). DNP carries protons across the inner mitochondrial membrane,
bypassing ATP synthase. This **dissipates the proton gradient** (uncouples electron transport from
ATP synthesis). The ETC continues to operate (electrons still flow from NADH/$\mathrm{FADH}_2$ to
$\mathrm{O}_2$), but The energy released is not captured as ATP. Instead, it is released as heat.

(b) Effects of DNP:

- **$\mathrm{O}_2$ consumption**: increases dramatically. Without the proton gradient to slow the
  ETC (normally, a high gradient inhibits further proton pumping), electron transport proceeds at
  maximum rate.
- **$\mathrm{CO}_2$ production**: increases because the Krebs cycle accelerates to replenish NADH
  and $\mathrm{FADH}_2$ consumed by the hyperactive ETC.
- **ATP production**: decreases sharply (or stops). ATP synthase has no proton gradient to drive it.
- **Heat production**: increases enormously. All the energy from electron transport that would
  normally produce ATP is released as heat.

(c) Brown adipose tissue (BAT) contains numerous mitochondria with UCP1 (thermogenin) in their inner
Membrane. UCP1 is a physiological uncoupling protein that, when activated (by fatty acids released
from Triacylglycerol in response to cold or sympathetic stimulation), allows protons to leak back
into the Matrix, generating heat without producing ATP. This is **non-shivering thermogenesis**,
essential for Newborns (who have little white fat for insulation) and hibernating animals. BAT
uncoupling is regulated And controlled, unlike the non-specific uncoupling caused by DNP.

(d) DNP was used as a weight-loss drug because it increases metabolic rate (the body burns more fuel
to Maintain ATP levels, depleting fat and carbohydrate stores). However, it is extremely dangerous
because:

- The hyperthermia can be fatal (body temperature can exceed $41^\circ\mathrm{C}$Causing protein
  denaturation and brain damage).
- ATP depletion affects all energy-dependent processes (nerve conduction, muscle contraction, ion
  pumps), potentially causing coma and cardiac arrest.
- The dose-response curve is very steep; a small overdose can be lethal. There is no safe
  therapeutic window. DNP deaths continue to occur from illicit use as a weight-loss supplement.

</details>

---

## Cross-References to Related Topics

- **Enzyme structure and function**: Review
  [.../2-molecular-biology/1_molecular-biology](../2-molecular-biology/1_molecular-biology) for
  protein structure, active sites, and enzyme classification.
- **Membrane transport and proton gradients**: Review
  [.../1-cell-biology/1_cell-biology](../1-cell-biology/1_cell-biology) for membrane structure and
  transport proteins.
- **Plant transport and transpiration**: Review
  [.../7-plant-biology/1_plant-biology](../7-plant-biology/1_plant-biology) for stomatal regulation
  and transpiration efficiency.
- **Gas exchange and haemoglobin**: Review
  [.../6-human-physiology/1_human-physiology](../6-human-physiology/1_human-physiology) for
  respiratory physiology and oxygen transport.
- **ATP and cellular energy**: Review
  [.../1-cell-biology/1_cell-biology](../1-cell-biology/1_cell-biology) for mitochondria structure
  and ATP synthase.
- **Gene regulation of metabolic enzymes**: Review
  [..../3-genetics/2_genetics-advanced](../3-genetics/2_genetics-advanced) for operon regulation of
  metabolic pathways.

---

## Supplementary: Detailed Metabolic Pathways (HL Extension)

### Glycolysis -- Step-by-Step

Glycolysis occurs in the cytoplasm and converts 1 glucose ($\mathrm{C}_6$) to 2 pyruvate
($\mathrm{C}_3$), Producing a net gain of 2 ATP and 2 NADH. It consists of 10 steps:

**Investment phase** (consumes 2 ATP):

1. **Hexokinase**: glucose $\to$ glucose-6-phosphate (G6P). Consumes 1 ATP. Traps glucose inside the
   cell (G6P cannot cross the membrane). Hexokinase is inhibited by its product G6P.

2. **Phosphoglucose isomerase**: G6P $\to$ fructose-6-phosphate (F6P). Isomerisation (aldose to
   ketose).

3. **Phosphofructokinase-1 (PFK-1)**: F6P $\to$ fructose-1,6-bisphosphate (F1,6BP). Consumes 1 ATP.
   **This is the committed step and the main rate-limiting step of glycolysis.** PFK-1 is
   allosterically activated by AMP and F2,6BP; inhibited by ATP and citrate.

4. **Aldolase**: F1,6BP $\to$ glyceraldehyde-3-phosphate (G3P) + dihydroxyacetone phosphate (DHAP).

5. **Triose phosphate isomerase**: DHAP $\to$ G3P. Equilibrium favours DHAP, but G3P is continuously
   removed by the next step, pulling the reaction forward.

**Payoff phase** (produces 4 ATP, 2 NADH):

6. **Glyceraldehyde-3-phosphate dehydrogenase**: G3P + $\mathrm{NAD}^+$ + $\mathrm{P_i}$ $\to$
   1,3-bisphosphoglycerate (1,3BPG) + NADH. This step is the **oxidation** of glycolysis (aldehyde
   to carboxylic acid) and produces NADH.

7. **Phosphoglycerate kinase**: 1,3BPG + ADP $\to$ 3-phosphoglycerate (3PG) + ATP. **Substrate-level
   phosphorylation.** Since each glucose produces 2 G3P, this step produces 2 ATP (recovery of the 2
   ATP invested).

8. **Phosphoglycerate mutase**: 3PG $\to$ 2-phosphoglycerate (2PG).

9. **Enolase**: 2PG $\to$ phosphoenolpyruvate (PEP) + $\mathrm{H}_2\mathrm{O}$. Elimination of water
   creates a high-energy phosphate bond.

10. **Pyruvate kinase**: PEP + ADP $\to$ pyruvate + ATP. **Substrate-level phosphorylation.**
    Produces 2 ATP. Pyruvate kinase is activated by F1,6BP (feedforward activation).

**Net equation**:
$\mathrm{Glucose} + 2\mathrm{NAD}^+ + 2\mathrm{ADP} + 2\mathrm{P}_i \to 2\;\text{pyruvate} + 2\mathrm{NADH} + 2\mathrm{ATP} + 2\mathrm{H}_2\mathrm{O}$

### Fate of Pyruvate

**Aerobic conditions**: pyruvate enters the mitochondrial matrix via the pyruvate carrier. In the
matrix, Pyruvate dehydrogenase complex (PDC) converts pyruvate to acetyl-CoA:
$$\text{Pyruvate} + \mathrm{NAD}^+ + \mathrm{CoA} \to \text{acetyl-CoA} + \mathrm{NADH} + \mathrm{CO}_2$$

PDC is a multi-enzyme complex containing 3 enzymes and 5 cofactors (TPP, lipoamide, CoA, FAD,
$\mathrm{NAD}^+$). It produces 1 NADH per pyruvate (2 per glucose).

**Anaerobic conditions** (in animal cells): pyruvate is reduced to lactate by lactate dehydrogenase
(LDH): $$\text{Pyruvate} + \mathrm{NADH} + \mathrm{H}^+ \to \text{lactate} + \mathrm{NAD}^+$$

This regenerates $\mathrm{NAD}^+$Allowing glycolysis to continue. The lactate is transported to the
Liver (Cori cycle), where it is converted back to glucose (gluconeogenesis, costing 6 ATP per
lactate).

**Anaerobic conditions** (in yeast): pyruvate is decarboxylated to acetaldehyde (by pyruvate
decarboxylase) And then reduced to ethanol (by alcohol dehydrogenase):
$$\text{Pyruvate} \to \text{acetaldehyde} + \mathrm{CO}_2 \to \text{ethanol} + \mathrm{NAD}^+$$

### The Krebs Cycle (Citric Acid Cycle / TCA Cycle)

Location: mitochondrial matrix. One turn per acetyl-CoA (2 turns per glucose).

1. **Citrate synthase**: acetyl-CoA (2C) + oxaloacetate (4C) $\to$ citrate (6C). Thioester bond of
   acetyl-CoA provides energy.

2. **Aconitase**: citrate $\to$ isocitrate (via cis-aconitate intermediate). Isomerisation.

3. **Isocitrate dehydrogenase**: isocitrate + $\mathrm{NAD}^+$ $\to$ $\alpha$-ketoglutarate (5C) +
   $\mathrm{NADH} + \mathrm{CO}_2$. **Rate-limiting step of the Krebs cycle.** Activated by ADP,
   $\mathrm{Ca}^{2+}$; inhibited by ATP, NADH, succinyl-CoA.

4. **$\alpha$-Ketoglutarate dehydrogenase complex**: $\alpha$-ketoglutarate +
   $\mathrm{NAD}^+ + \mathrm{CoA}$ $\to$ succinyl-CoA (4C) + $\mathrm{NADH} + \mathrm{CO}_2$.
   Similar to PDC.

5. **Succinyl-CoA synthetase**: succinyl-CoA + GDP + $\mathrm{P}_i$ $\to$ succinate + GTP + CoA.
   **Substrate-level phosphorylation** (GTP $\approx$ ATP).

6. **Succinate dehydrogenase**: succinate + FAD $\to$ fumarate + $\mathrm{FADH}_2$. This enzyme is
   part of complex II of the electron transport chain (inner mitochondrial membrane).

7. **Fumarase**: fumarate + $\mathrm{H}_2\mathrm{O}$ $\to$ malate. Hydration.

8. **Malate dehydrogenase**: malate + $\mathrm{NAD}^+$ $\to$ oxaloacetate + $\mathrm{NADH}$.

**Per turn**: 3 NADH, 1 $\mathrm{FADH}_2$1 GTP, 2 $\mathrm{CO}_2$. **Per glucose**: 6 NADH, 2
$\mathrm{FADH}_2$2 GTP, 4 $\mathrm{CO}_2$.

### The Electron Transport Chain (ETC) and Oxidative Phosphorylation

Location: inner mitochondrial membrane. Four protein complexes and two mobile carriers:

**Complex I (NADH:ubiquinone oxidoreductase)**: accepts electrons from NADH, passes them to
ubiquinone (coenzyme Q). Pumps 4 $\mathrm{H}^+$ from matrix to intermembrane space.

**Complex II (succinate dehydrogenase)**: accepts electrons from $\mathrm{FADH}_2$ (from the Krebs
cycle And fatty acid oxidation), passes them to ubiquinone. Does NOT pump protons.

**Ubiquinone (CoQ)**: a mobile lipid-soluble carrier that shuttles electrons from Complex I and II
To Complex III.

**Complex III (cytochrome $bc_1$ complex)**: accepts electrons from ubiquinone, passes them to
Cytochrome c. Pumps 4 $\mathrm{H}^+$ (Q cycle).

**Cytochrome c**: a small mobile protein that carries electrons from Complex III to Complex IV.

**Complex IV (cytochrome c oxidase)**: accepts electrons from cytochrome c, passes them to
$\mathrm{O}_2$ (the terminal electron acceptor), producing $\mathrm{H}_2\mathrm{O}$. Pumps 2
$\mathrm{H}^+$.

**Total proton pumping**: NADH donates electrons to Complex I (4 $\mathrm{H}^+$) $\to$ III (4
$\mathrm{H}^+$) $\to$ IV (2 $\mathrm{H}^+$) = 10 $\mathrm{H}^+$ per NADH. $\mathrm{FADH}_2$ donates
to Complex II (0 $\mathrm{H}^+$) $\to$ III (4 $\mathrm{H}^+$) $\to$ IV (2 $\mathrm{H}^+$) = 6
$\mathrm{H}^+$ per $\mathrm{FADH}_2$.

**ATP synthase (Complex V)**: uses the proton gradient ($\Delta\mathrm{pH} + \Delta\Psi$The
protonmotive Force) to drive ATP synthesis. Approximately 4 $\mathrm{H}^+$ are needed per ATP (3 for
ATP synthesis

- 1 for transport of $\mathrm{P}_i$ and ADP).

**ATP yield (modern P/O ratios)**:

- NADH: $10/4 = 2.5\;\mathrm{ATP}$
- $\mathrm{FADH}_2$: $6/4 = 1.5\;\mathrm{ATP}$

**Total ATP per glucose** (aerobic):

- Glycolysis: 2 ATP (net) + 2 NADH (2 $\times$ 2.5 = 5 ATP, but 2 ATP used for transport = 3 ATP
  with malate-aspartate shuttle; 1.5 ATP with glycerol-3-phosphate shuttle)
- Pyruvate dehydrogenase: 2 NADH ($2 \times 2.5 = 5$ ATP)
- Krebs cycle: 6 NADH ($6 \times 2.5 = 15$ ATP) + 2 $\mathrm{FADH}_2$ ($2 \times 1.5 = 3$ ATP)

* 2 GTP

- **Total**: $2 + 3 + 5 + 15 + 3 + 2 = 30$ ATP (with malate-aspartate shuttle).

### Worked Example: Complete ATP Accounting

A student runs a $100\;\mathrm{m}$ sprint (anaerobic, $10$ seconds). (a) How many ATP molecules are
Available from phosphocreatine and anaerobic glycolysis? (b) The student then jogs for $30$ minutes
(aerobic). How many ATP molecules are produced from the complete oxidation of $5$ molecules of
glucose? (c) Explain why the sprinter experiences muscle fatigue after the race.

<details>
<summary>Solution</summary>

(a) **Sprint (anaerobic)**:

- Phosphocreatine: approximately $3$--$5$ ATP equivalents per second of maximal effort. Over $10$
  seconds: approximately $30$--$50$ ATP per myosin head. Total cellular ATP from PCr: approximately
  $5 \times 10^{18}$ ATP per muscle fibre (rough estimate).
- Anaerobic glycolysis: $2\;\mathrm{ATP}$ per glucose. Muscle glycogen stores provide
  glucose-6-phosphate directly (bypassing hexokinase, saving 1 ATP per glucose, so effectively
  $3\;\mathrm{ATP}$ per glucose). Glycolytic rate during maximal sprint: approximately
  $1\;\mathrm{mol}$ ATP per kg muscle per minute.

(b) **Jogging (aerobic, 30 min = 1800 s)**: 5 glucose molecules
$\times 30\;\mathrm{ATP/glucose} = 150\;\mathrm{ATP}$. In moles: $150\;\mathrm{mol}$ ATP. In
molecules: $150 \times 6.022 \times 10^{23} = 9.03 \times 10^{25}$ ATP molecules.

(c) **Muscle fatigue** after sprinting:

- Phosphocreatine stores are depleted within $10$--$15$ seconds.
- Anaerobic glycolysis produces lactate, which dissociates to lactate $+$ $\mathrm{H}^+$Lowering
  intracellular pH (acidosis). Low pH inhibits key glycolytic enzymes (especially PFK-1) and
  interferes with calcium release from the SR, reducing contractile force.
- ADP and $\mathrm{P}_i$ accumulate, reducing the free energy of ATP hydrolysis.
- Potassium ions accumulate in the T-tubules, reducing excitability.

</details>

## Summary

This topic covers the biological principles of metabolism and cell biology, including key concepts,
experimental evidence, and real-world applications.

**Key concepts include:**

- cell structure (prokaryotic vs eukaryotic)
- cell ultrastructure (organelles)
- microscopy and resolution
- cell division (mitosis and meiosis)
- the cell cycle

Success requires the ability to recall specific factual content, apply knowledge to novel scenarios,
and evaluate experimental evidence critically.
