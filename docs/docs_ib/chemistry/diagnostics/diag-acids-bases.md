---
title: Acids and Bases -- Diagnostic Tests
description: "Diagnostic tests for IB Chemistry acids and bases: pH calculations, buffer mechanisms, Ka/Kb, weak acid equilibrium, and titration curves."
slug: diag-acids-bases
hide_table_of_contents: true
---

# Acids and Bases — Diagnostic Tests

## Unit Tests

### UT-1: Weak Acid pH and Percentage Ionisation
**Question:** Ethanoic acid has $K_a = 1.74 \times 10^{-5}\ \text{mol dm}^{-3}$ at $25\ ^\circ\text{C}$. Calculate the pH of a $0.150\ \text{mol dm}^{-3}$ solution and the percentage ionisation. State the approximation used and verify it is valid.

**Solution:** $\text{CH}_3\text{COOH} \rightleftharpoons \text{CH}_3\text{COO}^- + \text{H}^+$

$K_a = \frac{[\text{CH}_3\text{COO}^-][\text{H}^+]}{[\text{CH}_3\text{COOH}]}$

Let $x = [\text{H}^+] = [\text{CH}_3\text{COO}^-]$. Then $[\text{CH}_3\text{COOH}] \approx 0.150 - x$.

Approximation: since $K_a$ is very small, $x \ll 0.150$, so $0.150 - x \approx 0.150$.

$1.74 \times 10^{-5} = \frac{x^2}{0.150}$

$x^2 = 2.61 \times 10^{-6}$

$x = 1.616 \times 10^{-3}\ \text{mol dm}^{-3}$

$\text{pH} = -\log_{10}(1.616 \times 10^{-3}) = 2.79$

Verification: $x/0.150 = 0.0108 = 1.08\% \lt 5\%$. The approximation is valid.

Percentage ionisation: $\frac{1.616 \times 10^{-3}}{0.150} \times 100 = 1.08\%$.

---
### UT-2: Buffer Solution pH Calculation
**Question:** A buffer is prepared by adding $0.100\ \text{mol}$ of sodium ethanoate to $100\ \text{cm}^3$ of $1.00\ \text{mol dm}^{-3}$ ethanoic acid ($K_a = 1.74 \times 10^{-5}$). Calculate the pH of the buffer. Then calculate the change in pH when $5.00\ \text{cm}^3$ of $2.00\ \text{mol dm}^{-3}$ HCl is added to $50.0\ \text{cm}^3$ of this buffer.

**Solution:**

Buffer pH using Henderson-Hasselbalch:

Moles of $\text{CH}_3\text{COOH}$: $1.00 \times 0.100 = 0.100\ \text{mol}$
Moles of $\text{CH}_3\text{COO}^-$: $0.100\ \text{mol}$

$\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]} = -\log(1.74 \times 10^{-5}) + \log\frac{0.100}{0.100} = 4.76 + 0 = 4.76$

Adding HCl to $50.0\ \text{cm}^3$ of buffer:

Moles $\text{CH}_3\text{COOH}$ in $50\ \text{cm}^3$: $0.100 \times \frac{50}{100} = 0.0500\ \text{mol}$
Moles $\text{CH}_3\text{COO}^-$ in $50\ \text{cm}^3$: $0.100 \times \frac{50}{100} = 0.0500\ \text{mol}$
Moles HCl added: $2.00 \times 0.00500 = 0.0100\ \text{mol}$

HCl reacts with $\text{CH}_3\text{COO}^-$: $\text{CH}_3\text{COO}^- + \text{H}^+ \to \text{CH}_3\text{COOH}$

New moles: $\text{CH}_3\text{COOH} = 0.0500 + 0.0100 = 0.0600\ \text{mol}$, $\text{CH}_3\text{COO}^- = 0.0500 - 0.0100 = 0.0400\ \text{mol}$.

$\text{pH} = 4.76 + \log\frac{0.0400}{0.0600} = 4.76 + \log(0.667) = 4.76 - 0.176 = 4.58$

pH change: $4.76 - 4.58 = 0.18$. The buffer resists the pH change effectively.

