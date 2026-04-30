---
title: Acids and Bases (Advanced)
description: "IB Chemistry — advanced pH calculations, buffer solutions, indicator theory, acid deposition, and solubility products."
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

---

## Worked Examples

**Worked Example: pH of a very dilute strong acid**

Calculate the $\mathrm{pH}$ of $1.0 \times 10^{-8}\mathrm{ M}$ $\mathrm{HCl}$ at $25\degree\mathrm{C}$.

<details>
<summary>Solution</summary>

At this concentration, the contribution from water autoionization ($[\mathrm{H}^+] = 10^{-7}\mathrm{ M}$) is
significant and cannot be ignored. Let $x = [\mathrm{OH}^-]$ from water autoionization:

$$[\mathrm{H}^+]_{\mathrm{total}} = 1.0 \times 10^{-8} + x$$

$$K_w = [\mathrm{H}^+][\mathrm{OH}^-] = (1.0 \times 10^{-8} + x)(x) = 1.0 \times 10^{-14}$$

$$x^2 + 1.0 \times 10^{-8}x - 1.0 \times 10^{-14} = 0$$

Using the quadratic formula:

$$x = \frac{-1.0 \times 10^{-8} + \sqrt{(1.0 \times 10^{-8})^2 + 4(1.0 \times 10^{-14})}}{2} = \frac{-1.0 \times 10^{-8} + 2.00 \times 10^{-7}}{2} = 9.5 \times 10^{-8}$$

$$[\mathrm{H}^+]_{\mathrm{total}} = 1.0 \times 10^{-8} + 9.5 \times 10^{-8} = 1.05 \times 10^{-7}\mathrm{ M}$$

$$\mathrm{pH} = -\log(1.05 \times 10^{-7}) = 6.98$$

The $\mathrm{pH}$ is close to 7 but slightly acidic, as expected for a very dilute strong acid. Ignoring
water autoionization would give the incorrect result $\mathrm{pH} = 8.00$ (a basic $\mathrm{pH}$ from
adding acid), which violates chemical intuition.

</details>

**Worked Example: pH at the equivalence point of a weak acid--strong base titration**

Calculate the $\mathrm{pH}$ at the equivalence point when $25.0\mathrm{ mL}$ of $0.100\mathrm{ M}$
$\mathrm{CH}_3\mathrm{COOH}$ ($K_a = 1.8 \times 10^{-5}$) is titrated with $0.100\mathrm{ M}$
$\mathrm{NaOH}$.

<details>
<summary>Solution</summary>

At the equivalence point, all of the weak acid has been converted to its conjugate base:

$$n(\mathrm{CH}_3\mathrm{COOH}) = 0.0250 \times 0.100 = 0.00250\mathrm{ mol}$$

$$V(\mathrm{NaOH}) = \frac{0.00250}{0.100} = 25.0\mathrm{ mL}$$

$$V_{\mathrm{total}} = 50.0\mathrm{ mL} = 0.0500\mathrm{ L}$$

$$[\mathrm{CH}_3\mathrm{COO}^-] = \frac{0.00250}{0.0500} = 0.0500\mathrm{ M}$$

The conjugate base hydrolyses water:

$$\mathrm{CH}_3\mathrm{COO}^- + \mathrm{H}_2\mathrm{O} \rightleftharpoons \mathrm{CH}_3\mathrm{COOH} + \mathrm{OH}^-$$

$$K_b = \frac{K_w}{K_a} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}$$

$$[\mathrm{OH}^-] = \sqrt{K_b \times [\mathrm{CH}_3\mathrm{COO}^-]} = \sqrt{5.56 \times 10^{-10} \times 0.0500} = 5.27 \times 10^{-6}\mathrm{ M}$$

$$\mathrm{pOH} = -\log(5.27 \times 10^{-6}) = 5.28$$

$$\mathrm{pH} = 14.00 - 5.28 = 8.72$$

The equivalence point is basic because the conjugate base of a weak acid is itself a weak base. Phenolphthalein
(transition range 8.3--10.0) is a suitable indicator. Bromothymol blue (6.0--7.6) would change colour
before reaching the equivalence point and would give a systematically low titre reading.

