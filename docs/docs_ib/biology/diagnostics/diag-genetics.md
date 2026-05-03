---
title: "Genetics -- Diagnostic Tests"
description: "Diagnostic tests for IB Biology genetics: monohybrid and dihybrid crosses, chi-squared tests, sex linkage, and Hardy-Weinberg equilibrium."
slug: diag-genetics
hide_table_of_contents: true
---

# Genetics — Diagnostic Tests

## Unit Tests

### UT-1: Dihybrid Cross and Independent Assortment
**Question:** In pea plants, tall (T) is dominant over dwarf (t) and round seeds (R) are dominant over wrinkled (r). A heterozygous tall, round plant is crossed with a homozygous recessive plant. Calculate the expected phenotypic ratio and the probability of obtaining a tall, wrinkled plant.

**Solution:**

Parent 1: TtRr (heterozygous tall, round)
Parent 2: ttrr (homozygous recessive)

Gametes from Parent 1 (TtRr): TR, Tr, tR, tr (each with probability 1/4)
Gametes from Parent 2 (ttrr): tr (only one type)

Punnett square (1 x 4):

| | TR | Tr | tR | tr |
|---|---|---|---|---|
| tr | TtRr | Ttrr | ttRr | ttrr |

Phenotypes:
- TtRr: Tall, Round (1/4)
- Ttrr: Tall, Wrinkled (1/4)
- ttRr: Dwarf, Round (1/4)
- ttrr: Dwarf, Wrinkled (1/4)

Expected phenotypic ratio: 1 tall round : 1 tall wrinkled : 1 dwarf round : 1 dwarf wrinkled (1:1:1:1).

Probability of tall, wrinkled (Ttrr): $1/4 = 0.25 = 25\%$.

This 1:1:1:1 ratio is characteristic of a test cross (crossing with homozygous recessive) and confirms independent assortment of the two genes.

---
### UT-2: Chi-Squared Test
**Question:** A cross between two heterozygous pea plants (Tt x Tt) produces 732 tall and 268 dwarf offspring (total $n = 1000$). Perform a chi-squared test to determine whether the observed results fit the expected 3:1 Mendelian ratio. Use a significance level of $0.05$.

**Solution:**

Expected values (3:1 ratio, $n = 1000$):
- Tall: $1000 \times 3/4 = 750$
- Dwarf: $1000 \times 1/4 = 250$

$$\chi^2 = \sum \frac{(O - E)^2}{E}$$

Tall: $\frac{(732 - 750)^2}{750} = \frac{(-18)^2}{750} = \frac{324}{750} = 0.432$

Dwarf: $\frac{(268 - 250)^2}{250} = \frac{(18)^2}{250} = \frac{324}{250} = 1.296$

$\chi^2 = 0.432 + 1.296 = 1.728$

Degrees of freedom: number of categories $- 1 = 2 - 1 = 1$.

Critical value at $\alpha = 0.05$ with $df = 1$: $3.841$.

Since $\chi^2_{\text{calc}} = 1.728 \lt 3.841 = \chi^2_{\text{crit}}$, we **fail to reject** the null hypothesis.

Conclusion: The observed data fits the expected 3:1 ratio at the 0.05 significance level. There is no statistically significant evidence that the inheritance pattern deviates from Mendelian expectations.

The p-value for $\chi^2 = 1.728$ with $df = 1$ is approximately $0.19$, meaning there is a 19% probability of observing this much deviation (or more) by chance alone.

---
### UT-3: Sex-Linked Inheritance
**Question:** Red-green colour blindness is an X-linked recessive trait. A woman with normal vision whose father was colour-blind marries a man with normal vision. They have a son. What is the probability that their son is colour-blind? What is the probability that a daughter is a carrier?

**Solution:**

Let $X^C$ = normal vision allele (dominant), $X^c$ = colour-blind allele (recessive).

