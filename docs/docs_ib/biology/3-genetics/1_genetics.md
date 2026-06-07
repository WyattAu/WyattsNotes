---
title: Genetics
description: 'IB Biology — meiosis, Mendelian genetics, inheritance patterns, gene
expression, mutations, biotechnology, PCR, and genetic modification.'
slug: genetics
date: 2024-01-01T00:00:00Z
tags:
  - ib
  - biology
  - ib
  - ib-biology
categories:
  - ib
  - ib-biology
---
## 1. Meiosis and Genetic Variation

### Recombination

During Prophase I of meiosis, homologous chromosomes undergo **crossing over** at points called
**chiasmata**. Non-sister chromatids exchange segments of DNA, producing **recombinant chromatids**
With new combinations of alleles.

Crossing over is the only mechanism that produces new allele combinations **within** a single
Chromosome (the others --- independent assortment and random fertilisation --- operate at the
Chromosome or organism level).

### Independent Assortment

During Metaphase I, each bivalent (homologous pair) aligns independently at the metaphase plate. For
An organism with haploid number $n$Independent assortment alone can produce $2^n$ different gamete
Genotypes.

---

## 2. Mendelian Genetics

### Mendel's Laws

1. **Law of Segregation**: each organism carries two alleles for each trait, which segregate during
   gamete formation so each gamete carries one allele.
2. **Law of Independent Assortment**: alleles of different genes segregate independently (provided
   the genes are on different chromosomes or far apart on the same chromosome).

### Terminology

| Term                 | Definition                                                                                                           |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Gene**             | A heritable factor that controls a specific characteristic.                                                          |
| **Allele**           | One of a number of different forms of a gene.                                                                        |
| **Locus**            | The specific position of a gene on a chromosome.                                                                     |
| **Genotype**         | The combination of alleles an individual possesses for a gene.                                                       |
| **Phenotype**        | The observable characteristic produced by the genotype and environment.                                              |
| **Dominant allele**  | An allele that is expressed in the phenotype when present in one or two copies (e.g., $A$).                          |
| **Recessive allele** | An allele expressed only when two copies are present (e.g., $a$).                                                    |
| **Homozygous**       | Having two identical alleles ($AA$ or $aa$).                                                                         |
| **Heterozygous**     | Having two different alleles ($Aa$).                                                                                 |
| **Carrier**          | A heterozygous individual who carries a recessive allele without expressing it.                                      |
| **Test cross**       | Crossing an individual of unknown genotype with a homozygous recessive individual to determine the unknown genotype. |

### Monohybrid Cross

A cross involving one gene with two alleles.

**Example**: In pea plants, tall ($T$) is dominant over dwarf ($t$).

Cross: $Tt \times Tt$

|     | $T$  | $t$  |
| --- | ---- | ---- |
| $T$ | $TT$ | $Tt$ |
| $t$ | $Tt$ | $tt$ |

Genotypic ratio: $1 TT : 2 Tt : 1 tt$ Phenotypic ratio: $3$ tall : $1$ dwarf

### Dihybrid Cross

A cross involving two genes, each with two alleles, on different chromosomes.

**Example**: In pea plants, round seed ($R$) is dominant over wrinkled ($r$), and yellow seed ($Y$)
Is dominant over green ($y$).

Cross: $RrYy \times RrYy$

Expected phenotypic ratio: $9:3:3:1$ (round yellow : round green : wrinkled yellow : wrinkled
Green).

This ratio arises from independent assortment: the two genes segregate independently.

---

## 3. Non-Mendelian Inheritance

### Incomplete Dominance

The heterozygous phenotype is intermediate between the two homozygous phenotypes. Neither allele is
Fully dominant.

**Example**: In snapdragons, $RR$ = red, $rr$ = white, $Rr$ = pink.

### Codominance

Both alleles are fully expressed in the heterozygote.

**Example**: Human blood groups --- IA and IB are codominant. Genotype $I^AI^B$ produces blood type
AB, expressing both A and B antigens.

### Multiple Alleles

A gene may have more than two alleles in the population, though any individual carries only two.

**ABO Blood Group System**:

| Genotype | Phenotype | Antigens on RBC |
| -------- | --------- | --------------- |
| $I^AI^A$ | A         | A               |
| $I^AI^i$ | A         | A               |
| $I^BI^B$ | B         | B               |
| $I^BI^i$ | B         | B               |
| $I^AI^B$ | AB        | A and B         |
| $ii$     | O         | Neither         |

### Sex-Linked Inheritance

Genes located on the **X chromosome** (X-linked) show different inheritance patterns in males and
Females, since males have only one X chromosome ($XY$).

- Males express X-linked recessive alleles with only one copy (hemizygous).
- Females must be homozygous recessive to express the trait.

**Example**: Red-green colour blindness and haemophilia are X-linked recessive conditions.

### Autosomal Linkage

Genes on the same chromosome tend to be inherited together (linked). The degree of linkage depends
On the distance between genes: genes farther apart are more likely to be separated by crossing over.

**Recombination frequency** =
$\dfrac{\mathrm{number of recombinant offspring}}{\mathrm{total offspring}} \times 100\%$

A recombination frequency of $1\%$ corresponds to a map distance of $1$ centimorgan ($\mathrm{cM}$).
Genes with a recombination frequency of $50\%$ or greater assort independently (they are either on
Different chromosomes or very far apart on the same chromosome).

### Epistasis

An allele at one gene locus masks or modifies the expression of alleles at a different locus.

**Example**: In mice, the gene for pigment production ($E$) is epistatic to the gene for pigment
Colour ($B$). A mouse with genotype $ee$ will be albino regardless of its $B/b$ genotype.

---

## 4. Gene Expression and Regulation

### The Operon Model (Prokaryotes)

The **lac operon** (Jacob and Monod, 1961) in _E. Coli_ regulates lactose metabolism.

- **Structural genes**: $lacZ$ (codes for $\beta$-galactosidase, which hydrolyses lactose), $lacY$
  (codes for permease, which transports lactose into the cell), $lacA$ (codes for transacetylase).
- **Promoter**: binding site for RNA polymerase.
- **Operator**: binding site for the **lac repressor** protein.
- **Regulator gene** ($lacI$): codes for the lac repressor, which is constitutively expressed.

**Mechanism**:

- **Lactose absent**: repressor binds to the operator, blocking RNA polymerase. Structural genes are
  not transcribed.
- **Lactose present**: lactose (allolactose) binds to the repressor, causing a conformational
  change. The repressor detaches from the operator. RNA polymerase transcribes the structural genes.

This is an example of **inducible** gene regulation.

### Gene Regulation in Eukaryotes

Eukaryotic gene expression is regulated at multiple levels:

1. **Transcriptional control**: transcription factors, enhancers, silencers, histone modification
   (acetylation opens chromatin; methylation closes it).
2. **Post-transcriptional control**: alternative splicing, mRNA stability, microRNAs (miRNAs) that
   degrade or block translation of target mRNAs.
3. **Translational control**: availability of initiation factors, modification of ribosomal
   proteins.
4. **Post-translational control**: protein modification (phosphorylation, ubiquitination for
   degradation), protein folding, and localisation.

---

## 5. Mutations

### Types of Mutations

**Gene mutations** (point mutations):

| Type                        | Effect                                                                                                                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Substitution** (missense) | One base replaced; changes one amino acid in the polypeptide.                                                                       |
| **Substitution** (nonsense) | One base replaced; creates a premature stop codon; truncated, non-functional protein.                                               |
| **Substitution** (silent)   | One base replaced; due to the degeneracy of the genetic code, the amino acid is unchanged.                                          |
| **Frameshift mutation**     | Insertion or deletion of one or two bases (not a multiple of three); shifts the reading frame, altering all downstream amino acids. |

**Chromosomal mutations**:

- **Deletion**: loss of a chromosomal segment.
- **Duplication**: a segment is repeated.
- **Inversion**: a segment is reversed $180^\circ$.
- **Translocation**: a segment moves to a non-homologous chromosome.

### Mutagens

Agents that increase the mutation rate:

- **Chemical mutagens**: base analogues (e.g., 5-bromouracil), deaminating agents (e.g., nitrous
  acid), alkylating agents, intercalating agents (e.g., ethidium bromide).
- **Physical mutagens**: ionising radiation (X-rays, gamma rays --- cause strand breaks), UV
  radiation (causes thymine dimers).

### Consequences

Most mutations are neutral or harmful. Occasionally, a mutation confers a selective advantage and
Contributes to evolution. Mutations in somatic cells are not inherited; mutations in germ cells are
Passed to offspring.

---

## 6. Biotechnology

### Polymerase Chain Reaction (PCR)

PCR amplifies a specific DNA sequence exponentially without the need for living cells.

**Requirements**:

- **Template DNA**: the DNA segment to be amplified.
- **Primers**: short, single-stranded oligonucleotides ($18$--$25$ bases) complementary to the
  regions flanking the target sequence; one forward primer, one reverse primer.
- **DNA polymerase**: a thermostable enzyme, **Taq polymerase** (from _Thermus aquaticus_), which
  withstands the high temperatures of PCR.
- **Free nucleotides** (dNTPs): dATP, dCTP, dGTP, dTTP.
- **Buffer** with $\mathrm{Mg}^{2+}$ ions (cofactor for polymerase).

**Thermal Cycling**:

| Step             | Temperature                | Purpose                                                          |
| ---------------- | -------------------------- | ---------------------------------------------------------------- |
| **Denaturation** | $94$--$96^\circ\mathrm{C}$ | DNA double helix separates into single strands.                  |
| **Annealing**    | $50$--$65^\circ\mathrm{C}$ | Primers bind (anneal) to complementary sequences on each strand. |
| **Extension**    | $72^\circ\mathrm{C}$       | Taq polymerase synthesises new DNA strands from the primers.     |

