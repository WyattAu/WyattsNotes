---
title: Genetics
description: "DSE Biology genetics notes covering Mendelian inheritance, monohybrid and dihybrid crosses, sex-linked inheritance, genetic crosses, and molecular genetics."
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - Biology
categories:
  - DSE
  - Biology
slug: dse-biology-genetics
---

## Mendelian Genetics

### Terminology

Before proceeding, the following terms must be understood precisely. Ambiguity in terminology is the
single most common source of lost marks in DSE genetics questions.

| Term             | Definition                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------- |
| Gene             | A specific sequence of DNA that codes for a specific polypeptide or functional RNA          |
| Allele           | One of two or more alternative forms of a gene at the same locus on homologous chromosomes  |
| Locus            | The fixed position of a gene on a chromosome                                                |
| Genotype         | The genetic constitution of an organism with respect to a particular trait (e.g., Bb)       |
| Phenotype        | The observable physical or biochemical characteristics of an organism (e.g., brown eyes)    |
| Homozygous       | Having two identical alleles at a locus (e.g., BB or bb)                                    |
| Heterozygous     | Having two different alleles at a locus (e.g., Bb)                                          |
| Dominant allele  | An allele that is expressed in the phenotype even in the presence of a different allele     |
| Recessive allele | An allele that is only expressed in the phenotype when two copies are present (homozygous)  |
| Carrier          | A heterozygous individual who carries a recessive allele but does not express the phenotype |
| Test cross       | Crossing an individual of unknown genotype with a homozygous recessive individual           |

### Mendel's Laws

Mendel's work with pea plants (_Pisum sativum_) established three fundamental laws:

**1. Law of Segregation (First Law):**

Each individual possesses two alleles for any given trait. During gamete formation, the two alleles
segregate so that each gamete carries only one allele. This is a direct consequence of the
separation of homologous chromosomes during meiosis I (anaphase I).

**2. Law of Independent Assortment (Second Law):**

Alleles of different genes on different chromosomes assort independently of one another during
gamete formation. This occurs because the orientation of one homologous pair on the metaphase plate
during meiosis I is independent of the orientation of other pairs. This law only holds for genes on
different chromosomes or genes that are far apart on the same chromosome (linked genes that undergo
frequent crossing over approximate independent assortment).

**3. Law of Dominance:**

In a heterozygote, one allele may mask the expression of another. The allele that is expressed is
dominant; the allele that is masked is recessive.

:::info
Mendel's laws are idealisations that assume: (a) genes are on different chromosomes, (b)
complete dominance, (c) no gene interaction, and (d) no linkage. Real organisms frequently violate
one or more of these assumptions. The DSE syllabus expects you to recognise when Mendelian ratios do
not hold and to explain why.
:::

### Monohybrid Crosses

A monohybrid cross involves a single pair of contrasting traits.

**Example:** In pea plants, tall (T) is dominant over dwarf (t). Cross two heterozygous tall plants
(Tt x Tt).

**Punnett square:**

|       | **T** | **t** |
| ----- | ----- | ----- |
| **T** | TT    | Tt    |
| **t** | Tt    | tt    |

**Genotypic ratio:** 1 TT : 2 Tt : 1 tt

**Phenotypic ratio:** 3 tall : 1 dwarf

**Worked calculation:**

If two carriers of cystic fibrosis (a recessive disorder, Cc) have a child, what is the probability
that the child will have cystic fibrosis?

The cross is Cc x Cc. The probability of cc = 1/4 = 25%.

### Dihybrid Crosses

A dihybrid cross involves two pairs of contrasting traits simultaneously.

**Example:** In pea plants, round seeds (R) are dominant over wrinkled (r), and yellow seeds (Y) are
dominant over green (y). Cross two double heterozygotes (RrYy x RrYy).

The gametes from each parent are: RY, Ry, rY, ry (four types, produced in equal frequency assuming
independent assortment).

**Punnett square (4 x 4):**

|        | **RY** | **Ry** | **rY** | **ry** |
| ------ | ------ | ------ | ------ | ------ |
| **RY** | RRYY   | RRYy   | RrYY   | RrYy   |
| **Ry** | RRYy   | RRyy   | RrYy   | Rryy   |
| **rY** | RrYY   | RrYy   | rrYY   | rrYy   |
| **ry** | RrYy   | Rryy   | rrYy   | rryy   |

**Genotypic ratio:** 1 RRYY : 2 RRYy : 1 RRyy : 2 RrYY : 4 RrYy : 2 Rryy : 1 rrYY : 2 rrYy : 1 rryy

**Phenotypic ratio:** 9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green
(9:3:3:1)

**Forked-line (branching) method for dihybrid ratios:**

Rather than constructing a 4 x 4 Punnett square, the two monohybrid ratios can be multiplied:

$$\mathrm{P(round)} = \frac{3}{4}, \quad \mathrm{P(wrinkled)} = \frac{1}{4}$$

$$\mathrm{P(yellow)} = \frac{3}{4}, \quad \mathrm{P(green)} = \frac{1}{4}$$

$$\mathrm{P(round, yellow)} = \frac{3}{4} \times \frac{3}{4} = \frac{9}{16}$$

$$\mathrm{P(round, green)} = \frac{3}{4} \times \frac{1}{4} = \frac{3}{16}$$

$$\mathrm{P(wrinkled, yellow)} = \frac{1}{4} \times \frac{3}{4} = \frac{3}{16}$$

$$\mathrm{P(wrinkled, green)} = \frac{1}{4} \times \frac{1}{4} = \frac{1}{16}$$

This yields the familiar 9:3:3:1 ratio and is significantly faster on an exam.

### The Test Cross

A test cross determines the genotype of an individual showing the dominant phenotype by crossing it
with a homozygous recessive individual.

**If the unknown genotype is homozygous dominant (BB x bb):**

All offspring will be Bb (100% dominant phenotype).

**If the unknown genotype is heterozygous (Bb x bb):**

Offspring will be 50% Bb (dominant phenotype) and 50% bb (recessive phenotype).

The appearance of any recessive offspring proves that the parent was heterozygous. The absence of
recessive offspring suggests (but does not prove with certainty, especially in small sample sizes)
that the parent is homozygous.

---

## Non-Mendelian Inheritance

Mendel's laws assume complete dominance. In reality, dominance relationships are more nuanced.

### Incomplete Dominance

In incomplete dominance, the heterozygote has an intermediate phenotype that is distinct from either
homozygote. Neither allele is fully dominant.

**Classic example:** Snapdragon flower colour.

- RR = red
- rr = white
- Rr = pink (intermediate)

Cross: Rr x Rr yields 1 RR (red) : 2 Rr (pink) : 1 rr (white).

The phenotypic ratio (1:2:1) matches the genotypic ratio directly. This is a hallmark of incomplete
dominance.

### Worked Example: Incomplete Dominance vs Codominance

A red-flowered snapdragon (RR) is crossed with a white-flowered snapdragon (rr). The F1 offspring are self-pollinated.

(a) State the genotype and phenotype of the F1 generation.

(b) What phenotypic ratio is expected in the F2 generation?

(c) If a roan shorthorn cow (RW) is crossed with a white cow (WW), what phenotypic ratio is expected? Explain why this is different from the snapdragon cross.

<details>
<summary>Solution</summary>

(a) The F1 genotype is Rr. Since this is incomplete dominance, the phenotype is pink (intermediate between red and white).

(b) F2 cross: Rr x Rr. The phenotypic ratio is 1 red (RR) : 2 pink (Rr) : 1 white (rr). This 1:2:1 ratio matches the genotypic ratio because the heterozygote has a distinct intermediate phenotype.

(c) RW x WW produces: 1 roan (RW) : 1 white (WW). This is a 1:1 ratio, NOT 1:2:1. The difference is that coat colour in shorthorn cattle is **codominance**, not incomplete dominance. In codominance, both alleles are fully expressed simultaneously -- roan cattle have both red and white hairs. In incomplete dominance (snapdragons), the heterozygote is a blend (pink, a genuinely intermediate colour).

</details>

### Codominance

In codominance, both alleles are fully expressed simultaneously in the heterozygote. Neither allele
masks the other.

**Classic example:** Human ABO blood groups and coat colour in shorthorn cattle.

- **AB blood group:** Both A and B antigens are present on the red blood cell surface. The genotype
  is I^A I^B, and the phenotype is blood group AB. This is codominance.
- **Shorthorn cattle:** Red (RR) x White (WW) = Roan (RW), where both red and white hairs are
  present in the coat.

**Key distinction between incomplete dominance and codominance:**

| Feature                | Incomplete Dominance                        | Codominance                                        |
| ---------------------- | ------------------------------------------- | -------------------------------------------------- |
| Heterozygote phenotype | Intermediate (blend) of the two homozygotes | Both phenotypes are expressed simultaneously       |
| Molecular mechanism    | One functional allele produces less product | Both alleles produce functional, distinct products |
| Example                | Pink snapdragons (Rr from red x white)      | AB blood group (I^A I^B), roan cattle (RW)         |
| Biochemical basis      | Reduced gene product dosage                 | Two different gene products are both detectable    |

### Multiple Alleles

A gene may have more than two alleles in the population, although any individual can only carry two
alleles (one on each homologous chromosome).

