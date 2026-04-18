---
id: stoichiometry
title: Stoichiometry
description: IB Chemistry — moles, molar mass, empirical formulas, gas laws, and solution chemistry.
slug: stoichiometry
---

## The Mole Concept

### Definition

The **mole** is the SI unit for amount of substance. One mole contains exactly
$6.022 \times 10^{23}$ elementary entities (atoms, molecules, ions, etc.).

### Avogadro's Constant

$$
N_A = 6.022 \times 10^{23}\mathrm{ mol}^{-1}
$$

The number of particles $N$ in $n$ moles:

$$
N = n \times N_A
$$

### Molar Mass

The **molar mass** $M$ is the mass of one mole of a substance, expressed in $\mathrm{g/mol}$.

$$
n = \frac{m}{M}
$$

where $m$ is the mass in grams.

| Substance   | Molar Mass (g/mol) |
| ----------- | ------------------ |
| H           | 1.01               |
| C           | 12.01              |
| N           | 14.01              |
| O           | 16.00              |
| Na          | 22.99              |
| Cl          | 35.45              |
| H$_2$O      | 18.02              |
| CO$_2$      | 44.01              |
| NaCl        | 58.44              |
| H$_2$SO$_4$ | 98.08              |

:::info[Example]

Calculate the number of molecules in $5.0\mathrm{ g}$ of water.

$$
n = \frac{m}{M} = \frac{5.0}{18.02} = 0.278\mathrm{ mol}
$$

$$
N = 0.278 \times 6.022 \times 10^{23} = 1.67 \times 10^{23}\mathrm{ molecules}
$$

:::

---

## Empirical and Molecular Formulas

### Empirical Formula

The **empirical formula** gives the simplest whole-number ratio of atoms in a compound.

### Molecular Formula

The **molecular formula** gives the actual number of atoms of each element in a molecule.

$$
\mathrm{Molecular formula} = (\mathrm{Empirical formula})_n
$$

where $n$ is an integer.

### Finding the Empirical Formula

1. Find the mass (or percentage) of each element.
2. Convert masses to moles: $n = \dfrac{m}{M}$.
3. Divide all mole values by the smallest mole value.
4. Round to the nearest whole number (or multiply to get integers).
5. Write the empirical formula.

:::info[Example]

A compound contains $40.0\%$ carbon, $6.7\%$ hydrogen, and $53.3\%$ oxygen by mass. Find its
empirical formula.

| Element | Mass (g) | Molar Mass (g/mol) | Moles | Ratio |
| ------- | -------- | ------------------ | ----- | ----- |
| C       | 40.0     | 12.01              | 3.33  | 1     |
| H       | 6.7      | 1.01               | 6.63  | 2     |
| O       | 53.3     | 16.00              | 3.33  | 1     |

Empirical formula: CH$_2$O.

If the molar mass is $180\mathrm{ g/mol}$, the molecular formula is:

$$
n = \frac{180}{30.03} = 6
$$

Molecular formula: C$_6$H$_{12}$O$_6$ (glucose).

:::

### Hydrated Salts

A hydrated salt contains water of crystallisation. The formula is written as, for example,
CuSO$_4$$\cdot$5H$\_2$O.

To find the number of water molecules:

1. Heat the hydrated salt to remove water.
2. Measure the mass loss.
3. Calculate moles of anhydrous salt and moles of water.
4. Find the ratio.

:::info[Example]

$12.5\mathrm{ g}$ of hydrated copper(II) sulfate, CuSO$_4$$\cdot$xH$_2$O, is heated to give
$8.0\mathrm{ g}$ of anhydrous CuSO$_4$. Find $x$.

Mass of water lost $= 12.5 - 8.0 = 4.5\mathrm{ g}$.

$$
n(\mathrm{CuSO}_4) = \frac{8.0}{159.61} = 0.0501\mathrm{ mol}
$$

$$
n(\mathrm{H}_2\mathrm{O}) = \frac{4.5}{18.02} = 0.250\mathrm{ mol}
$$

$$
x = \frac{0.250}{0.0501} = 4.99 \approx 5
$$

Formula: CuSO$_4$$\cdot$5H$\_2$O.

