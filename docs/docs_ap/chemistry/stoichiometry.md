---
title: Stoichiometry
date: 2026-04-14
tags:
  - Chemistry
  - AP
categories:
  - Chemistry
slug: stoichiometry
---

## The Mole Concept (CED Unit 1)

### Avogadro's Number

$$
N_A = 6.022 \times 10^{23} \text{ particles/mol}
$$

### Molar Mass

The molar mass of a substance is the mass of one mole, expressed in g/mol. It is numerically equal
to the atomic/molecular formula mass in amu.

| Substance                           | Molar Mass (g/mol) |
| ----------------------------------- | ------------------ |
| H$_2$O                              | 18.02              |
| NaCl                                | 58.44              |
| $\text{CaCO}_3$                     | 100.09             |
| $\text{C}_6\text{H}_{12}\text{O}_6$ | 180.16             |

### Conversions

$$
\text{moles} = \frac{\text{mass (g)}}{\text{molar mass (g/mol)}}
$$

$$
\text{number of particles} = \text{moles} \times N_A
$$

### Percent Composition

$$
\%\text{ element} = \frac{n \times \text{molar mass of element}}{\text{molar mass of compound}} \times 100
$$

:::info[Example]

Find the percent composition of water.

$$
\%\text{H} = \frac{2(1.008)}{18.02} \times 100 = 11.19\%
$$

$$
\%\text{O} = \frac{16.00}{18.02} \times 100 = 88.81\%
$$

:::

## Empirical and Molecular Formulas

### Empirical Formula

The simplest whole-number ratio of atoms in a compound.

### Molecular Formula

The actual number of atoms of each element in a molecule. The molecular formula is a whole-number
multiple of the empirical formula.

$$
\text{Molecular Formula} = n \times \text{Empirical Formula}
$$

where $n = \frac{\text{Molecular Mass}}{\text{Empirical Formula Mass}}$.

:::info[Example]

A compound contains 40.0% C, 6.7% H, and 53.3% O by mass. Its molar mass is $180 \text{ g/mol}$.
Find the empirical and molecular formulas.

Assume 100 g sample:

$$
\text{mol C} = \frac{40.0}{12.01} = 3.33, \quad \text{mol H} = \frac{6.7}{1.008} = 6.65, \quad \text{mol O} = \frac{53.3}{16.00} = 3.33
$$

Ratio: $3.33 : 6.65 : 3.33 = 1 : 2 : 1$.

Empirical formula: $\text{CH}_2\text{O}$ (molar mass = $30.03 \text{ g/mol}$).

$$
n = \frac{180}{30.03} \approx 6
$$

Molecular formula: $\text{C}_6\text{H}_{12}\text{O}_6$ (glucose).

:::

## Balancing Chemical Equations

### Rules

1. Write the unbalanced equation with correct formulas.
2. Count atoms of each element on both sides.
3. Add coefficients to balance one element at a time.
4. Save polyatomic ions that appear on both sides as a unit.
5. If a fraction appears, multiply all coefficients by the denominator.
6. Verify the balance.

:::info[Example]

Balance the combustion of propane:

$$
\text{C}_3\text{H}_8 + \text{O}_2 \to \text{CO}_2 + \text{H}_2\text{O}
$$

Balance C: $3\text{CO}_2$

Balance H: $4\text{H}_2\text{O}$

Balance O: $3(2) + 4(1) = 10$ O on right, so $5\text{O}_2$ on left.

$$
\text{C}_3\text{H}_8 + 5\text{O}_2 \to 3\text{CO}_2 + 4\text{H}_2\text{O}
$$

:::

## Stoichiometric Calculations (CED Unit 4)

### Mole-to-Mole Conversions

Use the balanced equation coefficients as a mole ratio.

### Mass-to-Mass Conversions

$$
\text{mass A} \xrightarrow{\div \text{MM}_A} \text{moles A} \xrightarrow{\text{ratio}} \text{moles B} \xrightarrow{\times \text{MM}_B} \text{mass B}
$$

### Limiting Reactant

The **limiting reactant** is the reactant that is completely consumed first and determines the
maximum amount of product formed.

**Steps:**

1. Convert all reactant masses to moles.
2. Divide each by its stoichiometric coefficient.
3. The smallest value corresponds to the limiting reactant.

### Percent Yield

$$
\%\text{ Yield} = \frac{\text{Actual Yield}}{\text{Theoretical Yield}} \times 100
$$

:::info[Example]

