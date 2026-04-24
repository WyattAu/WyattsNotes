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
N_A = 6.022 \times 10^{23} \mathrm{ particles/mol}
$$

One mole of any substance contains exactly $N_A$ entities (atoms, molecules, ions, formula units).
The mole is defined such that the molar mass of carbon-12 is exactly 12 g/mol.

### Molar Mass

The molar mass of a substance is the mass of one mole, expressed in g/mol. It is numerically equal
to the atomic/molecular formula mass in amu.

| Substance                                 | Molar Mass (g/mol) |
| ----------------------------------------- | ------------------ |
| H$_2$O                                    | 18.02              |
| NaCl                                      | 58.44              |
| $\mathrm{CaCO}_3$                         | 100.09             |
| $\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6$ | 180.16             |

### Conversions

$$
\mathrm{moles} = \frac{\mathrm{mass (g)}}{\mathrm{molar mass (g/mol)}}
$$

$$
\mathrm{number of particles} = \mathrm{moles} \times N_A
$$

These two equations are the foundation of all stoichiometric calculations. Always start by
converting the given information to moles, then use the balanced equation to relate moles of
different substances.

### Percent Composition

$$
\%\mathrm{ element} = \frac{n \times \mathrm{molar mass of element}}{\mathrm{molar mass of compound}} \times 100
$$

:::info[Example]

Find the percent composition of water.

$$
\%\mathrm{H} = \frac{2(1.008)}{18.02} \times 100 = 11.19\%
$$

$$
\%\mathrm{O} = \frac{16.00}{18.02} \times 100 = 88.81\%
$$

:::

Percent composition is useful for verifying empirical formulas and for determining the formula of an
unknown compound from experimental data.

### Worked Example: Percent Composition Verification

Verify that the percent composition of $\mathrm{Na}_2\mathrm{CO}_3$ is correct.

Molar mass: $2(22.99) + 12.01 + 3(16.00) = 105.99$ g/mol.

$$\%\mathrm{Na} = \frac{45.98}{105.99} \times 100 = 43.38\%$$

$$\%\mathrm{C} = \frac{12.01}{105.99} \times 100 = 11.33\%$$

$$\%\mathrm{O} = \frac{48.00}{105.99} \times 100 = 45.29\%$$

Sum: $43.38 + 11.33 + 45.29 = 100.00\%$. Verified.

## Empirical and Molecular Formulas

### Empirical Formula

The simplest whole-number ratio of atoms in a compound. It gives the relative numbers of atoms but
not the actual numbers.

### Molecular Formula

The actual number of atoms of each element in a molecule. The molecular formula is a whole-number
multiple of the empirical formula.

$$
\mathrm{Molecular Formula} = n \times \mathrm{Empirical Formula}
$$

where $n = \frac{\mathrm{Molecular Mass}}{\mathrm{Empirical Formula Mass}}$.

:::info[Example]

A compound contains 40.0% C, 6.7% H, and 53.3% O by mass. Its molar mass is $180 \mathrm{ g/mol}$.
Find the empirical and molecular formulas.

Assume 100 g sample:

$$
\mathrm{mol C} = \frac{40.0}{12.01} = 3.33, \quad \mathrm{mol H} = \frac{6.7}{1.008} = 6.65, \quad \mathrm{mol O} = \frac{53.3}{16.00} = 3.33
$$

Ratio: $3.33 : 6.65 : 3.33 = 1 : 2 : 1$.

Empirical formula: $\mathrm{CH}_2\mathrm{O}$ (molar mass = $30.03 \mathrm{ g/mol}$).

$$
n = \frac{180}{30.03} \approx 6
$$

Molecular formula: $\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6$ (glucose).

:::

### Combustion Analysis

When an unknown compound containing C, H, and possibly O is burned completely, the masses of CO$_2$
and H$_2$O produced are measured. These give the amounts of C and H in the original compound.

$$
\mathrm{mol C} = \mathrm{mol CO}_2 = \frac{\mathrm{mass of CO}_2}{44.01}
$$

$$
\mathrm{mol H} = 2 \times \mathrm{mol H}_2\mathrm{O} = 2 \times \frac{\mathrm{mass of H}_2\mathrm{O}}{18.02}
$$

If the mass of C + mass of H is less than the total mass of the sample, the difference is the mass
of oxygen.

### Worked Example: Combustion Analysis

A 0.250 g sample of a compound containing C, H, and O produces 0.366 g CO$_2$ and 0.150 g H$_2$O on
combustion. Find the empirical formula.

$$\mathrm{mol C} = \frac{0.366}{44.01} = 0.00832 \mathrm{ mol}$$

$$\mathrm{mass C} = 0.00832 \times 12.01 = 0.0999 \mathrm{ g}$$

$$\mathrm{mol H} = 2 \times \frac{0.150}{18.02} = 0.0166 \mathrm{ mol}$$

$$\mathrm{mass H} = 0.0166 \times 1.008 = 0.0168 \mathrm{ g}$$

$$\mathrm{mass O} = 0.250 - 0.0999 - 0.0168 = 0.133 \mathrm{ g}$$

$$\mathrm{mol O} = \frac{0.133}{16.00} = 0.00833 \mathrm{ mol}$$

Ratio: $0.00832 : 0.0166 : 0.00833 = 1 : 2 : 1$.

Empirical formula: $\mathrm{CH}_2\mathrm{O}$.

