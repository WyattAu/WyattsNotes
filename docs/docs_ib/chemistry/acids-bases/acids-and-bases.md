---
title: Acids and Bases
description: IB Chemistry notes covering Bronsted-Lowry theory, pH calculations, Ka/Kb,
  buffers, titrations, and indicators.
slug: acids-and-bases
tags:
- IB
- Chemistry
---


## Bronsted-Lowry Theory

### Definitions

- **Acid:** A proton ($\mathrm{H}^+$) donor.
- **Base:** A proton ($\mathrm{H}^+$) acceptor.

### Conjugate Acid-Base Pairs

When an acid donates a proton, the remaining species is its **conjugate base**. When a base accepts
a proton, the resulting species is its **conjugate acid**.

$$
\mathrm&lbrace;HA&rbrace; + \mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace; \rightleftharpoons \mathrm&lbrace;H&rbrace;_3\mathrm&lbrace;O&rbrace;^+ + \mathrm&lbrace;A&rbrace;^-
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
$\mathrm{HSO}_4^- \rightleftharpoons \mathrm{H}^+ + \mathrm{SO}_4^{2-}$ with
$K_a \approx 1.0 \times 10^{-2}$.
:::

---

## pH and pOH Scales

### Definitions

$$
\mathrm&lbrace;pH&rbrace; = -\log[\mathrm&lbrace;H&rbrace;^+]
$$

$$
\mathrm&lbrace;pOH&rbrace; = -\log[\mathrm&lbrace;OH&rbrace;^-]
$$

### Relationship

At $25\degree\mathrm{C}$:

$$
\mathrm&lbrace;pH&rbrace; + \mathrm&lbrace;pOH&rbrace; = 14
$$

$$
[\mathrm&lbrace;H&rbrace;^+][\mathrm&lbrace;OH&rbrace;^-] = K_w = 1.0 \times 10^&lbrace;-14&rbrace;
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

Calculate the pH of $0.050\mathrm{ mol/L}$ HCl.

HCl is a strong acid and dissociates completely:

$$
[\mathrm&lbrace;H&rbrace;^+] = 0.050\mathrm&lbrace; mol/L&rbrace;
$$

$$
\mathrm&lbrace;pH&rbrace; = -\log(0.050) = -\log(5.0 \times 10^&lbrace;-2&rbrace;) = 2 - \log 5.0 = 2 - 0.699 = 1.30
$$

</details>

<details>
<summary>Worked Example 2: pH of a Strong Base</summary>

Calculate the pH of $0.020\mathrm{ mol/L}$ NaOH at $25\degree\mathrm{C}$.

NaOH is a strong base:

$$
[\mathrm&lbrace;OH&rbrace;^-] = 0.020\mathrm&lbrace; mol/L&rbrace;
$$

$$
\mathrm&lbrace;pOH&rbrace; = -\log(0.020) = -\log(2.0 \times 10^&lbrace;-2&rbrace;) = 2 - \log 2.0 = 2 - 0.301 = 1.70
$$

$$
\mathrm&lbrace;pH&rbrace; = 14 - 1.70 = 12.30
$$

</details>

<details>
<summary>Worked Example 3: pH of a Diprotic Strong Acid</summary>

Calculate the pH of $0.010\mathrm{ mol/L}$ H$_2$SO$_4$.

Since the first dissociation of H$_2$SO$_4$ is complete:

$$
\mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;SO&rbrace;_4 \to \mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;HSO&rbrace;_4^-
$$

Each mole of H$_2$SO$_4$ gives 1 mole of H$^+$ from the first dissociation. At this concentration,
the second dissociation contributes additional H$^+$, but for most IB exam questions, it is
acceptable to consider only the first dissociation unless told otherwise:

$$
[\mathrm&lbrace;H&rbrace;^+] \approx 0.010\mathrm&lbrace; mol/L&rbrace;
$$

$$
\mathrm&lbrace;pH&rbrace; = -\log(0.010) = 2.00
$$

If the second dissociation is considered (with $K_{a2} = 1.0 \times 10^{-2}$):

Let $x$ be the additional [$\mathrm{H}^+$] from the second dissociation:

$$
K_&lbrace;a2&rbrace; = \frac&lbrace;[\mathrm&lbrace;H&rbrace;^+][\mathrm&lbrace;SO&rbrace;_4^&lbrace;2-&rbrace;]&rbrace;&lbrace;[\mathrm&lbrace;HSO&rbrace;_4^-]&rbrace; = \frac&lbrace;(0.010 + x)(x)&rbrace;&lbrace;0.010 - x&rbrace; = 1.0 \times 10^&lbrace;-2&rbrace;
$$

This gives $x \approx 0.0045$, so $[\mathrm{H}^+] \approx 0.0145$ and $\mathrm{pH} \approx 1.84$.

</details>

