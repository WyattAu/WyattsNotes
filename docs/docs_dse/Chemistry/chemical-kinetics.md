---
id: dse-chemistry-chemical-kinetics
title: Chemistry - Chemical Kinetics
description:
  DSE Chemistry notes covering rate of reaction, measuring rates, factors affecting rate, collision
  theory, activation energy, Maxwell-Boltzmann distribution, catalytic converters, enzyme catalysis,
  rate equations, order of reaction, and the Arrhenius equation.
slug: chemical-kinetics
tags: [DSE, Chemistry]
categories: [DSE, Chemistry]
date: 2026-04-08T00:00:00.000Z
---

## Rate of Reaction

### Definition

The rate of reaction measures how fast reactants are consumed or products are formed.

$$\mathrm{Rate} = \frac{\mathrm{change in amount (mol)}}{\mathrm{change in time (s)}}$$

For a reaction $a\mathrm{A} + b\mathrm{B} \to c\mathrm{C} + d\mathrm{D}$:

$$\mathrm{Rate} = -\frac{1}{a}\frac{d[\mathrm{A}]}{dt} = -\frac{1}{b}\frac{d[\mathrm{B}]}{dt} = \frac{1}{c}\frac{d[\mathrm{C}]}{dt} = \frac{1}{d}\frac{d[\mathrm{D}]}{dt}$$

The negative sign indicates that reactant concentrations decrease over time.

### Average Rate vs Instantaneous Rate

- **Average rate:** total change divided by total time (gradient of secant on concentration-time
  graph).
- **Instantaneous rate:** rate at a specific moment (gradient of tangent on concentration-time
  graph).

### Units

Rate is typically expressed in mol dm$^{-3}$ s$^{-1}$ (change in concentration per unit time).

---

## Measuring Rates of Reaction

### Methods

| Method            | Measured Quantity               | Suitable Reactions                                    |
| ----------------- | ------------------------------- | ----------------------------------------------------- |
| Collection of gas | Volume of gas over time         | Reactions producing gas ($\mathrm{CO}_2$, $\mathrm{H}_2$) |
| Mass loss         | Mass of flask over time         | Reactions producing gas                               |
| Titration         | Concentration at time intervals | Reactions where aliquots can be quenched              |
| Colorimetry       | Absorbance over time            | Reactions involving colour change                     |
| Conductivity      | Conductance over time           | Reactions producing/ consuming ions                   |
| Clock reaction    | Time for observable change      | Initial rate determination                            |

### Gas Collection Methods

1. **Gas syringe:** Direct measurement of gas volume. Accurate but limited range.
2. **Inverted burette over water:** Useful for insoluble gases. Volume read from burette.
3. **Mass loss method:** The flask is placed on a balance; the mass decreases as gas escapes.

:::warning
The mass loss method only works if the gas escapes the flask. If the flask is sealed, no
mass change occurs. Also, ensure the reaction does not produce heat that would affect the balance
reading.
:::

### Concentration-Time Graphs

For reactants: concentration decreases over time (negative gradient).

For products: concentration increases over time (positive gradient).

The gradient at any point gives the instantaneous rate. The gradient decreases over time as
reactants are consumed and rate slows down.

### Initial Rate

The initial rate is the rate at $t = 0$, determined from the gradient of the tangent at the origin
of a concentration-time graph. It is the fastest rate in the reaction.

---

## Factors Affecting the Rate of Reaction

### Concentration (or Pressure for Gases)

Increasing concentration increases the frequency of collisions between particles, increasing the
rate of reaction.

For gaseous reactants, increasing pressure has the same effect as increasing concentration.

### Temperature

Increasing temperature increases the kinetic energy of particles. More particles have energy
$\geq E_a$ (activation energy), so more successful collisions occur per unit time. This is the
dominant effect. The increased collision frequency is a secondary, minor effect.

**Approximate rule:** Rate roughly doubles for every $10^\circ\mathrm{C}$ rise in temperature.

### Surface Area of Solid Reactants

Increasing surface area (e.g., using a powder instead of a lump) increases the number of particles
exposed for collision, increasing the rate.

### Catalyst

A catalyst provides an alternative reaction pathway with a lower activation energy. It increases the
rate without being consumed. It does not affect the position of equilibrium or the equilibrium
yield.

| Factor        | Effect on Rate | Effect on $E_a$ | Effect on Equilibrium |
| ------------- | -------------- | --------------- | --------------------- |
| Concentration | Increases      | No change       | Position may shift    |
| Temperature   | Increases      | No change       | Position may shift    |
| Surface area  | Increases      | No change       | No effect             |
| Catalyst      | Increases      | Decreases       | No effect on position |

---

## Collision Theory

### Successful Collisions

For a reaction to occur, particles must:

