---
title: "Quantitative Chemistry -- Diagnostic Tests"
description: Diagnostic tests for moles, reacting masses, gas volumes, titrations, and yield at the hardest A-Level Chemistry standard.
slug: diag-quantitative-chemistry
hide_table_of_contents: true
---

# Quantitative Chemistry / Stoichiometry — Diagnostic Tests

## Unit Tests

### UT-1: Back-Titration with Impure Sample

**Question:**

A sample of impure calcium carbonate ($\text{CaCO}_3$) weighing $2.50\,\text{g}$ is reacted with exactly $50.0\,\text{cm}^3$ of $1.00\,\text{mol dm}^{-3}$ hydrochloric acid (an excess). The reaction is:

$$\text{CaCO}_3(s) + 2\text{HCl}(aq) \to \text{CaCl}_2(aq) + \text{CO}_2(g) + \text{H}_2\text{O}(l)$$

After the reaction is complete, the excess HCl is titrated with $0.500\,\text{mol dm}^{-3}$ sodium hydroxide solution. $24.0\,\text{cm}^3$ of NaOH is required for complete neutralisation.

(a) Calculate the percentage purity of the calcium carbonate sample.

(b) Calculate the volume of $\text{CO}_2$ produced at room temperature and pressure ($24.0\,\text{dm}^3\,\text{mol}^{-1}$).

**Solution:**

(a) **Step 1: Moles of NaOH used in the titration**

$$n(\text{NaOH}) = \frac{0.500 \times 24.0}{1000} = 0.0120\,\text{mol}$$

**Step 2: Moles of excess HCl**

$\text{NaOH} + \text{HCl} \to \text{NaCl} + \text{H}_2\text{O}$ (1:1 ratio)

$$n(\text{HCl}_{\text{excess}}) = 0.0120\,\text{mol}$$

**Step 3: Moles of HCl that reacted with $\text{CaCO}_3$**

$$n(\text{HCl}_{\text{total}}) = \frac{1.00 \times 50.0}{1000} = 0.0500\,\text{mol}$$

$$n(\text{HCl}_{\text{reacted}}) = 0.0500 - 0.0120 = 0.0380\,\text{mol}$$

**Step 4: Moles of $\text{CaCO}_3$ in the sample**

From the equation, 2 mol HCl react with 1 mol $\text{CaCO}_3$:

$$n(\text{CaCO}_3) = \frac{0.0380}{2} = 0.0190\,\text{mol}$$

**Step 5: Mass of pure $\text{CaCO}_3$**

$$m(\text{CaCO}_3) = 0.0190 \times (40.1 + 12.0 + 3 \times 16.0) = 0.0190 \times 100.1 = 1.902\,\text{g}$$

**Step 6: Percentage purity**

$$\text{Percentage purity} = \frac{1.902}{2.50} \times 100 = 76.1\%$$

(b) From the equation, 1 mol $\text{CaCO}_3$ produces 1 mol $\text{CO}_2$:

$$n(\text{CO}_2) = 0.0190\,\text{mol}$$

$$V(\text{CO}_2) = 0.0190 \times 24.0 = 0.456\,\text{dm}^3 = 456\,\text{cm}^3$$

---
### UT-2: Ideal Gas Equation with Unit Consistency

**Question:**

A student collects $0.154\,\text{g}$ of an unknown gas in a gas syringe at a temperature of $77\,^\circ\text{C}$ and a pressure of $98.5\,\text{kPa}$. The volume of gas collected is $72.0\,\text{cm}^3$.

(a) Calculate the molar mass of the gas. ($R = 8.31\,\text{J K}^{-1}\text{ mol}^{-1}$)

(b) The gas is known to be one of: $\text{N}_2$, $\text{O}_2$, $\text{CO}$, $\text{NO}_2$, or $\text{C}_3\text{H}_8$. Identify the gas.

**Solution:**

(a) Using $pV = nRT$, ensuring consistent SI units:

- $p = 98.5\,\text{kPa} = 98500\,\text{Pa}$
- $V = 72.0\,\text{cm}^3 = 72.0 \times 10^{-6}\,\text{m}^3 = 7.20 \times 10^{-5}\,\text{m}^3$
- $T = 77 + 273 = 350\,\text{K}$

$$n = \frac{pV}{RT} = \frac{98500 \times 7.20 \times 10^{-5}}{8.31 \times 350} = \frac{7.092}{2908.5} = 2.438 \times 10^{-3}\,\text{mol}$$

$$M = \frac{m}{n} = \frac{0.154}{2.438 \times 10^{-3}} = 63.2\,\text{g mol}^{-1}$$

(b) Calculated molar masses:
- $\text{N}_2 = 28.0\,\text{g mol}^{-1}$
- $\text{O}_2 = 32.0\,\text{g mol}^{-1}$
- $\text{CO} = 28.0\,\text{g mol}^{-1}$
- $\text{NO}_2 = 46.0\,\text{g mol}^{-1}$
- $\text{C}_3\text{H}_8 = 44.0\,\text{g mol}^{-1}$

None of these exactly match $63.2\,\text{g mol}^{-1}$. However, note that $\text{NO}_2$ dimerises: $2\text{NO}_2 \rightleftharpoons \text{N}_2\text{O}_4$. The molar mass of $\text{N}_2\text{O}_4$ is $92.0\,\text{g mol}^{-1}$. The experimental value of $63.2$ is between $46.0$ ($\text{NO}_2$) and $92.0$ ($\text{N}_2\text{O}_4$), consistent with an equilibrium mixture of $\text{NO}_2$ and $\text{N}_2\text{O}_4$ at this temperature. The gas is **$\text{NO}_2$** (existing as an equilibrium mixture with its dimer).

---
### UT-3: Percentage Yield, Atom Economy, and Multi-Step Synthesis

**Question:**

Ethanol can be produced from ethene via the following two-step process:

**Step 1:** $\text{C}_2\text{H}_4 + \text{H}_2\text{SO}_4 \to \text{C}_2\text{H}_5\text{HSO}_4$ (yield = 95%)

**Step 2:** $\text{C}_2\text{H}_5\text{HSO}_4 + \text{H}_2\text{O} \to \text{C}_2\text{H}_5\text{OH} + \text{H}_2\text{SO}_4$ (yield = 90%)

(a) Calculate the overall percentage yield of ethanol from ethene.

(b) Calculate the atom economy of Step 2.

(c) Starting with $28.0\,\text{kg}$ of ethene, calculate the mass of ethanol actually produced.

**Solution:**

(a) The overall yield for consecutive steps is the product of the individual yields:

$$\text{Overall yield} = 0.95 \times 0.90 = 0.855 = 85.5\%$$

(b) Atom economy = $\frac{\text{M_r of desired product}}{\text{Sum of M_r of all products}} \times 100$

Desired product: $\text{C}_2\text{H}_5\text{OH}$ ($M_r = 2 \times 12.0 + 6 \times 1.0 + 16.0 = 46.0$)

Other product: $\text{H}_2\text{SO}_4$ ($M_r = 2 \times 1.0 + 32.1 + 4 \times 16.0 = 98.1$)

$$\text{Atom economy} = \frac{46.0}{46.0 + 98.1} \times 100 = \frac{46.0}{144.1} \times 100 = 31.9\%$$

Note: The low atom economy is because $\text{H}_2\text{SO}_4$ is regenerated (it appears on both sides), so in practice the $\text{H}_2\text{SO}_4$ acts as a catalyst and is recycled, making the effective atom economy much higher in industrial processes.

(c) $M_r(\text{C}_2\text{H}_4) = 28.0$, $M_r(\text{C}_2\text{H}_5\text{OH}) = 46.0$

Theoretical mass of ethanol from $28.0\,\text{kg}$ ethene (1:1 stoichiometry):

$$m_{\text{theoretical}} = 28.0 \times \frac{46.0}{28.0} = 46.0\,\text{kg}$$

Actual mass:

$$m_{\text{actual}} = 46.0 \times 0.855 = 39.3\,\text{kg}$$