**Human ABO blood groups:**

Three alleles exist at the I locus:

| Allele | Type          | Antigen on RBC | Antibody in Plasma |
| ------ | ------------- | -------------- | ------------------ |
| I^A    | Dominant to i | A              | Anti-B             |
| I^B    | Dominant to i | B              | Anti-A             |
| i      | Recessive     | None           | Anti-A and Anti-B  |

**Six possible genotypes and four phenotypes:**

| Genotype | Phenotype | Antigens | Antibodies     |
| -------- | --------- | -------- | -------------- |
| I^A I^A  | A         | A        | Anti-B         |
| I^A i    | A         | A        | Anti-B         |
| I^B I^B  | B         | B        | Anti-A         |
| I^B i    | B         | B        | Anti-A         |
| I^A I^B  | AB        | A and B  | None           |
| ii       | O         | None     | Anti-A, Anti-B |

:::warning
A common error is writing "three alleles" when the question asks about an individual's
genotype. An individual always carries exactly two alleles. The phrase "multiple alleles" refers to
the gene pool of the entire population, not to a single organism.
:::

**Worked calculation:**

A woman with blood group A (whose father was blood group O) has a child with a man who is blood
group B (whose mother was blood group O). What are the possible blood groups of their child?

The woman is I^A i (her father was ii, so she must carry i). The man is I^B i (his mother was ii, so
he must carry i).

Cross: I^A i x I^B i

Gametes from woman: I^A, i

Gametes from man: I^B, i

|         | **I^B** | **i** |
| ------- | ------- | ----- |
| **I^A** | I^A I^B | I^A i |
| **i**   | I^B i   | ii    |

Possible genotypes: I^A I^B (AB), I^A i (A), I^B i (B), ii (O)

Possible blood groups of child: A, B, AB, or O (all four are possible).

### Worked Example: Epistasis Ratio Identification

In a plant, gene A controls flower colour (A = pigment produced, a = no pigment) and gene B controls petal shape (B = normal petals, b = narrow petals). A plant with genotype AaBb is self-pollinated, and the following phenotypic ratio is observed: 9 coloured, normal : 3 coloured, narrow : 4 white. Identify the type of epistasis and explain.

<details>
<summary>Solution</summary>

This is **recessive epistasis** (9:3:4 ratio).

The gene A locus is epistatic over the B locus. When the plant is aa (homozygous recessive for A), no pigment is produced regardless of the B/b genotype, so the flowers are white. This masks the expression of petal shape.

The 9:3:4 ratio breaks down as:
- 9 A_B_ = coloured, normal petals
- 3 A_bb = coloured, narrow petals
- 4 aa\_\_ = white (includes 1 aaBB, 2 aaBb, 1 aabb)

The 4 white category combines all genotypes that are aa, regardless of the B/b genotype. The aa genotype is epistatic because it masks the effect of the B locus.

</details>

---

## Sex-Linked Inheritance

### Sex Determination in Humans

Humans have 23 pairs of chromosomes: 22 pairs of autosomes and 1 pair of sex chromosomes.

- Females: XX (homogametic)
- Males: XY (heterogametic)

The sex of the offspring is determined by the sperm: if an X-bearing sperm fertilises the egg, the
result is XX (female); if a Y-bearing sperm fertilises the egg, the result is XY (male).

$$P(\mathrm{female}) = \frac{1}{2}, \quad P(\mathrm{male}) = \frac{1}{2}$$

### X-Linked Inheritance

Genes located on the X chromosome exhibit X-linked inheritance. Males have only one X chromosome, so
a single recessive allele on the X chromosome will be expressed in the male phenotype (hemizygous
condition). Females need two copies of the recessive allele to express the trait.

**Notation:** X-linked alleles are written with the chromosome letter as a superscript.

- X^H = normal allele (dominant)
- X^h = allele for haemophilia (recessive)
- X^N = normal allele (dominant)
- X^n = allele for colour blindness (recessive)

### Haemophilia

Haemophilia is an X-linked recessive bleeding disorder caused by a deficiency in clotting factor
VIII (haemophilia A) or factor IX (haemophilia B). Affected individuals have prolonged bleeding
after injury because their blood cannot clot properly.

**Cross:** Carrier female (X^H X^h) x Normal male (X^H Y)

|         | **X^H** | **Y** |
| ------- | ------- | ----- |
| **X^H** | X^H X^H | X^H Y |
| **X^h** | X^H X^h | X^h Y |

**Offspring:** 1 normal female (X^H X^H) : 1 carrier female (X^H X^h) : 1 normal male (X^H Y) : 1
affected male (X^h Y)

Key observations:

- Affected males inherit the allele from their carrier mother (never from their father, since
  fathers pass Y to sons)
- Affected males pass the allele to ALL their daughters (who become carriers) but to NONE of their
  sons
- Females are rarely affected (would require an affected father and a carrier mother)

### Red-Green Colour Blindness

Red-green colour blindness is another X-linked recessive condition. Affected individuals cannot
distinguish between red and green wavelengths of light. The gene codes for opsins (photopigments) in
the cone cells of the retina.

The inheritance pattern is identical to haemophilia. The cross diagrams use X^N (normal) and X^n
(colour blind).

### Why X-Linked Recessive Disorders Are More Common in Males

| Factor                                       | Explanation                                                                                           |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Hemizygosity                                 | Males have only one X chromosome; a single recessive allele is sufficient to produce the phenotype    |
| Females are protected by the second X allele | A female with one recessive allele is a carrier but is phenotypically normal (heterozygous advantage) |
| Fathers do not pass X-linked alleles to sons | X-linked alleles cannot pass directly from father to son (father gives Y to sons)                     |

**Probability calculations for X-linked traits:**

A carrier woman (X^N X^n) marries a normal man (X^N Y).

Probability that their son is colour blind: 1/2 (the son receives X^n from the mother with
probability 1/2).

Probability that their daughter is colour blind: 0 (the daughter would need to receive X^n from both
parents, but the father only has X^N).

Probability that their daughter is a carrier: 1/2.

---

## Genetic Diagrams and Punnett Squares

### Conventions

When constructing genetic diagrams for DSE examinations, follow these conventions:

1. Write the parental phenotypes at the top
2. Write the parental genotypes below the phenotypes
3. Show the gametes produced by each parent (in a circle or brackets)
4. Use a Punnett square to show all possible offspring genotypes
5. State the genotypic ratio and the phenotypic ratio
6. Answer the specific question asked

### Steps for Solving Any Genetics Problem

1. Identify whether one or two traits are involved (monohybrid or dihybrid)
2. Assign symbols to alleles (use the first letter of the dominant phenotype, capital for dominant,
   lowercase for recessive)
3. Determine the genotypes of the parents from the information given
4. Work out the gametes each parent can produce
5. Construct a Punnett square or use the forked-line method
6. Read off the genotypic and phenotypic ratios
7. Answer the question using the ratios

:::info
info
standard Mendelian ratios. Use a Punnett square when the genes are linked or when you need to show
all individual genotypes. For X-linked crosses, always use a Punnett square since the gamete
combinations differ between males and females.
:::

---

## Gene Interaction (Epistasis)

### Definition

Epistasis occurs when the expression of one gene is modified or masked by the expression of one or
more other genes. The gene that masks is the **epistatic gene**; the gene that is masked is the
**hypostatic gene**.

Epistasis differs from dominance. Dominance is an interaction between alleles at the **same** locus.
Epistasis is an interaction between alleles at **different** loci.

### Types of Epistasis

**1. Recessive epistasis (9:3:4 ratio):**

The recessive allele of the epistatic gene (when homozygous) masks the expression of the hypostatic
gene.

**Example:** Coat colour in Labrador retrievers.

- Gene B: B (black) is dominant over b (brown)
- Gene E: E allows pigment deposition; ee prevents any pigment deposition (epistatic)

| Genotype | Phenotype          |
| -------- | ------------------ |
| B*E*     | Black              |
| bbE\_    | Brown              |
| \_ \_ ee | Yellow (epistatic) |

Cross: BbEe x BbEe yields a 9:3:4 phenotypic ratio (9 black : 3 brown : 4 yellow).

The 4 includes 1 BBee, 2 Bbee, 1 bbee (all are yellow because ee is epistatic and masks the B/b
locus).

**2. Dominant epistasis (12:3:1 ratio):**

A dominant allele of the epistatic gene masks the hypostatic gene.

**Example:** Fruit colour in summer squash.

- Gene W: W (white) is epistatic; when present, fruit is white regardless of Y/y
- Gene Y: Y (yellow) is dominant over y (green) -- only expressed when ww

| Genotype  | Phenotype |
| --------- | --------- |
| W\_ \_ \_ | White     |
| wwY\_     | Yellow    |
| wwyy      | Green     |

Cross: WwYy x WwYy yields a 12:3:1 ratio (12 white : 3 yellow : 1 green).

**3. Complementary gene action (9:7 ratio):**

Two genes work together to produce a trait. A dominant allele of each gene is required. If either
gene is homozygous recessive, the trait is not expressed.

**Example:** Flower colour in sweet peas.

- Gene C and gene P: both C* and P* are required for purple flowers
- cc or pp results in white flowers