Woman's genotype: Her father was $X^cY$ (colour-blind), so he passed $X^c$ to her. Her mother must have passed $X^C$ (since the woman has normal vision, she must have at least one $X^C$). Therefore, the woman is $X^CX^c$ (carrier).

Man's genotype: Normal vision, so $X^CY$.

Cross: $X^CX^c$ (carrier mother) $\times$ $X^CY$ (normal father)

Offspring:
| | $X^C$ (father) | $Y$ (father) |
|---|---|---|
| $X^C$ (mother) | $X^CX^C$ (normal female) | $X^CY$ (normal male) |
| $X^c$ (mother) | $X^CX^c$ (carrier female) | $X^cY$ (colour-blind male) |

Probability that a son is colour-blind: the son receives Y from father (50% chance of being male) and $X^c$ from mother (50% chance). Since we are told they have a son, the probability is simply the chance he receives $X^c$ from mother = $1/2 = 50\%$.

Probability that a daughter is a carrier: the daughter receives $X^C$ from father and $X^c$ from mother (50% chance) = $1/2 = 50\%$. The other 50% would be $X^CX^C$ (normal, non-carrier).

## Integration Tests

### IT-1: Genetics and Evolution (with Evolution)
**Question:** In a population of 10000 humans, the frequency of the allele for cystic fibrosis ($f$, recessive) is $0.02$. Assuming Hardy-Weinberg equilibrium: (a) calculate the expected number of carriers, (b) calculate the expected number of individuals with cystic fibrosis, (c) if the population is in HWE and the disease reduces fitness by 90% ($w = 0.1$ for affected individuals), calculate the new allele frequency after one generation of selection.

**Solution:**

(a) Let $p$ = frequency of normal allele, $q$ = frequency of CF allele $= 0.02$.

$p + q = 1$, so $p = 0.98$.

Carrier frequency ($2pq$): $2 \times 0.98 \times 0.02 = 0.0392$.

Expected number of carriers: $10000 \times 0.0392 = 392$.

(b) Affected frequency ($q^2$): $(0.02)^2 = 0.0004$.

Expected number of affected individuals: $10000 \times 0.0004 = 4$.

(c) With selection against the recessive homozygote ($w_{ff} = 0.1$):

Mean fitness: $\bar{w} = p^2 \times 1 + 2pq \times 1 + q^2 \times 0.1 = 0.9604 + 0.0392 + 0.00004 = 0.99964$.

After selection:
- $p'$ (contribution from normal homozygotes): $\frac{p^2 \times 1}{\bar{w}} = \frac{0.9604}{0.99964} = 0.9608$
- $q'$ (contribution from heterozygotes): $\frac{2pq \times 1}{2\bar{w}} = \frac{0.0392}{2 \times 0.99964} = 0.01961$
- $q'$ (contribution from affected): $\frac{q^2 \times 0.1}{2\bar{w}} = \frac{0.00004}{2 \times 0.99964} = 0.00002$

New allele frequency: $q_{\text{new}} = \frac{2pq \times 1 + 2q^2 \times 0.1}{2\bar{w}} = \frac{0.0392 + 0.00008}{1.99928} = \frac{0.03928}{1.99928} = 0.01965$

$q$ decreased from $0.0200$ to $0.01965$ -- only a small decrease because the recessive allele is mostly "hidden" in heterozygotes, where selection cannot act against it. This explains why deleterious recessive alleles persist in populations at low frequencies.

---
### IT-2: Genetic Crosses and Molecular Biology (with Molecular Biology)
**Question:** A mutation in the beta-globin gene (HbS) causes sickle cell anaemia. The normal allele (HbA) and sickle cell allele (HbS) show incomplete dominance: HbA/HbA = normal, HbA/HbS = carrier (sickle cell trait, mild symptoms), HbS/HbS = sickle cell anaemia (severe). In a region where malaria is endemic, the fitness values are: HbA/HbA = 0.85, HbA/HbS = 1.00, HbS/HbS = 0.15. Calculate the equilibrium frequency of the HbS allele under heterozygote advantage (balancing selection).

