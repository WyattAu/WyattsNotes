---
title: Genetics and DNA — Diagnostic Tests
description: Hardest diagnostic questions on DNA replication, Meselson-Stahl experiment, protein synthesis, epistasis, sex linkage, PCR, and genetic engineering.
slug: diag-genetics-dna
hide_table_of_contents: true
---

# Genetics and DNA — Diagnostic Tests

## Unit Tests

### UT-1: DNA Replication and the Meselson-Stahl Experiment

**Question:**

DNA replication is described as semi-conservative. The Meselson-Stahl experiment (1958) provided evidence for this mechanism.

(a) Describe the process of DNA replication, including the roles of DNA helicase, DNA polymerase, and DNA ligase.

(b) Describe the Meselson-Stahl experiment and explain how the results supported the semi-conservative model of replication.

(c) Explain what results would have been expected if DNA replication were **conservative** or **dispersive**.

(d) Explain the role of **DNA primase** and **RNA primers** in DNA replication, and explain why DNA polymerase cannot initiate synthesis without a primer.

**Solution:**

(a) **DNA replication** (semi-conservative):
1. **DNA helicase** unwinds the double helix by breaking the hydrogen bonds between complementary base pairs, separating the two parental strands and forming a replication fork.
2. **Free nucleotides** (activated with three phosphate groups) are attracted to their exposed complementary bases on each template strand, following the base-pairing rules (A-T, C-G).
3. **DNA polymerase** catalyses the formation of phosphodiester bonds between adjacent nucleotides, joining them into a new complementary strand. DNA polymerase can only add nucleotides in the **5' to 3' direction**.
4. On the **leading strand**, DNA polymerase synthesises continuously in the 5' to 3' direction towards the replication fork.
5. On the **lagging strand**, synthesis is discontinuous — short fragments called **Okazaki fragments** are synthesised in the 5' to 3' direction away from the replication fork.
6. **DNA ligase** joins the Okazaki fragments by catalysing the formation of phosphodiester bonds between them, creating a continuous strand.
7. Each new DNA molecule consists of one original (parental) strand and one newly synthesised strand — hence "semi-conservative."

(b) **Meselson-Stahl experiment**:
1. **Stage 1**: *E. coli* bacteria were grown for many generations in a medium containing the heavy isotope $^{15}\text{N}$. All of the bacterial DNA incorporated $^{15}\text{N}$, making it "heavy" DNA.
2. **Stage 2**: The bacteria were transferred to a medium containing the light isotope $^{14}\text{N}$ and allowed to replicate for one generation. DNA was extracted and analysed by **cesium chloride density gradient centrifugation**.
3. **Result after 1 generation**: ALL DNA was of intermediate density ($^{15}\text{N}$-$^{14}\text{N}$ hybrid). This is consistent with semi-conservative replication (each molecule has one heavy and one light strand) but also with dispersive replication.
4. **Stage 3**: The bacteria were allowed to replicate for a second generation in $^{14}\text{N}$ medium. DNA was extracted and centrifuged again.
5. **Result after 2 generations**: TWO bands were observed — one of intermediate density and one of light density ($^{14}\text{N}$-$^{14}\text{N}$), in approximately equal proportions. This is consistent ONLY with semi-conservative replication: each intermediate molecule from generation 1 produces one intermediate and one light molecule in generation 2.

(c) **Conservative replication** (the entire original double helix is conserved, and an entirely new double helix is synthesised):
- After 1 generation: TWO bands — one heavy (original) and one light (new), in equal proportions. This was NOT observed (only intermediate was seen).

**Dispersive replication** (each new molecule contains fragments of old and new DNA interspersed throughout both strands):
- After 1 generation: ONE intermediate band (consistent with semi-conservative).
- After 2 generations: ONE band, slightly lighter than the intermediate but NOT two distinct bands. This was NOT observed (two distinct bands were seen).