Each cycle doubles the number of DNA copies. After $n$ cycles: $\mathrm{copies} = 2^n$ (starting
From a double-stranded molecule). $25$--$35$ cycles are run.

### Gel Electrophoresis

Gel electrophoresis separates DNA fragments by size.

- DNA is loaded into wells in an **agarose gel**.
- An electric current is applied; DNA (negatively charged due to phosphate groups) moves toward the
  positive electrode.
- Smaller fragments move faster and migrate farther through the gel matrix.
- A **DNA ladder** (fragments of known size) is run alongside for size comparison.
- DNA is visualised using a fluorescent dye that binds DNA (e.g., ethidium bromide) under UV light.

### Applications of PCR and Gel Electrophoresis

- **Forensic science**: amplifying DNA from trace evidence at crime scenes; comparing DNA profiles
  (DNA fingerprinting using short tandem repeats, STRs).
- **Medical diagnosis**: detecting pathogenic DNA (e.g., viral load in HIV), identifying genetic
  disorders (e.g., cystic fibrosis mutations).
- **Paternity testing**: comparing STR patterns between child, mother, and alleged father.
- **Evolutionary biology**: comparing DNA sequences between species to construct phylogenetic trees.

---

## 7. Genetic Modification

### Recombinant DNA Technology

The process of inserting a gene from one organism into another to produce a desired protein.

**Steps**:

1. **Isolation of the gene of interest**: using restriction enzymes (endonucleases) that cut DNA at
   specific recognition sequences (palindromic). Example: **EcoRI** cuts at $5'$-GAATTC-$3'$
   producing "sticky ends" (single-stranded overhangs).
2. **Insertion into a vector**: the gene is ligated into a plasmid vector using **DNA ligase**,
   which forms phosphodiester bonds between the gene and the opened plasmid.
3. **Transformation**: the recombinant plasmid is introduced into a host cell (commonly _E. Coli_)
   by heat shock or electroporation.
4. **Selection**: cells that have taken up the plasmid are selected using antibiotic resistance
   markers (e.g., ampicillin resistance gene on the plasmid).
5. **Expression**: the host cell transcribes and translates the inserted gene, producing the desired
   protein.

### Examples of Genetic Modification

| Organism    | Gene inserted                                      | Product / Trait                                                    |
| ----------- | -------------------------------------------------- | ------------------------------------------------------------------ |
| _E. Coli_   | Human insulin gene                                 | Human insulin (Humulin) for diabetes treatment                     |
| _Bt_ corn   | _Bacillus thuringiensis_ toxin gene                | Resistance to insect pests                                         |
| Golden Rice | $\beta$-carotene (provitamin A) biosynthesis genes | Rice grains containing provitamin A to combat vitamin A deficiency |
| Goats       | Antithrombin III gene                              | Production of antithrombin in goat's milk                          |

### Cloning

**Somatic cell nuclear transfer (SCNT)**:

1. A somatic (body) cell is taken from the organism to be cloned.
2. The nucleus is extracted from this cell.
3. An enucleated egg cell (ovum with nucleus removed) is prepared.
4. The donor nucleus is inserted into the enucleated egg.
5. The egg is stimulated (electric shock) to divide.
6. The resulting embryo is implanted into a surrogate mother.
7. The offspring is genetically identical to the donor of the somatic cell nucleus.

**Example**: Dolly the sheep (1996) was the first mammal cloned from an adult somatic cell.

### Gene Therapy

The introduction of a functional gene into a patient's cells to correct a genetic disorder.

- **Somatic gene therapy**: targets body cells; changes are not inherited. Used for conditions like
  severe combined immunodeficiency (SCID).
- **Germ-line gene therapy**: targets gametes or embryos; changes are inherited. Currently not
  practised in humans due to ethical and safety concerns.

---

## Common Pitfalls

- Confusing **dominance** with "more common": a dominant allele is expressed when present, but may
  be rare in the population (e.g., polydactyly).
- Assuming a $3:1$ ratio always applies: this ratio requires both parents to be heterozygous
  ($Aa \times Aa$) and the gene to show complete dominance.
- Confusing **linkage** with **sex-linkage**: linked genes are on the same chromosome (any
  chromosome); sex-linked genes are specifically on the X or Y chromosome.
- Misidentifying the **template strand** for transcription: the template strand is the one RNA
  polymerase reads ($3' \to 5'$); the mRNA has the same sequence as the coding strand (with U for
  T).
- Stating that PCR creates "new" DNA: PCR synthesises copies of existing DNA sequences; it does not
  create novel sequences.

---

## Practice Problems

<details>
<summary>Question 1: Dihybrid Cross with Independent Assortment</summary>

In guinea pigs, black coat ($B$) is dominant over brown ($b$), and short hair ($S$) is dominant over
Long hair ($s$). Two double heterozygotes ($BbSs$) are crossed. Calculate the probability of
Producing a guinea pig that is homozygous recessive for both traits ($bbss$).

</details>

<details>
<summary>Answer</summary>

The genes assort independently, so we can treat each separately.

For coat colour ($Bb \times Bb$): probability of $bb = \dfrac{1}{4}$.

For hair length ($Ss \times Ss$): probability of $ss = \dfrac{1}{4}$.

Combined probability: $\dfrac{1}{4} \times \dfrac{1}{4} = \dfrac{1}{16}$.

The expected fraction of $bbss$ offspring is $\dfrac{1}{16}$Consistent with the $9:3:3:1$ ratio
Where the doubly recessive class is $\dfrac{1}{16}$.

</details>

<details>
<summary>Question 2: Sex-Linked Inheritance</summary>

Haemophilia is an X-linked recessive condition. A woman who is a carrier ($X^HX^h$) marries a man
Without haemophilia ($X^HY$). Determine the possible genotypes and phenotypes of their children, and
The probability that a son will have haemophilia.

</details>

<details>
<summary>Answer</summary>

Cross: $X^HX^h \times X^HY$

|       | $X^H$    | $Y$    |
| ----- | -------- | ------ |
| $X^H$ | $X^HX^H$ | $X^HY$ |
| $X^h$ | $X^HX^h$ | $X^hY$ |

Daughters: $50\%$ $X^HX^H$ (normal), $50\%$ $X^HX^h$ (carrier). No daughters have haemophilia. Sons:
$50\%$ $X^HY$ (normal), $50\%$ $X^hY$ (haemophiliac).

The probability that a son has haemophilia is $\dfrac{1}{2}$ (or $50\%$).

</details>

<details>
<summary>Question 3: PCR Amplification</summary>

A forensic scientist starts with $10$ copies of a DNA fragment. After $30$ cycles of PCR, how many
Copies will be present? If each double-stranded copy is $300\;\mathrm{bp}$ and the total amount of
DNA produced is $54\;\mathrm{ng}$Calculate the approximate mass of one copy.
($1\;\mathrm{bp} \approx 660\;\mathrm{Da}$; $1\;\mathrm{Da} = 1.66 \times 10^{-24}\;\mathrm{g}$.)

</details>

<details>
<summary>Answer</summary>

After $n$ cycles:
$\mathrm{copies} = 10 \times 2^{30} \approx 10 \times 1.07 \times 10^9 = 1.07 \times 10^{10}$
Copies.

Mass of one double-stranded copy: $300 \times 660 \times 2 = 396000\;\mathrm{Da}$ (both strands).

Mass in grams: $396000 \times 1.66 \times 10^{-24} = 6.57 \times 10^{-19}\;\mathrm{g}$ per copy.

Verification:
$1.07 \times 10^{10} \times 6.57 \times 10^{-19}\;\mathrm{g} \approx 7.03 \times 10^{-9}\;\mathrm{g} = 7\;\mathrm{ng}$
(order of magnitude consistent with $54\;\mathrm{ng}$ given possible variations in starting
Template).

</details>

<details>
<summary>Question 4: Epistasis</summary>

In summer squash, colour is controlled by two genes. Gene $W$ determines whether any colour is
Produced ($W$ = colour, $w$ = white, epistatic). Gene $Y$ determines whether the colour is yellow
($Y$) or green ($y$). A dihybrid cross ($WwYy \times WwYy$) is performed. Predict the phenotypic
Ratio.

</details>

<details>
<summary>Answer</summary>

First, the $W/w$ gene ratio: $\dfrac{3}{4}$ $W\_$ : $\dfrac{1}{4}$ $ww$.

Among the $\dfrac{3}{4}$ that are $W\_$The $Y/y$ gene determines colour: $\dfrac{3}{4}$ $Y\_$
(yellow) and $\dfrac{1}{4}$ $yy$ (green).

- White ($ww\_$): $\dfrac{1}{4}$ of all offspring.
- Yellow ($W\_Y\_$): $\dfrac{3}{4} \times \dfrac{3}{4} = \dfrac{9}{16}$.
- Green ($W\_yy$): $\dfrac{3}{4} \times \dfrac{1}{4} = \dfrac{3}{16}$.

Phenotypic ratio: $12$ white : $3$ yellow : $1$ green (i.e., $9:3:3:1$ with the $3 + 1$ of one class
Collapsed by epistasis into a $12:3:1$ ratio).

</details>

<details>
<summary>Question 5: Frameshift Mutation</summary>

A DNA coding strand has the sequence: $5'$-ATG GCA TAC GAT-3'. A single nucleotide insertion of an
Adenine (A) occurs between the third and fourth nucleotides. Write the original and mutated mRNA
Sequences, and the original and mutated amino acid sequences.

</details>

<details>
<summary>Answer</summary>

Original coding strand: $5'$-ATG GCA TAC GAT-3' Original mRNA: $5'$-AUG GCA UAC GAU-3' Original
Amino acids: Met -- Ala -- Tyr -- Asp

