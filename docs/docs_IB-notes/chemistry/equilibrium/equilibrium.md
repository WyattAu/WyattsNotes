---
id: equilibrium
title: Chemical Equilibrium
description:
  IB Chemistry — dynamic equilibrium, Le Chatelier's principle, equilibrium constants, and acid-base
  equilibrium.
slug: equilibrium
---

## Dynamic Equilibrium

### Reversible Reactions

Many reactions are reversible: reactants form products, and products can re-form reactants. This is
represented with a double arrow:

$$
\text{A} + \text{B} \rightleftharpoons \text{C} + \text{D}
$$

### Closed Systems

Equilibrium can only be established in a **closed system** — one where no matter can enter or leave.

### Dynamic Nature

At equilibrium:

- Both forward and reverse reactions continue to occur.
- The rates of the forward and reverse reactions are equal.
- The concentrations of all species remain constant (not necessarily equal).
- Macroscopic properties (colour, pressure, pH) are constant.

### Characteristics of Equilibrium

| Property          | Description                          |
| ----------------- | ------------------------------------ |
| Forward rate      | Equals reverse rate                  |
| Concentrations    | Constant (but not necessarily equal) |
| Can be approached | From either direction                |
| Dynamic           | Both reactions continue              |
| Closed system     | Required                             |

---

## The Equilibrium Constant

### $K_c$ — Concentration Equilibrium Constant

For the reaction $a\text{A} + b\text{B} \rightleftharpoons c\text{C} + d\text{D}$:

$$
K_c = \frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}
$$

- Only gases and aqueous species are included.
- Pure solids and pure liquids are NOT included (their activity $= 1$).
- Square brackets denote equilibrium concentrations in mol/L.
- $K_c$ is dimensionless (but concentrations are still used in the calculation).

### $K_p$ — Pressure Equilibrium Constant

For gaseous reactions:

$$
K_p = \frac{(p_C)^c(p_D)^d}{(p_A)^a(p_B)^b}
$$

where $p_X$ is the partial pressure of gas $X$ at equilibrium.

### Relationship Between $K_c$ and $K_p$

$$
K_p = K_c(RT)^{\Delta n}
$$

where $\Delta n = (\text{moles of gaseous products}) - (\text{moles of gaseous reactants})$.

:::info[Example]

For N$_2$(g) + 3H$_2$(g) $\rightleftharpoons$ 2NH$_3$(g), $\Delta n = 2 - 4 = -2$.

$$
K_p = K_c(RT)^{-2} = \frac{K_c}{(RT)^2}
$$

:::

### The Reaction Quotient ($Q$)

The reaction quotient has the same form as $K_c$ but uses **current** (non-equilibrium)
concentrations:

$$
Q_c = \frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}
$$

| Comparison | Meaning                                       |
| ---------- | --------------------------------------------- |
| $Q \lt K$  | Reaction proceeds forward (more products)     |
| $Q = K$    | System is at equilibrium                      |
| $Q \gt K$  | Reaction proceeds in reverse (more reactants) |

---

## Le Chatelier's Principle

### Statement

If a system at equilibrium is subjected to a change, the system will shift to counteract that change
and restore equilibrium.

### Effect of Concentration Changes

| Change              | System Response           |
| ------------------- | ------------------------- |
| Increase [reactant] | Shift to products (right) |
| Decrease [reactant] | Shift to reactants (left) |
| Increase [product]  | Shift to reactants (left) |
| Decrease [product]  | Shift to products (right) |

### Effect of Pressure Changes (Gases)

| Change            | System Response                       |
| ----------------- | ------------------------------------- |
| Increase pressure | Shift to side with fewer moles of gas |
| Decrease pressure | Shift to side with more moles of gas  |

**Important**: Changing pressure by adding an inert gas does NOT shift the equilibrium (partial
pressures of reacting gases are unchanged).

### Effect of Temperature Changes