(d) **DNA primase** is an RNA polymerase that synthesises a short RNA sequence (an **RNA primer**, approximately 5-10 nucleotides long) complementary to the DNA template strand at the start of each new DNA strand. The RNA primer provides a free 3'-OH group (hydroxyl group) to which DNA polymerase can add the first DNA nucleotide. **DNA polymerase cannot initiate synthesis de novo** (from scratch) because it requires a pre-existing free 3'-OH group to which it can add nucleotides in the 5' to 3' direction — it can only extend an existing chain, not start one. After DNA synthesis is complete, the RNA primers are removed (by DNA polymerase I in prokaryotes, or RNase H in eukaryotes) and replaced with DNA, and the gaps are sealed by DNA ligase.

---

### UT-2: Epistasis and Complex Inheritance Patterns

**Question:**

In mice, coat colour is determined by two genes. Gene A controls the production of pigment: allele $A$ (dominant) produces pigment, allele $a$ (recessive) produces no pigment (albino). Gene B controls the type of pigment: allele $B$ (dominant) produces black pigment, allele $b$ (recessive) produces brown pigment.

(a) Explain how gene A is **epistatic** to gene B.

(b) A mouse with genotype $AaBb$ is crossed with a mouse with genotype $AaBb$. Calculate the expected phenotypic ratio of the offspring. Show your working using a genetic diagram.

(c) In a different species of plant, flower colour is determined by two genes acting in a complementary (duplicate recessive epistasis) manner. Both gene P (alleles $P$/p) and gene Q (alleles $Q$/q) must have at least one dominant allele for purple flowers. If either gene is homozygous recessive, the flowers are white. A dihybrid cross ($PpQq \times PpQq$) is performed. Calculate the expected phenotypic ratio.

(d) Explain how epistasis differs from **dominance**, and explain why understanding epistasis is important in understanding genetic diseases in humans.

**Solution:**

(a) Gene A is **epistatic** to gene B because the expression of gene B (black vs brown pigment) depends on the genotype at gene A. If a mouse is homozygous recessive for gene A ($aa$), no pigment is produced at all, so the mouse is albino regardless of the genotype at gene B. The expression of gene B is "masked" or "blocked" by the homozygous recessive genotype at gene A. Gene A is the epistatic gene; gene B is the hypostatic gene.

(b) Dihybrid cross: $AaBb \times AaBb$

Punnett square (gametes: $AB$, $Ab$, $aB$, $ab$):

|  | AB | Ab | aB | ab |
|--|----|----|----|----|
| **AB** | AABB (black) | AABb (black) | AaBB (black) | AaBb (black) |
| **Ab** | AABb (black) | AAbb (brown) | AaBb (black) | Aabb (brown) |
| **aB** | AaBB (black) | AaBb (black) | aaBB (albino) | aaBb (albino) |
| **ab** | AaBb (black) | Aabb (brown) | aaBb (albino) | aabb (albino) |

Phenotypes:
- **Black** ($A\_B\_$): 9
- **Brown** ($A\_bb$): 3
- **Albino** ($aa\_$): 4 (3 + 1)

Expected phenotypic ratio: **9 black : 3 brown : 4 albino**

This is the classic 9:3:4 ratio for recessive epistasis.

(c) Complementary gene action (duplicate recessive epistasis): both P and Q must have at least one dominant allele for purple flowers.

A dihybrid cross $PpQq \times PpQq$:

|  | PQ | Pq | pQ | pq |
|--|----|----|----|----|
| **PQ** | PPQQ (purple) | PPQq (purple) | PpQQ (purple) | PpQq (purple) |
| **Pq** | PPQq (purple) | PPqq (white) | PpQq (purple) | Ppqq (white) |
| **pQ** | PpQQ (purple) | PpQq (purple) | ppQQ (white) | ppQq (white) |
| **pq** | PpQq (purple) | Ppqq (white) | ppQq (white) | ppqq (white) |

Phenotypes:
- **Purple** ($P\_Q\_$): 9
- **White** ($P\_qq$, $ppQ\_$, $ppqq$): 7 (3 + 3 + 1)

Expected phenotypic ratio: **9 purple : 7 white**

(d) **Dominance** refers to the relationship between alleles of a **single gene** — one allele masks the expression of another allele at the same gene locus (e.g., in a heterozygote $Aa$, the dominant allele $A$ masks the recessive allele $a$). **Epistasis** refers to the interaction between **two or more different genes** — the allele of one gene masks or modifies the expression of alleles at a different gene locus. Epistasis is an inter-gene interaction, whereas dominance is an intra-gene interaction.