---

## Ka and Kb Expressions

### Acid Dissociation Constant

For a weak acid $\mathrm{HA}$:

$$
\mathrm&lbrace;HA&rbrace; \rightleftharpoons \mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;A&rbrace;^-
$$

$$
K_a = \frac&lbrace;[\mathrm&lbrace;H&rbrace;^+][\mathrm&lbrace;A&rbrace;^-]&rbrace;&lbrace;[\mathrm&lbrace;HA&rbrace;]&rbrace;
$$

### Base Dissociation Constant

For a weak base $\mathrm{B}$:

$$
\mathrm&lbrace;B&rbrace; + \mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace; \rightleftharpoons \mathrm&lbrace;BH&rbrace;^+ + \mathrm&lbrace;OH&rbrace;^-
$$

$$
K_b = \frac&lbrace;[\mathrm&lbrace;BH&rbrace;^+][\mathrm&lbrace;OH&rbrace;^-]&rbrace;&lbrace;[\mathrm&lbrace;B&rbrace;]&rbrace;
$$

### Relationship Between Ka and Kb

For a conjugate acid-base pair:

$$
K_a \times K_b = K_w = 1.0 \times 10^&lbrace;-14&rbrace;
$$

$$
\mathrm&lbrace;p&rbrace;K_a + \mathrm&lbrace;p&rbrace;K_b = 14
$$

where $\mathrm{p}K_a = -\log K_a$.

### Common Ka Values at $25\degree\mathrm{C}$

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

Calculate the pH of $0.100\mathrm{ mol/L}$ CH$_3$COOH ($K_a = 1.8 \times 10^{-5}$).

$$
\mathrm&lbrace;CH&rbrace;_3\mathrm&lbrace;COOH&rbrace; \rightleftharpoons \mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;CH&rbrace;_3\mathrm&lbrace;COO&rbrace;^-
$$

ICE table (initial, change, equilibrium):

| Species       | [Initial] | Change | [Equilibrium] |
| ------------- | --------- | ------ | ------------- |
| CH$_3$COOH    | 0.100     | $-x$   | $0.100 - x$   |
| H$^+$         | 0         | $+x$   | $x$           |
| CH$_3$COO$^-$ | 0         | $+x$   | $x$           |

$$
K_a = \frac&lbrace;x^2&rbrace;&lbrace;0.100 - x&rbrace; = 1.8 \times 10^&lbrace;-5&rbrace;
$$

Check the $5\%$ rule:
$\frac{K_a}{c} = \frac{1.8 \times 10^{-5}}{0.100} = 1.8 \times 10^{-4} \lt 0.05$. The approximation
$0.100 - x \approx 0.100$ is valid.

$$
x^2 = 1.8 \times 10^&lbrace;-6&rbrace;
$$

$$
x = \sqrt&lbrace;1.8 \times 10^&lbrace;-6&rbrace;&rbrace; = 1.34 \times 10^&lbrace;-3&rbrace;\mathrm&lbrace; mol/L&rbrace;
$$

$$
\mathrm&lbrace;pH&rbrace; = -\log(1.34 \times 10^&lbrace;-3&rbrace;) = 2.87
$$

</details>

<details>
<summary>Worked Example 5: pH of a Weak Base</summary>

Calculate the pH of $0.150\mathrm{ mol/L}$ NH$_3$ ($K_b = 1.8 \times 10^{-5}$) at
$25\degree\mathrm{C}$.

$$
\mathrm&lbrace;NH&rbrace;_3 + \mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace; \rightleftharpoons \mathrm&lbrace;NH&rbrace;_4^+ + \mathrm&lbrace;OH&rbrace;^-
$$

| Species  | [Initial] | Change | [Equilibrium] |
| -------- | --------- | ------ | ------------- |
| NH$_3$   | 0.150     | $-x$   | $0.150 - x$   |
| NH$_4^+$ | 0         | $+x$   | $x$           |
| OH$^-$   | 0         | $+x$   | $x$           |

$$
K_b = \frac&lbrace;x^2&rbrace;&lbrace;0.150 - x&rbrace; = 1.8 \times 10^&lbrace;-5&rbrace;
$$

Approximation valid: $\frac{K_b}{c} = 1.2 \times 10^{-4} \lt 0.05$.

$$
x^2 = 0.150 \times 1.8 \times 10^&lbrace;-5&rbrace; = 2.7 \times 10^&lbrace;-6&rbrace;
$$

$$
x = \sqrt&lbrace;2.7 \times 10^&lbrace;-6&rbrace;&rbrace; = 1.64 \times 10^&lbrace;-3&rbrace;\mathrm&lbrace; mol/L&rbrace; = [\mathrm&lbrace;OH&rbrace;^-]
$$

$$
\mathrm&lbrace;pOH&rbrace; = -\log(1.64 \times 10^&lbrace;-3&rbrace;) = 2.78
$$