1. **Collide** with each other (with the correct orientation).
2. Have kinetic energy **$\geq E_a$** (activation energy).

Only a small fraction of collisions lead to reaction because most particles do not have sufficient
energy at any given temperature.

### Activation Energy ($E_a$)

The minimum energy that colliding particles must have for a successful reaction.

$$\mathrm{Reactants} \xrightarrow{E_a} \mathrm{Products}$$

On an energy profile diagram, $E_a$ is the energy difference between the reactants and the peak
(transition state).

### Effect of a Catalyst on Activation Energy

A catalyst provides an alternative pathway with lower $E_a$:

$$\mathrm{Reactants} \xrightarrow{E_a \mathrm{ (uncatalysed)}} \mathrm{Products}$$
$$\mathrm{Reactants} \xrightarrow{E_a \mathrm{ (catalysed)}} \mathrm{Products}$$

The catalysed pathway has a lower energy barrier, so more particles have sufficient energy to react.

---

## Maxwell-Boltzmann Distribution

### Description

At a given temperature, the kinetic energies of particles in a gas or liquid follow a
Maxwell-Boltzmann distribution:

- The curve starts at the origin (no particles have zero energy).
- It rises to a peak and then tails off exponentially.
- The peak represents the most probable energy.
- The area under the curve equals the total number of particles.

### Effect of Temperature

When temperature increases:

- The curve shifts to the right (higher average energy).
- The peak lowers and broadens.
- The area under the curve remains constant (same number of particles).
- A larger fraction of particles has energy $\geq E_a$.

$$\frac{\mathrm{Fraction with } E \geq E_a \mathrm{ at } T_2}{\mathrm{Fraction with } E \geq E_a \mathrm{ at } T_1} \gt 1 \quad \mathrm{when } T_2 \gt T_1$$

### Effect of a Catalyst

The $E_a$ line shifts to the left on the Maxwell-Boltzmann distribution. More particles now have
energy $\geq E_a$ (the new, lower activation energy), so the rate increases.

:::info
A catalyst does NOT change the distribution itself. It only lowers the threshold. The curve
shape remains the same at the same temperature.
:::

### Key DSE Exam Points

- The Maxwell-Boltzmann curve **never** touches the x-axis.
- The total area is always constant for the same number of particles.
- The most probable energy increases with temperature but the average energy increase is small
  compared to the dramatic increase in the fraction exceeding $E_a$.

---

## Energy Profile Diagrams

### Exothermic Reaction (Uncatalysed)

```
Energy
  |          /\
  |         /  \  Transition state
  |        /    \
  |  E_a  /      \
  |      /        \
  |-----/----------\---- Products (lower energy)
  |    /            |
  |   / Reactants   |  ΔH < 0 (exothermic)
  |  /              |
  | /               |
  |/________________|____________
```

### Endothermic Reaction (Uncatalysed)

```
Energy
  |         /\
  |        /  \  Transition state
  |       /    \
  |      /      \
  |     /        \
  |    /          \---- Products (higher energy)
  |   /            |
  |  /  E_a        |  ΔH > 0 (endothermic)
  | /              |
  |/ Reactants     |
  |_________________|____________
```

### Catalysed vs Uncatalysed

On the same diagram, the catalysed pathway has a lower peak (lower $E_a$). The reactant and product
energy levels remain unchanged. $\Delta H$ is the same for both pathways.

---

## Catalytic Converters

### Purpose

Catalytic converters reduce the emission of toxic gases from car exhausts.

### Reactions

1. **Oxidation of CO:**

$$2\mathrm{CO} + \mathrm{O}_2 \xrightarrow{\mathrm{Pt, Pd}} 2\mathrm{CO}_2$$

2. **Oxidation of unburnt hydrocarbons (e.g., octane):**

$$2\mathrm{C}_8\mathrm{H}_{18} + 25\mathrm{O}_2 \xrightarrow{\mathrm{Pt, Pd}} 16\mathrm{CO}_2 + 18\mathrm{H}_2\mathrm{O}$$

3. **Reduction of nitrogen oxides:**

$$2\mathrm{NO} \xrightarrow{\mathrm{Rh}} \mathrm{N}_2 + \mathrm{O}_2$$

$$2\mathrm{NO}_2 \xrightarrow{\mathrm{Rh}} \mathrm{N}_2 + 2\mathrm{O}_2$$

### Catalysts Used

- **Platinum (Pt)** and **palladium (Pd):** for oxidation reactions.
- **Rhodium (Rh):** for reduction of NO$_x$.

### Limitations

- **Lead poisoning:** Lead compounds in "leaded" petrol coat and deactivate the catalyst. This is
  why unleaded petrol is required for cars with catalytic converters.