After insertion of A between positions 3 and 4, the coding strand becomes: $5'$-ATG AGC ATA CGA T-3'
Mutated mRNA: $5'$-AUG AGC AUC GAU-3' (reading frame shifted from the 4th codon onward) Mutated
Amino acids: Met -- Ser -- Ile -- Asp

The frameshift altered all amino acids downstream of the insertion site (except the first Met, which
Was unaffected). This illustrates the severe impact of frameshift mutations on protein structure and
Function.

</details>

---

## Worked Examples

**Worked Example: Pedigree Analysis of an Autosomal Recessive Trait**

Cystic fibrosis is an autosomal recessive disorder caused by mutations in the CFTR gene. A pedigree
Shows the following: unaffected parents (I-1 and I-2) have two children -- one affected son (II-1)
and One unaffected daughter (II-2). The unaffected daughter marries an unaffected man with no family
History of cystic fibrosis. Calculate the probability that their first child will have cystic
Fibrosis.

<details>
<summary>Solution</summary>

**Step 1: Determine parental genotypes**. Since the parents (I-1 and I-2) are unaffected but have an
Affected child, both must be carriers: $Cc \times Cc$ (where $C$ = normal, $c$ = cystic fibrosis).

**Step 2: Determine the daughter's genotype**. The cross $Cc \times Cc$ produces offspring in the
Ratio $1\;CC : 2\;Cc : 1\;cc$. The daughter (II-2) is unaffected, so she is either $CC$ or $Cc$. The
probability she is $Cc$ is $\frac{2}{3}$.

**Step 3: Determine the husband's carrier probability**. With no family history in a population
where The carrier frequency is approximately $1$ in $25$The probability he is a carrier is
$\frac{1}{25}$.

**Step 4: Combined probability**.
$P(\mathrm{child\;affected}) = P(\mathrm{daughter\;is\;Cc}) \times P(\mathrm{husband\;is\;Cc}) \times P(\mathrm{child\;is\;cc} \mid Cc \times Cc)$
$= \frac{2}{3} \times \frac{1}{25} \times \frac{1}{4} = \frac{2}{300} = \frac{1}{150} \approx 0.67\%$

The probability is approximately $1$ in $150$Which is higher than the general population risk
(approximately $1$ in $2500$) because the mother has a known family history.

</details>

**Worked Example: Genetic Mapping Using Recombination Frequencies**

In _Drosophila_, three recessive mutations are studied: $a$ (apterous, wingless), $b$ (black body),
And $c$ (cinnabar eyes). A three-point cross is performed between a triple heterozygous female
($a^+ b^+ c^+ / a\; b\; c$) and a triple recessive male ($a\; b\; c / a\; b\; c$). The following
Offspring phenotypes are observed from $2000$ total progeny:

| Phenotype                 | Number |
| ------------------------- | ------ |
| Wild type                 | 720    |
| apterous, black, cinnabar | 730    |
| apterous                  | 60     |
| black, cinnabar           | 55     |
| black                     | 140    |
| apterous, cinnabar        | 145    |
| cinnabar                  | 70     |
| apterous, black           | 80     |

Determine the gene order and map distances between the three genes.

<details>
<summary>Solution</summary>

**Step 1: Identify parental and recombinant classes**. Parental (most frequent): wild type ($730$)
and triple mutant ($720$) -- total $1450$. Double recombinants (least frequent): apterous ($60$) and
black+cinnabar ($55$) -- total $115$.

**Step 2: Determine gene order**. In the double recombinants, the allele that "flips" relative to
The parental arrangement is the middle gene. Comparing parentals and double recombinants:

- Parental: $a^+ b^+ c^+$ / $a\; b\; c$
- Double crossover progeny: $a\; b^+ c^+$ / $a^+ b\; c$

The $a$ allele has flipped relative to the others, so **$a$ is the middle gene**. The correct gene
Order is $b$ -- $a$ -- $c$.

**Step 3: Calculate map distances**. Recombination frequency between $b$ and $a$: (single CO in
$b$-$a$ region + double COs) / total
$= (140 + 145 + 60 + 55) / 2000 = 400 / 2000 = 0.20 = 20\;\mathrm{cM}$

Recombination frequency between $a$ and $c$: (single CO in $a$-$c$ region + double COs) / total
$= (70 + 80 + 60 + 55) / 2000 = 265 / 2000 = 0.1325 = 13.25\;\mathrm{cM}$

Recombination frequency between $b$ and $c$: (all recombinants) / total
$= (140 + 145 + 70 + 80 + 60 + 55) / 2000 = 550 / 2000 = 0.275 = 27.5\;\mathrm{cM}$

**Map**: $b$ --- $20\;\mathrm{cM}$ --- $a$ --- $13.25\;\mathrm{cM}$ --- $c$ (total
$33.25\;\mathrm{cM}$ Which is less than $27.5\;\mathrm{cM}$ because double crossovers were counted
separately for each Interval but only once in the $b$-$c$ total, illustrating why three-point
crosses give more accurate Maps than two-point crosses).

</details>

**Worked Example: Codominant Inheritance -- MN Blood Group**

The MN blood group in humans exhibits codominance: genotype $MM$ produces M antigen, $NN$ produces N
Antigen, and $MN$ produces both. In a population of $1000$ individuals, blood typing reveals: $210$
Type M, $480$ type MN, $310$ type N. Calculate the allele frequencies and test whether the
population Is in Hardy-Weinberg equilibrium.

<details>
<summary>Solution</summary>

**Step 1: Calculate allele frequencies**. Total alleles $= 2000$. Frequency of $M$:
$p = \frac{2(210) + 480}{2000} = \frac{900}{2000} = 0.45$ Frequency of $N$:
$q = \frac{2(310) + 480}{2000} = \frac{1100}{2000} = 0.55$

**Step 2: Calculate expected genotype frequencies**. $P(MM) = p^2 = 0.45^2 = 0.2025 \rightarrow$
expected $= 202.5$ $P(MN) = 2pq = 2(0.45)(0.55) = 0.495 \rightarrow$ expected $= 495.0$
$P(NN) = q^2 = 0.55^2 = 0.3025 \rightarrow$ expected $= 302.5$

**Step 3: Chi-squared test**.
$\chi^2 = \frac{(210 - 202.5)^2}{202.5} + \frac{(480 - 495)^2}{495} + \frac{(310 - 302.5)^2}{302.5}$
$= \frac{56.25}{202.5} + \frac{225}{495} + \frac{56.25}{302.5}$ $= 0.278 + 0.455 + 0.186 = 0.919$

Critical value at $p = 0.05$ with $1$ degree of freedom $= 3.84$.

Since $0.919 \lt 3.84$We fail to reject the null hypothesis. The population **is** in Hardy-Weinberg
equilibrium for the MN blood group. This is consistent with random mating and the Absence of strong
selection acting on MN antigens.

</details>

**Worked Example: Operon Regulation Prediction**

An _E. Coli_ culture is grown in a medium containing both glucose and lactose. Predict the state of
The lac operon (on or off) and explain the molecular mechanism, including the roles of cAMP and the
CAP protein.

<details>
<summary>Solution</summary>

The lac operon is **off** (or expressed at very low basal levels).

**Mechanism**:

1. When glucose is present, intracellular cAMP levels are **low** (glucose uptake inhibits adenylate
   cyclase, which synthesises cAMP from ATP).
2. The catabolite activator protein (CAP) requires cAMP binding to be active. With low cAMP, CAP
   remains inactive and cannot bind to the CAP binding site upstream of the lac promoter.
3. Without CAP bound, RNA polymerase has low affinity for the promoter, so transcription is minimal
   even though lactose (allolactose) is available to inactivate the repressor.
4. This phenomenon is called **catabolite repression** (or glucose effect): _E. Coli_ preferentially
   metabolises glucose because it yields ATP more efficiently than lactose.
5. Only when glucose is depleted will cAMP levels rise, CAP becomes active, and the lac operon will
   be fully induced to metabolise lactose.

This dual regulatory mechanism ensures that _E. Coli_ does not waste energy transcribing the lac
Operon genes when a more efficient carbon source (glucose) is available.

</details>

---

## Common Pitfalls (Expanded)

- **Confusing dominance with "more common"**: a dominant allele is expressed when present, but may
  be rare in the population (e.g., achondroplasia, polydactyly). Dominance refers to phenotypic
  expression, not frequency.
- **Assuming a 3:1 ratio always applies**: this ratio requires both parents to be heterozygous
  ($Aa \times Aa$) with complete dominance and equal viability of all genotypes.
- **Confusing linkage with sex-linkage**: linked genes are on the same chromosome (any chromosome);
  sex-linked genes are specifically on the X or Y chromosome. These are independent concepts.
- **Misidentifying the template strand**: the template strand is the one RNA polymerase reads
  ($3' \to 5'$); the mRNA has the same sequence as the coding strand (with U replacing T).
- **Stating that PCR creates "new" DNA**: PCR synthesises copies of existing DNA sequences; it does
  not create novel sequences or introduce mutations (beyond the rare errors of Taq polymerase).
- **Confusing carrier frequency with disease incidence**: for autosomal recessive conditions, if the
  disease incidence ($q^2$) is $1$ in $10000$The carrier frequency ($2pq$) is approximately
  $2q = 2 \times \frac{1}{100} = \frac{1}{50}$Not $1$ in $10000$.
- **Ignoring interference in genetic mapping**: in real organisms, one crossover can suppress nearby
  crossovers (positive interference), meaning observed double crossover frequencies may be lower
  than expected from single crossover frequencies.

---

## Exam-Style Problems

<details>
<summary>Problem 1: Extended Response -- Non-Mendelian Inheritance</summary>

