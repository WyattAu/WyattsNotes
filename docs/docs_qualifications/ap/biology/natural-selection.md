---
title: Natural Selection
date: 2026-04-14
tags:
  - Biology
  - AP
categories:
  - Biology
slug: natural-selection
---

## Evolution and Natural Selection (CED Units 6-8)

### Darwin's Theory of Natural Selection

1. **Variation:** Individuals in a population exhibit heritable variation.
2. **Overproduction:** Populations produce more offspring than the environment can support.
3. **Competition:** Individuals compete for limited resources.
4. **Differential survival and reproduction:** Individuals with advantageous traits are more likely
   to survive and reproduce (natural selection).
5. **Descent with modification:** Over generations, favorable traits accumulate in the population,
   leading to evolution.

### Evidence for Evolution

1. **Fossil record:** Shows chronological sequence of organisms and transitional forms (e.g.,
   Archaeopteryx between dinosaurs and birds).
2. **Comparative anatomy:**
   - **Homologous structures:** Same evolutionary origin, different function (e.g., mammalian
     forelimb).
   - **Analogous structures:** Different origin, similar function (e.g., bird wing and insect wing).
   - **Vestigial structures:** Remnants of structures that had a function in ancestors (e.g., human
     appendix, whale pelvis).
3. **Comparative embryology:** Early embryonic stages of vertebrates are remarkably similar.
4. **Molecular biology:** DNA and protein sequences show relationships; more similar sequences
   indicate closer evolutionary relationships.
5. **Biogeography:** Geographic distribution of species reflects evolutionary history (e.g., island
   species resemble mainland species).

## Hardy-Weinberg Equilibrium (CED Unit 7)

The Hardy-Weinberg principle describes a hypothetical, non-evolving population. If a population is
in Hardy-Weinberg equilibrium, allele and genotype frequencies remain constant from generation to
generation.

### Equations

For a gene with two alleles ($A$ and $a$):

$$
p + q = 1
$$

$$
p^2 + 2pq + q^2 = 1
$$

where:

- $p$ = frequency of allele $A$
- $q$ = frequency of allele $a$
- $p^2$ = frequency of genotype $AA$
- $2pq$ = frequency of genotype $Aa$
- $q^2$ = frequency of genotype $aa$

### Conditions for Hardy-Weinberg Equilibrium

1. **No mutations:** No new alleles are introduced.
2. **Random mating:** Individuals mate without regard to genotype.
3. **No natural selection:** All genotypes have equal fitness.
4. **Extremely large population:** Genetic drift is negligible.
5. **No gene flow:** No migration into or out of the population.

If any condition is violated, the population evolves (allele frequencies change).

:::info[Worked Example 1]

In a population of 1000 individuals, 160 have the recessive phenotype (aa). Find the frequencies of
all genotypes and alleles.

$$
q^2 = \frac{160}{1000} = 0.16 \implies q = 0.4
$$

$$
p = 1 - 0.4 = 0.6
$$

$$
p^2 = (0.6)^2 = 0.36 \implies 360 \mathrm{ individuals (AA)}
$$

$$
2pq = 2(0.6)(0.4) = 0.48 \implies 480 \mathrm{ individuals (Aa)}
$$

Check: $360 + 480 + 160 = 1000$.

:::

:::info[Worked Example 2]

The frequency of the dominant allele for a trait is 0.7 in a population of 5000. How many
individuals are expected to be heterozygous?

$p = 0.7$, $q = 0.3$.

$2pq = 2(0.7)(0.3) = 0.42$.

Number of heterozygous individuals: $0.42 \times 5000 = 2100$.

Number showing the recessive phenotype: $q^2 \times 5000 = 0.09 \times 5000 = 450$.

:::

:::info[Worked Example 3]

16% of individuals in a population show the recessive phenotype. What percentage is heterozygous?

$q^2 = 0.16$, so $q = 0.4$, $p = 0.6$.

$2pq = 2(0.6)(0.4) = 0.48 = 48\%$.

:::

:::info[Worked Example 4]

A population has the following genotype frequencies: AA = 0.42, Aa = 0.36, aa = 0.22. Is this
population in Hardy-Weinberg equilibrium?

$p = p^2 + \frac{1}{2}(2pq) = 0.42 + 0.18 = 0.60$.

$q = q^2 + \frac{1}{2}(2pq) = 0.22 + 0.18 = 0.40$.

Check: $p + q = 0.60 + 0.40 = 1.00$. Good.

Expected frequencies: $p^2 = 0.36$, $2pq = 0.48$, $q^2 = 0.16$.

Observed: $p^2 = 0.42$, $2pq = 0.36$, $q^2 = 0.22$.

The observed and expected frequencies differ, so the population is not in Hardy-Weinberg
equilibrium. The excess of homozygotes (AA and aa) suggests non-random mating (possibly inbreeding
or assortative mating).

