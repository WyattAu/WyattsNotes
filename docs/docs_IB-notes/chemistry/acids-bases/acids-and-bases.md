---
id: ib-chemistry-acids-and-bases
title: Acids and Bases
description:
  IB Chemistry notes covering Bronsted-Lowry theory, pH calculations, Ka/Kb, buffers, titrations,
  and indicators.
slug: acids-and-bases
date: 2026-04-08T00:00:00.000Z
tags: [IB, Chemistry]
categories: [IB, Chemistry]
---

## Bronsted-Lowry Theory

### Definitions

- **Acid:** A proton ($\text{H}^+$) donor.
- **Base:** A proton ($\text{H}^+$) acceptor.

### Conjugate Acid-Base Pairs

When an acid donates a proton, the remaining species is its **conjugate base**. When a base accepts
a proton, the resulting species is its **conjugate acid**.

$$
\text{HA} + \text{H}_2\text{O} \rightleftharpoons \text{H}_3\text{O}^+ + \text{A}^-
$$

| Left side     | Right side                  |
| ------------- | --------------------------- |
| HA (acid)     | A$^-$ (conjugate base)      |
| H$_2$O (base) | H$_3$O$^+$ (conjugate acid) |

**Key relationship:** The stronger the acid, the weaker its conjugate base, and vice versa.

### Strong vs Weak Acids and Bases

| Property                  | Strong Acid/Base                    | Weak Acid/Base                     |
| ------------------------- | ----------------------------------- | ---------------------------------- |
| Dissociation              | Complete (100%)                     | Partial (equilibrium)              |
| Equilibrium               | Lies far to the right               | Lies to the left                   |
| Conductivity              | High                                | Low                                |
| pH (same conc.)           | Lower (acid) / Higher (base)        | Less extreme                       |
| Reaction rate with metals | Faster                              | Slower                             |
| Examples (acids)          | HCl, HNO$_3$, H$_2$SO$_4$, HClO$_4$ | CH$_3$COOH, HF, HCN, H$_2$CO$_3$   |
| Examples (bases)          | NaOH, KOH, Ba(OH)$_2$               | NH$_3$, CH$_3$COO$^-$, CO$_3^{2-}$ |

:::warning[Exam Tip] H$_2$SO$_4$ is a diprotic acid. The first dissociation is complete (strong),
but the second dissociation is partial (weak):
$\text{HSO}_4^- \rightleftharpoons \text{H}^+ + \text{SO}_4^{2-}$ with
$K_a \approx 1.0 \times 10^{-2}$.
:::

---

## pH and pOH Scales

### Definitions

$$
\text{pH} = -\log[\text{H}^+]
$$

$$
\text{pOH} = -\log[\text{OH}^-]
$$

### Relationship

At $25\degree\text{C}$:

$$
\text{pH} + \text{pOH} = 14
$$

$$
[\text{H}^+][\text{OH}^-] = K_w = 1.0 \times 10^{-14}
$$

### pH Scale

| pH  | Nature          | [H$^+$] (mol/L)       |
| --- | --------------- | --------------------- |
| 0   | Strongly acidic | $1.0 \times 10^0$     |
| 1   |                 | $1.0 \times 10^{-1}$  |
| 3   |                 | $1.0 \times 10^{-3}$  |
| 7   | Neutral         | $1.0 \times 10^{-7}$  |
| 11  |                 | $1.0 \times 10^{-11}$ |
| 14  | Strongly basic  | $1.0 \times 10^{-14}$ |

<details>
<summary>Worked Example 1: pH of a Strong Acid</summary>

Calculate the pH of $0.050\text{ mol/L}$ HCl.

HCl is a strong acid and dissociates completely:

$$
[\text{H}^+] = 0.050\text{ mol/L}
$$

$$
\text{pH} = -\log(0.050) = -\log(5.0 \times 10^{-2}) = 2 - \log 5.0 = 2 - 0.699 = 1.30
$$

</details>

<details>
<summary>Worked Example 2: pH of a Strong Base</summary>

Calculate the pH of $0.020\text{ mol/L}$ NaOH at $25\degree\text{C}$.

NaOH is a strong base:

$$
[\text{OH}^-] = 0.020\text{ mol/L}
$$

$$
\text{pOH} = -\log(0.020) = -\log(2.0 \times 10^{-2}) = 2 - \log 2.0 = 2 - 0.301 = 1.70
$$