### Worked Example: Molecular Formula from Empirical Formula

A compound has the empirical formula $\mathrm{C}_3\mathrm{H}_4\mathrm{O}_3$ and a molecular mass of
approximately $176 \mathrm{ g/mol}$. Find the molecular formula.

Empirical formula mass:
$3(12.01) + 4(1.008) + 3(16.00) = 36.03 + 4.032 + 48.00 = 88.06 \mathrm{ g/mol}$.

$$n = \frac{176}{88.06} \approx 2$$

Molecular formula: $\mathrm{C}_6\mathrm{H}_8\mathrm{O}_6$.

### Worked Example: Combustion Analysis with Nitrogen

A 0.200 g sample of a compound containing C, H, and N produces 0.441 g CO$_2$, 0.180 g H$_2$O, and
0.069 g of N$_2$ on combustion with excess oxygen. Find the empirical formula.

$$\mathrm{mol C} = \frac{0.441}{44.01} = 0.01002 \mathrm{ mol}$$

$$\mathrm{mass C} = 0.01002 \times 12.01 = 0.1204 \mathrm{ g}$$

$$\mathrm{mol H} = 2 \times \frac{0.180}{18.02} = 0.01998 \mathrm{ mol}$$

$$\mathrm{mass H} = 0.01998 \times 1.008 = 0.02014 \mathrm{ g}$$

$$\mathrm{mol N} = \frac{0.069}{28.02} = 0.00246 \mathrm{ mol}$$

$$\mathrm{mass N} = 0.00246 \times 14.01 = 0.0345 \mathrm{ g}$$

Total mass accounted for: $0.1204 + 0.02014 + 0.0345 = 0.1750 \mathrm{ g}$, which matches the sample
mass within rounding.

Ratio: $0.01002 : 0.01998 : 0.00246 = 4.07 : 8.12 : 1 \approx 4 : 8 : 1$.

Empirical formula: $\mathrm{C}_4\mathrm{H}_8\mathrm{N}$.

## Balancing Chemical Equations

### Rules

1. Write the unbalanced equation with correct formulas.
2. Count atoms of each element on both sides.
3. Add coefficients to balance one element at a time, starting with the most complex substance.
4. Save polyatomic ions that appear on both sides as a unit.
5. If a fraction appears, multiply all coefficients by the denominator.
6. Verify the balance and ensure coefficients are in the lowest whole-number ratio.

:::info[Example]

Balance the combustion of propane:

$$
\mathrm{C}_3\mathrm{H}_8 + \mathrm{O}_2 \to \mathrm{CO}_2 + \mathrm{H}_2\mathrm{O}
$$

Balance C: $3\mathrm{CO}_2$

Balance H: $4\mathrm{H}_2\mathrm{O}$

Balance O: $3(2) + 4(1) = 10$ O on right, so $5\mathrm{O}_2$ on left.

$$
\mathrm{C}_3\mathrm{H}_8 + 5\mathrm{O}_2 \to 3\mathrm{CO}_2 + 4\mathrm{H}_2\mathrm{O}
$$

:::

### Worked Example: Balancing Complex Equations

Balance the reaction:
$\mathrm{C}_4\mathrm{H}_{10} + \mathrm{O}_2 \to \mathrm{CO}_2 + \mathrm{H}_2\mathrm{O}$.

C: 4 on left, so $4\mathrm{CO}_2$ on right.

H: 10 on left, so $5\mathrm{H}_2\mathrm{O}$ on right.

O on right: $4(2) + 5(1) = 13$. Need $\frac{13}{2}\mathrm{O}_2$. Multiply all by 2:

$$2\mathrm{C}_4\mathrm{H}_{10} + 13\mathrm{O}_2 \to 8\mathrm{CO}_2 + 10\mathrm{H}_2\mathrm{O}$$

## Stoichiometric Calculations (CED Unit 4)

### Mole-to-Mole Conversions

Use the balanced equation coefficients as a mole ratio. The coefficients are exact numbers (infinite
significant figures).

### Mass-to-Mass Conversions

$$
\mathrm{mass A} \xrightarrow{\div \mathrm{MM}_A} \mathrm{moles A} \xrightarrow{\mathrm{ratio}} \mathrm{moles B} \xrightarrow{\times \mathrm{MM}_B} \mathrm{mass B}
$$

### Limiting Reactant

The **limiting reactant** is the reactant that is completely consumed first and determines the
maximum amount of product formed.

**Steps:**

1. Convert all reactant masses to moles.
2. Divide each by its stoichiometric coefficient.
3. The smallest value corresponds to the limiting reactant.

This method works because dividing by the coefficient gives the "number of reaction batches" each
reactant could support. The limiting reactant supports the fewest batches.

### Percent Yield

$$
\%\mathrm{ Yield} = \frac{\mathrm{Actual Yield}}{\mathrm{Theoretical Yield}} \times 100
$$

Theoretical yield is calculated from the limiting reactant. Actual yield is measured experimentally.
Yield is always less than 100% due to side reactions, incomplete reactions, and product loss during
purification.

:::info[Example]

If $25.0 \mathrm{ g}$ of $\mathrm{NH}_3$ reacts with $40.0 \mathrm{ g}$ of $\mathrm{O}_2$:

$$
4\mathrm{NH}_3 + 5\mathrm{O}_2 \to 4\mathrm{NO} + 6\mathrm{H}_2\mathrm{O}
$$

