---
title: Genetics Advanced
description: "IB Biology -- DNA replication in detail, transcription and gene regulation, translation mechanics, operons, epigenetics, genetic engineering techniques, PCR, gel electrophoresis, genetic crosses, chi-squared tests, and pedigree analysis."
slug: genetics-advanced
---

## 1. DNA Replication in Detail

### The Replication Fork

DNA replication begins at specific sequences called **origins of replication (ori)**. In prokaryotes,
there is typically one origin; in eukaryotes, there are thousands, allowing the genome to be replicated
in a reasonable time.

At each origin, **helicase** unwinds the double helix, creating a **replication fork** --- a Y-shaped
region where the two parental strands are separated.

### Key Enzymes and Proteins

| Enzyme / Protein              | Function                                                                                                  |
| ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Helicase**                 | Unwinds and separates the double helix at the origin of replication. Requires ATP hydrolysis.              |
| **Single-strand binding proteins (SSBs)** | Bind to separated strands, preventing re-annealing and protecting from nuclease degradation. |
| **Topoisomerase (DNA gyrase)** | Relieves torsional strain ahead of the fork by cutting one or both strands, allowing rotation, and resealing. |
| **Primase**                  | Synthesises short RNA primers ($5$--$10$ nucleotides) complementary to the template strand. RNA primers provide a free $3'$-$\mathrm{OH}$ for DNA polymerase. |
| **DNA polymerase III**       | (Prokaryotes) The main replicative polymerase. Adds nucleotides to the $3'$ end, synthesising at $\approx 1000\;\mathrm{nt/s}$. Has $3' \to 5'$ proofreading exonuclease activity. |
| **DNA polymerase I**         | (Prokaryotes) Removes RNA primers ($5' \to 3'$ exonuclease activity) and replaces them with DNA.             |
| **DNA ligase**               | Forms phosphodiester bonds between Okazaki fragments on the lagging strand (and between primer replacements).   |
| **Sliding clamp (PCNA in eukaryotes, $\beta$-clamp in prokaryotes)** | Ring-shaped protein that encircles DNA, tethering DNA polymerase to the template for processive synthesis. |

### Leading and Lagging Strands

DNA polymerase can only synthesise in the $5' \to 3'$ direction. Since the two template strands are
antiparallel, synthesis proceeds differently on each:

- **Leading strand**: synthesised continuously in the $5' \to 3'$ direction, toward the replication
  fork. Only one RNA primer is needed.
- **Lagging strand**: synthesised discontinuously, away from the replication fork, in short segments
  called **Okazaki fragments** ($1000$--$2000\;\mathrm{nt}$ in prokaryotes; $100$--$200\;\mathrm{nt}$
  in eukaryotes). Each fragment requires its own RNA primer.

### Okazaki Fragment Processing

1. DNA polymerase III synthesises an Okazaki fragment, stopping when it reaches the RNA primer of
   the previous fragment.