| Change               | System Response                | Effect on $K$ |
| -------------------- | ------------------------------ | ------------- |
| Increase temperature | Shift in endothermic direction | $K$ changes   |
| Decrease temperature | Shift in exothermic direction  | $K$ changes   |

:::warning[Exam Tip]

Le Chatelier's principle does NOT apply to the equilibrium constant. The equilibrium constant only
changes with temperature. Changes in concentration, pressure, or adding a catalyst do NOT change
$K$.

:::

### Effect of a Catalyst

- A catalyst increases the rate of both forward and reverse reactions equally.
- It does NOT shift the equilibrium position.
- It does NOT change the value of $K$.
- It helps the system reach equilibrium faster.

---

## Equilibrium Calculations

### ICE Tables

ICE (Initial, Change, Equilibrium) tables are used to organise equilibrium calculations.

:::info[Example]

For the reaction H$_2$(g) + I$_2$(g) $\rightleftharpoons$ 2HI(g), $K_c = 50.5$ at
$448\degree\text{C}$.

If $1.0\text{ mol}$ of H$_2$ and $1.0\text{ mol}$ of I$_2$ are placed in a $1.0\text{ L}$ flask:

|             | H$_2$   | I$_2$   | HI    |
| ----------- | ------- | ------- | ----- |
| Initial     | 1.0     | 1.0     | 0     |
| Change      | $-x$    | $-x$    | $+2x$ |
| Equilibrium | $1.0-x$ | $1.0-x$ | $2x$  |

$$
K_c = \frac{(2x)^2}{(1.0-x)(1.0-x)} = \frac{4x^2}{(1.0-x)^2} = 50.5
$$

$$
\frac{2x}{1.0-x} = \sqrt{50.5} = 7.11
$$

$$
2x = 7.11 - 7.11x
$$

$$
9.11x = 7.11 \implies x = 0.781
$$

Equilibrium concentrations: [H$_2$] = [I$_2$] = $0.219\text{ mol/L}$, [HI] = $1.562\text{ mol/L}$.

:::

### Calculating $K$ from Given Data

1. Determine equilibrium concentrations (using ICE table if needed).
2. Substitute into the equilibrium expression.
3. Calculate $K$.

---

## Industrial Applications

### The Haber Process

$$
\text{N}_2(\text{g}) + 3\text{H}_2(\text{g}) \rightleftharpoons 2\text{NH}_3(\text{g}) \quad \Delta H = -92\text{ kJ/mol}
$$

| Condition   | Le Chatelier Prediction                     | Industrial Choice                                              |
| ----------- | ------------------------------------------- | -------------------------------------------------------------- |
| Temperature | Low (exothermic) favours products           | $400\text{--}500\degree\text{C}$ (compromise: reasonable rate) |
| Pressure    | High (fewer moles of gas on product side)   | $150\text{--}300\text{ atm}$ (compromise: cost/safety)         |
| Catalyst    | Does not change position but speeds up rate | Iron catalyst                                                  |

### The Contact Process

$$
2\text{SO}_2(\text{g}) + \text{O}_2(\text{g}) \rightleftharpoons 2\text{SO}_3(\text{g}) \quad \Delta H = -197\text{ kJ/mol}
$$

| Condition   | Le Chatelier Prediction   | Industrial Choice                         |
| ----------- | ------------------------- | ----------------------------------------- |
| Temperature | Low (exothermic)          | $400\text{--}450\degree\text{C}$          |
| Pressure    | High (fewer moles of gas) | $1\text{--}2\text{ atm}$ (cost effective) |
| Catalyst    | V$_2$O$_5$ catalyst       | V$_2$O$_5$                                |

---

## Acid-Base Equilibrium

### The pH Scale

$$
\text{pH} = -\log[\text{H}^+]
$$

| pH      | Description                      |
| ------- | -------------------------------- |
| $\lt 7$ | Acidic                           |
| $= 7$   | Neutral (at $25\degree\text{C}$) |
| $\gt 7$ | Basic (alkaline)                 |