Find the limiting reactant and theoretical yield of NO.

$$
\mathrm{mol NH}_3 = \frac{25.0}{17.03} = 1.468
$$

$$
\mathrm{mol O}_2 = \frac{40.0}{32.00} = 1.250
$$

Divide by coefficients: $\mathrm{NH}_3: 1.468/4 = 0.367$, $\mathrm{O}_2: 1.250/5 = 0.250$.

$\mathrm{O}_2$ is limiting.

$$
\mathrm{mol NO} = 1.250 \times \frac{4}{5} = 1.000 \mathrm{ mol}
$$

$$
\mathrm{mass NO} = 1.000 \times 30.01 = 30.0 \mathrm{ g}
$$

If only $24.0 \mathrm{ g}$ of NO was actually produced:

$$
\%\mathrm{ Yield} = \frac{24.0}{30.0} \times 100 = 80.0\%
$$

:::

### Derivation: Why the Limiting Reactant Method Works

The limiting reactant method divides moles by the stoichiometric coefficient because the coefficient
represents the number of moles of each reactant consumed per "batch" of reaction. Dividing gives the
number of complete batches each reactant could support. The reactant that supports the fewest
batches limits the overall reaction, since the excess reactant will be left over after the limiting
reactant is exhausted.

## Solutions and Concentration (CED Unit 4)

### Molarity

$$
M = \frac{n}{V} = \frac{\mathrm{moles of solute}}{\mathrm{liters of solution}}
$$

Molarity is the most commonly used unit of concentration. Note that the volume is of the solution,
not the solvent. When a solute is dissolved, the total volume may differ from the volume of solvent
alone.

### Dilution

$$
M_1 V_1 = M_2 V_2
$$

This equation holds because dilution changes the volume but not the number of moles of solute. It is
valid for any concentration unit that is moles per volume.

### Solution Stoichiometry

Use molarity to convert between volume and moles, then apply stoichiometric ratios.

:::info[Example]

What volume of $0.500 \mathrm{ M } \mathrm{HCl}$ is needed to react completely with
$25.0 \mathrm{ mL}$ of $0.200 \mathrm{ M } \mathrm{NaOH}$?

$$
\mathrm{HCl} + \mathrm{NaOH} \to \mathrm{NaCl} + \mathrm{H}_2\mathrm{O}
$$

$$
\mathrm{mol NaOH} = 0.200 \times 0.0250 = 0.00500 \mathrm{ mol}
$$

$$
\mathrm{mol HCl} = 0.00500 \mathrm{ mol (1:1 ratio)}
$$

$$
V_{\mathrm{HCl}} = \frac{0.00500}{0.500} = 0.0100 \mathrm{ L} = 10.0 \mathrm{ mL}
$$

:::

### Gravimetric Analysis

A technique where the mass of a product is measured to determine the amount of an unknown reactant.
The product must be pure and easily filterable.

**Example:** To determine the amount of sulfate in a solution, add excess barium chloride. Filter,
dry, and weigh the BaSO$_4$ precipitate. Use the mass of BaSO$_4$ to calculate the moles and hence
the concentration of sulfate.

### Worked Example: Gravimetric Calculation

A $0.500 \mathrm{ g}$ sample of an iron ore is dissolved and the iron is precipitated as
$\mathrm{Fe}_2\mathrm{O}_3$ by heating. If the mass of $\mathrm{Fe}_2\mathrm{O}_3$ obtained is
$0.350 \mathrm{ g}$, calculate the percentage of iron in the ore.

$$\mathrm{mol Fe}_2\mathrm{O}_3 = \frac{0.350}{159.69} = 0.00219 \mathrm{ mol}$$

$$\mathrm{mol Fe} = 2 \times 0.00219 = 0.00438 \mathrm{ mol}$$

$$\mathrm{mass Fe} = 0.00438 \times 55.85 = 0.245 \mathrm{ g}$$

$$\%\mathrm{ Fe} = \frac{0.245}{0.500} \times 100 = 49.0\%$$

### Worked Example: Back Titration

A $2.00 \mathrm{ g}$ sample of impure limestone ($\mathrm{CaCO}_3$) is reacted with
$50.0 \mathrm{ mL}$ of $1.00 \mathrm{ M } \mathrm{HCl}$ (excess). The remaining acid is titrated
with $0.500 \mathrm{ M } \mathrm{NaOH}$, requiring $32.0 \mathrm{ mL}$. Calculate the percentage
purity of $\mathrm{CaCO}_3$.

$$\mathrm{mol HCl total} = 1.00 \times 0.0500 = 0.0500 \mathrm{ mol}$$

$$\mathrm{mol NaOH} = 0.500 \times 0.0320 = 0.0160 \mathrm{ mol}$$

$$\mathrm{mol HCl remaining} = 0.0160 \mathrm{ mol}$$

$$\mathrm{mol HCl reacted} = 0.0500 - 0.0160 = 0.0340 \mathrm{ mol}$$

$$\mathrm{mol CaCO}_3 = \frac{0.0340}{2} = 0.0170 \mathrm{ mol}$$

$$\mathrm{mass CaCO}_3 = 0.0170 \times 100.09 = 1.70 \mathrm{ g}$$

$$\%\mathrm{ purity} = \frac{1.70}{2.00} \times 100 = 85.0\%$$

## Gas Laws (CED Unit 3)

