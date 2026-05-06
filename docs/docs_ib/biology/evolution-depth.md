---
title: Evolution in Depth
description: "IB Biology -- evidence for evolution, natural selection types, speciation mechanisms, adaptive radiation, convergent evolution, gradualism vs punctuated equilibrium, Hardy-Weinberg equilibrium extended, population genetics, phylogenetic trees, molecular clocks, and antibiotic resistance."
slug: evolution-depth
---

## 1. Evidence for Evolution

### Fossil Evidence

The **fossil record** provides direct evidence of organisms from past geological eras, preserved in
sedimentary rock.

**Key observations:**

- Fossils in deeper (older) rock layers are progressively simpler and differ more from modern
  organisms than those in shallower (younger) layers.
- **Transitional fossils** exhibit features intermediate between ancestral and descendant groups:

| Transitional fossil | Significance                                                                 |
| ------------------- | ---------------------------------------------------------------------------- |
| **_Tiktaalik roseae_** (375 Mya) | Intermediate between lobe-finned fish and early tetrapods: fish-like scales and fins with limb-like bones and a functional neck. |
| **_Archaeopteryx lithographica_** (150 Mya) | Dinosaur-like skeleton with teeth and long bony tail, but feathered wings and a furcula (wishbone). Links reptiles and birds. |
| **_Australopithecus afarensis_** ("Lucy", 3.2 Mya) | Bipedal pelvis and femur with ape-like cranial capacity ($\approx 400\;\mathrm{cm}^3$). Ancestor of the genus _Homo_. |
| **_Ambulocetus natans_** (49 Mya) | "Walking whale": amphibious predator with functional limbs linking terrestrial artiodactyls and fully aquatic cetaceans. |
| **_Tetrapod tracks_** (395 Mya, Poland) | Fossilised footprints pre-dating the earliest tetrapod body fossils, showing animals walked on land earlier than skeletal evidence suggested. |

**Limitations of the fossil record:**

- **Incompleteness**: fossilisation requires rapid burial in anoxic, mineral-rich conditions
  (rare). Soft-bodied organisms (bacteria, worms, jellyfish) rarely fossilise. Most organisms that
  have ever lived left no fossil record.
- **Bias**: marine organisms with hard parts (shells, bones) are overrepresented; tropical and
  forest environments have poor fossil preservation.
- **Resolution**: speciation events (which may occur in small, isolated populations over thousands
  of years) may not be captured in the geological record.

### Anatomical Evidence

**Homologous structures**: similar anatomy in different species due to common ancestry, despite
potentially different functions.

| Structure                | Species                  | Common ancestry           | Function in each species                       |
| ------------------------ | ------------------------ | ------------------------- | ---------------------------------------------- |
| **Pentadactyl limb**     | Human, bat, whale, horse | Common tetrapod ancestor  | Grasping, flying, swimming, running            |
| **Vertebral column**     | All vertebrates          | Common chordate ancestor  | Axial support and protection of spinal cord    |
| **Pharyngeal (gill) arches** | Fish, amphibian, reptile, mammal (embryonic) | Common chordate ancestor | Gill support (fish); modified into jaws, ear ossicles, hyoid (mammals) |

The pentadactyl limb is a particularly powerful example: the same basic bone arrangement (humerus,
radius and ulna, carpals, metacarpals, phalanges) is adapted for vastly different functions ---
grasping, flying, swimming, digging --- indicating modification from a common ancestral structure,
not independent origin.

**Analogous structures**: similar function but different anatomical origin and embryological
development. Result from **convergent evolution** (see Section 5).

| Analogous structure    | Species                        | Function            | Different origins                     |
| ---------------------- | ------------------------------ | ------------------- | ------------------------------------- |
| **Wings**              | Insect, bird, bat              | Flight              | Insect: exoskeletal extensions; bird/bat: modified vertebrate forelimb |
| **Eye**                | Cephalopod (octopus), vertebrate | Image formation     | Cephalopod: pinhole camera; vertebrate: lens eye; different embryological development |
| **Streamlined body**   | Shark (fish), dolphin (mammal) | Swimming            | Different skeletal structures; convergent on hydrodynamic form |

### Molecular Evidence

Comparing DNA, RNA, and protein sequences between species provides quantitative evidence for
evolutionary relationships.

**Cytochrome c comparisons**: cytochrome c is a highly conserved protein involved in the electron
transport chain. The amino acid sequence differs by a known number of residues between species:

| Species compared to human | Amino acid differences (out of 104) |
| ------------------------ | ---------------------------------- |
| Chimpanzee              | 0                                 |
| Rhesus monkey           | 1                                 |
| Dog                     | 10                                |
| Horse                   | 12                                |
| Chicken                 | 13                                |
| Tuna                    | 21                                |
| Yeast                   | 44                                |

The pattern of differences is consistent with the accepted phylogeny: more closely related species
share more similar sequences because less time has elapsed for mutations to accumulate.

**Molecular clocks**: the rate of molecular evolution (number of mutations per unit time) is
approximately constant for neutral mutations. By counting sequence differences between two species
and calibrating with the fossil record, the time since divergence can be estimated:

$$t = \frac{d}{2r}$$

where $d$ is the number of substitutions per site between the two sequences, $r$ is the mutation
rate per site per year, and the factor of $2$ accounts for divergence along both lineages.

**Limitations**: mutation rates vary between genes (functional constraints), between lineages
(generation time effects), and over time. Molecular clocks must be calibrated with multiple fossil
dates and should be applied cautiously.

### Embryological Evidence

