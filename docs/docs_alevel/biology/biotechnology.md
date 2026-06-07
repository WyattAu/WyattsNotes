---
title: Biotechnology
description:
  'A-Level Biology Biotechnology notes covering key definitions, core concepts, worked examples, and
  practice questions for effective exam preparation and mastery.'
date: 2026-04-18T00:00:00.000Z
tags:
  - Biology
  - ALevel
categories:
  - Biology
slug: biotechnology
sidebar_position: 13
---

## Biotechnology

:::info Board Coverage AQA Paper 2 | Edexcel A Paper 2 | OCR (A) Paper 2 | CIE Paper 4
:::
## 1. Recombinant DNA Technology

### 1.1 Overview

Recombinant DNA technology involves combining DNA from different sources to create new, artificial
DNA molecules that can be introduced into host organisms. This is the basis of **genetic
engineering** and **genetic modification (GM)**.

### 1.2 Tools of Recombinant DNA Technology

**Restriction endonucleases (restriction enzymes)** cut DNA at specific recognition sequences. These
sequences are 4--8 base pairs long and palindromic (the sequence reads the same on both strands in
the 5' to 3' direction).

| Enzyme  | Recognition Sequence | Cut Type  | Sticky Ends |
| ------- | -------------------- | --------- | ----------- |
| EcoRI   | 5'-GAATTC-3'         | Staggered | AATT        |
| BamHI   | 5'-GGATCC-3'         | Staggered | GATC        |
| HindIII | 5'-AAGCTT-3'         | Staggered | AGCT        |
| SmaI    | 5'-CCCGGG-3'         | Blunt     | None        |

Staggered cuts produce **sticky ends** (single-stranded overhangs) that are complementary and can
base-pair with any DNA cut with the same enzyme. Blunt cuts produce flat ends that can be joined to
any other blunt-ended DNA.

**DNA ligase** joins DNA fragments by catalysing the formation of phosphodiester bonds between the
$3'$-OH of one fragment and the $5'$-phosphate of another. T4 DNA ligase can join both sticky-end
and blunt-end fragments.

**Vectors** are DNA molecules used to carry foreign DNA into host cells:

| Vector Type                           | Capacity                   | Advantages                                | Disadvantages         |
| ------------------------------------- | -------------------------- | ----------------------------------------- | --------------------- |
| Plasmid                               | $< 10\ \mathrm{kb}$        | Easy to manipulate; high copy number      | Limited capacity      |
| Bacteriophage ($\lambda$)             | $< 25\ \mathrm{kb}$        | Efficient delivery to E. Coli             | More complex handling |
| BAC (bacterial artificial chromosome) | $100$--$300\ \mathrm{kb}$  | Large inserts                             | Low copy number       |
| YAC (yeast artificial chromosome)     | $100$--$2000\ \mathrm{kb}$ | Very large inserts; eukaryotic processing | Unstable; low yield   |

### 1.3 Procedure for Producing Recombinant DNA

1. **Isolation**: the target gene is located and cut from donor DNA using a restriction enzyme.
2. **Vector preparation**: the same restriction enzyme cuts the plasmid vector at a specific site
   (e.g., within a gene for antibiotic resistance or a reporter gene like lacZ).
3. **Ligation**: the target gene and the cut plasmid are mixed with DNA ligase. The complementary
   sticky ends anneal by base pairing, and DNA ligase seals the nicks, producing a recombinant
   plasmid.
4. **Transformation**: the recombinant plasmid is introduced into host bacterial cells by:

- **Heat shock**: cells are chilled ($4\ ^\circ\mathrm{C}$), mixed with plasmid DNA, briefly heated
  ($42\ ^\circ\mathrm{C}$90 seconds), and placed on ice. The temperature change makes the membrane
  permeable to DNA.
- **Electroporation**: an electric field creates temporary pores in the membrane.

5. **Selection**: cells are grown on agar plates containing an antibiotic. Only cells that have
   taken up the plasmid (with the antibiotic resistance gene) survive.
6. **Identification**: further screening identifies cells with the recombinant plasmid (containing
   the target gene inserted into the lacZ gene, disrupting it). White colonies (non-functional lacZ)
   indicate successful insertion; blue colonies (functional lacZ) indicate the plasmid without
   insertion.

### 1.4 Applications

- **Recombinant human insulin**: produced by _E. Coli_ with the human insulin gene. Structurally
  identical to human insulin, eliminating immune reactions associated with animal-derived insulin.
- **Factor VIII**: blood clotting factor for treating haemophilia, produced by genetically modified
  mammalian cells (which perform the necessary post-translational modifications).
- **GM crops**: herbicide resistance (e.g., _BAR_ gene), pest resistance (Bt toxin gene),
  nutritional enhancement (Golden Rice with beta-carotene).

## 2. Polymerase Chain Reaction (PCR)

### 2.1 Standard PCR

PCR amplifies a specific DNA sequence in vitro. For details of the basic mechanism, see
[Genetics and DNA](/docs/alevel/biology/genetics-and-dna).

### 2.2 Quantitative PCR (qPCR)

**Real-time PCR (qPCR)** allows quantification of the initial amount of DNA in a sample by measuring
the accumulation of amplified DNA during the PCR cycles, in real time.

**Methods of detection:**

- **SYBR Green**: a fluorescent dye that intercalates into double-stranded DNA. Fluorescence
  increases proportionally to the amount of dsDNA produced. Simple but non-specific (binds to any
  dsDNA, including primer-dimers).
- **TaqMan probes**: sequence-specific oligonucleotide probes labelled with a fluorescent reporter
  at one end and a quencher at the other. When the probe is intact, the quencher absorbs the
  reporter's fluorescence. During extension, the probe is cleaved by the $5' \to 3'$ exonuclease
  activity of Taq polymerase, separating reporter from quencher and allowing fluorescence. Highly
  specific.

**The $C_t$ value** (threshold cycle) is the PCR cycle at which the fluorescence exceeds a defined
threshold. It is inversely proportional to the logarithm of the initial template quantity:

$$C_t \propto -\log(\text{initial template amount})$$

A lower $C_t$ value indicates more initial template.

**Worked Example.** A qPCR assay gives $C_t = 25$ for a sample and $C_t = 28$ for a standard with
known concentration of $10^4$ copies. If each $C_t$ difference of 1 represents a doubling:

Number of copies in sample $= 10^4 \times 2^{(28-25)} = 10^4 \times 2^3 = 10^4 \times 8 = 80000$
copies.

### 2.3 Reverse Transcription PCR (RT-PCR)

RT-PCR is used to amplify RNA. First, **reverse transcriptase** converts the RNA template into
complementary DNA (cDNA). The cDNA is then amplified by standard PCR. This is essential for studying
gene expression (mRNA levels), detecting RNA viruses (e.g., SARS-CoV-2, HIV), and analysing
transcriptomes.

## 3. Gel Electrophoresis

### 3.1 DNA Gel Electrophoresis

DNA fragments are separated by size through an agarose gel under an electric field. For details, see
[Genetics and DNA](/docs/alevel/biology/genetics-and-dna).

### 3.2 Protein Electrophoresis (SDS-PAGE)

**SDS-PAGE** (sodium dodecyl sulfate polyacrylamide gel electrophoresis) separates proteins by
molecular mass:

1. Proteins are denatured by heating with SDS (which gives them a uniform negative charge) and
   $\beta$-mercaptoethanol (which breaks disulfide bridges).
2. The denatured proteins are loaded into wells in a polyacrylamide gel.
3. An electric field is applied; proteins migrate towards the positive electrode.
4. Smaller proteins travel faster through the gel matrix.
5. A protein ladder (proteins of known molecular mass) is used to estimate the mass of unknown
   proteins.

### 3.3 Southern, Northern, and Western Blotting

| Technique     | Target        | Probe/Antibody        | Purpose                               |
| ------------- | ------------- | --------------------- | ------------------------------------- |
| Southern blot | DNA fragments | Radioactive DNA probe | Identify specific DNA sequences       |
| Northern blot | RNA fragments | Radioactive DNA probe | Measure gene expression (mRNA levels) |
| Western blot  | Proteins      | Specific antibody     | Detect specific proteins              |

## 4. DNA Sequencing

### 4.1 Sanger Sequencing (Chain-Termination Method)

Developed by Frederick Sanger (1977). For details, see
[Genetics and DNA](/docs/alevel/biology/genetics-and-dna).

### 4.2 Next-Generation Sequencing (NGS)

NGS methods enable massively parallel sequencing of millions of DNA fragments simultaneously:

- **Illumina sequencing**: DNA fragments are attached to a flow cell and amplified by bridge PCR to
  form clusters. Sequencing-by-synthesis uses fluorescently labelled reversible terminators; each
  cycle adds one nucleotide and captures an image.
- **Pyrosequencing (454)**: detects the release of pyrophosphate ($\mathrm{PP_i}$) when a nucleotide
  is incorporated, which is converted to light by a cascade of enzymatic reactions.

NGS has dramatically reduced the cost and time required for genome sequencing (the Human Genome
Project took 13 years and cost $2.7 billion; today a human genome can be sequenced in hours for
under $1000).

## 5. Genetic Engineering in Medicine and Agriculture

### 5.1 Gene Therapy

Gene therapy involves introducing functional copies of a gene into a patient's cells to compensate
for a defective gene. It is a potential treatment for genetic disorders caused by single-gene
defects (e.g., cystic fibrosis, severe combined immunodeficiency, sickle cell anaemia).

**Somatic gene therapy**: the functional gene is introduced into the patient's body cells (not
gametes). The changes are not inherited.

- **In vivo**: the gene is delivered directly to the patient's body using a viral vector (e.g.,
  adenovirus, lentivirus) or a non-viral method (liposomes, nanoparticles).
- **Ex vivo**: cells are removed from the patient, the functional gene is introduced in the
  laboratory (using a viral vector), the modified cells are selected and expanded, and then returned
  to the patient.

**Germ line gene therapy**: the functional gene is introduced into gametes or early embryos,
producing changes that are inherited by future generations. This is currently illegal in most
countries due to ethical concerns and the risk of unintended consequences.

**Challenges of gene therapy:**

- Delivering the gene to the correct cells and ensuring it is expressed at the right level.
- Immune response to the viral vector.
- The therapeutic effect may be temporary (if the modified cells are not stem cells and do not
  divide indefinitely).
- Risk of insertional mutagenesis (the viral DNA may insert near an oncogene, activating it).
- Ethical concerns about enhancement (designer babies).

### 5.2 Stem Cells

**Stem cells** are undifferentiated cells with the capacity for self-renewal (mitosis producing
identical stem cells) and differentiation into specialised cell types.

| Type                       | Source                                                                        | Potency                | Ethical Issues                      |
| -------------------------- | ----------------------------------------------------------------------------- | ---------------------- | ----------------------------------- |
| Embryonic (ESC)            | Inner cell mass of blastocyst (5--7 days)                                     | Totipotent/pluripotent | Significant (destruction of embryo) |
| Adult                      | Bone marrow, adipose tissue, brain                                            | Multipotent            | Fewer                               |
| Induced pluripotent (iPSC) | Adult cells reprogrammed with transcription factors (Oct4, Sox2, Klf4, c-Myc) | Pluripotent            | Minimal (no embryos)                |

**Therapeutic cloning** (somatic cell nuclear transfer, SCNT): the nucleus from a patient's somatic
cell is transferred into an enucleated egg cell. The resulting embryo is allowed to develop to the
blastocyst stage, and embryonic stem cells are harvested. These cells are genetically identical to
the patient and can be directed to differentiate into the required cell type for transplantation
(e.g., insulin-producing beta cells for Type 1 diabetes, dopaminergic neurons for Parkinson's
disease). The embryo is not implanted into a uterus.

**Ethical considerations of stem cell research:**

- Embryonic stem cells require the destruction of human embryos (some consider this morally
  equivalent to taking a life).
- Therapeutic cloning creates embryos that are destroyed after stem cell extraction.
- iPSCs offer an ethically less contentious alternative but are technically more challenging (lower
  efficiency, risk of incomplete reprogramming).
- The potential for stem cells to be used for enhancement rather than therapy raises ethical
  concerns about equity and access.

## 6. CRISPR-Cas9

### 6.1 Mechanism

**CRISPR-Cas9** (Clustered Regularly Interspaced Short Palindromic Repeats) is a gene editing tool
derived from a bacterial immune defence system.

**Components:**

1. **Cas9 protein**: an endonuclease enzyme that cuts double-stranded DNA.
2. **Guide RNA (gRNA)**: a 20-nucleotide RNA sequence complementary to the target DNA sequence. The
   gRNA guides Cas9 to the correct location.
3. **PAM sequence**: a short DNA sequence (5'-NGG-3' for _Streptococcus pyogenes_ Cas9) immediately
   adjacent to the target. Cas9 requires a PAM to bind and cut.

**Mechanism:**

1. The gRNA is designed to be complementary to the target DNA sequence.
2. The gRNA-Cas9 complex searches the genome for the target sequence adjacent to a PAM.
3. When the gRNA base-pairs with the target DNA and the PAM is recognised, Cas9 cuts both strands of
   the DNA, creating a double-strand break (DSB).
4. The cell repairs the DSB by one of two mechanisms:

- **Non-homologous end joining (NHEJ)**: the broken ends are joined directly, often introducing
  small insertions or deletions (indels) that can disrupt the gene (gene knockout).
- **Homology-directed repair (HDR)**: if a donor DNA template with the desired sequence is provided,
  the cell uses it as a template to repair the break, introducing the desired sequence (gene
  knock-in or correction).

### 6.2 Applications

- **Gene knockout**: disrupting a gene to study its function (research) or to disable a
  disease-causing gene (therapy).
- **Gene correction**: repairing a disease-causing mutation in situ (e.g., sickle cell anaemia,
  beta-thalassaemia).
- **Gene regulation**: fusing a catalytically dead Cas9 (dCas9) with transcriptional activators or
  repressors to up- or down-regulate gene expression without cutting DNA.
- **Diagnostics**: SHERLOCK and DETECTR use Cas13/Cas12 to detect specific RNA/DNA sequences with
  high sensitivity, applied to pathogen detection (e.g., SARS-CoV-2).

### 6.3 Ethical and Safety Concerns

- **Off-target effects**: Cas9 may cut at sites with partial homology to the gRNA, causing
  unintended mutations.
- **Mosaicism**: in embryos, the edit may not occur in all cells, producing individuals with a
  mixture of edited and unedited cells.
- **Germline editing**: edits to germ cells or embryos are heritable. The 2018 case of He Jiankui,
  who edited the CCR5 gene in human embryos to confer HIV resistance, was widely condemned.
- **Enhancement**: CRISPR could be used for non-therapeutic enhancement (e.g., increased
  intelligence, athletic ability), raising concerns about equity and "designer babies."

## 7. Bioinformatics

### 7.1 Definition

Bioinformatics is the application of computational tools to store, analyse, and interpret biological
data, particularly DNA and protein sequences.

### 7.2 Key Bioinformatics Activities

- **Sequence alignment**: comparing DNA or protein sequences to identify regions of similarity
  (homology). Tools: BLAST (Basic Local Alignment Search Tool), ClustalW.
- **Genome annotation**: identifying genes, regulatory elements, and other functional features
  within a genome sequence.
- **Phylogenetic analysis**: constructing evolutionary trees from sequence data.
- **Protein structure prediction**: using algorithms (e.g., AlphaFold) to predict the 3D structure
  of proteins from their amino acid sequence.
- **Genome-wide association studies (GWAS)**: scanning genomes of large populations to identify
  genetic variants associated with diseases or traits.

### 7.3 Databases