### Ideal Gas Law

$$
PV = nRT
$$

where
$R = 0.08206 \mathrm{ L}\cdot\mathrm{atm}/(\mathrm{mol}\cdot\mathrm{K}) = 8.314 \mathrm{ J}/(\mathrm{mol}\cdot\mathrm{K})$.

The ideal gas law combines Boyle's law ($P \propto 1/V$ at constant $T$), Charles's law
($V \propto T$ at constant $P$), and Avogadro's law ($V \propto n$ at constant $P$ and $T$).

### Combined Gas Law

$$
\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}
$$

### Dalton's Law of Partial Pressures

$$
P_{\mathrm{total}} = P_1 + P_2 + \cdots + P_n
$$

The partial pressure of a gas is the pressure it would exert if it alone occupied the entire volume.
For an ideal gas: $P_i = \chi_i \cdot P_{\mathrm{total}}$, where $\chi_i$ is the mole fraction.

### STP

Standard Temperature and Pressure: $T = 273.15 \mathrm{ K}$, $P = 1 \mathrm{ atm}$.

At STP, one mole of ideal gas occupies $22.4 \mathrm{ L}$.

### Gas Stoichiometry

Use $PV = nRT$ to convert between gas volume and moles.

:::info[Example]

What volume of $\mathrm{O}_2$ at STP is produced by decomposing $5.00 \mathrm{ g}$ of
$\mathrm{KClO}_3$?

$$
2\mathrm{KClO}_3(s) \to 2\mathrm{KCl}(s) + 3\mathrm{O}_2(g)
$$

$$
\mathrm{mol KClO}_3 = \frac{5.00}{122.55} = 0.0408 \mathrm{ mol}
$$

$$
\mathrm{mol O}_2 = 0.0408 \times \frac{3}{2} = 0.0612 \mathrm{ mol}
$$

$$
V = \frac{nRT}{P} = \frac{(0.0612)(0.08206)(273.15)}{1.00} = 1.37 \mathrm{ L}
$$

Or using molar volume at STP: $V = 0.0612 \times 22.4 = 1.37 \mathrm{ L}$.

:::

### Derivation: The Ideal Gas Law from Empirical Laws

Boyle's law: $PV = k_1$ (at constant $T$, $n$). Charles's law: $V/T = k_2$ (at constant $P$, $n$).
Avogadro's law: $V/n = k_3$ (at constant $P$, $T$). Combining all three: $PV/(nT) = k = R$, giving
$PV = nRT$.

### Derivation: Molar Volume at STP

At STP ($T = 273.15 \mathrm{ K}$, $P = 1.00 \mathrm{ atm}$):

$$V = \frac{nRT}{P} = \frac{(1.00)(0.08206)(273.15)}{1.00} = 22.4 \mathrm{ L}$$

This is a useful shortcut: one mole of any ideal gas occupies $22.4 \mathrm{ L}$ at STP.

### Worked Example: Gas Collection Over Water

$0.200 \mathrm{ g}$ of $\mathrm{KClO}_3$ decomposes:
$2\mathrm{KClO}_3(s) \to 2\mathrm{KCl}(s) + 3\mathrm{O}_2(g)$. The oxygen is collected over water at
$25^{\circ}\mathrm{C}$ and $0.980 \mathrm{ atm}$. Vapour pressure of water at $25^{\circ}\mathrm{C}$
is $23.8 \mathrm{ mmHg}$. Calculate the volume of dry oxygen.

$$\mathrm{mol KClO}_3 = \frac{0.200}{122.55} = 0.00163 \mathrm{ mol}$$

$$\mathrm{mol O}_2 = 0.00163 \times \frac{3}{2} = 0.00245 \mathrm{ mol}$$

$$P_{\mathrm{O}_2} = P_{\mathrm{total}} - P_{\mathrm{H}_2\mathrm{O}} = 0.980 - \frac{23.8}{760} = 0.980 - 0.0313 = 0.949 \mathrm{ atm}$$

$$V = \frac{nRT}{P} = \frac{(0.00245)(0.08206)(298)}{0.949} = 0.0630 \mathrm{ L} = 63.0 \mathrm{ mL}$$

## Net Ionic Equations (CED Unit 4)

### Steps

1. Write the balanced molecular equation.
2. Write the complete ionic equation (split strong electrolytes into ions).
3. Cancel spectator ions.
4. Write the net ionic equation.

### Solubility Rules

| Soluble                                            | Exceptions                                                                  |
| -------------------------------------------------- | --------------------------------------------------------------------------- |
| $\mathrm{Na}^+$, $\mathrm{K}^+$, $\mathrm{NH}_4^+$ | None                                                                        |
| Nitrates ($\mathrm{NO}_3^-$)                       | None                                                                        |
| Acetates ($\mathrm{CH}_3\mathrm{COO}^-$)           | None                                                                        |
| Chlorides ($\mathrm{Cl}^-$)                        | $\mathrm{Ag}^+$, $\mathrm{Pb}^{2+}$, $\mathrm{Hg}_2^{2+}$                   |
| Sulfates ($\mathrm{SO}_4^{2-}$)                    | $\mathrm{Ba}^{2+}$, $\mathrm{Pb}^{2+}$, $\mathrm{Ca}^{2+}$, $\mathrm{Ag}^+$ |

