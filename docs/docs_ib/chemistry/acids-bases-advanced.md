---
title: Acids and Bases (Advanced)
description:
  IB Chemistry — advanced pH calculations, buffer solutions, indicator theory, acid deposition, and
  solubility products.
slug: acids-bases-advanced
---

## 1. Advanced pH Calculations

### Strong Acids and Bases

For strong monoprotic acids, $[\mathrm{H}^+]$ equals the acid concentration. For strong diprotic
acids:

$$
[\mathrm{H}^+] = 2 \times [\mathrm{acid}]
$$

:::info[Example]

$0.050\mathrm{ M}$ $\mathrm{H}_2\mathrm{SO}_4$ (assuming complete first dissociation and significant
second dissociation):

$$
[\mathrm{H}^+] \approx 2 \times 0.050 = 0.100\mathrm{ M}
$$

$$
\mathrm{pH} = -\log(0.100) = 1.00
$$

:::

### Weak Acids

For a weak acid $\mathrm{HA}$ with acid dissociation constant $K_a$:

$$
\mathrm{HA} \rightleftharpoons \mathrm{H}^+ + \mathrm{A}^-
$$

$$
K_a = \frac{[\mathrm{H}^+][\mathrm{A}^-]}{[\mathrm{HA}]}
$$

Assuming $[\mathrm{H}^+] = [\mathrm{A}^-] = x$ and $[\mathrm{HA}] \approx c_0$ (the 5% rule):

$$
x = \sqrt{K_a \cdot c_0}
$$

$$
\mathrm{pH} = -\log x
$$

### Very Dilute Weak Acids

When the acid is very dilute ($c_0$ is small) or $K_a$ is large, the approximation
$[\mathrm{HA}] \approx c_0$ breaks down. Solve the full quadratic:

$$
K_a = \frac{x^2}{c_0 - x}
$$

$$
x^2 + K_a x - K_a c_0 = 0
$$

:::info[Example]

Calculate the $\mathrm{pH}$ of $0.010\mathrm{ M}$ ethanoic acid ($K_a = 1.8 \times 10^{-5}$).

Using the approximation:

$$
x = \sqrt{1.8 \times 10^{-5} \times 0.010} = \sqrt{1.8 \times 10^{-7}} = 4.24 \times 10^{-4}
$$

Check: $\dfrac{4.24 \times 10^{-4}}{0.010} \times 100\% = 4.24\% \lt 5\%$. The approximation is
valid.

$$
\mathrm{pH} = -\log(4.24 \times 10^{-4}) = 3.37
$$

:::

### Polyprotic Acids

For diprotic acids ($\mathrm{H}_2\mathrm{A}$), the first dissociation dominates:

$$
K_{a1} \gg K_{a2}
$$

The $\mathrm{pH}$ is determined primarily by $K_{a1}$. The second dissociation contributes
additional $\mathrm{H}^+$ but is usually negligible.

For $\mathrm{H}_2\mathrm{SO}_4$: the first dissociation is complete ($K_{a1}$ very large), but
$K_{a2} = 1.2 \times 10^{-2}$.

### Common Pitfalls

- The 5% rule: if $x/c_0 \gt 5\%$, use the quadratic formula.
- For very dilute strong acids ($c_0 \lt 10^{-6}\mathrm{ M}$), the contribution of water's
  autoionization ($[\mathrm{H}^+] = 10^{-7}\mathrm{ M}$) becomes significant.
- $\mathrm{pOH} = 14 - \mathrm{pH}$ only holds at $25\degree\mathrm{C}$.

---

## 2. Buffer Solutions

### Definition

A **buffer solution** resists changes in $\mathrm{pH}$ when small amounts of acid or base are added.
It consists of a weak acid and its conjugate base (or a weak base and its conjugate acid).

### The Henderson-Hasselbalch Equation

$$
\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\mathrm{A}^-]}{[\mathrm{HA}]}
$$

where $\mathrm{p}K_a = -\log K_a$.

### Buffer Capacity