If $25.0 \text{ g}$ of $\text{NH}_3$ reacts with $40.0 \text{ g}$ of $\text{O}_2$:

$$
4\text{NH}_3 + 5\text{O}_2 \to 4\text{NO} + 6\text{H}_2\text{O}
$$

Find the limiting reactant and theoretical yield of NO.

$$
\text{mol NH}_3 = \frac{25.0}{17.03} = 1.468
$$

$$
\text{mol O}_2 = \frac{40.0}{32.00} = 1.250
$$

Divide by coefficients: $\text{NH}_3: 1.468/4 = 0.367$, $\text{O}_2: 1.250/5 = 0.250$.

$\text{O}_2$ is limiting.

$$
\text{mol NO} = 1.250 \times \frac{4}{5} = 1.000 \text{ mol}
$$

$$
\text{mass NO} = 1.000 \times 30.01 = 30.0 \text{ g}
$$

If only $24.0 \text{ g}$ of NO was actually produced:

$$
\%\text{ Yield} = \frac{24.0}{30.0} \times 100 = 80.0\%
$$

:::

## Solutions and Concentration (CED Unit 4)

### Molarity

$$
M = \frac{n}{V} = \frac{\text{moles of solute}}{\text{liters of solution}}
$$

### Dilution

$$
M_1 V_1 = M_2 V_2
$$

### Solution Stoichiometry

Use molarity to convert between volume and moles, then apply stoichiometric ratios.

:::info[Example]

What volume of $0.500 \text{ M } \text{HCl}$ is needed to react completely with $25.0 \text{ mL}$ of
$0.200 \text{ M } \text{NaOH}$?

$$
\text{HCl} + \text{NaOH} \to \text{NaCl} + \text{H}_2\text{O}
$$

$$
\text{mol NaOH} = 0.200 \times 0.0250 = 0.00500 \text{ mol}
$$

$$
\text{mol HCl} = 0.00500 \text{ mol (1:1 ratio)}
$$

$$
V_{\text{HCl}} = \frac{0.00500}{0.500} = 0.0100 \text{ L} = 10.0 \text{ mL}
$$

:::

## Gas Laws (CED Unit 3)

### Ideal Gas Law

$$
PV = nRT
$$

where
$R = 0.08206 \text{ L}\cdot\text{atm}/(\text{mol}\cdot\text{K}) = 8.314 \text{ J}/(\text{mol}\cdot\text{K})$.

### Combined Gas Law

$$
\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}
$$

### Dalton's Law of Partial Pressures

$$
P_{\text{total}} = P_1 + P_2 + \cdots + P_n
$$

### STP

Standard Temperature and Pressure: $T = 273.15 \text{ K}$, $P = 1 \text{ atm}$.

At STP, one mole of ideal gas occupies $22.4 \text{ L}$.

### Gas Stoichiometry

Use $PV = nRT$ to convert between gas volume and moles.

:::info[Example]

What volume of $\text{O}_2$ at STP is produced by decomposing $5.00 \text{ g}$ of $\text{KClO}_3$?

$$
2\text{KClO}_3(s) \to 2\text{KCl}(s) + 3\text{O}_2(g)
$$

$$
\text{mol KClO}_3 = \frac{5.00}{122.55} = 0.0408 \text{ mol}
$$

$$
\text{mol O}_2 = 0.0408 \times \frac{3}{2} = 0.0612 \text{ mol}
$$

$$
V = \frac{nRT}{P} = \frac{(0.0612)(0.08206)(273.15)}{1.00} = 1.37 \text{ L}
$$

Or using molar volume at STP: $V = 0.0612 \times 22.4 = 1.37 \text{ L}$.

:::

## Net Ionic Equations (CED Unit 4)

### Steps

1. Write the balanced molecular equation.
2. Write the complete ionic equation (split strong electrolytes into ions).
3. Cancel spectator ions.
4. Write the net ionic equation.

### Solubility Rules

| Soluble                                      | Exceptions                                                          |
| -------------------------------------------- | ------------------------------------------------------------------- |
| $\text{Na}^+$, $\text{K}^+$, $\text{NH}_4^+$ | None                                                                |
| Nitrates ($\text{NO}_3^-$)                   | None                                                                |
| Acetates ($\text{CH}_3\text{COO}^-$)         | None                                                                |
| Chlorides ($\text{Cl}^-$)                    | $\text{Ag}^+$, $\text{Pb}^{2+}$, $\text{Hg}_2^{2+}$                 |
| Sulfates ($\text{SO}_4^{2-}$)                | $\text{Ba}^{2+}$, $\text{Pb}^{2+}$, $\text{Ca}^{2+}$, $\text{Ag}^+$ |