| Database | Content                           |
| -------- | --------------------------------- |
| GenBank  | Nucleotide sequences              |
| UniProt  | Protein sequences and function    |
| OMIM     | Human genes and genetic disorders |
| Ensembl  | Vertebrate genomes                |
| PDB      | Protein 3D structures             |

## 8. The Microbiome

### 8.1 Definition and Importance

The **human microbiome** is the collective genome of all microorganisms (bacteria, archaea, fungi,
viruses) that live on and in the human body. The human gut microbiome alone contains approximately
$3 \times 10^{13}$ bacterial cells -- roughly equal to the number of human cells in the body.

### 8.2 Functions of the Gut Microbiome

- **Digestion**: gut bacteria ferment dietary fibre to produce short-chain fatty acids (SCFAs) such
  as butyrate, propionate, and acetate, which provide energy for colonocytes and have
  anti-inflammatory effects.
- **Immune system development**: exposure to gut bacteria in early life is essential for normal
  immune system maturation. The microbiome helps train the immune system to distinguish harmless
  commensals from pathogens.
- **Vitamin synthesis**: gut bacteria produce vitamin K and some B vitamins.
- **Protection against pathogens**: commensal bacteria compete with pathogens for nutrients and
  attachment sites, and produce antimicrobial substances (bacteriocins).
- **Metabolic health**: the composition of the gut microbiome is linked to obesity, type 2 diabetes,
  and cardiovascular disease.

### 8.3 Dysbiosis

Dysbiosis (imbalance of the microbiome) is associated with:

