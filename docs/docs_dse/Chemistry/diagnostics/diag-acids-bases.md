---
title: Acids, Bases and Salts -- Diagnostic Tests
description: Hardest diagnostic questions on acids, bases and salts within the DSE specification, each with a full worked solution.
slug: diag-acids-bases-and-salts
hide_table_of_contents: true
---

# DSE Chemistry Diagnostic: Acids, Bases and Salts

## Unit Test 1: Weak Acid pH Calculation

**Question**

Ethanoic acid ($CH_{3}COOH$) is a weak acid with $K_{a} = 1.8 \times 10^{-5}$ mol/dm$^{3}$ at 25$^{\circ}$C.

(a) Calculate the pH of a 0.10 mol/dm$^{3}$ solution of ethanoic acid. [4 marks]

(b) Calculate the pH of a 0.010 mol/dm$^{3}$ solution of ethanoic acid. [2 marks]

(c) A student claims that diluting a weak acid by a factor of 10 will increase the pH by exactly 1. Evaluate this claim by comparing your answers to (a) and (b). [2 marks]

---

**Worked Solution**

(a) $CH_{3}COOH \rightleftharpoons CH_{3}COO^{-} + H^{+}$

$$K_{a} = \frac{[CH_{3}COO^{-}][H^{+}]}{[CH_{3}COOH]}$$

At equilibrium, let $[H^{+}] = x$:

$$1.8 \times 10^{-5} = \frac{x \cdot x}{0.10 - x}$$

Assuming $x \ll 0.10$ (i.e., dissociation is small):

$$1.8 \times 10^{-5} \approx \frac{x^{2}}{0.10}$$

$$x^{2} = 1.8 \times 10^{-6}$$

$$x = 1.34 \times 10^{-3} \text{ mol/dm}^{3}$$

Check: $x/0.10 = 1.34\% \lt 5\%$ -- assumption valid.

$$pH = -\log(1.34 \times 10^{-3}) = 2.87$$

(b) $$1.8 \times 10^{-5} = \frac{x^{2}}{0.010}$$

$$x^{2} = 1.8 \times 10^{-7}$$

$$x = 4.24 \times 10^{-4} \text{ mol/dm}^{3}$$

$$pH = -\log(4.24 \times 10^{-4}) = 3.37$$

(c) The pH change: $3.37 - 2.87 = 0.50$.

The claim is **incorrect** for weak acids. Diluting by a factor of 10 increases the pH by **less than 1**. This is because dilution shifts the equilibrium to the right (Le Chatelier's principle), causing a greater fraction of the acid to dissociate. The $[H^{+}]$ does not decrease by a full factor of 10.

(For a strong acid, the claim would be correct since $[H^{+}]$ directly decreases by a factor of 10, increasing pH by exactly 1.)

---

## Unit Test 2: Buffer Solution

**Question**

A buffer solution is prepared by mixing 100 cm$^{3}$ of 0.20 mol/dm$^{3}$ ethanoic acid ($CH_{3}COOH$, $K_{a} = 1.8 \times 10^{-5}$) with 100 cm$^{3}$ of 0.10 mol/dm$^{3}$ sodium ethanoate ($CH_{3}COONa$).

(a) Calculate the pH of this buffer solution. [4 marks]

(b) Calculate the new pH after adding 5.0 cm$^{3}$ of 0.10 mol/dm$^{3}$ HCl to 50.0 cm$^{3}$ of the buffer. [4 marks]

(c) Explain why this buffer resists changes in pH when a small amount of strong acid is added. [2 marks]

---

**Worked Solution**

(a) After mixing, total volume = 200 cm$^{3}$.

$$[CH_{3}COOH] = \frac{0.20 \times 100}{200} = 0.10 \text{ mol/dm}^{3}$$

$$[CH_{3}COO^{-}] = \frac{0.10 \times 100}{200} = 0.050 \text{ mol/dm}^{3}$$

Using the Henderson-Hasselbalch equation:

$$pH = pK_{a} + \log\frac{[CH_{3}COO^{-}]}{[CH_{3}COOH]}$$

$$pK_{a} = -\log(1.8 \times 10^{-5}) = 4.74$$

$$pH = 4.74 + \log\frac{0.050}{0.10} = 4.74 + \log(0.5) = 4.74 - 0.30 = 4.44$$

(b) In 50.0 cm$^{3}$ of buffer:

$$n(CH_{3}COOH) = 0.10 \times 0.050 = 0.00500 \text{ mol}$$

$$n(CH_{3}COO^{-}) = 0.050 \times 0.050 = 0.00250 \text{ mol}$$

Moles of $HCl$ added: $n(HCl) = 0.10 \times 0.0050 = 0.000500$ mol

The $H^{+}$ from HCl reacts with $CH_{3}COO^{-}$:

$$CH_{3}COO^{-} + H^{+} \rightarrow CH_{3}COOH}$$