Cross: CcPp x CcPp yields 9 purple (C*P*) : 7 white (3 C*pp + 3 ccP* + 1 ccpp).

**4. Duplicate gene action (15:1 ratio):**

Two dominant alleles at either gene produce the same phenotype. Only the double recessive shows the
alternate phenotype.

**Example:** Seed shape in shepherd's purse.

- Both A* and B* produce triangular seeds; aabb produces oval seeds

Cross: AaBb x AaBb yields 15 triangular : 1 oval.

### Summary of Epistatic Ratios

| Type                | Ratio   | Description                                                           |
| ------------------- | ------- | --------------------------------------------------------------------- |
| Standard dihybrid   | 9:3:3:1 | No epistasis; independent assortment                                  |
| Recessive epistasis | 9:3:4   | Homozygous recessive at one locus masks the other                     |
| Dominant epistasis  | 12:3:1  | Dominant allele at one locus masks the other                          |
| Complementary       | 9:7     | Both dominant alleles required for phenotype expression               |
| Duplicate           | 15:1    | Either dominant allele sufficient; only double recessive is different |

---

## Chromosome Mutations

Chromosome mutations involve changes to the structure or number of whole chromosomes. These are
distinct from gene mutations, which affect individual genes.

### Structural Changes

**1. Deletion:**

Loss of a segment of a chromosome. The deleted segment may contain one or more genes.

- Consequences: loss of genetic material; often lethal if the deletion is large; heterozygous
  deletions can cause disorders (e.g., Cri du chat syndrome -- deletion on chromosome 5)
- Mechanism: breakage of a chromosome during meiosis; the fragment without a centromere is lost

**2. Duplication:**

A segment of a chromosome is repeated. The extra copy may be adjacent (tandem duplication) or
elsewhere.

- Consequences: gene dosage effects; can alter phenotype if the duplicated gene is dosage-sensitive
- Mechanism: unequal crossing over between misaligned homologous chromosomes during meiosis

**3. Inversion:**

A segment of a chromosome is reversed end-to-end. The genes are present but in the wrong order.

- **Paracentric inversion:** The inversion does not include the centromere.
- **Pericentric inversion:** The inversion includes the centromere.
- Consequences: may cause problems during meiosis if crossing over occurs within the inverted region
  (produces abnormal gametes)
- The inversion carrier is phenotypically normal (no genetic material is lost)

**4. Translocation:**

A segment of one chromosome breaks off and attaches to a non-homologous chromosome.

- **Reciprocal translocation:** Two non-homologous chromosomes exchange segments. No genetic
  material is lost overall, but the arrangement is altered.
- **Robertsonian translocation:** The long arms of two acrocentric chromosomes fuse at the
  centromere. The short arms are lost. This is the most common form of chromosomal rearrangement in
  humans and is involved in some cases of Down syndrome (translocation trisomy 21).
- Consequences: carriers are phenotypically normal but may produce unbalanced gametes, leading to
  recurrent miscarriages or offspring with chromosomal disorders

### Numerical Changes

**Aneuploidy:** Gain or loss of individual chromosomes (e.g., trisomy 21 -- Down syndrome, having
three copies of chromosome 21).

**Polyploidy:** Having extra complete sets of chromosomes (e.g., 3n, 4n). Common in plants, rare and
usually lethal in humans.

| Disorder             | Type       | Chromosomal Change                    | Key Features                                                 |
| -------------------- | ---------- | ------------------------------------- | ------------------------------------------------------------ |
| Down syndrome        | Trisomy 21 | Extra copy of chromosome 21           | Intellectual disability, flat facial profile, heart defects  |
| Turner syndrome      | Monosomy X | XO (only one X chromosome)            | Female, short stature, sterile, no puberty without treatment |
| Klinefelter syndrome | XXY        | Extra X chromosome in male            | Male, tall, sterile, reduced testosterone, gynaecomastia     |
| Cri du chat syndrome | Deletion   | Deletion on short arm of chromosome 5 | High-pitched cry, intellectual disability, microcephaly      |

---

## Gene Mutations

### Types of Gene Mutations

**1. Point mutations (substitution):**

A single nucleotide base is replaced by another.

- **Silent mutation:** The new codon codes for the same amino acid (due to the degeneracy of the
  genetic code). No change to the protein.
- **Missense mutation:** The new codon codes for a different amino acid. The effect depends on the
  chemical properties of the new amino acid (conservative vs non-conservative substitution).
- **Nonsense mutation:** The new codon is a stop codon (UAA, UAG, UGA). Translation terminates
  prematurely, producing a truncated (and usually non-functional) protein.

**2. Frameshift mutations:**

Insertion or deletion of one or more nucleotides that is NOT a multiple of three. This shifts the
reading frame of all codons downstream of the mutation, typically producing a completely
non-functional protein.

- **Insertion:** One or more nucleotides are added.
- **Deletion:** One or more nucleotides are removed.

**3. Large-scale mutations:**

- Gene duplication: entire gene is duplicated
- Expansion of repeating triplets: e.g., CGG repeat expansion in fragile X syndrome

### Effects of Mutations

| Effect                | Description                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| Neutral               | No effect on the organism's fitness (silent mutations, mutations in non-coding regions)                 |
| Harmful (deleterious) | Reduce the organism's fitness (most mutations fall into this category)                                  |
| Beneficial            | Increase the organism's fitness and may be selected for (rare, but provides raw material for evolution) |

### Mutation Rate

Spontaneous mutation rates in humans are approximately $1 \times 10^{-8}$ to $1 \times 10^{-6}$ per
gene per generation. Mutations can be caused by:

- **Spontaneous:** Errors during DNA replication; spontaneous base changes (e.g., deamination of
  cytosine to uracil)
- **Induced:** Exposure to mutagens -- UV radiation, ionising radiation (X-rays, gamma rays),
  chemical mutagens (e.g., mustard gas, nitrous acid, benzopyrene in tobacco smoke)

---

## The Human Genome Project

### Overview

The Human Genome Project (HGP) was an international scientific research project (1990-2003) that
mapped and sequenced the entire human genome. The project determined the sequence of approximately 3
billion base pairs of DNA and identified approximately 20,000-25,000 protein-coding genes.

### Key Findings

- The human genome contains approximately 3.2 billion base pairs
- Only approximately 1.5% of the genome codes for proteins
- Approximately 50% of the genome consists of repetitive sequences (transposable elements, satellite
  DNA)
- Humans share approximately 99.9% of their DNA sequence with each other
- The genetic variation between any two humans is approximately 0.1% (about 3 million base pairs)

### Applications

| Application          | Description                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- |
| Medicine             | Identification of disease-causing genes; development of targeted therapies; pharmacogenomics |
| Forensic science     | DNA fingerprinting; identification of victims and suspects                                   |
| Genetic screening    | Prenatal diagnosis; carrier testing; pre-symptomatic testing for inherited disorders         |
| Gene therapy         | Correcting defective genes to treat genetic diseases                                         |
| Evolutionary biology | Comparing human genome with other species to understand evolutionary relationships           |
| Agriculture          | Genomic selection in crop and livestock breeding                                             |

### Pharmacogenomics

The study of how an individual's genetic makeup affects their response to drugs. This allows for
personalised medicine -- tailoring drug choice and dosage to an individual's genotype to maximise
efficacy and minimise adverse effects.

---

## Genetic Engineering Techniques

### Recombinant DNA Technology

Recombinant DNA is DNA formed by combining DNA sequences from two different organisms. The basic
process:

**1. Isolation of the gene of interest:**

The target gene is identified and extracted from the donor organism's DNA. For eukaryotic genes,
mRNA is often used as the template, and reverse transcriptase produces complementary DNA (cDNA).
This avoids the intron problem (bacteria cannot splice out introns).

**2. Cutting with restriction enzymes:**

Restriction endonucleases (restriction enzymes) are enzymes that cut DNA at specific recognition
sequences (palindromic sequences, typically 4-8 base pairs long).

- **EcoRI** recognises GAATTC and cuts between G and A
- **BamHI** recognises GGATCC and cuts between G and G
- Produces "sticky ends" (single-stranded overhangs) or "blunt ends"

**3. Ligation with DNA ligase:**

DNA ligase catalyses the formation of phosphodiester bonds, sealing the gene into the vector
(carrier) DNA. The vector is typically a plasmid that has been cut with the same restriction enzyme,
producing complementary sticky ends.

**4. Transformation:**

The recombinant DNA is introduced into host cells (typically _E. coli_ bacteria). Methods include:

- Heat shock (calcium chloride treatment)
- Electroporation (electric pulse)
- Microinjection

**5. Selection and expression:**

Transformed cells are selected using marker genes (e.g., antibiotic resistance). Successfully
transformed cells are cultured and the desired protein product is harvested.

### Polymerase Chain Reaction (PCR)

PCR amplifies a specific segment of DNA exponentially.

**Components:**

| Component        | Function                                                                         |
| ---------------- | -------------------------------------------------------------------------------- |
| DNA template     | The DNA to be copied                                                             |
| Taq polymerase   | Heat-stable DNA polymerase from _Thermus aquaticus_; synthesises new DNA strands |
| Primers          | Short single-stranded DNA sequences complementary to regions flanking the target |
| Free nucleotides | dATP, dTTP, dCTP, dGTP -- building blocks                                        |
| Thermal cycler   | Machine that cycles through the required temperatures                            |