Understanding epistasis is important in human genetic diseases because many diseases are **polygenic** (influenced by multiple genes). The expression of a disease-causing allele at one locus may depend on the genotype at another locus (epistatic interaction). For example, the severity or penetrance of a genetic disorder may vary depending on the alleles present at modifier genes. This explains why individuals with the same disease-causing mutation may have different symptoms or severity, and why some carriers of a disease allele do not develop the disease at all. Epistasis also complicates genetic counselling and pedigree analysis, as the expected Mendelian ratios may be modified.

---

### UT-3: PCR, Gel Electrophoresis, and Genetic Engineering

**Question:**

A forensic scientist uses PCR (polymerase chain reaction) and gel electrophoresis to analyse DNA from a crime scene.

(a) Describe the three stages of the PCR cycle, naming the enzymes involved and the temperatures at which each stage occurs.

(b) Explain why **primers** are necessary in PCR and why two different primers are needed for each DNA fragment to be amplified.

(c) After PCR, the amplified DNA fragments are separated by **gel electrophoresis**. Describe how gel electrophoresis separates DNA fragments by size, and explain how the fragment sizes are determined.

(d) The scientist wants to insert a human gene into a bacterial plasmid to produce a recombinant protein. Describe the steps involved in this genetic engineering process, from isolation of the gene to expression of the protein in the bacterium.

**Solution:**

(a) The PCR cycle has three stages:

1. **Denaturation** (94-96 degrees Celsius): the DNA sample is heated to separate the two strands by breaking the hydrogen bonds between complementary bases, producing single-stranded DNA templates.

2. **Annealing** (55-65 degrees Celsius): the temperature is lowered to allow **primers** (short, single-stranded DNA sequences, typically 18-25 bases long) to bind (anneal) to their complementary sequences on the single-stranded DNA templates by hydrogen bonding. The exact temperature depends on the primer sequence.

3. **Extension/Elongation** (72 degrees Celsius): **Taq polymerase** (a thermostable DNA polymerase from *Thermus aquaticus*) binds to the primer-template complex and catalyses the synthesis of a new DNA strand by adding free nucleotides in the 5' to 3' direction. The optimal temperature for Taq polymerase is 72 degrees Celsius.

These three stages are repeated for 25-35 cycles, with each cycle doubling the amount of target DNA (exponential amplification).

(b) **Primers** are necessary because Taq polymerase cannot initiate DNA synthesis de novo — it requires a free 3'-OH group on a pre-existing strand to which it can add nucleotides (as in vivo DNA replication). Primers provide this starting point.

**Two different primers are needed** because DNA is double-stranded, and PCR amplifies a specific region of DNA defined by the positions of the two primers. One primer (the **forward primer**) is complementary to the 3' end of the target sequence on one strand, and the other primer (the **reverse primer**) is complementary to the 3' end of the target sequence on the other strand. The forward primer primes synthesis in one direction, and the reverse primer primes synthesis in the other direction. The region between the two primers is the fragment that gets amplified exponentially with each cycle.

(c) **Gel electrophoresis** separates DNA fragments based on their size:
1. A gel (typically agarose) is prepared with wells at one end.
2. The DNA samples are loaded into the wells. A DNA ladder (fragments of known size) is loaded into a separate well for comparison.
3. An electric current is applied across the gel. DNA fragments are negatively charged (due to the phosphate groups on the sugar-phosphate backbone) and migrate towards the positive electrode (anode).
4. The gel matrix acts as a molecular sieve — smaller DNA fragments move through the pores more easily and migrate faster (further), while larger fragments are slowed by the matrix and migrate more slowly (less far).
5. After electrophoresis, the DNA is visualised by staining with a fluorescent dye (e.g., ethidium bromide or a safer alternative such as GelRed) and viewing under UV light.

**Fragment sizes are determined** by comparing the distance migrated by each unknown fragment with the distances migrated by the DNA ladder fragments of known size. A standard curve (log of fragment size vs distance migrated) can be plotted, and the sizes of unknown fragments read from this curve.