New moles:

$$n(CH_{3}COO^{-}) = 0.00250 - 0.000500 = 0.00200 \text{ mol}$$

$$n(CH_{3}COOH) = 0.00500 + 0.000500 = 0.00550 \text{ mol}$$

New total volume = $50.0 + 5.0 = 55.0$ cm$^{3}$:

$$[CH_{3}COOH] = \frac{0.00550}{0.0550} = 0.100 \text{ mol/dm}^{3}$$

$$[CH_{3}COO^{-}] = \frac{0.00200}{0.0550} = 0.0364 \text{ mol/dm}^{3}$$

$$pH = 4.74 + \log\frac{0.0364}{0.100} = 4.74 + \log(0.364) = 4.74 - 0.439 = 4.30$$

(c) The buffer contains a weak acid ($CH_{3}COOH$) and its conjugate base ($CH_{3}COO^{-}$). When a strong acid ($H^{+}$) is added, the $H^{+}$ ions react with $CH_{3}COO^{-}$ to form $CH_{3}COOH$, consuming most of the added $H^{+}$ and preventing a significant drop in pH.

---

## Unit Test 3: Salt Hydrolysis

**Question**

(a) Predict whether an aqueous solution of ammonium chloride ($NH_{4}Cl$) is acidic, alkaline, or neutral. Explain your answer using the concept of hydrolysis. [3 marks]

(b) Predict whether an aqueous solution of sodium ethanoate ($CH_{3}COONa$) is acidic, alkaline, or neutral. Explain. [3 marks]

(c) Predict whether an aqueous solution of sodium chloride ($NaCl$) is acidic, alkaline, or neutral. Explain. [1 mark]

---

**Worked Solution**

(a) $NH_{4}Cl$ solution is **acidic** ($pH \lt 7$).

$NH_{4}Cl$ dissociates completely in water: $NH_{4}Cl \rightarrow NH_{4}^{+} + Cl^{-}$.

The ammonium ion ($NH_{4}^{+}$) is the conjugate acid of the weak base ammonia ($NH_{3}$). It undergoes **hydrolysis**:

$$NH_{4}^{+} + H_{2}O \rightleftharpoons NH_{3} + H_{3}O^{+}$$

This reaction releases $H_{3}O^{+}$ ions, making the solution acidic. The chloride ion ($Cl^{-}$) is the conjugate base of a strong acid ($HCl$) and does not hydrolyse.

(b) $CH_{3}COONa$ solution is **alkaline** ($pH \gt 7$).

$CH_{3}COONa$ dissociates completely: $CH_{3}COONa \rightarrow CH_{3}COO^{-} + Na^{+}$.

The ethanoate ion ($CH_{3}COO^{-}$) is the conjugate base of the weak acid ethanoic acid ($CH_{3}COOH$). It undergoes hydrolysis:

$$CH_{3}COO^{-} + H_{2}O \rightleftharpoons CH_{3}COOH + OH^{-}$$

This reaction produces $OH^{-}$ ions, making the solution alkaline. The sodium ion ($Na^{+}$) does not hydrolyse.

(c) $NaCl$ solution is **neutral** ($pH = 7$).

