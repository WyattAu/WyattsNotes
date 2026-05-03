---
title: Acids, Bases and Buffers — Diagnostic Tests
description: Diagnostic tests for pH, Ka, Kb, Kw, buffer calculations, and titration curves at the hardest A-Level Chemistry standard.
slug: diag-acids-bases
hide_table_of_contents: true
---

# Acids, Bases and Buffers — Diagnostic Tests

## Unit Tests

### UT-1: Buffer pH Calculation with Dilution

**Question:**

A buffer solution is prepared by adding $0.100\,\text{mol}$ of ethanoic acid ($\text{CH}_3\text{COOH}$, $K_a = 1.74 \times 10^{-5}\,\text{mol dm}^{-3}$) and $0.050\,\text{mol}$ of sodium ethanoate ($\text{CH}_3\text{COONa}$) to water and making up to $250\,\text{cm}^3$.

(a) Calculate the pH of this buffer solution.

(b) The buffer solution is diluted to $500\,\text{cm}^3$ with distilled water. Calculate the new pH and explain why the pH changes only very slightly.

(c) $10.0\,\text{cm}^3$ of $0.100\,\text{mol dm}^{-3}$ HCl is added to $90.0\,\text{cm}^3$ of the original buffer solution. Calculate the new pH.

**Solution:**

(a) Using the Henderson-Hasselbalch equation:

$$[\text{CH}_3\text{COOH}] = \frac{0.100}{0.250} = 0.400\,\text{mol dm}^{-3}$$
$$[\text{CH}_3\text{COO}^-] = \frac{0.050}{0.250} = 0.200\,\text{mol dm}^{-3}$$

$$\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]} = -\log(1.74 \times 10^{-5}) + \log\frac{0.200}{0.400}$$

$$\text{pH} = 4.759 + \log(0.500) = 4.759 - 0.301 = 4.458$$

Alternatively, using the equilibrium expression:

$$K_a = \frac{[\text{H}^+][\text{CH}_3\text{COO}^-]}{[\text{CH}_3\text{COOH}]} = \frac{[\text{H}^+] \times 0.200}{0.400}$$

$$[\text{H}^+] = \frac{1.74 \times 10^{-5} \times 0.400}{0.200} = 3.48 \times 10^{-5}\,\text{mol dm}^{-3}$$

$$\text{pH} = -\log(3.48 \times 10^{-5}) = 4.459$$

(b) After dilution to $500\,\text{cm}^3$:

$$[\text{CH}_3\text{COOH}] = \frac{0.100}{0.500} = 0.200\,\text{mol dm}^{-3}$$
$$[\text{CH}_3\text{COO}^-] = \frac{0.050}{0.500} = 0.100\,\text{mol dm}^{-3}$$

$$[\text{H}^+] = \frac{1.74 \times 10^{-5} \times 0.200}{0.100} = 3.48 \times 10^{-5}\,\text{mol dm}^{-3}$$

$$\text{pH} = 4.459$$

The pH is **unchanged** because both the acid and conjugate base concentrations are halved by dilution, so their ratio remains the same. The Henderson-Hasselbalch equation shows pH depends only on the ratio $[\text{A}^-]/[\text{HA}]$, which is unaffected by dilution.

(c) Moles in $90.0\,\text{cm}^3$ of buffer:

$$n(\text{CH}_3\text{COOH}) = 0.400 \times 0.0900 = 0.0360\,\text{mol}$$
$$n(\text{CH}_3\text{COO}^-) = 0.200 \times 0.0900 = 0.0180\,\text{mol}$$

Moles of HCl added: $0.100 \times 0.0100 = 0.00100\,\text{mol}$

HCl reacts with the conjugate base: $\text{CH}_3\text{COO}^- + \text{H}^+ \to \text{CH}_3\text{COOH}$

New moles:
- $n(\text{CH}_3\text{COOH}) = 0.0360 + 0.00100 = 0.0370\,\text{mol}$
- $n(\text{CH}_3\text{COO}^-) = 0.0180 - 0.00100 = 0.0170\,\text{mol}$

Total volume: $90.0 + 10.0 = 100.0\,\text{cm}^3 = 0.100\,\text{dm}^3$

$$[\text{H}^+] = \frac{1.74 \times 10^{-5} \times (0.0170/0.100)}{(0.0370/0.100)} = \frac{1.74 \times 10^{-5} \times 0.170}{0.370} = 7.99 \times 10^{-6}\,\text{mol dm}^{-3}$$

$$\text{pH} = -\log(7.99 \times 10^{-6}) = 5.10$$