:::

---

## Chemical Equations and Balancing

### Balancing Equations

Chemical equations must be balanced: the number of atoms of each element must be the same on both
sides (conservation of mass).

### Steps

1. Write the unbalanced equation with correct formulas.
2. Count atoms of each element on both sides.
3. Balance one element at a time using coefficients.
4. Leave hydrogen and oxygen until last.
5. Check that all elements are balanced.
6. Ensure coefficients are in the lowest whole-number ratio.

:::info[Example]

Balance the combustion of propane:

Unbalanced: C$_3$H$_8$ + O$_2$ $\to$ CO$_2$ + H$_2$O

Balance C: C$_3$H$_8$ + O$_2$ $\to$ 3CO$_2$ + H$_2$O

Balance H: C$_3$H$_8$ + O$_2$ $\to$ 3CO$_2$ + 4H$_2$O

Balance O: C$_3$H$_8$ + 5O$_2$ $\to$ 3CO$_2$ + 4H$_2$O

Check: 3C, 8H, 10O on each side. Balanced.

:::

### Ionic Equations

Spectator ions (ions that appear unchanged on both sides) can be removed to give a **net ionic
equation**.

:::info[Example]

AgNO$_3$(aq) + NaCl(aq) $\to$ AgCl(s) + NaNO$_3$(aq)

Full ionic: Ag$^+$(aq) + NO$_3^-$ + Na$^+$ + Cl$^-$ $\to$ AgCl(s) + Na$^+$ + NO$_3^-$

Net ionic: Ag$^+$(aq) + Cl$^-$ $\to$ AgCl(s)

:::

---

## Reactant Calculations

### Limiting Reagent

The **limiting reagent** is the reactant that is completely consumed first and therefore determines
the maximum amount of product formed.

### Steps

1. Calculate moles of each reactant.
2. Determine which reactant is limiting (divide moles by stoichiometric coefficient).
3. Use the limiting reagent to calculate the amount of product.

:::info[Example]

$5.0\mathrm{ g}$ of iron reacts with $3.0\mathrm{ g}$ of sulfur: Fe + S $\to$ FeS.

$$
n(\mathrm{Fe}) = \frac{5.0}{55.85} = 0.0895\mathrm{ mol}
$$

$$
n(\mathrm{S}) = \frac{3.0}{32.07} = 0.0936\mathrm{ mol}
$$

Stoichiometric ratio is 1:1, so Fe is the limiting reagent (fewer moles).

$$
n(\mathrm{FeS}) = 0.0895\mathrm{ mol}
$$

$$
m(\mathrm{FeS}) = 0.0895 \times 87.91 = 7.87\mathrm{ g}
$$

:::

### Percentage Yield

$$
\mathrm{Percentage yield} = \frac{\mathrm{actual yield}}{\mathrm{theoretical yield}} \times 100\%
$$

:::info[Example]

If $6.5\mathrm{ g}$ of FeS was actually produced in the previous example:

$$
\mathrm{Percentage yield} = \frac{6.5}{7.87} \times 100\% = 82.6\%
$$

:::

---

## Gas Laws

### Boyle's Law (Constant Temperature)

For a fixed amount of gas at constant temperature:

$$
P_1 V_1 = P_2 V_2
$$

Pressure is inversely proportional to volume: $P \propto \dfrac{1}{V}$.

### Charles's Law (Constant Pressure)

For a fixed amount of gas at constant pressure:

$$
\frac{V_1}{T_1} = \frac{V_2}{T_2}
$$

(Temperature must be in Kelvin.)

Volume is directly proportional to absolute temperature: $V \propto T$.

### Gay-Lussac's Law (Constant Volume)

For a fixed amount of gas at constant volume:

$$
\frac{P_1}{T_1} = \frac{P_2}{T_2}
$$

Pressure is directly proportional to absolute temperature: $P \propto T$.

### The Ideal Gas Equation

Combining all three laws:

$$
PV = nRT
$$

where:

- $P$ = pressure (Pa)
- $V$ = volume (m$^3$)
- $n$ = number of moles
- $R$ = universal gas constant $= 8.314\mathrm{ J/(mol}\cdot\mathrm{K)}$
- $T$ = temperature (K)