| Insoluble                         | Exceptions                                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------ |
| Hydroxides ($\mathrm{OH}^-$)      | $\mathrm{Na}^+$, $\mathrm{K}^+$, $\mathrm{Ba}^{2+}$, $\mathrm{Ca}^{2+}$ (slightly)         |
| Carbonates ($\mathrm{CO}_3^{2-}$) | $\mathrm{Na}^+$, $\mathrm{K}^+$, $\mathrm{NH}_4^+$                                         |
| Phosphates ($\mathrm{PO}_4^{3-}$) | $\mathrm{Na}^+$, $\mathrm{K}^+$, $\mathrm{NH}_4^+$                                         |
| Sulfides ($\mathrm{S}^{2-}$)      | $\mathrm{Na}^+$, $\mathrm{K}^+$, $\mathrm{NH}_4^+$, $\mathrm{Ca}^{2+}$, $\mathrm{Ba}^{2+}$ |

### Strong Acids and Bases

**Strong acids:** $\mathrm{HCl}$, $\mathrm{HBr}$, $\mathrm{HI}$, $\mathrm{HNO}_3$,
$\mathrm{H}_2\mathrm{SO}_4$, $\mathrm{HClO}_4$.

**Strong bases:** Group 1 hydroxides, $\mathrm{Ca(OH)}_2$, $\mathrm{Sr(OH)}_2$, $\mathrm{Ba(OH)}_2$.

Only strong electrolytes are split into ions in the complete ionic equation. Weak acids and bases
are written as intact molecules.

:::info[Example]

Write the net ionic equation for mixing $\mathrm{Pb(NO}_3)_2$ and $\mathrm{KI}$.

Molecular: $\mathrm{Pb(NO}_3)_2(aq) + 2\mathrm{KI}(aq) \to \mathrm{PbI}_2(s) + 2\mathrm{KNO}_3(aq)$

Complete ionic:
$\mathrm{Pb}^{2+}(aq) + 2\mathrm{NO}_3^-(aq) + 2\mathrm{K}^+(aq) + 2\mathrm{I}^-(aq) \to \mathrm{PbI}_2(s) + 2\mathrm{K}^+(aq) + 2\mathrm{NO}_3^-(aq)$

Net ionic: $\mathrm{Pb}^{2+}(aq) + 2\mathrm{I}^-(aq) \to \mathrm{PbI}_2(s)$

:::

## Summary Table: Solubility Rules Quick Reference

| Ion Type          | Generally Soluble With These Exceptions:                       |
| ----------------- | -------------------------------------------------------------- |
| Group 1, NH$_4^+$ | No exceptions (always soluble)                                 |
| Nitrates          | No exceptions (always soluble)                                 |
| Acetates          | No exceptions (always soluble)                                 |
| Chlorides         | Ag$^+$, Pb$^{2+}$, Hg$_2^{2+}$ (insoluble)                     |
| Sulfates          | Ba$^{2+}$, Pb$^{2+}$, Ca$^{2+}$ (slightly), Ag$^+$ (insoluble) |
| Hydroxides        | Group 1, Ba$^{2+}$, Ca$^{2+}$ (slightly soluble)               |
| Carbonates        | Group 1, NH$_4^+$ (soluble); rest insoluble                    |
| Phosphates        | Group 1, NH$_4^+$ (soluble); rest insoluble                    |
| Sulfides          | Group 1, NH$_4^+$, Ca$^{2+}$, Ba$^{2+}$ (soluble)              |

## Summary Table: Common Gas Law Relationships

| Law          | Variables  | Constant | Relationship                    |
| ------------ | ---------- | -------- | ------------------------------- |
| Boyle's      | P, V       | n, T     | $P_1 V_1 = P_2 V_2$             |
| Charles's    | V, T       | n, P     | $V_1/T_1 = V_2/T_2$             |
| Gay-Lussac's | P, T       | n, V     | $P_1/T_1 = P_2/T_2$             |
| Avogadro's   | V, n       | P, T     | $V_1/n_1 = V_2/n_2$             |
| Ideal Gas    | P, V, n, T | none     | $PV = nRT$                      |
| Combined     | P, V, T    | n        | $P_1 V_1/T_1 = P_2 V_2/T_2$     |
| Dalton's     | P$_i$      | V, T     | $P_{\mathrm{total}} = \sum P_i$ |

## Common Pitfalls

1. **Using molar mass instead of molecular mass** or vice versa. Molar mass has units of g/mol.
2. **Incorrectly identifying the limiting reactant.** Always divide moles by the stoichiometric
   coefficient; the smallest result is the limiting reactant.
3. **Forgetting to convert temperature to Kelvin** in gas law calculations.
   $T(\mathrm{K}) = T(^{\circ}\mathrm{C}) + 273.15$.
4. **Using the wrong value of $R$.** Match $R$ to the units of pressure and volume. If $P$ is in atm
   and $V$ in L, use $R = 0.08206$. If $P$ is in Pa and $V$ in m$^3$, use $R = 8.314$.
5. **Not balancing equations before stoichiometric calculations.** The mole ratio comes from the
   balanced equation.
6. **Confusing molarity with moles.** $M = n/V$; you must multiply by volume to get moles.
7. **Including spectator ions in net ionic equations.** Cancel ions that appear unchanged on both
   sides.