- **Temperature dependence:** The converter only works efficiently at high temperatures (above about
  $300^\circ\mathrm{C}$). It is ineffective during cold starts.
- **Sulfur poisoning:** Sulfur compounds in fuel can also poison the catalyst.

---

## Enzyme Catalysis

### Enzymes as Biological Catalysts

Enzymes are protein molecules that catalyse specific biochemical reactions.

### Properties

1. **Specificity:** Each enzyme catalyses only one reaction (or a small group of reactions).
2. **Efficiency:** Enzymes can increase reaction rates by factors of $10^6$ to $10^{12}$.
3. **Optimum temperature:** Most enzymes work best around $37^\circ\mathrm{C}$ (body temperature).
   Above about $45^\circ\mathrm{C}$, the enzyme denatures (loses its 3D structure) and activity drops
   sharply.
4. **Optimum pH:** Each enzyme has an optimal pH. Pepsin (stomach) works at pH ~2; trypsin
   (intestine) works at pH ~8.
5. **Concentration dependence:** Rate increases with enzyme concentration (at fixed substrate
   concentration) and with substrate concentration (at fixed enzyme concentration), until a maximum
   is reached.

### Lock and Key Model

The substrate fits into the active site of the enzyme like a key in a lock. The enzyme-substrate
complex forms, the reaction occurs, and products are released. The enzyme is unchanged and available
for further catalysis.

### Effect of Temperature on Enzyme Activity

- Below optimum: rate increases with temperature (standard kinetic effect).
- At optimum (~$37^\circ\mathrm{C}$): maximum rate.
- Above optimum: enzyme denatures, rate drops rapidly.
- At very high temperatures: complete loss of activity.

### Effect of pH on Enzyme Activity

- Changes in pH alter the charges on amino acid residues at the active site.
- This changes the shape of the active site, reducing substrate binding.
- Extreme pH values cause permanent denaturation.

---

## Rate Equations

### Definition

For a reaction $a\mathrm{A} + b\mathrm{B} \to \mathrm{products}$, the rate equation is:

$$\mathrm{Rate} = k[\mathrm{A}]^m[\mathrm{B}]^n$$

Where:

- $k$ = rate constant (depends on temperature and catalyst)
- $m$ = order of reaction with respect to A
- $n$ = order of reaction with respect to B
- Overall order = $m + n$

:::warning
The orders $m$ and $n$ are determined experimentally. They are NOT necessarily equal to
the stoichiometric coefficients $a$ and $b$.
:::

### Order of Reaction

**Zero order:** Rate is independent of concentration.

$$\mathrm{Rate} = k$$

Concentration decreases linearly with time: $[\mathrm{A}] = [\mathrm{A}]_0 - kt$

**First order:** Rate is directly proportional to concentration.

$$\mathrm{Rate} = k[\mathrm{A}]$$

**Second order:** Rate is proportional to the square of concentration.

$$\mathrm{Rate} = k[\mathrm{A}]^2$$

### Determining Order from Initial Rates

Run experiments with different initial concentrations and measure the initial rate.

If doubling [A] doubles the rate: first order with respect to A. If doubling [A] quadruples the
rate: second order with respect to A. If doubling [A] has no effect on the rate: zero order with
respect to A.

**Worked example 1:** For the reaction $\mathrm{A} + \mathrm{B} \to \mathrm{C}$:

| Experiment | $[\mathrm{A}]$ (mol/dm$^3$) | $[\mathrm{B}]$ (mol/dm$^3$) | Initial Rate (mol dm$^{-3}$ s$^{-1}$) |
| ---------- | ------------------------- | ------------------------- | ------------------------------------- |
| 1          | 0.10                      | 0.10                      | $2.0 \times 10^{-4}$                  |
| 2          | 0.20                      | 0.10                      | $4.0 \times 10^{-4}$                  |
| 3          | 0.10                      | 0.20                      | $8.0 \times 10^{-4}$                  |

Determine the rate equation and the rate constant.

<details>
<summary>Answer</summary>

Comparing experiments 1 and 2: [A] doubles, [B] constant, rate doubles.

Order with respect to A = 1 (first order).

Comparing experiments 1 and 3: [A] constant, [B] doubles, rate quadruples.

Order with respect to B = 2 (second order).

Rate equation: $\mathrm{Rate} = k[\mathrm{A}][\mathrm{B}]^2$

Using experiment 1:

$k = \dfrac{\mathrm{Rate}}{[\mathrm{A}][\mathrm{B}]^2} = \dfrac{2.0 \times 10^{-4}}{0.10 \times (0.10)^2} = \dfrac{2.0 \times 10^{-4}}{0.0010} = 0.20 \mathrm{ dm}^6 \mathrm{ mol}^{-2} \mathrm{ s}^{-1}$