**PCR cycle (repeated 25-35 times):**

1. **Denaturation (94-96 degrees C):** Hydrogen bonds break; double-stranded DNA separates into two
   single strands.
2. **Annealing (50-65 degrees C):** Primers bind to complementary sequences on the single-stranded
   DNA.
3. **Extension (72 degrees C):** Taq polymerase adds nucleotides to the 3-prime end of each primer,
   synthesising new DNA strands.

$$\mathrm{After } n \mathrm{ cycles: } N = N_0 \times 2^n$$

### Gel Electrophoresis

Gel electrophoresis separates DNA fragments by size.

**Process:**

1. DNA samples are loaded into wells in an agarose gel
2. An electric current is applied across the gel
3. DNA fragments are negatively charged (phosphate backbone) and move towards the positive electrode
4. Smaller fragments move faster and travel further; larger fragments move more slowly
5. The DNA is visualised using a fluorescent dye (e.g., ethidium bromide) that binds to DNA and
   fluoresces under UV light

**Applications:** DNA profiling, analysis of PCR products, checking the results of restriction
digests.

### DNA Fingerprinting (DNA Profiling)

DNA fingerprinting identifies individuals based on their unique DNA pattern.

**Principle:** Non-coding regions of DNA contain **Short Tandem Repeats (STRs)** -- short sequences
(2-6 base pairs) repeated a variable number of times. The number of repeats at each locus varies
between individuals.

**Process:**

1. Extract DNA from a sample (blood, saliva, hair root)
2. Amplify specific STR loci using PCR with primers designed for each locus
3. Separate the amplified fragments by gel electrophoresis (or capillary electrophoresis)
4. Compare the pattern of bands (the "fingerprint") between samples

**Applications:**

- Forensic science (matching crime scene DNA to suspects)
- Paternity and maternity testing
- Identifying victims of disasters
- Immigration cases (proving family relationships)
- Establishing evolutionary relationships between species

**Reliability:** The probability of two unrelated individuals having the same DNA profile at 13 or
more STR loci is less than 1 in a billion. This makes DNA fingerprinting extremely reliable for
identification.

---

## Genetically Modified Organisms (GMOs)

### Definition

A genetically modified organism (GMO) is an organism whose genome has been altered using genetic
engineering techniques. This differs from conventional selective breeding because specific genes can
be inserted, deleted, or modified precisely.

### Examples of GMOs

| GMO                          | Modification                                     | Purpose                                                    |
| ---------------------------- | ------------------------------------------------ | ---------------------------------------------------------- |
| Bt cotton                    | Contains _Bacillus thuringiensis_ toxin gene     | Produces insecticidal protein; reduces pesticide use       |
| Golden rice                  | Contains beta-carotene synthesis genes           | Produces vitamin A precursor; combats vitamin A deficiency |
| Herbicide-resistant soybeans | Resistant to glyphosate herbicide                | Farmers can spray herbicide without harming the crop       |
| GM salmon (AquAdvantage)     | Contains growth hormone gene from Chinook salmon | Grows faster than conventional salmon                      |
| Insulin-producing bacteria   | Contains human insulin gene                      | Produces human insulin for medical use                     |

### Benefits of GMOs

1. **Increased crop yield:** Pest-resistant and disease-resistant varieties reduce losses
2. **Reduced pesticide use:** Bt crops produce their own insecticide
3. **Enhanced nutritional content:** Golden rice addresses vitamin A deficiency in developing
   countries
4. **Tolerance to abiotic stress:** Drought-resistant, salt-tolerant varieties
5. **Pharmaceutical production:** Bacteria and plants engineered to produce vaccines, antibodies,
   and other drugs
6. **Environmental benefits:** Reduced fuel use from fewer pesticide applications; conservation
   tillage with herbicide-resistant crops reduces soil erosion

### Risks and Concerns

1. **Gene flow:** Transferred genes may escape to wild relatives through cross-pollination,
   potentially creating "superweeds" (herbicide-resistant weeds)
2. **Impact on non-target organisms:** Bt toxin may affect beneficial insects (though evidence
   suggests it is specific to certain pest groups)
3. **Development of resistance:** Pests may evolve resistance to Bt toxin, similar to antibiotic
   resistance
4. **Biodiversity reduction:** Large-scale monocultures of GM varieties reduce genetic diversity
5. **Human health concerns:** Potential allergenicity of novel proteins; long-term effects not fully
   known (though extensive testing is required before approval)
6. **Corporate control:** Patents on GM seeds create dependency on biotechnology companies; farmers
   cannot legally save seeds
7. **Ethical concerns:** Some consider genetic modification of organisms to be "unnatural"

### Regulation

Different countries have different approaches to GMO regulation:

- **European Union:** Highly restrictive; mandatory labelling; precautionary principle
- **United States:** Generally permissive; voluntary labelling (changing); substantial equivalence
  standard
- **Hong Kong:** No specific GMO labelling requirements (but pre-packaged food must be accurately
  described)

---

## Gene Therapy

### Definition

Gene therapy is the treatment of genetic disorders by introducing, removing, or altering genetic
material within a patient's cells.

### Types of Gene Therapy

**1. Somatic gene therapy:**

- Targets body cells (somatic cells)
- Changes are NOT passed to offspring
- The treated individual benefits, but the genetic change is not inherited
- Currently the main approach in clinical trials
- Example: Treating severe combined immunodeficiency (SCID) by introducing a functional copy of the
  defective gene into bone marrow cells

**2. Germline gene therapy:**

- Targets gametes (sperm or egg) or early embryos
- Changes ARE passed to all future generations
- Currently not permitted in most countries due to ethical concerns
- Raises issues of consent (future generations cannot consent), equity, and the possibility of
  "designer babies"

### Methods of Delivery

| Method              | Description                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------ |
| Viral vectors       | Modified viruses (retroviruses, adenoviruses) carry the therapeutic gene into target cells |
| Liposomes           | Fatty spheres that fuse with the cell membrane, delivering DNA into the cell               |
| Naked DNA injection | Direct injection of plasmid DNA into the target tissue                                     |
| Electroporation     | Electric pulse creates temporary pores in the cell membrane for DNA entry                  |

### Challenges and Limitations

1. **Delivery:** Getting the therapeutic gene to the correct cells in sufficient quantity
2. **Immune response:** The body may attack the viral vector or the newly expressed protein
3. **Duration:** The therapeutic effect may be temporary if the modified cells do not persist or
   divide
4. **Off-target effects:** The gene may insert into an unintended location, disrupting normal gene
   function (insertional mutagenesis)
5. **Cost:** Gene therapy treatments are extremely expensive (e.g., Zolgensma for spinal muscular
   atrophy costs approximately USD 2.1 million per treatment)
6. **Ethical concerns:** Germline editing, enhancement vs treatment, access and equity

### Successful Examples

- **Luxturna (2017):** Gene therapy for a form of inherited retinal dystrophy that causes blindness.
  A working copy of the RPE65 gene is delivered to retinal cells using an adeno-associated virus
  vector.
- **Zolgensma (2019):** Gene therapy for spinal muscular atrophy (SMA). A functional copy of the
  SMN1 gene is delivered via an adeno-associated virus.

---

## Common Pitfalls

1. **Confusing incomplete dominance with codominance:** Incomplete dominance produces an
   intermediate phenotype (pink from red and white). Codominance produces a phenotype showing both
   parental traits simultaneously (AB blood group, roan coat). These are fundamentally different
   mechanisms.

2. **Forgetting that males are hemizygous for X-linked genes:** A male has only one X chromosome, so
   he cannot be "heterozygous" or "homozygous" for an X-linked gene. He is either affected or
   normal. This is why X-linked recessive disorders are far more common in males.

3. **Writing that a father passes an X-linked allele to his son:** Fathers pass their X chromosome
   to daughters and their Y chromosome to sons. An X-linked allele cannot pass directly from father
   to son.

4. **Confusing epistatic ratios with Mendelian ratios:** If a dihybrid cross does not produce a
   9:3:3:1 ratio, consider epistasis. The modified ratios (9:3:4, 12:3:1, 9:7, 15:1) each have a
   specific biological explanation. Learn them.

5. **Stating that gene mutations are always harmful:** Most are neutral or harmful, but a small
   fraction are beneficial and provide the raw material for natural selection. "Mutation is always
   bad" is a false statement.

6. **Confusing chromosome mutations with gene mutations:** Chromosome mutations affect whole
   chromosomes or large segments (deletion, duplication, inversion, translocation). Gene mutations
   affect individual nucleotides or small regions (point mutations, frameshifts).

7. **Writing that DNA ligase cuts DNA:** DNA ligase JOINS DNA fragments (seals the sugar-phosphate
   backbone). Restriction enzymes CUT DNA. Students frequently confuse these two enzymes.

8. **Stating that PCR amplifies the entire genome:** PCR amplifies a specific segment of DNA defined
   by the primers. It does not copy the entire genome.

9. **Confusing DNA fingerprinting with whole-genome sequencing:** DNA fingerprinting analyses
   specific STR loci in non-coding regions. It does not sequence the entire genome.