8. **Writing weak acids and bases as ions.** Only strong electrolytes are split in ionic equations.
9. **Forgetting that gas volumes at STP are 22.4 L/mol** only at exactly 0$^{\circ}$C and 1 atm.
10. **Incorrect significant figures in stoichiometric calculations.** Use the fewest significant
    figures from the given data.

## Practice Questions

1. A compound is 36.5% Na, 25.4% S, and 38.1% O by mass. Find its empirical formula.

2. If $10.0 \mathrm{ g}$ of $\mathrm{Al}$ reacts with $15.0 \mathrm{ g}$ of $\mathrm{Cl}_2$:
   $2\mathrm{Al} + 3\mathrm{Cl}_2 \to 2\mathrm{AlCl}_3$. Find the limiting reactant and the
   theoretical yield of $\mathrm{AlCl}_3$.

3. What is the molarity of a solution prepared by dissolving $5.85 \mathrm{ g}$ of $\mathrm{NaCl}$
   in enough water to make $250.0 \mathrm{ mL}$ of solution?

4. A gas occupies $3.50 \mathrm{ L}$ at $300 \mathrm{ K}$ and $1.20 \mathrm{ atm}$. What volume does
   it occupy at STP?

5. Write the net ionic equation for the reaction between $\mathrm{BaCl}_2(aq)$ and
   $\mathrm{Na}_2\mathrm{SO}_4(aq)$.

6. A $0.150 \mathrm{ M } \mathrm{H}_2\mathrm{SO}_4$ solution is titrated with
   $0.200 \mathrm{ M } \mathrm{NaOH}$. If $25.0 \mathrm{ mL}$ of acid is used, what volume of base
   is required?

7. A compound with molar mass $92.0 \mathrm{ g/mol}$ is 69.6% Mn and 30.4% O. Find the molecular
   formula.

8. Calculate the volume of $\mathrm{CO}_2$ produced at $25^\circ\mathrm{C}$ and $1.05 \mathrm{ atm}$
   when $10.0 \mathrm{ g}$ of $\mathrm{CaCO}_3$ decomposes:
   $\mathrm{CaCO}_3(s) \to \mathrm{CaO}(s) + \mathrm{CO}_2(g)$.

9. A $0.100 \mathrm{ M}$ solution of $\mathrm{AgNO}_3$ is added to $50.0 \mathrm{ mL}$ of
   $0.0500 \mathrm{ M}$ $\mathrm{Na}_2\mathrm{CrO}_4$. Calculate the mass of
   $\mathrm{Ag}_2\mathrm{CrO}_4$ precipitate formed.

10. In a combustion analysis, $0.250 \mathrm{ g}$ of an unknown compound produces
    $0.366 \mathrm{ g}$ of $\mathrm{CO}_2$ and $0.150 \mathrm{ g}$ of $\mathrm{H}_2\mathrm{O}$. Find
    the empirical formula.

11. $2.00 \mathrm{ g}$ of $\mathrm{KClO}_3$ is heated until it decomposes. The oxygen gas produced
    is collected over water at $22^\circ\mathrm{C}$ and $0.980 \mathrm{ atm}$. The vapour pressure
    of water at $22^\circ\mathrm{C}$ is $19.8 \mathrm{ mmHg}$. Calculate the volume of dry oxygen
    collected.

12. Explain the difference between the theoretical yield and the actual yield, and describe three
    factors that can cause the actual yield to be less than the theoretical yield.

13. Calculate the molarity of a solution prepared by diluting $15.0 \mathrm{ mL}$ of
    $6.00 \mathrm{ M }$ $\mathrm{HCl}$ to a total volume of $500.0 \mathrm{ mL}$.

14. Write balanced molecular, complete ionic, and net ionic equations for the reaction between
    $\mathrm{NiCl}_2(aq)$ and $\mathrm{NaOH}(aq)$.

15. A mixture of $\mathrm{NaHCO}_3$ and $\mathrm{NaCl}$ has a mass of $5.00 \mathrm{ g}$. When
    heated, the $\mathrm{NaHCO}_3$ decomposes completely to $\mathrm{Na}_2\mathrm{CO}_3$,
    $\mathrm{H}_2\mathrm{O}$, and $\mathrm{CO}_2$. The mass of the residue is $3.95 \mathrm{ g}$.
    Calculate the mass of $\mathrm{NaCl}$ in the original mixture.

16. What volume of $0.250 \mathrm{ M } \mathrm{H}_2\mathrm{SO}_4$ is needed to completely neutralise
    $30.0 \mathrm{ mL}$ of $0.400 \mathrm{ M } \mathrm{KOH}$?

17. A sample of a hydrate of $\mathrm{MgSO}_4$ weighing $5.00 \mathrm{ g}$ is heated until constant
    mass, leaving $2.45 \mathrm{ g}$ of anhydrous $\mathrm{MgSO}_4$. Determine the formula of the
    hydrate.

18. At $25^\circ\mathrm{C}$ and $1.00 \mathrm{ atm}$, what is the density of $\mathrm{O}_2$ gas in
    g/L?

19. Balance the following redox equation in acidic solution:
    $\mathrm{MnO}_4^- + \mathrm{Fe}^{2+} \to \mathrm{Mn}^{2+} + \mathrm{Fe}^{3+}$.

20. A $0.500 \mathrm{ g}$ sample of a compound containing only C, H, and O is burned in excess
    oxygen, producing $1.10 \mathrm{ g}$ of $\mathrm{CO}_2$ and $0.450 \mathrm{ g}$ of
    $\mathrm{H}_2\mathrm{O}$. Find the empirical formula. If the molecular mass is approximately
    $180 \mathrm{ g/mol}$, determine the molecular formula.