Check with experiment 3:
$\mathrm{Rate} = 0.20 \times 0.10 \times (0.20)^2 = 0.20 \times 0.10 \times 0.040 = 8.0 \times 10^{-4}$.
Correct.

</details>

**Worked example 2:** For the reaction $\mathrm{X} + 2\mathrm{Y} \to \mathrm{Z}$:

| Experiment | $[\mathrm{X}]$ (mol/dm$^3$) | $[\mathrm{Y}]$ (mol/dm$^3$) | Initial Rate (mol dm$^{-3}$ s$^{-1}$) |
| ---------- | ------------------------- | ------------------------- | ------------------------------------- |
| 1          | 0.20                      | 0.10                      | $6.0 \times 10^{-3}$                  |
| 2          | 0.40                      | 0.10                      | $1.2 \times 10^{-2}$                  |
| 3          | 0.20                      | 0.20                      | $6.0 \times 10^{-3}$                  |

<details>
<summary>Answer</summary>

Exp 1 vs 2: [X] doubles, rate doubles. First order in X.

Exp 1 vs 3: [Y] doubles, rate unchanged. Zero order in Y.

Rate equation: $\mathrm{Rate} = k[\mathrm{X}]$

$k = \dfrac{6.0 \times 10^{-3}}{0.20} = 0.030 \mathrm{ s}^{-1}$

</details>

### Units of the Rate Constant

The units of $k$ depend on the overall order of reaction.

| Overall Order | Rate Equation                    | Units of $k$               |
| ------------- | -------------------------------- | -------------------------- |
| 0             | Rate = $k$                       | mol dm$^{-3}$ s$^{-1}$     |
| 1             | Rate = $k[\mathrm{A}]$             | s$^{-1}$                   |
| 2             | Rate = $k[\mathrm{A}]^2$           | dm$^3$ mol$^{-1}$ s$^{-1}$ |
| 3             | Rate = $k[\mathrm{A}]^3$           | dm$^6$ mol$^{-2}$ s$^{-1}$ |
| 1 + 2 = 3     | Rate = $k[\mathrm{A}][\mathrm{B}]^2$ | dm$^6$ mol$^{-2}$ s$^{-1}$ |

---

## The Arrhenius Equation

### Equation

$$k = A e^{-E_a / RT}$$

Where:

- $k$ = rate constant
- $A$ = pre-exponential factor (frequency factor)
- $E_a$ = activation energy (J/mol)
- $R$ = gas constant = 8.314 J/(mol K)
- $T$ = temperature (K)

### Logarithmic Form

$$\ln k = \ln A - \frac{E_a}{RT}$$

or equivalently:

$$\log_{10} k = \log_{10} A - \frac{E_a}{2.303RT}$$

### Plotting

A plot of $\ln k$ (y-axis) vs $1/T$ (x-axis) gives a straight line:

- Gradient = $-E_a / R$
- y-intercept = $\ln A$

From the gradient: $E_a = -\mathrm{gradient} \times R$

### Two-Temperature Form

If the rate constant is known at two temperatures:

$$\ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

**Worked example 3:** The rate constant for a reaction is $3.46 \times 10^{-5} \mathrm{ s}^{-1}$ at
$298 \mathrm{ K}$ and $1.50 \times 10^{-3} \mathrm{ s}^{-1}$ at $350 \mathrm{ K}$. Calculate $E_a$.

<details>
<summary>Answer</summary>

$$\ln\left(\frac{1.50 \times 10^{-3}}{3.46 \times 10^{-5}}\right) = \frac{E_a}{8.314}\left(\frac{1}{298} - \frac{1}{350}\right)$$

$$\ln(43.35) = \frac{E_a}{8.314}(0.003356 - 0.002857)$$

$$3.770 = \frac{E_a}{8.314}(0.000499)$$

$$E_a = \frac{3.770 \times 8.314}{0.000499} = \frac{31.34}{0.000499} = 62800 \mathrm{ J/mol} = 62.8 \mathrm{ kJ/mol}$$

</details>

**Worked example 4:** A reaction has $E_a = 75.0 \mathrm{ kJ/mol}$. The rate constant at
$300 \mathrm{ K}$ is $2.50 \times 10^{-3} \mathrm{ s}^{-1}$. Calculate the rate constant at
$320 \mathrm{ K}$.

<details>
<summary>Answer</summary>

$$\ln\left(\frac{k_2}{2.50 \times 10^{-3}}\right) = \frac{75000}{8.314}\left(\frac{1}{300} - \frac{1}{320}\right)$$

$$\ln\left(\frac{k_2}{2.50 \times 10^{-3}}\right) = 9022 \times (0.003333 - 0.003125)$$

$$\ln\left(\frac{k_2}{2.50 \times 10^{-3}}\right) = 9022 \times 0.000208 = 1.877$$