$$
\mathrm&lbrace;pH&rbrace; = 14 - 2.78 = 11.22
$$

</details>

---

## Kw (Ionic Product of Water)

Water undergoes autoionisation:

$$
\mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace;(l) \rightleftharpoons \mathrm&lbrace;H&rbrace;^+(aq) + \mathrm&lbrace;OH&rbrace;^-(aq)
$$

$$
K_w = [\mathrm&lbrace;H&rbrace;^+][\mathrm&lbrace;OH&rbrace;^-]
$$

At $25\degree\mathrm{C}$: $K_w = 1.0 \times 10^{-14}$ (mol$^2$/L$^2$).

$K_w$ is **temperature dependent**:

| Temperature ($\degree$C) | $K_w$                  |
| ------------------------ | ---------------------- |
| 0                        | $1.14 \times 10^{-15}$ |
| 25                       | $1.00 \times 10^{-14}$ |
| 50                       | $5.48 \times 10^{-14}$ |
| 100                      | $5.13 \times 10^{-13}$ |

:::warning[Exam Tip] At $50\degree\mathrm{C}$, pure water has $\mathrm{pH} = 6.63$ (not 7). This is
because $K_w$ is larger, so $[\mathrm{H}^+] = [\mathrm{OH}^-] = \sqrt{K_w} \gt 10^{-7}$. The water
is still **neutral** because $[\mathrm{H}^+] = [\mathrm{OH}^-]$. Neutral does not always mean pH =
7; it depends on temperature.
:::

---

## Polyprotic Acids

A polyprotic acid can donate more than one proton. Each dissociation has its own $K_a$ value.

**Carbonic acid (H$_2$CO$_3$):**

$$
\mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;CO&rbrace;_3 \rightleftharpoons \mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;HCO&rbrace;_3^- \quad K_&lbrace;a1&rbrace; = 4.3 \times 10^&lbrace;-7&rbrace;
$$

$$
\mathrm&lbrace;HCO&rbrace;_3^- \rightleftharpoons \mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;CO&rbrace;_3^&lbrace;2-&rbrace; \quad K_&lbrace;a2&rbrace; = 4.8 \times 10^&lbrace;-11&rbrace;
$$

**Phosphoric acid (H$_3$PO$_4$):**

$$
\mathrm&lbrace;H&rbrace;_3\mathrm&lbrace;PO&rbrace;_4 \rightleftharpoons \mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;PO&rbrace;_4^- \quad K_&lbrace;a1&rbrace; = 7.5 \times 10^&lbrace;-3&rbrace;
$$

$$
\mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;PO&rbrace;_4^- \rightleftharpoons \mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;HPO&rbrace;_4^&lbrace;2-&rbrace; \quad K_&lbrace;a2&rbrace; = 6.2 \times 10^&lbrace;-8&rbrace;
$$

$$
\mathrm&lbrace;HPO&rbrace;_4^&lbrace;2-&rbrace; \rightleftharpoons \mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;PO&rbrace;_4^&lbrace;3-&rbrace; \quad K_&lbrace;a3&rbrace; = 4.2 \times 10^&lbrace;-13&rbrace;
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
\mathrm&lbrace;HIn&rbrace; \rightleftharpoons \mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;In&rbrace;^-
$$

The colour observed depends on the ratio $[\mathrm{HIn}]/[\mathrm{In}^-]$, which depends on [H$^+$]
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
  point, $\mathrm{pH} = \mathrm{p}K_a$ (for weak acid titrations), because
  $[\mathrm{HA}] = [\mathrm{A}^-]$.

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
\mathrm&lbrace;A&rbrace;^- + \mathrm&lbrace;H&rbrace;^+ \to \mathrm&lbrace;HA&rbrace;
$$

**Adding base (OH$^-$):** The weak acid (HA) reacts with the added OH$^-$:

$$
\mathrm&lbrace;HA&rbrace; + \mathrm&lbrace;OH&rbrace;^- \to \mathrm&lbrace;A&rbrace;^- + \mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace;
$$

In both cases, the ratio $[\mathrm{HA}]/[\mathrm{A}^-]$ changes only slightly, so pH remains nearly
constant.

### Henderson-Hasselbalch Equation

$$
\mathrm&lbrace;pH&rbrace; = \mathrm&lbrace;p&rbrace;K_a + \log\frac&lbrace;[\mathrm&lbrace;A&rbrace;^-]&rbrace;&lbrace;[\mathrm&lbrace;HA&rbrace;]&rbrace;
$$

or equivalently:

$$
\mathrm&lbrace;pH&rbrace; = \mathrm&lbrace;p&rbrace;K_a + \log\frac&lbrace;[\mathrm&lbrace;base&rbrace;]&rbrace;&lbrace;[\mathrm&lbrace;acid&rbrace;]&rbrace;
$$