Buffer capacity is maximised when $[\mathrm{HA}] = [\mathrm{A}^-]$, i.e., when
$\mathrm{pH} = \mathrm{p}K_a$. A buffer is effective within $\pm 1$ unit of its $\mathrm{p}K_a$.

### Preparing a Buffer

:::info[Example]

Prepare an ethanoic acid/sodium ethanoate buffer with $\mathrm{pH} = 5.00$. Given
$\mathrm{p}K_a = 4.76$.

$$
5.00 = 4.76 + \log\frac{[\mathrm{CH}_3\mathrm{COO}^-]}{[\mathrm{CH}_3\mathrm{COOH}]}
$$

$$
\log\frac{[\mathrm{CH}_3\mathrm{COO}^-]}{[\mathrm{CH}_3\mathrm{COOH}]} = 0.24
$$

$$
\frac{[\mathrm{CH}_3\mathrm{COO}^-]}{[\mathrm{CH}_3\mathrm{COOH}]} = 10^{0.24} = 1.74
$$

Mix ethanoic acid and sodium ethanoate in a molar ratio of $1 : 1.74$ (or approximately $1 : 1.7$).

:::

### Calculating pH Changes in a Buffer

When acid is added:

$$
[\mathrm{HA}]_{\mathrm{new}} = [\mathrm{HA}]_{\mathrm{old}} + [\mathrm{H}^+]_{\mathrm{added}}
$$

$$
[\mathrm{A}^-]_{\mathrm{new}} = [\mathrm{A}^-]_{\mathrm{old}} - [\mathrm{H}^+]_{\mathrm{added}}
$$

When base is added:

$$
[\mathrm{HA}]_{\mathrm{new}} = [\mathrm{HA}]_{\mathrm{old}} - [\mathrm{OH}^-]_{\mathrm{added}}
$$

$$
[\mathrm{A}^-]_{\mathrm{new}} = [\mathrm{A}^-]_{\mathrm{old}} + [\mathrm{OH}^-]_{\mathrm{added}}
$$

:::info[Example]

A buffer contains $0.10\mathrm{ M}$ $\mathrm{CH}_3\mathrm{COOH}$ and $0.10\mathrm{ M}$
$\mathrm{CH}_3\mathrm{COO}^-$ ($\mathrm{pH} = 4.76$). Add $0.01\mathrm{ mol}$ of $\mathrm{HCl}$ to
$1.0\mathrm{ L}$ of buffer.

$$
[\mathrm{CH}_3\mathrm{COOH}] = 0.10 + 0.01 = 0.11\mathrm{ M}
$$

$$
[\mathrm{CH}_3\mathrm{COO}^-] = 0.10 - 0.01 = 0.09\mathrm{ M}
$$

$$
\mathrm{pH} = 4.76 + \log\frac{0.09}{0.11} = 4.76 + \log(0.818) = 4.76 - 0.09 = 4.67
$$

The $\mathrm{pH}$ changed by only $0.09$ units. Without the buffer, $0.01\mathrm{ M}$ $\mathrm{HCl}$
would give $\mathrm{pH} = 2.00$.

:::

### Common Pitfalls

- A buffer cannot withstand addition of large amounts of strong acid or base — it has finite
  capacity.
- The Henderson-Hasselbalch equation assumes concentrations equal activities (valid for dilute
  solutions).
- $\mathrm{pH} = \mathrm{p}K_a$ does not mean the solution is neutral; it means the acid and
  conjugate base are present in equal amounts.

---

## 3. Indicator Theory

### How Indicators Work

Acid-base indicators are weak acids ($\mathrm{HIn}$) where the acid and conjugate base forms have
different colours:

$$
\mathrm{HIn} \rightleftharpoons \mathrm{H}^+ + \mathrm{In}^- \qquad K_{\mathrm{In}} = \frac{[\mathrm{H}^+][\mathrm{In}^-]}{[\mathrm{HIn}]}
$$

The observed colour depends on the ratio $[\mathrm{In}^-]/[\mathrm{HIn}]$:

