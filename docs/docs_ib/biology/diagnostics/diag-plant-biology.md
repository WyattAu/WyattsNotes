---
title: Plant Biology -- Diagnostic Tests
description: "Diagnostic tests for IB Biology plant biology: photosynthesis, transpiration, mineral transport, reproduction, and growth regulators."
slug: diag-plant-biology
hide_table_of_contents: true
---

# Plant Biology — Diagnostic Tests

## Unit Tests

### UT-1: Photosynthesis Light-Dependent Reactions
**Question:** In the light-dependent reactions, photosystem II (PSII) absorbs light at $680\ \text{nm}$ and photosystem I (PSI) at $700\ \text{nm}$. Calculate the energy of one photon at each wavelength. If non-cyclic photophosphorylation produces approximately 3 ATP and 2 NADPH per pair of electrons, calculate the theoretical energy capture efficiency, given that the hydrolysis of one ATP yields approximately $30.5\ \text{kJ mol}^{-1}$ and the reduction of $\text{NADP}^+$ to NADPH has $\Delta G \approx 220\ \text{kJ mol}^{-1}$.

**Solution:**

$E = \frac{hc}{\lambda}$, where $h = 6.626 \times 10^{-34}\ \text{J s}$, $c = 2.998 \times 10^8\ \text{m s}^{-1}$.

PSII ($680\ \text{nm}$): $E = \frac{(6.626 \times 10^{-34})(2.998 \times 10^8)}{680 \times 10^{-9}} = 2.92 \times 10^{-19}\ \text{J}$ per photon.

Per mole: $E = 2.92 \times 10^{-19} \times 6.022 \times 10^{23} = 176\ \text{kJ mol}^{-1}$.

PSI ($700\ \text{nm}$): $E = \frac{(6.626 \times 10^{-34})(2.998 \times 10^8)}{700 \times 10^{-9}} = 2.84 \times 10^{-19}\ \text{J}$ per photon.

Per mole: $E = 2.84 \times 10^{-19} \times 6.022 \times 10^{23} = 171\ \text{kJ mol}^{-1}$.

Energy captured per pair of electrons: $3 \times 30.5 + 2 \times 220 = 91.5 + 440 = 531.5\ \text{kJ mol}^{-1}$.

Total energy absorbed (2 photons from PSII + 2 from PSI): $2 \times 176 + 2 \times 171 = 352 + 342 = 694\ \text{kJ mol}^{-1}$.

Efficiency: $\frac{531.5}{694} \times 100 = 76.6\%$.

This is the theoretical maximum efficiency of the light-dependent reactions. In practice, overall photosynthetic efficiency (including the Calvin cycle) is much lower, typically 3--6% of incident solar energy.

---
### UT-2: Transpiration and Water Potential
**Question:** A leaf has a stomatal pore of dimensions $10\ \mu\text{m} \times 40\ \mu\text{m}$. The leaf has 200 stomata per $\text{mm}^2$ on the lower surface only. The water vapour concentration inside the leaf is $23\ \text{g m}^{-3}$ and outside is $10\ \text{g m}^{-3}$. The diffusion coefficient of water vapour in air is $2.4 \times 10^{-5}\ \text{m}^2\text{s}^{-1}$, and the boundary layer thickness is $1\ \text{mm}$. Estimate the transpiration rate from $1\ \text{cm}^2$ of leaf surface in $\text{mg hr}^{-1}$.

**Solution:**

Stomatal pore area: $10 \times 40 = 400\ \mu\text{m}^2 = 400 \times 10^{-12}\ \text{m}^2$ per stoma.

Total stomatal area per $\text{mm}^2$: $200 \times 400 \times 10^{-12} = 8 \times 10^{-8}\ \text{m}^2\text{ mm}^{-2}$.

Per $\text{cm}^2$ ($= 100\ \text{mm}^2$): total pore area $= 100 \times 8 \times 10^{-8} = 8 \times 10^{-6}\ \text{m}^2$.

Using Fick's law: $J = D \times A \times \frac{\Delta c}{\Delta x}$

$J = (2.4 \times 10^{-5}) \times (8 \times 10^{-6}) \times \frac{23 - 10}{0.001}$

$J = 2.4 \times 10^{-5} \times 8 \times 10^{-6} \times 13000 = 2.50 \times 10^{-6}\ \text{g s}^{-1}$

Per hour: $2.50 \times 10^{-6} \times 3600 = 8.98 \times 10^{-3}\ \text{g hr}^{-1} = 8.98\ \text{mg hr}^{-1}$

This is a simplified estimate. In reality, the actual transpiration rate depends on wind speed (boundary layer thickness), temperature, relative humidity, and the fact that the diffusion path through the stomatal pore is longer than the boundary layer (the stomatal pore has a depth of about $10\ \mu\text{m}$).

---
### UT-3: Mineral Ion Transport
**Question:** Explain the mechanism of active transport of nitrate ions ($\text{NO}_3^-$) from the soil into root hair cells. Include the roles of: (a) proton pumps, (b) the electrochemical gradient, and (c) carrier proteins. Why can plants accumulate nitrate to concentrations 10000 times higher than in the soil solution?