2. DNA polymerase I removes the RNA primer ($5' \to 3'$ exonuclease) and replaces it with DNA.
3. DNA ligase seals the remaining nick (the gap between the $3'$-$\mathrm{OH}$ of the newly
   synthesised DNA and the $5'$-phosphate of the previous fragment).

### Proofreading and Fidelity

DNA polymerase III has **$3' \to 5'$ exonuclease (proofreading) activity**: if an incorrect
nucleotide is incorporated, the polymerase detects the mismatched base pair, reverses direction,
removes the incorrect nucleotide, and replaces it. This reduces the error rate from approximately
$10^{-5}$ (without proofreading) to $10^{-7}$ per base pair per replication.

**Mismatch repair (MMR)** corrects errors that escape proofreading: after replication, the newly
synthesised strand is identified (by nicks or methylation patterns), and mismatched bases are
excised and resynthesised. MMR further reduces the error rate to approximately $10^{-9}$.

### Eukaryotic vs Prokaryotic Replication

| Feature                    | Prokaryotes                                      | Eukaryotes                                          |
| -------------------------- | ------------------------------------------------ | --------------------------------------------------- |
| **DNA polymerases**        | Pol I, Pol III (main replicative)                 | Pol $\alpha$ (primase + short extension), Pol $\delta$ (lagging), Pol $\varepsilon$ (leading) |
| **Origins of replication** | One (oriC)                                       | Many (thousands); replicons                          |
| **Okazaki fragment length** | $1000$--$2000\;\mathrm{nt}$                     | $100$--$200\;\mathrm{nt}$                          |
| **Replication rate**       | $\approx 1000\;\mathrm{nt/s}$                   | $\approx 50\;\mathrm{nt/s}$ (but many forks simultaneously) |
| **Telomeres**              | Circular chromosomes (no ends)                   | Linear chromosomes; telomeres protect ends           |
| **Telomerase**             | Not needed                                       | Extends $3'$ ends of chromosomes; reverse transcriptase + RNA template |

### The End Replication Problem

In eukaryotes, the leading strand can be synthesised to the very end of the chromosome, but the
lagging strand cannot complete the terminal Okazaki fragment (there is no upstream primer to replace).
This results in a progressive shortening of chromosomes with each round of replication ($\approx 50$--$200\;\mathrm{bp}$
per division in somatic cells).

**Telomerase** extends the $3'$ end by adding tandem repeats of a short sequence (TTAGGG in humans)
using its built-in RNA template. This prevents the loss of coding DNA. Telomerase is active in germ
cells, stem cells, and most cancer cells but is inactive in most somatic cells.

---

## 2. Transcription in Detail

### Initiation in Prokaryotes

1. RNA polymerase binds to the **promoter** region upstream of the gene.
2. The **$-35$ box** (consensus TTGACA) and **$-10$ box** (consensus TATAAT, Pribnow box) are
   recognised by the **sigma factor ($\sigma$)** subunit of RNA polymerase.
3. The sigma factor positions RNA polymerase at the correct start site (+1) and facilitates local
   DNA unwinding (forming an open complex).
4. RNA polymerase begins synthesising mRNA in the $5' \to 3'$ direction, using the **template
   (antisense) strand** as a template.
5. After synthesising approximately $10\;\mathrm{nt}$, the sigma factor dissociates.

### Initiation in Eukaryotes

Eukaryotic transcription is more complex, involving three RNA polymerases and multiple transcription
factors:

| RNA polymerase | Product                          |
| -------------- | -------------------------------- |
| **Pol I**      | rRNA (28S, 18S, 5.8S)           |
| **Pol II**     | mRNA, snRNA, microRNA             |
| **Pol III**    | tRNA, 5S rRNA, other small RNAs  |

**Pol II transcription initiation:**

1. **General transcription factors** (TFIIA, TFIIB, TFIID, TFIIE, TFIIF, TFIIH) bind sequentially
   to the promoter.
2. **TFIID** contains the **TATA-binding protein (TBP)**, which binds to the **TATA box** (consensus
   TATAAA, approximately $25\;\mathrm{bp}$ upstream of the transcription start site).
3. Additional transcription factors and RNA polymerase II assemble, forming the **pre-initiation
   complex (PIC)**.
4. TFIIH has helicase activity that unwinds DNA and kinase activity that phosphorylates the
   C-terminal domain (CTD) of RNA polymerase II, releasing it from the promoter to begin elongation.

### Elongation

- RNA polymerase unwinds DNA ahead and rewinds it behind, transcribing approximately $40$--$60\;\mathrm{nt/s}$.
- Nascent mRNA exits through a channel in RNA polymerase.

### Termination

**Prokaryotes**: two main mechanisms:
- **Rho-dependent**: the **Rho factor** (a helicase) binds to the rut site on the mRNA and
  chases RNA polymerase, dissociating the complex when it catches up.
- **Rho-independent**: the mRNA forms a **hairpin loop** followed by a poly-U tract. The hairpin
  causes RNA polymerase to pause, and the weak poly-U--dA hybrid dissociates.

**Eukaryotes**: transcription continues well past the gene. The pre-mRNA is cleaved at a polyadenylation
signal (AAUAAA), and the polymerase dissociates.

### Post-Transcriptional Modification (Eukaryotes)

1. **$5'$ capping**: addition of 7-methylguanosine cap ($\mathrm{m}^7\mathrm{G}$). Functions:
   protects mRNA from $5'$ exonuclease degradation; aids ribosome binding; facilitates nuclear export.
2. **$3'$ polyadenylation**: cleavage after AAUAAA signal and addition of $200$--$250$ adenosine
   residues (poly-A tail). Functions: stabilises mRNA; aids nuclear export; enhances translation.
3. **Splicing**: removal of introns by the **spliceosome** (a complex of snRNPs --- small nuclear
   ribonucleoproteins). Introns are excised and exons are ligated. **Alternative splicing** allows
   one gene to produce multiple mRNA isoforms (and therefore multiple protein variants).

---

## 3. Translation in Detail

### tRNA Structure

Transfer RNA (tRNA) is a small ($\approx 75\;\mathrm{nt}$) RNA molecule that carries a specific
amino acid and recognises the corresponding codon on mRNA.

**Key features:**

- **Acceptor stem**: the $3'$ end has the sequence CCA, where the amino acid is attached by
  **aminoacyl-tRNA synthetase** (one enzyme per amino acid).
- **Anticodon loop**: contains the **anticodon** (three nucleotides complementary to the mRNA codon).
- **D loop and T$\psi$C loop**: structural elements involved in tRNA folding and ribosome binding.
- **Modified bases**: e.g., inosine (I) in the anticodon can pair with U, C, or A, allowing
  **wobble** at the third codon position.

### The Wobble Hypothesis (Crick, 1966)

The $5'$ base of the anticodon (which pairs with the $3'$ base of the codon) has relaxed base-pairing
rules ("wobble"):