$$
\text{pH} = 14 - 1.70 = 12.30
$$

</details>

<details>
<summary>Worked Example 3: pH of a Diprotic Strong Acid</summary>

Calculate the pH of $0.010\text{ mol/L}$ H$_2$SO$_4$.

Since the first dissociation of H$_2$SO$_4$ is complete:

$$
\text{H}_2\text{SO}_4 \to \text{H}^+ + \text{HSO}_4^-
$$

Each mole of H$_2$SO$_4$ gives 1 mole of H$^+$ from the first dissociation. At this concentration,
the second dissociation contributes additional H$^+$, but for most IB exam questions, it is
acceptable to consider only the first dissociation unless told otherwise:

$$
[\text{H}^+] \approx 0.010\text{ mol/L}
$$

$$
\text{pH} = -\log(0.010) = 2.00
$$

If the second dissociation is considered (with $K_{a2} = 1.0 \times 10^{-2}$):

Let $x$ be the additional [$\text{H}^+$] from the second dissociation:

$$
K_{a2} = \frac{[\text{H}^+][\text{SO}_4^{2-}]}{[\text{HSO}_4^-]} = \frac{(0.010 + x)(x)}{0.010 - x} = 1.0 \times 10^{-2}
$$

This gives $x \approx 0.0045$, so $[\text{H}^+] \approx 0.0145$ and $\text{pH} \approx 1.84$.

</details>

---

## Ka and Kb Expressions

### Acid Dissociation Constant

For a weak acid $\text{HA}$:

$$
\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^-
$$

$$
K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]}
$$

### Base Dissociation Constant

For a weak base $\text{B}$:

$$
\text{B} + \text{H}_2\text{O} \rightleftharpoons \text{BH}^+ + \text{OH}^-
$$

$$
K_b = \frac{[\text{BH}^+][\text{OH}^-]}{[\text{B}]}
$$

### Relationship Between Ka and Kb

For a conjugate acid-base pair:

$$
K_a \times K_b = K_w = 1.0 \times 10^{-14}
$$

$$
\text{p}K_a + \text{p}K_b = 14
$$

where $\text{p}K_a = -\log K_a$.

### Common Ka Values at $25\degree\text{C}$

| Acid           | Ka                    | pKa  |
| -------------- | --------------------- | ---- |
| CH$_3$COOH     | $1.8 \times 10^{-5}$  | 4.74 |
| HCOOH (formic) | $1.8 \times 10^{-4}$  | 3.74 |
| HCN            | $6.2 \times 10^{-10}$ | 9.21 |
| HF             | $6.8 \times 10^{-4}$  | 3.17 |
| HNO$_2$        | $4.5 \times 10^{-4}$  | 3.35 |
| NH$_4^+$       | $5.6 \times 10^{-10}$ | 9.25 |

<details>
<summary>Worked Example 4: pH of a Weak Acid</summary>

Calculate the pH of $0.100\text{ mol/L}$ CH$_3$COOH ($K_a = 1.8 \times 10^{-5}$).

$$
\text{CH}_3\text{COOH} \rightleftharpoons \text{H}^+ + \text{CH}_3\text{COO}^-
$$

ICE table (initial, change, equilibrium):

| Species       | [Initial] | Change | [Equilibrium] |
| ------------- | --------- | ------ | ------------- |
| CH$_3$COOH    | 0.100     | $-x$   | $0.100 - x$   |
| H$^+$         | 0         | $+x$   | $x$           |
| CH$_3$COO$^-$ | 0         | $+x$   | $x$           |

$$
K_a = \frac{x^2}{0.100 - x} = 1.8 \times 10^{-5}
$$

Check the $5\%$ rule:
$\frac{K_a}{c} = \frac{1.8 \times 10^{-5}}{0.100} = 1.8 \times 10^{-4} \lt 0.05$. The approximation
$0.100 - x \approx 0.100$ is valid.

$$
x^2 = 1.8 \times 10^{-6}
$$

$$
x = \sqrt{1.8 \times 10^{-6}} = 1.34 \times 10^{-3}\text{ mol/L}
$$

$$
\text{pH} = -\log(1.34 \times 10^{-3}) = 2.87
$$

</details>

<details>
<summary>Worked Example 5: pH of a Weak Base</summary>

Calculate the pH of $0.150\text{ mol/L}$ NH$_3$ ($K_b = 1.8 \times 10^{-5}$) at $25\degree\text{C}$.