10. **Forgetting that genetic engineering uses cDNA from eukaryotes:** Bacterial cells cannot splice
    out introns from eukaryotic genes. Therefore, the mRNA is extracted and reverse transcriptase
    produces cDNA (which has no introns). Direct insertion of genomic DNA containing introns would
    not produce a functional protein in bacteria.

---

## Problem Set

**Problem 1:** Cystic fibrosis is an autosomal recessive disorder. A couple has a child with cystic fibrosis. Neither parent has the disorder.

(a) What are the genotypes of the parents?

(b) What is the probability that their next child will have cystic fibrosis?

(c) What is the probability that their next child will be a carrier?

If you get this wrong, revise: Mendelian Genetics -- Monohybrid Crosses; Terminology

<details>
<summary>Solution</summary>

(a) Both parents are carriers: Cc. They must each carry one recessive allele (c) because their affected child is cc, and each parent contributed one allele.

(b) Cross: Cc x Cc. Punnett square gives: 1 CC : 2 Cc : 1 cc. P(cc) = 1/4 = 25%.

(c) P(Cc) = 2/4 = 1/2 = 50%.

</details>

**Problem 2:** A woman with normal vision whose father was colour blind marries a man with normal vision. Colour blindness is X-linked recessive.

(a) What is the woman's genotype?

(b) What proportion of their sons will be colour blind?

(c) What proportion of their daughters will be carriers?

If you get this wrong, revise: Sex-Linked Inheritance -- X-Linked Inheritance; Red-Green Colour Blindness

<details>
<summary>Solution</summary>

(a) The woman's father was colour blind (X$^n$Y), so he gave her X$^n$. Her mother could be X$^N$X$^N$ or X$^N$X$^n$. The woman is X$^N$X$^n$ (carrier).

(b) The man is X$^N$Y. Cross: X$^N$X$^n$ x X$^N$Y. Sons receive X from their mother: P(X$^n$Y) = 1/2. So 50% of sons will be colour blind.

(c) Daughters receive X$^N$ from their father. P(X$^N$X$^n$) = 1/2. So 50% of daughters will be carriers.

</details>

**Problem 3:** In pea plants, round seeds (R) are dominant over wrinkled (r), and yellow seeds (Y) are dominant over green (y). Two double heterozygotes (RrYy) are crossed. Use the forked-line method to determine the probability of producing a wrinkled, green offspring.

If you get this wrong, revise: Mendelian Genetics -- Dihybrid Crosses; The Forked-Line Method

<details>
<summary>Solution</summary>

Using the forked-line method:

P(wrinkled) = 1/4 (rr from Rr x Rr)

P(green) = 1/4 (yy from Yy x Yy)

P(wrinkled, green) = 1/4 x 1/4 = 1/16

This is consistent with the 9:3:3:1 dihybrid ratio, where wrinkled green corresponds to the 1/16 category.

</details>

**Problem 4:** In Labrador retrievers, gene B controls coat colour (B = black, b = brown) and gene E controls pigment deposition (E = pigment deposited, e = no pigment). A BbEe x BbEe cross produces a 9:3:4 phenotypic ratio. Explain this ratio and identify the epistatic gene.

If you get this wrong, revise: Gene Interaction (Epistasis) -- Recessive Epistasis

<details>
<summary>Solution</summary>

The 9:3:4 ratio indicates **recessive epistasis**. Gene E is epistatic over gene B.

- 9 B\_E\_ = black (pigment deposited, black colour)
- 3 bbE\_ = brown (pigment deposited, brown colour)
- 4 \_\_ee = yellow (no pigment deposited regardless of B/b genotype)

The 4 yellow includes: 1 BBee, 2 Bbee, 1 bbee. When the genotype is ee (homozygous recessive for E), no pigment is deposited, so the coat is yellow regardless of whether the B/b locus would normally produce black or brown. The E locus is epistatic because ee masks the expression of the B locus.

</details>

**Problem 5:** Describe the steps involved in producing human growth hormone (HGH) in bacteria. Explain why cDNA is used rather than genomic DNA.

If you get this wrong, revise: Genetic Engineering Techniques -- Recombinant DNA Technology

<details>
<summary>Solution</summary>

1. mRNA for HGH is extracted from human pituitary gland cells.
2. Reverse transcriptase produces cDNA from the mRNA (removes introns).
3. The cDNA and a plasmid are both cut with the same restriction enzyme, producing complementary sticky ends.
4. DNA ligase seals the cDNA into the plasmid, creating a recombinant plasmid.
5. The recombinant plasmid is introduced into _E. coli_ by transformation.
6. Transformed bacteria are selected using a marker gene (antibiotic resistance).
7. Bacteria are cultured; they transcribe and translate the HGH gene.

cDNA is used because genomic DNA contains introns. Bacteria lack spliceosomes and cannot remove introns from pre-mRNA. If genomic DNA were inserted, the ribosome would translate intron sequences, producing a non-functional protein.

</details>

**Problem 6:** A forensic scientist has a tiny blood stain. After 30 cycles of PCR starting from 5 DNA molecules, how many DNA molecules will be present? Explain why PCR is necessary before DNA fingerprinting.

If you get this wrong, revise: Genetic Engineering Techniques -- Polymerase Chain Reaction (PCR); DNA Fingerprinting

<details>
<summary>Solution</summary>

After 30 cycles: $N = 5 \times 2^{30} = 5 \times 1{,}073{,}741{,}824 = 5{,}368{,}709{,}120$ DNA molecules.

PCR is necessary because the amount of DNA in a tiny blood stain is far too small for direct analysis. PCR amplifies specific STR loci to produce millions of copies, providing sufficient DNA for gel electrophoresis and comparison. Without PCR, the DNA profile could not be obtained from trace evidence.

</details>

**Problem 7:** Explain the difference between somatic and germline gene therapy. Why is germline gene therapy currently not permitted in most countries?

If you get this wrong, revise: Gene Therapy -- Types of Gene Therapy

<details>
<summary>Solution</summary>

**Somatic gene therapy** targets body cells (somatic cells). Changes are NOT passed to offspring. The treated individual benefits but the genetic change is not inherited. Example: treating SCID by introducing a functional gene into bone marrow cells.

**Germline gene therapy** targets gametes or early embryos. Changes ARE passed to all future generations. It raises ethical concerns about consent (future generations cannot consent), equity (access to enhancement), and the possibility of "designer babies." Currently not permitted in most countries due to these unresolved ethical issues and the risk of off-target effects being inherited.

</details>

**Problem 8:** A man with blood group AB has a child with a woman of blood group O. What are the possible blood groups of their child? Show your working with a Punnett square.

If you get this wrong, revise: Non-Mendelian Inheritance -- Multiple Alleles (ABO Blood Groups)

<details>
<summary>Solution</summary>

The man is I$^A$I$^B$ (genotype AB). The woman is ii (genotype O).

Gametes from man: I$^A$ or I$^B$. Gametes from woman: i only.

|         | **I$^A$** | **I$^B$** |
| ------- | --------- | --------- |
| **i**   | I$^A$i    | I$^B$i    |

Possible genotypes: I$^A$i (blood group A) or I$^B$i (blood group B).

Possible blood groups of the child: A or B. Each has a 50% probability. Blood group AB and O are not possible.

</details>

**Problem 9:** A person has 46 chromosomes in their somatic cells. How many chromosomes and chromatids are present in each cell during (a) prophase of mitosis, (b) metaphase I of meiosis, (c) after meiosis II is complete?

If you get this wrong, revise: Chromosome Mutations -- Numerical Changes; Cell Division (Meiosis)

<details>
<summary>Solution</summary>

(a) **Prophase of mitosis:** 46 chromosomes, 92 chromatids. Each chromosome has been replicated into two sister chromatids joined at the centromere (replication occurs during S phase, before mitosis begins).

(b) **Metaphase I of meiosis:** 46 chromosomes (23 homologous pairs), 92 chromatids. Homologous pairs are aligned at the metaphase plate. Each chromosome still consists of two chromatids.

(c) **After meiosis II:** Each of the four daughter cells has 23 chromosomes, 23 chromatids (single-chromatid chromosomes). Sister chromatids separated during anaphase II, halving the chromosome number.

</details>

**Problem 10:** Explain the difference between a point mutation and a frameshift mutation. Give an example of how each type of mutation can affect a protein.

If you get this wrong, revise: Gene Mutations -- Types of Gene Mutations

<details>
<summary>Solution</summary>

A **point mutation** (substitution) replaces a single nucleotide with another. A missense point mutation changes one codon, potentially replacing one amino acid with another (e.g., sickle cell mutation: GAG to GTG, glutamic acid to valine in haemoglobin).

A **frameshift mutation** is an insertion or deletion of nucleotides that is NOT a multiple of three. This shifts the reading frame of all codons downstream, typically changing every subsequent amino acid and often creating a premature stop codon. The resulting protein is usually completely non-functional (e.g., a 1-bp insertion in the CFTR gene causes cystic fibrosis).

</details>

---

## Gene Regulation

### Why Gene Regulation Matters

Every cell in an organism contains the same DNA (same genes). However, not all genes are expressed in every cell at all times. Gene regulation allows cells to:

- Differentiate into specialised cell types (e.g., muscle cells express muscle proteins; nerve cells express neurotransmitter-related genes)
- Respond to changes in the environment (e.g., producing enzymes only when a substrate is available)
- Maintain homeostasis (e.g., regulating insulin production based on blood glucose levels)
- Progress through the cell cycle in a controlled manner

### Gene Regulation in Prokaryotes: The Lac Operon

The **lac operon** in _E. coli_ is the classic model of gene regulation. It controls the production of enzymes needed to metabolise lactose.

**Components:**

| Component       | Description                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| Structural genes | lacZ (beta-galactosidase, breaks down lactose into glucose and galactose), lacY (permease, transports lactose into the cell), lacA (transacetylase, function less well understood) |
| Promoter        | DNA sequence where RNA polymerase binds to transcribe the structural genes                                         |
| Operator        | DNA sequence between the promoter and structural genes; acts as an on/off switch controlled by a repressor protein  |
| Regulator gene  | lacI gene, located upstream; produces the lac repressor protein                                                   |

**Mechanism of the lac operon:**

**When lactose is ABSENT (repression):**

1. The regulator gene (lacI) is continuously transcribed and translated, producing the lac repressor protein
2. The repressor binds to the operator, physically blocking RNA polymerase from transcribing the structural genes
3. The structural genes (lacZ, lacY, lacA) are NOT transcribed
4. No beta-galactosidase or permease is produced (wasting energy on unnecessary enzymes is avoided)

**When lactose is PRESENT (induction):**

1. Lactose enters the cell (in small amounts via constitutively produced permease)
2. Lactose is converted to **allolactose** (an isomer of lactose) by beta-galactosidase
3. Allolactose acts as an **inducer**: it binds to the repressor protein, changing its shape
4. The repressor can no longer bind to the operator
5. RNA polymerase binds to the promoter and transcribes the structural genes
6. Beta-galactosidase and permease are produced, enabling efficient lactose metabolism

**Positive control by glucose (catabolite repression):**

When both glucose AND lactose are present, _E. coli_ preferentially uses glucose (more efficient energy source). The lac operon is not fully activated because:

1. Low glucose leads to high cAMP (cyclic AMP) levels
2. cAMP binds to the **CAP protein** (catabolite activator protein)
3. The cAMP-CAP complex binds to a site upstream of the promoter, enhancing RNA polymerase binding
4. When glucose is HIGH, cAMP is LOW; the cAMP-CAP complex does not form; the lac operon is transcribed at a low rate even if lactose is present

### Gene Regulation in Eukaryotes

Eukaryotic gene regulation is more complex than prokaryotic regulation, involving multiple levels of control:

| Level of Regulation | Description                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Transcriptional     | Control of whether a gene is transcribed into mRNA (transcription factors, enhancers, silencers, chromatin structure) |
| Post-transcriptional | mRNA processing (splicing, capping, poly-A tail); alternative splicing produces different proteins from the same gene |
| Translational       | Control of whether mRNA is translated into protein (microRNAs, RNA interference, initiation factors)                |
| Post-translational  | Modification of proteins after synthesis (phosphorylation, glycosylation, proteolytic cleavage, ubiquitin-mediated degradation) |

**Transcription factors:**

- Proteins that bind to specific DNA sequences (promoters, enhancers) and regulate transcription
- **Activators:** Enhance transcription by helping RNA polymerase bind to the promoter
- **Repressors:** Inhibit transcription by blocking RNA polymerase binding or recruiting chromatin-modifying enzymes
- Hormones can act as transcription factors: steroid hormones (e.g., oestrogen, testosterone) enter the cell, bind to intracellular receptors, and the hormone-receptor complex acts as a transcription factor, binding to specific DNA sequences and regulating gene expression

### Epigenetics

Epigenetics refers to heritable changes in gene expression that do NOT involve changes to the DNA sequence itself.

| Epigenetic Mechanism | Description                                                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| DNA methylation      | Addition of methyl groups (-CH$_3$) to cytosine bases, typically at CpG islands near gene promoters; usually associated with gene silencing |
| Histone modification | Acetylation, methylation, or phosphorylation of histone proteins; affects how tightly DNA is wound around histones (chromatin structure) |
| Non-coding RNA       | MicroRNAs (miRNAs) and small interfering RNAs (siRNAs) that bind to mRNA and inhibit translation or promote degradation                       |

:::info
Epigenetic changes are REVERSIBLE (unlike mutations) and can be influenced by environmental factors (diet, stress, toxins). This has important implications for understanding how environmental exposures affect gene expression and disease risk across generations. However, epigenetic changes should NOT be confused with Lamarckian inheritance of acquired characteristics -- the DNA sequence itself is unchanged.
:::

---

## Chromosome Mutations

### Changes in Chromosome Number

| Type                  | Description                                                                                                      | Example                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Polyploidy            | Having extra complete sets of chromosomes (3n, 4n, etc.)                                                         | Common in plants (wheat is hexaploid, 6n)      |
| Aneuploidy            | Having one extra or one missing chromosome                                                                        | Down syndrome (trisomy 21, 47 chromosomes)     |
| Trisomy               | Having three copies of a chromosome instead of two                                                                | Trisomy 21 (Down syndrome), Trisomy 18 (Edwards syndrome) |
| Monosomy              | Having only one copy of a chromosome instead of two                                                              | Monosomy X (Turner syndrome, 45 chromosomes)   |

**Causes of aneuploidy -- non-disjunction:**

Non-disjunction is the failure of homologous chromosomes (meiosis I) or sister chromatids (meiosis II) to separate properly during meiosis. This produces gametes with an abnormal number of chromosomes.

If a gamete with an extra chromosome (n+1) is fertilised by a normal gamete (n), the resulting zygote has 2n+1 chromosomes (trisomy). If a gamete missing a chromosome (n-1) is fertilised, the zygote has 2n-1 chromosomes (monosomy).

### Changes in Chromosome Structure

| Type             | Description                                                                                           | Consequence                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Deletion         | A segment of a chromosome is lost                                                                    | Genes on the deleted segment are lost; often lethal   |
| Duplication      | A segment is repeated                                                                                | Extra copies of genes; may affect gene dosage          |
| Inversion        | A segment is reversed (flipped end-to-end)                                                           | Genes are present but in wrong order; may affect meiosis |
| Translocation    | A segment breaks off and attaches to a non-homologous chromosome                                      | Can create fusion genes; e.g., Philadelphia chromosome in CML |

---

## Additional Problem Set

**Problem 11:** Explain how the lac operon in _E. coli_ is regulated when (a) only glucose is present in the medium, (b) only lactose is present, and (c) both glucose and lactose are present.

If you get this wrong, revise: Gene Regulation -- Gene Regulation in Prokaryotes: The Lac Operon

<details>
<summary>Solution</summary>

(a) **Only glucose present:** The lac repressor (produced by lacI) binds to the operator, blocking transcription of lacZ, lacY, and lacA. Additionally, high glucose means low cAMP, so the cAMP-CAP complex does not form, providing no positive stimulation. The lac operon is OFF. _E. coli_ uses glucose directly.

(b) **Only lactose present:** Lactose enters the cell (via low basal permease) and is converted to allolactose. Allolactose binds to the repressor, causing it to detach from the operator. Additionally, low glucose means high cAMP; the cAMP-CAP complex binds upstream of the promoter, enhancing RNA polymerase binding. The lac operon is fully ON. _E. coli_ produces beta-galactosidase and permease to metabolise lactose.

(c) **Both glucose and lactose present:** Lactose/allolactose inactivates the repressor (operator is unblocked), but high glucose means low cAMP, so the cAMP-CAP complex does not form. The lac operon is transcribed at a LOW rate (not fully activated). _E. coli_ preferentially uses glucose and only slowly metabolises lactose. Once glucose is depleted, cAMP levels rise, cAMP-CAP forms, and the lac operon becomes fully active.

</details>

**Problem 12:** A couple has a child with Down syndrome (trisomy 21). Explain the chromosomal event that most likely caused this condition. Why does the risk of Down syndrome increase with maternal age?

If you get this wrong, revise: Chromosome Mutations -- Changes in Chromosome Number

<details>
<summary>Solution</summary>

Down syndrome is most commonly caused by **non-disjunction** during meiosis. Non-disjunction is the failure of homologous chromosome 21 to separate during anaphase I of meiosis (or the failure of sister chromatids of chromosome 21 to separate during anaphase II). This produces an egg (or sperm) with two copies of chromosome 21 instead of one. When this gamete fuses with a normal gamete (carrying one copy of chromosome 21), the resulting zygote has three copies of chromosome 21 (trisomy 21), giving a total of 47 chromosomes.

The risk increases with maternal age because:

- Oocytes begin meiosis during foetal development and arrest at prophase I for decades until ovulation
- The longer an oocyte remains arrested, the greater the chance that cohesin proteins (which hold homologous chromosomes together) deteriorate
- Deteriorated cohesin may fail to hold homologous chromosomes together properly, increasing the risk of non-disjunction during the first meiotic division
- Additionally, accumulated damage to the meiotic machinery over time may contribute

The risk is approximately 1 in 1,500 at age 20, 1 in 350 at age 35, and approximately 1 in 100 at age 40.

</details>

**Problem 13:** Compare the structure and function of mRNA, tRNA, and rRNA. Explain why all three types of RNA are necessary for protein synthesis.

