---
title: Evolution and Ecology
description: "DSE Biology evolution and ecology notes covering natural selection, evidence for evolution, population ecology, nutrient cycles, and human impact on ecosystems."
date: 2026-04-07T00:00:00.000Z
tags:
  - DSE
  - Biology
categories:
  - DSE
  - Biology
slug: evolution-and-ecology
---

## Evolution Overview

### What is Evolution?

**Definition.** Evolution is the cumulative change in the heritable characteristics of a population
over successive generations, driven by mechanisms such as natural selection, genetic drift, gene
flow, and mutation.

Evolution operates on populations, not individuals. An individual organism does not evolve during
its lifetime; rather, the genetic composition of the population shifts across generations. The unit
of evolution is the population; the unit of selection is the individual (or, in some cases, the
gene).

### Evidence for Evolution

| Type of Evidence    | Description                                                                                    | Example                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Fossil record       | Sequential appearance of organisms in rock layers; transitional forms show intermediate traits | Archaeopteryx (reptile-bird transition); Tiktaalik (fish-tetrapod transition) |
| Comparative anatomy | Structural similarities across species indicating common ancestry                              | Pentadactyl limb in humans, bats, whales, cats                                |
| Molecular biology   | DNA and protein sequence similarities reflect evolutionary relationships                       | Cytochrome c is nearly identical across all eukaryotes                        |
| Biogeography        | Geographic distribution of species matches continental drift patterns                          | Marsupials in Australia vs placentals elsewhere                               |
| Embryology          | Embryos of related species resemble each other in early developmental stages                   | Pharyngeal pouches in fish, chick, and human embryos                          |

### Lamarckism vs Darwinism

| Feature                         | Lamarckism (Inheritance of Acquired Characteristics)                    | Darwinism (Natural Selection)                                       |
| ------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Proposed by                     | Jean-Baptiste Lamarck (1809)                                            | Charles Darwin (1859)                                               |
| Mechanism                       | Use and disuse of organs; traits acquired during lifetime are inherited | Variation exists naturally; favourable traits are selected for      |
| Heritability of acquired traits | Yes -- traits gained during life are passed on                          | No -- only genetically determined traits are inherited              |
| Direction of change             | Driven by organism's needs and efforts                                  | Driven by environmental pressures selecting from existing variation |
| Evidence                        | Discredited; no mechanism for inheritance of acquired traits            | Strongly supported by genetics, fossil record, molecular biology    |
| Example                         | Giraffes stretch necks to reach leaves, longer necks inherited          | Giraffes with naturally longer necks survive and reproduce more     |

:::info Lamarckism is not accepted by modern science. However, the field of epigenetics has revealed
that environmental factors can influence gene expression across generations without changing the DNA
sequence itself. This is sometimes mistakenly conflated with Lamarckism, but epigenetic changes are
reversible and do not create new alleles.
:::

---

## Natural Selection

### Darwin's Theory of Natural Selection

Darwin's theory rests on five key observations and inferences:

1. **Variation:** Individuals within a population exhibit heritable variation in traits.
2. **Overproduction:** Populations produce more offspring than the environment can support.
3. **Competition:** There is competition for limited resources (food, mates, space).
4. **Differential survival and reproduction:** Individuals with traits better suited to the
   environment have a higher probability of surviving and reproducing.
5. **Accumulation:** Favourable traits accumulate in the population over generations.

**Definition.** Natural selection is the process by which organisms with traits that enhance
survival and reproduction in a given environment tend to leave more offspring than those without
such traits, causing the favourable traits to increase in frequency over time.

### Conditions for Natural Selection

For natural selection to operate, four conditions must be met:

- **Variation:** There must be phenotypic differences among individuals in the population.
- **Heritability:** The variation must have a genetic basis so it can be passed to offspring.
- **Differential fitness:** Different phenotypes must confer different probabilities of survival
  and/or reproduction.
- **Selection pressure:** An environmental factor must create a consistent fitness differential
  (e.g., predation, climate, resource availability).

### Types of Natural Selection

| Type                  | Description                                                                | Graph Shape        | Example                                                                                        |
| --------------------- | -------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| Stabilising selection | Favouring intermediate phenotypes; extreme phenotypes are selected against | Narrowing, centred | Human birth weight (very low and very high have higher mortality)                              |
| Directional selection | Favouring one extreme phenotype; the mean shifts in one direction          | Shift along axis   | Peppered moth (dark form favoured during industrial pollution)                                 |
| Disruptive selection  | Favouring both extremes; intermediate phenotypes are selected against      | Two peaks          | African seedcracker finch (large and small beaks favoured, intermediate beaks disadvantageous) |

### Classic Examples

**Peppered moth (Biston betularia):**

Before the Industrial Revolution in England, the light-coloured form was common on lichen-covered
trees. During industrialisation, soot darkened tree bark, making light moths more visible to
predators. The dark (melanic) form increased in frequency. After clean-air legislation reduced
pollution, the light form rebounded. This demonstrates directional selection driven by changing
environmental conditions.

**Antibiotic resistance:**

When a bacterial population is exposed to an antibiotic, most bacteria die. However, any bacteria
carrying a resistance allele (from a prior mutation) survive, reproduce, and pass on the resistance
gene. The next generation is predominantly resistant. This is directional selection and a major
public health concern.

**Sickle cell anaemia and malaria:**

The sickle cell allele (HbS) is recessive. Homozygous HbS/HbS individuals suffer sickle cell
disease. Homozygous HbA/HbA individuals are normal. Heterozygous HbA/HbS individuals have sickle
cell trait with mild or no symptoms and are resistant to malaria. In regions where malaria is
endemic, the heterozygote has a selective advantage -- this is **heterozygote advantage** (balanced
polymorphism). The allele is maintained in the population at higher frequency than would be expected
if it were purely deleterious.

:::warning A common misconception is that antibiotic resistance develops because bacteria "need" to
survive. Resistance arises from random pre-existing mutations; the antibiotic simply selects for
resistant individuals. The mutation occurs regardless of the antibiotic's presence.
:::

---

## Genetics of Evolution

### Hardy-Weinberg Equilibrium

The Hardy-Weinberg principle describes a theoretical population in which allele frequencies remain
constant from generation to generation in the absence of evolutionary forces.

$$p^2 + 2pq + q^2 = 1$$

$$p + q = 1$$

Where:

- $p$ = frequency of the dominant allele
- $q$ = frequency of the recessive allele
- $p^2$ = frequency of homozygous dominant genotype
- $2pq$ = frequency of heterozygous genotype
- $q^2$ = frequency of homozygous recessive genotype

### Conditions for Hardy-Weinberg Equilibrium

For allele frequencies to remain constant, all of the following must hold:

1. **No mutations** -- no new alleles are introduced
2. **Random mating** -- individuals mate without regard to genotype
3. **No natural selection** -- all genotypes have equal fitness
4. **Extremely large population size** -- genetic drift is negligible
5. **No gene flow** -- no migration into or out of the population

In reality, no natural population satisfies all five conditions. HWE serves as a null model: if
observed genotype frequencies deviate from HWE predictions, one or more evolutionary forces are at
work.

### Allele Frequency Calculations

**Worked calculation:**

In a population, 16% of individuals exhibit a recessive disorder (homozygous recessive,
$q^2 = 0.16$).

$$q = \sqrt{0.16} = 0.4$$

$$p = 1 - 0.4 = 0.6$$

$$p^2 = (0.6)^2 = 0.36$$

$$2pq = 2(0.6)(0.4) = 0.48$$

Genotype frequencies: 36% homozygous dominant, 48% heterozygous, 16% homozygous recessive.

**Allele frequency from a sample:**

Given a population of 500 individuals with genotypes: 200 AA, 200 Aa, 100 aa.

Total alleles = $500 \times 2 = 1000$

Number of A alleles = $(200 \times 2) + 200 = 600$

Number of a alleles = $(100 \times 2) + 200 = 400$

$$p = \frac{600}{1000} = 0.6$$