</details>

**Worked Example: Selective precipitation using $K_{sp}$**

A solution contains $0.020\mathrm{ M}$ $\mathrm{Cl}^-$ and $0.020\mathrm{ M}$ $\mathrm{CrO}_4^{2-}$. Solid
$\mathrm{AgNO}_3$ is added gradually. $K_{sp}(\mathrm{AgCl}) = 1.8 \times 10^{-10}$,
$K_{sp}(\mathrm{Ag}_2\mathrm{CrO}_4) = 1.1 \times 10^{-12}$. Determine which salt precipitates first, the
$[\mathrm{Ag}^+]$ at which precipitation begins, and the $[\mathrm{Ag}^+]$ at which the second salt begins
to precipitate.

<details>
<summary>Solution</summary>

**Step 1: Calculate the threshold $[\mathrm{Ag}^+]$ for each salt.**

For $\mathrm{AgCl}$:

$$[\mathrm{Ag}^+] = \frac{K_{sp}}{[\mathrm{Cl}^-]} = \frac{1.8 \times 10^{-10}}{0.020} = 9.0 \times 10^{-9}\mathrm{ M}$$

For $\mathrm{Ag}_2\mathrm{CrO}_4$:

$$[\mathrm{Ag}^+] = \sqrt{\frac{K_{sp}}{[\mathrm{CrO}_4^{2-}]}} = \sqrt{\frac{1.1 \times 10^{-12}}{0.020}} = 7.4 \times 10^{-6}\mathrm{ M}$$

**Step 2: Identify which precipitates first.**

$\mathrm{AgCl}$ precipitates first since it requires a lower $[\mathrm{Ag}^+]$ ($9.0 \times 10^{-9}\mathrm{ M}$
vs $7.4 \times 10^{-6}\mathrm{ M}$).

**Step 3: Calculate $[\mathrm{Cl}^-]$ remaining when $\mathrm{Ag}_2\mathrm{CrO}_4$ begins to precipitate.**

When $[\mathrm{Ag}^+] = 7.4 \times 10^{-6}\mathrm{ M}$:

$$[\mathrm{Cl}^-]_{\mathrm{remaining}} = \frac{K_{sp}}{[\mathrm{Ag}^+]} = \frac{1.8 \times 10^{-10}}{7.4 \times 10^{-6}} = 2.4 \times 10^{-5}\mathrm{ M}$$

Fraction of $\mathrm{Cl}^-$ precipitated: $\dfrac{0.020 - 2.4 \times 10^{-5}}{0.020} \times 100\% = 99.9\%$

This analysis underpins Mohr's method for argentometric determination of chloride: the red colour of
$\mathrm{Ag}_2\mathrm{CrO}_4$ appears only after virtually all $\mathrm{Cl}^-$ has been removed.

</details>

**Worked Example: Buffer preparation from a weak base**

Prepare an $\mathrm{NH}_3$/$\mathrm{NH}_4\mathrm{Cl}$ buffer with $\mathrm{pH} = 9.50$. Given
$K_b(\mathrm{NH}_3) = 1.8 \times 10^{-5}$. Calculate the mass of $\mathrm{NH}_4\mathrm{Cl}$
($M = 53.49\mathrm{ g/mol}$) that must be dissolved in $500\mathrm{ mL}$ of $0.200\mathrm{ M}$
$\mathrm{NH}_3$.

<details>
<summary>Solution</summary>

**Step 1: Find the $\mathrm{p}K_a$ of the conjugate acid $\mathrm{NH}_4^+$.**

$$\mathrm{p}K_b = -\log(1.8 \times 10^{-5}) = 4.74$$

$$\mathrm{p}K_a = 14.00 - 4.74 = 9.26$$

**Step 2: Apply the Henderson-Hasselbalch equation.**

$$9.50 = 9.26 + \log\frac{[\mathrm{NH}_3]}{[\mathrm{NH}_4^+]}$$