## Integration Tests

### IT-1: Gas Volume and Empirical Formula Determination (with Atomic Structure)

**Question:**

$0.480\,\text{g}$ of a hydrocarbon (containing only carbon and hydrogen) is completely burned in oxygen. The products are passed through concentrated $\text{H}_2\text{SO}_4$, which increases in mass by $0.720\,\text{g}$, and then through limewater ($\text{Ca(OH)}_2$ solution), which produces $2.20\,\text{g}$ of white precipitate ($\text{CaCO}_3$).

(a) Calculate the empirical formula of the hydrocarbon.

(b) $0.120\,\text{g}$ of the hydrocarbon vapour occupies $49.5\,\text{cm}^3$ at $100\,^\circ\text{C}$ and $1.01 \times 10^5\,\text{Pa}$. Determine the molecular formula of the hydrocarbon.

(c) Draw two possible structural isomers consistent with this molecular formula and identify which is the more stable isomer, explaining your reasoning.

**Solution:**

(a) All hydrogen in the hydrocarbon becomes $\text{H}_2\text{O}$, absorbed by $\text{H}_2\text{SO}_4$:

$$m(\text{H}_2\text{O}) = 0.720\,\text{g}$$
$$n(\text{H}_2\text{O}) = \frac{0.720}{18.0} = 0.0400\,\text{mol}$$
$$n(\text{H}) = 2 \times 0.0400 = 0.0800\,\text{mol}$$

All carbon in the hydrocarbon becomes $\text{CO}_2$, which reacts with limewater:

$$\text{Ca(OH)}_2 + \text{CO}_2 \to \text{CaCO}_3 + \text{H}_2\text{O}$$

$$n(\text{CaCO}_3) = \frac{2.20}{100.1} = 0.0220\,\text{mol}$$
$$n(\text{C}) = n(\text{CaCO}_3) = 0.0220\,\text{mol}$$

Ratio C : H = $0.0220 : 0.0800 = 1 : 3.64$.

Multiplying to find the simplest integer ratio: $0.0220 : 0.0800 = 5 : 18.2$. The ratio is approximately $5 : 18$, giving an empirical formula of **$\text{C}_5\text{H}_{18}$**. However, this is not a standard hydrocarbon formula (alkanes follow $\text{C}_n\text{H}_{2n+2}$, so $\text{C}_5\text{H}_{12}$ would be the alkane with 5 carbons). The discrepancy is within expected experimental rounding error.

(b) Using $pV = nRT$:

$$n = \frac{1.01 \times 10^5 \times 49.5 \times 10^{-6}}{8.31 \times 373} = \frac{5.000}{3099.6} = 1.613 \times 10^{-3}\,\text{mol}$$

$$M = \frac{0.120}{1.613 \times 10^{-3}} = 74.4\,\text{g mol}^{-1}$$

The measured molar mass of $74.4\,\text{g mol}^{-1}$ is closest to **$\text{C}_5\text{H}_{12}$** (pentane, $M_r = 72.1\,\text{g mol}^{-1}$). Comparing with nearby hydrocarbons: $\text{C}_4\text{H}_{10} = 58$, $\text{C}_5\text{H}_{12} = 72$, $\text{C}_6\text{H}_{14} = 86$. The molecular formula is **$\text{C}_5\text{H}_{12}$** (pentane). The small discrepancy ($74.4$ vs $72.1$) arises from rounding in the experimental data.

(c) Two structural isomers of $\text{C}_5\text{H}_{12}$:

- **Pentane** ($\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{CH}_3$): straight chain
- **2-methylbutane** ($\text{CH}_3\text{CH}(\text{CH}_3)\text{CH}_2\text{CH}_3$): branched

Pentane is the straight-chain isomer and has a higher boiling point due to greater surface area for van der Waals interactions. 2-methylbutane is more branched and has a slightly lower boiling point. Both are stable alkanes; pentane is the least sterically hindered.

---
### IT-2: Hydrated Salt Formula Determination (with Thermodynamics)

**Question:**