$$q = \frac{400}{1000} = 0.4$$

:::info In DSE exams, HWE calculations are almost always tested. Remember: you can always determine
$q$ from $q^2$ (the homozygous recessive frequency), and then $p$ from $p = 1 - q$. The heterozygote
frequency $2pq$ is the one most students miscalculate -- do not assume it equals $p + q$.
:::

### Genetic Drift

**Definition.** Genetic drift is the random fluctuation of allele frequencies in a population due to
chance events, having a more pronounced effect in small populations.

**Founder effect:**

A small group of individuals breaks off from a larger population to establish a new colony. The new
population may have allele frequencies very different from the original. The Amish population in
Pennsylvania has a high incidence of Ellis-van Creveld syndrome (a form of dwarfism) because several
of the original founders carried the recessive allele.

**Bottleneck effect:**

A population is drastically reduced in size by an event (natural disaster, hunting, habitat
destruction). The surviving individuals may not represent the genetic diversity of the original
population. When the population recovers, genetic diversity is reduced. Cheetahs exhibit extremely
low genetic diversity due to a historical bottleneck.

### Gene Flow

**Definition.** Gene flow (migration) is the movement of alleles between populations through the
movement of individuals or gametes (e.g., pollen transfer). Gene flow tends to reduce genetic
differences between populations and can counteract the effects of natural selection and genetic
drift.

### Mutations as Raw Material

Mutations are the ultimate source of new genetic variation. Without mutations, there would be no new
alleles for natural selection to act upon.

- **Point mutations:** A single nucleotide change (substitution, insertion, deletion)
- **Chromosomal mutations:** Deletions, duplications, inversions, translocations
- **Mutation rate:** Typically $10^{-5}$ to $10^{-6}$ per gene per generation
- Most mutations are neutral or harmful; a small fraction are beneficial and may be selected for

### Speciation

**Definition.** Speciation is the formation of new species through the evolution of reproductive
isolation between populations.

**Allopatric speciation (geographic isolation):**

Populations are physically separated by a geographic barrier (mountain range, river, ocean). Each
population evolves independently through natural selection, genetic drift, and mutation. Over time,
reproductive isolation mechanisms accumulate. This is the most common mode of speciation.

**Sympatric speciation (same geographic area):**

New species arise without geographic separation. Common mechanisms include:

- **Polyploidy:** Common in plants. An error in cell division results in an organism with extra sets
  of chromosomes (e.g., tetraploid, 4n). The polyploid individual can only reproduce with other
  polyploids, creating instant reproductive isolation.
- **Ecological speciation:** Different populations exploit different ecological niches within the
  same area (e.g., different host plants for insects).
- **Sexual selection:** Different mating preferences or displays lead to reproductive isolation.

:::info Polyploidy is extremely rare in animals but is a major driver of speciation in plants.
Approximately 30-70% of flowering plant species are polyploid. In the DSE, questions about
speciation typically focus on allopatric speciation, but you should be able to explain polyploidy as
a mechanism of sympatric speciation in plants.
:::

---

## Evidence for Evolution (Detailed)

### Homologous vs Analogous Structures

| Feature                   | Homologous Structures                                         | Analogous Structures                                                |
| ------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------- |
| Definition                | Structures derived from a common ancestor                     | Structures with similar function but different evolutionary origins |
| Origin                    | Same embryonic origin                                         | Different embryonic origin                                          |
| Anatomical similarity     | Similar underlying anatomy                                    | May look very different internally                                  |
| Example                   | Forelimb of human, bat wing, whale flipper (pentadactyl limb) | Wing of a bird vs wing of an insect                                 |
| Evolutionary significance | Indicates divergent evolution                                 | Indicates convergent evolution                                      |

**Divergent evolution:** Related species evolve different traits from a common ancestor (homologous
structures).

**Convergent evolution:** Unrelated species evolve similar traits independently due to similar
environmental pressures (analogous structures). Examples: streamlined body shape in sharks (fish)
and dolphins (mammals); camera-type eye in cephalopods and vertebrates.

### Vestigial Organs

**Definition.** Vestigial organs are remnants of structures that were functional in ancestral
organisms but have lost their original function in the course of evolution.

Examples:

- Human appendix: remnant of a large caecum used for digesting cellulose in herbivorous ancestors
- Pelvic bones in whales and snakes: remnants of walking ancestors
- Wings of flightless birds (ostrich, kiwi): no longer used for flight
- Human tailbone (coccyx): remnant of a tail

### Molecular Clocks

The molecular clock hypothesis states that mutations accumulate in DNA at a roughly constant rate
over time. By comparing the number of sequence differences between two species in a neutral gene
(one not subject to natural selection), researchers can estimate the time since the two species
diverged from a common ancestor.

**DNA/protein sequence comparison:**

- More closely related species share a higher percentage of DNA sequence
- Humans and chimpanzees share approximately 98-99% of their DNA
- Cytochrome c amino acid sequence differences correlate with evolutionary distance
- The universal genetic code itself is evidence of common ancestry

### Transitional Fossils

Transitional fossils show intermediate characteristics between ancestral and descendant groups:

- **Tiktaalik (375 million years ago):** Fish-like with limb-like fins; intermediate between fish
  and tetrapods
- **Archaeopteryx (150 million years ago):** Feathered dinosaur with teeth and a long bony tail;
  intermediate between reptiles and birds
- **Ambulocetus (50 million years ago):** Amphibious whale ancestor with functional legs;
  intermediate between land mammals and modern whales
- **Australopithecus afarensis (3.9-2.9 million years ago):** Bipedal ape-like hominin; intermediate
  between apes and humans

### Comparative Embryology

Early embryos of vertebrates show remarkable similarity:

- Pharyngeal pouches (gill slits in fish, become parts of the ear and throat in mammals)
- Post-anal tail (present in all vertebrate embryos; reduced in adult humans)
- Notochord (develops into vertebral column in most vertebrates)
- Similar patterns of limb bud development

These similarities reflect shared developmental pathways inherited from a common ancestor.

---

## Human Evolution

### Primate Characteristics

Primates share several derived characteristics:

- Opposable thumbs (or opposable big toe in some species) for grasping
- Forward-facing eyes providing stereoscopic (3D) vision
- Large brain relative to body size
- Flat nails instead of claws on most digits
- Reduced snout and enhanced sense of vision over olfaction
- Long gestation period and usually single offspring
- Extended period of parental care

### Hominid Timeline

**Definition.** Hominids (hominins) are the group consisting of modern humans and all species more
closely related to humans than to chimpanzees.

| Species                    | Time Period                     | Key Characteristics                                                                                                  |
| -------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Sahelanthropus tchadensis  | ~7 million years ago            | Possible earliest hominin; small brain; possibly bipedal                                                             |
| Ardipithecus ramidus       | ~4.4 million years ago          | Bipedal on ground but still adapted for climbing                                                                     |
| Australopithecus afarensis | 3.9-2.9 million years ago       | Bipedal walking; ape-like face and brain (~400-500 cm cubed); "Lucy" is a famous specimen                            |
| Australopithecus africanus | 3-2 million years ago           | Similar to A. afarensis; slightly larger brain                                                                       |
| Homo habilis               | 2.4-1.4 million years ago       | First species in genus Homo; larger brain (~600 cm cubed); simple stone tools (Oldowan)                              |
| Homo erectus               | 1.9 million - 110,000 years ago | Much larger brain (~900 cm cubed); more sophisticated tools (Acheulean); first to migrate out of Africa; use of fire |
| Homo neanderthalensis      | ~400,000 - 40,000 years ago     | Large brain (~1,500 cm cubed); robust build; lived in Europe and western Asia; buried dead                           |
| Homo sapiens               | ~300,000 years ago - present    | Large brain (~1,350 cm cubed); gracile build; complex language; symbolic thought; art and culture                    |

### Key Trends in Human Evolution

1. **Increase in brain size:** From ~400 cm cubed in Australopithecus to ~1,350 cm cubed in H.
   sapiens