A plant species exhibits incomplete dominance for flower colour: $RR$ = red, $Rr$ = pink, $rr$ =
White. A second gene, on a different chromosome, controls petal shape: $S$ = smooth (dominant), $s$
= ruffled (recessive). A red, smooth plant ($RRSs$) is crossed with a white, ruffled plant ($rrss$).
(a) Write the genotypes and phenotypes of the F1 generation. (b) Show the F2 phenotypic Ratio
resulting from an F1 $\times$ F1 cross. (c) Explain how this ratio differs from a standard Dihybrid
cross with complete dominance.

</details>

<details>
<summary>Problem 2: Data Analysis -- Gel Electrophoresis and PCR</summary>

A PCR reaction amplifies a $1500\;\mathrm{bp}$ region of the human amelogenin gene, which has
Different length alleles on the X and Y chromosomes ($1064\;\mathrm{bp}$ on X, $789\;\mathrm{bp}$ On
Y). Three DNA samples are analysed by gel electrophoresis alongside a DNA ladder. (a) Describe The
expected banding pattern for a male, a female, and a male with Klinefelter syndrome (XXY). (b)
Explain how this test could be used in forensic sex determination. (c) Why would a DNA ladder with
Bands at known sizes be essential for this analysis?

</details>

<details>
<summary>Problem 3: Extended Response -- Epistasis and Biochemical Pathways</summary>

In Labrador retrievers, coat colour is determined by two genes. Gene $E$ determines whether pigment
Is deposited in the fur ($E$ = pigment deposited, $e$ = no pigment, yellow coat). Gene $B$
determines The pigment colour when $E$ is present ($B$ = black, $b$ = brown). A black Labrador
($BbEe$) is Crossed with a brown Labrador ($bbEe$). (a) Determine the expected phenotypic ratio. (b)
Explain Why two yellow Labradors can never produce black or brown puppies. (c) Relate this to the
concept Of metabolic pathways and how mutations in different enzymes can produce the same phenotype.

</details>

<details>
<summary>Problem 4: Quantitative -- PCR and DNA Quantification</summary>

A researcher extracts DNA from a crime scene sample and uses quantitative PCR (qPCR) to determine
The copy number of a specific STR locus. After $25$ cycles of qPCR, the fluorescence threshold is
Reached at cycle $18$ for the standard ($1000$ copies) and at cycle $21$ for the crime scene sample.
Given that DNA quantity doubles each cycle, calculate the approximate number of copies in the crime
Scene sample.

</details>

<details>
<summary>Problem 5: Extended Response -- Gene Therapy Ethics</summary>

Severe combined immunodeficiency (SCID) is caused by mutations in the $IL2RG$ gene on the X
Chromosome. Somatic gene therapy trials using retroviral vectors have successfully restored immune
Function in some patients, but $5$ of $20$ treated patients developed leukaemia due to insertional
Mutagenesis (the retrovirus inserted near an oncogene). (a) Explain the mechanism of retroviral Gene
therapy. (b) Discuss why insertional mutagenesis occurs. (c) Evaluate the ethical Considerations of
continuing gene therapy trials for SCID given the risk of leukaemia.

</details>

<details>
<summary>Problem 6: Data Analysis -- Karyotype and Chromosomal Abnormalities</summary>

A karyotype analysis reveals that a patient has $47$ chromosomes, with an extra copy of chromosome
21 (trisomy 21, Down syndrome). (a) Explain the chromosomal nondisjunction event that produced this
Karyotype, identifying the specific meiotic stage where it could have occurred. (b) The patient's
Mother is $38$ years old. Explain the statistical relationship between maternal age and the risk of
Trisomy 21. (c) Describe how non-invasive prenatal testing (NIPT) using cell-free fetal DNA in
Maternal blood can detect this condition.

</details>

<details>
<summary>Problem 7: Extended Response -- Genetic Modification and Biodiversity</summary>

_Bt_ cotton has been genetically modified to express the _Bacillus thuringiensis_ toxin gene, which
Produces a protein toxic to lepidopteran pests (cotton bollworm). (a) Describe the steps used to
Create _Bt_ cotton using recombinant DNA technology. (b) Explain the concern that widespread
Planting of _Bt_ cotton could accelerate the evolution of pesticide-resistant insects, and propose A
strategy to delay this. (c) Evaluate one ecological benefit and one ecological risk of _Bt_ cotton
Compared with conventional pesticide application.

</details>

<details>
<summary>Problem 8: Extended Response -- Chi-Squared Test Design</summary>

A student claims that a new variety of pea plant shows a 9:3:3:1 ratio for seed colour and shape.
They count $1600$ seeds and observe: $920$ round yellow, $290$ round green, $310$ wrinkled yellow,
$80$ wrinkled green. (a) Perform a chi-squared test to evaluate this claim. (b) Identify the most
Deviant phenotype class and propose a biological explanation for the deviation. (c) Explain how the
Student could modify the experiment to increase confidence in their conclusion.

</details>

---

## If You Get These Wrong, Revise:

- **DNA structure and replication** --> Review
  [.../2-molecular-biology/1_molecular-biology](../2-molecular-biology/1_molecular-biology)
- **Meiosis and chromosome behaviour** --> Review
  [.../1-cell-biology/1_cell-biology](../1-cell-biology/1_cell-biology)
- **Evolution and natural selection** --> Review [.../4-ecology/1_ecology](../4-ecology/1_ecology)
- **Protein synthesis and gene expression** --> Review
  [.../2-molecular-biology/1_molecular-biology](../2-molecular-biology/1_molecular-biology)
- **Enzymes and metabolic pathways** --> Review
  [.../6-human-physiology/1_human-physiology](../6-human-physiology/1_human-physiology)

---

## 8. Population Genetics (Extended)

### Hardy-Weinberg with Lethal Alleles

When a recessive allele is lethal (homozygous individuals die before reproduction), the population
Deviates from Hardy-Weinberg expectations:

$$q' = \frac{q(1 - sq)}{1 - sq^2}$$

Where $s$ is the selection coefficient against homozygotes ($s = 1$ for lethal). Each generation,
the Frequency of the deleterious allele decreases, but the rate of decrease slows as $q$ becomes
small (because most copies of the allele are "hidden" in heterozygotes).

**Equilibrium between mutation and selection:**

For a recessive lethal allele with mutation rate $\mu$:

$$\hat{q} = \sqrt{\frac{\mu}{s}}$$

This is the balance between new mutations introducing the allele and selection removing it.

### Genetic Drift in Small Populations

Genetic drift causes random fluctuations in allele frequencies that are more pronounced in small
Populations:

$$\sigma^2_{\Delta q} = \frac{p(1-p)}{2N_e}$$

Where $N_e$ is the effective population size.

**Consequences:**

- Alleles can be lost or fixed regardless of their selective advantage or disadvantage.
- Genetic diversity decreases over time in small populations.
- **Founder effect**: a small number of individuals establish a new population, carrying only a
  subset of the source population's alleles.
- **Bottleneck effect**: a sharp population reduction reduces genetic diversity.

### Gene Flow

Migration between populations introduces new alleles:

$$\Delta p = m(p_m - p_r)$$

Where $m$ is the migration rate, $p_m$ is the allele frequency in migrants, and $p_r$ is the Allele
frequency in residents. Gene flow tends to homogenise populations and counteract the effects Of
selection and drift.

---

## 9. Advanced Genetic Crosses

### Trihybrid Cross

A cross involving three genes, each with two alleles, on different chromosomes.

For a trihybrid cross $AaBbCc \times AaBbCc$:

$$\text{Expected phenotypic ratio} = 27:9:9:9:3:3:3:1$$

This ratio arises from $2^3 = 8$ phenotype classes based on the presence or absence of the dominant
Allele at each of three loci.

### Sex-Linked Dihybrid Cross

When two genes are both on the X chromosome, they are linked and do not assort independently.

**Example**: In _Drosophila_, red eyes ($w^+$Dominant) and normal wings ($m^+$Dominant) are both on
the X chromosome. A female $w^+ m^+ / w\; m$ is crossed with a white-eyed, miniature-winged male
$w\; m / Y$.

**F1 females**: $w^+ m^+ / w\; m$ (all heterozygous at both loci) **F1 males**: $w^+ m^+ / Y$
(receive the father's X chromosome)

If the genes are linked with a recombination frequency of $30\%$The F1 female crossed with a
Double-recessive male would produce:

- $35\%$ parental: red normal ($w^+ m^+$), white miniature ($w\; m$)
- $15\%$ recombinant: red miniature ($w^+ m$), white normal ($w\; m^+$)

### Incomplete Dominance and Codominance in Crosses

**Incomplete dominance in dihybrid cross:**

In four-o'clock plants, flower colour shows incomplete dominance ($RR$ = red, $Rr$ = pink, $rr$ =
white) And flower shape shows incomplete dominance ($SS$ = ruffled, $Ss$ = wavy, $ss$ = smooth).

Cross: $RRss \times rrSS$

F1: all $RrSs$ (pink, wavy)

F2 ($RrSs \times RrSs$): $9$ phenotypic classes instead of $4$:

| Phenotype combination | Genotype fraction |
| --------------------- | ----------------- |
| Pink ruffled          | $1/16$            |
| Pink wavy             | $2/16$            |
| Pink smooth           | $1/16$            |
| Red ruffled           | $1/16$            |
| Red wavy              | $2/16$            |
| Red smooth            | $1/16$            |
| White ruffled         | $1/16$            |
| White wavy            | $2/16$            |
| White smooth          | $1/16$            |

---

## 10. Chromosomal Abnormalities

### Numerical Abnormalities (Aneuploidy)

**Non-disjunction**: the failure of homologous chromosomes (Meiosis I) or sister chromatids (Meiosis
II) To separate properly, resulting in gametes with abnormal chromosome numbers.