$$\log\frac{[\mathrm{NH}_3]}{[\mathrm{NH}_4^+]} = 0.24$$

$$\frac{[\mathrm{NH}_3]}{[\mathrm{NH}_4^+]} = 10^{0.24} = 1.74$$

**Step 3: Solve for the required $[\mathrm{NH}_4^+]$.**

$$[\mathrm{NH}_4^+] = \frac{0.200}{1.74} = 0.115\mathrm{ M}$$

**Step 4: Calculate the mass of $\mathrm{NH}_4\mathrm{Cl}$.**

$$n(\mathrm{NH}_4\mathrm{Cl}) = 0.115 \times 0.500 = 0.0575\mathrm{ mol}$$

$$m(\mathrm{NH}_4\mathrm{Cl}) = 0.0575 \times 53.49 = 3.08\mathrm{ g}$$

</details>

**Worked Example: Titration curve analysis for a polyprotic acid**

$25.0\mathrm{ mL}$ of $0.100\mathrm{ M}$ $\mathrm{H}_3\mathrm{PO}_4$ ($K_{a1} = 7.5 \times 10^{-3}$,
$K_{a2} = 6.2 \times 10^{-8}$, $K_{a3} = 4.8 \times 10^{-13}$) is titrated with $0.100\mathrm{ M}$
$\mathrm{NaOH}$. Calculate the $\mathrm{pH}$ at the first and second equivalence points and identify
suitable indicators.

<details>
<summary>Solution</summary>

**First equivalence point ($25.0\mathrm{ mL}$ $\mathrm{NaOH}$ added):**

All $\mathrm{H}_3\mathrm{PO}_4$ is converted to $\mathrm{H}_2\mathrm{PO}_4^-$ (an amphoteric species).

$$[\mathrm{H}_2\mathrm{PO}_4^-] = \frac{0.00250}{0.0500} = 0.0500\mathrm{ M}$$

For an amphoteric species, the $\mathrm{pH}$ is approximately the average of the two relevant
$\mathrm{p}K_a$ values:

$$\mathrm{pH} \approx \frac{\mathrm{p}K_{a1} + \mathrm{p}K_{a2}}{2} = \frac{2.12 + 7.21}{2} = 4.67$$

A suitable indicator: bromocresol green (3.8--5.4) or methyl red (4.4--6.2).

**Second equivalence point ($50.0\mathrm{ mL}$ $\mathrm{NaOH}$ added):**

All $\mathrm{H}_2\mathrm{PO}_4^-$ is converted to $\mathrm{HPO}_4^{2-}$ (also amphoteric).

$$[\mathrm{HPO}_4^{2-}] = \frac{0.00250}{0.0750} = 0.0333\mathrm{ M}$$

$$\mathrm{pH} \approx \frac{\mathrm{p}K_{a2} + \mathrm{p}K_{a3}}{2} = \frac{7.21 + 12.32}{2} = 9.76$$

A suitable indicator: phenolphthalein (8.3--10.0).

**Third equivalence point:** Not achievable in aqueous solution because $K_{a3}$ is too small
($4.8 \times 10^{-13}$) for complete neutralisation of the third proton.

</details>

---

## Common Pitfalls

- **Assuming complete dissociation for all diprotic acids**: $\mathrm{H}_2\mathrm{SO}_4$ has a complete
  first dissociation but a partial second ($K_{a2} = 1.2 \times 10^{-2}$), so
  $[\mathrm{H}^+] \neq 2[\mathrm{acid}]$. For $\mathrm{H}_2\mathrm{CO}_3$, both dissociation steps are
  weak. Always check the magnitude of each $K_a$ before making simplifying assumptions.

- **Using $\mathrm{pOH} = 14 - \mathrm{pH}$ without specifying temperature**: $K_w = 1.0 \times 10^{-14}$
  only at $25\degree\mathrm{C}$. At $37\degree\mathrm{C}$, $K_w \approx 2.4 \times 10^{-14}$, so
  $\mathrm{pH} + \mathrm{pOH} = 13.62$. Always state the temperature assumption explicitly.