### Strong and Weak Acids

| Property              | Strong Acid               | Weak Acid               |
| --------------------- | ------------------------- | ----------------------- |
| Dissociation          | Complete                  | Partial                 |
| $[\text{H}^+]$ vs $c$ | $[\text{H}^+] = c$        | $[\text{H}^+] \lt c$    |
| Equilibrium           | No equilibrium            | Equilibrium established |
| pH                    | Lower (for same $c$)      | Higher (for same $c$)   |
| Examples              | HCl, HNO$_3$, H$_2$SO$_4$ | CH$_3$COOH, HF, HCN     |

### Acid Dissociation Constant ($K_a$)

For a weak acid HA:

$$
\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^-
$$

$$
K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]}
$$

### Base Dissociation Constant ($K_b$)

For a weak base B:

$$
\text{B} + \text{H}_2\text{O} \rightleftharpoons \text{BH}^+ + \text{OH}^-
$$

$$
K_b = \frac{[\text{BH}^+][\text{OH}^-]}{[\text{B}]}
$$

### Ionic Product of Water ($K_w$)

$$
\text{H}_2\text{O} \rightleftharpoons \text{H}^+ + \text{OH}^-
$$

$$
K_w = [\text{H}^+][\text{OH}^-] = 1.0 \times 10^{-14}\text{ (at }25\degree\text{C)}
$$

### p$K_a$ and p$K_b$

$$
\text{p}K_a = -\log K_a
$$

$$
\text{p}K_b = -\log K_b
$$

### Relationship Between $K_a$ and $K_b$

For a conjugate acid-base pair:

$$
K_a \times K_b = K_w = 1.0 \times 10^{-14}
$$

$$
\text{p}K_a + \text{p}K_b = 14
$$

### pH of Weak Acids

For a weak acid HA of concentration $c$:

$$
[\text{H}^+] = \sqrt{K_a \times c}
$$

$$
\text{pH} = \frac{1}{2}(\text{p}K_a - \log c)
$$

(approximation valid when $K_a$ is small: $[\text{HA}]_{\text{eq}} \approx c$)

:::info[Example]

Calculate the pH of $0.10\text{ M}$ ethanoic acid ($K_a = 1.8 \times 10^{-5}$).

$$
[\text{H}^+] = \sqrt{1.8 \times 10^{-5} \times 0.10} = \sqrt{1.8 \times 10^{-6}} = 1.34 \times 10^{-3}\text{ mol/L}
$$

$$
\text{pH} = -\log(1.34 \times 10^{-3}) = 2.87
$$

:::

---

## Buffers

### Definition

A **buffer solution** resists changes in pH when small amounts of acid or base are added. It
consists of:

- A weak acid and its conjugate base, OR
- A weak base and its conjugate acid.

### Henderson-Hasselbalch Equation

$$
\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}
$$

### Buffer Capacity

The buffer is most effective when:

$$
[\text{HA}] = [\text{A}^-] \implies \text{pH} = \text{p}K_a
$$

A buffer works best within $\pm 1$ pH unit of its $\text{p}K_a$.

### How Buffers Work

1. **Adding acid (H$^+$)**: the conjugate base (A$^-$) reacts with the added H$^+$ to form more HA,
   minimising pH change.
2. **Adding base (OH$^-$)**: the weak acid (HA) reacts with the added OH$^-$ to form A$^-$ and
   H$_2$O, minimising pH change.

:::info[Example]

A buffer contains $0.20\text{ M}$ CH$_3$COOH ($\text{p}K_a = 4.76$) and $0.30\text{ M}$ CH$_3$COONa.
Calculate the pH.

$$
\text{pH} = 4.76 + \log\!\left(\frac{0.30}{0.20}\right) = 4.76 + \log(1.5) = 4.76 + 0.18 = 4.94
$$