### Molar Volume

At STP ($0\degree\mathrm{C}$, $100\mathrm{ kPa}$), one mole of any ideal gas occupies $22.7\mathrm{ L}$.

At RTP ($25\degree\mathrm{C}$, $100\mathrm{ kPa}$), one mole occupies $24.8\mathrm{ L}$.

:::info[Example]

Calculate the volume occupied by $2.5\mathrm{ mol}$ of gas at $25\degree\mathrm{C}$ and
$1.2\mathrm{ atm}$.

$$
P = 1.2 \times 101325 = 121590\mathrm{ Pa}
$$

$$
T = 298\mathrm{ K}
$$

$$
V = \frac{nRT}{P} = \frac{2.5 \times 8.314 \times 298}{121590} = \frac{6194.2}{121590} = 0.0509\mathrm{ m}^3 = 50.9\mathrm{ L}
$$

:::

### Real Gas Deviations

Real gases deviate from ideal behaviour at:

- **High pressures** (molecules are closer, intermolecular forces become significant).
- **Low temperatures** (molecules move slower, intermolecular forces become significant).

### Van der Waals Equation

A more accurate equation for real gases:

$$
\left(P + \frac{a n^2}{V^2}\right)\!\left(V - nb\right) = nRT
$$

where $a$ accounts for intermolecular attractions and $b$ accounts for molecular volume.

### Kinetic Molecular Theory Assumptions

1. Gas particles have negligible volume.
2. Gas particles exert no forces on each other.
3. All collisions are perfectly elastic.
4. The average kinetic energy is proportional to temperature: $\bar{E}_k = \dfrac{3}{2}k_BT$.

---

## Solution Chemistry

### Concentration

#### Molarity

$$
c = \frac{n}{V}
$$

where $c$ is in $\mathrm{mol/L}$ (or M), $n$ in mol, and $V$ in L.

#### Molality

$$
b = \frac{n_{\mathrm{solute}}}{m_{\mathrm{solvent}}}
$$

where $b$ is in $\mathrm{mol/kg}$.

#### Mass Percentage

$$
\% = \frac{m_{\mathrm{solute}}}{m_{\mathrm{solution}}} \times 100\%
$$

#### Parts Per Million (ppm)

$$
\mathrm{ppm} = \frac{m_{\mathrm{solute}}}{m_{\mathrm{solution}}} \times 10^6
$$

:::info[Example]

What is the concentration of a solution made by dissolving $10.0\mathrm{ g}$ of NaCl in enough water
to make $250\mathrm{ mL}$ of solution?

$$
n = \frac{10.0}{58.44} = 0.171\mathrm{ mol}
$$

$$
c = \frac{0.171}{0.250} = 0.684\mathrm{ mol/L}
$$

:::

### Dilution

$$
c_1 V_1 = c_2 V_2
$$

:::info[Example]

What volume of $6.0\mathrm{ M}$ HCl is needed to make $500\mathrm{ mL}$ of $0.50\mathrm{ M}$ HCl?

$$
V_1 = \frac{c_2 V_2}{c_1} = \frac{0.50 \times 500}{6.0} = 41.7\mathrm{ mL}
$$

:::

### Standard Solutions

A standard solution is one of accurately known concentration. To prepare:

1. Calculate the mass of solute needed.
2. Accurately weigh the solute.
3. Dissolve in a small amount of solvent.
4. Transfer to a volumetric flask.
5. Add solvent to the calibration mark.

### Titration Calculations

Titration is used to determine the concentration of an unknown solution by reacting it with a
standard solution.

:::info[Example]

$25.0\mathrm{ mL}$ of NaOH is titrated with $0.100\mathrm{ M}$ HCl. The endpoint is reached at
$20.0\mathrm{ mL}$ of HCl. Find the concentration of NaOH.

$$
\mathrm{NaOH} + \mathrm{HCl} \to \mathrm{NaCl} + \mathrm{H}_2\mathrm{O}
$$

$$
n(\mathrm{HCl}) = 0.100 \times 0.0200 = 0.00200\mathrm{ mol}
$$