If you get this wrong, revise: Protein Synthesis; Gene Regulation

<details>
<summary>Solution</summary>

| Type  | Structure                                                             | Function                                                                                     |
| ----- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| mRNA  | Single-stranded; carries a copy of the genetic code from DNA; has a 5' cap and 3' poly-A tail | Carries the genetic information from the nucleus to the ribosome; determines the amino acid sequence of the protein |
| tRNA  | Cloverleaf shape in 2D; has an anticodon loop and an amino acid attachment site (3' end) | Carries specific amino acids to the ribosome; anticodon base-pairs with the codon on the mRNA, ensuring the correct amino acid is inserted |
| rRNA  | Single-stranded with folded regions; combined with proteins to form ribosomes | Forms the structural and catalytic core of the ribosome; catalyses peptide bond formation between amino acids |

All three are necessary because: mRNA provides the template (the "message"), tRNA brings the correct building blocks (amino acids) based on the codon-anticodon matching, and rRNA forms the ribosome (the "factory") where the mRNA is read and amino acids are linked together. Without any one of these, protein synthesis cannot occur.

</details>

---

:::tip
Diagnostic Test
Ready to test your understanding of **Genetics**? The [diagnostic test](/docs/dse/Biology/diagnostics/diag-genetics) contains the hardest questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Genetics with other biology topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/dse/Biology/diagnostics/diagnostic-guide) for instructions on self-marking and building a personal test matrix.

---

## Genetic Diseases

### Autosomal Dominant Disorders

| Disorder              | Gene / Chromosome        | Description                                                                                                               | Inheritance Pattern                   |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Huntington's disease   | HTT gene on chromosome 4 | Progressive neurodegenerative disorder; caused by expanded CAG trinucleotide repeat (codes for glutamine); symptoms typically appear after age 35 (chorea, dementia, personality changes); lethal                       | Autosomal dominant; 50% chance of inheriting if one parent affected; homozygous dominant is rare (often more severe, earlier onset) |
| Marfan syndrome        | FBN1 gene on chromosome 15 | Defect in fibrillin-1 protein (connective tissue); tall stature, long limbs, dislocated eye lenses, aortic aneurysm                           | Autosomal dominant                     |
| Achondroplasia         | FGFR3 gene on chromosome 4 | Most common form of dwarfism; mutation in fibroblast growth factor receptor 3 causes impaired cartilage formation; short limbs, normal trunk             | Autosomal dominant; 75% of cases are new mutations (not inherited) |
| Familial hypercholesterolaemia | LDLR gene on chromosome 19 | Defective or absent LDL receptors; high blood cholesterol from birth; increased risk of early heart disease              | Autosomal dominant; codominant (heterozygotes have ~2x normal cholesterol; homozygotes have ~4x) |

### Autosomal Recessive Disorders

| Disorder              | Gene / Chromosome        | Description                                                                                                               | Carrier Frequency                    |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Cystic fibrosis         | CFTR gene on chromosome 7 | Defective chloride ion channel; thick, sticky mucus in lungs, pancreas, and digestive system; recurrent lung infections; pancreatic insufficiency; shortened life expectancy (~40-50 years with treatment) | ~1 in 25 in Caucasian populations |
| Sickle cell anaemia     | HBB gene on chromosome 11 | Mutation in beta-globin gene (GAG $\rightarrow$ GTG, Glu $\rightarrow$ Val at position 6); produces abnormal haemoglobin (HbS); RBCs become sickle-shaped under low oxygen; block capillaries; pain crises, organ damage, anaemia | ~1 in 10 in African populations |
| Phenylketonuria (PKU)   | PAH gene on chromosome 12 | Deficiency of phenylalanine hydroxylase; cannot convert phenylalanine to tyrosine; phenylalanine accumulates, causing brain damage and intellectual disability if untreated; treated with low-phenylalanine diet from birth | ~1 in 50 in Caucasian populations  |
| Tay-Sachs disease       | HEXA gene on chromosome 15 | Deficiency of hexosaminidase A; lipid (GM2 ganglioside) accumulates in nerve cells; progressive neurological deterioration; death usually by age 4-5 | ~1 in 27 in Ashkenazi Jewish populations |
| Albinism               | Various genes (TYR, OCA2) | Deficiency of melanin production; lack of pigment in skin, hair, and eyes; vision problems (photophobia, nystagmus); increased risk of skin cancer | Varies by population                |

### Sex-Linked Disorders

| Disorder              | Gene / Chromosome        | Description                                                                                                               | Affected Sex                          |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Haemophilia A           | F8 gene on X chromosome   | Deficiency of clotting factor VIII; blood does not clot properly; prolonged bleeding after injury; spontaneous internal bleeding into joints (haemarthrosis) | Primarily males (X$^h$Y); females rarely affected (need X$^h$X$^h$) |
| Red-green colour blindness | Opsin genes on X chromosome | Defective photopigments in cone cells; cannot distinguish between red and green; most common in males (~8% of males vs ~0.5% of females in Caucasian populations) | Primarily males                      |
| Duchenne muscular dystrophy | DMD gene on X chromosome  | Absence of dystrophin protein; progressive muscle weakness and degeneration; affected boys typically lose the ability to walk by age 12; life expectancy ~20-30 years | Males only (X-linked recessive)      |

### Pedigree Analysis