$$\frac{k_2}{2.50 \times 10^{-3}} = e^{1.877} = 6.534$$

$$k_2 = 6.534 \times 2.50 \times 10^{-3} = 1.63 \times 10^{-2} \mathrm{ s}^{-1}$$

</details>

---

## Iodine Clock Reaction

### Overview

The iodine clock reaction is a classic experiment for measuring initial rates. The reaction involves
the oxidation of iodide ions by an oxidising agent (e.g., peroxydisulfate):

$$\mathrm{S}_2\mathrm{O}_8^{2-} + 2\mathrm{I}^- \to 2\mathrm{SO}_4^{2-} + \mathrm{I}_2$$

A small, fixed amount of sodium thiosulfate and starch are added. The thiosulfate reacts with iodine
as it forms:

$$\mathrm{I}_2 + 2\mathrm{S}_2\mathrm{O}_3^{2-} \to 2\mathrm{I}^- + \mathrm{S}_4\mathrm{O}_6^{2-}$$

Once all the thiosulfate is consumed, free iodine accumulates and reacts with starch to produce a
blue-black colour.

### Determining the Rate

The time for the colour change ($t$) is measured. The rate is proportional to $1/t$:

$$\mathrm{Rate} \propto \frac{1}{t}$$

By varying the concentration of one reactant while keeping others constant, the order with respect
to each reactant can be determined.

### Example Data Analysis

| Experiment | $[\mathrm{S}_2\mathrm{O}_8^{2-}]$ (mol/dm$^3$) | $[\mathrm{I}^-]$ (mol/dm$^3$) | Time (s) |
| ---------- | ------------------------------------------ | --------------------------- | -------- |
| 1          | 0.040                                      | 0.040                       | 48       |
| 2          | 0.080                                      | 0.040                       | 24       |
| 3          | 0.040                                      | 0.080                       | 24       |

<details>
<summary>Answer</summary>

Exp 1 vs 2: $[\mathrm{S}_2\mathrm{O}_8^{2-}]$ doubles, time halves, rate doubles. First order in
$\mathrm{S}_2\mathrm{O}_8^{2-}$.

Exp 1 vs 3: $[\mathrm{I}^-]$ doubles, time halves, rate doubles. First order in $\mathrm{I}^-$.

Rate equation: $\mathrm{Rate} = k[\mathrm{S}_2\mathrm{O}_8^{2-}][\mathrm{I}^-]$

Overall order = 2.

</details>

---

## Common Pitfalls

1. **Assuming order equals stoichiometry:** The orders in the rate equation must be determined
   experimentally. They are not necessarily the same as the coefficients in the balanced equation.

2. **Confusing rate and rate constant:** The rate depends on concentrations; the rate constant ($k$)
   does not (it depends only on temperature and the presence of a catalyst).

3. **Wrong units for the rate constant:** Always derive the units of $k$ from the rate equation. A
   first-order rate constant has units s$^{-1}$, not mol dm$^{-3}$ s$^{-1}$.

4. **Forgetting to convert temperature to Kelvin:** The Arrhenius equation requires absolute
   temperature in Kelvin, not degrees Celsius.

5. **Misinterpreting Maxwell-Boltzmann diagrams:** Increasing temperature shifts the peak right AND
   lowers it, but the total area stays the same. The curve never touches the x-axis.

6. **Catalyst misconceptions:** A catalyst does NOT start a reaction, does NOT increase the amount
   of product, and does NOT change the enthalpy change of the reaction.

7. **Using the wrong $R$ value:** In the Arrhenius equation, use $R = 8.314$ J/(mol K) when $E_a$ is
   in joules. Convert kJ to J before substituting.

---

## Practice Problems

### Problem 1

For the reaction
$2\mathrm{NO}_{(g)} + 2\mathrm{H}_{2(g)} \to \mathrm{N}_{2(g)} + 2\mathrm{H}_2\mathrm{O}_{(g)}$, the following
data were obtained:

| Experiment | $[\mathrm{NO}]$ (mol/dm$^3$) | $[\mathrm{H}_2]$ (mol/dm$^3$) | Initial Rate (mol dm$^{-3}$ s$^{-1}$) |
| ---------- | -------------------------- | --------------------------- | ------------------------------------- |
| 1          | 0.010                      | 0.010                       | $1.2 \times 10^{-5}$                  |
| 2          | 0.020                      | 0.010                       | $4.8 \times 10^{-5}$                  |
| 3          | 0.010                      | 0.020                       | $2.4 \times 10^{-5}$                  |

Determine the rate equation, the rate constant, and the overall order.

<details>
<summary>Answer</summary>

Exp 1 vs 2: [NO] doubles, rate quadruples ($1.2 \times 10^{-5} \to 4.8 \times 10^{-5}$). Second
order in NO.