$$
\text{NH}_3 + \text{H}_2\text{O} \rightleftharpoons \text{NH}_4^+ + \text{OH}^-
$$

| Species  | [Initial] | Change | [Equilibrium] |
| -------- | --------- | ------ | ------------- |
| NH$_3$   | 0.150     | $-x$   | $0.150 - x$   |
| NH$_4^+$ | 0         | $+x$   | $x$           |
| OH$^-$   | 0         | $+x$   | $x$           |

$$
K_b = \frac{x^2}{0.150 - x} = 1.8 \times 10^{-5}
$$

Approximation valid: $\frac{K_b}{c} = 1.2 \times 10^{-4} \lt 0.05$.

$$
x^2 = 0.150 \times 1.8 \times 10^{-5} = 2.7 \times 10^{-6}
$$

$$
x = \sqrt{2.7 \times 10^{-6}} = 1.64 \times 10^{-3}\text{ mol/L} = [\text{OH}^-]
$$

$$
\text{pOH} = -\log(1.64 \times 10^{-3}) = 2.78
$$

$$
\text{pH} = 14 - 2.78 = 11.22
$$

</details>

---

## Kw (Ionic Product of Water)

Water undergoes autoionisation:

$$
\text{H}_2\text{O}(l) \rightleftharpoons \text{H}^+(aq) + \text{OH}^-(aq)
$$

$$
K_w = [\text{H}^+][\text{OH}^-]
$$

At $25\degree\text{C}$: $K_w = 1.0 \times 10^{-14}$ (mol$^2$/L$^2$).

$K_w$ is **temperature dependent**:

| Temperature ($\degree$C) | $K_w$                  |
| ------------------------ | ---------------------- |
| 0                        | $1.14 \times 10^{-15}$ |
| 25                       | $1.00 \times 10^{-14}$ |
| 50                       | $5.48 \times 10^{-14}$ |
| 100                      | $5.13 \times 10^{-13}$ |

:::warning[Exam Tip] At $50\degree\text{C}$, pure water has $\text{pH} = 6.63$ (not 7). This is
because $K_w$ is larger, so $[\text{H}^+] = [\text{OH}^-] = \sqrt{K_w} \gt 10^{-7}$. The water is
still **neutral** because $[\text{H}^+] = [\text{OH}^-]$. Neutral does not always mean pH = 7; it
depends on temperature.
:::

---

## Polyprotic Acids

A polyprotic acid can donate more than one proton. Each dissociation has its own $K_a$ value.

**Carbonic acid (H$_2$CO$_3$):**

$$
\text{H}_2\text{CO}_3 \rightleftharpoons \text{H}^+ + \text{HCO}_3^- \quad K_{a1} = 4.3 \times 10^{-7}
$$

$$
\text{HCO}_3^- \rightleftharpoons \text{H}^+ + \text{CO}_3^{2-} \quad K_{a2} = 4.8 \times 10^{-11}
$$

**Phosphoric acid (H$_3$PO$_4$):**

$$
\text{H}_3\text{PO}_4 \rightleftharpoons \text{H}^+ + \text{H}_2\text{PO}_4^- \quad K_{a1} = 7.5 \times 10^{-3}
$$

$$
\text{H}_2\text{PO}_4^- \rightleftharpoons \text{H}^+ + \text{HPO}_4^{2-} \quad K_{a2} = 6.2 \times 10^{-8}
$$

$$
\text{HPO}_4^{2-} \rightleftharpoons \text{H}^+ + \text{PO}_4^{3-} \quad K_{a3} = 4.2 \times 10^{-13}
$$

**General rule:** $K_{a1} \gg K_{a2} \gg K_{a3}$. Each successive proton is harder to remove because
removing a proton from an increasingly negative ion requires more energy.

---

## Indicators

### Common Acid-Base Indicators

| Indicator           | Colour (Acid) | Transition pH Range | Colour (Base)  |
| ------------------- | ------------- | ------------------- | -------------- |
| Methyl orange       | Red           | 3.1 -- 4.4          | Yellow         |
| Bromothymol blue    | Yellow        | 6.0 -- 7.6          | Blue           |
| Phenolphthalein     | Colourless    | 8.3 -- 10.0         | Pink/Magenta   |
| Universal indicator | Red (pH 1)    | Full range 1--14    | Violet (pH 14) |

### How Indicators Work

Indicators are weak organic acids (HIn) where the acid form and conjugate base form have different
colours:

$$
\text{HIn} \rightleftharpoons \text{H}^+ + \text{In}^-
$$

The colour observed depends on the ratio $[\text{HIn}]/[\text{In}^-]$, which depends on [H$^+$]
(pH).

### Choosing an Indicator for a Titration

An indicator is suitable when its transition range overlaps with the **equivalence point** of the
titration (where pH changes most steeply).

| Titration Type             | Equivalence Point pH | Suitable Indicator                               |
| -------------------------- | -------------------- | ------------------------------------------------ |
| Strong acid -- strong base | pH = 7               | Bromothymol blue, phenolphthalein, methyl orange |
| Weak acid -- strong base   | pH \gt 7             | Phenolphthalein                                  |
| Strong acid -- weak base   | pH \lt 7             | Methyl orange                                    |

---

## pH Curves for Titrations

### Strong Acid -- Strong Base

Example: HCl + NaOH

- Initial pH: low (strong acid).
- pH rises slowly, then **sharply** near the equivalence point (pH = 7).
- Beyond equivalence point: pH approaches 14 (excess strong base).

### Weak Acid -- Strong Base

Example: CH$_3$COOH + NaOH

- Initial pH: higher than strong acid at same concentration (partial dissociation).
- Buffer region: gradual pH rise before the equivalence point.
- Equivalence point: pH \gt 7 (conjugate base of weak acid hydrolyses).
- Suitable indicator: phenolphthalein.

### Strong Acid -- Weak Base

Example: HCl + NH$_3$

- Initial pH: low (strong acid).
- Equivalence point: pH \lt 7 (conjugate acid of weak base hydrolyses).
- Suitable indicator: methyl orange.

### Key Features of pH Curves

- **Equivalence point:** The volume where stoichiometrically equivalent amounts of acid and base
  have reacted. The pH at this point depends on the salt formed.
- **Half-equivalence point:** The volume where half the acid/base has been neutralised. At this
  point, $\text{pH} = \text{p}K_a$ (for weak acid titrations), because $[\text{HA}] = [\text{A}^-]$.

---

## Buffer Solutions

### Composition

A buffer solution **resists changes in pH** when small amounts of acid or base are added. It
consists of:

1. A weak acid and its conjugate base, **or**
2. A weak base and its conjugate acid.

**Examples:**

- CH$_3$COOH / CH$_3$COONa$^-$ (acetic acid / acetate)
- NH$_3$ / NH$_4$Cl (ammonia / ammonium)
- H$_2$CO$_3$ / HCO$_3^-$ (carbonic acid / bicarbonate -- the blood buffer system)

### Mechanism

**Adding acid (H$^+$):** The conjugate base (A$^-$) reacts with the added H$^+$:

$$
\text{A}^- + \text{H}^+ \to \text{HA}
$$

**Adding base (OH$^-$):** The weak acid (HA) reacts with the added OH$^-$:

$$
\text{HA} + \text{OH}^- \to \text{A}^- + \text{H}_2\text{O}
$$

In both cases, the ratio $[\text{HA}]/[\text{A}^-]$ changes only slightly, so pH remains nearly
constant.

### Henderson-Hasselbalch Equation

$$
\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}
$$

or equivalently:

$$
\text{pH} = \text{p}K_a + \log\frac{[\text{base}]}{[\text{acid}]}
$$

### Buffer Capacity

Buffer capacity is the amount of acid or base that can be added before the pH changes significantly.
A buffer is most effective when:

- The concentrations of the weak acid and conjugate base are **large** (more moles available to
  react).
- The ratio $[\text{A}^-]/[\text{HA}]$ is **close to 1** (i.e., pH is close to p$K_a$).

The effective buffer range is approximately $\text{p}K_a \pm 1$.

<details>
<summary>Worked Example 6: Buffer pH Calculation</summary>

Calculate the pH of a buffer solution containing $0.200\text{ mol/L}$ CH$_3$COOH and
$0.150\text{ mol/L}$ CH$_3$COONa. ($K_a = 1.8 \times 10^{-5}$, p$K_a = 4.74$)

Using the Henderson-Hasselbalch equation:

$$
\text{pH} = 4.74 + \log\frac{0.150}{0.200}
$$

$$
\text{pH} = 4.74 + \log(0.750)
$$

$$
\text{pH} = 4.74 + (-0.125) = 4.62
$$

</details>