### Buffer Capacity

Buffer capacity is the amount of acid or base that can be added before the pH changes significantly.
A buffer is most effective when:

- The concentrations of the weak acid and conjugate base are **large** (more moles available to
  react).
- The ratio $[\mathrm{A}^-]/[\mathrm{HA}]$ is **close to 1** (i.e., pH is close to p$K_a$).

The effective buffer range is approximately $\mathrm{p}K_a \pm 1$.

<details>
<summary>Worked Example 6: Buffer pH Calculation</summary>

Calculate the pH of a buffer solution containing $0.200\mathrm{ mol/L}$ CH$_3$COOH and
$0.150\mathrm{ mol/L}$ CH$_3$COONa. ($K_a = 1.8 \times 10^{-5}$, p$K_a = 4.74$)

Using the Henderson-Hasselbalch equation:

$$
\mathrm&lbrace;pH&rbrace; = 4.74 + \log\frac&lbrace;0.150&rbrace;&lbrace;0.200&rbrace;
$$

$$
\mathrm&lbrace;pH&rbrace; = 4.74 + \log(0.750)
$$

$$
\mathrm&lbrace;pH&rbrace; = 4.74 + (-0.125) = 4.62
$$

</details>

<details>
<summary>Worked Example 7: pH Change When Adding Acid to a Buffer</summary>

To $500\mathrm{ mL}$ of the buffer from Worked Example 6, $0.010\mathrm{ mol}$ of HCl is added.
Calculate the new pH.

Initial moles:

- $n(\mathrm{CH}_3\mathrm{COOH}) = 0.200 \times 0.500 = 0.100\mathrm{ mol}$
- $n(\mathrm{CH}_3\mathrm{COO}^-) = 0.150 \times 0.500 = 0.075\mathrm{ mol}$

Adding $0.010\mathrm{ mol}$ HCl:

- HCl reacts with CH$_3$COO$^-$:
  $\mathrm{CH}_3\mathrm{COO}^- + \mathrm{H}^+ \to \mathrm{CH}_3\mathrm{COOH}$
- $n(\mathrm{CH}_3\mathrm{COO}^-) = 0.075 - 0.010 = 0.065\mathrm{ mol}$
- $n(\mathrm{CH}_3\mathrm{COOH}) = 0.100 + 0.010 = 0.110\mathrm{ mol}$

$$
\mathrm&lbrace;pH&rbrace; = 4.74 + \log\frac&lbrace;0.065&rbrace;&lbrace;0.110&rbrace;
$$

$$
\mathrm&lbrace;pH&rbrace; = 4.74 + \log(0.591) = 4.74 + (-0.228) = 4.51
$$

The pH changed from 4.62 to 4.51, a change of only 0.11 units, demonstrating the buffer's
effectiveness.

</details>

<details>
<summary>Worked Example 8: Preparing a Buffer</summary>

What mass of sodium acetate (CH$_3$COONa, $M_r = 82.0\mathrm{ g/mol}$) must be added to
$1.00\mathrm{ L}$ of $0.100\mathrm{ mol/L}$ CH$_3$COOH to produce a buffer with pH = 5.00?
($K_a = 1.8 \times 10^{-5}$)

Using the Henderson-Hasselbalch equation:

$$
5.00 = 4.74 + \log\frac&lbrace;[\mathrm&lbrace;CH&rbrace;_3\mathrm&lbrace;COO&rbrace;^-]&rbrace;&lbrace;0.100&rbrace;
$$

$$
\log\frac&lbrace;[\mathrm&lbrace;CH&rbrace;_3\mathrm&lbrace;COO&rbrace;^-]&rbrace;&lbrace;0.100&rbrace; = 0.26
$$

$$
\frac&lbrace;[\mathrm&lbrace;CH&rbrace;_3\mathrm&lbrace;COO&rbrace;^-]&rbrace;&lbrace;0.100&rbrace; = 10^&lbrace;0.26&rbrace; = 1.82
$$

$$
[\mathrm&lbrace;CH&rbrace;_3\mathrm&lbrace;COO&rbrace;^-] = 0.182\mathrm&lbrace; mol/L&rbrace;
$$

In $1.00\mathrm{ L}$:

$$
n(\mathrm&lbrace;CH&rbrace;_3\mathrm&lbrace;COONa&rbrace;) = 0.182\mathrm&lbrace; mol&rbrace;
$$

$$
m = n \times M_r = 0.182 \times 82.0 = 14.9\mathrm&lbrace; g&rbrace;
$$

</details>

---

## Acid-Base Titrations

### Titration Calculations

At the equivalence point, moles of acid = moles of base.

**Strong acid -- strong base:**

$$
\mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;OH&rbrace;^- \to \mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace;
$$