:::

---

## Neutralisation and Indicators

### Strong Acid + Strong Base

$$
\text{pH} = 7 \text{ at equivalence point}
$$

### Weak Acid + Strong Base

$$
\text{pH} \gt 7 \text{ at equivalence point}
$$

### Strong Acid + Weak Base

$$
\text{pH} \lt 7 \text{ at equivalence point}
$$

### Indicators

An acid-base indicator is a weak acid that has different colours in its protonated and deprotonated
forms.

| Indicator        | pH Range  | Colour Change         |
| ---------------- | --------- | --------------------- |
| Methyl orange    | 3.1--4.4  | Red $\to$ yellow      |
| Bromothymol blue | 6.0--7.6  | Yellow $\to$ blue     |
| Phenolphthalein  | 8.3--10.0 | Colourless $\to$ pink |

---

## Solubility Product ($K_{sp}$)

### Definition

For a sparingly soluble salt $\text{M}_a\text{X}_b$:

$$
\text{M}_a\text{X}_b(s) \rightleftharpoons a\text{M}^{b+}(aq) + b\text{X}^{a-}(aq)
$$

$$
K_{sp} = [\text{M}^{b+}]^a[\text{X}^{a-}]^b
$$

### Common $K_{sp}$ Values

| Salt     | $K_{sp}$              |
| -------- | --------------------- |
| AgCl     | $1.8 \times 10^{-10}$ |
| AgBr     | $5.0 \times 10^{-13}$ |
| AgI      | $8.3 \times 10^{-17}$ |
| BaSO$_4$ | $1.1 \times 10^{-10}$ |
| CaCO$_3$ | $3.4 \times 10^{-9}$  |
| PbCl$_2$ | $1.7 \times 10^{-5}$  |

### Predicting Precipitation

Compare the **ion product** ($Q$) with $K_{sp}$:

| Condition      | Result                             |
| -------------- | ---------------------------------- |
| $Q \lt K_{sp}$ | Unsaturated (no precipitate)       |
| $Q = K_{sp}$   | Saturated (at equilibrium)         |
| $Q \gt K_{sp}$ | Supersaturated (precipitate forms) |

### Common Ion Effect

The solubility of a salt decreases when a common ion is present.

:::info[Example]

The $K_{sp}$ of AgCl is $1.8 \times 10^{-10}$. Calculate the solubility of AgCl in:

**(a)** Pure water:

$$
s^2 = 1.8 \times 10^{-10} \implies s = 1.34 \times 10^{-5}\text{ mol/L}
$$

**(b)** $0.10\text{ M}$ NaCl:

$$
[\text{Ag}^+][\text{Cl}^-] = s \times 0.10 = 1.8 \times 10^{-10}
$$

$$
s = \frac{1.8 \times 10^{-10}}{0.10} = 1.8 \times 10^{-9}\text{ mol/L}
$$

The solubility is much lower due to the common ion effect.

:::

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

For the equilibrium
$2\text{SO}_2(\text{g}) + \text{O}_2(\text{g}) \rightleftharpoons 2\text{SO}_3(\text{g})$, what
happens when the pressure is increased?

The product side has 2 moles of gas, the reactant side has 3. The equilibrium shifts to the right
(fewer moles of gas), increasing [SO$_3$] and $K_p$... wait, $K_p$ does not change. Only the
position shifts.

### Question 2 (Paper 2 style)

For the reaction
$\text{PCl}_5(\text{g}) \rightleftharpoons \text{PCl}_3(\text{g}) + \text{Cl}_2(\text{g})$,
$1.0\text{ mol}$ of PCl$_5$ is placed in a $2.0\text{ L}$ flask at $250\degree\text{C}$. At
equilibrium, $0.40\text{ mol}$ of Cl$_2$ is present.

**(a)** Calculate $K_c$.