2. **Bipedalism:** Adaptation of the pelvis, spine, and legs for upright walking (developed before
   large brain size)
3. **Reduction in jaw size and tooth size:** Related to changes in diet and tool use
4. **Increase in manual dexterity:** More precise thumb movements for tool making
5. **Development of language and culture:** Associated with brain reorganisation (not just size
   increase)

### Out of Africa Theory

The "Recent African Origin" (Out of Africa) model proposes that modern humans (Homo sapiens) evolved
in Africa approximately 300,000 years ago and subsequently migrated to other parts of the world,
replacing existing hominin populations (such as Neanderthals in Europe).

Key evidence:

- Greatest genetic diversity is found in African populations (consistent with Africa being the
  origin)
- Fossil record shows the earliest H. sapiens fossils in Africa (Jebel Irhoud, Morocco, ~300,000
  years ago)
- Genetic analyses show that all non-African populations descend from a migration wave that left
  Africa approximately 60,000-70,000 years ago
- Neanderthal DNA makes up approximately 1-2% of the genome of non-African modern humans (indicating
  limited interbreeding)

### Mitochondrial Eve

Mitochondrial DNA (mtDNA) is inherited exclusively through the maternal line (no recombination). By
comparing mtDNA sequences from diverse human populations, researchers estimated that the most recent
common maternal ancestor of all living humans lived approximately 150,000-200,000 years ago in
Africa. This individual is called "Mitochondrial Eve" -- not the only woman alive at the time, but
the only one whose matrilineal line has survived unbroken to the present day.

:::info Mitochondrial Eve is a statistical concept, not a single individual who was the only human
female alive. Many other women lived at the same time, but their matrilineal lines happened to die
out at some point. The Y-chromosomal Adam (the most recent common paternal ancestor) lived
approximately 200,000-300,000 years ago, and the two individuals were not contemporaries.
:::

---

## Ecology Basics

### Levels of Organisation

Ecology studies interactions at multiple hierarchical levels:

| Level      | Definition                                                                   | Example                                           |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------- |
| Organism   | A single individual                                                          | One oak tree                                      |
| Population | All individuals of the same species in a given area                          | All oak trees in a forest                         |
| Community  | All populations of different species living and interacting in an area       | Oak trees, squirrels, fungi, bacteria in a forest |
| Ecosystem  | Community plus the abiotic (non-living) environment                          | Forest plus soil, water, sunlight, climate        |
| Biome      | A large region with characteristic climate and communities                   | Tropical rainforest, tundra                       |
| Biosphere  | All ecosystems on Earth; the sum of all living things and their environments | Earth                                             |

### Biotic vs Abiotic Factors

| Biotic Factors (living) | Abiotic Factors (non-living)    |
| ----------------------- | ------------------------------- |
| Predation               | Temperature                     |
| Competition             | Light intensity                 |
| Symbiosis               | Water availability              |
| Disease                 | Soil composition (pH, minerals) |
| Food availability       | Oxygen concentration            |
| Decomposers             | Wind speed                      |
| Pollinators             | Salinity                        |

### Niche Concept

**Definition.** A niche is the role and position a species has in its environment, including all
interactions with biotic and abiotic factors. It encompasses how a species meets its needs for food
and shelter, how it survives, and how it reproduces.

- **Fundamental niche:** The full range of environmental conditions and resources a species can
  theoretically use in the absence of competitors or other limiting factors.
- **Realised niche:** The actual range of conditions and resources a species uses in the presence of
  competitors and other species. The realised niche is always a subset of (or equal to) the
  fundamental niche.

### Competitive Exclusion Principle

**Definition.** The competitive exclusion principle states that two species cannot coexist
indefinitely in the same habitat if they occupy identical niches. One species will eventually
outcompete the other, leading to the exclusion of the inferior competitor.

When two similar species coexist, they typically exhibit **resource partitioning** -- they divide
the available resources to reduce direct competition (e.g., different feeding heights, different
activity times, different food sizes).

---

## Population Ecology

### Population Growth Models

**Exponential growth (J-shaped curve):**

When resources are unlimited, a population grows exponentially:

$$\frac{dN}{dt} = rN$$

Where $N$ = population size, $r$ = intrinsic growth rate, $t$ = time.

Characteristics: rapid, accelerating growth; population doubles at regular intervals; not
sustainable long-term.

**Logistic growth (S-shaped curve):**

As resources become limiting, growth rate slows and the population stabilises at the carrying
capacity:

$$\frac{dN}{dt} = rN\left(\frac{K - N}{K}\right)$$

Where $K$ = carrying capacity.

Characteristics: initial exponential growth, deceleration as $N$ approaches $K$, stabilisation at or
near $K$.

### Carrying Capacity

**Definition.** Carrying capacity ($K$) is the maximum population size that an environment can
sustain indefinitely, given the available resources (food, water, shelter, etc.), without degrading
the environment.

Carrying capacity is not fixed -- it can change due to:

- Seasonal changes in resource availability
- Environmental changes (drought, fire, climate change)
- Technological advances (agriculture, medicine)
- Species interactions (new predators, competitors, diseases)

### Density-Dependent vs Density-Independent Factors

| Feature      | Density-Dependent Factors                                                 | Density-Independent Factors                                                |
| ------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Effect       | Intensity varies with population density                                  | Intensity is independent of population density                             |
| Role         | Regulate population size, maintain it near $K$                            | Cause population fluctuations, often catastrophically                      |
| Examples     | Competition for resources, predation, disease, parasitism, territoriality | Natural disasters (floods, earthquakes, fires), extreme weather, pollution |
| Graph effect | Growth rate decreases as density increases                                | Growth rate can drop suddenly regardless of density                        |

### r-Selection vs K-Selection

| Feature             | r-Selected Species                      | K-Selected Species                     |
| ------------------- | --------------------------------------- | -------------------------------------- |
| Environment         | Unstable, unpredictable                 | Stable, predictable                    |
| Population size     | Fluctuates wildly                       | Relatively stable, near $K$            |
| Reproduction        | Many offspring, small body size         | Few offspring, large body size         |
| Parental care       | Little or none                          | Extensive                              |
| Maturation time     | Short                                   | Long                                   |
| Lifespan            | Short                                   | Long                                   |
| Competitive ability | Low                                     | High                                   |
| Examples            | Bacteria, insects, weeds, annual plants | Elephants, whales, primates, oak trees |

### Survivorship Curves

Three idealised types:

- **Type I:** High survival rate during early and middle life; rapid decline in late life (e.g.,
  humans, large mammals, many perennial plants). Typically associated with K-selection.
- **Type II:** Constant mortality rate throughout life (e.g., many birds, some reptiles). A straight
  diagonal line on a log-survivorship plot.
- **Type III:** Very high early mortality rate; individuals that survive the early period have a
  good chance of long life (e.g., many fish, marine invertebrates, annual plants, most insects).
  Typically associated with r-selection.

:::warning Real survivorship curves rarely match idealised types exactly. Many species show
intermediate patterns. When interpreting DSE exam questions, look for the general shape rather than
trying to force a perfect classification.
:::

---

## Community Ecology

### Interspecific Interactions

| Interaction        | Effect on Species A | Effect on Species B | Example                                              |
| ------------------ | ------------------- | ------------------- | ---------------------------------------------------- |
| Predation (+/-)    | Beneficial          | Harmful             | Lion hunting zebra                                   |
| Competition (-/-)  | Harmful             | Harmful             | Two plant species competing for light                |
| Mutualism (+/+)    | Beneficial          | Beneficial          | Bees pollinating flowers; mycorrhizae on plant roots |
| Commensalism (+/0) | Beneficial          | Neutral             | Barnacles on a whale                                 |
| Parasitism (+/-)   | Beneficial          | Harmful             | Tapeworm in a human intestine; ticks on a dog        |

### Predation

Predation is a major selective force that drives adaptations in both predators and prey through
coevolution:

- **Predator adaptations:** Speed, camouflage (ambush), claws, teeth, venom, pack hunting, enhanced
  senses
- **Prey adaptations:** Camouflage (crypsis), warning colouration (aposematism), mimicry (Batesian
  and Mullerian), physical defences (spines, shells, toxins), behavioural defences (herding, alarm
  calls, playing dead), speed

**Mimicry types:**

- **Batesian mimicry:** A harmless species mimics the appearance of a harmful one (e.g., hoverfly
  mimicking a wasp)
- **Mullerian mimicry:** Two or more harmful species evolve to resemble each other (e.g., several
  species of brightly coloured poisonous frogs)

### Competition

- **Intraspecific competition:** Between individuals of the same species (e.g., male deer fighting
  for mates; plants of the same species competing for light)
- **Interspecific competition:** Between individuals of different species (e.g., lions and hyenas
  competing for prey)

The outcome of interspecific competition depends on resource overlap and competitive ability. Over
time, natural selection favours traits that reduce competition (character displacement).

### Ecological Succession

**Definition.** Ecological succession is the sequential, directional process of change in the
species composition and community structure of an ecosystem over time.

**Primary succession:**

- Occurs on bare, lifeless substrate where no soil exists (e.g., newly formed volcanic rock, sand
  dunes, land exposed by retreating glacier)
- Pioneer species: lichens, mosses, algae -- can colonise bare rock, begin soil formation
- Intermediate species: grasses, herbs, shrubs -- improve soil, create microhabitats
- Climax community: relatively stable, self-sustaining community (e.g., forest); species composition
  remains relatively constant
- Process is slow: may take hundreds to thousands of years

**Secondary succession:**

- Occurs in an area where an existing community has been disturbed but soil remains intact (e.g.,
  after a forest fire, abandoned farmland, deforested area)
- Faster than primary succession because soil and some organisms already exist
- Pioneer species: grasses and fast-growing herbs
- Eventually returns to a community resembling the original (but not necessarily identical)

### Keystone Species

**Definition.** A keystone species is a species whose impact on its community or ecosystem is
disproportionately large relative to its abundance. Removal of a keystone species causes significant
changes in community structure and can lead to loss of biodiversity.

Examples:

- Sea otters: prey on sea urchins; without otters, sea urchins overgraze kelp forests, destroying
  the habitat
- Beavers: create wetland habitats that support many other species through dam building
- Starfish (Pisaster): prey on mussels; without starfish, mussels outcompete other intertidal
  species

### Trophic Cascades

**Definition.** A trophic cascade is an indirect ecological effect where changes in the abundance of
predators at the top of a food chain cause ripple effects through lower trophic levels, altering the
entire ecosystem structure.

Classic example: In Yellowstone National Park, the removal of wolves led to overpopulation of elk,
which overgrazed willow and aspen, degrading riparian habitats and reducing beaver populations. The
reintroduction of wolves in 1995 reduced elk numbers, allowed vegetation to recover, and restored
beaver populations and the wetland habitats they create.

---

## Ecosystem Ecology

### Energy Flow

Energy enters ecosystems through photosynthesis and flows through trophic levels. Key principles:

- Energy flow is **unidirectional** (unlike nutrient cycling)
- Energy is **lost** at each trophic level (primarily as heat through respiration)
- The Sun is the ultimate energy source for nearly all ecosystems

### Trophic Levels

| Trophic Level                       | Description                                                                                          | Example                          |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------- |
| Producer (autotroph)                | Organisms that produce organic compounds from inorganic sources via photosynthesis or chemosynthesis | Plants, algae, cyanobacteria     |
| Primary consumer (herbivore)        | Eats producers                                                                                       | Rabbit, grasshopper, zooplankton |
| Secondary consumer (carnivore)      | Eats primary consumers                                                                               | Fox, frog, small fish            |
| Tertiary consumer                   | Eats secondary consumers                                                                             | Snake, large fish                |
| Quaternary consumer (apex predator) | Top of the food chain; no natural predators                                                          | Eagle, shark, lion               |
| Decomposer (detritivore)            | Breaks down dead organic matter, recycling nutrients                                                 | Bacteria, fungi, earthworms      |

### Ecological Pyramids

| Type               | What it shows                                     | Typical pattern                                   | Inverted cases                                                                                                          |
| ------------------ | ------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Pyramid of numbers | Number of organisms at each trophic level         | Decreases with each level (broad base)            | Can be inverted: one tree supports many herbivorous insects                                                             |
| Pyramid of biomass | Total dry mass of organisms at each trophic level | Decreases with each level                         | Can be inverted in aquatic ecosystems: phytoplankton biomass &lt; zooplankton biomass (rapid turnover of phytoplankton) |
| Pyramid of energy  | Total energy content at each trophic level        | Always decreases with each level (never inverted) | Never inverted; reflects the laws of thermodynamics                                                                     |

### The 10% Rule

Approximately 10% of the energy at one trophic level is transferred to the next. The remaining 90%
is lost through:

- Respiration (converted to heat)
- Excretion (waste products)
- Undigested material (faeces)
- Maintenance and movement

This rule explains why food chains are typically limited to 4-5 trophic levels -- there is
insufficient energy to sustain higher levels.

$$\mathrm{Energy available at level } n = 0.1^n \times \mathrm{Energy at producer level}$$

:::info The 10% rule is an approximation. Actual transfer efficiency ranges from about 5% to 20%
depending on the ecosystem and the organisms involved. Cold-blooded organisms are more
energy-efficient than warm-blooded ones. In DSE calculations, use 10% unless the question specifies
otherwise.
:::

### Nutrient Cycles

Nutrients cycle between biotic and abiotic components of ecosystems. Unlike energy, nutrients are
recycled.

**Carbon cycle:**

Key processes:

- Photosynthesis: $\mathrm{CO}_2$ converted to organic compounds by producers
- Respiration: organic compounds broken down, releasing $\mathrm{CO}_2$
- Combustion: burning fossil fuels releases stored carbon as $\mathrm{CO}_2$
- Decomposition: decomposers break down dead organic matter, releasing $\mathrm{CO}_2$
- Ocean absorption: oceans absorb $\mathrm{CO}_2$ from the atmosphere (dissolved $\mathrm{CO}_2$,
  bicarbonate, carbonate)
- Sedimentation: dead marine organisms form limestone and fossil fuels over geological time
- Deforestation: reduces $\mathrm{CO}_2$ uptake by photosynthesis; burning releases stored carbon

**Nitrogen cycle:**

Key processes:

- Nitrogen fixation: atmospheric $\mathrm{N}_2$ (unreactive) converted to ammonia ($\mathrm{NH}_3$)
  by nitrogen-fixing bacteria (e.g., Rhizobium in root nodules of legumes) or lightning
- Nitrification: ammonia converted to nitrite ($\mathrm{NO}_2^-$) by Nitrosomonas, then to nitrate
  ($\mathrm{NO}_3^-$) by Nitrobacter
- Absorption: plants absorb nitrate through roots
- Assimilation: plants incorporate nitrogen into amino acids and proteins
- Feeding: animals obtain nitrogen by eating plants or other animals
- Decomposition / ammonification: decomposers break down dead organisms and waste, releasing ammonia
- Denitrification: denitrifying bacteria convert nitrate back to $\mathrm{N}_2$, returning it to the
  atmosphere (e.g., Pseudomonas)

**Phosphorus cycle:**

- Phosphorus has no significant gaseous phase (unlike carbon and nitrogen)
- Weathering of rocks releases phosphate ions ($\mathrm{PO}_4^{3-}$) into soil and water
- Plants absorb phosphate; animals obtain it through food chains
- Decomposition returns phosphorus to soil
- Sedimentation: phosphorus settles to the ocean floor and forms sedimentary rock over geological
  time
- Geological uplift returns phosphorus-containing rock to the surface (very slow process)

**Water cycle:**

Key processes:

- Evaporation: water changes from liquid to vapour from oceans, lakes, rivers
- Transpiration: water vapour released from plant leaves through stomata
- Condensation: water vapour cools and forms clouds
- Precipitation: water returns to Earth's surface as rain, snow, hail
- Runoff: water flows over land into rivers, lakes, and oceans
- Infiltration / percolation: water soaks into the ground, becoming groundwater

### Primary Productivity

- **Gross Primary Productivity (GPP):** Total amount of organic matter produced by photosynthesis
  per unit area per unit time
- **Net Primary Productivity (NPP):** GPP minus the energy used by producers for respiration (R):

$$\mathrm{NPP} = \mathrm{GPP} - R$$

NPP represents the energy available to consumers (herbivores and decomposers). NPP is a measure of
how much biomass is available for the rest of the food chain.

$$\mathrm{NPP} = \mathrm{energy stored in plant biomass}$$

---

## Biomes

### Major Terrestrial Biomes

| Biome                      | Climate                                 | Precipitation      | Temperature                                                          | Key Vegetation                                                 | Key Adaptations                                                                                               |
| -------------------------- | --------------------------------------- | ------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Tropical rainforest        | Hot and wet year-round                  | 2000-10000 mm/year | 25-28 degrees C year-round                                           | Broadleaf evergreen trees, epiphytes, dense understorey        | Buttress roots, drip tips on leaves, thin bark, rapid nutrient cycling                                        |
| Temperate deciduous forest | Four distinct seasons                   | 750-1500 mm/year   | -30 to 30 degrees C                                                  | Deciduous trees (oak, beech, maple) that shed leaves in winter | Leaf fall to reduce water loss; thick bark; dormant period                                                    |
| Grassland / savanna        | Seasonal rainfall                       | 250-750 mm/year    | Warm summers, cold winters (temperate) or warm year-round (tropical) | Grasses, scattered trees (savanna), herbs                      | Deep root systems, grazing tolerance, fire adaptations                                                        |
| Desert                     | Very dry                                | &lt;250 mm/year    | Extreme diurnal range; hot deserts &gt;40 degrees C day, cool nights | Sparse vegetation: cacti, succulents, deep-rooted shrubs       | Water storage (succulence), reduced leaf surface area, thick cuticle, CAM photosynthesis, nocturnal behaviour |
| Taiga (boreal forest)      | Long, cold winters; short, warm summers | 400-1000 mm/year   | -40 to 20 degrees C                                                  | Coniferous trees (pine, spruce, fir), lichens, mosses          | Needle-like leaves (reduce water loss, shed snow), cone shape (shed snow), thick bark, evergreen              |
| Tundra                     | Extremely cold; short growing season    | 150-250 mm/year    | -40 to 10 degrees C; permafrost                                      | Lichens, mosses, dwarf shrubs, grasses                         | Low-growing form (avoid wind), shallow roots (permafrost), dense hairs, dark pigmentation (absorb heat)       |

### Aquatic Biomes

**Marine biomes:**

- **Open ocean (pelagic zone):** Low nutrient levels, low productivity; phytoplankton are primary
  producers
- **Coral reefs:** High biodiversity; found in warm, shallow, clear tropical waters; built by coral
  polyps (cnidarians with symbiotic algae)
- **Estuaries:** Where rivers meet the sea; brackish water (mix of fresh and salt); high
  productivity; nursery for many species
- **Intertidal zone:** Area between high and low tide; organisms must tolerate wave action,
  desiccation, and temperature changes

**Freshwater biomes:**

- **Lakes and ponds:** Standing water; thermal stratification (epilimnion, thermocline, hypolimnion)
  in temperate lakes
- **Rivers and streams:** Flowing water; organisms adapted to currents (streamlined bodies,
  suckers); water is well-oxygenated
- **Wetlands:** Land saturated with water (marshes, swamps, bogs); high productivity; important for
  water filtration and flood control

:::info In DSE questions on biomes, you may be asked to interpret climate graphs (temperature and
precipitation plotted by month). Key features to identify: annual temperature range, wet and dry
seasons, total precipitation. Match these to the biome descriptions above.
:::

---

## Human Impact

### Deforestation

- Clearing of forests for agriculture, logging, urbanisation, and infrastructure
- Tropical rainforests are being cleared at approximately 10 million hectares per year
- Consequences: habitat loss, biodiversity decline, soil erosion, increased $\mathrm{CO}_2$ in
  atmosphere (reduced photosynthesis + burning), disruption of water cycle, loss of indigenous
  cultures

### Habitat Fragmentation

**Definition.** Habitat fragmentation is the process by which large, continuous habitats are broken
into smaller, isolated patches.

Consequences:

- Reduced total habitat area
- Isolated populations with reduced gene flow (increased inbreeding, reduced genetic diversity)
- Edge effects: conditions at habitat edges differ from interior (more light, wind, temperature
  extremes, predators)
- Populations in small fragments are more vulnerable to extinction (island biogeography theory)

### Pollution

**Eutrophication:**

Excessive nutrient input (nitrogen and phosphorus from agricultural fertilisers, sewage) into water
bodies:

1. Nutrient enrichment causes algal bloom (rapid growth of algae)
2. Algal layer blocks light, killing submerged aquatic plants
3. Algae die and decomposers break them down, consuming oxygen through respiration
4. Dissolved oxygen levels drop (hypoxia or anoxia)
5. Fish and other aquatic organisms die

**Bioaccumulation vs Biomagnification:**

| Feature    | Bioaccumulation                                                        | Biomagnification                                                                                       |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Definition | Accumulation of a substance within a single organism over its lifetime | Increasing concentration of a substance at each successive trophic level                               |
| Scope      | Within one organism                                                    | Across the food chain                                                                                  |
| Example    | Heavy metals accumulating in fish liver                                | DDT concentration increasing from plankton to zooplankton to small fish to large fish to birds of prey |

Substances that biomagnify are typically:

- Fat-soluble (not easily excreted)
- Persistent in the environment (slow to degrade)
- Examples: DDT, PCBs, mercury, lead

### Climate Change

- Burning fossil fuels releases $\mathrm{CO}_2$, methane ($\mathrm{CH}_4$), and nitrous oxide
  ($\mathrm{N}_2\mathrm{O}$) -- greenhouse gases
- Greenhouse gases trap infrared radiation (heat) in the atmosphere, increasing global temperatures
- Pre-industrial $\mathrm{CO}_2$ concentration: ~280 ppm; current: &gt;420 ppm
- Global average temperature has risen approximately 1.1 degrees C above pre-industrial levels

Consequences:

- Rising sea levels (thermal expansion of water + melting ice caps)
- More frequent and severe extreme weather events (hurricanes, droughts, floods)
- Shifts in species distributions and ranges
- Ocean acidification (dissolved $\mathrm{CO}_2$ forms carbonic acid, lowering pH)
- Disruption of phenology (timing of biological events: flowering, migration, breeding)
- Coral bleaching (warm water causes corals to expel symbiotic algae)

### Biodiversity Loss

Current extinction rate is estimated to be 100-1000 times higher than the natural background rate,
leading many scientists to call the current era the "sixth mass extinction."

Major causes (often remembered by the acronym HIPPO):

- **H**abitat destruction and fragmentation
- **I**nvasive species (outcompete, prey on, or introduce diseases to native species)
- **P**opulation growth (human population increase driving resource consumption)
- **P**ollution
- **O**verexploitation (overfishing, hunting, poaching)

### Conservation Strategies

**In situ conservation:** Protecting species in their natural habitats.

- National parks and nature reserves
- Marine protected areas
- Wildlife corridors connecting fragmented habitats
- Legal protection of endangered species and their habitats

**Ex situ conservation:** Protecting species outside their natural habitats.

- Botanical gardens and seed banks (e.g., Millennium Seed Bank)
- Zoos and captive breeding programmes
- Tissue culture and cryopreservation of genetic material

**International agreements:**

- **CITES (Convention on International Trade in Endangered Species):** Regulates international trade
  in wild animals and plants to prevent overexploitation
