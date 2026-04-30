---
title: Chemical Equilibrium
description: IB Chemistry — dynamic equilibrium, Le Chatelier's principle, equilibrium
  constants, and acid-base equilibrium.
slug: equilibrium
---


## Dynamic Equilibrium

### Reversible Reactions

Many reactions are reversible: reactants form products, and products can re-form reactants. This is
represented with a double arrow:

$$
\mathrm{A} + \mathrm{B} \rightleftharpoons \mathrm{C} + \mathrm{D}
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

For the reaction $a\mathrm{A} + b\mathrm{B} \rightleftharpoons c\mathrm{C} + d\mathrm{D}$:

$$
K_c = \frac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}
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

where $\Delta n = (\mathrm{moles of gaseous products}) - (\mathrm{moles of gaseous reactants})$.

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
Q_c = \frac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}
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
$448\degree\mathrm{C}$.

If $1.0\mathrm{ mol}$ of H$_2$ and $1.0\mathrm{ mol}$ of I$_2$ are placed in a $1.0\mathrm{ L}$
flask:

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

Equilibrium concentrations: [H$_2$] = [I$_2$] = $0.219\mathrm{ mol/L}$, [HI] =
$1.562\mathrm{ mol/L}$.

:::

### Calculating $K$ from Given Data

1. Determine equilibrium concentrations (using ICE table if needed).
2. Substitute into the equilibrium expression.
3. Calculate $K$.

---

## Industrial Applications

### The Haber Process

$$
\mathrm{N}_2(\mathrm{g}) + 3\mathrm{H}_2(\mathrm{g}) \rightleftharpoons 2\mathrm{NH}_3(\mathrm{g}) \quad \Delta H = -92\mathrm{ kJ/mol}
$$

| Condition   | Le Chatelier Prediction                     | Industrial Choice                                                  |
| ----------- | ------------------------------------------- | ------------------------------------------------------------------ |
| Temperature | Low (exothermic) favours products           | $400\mathrm{--}500\degree\mathrm{C}$ (compromise: reasonable rate) |
| Pressure    | High (fewer moles of gas on product side)   | $150\mathrm{--}300\mathrm{ atm}$ (compromise: cost/safety)         |
| Catalyst    | Does not change position but speeds up rate | Iron catalyst                                                      |

### The Contact Process

$$
2\mathrm{SO}_2(\mathrm{g}) + \mathrm{O}_2(\mathrm{g}) \rightleftharpoons 2\mathrm{SO}_3(\mathrm{g}) \quad \Delta H = -197\mathrm{ kJ/mol}
$$

| Condition   | Le Chatelier Prediction   | Industrial Choice                             |
| ----------- | ------------------------- | --------------------------------------------- |
| Temperature | Low (exothermic)          | $400\mathrm{--}450\degree\mathrm{C}$          |
| Pressure    | High (fewer moles of gas) | $1\mathrm{--}2\mathrm{ atm}$ (cost effective) |
| Catalyst    | V$_2$O$_5$ catalyst       | V$_2$O$_5$                                    |

---

## Acid-Base Equilibrium

### The pH Scale

$$
\mathrm{pH} = -\log[\mathrm{H}^+]
$$

| pH      | Description                        |
| ------- | ---------------------------------- |
| $\lt 7$ | Acidic                             |
| $= 7$   | Neutral (at $25\degree\mathrm{C}$) |
| $\gt 7$ | Basic (alkaline)                   |

### Strong and Weak Acids

| Property                | Strong Acid               | Weak Acid               |
| ----------------------- | ------------------------- | ----------------------- |
| Dissociation            | Complete                  | Partial                 |
| $[\mathrm{H}^+]$ vs $c$ | $[\mathrm{H}^+] = c$      | $[\mathrm{H}^+] \lt c$  |
| Equilibrium             | No equilibrium            | Equilibrium established |
| pH                      | Lower (for same $c$)      | Higher (for same $c$)   |
| Examples                | HCl, HNO$_3$, H$_2$SO$_4$ | CH$_3$COOH, HF, HCN     |

### Acid Dissociation Constant ($K_a$)

For a weak acid HA:

$$
\mathrm{HA} \rightleftharpoons \mathrm{H}^+ + \mathrm{A}^-
$$