**Solution:**

(a) **Proton pumps ($\text{H}^+$-ATPase):** Located on the plasma membrane of root hair cells, these pumps use ATP to actively transport $\text{H}^+$ ions out of the cell into the soil solution. This has two effects: (1) it creates a proton gradient ($\text{H}^+$ concentration much higher outside), and (2) it creates an electrical gradient (inside becomes more negative relative to outside).

(b) **Electrochemical gradient:** The combined proton gradient and electrical gradient create an electrochemical potential that can be used to drive the secondary (co-)transport of other ions. For $\text{NO}_3^-$ uptake, the inside-negative membrane potential provides the driving force.

(c) **Carrier proteins:** $\text{NO}_3^-$ is transported via specific carrier proteins (transporters). Two main mechanisms:
- $\text{NO}_3^-/\text{H}^+$ symport: $\text{NO}_3^-$ enters the cell coupled with $\text{H}^+$ moving down its concentration gradient (back into the cell). The energy stored in the proton gradient (established by the ATPase) drives $\text{NO}_3^-$ uptake against its concentration gradient.
- Direct $\text{NO}_3^-$ channel: At very low external concentrations, high-affinity transporters (NRT2 family) use the membrane potential (inside-negative) to attract $\text{NO}_3^-$ into the cell.

Plants can accumulate nitrate to 10000x soil concentration because:
1. The proton pump continuously expends ATP to maintain the proton gradient and membrane potential, providing a constant energy source.
2. The vacuole acts as a storage compartment, maintaining low cytoplasmic concentration (reducing back-pressure).
3. Once inside, nitrate is rapidly assimilated into amino acids (via nitrate reductase and nitrite reductase), preventing toxic accumulation and maintaining the concentration gradient for continued uptake.
4. The Casparian strip in the endodermis prevents backflow of ions from the stele to the cortex.

## Integration Tests

### IT-1: Photosynthesis and Mineral Nutrition (with Ecology)
**Question:** A farmer applies ammonium nitrate fertiliser ($\text{NH}_4\text{NO}_3$) to a field. Trace the nitrogen atoms from the fertiliser through the plant, explaining: (a) how ammonium is assimilated, (b) how nitrate is assimilated (including the enzymes and energy requirements), and (c) how the resulting amino acids are incorporated into proteins. If the fertiliser provides $50\ \text{kg ha}^{-1}$ of nitrogen and the crop has a nitrogen use efficiency of 60%, calculate the mass of protein that can be synthesised, assuming proteins average 16% nitrogen by mass.

**Solution:**

(a) **Ammonium assimilation:** $\text{NH}_4^+$ is taken up by root cells and can be directly incorporated into amino acids via the glutamine synthetase/glutamate synthase (GS/GOGAT) pathway:
- GS: $\text{NH}_4^+ + \text{glutamate} + \text{ATP} \to \text{glutamine} + \text{ADP} + \text{P}_i$
- GOGAT: $\text{glutamine} + \alpha\text{-ketoglutarate} + \text{NAD(P)H} \to 2\text{glutamate}$

(b) **Nitrate assimilation:** $\text{NO}_3^-$ must first be reduced to $\text{NH}_4^+$ before incorporation:
- Nitrate reductase (NR, in cytoplasm): $\text{NO}_3^- + \text{NAD(P)H} + \text{H}^+ \to \text{NO}_2^- + \text{NAD(P)}^+ + \text{H}_2\text{O}$. Uses 2 electrons.
- Nitrite reductase (NiR, in chloroplasts): $\text{NO}_2^- + 6\text{Fd}_{\text{red}} + 8\text{H}^+ \to \text{NH}_4^+ + 6\text{Fd}_{\text{ox}} + 2\text{H}_2\text{O}$. Uses 6 electrons.

Total: 8 electrons and 8 $\text{H}^+$ to reduce one $\text{NO}_3^-$ to $\text{NH}_4^+$. The $\text{NH}_4^+$ then enters the GS/GOGAT pathway. This is energetically expensive, consuming approximately 15 ATP equivalents per $\text{NO}_3^-$ reduced and assimilated.

(c) **Protein synthesis:** The amino acids (glutamate and others derived from transamination reactions) are linked by peptide bonds during translation on ribosomes, using mRNA as the template.

**Calculation:**

Nitrogen taken up by crop: $50 \times 0.60 = 30\ \text{kg ha}^{-1}$.

Mass of protein: $\frac{30}{0.16} = 187.5\ \text{kg ha}^{-1}$.

The remaining 40% of applied nitrogen ($20\ \text{kg ha}^{-1}$) is lost through runoff, leaching, volatilisation, or denitrification, contributing to environmental problems such as eutrophication and greenhouse gas emissions.

---
### IT-2: Plant Hormones and Growth (with Molecular Biology)
**Question:** Explain how auxin (IAA) causes cell elongation in shoots using the acid growth hypothesis. Include: (a) how auxin is transported polarly, (b) the role of proton pumps, (c) the role of expansins, and (d) why auxin inhibits root elongation at higher concentrations while promoting shoot elongation. Explain the molecular basis of auxin signal transduction.