| Condition                | Chromosome | Karyotype                  | Features                                                                                                                                    |
| ------------------------ | ---------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Down syndrome**        | 21         | $47,XX,+21$ or $47,XY,+21$ | Trisomy 21; intellectual disability; flat facial profile; single palmar crease; congenital heart defects. Risk increases with maternal age. |
| **Patau syndrome**       | 13         | $47,+13$                   | Trisomy 13; severe intellectual disability; cleft lip/palate; polydactyly; most die within first year.                                      |
| **Edwards syndrome**     | 18         | $47,+18$                   | Trisomy 18; low birth weight; rocker-bottom feet; most die within first year.                                                               |
| **Turner syndrome**      | X          | $45,X$                     | Monosomy X; female; short stature; webbed neck; ovarian dysgenesis (sterile).                                                               |
| **Klinefelter syndrome** | X          | $47,XXY$                   | Male; tall stature; gynaecomastia; small testes; reduced fertility.                                                                         |

### Structural Abnormalities

- **Deletion**: loss of a chromosomal segment (e.g., Cri du chat syndrome: deletion on chromosome
  5).
- **Duplication**: a segment is repeated, increasing gene dosage.
- **Inversion**: a segment is reversed $180^\circ$. Can cause problems during meiosis if a crossover
  occurs within the inverted region (producing dicentric and acentric fragments).
- **Translocation**: exchange of segments between non-homologous chromosomes.
- **Reciprocal translocation**: two chromosomes exchange segments (e.g., Robertsonian translocation
  between chromosomes 14 and 21 is a cause of familial Down syndrome).
- **Philadelphia chromosome**: reciprocal translocation t(9;22) producing BCR-ABL fusion gene,
  causing chronic myeloid leukaemia (CML).

---

## 11. Genetic Counselling and Risk Assessment

### Pedigree Analysis for Autosomal Recessive Disorders

For cystic fibrosis (CF), an autosomal recessive disorder ($1$ in $2500$ live births in Northern
European Populations):

- Carrier frequency: $2q = 2 \times \frac{1}{50} = \frac{1}{25}$
- Risk for two carriers: $\frac{1}{25} \times \frac{1}{25} \times \frac{1}{4} = \frac{1}{2500}$
- Risk for a known carrier + random partner: $\frac{1}{25} \times \frac{1}{4} = \frac{1}{100}$
- Risk for a known carrier + partner with negative family history:
  $\frac{1}{25} \times \frac{1}{250} = \frac{1}{6250}$

### Genetic Screening

- **Newborn screening**: PKU, hypothyroidism, sickle-cell disease (heel-prick test).
- **Carrier screening**: offered to individuals with family history or in high-risk ethnic groups
  (e.g., Tay-Sachs in Ashkenazi Jews, thalassaemia in Mediterranean populations).
- **Prenatal diagnosis**: amniocentesis ($15$--$20$ weeks; karyotyping, biochemical tests, DNA
  analysis), chorionic villus sampling (CVS, $10$--$13$ weeks).
- **Preimplantation genetic diagnosis (PGD)**: IVF embryos are tested for genetic conditions before
  implantation; allows selection of unaffected embryos.

---

## Exam-Style Problems (Extended)

<details>
<summary>Problem 9: Extended Response -- Genetic Counselling</summary>

A couple has a family history of cystic fibrosis (CF). The husband's sister has CF. The wife has no
Family history of CF. The population carrier frequency is $1$ in $25$. (a) Calculate the probability
That the husband is a carrier. (b) Calculate the probability that their first child will have CF.
(c) Explain why genetic counselling would recommend carrier testing for both individuals before
Providing risk estimates. (d) Describe two prenatal diagnostic techniques that could be used if the
Couple is at risk.

</details>

<details>
<summary>Problem 10: Quantitative -- Hardy-Weinberg with Migration</summary>

Island A has an allele frequency of $p = 0.8$ for a dominant trait. Island B has $p = 0.3$. Each
Generation, $10\%$ of the population of Island A migrates to Island B, replacing $10\%$ of the
Island B population (which dies or emigrates). Calculate the new allele frequency on Island B after
one Generation of migration. Predict the allele frequency on Island B after many generations of
continued Migration at this rate.

</details>

<details>
<summary>Problem 11: Extended Response -- Non-Disjunction and Karyotype Analysis</summary>

A karyotype shows $47,XX,+13$ (Patau syndrome). (a) Explain the meiotic error that produced this
Karyotype, identifying whether non-disjunction occurred in Meiosis I or Meiosis II. (b) Explain why
The mother's age is a significant risk factor for trisomy. (c) Compare and contrast the clinical
Features of trisomy 13, trisomy 18, and trisomy 21. (d) Explain why Patau and Edwards syndromes Have
much poorer prognoses than Down syndrome.

</details>

<details>
<summary>Problem 12: Data Analysis -- Epistasis and Biochemical Pathway</summary>

In summer squash, fruit colour is controlled by two genes. Gene $W$ determines whether pigment is
Produced ($W$ = pigment, $w$ = no pigment, white epistatic). Gene $Y$ determines colour when $W$ is
Present ($Y$ = yellow, $y$ = green). A dihybrid cross ($WwYy \times WwYy$) produces: white = $412$
Yellow = $298$Green = $96$Total = $806$. (a) Perform a chi-squared test to determine whether the
Data fit the expected $12:3:1$ epistatic ratio ($p = 0.05$Critical value $= 5.99$ for $2$ df). (b)
Identify the most deviant phenotype class and propose an explanation. (c) Explain how this Epistatic
interaction reflects the underlying biochemical pathway.

</details>

---

## Additional Worked Examples

**Worked Example: Sex-Linked Inheritance and Probability**

Haemophilia A is an X-linked recessive disorder caused by a mutation in the factor VIII gene
($X^h$). A normal woman whose father had haemophilia marries a normal man with no family history of
the Condition. (a) What is the woman's genotype? (b) What is the probability that their first son
will Have haemophilia? (c) What is the probability that their first daughter will be a carrier? (d)
If Their first child is a daughter with haemophilia, what does this imply about the mutation?

<details>
<summary>Solution</summary>

(a) The woman's father had haemophilia ($X^hY$). He passed his $X^h$ chromosome to his daughter. The
Woman is therefore $X^HX^h$ (carrier). She is phenotypically normal because the normal allele
($X^H$) is dominant.

(b) The woman ($X^HX^h$) $\times$ normal man ($X^HY$). Punnett square: | | $X^H$ | $Y$ |
|---|---|---| | $X^H$ | $X^HX^H$ (normal girl) | $X^HY$ (normal boy) | | $X^h$ | $X^HX^h$ (carrier
girl) | $X^hY$ (haemophilic boy) |

Probability of a son with haemophilia: $1/4$ (out of all children) or $1/2$ (out of sons only).

(c) Probability of a carrier daughter: $1/4$ (out of all children) or $1/2$ (out of daughters only).

(d) If their first daughter has haemophilia ($X^hX^h$), she must have inherited $X^h$ from both
parents. The mother is $X^HX^h$ (confirmed). The father must have contributed $X^h$Meaning the
father is $X^hY$ (has haemophilia). But the problem states he has no family history. This implies
either:

- A new mutation occurred in the father's germline (de novo mutation, which accounts for
  approximately $30\%$ of haemophilia A cases).
- The father is a mosaic for the mutation (some of his cells carry the mutation, including
  sperm-producing cells).
- The stated "no family history" was incorrect or incomplete.

</details>

**Worked Example: Genetic Cross with Incomplete Dominance**

In snapdragons, flower colour shows incomplete dominance: $RR$ = red, $Rr$ = pink, $rr$ = white. A
pink-flowered snapdragon is crossed with a white-flowered snapdragon. (a) Give the expected
Genotypic and phenotypic ratios of the F1. (b) Two F1 plants are crossed. Give the expected ratios.
(c) If $200$ F2 plants are produced, how many are expected to be pink? (d) Explain how incomplete
Dominance differs from codominance, giving an example of each.

<details>
<summary>Solution</summary>

(a) Pink ($Rr$) $\times$ white ($rr$): | | $r$ | $r$ | |---|---|---| | $R$ | $Rr$ (pink) | $Rr$
(pink) | | $r$ | $rr$ (white) | $rr$ (white) |

Genotypic ratio: $1\;Rr : 1\;rr$. Phenotypic ratio: $1$ pink : $1$ white.

(b) F1 $\times$ F1: $Rr \times Rr$: | | $R$ | $r$ | |---|---|---| | $R$ | $RR$ (red) | $Rr$ (pink) |
| $r$ | $Rr$ (pink) | $rr$ (white) |

Genotypic ratio: $1\;RR : 2\;Rr : 1\;rr$. Phenotypic ratio: $1$ red : $2$ pink : $1$ white.

(c) Expected pink plants: $\frac{2}{4} \times 200 = 100$.

(d) **Incomplete dominance**: the heterozygote has an intermediate phenotype (blend of the two
Homozygous phenotypes). Example: snapdragon flower colour ($RR$ = red, $Rr$ = pink, $rr$ = white);
Human hair texture (curly $\times$ straight $=$ wavy).

**Codominance**: the heterozygote expresses both alleles fully and simultaneously (both phenotypes
are Visible, not blended). Example: blood type AB ($I^A I^B$ -- both A and B antigens are expressed
on The red blood cell surface); sickle-cell trait ($HbA HbS$ -- both normal and sickle haemoglobin
are Present in red blood cells, visible on electrophoresis as two bands).

</details>

**Worked Example: Test Cross and Unknown Genotype**