|             | PCl$_5$ | PCl$_3$ | Cl$_2$  |
| ----------- | ------- | ------- | ------- |
| Initial     | 0.50    | 0       | 0       |
| Change      | $-0.20$ | $+0.20$ | $+0.20$ |
| Equilibrium | 0.30    | 0.20    | 0.20    |

$$
K_c = \frac{[\text{PCl}_3][\text{Cl}_2]}{[\text{PCl}_5]} = \frac{(0.20)(0.20)}{0.30} = \frac{0.04}{0.30} = 0.133
$$

**(b)** Calculate the percentage dissociation of PCl$_5$.

$$
\%\text{ dissociation} = \frac{0.20}{0.50} \times 100\% = 40\%
$$

### Question 3 (Paper 2 style)

Calculate the pH of $0.050\text{ M}$ NH$_3$ ($K_b = 1.8 \times 10^{-5}$).

$$
[\text{OH}^-] = \sqrt{K_b \times c} = \sqrt{1.8 \times 10^{-5} \times 0.050} = \sqrt{9.0 \times 10^{-7}} = 9.49 \times 10^{-4}
$$

$$
\text{pOH} = -\log(9.49 \times 10^{-4}) = 3.02
$$

$$
\text{pH} = 14 - 3.02 = 10.98
$$

### Question 4 (Paper 1 style)

Which salt is most soluble?

A. AgCl ($K_{sp} = 1.8 \times 10^{-10}$) B. AgBr ($K_{sp} = 5.0 \times 10^{-13}$) C. AgI
($K_{sp} = 8.3 \times 10^{-17}$) D. BaSO$_4$ ($K_{sp} = 1.1 \times 10^{-10}$)

**Answer: D** — BaSO$_4$ has the highest $K_{sp}$, but this comparison is only valid for salts with
the same stoichiometry (1:1). For a fair comparison of solubility, convert to molar solubility. All
four are 1:1 salts, so the highest $K_{sp}$ gives the highest solubility: BaSO$_4$.

---

## Summary

| Concept               | Formula                                                            |
| --------------------- | ------------------------------------------------------------------ |
| $K_c$                 | $K_c = \dfrac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}$ |
| $K_p$                 | $K_p = K_c(RT)^{\Delta n}$                                         |
| pH                    | $\text{pH} = -\log[\text{H}^+]$                                    |
| $K_w$                 | $K_w = [\text{H}^+][\text{OH}^-] = 10^{-14}$                       |
| Henderson-Hasselbalch | $\text{pH} = \text{p}K_a + \log\dfrac{[\text{A}^-]}{[\text{HA}]}$  |
| $K_{sp}$              | $K_{sp} = [\text{M}^{b+}]^a[\text{X}^{a-}]^b$                      |

:::tip[Exam Strategy]

For equilibrium calculations, always set up an ICE table. For Le Chatelier questions, be precise
about what changes and what stays the same (only $K$ changes with temperature). For acid-base
problems, identify whether the acid/base is strong or weak first. For $K_{sp}$, check the
stoichiometry carefully.

:::

---

## Equilibrium: Extended Topics

### The van't Hoff Equation

The effect of temperature on the equilibrium constant:

$$
\ln\!\left(\frac{K_2}{K_1}\right) = -\frac{\Delta H^\circ}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)
$$

This is analogous to the Arrhenius equation.

:::info[Example]

For the reaction N$_2$O$_4$(g) $\rightleftharpoons$ 2NO$_2$(g), $\Delta H^\circ = +57\text{ kJ/mol}$
and $K = 0.115$ at $298\text{ K}$. Find $K$ at $350\text{ K}$.

$$
\ln\!\left(\frac{K_2}{0.115}\right) = -\frac{57000}{8.314}\left(\frac{1}{350} - \frac{1}{298}\right)
$$

$$
= -6856 \times (-0.000500) = 3.428
$$

$$
\frac{K_2}{0.115} = e^{3.428} = 30.8
$$