| Insoluble                       | Exceptions                                                                       |
| ------------------------------- | -------------------------------------------------------------------------------- |
| Hydroxides ($\text{OH}^-$)      | $\text{Na}^+$, $\text{K}^+$, $\text{Ba}^{2+}$, $\text{Ca}^{2+}$ (slightly)       |
| Carbonates ($\text{CO}_3^{2-}$) | $\text{Na}^+$, $\text{K}^+$, $\text{NH}_4^+$                                     |
| Phosphates ($\text{PO}_4^{3-}$) | $\text{Na}^+$, $\text{K}^+$, $\text{NH}_4^+$                                     |
| Sulfides ($\text{S}^{2-}$)      | $\text{Na}^+$, $\text{K}^+$, $\text{NH}_4^+$, $\text{Ca}^{2+}$, $\text{Ba}^{2+}$ |

### Strong Acids and Bases

**Strong acids:** $\text{HCl}$, $\text{HBr}$, $\text{HI}$, $\text{HNO}_3$, $\text{H}_2\text{SO}_4$,
$\text{HClO}_4$.

**Strong bases:** Group 1 hydroxides, $\text{Ca}(\text{OH})_2$, $\text{Sr}(\text{OH})_2$,
$\text{Ba}(\text{OH})_2$.

:::info[Example]

Write the net ionic equation for mixing $\text{Pb}(\text{NO}_3)_2$ and $\text{KI}$.

Molecular: $\text{Pb}(\text{NO}_3)_2(aq) + 2\text{KI}(aq) \to \text{PbI}_2(s) + 2\text{KNO}_3(aq)$

Complete ionic:
$\text{Pb}^{2+}(aq) + 2\text{NO}_3^-(aq) + 2\text{K}^+(aq) + 2\text{I}^-(aq) \to \text{PbI}_2(s) + 2\text{K}^+(aq) + 2\text{NO}_3^-(aq)$

Net ionic: $\text{Pb}^{2+}(aq) + 2\text{I}^-(aq) \to \text{PbI}_2(s)$

:::

## Common Pitfalls

1. **Using molar mass instead of molecular mass** or vice versa. Molar mass has units of g/mol.
2. **Incorrectly identifying the limiting reactant.** Always divide moles by the stoichiometric
   coefficient; the smallest result is the limiting reactant.
3. **Forgetting to convert temperature to Kelvin** in gas law calculations.
4. **Using the wrong value of $R$.** Match $R$ to the units of pressure and volume.
5. **Not balancing equations before stoichiometric calculations.** The mole ratio comes from the
   balanced equation.
6. **Confusing molarity with moles.** $M = n/V$; you must multiply by volume to get moles.
7. **Including spectator ions in net ionic equations.** Cancel ions that appear unchanged on both
   sides.

## Practice Questions

1. A compound is 36.5% Na, 25.4% S, and 38.1% O by mass. Find its empirical formula.

2. If $10.0 \text{ g}$ of $\text{Al}$ reacts with $15.0 \text{ g}$ of $\text{Cl}_2$:
   $2\text{Al} + 3\text{Cl}_2 \to 2\text{AlCl}_3$. Find the limiting reactant and the theoretical
   yield of $\text{AlCl}_3$.

3. What is the molarity of a solution prepared by dissolving $5.85 \text{ g}$ of $\text{NaCl}$ in
   enough water to make $250.0 \text{ mL}$ of solution?

4. A gas occupies $3.50 \text{ L}$ at $300 \text{ K}$ and $1.20 \text{ atm}$. What volume does it
   occupy at STP?

5. Write the net ionic equation for the reaction between $\text{BaCl}_2(aq)$ and
   $\text{Na}_2\text{SO}_4(aq)$.

6. A $0.150 \text{ M } \text{H}_2\text{SO}_4$ solution is titrated with
   $0.200 \text{ M } \text{NaOH}$. If $25.0 \text{ mL}$ of acid is used, what volume of base is
   required?

7. A compound with molar mass $92.0 \text{ g/mol}$ is 69.6% Mn and 30.4% O. Find the molecular
   formula.

8. Calculate the volume of $\text{CO}_2$ produced at $25^\circ\text{C}$ and $1.05 \text{ atm}$ when
   $10.0 \text{ g}$ of $\text{CaCO}_3$ decomposes:
   $\text{CaCO}_3(s) \to \text{CaO}(s) + \text{CO}_2(g)$.