**Solution:**

(a) **Polar auxin transport:** Auxin is transported cell-to-cell in one direction (basipetally, from shoot tip toward base) via PIN-FORMED (PIN) efflux carriers. These membrane proteins are localised asymmetrically -- on the basal side of cells in shoots. Auxin enters cells passively (as IAAH, the protonated form) through the apoplast or via AUX1/LAX influx carriers, and exits through PIN proteins on the basal membrane. This creates a directional auxin flux.

(b) **Acid growth hypothesis:**
1. Auxin binds to the TIR1/AFB receptor (an F-box protein in the SCF ubiquitin ligase complex) in the nucleus.
2. The auxin-TIR1 complex promotes the ubiquitination and proteasomal degradation of Aux/IAA repressor proteins.
3. This releases ARF (Auxin Response Factor) transcription factors, which activate gene expression.
4. Target genes include those encoding plasma membrane $\text{H}^+$-ATPase proton pumps.
5. The proton pumps are activated, secreting $\text{H}^+$ into the cell wall, lowering wall pH from $\sim 6.5$ to $\sim 5.0$.

(c) **Expansins:** The lower pH activates wall-loosening enzymes called expansins, which break hydrogen bonds between cellulose microfibrils and hemicellulose in the cell wall. This loosens the wall, reducing its resistance to turgor-driven expansion. Water enters the cell by osmosis, and the turgor pressure causes the cell to elongate.

(d) **Differential effect on shoots vs roots:** At lower concentrations (approximately $10^{-10}$ to $10^{-8}\ \text{M}$), auxin promotes root elongation. At higher concentrations ($\gt 10^{-6}\ \text{M}$), auxin inhibits root elongation because: (1) high auxin stimulates ethylene production in roots, and ethylene inhibits root cell elongation; (2) high auxin may activate different gene sets in roots compared to shoots; (3) the calcium signalling pathway in roots is more sensitive to auxin, triggering callose deposition that stiffens the cell wall. This concentration-dependent differential sensitivity is the basis for gravitropism: auxin accumulates on the lower side of a horizontal root, where the higher concentration inhibits elongation, causing the root to bend downward.

**Signal transduction summary:** Auxin $\to$ TIR1 receptor $\to$ degradation of Aux/IAA repressors $\to$ activation of ARF transcription factors $\to$ gene expression (proton pumps, expansins) $\to$ cell wall acidification $\to$ wall loosening $\to$ cell elongation.

---
### IT-3: Reproduction and Genetics (with Genetics)
**Question:** A self-pollinating pea plant heterozygous for flower colour (Rr, where R = red, dominant, r = white, recessive) produces F1 offspring. Calculate the expected genotype and phenotype ratios in the F2 generation if two F1 plants are crossed. If a mutation rate of $10^{-6}$ per generation causes some white-flowered F2 plants to have the genotype RR, what proportion of red-flowered F2 plants would be expected to have the genotype Rr vs RR?

**Solution:**

Parent: Rr (self-pollinating)

F1: $\frac{1}{4}$ RR : $\frac{1}{2}$ Rr : $\frac{1}{4}$ rr

Phenotype: $\frac{3}{4}$ red : $\frac{1}{4}$ white

Crossing two F1 plants (Rr $\times$ Rr):

F2 Punnett square:

| | R | r |
|---|---|---|
| R | RR (1/4) | Rr (1/4) |
| r | Rr (1/4) | rr (1/4) |

F2 genotype ratio: 1 RR : 2 Rr : 1 rr
F2 phenotype ratio: 3 red : 1 white

Without mutation, among red-flowered plants: $\frac{1}{3}$ are RR and $\frac{2}{3}$ are Rr.

With mutation at rate $\mu = 10^{-6}$:
- Some rr plants could mutate to Rr (reverse mutation), making them red
- Some RR plants could mutate to Rr, or some Rr could mutate to rr

The question specifies that some white-flowered (rr) F2 plants have genotype RR due to mutation. This means a dominant mutation at the r allele site converts r to R. The proportion of rr plants that become RR: each r allele has probability $\mu = 10^{-6}$ of mutating to R. An rr individual has two r alleles, so probability of becoming RR (both alleles mutating) $= \mu^2 = 10^{-12}$ -- negligibly small.

More realistically, if the mutation converts one r allele to R: rr $\to$ Rr (heterozygous), making the plant red. Probability $= 2\mu(1-\mu) \approx 2 \times 10^{-6}$.

In a large F2 population with $N$ rr plants, approximately $2 \times 10^{-6} \times N$ would become red due to mutation.

Among all red-flowered F2 plants:
- True genetic: $\frac{1}{4}$ RR + $\frac{1}{2}$ Rr = $\frac{3}{4}$ of total
- Mutation-converted: approximately $2 \times 10^{-6} \times \frac{1}{4}$ of total (from rr $\to$ Rr)

The effect of mutation at $10^{-6}$ is negligible compared to the normal Mendelian ratios. The expected proportion of Rr vs RR among red-flowered plants remains approximately $\frac{2}{3}$ Rr : $\frac{1}{3}$ RR.