In pea plants, tall ($T$) is dominant over dwarf ($t$). A tall plant of unknown genotype is crossed
With a dwarf plant. The cross produces $48$ tall and $52$ dwarf offspring. (a) What was the genotype
Of the tall parent? (b) Perform a chi-squared test to confirm that the observed ratio fits the
Expected ratio ($p = 0.05$Critical value $= 3.84$ for $1$ df). (c) Explain why a test cross is Used
to determine unknown genotypes. (d) If the tall parent were homozygous ($TT$), what offspring Ratio
would you expect?

<details>
<summary>Solution</summary>

(a) The offspring ratio is approximately $1:1$ (tall : dwarf). This is consistent with the tall
parent Being heterozygous ($Tt$): $Tt \times tt \to 1\;Tt : 1\;tt = 1$ tall : $1$ dwarf.

(b) Expected ratio: $1:1$ (50 tall : 50 dwarf).
$\chi^2 = \frac{(48 - 50)^2}{50} + \frac{(52 - 50)^2}{50} = \frac{4}{50} + \frac{4}{50} = 0.08 + 0.08 = 0.16$
$\chi^2 = 0.16 < 3.84$. We fail to reject $H_0$. The data fit the expected $1:1$ ratio.

(c) A test cross (crossing with a homozygous recessive individual, $tt$) reveals the genotype of the
Unknown parent because the recessive parent can only contribute the recessive allele ($t$). If the
Unknown parent is $TT$All offspring are $Tt$ (tall). If the unknown parent is $Tt$Approximately Half
the offspring are $Tt$ (tall) and half are $tt$ (dwarf). The phenotype of the offspring directly
Reveals the alleles contributed by the unknown parent.

(d) If the tall parent were $TT$: $TT \times tt \to 100\%\;Tt$ (all tall). All offspring would be
Phenotypically tall.

</details>

**Worked Example: Dihybrid Cross with Independent Assortment**

In guinea pigs, black coat ($B$) is dominant over white ($b$), and short hair ($S$) is dominant over
Long hair ($s$). Two double heterozygotes ($BbSs \times BbSs$) are crossed. (a) Give the expected
Phenotypic ratio. (b) Calculate the probability of a black, short-haired guinea pig. (c) Calculate
The probability of a black, long-haired guinea pig. (d) If $160$ offspring are produced, how many Of
each phenotype are expected?

<details>
<summary>Solution</summary>

(a) With independent assortment: $BbSs \times BbSs$ produces a $9:3:3:1$ phenotypic ratio:

- $9/16$ black, short ($B\_S\_$)
- $3/16$ black, long ($B\_ss$)
- $3/16$ white, short ($bbS\_$)
- $1/16$ white, long ($bbss$)

(b) $P(\text{black, short}) = 9/16 = 0.5625$.

(c) $P(\text{black, long}) = 3/16 = 0.1875$.

(d) With $160$ offspring:

- Black, short: $160 \times 9/16 = 90$
- Black, long: $160 \times 3/16 = 30$
- White, short: $160 \times 3/16 = 30$
- White, long: $160 \times 1/16 = 10$ Total $= 90 + 30 + 30 + 10 = 160$.

</details>

**Worked Example: Meiosis and Gamete Diversity**

A diploid organism has $2n = 8$ (4 pairs of homologous chromosomes). (a) Calculate the number of
Possible gamete genotypes from independent assortment alone. (b) If crossing over occurs once in
Each chromosome pair during prophase I, how does this affect genetic diversity? (c) Calculate the
Number of possible combinations in a zygote formed from the fusion of two gametes. (d) Explain Why
meiosis is important for sexual reproduction.

<details>
<summary>Solution</summary>

(a) The number of possible gamete genotypes from independent assortment alone is $2^n$Where $n$ is
The haploid number. $n = 8/2 = 4$. Number of gamete genotypes $= 2^4 = 16$.

(b) Crossing over between homologous chromosomes during prophase I produces recombinant chromatids.
If crossing over occurs once in each of the $4$ bivalents, each pair produces 4 possible chromatid
Combinations (2 non-crossover + 2 crossover). The number of possible combinations from a single
Meiosis with crossing over in all $n$ chromosomes is much greater than $2^n$. For each chromosome,
The number of possible combinations depends on the number of crossovers and their positions. With
Just one crossover per bivalent, each pair contributes $2^2 = 4$ possible combinations instead of
$2^1 = 2$. For $n = 4$ chromosomes: $4^4 = 256$ possible gamete genotypes (compared to $16$ Without
crossing over).

(c) Number of zygote combinations: if one parent can produce $16$ gamete types (without crossing
over) And the other can produce $16$The number of possible zygotes is $16 \times 16 = 256$. With
Crossing over, this number increases enormously.

(d) Meiosis is important for sexual reproduction because:

1. It reduces the chromosome number from diploid ($2n$) to haploid ($n$), so that fertilisation
   restores the diploid number. Without meiosis, chromosome number would double each generation.
2. It generates genetic diversity through independent assortment, crossing over, and random
   fertilisation. This diversity is the raw material for natural selection and evolution.
3. It allows for the elimination of deleterious mutations through segregation and recombination.

</details>

---

## Additional Common Pitfalls

- **Confusing dominance and recessiveness with "stronger" and "weaker" alleles**: dominance is about
  expression in the heterozygote, not about the intrinsic "strength" of the allele. A dominant
  allele is not necessarily more common or more beneficial.
- **Assuming that a $3:1$ ratio always means simple Mendelian inheritance**: linked genes, lethal
  alleles, incomplete penetrance, and epistasis can all modify expected ratios.
- **Confusing genotype and phenotype**: genotype is the genetic makeup; phenotype is the observable
  characteristic. The same genotype can produce different phenotypes in different environments (norm
  of reaction).
- **Forgetting that sex-linked traits affect males differently**: males have only one X chromosome,
  so a single recessive allele on the X chromosome is expressed (no second copy to mask it).
- **Confusing autosomal and sex-linked inheritance**: autosomal traits show equal frequencies in
  males and females; sex-linked traits show different patterns (e.g., X-linked recessive traits are
  more common in males).
- **Assuming that a carrier of a recessive allele always has a normal phenotype**: some carriers
  show mild symptoms (incomplete dominance at the biochemical level), e.g., sickle-cell trait
  carriers may have reduced oxygen transport at high altitude.

---

## Additional Exam-Style Problems with Full Solutions

<details>
<summary>Problem 13: Extended Response -- Gene Regulation in Eukaryotes</summary>

Describe how gene expression is regulated in eukaryotic cells at the following levels: (a)
transcriptional regulation (enhancers, silencers, transcription factors), (b) post-transcriptional
Regulation (alternative splicing, miRNA), (c) translational regulation, and (d) post-translational
Regulation. Provide a specific example for each level.

</details>

<details>
<summary>Answer 13</summary>

(a) **Transcriptional regulation**:

- **Enhancers**: distal regulatory sequences (up to $1\;\mathrm{Mb}$ from the gene) that bind
  transcription factors and increase transcription. Example: the beta-globin locus control region
  (LCR) contains multiple enhancers that regulate globin gene expression during development.
- **Silencers**: regulatory sequences that bind repressor proteins and decrease transcription.
  Example: the neuron-restrictive silencer element (NRSE) silences neuronal genes in non-neuronal
  cells.
- **Transcription factors**: sequence-specific DNA-binding proteins that recruit or block RNA
  polymerase II. Example: the oestrogen receptor (ER) binds to oestrogen response elements (EREs) in
  the promoters of target genes, activating transcription in response to oestrogen.

(b) **Post-transcriptional regulation**:

- **Alternative splicing**: different combinations of exons are spliced together, producing multiple
  mRNA isoforms from a single gene. Example: the _Bcl-x_ gene produces two isoforms: Bcl-xL
  (anti-apoptotic, long) and Bcl-xS (pro-apoptotic, short) by alternative splicing of exon 2.
- **miRNA**: small non-coding RNAs ($\approx 22\;\mathrm{nt}$) that bind to complementary sequences
  in the $3'$ UTR of target mRNAs, leading to mRNA degradation or translational repression. Example:
  miR-21 is overexpressed in many cancers and downregulates tumour suppressor genes (e.g., PTEN,
  PDCD4).

(c) **Translational regulation**:

- Control of mRNA translation efficiency. Example: the iron response element (IRE) in the $5'$ UTR
  of ferritin mRNA. When iron is low, iron regulatory proteins (IRPs) bind to the IRE and block
  translation. When iron is high, IRPs dissociate, allowing ferritin synthesis (iron storage
  protein).
- Another example: globin mRNA translation is regulated by the availability of haem. Haem binds to
  the kinase HRI (heme-regulated inhibitor), inhibiting it. When haem is low, HRI phosphorylates
  eIF2$\alpha$ globally reducing translation initiation.

(d) **Post-translational regulation**:

- Chemical modifications after translation that alter protein activity, stability, localisation, or
  interactions. Example: the tumour suppressor protein p53 is regulated by phosphorylation
  (activates p53 in response to DNA damage), ubiquitination (targets p53 for proteasomal degradation
  by MDM2), and acetylation (enhances DNA binding).
- Another example: cyclin-dependent kinases (CDKs) are activated by binding to cyclins and by
  phosphorylation at a specific threonine residue (T160), and inactivated by phosphorylation at a
  different residue (Y15).

</details>

<details>
<summary>Problem 14: Quantitative -- Pedigree and Risk Calculation</summary>

A couple consults a genetic counsellor. The husband's brother has cystic fibrosis (autosomal
recessive, Carrier frequency $\approx 1/25$ in the population). The wife has no family history of
CF. There is No known consanguinity. (a) Calculate the probability that the husband is a carrier.
(b) Calculate The probability that the wife is a carrier. (c) Calculate the probability that their
first child Will have CF. (d) A genetic test shows the wife is NOT a carrier. What is the
probability of Having an affected child?