- **Applying Henderson-Hasselbalch to strong acid--base mixtures**: The equation requires a weak acid
  and its conjugate base. For a strong acid titrated with a strong base, calculate the excess
  $[\mathrm{H}^+]$ or $[\mathrm{OH}^-]$ directly from stoichiometry.

- **Forgetting dilution when mixing buffer components**: When two solutions are combined to make a
  buffer, the total volume changes. Convert all quantities to moles first, then recalculate
  concentrations in the combined volume before applying the Henderson-Hasselbalch equation.

- **Comparing $K_{sp}$ values across different stoichiometries**: $K_{sp}(\mathrm{AgCl}) = 1.8 \times 10^{-10}$
  and $K_{sp}(\mathrm{Ag}_2\mathrm{CrO}_4) = 1.1 \times 10^{-12}$, but $\mathrm{Ag}_2\mathrm{CrO}_4$ is
  more soluble in water because its $K_{sp}$ expression contains $[\mathrm{Ag}^+]^2$. Always calculate
  molar solubility from $K_{sp}$ before comparing.

- **Ignoring water autoionization for dilute solutions**: When the calculated $[\mathrm{H}^+]$ from the
  acid or base alone is below $10^{-6}\mathrm{ M}$, the contribution from water ($10^{-7}\mathrm{ M}$) is
  comparable and must be included via the full quadratic.

- **Confusing buffer capacity with buffer range**: Buffer capacity (total moles of acid or base that can
  be absorbed) depends on the absolute concentrations of the buffer components, not their ratio. A
  $0.01\mathrm{ M}$ buffer at $\mathrm{pH} = \mathrm{p}K_a$ has far less capacity than a $1.0\mathrm{ M}$
  buffer at the same $\mathrm{pH}$.

- **Assuming the 5% rule is always valid**: The approximation $[\mathrm{HA}] \approx c_0$ fails when
  $K_a$ is large relative to $c_0$. Always verify by computing
  $x/c_0 \times 100\%$. If it exceeds 5%, solve the full quadratic.

- **Using the wrong $\mathrm{p}K_a$ in Henderson-Hasselbalch**: When working with a weak base (e.g.,
  $\mathrm{NH}_3$), use the $\mathrm{p}K_a$ of its conjugate acid ($\mathrm{NH}_4^+$), not the
  $\mathrm{p}K_b$ of the base itself. The relationship is
  $\mathrm{p}K_a + \mathrm{p}K_b = 14.00$.

- **Assuming the common ion effect changes $K_{sp}$**: Adding a common ion shifts the equilibrium
  position (decreasing solubility), but $K_{sp}$ itself is a thermodynamic constant that depends only
  on temperature.

---

## Exam-Style Problems

1. Calculate the $\mathrm{pH}$ of the solution formed when $15.0\mathrm{ mL}$ of $0.100\mathrm{ M}$
   $\mathrm{H}_2\mathrm{SO}_4$ is added to $35.0\mathrm{ mL}$ of $0.100\mathrm{ M}$ $\mathrm{NaOH}$ at
   $25\degree\mathrm{C}$. ($K_{a2}$ of $\mathrm{HSO}_4^-$ = $1.2 \times 10^{-2}$.) State all
   assumptions and justify their validity. **[Medium]**

2. A buffer is prepared by dissolving $4.10\mathrm{ g}$ of sodium ethanoate
   ($\mathrm{CH}_3\mathrm{COONa}$, $M = 82.03\mathrm{ g/mol}$) in $250\mathrm{ mL}$ of
   $0.200\mathrm{ M}$ ethanoic acid ($\mathrm{p}K_a = 4.76$). (a) Calculate the buffer $\mathrm{pH}$.
   (b) Calculate the new $\mathrm{pH}$ after adding $5.0\mathrm{ mL}$ of $0.100\mathrm{ M}$
   $\mathrm{HCl}$. (c) Calculate the percentage change in $\mathrm{pH}$ and comment on the
   effectiveness of the buffer. **[Medium]**