pH at equivalence point = 7 (neutral salt).

**Weak acid -- strong base:**

$$
\mathrm&lbrace;HA&rbrace; + \mathrm&lbrace;OH&rbrace;^- \to \mathrm&lbrace;A&rbrace;^- + \mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace;
$$

The conjugate base A$^-$ hydrolyses:

$$
\mathrm&lbrace;A&rbrace;^- + \mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace; \rightleftharpoons \mathrm&lbrace;HA&rbrace; + \mathrm&lbrace;OH&rbrace;^-
$$

pH at equivalence point \gt 7.

**Strong acid -- weak base:**

$$
\mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;B&rbrace; \to \mathrm&lbrace;BH&rbrace;^+
$$

The conjugate acid BH$^+$ hydrolyses:

$$
\mathrm&lbrace;BH&rbrace;^+ + \mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;O&rbrace; \rightleftharpoons \mathrm&lbrace;B&rbrace; + \mathrm&lbrace;H&rbrace;_3\mathrm&lbrace;O&rbrace;^+
$$

pH at equivalence point \lt 7.

<details>
<summary>Worked Example 9: Titration of Weak Acid with Strong Base</summary>

$25.0\mathrm{ mL}$ of $0.100\mathrm{ mol/L}$ CH$_3$COOH ($K_a = 1.8 \times 10^{-5}$) is titrated
with $0.100\mathrm{ mol/L}$ NaOH. Calculate the pH at the equivalence point.

At the equivalence point, moles of NaOH = moles of CH$_3$COOH:

$$
n = 0.100 \times 0.0250 = 0.00250\mathrm&lbrace; mol&rbrace;
$$

Volume of NaOH required:

$$
V = \frac&lbrace;0.00250&rbrace;&lbrace;0.100&rbrace; = 0.0250\mathrm&lbrace; L&rbrace; = 25.0\mathrm&lbrace; mL&rbrace;
$$

Total volume at equivalence point: $25.0 + 25.0 = 50.0\mathrm{ mL} = 0.0500\mathrm{ L}$.

All CH$_3$COOH has been converted to CH$_3$COO$^-$:

$$
[\mathrm&lbrace;CH&rbrace;_3\mathrm&lbrace;COO&rbrace;^-] = \frac&lbrace;0.00250&rbrace;&lbrace;0.0500&rbrace; = 0.0500\mathrm&lbrace; mol/L&rbrace;
$$

The acetate ion hydrolyses:

$$
K_b = \frac&lbrace;K_w&rbrace;&lbrace;K_a&rbrace; = \frac&lbrace;1.0 \times 10^&lbrace;-14&rbrace;&rbrace;&lbrace;1.8 \times 10^&lbrace;-5&rbrace;&rbrace; = 5.56 \times 10^&lbrace;-10&rbrace;
$$

$$
[\mathrm&lbrace;OH&rbrace;^-] = \sqrt&lbrace;K_b \times [\mathrm&lbrace;CH&rbrace;_3\mathrm&lbrace;COO&rbrace;^-]&rbrace; = \sqrt&lbrace;5.56 \times 10^&lbrace;-10&rbrace; \times 0.0500&rbrace;
$$

$$
[\mathrm&lbrace;OH&rbrace;^-] = \sqrt&lbrace;2.78 \times 10^&lbrace;-11&rbrace;&rbrace; = 5.27 \times 10^&lbrace;-6&rbrace;\mathrm&lbrace; mol/L&rbrace;
$$

$$
\mathrm&lbrace;pOH&rbrace; = -\log(5.27 \times 10^&lbrace;-6&rbrace;) = 5.28
$$

$$
\mathrm&lbrace;pH&rbrace; = 14 - 5.28 = 8.72
$$

</details>

<details>
<summary>Worked Example 10: pH at Half-Equivalence Point</summary>

Using the titration from Worked Example 9, calculate the pH when $12.5\mathrm{ mL}$ of NaOH has been
added (half-equivalence point).

At half-equivalence point, half the acid has been neutralised:

$$
n(\mathrm&lbrace;NaOH&rbrace;) = 0.100 \times 0.0125 = 0.00125\mathrm&lbrace; mol&rbrace;
$$

Moles of CH$_3$COOH remaining: $0.00250 - 0.00125 = 0.00125\mathrm{ mol}$

Moles of CH$_3$COO$^-$ formed: $0.00125\mathrm{ mol}$

Since $[\mathrm{HA}] = [\mathrm{A}^-]$:

$$
\mathrm&lbrace;pH&rbrace; = \mathrm&lbrace;p&rbrace;K_a = -\log(1.8 \times 10^&lbrace;-5&rbrace;) = 4.74
$$

This is a general result: at the half-equivalence point, $\mathrm{pH} = \mathrm{p}K_a$.

</details>

---

## Common Pitfalls