| Anticodon $5'$ base | Codon $3'$ bases recognised |
| ------------------- | -------------------------- |
| C                  | G                         |
| A                  | U                         |
| U                  | A or G                    |
| G                  | C or U                    |
| I (inosine)        | U, C, or A                |

Wobble explains why the $61$ sense codons are read by fewer than $61$ tRNAs (humans have
approximately $45$ tRNA species).

### Ribosome Structure

Ribosomes consist of a **large subunit** and a **small subunit**, composed of rRNA and proteins.

| Component      | Prokaryotes ($70\mathrm{S}$) | Eukaryotes ($80\mathrm{S}$) |
| -------------- | --------------------------- | --------------------------- |
| Small subunit  | $30\mathrm{S}$ (16S rRNA + proteins) | $40\mathrm{S}$ (18S rRNA + proteins) |
| Large subunit  | $50\mathrm{S}$ (23S + 5S rRNA + proteins) | $60\mathrm{S}$ (28S + 5.8S + 5S rRNA + proteins) |

**Three tRNA binding sites:**

- **A site (aminoacyl)**: holds the incoming aminoacyl-tRNA.
- **P site (peptidyl)**: holds the tRNA carrying the growing polypeptide chain.
- **E site (exit)**: holds the deacylated tRNA before it exits the ribosome.

### Steps of Translation

**Initiation:**

1. The small ribosomal subunit binds to the $5'$ cap of the mRNA (in eukaryotes) and scans along
   the mRNA until it finds the start codon **AUG** in the context of the **Kozak consensus sequence**
   (in eukaryotes: GCCRCCAUGG).
2. The initiator tRNA carrying **methionine** (Met) binds to the start codon in the P site.
3. The large ribosomal subunit joins, forming the complete translation complex.
4. Initiation factors (eIFs in eukaryotes, IFs in prokaryotes) are released.

**Elongation:**

5. **Aminoacyl-tRNA delivery**: an aminoacyl-tRNA matching the next codon enters the A site,
   escorted by **elongation factor Tu (EF-Tu)** in prokaryotes (eEF1$\alpha$ in eukaryotes), which
   hydrolyses GTP.
6. **Peptide bond formation**: **peptidyl transferase** (an rRNA ribozyme in the large subunit)
   catalyses the formation of a peptide bond between the amino acid in the P site and the amino acid
   in the A site.
7. **Translocation**: **elongation factor G (EF-G)** in prokaryotes (eEF2 in eukaryotes), using GTP,
   moves the ribosome by one codon: the empty tRNA moves to the E site and exits; the peptidyl-tRNA
   moves from the A site to the P site; the next codon is positioned in the A site.

**Termination:**

8. When a **stop codon** (UAA, UAG, UGA) enters the A site, there is no corresponding tRNA.
9. **Release factors** (RF1, RF2 in prokaryotes; eRF1 in eukaryotes) bind to the stop codon.
10. Peptidyl transferase hydrolyses the bond between the polypeptide and the tRNA, releasing the
    polypeptide.
11. The ribosome dissociates into its subunits. Release factor RF3 (GTPase) facilitates this.

### Post-Translational Modifications

After translation, polypeptides may undergo:

- **Folding**: assisted by **chaperone proteins** (e.g., Hsp70, GroEL/GroES) that prevent
  aggregation and promote correct folding.
- **Cleavage**: removal of signal peptides, propeptides (e.g., insulin is cleaved from proinsulin).
- **Chemical modifications**: phosphorylation, glycosylation, acetylation, lipidation (addition of
  fatty acid groups for membrane anchoring).
- **Assembly**: quaternary structure assembly (e.g., haemoglobin $\alpha_2\beta_2$).

---

## 4. Gene Regulation

### The Lac Operon (Extended)

The **lac operon** in _E. coli_ is subject to dual regulation:

**Negative control (repressor):**
- Gene $lacI$ (constitutively expressed) produces the **lac repressor** protein.
- In the absence of lactose, the repressor binds to the operator, blocking RNA polymerase.
- When lactose is present, allolactose (an isomer of lactose) binds to the repressor, causing a
  conformational change that reduces its affinity for the operator. The repressor detaches, and RNA
  polymerase can transcribe the structural genes.

**Positive control (CAP-cAMP):**
- When glucose is low, intracellular **cAMP** levels are high (adenylate cyclase is active).
- cAMP binds to **CAP** (catabolite activator protein), and the cAMP-CAP complex binds to the CAP
  site upstream of the promoter, bending the DNA and facilitating RNA polymerase binding.
- When glucose is high, cAMP is low, CAP is inactive, and the lac operon is transcribed at very low
  basal levels (**catabolite repression**).

**Summary table:**

| Glucose | Lactose | cAMP  | CAP   | Repressor | lac operon |
| ------- | ------- | ----- | ----- | --------- | ---------- |
| High    | Absent  | Low   | Inactive | Bound   | OFF        |
| High    | Present | Low   | Inactive | Unbound | Very low (basal) |
| Low     | Absent  | High  | Active  | Bound   | OFF        |
| Low     | Present | High  | Active  | Unbound | ON (maximal) |