21. Calculate the mass of $\mathrm{AgCl}$ precipitate formed when $25.0 \mathrm{ mL}$ of
    $0.150 \mathrm{ M }$ $\mathrm{AgNO}_3$ is mixed with $15.0 \mathrm{ mL}$ of
    $0.200 \mathrm{ M } \mathrm{MgCl}_2$.

22. A gas mixture contains $0.50 \mathrm{ g}$ of $\mathrm{N}_2$ and $0.50 \mathrm{ g}$ of
    $\mathrm{O}_2$ in a $2.00 \mathrm{ L}$ container at $300 \mathrm{ K}$. Calculate the partial
    pressure of each gas and the total pressure.

23. Write the net ionic equation for the reaction between $\mathrm{H}_2\mathrm{SO}_4(aq)$ and
    $\mathrm{Ba(OH)}_2(aq)$.

24. A student prepares a solution by dissolving $12.5 \mathrm{ g}$ of
    $\mathrm{CuSO}_4 \cdot 5\mathrm{H}_2\mathrm{O}$ in water to make $250.0 \mathrm{ mL}$ of
    solution. Calculate the molarity of the solution.

25. $4.00 \mathrm{ g}$ of methane ($\mathrm{CH}_4$) is burned in excess oxygen. Calculate the volume
    of $\mathrm{CO}_2$ produced at $125^{\circ}\mathrm{C}$ and $1.50 \mathrm{ atm}$.

26. Balance the following equation and identify the type of reaction:
    $\mathrm{Al} + \mathrm{HCl} \to \mathrm{AlCl}_3 + \mathrm{H}_2$.

27. A $0.300 \mathrm{ M } \mathrm{HCl}$ solution is used to titrate $20.0 \mathrm{ mL}$ of a
    $\mathrm{Ca(OH)}_2$ solution of unknown concentration. If the titration requires
    $35.0 \mathrm{ mL}$ of HCl, calculate the molarity of the $\mathrm{Ca(OH)}_2$ solution.

## Practice Problems

<details>
<summary>Question 1: Limiting reactant and percent yield</summary>

$10.0 \mathrm{ g}$ of $\mathrm{Al}$ reacts with $30.0 \mathrm{ g}$ of $\mathrm{Cl}_2$ to form
$\mathrm{AlCl}_3$ according to the equation:
$2\mathrm{Al}(s) + 3\mathrm{Cl}_2(g) \to 2\mathrm{AlCl}_3(s)$. If $12.5 \mathrm{ g}$ of
$\mathrm{AlCl}_3$ is actually produced, calculate the limiting reactant, the theoretical yield, and
the percent yield.

</details>

<details>
<summary>Answer</summary>

Moles of $\mathrm{Al}$: $10.0 / 26.98 = 0.371 \mathrm{ mol}$.

Moles of $\mathrm{Cl}_2$: $30.0 / 70.90 = 0.423 \mathrm{ mol}$.

Stoichiometric ratio needed: $2 \mathrm{ Al} : 3 \mathrm{ Cl}_2$.

Moles of $\mathrm{Cl}_2$ needed for $0.371 \mathrm{ mol}$ $\mathrm{Al}$:
$0.371 \times 3/2 = 0.556 \mathrm{ mol}$. Only $0.423 \mathrm{ mol}$ available, so $\mathrm{Cl}_2$
is limiting.

Theoretical yield of $\mathrm{AlCl}_3$ from $\mathrm{Cl}_2$: $0.423 \mathrm{ mol}$
$\mathrm{Cl}_2 \times (2 \mathrm{ mol} \mathrm{ AlCl}_3 / 3 \mathrm{ mol} \mathrm{ Cl}_2) = 0.282 \mathrm{ mol}$.

Mass of $\mathrm{AlCl}_3$: $0.282 \times 133.34 = 37.6 \mathrm{ g}$.

Percent yield: $(12.5 / 37.6) \times 100 = 33.2\%$.

</details>

<details>
<summary>Question 2: Gas stoichiometry with ideal gas law</summary>

$5.00 \mathrm{ g}$ of $\mathrm{KClO}_3$ decomposes according to:
$2\mathrm{KClO}_3(s) \to 2\mathrm{KCl}(s) + 3\mathrm{O}_2(g)$. The oxygen gas is collected over
water at $25^\circ\mathrm{C}$ and $1.00 \mathrm{ atm}$ total pressure. The vapor pressure of water
at $25^\circ\mathrm{C}$ is $23.8 \mathrm{ mmHg}$. Calculate the volume of dry $\mathrm{O}_2$ gas
collected.

</details>

<details>
<summary>Answer</summary>

Moles of $\mathrm{KClO}_3$: $5.00 / 122.55 = 0.0408 \mathrm{ mol}$.

Moles of $\mathrm{O}_2$: $0.0408 \times 3/2 = 0.0612 \mathrm{ mol}$.

Partial pressure of $\mathrm{O}_2$:
$P_{\mathrm{O}_2} = P_{\mathrm{total}} - P_{\mathrm{H}_2\mathrm{O}} = 760 - 23.8 = 736.2 \mathrm{ mmHg} = 0.969 \mathrm{ atm}$.