:::

## Mechanisms of Evolution

### Natural Selection

Three types based on the effect on the phenotype distribution:

1. **Directional selection:** Favors one extreme phenotype, shifting the distribution. Example:
   antibiotic resistance in bacteria; larger beak size during drought in Darwin's finches.

2. **Stabilizing selection:** Favors intermediate phenotypes, reducing variation. Example: human
   birth weight (very low and very high have higher mortality).

3. **Disruptive selection:** Favors both extreme phenotypes over intermediate. Example: beak size in
   African seedcracker finches (seeds available are either large or small).

**Summary table of selection types.**

| Type        | Effect on distribution    | Example                     |
| ----------- | ------------------------- | --------------------------- |
| Directional | Shifts toward one extreme | Antibiotic resistance       |
| Stabilizing | Narrows around the mean   | Human birth weight          |
| Disruptive  | Two peaks at extremes     | Seedcracker finch beak size |

**Worked Example: Directional selection in Darwin's finches.**

During a drought on the Galapagos Islands, the available seeds became larger and harder. Finches
with larger, stronger beaks could crack these seeds more efficiently and had higher survival and
reproductive success. The average beak size in the population increased over the drought period.
This is an example of directional selection. When the drought ended and smaller seeds became
available again, beak size shifted back towards the original average, demonstrating that natural
selection is responsive to environmental changes.

### Genetic Drift

Random changes in allele frequencies, more pronounced in small populations.

- **Founder effect:** A small group establishes a new population; allele frequencies may differ from
  the source population. Example: Amish population and Ellis-van Creveld syndrome.
- **Bottleneck effect:** A population is drastically reduced in size; genetic diversity is lost.
  Example: cheetahs have very low genetic diversity due to a past bottleneck.

**Key point:** Genetic drift reduces genetic variation within a population but can increase
differences between populations.

**Worked Example: The bottleneck effect.**

A population of 1000 birds has allele frequencies: $p = 0.5$, $q = 0.5$. A natural disaster kills
950 birds, leaving 50 survivors. By chance, the surviving 50 birds have allele frequencies:
$p = 0.8$, $q = 0.2$.

The population has bounced back to 1000 birds, but the allele frequencies remain $p = 0.8$,
$q = 0.2$ because the survivors passed on their alleles. Genetic diversity has been lost: the
frequency of allele $a$ has decreased from 0.5 to 0.2.

**Worked Example: The founder effect in the Amish population.**

The Amish population of Pennsylvania was founded by approximately 200 individuals. Among the
founders was one person carrying the allele for Ellis-van Creveld syndrome (a form of dwarfism).
Because the Amish population was small and isolated (high rate of intermarriage), the allele
frequency increased through genetic drift. Today, the incidence of this syndrome in the Amish
population is far higher than in the general population.

### Gene Flow (Migration)

Movement of alleles between populations through migration of individuals or gametes (pollen).

- **Tends to homogenize** allele frequencies between populations.
- Reduces genetic differences between populations.
- Can introduce new alleles into a population, increasing genetic diversity.

**Worked Example: Gene flow between two populations of mice.**

Two populations of mice live on opposite sides of a river. Population A has allele frequencies
$p = 0.9$, $q = 0.1$. Population B has $p = 0.3$, $q = 0.7$. If a flood allows mice from population
B to cross to population A and interbreed, gene flow will occur. The allele frequencies in
population A will shift towards those of population B (the frequency of allele $a$ will increase).
Over time, continued gene flow will make the two populations more genetically similar.

### Mutations

The ultimate source of new genetic variation.

- **Point mutations:** Change a single nucleotide (substitution, insertion, deletion).
- **Chromosomal mutations:** Duplications, inversions, translocations, deletions.
- Most mutations are neutral or harmful; rare beneficial mutations provide raw material for natural
  selection.
- The mutation rate is typically low (approximately $10^{-5}$ to $10^{-6}$ mutations per gene per
  generation), but in large populations with many individuals, mutations accumulate significantly
  over time.

### Sexual Selection

A form of natural selection based on mating success.

- **Intrasexual selection:** Competition within one sex (usually males) for access to mates.
  Example: male deer antlers for fighting.
- **Intersexual selection:** One sex (usually females) chooses mates based on preferred traits.
  Example: peacock tail feathers.
- Sexual selection can lead to the evolution of traits that reduce survival (e.g., a large,
  conspicuous peacock tail attracts predators) because the mating advantage outweighs the survival
  cost.

## Speciation (CED Unit 7)

### Species Concepts

- **Biological species concept:** A species is a group of actually or potentially interbreeding
  populations that are reproductively isolated from other such groups (Ernst Mayr).
- **Morphological species concept:** Based on physical characteristics.
- **Phylogenetic species concept:** Based on evolutionary history and shared derived
  characteristics.