(d) Steps in genetic engineering to produce a recombinant protein:
1. **Isolation of the gene**: the human gene of interest is identified and isolated. This may involve extracting mRNA from human cells, using reverse transcriptase to make complementary DNA (cDNA), and amplifying the gene by PCR. (Using cDNA is preferred for eukaryotic genes because it lacks introns, which bacteria cannot splice out.)
2. **Cutting the gene and plasmid**: a **restriction enzyme** is used to cut the gene at specific recognition sequences, producing sticky ends. The same restriction enzyme is used to cut the bacterial **plasmid vector**, producing complementary sticky ends.
3. **Ligation**: the gene and cut plasmid are mixed. The sticky ends anneal by complementary base pairing. **DNA ligase** seals the gene into the plasmid by forming phosphodiester bonds, creating a **recombinant plasmid**.
4. **Transformation**: the recombinant plasmid is introduced into host bacterial cells (e.g., *E. coli*) by a process called transformation (e.g., heat shock or electroporation). The plasmid must contain: the gene of interest, a **promoter sequence** (recognised by bacterial RNA polymerase for transcription), and a **selectable marker** (e.g., an antibiotic resistance gene).
5. **Selection**: bacteria are grown on agar plates containing the antibiotic. Only bacteria that have taken up the plasmid (with the resistance gene) survive. These are then screened (e.g., using a gene probe or blue-white screening) to identify those carrying the gene of interest.
6. **Expression**: the transformed bacteria are grown in large-scale fermenters. The promoter on the plasmid drives transcription of the gene into mRNA, which is translated by bacterial ribosomes to produce the recombinant protein. The protein is then extracted and purified.

---

## Integration Tests

### IT-1: Protein Synthesis and Mutation Effects (with Biological Molecules and Cells)

**Question:**

Sickle cell anaemia is caused by a point mutation in the gene coding for the beta-globin subunit of haemoglobin. The mutation changes the sixth codon from GAG (glutamic acid) to GTG (valine).

(a) Explain why this mutation is described as a **substitution mutation** and explain why it does not cause a frameshift.

(b) Describe the effect of this mutation on the primary, secondary, tertiary, and quaternary structure of haemoglobin.

(c) Explain why individuals who are heterozygous for the sickle cell allele (HbA/HbS) have a selective advantage in regions where malaria is endemic. Use the terms **genotype**, **phenotype**, and **natural selection** in your answer.

(d) Explain how the triplet code and the concept of **degeneracy** (redundancy) of the genetic code means that not all substitution mutations result in a change to the amino acid sequence.

**Solution:**

(a) This is a **substitution mutation** because one nucleotide base is replaced by another in the DNA sequence — specifically, the middle base of the sixth codon is changed from A to T (on the coding strand; or T to A on the template strand). It does not cause a frameshift because a frameshift requires the insertion or deletion of a number of nucleotides not divisible by three, which shifts the reading frame of all codons downstream. A substitution changes only one codon, and the reading frame of subsequent codons is unaffected.

(b) **Primary structure**: the substitution changes the sixth amino acid in the beta-globin polypeptide chain from glutamic acid (a hydrophilic, negatively charged amino acid) to valine (a hydrophobic, non-polar amino acid). This is a change in the primary structure.

**Secondary structure**: the change from a hydrophilic to a hydrophobic amino acid at position 6 alters the local interactions that form alpha-helices and beta-sheets. Valine promotes the formation of hydrophobic interactions that cause the beta-globin to adopt a slightly different secondary structure under low-oxygen conditions.

**Tertiary structure**: the hydrophobic valine at position 6 is on the surface of the beta-globin molecule. Under low-oxygen conditions, the hydrophobic valine on one haemoglobin molecule interacts with a hydrophobic patch (formed by phenylalanine and leucine) on a neighbouring deoxygenated haemoglobin molecule. This causes haemoglobin molecules to polymerise (link together) into long, rigid fibres, altering the tertiary structure of the protein.