Stoichiometry 1:1, so $n(\mathrm{NaOH}) = 0.00200\mathrm{ mol}$.

$$
c(\mathrm{NaOH}) = \frac{0.00200}{0.0250} = 0.0800\mathrm{ M}
$$

:::

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

What is the empirical formula of a compound that is $36.5\%$ sodium, $25.4\%$ sulfur, and $38.1\%$
oxygen?

| Element | Mass (g) | Molar Mass | Moles | Ratio |
| ------- | -------- | ---------- | ----- | ----- |
| Na      | 36.5     | 22.99      | 1.588 | 2     |
| S       | 25.4     | 32.07      | 0.792 | 1     |
| O       | 38.1     | 16.00      | 2.381 | 3     |

Empirical formula: Na$_2$SO$_3$.

### Question 2 (Paper 2 style)

$10.0\mathrm{ g}$ of calcium carbonate (CaCO$_3$) is heated until completely decomposed: CaCO$_3$
$\to$ CaO + CO$_2$.

**(a)** Calculate the volume of CO$_2$ produced at RTP.

$$
n(\mathrm{CaCO}_3) = \frac{10.0}{100.09} = 0.0999\mathrm{ mol}
$$

$$
n(\mathrm{CO}_2) = 0.0999\mathrm{ mol}
$$

$$
V = n \times 24.8 = 0.0999 \times 24.8 = 2.48\mathrm{ L}
$$

**(b)** Calculate the mass of CaO produced.

$$
m(\mathrm{CaO}) = 0.0999 \times 56.08 = 5.60\mathrm{ g}
$$

### Question 3 (Paper 1 style)

A gas at $300\mathrm{ K}$ and $1.5\mathrm{ atm}$ occupies $4.0\mathrm{ L}$. What volume does it occupy at
$350\mathrm{ K}$ and $2.0\mathrm{ atm}$?

$$
\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}
$$

$$
V_2 = \frac{P_1 V_1 T_2}{P_2 T_1} = \frac{1.5 \times 4.0 \times 350}{2.0 \times 300} = \frac{2100}{600} = 3.5\mathrm{ L}
$$

### Question 4 (Paper 2 style)

$3.0\mathrm{ g}$ of magnesium reacts with excess hydrochloric acid: Mg + 2HCl $\to$ MgCl$_2$ + H$_2$.

**(a)** Calculate the moles of hydrogen gas produced.

$$
n(\mathrm{Mg}) = \frac{3.0}{24.31} = 0.123\mathrm{ mol}
$$

$$
n(\mathrm{H}_2) = 0.123\mathrm{ mol} \mathrm{ (1:1 ratio)}
$$

**(b)** Calculate the volume of H$_2$ at STP.

$$
V = 0.123 \times 22.7 = 2.79\mathrm{ L}
$$

**(c)** If only $2.5\mathrm{ L}$ of H$_2$ was collected, calculate the percentage yield.

$$
\mathrm{Percentage yield} = \frac{2.5}{2.79} \times 100\% = 89.6\%
$$

---

## Summary

| Formula          | Expression                                               |
| ---------------- | -------------------------------------------------------- |
| Moles from mass  | $n = \dfrac{m}{M}$                                       |
| Particles        | $N = nN_A$                                               |
| Molarity         | $c = \dfrac{n}{V}$                                       |
| Ideal gas        | $PV = nRT$                                               |
| Boyle's law      | $P_1V_1 = P_2V_2$                                        |
| Charles's law    | $\dfrac{V_1}{T_1} = \dfrac{V_2}{T_2}$                    |
| Dilution         | $c_1V_1 = c_2V_2$                                        |
| Percentage yield | $\dfrac{\mathrm{actual}}{\mathrm{theoretical}} \times 100\%$ |

:::tip[Exam Strategy]

Always show your working with units. For gas calculations, ensure temperature is in Kelvin. For
titration calculations, clearly identify the mole ratio from the balanced equation. Remember that
molar volume at STP is 22.7 L/mol and at RTP is 24.8 L/mol.

:::

---

## Gas Laws: Extended

### Dalton's Law of Partial Pressures