**Solution:**

Let $w_{AA} = 0.85$, $w_{AS} = 1.00$, $w_{SS} = 0.15$.

At equilibrium under balancing selection, the frequency of allele S is:

$$q = \frac{w_{AS} - w_{AA}}{2w_{AS} - w_{AA} - w_{SS}}$$

$q = \frac{1.00 - 0.85}{2(1.00) - 0.85 - 0.15} = \frac{0.15}{2.00 - 1.00} = \frac{0.15}{1.00} = 0.15$

$p = 1 - 0.15 = 0.85$.

At equilibrium: $q(\text{HbS}) = 0.15$ (15%).

Genotype frequencies at equilibrium:
- HbA/HbA: $p^2 = (0.85)^2 = 0.7225$ (72.25%)
- HbA/HbS: $2pq = 2(0.85)(0.15) = 0.2550$ (25.50%)
- HbS/HbS: $q^2 = (0.15)^2 = 0.0225$ (2.25%)

This is a classic example of heterozygote advantage (balanced polymorphism). The HbS allele is maintained in the population at a significant frequency (15%) because heterozygous carriers have the highest fitness -- they are protected against severe malaria while avoiding sickle cell anaemia. This explains the geographic correlation between the HbS allele frequency and historical malaria endemicity in West Africa, the Mediterranean, and parts of India.

---
### IT-3: Pedigree Analysis and Chi-Squared (with Cell Biology)
**Question:** A family shows a rare autosomal dominant condition. The pedigree shows: both parents are unaffected (normal phenotype) but they have an affected child. The couple has two more children who are unaffected. Perform a chi-squared test to evaluate whether this pattern is consistent with autosomal dominant inheritance with 80% penetrance. Under this model, what is the probability that two unaffected parents have an affected child?

**Solution:**

If the condition were fully penetrant autosomal dominant, two unaffected parents could NOT have an affected child (at least one parent would need to carry the dominant allele). Therefore, the observation of an affected child from two unaffected parents is inconsistent with full penetrance.

With 80% penetrance: a person carrying the dominant allele has an 80% chance of showing the phenotype and a 20% chance of being an unaffected carrier.

For two unaffected parents to have an affected child, the most likely scenario is:
- One parent is an unaffected carrier (genotype Aa, but phenotype normal due to 20% non-penetrance)
- The other parent is homozygous recessive (aa)

Probability of this mating occurring:
- If one parent is an unaffected carrier (frequency depends on population), the cross is Aa $\times$ aa.

If we assume one parent is Aa (unpenetrant) and the other is aa:
- Probability child is Aa (genotype) = 1/2
- Probability child shows phenotype (penetrance) = 80% = 0.8
- Combined probability = 1/2 $\times$ 0.8 = 0.4 = 40%

However, the question asks us to evaluate the full pattern: 1 affected and 2 unaffected children.

Under the model (one parent Aa non-penetrant, other parent aa):
- Each child has probability 0.5 of being Aa and 0.5 of being aa.
- If Aa: 0.8 probability of affected, 0.2 of unaffected.
- If aa: always unaffected.

P(affected) per child = $0.5 \times 0.8 = 0.4$
P(unaffected) per child = $1 - 0.4 = 0.6$

Expected in 3 children: affected $= 3 \times 0.4 = 1.2$, unaffected $= 3 \times 0.6 = 1.8$.

Observed: affected $= 1$, unaffected $= 2$.

$\chi^2 = \frac{(1 - 1.2)^2}{1.2} + \frac{(2 - 1.8)^2}{1.8} = \frac{0.04}{1.2} + \frac{0.04}{1.8} = 0.0333 + 0.0222 = 0.0556$

With $df = 1$, $\chi^2_{\text{crit}} = 3.841$. Since $0.0556 \lt 3.841$, the data is consistent with 80% penetrance autosomal dominant inheritance. The probability of two unaffected parents having an affected child is 40% per child under this model.
