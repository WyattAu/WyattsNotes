---
title: Evolution
description: "DSE Biology evolution notes covering natural selection, evidence for evolution, population genetics, Hardy-Weinberg principle, genetic drift, speciation,"
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - Biology
categories:
  - DSE
  - Biology
slug: dse-biology-evolution
---

## Population Genetics

### The Gene Pool

The **gene pool** is the total collection of all the alleles of all the genes in a population at a given time. Population genetics studies the composition of the gene pool and how it changes over time (evolution).

**Key terms:**

| Term | Definition |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Allele frequency | The proportion of a specific allele in the gene pool, expressed as a decimal or percentage |
| Genotype frequency | The proportion of a specific genotype in the population |
| Gene pool | All alleles of all genes in a population |
| Population | A group of individuals of the same species living in the same area at the same time, capable of interbreeding |
| Fixed allele | An allele with a frequency of 1.0 (100%) -- all individuals are homozygous for that allele |
| Lost allele | An allele with a frequency of 0.0 -- it has been completely eliminated from the population |

### The Hardy-Weinberg Principle

The Hardy-Weinberg principle states that, under certain idealised conditions, the allele and genotype frequencies in a population will remain constant from generation to generation. In other words, the gene pool does not change -- there is no evolution.

**The Hardy-Weinberg equation:**

If there are two alleles for a gene, $p$ and $q$:

$$p + q = 1$$

$$p^2 + 2pq + q^2 = 1$$

Where:
- $p$ = frequency of the dominant allele
- $q$ = frequency of the recessive allele
- $p^2$ = frequency of the homozygous dominant genotype
- $2pq$ = frequency of the heterozygous genotype
- $q^2$ = frequency of the homozygous recessive genotype

**Conditions for Hardy-Weinberg equilibrium:**

1. **No mutations:** No new alleles are introduced by mutation
2. **Random mating:** Individuals mate without regard to genotype
3. **No natural selection:** All genotypes have equal survival and reproductive success
4. **Extremely large population size:** Genetic drift is negligible
5. **No gene flow (no migration):** No alleles enter or leave the population

**If any of these conditions is violated, evolution occurs.** In real populations, these conditions are almost never fully met, so real populations are always evolving to some degree.

### Worked Example: Hardy-Weinberg Calculations

In a population of 500 individuals, 80 have cystic fibrosis (an autosomal recessive condition, genotype cc).

(a) Calculate the frequency of the recessive allele ($q$).
(b) Calculate the frequency of the dominant allele ($p$).
(c) Calculate the number of heterozygous carriers (Cc) in the population.
(d) If the population grows to 1000 individuals with the same allele frequencies, how many individuals would be expected to have cystic fibrosis?

<details>
<summary>Solution</summary>

(a) $q^2 = \frac{80}{500} = 0.16$. Therefore, $q = \sqrt{0.16} = 0.4$.

(b) $p = 1 - q = 1 - 0.4 = 0.6$.

(c) Frequency of heterozygotes = $2pq = 2 \times 0.6 \times 0.4 = 0.48$.
Number of carriers = $0.48 \times 500 = 240$ individuals.

(d) If the population is 1000 with the same allele frequencies:
Number with cystic fibrosis = $q^2 \times 1000 = 0.16 \times 1000 = 160$ individuals.
Number of carriers = $2pq \times 1000 = 0.48 \times 1000 = 480$ individuals.

</details>

### Using Hardy-Weinberg to Test for Evolution

If observed genotype frequencies differ significantly from Hardy-Weinberg expected frequencies, this indicates that one or more of the equilibrium conditions is being violated, and the population is evolving.

**Worked Example:**

A population of flowers has 160 red (RR), 480 pink (Rr), and 360 white (rr) individuals. Total = 1000.

- Observed frequency of $q^2 = \frac{360}{1000} = 0.36$So $q = 0.6$$p = 0.4$.
- Expected: $p^2 = 0.16$ (160 RR), $2pq = 0.48$ (480 Rr), $q^2 = 0.36$ (360 rr).
- Observed: $p^2 = 0.16$ (160), $2pq = 0.48$ (480), $q^2 = 0.36$ (360).
- The observed and expected frequencies are identical, suggesting the population is in Hardy-Weinberg equilibrium.

If instead the observed numbers were 100 RR, 500 Rr, 400 rr:
- $q = \sqrt{0.4} = 0.632$$p = 0.368$.
- Expected: $p^2 = 0.135$ (135), $2pq = 0.465$ (465), $q^2 = 0.400$ (400).
- Observed: $p^2 = 0.100$ (100), $2pq = 0.500$ (500), $q^2 = 0.400$ (400).
- The excess of heterozygotes and deficit of homozygous dominants suggests a possible selective advantage for heterozygotes (heterozygote advantage) or non-random mating.

---

## Mechanisms of Evolution

### Natural Selection (Recap)

Natural selection is the differential survival and reproduction of individuals due to differences in phenotype. It is the only mechanism that consistently leads to adaptation.

**Key points:**

- Natural selection acts on PHENOTYPES, but the evolutionary change occurs in the GENE POOL (allele frequencies change)
- Selection can only act on heritable variation (genetically determined traits)
- Natural selection does not create new alleles -- it changes the frequency of existing alleles
- Natural selection is non-random (unlike mutation and genetic drift)

### Mutation

Mutation is the ultimate source of new alleles and genetic variation. Without mutation, there would be no raw material for natural selection to act upon.

| Feature | Description |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Rate | low: approximately $10^{-6}$ per gene per generation for point mutations |
| Types | Point mutations (substitution), insertions, deletions, frameshifts, chromosome mutations (duplication, inversion, translocation) |
| Effect on fitness | Most mutations are neutral or harmful; a small fraction are beneficial |
| Randomness | Mutations occur randomly with respect to the needs of the organism -- they are not directed by the environment |

**Mutation and natural selection combined:**

1. A random mutation creates a new allele
2. If the new allele confers a survival or reproductive advantage, natural selection increases its frequency in the population
3. If the allele is harmful, natural selection decreases its frequency
4. If the allele is neutral, its frequency may fluctuate due to genetic drift

### Genetic Drift

Genetic drift is the random fluctuation of allele frequencies in a population due to chance events. It is most significant in small populations.

**Two key scenarios:**

**1. The bottleneck effect:**

- A population is drastically reduced in size (e.g., natural disaster, hunting, habitat destruction)
- The survivors are a non-representative sample of the original gene pool
- Some alleles may be lost entirely; others may increase in frequency purely by chance
- The resulting population has much less genetic diversity than the original

Example: Northern elephant seals were hunted to near extinction in the 19th century (population reduced to approximately 20 individuals). The current population of over 100,000 has much less genetic diversity than pre-hunting populations.

**2. The founder effect:**

- A small number of individuals colonise a new area (founders)
- The founders carry only a subset of the alleles from the original population
- The new population is genetically different from the source population purely due to chance sampling

Example: The Amish population in Pennsylvania was founded by approximately 200 individuals. The Amish have a much higher incidence of certain genetic disorders (e.g., Ellis-van Creveld syndrome) than the general population because the founding individuals happened to carry these rare alleles.

**Genetic drift vs natural selection:**

| Feature | Genetic Drift | Natural Selection |
| -------------------- | -------------------------------------------------- | ------------------------------------------------- |
| Direction | Random (no direction) | Non-random (directional) |
| Effect on fitness | Can increase, decrease, or have no effect | Consistently increases fitness (adaptation) |
| Population size | Strongest in small populations | Operates in all population sizes |
| Predictability | Unpredictable | Predictable (favours advantageous traits) |
| Speed | Can be rapid in very small populations | Generally slower (unless selection is very strong) |

