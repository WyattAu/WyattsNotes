---
title: Advanced Genetics
description:
  "A-Level Biology notes on Advanced Genetics: epistasis, linkage, chi-squared test, sex linkage, Hardy-Weinberg extended, genetic drift, selection, speciation, phylogenetics."
date: 2026-04-18T00:00:00.000Z
tags:
  - Biology
  - ALevel
categories:
  - Biology
slug: genetics-advanced
sidebar_position: 11
---

## Advanced Genetics

:::info
Board Coverage AQA Paper 2 | Edexcel A Paper 2 | OCR (A) Paper 2 | CIE Paper 4
:::

## 1. Epistasis

### 1.1 Definition

**Epistasis** occurs when the expression of one gene (the epistatic gene) is affected or masked by one or more independently inherited genes at different loci. This violates Mendel's law of independent assortment at the phenotypic level, producing phenotypic ratios that differ from the expected 9:3:3:1.

### 1.2 Types of Epistasis

**Recessive epistasis (9:3:4 ratio):** the homozygous recessive genotype at one locus masks the expression of the gene at the other locus regardless of its genotype.

**Worked Example: Coat colour in Labrador retrievers.**

Gene $B$ determines pigment colour: $BB$ or $Bb$ = black; $bb$ = brown.
Gene $E$ determines pigment deposition: $EE$ or $Ee$ = pigment deposited; $ee$ = no pigment deposited (golden coat).

Cross: $BbEe \times BbEe$

| Genotype    | Phenotype | Count | Combined  |
| ----------- | --------- | ----- | --------- |
| $B\_E\_$    | Black     | 9     | 9 black   |
| $bbE\_$     | Brown     | 3     | 3 brown   |
| $B\_ee$     | Golden    | 3     | 4 golden  |
| $bbee$      | Golden    | 1     |           |

The homozygous recessive $ee$ masks the $B/b$ locus, so both $B\_ee$ and $bbee$ are golden. Ratio: **9:3:4**.

**Dominant epistasis (12:3:1 ratio):** the dominant allele at one locus masks the expression of the gene at the other locus.

**Worked Example: Fruit colour in summer squash.**

Gene $W$: $W\_$ = white (dominant epistatic); $ww$ = allows colour expression.
Gene $Y$: $Y\_$ = yellow; $yy$ = green.

Cross: $WwYy \times WwYy$

| Genotype    | Phenotype | Count | Combined    |
| ----------- | --------- | ----- | ----------- |
| $W\_Y\_$    | White     | 9     | 12 white    |
| $W\_yy$     | White     | 3     |             |
| $wwY\_$     | Yellow    | 3     | 3 yellow    |
| $wwyy$      | Green     | 1     | 1 green     |

The dominant allele $W$ masks the $Y/y$ locus. Ratio: **12:3:1**.

**Duplicate recessive epistasis (9:7 ratio):** both genes must have at least one dominant allele for the trait to be expressed. The homozygous recessive condition at either locus masks the other.

**Worked Example: Flower colour in sweet peas.**

Gene $C$ and gene $P$ are both required for purple flowers. $cc\_$ or $\_pp$ = white.

Cross: $CcPp \times CcPp$

| Genotype        | Phenotype | Count |
| --------------- | --------- | ----- |
| $C\_P\_$        | Purple    | 9     |
| $ccP\_$ or $C\_pp$ or $ccpp$ | White | 7     |

Ratio: **9:7**.

### 1.3 Summary of Epistatic Ratios

| Ratio  | Type of Epistasis          | Pattern                                                                 |
| ------ | --------------------------- | ----------------------------------------------------------------------- |
| 9:3:4  | Recessive epistasis         | Homozygous recessive at epistatic locus masks hypostatic locus          |
| 12:3:1 | Dominant epistasis          | Dominant allele at epistatic locus masks hypostatic locus               |
| 9:7    | Duplicate recessive epistasis | Homozygous recessive at either locus masks the other                  |
| 9:6:1  | Duplicate gene interaction  | Both dominant alleles needed for enhanced phenotype                      |
| 15:1   | Duplicate dominant epistasis | Dominant allele at either locus sufficient for trait expression         |
| 13:3   | Inhibitory gene interaction | One dominant allele inhibits the expression of the other gene          |

:::warning
Common Pitfall Students often confuse epistasis with dominance. Dominance is an interaction between **alleles at the same locus** (one allele masks another at the same gene). Epistasis is an interaction between **genes at different loci** (one gene masks or modifies another gene). They are fundamentally different genetic phenomena.
:::

## 2. Genetic Linkage and Crossing Over

### 2.1 Linkage

When two genes are located on the **same chromosome**, they tend to be inherited together rather than assorting independently. The closer the genes are on the chromosome, the less likely they are to be separated by crossing over during meiosis.

**Key principles:**

- Linked genes produce an excess of **parental (non-recombinant)** phenotypes and a deficit of **recombinant** phenotypes compared to the 1:1:1:1 ratio expected for unlinked genes in a test cross.
- The maximum recombination frequency observable is 50%, which is indistinguishable from independent assortment (unlinked genes). Recombination frequencies above 50% are not observed because multiple cross-overs between two loci can cancel out.
- Genes very close together on the same chromosome (< 5 cM apart) are **tightly linked** and show very low recombination frequencies.
- Genes on different chromosomes, or very far apart on the same chromosome (> 50 cM), assort independently.

### 2.2 Recombination Frequency and Map Distance

The recombination frequency (RF) between two linked genes is calculated from a test cross:

$$\mathrm{RF} = \frac{\text{Number of recombinant offspring}}{\text{Total number of offspring}} \times 100\%$$

The recombination frequency is approximately equal to the **map distance** between the genes in **centiMorgans (cM)**. One centiMorgan corresponds to a 1% probability of crossing over between the two loci per meiosis.

**Worked Example: Three-point mapping.** Three linked genes are: $A$-$B$-$D$ (in this order on the chromosome). A test cross $ABD/abd \times abd/abd$ gives:

| Phenotype | Number |
| --------- | ------ |
| $ABD$     | 380    |
| $abd$     | 370    |
| $Abd$     | 25     |
| $aBD$     | 20     |
| $ABd$     | 80     |
| $abD$     | 85     |
| $AbD$     | 15     |
| $aBd$     | 25     |

Total = 1000. Parental phenotypes: $ABD$ (380) + $abd$ (370) = 750.
Recombinant phenotypes: 250.

**Distance A--B:** Recombinants between A and B = $Abd + aBD + ABd + abD = 25 + 20 + 80 + 85 = 210$. Distance = $210/1000 \times 100 = 21\ \mathrm{cM}$.

**Distance B--D:** Recombinants between B and D = $AbD + aBd + ABd + abD = 15 + 25 + 80 + 85 = 205$. Distance = $205/1000 \times 100 = 20.5\ \mathrm{cM}$.

**Distance A--D:** Recombinants between A and D = all non-parental = $25 + 20 + 80 + 85 + 15 + 25 = 250$. Distance = $250/1000 \times 100 = 25\ \mathrm{cM}$.

**Double cross-overs:** The rarest recombinant classes are the double cross-over products ($AbD$ and $aBd$, total 40). The map distance A--D calculated directly (25 cM) is less than A--B + B--D (41.5 cM) because double cross-overs between A and D are counted as non-recombinant for the A--D comparison but are recombinant for both A--B and B--D. The corrected A--D distance = A--B + B--D + 2 $\times$ (double cross-over frequency) = $21 + 20.5 + 2 \times 4 = 49.5\ \mathrm{cM}$, but this exceeds 50 cM, indicating multiple cross-overs.

### 2.3 Sex Linkage with Linkage

When a gene is on the X chromosome, males are hemizygous (they have only one copy). This affects the expected ratios in crosses.

**Worked Example.** A male with haemophilia (X-linked recessive, $X^hY$) has a daughter who is a carrier ($X^HX^h$). She marries a normal male ($X^HY$).

$$X^HX^h \times X^HY$$

|       | $X^H$            | $Y$             |
| ----- | ---------------- | --------------- |
| $X^H$ | $X^HX^H$ (normal) | $X^HY$ (normal) |
| $X^h$ | $X^HX^h$ (carrier) | $X^hY$ (haemophilic) |

Expected ratio: 1 normal female : 1 carrier female : 1 normal male : 1 affected male.

## 3. Chi-Squared Test: Advanced Applications

### 3.1 Choosing Degrees of Freedom

For a cross with $n$ phenotypic classes, the degrees of freedom are $\mathrm{df} = n - 1$. However, when expected ratios are calculated from the observed data (e.g., when estimating allele frequencies for Hardy-Weinberg), an additional degree of freedom is lost for each parameter estimated.

For a two-allele H-W test where both allele frequencies are estimated from the data: $\mathrm{df} = 3 - 1 - 1 = 1$.

### 3.2 Worked Example: Testing for Linkage

A dihybrid cross $AaBb \times AaBb$ (with genes $A$ and $B$ on the same chromosome) produces 200 offspring:

| Phenotype | Observed | Expected (9:3:3:1) | $(O-E)^2/E$ |
| --------- | -------- | ------------------- | ----------- |
| $A\_B\_$  | 120      | 112.5               | 0.50        |
| $A\_bb$   | 10       | 37.5                | 20.17       |
| $aaB\_$   | 12       | 37.5                | 17.33       |
| $aabb$    | 58       | 12.5                | 16.56       |

$\chi^2 = 0.50 + 20.17 + 17.33 + 16.56 = 54.56$.

$\mathrm{df} = 3$. Critical value at $p = 0.05$ for 3 df = 7.82.

Since $\chi^2 = 54.56 \gg 7.82$, we reject the null hypothesis. The genes are **linked**. The excess of parental phenotypes ($A\_B\_$ = 120 and $aabb$ = 58) and deficit of recombinant phenotypes ($A\_bb$ = 10 and $aaB\_$ = 12) confirms linkage.

Recombination frequency $= \frac{10 + 12}{200} \times 100\% = 11\%$. Map distance = $11\ \mathrm{cM}$.

### 3.3 Yates' Correction for Small Samples

When the expected frequency in any category is less than 5, the standard chi-squared test is unreliable. Yates' correction for continuity is applied:

$$\chi^2_{\mathrm{Yates}} = \sum \frac{(|O - E| - 0.5)^2}{E}$$

This correction reduces the chi-squared value, making the test more conservative (less likely to reject the null hypothesis).

## 4. Population Genetics: Hardy-Weinberg Extended

### 4.1 Hardy-Weinberg with Selection

When selection acts against a genotype, the allele frequencies change between generations.

**Worked Example: Selection against a recessive homozygote.**

A population has allele frequencies $p = 0.8$ ($A$) and $q = 0.2$ ($a$). The recessive homozygote ($aa$) has a selection coefficient $s = 0.5$ (50% reduction in fitness).

Genotype frequencies: $p^2 = 0.64$ ($AA$), $2pq = 0.32$ ($Aa$), $q^2 = 0.04$ ($aa$).

Fitness: $w_{AA} = 1$, $w_{Aa} = 1$, $w_{aa} = 1 - s = 0.5$.

Mean fitness: $\bar{w} = p^2 \cdot 1 + 2pq \cdot 1 + q^2 \cdot 0.5 = 0.64 + 0.32 + 0.02 = 0.98$.

After selection, the new frequency of $a$:

$$q' = \frac{q^2 \cdot w_{aa} + pq \cdot w_{Aa}}{\bar{w}} = \frac{0.04 \times 0.5 + 0.16 \times 1}{0.98} = \frac{0.02 + 0.16}{0.98} = \frac{0.18}{0.98} = 0.1837$$

The frequency of $a$ has decreased from 0.2 to 0.1837 in one generation due to selection against $aa$.

### 4.2 Genetic Drift

Genetic drift is the random fluctuation of allele frequencies due to chance events in finite populations. Its effect is inversely proportional to population size ($N$).

The rate of allele frequency change due to drift can be approximated by the standard deviation:

$$\sigma_q = \sqrt{\frac{pq}{2N}}$$

where $N$ is the effective population size.

**Worked Example.** In a population of $N = 100$ with $p = 0.5$, $q = 0.5$:

$$\sigma_q = \sqrt{\frac{0.5 \times 0.5}{2 \times 100}} = \sqrt{\frac{0.25}{200}} = \sqrt{0.00125} = 0.0354$$

The allele frequency is expected to fluctuate by approximately $\pm 0.035$ per generation due to drift. In a population of $N = 10000$:

$$\sigma_q = \sqrt{\frac{0.25}{20000}} = 0.00354$$

The fluctuation is 10 times smaller. This demonstrates that drift is significant only in small populations.

**The bottleneck effect:** a sharp reduction in population size drastically reduces genetic diversity. The surviving individuals carry only a subset of the original alleles.

**The founder effect:** a small group colonises a new area, carrying a non-representative sample of alleles from the source population.

### 4.3 Gene Flow and Migration

Gene flow (migration) changes allele frequencies when individuals move between populations:

$$\Delta p = m(p_m - p)$$

where $m$ is the migration rate (proportion of the population that are migrants), $p_m$ is the allele frequency in the migrant population, and $p$ is the allele frequency in the resident population.

**Worked Example.** A resident population has $p = 0.9$ for allele $A$. Migrants arrive with $p_m = 0.3$. The migration rate is $m = 0.1$ (10% migrants).