1. **Strong vs weak acid pH:** A $0.10\mathrm{ mol/L}$ strong acid has pH = 1.0, but a
   $0.10\mathrm{ mol/L}$ weak acid has pH \gt 1.0 (typically 2--3) because it only partially
   dissociates. Do not assume $[\mathrm{H}^+] = c$ for weak acids.

2. **Diprotic acid contribution:** H$_2$SO$_4$ gives 2 H$^+$ per molecule, but H$_2$CO$_3$ does not
   give 2 H$^+$ at normal concentrations because $K_{a2}$ is very small. Only the first dissociation
   contributes significantly.

3. **pH + pOH = 14 only at $25\degree\mathrm{C}$:** At other temperatures, use the actual $K_w$
   value. $\mathrm{pH} + \mathrm{pOH} = \mathrm{p}K_w$.

4. **Buffer range:** A buffer is only effective within $\pm 1$ pH unit of its p$K_a$. Outside this
   range, the buffer capacity is essentially zero.

5. **Equivalence point pH:** For weak acid -- strong base titrations, the equivalence point pH is
   \gt 7, not 7. For strong acid -- weak base, it is \lt 7.

6. **Henderson-Hasselbalch validity:** The equation assumes that the concentrations of HA and A$^-$
   are much larger than $[\mathrm{H}^+]$ and $[\mathrm{OH}^-]$. It is not valid for very dilute
   solutions.

7. **Neutral pH:** Neutral means $[\mathrm{H}^+] = [\mathrm{OH}^-]$, which equals pH = 7 only at
   $25\degree\mathrm{C}$. At $50\degree\mathrm{C}$, neutral pH is approximately 6.63.

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

(a) Calculate the pH of $0.0030\mathrm{ mol/L}$ HNO$_3$.

(b) Calculate the pH of $0.0025\mathrm{ mol/L}$ Ca(OH)$_2$ at $25\degree\mathrm{C}$.

(c) A solution has pH = 3.40. What is $[\mathrm{H}^+]$?

Answer:

(a) HNO$_3$ is a strong monoprotic acid:

$$
[\mathrm&lbrace;H&rbrace;^+] = 0.0030\mathrm&lbrace; mol/L&rbrace;
$$

$$
\mathrm&lbrace;pH&rbrace; = -\log(3.0 \times 10^&lbrace;-3&rbrace;) = 3 - \log 3.0 = 3 - 0.477 = 2.52
$$

(b) Ca(OH)$_2$ is a strong base giving 2 OH$^-$ per formula unit:

$$
[\mathrm&lbrace;OH&rbrace;^-] = 2 \times 0.0025 = 0.0050\mathrm&lbrace; mol/L&rbrace;
$$

$$
\mathrm&lbrace;pOH&rbrace; = -\log(5.0 \times 10^&lbrace;-3&rbrace;) = 3 - \log 5.0 = 3 - 0.699 = 2.30
$$

$$
\mathrm&lbrace;pH&rbrace; = 14 - 2.30 = 11.70
$$

(c)

$$
[\mathrm&lbrace;H&rbrace;^+] = 10^&lbrace;-\mathrm&lbrace;pH&rbrace;&rbrace; = 10^&lbrace;-3.40&rbrace; = 3.98 \times 10^&lbrace;-4&rbrace;\mathrm&lbrace; mol/L&rbrace;
$$

</details>

<details>
<summary>Question 2: Weak Acid pH and Degree of Dissociation</summary>

Hypochlorous acid (HOCl) has $K_a = 3.5 \times 10^{-8}$.

(a) Calculate the pH of $0.050\mathrm{ mol/L}$ HOCl.

(b) Calculate the percentage dissociation of HOCl at this concentration.

Answer:

(a)

$$
\mathrm&lbrace;HOCl&rbrace; \rightleftharpoons \mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;OCl&rbrace;^-
$$

$$
K_a = \frac&lbrace;x^2&rbrace;&lbrace;0.050&rbrace; = 3.5 \times 10^&lbrace;-8&rbrace;
$$

$$
x^2 = 1.75 \times 10^&lbrace;-9&rbrace;
$$

$$
x = 4.18 \times 10^&lbrace;-5&rbrace;\mathrm&lbrace; mol/L&rbrace;
$$

$$
\mathrm&lbrace;pH&rbrace; = -\log(4.18 \times 10^&lbrace;-5&rbrace;) = 4.38
$$

(b)

$$
\mathrm&lbrace;Percentage dissociation&rbrace; = \frac&lbrace;4.18 \times 10^&lbrace;-5&rbrace;&rbrace;&lbrace;0.050&rbrace; \times 100\% = 0.084\%
$$

</details>

<details>
<summary>Question 3: Conjugate Pairs and Ka/Kb</summary>

(a) The $K_b$ of NH$_3$ is $1.8 \times 10^{-5}$. Calculate $K_a$ for NH$_4^+$.