3. Will a precipitate form when $25.0\mathrm{ mL}$ of $2.0 \times 10^{-4}\mathrm{ M}$
   $\mathrm{Pb}(\mathrm{NO}_3)_2$ is mixed with $25.0\mathrm{ mL}$ of $1.0 \times 10^{-3}\mathrm{ M}$
   $\mathrm{NaI}$? $K_{sp}(\mathrm{PbI}_2) = 7.1 \times 10^{-9}$. If a precipitate forms, calculate
   $[\mathrm{Pb}^{2+}]$ and $[\mathrm{I}^-]$ remaining at equilibrium. **[Hard]**

4. $20.0\mathrm{ mL}$ of $0.150\mathrm{ M}$ $\mathrm{NH}_3$ ($K_b = 1.8 \times 10^{-5}$) is titrated
   with $0.150\mathrm{ M}$ $\mathrm{HCl}$. Calculate the $\mathrm{pH}$ at each of the following
   volumes of $\mathrm{HCl}$ added: (a) $0.0\mathrm{ mL}$, (b) $10.0\mathrm{ mL}$, (c) $20.0\mathrm{ mL}$
   (equivalence point), (d) $25.0\mathrm{ mL}$. Sketch the approximate titration curve and label the
   buffer region. **[Hard]**

5. The solubility of $\mathrm{CaF}_2$ in pure water is $2.15 \times 10^{-4}\mathrm{ M}$ at
   $25\degree\mathrm{C}$. (a) Calculate $K_{sp}$. (b) Calculate the solubility of $\mathrm{CaF}_2$ in
   $0.050\mathrm{ M}$ $\mathrm{CaCl}_2$. (c) Determine the maximum concentration of $\mathrm{NaF}$
   that can coexist with $0.010\mathrm{ M}$ $\mathrm{CaCl}_2$ without precipitation. **[Medium]**

6. Explain why phenolphthalein is a suitable indicator for the titration of ethanoic acid with sodium
   hydroxide, but methyl orange is not. Support your answer with a quantitative calculation of the
   equivalence point $\mathrm{pH}$ and reference to the transition ranges of both indicators.
   **[Medium]**

7. A student prepares a buffer by mixing $100\mathrm{ mL}$ of $0.200\mathrm{ M}$
   $\mathrm{CH}_3\mathrm{COOH}$ with $100\mathrm{ mL}$ of $0.100\mathrm{ M}$ $\mathrm{NaOH}$. (a)
   Calculate the buffer $\mathrm{pH}$. (b) Determine the maximum volume of $0.100\mathrm{ M}$
   $\mathrm{HCl}$ that can be added before the $\mathrm{pH}$ drops below $4.00$. (c) Comment on
   whether this buffer would be effective at $\mathrm{pH} = 4.00$ given the $\mathrm{p}K_a$ of
   ethanoic acid. **[Hard]**

8. An environmental scientist measures the $\mathrm{pH}$ of a lake at $4.50$. (a) Calculate
   $[\mathrm{H}^+]$ and $[\mathrm{SO}_4^{2-}]$, assuming the acidity is entirely from dissolved
   $\mathrm{H}_2\mathrm{SO}_4$ with complete dissociation of both protons. (b) Determine whether
   $\mathrm{CaSO}_4$ would precipitate if $[\mathrm{Ca}^{2+}] = 1.5 \times 10^{-3}\mathrm{ M}$.
   $K_{sp}(\mathrm{CaSO}_4) = 2.4 \times 10^{-5}$. (c) Calculate the minimum $[\mathrm{Ca}^{2+}]$
   required to initiate precipitation of $\mathrm{CaSO}_4$. **[Medium]**

---

## If You Get These Wrong, Revise:

- **Equilibrium principles (Le Chatelier, $K$ expressions)** → Review [./equilibrium/equilibrium](./equilibrium/equilibrium)
- **Stoichiometry and mole calculations** → Review [./stoichiometry/stoichiometry](./stoichiometry/stoichiometry)
- **Uncertainty propagation in titrations** → Review [./measurement-and-data-processing](./measurement-and-data-processing)
- **Electron configurations and ion formation** → Review [./atomic-theory](./atomic-theory)