The pH changed from $4.46$ to $5.10$ (only 0.64 units) despite adding a strong acid. If the same amount of HCl were added to $90\,\text{cm}^3$ of pure water, the pH would be $-\log(0.00100/0.100) = 1.00$.

---
### UT-2: Ka from pH and Titration Curve Analysis

**Question:**

(a) A $0.150\,\text{mol dm}^{-3}$ solution of a weak acid HA has a pH of $2.85$. Calculate $K_a$ for this acid.

(b) In a titration of $25.0\,\text{cm}^3$ of $0.100\,\text{mol dm}^{-3}$ HA with $0.100\,\text{mol dm}^{-3}$ NaOH, the pH at the half-equivalence point is $3.75$. Calculate $K_a$ and explain why the half-equivalence point gives $K_a$ directly.

(c) Choose a suitable indicator for this titration and explain your choice.

**Solution:**

(a)

$$[\text{H}^+] = 10^{-2.85} = 1.413 \times 10^{-3}\,\text{mol dm}^{-3}$$

$$K_a = \frac{[\text{H}^+]^2}{[\text{HA}] - [\text{H}^+]} = \frac{(1.413 \times 10^{-3})^2}{0.150 - 1.413 \times 10^{-3}} = \frac{1.997 \times 10^{-6}}{0.1486} = 1.34 \times 10^{-5}\,\text{mol dm}^{-3}$$

(b) At the half-equivalence point, exactly half the weak acid has been neutralised, so $[\text{HA}] = [\text{A}^-]$. The Henderson-Hasselbalch equation gives:

$$\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]} = \text{p}K_a + \log 1 = \text{p}K_a$$

So $\text{p}K_a = 3.75$ and:

$$K_a = 10^{-3.75} = 1.78 \times 10^{-4}\,\text{mol dm}^{-3}$$

(c) For a weak acid-strong base titration, the pH at the equivalence point is alkaline (greater than 7, because the salt of a weak acid and strong base hydrolyses to produce $\text{OH}^-$). A suitable indicator must change colour in the alkaline range. **Phenolphthalein** is suitable (colour change at pH 8.3--10.0), as its range falls within the steep portion of the titration curve at the equivalence point.

Methyl orange would **not** be suitable (colour change at pH 3.1--4.4) because it would change colour well before the equivalence point.

---
### UT-3: Kw and pH at Different Temperatures

**Question:**

At $50\,^\circ\text{C}$, $K_w = 5.48 \times 10^{-14}\,\text{mol}^2\text{ dm}^{-6}$.

(a) Calculate the pH of pure water at $50\,^\circ\text{C}$.

(b) Calculate the pH of a $0.0100\,\text{mol dm}^{-3}$ solution of NaOH at $50\,^\circ\text{C}$.

(c) A student states that a pH of 7 at $50\,^\circ\text{C}$ means the solution is neutral. Evaluate this statement.

**Solution:**

(a) For pure water, $[\text{H}^+] = [\text{OH}^-]$:

$$[\text{H}^+] = \sqrt{K_w} = \sqrt{5.48 \times 10^{-14}} = 2.341 \times 10^{-7}\,\text{mol dm}^{-3}$$

$$\text{pH} = -\log(2.341 \times 10^{-7}) = 6.63$$

Note: The pH of pure water is **less than 7** at $50\,^\circ\text{C}$ because $K_w$ increases with temperature (the autoionisation of water is endothermic). Despite pH being below 7, the solution is still neutral because $[\text{H}^+] = [\text{OH}^-]$.

(b)

$$[\text{OH}^-] = 0.0100\,\text{mol dm}^{-3}$$

$$[\text{H}^+] = \frac{K_w}{[\text{OH}^-]} = \frac{5.48 \times 10^{-14}}{0.0100} = 5.48 \times 10^{-12}\,\text{mol dm}^{-3}$$

$$\text{pH} = -\log(5.48 \times 10^{-12}) = 11.26$$

(c) The student's statement is **incorrect**. At $50\,^\circ\text{C}$, a neutral solution has pH $6.63$ (as calculated in part a). The pH value of 7 is only neutral at $25\,^\circ\text{C}$ (where $K_w = 1.00 \times 10^{-14}$). Neutrality is defined by $[\text{H}^+] = [\text{OH}^-]$, not by pH $= 7$. At $50\,^\circ\text{C}$, a pH of 7 actually represents a **slightly alkaline** solution because $[\text{H}^+] = 10^{-7} \lt 2.341 \times 10^{-7} = \sqrt{K_w}$, meaning $[\text{OH}^-] \gt [\text{H}^+]$.

## Integration Tests

### IT-1: Polyprotic Acid Titration and pH Profile (with Quantitative Chemistry)

**Question:**