---
### UT-3: Salt Hydrolysis pH
**Question:** Calculate the pH of a $0.0500\ \text{mol dm}^{-3}$ solution of ammonium chloride ($\text{NH}_4\text{Cl}$). $K_b(\text{NH}_3) = 1.78 \times 10^{-5}$.

**Solution:** $\text{NH}_4^+$ is the conjugate acid of $\text{NH}_3$. It hydrolyses in water:

$\text{NH}_4^+ + \text{H}_2\text{O} \rightleftharpoons \text{NH}_3 + \text{H}_3\text{O}^+$

$K_a(\text{NH}_4^+) = \frac{K_w}{K_b(\text{NH}_3)} = \frac{1.00 \times 10^{-14}}{1.78 \times 10^{-5}} = 5.62 \times 10^{-10}$

$K_a = \frac{[\text{NH}_3][\text{H}^+]}{[\text{NH}_4^+]} = \frac{x^2}{0.0500}$

$x^2 = 5.62 \times 10^{-10} \times 0.0500 = 2.81 \times 10^{-11}$

$x = 5.30 \times 10^{-6}\ \text{mol dm}^{-3}$

$\text{pH} = -\log(5.30 \times 10^{-6}) = 5.28$

The solution is acidic, as expected for a salt of a weak base and a strong acid.

## Integration Tests

### IT-1: Titration Curve Analysis (with Measurement and Data Processing)
**Question:** $25.0\ \text{cm}^3$ of $0.100\ \text{mol dm}^{-3}$ ethanoic acid ($K_a = 1.74 \times 10^{-5}$) is titrated with $0.100\ \text{mol dm}^{-3}$ NaOH. Calculate: (a) the initial pH, (b) the pH at the half-equivalence point, (c) the pH at the equivalence point, (d) the volume of NaOH at the equivalence point. Identify a suitable indicator.

**Solution:**

(a) Initial pH: $[\text{H}^+] = \sqrt{K_a \times c} = \sqrt{1.74 \times 10^{-5} \times 0.100} = 1.32 \times 10^{-3}$. $\text{pH} = 2.88$.

(b) At half-equivalence, $[\text{HA}] = [\text{A}^-]$, so $\text{pH} = \text{p}K_a = 4.76$.

(c) At equivalence, all $\text{CH}_3\text{COOH}$ has been converted to $\text{CH}_3\text{COO}^-$. The concentration of $\text{CH}_3\text{COO}^-$ is:

Total volume $= 25.0 + 25.0 = 50.0\ \text{cm}^3$. $[\text{CH}_3\text{COO}^-] = \frac{0.100 \times 25.0}{50.0} = 0.0500\ \text{mol dm}^{-3}$.

$K_b = \frac{K_w}{K_a} = \frac{1.00 \times 10^{-14}}{1.74 \times 10^{-5}} = 5.75 \times 10^{-10}$.

$[\text{OH}^-] = \sqrt{K_b \times 0.0500} = \sqrt{2.875 \times 10^{-11}} = 5.36 \times 10^{-6}$.

$\text{pOH} = 5.27$, $\text{pH} = 14.00 - 5.27 = 8.73$.

(d) Volume: $\frac{0.100 \times 25.0}{0.100} = 25.0\ \text{cm}^3$.

Suitable indicator: phenolphthalein (pH range $8.2$--$10.0$), since the equivalence pH (8.73) falls within this range.

---
### IT-2: Polyprotic Acid and Equilibrium (with Equilibrium)
**Question:** Carbonic acid ($\text{H}_2\text{CO}_3$) is a diprotic acid with $K_{a1} = 4.3 \times 10^{-7}$ and $K_{a2} = 4.8 \times 10^{-11}$. Calculate the pH of a $0.0200\ \text{mol dm}^{-3}$ solution. Justify why you can ignore the second dissociation.

**Solution:** First dissociation: $\text{H}_2\text{CO}_3 \rightleftharpoons \text{H}^+ + \text{HCO}_3^-$

$K_{a1} = \frac{[\text{H}^+][\text{HCO}_3^-]}{[\text{H}_2\text{CO}_3]} = \frac{x^2}{0.0200} = 4.3 \times 10^{-7}$