Both $Na^{+}$ (conjugate acid of the strong base $NaOH$) and $Cl^{-}$ (conjugate base of the strong acid $HCl$) do not undergo hydrolysis. Neither ion affects the $pH$ of the solution.

---

## Integration Test 1: Titration Curve + Indicator Choice

**Question**

25.0 cm$^{3}$ of 0.100 mol/dm$^{3}$ ammonia solution ($NH_{3}$, $K_{b} = 1.8 \times 10^{-5}$) is titrated with 0.100 mol/dm$^{3}$ hydrochloric acid.

(a) Calculate the pH of the ammonia solution before any acid is added. [3 marks]

(b) Calculate the pH at the equivalence point. [3 marks]

(c) State and explain the most suitable indicator for this titration. [2 marks]

---

**Worked Solution**

(a) $NH_{3} + H_{2}O \rightleftharpoons NH_{4}^{+} + OH^{-}$

$$K_{b} = \frac{[NH_{4}^{+}][OH^{-}]}{[NH_{3}]} = 1.8 \times 10^{-5}$$

Let $[OH^{-}] = x$:

$$1.8 \times 10^{-5} = \frac{x^{2}}{0.100}$$

$$x = \sqrt{1.8 \times 10^{-6}} = 1.34 \times 10^{-3} \text{ mol/dm}^{3}$$

$$pOH = -\log(1.34 \times 10^{-3}) = 2.87$$

$$pH = 14 - 2.87 = 11.13$$

(b) At the equivalence point, all $NH_{3}$ has been converted to $NH_{4}^{+}$.

Moles of $NH_{3}$ = $0.100 \times 0.0250 = 0.00250$ mol

Volume of HCl needed = $25.0$ cm$^{3}$ (equimolar), total volume = $50.0$ cm$^{3}$.

$$[NH_{4}^{+}] = \frac{0.00250}{0.0500} = 0.0500 \text{ mol/dm}^{3}$$

$NH_{4}^{+}$ hydrolyses: $NH_{4}^{+} + H_{2}O \rightleftharpoons NH_{3} + H_{3}O^{+}$

$$K_{a} = \frac{K_{w}}{K_{b}} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}$$

$$5.56 \times 10^{-10} = \frac{x^{2}}{0.0500}$$

$$x = \sqrt{2.78 \times 10^{-11}} = 5.27 \times 10^{-6}$$

$$pH = -\log(5.27 \times 10^{-6}) = 5.28$$

(c) The equivalence point pH is 5.28, which is **acidic**. The most suitable indicator is one whose colour change range includes pH 5.28. **Methyl orange** (pH range 3.1--4.4) is too low. **Bromocresol green** (pH range 3.8--5.4) would be suitable. **Methyl red** (pH range 4.4--6.2) is also a good choice. Phenolphthalein (pH range 8.3--10.0) would NOT be suitable as the colour change occurs well above the equivalence point pH.

---

## Integration Test 2: pH Mixing and Neutralisation

**Question**

(a) Calculate the pH when 10.0 cm$^{3}$ of 0.100 mol/dm$^{3}$ NaOH is added to 40.0 cm$^{3}$ of 0.100 mol/dm$^{3}$ HCl. [3 marks]

(b) Calculate the pH when 30.0 cm$^{3}$ of 0.100 mol/dm$^{3}$ NaOH is added to 40.0 cm$^{3}$ of 0.100 mol/dm$^{3}$ HCl. [3 marks]

(c) Explain why the pH changes much more dramatically between the two scenarios in (a) and (b) than between adding 10.0 cm$^{3}$ and 20.0 cm$^{3}$ of NaOH. [2 marks]

---

**Worked Solution**

(a) Moles of $HCl$: $0.100 \times 0.0400 = 0.00400$ mol

Moles of NaOH: $0.100 \times 0.0100 = 0.00100$ mol

$HCl$ is in excess by: $0.00400 - 0.00100 = 0.00300$ mol

Total volume = $40.0 + 10.0 = 50.0$ cm$^{3}$

$$[H^{+}] = \frac{0.00300}{0.0500} = 0.0600 \text{ mol/dm}^{3}$$

$$pH = -\log(0.0600) = 1.22$$