<details>
<summary>Worked Example 7: pH Change When Adding Acid to a Buffer</summary>

To $500\text{ mL}$ of the buffer from Worked Example 6, $0.010\text{ mol}$ of HCl is added.
Calculate the new pH.

Initial moles:

- $n(\text{CH}_3\text{COOH}) = 0.200 \times 0.500 = 0.100\text{ mol}$
- $n(\text{CH}_3\text{COO}^-) = 0.150 \times 0.500 = 0.075\text{ mol}$

Adding $0.010\text{ mol}$ HCl:

- HCl reacts with CH$_3$COO$^-$: $\text{CH}_3\text{COO}^- + \text{H}^+ \to \text{CH}_3\text{COOH}$
- $n(\text{CH}_3\text{COO}^-) = 0.075 - 0.010 = 0.065\text{ mol}$
- $n(\text{CH}_3\text{COOH}) = 0.100 + 0.010 = 0.110\text{ mol}$

$$
\text{pH} = 4.74 + \log\frac{0.065}{0.110}
$$

$$
\text{pH} = 4.74 + \log(0.591) = 4.74 + (-0.228) = 4.51
$$

The pH changed from 4.62 to 4.51, a change of only 0.11 units, demonstrating the buffer's
effectiveness.

</details>

<details>
<summary>Worked Example 8: Preparing a Buffer</summary>

What mass of sodium acetate (CH$_3$COONa, $M_r = 82.0\text{ g/mol}$) must be added to
$1.00\text{ L}$ of $0.100\text{ mol/L}$ CH$_3$COOH to produce a buffer with pH = 5.00?
($K_a = 1.8 \times 10^{-5}$)

Using the Henderson-Hasselbalch equation:

$$
5.00 = 4.74 + \log\frac{[\text{CH}_3\text{COO}^-]}{0.100}
$$

$$
\log\frac{[\text{CH}_3\text{COO}^-]}{0.100} = 0.26
$$

$$
\frac{[\text{CH}_3\text{COO}^-]}{0.100} = 10^{0.26} = 1.82
$$

$$
[\text{CH}_3\text{COO}^-] = 0.182\text{ mol/L}
$$

In $1.00\text{ L}$:

$$
n(\text{CH}_3\text{COONa}) = 0.182\text{ mol}
$$

$$
m = n \times M_r = 0.182 \times 82.0 = 14.9\text{ g}
$$

</details>

---

## Acid-Base Titrations

### Titration Calculations

At the equivalence point, moles of acid = moles of base.

**Strong acid -- strong base:**

$$
\text{H}^+ + \text{OH}^- \to \text{H}_2\text{O}
$$

pH at equivalence point = 7 (neutral salt).

**Weak acid -- strong base:**

$$
\text{HA} + \text{OH}^- \to \text{A}^- + \text{H}_2\text{O}
$$

The conjugate base A$^-$ hydrolyses:

$$
\text{A}^- + \text{H}_2\text{O} \rightleftharpoons \text{HA} + \text{OH}^-
$$

pH at equivalence point \gt 7.

**Strong acid -- weak base:**

$$
\text{H}^+ + \text{B} \to \text{BH}^+
$$

The conjugate acid BH$^+$ hydrolyses:

$$
\text{BH}^+ + \text{H}_2\text{O} \rightleftharpoons \text{B} + \text{H}_3\text{O}^+
$$

pH at equivalence point \lt 7.

<details>
<summary>Worked Example 9: Titration of Weak Acid with Strong Base</summary>

$25.0\text{ mL}$ of $0.100\text{ mol/L}$ CH$_3$COOH ($K_a = 1.8 \times 10^{-5}$) is titrated with
$0.100\text{ mol/L}$ NaOH. Calculate the pH at the equivalence point.

At the equivalence point, moles of NaOH = moles of CH$_3$COOH:

$$
n = 0.100 \times 0.0250 = 0.00250\text{ mol}
$$

Volume of NaOH required:

$$
V = \frac{0.00250}{0.100} = 0.0250\text{ L} = 25.0\text{ mL}
$$

Total volume at equivalence point: $25.0 + 25.0 = 50.0\text{ mL} = 0.0500\text{ L}$.

All CH$_3$COOH has been converted to CH$_3$COO$^-$:

$$
[\text{CH}_3\text{COO}^-] = \frac{0.00250}{0.0500} = 0.0500\text{ mol/L}
$$

The acetate ion hydrolyses:

$$
K_b = \frac{K_w}{K_a} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}
$$

$$
[\text{OH}^-] = \sqrt{K_b \times [\text{CH}_3\text{COO}^-]} = \sqrt{5.56 \times 10^{-10} \times 0.0500}
$$

$$
[\text{OH}^-] = \sqrt{2.78 \times 10^{-11}} = 5.27 \times 10^{-6}\text{ mol/L}
$$

$$
\text{pOH} = -\log(5.27 \times 10^{-6}) = 5.28
$$

$$
\text{pH} = 14 - 5.28 = 8.72
$$

</details>

<details>
<summary>Worked Example 10: pH at Half-Equivalence Point</summary>

Using the titration from Worked Example 9, calculate the pH when $12.5\text{ mL}$ of NaOH has been
added (half-equivalence point).

At half-equivalence point, half the acid has been neutralised:

$$
n(\text{NaOH}) = 0.100 \times 0.0125 = 0.00125\text{ mol}
$$

Moles of CH$_3$COOH remaining: $0.00250 - 0.00125 = 0.00125\text{ mol}$

Moles of CH$_3$COO$^-$ formed: $0.00125\text{ mol}$

Since $[\text{HA}] = [\text{A}^-]$:

$$
\text{pH} = \text{p}K_a = -\log(1.8 \times 10^{-5}) = 4.74
$$

This is a general result: at the half-equivalence point, $\text{pH} = \text{p}K_a$.

</details>

---

## Common Pitfalls

1. **Strong vs weak acid pH:** A $0.10\text{ mol/L}$ strong acid has pH = 1.0, but a
   $0.10\text{ mol/L}$ weak acid has pH \gt 1.0 (typically 2--3) because it only partially
   dissociates. Do not assume $[\text{H}^+] = c$ for weak acids.

2. **Diprotic acid contribution:** H$_2$SO$_4$ gives 2 H$^+$ per molecule, but H$_2$CO$_3$ does not
   give 2 H$^+$ at normal concentrations because $K_{a2}$ is very small. Only the first dissociation
   contributes significantly.

3. **pH + pOH = 14 only at $25\degree\text{C}$:** At other temperatures, use the actual $K_w$ value.
   $\text{pH} + \text{pOH} = \text{p}K_w$.

4. **Buffer range:** A buffer is only effective within $\pm 1$ pH unit of its p$K_a$. Outside this
   range, the buffer capacity is essentially zero.

5. **Equivalence point pH:** For weak acid -- strong base titrations, the equivalence point pH is
   \gt 7, not 7. For strong acid -- weak base, it is \lt 7.

6. **Henderson-Hasselbalch validity:** The equation assumes that the concentrations of HA and A$^-$
   are much larger than $[\text{H}^+]$ and $[\text{OH}^-]$. It is not valid for very dilute
   solutions.

7. **Neutral pH:** Neutral means $[\text{H}^+] = [\text{OH}^-]$, which equals pH = 7 only at
   $25\degree\text{C}$. At $50\degree\text{C}$, neutral pH is approximately 6.63.

8. **$K_a$ and $K_b$ relationship:** Remember $K_a \times K_b = K_w$. This connects a conjugate
   acid-base pair. The conjugate base of a weak acid has a calculable $K_b$.

9. **Titration indicator choice:** Methyl orange (3.1--4.4) is suitable for strong acid -- weak base
   titrations (equivalence pH \lt 7). Phenolphthalein (8.3--10.0) is suitable for weak acid --
   strong base (equivalence pH \gt 7). Do not use methyl orange for weak acid -- strong base.

10. **Units in Ka/Kb:** Concentrations in $K_a$ and $K_b$ expressions are in mol/L. The units of
    $K_a$ and $K_b$ are mol/L. $K_w$ has units of mol$^2$/L$^2$.

---

## Practice Problems

<details>
<summary>Question 1: Strong Acid/Base pH</summary>

(a) Calculate the pH of $0.0030\text{ mol/L}$ HNO$_3$.

(b) Calculate the pH of $0.0025\text{ mol/L}$ Ca(OH)$_2$ at $25\degree\text{C}$.

(c) A solution has pH = 3.40. What is $[\text{H}^+]$?

Answer:

(a) HNO$_3$ is a strong monoprotic acid:

$$
[\text{H}^+] = 0.0030\text{ mol/L}
$$