Exp 1 vs 3: $[\mathrm{H}_2]$ doubles, rate doubles. First order in $\mathrm{H}_2$.

Rate equation: $\mathrm{Rate} = k[\mathrm{NO}]^2[\mathrm{H}_2]$

$k = \dfrac{1.2 \times 10^{-5}}{(0.010)^2 \times 0.010} = \dfrac{1.2 \times 10^{-5}}{1.0 \times 10^{-6}} = 12.0 \mathrm{ dm}^6 \mathrm{ mol}^{-2} \mathrm{ s}^{-1}$

Overall order = $2 + 1 = 3$

</details>

### Problem 2

The rate constant for a first-order reaction is $5.00 \times 10^{-4} \mathrm{ s}^{-1}$ at
$300 \mathrm{ K}$. The activation energy is $65.0 \mathrm{ kJ/mol}$. Calculate the rate constant at
$320 \mathrm{ K}$.

<details>
<summary>Answer</summary>

$$\ln\left(\frac{k_2}{5.00 \times 10^{-4}}\right) = \frac{65000}{8.314}\left(\frac{1}{300} - \frac{1}{320}\right)$$

$$= 7820 \times (0.003333 - 0.003125) = 7820 \times 0.000208 = 1.627$$

$$\frac{k_2}{5.00 \times 10^{-4}} = e^{1.627} = 5.089$$

$$k_2 = 5.089 \times 5.00 \times 10^{-4} = 2.54 \times 10^{-3} \mathrm{ s}^{-1}$$

</details>

### Problem 3

In an iodine clock experiment, the following data were collected:

| Experiment | $[\mathrm{S}_2\mathrm{O}_8^{2-}]$ (mol/dm$^3$) | $[\mathrm{I}^-]$ (mol/dm$^3$) | Time (s) |
| ---------- | ------------------------------------------ | --------------------------- | -------- |
| 1          | 0.020                                      | 0.020                       | 60       |
| 2          | 0.040                                      | 0.020                       | 30       |
| 3          | 0.020                                      | 0.040                       | 15       |

Determine the order with respect to each reactant and the overall order.

<details>
<summary>Answer</summary>

Exp 1 vs 2: $[\mathrm{S}_2\mathrm{O}_8^{2-}]$ doubles, time halves. Rate doubles. First order in
$\mathrm{S}_2\mathrm{O}_8^{2-}$.

Exp 1 vs 3: $[\mathrm{I}^-]$ doubles, time becomes $60/4 = 15$ s. Rate quadruples. Second order in
$\mathrm{I}^-$.

Rate equation: $\mathrm{Rate} = k[\mathrm{S}_2\mathrm{O}_8^{2-}][\mathrm{I}^-]^2$

Overall order = $1 + 2 = 3$

</details>

### Problem 4

Sketch and label the Maxwell-Boltzmann distribution curves at $T_1 = 300 \mathrm{ K}$ and
$T_2 = 400 \mathrm{ K}$ on the same axes. Mark the activation energy $E_a$ and shade the area
representing particles with energy $\geq E_a$ at each temperature. Explain why the rate increases
with temperature in terms of the distribution.

<details>
<summary>Answer</summary>

At $T_1$ (300 K): the curve peaks at lower energy, with a smaller fraction of particles exceeding
$E_a$.

At $T_2$ (400 K): the curve is broader and shifted right, peaking at higher energy. A significantly
larger fraction of particles now exceeds $E_a$.

The rate increase with temperature is primarily because more particles have kinetic energy
$\geq E_a$, leading to a larger proportion of successful collisions. The increase in collision
frequency is a secondary, smaller effect.

Both curves start at the origin, never touch the x-axis, and enclose the same total area.

</details>

### Problem 5

Explain, with reference to collision theory and the Maxwell-Boltzmann distribution, why adding a
catalyst increases the rate of a reaction but does not increase the yield of products at
equilibrium.

<details>
<summary>Answer</summary>

A catalyst provides an alternative reaction pathway with a lower activation energy ($E_a$). On the
Maxwell-Boltzmann distribution, the $E_a$ threshold moves to the left. A larger fraction of
particles now has energy $\geq E_a$, so the proportion of successful collisions increases, and the
rate increases.

The catalyst lowers $E_a$ equally for both the forward and reverse reactions. Therefore, both the
forward and reverse rates increase by the same factor. The ratio of forward to reverse rates (the
equilibrium constant $K$) remains unchanged. Since $K$ is unchanged, the position of equilibrium and
the equilibrium yield of products remain the same.

</details>

### Problem 6

