---
title: Genetics
description:
  IB Biology — meiosis, Mendelian genetics, inheritance patterns, gene expression, mutations,
  biotechnology, PCR, and genetic modification.
slug: genetics
---

## 1. Meiosis and Genetic Variation

### Recombination

During Prophase I of meiosis, homologous chromosomes undergo **crossing over** at points called
**chiasmata**. Non-sister chromatids exchange segments of DNA, producing **recombinant chromatids**
with new combinations of alleles.

Crossing over is the only mechanism that produces new allele combinations **within** a single
chromosome (the others --- independent assortment and random fertilisation --- operate at the
chromosome or organism level).

### Independent Assortment

During Metaphase I, each bivalent (homologous pair) aligns independently at the metaphase plate. For
an organism with haploid number $n$, independent assortment alone can produce $2^n$ different gamete
genotypes.

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
is dominant over green ($y$).

Cross: $RrYy \times RrYy$

Expected phenotypic ratio: $9:3:3:1$ (round yellow : round green : wrinkled yellow : wrinkled
green).

This ratio arises from independent assortment: the two genes segregate independently.

---

## 3. Non-Mendelian Inheritance

### Incomplete Dominance

The heterozygous phenotype is intermediate between the two homozygous phenotypes. Neither allele is
fully dominant.

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
females, since males have only one X chromosome ($XY$).

- Males express X-linked recessive alleles with only one copy (hemizygous).
- Females must be homozygous recessive to express the trait.

**Example**: Red-green colour blindness and haemophilia are X-linked recessive conditions.

### Autosomal Linkage

Genes on the same chromosome tend to be inherited together (linked). The degree of linkage depends
on the distance between genes: genes farther apart are more likely to be separated by crossing over.

**Recombination frequency** =
$\dfrac{\mathrm{number of recombinant offspring}}{\mathrm{total offspring}} \times 100\%$

A recombination frequency of $1\%$ corresponds to a map distance of $1$ centimorgan ($\mathrm{cM}$).
Genes with a recombination frequency of $50\%$ or greater assort independently (they are either on
different chromosomes or very far apart on the same chromosome).

### Epistasis

An allele at one gene locus masks or modifies the expression of alleles at a different locus.

**Example**: In mice, the gene for pigment production ($E$) is epistatic to the gene for pigment
colour ($B$). A mouse with genotype $ee$ will be albino regardless of its $B/b$ genotype.

---

## 4. Gene Expression and Regulation

### The Operon Model (Prokaryotes)

The **lac operon** (Jacob and Monod, 1961) in _E. coli_ regulates lactose metabolism.

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
   (acetylation opens chromatin; methylation typically closes it).
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
| **Substitution** (nonsense) | One base replaced; creates a premature stop codon; truncated, usually non-functional protein.                                       |
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
contributes to evolution. Mutations in somatic cells are not inherited; mutations in germ cells are
passed to offspring.

---

## 6. Biotechnology

### Polymerase Chain Reaction (PCR)

PCR amplifies a specific DNA sequence exponentially without the need for living cells.

**Requirements**:

- **Template DNA**: the DNA segment to be amplified.
- **Primers**: short, single-stranded oligonucleotides ($18$--$25$ bases) complementary to the
  regions flanking the target sequence; one forward primer, one reverse primer.
- **DNA polymerase**: a thermostable enzyme, typically **Taq polymerase** (from _Thermus
  aquaticus_), which withstands the high temperatures of PCR.
- **Free nucleotides** (dNTPs): dATP, dCTP, dGTP, dTTP.
- **Buffer** with $\mathrm{Mg}^{2+}$ ions (cofactor for polymerase).

**Thermal Cycling**:

| Step             | Temperature                | Purpose                                                          |
| ---------------- | -------------------------- | ---------------------------------------------------------------- |
| **Denaturation** | $94$--$96^\circ\mathrm{C}$ | DNA double helix separates into single strands.                  |
| **Annealing**    | $50$--$65^\circ\mathrm{C}$ | Primers bind (anneal) to complementary sequences on each strand. |
| **Extension**    | $72^\circ\mathrm{C}$       | Taq polymerase synthesises new DNA strands from the primers.     |

Each cycle doubles the number of DNA copies. After $n$ cycles: $\mathrm{copies} = 2^n$ (starting
from a double-stranded molecule). Typically $25$--$35$ cycles are run.

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
   specific recognition sequences (palindromic). Example: **EcoRI** cuts at $5'$-GAATTC-$3'$,
   producing "sticky ends" (single-stranded overhangs).
2. **Insertion into a vector**: the gene is ligated into a plasmid vector using **DNA ligase**,
   which forms phosphodiester bonds between the gene and the opened plasmid.
3. **Transformation**: the recombinant plasmid is introduced into a host cell (commonly _E. coli_)
   by heat shock or electroporation.
4. **Selection**: cells that have taken up the plasmid are selected using antibiotic resistance
   markers (e.g., ampicillin resistance gene on the plasmid).
5. **Expression**: the host cell transcribes and translates the inserted gene, producing the desired
   protein.