$$
\text{pH} = -\log(3.0 \times 10^{-3}) = 3 - \log 3.0 = 3 - 0.477 = 2.52
$$

(b) Ca(OH)$_2$ is a strong base giving 2 OH$^-$ per formula unit:

$$
[\text{OH}^-] = 2 \times 0.0025 = 0.0050\text{ mol/L}
$$

$$
\text{pOH} = -\log(5.0 \times 10^{-3}) = 3 - \log 5.0 = 3 - 0.699 = 2.30
$$

$$
\text{pH} = 14 - 2.30 = 11.70
$$

(c)

$$
[\text{H}^+] = 10^{-\text{pH}} = 10^{-3.40} = 3.98 \times 10^{-4}\text{ mol/L}
$$

</details>

<details>
<summary>Question 2: Weak Acid pH and Degree of Dissociation</summary>

Hypochlorous acid (HOCl) has $K_a = 3.5 \times 10^{-8}$.

(a) Calculate the pH of $0.050\text{ mol/L}$ HOCl.

(b) Calculate the percentage dissociation of HOCl at this concentration.

Answer:

(a)

$$
\text{HOCl} \rightleftharpoons \text{H}^+ + \text{OCl}^-
$$

$$
K_a = \frac{x^2}{0.050} = 3.5 \times 10^{-8}
$$

$$
x^2 = 1.75 \times 10^{-9}
$$

$$
x = 4.18 \times 10^{-5}\text{ mol/L}
$$

$$
\text{pH} = -\log(4.18 \times 10^{-5}) = 4.38
$$

(b)

$$
\text{Percentage dissociation} = \frac{4.18 \times 10^{-5}}{0.050} \times 100\% = 0.084\%
$$

</details>

<details>
<summary>Question 3: Conjugate Pairs and Ka/Kb</summary>

(a) The $K_b$ of NH$_3$ is $1.8 \times 10^{-5}$. Calculate $K_a$ for NH$_4^+$.

(b) Is NH$_4^+$ acidic, basic, or neutral in aqueous solution? Explain.

Answer:

(a)

$$
K_a(\text{NH}_4^+) = \frac{K_w}{K_b(\text{NH}_3)} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}
$$

(b) NH$_4^+$ is the conjugate acid of the weak base NH$_3$. Since NH$_3$ is a weak base, its
conjugate acid NH$_4^+$ will donate protons in water, making the solution acidic. This is confirmed
by the relatively large $K_a$ value ($5.56 \times 10^{-10} \gg K_b$ of NH$_4^+$ which would be
$K_w/K_a = 1.8 \times 10^{-5}$, but wait -- we already have $K_a$ for NH$_4^+$, so we can see it is
an acid). A $0.1\text{ mol/L}$ NH$_4$Cl solution would have pH \lt 7.

</details>

<details>
<summary>Question 4: Buffer Preparation and pH Change</summary>

A buffer is prepared by mixing $0.150\text{ mol/L}$ HCOOH ($K_a = 1.8 \times 10^{-4}$,
p$K_a = 3.74$) with $0.100\text{ mol/L}$ HCOONa in equal volumes.

(a) Calculate the pH of the buffer.

(b) To $100\text{ mL}$ of this buffer, $5.0\text{ mL}$ of $0.100\text{ mol/L}$ NaOH is added.
Calculate the new pH.

Answer:

(a) Equal volumes of $0.150$ and $0.100\text{ mol/L}$ give concentrations of $0.0750$ and
$0.0500\text{ mol/L}$ respectively:

$$
\text{pH} = 3.74 + \log\frac{0.0500}{0.0750} = 3.74 + \log(0.667) = 3.74 + (-0.176) = 3.56
$$

(b) Moles in $100\text{ mL}$ of buffer:

- $n(\text{HCOOH}) = 0.0750 \times 0.100 = 0.00750\text{ mol}$
- $n(\text{HCOO}^-) = 0.0500 \times 0.100 = 0.00500\text{ mol}$

Moles of NaOH added: $n = 0.100 \times 0.0050 = 0.000500\text{ mol}$

After reaction:

- $n(\text{HCOOH}) = 0.00750 - 0.000500 = 0.00700\text{ mol}$
- $n(\text{HCOO}^-) = 0.00500 + 0.000500 = 0.00550\text{ mol}$

$$
\text{pH} = 3.74 + \log\frac{0.00550}{0.00700} = 3.74 + \log(0.786) = 3.74 + (-0.105) = 3.64
$$