- Inflammatory bowel disease (Crohn's disease, ulcerative colitis).
- Obesity and metabolic syndrome.
- Mental health conditions (via the gut-brain axis).
- Allergies and autoimmune diseases.

## 9. Practical Skills

### 9.1 Calculations in Biotechnology

**Worked Example 1: PCR product yield.** A PCR reaction starts with 3 copies of a target sequence.
After 32 cycles, how many copies are produced?

$$N = 3 \times 2^{32} = 3 \times 4294967296 = 1.29 \times 10^{10}\ \text{copies}$$

**Worked Example 2: Restriction fragment analysis.** A plasmid of $5000\ \mathrm{bp}$ is cut with
EcoRI at position $1000\ \mathrm{bp}$ and with BamHI at position $3500\ \mathrm{bp}$. How many
fragments are produced and what are their sizes?

EcoRI cuts at $1000\ \mathrm{bp}$Producing fragments of $1000\ \mathrm{bp}$ and $4000\ \mathrm{bp}$.
BamHI cuts the $4000\ \mathrm{bp}$ fragment at position $3500\ \mathrm{bp}$Producing fragments of
$2500\ \mathrm{bp}$ ($3500 - 1000$) and $1500\ \mathrm{bp}$ ($5000 - 3500$).

Final fragments: $1000\ \mathrm{bp}$, $2500\ \mathrm{bp}$And $1500\ \mathrm{bp}$ (three fragments).

**Worked Example 3: Calculating DNA concentration from absorbance.** A DNA solution has an
absorbance of 0.40 at $260\ \mathrm{nm}$. The relationship between absorbance and double-stranded
DNA concentration is: $A_{260} = 1.0$ for $50\ \mu\mathrm{g\ mL^{-1}}$ dsDNA.

Concentration $= \frac{0.40}{1.0} \times 50 = 20\ \mu\mathrm{g\ mL^{-1}}$.

:::warning Common Pitfall Students often confuse Southern, Northern, and Western blotting. Southern
= DNA, Northern = RNA, Western = protein. The mnemonic "SNOW Drop" (Southern, Northern, Western --
DNA, RNA, protein) may help. Students also frequently forget that PCR does not require living
organisms or bacterial cells -- it is an entirely in vitro technique.
:::

## Practice Problems

<details>
<summary>Problem 1</summary>
Describe the process of producing recombinant human insulin using genetic engineering. Include reference to restriction enzymes, DNA ligase, vectors, and selection methods. (6 marks)

**Answer.** (1) The human insulin gene is located and cut from human DNA using a restriction enzyme
(e.g., EcoRI), producing sticky ends. (2) The same restriction enzyme cuts a plasmid vector at a
specific site, often within the lacZ gene. (3) The insulin gene and the cut plasmid are mixed with
DNA ligase, which joins them by forming phosphodiester bonds, producing a recombinant plasmid. (4)
The recombinant plasmid is introduced into _E. Coli_ host cells by transformation (heat shock or
electroporation). (5) Transformed bacteria are selected by growing them on agar plates containing
ampicillin. Only bacteria that have taken up the plasmid (which carries an ampicillin resistance
gene) survive. (6) To distinguish bacteria with the recombinant plasmid from those with the original
plasmid, bacteria are grown on plates containing X-gal and IPTG. Bacteria with the original plasmid
produce functional $\beta$-galactosidase (from the intact lacZ gene) and form blue colonies.
Bacteria with the recombinant plasmid have the insulin gene inserted into lacZ, disrupting it, and
form white colonies. (7) White colonies are selected and grown in large fermenters. Insulin is
extracted and purified.

<b>If you get this wrong, revise:</b>
[Procedure for Producing Recombinant DNA](#13-procedure-for-producing-recombinant-dna)

</details>

<details>
<summary>Problem 2</summary>
Explain how CRISPR-Cas9 can be used to correct a disease-causing mutation. In your answer, describe the roles of the guide RNA, Cas9 protein, PAM sequence, and the cell's DNA repair mechanisms. (6 marks)

**Answer.** CRISPR-Cas9 is a gene editing tool that can precisely cut DNA at a specific location. A
guide RNA (gRNA) is designed to be complementary to the target DNA sequence containing the
disease-causing mutation. The gRNA-Cas9 complex scans the genome for the target sequence adjacent to
a PAM (protospacer adjacent motif, 5'-NGG-3'). When the gRNA base-pairs with the target and the PAM
is recognised, Cas9 cuts both strands of the DNA, creating a double-strand break (DSB). To correct
the mutation, a donor DNA template is provided that contains the correct (wild-type) sequence
flanked by regions homologous to the target. The cell repairs the DSB using homology-directed repair
(HDR), using the donor template as a guide to insert the correct sequence. This corrects the
mutation. If HDR does not occur, the cell may use non-homologous end joining (NHEJ), which can
introduce indels that disrupt the gene further. The efficiency of HDR can be increased by using
modified Cas9 (nickase versions that create single-strand breaks, which favour HDR).

<b>If you get this wrong, revise:</b> [CRISPR-Cas9](#6-crispr-cas9)

</details>

<details>
<summary>Problem 3</summary>
Compare and contrast somatic gene therapy and germ line gene therapy. Discuss the ethical issues associated with each approach. (5 marks)

**Answer.** Somatic gene therapy involves introducing a functional gene into the patient's body
cells (somatic cells). The changes affect only the treated individual and are not inherited by
offspring. It is used to treat conditions such as cystic fibrosis, SCID, and haemophilia. Germ line
gene therapy involves modifying the DNA in gametes or early embryos, producing changes that are
inherited by all cells of the organism and can be passed to future generations. It could potentially
eliminate genetic diseases from a family line permanently. Ethical issues: somatic gene therapy is
generally accepted because it is analogous to conventional medical treatment -- the patient
consents, and the changes are not heritable. Germ line gene therapy is widely considered unethical
because: (1) the embryo cannot consent; (2) changes are heritable, affecting future generations who
cannot consent; (3) there is a risk of off-target effects with unpredictable long-term consequences
for the gene pool; (4) it could be used for enhancement rather than therapy; (5) it raises concerns
about "designer babies" and the commodification of human life. Germ line gene therapy is currently
illegal in most countries.

<b>If you get this wrong, revise:</b> [Gene Therapy](#51-gene-therapy)

</details>

<details>
<summary>Problem 4</summary>
A plasmid has a total length of $4500\ \mathrm{bp}$. It is cut with two restriction enzymes: EcoRI cuts at position $900\ \mathrm{bp}$And HindIII cuts at position $2700\ \mathrm{bp}$. (a) How many fragments are produced? (b) What are their sizes? (c) If the fragments are separated by gel electrophoresis, which fragment will travel furthest from the wells?

**Answer.** (a) Two cuts produce three fragments.

(b) Fragment 1: from position 0 to 900 = $900\ \mathrm{bp}$ (circular plasmid) or from the start of
the linearised plasmid to the first cut. Fragment 2: from position 900 to 2700 =
$1800\ \mathrm{bp}$. Fragment 3: from position 2700 to 4500 = $1800\ \mathrm{bp}$.

The three fragments are: $900\ \mathrm{bp}$, $1800\ \mathrm{bp}$And $1800\ \mathrm{bp}$.

(c) The smallest fragment ($900\ \mathrm{bp}$) will travel furthest from the wells because smaller
DNA fragments migrate faster through the gel matrix.

<b>If you get this wrong, revise:</b>
[Calculations in Biotechnology](#91-calculations-in-biotechnology)

</details>

<details>
<summary>Problem 5</summary>
Explain the advantages and disadvantages of using embryonic stem cells compared to adult stem cells for medical research and therapy. (5 marks)

**Answer.** Embryonic stem cells (ESCs) are pluripotent -- they can differentiate into any cell type
in the body, making them more versatile for therapy. Adult stem cells are multipotent -- they can
only differentiate into a limited range of cell types within their tissue of origin. ESCs can divide
indefinitely in culture, providing an unlimited supply, whereas adult stem cells have a limited
capacity for self-renewal. However, ESCs have significant disadvantages: they are derived from
embryos, which must be destroyed (raising ethical objections about the moral status of the embryo);
they carry a risk of teratoma formation (tumours) if transplanted without full differentiation; and
they require immunosuppression if the donor and recipient are not genetically matched. Adult stem
cells avoid the ethical issues associated with embryo destruction and can sometimes be harvested
from the patient's own body (autologous transplant), eliminating immune rejection. However, adult
stem cells are rare, difficult to isolate and expand in culture, and have limited differentiation
potential. Induced pluripotent stem cells (iPSCs) offer a compromise: they are pluripotent like ESCs
but derived from adult cells, avoiding embryo destruction.

<b>If you get this wrong, revise:</b> [Stem Cells](#52-stem-cells)

</details>

## 10. Genetic Engineering in Agriculture: Golden Rice

### 10.1 The Problem: Vitamin A Deficiency

Vitamin A deficiency (VAD) affects approximately 250 million children worldwide, particularly in
Southeast Asia and sub-Saharan Africa. VAD causes xerophthalmia (dry eyes), night blindness, and in
severe cases, total blindness and increased susceptibility to infections. Rice is a staple food for
billions of people but contains no $\beta$-carotene (provitamin A) in the endosperm (the edible
white part).

### 10.2 The Solution: Engineering Provitamin A Biosynthesis

**Golden Rice** was developed by introducing two genes from other species into rice:

1. **psy** (phytoene synthase) from _daffodil_ (_Narcissus pseudonarcissus_) -- later replaced by
   the _maize_ psy gene for higher expression.
2. **crtI** (phytoene desaturase) from the soil bacterium _Erwinia uredovora_ (now reclassified as
   _Pantoea ananatis_).

These genes enable the rice endosperm to produce $\beta$-carotene from geranylgeranyl diphosphate
(GGPP), a precursor already present in the endosperm:

$$\text{GGPP} \xrightarrow{\text{psy}} \text{phytoene} \xrightarrow{\text{crtI}} \text{lycopene} \xrightarrow{\text{lcy (endogenous)}} \beta\text{-carotene}$$

The lycopene cyclase (lcy) step is catalysed by an enzyme already present in rice (endogenous gene).

### 10.3 Golden Rice 2

Golden Rice 1 produced insufficient $\beta$-carotene ($1.6\ \mu\mathrm{g\ g^{-1}}$). **Golden Rice
2** replaced the daffodil psy gene with a maize psy gene, which has higher expression in rice
endosperm, increasing $\beta$-carotene to $23\ \mu\mathrm{g\ g^{-1}}$ (a 14-fold improvement). This
level is sufficient to provide the recommended daily intake of vitamin A from a typical serving of
rice.

### 10.4 Ethical and Practical Considerations

| Argument For                                                                         | Argument Against                                                                                                      |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Addresses a major public health problem (VAD blindness)                              | Concerns about corporate control of food supply (patents on GM crops)                                                 |
| Rice is self-pollinating, so transgenes do not spread to wild relatives              | Gene flow to wild rice species could have unintended ecological consequences                                          |
| Golden Rice seeds are distributed free to subsistence farmers (humanitarian licence) | Some argue that VAD is better addressed by dietary diversification (eating more vegetables) rather than GM technology |
| Reduces reliance on vitamin A supplements (cost, distribution logistics)             | Long-term health effects of consuming GM foods are unknown (though no evidence of harm to date)                       |
| Could be combined with other traits (drought resistance, pest resistance)            | Public opposition to GM food may prevent adoption                                                                     |

## 11. Gene Therapy

### 11.1 Somatic Gene Therapy

**Somatic gene therapy** involves inserting a functional copy of a gene into the patient's body
cells (somatic cells). This does not affect the patient's germ cells, so the change is not inherited
by offspring.

**Vectors for gene delivery:**

| Vector                          | Advantages                                                     | Disadvantages                                                                       |
| ------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Retrovirus (e.g., lentivirus)   | Integrates into host genome, providing permanent expression    | Risk of insertional mutagenesis (activating oncogenes); only infects dividing cells |
| Adenovirus                      | Does not integrate into genome; high transduction efficiency   | Transient expression (lost as cells divide); immune response                        |
| Adeno-associated virus (AAV)    | Low immunogenicity; long-term expression in non-dividing cells | Small capacity ($< 5\ \mathrm{kb}$); expensive to produce                           |
| Liposomes (lipid nanoparticles) | Non-viral; no risk of viral infection; can carry larger DNA    | Low transfection efficiency; transient expression                                   |
| Naked DNA injection             | Simple; no vector needed                                       | Very low efficiency                                                                 |

### 11.2 Germline Gene Therapy

**Germline gene therapy** involves modifying the DNA in germ cells (sperm, eggs) or early embryos.
The changes would be inherited by all cells of the resulting individual and passed to future
generations.

Germline gene therapy is currently **illegal** in most countries due to:

- Ethical concerns about modifying the human germline ("designer babies").
- Unknown long-term consequences for future generations.
- Risk of off-target effects (unintended mutations).
- Social justice concerns (access limited to the wealthy).

### 11.3 Gene Therapy Success: Severe Combined Immunodeficiency (SCID)

SCID ("bubble boy disease") is caused by mutations in genes essential for immune cell development
(e.g., _IL2RG_ on the X chromosome, causing X-linked SCID). In 2000, gene therapy using a retroviral
vector successfully restored immune function in several SCID patients. However, 5 of 20 patients
developed leukaemia because the retrovirus inserted near the _LMO2_ oncogene, activating it. This
highlighted the risk of **insertional mutagenesis** and led to improved vector designs with safer
integration profiles.

## 12. Bioinformatics in Depth

### 12.1 BLAST (Basic Local Alignment Search Tool)

BLAST is the most widely used bioinformatics tool. It compares a query DNA or protein sequence
against a database of known sequences to find similar sequences.

**How BLAST works:**

1. The query sequence is broken into short "words" ( 3 amino acids for protein BLAST).
2. The database is scanned for exact matches to these words.
3. For each exact match found, BLAST extends the alignment in both directions.
4. High-scoring segment pairs (HSPs) are identified using a substitution matrix (e.g., BLOSUM62 for
   proteins).
5. Statistical significance is assessed using the E-value (expect value).

**E-value interpretation:**

- E-value $< 10^{-10}$: highly significant match (almost certainly homologous).
- E-value $< 10^{-5}$: significant match (likely homologous).
- E-value $> 0.01$: not significant (match may be due to chance).

### 12.2 Multiple Sequence Alignment and Phylogenetic Trees

When comparing multiple sequences (e.g., the same gene from different species), a **multiple
sequence alignment** (MSA) is performed using algorithms such as ClustalW or MUSCLE. The aligned
sequences are then used to construct a phylogenetic tree.

**Tree-building methods:**

| Method                                                    | Principle                                                                 | Speed     | Accuracy                    |
| --------------------------------------------------------- | ------------------------------------------------------------------------- | --------- | --------------------------- |
| UPGMA (unweighted pair group method with arithmetic mean) | Clusters sequences by pairwise similarity; assumes a molecular clock      | Fast      | Lower (assumes equal rates) |
| Neighbour-joining                                         | Minimises total branch length; does not assume a molecular clock          | Fast      | Moderate                    |
| Maximum parsimony                                         | Chooses the tree requiring the fewest evolutionary changes                | Slow      | Moderate                    |
| Maximum likelihood                                        | Chooses the tree with the highest probability given an evolutionary model | Very slow | High                        |
| Bayesian inference                                        | Uses probability distributions to estimate the most likely tree           | Very slow | Highest                     |

### 12.3 Worked Example: Calculating Genetic Distance

Two species have the following aligned DNA sequences for a 20 bp region:

Species A: ATG-CCT-AGG-TCA-GCT-AGA-TCC Species B: ATG-CCT-AGG-TCA-GCT-AGA-TCC Species C:
ATG-CCT-AAG-TCA-GCT-AGA-TCC Species D: ATG-CCT-AAG-TCA-GCA-AGA-TCC

Counting differences:

- A vs B: 0 differences
- A vs C: 1 difference (position 10: G $\to$ A)
- A vs D: 2 differences (position 10: G $\to$ A; position 16: T $\to$ A)
- B vs C: 1 difference
- B vs D: 2 differences
- C vs D: 1 difference

**Genetic distance matrix:**

|     | A   | B    | C    | D    |
| --- | --- | ---- | ---- | ---- |
| A   | 0   | 0.00 | 0.05 | 0.10 |
| B   |     | 0    | 0.05 | 0.10 |
| C   |     |      | 0    | 0.05 |
| D   |     |      |      | 0    |

Species A and B are most closely related (identical in this region). Species C is equally distant
from A and B. Species D is the most divergent.

## 13. Tissue Culture and Micropropagation

### 13.1 Principles

**Plant tissue culture** (micropropagation) involves growing plants from small pieces of plant
tissue (explants) on an artificial nutrient medium under sterile conditions. It exploits the
property of **totipotency**: the ability of any plant cell to develop into a complete organism.

### 13.2 Stages of Micropropagation

1. **Stage 0: Selection and preparation.** A healthy, disease-free mother plant is selected.
   Explants (leaf discs, stem sections, meristems) are surface-sterilised using sodium hypochlorite
   or ethanol.
2. **Stage 1: Initiation.** Explants are placed on a nutrient medium containing:

- **Macronutrients**: N, P, K, Ca, Mg, S.
- **Micronutrients**: Fe, Mn, Zn, Cu, B, Mo.
- **Carbon source**: sucrose (since the explant cannot photosynthesise).
- **Vitamins**: thiamine, nicotinic acid.
- **Plant growth regulators**: auxin (e.g., 2,4-D) and cytokinin (e.g., BAP). The auxin:cytokinin
  ratio determines the response:
- High auxin : low cytokinin $\to$ root formation.
- Low auxin : high cytokinin $\to$ shoot formation.
- Balanced ratio $\to$ callus formation (undifferentiated cell mass).
- **Gelling agent**: agar.
- The medium is solidified with agar and sterilised by autoclaving.

3. **Stage 2: Multiplication.** Callus or shoot tips are subcultured onto fresh medium to produce
   multiple shoots. Each shoot can be further divided, allowing exponential multiplication.
4. **Stage 3: Rooting.** Individual shoots are transferred to a rooting medium (high auxin) to
   induce root formation, producing complete plantlets.
5. **Stage 4: Acclimatisation (hardening off).** Plantlets are transferred from the sterile,
   high-humidity culture vessel to soil. This is the most critical stage because the plantlets must
   transition from heterotrophic growth (using sucrose from the medium) to autotrophic growth
   (photosynthesis) and develop a functional cuticle to prevent water loss.

### 13.3 Applications

- Mass production of ornamental plants (orchids, ferns) and crop plants (bananas, potatoes,
  strawberries).
- Production of disease-free plants (e.g., virus-free potatoes by culturing meristem tissue, which
  has low viral load).
- Conservation of endangered plant species.
- Production of secondary metabolites (e.g., shikonin, a dye, from cell cultures of _Lithospermum_).

### 13.4 Advantages and Disadvantages

| Advantages                                                  | Disadvantages                                                                   |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Large numbers of identical plants (clones) produced rapidly | Genetic uniformity makes all plants equally susceptible to the same disease     |
| Disease-free plants can be produced                         | Requires sterile conditions and skilled labour                                  |
| Year-round production, independent of seasons               | Expensive equipment and consumables                                             |
| Enables conservation of rare species                        | Somaclonal variation (genetic changes during tissue culture) can reduce quality |
| Small amount of parent tissue needed                        | Some species are difficult to culture                                           |

## 14. Fermentation and Bioreactors

### 14.1 Types of Fermentation

| Type       | Organism                           | Conditions                           | Products                 |
| ---------- | ---------------------------------- | ------------------------------------ | ------------------------ |
| Aerobic    | _Aspergillus niger_ (fungus)       | Aerate, $30$ degrees C, pH 2--3      | Citric acid              |
| Anaerobic  | _Saccharomyces cerevisiae_ (yeast) | No aeration, $30$ degrees C, pH 4--6 | Ethanol, $\mathrm{CO_2}$ |
| Continuous | _Escherichia coli_ (bacterium)     | Continuous nutrient supply           | Insulin, growth hormone  |

### 14.2 Batch vs Continuous Fermentation

| Feature            | Batch Fermentation                                                      | Continuous Fermentation                                                 |
| ------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Setup              | Fixed volume of medium; closed system                                   | Constant inflow of fresh medium; constant outflow of product            |
| Growth phases      | All four phases (lag, log, stationary, death) occur                     | Cells maintained in exponential (log) phase                             |
| Product yield      | Varies over time; harvest at end of run                                 | Constant, steady-state yield                                            |
| Contamination risk | Lower (sealed vessel)                                                   | Higher (open system for extended periods)                               |
| Cost               | Lower initial cost; labour-intensive                                    | Higher initial cost; automated                                          |
| Best for           | Secondary metabolites (e.g., antibiotics, produced in stationary phase) | Primary metabolites (e.g., insulin, produced during exponential growth) |

### 14.3 Optimising Fermentation Conditions

To maximise product yield, the following factors must be optimised:

- **Temperature**: affects enzyme activity and growth rate. Each organism has an optimum temperature
  (e.g., $37$ degrees C for _E. Coli_, $30$ degrees C for _S. Cerevisiae_). Fermentation generates
  heat, so cooling systems are needed.
- **pH**: affects enzyme activity and membrane transport. Buffers or acid/base addition maintain pH.
- **Oxygen concentration**: aerobic fermentations require continuous aeration (sparging with sterile
  air). Dissolved oxygen probes monitor $\mathrm{O_2}$ levels.
- **Nutrient concentration**: limiting nutrients can control growth rate (chemostat). Carbon,
  nitrogen, and phosphate sources must be optimised.
- **Stirring**: ensures uniform mixing of nutrients, temperature, and $\mathrm{O_2}$.
- **Foam control**: fermentation produces foam (from proteins and gas bubbles), which can block air
  filters and reduce vessel volume. Anti-foaming agents (silicone-based) are added automatically.

### 14.4 Downstream Processing

After fermentation, the product must be extracted and purified:

1. **Filtration or centrifugation**: separates cells from the culture medium.
2. **Cell disruption** (if product is intracellular): sonication, enzymatic lysis, or high-pressure
   homogenisation.
3. **Chromatography**: separates the product from other molecules based on size (gel filtration),
   charge (ion exchange), or affinity (affinity chromatography using a specific antibody or ligand).
4. **Ultrafiltration/diafiltration**: concentrates and desalts the product.

## 15. Ethical Issues in Biotechnology

### 15.1 Key Ethical Principles

| Principle                   | Description                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| **Beneficence**             | Technology should benefit humanity (e.g., curing disease, feeding the hungry)                      |
| **Non-maleficence**         | Technology should not cause harm (assessing risks of GM crops, gene therapy)                       |
| **Autonomy**                | Individuals have the right to make informed choices (e.g., informed consent for genetic testing)   |
| **Justice**                 | Benefits and risks should be distributed fairly (avoiding "genetic divide" between rich and poor)  |
| **Precautionary principle** | Where there is scientific uncertainty about potential harm, precautionary measures should be taken |

### 15.2 Genetic Testing and Screening

**Prenatal genetic testing** (amniocentesis, chorionic villus sampling) can detect chromosomal
abnormalities (e.g., Down syndrome) and single-gene disorders (e.g., cystic fibrosis, sickle cell
anaemia) before birth.

**Preimplantation genetic diagnosis (PGD)** involves testing embryos created by IVF for genetic
disorders before implantation. Only unaffected embryos are implanted.

**Ethical concerns:**

- Should parents be allowed to select embryos based on non-medical traits (sex, eye colour)? This is
  sometimes called "designer babies" and is illegal in many countries.
- What about disorders with variable penetrance (e.g., BRCA1 mutations increase breast cancer risk
  but do not guarantee it)?
- The psychological impact of genetic information on individuals and families.
- Genetic discrimination by employers or insurance companies (addressed by legislation such as the
  Genetic Information Nondiscrimination Act, GINA, in the US).

### 15.3 GM Crops: Weighing the Evidence

**Environmental concerns:**

- Gene flow to wild relatives could create "superweeds" (e.g., herbicide resistance transferred to
  weedy relatives of oilseed rape).
- Impact on non-target organisms (e.g., Bt toxin from GM maize may affect butterflies -- though
  field evidence is limited).
- Loss of biodiversity if GM monocultures replace diverse traditional varieties.

**Socioeconomic concerns:**

- Patents on GM seeds mean farmers must buy new seeds each year (cannot save seed), increasing
  dependence on multinational corporations.
- Smallholder farmers in developing countries may not benefit if the technology is too expensive.

**Scientific consensus:** the World Health Organization, the American Medical Association, and the
Royal Society have all concluded that GM foods currently available are safe to eat and no different
in safety from conventional foods. However, each new GM crop must be assessed on a case-by-case
basis.

## 16. The Microbiome in Health and Disease

### 16.1 Composition

The human gut microbiome consists of approximately $10^{13}$--$10^{14}$ bacteria from over 1000
species, predominantly from the phyla **Firmicutes** and **Bacteroidetes**. The microbiome varies
between individuals and is influenced by diet, age, medication (especially antibiotics), and
environment.

### 16.2 Functions of the Gut Microbiome

| Function                      | Mechanism                                                                                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fermentation of dietary fibre | Bacteria produce short-chain fatty acids (SCFAs): butyrate, propionate, acetate. Butyrate is the primary energy source for colonocytes and has anti-inflammatory properties. |
| Vitamin synthesis             | Bacteria synthesise vitamin K and several B vitamins (B12, folate, riboflavin, biotin).                                                                                      |
| Immune system development     | Bacterial antigens stimulate the development of gut-associated lymphoid tissue (GALT) and regulatory T cells.                                                                |
| Protection against pathogens  | Commensal bacteria compete with pathogens for nutrients and adhesion sites; they produce antimicrobial peptides (bacteriocins).                                              |
| Metabolism of xenobiotics     | Bacteria modify drugs and toxins, affecting their absorption, efficacy, and toxicity.                                                                                        |

### 16.3 Dysbiosis

**Dysbiosis** is a disruption of the normal composition of the microbiome, associated with:

- **Inflammatory bowel disease (IBD)**: reduced diversity; increased _Faecalibacterium prausnitzii_
  is protective.
- **Obesity**: altered Firmicutes:Bacteroidetes ratio (controversial; findings are inconsistent
  between studies).
- **Type 2 diabetes**: reduced abundance of butyrate-producing bacteria.
- **Mental health**: the "gut-brain axis" -- the vagus nerve and immune signals communicate between
  the gut and brain. Dysbiosis has been linked to anxiety, depression, and autism spectrum disorder.
- **Clostridioides difficile infection**: broad-spectrum antibiotics kill commensal bacteria,
  allowing _C. Difficile_ to overgrow. Treated with **faecal microbiota transplantation (FMT)** --
  transferring stool from a healthy donor to the patient's colon, which restores a healthy
  microbiome.

### 16.4 Probiotics and Prebiotics

**Probiotics** are live microorganisms (e.g., _Lactobacillus_, _Bifidobacterium_) that, when
administered in adequate amounts, confer a health benefit. Evidence supports their use for
antibiotic-associated diarrhoea and pouchitis.

**Prebiotics** are non-digestible food components (e.g., inulin, fructooligosaccharides) that
selectively stimulate the growth and activity of beneficial gut bacteria.

**Synbiotics** combine probiotics and prebiotics.

:::warning Common Pitfall Students often confuse antibiotics (which kill bacteria) with probiotics
(which add beneficial bacteria). Antibiotics can disrupt the microbiome and cause side effects
(diarrhoea, thrush). Probiotics may help restore the microbiome after antibiotic treatment, but they
should not be taken simultaneously with antibiotics (the antibiotic would kill the probiotic
bacteria).
:::

## 17. Genetically Modified Organisms: Case Studies

### 17.1 Bt Cotton

Bt cotton has been engineered to express a gene from the bacterium _Bacillus thuringiensis_ that
produces **Bt toxin** (Cry protein). When insect pests (e.g., cotton bollworm) ingest Bt cotton
tissue, the toxin is activated in their alkaline gut, binds to specific receptors on the gut
epithelial cells, and forms pores, causing cell lysis and death of the insect.

Advantages:

- Reduces the need for chemical insecticide sprays (beneficial for the environment and farmer
  health).
- Increases yield by reducing pest damage.
- Bt toxin is specific to certain insect groups and is harmless to humans, livestock, and most
  beneficial insects.

Disadvantages:

- Resistance can evolve in pest populations (refuges of non-Bt cotton are planted to maintain
  susceptible alleles in the pest population).
- Concerns about gene flow to wild relatives.
- Seeds are more expensive than conventional varieties.

### 17.2 Herbicide-Resistant Crops (Roundup Ready)

Crops engineered to be resistant to the herbicide glyphosate (Roundup) by expressing a
glyphosate-insensitive version of EPSP synthase (the enzyme glyphosate normally inhibits). This
allows farmers to spray glyphosate to kill weeds without harming the crop.

Advantages:

- Simplifies weed management (one herbicide kills all weeds).
- Reduces the need for tillage (reducing soil erosion).
- Enables no-till farming.

Disadvantages:

- Over-reliance on a single herbicide has selected for glyphosate-resistant weeds ("superweeds").
- Glyphosate residues may persist in soil and water.
- Concerns about effects on non-target organisms and human health (controversial; regulatory
  agencies consider glyphosate safe at approved levels).

### 17.3 GM Animals

**AquAdvantage salmon**: genetically modified Atlantic salmon that expresses a growth hormone gene
from Chinook salmon, regulated by an ocean pout antifreeze protein promoter. The salmon grows to
market size in approximately 18 months instead of 36 months. Approved for human consumption by the
FDA (USA) in 2015.

**Goats producing antithrombin**: goats engineered to express human antithrombin (a blood-clotting
protein) in their milk. The protein is purified from the milk and used to treat patients with
antithrombin deficiency.

## 18. Polymerase Chain Reaction: Advanced Topics

### 18.1 Quantitative PCR (qPCR)

**Quantitative PCR** (real-time PCR) allows the amount of DNA in a sample to be quantified by
measuring the increase in fluorescence during the amplification reaction.

Two main methods:

| Method        | Principle                                                                                                                                                                                  | Advantages                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| SYBR Green    | A fluorescent dye that binds to double-stranded DNA. Fluorescence increases as more dsDNA is produced.                                                                                     | Simple, cheap                                                      |
| TaqMan probes | A fluorescent probe with a reporter dye and a quencher. When the probe binds to the target sequence and is degraded by Taq polymerase's 5' exonuclease activity, fluorescence is released. | Highly specific; can distinguish between closely related sequences |

The **threshold cycle** ($C_t$) is the cycle number at which the fluorescence exceeds a set
threshold. A lower $C_t$ value indicates a higher starting concentration of the target DNA.

### 18.2 Calculations in qPCR

The amount of DNA doubles with each cycle: after $n$ cycles, the amount of DNA
$= \text{initial amount} \times 2^n$.

If Sample A has $C_t = 20$ and Sample B has $C_t = 26$The difference is 6 cycles. The starting
concentration of DNA in Sample A is $2^6 = 64$ times higher than in Sample B.

### 18.3 Reverse Transcription PCR (RT-PCR)

**RT-PCR** (not to be confused with real-time PCR/qPCR) is used to detect RNA. The process:

1. **Reverse transcription**: reverse transcriptase enzyme converts RNA into complementary DNA
   (cDNA).
2. **PCR**: the cDNA is amplified using standard PCR.

This technique is widely used to detect RNA viruses (e.g., SARS-CoV-2) and to measure gene
expression (by quantifying mRNA levels).

### 18.4 Primers: Design Considerations

Good PCR primers must:

| Criterion                   | Optimal Value              | Reason                                                            |
| --------------------------- | -------------------------- | ----------------------------------------------------------------- |
| Length                      | 18--25 bases               | Long enough for specificity, short enough for efficient binding   |
| Melting temperature ($T_m$) | 55--65 degrees C           | Both primers should have similar $T_m$                            |
| GC content                  | 40--60%                    | Ensures stable binding without excessive non-specific binding     |
| 3' end                      | End in G or C ("GC clamp") | Increases binding stability at the 3' end where extension begins  |
| Self-complementarity        | Avoid                      | Prevents primer-dimer formation (primers annealing to each other) |
| Repeated sequences          | Avoid                      | Reduces non-specific binding                                      |

## 19. DNA Fingerprinting: Advanced Applications

### 19.1 Short Tandem Repeats (STRs)

Modern DNA fingerprinting uses **short tandem repeats** (STRs) -- short (2--6 base pair) sequences
repeated in tandem. The number of repeats at a given locus varies between individuals.

The UK National DNA Database uses 10 standard STR loci. The probability of two unrelated individuals
having the same profile at all 10 loci is less than 1 in $10^{13}$ (one in ten trillion).

### 19.2 PCR in Forensics

PCR is essential in forensic DNA analysis because:

- Crime scene samples often contain very small amounts of DNA (trace DNA from skin cells, hair
  roots, or bodily fluids).
- PCR can amplify the DNA from a single cell to a detectable amount (approximately $10^9$ copies).
- STR loci are short enough to be amplified even from degraded DNA.

### 19.3 Worked Example: DNA Profile Probability

A suspect's DNA profile matches the crime scene sample at 10 STR loci. The frequency of each allele
in the population is:

| Locus   | Genotype | Population Frequency        |
| ------- | -------- | --------------------------- |
| D3S1358 | 15, 16   | 0.08 $\times$ 0.06 = 0.0048 |
| vWA     | 17, 18   | 0.10 $\times$ 0.12 = 0.012  |
| FGA     | 22, 24   | 0.15 $\times$ 0.04 = 0.006  |
| ...     | ...      | ...                         |
| D18S51  | 13, 16   | 0.07 $\times$ 0.09 = 0.0063 |

The match probability is the product of the frequencies at all 10 loci. If the average frequency per
locus is approximately $0.005$Then:

$\text{Match probability} = (0.005)^{10} = 9.77 \times 10^{-24}$.

This means the probability of a random person matching the DNA profile is approximately 1 in
$10^{23}$Making it virtually certain that the suspect is the source of the DNA.

## 20. Cloning Organisms

### 20.1 Reproductive Cloning (Somatic Cell Nuclear Transfer)

**Dolly the sheep** (1996) was the first mammal cloned from an adult somatic cell:

1. A somatic cell (udder cell) was taken from the donor sheep and cultured.
2. An enucleated egg cell (egg cell with its nucleus removed) was taken from a second sheep.
3. The donor nucleus was inserted into the enucleated egg by electrofusion.
4. The reconstructed egg was stimulated with an electric shock to initiate cell division.
5. The resulting embryo was implanted into a surrogate mother.
6. Dolly was born and was genetically identical to the donor sheep (the udder cell donor).

### 20.2 Therapeutic Cloning

Therapeutic cloning uses the same SCNT technique but the embryo is not implanted. Instead, embryonic
stem cells are harvested from the blastocyst (at approximately 5--7 days) and used to grow tissues
or organs for medical treatment. Because the stem cells are genetically identical to the patient,
they would not be rejected by the immune system.

### 20.3 Natural Cloning in Plants

Plants can reproduce asexually (vegetatively) by various methods:

| Method            | Description                                                                          | Examples                 |
| ----------------- | ------------------------------------------------------------------------------------ | ------------------------ |
| Runners (stolons) | Horizontal stems growing along the ground that produce new roots and shoots at nodes | Strawberry, spider plant |
| Tubers            | Swollen underground stems that can sprout new shoots                                 | Potato                   |
| Bulbs             | Underground food storage organs with fleshy leaf bases                               | Onion, daffodil, tulip   |
| Corms             | Swollen underground stem bases                                                       | Crocus, gladiolus        |
| Cuttings          | Pieces of stem or leaf that develop roots when placed in moist conditions            | Geranium, sugar cane     |
| Grafting          | Joining a scion (shoot) to a rootstock of another plant                              | Apple, rose, citrus      |

All of these methods produce **clones** -- genetically identical offspring. This is advantageous
because:

- Desirable characteristics are preserved exactly.
- Rapid reproduction without the need for pollination and seed formation.
- Offspring are mature faster than from seed.

However, there is no genetic variation, so all clones are equally susceptible to the same diseases
and environmental changes.

## 21. Proteomics and Metabolomics

### 21.1 Proteomics

**Proteomics** is the large-scale study of the complete set of proteins (the **proteome**) produced
by a genome, tissue, or cell at a given time under specific conditions.

While the genome is fixed, the proteome is dynamic -- it changes with development, disease, and
environmental conditions due to alternative splicing, post-translational modifications, and
differential gene expression.

Techniques used in proteomics:

| Technique              | Purpose                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------- |
| 2D gel electrophoresis | Separates proteins by charge (first dimension) and by molecular mass (second dimension) |
| Mass spectrometry      | Identifies proteins by measuring the mass-to-charge ratio of peptide fragments          |
| Protein microarrays    | Detect protein-protein interactions and measure protein expression levels               |
| X-ray crystallography  | Determines the 3D structure of proteins                                                 |

### 21.2 Metabolomics

**Metabolomics** is the study of the complete set of small molecule metabolites (the **metabolome**)
within a biological sample. Metabolomics provides a snapshot of the cell's current metabolic state.

Applications:

- **Biomarker discovery**: identifying metabolites whose concentration changes in disease (e.g.,
  elevated glucose in diabetes, altered amino acid profiles in cancer).
- **Drug discovery**: screening for metabolites with therapeutic potential.
- **Nutritional science**: understanding how diet affects metabolism.
- **Environmental toxicology**: detecting metabolic changes caused by exposure to pollutants.

:::warning Common Pitfall Students often use the terms "genome," "transcriptome," "proteome," and
"metabolome" interchangeably. Remember the hierarchy: the genome is the set of all genes (DNA); the
transcriptome is the set of all mRNA molecules produced; the proteome is the set of all proteins;
the metabolome is the set of all small molecule metabolites. Each level is more dynamic and complex
than the one above it.

## 26. Industrial Biotechnology: Case Studies

### 26.1 Penicillin Production

**Organism:** _Penicillium chrysogenum_ (a fungus).

**Process:**

1. _Penicillium_ is grown in large fermenters (bioreactors) containing a nutrient medium (sugar
   source, nitrogen source, minerals, precursors such as phenylacetic acid).
2. Conditions: temperature 25--27 degrees C; pH 6.5--7.0; continuous aeration (the fungus is
   aerobic); agitation to ensure mixing and gas exchange.
3. Penicillin is a **secondary metabolite** -- it is produced during the stationary phase of growth,
   when the primary nutrient (glucose) is depleted and the fungus begins to use stored nutrients.
   This means batch culture is used (not continuous), because the organism must be harvested after
   the stationary phase.
4. Penicillin is excreted into the medium and extracted by downstream processing (filtration,
   solvent extraction, chromatography, crystallisation).

**Key challenge:** penicillin is sensitive to pH (it is hydrolysed at acidic or alkaline pH). The
fermentation must be carefully controlled to maintain the optimum pH. The original strain produced
very low yields ($\approx 2\ \mathrm{mg\ L^{-1}}$); modern strains (after extensive mutation and
selection programmes) produce over $50\ \mathrm{g\ L^{-1}}$.

### 26.2 Insulin Production by Recombinant _E. Coli_

**Process:**

1. The human insulin gene (or genes for A and B chains) is inserted into a plasmid vector.
2. The recombinant plasmid is transformed into _E. Coli_.
3. _E. Coli_ is grown in large fermenters under controlled conditions.
4. The insulin protein is produced as **inclusion bodies** (insoluble aggregates in the cytoplasm)
   because it is a eukaryotic protein that does not fold correctly in _E. Coli_.
5. The inclusion bodies must be solubilised (using denaturants such as urea), and the insulin must
   be refolded and enzymatically processed (A and B chains are joined by disulphide bonds) to
   produce functional insulin.

**Yield:** modern processes produce approximately 100 mg of insulin per litre of culture.

### 26.3 Bioremediation

**Bioremediation** uses microorganisms to clean up pollution:

| Pollutant         | Microorganism                     | Mechanism                                                                                 |
| ----------------- | --------------------------------- | ----------------------------------------------------------------------------------------- |
| Oil spills        | _Pseudomonas_ spp., _Alcanivorax_ | Degrade hydrocarbons in crude oil into $\mathrm{CO_2}$ and water                          |
| Heavy metals      | _Geobacter_ spp.                  | Reduce $\mathrm{U^{6+}}$ to $\mathrm{U^{4+}}$Making uranium insoluble and immobilising it |
| Pesticides        | _Bacillus_ spp.                   | Produce enzymes that break down organophosphate pesticides                                |
| Sewage            | Mixed microbial communities       | Degrade organic matter in primary and secondary treatment                                 |
| Plastic pollution | _Ideonella sakaiensis_            | Produces PETase enzyme that breaks down PET plastic                                       |

**Advantages of bioremediation:** relatively cheap; environmentally friendly (compared to physical
or chemical methods); can be used in situ (at the contaminated site).

**Limitations:** microorganisms require specific conditions (temperature, pH, nutrients, oxygen);
degradation may produce toxic intermediates; may be slower than physical removal.

---

:::
:::tip Diagnostic Test

## 25. Ethical Frameworks for Biotechnology Decisions

### 25.1 Applying Ethical Principles to Specific Cases

**Case 1: Using CRISPR to edit human embryos.**

| Principle       | Analysis                                                                             |
| --------------- | ------------------------------------------------------------------------------------ |
| Beneficence     | Could eliminate devastating genetic diseases (cystic fibrosis, Huntington's disease) |
| Non-maleficence | Off-target effects could cause new diseases; unknown long-term consequences          |
| Autonomy        | The embryo cannot consent; future generations cannot consent to heritable changes    |
| Justice         | Initially only available to the wealthy; could exacerbate health inequalities        |

**Case 2: Genetically modified mosquitoes to eliminate malaria.**

| Principle       | Analysis                                                                                                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Beneficence     | Could save hundreds of thousands of lives per year                                                                                            |
| Non-maleficence | Gene drives could have unintended ecological consequences; eliminating a species could affect food webs                                       |
| Autonomy        | People in affected areas may not have been consulted                                                                                          |
| Justice         | Benefits and risks are distributed unevenly (people in Africa bear the ecological risk; people in developed countries develop the technology) |

### 25.2 The Precautionary Principle in Practice

The precautionary principle states that if an action or policy has a suspected risk of causing
severe or irreversible harm to the public or the environment, the burden of proof falls on those
advocating for the action to demonstrate that it is safe, rather than on those opposing it to
demonstrate that it is harmful.

Application to biotechnology:

- **GM crops**: proponents argue that GM crops have been consumed for decades without evidence of
  harm; opponents argue that long-term ecological effects cannot yet be known and that precaution
  requires more testing before widespread adoption.
- **Gene drives**: the potential for irreversible ecological harm (eliminating a species) means that
  strict precautionary measures (contained field trials, reversible gene drives) are warranted.
- **Germline gene editing**: the heritable and irreversible nature of germline changes means that
  most countries apply the precautionary principle by prohibiting germline editing.

### 25.3 Balancing Risks and Benefits: A Decision Matrix

When evaluating a biotechnology application, consider:

1. **Severity of the problem**: how many people are affected? How severe is the disease or
   condition?
2. **Availability of alternatives**: are there existing treatments or approaches that could address
   the problem?
3. **Probability of success**: how likely is the biotechnology to work as intended?
4. **Severity of potential harm**: what are the worst-case scenarios?
5. **Reversibility**: can the intervention be reversed if things go wrong?
6. **Distribution of benefits and risks**: who benefits and who bears the risks?
7. **Public acceptance**: is there public support for the technology?

---


:::
:::tip Diagnostic Test

## 22. CRISPR-Cas9: Mechanism and Applications in Detail

### 22.1 The CRISPR-Cas9 System

CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a bacterial adaptive immune
system that has been repurposed as a genome editing tool. The system has two key components:

1. **Guide RNA (gRNA)**: a synthetic RNA molecule consisting of a CRISPR RNA (crRNA) component that
   is complementary to the target DNA sequence (approximately 20 nucleotides), and a
   trans-activating crRNA (tracrRNA) component that binds to the Cas9 protein.

2. **Cas9 endonuclease**: a protein that cuts both strands of the DNA double helix at the site
   specified by the gRNA. Cas9 binds to the gRNA, and the gRNA guides Cas9 to the target DNA
   sequence by complementary base pairing.

**Mechanism:**

1. The gRNA-Cas9 complex scans the DNA for a **PAM sequence** (protospacer adjacent motif), which
   for _Streptococcus pyogenes_ Cas9 is 5'-NGG-3'.
2. When the PAM is found, Cas9 unwinds the DNA adjacent to the PAM.
3. The gRNA base-pairs with the target DNA sequence (approximately 20 nucleotides upstream of the
   PAM).
4. If base-pairing is sufficiently complementary, Cas9 makes a **double-strand break (DSB)** 3 base
   pairs upstream of the PAM.

### 22.2 Repair of the Double-Strand Break

After Cas9 creates a DSB, the cell repairs it using one of two mechanisms:

| Repair Mechanism                  | Outcome                                                                                    | Use in Gene Editing                                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Non-homologous end joining (NHEJ) | The broken ends are rejoined, often with small insertions or deletions (indels)            | **Gene knockout**: the indels cause a frameshift, producing a non-functional protein                           |
| Homology-directed repair (HDR)    | A DNA template with homology to the sequences flanking the break is used as a repair guide | **Gene knock-in**: a specific sequence (e.g., a corrected gene, a reporter gene) is inserted at the break site |

HDR is less efficient than NHEJ and requires a donor DNA template. It occurs during the S and G2
phases of the cell cycle (when sister chromatids are available as templates).

### 22.3 Applications

| Application                     | Description                                                                                        | Status                                   |
| ------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Sickle cell disease therapy     | Correcting the $\beta$-globin gene mutation in haematopoietic stem cells                           | Clinical trials; promising early results |
| Cancer immunotherapy            | Editing T cells to remove PD-1 receptor (preventing tumour cells from suppressing immune response) | Clinical trials                          |
| Diagnostics (SHERLOCK, DETECTR) | Using Cas12/Cas13 collateral cleavage activity to detect specific RNA/DNA sequences                | Rapid COVID-19 tests developed           |
| Gene drives                     | Spreading a gene through a wild population (e.g., making malaria mosquitoes sterile)               | Proof of concept; controversial          |
| Agriculture                     | Drought-resistant wheat, disease-resistant rice, non-browning mushrooms                            | Approved in USA (2022)                   |

### 22.4 Off-Target Effects and Ethical Concerns

**Off-target effects**: Cas9 may cut at sites other than the intended target if the gRNA has
sufficient complementarity to other genomic sequences. This could cause unintended mutations,
potentially activating oncogenes or disrupting tumour suppressor genes.

Mitigation strategies:

- Careful gRNA design (minimising homology to other genomic sites).
- Using modified Cas9 variants with higher fidelity (e.g., eSpCas9, HiFi Cas9).
- Delivering Cas9 as a ribonucleoprotein (RNP) complex (reduces the time Cas9 is active in the
  cell).

**Ethical concerns:**

- **Germline editing**: editing the human germline (sperm, eggs, or embryos) is currently illegal in
  most countries. Changes would be heritable.
- **Designer babies**: the potential to select for non-medical traits (intelligence, physical
  appearance) raises serious ethical concerns about equity, consent, and the nature of human
  identity.
- **Ecological risks**: gene drives could have unintended consequences for ecosystems (e.g.,
  eliminating a mosquito species could affect food webs).
- **Equity**: gene therapy treatments are extremely expensive ($\approx \$1$--$2 million per
  patient), creating a "genetic divide" between rich and poor.

## 23. Genetic Engineering: Detailed Protocol

### 23.1 Step-by-Step: Making Recombinant Insulin

1. **Isolate the human insulin gene**: the gene for human insulin (or its A and B chain coding
   sequences) is identified using the known amino acid sequence (reverse translation using the
   genetic code). Alternatively, the gene is obtained from a cDNA library (complementary DNA
   synthesised from human pancreatic mRNA by reverse transcriptase).

2. **Prepare the vector**: a plasmid (e.g., pBR322) is isolated from _E. Coli_. The plasmid is cut
   with the same restriction enzyme(s) used to excise the insulin gene, creating complementary
   sticky ends.

3. **Ligate**: the insulin gene is mixed with the cut plasmid and DNA ligase, which joins the gene
   into the plasmid at the restriction site. The resulting recombinant plasmid contains the insulin
   gene.

4. **Transform**: the recombinant plasmid is introduced into _E. Coli_ cells by:

- **Heat shock**: cells are made competent (treated with $\mathrm{CaCl_2}$ to make the membrane
  permeable), mixed with plasmid DNA, and heated to $42$ degrees C for 90 seconds (causes the
  membrane to become transiently permeable).
- **Electroporation**: an electric pulse creates temporary pores in the cell membrane.

5. **Select**: transformed bacteria are grown on agar plates containing an antibiotic (e.g.,
   ampicillin). Only bacteria that have taken up the plasmid (which carries an ampicillin resistance
   gene) survive.

6. **Screen**: to confirm that the plasmid contains the insulin gene (not just religated plasmid
   without the insert), colonies are screened by:

- **Blue-white screening** (if using a plasmid with lacZ gene): colonies with the insert are white;
  colonies without the insert are blue.
- **Colony PCR**: amplifying the insert region from bacterial colonies using primers flanking the
  cloning site.
- **Restriction digest analysis**: isolating plasmid DNA and cutting with restriction enzymes to
  check for the correct insert size.

7. **Culture and harvest**: confirmed recombinant bacteria are grown in large fermenters. The
   bacteria express the insulin gene, producing proinsulin (or the A and B chains separately).

8. **Purify**: the insulin protein is extracted from the bacteria and purified by chromatography.

### 23.2 Advantages of Recombinant Human Insulin over Animal Insulin

| Feature             | Recombinant Human Insulin           | Animal Insulin (pig/cow)                          |
| ------------------- | ----------------------------------- | ------------------------------------------------- |
| Amino acid sequence | Identical to human insulin          | Slightly different (1--3 amino acid differences)  |
| Allergic reactions  | Rare (identical to human protein)   | More common (immune system recognises as foreign) |
| Supply              | Unlimited (bacteria grow rapidly)   | Limited (requires slaughter of animals)           |
| Consistency         | Uniform product from batch to batch | Variable (depends on source animal)               |
| Cost                | Lower (once established)            | Higher (animal farming costs)                     |
| Ethical concerns    | Fewer (no animal slaughter)         | Animal welfare concerns                           |

## 24. Bioinformatics: Worked Examples

### 24.1 Calculating Pairwise Sequence Identity

Two DNA sequences are aligned:

Sequence A: 5'-ATG CCT AGG TCA GCT AGA TCC-3' Sequence B: 5'-ATG CCT AAG TCA GCA AGA TCC-3'

Alignment (vertical bars indicate matches):

```
ATG CCT A|GG| TCA GC|T| AGA TCC
ATG CCT A|AG| TCA GC|A| AGA TCC
```

Matches: 18 out of 21 positions match. Pairwise identity $= \frac{18}{21} = 85.7\%$.

The two sequences differ at positions 10 (G vs A) and 16 (T vs A). Both are transitions (purine
$\leftrightarrow$ purine or pyrimidine $\leftrightarrow$ pyrimidine), which are more common than
transversions (purine $\leftrightarrow$ pyrimidine).

### 24.2 Translating an Open Reading Frame

Given the DNA sequence: 5'-ATG CCA AGG TCA GCT AGA TCC TAA-3'

Translate in the correct reading frame:

| Codon | Amino Acid  |
| ----- | ----------- |
| ATG   | Met (start) |
| CCA   | Pro         |
| AGG   | Arg         |
| TCA   | Ser         |
| GCT   | Ala         |
| AGA   | Arg         |
| TCC   | Ser         |
| TAA   | Stop        |

The protein is: Met-Pro-Arg-Ser-Ala-Arg-Ser (7 amino acids, 21 nucleotides of coding sequence plus 3
for the stop codon $= 24$ nucleotides).

## 28. Antibiotic Resistance: Detailed Analysis

### 28.1 Mechanisms of Resistance

| Mechanism             | Genetic Basis                            | Example                                          |
| --------------------- | ---------------------------------------- | ------------------------------------------------ |
| Enzymatic destruction | Plasmid-borne $\beta$-lactamase gene     | ESBL-producing _E. Coli_                         |
| Target modification   | Mutations in penicillin-binding proteins | MRSA (_mecA_ gene)                               |
| Reduced permeability  | Mutations in porin proteins              | _Pseudomonas aeruginosa_ (carbapenem resistance) |
| Active efflux         | Overexpression of efflux pump genes      | _E. Coli_ (multidrug resistance)                 |
| Alternative pathway   | Mutation in target enzyme                | _M. Tuberculosis_ (rifampicin resistance)        |

### 28.2 Horizontal Gene Transfer of Resistance

| Method         | Description                                      | Example                                                  |
| -------------- | ------------------------------------------------ | -------------------------------------------------------- |
| Conjugation    | Cell-to-cell contact via pilus; plasmid transfer | R plasmid transferred between _E. Coli_ and _Klebsiella_ |
| Transformation | Uptake of free DNA from environment              | _S. Pneumoniae_ acquiring penicillin resistance          |
| Transduction   | Bacteriophage transfers bacterial DNA            | Phage-mediated toxin gene transfer in _C. Diphtheriae_   |

### 28.3 The Antibiotic Resistance Crisis

- At least 700,000 people die annually from drug-resistant infections worldwide (WHO, 2019).
- Some bacteria are now pan-resistant (resistant to all known antibiotics).
- Strategies: antibiotic stewardship, infection control, rapid diagnostics, new drug development,
  phage therapy.

## 29. Microbiome Applications in Biotechnology

### 29.1 The Human Microbiome

The human microbiome consists of approximately $10^{13}$--$10^{14}$ microorganisms (bacteria,
archaea, fungi, viruses) residing on and in the human body. The gut microbiome alone contains
approximately 3 million unique genes (150 times the human genome).

| Body Site       | Dominant Organisms                                | Functions                                                                   |
| --------------- | ------------------------------------------------- | --------------------------------------------------------------------------- |
| Large intestine | _Bacteroidetes_, _Firmicutes_, _Actinobacteria_   | Fermentation of dietary fibre; vitamin K and B synthesis; immune modulation |
| Skin            | _Staphylococcus_, _Corynebacterium_, _Malassezia_ | Pathogen colonisation resistance; wound healing                             |
| Oral cavity     | _Streptococcus_, _Veillonella_, _Fusobacterium_   | Biofilm formation; pH regulation                                            |
| Vagina          | _Lactobacillus_ spp.                              | Lactic acid production (low pH inhibits pathogens)                          |

### 29.2 Faecal Microbiota Transplantation (FMT)

FMT involves transferring faecal material from a healthy donor to a patient to restore a healthy gut
microbiome. It is most effective for treating recurrent _Clostridium difficile_ infection (cure
rate > 90%), which often develops after broad-spectrum antibiotic treatment destroys the normal gut
microbiota.

Mechanism: the donor microbiota outcompetes _C. Difficile_ for nutrients and adhesion sites,
produces antimicrobial substances, and restores colonisation resistance.

### 29.3 Probiotics and Prebiotics

- **Probiotics**: live microorganisms that confer a health benefit when consumed in adequate amounts
  (e.g., _Lactobacillus rhamnosus_ GG for diarrhoea prevention; _Bifidobacterium_ for immune
  support).
- **Prebiotics**: substrates that are selectively utilised by host microorganisms to confer a health
  benefit (e.g., inulin, fructo-oligosaccharides, galacto-oligosaccharides).
- **Synbiotics**: products combining probiotics and prebiotics.

## 30. Advanced Genetic Engineering Techniques

### 30.1 RNA Interference (RNAi)

RNAi is a natural gene regulation mechanism that has been exploited as a biotechnology tool:

1. Double-stranded RNA (dsRNA) complementary to the target mRNA is introduced into the cell.
2. The enzyme **Dicer** cleaves the dsRNA into small interfering RNAs (siRNAs), approximately 21--23
   nucleotides long.
3. The siRNA is loaded into the **RNA-induced silencing complex (RISC)**.
4. RISC uses the siRNA as a guide to find complementary mRNA and cleaves it, preventing translation.

Applications: gene knockdown in research; pest-resistant crops (e.g., GM papaya resistant to papaya
ringspot virus); potential therapeutic applications (e.g., patisiran for hereditary transthyretin
amyloidosis).

### 30.2 Induced Pluripotent Stem Cells (iPSCs)

IPSCs are adult somatic cells that have been reprogrammed to a pluripotent state by introducing four
transcription factors (Oct4, Sox2, Klf4, c-Myc -- the "Yamanaka factors"). IPSCs can differentiate
into any cell type, offering potential for:

- **Disease modelling**: creating patient-specific cell lines to study disease mechanisms.
- **Drug testing**: testing drug efficacy and toxicity on patient-specific cells.
- **Regenerative medicine**: generating replacement cells or tissues (e.g., dopamine neurons for
  Parkinson's disease, cardiomyocytes for heart repair).
- **Gene therapy**: correcting genetic defects in iPSCs and then differentiating them into the
  required cell type for transplantation.

### 30.3 Synthetic Biology

Synthetic biology involves designing and constructing new biological parts, devices, and systems, or
redesigning existing natural biological systems:

| Application           | Description                                                                                        | Status                                   |
| --------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Synthetic genomes     | Complete chemical synthesis of bacterial genomes (_Mycoplasma mycoides_ JCVI-syn3.0, 473 genes)    | Proof of concept (2010)                  |
| Genetic circuits      | Engineered regulatory networks (toggle switches, oscillators, logic gates)                         | Research                                 |
| Metabolic engineering | Engineering microorganisms to produce biofuels, pharmaceuticals, or chemicals                      | Commercial (artemisinin, 1,4-butanediol) |
| Biosensors            | Engineered organisms that detect environmental pollutants or disease biomarkers                    | Research/clinical trials                 |
| Xenobiology           | Using alternative nucleotides (XNA) or amino acids to create organisms with expanded genetic codes | Research                                 |

## 31. Environmental Biotechnology

### 31.1 Bioremediation Techniques

| Technique              | Description                                                   | Application                                                            |
| ---------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| In situ bioremediation | Treatment at the contaminated site without excavation         | Oil spill cleanup; groundwater decontamination                         |
| Ex situ bioremediation | Contaminated material is excavated and treated elsewhere      | Soil washing; biopiles; bioreactors                                    |
| Bioaugmentation        | Adding specific microorganisms to enhance degradation         | _Pseudomonas_ for hydrocarbon degradation                              |
| Biostimulation         | Adding nutrients or oxygen to stimulate native microorganisms | Adding nitrates and phosphates to oil-contaminated soil                |
| Phytoremediation       | Using plants to absorb, accumulate, or degrade pollutants     | Sunflowers for uranium absorption; willow trees for organic pollutants |

### 31.2 Biosensors

Biosensors use biological components to detect specific substances:

| Component                      | Function                                                     | Example                                                                          |
| ------------------------------ | ------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| Biological recognition element | Binds specifically to the target analyte                     | Enzyme (glucose oxidase for blood glucose); antibody; DNA probe; whole cell      |
| Transducer                     | Converts the biological interaction into a measurable signal | Electrode (electrochemical); optical fibre (fluorescence); piezoelectric crystal |
| Detector                       | Amplifies and displays the signal                            | Digital readout; computer interface                                              |

**Applications:**

- **Medical diagnostics**: glucose monitors for diabetes (glucose oxidase electrode); pregnancy
  tests (monoclonal antibodies to hCG).
- **Environmental monitoring**: detecting pesticides, heavy metals, BOD (biochemical oxygen demand)
  in water.
- **Food safety**: detecting pathogens (e.g., _Salmonella_, _E. Coli_ O157) in food samples.
- **Biodefence**: detecting anthrax, smallpox, or other biological weapons.

### 31.3 Bioprocessing and Downstream Processing

After fermentation, the desired product must be extracted and purified:

| Step             | Purpose                              | Methods                                                                  |
| ---------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| Cell separation  | Remove cells from fermentation broth | Centrifugation; filtration (microfiltration, ultrafiltration)            |
| Cell disruption  | Release intracellular products       | High-pressure homogenisation; sonication; enzymatic lysis                |
| Product recovery | Isolate the product from the broth   | Precipitation (ammonium sulphate); liquid-liquid extraction              |
| Purification     | Remove impurities                    | Chromatography (affinity, ion exchange, size exclusion); electrophoresis |
| Polishing        | Achieve final product quality        | Ultrafiltration; crystallisation; lyophilisation (freeze-drying)         |

### 31.4 Scaling Up: From Lab to Industrial Fermenter

| Factor              | Lab Scale                  | Industrial Scale                                              |
| ------------------- | -------------------------- | ------------------------------------------------------------- |
| Volume              | < 10 L                     | 10,000--500,000 L                                             |
| Aeration            | Shaking or simple sparging | Sterile air at controlled flow rate                           |
| Temperature control | Water bath or incubator    | Jacketed vessel with cooling water                            |
| pH control          | Manual or simple buffer    | Automated acid/base addition                                  |
| Sterilisation       | Autoclave                  | Steam-in-place (SIP) at 121 degrees C for 30+ minutes         |
| Monitoring          | Manual sampling            | Online probes (pH, dissolved $\mathrm{O_2}$Temperature, foam) |

## 32. Genomics and Personalised Medicine

### 32.1 The Human Genome Project

The Human Genome Project (HGP, 1990--2003) sequenced the entire human genome:

- Approximately 3.2 billion base pairs.
- Approximately 20,000--25,000 protein-coding genes (far fewer than originally predicted).
- Only approximately 1.5% of the genome codes for proteins.
- Approximately 50% of the genome consists of repetitive sequences (transposons, LINEs, SINEs).
- Single nucleotide polymorphisms (SNPs) occur approximately every 300 base pairs; approximately 10
  million common SNPs in the human population.

### 32.2 Pharmacogenomics

Pharmacogenomics uses genetic information to predict an individual's response to drugs:

| Drug                       | Genetic Factor                      | Effect                                                                                            | Clinical Application                                          |
| -------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Warfarin (anticoagulant)   | Variants in CYP2C9 and VKORC1 genes | Affects dose required; some individuals metabolise warfarin more slowly, increasing bleeding risk | Genotype-guided dosing improves safety                        |
| Abacavir (HIV drug)        | HLA-B\*57:01 allele                 | Increased risk of severe hypersensitivity reaction                                                | Genetic testing before prescribing prevents adverse reactions |
| Codeine                    | CYP2D6 polymorphism                 | Poor metabolisers get no pain relief; ultra-rapid metabolisers may experience toxicity            | Genetic testing guides opioid selection                       |
| Clopidogrel (antiplatelet) | CYP2C19 loss-of-function alleles    | Reduced activation of prodrug; increased risk of cardiovascular events                            | Alternative antiplatelet drugs for poor metabolisers          |
| Herceptin (breast cancer)  | HER2 gene amplification             | Drug is only effective in tumours with HER2 overexpression                                        | HER2 testing selects patients who will benefit                |

### 32.3 Personalised Medicine: Benefits and Challenges

**Benefits:**

- More effective treatments (right drug, right dose, right patient).
- Fewer adverse drug reactions.
- Earlier disease detection (genetic screening for cancer susceptibility).
- Targeted therapies (e.g., imatinib for chronic myeloid leukaemia with BCR-ABL fusion gene).

**Challenges:**

- Cost: whole genome sequencing and genetic testing are expensive (though costs are falling
  rapidly).
- Data privacy: genetic information is highly personal; concerns about insurance discrimination and
  data security.
- Ethical issues: genetic testing may reveal unexpected findings (e.g., risk of untreatable
  diseases); consent and counselling are essential.
- Equity: personalised medicine may widen health inequalities if only available to wealthy
  individuals or countries.
- Interpretation: many genetic variants have uncertain clinical significance; distinguishing
  pathogenic from benign variants is challenging.

### 32.4 Bioinformatics Tools

| Tool/Database | Purpose                                                                       | URL                    |
| ------------- | ----------------------------------------------------------------------------- | ---------------------- |
| BLAST         | Compare a DNA or protein sequence against databases to find similar sequences | blast.ncbi.nlm.nih.gov |
| Ensembl       | Genome browser; annotation of genes, regulatory elements, variants            | ensembl.org            |
| OMIM          | Catalogue of human genes and genetic disorders                                | omim.org               |
| UniProt       | Protein sequences, function, and structure information                        | uniprot.org            |
| PDB           | 3D structures of proteins, nucleic acids, and complexes                       | rcsb.org               |
| Gene Ontology | Standardised vocabulary for gene and protein function                         | geneontology.org       |

## 33. Tissue Culture and Micropropagation

### 33.1 Plant Tissue Culture

Plant tissue culture involves growing plant cells, tissues, or organs on an artificial nutrient
medium under aseptic (sterile) conditions:

1. **Explant selection**: a small piece of plant tissue (leaf disc, stem segment, meristem) is taken
   from the parent plant.
2. **Surface sterilisation**: the explant is sterilised (e.g., with dilute bleach or ethanol) to
   remove surface contaminants.
3. **Callus formation**: the explant is placed on a nutrient medium containing auxin and cytokinin
   (plant growth regulators). The cells divide and form an undifferentiated mass of cells called a
   **callus**.
4. **Organogenesis or somatic embryogenesis**: by adjusting the ratio of auxin to cytokinin, the
   callus can be induced to form shoots (high cytokinin:auxin ratio) or roots (high auxin:cytokinin
   ratio).
5. **Acclimatisation**: plantlets are transferred to soil and gradually exposed to normal
   environmental conditions (lower humidity, higher light).

**Applications:**

- Mass propagation of elite varieties (orchids, bananas, strawberries).
- Production of disease-free plants (meristem culture: the meristem is virus-free because it has no
  vascular tissue).
- Conservation of endangered species (cryopreservation of plant tissue).
- Production of secondary metabolites (e.g., shikonin from _Lithospermum_ for use in dyes and
  medicines).

### 33.2 Animal Cell Culture

Animal cells are grown in vitro for research, drug testing, and biotechnology:

| Requirement              | Description                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Growth medium            | Contains amino acids, vitamins, glucose, salts, and 5--10% foetal bovine serum (FBS, provides growth factors and hormones)                    |
| Incubator                | 37 degrees C; 5% $\mathrm{CO_2}$ (maintains pH of the medium via bicarbonate buffer system)                                                   |
| Sterile conditions       | Laminar flow cabinet; antibiotics/antimycotics in medium                                                                                      |
| Substrate                | Most animal cells are anchorage-dependent (must attach to a surface to divide); tissue culture flasks are coated with collagen or poly-lysine |
| Subculturing (passaging) | When cells reach confluence (cover the entire surface), they are detached using trypsin and transferred to a new flask                        |

**Cell line types:**

- **Primary cell cultures**: derived directly from tissue; limited lifespan (senesce after
  approximately 50 divisions -- the Hayflick limit).
- **Immortalised cell lines**: have acquired mutations that bypass senescence; can divide
  indefinitely. Examples: HeLa cells (cervical cancer cells, derived from Henrietta Lacks in 1951);
  CHO cells (Chinese hamster ovary cells, used for recombinant protein production).

### 33.3 Hybridoma Technology (Monoclonal Antibody Production)

1. A mouse is immunised with the target antigen.
2. B cells (antibody-producing) are extracted from the mouse's spleen.
3. The B cells are fused with myeloma cells (immortal cancer cells) using polyethylene glycol (PEG)
   or electrofusion.
4. The resulting hybrid cells (hybridomas) are selected using HAT medium: only hybridomas survive
   (myeloma cells lack HGPRT enzyme and die; unfused B cells have limited lifespan and die).
5. Individual hybridoma cells are cloned (by limiting dilution) to produce monoclonal populations,
   each producing a single specific antibody.
6. The monoclonal antibodies are harvested from the culture medium (or from the ascites fluid of
   mice injected with the hybridoma).

**Applications of monoclonal antibodies:**

- **Medical diagnosis**: pregnancy tests (anti-hCG); detecting HIV, hepatitis, and other infections;
  blood typing.
- **Therapy**: trastuzumab (Herceptin) for HER2-positive breast cancer; rituximab for B-cell
  lymphoma; adalimumab (anti-TNF-$\alpha$) for rheumatoid arthritis.
- **Research**: identifying and locating specific proteins (immunofluorescence, Western blotting,
  IHC).
- **Purification**: affinity chromatography using antibody-coated columns.

## 34. Gene Therapy

### 34.1 Types of Gene Therapy

| Type                   | Description                                                            | Advantages                                                                   | Disadvantages                                                                                                            |
| ---------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Somatic gene therapy   | Correcting the gene in body (somatic) cells; changes are not inherited | Treats the individual; does not affect germ cells; more ethically acceptable | Does not prevent transmission to offspring; may require repeated treatment (if corrected cells are not stem cells)       |
| Germ line gene therapy | Correcting the gene in sperm, eggs, or embryos; changes are inherited  | Would permanently eliminate the disease from the family line                 | Ethically controversial; currently illegal in most countries; unknown long-term consequences; risk of off-target effects |

### 34.2 Gene Therapy Methods

| Method                       | Description                                                                                                                 | Example                                                                                                                |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Gene addition (viral vector) | A functional copy of the gene is inserted into the patient's cells using a viral vector (e.g., retrovirus, adenovirus, AAV) | Luxturna for inherited retinal dystrophy (AAV vector delivers RPE65 gene to retinal cells)                             |
| Gene addition (non-viral)    | A functional gene is delivered using liposomes, nanoparticles, or naked DNA                                                 | Less immunogenic than viral vectors but less efficient                                                                 |
| Gene editing (CRISPR-Cas9)   | The defective gene is directly corrected in situ                                                                            | Ex vivo editing of haematopoietic stem cells for sickle cell disease and $\beta$-thalassaemia (Casgevy, approved 2023) |
| RNA interference             | Silencing a harmful gene using siRNA or shRNA                                                                               | Patisiran for hereditary transthyretin amyloidosis                                                                     |

### 34.3 Successes and Challenges

**Successes:**

- Severe combined immunodeficiency (SCID): early gene therapy trials cured "bubble boys" by
  inserting a functional copy of the ADA gene into bone marrow cells.
- Sickle cell disease / $\beta$-thalassaemia: CRISPR-based therapy (Casgevy) approved in 2023; edits
  BCL11A enhancer to reactivate foetal haemoglobin (HbF), which does not sickle.
- Spinal muscular atrophy (SMA): Zolgensma delivers SMN1 gene using AAV9 vector; single-dose
  treatment, dramatic improvement in motor function.

**Challenges:**

- **Immune response**: the patient may mount an immune response against the viral vector
  (pre-existing immunity to adenovirus is common).
- **Insertional mutagenesis**: viral vectors may integrate near oncogenes, causing cancer (this
  occurred in early SCID trials; 5 of 20 patients developed leukaemia).
- **Delivery**: getting the gene to the right cells in sufficient numbers is difficult.
- **Duration of effect**: some vectors provide only transient expression (adenoviral vectors are not
  integrated; expression is lost as cells divide).
- **Cost**: gene therapies are extremely expensive ($\approx \$1$--$3.5 million per patient for
  single-dose treatments).

## 35. GMO Case Studies: Benefits and Risks

### 35.1 Golden Rice

- **Problem:** vitamin A deficiency (VAD) affects approximately 190 million children worldwide,
  causing blindness and increased mortality.
- **Solution:** rice engineered to produce $\beta$-carotene (precursor to vitamin A) in the
  endosperm, giving the rice a golden colour.
- **Genes involved:** phytoene synthase (from daffodil or maize) and phytoene desaturase/crt I (from
  bacterium _Erwinia uredovora_).
- **Benefit:** could prevent 1--2 million deaths per year from VAD.
- **Concerns:** not yet widely adopted; cultural acceptance; cross-contamination with non-GM rice;
  intellectual property issues (patents held by multiple companies); efficacy (bioavailability of
  $\beta$-carotene from Golden Rice is debated).

### 35.2 Bt Crops

- **Genes:** genes from _Bacillus thuringiensis_ (Bt) encoding insecticidal crystal (Cry) proteins.
- **Mechanism:** Cry proteins are toxic to specific insect pests (e.g., European corn borer, cotton
  bollworm) when ingested. The protein is activated in the insect gut, forming pores in the gut
  epithelium, causing sepsis and death.
- **Benefits:** reduced use of chemical insecticides; increased yield; specific toxicity (does not
  harm non-target organisms, including humans and most beneficial insects).
- **Concerns:** evolution of Bt-resistant pests (resistance management strategies include planting
  non-Bt refuges); potential impact on non-target insects (e.g., monarch butterfly controversy);
  gene flow to wild relatives.

### 35.3 Herbicide-Tolerant Crops

- **Genes:** genes encoding enzymes that detoxify herbicides (e.g., EPSPS enzyme from
  _Agrobacterium_ confers glyphosate tolerance in Roundup Ready soybeans).
- **Benefits:** simplified weed management; allows no-till farming (reduces soil erosion); increased
  yield.
- **Concerns:** development of herbicide-resistant weeds ("superweeds"); increased herbicide use;
  gene flow to wild relatives; corporate control of seed supply.

### 35.4 Ethical Considerations of GM Crops

| Argument For                                                         | Argument Against                                            |
| -------------------------------------------------------------------- | ----------------------------------------------------------- |
| Feeding a growing world population (9.7 billion by 2050)             | Long-term ecological effects are unknown                    |
| Reducing pesticide use (Bt crops)                                    | Corporate control of food supply (patented seeds)           |
| Improving nutritional quality (Golden Rice)                          | "Playing God" / unnatural                                   |
| Reducing food waste (delayed-ripening tomatoes, non-browning apples) | Potential for allergens from transgenes                     |
| Drought- and disease-resistant crops for climate change adaptation   | Cross-contamination with non-GM crops; loss of biodiversity |

## 36. Cloning: Organismal Cloning Techniques

### 36.1 Plant Cloning by Cuttings

1. Take a cutting from a parent plant (include a node, where leaves and buds are attached).
2. Remove most leaves (reduce water loss).
3. Dip the cut end in rooting powder (contains auxin to stimulate root growth).
4. Plant the cutting in moist compost; cover with a plastic bag to maintain humidity.
5. The cutting develops roots and grows into a genetically identical clone.

**Advantages:** simple, quick, cheap. **Disadvantages:** limited to species that root ; genetic
uniformity increases vulnerability to disease.

### 36.2 Plant Cloning by Tissue Culture (Micropropagation)

(See Section 33.1 for detailed protocol.)

### 36.3 Animal Cloning: Reproductive Cloning

**Somatic Cell Nuclear Transfer (SCNT):**

1. A somatic (body) cell is taken from the animal to be cloned (e.g., an udder cell from Dolly the
   sheep).
2. The nucleus is extracted from the somatic cell.
3. An enucleated egg cell (an egg cell with its nucleus removed) is prepared from a donor female.
4. The somatic cell nucleus is inserted into the enucleated egg cell by electrofusion or
   microinjection.
5. The reconstructed egg is stimulated (by an electric shock or chemical treatment) to begin
   dividing.
6. The embryo is cultured in vitro for a few days.
7. The embryo is implanted into the uterus of a surrogate mother.
8. The surrogate gives birth to a clone of the original animal.

**Dolly the sheep (1996):** the first mammal cloned from an adult somatic cell. 277 embryos were
created; only 29 implanted; only one live birth (Dolly). Dolly developed arthritis and lung disease
at a relatively young age, and was euthanised at age 6 (normal sheep lifespan is 11--12 years). This
raised concerns about premature ageing in clones (telomere shortening).

### 36.4 Therapeutic Cloning

Similar to SCNT, but the embryo is used to produce embryonic stem cells (ESCs) rather than being
implanted into a surrogate. The ESCs are genetically identical to the patient, so they could be used
for:

- Growing replacement tissues or organs for transplantation (no rejection).
- Studying genetic diseases in patient-specific cell lines.
- Drug testing on patient-specific cells.

### 36.5 Natural Cloning

| Organism | Method                                                                             | Example                                                                                         |
| -------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Bacteria | Binary fission (asexual reproduction)                                              | _E. Coli_ divides every 20 minutes under optimal conditions                                     |
| Fungi    | Spore production; fragmentation                                                    | Mushrooms release spores; bread mould (_Mucor_) spreads by fragmentation                        |
| Plants   | Runners (strawberry), tubers (potato), bulbs (daffodil), vegetative propagation    | Gardeners take cuttings, divide bulbs, or separate runners                                      |
| Animals  | Parthenogenesis (some insects, reptiles, fish): egg develops without fertilisation | Aphids reproduce parthenogenetically in summer; Komodo dragons can reproduce by parthenogenesis |

## 37. DNA Fingerprinting: Detailed Analysis

### 37.1 Minisatellites vs Microsatellites (STRs)

| Feature            | Minisatellites (VNTRs)                  | Microsatellites (STRs)                   |
| ------------------ | --------------------------------------- | ---------------------------------------- |
| Repeat unit length | 10--100 base pairs                      | 2--6 base pairs                          |
| Total length       | 0.5--30 kb                              | 100--400 bp                              |
| Number in genome   | Thousands                               | Hundreds of thousands                    |
| Mutation rate      | High ($\approx 10^{-4}$ per generation) | Lower ($\approx 10^{-3}$ per generation) |
| Method of analysis | Southern blotting (radioactive probes)  | PCR and capillary electrophoresis        |
| Current use        | Largely replaced by STRs                | Standard in forensic DNA profiling       |

### 37.2 DNA Fingerprinting in Forensics

**Crime scene investigation:**

1. DNA is extracted from biological evidence at the crime scene (blood, semen, saliva, hair
   follicles, skin cells).
2. DNA is extracted from the suspect.
3. STR loci are amplified by PCR using fluorescently labelled primers.
4. PCR products are separated by capillary electrophoresis.
5. Fragment sizes are compared between the crime scene sample and the suspect.

**Interpreting results:**

- **Match:** the probability of a random match at all 10+ STR loci is extremely low ($< 1$ in a
  billion).
- **No match:** the suspect is excluded.
- **Partial match:** may indicate a close relative of the suspect (family members share
  approximately 50% of STR alleles).

### 37.3 Paternity Testing

DNA fingerprinting can determine paternity by comparing the child's DNA profile with the alleged
father's and the mother's:

- The child must have inherited one allele at each locus from the mother and one from the father.
- If the alleged father does not carry the paternal allele at any locus, he is excluded as the
  biological father.
- If the alleged father carries the paternal allele at all loci tested, the probability of paternity
  is calculated ( > 99.9% if the man is the biological father).

## 38. Bioinformatics: Analysing Biological Data

### 38.1 Sequence Alignment

Sequence alignment compares two or more DNA, RNA, or protein sequences to identify regions of
similarity:

| Type                        | Description                                      | Use                                                                                           |
| --------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Pairwise alignment          | Comparing two sequences                          | Finding conserved regions between two species; identifying orthologous genes                  |
| Multiple sequence alignment | Comparing three or more sequences simultaneously | Identifying conserved domains; constructing phylogenetic trees; identifying functional motifs |

**Scoring alignments:**

- **Match**: +1 (identical bases at the same position).
- **Mismatch**: -1 (different bases).
- **Gap**: -2 (insertion or deletion).

A higher score indicates greater similarity.

### 38.2 BLAST Search: Worked Example

A researcher has identified a gene sequence from an unknown bacterium:

5'-ATGGCTAGCTGA-3'

They run a BLASTn (nucleotide BLAST) search against the NCBI database. The top hit is:

5'-ATGGCTAGCTGA-3' (100% identity, E-value $= 10^{-12}$From _E. Coli_ -- lacZ gene fragment)

**Interpretation:**

- **% identity**: 100% -- every base matches.
- **E-value**: $10^{-12}$ -- the probability of getting this good a match by chance is 1 in
  $10^{12}$. An E-value $< 0.05$ is considered significant.
- **Bit score**: a measure of alignment quality (higher = better). > 50 is significant.

The unknown bacterium likely carries a gene similar to _E. Coli_ lacZ ($\beta$-galactosidase).

### 38.3 Phylogenetic Trees

Phylogenetic trees show the evolutionary relationships between species:

1. **Molecular data** (DNA or protein sequences) are used to construct the tree.
2. The number of differences between sequences is proportional to the time since the species
   diverged from a common ancestor.
3. The tree is rooted (the root represents the common ancestor).
4. Branch lengths are proportional to the number of sequence changes (molecular clock).

**Example tree:**

```
                    ┌── Human
              ┌─────┤
          ┌───┤     └── Chimpanzee
          │   └──────────── Gorilla
Common ancestor
          │   ┌──────────── Orangutan
          └───┤
              └──────────── Gibbon
```

Humans and chimpanzees are most closely related (fewest sequence differences), followed by gorillas,
then orangutans and gibbons.

## 39. Golden Rice and Biofortification

### 39.1 The Vitamin A Deficiency Problem

- Vitamin A deficiency (VAD) affects approximately 190 million preschool children worldwide.
- VAD causes night blindness, xerophthalmia (dry eyes), and increased susceptibility to infections.
- VAD is most common in populations that rely heavily on rice as a staple food (rice contains no
  $\beta$-carotene/provitamin A).

### 39.2 Golden Rice: Genetic Engineering Solution

Golden rice is a genetically engineered variety of rice that produces $\beta$-carotene (provitamin
A) in the endosperm:

| Gene                              | Source                                                            | Enzyme Produced          | Step in Pathway                                       |
| --------------------------------- | ----------------------------------------------------------------- | ------------------------ | ----------------------------------------------------- |
| _psy_ (phytoene synthase)         | Daffodil (_Narcissus pseudonarcissus_)                            | Phytoene synthase        | Geranylgeranyl diphosphate $\to$ phytoene             |
| _crtI_ (phytoene desaturase)      | Soil bacterium (_Pantoea ananatis_, formerly _Erwinia uredovora_) | Phytoene desaturase      | Phytoene $\to$ lycopene (multiple desaturation steps) |
| _lcyl_ (lycopene $\beta$-cyclase) | Daffodil                                                          | Lycopene $\beta$-cyclase | Lycopene $\to$ $\beta$-carotene                       |

### 39.3 Biofortification Approaches

| Approach                | Description                                                        | Examples                                                                               |
| ----------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Conventional breeding   | Select and cross varieties with higher nutrient content            | Iron-rich beans; zinc-rich wheat                                                       |
| Genetic engineering     | Introduce genes that increase nutrient content or bioavailability  | Golden rice ($\beta$-carotene); iron-biofortified cassava (ferritin gene from soybean) |
| Agronomic fortification | Apply mineral fertilisers to soil to increase crop mineral content | Selenium-biofortified wheat; iodine-biofortified cereals                               |

## 40. Biofuels

### 40.1 Types of Biofuels

| Biofuel Type                        | Source                                                      | Process                                                                           | Energy Density                             | Advantages                                                            | Disadvantages                                                                        |
| ----------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Bioethanol (1st generation)         | Sugar cane, corn, wheat                                     | Yeast ferments sugars to ethanol; distilled to increase concentration             | ~23 MJ/kg (lower than petrol at ~45 MJ/kg) | Renewable; carbon-neutral (CO2 released = CO2 absorbed during growth) | Competes with food production; land use change (deforestation); lower energy density |
| Biodiesel (1st generation)          | Vegetable oils (rapeseed, soybean, palm), waste cooking oil | Transesterification of triglycerides with methanol                                | ~37 MJ/kg                                  | Biodegradable; can use waste oil                                      | Lower energy density than diesel; higher viscosity; cold flow problems               |
| Cellulosic ethanol (2nd generation) | Lignocellulosic biomass (wood chips, straw, grasses)        | Pretreatment + enzymatic hydrolysis + fermentation                                | ~23 MJ/kg                                  | Does not compete with food; uses agricultural waste                   | Expensive; complex pretreatment required; not yet commercially viable at scale       |
| Biogas (anaerobic digestion)        | Animal manure, food waste, sewage sludge                    | Anaerobic bacteria break down organic matter; produce methane (~60%) + CO2 (~40%) | ~21 MJ/m3                                  | Uses waste materials; produces fertiliser as by-product               | Lower energy density; requires large digesters; methane leaks potent greenhouse gas  |

### 40.2 Bioethanol Production from Yeast

| Step              | Process                                                                                                                    | Conditions                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| 1. Milling        | Grain is ground to increase surface area                                                                                   | --                                            |
| 2. Gelatinisation | Starch granules are heated in water; they swell and burst                                                                  | 80--90$\degree\mathrm{C}$                     |
| 3. Hydrolysis     | Enzymes (amylase) break down starch to maltose and glucose                                                                 | 55--65$\degree\mathrm{C}$; pH 5--6            |
| 4. Fermentation   | Yeast (_Saccharomyces cerevisiae_) anaerobically respires glucose to ethanol + CO2                                         | 30--35$\degree\mathrm{C}$; anaerobic; pH 4--5 |
| 5. Distillation   | Ethanol is separated from the fermentation mixture (ethanol boils at 78$\degree\mathrm{C}$Water at 100$\degree\mathrm{C}$) | Fractional distillation                       |

## 41. Tissue Culture and Micropropagation

### 41.1 Plant Tissue Culture

| Step                     | Description                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 1. Explant selection     | A small piece of plant tissue (meristem, leaf, stem) is taken from the parent plant (sterile conditions)                         |
| 2. Surface sterilisation | Explant is sterilised (e.g., bleach, ethanol) to remove surface microorganisms                                                   |
| 3. Callus formation      | Explant is placed on agar medium containing auxin and cytokinin; cells divide to form an undifferentiated mass of cells (callus) |
| 4. Organogenesis         | The medium is adjusted (different auxin:cytokinin ratio) to stimulate shoot or root formation                                    |
| 5. Acclimatisation       | Plantlets are transferred from sterile conditions to soil (gradual exposure to normal environment)                               |

### 41.2 Growth Substances in Tissue Culture

| Substance                              | Role                                                                                              |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Auxin (e.g., 2,4-D, IAA, NAA)          | Stimulates root formation; at high concentration relative to cytokinin, promotes callus formation |
| Cytokinin (e.g., BAP, kinetin, zeatin) | Stimulates shoot formation; at high concentration relative to auxin, promotes shoot development   |
| Auxin:Cytokinin ratio                  | High auxin:cytokinin $\to$ roots; Low auxin:cytokinin $\to$ shoots; Equal $\to$ callus            |
| Sucrose                                | Carbon source (since callus cells cannot photosynthesise)                                         |
| Agar                                   | Solid medium to support the tissue                                                                |
| Vitamins and minerals                  | Essential for growth (Murashige and Skoog medium is standard)                                     |

### 41.3 Applications

| Application                     | Description                                                                                                          |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Cloning elite plants            | Produces thousands of genetically identical copies of a plant with desirable traits (disease resistance, high yield) |
| Conservation of rare species    | Micropropagation of endangered plant species for reintroduction to the wild                                          |
| Disease-free planting material  | Meristem culture produces virus-free plants (meristems have low viral titre)                                         |
| Genetic engineering             | Tissue culture is used to regenerate whole plants from genetically modified cells                                    |
| Secondary metabolite production | Plant cell cultures can produce valuable compounds (e.g., taxol from yew, shikonin from _Lithospermum_)              |

## 42. Genetic Modification of Animals

### 42.1 Methods

| Method                               | Description                                                                                                                                                 | Example                                                                                                 |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Microinjection                       | DNA injected directly into the pronucleus of a fertilised egg                                                                                               | Transgenic mice expressing human genes for disease research                                             |
| Retroviral vectors                   | Retroviruses carry the transgene and insert it into the host genome                                                                                         | Gene therapy vectors                                                                                    |
| CRISPR-Cas9                          | Guide RNA directs Cas9 nuclease to a specific DNA sequence; creates a double-strand break; DNA repair machinery inserts the new gene (or knocks out a gene) | Gene editing in livestock (e.g., hornless cattle); disease-resistant pigs; correcting genetic disorders |
| Somatic cell nuclear transfer (SCNT) | Nucleus from a genetically modified somatic cell is transferred into an enucleated egg; the egg develops into a cloned organism                             | Dolly the sheep (first cloned mammal, 1996)                                                             |

### 42.2 Applications of Transgenic Animals

| Application               | Description                                                                   | Example                                                                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Pharmaceutical production | Transgenic animals produce therapeutic proteins in their milk, eggs, or urine | Transgenic goats producing antithrombin III (ATryn) in their milk; used to prevent blood clots                                                  |
| Xenotransplantation       | Transgenic animal organs used for human transplantation                       | Pigs engineered to lack $\alpha$-1,3-galactosyltransferase (reduces hyperacute rejection); pigs expressing human complement regulatory proteins |
| Disease models            | Animals engineered to carry human disease genes for research                  | Oncomouse (carries human oncogene; develops cancer); Huntington's disease mice; Alzheimer's mice                                                |
| Agriculture               | Animals with improved traits                                                  | Fast-growing salmon (AquaBounty; engineered with growth hormone gene); disease-resistant livestock                                              |

## 43. Cloning Animals

### 43.1 Reproductive Cloning (Somatic Cell Nuclear Transfer)

| Step | Description                                                                                       |
| ---- | ------------------------------------------------------------------------------------------------- |
| 1    | A somatic (body) cell is taken from the animal to be cloned                                       |
| 2    | The nucleus is extracted from this somatic cell                                                   |
| 3    | An enucleated egg cell is obtained (egg cell with its nucleus removed)                            |
| 4    | The somatic cell nucleus is inserted into the enucleated egg (by microinjection or electrofusion) |
| 5    | An electric shock stimulates the egg to divide (activates the egg; mimics fertilisation)          |
| 6    | The embryo develops in vitro for a few days                                                       |
| 7    | The embryo is implanted into a surrogate mother                                                   |
| 8    | The surrogate gives birth to the cloned animal (genetically identical to the somatic cell donor)  |

### 43.2 Advantages and Disadvantages of Animal Cloning

| Advantages                                                               | Disadvantages                                                                                          |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Produces genetically identical animals for research (controls variables) | Low success rate (~1--5% of implanted embryos survive to birth)                                        |
| Preserves valuable genetics (elite breeding stock, endangered species)   | Cloned animals often have health problems (large offspring syndrome, premature ageing, immune defects) |
| Potential for therapeutic cloning (patient-specific stem cells)          | Ethical concerns (especially about human cloning)                                                      |
| Reproduces transgenic animals efficiently                                | Reduced genetic diversity                                                                              |

## 44. Ethical Issues in Biotechnology

### 44.1 GM Crops: Arguments For and Against

| Arguments For                                                             | Arguments Against                                                                      |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Increased crop yields (feed growing population)                           | Potential unknown long-term health effects of GM food                                  |
| Reduced pesticide use (Bt crops produce their own insecticide)            | Development of resistant pests ("superweeds", "superbugs")                             |
| Enhanced nutritional content (Golden Rice; biofortified crops)            | Corporate control of food supply (patented seeds; farmers must buy new seed each year) |
| Drought-resistant and salt-tolerant varieties (climate change adaptation) | Gene flow to wild relatives (transgenes could spread to non-GM crops or wild plants)   |
| Reduced post-harvest losses (delayed ripening, disease resistance)        | Ethical concerns about "playing God" with nature                                       |
| Lower food prices (increased supply)                                      | Loss of biodiversity (monocultures of GM crops)                                        |

### 44.2 Genetic Testing: Ethical Considerations

| Issue                       | Description                                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| Genetic discrimination      | Employers or insurance companies could use genetic information to discriminate against individuals       |
| Psychological impact        | Knowing one's genetic risk for a late-onset disease (e.g., Huntington's) can cause anxiety, depression   |
| Informed consent            | Individuals must understand the implications of genetic testing before agreeing                          |
| Privacy and confidentiality | Who has access to genetic information? How is it stored? Can it be shared without consent?               |
| Reproductive choices        | Prenatal genetic testing raises questions about selective termination (abortion based on genetic traits) |
| Incidental findings         | Genetic testing may reveal unexpected information (e.g., non-paternity, risk of unrelated diseases)      |

## 45. Gene Therapy

### 45.1 Somatic vs Germ-Line Gene Therapy

| Type                   | Description                                                                                              | Ethical Status                                                                                           |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Somatic gene therapy   | Genes are introduced into body cells (somatic cells) of the patient; changes are NOT passed to offspring | Generally accepted (treats disease in the individual)                                                    |
| Germ-line gene therapy | Genes are introduced into germ cells (sperm, egg, zygote); changes ARE passed to offspring               | Currently banned in most countries (ethical concerns; unknown long-term consequences; "designer babies") |

### 45.2 Methods of Delivering Genes

| Vector                                                        | Description                                                                | Advantages                                                      | Disadvantages                                                                                                                 |
| ------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Viral vectors (retroviruses, lentiviruses, adenoviruses, AAV) | Modified virus carries the therapeutic gene into target cells              | Efficient delivery; some integrate into host genome (permanent) | Risk of immune response; risk of insertional mutagenesis (virus may disrupt a tumour suppressor gene); limited cargo capacity |
| Liposomes                                                     | Lipid vesicles containing the therapeutic gene fuse with the cell membrane | No viral risk; low immunogenicity                               | Lower efficiency; transient expression (DNA does not integrate)                                                               |
| Naked DNA                                                     | Direct injection of plasmid DNA                                            | Simple; safe                                                    | Very low efficiency                                                                                                           |
| CRISPR-Cas9                                                   | Direct gene editing (correct the mutation in situ)                         | Precise; permanent correction                                   | Off-target effects; delivery challenges; ethical concerns                                                                     |

### 45.3 Gene Therapy Successes and Challenges

| Disease                                    | Gene Therapy Status           | Details                                                                                                                                      |
| ------------------------------------------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Severe combined immunodeficiency (SCID-X1) | Early success; later setbacks | First successful gene therapy (2000); 10 of 11 patients cured; however, 5 developed leukaemia (insertional mutagenesis activating oncogenes) |
| ADA-SCID                                   | Approved (Strimvelis)         | Ex vivo gene therapy; patient's bone marrow cells are modified and reinfused                                                                 |
| Spinal muscular atrophy (SMA)              | Approved (Zolgensma)          | AAV vector delivers SMN1 gene; single-dose treatment; very expensive (~$2 million)                                                           |
| Cystic fibrosis                            | Clinical trials ongoing       | Liposome and viral delivery to airway epithelial cells; limited success so far (delivery barriers)                                           |
| Haemophilia                                | Clinical trials ongoing       | AAV vectors delivering factor VIII or IX genes; promising early results                                                                      |

## 46. Environmental Biotechnology

### 46.1 Bioremediation

Bioremediation uses living organisms ( microorganisms) to clean up polluted environments:

| Type                   | Description                                                  | Example                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In situ bioremediation | Contaminants are treated in place (at the site of pollution) | Oil spill cleanup: occurring oil-degrading bacteria (_Pseudomonas_, _Alcanivorax_) break down hydrocarbons; adding nutrients (nitrogen, phosphorus) stimulates their growth |
| Ex situ bioremediation | Contaminated material is removed and treated elsewhere       | Soil excavation and composting; biopiles; landfarming                                                                                                                       |
| Phytoremediation       | Plants are used to absorb, accumulate, or degrade pollutants | _Helianthus_ (sunflower) absorbs heavy metals (lead, uranium) from soil; _Thlaspi caerulescens_ (alpine pennycress) hyperaccumulates zinc and cadmium                       |
| Mycoremediation        | Fungi are used to break down pollutants                      | White-rot fungi (_Phanerochaete chrysosporium_) produce lignin peroxidase enzymes that degrade organic pollutants (PCBs, PAHs, dioxins)                                     |

### 46.2 Wastewater Treatment

| Stage               | Process                                                                                               | What Is Removed                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Primary treatment   | Physical: screening (removes large debris); sedimentation (sludge settles out)                        | Large solids; ~60% of suspended solids                                              |
| Secondary treatment | Biological: activated sludge (aerobic bacteria break down organic matter); trickling filter           | Dissolved organic matter; ~90% of organic matter removed                            |
| Tertiary treatment  | Chemical/physical: sand filtration; UV disinfection; nutrient removal (nitrification/denitrification) | Remaining pathogens; phosphates and nitrates (prevent eutrophication); heavy metals |

## 47. Bioinformatics and Genomics

### 47.1 Applications of Bioinformatics

| Application           | Description                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------ |
| Personalised medicine | Analysing a patient's genome to tailor drug choice and dosage (pharmacogenomics)                             |
| Drug discovery        | Identifying potential drug targets by comparing pathogen and human genomes                                   |
| Evolutionary biology  | Comparing genomes across species to reconstruct evolutionary relationships                                   |
| Forensics             | DNA fingerprinting for criminal identification and paternity testing                                         |
| Agriculture           | Identifying genes for disease resistance, drought tolerance, and nutritional quality in crops                |
| Epidemiology          | Tracking the spread of infectious diseases by sequencing pathogen genomes (e.g., tracking COVID-19 variants) |

### 47.2 DNA Profiling (DNA Fingerprinting)

| Step                   | Description                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------- |
| 1. DNA extraction      | DNA is extracted from a biological sample (blood, saliva, hair root)                  |
| 2. PCR amplification   | Specific regions of DNA are amplified (e.g., short tandem repeats, STRs)              |
| 3. Gel electrophoresis | DNA fragments are separated by size on an agarose gel; smaller fragments move further |
| 4. Comparison          | The pattern of bands is compared between samples (e.g., suspect vs crime scene)       |

| Feature                     | Description                                                                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| STRs (short tandem repeats) | Short sequences (2--6 base pairs) that are repeated in tandem; the number of repeats varies between individuals; highly polymorphic (many different alleles in the population) |
| Probability of match        | The probability of two unrelated individuals having the same DNA profile is extremely low (< 1 in a billion if enough loci are tested)                                         |
| Uses                        | Criminal identification; paternity testing; identifying disaster victims; immigration disputes                                                                                 |

## 48. Induced Pluripotent Stem Cells (iPSCs)

### 48.1 What Are iPSCs?

IPSCs are adult somatic cells that have been reprogrammed to a pluripotent state (similar to
embryonic stem cells) by introducing specific transcription factors.

### 48.2 Yamanaka Factors

| Factor | Gene     | Role                                                                  |
| ------ | -------- | --------------------------------------------------------------------- |
| Oct4   | _POU5F1_ | Maintains pluripotency; activates pluripotency genes                  |
| Sox2   | _SOX2_   | Maintains pluripotency; works with Oct4                               |
| Klf4   | _KLF4_   | Involved in cell proliferation; helps repress differentiation genes   |
| c-Myc  | _MYC_    | Promotes cell division; opens chromatin (makes genes more accessible) |

### 48.3 Advantages of iPSCs over Embryonic Stem Cells

| Advantage              | Description                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| No ethical controversy | Does not require destruction of embryos                                                               |
| Patient-specific       | Can be derived from the patient's own cells; no immune rejection                                      |
| Disease modelling      | iPSCs from patients with genetic diseases can be differentiated into the affected cell type for study |
| Drug screening         | Patient-derived cells can be used to test drug responses in vitro                                     |

### 48.4 Limitations

| Limitation           | Description                                                           |
| -------------------- | --------------------------------------------------------------------- |
| Risk of mutations    | Reprogramming process can introduce genetic abnormalities             |
| Tumour risk          | c-Myc is an oncogene; iPSC-derived cells may form teratomas           |
| Not fully equivalent | iPSCs may retain some epigenetic memory of their cell of origin       |
| Efficiency           | Low efficiency (only ~0.1--1% of cells are successfully reprogrammed) |

## 49. RNA Interference (RNAi)

### 49.1 What Is RNAi?

RNA interference is a natural mechanism for regulating gene expression by silencing specific genes.
It uses small RNA molecules to target and destroy mRNA molecules.

### 49.2 Mechanism

| Step | What Happens                                                                                                               |
| ---- | -------------------------------------------------------------------------------------------------------------------------- |
| 1    | Double-stranded RNA (dsRNA) is introduced into the cell or produced endogenously                                           |
| 2    | The enzyme Dicer cleaves the dsRNA into small interfering RNAs (siRNAs, ~21--23 nucleotides)                               |
| 3    | The siRNA duplex is unwound; one strand (the guide strand) is loaded into the RISC complex (RNA-induced silencing complex) |
| 4    | The guide strand binds to a complementary mRNA sequence by base pairing                                                    |
| 5    | RISC cleaves the target mRNA; the mRNA is degraded; the gene is effectively silenced (no protein produced)                 |

### 49.3 Applications

| Application         | Description                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Functional genomics | Knocking down specific genes to study their function                                                    |
| Therapeutics        | siRNA drugs to silence disease-causing genes (e.g., patisiran for hereditary transthyretin amyloidosis) |
| Agriculture         | RNAi sprays to protect crops from viruses (e.g., against Colorado potato beetle)                        |
| Pest control        | Developing RNAi-based insecticides that silence essential genes in pest species                         |

## 50. Synthetic Biology

### 50.1 What Is Synthetic Biology?

Synthetic biology applies engineering principles to biology to design and construct new biological
parts, devices, and systems that do not exist in the natural world, or to redesign existing
biological systems for useful purposes.

### 50.2 Key Achievements

| Achievement      | Description                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Synthetic genome | Craig Venter's team created a synthetic bacterial chromosome (M. Mycoides JCVI-syn1.0) and transplanted it into a recipient cell; the synthetic genome took over the cell and the cell reproduced |
| Minimal genome   | The smallest genome that supports life (473 genes in _Mycoplasma genitalium_); essential genes were identified by systematically knocking out genes one at a time                                 |
| BioBricks        | Standardised, interchangeable DNA parts (promoters, ribosome binding sites, coding sequences, terminators) that can be assembled into genetic circuits                                            |
| Genetic circuits | Synthetic gene networks that perform logic functions (AND gates, NOT gates, oscillators) -- the basis of biological computing                                                                     |

### 50.3 Applications

| Application       | Description                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Biofuels          | Engineering bacteria/algae to produce ethanol, butanol, and biodiesel more efficiently                                                    |
| Biosensors        | Living cells that detect environmental pollutants (arsenic, mercury) and produce a measurable output (fluorescence, colour change)        |
| Drug production   | Engineering microorganisms to produce complex drugs (artemisinin for malaria; taxol for cancer; opioids) more cheaply                     |
| Gene drives       | Engineering genes that spread rapidly through wild populations (e.g., to make malaria mosquitoes sterile; controversial ecological risks) |
| Cell-free systems | Using cell-free transcription-translation systems (extracted from bacteria) to produce proteins without living cells                      |

## 51. Bioinformatics

### 51.1 What Is Bioinformatics?

Bioinformatics is the application of computing and statistical techniques to the analysis of
biological data, especially large datasets from genome sequencing projects.

### 51.2 Key Tools and Databases

| Tool/Database                             | Purpose                                                                                                                  |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| BLAST (Basic Local Alignment Search Tool) | Compares a DNA or protein sequence against all known sequences in a database; identifies similar sequences and organisms |
| GenBank                                   | Comprehensive public database of DNA sequences (maintained by NCBI)                                                      |
| Ensembl                                   | Genome browser for vertebrate genomes; annotations of genes, proteins, and regulatory elements                           |
| UniProt                                   | Database of protein sequences and functional information                                                                 |
| PubMed                                    | Database of scientific literature; searchable by keyword, author, or gene name                                           |
| Clustal Omega                             | Multiple sequence alignment tool; aligns three or more sequences to identify conserved regions                           |
| PhyML / MEGA                              | Software for constructing phylogenetic trees from sequence data                                                          |

### 51.3 Applications of Bioinformatics

| Application                  | Description                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------- |
| Comparative genomics         | Comparing genomes across species to identify genes responsible for specific traits or diseases |
| Protein structure prediction | Using AI (e.g., AlphaFold) to predict protein 3D structures from amino acid sequences          |
| Drug target identification   | Identifying pathogen proteins that could be targeted by new drugs                              |
| Evolutionary studies         | Constructing phylogenetic trees; estimating divergence times                                   |
| Personalised medicine        | Analysing an individual's genome to predict disease risk and drug response                     |

## 52. Tissue Culture and Micropropagation

### 52.1 Principles

Tissue culture is the growth of cells, tissues, or organs in an artificial nutrient medium under
sterile conditions.

### 52.2 Steps in Micropropagation

| Step                | Description                                                                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Selection        | A small piece of tissue (explant) is taken from the parent plant (e.g., from the shoot tip or leaf bud)                                                         |
| 2. Sterilisation    | The explant is sterilised (e.g., using dilute bleach or ethanol) to remove surface contaminants (bacteria, fungi)                                               |
| 3. Culture          | The explant is placed on a sterile agar gel containing nutrients, sucrose, vitamins, and plant growth substances (auxins and cytokinins)                        |
| 4. Callus formation | The explant divides by mitosis to form an undifferentiated mass of cells called a callus                                                                        |
| 5. Differentiation  | By adjusting the ratio of auxin to cytokinin, the callus can be induced to develop shoots and roots                                                             |
| 6. Acclimatisation  | The plantlets are transferred from the agar to soil; they must be gradually hardened off (reducing humidity) before being moved to normal greenhouse conditions |

### 52.3 Advantages and Disadvantages

| Advantages                                                              | Disadvantages                                                                                |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Produces large numbers of identical plants (clones) very quickly        | Requires sterile conditions (expensive equipment)                                            |
| Disease-free stock (meristem tissue culture produces virus-free plants) | All plants are genetically identical (no genetic variation; vulnerable to the same diseases) |
| Can propagate plants that do not produce viable seeds (e.g., bananas)   | Somaclonal variation may occur (mutations during tissue culture)                             |
| Year-round production (independent of seasons)                          | Not all species respond well to tissue culture                                               |

## 53. Golden Rice and Biofortification

### 53.1 What Is Golden Rice?

Golden rice is a genetically modified variety of rice that produces beta-carotene (a precursor of
vitamin A) in the endosperm of the rice grain. It was developed to address vitamin A deficiency
(VAD) in populations where rice is the staple food.

### 53.2 How It Was Made

| Step        | Description                                                                                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Genes added | Two genes from daffodil (_psy_) and one gene from a soil bacterium (_crtI_) were inserted into the rice genome; these genes enable the rice endosperm to produce beta-carotene (which normal rice cannot do) |
| Mechanism   | The added genes encode enzymes in the carotenoid biosynthesis pathway: phytoene synthase and phytoene desaturase                                                                                             |
| Result      | The rice grains have a characteristic golden-yellow colour due to the beta-carotene content                                                                                                                  |

### 53.3 Biofortification

| Feature    | Description                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What it is | Increasing the nutritional value of crops through genetic modification or conventional breeding                                                                   |
| Examples   | Golden rice (beta-carotene); iron-rich beans; zinc-enhanced wheat; vitamin-enriched sweet potato (orange-fleshed sweet potato, achieved by conventional breeding) |
| Advantages | Addresses micronutrient deficiencies in populations that rely on a limited number of staple crops; does not require changes to diet or supplementation programmes |

---


## Common Pitfalls

1. Writing vague answers without specific biological terminology — use precise terms (e.g.,
   'phospholipid bilayer' not 'membrane').

2. Stating that 'enzymes are denatured by heat' without specifying that high temperatures cause the
   change in tertiary structure.

3. Misinterpreting graphs by confusing the independent and dependent variables or reading scales
   incorrectly.

4. Confusing correlation with causation when evaluating experimental data and drawing conclusions.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

::::::

:::