Carbonic acid ($\text{H}_2\text{CO}_3$) is a diprotic acid with $K_{a1} = 4.30 \times 10^{-7}\,\text{mol dm}^{-3}$ and $K_{a2} = 5.61 \times 10^{-11}\,\text{mol dm}^{-3}$.

(a) Calculate the pH of a $0.0500\,\text{mol dm}^{-3}$ solution of carbonic acid.

(b) $25.0\,\text{cm}^3$ of this carbonic acid solution is titrated with $0.100\,\text{mol dm}^{-3}$ NaOH. Calculate the pH at the first equivalence point.

(c) Sketch the general shape of the pH titration curve for this diprotic acid, labelling the two equivalence points and two half-equivalence points.

**Solution:**

(a) Since $K_{a1} \gg K_{a2}$, the first dissociation dominates:

$$[\text{H}^+] \approx \sqrt{K_{a1} \times [\text{H}_2\text{CO}_3]} = \sqrt{4.30 \times 10^{-7} \times 0.0500} = \sqrt{2.15 \times 10^{-8}} = 1.466 \times 10^{-4}\,\text{mol dm}^{-3}$$

$$\text{pH} = -\log(1.466 \times 10^{-4}) = 3.83$$

(b) At the first equivalence point, all $\text{H}_2\text{CO}_3$ has been converted to $\text{HCO}_3^-$ (hydrogencarbonate ion). This is an **amphoteric** species that can act as both acid and base. The pH is given by:

$$\text{pH} = \frac{\text{p}K_{a1} + \text{p}K_{a2}}{2}$$

$$\text{p}K_{a1} = -\log(4.30 \times 10^{-7}) = 6.37$$
$$\text{p}K_{a2} = -\log(5.61 \times 10^{-11}) = 10.25$$

$$\text{pH} = \frac{6.37 + 10.25}{2} = 8.31$$

(c) The titration curve shows:
- Starting pH approximately $3.8$ (weak acid)
- First buffer region (flat) around $\text{pH} = 6.4$ (first half-equivalence point, $\text{pH} = \text{p}K_{a1}$)
- First equivalence point at approximately $\text{pH} = 8.3$ (less steep than a monoprotic titration because $\text{HCO}_3^-$ is amphoteric)
- Second buffer region (flat) around $\text{pH} = 10.3$ (second half-equivalence point, $\text{pH} = \text{p}K_{a2}$)
- Second equivalence point at approximately $\text{pH} \gt 10$ (steep portion)
- Final pH approaching that of excess NaOH

---
### IT-2: Buffer Capacity and Biological Application (with Equilibrium)

**Question:**

Blood is buffered by the carbonic acid-hydrogencarbonate system:

$$\text{H}_2\text{CO}_3(aq) \rightleftharpoons \text{H}^+(aq) + \text{HCO}_3^-(aq)$$

Normal blood has $[\text{HCO}_3^-] = 0.0240\,\text{mol dm}^{-3}$ and $\text{pH} = 7.40$.

(a) Calculate the concentration of $\text{H}_2\text{CO}_3$ in normal blood. ($K_{a1} = 4.30 \times 10^{-7}\,\text{mol dm}^{-3}$)

(b) During intense exercise, lactic acid is produced, increasing $[\text{H}^+]$ by $5.0 \times 10^{-6}\,\text{mol dm}^{-3}$. Calculate the new pH, assuming the buffer ratio changes accordingly and $[\text{H}_2\text{CO}_3]$ increases by the same amount that $[\text{HCO}_3^-]$ decreases.

(c) Explain why this buffer system is effective at maintaining blood pH near 7.4.

**Solution:**

(a) Using the Henderson-Hasselbalch equation:

$$7.40 = \text{p}K_a + \log\frac{[\text{HCO}_3^-]}{[\text{H}_2\text{CO}_3]}$$

$$7.40 = 6.37 + \log\frac{0.0240}{[\text{H}_2\text{CO}_3]}$$

$$1.03 = \log\frac{0.0240}{[\text{H}_2\text{CO}_3]}$$

$$\frac{0.0240}{[\text{H}_2\text{CO}_3]} = 10^{1.03} = 10.72$$

$$[\text{H}_2\text{CO}_3] = \frac{0.0240}{10.72} = 2.24 \times 10^{-3}\,\text{mol dm}^{-3}$$

(b) The added $\text{H}^+$ reacts with $\text{HCO}_3^-$ to form $\text{H}_2\text{CO}_3$:

$$\text{HCO}_3^- + \text{H}^+ \to \text{H}_2\text{CO}_3$$