$$
K_a = \frac{[\mathrm{H}^+][\mathrm{A}^-]}{[\mathrm{HA}]}
$$

### Base Dissociation Constant ($K_b$)

For a weak base B:

$$
\mathrm{B} + \mathrm{H}_2\mathrm{O} \rightleftharpoons \mathrm{BH}^+ + \mathrm{OH}^-
$$

$$
K_b = \frac{[\mathrm{BH}^+][\mathrm{OH}^-]}{[\mathrm{B}]}
$$

### Ionic Product of Water ($K_w$)

$$
\mathrm{H}_2\mathrm{O} \rightleftharpoons \mathrm{H}^+ + \mathrm{OH}^-
$$

$$
K_w = [\mathrm{H}^+][\mathrm{OH}^-] = 1.0 \times 10^{-14}\mathrm{ (at }25\degree\mathrm{C)}
$$

### p$K_a$ and p$K_b$

$$
\mathrm{p}K_a = -\log K_a
$$

$$
\mathrm{p}K_b = -\log K_b
$$

### Relationship Between $K_a$ and $K_b$

For a conjugate acid-base pair:

$$
K_a \times K_b = K_w = 1.0 \times 10^{-14}
$$

$$
\mathrm{p}K_a + \mathrm{p}K_b = 14
$$

### pH of Weak Acids

For a weak acid HA of concentration $c$:

$$
[\mathrm{H}^+] = \sqrt{K_a \times c}
$$

$$
\mathrm{pH} = \frac{1}{2}(\mathrm{p}K_a - \log c)
$$

(approximation valid when $K_a$ is small: $[\mathrm{HA}]_{\mathrm{eq}} \approx c$)

:::info[Example]

Calculate the pH of $0.10\mathrm{ M}$ ethanoic acid ($K_a = 1.8 \times 10^{-5}$).

$$
[\mathrm{H}^+] = \sqrt{1.8 \times 10^{-5} \times 0.10} = \sqrt{1.8 \times 10^{-6}} = 1.34 \times 10^{-3}\mathrm{ mol/L}
$$

$$
\mathrm{pH} = -\log(1.34 \times 10^{-3}) = 2.87
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
\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\mathrm{A}^-]}{[\mathrm{HA}]}
$$

### Buffer Capacity

The buffer is most effective when:

$$
[\mathrm{HA}] = [\mathrm{A}^-] \implies \mathrm{pH} = \mathrm{p}K_a
$$

A buffer works best within $\pm 1$ pH unit of its $\mathrm{p}K_a$.

### How Buffers Work

1. **Adding acid (H$^+$)**: the conjugate base (A$^-$) reacts with the added H$^+$ to form more HA,
   minimising pH change.
2. **Adding base (OH$^-$)**: the weak acid (HA) reacts with the added OH$^-$ to form A$^-$ and
   H$_2$O, minimising pH change.

:::info[Example]

A buffer contains $0.20\mathrm{ M}$ CH$_3$COOH ($\mathrm{p}K_a = 4.76$) and $0.30\mathrm{ M}$
CH$_3$COONa. Calculate the pH.

$$
\mathrm{pH} = 4.76 + \log\!\left(\frac{0.30}{0.20}\right) = 4.76 + \log(1.5) = 4.76 + 0.18 = 4.94
$$

:::

---

## Neutralisation and Indicators

### Strong Acid + Strong Base

$$
\mathrm{pH} = 7 \mathrm{ at equivalence point}
$$

### Weak Acid + Strong Base

$$
\mathrm{pH} \gt 7 \mathrm{ at equivalence point}
$$

### Strong Acid + Weak Base

$$
\mathrm{pH} \lt 7 \mathrm{ at equivalence point}
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

For a sparingly soluble salt $\mathrm{M}_a\mathrm{X}_b$:

$$
\mathrm{M}_a\mathrm{X}_b(s) \rightleftharpoons a\mathrm{M}^{b+}(aq) + b\mathrm{X}^{a-}(aq)
$$

$$
K_{sp} = [\mathrm{M}^{b+}]^a[\mathrm{X}^{a-}]^b
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
s^2 = 1.8 \times 10^{-10} \implies s = 1.34 \times 10^{-5}\mathrm{ mol/L}
$$

**(b)** $0.10\mathrm{ M}$ NaCl:

$$
[\mathrm{Ag}^+][\mathrm{Cl}^-] = s \times 0.10 = 1.8 \times 10^{-10}
$$

$$
s = \frac{1.8 \times 10^{-10}}{0.10} = 1.8 \times 10^{-9}\mathrm{ mol/L}
$$

The solubility is much lower due to the common ion effect.

:::

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

For the equilibrium
$2\mathrm{SO}_2(\mathrm{g}) + \mathrm{O}_2(\mathrm{g}) \rightleftharpoons 2\mathrm{SO}_3(\mathrm{g})$,
what happens when the pressure is increased?

The product side has 2 moles of gas, the reactant side has 3. The equilibrium shifts to the right
(fewer moles of gas), increasing [SO$_3$]. Note that $K_p$ is a constant at a given temperature and
does not change; only the equilibrium position shifts.

### Question 2 (Paper 2 style)

For the reaction
$\mathrm{PCl}_5(\mathrm{g}) \rightleftharpoons \mathrm{PCl}_3(\mathrm{g}) + \mathrm{Cl}_2(\mathrm{g})$,
$1.0\mathrm{ mol}$ of PCl$_5$ is placed in a $2.0\mathrm{ L}$ flask at $250\degree\mathrm{C}$. At
equilibrium, $0.40\mathrm{ mol}$ of Cl$_2$ is present.

**(a)** Calculate $K_c$.

|             | PCl$_5$ | PCl$_3$ | Cl$_2$  |
| ----------- | ------- | ------- | ------- |
| Initial     | 0.50    | 0       | 0       |
| Change      | $-0.20$ | $+0.20$ | $+0.20$ |
| Equilibrium | 0.30    | 0.20    | 0.20    |

$$
K_c = \frac{[\mathrm{PCl}_3][\mathrm{Cl}_2]}{[\mathrm{PCl}_5]} = \frac{(0.20)(0.20)}{0.30} = \frac{0.04}{0.30} = 0.133
$$

**(b)** Calculate the percentage dissociation of PCl$_5$.

$$
\%\mathrm{ dissociation} = \frac{0.20}{0.50} \times 100\% = 40\%
$$

### Question 3 (Paper 2 style)

Calculate the pH of $0.050\mathrm{ M}$ NH$_3$ ($K_b = 1.8 \times 10^{-5}$).

$$
[\mathrm{OH}^-] = \sqrt{K_b \times c} = \sqrt{1.8 \times 10^{-5} \times 0.050} = \sqrt{9.0 \times 10^{-7}} = 9.49 \times 10^{-4}
$$

$$
\mathrm{pOH} = -\log(9.49 \times 10^{-4}) = 3.02
$$

$$
\mathrm{pH} = 14 - 3.02 = 10.98
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

| Concept               | Formula                                                                    |
| --------------------- | -------------------------------------------------------------------------- |
| $K_c$                 | $K_c = \dfrac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}$ |
| $K_p$                 | $K_p = K_c(RT)^{\Delta n}$                                                 |
| pH                    | $\mathrm{pH} = -\log[\mathrm{H}^+]$                                        |
| $K_w$                 | $K_w = [\mathrm{H}^+][\mathrm{OH}^-] = 10^{-14}$                           |
| Henderson-Hasselbalch | $\mathrm{pH} = \mathrm{p}K_a + \log\dfrac{[\mathrm{A}^-]}{[\mathrm{HA}]}$  |
| $K_{sp}$              | $K_{sp} = [\mathrm{M}^{b+}]^a[\mathrm{X}^{a-}]^b$                          |

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

For the reaction N$_2$O$_4$(g) $\rightleftharpoons$ 2NO$_2$(g),
$\Delta H^\circ = +57\mathrm{ kJ/mol}$ and $K = 0.115$ at $298\mathrm{ K}$. Find $K$ at
$350\mathrm{ K}$.

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
$500\mathrm{ K}$.

At equilibrium in a $1\mathrm{ L}$ flask: [PCl$_5$] $= 0.200\mathrm{ M}$, [PCl$_3$] $= [Cl_2]$
$= 0.0650\mathrm{ M}$.

If $0.100\mathrm{ mol}$ of Cl$_2$ is added, find the new equilibrium concentrations.

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