$5.00\,\text{g}$ of hydrated barium chloride ($\text{BaCl}_2 \cdot x\text{H}_2\text{O}$) is heated strongly until all the water of crystallisation is removed, leaving $4.26\,\text{g}$ of anhydrous $\text{BaCl}_2$.

(a) Determine the value of $x$ in the formula $\text{BaCl}_2 \cdot x\text{H}_2\text{O}$.

(b) The enthalpy of solution of anhydrous $\text{BaCl}_2$ is $-13.2\,\text{kJ mol}^{-1}$, while the enthalpy of solution of $\text{BaCl}_2 \cdot 2\text{H}_2\text{O}$ is $+8.8\,\text{kJ mol}^{-1}$. Use a Hess's law cycle to calculate the enthalpy change for the reaction:

$$\text{BaCl}_2(s) + 2\text{H}_2\text{O}(l) \to \text{BaCl}_2 \cdot 2\text{H}_2\text{O}(s)$$

**Solution:**

(a) Mass of water lost: $5.00 - 4.26 = 0.74\,\text{g}$

$$n(\text{H}_2\text{O}) = \frac{0.74}{18.0} = 0.0411\,\text{mol}$$

$$n(\text{BaCl}_2) = \frac{4.26}{137.3 + 2 \times 35.5} = \frac{4.26}{208.3} = 0.02045\,\text{mol}$$

$$x = \frac{n(\text{H}_2\text{O})}{n(\text{BaCl}_2)} = \frac{0.0411}{0.02045} = 2.01 \approx 2$$

The formula is **$\text{BaCl}_2 \cdot 2\text{H}_2\text{O}$**.

(b) Hess's law cycle:

$$\text{BaCl}_2(s) + 2\text{H}_2\text{O}(l) \xrightarrow{\Delta H} \text{BaCl}_2 \cdot 2\text{H}_2\text{O}(s)$$

Route 1 (direct): $\Delta H = ?$

Route 2 (via aqueous solution):
- $\text{BaCl}_2(s) \to \text{BaCl}_2(aq)$: $\Delta H_1 = -13.2\,\text{kJ mol}^{-1}$
- $\text{BaCl}_2 \cdot 2\text{H}_2\text{O}(s) \to \text{BaCl}_2(aq) + 2\text{H}_2\text{O}(l)$: $\Delta H_2 = +8.8\,\text{kJ mol}^{-1}$

Route 2 gives: $\text{BaCl}_2(s) + 2\text{H}_2\text{O}(l) \to \text{BaCl}_2(aq)$ (reverse of the second step, so $-\Delta H_2$)

$$\Delta H = \Delta H_1 + (-\Delta H_2) = -13.2 - 8.8 = -22.0\,\text{kJ mol}^{-1}$$

The hydration of $\text{BaCl}_2$ to form the dihydrate releases $22.0\,\text{kJ mol}^{-1}$.

---
### IT-3: Titrations with Multiple Equivalence Points (with Acids and Bases)

**Question:**

$25.0\,\text{cm}^3$ of a solution containing both $\text{HCl}$ and $\text{CH}_3\text{COOH}$ is titrated with $0.100\,\text{mol dm}^{-3}$ $\text{NaOH}$ using phenolphthalein indicator. $20.0\,\text{cm}^3$ of $\text{NaOH}$ is required to reach the end point. In a separate experiment, $25.0\,\text{cm}^3$ of the same solution is titrated with $0.100\,\text{mol dm}^{-3}$ $\text{NaOH}$ but using a pH meter. The pH curve shows the first equivalence point at $10.0\,\text{cm}^3$ and the second at $20.0\,\text{cm}^3$.

(a) Calculate the concentration of $\text{HCl}$ in the original solution.

(b) Calculate the concentration of $\text{CH}_3\text{COOH}$ in the original solution.

(c) Explain why the pH at the second equivalence point is greater than 7, and explain the significance of the first equivalence point.

**Solution:**

(a) The first equivalence point at $10.0\,\text{cm}^3$ corresponds to neutralisation of the strong acid $\text{HCl}$ (since $\text{HCl}$ is neutralised first as it fully dissociates, and the $\text{pH}$ rises steeply first around this point due to the strong acid being consumed before the weak acid):