(b) Moles of $HCl$: $0.00400$ mol

Moles of NaOH: $0.100 \times 0.0300 = 0.00300$ mol

$HCl$ is in excess by: $0.00400 - 0.00300 = 0.00100$ mol

Total volume = $40.0 + 30.0 = 70.0$ cm$^{3}$

$$[H^{+}] = \frac{0.00100}{0.0700} = 0.01429 \text{ mol/dm}^{3}$$

$$pH = -\log(0.01429) = 1.85$$

(c) The pH changes from 1.22 to 1.85 (a change of 0.63) when NaOH added increases from 10.0 to 30.0 cm$^{3}$. The change per 10 cm$^{3}$ is relatively small because the solution still contains a large excess of $H^{+}$ (a strong acid). The pH is in the region where the logarithmic scale compresses large changes in $[H^{+}]$ into small changes in pH.

However, near the equivalence point (at 40.0 cm$^{3}$ of NaOH), adding even a small amount of NaOH causes a **dramatic** pH change because the $[H^{+}]$ approaches very small values where the logarithmic relationship amplifies the change. This is the characteristic **steep region** of a strong acid-strong base titration curve.

---

## Integration Test 3: Buffer Preparation and Capacity

**Question**

(a) Describe how you would prepare 250 cm$^{3}$ of an ethanoic acid / sodium ethanoate buffer with pH = 5.00, using 0.50 mol/dm$^{3}$ ethanoic acid and solid sodium ethanoate ($M = 82.0$ g/mol). ($K_{a} = 1.8 \times 10^{-5}$) [4 marks]

(b) Calculate the mass of sodium ethanoate required. [2 marks]

(c) Explain what is meant by **buffer capacity** and state how it can be increased. [2 marks]

---

**Worked Solution**

(a) Using the Henderson-Hasselbalch equation:

$$pH = pK_{a} + \log\frac{[CH_{3}COO^{-}]}{[CH_{3}COOH]}$$

$$5.00 = 4.74 + \log\frac{[CH_{3}COO^{-}]}{[CH_{3}COOH]}$$

$$\log\frac{[CH_{3}COO^{-}]}{[CH_{3}COOH]} = 0.26$$

$$\frac{[CH_{3}COO^{-}]}{[CH_{3}COOH]} = 10^{0.26} = 1.82$$

The buffer needs $[CH_{3}COO^{-}]/[CH_{3}COOH] = 1.82$.

To prepare 250 cm$^{3}$ (0.250 dm$^{3}$): choose $[CH_{3}COOH] = 0.20$ mol/dm$^{3}$ (from the 0.50 mol/dm$^{3}$ stock by dilution).

Volume of stock needed: $V = \frac{0.20 \times 250}{0.50} = 100$ cm$^{3}$ of 0.50 mol/dm$^{3}$ $CH_{3}COOH$, diluted to 250 cm$^{3}$.

$[CH_{3}COO^{-}] = 1.82 \times 0.20 = 0.364$ mol/dm$^{3}$

$n(CH_{3}COO^{-}) = 0.364 \times 0.250 = 0.0910$ mol

(b) $$m(CH_{3}COONa) = 0.0910 \times 82.0 = 7.46 \text{ g}$$

Procedure: Dissolve 7.46 g of sodium ethanoate in approximately 150 cm$^{3}$ of distilled water. Add 100 cm$^{3}$ of 0.50 mol/dm$^{3}$ ethanoic acid. Transfer to a 250 cm$^{3}$ volumetric flask and make up to the mark with distilled water. Mix thoroughly.

(c) **Buffer capacity** is the amount of strong acid or strong base that can be added to a buffer solution before the pH changes significantly (typically defined as the amount needed to change the pH by 1 unit).

Buffer capacity can be increased by:
1. Increasing the **total concentration** of the weak acid and its conjugate base (higher concentrations provide more $H^{+}$ or $OH^{-}$ to absorb).
2. Keeping the ratio $[A^{-}]/[HA]$ close to 1 (maximum buffer capacity occurs when $pH = pK_{a}$).