### Examples of Genetic Modification

| Organism    | Gene inserted                                      | Product / Trait                                                    |
| ----------- | -------------------------------------------------- | ------------------------------------------------------------------ |
| _E. coli_   | Human insulin gene                                 | Human insulin (Humulin) for diabetes treatment                     |
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
long hair ($s$). Two double heterozygotes ($BbSs$) are crossed. Calculate the probability of
producing a guinea pig that is homozygous recessive for both traits ($bbss$).

</details>

<details>
<summary>Answer</summary>

The genes assort independently, so we can treat each separately.

For coat colour ($Bb \times Bb$): probability of $bb = \dfrac{1}{4}$.

For hair length ($Ss \times Ss$): probability of $ss = \dfrac{1}{4}$.

Combined probability: $\dfrac{1}{4} \times \dfrac{1}{4} = \dfrac{1}{16}$.

The expected fraction of $bbss$ offspring is $\dfrac{1}{16}$, consistent with the $9:3:3:1$ ratio
where the doubly recessive class is $\dfrac{1}{16}$.

</details>

<details>
<summary>Question 2: Sex-Linked Inheritance</summary>

Haemophilia is an X-linked recessive condition. A woman who is a carrier ($X^HX^h$) marries a man
without haemophilia ($X^HY$). Determine the possible genotypes and phenotypes of their children, and
the probability that a son will have haemophilia.

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
copies will be present? If each double-stranded copy is $300\;\mathrm{bp}$ and the total amount of
DNA produced is $54\;\mathrm{ng}$, calculate the approximate mass of one copy.
($1\;\mathrm{bp} \approx 660\;\mathrm{Da}$; $1\;\mathrm{Da} = 1.66 \times 10^{-24}\;\mathrm{g}$.)

</details>

<details>
<summary>Answer</summary>

After $n$ cycles:
$\mathrm{copies} = 10 \times 2^{30} \approx 10 \times 1.07 \times 10^9 = 1.07 \times 10^{10}$
copies.

Mass of one double-stranded copy: $300 \times 660 \times 2 = 396000\;\mathrm{Da}$ (both strands).

Mass in grams: $396000 \times 1.66 \times 10^{-24} = 6.57 \times 10^{-19}\;\mathrm{g}$ per copy.

Verification:
$1.07 \times 10^{10} \times 6.57 \times 10^{-19}\;\mathrm{g} \approx 7.03 \times 10^{-9}\;\mathrm{g} = 7\;\mathrm{ng}$
(order of magnitude consistent with $54\;\mathrm{ng}$ given possible variations in starting
template).

</details>

<details>
<summary>Question 4: Epistasis</summary>

In summer squash, colour is controlled by two genes. Gene $W$ determines whether any colour is
produced ($W$ = colour, $w$ = white, epistatic). Gene $Y$ determines whether the colour is yellow
($Y$) or green ($y$). A dihybrid cross ($WwYy \times WwYy$) is performed. Predict the phenotypic
ratio.

</details>

<details>
<summary>Answer</summary>

First, the $W/w$ gene ratio: $\dfrac{3}{4}$ $W\_$ : $\dfrac{1}{4}$ $ww$.

Among the $\dfrac{3}{4}$ that are $W\_$, the $Y/y$ gene determines colour: $\dfrac{3}{4}$ $Y\_$
(yellow) and $\dfrac{1}{4}$ $yy$ (green).

- White ($ww\_$): $\dfrac{1}{4}$ of all offspring.
- Yellow ($W\_Y\_$): $\dfrac{3}{4} \times \dfrac{3}{4} = \dfrac{9}{16}$.
- Green ($W\_yy$): $\dfrac{3}{4} \times \dfrac{1}{4} = \dfrac{3}{16}$.

Phenotypic ratio: $12$ white : $3$ yellow : $1$ green (i.e., $9:3:3:1$ with the $3 + 1$ of one class
collapsed by epistasis into a $12:3:1$ ratio).

</details>

<details>
<summary>Question 5: Frameshift Mutation</summary>

A DNA coding strand has the sequence: $5'$-ATG GCA TAC GAT-3'. A single nucleotide insertion of an
adenine (A) occurs between the third and fourth nucleotides. Write the original and mutated mRNA
sequences, and the original and mutated amino acid sequences.

</details>

<details>
<summary>Answer</summary>

Original coding strand: $5'$-ATG GCA TAC GAT-3' Original mRNA: $5'$-AUG GCA UAC GAU-3' Original
amino acids: Met -- Ala -- Tyr -- Asp

After insertion of A between positions 3 and 4, the coding strand becomes: $5'$-ATG AGC ATA CGA T-3'
Mutated mRNA: $5'$-AUG AGC AUC GAU-3' (reading frame shifted from the 4th codon onward) Mutated
amino acids: Met -- Ser -- Ile -- Asp

The frameshift altered all amino acids downstream of the insertion site (except the first Met, which
was unaffected). This illustrates the severe impact of frameshift mutations on protein structure and
function.

</details>