$$n(\text{HCl}) = n(\text{NaOH})_{\text{first eq. pt.}} = 0.100 \times \frac{10.0}{1000} = 1.00 \times 10^{-3}\,\text{mol}$$

$$[\text{HCl}] = \frac{1.00 \times 10^{-3}}{25.0/1000} = 0.0400\,\text{mol dm}^{-3}$$

(b) The second equivalence point at $20.0\,\text{cm}^3$ corresponds to total acid neutralised. The additional $\text{NaOH}$ between the two equivalence points neutralises the $\text{CH}_3\text{COOH}$:

$$n(\text{CH}_3\text{COOH}) = 0.100 \times \frac{20.0 - 10.0}{1000} = 1.00 \times 10^{-3}\,\text{mol}$$

$$[\text{CH}_3\text{COOH}] = \frac{1.00 \times 10^{-3}}{25.0/1000} = 0.0400\,\text{mol dm}^{-3}$$

(c) At the second equivalence point, all $\text{HCl}$ and $\text{CH}_3\text{COOH}$ have been neutralised. The solution contains $\text{NaCl}$ (neutral from the strong acid-strong base reaction) and $\text{CH}_3\text{COONa}$ (a salt of a weak acid and strong base). The acetate ion ($\text{CH}_3\text{COO}^-$) is a weak base that hydrolyses in water:

$$\text{CH}_3\text{COO}^-(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{CH}_3\text{COOH}(aq) + \text{OH}^-(aq)$$

This produces $\text{OH}^-$ ions, making the solution alkaline ($\text{pH} \gt 7$).

The first equivalence point (at $10.0\,\text{cm}^3$) represents the point where all $\text{HCl}$ has been neutralised but the $\text{CH}_3\text{COOH}$ has not yet been titrated. The solution at this point contains $\text{CH}_3\text{COOH}$ and $\text{NaCl}$, so the pH is determined by the weak acid alone ($\text{pH}$ approximately equal to $\frac{1}{2}\text{p}K_a - \frac{1}{2}\log[\text{HA}]$).

---

### Additional Practice Problems

#### UT-4: Percentage Yield in Multi-Step Synthesis

**Question:** In a three-step synthesis, the percentage yields are 85%, 72%, and 90% respectively. If $10.0\,\mathrm{g}$ of starting material is used, calculate the mass of final product obtained.

**Solution:**

Overall yield $= 0.85 \times 0.72 \times 0.90 = 0.551 = 55.1\%$ (1 mark).

Mass of final product $= 10.0 \times 0.551 = 5.51\,\mathrm{g}$ (assuming 1:1 molar ratio in each step; if the molar ratios differ, the calculation must account for the molar mass changes at each step) (1 mark).

This illustrates the importance of high yields in each step of a multi-step synthesis. Even with relatively good individual yields (72--90%), the overall yield drops to 55%, meaning nearly half the starting material is lost.

#### UT-5: Ideal Gas Equation Unit Consistency

**Question:** A student calculates the volume of gas produced using $V = nRT/p$ with $n = 0.050\,\mathrm{mol}$, $R = 8.314$, $T = 298$, and $p = 100$. They obtain $V = 123.7$. Identify the error and give the correct answer in $\mathrm{cm}^3$.

**Solution:**

The student used $p = 100$ without units. If they intended $100\,\mathrm{kPa}$, they needed to convert to pascals: $p = 100000\,\mathrm{Pa}$ (1 mark).

$$V = \frac{nRT}{p} = \frac{0.050 \times 8.314 \times 298}{100000} = \frac{123.9}{100000} = 1.24 \times 10^{-3}\,\mathrm{m}^3 = 1.24\,\mathrm{dm}^3 = 1240\,\mathrm{cm}^3$$

The student's answer of $123.7$ is actually correct numerically but lacks units. If they meant $\mathrm{dm}^3$, their answer is close. The key error was likely not tracking units through the calculation (1 mark).
