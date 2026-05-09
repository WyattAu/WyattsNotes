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
| **Primase**                  | Synthesises short RNA primers ($5$--$10$ nucleotides) complementary to the template strand. RNA primers provide a free $3'$-$\mathrm{'\{'}OH{'\}'}$ for DNA polymerase. |
| **DNA polymerase III**       | (Prokaryotes) The main replicative polymerase. Adds nucleotides to the $3'$ end, synthesising at $\approx 1000\;\mathrm{'\{'}nt/s{'\}'}$. Has $3' \to 5'$ proofreading exonuclease activity. |
| **DNA polymerase I**         | (Prokaryotes) Removes RNA primers ($5' \to 3'$ exonuclease activity) and replaces them with DNA.             |
| **DNA ligase**               | Forms phosphodiester bonds between Okazaki fragments on the lagging strand (and between primer replacements).   |
| **Sliding clamp (PCNA in eukaryotes, $\beta$-clamp in prokaryotes)** | Ring-shaped protein that encircles DNA, tethering DNA polymerase to the template for processive synthesis. |

### Leading and Lagging Strands

DNA polymerase can only synthesise in the $5' \to 3'$ direction. Since the two template strands are
antiparallel, synthesis proceeds differently on each:

- **Leading strand**: synthesised continuously in the $5' \to 3'$ direction, toward the replication
  fork. Only one RNA primer is needed.
- **Lagging strand**: synthesised discontinuously, away from the replication fork, in short segments
  called **Okazaki fragments** ($1000$--$2000\;\mathrm{'\{'}nt{'\}'}$ in prokaryotes; $100$--$200\;\mathrm{'\{'}nt{'\}'}$
  in eukaryotes). Each fragment requires its own RNA primer.

### Okazaki Fragment Processing

1. DNA polymerase III synthesises an Okazaki fragment, stopping when it reaches the RNA primer of
   the previous fragment.