</details>

<details>
<summary>Question 5: Titration Curve Analysis (Paper 2 Style)</summary>

$20.0\text{ mL}$ of $0.100\text{ mol/L}$ NH$_3$ ($K_b = 1.8 \times 10^{-5}$) is titrated with
$0.100\text{ mol/L}$ HCl.

(a) Calculate the pH at the equivalence point.

(b) State and explain which indicator would be most suitable for this titration.

(c) Calculate the pH when $10.0\text{ mL}$ of HCl has been added (half-equivalence point).

Answer:

(a) At equivalence point, moles of HCl = moles of NH$_3$:

$$
n = 0.100 \times 0.0200 = 0.00200\text{ mol}
$$

Volume of HCl: $V = 0.00200 / 0.100 = 0.0200\text{ L} = 20.0\text{ mL}$.

Total volume: $20.0 + 20.0 = 40.0\text{ mL} = 0.0400\text{ L}$.

All NH$_3$ is converted to NH$_4^+$:

$$
[\text{NH}_4^+] = \frac{0.00200}{0.0400} = 0.0500\text{ mol/L}
$$

$$
K_a(\text{NH}_4^+) = \frac{K_w}{K_b} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}
$$

$$
[\text{H}^+] = \sqrt{K_a \times [\text{NH}_4^+]} = \sqrt{5.56 \times 10^{-10} \times 0.0500}
$$

$$
[\text{H}^+] = \sqrt{2.78 \times 10^{-11}} = 5.27 \times 10^{-6}\text{ mol/L}
$$

$$
\text{pH} = -\log(5.27 \times 10^{-6}) = 5.28
$$

(b) The equivalence point pH is 5.28, which falls within the transition range of **methyl orange**
(3.1--4.4) only partially. A better choice would be **bromocresol green** (3.8--5.4) or **methyl
red** (4.4--6.2), which has a transition range that includes pH 5.28. From the common indicators
listed in the IB syllabus, methyl orange is the closest suitable indicator for a strong acid -- weak
base titration.

(c) At the half-equivalence point, $[\text{NH}_3] = [\text{NH}_4^+]$, so:

$$
\text{pH} = \text{p}K_a(\text{NH}_4^+) = 14 - \text{p}K_b = 14 - (-\log(1.8 \times 10^{-5}))
$$

$$
\text{pH} = 14 - 4.74 = 9.26
$$

</details>

<details>
<summary>Question 6: Polyprotic Acid (Paper 2 Style)</summary>

Calculate the pH of a $0.100\text{ mol/L}$ H$_3$PO$_4$ solution. Use the following data:
$K_{a1} = 7.5 \times 10^{-3}$, $K_{a2} = 6.2 \times 10^{-8}$, $K_{a3} = 4.2 \times 10^{-13}$.

Answer:

For the first dissociation:

$$
\text{H}_3\text{PO}_4 \rightleftharpoons \text{H}^+ + \text{H}_2\text{PO}_4^-
$$

Since $K_{a1}$ is not very small compared to $c$, the approximation $c - x \approx c$ may not be
valid. Check: $K_{a1}/c = 7.5 \times 10^{-3}/0.100 = 0.075 \gt 0.05$. The $5\%$ rule fails.

Solve the quadratic: $x^2 + K_a x - K_a \cdot c = 0$

$$
x^2 + 7.5 \times 10^{-3}x - 7.5 \times 10^{-4} = 0
$$

$$
x = \frac{-7.5 \times 10^{-3} + \sqrt{(7.5 \times 10^{-3})^2 + 4 \times 7.5 \times 10^{-4}}}{2}
$$

$$
x = \frac{-7.5 \times 10^{-3} + \sqrt{5.625 \times 10^{-5} + 3.0 \times 10^{-3}}}{2}
$$

$$
x = \frac{-7.5 \times 10^{-3} + \sqrt{3.056 \times 10^{-3}}}{2}
$$

$$
x = \frac{-7.5 \times 10^{-3} + 5.528 \times 10^{-2}}{2} = \frac{4.778 \times 10^{-2}}{2} = 2.389 \times 10^{-2}
$$

$$
[\text{H}^+] \approx 0.0239\text{ mol/L}
$$

$$
\text{pH} = -\log(0.0239) = 1.62
$$

Note: The second and third dissociations contribute negligible H$^+$ since $K_{a2} \ll K_{a1}$.

</details>