</details>

<details>
<summary>Answer 14</summary>

(a) The husband's parents are both obligate carriers (they produced an affected child). The husband
Is unaffected, so his genotype is either $CC$ (probability $1/3$) or $Cc$ (probability $2/3$).
Probability the husband is a carrier: $2/3$.

Note: among the unaffected siblings of an affected child, the probability of being a carrier is
$2/3$Not $1/2$. This is because the conditional probability
$P(\text{carrier} | \text{unaffected}) =
P(\text{carrier and unaffected}) / P(\text{unaffected}) = (1/2) / (3/4) = 2/3$.

(b) The wife has no family history of CF. The population carrier frequency is $1/25$. Probability
the wife is a carrier: $1/25 = 0.04$.

(c) Probability of an affected child:
$P(\text{child affected}) = P(\text{husband carrier}) \times P(\text{wife carrier}) \times P(\text{both pass } c)$
$= \frac{2}{3} \times \frac{1}{25} \times \frac{1}{4}$
$= \frac{2}{300} = \frac{1}{150} \approx 0.67\%$

(d) If the wife is confirmed NOT a carrier ($cc$ is ruled out), she cannot pass a $c$ allele to her
Child. Even if the husband is a carrier, the child can be at most $Cc$ (carrier), not $cc$
(affected). $P(\text{child affected}) = 0$.

(There is a small residual risk if the wife carries a rare CF mutation not detected by the genetic
test, But for the purposes of this calculation, the risk is effectively zero.)

</details>

<details>
<summary>Problem 15: Extended Response -- Genetic Modification and Ethics</summary>

Genetically modified (GM) crops are widely cultivated in many countries but face public opposition
in Others. (a) Describe the process of creating a herbicide-resistant GM soybean plant. (b) Discuss
Three potential benefits of GM crops for food security. (c) Discuss three ecological concerns about
GM crop cultivation. (d) Evaluate the argument that GM crops should be labelled, considering both
Consumer rights and practical implications.

</details>

<details>
<summary>Answer 15</summary>

(a) Creating herbicide-resistant soybean:

1. Identify a gene that confers resistance to the herbicide (e.g., the EPSPS gene from
   _Agrobacterium tumefaciens_ strain CP4, which produces a glyphosate-resistant version of the
   EPSPS enzyme; this is the "Roundup Ready" trait).
2. Isolate the gene and clone it into a plasmid vector with a plant-selectable marker (e.g.,
   antibiotic resistance) and a constitutive promoter (e.g., CaMV 35S).
3. Introduce the recombinant plasmid into _Agrobacterium tumefaciens_ (which transfers T-DNA into
   plant genomes).
4. Infect soybean tissue (cotyledon explants) with the transformed _Agrobacterium_.
5. Select transformed cells on herbicide-containing medium (only cells with the resistance gene
   survive).
6. Regenerate whole plants from the transformed cells (tissue culture).
7. Test the plants for herbicide resistance and confirm gene integration (PCR, Southern blot).

(b) **Benefits for food security**:

1. **Increased yield**: herbicide-resistant and pest-resistant crops reduce losses from weeds and
   insects, increasing effective yield.
2. **Reduced pesticide use**: Bt cotton and Bt maize produce their own insecticidal protein,
   reducing the need for chemical insecticide sprays (beneficial for the environment and farmer
   health).
3. **Nutritional enhancement**: Golden Rice produces beta-carotene (provitamin A) in the endosperm,
   addressing vitamin A deficiency in developing countries (a major cause of childhood blindness).
4. **Abiotic stress tolerance**: drought-tolerant and salt-tolerant GM varieties could enable
   agriculture in marginal environments.

(c) **Ecological concerns**:

1. **Gene flow**: transgenes could spread to wild relatives via cross-pollination, potentially
   creating herbicide-resistant weeds ("superweeds"). Example: glyphosate-resistant _Amaranthus
   palmeri_ (pigweed) has become a major problem in US agriculture.
2. **Impact on non-target organisms**: Bt crops may affect beneficial insects (e.g., butterflies,
   bees) if they consume Bt pollen. However, field studies have generally shown minimal impact on
   non-target species when compared to chemical insecticide use.
3. **Resistance evolution**: pests can evolve resistance to Bt toxins, reducing the effectiveness of
   the technology. Resistance management strategies (refuge planting) are required.

(d) **GM labelling evaluation**:

- **For labelling**: consumers have a right to know what is in their food (autonomy, informed
  choice); allows people with ethical or religious objections to avoid GM products; supports
  traceability in case of unforeseen health or environmental effects.
- **Against mandatory labelling**: may imply a health risk where none has been demonstrated (all GM
  foods approved for sale have passed safety assessments); increases food costs; creates practical
  difficulties (processed foods may contain trace GM ingredients; segregation of GM and non-GM
  supply chains is expensive); could stigmatise GM foods and reduce consumer acceptance of a
  technology with potential benefits.

</details>

---

## Cross-References to Related Topics

- **DNA structure and mutations**: Review
  [.../2-molecular-biology/1_molecular-biology](../2-molecular-biology/1_molecular-biology) for DNA
  structure, base pairing, and mutation types.
- **Advanced genetics and genetic engineering**: Review
  [..../3-genetics/2_genetics-advanced](../3-genetics/2_genetics-advanced) for DNA technology,
  CRISPR, and detailed molecular mechanisms.
- **Evolution and population genetics**: Review
  [.../5-evolution-and-biodiversity/1_evolution](../5-evolution-and-biodiversity/1_evolution) for
  Hardy-Weinberg equilibrium and population-level genetics.
- **Cell biology and chromosomes**: Review
  [.../1-cell-biology/1_cell-biology](../1-cell-biology/1_cell-biology) for mitosis, meiosis, and
  chromosome structure.
- **Immunology and genetics**: Review
  [.../8-nervous-system-and-immunology/2_immunology](../8-nervous-system-and-immunology/2_immunology)
  for antibody genetics and blood type inheritance.

---