### Gene Flow

Gene flow (migration) is the movement of alleles between populations through the movement of individuals or gametes.

- Gene flow tends to **reduce differences** between populations by making their gene pools more similar
- High gene flow can prevent populations from diverging enough to become separate species
- Low gene flow allows populations to diverge through natural selection and genetic drift, potentially leading to speciation

### Non-Random Mating

Non-random mating changes genotype frequencies (but not allele frequencies) in a population.

| Type | Description | Effect |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| Inbreeding | Mating between closely related individuals | Increases homozygosity; increases expression of recessive deleterious alleles |
| Assortative mating | Individuals choose mates with similar phenotypes (positive assortative) or different phenotypes (negative assortative) | Positive assortative: increases homozygosity. Negative assortative: increases heterozygosity |
| Sexual selection | Individuals choose mates based on specific traits (e.g., peacock tail size) | Alleles for preferred traits increase in frequency; may reduce overall fitness (handicap principle) |

---

## Speciation

### What is Speciation?

Speciation is the formation of new species from existing ones. A species is defined as a group of organisms that can interbreed to produce fertile offspring under natural conditions.

### Reproductive Isolation

For speciation to occur, gene flow between populations must be reduced or eliminated. Reproductive isolation mechanisms prevent interbreeding.

**Pre-zygotic barriers (prevent mating or fertilisation):**

| Barrier Type | Description |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Habitat isolation | Populations live in different habitats within the same geographic area and rarely encounter each other |
| Temporal isolation | Populations breed at different times (different seasons, different times of day) |
| Behavioural isolation | Populations have different courtship rituals, songs, or displays that prevent interbreeding |
| Mechanical isolation | Physical differences in reproductive structures prevent successful mating |
| Gametic isolation | Sperm and egg are incompatible; even if mating occurs, fertilisation does not happen |

**Post-zygotic barriers (prevent fertile offspring):**

| Barrier Type | Description |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Hybrid inviability | Hybrid offspring do not survive to adulthood |
| Hybrid sterility | Hybrid offspring are sterile (e.g., mule -- cross between horse and donkey) |
| Hybrid breakdown | First-generation hybrids are fertile, but second-generation hybrids have reduced fitness |

### Allopatric Speciation

Allopatric speciation occurs when populations are geographically separated, preventing gene flow.

**Step-by-step mechanism:**

1. **Geographic isolation:** A physical barrier (mountain range, river, ocean, desert) divides the population into two or more subpopulations
2. **No gene flow:** The barrier prevents interbreeding between the subpopulations
3. **Different selection pressures:** Each subpopulation experiences different environmental conditions (climate, food sources, predators, competitors)
4. **Independent evolution:** Natural selection, mutation, and genetic drift act independently on each population, causing allele frequencies to diverge
5. **Accumulation of differences:** Over many generations, genetic and phenotypic differences accumulate
6. **Reproductive isolation:** Even if the geographic barrier is removed, accumulated differences (behavioural, mechanical, genetic) may prevent successful interbreeding. At this point, two separate species exist.

**Evidence for allopatric speciation:**