### The Trp Operon (Repressible Operon)

The **trp operon** in _E. coli_ regulates tryptophan biosynthesis. It is normally ON (tryptophan is
needed) and is turned OFF when tryptophan is abundant.

- **Repressor protein** (product of $trpR$) is inactive alone.
- When **tryptophan** (corepressor) binds to the repressor, the complex binds to the operator,
  blocking transcription.
- **Attenuation**: in addition to the repressor, the trp operon has a **leader peptide sequence**
  with two consecutive tryptophan codons. During transcription, if tryptophan is abundant, the
  ribosome quickly translates the leader peptide, allowing formation of a terminator hairpin
  (attenuator), causing premature transcription termination. If tryptophan is scarce, the ribosome
  stalls at the tryptophan codons, preventing terminator formation, and the full mRNA is transcribed.

### Epigenetics

Epigenetic regulation involves heritable changes in gene expression that do not alter the DNA
sequence.

**DNA methylation:**

- Addition of a methyl group ($\mathrm{CH}_3$) to cytosine bases at CpG dinucleotides by **DNA
  methyltransferases**.
- **Hypermethylation** of promoter regions generally **silences** gene expression by preventing
  transcription factor binding or recruiting proteins that condense chromatin.
- **Hypomethylation** is associated with active gene expression.
- **Genomic imprinting**: certain genes are expressed in a parent-of-origin-specific manner due to
  differential methylation (e.g., IGF2 is expressed from the paternal allele; H19 from the maternal
  allele).

**Histone modification:**

- Histone proteins have N-terminal "tails" that can be chemically modified:
  - **Acetylation** (by histone acetyltransferases, HATs): adds acetyl groups to lysine residues,
    neutralising the positive charge and reducing histone-DNA binding. This **loosens chromatin**
    (**euchromatin**) and promotes transcription.
  - **Methylation** (by histone methyltransferases): can activate or repress transcription depending
    on which residue is methylated (e.g., H3K4me3 activates; H3K9me3 and H3K27me3 repress).
  - **Phosphorylation**: associated with chromosome condensation during mitosis.

**Epigenetic inheritance:**

- During DNA replication, maintenance methyltransferases copy the methylation pattern to the new
  strand, allowing epigenetic marks to be inherited through cell division.
- Environmental factors (diet, stress, toxins) can alter epigenetic marks, with potential
  transgenerational effects.

---

## 5. Genetic Engineering Techniques

### Restriction Enzymes (Restriction Endonucleases)

Bacterial enzymes that recognise specific **palindromic DNA sequences** (usually $4$--$8\;\mathrm{bp}$)
and cut both strands at specific positions within or near the recognition site.