(b) Is NH$_4^+$ acidic, basic, or neutral in aqueous solution? Explain.

Answer:

(a)

$$
K_a(\mathrm&lbrace;NH&rbrace;_4^+) = \frac&lbrace;K_w&rbrace;&lbrace;K_b(\mathrm&lbrace;NH&rbrace;_3)&rbrace; = \frac&lbrace;1.0 \times 10^&lbrace;-14&rbrace;&rbrace;&lbrace;1.8 \times 10^&lbrace;-5&rbrace;&rbrace; = 5.56 \times 10^&lbrace;-10&rbrace;
$$

(b) NH$_4^+$ is the conjugate acid of the weak base NH$_3$. Since NH$_3$ is a weak base, its
conjugate acid NH$_4^+$ will donate protons in water, making the solution acidic. This is confirmed
by the relatively large $K_a$ value ($5.56 \times 10^{-10} \gg K_b$ of NH$_4^+$ which would be
$K_w/K_a = 1.8 \times 10^{-5}$, but wait -- we already have $K_a$ for NH$_4^+$, so we can see it is
an acid). A $0.1\mathrm{ mol/L}$ NH$_4$Cl solution would have pH \lt 7.

</details>

<details>
<summary>Question 4: Buffer Preparation and pH Change</summary>

A buffer is prepared by mixing $0.150\mathrm{ mol/L}$ HCOOH ($K_a = 1.8 \times 10^{-4}$,
p$K_a = 3.74$) with $0.100\mathrm{ mol/L}$ HCOONa in equal volumes.

(a) Calculate the pH of the buffer.

(b) To $100\mathrm{ mL}$ of this buffer, $5.0\mathrm{ mL}$ of $0.100\mathrm{ mol/L}$ NaOH is added.
Calculate the new pH.

Answer:

(a) Equal volumes of $0.150$ and $0.100\mathrm{ mol/L}$ give concentrations of $0.0750$ and
$0.0500\mathrm{ mol/L}$ respectively:

$$
\mathrm&lbrace;pH&rbrace; = 3.74 + \log\frac&lbrace;0.0500&rbrace;&lbrace;0.0750&rbrace; = 3.74 + \log(0.667) = 3.74 + (-0.176) = 3.56
$$

(b) Moles in $100\mathrm{ mL}$ of buffer:

- $n(\mathrm{HCOOH}) = 0.0750 \times 0.100 = 0.00750\mathrm{ mol}$
- $n(\mathrm{HCOO}^-) = 0.0500 \times 0.100 = 0.00500\mathrm{ mol}$

Moles of NaOH added: $n = 0.100 \times 0.0050 = 0.000500\mathrm{ mol}$

After reaction:

- $n(\mathrm{HCOOH}) = 0.00750 - 0.000500 = 0.00700\mathrm{ mol}$
- $n(\mathrm{HCOO}^-) = 0.00500 + 0.000500 = 0.00550\mathrm{ mol}$

$$
\mathrm&lbrace;pH&rbrace; = 3.74 + \log\frac&lbrace;0.00550&rbrace;&lbrace;0.00700&rbrace; = 3.74 + \log(0.786) = 3.74 + (-0.105) = 3.64
$$

</details>

<details>
<summary>Question 5: Titration Curve Analysis (Paper 2 Style)</summary>

$20.0\mathrm{ mL}$ of $0.100\mathrm{ mol/L}$ NH$_3$ ($K_b = 1.8 \times 10^{-5}$) is titrated with
$0.100\mathrm{ mol/L}$ HCl.

(a) Calculate the pH at the equivalence point.

(b) State and explain which indicator would be most suitable for this titration.

(c) Calculate the pH when $10.0\mathrm{ mL}$ of HCl has been added (half-equivalence point).

Answer:

(a) At equivalence point, moles of HCl = moles of NH$_3$:

$$
n = 0.100 \times 0.0200 = 0.00200\mathrm&lbrace; mol&rbrace;
$$

Volume of HCl: $V = 0.00200 / 0.100 = 0.0200\mathrm{ L} = 20.0\mathrm{ mL}$.

Total volume: $20.0 + 20.0 = 40.0\mathrm{ mL} = 0.0400\mathrm{ L}$.

All NH$_3$ is converted to NH$_4^+$:

$$
[\mathrm&lbrace;NH&rbrace;_4^+] = \frac&lbrace;0.00200&rbrace;&lbrace;0.0400&rbrace; = 0.0500\mathrm&lbrace; mol/L&rbrace;
$$

$$
K_a(\mathrm&lbrace;NH&rbrace;_4^+) = \frac&lbrace;K_w&rbrace;&lbrace;K_b&rbrace; = \frac&lbrace;1.0 \times 10^&lbrace;-14&rbrace;&rbrace;&lbrace;1.8 \times 10^&lbrace;-5&rbrace;&rbrace; = 5.56 \times 10^&lbrace;-10&rbrace;
$$