**Quaternary structure**: the polymerisation of deoxygenated haemoglobin into long fibres distorts the normal quaternary structure of haemoglobin (which is a tetramer of two alpha and two beta subunits). The fibres distort the red blood cell into a sickle shape, reducing its flexibility and ability to pass through narrow capillaries.

(c) In regions where malaria is endemic, the malaria parasite (*Plasmodium falciparum*) infects red blood cells. The different genotypes and their phenotypes are:
- **HbA/HbA (homozygous normal)**: normal red blood cells; susceptible to malaria infection.
- **HbA/HbS (heterozygous)**: mostly normal red blood cells (sickling only under severe low-oxygen conditions); some resistance to malaria because the altered haemoglobin makes it more difficult for the parasite to survive and multiply inside the red blood cells, and sickled cells are more rapidly removed from circulation by the spleen.
- **HbS/HbS (homozygous sickle cell)**: sickle cell anaemia (severe illness); also resistant to malaria but at a high health cost.

**Natural selection** favours the heterozygous genotype (HbA/HbS) in malaria-endemic regions because heterozygotes have the highest fitness — they have some protection against malaria without the severe symptoms of sickle cell anaemia. This is an example of **heterozygote advantage** (balancing selection), which maintains both alleles in the population at a relatively high frequency. This explains why the sickle cell allele is more common in populations originating from West Africa, the Mediterranean, and parts of India, where malaria has historically been prevalent.

(d) The genetic code is a **triplet code** — each amino acid is coded for by a sequence of three nucleotide bases (a codon). The code is **degenerate** (redundant) — most amino acids are coded for by more than one codon. For example, leucine is coded for by six different codons (CUU, CUC, CUA, CUG, UUA, UAG). This means that a substitution mutation in the third base of a codon often does not change the amino acid specified — this is called a **silent mutation**. For example, changing CUU to CUC still codes for leucine. The degeneracy of the code provides a degree of protection against the effects of mutations — not all substitutions alter the primary structure of the protein, and therefore not all substitutions affect protein function.

---

### IT-2: Sex Linkage and Chi-Squared Test (with Biodiversity and Classification)

**Question:**

In cats, the gene for coat colour (orange vs black) is located on the X chromosome. The allele for orange ($X^O$) is codominant with the allele for black ($X^B$). Female cats heterozygous for this gene ($X^OX^B$) have tortoiseshell coats (a mosaic of orange and black patches). Male cats have only one X chromosome and are either orange ($X^OY$) or black ($X^BY$).

(a) Explain why tortoiseshell cats are almost exclusively female. Under what rare circumstances could a male tortoiseshell cat occur?

(b) A tortoiseshell female ($X^OX^B$) is mated with a black male ($X^BY$). Calculate the expected phenotypic ratio of the offspring. Show your working.

(c) A breeder records the following offspring from the cross in part (b): 30 orange females, 28 tortoiseshell females, 55 black males, and 27 orange males. Use a chi-squared ($\chi^2$) test to determine whether these results differ significantly from the expected ratio. (Use the formula $\chi^2 = \sum \frac{(O - E)^2}{E}$ and the critical value at $p = 0.05$ with 3 degrees of freedom is 7.82.)

(d) Explain why sex-linked inheritance patterns differ from autosomal inheritance patterns, and explain why X-linked recessive conditions (e.g., haemophilia, colour blindness) are more common in males than in females.

**Solution:**

(a) Tortoiseshell cats require two different X chromosome alleles ($X^O$ and $X^B$) to be expressed. Since males have only one X chromosome (genotype XY), they can have only one of these alleles and are therefore either entirely orange ($X^OY$) or entirely black ($X^BY$). Females have two X chromosomes and can be heterozygous ($X^OX^B$), producing the tortoiseshell pattern through **X-inactivation (lyonisation)** — in each cell, one of the two X chromosomes is randomly inactivated during early embryonic development. The inactivated X forms a Barr body. Patches of cells with the active $X^O$ chromosome produce orange fur, and patches with the active $X^B$ chromosome produce black fur.

A **male tortoiseshell cat** could occur in the rare circumstance of **Klinefelter syndrome** (XXY genotype). The male has two X chromosomes and one Y chromosome. If the two X chromosomes carry different alleles ($X^OX^BY$), X-inactivation can produce a tortoiseshell pattern. This is very rare.