| Enzyme | Recognition sequence | Cut type            |
| ------ | -------------------- | ------------------- |
| EcoRI  | $5'$-G$\vert$AATTC-$3'$ | Sticky ends (5' overhang) |
| BamHI  | $5'$-G$\vert$GATCC-$3'$ | Sticky ends (5' overhang) |
| HindIII | $5'$-A$\vert$AGCTT-$3'$ | Sticky ends (5' overhang) |
| SmaI   | $5'$-CCC$\vert$GGG-$3'$ | Blunt ends          |

**Sticky ends** (cohesive ends): single-stranded overhangs that can base-pair with complementary
sticky ends from another DNA fragment cut with the same enzyme. This facilitates the formation of
recombinant DNA molecules.

### Recombinant DNA Technology Steps

1. **Isolation**: the gene of interest is cut from genomic DNA using restriction enzymes (or
   synthesised chemically / by PCR).
2. **Insertion into vector**: the gene and a plasmid vector (cut with the same restriction enzyme)
   are mixed. **DNA ligase** forms phosphodiester bonds between the gene and the plasmid.
3. **Transformation**: the recombinant plasmid is introduced into host cells (_E. coli_) by heat
   shock, electroporation, or chemical transformation.
4. **Selection**: cells that have taken up the plasmid are selected using antibiotic resistance
   markers. Blue-white screening (using lacZ gene disruption) distinguishes recombinant from
   non-recombinant colonies.
5. **Expression**: the host cell transcribes and translates the inserted gene, producing the desired
   protein.

### Gel Electrophoresis (Extended)

- **Agarose gel electrophoresis**: separates DNA fragments ($100$--$25000\;\mathrm{bp}$). Higher
  agarose concentration = smaller pore size = better resolution of small fragments.
- **Polyacrylamide gel electrophoresis (PAGE)**: separates smaller fragments ($1$--$1000\;\mathrm{bp}$)
  with higher resolution. Used for DNA sequencing and protein separation.
- **Pulsed-field gel electrophoresis (PFGE)**: separates very large DNA fragments ($10^4$--$10^7\;\mathrm{bp}$)
  by periodically changing the direction of the electric field.

### PCR (Extended)

**Quantitative PCR (qPCR / real-time PCR):** measures the amount of DNA produced in real time using
fluorescent dyes or probes. The cycle threshold ($C_t$) is inversely proportional to the starting
DNA quantity.

**Reverse transcription PCR (RT-PCR):** uses reverse transcriptase to convert RNA into cDNA, which
is then amplified by PCR. Used to measure gene expression (quantitative RT-PCR, qRT-PCR).

---

## 6. Genetic Crosses and Chi-Squared Tests

### Dihybrid Crosses with Linkage

When two genes are on the same chromosome, they do not assort independently. The phenotypic ratio
deviates from $9:3:3:1$.

**Recombination frequency (RF)**:
$$\mathrm{RF} = \frac{\text{number of recombinant offspring}}{\text{total offspring}} \times 100\%$$

- $\mathrm{RF} < 10\%$: genes are closely linked.
- $\mathrm{RF} \approx 50\%$: genes assort independently (on different chromosomes or very far
  apart).

### Chi-Squared Test

Used to determine whether observed data deviate significantly from expected ratios:

$$\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$$

**Steps:**
1. State the null hypothesis ($H_0$): the observed ratios match the expected ratios.
2. Calculate expected values from the total and expected ratio.
3. Calculate $\chi^2$.
4. Determine degrees of freedom: $\mathrm{df} = n - 1$ (where $n$ is the number of categories).
5. Compare $\chi^2$ to the critical value at the chosen significance level ($p = 0.05$).
6. If $\chi^2 >$ critical value, reject $H_0$; the deviation is statistically significant.

### Pedigree Analysis

| Feature                           | Autosomal dominant              | Autosomal recessive                | X-linked recessive            |
| --------------------------------- | ------------------------------ | ---------------------------------- | ----------------------------- |
| **Affected individuals per generation** | Usually every generation | May skip generations               | Mostly males; skips generations via carrier females |
| **Affected children of unaffected parents** | No (at least one parent affected) | Yes (both parents are carriers) | Yes (mother is carrier, father unaffected) |
| **Male-to-male transmission**     | Yes                            | Yes                               | No                            |
| **Carrier females**              | No                             | Yes                               | Yes                           |
| **Ratio in carrier $\times$ normal mating** | $1:1$ affected:normal | $1:2:1$ (affected:carrier:normal) | $1:1$ (affected male:normal female) |

---

## Common Pitfalls

- Confusing the **leading and lagging strands**: the leading strand is synthesised continuously
  toward the fork; the lagging strand is synthesised discontinuously away from the fork.
- Stating that "DNA polymerase synthesises in the $3' \to 5'$ direction": DNA polymerase always
  synthesises in the $5' \to 3'$ direction. The template is read $3' \to 5'$.
- Confusing **introns** and **exons**: introns are non-coding regions removed by splicing; exons are
  coding regions retained in the mature mRNA.
- Assuming all mutations are harmful: most are neutral, some are beneficial, and the beneficial ones
  are the raw material for natural selection.
- Confusing **replication** and **transcription**: replication copies DNA to produce DNA;
  transcription copies DNA to produce RNA.
- Misapplying the chi-squared test with expected values below $5$: the chi-squared test is unreliable
  when any expected value is less than $5$; categories should be combined if necessary.
- Confusing **epigenetic** and **genetic** changes: epigenetic changes alter gene expression without
  changing the DNA sequence; genetic changes alter the DNA sequence itself.

---

## Practice Problems

<details>
<summary>Question 1: DNA Replication -- Leading and Lagging Strand</summary>

A DNA molecule has the following sequence on one strand (template strand for the lagging strand):
$3'$-TACGGAATTCGATCCGAAT-5'. (a) Write the sequence of the complementary strand (template for
the leading strand). (b) Identify the direction of synthesis for each strand. (c) If replication
begins at the left end and proceeds to the right, which strand is the leading strand and which
is the lagging strand? (d) How many RNA primers would be required to replicate this region if
Okazaki fragments are approximately $8$ nucleotides long?

</details>

<details>
<summary>Answer</summary>

(a) Complementary strand: $5'$-ATGCCTTAAGCTAGGCTTA-3'

(b) Both strands are synthesised in the $5' \to 3'$ direction. The complementary strand
($5'$-ATGCCTTAAGCTAGGCTTA-3') is synthesised $5' \to 3'$ (left to right). The template strand
($3'$-TACGGAATTCGATCCGAAT-5') is read $3' \to 5'$ (right to left), and the new strand is
synthesised $5' \to 3'$ (left to right in the Okazaki fragments).

(c) If replication proceeds from left to right:
- The complementary strand ($5'$-ATGCCTTAAGCTAGGCTTA-3') is synthesised continuously toward the
  replication fork $\to$ **leading strand**.
- The template strand ($3'$-TACGGAATTCGATCCGAAT-5') requires Okazaki fragments $\to$ **lagging strand**.

(d) The lagging strand template is $19$ nucleotides long. With Okazaki fragments of
$\approx 8$ nucleotides: $\lceil 19/8 \rceil = 3$ Okazaki fragments, requiring $3$ RNA primers
  (one per fragment). Plus the initial primer on the leading strand.

</details>

<details>
<summary>Question 2: Operon Regulation Prediction</summary>

An _E. coli_ culture is growing in a medium containing lactose but no glucose. Predict whether the
lac operon is ON or OFF. The culture is then supplemented with a high concentration of glucose.
Predict the new state of the lac operon and explain the molecular mechanism, including the roles
of allolactose, cAMP, CAP, and the lac repressor.

</details>

<details>
<summary>Answer</summary>

**With lactose, no glucose**: the lac operon is **ON** (maximal transcription).

Mechanism:
- Lactose is present: allolactose (a lactose isomer) binds to the lac repressor, causing it to
  detach from the operator.
- Glucose is absent: cAMP levels are high (adenylate cyclase is active). cAMP binds to CAP,
  activating it. The cAMP-CAP complex binds to the CAP site, enhancing RNA polymerase binding.
- With no repressor blocking the operator and CAP enhancing transcription, RNA polymerase transcribes
  the lac operon at maximum rate.

**After adding glucose**: the lac operon is **OFF** (or very low basal expression).

Mechanism:
- Glucose is now present: glucose uptake inhibits adenylate cyclase (via the phosphotransferase
  system, decreasing cAMP). With low cAMP, CAP cannot bind to the CAP site, reducing RNA polymerase
  affinity for the promoter.
- Although the repressor is still detached (lactose is still present), the lack of CAP activation
  means RNA polymerase binds poorly and transcription is minimal (**catabolite repression**).
- _E. coli_ preferentially metabolises glucose because it yields more ATP per molecule than lactose
  and does not require inducer synthesis.

</details>

<details>
<summary>Question 3: Chi-Squared Test with Two Genes</summary>

In _Drosophila_, genes for body colour ($b^+$ = grey, $b$ = black) and wing shape ($v^+$ = normal,
$v$ = vestigial) are linked on chromosome 2. A test cross between a double heterozygote ($b^+ b\; v^+ v / b\; b\; v\; v$) and a double recessive ($b\; b\; v\; v / b\; b\; v\; v$) produces the following offspring:

| Phenotype          | Number |
| ------------------ | ------ |
| Grey, normal       | 430    |
| Black, vestigial   | 445    |
| Grey, vestigial    | 65     |
| Black, normal      | 60     |
| **Total**          | **1000** |

(a) Calculate the recombination frequency. (b) Perform a chi-squared test to determine whether
the data deviate from the expected ratio for linked genes at $p = 0.05$ (critical value $= 3.84$
for $1$ df). (c) Calculate the map distance between the two genes.

</details>

<details>
<summary>Answer</summary>

(a) Recombinant phenotypes: grey vestigial ($65$) and black normal ($60$).
Total recombinants: $65 + 60 = 125$.
$\mathrm{RF} = \frac{125}{1000} \times 100\% = 12.5\%$

(b) Expected values (assuming linked genes with $12.5\%$ recombination):
- Parental (grey normal + black vestigial): $87.5\%$ of $1000 = 875$ ($437.5$ each)
- Recombinant (grey vestigial + black normal): $12.5\%$ of $1000 = 125$ ($62.5$ each)

$\chi^2 = \frac{(430 - 437.5)^2}{437.5} + \frac{(445 - 437.5)^2}{437.5} + \frac{(65 - 62.5)^2}{62.5} + \frac{(60 - 62.5)^2}{62.5}$
$= \frac{56.25}{437.5} + \frac{56.25}{437.5} + \frac{6.25}{62.5} + \frac{6.25}{62.5}$
$= 0.129 + 0.129 + 0.100 + 0.100 = 0.458$

$\chi^2 = 0.458 < 3.84$ (critical value). We fail to reject $H_0$. The data do not deviate
significantly from the expected ratio for linked genes with $12.5\%$ recombination.

(c) Map distance: $12.5\;\mathrm{cM}$ (the recombination frequency approximates map distance in
centiMorgans for small distances).

</details>

<details>
<summary>Question 4: Epigenetics and Gene Expression</summary>

A gene is silenced by DNA methylation in a patient's cells. (a) Explain the molecular mechanism
by which DNA methylation silences gene expression. (b) If the patient takes a drug that inhibits
DNA methyltransferases, predict the effect on the gene's expression and explain the potential
consequences. (c) Explain why identical twins, who share the same DNA sequence, can have different
disease susceptibilities.

</details>

<details>
<summary>Answer</summary>

(a) DNA methyltransferases add methyl groups ($\mathrm{CH}_3$) to cytosine residues at CpG dinucleotides
in the promoter region of the gene. Methylated DNA recruits **methyl-CpG-binding domain proteins
(MBDs)**, which in turn recruit **histone deacetylases (HDACs)**. HDACs remove acetyl groups from
histones, increasing the positive charge on histones and strengthening histone-DNA interactions. The
chromatin becomes highly condensed (**heterochromatin**), preventing transcription factors and RNA
polymerase from accessing the promoter. The gene is transcriptionally silenced.

(b) Inhibiting DNA methyltransferases would prevent the maintenance of methylation patterns during
DNA replication. Over successive cell divisions, the promoter would become progressively
hypomethylated. The chromatin would relax (become euchromatin), and transcription factors would
regain access to the promoter. Gene expression would increase (or be reactivated). This is the
basis for **epigenetic therapy** in certain cancers (e.g., azacitidine for myelodysplastic syndromes).

(c) Identical twins have the same genome but accumulate different epigenetic modifications over
their lifetimes due to: different environmental exposures (diet, toxins, stress, physical activity),
different stochastic (random) epigenetic changes, and different in utero environments. These
epigenetic differences alter gene expression patterns, contributing to discordant disease
susceptibility (e.g., one twin develops autoimmune disease or cancer while the other does not).

</details>

<details>
<summary>Question 5: Genetic Engineering Design</summary>

Design a procedure to produce human growth hormone (HGH) using recombinant DNA technology in _E. coli_.
Include the following steps: (a) obtaining the HGH gene, (b) selecting a suitable plasmid vector,
(c) creating the recombinant plasmid, (d) transforming _E. coli_, (e) selecting transformed
colonies, (f) inducing HGH expression. Explain the role of each enzyme and genetic element used.

</details>

<details>
<summary>Answer</summary>

(a) **Obtaining the HGH gene**: extract mRNA from human pituitary cells, use reverse transcriptase to
 synthesise cDNA. Amplify the HGH cDNA by PCR using primers that incorporate restriction sites
(e.g., EcoRI and BamHI at the $5'$ and $3'$ ends). This produces a gene without introns (essential
for expression in prokaryotes, which cannot splice eukaryotic introns).

(b) **Vector selection**: use a plasmid with: an origin of replication (for replication in _E. coli_),
an antibiotic resistance gene (e.g., ampicillin resistance, amp$^R$), a multiple cloning site (MCS)
with EcoRI and BamHI sites, and a promoter (e.g., lac promoter for inducible expression).

(c) **Creating the recombinant plasmid**: digest both the HGH cDNA and the plasmid with EcoRI and
BamHI. Mix the fragments with **DNA ligase**, which forms phosphodiester bonds between the HGH gene
and the opened plasmid.

(d) **Transformation**: introduce the ligation mixture into competent _E. coli_ cells by heat shock
($42^\circ\mathrm{C}$ for $90\;\mathrm{s}$) or electroporation. Allow recovery in rich medium.

(e) **Selection**: plate cells on agar containing ampicillin. Only cells that have taken up the
plasmid (with amp$^R$) will grow. To distinguish recombinant from non-recombinant colonies, use
blue-white screening: the plasmid carries the lacZ gene in the MCS; insertion of the HGH gene
disrupts lacZ, so colonies containing the recombinant plasmid are white (X-gal + IPTG in the
medium).

(f) **Inducing expression**: grow the recombinant _E. coli_ in culture, then add IPTG (isopropyl
$\beta$-D-1-thiogalactopyranoside) to induce the lac promoter. The _E. coli_ transcribes and
translates the HGH gene, producing the protein. The HGH can be purified from the culture using
chromatography or antibody-based methods.

</details>

---

## Worked Examples

**Worked Example: Calculating DNA Replication Time**

The human genome is $3.2 \times 10^9\;\mathrm{bp}$. Eukaryotic DNA polymerase synthesises at
$\approx 50\;\mathrm{nt/s}$. The average distance between origins of replication is
$\approx 150\;\mathrm{kb}$. Calculate the minimum time required to replicate the entire genome.

<details>
<summary>Solution</summary>

Number of replication origins: $\frac{3.2 \times 10^9}{150 \times 10^3} \approx 21333$ origins.

Each replication fork synthesises DNA at $50\;\mathrm{nt/s}$. Each origin produces two replication
forks (bidirectional replication), so the rate per origin is $2 \times 50 = 100\;\mathrm{nt/s}$.

Length per replication unit: $150\;\mathrm{kb} = 150000\;\mathrm{bp}$.

Time per replication unit: $\frac{150000}{100} = 1500\;\mathrm{s} = 25\;\mathrm{minutes}$.

Since all origins fire approximately simultaneously (during S phase), the total replication time
is approximately $25$ minutes (plus the time for origin firing, which is staggered over
$\approx 1$--$2$ hours in reality). The actual S phase in human cells lasts $6$--$8$ hours,
reflecting the staggered activation of origins and other cellular processes.

</details>

**Worked Example: Transcription and Translation -- Gene Length Calculation**

A protein has a molecular weight of $55\;\mathrm{kDa}$ and an average amino acid molecular weight of
$110\;\mathrm{Da}$. The gene has $4$ introns with an average length of $1200\;\mathrm{bp}$ and $5$
exons. (a) Calculate the number of amino acids and the minimum coding sequence length. (b) If the
mature mRNA is $1800\;\mathrm{bp}$ long, what proportion is coding sequence? (c) Calculate the
pre-mRNA length.

<details>
<summary>Solution</summary>

(a) Number of amino acids: $\frac{55000}{110} = 500$ amino acids.

Coding sequence: $500 \times 3 = 1500\;\mathrm{bp}$.

(b) Proportion of mature mRNA that is coding: $\frac{1500}{1800} = 83.3\%$.

The remaining $300\;\mathrm{bp}$ ($16.7\%$) are the $5'$ and $3'$ untranslated regions (UTRs).

(c) Pre-mRNA length = exons + introns = $1800 + (4 \times 1200) = 1800 + 4800 = 6600\;\mathrm{bp}$.

The introns constitute $\frac{4800}{6600} = 72.7\%$ of the pre-mRNA, consistent with the
observation that most human genes consist predominantly of non-coding intronic sequence.

</details>

---

## Common Pitfalls (Expanded)

- **Confusing leading and lagging strands**: leading = continuous, toward fork; lagging = discontinuous,
  away from fork, Okazaki fragments.
- **DNA polymerase direction**: always synthesises $5' \to 3'$; the template is read $3' \to 5'$.
- **Confusing introns and exons**: introns = removed by splicing; exons = retained in mature mRNA.
- **All mutations are harmful**: most are neutral; beneficial mutations drive evolution.
- **Confusing replication and transcription**: replication = DNA $\to$ DNA; transcription = DNA $\to$ RNA.
- **Chi-squared test limitations**: unreliable if any expected value $< 5$.
- **Epigenetic vs genetic**: epigenetic = gene expression changes without DNA sequence change.

---

## Exam-Style Problems

<details>
<summary>Problem 1: Extended Response -- DNA Replication and Mutagens</summary>

Describe the process of DNA replication, naming all enzymes involved and explaining their functions.
Explain how each of the following mutagens causes mutations and the type of mutation produced:
(a) UV radiation (thymine dimers), (b) nitrous acid (deamination), (c) benzopyrene (intercalation).
Explain how the cell repairs UV-induced damage through nucleotide excision repair (NER).

</details>

<details>
<summary>Problem 2: Quantitative -- PCR and qPCR</summary>

A researcher uses qPCR to quantify the expression of gene $X$ in two tissue samples. For sample A,
the threshold is reached at cycle 22; for sample B, at cycle 28. The standard curve (using known
copy numbers) shows that 1 log$_{10}$ difference in copy number corresponds to 3.32 cycles.
(a) Calculate the fold difference in gene $X$ expression between samples A and B. (b) Explain
why qPCR uses a fluorescent DNA-binding dye or probe rather than measuring the final product by
gel electrophoresis. (c) What is the role of the reference (housekeeping) gene in qPCR analysis?

</details>

<details>
<summary>Problem 3: Extended Response -- Operon Regulation Comparison</summary>

Compare and contrast the lac operon and trp operon in _E. coli_, addressing: (a) whether each is
inducible or repressible, (b) the role of the effector molecule, (c) the mechanism of regulation
at the operator, and (d) any additional regulatory mechanism (catabolite repression for lac;
attenuation for trp). Explain the adaptive advantage of each regulatory strategy.

</details>

<details>
<summary>Problem 4: Extended Response -- Genetic Engineering Ethics</summary>

Golden Rice is genetically engineered to produce beta-carotene (provitamin A) in the endosperm,
addressing vitamin A deficiency in developing countries. (a) Describe the steps used to create
Golden Rice. (b) Discuss two ecological concerns about widespread cultivation of GM crops. (c)
Evaluate the argument that GM crops should be banned due to the precautionary principle, considering
the potential benefits for human health.

</details>

<details>
<summary>Problem 5: Data Analysis -- Pedigree and Probability</summary>

A pedigree shows a family with an autosomal recessive condition (cystic fibrosis, CF). Individual
I-1 is unaffected, I-2 is unaffected. They have two children: II-1 (unaffected daughter) and II-2
(affected son). II-1 marries an unrelated unaffected man (II-3) with no family history of CF.
They have one child, III-1 (unaffected). (a) Determine the genotypes of all individuals. (b)
Calculate the probability that individual II-1 is a carrier. (c) If II-1 and II-3 have another
child, what is the probability it will have CF? (d) The population carrier frequency for CF is
approximately $1$ in $25$. How does this affect the probability for a random mating?

</details>

---

## If You Get These Wrong, Revise:

- **Molecular biology -- DNA and proteins** --> Review [./molecular-biology](./molecular-biology)
- **Cell biology -- organelles** --> Review [./cell-biology](./cell-biology)
- **Enzyme kinetics and metabolism** --> Review [./metabolism-cell-biology](./metabolism-cell-biology)
- **Evolution and population genetics** --> Review [./evolution-depth](./evolution-depth)
- **Immunology and antibodies** --> Review [./immunology](./immunology)