| Topic      | Site    | Link                                                                             |
| ---------- | ------- | -------------------------------------------------------------------------------- |
| [Genetics] | A-Level | [View](https://alevel-sciences.wyattau.com/docs/alevel/biology/genetics-and-dna) |
| [Genetics] | IB      | [View](https://ib.wyattau.com/docs/ib/biology/3-genetics/1_genetics)             |
| [Genetics] | DSE     | [View](https://dse.wyattau.com/docs/dse/biology/3-genetics/1_genetics)           |

## Supplementary: Meiosis in Detail (HL Extension)

### Overview of Meiosis

Meiosis is a specialised form of cell division that produces haploid gametes from diploid germ
cells. It consists of two consecutive divisions: **Meiosis I** (reductional, homologous chromosomes
separate) And **Meiosis II** (equational, sister chromatids separate). The result is four haploid
cells, each With a unique combination of chromosomes.

### Meiosis I -- Prophase I (the longest and most complex phase)

Prophase I is subdivided into five stages based on chromosome morphology:

**Leptotene**: chromosomes begin to condense. Each chromosome consists of two sister chromatids held
Together at the centromere. The term "leptonema" means "thin thread."

**Zygotene**: homologous chromosomes pair up in a process called **synapsis**. The synaptonemal
complex (a protein structure consisting of lateral elements and a central element) forms between the
homologues, Holding them together in intimate alignment. Each paired unit is called a **bivalent**
(or tetrad, Because it consists of four chromatids).

**Pachytene**: crossing over occurs. Non-sister chromatids of homologous chromosomes exchange
segments At sites called **chiasmata** (singular: chiasma). The enzyme **Spo11** creates
double-strand breaks That initiate recombination. The number of chiasmata per bivalent varies ( 1--3
in humans). Crossing over is the physical basis for genetic recombination, producing new
combinations of alleles On the same chromosome.

**Diplotene**: the synaptonemal complex dissolves and homologues begin to separate, but remain
attached At chiasmata (the sites where crossing over occurred). Chiasmata are visible under a
microscope as X-shaped connections between homologous chromosomes. In human oocytes, meiosis arrests
at diplotene (prophase I) and remains arrested until ovulation (up to 50 years), which is why the
risk of Non-disjunction increases with maternal age.

**Diakinesis**: chromosomes condense further, chiasmata move toward the ends of chromosomes
(terminalisation), And the nuclear envelope breaks down. Spindle fibres begin to form.

### Metaphase I

Bivalents align on the metaphase plate. Unlike mitosis (where individual chromosomes align), in
Meiosis I, **bivalents align** with one homologue on each side of the plate. The orientation of each
Bivalent is random with respect to which homologue faces which pole -- this is the basis of
**independent assortment**.

### Anaphase I

Homologous chromosomes separate and move to opposite poles. Sister chromatids remain attached at The
centromere. This is the **reductional division**: the chromosome number is halved (from $2n$ to
$n$). Note: each chromosome still consists of two sister chromatids, but they may no longer be
identical Due to crossing over.

### Telophase I and Cytokinesis

Chromosomes arrive at the poles. In many organisms, the nuclear envelope reforms briefly before
Meiosis II. Cytokinesis divides the cell into two haploid cells (each with $n$ chromosomes, but each
Chromosome still has two chromatids).

### Meiosis II -- Similar to Mitosis

Meiosis II separates the sister chromatids, producing four haploid cells.

**Prophase II**: chromosomes recondense, spindle forms. No DNA replication occurs between Meiosis I
And Meiosis II (the cell is already haploid).

**Metaphase II**: individual chromosomes align on the metaphase plate.

**Anaphase II**: sister chromatids separate, becoming independent chromosomes.

**Telophase II**: four haploid cells are produced. Each cell has $n$ chromosomes (one chromatid per
Chromosome).

### Comparison: Mitosis vs Meiosis

| Feature                    | Mitosis                              | Meiosis                                |
| -------------------------- | ------------------------------------ | -------------------------------------- |
| **Divisions**              | 1                                    | 2                                      |
| **Daughter cells**         | 2 (genetically identical)            | 4 (genetically unique)                 |
| **Chromosome number**      | $2n \to 2n$                          | $2n \to n$                             |
| **Synapsis/crossing over** | No                                   | Yes (Prophase I)                       |
| **Homologous pairing**     | No                                   | Yes (Metaphase I)                      |
| **Independent assortment** | No                                   | Yes (Metaphase I)                      |
| **Function**               | Growth, repair, asexual reproduction | Gamete production, sexual reproduction |

### Sources of Genetic Variation in Meiosis

1. **Crossing over** (recombination): exchanges alleles between non-sister chromatids of homologous
   chromosomes, producing recombinant chromatids with new allele combinations. The number of
   possible recombinant chromatids depends on the number of chiasmata and their positions.

2. **Independent assortment**: each bivalent orients randomly on the metaphase I plate. For an
   organism with $n$ chromosome pairs, $2^n$ possible gamete combinations result from independent
   assortment alone. In humans ($n = 23$): $2^{23} \approx 8.4 \times 10^6$ possible combinations.

3. **Random fertilisation**: any sperm can fertilise any egg, multiplying the genetic diversity by
   $2^n \times 2^n = 4^n$ (approximately $7 \times 10^{13}$ possible zygote combinations in humans).

### Non-Disjunction

Non-disjunction is the failure of homologous chromosomes (Meiosis I) or sister chromatids (Meiosis
II) To separate properly. This produces gametes with an abnormal chromosome number (aneuploidy):

- **Trisomy**: $2n + 1$ (three copies of a chromosome). Examples: Down syndrome (trisomy 21),
  Edwards syndrome (trisomy 18), Patau syndrome (trisomy 13), Klinefelter syndrome (XXY).
- **Monosomy**: $2n - 1$ (one copy). Most autosomal monosomies are lethal. The exception is Turner
  syndrome (XO), which is viable.

Non-disjunction in Meiosis I vs Meiosis II can be distinguished by analysing the genotypes of the
Parents and affected offspring (using linked markers or STR analysis). In Meiosis I non-disjunction,
The homologous chromosomes fail to separate, producing gametes with both homologues or neither. In
Meiosis II non-disjunction, sister chromatids fail to separate, producing gametes with two identical
Copies or none.

### Worked Example: Non-Disjunction Probability

A woman aged 40 has a risk of having a child with Down syndrome (trisomy 21) of approximately
$1/100$. (a) What type of non-disjunction produces trisomy 21? (b) Explain why the risk increases
with maternal Age. (c) Calculate the probability that a $40$-year-old woman has a child with Down
syndrome given That she has already had one affected child.

<details>
<summary>Solution</summary>

(a) Trisomy 21 results from non-disjunction of chromosome 21, producing an egg with two copies of
Chromosome 21. When fertilised by a normal sperm (one copy of chromosome 21), the zygote has three
Copies ($47,XX,+21$ or $47,XY,+21$). This can occur in either Meiosis I or Meiosis II of oogenesis
(approximately $75\%$ of cases are Meiosis I errors).

(b) The risk increases with maternal age because human oocytes begin meiosis during fetal
development And arrest at Prophase I (diplotene) for decades. Over this prolonged arrest, cohesin
proteins (which Hold homologous chromosomes together) gradually degrade. When meiosis resumes at
ovulation, weakened Cohesin leads to premature separation of homologues and increased
non-disjunction risk. At age 20, The risk is approximately $1/1500$; at age 35, $1/350$; at age 40,
$1/100$; at age 45, $1/30$.

(c) If the first child has Down syndrome, the probability of a second affected child depends on
whether The mother is a gonosomal mosaic (some of her ovarian cells carry the trisomy). If the
non-disjunction Was a random event (not due to mosaicism), the risk of a second affected child is
approximately the Same as the age-related risk ($1/100$ for age 40). However, some studies suggest a
slightly elevated Recurrence risk (approximately $1/50$), possibly due to undetected mosaicism or a
genetic predisposition To non-disjunction.

</details>

### Mitosis vs Meiosis -- Detailed Comparison Table

| Feature                 | Mitosis                                   | Meiosis                                                                            |
| ----------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------- |
| **Purpose**             | Growth, repair, asexual reproduction      | Gamete production                                                                  |
| **Cell type**           | Somatic cells (all body cells)            | Germ cells (only in gonads)                                                        |
| **Divisions**           | One                                       | Two (Meiosis I and Meiosis II)                                                     |
| **DNA replication**     | Once per cycle                            | Once before Meiosis I (not before Meiosis II)                                      |
| **Daughter cells**      | Two                                       | Four                                                                               |
| **Chromosome number**   | $2n \to 2n$ (diploid)                     | $2n \to n$ (haploid)                                                               |
| **Daughter cells are**  | Genetically identical to parent           | Genetically unique (recombination, independent assortment)                         |
| **Synapsis (pairing)**  | No                                        | Yes (homologous chromosomes pair in Prophase I)                                    |
| **Crossing over**       | No                                        | Yes (Prophase I)                                                                   |
| **Metaphase alignment** | Individual chromosomes at metaphase plate | Bivalents (homologous pairs) at metaphase plate                                    |
| **Anaphase**            | Sister chromatids separate                | Meiosis I: homologous chromosomes separate; Meiosis II: sister chromatids separate |
| **Prophase duration**   | Short (minutes to hours)                  | Very long (Prophase I can last days to decades in oocytes)                         |

### Genetic Recombination Frequency and Mapping

When two genes are on the same chromosome (linked), their recombination frequency reflects their
Physical distance apart. This is the basis for genetic mapping:

$$\text{Map distance (cM)} = \text{Recombination frequency (\%)}$$

For small distances ($< 10\;\mathrm{cM}$), map distance and recombination frequency are
approximately Equal. For larger distances, recombination frequency plateaus at $50\%$ (due to
multiple crossovers Between distant genes, which can restore the parental arrangement). Mapping
functions (Haldane, Kosambi) correct for this:

**Haldane's mapping function** (assumes crossovers are independent): $$d = -\frac{1}{2}\ln(1 - 2r)$$
Where $d$ is map distance in Morgans and $r$ is recombination frequency.

**Kosambi's mapping function** (accounts for crossover interference):
$$d = \frac{1}{4}\ln\frac{1 + 2r}{1 - 2r}$$

### Worked Example: Three-Point Cross Mapping

Three genes (A, B, C) are on the same chromosome. A test cross between a triple heterozygote and a
Triple recessive produces:

| Phenotype | Number   |
| --------- | -------- |
| ABC       | 380      |
| abc       | 370      |
| Abc       | 85       |
| aBC       | 80       |
| ABc       | 40       |
| abC       | 35       |
| AbC       | 5        |
| aBc       | 5        |
| **Total** | **1000** |

(a) Determine the gene order. (b) Calculate the map distances between each pair of genes. (c)
Calculate The coefficient of coincidence and interference.

<details>
<summary>Solution</summary>

(a) The parental (most frequent) phenotypes are ABC (380) and abc (370). The double recombinant
(least Frequent) phenotypes are AbC (5) and aBc (5).

To determine gene order, compare the parental and double recombinant genotypes:

- Parental: ABC and abc
- Double recombinant: AbC and aBc

The gene that has swapped its alleles relative to the parental configuration in the double
recombinants Is **B** (in ABC $\to$ AbC, B changed; in abc $\to$ aBc, B changed). Therefore, **B is
the middle gene**.

Gene order: A -- B -- C.

(b) Recombination frequencies:

- A--B distance: single recombinants between A and B = Abc (85) + aBC (80) + AbC (5) + aBc (5)
  = 175. RF(A--B) = $175/1000 = 17.5\;\mathrm{cM}$.
- B--C distance: single recombinants between B and C = ABc (40) + abC (35) + AbC (5) + aBc (5) = 85.
  RF(B--C) = $85/1000 = 8.5\;\mathrm{cM}$.
- A--C distance: total recombinants between A and C = Abc (85) + aBC (80) + ABc (40) + abC (35) +
  AbC (5) + aBc (5) = 250. RF(A--C) = $250/1000 = 25.0\;\mathrm{cM}$.

Check: RF(A--C) should approximately equal RF(A--B) + RF(B--C) = $17.5 + 8.5 = 26.0\;\mathrm{cM}$.
The difference ($26.0 - 25.0 = 1.0\;\mathrm{cM}$) is due to double crossovers that restored the
parental Arrangement for A--C but were counted as recombinants for A--B and B--C.

(c) **Coefficient of coincidence (CoC)** = observed double crossovers / expected double crossovers.
Observed DCO = $5 + 5 = 10$. Expected DCO
$= \text{RF(A--B)} \times \text{RF(B--C)} \times \text{total} = 0.175 \times 0.085 \times 1000 = 14.875$.
CoC $= 10 / 14.875 = 0.672$.

**Interference** $= 1 - \text{CoC} = 1 - 0.672 = 0.328$.

Interference of $0.328$ means that approximately $33\%$ of expected double crossovers did not occur
(crossover interference: a crossover in one interval reduces the probability of a crossover in the
Adjacent interval).

</details>

## Summary

This topic covers the biological principles of genetics, including key concepts, experimental
evidence, and real-world applications.

**Key concepts include:**

- Mendelian inheritance
- gene expression and regulation
- mutations and genetic variation
- genetic engineering (PCR, gel electrophoresis)
- genome projects

Success requires the ability to recall specific factual content, apply knowledge to novel scenarios,
and evaluate experimental evidence critically.