$x^2 = 8.6 \times 10^{-9}$

$x = 9.27 \times 10^{-5}\ \text{mol dm}^{-3}$

$\text{pH} = -\log(9.27 \times 10^{-5}) = 4.03$

Justification for ignoring second dissociation: $K_{a2} \ll K_{a1}$ (ratio $\approx 10^{-4}$). The second dissociation ($\text{HCO}_3^- \rightleftharpoons \text{H}^+ + \text{CO}_3^{2-}$) produces a negligible additional $[\text{H}^+]$ compared to the first. The additional $[\text{H}^+]$ from the second step would be approximately $K_{a2} \approx 4.8 \times 10^{-11}$, which is orders of magnitude smaller than $9.27 \times 10^{-5}$. The second dissociation contributes less than $0.00005\%$ of the total $[\text{H}^+]$.

Verification of approximation: $x/0.0200 = 0.46\% \lt 5\%$. Valid.

---
### IT-3: Buffer Capacity and Stoichiometry (with Stoichiometry)
**Question:** A student prepares a buffer by mixing $50.0\ \text{cm}^3$ of $0.200\ \text{mol dm}^{-3}$ $\text{NaOH}$ with $75.0\ \text{cm}^3$ of $0.200\ \text{mol dm}^{-3}$ ethanoic acid ($K_a = 1.74 \times 10^{-5}$). Calculate the pH. Then determine the maximum volume of $0.500\ \text{mol dm}^{-3}$ HCl that can be added to $40.0\ \text{cm}^3$ of this buffer before the pH drops below 4.00.

**Solution:**

Moles $\text{NaOH} = 0.200 \times 0.0500 = 0.0100\ \text{mol}$
Moles $\text{CH}_3\text{COOH} = 0.200 \times 0.0750 = 0.0150\ \text{mol}$

$\text{NaOH}$ neutralises some $\text{CH}_3\text{COOH}$:

$\text{CH}_3\text{COOH}$ remaining: $0.0150 - 0.0100 = 0.00500\ \text{mol}$
$\text{CH}_3\text{COO}^-$ formed: $0.0100\ \text{mol}$

$\text{pH} = 4.76 + \log\frac{0.0100}{0.00500} = 4.76 + 0.301 = 5.06$

For the buffer capacity question, in $40.0\ \text{cm}^3$:

Moles $\text{CH}_3\text{COOH} = 0.00500 \times \frac{40}{125} = 0.00160\ \text{mol}$
Moles $\text{CH}_3\text{COO}^- = 0.0100 \times \frac{40}{125} = 0.00320\ \text{mol}$

After adding $v\ \text{cm}^3$ of HCl ($0.500\ \text{mol dm}^{-3}$): moles HCl $= 0.500v/1000 = 5.00 \times 10^{-4}v$

$\text{CH}_3\text{COOH}_{\text{new}} = 0.00160 + 5.00 \times 10^{-4}v$
$\text{CH}_3\text{COO}^-_{\text{new}} = 0.00320 - 5.00 \times 10^{-4}v$

$\text{pH} = 4.76 + \log\frac{0.00320 - 5.00 \times 10^{-4}v}{0.00160 + 5.00 \times 10^{-4}v} = 4.00$

$4.00 - 4.76 = \log\frac{0.00320 - 5.00 \times 10^{-4}v}{0.00160 + 5.00 \times 10^{-4}v}$

$10^{-0.76} = 0.174 = \frac{0.00320 - 5.00 \times 10^{-4}v}{0.00160 + 5.00 \times 10^{-4}v}$

$0.174(0.00160 + 5.00 \times 10^{-4}v) = 0.00320 - 5.00 \times 10^{-4}v$

$2.78 \times 10^{-4} + 8.70 \times 10^{-5}v = 0.00320 - 5.00 \times 10^{-4}v$

$5.87 \times 10^{-4}v = 2.92 \times 10^{-3}$

$v = 4.97\ \text{cm}^3$

Maximum volume of HCl: $4.97\ \text{cm}^3$.