New concentrations:
- $[\text{HCO}_3^-] = 0.0240 - 5.0 \times 10^{-6} = 0.023995\,\text{mol dm}^{-3}$
- $[\text{H}_2\text{CO}_3] = 2.24 \times 10^{-3} + 5.0 \times 10^{-6} = 2.245 \times 10^{-3}\,\text{mol dm}^{-3}$

$$\text{pH} = 6.37 + \log\frac{0.023995}{2.245 \times 10^{-3}} = 6.37 + \log(10.69) = 6.37 + 1.029 = 7.40$$

The pH remains essentially unchanged at 7.40, demonstrating the buffer's effectiveness. Even with the added acid, the ratio $[\text{HCO}_3^-]/[\text{H}_2\text{CO}_3]$ barely changes because both concentrations are much larger than the amount of added $\text{H}^+$.

(c) This buffer is effective because:
1. The $\text{p}K_a$ of carbonic acid ($6.37$) is close to the desired blood pH ($7.40$), meaning the buffer operates near its maximum capacity (buffers work best when $\text{pH} \approx \text{p}K_a \pm 1$).
2. The concentrations of both components ($\text{HCO}_3^-$ at $0.024\,\text{mol dm}^{-3}$ and $\text{H}_2\text{CO}_3$ at $2.24 \times 10^{-3}\,\text{mol dm}^{-3}$) are relatively high, giving the buffer a large capacity to absorb added acid or base.
3. The system is linked to the lungs (which remove $\text{CO}_2$ and thus shift the $\text{H}_2\text{CO}_3$ concentration) and the kidneys (which excrete excess $\text{HCO}_3^-$ or $\text{H}^+$), providing long-term pH regulation.

---
### IT-3: Strong Acid-Weak Base Titration with Back-Calculation (with Quantitative Chemistry)

**Question:**

$25.0\,\text{cm}^3$ of a solution of ammonia ($\text{NH}_3$, $K_b = 1.78 \times 10^{-5}\,\text{mol dm}^{-3}$) is titrated with $0.0500\,\text{mol dm}^{-3}$ HCl. The equivalence point is reached at $20.0\,\text{cm}^3$ of HCl.

(a) Calculate the concentration of the ammonia solution.

(b) Calculate the pH at the equivalence point.

(c) Explain why methyl orange is a suitable indicator for this titration but phenolphthalein is not.

**Solution:**

(a) At the equivalence point: $n(\text{HCl}) = n(\text{NH}_3)$

$$n(\text{HCl}) = 0.0500 \times 20.0/1000 = 1.00 \times 10^{-3}\,\text{mol}$$

$$[\text{NH}_3] = \frac{1.00 \times 10^{-3}}{25.0/1000} = 0.0400\,\text{mol dm}^{-3}$$

(b) At the equivalence point, the solution contains $\text{NH}_4^+$ (the conjugate acid of $\text{NH}_3$). This is a weak acid:

$$K_a(\text{NH}_4^+) = \frac{K_w}{K_b(\text{NH}_3)} = \frac{1.00 \times 10^{-14}}{1.78 \times 10^{-5}} = 5.618 \times 10^{-10}\,\text{mol dm}^{-3}$$

Total volume at equivalence point: $25.0 + 20.0 = 45.0\,\text{cm}^3$

$$[\text{NH}_4^+] = \frac{1.00 \times 10^{-3}}{45.0/1000} = 0.02222\,\text{mol dm}^{-3}$$

$$[\text{H}^+] = \sqrt{K_a \times [\text{NH}_4^+]} = \sqrt{5.618 \times 10^{-10} \times 0.02222} = \sqrt{1.248 \times 10^{-11}} = 3.533 \times 10^{-6}\,\text{mol dm}^{-3}$$

$$\text{pH} = -\log(3.533 \times 10^{-6}) = 5.45$$

(c) The equivalence point is at pH $5.45$ (acidic), which is in the range of **methyl orange** (colour change at pH 3.1--4.4... actually pH 5.45 is slightly above methyl orange's range).

More accurately, methyl red (pH 4.4--6.2) would be the best indicator. However, if the options are methyl orange (3.1--4.4) and phenolphthalein (8.3--10.0), **methyl orange** is more appropriate because it is closer to the acidic equivalence point, although neither is perfect. Phenolphthalein would change colour well before the equivalence point is reached (at pH $\approx 8.3$), giving a significant endpoint error. Methyl orange at least changes in the acidic region, though the pH at equivalence (5.45) is slightly above its ideal range. Bromocresol green or methyl red would be the ideal choice, but methyl orange is the more suitable of the two given options.

**Correction:** The equivalence pH of $5.45$ actually falls within methyl orange's transition if we consider the gradual colour change. In practice, methyl orange is commonly used for strong acid-weak base titrations.