$$\Delta p = 0.1(0.3 - 0.9) = 0.1(-0.6) = -0.06$$

$$p' = 0.9 - 0.06 = 0.84$$

The frequency of $A$ decreases from 0.9 to 0.84 in one generation due to gene flow from the migrant population.

## 5. Speciation

### 5.1 Allopatric Speciation

Allopatric speciation occurs when a geographic barrier divides a population into two isolated groups. Over time, each population accumulates different mutations and experiences different selection pressures, leading to genetic divergence.

**Conditions for allopatric speciation:**

1. **Geographic isolation**: a physical barrier (mountain range, river, ocean, glacier) prevents gene flow.
2. **Different selection pressures**: each population adapts to its local environment.
3. **Genetic divergence**: mutation, natural selection, and genetic drift cause allele frequencies to diverge.
4. **Reproductive isolation**: eventually, even if the barrier is removed, the populations cannot interbreed to produce fertile offspring.

The time required for speciation depends on the strength of selection, population size, and the extent of genetic divergence needed for reproductive isolation.

### 5.2 Sympatric Speciation

Sympatric speciation occurs without geographic separation.

**Mechanisms:**

- **Polyploidy** (common in plants): chromosome duplication produces an individual with multiple sets of chromosomes. A tetraploid ($4n$) individual can self-fertilise or mate with other tetraploids, but cannot produce fertile offspring with diploid ($2n$) individuals because the triploid ($3n$) offspring have unpaired chromosomes during meiosis.
- **Ecological speciation**: exploitation of different food sources or habitats within the same geographic area creates disruptive selection, leading to reproductive isolation.
- **Behavioural isolation**: divergence in courtship displays, mating songs, or pheromones.
- **Temporal isolation**: different breeding seasons.

### 5.3 Reproductive Isolating Mechanisms

**Pre-zygotic barriers** (prevent mating or fertilisation):

| Type                | Example                                    |
| ------------------- | ------------------------------------------ |
| Habitat isolation   | Different microhabitats within same area   |
| Temporal isolation  | Different breeding seasons                |
| Behavioural isolation | Different courtship dances/songs          |
| Mechanical isolation | Incompatible genital structures           |
| Gametic isolation   | Sperm cannot fertilise egg (e.g., sea urchins) |

**Post-zygotic barriers** (reduce fitness of hybrid offspring):

| Type                  | Example                                        |
| --------------------- | ---------------------------------------------- |
| Hybrid inviability    | Zygote does not develop properly               |
| Hybrid sterility      | Mule (horse $\times$ donkey): healthy but sterile |
| Hybrid breakdown      | F1 hybrids are fertile, but F2 generation has reduced fitness |

## 6. Selection and Evolution

### 6.1 Types of Selection

**Stabilising selection** favours intermediate phenotypes and selects against extremes. This maintains the status quo and reduces genetic variation. Example: human birth weight (medium weight has highest survival).

**Directional selection** favours one extreme phenotype, shifting the population mean. Example: antibiotic resistance in bacteria; increased beak depth in finches during droughts.

**Disruptive selection** favours both extremes over the intermediate. This can lead to speciation if the two extreme forms become reproductively isolated. Example: African seedcracker finches (large beaks for hard seeds, small beaks for soft seeds).

### 6.2 Selection Coefficients and Fitness

The **selection coefficient ($s$)** measures the reduction in fitness of a genotype relative to the fittest genotype.

| Genotype | Relative Fitness ($w$) | Selection Coefficient ($s$) |
| -------- | ---------------------- | -------------------------- |
| $AA$     | 1.0                    | 0                          |
| $Aa$     | 1.0                    | 0                          |
| $aa$     | $1 - s$                | $s$                        |

If $s = 1$ (lethal recessive): $aa$ individuals die before reproducing. The frequency of $a$ decreases by approximately $sq^2$ per generation (for small $q$).

**Worked Example: Selection against a lethal recessive.** A population has $q = 0.1$ for a lethal recessive allele ($s = 1$).

$$\Delta q = -sq^2 \cdot p = -1 \times 0.01 \times 0.9 = -0.009$$

$$q' = 0.1 - 0.009 = 0.091$$

The frequency decreases very slowly because most copies of the recessive allele are "hidden" in heterozygotes, where they are not exposed to selection.

## 7. Phylogenetics

### 7.1 Molecular Clocks

The molecular clock hypothesis states that mutations accumulate in DNA at a roughly constant rate, so the number of sequence differences between two species is proportional to the time since their divergence.

$$\text{Divergence time} = \frac{d}{2\mu}$$

where $d$ is the proportion of nucleotide sites that differ between two species, and $\mu$ is the mutation rate per site per year. The factor of 2 accounts for independent accumulation of mutations in both lineages.

**Worked Example.** Two species of primate differ at 3.6% of nucleotide sites in a non-coding region. The mutation rate is estimated at $\mu = 2.5 \times 10^{-9}$ substitutions per site per year.

$$\text{Time} = \frac{0.036}{2 \times 2.5 \times 10^{-9}} = \frac{0.036}{5 \times 10^{-9}} = 7.2 \times 10^6\ \text{years}$$

The two species diverged approximately 7.2 million years ago.

### 7.2 Limitations

- Mutation rates vary between genes (coding vs non-coding), between lineages (different generation times), and over time.
- Natural selection can accelerate or decelerate sequence change at specific loci.
- Different genes may give different divergence estimates.

## Practice Problems

<details>
<summary>Problem 1</summary>
In summer squash, fruit colour is determined by two genes. Gene $W$ (dominant) produces white fruit regardless of the genotype at gene $Y$. Gene $Y$ (dominant) produces yellow fruit, and $yy$ produces green fruit, but only when $ww$. A cross between two dihybrid plants ($WwYy \times WwYy$) produces 160 offspring. (a) State the expected phenotypic ratio. (b) Calculate the expected number of offspring in each phenotypic class. (c) The observed numbers are: white 122, yellow 28, green 10. Perform a chi-squared test to determine whether the results fit the expected ratio.

**Answer.** (a) Dominant epistasis: **12:3:1** (white:yellow:green).

(b) Total = 160. Expected: white = $160 \times 12/16 = 120$; yellow = $160 \times 3/16 = 30$; green = $160 \times 1/16 = 10$.

(c) $\chi^2 = \frac{(122-120)^2}{120} + \frac{(28-30)^2}{30} + \frac{(10-10)^2}{10} = \frac{4}{120} + \frac{4}{30} + 0 = 0.033 + 0.133 = 0.167$.

Degrees of freedom = $3 - 1 = 2$. Critical value at $p = 0.05$ for 2 df = 5.99.

Since $\chi^2 = 0.167 \ll 5.99$, we accept the null hypothesis. The observed results fit the 12:3:1 ratio for dominant epistasis.