$$
K_2 = 3.54
$$

As expected for an endothermic reaction, $K$ increases with temperature.

:::

### Quantitative Le Chatelier Calculations

When a change is made to a system at equilibrium, a new equilibrium is established. The new
concentrations can be found by setting up a new ICE table.

:::info[Example]

For the reaction PCl$_5$(g) $\rightleftharpoons$ PCl$_3$(g) + Cl$_2$(g), $K_c = 0.0211$ at
$500\text{ K}$.

At equilibrium in a $1\text{ L}$ flask: [PCl$_5$] $= 0.200\text{ M}$, [PCl$_3$] $= [Cl_2]$
$= 0.0650\text{ M}$.

If $0.100\text{ mol}$ of Cl$_2$ is added, find the new equilibrium concentrations.

After adding Cl$_2$: [PCl$_5$] $= 0.200$, [PCl$_3$] $= 0.0650$, [Cl$_2$] $= 0.165$.

$$
Q_c = \frac{(0.0650)(0.165)}{0.200} = 0.0536 \gt K_c = 0.0211
$$

The reaction shifts left. Let $x$ be the moles of Cl$_2$ that react:

|             | PCl$_5$   | PCl$_3$    | Cl$_2$    |
| ----------- | --------- | ---------- | --------- |
| Initial     | 0.200     | 0.0650     | 0.165     |
| Change      | $+x$      | $-x$       | $-x$      |
| Equilibrium | $0.200+x$ | $0.0650-x$ | $0.165-x$ |

$$
\frac{(0.0650-x)(0.165-x)}{0.200+x} = 0.0211
$$

$$
(0.0650-x)(0.165-x) = 0.0211(0.200+x)
$$

$$
0.01073 - 0.2300x + x^2 = 0.004220 + 0.0211x
$$

$$
x^2 - 0.2511x + 0.00651 = 0
$$

$$
x = \frac{0.2511 \pm \sqrt{0.06305 - 0.02604}}{2} = \frac{0.2511 \pm 0.1923}{2}
$$

$x = 0.2217$ or $x = 0.0294$.

Since $x \le 0.0650$: $x = 0.0294$.

New equilibrium: [PCl$_5$] $= 0.229\text{ M}$, [PCl$_3$] $= 0.0356\text{ M}$, [Cl$_2$]
$= 0.136\text{ M}$.

:::

### Acid-Base Extended: Polyprotic Acids

Polyprotic acids can donate more than one proton.

**Carbonic acid** (H$_2$CO$_3$):

$$
\text{H}_2\text{CO}_3 \rightleftharpoons \text{H}^+ + \text{HCO}_3^- \quad K_{a1} = 4.3 \times 10^{-7}
$$

$$
\text{HCO}_3^- \rightleftharpoons \text{H}^+ + \text{CO}_3^{2-} \quad K_{a2} = 4.8 \times 10^{-11}
$$

Note: $K_{a1} \gg K_{a2}$, so the first dissociation dominates.

### pH of Salt Solutions

- Salt of strong acid + strong base: neutral (pH = 7).
- Salt of strong acid + weak base: acidic (pH $\lt$ 7).
- Salt of weak acid + strong base: basic (pH $\gt$ 7).
- Salt of weak acid + weak base: depends on relative $K_a$ and $K_b$.

:::info[Example]

Calculate the pH of $0.10\text{ M}$ sodium ethanoate (CH$_3$COONa). $K_a$(CH$_3$COOH)
$= 1.8 \times 10^{-5}$.

$$
K_b = \frac{K_w}{K_a} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}
$$

$$
[\text{OH}^-] = \sqrt{K_b \times c} = \sqrt{5.56 \times 10^{-10} \times 0.10} = 7.46 \times 10^{-6}
$$

$$
\text{pOH} = 5.13, \quad \text{pH} = 14 - 5.13 = 8.87
$$

The solution is basic, as expected for the salt of a weak acid and strong base.