### Reproductive Isolation

**Prezygotic barriers** (prevent mating or fertilization):

| Type                 | Description                          | Example                        |
| -------------------- | ------------------------------------ | ------------------------------ |
| Habitat isolation    | Different habitats                   | Lion vs tiger                  |
| Temporal isolation   | Different breeding seasons/times     | Skunks (spring vs fall mating) |
| Behavioral isolation | Different courtship rituals          | Bird songs                     |
| Mechanical isolation | Incompatible reproductive structures | Insect genitalia               |
| Gametic isolation    | Sperm cannot fertilize egg           | Sea urchin species             |

**Postzygotic barriers** (prevent viable, fertile offspring):

| Type                     | Description                                       | Example                      |
| ------------------------ | ------------------------------------------------- | ---------------------------- |
| Reduced hybrid viability | Offspring do not survive well                     | Frog species hybrids         |
| Reduced hybrid fertility | Offspring are sterile                             | Mule (horse $\times$ donkey) |
| Hybrid breakdown         | First-generation hybrids are fine, but F2 are not | Rice hybrids                 |

### Allopatric Speciation

Speciation that occurs when populations are geographically separated. Gene flow is interrupted, and
the populations diverge through genetic drift, natural selection, and/or mutation.

**Process:**

1. Geographic barrier separates a population.
2. Allele frequencies change independently in each population.
3. Reproductive isolation evolves.
4. If populations reunite, they may no longer interbreed.

**Worked Example: Allopatric speciation in the Kaibab squirrel.**

The Kaibab squirrel lives on the north rim of the Grand Canyon, while the Abert squirrel lives on
the south rim. The two populations were separated by the formation of the Grand Canyon approximately
10,000 years ago. Despite being very similar in appearance, they have evolved enough genetic
differences that they are now considered separate species. The Grand Canyon acts as a geographic
barrier that prevents gene flow.

### Sympatric Speciation

Speciation without geographic separation. Common in plants through polyploidy.

**Polyploidy:** An organism has more than two complete sets of chromosomes.

- **Autopolyploidy:** Duplication of the same genome (e.g., $4n$ from $2n$).
- **Allopolyploidy:** Combination of genomes from different species (e.g., hybridization followed by
  chromosome doubling).

### Adaptive Radiation

Rapid evolution of many species from a single ancestral species, typically when new ecological
niches become available. Examples: Darwin's finches on the Galapagos Islands, Hawaiian
honeycreepers.

## Phylogeny and Systematics (CED Unit 8)

### Phylogenetic Trees

Diagrams that show the evolutionary relationships among organisms.

- **Nodes:** Represent common ancestors.
- **Branches:** Represent evolutionary lineages.
- **Tips:** Represent extant (living) or extinct taxa.
- The tree is rooted at the most recent common ancestor of all taxa shown.

### Cladistics

Classification based on **shared derived characteristics** (synapomorphies).

- **Clade (monophyletic group):** An ancestor and all of its descendants.
- **Paraphyletic group:** An ancestor and some, but not all, of its descendants.
- **Polyphyletic group:** Organisms from different ancestors (not a valid grouping in cladistics).

### Molecular Clocks

The rate of mutation in DNA sequences is roughly constant over time. By comparing DNA sequences of
two species, the time since they diverged can be estimated.

**Worked Example: Using a molecular clock.**

Two species of rodents have a DNA sequence that differs by 12 base substitutions per 1000 bases. The
known mutation rate for this gene is 2 substitutions per 1000 bases per million years.

Time since divergence: $12 / 2 = 6$ million years.

## Origin of Life (CED Unit 8)

1. **Abiotic synthesis of organic molecules:** Miller-Urey experiment (1953) demonstrated that
   organic molecules (amino acids) can form under conditions simulating early Earth.
2. **Formation of protobionts:** Liposomes and coacervates show that abiotically produced molecules
   can self-assemble into membrane-bound structures.