A reaction has the rate equation $\mathrm{Rate} = k[\mathrm{P}]^2[\mathrm{Q}]$. At a certain temperature,
when $[\mathrm{P}] = 0.30 \mathrm{ mol/dm}^3$ and $[\mathrm{Q}] = 0.20 \mathrm{ mol/dm}^3$, the rate is
$1.08 \times 10^{-2} \mathrm{ mol dm}^{-3} \mathrm{ s}^{-1}$. Calculate the rate constant and its units.

If the concentration of P is tripled and the concentration of Q is doubled, by what factor does the
rate increase?

<details>
<summary>Answer</summary>

$$k = \frac{\mathrm{Rate}}{[\mathrm{P}]^2[\mathrm{Q}]} = \frac{1.08 \times 10^{-2}}{(0.30)^2 \times 0.20} = \frac{1.08 \times 10^{-2}}{0.09 \times 0.20} = \frac{1.08 \times 10^{-2}}{0.018} = 0.60 \mathrm{ dm}^6 \mathrm{ mol}^{-2} \mathrm{ s}^{-1}$$

New rate factor: $[\mathrm{P}]$ triples (factor of $3^2 = 9$), $[\mathrm{Q}]$ doubles (factor of 2).

Overall factor = $9 \times 2 = 18$.

The rate increases by a factor of 18.

</details>

### Problem 7

Explain why a small increase in temperature (e.g., from 298 K to 308 K) causes a much larger
increase in reaction rate than would be predicted by the increase in collision frequency alone.

<details>
<summary>Answer</summary>

The collision frequency increases only slightly with temperature (proportional to $\sqrt{T}$), which
would predict roughly a $\sqrt{308/298} \approx 1.017$, or about 1.7% increase.

However, the actual rate increase is much larger (approximately doubling for a 10 K increase)
because the exponential dependence on $E_a / RT$ in the Arrhenius equation means that even a small
temperature increase dramatically increases the fraction of molecules exceeding $E_a$.

On the Maxwell-Boltzmann distribution, the area under the curve beyond $E_a$ increases
disproportionately as temperature rises. This is the dominant factor in the rate increase, not the
collision frequency.

</details>

---

## Practical Techniques for Measuring Rates

### Continuous Monitoring Methods

These methods measure the concentration (or a quantity proportional to it) continuously throughout
the reaction.

**Gas syringe method:** As the reaction produces gas, the volume is recorded at regular time
intervals. A graph of volume vs time gives a curve whose gradient at any point equals the rate.

**Mass loss method:** The reaction flask is placed on a balance. As gas escapes, the mass decreases.
The rate of mass loss at any point equals the reaction rate.

**Colorimetry:** For reactions involving a coloured species, a colorimeter measures absorbance over
time. Absorbance is proportional to concentration (Beer-Lambert law), so the rate can be determined
from the absorbance-time graph.

**Conductivity method:** For reactions that change the number or type of ions in solution (e.g.,
hydrolysis of an ester producing a carboxylic acid), the conductivity is measured over time.

### Discontinuous Monitoring Methods

These methods involve taking samples (aliquots) from the reaction at regular intervals and analysing
them.

**Titration:** A sample is withdrawn, the reaction is quenched (e.g., by cooling or adding a
reactant that stops the reaction), and the concentration is determined by titration.

**Quenching techniques:** Common methods include rapid cooling, dilution with cold water, or adding
a chemical that reacts with a catalyst or reactant.

### Choosing the Right Method

| Scenario                    | Best Method                         |
| --------------------------- | ----------------------------------- |
| Gas-producing reaction      | Gas syringe or mass loss            |
| Colour change               | Colorimetry                         |
| Change in ion concentration | Conductivity                        |
| Acid-base reaction          | Titration of aliquots               |
| Slow reaction               | Titration of aliquots               |
| Fast reaction               | Continuous monitoring (colorimetry) |

---

## Half-Life of Reactions

### Definition

The half-life ($t_{1/2}$) is the time taken for the concentration of a reactant to decrease to half
its initial value.

### Zero-Order Half-Life

$$t_{1/2} = \frac{[\mathrm{A}]_0}{2k}$$

The half-life depends on the initial concentration. It increases as concentration decreases.

### First-Order Half-Life

$$t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}$$

The half-life is **independent** of the initial concentration. This is a defining characteristic of
first-order reactions.

Radioactive decay is a first-order process.

### Second-Order Half-Life

$$t_{1/2} = \frac{1}{k[\mathrm{A}]_0}$$

The half-life depends on the initial concentration. It increases as concentration decreases.

### Using Half-Life to Determine Order

| Order  | Effect of doubling initial concentration on $t_{1/2}$ |
| ------ | ----------------------------------------------------- |
| Zero   | Doubles                                               |
| First  | No change                                             |
| Second | Halves                                                |