| Feature                          | Autosomal Dominant                                | Autosomal Recessive                                | X-Linked Recessive                              |
| -------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| Affected children from unaffected parents | No (at least one parent must be affected)   | Yes (both parents can be unaffected carriers)     | No (mother must be a carrier or father affected) |
| Both sexes affected              | Yes (approximately equal)                         | Yes (approximately equal)                         | Mostly males; females rarely affected            |
| Skips generations                | No (appears in every generation)                  | Yes (can skip generations through carriers)       | Yes (can skip through carrier females            |
| Father-to-son transmission       | Possible                                          | Possible                                          | No (father passes Y to son, not X)               |
| Affected female with unaffected male: all children affected? | Yes (she passes the dominant allele to all children) | No (children are carriers at most)              | No (sons receive Y from father; daughters receive one normal X) |

---

## Karyotyping and Chromosomal Analysis

### Human Karyotype

- A karyotype is a photograph of the chromosomes of a cell, arranged in pairs according to size and banding pattern
- Human somatic cells are diploid (2n = 46): 22 pairs of autosomes + 1 pair of sex chromosomes (XX or XY)
- Karyotyping is performed by:
  1. Collecting cells (e.g., from blood, amniotic fluid, or chorionic villus sampling)
  2. Stimulating the cells to divide
  3. Arresting cell division in metaphase (using colchicine) -- when chromosomes are most condensed and visible
  4. Staining the chromosomes (Giemsa stain produces characteristic banding patterns)
  5. Photographing and arranging the chromosomes in homologous pairs

### Chromosomal Abnormalities

**Numerical abnormalities (aneuploidy):**

| Condition                  | Karyotype   | Description                                                                                                               | Symptoms                                           |
| -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Down syndrome (trisomy 21)  | 47,XX,+21 or 47,XY,+21 | Extra copy of chromosome 21; most common chromosomal abnormality; incidence increases with maternal age                     | Intellectual disability; characteristic facial features; heart defects; increased risk of leukaemia |
| Edwards syndrome (trisomy 18) | 47,XX,+18 or 47,XY,+18 | Extra copy of chromosome 18; severe developmental abnormalities; most affected infants die within the first year             | Severe intellectual disability; heart defects; clenched fists; rocker-bottom feet |
| Patau syndrome (trisomy 13) | 47,XX,+13 or 47,XY,+13 | Extra copy of chromosome 13; severe abnormalities; most die within the first year                                        | Severe intellectual disability; cleft lip/palate; polydactyly; heart defects |
| Klinefelter syndrome        | 47,XXY      | Extra X chromosome in a male                                                                                              | Tall stature; small testes; infertility; gynaecomastia; mild learning difficulties |
| Turner syndrome             | 45,X0       | Missing one X chromosome in a female                                                                                      | Short stature; webbed neck; lack of ovarian development; infertility; no puberty without hormone treatment |
| Triple X syndrome           | 47,XXX      | Extra X chromosome in a female                                                                                           | Usually normal; tall stature; may have learning difficulties |
| Jacob's syndrome            | 47,XYY      | Extra Y chromosome in a male                                                                                             | Usually normal; tall stature; may have mild learning difficulties |

**Structural abnormalities:**

| Type                        | Description                                                                                                               | Effect                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Deletion                     | A segment of a chromosome is lost                                                                                       | Cri-du-chat syndrome: deletion on chromosome 5 (short arm); severe intellectual disability; cat-like cry in infants |
| Duplication                  | A segment of a chromosome is duplicated (present twice)                                                                 | May cause developmental abnormalities depending on the genes involved |
| Inversion                    | A segment of a chromosome is reversed (flipped 180 degrees)                                                            | May disrupt gene function if the breakpoint occurs within a gene; may cause problems during meiosis |
| Translocation                | A segment of one chromosome breaks off and attaches to another chromosome                                              | Reciprocal translocation: two chromosomes exchange segments; Robertsonian translocation: two acrocentric chromosomes (13, 14, 15, 21, 22) fuse at the centromere |
| Robertsonian translocation    | A type of translocation involving acrocentric chromosomes where the long arms fuse and the short arms are lost           | Can cause Down syndrome if a Robertsonian translocation involves chromosome 21; a carrier (45 chromosomes) is phenotypically normal but at risk of having children with Down syndrome |

### Pre-Natal Diagnosis

| Method                          | Timing              | Description                                                                                                               | Risks                                  |
| ------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Amniocentesis                    | 15-20 weeks         | A needle is inserted through the abdomen into the amniotic sac; a sample of amniotic fluid (containing foetal cells) is withdrawn; cells are cultured and karyotyped | ~0.5-1% risk of miscarriage          |
| Chorionic villus sampling (CVS)  | 10-13 weeks         | A sample of chorionic villi (placental tissue) is obtained via a needle through the abdomen or a catheter through the cervix; cells are karyotyped directly | ~1-2% risk of miscarriage             |
| Non-invasive prenatal testing (NIPT) | 10+ weeks      | Cell-free foetal DNA is extracted from the mother's blood and analysed for chromosomal abnormalities using sequencing technology | No risk to the foetus (blood test only); high sensitivity for trisomy 21, 18, 13 |

---

## Common Pitfalls

- **Dominant does NOT mean more common.** A dominant allele is expressed when only one copy is present, but it can still be rare in the population (e.g., Huntington's disease is dominant but rare; polydactyly is dominant but uncommon)
- **A carrier is a heterozygote who shows no symptoms.** This term is used for recessive disorders and X-linked disorders, NOT for dominant disorders (a person with a dominant disorder cannot be an unaffected carrier)
- **X-linked recessive disorders affect males more frequently than females.** Males have only one X chromosome, so a single recessive allele on the X chromosome will be expressed. Females need two copies (homozygous recessive) to be affected
- **Down syndrome can be caused by trisomy 21 OR Robertsonian translocation.** Most cases (95%) are caused by non-disjunction during meiosis, but some are caused by a translocation involving chromosome 21 -- in these cases, one parent may be a balanced carrier (45 chromosomes, phenotypically normal)

---

## DNA Technology in Detail

### Restriction Enzymes (Restriction Endonucleases)

- Proteins produced by bacteria as a defence mechanism against bacteriophages (viruses that infect bacteria)
- They recognise specific short DNA sequences (recognition sites, typically 4-8 base pairs long) and cut the DNA at or near these sites
- The recognition sites are **palindromic** -- the sequence reads the same on both strands in the 5' to 3' direction (e.g., GAATTC on one strand reads CTTAAG on the complementary strand)

| Type                    | Cut Pattern                                                                                                               | Result                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **Blunt end cutters**     | Cut straight through both strands at the same position in the recognition site                                           | Flat ends; can be joined to any other blunt end, but less efficient and less specific |
| **Sticky end cutters**    | Cut at staggered positions on the two strands, creating short single-stranded overhangs (sticky ends)                     | The single-stranded overhangs can base-pair with complementary overhangs from another fragment; more efficient and more specific joining |

| Enzyme                  | Recognition Site (5' $\rightarrow$ 3')                                                                                  | Cut Type                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| EcoRI                   | GAATTC                                                                                                                    | Sticky ends (5' overhang: AATT)          |
| BamHI                   | GGATCC                                                                                                                    | Sticky ends (5' overhang: GATC)          |
| HindIII                 | AAGCTT                                                                                                                    | Sticky ends (5' overhang: AGCT)          |
| SmaI                    | CCCGGG                                                                                                                    | Blunt ends                                |

### DNA Ligase

- An enzyme that joins DNA fragments by forming phosphodiester bonds between adjacent nucleotides
- Used to join:
  - Insert DNA and plasmid vector in genetic engineering
  - Okazaki fragments during DNA replication (natural role)
- DNA ligase is more efficient at joining sticky ends than blunt ends because the complementary overhangs hold the fragments in the correct position

### PCR (Polymerase Chain Reaction) in Detail

PCR is a technique used to amplify a specific region of DNA in vitro (outside a living cell).

**Steps in each cycle:**

| Step                    | Temperature              | What Happens                                                                                                              | Duration (approximate)   |
| ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| 1. Denaturation           | 94-96 degrees C           | Double-stranded DNA template is heated to separate the two strands (breaks hydrogen bonds between base pairs)             | 30 seconds              |
| 2. Annealing              | 50-65 degrees C           | Temperature is lowered; short DNA primers (forward and reverse) bind to complementary sequences on the target DNA; the annealing temperature depends on the primer sequence | 30 seconds              |
| 3. Extension              | 72 degrees C              | Taq polymerase (heat-stable DNA polymerase from _Thermus aquaticus_) adds nucleotides to the 3' end of each primer, synthesising new DNA strands complementary to the template | 1-2 minutes (depending on length of target DNA) |

**Key features of PCR:**

| Feature                  | Description                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Primers                  | Short, single-stranded DNA sequences (typically 18-25 bases) that are complementary to the regions flanking the target DNA; they define the start and end points of the amplified region |
| Taq polymerase           | Heat-stable DNA polymerase from _Thermus aquaticus_ (a thermophilic bacterium); does not denature at 95 degrees C (unlike human DNA polymerase); essential because the high temperatures in each cycle would destroy most enzymes |
| Nucleotides              | Free dNTPs (deoxynucleoside triphosphates: dATP, dTTP, dCTP, dGTP) provide the building blocks for new DNA strands      |
| Exponential amplification | Each cycle doubles the amount of DNA; after 30 cycles, there are approximately $2^{30}$ ($\approx$ 1 billion) copies of the target region |
| Thermocycler             | A programmable machine that automatically cycles through the temperature changes                                          |

### Gel Electrophoresis

| Feature                  | Description                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Principle                | DNA fragments are negatively charged (due to phosphate groups); when placed in an electric field, they migrate towards the positive electrode (anode) |
| Gel medium               | Agarose gel (a polysaccharide from seaweed); acts as a molecular sieve -- smaller fragments move through the pores more easily and travel further |
| Separation               | DNA fragments are separated by SIZE (not by charge -- all fragments have the same charge-to-mass ratio); smaller fragments travel further, larger fragments travel less far |
| Staining                 | DNA is not visible; the gel is stained with a DNA-binding dye (e.g., ethidium bromide, GelRed) that fluoresces under UV light |
| DNA ladder (marker)       | A set of DNA fragments of known sizes run in a separate lane; used to estimate the size of unknown fragments by comparing their distance travelled with the ladder |
| Applications             | Comparing DNA fragments (e.g., in genetic fingerprinting, forensic analysis, paternity testing); checking the results of PCR and restriction digestion; diagnosing genetic diseases (e.g., detecting the sickle cell mutation) |

---

## Genetic Fingerprinting (DNA Profiling)

### Process

1. **Extract DNA:** DNA is extracted from a sample (blood, saliva, hair root, semen)
2. **PCR amplification:** Specific regions of DNA are amplified using primers that target **short tandem repeats (STRs)** or **variable number tandem repeats (VNTRs)**
3. **Gel electrophoresis:** The amplified fragments are separated by size using gel electrophoresis (or capillary electrophoresis)
4. **Visualisation:** The DNA bands are visualised and compared between samples

### STRs (Short Tandem Repeats)

- STRs are short sequences of DNA (typically 2-6 base pairs) that are repeated multiple times in tandem
- The number of repeats varies between individuals (e.g., one person might have ATCG repeated 7 times at a particular locus; another might have it repeated 12 times)
- The FBI uses a panel of 13 standard STR loci (CODIS) for forensic DNA profiling in the United States
- The probability of two unrelated individuals having the same DNA profile at all 13 loci is less than 1 in a trillion

### Applications

| Application              | Description                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Forensic science          | Matching DNA from crime scenes to suspects or victims; DNA evidence can confirm presence at a scene, establish innocence, or link serial crimes |
| Paternity testing         | Comparing the STR profile of a child with that of the alleged father; the child must inherit one allele at each locus from each biological parent |
| Identifying disaster victims | DNA profiles from remains are compared with profiles from family members or personal belongings (e.g., toothbrush) |
| Immigration cases         | Confirming family relationships when documentation is disputed                                                           |
| Conservation biology      | Monitoring genetic diversity in endangered populations; identifying illegal trade in wildlife products (e.g., elephant ivory, rhino horn) |

---

## Common Pitfalls

- **Restriction enzymes cut at specific recognition sites; they do NOT cut at random.** The recognition sequence must be present in the DNA for the enzyme to cut it. Different enzymes recognise different sequences
- **Sticky ends are more useful than blunt ends in genetic engineering because the complementary overhangs ensure that the DNA fragments are joined in the correct orientation.** Blunt ends can be joined in either orientation, and the process is less efficient
- **PCR amplifies a SPECIFIC region of DNA, not the entire genome.** The region amplified is determined by the primers used
- **Gel electrophoresis separates DNA by SIZE (length), not by charge.** All DNA fragments carry the same charge per unit length (negative charge from phosphate groups), so charge does not affect separation; smaller fragments travel further because they move through the gel pores more easily
- **DNA profiling compares the NUMBER OF REPEATS at specific loci, NOT the sequence of bases.** The bases in the repeat are the same between individuals; what varies is how many times the repeat occurs**
:::