3. **Origin of self-replicating molecules:** RNA may have been the first genetic material ("RNA
   world" hypothesis) because RNA can both store information and catalyze reactions (ribozymes).

## Common Pitfalls

1. **Confusing homologous and analogous structures.** Homologous structures share evolutionary
   origin; analogous structures share function but not origin.
2. **Misapplying Hardy-Weinberg.** The conditions are rarely met in nature. The value is as a null
   model -- deviations indicate evolution is occurring.
3. **Confusing genetic drift with natural selection.** Drift is random; selection is non-random.
   Both change allele frequencies.
4. **Thinking evolution has a direction or goal.** Evolution is not progressive; it simply adapts
   populations to their current environment.
5. **Confusing prezygotic and postzygotic barriers.** Prezygotic prevents the zygote from forming;
   postzygotic reduces fitness after the zygote forms.
6. **Misidentifying the most recent common ancestor** on a phylogenetic tree. Rotate nodes mentally
   -- the most recent common ancestor is the deepest node shared by the two taxa.
7. **Thinking individuals evolve.** Populations evolve, not individuals. Natural selection acts on
   phenotypic variation among individuals.
8. **Forgetting that Hardy-Weinberg requires the population to be large.** In small populations,
   genetic drift causes allele frequencies to change even without selection.
9. **Confusing the founder effect and the bottleneck effect.** The founder effect involves a small
   group leaving a larger population; the bottleneck effect involves a drastic reduction in an
   existing population.
10. **Thinking vestigial structures have no function at all.** Some vestigial structures may have
    been co-opted for new functions (exaptation). For example, the penguin's flipper is a modified
    wing that is now used for swimming rather than flying.
11. **Assuming all mutations are harmful.** While most mutations are neutral or harmful, beneficial
    mutations provide the raw material for evolution. A mutation that is harmful in one environment
    may be beneficial in another.

## Practice Questions

1. In a population of 5000, the frequency of the dominant allele for a trait is 0.7. How many
   individuals would you expect to be heterozygous? How many would show the recessive phenotype?

2. A population of 200 deer is isolated on an island. A hurricane kills 150 deer randomly. Is this
   an example of the founder effect or the bottleneck effect? Explain.

3. Explain how directional, stabilizing, and disruptive selection differ, and give an example of
   each.

4. Describe three prezygotic and three postzygotic barriers to reproduction.

5. In a Hardy-Weinberg population, $16\%$ of individuals show the recessive phenotype. What
   percentage of the population is heterozygous?

6. Explain why the biological species concept cannot be applied to organisms that reproduce
   asexually.

7. Compare allopatric and sympatric speciation. How does polyploidy contribute to sympatric
   speciation in plants?

8. Draw a phylogenetic tree showing the evolutionary relationships among amphibians, reptiles,
   birds, and mammals, and identify which groups form monophyletic clades.

9. A population of beetles has the following genotype frequencies: AA = 0.49, Aa = 0.42, aa = 0.09.
   Is this population in Hardy-Weinberg equilibrium? Show your calculations.

10. Explain how the founder effect can lead to a high frequency of a genetic disorder in a small,
    isolated population.

11. Describe the conditions under which allopatric speciation is most likely to occur and explain
    why each condition is important.

12. Explain why vestigial structures provide evidence for evolution.

13. A researcher compares the DNA sequences of a gene in four species. Species A and B differ by 4
    substitutions; species A and C differ by 10; species B and C differ by 6. Draw a phylogenetic
    tree showing the relationships among these species.

14. Explain how sexual selection can lead to the evolution of traits that reduce survival (e.g., the
    peacock's tail).

15. Describe the Miller-Urey experiment and explain its significance for the origin of life.

16. A population in Hardy-Weinberg equilibrium has $p = 0.8$ for a gene with two alleles. After one
    generation of selection against the homozygous recessive genotype (fitness = 0.5 for aa), what
    are the new allele frequencies?

17. Explain why genetic drift has a greater effect in small populations than in large populations.

18. Compare the biological species concept with the phylogenetic species concept, discussing the
    advantages and disadvantages of each.

19. Explain how antibiotic resistance in bacteria is an example of natural selection, including the
    role of mutation and selection pressure.

20. A new island is formed by a volcanic eruption. Over time, plants and animals colonize the
    island. Describe how adaptive radiation could lead to speciation on this island.

21. Explain the concept of the molecular clock and describe two limitations of using molecular data
    to estimate divergence times.

22. Describe how hybrid zones form and explain the two possible outcomes for hybridizing populations
    (reinforcement and fusion).

23. Explain why genetic variation is essential for natural selection and describe three mechanisms
    that generate genetic variation.

24. A population of 10,000 individuals has the following genotype counts: AA = 6400, Aa = 3200, aa
    = 400. Calculate the allele frequencies and test whether the population is in Hardy-Weinberg
    equilibrium using a chi-squared test.

25. Explain how the RNA world hypothesis accounts for the origin of both genetic information storage
    and catalytic activity in early life.

## Review: Evidence for Evolution -- Molecular Biology

**DNA and protein comparisons:** The more closely related two species are, the more similar their
DNA and protein sequences. This is powerful evidence for common ancestry.

**Cytochrome c:** This protein is found in almost all aerobic organisms and has been highly
conserved throughout evolution. Comparing the amino acid sequence of cytochrome c between species
reveals evolutionary relationships. Humans and chimpanzees have identical cytochrome c sequences;
humans and yeast differ by about 45 amino acids.

**Molecular clocks:** The rate of neutral mutations in DNA is relatively constant over time. By
counting the number of differences in DNA sequences between two species, scientists can estimate how
long ago they diverged from a common ancestor. This method assumes a roughly constant mutation rate
and must be calibrated using the fossil record.

**Pseudogenes:** These are non-functional copies of genes that have accumulated mutations over time.
The presence of the same pseudogene at the same chromosomal location in different species is strong
evidence for common ancestry. For example, the GULO pseudogene (involved in vitamin C synthesis) is
present in humans, chimpanzees, and gorillas, all of which have lost the ability to synthesise
vitamin C.

**Worked Example: Using molecular data to construct a phylogenetic tree.**

Four species have the following number of amino acid differences in a particular protein:

- Species A vs B: 5 differences
- Species A vs C: 12 differences
- Species A vs D: 20 differences
- Species B vs C: 7 differences
- Species B vs D: 18 differences
- Species C vs D: 15 differences

The pair with the fewest differences (A and B, 5) are most closely related. The tree would show A
and B sharing the most recent common ancestor, followed by C, with D being the most distantly
related.

## Review: Types of Natural Selection

**Directional selection:** Favouring one extreme of the phenotype range. Example: antibiotic
resistance in bacteria -- bacteria with resistance alleles are favoured when antibiotics are
present, shifting the population towards resistance.

**Stabilising selection:** Favouring the intermediate phenotype and selecting against both extremes.
Example: human birth weight -- very low and very high birth weights have higher mortality, so the
intermediate weight is favoured.

**Disruptive selection:** Favouring both extremes and selecting against the intermediate. Example:
in a population of birds, large beaks are favoured for cracking hard seeds and small beaks for
picking small seeds, but medium beaks are inefficient at both.

**Frequency-dependent selection:** The fitness of a phenotype depends on its frequency in the
population. In negative frequency-dependent selection, rare phenotypes have an advantage. Example:
in side-blotched lizards, three male mating strategies (territorial, sneaker, female-mimic) exist,
and each is favoured when it is rare.

## Review: Genetic Drift

Genetic drift is the random fluctuation of allele frequencies in small populations due to chance
events. Unlike natural selection, genetic drift is non-adaptive -- it can increase or decrease the
frequency of both beneficial and harmful alleles.

**Bottleneck effect:** A population is drastically reduced in size (e.g., by a natural disaster or
overhunting). The surviving individuals may not represent the genetic diversity of the original
population. Alleles that were rare may become common or be lost entirely.

**Founder effect:** A small group of individuals colonises a new area. The allele frequencies in the
new population may differ significantly from the source population simply because the founders
carried only a subset of the total genetic variation.

**Why drift matters more in small populations:** In a population of 10,000, the random loss of one
individual changes allele frequencies by only 0.01%. In a population of 10, the loss of one
individual changes allele frequencies by 10%. Small populations are therefore much more susceptible
to random changes in allele frequencies.

**Worked Example: Cheetahs and the bottleneck effect.**

Cheetahs experienced a severe bottleneck approximately 10,000 years ago, reducing the population to
a very small number of individuals. As a result, modern cheetahs have extremely low genetic
diversity -- they are so genetically similar that skin grafts between unrelated cheetahs are not
rejected. This low diversity makes cheetahs vulnerable to disease and environmental changes because
there is little genetic variation for natural selection to act upon.

## Review: Hybrid Zones and Speciation

A **hybrid zone** is a region where two previously isolated populations meet and interbreed,
producing hybrid offspring. There are several possible outcomes:

1. **Reinforcement:** Hybrid offspring have reduced fitness. Over time, natural selection favours
   prezygotic barriers that prevent interbreeding, strengthening reproductive isolation and
   completing speciation.

2. **Fusion:** The two populations interbreed freely, and the differences between them are eroded.
   The populations merge into a single species.

3. **Stability:** Hybrid offspring continue to be produced in a narrow zone, but the two populations
   remain distinct outside the hybrid zone. This occurs when hybrids have lower fitness than pure
   individuals in either parent population.

## Review: Coevolution

Coevolution occurs when two or more species reciprocally affect each other's evolution. Each species
acts as a selective pressure on the other, leading to reciprocal evolutionary changes.

**Predator-prey coevolution:** Predators evolve traits that make them better at catching prey (e.g.,
faster running speed, sharper claws), while prey evolve traits that help them escape (e.g.,
camouflage, toxicity, speed). This creates an evolutionary "arms race" where neither species gains a
permanent advantage.

**Plant-herbivore coevolution:** Plants evolve chemical defences (toxins, alkaloids) to deter
herbivores. Herbivores, in turn, evolve resistance to these toxins. Example: milkweed produces
cardiac glycosides that are toxic to most herbivores, but monarch butterfly caterpillars have
evolved the ability to sequester these compounds and use them for their own defence.

**Parasite-host coevolution:** Parasites evolve mechanisms to exploit their hosts, while hosts
evolve immune defences. This often leads to a highly specific, co-adapted relationship. Example: the
Plasmodium parasite (malaria) has evolved to evade the human immune system, while humans in
malaria-endemic regions have evolved sickle-cell trait (heterozygote advantage against malaria).

**Mutualistic coevolution:** Both species benefit from the interaction. Example: flowering plants
and their pollinators. Plants evolve specific flower shapes, colours, and scents to attract
particular pollinators, while pollinators evolve specialised mouthparts and behaviours to access
nectar efficiently. Orchids and their pollinating moths are a classic example: some orchid species
have flowers with nectar spurs that match the exact proboscis length of their moth pollinator.

## Review: Evolutionary Developmental Biology (Evo-Devo)

Evolutionary developmental biology studies how changes in developmental processes contribute to
evolutionary change. It has revealed that small changes in regulatory genes can produce large
morphological changes.

**Homeotic (Hox) genes:** These are master regulatory genes that control the body plan of an
organism during embryonic development. They determine where body parts (head, thorax, abdomen,
limbs) form along the anterior-posterior axis. Remarkably, Hox genes are highly conserved across the
animal kingdom: the same basic set of Hox genes controls body plan development in fruit flies, mice,
and humans.

**How Hox gene mutations drive evolution:** A mutation that changes where a Hox gene is expressed
can dramatically alter body plan. For example, in fruit flies, a mutation in the Ultrabithorax gene
causes a pair of wings to develop where halteres (balancing organs) normally form, producing a
four-winged fly. Similar changes in Hox gene expression during evolution may have produced the
diversity of body plans seen in different animal phyla.

**Modularity in development:** The development of body structures is modular -- different structures
develop semi-independently under the control of different genes. This modularity allows one body
part to evolve without affecting others. For example, the evolution of different beak shapes in
Darwin's finches is controlled by changes in the expression of a few genes (including BMP4 and
calmodulin) that regulate beak development, without affecting other body structures.

**Worked Example: The evolution of limb loss in snakes.**

Snakes evolved from four-legged lizard ancestors. The loss of limbs in snakes is associated with
changes in the expression of Hox genes that control limb development. Specifically, the expansion of
the Hox gene expression domain along the body axis during embryonic development prevents limb bud
formation in the regions where limbs would normally develop. This is an example of how a change in
the regulation of existing genes (rather than the evolution of entirely new genes) can produce a
major morphological change.

## Review: Genetic Evidence for Common Ancestry

The universality of the genetic code is among the strongest evidence for common ancestry. In nearly
all organisms, the same codons specify the same amino acids. For example, AUG codes for methionine
in bacteria, plants, fungi, and humans. This shared genetic code is most easily explained by common
descent from a single ancestral organism.

**Shared endogenous retroviruses (ERVs):** ERVs are viral sequences that have been inserted into the
germ line DNA and are inherited by offspring. If two species share an ERV at the same chromosomal
location, it is strong evidence that they share a common ancestor in which the viral insertion
occurred. Humans and chimpanzees share many ERVs at identical locations, while humans and mice share
far fewer, consistent with the closer evolutionary relationship between humans and chimpanzees.

**Shared pseudogenes:** Pseudogenes are non-functional gene copies that have accumulated disabling
mutations. The GULO pseudogene, which is involved in vitamin C synthesis, is present in the same
location on chromosome 8 in humans, chimpanzees, and orangutans. The specific mutations disabling
the gene are shared among these species, indicating that the gene was inactivated in their common
ancestor.

**Comparative genomics:** Genome-wide comparisons show that humans share approximately 98.7% of
their DNA sequence with chimpanzees, approximately 85% with mice, and approximately 60% with
bananas. The degree of sequence similarity correlates with the evolutionary relatedness determined
by the fossil record and other evidence.

**Molecular clocks:**

The molecular clock hypothesis proposes that mutations accumulate in DNA at a roughly constant rate
over time. By comparing the number of sequence differences between two species in a gene that
evolves at a relatively constant rate (such as cytochrome c), researchers can estimate the time
since the two species diverged from a common ancestor. This provides an independent method for
estimating divergence times that complements the fossil record.

**Key assumptions of the molecular clock:**

- The mutation rate is approximately constant over time and across lineages.
- Most mutations are selectively neutral (neither beneficial nor harmful).
- The rate of neutral mutation can be estimated from the fossil record or from known divergence
  events.

**Limitations of the molecular clock:**

- Mutation rates can vary between lineages (e.g., rodents have faster mutation rates than primates).
- Different genes evolve at different rates (e.g., non-coding regions evolve faster than coding
  regions).
- Natural selection can accelerate or decelerate the rate of sequence change in specific genes.
- Calibration relies on the fossil record, which is itself incomplete.

**Applying the molecular clock:**

If gene X in species A and species B differs by 60 nucleotide substitutions, and the estimated
mutation rate for gene X is 2 substitutions per million years, then:

$$\mathrm{Time since divergence} = \frac{60}{2 \times 2} = 15 \mathrm{ million years}$$

The factor of 2 accounts for the fact that substitutions have accumulated along both lineages since
divergence.

**Phylogenetic trees from molecular data:**

Molecular data (DNA and protein sequences) are used to construct phylogenetic trees using
computational methods such as maximum parsimony, maximum likelihood, and Bayesian inference. These
methods analyse the patterns of shared derived characters (synapomorphies) to infer the most likely
evolutionary relationships among species. Molecular phylogenies have resolved many relationships
that were unclear from morphological data alone, such as the division of life into three domains
(Bacteria, Archaea, and Eukarya).

**Convergent evolution:**

Convergent evolution occurs when unrelated species independently evolve similar traits as a result
of adapting to similar environments or ecological niches. These similarities are analogous
structures (similar function but different evolutionary origin), not homologous structures (similar
origin but possibly different function).

**Examples of convergent evolution:**

- **Wings:** Insects, birds, and bats all have wings for flight, but the wings evolved
  independently. Insect wings are extensions of the exoskeleton, bird wings are modified forelimbs
  with feathers, and bat wings are modified forelimbs with a membrane of skin.
- **Streamlined body shape:** Sharks (fish), dolphins (mammals), and ichthyosaurs (extinct reptiles)
  all evolved a similar torpedo-shaped body for efficient swimming in aquatic environments.
- **Camera-type eyes:** Cephalopod molluscs (e.g., octopuses) and vertebrates both evolved complex
  image-forming eyes, but the structures developed independently -- vertebrate eyes have an inverted
  retina, while cephalopod eyes do not.
- **Cactus and euphorbia:** Cacti (Americas) and euphorbias (Africa) both evolved succulent stems,
  spines, and CAM photosynthesis independently as adaptations to arid environments.

**Distinguishing homology from analogy:**

To determine whether similar structures are homologous or analogous, biologists examine:

- **Anatomical structure:** Homologous structures share the same underlying anatomy (e.g., the
  pentadactyl limb in human arms, whale flippers, and bat wings). Analogous structures may look
  superficially similar but have different internal structures.
- **Embryological development:** Homologous structures develop from the same embryonic tissues.
- **Genetic basis:** Homologous traits are typically controlled by the same or similar genes, while
  analogous traits arise from different genes.

**Speciation and reproductive isolation:**

Speciation occurs when populations of a single species become reproductively isolated and diverge to
the point where they can no longer produce fertile offspring. Reproductive isolation can be:

- **Pre-zygotic:** Geographic isolation, temporal isolation (different breeding seasons),
  behavioural isolation (different courtship rituals), mechanical isolation (incompatible
  reproductive structures), or gametic isolation (sperm and egg cannot fuse).
- **Post-zygotic:** Hybrid inviability (hybrid offspring do not survive), hybrid sterility (hybrid
  offspring are sterile, e.g., mules), or hybrid breakdown (first-generation hybrids are fertile but
  subsequent generations are not).

**Allopatric speciation example:**

The Kaibab squirrel and Abert's squirrel are found on opposite sides of the Grand Canyon. They
descended from a common ancestor but became geographically isolated when the canyon formed. Over
millions of years, the two populations accumulated genetic differences. They now differ in coat
colour and skull morphology, and are considered separate subspecies (or possibly species).

## Practice Problems

<details>
<summary>Question 1: Hardy-Weinberg with multiple alleles</summary>

In a population, the ABO blood group alleles have the following frequencies: $p(I^A) = 0.3$,
$q(I^B) = 0.1$, $r(i) = 0.6$. Calculate the expected frequency of each blood type (A, B, AB, O)
assuming Hardy-Weinberg equilibrium. What percentage of the population can donate blood to a person
with type O blood?

</details>

<details>
<summary>Answer</summary>

Expected genotype frequencies:

- Type A: $p^2 + 2pr = (0.3)^2 + 2(0.3)(0.6) = 0.09 + 0.36 = 0.45$ (45%)
- Type B: $q^2 + 2qr = (0.1)^2 + 2(0.1)(0.6) = 0.01 + 0.12 = 0.13$ (13%)
- Type AB: $2pq = 2(0.3)(0.1) = 0.06$ (6%)
- Type O: $r^2 = (0.6)^2 = 0.36$ (36%)

Check: $0.45 + 0.13 + 0.06 + 0.36 = 1.00$.

A person with type O blood can only receive type O blood (no A or B antigens). Therefore, only
individuals with blood type O (genotype $ii$) can donate to them: 36% of the population.

</details>

<details>
<summary>Question 2: Directional selection and allele frequency change</summary>

In a population of beetles, body colour is determined by a single gene with two alleles: B (brown,
dominant) and b (green, recessive). The initial allele frequencies are $p = 0.5$, $q = 0.5$. Brown
beetles have a fitness of 0.7 on light-coloured tree bark (they are more visible to predators),
while green beetles have a fitness of 1.0. Calculate the allele frequencies after one generation of
selection.

</details>

<details>
<summary>Answer</summary>

Fitness values: $w_{BB} = 0.7$, $w_{Bb} = 0.7$, $w_{bb} = 1.0$.

Initial genotype frequencies: $p^2 = 0.25$, $2pq = 0.50$, $q^2 = 0.25$.

Mean fitness: $\bar{w} = (0.25)(0.7) + (0.50)(0.7) + (0.25)(1.0) = 0.175 + 0.35 + 0.25 = 0.775$.

New frequency of B:
$$p' = \frac{p^2 \cdot w_{BB} + pq \cdot w_{Bb}}{\bar{w}} = \frac{0.25(0.7) + 0.25(0.7)}{0.775} = \frac{0.175 + 0.175}{0.775} = \frac{0.35}{0.775} \approx 0.452$$

New frequency of b: $$q' = 1 - p' = 1 - 0.452 = 0.548$$

After one generation, the recessive allele $b$ (green, favoured) has increased from 0.5 to 0.548,
and the dominant allele $B$ (brown, selected against) has decreased from 0.5 to 0.452. This
demonstrates directional selection against the brown phenotype.

</details>

<details>
<summary>Question 3: Molecular clock and divergence time</summary>

Two species of primates have a cytochrome c gene that differs by 8 nucleotide substitutions in a
300-base-pair region. The known mutation rate for this gene is 1 substitution per 100 base pairs per
million years. Estimate the time since these two species diverged from their common ancestor.

</details>

<details>
<summary>Answer</summary>

First, calculate the substitution rate per base pair per million years:
$$\text{Rate} = \frac{1 \text{ substitution}}{100 \text{ base pairs} \times 1 \text{ million years}} = 0.01 \text{ substitutions/bp/Myr}$$

Total substitutions observed: 8 in 300 base pairs, so the substitution frequency per base pair is:
$$\frac{8}{300} = 0.0267 \text{ substitutions/bp}$$

Time since divergence (accounting for both lineages):
$$\text{Time} = \frac{0.0267}{2 \times 0.01} = \frac{0.0267}{0.02} = 1.33 \text{ million years}$$

The factor of 2 accounts for the fact that substitutions have accumulated along both lineages since
divergence. The two species diverged approximately 1.33 million years ago.

</details>

<details>
<summary>Question 4: Founder effect and genetic drift</summary>

A mainland population of birds has allele frequencies $p(A) = 0.8$, $q(a) = 0.2$ for a gene
controlling beak shape. Five birds colonise a new island. By chance, the founders have the
genotypes: $AA$, $Aa$, $Aa$, $aa$, $Aa$. Calculate the allele frequencies in the founder population.
Has genetic drift increased or decreased the frequency of allele $a$?

</details>

<details>
<summary>Answer</summary>

Count alleles in the founder population:

$AA$: 2 copies of A $Aa$: 1 copy of A, 1 copy of a (three individuals: 3A + 3a) $aa$: 2 copies of a

Total alleles: $5 \text{ birds} \times 2 = 10$ alleles.

Number of A alleles: $2 + 3 = 5$. Number of a alleles: $3 + 2 = 5$.

New allele frequencies: $p = 5/10 = 0.5$, $q = 5/10 = 0.5$.

Genetic drift has dramatically increased the frequency of allele $a$ from $0.2$ on the mainland to
$0.5$ on the island. This is an example of the founder effect: the small founding population does
not represent the genetic diversity of the source population, and allele frequencies can shift
substantially by chance alone.

</details>

<details>
<summary>Question 5: Reproductive isolation classification</summary>

Two species of frogs live in the same pond. Species A breeds in March, and species B breeds in June.
When researchers artificially induce breeding at the same time and perform cross-fertilisation, the
hybrid tadpoles develop normally but the adult hybrids are sterile. Classify each reproductive
barrier and explain whether these two species are likely to remain distinct.

</details>

<details>
<summary>Answer</summary>

The temporal difference in breeding seasons (March vs June) is a **temporal isolation** barrier,
which is a prezygotic barrier. It prevents the species from mating in nature because they reproduce
at different times.

The sterility of adult hybrids is a **reduced hybrid fertility** barrier, which is a postzygotic
barrier. Even if fertilisation occurs (as in the artificial experiment), the hybrids cannot produce
offspring.

These two species are likely to remain distinct because they have both prezygotic and postzygotic
barriers. The temporal isolation prevents interbreeding in nature most of the time, and even when
hybrids are produced (artificially), they cannot contribute genes back to either parent population.
The combination of barriers makes gene flow between the species extremely unlikely.

</details>