Early embryonic stages of vertebrates share remarkable similarities:

- **Pharyngeal pouches**: present in all vertebrate embryos (become gills in fish; modified into ear
  bones, tonsils, thymus in mammals).
- **Post-anal tail**: present in all vertebrate embryos (regresses in humans, retained in other
  species).
- **Notochord**: a flexible rod of cells that serves as the embryonic axial skeleton; replaced by
  vertebrae in most vertebrates but persists as the nucleus pulposus of intervertebral discs.

These shared embryonic features reflect common ancestry. "Ontogeny recapitulates phylogeny"
(Haeckel's biogenetic law) is an oversimplification, but embryological similarities do provide
evidence for shared evolutionary origins.

### Biogeographical Evidence

The geographic distribution of species provides evidence for evolution:

- **Island biogeography**: species on oceanic islands resemble those on the nearest mainland (e.g.,
  Darwin's finches resemble South American finches; Galapagos iguanas resemble South American iguanas)
  but have evolved distinct adaptations.
- **Convergent evolution in similar habitats**: the marsupial mammals of Australia (marsupial wolf,
  marsupial mole, marsupial flying phalanger) occupy ecological niches similar to placental mammals
  on other continents, demonstrating that similar selective pressures produce similar adaptations
  independently.
- **Fossil distribution**: the distribution of _Glossopteris_ fossils (a Permian fern) across South
  America, Africa, India, Antarctica, and Australia supports continental drift and explains why
  identical species are found on separated landmasses.

---

## 2. Natural Selection in Detail

### Types of Natural Selection

#### Directional Selection

Favours one extreme phenotype, shifting the population mean in that direction.

$$\Delta\bar{z} = \frac{G \cdot S}{\bar{w}}$$

where $\Delta\bar{z}$ is the change in the mean phenotype, $G$ is the additive genetic variance,
$S$ is the selection differential (difference between the mean of selected parents and the
population mean), and $\bar{w}$ is the mean fitness.

**Examples:**

- **Antibiotic resistance**: antibiotic treatment kills susceptible bacteria, selecting for resistant
  individuals. The population mean shifts toward resistance.
- **Peppered moth (_Biston betularia_)**: industrial pollution darkened tree bark, favouring the
  melanic (dark) form over the light form. After pollution control, the direction reversed.
- **Giraffe neck length**: longer necks provide a feeding advantage, favouring individuals with
  longer necks (though this example is debated --- current evidence suggests sexual selection may
  also play a role).

#### Stabilising Selection

Favours the intermediate phenotype, reducing variation. Occurs when extreme phenotypes have lower
fitness.

**Examples:**

- **Human birth weight**: babies with very low or very high birth weights have higher mortality;
  intermediate weights ($\approx 3.0$--$4.0\;\mathrm{kg}$) have the highest survival rate.
- **Sickle-cell allele in malaria-endemic regions**: homozygous normal ($HbA/HbA$) are susceptible to
  malaria; homozygous sickle-cell ($HbS/HbS$) have sickle-cell disease; heterozygous ($HbA/HbS$)
  have mild or asymptomatic malaria resistance (balancing selection --- a form of stabilising
  selection maintaining polymorphism).
- **Clutch size in birds**: too few eggs = low reproductive output; too many eggs = insufficient food
  per chick, high chick mortality. Intermediate clutch sizes are favoured.

#### Disruptive Selection

Favours both extremes over the intermediate phenotype, potentially leading to a bimodal distribution
and eventually **speciation**.

**Examples:**

- **African seedcracker finch (_Pyrenestes ostrinus_)**: two beak sizes (large and small) are
  favoured because the available seeds are either hard or soft; intermediate beak sizes are
  inefficient at cracking either type.
- **Darwin's finches on the Galapagos**: during drought, birds with very large or very small beaks
  have an advantage (large beaks crack hard seeds; small beaks handle small soft seeds), while
  intermediate beaks are less efficient.

### Sexual Selection

A form of natural selection where individuals with certain traits are more successful at obtaining
mates.

- **Intrasexual selection**: competition within one sex (usually males) for access to mates. Leads
  to weapons (antlers in deer, large body size) and aggressive behaviour.
- **Intersexual selection**: one sex (usually females) chooses mates based on preferred traits.
  Leads to elaborate ornaments (peacock's tail, bird of paradise plumage, frog calls) that may
  reduce survival but increase reproductive success.

**Handicap principle (Zahavi, 1975)**: elaborate ornaments are honest signals of fitness because
only healthy, well-nourished individuals can afford the cost of producing and maintaining them.

### Frequency-Dependent Selection

The fitness of a phenotype depends on its frequency in the population.

- **Negative frequency-dependent selection**: rare phenotypes have a fitness advantage (e.g.,
  side-blotched lizards: orange males are successful when rare, but lose advantage when common
  because blue males adapt to their strategy).
- **Positive frequency-dependent selection**: common phenotypes have a fitness advantage (e.g.,
  Mullerian mimicry in toxic species: predators learn to avoid the common warning pattern).

---

## 3. Speciation

### Allopatric Speciation

The most common mechanism. Populations are separated by a geographic barrier; different selection
pressures, genetic drift, and mutation in each population lead to reproductive isolation.

**Stages:**

1. **Geographic isolation**: a physical barrier (mountain range, river, ocean, glacier) splits the
  population.
2. **Independent evolution**: each population experiences different mutations, selection pressures,
   and genetic drift.
3. **Reproductive isolation accumulates**: over many generations, pre-zygotic and/or post-zygotic
   isolating mechanisms evolve.
4. **Even if the populations come back into contact, they cannot or do not interbreed**: they are now
   separate species.

**Evidence**: the Kaibab squirrel (_Sciurus kaibabensis_) and Abert's squirrel (_Sciurus aberti_)
  are separated by the Grand Canyon and have evolved distinct coat colours and behaviours despite
  their geographic proximity.

### Sympatric Speciation

New species arise without geographic separation.

**Mechanisms:**

- **Polyploidy** (most common in plants): an error in meiosis produces offspring with extra sets of
  chromosomes (e.g., tetraploid, $4n$). The polyploid individual can self-fertilise or mate with
  other polyploids, but cannot produce fertile offspring with the original diploid ($2n$) population
  due to unequal chromosome pairing in meiosis. This creates **instant reproductive isolation**.
  Approximately $30$--$80\%$ of flowering plant species are polyploid.

- **Ecological speciation**: different ecological niches within the same geographic area select for
  different traits. Example: _Rhagoletis pomonella_ (apple maggot fly) originally infested
  hawthorn trees; after apple trees were introduced to North America ($\approx 200$ years ago), a
  host race adapted to apples. The two populations now have different fruiting times (apple vs
  hawthorn) and show partial reproductive isolation based on host preference.

- **Sexual selection**: different female mating preferences within a population can drive divergence.

### Parapatric Speciation

Populations are adjacent with a narrow hybrid zone; gene flow occurs at the boundary but is reduced
by selection against hybrids.

Example: _Anthoxanthum odoratum_ (sweet vernal grass) grows on mine-contaminated soil (high copper
tolerance) and uncontaminated soil. Flowering time differs between the two populations, reducing
gene flow. Hybrid individuals have intermediate tolerance and reduced fitness in both habitats.

### Reproductive Isolating Mechanisms

**Pre-zygotic barriers** (prevent mating or fertilisation):

| Type                  | Example                                                  |
| --------------------- | -------------------------------------------------------- |
| **Temporal**          | Different breeding seasons (e.g., spotted skunks: summer vs winter breeding populations). |
| **Habitat**           | Different habitats within the same area (e.g., jungle vs open-field mosquito populations in _Anopheles gambiae_ complex). |
| **Behavioural**       | Different courtship rituals or songs (e.g., crickets, birds). |
| **Mechanical**        | Incompatible reproductive structures (e.g., damselfly species with differently shaped claspers). |
| **Gametic**           | Sperm cannot fertilise egg (e.g., sea urchin species with incompatible bindin proteins). |

**Post-zygotic barriers** (reduce fitness of hybrid offspring):

| Type                  | Example                                                  |
| --------------------- | -------------------------------------------------------- |
| **Hybrid inviability** | Hybrid zygotes fail to develop or have reduced survival.  |
| **Hybrid sterility**  | Hybrids are viable but sterile (e.g., mule: horse $\times$ donkey, $2n = 63$; uneven chromosome pairing in meiosis). |
| **Hybrid breakdown**  | First-generation hybrids are fertile, but the F2 generation has reduced fitness. |

---

## 4. Adaptive Radiation and Convergent Evolution

### Adaptive Radiation

The rapid diversification of a single ancestral species into many morphologically and ecologically
distinct species, often following the colonisation of a new habitat with diverse ecological niches.

**Classic examples:**

- **Darwin's finches** on the Galapagos Islands: a single ancestral finch species from South America
  gave rise to $13$--$17$ species with diverse beak shapes and sizes adapted to different food
  sources (seeds, insects, cactus flowers, blood, tools). Peter and Rosemary Grant's long-term
  study (1973--present) documented natural selection on beak size in real time during drought years.

- **Hawaiian honeycreepers**: a single coloniser gave rise to over $50$ species with diverse beak
  morphologies (insect-picking, nectar-sipping, seed-cracking, wood-boring), many of which are now
  extinct due to human activity.

- **Cichlid fish** in East African Rift Lakes (Victoria, Malawi, Tanganyika): hundreds of species
  evolved within individual lakes in $< 15000$ years, occupying diverse trophic niches. Speciation
  was driven by sexual selection (female mate choice based on male colouration) and ecological
  specialisation.

- **Mammalian radiation after the Cretaceous-Paleogene extinction**: the extinction of non-avian
  dinosaurs $66$ Mya vacated many ecological niches, allowing mammals to rapidly diversify into the
  orders we see today (primates, carnivores, cetaceans, rodents, etc.).

**Conditions favouring adaptive radiation:**

1. A new habitat or ecological opportunity with unoccupied niches.
2. Evolutionary innovations (key adaptations that open new niches, e.g., amniotic egg, flight,
   photosynthesis).
3. Mass extinction events that remove competitors and create vacant niches.

### Convergent Evolution

Independent evolution of similar traits in distantly related species in response to similar
environmental pressures.

**Examples:**

| Trait                    | Species pairs/groups                        | Selective pressure                           |
| ------------------------ | ------------------------------------------- | -------------------------------------------- |
| **Streamlined body**     | Shark (fish), dolphin (mammal), ichthyosaur (reptile) | Drag reduction in aquatic locomotion |
| **Camera eye**           | Cephalopod (octopus), vertebrate (human)     | Image formation; detection of light/predators |
| **Wings**                | Bird, bat, pterosaur, insect                | Flight                                       |
| **C4 photosynthesis**    | Maize (grass), sorghum (grass), amaranth (dicot) | High temperature, high light, low $\mathrm{CO}_2$ efficiency |
| **Echolocation**         | Bats (microchiroptera), toothed whales       | Navigation and prey detection in darkness     |
| **Antifreeze proteins**  | Arctic cod, Antarctic notothenioid fish      | Subzero water temperatures                   |

**Distinguishing homology from convergence**: homologous structures share the same underlying
anatomical plan and embryological origin despite different functions; analogous structures have
different anatomical origins but similar functions. Molecular evidence can distinguish them:
homologous traits often share similar developmental genes (e.g., Pax6 for eye development in both
vertebrates and cephalopods); convergent traits arise from different genetic mechanisms.

---

## 5. Gradualism vs Punctuated Equilibrium

### Phyletic Gradualism (Darwinian Gradualism)

- Evolution occurs gradually and continuously over long periods.
- Large morphological changes result from the accumulation of many small changes over geological
  time.
- The fossil record should show smooth, continuous transitional forms.

**Support**: some fossil sequences show gradual change (e.g., foraminifera, trilobite ontogeny).

### Punctuated Equilibrium (Gould and Eldredge, 1972)

- Species experience long periods of **stasis** (little morphological change) punctuated by brief
  periods of **rapid speciation**.
- Most morphological change occurs during the speciation event (typically in small, isolated
  populations over $10^4$--$10^5$ years).
- The fossil record appears "jerky" because the transitional forms are rare and geographically
  localised.

**Support**: the fossil record often shows species appearing suddenly (in geological terms) and
persisting unchanged for millions of years. For example, _Trilobites_ in the Burgess Shale show
well-defined species with little gradual transition between them.

**Current synthesis**: both patterns occur. Gradual change is well-documented in some lineages;
punctuated equilibrium explains the apparent gaps in the fossil record. The two models are not
mutually exclusive.

---

## 6. Hardy-Weinberg Equilibrium (Extended)

### The Principle

For a population with two alleles ($A$ and $a$) at a single locus, with frequencies $p$ and $q$:

$$p + q = 1$$
$$p^2 + 2pq + q^2 = 1$$

**Conditions for equilibrium:**

1. No mutations (mutation rate $\mu \approx 0$).
2. No migration (gene flow, $m = 0$).
3. Random mating (no assortative or disassortative mating).
4. Infinite population size (no genetic drift).
5. No natural selection (all genotypes have equal fitness).

### Testing Hardy-Weinberg with Multiple Alleles

For a locus with $n$ alleles with frequencies $p_1, p_2, \ldots, p_n$:

$$\sum_{i=1}^{n} p_i = 1$$

The expected frequency of homozygote $p_i^2$ and heterozygote $2p_ip_j$ for all pairs.

**Example**: ABO blood group with three alleles ($I^A$, $I^B$, $i$):
$$p_{I^A} + p_{I^B} + p_i = 1$$
$$f(I^AI^A) = p_{I^A}^2, \quad f(I^AI^B) = 2p_{I^A}p_{I^B}, \quad f(I^Ai) = 2p_{I^A}p_i, \quad \ldots$$

### Effects of Evolutionary Forces on Hardy-Weinberg

#### Mutation

Mutation introduces new alleles and changes allele frequencies, but at a very slow rate
($\mu \approx 10^{-5}$ to $10^{-6}$ per generation per locus). Mutation alone is too slow to
drive significant evolutionary change, but it provides the raw genetic variation upon which
selection and drift act.

#### Migration (Gene Flow)

The introduction of alleles from another population changes allele frequencies:

$$\Delta p = m(p_m - p_r)$$

where $m$ is the migration rate, $p_m$ is the allele frequency in the migrant population, and
$p_r$ is the allele frequency in the resident population. Gene flow tends to homogenise allele
frequencies between populations and counteracts the effects of selection and drift.

#### Genetic Drift

Random fluctuations in allele frequencies due to sampling error in finite populations.

- **Strongest in small populations**: in a population of $N$ diploid individuals, the variance in
  allele frequency change per generation is $\sigma^2 = \frac{p(1-p)}{2N}$.
- **Bottleneck effect**: a sharp reduction in population size (e.g., due to natural disaster,
  hunting) reduces genetic diversity. The surviving population has a non-representative allele
  frequency distribution. Example: northern elephant seals were hunted to $\approx 20$ individuals
  in the 1890s; modern populations have very low genetic diversity compared with southern elephant
  seals.
- **Founder effect**: a small group establishes a new population, carrying only a subset of the
  source population's genetic diversity. Example: the Amish population of Pennsylvania has a high
  frequency of Ellis-van Creveld syndrome (a recessive dwarfism) due to the small number of
  founders.

#### Non-Random Mating

- **Assortative mating**: individuals preferentially mate with similar (positive assortative) or
  dissimilar (negative assortative) partners. Positive assortative mating increases homozygosity
  without changing allele frequencies.
- **Inbreeding**: mating between closely related individuals increases homozygosity and exposes
  recessive deleterious alleles. The **inbreeding coefficient** ($F$) measures the probability that
  two alleles at a locus in an individual are identical by descent.

#### Natural Selection

Selection changes allele frequencies by differential reproductive success:

| Selection type        | Effect on allele frequencies                                    | Effect on population variance   |
| --------------------- | ----------------------------------------------------------------- | ------------------------------ |
| Directional           | Favourable allele increases toward fixation                        | Initially decreases            |
| Stabilising           | Intermediate phenotype favoured; extreme alleles removed           | Decreases                      |
| Disruptive            | Extreme phenotypes favoured; intermediate alleles removed          | Increases                      |
| Balancing (overdominance) | Heterozygote has highest fitness (e.g., sickle-cell trait)    | Maintains; polymorphism        |
| Frequency-dependent   | Fitness depends on allele frequency; maintains oscillation        | Variable                       |

### Fitness and Selection Coefficients

**Fitness ($w$)**: the relative reproductive success of a genotype, normalised so that the
fittest genotype has $w = 1.0$.

**Selection coefficient ($s$)**: the reduction in fitness of a genotype relative to the fittest:
$w = 1 - s$.

**Example**: if the fitness of genotypes $AA$, $Aa$, and $aa$ are $1.0$, $1.0$, and $0.8$:
$s = 0.2$ for the $aa$ genotype. The selection acts against the $aa$ homozygote.

**Rate of change of a deleterious allele under selection:**
$$\Delta q \approx -\frac{spq^2}{1 - sq^2}$$

For a completely recessive deleterious allele ($s$ against $aa$), the allele is sheltered in
heterozygotes and is eliminated very slowly when rare ($\Delta q \propto q^2$).

---

## 7. Phylogenetic Trees

### Construction

Phylogenetic trees represent evolutionary relationships among species based on shared derived
characters (**synapomorphies**).

**Cladistics** (Hennig, 1966): groups organisms into **clades** (monophyletic groups) based on
shared derived characteristics. A clade includes an ancestor and all of its descendants.

**Steps in constructing a phylogenetic tree:**

1. Select characters (morphological, molecular, or both).
2. Code characters as ancestral (plesiomorphic) or derived (apomorphic).
3. Construct a **character matrix** (taxa $\times$ characters).
4. Identify shared derived characters that define clades.
5. Use **parsimony** (prefer the tree requiring the fewest evolutionary changes) or **maximum
   likelihood** / **Bayesian methods** (find the tree most likely given the data and an explicit
   model of evolution).

### Types of Trees

- **Rooted tree**: includes a common ancestor and shows the direction of evolution (usually rooted
  using an **outgroup** --- a taxon known to be outside the group of interest).
- **Unrooted tree**: shows relationships but not evolutionary direction.
- **Ultrametric tree**: branch lengths are proportional to time (requires molecular clock
  calibration).

### Interpreting Phylogenetic Trees

- Branching points (**nodes**) represent speciation events or common ancestors.
- **Tips** (terminal nodes) represent extant or extinct species.
- **Branch lengths** may represent the number of character changes (non-ultrametric) or time
  (ultrametric).
- Closely related species share a more recent common ancestor (shorter branch to the most recent
  node they share).

### Molecular Phylogenetics

DNA and protein sequences provide large datasets for phylogenetic analysis:

- **Sequence alignment**: homologous sequences are aligned to identify conserved and variable
  positions (e.g., using ClustalW, MUSCLE).
- **Substitution models**: mathematical models describe the probability of one nucleotide
  substituting for another (e.g., Jukes-Cantor, Kimura 2-parameter, GTR).
- **Tree-building methods**:
  - **Maximum parsimony**: minimises the total number of changes.
  - **Maximum likelihood**: finds the tree that maximises the probability of the observed data
    given the substitution model.
  - **Bayesian inference**: uses MCMC sampling to estimate the posterior probability distribution
    of trees.

---

## 8. Antibiotic Resistance as Evolution

Antibiotic resistance provides a clear, observable example of evolution by natural selection:

1. **Variation exists**: within a bacterial population, some individuals carry resistance genes
  (on plasmids, transposons, or chromosomes) due to prior mutations or horizontal gene transfer.
2. **Selective pressure**: antibiotic treatment kills susceptible bacteria ($\approx 99.9\%$),
  creating intense selection for resistant individuals.
3. **Differential survival**: resistant bacteria survive and reproduce.
4. **Allele frequency change**: the resistance allele frequency increases from $< 0.1\%$ to
  $\approx 100\%$ in the population within a few generations.
5. **Spread**: resistance genes can spread horizontally between bacterial species via **conjugation**
  (plasmid transfer), **transformation** (uptake of free DNA), and **transduction** (bacteriophage
  transfer).

**Mechanisms of resistance:**

| Mechanism                          | Example                                                   |
| ---------------------------------- | --------------------------------------------------------- |
| **Enzymatic inactivation**         | $\beta$-lactamase hydrolyses penicillin; aminoglycoside-modifying enzymes. |
| **Target modification**            | MRSA: altered penicillin-binding protein (PBP2a) with low affinity for $\beta$-lactams. |
| **Efflux pumps**                   | Active transport of antibiotics out of the cell (e.g., tetracycline efflux). |
| **Reduced permeability**           | Mutations reducing porin channel size (e.g., resistance to carbapenems in _Pseudomonas_). |
| **Target bypass**                  | Acquisition of a resistant enzyme variant (e.g., mecA gene for methicillin resistance). |

**Preventing resistance:**

- Complete the full antibiotic course (do not stop early).
- Use antibiotics only when necessary (do not use for viral infections).
- Rotate antibiotic classes in agriculture.
- Develop new antibiotics and alternative therapies (phage therapy, antimicrobial peptides).

---

## Common Pitfalls

- Confusing **homologous** and **analogous** structures: homologous = shared ancestry, different
  function (pentadactyl limb); analogous = different ancestry, similar function (bird wing vs
  insect wing).
- Stating that "evolution is just a theory": in science, "theory" means a well-substantiated
  explanation supported by extensive evidence, not a guess.
- Describing natural selection as "survival of the fittest" without defining fitness: fitness is
  measured by reproductive success, not strength or size.
- Assuming that "individuals evolve": evolution occurs at the population level through changes in
  allele frequency. Individuals do not evolve; populations do.
- Misapplying Hardy-Weinberg: real populations never meet all five conditions. The H-W principle is
  a null model used to detect evolutionary forces, not a description of nature.
- Confusing **allopatric** and **sympatric** speciation: allopatric requires geographic separation;
  sympatric occurs without it (polyploidy, ecological speciation).
- Assuming convergent evolution produces identical structures: the wings of birds, bats, and insects
  are analogous (same function) but have fundamentally different anatomical origins.

---

## Practice Problems

<details>
<summary>Question 1: Hardy-Weinberg with Selection</summary>

In a population of $10000$ plants, flower colour is controlled by a single gene with two alleles:
$R$ (red, dominant) and $r$ (white, recessive). The current genotype frequencies are:
$f(RR) = 0.49$, $f(Rr) = 0.42$, $f(rr) = 0.09$. A disease selectively kills white-flowered
plants ($rr$) with $50\%$ mortality ($w_{rr} = 0.5$), while red-flowered plants are unaffected
($w_{RR} = w_{Rr} = 1.0$). Calculate the allele frequencies after one generation of selection.

</details>

<details>
<summary>Answer</summary>

**Initial allele frequencies:**
$p = 0.49 + 0.5 \times 0.42 = 0.49 + 0.21 = 0.70$
$q = 0.09 + 0.5 \times 0.42 = 0.09 + 0.21 = 0.30$

**Mean fitness:**
$\bar{w} = p^2 w_{RR} + 2pq \cdot w_{Rr} + q^2 w_{rr} = (0.49)(1.0) + (0.42)(1.0) + (0.09)(0.5) = 0.49 + 0.42 + 0.045 = 0.955$

**Genotype frequencies after selection:**
$f'(RR) = \frac{0.49}{0.955} = 0.5131$
$f'(Rr) = \frac{0.42}{0.955} = 0.4398$
$f'(rr) = \frac{0.045}{0.955} = 0.0471$

**New allele frequencies:**
$p' = 0.5131 + 0.5 \times 0.4398 = 0.5131 + 0.2199 = 0.7330$
$q' = 0.0471 + 0.5 \times 0.4398 = 0.0471 + 0.2199 = 0.2670$

The $R$ allele frequency increased from $0.70$ to $0.733$ in one generation due to selection
against the $rr$ genotype. The $r$ allele declines slowly because it is sheltered in heterozygotes.

</details>

<details>
<summary>Question 2: Molecular Clock Calculation</summary>

The cytochrome c protein has $104$ amino acids. Between humans and yeast, there are $44$ differences.
If the average substitution rate for cytochrome c is $1$ amino acid change per $20$ million years
per lineage, estimate the time since humans and yeast last shared a common ancestor.

</details>

<details>
<summary>Answer</summary>

Total substitutions = $44$ amino acid differences.
Substitution rate = $1$ change per $20$ My per lineage.

Time since divergence: $t = \frac{d}{2r} = \frac{44}{2 \times (1/20)} = \frac{44}{0.1} = 440$ million years.

The estimated divergence time is $\approx 440$ Mya. This is consistent with the fossil and
phylogenetic evidence that animals and fungi diverged approximately $400$--$600$ Mya. The
approximation is reasonable given the simplifying assumptions (constant rate, no back-mutations,
no saturation effects).

</details>

<details>
<summary>Question 3: Speciation and Reproductive Isolation</summary>

Two populations of a freshwater fish are separated by a waterfall. The upstream population lives
in a cold, fast-flowing stream; the downstream population lives in a warm, slow-moving pond.
After $50000$ years, the waterfall dries up and the two populations re-establish contact.
However, they do not interbreed. Identify three possible reproductive isolating mechanisms that
may have evolved, classifying each as pre-zygotic or post-zygotic. Explain how each could have
arisen in this scenario.

</details>

<details>
<summary>Answer</summary>

1. **Temporal isolation (pre-zygotic)**: the two habitats have different temperatures and seasonal
   patterns. The cold upstream population may breed in spring (triggered by temperature increase);
   the warm downstream population may breed year-round or at a different time. Even in contact,
   their breeding seasons do not overlap, preventing mating.

2. **Behavioural isolation (pre-zygotic)**: in the fast-flowing stream, visual courtship displays
   may be ineffective; the upstream population may have evolved different mating calls or pheromones
   adapted to their environment. Females may no longer recognise the courtship signals of males
   from the other population.

3. **Hybrid inviability or sterility (post-zygotic)**: if occasional interbreeding occurred before
   complete pre-zygotic isolation evolved, hybrid offspring may have had reduced fitness in either
   parental habitat (intermediate temperature tolerance, neither fully adapted to fast water nor
   still water). Over time, genetic incompatibilities (Dobzhansky-Muller incompatibilities) could
   have accumulated, making hybrids sterile or inviable.

</details>

<details>
<summary>Question 4: Antibiotic Resistance and Selection</summary>

A population of $10^8$ bacteria is treated with an antibiotic. The antibiotic kills $99.999\%$ of
the bacteria. The resistant survivors carry a plasmid-borne resistance gene. After $8$ generations
of binary fission, the population recovers to its original size. Calculate the number of
survivors after treatment, the fraction carrying the resistance gene after recovery, and the
minimum number of generations required for $99.9\%$ of the population to carry the resistance
gene.

</details>

<details>
<summary>Answer</summary>

**Survivors after treatment**: $10^8 \times (1 - 0.99999) = 10^8 \times 10^{-5} = 1000$ bacteria.
All $1000$ survivors carry the resistance gene.

**After 8 generations of binary fission**:
Population size: $1000 \times 2^8 = 1000 \times 256 = 256000$ bacteria.
All are descendants of the $1000$ resistant survivors, so $100\%$ carry the resistance gene.
The population has not yet recovered to its original size of $10^8$.

**Generations for $99.9\%$ resistance in a population of $10^8$**:
After $n$ generations, the resistant population = $1000 \times 2^n$.
We need $1000 \times 2^n = 0.999 \times 10^8 = 9.99 \times 10^7$.
$2^n = 99900$
$n = \frac{\ln(99900)}{\ln(2)} = \frac{11.513}{0.693} \approx 16.6$, so $17$ generations.

After $17$ generations, $\approx 1000 \times 2^{17} = 1.31 \times 10^8$ bacteria, virtually all
carrying the resistance gene. This demonstrates how quickly resistance can spread under antibiotic
selection.

</details>

<details>
<summary>Question 5: Phylogenetic Tree Interpretation</summary>

A molecular phylogenetic tree of four species (A, B, C, D) based on a conserved gene shows the
following topology: ((A, B), C), D; where D is the outgroup. The branch lengths (number of
substitutions per site) are: A--B common ancestor = $0.02$, A--B split to present = $0.01$ each,
A--B/C common ancestor to C = $0.05$, A--B/C/D common ancestor to A--B/C common ancestor = $0.03$.
(a) Which two species are most closely related? (b) Calculate the total evolutionary distance
between A and C. (c) Explain why D is used as an outgroup.

</details>

<details>
<summary>Answer</summary>

(a) Species A and B are most closely related: they share the most recent common ancestor (the
node separating them from C and D is the shallowest).

(b) Total distance A to C = path from A to A/B node ($0.01$) + A/B node to A/B/C node ($0.02$) +
A/B/C node to C ($0.05$) = $0.01 + 0.02 + 0.05 = 0.08$ substitutions per site.

(c) D is used as an outgroup because it is known (from other evidence) to be less closely related
  to A, B, and C than they are to each other. The outgroup "roots" the tree, allowing determination
  of the direction of character changes (ancestral vs derived) and providing a reference point for
  polarising the tree.

</details>

---

## Worked Examples

**Worked Example: Genetic Drift and the Bottleneck Effect**

A population of $1000$ butterflies has two alleles at a wing-colour locus: $C$ (common, $p = 0.8$)
and $c$ (rare, $q = 0.2$). A wildfire kills $95\%$ of the population, leaving $50$ survivors.
Calculate the probability that the $c$ allele is completely lost in this bottleneck event.

<details>
<summary>Solution</summary>

The probability that allele $c$ is lost = probability that none of the $50$ survivors carries the
$c$ allele.

Each individual has two alleles. The probability that a randomly chosen individual does NOT carry
$c$ is the probability of being $CC$: $p^2 = 0.8^2 = 0.64$.

The probability that all $50$ survivors are $CC$:
$(0.64)^{50} = 1.27 \times 10^{-9}$

This is extremely unlikely. However, the probability that the $c$ allele frequency decreases
significantly is much higher. The variance in allele frequency after a bottleneck is:
$\sigma^2_q = \frac{pq}{2N_e} = \frac{0.8 \times 0.2}{2 \times 50} = \frac{0.16}{100} = 0.0016$

The standard deviation: $\sigma_q = \sqrt{0.0016} = 0.04$

After the bottleneck, the expected $c$ frequency is still $q = 0.2$, but there is a $95\%$ chance
it falls within $0.2 \pm 2(0.04) = 0.12$ to $0.28$. In some bottleneck events, the $c$ allele
frequency could change substantially, and over many repeated bottlenecks, the probability of
eventual loss approaches $1$.

</details>

**Worked Example: Selection Against a Recessive Lethal Allele**

Cystic fibrosis (CF) is caused by a recessive lethal allele ($c$). The disease incidence in a
population is $1$ in $2500$ ($q^2 = 1/2500$). If modern medicine allows CF patients to survive
to reproductive age (changing fitness from $w_{cc} = 0$ to $w_{cc} = 0.5$), predict the new
equilibrium frequency of the $c$ allele after many generations.

<details>
<summary>Solution</summary>

**Current equilibrium** ($w_{cc} = 0$, lethal):
$q^2 = 1/2500$, so $q = 1/50 = 0.02$.
$p = 0.98$.
Carrier frequency: $2pq = 2 \times 0.98 \times 0.02 = 0.0392 \approx 1/25.5$.

**New equilibrium** ($w_{CC} = 1.0$, $w_{Cc} = 1.0$, $w_{cc} = 0.5$):
At equilibrium, the frequency of the $c$ allele is maintained by the balance between mutation
(introducing $c$) and selection (removing $c$). With $w_{cc} = 0.5$:

$\hat{q} = \frac{\mu}{s}$ (approximation for a rare recessive deleterious allele, where $s$ is
the selection coefficient against homozygotes)

With $s = 0.5$: if $\mu \approx 10^{-6}$ (typical mutation rate), $\hat{q} = 10^{-6} / 0.5
= 2 \times 10^{-6}$, which is negligible. However, if the selection pressure is relaxed
completely ($s = 0$, no fitness disadvantage), the allele frequency will remain at its current
value ($q = 0.02$) unless mutation rates are negligible.

With $w_{cc} = 0.5$ (partial selection), the equilibrium frequency will be between the two
extremes. The frequency will increase from $0.02$ because homozygotes can now survive and reproduce.
Using the equilibrium condition for a deleterious recessive:

$\hat{q} \approx \sqrt{\frac{\mu}{s}} = \sqrt{\frac{10^{-6}}{0.5}} = \sqrt{2 \times 10^{-6}} \approx 0.0014$

Wait --- this gives a lower frequency, which is incorrect. The issue is that $\mu/s$ applies when
mutation is introducing the allele and selection is removing it. If we are starting from $q = 0.02$
and reducing selection from $s = 1$ to $s = 0.5$, the frequency will actually increase because
fewer $cc$ individuals are being removed.

The correct approach: with reduced selection, the equilibrium moves to a higher $q$. The new
equilibrium is approximately $q \approx \sqrt{\mu/s}$, which with a smaller $s$ gives a larger
$q$. But this formula assumes mutation-selection balance. In reality, starting from $q = 0.02$
with relaxed selection, the allele frequency will increase over generations as $cc$ individuals
survive and reproduce, approaching a new equilibrium that depends on the mutation rate.

</details>

---

## Common Pitfalls (Expanded)

- **Confusing homologous and analogous structures**: homologous = common ancestry (pentadactyl limb);
  analogous = similar function from convergent evolution (bird wing vs insect wing).
- **Stating that "evolution is just a theory"**: the term "theory" in science means a comprehensive
  explanation supported by extensive evidence.
- **Describing natural selection as "survival of the fittest"**: fitness = reproductive success,
  not physical strength. An organism that reproduces successfully is "fitter" than a stronger one
  that does not reproduce.
- **Assuming individuals evolve**: evolution is a population-level process. Individuals do not
  evolve; populations change in allele frequency over generations.
- **Misapplying Hardy-Weinberg**: real populations never meet all five conditions. H-W is a null
  model for detecting evolutionary forces.
- **Confusing allopatric and sympatric speciation**: allopatric requires geographic separation;
  sympatric occurs without it.
- **Assuming molecular clocks are perfectly constant**: mutation rates vary between lineages, genes,
  and over time. Calibration with multiple fossils is essential.

---

## Exam-Style Problems

<details>
<summary>Problem 1: Extended Response -- Evidence for Evolution</summary>

Evaluate the relative strengths and limitations of four types of evidence for evolution: (a) fossil
record, (b) comparative anatomy, (c) molecular biology, and (d) biogeography. For each type,
provide a specific named example and discuss one limitation. Explain how multiple lines of evidence
together provide a more robust argument for evolution than any single type alone.

</details>

<details>
<summary>Problem 2: Data Analysis -- Hardy-Weinberg and Selection</summary>

In a population of $2000$ snails, shell colour is controlled by two alleles: $B$ (brown,
dominant) and $b$ (yellow, recessive). The observed numbers are: $B B = 720$, $Bb = 960$, $bb = 320$.
(a) Calculate the allele frequencies. (b) Test whether the population is in Hardy-Weinberg
equilibrium using the chi-squared test ($p = 0.05$, critical value for $1$ df $= 3.84$). (c)
If thrushes selectively prey on yellow snails ($bb$) with $40\%$ mortality while brown snails
are unaffected, calculate the new allele frequencies after one generation of selection.

</details>

<details>
<summary>Problem 3: Extended Response -- Speciation on Islands</summary>

A volcanic island emerges from the ocean $500000$ years ago and is colonised by a single species
of beetle from the nearest mainland ($200\;\mathrm{km}$ away). Today, the island has $12$ species
of beetles, all descended from the original coloniser. (a) Explain the evolutionary processes that
could have produced this diversity from a single ancestral species. (b) Discuss the role of
adaptive radiation in this scenario. (c) Explain how reproductive isolating mechanisms could
have evolved between the island species despite their geographic proximity. (d) Predict what
would happen to these species if a land bridge connected the island to the mainland.

</details>

<details>
<summary>Problem 4: Extended Response -- Antibiotic Resistance as Evolution</summary>

_Methicillin-resistant Staphylococcus aureus_ (MRSA) is a major hospital-acquired infection.
(a) Describe the genetic and biochemical mechanisms by which MRSA resists methicillin and related
$\beta$-lactam antibiotics. (b) Explain how the overuse of antibiotics in hospitals and agriculture
has contributed to the spread of resistance. (c) Evaluate two strategies for controlling the
spread of antibiotic resistance, discussing the evolutionary principles behind each.

</details>

<details>
<summary>Problem 5: Quantitative -- Molecular Clock and Divergence</summary>

Two species of fruit fly (_Drosophila simulans_ and _D. melanogaster_) differ by $60$ nucleotide
substitutions in a $1000\;\mathrm{bp}$ region of the Adh gene. The substitution rate for this gene
is estimated at $1.5 \times 10^{-8}$ substitutions per site per year. (a) Calculate the time
since divergence. (b) Explain two assumptions of the molecular clock that may not hold for these
species. (c) If a third species (_D. yakuba_) differs from _D. melanogaster_ by $90$ substitutions
in the same region, construct the most parsimonious phylogenetic tree and identify the outgroup.

</details>

---

## If You Get These Wrong, Revise:

- **Genetics and inheritance** --> Review [./genetics](./genetics)
- **Molecular biology and DNA** --> Review [./molecular-biology](./molecular-biology)
- **Ecology and populations** --> Review [./ecology](./ecology)
- **Classification and taxonomy** --> Review [./ecology](./ecology)
- **Genetic engineering techniques** --> Review [./genetics-advanced](./genetics-advanced)