- **Convention on Biological Diversity (CBD):** International treaty with three goals: conservation,
  sustainable use, fair sharing of benefits from genetic resources
- **Ramsar Convention:** Protection of wetlands of international importance

:::warning A common DSE exam pitfall is confusing bioaccumulation with biomagnification. Remember:
bioaccumulation is within an individual; biomagnification is across trophic levels. Both terms can
appear in the same question.
:::

---

## DSE Exam Focus

### Common Question Types

1. **Explain the process of natural selection using a specific example.** Structure your answer:
   identify variation, state the selection pressure, describe differential survival/reproduction,
   explain the change in allele frequency over generations.

2. **Calculate allele and genotype frequencies using Hardy-Weinberg.** Always start by identifying
   the homozygous recessive frequency ($q^2$), then calculate $q$, then $p$, then all genotype
   frequencies.

3. **Interpret ecological data from graphs and tables.** Look for trends, correlations, and causal
   relationships. Identify independent and dependent variables.

4. **Compare and contrast related concepts.** Use structured tables or point-by-point comparisons.
   Always include both similarities and differences.

5. **Explain the impact of human activities on ecosystems.** Be specific about mechanisms (e.g., how
   eutrophication actually kills fish, not just that it does).

### Calculation Techniques

**Energy transfer calculations:**

If producers have 10,000 kJ of energy:

- Primary consumers: $10,000 \times 0.10 = 1,000$ kJ
- Secondary consumers: $1,000 \times 0.10 = 100$ kJ
- Tertiary consumers: $100 \times 0.10 = 10$ kJ

**HWE calculations (step by step):**

1. Identify $q^2$ from the homozygous recessive frequency
2. Take the square root to get $q$
3. Calculate $p = 1 - q$
4. Calculate $p^2$, $2pq$, and verify $p^2 + 2pq + q^2 = 1$

**Population growth:**

Doubling time can be estimated using the rule of 70:

$$\mathrm{Doubling time} \approx \frac{70}{r \times 100}$$

Where $r$ is the per capita growth rate expressed as a decimal.

### Data Interpretation

When presented with data in DSE exams:

- Read axis labels and units carefully
- Identify the type of relationship (direct, inverse, no correlation)
- Look for anomalies and consider biological explanations
- Calculate percentages and ratios when asked
- Distinguish between correlation and causation
- Consider confounding variables

### Experimental Design

Key elements the DSE expects in ecology and evolution experimental design questions:

1. **Hypothesis:** A clear, testable statement (e.g., "Darker-coloured moths will have higher
   survival rates on polluted bark than light-coloured moths")
2. **Variables:** Identify independent, dependent, and controlled variables
3. **Sample size:** Large enough to be statistically meaningful; mention replication
4. **Control:** A baseline for comparison (e.g., unpolluted area)
5. **Method:** Clear, step-by-step procedure
6. **Data collection:** Quantitative data where possible
7. **Data analysis:** Statistical tests (chi-squared test for allele frequencies, t-test for
   comparing means)
8. **Evaluation:** Limitations, sources of error, improvements

:::info The chi-squared test is commonly used in DSE to determine whether observed genotype
frequencies differ significantly from Hardy-Weinberg expected frequencies:

$$\chi^2 = \sum \frac{(O - E)^2}{E}$$

Where $O$ = observed frequency and $E$ = expected frequency. Compare the calculated value to the
critical value at the appropriate degrees of freedom ($df = \mathrm{number of categories} - 1$) and
significance level (typically $p = 0.05$).
:::

---

## Worked Examples

### Worked Example 1: Hardy-Weinberg and Sickle Cell

In a population of 10,000 people in a malaria-endemic region, 160 people have sickle cell disease
(HbS/HbS).

**(a)** Calculate the frequency of the HbS allele.

**(b)** Calculate the number of heterozygous carriers (HbA/HbS) in the population.

**(c)** Explain why the HbS allele frequency is higher in this region than in non-malarial regions.

If you get this wrong, revise: Genetics of Evolution -- Hardy-Weinberg Equilibrium

<details>
<summary>Solution</summary>

Sickle cell disease is homozygous recessive, so:

$$q^2 = \frac{160}{10000} = 0.016$$

$$q = \sqrt{0.016} = 0.1265$$

Frequency of HbS = 0.1265 (or 12.65%)

$$p = 1 - 0.1265 = 0.8735$$

$$2pq = 2(0.8735)(0.1265) = 0.2210$$

Number of heterozygotes = $0.2210 \times 10000 = 2210$ people

In malaria-endemic regions, heterozygous individuals (HbA/HbS) have resistance to malaria, giving them a selective advantage over homozygous normal individuals (susceptible to malaria) and homozygous recessive individuals (sickle cell disease). This is heterozygote advantage (balanced polymorphism), maintaining the HbS allele at higher frequency.

</details>

### Worked Example 2: Ecological Pyramid Calculations

A grassland ecosystem has the following energy values at each trophic level:

- Producers: 50,000 kJ/m$^2$/year
- Primary consumers: 5,000 kJ/m$^2$/year
- Secondary consumers: 400 kJ/m$^2$/year

**(a)** Calculate the percentage energy transfer from producers to primary consumers.

**(b)** Calculate the percentage energy transfer from primary consumers to secondary consumers.

**(c)** Explain why a fifth trophic level is unlikely in this ecosystem.

If you get this wrong, revise: Ecosystem Ecology -- The 10% Rule; Ecological Pyramids

<details>
<summary>Solution</summary>

(a) $\mathrm{Transfer efficiency} = \frac{5000}{50000} \times 100\% = 10\%$

(b) $\mathrm{Transfer efficiency} = \frac{400}{5000} \times 100\% = 8\%$

(c) At the secondary consumer level, only 400 kJ/m$^2$/year is available. A tertiary consumer would receive approximately 10% of this: 40 kJ/m$^2$/year. A quaternary consumer (fifth trophic level) would receive only about 4 kJ/m$^2$/year, which is insufficient to sustain a viable population. This demonstrates the energy limitation on food chain length.

</details>

### Worked Example 3: Population Growth

A bacterial population starts with 100 cells and has a growth rate of $r = 0.5$ per hour under ideal conditions.

**(a)** Calculate the population size after 6 hours (exponential growth).

**(b)** If the carrying capacity is 5,000 cells, calculate the population size after 6 hours using the logistic growth model.

If you get this wrong, revise: Population Ecology -- Population Growth Models; Carrying Capacity

<details>
<summary>Solution</summary>

(a) $N = N_0 \times e^{rt} = 100 \times e^{0.5 \times 6} = 100 \times e^3 = 100 \times 20.09 = 2009$ cells

(b) Using the logistic equation:

$$N = \frac{K}{1 + \left(\frac{K - N_0}{N_0}\right) e^{-rt}} = \frac{5000}{1 + \left(\frac{5000 - 100}{100}\right) e^{-0.5 \times 6}}$$

$$N = \frac{5000}{1 + 49 \times e^{-3}} = \frac{5000}{1 + 49 \times 0.0498} = \frac{5000}{1 + 2.44} = \frac{5000}{3.44} = 1453 \mathrm{ cells}$$

The logistic model predicts fewer cells (1,453 vs 2,009) because it accounts for the limiting effect of carrying capacity -- as the population grows, resources become scarcer and the growth rate decreases.

</details>

### Worked Example 4: Chi-Squared Test for Hardy-Weinberg

A population of 1,000 plants is surveyed for flower colour. Red flowers (RR) are dominant, white flowers (rr) are recessive. The observed numbers are: Red (RR and Rr): 840; White (rr): 160.

**(a)** Calculate the expected numbers under Hardy-Weinberg equilibrium.

**(b)** Interpret the result.

If you get this wrong, revise: Genetics of Evolution -- Hardy-Weinberg Equilibrium; DSE Exam Focus

<details>
<summary>Solution</summary>

$$q^2 = \frac{160}{1000} = 0.16, \quad q = 0.4, \quad p = 0.6$$

Expected frequencies: $p^2 = 0.36$, $2pq = 0.48$, $q^2 = 0.16$

Expected numbers: RR = $0.36 \times 1000 = 360$; Rr = $0.48 \times 1000 = 480$; rr = $0.16 \times 1000 = 160$

Red (RR + Rr): $360 + 480 = 840$; White (rr): 160

$$\chi^2 = \frac{(840 - 840)^2}{840} + \frac{(160 - 160)^2}{160} = 0$$

The chi-squared value is 0, which is less than the critical value of 3.84 (for $df = 1$ at $p = 0.05$). There is no significant difference between observed and expected frequencies. The population is in Hardy-Weinberg equilibrium for this trait.

</details>

### Worked Example 5: Eutrophication Data Interpretation

The following data show dissolved oxygen (DO) levels in a lake at different distances from a point where agricultural fertiliser runoff enters:

| Distance from runoff source (km) | DO concentration (mg/L) |
| -------------------------------- | ----------------------- |
| 0.5                              | 2.1                     |
| 1.0                              | 3.4                     |
| 2.0                              | 5.8                     |
| 5.0                              | 7.9                     |
| 10.0                             | 8.5                     |
| 15.0                             | 8.6                     |

**(a)** Describe the trend and explain the biological processes responsible.

**(b)** A DO level below 4 mg/L is harmful to most fish. Over what distance range would fish be adversely affected?

**(c)** Suggest two strategies to reduce the impact.

If you get this wrong, revise: Human Impact -- Pollution (Eutrophication)

<details>
<summary>Solution</summary>

(a) DO increases with distance from the runoff source. At the source, high nutrient concentration stimulates rapid algal growth (algal bloom). When algae die, decomposers break them down through aerobic respiration, consuming dissolved oxygen and causing hypoxia. As distance increases, nutrient concentration decreases (dilution), algal growth is less excessive, and DO levels recover.

(b) DO is below 4 mg/L at 0.5 km (2.1 mg/L) and 1.0 km (3.4 mg/L). At 2.0 km, DO is 5.8 mg/L (above threshold). Fish would be adversely affected within approximately 0-1.5 km of the runoff source.

(c) 1. Create buffer zones (riparian zones): plant vegetation strips along the lake edge to absorb nutrients before they reach the water. 2. Regulate fertiliser application: restrict the amount and timing of fertiliser use on nearby farmland (e.g., no application before heavy rain; use slow-release fertilisers).

</details>

---

## Summary Table

| Topic                  | Key Concept                                                            | DSE Relevance                                                |
| ---------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| Natural selection      | Variation, differential survival/reproduction, allele frequency change | Core concept; appears in structured and essay questions      |
| Hardy-Weinberg         | $p^2 + 2pq + q^2 = 1$; null model for population genetics              | Calculation questions; chi-squared test                      |
| Evidence for evolution | Fossils, comparative anatomy, molecular biology, embryology            | Data interpretation; explain how evidence supports evolution |
| Speciation             | Allopatric, sympatric, polyploidy; reproductive isolation              | Structured questions on mechanisms                           |
| Ecology levels         | Organism to biosphere; biotic/abiotic factors                          | Foundation for all ecology questions                         |
| Population ecology     | Exponential/logistic growth, carrying capacity, survivorship curves    | Graph interpretation; calculations                           |
| Community ecology      | Interactions, succession, keystone species                             | Explain cascading effects; interpret data                    |
| Ecosystem ecology      | Energy flow, pyramids, nutrient cycles                                 | Calculations (10% rule); cycle descriptions                  |
| Biomes                 | Climate, vegetation, adaptations                                       | Climate graph interpretation; adaptation questions           |
| Human impact           | Pollution, climate change, biodiversity loss, conservation             | Data interpretation; evaluate strategies                     |

---

## Exam Tips

- In natural selection questions, always identify the **specific** selection pressure and explain
  how it creates differential survival and reproduction. Generic answers without a concrete example
  score poorly.
- For Hardy-Weinberg, always state your working: show $q^2$, then $q$, then $p$, then the genotype
  frequencies. Examiners award marks for the process.
- When describing nutrient cycles, name the specific processes (nitrification, denitrification,
  etc.) and the organisms involved (specific bacteria names earn extra marks).
- In ecology questions, use quantitative data whenever possible (e.g., "the DO level dropped to 2.1
  mg/L" rather than "the DO level was very low").
- For conservation questions, distinguish clearly between in situ and ex situ strategies, and be
  specific about examples.
- When explaining eutrophication, always describe the complete sequence: nutrient input, algal
  bloom, death and decomposition, oxygen depletion, organism death.
- Remember that energy flow is unidirectional and always decreasing, while nutrient cycles are
  cyclic.

---

## Problem Set

**Problem 1:** In a population of butterflies, 64% have white wings (recessive, ww) and 36% have coloured wings (dominant, W\*). Calculate the allele frequencies and the proportion of heterozygotes.

If you get this wrong, revise: Genetics of Evolution -- Allele Frequency Calculations

<details>
<summary>Solution</summary>

$q^2 = 0.64$, so $q = \sqrt{0.64} = 0.8$.

$p = 1 - 0.8 = 0.2$.

$2pq = 2(0.2)(0.8) = 0.32$.

The proportion of heterozygotes (Ww) is 0.32, or 32%.

Note that the heterozygote frequency (32%) is higher than the homozygous dominant frequency ($p^2 = 0.04$, or 4%), even though coloured butterflies are less common. This is a common result when one allele is rare.

</details>

**Problem 2:** Explain how Darwin's theory of natural selection accounts for the development of antibiotic resistance in bacteria. Use the terms "variation," "selection pressure," "differential survival," and "inheritance" in your answer.

If you get this wrong, revise: Natural Selection -- Darwin's Theory; Classic Examples (Antibiotic resistance)

<details>
<summary>Solution</summary>

1. **Variation:** Within any bacterial population, random mutations occur during DNA replication. Some bacteria may acquire a mutation that confers resistance to a particular antibiotic (e.g., a gene for beta-lactamase enzyme).

2. **Selection pressure:** When an antibiotic is administered, it creates a strong selection pressure. The antibiotic kills or inhibits susceptible bacteria.

3. **Differential survival:** Bacteria carrying the resistance allele survive the antibiotic treatment and continue to reproduce, while susceptible bacteria die. The resistant bacteria have higher fitness in the presence of the antibiotic.

4. **Inheritance:** The resistance gene is passed to offspring during binary fission (vertical transmission) and can also be transferred to other bacteria via plasmids during conjugation (horizontal transmission). Over generations, the resistant allele increases in frequency.

The key point is that the mutation arises randomly, not because the bacteria "need" it. The antibiotic merely selects for pre-existing resistant individuals.

</details>

**Problem 3:** A volcanic island is formed in the ocean. Describe the process of primary succession that would occur on this island over thousands of years.

If you get this wrong, revise: Community Ecology -- Ecological Succession

<details>
<summary>Solution</summary>

1. **Pioneer species:** Lichens colonise the bare volcanic rock first. They require no soil, absorb water and minerals directly from the rock, and can tolerate extreme conditions.

2. **Soil formation:** Lichens secrete acids that slowly break down the rock surface, beginning soil formation. Dead lichens contribute organic matter.

3. **Mosses and liverworts:** As a thin soil layer accumulates, mosses colonise. They further contribute organic matter when they die, deepening the soil.

4. **Grasses and herbs:** As soil deepens, grasses and herbaceous plants establish. Their roots help bind soil and retain water.

5. **Shrubs and small trees:** As soil becomes deeper and more nutrient-rich, woody plants establish.

6. **Climax community:** After hundreds to thousands of years, a relatively stable community (e.g., tropical forest, depending on climate) becomes established.

</details>

**Problem 4:** A food chain consists of grass $\to$ rabbit $\to$ fox. If the grass contains 20,000 kJ of energy, calculate the energy available to the fox. Explain the energy losses at each trophic level.

If you get this wrong, revise: Ecosystem Ecology -- The 10% Rule; Trophic Levels

<details>
<summary>Solution</summary>

Using the 10% rule:

- Grass (producer): 20,000 kJ
- Rabbit (primary consumer): $20,000 \times 0.10 = 2,000$ kJ
- Fox (secondary consumer): $2,000 \times 0.10 = 200$ kJ

Energy losses at each level are due to: respiration (heat), excretion (waste), undigested material (faeces), and energy used for movement and maintenance. The 90% loss at each step explains why food chains rarely exceed 4-5 trophic levels.

</details>

**Problem 5:** Distinguish between homologous and analogous structures, providing one example of each. Explain the evolutionary significance of each type.

If you get this wrong, revise: Evidence for Evolution (Detailed) -- Homologous vs Analogous Structures

<details>
<summary>Solution</summary>

**Homologous structures:** Derived from a common ancestor; similar underlying anatomy but may serve different functions. Example: the pentadactyl limb in humans (grasping), bats (flying), and whales (swimming) -- all share the same basic bone arrangement. Significance: indicates **divergent evolution** from a common ancestor.

**Analogous structures:** Similar function but different evolutionary origins. Example: the wing of a bird (modified forelimb with bones) and the wing of an insect (exoskeleton extension with no bones). Significance: indicates **convergent evolution** -- unrelated species evolve similar traits independently due to similar environmental pressures.

</details>

**Problem 6:** Two species of finch live on the same island. One has a large beak and eats hard seeds; the other has a small beak and eats small seeds. If a drought causes only large, hard seeds to be available, predict what will happen to each population over several generations. Explain your reasoning.

If you get this wrong, revise: Natural Selection -- Types of Natural Selection

<details>
<summary>Solution</summary>

The large-beaked finch population will likely increase because:
- The available food (hard seeds) matches their beak adaptation
- They have higher survival and reproductive success
- This is **directional selection** favouring the large beak phenotype

The small-beaked finch population will likely decrease because:
- They cannot efficiently crack hard seeds
- They face increased competition and reduced food availability
- Many individuals will starve or fail to reproduce

If the drought persists long enough, the small-beaked species may go extinct on this island (competitive exclusion). If some individuals with slightly larger beaks exist due to genetic variation, the population may evolve larger beaks over generations. This demonstrates natural selection acting on heritable variation in response to an environmental change.

</details>

**Problem 7:** Describe the nitrogen cycle, naming the specific processes and the bacteria involved at each stage.

If you get this wrong, revise: Ecosystem Ecology -- Nutrient Cycles (Nitrogen cycle)

<details>
<summary>Solution</summary>

1. **Nitrogen fixation:** Atmospheric N$_2$ converted to NH$_3$ by nitrogen-fixing bacteria (_Rhizobium_ in root nodules of legumes, _Azotobacter_ free-living in soil, cyanobacteria) or lightning.

2. **Nitrification:** NH$_3$ converted to NO$_2^-$ by _Nitrosomonas_, then to NO$_3^-$ by _Nitrobacter_.

3. **Absorption:** Plants absorb NO$_3^-$ through their roots.

4. **Assimilation:** Plants incorporate nitrogen into amino acids and proteins.

5. **Feeding:** Animals obtain nitrogen by eating plants or other animals.

6. **Ammonification:** Decomposer bacteria break down dead organisms and waste, releasing NH$_3$.

7. **Denitrification:** Denitrifying bacteria (_Pseudomonas_) convert NO$_3^-$ back to N$_2$ under anaerobic conditions, returning it to the atmosphere.

</details>

**Problem 8:** Explain the process of allopatric speciation using an example of a river changing course and dividing a population of beetles.

If you get this wrong, revise: Genetics of Evolution -- Speciation

<details>
<summary>Solution</summary>

1. **Geographic isolation:** The river changing course creates a barrier, physically separating the beetle population into two subpopulations.

2. **No gene flow:** The two subpopulations cannot interbreed across the river.

3. **Different selection pressures:** Each bank may have different environmental conditions (vegetation, predators, soil), favouring different traits.

4. **Independent evolution:** Natural selection, mutation, and genetic drift act independently on each population, causing allele frequencies to diverge.

5. **Accumulation of differences:** Over many generations, genetic and phenotypic differences accumulate.

6. **Reproductive isolation:** Even if the river dries up, accumulated differences (behavioural, mechanical, or genetic) may prevent successful interbreeding. At this point, two separate species exist.

</details>

**Problem 9:** Explain the difference between bioaccumulation and biomagnification, using DDT as an example.

If you get this wrong, revise: Human Impact -- Pollution (Bioaccumulation vs Biomagnification)

<details>
<summary>Solution</summary>

**Bioaccumulation** is the accumulation of a substance within a single organism over its lifetime. For example, DDT accumulates in the fatty tissues of an individual fish as it continuously absorbs DDT from contaminated water and food, faster than it can excrete it.

**Biomagnification** is the increasing concentration of a substance at each successive trophic level in a food chain. For example, DDT concentration increases from plankton (low) to zooplankton to small fish to large fish to birds of prey (highest). At each trophic level, organisms consume many organisms from the level below, accumulating all the DDT those prey organisms contained.

Key distinction: bioaccumulation is within one organism; biomagnification is across the food chain. Both can occur simultaneously.

</details>

**Problem 10:** A student measures Simpson's Diversity Index for two ponds. Pond A: D = 0.85. Pond B: D = 0.35. The student concludes that Pond A is healthier. Evaluate this conclusion and suggest what additional information would strengthen it.

If you get this wrong, revise: Biodiversity Measurement -- Simpson's Diversity Index

<details>
<summary>Solution</summary>

The conclusion is partially supported. A higher Simpson's Diversity Index (Pond A: D = 0.85) indicates greater biodiversity (more species, more evenly distributed) compared to Pond B (D = 0.35, which suggests one or a few species dominate). Higher biodiversity generally correlates with a healthier, more stable ecosystem.

However, additional information would strengthen the conclusion:

- **Abiotic factors:** Water pH, temperature, dissolved oxygen, pollutant levels
- **Specific species present:** Presence of indicator species (e.g., stonefly larvae indicate clean water)
- **Temporal data:** Measurements over time to show trends (declining biodiversity in Pond B?)
- **Physical habitat:** Pond size, vegetation cover, surrounding land use

Without this context, it is possible that Pond A has high diversity but is polluted with tolerant species, or that Pond B naturally has low diversity due to its size or location.

</details>

---

:::tip Diagnostic Test
Ready to test your understanding of **Evolution and Ecology**? The [diagnostic test](/Biology/diagnostics/diag-evolution-ecology) contains the hardest questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Evolution and Ecology with other biology topics to test synthesis under exam conditions.

See [Diagnostic Guide](/Biology/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::


:::danger Common Pitfalls

- **Confusing Lamarckism with Darwinian evolution:** Lamarck proposed that acquired characteristics are inherited (e.g., a giraffe stretches its neck and passes the longer neck to offspring). Darwin proposed natural selection of random mutations. DSE exams frequently test this distinction. Only Darwinian evolution is accepted by modern biology.

- **Misunderstanding what "fitness" means in evolution:** Evolutionary fitness refers to an organism's ability to SURVIVE and REPRODUCE in its environment, not physical strength or intelligence. A trait that improves reproductive success (even if it seems disadvantageous in isolation) increases fitness. A peacock's tail reduces survival but increases mating success.

- **Confusing ecological niches with habitats:** A habitat is where an organism lives (a physical place). A niche is the ROLE an organism plays in its ecosystem -- how it obtains food, interacts with other species, and reproduces. Two species can share a habitat but cannot occupy the exact same niche (competitive exclusion principle).

- **Assuming natural selection always leads to "better" organisms:** Natural selection produces organisms that are BETTER ADAPTED to their CURRENT environment, not objectively "better" or "more advanced." If the environment changes, previously advantageous traits can become disadvantageous. Evolution has no direction or goal.

:::