- Islands provide natural laboratories for allopatric speciation (e.g., Darwin's finches on the Galapagos Islands)
- The Kaibab squirrel and Abert's squirrel are similar species that live on opposite sides of the Grand Canyon and have evolved differences since the canyon formed
- The cichlid fish of Lake Victoria have diversified into hundreds of species through isolation in different parts of the lake

### Sympatric Speciation

Sympatric speciation occurs without geographic separation. It is less common than allopatric speciation but is important in plants.

**Mechanisms of sympatric speciation:**

1. **Polyploidy:** A mutation causes an individual to have extra sets of chromosomes (e.g., 4n instead of 2n). The polyploid individual can reproduce with other polyploids but not with the original diploid population. Polyploidy is a major mechanism of speciation in flowering plants (approximately 30-70% of flowering plant species are polyploid).
2. **Habitat specialisation:** Within a single geographic area, a population may specialise in different ecological niches (e.g., apple maggot flies originally laid eggs on hawthorn fruit but switched to apples; the two populations now show temporal isolation -- different fruiting times).
3. **Sexual selection:** Different mating preferences within a population can lead to reproductive isolation.

### Adaptive Radiation

Adaptive radiation is the rapid diversification of a single ancestral species into many different species, each adapted to a different ecological niche. This occurs when a species colonises a new area with many unoccupied niches.

**Classic example: Darwin's finches (Galapagos Islands)**

- A single ancestral finch species colonised the Galapagos Islands from mainland South America
- Different islands had different food sources (seeds of different sizes, insects, cactus flowers)
- Natural selection favoured different beak shapes and sizes on each island
- Over time, the finch populations diverged into approximately 15 species with distinct beak adaptations
- Each species occupies a different ecological niche, reducing competition

---

## Evidence for Evolution (Detailed)

### The Fossil Record

**Strengths of the fossil record:**

- Provides direct evidence of organisms that lived in the past
- Shows the sequential appearance of groups over geological time (fish appear before amphibians, which appear before reptiles, which appear before mammals)
- Contains transitional fossils showing intermediate forms between groups

**Transitional fossils:**

| Fossil | Age (approximate) | Transitional Features |
| ------------------ | ----------------- | --------------------------------------------------------------------------------------------------------- |
| _Tiktaalik_ | 375 million years | Fish-like fins with limb-like bones; intermediate between fish and tetrapods (four-legged vertebrates) |
| _Archaeopteryx_ | 150 million years | Feathers and wings (bird-like); teeth, long bony tail, claws on wings (reptile-like) |
| _Ambulocetus_ | 50 million years | Four legs for walking on land (terrestrial); whale-like skull and inner ear structure (aquatic) |
| _Australopithecus_ | 3-4 million years | Ape-like skull and teeth; upright bipedal posture (human-like) |

**Limitations of the fossil record:**

- Fossilisation is rare (requires rapid burial in sediment, absence of oxygen, presence of hard parts)
- Most organisms that have ever lived did not leave fossils
- Fossils provide limited information about soft tissues, behaviour, and colour
- Dating fossils involves some uncertainty (radiometric dating has margins of error)

### Comparative Anatomy

**Homologous structures:** Structures derived from a common ancestor, sharing the same underlying anatomy despite potentially different functions. They indicate **divergent evolution**.

| Structure | Organism | Function | Underlying Anatomy |
| ----------------- | ----------- | ----------------- | ------------------------------------- |
| Pentadactyl limb | Human | Grasping | Humerus, radius, ulna, carpals, metacarpals, phalanges |
| Pentadactyl limb | Bat | Flying | Same basic bone arrangement |
| Pentadactyl limb | Whale | Swimming | Same basic bone arrangement |
| Pentadactyl limb | Horse | Running | Same basic bone arrangement |

**Analogous structures:** Structures with similar functions but different evolutionary origins. They indicate **convergent evolution** -- unrelated species evolve similar traits independently due to similar environmental pressures.

| Structure | Organism | Function | Evolutionary Origin |
| ----------------- | ----------- | ----------------- | --------------------------------------- |
| Wing | Bird | Flying | Modified forelimb (bones present) |
| Wing | Insect | Flying | Extension of exoskeleton (no bones) |
| Eye | Octopus | Vision | Pinhole eye |
| Eye | Human | Vision | Camera eye (lens, retina) |

### Molecular Biology

**DNA and protein comparisons:**

- Closely related species have more similar DNA sequences and protein structures than distantly related species
- **Cytochrome c** (a respiratory protein) has been compared across species. Human cytochrome c differs from chimpanzee by 0 amino acids, from dog by 10, from horse by 12, from yeast by 45
- The degree of similarity in DNA or protein sequences reflects the degree of evolutionary relatedness
- **Molecular clocks:** By counting the number of DNA or protein differences between species and using a known mutation rate, scientists can estimate the time since two species diverged from a common ancestor

---

## Classification Systems

### Hierarchical Classification

Biological classification organises organisms into a hierarchy of increasingly specific groups:

**Domain $\to$ Kingdom $\to$ Phylum $\to$ Class $\to$ Order $\to$ Family $\to$ Genus $\to$ Species**

Mnemonic: "Dear King Philip Came Over For Good Soup"

### The Three-Domain System

Proposed by Carl Woese in 1990, based on ribosomal RNA (rRNA) sequencing.

| Domain | Cell Type | Membrane Lipids | Cell Wall | Gene Structure | Examples |
| ------------ | ----------- | ---------------------------- | ---------------- | ------------------------- | --------------------------------- |
| Bacteria | Prokaryotic | Unbranched fatty acid chains | Peptidoglycan | Single circular chromosome | _E. Coli_, _Bacillus_, _Cyanobacteria_ |
| Archaea | Prokaryotic | Branched isoprene chains | Pseudopeptidoglycan or no wall | Single circular chromosome | Methanogens, halophiles, thermophiles |
| Eukarya | Eukaryotic | Ester-linked fatty acids | Cellulose (plants), chitin (fungi), none (animals) | Linear chromosomes in nucleus | Animals, plants, fungi, protists |

**Key distinction between Bacteria and Archaea:**

Although both are prokaryotic, Archaea are more closely related to Eukarya than to Bacteria in terms of:
- Ribosomal RNA sequences
- RNA polymerase structure
- Membrane lipid chemistry
- Some aspects of DNA replication and transcription

### The Five-Kingdom System

| Kingdom | Cell Type | Cell Wall | Nutrition | Examples |
| ---------- | --------- | ------------------- | ------------------------------ | ------------------------------------------- |
| Animalia | Eukaryotic | None | Heterotrophic (ingestion) | Mammals, insects, fish, birds |
| Plantae | Eukaryotic | Cellulose | Autotrophic (photosynthesis) | Flowering plants, conifers, mosses, ferns |
| Fungi | Eukaryotic | Chitin | Heterotrophic (absorption) | Mushrooms, yeasts, moulds, _Penicillium_ |
| Protoctista | Eukaryotic | Varies (some have, some do not) | Autotrophic or heterotrophic | Amoeba, Paramecium, _Euglena_, algae |
| Prokaryotae | Prokaryotic | Peptidoglycan (bacteria) | Autotrophic or heterotrophic | Bacteria, cyanobacteria |

### Binomial Nomenclature

The system of naming species using two Latin/Latinised words:

1. **Genus name:** Capitalised, e.g., _Homo_
2. **Species name:** Lowercase, e.g., _sapiens_
3. Full name: _Homo sapiens_ (both words italicised in print; underlined if handwritten)

**Rules:**

- Every species has a unique binomial name
- Names are universally recognised (same name used worldwide)
- Names are in Latin or Latinised Greek
- The genus name may be abbreviated after first use (e.g., _H. Sapiens_)
- If subspecies exist, a third name is added (trinomial), e.g., _Homo sapiens sapiens_

### Phylogenetic Trees

A phylogenetic tree is a diagram that represents the evolutionary relationships among a group of organisms.

**Key features:**

- **Root:** The base of the tree, representing the common ancestor of all organisms in the tree
- **Nodes (branch points):** Points where lineages diverge, representing speciation events
- **Tips (leaves):** The endpoints of the tree, representing extant (living) or extinct species
- **Branches:** Lines connecting nodes, representing evolutionary lineages
- **Branch length:** In some trees, the length of a branch represents the amount of evolutionary change (genetic divergence)

**Interpreting a phylogenetic tree:**

- Organisms that share a more recent common ancestor are more closely related and are placed closer together on the tree
- The tree shows the ORDER of divergence, not necessarily the amount of change
- A phylogenetic tree is a hypothesis about evolutionary relationships; it can be revised as new evidence (fossil, molecular, morphological) becomes available

**Methods of constructing phylogenetic trees:**

| Method | Data Used | Description |
| ---------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Morphological analysis | Physical characteristics (bones, organs) | Compare shared derived characteristics (synapomorphies); traditional method |
| Molecular analysis | DNA sequences, protein sequences, rRNA | Compare nucleotide or amino acid sequences; count differences to estimate relatedness |
| Molecular clock | DNA or protein sequences + known mutation rate | Use the number of genetic differences to estimate the TIME since divergence from a common ancestor |

---

## Adaptation and Natural Selection in Detail

### Types of Adaptation

| Adaptation Type | Description | Example |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Structural | Physical features of an organism that enhance survival | Camouflage (peppered moth); thick fur (Arctic animals); streamlined body (dolphins) |
| Physiological | Internal processes that enhance survival | Venom production (snakes); antifreeze proteins (Arctic fish); efficient kidneys (desert animals) |
| Behavioural | Actions or patterns of behaviour that enhance survival | Migration (birds); hibernation (bears); courtship displays (birds of paradise); alarm calls (meerkats) |

### Antibiotic Resistance in Detail

Antibiotic resistance is one of the most important examples of natural selection in action and a major public health concern.

**Mechanism:**

1. **Random mutation:** Within a large bacterial population, random mutations occur during DNA replication. A mutation may confer resistance to a particular antibiotic (e.g., a gene for beta-lactamase, an enzyme that breaks down penicillin)
2. **Selection pressure:** When an antibiotic is used, susceptible bacteria are killed or inhibited
3. **Differential survival:** Bacteria with the resistance allele survive and reproduce, while susceptible bacteria die
4. **Rapid reproduction:** Bacteria reproduce by binary fission every 20 minutes, so the resistant population grows rapidly
5. **Horizontal gene transfer:** Resistance genes can be transferred between bacteria via plasmids during conjugation, spreading resistance much faster than vertical transmission alone
6. **Result:** The population becomes predominantly resistant, and the antibiotic is no longer effective

**Mechanisms of antibiotic resistance:**

| Mechanism | Description |
| ---------------------------- | -------------------------------------------------------------------------------------------------------- |
| Enzymatic inactivation | Bacteria produce enzymes that break down or modify the antibiotic (e.g., beta-lactamase breaks down penicillin) |
| Efflux pumps | Bacteria pump the antibiotic out of the cell before it can reach its target |
| Target modification | Bacteria alter the molecular target of the antibiotic so it can no longer bind effectively |
| Reduced permeability | Bacteria modify their cell membrane or porins to reduce antibiotic entry |
| Biofilm formation | Bacteria form a protective matrix (biofilm) that slows antibiotic penetration |

**Factors contributing to antibiotic resistance:**

- Overuse of antibiotics in human medicine (prescribing antibiotics for viral infections)
- Incomplete courses of antibiotics (stopping early allows partially resistant bacteria to survive)
- Use of antibiotics in agriculture (livestock feed)
- Poor infection control in hospitals
- Global travel facilitating the spread of resistant strains

**MRSA (Methicillin-Resistant _Staphylococcus aureus_):** A strain of _S. Aureus_ that is resistant to methicillin and many other antibiotics. It produces an altered penicillin-binding protein (PBP2a) that does not bind methicillin. MRSA is a major cause of hospital-acquired infections.

---

## Hardy-Weinberg Applied: Testing for Selection

### Using the Chi-Square Test

The chi-square ($\chi^2$) test can determine whether observed genotype frequencies in a population differ significantly from Hardy-Weinberg expected frequencies (indicating that evolution is occurring).

$$\chi^2 = \sum \frac{(O - E)^2}{E}$$

Where $O$ = observed frequency, $E$ = expected frequency.

**Steps:**

1. Calculate expected genotype frequencies from allele frequencies using Hardy-Weinberg
2. Calculate $\chi^2$ by summing $(O - E)^2 / E$ for each genotype
3. Compare to the critical value at the appropriate degrees of freedom (df = number of genotypes - number of alleles)
4. For two alleles, df = 3 - 2 = 1. The critical value at p = 0.05 is 3.84
5. If $\chi^2 > 3.84$The deviation from Hardy-Weinberg is statistically significant, suggesting evolution is occurring

### Worked Example: Chi-Square Test

In a population of 600 individuals, the observed genotypes for a trait are: AA = 340, Aa = 220, aa = 40. Test whether this population is in Hardy-Weinberg equilibrium.

<details>
<summary>Solution</summary>

Step 1: Calculate allele frequencies from observed data.

Total alleles = 600 $\times$ 2 = 1200

$p = \frac{2(340) + 220}{1200} = \frac{900}{1200} = 0.75$

$q = \frac{2(40) + 220}{1200} = \frac{300}{1200} = 0.25$

Step 2: Calculate expected genotype frequencies.

$p^2 = 0.75^2 = 0.5625$; expected AA = $0.5625 \times 600 = 337.5$

$2pq = 2 \times 0.75 \times 0.25 = 0.375$; expected Aa = $0.375 \times 600 = 225.0$

$q^2 = 0.25^2 = 0.0625$; expected aa = $0.0625 \times 600 = 37.5$

Step 3: Calculate $\chi^2$.

$\chi^2 = \frac{(340 - 337.5)^2}{337.5} + \frac{(220 - 225.0)^2}{225.0} + \frac{(40 - 37.5)^2}{37.5}$

$= \frac{6.25}{337.5} + \frac{25}{225.0} + \frac{6.25}{37.5} = 0.0185 + 0.1111 + 0.1667 = 0.296$

Step 4: Compare to critical value.

$\chi^2 = 0.296 < 3.84$ (critical value at df = 1, p = 0.05)

The deviation from Hardy-Weinberg is NOT statistically significant. The population appears to be in Hardy-Weinberg equilibrium, and there is no evidence of evolutionary change for this gene.

</details>

---

## Coevolution

### What is Coevolution?

Coevolution occurs when two or more species reciprocally affect each other's evolution. Each species acts as a selective pressure on the other, driving reciprocal adaptations.

### Types of Coevolution

**1. Predator-prey coevolution:**

Predators and prey are locked in an evolutionary "arms race." Adaptations in one drive counter-adaptations in the other.

| Predator Adaptation | Prey Counter-Adaptation |
| ----------------------- | -------------------------------- |
| Speed (cheetah) | Speed and agility (gazelle) |
| Camouflage (tiger) | Camouflage (deer fawns) |
| Venom (snakes) | Venom resistance (some prey) |
| Cooperative hunting (wolves) | Group vigilance and defence (wildebeest) |
| Echolocation (bats) | Jamming signals (moths) |

**2. Plant-herbivore coevolution:**

Plants evolve defences against herbivores; herbivores evolve counter-adaptations to overcome these defences.

| Plant Defence | Herbivore Counter-Adaptation |
| ----------------------- | ----------------------------------- |
| Physical (thorns, spines) | Modified mouthparts to avoid thorns |
| Chemical (toxins, tannins) | Detoxification enzymes; specialised gut flora |
| Silica in grass leaves | Wearing down of teeth (grazing adaptation) |
| Mimicry (non-toxic species mimicking toxic ones) | Learning to avoid both |

**3. Mutualistic coevolution:**

Species that have a mutually beneficial relationship evolve in tandem, each becoming increasingly specialised for the interaction.

| Example | Description |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Flowers and pollinators | Flower shape, colour, and scent evolve to attract specific pollinators; pollinator mouthparts evolve to access nectar efficiently. Orchids and their specific bee pollinators are a classic example. |
| Acacia trees and acacia ants | The tree provides food (Beltian bodies) and shelter (hollow thorns); the ants defend the tree against herbivores and competing plants. |
| Coral and zooxanthellae | Coral provides shelter and $\mathrm{CO}_2$; zooxanthellae (algae) provide photosynthate (sugars) and oxygen. This mutualism is essential for coral reef formation. |
| Mycorrhizal fungi and plant roots | Fungi provide mineral nutrients (especially phosphorus) to the plant; the plant provides carbohydrates to the fungus. Both partners have evolved specialised structures for this exchange. |

---

## Human Evolution

### Evidence for Human Evolution

**Fossil hominins (members of the human lineage after divergence from chimpanzees):**

| Species | Age (approximate) | Key Features |
| -------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| _Sahelanthropus tchadensis_ | 7 million years | Small brain (~360 cm$^3$); bipedal (foramen magnum position); ape-like features |
| _Australopithecus afarensis_ | 3-4 million years | Bipedal but with ape-like proportions; small brain (~400-500 cm$^3$); "Lucy" is the most famous specimen |
| _Homo habilis_ | 2-2.4 million years | Larger brain (~600 cm$^3$); first stone tool use (Oldowan tools); reduced canine teeth |
| _Homo erectus_ | 1.8 million - 100,000 years | Larger brain (~900 cm$^3$); more sophisticated tools (Acheulean hand axes); first to migrate out of Africa; use of fire |
| _Homo neanderthalensis_ (Neanderthals) | 400,000 - 40,000 years | Large brain (~1,500 cm$^3$); robust body; complex tools; burial of the dead; interbred with _Homo sapiens_ |
| _Homo sapiens_ | 300,000 years ago to present | Large brain (~1,350 cm$^3$); gracile skeleton; complex language; sophisticated tools and art; global distribution |

### Key Trends in Human Evolution

1. **Increasing brain size:** From approximately 400 cm$^3$ in _Australopithecus_ to approximately 1,350 cm$^3$ in _Homo sapiens_
2. **Bipedalism:** Walking on two legs evolved before large brain size; freed the hands for tool use
3. **Reduced jaw and teeth:** As tools were used for processing food, strong jaws and large teeth became less necessary
4. **Increased manual dexterity:** Opposable thumbs and precision grip allowed complex tool use
5. **Development of language:** Anatomical changes (larynx position, brain regions) enabled complex vocal communication
6. **Reduced body hair:** Possible role in thermoregulation during endurance running in hot African savannah environments

---

## Common Pitfalls

1. **Writing that evolution is "progressive" or "goal-directed":** Evolution has no direction, goal, or endpoint. It is the change in allele frequencies in a population over time. Natural selection produces organisms that are better adapted to their CURRENT environment, not "more advanced" or "more perfect" organisms.

2. **Confusing Lamarckism with Darwinian evolution:** Lamarck proposed the inheritance of acquired characteristics (e.g., a giraffe stretches its neck, and its offspring inherit longer necks). Darwin proposed natural selection acting on random, heritable variation. Only Darwinian evolution is supported by evidence.

3. **Writing that individuals evolve:** Individuals do NOT evolve. Only POPULATIONS evolve (through changes in allele frequencies). An individual's traits are fixed; evolution occurs across generations.

4. **Confusing genetic drift with natural selection:** Genetic drift is RANDOM (chance events change allele frequencies). Natural selection is NON-RANDOM (environment favours certain alleles). Drift is strongest in small populations; selection operates regardless of population size.

5. **Writing that mutations are caused by the environment "needing" them:** Mutations occur randomly, regardless of environmental conditions. The environment SELECTS for beneficial mutations that already exist; it does not cause specific mutations to arise.

6. **Confusing homologous and analogous structures:** Homologous = common ancestry, similar underlying structure, possibly different function (divergent evolution). Analogous = different ancestry, similar function, different structure (convergent evolution).

7. **Writing that the three-domain system replaced the five-kingdom system:** The three-domain system is a higher-level classification. The five-kingdom system is still valid within the domain Eukarya. They are complementary, not contradictory.

8. **Misunderstanding Hardy-Weinberg equilibrium:** Hardy-Weinberg describes an idealised, non-evolving population. If a real population does NOT meet Hardy-Weinberg expectations, it means evolution IS occurring. The Hardy-Weinberg equation is a null hypothesis to test against.

9. **Writing that polyploidy is a common speciation mechanism in animals:** Polyploidy is a major mechanism in PLANTS but is extremely rare in animals because it often causes sterility (problems with meiosis and chromosome pairing).

10. **Confusing the bottleneck effect and the founder effect:** Both are examples of genetic drift. The bottleneck effect is a drastic REDUCTION in an existing population. The founder effect is when a SMALL group establishes a NEW population. Both result in reduced genetic diversity, but the mechanisms differ.

---

## Problem Set

**Problem 1:** In a population of snails, shell colour is controlled by a single gene with two alleles: B (brown, dominant) and b (yellow, recessive). A sample of 1000 snails contains 160 yellow snails. Assuming the population is in Hardy-Weinberg equilibrium, calculate: (a) the frequency of the b allele, (b) the frequency of the B allele, (c) the number of heterozygous snails, and (d) the proportion of brown snails that are carriers of the b allele.

If you get this wrong, revise: Population Genetics -- The Hardy-Weinberg Principle

<details>
<summary>Solution</summary>

(a) $q^2 = \frac{160}{1000} = 0.16$. Therefore, $q = \sqrt{0.16} = 0.4$.

(b) $p = 1 - q = 1 - 0.4 = 0.6$.

(c) Frequency of heterozygotes = $2pq = 2 \times 0.6 \times 0.4 = 0.48$. Number = $0.48 \times 1000 = 480$.

(d) Total brown snails = $1000 - 160 = 840$. Heterozygous brown snails = 480. Proportion of brown snails that are carriers = $\frac{480}{840} = 0.571$ (57.1%). This demonstrates that the majority of brown snails carry the recessive allele, even though it is not visible in their phenotype.

</details>

**Problem 2:** A volcanic eruption separates a population of lizards into two groups on opposite sides of a lava flow. Over 50,000 years, the two populations evolve into separate species. Describe the process of allopatric speciation that would occur, naming the types of reproductive isolation that might develop.

If you get this wrong, revise: Speciation -- Allopatric Speciation; Reproductive Isolation

<details>
<summary>Solution</summary>

1. **Geographic isolation:** The lava flow creates a physical barrier, separating the lizard population into two subpopulations with no gene flow between them.

2. **Different selection pressures:** The two sides of the lava flow may have different environmental conditions (vegetation type, temperature, predators, food sources), creating different selection pressures.

3. **Independent evolution:** Natural selection, mutation, and genetic drift act independently on each population. Allele frequencies diverge over time. For example, lizards on the dry side may evolve longer legs for running on open ground, while lizards on the vegetated side may develop better climbing ability.

4. **Accumulation of reproductive isolation:** Over thousands of generations, pre-zygotic barriers may develop:
 - **Behavioural isolation:** Different courtship displays or pheromones
 - **Temporal isolation:** Different breeding seasons
 - **Mechanical isolation:** Differences in reproductive structures

5. **Complete speciation:** Even if the lava flow cools and becomes passable, accumulated differences prevent successful interbreeding. The two populations are now separate species.

</details>

**Problem 3:** Explain how antibiotic resistance in bacteria provides evidence for natural selection. In your answer, explain why the overuse of antibiotics contributes to the problem.

If you get this wrong, revise: Adaptation -- Antibiotic Resistance in Detail

<details>
<summary>Solution</summary>

Antibiotic resistance demonstrates natural selection because:

1. **Variation exists:** Random mutations in bacterial DNA create variation, including mutations that confer antibiotic resistance (e.g., production of beta-lactamase enzyme).
2. **Selection pressure:** The antibiotic kills susceptible bacteria but not resistant ones.
3. **Differential survival:** Resistant bacteria survive and reproduce, passing the resistance gene to offspring (vertical transmission).
4. **Inheritance:** The resistance allele increases in frequency over generations. This is a change in the gene pool -- evolution by natural selection.

Overuse of antibiotics contributes because:

- Frequent antibiotic use creates constant selection pressure, favouring resistant strains
- Incomplete courses leave partially resistant bacteria alive, which then multiply
- Using antibiotics for viral infections (where they are ineffective) creates selection pressure without any benefit
- Use in agriculture exposes large bacterial populations to sub-therapeutic antibiotic doses, promoting resistance development

Additionally, resistance genes can spread between different bacterial species through horizontal gene transfer (plasmids during conjugation), accelerating the spread of resistance beyond what vertical transmission alone would achieve.

</details>

---


---

## Hardy-Weinberg Applied: Testing for Selection

### Using the Chi-Square Test

The chi-square ($\chi^2$) test can determine whether observed genotype frequencies in a population differ significantly from Hardy-Weinberg expected frequencies (indicating that evolution is occurring).

$$\chi^2 = \sum \frac{(O - E)^2}{E}$$

Where $O$ = observed frequency, $E$ = expected frequency.

**Steps:**

1. Calculate expected genotype frequencies from allele frequencies using Hardy-Weinberg
2. Calculate $\chi^2$ by summing $(O - E)^2 / E$ for each genotype
3. Compare to the critical value at the appropriate degrees of freedom (df = number of genotypes - number of alleles)
4. For two alleles, df = 3 - 2 = 1. The critical value at p = 0.05 is 3.84
5. If $\chi^2 > 3.84$The deviation from Hardy-Weinberg is statistically significant, suggesting evolution is occurring

### Worked Example: Chi-Square Test

In a population of 600 individuals, the observed genotypes for a trait are: AA = 340, Aa = 220, aa = 40. Test whether this population is in Hardy-Weinberg equilibrium.

<details>
<summary>Solution</summary>

Step 1: Calculate allele frequencies from observed data.

Total alleles = 600 $\times$ 2 = 1200

$p = \frac{2(340) + 220}{1200} = \frac{900}{1200} = 0.75$

$q = \frac{2(40) + 220}{1200} = \frac{300}{1200} = 0.25$

Step 2: Calculate expected genotype frequencies.

$p^2 = 0.75^2 = 0.5625$; expected AA = $0.5625 \times 600 = 337.5$

$2pq = 2 \times 0.75 \times 0.25 = 0.375$; expected Aa = $0.375 \times 600 = 225.0$

$q^2 = 0.25^2 = 0.0625$; expected aa = $0.0625 \times 600 = 37.5$

Step 3: Calculate $\chi^2$.

$\chi^2 = \frac{(340 - 337.5)^2}{337.5} + \frac{(220 - 225.0)^2}{225.0} + \frac{(40 - 37.5)^2}{37.5}$

$= \frac{6.25}{337.5} + \frac{25}{225.0} + \frac{6.25}{37.5} = 0.0185 + 0.1111 + 0.1667 = 0.296$

Step 4: Compare to critical value.

$\chi^2 = 0.296 < 3.84$ (critical value at df = 1, p = 0.05)

The deviation from Hardy-Weinberg is NOT statistically significant. The population appears to be in Hardy-Weinberg equilibrium, and there is no evidence of evolutionary change for this gene.

</details>

---

## Coevolution

### What is Coevolution?

Coevolution occurs when two or more species reciprocally affect each other's evolution. Each species acts as a selective pressure on the other, driving reciprocal adaptations.

### Types of Coevolution

**1. Predator-prey coevolution:**

Predators and prey are locked in an evolutionary "arms race." Adaptations in one drive counter-adaptations in the other.

| Predator Adaptation | Prey Counter-Adaptation |
| ----------------------- | -------------------------------- |
| Speed (cheetah) | Speed and agility (gazelle) |
| Camouflage (tiger) | Camouflage (deer fawns) |
| Venom (snakes) | Venom resistance (some prey) |
| Cooperative hunting (wolves) | Group vigilance and defence (wildebeest) |
| Echolocation (bats) | Jamming signals (moths) |

**2. Plant-herbivore coevolution:**

Plants evolve defences against herbivores; herbivores evolve counter-adaptations to overcome these defences.

| Plant Defence | Herbivore Counter-Adaptation |
| ----------------------- | ----------------------------------- |
| Physical (thorns, spines) | Modified mouthparts to avoid thorns |
| Chemical (toxins, tannins) | Detoxification enzymes; specialised gut flora |
| Silica in grass leaves | Wearing down of teeth (grazing adaptation) |
| Mimicry (non-toxic species mimicking toxic ones) | Learning to avoid both |

**3. Mutualistic coevolution:**

| Example | Description |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Flowers and pollinators | Flower shape, colour, and scent evolve to attract specific pollinators; pollinator mouthparts evolve to access nectar efficiently. Orchids and their specific bee pollinators are a classic example. |
| Acacia trees and acacia ants | The tree provides food (Beltian bodies) and shelter (hollow thorns); the ants defend the tree against herbivores. |
| Coral and zooxanthellae | Coral provides shelter and $\mathrm{CO}_2$; zooxanthellae provide photosynthate and oxygen. Essential for coral reef formation. |

---

## Human Evolution

### Evidence for Human Evolution

**Fossil hominins:**

| Species | Age (approximate) | Key Features |
| -------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| _Sahelanthropus tchadensis_ | 7 million years | Small brain; bipedal (foramen magnum position); ape-like features |
| _Australopithecus afarensis_ | 3-4 million years | Bipedal but with ape-like proportions; small brain; "Lucy" is the most famous specimen |
| _Homo habilis_ | 2-2.4 million years | Larger brain (~600 cm$^3$); first stone tool use (Oldowan tools); reduced canine teeth |
| _Homo erectus_ | 1.8M - 100k years | Larger brain (~900 cm$^3$); Acheulean hand axes; first to migrate out of Africa; use of fire |
| _Homo neanderthalensis_ | 400k - 40k years | Large brain (~1500 cm$^3$); robust body; complex tools; burial of dead; interbred with _Homo sapiens_ |
| _Homo sapiens_ | 300k years ago | Large brain (~1350 cm$^3$); complex language; sophisticated tools and art; global distribution |

**Key trends in human evolution:**

1. **Increasing brain size:** From approximately 400 cm$^3$ in _Australopithecus_ to approximately 1,350 cm$^3$ in _Homo sapiens_
2. **Bipedalism:** Walking on two legs evolved before large brain size; freed the hands for tool use
3. **Reduced jaw and teeth:** As tools were used for processing food, strong jaws and large teeth became less necessary
4. **Increased manual dexterity:** Opposable thumbs and precision grip allowed complex tool use
5. **Development of language:** Anatomical changes (larynx position, brain regions) enabled complex vocal communication
6. **Reduced body hair:** Possible role in thermoregulation during endurance running in hot African savannah environments


---

## Population Genetics

### The Gene Pool and Allele Frequencies

A population is a group of individuals of the same species that live in the same area and can interbreed. The **gene pool** is the total collection of all alleles of all genes in the population at a given time.

**Allele frequency ($p$ or $q$):** The proportion of a specific allele among all alleles of that gene in the population.

**Genotype frequency:** The proportion of individuals in the population with a specific genotype.

### Hardy-Weinberg Equilibrium (Extended)

For a gene with two alleles ($A$ and $a$):

$$p + q = 1$$

$$p^2 + 2pq + q^2 = 1$$

Where:
- $p$ = frequency of the dominant allele ($A$)
- $q$ = frequency of the recessive allele ($a$)
- $p^2$ = frequency of the homozygous dominant genotype ($AA$)
- $2pq$ = frequency of the heterozygous genotype ($Aa$)
- $q^2$ = frequency of the homozygous recessive genotype ($aa$)

**Assumptions for Hardy-Weinberg equilibrium (NONE of these are truly met in nature):**

| Assumption | Description | If Violated... |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| No mutations | No new alleles are created by mutation | Mutation introduces new alleles, changing allele frequencies |
| No gene flow (migration) | No individuals enter or leave the population | Immigration or emigration introduces or removes alleles |
| Random mating | All individuals have an equal chance of mating with any other individual (no assortative mating or sexual selection) | Non-random mating changes genotype frequencies (but not necessarily allele frequencies) |
| No natural selection | All genotypes have equal survival and reproductive success | Natural selection favours certain alleles over others, changing allele frequencies |
| Large population size | The population is infinitely large | Genetic drift has a significant effect in small populations, causing random changes in allele frequencies |

### Worked Example: Sickle Cell Anaemia and Malaria

In a population, 4% of individuals have sickle cell anaemia (homozygous recessive, $H^s H^s$).

1. $q^2 = 0.04$ (frequency of $H^s H^s$)
2. $q = \sqrt{0.04} = 0.2$ (frequency of the $H^s$ allele)
3. $p = 1 - q = 1 - 0.2 = 0.8$ (frequency of the normal $H^A$ allele)
4. $p^2 = 0.64$ (frequency of $H^A H^A$ -- normal, homozygous)
5. $2pq = 2 \times 0.8 \times 0.2 = 0.32$ (frequency of $H^A H^s$ -- carriers, with sickle cell trait)

**Heterozygote advantage:** In malaria-endemic regions, heterozygous individuals ($H^A H^s$) have a survival advantage because their red blood cells provide a less favourable environment for the _Plasmodium_ parasite. This means:
- $H^A H^A$ individuals are susceptible to malaria (disadvantage in malaria-endemic regions)
- $H^s H^s$ individuals have sickle cell anaemia (severe disadvantage)
- $H^A H^s$ individuals have mild or no symptoms of sickle cell disease AND some resistance to malaria (advantage)

This maintains both alleles in the population at relatively high frequencies (balancing selection), explaining why sickle cell anaemia is more common in populations originating from malaria-endemic regions (sub-Saharan Africa, parts of the Mediterranean, Middle East, and India).

### Genetic Drift

Genetic drift is the random change in allele frequencies in a population due to chance events. It has a greater effect in small populations.

| Type of Genetic Drift | Description |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Bottleneck effect | A population is drastically reduced in size (by natural disaster, hunting, habitat destruction); the surviving individuals are not representative of the original gene pool; allele frequencies change by chance; genetic diversity is reduced |
| Founder effect | A small group of individuals colonises a new area (e.g., island); the gene pool of the new population is determined by the alleles carried by the founders; rare alleles in the source population may become common in the new population |
| Example -- bottleneck | Northern elephant seals: hunted to near extinction in the 19th century (population reduced to ~20 individuals); recovered to over 100,000 but have much less genetic diversity than southern elephant seals |
| Example -- founder effect | Amish population in Pennsylvania: founded by ~200 individuals; high frequency of Ellis-van Creveld syndrome (a rare form of dwarfism caused by a recessive allele) due to the founder effect and subsequent inbreeding |

---

## Human Evolution

### Hominin Timeline

| Species | Approximate Age | Key Features | Significance |
| ------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| _Sahelanthropus tchadensis_ | ~7 million years ago | Small brain (~360 cm$^3$); foramen magnum positioned underneath the skull (suggesting bipedalism); ape-like features | One of the oldest known ancestors after the split from the chimpanzee lineage |
| _Australopithecus afarensis_ (Lucy) | ~3.9-2.9 million years ago | Brain ~380-550 cm$^3$; bipedal pelvis and leg bones; ape-like face and brain size; long arms | Clear evidence of bipedalism before significant brain enlargement |
| _Australopithecus africanus_ | ~3-2 million years ago | Brain ~400-500 cm$^3$; more human-like face than _A. Afarensis_; bipedal | Gracile (slender) australopithecine |
| _Paranthropus boisei_ | ~2.3-1.2 million years ago | Brain ~500-550 cm$^3$; massive jaw and large molars for chewing tough plant material (robust australopithecine) | Specialised herbivore; went extinct; represents a side branch, not a direct human ancestor |
| _Homo habilis_ | ~2.4-1.4 million years ago | Brain ~510-687 cm$^3$ (larger than australopithecines); first evidence of stone tool use (Oldowan tools) | "Handy man"; likely the first member of the genus _Homo_; marks the beginning of tool use |
| _Homo erectus_ | ~1.9 million - 110,000 years ago | Brain ~600-1250 cm$^3$; first to migrate out of Africa; used fire; more sophisticated tools (Acheulean handaxes); larger body size | First hominin to leave Africa; first to use fire (cooking food may have supported brain enlargement) |
| _Homo heidelbergensis_ | ~700,000-200,000 years ago | Brain ~1100-1400 cm$^3$; likely ancestor of both _Homo neanderthalensis_ and _Homo sapiens_ | Intermediate between _H. Erectus_ and modern humans; first evidence of deliberate burial of the dead |
| _Homo neanderthalensis_ (Neanderthals) | ~400,000-40,000 years ago | Brain ~1200-1750 cm$^3$ (larger than modern humans on average); robust body; lived in Europe and western Asia; used complex tools; possibly had language; buried their dead | Closest extinct relatives of modern humans; interbred with _H. Sapiens_ (1-4% of modern non-African human DNA is of Neanderthal origin) |
| _Homo sapiens_ | ~300,000 years ago to present | Brain ~1200-1500 cm$^3$; gracile skeleton; prominent chin; high forehead; complex language and culture; symbolic art; agriculture; technology | Only surviving hominin species; originated in Africa; migrated worldwide; developed agriculture, civilisation, and technology |

### Trends in Human Evolution

| Trend | Description |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Increasing brain size | Cranial capacity increased from ~400 cm$^3$ in australopithecines to ~1400 cm$^3$ in modern humans; associated with increased cognitive ability, tool use, language, and social complexity |
| Bipedalism | The foramen magnum moved to the underside of the skull; the spine developed an S-shape; the pelvis became shorter and broader; the femur angled inward; the foot developed arches; freed the hands for tool use and carrying |
| Decreasing jaw and tooth size | As tools were used for processing food and cooking made food softer, the need for large jaws and teeth decreased; the jaw became smaller and more parabolic (U-shaped); the chin developed as a by-product of jaw reduction |
| Flatter face | The face became flatter as the jaws reduced; the brow ridge became less prominent; the forehead became higher and more vertical |
| Reduced body hair | Likely associated with the evolution of sweating for thermoregulation during endurance running in hot African savanna environments |

:::tip
Tip
Ready to test your understanding of **Evolution**? Review the [Evolution and Ecology diagnostic test](/docs/dse/Biology/diagnostics/diag-evolution-ecology) which covers evolution topics within the DSE specification.

See [Diagnostic Guide](/docs/dse/Biology/diagnostics/diagnostic-guide) for instructions on self-marking and building a personal test matrix.

---

## Evidence for Evolution

### 1. Fossil Evidence

Fossils are the preserved remains or traces of organisms that lived in the past. The fossil record provides direct evidence of evolutionary change over time.

| Type of Fossil | Description | Example |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Body fossils | Preserved hard parts (bones, teeth, shells) or rarely soft parts (amber, freezing, mineralisation) | Dinosaur bones; mammoths preserved in ice |
| Trace fossils | Evidence of activity rather than the organism itself | Footprints; burrows; coprolites (fossilised faeces) |
| Casts and moulds | Organism buried in sediment decays, leaving a mould; minerals fill the mould to form a cast | Ammonite casts |
| Amber preservation | Organism trapped in tree resin that hardens into amber; preserves fine detail of soft tissues | Insects in amber |

**Limitations of the fossil record:**

- Fossilisation is rare -- requires rapid burial in conditions that prevent decay (e.g., sediment, mud, tar, ice)
- Many organisms have no hard parts and are unlikely to fossilise (soft-bodied organisms, bacteria, small invertebrates)
- Fossils are often incomplete or damaged
- The fossil record is biased towards organisms that lived in certain environments (marine, sedimentary) and towards organisms with hard parts
- Despite these limitations, the fossil record shows clear patterns of gradual change over geological time

**Transitional fossils:** Fossils that show intermediate characteristics between two groups of organisms, providing evidence of evolutionary transitions.

| Transitional Fossil | Transitional Between | Key Features |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| _Tiktaalik_ | Fish and tetrapods | Fish-like scales and fins, but with a flat head, neck, and limb bones resembling early tetrapods (~375 million years ago) |
| _Archaeopteryx_ | Reptiles and birds | Feathers and wishbone like birds, but teeth, long bony tail, and claws like reptiles (~150 million years ago) |
| _Australopithecus afarensis_ (Lucy) | Ape-like ancestors and humans | Bipedal pelvis and leg bones, but small brain and ape-like face (~3.2 million years ago) |
| _Ambulocetus_ | Land mammals and whales | Legs that could support weight on land, but also adaptations for swimming (~50 million years ago) |
| _Tetrapodophus_ | Reptiles and mammals | Reptile-like jaw and teeth, but mammal-like ear bones and post-cranial skeleton (~260 million years ago) |

### 2. Comparative Anatomy

**Homologous structures:** Structures in different species that share a common evolutionary origin (derived from a common ancestor), even though they may serve different functions. The presence of homologous structures is evidence of divergent evolution.

| Homologous Structure | Species | Function in Each Species |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Pentadactyl limb | Human, bat, whale, horse | Grasping (human); flying (bat); swimming (whale); running (horse) -- same basic bone arrangement (humerus, radius, ulna, carpals, metacarpals, phalanges) modified for different functions |
| Vertebral column | All vertebrates | Support and protection of the spinal cord |
| Forelimb bones | Bird, crocodile, human | Modified for flight (bird), walking (crocodile), manipulation (human) -- same underlying structure |

**Analogous structures:** Structures in different species that serve similar functions but have different evolutionary origins. They are NOT evidence of common ancestry; instead, they demonstrate convergent evolution.

| Analogous Structure | Species | Description |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Wings | Bird, bat, insect | All used for flight, but bird wings are modified forelimbs with feathers; bat wings are modified forelimbs with skin membranes; insect wings are extensions of the exoskeleton -- completely different origins |
| Eyes | Cephalopod (octopus), vertebrate | Similar camera-type eye structure but evolved independently; different embryological origin and retinal cell arrangement (octopus retina is not inverted) |
| Streamlined body shape | Shark (fish), dolphin (mammal), ichthyosaur (reptile) | All adapted for fast swimming in water, but sharks are fish, dolphins are mammals, ichthyosaurs were reptiles |

### 3. Comparative Embryology

- Embryos of different vertebrate species show remarkable similarities in their early developmental stages
- All vertebrate embryos have: pharyngeal pouches (which develop into gills in fish, parts of the ear/thyroid in mammals), a tail, and a notochord
- These similarities suggest a common ancestry
- As development proceeds, the embryos diverge in appearance as species-specific features develop
- Proposed by Ernst Haeckel ("ontogeny recapitulates phylogeny") -- though this is an oversimplification, the underlying principle of shared embryological features supporting common ancestry remains valid

### 4. Molecular Evidence (Biochemical)

- All organisms use **DNA** as their genetic material
- The **genetic code** is nearly universal (with minor variations in mitochondrial DNA and some protists) -- the same codons code for the same amino acids in bacteria, plants, and animals
- Organisms that are more closely related share a greater percentage of their DNA sequence
- Cytochrome c (a protein involved in respiration) can be compared across species: humans and chimpanzees share identical cytochrome c; humans and yeast differ at approximately 50% of amino acid positions

| Species Pair | DNA Similarity | Time Since Common Ancestor |
| ------------------------- | ---------------- | --------------------------- |
| Human -- Chimpanzee | ~98.7% | ~6-7 million years ago |
| Human -- Gorilla | ~98.4% | ~8-10 million years ago |
| Human -- Mouse | ~85% | ~75-90 million years ago |
| Human -- Fruit fly (_Drosophila_) | ~60% | ~600 million years ago |
| Human -- Yeast | ~30% | ~1 billion years ago |

### 5. Biogeography

- The geographic distribution of species provides evidence for evolution
- Species on oceanic islands often resemble the species on the nearest mainland, but have evolved differences (e.g., Darwin's finches on the Galapagos Islands resemble South American finches)
- The unique fauna of Australia (marsupials such as kangaroos, koalas, wombats) is explained by the long isolation of the Australian continent after it separated from Gondwana
- Continental drift explains the distribution of fossils (e.g., the same fossil species found on now-separated continents that were once joined)

---

## Speciation

### Allopatric Speciation (Geographic Isolation)

The most common form of speciation; occurs when populations of a species become geographically separated.

1. **Geographic isolation:** A physical barrier divides the population (mountain range, river, ocean, desert, glaciation)
2. **Separate gene pools:** The two populations can no longer interbreed; gene flow between them stops
3. **Different selection pressures:** The two populations experience different environmental conditions (different climate, predators, food sources, etc.)
4. **Natural selection and genetic drift:** Each population accumulates different alleles through natural selection, genetic drift, and mutation
5. **Reproductive isolation:** Over time, the populations diverge so much that even if they come back into contact, they can no longer interbreed to produce fertile offspring -- they are now separate species

### Sympatric Speciation

Occurs without geographic isolation; populations become reproductively isolated while living in the same area.

| Mechanism | Description | Example |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Polyploidy | A mutation causes a doubling of chromosome number (e.g., from diploid 2n to tetraploid 4n); the polyploid individual cannot interbreed with the original diploid population | Common in plants (wheat, cotton, tobacco); rare in animals |
| Ecological (habitat) specialisation | Different populations of the same species exploit different habitats or food sources within the same area | Apple maggot fly: originally laid eggs on hawthorn; some switched to apples after apples were introduced to North America; now partially reproductively isolated |
| Sexual selection | Different mating preferences or behaviours within a population lead to assortative mating | Cichlid fish in African lakes: different colour patterns preferentially attract different mates |
| Behavioural isolation | Different courtship songs, dances, or pheromones prevent interbreeding | Cricket species distinguished by their mating songs |

### Reproductive Isolating Mechanisms

Reproductive isolation can be pre-zygotic (before fertilisation) or post-zygotic (after fertilisation).

| Type | Mechanism | Example |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **Pre-zygotic** | | |
| Temporal isolation | Populations breed at different times of year, day, or season | Two species of frogs breed in different months |
| Habitat isolation | Populations live in different habitats within the same area | One species of insect lives on tree bark, another in the canopy |
| Behavioural isolation | Different courtship rituals, songs, or displays prevent mating | Bird species with different songs do not recognise each other's courtship |
| Mechanical isolation | Physical differences in reproductive structures prevent mating | Insect species with incompatible genitalia |
| Gametic isolation | Sperm and egg cannot fuse (chemical incompatibility) | Marine species that release gametes into water; sperm of one species cannot penetrate egg of another |
| **Post-zygotic** | | |
| Hybrid inviability | Zygote forms but the hybrid embryo does not develop properly or dies before reproductive age | Hybrid salamanders die before reaching sexual maturity |
| Hybrid sterility | Hybrid offspring are viable but sterile | Mule (horse $\times$ donkey) -- healthy but sterile due to odd chromosome number (63) |
| Hybrid breakdown | First-generation hybrids are viable and fertile, but subsequent generations show reduced fitness | Hybrid rice: first generation vigorous, later generations show reduced yield |

### Adaptive Radiation

Adaptive radiation is the rapid diversification of a single ancestral species into many different species, each adapted to a different ecological niche.

**Conditions that promote adaptive radiation:**

1. A new, unoccupied habitat or ecological opportunity becomes available
2. The ancestral species has a trait that provides a "key innovation" allowing it to exploit new resources
3. Low competition from other species in the new habitat

**Classic examples:**

| Example | Description |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Darwin's finches (Galapagos) | Single ancestral finch species from South America gave rise to 13-15 species with different beak shapes adapted to different food sources (seeds, insects, cactus flowers, blood) |
| Hawaiian honeycreepers | Over 50 species evolved from a single ancestral finch-like bird, with diverse beak shapes for nectar, insects, seeds, and snails |
| Cichlid fish (African lakes) | Hundreds of cichlid species evolved rapidly in Lake Victoria, Lake Malawi, and Lake Tanganyika, occupying diverse ecological niches |
| Mammalian radiation (after K-T extinction) | After the extinction of the dinosaurs 66 million years ago, mammals rapidly diversified to fill the vacant ecological niches |

### Common Pitfalls

- **Speciation requires reproductive isolation, NOT just physical differences.** Two populations can look very different but still be the same species if they can interbreed and produce fertile offspring
- **Allopatric speciation is more common than sympatric speciation** because geographic isolation provides a strong barrier to gene flow
- **Polyploidy is much more common in plants than in animals.** Plants can often self-fertilise and tolerate extra chromosome sets; most animal polyploids are sterile
- **Hybrid sterility (e.g., mules) is a post-zygotic mechanism**, NOT pre-zygotic. The zygote forms and develops, but the resulting organism cannot reproduce
- **Analogous structures are evidence of convergent evolution, NOT common ancestry.** Homologous structures are evidence of common ancestry**
- **The fossil record is incomplete but still provides strong evidence.** The fact that some transitional fossils have not been found does not invalidate evolution**
:::

## Summary

<!-- TODO: Add a summary for this topic -->

## Worked Examples

<!-- TODO: Add worked examples for this topic -->