<b>If you get this wrong, revise:</b> [Types of Epistasis](#12-types-of-epistasis)

</details>

<details>
<summary>Problem 2</summary>
Two genes, $G$ and $H$, are linked on the same chromosome. A test cross $GgHh \times gghh$ produces 1000 offspring: $GgHh$ = 410, $gghh$ = 390, $Gghh$ = 105, $ggHh$ = 95. (a) Calculate the recombination frequency and the map distance between $G$ and $H$. (b) Are the genes linked? Justify your answer with a chi-squared test against the 1:1:1:1 ratio expected for unlinked genes.

**Answer.** (a) Parental phenotypes: $GgHh$ (410) + $gghh$ (390) = 800. Recombinant phenotypes: $Gghh$ (105) + $ggHh$ (95) = 200. Recombination frequency = $200/1000 \times 100\% = 20\%$. Map distance = $20\ \mathrm{cM}$.

(b) Expected (1:1:1:1): 250 in each category.

$\chi^2 = \frac{(410-250)^2}{250} + \frac{(390-250)^2}{250} + \frac{(105-250)^2}{250} + \frac{(95-250)^2}{250}$

$= \frac{25600}{250} + \frac{19600}{250} + \frac{21025}{250} + \frac{24025}{250}$

$= 102.4 + 78.4 + 84.1 + 96.1 = 361.0$.

Degrees of freedom = 3. Critical value at $p = 0.05$ for 3 df = 7.82.

Since $\chi^2 = 361 \gg 7.82$, the genes are clearly linked. The enormous excess of parental types and deficit of recombinant types confirms strong linkage.

<b>If you get this wrong, revise:</b> [Linkage](#2-genetic-linkage-and-crossing-over)

</details>

<details>
<summary>Problem 3</summary>
A population of 2000 flowering plants has the following genotype frequencies for a gene controlling flower colour: $RR$ (red) = 720, $Rr$ (pink) = 960, $rr$ (white) = 320. (a) Calculate the allele frequencies. (b) Is the population in Hardy-Weinberg equilibrium? Support your answer with a chi-squared test. (c) Suggest a biological explanation if the population is not in equilibrium.

**Answer.** (a) Total alleles = 4000. $p = \frac{2(720) + 960}{4000} = \frac{2400}{4000} = 0.60$. $q = 1 - 0.60 = 0.40$.

(b) Expected: $p^2 = 0.36$ ($720$), $2pq = 0.48$ ($960$), $q^2 = 0.16$ ($320$). These match the observed exactly. $\chi^2 = 0$. The population is in perfect Hardy-Weinberg equilibrium.

(c) Not applicable -- the population is in equilibrium.

<b>If you get this wrong, revise:</b> [Population Genetics: Hardy-Weinberg Extended](#4-population-genetics-hardy-weinberg-extended)

</details>

<details>
<summary>Problem 4</summary>
Explain how polyploidy can lead to sympatric speciation in plants. Why is polyploidy a more common speciation mechanism in plants than in animals? (5 marks)

**Answer.** Polyploidy involves the duplication of the entire chromosome set, producing individuals with more than two sets of chromosomes (e.g., tetraploid $4n$ from diploid $2n$). A tetraploid individual can self-fertilise or mate with other tetraploids, producing fertile tetraploid offspring. However, when a tetraploid mates with a diploid, the triploid ($3n$) offspring cannot undergo normal meiosis because the chromosomes cannot pair correctly (there are three homologues for each chromosome, but meiosis requires pairs). The triploid offspring are therefore sterile, creating instant reproductive isolation between the tetraploid and diploid populations without geographic separation. Polyploidy is more common in plants because: (1) many plants can self-fertilise, allowing a tetraploid individual to reproduce without finding another tetraploid mate; (2) plants often tolerate whole-genome duplication better than animals; (3) many plant species reproduce asexually (vegetatively), allowing polyploid individuals to persist and spread even without producing fertile seeds.

<b>If you get this wrong, revise:</b> [Sympatric Speciation](#52-sympatric-speciation)

</details>

## 8. Genetic Drift in Detail

### 8.1 Effective Population Size

The **effective population size** ($N_e$) is the number of breeding individuals in a population that contribute genes to the next generation. $N_e$ is almost always smaller than the census population size ($N$) because not all individuals breed, and some individuals contribute more offspring than others.

Factors that reduce $N_e$:

| Factor | Effect on $N_e$ | Example |
| ------ | -------------- | ------- |
| Unequal sex ratio | $N_e = \frac{4N_m N_f}{N_m + N_f}$ where $N_m$ = breeding males, $N_f$ = breeding females | Elephant seal harems: few males breed, many females |
| Variation in reproductive success | Individuals producing more offspring dominate the gene pool | Dominant males in deer herds |
| Population fluctuations | $N_e$ is closer to the minimum population size than the average | Population bottlenecks reduce long-term $N_e$ |
| Overlapping generations | Not all age classes reproduce simultaneously | Humans, elephants |

**Worked Example.** A population of elephants has 100 adult males and 400 adult females, but only 5 males breed (holding harems) while 350 females breed.

$N_e = \frac{4 \times 5 \times 350}{5 + 350} = \frac{7000}{355} = 19.7$.

Despite a census population of 500, the effective population size is only about 20. This means genetic drift acts as strongly as in a population of 20 randomly mating individuals.

### 8.2 The Bottleneck Effect

A **population bottleneck** occurs when a population is drastically reduced in size, typically by a catastrophic event (natural disaster, hunting, habitat destruction). The surviving individuals carry only a subset of the original population's genetic diversity.

Consequences:

- Loss of alleles, especially rare ones.
- Reduced heterozygosity.
- Increased genetic drift in subsequent generations (small $N_e$).
- Potential for inbreeding depression (increased homozygosity exposes recessive deleterious alleles).
- Reduced adaptive potential (fewer alleles available for selection to act upon).

**Example: Cheetahs (_Acinonyx jubatus_).** Cheetahs experienced a severe bottleneck approximately 10,000 years ago at the end of the last ice age. As a result, modern cheetahs have extremely low genetic diversity -- skin grafts between unrelated cheetahs are not rejected, and sperm abnormalities are common, reducing fertility. This makes the species vulnerable to disease and environmental change.

### 8.3 The Founder Effect

The **founder effect** occurs when a small group of individuals colonises a new area or establishes a new population. The new population carries only the alleles present in the founders, which may not be representative of the source population.

**Example: Ellis-van Creveld syndrome in the Amish.** This rare recessive disorder (short limbs, polydactyly, congenital heart defects) has a much higher incidence in the Old Order Amish of Pennsylvania than in the general population. One of the approximately 200 founders of the Amish community in the 18th century was a carrier of the allele. Genetic drift in the small, isolated population increased the allele frequency.

### 8.4 Gene Flow

**Gene flow** (migration) is the movement of alleles between populations through the movement of individuals or gametes (e.g., pollen transfer in plants). Gene flow tends to:

- Increase genetic diversity within populations.
- Decrease genetic differences between populations.
- Counteract the effects of genetic drift and natural selection that would cause populations to diverge.
- Maintain species cohesion by preventing populations from becoming genetically distinct.

Gene flow is reduced by geographic barriers (mountains, rivers, oceans) and by behavioural barriers (different mating seasons, different pollinators).

The balance between gene flow and selection determines whether populations diverge into separate species or remain a single species.

## 9. Advanced Epistasis Patterns

### 9.1 Supplementary Epistasis (9:7 Ratio)

In supplementary epistasis, the presence of at least one dominant allele at each of two loci is required for a phenotype to be expressed. If either locus is homozygous recessive, the alternate phenotype appears.

**Worked Example: Flower colour in sweet peas.** Gene $C$ produces the enzyme for colour production. Gene $P$ produces a co-factor needed for the enzyme. Both $C\_P\_$ genotypes produce purple flowers. Any genotype with $cc$ or $pp$ (or both) produces white flowers.

Cross: $CcPp \times CcPp$

| Genotype | Phenotype | Count |
| -------- | --------- | ----- |
| $C\_P\_$ | Purple | 9 |
| $C\_pp$ | White | 3 |
| $ccP\_$ | White | 3 |
| $ccpp$ | White | 1 |

Ratio: **9:7**.

### 9.2 Duplicate Gene Action (15:1 Ratio)

In duplicate gene action, a dominant allele at either of two loci is sufficient to produce the phenotype. Only the double homozygous recessive ($aabb$) shows the alternate phenotype.

Cross: $AaBb \times AaBb$

| Genotype | Phenotype | Count |
| -------- | --------- | ----- |
| $A\_B\_$ | Round | 9 |
| $A\_bb$ | Round | 3 |
| $aaB\_$ | Round | 3 |
| $aabb$ | Long | 1 |

Ratio: **15:1**.

### 9.3 Dominant and Recessive Interaction (13:3 Ratio)

One dominant allele at locus A masks the effect of locus B, and the recessive genotype at locus A combined with a dominant allele at locus B produces the second phenotype.

**Worked Example: Feather colour in poultry.** Gene $I$ inhibits colour (dominant epistasis): $I\_$ = white regardless of $C$ gene. Gene $C$ produces colour when $ii$: $iiC\_$ = coloured; $iicc$ = white.

Cross: $IiCc \times IiCc$

| Genotype | Phenotype | Count |
| -------- | --------- | ----- |
| $I\_C\_$ | White | 9 |
| $I\_cc$ | White | 3 |
| $iiC\_$ | Coloured | 3 |
| $iicc$ | White | 1 |

Ratio: **13:3** (12 white + 1 white from $iicc$ : 3 coloured).

### 9.4 Recognising Epistatic Ratios

| Ratio | Name | Interpretation |
| ----- | ---- | -------------- |
| 9:3:4 | Recessive epistasis | Homozygous recessive at one locus masks the other |
| 12:3:1 | Dominant epistasis | Dominant allele at one locus masks the other |
| 9:7 | Supplementary epistasis | Both loci need a dominant allele for phenotype |
| 15:1 | Duplicate gene action | Either locus alone can produce phenotype |
| 13:3 | Dominant and recessive interaction | Complex masking between loci |
| 9:6:1 | Complementary gene action | Two dominant alleles needed together for one phenotype; one dominant for another |

:::warning
Common Pitfall Students often confuse epistasis with dominance. Remember: dominance operates **within a single gene locus** (alleles of the same gene), while epistasis operates **between different gene loci**. When the dihybrid cross ratio deviates from 9:3:3:1, epistasis is the likely explanation, not dominance.
:::

## 10. Genetic Linkage and Chromosome Mapping

### 10.1 Two-Point Cross Mapping

When two genes are linked on the same chromosome, they do not assort independently. The frequency of recombinant offspring reflects the distance between the genes.

$$\text{Recombination frequency (RF)} = \frac{\text{Number of recombinant offspring}}{\text{Total offspring}} \times 100\%$$

$1\%$ recombination frequency $= 1$ centimorgan (cM) $= 1$ map unit.

**Worked Example.** In a test cross of $AaBb$ (both dominant alleles on the same chromosome, _cis_ configuration) with $aabb$, the following offspring are produced:

| Phenotype | Count | Type |
| --------- | ----- | ---- |
| $AB$ | 420 | Parental |
| $ab$ | 380 | Parental |
| $Ab$ | 100 | Recombinant |
| $aB$ | 100 | Recombinant |

$\text{RF} = \frac{100 + 100}{420 + 380 + 100 + 100} = \frac{200}{1000} = 20\%$.

The genes $A$ and $B$ are 20 cM apart.

### 10.2 Interference and Coincidence

In a three-point cross, double crossovers (DCOs) may occur less frequently than expected because one crossover event can physically interfere with a second nearby crossover.

$$\text{Coincidence (c.o.c.)} = \frac{\text{Observed DCO frequency}}{\text{Expected DCO frequency}}$$

$$\text{Expected DCO frequency} = \text{RF}_{AB} \times \text{RF}_{BC}$$

$$\text{Interference} = 1 - \text{Coincidence}$$

**Worked Example.** Three genes ($A$, $B$, $C$) are mapped. $\text{RF}_{AB} = 15\%$, $\text{RF}_{BC} = 10\%$. Observed DCO frequency $= 0.5\%$.

Expected DCO $= 0.15 \times 0.10 = 0.015 = 1.5\%$.

Coincidence $= \frac{0.5}{1.5} = 0.33$.

Interference $= 1 - 0.33 = 0.67$.

This means 67% of expected double crossovers did not occur because the first crossover interfered with the second.

### 10.3 Sex Linkage Revisited

**Haemophilia A** is an X-linked recessive disorder caused by a mutation in the gene encoding clotting factor VIII. The gene is located at Xq28.

| Genotype | Phenotype (female) | Phenotype (male) |
| -------- | ----------------- | ---------------- |
| $X^HX^H$ | Normal | -- |
| $X^HX^h$ | Carrier (normal) | -- |
| $X^hX^h$ | Haemophiliac | -- |
| $X^HY$ | -- | Normal |
| $X^hY$ | -- | Haemophiliac |

**Worked Example: Pedigree analysis.** A normal woman whose father was haemophilic marries a normal man. What is the probability that their first son will be haemophilic?

The woman's father was $X^hY$, so she must have inherited $X^h$ from him. Her mother was presumably $X^HX^H$ or $X^HX^h$. The woman is $X^HX^h$ (carrier). The man is $X^HY$.

Cross: $X^HX^h \times X^HY$

| | $X^H$ | $Y$ |
| --- | --- | --- |
| $X^H$ | $X^HX^H$ (normal female) | $X^HY$ (normal male) |
| $X^h$ | $X^HX^h$ (carrier female) | $X^hY$ (haemophiliac male) |

Probability of a haemophiliac son $= \frac{1}{4}$.

However, the question asks specifically about the first son. The probability of having a son is $\frac{1}{2}$, and given it is a son, the probability he is haemophiliac is $\frac{1}{2}$. So $P = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$.

## 11. Selection and Fitness

### 11.1 Measuring Fitness

**Darwinian fitness** ($w$) is the relative reproductive success of a genotype, measured as the proportion of offspring contributed by that genotype compared to the most fit genotype.

| Genotype | Number of offspring | Fitness ($w$) | Selection coefficient ($s = 1 - w$) |
| -------- | ------------------ | ------------- | --------------------------------- |
| $AA$ | 180 | 1.00 | 0 |
| $Aa$ | 160 | 0.89 | 0.11 |
| $aa$ | 100 | 0.56 | 0.44 |

### 11.2 Effect of Selection on Allele Frequency

Selection against a recessive allele is inefficient when the allele is rare because most copies of the recessive allele are "hidden" in heterozygotes, where they are not exposed to selection.

**Worked Example.** A population has genotype frequencies: $AA = 0.64$, $Aa = 0.32$, $aa = 0.04$. The $aa$ genotype has a fitness of 0 (lethal recessive). What is the allele frequency of $a$ after one generation of selection?

Before selection: $p = 0.64 + \frac{0.32}{2} = 0.80$, $q = 0.04 + \frac{0.32}{2} = 0.20$.

After selection (all $aa$ die): the surviving population consists of $AA$ (0.64) and $Aa$ (0.32), total $= 0.96$.

Relative frequencies after selection: $AA = \frac{0.64}{0.96} = 0.667$, $Aa = \frac{0.32}{0.96} = 0.333$.

New allele frequency: $q' = \frac{0.333}{2} = 0.167$.

The frequency of $a$ decreased from 0.20 to 0.167 after one generation. This is a slow decrease because most $a$ alleles are in heterozygotes ($Aa$) that are not selected against.

### 11.3 Heterozygote Advantage

**Heterozygote advantage** (overdominance) occurs when the heterozygous genotype has higher fitness than either homozygote. In this case, both alleles are maintained in the population at an equilibrium frequency.

**Example: Sickle cell anaemia and malaria.** The $Hb^S$ allele causes sickle cell anaemia in homozygotes ($Hb^S Hb^S$), but heterozygotes ($Hb^A Hb^S$) have increased resistance to malaria caused by _Plasmodium falciparum_.

| Genotype | Fitness in malaria-endemic region |
| -------- | --------------------------------- |
| $Hb^A Hb^A$ | 0.85 (susceptible to malaria) |
| $Hb^A Hb^S$ | 1.00 (resistant to malaria, mild anaemia) |
| $Hb^S Hb^S$ | 0.10 (severe sickle cell disease) |

At equilibrium: $\hat{q} = \frac{w_{AA} - w_{Aa}}{(w_{AA} - w_{Aa}) + (w_{aa} - w_{Aa})} = \frac{0.85 - 1.00}{(0.85 - 1.00) + (0.10 - 1.00)} = \frac{-0.15}{-0.15 + (-0.90)} = \frac{-0.15}{-1.05} = 0.143$.

So the equilibrium frequency of $Hb^S$ is approximately 0.143 ($\approx 14\%$), which matches the observed frequency in West Africa. This explains why sickle cell anaemia persists in populations where malaria is endemic.

### 11.4 Directional, Stabilising, and Disruptive Selection

| Type of Selection | Effect | Example |
| ----------------- | ------ | ------- |
| Directional | Favouring one extreme phenotype | Antibiotic resistance in bacteria; peppered moth during industrial revolution |
| Stabilising | Favouring the intermediate phenotype, selecting against extremes | Human birth weight (very low and very high birth weights have higher mortality) |
| Disruptive | Favouring both extremes, selecting against the intermediate | Beak size in finches on islands with two seed types |

**Stabilising selection** reduces genetic diversity by favouring the mean.

**Disruptive selection** can lead to **sympatric speciation** if the two extremes become reproductively isolated.

## 12. Co-dominance and Multiple Alleles

### 12.1 The ABO Blood Group System

The ABO blood group is determined by a single gene ($I$) with three alleles: $I^A$, $I^B$, and $i$.

| Genotype | Blood Group | Antigens on RBC | Antibodies in Plasma |
| -------- | ---------- | --------------- | ------------------- |
| $I^A I^A$ or $I^A i$ | A | A | anti-B |
| $I^B I^B$ or $I^B i$ | B | B | anti-A |
| $I^A I^B$ | AB | A and B | none |
| $ii$ | O | none | anti-A and anti-B |

$I^A$ and $I^B$ are **co-dominant** (both expressed in $I^A I^B$ heterozygote). Both are **dominant** over $i$.

### 12.2 Blood Transfusion Compatibility

A person can receive blood from a donor if their plasma antibodies do not react with the donor's RBC antigens:

| Recipient | Can Receive From |
| --------- | ---------------- |
| A | A, O |
| B | B, O |
| AB | A, B, AB, O (universal recipient) |
| O | O (universal donor) |

### 12.3 The Rhesus (Rh) System

The Rh system is determined by the $D$ allele: $DD$ or $Dd$ = Rh positive; $dd$ = Rh negative. Rh positive is dominant.

**Haemolytic disease of the newborn (HDN)** can occur when an Rh-negative mother carries an Rh-positive foetus. During the first pregnancy, foetal RBCs may enter the maternal circulation at birth, stimulating the mother to produce anti-D antibodies. In a subsequent pregnancy with an Rh-positive foetus, the maternal anti-D antibodies cross the placenta and destroy the foetal RBCs, causing anaemia, jaundice, and in severe cases, heart failure or stillbirth (erythroblastosis fetalis).

HDN is prevented by administering **anti-D immunoglobulin** (RhoGAM) to the Rh-negative mother within 72 hours of the first birth, which destroys any foetal Rh-positive cells before they can stimulate an immune response.

### 12.4 Worked Example: Blood Group Genetics

A woman with blood group A (whose father was blood group O) marries a man with blood group AB. What are the possible blood groups of their children?

The woman is blood group A and her father was blood group O ($ii$). Since she inherited one $i$ allele from her father, she must be $I^A i$ (heterozygous A).

The man is $I^A I^B$ (AB).

Cross: $I^A i \times I^A I^B$

| | $I^A$ | $I^B$ |
| --- | --- | --- |
| $I^A$ | $I^A I^A$ (A) | $I^A I^B$ (AB) |
| $i$ | $I^A i$ (A) | $I^B i$ (B) |

Possible blood groups: **A (50%), AB (25%), B (25%)**.

## 13. Chromosomal Abnormalities

### 13.1 Nondisjunction

**Nondisjunction** is the failure of homologous chromosomes or sister chromatids to separate during meiosis. This produces gametes with an abnormal number of chromosomes.

If a gamete with an extra chromosome ($n+1$) fuses with a normal gamete ($n$), the resulting zygote has **trisomy** ($2n+1$). If a gamete missing a chromosome ($n-1$) fuses with a normal gamete, the zygote has **monosomy** ($2n-1$).

Most monosomies are lethal in humans. Trisomies of chromosomes 13, 18, and 21 are viable (though with severe developmental abnormalities). Trisomy 21 (Down syndrome) is the most common viable trisomy.

### 13.2 Common Human Aneuploidies

| Condition | Chromosome | Karyotype | Key Features |
| --------- | ---------- | --------- | ------------ |
| Down syndrome | 21 | 47,XX,+21 or 47,XY,+21 | Intellectual disability, flat facial profile, single palmar crease, increased risk of leukaemia and Alzheimer's |
| Edwards syndrome | 18 | 47,XX,+18 or 47,XY,+18 | Severe intellectual disability, low-set ears, rocker-bottom feet; most die within first year |
| Patau syndrome | 13 | 47,XX,+13 or 47,XY,+13 | Cleft lip/palate, polydactyly, heart defects; most die within first year |
| Klinefelter syndrome | X | 47,XXY | Male, tall, small testes, infertile, gynaecomastia |
| Turner syndrome | X | 45,X | Female, short stature, webbed neck, streak ovaries, infertile |
| Triple X syndrome | X | 47,XXX | Female, usually normal, may have learning difficulties |
| XYY syndrome | Y | 47,XYY | Male, usually normal, tall |

### 13.3 Translocation

A **translocation** occurs when a segment of one chromosome breaks off and attaches to a non-homologous chromosome. In **reciprocal translocation**, two non-homologous chromosomes exchange segments.

**Robertsonian translocation** involves two acrocentric chromosomes (13, 14, 15, 21, 22) fusing at their centromeres. The short arms are usually lost (they contain multiple copies of rRNA genes, so the loss is tolerated).

**Worked Example: Familial Down syndrome.** A carrier of a Robertsonian translocation between chromosomes 14 and 21 has the karyotype 45,XX,der(14;21)(q10;q10). Despite having only 45 chromosomes, the carrier is phenotypically normal because all essential genetic material is present.

However, when this carrier produces gametes, some gametes will contain two copies of chromosome 21 (the normal one plus the translocated one). If such a gamete fuses with a normal gamete, the zygote will have three copies of chromosome 21 (Down syndrome), even though it has only 46 chromosomes.

## 14. Quantitative Genetics

### 14.1 Polygenic Inheritance

**Polygenic inheritance** occurs when a single phenotypic characteristic is controlled by many genes (polygenes), each with a small additive effect. Polygenic traits show **continuous variation** (a bell-shaped normal distribution) rather than discrete categories.

Examples: height, skin colour, intelligence, milk yield in cows, seed mass in plants.

### 14.2 Continuous Variation

In a polygenic trait controlled by two genes ($A$ and $B$), each with two alleles:

Cross: $AaBb \times AaBb$ (assuming no dominance, each capital letter adds one "unit" to the phenotype)

| Number of capital letters | Frequency | Phenotype |
| ------------------------ | --------- | --------- |
| 4 ($AABB$) | $\frac{1}{16}$ | Maximum |
| 3 ($AABb, AaBB$) | $\frac{4}{16}$ | |
| 2 ($AaBb, AAbb, aaBB$) | $\frac{6}{16}$ | Intermediate |
| 1 ($Aabb, aaBb$) | $\frac{4}{16}$ | |
| 0 ($aabb$) | $\frac{1}{16}$ | Minimum |

This gives a **1:4:6:4:1** ratio, which approximates a normal distribution. With more genes, the distribution becomes smoother and more bell-shaped.

### 14.3 Heritability

**Heritability** ($h^2$) is the proportion of the total phenotypic variation in a population that is due to genetic variation:

$$h^2 = \frac{V_G}{V_P} = \frac{V_G}{V_G + V_E}$$

Where $V_G$ = genetic variance, $V_E$ = environmental variance, $V_P$ = total phenotypic variance.

$h^2 = 1.0$: all variation is genetic (e.g., blood groups).
$h^2 = 0.0$: all variation is environmental.
Most traits have $0 < h^2 < 1$ (both genetic and environmental factors contribute).

Human height has $h^2 \approx 0.80$ (highly heritable, but nutrition also plays a significant role).

:::warning
Common Pitfall Students often confuse heritability of a trait in a population with the heritability of that trait in an individual. Heritability is a population-level statistic. A high heritability for height does not mean that a tall individual's height is "80% genetic" -- it means that 80% of the variation in height across the population is due to genetic differences.
:::

## 16. Pedigree Analysis: Advanced Problems

### 16.1 X-Linked Dominant Inheritance

X-linked dominant disorders are rare. Affected males pass the condition to all daughters (who receive his X chromosome) and no sons (who receive his Y chromosome). Affected heterozygous females pass the condition to approximately 50% of sons and 50% of daughters.

**Example: Hypophosphatemic rickets (vitamin D-resistant rickets).** Caused by a mutation in the _PHEX_ gene on the X chromosome. Affected individuals have low blood phosphate, leading to bone softening and deformities.

| Genotype | Male Phenotype | Female Phenotype |
| -------- | ------------- | ---------------- |
| $X^N Y$ | Normal | -- |
| $X^N X^N$ | -- | Normal |
| $X^n Y$ | Affected | -- |
| $X^N X^n$ | -- | Affected |
| $X^n X^n$ | -- | More severely affected |

### 16.2 Mitochondrial Inheritance

Mitochondrial DNA is inherited maternally (only from the mother's egg; the sperm contributes virtually no mitochondria). Mitochondrial disorders affect both males and females but are only transmitted by females.

**Worked Example: Leber hereditary optic neuropathy (LHON).** A woman with LHON (caused by a mutation in mitochondrial DNA) has 4 children. All 4 children inherit the mutation (they all received their mother's mitochondria). If a man with LHON has children, none of his children inherit the mutation (his mitochondria are not transmitted to the offspring).

| Parent | Children Inherit Mutation? |
| ------ | ------------------------ |
| Affected mother $\times$ unaffected father | All children affected |
| Affected father $\times$ unaffected mother | No children affected |
| Carrier mother (heteroplasmy) $\times$ unaffected father | Some children may be affected, depending on the proportion of mutant mitochondria in the egg |

**Heteroplasmy**: a cell can contain a mixture of normal and mutant mitochondria. The proportion of mutant mitochondria determines the severity of the disease. If the proportion exceeds a threshold (typically 60--90%), symptoms appear.

### 16.3 Dihybrid Cross with Linkage

When two genes are linked on the same chromosome, the dihybrid ratio deviates from 9:3:3:1 because the alleles do not assort independently.

**Worked Example.** In sweet peas, genes for flower colour ($P/p$, purple/white) and pollen shape ($L/l$, long/round) are linked on the same chromosome. A test cross of $PpLl$ (both dominant alleles on the same chromosome, _cis_) with $ppll$ produces:

| Phenotype | Observed | Type |
| --------- | -------- | ---- |
| Purple, long ($PL/pl$) | 250 | Parental |
| White, round ($pl/pl$) | 250 | Parental |
| Purple, round ($Pl/pl$) | 50 | Recombinant |
| White, long ($pL/pl$) | 50 | Recombinant |

$\text{RF} = \frac{50 + 50}{250 + 250 + 50 + 50} = \frac{100}{600} = 16.7\%$.

The genes are 16.7 cM apart. Without linkage, the expected ratio would be 1:1:1:1 (150:150:150:150). The excess of parental types and deficiency of recombinant types indicate linkage.

## 17. Population Genetics: Advanced Problems

### 17.1 Multiple Alleles and HWE

Some genes have more than two alleles in the population. The Hardy-Weinberg principle can be extended to multiple alleles.

**Worked Example: ABO blood groups.** The alleles are $I^A$, $I^B$, and $i$, with frequencies $p$, $q$, and $r$ respectively, where $p + q + r = 1$.

Genotype frequencies: $p^2$ ($I^A I^A$), $q^2$ ($I^B I^B$), $r^2$ ($ii$), $2pq$ ($I^A I^B$), $2pr$ ($I^A i$), $2qr$ ($I^B i$).

Blood group frequencies: $p^2 + 2pr$ (A), $q^2 + 2qr$ (B), $2pq$ (AB), $r^2$ (O).

**Worked Example.** In a population of 10,000, the blood group frequencies are: A = 4200, B = 1500, AB = 300, O = 4000.

$r^2 = \frac{4000}{10000} = 0.40$, so $r = \sqrt{0.40} = 0.632$.

$p^2 + 2pr = 0.42$.

$q^2 + 2qr = 0.15$.

From $p + q + r = 1$: $p + q = 1 - 0.632 = 0.368$.

From $q = 0.368 - p$:

Substituting into $q^2 + 2qr = 0.15$:

$(0.368 - p)^2 + 2(0.368 - p)(0.632) = 0.15$.

Expanding: $0.1354 - 0.736p + p^2 + 0.4651 - 1.264p = 0.15$.

$p^2 - 2.0p + 0.6005 = 0.15$.

$p^2 - 2.0p + 0.4505 = 0$.

Using the quadratic formula: $p = \frac{2.0 \pm \sqrt{4.0 - 1.802}}{2} = \frac{2.0 \pm 1.476}{2}$.

$p = \frac{2.0 - 1.476}{2} = 0.262$ (taking the smaller root).

$q = 0.368 - 0.262 = 0.106$.

Check: $p + q + r = 0.262 + 0.106 + 0.632 = 1.000$.

### 17.2 Genetic Drift and Bottleneck Calculations

**Worked Example.** A population of 10,000 has allele frequency $p = 0.50$ for allele $A$. A bottleneck reduces the population to 10 individuals, and the new allele frequency (by chance) is $p' = 0.70$.

After the bottleneck, the population recovers to 10,000, but the allele frequency remains at $p = 0.70$ (assuming no selection or migration).

Loss of heterozygosity during bottleneck: $H' = H \times (1 - \frac{1}{2N})$, where $N = 10$.

$H' = H \times (1 - \frac{1}{20}) = H \times 0.95$.

The population has lost 5% of its heterozygosity due to the bottleneck.

## 18. Evolutionary Developmental Biology (Evo-Devo)

### 18.1 Hox Genes

**Hox genes** are a family of transcription factors that control the body plan along the anterior-posterior axis during embryonic development. They are found in all animals (from fruit flies to humans) and are arranged in clusters on the chromosome in the same order as the body regions they control (colinearity).

Mutations in Hox genes can cause dramatic changes in body plan:

| Organism | Mutation | Effect |
| -------- | -------- | ------ |
| Fruit fly (_Drosophila_) | Mutation in _Antennapedia_ gene (a Hox gene) | Legs grow in place of antennae on the head |
| Fruit fly | Mutation in _bithorax_ complex | An extra pair of wings develops (four wings instead of two) |
| Vertebrates | Knockout of Hox genes | Homeotic transformations (e.g., ribs on cervical vertebrae) |

### 18.2 Homologous Developmental Genes

The discovery that the same genes control development in widely different organisms (e.g., _Pax6_ controls eye development in fruit flies, mice, and humans) provides strong evidence for common ancestry. Even though the resulting structures are very different (compound insect eye vs camera-type vertebrate eye), the same master control gene initiates their development.

This explains how major changes in body plan can evolve without requiring entirely new genes: changes in the regulation of existing developmental genes (when and where they are expressed) can produce dramatic morphological changes.

:::warning
Common Pitfall Students often assume that similar structures in different organisms must be controlled by different genes. In fact, homologous structures share the same developmental genes. The differences arise from differences in gene regulation (when, where, and how much each gene is expressed), not from differences in the genes themselves. This is a key principle of evolutionary developmental biology (evo-devo).
:::

## 19. Selection Coefficients and Fitness

### 19.1 Measuring the Strength of Selection

The **selection coefficient** ($s$) measures the reduction in fitness of a genotype relative to the fittest genotype. If the fittest genotype has fitness $w = 1.0$, then:

$$s = 1 - w$$

**Worked Example.** Three genotypes at a locus have the following survival rates:

| Genotype | Survival Rate | Fitness ($w$) | Selection Coefficient ($s$) |
| -------- | ------------ | ------------- | --------------------------- |
| $AA$ | 0.90 | 0.90 | 0.10 |
| $Aa$ | 0.95 | 0.95 | 0.05 |
| $aa$ | 1.00 | 1.00 | 0.00 |

The $aa$ genotype has the highest fitness. The $AA$ genotype has $s = 0.10$.

### 19.2 Calculating the Change in Allele Frequency

The change in allele frequency per generation due to selection against a recessive allele is approximately:

$$\Delta q \approx \frac{-spq^2}{1 - sq^2}$$

**Worked Example.** $p = 0.60$, $q = 0.40$, $s = 0.10$.

$\Delta q \approx \frac{-0.10 \times 0.60 \times 0.16}{1 - 0.10 \times 0.16} = \frac{-0.0096}{0.984} = -0.0098$.

After one generation: $q' = 0.40 - 0.0098 = 0.390$.

This shows that selection against a recessive allele is slow, because most copies are in heterozygotes (which are not selected against).

---

:::tip
Diagnostic Test

## 15. DNA Technology: Restriction Fragment Length Polymorphism (RFLP)

### 15.1 Principle

RFLP analysis detects differences in DNA sequences by using restriction enzymes to cut DNA at specific sites. If a mutation alters a restriction site (creating or destroying one), the pattern of fragments changes. These differences are called **restriction fragment length polymorphisms**.

### 15.2 Applications

**Genetic fingerprinting (DNA profiling):** Highly variable regions of DNA (mini-satellites or micro-satellites) contain repeating sequences whose number varies between individuals. After cutting with restriction enzymes, the fragments are separated by gel electrophoresis and visualised using radioactive or fluorescent probes. The resulting banding pattern is unique to each individual (except identical twins).

Probability of two unrelated individuals having the same DNA profile: less than 1 in $10^{12}$ (if enough loci are examined).

**Paternity testing:** The child's DNA profile must contain bands inherited from both parents. Any band in the child's profile that is not present in the mother's profile must have come from the biological father.

**Forensic science:** DNA from crime scenes (blood, semen, hair roots) is amplified by PCR, profiled, and compared to suspects' profiles. The match probability is reported as the likelihood that a random member of the population would have the same profile.

## 16. Genetic Counselling and Pedigree Analysis

### 16.1 Constructing and Interpreting Pedigrees

**Standard pedigree symbols:**

| Symbol | Meaning |
| ------ | ------- |
| Square | Male |
| Circle | Female |
| Filled (shaded) | Affected individual |
| Unfilled (open) | Unaffected individual |
| Half-filled | Carrier (heterozygous) |
| Horizontal line between male and female | Mating pair |
| Vertical line from mating pair | Offspring |
| Roman numerals (I, II, III) | Generations (top to bottom) |
| Arabic numerals (1, 2, 3) | Individuals within a generation (left to right) |

### 16.2 Determining the Mode of Inheritance

| Pattern | Indicates |
| ------- | --------- |
| Affects both sexes equally | Autosomal (not sex-linked) |
| Affects mainly males | Likely X-linked recessive |
| Affected individuals in every generation | Dominant |
| Skips generations (appears in individuals with unaffected parents) | Recessive |
| Two unaffected parents have an affected child | Recessive (both parents are carriers) |
| Affected father passes to all daughters (but not sons) | X-linked dominant |
| Affected mother passes to approximately 50% of sons and 50% of daughters | X-linked recessive (carrier mother) |

### 16.3 Worked Example: Autosomal Recessive Pedigree

A couple (both unaffected) have a child with cystic fibrosis (autosomal recessive). The woman's brother also has cystic fibrosis. Neither parent of either partner has cystic fibrosis.

1. The woman's brother has CF, so both of her parents must be carriers ($Cc$). The woman's genotype is either $CC$ or $Cc$.
2. The probability that the woman is a carrier $= 2/3$ (she is not affected, so she is either $CC$ or $Cc$; the ratio of $CC:Cc$ among unaffected siblings of an affected individual is 1:2, so $P(Cc) = 2/3$).
3. The man is unaffected and his parents are not mentioned. If CF is rare, the population carrier frequency is approximately $q \approx \sqrt{q^2} = \sqrt{1/2500} \approx 1/50$. So $P(\text{man is } Cc) \approx 1/50$.
4. If both are carriers, the probability of an affected child is $1/4$.

Overall probability of an affected child $= \frac{2}{3} \times \frac{1}{50} \times \frac{1}{4} = \frac{2}{600} = \frac{1}{300}$.

## 17. Genomics and Bioinformatics: Applications

### 17.1 The Human Genome Project

The Human Genome Project (1990--2003) sequenced the entire human genome (approximately 3.2 billion base pairs). Key findings:

- The human genome contains approximately 20,000--25,000 protein-coding genes (far fewer than the initially predicted 100,000).
- Only approximately 1.5% of the genome codes for proteins. The remaining 98.5% was originally called "junk DNA" but is now known to include regulatory elements, non-coding RNAs, and repetitive sequences with important functions.
- Approximately 50% of the genome consists of repetitive sequences (transposons, LINEs, SINEs).
- The genome shows remarkable similarity between individuals: any two humans share approximately 99.9% of their DNA sequence. The 0.1% difference (approximately 3 million base pairs) accounts for human genetic diversity.

### 17.2 Pharmacogenomics

**Pharmacogenomics** studies how genetic variation affects individual responses to drugs. Examples:

| Drug | Gene Variant | Effect |
| ---- | ------------ | ------ |
| Warfarin (anticoagulant) | _CYP2C9_ and _VKORC1_ variants | Affects dose required; some variants increase bleeding risk |
| Abacavir (HIV drug) | _HLA-B\*57:01_ allele | Increases risk of severe allergic reaction; genetic testing before prescription is recommended |
| Codeine (painkiller) | _CYP2D6_ variants | Poor metabolisers get no pain relief; ultra-rapid metabolisers may get dangerous opioid effects |
| 5-Fluorouracil (chemotherapy) | _DPYD_ variants | Deficient dihydropyrimidine dehydrogenase leads to severe, potentially fatal toxicity |

### 17.3 Comparative Genomics

Comparing genomes between species provides insights into evolution:

- Humans and chimpanzees share approximately 98.8% of their DNA sequence.
- The number of chromosomal differences between species can indicate evolutionary distance (e.g., humans have 46 chromosomes; chimpanzees have 48, reflecting a fusion event of two ancestral ape chromosomes to form human chromosome 2).
- Genes conserved across widely divergent species (e.g., homeobox/Hox genes) are typically involved in fundamental developmental processes.

## 18. Gene Expression Regulation: Beyond Epigenetics

### 18.1 Transcription Factors

Transcription factors (TFs) are proteins that bind to specific DNA sequences (enhancers, promoters, silencers) and regulate the rate of transcription of target genes.

| Type | Action | Example |
| ---- | ------ | ------- |
| Activator | Binds to enhancer; recruits RNA polymerase and general transcription factors | Sp1 (binds GC-rich promoter elements) |
| Repressor | Binds to silencer; blocks transcription by preventing activator binding or recruiting chromatin-modifying enzymes | REST (represses neuronal genes in non-neuronal cells) |
| Mediator complex | Bridges transcription factors bound to enhancers with RNA polymerase at the promoter | Required for most transcriptional activation in eukaryotes |

### 18.2 Post-Transcriptional Regulation

Gene expression can also be regulated after transcription:

1. **Alternative splicing**: different exons are included or excluded from the mRNA, producing different protein isoforms from the same gene.
2. **mRNA stability**: the 3' UTR (untranslated region) of mRNA contains sequences that affect its half-life. AU-rich elements (AREs) in the 3' UTR promote rapid degradation.
3. **miRNA regulation**: microRNAs bind to complementary sequences in the 3' UTR of target mRNAs, either inhibiting translation or promoting mRNA degradation.
4. **RNA editing**: enzymes (e.g., ADAR) change specific nucleotides in the mRNA after transcription, altering the amino acid sequence of the protein.

### 18.3 Post-Translational Regulation

Even after a protein is synthesised, its activity can be regulated:

| Mechanism | Effect | Example |
| --------- | ------ | ------- |
| Phosphorylation | Adds a phosphate group; activates or inhibits the protein | Glycogen synthase (inhibited by phosphorylation) |
| Ubiquitination | Tags protein for degradation by the proteasome | Cyclins are degraded at specific points in the cell cycle |
| Proteolytic cleavage | Activates a pro-protein by cutting it | Proinsulin $\to$ insulin; trypsinogen $\to$ trypsin |
| Allosteric regulation | Effector molecule binds at a site other than the active site, changing conformation | Haemoglobin (2,3-BPG binding reduces $\mathrm{O_2}$ affinity) |

:::warning
Common Pitfall Students often use the term "junk DNA" to describe non-coding DNA. This term is outdated and misleading. While most non-coding DNA does not code for proteins, it includes regulatory elements (promoters, enhancers, silencers), non-coding RNAs (miRNA, lncRNA, snRNA), telomeres, centromeres, and origins of replication -- all of which have important functions. The correct term is "non-coding DNA."
:::

## 19. Quantitative Genetics and Population Genetics Calculations

### 19.1 Hardy-Weinberg Equilibrium: Advanced Problems

**Problem:** In a population of 10,000, the frequency of the recessive allele for cystic fibrosis ($f$) is 0.02. Calculate the expected number of homozygous dominant, heterozygous, and homozygous recessive individuals.

$$p = 1 - q = 1 - 0.02 = 0.98$$

$$p^2 = (0.98)^2 = 0.9604 \quad \Rightarrow \quad 9604 \text{ individuals}$$

$$2pq = 2 \times 0.98 \times 0.02 = 0.0392 \quad \Rightarrow \quad 392 \text{ individuals}$$

$$q^2 = (0.02)^2 = 0.0004 \quad \Rightarrow \quad 4 \text{ individuals}$$

**Problem:** Sickle cell anaemia has an incidence of 1 in 2,500 in a West African population. What proportion of the population are carriers?

$$q^2 = \frac{1}{2500} = 0.0004 \quad \Rightarrow \quad q = 0.02$$

$$p = 1 - 0.02 = 0.98$$

$$2pq = 2 \times 0.98 \times 0.02 = 0.0392 \quad \Rightarrow \quad \text{approximately } 3.9\% \text{ of the population are carriers}$$

### 19.2 Selection Coefficients and Fitness

The **selection coefficient ($s$)** measures the reduction in fitness of a genotype relative to the fittest genotype.

| Genotype | Fitness ($w$) | Selection coefficient ($s$) |
| -------- | ------------- | --------------------------- |
| AA | 1.0 | 0 (reference) |
| Aa | 1.0 | 0 |
| aa | $1 - s$ | $s$ (e.g., if $s = 0.5$, aa individuals produce 50% fewer offspring) |

**Selection against a recessive allele:** when $s$ is small, the change in allele frequency per generation ($\Delta q$) is approximately:

$$\Delta q \approx -sq^2(1-q)$$

This means selection against a recessive allele is very slow when the allele is rare (because most copies of the allele are "hidden" in heterozygotes, where they have no effect on fitness).

**Example:** if $s = 0.1$ (10% fitness reduction) and $q = 0.5$:

$$\Delta q \approx -0.1 \times 0.25 \times 0.5 = -0.0125$$

The frequency of the recessive allele decreases by approximately 0.0125 per generation.

### 19.3 Genetic Drift: Bottleneck and Founder Effect Calculations

**Bottleneck effect:** a population is reduced to a small number of individuals, and genetic diversity is lost. The surviving population is not representative of the original population.

**Example:** A population of 100,000 is reduced to 10 individuals by a natural disaster. If the original population had 3 alleles at a locus with frequencies $p = 0.6$, $q = 0.3$, $r = 0.1$, after the bottleneck some alleles may be lost entirely (especially rare alleles like $r$).

**Probability of allele loss in a bottleneck:** the probability that an allele with frequency $q$ is lost in a population of $N$ individuals after a bottleneck is approximately:

$$P(\text{loss}) \approx (1-q)^{2N}$$

For allele $r$ ($q = 0.1$) with $N = 10$:

$$P(\text{loss}) \approx (0.9)^{20} \approx 0.122$$

There is approximately a 12% chance that allele $r$ is lost after this bottleneck.

### 19.4 Effective Population Size ($N_e$)

The effective population size is usually smaller than the actual (census) population size because:

1. Unequal sex ratio: if there are 100 males and 900 females, $N_e$ is much less than 1000.

$$N_e = \frac{4N_m N_f}{N_m + N_f} = \frac{4 \times 100 \times 900}{1000} = 360$$

2. Variation in reproductive success: if some individuals produce many offspring and others produce none, $N_e$ is reduced.

3. Fluctuating population size: $N_e$ is closer to the harmonic mean of population sizes over time, which is dominated by the smallest population size.

$$\frac{1}{N_e} = \frac{1}{t}\left(\frac{1}{N_1} + \frac{1}{N_2} + \cdots + \frac{1}{N_t}\right)$$

## 20. Chromosome Mutations and Karyotyping

### 20.1 Types of Chromosome Mutation

| Type | Description | Example |
| ---- | ----------- | ------- |
| Deletion | Loss of a segment of a chromosome | Cri du chat syndrome (deletion of part of chromosome 5) |
| Duplication | A segment of a chromosome is repeated | Charcot-Marie-Tooth disease (duplication on chromosome 17) |
| Inversion | A segment of a chromosome is reversed end-to-end | Can disrupt gene function if break occurs within a gene |
| Translocation | A segment of one chromosome is transferred to a non-homologous chromosome | Philadelphia chromosome (translocation between chromosomes 9 and 22; causes chronic myeloid leukaemia) |
| Non-disjunction | Failure of homologous chromosomes or sister chromatids to separate during meiosis | Down syndrome (trisomy 21); Turner syndrome (XO); Klinefelter syndrome (XXY) |

### 20.2 Aneuploidy

| Condition | Karyotype | Sex | Key Features |
| --------- | --------- | --- | ------------ |
| Down syndrome | 47,XX,+21 or 47,XY,+21 | M or F | Intellectual disability; characteristic facial features; congenital heart defects; increased risk of leukaemia; reduced life expectancy |
| Edwards syndrome | 47,XX,+18 or 47,XY,+18 | M or F | Severe intellectual disability; heart defects; low birth weight; most die within first year |
| Patau syndrome | 47,XX,+13 or 47,XY,+13 | M or F | Severe brain and facial abnormalities; heart defects; most die within first 3 months |
| Turner syndrome | 45,X | F | Short stature; webbed neck; infertility (streak ovaries); normal intelligence |
| Klinefelter syndrome | 47,XXY | M | Tall stature; small testes; infertility; gynaecomastia (breast development); mild learning difficulties |
| Triple X syndrome | 47,XXX | F | Usually asymptomatic; may have tall stature and mild learning difficulties |
| Jacob's syndrome | 47,XYY | M | Usually asymptomatic; taller than average; normal fertility |

### 20.3 Karyotyping

Karyotyping involves arranging chromosomes in pairs according to size, banding pattern, and centromere position:

1. Cells are cultured and arrested in metaphase (using colchicine, which prevents spindle fibre formation).
2. Cells are swollen in hypotonic solution (to spread chromosomes).
3. Cells are fixed, dropped onto a slide, and stained (Giemsa stain produces characteristic banding patterns -- G-banding).
4. Chromosomes are photographed and arranged in homologous pairs.

Uses: diagnosing chromosomal abnormalities (aneuploidy, translocations, deletions); determining sex; prenatal diagnosis (from amniocentesis or chorionic villus sampling).

### 20.4 Pedigree Analysis

| Pattern | Interpretation | Key Features |
| ------- | -------------- | ------------ |
| Autosomal dominant | Affected individuals in every generation; both sexes affected equally; affected individual usually has at least one affected parent | Non-affected individuals do not transmit the condition |
| Autosomal recessive | May skip generations; both sexes affected equally; affected individuals often have unaffected parents | More common in consanguineous marriages |
| X-linked recessive | More males than females affected; affected males pass the allele to all daughters (who are carriers) but not to sons; carrier females pass to 50% of sons | Cannot be transmitted from father to son |
| X-linked dominant | Affected males pass to all daughters; affected females pass to 50% of children; more females than males affected | Can be transmitted from father to daughter |
| Mitochondrial | Transmitted only from mother to all children; both sexes affected | Father does not transmit |

## 21. Gene Linkage and Chromosome Mapping

### 21.1 Linked Genes

Genes on the same chromosome are said to be **linked**. They do not assort independently (they violate Mendel's law of independent assortment).

- **Complete linkage**: genes are so close together on the same chromosome that they are always inherited together (no crossing over between them). This is rare.
- **Incomplete linkage**: genes are on the same chromosome but crossing over can occur between them, producing recombinant offspring. The frequency of recombination depends on the distance between the genes.

### 21.2 Calculating Recombination Frequency

Recombination frequency $= \frac{\text{number of recombinant offspring}}{\text{total number of offspring}} \times 100\%$

**Example:** A dihybrid cross involving two linked genes (A/a and B/b) produces:

| Phenotype | Number |
| --------- | ------ |
| AB (parental) | 420 |
| ab (parental) | 380 |
| Ab (recombinant) | 100 |
| aB (recombinant) | 100 |
| **Total** | **1000** |

Recombination frequency $= \frac{100 + 100}{1000} \times 100\% = 20\%$

The recombination frequency equals the map distance in centiMorgans (cM). These genes are 20 cM apart.

### 21.3 Sex Linkage

Genes on the X chromosome are said to be **sex-linked**. Males (XY) have only one X chromosome, so a single recessive allele on the X chromosome will be expressed (males are hemizygous for X-linked genes).

**Example:** Haemophilia A (factor VIII deficiency).

| Genotype | Sex | Phenotype |
| -------- | --- | --------- |
| $\mathrm{X^H X^H}$ | Female | Normal |
| $\mathrm{X^H X^h}$ | Female | Carrier (normal, because the normal allele is dominant) |
| $\mathrm{X^h X^h}$ | Female | Haemophilia (rare, requires father with haemophilia and carrier mother) |
| $\mathrm{X^H Y}$ | Male | Normal |
| $\mathrm{X^h Y}$ | Male | Haemophilia |

**Cross:** carrier female ($\mathrm{X^H X^h}$) $\times$ normal male ($\mathrm{X^H Y}$):

| | $\mathrm{X^H}$ (father) | Y (father) |
| --- | --- | --- |
| $\mathrm{X^H}$ (mother) | $\mathrm{X^H X^H}$ (normal female) | $\mathrm{X^H Y}$ (normal male) |
| $\mathrm{X^h}$ (mother) | $\mathrm{X^H X^h}$ (carrier female) | $\mathrm{X^h Y}$ (affected male) |

Offspring: 25% normal female, 25% carrier female, 25% normal male, 25% affected male.

## 22. Epistasis: Advanced Patterns

### 22.1 Recessive Epistasis (9:3:4 ratio)

When the homozygous recessive genotype at one locus (the epistatic locus) masks the expression of alleles at another locus (the hypostatic locus).

**Example:** Coat colour in Labrador retrievers. Gene B determines black (B) vs brown (b). Gene E determines pigment deposition (E) vs no pigment (e). The homozygous recessive ee masks the B/b locus.

| Genotype | Phenotype | Ratio |
| -------- | --------- | ----- |
| B_E_ | Black | 9 |
| bbE_ | Brown | 3 |
| __ee | Yellow | 4 |
| **Total** | | **16** |

### 22.2 Dominant Epistasis (12:3:1 ratio)

When the dominant allele at one locus masks the expression of alleles at another locus.

**Example:** Squash colour. Gene W (white, dominant) masks gene Y (yellow vs green).

| Genotype | Phenotype | Ratio |
| -------- | --------- | ----- |
| W_Y_ | White | 9 |
| W_yy | White | 3 |
| wwY_ | Yellow | 3 |
| wwyy | Green | 1 |
| **Total** | | **16** |

### 22.3 Complementary Gene Action (9:7 ratio)

When two different genes are required for a phenotype; the dominant allele of both genes must be present for the trait to be expressed.

**Example:** Flower colour in sweet peas. Gene C and gene P are both required for purple flowers. If either is homozygous recessive, the flowers are white.

| Genotype | Phenotype | Ratio |
| -------- | --------- | ----- |
| C_P_ | Purple | 9 |
| C_pp | White | 3 |
| ccP_ | White | 3 |
| ccpP | White | 1 |
| **Total** | | **16** |

### 22.4 Duplicate Gene Action (15:1 ratio)

When either of two genes (with dominant alleles) can independently produce the same phenotype.

**Example:** Seed shape in shepherd's purse. Either gene A or gene B (dominant) produces triangular seeds. Only aabb produces oval seeds.

| Genotype | Phenotype | Ratio |
| -------- | --------- | ----- |
| A_B_ | Triangular | 9 |
| A_bb | Triangular | 3 |
| aaB_ | Triangular | 3 |
| aabb | Oval | 1 |
| **Total** | | **16** |

## 23. Evolutionary Developmental Biology (Evo-Devo)

### 23.1 Homeobox Genes

Homeobox (Hox) genes are transcription factors that control the development of body plan along the anterior-posterior axis. They contain a conserved 180-base-pair sequence (the homeobox) that encodes a 60-amino-acid DNA-binding domain (the homeodomain).

**Key features:**
- Hox genes are arranged in clusters on chromosomes in the same order as the body regions they control (colinearity).
- The first Hox gene in the cluster controls the most anterior structures; the last controls the most posterior structures.
- They are highly conserved across animals (the same genes control body plan in fruit flies, mice, and humans).
- Mutations in Hox genes can cause dramatic body plan changes (e.g., Antennapedia mutation in _Drosophila_: legs grow in place of antennae).

### 23.2 Hox Gene Clusters in Different Organisms

| Organism | Number of Hox Clusters | Chromosomes |
| -------- | ---------------------- | ----------- |
| _Drosophila_ (fruit fly) | 1 cluster (8 genes) | 1 |
| Mouse | 4 clusters (HoxA, HoxB, HoxC, HoxD; 13 genes each) | 6, 11, 15, 2 |
| Human | 4 clusters (same as mouse) | 7, 17, 12, 2 |
| Cephalochordates (lancelet) | 1 cluster (14 genes) | 1 |

The expansion from 1 cluster (invertebrates) to 4 clusters (vertebrates) occurred through genome duplication events early in vertebrate evolution.

### 23.3 Developmental Timing and Paedomorphosis

**Paedomorphosis** occurs when the timing of development is altered so that sexually mature adults retain juvenile features:

- **Progenesis**: the organism reaches sexual maturity while still in a juvenile body form (e.g., axolotl retains gills and aquatic lifestyle throughout life).
- **Neoteny**: the somatic development rate is slowed relative to the reproductive rate (e.g., human skull shape is paedomorphic relative to other primates -- we retain a flatter face and larger brain case, resembling juvenile apes).

### 23.4 Evo-Devo: Connecting Development to Evolution

Evo-Devo reveals that small changes in the regulation of developmental genes (rather than changes in the genes themselves) can produce major morphological changes:

- Changes in Hox gene expression boundaries can alter segment identity (e.g., changes in Hox gene expression are associated with the evolution of the vertebrate neck and thorax).
- Changes in the expression of _BMP4_ (bone morphogenetic protein 4) and _calmodulin_ explain differences in beak shape in Darwin's finches.
- Changes in the regulation of the _ Pitx1_ gene explain the loss of pelvic fins in stickleback fish (the gene is still present but not expressed in pelvic tissue).

## 24. Quantitative Genetics: Polygenic Inheritance

### 24.1 Continuous Variation

Most phenotypic traits show continuous variation (a smooth range of phenotypes, e.g., height, weight, skin colour, intelligence). This is because they are controlled by:

- **Multiple genes (polygenes)**: each contributing a small additive effect to the phenotype.
- **The environment**: modifying the expression of the genotype.

**Example: Human height.** Approximately 700 genetic loci have been identified that contribute to height variation, each accounting for a very small effect. Together, these loci explain approximately 80% of the variation in height (the heritability). The remaining 20% is due to environmental factors (nutrition, childhood health).

### 24.2 Polygenic Inheritance: A Model

Consider a trait controlled by two genes (A/a and B/b), each with two alleles. The capital letters contribute one unit of "height" and the lowercase letters contribute nothing.

| Genotype | Number of Capital Alleles | Phenotype |
| -------- | -------------------------- | --------- |
| AABB | 4 | Tallest |
| AABb, AaBB | 3 | Tall |
| AaBb, AAbb, aaBB | 2 | Medium |
| Aabb, aaBb | 1 | Short |
| aabb | 0 | Shortest |

The phenotypic ratio from a dihybrid cross (AaBb $\times$ AaBb) would be:

1 : 4 : 6 : 4 : 1 (5 categories)

This produces a normal distribution (bell curve) when plotted as a histogram.

### 24.3 Heritability

Heritability ($h^2$) is the proportion of phenotypic variation that is due to genetic variation (as opposed to environmental variation):

$$h^2 = \frac{V_G}{V_P} = \frac{V_G}{V_G + V_E}$$

Where $V_G$ = genetic variance; $V_E$ = environmental variance; $V_P = V_G + V_E$ = total phenotypic variance.

| Trait | Approximate Heritability |
| ----- | ----------------------- |
| Human height | 0.80 (80%) |
| Human IQ | 0.50--0.80 |
| Type 1 diabetes | 0.30--0.40 |
| Skin colour | 0.70--0.90 |
| Milk yield in cattle | 0.30--0.40 |

High heritability does not mean a trait cannot be influenced by the environment. For example, human height has high heritability, but malnutrition during childhood significantly reduces adult height.

## 25. Population Genetics: The Founder Effect and Genetic Drift

### 25.1 The Founder Effect in Detail

When a small group of individuals colonises a new area, the genetic composition of the new population may be very different from the original population due to sampling error:

**Example: The Amish of Pennsylvania**
- Founded by approximately 200 individuals in the 18th century.
- One of the founders carried a mutation for Ellis-van Creveld syndrome (a rare form of dwarfism with polydactyly).
- The frequency of this allele in the Amish population is approximately 0.07 (7%), compared to < 0.001 in the general population.
- This is an example of the founder effect amplifying a rare allele.

**Example: Pingelap atoll**
- A typhoon in approximately 1775 reduced the population of Pingelap (Micronesia) to approximately 20 survivors.
- One survivor was heterozygous for achromatopsia (total colour blindness).
- The current population has approximately 5% affected individuals, compared to < 0.003% in the general population.

### 25.2 The Bottleneck Effect in Conservation

Genetic bottlenecks reduce genetic diversity, making populations more vulnerable to:

1. **Inbreeding depression**: increased homozygosity exposes deleterious recessive alleles, reducing fitness.
2. **Reduced adaptive potential**: with less genetic variation, the population is less able to adapt to changing environments (e.g., new diseases, climate change).
3. **Accumulation of deleterious mutations**: in small populations, natural selection is less effective at removing slightly deleterious mutations (genetic drift dominates).

**Conservation implications:**
- Minimum viable population size (MVP): the minimum population size needed for a species to have a 95% probability of surviving for 100 years. For many large mammals, MVP is estimated at 500--5,000 individuals.
- The "50/500 rule": at least 50 individuals are needed for short-term survival (avoiding inbreeding depression); at least 500 are needed for long-term evolutionary potential (maintaining adaptive variation).

## 26. Genetic Engineering: Applications in Agriculture

### 26.1 Golden Rice

(See Section 35.1 for full case study.)

### 26.2 Disease-Resistant Crops

| Crop | Disease Resistance Gene | Source of Gene | Status |
| ---- | -------------------- | -------------- | ------ |
| Papaya | Papaya ringspot virus coat protein gene | Papaya | Commercially available since 1998; saved the Hawaiian papaya industry |
| Potato | Resistance to late blight (_Phytophthora infestans_) | Wild potato species | Transferred using Agrobacterium-mediated transformation |
| Wheat | Resistance to stem rust (_Puccinia graminis_) | Wheat relative | Field trials; some varieties approved |
| Banana | Resistance to Fusarium wilt (Panama disease) | Wild banana species | Field trials; resistant varieties being developed |
| Banana | Resistance to Xanthomonas wilt | Wild _Musa_ species | Field trials in East Africa |

### 26.3 Nitrogen-Fixing Crops

Nitrogen is often the limiting nutrient for plant growth. Nitrogen-fixing bacteria (e.g., _Rhizobium_ in legume root nodules, _Azotobacter_ free-living) convert atmospheric $\mathrm{N_2}$ to $\mathrm{NH_3}$.

Engineering nitrogen fixation into cereals (wheat, rice, maize) would:
- Reduce dependence on synthetic nitrogen fertilisers (which are energy-intensive to produce and cause environmental damage when they run off into waterways).
- Reduce agricultural costs for farmers in developing countries.
- Reduce greenhouse gas emissions from fertiliser production.

**Challenges:**
- Nitrogenase (the enzyme that fixes $\mathrm{N_2}$) is oxygen-sensitive. Cereals produce $\mathrm{O_2}$ during photosynthesis, which would inactivate nitrogenase.
- Nitrogen fixation requires large amounts of ATP (16 ATP per $\mathrm{N_2}$ fixed).
- The pathway involves many genes (nif genes in _Klebsiella pneumoniae_), which would need to be transferred and correctly expressed.

### 26.4 Herbicide-Resistant Crops

| Crop | Herbicide Resistance Gene | Company | Trade Name |
| ---- | ----------------------- | ------- | --------- |
| Soybean | EPSPS (glyphosate tolerance) | Monsanto | Roundup Ready |
| Canola (oilseed rape) | Bar gene (glufosinate tolerance) | Bayer | Liberty Link |
| Maize | PAT/bar gene (glufosinate tolerance) | Bayer | Liberty Link |
| Cotton | Cry genes + EPSPS | Monsanto | Bollgard II + Roundup Ready |

## 27. Genetic Counselling and Genetic Screening Programmes

### 27.1 Genetic Counselling Process

| Step | Description |
| ---- | ----------- |
| 1. Family history | Construct a pedigree chart to identify inheritance patterns and risk |
| 2. Genetic testing | Carrier testing, prenatal testing (CVS, amniocentesis), or predictive testing for late-onset conditions |
| 3. Risk assessment | Calculate recurrence risk based on Mendelian inheritance patterns |
| 4. Information and support | Explain the condition, inheritance pattern, options, and implications; non-directive counselling |
| 5. Decision-making support | Help individuals/couples make informed decisions about reproduction, testing, and treatment |

### 27.2 Population Screening Programmes

| Programme | Target Population | Test | Purpose |
| --------- | ---------------- | ---- | ------- |
| Newborn blood spot (heel prick) | All newborns | Tandem MS (mass spectrometry) | Detect PKU, congenital hypothyroidism, sickle cell disease, cystic fibrosis |
| Antenatal screening | Pregnant women | Blood tests (AFP, hCG, PAPP-A); nuchal translucency scan | Risk assessment for Down syndrome, Edwards syndrome, Patau syndrome |
| Cervical screening (smear test) | Women aged 25--64 | HPV DNA test + cytology | Detect HPV infection and pre-cancerous cervical cells |
| Breast screening (mammogram) | Women aged 50--71 | X-ray imaging | Early detection of breast cancer |

### 27.3 Carrier Testing

Carrier testing identifies individuals who carry one copy of a recessive allele:

| Condition | Gene | Carrier Frequency | Populations Most Affected |
| --------- | ---- | ---------------- | ------------------------ |
| Cystic fibrosis | CFTR ($\Delta$F508 most common mutation) | 1 in 25 (UK Caucasian) | Northern European descent |
| Sickle cell disease | HBB (glutamic acid $\to$ valine at position 6) | 1 in 10 (UK African-Caribbean) | African, Caribbean, Mediterranean, Middle Eastern |
| Tay-Sachs disease | HEXA | 1 in 27 (Ashkenazi Jewish) | Ashkenazi Jewish descent |
| Thalassaemia | HBA/HBB genes | 1 in 7--15 (Mediterranean, South Asian) | Mediterranean, Middle Eastern, South Asian |

## 28. Epistasis: Gene Interactions

### 28.1 What Is Epistasis?

Epistasis occurs when the allele of one gene masks or modifies the expression of alleles at another gene locus.

| Type | Description | Example | Ratio (dihybrid cross) |
| ---- | ----------- | ------- | ---------------------- |
| Recessive epistasis | Homozygous recessive at one locus (aa) masks expression of alleles at the other locus | Coat colour in mice: B (black) > b (brown); C (colour pigment) > c (no pigment, albino). cc masks B/b | 9:3:4 |
| Dominant epistasis | Dominant allele at one locus (A) masks expression of alleles at the other locus | Feather colour in poultry: I (inhibits colour) > i (allows colour); B (black) > b (brown). I_ masks B/b | 12:3:1 |
| Complementary gene action | Both dominant alleles (A_ and B_) are needed for a trait | Flower colour in sweet peas: C and P both needed for purple flowers. C_pp or ccP_ = white | 9:7 |
| Duplicate gene action | Either dominant allele alone (A_ or B_) is sufficient | Seed shape in shepherd's purse: A_ or B_ gives triangular seeds; aabb gives oval seeds | 15:1 |
| Supplementary gene action | One dominant allele (A_) produces a trait; B_ modifies it (9:3:4 but with modification) | Coat colour in Labrador retrievers: E (pigment) > e (no pigment, yellow); B (black) > b (brown). ee = yellow; E_B_ = black; E_bb = brown | 9:3:4 |

### 28.2 Worked Example: Recessive Epistasis in Mice

**Cross:** Two double heterozygotes: $\mathrm{BbCc} \times \mathrm{BbCc}$

| Genotype | Phenotype | Number |
| -------- | --------- | ------ |
| B_C_ | Black | 9 |
| bbC_ | Brown | 3 |
| B_cc | Albino (cc masks B) | 3 |
| bbcc | Albino (cc masks bb) | 1 |

Phenotypic ratio: **9 black : 3 brown : 4 albino**

## 29. Gene Linkage and Crossing Over

### 29.1 Linked Genes

Genes on the same chromosome are linked and tend to be inherited together (do not assort independently):

| Feature | Independent Assortment (Mendel's 2nd Law) | Gene Linkage |
| ------- | ------------------------------------------ | ------------ |
| Genes located | On different chromosomes | On the same chromosome |
| Gametes produced | Equal proportions of all 4 types (1:1:1:1) | Parental types predominate; recombinant types are less common |
| Test cross ratio | 1:1:1:1 | Deviation from 1:1:1:1; depends on distance between genes |

### 29.2 Calculating Recombination Frequency

$$\text{Recombination frequency} = \frac{\text{Number of recombinant offspring}}{\text{Total number of offspring}} \times 100$$

**Example:** A test cross of a double heterozygote produces 400 offspring:
- Parental types: 180 AB/ab + 170 Ab/aB = 350
- Recombinant types: 15 Ab/aB + 35 aB/Ab = 50

$$\text{Recombination frequency} = \frac{50}{400} \times 100 = 12.5\%$$

The genes are 12.5 map units (centimorgans, cM) apart.

### 29.3 Sex Linkage

Genes on the X chromosome show sex-linked inheritance patterns:

| Feature | Description |
| ------- | ----------- |
| Males (XY) | Have only one X chromosome; express the allele on their single X (hemizygous); cannot be carriers |
| Females (XX) | Have two X chromosomes; can be homozygous, heterozygous (carriers), or homozygous recessive |
| Criss-cross inheritance | Affected father passes the X-linked allele to ALL his daughters (who become carriers) and NONE of his sons (who receive his Y chromosome) |
| Examples | Colour blindness (red-green, X-linked recessive); haemophilia A (factor VIII deficiency, X-linked recessive); Duchenne muscular dystrophy (X-linked recessive) |

## 30. Population Genetics: The Hardy-Weinberg Principle

### 30.1 The Hardy-Weinberg Equation

For a gene with two alleles, $p$ and $q$:

$$p + q = 1$$
$$p^2 + 2pq + q^2 = 1$$

| Symbol | Meaning |
| ------ | ------- |
| $p$ | Frequency of the dominant allele |
| $q$ | Frequency of the recessive allele |
| $p^2$ | Frequency of the homozygous dominant genotype |
| $2pq$ | Frequency of the heterozygous genotype |
| $q^2$ | Frequency of the homozygous recessive genotype |

### 30.2 Assumptions (Conditions for Equilibrium)

| Assumption | What It Means |
| ---------- | ------------- |
| Large population | No genetic drift (random fluctuations in allele frequencies) |
| Random mating | No sexual selection; individuals mate without regard to genotype |
| No mutations | Allele frequencies do not change due to new mutations |
| No migration (no gene flow) | No individuals enter or leave the population |
| No natural selection | All genotypes have equal fitness; no allele is favoured |

### 30.3 Worked Example

Cystic fibrosis is caused by a recessive allele (f). The incidence of cystic fibrosis is 1 in 2,500.

$$q^2 = \frac{1}{2500} = 0.0004$$
$$q = \sqrt{0.0004} = 0.02$$
$$p = 1 - 0.02 = 0.98$$

Carrier frequency ($2pq$):
$$2pq = 2 \times 0.98 \times 0.02 = 0.0392 \approx \frac{1}{25}$$

So approximately 1 in 25 people is a carrier of cystic fibrosis.

## 31. Chi-Squared ($\chi^2$) Test

### 31.1 When to Use

The chi-squared test determines whether observed data deviates significantly from expected ratios:

$$\chi^2 = \sum \frac{(O - E)^2}{E}$$

Where $O$ = observed value, $E$ = expected value.

### 31.2 Worked Example

A monohybrid cross of tall (T) and dwarf (t) plants is expected to produce a 3:1 ratio. The actual results were: 78 tall, 22 dwarf. Total = 100.

| Phenotype | Observed ($O$) | Expected ($E$) | $(O - E)^2 / E$ |
| --------- | ------------- | ------------- | --------------- |
| Tall | 78 | 75 | $(78-75)^2 / 75 = 9/75 = 0.12$ |
| Dwarf | 22 | 25 | $(22-25)^2 / 25 = 9/25 = 0.36$ |
| **Total** | **100** | **100** | $\chi^2 = 0.12 + 0.36 = 0.48$ |

Degrees of freedom = number of categories - 1 = 2 - 1 = 1.

Critical value at $p = 0.05$ with 1 df = 3.841.

Since $0.48 < 3.841$, we accept the null hypothesis: the observed results are consistent with the expected 3:1 ratio.

### 31.3 Chi-Squared Rules

| Rule | Description |
| ---- | ----------- |
| Null hypothesis | There is no significant difference between observed and expected values |
| Alternative hypothesis | There is a significant difference |
| If $\chi^2 >$ critical value | Reject the null hypothesis (difference is significant) |
| If $\chi^2 <$ critical value | Accept the null hypothesis (difference is not significant; any difference is due to chance) |
| Conditions | Expected values must be $\geq 5$ in each category; data must be in categories (not continuous) |

## 32. Continuous and Discontinuous Variation

### 32.1 Comparison

| Feature | Continuous Variation | Discontinuous Variation |
| ------- | ------------------- | --------------------- |
| Definition | Characteristics that can take any value within a range (quantitative) | Characteristics that fall into distinct categories (qualitative) |
| Genetic basis | Polygenic (many genes, each with a small additive effect) | Monogenic (single gene; few alleles) |
| Environmental influence | Significant (environment modifies the phenotype) | Little or none (phenotype is determined almost entirely by genotype) |
| Distribution | Normal distribution (bell curve) when plotted | Discrete categories (bar chart) |
| Examples | Height, weight, skin colour, intelligence, milk yield in cows | Blood group, eye colour, sex, flower colour in peas, tongue rolling, earlobe attachment |

### 32.2 Polygenic Inheritance

Height is a classic example of polygenic inheritance:

| Feature | Description |
| ------- | ----------- |
| Multiple genes | At least 700 genes influence height in humans |
| Additive effect | Each allele contributes a small amount to the phenotype |
| Environmental factors | Nutrition, health, and disease in childhood significantly affect final height |
| Normal distribution | Most people are near the average height; very few are extremely tall or short |

## 33. Operon Model (Gene Regulation in Prokaryotes)

### 33.1 The lac Operon

The lac operon in _E. coli_ controls the metabolism of lactose:

| Component | Description |
| --------- | ----------- |
| Structural genes | _lacZ_ ($\beta$-galactosidase; breaks lactose into glucose + galactose); _lacY_ (lactose permease; transports lactose into the cell) |
| Promoter | Region where RNA polymerase binds to transcribe the structural genes |
| Operator | Region where the lac repressor binds; when repressor is bound, RNA polymerase cannot transcribe |
| Regulatory gene (_lacI_) | Located upstream; produces the lac repressor protein (constitutively expressed) |

### 33.2 lac Operon Regulation

| Condition | Repressor | Transcription | Explanation |
| --------- | --------- | ------------- | ----------- |
| Lactose absent, glucose present | Bound to operator | OFF | Repressor blocks RNA polymerase; no lactose to metabolise |
| Lactose present, glucose absent | Not bound (inactivated by allolactose) | ON | Allolactose (isomer of lactose) binds to the repressor; repressor changes shape and detaches; RNA polymerase can transcribe the structural genes |
| Lactose present, glucose present | Partially repressed | LOW | cAMP levels are low (glucose inhibits adenylate cyclase); CAP-cAMP complex does not form; RNA polymerase binds poorly to the promoter |
| Lactose absent, glucose absent | Bound to operator | OFF | No lactose to inactivate repressor; structural genes not needed |

## 34. Genetic Screening and Testing

### 34.1 Types of Genetic Tests

| Test Type | When It Is Done | What It Detects |
| --------- | -------------- | --------------- |
| Pre-implantation genetic diagnosis (PGD) | Before embryo implantation (IVF) | Single-gene disorders; chromosomal abnormalities |
| Prenatal diagnosis | During pregnancy | Down syndrome (amniocentesis at 15--20 weeks; CVS at 10--13 weeks); sickle cell disease; cystic fibrosis |
| Newborn screening | Shortly after birth | PKU; congenital hypothyroidism; sickle cell disease |
| Carrier testing | Before or during pregnancy (or at any time) | Carrier status for recessive disorders (cystic fibrosis, sickle cell, Tay-Sachs) |
| Predictive testing | In adulthood (for late-onset conditions) | Huntington's disease; BRCA1/BRCA2 (breast/ovarian cancer); familial hypercholesterolaemia |

### 34.2 Amniocentesis vs Chorionic Villus Sampling

| Feature | Amniocentesis | Chorionic Villus Sampling (CVS) |
| ------- | ------------- | ----------------------------- |
| Timing | 15--20 weeks of pregnancy | 10--13 weeks of pregnancy |
| Procedure | Needle through the abdomen into the amniotic cavity; amniotic fluid (containing fetal cells) is withdrawn | Needle through the abdomen or cervix; sample of chorionic villi (placental tissue) is taken |
| Risk of miscarriage | ~0.5--1% | ~1--2% (slightly higher risk) |
| Results available | 2--3 weeks | 1--2 weeks (faster) |
| Conditions detected | Chromosomal abnormalities (e.g., Down syndrome); some single-gene disorders | Same as amniocentesis |

## 35. Pharmacogenomics

### 35.1 What Is Pharmacogenomics?

Pharmacogenomics is the study of how genetic variation affects an individual's response to drugs.

| Example | Gene | Effect on Drug Response |
| ------- | ---- | ---------------------- |
| Warfarin dosing | CYP2C9 and VKORC1 | Variants in these genes affect warfarin metabolism and sensitivity; genetic testing can guide dosing to reduce bleeding risk |
| Clopidogrel (antiplatelet) | CYP2C19 | Poor metabolisers (CYP2C19*2 allele) cannot activate clopidogrel effectively; increased risk of cardiovascular events |
| Abacavir (HIV drug) | HLA-B*57:01 | Carriers of this allele are at high risk of severe hypersensitivity reaction; testing before prescription prevents this |
| Codeine | CYP2D6 | Ultra-rapid metabolisers convert codeine to morphine too quickly (risk of respiratory depression); poor metabolisers get no pain relief |
| 5-Fluorouracil (chemotherapy) | DPYD | Deficiency in DPD enzyme (encoded by DPYD) leads to severe, potentially fatal toxicity from standard doses |

### 35.2 Benefits of Pharmacogenomics

| Benefit | Description |
| ------- | ----------- |
| Personalised dosing | Right drug, right dose, right patient; avoids trial-and-error prescribing |
| Reduced adverse drug reactions | Identifies patients at risk of severe side effects before treatment |
| Improved efficacy | Ensures patients receive drugs that will work for their genotype |
| Cost savings | Avoids wasted prescriptions and hospitalisations from adverse reactions |

## 36. CRISPR-Cas9 Gene Editing

### 36.1 How CRISPR-Cas9 Works

| Component | Description |
| --------- | ----------- |
| Guide RNA (gRNA) | A 20-nucleotide RNA sequence complementary to the target DNA sequence; guides Cas9 to the correct location |
| Cas9 nuclease | An enzyme that cuts both strands of DNA at the site specified by the gRNA (creates a double-strand break) |
| PAM sequence | Protospacer adjacent motif (5'-NGG-3'); must be present adjacent to the target sequence for Cas9 to cut; provides target specificity |
| Repair template | A DNA template supplied by the scientist; contains the desired sequence to be inserted (for gene correction or insertion) |

### 36.2 DNA Repair After CRISPR Cut

| Repair Pathway | What Happens | Use |
| -------------- | ----------- | --- |
| Non-homologous end joining (NHEJ) | The two broken ends of DNA are rejoined; often introduces insertions or deletions (indels) that disrupt the gene | Gene knockout (disrupting a gene to study its function) |
| Homology-directed repair (HDR) | The cell uses the supplied repair template to accurately repair the break | Gene correction (fixing a mutation) or gene insertion (adding a new gene) |

### 36.3 Applications of CRISPR

| Application | Description |
| ----------- | ----------- |
| Disease research | Creating animal models of human diseases by knocking out specific genes |
| Gene therapy | Correcting genetic mutations in human cells (e.g., sickle cell disease, beta-thalassaemia) |
| Agriculture | Creating crops with improved traits (drought resistance, disease resistance, increased yield, nutritional enhancement) |
| Diagnostics | SHERLOCK and DETECTR platforms use CRISPR for rapid detection of pathogens (e.g., SARS-CoV-2) |
| Xenotransplantation | Editing pig genomes to reduce rejection of pig organs transplanted into humans |

### 36.4 Ethical Considerations

| Issue | Description |
| ----- | ----------- |
| Off-target effects | CRISPR may cut at unintended sites in the genome, causing mutations with unknown consequences |
| Germline editing | Changes made to germline cells (sperm, eggs, embryos) are heritable; raises ethical concerns about editing the human germline |
| Designer babies | CRISPR could theoretically be used for non-medical enhancement (e.g., intelligence, physical traits) |
| Consent | Future generations cannot consent to heritable changes made to their genome |
| Equity | Expensive; may only be available to the wealthy; could increase social inequality |

## 51. Pharmacogenomics

### 51.1 What Is Pharmacogenomics?

Pharmacogenomics is the study of how a person's genetic makeup affects their response to drugs. It combines pharmacology (the science of drugs) and genomics (the study of genes and their functions).

### 51.2 Key Examples

| Drug | Gene(s) Involved | Effect of Genetic Variation |
| ---- | --------------- | ------------------------- |
| Warfarin (anticoagulant) | _CYP2C9_, _VKORC1_ | Variants in _CYP2C9_ slow warfarin metabolism (risk of bleeding); variants in _VKORC1_ increase sensitivity to warfarin |
| Abacavir (HIV drug) | _HLA-B*57:01_ | Carriers develop severe hypersensitivity reaction; testing before prescription prevents this |
| Codeine (analgesic) | _CYP2D6_ | Ultra-rapid metabolisers convert codeine to morphine too quickly (risk of respiratory depression); poor metabolisers get no pain relief |
| Clopidogrel (antiplatelet) | _CYP2C19_ | Poor metabolisers cannot activate the prodrug; increased risk of stent thrombosis |
| 5-Fluorouracil (chemotherapy) | _DPYD_ | Deficiency in DPD enzyme leads to toxic accumulation; potentially fatal |

### 51.3 Clinical Implementation

| Step | Description |
| ---- | ----------- |
| 1. Genotype patient | Use microarray or PCR-based test to identify relevant gene variants before prescribing |
| 2. Interpret results | Compare patient genotype to known drug-gene associations |
| 3. Adjust prescription | Choose alternative drug, adjust dose, or increase monitoring |
| 4. Monitor outcome | Assess therapeutic response and adverse effects |

## 52. Genetic Counselling

### 52.1 What Is Genetic Counselling?

Genetic counselling is a process by which patients or relatives at risk of a genetic disorder are advised of the consequences and nature of the disorder, the probability of developing or transmitting it, and the options available for management and prevention.

### 52.2 The Genetic Counselling Process

| Step | Description |
| ---- | ----------- |
| 1. Pedigree analysis | Construct a family tree (pedigree chart) showing the inheritance pattern of the condition across generations |
| 2. Risk assessment | Calculate the probability of an individual inheriting or passing on the condition based on the mode of inheritance and pedigree data |
| 3. Genetic testing | Offer carrier testing, prenatal testing (amniocentesis, CVS), or predictive testing for adult-onset conditions (e.g., Huntington's disease) |
| 4. Explanation | Explain the results of genetic tests in clear, non-technical language; discuss the implications for the individual and family |
| 5. Support | Provide emotional and psychological support; refer to support groups; respect the individual's autonomy and right to make their own decisions |

### 52.3 Ethical Principles in Genetic Counselling

| Principle | Description |
| --------- | ----------- |
| Autonomy | The individual has the right to make their own informed decisions |
| Non-directiveness | The counsellor should not tell the individual what to do; they should provide information and support |
| Confidentiality | Genetic information about one individual may have implications for relatives; balancing confidentiality with the duty to warn is an ethical challenge |
| Informed consent | The individual must understand the purpose, risks, benefits, and limitations of genetic testing before agreeing to it |

## 53. Population Genetics

### 53.1 The Gene Pool

The gene pool is the total collection of all alleles of all genes present in a population at a given time.

### 53.2 Allele Frequency

$$p = \frac{\text{Number of copies of the dominant allele}}{\text{Total number of alleles in the population}}$$

$$q = \frac{\text{Number of copies of the recessive allele}}{\text{Total number of alleles in the population}}$$

Where $p + q = 1$.

### 53.3 Conditions for Hardy-Weinberg Equilibrium

| Condition | Why It Matters |
| --------- | -------------- |
| Large population size | Prevents genetic drift (random changes in allele frequency) |
| No mutations | Allele frequencies remain constant |
| No migration (no gene flow) | No new alleles enter or leave the population |
| Random mating | No sexual selection favouring particular genotypes |
| No natural selection | All genotypes have equal fitness (survival and reproduction) |

If all conditions are met: $p^2 + 2pq + q^2 = 1$

| Genotype | Frequency | Phenotype |
| -------- | --------- | --------- |
| $p^2$ (homozygous dominant) | $p^2$ | Dominant |
| $2pq$ (heterozygous) | $2pq$ | Dominant |
| $q^2$ (homozygous recessive) | $q^2$ | Recessive |

## 54. Chi-Squared Test

### 54.1 Purpose

The chi-squared ($\chi^2$) test is a statistical test used to determine whether the observed results of a cross differ significantly from the expected (predicted) results based on a genetic ratio.

### 54.2 Formula

$$\chi^2 = \sum \frac{(O - E)^2}{E}$$

Where:
- $O$ = observed value
- $E$ = expected value

### 54.3 Steps

| Step | Description |
| ---- | ----------- |
| 1. State the null hypothesis | There is no significant difference between observed and expected results; any difference is due to chance |
| 2. Calculate expected values | Multiply the total number of offspring by the expected ratio fraction (e.g., for a 3:1 ratio with 100 offspring: $E = 75$ and $25$) |
| 3. Calculate $\chi^2$ | Apply the formula for each category and sum the values |
| 4. Determine degrees of freedom | $df = n - 1$ (where $n$ is the number of categories/phenotypic classes) |
| 5. Compare to critical value | Look up the critical value in a chi-squared table at $p = 0.05$ (95% confidence level) with the appropriate degrees of freedom |
| 6. Conclusion | If $\chi^2$ calculated > critical value: reject the null hypothesis (the difference is significant; the observed results do not fit the expected ratio); if $\chi^2$ calculated < critical value: accept the null hypothesis (any difference is due to chance) |

---
:::