| Condition                                       | Dominant species | Colour observed |
| ----------------------------------------------- | ---------------- | --------------- |
| $\mathrm{pH} \ll \mathrm{p}K_{\mathrm{In}}$     | $\mathrm{HIn}$   | Acid colour     |
| $\mathrm{pH} \approx \mathrm{p}K_{\mathrm{In}}$ | Both present     | Transition      |
| $\mathrm{pH} \gg \mathrm{p}K_{\mathrm{In}}$     | $\mathrm{In}^-$  | Base colour     |

### Effective Range

An indicator changes colour over approximately $\pm 1$ unit around its $\mathrm{p}K_{\mathrm{In}}$:

$$
\mathrm{pH\ range} = \mathrm{p}K_{\mathrm{In}} \pm 1
$$

### Choosing the Right Indicator

The indicator's transition range should overlap with the equivalence point of the titration.

| Titration type           | Equivalence point pH | Suitable indicator    |
| ------------------------ | -------------------- | --------------------- |
| Strong acid--strong base | $\mathrm{pH} = 7$    | Bromothymol blue      |
| Strong acid--weak base   | $\mathrm{pH} \lt 7$  | Methyl orange         |
| Weak acid--strong base   | $\mathrm{pH} \gt 7$  | Phenolphthalein       |
| Weak acid--weak base     | No sharp change      | No suitable indicator |

### Common Indicators

| Indicator        | $\mathrm{pH}$ range | Acid colour | Base colour |
| ---------------- | ------------------- | ----------- | ----------- |
| Methyl orange    | $3.1$--$4.4$        | Red         | Yellow      |
| Bromothymol blue | $6.0$--$7.6$        | Yellow      | Blue        |
| Phenolphthalein  | $8.3$--$10.0$       | Colourless  | Pink        |

---

## 4. Acid Deposition

### Formation of Acid Rain

1. Sulfur dioxide from combustion of fossil fuels is oxidised:

$$
\mathrm{SO}_2 + \mathrm{H}_2\mathrm{O} \to \mathrm{H}_2\mathrm{SO}_3
$$

$$
2\mathrm{SO}_2 + \mathrm{O}_2 \to 2\mathrm{SO}_3 \quad \mathrm{(catalysed by } \mathrm{V}_2\mathrm{O}_5)
$$

$$
\mathrm{SO}_3 + \mathrm{H}_2\mathrm{O} \to \mathrm{H}_2\mathrm{SO}_4
$$

2. Nitrogen oxides from high-temperature combustion:

$$
\mathrm{N}_2 + \mathrm{O}_2 \to 2\mathrm{NO}
$$

$$
2\mathrm{NO} + \mathrm{O}_2 \to 2\mathrm{NO}_2
$$

$$
3\mathrm{NO}_2 + \mathrm{H}_2\mathrm{O} \to 2\mathrm{HNO}_3 + \mathrm{NO}
$$

### Environmental Effects

| Effect             | Mechanism                                                                   |
| ------------------ | --------------------------------------------------------------------------- |
| Soil acidification | Leaches $\mathrm{Ca}^{2+}$, $\mathrm{Mg}^{2+}$, releases $\mathrm{Al}^{3+}$ |
| Lake acidification | Reduces biodiversity, mobilises toxic $\mathrm{Al}^{3+}$                    |
| Plant damage       | Damages leaves, inhibits root growth                                        |
| Building corrosion | $\mathrm{CaCO}_3$ (limestone/marble) reacts with acid                       |
| Respiratory issues | Fine sulfate/nitrate particles irritate lungs                               |

### Mitigation

- Flue gas desulfurisation (FGD): $\mathrm{SO}_2$ removed by reaction with $\mathrm{CaO}$ or
  $\mathrm{CaCO}_3$.
- Catalytic converters: reduce $\mathrm{NO}_x$ emissions.
- Switching to low-sulfur fuels or renewable energy.

---

## 5. Solubility Product ($K_{sp}$)

### Definition

For a sparingly soluble salt $\mathrm{M}_x\mathrm{A}_y$:

$$
\mathrm{M}_x\mathrm{A}_y(s) \rightleftharpoons x\mathrm{M}^{y+}(aq) + y\mathrm{A}^{x-}(aq)
$$

$$
K_{sp} = [\mathrm{M}^{y+}]^x[\mathrm{A}^{x-}]^y
$$

$K_{sp}$ is the equilibrium constant for the dissolution of a solid. It is temperature-dependent.

### Common $K_{sp}$ Values

| Compound            | $K_{sp}$              |
| ------------------- | --------------------- |
| $\mathrm{AgCl}$     | $1.8 \times 10^{-10}$ |
| $\mathrm{AgBr}$     | $5.0 \times 10^{-13}$ |
| $\mathrm{AgI}$      | $8.3 \times 10^{-17}$ |
| $\mathrm{BaSO}_4$   | $1.1 \times 10^{-10}$ |
| $\mathrm{CaCO}_3$   | $3.4 \times 10^{-9}$  |
| $\mathrm{PbI}_2$    | $7.1 \times 10^{-9}$  |
| $\mathrm{Mg(OH)}_2$ | $1.8 \times 10^{-11}$ |

### Solubility Calculations

:::info[Example]

Calculate the solubility of $\mathrm{AgCl}$ in $\mathrm{g/L}$.

$$
\mathrm{AgCl}(s) \rightleftharpoons \mathrm{Ag}^+(aq) + \mathrm{Cl}^-(aq)
$$

$$
K_{sp} = [\mathrm{Ag}^+][\mathrm{Cl}^-] = s^2
$$

$$
s = \sqrt{1.8 \times 10^{-10}} = 1.3 \times 10^{-5}\mathrm{ mol/L}
$$

$$
\mathrm{Solubility} = 1.3 \times 10^{-5} \times 143.32 = 1.9 \times 10^{-3}\mathrm{ g/L}
$$

:::

### Common Ion Effect

Adding a common ion **decreases** the solubility of a sparingly soluble salt.

:::info[Example]

Calculate the solubility of $\mathrm{AgCl}$ in $0.10\mathrm{ M}$ $\mathrm{NaCl}$.

$$
K_{sp} = [\mathrm{Ag}^+][\mathrm{Cl}^-] = s \times 0.10
$$

$$
s = \frac{1.8 \times 10^{-10}}{0.10} = 1.8 \times 10^{-9}\mathrm{ mol/L}
$$

Compared to pure water ($1.3 \times 10^{-5}\mathrm{ mol/L}$), the solubility decreased by a factor
of about $7000$.

:::

### Precipitation

A precipitate forms when the ion product exceeds $K_{sp}$:

$$
Q = [\mathrm{M}^{y+}]^x[\mathrm{A}^{x-}]^y
$$

| Condition      | Result                       |
| -------------- | ---------------------------- |
| $Q \lt K_{sp}$ | No precipitate (unsaturated) |
| $Q = K_{sp}$   | Saturated, at equilibrium    |
| $Q \gt K_{sp}$ | Precipitate forms            |

### Common Pitfalls

- $K_{sp}$ expressions do **not** include the concentration of the solid.
- Solids and pure liquids are excluded from equilibrium expressions.
- The common ion effect does not change $K_{sp}$ itself — it shifts the equilibrium position.

---

## Practice Problems

<details>
<summary>Problem 1</summary>

Calculate the $\mathrm{pH}$ of a buffer prepared by mixing $100\mathrm{ mL}$ of $0.20\mathrm{ M}$
$\mathrm{CH}_3\mathrm{COOH}$ with $50\mathrm{ mL}$ of $0.20\mathrm{ M}$ $\mathrm{NaOH}$.
($\mathrm{p}K_a = 4.76$)

**Solution:**

Moles of $\mathrm{CH}_3\mathrm{COOH} = 0.100 \times 0.20 = 0.020\mathrm{ mol}$

Moles of $\mathrm{NaOH} = 0.050 \times 0.20 = 0.010\mathrm{ mol}$

$\mathrm{NaOH}$ neutralises half the acid:

$$
n(\mathrm{CH}_3\mathrm{COOH})_{\mathrm{remaining}} = 0.020 - 0.010 = 0.010\mathrm{ mol}
$$

$$
n(\mathrm{CH}_3\mathrm{COO}^-)_{\mathrm{formed}} = 0.010\mathrm{ mol}
$$

Total volume $= 150\mathrm{ mL} = 0.150\mathrm{ L}$:

$$
[\mathrm{CH}_3\mathrm{COOH}] = \frac{0.010}{0.150} = 0.0667\mathrm{ M}
$$

$$
[\mathrm{CH}_3\mathrm{COO}^-] = \frac{0.010}{0.150} = 0.0667\mathrm{ M}
$$

$$
\mathrm{pH} = 4.76 + \log\frac{0.0667}{0.0667} = 4.76 + 0 = 4.76
$$

</details>

<details>
<summary>Problem 2</summary>

Will a precipitate form when $50.0\mathrm{ mL}$ of $1.0 \times 10^{-4}\mathrm{ M}$ $\mathrm{AgNO}_3$
is mixed with $50.0\mathrm{ mL}$ of $1.0 \times 10^{-4}\mathrm{ M}$ $\mathrm{NaCl}$?
($K_{sp}(\mathrm{AgCl}) = 1.8 \times 10^{-10}$)

**Solution:**

Total volume $= 100\mathrm{ mL}$. Diluted concentrations:

$$
[\mathrm{Ag}^+] = \frac{0.050 \times 1.0 \times 10^{-4}}{0.100} = 5.0 \times 10^{-5}\mathrm{ M}
$$

$$
[\mathrm{Cl}^-] = \frac{0.050 \times 1.0 \times 10^{-4}}{0.100} = 5.0 \times 10^{-5}\mathrm{ M}
$$

$$
Q = (5.0 \times 10^{-5})^2 = 2.5 \times 10^{-9}
$$

Since $Q = 2.5 \times 10^{-9} \gt K_{sp} = 1.8 \times 10^{-10}$, a precipitate of $\mathrm{AgCl}$
will form.

</details>

<details>
<summary>Problem 3</summary>

Calculate the $\mathrm{pH}$ of $0.050\mathrm{ M}$ $\mathrm{NH}_3$ ($K_b = 1.8 \times 10^{-5}$).

**Solution:**

$$
\mathrm{NH}_3 + \mathrm{H}_2\mathrm{O} \rightleftharpoons \mathrm{NH}_4^+ + \mathrm{OH}^-
$$

$$
K_b = \frac{[\mathrm{NH}_4^+][\mathrm{OH}^-]}{[\mathrm{NH}_3]} = \frac{x^2}{0.050 - x}
$$

Approximation:
$x = \sqrt{1.8 \times 10^{-5} \times 0.050} = \sqrt{9.0 \times 10^{-7}} = 9.5 \times 10^{-4}$

Check: $9.5 \times 10^{-4} / 0.050 = 1.9\% \lt 5\%$. Valid.

$$
\mathrm{pOH} = -\log(9.5 \times 10^{-4}) = 3.02
$$

$$
\mathrm{pH} = 14.00 - 3.02 = 10.98
$$

</details>

<details>
<summary>Problem 4</summary>

Explain why adding $\mathrm{NH}_4\mathrm{Cl}$ to an $\mathrm{NH}_3$ solution decreases the
$\mathrm{pH}$.

**Solution:**

$\mathrm{NH}_4\mathrm{Cl}$ dissociates completely to give $\mathrm{NH}_4^+$, the conjugate acid of
$\mathrm{NH}_3$. This is the **common ion effect**:

$$
\mathrm{NH}_3 + \mathrm{H}_2\mathrm{O} \rightleftharpoons \mathrm{NH}_4^+ + \mathrm{OH}^-
$$

Adding $\mathrm{NH}_4^+$ shifts the equilibrium to the left (Le Chatelier's principle), decreasing
$[\mathrm{OH}^-]$ and therefore increasing $[\mathrm{H}^+]$, which lowers the $\mathrm{pH}$.

</details>