For a mixture of non-reacting gases:

$$
P_{\mathrm{total}} = P_1 + P_2 + P_3 + \cdots
$$

The partial pressure of each gas:

$$
P_i = x_i \times P_{\mathrm{total}}
$$

where $x_i$ is the mole fraction of gas $i$.

### Graham's Law of Diffusion

The rate of diffusion (or effusion) of a gas is inversely proportional to the square root of its
molar mass:

$$
\frac{r_1}{r_2} = \sqrt{\frac{M_2}{M_1}}
$$

:::info[Example]

Compare the rates of diffusion of He (4 g/mol) and O$_2$ (32 g/mol).

$$
\frac{r_{\mathrm{He}}}{r_{\mathrm{O}_2}} = \sqrt{\frac{32}{4}} = \sqrt{8} = 2.83
$$

Helium diffuses about 2.83 times faster than oxygen.

:::

### Ideal Gas Law Applications

#### Molar Mass of a Gas

$$
M = \frac{mRT}{PV}
$$

#### Density of a Gas

$$
\rho = \frac{PM}{RT}
$$

:::info[Example]

A gas has a density of $1.43\mathrm{ g/L}$ at STP. Find its molar mass.

$$
M = \frac{\rho RT}{P} = \frac{1.43 \times 8.314 \times 273}{101325} = \frac{3247}{101325} = 0.0320\mathrm{ kg/mol} = 32.0\mathrm{ g/mol}
$$

The gas is likely O$_2$.

:::

---

## Solutions: Extended

### Concentration Conversions

| From            | To              | Method                                        |
| --------------- | --------------- | --------------------------------------------- |
| Molarity        | Mass percentage | $c \times M \times 100 / (1000\rho)$          |
| Mass percentage | Molarity        | $(\%\mathrm{/}100) \times \rho \times 1000 / M$ |
| Molarity        | ppm             | $c \times M \times 10^6 / 1000\rho$           |

### Colligative Properties

Properties that depend on the number of solute particles (not their identity):

1. **Boiling point elevation**: $\Delta T_b = iK_b \times m$
2. **Freezing point depression**: $\Delta T_f = iK_f \times m$
3. **Osmotic pressure**: $\Pi = icRT$

where $i$ is the van't Hoff factor (number of particles per formula unit), $K_b$ and $K_f$ are
constants, and $m$ is molality.

| Solute                          | $i$ |
| ------------------------------- | --- |
| Non-electrolyte (e.g., glucose) | 1   |
| NaCl                            | 2   |
| CaCl$_2$                        | 3   |

---

## Water of Crystallisation: Extended

### Determining the Formula of a Hydrate

**Procedure**:

1. Weigh the hydrated salt.
2. Heat gently to drive off water.
3. Cool in a desiccator and reweigh.
4. Repeat until constant mass is achieved.
5. Calculate the moles of anhydrous salt and water.

:::info[Example]

$12.5\mathrm{ g}$ of hydrated magnesium sulfate, MgSO$_4$$\cdot$xH$_2$O, is heated to constant mass of
$6.1\mathrm{ g}$.

Mass of water lost $= 12.5 - 6.1 = 6.4\mathrm{ g}$.

$$
n(\mathrm{MgSO}_4) = \frac{6.1}{120.37} = 0.0507\mathrm{ mol}
$$

$$
n(\mathrm{H}_2\mathrm{O}) = \frac{6.4}{18.02} = 0.355\mathrm{ mol}
$$

$$
x = \frac{0.355}{0.0507} = 7.0
$$

Formula: MgSO$_4$$\cdot$7H$\_2$O (Epsom salt).

:::

---

## Additional IB Exam-Style Questions

### Question 5 (Paper 2 style)

$20.0\mathrm{ cm}^3$ of $0.100\mathrm{ M}$ sulfuric acid is titrated with $0.200\mathrm{ M}$ sodium
hydroxide.

**(a)** Write the balanced equation.

H$_2$SO$_4$ + 2NaOH $\to$ Na$_2$SO$_4$ + 2H$_2$O

**(b)** Calculate the volume of NaOH needed to reach the equivalence point.