(b) Cross: $X^OX^B$ (tortoiseshell female) $\times$ $X^BY$ (black male)

Gametes from female: $X^O$, $X^B$
Gametes from male: $X^B$, $Y$

|  | $X^B$ | $Y$ |
|--|-------|-----|
| **$X^O$** | $X^OX^B$ (tortoiseshell female) | $X^OY$ (orange male) |
| **$X^B$** | $X^BX^B$ (black female) | $X^BY$ (black male) |

Expected phenotypic ratio: **1 tortoiseshell female : 1 black female : 1 orange male : 1 black male** (1:1:1:1)

(c) Total offspring = 30 + 28 + 55 + 27 = 140

Expected values (E) for each category = 140 / 4 = 35

| Phenotype | Observed (O) | Expected (E) | $(O - E)^2$ | $\frac{(O - E)^2}{E}$ |
|-----------|-------------|-------------|-------------|---------------------|
| Orange female | 30 | 35 | 25 | 0.71 |
| Tortoiseshell female | 28 | 35 | 49 | 1.40 |
| Black male | 55 | 35 | 400 | 11.43 |
| Orange male | 27 | 35 | 64 | 1.83 |

$\chi^2 = 0.71 + 1.40 + 11.43 + 1.83 = 15.37$

Degrees of freedom = number of categories $- 1 = 4 - 1 = 3$

Critical value at $p = 0.05$ with 3 degrees of freedom = **7.82**

Since $\chi^2_{\text{calculated}}$ (15.37) $\gt$ $\chi^2_{\text{critical}}$ (7.82), the difference between observed and expected results **is statistically significant** ($p \lt 0.05$). The observed results do not fit the expected 1:1:1:1 ratio. There may be reduced viability of certain genotypes, sampling error, or other factors affecting the cross.

(d) **Sex-linked inheritance** involves genes located on the sex chromosomes (typically the X chromosome, since the Y chromosome carries very few genes). The key difference from autosomal inheritance is that males have only one X chromosome (hemizygous), so they express whatever allele is present on their single X chromosome — there is no second allele to mask a recessive allele. Females have two X chromosomes, so recessive alleles on one X can be masked by dominant alleles on the other.

**X-linked recessive conditions are more common in males** because:
1. Males need only one copy of the recessive allele (on their single X chromosome) to express the condition ($X^aY$).
2. Females need two copies of the recessive allele ($X^aX^a$) to express the condition — if they are heterozygous ($X^AX^a$), they are carriers and do not show symptoms.
3. A male inherits his X chromosome from his mother (and Y from his father), so a carrier mother has a 50% chance of passing the affected X chromosome to each son. A father passes his X chromosome only to his daughters (who become carriers if the mother contributes a normal X).
4. Since the probability of a female being $X^aX^a$ is much lower than a male being $X^aY$ (assuming the allele is rare), X-linked recessive conditions are far more common in males.

---

### IT-3: Gene Technology and Ethical Considerations (with Cells and Exchange and Transport)

**Question:**

Genetically modified (GM) crops have been developed that are resistant to herbicides, insect pests, or both. One example is Bt cotton, which contains a gene from the bacterium *Bacillus thuringiensis* (Bt) that produces a protein toxic to certain insect pests.

(a) Describe how the Bt gene is inserted into the cotton plant genome using a **plasmid vector** and the bacterium *Agrobacterium tumefaciens*.

(b) The Bt toxin protein is only toxic to certain insect pests (e.g., lepidopteran larvae) and is harmless to humans and most other animals. Explain why the toxin affects insect pests but not humans, with reference to enzyme specificity.

(c) Critics of GM crops argue that the Bt gene could be transferred to wild plant relatives through **horizontal gene transfer**, creating "superweeds." Evaluate this concern by explaining how horizontal gene transfer could occur between plants and discussing the likelihood of this happening.

(d) Explain how **reverse transcriptase** and **cDNA** are used in the production of recombinant human insulin by genetically modified bacteria, and explain why cDNA (rather than genomic DNA) is used.

**Solution:**