2. DNA polymerase I removes the RNA primer ($5' \to 3'$ exonuclease) and replaces it with DNA.
3. DNA ligase seals the remaining nick (the gap between the $3'$-$\mathrm{'\{'}OH{'\}'}$ of the newly
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
| **Okazaki fragment length** | $1000$--$2000\;\mathrm{'\{'}nt{'\}'}$                     | $100$--$200\;\mathrm{'\{'}nt{'\}'}$                          |
| **Replication rate**       | $\approx 1000\;\mathrm{'\{'}nt/s{'\}'}$                   | $\approx 50\;\mathrm{'\{'}nt/s{'\}'}$ (but many forks simultaneously) |
| **Telomeres**              | Circular chromosomes (no ends)                   | Linear chromosomes; telomeres protect ends           |
| **Telomerase**             | Not needed                                       | Extends $3'$ ends of chromosomes; reverse transcriptase + RNA template |

### The End Replication Problem

In eukaryotes, the leading strand can be synthesised to the very end of the chromosome, but the
lagging strand cannot complete the terminal Okazaki fragment (there is no upstream primer to replace).
This results in a progressive shortening of chromosomes with each round of replication ($\approx 50$--$200\;\mathrm{'\{'}bp{'\}'}$
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
5. After synthesising approximately $10\;\mathrm{'\{'}nt{'\}'}$, the sigma factor dissociates.

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
   TATAAA, approximately $25\;\mathrm{'\{'}bp{'\}'}$ upstream of the transcription start site).
3. Additional transcription factors and RNA polymerase II assemble, forming the **pre-initiation
   complex (PIC)**.
4. TFIIH has helicase activity that unwinds DNA and kinase activity that phosphorylates the
   C-terminal domain (CTD) of RNA polymerase II, releasing it from the promoter to begin elongation.

### Elongation

- RNA polymerase unwinds DNA ahead and rewinds it behind, transcribing approximately $40$--$60\;\mathrm{'\{'}nt/s{'\}'}$.
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

1. **$5'$ capping**: addition of 7-methylguanosine cap ($\mathrm{'\{'}m{'\}'}^7\mathrm{'\{'}G{'\}'}$). Functions:
   protects mRNA from $5'$ exonuclease degradation; aids ribosome binding; facilitates nuclear export.
2. **$3'$ polyadenylation**: cleavage after AAUAAA signal and addition of $200$--$250$ adenosine
   residues (poly-A tail). Functions: stabilises mRNA; aids nuclear export; enhances translation.
3. **Splicing**: removal of introns by the **spliceosome** (a complex of snRNPs --- small nuclear
   ribonucleoproteins). Introns are excised and exons are ligated. **Alternative splicing** allows
   one gene to produce multiple mRNA isoforms (and therefore multiple protein variants).

---

## 3. Translation in Detail

### tRNA Structure

Transfer RNA (tRNA) is a small ($\approx 75\;\mathrm{'\{'}nt{'\}'}$) RNA molecule that carries a specific
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

| Component      | Prokaryotes ($70\mathrm{'\{'}S{'\}'}$) | Eukaryotes ($80\mathrm{'\{'}S{'\}'}$) |
| -------------- | --------------------------- | --------------------------- |
| Small subunit  | $30\mathrm{'\{'}S{'\}'}$ (16S rRNA + proteins) | $40\mathrm{'\{'}S{'\}'}$ (18S rRNA + proteins) |
| Large subunit  | $50\mathrm{'\{'}S{'\}'}$ (23S + 5S rRNA + proteins) | $60\mathrm{'\{'}S{'\}'}$ (28S + 5.8S + 5S rRNA + proteins) |

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

- Addition of a methyl group ($\mathrm{'\{'}CH{'\}'}_3$) to cytosine bases at CpG dinucleotides by **DNA
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

Bacterial enzymes that recognise specific **palindromic DNA sequences** (usually $4$--$8\;\mathrm{'\{'}bp{'\}'}$)
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

- **Agarose gel electrophoresis**: separates DNA fragments ($100$--$25000\;\mathrm{'\{'}bp{'\}'}$). Higher
  agarose concentration = smaller pore size = better resolution of small fragments.
- **Polyacrylamide gel electrophoresis (PAGE)**: separates smaller fragments ($1$--$1000\;\mathrm{'\{'}bp{'\}'}$)
  with higher resolution. Used for DNA sequencing and protein separation.
- **Pulsed-field gel electrophoresis (PFGE)**: separates very large DNA fragments ($10^4$--$10^7\;\mathrm{'\{'}bp{'\}'}$)
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
$$\mathrm{'\{'}RF{'\}'} = \frac{\text{'\{'}number of recombinant offspring{'\}'}}{\text{'\{'}total offspring{'\}'}} \times 100\%$$

- $\mathrm{'\{'}RF{'\}'} < 10\%$: genes are closely linked.
- $\mathrm{'\{'}RF{'\}'} \approx 50\%$: genes assort independently (on different chromosomes or very far
  apart).

### Chi-Squared Test

Used to determine whether observed data deviate significantly from expected ratios:

$$\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$$

**Steps:**
1. State the null hypothesis ($H_0$): the observed ratios match the expected ratios.
2. Calculate expected values from the total and expected ratio.
3. Calculate $\chi^2$.
4. Determine degrees of freedom: $\mathrm{'\{'}df{'\}'} = n - 1$ (where $n$ is the number of categories).
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
$\mathrm{'\{'}RF{'\}'} = \frac{125}{1000} \times 100\% = 12.5\%$

(b) Expected values (assuming linked genes with $12.5\%$ recombination):
- Parental (grey normal + black vestigial): $87.5\%$ of $1000 = 875$ ($437.5$ each)
- Recombinant (grey vestigial + black normal): $12.5\%$ of $1000 = 125$ ($62.5$ each)

$\chi^2 = \frac{(430 - 437.5)^2}{437.5} + \frac{(445 - 437.5)^2}{437.5} + \frac{(65 - 62.5)^2}{62.5} + \frac{(60 - 62.5)^2}{62.5}$
$= \frac{56.25}{437.5} + \frac{56.25}{437.5} + \frac{6.25}{62.5} + \frac{6.25}{62.5}$
$= 0.129 + 0.129 + 0.100 + 0.100 = 0.458$

$\chi^2 = 0.458 < 3.84$ (critical value). We fail to reject $H_0$. The data do not deviate
significantly from the expected ratio for linked genes with $12.5\%$ recombination.

(c) Map distance: $12.5\;\mathrm{'\{'}cM{'\}'}$ (the recombination frequency approximates map distance in
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

(a) DNA methyltransferases add methyl groups ($\mathrm{'\{'}CH{'\}'}_3$) to cytosine residues at CpG dinucleotides
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
($42^\circ\mathrm{'\{'}C{'\}'}$ for $90\;\mathrm{'\{'}s{'\}'}$) or electroporation. Allow recovery in rich medium.

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

The human genome is $3.2 \times 10^9\;\mathrm{'\{'}bp{'\}'}$. Eukaryotic DNA polymerase synthesises at
$\approx 50\;\mathrm{'\{'}nt/s{'\}'}$. The average distance between origins of replication is
$\approx 150\;\mathrm{'\{'}kb{'\}'}$. Calculate the minimum time required to replicate the entire genome.

<details>
<summary>Solution</summary>

Number of replication origins: $\frac{3.2 \times 10^9}{150 \times 10^3} \approx 21333$ origins.

Each replication fork synthesises DNA at $50\;\mathrm{'\{'}nt/s{'\}'}$. Each origin produces two replication
forks (bidirectional replication), so the rate per origin is $2 \times 50 = 100\;\mathrm{'\{'}nt/s{'\}'}$.

Length per replication unit: $150\;\mathrm{'\{'}kb{'\}'} = 150000\;\mathrm{'\{'}bp{'\}'}$.

Time per replication unit: $\frac{150000}{100} = 1500\;\mathrm{'\{'}s{'\}'} = 25\;\mathrm{'\{'}minutes{'\}'}$.

Since all origins fire approximately simultaneously (during S phase), the total replication time
is approximately $25$ minutes (plus the time for origin firing, which is staggered over
$\approx 1$--$2$ hours in reality). The actual S phase in human cells lasts $6$--$8$ hours,
reflecting the staggered activation of origins and other cellular processes.

</details>

**Worked Example: Transcription and Translation -- Gene Length Calculation**

A protein has a molecular weight of $55\;\mathrm{'\{'}kDa{'\}'}$ and an average amino acid molecular weight of
$110\;\mathrm{'\{'}Da{'\}'}$. The gene has $4$ introns with an average length of $1200\;\mathrm{'\{'}bp{'\}'}$ and $5$
exons. (a) Calculate the number of amino acids and the minimum coding sequence length. (b) If the
mature mRNA is $1800\;\mathrm{'\{'}bp{'\}'}$ long, what proportion is coding sequence? (c) Calculate the
pre-mRNA length.

<details>
<summary>Solution</summary>

(a) Number of amino acids: $\frac{55000}{110} = 500$ amino acids.

Coding sequence: $500 \times 3 = 1500\;\mathrm{'\{'}bp{'\}'}$.

(b) Proportion of mature mRNA that is coding: $\frac{1500}{1800} = 83.3\%$.

The remaining $300\;\mathrm{'\{'}bp{'\}'}$ ($16.7\%$) are the $5'$ and $3'$ untranslated regions (UTRs).

(c) Pre-mRNA length = exons + introns = $1800 + (4 \times 1200) = 1800 + 4800 = 6600\;\mathrm{'\{'}bp{'\}'}$.

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

---

## Additional Worked Examples

**Worked Example: Nucleotide Counting and Chargaff's Rules**

A double-stranded DNA molecule is $1200\;\mathrm{'\{'}bp{'\}'}$ long and contains $300$ adenine bases on one strand.
(a) Determine the number of each nucleotide on both strands. (b) Calculate the total number of hydrogen
bonds holding the two strands together. (c) If this DNA codes for a protein, what is the maximum number
of amino acids in the protein?

<details>
<summary>Solution</summary>

(a) In double-stranded DNA, A pairs with T and G pairs with C (Chargaff's rules: $A = T$, $G = C$).

If strand 1 has $300$ A, then:
- Strand 1: $A = 300$, and strand 2 (complementary) has $T = 300$ at those positions.
- Total $T$ in the molecule: the $300$ T on strand 2 that pair with the $300$ A on strand 1. But strand 1 also has its own T bases.

Total base pairs $= 1200$. Total nucleotides $= 2400$.

Let $A_1$ be the number of A on strand 1 $= 300$.
Then $T_2 = A_1 = 300$ (T on strand 2 pairing with A on strand 1).

Since the molecule has $2400$ total nucleotides, and $A_{total} = T_{total}$, $G_{total} = C_{total}$:
$A_{total} + T_{total} + G_{total} + C_{total} = 2400$
$2A_{total} + 2G_{total} = 2400$
$A_{total} + G_{total} = 1200$

But we only know $A_1 = 300$, not $A_{total}$. We need more information. If the problem states that one strand has $300$ A bases, then:
- Strand 1 has $A_1 = 300$, so strand 2 has $T_2 = 300$ at those positions.
- Strand 1 has $1200 - 300 = 900$ remaining positions. If $G_1 = x$, then $C_1 = y$ and $T_1 = z$ where $x + y + z = 900$.
- Without additional information about the GC content, we cannot determine unique values. However, the key relationships are:
  - $A_{total} = T_{total}$ and $G_{total} = C_{total}$.
  - If the GC content is $40\%$, then $G_{total} = C_{total} = 0.20 \times 2400 = 480$ each, and $A_{total} = T_{total} = 240$ each.

(b) A--T pairs have 2 hydrogen bonds; G--C pairs have 3 hydrogen bonds.
If GC content is $40\%$: $480$ G--C pairs $\times 3 = 1440$ H-bonds; $240$ A--T pairs $\times 2 = 480$ H-bonds. Total $= 1920$ H-bonds.

(c) Maximum amino acids $= \frac{1200}{3} = 400$ amino acids (assuming no stop codons in the coding sequence, which is unrealistic; the actual number would be fewer due to stop codons and non-coding regions).

</details>

**Worked Example: Restriction Mapping**

A circular plasmid of $5000\;\mathrm{'\{'}bp{'\}'}$ is digested individually and in combination with two restriction
enzymes, EcoRI and BamHI. The results are:

- EcoRI alone: $2000\;\mathrm{'\{'}bp{'\}'}$, $3000\;\mathrm{'\{'}bp{'\}'}$
- BamHI alone: $1500\;\mathrm{'\{'}bp{'\}'}$, $3500\;\mathrm{'\{'}bp{'\}'}$
- EcoRI + BamHI: $500\;\mathrm{'\{'}bp{'\}'}$, $1000\;\mathrm{'\{'}bp{'\}'}$, $1500\;\mathrm{'\{'}bp{'\}'}$, $2000\;\mathrm{'\{'}bp{'\}'}$

Determine the restriction map showing the positions and order of the EcoRI and BamHI sites.

<details>
<summary>Solution</summary>

From single digests:
- EcoRI produces 2 fragments ($2000$ and $3000$), so there are 2 EcoRI sites.
- BamHI produces 2 fragments ($1500$ and $3500$), so there are 2 BamHI sites.

Total fragments from double digest: 4, which equals $2 \times 2$ (the expected number for 2 enzymes with 2 sites each, if no sites overlap).

The double digest fragments sum to: $500 + 1000 + 1500 + 2000 = 5000\;\mathrm{'\{'}bp{'\}'}$ (correct).

To construct the map, compare single and double digest fragments:
- The $1500\;\mathrm{'\{'}bp{'\}'}$ fragment appears in both BamHI alone and the double digest. This means one BamHI--BamHI fragment is not cut by EcoRI. So the $1500\;\mathrm{'\{'}bp{'\}'}$ BamHI fragment remains intact in the double digest.
- The $2000\;\mathrm{'\{'}bp{'\}'}$ EcoRI fragment appears in both EcoRI alone and the double digest. So one EcoRI--EcoRI fragment is not cut by BamHI.

Working through the overlaps:
- The $2000\;\mathrm{'\{'}bp{'\}'}$ EcoRI fragment (from single digest) is cut into $500 + 1500$ in the double digest (since $500 + 1500 = 2000$). Wait -- $2000$ appears in the double digest, so this fragment is NOT cut by BamHI.
- The $3000\;\mathrm{'\{'}bp{'\}'}$ EcoRI fragment is cut by BamHI into $1000 + 2000$ in the double digest. ($1000 + 2000 = 3000$.)

So BamHI cuts within the $3000\;\mathrm{'\{'}bp{'\}'}$ EcoRI fragment, splitting it into $1000$ and $2000$.

Now: the $1500\;\mathrm{'\{'}bp{'\}'}$ BamHI fragment is not cut by EcoRI (it appears intact in the double digest). The $3500\;\mathrm{'\{'}bp{'\}'}$ BamHI fragment is cut by EcoRI into $500 + 1000 + 2000 = 3500$. That gives 3 fragments from one region, but we only have $500$ and $1000$ and $1500$ and $2000$ in the double digest.

Let me reconsider: the $3500\;\mathrm{'\{'}bp{'\}'}$ BamHI fragment is cut by EcoRI. Since the $2000\;\mathrm{'\{'}bp{'\}'}$ EcoRI fragment is uncut, the EcoRI sites must lie within the $3500\;\mathrm{'\{'}bp{'\}'}$ BamHI fragment. The $3500\;\mathrm{'\{'}bp{'\}'}$ region is cut by 2 EcoRI sites into 3 pieces. But we need these pieces plus the intact $1500\;\mathrm{'\{'}bp{'\}'}$ fragment to give the double digest fragments.

The $3500\;\mathrm{'\{'}bp{'\}'}$ BamHI fragment, when cut by 2 EcoRI sites, produces 3 fragments that sum to $3500$. From the double digest, the fragments within this region would be $500$, $1000$, and $2000$ ($500 + 1000 + 2000 = 3500$).

So the order around the circular plasmid is: BamHI -- $500$ -- EcoRI -- $1000$ -- EcoRI -- $2000$ -- BamHI -- $1500$ -- (back to start).

Verification: EcoRI to EcoRI $= 1000\;\mathrm{'\{'}bp{'\}'}$ (short fragment), and the other EcoRI to EcoRI (going the other way around) $= 500 + 1500 + 2000 = 4000$. But EcoRI alone gave $2000$ and $3000$. This does not match.

Let me redo this more carefully. Label the four sites in order around the circle: let us place them as positions on a linear map $0$ to $5000$.

BamHI sites at positions $0$ and $1500$ (giving fragments $1500$ and $3500$).
EcoRI sites need to be placed such that EcoRI-to-EcoRI distances are $2000$ and $3000$.

If EcoRI sites are at positions $a$ and $b$ (with $a < b$), then $b - a = 2000$ (or $3000$) and $(5000 - b) + a = 3000$ (or $2000$).

Case 1: $b - a = 2000$, $(5000 - b) + a = 3000$.

Now, BamHI cuts at $0$ and $1500$. The double digest fragments come from cutting at all four sites.

Case 1a: Place $a = 500$, $b = 2500$. Sites in order: $0$ (BamHI), $500$ (EcoRI), $1500$ (BamHI), $2500$ (EcoRI).
Fragments: $500 - 0 = 500$, $1500 - 500 = 1000$, $2500 - 1500 = 1000$, $5000 - 2500 = 2500$.
Double digest: $500, 1000, 1000, 2500$. This does not match ($500, 1000, 1500, 2000$).

Case 1b: Place $a = 500$, $b = 2500$ is wrong. Let me try $a = 2000$, $b = 4000$. Sites in order: $0$ (BamHI), $1500$ (BamHI), $2000$ (EcoRI), $4000$ (EcoRI).
Fragments: $1500, 500, 2000, 1000$. That gives $500, 1000, 1500, 2000$. This matches.

So the restriction map (going clockwise from position 0):
- BamHI at $0$
- BamHI at $1500$
- EcoRI at $2000$
- EcoRI at $4000$

Fragments: BamHI--BamHI $= 1500$; BamHI--EcoRI $= 500$; EcoRI--EcoRI $= 2000$; EcoRI--BamHI $= 1000$.

Verification: EcoRI alone: $2000$ (between the two EcoRI sites) and $3000$ (the rest of the circle). BamHI alone: $1500$ and $3500$. Double digest: $500, 1000, 1500, 2000$. All correct.

</details>

**Worked Example: Sanger Sequencing Reading**

A Sanger sequencing reaction using the ddNTP chain termination method produces the following gel
electrophoresis results (read from bottom to top, smallest to largest fragment):

| Fragment size (from bottom) | Lane A | Lane T | Lane C | Lane G |
|--------------------------|--------|--------|--------|--------|
| 1 (shortest)             |        |        | band   |        |
| 2                        |        | band   |        |        |
| 3                        |        |        |        | band   |
| 4                        | band   |        |        |        |
| 5                        |        |        | band   |        |
| 6                        |        | band   |        |        |
| 7                        | band   |        |        |        |
| 8                        |        |        |        | band   |
| 9                        |        |        | band   |        |
| 10                       | band   |        |        |        |

Determine the sequence of the template strand ($5' \to 3'$) and the complementary strand.

<details>
<summary>Solution</summary>

In Sanger sequencing, each lane shows fragments terminating with a specific ddNTP. The bands are read
from shortest (bottom) to longest (top), giving the sequence of the **newly synthesised strand** in the
$5' \to 3'$ direction.

Reading from position 1 to 10: C, T, G, A, C, T, A, G, C, A.

New strand ($5' \to 3'$): $5'$-CTGACTAGCA-$3'$

The new strand is synthesised complementary to the template strand. The template strand is read in
the $3' \to 5'$ direction by DNA polymerase, so:

Template strand ($3' \to 5'$): $3'$-GACTGATCGT-$5'$, which written $5' \to 3'$ is:
$5'$-TGCTAGTCAG-$3'$

The coding strand (same as new strand, $5' \to 3'$): $5'$-CTGACTAGCA-$3'$

Translation (assuming the reading frame starts at position 1):
Codons: CTG, ACT, AGC, A
Amino acids: Leu, Thr, Ser (the last nucleotide is incomplete)

</details>

**Worked Example: Genetic Probability with Multiple Genes**

In humans, albinism is caused by an autosomal recessive allele ($a$). Cystic fibrosis is caused by an
autosomal recessive allele ($c$). Both conditions are rare. A couple, both phenotypically normal, have
a child with both albinism and cystic fibrosis. (a) What are the genotypes of the parents? (b) What is
the probability that their next child will be phenotypically normal (neither condition)? (c) What is
the probability that their next child will be a carrier of both conditions but phenotypically normal?

<details>
<summary>Solution</summary>

(a) Since the child has both conditions ($aacc$), each parent must carry at least one recessive allele
for each gene. Both parents are phenotypically normal, so their genotypes are $AaCc$.

(b) For each gene independently, $Aa \times Aa \to \frac{3}{4}$ normal phenotype.
$P(\text{'\{'}normal for both{'\}'}) = \frac{3}{4} \times \frac{3}{4} = \frac{9}{16}$

(c) Carrier of both but normal: genotype must be $AaCc$.
$P(AaCc) = P(Aa) \times P(Cc) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$

(Note: this assumes the two genes are on different chromosomes. If linked, the calculation would
differ depending on the recombination frequency.)

</details>

**Worked Example: Analysing a Pedigree for X-Linked Dominant Inheritance**

A family shows the following pattern for a rare disorder:
- A affected father (I-1) and unaffected mother (I-2) have 4 children: 2 affected daughters, 1 unaffected daughter, 1 affected son.
- One affected daughter (II-1) marries an unaffected man (II-2) and has 2 affected daughters and 1 unaffected son.

(a) Determine the mode of inheritance. (b) State the genotypes of all individuals. (c) Calculate the
probability that II-1 and II-2's next child will be affected.

<details>
<summary>Solution</summary>

(a) Key observations:
- Affected father passes the condition to both sons and daughters (rules out Y-linked).
- All affected fathers' daughters are affected (consistent with X-linked dominant).
- An affected father has an affected son: this rules out X-linked inheritance (fathers pass X only to daughters, Y to sons). An affected son means he received a Y from his father, so the trait must be autosomal dominant.

Wait -- re-reading: the affected father has an affected son. Under X-linked dominant, a father passes his X to daughters and Y to sons, so sons of an affected father should be unaffected. Since there IS an affected son, this is **autosomal dominant**.

(b) Let $D$ = dominant (affected), $d$ = recessive (unaffected).
- I-1: $Dd$ (affected, must carry $d$ since the condition is rare)
- I-2: $dd$ (unaffected)
- Children of I-1 $\times$ I-2: each has $\frac{1}{2}$ probability of $Dd$ (affected) or $dd$ (unaffected).
- II-1 (affected daughter): $Dd$
- II-2 (unaffected husband): $dd$
- II-1 $\times$ II-2: each child has $\frac{1}{2}$ probability of being $Dd$ (affected) or $dd$ (unaffected).

(c) Probability next child is affected: $\frac{1}{2}$.

</details>

---

## Additional Common Pitfalls

- **Confusing PCR primers with RNA primers**: PCR uses DNA primers (short, synthetic, heat-stable); in vivo replication uses RNA primers synthesised by primase.
- **Assuming sticky ends from different enzymes are compatible**: only fragments cut with the same restriction enzyme (or enzymes producing identical overhangs) can be ligated directly.
- **Forgetting that qPCR measures DNA amount, not RNA**: to measure gene expression (RNA), you must first perform reverse transcription (RT-qPCR).
- **Misidentifying the template strand in Sanger sequencing**: the gel bands represent the newly synthesised strand, not the template.
- **Assuming autosomal dominant conditions cannot skip generations**: while rare, reduced penetrance can cause an individual to carry the allele without expressing the phenotype.
- **Confusing recombination frequency with map distance for large distances**: recombination frequency plateaus at $50\%$ for genes far apart or on different chromosomes, so map distances $> 50\;\mathrm{'\{'}cM{'\}'}$ require mapping functions (e.g., Kosambi or Haldane).

---

## Additional Exam-Style Problems with Full Solutions

<details>
<summary>Problem 6: Extended Response -- Nucleotide Excision Repair</summary>

UV radiation causes thymine dimers (covalent bonds between adjacent thymine bases on the same DNA strand).
(a) Explain why thymine dimers are problematic for DNA replication and transcription. (b) Describe the
process of nucleotide excision repair (NER) in eukaryotic cells, naming all key proteins involved. (c)
Explain why individuals with xeroderma pigmentosum (XP) have a greatly increased risk of skin cancer.
(d) Compare NER with base excision repair (BER), explaining when each is used.

</details>

<details>
<summary>Answer 6</summary>

(a) Thymine dimers distort the DNA double helix, causing a kink. During replication, DNA polymerase
cannot read past the dimer, stalling the replication fork and potentially leading to double-strand breaks
or error-prone translesion synthesis. During transcription, RNA polymerase may stall or incorporate
incorrect nucleotides, producing mutated mRNA and potentially dysfunctional proteins.

(b) Nucleotide excision repair in eukaryotes (global genome NER):
1. **Damage recognition**: the XPC-RAD23B complex recognises the helix distortion caused by the thymine dimer.
2. **Verification**: TFIIH (containing XPB and XPD helicases) verifies the damage and unwinds approximately $20$--$30\;\mathrm{'\{'}bp{'\}'}$ of DNA around the lesion.
3. **Incision**: endonucleases XPG (cuts $3'$ to the damage) and XPF-ERCC1 (cuts $5'$ to the damage) excise an oligonucleotide of approximately $24$--$32$ nucleotides.
4. **Gap filling**: DNA polymerases $\delta$ or $\varepsilon$ (with PCNA) synthesise new DNA using the undamaged strand as a template.
5. **Ligation**: DNA ligase I seals the nick.

(c) Xeroderma pigmentosum is caused by mutations in NER genes (XPA through XPG). Without functional NER,
thymine dimers accumulate. Each dimer is a potential mutation site; mutations in tumour suppressor genes
(e.g., p53) or proto-oncogenes can lead to uncontrolled cell division and skin cancer. XP patients are
extremely sensitive to UV light and develop skin cancers at a young age.

(d) NER removes bulky, helix-distorting lesions (thymine dimers, chemical adducts) by excising a
segment of approximately $30$ nucleotides. BER removes small, non-helix-distorting base modifications
(deaminated bases, oxidised bases like 8-oxoguanine, alkylated bases) by excising a single damaged base:
a specific DNA glycosylase recognises and removes the damaged base, AP endonuclease cuts the backbone,
DNA polymerase $\beta$ fills the single-nucleotide gap, and DNA ligase seals it.

</details>

<details>
<summary>Problem 7: Quantitative -- PCR Efficiency and Copy Number</summary>

A qPCR reaction starts with $10^4$ copies of a target DNA fragment. After 30 cycles, the fluorescence
signal reaches the threshold. (a) Assuming $100\%$ efficiency (doubling each cycle), calculate the
theoretical number of copies after 30 cycles. (b) If the actual efficiency is $92\%$ (each cycle
produces $1.92\times$ copies), calculate the actual number of copies. (c) The reaction contains
$100\;\mathrm{'\{'}\mu L{'\}'}$ total volume. Calculate the final concentration in copies/$\mathrm{'\{'}\mu L{'\}'}$.
(d) Explain why PCR efficiency is typically less than $100\%$.

</details>

<details>
<summary>Answer 7</summary>

(a) At $100\%$ efficiency, copies double each cycle: $N = N_0 \times 2^n = 10^4 \times 2^{30}$.
$2^{10} = 1024 \approx 10^3$, so $2^{30} = (2^{10})^3 \approx 10^9$.
$N = 10^4 \times 1.074 \times 10^9 = 1.074 \times 10^{13}$ copies.

More precisely: $2^{30} = 1073741824$.
$N = 10000 \times 1073741824 = 1.074 \times 10^{13}$ copies.

(b) At $92\%$ efficiency: $N = N_0 \times (1 + E)^n = 10^4 \times (1.92)^{30}$.
$(1.92)^{30}$: $\ln(1.92) = 0.6523$, so $30 \times 0.6523 = 19.569$, $e^{19.569} = 3.17 \times 10^8$.
$N = 10^4 \times 3.17 \times 10^8 = 3.17 \times 10^{12}$ copies.

(c) Concentration: $\frac{3.17 \times 10^{12}}{100} = 3.17 \times 10^{10}$ copies/$\mu\mathrm{'\{'}L{'\}'}$.

(d) PCR efficiency is less than $100\%$ because: primers may anneal imperfectly, DNA polymerase may
dissociate from the template, secondary structures in the DNA may block polymerase progression,
reagents become limiting in later cycles, and the denaturation temperature may not fully separate all
DNA strands.

</details>

<details>
<summary>Problem 8: Extended Response -- Transcription Factors and Development</summary>

The Hox genes are a family of transcription factors that control body plan development in animals.
(a) Explain what is meant by "transcription factor" and describe the general structure of a
sequence-specific transcription factor. (b) Explain the concept of colinearity as it applies to Hox
genes. (c) A mutation in a Hox gene causes a homeotic transformation (e.g., legs developing in place
of antennae in _Drosophila_). Explain how a single gene mutation can cause such a dramatic phenotypic
change. (d) Discuss why Hox genes are highly conserved across animal phyla.

</details>

<details>
<summary>Answer 8</summary>

(a) A transcription factor is a protein that binds to specific DNA sequences (enhancers or promoters)
and regulates (activates or represses) the transcription of target genes. General structure of a
sequence-specific transcription factor:
- **DNA-binding domain**: recognises and binds to a specific DNA sequence (e.g., zinc finger,
  helix-turn-helix, leucine zipper, basic helix-loop-helix motifs).
- **Activation domain** (or repression domain): interacts with other transcription factors, co-activators,
  or components of the basal transcription machinery (e.g., RNA polymerase II) to modulate transcription.
- **Regulatory domain**: responds to signalling molecules (e.g., ligand binding, phosphorylation) that
  control the transcription factor's activity.

(b) Colinearity refers to the correspondence between the order of Hox genes on the chromosome and their
spatial expression pattern along the anterior-posterior axis of the embryo. Hox genes at the $3'$ end of
the cluster are expressed anteriorly; those at the $5'$ end are expressed posteriorly. Additionally, the
temporal order of expression follows the chromosomal order: $3'$ genes are expressed earlier in
development.

(c) Hox genes encode transcription factors that regulate the expression of many downstream genes
involved in segment identity. A mutation in a Hox gene changes the spatial expression pattern of the
transcription factor, causing the wrong set of downstream genes to be activated in a given body segment.
For example, in _Drosophila_, the _Antennapedia_ mutation causes the Antennapedia protein (normally
expressed in thoracic segments) to be expressed in the head, activating leg-development genes instead
of antenna-development genes. This illustrates the concept of a **master regulatory gene**: one gene
controlling the expression of an entire developmental programme.

(d) Hox genes are highly conserved because they control fundamental aspects of body plan development.
Mutations in Hox genes typically have severe consequences (often lethal), creating strong purifying
selection against changes. The homeobox domain (the DNA-binding region) is particularly conserved
because it must recognise specific DNA sequences; even small changes could alter target gene
recognition. The conservation of Hox genes across bilaterians (from fruit flies to humans) reflects
their essential role in a developmental toolkit that evolved in the common ancestor of all bilaterian
animals.

</details>

<details>
<summary>Problem 9: Data Analysis -- Codon Usage and tRNA Abundance</summary>

The following table shows the codon usage frequency (per 1000 codons) for leucine in a bacterial genome
and the corresponding tRNA gene copy number:

| Codon | Usage (per 1000) | tRNA gene copies |
|-------|-------------------|-------------------|
| UUA   | 12                | 1                 |
| UUG   | 35                | 3                 |
| CUU   | 14                | 2                 |
| CUC   | 10                | 1                 |
| CUA   | 7                 | 1                 |
| CUG   | 52                | 5                 |

(a) Explain the correlation between codon usage and tRNA gene copy number. (b) A synthetic gene for
human insulin is to be expressed in this bacterium. The human insulin gene uses the following leucine
codons: CUG ($40\%$), UUA ($20\%$), CUU ($15\%$), CUA ($15\%$), UUG ($10\%$). Suggest how the gene
could be optimised for expression in this bacterium. (c) Explain why codon optimisation increases
protein yield.

</details>

<details>
<summary>Answer 9</summary>

(a) There is a positive correlation between codon usage frequency and tRNA gene copy number. Codons used
more frequently (e.g., CUG with $52$ per $1000$) have more tRNA gene copies ($5$ copies), while rare
codons (e.g., CUA with $7$ per $1000$) have fewer tRNA gene copies ($1$ copy). This ensures that
abundant tRNAs match the most frequently used codons, maximising translational efficiency.

(b) The human insulin gene uses some rare codons in the bacterium (UUA, CUA). To optimise expression,
replace rare codons with synonymous codons that are frequently used in the bacterium:
- Replace UUA ($12$ per $1000$) with CUG ($52$ per $1000$) or UUG ($35$ per $1000$).
- Replace CUA ($7$ per $1000$) with CUG ($52$ per $1000$).
- Keep CUG and UUG (already well-matched).
- Keep CUU ($14$ per $1000$ with $2$ tRNA copies) -- acceptable.

This is **codon optimisation**: synthesising a gene with codons preferred by the host organism.

(c) Codon optimisation increases protein yield because:
- When a rare codon is encountered, the corresponding tRNA is scarce. The ribosome pauses or stalls while
  waiting for the correct aminoacyl-tRNA.
- Prolonged stalling can cause ribosome dissociation (drop-off), premature termination, or mRNA
  degradation.
- Codon optimisation ensures abundant tRNAs are available for each codon, maintaining fast, smooth
  translation and maximising protein output per mRNA molecule.

</details>

<details>
<summary>Problem 10: Extended Response -- CRISPR-Cas9 Gene Editing</summary>

CRISPR-Cas9 is a revolutionary gene editing technology. (a) Describe the natural function of CRISPR-Cas
in bacteria. (b) Explain how CRISPR-Cas9 has been adapted for genome editing in eukaryotic cells,
including the roles of the guide RNA and Cas9 nuclease. (c) A researcher wants to knock out a gene in
human cells using CRISPR-Cas9. Describe the design of the guide RNA and explain how a frameshift
mutation is introduced. (d) Discuss two off-target effects of CRISPR-Cas9 and how they might be
minimised. (e) Evaluate the ethical implications of germline gene editing in humans.

</details>

<details>
<summary>Answer 10</summary>

(a) CRISPR-Cas is an adaptive immune system in bacteria and archaea. When a bacterium survives a
bacteriophage infection, it incorporates fragments of the phage DNA (spacers) into the CRISPR array in
its genome. Upon subsequent infection by the same phage, the CRISPR array is transcribed and processed
into CRISPR RNAs (crRNAs). These crRNAs guide Cas proteins to the matching phage DNA, where Cas cleaves
the DNA, destroying the phage genome and protecting the bacterium.

(b) In the genome editing adaptation:
- A **single guide RNA (sgRNA)** is designed: it combines the crRNA (containing a $20$-nucleotide
  sequence complementary to the target DNA) and the tracrRNA (which binds Cas9) into a single molecule.
- The **Cas9 nuclease** is the endonuclease that cuts DNA. It is directed to the target by the sgRNA.
- The target site must be immediately upstream of a **protospacer adjacent motif (PAM)**, which is
  $5'$-NGG-$3'$ for _Streptococcus pyogenes_ Cas9.
- Cas9 creates a double-strand break (DSB) $3$ bp upstream of the PAM.
- The cell repairs the DSB by either non-homologous end joining (NHEJ), which often introduces
  insertions/deletions (indels) causing frameshift mutations, or homology-directed repair (HDR), which
  can incorporate a desired sequence if a donor template is provided.

(c) To knock out a gene:
1. Design a $20$-nt sgRNA complementary to an early exon of the target gene, immediately upstream of a
   PAM ($5'$-NGG-$3'$).
2. The sgRNA directs Cas9 to create a DSB in the exon.
3. NHEJ repairs the break but often introduces small indels (1--10 bp).
4. If the indel size is not a multiple of 3, it causes a frameshift, changing the reading frame downstream.
5. The frameshift typically introduces a premature stop codon, producing a truncated, non-functional
   protein -- effectively knocking out the gene.

(d) Off-target effects:
1. **Cas9 cutting at genomic sites with similar (but not identical) sequences**: the sgRNA may tolerate
   up to 3--5 mismatches, especially in the $5'$ end of the guide. This can cause DSBs at unintended
   locations, potentially disrupting other genes or regulatory elements.
   Minimisation: use bioinformatics to select sgRNAs with minimal similarity to other genomic sites;
   use Cas9 variants with higher fidelity (e.g., eSpCas9, HiFi Cas9); use paired nickases (two Cas9
   nickases that create single-strand breaks on opposite strands, requiring two nearby recognition
   events).

2. **Large deletions or chromosomal rearrangements**: simultaneous DSBs at the target site and an
   off-target site (or two target sites) can cause deletion of the intervening sequence, inversions, or
   translocations.
   Minimisation: use transient Cas9 expression (mRNA or ribonucleoprotein delivery rather than plasmid);
   validate edits by whole-genome sequencing.

(e) Ethical implications of germline editing:
- Germline edits are heritable, affecting all future generations without their consent.
- Unintended off-target mutations in the germline could be passed on, potentially causing disease.
- There is a risk of creating "designer babies" -- editing for non-therapeutic traits (intelligence,
  appearance, athletic ability), which could exacerbate social inequality.
- The technology could widen the gap between wealthy and poor nations if only the wealthy can access it.
- Proponents argue germline editing could eliminate devastating genetic diseases (e.g., Huntington's
  disease, cystic fibrosis) from family lines.
- The 2018 He Jiankui case (CRISPR-edited babies in China) was widely condemned for lack of ethical
  oversight, inadequate informed consent, and uncertain safety.

</details>

<details>
<summary>Problem 11: Quantitative -- Southern Blot and DNA Fingerprinting</summary>

A forensic DNA sample is analysed using a VNTR (variable number tandem repeat) probe. The suspect's DNA
produces two bands at $3200\;\mathrm{'\{'}bp{'\}'}$ and $5600\;\mathrm{'\{'}bp{'\}'}$. A crime scene sample produces two
bands at $3200\;\mathrm{'\{'}bp{'\}'}$ and $5600\;\mathrm{'\{'}bp{'\}'}$. The VNTR allele frequencies in the population are:
$3200\;\mathrm{'\{'}bp{'\}'} = 0.15$, $5600\;\mathrm{'\{'}bp{'\}'} = 0.08$, and the remaining alleles collectively have a
combined frequency of $0.77$. (a) Assuming Hardy-Weinberg equilibrium, calculate the probability of this
specific genotype in the population. (b) If three independent VNTR loci are tested and all match between
the suspect and the crime scene sample, and the match probabilities for the other two loci are
$1/120$ and $1/85$, calculate the combined probability of a random match. (c) Explain why this
probability does not equal the probability of the suspect's guilt.

</details>

<details>
<summary>Answer 11</summary>

(a) The suspect is heterozygous: genotype is $3200/5600$.
$P(\text{'\{'}genotype{'\}'}) = 2 \times p_{3200} \times p_{5600} = 2 \times 0.15 \times 0.08 = 0.024 = 1/41.7$.

This is the probability that a randomly selected individual from the population has this specific genotype
at this locus.

(b) Combined probability (product rule, assuming loci are independent):
$P_{combined} = \frac{1}{41.7} \times \frac{1}{120} \times \frac{1}{85} = \frac{1}{425340}$

Approximately $1$ in $425\,000$.

(c) The match probability is NOT the probability of guilt because:
- It gives the probability that a randomly selected person would match the DNA profile, not the
  probability that the suspect is the source of the DNA.
- The correct interpretation requires Bayesian reasoning: $P(\text{'\{'}guilt{'\}'} | \text{'\{'}match{'\}'})$ depends on
  the prior probability of guilt (based on other evidence).
- In a city of $10$ million people, $10\,000\,000 / 425\,340 \approx 23.5$ people would be expected
  to match this profile by chance alone.
- Other evidence (alibi, eyewitness testimony, motive) must be considered alongside the DNA evidence.

</details>

<details>
<summary>Problem 12: Extended Response -- Comparative Genomics</summary>

The human genome contains approximately $20\,000$ protein-coding genes, while _E. coli_ has approximately
$4\,300$. However, humans have only about $1.5$ times as many protein domains (functional units) as
_E. coli_. (a) Explain how humans generate proteomic complexity far greater than the number of genes
would suggest. (b) Describe the role of alternative splicing, with a specific example. (c) Explain how
post-translational modifications expand proteome diversity. (d) The pufferfish (_Fugu rubripes_) genome
is only $365\;\mathrm{'\{'}Mb{'\}'}$ (human: $3200\;\mathrm{'\{'}Mb{'\}'}$) but contains a similar number of genes. Explain
this observation.

</details>

<details>
<summary>Answer 12</summary>

(a) Humans generate proteomic complexity through several mechanisms:
- **Alternative splicing**: one gene can produce multiple mRNA isoforms, each encoding a different
  protein variant. Approximately $95\%$ of human multi-exon genes undergo alternative splicing, producing
  an estimated $5$--$10$ protein isoforms per gene on average.
- **Post-translational modifications (PTMs)**: phosphorylation, glycosylation, acetylation, ubiquitination,
  etc., can alter protein activity, localisation, stability, and interactions without changing the amino
  acid sequence.
- **Combinatorial protein interactions**: proteins can form different complexes with different partners,
  creating functional diversity.
- **RNA editing**: nucleotide changes in mRNA after transcription (e.g., A-to-I editing) can produce
  protein variants not encoded in the genome.
- **Proteolytic processing**: proteins can be cleaved into different active fragments (e.g., proinsulin
  to insulin).

(b) Alternative splicing: the _troponin T_ (TNNT) gene has $18$ exons. Through alternative splicing of
$11$ of these exons, TNNT produces $64$ different mRNA isoforms in different muscle types (cardiac vs.
skeletal). Each isoform has slightly different calcium-binding properties, fine-tuning muscle contraction
in different tissues. Another classic example is the _DSG2_ (desmoglein-2) gene, which has multiple
isoforms with different adhesive properties.

(c) Post-translational modifications:
- **Phosphorylation**: adding a phosphate group can activate or deactivate enzymes (e.g., glycogen
  phosphorylase is activated by phosphorylation). A single protein can be phosphorylated at multiple
  sites, creating a "phosphocode" with $2^n$ possible states ($n$ = number of phosphorylation sites).
- **Glycosylation**: addition of sugar chains can affect protein folding, stability, cell-surface
  localisation, and cell-cell recognition. Different glycosylation patterns on the same protein create
  functional variants (glycoforms).
- **Ubiquitination**: marking proteins for degradation by the proteasome, or altering their activity or
  localisation.

(d) The pufferfish genome is compact because:
- It has much less non-coding DNA (fewer introns, shorter introns, less intergenic sequence, fewer
  repetitive elements and transposons).
- Pufferfish genes have shorter $3'$ and $5'$ UTRs.
- The number and types of protein-coding genes are similar because all vertebrates share a common set
  of genes. The difference in genome size is due to "junk DNA" (non-coding, mostly repetitive sequences),
  not to gene number. This is known as the **C-value paradox**: genome size does not correlate with
  organismal complexity.

</details>

---

## Cross-References to Related Topics

- **DNA structure and mutations**: Review [./molecular-biology](./molecular-biology) for base pairing, DNA structure, and mutation types.
- **Cell division and chromosomes**: Review [./cell-biology](./cell-biology) for mitosis, meiosis overview, and chromosome structure.
- **Mendelian genetics and inheritance**: Review [./genetics](./genetics) for monohybrid and dihybrid crosses, sex linkage.
- **Evolution and population genetics**: Review [./evolution-depth](./evolution-depth) for Hardy-Weinberg equilibrium, selection, and genetic drift.
- **Enzyme kinetics**: Review [./metabolism-cell-biology](./metabolism-cell-biology) for Michaelis-Menten kinetics applied to restriction enzymes and polymerases.
- **Immunology and antibody diversity**: Review [./immunology](./immunology) for V(D)J recombination as a mechanism of generating diversity through DNA rearrangement.

---

## Supplementary: Genetic Engineering Applications (HL Extension)

### Genetically Modified Organisms (GMOs) -- Case Studies

**Golden Rice**:
- Developed by Potrykus and Beyer (2000) to address vitamin A deficiency (VAD), which causes
  approximately $500\,000$ cases of childhood blindness annually.
- Two genes from daffodil (_psy_, phytoene synthase) and one from bacterium (_crtI_, phytoene desaturase)
  were introduced into rice, enabling the endosperm to produce beta-carotene (provitamin A).
- Golden Rice 2 (2005) used a maize _psy_ gene, achieving much higher beta-carotene levels ($37\;\mathrm{'\{'}\mu g/g{'\}'}$).
- Challenges: public opposition to GMOs, regulatory hurdles, acceptance by farmers and consumers,
  degradation of beta-carotene during storage and cooking.

**Bt Cotton**:
- Engineered to express a gene from _Bacillus thuringiensis_ (Bt) that produces Cry protein toxins
  lethal to lepidopteran pests (cotton bollworm).
- Benefits: reduced insecticide use ($>50\%$ reduction in some regions), increased yield, reduced
  production costs.
- Concerns: resistance evolution in pest populations (managed by refuge planting -- non-Bt crops
  planted nearby to maintain susceptible pest populations), impact on non-target organisms (minimal
  for most non-target species but some concern for beneficial insects).

**GloFish**:
- Zebrafish genetically modified with a fluorescent protein gene (originally from a jellyfish, GFP,
  or from coral, RFP). Originally developed for environmental monitoring (fluoresces in the presence
  of certain pollutants).
- First GM animal approved for sale as a pet (2003 in the US).
- Ethical considerations: environmental release concerns (GloFish are sterile, reducing this risk),
  precedent for GM pet animals.

### Gene Therapy

Gene therapy aims to treat or cure genetic diseases by introducing functional copies of genes into
a patient's cells.

**Types**:
1. **Somatic gene therapy**: targets body cells (not germ cells). Changes are not heritable.
   Example: Luxturna (voretigene neparvovec) treats retinal dystrophy caused by RPE65 mutations by
   delivering a functional RPE65 gene via AAV vector.
2. **Germline gene therapy**: targets germ cells or embryos. Changes are heritable. Currently banned
   in most countries due to ethical concerns (He Jiankui case, 2018).

**Vectors**:
- **Viral vectors**: adenovirus (large capacity, transient expression), AAV (small capacity, long-term
  expression, low immunogenicity), lentivirus (integrates into genome, stable expression, risk of
  insertional mutagenesis).
- **Non-viral vectors**: liposomes, naked DNA injection, electroporation. Lower efficiency but safer.

**Challenges**:
- Immune response to the vector (especially for repeat administrations).
- Targeting the correct tissue.
- Achieving sufficient and sustained expression.
- Risk of insertional mutagenesis (viral integration near oncogenes can cause cancer).
- Ethical considerations: access, cost (current gene therapies cost $\$0.5$--$2$ million per treatment).

### Pharmacogenomics

Pharmacogenomics studies how genetic variation affects drug response. Examples:

| Gene | Variant | Drug affected | Effect |
|------|---------|--------------|--------|
| CYP2C19 | Poor metaboliser (*2, *3) | Clopidogrel (antiplatelet) | Reduced activation of prodrug; higher cardiovascular events |
| CYP2D6 | Ultra-rapid metaboliser (*1xN) | Codeine | Faster conversion to morphine; risk of respiratory depression |
| VKORC1 | -1639 G>A | Warfarin (anticoagulant) | Reduced VKORC1 expression; lower warfarin dose needed |
| HLA-B*57:01 | Present | Abacavir (HIV drug) | High risk of severe hypersensitivity reaction |
| TPMT | Low activity variants | Azathioprine (immunosuppressant) | Reduced drug inactivation; higher toxicity risk |

### DNA Fingerprinting in Forensics

DNA fingerprinting (DNA profiling) analyses short tandem repeats (STRs) at multiple loci:

**Procedure**:
1. Extract DNA from biological evidence (blood, saliva, hair, semen).
2. PCR amplify STR loci (typically $13$--$20$ loci in the CODIS system -- Combined DNA Index System).
3. Capillary electrophoresis separates PCR products by size.
4. Automated fragment analysis determines the number of repeats at each locus.
5. The DNA profile is compared to:
   - A reference sample from the suspect.
   - The national DNA database (millions of profiles).
   - Population frequency databases (to calculate match probability).

**Interpretation**:
- If the DNA profile from the evidence matches the suspect, the **match probability** (probability that
  a randomly selected person would match) is calculated. For $13$ CODIS loci, the match probability is
  typically $< 1$ in $10^{13}$ (less than one in the world population).
- The **combined paternity index (CPI)** or **likelihood ratio** is used to present the strength of
  evidence in court.

**Limitations**:
- Partial profiles (degraded DNA, small or mixed samples) are less discriminating.
- Contamination can produce false matches.
- Related individuals share more DNA and have higher match probabilities.
- Laboratory errors can occur (sample mix-ups, contamination).

### Worked Example: STR Analysis and Match Probability

A forensic sample is analysed at 3 STR loci with the following results:

| Locus | Evidence genotype | Suspect genotype | Population allele frequencies |
|-------|-------------------|-----------------|------------------------------|
| D3S1358 | 15, 17 | 15, 17 | $p_{15} = 0.25$, $p_{17} = 0.20$ |
| vWA | 14, 16 | 14, 16 | $p_{14} = 0.22$, $p_{16} = 0.15$ |
| FGA | 22, 24 | 22, 24 | $p_{22} = 0.18$, $p_{24} = 0.10$ |

(a) Calculate the match probability at each locus assuming Hardy-Weinberg equilibrium.
(b) Calculate the combined match probability. (c) If the suspect's brother is also a potential
source of the DNA, explain why the match probability is higher for the brother.

<details>
<summary>Solution</summary>

(a) For each locus, the probability of a random match is:
$P = p_i^2 + p_j^2$ if homozygous, or $2p_ip_j$ if heterozygous.

D3S1358 (15,17): $P = 2 \times 0.25 \times 0.20 = 0.100$
vWA (14,16): $P = 2 \times 0.22 \times 0.15 = 0.066$
FGA (22,24): $P = 2 \times 0.18 \times 0.10 = 0.036$

(b) Combined match probability (product rule, assuming loci are independent):
$P_{combined} = 0.100 \times 0.066 \times 0.036 = 0.000238 = 1/4202$

Approximately 1 in $4200$ people would be expected to match this profile. With more loci (13 CODIS loci),
the match probability would be $< 1$ in $10^{10}$.

(c) Siblings share on average $50\%$ of their alleles. The brother has a $50\%$ chance of sharing
each allele with the suspect (vs. the population frequency for a random person). The sibling match
probability is much higher than the random match probability. For a rough estimate: at each locus,
the brother has approximately a $50\%$ chance of sharing each allele, so the probability of matching
at one locus is approximately $(0.5)^2 + (0.5)^2 = 0.50$ (if homozygous) or $2 \times 0.5 \times 0.5 = 0.50$
(if heterozygous). Across 3 loci: approximately $0.5^3 = 0.125$ ($1$ in $8$). This is far higher
than the random match probability ($1$ in $4202$), illustrating why the suspect's relationship to
other potential sources of DNA is relevant in forensic analysis.

</details>