New equilibrium: [PCl$_5$] $= 0.229\mathrm{ M}$, [PCl$_3$] $= 0.0356\mathrm{ M}$, [Cl$_2$]
$= 0.136\mathrm{ M}$.

:::

### Acid-Base Extended: Polyprotic Acids

Polyprotic acids can donate more than one proton.

**Carbonic acid** (H$_2$CO$_3$):

$$
\mathrm{H}_2\mathrm{CO}_3 \rightleftharpoons \mathrm{H}^+ + \mathrm{HCO}_3^- \quad K_{a1} = 4.3 \times 10^{-7}
$$

$$
\mathrm{HCO}_3^- \rightleftharpoons \mathrm{H}^+ + \mathrm{CO}_3^{2-} \quad K_{a2} = 4.8 \times 10^{-11}
$$

Note: $K_{a1} \gg K_{a2}$, so the first dissociation dominates.

### pH of Salt Solutions

- Salt of strong acid + strong base: neutral (pH = 7).
- Salt of strong acid + weak base: acidic (pH $\lt$ 7).
- Salt of weak acid + strong base: basic (pH $\gt$ 7).
- Salt of weak acid + weak base: depends on relative $K_a$ and $K_b$.

:::info[Example]

Calculate the pH of $0.10\mathrm{ M}$ sodium ethanoate (CH$_3$COONa). $K_a$(CH$_3$COOH)
$= 1.8 \times 10^{-5}$.

$$
K_b = \frac{K_w}{K_a} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}
$$

$$
[\mathrm{OH}^-] = \sqrt{K_b \times c} = \sqrt{5.56 \times 10^{-10} \times 0.10} = 7.46 \times 10^{-6}
$$

$$
\mathrm{pOH} = 5.13, \quad \mathrm{pH} = 14 - 5.13 = 8.87
$$

The solution is basic, as expected for the salt of a weak acid and strong base.

:::

---

## Additional IB Exam-Style Questions

### Question 5 (Paper 2 style)

For the equilibrium:
$2\mathrm{SO}_2(\mathrm{g}) + \mathrm{O}_2(\mathrm{g}) \rightleftharpoons 2\mathrm{SO}_3(\mathrm{g})$,
$\Delta H = -198\mathrm{ kJ/mol}$.

**(a)** Explain the effect of increasing temperature on the equilibrium yield of SO$_3$.

Since the forward reaction is exothermic ($\Delta H \lt 0$), increasing temperature shifts the
equilibrium to the left (endothermic direction) by Le Chatelier's principle. This decreases the
yield of SO$_3$ and decreases $K$ (since $\ln K \propto -\Delta H / T$, increasing $T$ for an
exothermic reaction reduces $K$).

**(b)** Explain the effect of increasing pressure on the equilibrium yield of SO$_3$.

There are 3 moles of gas on the left and 2 on the right. Increasing pressure shifts the equilibrium
to the right (fewer moles), increasing the yield of SO$_3$.

**(c)** Explain why a catalyst does not change the equilibrium yield.

A catalyst increases the rate of both forward and reverse reactions equally, so the equilibrium
position is unchanged. It only helps the system reach equilibrium faster.

### Question 6 (Paper 1 style)

What is the pH of a $0.010\mathrm{ M}$ solution of Ba(OH)$_2$?

Ba(OH)$_2$ is a strong base that dissociates completely: Ba(OH)$_2$ $\to$ Ba$^{2+}$ + 2OH$^-$.

$$
[\mathrm{OH}^-] = 2 \times 0.010 = 0.020\mathrm{ M}
$$

$$
\mathrm{pOH} = -\log(0.020) = 1.70
$$

$$
\mathrm{pH} = 14 - 1.70 = 12.30
$$

### Question 7 (Paper 2 style)

The solubility of PbI$_2$ at $25\degree\mathrm{C}$ is $1.4 \times 10^{-3}\mathrm{ mol/L}$.

**(a)** Calculate $K_{sp}$ for PbI$_2$.

$$
\mathrm{PbI}_2(s) \rightleftharpoons \mathrm{Pb}^{2+}(aq) + 2\mathrm{I}^-(aq)
$$

$$
[\mathrm{Pb}^{2+}] = 1.4 \times 10^{-3}\mathrm{ M}, \quad [\mathrm{I}^-] = 2(1.4 \times 10^{-3}) = 2.8 \times 10^{-3}\mathrm{ M}
$$