:::

---

## Additional IB Exam-Style Questions

### Question 5 (Paper 2 style)

For the equilibrium:
$2\text{SO}_2(\text{g}) + \text{O}_2(\text{g}) \rightleftharpoons 2\text{SO}_3(\text{g})$,
$\Delta H = -198\text{ kJ/mol}$.

**(a)** Explain the effect of increasing temperature on the equilibrium yield of SO$_3$.

Since the forward reaction is exothermic, increasing temperature shifts the equilibrium to the left
(endothermic direction). This decreases the yield of SO$_3$ and increases $K$... wait, for an
exothermic reaction, $K$ decreases with temperature. Let me correct: increasing temperature shifts
equilibrium LEFT, decreasing [SO$_3$] and DECREASING $K$.

**(b)** Explain the effect of increasing pressure on the equilibrium yield of SO$_3$.

There are 3 moles of gas on the left and 2 on the right. Increasing pressure shifts the equilibrium
to the right (fewer moles), increasing the yield of SO$_3$.

**(c)** Explain why a catalyst does not change the equilibrium yield.

A catalyst increases the rate of both forward and reverse reactions equally, so the equilibrium
position is unchanged. It only helps the system reach equilibrium faster.

### Question 6 (Paper 1 style)

What is the pH of a $0.010\text{ M}$ solution of Ba(OH)$_2$?

Ba(OH)$_2$ is a strong base that dissociates completely: Ba(OH)$_2$ $\to$ Ba$^{2+}$ + 2OH$^-$.

$$
[\text{OH}^-] = 2 \times 0.010 = 0.020\text{ M}
$$

$$
\text{pOH} = -\log(0.020) = 1.70
$$

$$
\text{pH} = 14 - 1.70 = 12.30
$$

### Question 7 (Paper 2 style)

The solubility of PbI$_2$ at $25\degree\text{C}$ is $1.4 \times 10^{-3}\text{ mol/L}$.

**(a)** Calculate $K_{sp}$ for PbI$_2$.

$$
\text{PbI}_2(s) \rightleftharpoons \text{Pb}^{2+}(aq) + 2\text{I}^-(aq)
$$

$$
[\text{Pb}^{2+}] = 1.4 \times 10^{-3}\text{ M}, \quad [\text{I}^-] = 2(1.4 \times 10^{-3}) = 2.8 \times 10^{-3}\text{ M}
$$

$$
K_{sp} = [\text{Pb}^{2+}][\text{I}^-]^2 = (1.4 \times 10^{-3})(2.8 \times 10^{-3})^2 = (1.4 \times 10^{-3})(7.84 \times 10^{-6})
$$

$$
= 1.1 \times 10^{-8}
$$

**(b)** Will a precipitate form when $50\text{ mL}$ of $0.010\text{ M}$ Pb(NO$_3$)$_2$ is mixed with
$50\text{ mL}$ of $0.020\text{ M}$ KI?

After mixing (volumes double, concentrations halve):

$$
[\text{Pb}^{2+}] = 0.005\text{ M}, \quad [\text{I}^-] = 0.010\text{ M}
$$

$$
Q = [\text{Pb}^{2+}][\text{I}^-]^2 = (0.005)(0.010)^2 = 5.0 \times 10^{-7}
$$

Since $Q = 5.0 \times 10^{-7} \gt K_{sp} = 1.1 \times 10^{-8}$, a precipitate of PbI$_2$ will form.

### Question 8 (Paper 1 style)

Which indicator would be most suitable for the titration of a weak acid (CH$_3$COOH) with a strong
base (NaOH)?

A. Methyl orange (pH range 3.1--4.4) B. Bromothymol blue (pH range 6.0--7.6) C. Phenolphthalein (pH
range 8.3--10.0)

**Answer: C.** A weak acid-strong base titration has an equivalence point with pH $\gt$ 7, so
phenolphthalein is appropriate.