$$
[\mathrm&lbrace;H&rbrace;^+] = \sqrt&lbrace;K_a \times [\mathrm&lbrace;NH&rbrace;_4^+]&rbrace; = \sqrt&lbrace;5.56 \times 10^&lbrace;-10&rbrace; \times 0.0500&rbrace;
$$

$$
[\mathrm&lbrace;H&rbrace;^+] = \sqrt&lbrace;2.78 \times 10^&lbrace;-11&rbrace;&rbrace; = 5.27 \times 10^&lbrace;-6&rbrace;\mathrm&lbrace; mol/L&rbrace;
$$

$$
\mathrm&lbrace;pH&rbrace; = -\log(5.27 \times 10^&lbrace;-6&rbrace;) = 5.28
$$

(b) The equivalence point pH is 5.28, which falls within the transition range of **methyl orange**
(3.1--4.4) only partially. A better choice would be **bromocresol green** (3.8--5.4) or **methyl
red** (4.4--6.2), which has a transition range that includes pH 5.28. From the common indicators
listed in the IB syllabus, methyl orange is the closest suitable indicator for a strong acid -- weak
base titration.

(c) At the half-equivalence point, $[\mathrm{NH}_3] = [\mathrm{NH}_4^+]$, so:

$$
\mathrm&lbrace;pH&rbrace; = \mathrm&lbrace;p&rbrace;K_a(\mathrm&lbrace;NH&rbrace;_4^+) = 14 - \mathrm&lbrace;p&rbrace;K_b = 14 - (-\log(1.8 \times 10^&lbrace;-5&rbrace;))
$$

$$
\mathrm&lbrace;pH&rbrace; = 14 - 4.74 = 9.26
$$

</details>

<details>
<summary>Question 6: Polyprotic Acid (Paper 2 Style)</summary>

Calculate the pH of a $0.100\mathrm{ mol/L}$ H$_3$PO$_4$ solution. Use the following data:
$K_{a1} = 7.5 \times 10^{-3}$, $K_{a2} = 6.2 \times 10^{-8}$, $K_{a3} = 4.2 \times 10^{-13}$.

Answer:

For the first dissociation:

$$
\mathrm&lbrace;H&rbrace;_3\mathrm&lbrace;PO&rbrace;_4 \rightleftharpoons \mathrm&lbrace;H&rbrace;^+ + \mathrm&lbrace;H&rbrace;_2\mathrm&lbrace;PO&rbrace;_4^-
$$

Since $K_{a1}$ is not very small compared to $c$, the approximation $c - x \approx c$ may not be
valid. Check: $K_{a1}/c = 7.5 \times 10^{-3}/0.100 = 0.075 \gt 0.05$. The $5\%$ rule fails.

Solve the quadratic: $x^2 + K_a x - K_a \cdot c = 0$

$$
x^2 + 7.5 \times 10^&lbrace;-3&rbrace;x - 7.5 \times 10^&lbrace;-4&rbrace; = 0
$$

$$
x = \frac&lbrace;-7.5 \times 10^&lbrace;-3&rbrace; + \sqrt&lbrace;(7.5 \times 10^&lbrace;-3&rbrace;)^2 + 4 \times 7.5 \times 10^&lbrace;-4&rbrace;&rbrace;&rbrace;&lbrace;2&rbrace;
$$

$$
x = \frac&lbrace;-7.5 \times 10^&lbrace;-3&rbrace; + \sqrt&lbrace;5.625 \times 10^&lbrace;-5&rbrace; + 3.0 \times 10^&lbrace;-3&rbrace;&rbrace;&rbrace;&lbrace;2&rbrace;
$$

$$
x = \frac&lbrace;-7.5 \times 10^&lbrace;-3&rbrace; + \sqrt&lbrace;3.056 \times 10^&lbrace;-3&rbrace;&rbrace;&rbrace;&lbrace;2&rbrace;
$$

$$
x = \frac&lbrace;-7.5 \times 10^&lbrace;-3&rbrace; + 5.528 \times 10^&lbrace;-2&rbrace;&rbrace;&lbrace;2&rbrace; = \frac&lbrace;4.778 \times 10^&lbrace;-2&rbrace;&rbrace;&lbrace;2&rbrace; = 2.389 \times 10^&lbrace;-2&rbrace;
$$

$$
[\mathrm&lbrace;H&rbrace;^+] \approx 0.0239\mathrm&lbrace; mol/L&rbrace;
$$

$$
\mathrm&lbrace;pH&rbrace; = -\log(0.0239) = 1.62
$$

Note: The second and third dissociations contribute negligible H$^+$ since $K_{a2} \ll K_{a1}$.

</details>