$$
n(\mathrm{H}_2\mathrm{SO}_4) = 0.100 \times 0.0200 = 0.00200\mathrm{ mol}
$$

Mole ratio: $n(\mathrm{NaOH}) = 2 \times n(\mathrm{H}_2\mathrm{SO}_4) = 0.00400\mathrm{ mol}$.

$$
V(\mathrm{NaOH}) = \frac{0.00400}{0.200} = 0.0200\mathrm{ L} = 20.0\mathrm{ cm}^3
$$

**(c)** What is the pH at the equivalence point?

The salt Na$_2$SO$_4$ is formed from a strong acid and strong base. The solution is neutral: pH = 7.

### Question 6 (Paper 1 style)

Which contains the greatest number of molecules?

A. $1\mathrm{ g}$ of H$_2$ B. $1\mathrm{ g}$ of O$_2$ C. $1\mathrm{ g}$ of N$_2$ D. $1\mathrm{ g}$ of CO$_2$

**Answer: A.** Since $n = m/M$, and H$_2$ has the smallest molar mass (2 g/mol), $1\mathrm{ g}$ of
H$_2$ gives $0.5\mathrm{ mol}$, which is more moles (and thus more molecules) than the others.

### Question 7 (Paper 2 style)

Ammonia gas is produced by the reaction: N$_2$(g) + 3H$_2$(g) $\to$ 2NH$_3$(g).

If $56.0\mathrm{ g}$ of N$_2$ reacts with excess H$_2$ at $400\degree\mathrm{C}$ and $200\mathrm{ atm}$:

**(a)** Calculate the moles of NH$_3$ produced (assuming 100% yield).

$$
n(\mathrm{N}_2) = \frac{56.0}{28.02} = 2.00\mathrm{ mol}
$$

$$
n(\mathrm{NH}_3) = 2 \times 2.00 = 4.00\mathrm{ mol}
$$

**(b)** Calculate the volume of NH$_3$ at these conditions.

$$
V = \frac{nRT}{P} = \frac{4.00 \times 8.314 \times 673}{200 \times 101325} = \frac{22390}{20265000} = 1.105 \times 10^{-3}\mathrm{ m}^3 = 1.105\mathrm{ L}
$$

**(c)** If the actual yield is $3.20\mathrm{ mol}$, calculate the percentage yield.

$$
\mathrm{Percentage yield} = \frac{3.20}{4.00} \times 100\% = 80.0\%
$$

---

## Stoichiometry: Extended Topics

### Back Titration

A back titration is used when the analyte cannot be directly titrated. An excess of a standard
reagent is added, and the unreacted portion is titrated.

:::info[Example]

An antacid tablet contains CaCO$_3$. The tablet is dissolved in $50.0\mathrm{ cm}^3$ of
$0.200\mathrm{ M}$ HCl (excess). The remaining acid requires $30.0\mathrm{ cm}^3$ of $0.100\mathrm{ M}$
NaOH for neutralisation.

**Step 1**: Total moles of HCl added:

$$
n(\mathrm{HCl}_{\mathrm{total}}) = 0.200 \times 0.0500 = 0.0100\mathrm{ mol}
$$

**Step 2**: Moles of HCl that reacted with NaOH:

$$
n(\mathrm{HCl}_{\mathrm{unreacted}}) = n(\mathrm{NaOH}) = 0.100 \times 0.0300 = 0.00300\mathrm{ mol}
$$

**Step 3**: Moles of HCl that reacted with CaCO$_3$:

$$
n(\mathrm{HCl}_{\mathrm{reacted}}) = 0.0100 - 0.00300 = 0.00700\mathrm{ mol}
$$

**Step 4**: Moles of CaCO$_3$ (ratio 1:2 with HCl):

$$
n(\mathrm{CaCO}_3) = \frac{0.00700}{2} = 0.00350\mathrm{ mol}
$$

**Step 5**: Mass of CaCO$_3$:

$$
m = 0.00350 \times 100.09 = 0.350\mathrm{ g}
$$

:::

### Gravimetric Analysis

Gravimetric analysis determines the amount of an analyte by measuring mass.

**Steps**:

1. Precipitate the analyte as an insoluble compound.
2. Filter, wash, and dry the precipitate.
3. Weigh the precipitate.
4. Calculate the amount of analyte from stoichiometry.

:::info[Example]

A solution contains sulfate ions. BaCl$_2$ is added to precipitate BaSO$_4$. The precipitate is
filtered, dried, and weighed at $0.582\mathrm{ g}$.

$$
n(\mathrm{BaSO}_4) = \frac{0.582}{233.39} = 0.00249\mathrm{ mol}
$$

Since 1 mol BaSO$_4$ contains 1 mol SO$_4^{2-}$:

$$
m(\mathrm{SO}_4^{2-}) = 0.00249 \times 96.06 = 0.239\mathrm{ g}
$$

:::

### Gas Collection Methods

| Method                         | Best For         | Gas Collected              |
| ------------------------------ | ---------------- | -------------------------- |
| Downward displacement of water | Insoluble gases  | Oxygen, hydrogen           |
| Upward delivery                | Soluble gases    | Ammonia                    |
| Gas syringe                    | Accurate volume  | Any gas                    |
| Over water (eudiometer)        | Measuring volume | Gases that do not dissolve |

### Ideal Gas Assumptions

The ideal gas model assumes:

1. Gas particles have negligible volume.
2. No intermolecular forces between particles.
3. All collisions are perfectly elastic.
4. Particles are in continuous random motion.

Real gases deviate from ideal behaviour at high pressure and low temperature because:

- Particle volume becomes significant.
- Intermolecular forces become significant.

---

## Additional IB Exam-Style Questions

### Question 8 (Paper 1 style)

What volume of $0.500\mathrm{ M}$ H$_2$SO$_4$ is required to completely neutralise $25.0\mathrm{ cm}^3$
of $0.400\mathrm{ M}$ NaOH?

$$
\mathrm{H}_2\mathrm{SO}_4 + 2\mathrm{NaOH} \to \mathrm{Na}_2\mathrm{SO}_4 + 2\mathrm{H}_2\mathrm{O}
$$

$$
n(\mathrm{NaOH}) = 0.400 \times 0.0250 = 0.0100\mathrm{ mol}
$$

$$
n(\mathrm{H}_2\mathrm{SO}_4) = \frac{0.0100}{2} = 0.00500\mathrm{ mol}
$$

$$
V(\mathrm{H}_2\mathrm{SO}_4) = \frac{0.00500}{0.500} = 0.0100\mathrm{ L} = 10.0\mathrm{ cm}^3
$$

### Question 9 (Paper 2 style)

A mixture of NaHCO$_3$ and NaCl has a total mass of $4.68\mathrm{ g}$. When heated, only NaHCO$_3$
decomposes:

$$
2\mathrm{NaHCO}_3 \to \mathrm{Na}_2\mathrm{CO}_3 + \mathrm{H}_2\mathrm{O} + \mathrm{CO}_2
$$

The mass loss is $1.32\mathrm{ g}$. Find the percentage of NaHCO$_3$ in the mixture.

The mass loss is due to H$_2$O + CO$_2$ ($18 + 44 = 62\mathrm{ g/mol}$ for each 2 mol NaHCO$_3$, or
$31\mathrm{ g/mol}$ per mole of NaHCO$_3$).

$$
n(\mathrm{NaHCO}_3) = \frac{1.32}{31} = 0.0426\mathrm{ mol}
$$

$$
m(\mathrm{NaHCO}_3) = 0.0426 \times 84.01 = 3.58\mathrm{ g}
$$

$$
\%\mathrm{NaHCO}_3 = \frac{3.58}{4.68} \times 100\% = 76.5\%
$$

### Question 10 (Paper 1 style)

Avogadro's constant is $6.02 \times 10^{23}$. What is the number of oxygen atoms in
$0.050\mathrm{ mol}$ of Al$_2$(SO$_4$)$_3$?

$$
n(\mathrm{O}) = 0.050 \times 12 = 0.60\mathrm{ mol}
$$

$$
\mathrm{Number of O atoms} = 0.60 \times 6.02 \times 10^{23} = 3.61 \times 10^{23}
$$