(a) *Agrobacterium tumefaciens* is a soil bacterium that naturally transfers a section of its Ti (tumour-inducing) plasmid (called T-DNA) into plant cells, where it integrates into the plant genome. The process for genetic engineering:

1. The **T-DNA region** of the Ti plasmid is removed (using restriction enzymes) and replaced with the **Bt gene** along with a selectable marker gene (e.g., antibiotic resistance) and a plant promoter sequence that ensures the Bt gene is expressed in plant cells.
2. This **recombinant Ti plasmid** is introduced into *Agrobacterium tumefaciens*.
3. The recombinant *Agrobacterium* is used to infect cotton plant tissue (e.g., leaf discs).
4. The bacterium transfers the recombinant T-DNA (containing the Bt gene) into the cotton plant cells, where it integrates into the plant genome.
5. The transformed plant cells are grown on a medium containing the antibiotic — only cells that have incorporated the T-DNA (with the resistance gene) survive.
6. These transformed cells are grown into whole cotton plants using tissue culture techniques (hormones such as auxin and cytokinin stimulate shoot and root development).
7. The resulting GM cotton plants express the Bt gene and produce the Bt toxin protein in their tissues, particularly in leaves.

(b) The Bt toxin is a protein that acts as an **insect-specific toxin**. It is produced as an inactive protoxin that is activated only in the alkaline gut of susceptible insect larvae. In the insect gut, the alkaline pH activates the protoxin, which is then cleaved by specific **proteases** (enzymes) in the insect's digestive system to produce the active toxin. The active toxin binds to specific **receptor proteins** on the surface of epithelial cells in the insect midgut, forming pores that cause cell lysis and death of the insect.

Humans and most other animals are unaffected because: (1) the human gut is acidic, not alkaline, so the protoxin is not activated; (2) humans lack the specific proteases required to cleave and activate the protoxin; (3) human gut cells lack the specific receptor proteins that the active Bt toxin binds to. This is an example of **enzyme and receptor specificity** — the toxin's action depends on the presence of specific enzymes and receptors found only in certain insect species.

(c) The concern is that the Bt gene could be transferred from GM crops to wild relatives through **cross-pollination** (pollen from the GM crop fertilising wild plants). This is **not horizontal gene transfer** (which refers to transfer between unrelated organisms, e.g., between bacteria) — it is **vertical gene transfer through hybridisation** between closely related plant species. If the Bt gene were transferred to a wild relative, the wild plant might gain insect resistance, potentially making it a more successful "weed."

However, the likelihood depends on several factors:
- **Proximity**: the wild relative must be growing near the GM crop and must flower at the same time.
- **Compatibility**: the GM crop and wild relative must be sexually compatible (closely related enough to produce fertile hybrids).
- **Gene flow**: the Bt gene would only spread if the hybrid offspring are fertile and the gene provides a selective advantage in the wild.

In practice, strategies to reduce this risk include: creating buffer zones around GM crops, engineering male-sterile GM plants (so they cannot produce pollen), and using chloroplast transformation (most chloroplast DNA is maternally inherited and not transmitted through pollen).

(d) **Reverse transcriptase** is an enzyme (produced by retroviruses) that synthesises DNA from an RNA template. To produce recombinant human insulin:

1. mRNA for the insulin gene is extracted from human pancreatic beta cells.
2. **Reverse transcriptase** is used to make a complementary DNA (cDNA) strand from the mRNA template.
3. The mRNA is removed, and DNA polymerase is used to synthesise the second DNA strand, producing **double-stranded cDNA**.
4. This cDNA contains only the coding sequences (exons) of the insulin gene, without introns.

**cDNA is used instead of genomic DNA** because bacteria (prokaryotes) lack the machinery to remove introns from pre-mRNA (they do not have spliceosomes). If genomic DNA (containing introns) were inserted into a bacterium, the introns would be transcribed along with the exons, producing an mRNA that cannot be correctly translated — the bacterial ribosomes would try to translate the introns as part of the protein, producing a non-functional product. cDNA, being a copy of the processed mRNA (without introns), can be transcribed and translated directly by the bacterial cell to produce functional insulin.