$$
K_{sp} = [\mathrm{Pb}^{2+}][\mathrm{I}^-]^2 = (1.4 \times 10^{-3})(2.8 \times 10^{-3})^2 = (1.4 \times 10^{-3})(7.84 \times 10^{-6})
$$

$$
= 1.1 \times 10^{-8}
$$

**(b)** Will a precipitate form when $50\mathrm{ mL}$ of $0.010\mathrm{ M}$ Pb(NO$_3$)$_2$ is mixed
with $50\mathrm{ mL}$ of $0.020\mathrm{ M}$ KI?

After mixing (volumes double, concentrations halve):

$$
[\mathrm{Pb}^{2+}] = 0.005\mathrm{ M}, \quad [\mathrm{I}^-] = 0.010\mathrm{ M}
$$

$$
Q = [\mathrm{Pb}^{2+}][\mathrm{I}^-]^2 = (0.005)(0.010)^2 = 5.0 \times 10^{-7}
$$

Since $Q = 5.0 \times 10^{-7} \gt K_{sp} = 1.1 \times 10^{-8}$, a precipitate of PbI$_2$ will form.

### Question 8 (Paper 1 style)

Which indicator would be most suitable for the titration of a weak acid (CH$_3$COOH) with a strong
base (NaOH)?

A. Methyl orange (pH range 3.1--4.4) B. Bromothymol blue (pH range 6.0--7.6) C. Phenolphthalein (pH
range 8.3--10.0)

**Answer: C.** A weak acid-strong base titration has an equivalence point with pH $\gt$ 7, so
phenolphthalein is appropriate.

## Practice Problems

<details>
<summary>Question 1: ICE Table and $K_c$ Calculation</summary>

For the reaction $\mathrm{N}_2\mathrm{O}_4(g) \rightleftharpoons 2\mathrm{NO}_2(g)$,
$1.00\mathrm{ mol}$ of $\mathrm{N}_2\mathrm{O}_4$ is placed in a $2.00\mathrm{ L}$ flask at
$350\mathrm{ K}$. At equilibrium, the concentration of $\mathrm{NO}_2$ is $0.200\mathrm{ mol/L}$.
Calculate $K_c$.

</details>

<details>
<summary>Answer</summary>

Initial $[\mathrm{N}_2\mathrm{O}_4] = 1.00 / 2.00 = 0.500\mathrm{ mol/L}$

|             | $\mathrm{N}_2\mathrm{O}_4$ | $\mathrm{NO}_2$ |
| ----------- | -------------------------- | --------------- |
| Initial     | $0.500$                    | $0$             |
| Change      | $-0.100$                   | $+0.200$        |
| Equilibrium | $0.400$                    | $0.200$         |

Since $[\mathrm{NO}_2]_{\mathrm{eq}} = 0.200\mathrm{ mol/L}$ and it increases by $2x$, $x = 0.100$.

$$K_c = \frac{[\mathrm{NO}_2]^2}{[\mathrm{N}_2\mathrm{O}_4]} = \frac{(0.200)^2}{0.400} = \frac{0.0400}{0.400} = 0.100$$

</details>

<details>
<summary>Question 2: Le Chatelier's Principle</summary>

For the exothermic reaction
$\mathrm{N}_2(g) + 3\mathrm{H}_2(g) \rightleftharpoons 2\mathrm{NH}_3(g)$, predict and explain the
effect of each change on the equilibrium yield of $\mathrm{NH}_3$:

(a) Increasing pressure

(b) Increasing temperature

(c) Adding a catalyst

</details>

<details>
<summary>Answer</summary>

(a) There are 4 moles of gas on the left and 2 on the right. Increasing pressure shifts the
equilibrium to the right (fewer moles of gas), **increasing** the yield of $\mathrm{NH}_3$.

(b) The forward reaction is exothermic ($\Delta H \lt 0$). Increasing temperature shifts the
equilibrium to the left (endothermic direction), **decreasing** the yield of $\mathrm{NH}_3$.

(c) A catalyst increases the rate of both forward and reverse reactions equally. It does **not**
change the equilibrium position or the yield of $\mathrm{NH}_3$. It only helps the system reach
equilibrium faster.

</details>

<details>
<summary>Question 3: Buffer pH Calculation</summary>