Volume using ideal gas law:
$V = \frac{nRT}{P} = \frac{0.0612 \times 0.0821 \times 298}{0.969} = \frac{1.496}{0.969} = 1.54 \mathrm{ L}$.

</details>

<details>
<summary>Question 3: Empirical and molecular formula</summary>

A compound contains $40.0\%$ carbon, $6.7\%$ hydrogen, and $53.3\%$ oxygen by mass. Its molar mass
is approximately $180 \mathrm{ g/mol}$. Determine the empirical and molecular formulas.

</details>

<details>
<summary>Answer</summary>

Assume $100 \mathrm{ g}$ of compound:

Moles C: $40.0 / 12.01 = 3.33 \mathrm{ mol}$ Moles H: $6.7 / 1.008 = 6.65 \mathrm{ mol}$ Moles O:
$53.3 / 16.00 = 3.33 \mathrm{ mol}$

Mole ratio: C : H : O = 3.33 : 6.65 : 3.33 = 1 : 2 : 1.

Empirical formula: $\mathrm{CH}_2\mathrm{O}$ (empirical mass =
$12.01 + 2(1.008) + 16.00 = 30.03 \mathrm{ g/mol}$).

Molecular formula multiple: $180 / 30.03 = 6.0$.

Molecular formula: $\mathrm{C}_6\mathrm{H}_{12}\mathrm{O}_6$ (glucose).

</details>

<details>
<summary>Question 4: Acid-base titration</summary>

$25.0 \mathrm{ mL}$ of $0.100 \mathrm{ M}$ $\mathrm{H}_2\mathrm{SO}_4$ is titrated with
$0.200 \mathrm{ M}$ $\mathrm{NaOH}$. Calculate the pH of the solution (a) before any $\mathrm{NaOH}$
is added, (b) at the equivalence point, and (c) after $30.0 \mathrm{ mL}$ of $\mathrm{NaOH}$ has
been added.

</details>

<details>
<summary>Answer</summary>

(a) Before titration: $\mathrm{H}_2\mathrm{SO}_4$ is a strong diprotic acid.
$[\mathrm{H}^+] = 2 \times 0.100 = 0.200 \mathrm{ M}$ (ignoring the second dissociation constant for
a rough calculation). $\mathrm{pH} = -\log(0.200) = 0.70$.

More precisely, $[\mathrm{H}^+]$ from complete first dissociation is $0.100 \mathrm{ M}$, and the
second dissociation contributes some additional $\mathrm{H}^+$. But since
$\mathrm{H}_2\mathrm{SO}_4$ is strong for the first proton:
$[\mathrm{H}^+] \approx 0.100 + 0.010 = 0.110 \mathrm{ M}$ (the second $K_a = 0.012$).
$\mathrm{pH} \approx -\log(0.110) = 0.96$.

(b) At equivalence point: Moles of
$\mathrm{H}_2\mathrm{SO}_4 = 0.0250 \times 0.100 = 0.00250 \mathrm{ mol}$. This requires
$0.00500 \mathrm{ mol}$ $\mathrm{NaOH}$. Volume of
$\mathrm{NaOH} = 0.00500 / 0.200 = 25.0 \mathrm{ mL}$. Total volume = $50.0 \mathrm{ mL}$.

The solution contains $\mathrm{Na}_2\mathrm{SO}_4$, the salt of a strong base and a strong acid (for
the first proton). The $\mathrm{SO}_4^{2-}$ is a very weak base, so the pH is approximately 7
(actually slightly below 7 because $\mathrm{HSO}_4^-$ is a weak acid).

(c) After $30.0 \mathrm{ mL}$: Moles $\mathrm{NaOH}$ added =
$0.0300 \times 0.200 = 0.00600 \mathrm{ mol}$. Excess
$\mathrm{NaOH} = 0.00600 - 0.00500 = 0.00100 \mathrm{ mol}$. Total volume = $55.0 \mathrm{ mL}$.
$[\mathrm{OH}^-] = 0.00100 / 0.0550 = 0.0182 \mathrm{ M}$. $\mathrm{pOH} = -\log(0.0182) = 1.74$.
$\mathrm{pH} = 14 - 1.74 = 12.26$.

</details>

<details>
<summary>Question 5: Solution dilution and concentration</summary>

How many millilitres of $12.0 \mathrm{ M}$ $\mathrm{HCl}$ must be diluted to $500.0 \mathrm{ mL}$ to
prepare a $0.500 \mathrm{ M}$ solution? Calculate the mass of $\mathrm{NaOH}$ required to completely
neutralise $25.0 \mathrm{ mL}$ of the diluted solution.

</details>

<details>
<summary>Answer</summary>

Using $M_1V_1 = M_2V_2$: $(12.0)(V_1) = (0.500)(500.0)$, so
$V_1 = 250.0 / 12.0 = 20.8 \mathrm{ mL}$.

Moles of $\mathrm{HCl}$ in $25.0 \mathrm{ mL}$ of $0.500 \mathrm{ M}$:
$0.0250 \times 0.500 = 0.0125 \mathrm{ mol}$.

Reaction: $\mathrm{HCl} + \mathrm{NaOH} \to \mathrm{NaCl} + \mathrm{H}_2\mathrm{O}$. 1:1 ratio.

Mass of $\mathrm{NaOH}$: $0.0125 \times 40.00 = 0.500 \mathrm{ g}$.

</details>