**Worked example 8:** In a first-order decomposition, the concentration falls from 0.800 mol/dm$^3$
to 0.200 mol/dm$^3$ in 120 s. Calculate the half-life and the rate constant.

<details>
<summary>Answer</summary>

The concentration halves twice: $0.800 \to 0.400 \to 0.200$.

Two half-lives = 120 s, so $t_{1/2} = 60 \mathrm{ s}$.

$k = \dfrac{0.693}{t_{1/2}} = \dfrac{0.693}{60} = 0.01155 \mathrm{ s}^{-1}$

</details>

---

## Determining Order from Concentration-Time Graphs

### Zero-Order

A straight line with negative gradient when concentration is plotted against time.

$$[\mathrm{A}] = [\mathrm{A}]_0 - kt$$

### First-Order

A curve where a plot of $\ln[\mathrm{A}]$ vs time gives a straight line with gradient $-k$.

$$\ln[\mathrm{A}] = \ln[\mathrm{A}]_0 - kt$$

Alternatively, a plot of $\log_{10}[\mathrm{A}]$ vs time gives a straight line with gradient
$-k/2.303$.

### Second-Order

A curve where a plot of $1/[\mathrm{A}]$ vs time gives a straight line with gradient $+k$.

$$\frac{1}{[\mathrm{A}]} = \frac{1}{[\mathrm{A}]_0} + kt$$

### Summary

| Order  | Linear Plot            | Gradient |
| ------ | ---------------------- | -------- |
| Zero   | $[\mathrm{A}]$ vs $t$    | $-k$     |
| First  | $\ln[\mathrm{A}]$ vs $t$ | $-k$     |
| Second | $1/[\mathrm{A}]$ vs $t$  | $+k$     |

**Worked example 9:** The following data were collected for the decomposition of a substance X:

| Time (s) | $[\mathrm{X}]$ (mol/dm$^3$) | $\ln[\mathrm{X}]$ | $1/[\mathrm{X}]$ |
| -------- | ------------------------- | --------------- | -------------- |
| 0        | 0.100                     | $-2.303$        | 10.0           |
| 30       | 0.0707                    | $-2.649$        | 14.1           |
| 60       | 0.0500                    | $-2.996$        | 20.0           |
| 90       | 0.0354                    | $-3.340$        | 28.3           |
| 120      | 0.0250                    | $-3.689$        | 40.0           |

Determine the order of reaction.

<details>
<summary>Answer</summary>

Check if $\ln[\mathrm{X}]$ vs $t$ is linear:

Gradient from first and last points:
$\dfrac{-3.689 - (-2.303)}{120 - 0} = \dfrac{-1.386}{120} = -0.01155 \mathrm{ s}^{-1}$

Check intermediate: $\dfrac{-2.649 - (-2.303)}{30} = -0.01153$,
$\dfrac{-2.996 - (-2.649)}{30} = -0.01157$.

The gradients are consistent (all approximately $-0.0116 \mathrm{ s}^{-1}$), confirming first order.

$k = 0.0116 \mathrm{ s}^{-1}$

</details>

---

## Factors Affecting Rate in Real-World Contexts

### Refrigeration and Food Preservation

Lowering temperature slows the rate of biochemical reactions (enzyme-catalysed decomposition) that
cause food spoilage. Each $10^\circ$C reduction approximately halves the rate.

### Pressure Cookers

Higher pressure raises the boiling point of water, allowing food to cook at temperatures above
$100^\circ$C. The higher temperature dramatically increases the rate of cooking reactions.

### Catalytic Converters Revisited

At room temperature, the conversion of CO and NO$_x$ is negligibly slow. The catalyst (Pt, Pd, Rh)
lowers the activation energy so that the reactions proceed at useful rates at exhaust temperatures
(300--600$^\circ$C).

### Dissolving a Solid

Stirring increases the rate of dissolution by:

- Bringing fresh solvent into contact with the solid surface.
- Removing the saturated solution layer around the solid, maintaining a high concentration gradient.

Powdering the solid increases surface area, further increasing the rate.

---

## Summary of Key Equations

| Equation                                  | Use                              |
| ----------------------------------------- | -------------------------------- |
| $\mathrm{Rate} = k[\mathrm{A}]^m[\mathrm{B}]^n$ | Rate equation                    |
| $\ln k = \ln A - E_a/(RT)$                | Arrhenius equation (linear form) |
| $\ln(k_2/k_1) = (E_a/R)(1/T_1 - 1/T_2)$   | Two-temperature Arrhenius        |
| $t_{1/2} = 0.693/k$                       | First-order half-life            |
| $\ln[\mathrm{A}] = \ln[\mathrm{A}]_0 - kt$    | First-order integrated rate law  |
| $\mathrm{Rate} \propto 1/t$                 | Clock reaction initial rate      |