A buffer solution is prepared by mixing $100\mathrm{ mL}$ of $0.20\mathrm{ M}$
$\mathrm{CH}_3\mathrm{COOH}$ ($\mathrm{p}K_a = 4.76$) with $50\mathrm{ mL}$ of $0.20\mathrm{ M}$
$\mathrm{NaOH}$. Calculate the pH of the resulting buffer.

</details>

<details>
<summary>Answer</summary>

The $\mathrm{NaOH}$ reacts with $\mathrm{CH}_3\mathrm{COOH}$:

$$n(\mathrm{CH}_3\mathrm{COOH})_{\mathrm{initial}} = 0.100 \times 0.20 = 0.0200\mathrm{ mol}$$

$$n(\mathrm{NaOH}) = 0.050 \times 0.20 = 0.0100\mathrm{ mol}$$

After reaction:

$$n(\mathrm{CH}_3\mathrm{COOH})_{\mathrm{remaining}} = 0.0200 - 0.0100 = 0.0100\mathrm{ mol}$$

$$n(\mathrm{CH}_3\mathrm{COO}^-)_{\mathrm{formed}} = 0.0100\mathrm{ mol}$$

Total volume = $150\mathrm{ mL} = 0.150\mathrm{ L}$:

$$[\mathrm{CH}_3\mathrm{COOH}] = \frac{0.0100}{0.150} = 0.0667\mathrm{ M}$$

$$[\mathrm{CH}_3\mathrm{COO}^-] = \frac{0.0100}{0.150} = 0.0667\mathrm{ M}$$

$$\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\mathrm{A}^-]}{[\mathrm{HA}]} = 4.76 + \log\frac{0.0667}{0.0667} = 4.76 + \log(1) = 4.76$$

</details>

<details>
<summary>Question 4: Solubility Product and Common Ion Effect</summary>

The $K_{sp}$ of $\mathrm{PbCl}_2$ is $1.7 \times 10^{-5}$ at $25\degree\mathrm{C}$.

(a) Calculate the molar solubility of $\mathrm{PbCl}_2$ in pure water.

(b) Calculate the molar solubility of $\mathrm{PbCl}_2$ in $0.10\mathrm{ M}$ $\mathrm{NaCl}$
solution.

</details>

<details>
<summary>Answer</summary>

(a) Let $s$ = molar solubility of $\mathrm{PbCl}_2$:

$$\mathrm{PbCl}_2(s) \rightleftharpoons \mathrm{Pb}^{2+}(aq) + 2\mathrm{Cl}^-(aq)$$

$$K_{sp} = [\mathrm{Pb}^{2+}][\mathrm{Cl}^-]^2 = s \times (2s)^2 = 4s^3$$

$$s^3 = \frac{1.7 \times 10^{-5}}{4} = 4.25 \times 10^{-6}$$

$$s = 1.62 \times 10^{-2}\mathrm{ mol/L}$$

(b) In $0.10\mathrm{ M}$ $\mathrm{NaCl}$, $[\mathrm{Cl}^-]_{\mathrm{initial}} = 0.10\mathrm{ M}$:

$$K_{sp} = [\mathrm{Pb}^{2+}][\mathrm{Cl}^-]^2 = s \times (0.10 + 2s)^2 \approx s \times (0.10)^2$$

$$s = \frac{1.7 \times 10^{-5}}{0.010} = 1.7 \times 10^{-3}\mathrm{ mol/L}$$

The solubility decreases significantly due to the common ion effect.

</details>

<details>
<summary>Question 5: Weak Acid pH</summary>

Calculate the pH of a $0.050\mathrm{ M}$ solution of $\mathrm{HF}$. ($K_a = 6.8 \times 10^{-4}$)

</details>

<details>
<summary>Answer</summary>

$$[\mathrm{H}^+] = \sqrt{K_a \times c} = \sqrt{6.8 \times 10^{-4} \times 0.050} = \sqrt{3.4 \times 10^{-5}} = 5.83 \times 10^{-3}\mathrm{ mol/L}$$

$$\mathrm{pH} = -\log(5.83 \times 10^{-3}) = 2.23$$

</details>

---

## Related Content at Other Levels

- **A-Level Equilibria:** [Chemical Equilibrium](https://alevel.wyattau.com/docs/chemistry/chemical-equilibrium)
